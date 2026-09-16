import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site-images";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Interior Finishing & Architectural Millwork",
  description:
    "Swiss-tolerance interior finishing: acoustic gypsum ceilings, calibrated terrazzo and porcelain, drywall partitions, and bespoke surface treatments for commercial and residential projects.",
  alternates: {
    canonical: `${SITE_URL}/capabilities/interior-finishing`,
  },
  openGraph: {
    title:
      "Interior Finishing & Architectural Millwork | Yebis Engineering PLC",
    description:
      "Precision interior finishing, acoustic gypsum ceilings, calibrated terrazzo, and bespoke surface treatments across Ethiopia.",
    url: `${SITE_URL}/capabilities/interior-finishing`,
  },
};

const SPECS = [
  {
    label: "Surface Tolerance",
    value: "±1.5mm",
    detail: "Laser datum control across all planes",
  },
  {
    label: "Gypsum Grade",
    value: "Q4",
    detail: "European DIN EN 13914 finish standard",
  },
  {
    label: "Tile Calibration",
    value: "±0.3mm",
    detail: "Large-format porcelain rectified edge",
  },
  {
    label: "Acoustic Rating",
    value: "NRC 0.85",
    detail: "Perforated ceiling absorption coefficient",
  },
  {
    label: "Epoxy Thickness",
    value: "3mm",
    detail: "Self-leveling polyurethane floor coat",
  },
  {
    label: "Wall Systems",
    value: "12+",
    detail: "Microcement, cladding, and paint types",
  },
];

const SERVICES = [
  {
    title: "Acoustic & Moisture-Resistant Gypsum Systems",
    desc: "Multi-tier suspended ceiling systems using moisture-resistant and fire-rated gypsum boards. Hidden access panels, integrated LED cove lighting, and acoustic absorption layers for commercial and hospitality environments.",
    image: IMG.cleanroom,
    specs: [
      "Moisture-Resistant MR Board",
      "Fire-Rated Type X Assemblies",
      "Acoustic Perforated Panels",
      "Hidden LED Integration Channels",
    ],
  },
  {
    title: "Calibrated Porcelain & Natural Stone Flooring",
    desc: "Large-format rectified porcelain, polished terrazzo, and natural marble installations with laser-leveled subfloor preparation. Zero-lippage guaranteed on surfaces up to 1200×600mm format.",
    image: IMG.lobby,
    specs: [
      "1200×600mm Large Format Install",
      "Polished Terrazzo In-Situ Pour",
      "Self-Leveling Screed Prep",
      "Waterproof Membrane Integration",
    ],
  },
  {
    title: "Architectural Wall Treatments & Cladding",
    desc: "Microcement, fluted timber panels, fabric acoustic panels, and high-performance paint systems. We deliver surfaces that define the spatial character of lobbies, boardrooms, and executive suites.",
    image: IMG.boardroom,
    specs: [
      "Venetian Microcement Application",
      "Timber Slat Acoustic Cladding",
      "Washable Anti-Bacterial Paint",
      "Feature Wall Stone Veneer",
    ],
  },
  {
    title: "Drywall Partitions & Space Division",
    desc: "Metal stud drywall partition systems for commercial office reconfiguration, hospital ward division, and residential layout definition. Sound-rated assemblies achieving up to STC 55.",
    image: IMG.officeInterior,
    specs: [
      "STC 55 Sound-Rated Walls",
      "Double-Layer Board Systems",
      "Glass Partition Integration",
      "Fire-Rated 2HR Assemblies",
    ],
  },
];

export default function InteriorFinishingPage() {
  return (
    <div className="flex flex-col pt-2 w-full">
      {/* Technical Datum Rule */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span>
              SEC_INT-01 // INTERIOR ARCHITECTURE &amp; FINISHING // DIVISION 05
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>QUALITY: Q4 DIN STANDARD</span>
            <span className="text-primary font-medium">±1.5MM TOLERANCE</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full border-b border-outline-variant/40 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-surface-container w-fit border border-outline-variant/40 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                <span>DIVISION 05</span>
                <span className="text-primary">•</span>
                <span>ARCHITECTURAL FINISH</span>
              </div>
              <h1 className="font-headline-xl text-[36px] leading-[44px] lg:text-headline-xl text-on-surface uppercase tracking-tight font-bold">
                Where Engineering Meets Artistry. Every Surface Perfected.
              </h1>
              <p className="font-body-lg text-body-lg text-primary font-medium leading-relaxed max-w-3xl">
                Flawless interior surfaces engineered with Swiss tolerance —
                from acoustic multi-tier gypsum ceilings to heavy-traffic epoxy
                coatings and calibrated large-format porcelain installations.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                Our interior finishing division delivers the final experience
                that occupants live with every day. We refuse to compromise on
                tolerances — every surface undergoes laser-datum verification,
                every ceiling line is checked to ±1.5mm, and every floor tile is
                mechanically calibrated before installation.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm transition-all duration-150 border border-inverse-surface hover:border-primary"
                >
                  <span>View Finished Projects</span>
                  <span className="text-primary-fixed">→</span>
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-outline-variant/50 transition-colors"
                >
                  <span>Request Specification</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/50 p-space-lg flex flex-col gap-space-md relative">
              <div className="absolute top-2 right-2 text-outline-variant font-label-sm select-none">
                +
              </div>
              <div className="absolute bottom-2 left-2 text-outline-variant font-label-sm select-none">
                +
              </div>
              <div className="border-b border-outline-variant/30 pb-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>SPEC_CARD // INT-05</span>
                <span>FINISH: TURNKEY</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/40">
                <Image
                  src={IMG.lobby}
                  alt="Commercial lobby with acoustic gypsum ceiling and porcelain floor"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 text-inverse-on-surface px-3 py-1 text-label-sm font-label-sm flex justify-between items-center">
                  <span>ACOUSTIC CEILING &amp; PORCELAIN TILE</span>
                  <span className="text-primary-fixed">Q4 FINISH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Metrics */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              FINISHING SPECIFICATIONS // QUALITY METRICS
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-outline-variant/40 bg-surface divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="p-space-md flex flex-col gap-space-xs"
              >
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  {spec.label}
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {spec.value}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {spec.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="w-full bg-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {SERVICES.map((service, idx) => (
            <article
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start border-b border-outline-variant/30 pb-space-xl last:border-0 last:pb-0"
            >
              <div
                className={`lg:col-span-5 relative aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/40 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div
                className={`lg:col-span-7 flex flex-col gap-space-md ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm bg-inverse-surface text-on-primary px-space-xs py-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-medium">
                    CAPABILITY MODULE
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] leading-[30px] lg:text-headline-md text-on-surface uppercase font-bold">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
                <div className="bg-surface-container p-space-md">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase block mb-space-xs">
                    Technical Scope:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-label-md text-label-md text-on-surface-variant">
                    {service.specs.map((s) => (
                      <li key={s} className="flex items-center gap-space-xs">
                        <span className="w-1.5 h-1.5 bg-primary shrink-0"></span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-inverse-surface px-6 lg:px-12 py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <h2 className="font-headline-md text-headline-md text-on-primary uppercase font-bold">
              Need turnkey interior finishing?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface">
              From raw concrete to occupancy-ready — our finishing team delivers
              Q4 standard surfaces within your project timeline.
            </p>
          </div>
          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase px-space-lg py-space-sm border border-primary transition-all duration-150 shrink-0"
          >
            <span className="tracking-wider">Start a Project</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
