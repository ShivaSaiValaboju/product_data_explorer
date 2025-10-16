import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*'
      }
    ];
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001'
  }
};

export default nextConfig;
