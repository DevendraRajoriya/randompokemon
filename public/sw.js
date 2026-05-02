// Service Worker for Progressive Web App
// Next.js-compatible caching strategy
//
// Strategy per resource type:
//   HTML pages       → Network-only (NEVER cache — Next.js rebuilds change chunk hashes)
//   /_next/static/   → Cache-first in PRODUCTION only (Turbopack dev uses non-hashed filenames)
//   PokeAPI          → Cache-first  (rarely changes, saves bandwidth)
//   Sprites          → Cache-first  (static images)
//   Everything else  → Network-first
//
// IMPORTANT: In dev (localhost / LAN IPs), /_next/ chunks are NOT cached because
// Turbopack reuses the same filename (e.g. src_abc._.js) with new content on every
// hot reload — caching them causes hydration mismatches.

// Bump this version string to force-clear all caches on next SW activation.
const CACHE_VERSION = 'v4';
const STATIC_CACHE  = `pokegen-static-${CACHE_VERSION}`;
const API_CACHE     = `pokegen-api-${CACHE_VERSION}`;

// Detect development environment (localhost or RFC-1918 private IPs)
const isDev = (
  self.location.hostname === 'localhost' ||
  self.location.hostname === '127.0.0.1' ||
  self.location.hostname.startsWith('10.') ||
  self.location.hostname.startsWith('192.168.') ||
  /^172\.(1[6-9]|2\d|3[01])\./.test(self.location.hostname)
);

// ─── Install ──────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  // Skip waiting so the new SW activates immediately — no waiting for old SW to die
  self.skipWaiting();
});

// ─── Activate ─────────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  const KEEP = [STATIC_CACHE, API_CACHE];
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.map((name) => {
          if (!KEEP.includes(name)) {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

// ─── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  // Only intercept GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // ── 1. PokeAPI → Cache-first (no TTL needed; URLs don't change for same data)
  if (url.hostname === 'pokeapi.co') {
    // Skip cache-busted requests (we added ?_cb= param) — always go to network
    if (url.searchParams.has('_cb')) return;
    event.respondWith(cacheFirst(event.request, API_CACHE));
    return;
  }

  // ── 2. Pokemon sprites (GitHub) → Cache-first
  if (
    url.hostname === 'raw.githubusercontent.com' &&
    url.pathname.includes('PokeAPI/sprites')
  ) {
    event.respondWith(cacheFirst(event.request, API_CACHE));
    return;
  }

  // ── 3. Skip other cross-origin requests (fonts, analytics, etc.)
  if (url.origin !== self.location.origin) return;

  // ── 4. Next.js chunks → Network-only in DEV, Cache-first in PROD
  //    In Turbopack dev mode, filenames like src_abc._.js stay the same
  //    across hot reloads but their content changes → caching them breaks hydration.
  if (url.pathname.startsWith('/_next/')) {
    if (isDev) {
      return; // Never intercept in dev — let browser go to network always
    }
    // In production, _next/static/ is content-hashed → safe to cache forever
    if (url.pathname.startsWith('/_next/static/')) {
      event.respondWith(cacheFirst(event.request, STATIC_CACHE));
    }
    // Other _next/ paths (HMR, data, etc.) → network-only even in prod
    return;
  }

  // ── 5. HTML pages → Network-only (always fresh)
  const acceptsHtml = event.request.headers.get('accept')?.includes('text/html');
  if (acceptsHtml) {
    return;
  }

  // ── 6. Everything else (manifest, icons, etc.) → Network-first
  event.respondWith(networkFirst(event.request, STATIC_CACHE));
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Cache-first: return cached copy instantly; fall back to network and cache. */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

/** Network-first: try network, cache on success; fall back to cache. */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response('', { status: 408, statusText: 'Offline' });
  }
}

// ─── Message handler ──────────────────────────────────────────────────────────
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  // Allow pages to request a full cache wipe (e.g. after a forced update)
  if (event.data?.type === 'CLEAR_CACHES') {
    caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n))));
  }
});
