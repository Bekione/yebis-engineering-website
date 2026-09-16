import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engineering Insights & Field Briefings",
  description:
    "Technical monographs, field briefings, and engineering intelligence from Yebis Engineering. Geotechnical analysis, concrete mix design for Addis Ababa volcanic clay, and EBCS compliance guides.",
  alternates: {
    canonical: `${SITE_URL}/insights`,
  },
  openGraph: {
    title: "Engineering Insights & Field Briefings | Yebis Engineering PLC",
    description:
      "Technical monographs, field briefings, and engineering intelligence from Yebis Engineering.",
    url: `${SITE_URL}/insights`,
  },
};

const FEATURED = {
  tag: "PRIMARY INVESTIGATION",
  dispatch: "FIELD DISPATCH 014 // GEOTECHNICAL & DEEP FOUNDATIONS",
  title:
    "Optimizing Deep Foundation Systems on Addis Ababa's Volcanic Tuff Substrata",
  abstract:
    "A comprehensive field investigation into bored pile performance under variable volcanic soil conditions in the central Addis Ababa plateau. This monograph analyzes bearing capacity degradation factors observed across 12 commercial foundation projects and proposes revised design parameters for tuff-over-clay transition zones at depths between 8–22 meters.",
  image: IMG.foundation,
  specs: [
    { label: "Investigation Period", value: "18 Months" },
    { label: "Borehole Samples", value: "248" },
    { label: "Projects Analyzed", value: "12" },
    { label: "Depth Range", value: "8-22M" },
  ],
  readTime: "18 MIN TECHNICAL READ",
  date: "2024-Q3",
};

const ARTICLES = [
  {
    id: "FLD-013",
    category: "CONCRETE TECHNOLOGY",
    title:
      "High-Performance Concrete Mix Design for Ethiopian Highland Climate Conditions",
    excerpt:
      "Investigating C40/C50 performance under high-altitude UV exposure, diurnal temperature swings, and volcanic aggregate variability in Addis Ababa construction projects.",
    image: IMG.concretePour,
    readTime: "14 MIN",
    date: "2024-Q2",
  },
  {
    id: "FLD-012",
    category: "FACADE ENGINEERING",
    title:
      "Thermal Break Aluminum Systems: Performance Testing in East African High-Altitude Environments",
    excerpt:
      "Comprehensive thermal cycling and wind-load testing data for unitized curtain wall systems installed at 2,300M+ elevation in Addis Ababa commercial towers.",
    image: IMG.facade,
    readTime: "12 MIN",
    date: "2024-Q2",
  },
  {
    id: "FLD-011",
    category: "MEP SYSTEMS",
    title:
      "Electrical Resilience Under Volatile Grid Conditions: ATS Design for Ethiopian Commercial Buildings",
    excerpt:
      "Automatic Transfer Switch synchronization protocols and generator sizing methodologies for buildings experiencing 8+ power interruptions per week.",
    image: IMG.electrical,
    readTime: "16 MIN",
    date: "2024-Q1",
  },
  {
    id: "FLD-010",
    category: "INTERIOR FINISHING",
    title:
      "Achieving Q4 Gypsum Finish Standards in Tropical Construction Environments",
    excerpt:
      "Moisture management, curing protocols, and jointing techniques for achieving European DIN EN 13914 gypsum surface standards in high-humidity Ethiopian conditions.",
    image: IMG.cleanroom,
    readTime: "10 MIN",
    date: "2024-Q1",
  },
  {
    id: "FLD-009",
    category: "STRUCTURAL ANALYSIS",
    title:
      "Seismic Retrofitting of Existing RC Structures Using Carbon Fiber Reinforcement",
    excerpt:
      "Field application data from 6 commercial building retrofits in Addis Ababa, documenting CFRP wrap application techniques and post-strengthening load test results.",
    image: IMG.renovation,
    readTime: "15 MIN",
    date: "2023-Q4",
  },
  {
    id: "FLD-008",
    category: "JOINERY & MILLWORK",
    title:
      "Kiln Drying Protocols for Ethiopian Hardwood Species in Architectural Applications",
    excerpt:
      "Moisture content management, dimensional stability testing, and CNC machining tolerances for indigenous timber species used in executive interior joinery.",
    image: IMG.joinery,
    readTime: "11 MIN",
    date: "2023-Q4",
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col pt-2 w-full">
      {/* SECTION 1: HEADER & SYSTEM TELEMETRY */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/30 px-6 lg:px-12 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Monospace Section Coordinate */}
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-primary"></span>
              <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
                SYS_REF: INS_ARCHIVE // SEC_FLD-07 // TECHNICAL INTELLIGENCE
                &amp; METHODOLOGY
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 font-label-sm text-label-sm text-secondary">
              <span>PEER_REV: ISO/IEC 17025</span>
              <span>•</span>
              <span>GEO_ZONE: AA_CENTRAL_PLATEAU</span>
            </div>
          </div>
          {/* Main Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="font-label-md text-label-md tracking-wider text-primary font-bold uppercase">
                Field Monographs • Series 2024–2025
              </span>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl tracking-tight text-on-surface font-bold uppercase max-w-4xl">
                From the Field: Engineering Briefings &amp; Technical
                Monographs.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                In-depth analyses of geotechnical challenges, high-performance
                concrete mix designs, facade thermal performance, and statutory
                compliance across the Ethiopian highland built environment.
              </p>
            </div>
            {/* Telemetry Data Grid */}
            <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/40 p-5 grid grid-cols-2 gap-4 shadow-sm">
              {[
                {
                  label: "Monographs Published",
                  value: "18",
                  badge: "DOCS ACTIVE",
                  highlight: true,
                },
                { label: "Research Labs", value: "04", badge: "DISCIPLINES" },
                {
                  label: "Peer-Review Index",
                  value: "99.4%",
                  badge: "AUDITED",
                  highlight: true,
                },
                {
                  label: "Code Alignments",
                  value: "EBCS",
                  badge: "/ EUROCODE",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col border-b border-outline-variant/20 pb-3 last:border-0 last:pt-1"
                >
                  <span className="font-label-sm text-label-sm text-secondary uppercase">
                    {item.label}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-md text-[22px] leading-[30px] font-bold text-on-surface">
                      {item.value}
                    </span>
                    <span
                      className={`font-label-sm text-label-sm ${item.highlight ? "text-primary font-medium" : "text-secondary"}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED LEAD FIELD DOSSIER */}
      <section className="w-full px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-block px-2.5 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {FEATURED.tag}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                {FEATURED.dispatch}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary hidden sm:inline">
              DATUM ELEVATION: 2,348M // ADDIS ABABA BASIN
            </span>
          </div>

          <article className="bg-surface-container-lowest border border-outline-variant/50 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px] bg-inverse-surface border-b lg:border-b-0 lg:border-r border-outline-variant/30 flex flex-col justify-between p-6">
              <Image
                src={FEATURED.image}
                alt={FEATURED.title}
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary"></span>
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                    GEOTECHNICAL &amp; DEEP FOUNDATIONS
                  </span>
                </div>
                <h2 className="font-headline-lg text-[28px] leading-[36px] lg:text-headline-lg text-on-primary uppercase font-bold max-w-2xl">
                  {FEATURED.title}
                </h2>
              </div>
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FEATURED.specs.map((s) => (
                  <div
                    key={s.label}
                    className="bg-inverse-surface/70 backdrop-blur-sm p-3 flex flex-col gap-1"
                  >
                    <span className="font-label-sm text-label-sm text-primary-fixed uppercase">
                      {s.label}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
                  <span>{FEATURED.readTime}</span>
                  <span>{FEATURED.date}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">
                  Abstract
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {FEATURED.abstract}
                </p>
              </div>
              <div className="flex items-center gap-space-md pt-space-md border-t border-outline-variant/30">
                <span className="inline-flex items-center gap-space-xs bg-inverse-surface text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm cursor-pointer hover:bg-primary transition-colors">
                  <span className="tracking-wider">Read Full Monograph</span>
                  <span className="text-primary-fixed">→</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 3: ARTICLE GRID */}
      <section className="w-full bg-surface-container-low px-6 lg:px-12 py-space-xl border-t border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 bg-inverse-surface"></span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                Field Dispatch Archive
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase hidden md:inline">
              CHRONOLOGICAL // PEER-REVIEWED PUBLICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-0.5 bg-inverse-surface/90 text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-sm flex-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
                    <span>{article.id}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-headline-sm text-[16px] leading-[22px] text-on-surface uppercase font-bold">
                    {article.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/20 mt-auto">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {article.readTime} READ
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold cursor-pointer hover:underline">
                      READ BRIEFING →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-inverse-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <h2 className="font-headline-md text-headline-md text-on-primary uppercase font-bold">
              Have a technical challenge?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface">
              Our engineering bureau can assess your project&apos;s technical
              requirements and provide detailed methodology proposals.
            </p>
          </div>
          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-primary transition-all duration-150 shrink-0"
          >
            <span className="tracking-wider">Start a Project</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
