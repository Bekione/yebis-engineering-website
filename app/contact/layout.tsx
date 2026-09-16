import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Commercial Tenders",
  description:
    "Direct communications channel for commercial tenders, subcontractor prequalification, and project inquiries with Yebis Engineering PLC in Addis Ababa, Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact & Commercial Tenders | Yebis Engineering PLC",
    description:
      "Direct communications channel for commercial tenders, subcontractor prequalification, and project inquiries with Yebis Engineering PLC.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
