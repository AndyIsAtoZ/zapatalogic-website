import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/technology-advisory", destination: "/#services", permanent: true },
      { source: "/apple-first-consulting", destination: "/#services", permanent: true },
      { source: "/ai-deployment", destination: "/#services", permanent: true },
      { source: "/industries", destination: "/#about", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
