"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CustomSelect from "@/components/ui/select";
import ScrollFade from "@/components/ScrollFade";
import CountUp from "@/components/CountUp";
import {
  ALL_PROJECTS,
  ProjectRecord,
  ProjectSector,
  FORMATTED_TOTAL_ETB,
  TOTAL_MILLIONS_ETB,
} from "@/lib/projects-data";

const CLIENT_FILTER_OPTIONS = [
  { value: "all", label: "All Clients & Agencies" },
  {
    value: "government",
    label: "Government & Public Agencies (AAHDPO, Customs, Kirkos)",
  },
  {
    value: "healthcare",
    label: "Specialized Public Hospitals (ALERT, St. Peter's, St. Paul's)",
  },
  {
    value: "ngo",
    label: "NGO & International (World Vision, Hunger Project, Cancer Care)",
  },
  {
    value: "educational",
    label: "Educational & Institutional (TVET, EOC-DICAC)",
  },
  { value: "commercial", label: "Commercial Developers" },
  { value: "residential", label: "Private Residential" },
];

const VALID_SECTORS: ProjectSector[] = [
  "all",
  "healthcare",
  "housing",
  "education",
  "civil",
  "commercial",
  "specialized",
];

function WorkContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sectorParam = searchParams.get("sector") as ProjectSector | null;
  const clientParam = searchParams.get("client");
  const viewParam = searchParams.get("view");
  const projectParam = searchParams.get("project");

  const activeSector: ProjectSector =
    sectorParam && VALID_SECTORS.includes(sectorParam) ? sectorParam : "all";
  const selectedClientCategory: string = clientParam || "all";
  const viewMode: "grid" | "table" = viewParam === "table" ? "table" : "grid";

  const [activeModalProject, setActiveModalProject] =
    useState<ProjectRecord | null>(null);

  // Auto-open modal if ?project query parameter is provided
  useEffect(() => {
    if (projectParam) {
      const match = ALL_PROJECTS.find(
        (p) =>
          p.id.toLowerCase() === projectParam.toLowerCase() ||
          (p.slug && p.slug.toLowerCase() === projectParam.toLowerCase())
      );
      if (match) {
        setActiveModalProject(match);
      }
    }
  }, [projectParam]);

  // Close modal on Escape and prevent body scrolling when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject]);

  const updateFilters = (
    newSector?: ProjectSector,
    newClient?: string,
    newView?: "grid" | "table",
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    const targetSector = newSector !== undefined ? newSector : activeSector;
    if (targetSector && targetSector !== "all") {
      params.set("sector", targetSector);
    } else {
      params.delete("sector");
    }

    const targetClient =
      newClient !== undefined ? newClient : selectedClientCategory;
    if (targetClient && targetClient !== "all") {
      params.set("client", targetClient);
    } else {
      params.delete("client");
    }

    const targetView = newView !== undefined ? newView : viewMode;
    if (targetView && targetView !== "grid") {
      params.set("view", targetView);
    } else {
      params.delete("view");
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

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
                {ALL_PROJECTS.length} DELIVERED PROJECTS ACROSS ETHIOPIA (
                {FORMATTED_TOTAL_ETB})
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
                high-tolerance specialized packages-including lead-lined
                hospital radiology suites, potable water reservoirs, and
                municipal civil infrastructure.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2.5 bg-surface p-5 border border-outline-variant/40 shadow-sm">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant">
                  Contracting License
                </span>
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  GRADE 3 General Contractor (GC-3)
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant">
                  Regional Radius
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Addis Ababa, Oromia, Amhara, SNNPRS
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant">
                  Delivery Track Record
                </span>
                <span className="font-label-md text-label-md text-primary font-bold">
                  <CountUp from={0} to={ALL_PROJECTS.length} duration={1.2} /> Documented Contracts
                </span>
              </div>
            </div>
          </div>

          {/* Filter Controls Module */}
          <div className="mt-4 bg-surface p-4 sm:p-6 border border-outline-variant/40 flex flex-col gap-4 sm:gap-5">
            {/* Sector & Category Tabs - Horizontally swipeable on mobile with ScrollFade, wrapping on tablet/desktop */}
            <ScrollFade direction="horizontal" fadeSize={24} fadeMode="scroll" className="w-full">
              <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => updateFilters("all")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
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
                  onClick={() => updateFilters("healthcare")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
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
                  onClick={() => updateFilters("housing")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
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
                  onClick={() => updateFilters("education")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
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
                  onClick={() => updateFilters("civil")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
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
                  onClick={() => updateFilters("commercial")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
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
                  onClick={() => updateFilters("specialized")}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all duration-150 flex items-center gap-2 border whitespace-nowrap ${
                    activeSector === "specialized"
                      ? "bg-inverse-surface text-on-primary border-inverse-surface"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30"
                  }`}
                >
                  <span>Specialized Scopes</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-black/10">2</span>
                </button>
              </div>
            </ScrollFade>

            {/* Client Authority Filter & View Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 bg-surface-container-low/50 px-3 sm:px-4 py-2.5 sm:py-3 border border-outline-variant/30">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
                  <label className="font-label-sm text-[11px] sm:text-label-sm uppercase tracking-wider text-secondary shrink-0">
                    Client / Tender Authority:
                  </label>
                  <div className="w-full sm:w-[320px]">
                    <CustomSelect
                      options={CLIENT_FILTER_OPTIONS}
                      value={selectedClientCategory}
                      onChange={(val) => updateFilters(undefined, val)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-outline-variant/30">
                <span className="font-label-sm text-[10px] sm:text-label-sm bg-primary/10 text-primary px-2 py-1 border border-primary/20 shrink-0">
                  {filteredProjects.length} OF {ALL_PROJECTS.length} DOSSIERS
                </span>

                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-surface-container-high p-1 border border-outline-variant/50 shrink-0">
                  <button
                    type="button"
                    onClick={() => updateFilters(undefined, undefined, "grid")}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-all duration-150 ${
                      viewMode === "grid"
                        ? "bg-inverse-surface text-on-primary shadow-sm"
                        : "text-on-surface hover:text-primary hover:bg-surface/80"
                    }`}
                    title="Grid Showcase View"
                  >
                    <span className="material-symbols-outlined text-[16px] block">
                      grid_view
                    </span>
                    <span className="hidden md:inline">Grid</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateFilters(undefined, undefined, "table")}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-all duration-150 ${
                      viewMode === "table"
                        ? "bg-inverse-surface text-on-primary shadow-sm"
                        : "text-on-surface hover:text-primary hover:bg-surface/80"
                    }`}
                    title="Official Performance Register Table"
                  >
                    <span className="material-symbols-outlined text-[16px] block">
                      table_rows
                    </span>
                    <span className="hidden md:inline">Table</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry Operational Strip */}
      <div className="w-full bg-surface-container-high py-2.5 px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-on-surface font-semibold">
              <span className="w-1.5 h-1.5 bg-primary"></span>GC-3 STATUTORY
              REGISTRY
            </span>
            <span className="hidden md:inline font-medium">
              MOUD-GC1-CERTIFIED
            </span>
            <span className="hidden sm:inline">
              CONTRACT SPECTRUM: TURNKEY GC &amp; TARGETED SUBCONTRACTS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>AUDITED BID &amp; TENDER PERFORMANCE</span>
            <span className="text-primary font-bold">
              ETHIOPIAN BUILDING CODE COMPLIANT
            </span>
          </div>
        </div>
      </div>

      {/* Project Matrix / Register */}
      <section className="w-full px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.article
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -8 }}
                      transition={{
                        duration: 0.32,
                        ease: [0.22, 1, 0.36, 1],
                        layout: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      className="project-card flex flex-col bg-surface overflow-hidden border border-outline-variant/40 hover:border-primary transition-[border-color,box-shadow] duration-200 shadow-sm hover:shadow-md"
                    >
                      <div className="relative h-64 w-full bg-surface-container-highest overflow-hidden group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-inverse-surface/90 text-on-primary font-label-sm text-label-sm px-2.5 py-1 tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 bg-primary"></span>
                          {project.id}
                        </div>
                        <div className="absolute bottom-3 left-3 right-auto max-w-[calc(100%-24px)] bg-inverse-surface/90 text-white backdrop-blur-md px-2.5 py-1 font-label-sm text-[11px] tracking-wider uppercase border border-white/10 flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                          <span className="truncate">
                            {project.location} · {project.region}
                          </span>
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
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="w-full bg-surface border border-outline-variant/40 p-12 text-center flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">filter_alt_off</span>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">
                    No Matching Project Dossiers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    No documented contracts match your combined sector and client authority filter criteria.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    updateFilters("all", "all");
                  }}
                  className="mt-2 inline-flex items-center gap-2 bg-inverse-surface text-on-primary px-5 py-2 font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary transition-colors"
                >
                  <span>Reset All Filters</span>
                  <span>↺</span>
                </button>
              </div>
            )
          ) : (
            /* Technical Register Table View - Mirroring Official Work Performance Document */
            <div className="flex flex-col bg-surface border border-outline-variant/40 overflow-hidden shadow-sm">
              <div className="bg-inverse-surface text-on-primary px-6 py-4 flex flex-wrap items-center justify-between gap-2 font-label-sm text-label-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary"></span>
                  <span className="font-bold">
                    YEBIS ENGINEERING // PROJECT &amp; CONTRACT REGISTER
                  </span>
                </div>
                <span className="text-primary-fixed">
                  DELIVERED PROJECT LEDGER (ETHIOPIA)
                </span>
              </div>
              <ScrollFade
                direction="horizontal"
                fadeSize={24}
                fadeMode="scroll"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                      <tr className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/40">
                        <th className="py-3.5 px-4 text-center w-12">No</th>
                        <th className="py-3.5 px-6">
                          Project Title &amp; Scope
                        </th>
                        <th className="py-3.5 px-6">
                          Client / Contracting Body
                        </th>
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
              </ScrollFade>
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
              (GC-3) managing full architectural complexes and as a specialized
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
                  <CountUp from={0} to={5} duration={1.2} /> Contracts
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Healthcare &amp; Radiation Suites
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-primary h-full"
                />
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
                  <CountUp from={0} to={4} duration={1.2} /> Blocks
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Public Housing &amp; Condominiums
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-primary h-full"
                />
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
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold whitespace-nowrap">
                  <CountUp from={0} to={150} duration={1.5} />m³ + Wells
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Water &amp; Rural Civil Works
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-primary h-full"
                />
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
                  ETB <CountUp from={0} to={TOTAL_MILLIONS_ETB} duration={1.8} />M+
                </span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                  Historical Track Record ({ALL_PROJECTS.length} Contracts)
                </p>
              </div>
              <div className="w-full bg-surface-container h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-primary h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specsheet Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-inverse-surface/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-surface max-w-2xl w-full border border-outline-variant/60 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Non-scrolling pinned header */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 p-6 pb-4 shrink-0 bg-surface z-10">
              <div className="flex flex-col pr-4">
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
                className="p-1.5 hover:bg-surface-container border border-outline-variant/40 text-on-surface text-lg leading-none shrink-0 cursor-pointer"
                title="Close Specsheet (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content body with ScrollFade */}
            <ScrollFade
              direction="vertical"
              fadeSize={24}
              fadeMode="scroll"
              className="flex-1 overflow-hidden"
            >
              <div className="overflow-y-auto p-6 flex flex-col gap-6 max-h-[calc(90vh-170px)]" data-lenis-prevent>
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
                    <span className="text-secondary block">
                      CONTRACT VALUE:
                    </span>
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
                            <span className="text-secondary">
                              {spec.label}:
                            </span>
                            <span className="font-semibold text-on-surface">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </ScrollFade>

            {/* Non-scrolling pinned footer */}
            <div className="flex items-center justify-between p-6 py-4 border-t border-outline-variant/30 shrink-0 bg-surface z-10">
              <Link
                href="/start-a-project"
                className="bg-inverse-surface hover:bg-primary text-on-primary font-label-sm text-label-sm uppercase px-6 py-2.5 transition-colors cursor-pointer"
              >
                Inquire Similar Scope →
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="border border-outline-variant/50 px-4 py-2 font-label-sm text-label-sm uppercase hover:bg-surface-container cursor-pointer"
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

export default function WorkPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center font-label-sm text-secondary uppercase">
          Loading Project Archive...
        </div>
      }
    >
      <WorkContent />
    </Suspense>
  );
}
