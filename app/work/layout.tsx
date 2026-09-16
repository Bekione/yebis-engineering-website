import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Project Portfolio & Contracts Archive",
  description:
    "Explore Yebis Engineering PLC's track record across 14+ verified Ethiopian construction contracts: commercial developments, structural framing, healthcare facilities, and turnkey interior fit-outs.",
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: "Project Portfolio & Contracts Archive | Yebis Engineering PLC",
    description:
      "Explore Yebis Engineering PLC's track record across 14+ verified Ethiopian construction contracts.",
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
