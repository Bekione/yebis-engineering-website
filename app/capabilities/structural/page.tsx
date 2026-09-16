import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Structural & Civil Engineering",
  description:
    "Deep foundations, basalt rock excavation, 5-stage pour protocol, and high-seismic structural specifications. Grade 1 certified Ethiopian contractor.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/structural`,
  },
  openGraph: {
    title: "Structural & Civil Engineering | Yebis Engineering PLC",
    description:
      "Deep foundations, basalt rock excavation, and high-seismic structural engineering across Ethiopia.",
    url: `${SITE_URL}/capabilities/structural`,
  },
};

const SPECS = [
  {
    label: "Max Pile Depth",
    value: "35M",
    detail: "Bored cast-in-situ on volcanic substrata",
  },
  {
    label: "Concrete Grade",
    value: "C40",
    detail: "High-performance mix design for seismic zones",
  },
  {
    label: "Rebar Capacity",
    value: "1,200T",
    detail: "Per-project deformed bar throughput",
  },
  {
    label: "Axial Load Rating",
    value: "4,500kN",
    detail: "Single pile verified capacity",
  },
  {
    label: "Pour Protocol",
    value: "5-Stage",
    detail: "Tremie, vibration, cure, test, certify",
  },
  {
    label: "Seismic Zone",
    value: "Zone IV",
    detail: "EBCS EN 1998 compliance envelope",
  },
];

const PROCESS = [
  {
    phase: "01",
    title: "Geotechnical Survey & Soil Analysis",
    desc: "Comprehensive borehole investigations, SPT/CPT testing, and laboratory analysis of Addis Ababa's volcanic tuff and expansive clay substrata. Every foundation is designed from verified subsurface data.",
  },
  {
    phase: "02",
    title: "Excavation & Basalt Rock Breaking",
    desc: "Controlled rock-breaking operations using hydraulic breakers and chemical expansion agents. Precision grading and shoring for multi-level subterranean containment structures.",
  },
  {
    phase: "03",
    title: "Foundation System Installation",
    desc: "Bored piles, pad footings, raft foundations, and retaining wall systems. All executed with laser-guided alignment and real-time plumbness verification.",
  },
  {
    phase: "04",
    title: "Superstructure Erection",
    desc: "Reinforced concrete frame construction using precision-cut rebar cages, engineered formwork systems, and 5-stage pour protocol with tremie placement and vibration consolidation.",
  },
  {
    phase: "05",
    title: "Quality Assurance & Testing",
    desc: "Cube crushing tests at 7/14/28-day intervals, Schmidt hammer non-destructive testing, cover meter surveys, and third-party structural audit certification.",
  },
];

export default function StructuralCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_STR-01 // STRUCTURAL &amp; CIVIL CAPABILITY // DEEP FOUNDATION
              DIVISION
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>GC-1 CERTIFIED</span>
            <span className="text-primary font-medium">
              STATUS: FIELD ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full border-b border-outline-variant/40 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-surface-container w-fit border border-outline-variant/40 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                <span>DIVISION 01</span>
                <span className="text-primary">•</span>
                <span>SUBSTRUCTURE &amp; SUPERSTRUCTURE</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                From Bedrock to Roofline. Engineered Concrete Precision.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Deep foundation engineering through Addis Ababa&apos;s volcanic
                basalt substrata, structural frame erection to G+16, and
                complete civil works execution under single-source Grade 1
                responsibility.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Our structural division manages the most demanding scope on
                every project — from controlled rock excavation and bored piling
                on unpredictable volcanic clay to post-tensioned slab systems on
                high-rise commercial towers. We maintain an in-house fleet of
                tower cranes, concrete boom pumps, and steel formwork systems to
                ensure zero reliance on third-party plant providers.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Structural Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Assessment</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/50 p-space-lg flex flex-col gap-space-md relative">
              <div className="absolute top-2 right-2 text-outline-variant font-label-sm select-none">
                +
              </div>
              <div className="absolute bottom-2 left-2 text-outline-variant font-label-sm select-none">
                +
              </div>
              <div className="border-b border-outline-variant/30 pb-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>SPEC_CARD // STR-01</span>
                <span>CAPACITY: G+16 MAX</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/40">
                <Image
                  src={IMG.foundation}
                  alt="Deep foundation works showing reinforced concrete piling and excavation in Addis Ababa"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-3 py-1 text-label-sm font-label-sm flex justify-between items-center">
                  <span>BORED PILING // VOLCANIC SUBSTRATA</span>
                  <span className="text-primary-fixed">ELEV. 2,355M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              STRUCTURAL SPECIFICATIONS // ENGINEERING DATA
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-outline-variant/40 bg-surface divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="p-space-md flex flex-col gap-space-xs"
              >
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  {spec.label}
                </span>
                <span className="font-headline-md text-[22px] leading-[30px] lg:text-headline-md font-bold text-on-surface">
                  {spec.value}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {spec.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase Execution Process */}
      <section className="w-full bg-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 bg-inverse-surface"></span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                5-Phase Structural Execution Protocol
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase hidden md:inline">
              SEQUENTIAL QUALITY GATES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {PROCESS.map((p) => (
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
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-surface-container-low border-t border-outline-variant/40 px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              FIELD DOCUMENTATION // STRUCTURAL OPERATIONS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[
              { src: IMG.concretePour, label: "CONCRETE POUR OPERATIONS" },
              { src: IMG.steelFrame, label: "STRUCTURAL STEEL ERECTION" },
              { src: IMG.superstructure, label: "SUPERSTRUCTURE FRAMING" },
            ].map((img) => (
              <div
                key={img.label}
                className="relative aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/40"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/85 px-3 py-1.5 font-label-sm text-label-sm text-inverse-on-surface">
                  {img.label}
                </div>
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
              Have a structural scope to discuss?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface">
              From geotechnical surveys to frame-out, our structural team can
              assess your project within 48 hours.
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
