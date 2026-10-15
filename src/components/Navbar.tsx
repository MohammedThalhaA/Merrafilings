"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  User,
  ArrowRight,
  Building2,
  Lock,
} from "lucide-react";
import { NAV_CATEGORIES } from "@/data/navigation";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenSearch, onOpenContact }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setDashboardOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_0_rgba(15,23,42,0.02)] font-sans transition-all" ref={dropdownRef}>
      {/* Delicate Refined Hairline Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900 opacity-90" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="flex items-center justify-between h-[68px] gap-2 lg:gap-4">
          
          {/* Bespoke Merrafilings Minimalist Brand Identity */}
          <div className="flex items-center gap-4 lg:gap-5 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer" aria-label="Merrafilings Home">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="leading-tight">
                <span className="block text-[17px] font-bold text-[#0F172A] tracking-tight group-hover:text-emerald-800 transition-colors">
                  Merra<span className="text-emerald-700">filings</span>
                </span>
                <span className="block text-[9.5px] font-medium text-slate-400 uppercase tracking-widest -mt-0.5">
                  Corporate Advisory
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links with Responsive Visibility */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 whitespace-nowrap min-w-0" aria-label="Main Navigation">
            {NAV_CATEGORIES.map((cat) => {
              // We reserve refer and hiring for the "More" dropdown and mobile menu to prevent navbar collision
              if (cat.id === "refer" || cat.id === "hiring" || cat.id === "consultation") {
                return null;
              }

              const isOpen = activeDropdown === cat.id;

              // Breakpoint visibility: core items always visible on lg; compliance & global visible on xl+
              const visibilityClass =
                cat.id === "compliance" || cat.id === "global"
                  ? "hidden xl:inline-block"
                  : "inline-block";

              const dropdownAlign =
                cat.id === "startup"
                  ? "left-0"
                  : cat.id === "registrations"
                  ? "left-0"
                  : cat.id === "trademark"
                  ? "left-0 xl:left-[-20px]"
                  : cat.id === "gst"
                  ? "left-[-40px] xl:left-[-60px]"
                  : cat.id === "income-tax"
                  ? "left-[-80px] xl:left-[-110px]"
                  : cat.id === "mca"
                  ? "left-[-120px] xl:left-[-170px]"
                  : "right-0";

              return (
                <div key={cat.id} className={`relative group shrink-0 ${visibilityClass}`}>
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                    onMouseEnter={() => setActiveDropdown(cat.id)}
                    className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13px] 2xl:text-[13.5px] font-medium rounded-lg transition-all inline-flex items-center gap-0.5 xl:gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
                      isOpen
                        ? "text-emerald-800 bg-emerald-50/80"
                        : "text-slate-700 hover:text-[#0F172A] hover:bg-slate-50"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-emerald-700" : "text-slate-400 group-hover:text-slate-700"
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={`absolute top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl p-6 z-50 animate-in fade-in slide-in-from-top-1 duration-150 max-w-[calc(100vw-2rem)] ${
                        cat.columnLayout ? cat.columnLayout.width : "w-[560px]"
                      } ${dropdownAlign}`}
                    >
                      {cat.columnLayout ? (
                        <div>
                          <div
                            className="grid gap-6 sm:gap-8"
                            style={{
                              gridTemplateColumns: `repeat(${cat.columnLayout.columnsCount}, minmax(0, 1fr))`,
                            }}
                          >
                            {cat.columnLayout.columns.map((col, colIdx) => (
                              <div key={colIdx} className="space-y-1">
                                {col.map((link, linkIdx) => (
                                  <Link
                                    key={linkIdx}
                                    href={link.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block py-2 px-3 text-[13.5px] font-medium text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60 rounded-lg transition-all leading-snug whitespace-nowrap"
                                  >
                                    {link.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>

                          {/* Advisory Helper Banner at Bottom of Mega Menu */}
                          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[12px] text-slate-600">
                            <span className="flex items-center gap-1.5 shrink-0 font-medium">
                              <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              Chartered Accountant &amp; CS Certified Advisory
                            </span>
                            <button
                              onClick={() => {
                                setActiveDropdown(null);
                                onOpenContact();
                              }}
                              className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 cursor-pointer shrink-0"
                            >
                              <span>Talk to Senior Advisor</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        cat.items && (
                          <div className="grid grid-cols-2 gap-6">
                            {cat.items.map((sub, idx) => (
                              <div key={idx} className="space-y-2">
                                {sub.categoryTitle && (
                                  <h4 className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                                    {sub.categoryTitle}
                                  </h4>
                                )}
                                <ul className="space-y-1">
                                  {sub.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                      <Link
                                        href={link.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="block p-2 rounded-lg hover:bg-emerald-50/60 transition-all text-[13.5px] font-medium text-slate-700 hover:text-emerald-800"
                                      >
                                        {link.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* "More" Dropdown Menu to prevent overcrowding */}
            <div className="relative group shrink-0">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "more" ? null : "more")}
                onMouseEnter={() => setActiveDropdown("more")}
                className={`px-2 xl:px-2.5 py-1.5 text-[12.5px] xl:text-[13px] 2xl:text-[13.5px] font-medium rounded-lg transition-all inline-flex items-center gap-0.5 xl:gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeDropdown === "more"
                    ? "text-emerald-800 bg-emerald-50/80"
                    : "text-slate-700 hover:text-[#0F172A] hover:bg-slate-50"
                }`}
                aria-expanded={activeDropdown === "more"}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                    activeDropdown === "more" ? "rotate-180 text-emerald-700" : "text-slate-400 group-hover:text-slate-700"
                  }`}
                />
              </button>

              {activeDropdown === "more" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl p-5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 w-[360px] max-w-[calc(100vw-2rem)]"
                >
                  <div className="space-y-3">
                    {/* On smaller desktop screens (lg), provide quick access to Compliance & Global */}
                    <div className="xl:hidden pb-3 border-b border-slate-100 space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-1">
                        Corporate Solutions
                      </p>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenContact();
                        }}
                        className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-[13px] font-medium text-slate-700 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-emerald-700" />
                          Compliance &amp; Secretarial
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenContact();
                        }}
                        className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-[13px] font-medium text-slate-700 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">🌐</span>
                          Global (US, Dubai, Singapore)
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>

                    {/* CA & CS Consultation */}
                    <div className="pb-3 border-b border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-1.5">
                        Senior Advisory
                      </p>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenContact();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors flex items-start gap-2.5 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-slate-900 group-hover:text-emerald-800">
                            Speak with a CA or CS
                          </p>
                          <p className="text-[11.5px] text-slate-500 leading-snug">
                            Expert consultation for tax scrutiny, company structuring &amp; audit guidance.
                          </p>
                        </div>
                      </button>
                    </div>

                    {/* Perks & Careers */}
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenContact();
                        }}
                        className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-[13px] font-medium text-slate-700 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">🎁</span> Refer a Founder
                        </span>
                        <span className="text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          Earn ₹5,000
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenContact();
                        }}
                        className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-[13px] font-medium text-slate-700 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">💼</span> Careers at Merrafilings
                        </span>
                        <span className="text-[10.5px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                          We&apos;re Hiring
                        </span>
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons & Login Button - Secured with ml-auto and shrink-0 */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0 ml-auto pl-2 bg-white">
            {/* Quick Search Button with ⌘K badge */}
            <button
              onClick={onOpenSearch}
              className="h-8.5 sm:h-9 px-2.5 sm:px-3 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-[#0F172A] flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-2xs shrink-0"
              title="Search services (Ctrl + K)"
              aria-label="Search all services"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="text-xs text-slate-600 hidden md:inline font-medium">Search</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white rounded border border-slate-200">
                ⌘K
              </kbd>
            </button>

            {/* Client Portal Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[12px] sm:text-[12.5px] font-medium text-slate-700 hover:text-[#0F172A] bg-slate-100 hover:bg-slate-200/70 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Client Vault</span>
              </button>

              {dashboardOpen && (
                <div className="absolute right-0 mt-2.5 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl p-3.5 z-50 animate-in fade-in slide-in-from-top-1.5">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Merrafilings</p>
                    <p className="text-[13px] font-semibold text-slate-900">Entity Vault &amp; Filings</p>
                  </div>
                  <a
                    href="#login"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-xl transition-colors font-medium"
                  >
                    <User className="w-4 h-4 text-emerald-700" />
                    <span>Client Login / Register</span>
                  </a>
                  <a
                    href="#vault"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-xl transition-colors font-medium"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Document Vault &amp; Certs</span>
                  </a>
                  <a
                    href="#partner"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-xl transition-colors font-medium"
                  >
                    <Building2 className="w-4 h-4 text-purple-700" />
                    <span>Chartered Accountant Network</span>
                  </a>
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setDashboardOpen(false);
                        onOpenContact();
                      }}
                      className="w-full text-center py-2 text-[12.5px] font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shadow-xs"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[12.5px] sm:text-[13px] font-medium text-white bg-[#0F172A] hover:bg-slate-800 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shadow-xs shrink-0"
            >
              <span>Get Started</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {NAV_CATEGORIES.map((cat) => {
              const isExpanded = mobileExpandedCat === cat.id;
              if (!cat.hasDropdown) {
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="w-full text-left px-3 py-2.5 text-[15px] font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
                  >
                    {cat.label}
                  </button>
                );
              }

              return (
                <div key={cat.id} className="border-b border-slate-100 last:border-0 pb-1">
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[15px] font-medium text-slate-800"
                  >
                    <span>{cat.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-emerald-700" : "text-slate-400"}`} />
                  </button>

                  {isExpanded && cat.columnLayout && (
                    <div className="pl-4 pr-2 pb-3 space-y-1.5 pt-1">
                      {cat.columnLayout.columns.flat().map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-[13.5px] font-medium text-slate-700 hover:text-emerald-800 hover:bg-slate-50 rounded-lg"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-[14px] font-medium text-white bg-[#0F172A] hover:bg-slate-800 rounded-xl shadow-xs"
            >
              Get Started / Talk to Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
