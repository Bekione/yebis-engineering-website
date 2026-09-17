'use client';

import CountUp from '@/components/CountUp';

const METRICS = [
  {
    label: "Project Scope",
    staticValue: "Turnkey",
    unit: "& SKELETON",
    desc: "From ground-up builds to skeleton finishing",
  },
  {
    label: "In-House Trades",
    numericPrefix: "0",
    numericValue: 8,
    unit: "DIVISIONS",
    desc: "Civil, MEP, aluminum, wood & finishing",
  },
  {
    label: "Code Standards",
    numericValue: 100,
    suffix: "%",
    unit: "EBCS",
    desc: "Ethiopian Building Code compliant",
  },
  {
    label: "Delivery Model",
    staticValue: "Single",
    unit: "SOURCE",
    desc: "Eliminating subcontractor friction",
    highlight: true,
  },
];

export function CapabilitiesMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md">
      {METRICS.map((m) => (
        <div
          key={m.label}
          className="bg-surface-container p-space-md flex flex-col justify-between"
        >
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
            {m.label}
          </span>
          <div className="flex items-baseline gap-space-xs mt-space-sm">
            <span
              className={`font-headline-lg text-[28px] leading-[36px] lg:text-headline-lg font-bold ${m.highlight ? "text-primary" : "text-on-surface"}`}
            >
              {m.staticValue ? (
                m.staticValue
              ) : (
                <>
                  {m.numericPrefix}
                  <CountUp from={0} to={m.numericValue!} duration={1.2} separator="" className="" />
                  {m.suffix}
                </>
              )}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {m.unit}
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
            {m.desc}
          </span>
        </div>
      ))}
    </div>
  );
}
