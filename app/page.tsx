"use client";

import { useState } from "react";
import Link from "next/link";
import { IMG } from "@/lib/site-images";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-low px-6 lg:px-12 pt-8 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          {/* Engineering Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <div className="flex items-center gap-space-sm">
              <span className="inline-block w-2 h-2 bg-primary"></span>
              <span className="tracking-widest uppercase font-semibold text-on-surface">
                GRADE 1 GENERAL CONTRACTOR (GC-1)
              </span>
              <span className="hidden sm:inline text-secondary">|</span>
              <span className="hidden sm:inline uppercase">
                MINISTRY LICENSED · FIDIC &amp; ETHIOPIAN BUILDING CODE
                COMPLIANT
              </span>
            </div>
            <div className="flex items-center gap-space-md text-secondary">
              <span>HQ: BOLE ROAD, ADDIS ABABA</span>
              <span className="text-primary font-medium">
                19+ DELIVERED PROJECTS ACROSS ETHIOPIA
              </span>
            </div>
          </div>

          {/* Hero Typography & CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary tracking-widest uppercase">
                <span>[ GENERAL CONTRACTOR &amp; SPECIALIZED EXECUTION ]</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight leading-none">
                From structure
                <br />
                to finish.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Engineering, construction, and integrated building solutions
                across Ethiopia. Proven partner to federal ministries, municipal
                housing agencies, specialized public hospitals, international
                NGOs, and private developers.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-md lg:items-end">
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  className="inline-flex items-center justify-center gap-space-sm bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-md transition-colors duration-150"
                  href="/work"
                >
                  <span>Explore our work</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-md transition-colors duration-150 border border-outline-variant/40"
                  href="/start-a-project"
                >
                  <span>Start a project</span>
                </Link>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase">
                <span>STRUCTURAL SHELL</span>
                <span>→</span>
                <span>MEP</span>
                <span>→</span>
                <span className="text-primary font-medium">
                  TURNKEY FIT-OUT
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Hero Showcase Viewport */}
          <div className="relative w-full h-[520px] lg:h-[640px] bg-surface-container mt-4 overflow-hidden border border-outline-variant/30">
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="Massive concrete structural framework in Addis Ababa"
              style={{ backgroundImage: `url(${IMG.superstructure})` }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>

            <div className="absolute top-4 left-4 font-label-sm text-label-sm text-white/90 bg-inverse-surface/80 px-3 py-1.5 flex items-center gap-2 backdrop-blur-sm border border-white/10">
              <span className="w-1.5 h-1.5 bg-primary"></span>
              <span>FRAME: 2B+G+8 HYBRID CONCRETE &amp; STEEL</span>
            </div>
            <div className="absolute top-4 right-4 font-label-sm text-label-sm text-white/90 bg-inverse-surface/80 px-3 py-1.5 backdrop-blur-sm border border-white/10">
              <span>KAZANCHIS LOT 412 // ELEVATION +34.5M</span>
            </div>

            <div className="hidden md:flex absolute top-1/3 left-12 flex-col gap-1 bg-inverse-surface/90 text-white p-4 max-w-xs backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-primary-fixed">
                <span>REINFORCED CONCRETE COLUMNS</span>
                <span>C40/50</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-variant">
                Core compression index verified to 48.2 MPa. Continuous shear
                core anchoring subterranean levels.
              </p>
            </div>
            <div className="hidden md:flex absolute bottom-28 right-12 flex-col gap-1 bg-inverse-surface/90 text-white p-4 max-w-xs backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-primary-fixed">
                <span>THERMAL ALUMINUM FACADE</span>
                <span>ZONE 4 ET</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-variant">
                Custom extruded mullion grid with double-pane low-E solar
                shielding tailored to Addis highland UV.
              </p>
            </div>

            <div className="absolute bottom-0 inset-x-0 bg-inverse-surface/95 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-6 font-label-md text-label-md tracking-wider uppercase">
                <span className="text-primary-fixed font-bold">
                  PROJECT ID: 014
                </span>
                <span className="text-surface-variant">
                  CIVIL STRUCTURAL + MEP SYSTEMS + JOINERY
                </span>
                <span className="hidden xl:inline text-surface-variant">
                  FOOTPRINT: 14,200 SQM
                </span>
              </div>
              <div className="flex items-center gap-4 font-label-sm text-label-sm text-surface-variant">
                <span>STAGE: ARCHITECTURAL FIT-OUT</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Public & NGO Client Ledger */}
      <section className="w-full bg-surface py-8 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary"></span>
              PROVEN CLIENT ROSTER // GOVERNMENTAL, NGO &amp; INSTITUTIONAL
              CONTRACTS
            </span>
            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase">
              DOCUMENTED PUBLIC, NGO &amp; COMMERCIAL CONTRACTS
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className="bg-surface-container-low p-3.5 border border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-on-surface font-bold">
                AAHDPO
              </span>
              <span className="text-[11px] text-secondary">
                Addis Ababa Housing Dev
              </span>
            </div>
            <div className="bg-surface-container-low p-3.5 border border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-on-surface font-bold">
                ALERT Hospital
              </span>
              <span className="text-[11px] text-secondary">
                Specialized Medical Centre
              </span>
            </div>
            <div className="bg-surface-container-low p-3.5 border border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-on-surface font-bold">
                St. Peter&apos;s Hospital
              </span>
              <span className="text-[11px] text-secondary">
                Radiology &amp; X-Ray Suites
              </span>
            </div>
            <div className="bg-surface-container-low p-3.5 border border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-on-surface font-bold">
                World Vision
              </span>
              <span className="text-[11px] text-secondary">
                Water &amp; Education Projects
              </span>
            </div>
            <div className="bg-surface-container-low p-3.5 border border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-on-surface font-bold">
                Customs Commission
              </span>
              <span className="text-[11px] text-secondary">
                Bole Airport Cargo Yard
              </span>
            </div>
            <div className="bg-surface-container-low p-3.5 border border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-on-surface font-bold">
                The Hunger Project
              </span>
              <span className="text-[11px] text-secondary">
                Rural Civil &amp; Water Works
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="w-full bg-surface-container py-12 px-6 lg:px-12 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 01 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                15+
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Years Operational Depth
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Continuous field leadership across complex Ethiopian geological
              formations and urban settings.
            </p>
          </div>
          <div className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 02 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                85+
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Delivered Contracts
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Spanning turnkey multi-story compounds, specialized healthcare
              wings, and Grade-A commercial fit-outs.
            </p>
          </div>
          <div className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 03 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                100%
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Integrated Coordination
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Zero third-party scope handoff friction. In-house MEP, millwork,
              aluminum shop, and structural gangs.
            </p>
          </div>
          <div className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 04 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                04
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Dedicated Sectors
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Residential towers, commercial office centers, clinical
              institutions, and precision trade subcontracting.
            </p>
          </div>
        </div>
      </section>

      {/* Execution Methodology */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
                <span className="w-2 h-2 bg-primary"></span>
                <span>SEC_02 // SYSTEM METHODOLOGY</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                One project. Multiple disciplines.
                <br />
                One capable team.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Most failures in construction occur at trade interfaces. Yebis
              unites technical design, civil build, mechanical systems, and
              artisanal finishing under unified single-point accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  STAGE 01
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Plan &amp; BIM
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Geotechnical assessment, 3D structural modeling, clash
                  detection, and Ethiopian regulatory approvals.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase">
                <span>ENG_CAD // 01</span>
              </div>
            </div>

            <div className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  STAGE 02
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Structural Shell
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Excavation, piling, retaining systems, reinforced cast
                  columns, and post-tensioned floor plates.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase">
                <span>CIVIL // GC-1</span>
              </div>
            </div>

            <div className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  STAGE 03
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Building MEP
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  High-capacity distribution panels, drainage networks, clinical
                  medical piping, HVAC, and fire suppression.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase">
                <span>SYS_MEP // INFRA</span>
              </div>
            </div>

            <div className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  STAGE 04
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Drywall &amp; Finishes
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Acoustic ceilings, moisture-shield gypsum systems, precision
                  screeding, and architectural porcelain surfaces.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase">
                <span>SURF // COATINGS</span>
              </div>
            </div>

            <div className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  STAGE 05
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Joinery &amp; Metal
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Thermal-break curtain walls, solid hardwood millwork, laser
                  metal railings, and custom acoustic doors.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase">
                <span>FAB // SHOP-BUILT</span>
              </div>
            </div>

            <div className="bg-inverse-surface text-on-primary p-5 flex flex-col justify-between h-72 border border-inverse-surface">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-primary-fixed font-bold">
                  STAGE 06
                </span>
                <span className="font-headline-sm text-headline-sm text-white uppercase">
                  Handover
                </span>
                <p className="font-body-sm text-body-sm text-surface-container-highest mt-2">
                  Commissioning sign-offs, full as-built blueprint packages,
                  operation manuals, and warranty lifecycle.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-primary-fixed uppercase flex items-center justify-between">
                <span>TURNKEY 100%</span>
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-outline-variant/30">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-[28px]">
                account_tree
              </span>
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">
                  Flexible Engagement Models
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Clients can commission the complete project as single-point
                  general contractor, or engage Yebis exclusively for
                  specialized work packages (MEP, Facade, Gypsum, or Joinery).
                </p>
              </div>
            </div>
            <Link
              className="whitespace-nowrap font-label-md text-label-md uppercase text-primary font-bold hover:underline flex items-center gap-1"
              href="/capabilities"
            >
              <span>Explore Specialized Scopes</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Dossiers */}
      <section
        className="w-full bg-surface-container-low py-20 px-6 lg:px-12 border-b border-outline-variant/30"
        id="projects"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
                <span className="w-2 h-2 bg-primary"></span>
                <span>SEC_03 // ACTIVE &amp; RECENT CONTRACTS</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                Selected Structural Dossiers
              </h2>
            </div>
            <div className="flex items-center gap-4 font-label-sm text-label-sm text-secondary uppercase">
              <span>OFFICIAL REGISTER: 14 DOCUMENTED CONTRACTS</span>
              <Link
                href="/work"
                className="text-primary font-semibold hover:underline"
              >
                [ VIEW FULL PERFORMANCE REGISTER → ]
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Office Building Kazanchis */}
            <Link
              href="/work/commercial-office-kazanchis"
              className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors"
            >
              <div className="bg-surface-container-high px-6 py-3 flex items-center justify-between font-label-sm text-label-sm uppercase text-on-surface-variant border-b border-outline-variant/30">
                <span className="font-bold text-on-surface">
                  2B+G+8 COMMERCIAL TOWER
                </span>
                <span>KAZANCHIS · ADDIS ABABA</span>
              </div>
              <div className="relative h-72 bg-surface-container overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${IMG.facade})` }}
                ></div>
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                  CONF: 2B+G+8 // 12,200 M²
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    GENERAL CONTRACTING
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    CURTAIN WALL FACADE
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    MEP SYSTEMS
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                  Commercial Office Building — Kazanchis
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Prime grade multi-story commercial facility in the central
                  financial core. Dual subterranean basements, reinforced
                  cast-in-place superstructure, acoustic facade envelope,
                  high-speed dual elevators, and integrated building automation.
                </p>
                <div className="pt-2 flex items-center justify-between font-label-md text-label-md uppercase text-primary font-bold">
                  <span>Explore In-Depth Case Study</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_outward
                  </span>
                </div>
              </div>
            </Link>

            {/* Cancer Care Home Burayu */}
            <Link
              href="/work"
              className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors"
            >
              <div className="bg-surface-container-high px-6 py-3 flex items-center justify-between font-label-sm text-label-sm uppercase text-on-surface-variant border-b border-outline-variant/30">
                <span className="font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  RECORD #12 // CANCER CARE ETHIOPIA
                </span>
                <span>BURAYU · OROMIA</span>
              </div>
              <div className="relative h-72 bg-surface-container overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${IMG.cleanroom})` }}
                ></div>
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                  CONTRACT VALUE: ETB 8,186,933.04
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    MEDICAL RESIDENCE
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    BARRIER-FREE RAMPS
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 font-label-sm text-label-sm uppercase font-semibold">
                    TURNKEY GC
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                  Cancer Care Home &amp; Palliative Residence
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Turnkey delivery of a dedicated oncology patient recovery
                  complex. Features patient lodging units, clinical consult
                  suites, commercial dietary facilities, anti-microbial floor
                  screeds, and accessible courtyard landscaping.
                </p>
                <div className="pt-2 flex items-center justify-between font-label-md text-label-md uppercase text-primary font-bold">
                  <span>View Project Dossier in Work Archive</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_outward
                  </span>
                </div>
              </div>
            </Link>

            {/* Bole Arabissa AAHDPO G+4 */}
            <Link
              href="/work"
              className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors"
            >
              <div className="bg-surface-container-high px-6 py-3 flex items-center justify-between font-label-sm text-label-sm uppercase text-on-surface-variant border-b border-outline-variant/30">
                <span className="font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  RECORD #09 // AA HOUSING DEV PROJECT OFFICE
                </span>
                <span>BOLE ARABISSA · ADDIS ABABA</span>
              </div>
              <div className="relative h-72 bg-surface-container overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${IMG.towers})` }}
                ></div>
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                  CONTRACT VALUE: ETB 2,093,916.93
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    PUBLIC HOUSING
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    G+4 CONCRETE FRAME
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    HCB MASONRY
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                  Bole Arabissa G+4 Condominium Multi-Story Block
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Full multi-family residential block delivered under Addis
                  Ababa City Administration public housing program. Complete
                  reinforced concrete skeletal structure, HCB exterior masonry,
                  polished terrazzo staircases, and sanitary drainage stacks.
                </p>
                <div className="pt-2 flex items-center justify-between font-label-md text-label-md uppercase text-primary font-bold">
                  <span>View Project Dossier in Work Archive</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_outward
                  </span>
                </div>
              </div>
            </Link>

            {/* St. Peter's Specialized Hospital X-Ray Room */}
            <Link
              href="/work"
              className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors"
            >
              <div className="bg-surface-container-high px-6 py-3 flex items-center justify-between font-label-sm text-label-sm uppercase text-on-surface-variant border-b border-outline-variant/30">
                <span className="font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  RECORD #05 // ST. PETER&apos;S SPECIALIZED HOSPITAL
                </span>
                <span>ENTOTO ROAD · ADDIS ABABA</span>
              </div>
              <div className="relative h-72 bg-surface-container overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${IMG.renovation})` }}
                ></div>
                <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                  CONTRACT VALUE: ETB 886,096.97
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    RADIATION SHIELDING
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    BARYTE PLASTER
                  </span>
                  <span className="bg-surface-container px-2 py-1 font-label-sm text-label-sm text-on-surface uppercase font-medium">
                    LEAD-LINED DOORS
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                  X-Ray Radiology Suite Radiation Shielding
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  High-precision engineering and architectural shielding for
                  diagnostic X-ray facilities. 2.0mm Pb lead-sheet shielding,
                  baryte radiation-attenuating wall plaster, certified
                  lead-glass observation consoles, and clean isolated hospital
                  electrical circuits.
                </p>
                <div className="pt-2 flex items-center justify-between font-label-md text-label-md uppercase text-primary font-bold">
                  <span>View Project Dossier in Work Archive</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_outward
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_04 // OPERATIONAL SECTORS</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Where We Build
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Engineered solutions aligned with Ethiopia&apos;s distinct
              regulatory codes, seismic conditions, and specialized material
              supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    [ SEC_A ]
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    apartment
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Residential
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Private luxury compounds, G+4 to G+10 residential
                  developments, and high-density apartments with complete
                  finishing packages.
                </p>
              </div>
              <div className="pt-6 font-label-sm text-label-sm text-secondary flex flex-col gap-1 border-t border-outline-variant/20 mt-4">
                <span>• Structural Cantilevers</span>
                <span>• Acoustic Partitioning</span>
                <span>• Imported Sanitary Ware</span>
              </div>
            </div>

            <div className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    [ SEC_B ]
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    corporate_fare
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Commercial
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Grade-A multi-story commercial towers, retail shopping
                  complexes, mixed-use corporate headquarters, and financial
                  branches.
                </p>
              </div>
              <div className="pt-6 font-label-sm text-label-sm text-secondary flex flex-col gap-1 border-t border-outline-variant/20 mt-4">
                <span>• High-Clearance Spans</span>
                <span>• Facade Cladding Systems</span>
                <span>• Backup Power Systems</span>
              </div>
            </div>

            <div className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    [ SEC_C ]
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    local_hospital
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Institutional
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  General hospitals, educational centers, clinical research
                  laboratories, and civic government facilities with strict MEP
                  standards.
                </p>
              </div>
              <div className="pt-6 font-label-sm text-label-sm text-secondary flex flex-col gap-1 border-t border-outline-variant/20 mt-4">
                <span>• Medical Gas Reticulation</span>
                <span>• Radiation Enclosures</span>
                <span>• Heavy Redundant Power</span>
              </div>
            </div>

            <div className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    [ SEC_D ]
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    handyman
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Specialized
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Independent high-precision trade scopes commissioned on
                  existing structures or third-party main contractor sites.
                </p>
              </div>
              <div className="pt-6 font-label-sm text-label-sm text-secondary flex flex-col gap-1 border-t border-outline-variant/20 mt-4">
                <span>• Curtain Wall Aluminum</span>
                <span>• Commercial Joinery</span>
                <span>• MEP Subcontracting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Subcontracting Strip */}
      <section
        className="w-full bg-inverse-surface text-on-primary py-20 px-6 lg:px-12"
        id="specialized"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed tracking-widest uppercase">
                <span className="w-2 h-2 bg-primary"></span>
                <span>SPECIALIZED TRADE SUBCONTRACTING</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tight">
                Not every project starts from the foundation.
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl">
                Need only one part of the build? Yebis executes specialized
                trade packages with the exact same engineering precision,
                tooling, and quality assurance we apply to complete structures.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                className="inline-flex items-center justify-center gap-space-sm bg-primary hover:bg-primary-container text-white font-label-lg text-label-lg uppercase px-space-lg py-space-md transition-colors"
                href="/start-a-project"
              >
                <span>Request Trade Quote</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
            <div className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                window
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Aluminum &amp; Glass
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Curtain walls, thermal break profiles, spider glass, sky
                lanterns.
              </p>
            </div>
            <div className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                carpenter
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Custom Joinery
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Hardwood fire doors, cabinetry, acoustic panels, reception
                desks.
              </p>
            </div>
            <div className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                bolt
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Building MEP
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Transformers, MV/LV power, sanitary piping, HVAC ventilation.
              </p>
            </div>
            <div className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                layers
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Gypsum Ceilings
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Drywall demising walls, cove lighting troughs, acoustic baffles.
              </p>
            </div>
            <div className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                brush
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Turnkey Fit-Out
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Corporate, banking, and commercial tenant interior overhauls.
              </p>
            </div>
            <div className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                construction
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Renovation
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Structural carbon-wrap retrofit, beam enlargement, facade
                updating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="w-full bg-surface-container py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_05 // CASE STUDY DOSSIER</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Project 008 Spotlight — Clinical Healthcare Center
            </h2>
          </div>

          <div className="bg-surface p-8 lg:p-12 border border-outline-variant/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <span className="font-label-md text-label-md text-primary uppercase">
                    [ PROBLEM ARCHITECTURE ]
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    The Clinical Challenge
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The client required an accelerated construction schedule for
                    a multi-story clinical health facility with high-density
                    biomedical equipment. The structural design demanded massive
                    reinforced foundations for radiological containment, coupled
                    with an ultra-sterile, positive-pressure HVAC environment
                    with zero micro-contaminant leak points.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-label-md text-label-md text-primary uppercase">
                    [ INTEGRATED EXECUTION ]
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    The Integrated Engineering Solution
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Rather than coordinating five fractured subcontractors,
                    Yebis took total command. Our structural team poured 1,200m³
                    of baryte-infused high-density radiation shielding concrete,
                    while our in-house MEP technicians mapped medical gas
                    pipeline routes via BIM before gypsum framing commenced.
                    Antimicrobial seamless vinyl and sealed acoustic ceiling
                    modules were pre-fabricated in our local workshop.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      14 Mos
                    </span>
                    <p className="font-label-sm text-label-sm text-secondary uppercase">
                      Project Duration
                    </p>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      0.0%
                    </span>
                    <p className="font-label-sm text-label-sm text-secondary uppercase">
                      Rework Index
                    </p>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      ISO 14644
                    </span>
                    <p className="font-label-sm text-label-sm text-secondary uppercase">
                      Cleanroom Certified
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container p-6 flex flex-col justify-between border border-outline-variant/40">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
                    <span className="font-label-md text-label-md font-bold uppercase text-on-surface">
                      BOQ &amp; Spec Matrix
                    </span>
                    <span className="font-label-sm text-label-sm text-primary">
                      LICENSED GC-1
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 font-label-sm text-label-sm">
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">
                        STRUCTURAL FOOTPRINT
                      </span>
                      <span className="font-semibold text-on-surface">
                        8,600 M²
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">
                        CONCRETE VOLUME
                      </span>
                      <span className="font-semibold text-on-surface">
                        3,850 M³ (C35/45)
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">
                        MED-GAS PIPING (O2/N2O/VAC)
                      </span>
                      <span className="font-semibold text-on-surface">
                        4,200 METERS
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">
                        HVAC AIR EXCHANGE RATE
                      </span>
                      <span className="font-semibold text-on-surface">
                        22 ACH HEPA H14
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">
                        ANTIMICROBIAL GYPSUM
                      </span>
                      <span className="font-semibold text-on-surface">
                        12,500 M²
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">
                        GENERATOR SYNCHRONIZATION
                      </span>
                      <span className="font-semibold text-on-surface">
                        2 × 800 kVA DIESEL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="bg-surface p-4 flex items-center gap-3 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      verified_user
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface uppercase font-medium">
                      Federal Health Bureau Commissioning Pass Granted on
                      Initial Audit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Yebis */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_06 // INSTITUTIONAL ASSURANCE</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Why Sovereign Clients &amp; Developers Choose Yebis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
              <span className="font-label-md text-label-md text-primary font-bold">
                01
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                End-to-End Execution
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                From deep excavation shoring to electrical fixture installation.
                One single contract entity takes legal and operational
                responsibility.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
              <span className="font-label-md text-label-md text-primary font-bold">
                02
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                Direct Teams
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                We maintain our own salaried master carpenters, MEP certified
                engineers, and concrete specialists, eliminating broker markups.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
              <span className="font-label-md text-label-md text-primary font-bold">
                03
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                Track Record
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Over 85 finished structures stand across the Ethiopian plateau,
                passing third-party soil testing and structural stability
                checks.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
              <span className="font-label-md text-label-md text-primary font-bold">
                04
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                Transparent Terms
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rigorous FIDIC and Ethiopian Standard Construction Contract
                forms, tied to verifiable milestone stages and third-party
                engineer signoffs.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
              <span className="font-label-md text-label-md text-primary font-bold">
                05
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                Local Mastery
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Unrivaled navigation of Addis Ababa geotechnical profiles,
                volcanic red-clay challenges, municipal permits, and regional
                port logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Field Testimonials */}
      <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_07 // CLIENT ATTESTATIONS</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Field Evaluations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 flex flex-col justify-between gap-6 border border-outline-variant/40">
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                &ldquo;Yebis delivered our G+8 commercial building in Kazanchis
                with a level of MEP synchronization I have rarely observed in
                Addis Ababa. There were zero clashes between the central air
                shafts and the main concrete beams.&rdquo;
              </p>
              <div className="flex flex-col border-t border-outline-variant/30 pt-4">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Tewodros Kassaye
                </span>
                <span className="font-label-sm text-label-sm text-primary uppercase">
                  Managing Director · BluePeak Developments
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  COMMERCIAL CONTRACT // KAZANCHIS
                </span>
              </div>
            </div>

            <div className="bg-surface p-8 flex flex-col justify-between gap-6 border border-outline-variant/40">
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                &ldquo;Building a medical facility requires strict adherence to
                international cleanroom specs. Yebis handled the medical gas
                piping and positive-pressure ceiling installation without
                relying on external foreign contractors.&rdquo;
              </p>
              <div className="flex flex-col border-t border-outline-variant/30 pt-4">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Dr. Senait Bekele
                </span>
                <span className="font-label-sm text-label-sm text-primary uppercase">
                  Chief of Medical Logistics · Regional Clinic
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  HEALTHCARE CONTRACT // ADDIS ABABA
                </span>
              </div>
            </div>

            <div className="bg-surface p-8 flex flex-col justify-between gap-6 border border-outline-variant/40">
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                &ldquo;For our family residence in Bole, we initially looked at
                separate finishing contractors. Bringing Yebis in for the entire
                shell and custom walnut joinery saved us months of coordinate
                disputes. Flawless craft.&rdquo;
              </p>
              <div className="flex flex-col border-t border-outline-variant/30 pt-4">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Yohannes Haile
                </span>
                <span className="font-label-sm text-label-sm text-primary uppercase">
                  Private Property Owner
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  TURNKEY RESIDENTIAL // BOLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Intake / Tender Consultation Form */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12" id="intake">
        <div className="max-w-7xl mx-auto">
          <div className="bg-inverse-surface text-on-primary p-8 lg:p-16 flex flex-col lg:flex-row gap-12 justify-between border border-outline-variant/30">
            <div className="flex flex-col gap-6 max-w-xl">
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed tracking-widest uppercase">
                <span className="w-2 h-2 bg-primary"></span>
                <span>INTAKE // CONSULTATION SPECIFICATION</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-white uppercase tracking-tight leading-none">
                Have a project in mind?
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-highest">
                Tell us what you are building, renovating, or improving. Our
                engineering principals review architectural drawings and BOQs
                within 48 operational hours.
              </p>
              <div className="flex flex-col gap-3 pt-4 font-label-sm text-label-sm text-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    location_on
                  </span>
                  <span>
                    HEADQUARTERS: BOLE SUB-CITY, CAMEROON STREET, YEBIS TOWER
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    call
                  </span>
                  <span>DIRECT LINE: +251 91 151 7784 </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    mail
                  </span>
                  <span>CONTRACTS DESK: INQUIRIES@YEBISENGINEERING.COM</span>
                </div>
              </div>
            </div>

            <div className="bg-surface text-on-surface p-8 lg:w-1/2 flex flex-col gap-5 border border-outline-variant/40">
              <div className="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider pb-2 border-b border-outline-variant/40 flex items-center justify-between">
                <span>Project Technical Brief</span>
                <span className="text-primary font-label-sm">
                  CONFIDENTIAL // GC-1
                </span>
              </div>

              {submitted ? (
                <div className="p-6 bg-surface-container border border-primary flex flex-col gap-3 my-auto text-center">
                  <div className="flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-4xl">
                      check_circle
                    </span>
                  </div>
                  <h4 className="font-headline-sm uppercase font-bold text-on-surface">
                    Brief Received &amp; Logged
                  </h4>
                  <p className="font-body-sm text-on-surface-variant">
                    Your project telemetry has been transmitted to our Chief
                    Estimator. A structural principal will contact you within 48
                    operational hours.
                  </p>
                  <span className="font-label-sm text-secondary">
                    TICKET REF: YEB-ETH-
                    {Math.floor(1000 + Math.random() * 9000)}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                        Principal Name
                      </label>
                      <input
                        required
                        className="bg-surface-container-low px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none border border-outline-variant/40 focus:border-primary"
                        placeholder="e.g. Dawit Mengistu"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                        Contact Phone
                      </label>
                      <input
                        required
                        className="bg-surface-container-low px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none border border-outline-variant/40 focus:border-primary"
                        placeholder="+251 9..."
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                        Sector
                      </label>
                      <select className="bg-surface-container-low px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none border border-outline-variant/40 focus:border-primary">
                        <option>Commercial Tower</option>
                        <option>Institutional / Healthcare</option>
                        <option>Residential Compound</option>
                        <option>Specialized Subcontract Scope</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                        Site Location
                      </label>
                      <input
                        required
                        className="bg-surface-container-low px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none border border-outline-variant/40 focus:border-primary"
                        placeholder="e.g. Bole / Kazanchis / Regional"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      Project Scope &amp; Target Timeline
                    </label>
                    <textarea
                      required
                      className="bg-surface-container-low px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none border border-outline-variant/40 focus:border-primary"
                      placeholder="Describe the structural parameters, total built-up area (sqm), or specific finishing / MEP scope required..."
                      rows={3}
                    ></textarea>
                  </div>

                  <button
                    className="w-full bg-inverse-surface hover:bg-primary text-white font-label-lg text-label-lg uppercase py-3 transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span>Submit For Technical Review</span>
                    <span className="material-symbols-outlined text-[16px]">
                      send
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
