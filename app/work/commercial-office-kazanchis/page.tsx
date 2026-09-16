import Link from "next/link";
import { IMG } from "@/lib/site-images";

export const metadata = {
  title: "Commercial Office Building — Kazanchis | Yebis Engineering",
  description:
    "Case study of a prime-grade commercial office development in Kazanchis, Addis Ababa: deep basements, structural frame, facade envelope and integrated MEP.",
};

export default function KazanchisCaseStudyPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Dossier Header Strip */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-y-2 font-label-sm text-label-sm text-secondary">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
              <span className="w-1.5 h-1.5 bg-primary"></span>
              SYS_REF: ET-AA-ENG-2024
            </span>
            <span className="text-outline-variant">/</span>
            <span>DOSSIER: PRJ-ETH-002</span>
            <span className="text-outline-variant">/</span>
            <span>COORD 09°01&apos;02&quot;N 38°46&apos;10&quot;E</span>
            <span className="text-outline-variant">/</span>
            <span>ELEV 2,380M</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface border border-outline-variant/50 text-on-surface font-label-sm">
              GC-1 GRADE 1 CONTRACTOR
            </span>
            <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/30 font-label-sm">
              STATUS: COMMISSIONED &amp; OCCUPIED
            </span>
          </div>
        </div>
      </section>

      {/* Case Study Title & Overview */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8">
        <div className="inline-flex items-center gap-2 mb-4 font-label-sm text-label-sm text-primary tracking-widest uppercase">
          <span className="w-2 h-2 bg-primary"></span>
          <span>[ PROJECT ARCHIVE // PRJ-ETH-002 // SECTOR: COMMERCIAL // FINANCIAL DISTRICT ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight uppercase leading-none">
              Commercial Office Building — Kazanchis
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Turnkey structural execution, dual-level subterranean civil containment, high-performance acoustic facade envelope, and integrated MEP distribution for prime grade-A diplomatic and corporate tenancy in Addis Ababa’s high-density financial precinct.
            </p>
          </div>

          <div className="lg:col-span-4 bg-surface-container p-5 border border-outline-variant/40 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
              <span className="font-label-sm text-label-sm uppercase text-secondary">REGISTRY KEY</span>
              <span className="font-label-sm text-label-sm text-primary font-bold">ETH/AA/2021-09B</span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-secondary font-label-sm">PERMIT AUTH:</span>
              <span className="font-medium text-on-surface">Kirkos Sub-City Construction Bureau</span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-secondary font-label-sm">INSPECTORATE:</span>
              <span className="font-medium text-on-surface">FDRE Ministry of Urban Dev.</span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-secondary font-label-sm">FIRE SAFETY:</span>
              <span className="font-medium text-on-surface">NFPA 101 Life Safety Class A</span>
            </div>
            <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm text-secondary">
              <span>HANDOVER DATUM</span>
              <span className="text-on-surface font-semibold">Q3 2023 // ZERO DEFECT</span>
            </div>
          </div>
        </div>

        {/* Parametric Dossier Specifications */}
        <div className="w-full bg-surface-container-lowest border border-outline-variant/40 p-6">
          <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3 mb-4">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-primary"></span>
              PARAMETRIC ENGINEERING DOSSIER SPECIFICATIONS
            </span>
            <span className="font-label-sm text-label-sm text-secondary">SHEET ID: DS-002-A // VER. 3.2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-body-sm">
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant/50 pl-3">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                PROJECT IDENTIFIER
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">PRJ-ETH-002</span>
              <span className="text-body-sm text-on-surface-variant">Class A Speculative Corporate Hub</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant/50 pl-3">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                SCALE &amp; CONFIGURATION
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                2B + G + 8 FLOORS
              </span>
              <span className="text-body-sm text-on-surface-variant">38.4m Above Ground // 8.5m Sub-Grade</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant/50 pl-3">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                GROSS FLOOR AREA
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">12,200 SQM</span>
              <span className="text-body-sm text-on-surface-variant">Footprint: 1,420 SQM per elevated plate</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant/50 pl-3">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                TIMELINE &amp; DURATION
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">26 MONTHS</span>
              <span className="text-body-sm text-on-surface-variant">Commenced 2021 // Commissioned 2023</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-outline-variant/30 text-body-sm">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">
                SITE LOCATION &amp; CONSTRAINTS
              </span>
              <p className="text-on-surface">
                Kazanchis Commercial Corridor, Kirkos Sub-City, Addis Ababa (Elev: 2,380m). Dense urban perimeter with adjacent active embassy and financial properties.
              </p>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">
                CONTRACT TYPOLOGY
              </span>
              <p className="text-on-surface">
                Full Turnkey General Contracting (FIDIC Red Book Modified) encompassing Subterranean Civil, Superstructure, Facade, Substation, HVAC, and Architectural Fit-out.
              </p>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">
                SPECIALIZED WORK PACKAGES
              </span>
              <p className="text-on-surface">
                Self-fabricated thermal-break double glazed curtain wall, 11kV step-down transformer substation, synchronized dual 500kVA backup power, integrated BMS, Class-A acoustic drywall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photographic Blueprint Elevation Viewport */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="relative w-full overflow-hidden border border-outline-variant/40 bg-inverse-surface">
          <div className="w-full bg-inverse-surface/90 border-b border-outline-variant/20 px-4 py-2 flex items-center justify-between text-on-primary font-label-sm text-label-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary"></span>
              PHOTOGRAPHIC ELEVATION RECORD // FACADE WEST-SOUTH-WEST
            </span>
            <span className="tracking-widest">ISO 100 // TILT-SHIFT 24MM // ELEV 2,380M</span>
          </div>

          <div className="relative w-full h-[540px] md:h-[680px]">
            <img
              className="w-full h-full object-cover"
              alt="Commercial Office Building in Kazanchis"
              src={IMG.superstructure}
            />

            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="bg-inverse-surface/85 backdrop-blur-sm border border-outline-variant/40 p-3 text-on-primary font-label-sm text-label-sm max-w-xs">
                  <div className="text-primary font-bold mb-1">■ LEVEL 08 — PARAPET CROWN</div>
                  <div>STRUCTURAL HEIGHT: +38.400M</div>
                  <div className="text-on-primary/70">
                    Acoustic mechanical penthouse housing twin 500kVA synchronized generating plant.
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end text-right bg-inverse-surface/85 backdrop-blur-sm border border-outline-variant/40 p-3 text-on-primary font-label-sm text-label-sm">
                  <span className="text-primary font-bold">GRID AXIS: A1 - F8</span>
                  <span>DATUM ELEV: +2,380.00 MSL</span>
                  <span className="text-on-primary/70">WIND LOAD DESIGN: 1.25 kN/m²</span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 border border-primary/60 flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-primary"></div>
                  </div>
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden md:block bg-inverse-surface/90 border border-primary/50 text-on-primary px-3 py-2 text-label-sm font-label-sm whitespace-nowrap shadow-lg">
                    <span className="text-primary font-bold">FAÇADE ENVELOPE:</span> LOW-E ARGON-FILLED CURTAIN WALL (U-VAL: 1.35 W/m²K)
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="bg-inverse-surface/85 backdrop-blur-sm border border-outline-variant/40 p-3 text-on-primary font-label-sm text-label-sm max-w-xs">
                  <div className="text-primary font-bold mb-1">■ LEVEL 00 TO -02 SUB-GRADE</div>
                  <div>FOUNDATION DEPTH: -8.500M</div>
                  <div className="text-on-primary/70">
                    Cast-in-place post-tensioned cores on 1,400mm reinforced concrete raft.
                  </div>
                </div>
                <div className="bg-inverse-surface/90 border border-outline-variant/40 px-3 py-1.5 text-on-primary font-label-sm text-label-sm">
                  COORDINATE: 09°01&apos;02.4&quot;N 38°46&apos;10.8&quot;E
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 text-primary font-label-sm pointer-events-none">+</div>
            <div className="absolute top-4 right-4 text-primary font-label-sm pointer-events-none">+</div>
            <div className="absolute bottom-4 left-4 text-primary font-label-sm pointer-events-none">+</div>
            <div className="absolute bottom-4 right-4 text-primary font-label-sm pointer-events-none">+</div>
          </div>
        </div>
      </section>

      {/* Project Metric Highlights */}
      <section className="w-full bg-surface-container py-8 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="flex flex-col gap-1 border-l-2 border-primary pl-4">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">12,200</span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">SQUARE METERS</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Total Built Gross Floor Area</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant pl-4">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">3,850</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">CUBIC METERS</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">C35/C40 Structural Concrete</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant pl-4">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">420</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">METRIC TONS</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">High-Yield Fe500 Rebar</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-primary pl-4">
              <span className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">0.00</span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">LOST TIME INCIDENTS</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Across 620,000 Site Man-Hours</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-outline-variant pl-4 col-span-2 md:col-span-1">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">100%</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">CODE ADHERENCE</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">EBCS-1 &amp; EBCS-2 Mandate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Narrative & Phases */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex items-center gap-4 mb-10 pb-3 border-b border-outline-variant/40">
          <span className="font-label-sm text-label-sm text-primary font-semibold tracking-widest uppercase">
            SECTION 02 // TECHNICAL NARRATIVE &amp; METHODOLOGY
          </span>
          <div className="h-px bg-outline-variant/40 flex-1"></div>
          <span className="font-label-sm text-label-sm text-secondary">STRUCTURAL ARCHITECTURE MEMORANDUM</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <article className="flex flex-col gap-4 border-b border-outline-variant/30 pb-10">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-inverse-surface text-on-primary font-label-sm text-label-sm font-semibold">
                  PHASE 01
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  GEOTECHNICAL &amp; URBAN CONDITIONS
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold uppercase">
                01. The Client Challenge &amp; Subterranean Constraints
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                The development site occupies a highly constrained 1,850 SQM urban plot inside the dense Kazanchis commercial corridor, flanked immediately by an active 7-story diplomatic compound to the west and high-volume vehicular traffic along the arterial roadway to the south. Geotechnical investigations revealed a high perched water table at -3.20m and decomposed volcanic basalt formations.
              </p>
              <div className="bg-surface-container-low p-5 border border-outline-variant/40 flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  CRITICAL ENGINEERING PROTOCOL APPLIED
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  To mitigate lateral displacement and protect neighboring building foundations, Yebis Engineering engineered a contiguous bored pile retaining wall (600mm diameter, 14m embedment depth) coupled with double-row pre-stressed soil anchors grouted at 15-degree declining trajectories. Acoustic and vibration monitoring sensors maintained real-time telemetry, guaranteeing vibration velocity remained below the strict 2.5 mm/s urban threshold during daylight hours.
                </p>
              </div>
            </article>

            <article className="flex flex-col gap-4 border-b border-outline-variant/30 pb-10">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-inverse-surface text-on-primary font-label-sm text-label-sm font-semibold">
                  PHASE 02
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  INTEGRATED FABRICATION &amp; MODELLING
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold uppercase">
                02. The Yebis Integrated BIM &amp; Pre-Fabrication Approach
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Managing complex floor slab services without compromising finished ceiling heights required rigorous 3D spatial coordination. Yebis deployed full LOD-400 BIM modeling spanning structural concrete, ductwork, fire sprinklers, and electrical busways.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-secondary block mb-1">CLASH RESOLUTION MATRIX</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">48 Conflicts</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Identified and redesigned in the 3D model prior to rebar placement, resulting in zero on-site concrete core penetrations or retrofitted diamond coring.
                  </p>
                </div>
                <div className="p-4 bg-surface-container border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-secondary block mb-1">LOCAL FABRICATION DEPOT</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">100% In-House</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    All unitized curtain wall cassettes and architectural steel canopy struts were precision-milled and pre-assembled at Yebis’s industrial workshop in Addis Ababa.
                  </p>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-4 border-b border-outline-variant/30 pb-10">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-inverse-surface text-on-primary font-label-sm text-label-sm font-semibold">
                  PHASE 03
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  SUPERSTRUCTURE CASTING
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold uppercase">
                03. Civil Execution: Continuous Mass Concrete Pour
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                The foundation comprises a 1,400mm thick reinforced concrete mat resting directly on consolidated basalt and anchored pile heads. Executing this massive footing demanded a synchronized continuous 72-hour batching and placing operation totaling 1,980 m³ of low-heat hydration C35 mix.
              </p>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Dual concrete boom pumps operated on alternating schedules while internal temperature monitoring thermocouples logged core temperatures at 1-hour intervals to prevent thermal cracking. The vertical core walls were erected using high-precision modular steel formwork systems, achieving a laser-verified plumbness deviation under ±1.5mm across the full 38.4-meter building envelope.
              </p>
            </article>

            <article className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-inverse-surface text-on-primary font-label-sm text-label-sm font-semibold">
                  PHASE 04
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  COMMISSIONING &amp; HIGH-FINISH FIT-OUT
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold uppercase">
                04. High-Performance MEP &amp; Specialized Interior Craft
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Beyond the concrete skeleton, Yebis delivered complete building service integration. The subterranean mechanical room accommodates a dedicated 11kV step-down transformer substation, synchronized dual 500kVA sound-attenuated diesel gensets with automated transfer switches (ATS), and a triplex variable-speed domestic water booster skid.
              </p>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Finishing packages included seamless terrazzo flooring in the multi-level atrium, acoustic slatted American walnut wall cladding engineered for speech intelligibility, and suspended sound-absorptive ceiling baffles (NRC 0.85) accommodating perimeter linear diffuser supply grills.
              </p>
            </article>
          </div>

          {/* Sidebar Audits & Field Milestones */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low border border-outline-variant/40 p-6 flex flex-col gap-4">
              <div className="border-b border-outline-variant/40 pb-3">
                <span className="font-label-sm text-label-sm text-secondary uppercase block">FIELD AUDIT</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold uppercase">
                  Project Milestones
                </h3>
              </div>
              <ul className="flex flex-col gap-4 text-body-sm">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary block">Q1 2021 // M-01</span>
                    <span className="font-medium text-on-surface">
                      Subterranean excavation, 8.5m deep contiguous shoring wall &amp; 112 soil tie-backs completed.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary block">Q3 2021 // M-02</span>
                    <span className="font-medium text-on-surface">
                      1,400mm mass raft concrete pour (1,980 m³) certified crack-free by independent lab.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary block">Q2 2022 // M-03</span>
                    <span className="font-medium text-on-surface">
                      Structural topping out at Level 08; core plumb tolerance verified at ±1.2mm.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary block">Q4 2022 // M-04</span>
                    <span className="font-medium text-on-surface">
                      4,200 SQM double-glazed aluminum curtain wall installation &amp; water-penetration testing.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary block">Q3 2023 // M-05</span>
                    <span className="font-medium text-on-surface">
                      Final testing, integrated MEP load commissioning, and statutory building handover.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 flex flex-col gap-4">
              <div className="border-b border-outline-variant/40 pb-3">
                <span className="font-label-sm text-label-sm text-secondary uppercase block">MATERIAL QUALITY</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold uppercase">
                  Batch Test Verifications
                </h3>
              </div>
              <div className="flex flex-col gap-3 font-label-sm text-label-sm">
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="text-secondary">CONCRETE C35 28-DAY:</span>
                  <span className="text-on-surface font-bold">41.8 MPa (TARGET 35)</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="text-secondary">CONCRETE C40 28-DAY:</span>
                  <span className="text-on-surface font-bold">46.5 MPa (TARGET 40)</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="text-secondary">REBAR YIELD STRESS:</span>
                  <span className="text-on-surface font-bold">535 MPa (FE 500)</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="text-secondary">CURTAIN WALL DEFLECTION:</span>
                  <span className="text-on-surface font-bold">L/240 @ 1.5 kPa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">SUBSTATION INSULATION:</span>
                  <span className="text-on-surface font-bold">&gt; 100 MΩ @ 2.5kV</span>
                </div>
              </div>
              <div className="bg-surface-container-high p-3 mt-2 text-body-sm text-on-surface-variant">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold block mb-0.5">
                  LABORATORY AUTHORITY:
                </span>
                National Metrology Institute of Ethiopia &amp; Addis Ababa University Civil Engineering Materials Lab.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Documentation Photos */}
      <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/40 pb-4">
            <div>
              <span className="font-label-sm text-label-sm text-primary font-semibold tracking-widest uppercase">
                STAGE DOCUMENTATION // 4 PHASES
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight uppercase mt-1">
                Construction &amp; Architectural Realization
              </h2>
            </div>
            <div className="font-label-sm text-label-sm text-secondary flex items-center gap-2">
              <span>HIGH-RESOLUTION AUDIT ARCHIVE</span>
              <span className="w-1.5 h-1.5 bg-primary"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col">
              <div className="w-full bg-surface-container px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-surface font-semibold">FIG. 01 // SUBTERRANEAN CIVIL &amp; CONTIGUOUS PILING</span>
                <span className="text-secondary">ELEV -8.50M</span>
              </div>
              <div className="relative w-full h-80 overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Deep foundation excavation"
                  src={IMG.foundation}
                />
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-on-primary px-2 py-1 font-label-sm text-label-sm border border-outline-variant/30">
                  112 PRE-STRESSED GROUND ANCHORS @ 320kN LOAD
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  FOUNDATION MAT POUR
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Continuous casting of bottom raft foundation using self-compacting high-durability C35/40 concrete mix with twin concrete boom pumps.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col">
              <div className="w-full bg-surface-container px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-surface font-semibold">FIG. 02 // FAÇADE ENVELOPE ASSEMBLY</span>
                <span className="text-secondary">LEVEL 04 TO 08</span>
              </div>
              <div className="relative w-full h-80 overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Facade installation"
                  src={IMG.facade}
                />
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-on-primary px-2 py-1 font-label-sm text-label-sm border border-outline-variant/30">
                  UNITIZED CASSETTES FABRICATED IN YEBIS YARD
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  THERMAL-BREAK CURTAIN WALL
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Double-glazed acoustic cassettes with 16mm argon cavity and low-emissivity coating providing high solar attenuation and 42dB road noise reduction.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col">
              <div className="w-full bg-surface-container px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-surface font-semibold">FIG. 03 // CORPORATE LOBBY &amp; CUSTOM MILLWORK</span>
                <span className="text-secondary">GROUND FLOOR LEVEL 00</span>
              </div>
              <div className="relative w-full h-80 overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Corporate lobby"
                  src={IMG.lobby}
                />
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-on-primary px-2 py-1 font-label-sm text-label-sm border border-outline-variant/30">
                  CUSTOM WALNUT MILLWORK &amp; POURED TERRAZZO
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  TURNKEY ATRIUM EXECUTION
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Acoustic timber baffles and artisan cast-terrazzo finishes built to international diplomatic mission specifications by Yebis finishing specialists.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col">
              <div className="w-full bg-surface-container px-4 py-2 border-b border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-surface font-semibold">FIG. 04 // CENTRAL MEP DISTRIBUTION INFRASTRUCTURE</span>
                <span className="text-secondary">BASEMENT LEVEL -02</span>
              </div>
              <div className="relative w-full h-80 overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Central MEP plant room"
                  src={IMG.officeInterior}
                />
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-on-primary px-2 py-1 font-label-sm text-label-sm border border-outline-variant/30">
                  11kV SUBSTATION // DUAL 500kVA SYNC GENERATORS
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  PLANT ROOM COMMISSIONING
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Triple-redundancy water pressurization skids, FM-200 clean agent server room fire suppression, and integrated supervisory building control systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="w-full bg-surface py-12 px-6 lg:px-12 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-label-md text-label-md uppercase text-secondary hover:text-primary transition-colors"
          >
            <span>← Back to All Projects</span>
          </Link>

          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-2 bg-inverse-surface hover:bg-primary text-white font-label-md text-label-md uppercase px-6 py-3 transition-colors"
          >
            <span>Inquire Similar Scope</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
