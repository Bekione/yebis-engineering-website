import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-xl border-b border-outline-variant/30">
          {/* Brand Dossier */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-inverse-surface border border-outline-variant/60 p-1.5 shrink-0">
                <Image
                  src="/assets/logo-light.png"
                  alt="Yebis Engineering PLC Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </span>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase font-bold leading-tight">
                  Yebis Engineering PLC
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Grade 1 General Contractor
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              From structure to finish. Turnkey building execution, specialized
              scopes, and civil engineering solutions for public institutions,
              NGOs, and private developments across Ethiopia.
            </p>
            <div className="flex flex-col gap-space-xs pt-space-sm font-label-sm text-label-sm text-secondary">
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 bg-primary"></span>
                LICENSE: GRADE 1 GENERAL CONTRACTOR (GC-1)
              </span>
              <span>MINISTRY OF URBAN DEVELOPMENT &amp; CONSTRUCTION</span>
              <span>
                COMMERCIAL REG: FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA
              </span>
            </div>
          </div>

          {/* Work Sectors */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold border-b border-outline-variant/40 pb-space-xs">
              Work
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/work"
                >
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/work"
                >
                  Commercial Towers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/work"
                >
                  Institutional Hubs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/work/commercial-office-kazanchis"
                >
                  Kazanchis Case Study
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/work"
                >
                  Metal &amp; Aluminum Works
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/work"
                >
                  Structural Renovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold border-b border-outline-variant/40 pb-space-xs">
              Capabilities
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/structural"
                >
                  Structural &amp; Civil (GC-1)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/bim-coordination"
                >
                  Virtual Design &amp; BIM (LOD 400)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/electrical-mep"
                >
                  Electrical &amp; MEP Systems
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/plumbing-sanitary"
                >
                  Plumbing &amp; Sanitary Networks
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/interior-finishing"
                >
                  Interior Finishing &amp; Ceilings
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/furniture-joinery"
                >
                  Furniture &amp; Bespoke Joinery
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/metal-aluminum"
                >
                  Metal Fabrication &amp; Facades
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-on-surface transition-colors"
                  href="/capabilities/renovation-maintenance"
                >
                  Renovation &amp; Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold border-b border-outline-variant/40 pb-space-xs">
              Headquarters
            </h4>
            <address className="not-italic font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
              <p>
                Bole Sub-City, Woreda 03
                <br />
                Cameroon Street, Yebis Tower
                <br />
                Addis Ababa, Ethiopia
              </p>
              <p className="font-label-sm text-label-sm text-on-surface pt-space-xs">
                inquiries@yebisengineering.com
              </p>
              <p className="font-label-sm text-label-sm text-on-surface">
                +251 91 151 7784
              </p>
              <span className="font-label-sm text-label-sm text-secondary pt-space-xs">
                OPERATING HOURS: MON-SAT 08:00-17:30 EAT
              </span>
            </address>
          </div>
        </div>

        {/* Legal & Telemetry Footer Strip */}
        <div className="pt-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md font-label-sm text-label-sm text-secondary">
          <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs">
            <span>
              © {new Date().getFullYear()} YEBIS ENGINEERING PLC. ALL RIGHTS
              RESERVED.
            </span>
            <span className="hidden md:inline">|</span>
            <span>GRADE 1 ETHIOPIAN CONTRACTOR CERTIFICATION</span>
            <span className="hidden md:inline">|</span>
            <span>ISO 9001:2015 QUALITY COMPLIANT</span>
          </div>
          <div className="flex items-center gap-space-md">
            <span>BOLE // ADDIS ABABA</span>
            <span>SEC_GLOBAL // DOC_2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
