import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    if (process.env.NODE_ENV !== "development") {
      return [];
    }
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;
