import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Furniture & Bespoke Architectural Joinery",
  description:
    "Dedicated architectural millwork and custom timber fabrication: executive suites, acoustic wall paneling, custom kitchens, wardrobes, and solid hardwood doors fabricated in our workshop facility in Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/furniture-joinery`,
  },
  openGraph: {
    title: "Furniture & Bespoke Architectural Joinery | Yebis Engineering",
    description:
      "Bespoke architectural millwork, executive furniture, and precision timber joinery across Addis Ababa and Ethiopia.",
    url: `${SITE_URL}/capabilities/furniture-joinery`,
  },
};

const METRICS = [
  {
    label: "Workshop Facility",
    value: "1,200 M²",
    desc: "Dedicated fabrication facility equipped with heavy-duty timber machinery.",
  },
  {
    label: "Fabrication Precision",
    value: "±0.2 MM",
    desc: "Computer-controlled CNC panel sizing, routing, and boring accuracy.",
    highlight: true,
  },
  {
    label: "Kiln Moisture Level",
    value: "< 10%",
    desc: "Scientifically monitored kiln drying preventing timber warpage in Addis Ababa's climate.",
  },
  {
    label: "Hardware Durability",
    value: "50,000",
    desc: "European soft-close hinges and drawer runners tested for heavy commercial cycles.",
  },
  {
    label: "Finish Quality",
    value: "Q4 VOC-Free",
    desc: "Multi-coat polyurethane spray booth finishes and hand-rubbed natural oils.",
  },
];

const DELIVERABLES = [
  {
    code: "SUB-SCOPE 01 // EXECUTIVE FURNISHINGS",
    grade: "COMMERCIAL C-SUITE",
    title: "Executive Suites & Boardroom Tables",
    desc: "Monumental conference tables with integrated pop-up data/power connectivity, executive desks, and credenzas combining sustainably sourced Ethiopian hardwoods with brushed brass and stone accents.",
    items: [
      "Custom conference tables up to 24-seat capacity",
      "Concealed cable management & pop-up connectivity",
      "Matching executive credenzas & presentation walls",
      "Natural hardwood veneers with satin polyurethane",
    ],
  },
  {
    code: "SUB-SCOPE 02 // ACOUSTIC WALL CLADDING",
    grade: "NRC 0.85 ABSORPTION",
    title: "Acoustic Timber Slat & Wall Paneling",
    desc: "Architectural wall cladding systems integrating acoustic PET felt backing with natural wood veneer slats. Enhances sound clarity in conference halls, hotel lobbies, and executive suites while creating a warm, modern aesthetic.",
    items: [
      "Micro-perforated acoustic timber veneer panels",
      "Concealed French cleat structural hanging systems",
      "Integrated perimeter LED cove reveal details",
      "Class B-s1, d0 fire-retardant substrate cores",
    ],
    highlight: true,
  },
  {
    code: "SUB-SCOPE 03 // CASEWORK & STORAGE",
    grade: "SOFT-CLOSE LIFECYCLE",
    title: "Bespoke Kitchens, Vanities & Wardrobes",
    desc: "Full-height custom cabinetry engineered for residential villas, apartments, and corporate offices. Moisture-resistant carcases, precision edge-banding, and European Blum/Hettich concealed hardware.",
    items: [
      "Moisture-resistant (MR) melamine & plywood carcases",
      "Seamless PUR edge-banding with zero glue lines",
      "Soft-close soft-motion concealed hardware",
      "Integrated LED task lighting and vanity mirrors",
    ],
  },
  {
    code: "SUB-SCOPE 04 // ARCHITECTURAL DOORS",
    grade: "STC 38 ACOUSTIC / 60-MIN FIRE",
    title: "Solid Hardwood & Flush Performance Doors",
    desc: "Custom architectural door sets engineered with solid timber cores, perimeter acoustic drop seals, and concealed 3D-adjustable hinges for residential sanctuaries, offices, and hotel suites.",
    items: [
      "Solid core architectural doors up to 3.0M height",
      "Drop-down acoustic automatic bottom door seals",
      "Concealed 3D adjustable stainless steel hinges",
      "Magnetic silent-close architectural latch mechanisms",
    ],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "On-Site 3D Laser Templating & Millwork Shop Drawings",
    desc: "Laser distance measurement of openings, structural reveals, and un-plumb walls to generate millimeter-precise fabrication shop drawings and cut lists.",
    gate: "GATE: SHOP DRAWING & MATERIAL SAMPLE SIGN-OFF",
  },
  {
    phase: "02",
    title: "Timber Selection & Kiln Moisture Verification",
    desc: "Hand selection of hardwood flitches and veneer sheets, followed by digital pin moisture testing ensuring timber moisture content is stabilized below 10%.",
    gate: "GATE: KILN MOISTURE AUDIT APPROVAL",
  },
  {
    phase: "03",
    title: "Computer-Aided CNC Machining & Joinery Assembly",
    desc: "Panel optimization, CNC routing, edge-banding, mortise-and-tenon jointing, and initial carcass assembly under controlled workshop conditions.",
    gate: "GATE: WORKSHOP DIMENSIONAL TOLERANCE CHECK",
  },
  {
    phase: "04",
    title: "Multi-Coat Spray Finishing & Hardware Pre-Fit",
    desc: "Dust-free spray booth application of primers, polyurethane topcoats, or penetrating oils, followed by workshop pre-fitting of all runners, hinges, and handles.",
    gate: "GATE: SURFACE FINISH & SHEEN AUDIT",
  },
  {
    phase: "05",
    title: "Site Logistics, Precision Installation & Handover",
    desc: "Padded packaging, scheduled transport to site, leveling on laser datums, concealed mechanical fixing, and final client detailing sign-off.",
    gate: "GATE: FINAL WHITE-GLOVE COMMISSIONING",
  },
];

const COMPLIANCE_ROWS = [
  {
    element: "Timber Equilibrium Moisture Content (EMC)",
    baseline: "8% to 10% Across All Core Layers",
    protocol: "Digital Pin Moisture Meter Calibration",
    standard: "DIN 68360 / ASTM D4442",
    status: "STABILIZED PASS",
  },
  {
    element: "CNC Panel Dimension & Reveal Tolerance",
    baseline: "±0.2mm Gap Uniformity Across Reveals",
    protocol: "Optical Vernier Caliper & Feeler Gauge",
    standard: "AWI Quality Standards GRADE 3",
    status: "VERIFIED PRECISION",
  },
  {
    element: "Melamine / Veneer PUR Edge-Band Adhesion",
    baseline: "> 1.5 N/mm Peel Strength",
    protocol: "Hot Melt Tensile Cross-Hatch Test",
    standard: "DIN EN 14617 / ISO 4586",
    status: "100% BONDED",
  },
  {
    element: "Cabinet Hinge & Drawer Runner Fatigue",
    baseline: "50,000 Operational Open/Close Cycles",
    protocol: "Mechanical Pneumatic Cycle Rig Simulation",
    standard: "EN 15338 / ANSI/BHMA A156.9",
    status: "CYCLE CERTIFIED",
  },
  {
    element: "Surface Finish VOC & Heavy Metal Limits",
    baseline: "Zero Formaldehyde / VOC Compliant",
    protocol: "Spectrophotometric Laboratory Assay",
    standard: "EN 71-3 / LEED v4 EQ",
    status: "ECO-CERTIFIED",
  },
];

export default function FurnitureCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_FURN-06 // FURNITURE &amp; BESPOKE JOINERY // DIVISION 06
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>FACILITY: IN-HOUSE WORKSHOP</span>
            <span className="text-primary font-medium">
              PRECISION: ±0.2MM CNC
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full border-b border-outline-variant/40 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-surface-container w-fit border border-outline-variant/40 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                <span>DIVISION 06</span>
                <span className="text-primary">•</span>
                <span>CUSTOM MILLWORK // BESPOKE TIMBER JOINERY</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Architectural Precision in Timber. Crafted for Commercial &amp;
                Residential Lifecycles.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Dedicated custom millwork, executive boardroom suites, acoustic
                timber wall paneling, custom kitchens, and precision
                architectural doors manufactured in our specialized workshop
                facility.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Operating high-precision computer-controlled routers, automated
                edge-banding machines, and a monitored timber seasoning yard,
                Division 06 eliminates site-level variance. Every joinery
                assembly is modeled in 3D, dry-fitted in our workshop, and
                installed with concealed architectural fastenings for clean
                aesthetic purity across Ethiopian corporate, hospitality, and
                residential spaces.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Joinery Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Millwork Spec</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Spec Card */}
            <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/50 p-space-lg flex flex-col gap-space-md relative">
              <div className="absolute top-2 right-2 text-outline-variant font-label-sm select-none">
                +
              </div>
              <div className="absolute bottom-2 left-2 text-outline-variant font-label-sm select-none">
                +
              </div>
              <div className="border-b border-outline-variant/30 pb-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase">
                <span>SPEC_CARD // FURN-06</span>
                <span>CNC CALIBRATED: 100% VERIFIED</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/30">
                <Image
                  src={IMG.joinery}
                  alt="Architectural Joinery Workshop with Precision Woodworking Machinery"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 font-label-sm text-label-sm flex items-center justify-between uppercase">
                  <span>CNC TIMBER ROUTING // WORKSHOP FACILITY</span>
                  <span className="text-primary font-medium">TOL: ±0.2MM</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm uppercase bg-surface-container p-space-xs text-on-surface-variant">
                <div>
                  <span className="text-on-surface font-semibold">
                    KILN DRYING:
                  </span>{" "}
                  &lt; 10% MOISTURE
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    HARDWARE:
                  </span>{" "}
                  EUROPEAN BLUM
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    PANELING:
                  </span>{" "}
                  ACOUSTIC SLATS
                </div>
                <div>
                  <span className="text-on-surface font-semibold">FINISH:</span>{" "}
                  Q4 SATIN POLY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Telemetry Strip */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/40 py-space-lg px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
            <span className="w-2 h-2 bg-primary"></span>
            <span>MILLWORK SPECIFICATIONS // TIMBER FABRICATION TELEMETRY</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
            {METRICS.map((m, idx) => (
              <div
                key={idx}
                className="bg-surface p-space-md border border-outline-variant/40 flex flex-col justify-between"
              >
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-xs">
                  {m.label}
                </span>
                <div
                  className={`font-headline-md text-headline-md font-bold tracking-tight ${
                    m.highlight ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {m.value}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Deliverables Dossier Grid */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pb-space-sm border-b border-outline-variant/30">
            <div>
              <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-primary"></span>
                <span>COMMERCIAL &amp; RESIDENTIAL PACKAGES</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Core Joinery &amp; Millwork Deliverables
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              STANDARDS: AWI GRADE 3 // DIN 68360 // EN 15338
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {DELIVERABLES.map((d, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low p-space-lg border border-outline-variant/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-space-xs mb-space-sm font-label-sm text-label-sm text-secondary uppercase border-b border-outline-variant/20">
                    <span className="font-semibold text-on-surface">
                      {d.code}
                    </span>
                    <span
                      className={d.highlight ? "text-primary font-medium" : ""}
                    >
                      {d.grade}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-xs font-semibold">
                    {d.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                    {d.desc}
                  </p>
                </div>

                <div className="bg-surface p-space-sm border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-space-xs">
                    TECHNICAL SCOPE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 font-label-sm text-label-sm text-on-surface uppercase">
                    {d.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-primary">■</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase Execution Protocol */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-outline-variant/30">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 bg-primary"></span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                5-Phase Joinery &amp; Millwork Fabrication Protocol
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              WORKSHOP CONTROLLED // DRY-FIT BEFORE DELIVERY
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {PHASES.map((p, idx) => (
              <div
                key={idx}
                className={`bg-surface p-space-md border border-outline-variant/40 flex flex-col justify-between ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-space-xs mb-space-xs">
                    <span className="bg-inverse-surface text-on-primary px-1.5 py-0.5 font-label-sm text-label-sm font-bold">
                      {p.phase}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      PHASE {p.phase}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-xs leading-snug font-semibold">
                    {p.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-space-sm mt-space-sm font-label-sm text-label-sm text-primary uppercase font-medium border-t border-outline-variant/20">
                  {p.gate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA & Standards Compliance Matrix */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-outline-variant/30">
            <div>
              <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-primary"></span>
                <span>TIMBER BENCHMARK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Quality Assurance &amp; Joinery Standards
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              AWI GRADE 3 // DIN 68360 // EN 15338 // ISO 4586
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-outline-variant/40">
            <table className="w-full text-left font-body-sm text-body-sm min-w-[700px]">
              <thead className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                <tr>
                  <th className="py-3 px-space-md">Joinery Element</th>
                  <th className="py-3 px-space-md">Fabrication Baseline</th>
                  <th className="py-3 px-space-md">Verification Protocol</th>
                  <th className="py-3 px-space-md">Standard</th>
                  <th className="py-3 px-space-md text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {COMPLIANCE_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-surface hover:bg-surface-container transition-colors"
                        : "bg-surface-container-low hover:bg-surface-container transition-colors"
                    }
                  >
                    <td className="py-3.5 px-space-md font-semibold text-on-surface">
                      {row.element}
                    </td>
                    <td className="py-3.5 px-space-md font-label-sm text-label-sm">
                      {row.baseline}
                    </td>
                    <td className="py-3.5 px-space-md text-on-surface-variant">
                      {row.protocol}
                    </td>
                    <td className="py-3.5 px-space-md font-label-sm text-label-sm text-secondary">
                      {row.standard}
                    </td>
                    <td className="py-3.5 px-space-md text-right font-label-sm text-label-sm text-primary font-semibold">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical Intake / Callout Banner */}
      <section className="w-full bg-surface-container-low py-space-xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-surface p-space-lg lg:p-space-xl border border-outline-variant/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary"></span>
                <span>DIVISION 06 // MILLWORK INTAKE DESK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Furnishing an Office Headquarters, Luxury Residence or Hotel?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Provide your interior joinery schedules, door schedules, or
                architectural elevations. Our millwork estimators prepare
                detailed cutting lists, timber sample boxes, and accurate
                turnkey proposals.
              </p>
              <div className="mt-space-sm flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary uppercase">
                <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
                <span className="text-outline-variant">|</span>
                <span>PHONE: +251 91 151 7784</span>
                <span className="text-outline-variant">|</span>
                <span>INSPECTIONS: WORKSHOP VISITS BY APPOINTMENT</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center bg-inverse-surface text-on-primary hover:bg-primary font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-all text-center border border-inverse-surface hover:border-primary"
              >
                <span>Submit Millwork Schedule →</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-colors text-center border border-outline-variant/40"
              >
                <span>Consult Master Woodworker</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
