"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IMG } from "@/lib/site-images";

const CATEGORIES = [
  { key: "tender", label: "General Commercial Tender" },
  { key: "subcontractor", label: "Trade Prequalification" },
  { key: "procurement", label: "Supplier & Materials Sourcing" },
  { key: "consultation", label: "Executive Consultation" },
];

const FIELD_STATIONS = [
  { name: "Bole District Site Office", phone: "+251 91 234 5678", status: "ACTIVE" },
  { name: "CMC Area Operations", phone: "+251 91 345 6789", status: "ACTIVE" },
  { name: "Kazanchis Development Zone", phone: "+251 91 456 7890", status: "ACTIVE" },
  { name: "Megenagna Regional Hub", phone: "+251 91 567 8901", status: "STANDBY" },
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("tender");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col w-full">
      {/* Datum Bar */}
      <div className="w-full bg-surface-container-low px-6 lg:px-12 py-space-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xs font-label-sm text-label-sm text-secondary">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span className="tracking-wider uppercase font-semibold text-on-surface">
              HEADQUARTERS &amp; REGIONAL LOGISTICS // COMMERCIAL TENDERS &amp; FIELD DISPATCH
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="text-on-surface-variant font-medium">
              DESK HOURS: <span className="text-primary font-semibold">MON–SAT 08:00 – 18:00 EAT</span>
            </span>
            <span>ADDIS ABABA (UTC+3)</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="flex flex-col gap-space-sm max-w-4xl">
          <div className="flex items-center gap-space-xs">
            <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold">
              [ DIRECT COMMUNICATION &amp; TENDER INTAKE ]
            </span>
            <span className="text-secondary font-label-sm text-label-sm">/ BOLE SUB-CITY, ADDIS ABABA</span>
          </div>
          <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
            Headquarters &amp; Regional Field Operations.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Connect directly with our corporate executive office, commercial tender desk, procurement division, or project site engineers across Ethiopia.
          </p>
        </div>

        {/* Corporate Telemetry Bar */}
        <div className="mt-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Tender Desk Hotlines</span>
              <span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
            </div>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">+251 11 667 8900</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">+251 91 122 3344 (Urgent/Site)</span>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Official Registries</span>
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
            </div>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">MOTI/GC-01/ET/9924</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">TIN: 0048992110 · VAT REG</span>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Tender Turnaround</span>
              <span className="material-symbols-outlined text-primary text-[18px]">timer</span>
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">≤ 48</span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase">Business Hours</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Formal RFP / BOQ Dossier SLA</span>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Operating Protocol</span>
              <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
            </div>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">M-F 08:00 – 17:30 EAT</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Sat 08:30 – 12:30 EAT</span>
          </div>
        </div>
      </section>

      {/* Dual Column Interaction Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left: Intake Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md">
            {submitted ? (
              <div className="flex flex-col gap-space-md items-center text-center py-space-xl">
                <span className="material-symbols-outlined text-primary text-[48px]">verified</span>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase font-bold">
                  Transmission Received
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Your inquiry has been routed to the appropriate department. A designated engineer or commercial estimator will respond within 48 business hours.
                </p>
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  REF: YB-CONT-{new Date().getFullYear()}-{Math.floor(Math.random() * 9000 + 1000)}
                </span>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-space-xs pb-space-md">
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase">
                    <span>TERMINAL_01 // SECURE_INTAKE_MODULE</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface font-semibold">
                    Direct Departmental Transmission
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Official communications are routed directly to accredited engineers, commercial estimators, or the executive secretarial board.
                  </p>
                </div>

                <form className="flex flex-col gap-space-md mt-space-sm" onSubmit={handleSubmit}>
                  {/* Category Selector */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Inquiry Category &amp; Target Desk *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setSelectedCategory(cat.key)}
                          className={`text-left p-space-sm font-label-sm text-label-sm uppercase transition-all duration-150 flex items-center justify-between ${
                            selectedCategory === cat.key
                              ? "bg-surface-container text-on-surface"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span className={`w-2 h-2 ${selectedCategory === cat.key ? "bg-primary" : "bg-transparent"}`}></span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Fields */}
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

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Email Address *
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                        placeholder="+251 ..."
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Message / Scope Summary *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors resize-vertical"
                      placeholder="Describe your project scope, required disciplines, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150 w-full sm:w-auto self-start"
                  >
                    <span className="tracking-wider">Transmit Inquiry</span>
                    <span className="text-primary-fixed">→</span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right: Headquarters & Field Stations */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* HQ Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-xs">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  HEADQUARTERS // BOLE DISTRICT
                </span>
                <span className="font-label-sm text-label-sm text-secondary">09°01&apos;N 38°45&apos;E</span>
              </div>
              <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden border border-outline-variant/40">
                <Image
                  src={IMG.towers}
                  alt="Yebis Engineering Bole headquarters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <address className="not-italic font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
                <p>
                  Bole Sub-City, Woreda 03<br />
                  Cameroon Street, Yebis Tower<br />
                  Addis Ababa, Ethiopia
                </p>
                <p className="font-label-sm text-label-sm text-on-surface pt-space-xs">
                  inquiries@yebisengineering.com
                </p>
                <p className="font-label-sm text-label-sm text-on-surface">
                  +251 11 667 8900 / +251 91 122 3344
                </p>
              </address>
            </div>

            {/* Field Stations */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm border-b border-outline-variant/30 pb-space-xs">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                  FIELD STATION DIRECTORY
                </span>
              </div>
              <div className="flex flex-col divide-y divide-outline-variant/20">
                {FIELD_STATIONS.map((station) => (
                  <div key={station.name} className="flex items-center justify-between py-space-sm">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-md text-label-md text-on-surface font-medium">{station.name}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{station.phone}</span>
                    </div>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${station.status === "ACTIVE" ? "text-primary font-medium" : "text-secondary"}`}>
                      {station.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Start CTA */}
            <Link
              href="/start-a-project"
              className="flex items-center justify-between bg-inverse-surface hover:bg-primary text-on-primary p-space-lg transition-all duration-150 group"
            >
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                  NEED A FORMAL PROPOSAL?
                </span>
                <span className="font-headline-sm text-headline-sm text-on-primary uppercase font-bold">
                  Start a Project →
                </span>
              </div>
              <span className="material-symbols-outlined text-primary-fixed text-[32px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
