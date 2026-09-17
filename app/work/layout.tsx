import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Project Portfolio & Contracts Archive",
  description:
    "Explore Yebis Engineering's track record across 19+ Ethiopian construction contracts: turnkey multi-story buildings, structural skeletons, healthcare facilities, and interior fit-outs.",
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: "Project Portfolio & Contracts Archive | Yebis Engineering",
    description:
      "Explore Yebis Engineering's track record across 19+ Ethiopian construction contracts.",
    url: `${SITE_URL}/work`,
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
