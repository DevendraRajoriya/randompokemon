import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: [
    '10.16.243.68',
    '10.109.5.68',
    '192.168.1.1',
    '*.local',
  ],
  images: {
    unoptimized: true,
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
  // Optimize React for production
  reactStrictMode: true,
};

export default nextConfig;

