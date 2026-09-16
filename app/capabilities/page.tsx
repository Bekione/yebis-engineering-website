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
    label: "Project Scope",
    value: "Turnkey",
    unit: "& SKELETON",
    desc: "From ground-up builds to skeleton finishing",
  },
  {
    label: "In-House Trades",
    value: "08",
    unit: "DIVISIONS",
    desc: "Civil, MEP, aluminum, wood & finishing",
  },
  {
    label: "Code Standards",
    value: "100%",
    unit: "EBCS",
    desc: "Ethiopian Building Code compliant",
  },
  {
    label: "Delivery Model",
    value: "Single",
    unit: "SOURCE",
    desc: "Eliminating subcontractor friction",
    highlight: true,
  },
];

const DIVISIONS = [
  {
    id: "01",
    tag: "TURNKEY & STRUCTURAL SKELETONS",
    grade: "FROM-SCRATCH & FRAME ONLY",
    image: IMG.concretePour,
    title: "General Contracting & Structural Works",
    desc: "Full-scale building implementation from foundation earthworks to reinforced concrete framing. We execute both complete turnkey construction and structural scaffolding/skeleton-only packages for commercial and residential clients.",
    scope: [
      "Turnkey Building Construction",
      "Reinforced Concrete Skeletons",
      "Pad, Strip & Raft Foundations",
      "Structural Steel Portal Framing",
    ],
    datum: "CAPACITY: TURNKEY GC & SKELETON PACKAGES",
    cta: "GC-1 CERTIFIED →",
    href: "/capabilities/structural",
  },
  {
    id: "02",
    tag: "DESIGN & COORDINATION",
    grade: "BUILDING PRE-CONSTRUCTION",
    image: IMG.bimDrafting,
    title: "Engineering Coordination & Pre-Construction",
    desc: "Detailed architectural review, structural calculations, and multi-trade coordination before site mobilization. We reconcile design drawings with site realities to prevent costly demolition and change orders.",
    scope: [
      "Detailed Working & Shop Drawings",
      "Bill of Quantities (BOQ) Review",
      "Subsurface & Site Condition Audits",
      "As-Built Documentation & Permitting",
    ],
    datum: "PRECISION: VERIFIED CONSTRUCTION DRAWINGS",
    cta: "COORDINATION WORKFLOW →",
    href: "/capabilities/bim-coordination",
  },
  {
    id: "03",
    tag: "ELECTRICAL & BUILDING SYSTEMS",
    grade: "RESIDENTIAL & COMMERCIAL",
    image: IMG.electrical,
    title: "Electrical & Building Systems (MEP)",
    desc: "Complete electrical installations engineered for reliability. We design and install main distribution boards (MDB), conduit reticulation, backup generator connections, and lighting networks tested before walls are closed.",
    scope: [
      "Main Distribution Boards (MDB)",
      "Conduit Rough-Ins & Wiring",
      "Generator Connection & Transfer Switches",
      "Earthing & Lightning Protection Systems",
    ],
    datum: "TESTING: 3-PHASE CONTINUITY & LOAD BALANCE",
    cta: "EBCS & EEP COMPLIANT →",
    href: "/capabilities/electrical-mep",
  },
  {
    id: "04",
    tag: "PLUMBING & SANITARY",
    grade: "PRESSURIZED & DRAINAGE",
    image: IMG.plumbing,
    title: "Plumbing, Drainage & Sanitary",
    desc: "Fail-safe plumbing networks for residences, multi-family apartments, and commercial facilities. We handle domestic water lines, vertical drainage stacks, booster pump installations, and sanitary fixtures.",
    scope: [
      "PPR & HDPE Water Supply Lines",
      "uPVC Waste & Vent Drainage Stacks",
      "Water Tank & Booster Pump Skids",
      "Sanitary Fixture Installation",
    ],
    datum: "VERIFICATION: HYDROSTATIC PRESSURE TESTED",
    cta: "LEAK-FREE TESTING →",
    href: "/capabilities/plumbing-sanitary",
  },
  {
    id: "05",
    tag: "INTERIOR FINISHING & PARTITIONS",
    grade: "WALLS, FLOORS & CEILINGS",
    image: IMG.lobby,
    title: "Interior Architecture & Finishing",
    desc: "Comprehensive finishing trades for new builds and incomplete skeleton frames. We deliver gypsum drywall partitions, acoustic ceilings, smooth plastering, precision paint applications, tiling, terrazzo, and equipment installation.",
    scope: [
      "Gypsum Drywall Partitions & Ceilings",
      "High-Grade Wall Plastering & Paint",
      "Ceramic, Porcelain & Terrazzo Tiling",
      "Commercial & Residential Fit-Outs",
    ],
    datum: "STANDARDS: HIGH-PRECISION SURFACE FINISH",
    cta: "FINISHING SCOPE →",
    href: "/capabilities/interior-finishing",
  },
  {
    id: "06",
    tag: "WOOD JOINERY & MILLWORK",
    grade: "IN-HOUSE WORKSHOP",
    image: IMG.joinery,
    title: "Furniture & Bespoke Joinery",
    desc: "Dedicated workshop crafting architectural timber solutions. We design, manufacture, and install custom solid wood doors, fitted kitchen cabinetry, executive office desks, wardrobes, and timber paneling.",
    scope: [
      "Solid Hardwood Interior Doors",
      "Modular Kitchen Cabinetry",
      "Built-In Bedroom Wardrobes",
      "Custom Executive Office Furniture",
    ],
    datum: "TIMBER: SEASONED HARDWOODS & MDF",
    cta: "WORKSHOP CRAFT →",
    href: "/capabilities/furniture-joinery",
  },
  {
    id: "07",
    tag: "ALUMINUM & METALWORK",
    grade: "DOORS, WINDOWS & GATES",
    image: IMG.facade,
    title: "Metal Fabrication, Aluminum & Gates",
    desc: "In-house fabrication and installation of architectural aluminum windows, glazed storefronts, entrance doors, and heavy custom metal/aluminum compound security gates.",
    scope: [
      "Aluminum Sliding & Casement Windows",
      "Storefronts & Curtain Wall Glazing",
      "Heavy-Duty Compound Security Gates",
      "Steel Handrails, Grilles & Balustrades",
    ],
    datum: "FABRICATION: WEATHER-SEALED SYSTEMS",
    cta: "METAL & ALUMINUM SCOPE →",
    href: "/capabilities/metal-aluminum",
  },
  {
    id: "08",
    tag: "RENOVATION & REPAIRS",
    grade: "HOUSES & COMMERCIAL BUILDINGS",
    image: IMG.renovation,
    title: "Renovation, Remodeling & Maintenance",
    desc: "Full-scale restoration, structural repairs, and scheduled maintenance for older or damaged residences, villas, and commercial buildings. We solve roof leaks, repair wall cracks, and reconfigure interior layouts.",
    scope: [
      "Old & Damaged House Renovations",
      "Roof Slab Waterproofing & Leak Fixes",
      "Wall Crack Repair & Replastering",
      "Scheduled Commercial Maintenance",
    ],
    datum: "RESTORATION: STRUCTURAL & AESTHETIC",
    cta: "RENOVATION INQUIRY →",
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
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
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
