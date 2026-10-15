"use client";

import React, { useState } from "react";
import {
  Building2,
  FileText,
  Landmark,
  CreditCard,
  ShieldCheck,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface BusinessSolutionsGridProps {
  onSelectSolution?: (title: string) => void;
}

export default function BusinessSolutionsGrid({ onSelectSolution }: BusinessSolutionsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Capabilities" },
    { id: "incorporation", label: "Startup & Incorporation" },
    { id: "tax", label: "GST & Direct Tax" },
    { id: "mca", label: "MCA & Secretarial" },
    { id: "ip", label: "Trademarks & IP" },
    { id: "licenses", label: "Licenses & Government" },
  ];

  const solutions = [
    {
      id: "business-registration",
      category: "incorporation",
      tag: "3-5 Days Fast Track",
      title: "Business Incorporation",
      startingPrice: "From ₹4,999",
      icon: Building2,
      iconBg: "bg-sky-50 text-sky-700 border border-sky-100",
      description:
        "Private Limited, LLP, and One Person Company setup with fast-track DIN, Class 3 DSC, and PAN allotment in 3 days.",
      features: [
        "SPICe+ Part A & B filing on MCA V3",
        "Certificate of Incorporation + PAN & TAN",
        "Free Bank Account Opening Assistance",
      ],
      buttonText: "Explore Incorporation",
    },
    {
      id: "gst-compliance",
      category: "tax",
      tag: "100% ITC Reconciliation",
      title: "GST Compliance & Returns",
      startingPrice: "From ₹999/mo",
      icon: FileText,
      iconBg: "bg-emerald-50 text-emerald-700 border border-emerald-100",
      description:
        "GST registration, monthly GSTR-1 & 3B return filing, automated GSTR-2B purchase reconciliation, and notice resolution.",
      features: [
        "Automated 2B vendor invoice matching",
        "GSTR-1, 3B, and annual GSTR-9 filing",
        "Scrutiny notices & audit support by CA",
      ],
      buttonText: "Explore GST Services",
    },
    {
      id: "mca-compliance",
      category: "mca",
      tag: "Zero Penalty Guarantee",
      title: "MCA & Secretarial Cloud",
      startingPrice: "From ₹3,499/yr",
      icon: Landmark,
      iconBg: "bg-purple-50 text-purple-700 border border-purple-100",
      description:
        "Annual ROC financial filing (AOC-4), annual return (MGT-7), director DIR-3 KYC, and corporate share capital changes.",
      features: [
        "AOC-4 financial statements & XBRL filing",
        "DIR-3 KYC annual director updates",
        "Board resolutions vetted by CS",
      ],
      buttonText: "Explore MCA Services",
    },
    {
      id: "income-tax-filing",
      category: "tax",
      tag: "Dual CA Verification",
      title: "Income Tax & Corporate ITR",
      startingPrice: "From ₹1,499",
      icon: CreditCard,
      iconBg: "bg-amber-50 text-amber-700 border border-amber-100",
      description:
        "Corporate ITR-6, individual tax filing, quarterly TDS returns, advance tax computation, and tax exemption planning.",
      features: [
        "ITR-1 through ITR-7 multi-entity returns",
        "Quarterly TDS returns (Form 24Q / 26Q)",
        "15CA & 15CB foreign remittance certification",
      ],
      buttonText: "Explore Tax Filing",
    },
    {
      id: "trademark-protection",
      category: "ip",
      tag: "National IP Watch",
      title: "Trademark & Brand Defense",
      startingPrice: "From ₹1,999",
      icon: ShieldCheck,
      iconBg: "bg-rose-50 text-rose-700 border border-rose-100",
      description:
        "Same-day trademark filing across Classes 1-45, trademark objection rebuttals, hearings, and continuous brand watch.",
      features: [
        "Comprehensive phonetic & Vienna search",
        "Government TM application drafting & filing",
        "Objection reply & legal hearing defense",
      ],
      buttonText: "Explore Trademarks",
    },
    {
      id: "hr-payroll",
      category: "licenses",
      tag: "Government Accreditations",
      title: "Labour & Government Licenses",
      startingPrice: "From ₹1,499",
      icon: Mail,
      iconBg: "bg-teal-50 text-teal-700 border border-teal-100",
      description:
        "Startup India DPIIT recognition (80-IAC tax holiday), FSSAI food licensing, Udyam MSME certificate, and EPFO/ESIC.",
      features: [
        "Startup India DPIIT 3-year tax holiday",
        "FSSAI food registration & state licenses",
        "Udyam registration for priority lending",
      ],
      buttonText: "Explore Licenses",
    },
  ];

  const filtered = activeFilter === "all"
    ? solutions
    : solutions.filter((s) => s.category === activeFilter);

  return (
    <section data-reveal className="py-10 md:py-14 bg-white border-b border-slate-200/80 font-sans" id="solutions">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[820px] mx-auto mb-7 md:mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-100 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Core Regulatory Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight leading-[1.18]">
            Comprehensive solutions for every stage of your business.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From your first name approval to ongoing statutory audits, our qualified legal and tax practitioners manage regulatory complexities so you can focus on building.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-slate-900 text-white shadow-xs scale-102"
                  : "bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Clean Editorial Cards Grid with Dynamic Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => onSelectSolution && onSelectSolution(item.title)}
                className="group bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer animate-in fade-in zoom-in-95"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 ${item.iconBg}`}>
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Starting Price */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-normal text-[#0F172A] tracking-tight group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {item.startingPrice}
                  </p>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Action Link */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-800 group-hover:text-emerald-800 transition-colors">
                    {item.buttonText}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
