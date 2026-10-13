"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Menu, X, ShieldCheck, Sparkles, Building2, User, PhoneCall, HelpCircle } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_0_rgba(15,23,42,0.03)] font-sans transition-all" ref={dropdownRef}>
      {/* Micro Brand Gradient Accent Hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#15803D] via-[#155EEF] to-[#EA580C] opacity-85" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="flex items-center justify-between h-[68px] gap-2 lg:gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-4 lg:gap-5 shrink-0">
            <a href="/" className="flex items-center gap-2 group" aria-label="MerraFilings Home">
              {/* Refined Crest Badge - Crisp, Sharp, No Artifacts */}
              <div className="relative flex items-center justify-center">
                <div className="w-[126px] h-[38px] rounded-full border-[1.5px] border-[#15803D] bg-white flex items-center justify-center px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)] group-hover:border-[#155EEF] group-hover:shadow-xs transition-all duration-200">
                  <div className="text-center leading-none">
                    <span className="block text-[14.5px] font-bold text-[#15803D] tracking-tight group-hover:text-[#155EEF] transition-colors">
                      Merra
                    </span>
                    <span className="block text-[9.5px] font-bold text-[#EA580C] uppercase tracking-[0.14em] mt-0.5">
                      Filings
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 whitespace-nowrap min-w-0" aria-label="Main Navigation">
            {NAV_CATEGORIES.map((cat) => {
              const isOpen = activeDropdown === cat.id;

              // Standalone items without dropdown
              if (!cat.hasDropdown) {
                // Specialized visual treatment for Refer and Hiring badges
                if (cat.id === "refer") {
                  return (
                    <button
                      key={cat.id}
                      onClick={onOpenContact}
                      className="px-2 py-1 text-[12.5px] xl:text-[13px] font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-full transition-all cursor-pointer inline-flex items-center gap-1 shrink-0 shadow-2xs hover:shadow-xs"
                    >
                      {cat.label}
                    </button>
                  );
                }

                if (cat.id === "hiring") {
                  return (
                    <button
                      key={cat.id}
                      onClick={onOpenContact}
                      className="px-2 py-1 text-[12.5px] xl:text-[13px] font-medium text-violet-800 bg-violet-50 hover:bg-violet-100 border border-violet-200/80 rounded-full transition-all cursor-pointer inline-flex items-center gap-1 shrink-0 shadow-2xs hover:shadow-xs"
                    >
                      {cat.label}
                    </button>
                  );
                }

                return (
                  <button
                    key={cat.id}
                    onClick={onOpenContact}
                    className="px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium text-slate-800 hover:text-[#155EEF] hover:bg-slate-100/70 rounded-lg transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    {cat.label}
                  </button>
                );
              }

              // Dropdown Trigger
              return (
                <div key={cat.id} className="relative group shrink-0">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                    onMouseEnter={() => setActiveDropdown(cat.id)}
                    className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium rounded-lg transition-all inline-flex items-center gap-0.5 xl:gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
                      isOpen
                        ? "text-[#155EEF] bg-blue-50/90 shadow-[inset_0_0_0_1px_rgba(21,94,239,0.18)]"
                        : "text-slate-800 hover:text-[#155EEF] hover:bg-slate-100/70"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#155EEF]" : "text-slate-400 group-hover:text-[#155EEF]"
                      }`}
                    />
                  </button>

                  {/* Enhanced Mega Menu Dropdown */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={`absolute top-full mt-2 bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.15)] p-6 z-50 ring-1 ring-slate-900/5 animate-in fade-in slide-in-from-top-1.5 duration-200 max-w-[calc(100vw-2rem)] ${
                        cat.columnLayout ? cat.columnLayout.width : "w-[560px]"
                      } ${
                        cat.id === "startup"
                          ? "left-0"
                          : cat.id === "registrations"
                          ? "left-[-40px]"
                          : cat.id === "trademark"
                          ? "left-[-80px]"
                          : cat.id === "gst"
                          ? "left-[-80px]"
                          : cat.id === "income-tax"
                          ? "left-[-110px]"
                          : cat.id === "mca"
                          ? "left-[-170px]"
                          : cat.id === "compliance"
                          ? "left-[-180px]"
                          : cat.id === "consultation"
                          ? "left-[-220px]"
                          : cat.id === "global"
                          ? "right-0"
                          : "left-[-100px]"
                      }`}
                    >
                      {cat.columnLayout ? (
                        /* Multi-Column List Layout with Smooth Hover Pill Animation */
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
                                  <a
                                    key={linkIdx}
                                    href={link.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block py-1.5 px-2.5 text-[13.5px] font-medium text-slate-600 hover:text-[#155EEF] hover:bg-blue-50/70 hover:translate-x-1 rounded-lg transition-all leading-snug whitespace-nowrap"
                                  >
                                    {link.title}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>

                          {/* Advisory Helper Banner at Bottom of Mega Menu */}
                          <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              Govt. Certified Filing Platform
                            </span>
                            <button
                              onClick={() => {
                                setActiveDropdown(null);
                                onOpenContact();
                              }}
                              className="text-[#155EEF] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                            >
                              Talk to Expert Advisor &rarr;
                            </button>
                          </div>
                        </div>
                      ) : (
                        cat.items && (
                          <div>
                            <div className="grid grid-cols-2 gap-6">
                              {cat.items.map((sub, idx) => (
                                <div key={idx} className="space-y-3">
                                  {sub.categoryTitle && (
                                    <h4 className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                                      {sub.categoryTitle}
                                    </h4>
                                  )}
                                  <ul className="space-y-1.5">
                                    {sub.links.map((link, lIdx) => (
                                      <li key={lIdx}>
                                        <a
                                          href={link.href}
                                          onClick={() => setActiveDropdown(null)}
                                          className="block p-2 rounded-xl hover:bg-blue-50/60 hover:translate-x-1 transition-all group/link"
                                        >
                                          <div className="flex items-center justify-between">
                                            <span className="text-[13.5px] font-semibold text-slate-800 group-hover/link:text-[#155EEF] transition-colors">
                                              {link.title}
                                            </span>
                                            {link.badge && (
                                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                                {link.badge}
                                              </span>
                                            )}
                                          </div>
                                          {link.desc && (
                                            <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
                                              {link.desc}
                                            </p>
                                          )}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Advisory Helper Banner */}
                            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500">
                              <span className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                100% Online &amp; Compliant
                              </span>
                              <button
                                onClick={() => {
                                  setActiveDropdown(null);
                                  onOpenContact();
                                }}
                                className="text-[#155EEF] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                              >
                                Need Help Choosing? Talk to CA &rarr;
                              </button>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons & Login Button */}
          <div className="flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/90 text-slate-700 hover:text-[#155EEF] flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:shadow-xs shrink-0"
              title="Search services (Ctrl + K)"
              aria-label="Search all services"
            >
              <Search className="w-4 h-4 text-slate-600 hover:text-[#155EEF] transition-colors" />
            </button>

            {/* Elevated Login Pill Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-1.5 text-[13px] xl:text-[13.5px] font-semibold text-white bg-slate-900 hover:bg-[#155EEF] rounded-full transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer whitespace-nowrap group"
              >
                <User className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
                <span>Login</span>
              </button>

              {dashboardOpen && (
                <div className="absolute right-0 mt-2.5 w-72 bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/15 p-3.5 z-50 ring-1 ring-slate-900/5 animate-in fade-in slide-in-from-top-1.5">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Client Access</p>
                    <p className="text-[13px] font-semibold text-slate-900">Compliance &amp; Invoicing Portal</p>
                  </div>
                  <a
                    href="#login"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-slate-800 hover:bg-slate-50 hover:text-[#155EEF] rounded-xl transition-colors font-medium"
                  >
                    <User className="w-4 h-4 text-[#155EEF]" />
                    <span>Client Login / Register</span>
                  </a>
                  <a
                    href="#ledgers"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-slate-800 hover:bg-slate-50 hover:text-[#15803D] rounded-xl transition-colors font-medium"
                  >
                    <Sparkles className="w-4 h-4 text-[#15803D]" />
                    <span>LEDGERS Accounting Cloud</span>
                  </a>
                  <a
                    href="#partner"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-slate-800 hover:bg-slate-50 hover:text-[#EA580C] rounded-xl transition-colors font-medium"
                  >
                    <Building2 className="w-4 h-4 text-[#EA580C]" />
                    <span>Partner / CA Network Portal</span>
                  </a>
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setDashboardOpen(false);
                        onOpenContact();
                      }}
                      className="w-full text-center py-2 text-[12.5px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-xl transition-colors cursor-pointer shadow-xs"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              )}
            </div>

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
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
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
                    className="w-full text-left px-3 py-2.5 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
                  >
                    {cat.label}
                  </button>
                );
              }

              return (
                <div key={cat.id} className="border-b border-slate-100 last:border-0 pb-1">
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[15px] font-semibold text-slate-800"
                  >
                    <span>{cat.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-[#155EEF]" : "text-slate-400"}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-4 pr-2 pb-3 space-y-3">
                      {cat.columnLayout ? (
                        <div className="grid grid-cols-1 gap-1 pt-1">
                          {cat.columnLayout.columns.flat().map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 px-2 text-[13.5px] font-medium text-slate-600 hover:text-[#155EEF] hover:bg-slate-50 rounded-lg"
                            >
                              {link.title}
                            </a>
                          ))}
                        </div>
                      ) : (
                        cat.items &&
                        cat.items.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            {sub.categoryTitle && (
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pt-1">
                                {sub.categoryTitle}
                              </p>
                            )}
                            {sub.links.map((link, lIdx) => (
                              <a
                                key={lIdx}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1.5 px-2 text-[13.5px] font-medium text-slate-600 hover:text-[#155EEF] hover:bg-slate-50 rounded-lg"
                              >
                                {link.title}
                              </a>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-xl shadow-xs"
            >
              Get Started / Talk to Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
