"use client";

import type { FormEvent } from "react";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import Link from "next/link";
import { useState } from "react";
import { IMG } from "@/lib/site-images";
import { contactFormSchema } from "@/lib/validations/inquiries";
import {
  FadeUpView,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollTransitions";

const CATEGORIES = [
  { key: "tender", label: "General Commercial Tender" },
  { key: "subcontractor", label: "Trade Prequalification" },
  { key: "procurement", label: "Supplier & Materials Sourcing" },
  { key: "consultation", label: "Executive Consultation" },
] as const;

const FIELD_STATIONS = [
  {
    name: "Bole Sub-City (HQ & Workshops)",
    detail: "Corporate Bureau & Fabrication Workshops",
    phone: "+251 91 151 7784",
    status: "HEADQUARTERS",
  },
  {
    name: "Kazanchis & Kirkos Zone",
    detail: "Commercial Structural Frames & Fit-Outs",
    phone: "HQ Dispatch",
    status: "ACTIVE ZONES",
  },
  {
    name: "CMC & Summit Corridor",
    detail: "Residential Compounds & Infill Builds",
    phone: "HQ Dispatch",
    status: "ACTIVE ZONES",
  },
  {
    name: "Regional Project Desks",
    detail: "Civil Infrastructure & Public Works",
    phone: "HQ Dispatch",
    status: "MOBILIZED",
  },
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<"tender" | "subcontractor" | "procurement" | "consultation">("tender");
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [ticketRef, setTicketRef] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    const payload = {
      category: selectedCategory,
      ...formData,
    };

    const validation = contactFormSchema.safeParse(payload);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0]?.toString() || "form";
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setServerError(data.message || "Failed to submit transmission.");
        }
        return;
      }

      setTicketRef(data.ref);
      window.scrollTo({ top: 300, behavior: "smooth" });
    } catch (err) {
      setServerError("Network error. Please verify connection and retry, or call our direct hotlines.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setTicketRef(null);
    setFormData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setServerError(null);
  }

  return (
    <div className="flex flex-col pt-2 w-full">
      {/* Datum Bar */}
      <div className="w-full bg-surface-container-low px-6 lg:px-12 py-space-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xs font-label-sm text-label-sm text-secondary">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span className="tracking-wider uppercase font-semibold text-on-surface">
              HEADQUARTERS &amp; REGIONAL LOGISTICS // COMMERCIAL TENDERS &amp;
              FIELD DISPATCH
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="text-on-surface-variant font-medium">
              DESK HOURS:{" "}
              <span className="text-primary font-semibold">
                MON–SAT 08:00 – 18:00 EAT
              </span>
            </span>
            <span>ADDIS ABABA (UTC+3)</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <FadeUpView>
          <div className="flex flex-col gap-space-sm max-w-4xl">
            <div className="flex items-center gap-space-xs">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                [ DIRECT COMMUNICATION &amp; TENDER INTAKE ]
              </span>
              <span className="text-secondary font-label-sm text-label-sm">
                / BOLE SUB-CITY, ADDIS ABABA
              </span>
            </div>
            <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
              Headquarters &amp; Regional Field Operations.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              Connect directly with our corporate executive office, commercial
              tender desk, procurement division, or project site engineers across
              Ethiopia.
            </p>
          </div>

          {/* Corporate Telemetry Bar */}
          <div className="mt-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between pb-1 border-b border-outline-variant/30">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Direct Telephony Lines
              </span>
              <span className="material-symbols-outlined text-primary text-[18px]">
                support_agent
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <a
                href="tel:+251911517784"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>+251 91 151 7784</span>
                <span className="text-[10px] text-secondary font-mono">
                  HQ / Site
                </span>
              </a>
              <a
                href="tel:+251913879093"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>+251 91 387 9093</span>
                <span className="text-[10px] text-secondary font-mono">
                  Tenders
                </span>
              </a>
              <a
                href="tel:+251911629279"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>+251 91 162 9879</span>
                <span className="text-[10px] text-secondary font-mono">
                  Operations
                </span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Official Registries
              </span>
              <span className="material-symbols-outlined text-primary text-[18px]">
                verified
              </span>
            </div>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">
              BL/AA/1/0001088/2004
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              TIN: 0001985917 · VAT REG
            </span>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Tender Turnaround
              </span>
              <span className="material-symbols-outlined text-primary text-[18px]">
                timer
              </span>
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                ≤ 48
              </span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase">
                Business Hours
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Formal RFP / BOQ Dossier SLA
            </span>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Operating Protocol
              </span>
              <span className="material-symbols-outlined text-primary text-[18px]">
                schedule
              </span>
            </div>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">
              M-F 08:00 – 17:30 EAT
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Sat 08:30 – 12:30 EAT
            </span>
          </div>
        </div>
        </FadeUpView>
      </section>

      {/* Dual Column Interaction Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-lg">
        <FadeUpView className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left: Intake Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md border border-outline-variant/40">
            {ticketRef ? (
              <div className="flex flex-col gap-space-md items-center text-center py-space-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[36px]">
                    verified
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                    TRANSMISSION CONFIRMED // SLA QUEUED
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase font-bold">
                    Official Inquiry Received
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Your inquiry has been routed to our corporate executive office and engineering desk. A designated principal will contact you within 48 operational hours.
                </p>
                <div className="bg-surface-container-low border border-outline-variant/50 p-4 w-full max-w-md flex flex-col gap-2 text-left">
                  <div className="flex items-center justify-between text-secondary font-label-sm text-[10px] uppercase border-b border-outline-variant/30 pb-1">
                    <span>OFFICIAL DOSSIER TRACKING CODE</span>
                    <span className="text-primary font-bold">ACTIVE</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-on-surface select-all tracking-wider">
                    {ticketRef}
                  </div>
                  <div className="text-secondary text-[11px] flex items-center justify-between pt-1">
                    <span>CATEGORY: {selectedCategory.toUpperCase()}</span>
                    <span>TIMESTAMP: {new Date().toLocaleTimeString()} EAT</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant font-label-sm text-label-sm uppercase font-semibold transition-colors mt-2"
                >
                  <span>Transmit Another Inquiry</span>
                  <span>↺</span>
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-space-xs pb-space-md">
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase">
                    <span className="w-2 h-2 bg-primary"></span>
                    <span>TERMINAL_01 // SECURE_INTAKE_MODULE</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface font-semibold">
                    Direct Departmental Transmission
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Official communications are routed directly to accredited engineers, commercial estimators, or the executive secretarial board.
                  </p>
                </div>

                {serverError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 font-label-sm text-label-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">error</span>
                    <span>{serverError}</span>
                  </div>
                )}

                <form
                  className="flex flex-col gap-space-md mt-space-sm"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Category Selector */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex flex-col items-start justify-between">
                      <span>Inquiry Category &amp; Target Desk *</span>
                      {errors.category && (
                        <span className="text-red-600 text-[11px] normal-case">{errors.category}</span>
                      )}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setSelectedCategory(cat.key)}
                          className={`text-left p-space-sm font-label-sm text-label-sm uppercase transition-all duration-150 flex items-center justify-between ${
                            selectedCategory === cat.key
                              ? "bg-surface-container text-on-surface border border-primary/50 shadow-xs"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-transparent"
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span
                            className={`w-2 h-2 ${selectedCategory === cat.key ? "bg-primary" : "bg-transparent"}`}
                          ></span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex flex-col items-start justify-between">
                        <span>Full Name *</span>
                        {errors.fullName && (
                          <span className="text-red-600 text-[11px] normal-case">{errors.fullName}</span>
                        )}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors ${
                          errors.fullName ? "border-red-500 focus:border-red-600" : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="Eng. / Mr. / Ms."
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex flex-col items-start justify-between">
                        <span>Organization *</span>
                        {errors.organization && (
                          <span className="text-red-600 text-[11px] normal-case">{errors.organization}</span>
                        )}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors ${
                          errors.organization ? "border-red-500 focus:border-red-600" : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="Company / Agency"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex flex-col items-start justify-between">
                        <span>Email Address *</span>
                        {errors.email && (
                          <span className="text-red-600 text-[11px] normal-case">{errors.email}</span>
                        )}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors ${
                          errors.email ? "border-red-500 focus:border-red-600" : "border-outline-variant/40 focus:border-primary"
                        }`}
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex flex-col items-start justify-between">
                        <span>Phone Number</span>
                        {errors.phone && (
                          <span className="text-red-600 text-[11px] normal-case">{errors.phone}</span>
                        )}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-surface-container-low border border-outline-variant/40 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                        placeholder="+251 9..."
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex flex-col items-start justify-between">
                      <span>Message / Scope Summary *</span>
                      {errors.message && (
                        <span className="text-red-600 text-[11px] normal-case">{errors.message}</span>
                      )}
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`bg-surface-container-low border px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none transition-colors max-h-[220px] resize-y ${
                        errors.message ? "border-red-500 focus:border-red-600" : "border-outline-variant/40 focus:border-primary"
                      }`}
                      placeholder="Describe your project scope, required disciplines, site location, and target timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-space-xs bg-inverse-surface hover:bg-primary disabled:opacity-50 text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150 w-full sm:w-auto self-start cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span className="tracking-wider">Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span className="tracking-wider">Transmit Inquiry</span>
                        <span className="text-primary-fixed">→</span>
                      </>
                    )}
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
                <span className="font-label-sm text-label-sm text-secondary">
                  09°01&apos;N 38°45&apos;E
                </span>
              </div>
              <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden border border-outline-variant/40">
                <ImageWithFallback
                  src={IMG.office}
                  alt="Yebis Engineering Bole headquarters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <address className="not-italic font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
                <p>
                  Bole Sub-City, Woreda 03
                  <br />
                  Cameroon Street, Yebis Tower
                  <br />
                  Addis Ababa, Ethiopia
                </p>
                <p className="font-label-sm text-label-sm text-on-surface pt-space-xs">
                  inquiries@yebisengineering.pro.et
                </p>
                <div className="flex flex-col gap-1 font-label-sm text-label-sm text-on-surface pt-1">
                  <a
                    href="tel:+251911517784"
                    className="hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span className="font-semibold">+251 91 151 7784</span>
                    <span className="text-[10px] text-secondary font-mono">
                      HQ / Site
                    </span>
                  </a>
                  <a
                    href="tel:+251913879093"
                    className="hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span className="font-semibold">+251 91 387 9093</span>
                    <span className="text-[10px] text-secondary font-mono">
                      Tenders
                    </span>
                  </a>
                  <a
                    href="tel:+251911629279"
                    className="hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span className="font-semibold">+251 91 162 9879</span>
                    <span className="text-[10px] text-secondary font-mono">
                      Operations
                    </span>
                  </a>
                </div>
              </address>
            </div>

            {/* Field Stations */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm border-b border-outline-variant/30 pb-space-xs">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                  ACTIVE OPERATIONAL &amp; PROJECT ZONES
                </span>
              </div>
              <div className="flex flex-col divide-y divide-outline-variant/20">
                {FIELD_STATIONS.map((station) => (
                  <div
                    key={station.name}
                    className="flex items-center justify-between py-space-sm"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        {station.name}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {station.detail} · {station.phone}
                      </span>
                    </div>
                    <span
                      className={`font-label-sm text-label-sm uppercase tracking-wider shrink-0 pl-2 ${
                        station.status === "HEADQUARTERS"
                          ? "text-primary font-bold"
                          : "text-secondary font-medium"
                      }`}
                    >
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
        </FadeUpView>
      </section>
    </div>
  );
}
