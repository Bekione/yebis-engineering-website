import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Plumbing, Drainage & Sanitary Systems",
  description:
    "Turnkey building plumbing, potable water reticulation, acoustic drainage stacks, booster pump skids, and sanitary fixture installations for residential, commercial, and institutional buildings across Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/plumbing-sanitary`,
  },
  openGraph: {
    title: "Plumbing, Drainage & Sanitary Systems | Yebis Engineering",
    description:
      "Precision building plumbing networks, acoustic drainage, and sanitary systems across Addis Ababa and Ethiopia.",
    url: `${SITE_URL}/capabilities/plumbing-sanitary`,
  },
};

const METRICS = [
  {
    label: "Hydrostatic Proof",
    value: "12 Bar",
    desc: "24-hour certified pressure test hold ensuring zero micro-leaks in all walls and slabs.",
    highlight: true,
  },
  {
    label: "Booster Redundancy",
    value: "Triplex N+1",
    desc: "VFD automated inverter multi-pump skids ensuring consistent water pressure across all floors.",
  },
  {
    label: "Drainage Acoustics",
    value: "< 20 dB(A)",
    desc: "Mineral-reinforced acoustic uPVC soil and waste stacks eliminating flush noise in living spaces.",
  },
  {
    label: "Backflow Prevention",
    value: "Double Check",
    desc: "Dual-check valve contamination barriers isolating municipal water from building reserves.",
  },
  {
    label: "Slope Precision",
    value: "100% CCTV",
    desc: "Laser-aligned pipe gradient control verified by high-definition crawler camera inspection.",
  },
];

const DELIVERABLES = [
  {
    code: "SUB-SCOPE 01 // POTABLE WATER",
    grade: "PN20 PPR-C & MULTI-LAYER",
    title: "Pressurized Potable Water Reticulation",
    desc: "Clean, hygienic hot and cold water distribution throughout buildings and homes. We use virgin-grade PPR-C fusion-welded piping with dedicated floor isolation valves, eliminating concealed joints and preventing water damage.",
    items: [
      "Thermal fusion-welded PPR-C piping networks",
      "Centralized solar & electric hot water loops",
      "Independent floor and unit isolation valves",
      "Pressure-reducing valve (PRV) stations per zone",
    ],
  },
  {
    code: "SUB-SCOPE 02 // DRAINAGE & VENTILATION",
    grade: "ACOUSTIC MINERAL uPVC",
    title: "Acoustic Soil, Waste & Vent (SWV) Stacks",
    desc: "Engineered gravity drainage networks that silently convey sanitary discharge without odor leakage or gurgling. Designed with generous inspection cleanouts, acoustic vibration-dampening brackets, and proper roof vents.",
    items: [
      "Mineral-reinforced acoustic drainage pipework",
      "Anti-siphon trap seals & air admittance valves",
      "Accessible vertical cleanout inspection doors",
      "Kitchen grease interceptors & sediment traps",
    ],
    highlight: true,
  },
  {
    code: "SUB-SCOPE 03 // WATER STORAGE & PUMPS",
    grade: "AUTOMATED VFD CONTROLS",
    title: "Basement Booster Skids & Sump Stations",
    desc: "Complete building water management: basement storage reservoirs, automated variable frequency booster skids, rooftop buffer tanks, and heavy-duty submersible sump pumps for basement drainage.",
    items: [
      "VFD stainless steel multi-stage booster pump skids",
      "Submersible sewage & greywater sump pump stations",
      "Basement rainwater & perimeter dewatering sumps",
      "Underground composite & concrete reservoir plumbing",
    ],
  },
  {
    code: "SUB-SCOPE 04 // SANITARY FITMENTS",
    grade: "SWISS & EUROPEAN FITTINGS",
    title: "Sanitary Ware & Architectural Fixture Fit-Out",
    desc: "Precision installation of high-end bathroom and kitchen sanitaryware: concealed in-wall cisterns, wall-hung toilets, thermostatic rain showers, sensor faucets, and handicap-accessible fixtures.",
    items: [
      "Concealed wall-carrier cistern installations (Geberit)",
      "Wall-hung sanitaryware with laser alignment",
      "Thermostatic concealed shower mixing valves",
      "Sensor-activated commercial hygiene fixtures",
    ],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Hydraulic Demand & Pressure Zone Sizing",
    desc: "Calculation of peak water fixture units (FU), sizing of main risers, and planning pressure zones to guarantee uniform water flow from ground floor to penthouse.",
    gate: "GATE: HYDRAULIC SCHEMATIC APPROVAL",
  },
  {
    phase: "02",
    title: "Sub-Slab & Underground Drainage Rough-In",
    desc: "Laser-guided trenching and bed preparation for underground sanitary lines, cast-in sleeve placements in foundation beams, and pre-pour inspection.",
    gate: "GATE: PRE-POUR GRAVITY SLOPE AUDIT",
  },
  {
    phase: "03",
    title: "Vertical Supply Risers & Acoustic Stacks",
    desc: "Erection of vertical water supply risers, sound-dampened acoustic drain stacks, and horizontal distribution runs within ceiling plenums and drywall shafts.",
    gate: "GATE: 12-BAR HYDROSTATIC PRESSURE PASS",
  },
  {
    phase: "04",
    title: "Booster Plant Room & Reservoir Plumbing",
    desc: "Installation of booster pump skids, float switches, pressure tanks, water filtration stages, and interconnecting manifold valving in mechanical rooms.",
    gate: "GATE: PUMP SKID AUTOMATION COMMISSIONING",
  },
  {
    phase: "05",
    title: "Sanitary Fixture Trim-Out & Drain CCTV Verification",
    desc: "Setting and sealing of porcelain ware, faucets, shower valves, followed by a full CCTV camera crawler survey of all main sewer branches to guarantee zero blockages.",
    gate: "GATE: FINAL SANITARY CERTIFICATION & HANDOVER",
  },
];

const COMPLIANCE_ROWS = [
  {
    system: "Potable Water Supply Network (Hot & Cold)",
    baseline: "12 Bar (1.2 MPa) for 24 Hours",
    protocol: "Hydrostatic Pressure Test with Digital Gauge",
    standard: "DIN 1988 / EBCS-9",
    status: "100% LEAK-FREE PASS",
  },
  {
    system: "Gravity Soil & Waste Pipework Gradient",
    baseline: "1:50 (2%) Minimum Uniform Fall",
    protocol: "Digital Optical Level & In-Pipe Laser Datum",
    standard: "BS EN 12056-2",
    status: "VERIFIED SLOPE",
  },
  {
    system: "Main Building Drainage Collector Lines",
    baseline: "Zero Sag, Zero Debris Obstruction",
    protocol: "Closed-Circuit TV (CCTV) Crawler Inspection",
    standard: "EN 13508-2",
    status: "CCTV CERTIFIED",
  },
  {
    system: "Sanitary Trap Seal Water Depth",
    baseline: "50mm to 75mm Minimum Water Seal",
    protocol: "Differential Pressure Siphonage Testing",
    standard: "BS EN 12056 / EBCS",
    status: "SEAL INTEGRITY PASS",
  },
  {
    system: "Submersible Sump Ejector Cut-In / Cut-Out",
    baseline: "Automated Dual-Float Level Activation",
    protocol: "Water Chamber Simulated Flood Testing",
    standard: "EN 12050-1",
    status: "DUAL RUN VERIFIED",
  },
];

export default function PlumbingCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_HYD-04 // PLUMBING, DRAINAGE &amp; SANITARY // DIVISION 04
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>STANDARD: EBCS-9 / DIN 1988 / BS EN 12056</span>
            <span className="text-primary font-medium">
              PRESSURE: 12-BAR HOLD
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
                <span>DIVISION 04</span>
                <span className="text-primary">•</span>
                <span>BUILDING PLUMBING, DRAINAGE &amp; SANITARY NETWORKS</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Pressure-Balanced Hydraulics. Zero-Leak Reliability Across Every
                Floor.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Complete building plumbing networks, acoustic wastewater
                drainage, multi-stage pressure booster skids, and precision
                sanitary ware installations engineered for apartments,
                commercial towers, healthcare facilities, and private
                residences.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Plumbing issues in multi-story buildings and homes cause
                extensive interior damage when corners are cut. From basement
                water reservoirs and variable-frequency booster systems to
                top-floor penthouses, our hydraulic team eliminates water
                hammer, prevents acoustic drain transmission, and guarantees
                100% leak-free integrity through 12-bar pressure certification
                and laser-graded drainage slopes across Addis Ababa.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Plumbing Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Hydraulic Sizing</span>
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
                <span>SPEC_CARD // HYD-04</span>
                <span>PRESSURE HOLD: 12-BAR CERTIFIED</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/30">
                <Image
                  src={IMG.plumbing}
                  alt="Building Mechanical Room with Water Booster Pump Skid and Manifold"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 font-label-sm text-label-sm flex items-center justify-between uppercase">
                  <span>TRIPLEX BOOSTER PLANT // BUILDING WATER SYSTEM</span>
                  <span className="text-primary font-medium">VFD ACTIVE</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm uppercase bg-surface-container p-space-xs text-on-surface-variant">
                <div>
                  <span className="text-on-surface font-semibold">
                    PRESSURE CLASS:
                  </span>{" "}
                  PN20 PPR-C
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    DRAINAGE ACOUSTIC:
                  </span>{" "}
                  &lt; 20 dB(A)
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    TEST STANDARD:
                  </span>{" "}
                  12 BAR 24-HR
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    INSPECTION:
                  </span>{" "}
                  100% CCTV PASS
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
              HYDRAULIC SPECIFICATIONS // SANITARY PERFORMANCE TELEMETRY
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
                <span>BUILDING HYDRAULIC PACKAGES</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Core Plumbing &amp; Sanitary Deliverables
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              STANDARDS: EBCS-9 // DIN 1988 // BS EN 12056
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
                5-Phase Building Plumbing Protocol
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              ZERO-LEAK ASSURANCE // 24-HOUR PRESSURE CERTIFIED
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
                <span>HYDRAULIC BENCHMARK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Plumbing &amp; Sanitary Compliance Matrix
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              EBCS-9 // DIN 1988 // BS EN 12056 // EN 13508
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-outline-variant/40">
            <table className="w-full text-left font-body-sm text-body-sm min-w-[700px]">
              <thead className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                <tr>
                  <th className="py-3 px-space-md">Subsystem Work Package</th>
                  <th className="py-3 px-space-md">Engineering Baseline</th>
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
                <span>DIVISION 04 // PLUMBING &amp; SANITARY INTAKE</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Designing Building Water Supply, Drainage, or Luxury Bathrooms?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Send us your architectural floor plans and plumbing schematics.
                Our engineers calculate accurate pipe sizing, pump heads, and
                sanitary fixture schedules to guarantee silent, leak-free
                operation for your building or residential home.
              </p>
              <div className="mt-space-sm flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary uppercase">
                <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
                <span className="text-outline-variant">|</span>
                <span>PHONE: +251 91 151 7784</span>
                <span className="text-outline-variant">|</span>
                <span>STATUS: 12-BAR CERTIFIED</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center bg-inverse-surface text-on-primary hover:bg-primary font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-all text-center border border-inverse-surface hover:border-primary"
              >
                <span>Submit Plumbing Drawings →</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-colors text-center border border-outline-variant/40"
              >
                <span>Consult Plumbing Engineers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
