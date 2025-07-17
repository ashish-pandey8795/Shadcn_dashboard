import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['images.unsplash.com'], // ✅ Add Unsplash domain for <Image />
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
