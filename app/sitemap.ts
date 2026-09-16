import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }> = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" },
    { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/capabilities/structural", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/bim-coordination", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/electrical-mep", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/plumbing-sanitary", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/interior-finishing", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/furniture-joinery", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/metal-aluminum", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capabilities/renovation-maintenance", priority: 0.85, changeFrequency: "monthly" },
    { path: "/work/commercial-office-kazanchis", priority: 0.8, changeFrequency: "monthly" },
    { path: "/start-a-project", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.7, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
