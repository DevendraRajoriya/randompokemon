import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '10.16.243.68',
    '10.109.5.68',
    '192.168.1.1',
    '*.local',
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // Cache images for 24 hours
    deviceSizes: [640, 750, 828, 1080, 1200], // Optimized for common mobile/tablet sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Smaller icon sizes
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
  // Optimize React for production
  reactStrictMode: true,
  // Cache static assets
  headers: async () => [
    // ── HTML pages: NEVER cache on mobile or anywhere
    // Mobile browsers will serve stale HTML (with wrong JS chunk hashes) from
    // disk cache, which silently breaks React initialisation on soft refresh.
    {
      source: "/((?!_next|api).*)",
      headers: [
        { key: "Cache-Control",              value: "no-store, must-revalidate" },
        { key: "Pragma",                      value: "no-cache" },
        // Opt this page out of bfcache on mobile (prevents frozen React state)
        { key: "Vary",                        value: "Accept" },
      ],
    },
    // ── Other static assets
    {
      source: "/:all*(svg|jpg|png|webp|avif|ico)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // ── Security headers for all routes
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options",        value: "DENY" },
        { key: "X-XSS-Protection",       value: "1; mode=block" },
      ],
    },
  ],
};

export default nextConfig;
