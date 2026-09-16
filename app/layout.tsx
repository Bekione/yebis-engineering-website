import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yebis Engineering PLC — From Structure to Finish",
  description:
    "Grade 1 Ethiopian general contractor delivering structural construction, MEP, interior finishing, joinery and metalworks for residential, commercial and institutional projects across Addis Ababa and Ethiopia.",
  authors: [{ name: "Yebis Engineering PLC" }],
  openGraph: {
    title: "Yebis Engineering PLC — From Structure to Finish",
    description:
      "Grade 1 Ethiopian general contractor delivering structural construction, MEP, interior finishing, joinery and metalworks for residential, commercial and institutional projects across Addis Ababa and Ethiopia.",
    type: "website",
    locale: "en_US",
    siteName: "Yebis Engineering PLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yebis Engineering PLC — From Structure to Finish",
    description:
      "Grade 1 Ethiopian general contractor delivering structural construction, MEP, interior finishing, joinery and metalworks across Ethiopia.",
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B3338",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", spaceGrotesk.variable, inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <SiteHeader />
        <main className="w-full pt-20 lg:pt-[104px] flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
