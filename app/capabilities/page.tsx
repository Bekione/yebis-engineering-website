import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Capabilities & Divisions",
  description:
    "Eight integrated engineering divisions under single-source responsibility: structural works, BIM coordination, MEP systems, plumbing, interior finishing, joinery, metal fabrication, and renovation.",
  alternates: {
    canonical: `${SITE_URL}/capabilities`,
  },
  openGraph: {
    title: "Capabilities & Divisions | Yebis Engineering PLC",
    description:
      "Eight integrated engineering divisions under single-source responsibility across Ethiopia.",
    url: `${SITE_URL}/capabilities`,
  },
};

const METRICS = [
  {
    label: "Civil Scope",
    value: "G+16",
    unit: "MAX CAP",
    desc: "Structural RC framing & deep piling",
  },
  {
    label: "Fabrication Capacity",
    value: "1,800",
    unit: "M²/MO",
    desc: "Aluminum, glazing & joinery yard",
  },
  {
    label: "MEP Compliance",
    value: "100%",
    unit: "EBCS",
    desc: "Ethiopian Building Code Standards",
  },
  {
    label: "Defect Tolerance",
    value: "±1.5",
    unit: "MM",
    desc: "Optical & laser datum control",
    highlight: true,
  },
];

const DIVISIONS = [
  {
    id: "01",
    tag: "SUBSTRUCTURE & SUPERSTRUCTURE",
    grade: "G+4 TO HIGH-RISE",
    image: IMG.concretePour,
    title: "General Contracting & Structural Works",
    desc: "Comprehensive civil engineering operations from deep foundation piling to structural frame erection. We manage plant equipment logistics, safety protocols, and rigorous structural batch-testing on site.",
    scope: [
      "Mass Earthworks & Shoring",
      "C30/C40 Cast Concrete Frame",
      "Post-Tensioned Slabs",
      "Site Logistics & Crane Operations",
    ],
    datum: "DATUM CAPACITY: 4,500kN AXIAL LOAD",
    cta: "GC-1 CERTIFIED →",
    href: "/capabilities/structural",
  },
  {
    id: "02",
    tag: "VIRTUAL DESIGN & BIM",
    grade: "LOD 400 SPECIFICATION",
    image: IMG.bimDrafting,
    title: "Design & Engineering Coordination",
    desc: "Multi-disciplinary clash resolution prior to site mobilization. We reconcile architectural intent with civil load calculations and mechanical clearances, eliminating site change orders.",
    scope: [
      "MEP Clash Detection (Navisworks)",
      "Structural Detail Fabrication Drawings",
      "Parametric 3D Volumetric Renders",
      "As-Built Dossier Compilation",
    ],
    datum: "RESOLUTION: ZERO UNRESOLVED SITE CLASHES",
    cta: "REVIT & BIM WORKFLOW →",
    href: "/capabilities/bim-coordination",
  },
  {
    id: "03",
    tag: "ELECTROMECHANICAL",
    grade: "HIGH & LOW VOLTAGE",
    image: IMG.electrical,
    title: "Electrical & Building Systems (MEP)",
    desc: "Engineered electrical systems for resilience under volatile grid conditions. We integrate heavy-duty diesel generator backups, automatic transfer switches (ATS), and architectural lighting automation.",
    scope: [
      "Main Distribution Boards (MDB)",
      "Synchronized Generator Plant & ATS",
      "Structured Cabling & Fiber Backbones",
      "Earthing & Lightning Protection Grid",
    ],
    datum: "LOAD BALANCING: 3-PHASE CONTINUITY TESTED",
    cta: "IEC & EEP COMPLIANT →",
    href: "/capabilities/electrical-mep",
  },
  {
    id: "04",
    tag: "HYDRAULIC & SANITARY",
    grade: "PRESSURIZED WATER NETWORKS",
    image: IMG.plumbing,
    title: "Plumbing, Drainage & Sanitary",
    desc: "Precision plumbing networks designed for durability, acoustic silence, and fail-safe drainage. Includes submerged sump stations, multi-stage pressure booster skids, and commercial hot water loops.",
    scope: [
      "PPR-C & HDPE Water Reticulation",
      "Acoustic Silent Waste Stacks (uPVC)",
      "Duplex Booster Pump Systems",
      "Elastomeric Structural Waterproofing",
    ],
    datum: "PRESSURE TEST: 12 BAR HYDROSTATIC HOLD",
    cta: "0% DEFECT ASSURANCE →",
    href: "/capabilities/plumbing-sanitary",
  },
  {
    id: "05",
    tag: "ARCHITECTURAL FINISH",
    grade: "HIGH-END INTERIORS",
    image: IMG.lobby,
    title: "Interior Architecture & Finishing",
    desc: "Flawless interior surfaces engineered with Swiss tolerance. From acoustic multi-tier gypsum ceilings to heavy-traffic epoxy coatings and calibrated large-format porcelain floor installations.",
    scope: [
      "Acoustic & Moisture-Resistant Gypsum",
      "Calibrated Porcelain & Terrazzo",
      "Polyurethane & Self-Leveling Epoxy",
      "Microcement & Textural Wall Systems",
    ],
    datum: "TOLERANCE: Q4 GYPSUM SURFACE FINISH",
    cta: "TURNKEY SPECIFICATION →",
    href: "/capabilities/interior-finishing",
  },
  {
    id: "06",
    tag: "CUSTOM MILLWORK",
    grade: "OWNED WORKSHOP FACILITY",
    image: IMG.joinery,
    title: "Furniture & Bespoke Joinery",
    desc: "Dedicated manufacturing millwork operations executing bespoke architectural timber solutions. Our pipeline delivers strict quality control: Design → Fabrication → Delivery → Site Installation.",
    scope: [
      "Integrated Solid Wood Executive Suites",
      "Soft-Close Moisture-Shield Kitchens",
      "Acoustic Timber Slat Wall Paneling",
      "Solid Hardwood Architectural Doors",
    ],
    datum: "MOISTURE CONTENT: KILN DRIED <10%",
    cta: "CNC ACCURACY →",
    href: "/capabilities/furniture-joinery",
  },
  {
    id: "07",
    tag: "FACADES & ENVELOPE",
    grade: "THERMALLY BROKEN SYSTEMS",
    image: IMG.facade,
    title: "Metal Fabrication & Aluminum Systems",
    desc: "Engineered building facades, curtain walls, and structural metalwork. We fabricate thermal-break aluminum frames and load-bearing metal stairs under stringent structural welding audits.",
    scope: [
      "Unitized & Stick Curtain Walls",
      "Heavy Duty Commercial Sliding Portals",
      "Tempered Glass & Steel Balustrades",
      "Structural Steel Mezzanines & Trusses",
    ],
    datum: "WIND LOAD: CERTIFIED TO 1.8 kPa",
    cta: "TESTED DRAINAGE →",
    href: "/capabilities/metal-aluminum",
  },
  {
    id: "08",
    tag: "ASSET RETROFITTING",
    grade: "LIFECYCLE MANAGEMENT",
    image: IMG.renovation,
    title: "Renovation, Remodeling & Maintenance",
    desc: "Structural rehabilitation, tenant reconfigurations, and life-cycle facilities upkeep. We execute invasive structural reinforcement and MEP conversions in active, occupied commercial spaces.",
    scope: [
      "Carbon Fiber Structural Strengthening",
      "Commercial Floor Demolition & Fit-Out",
      "HVAC & MEP Upgrades In-Situ",
      "Preventative Maintenance Contracts",
    ],
    datum: "ASSET LIFE EXTENSION: +25 YEAR CYCLE",
    cta: "CONDITION SURVEY →",
    href: "/capabilities/renovation-maintenance",
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col pt-2 w-full">
      {/* SECTION 00: EDITORIAL HEADER & METRIC STRIP */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                  DISCIPLINES &amp; CAPABILITIES // SEC_CAP-01
                </span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Engineering the build. Finishing the details.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
                From foundation civil works to bespoke interior joinery. A
                unified multi-disciplinary engineering firm that eliminates
                contractor fragmentation across Ethiopia.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-space-xs bg-surface-container-low p-space-md">
              <span className="font-label-sm text-label-sm text-secondary uppercase">
                REGULATORY RATING
              </span>
              <span className="font-label-lg text-label-lg font-bold text-on-surface">
                GC-1 CLASSIFICATION
              </span>
              <span className="font-label-sm text-label-sm text-primary">
                FULL VERTICAL INTEGRATION
              </span>
            </div>
          </div>

          {/* Quick Metrics Ledger */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-surface-container p-space-md flex flex-col justify-between"
              >
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  {m.label}
                </span>
                <div className="flex items-baseline gap-space-xs mt-space-sm">
                  <span
                    className={`font-headline-lg text-[28px] leading-[36px] lg:text-headline-lg font-bold ${m.highlight ? "text-primary" : "text-on-surface"}`}
                  >
                    {m.value}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {m.unit}
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  {m.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 01: CAPABILITY ARCHITECTURE DOSSIERS */}
      <section className="w-full bg-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-container-low p-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 bg-inverse-surface"></span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                08 Discrete Engineering Divisions
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              EXECUTED UNDER SINGLE-SOURCE RESPONSIBILITY
            </span>
          </div>

          {/* Capability Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {DIVISIONS.map((div) => (
              <article
                key={div.id}
                className="bg-surface-container-lowest flex flex-col justify-between p-space-lg shadow-sm"
              >
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between bg-surface-container-low p-space-sm">
                    <span className="font-label-md text-label-md font-bold text-primary tracking-wider">
                      DIVISION {div.id} // {div.tag}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase hidden sm:inline">
                      {div.grade}
                    </span>
                  </div>
                  <Link
                    href={div.href}
                    className="w-full h-56 bg-surface-container overflow-hidden relative block group"
                  >
                    <Image
                      src={div.image}
                      alt={div.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </Link>
                  <h2 className="font-headline-md text-[22px] leading-[30px] lg:text-headline-md text-on-surface uppercase font-bold hover:text-primary transition-colors">
                    <Link href={div.href}>{div.title}</Link>
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {div.desc}
                  </p>
                  <div className="bg-surface-container p-space-md">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase block mb-space-xs">
                      Technical Scope:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-label-md text-label-md text-on-surface-variant">
                      {div.scope.map((s) => (
                        <li key={s} className="flex items-center gap-space-xs">
                          <span className="w-1.5 h-1.5 bg-primary shrink-0"></span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-space-md mt-space-md bg-surface-container-low p-space-sm">
                  <span className="font-label-sm text-label-sm text-secondary">
                    {div.datum}
                  </span>
                  {div.href ? (
                    <Link
                      href={div.href}
                      className="font-label-sm text-label-sm text-primary font-bold hover:underline"
                    >
                      {div.cta}
                    </Link>
                  ) : (
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      {div.cta}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-inverse-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <h2 className="font-headline-md text-headline-md text-on-primary uppercase font-bold">
              Ready to scope your project?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface max-w-xl">
              Our multi-disciplinary team can evaluate your requirements across
              all eight engineering divisions within 48 business hours.
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
