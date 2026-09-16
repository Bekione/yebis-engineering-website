"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ALL_PROJECTS,
  ProjectRecord,
  ProjectSector,
  FORMATTED_TOTAL_ETB,
} from "@/lib/projects-data";

export default function WorkPage() {
  const [activeSector, setActiveSector] = useState<ProjectSector>("all");
  const [selectedClientCategory, setSelectedClientCategory] =
    useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectRecord | null>(null);

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((proj) => {
      // Sector filter
      let matchesSector = true;
      if (activeSector !== "all") {
        matchesSector = proj.sector === activeSector;
      }

      // Client filter
      let matchesClient = true;
      if (selectedClientCategory !== "all") {
        matchesClient = proj.clientCategory === selectedClientCategory;
      }

      return matchesSector && matchesClient;
    });
  }, [activeSector, selectedClientCategory]);

  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Page Header */}
      <section className="w-full bg-surface-container-low px-6 lg:px-12 pt-10 pb-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 bg-primary"></span>
              <span className="font-label-sm text-label-sm tracking-widest text-primary font-semibold uppercase">
                PORTFOLIO &amp; PROJECT ARCHIVE
              </span>
              <span className="text-secondary/40">/</span>
              <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                CONTRACTOR PERFORMANCE REGISTER
              </span>
            </div>
            <div className="flex items-center gap-3 bg-surface px-3.5 py-1.5 border border-outline-variant/40">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium uppercase tracking-wide">
                {ALL_PROJECTS.length} DELIVERED PROJECTS ACROSS ETHIOPIA ({FORMATTED_TOTAL_ETB})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase font-bold">
                Proven Execution Across Ethiopia.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                From turnkey multi-story buildings and public housing to
                high-tolerance specialized packages—including lead-lined
                hospital radiology suites, potable water reservoirs, and
                municipal civil infrastructure.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2.5 bg-surface p-5 border border-outline-variant/40">
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm uppercase">
                  Contracting License
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Grade 1 General Contractor (GC-1)
                </span>
              </div>
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm uppercase">
                  Regional Radius
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Addis Ababa, Oromia, Amhara, SNNPRS
                </span>
              </div>
              <div className="flex items-center justify-between text-secondary">
                <span className="font-label-sm text-label-sm uppercase">
                  Delivery Track Record
                </span>
                <span className="font-label-md text-label-md text-primary font-semibold">
                  {ALL_PROJECTS.length} Documented Contracts
                </span>
              </div>
            </div>
          </div>

          {/* Filter Controls Module */}
          <div className="mt-4 bg-surface p-5 border border-outline-variant/40 flex flex-col gap-5">
            {/* Sector & Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveSector("all")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "all"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>All Projects</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/20">
                  {ALL_PROJECTS.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSector("healthcare")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "healthcare"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>Healthcare &amp; Medical</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/10">5</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSector("housing")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "housing"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>Housing &amp; Condominiums</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/10">4</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSector("education")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "education"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>Education &amp; Workshops</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/10">2</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSector("civil")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "civil"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>Civil &amp; Water</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/10">4</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSector("commercial")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "commercial"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>Commercial &amp; Logistics</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/10">2</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSector("specialized")}
                className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border ${
                  activeSector === "specialized"
                    ? "bg-inverse-surface text-on-primary border-inverse-surface"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                }`}
              >
                <span>Specialized Scopes</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-black/10">2</span>
              </button>
            </div>

            {/* Client Authority Filter & View Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-low/50 px-4 py-3 border border-outline-variant/30">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Client / Tender Authority:
                  </label>
                  <select
                    value={selectedClientCategory}
                    onChange={(e) => setSelectedClientCategory(e.target.value)}
                    className="bg-surface text-on-surface font-label-md text-label-md px-3 py-1.5 border border-outline-variant/40 focus:outline-none focus:border-primary"
                  >
                    <option value="all">All Clients &amp; Agencies</option>
                    <option value="government">
                      Government &amp; Public Agencies (AAHDPO, Customs, Kirkos)
                    </option>
                    <option value="healthcare">
                      Specialized Public Hospitals (ALERT, St. Peter&apos;s, St.
                      Paul&apos;s)
                    </option>
                    <option value="ngo">
                      NGO &amp; International (World Vision, Hunger Project,
                      Cancer Care)
                    </option>
                    <option value="educational">
                      Educational &amp; Institutional (TVET, EOC-DICAC)
                    </option>
                    <option value="commercial">Commercial Developers</option>
                    <option value="residential">Private Residential</option>
                  </select>
                </div>

                <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-2.5 py-1 border border-primary/20">
                  SHOWING {filteredProjects.length} OF {ALL_PROJECTS.length}{" "}
                  CONTRACT DOSSIERS
                </span>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-surface-container p-1 border border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors ${
                    viewMode === "grid"
                      ? "bg-surface text-on-surface shadow-sm"
                      : "text-secondary hover:text-on-surface"
                  }`}
                  title="Grid Showcase View"
                >
                  <span className="material-symbols-outlined text-[18px] block">
                    grid_view
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 transition-colors ${
                    viewMode === "table"
                      ? "bg-surface text-on-surface shadow-sm"
                      : "text-secondary hover:text-on-surface"
                  }`}
                  title="Official Performance Register Table"
                >
                  <span className="material-symbols-outlined text-[18px] block">
                    table_rows
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry Operational Strip */}
      <div className="w-full bg-surface-container-high py-2.5 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-secondary font-label-sm text-label-sm tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary"></span>GC-1 STATUTORY
              REGISTRY
            </span>
            <span className="hidden md:inline">MOUD-GC1-CERTIFIED</span>
            <span className="hidden sm:inline">
              CONTRACT SPECTRUM: TURNKEY GC &amp; TARGETED SUBCONTRACTS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>AUDITED BID &amp; TENDER PERFORMANCE</span>
            <span className="text-primary font-semibold">
              ETHIOPIAN BUILDING CODE COMPLIANT
            </span>
          </div>
        </div>
      </div>

      {/* Project Matrix / Register */}
      <section className="w-full px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card flex flex-col bg-surface overflow-hidden border border-outline-variant/40 hover:border-primary transition-all duration-200"
                >
                  <div className="relative h-64 w-full bg-surface-container-highest overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-inverse-surface/90 text-on-primary font-label-sm text-label-sm px-2.5 py-1 tracking-widest uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary"></span>
                      {project.id}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-surface/95 px-2.5 py-1 text-secondary font-label-sm text-label-sm border border-outline-variant/30">
                      {project.location} · {project.region}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm uppercase">
                        <span className="text-primary font-medium">
                          {project.client}
                        </span>
                        <span className="bg-surface-container px-2 py-0.5 text-on-surface font-semibold">
                          {project.completionYear}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                        {project.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="font-label-sm text-label-sm bg-surface-container px-2 py-1 text-on-surface uppercase border border-outline-variant/30 font-medium">
                          {project.projectType}
                        </span>
                        <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-2 py-1 uppercase font-semibold">
                          {project.contractCostETB}
                        </span>
                      </div>

                      <div className="pt-3 flex items-center justify-between bg-surface-container-low/60 -mx-6 -mb-6 px-6 py-3.5 border-t border-outline-variant/30">
                        <span className="font-label-sm text-label-sm text-secondary truncate max-w-[180px]">
                          SCALE: {project.scale}
                        </span>
                        {project.slug ? (
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold uppercase tracking-wider transition-colors shrink-0"
                          >
                            <span>Case Study</span>
                            <span className="text-sm">→</span>
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                          >
                            <span>Specsheet</span>
                            <span className="text-sm">→</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Technical Register Table View — Mirroring Official Work Performance Document */
            <div className="flex flex-col bg-surface border border-outline-variant/40 overflow-hidden shadow-sm">
              <div className="bg-inverse-surface text-on-primary px-6 py-4 flex flex-wrap items-center justify-between gap-2 font-label-sm text-label-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary"></span>
                  <span className="font-bold">
                    YEBIS ENGINEERING PLC // PROJECT &amp; CONTRACT REGISTER
                  </span>
                </div>
                <span className="text-primary-fixed">
                  DELIVERED PROJECT LEDGER (ETHIOPIA)
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                      <th className="py-3.5 px-4 text-center w-12">No</th>
                      <th className="py-3.5 px-6">Project Title &amp; Scope</th>
                      <th className="py-3.5 px-6">Client / Contracting Body</th>
                      <th className="py-3.5 px-4">Region / Location</th>
                      <th className="py-3.5 px-4">Completion</th>
                      <th className="py-3.5 px-4 text-right">
                        Contract Cost (ETB)
                      </th>
                      <th className="py-3.5 px-6 text-right">Dossier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 font-body-sm text-body-sm text-on-surface">
                    {filteredProjects.map((proj) => (
                      <tr
                        key={proj.id}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 px-4 text-center font-label-md text-label-md text-secondary font-bold">
                          {proj.recordNumber}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-col">
                            <span className="font-semibold text-on-surface">
                              {proj.title}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-label-sm text-label-sm text-secondary uppercase">
                                {proj.projectType}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium text-on-surface-variant">
                          {proj.client}
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant font-label-sm text-label-sm">
                          <div>{proj.location}</div>
                          <div className="text-secondary text-[11px]">
                            {proj.region}
                          </div>
                        </td>
                        <td className="py-4 px-4 font-label-sm text-label-sm text-secondary">
                          {proj.completion}
                        </td>
                        <td className="py-4 px-4 text-right font-label-md text-label-md text-on-surface font-semibold whitespace-nowrap">
                          {proj.contractCostETB}
                        </td>
                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          {proj.slug ? (
                            <Link
                              href={`/work/${proj.slug}`}
                              className="font-label-sm text-label-sm uppercase text-primary hover:underline font-semibold"
                            >
                              Case Study →
                            </Link>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setActiveModalProject(proj)}
                              className="font-label-sm text-label-sm uppercase text-primary hover:underline font-semibold cursor-pointer"
                            >
                              Specsheet →
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Scope Distribution Bar */}
      <section className="w-full bg-surface-container-low py-16 px-6 lg:px-12 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
                EXECUTION MODALITIES // ETHIOPIAN SECTOR BALANCE
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
                Turnkey General Contracting &amp; Specialized Subcontracts
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Yebis Engineering operates as both a lead General Contractor
              (GC-1) managing full architectural complexes and as a specialized
              contractor executing targeted high-precision scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 border border-outline-variant/40 flex flex-col justify-between h-48">
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>SECTOR 01</span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  medical_services
                </span>
              </div>
              <div>
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  5 Contracts
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Healthcare &amp; Radiation Suites
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-[88%]"></div>
              </div>
            </div>

            <div className="bg-surface p-6 border border-outline-variant/40 flex flex-col justify-between h-48">
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>SECTOR 02</span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  apartment
                </span>
              </div>
              <div>
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  4 Blocks
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Public Housing &amp; Condominiums
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-[75%]"></div>
              </div>
            </div>

            <div className="bg-surface p-6 border border-outline-variant/40 flex flex-col justify-between h-48">
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>SECTOR 03</span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  water_drop
                </span>
              </div>
              <div>
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  150m³ + Wells
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Water &amp; Rural Civil Works
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-[60%]"></div>
              </div>
            </div>

            <div className="bg-surface p-6 border border-outline-variant/40 flex flex-col justify-between h-48">
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>SECTOR 04</span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  warehouse
                </span>
              </div>
              <div>
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  ETB 28.5M+
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Historical Track Record
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-[100%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specsheet Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/80 flex items-center justify-center p-4">
          <div className="bg-surface max-w-2xl w-full border border-outline-variant/60 shadow-2xl p-6 lg:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                    {activeModalProject.id} // TECHNICAL DOSSIER
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1 hover:bg-surface-container border border-outline-variant/40 text-on-surface text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-label-sm text-label-sm bg-surface-container-low p-4 border border-outline-variant/30">
              <div>
                <span className="text-secondary block">
                  CLIENT / AUTHORITY:
                </span>
                <span className="font-semibold text-on-surface">
                  {activeModalProject.client}
                </span>
              </div>
              <div>
                <span className="text-secondary block">LOCATION:</span>
                <span className="font-semibold text-on-surface">
                  {activeModalProject.location}, {activeModalProject.region}
                </span>
              </div>
              <div>
                <span className="text-secondary block">CONTRACT VALUE:</span>
                <span className="font-semibold text-primary">
                  {activeModalProject.contractCostETB}
                </span>
              </div>
              <div>
                <span className="text-secondary block">SCALE / TYPE:</span>
                <span className="font-semibold text-on-surface">
                  {activeModalProject.scale}
                </span>
              </div>
              <div>
                <span className="text-secondary block">COMPLETION:</span>
                <span className="font-semibold text-on-surface">
                  {activeModalProject.completion}
                </span>
              </div>
              <div>
                <span className="text-secondary block">CONTRACT MODE:</span>
                <span className="font-semibold text-on-surface uppercase">
                  {activeModalProject.scopeType.replace("-", " ")}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Project Scope &amp; Engineering Summary:
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {activeModalProject.summary}
              </p>
            </div>

            {/* Scope Breakdown */}
            {activeModalProject.scopeBreakdown &&
              activeModalProject.scopeBreakdown.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Delivered Works &amp; Subsystems:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface font-body-sm text-body-sm">
                    {activeModalProject.scopeBreakdown.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 bg-surface-container-low p-2 border border-outline-variant/20"
                      >
                        <span className="text-primary font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Technical Specs */}
            {activeModalProject.technicalSpecs &&
              activeModalProject.technicalSpecs.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Technical Specifications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-label-sm text-label-sm">
                    {activeModalProject.technicalSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="p-2 border border-outline-variant/30 flex justify-between"
                      >
                        <span className="text-secondary">{spec.label}:</span>
                        <span className="font-semibold text-on-surface">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
              <Link
                href="/start-a-project"
                className="bg-inverse-surface hover:bg-primary text-on-primary font-label-sm text-label-sm uppercase px-6 py-2.5 transition-colors"
              >
                Inquire Similar Scope →
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="border border-outline-variant/50 px-4 py-2 font-label-sm text-label-sm uppercase hover:bg-surface-container"
              >
                Close Specsheet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
