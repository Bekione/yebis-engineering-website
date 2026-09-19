"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import StrokeText from "./StrokeText";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="w-full max-w-7xl mx-auto bg-surface/95 backdrop-blur-md border-x border-b border-outline-variant/40 pointer-events-auto">
        {/* Operational Credential & Telemetry Bar */}
        <div className="w-full bg-surface-container-low border-b border-outline-variant/30 hidden lg:block overflow-hidden">
          <div className="px-6 lg:px-12 h-7 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase whitespace-nowrap">
            <div className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
              <span className="inline-block w-2 h-2 bg-primary shrink-0"></span>
              <span className="font-semibold text-on-surface whitespace-nowrap">
                ETHIOPIA
              </span>
              <span className="text-secondary/60">•</span>
              <span className="whitespace-nowrap">
                GRADE 3 GENERAL CONTRACTOR (GC-3)
              </span>
              <span className="text-secondary/60">•</span>
              <span className="text-secondary whitespace-nowrap">
                TRADE REG: BL/AA/1/0001088/2004 · TIN: 0001985917
              </span>
            </div>
            <div className="flex items-center gap-4 text-secondary shrink-0 whitespace-nowrap pl-4">
              <span className="hidden xl:inline whitespace-nowrap">
                HQ: BOLE ROAD, ADDIS ABABA
              </span>
              <span className="hidden xl:inline text-secondary/60">•</span>
              <span className="text-primary font-medium whitespace-nowrap">
                NATIONWIDE CONTRACTING
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="h-20 px-3.5 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4 lg:gap-space-md">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3.5 group min-w-0">
            <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center bg-inverse-surface border border-outline-variant/60 group-hover:border-primary group-hover:bg-primary transition-all p-1 sm:p-1.5 shrink-0">
              <Image
                src="/assets/logo-light.png"
                alt="Yebis Engineering Logo"
                width={30}
                height={30}
                className="object-contain w-6 h-6 sm:w-[34px] sm:h-[34px]"
                priority
              />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-sm sm:text-headline-sm tracking-tight text-on-surface font-semibold uppercase leading-tight truncate">
                <StrokeText
                  text="Yebis Engineering"
                  uppercase
                  strokeColor="var(--color-primary, #D97706)"
                  fillColor="var(--color-on-surface, #111618)"
                  strokeWidth={0.9}
                  fontWeight={600}
                  drawDuration={1.1}
                  fillDelay={0.15}
                  ease="power2.out"
                  trigger="mount"
                  replayOnHover={true}
                  fillMode="wipe"
                  removeStrokeOnEnd={true}
                />
              </span>
              <span className="font-label-sm text-[9px] sm:text-label-sm tracking-wider sm:tracking-widest text-on-surface-variant uppercase truncate">
                Addis Ababa · Ethiopia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-space-lg font-label-lg text-label-lg uppercase tracking-wider">
            {NAV.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-space-xs transition-colors duration-150 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 inset-x-0 h-[2px] bg-primary"
                      transition={{
                        duration: 0.22,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-space-lg shrink-0">
            <div className="hidden md:flex relative group cursor-pointer py-1">
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase flex items-center justify-end gap-1">
                  <span>Headquarters · Bole</span>
                  <span className="text-[10px] text-primary">▼</span>
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  +251 91 151 7784
                </span>
              </div>

              {/* Dropdown for All 3 Phone Lines */}
              <div className="absolute top-full right-0 mt-2 w-72 bg-surface-container-lowest border border-outline-variant/60 shadow-xl p-3 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="font-label-sm text-[10px] uppercase tracking-wider text-secondary border-b border-outline-variant/30 pb-1 flex items-center justify-between">
                  <span>Direct Hotlines</span>
                  <span className="text-primary font-bold">3 ACTIVE LINES</span>
                </div>
                <a
                  href="tel:+251911517784"
                  className="flex items-center justify-between p-2 hover:bg-surface-container transition-colors border border-outline-variant/20 hover:border-primary/40 group/item"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-label-sm text-[10px] uppercase text-secondary group-hover/item:text-primary transition-colors">
                      Headquarters (Direct)
                    </span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      +251 91 151 7784
                    </span>
                  </div>
                  <span className="font-label-sm text-[9px] bg-surface-container-high px-1.5 py-0.5 text-secondary uppercase font-semibold">
                    HQ Primary
                  </span>
                </a>
                <a
                  href="tel:+251913879093"
                  className="flex items-center justify-between p-2 hover:bg-surface-container transition-colors border border-outline-variant/20 hover:border-primary/40 group/item"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-label-sm text-[10px] uppercase text-secondary group-hover/item:text-primary transition-colors">
                      Commercial Tenders
                    </span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      +251 91 387 9093
                    </span>
                  </div>
                  <span className="font-label-sm text-[9px] bg-surface-container-high px-1.5 py-0.5 text-secondary uppercase font-semibold">
                    Direct 2
                  </span>
                </a>
                <a
                  href="tel:+251911629279"
                  className="flex items-center justify-between p-2 hover:bg-surface-container transition-colors border border-outline-variant/20 hover:border-primary/40 group/item"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-label-sm text-[10px] uppercase text-secondary group-hover/item:text-primary transition-colors">
                      Operations &amp; Engineering
                    </span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      +251 91 162 9279
                    </span>
                  </div>
                  <span className="font-label-sm text-[9px] bg-surface-container-high px-1.5 py-0.5 text-secondary uppercase font-semibold">
                    Direct 3
                  </span>
                </a>
              </div>
            </div>

            <Link
              className="inline-flex items-center gap-1.5 sm:gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg uppercase px-2.5 sm:px-5 lg:px-space-lg py-2 sm:py-2.5 lg:py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150 shrink-0"
              href="/start-a-project"
            >
              <span className="tracking-wider text-[11px] sm:text-xs lg:text-sm font-semibold">
                <span className="hidden sm:inline">Start a Project</span>
                <span className="sm:hidden">Start</span>
              </span>
              <span className="text-primary-fixed text-xs">→</span>
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-on-surface hover:bg-surface-container border border-outline-variant/50 transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X size={20} className="sm:w-[22px] sm:h-[22px]" />
              ) : (
                <Menu size={20} className="sm:w-[22px] sm:h-[22px]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-outline-variant/40 bg-surface px-6 py-6 flex flex-col gap-4 shadow-xl">
            <div className="font-label-sm text-label-sm text-secondary uppercase pb-2 border-b border-outline-variant/30">
              NAVIGATION INDEX // GC-3 DIRECTORY
            </div>
            {NAV.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base uppercase tracking-wider py-2 border-b border-outline-variant/20 flex items-center justify-between ${
                    isActive ? "text-primary font-bold" : "text-on-surface"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    →
                  </span>
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-2.5 font-label-sm text-label-sm text-secondary border-t border-outline-variant/30">
              <div className="font-label-sm text-[10px] uppercase tracking-wider text-secondary flex items-center justify-between">
                <span>Direct Telephony Hotlines</span>
                <span className="text-primary font-semibold">
                  3 Lines Available
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <a
                  href="tel:+251911517784"
                  className="flex items-center justify-between p-2.5 bg-surface-container-low border border-outline-variant/40 hover:border-primary text-on-surface transition-colors"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase text-secondary font-mono">
                      Headquarters Direct
                    </span>
                    <span className="font-bold text-sm tracking-wide">
                      +251 91 151 7784
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-mono">
                    CALL
                  </span>
                </a>
                <a
                  href="tel:+251913879093"
                  className="flex items-center justify-between p-2.5 bg-surface-container-low border border-outline-variant/40 hover:border-primary text-on-surface transition-colors"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase text-secondary font-mono">
                      Commercial Tenders
                    </span>
                    <span className="font-bold text-sm tracking-wide">
                      +251 91 387 9093
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-mono">
                    CALL
                  </span>
                </a>
                <a
                  href="tel:+251911629279"
                  className="flex items-center justify-between p-2.5 bg-surface-container-low border border-outline-variant/40 hover:border-primary text-on-surface transition-colors"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase text-secondary font-mono">
                      Operations &amp; Engineering
                    </span>
                    <span className="font-bold text-sm tracking-wide">
                      +251 91 162 9279
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-mono">
                    CALL
                  </span>
                </a>
              </div>
              <div className="text-[11px] text-secondary/80 mt-1">
                BOLE ROAD, ADDIS ABABA // MON-SAT 08:00-18:00 EAT
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
