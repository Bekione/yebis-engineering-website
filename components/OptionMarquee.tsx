"use client";

import React, { useRef, useState, useEffect } from "react";

interface OptionMarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // pixels per second for marquee animation
}

export function OptionMarquee({
  children,
  className = "",
  speed = 35,
}: OptionMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [overflowDistance, setOverflowDistance] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const checkOverflow = React.useCallback(() => {
    if (!containerRef.current || !textRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const textWidth = textRef.current.scrollWidth;
    const diff = textWidth - containerWidth;
    setOverflowDistance(diff > 2 ? diff : 0);
  }, []);

  useEffect(() => {
    checkOverflow();
    const handleResize = () => checkOverflow();
    window.addEventListener("resize", handleResize);

    // Re-check after small delay for modal/dropdown appearance
    const timer = setTimeout(checkOverflow, 80);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [children, checkOverflow]);

  const handleMouseEnter = () => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;
      const diff = textWidth - containerWidth;
      const finalDiff = diff > 2 ? diff : 0;
      setOverflowDistance(finalDiff);
      if (finalDiff > 0) {
        setIsHovered(true);
      }
    } else {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const duration = Math.max(1.2, overflowDistance / speed);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden select-none ${className}`}
      style={{
        maskImage:
          isHovered && overflowDistance > 0
            ? "linear-gradient(to right, transparent 0px, black 8px, black calc(100% - 12px), transparent 100%)"
            : undefined,
        WebkitMaskImage:
          isHovered && overflowDistance > 0
            ? "linear-gradient(to right, transparent 0px, black 8px, black calc(100% - 12px), transparent 100%)"
            : undefined,
      }}
    >
      <span
        ref={textRef}
        className="inline-block whitespace-nowrap will-change-transform"
        style={{
          transform:
            isHovered && overflowDistance > 0
              ? `translateX(-${overflowDistance + 4}px)`
              : "translateX(0px)",
          transition:
            isHovered && overflowDistance > 0
              ? `transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`
              : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default OptionMarquee;
