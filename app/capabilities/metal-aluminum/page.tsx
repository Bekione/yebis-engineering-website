import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Metal Fabrication & Aluminum Systems",
  description:
    "Engineered building facades, thermally broken aluminum curtain walls, double glazing, structural steel stairs, and architectural metalwork fabricated in our certified workshop in Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/metal-aluminum`,
  },
  openGraph: {
    title: "Metal Fabrication & Aluminum Systems | Yebis Engineering",
    description:
      "Engineered building facades, curtain walls, and structural metalwork across Addis Ababa and Ethiopia.",
    url: `${SITE_URL}/capabilities/metal-aluminum`,
  },
};

const METRICS = [
  {
    label: "Monthly Output",
    value: "1,800 M²",
    desc: "Curtain wall framing, window assemblies, and architectural metalwork capacity.",
  },
  {
    label: "Wind Resistance",
    value: "2.4 kPa",
    desc: "Peak wind pressure resistance engineered for high-altitude highland structures.",
    highlight: true,
  },
  {
    label: "Air Permeability",
    value: "Class 4",
    desc: "EN 12207 maximum tightness specification with dual EPDM compression seals.",
  },
  {
    label: "Water Tightness",
    value: "1,200 Pa",
    desc: "ASTM E331 verified zero-water-penetration test proof under driving monsoon rain.",
  },
  {
    label: "Weld Inspection",
    value: "100% NDT",
    desc: "Certified AWS D1.1 structural welding with ultrasonic flaw detection.",
  },
];

const DELIVERABLES = [
  {
    code: "SUB-SCOPE 01 // FAÇADE ENVELOPE",
    grade: "THERMAL-BREAK DOUBLE GLAZING",
    title: "Curtain Walls & Glazed Building Envelopes",
    desc: "Unitized and stick-built curtain wall systems designed for commercial office towers, corporate headquarters, and institutional hubs. Thermal-break aluminum profiles with low-E insulated glass units (IGU) reduce solar heat gain while maximizing natural daylight.",
    items: [
      "Stick & semi-unitized structural curtain walls",
      "Thermally broken aluminum extrusion systems",
      "Solar control Low-E double & triple glazed units",
      "Integrated architectural spandrel glass bands",
    ],
  },
  {
    code: "SUB-SCOPE 02 // WINDOWS & PORTALS",
    grade: "HEAVY-DUTY HARDWARE",
    title: "Architectural Windows, Sliding Doors & Storefronts",
    desc: "Commercial storefronts, tilt-and-turn windows, and multi-track heavy-duty sliding portal systems. Designed to glide effortlessly while providing airtight, watertight seals against dust and driving highland rain.",
    items: [
      "Lift-and-slide heavy glass portal systems",
      "Acoustic tilt-and-turn European window profiles",
      "Frameless glass entrance storefronts with floor springs",
      "Multi-point perimeter locking hardware sets",
    ],
    highlight: true,
  },
  {
    code: "SUB-SCOPE 03 // STRUCTURAL STEEL",
    grade: "AWS D1.1 CERTIFIED",
    title: "Structural Steel Stairs, Mezzanines & Trusses",
    desc: "In-house structural metal fabrication: custom helical and straight mono-stringer steel staircases, commercial mezzanine floors, architectural entrance canopies, and long-span steel trusses.",
    items: [
      "Mono-stringer & architectural feature staircases",
      "Tempered laminated glass & steel balustrades",
      "Structural steel mezzanine floor platforms",
      "Cantilevered steel entrance canopy frames",
    ],
  },
  {
    code: "SUB-SCOPE 04 // ARCHITECTURAL METALWORK",
    grade: "QUALICOAT CLASS 2 POWDER",
    title: "Sunshade Louvers, Grilles & Perimeter Gates",
    desc: "Custom laser-cut metal architectural elements: solar shading fins, perforated aluminum facades, ventilation louvers, security gates, and perimeter decorative fencing treated with weather-resistant electrostatic powder coating.",
    items: [
      "Extruded aluminum airfoil sunshade louvers",
      "CNC laser-perforated architectural facade screens",
      "Heavy-duty motorized vehicular sliding gates",
      "Weather-resistant architectural powder coating",
    ],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Facade Engineering & Wind Load Modeling",
    desc: "Finite element analysis calculating wind pressure, thermal expansion, dead loads, and seismic movements based on building height and orientation.",
    gate: "GATE: STRUCTURAL CALCULATIONS APPROVAL",
  },
  {
    phase: "02",
    title: "CNC Aluminum Extrusion Cutting & Machining",
    desc: "Precision double-head miter saw cutting, automated milling of drainage weep holes, and corner bracket preparation with sub-millimeter tolerances.",
    gate: "GATE: EXTRUSION MITER ACCURACY AUDIT",
  },
  {
    phase: "03",
    title: "Steel Welding, Glazing & Workshop Assembly",
    desc: "Argon-shielded structural steel welding, corner crimping with two-part polyurethane adhesive, and precision workshop setting of insulated glass units.",
    gate: "GATE: 100% CORNER JOINT & SEAL CHECK",
  },
  {
    phase: "04",
    title: "Surface Pretreatment & Electrostatic Powder Coating",
    desc: "Chemical chromate-free cleaning, multi-stage rinsing, and electrostatic polyester powder coating cured in our temperature-controlled baking oven.",
    gate: "GATE: AAMA 2604 COATING ADHESION PASS",
  },
  {
    phase: "05",
    title: "Spider Crane Hoisting, Laser Alignment & Anchoring",
    desc: "Site rigging using specialized glass vacuum lifters, 3D laser datum positioning, bolted bracket torque verification, and external weatherproofing seals.",
    gate: "GATE: FIELD HOSE WATER PENETRATION CERTIFICATE",
  },
];

const COMPLIANCE_ROWS = [
  {
    system: "Static Water Penetration (Curtain Wall)",
    baseline: "Zero Leakage @ 1,200 Pa Static Head",
    protocol: "ASTM E331 Field Water Spray Rack Testing",
    standard: "ASTM E331 / AAMA 501.1",
    status: "100% ZERO LEAK",
  },
  {
    system: "Uniform Structural Wind Load Resistance",
    baseline: "2.4 kPa (L/175 Max Frame Deflection)",
    protocol: "Finite Element Model & ASTM E330 Chamber Proof",
    standard: "ASTM E330 / EBCS-1",
    status: "ZONE IV CERTIFIED",
  },
  {
    system: "Structural Steel Welding (Stairs & Trusses)",
    baseline: "Zero Slag Inclusion or Porosity",
    protocol: "Ultrasonic NDT & Magnetic Particle Inspection",
    standard: "AWS D1.1 / ISO 5817",
    status: "100% NDT PASS",
  },
  {
    system: "Insulated Double Glazing Thermal U-Value",
    baseline: "Ug < 1.4 W/m²K with Argon Cavity",
    protocol: "Calibrated Guarded Hot Box Calorimetry",
    standard: "EN 673 / ISO 10292",
    status: "THERMAL PASS",
  },
  {
    system: "Electrostatic Powder Coating Adhesion",
    baseline: "Class 0 (Zero Film Flaking on Cross-Hatch)",
    protocol: "Cross-Cut Tape Pull Test & Impact Rig",
    standard: "AAMA 2604 / ISO 2409",
    status: "QUALICOAT COMPLIANT",
  },
];

export default function MetalAluminumCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_MET-07 // METAL FABRICATION &amp; ALUMINUM SYSTEMS // DIVISION
              07
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>STANDARD: ASTM E330 / AWS D1.1</span>
            <span className="text-primary font-medium">
              STATUS: WORKSHOP OPERATIONAL
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
                <span>DIVISION 07</span>
                <span className="text-primary">•</span>
                <span>FACADES &amp; ENVELOPE // STRUCTURAL METALWORK</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Engineered Envelope Performance. Structural Metalwork With Zero
                Compromise.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Precision architectural aluminum curtain wall systems,
                thermal-break double glazing, structural steel staircases, and
                custom architectural metalwork fabricated under strict
                engineering tolerances.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                We design, fabricate, and install high-performance building
                envelopes that withstand intense tropical solar radiation, wind
                pressure, and monsoon rain while delivering clean modern
                architectural lines. Our specialized metal fabrication workshop
                operates CNC aluminum machining centers and certified structural
                welding lines to ensure millimeter-accurate facade tolerances
                across Ethiopia.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Facade Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Wind Load Analysis</span>
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
                <span>SPEC_CARD // MET-07</span>
                <span>WIND RESISTANCE: 2.4 KPA VERIFIED</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/30">
                <Image
                  src={IMG.facade}
                  alt="Architectural Curtain Wall and Aluminum Facade Installation"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 font-label-sm text-label-sm flex items-center justify-between uppercase">
                  <span>THERMAL-BREAK CURTAIN WALL // HIGHLAND SPEC</span>
                  <span className="text-primary font-medium">STC 42</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm uppercase bg-surface-container p-space-xs text-on-surface-variant">
                <div>
                  <span className="text-on-surface font-semibold">OUTPUT:</span>{" "}
                  1,800 M²/MONTH
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    WATER TIGHT:
                  </span>{" "}
                  1,200 PA ASTM
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    AIR TIGHT:
                  </span>{" "}
                  EN 12207 CLASS 4
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    WELD AUDIT:
                  </span>{" "}
                  100% AWS NDT
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
              METALLURGICAL &amp; ENVELOPE PERFORMANCE SPECIFICATIONS // GC-3
              AUDITED
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
                <span>METALLURGICAL CAPABILITY MODULES</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Facade &amp; Structural Steel Deliverables
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              STANDARDS: ASTM E330 // AWS D1.1 // AAMA 2604
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
                5-Phase Facade &amp; Metal Fabrication Protocol
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              WORKSHOP FABRICATED // CRANE HOISTED PRECISION
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
                <span>METALLURGICAL BENCHMARK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Quality Assurance &amp; Facade Testing Matrix
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              ASTM E330 // ASTM E331 // AWS D1.1 // EN 12207
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-outline-variant/40">
            <table className="w-full text-left font-body-sm text-body-sm min-w-[700px]">
              <thead className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                <tr>
                  <th className="py-3 px-space-md">System Element</th>
                  <th className="py-3 px-space-md">Performance Baseline</th>
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
                <span>DIVISION 07 // FACADE &amp; METALWORK INTAKE</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Planning a Commercial Curtain Wall, Window Scope or Structural
                Metalwork?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Submit your architectural elevations, window schedules, or
                structural steel drawings. Our facade engineering team provides
                comprehensive wind load calculations, thermal performance
                modeling, and accurate turnkey bids.
              </p>
              <div className="mt-space-sm flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary uppercase">
                <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
                <span className="text-outline-variant">|</span>
                <span>PHONE: +251 91 151 7784</span>
                <span className="text-outline-variant">|</span>
                <span>WORKSHOP: DEDICATED FABRICATION FACILITY</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center bg-inverse-surface text-on-primary hover:bg-primary font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-all text-center border border-inverse-surface hover:border-primary"
              >
                <span>Submit Facade Schedule →</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-colors text-center border border-outline-variant/40"
              >
                <span>Consult Facade Engineers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
