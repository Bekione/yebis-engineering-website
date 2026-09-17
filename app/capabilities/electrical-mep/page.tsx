import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Electrical & Building Systems (MEP)",
  description:
    "Engineered building electrical systems: medium-to-low voltage distribution, synchronized backup generators, automated transfer switchgear (ATS), and low-current network cabling across Ethiopia.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/electrical-mep`,
  },
  openGraph: {
    title: "Electrical & Building Systems (MEP) | Yebis Engineering",
    description:
      "Engineered electrical systems, backup power synchronization, and building automation across Addis Ababa and Ethiopia.",
    url: `${SITE_URL}/capabilities/electrical-mep`,
  },
};

const METRICS = [
  {
    label: "Voltage Transformation",
    value: "11kV / 400V",
    desc: "Compact substation transformers and cast-resin distribution packages.",
  },
  {
    label: "Emergency Failover",
    value: "< 8.0 SEC",
    desc: "Automated generator synchronization with motorized ATS transfer.",
    highlight: true,
  },
  {
    label: "Power Quality (THD)",
    value: "< 3%",
    desc: "Harmonic filtering protecting elevators, pumps, and sensitive electronics.",
  },
  {
    label: "Earthing Resistance",
    value: "< 1.0 Ω",
    desc: "Chemical earth pits engineered for Addis Ababa's volcanic basalt substrata.",
  },
  {
    label: "Regulatory Code",
    value: "IEC / EEP",
    desc: "Full compliance with IEC 60364 and Ethiopian Electric Power statutory standards.",
  },
];

const DELIVERABLES = [
  {
    code: "SUB-SCOPE 01 // POWER DISTRIBUTION",
    grade: "FORM 4B CERTIFIED",
    title: "Main Distribution Boards (MDB) & SDB Networks",
    desc: "Custom-built, modular distribution panels engineered for commercial buildings, healthcare suites, and multi-tenant complexes. Internal segregation isolates individual circuits for safe maintenance without total facility shutdown.",
    items: [
      "Main Distribution Boards (MDB) up to 4000A",
      "Sub-Distribution Boards (SDB) per floor zone",
      "Busbar trunking risers for vertical high-rises",
      "Digital multi-function power monitoring meters",
    ],
  },
  {
    code: "SUB-SCOPE 02 // EMERGENCY STANDBY",
    grade: "N+1 REDUNDANCY",
    title: "Backup Generators & Synchronized ATS",
    desc: "Uninterrupted backup power architecture designed for high-volatility grid environments. We size and install heavy-duty diesel generators with sound-attenuated enclosures, fuel transfer systems, and motorized ATS panels.",
    items: [
      "Synchronized multi-generator plant setups",
      "Motorized Automatic Transfer Switches (ATS)",
      "Dedicated underground bulk fuel storage skids",
      "Critical emergency circuit isolation panels",
    ],
    highlight: true,
  },
  {
    code: "SUB-SCOPE 03 // EXTRA LOW VOLTAGE (ELV)",
    grade: "CAT 6A / FIBER BACKBONE",
    title: "Structured Cabling & Building Systems",
    desc: "Complete low-current infrastructure integrating enterprise data networks, access control, surveillance, and automated addressable fire alarm systems seamlessly within the building fabric.",
    items: [
      "Structured Cat6A / OM4 fiber optic cabling",
      "Addressable smoke detection & fire alarm systems",
      "CCTV surveillance & IP access control portals",
      "Energy-efficient LED lighting control automation",
    ],
  },
  {
    code: "SUB-SCOPE 04 // PROTECTION & EARTHING",
    grade: "ZONE IV SURGE PROTECTION",
    title: "Earthing & Lightning Protection Grids",
    desc: "High-integrity earthing grids and rooftop Faraday cage air terminals engineered to protect buildings from severe tropical lightning strikes and grid-level electrical surges common across the Ethiopian highlands.",
    items: [
      "Rooftop copper air terminal lightning networks",
      "Chemical earth wells (< 1.0 Ohm verified)",
      "Type 1 + 2 surge protection devices (SPD)",
      "Equipotential bonding across all metallic services",
    ],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Electrical Load Calculation & System Sizing",
    desc: "Rigorous maximum demand analysis, diversity factor calculation, and cable sizing according to architectural floor layouts and equipment rosters.",
    gate: "GATE: LOAD AUDIT & UTILITY APPROVAL",
  },
  {
    phase: "02",
    title: "Containment & Conduit Rough-In",
    desc: "Installation of heavy-duty galvanized steel cable ladders, cable trays, and cast-in slab conduits before screeding and drywall closing.",
    gate: "GATE: PRE-POUR CONDUIT INSPECTION",
  },
  {
    phase: "03",
    title: "Cable Pulling, Trunking & Substation Erection",
    desc: "Low-smoke zero-halogen (LSZH) cable pulling, transformer rigging, and switchboard positioning on vibration-isolated concrete plinths.",
    gate: "GATE: CONTINUITY & MEGGER CLEARANCE",
  },
  {
    phase: "04",
    title: "Panel Termination, ATS & Generator Integration",
    desc: "Laser-calibrated torque terminations, ATS motorized link installation, generator exhaust ducting, and emergency battery charger setup.",
    gate: "GATE: COLD COMMISSIONING AUDIT",
  },
  {
    phase: "05",
    title: "Live Energization, Load Balancing & Certification",
    desc: "Coordinated utility cutover with Ethiopian Electric Utility (EEU), 3-phase load balance testing, infrared thermographic camera scan, and as-built single line diagrams (SLD).",
    gate: "GATE: FINAL ENERGIZATION & STATUTORY PERMIT",
  },
];

const COMPLIANCE_ROWS = [
  {
    system: "Main Switchgear Insulation (Phase-to-Earth)",
    baseline: "> 100 Megohms @ 1000V DC",
    protocol: "Digital Megger Insulation Resistance Survey",
    standard: "IEC 60364-6 / EEP",
    status: "CERTIFIED PASS",
  },
  {
    system: "Emergency Power Cutover & ATS Transfer",
    baseline: "< 8.0 Seconds Full Recovery",
    protocol: "Simulated Mains Blackout Failover Test",
    standard: "NFPA 110 / ISO 8528",
    status: "VERIFIED (< 7.2S)",
  },
  {
    system: "Basalt Substrata Earthing Resistance",
    baseline: "< 1.0 Ohm True Earth",
    protocol: "4-Point Fall-of-Potential Earth Testing",
    standard: "IEEE 81 / BS 7430",
    status: "OPTIMIZED (0.78 Ω)",
  },
  {
    system: "Switchboard Busbar Thermal Gradient",
    baseline: "Delta-T < 15°C Under Full Load",
    protocol: "Calibrated FLIR Infrared Thermal Camera Scan",
    standard: "NETA ATS / IEC 61439",
    status: "HOT-SPOT FREE",
  },
  {
    system: "Life Safety & Emergency Light Illumination",
    baseline: "> 10.8 Lux along Exit Corridors",
    protocol: "Optical Photometer Lux Level Mapping",
    standard: "EBCS / BS 5266",
    status: "COMPLIANT PASS",
  },
];

export default function ElectricalCapabilityPage() {
  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_ELE-03 // ELECTROMECHANICAL &amp; MEP // DIVISION 03
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>STANDARD: IEC 60364 / EEP</span>
            <span className="text-primary font-medium">
              STATUS: FIELD CERTIFIED
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
                <span>DIVISION 03</span>
                <span className="text-primary">•</span>
                <span>
                  ELECTROMECHANICAL &amp; MEP // HIGH &amp; LOW VOLTAGE
                </span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Uninterrupted Power Architecture. Engineered for Grid
                Resilience.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Turnkey building electrical distribution, transformer
                substations, automated transfer switch (ATS) synchronization,
                and clean backup power infrastructure for commercial complexes,
                healthcare facilities, and residential towers.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Ethiopian electrical conditions demand architectural-grade
                electrical engineering. We eliminate voltage spikes, phase
                imbalances, and blackout downtime through precision switchgear
                fabrication, balanced load distribution, and fail-safe generator
                synchronization plants designed specifically for high-occupancy
                buildings across Addis Ababa and regional centers.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View MEP Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Power Load Audit</span>
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
                <span>SPEC_CARD // ELE-03</span>
                <span>BUSBAR CONTINUITY: 100% VERIFIED</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/30">
                <Image
                  src={IMG.electrical}
                  alt="Industrial Electrical Distribution Panel and Switchgear Installation"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-1 font-label-sm text-label-sm flex items-center justify-between uppercase">
                  <span>MAIN DISTRIBUTION PANEL (MDB) // 400V 50HZ</span>
                  <span className="text-primary font-medium">FORM 4B</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-label-sm text-label-sm uppercase bg-surface-container p-space-xs text-on-surface-variant">
                <div>
                  <span className="text-on-surface font-semibold">
                    ISOLATION CLASS:
                  </span>{" "}
                  FORM 4B
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    BREAKER SPEC:
                  </span>{" "}
                  4P ACB MOTORIZED
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    FAILOVER TIME:
                  </span>{" "}
                  &lt; 8 SECONDS
                </div>
                <div>
                  <span className="text-on-surface font-semibold">
                    STANDBY GEN:
                  </span>{" "}
                  ATS SYNCHRONIZED
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
            <span>ELECTRICAL SPECIFICATIONS // MEP PERFORMANCE TELEMETRY</span>
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
                <span>FOUR-PILLAR MEP ARCHITECTURE</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Electromechanical Deliverables
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              STANDARDS: IEC 60364 // BS 7671 // EEP REGULATORY COMPLIANCE
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
                5-Phase MEP Quality &amp; Commissioning Protocol
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              ZERO FAULT TOLERANCE // FULL CONTINUITY VERIFIED
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
                <span>ELECTRICAL TESTING BENCHMARK</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Quality Assurance &amp; Commissioning Matrix
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary uppercase">
              IEC 60364 // BS 7671 // IEEE 81 // NFPA 110
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-outline-variant/40">
            <table className="w-full text-left font-body-sm text-body-sm min-w-[700px]">
              <thead className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                <tr>
                  <th className="py-3 px-space-md">System Sub-Scope</th>
                  <th className="py-3 px-space-md">Engineering Baseline</th>
                  <th className="py-3 px-space-md">
                    Field Verification Protocol
                  </th>
                  <th className="py-3 px-space-md">Compliance Code</th>
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
                <span>DIVISION 03 // MEP TECHNICAL INTAKE</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-bold">
                Equipping a Commercial, Healthcare or Residential Development
                with MEP?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Send us your single line diagrams (SLD), electrical load
                schedules, or tender drawings. Our electrical engineering team
                provides comprehensive bill of quantities (BOQ) review and
                substation sizing for projects across Ethiopia.
              </p>
              <div className="mt-space-sm flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary uppercase">
                <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
                <span className="text-outline-variant">|</span>
                <span>PHONE: +251 91 151 7784</span>
                <span className="text-outline-variant">|</span>
                <span>STATUS: GRADE 3 CERTIFIED</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center bg-inverse-surface text-on-primary hover:bg-primary font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-all text-center border border-inverse-surface hover:border-primary"
              >
                <span>Submit Electrical Brief →</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-3.5 transition-colors text-center border border-outline-variant/40"
              >
                <span>Contact MEP Specialists</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
