import type { NextConfig } from "next";

const isMaintenanceMode =
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== undefined
    ? process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
    : process.env.MAINTENANCE_MODE !== undefined
    ? process.env.MAINTENANCE_MODE === "true"
    : true;

const nextConfig: NextConfig = {
  async redirects() {
    if (isMaintenanceMode) {
      return [
        {
          source: "/portfolio-doc",
          destination: "/",
          permanent: false,
        },
        {
          source: "/assets/:file*.pdf",
          destination: "/",
          permanent: false,
        },
        {
          source: "/:file*.pdf",
          destination: "/",
          permanent: false,
        },
      ];
    }
    return [
      {
        source: "/portfolio-doc",
        destination: "/assets/Yebis_Engineering_Corporate_Portfolio.pdf",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    if (isMaintenanceMode) {
      return {
        beforeFiles: [
          {
            source: "/portfolio-doc",
            destination: "/",
          },
          {
            source: "/assets/:file*.pdf",
            destination: "/",
          },
          {
            source: "/:file*.pdf",
            destination: "/",
          },
        ],
        afterFiles: [],
        fallback: [],
      };
    }
    return [];
  },
};

export default nextConfig;
