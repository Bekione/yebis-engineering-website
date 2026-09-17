"use client";

import CountUp from "@/components/CountUp";

const METRICS = [
  {
    label: "Delivered Contracts",
    numericValue: 19,
    suffix: "+ Projects",
    detail: "Government, NGO & private sector",
  },
  {
    label: "Contract Value",
    prefix: "ETB ",
    numericValue: 145,
    suffix: "M+",
    detail: "Executed project track record",
  },
  {
    label: "Contractor Class",
    staticValue: "GRADE 3 (GC-3)",
    detail: "Ministry of Urban Development",
  },
  {
    label: "Regional Footprint",
    numericValue: 4,
    suffix: " Regions",
    detail: "Addis Ababa, Oromia, Amhara, SNNPRS",
  },
  {
    label: "Contract Scope",
    staticValue: "Full Lifecycle",
    detail: "Turnkey, skeleton only & finishing",
  },
  {
    label: "Standards Compliance",
    numericValue: 100,
    suffix: "%",
    detail: "EBCS & statutory building codes",
  },
];

export function AboutMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-outline-variant/40 bg-surface divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
      {METRICS.map((m) => (
        <div key={m.label} className="p-space-md flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
            {m.label}
          </span>
          <span className="font-headline-md text-[22px] leading-[30px] lg:text-headline-md font-bold text-on-surface">
            {m.staticValue ? (
              m.staticValue
            ) : (
              <>
                {m.prefix}
                <CountUp
                  from={0}
                  to={m.numericValue!}
                  duration={1.5}
                  separator=""
                  className=""
                />
                {m.suffix}
              </>
            )}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {m.detail}
          </span>
        </div>
      ))}
    </div>
  );
}
