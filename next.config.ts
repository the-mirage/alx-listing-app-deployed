import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enables static HTML export
  distDir: 'out',    // Sets the build output directory to 'out'
  images: {
    unoptimized: true,  // Required for static export with images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
