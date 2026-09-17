"use client";

import React, {
  useEffect,
  useId,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { gsap } from "gsap";
import "./StrokeText.css";

export interface StrokeTextProps {
  text?: string;
  uppercase?: boolean;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  delay?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: "mount" | "hover" | "scroll" | "loop";
  replayOnHover?: boolean;
  fillMode?: "wipe" | "fade" | "none";
  removeStrokeOnEnd?: boolean;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  reverse?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const StrokeText: React.FC<StrokeTextProps> = ({
  text = "Yebis Engineering",
  uppercase = false,
  strokeColor = "var(--color-primary, #D97706)",
  fillColor = "var(--color-on-surface, #111618)",
  strokeWidth = 0.9,
  drawDuration = 1.2,
  delay = 0.1,
  fillDelay = 0.15,
  ease = "power2.out",
  trigger = "mount",
  replayOnHover = true,
  fillMode = "wipe",
  removeStrokeOnEnd = true,
  fontSize,
  fontWeight = 600,
  letterSpacing = "0.02em",
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const strokeTextRef = useRef<SVGTextElement>(null);
  const strokeClipRectRef = useRef<SVGRectElement>(null);
  const fillClipRectRef = useRef<SVGRectElement>(null);
  const beamRef = useRef<SVGLineElement>(null);
  const [mounted, setMounted] = useState(false);

  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const strokeClipId = `stroke-clip-${cleanId}`;
  const fillClipId = `fill-clip-${cleanId}`;

  // Resolve color variables gracefully with fallbacks
  const resolvedStroke =
    strokeColor === "var(--accent)"
      ? "var(--color-primary, #D97706)"
      : strokeColor;
  const resolvedFill =
    fillColor === "var(--text-primary)"
      ? "var(--color-on-surface, #111618)"
      : fillColor;

  const displayText = uppercase ? text.toUpperCase() : text;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const strokeRect = strokeClipRectRef.current;
    const fillRect = fillClipRectRef.current;
    const beam = beamRef.current;
    const strokeText = strokeTextRef.current;
    const container = containerRef.current;
    if (!strokeRect || !fillRect) return;

    const ctx = gsap.context(() => {
      let activeTimeline: gsap.core.Timeline | null = null;

      const runAnimation = () => {
        // Prevent re-trigger if already animating
        if (activeTimeline && activeTimeline.isActive()) return;

        const animState = {
          strokeProg: 0,
          fillProg: fillMode === "none" ? 100 : 0,
        };

        // Reset elements directly
        strokeRect.setAttribute("width", "0%");
        fillRect.setAttribute("width", fillMode === "none" ? "100%" : "0%");
        if (strokeText) {
          strokeText.style.opacity = "1";
        }
        if (beam) {
          beam.setAttribute("x1", "0%");
          beam.setAttribute("x2", "0%");
          beam.style.opacity = "1";
        }

        const tl = gsap.timeline({
          delay,
          repeat: trigger === "loop" ? -1 : 0,
          repeatDelay: trigger === "loop" ? 1.5 : 0,
        });
        activeTimeline = tl;

        // Phase 1: Draw the stroke wireframe from left to right
        tl.to(animState, {
          strokeProg: 100,
          duration: drawDuration,
          ease,
          onUpdate: () => {
            const p = animState.strokeProg;
            strokeRect.setAttribute("width", `${p}%`);
            if (beam) {
              beam.setAttribute("x1", `${p}%`);
              beam.setAttribute("x2", `${p}%`);
            }
          },
        });

        // Phase 2: Wipe fill the solid body from left to right
        if (fillMode === "wipe") {
          tl.to(
            animState,
            {
              fillProg: 100,
              duration: Math.max(0.4, drawDuration * 0.5),
              ease: "power2.inOut",
              onUpdate: () => {
                fillRect.setAttribute("width", `${animState.fillProg}%`);
              },
            },
            `+=${fillDelay}`,
          );

          if (beam) {
            tl.to(
              beam,
              {
                opacity: 0,
                duration: 0.25,
                ease: "power2.out",
              },
              `-=${0.15}`,
            );
          }

          // Phase 3: Remove/fade out stroke outline once fill animation ends
          if (removeStrokeOnEnd && strokeText) {
            tl.to(
              strokeText,
              {
                opacity: 0,
                duration: 0.35,
                ease: "power2.out",
              },
              `-=${0.15}`,
            );
          }
        } else if (fillMode === "fade") {
          fillRect.setAttribute("width", "100%");
          const fillText = container?.querySelector(".stroke-text__fill-layer");
          if (fillText) {
            gsap.set(fillText, { opacity: 0 });
            tl.to(
              fillText,
              {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
              },
              `+=${fillDelay}`,
            );

            if (removeStrokeOnEnd && strokeText) {
              tl.to(
                strokeText,
                {
                  opacity: 0,
                  duration: 0.35,
                  ease: "power2.out",
                },
                `-=${0.2}`,
              );
            }
          }
        }
      };

      // Hover interaction target (entire brand link if inside an anchor tag)
      const hoverTarget = container?.closest("a") || container;

      if (trigger === "hover") {
        hoverTarget?.addEventListener("mouseenter", runAnimation);
      } else {
        // Run on mount
        runAnimation();
        if (replayOnHover && hoverTarget) {
          hoverTarget.addEventListener("mouseenter", runAnimation);
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    mounted,
    drawDuration,
    delay,
    fillDelay,
    ease,
    trigger,
    fillMode,
    replayOnHover,
    removeStrokeOnEnd,
  ]);

  return (
    <span
      ref={containerRef}
      className={`stroke-text-container group relative inline-flex items-center select-none ${className}`}
      style={{
        fontSize: fontSize ? `${fontSize}px` : "inherit",
        fontWeight: fontWeight ?? "inherit",
        letterSpacing: letterSpacing ?? "inherit",
        ...style,
      }}
      role="img"
      aria-label={displayText}
    >
      {/* Structural layout reservation element - guarantees correct inline height & width */}
      <span
        className="stroke-text-ghost invisible select-none pointer-events-none whitespace-nowrap leading-none"
        aria-hidden="true"
      >
        {displayText}
      </span>

      {/* SVG Animation Canvas Overlay */}
      <svg
        className="stroke-text-svg absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={strokeClipId}>
            <rect
              ref={strokeClipRectRef}
              x="0"
              y="-25%"
              width="100%"
              height="150%"
            />
          </clipPath>
          <clipPath id={fillClipId}>
            <rect
              ref={fillClipRectRef}
              x="0"
              y="-25%"
              width="100%"
              height="150%"
            />
          </clipPath>
        </defs>

        {/* Layer 1: Architectural Stroke Outline (Fades out once fill is complete) */}
        <text
          ref={strokeTextRef}
          x="0"
          y="50%"
          dominantBaseline="central"
          fill="none"
          stroke={resolvedStroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          clipPath={`url(#${strokeClipId})`}
          className="stroke-text__stroke-layer font-headline tracking-tight"
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-headline, sans-serif)",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            fontSize: "inherit",
            opacity: 0,
          }}
        >
          {displayText}
        </text>

        {/* Layer 2: Solid Finished Text Fill (Clipped by wipe rect) */}
        <text
          x="0"
          y="50%"
          dominantBaseline="central"
          fill={resolvedFill}
          clipPath={`url(#${fillClipId})`}
          className="stroke-text__fill-layer font-headline tracking-tight"
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-headline, sans-serif)",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            fontSize: "inherit",
          }}
        >
          {displayText}
        </text>

        {/* Optional drafting laser beam cursor */}
        <line
          ref={beamRef}
          x1="0"
          y1="-15%"
          x2="0"
          y2="115%"
          stroke={resolvedStroke}
          strokeWidth="1.5"
          opacity="0"
          className="stroke-text__beam"
        />
      </svg>
    </span>
  );
};

export default StrokeText;
