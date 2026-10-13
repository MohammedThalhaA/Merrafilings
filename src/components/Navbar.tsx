"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles, Building2, User } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white border-b border-[#E4E7EC] font-sans transition-all" ref={dropdownRef}>
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="flex items-center justify-between h-[70px] gap-2 lg:gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-4 lg:gap-5 shrink-0">
            <a href="#" className="flex items-center gap-2 group" aria-label="MerraFilings Home">
              {/* Brand Logo: Merrafilings oval crest badge */}
              <div className="relative flex items-center justify-center">
                <div className="w-[124px] h-[40px] rounded-[22px] border-2 border-[#15803D] bg-white flex items-center justify-center px-2 py-0.5 shadow-xs relative overflow-hidden group-hover:border-[#155EEF] transition-colors">
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#EA580C]/15 rounded-full blur-[2px]" />
                  <div className="text-center leading-none">
                    <span className="block text-[15px] font-bold text-[#15803D] tracking-tight group-hover:text-[#155EEF] transition-colors">
                      Merra
                    </span>
                    <span className="block text-[10px] font-semibold text-[#EA580C] uppercase tracking-wider">
                      Filings
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 whitespace-nowrap min-w-0" aria-label="Main Navigation">
            {NAV_CATEGORIES.map((cat) => {
              const isOpen = activeDropdown === cat.id;

              if (!cat.hasDropdown) {
                return (
                  <button
                    key={cat.id}
                    onClick={onOpenContact}
                    className="px-2 py-1.5 text-[14px] xl:text-[14.5px] font-medium text-[#111827] hover:text-[#155EEF] rounded-md transition-colors cursor-pointer inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    {cat.label}
                  </button>
                );
              }

              return (
                <div key={cat.id} className="relative group shrink-0">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                    onMouseEnter={() => setActiveDropdown(cat.id)}
                    className={`px-2 py-1.5 text-[14px] xl:text-[14.5px] font-medium rounded-md transition-colors inline-flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
                      isOpen
                        ? "text-[#155EEF] bg-[#F8FAFC]"
                        : "text-[#111827] hover:text-[#155EEF] hover:bg-[#F8FAFC]/80"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#475467] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#155EEF]" : "group-hover:text-[#155EEF]"
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={`absolute top-full mt-1 bg-white rounded-xl border border-[#E4E7EC] shadow-xl p-6 z-50 animate-in fade-in slide-in-from-top-1 duration-150 max-w-[calc(100vw-2rem)] ${
                        cat.columnLayout ? cat.columnLayout.width : "w-[540px]"
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
                        /* Clean Multi-Column List Layout (Matching Trademark & Registrations Screenshots) */
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
                                  className="block py-1.5 px-2 text-[13.5px] text-[#475467] hover:text-[#111827] hover:bg-[#F8FAFC] rounded-md transition-colors leading-snug whitespace-nowrap"
                                >
                                  {link.title}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        cat.items && (
                          <div className="grid grid-cols-2 gap-6">
                            {cat.items.map((sub, idx) => (
                              <div key={idx} className="space-y-3">
                                {sub.categoryTitle && (
                                  <h4 className="text-[12px] font-semibold text-[#475467] uppercase tracking-wider border-b border-[#E4E7EC] pb-1.5">
                                    {sub.categoryTitle}
                                  </h4>
                                )}
                                <ul className="space-y-1.5">
                                  {sub.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                      <a
                                        href={link.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="block p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors group/link"
                                      >
                                        <div className="flex items-center justify-between">
                                          <span className="text-[13.5px] font-semibold text-[#111827] group-hover/link:text-[#155EEF] transition-colors">
                                            {link.title}
                                          </span>
                                          {link.badge && (
                                            <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#155EEF]/10 text-[#155EEF]">
                                              {link.badge}
                                            </span>
                                          )}
                                        </div>
                                        {link.desc && (
                                          <p className="text-[11.5px] text-[#475467] line-clamp-1 mt-0.5">
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
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons & Login Button */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#111827] hover:text-[#155EEF] hover:bg-[#F8FAFC] rounded-full transition-colors cursor-pointer shrink-0"
              title="Search services (Ctrl + K)"
              aria-label="Search all services"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Login Pill Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="inline-flex items-center justify-center px-5 py-2 text-[14px] font-medium text-[#111827] bg-white border border-[#D0D5DD] hover:border-[#155EEF] hover:text-[#155EEF] rounded-full transition-all shadow-xs hover:shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                Login
              </button>

              {dashboardOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl border border-[#E4E7EC] shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3 py-2 border-b border-[#E4E7EC] mb-2">
                    <p className="text-[12px] text-[#475467]">Client Access</p>
                    <p className="text-[13px] font-semibold text-[#111827]">Compliance & Invoicing Portal</p>
                  </div>
                  <a
                    href="#login"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[#111827] hover:bg-[#F8FAFC] rounded-lg transition-colors font-medium"
                  >
                    <User className="w-4 h-4 text-[#155EEF]" />
                    <span>Client Login / Register</span>
                  </a>
                  <a
                    href="#ledgers"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[#111827] hover:bg-[#F8FAFC] rounded-lg transition-colors font-medium"
                  >
                    <Sparkles className="w-4 h-4 text-[#15803D]" />
                    <span>LEDGERS Accounting Cloud</span>
                  </a>
                  <a
                    href="#partner"
                    onClick={() => setDashboardOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[#111827] hover:bg-[#F8FAFC] rounded-lg transition-colors font-medium"
                  >
                    <Building2 className="w-4 h-4 text-[#EA580C]" />
                    <span>Partner / CA Network Portal</span>
                  </a>
                  <div className="mt-2 pt-2 border-t border-[#E4E7EC]">
                    <button
                      onClick={() => {
                        setDashboardOpen(false);
                        onOpenContact();
                      }}
                      className="w-full text-center py-1.5 text-[12px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-lg transition-colors cursor-pointer"
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
              className="lg:hidden p-2 text-[#475467] hover:text-[#111827] rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E4E7EC] bg-white px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
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
                    className="w-full text-left px-3 py-2.5 text-[15px] font-medium text-[#111827] hover:bg-[#F8FAFC] rounded-lg"
                  >
                    {cat.label}
                  </button>
                );
              }

              return (
                <div key={cat.id} className="border-b border-[#E4E7EC]/60 last:border-0 pb-1">
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[15px] font-medium text-[#111827]"
                  >
                    <span>{cat.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-[#155EEF]" : "text-[#475467]"}`} />
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
                              className="block py-1.5 px-2 text-[13.5px] text-[#475467] hover:text-[#155EEF] hover:bg-[#F8FAFC] rounded"
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
                              <p className="text-[11px] font-bold text-[#475467] uppercase tracking-wider pt-1">
                                {sub.categoryTitle}
                              </p>
                            )}
                            {sub.links.map((link, lIdx) => (
                              <a
                                key={lIdx}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1.5 px-2 text-[14px] text-[#475467] hover:text-[#155EEF] hover:bg-[#F8FAFC] rounded"
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

          <div className="mt-5 pt-4 border-t border-[#E4E7EC] space-y-2">
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
