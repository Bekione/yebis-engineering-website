import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us & Corporate Credentials",
  description:
    "Ethiopian-grounded, Grade 1 certified general contractor. Corporate dossier, 5-phase execution model, leadership, equipment fleet, and organizational credentials.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us & Corporate Credentials | Yebis Engineering PLC",
    description:
      "Ethiopian-grounded, Grade 1 certified general contractor. Corporate dossier, 5-phase execution model, and credentials.",
    url: `${SITE_URL}/about`,
  },
};

const METRICS = [
  { label: "Verified Tenders", value: "14 Contracts", detail: "Audited public & NGO tenders" },
  { label: "Historical Value", value: "ETB 28.5M+", detail: "Documented project performance" },
  { label: "Contractor Class", value: "Grade 1 (GC-1)", detail: "Ministry of Urban Development" },
  { label: "Regional Footprint", value: "4 Regions", detail: "Addis Ababa, Oromia, Amhara, SNNPRS" },
  { label: "Contract Breadth", value: "Turnkey & Scopes", detail: "From G+4 blocks to radiation suites" },
  { label: "Standards Compliance", value: "100%", detail: "EBCS & FIDIC contract rigor" },
];

const PHASES = [
  {
    phase: "01",
    title: "Pre-Construction & Planning",
    desc: "Geotechnical surveys, BIM coordination, value engineering, and construction methodology planning. Every project begins with rigorous subsurface investigation and clash-free 3D modeling.",
  },
  {
    phase: "02",
    title: "Civil & Structural Works",
    desc: "Mass excavation, deep foundation installation, reinforced concrete framing, and superstructure erection. Managed through 5-stage pour protocols and real-time quality gates.",
  },
  {
    phase: "03",
    title: "MEP & Building Services",
    desc: "Electrical distribution, plumbing networks, fire protection systems, and HVAC installations. All executed in-house with certified engineers and tested to EBCS compliance.",
  },
  {
    phase: "04",
    title: "Interior Architecture & Finishing",
    desc: "Gypsum ceilings, porcelain flooring, wall treatments, and architectural lighting. Delivered to Q4 DIN finish standards with ±1.5mm laser-verified tolerances.",
  },
  {
    phase: "05",
    title: "Handover & Commissioning",
    desc: "Systematic commissioning, snag list resolution, as-built documentation, and client training. Projects are handed over with complete technical dossiers and warranty packages.",
  },
];

const LEADERSHIP = [
  {
    name: "Yonas Tesfaye",
    role: "Managing Director & Founder",
    image: IMG.portraitMd,
    bio: "25+ years in Ethiopian construction. Founded Yebis Engineering to consolidate fragmented trade scopes under unified engineering governance.",
  },
  {
    name: "Dawit Alemayehu",
    role: "Head of MEP & Building Systems",
    image: IMG.portraitMep,
    bio: "Licensed MEP engineer specializing in high-rise electrical distribution, generator synchronization, and building management systems.",
  },
  {
    name: "Sara Kebede",
    role: "Director of Interior Architecture",
    image: IMG.portraitInteriors,
    bio: "Expert in high-end commercial finishing — from acoustic engineering to bespoke material specification for hospitality and corporate environments.",
  },
  {
    name: "Mulugeta Hailu",
    role: "Operations & Site Management",
    image: IMG.portraitOps,
    bio: "Manages multi-site concurrent operations across Addis Ababa, coordinating 850+ personnel, heavy plant logistics, and safety compliance.",
  },
];

const EQUIPMENT = [
  "Tower Cranes (TC 6024 / TC 7030)",
  "Concrete Boom Pumps (52M Reach)",
  "Hydraulic Excavators (CAT 320/330)",
  "Concrete Batching Plants (60m³/hr)",
  "Steel Formwork Systems (PERI/DOKA)",
  "CNC Joinery Workshop Equipment",
  "Aluminum Fabrication Cutting Lines",
  "Welding & Metal Fab Workshop",
  "Scaffolding Systems (Ring-Lock)",
  "Survey & Total Station Equipment",
  "Material Testing Lab (In-House)",
  "Fleet Vehicles & Site Logistics",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>ETHIOPIA // GRADE 1 GENERAL CONTRACTOR (GC-1) // ADDIS ABABA</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>MINISTRY REG: MOTI/GC-01/ET</span>
            <span className="text-primary font-medium">STATUS: PRE-QUALIFIED TENDER READY</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full border-b border-outline-variant/40 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-xl">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-medium flex items-center gap-space-xs">
              <span className="text-on-surface">■</span> [ CORPORATE DOSSIER // SEC_ABT-01 // ORGANIZATIONAL PROFILE ]
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium hidden md:inline">REV: 2024.Q4 // PUBLIC AUDIT</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-surface-container w-fit border border-outline-variant/40 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                <span>GC-1 GENERAL CONTRACTOR</span>
                <span className="text-primary">•</span>
                <span>STRUCTURAL &amp; TURNKEY INTEGRATION</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Built Through Discipline. Grounded In Ethiopia.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                From deep foundation civil works to artisanal architectural finishing, Yebis Engineering PLC operates as a fully integrated Ethiopian contractor engineered to eradicate project fragmentation.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Founded in Addis Ababa, Yebis was established with a singular operational thesis: complex building developments fail at the unmanaged seams between civil contractors, MEP subcontractors, and interior finishing trades. By consolidating structural engineering, certified MEP installations, dedicated aluminum and metal fabrication yards, and bespoke architectural millwork under a single unified engineering governance, we deliver projects on budget, on schedule, and to exact international tolerances.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>Inspect Our Work</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>View Capabilities</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Spec Card */}
            <div className="lg:col-span-4 bg-surface-container-low border border-outline-variant/50 p-space-lg flex flex-col gap-space-md relative">
              <div className="absolute top-2 right-2 text-outline-variant font-label-sm select-none">+</div>
              <div className="absolute bottom-2 left-2 text-outline-variant font-label-sm select-none">+</div>
              <div className="border-b border-outline-variant/30 pb-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center bg-inverse-surface p-0.5 shrink-0">
                    <Image
                      src="/assets/logo-light.png"
                      alt="Yebis Logo"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </span>
                  <span className="font-bold text-on-surface">YEBIS ENGINEERING PLC</span>
                </div>
                <span className="text-primary font-semibold">GRADE 1 (GC-1)</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/40">
                <Image
                  src={IMG.hero}
                  alt="Yebis Engineering headquarters and construction operations"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-3 py-1 text-label-sm font-label-sm flex justify-between items-center">
                  <span>CORE DRILLING &amp; POURED CAST // BOLE</span>
                  <span className="text-primary-fixed">ELEV. 2,355M</span>
                </div>
              </div>
              <div className="space-y-space-xs pt-space-xs">
                {[
                  ["Licensure Authority", "Federal MoUDI"],
                  ["Contractor Grade", "GRADE 1 (GC-1)", true],
                  ["Bonding Authorization", "CBE Verified Tier-1"],
                  ["Quality Compliance", "ISO 9001:2015 Registered"],
                ].map(([label, value, highlight]) => (
                  <div key={label as string} className="flex justify-between items-center text-label-sm font-label-sm border-b border-outline-variant/20 py-1 last:border-0">
                    <span className="text-on-surface-variant uppercase">{label}</span>
                    <span className={`font-medium ${highlight ? "text-primary" : "text-on-surface"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Metrics */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              ENTERPRISE AUDIT DATA // OPERATIONAL BENCHMARKS
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-outline-variant/40 bg-surface divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            {METRICS.map((m) => (
              <div key={m.label} className="p-space-md flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary uppercase">{m.label}</span>
                <span className="font-headline-md text-[22px] leading-[30px] lg:text-headline-md font-bold text-on-surface">
                  {m.value}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{m.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase Execution Model */}
      <section className="w-full bg-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 bg-inverse-surface"></span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                5-Phase Integrated Execution Model
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase hidden md:inline">
              ZERO-GAP DELIVERY METHODOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {PHASES.map((p) => (
              <div
                key={p.phase}
                className="bg-surface-container-lowest border border-outline-variant/40 p-space-lg flex flex-col gap-space-sm"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm bg-inverse-surface text-on-primary px-space-xs py-0.5">
                    {p.phase}
                  </span>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-medium">
                    PHASE {p.phase}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">
                  {p.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full bg-surface-container-low border-y border-outline-variant/40 px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 bg-primary"></span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                Engineering Leadership
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase hidden md:inline">
              EXECUTIVE BUREAU // ADDIS ABABA HQ
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col overflow-hidden">
                <div className="relative w-full aspect-[3/4] bg-surface-container overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-space-md flex flex-col gap-space-xs">
                  <h4 className="font-headline-sm text-[16px] leading-[22px] text-on-surface font-bold uppercase">
                    {person.name}
                  </h4>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">{person.role}</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Fleet Register */}
      <section className="w-full bg-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              HEAVY EQUIPMENT ASSET REGISTER // OWNED FLEET
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-sm">
            {EQUIPMENT.map((item) => (
              <div key={item} className="flex items-center gap-space-sm bg-surface-container-low p-space-sm border border-outline-variant/30">
                <span className="w-1.5 h-1.5 bg-primary shrink-0"></span>
                <span className="font-label-md text-label-md text-on-surface-variant">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-inverse-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <h2 className="font-headline-md text-headline-md text-on-primary uppercase font-bold">
              Build with confidence.
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface">
              15+ years of Ethiopian construction expertise. Grade 1 certified. ISO 9001:2015 compliant.
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
