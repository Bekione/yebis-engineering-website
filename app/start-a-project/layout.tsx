import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Start a Project - Tender Intake",
  description:
    "Submit project specifications, architectural drawings, or tender documents to Yebis Engineering for pre-construction assessment and proposal generation.",
  alternates: {
    canonical: `${SITE_URL}/start-a-project`,
  },
  openGraph: {
    title: "Start a Project - Tender Intake | Yebis Engineering",
    description:
      "Submit project specifications, architectural drawings, or tender documents to Yebis Engineering.",
    url: `${SITE_URL}/start-a-project`,
  },
};

export default function StartAProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
