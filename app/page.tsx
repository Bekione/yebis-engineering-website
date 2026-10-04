"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/site-images";
import CountUp from "@/components/CountUp";
import ClientRosterCarousel from "@/components/ClientRosterCarousel";
import CustomSelect from "@/components/ui/select";
import { ALL_PROJECTS } from "@/lib/projects-data";
import { quickInquirySchema } from "@/lib/validations/inquiries";
import {
  FadeUpView,
  SlideInView,
  ScaleInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollTransitions";

export default function HomePage() {
  const [inquiryData, setInquiryData] = useState({
    principalName: "",
    email: "",
    phone: "",
    sector: "Commercial Tower",
    location: "",
    description: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [inquiryErrors, setInquiryErrors] = useState<Record<string, string>>(
    {},
  );
  const [isInquirySubmitting, setIsInquirySubmitting] = useState(false);
  const [inquiryRef, setInquiryRef] = useState<string | null>(null);
  const [inquiryError, setInquiryError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInquiryError(null);
    setInquiryErrors({});

    const validation = quickInquirySchema.safeParse({
      ...inquiryData,
      _hp: honeypot,
    });
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0]?.toString() || "form";
        fieldErrors[field] = err.message;
      });
      setInquiryErrors(fieldErrors);
      return;
    }

    setIsInquirySubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quick_inquiry",
          ...inquiryData,
          _hp: honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        if (data.errors) {
          setInquiryErrors(data.errors);
        } else {
          setInquiryError(data.message || "Failed to submit inquiry.");
        }
        return;
      }
      setSubmittedEmail(inquiryData.email);
      setInquiryRef(data.ref);
    } catch {
      setInquiryError(
        "Network connection error. Please retry or contact our desk directly.",
      );
    } finally {
      setIsInquirySubmitting(false);
    }
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
                GRADE 3 GENERAL CONTRACTOR (GC-3)
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
            <div className="lg:col-span-7 flex flex-col gap-space-md">
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
            <div className="lg:col-span-5 flex flex-col gap-space-md lg:items-end">
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  className="inline-flex items-center justify-center gap-space-sm bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase whitespace-nowrap shrink-0 px-5 py-3 sm:px-6 sm:py-3.5 transition-colors duration-150"
                  href="/work"
                >
                  <span>Explore our work</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase whitespace-nowrap shrink-0 px-5 py-3 sm:px-6 sm:py-3.5 transition-colors duration-150 border border-outline-variant/40"
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
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[640px] bg-surface-container mt-4 overflow-hidden border border-outline-variant/30">
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="Massive concrete structural framework in Addis Ababa"
              style={{ backgroundImage: `url(${IMG.superstructure})` }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 font-label-sm text-[11px] sm:text-label-sm text-white/90 bg-inverse-surface/80 px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-2 backdrop-blur-sm border border-white/10">
              <span className="w-1.5 h-1.5 bg-primary"></span>
              <span>FRAME: 2B+G+8 HYBRID CONCRETE &amp; STEEL</span>
            </div>
            <div className="hidden sm:block absolute top-4 right-4 font-label-sm text-label-sm text-white/90 bg-inverse-surface/80 px-3 py-1.5 backdrop-blur-sm border border-white/10">
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
          <div className="pt-2">
            <ClientRosterCarousel speed={0.8} />
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="w-full bg-surface-container py-12 px-6 lg:px-12 border-y border-outline-variant/30">
        <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 01 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                <CountUp
                  from={0}
                  to={15}
                  duration={1.5}
                  separator=""
                  className=""
                />
                +
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Years Operational Depth
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Continuous field leadership across complex Ethiopian geological
              formations and urban settings.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 02 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                <CountUp
                  from={0}
                  to={85}
                  duration={2}
                  separator=""
                  className=""
                />
                +
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Delivered Contracts
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Spanning turnkey multi-story compounds, specialized healthcare
              wings, and Grade-A commercial fit-outs.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 03 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                <CountUp
                  from={0}
                  to={100}
                  duration={1.8}
                  separator=""
                  className=""
                />
                %
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Integrated Coordination
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Zero third-party scope handoff friction. In-house MEP, millwork,
              aluminum shop, and structural gangs.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-1 bg-surface p-6 border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              [ METRIC 04 ]
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                0
                <CountUp
                  from={0}
                  to={4}
                  duration={1}
                  separator=""
                  className=""
                />
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
              Dedicated Sectors
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Residential towers, commercial office centers, clinical
              institutions, and precision trade subcontracting.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Execution Methodology */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <FadeUpView className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
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
          </FadeUpView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <StaggerItem className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
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
            </StaggerItem>

            <StaggerItem className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
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
                <span>CIVIL // GC-3</span>
              </div>
            </StaggerItem>

            <StaggerItem className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
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
            </StaggerItem>

            <StaggerItem className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
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
            </StaggerItem>

            <StaggerItem className="bg-surface-container p-5 flex flex-col justify-between h-72 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
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
            </StaggerItem>

            <StaggerItem className="bg-inverse-surface text-on-primary p-5 flex flex-col justify-between h-72 border border-inverse-surface">
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
            </StaggerItem>
          </StaggerContainer>

          <FadeUpView
            delay={0.1}
            className="bg-surface-container-low p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-outline-variant/30"
          >
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
          </FadeUpView>
        </div>
      </section>

      {/* Featured Projects Dossiers */}
      <section
        className="w-full bg-surface-container-low py-20 px-6 lg:px-12 border-b border-outline-variant/30"
        id="projects"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <FadeUpView className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
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
              <span>
                OFFICIAL REGISTER: {ALL_PROJECTS.length} DOCUMENTED CONTRACTS
              </span>
              <Link
                href="/work"
                className="text-primary font-semibold hover:underline"
              >
                [ VIEW FULL PERFORMANCE REGISTER → ]
              </Link>
            </div>
          </FadeUpView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial Office Building Kazanchis */}
            <StaggerItem className="flex flex-col h-full">
              <Link
                href="/work/commercial-office-kazanchis"
                className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors flex-1"
              >
                <div className="bg-surface-container-high px-5 py-3 flex items-center justify-between font-label-sm text-[11px] uppercase text-on-surface-variant border-b border-outline-variant/30">
                  <span className="font-bold text-on-surface">
                    2B+G+8 COMMERCIAL TOWER
                  </span>
                  <span>KAZANCHIS · ADDIS ABABA</span>
                </div>
                <div className="relative h-64 bg-surface-container overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMG.facade})` }}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                    CONF: 2B+G+8 // 12,200 M²
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        GENERAL CONTRACTING
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        CURTAIN WALL FACADE
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        MEP SYSTEMS
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                      Commercial Office Building - Kazanchis
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      Prime grade multi-story commercial facility in the central
                      financial core. Dual subterranean basements, cast-in-place
                      superstructure, acoustic facade envelope, and integrated
                      BMS.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm uppercase text-primary font-bold border-t border-outline-variant/20">
                    <span>Explore In-Depth Case Study</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* Cancer Care Home Burayu */}
            <StaggerItem className="flex flex-col h-full">
              <Link
                href="/work?project=YEB-WP-012"
                className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors flex-1"
              >
                <div className="bg-surface-container-high px-5 py-3 flex items-center justify-between font-label-sm text-[11px] uppercase text-on-surface-variant border-b border-outline-variant/30">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    RECORD #12 // CANCER CARE ETHIOPIA
                  </span>
                  <span>BURAYU · OROMIA</span>
                </div>
                <div className="relative h-64 bg-surface-container overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMG.cleanroom})` }}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                    CONTRACT VALUE: ETB 8,186,933.04
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        MEDICAL RESIDENCE
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        BARRIER-FREE RAMPS
                      </span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 font-label-sm text-[10px] uppercase font-semibold">
                        TURNKEY GC
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                      Cancer Care Home &amp; Palliative Residence
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      Turnkey delivery of a dedicated oncology patient recovery
                      complex. Features patient lodging units, clinical consult
                      suites, anti-microbial floor screeds, and accessible
                      courtyard.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm uppercase text-primary font-bold border-t border-outline-variant/20">
                    <span>View Project Specsheet</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* Bole Arabissa AAHDPO G+4 */}
            <StaggerItem className="flex flex-col h-full">
              <Link
                href="/work?project=YEB-WP-009"
                className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors flex-1"
              >
                <div className="bg-surface-container-high px-5 py-3 flex items-center justify-between font-label-sm text-[11px] uppercase text-on-surface-variant border-b border-outline-variant/30">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    RECORD #09 // AAHDPO
                  </span>
                  <span>BOLE ARABISSA · ADDIS</span>
                </div>
                <div className="relative h-64 bg-surface-container overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMG.towers})` }}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                    CONTRACT VALUE: ETB 2,093,916.93
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        PUBLIC HOUSING
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        G+4 CONCRETE FRAME
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        HCB MASONRY
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                      Bole Arabissa G+4 Condominium Block
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      Multi-family residential block delivered under Addis Ababa
                      public housing program. Complete reinforced concrete
                      skeletal structure, HCB exterior masonry, and terrazzo
                      staircases.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm uppercase text-primary font-bold border-t border-outline-variant/20">
                    <span>View Project Specsheet</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* St. Peter's Specialized Hospital X-Ray Room */}
            <StaggerItem className="flex flex-col h-full">
              <Link
                href="/work?project=YEB-WP-005"
                className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors flex-1"
              >
                <div className="bg-surface-container-high px-5 py-3 flex items-center justify-between font-label-sm text-[11px] uppercase text-on-surface-variant border-b border-outline-variant/30">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    RECORD #05 // ST. PETER HOSPITAL
                  </span>
                  <span>ENTOTO ROAD · ADDIS</span>
                </div>
                <div className="relative h-64 bg-surface-container overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMG.renovation})` }}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                    CONTRACT VALUE: ETB 886,096.97
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        RADIATION SHIELDING
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        BARYTE PLASTER
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        LEAD-LINED DOORS
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                      X-Ray Suite Radiation Shielding
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      High-precision engineering and architectural shielding for
                      diagnostic X-ray facilities. 2.0mm Pb lead-sheet
                      shielding, baryte radiation-attenuating plaster, and
                      isolated circuits.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm uppercase text-primary font-bold border-t border-outline-variant/20">
                    <span>View Project Specsheet</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* Chole TVET College Campus Expansion */}
            <StaggerItem className="flex flex-col h-full">
              <Link
                href="/work?project=YEB-WP-015"
                className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors flex-1"
              >
                <div className="bg-surface-container-high px-5 py-3 flex items-center justify-between font-label-sm text-[11px] uppercase text-on-surface-variant border-b border-outline-variant/30">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    RECORD #15 // OTVETB
                  </span>
                  <span>CHOLE · ARSI ZONE</span>
                </div>
                <div className="relative h-64 bg-surface-container overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMG.university})` }}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                    CONTRACT VALUE: ETB 9,645,940.10
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        VOCATIONAL CAMPUS
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        WORKSHOPS &amp; LABS
                      </span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 font-label-sm text-[10px] uppercase font-semibold">
                        TURNKEY GC
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                      Chole TVET College Campus Expansion
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      Comprehensive campus expansion delivering dedicated
                      vocational training workshops, instructional classrooms,
                      reinforced concrete frame, and integrated sanitary
                      systems.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm uppercase text-primary font-bold border-t border-outline-variant/20">
                    <span>View Project Specsheet</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* ALERT Hospital MDR-TB Isolation Center */}
            <StaggerItem className="flex flex-col h-full">
              <Link
                href="/work?project=YEB-WP-008"
                className="bg-surface flex flex-col overflow-hidden group border border-outline-variant/40 hover:border-primary transition-colors flex-1"
              >
                <div className="bg-surface-container-high px-5 py-3 flex items-center justify-between font-label-sm text-[11px] uppercase text-on-surface-variant border-b border-outline-variant/30">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    RECORD #08 // ALERT HOSPITAL
                  </span>
                  <span>ZENEBEWORK · ADDIS</span>
                </div>
                <div className="relative h-64 bg-surface-container overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMG.cleanroom})` }}
                  ></div>
                  <div className="absolute bottom-3 left-3 bg-inverse-surface/90 text-white font-label-sm text-label-sm px-2 py-1 uppercase">
                    CONTRACT VALUE: ETB 6,958,545.53
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        ISOLATION CLINIC
                      </span>
                      <span className="bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface uppercase font-medium">
                        ANTI-MICROBIAL
                      </span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 font-label-sm text-[10px] uppercase font-semibold">
                        HEALTHCARE MEP
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                      ALERT Hospital MDR-TB Isolation Center
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      Turnkey construction of multi-drug resistant tuberculosis
                      specialized clinical wing. Non-porous antimicrobial floor
                      finishes, medical oxygen trunk lines, and patient
                      isolation bays.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm uppercase text-primary font-bold border-t border-outline-variant/20">
                    <span>View Project Specsheet</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <FadeUpView className="flex flex-col gap-2">
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
          </FadeUpView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
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
            </StaggerItem>

            <StaggerItem className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
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
            </StaggerItem>

            <StaggerItem className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
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
            </StaggerItem>

            <StaggerItem className="bg-surface-container-low flex flex-col justify-between p-6 border border-outline-variant/30">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Specialized Subcontracting Strip */}
      <section
        className="w-full bg-inverse-surface text-on-primary py-20 px-6 lg:px-12"
        id="specialized"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <SlideInView
              direction="left"
              className="lg:col-span-8 flex flex-col gap-4"
            >
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
            </SlideInView>
            <SlideInView
              direction="right"
              className="lg:col-span-4 flex lg:justify-end"
            >
              <Link
                className="inline-flex items-center justify-center gap-space-sm bg-primary hover:bg-primary-container text-white font-label-lg text-label-lg uppercase px-space-lg py-space-md transition-colors"
                href="/start-a-project"
              >
                <span>Request Trade Quote</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </SlideInView>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
            <StaggerItem className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
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
            </StaggerItem>
            <StaggerItem className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
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
            </StaggerItem>
            <StaggerItem className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                bolt
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Building MEP
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Transformers, MV/LV power, sanitary piping, HVAC ventilation.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                layers
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Gypsum Ceilings
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Drywall demising walls, cove lighting troughs, acoustic baffles.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                brush
              </span>
              <span className="font-headline-sm text-headline-sm text-white uppercase">
                Turnkey Fit-Out
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Corporate, banking, and commercial tenant interior overhauls.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-surface-container/10 p-5 flex flex-col gap-3 border border-white/10">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="w-full bg-surface-container py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <FadeUpView className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_05 // CASE STUDY DOSSIER</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Project 008 Spotlight - Clinical Healthcare Center
            </h2>
          </FadeUpView>

          <div className="bg-surface p-8 lg:p-12 border border-outline-variant/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <SlideInView
                direction="left"
                className="lg:col-span-7 flex flex-col gap-8"
              >
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
              </SlideInView>

              <SlideInView
                direction="right"
                className="lg:col-span-5 bg-surface-container p-6 flex flex-col justify-between border border-outline-variant/40"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
                    <span className="font-label-md text-label-md font-bold uppercase text-on-surface">
                      BOQ &amp; Spec Matrix
                    </span>
                    <span className="font-label-sm text-label-sm text-primary">
                      LICENSED GC-3
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
              </SlideInView>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Yebis */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <FadeUpView className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_06 // INSTITUTIONAL ASSURANCE</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Why Sovereign Clients &amp; Developers Choose Yebis
            </h2>
          </FadeUpView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <StaggerItem className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
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
            </StaggerItem>
            <StaggerItem className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
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
            </StaggerItem>
            <StaggerItem className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
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
            </StaggerItem>
            <StaggerItem className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
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
            </StaggerItem>
            <StaggerItem className="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/30">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Field Testimonials */}
      <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <FadeUpView className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary"></span>
              <span>SEC_07 // CLIENT ATTESTATIONS</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Field Evaluations
            </h2>
          </FadeUpView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-surface p-8 flex flex-col justify-between gap-6 border border-outline-variant/40">
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
            </StaggerItem>

            <StaggerItem className="bg-surface p-8 flex flex-col justify-between gap-6 border border-outline-variant/40">
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
            </StaggerItem>

            <StaggerItem className="bg-surface p-8 flex flex-col justify-between gap-6 border border-outline-variant/40">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom Intake / Tender Consultation Form */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12" id="intake">
        <div className="max-w-7xl mx-auto">
          <div className="bg-inverse-surface text-on-primary p-8 lg:p-16 flex flex-col lg:flex-row gap-12 justify-between border border-outline-variant/30">
            <SlideInView
              direction="left"
              className="flex flex-col gap-6 max-w-xl"
            >
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
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      call
                    </span>
                    <span className="font-semibold text-white">
                      DIRECT HOTLINES:
                    </span>
                  </div>
                  <div className="pl-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-label-sm text-label-sm text-surface-variant">
                    <a
                      href="tel:+251911517784"
                      className="hover:text-primary transition-colors"
                    >
                      HQ: +251 91 151 7784
                    </a>
                    <span>•</span>
                    <a
                      href="tel:+251913879093"
                      className="hover:text-primary transition-colors"
                    >
                      Tenders: +251 91 387 9093
                    </a>
                    <span>•</span>
                    <a
                      href="tel:+251911629279"
                      className="hover:text-primary transition-colors"
                    >
                      Ops: +251 91 162 9879
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    mail
                  </span>
                  <span>CONTRACTS DESK: inquiries@yebisengineering.pro.et</span>
                </div>
              </div>
            </SlideInView>

            <SlideInView
              direction="right"
              className="bg-surface text-on-surface p-5 sm:p-8 lg:w-1/2 flex flex-col gap-5 border border-outline-variant/40"
            >
              <div className="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider pb-2 border-b border-outline-variant/40 flex items-center justify-between">
                <span>Project Technical Brief</span>
                <span className="text-primary font-label-sm">
                  CONFIDENTIAL // GC-3
                </span>
              </div>

              {inquiryRef ? (
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
                  <div className="bg-surface-container-lowest border border-outline-variant/40 p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-secondary font-label-sm text-[10px] uppercase">
                      <span>OFFICIAL REFERENCE TICKET</span>
                      <span className="text-primary font-bold">QUEUED</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-base font-bold text-primary select-all">
                        {inquiryRef}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (inquiryRef) {
                            navigator.clipboard.writeText(inquiryRef);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2500);
                          }
                        }}
                        className="text-[11px] uppercase font-label-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 cursor-pointer bg-surface-container px-2 py-0.5 border border-primary/30"
                        title="Copy Reference"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {copied ? "check" : "content_copy"}
                        </span>
                        <span>{copied ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  {submittedEmail && (
                    <div className="bg-surface-container-lowest/90 border border-outline-variant/40 p-2.5 flex items-start gap-2 text-left text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">
                        mark_email_read
                      </span>
                      <span>
                        An automated receipt has been dispatched to{" "}
                        <strong className="text-on-surface">{submittedEmail}</strong>.
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setInquiryRef(null);
                      setSubmittedEmail("");
                      setCopied(false);
                      setHoneypot("");
                      setInquiryData({
                        principalName: "",
                        email: "",
                        phone: "",
                        sector: "Commercial Tower",
                        location: "",
                        description: "",
                      });
                    }}
                    className="text-xs uppercase font-label-sm font-semibold text-secondary hover:text-primary transition-colors mt-1 underline cursor-pointer"
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {/* Honeypot field (hidden from genuine users, traps automated spam bots) */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="company_website_home_hp">Do not fill this field</label>
                    <input
                      id="company_website_home_hp"
                      type="text"
                      name="_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {inquiryError && (
                    <div className="p-2.5 bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-label-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">
                        error
                      </span>
                      <span>{inquiryError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="home_principalName" className="font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center justify-between">
                        <span>Principal Name *</span>
                        {inquiryErrors.principalName && (
                          <span className="text-red-600 text-[10px] normal-case">
                            {inquiryErrors.principalName}
                          </span>
                        )}
                      </label>
                      <input
                        id="home_principalName"
                        name="principalName"
                        type="text"
                        autoComplete="name"
                        required
                        value={inquiryData.principalName}
                        onChange={(e) =>
                          setInquiryData({
                            ...inquiryData,
                            principalName: e.target.value,
                          })
                        }
                        className={`h-[38px] bg-surface-container-low px-3 text-body-sm font-body-sm text-on-surface outline-none border transition-colors ${
                          inquiryErrors.principalName
                            ? "border-red-500"
                            : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="e.g. Dawit Mengistu"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="home_phone" className="font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center justify-between">
                        <span>Contact Phone *</span>
                        {inquiryErrors.phone && (
                          <span className="text-red-600 text-[10px] normal-case">
                            {inquiryErrors.phone}
                          </span>
                        )}
                      </label>
                      <input
                        id="home_phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={inquiryData.phone}
                        onChange={(e) =>
                          setInquiryData({
                            ...inquiryData,
                            phone: e.target.value,
                          })
                        }
                        className={`h-[38px] bg-surface-container-low px-3 text-body-sm font-body-sm text-on-surface outline-none border transition-colors ${
                          inquiryErrors.phone
                            ? "border-red-500"
                            : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="+251 9..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="home_email" className="font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center justify-between">
                        <span>Email (For Receipt / Reply)</span>
                        {inquiryErrors.email && (
                          <span className="text-red-600 text-[10px] normal-case">
                            {inquiryErrors.email}
                          </span>
                        )}
                      </label>
                      <input
                        id="home_email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={inquiryData.email}
                        onChange={(e) =>
                          setInquiryData({
                            ...inquiryData,
                            email: e.target.value,
                          })
                        }
                        className={`h-[38px] bg-surface-container-low px-3 text-body-sm font-body-sm text-on-surface outline-none border transition-colors ${
                          inquiryErrors.email
                            ? "border-red-500"
                            : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="home_location" className="font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center justify-between">
                        <span>Site Location *</span>
                        {inquiryErrors.location && (
                          <span className="text-red-600 text-[10px] normal-case">
                            {inquiryErrors.location}
                          </span>
                        )}
                      </label>
                      <input
                        id="home_location"
                        name="location"
                        type="text"
                        required
                        value={inquiryData.location}
                        onChange={(e) =>
                          setInquiryData({
                            ...inquiryData,
                            location: e.target.value,
                          })
                        }
                        className={`h-[38px] bg-surface-container-low px-3 text-body-sm font-body-sm text-on-surface outline-none border transition-colors ${
                          inquiryErrors.location
                            ? "border-red-500"
                            : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="e.g. Bole / Kazanchis / Regional"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      Sector
                    </label>
                    <CustomSelect
                      options={[
                        "Commercial Tower",
                        "Institutional / Healthcare",
                        "Residential Compound",
                        "Specialized Subcontract Scope",
                      ]}
                      defaultValue={inquiryData.sector}
                      onChange={(val) =>
                        setInquiryData({ ...inquiryData, sector: val })
                      }
                      name="sector"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="home_description" className="font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center justify-between">
                      <span>Project Scope &amp; Target Timeline *</span>
                      {inquiryErrors.description && (
                        <span className="text-red-600 text-[10px] normal-case">
                          {inquiryErrors.description}
                        </span>
                      )}
                    </label>
                    <textarea
                      id="home_description"
                      name="description"
                      required
                      value={inquiryData.description}
                      onChange={(e) =>
                        setInquiryData({
                          ...inquiryData,
                          description: e.target.value,
                        })
                      }
                      className={`bg-surface-container-low px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none border transition-colors max-h-[220px] resize-y ${
                        inquiryErrors.description
                          ? "border-red-500"
                          : "border-outline-variant/40 focus:border-primary"
                      }`}
                      placeholder="Describe the structural parameters, total built-up area (sqm), or specific finishing / MEP scope required..."
                      rows={3}
                    ></textarea>
                  </div>

                  <button
                    disabled={isInquirySubmitting}
                    className="w-full bg-inverse-surface hover:bg-primary disabled:opacity-50 text-white font-label-lg text-label-lg uppercase py-3 transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    {isInquirySubmitting ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Transmitting Telemetry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit For Technical Review</span>
                        <span className="material-symbols-outlined text-[16px]">
                          send
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </SlideInView>
          </div>
        </div>
      </section>
    </div>
  );
}
