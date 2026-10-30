import Image from "next/image";

export function MaintenancePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 relative overflow-hidden bg-stripe-pattern">
      {/* Background Architectural Accent Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--color-primary-fixed) 0%, transparent 70%)",
        }}
      />

      {/* Central Maintenance Card */}
      <div className="w-full max-w-2xl bg-surface border border-outline-variant/60 shadow-xl relative z-10 p-6 sm:p-10 lg:p-12">
        {/* Architectural Corner Crosshair Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

        {/* Brand Header */}
        <div className="flex items-center gap-3.5 sm:gap-4 pb-6 border-b border-outline-variant/40">
          <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center bg-inverse-surface border border-outline-variant/60 p-2 shrink-0">
            <Image
              src="/assets/logo-light.png"
              alt="Yebis Engineering Logo"
              width={40}
              height={40}
              className="object-contain w-8 h-8 sm:w-9 sm:h-9"
              priority
            />
          </span>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-lg sm:text-headline-sm tracking-tight text-on-surface font-bold uppercase leading-tight truncate">
              Yebis Engineering
            </span>
            <span className="font-label-sm text-[10px] sm:text-label-sm tracking-widest text-on-surface-variant uppercase truncate">
              Grade 3 General Contractor · Addis Ababa, Ethiopia
            </span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-8 mb-6">
          <div
            role="status"
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-surface-container-high border border-outline-variant/60 font-label-sm text-[11px] sm:text-xs uppercase tracking-wider text-on-surface"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-primary" />
            </span>
            <span>System Status: Under Scheduled Updates</span>
          </div>
        </div>

        {/* Primary Message */}
        <div className="space-y-4">
          <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold uppercase tracking-tight leading-tight">
            Website Temporarily Undergoing Updates
          </h1>
          <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Our digital platform is temporarily paused while we carry out scheduled system updates and structural enhancements. We are refining our web infrastructure and will return online shortly.
          </p>
        </div>

        {/* Operational Telemetry Box */}
        <div className="my-8 p-4 sm:p-5 bg-surface-container-low border-l-2 border-primary border-y border-r border-outline-variant/40">
          <div className="flex items-start gap-3">
            <span className="text-primary font-mono text-xs sm:text-sm font-bold tracking-wider shrink-0 mt-0.5">
              NOTICE:
            </span>
            <p className="font-body-sm text-xs sm:text-sm text-secondary leading-relaxed">
              All on-site contracting operations, structural execution, and engineering deliveries across Ethiopia continue according to schedule without disruption.
            </p>
          </div>
        </div>

        {/* Core Disciplines Grid */}
        <div className="pt-6 border-t border-outline-variant/40">
          <div className="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant/70 mb-3">
            Contracting Capabilities
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="px-3 py-2 bg-surface-container-low border border-outline-variant/30 font-label-sm text-[10px] sm:text-[11px] uppercase tracking-wider text-on-surface text-center">
              Structural Works
            </div>
            <div className="px-3 py-2 bg-surface-container-low border border-outline-variant/30 font-label-sm text-[10px] sm:text-[11px] uppercase tracking-wider text-on-surface text-center">
              MEP Systems
            </div>
            <div className="px-3 py-2 bg-surface-container-low border border-outline-variant/30 font-label-sm text-[10px] sm:text-[11px] uppercase tracking-wider text-on-surface text-center">
              Finishing & Joinery
            </div>
            <div className="px-3 py-2 bg-surface-container-low border border-outline-variant/30 font-label-sm text-[10px] sm:text-[11px] uppercase tracking-wider text-on-surface text-center">
              BIM Coordination
            </div>
          </div>
        </div>

        {/* Credentials & Copyright Footer */}
        <div className="mt-8 pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-secondary font-label-sm text-[10px] sm:text-[11px] uppercase tracking-wider">
          <span>© {currentYear} Yebis Engineering</span>
        </div>
      </div>
    </div>
  );
}
