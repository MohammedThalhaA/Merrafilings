"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight, Building2, Receipt, Landmark, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  name: string;
  category: string;
  description: string;
  badge?: string;
}

const ALL_SERVICES: ServiceItem[] = [
  { name: "Private Limited Company Registration", category: "Startup", description: "Most popular for startups looking to raise venture funding", badge: "Popular" },
  { name: "Limited Liability Partnership (LLP)", category: "Startup", description: "Low compliance structure for consulting & partner firms" },
  { name: "Partnership Firm Registration", category: "Startup", description: "Two or more person business setup under Indian Partnership Act, 1932" },
  { name: "One Person Company (OPC)", category: "Startup", description: "Sole founder corporate entity with limited liability" },
  { name: "Section 8 NGO Company", category: "Startup", description: "Non-profit corporate structure with 80G tax benefits" },
  { name: "GST Registration Online", category: "GST", description: "Government GSTIN certificate issued within 3 to 5 business days", badge: "Fast Track" },
  { name: "Monthly GST Return Filing (GSTR-1 & 3B)", category: "GST", description: "Auto-reconciled monthly filings with 2B credit optimization" },
  { name: "GST Annual Return (GSTR-9)", category: "GST", description: "Statutory year-end GST audit and reconciliation filing" },
  { name: "Trademark Registration (Brand Name & Logo)", category: "Trademark", description: "National intellectual property protection with instant TM symbol", badge: "Instant TM" },
  { name: "Trademark Objection & Hearing Reply", category: "Trademark", description: "Drafted by experienced IP attorneys with high clearance rate" },
  { name: "Income Tax Return (ITR 1 - 4)", category: "Income Tax", description: "Individual, consultant, and proprietorship tax returns" },
  { name: "Corporate Income Tax Filing (ITR-6)", category: "Income Tax", description: "Full corporate tax filing with depreciation schedules" },
  { name: "Director KYC (DIR-3 KYC)", category: "MCA Compliance", description: "Annual mandatory director identification verification", badge: "Due Soon" },
  { name: "ROC Annual Compliance Package", category: "MCA Compliance", description: "AOC-4, MGT-7 and statutory registers maintenance" },
  { name: "FSSAI Food Safety License", category: "Registrations", description: "Mandatory for restaurants, cloud kitchens & packaged foods" },
  { name: "MSME / Udyam Certificate", category: "Registrations", description: "Zero government fee MSME registration for subsidies & loans" },
  { name: "Import Export Code (IEC)", category: "Registrations", description: "Lifetime valid DGFT code for international trade" },
  { name: "USA Delaware LLC Formation", category: "Global", description: "US company incorporation with Mercury bank account setup", badge: "Global" },
];

export default function ServiceSearchModal({ isOpen, onClose, onSelectService }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when search modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = ALL_SERVICES.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-6 sm:pt-20 px-3 sm:px-4 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search all services"
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[620px] max-h-[85dvh] flex flex-col shadow-2xl border border-[#E4E7EC] overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E4E7EC] gap-3 shrink-0">
          <Search className="w-5 h-5 text-[#475467] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 100+ services (e.g., Pvt Ltd, GST, Trademark, ITR)..."
            className="w-full text-base sm:text-[15px] text-[#111827] placeholder-[#94A3B8] focus:outline-hidden bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#94A3B8] hover:text-[#475467] text-xs px-1.5 py-1 rounded cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-md text-[#94A3B8] hover:text-[#111827] hover:bg-[#F8FAFC] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-2 divide-y divide-slate-100">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectService(item.name);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group flex items-center justify-between gap-3 min-h-[48px]"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
                  <span className="inline-block text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded mt-1.5">
                    {item.category}
                  </span>
                </div>

                <div className="shrink-0 text-slate-400 group-hover:text-slate-900 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 px-4">
              <p className="text-sm font-medium">No matching services found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 text-slate-400">Try searching for &quot;GST&quot;, &quot;Incorporation&quot;, or &quot;Trademark&quot;.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11.5px] text-slate-500 shrink-0">
          <span>Tip: Press ESC to exit</span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> All services backed by CA guarantee
          </span>
        </div>
      </div>
    </div>
  );
}
