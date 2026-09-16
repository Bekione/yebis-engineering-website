import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Renovation, Remodeling & Asset Maintenance",
  description:
    "Engineered structural retrofitting, carbon fiber (CFRP) strengthening, commercial tenant reconfigurations, MEP modernization, and facilities maintenance for active buildings across Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/renovation-maintenance`,
  },
  openGraph: {
    title: "Renovation, Remodeling & Asset Maintenance | Yebis Engineering PLC",
    description:
      "Structural rehabilitation, carbon fiber strengthening, and adaptive reuse for commercial and institutional buildings across Ethiopia.",
    url: `${SITE_URL}/capabilities/renovation-maintenance`,
  },
};

const METRICS = [
  {
    label: "Carbon Fiber (CFRP)",
    value: "3,800 MPa",
    desc: "High-tensile composite wraps providing immense shear and flexural structural reinforcement.",
    highlight: true,
  },
  {
    label: "Load Capacity Upgrade",
    value: "+45%",
    desc: "Measured axial and seismic load enhancement on existing reinforced concrete columns.",
  },
  {
    label: "Subsurface Radar",
    value: "Radar GPR",
    desc: "Ground Penetrating Radar scanning locating concealed rebars and post-tension tendons before coring.",
  },
  {
    label: "Execution Flexibility",
    value: "24/7 Shifts",
    desc: "Off-hours and weekend phased work maintaining zero disruption to active building tenants.",
  },
  {
    label: "Asset Life Extension",
    value: "+25 Years",
    desc: "Comprehensive structural rehabilitation extending commercial building operational viability.",
  },
];

const DELIVERABLES = [
  {
    code: "SUB-SCOPE 01 // STRUCTURAL STRENGTHENING",
    grade: "HIGH-MODULUS CFRP",
    title: "Carbon Fiber Wrapping & Structural Reinforcement",
    desc: "Non-invasive structural enhancement for buildings undergoing change of use, extra floor additions, or earthquake code upgrades. We apply multi-ply carbon fiber reinforced polymers (CFRP), steel section jacketing, and structural foundation underpinning.",
    items: [
      "Column & beam carbon fiber shear wraps (CFRP)",
      "Steel plate & structural section beam jacketing",
      "Foundation enlargement & subterranean underpinning",
      "Structural crack injection with high-modulus epoxy",
    ],
  },
  {
    code: "SUB-SCOPE 02 // ADAPTIVE REUSE & REMODELING",
    grade: "OCCUPIED SITE PROTOCOL",
    title: "Commercial Tenant Reconfigurations & Fit-Outs",
    desc: "High-velocity interior remodeling for corporate offices, retail spaces, and specialized healthcare facilities (e.g., our radiation-shielded X-Ray renovation at St. Peter's and clinical suites at ALERT Hospital). We reconfigure floor layouts with acoustic partitions, modern ceilings, and updated finishes.",
    items: [
      "Commercial office floor repartitioning & refit",
      "Specialized healthcare & clinical cleanroom renovations",
      "Controlled dust-containment negative pressure barriers",
      "Architectural flooring, ceiling & lighting overhauls",
    ],
    highlight: true,
  },
  {
    code: "SUB-SCOPE 03 // LIVE MEP UPGRADES",
    grade: "ZERO-DOWNTIME RISERS",
    title: "Building Services Modernization & Re-Coring",
    desc: "Replacing aged, corroded plumbing lines and outdated electrical distribution panels in occupied structures. We plan bypass routing to maintain continuous building services while new systems are commissioned.",
    items: [
      "Vertical plumbing riser replacement in live buildings",
      "Electrical switchgear & sub-panel modernization",
      "Central air conditioning (VRF) & ventilation retrofits",
      "Diamond core drilling with GPR radar pre-scan",
    ],
  },
  {
    code: "SUB-SCOPE 04 // LIFECYCLE MAINTENANCE",
    grade: "PREVENTATIVE SLA CONTRACTS",
    title: "Facade Restoration & Preventative Facilities Care",
    desc: "Comprehensive exterior restoration, structural joint resealing, elastomeric roof waterproofing, and ongoing planned maintenance agreements that preserve institutional asset value over decades.",
    items: [
      "Curtain wall gasket resealing & glass replacements",
      "Elastomeric polyurethane roof membrane restoration",
      "Exterior concrete spalling repair & protective coatings",
      "Scheduled quarterly preventative maintenance audits",
    ],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Non-Destructive Structural Survey & GPR Radar Scan",
    desc: "Schmidt hammer rebound tests, ultrasonic pulse velocity, and ground penetrating radar (GPR) to map internal rebar density, concrete strength, and structural flaws.",
    gate: "GATE: STRUCTURAL CONDITION AUDIT REPORT",
  },
  {
    phase: "02",
    title: "Retrofit Engineering & Temporary Shoring Design",
    desc: "Structural recalculation of existing dead and live load capacities, followed by engineered propping and temporary load transfer shoring installation.",
    gate: "GATE: SHORING LOAD PERMIT APPROVAL",
  },
  {
    phase: "03",
    title: "Dust-Contained Demolition & Concrete Surface Prep",
    desc: "Erection of sealed floor barriers, HEPA air scrubbers, and diamond grinding of concrete surfaces to an open aggregate profile required for composite bonding.",
    gate: "GATE: SUBSTRATE PROFILE (ICRI CSP 3) AUDIT",
  },
  {
    phase: "04",
    title: "CFRP Application, Steel Jacketing & MEP Overhaul",
    desc: "Application of two-part epoxy saturant, carbon fiber fabric lamination without voids, structural steel plate bolting, and parallel MEP service modernizations.",
    gate: "GATE: COMPOSITE PULL-OFF TENSILE PASS",
  },
  {
    phase: "05",
    title: "Fire Protection, Architectural Trim & Commissioning",
    desc: "Application of fire-retardant intumescent plaster over retrofitted structural members, completion of architectural finishes, and structural sign-off.",
    gate: "GATE: FINAL AS-BUILT STRUCTURAL RE-CERTIFICATION",
  },
];

const COMPLIANCE_ROWS = [
  {
    system: "Carbon Fiber CFRP Direct Tensile Pull-Off",
    baseline: "> 1.5 MPa (Concrete Substrate Failure)",
    protocol: "ASTM D4541 Digital Adhesion Tester Pull",
    standard: "ACI 440.2R / ASTM D4541",
    status: "100% SUBSTRATE PASS",
  },
  {
    system: "Subsurface Rebar / Tendon Detection Precision",
    baseline: "±2.0mm Depth & Lateral Spatial Margin",
    protocol: "Dual-Frequency Ground Penetrating Radar (GPR)",
    standard: "EN 13508 / ACI 228.2R",
    status: "ZERO TENDON CUTS",
  },
  {
    system: "Existing In-Situ Concrete Core Strength",
    baseline: "Equivalent Cube Strength > 25 MPa",
    protocol: "Core Extraction & Laboratory Crushing",
    standard: "ASTM C42 / EBCS-2",
    status: "VERIFIED CAPACITY",
  },
  {
    system: "Structural Propping / Shoring Settlement",
    baseline: "< 1.0mm Deflection Under Active Floor Loads",
    protocol: "Optical Micro-Gauge Deflectometer Monitoring",
    standard: "BS 5975 / DIN 4420",
    status: "STABILIZED ZERO SAG",
  },
  {
    system: "Occupied Building Acoustic & Vibration Limits",
    baseline: "< 65 dB(A) in Adjacent Operating Workspaces",
    protocol: "Calibrated Sound Level & Accelerometer Logging",
    standard: "DIN 4150-3 / WHO Workplace",
    status: "OCCUPANT COMPLIANT",
  },
];

export default function RenovationCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_REN-08 // RENOVATION, REMODELING &amp; MAINTENANCE // DIVISION
              08
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>STANDARD: ACI 440.2R / EBCS-2</span>
            <span className="text-primary font-medium">
              SHIFTS: 24/7 OFF-HOURS AVAILABLE
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
                <span>DIVISION 08</span>
                <span className="text-primary">•</span>
                <span>
                  ASSET RETROFITTING // ADAPTIVE REUSE // OCCUPIED BUILDINGS
                </span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Engineered Adaptive Reuse. Preserving Structural Value in Active
                Sites.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Comprehensive structural rehabilitation, carbon fiber (CFRP)
                strengthening, commercial tenant renovations, and live MEP
                modernizations across Ethiopian corporate, institutional, and
                healthcare properties.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                We execute complex structural alterations within occupied
                commercial towers, institutional hospitals, and residential
                properties without disrupting ongoing operations or compromising
                load-bearing integrity. Single-source Grade 1 accountability
                guarantees clean coordination between structural reinforcement,
                mechanical re-coring, and architectural finishes across Addis
                Ababa.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Renovation Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Structural Audit</span>
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
                <span>SPEC_CARD // REN-08</span>
                <span>STRUCTURAL INTEGRITY: 100% VERIFIED</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/30">
                <Image
                  src={IMG.renovation}
                  alt="Structural Concrete Strengthening and Commercial Renovation in Progress"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 font-label-sm text-label-sm flex items-center justify-between uppercase">
                  <span>CFRP REINFORCEMENT // ACTIVE SITE RETROFIT</span>
                  <span className="text-primary font-medium">
                    +45% CAPACITY
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm uppercase bg-surface-container p-space-xs text-on-surface-variant">
                <div>
                  <span className="text-on-surface font-semibold">
                    POLYMER:
                  </span>{" "}
                  3-PLY CFRP
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    CAPACITY:
                  </span>{" "}
                  +45% LOAD
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    SCAN RADAR:
                  </span>{" "}
                  GPR ±2.0MM
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    OCCUPANCY:
                  </span>{" "}
                  ZERO DISRUPTION
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
            <span>
              RETROFIT SPECIFICATIONS // STRUCTURAL PERFORMANCE METRICS
            </span>
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
                <span>REHABILITATION &amp; RETROFIT WORK PACKAGES</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Renovation &amp; Asset Deliverables
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              STANDARDS: ACI 440.2R // EBCS-2 // DIN 4150
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
                5-Phase Retrofit &amp; Remodeling Protocol
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              CONTAINED WORKS // CONTINUOUS TENANT OPERATIONS
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
                <span>RETROFIT TESTING BENCHMARK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Structural Rehabilitation Testing Matrix
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              ACI 440.2R // ASTM D4541 // EBCS-2 // DIN 4150-3
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-outline-variant/40">
            <table className="w-full text-left font-body-sm text-body-sm min-w-[700px]">
              <thead className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                <tr>
                  <th className="py-3 px-space-md">Assessment Area</th>
                  <th className="py-3 px-space-md">Structural Baseline</th>
                  <th className="py-3 px-space-md">
                    Field Verification Protocol
                  </th>
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
                      {row.system}
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
                <span>DIVISION 08 // RETROFIT &amp; RENOVATION DESK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Planning a Structural Retrofit, Commercial Remodeling or
                Facility Overhaul?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Contact our structural rehabilitation engineers for an on-site
                condition assessment, non-destructive concrete scanning, or
                tenant fit-out methodology for your existing building in
                Ethiopia.
              </p>
              <div className="mt-space-sm flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary uppercase">
                <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
                <span className="text-outline-variant">|</span>
                <span>PHONE: +251 91 151 7784</span>
                <span className="text-outline-variant">|</span>
                <span>STATUS: GRADE 1 CERTIFIED</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center bg-inverse-surface text-on-primary hover:bg-primary font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-all text-center border border-inverse-surface hover:border-primary"
              >
                <span>Request Renovation Assessment →</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-colors text-center border border-outline-variant/40"
              >
                <span>Consult Retrofit Engineer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
