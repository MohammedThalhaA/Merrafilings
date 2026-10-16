"use client";

import React from "react";
import { ArrowRight, Building2, Receipt, Landmark, CreditCard, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function HeroSection({ onGetStarted, onSelectCategory }: HeroSectionProps) {
  const quickCategories = [
    {
      id: "startup",
      name: "Startup & Incorporation",
      desc: "Pvt Ltd, LLP & OPC in 3 Days",
      icon: Building2,
      iconBg: "bg-emerald-50 text-emerald-700 border border-emerald-100",
      borderHover: "hover:border-emerald-300 hover:shadow-emerald-500/5",
      accentColor: "group-hover:text-emerald-700",
    },
    {
      id: "gst",
      name: "GST Compliance",
      desc: "Registration, Returns & 2B Match",
      icon: Receipt,
      iconBg: "bg-sky-50 text-sky-700 border border-sky-100",
      borderHover: "hover:border-sky-300 hover:shadow-sky-500/5",
      accentColor: "group-hover:text-sky-700",
    },
    {
      id: "mca",
      name: "MCA Secretarial Cloud",
      desc: "ROC Annual Filings & Director KYC",
      icon: Landmark,
      iconBg: "bg-purple-50 text-purple-700 border border-purple-100",
      borderHover: "hover:border-purple-300 hover:shadow-purple-500/5",
      accentColor: "group-hover:text-purple-700",
    },
    {
      id: "income-tax",
      name: "Income Tax & TDS",
      desc: "ITR Filing & Tax Optimization",
      icon: CreditCard,
      iconBg: "bg-amber-50 text-amber-700 border border-amber-100",
      borderHover: "hover:border-amber-300 hover:shadow-amber-500/5",
      accentColor: "group-hover:text-amber-700",
    },
    {
      id: "trademark",
      name: "Trademark Protection",
      desc: "Brand Search, Filing & Watch",
      icon: ShieldCheck,
      iconBg: "bg-teal-50 text-teal-700 border border-teal-100",
      borderHover: "hover:border-teal-300 hover:shadow-teal-500/5",
      accentColor: "group-hover:text-teal-700",
    },
  ];

  return (
    <section className="hero-section no-reveal is-revealed relative pt-10 pb-10 md:pt-14 md:pb-14 bg-white overflow-hidden font-sans">
      {/* Dynamic ambient floating light blooms */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-emerald-100/40 via-teal-100/20 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-10 right-1/4 w-[450px] h-[300px] bg-gradient-to-bl from-blue-100/30 via-slate-100/30 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFA]/60 via-white to-white pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Refined Editorial Kicker with Live Pulsing Dot */}
        <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-[11px] sm:text-xs font-medium tracking-tight shadow-xs hover:border-slate-300 transition-colors max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="truncate">Direct MCA V3 &amp; GSTN Infrastructure</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold whitespace-nowrap">Dual CA/CS Vetted</span>
          </div>
        </div>

        {/* Main Editorial Serif Headline */}
        <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-normal tracking-tight text-[#0F172A] leading-[1.15] max-w-[1020px] mx-auto transition-all animate-in fade-in slide-in-from-top-3 duration-500">
          Modern Corporate Legal &amp; Compliance Services,{" "}
          <span className="italic text-slate-700">
            Thoughtfully Simplified.
          </span>
        </h1>

        {/* Subtitle Value Proposition */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-[760px] mx-auto font-sans leading-relaxed font-normal animate-in fade-in slide-in-from-top-4 duration-500">
          Incorporate your Private Limited company in 3 days, automate GST and MCA filings, protect trademarks, and maintain flawless statutory records — backed by certified Chartered Accountants.
        </p>

        {/* Primary Action Button Row */}
        <div className="mt-7 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-top-5 duration-500 max-w-md mx-auto xs:max-w-none">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 rounded-full transition-all duration-300 cursor-pointer group shadow-sm min-h-[44px]"
          >
            <span>Start Your Business</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onGetStarted}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full transition-all duration-300 cursor-pointer shadow-2xs hover:-translate-y-0.5 min-h-[44px]"
          >
            <span>Consult a Senior CA</span>
          </button>
        </div>

        {/* Quick Trending Service Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
          <span className="text-slate-400 font-medium">Trending:</span>
          {[
            { label: "Pvt Ltd Company", cat: "startup" },
            { label: "GST Registration", cat: "gst" },
            { label: "Trademark ™", cat: "trademark" },
            { label: "DIR-3 KYC", cat: "mca" },
            { label: "DPIIT Recognition", cat: "startup" },
          ].map((chip, cIdx) => (
            <button
              key={cIdx}
              onClick={() => onSelectCategory && onSelectCategory(chip.cat)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer text-[11.5px]"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Bottom Quick Category Strip with Hover Animations */}
        <div className="mt-10 sm:mt-14 md:mt-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 xl:gap-5">
            {quickCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectCategory && onSelectCategory(item.id)}
                  className={`bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 cursor-pointer group ${item.borderHover}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 ${item.iconBg}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`text-xs sm:text-[13.5px] font-semibold text-[#0F172A] ${item.accentColor} transition-colors truncate`}>
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle Trust Proof Row */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            250,000+ Indian Businesses Formed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            99.8% First-Time Approval Rate
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ₹1,400+ Cr Statutory Tax Reconciled
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            4.9 / 5.0 Rating from Verified Founders
          </span>
        </div>

      </div>
    </section>
  );
}
