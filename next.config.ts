import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
        pathname: "/docs/**", // Allows images under /docs
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**", // Allows everything from cdn
      },
    ],
    // Optional: for backward compatibility with older image usage
    domains: ["dummyjson.com", "cdn.dummyjson.com"],
  },
};

export default nextConfig;
