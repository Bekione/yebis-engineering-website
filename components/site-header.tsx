"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/40">
      {/* Operational Credential & Telemetry Bar */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-7 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            <span className="font-semibold text-on-surface">
              FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA
            </span>
            <span className="text-secondary/60">•</span>
            <span>GRADE 1 GENERAL CONTRACTOR (GC-1)</span>
            <span className="hidden xl:inline text-secondary/60">•</span>
            <span className="hidden xl:inline text-secondary">
              REG: MOTI/GC-01/ET
            </span>
          </div>
          <div className="flex items-center gap-4 text-secondary">
            <span>HEADQUARTERS: BOLE ROAD, ADDIS ABABA</span>
            <span className="text-secondary/60">•</span>
            <span className="text-primary font-medium">
              NATIONWIDE CONTRACTING
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <span className="flex h-11 w-11 items-center justify-center bg-inverse-surface border border-outline-variant/60 group-hover:border-primary group-hover:bg-primary transition-all p-1.5 shrink-0">
            <Image
              src="/assets/logo-light.png"
              alt="Yebis Engineering PLC Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold uppercase leading-tight">
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
            <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
              PLC · Addis Ababa · Ethiopia
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
                className={`py-space-xs transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-4 lg:gap-space-lg">
          <div className="hidden md:flex flex-col text-right">
            <span className="font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase">
              Headquarters · Bole
            </span>
            <span className="font-label-md text-label-md text-on-surface font-medium">
              +251 11 667 8900
            </span>
          </div>

          <Link
            className="inline-flex items-center gap-space-xs bg-inverse-surface hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase px-5 lg:px-space-lg py-2.5 lg:py-space-sm border border-inverse-surface hover:border-primary transition-all duration-150"
            href="/start-a-project"
          >
            <span className="tracking-wider text-xs lg:text-sm">
              Start a Project
            </span>
            <span className="text-primary-fixed">→</span>
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface hover:bg-surface-container border border-outline-variant/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-outline-variant/40 bg-surface px-6 py-6 flex flex-col gap-4 shadow-xl">
          <div className="font-label-sm text-label-sm text-secondary uppercase pb-2 border-b border-outline-variant/30">
            NAVIGATION INDEX // GC-1 DIRECTORY
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
          <div className="pt-2 flex flex-col gap-2 font-label-sm text-label-sm text-secondary">
            <div>HOTLINE: +251 11 667 8900</div>
            <div>BOLE ROAD, ADDIS ABABA</div>
          </div>
        </div>
      )}
    </header>
  );
}
