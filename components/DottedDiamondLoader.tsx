"use client";

import React from "react";

export interface DottedDiamondLoaderProps {
  size?: number;
  className?: string;
  color?: string;
  shape?: "square" | "circle";
}

export function DottedDiamondLoader({
  size = 56,
  className = "",
  color = "#8d4b00", // Default Yebis bronze primary
  shape = "square", // Square dots matching brutalist architectural theme
}: DottedDiamondLoaderProps) {
  const isSquare = shape === "square";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      width={size}
      height={size}
      role="img"
      aria-label="Loading..."
      className={className}
    >
      <title>Loading</title>
      <defs>
        {isSquare ? (
          <>
            {/* Square architectural dots centered at (0,0) */}
            <rect
              id="diamond-bg-dot"
              x="-2.2"
              y="-2.2"
              width="4.4"
              height="4.4"
              fill={color}
              opacity="0.15"
            />
            <rect
              id="diamond-active-dot"
              x="-2.8"
              y="-2.8"
              width="5.6"
              height="5.6"
            />
          </>
        ) : (
          <>
            <circle id="diamond-bg-dot" r="2.4" fill={color} opacity="0.12" />
            <circle id="diamond-active-dot" r="3.1" />
          </>
        )}
      </defs>
      <style>
        {`
          .diamond-dot {
            fill: ${color};
            opacity: 0;
            animation: diamond-bloom 2200ms cubic-bezier(0.16, 1, 0.3, 1) infinite both;
          }
          @keyframes diamond-bloom {
            0% { opacity: 0; }
            10% { opacity: 1; }
            55% { opacity: 0.85; }
            100% { opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .diamond-dot {
              animation: none;
              opacity: 0.45;
            }
          }
          .d00, .d04, .d40, .d44 { animation-delay: 733ms; }
          .d01, .d03, .d10, .d14, .d30, .d34, .d41, .d43 { animation-delay: 550ms; }
          .d02, .d11, .d13, .d20, .d24, .d31, .d33, .d42 { animation-delay: 367ms; }
          .d12, .d21, .d23, .d32 { animation-delay: 183ms; }
          .d22 { animation-delay: 0ms; }
        `}
      </style>
      {/* Background static grid matrix */}
      <use href="#diamond-bg-dot" x="6" y="6" />
      <use href="#diamond-bg-dot" x="17" y="6" />
      <use href="#diamond-bg-dot" x="28" y="6" />
      <use href="#diamond-bg-dot" x="39" y="6" />
      <use href="#diamond-bg-dot" x="50" y="6" />

      <use href="#diamond-bg-dot" x="6" y="17" />
      <use href="#diamond-bg-dot" x="17" y="17" />
      <use href="#diamond-bg-dot" x="28" y="17" />
      <use href="#diamond-bg-dot" x="39" y="17" />
      <use href="#diamond-bg-dot" x="50" y="17" />

      <use href="#diamond-bg-dot" x="6" y="28" />
      <use href="#diamond-bg-dot" x="17" y="28" />
      <use href="#diamond-bg-dot" x="28" y="28" />
      <use href="#diamond-bg-dot" x="39" y="28" />
      <use href="#diamond-bg-dot" x="50" y="28" />

      <use href="#diamond-bg-dot" x="6" y="39" />
      <use href="#diamond-bg-dot" x="17" y="39" />
      <use href="#diamond-bg-dot" x="28" y="39" />
      <use href="#diamond-bg-dot" x="39" y="39" />
      <use href="#diamond-bg-dot" x="50" y="39" />

      <use href="#diamond-bg-dot" x="6" y="50" />
      <use href="#diamond-bg-dot" x="17" y="50" />
      <use href="#diamond-bg-dot" x="28" y="50" />
      <use href="#diamond-bg-dot" x="39" y="50" />
      <use href="#diamond-bg-dot" x="50" y="50" />

      {/* Animated blooming matrix */}
      <use className="diamond-dot d00" href="#diamond-active-dot" x="6" y="6" />
      <use className="diamond-dot d01" href="#diamond-active-dot" x="17" y="6" />
      <use className="diamond-dot d02" href="#diamond-active-dot" x="28" y="6" />
      <use className="diamond-dot d03" href="#diamond-active-dot" x="39" y="6" />
      <use className="diamond-dot d04" href="#diamond-active-dot" x="50" y="6" />

      <use className="diamond-dot d10" href="#diamond-active-dot" x="6" y="17" />
      <use className="diamond-dot d11" href="#diamond-active-dot" x="17" y="17" />
      <use className="diamond-dot d12" href="#diamond-active-dot" x="28" y="17" />
      <use className="diamond-dot d13" href="#diamond-active-dot" x="39" y="17" />
      <use className="diamond-dot d14" href="#diamond-active-dot" x="50" y="17" />

      <use className="diamond-dot d20" href="#diamond-active-dot" x="6" y="28" />
      <use className="diamond-dot d21" href="#diamond-active-dot" x="17" y="28" />
      <use className="diamond-dot d22" href="#diamond-active-dot" x="28" y="28" />
      <use className="diamond-dot d23" href="#diamond-active-dot" x="39" y="28" />
      <use className="diamond-dot d24" href="#diamond-active-dot" x="50" y="28" />

      <use className="diamond-dot d30" href="#diamond-active-dot" x="6" y="39" />
      <use className="diamond-dot d31" href="#diamond-active-dot" x="17" y="39" />
      <use className="diamond-dot d32" href="#diamond-active-dot" x="28" y="39" />
      <use className="diamond-dot d33" href="#diamond-active-dot" x="39" y="39" />
      <use className="diamond-dot d34" href="#diamond-active-dot" x="50" y="39" />

      <use className="diamond-dot d40" href="#diamond-active-dot" x="6" y="50" />
      <use className="diamond-dot d41" href="#diamond-active-dot" x="17" y="50" />
      <use className="diamond-dot d42" href="#diamond-active-dot" x="28" y="50" />
      <use className="diamond-dot d43" href="#diamond-active-dot" x="39" y="50" />
      <use className="diamond-dot d44" href="#diamond-active-dot" x="50" y="50" />
    </svg>
  );
}

export default DottedDiamondLoader;
