"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * A slim, non-intrusive progress bar at the top of the viewport
 * that animates during page navigation. Uses a real state machine
 * to avoid stuck-at-80% bugs from race conditions.
 *
 * States: idle → running → completing → idle
 */
export function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const barRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stateRef = useRef<"idle" | "running" | "completing">("idle");
  const prevPathRef = useRef(pathname);

  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const setBar = useCallback((width: number, opacity: number, transition: string) => {
    if (barRef.current) {
      barRef.current.style.width = `${width}%`;
      barRef.current.style.opacity = `${opacity}`;
      barRef.current.style.transition = transition;
    }
  }, []);

  const startProgress = useCallback(() => {
    cleanup();
    stateRef.current = "running";

    // Reset bar instantly (no transition), then begin ramping
    setBar(0, 1, "none");

    // Force reflow so the reset takes effect before animating
    barRef.current?.offsetWidth;

    let current = 0;
    intervalRef.current = setInterval(() => {
      // Slow down as we approach 85% — never go past 90%
      const increment = current < 30 ? (Math.random() * 15 + 5)
                       : current < 60 ? (Math.random() * 8 + 2)
                       : current < 80 ? (Math.random() * 3 + 0.5)
                       : (Math.random() * 0.5 + 0.1);

      current = Math.min(current + increment, 90);
      setBar(current, 1, "width 200ms ease-out");

      if (current >= 90) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 120);
  }, [cleanup, setBar]);

  const completeProgress = useCallback(() => {
    if (stateRef.current !== "running") return; // only complete if actually running

    cleanup();
    stateRef.current = "completing";

    // Snap to 100%
    setBar(100, 1, "width 180ms ease-out");

    // After the width animation, fade out
    timeoutRef.current = setTimeout(() => {
      setBar(100, 0, "opacity 250ms ease-out");

      // After fade, fully reset
      timeoutRef.current = setTimeout(() => {
        setBar(0, 0, "none");
        stateRef.current = "idle";
      }, 280);
    }, 200);
  }, [cleanup, setBar]);

  // When the route changes (pathname or searchParams), complete any running progress
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      completeProgress();
      prevPathRef.current = pathname;
    }
  }, [pathname, searchParams, completeProgress]);

  // Listen for internal link clicks to start the progress bar
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      // Ignore external links, download links, and new-tab links
      if (!anchor.href) return;
      if (!anchor.href.startsWith(window.location.origin)) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("target") === "_blank") return;

      const url = new URL(anchor.href);
      // Only trigger if navigating to a different page
      if (url.pathname !== pathname || url.search !== window.location.search) {
        startProgress();
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname, startProgress]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2.5px] pointer-events-none"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: "0%",
          opacity: 0,
          background: "linear-gradient(90deg, #8d4b00, #b15f00, #d4781a)",
          boxShadow: "0 0 8px rgba(141, 75, 0, 0.5)",
        }}
      />
    </div>
  );
}

export default TopProgressBar;
