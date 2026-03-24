// Service Worker for Progressive Web App
// Handles offline caching and performance optimization

const CACHE_NAME = 'pokemon-generator-v2';
const RUNTIME_CACHE = 'pokemon-runtime-v2';
const API_CACHE = 'pokemon-api-v1';

// Assets to cache on install
const PRECACHE_URLS = [
  '/',
  '/pokedex',
  '/guide',
  '/manifest.json',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE, API_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - handle same-origin and cross-origin differently
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // Handle PokeAPI requests separately (cross-origin, cache-first with TTL)
  if (url.hostname === 'pokeapi.co') {
    event.respondWith(
      caches.open(API_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request)
            .then((response) => {
              if (response && response.ok) {
                cache.put(event.request, response.clone());
              }
              return response;
            })
            .catch(() => {
              // Return a generic offline JSON response for API fails
              return new Response(
                JSON.stringify({ error: 'offline' }),
                { headers: { 'Content-Type': 'application/json' } }
              );
            });
        });
      })
    );
    return;
  }

  // Handle Pokemon sprite images (cross-origin, cache-first)
  if (url.hostname === 'raw.githubusercontent.com' && url.pathname.includes('PokeAPI/sprites')) {
    event.respondWith(
      caches.open(API_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request)
            .then((response) => {
              if (response && response.ok) {
                cache.put(event.request, response.clone());
              }
              return response;
            })
            .catch(() => {
              return new Response('', { status: 408 });
            });
        });
      })
    );
    return;
  }

  // Skip other cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Same-origin: stale-while-revalidate for pages
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        // Update cache in background (with error handling)
        fetch(event.request)
          .then((response) => {
            if (response && response.ok) {
              caches.open(RUNTIME_CACHE).then((cache) => {
                cache.put(event.request, response.clone());
              });
            }
          })
          .catch(() => {
            // Network unavailable, stale cache is fine
          });
        return cachedResponse;
      }

      // Fetch from network and cache same-origin pages
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Return offline page if available
          return caches.match('/');
        });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
