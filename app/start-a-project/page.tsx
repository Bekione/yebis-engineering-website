"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PROJECT_TYPES = [
  {
    key: "new_construction",
    label: "New Construction",
    desc: "Ground-up commercial, institutional, or high-density residential.",
  },
  {
    key: "building_renovation",
    label: "Building Renovation",
    desc: "Structural strengthening, MEP modernization, and interior refit.",
  },
  {
    key: "interior_fitout",
    label: "Interior Fit-Out",
    desc: "Turnkey finishing — gypsum, flooring, millwork, and lighting.",
  },
  {
    key: "trade_scope",
    label: "Specialized Trade Scope",
    desc: "Single-discipline: electrical, plumbing, aluminum, or joinery.",
  },
  {
    key: "design_build",
    label: "Design & Build",
    desc: "Full BIM coordination, engineering, and integrated execution.",
  },
  {
    key: "maintenance",
    label: "Facilities Maintenance",
    desc: "Preventative maintenance, lifecycle repairs, and asset care.",
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
  "Immediate (within 30 days)",
  "Q1 2025 (January–March)",
  "Q2 2025 (April–June)",
  "Q3/Q4 2025 (July–December)",
  "2026 or Later",
  "Under Discussion / Flexible",
];

export default function StartProjectPage() {
  const [selectedType, setSelectedType] = useState("new_construction");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [selectedScale, setSelectedScale] = useState("medium");
  const [submitted, setSubmitted] = useState(false);

  function toggleDiscipline(d: string) {
    setSelectedDisciplines((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              GC-1 ACCREDITED / ETHIOPIAN MINISTRY OF URBAN DEV.
            </span>
          </div>
          <div className="flex items-center gap-space-lg font-label-sm">
            <span>REF_PROTOCOL: PRJ-INTAKE-V4.2</span>
            <span className="hidden sm:inline">CYCLE TIME: ≤48 HRS ASSESS</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="w-full bg-surface pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
                <span>INTAKE CAPACITY</span>
                <span className="text-primary font-medium">
                  Q2/Q3 COMMENCEMENT
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-3/4"></div>
              </div>
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant pt-space-xs">
                <span>CURRENT WORKLOAD RATIO: 76%</span>
                <span>SLOTS REMAINING: 04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Area */}
      <section className="w-full bg-surface-container pb-space-xl pt-space-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {submitted ? (
            <div className="bg-surface-container-lowest p-space-xl shadow-md max-w-3xl mx-auto flex flex-col items-center text-center gap-space-lg">
              <span className="material-symbols-outlined text-primary text-[48px]">
                verified
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase font-bold">
                Project Brief Registered
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Our senior engineering bureau has logged your submission. A
                Principal Estimator will initiate drawing/BOQ assessment within
                48 business hours.
              </p>
              <span className="font-label-sm text-label-sm text-primary font-medium">
                REF: YB-PRJ-{new Date().getFullYear()}-
                {Math.floor(Math.random() * 9000 + 1000)}
              </span>
              <span className="font-label-sm text-label-sm text-secondary">
                CONFIRMATION DISPATCHED TO SUBMITTING EMAIL
              </span>
              <div className="flex items-center gap-space-md pt-space-md">
                <Link
                  href="/"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Return Home</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150"
                >
                  <span>View Our Work</span>
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
                          Required Disciplines
                        </label>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        SELECT ALL THAT APPLY
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                      {DISCIPLINES.map((d) => (
                        <label
                          key={d}
                          className={`flex items-center gap-space-sm p-space-sm cursor-pointer transition-all ${
                            selectedDisciplines.includes(d)
                              ? "bg-surface-container text-on-surface"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 border inline-flex items-center justify-center shrink-0 ${
                              selectedDisciplines.includes(d)
                                ? "bg-primary border-primary"
                                : "bg-surface-container-highest border-outline-variant"
                            }`}
                          >
                            {selectedDisciplines.includes(d) && (
                              <span className="text-on-primary text-[10px] font-bold">
                                ✓
                              </span>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                          placeholder="Eng. / Mr. / Ms."
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                          Organization *
                        </label>
                        <input
                          type="text"
                          required
                          className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                          placeholder="Company / Agency"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                          placeholder="+251 ..."
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Preferred Timeline
                      </label>
                      <select className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors">
                        {TIMELINES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Project Description / Notes
                      </label>
                      <textarea
                        rows={4}
                        className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors resize-vertical"
                        placeholder="Site location, number of floors, approximate budget, special requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150 w-full sm:w-auto self-start"
                  >
                    <span className="tracking-wider">Submit Project Brief</span>
                    <span className="text-primary-fixed">→</span>
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
                        TENDER DESK
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        +251 91 151 7784
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        URGENT SITE LINE
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        +251 91 151 7784
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        EMAIL
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        inquiries@yebisengineering.com
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
                      ACCREDITED GC-1 CONTRACTOR
                    </span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-primary uppercase font-bold">
                    Grade 1 (GC-1) Certified
                  </span>
                  <span className="font-body-sm text-body-sm text-inverse-on-surface">
                    Licensed by the Federal Ministry of Urban Development &amp;
                    Infrastructure. Authorized for unlimited project scale and
                    tender participation.
                  </span>
                  <div className="flex flex-wrap gap-space-sm pt-space-xs">
                    {[
                      "MOTI/GC-01/ET",
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
        </div>
      </section>
    </div>
  );
}
