"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Cpu,
  UtensilsCrossed,
  HeartPulse,
  HardHat,
  Globe2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface IndustrySolutionsGridProps {
  onSelectIndustry?: (industry: string) => void;
}

export default function IndustrySolutionsGrid({ onSelectIndustry }: IndustrySolutionsGridProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const industries = [
    {
      id: "d2c",
      category: "d2c",
      name: "D2C Brands & Quick-Commerce",
      tagline: "Multi-warehouse GST & Legal Metrology for Amazon, Flipkart & Blinkit sellers",
      icon: ShoppingBag,
      iconColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
      sla: "3–5 Days Setup",
      mandates: [
        "Multi-State GST with Principal Place of Business (PPOB) & APOB",
        "Legal Metrology Packaged Commodities Rule (LMPC) certification",
        "FSSAI food license for consumables & trademark registration",
      ],
      advisorQuote: "Essential for sellers storing inventory in Pan-India 3PL fulfillment centers.",
    },
    {
      id: "saas",
      category: "tech",
      name: "SaaS, AI & High-Growth Startups",
      tagline: "Tax-exempt corporate structuring for VC fundraising and global expansion",
      icon: Cpu,
      iconColor: "text-blue-700 bg-blue-50 border-blue-100",
      sla: "3 Days Fast-Track",
      mandates: [
        "Pvt Ltd incorporation with clean 10,000,000 authorized equity capital",
        "DPIIT Startup India 3-Year 100% Tax Exemption (Section 80-IAC)",
        "PAS-3 share allotment filing for angel rounds & SAFE notes",
      ],
      advisorQuote: "Ensures cap table readiness before seed and pre-Series A institutional checks.",
    },
    {
      id: "food",
      category: "hospitality",
      name: "Food, Cloud Kitchens & QSRs",
      tagline: "Complete licensing to launch on Swiggy, Zomato & offline commercial kitchens",
      icon: UtensilsCrossed,
      iconColor: "text-amber-700 bg-amber-50 border-amber-100",
      sla: "5–7 Days Setup",
      mandates: [
        "FSSAI State or Central Manufacturing & Repacking license",
        "Municipal Health Trade License & Shop & Establishment registration",
        "Fire Department NOC and Eating House police clearance",
      ],
      advisorQuote: "100% inspection-compliant documentation for multi-city kitchen rollouts.",
    },
    {
      id: "pharma",
      category: "healthcare",
      name: "Healthcare, Pharma & Ayush",
      tagline: "Stringent regulatory clearances for clinics, labs & nutraceutical producers",
      icon: HeartPulse,
      iconColor: "text-rose-700 bg-rose-50 border-rose-100",
      sla: "7–14 Days SLA",
      mandates: [
        "State Drug Controller Wholesale / Retail Drug License (Form 20B/21B)",
        "Ayush Manufacturing license for herbal supplements and cosmetics",
        "State Pollution Control Board Bio-Medical Waste Management consent",
      ],
      advisorQuote: "Vetted by specialized medical jurisprudence attorneys and regulatory CAs.",
    },
    {
      id: "infra",
      category: "infra",
      name: "Infrastructure, EPC & Real Estate",
      tagline: "RERA, contractor licenses & statutory labour compliance for builders",
      icon: HardHat,
      iconColor: "text-slate-800 bg-slate-100 border-slate-200",
      sla: "5–10 Days SLA",
      mandates: [
        "RERA Promoter & Real Estate Project registration and escrow bank account",
        "Contract Labour (Regulation & Abolition) Act registration",
        "EPFO & ESIC site worker coverage and Factory Act clearances",
      ],
      advisorQuote: "Protects developers from compounding RERA delay penalties and labour stops.",
    },
    {
      id: "export",
      category: "trade",
      name: "Export, Import & Global Trade",
      tagline: "Zero-rated tax benefits and international trade authorizations from DGFT",
      icon: Globe2,
      iconColor: "text-teal-700 bg-teal-50 border-teal-100",
      sla: "24–48 Hours",
      mandates: [
        "Instant Import Export Code (IEC) issuance from DGFT portal",
        "GST Letter of Undertaking (LUT) for zero-rated export of services",
        "AD Code registration at Indian sea/air customs ports for duty drawbacks",
      ],
      advisorQuote: "Maximizes duty drawback refunds and eliminates GST blockage on outward invoices.",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Industries" },
    { id: "d2c", label: "D2C & Retail" },
    { id: "tech", label: "SaaS & AI" },
    { id: "hospitality", label: "Food & Cloud Kitchen" },
    { id: "healthcare", label: "Healthcare" },
    { id: "trade", label: "Global Trade" },
  ];

  const filtered = activeTab === "all"
    ? industries
    : industries.filter((item) => item.category === activeTab);

  return (
    <section data-reveal className="py-10 md:py-14 bg-[#FAFBFB] border-b border-slate-200/80 font-sans relative overflow-hidden" id="industries">
      {/* Decorative ambient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-100/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3.5 py-1 rounded-full border border-emerald-100 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tailored Industry Blueprints</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0F172A] leading-[1.18]">
            Built for the specific regulatory demands of your sector.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Every business vertical in India has unique statutory codes. Explore purpose-engineered compliance packs curated by domain-specialist Chartered Accountants.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0F172A] text-white shadow-xs scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectIndustry && onSelectIndustry(item.name)}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300/80 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
              >
                <div>
                  {/* Top Bar: Icon + SLA */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-110 group-hover:rotate-1 transition-transform duration-300 ${item.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-800 group-hover:border-emerald-200 transition-colors">
                      {item.sla}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.tagline}
                  </p>

                  {/* Mandates Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Standard Regulatory Inclusions
                    </p>
                    {item.mandates.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Advisor Note & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 italic">
                    &ldquo;{item.advisorQuote}&rdquo;
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    <span>Deploy Industry Blueprint</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
