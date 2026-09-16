import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Field Notes & Construction Guides | Yebis Engineering PLC",
  description:
    "Practical contractor insights, construction guides, and field advice from Yebis Engineering PLC. Best practices for turnkey building, finishing incomplete skeletons, MEP coordination, aluminum fabrication, and building renovation in Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/insights`,
  },
  openGraph: {
    title: "Field Notes & Construction Guides | Yebis Engineering PLC",
    description:
      "Practical contractor insights, construction guides, and field advice from Yebis Engineering PLC.",
    url: `${SITE_URL}/insights`,
  },
};

const FEATURED = {
  tag: "CONTRACTOR FIELD ADVISORY",
  dispatch: "FIELD BRIEFING 01 // SKELETON COMPLETION & FIT-OUT",
  title:
    "Taking Over and Finishing Incomplete Concrete Skeletons: A Contractor's Guide for Property Owners in Addis Ababa",
  abstract:
    "Across Addis Ababa and regional hubs, numerous multi-story developments pause construction at the bare reinforced concrete skeleton stage. Transitioning an exposed frame into an occupied commercial or residential asset requires structured structural integrity checks, MEP conduit tracing, water ingress remediation, and sequenced interior trades. This practical briefing outlines Yebis Engineering's proven methodology for completing structural skeletons on schedule and within budget without costly rework.",
  image: IMG.superstructure,
  specs: [
    { label: "Execution Model", value: "Skeleton to Turnkey" },
    { label: "Core Disciplines", value: "Structural, MEP & Finishing" },
    { label: "Building Typologies", value: "G+2 to G+10 Commercial/Res." },
    { label: "Code Standard", value: "Ethiopian Building Code (EBCS)" },
  ],
  readTime: "8 MIN CONTRACTOR READ",
  date: "PRACTICAL GUIDE",
};

const ARTICLES = [
  {
    id: "INS-001",
    category: "CONTRACTING STRATEGY",
    title:
      "Turnkey Contracting vs. Skeleton-Only Construction: What Ethiopian Developers Need to Know",
    excerpt:
      "A practical comparison of contracting the structural skeleton only versus committing to full turnkey delivery. How material market fluctuations (cement, rebar) and trade coordination impact total project delivery.",
    image: IMG.concretePour,
    readTime: "7 MIN",
    date: "STRATEGY GUIDE",
  },
  {
    id: "INS-002",
    category: "ELECTRICAL & PLUMBING (MEP)",
    title:
      "Proper MEP Sequencing: Why Conduits and Pressure Tests Must Precede Plastering and Screeds",
    excerpt:
      "Preventing broken walls and leaking pipes. Why electrical conduit paths, distribution boxes, and sanitary piping must undergo hydrostatic testing before gypsum partitions and floor screeds are placed.",
    image: IMG.plumbing,
    readTime: "6 MIN",
    date: "TECHNICAL NOTE",
  },
  {
    id: "INS-003",
    category: "ALUMINUM & METALWORK",
    title:
      "Selecting Windows, External Doors & Compound Gates: Powder-Coated Aluminum vs. Hardwood Fabrication",
    excerpt:
      "Comparing weather resistance, UV durability, security, and long-term maintenance between high-grade aluminum systems and solid timber for Ethiopian highland conditions.",
    image: IMG.facade,
    readTime: "6 MIN",
    date: "MATERIALS GUIDE",
  },
  {
    id: "INS-004",
    category: "RENOVATION & REPAIR",
    title:
      "Restoring Aging or Damaged Buildings: Remedying Roof Slab Leaks, Wall Cracks, and Dampness",
    excerpt:
      "A contractor's diagnostic approach to repairing older villas and commercial properties. Proven techniques for elastomeric slab waterproofing, crack stabilization, and facade rejuvenation.",
    image: IMG.renovation,
    readTime: "8 MIN",
    date: "FIELD ADVISORY",
  },
  {
    id: "INS-005",
    category: "STRUCTURAL QUALITY CONTROL",
    title:
      "On-Site Concrete Quality Control: Slump Testing, Cube Crushing, and 28-Day Curing in Ethiopia",
    excerpt:
      "How Yebis verifies C25/C30 concrete mixes on the job site. Enforcing proper water-cement ratios, aggregate grading, and strict water curing protocols to guarantee structural safety.",
    image: IMG.towers,
    readTime: "7 MIN",
    date: "SITE PROTOCOL",
  },
  {
    id: "INS-006",
    category: "INTERIOR ARCHITECTURE & FINISHING",
    title:
      "Interior Partitions & Finishing: Gypsum Drywall vs. Hollow Concrete Block for Modern Spaces",
    excerpt:
      "Evaluating dead-load weight, acoustic insulation, flexibility, and installation speed when dividing commercial office spaces, healthcare rooms, and residential apartment interiors.",
    image: IMG.boardroom,
    readTime: "6 MIN",
    date: "FINISHING GUIDE",
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
                FIELD ARCHIVE // CONTRACTOR INTELLIGENCE &amp; PROJECT GUIDES
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 font-label-sm text-label-sm text-secondary">
              <span>ETHIOPIAN BUILDING CODE (EBCS)</span>
              <span>•</span>
              <span>GRADE 1 CONTRACTOR (GC-1)</span>
            </div>
          </div>
          {/* Main Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="font-label-md text-label-md tracking-wider text-primary font-bold uppercase">
                Field Notes &amp; Construction Guides
              </span>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl tracking-tight text-on-surface font-bold uppercase max-w-4xl">
                Practical Intelligence for Property Owners &amp; Developers.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Practical guidance on taking over bare concrete skeletons,
                coordinating electrical and plumbing rough-ins before
                finishing, quality control during concrete casting, and
                renovating existing properties across Ethiopia.
              </p>
            </div>
            {/* Telemetry Data Grid */}
            <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/40 p-5 grid grid-cols-2 gap-4 shadow-sm">
              {[
                {
                  label: "Contract Modalities",
                  value: "Turnkey",
                  badge: "& SKELETON",
                  highlight: true,
                },
                {
                  label: "In-House Disciplines",
                  value: "08",
                  badge: "DIVISIONS",
                },
                {
                  label: "Building Code",
                  value: "EBCS",
                  badge: "COMPLIANT",
                  highlight: true,
                },
                {
                  label: "Project Scales",
                  value: "Villas",
                  badge: "TO TOWERS",
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
                    <span className="font-headline-md text-[20px] leading-[28px] font-bold text-on-surface">
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
              OPERATIONAL SCOPE // ADDIS ABABA &amp; REGIONS
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
                    SKELETON COMPLETION &amp; FIT-OUT STRATEGY
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
                  <span className="text-primary font-semibold">
                    {FEATURED.date}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">
                  Overview &amp; Practical Roadmap
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {FEATURED.abstract}
                </p>
              </div>
              <div className="flex items-center gap-space-md pt-space-md border-t border-outline-variant/30">
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm cursor-pointer hover:bg-primary transition-colors"
                >
                  <span className="tracking-wider">Inquire Skeleton Finishing</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
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
                Contractor Guides &amp; Field Notes
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase hidden md:inline">
              PRACTICAL CONSTRUCTION ADVISORIES // ETHIOPIA
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
                    <span className="text-primary font-semibold">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[16px] leading-[22px] text-on-surface uppercase font-bold">
                    {article.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/20 mt-auto">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {article.readTime}
                    </span>
                    <Link
                      href="/start-a-project"
                      className="font-label-sm text-label-sm text-primary font-bold hover:underline"
                    >
                      CONSULT WITH US →
                    </Link>
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
              Planning a building project or finishing an existing structure?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface">
              From new construction to skeleton completion, interior finishing,
              and renovations—our engineers assess your site and deliver
              transparent, realistic proposals.
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
