import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["pino", "pino-pretty"],
  experimental: {
    after: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
