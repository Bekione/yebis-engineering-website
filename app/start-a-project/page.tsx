"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomSelect from "@/components/ui/select";
import { projectBriefFormSchema } from "@/lib/validations/inquiries";
import { FadeUpView } from "@/components/animations/ScrollTransitions";

const PROJECT_TYPES = [
  {
    key: "new_construction",
    label: "New Construction (Turnkey)",
    desc: "Ground-up commercial building, institutional facility, or residential villa.",
  },
  {
    key: "structural_skeleton",
    label: "Structural Skeleton / Frame",
    desc: "Foundation excavation, reinforced concrete columns, beams, slabs, or steel framing.",
  },
  {
    key: "skeleton_finishing",
    label: "Finishing Incomplete Skeleton",
    desc: "Taking over an existing concrete frame to complete all walls, MEP, and interior finishes.",
  },
  {
    key: "interior_fitout",
    label: "Interior Finishing & Partitions",
    desc: "Gypsum drywall partitions, plastering, high-grade paint, tiling, and equipment.",
  },
  {
    key: "trade_scope",
    label: "Specialized Trade (MEP / Aluminum / Gates)",
    desc: "Targeted scope: electrical, plumbing, aluminum windows, doors, or compound gates.",
  },
  {
    key: "maintenance",
    label: "Renovation & Maintenance",
    desc: "Restoring damaged or older homes, leak repairs, structural stabilization, and refits.",
  },
];

const DISCIPLINES = [
  "General Contracting & Structural",
  "Electrical & MEP Systems",
  "Plumbing & Sanitary Civil",
  "Interior Architecture & Finishing",
  "Custom Joinery & Millwork",
  "Metal Fabrication & Aluminum",
  "BIM & Design Coordination",
  "Renovation & Retrofitting",
];

const SCALES = [
  {
    key: "small",
    label: "< 500 M²",
    desc: "Small-scale residential or commercial",
  },
  {
    key: "medium",
    label: "500 – 2,000 M²",
    desc: "Mid-range mixed-use or institutional",
  },
  {
    key: "large",
    label: "2,000 – 10,000 M²",
    desc: "Large commercial or campus",
  },
  {
    key: "mega",
    label: "10,000+ M²",
    desc: "High-rise or multi-tower development",
  },
];

const TIMELINES = [
  "Immediate mobilization (within 30 days)",
  "Next 1–3 Months (Near-term tender)",
  "Next 3–6 Months (Mid-term planning)",
  "6–12 Months (Strategic pipeline)",
  "Under Discussion / Flexible",
];

export default function StartProjectPage() {
  const [selectedType, setSelectedType] = useState("new_construction");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [selectedScale, setSelectedScale] = useState("medium");
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[0]);
  const [contactData, setContactData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    description: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [trackingCode, setTrackingCode] = useState<string | null>(null);

  function toggleDiscipline(d: string) {
    setSelectedDisciplines((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );
    if (errors.disciplines) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.disciplines;
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    const payload = {
      projectType: selectedType,
      disciplines: selectedDisciplines,
      scale: selectedScale,
      fullName: contactData.fullName,
      organization: contactData.organization,
      email: contactData.email,
      phone: contactData.phone,
      timeline: selectedTimeline,
      description: contactData.description,
      _hp: honeypot,
    };

    const validation = projectBriefFormSchema.safeParse(payload);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0]?.toString() || "form";
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      window.scrollTo({ top: 300, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/project-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setServerError(data.message || "Failed to lodge project brief.");
        }
        return;
      }

      setSubmittedEmail(contactData.email);
      setTrackingCode(data.trackingCode);
      window.scrollTo({ top: 250, behavior: "smooth" });
    } catch {
      setServerError(
        "Network error submitting project brief. Please verify connection or call our hotlines.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setTrackingCode(null);
    setSubmittedEmail("");
    setCopied(false);
    setSelectedDisciplines([]);
    setContactData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      description: "",
    });
    setHoneypot("");
    setErrors({});
    setServerError(null);
  }

  return (
    <div className="flex flex-col pt-2 w-full">
      {/* Top Telemetry Bar */}
      <section className="w-full bg-surface-container-high">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xs flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm text-secondary">
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-space-xs text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              TENDER DESK: OPEN
            </span>
            <span className="text-on-surface-variant">
              GC-3 GENERAL CONTRACTOR · TRADE REG: BL/AA/1/0001088/2004 · TIN:
              0001985917
            </span>
          </div>
          <div className="flex items-center gap-space-lg font-label-sm">
            <span>INTAKE STATUS: OPEN FOR INQUIRIES</span>
            <span className="hidden sm:inline">
              ENGINEERING REVIEW: ≤48 HOURS
            </span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="w-full bg-surface pt-space-xl pb-space-lg">
        <FadeUpView className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 bg-primary"></span>
                <span className="font-label-md text-label-md tracking-wider uppercase text-primary font-semibold">
                  PROJECT INTAKE &amp; TENDER CONSULTATION
                </span>
                <span className="text-secondary font-label-sm text-label-sm">
                  // SEC_01·SPECS
                </span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface tracking-tight uppercase font-bold">
                Tell us what you are building.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Whether you need a complete general contractor for a multi-story
                development or a specialist team for a defined trade scope, our
                engineering team is ready to evaluate your project.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-low p-space-md shadow-sm">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
                <span>CONTRACT READINESS</span>
                <span className="text-primary font-medium">
                  IMMEDIATE MOBILIZATION
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-full"></div>
              </div>
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant pt-space-xs">
                <span>COMMENCEMENT: READY</span>
                <span className="text-primary font-semibold">
                  ACCEPTING NEW PROJECTS
                </span>
              </div>
            </div>
          </div>
        </FadeUpView>
      </section>

      {/* Main Form Area */}
      <section className="w-full bg-surface-container pb-space-xl pt-space-lg">
        <FadeUpView className="max-w-7xl mx-auto px-6 lg:px-12">
          {trackingCode ? (
            <div className="bg-surface-container-lowest p-space-xl shadow-md max-w-3xl mx-auto flex flex-col items-center text-center gap-space-lg border border-outline-variant/40">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[36px]">
                  verified
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                  TENDER REGISTRY CONFIRMED // ESTIMATING QUEUE
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase font-bold">
                  Project Brief Lodged Successfully
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Our Senior Engineering Bureau and Chief Estimator have logged
                your submission. A preliminary scope evaluation will be prepared
                within 48 operational hours.
              </p>

              <div className="bg-surface-container-low border border-outline-variant/50 p-5 w-full max-w-lg flex flex-col gap-3 text-left">
                <div className="flex items-center justify-between text-secondary font-label-sm text-[10px] uppercase border-b border-outline-variant/30 pb-1.5">
                  <span>OFFICIAL RFP DOSSIER CODE</span>
                  <span className="text-primary font-bold">
                    LOGGED &amp; VERIFIED
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xl font-bold text-on-surface select-all tracking-wider">
                    {trackingCode}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (trackingCode) {
                        navigator.clipboard.writeText(trackingCode);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2500);
                      }
                    }}
                    className="text-xs uppercase font-label-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 cursor-pointer bg-surface-container px-2.5 py-1 border border-primary/30"
                    title="Copy RFP Tracking Code"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copied ? "check" : "content_copy"}
                    </span>
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-secondary text-[11px] pt-1 border-t border-outline-variant/20">
                  <div>
                    <span className="block font-mono text-[9px] uppercase">
                      CLASSIFICATION
                    </span>
                    <span className="font-semibold text-on-surface">
                      {selectedType.replace(/_/g, " ").toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase">
                      GROSS SCALE
                    </span>
                    <span className="font-semibold text-on-surface">
                      {selectedScale.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase">
                      DISCIPLINES
                    </span>
                    <span className="font-semibold text-on-surface">
                      {selectedDisciplines.length} Selected
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase">
                      TIMELINE
                    </span>
                    <span className="font-semibold text-on-surface">
                      {selectedTimeline}
                    </span>
                  </div>
                </div>
              </div>

              {submittedEmail && (
                <div className="w-full max-w-lg bg-surface-container-low/80 border border-outline-variant/40 p-3 flex items-start gap-2.5 text-left font-body-sm text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                    mark_email_read
                  </span>
                  <span>
                    An official confirmation receipt with your project specs has been dispatched to{" "}
                    <strong className="text-on-surface">{submittedEmail}</strong>.
                  </span>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase px-space-md py-space-sm border border-outline-variant/50 transition-colors cursor-pointer"
                >
                  <span>Lodge Another Brief</span>
                  <span>↺</span>
                </button>
                <a
                  href="/assets/Yebis_Engineering_Corporate_Portfolio.pdf"
                  download="Yebis_Engineering_Corporate_Portfolio.pdf"
                  className="inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-container text-primary font-label-md text-label-md uppercase px-space-md py-space-sm border border-primary/30 transition-colors"
                >
                  <span>Download Company Portfolio (PDF)</span>
                  <span>↓</span>
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-md text-label-md uppercase px-space-md py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150"
                >
                  <span>Explore 16 Verified Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Form Column */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                <form
                  className="flex flex-col gap-space-lg"
                  onSubmit={handleSubmit}
                >
                  {/* Field 1: Project Type */}
                  <div className="bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-inverse-surface text-on-primary px-space-xs py-0.5">
                          01
                        </span>
                        <label className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface font-semibold">
                          Project Classification
                        </label>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        SELECT SINGLE DISCIPLINE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-space-sm">
                      {PROJECT_TYPES.map((pt) => (
                        <label
                          key={pt.key}
                          className={`relative flex flex-col p-space-md cursor-pointer transition-all group ${
                            selectedType === pt.key
                              ? "bg-surface-container border-2 border-primary"
                              : "bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="project_type"
                            value={pt.key}
                            checked={selectedType === pt.key}
                            onChange={() => setSelectedType(pt.key)}
                            className="peer sr-only"
                          />
                          <div className="flex items-center justify-between pb-space-xs">
                            <span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">
                              TYPE_
                              {PROJECT_TYPES.indexOf(pt) + 1 < 10
                                ? `0${PROJECT_TYPES.indexOf(pt) + 1}`
                                : PROJECT_TYPES.indexOf(pt) + 1}
                            </span>
                            <span
                              className={`w-3.5 h-3.5 inline-flex items-center justify-center ${selectedType === pt.key ? "bg-primary" : "bg-surface-container-highest"}`}
                            >
                              <span className="w-1.5 h-1.5 bg-on-primary"></span>
                            </span>
                          </div>
                          <span className="font-headline-sm text-[16px] leading-[22px] text-on-surface font-bold uppercase mt-space-xs">
                            {pt.label}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {pt.desc}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Field 2: Required Disciplines */}
                  <div className="bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-inverse-surface text-on-primary px-space-xs py-0.5">
                          02
                        </span>
                        <label className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface font-semibold">
                          Required Disciplines *
                        </label>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        SELECT ALL THAT APPLY
                      </span>
                    </div>
                    {errors.disciplines && (
                      <p className="text-red-600 font-label-sm text-label-sm bg-red-50 p-2 border border-red-200">
                        {errors.disciplines}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                      {DISCIPLINES.map((d) => (
                        <label
                          key={d}
                          className={`flex items-center gap-space-sm p-space-sm cursor-pointer transition-all ${
                            selectedDisciplines.includes(d)
                              ? "bg-surface-container text-on-surface border border-primary/30"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-transparent"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 border inline-flex items-center justify-center shrink-0 ${
                              selectedDisciplines.includes(d)
                                ? "bg-primary border-primary text-on-primary"
                                : "bg-surface-container-highest border-outline-variant"
                            }`}
                          >
                            {selectedDisciplines.includes(d) && (
                              <span className="text-[10px] font-bold">✓</span>
                            )}
                          </span>
                          <input
                            type="checkbox"
                            checked={selectedDisciplines.includes(d)}
                            onChange={() => toggleDiscipline(d)}
                            className="sr-only"
                          />
                          <span className="font-label-md text-label-md uppercase tracking-wider">
                            {d}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Field 3: Project Scale */}
                  <div className="bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-inverse-surface text-on-primary px-space-xs py-0.5">
                          03
                        </span>
                        <label className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface font-semibold">
                          Project Scale
                        </label>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        GROSS FLOOR AREA
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
                      {SCALES.map((s) => (
                        <label
                          key={s.key}
                          className={`flex flex-col p-space-md cursor-pointer transition-all ${
                            selectedScale === s.key
                              ? "bg-surface-container border-2 border-primary"
                              : "bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="scale"
                            value={s.key}
                            checked={selectedScale === s.key}
                            onChange={() => setSelectedScale(s.key)}
                            className="sr-only"
                          />
                          <span className="font-headline-sm text-[16px] leading-[22px] text-on-surface font-bold">
                            {s.label}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {s.desc}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Field 4: Contact & Details */}
                  <div className="bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center gap-space-xs pb-space-xs">
                      <span className="font-label-sm text-label-sm bg-inverse-surface text-on-primary px-space-xs py-0.5">
                        04
                      </span>
                      <label className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface font-semibold">
                        Contact &amp; Project Details
                      </label>
                    </div>

                    {serverError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-700 font-label-sm text-label-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">
                          error
                        </span>
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Honeypot field (hidden from genuine users, traps automated spam bots) */}
                    <div style={{ display: "none" }} aria-hidden="true">
                      <label htmlFor="company_website_project_hp">Do not fill this field</label>
                      <input
                        id="company_website_project_hp"
                        type="text"
                        name="_hp"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label htmlFor="brief_fullName" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center justify-between">
                          <span>Full Name *</span>
                          {errors.fullName && (
                            <span className="text-red-600 text-[11px] normal-case">
                              {errors.fullName}
                            </span>
                          )}
                        </label>
                        <input
                          id="brief_fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          required
                          value={contactData.fullName}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              fullName: e.target.value,
                            })
                          }
                          className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors ${
                            errors.fullName
                              ? "border-red-500 focus:border-red-600"
                              : "border-outline-variant/40 focus:border-primary"
                          }`}
                          placeholder="Eng. / Mr. / Ms."
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label htmlFor="brief_organization" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center justify-between">
                          <span>Organization *</span>
                          {errors.organization && (
                            <span className="text-red-600 text-[11px] normal-case">
                              {errors.organization}
                            </span>
                          )}
                        </label>
                        <input
                          id="brief_organization"
                          name="organization"
                          type="text"
                          autoComplete="organization"
                          required
                          value={contactData.organization}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              organization: e.target.value,
                            })
                          }
                          className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors ${
                            errors.organization
                              ? "border-red-500 focus:border-red-600"
                              : "border-outline-variant/40 focus:border-primary"
                          }`}
                          placeholder="Company / Agency"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label htmlFor="brief_email" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center justify-between">
                          <span>Email *</span>
                          {errors.email && (
                            <span className="text-red-600 text-[11px] normal-case">
                              {errors.email}
                            </span>
                          )}
                        </label>
                        <input
                          id="brief_email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={contactData.email}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              email: e.target.value,
                            })
                          }
                          className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-500 focus:border-red-600"
                              : "border-outline-variant/40 focus:border-primary"
                          }`}
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label htmlFor="brief_phone" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center justify-between">
                          <span>Phone</span>
                          {errors.phone && (
                            <span className="text-red-600 text-[11px] normal-case">
                              {errors.phone}
                            </span>
                          )}
                        </label>
                        <input
                          id="brief_phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={contactData.phone}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              phone: e.target.value,
                            })
                          }
                          className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                          placeholder="+251 9..."
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Preferred Timeline
                      </label>
                      <CustomSelect
                        options={TIMELINES}
                        defaultValue={selectedTimeline}
                        onChange={(val) => setSelectedTimeline(val)}
                        name="timeline"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Project Description / Technical Parameters
                      </label>
                      <textarea
                        rows={4}
                        value={contactData.description}
                        onChange={(e) =>
                          setContactData({
                            ...contactData,
                            description: e.target.value,
                          })
                        }
                        className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors max-h-[220px] resize-y"
                        placeholder="Site location, number of floors, approximate budget, special requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-space-xs bg-inverse-surface hover:bg-primary disabled:opacity-50 text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150 w-full sm:w-auto self-start cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span className="tracking-wider">Logging Brief...</span>
                      </>
                    ) : (
                      <>
                        <span className="tracking-wider">
                          Submit Project Brief
                        </span>
                        <span className="text-primary-fixed">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Sidebar Dossier */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                {/* Process Summary */}
                <div className="bg-surface-container-lowest border border-outline-variant/40 p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm border-b border-outline-variant/30 pb-space-xs">
                    <span className="w-2 h-2 bg-primary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                      WHAT HAPPENS NEXT
                    </span>
                  </div>
                  {[
                    {
                      step: "01",
                      title: "Brief Received",
                      desc: "Your project scope is logged and assigned a reference number.",
                    },
                    {
                      step: "02",
                      title: "Technical Review",
                      desc: "A Principal Estimator reviews requirements against our capability matrix.",
                    },
                    {
                      step: "03",
                      title: "Initial Assessment",
                      desc: "Within 48hrs, you receive a preliminary scope evaluation and methodology outline.",
                    },
                    {
                      step: "04",
                      title: "Formal Proposal",
                      desc: "Detailed BOQ, timeline, and commercial terms presented for consideration.",
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-space-sm">
                      <span className="font-label-sm text-label-sm bg-surface-container text-primary px-space-xs py-0.5 h-fit">
                        {s.step}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-md text-label-md text-on-surface font-semibold uppercase">
                          {s.title}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {s.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Contact */}
                <div className="bg-surface-container-lowest border border-outline-variant/40 p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm border-b border-outline-variant/30 pb-space-xs">
                    <span className="w-2 h-2 bg-primary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                      PREFER TO CALL?
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        HEADQUARTERS DIRECT
                      </span>
                      <a
                        href="tel:+251911517784"
                        className="font-label-lg text-label-lg text-on-surface font-semibold hover:text-primary transition-colors"
                      >
                        +251 91 151 7784
                      </a>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        COMMERCIAL TENDERS
                      </span>
                      <a
                        href="tel:+251913879093"
                        className="font-label-lg text-label-lg text-on-surface font-semibold hover:text-primary transition-colors"
                      >
                        +251 91 387 9093
                      </a>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        OPERATIONS &amp; SITE DESK
                      </span>
                      <a
                        href="tel:+251911629279"
                        className="font-label-lg text-label-lg text-on-surface font-semibold hover:text-primary transition-colors"
                      >
                        +251 91 162 9879
                      </a>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        EMAIL
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        inquiries@yebisengineering.pro.et
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credential Badge */}
                <div className="bg-inverse-surface p-space-lg flex flex-col gap-space-sm border border-outline-variant/40">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center bg-black/50 border border-white/20 p-1 shrink-0">
                      <Image
                        src="/assets/logo-light.png"
                        alt="Yebis Logo"
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                    </span>
                    <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
                      ACCREDITED GC-3 CONTRACTOR
                    </span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-primary uppercase font-bold">
                    GRADE 3 (GC-3) Certified
                  </span>
                  <span className="font-body-sm text-body-sm text-inverse-on-surface">
                    Licensed by the Federal Ministry of Urban Development &amp;
                    Infrastructure. Authorized for unlimited project scale and
                    tender participation.
                  </span>
                  <div className="flex flex-wrap gap-space-sm pt-space-xs">
                    {[
                      "REG: BL/AA/1/0001088/2004",
                      "FIDIC COMPLIANT",
                      "EBCS CODE",
                      "CBE TIER-1",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="font-label-sm text-label-sm text-primary-fixed border border-primary-fixed/30 px-2 py-0.5 uppercase"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </FadeUpView>
      </section>
    </div>
  );
}
