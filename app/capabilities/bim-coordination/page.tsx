import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "Virtual Design & BIM Coordination",
  description:
    "Multi-disciplinary 3D clash detection, LOD 400 federated modeling, and structural-to-MEP coordination eliminating site change orders for building projects in Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/bim-coordination`,
  },
  openGraph: {
    title: "Virtual Design & BIM Coordination | Yebis Engineering",
    description:
      "Multi-disciplinary 3D clash detection, LOD 400 federated modeling, and structural-to-MEP coordination across Addis Ababa and Ethiopia.",
    url: `${SITE_URL}/capabilities/bim-coordination`,
  },
};

const METRICS = [
  {
    label: "Parametric Standard",
    value: "LOD 400",
    desc: "Fabrication-ready concrete, rebar & MEP shop components.",
  },
  {
    label: "Clash Detection",
    value: "100%",
    desc: "Pre-pour Navisworks & Revit hard/soft spatial interferences cleared.",
    highlight: true,
  },
  {
    label: "Rework Reduction",
    value: "-85%",
    desc: "Measured decrease in slab coring and beam sleeve modifications.",
  },
  {
    label: "Scan-To-BIM Precision",
    value: "±1.0MM",
    desc: "Terrestrial LiDAR 3D point cloud field verification.",
  },
  {
    label: "Delivery Protocol",
    value: "ISO 19650",
    desc: "Structured digital twin asset dossier for institutional facilities.",
  },
];

const DELIVERABLES = [
  {
    code: "SUB-SCOPE 01 // FEDERATION",
    grade: "LOD 350 - 400",
    title: "Multi-Discipline Federated Modeling",
    desc: "Architectural intent, reinforced concrete frames, structural steel connections, and MEP distribution synthesized into a single-source coordinate model before site groundbreaking.",
    items: [
      "Shared Coordinate Datum Setups (UTM 37N)",
      "Revit-Tekla Structural Mapping",
      "Cast Concrete Embedded Plates & Inserts",
      "Mechanical Shaft & Riser Spatial Allocation",
    ],
  },
  {
    code: "SUB-SCOPE 02 // INTERFERENCE",
    grade: "ZERO HARD CLASHES",
    title: "Automated MEP Clash Matrix",
    desc: "Algorithmic collision detection in Autodesk Navisworks identifying interferences between post-tensioned tendons, gravity drainage falls, and HVAC ducts before rebar is tied.",
    items: [
      "Weekly BCF Coordination Workshops",
      "Core Riser & Beam Sleeve Penetrations",
      "Gravity Sanitary Fall Verification",
      "Ceiling Void MEP Coordination",
    ],
    highlight: true,
  },
  {
    code: "SUB-SCOPE 03 // LASER SURVEY",
    grade: "POINT DENSITY < 2MM",
    title: "3D Laser Scanning & As-Built Verification",
    desc: "High-resolution terrestrial LiDAR scanning captures as-cast column plumbness, floor levelness, and sleeve alignments, overlaying variances directly against engineering models.",
    items: [
      "Terrestrial LiDAR Field Capture",
      "Floor Slab Deflection Heatmaps",
      "Curtain Wall Anchor Alignment Check",
      "Underground Drainage & Utility Geo-Trace",
    ],
  },
  {
    code: "SUB-SCOPE 04 // FABRICATION",
    grade: "LOD 400 READY",
    title: "Shop & Rebar Detailing Dossiers",
    desc: "Computer-generated bar bending schedules, sleeve layout templates, and steel connection details extracted directly from the federated model with zero manual drafting error.",
    items: [
      "Automated Bar Bending Schedules (BBS)",
      "Formwork Tie-Hole Layout Plans",
      "Sleeve Penetration Shop Tickets",
      "As-Built Subcontractor Sign-off",
    ],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Existing Condition & Topographic Survey",
    desc: "High-accuracy topographic survey, property boundary registration, and existing underground utility mapping establishing true project datum elevations.",
    gate: "GATE: DATUM CONTROL APPROVAL",
  },
  {
    phase: "02",
    title: "Multi-Trade Model Federation (LOD 350)",
    desc: "Consolidation of structural framing, architectural partitions, and MEP riser pathways into a unified coordinate system across all building levels.",
    gate: "GATE: FEDERATED MODEL AUDIT",
  },
  {
    phase: "03",
    title: "Automated Clash Matrix & Spatial Resolution",
    desc: "Comprehensive collision detection rulesets executed weekly with structural and MEP discipline leads to resolve conflicts before steel is bent or concrete poured.",
    gate: "GATE: ZERO HARD CLASH CERTIFICATE",
  },
  {
    phase: "04",
    title: "Pre-Pour Shop Drawing Generation",
    desc: "Extraction of dimensioned shop drawings, sleeve cutouts, embedded plates, and bar schedules stamped with exact site coordinates for field teams.",
    gate: "GATE: FABRICATION-READY RELEASE",
  },
  {
    phase: "05",
    title: "As-Built Laser Scan & Asset Dossier Handover",
    desc: "Progressive post-pour LiDAR scans verifying as-built positions against the design model, culminating in an audited digital asset dossier for building facility management.",
    gate: "GATE: FINAL AS-BUILT & ISO 19650 HANDOVER",
  },
];

const COMPLIANCE_ROWS = [
  {
    discipline: "Structural RC vs. MEP Riser Ducts",
    baseline: "±5.0mm Spatial Clearance",
    protocol: "Automated 3D Navisworks Collision Envelope",
    standard: "ISO 19650 / EBCS-2",
    status: "100% RECONCILED",
  },
  {
    discipline: "Cast-in Slab Sleeve Openings",
    baseline: "Laser-Verified Spatial Datum",
    protocol: "Total Station Laser Overlay Pre-Pour Inspection",
    standard: "DIN 18202 Class 3",
    status: "PASSED (0 ERROR)",
  },
  {
    discipline: "Rebar Bending Schedule Detailing",
    baseline: "Zero Field Cutting / Bending",
    protocol: "Workshop Rebar Fabrication & 3D Model Interlock",
    standard: "BS 8666 / ASTM A615",
    status: "CERTIFIED LOD 400",
  },
  {
    discipline: "Post-Tension Tendon Anchorages",
    baseline: "±2.0mm Profile Elevation",
    protocol: "Volumetric Rebar Clash Simulation",
    standard: "PTI M10.2 / EBCS-2",
    status: "VERIFIED PRE-STRESS",
  },
  {
    discipline: "Curtain Wall Anchors & Embeds",
    baseline: "±1.5mm Edge Deviation",
    protocol: "Terrestrial LiDAR Point Cloud Deflection Heatmap",
    standard: "AAMA 501 / EN 13830",
    status: "SUB-MM MATCH",
  },
];

export default function BimCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_BIM-02 // VIRTUAL DESIGN &amp; BIM COORDINATION // DIVISION 02
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>SPEC: LOD 400 FEDERATION</span>
            <span className="text-primary font-medium">
              STATUS: ACTIVE COLLABORATION
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
                <span>DIVISION 02</span>
                <span className="text-primary">•</span>
                <span>VIRTUAL DESIGN &amp; BIM // LOD 400</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Resolving The Build Before Groundbreaking. Zero Field Clashes.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Multi-disciplinary clash resolution, parametric 3D federated
                modeling, and structural-to-MEP reconciliation eliminating
                costly site redesigns across Ethiopian commercial and
                institutional projects.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Subterranean conduit clashes, structural beam core re-drilling,
                and HVAC duct conflicts compound rapidly once concrete is
                poured. Our Virtual Design &amp; Construction unit executes
                digital fabrication models down to rebars, anchor bolts, and MEP
                branch penetrations - ensuring total spatial reconciliation
                prior to ground mobilization in Addis Ababa.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Coordinated Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Clash Detection Audit</span>
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
                <span>SPEC_CARD // BIM-02</span>
                <span>RESOLUTION: PRE-POUR ZERO CONFLICT</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/30">
                <Image
                  src={IMG.bimDrafting}
                  alt="3D Building Information Modeling and Clash Detection Review"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 font-label-sm text-label-sm flex items-center justify-between uppercase">
                  <span>FEDERATED CLASH MATRIX // LOD 400</span>
                  <span className="text-primary font-medium">
                    TOLERANCE: ±0.00MM
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm uppercase bg-surface-container p-space-xs text-on-surface-variant">
                <div>
                  <span className="text-on-surface font-semibold">
                    MODEL COORD:
                  </span>{" "}
                  UTM 37N ADDIS
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    COLLISIONS:
                  </span>{" "}
                  100% CLEARED
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    SOFTWARE:
                  </span>{" "}
                  REVIT / NAVISWORKS
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    STANDARD:
                  </span>{" "}
                  ISO 19650 COMPLIANT
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
            <span>ENGINEERING METRICS // SPATIAL RECONCILIATION DATUM</span>
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
                <span>04 SPECIALIZED BIM DELIVERABLE UNITS</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Integrated Coordination Deliverables
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              EXECUTION: ISO 19650 PROJECT DELIVERY
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
                5-Phase BIM Coordination Protocol
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              SEQUENTIAL QUALITY GATES // ZERO FIELD REWORK
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
                <span>STANDARDS BENCHMARK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                QA &amp; Spatial Compliance Matrix
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              EBCS // ISO 19650 // DIN 18202 // BS 8666
            </div>
          </div>

          <ScrollFade direction="horizontal" fadeSize={24} fadeMode="scroll" className="w-full">
            <div className="w-full overflow-x-auto border border-outline-variant/40">
            <table className="w-full text-left font-body-sm text-body-sm min-w-[700px]">
              <thead className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                <tr>
                  <th className="py-3 px-space-md">Discipline Interface</th>
                  <th className="py-3 px-space-md">Geometric Baseline</th>
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
                      {row.discipline}
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
        </ScrollFade>
        </div>
      </section>

      {/* Technical Intake / Callout Banner */}
      <section className="w-full bg-surface-container-low py-space-xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-surface p-space-lg lg:p-space-xl border border-outline-variant/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary"></span>
                <span>DIVISION 02 // TECHNICAL INTAKE DESK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Planning a Complex Multi-Disciplinary Build? Have Your Drawings
                Clash-Tested.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Submit your architectural, structural, and MEP CAD or BIM
                models. Our Addis Ababa engineering team runs a comprehensive
                spatial collision assessment to identify hidden field clashes
                and cost traps before concrete is scheduled.
              </p>
              <div className="mt-space-sm flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary uppercase">
                <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
                <span className="text-outline-variant">|</span>
                <span>PHONE: +251 91 151 7784</span>
                <span className="text-outline-variant">|</span>
                <span>STATUS: GRADE 3 ACCREDITED</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center bg-inverse-surface text-on-primary hover:bg-primary font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-all text-center border border-inverse-surface hover:border-primary"
              >
                <span>Submit CAD / BIM Drawings →</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-colors text-center border border-outline-variant/40"
              >
                <span>Contact Engineering Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
