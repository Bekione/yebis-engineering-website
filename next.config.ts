import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio-doc",
        destination: "/assets/Yebis_Engineering_Corporate_Portfolio.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
