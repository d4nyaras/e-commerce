import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["https://dummyjson.com/docs"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;
