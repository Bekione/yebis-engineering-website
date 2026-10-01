"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackInitials?: string;
  wrapperClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  wrapperClassName,
  fallbackTitle,
  fallbackSubtitle,
  fallbackInitials,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const isFill = Boolean(props.fill);

  // Compute fallback initials if not provided
  const initials =
    fallbackInitials ||
    (fallbackTitle || alt || "YE")
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  if (error || !src) {
    return (
      <div
        className={`${
          isFill ? "absolute inset-0 w-full h-full" : "relative w-full h-full"
        } flex flex-col items-center justify-center bg-surface-container border border-outline-variant/30 overflow-hidden select-none p-4 text-center ${
          wrapperClassName || ""
        }`}
      >
        {/* Subtle Architectural Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--color-primary, #8d4b00) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />

        {/* Technical Corner Registration Marks */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary/40 pointer-events-none" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/40 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary/40 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary/40 pointer-events-none" />

        {/* Center Architectural Monogram Emblem */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-sm bg-surface-container-high border border-outline-variant/60 flex items-center justify-center shadow-xs">
            <span className="font-mono text-sm font-bold tracking-widest text-primary">
              {initials}
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5 max-w-[85%]">
            <span className="font-label-sm text-[11px] font-bold text-on-surface uppercase tracking-wider truncate w-full">
              {fallbackTitle || alt || "Yebis Engineering"}
            </span>
            <span className="font-mono text-[9px] text-secondary uppercase tracking-widest">
              {fallbackSubtitle || "ARCHITECTURAL RECORD"}
            </span>
          </div>
        </div>

        {/* Technical Datum Line */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-primary/20" />
      </div>
    );
  }

  const hasCustomOpacity = className && /opacity-\d+/.test(className);
  const opacityClass = loaded
    ? hasCustomOpacity
      ? ""
      : "opacity-100"
    : "opacity-0";

  return (
    <div
      className={`${
        isFill
          ? "absolute inset-0 w-full h-full pointer-events-none"
          : "relative w-full h-full"
      } ${wrapperClassName || ""}`}
    >
      {/* Subtle skeleton shimmer while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-surface-container animate-pulse z-0" />
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className || ""} transition-opacity duration-300 ${opacityClass}`}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}

export default ImageWithFallback;
