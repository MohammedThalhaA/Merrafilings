"use client";

import React from "react";
import { ArrowRight, Building2, Receipt, Landmark, CreditCard, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function HeroSection({ onGetStarted, onSelectCategory }: HeroSectionProps) {
  const quickCategories = [
    {
      id: "startup",
      name: "Startup",
      desc: "Company, LLP & OPC",
      icon: Building2,
      iconBg: "bg-[#DCFCE7] text-[#15803D]",
      borderHover: "hover:border-[#15803D]/40",
    },
    {
      id: "gst",
      name: "GST",
      desc: "Registration, returns & ...",
      icon: Receipt,
      iconBg: "bg-[#DBEAFE] text-[#155EEF]",
      borderHover: "hover:border-[#155EEF]/40",
    },
    {
      id: "mca",
      name: "MCA",
      desc: "ROC filings & director...",
      icon: Landmark,
      iconBg: "bg-[#F3E8FF] text-[#7C3AED]",
      borderHover: "hover:border-[#7C3AED]/40",
    },
    {
      id: "income-tax",
      name: "Income Tax Filing",
      desc: "ITR filing, TDS returns & tax...",
      icon: CreditCard,
      iconBg: "bg-[#FFEDD5] text-[#EA580C]",
      borderHover: "hover:border-[#EA580C]/40",
    },
    {
      id: "trademark",
      name: "Trademark",
      desc: "Search, filing & brand...",
      icon: ShieldCheck,
      iconBg: "bg-[#CCFBF1] text-[#0D9488]",
      borderHover: "hover:border-[#0D9488]/40",
    },
  ];

  return (
    <section className="relative pt-16 pb-14 md:pt-24 md:pb-20 bg-white overflow-hidden">
      {/* Subtle organic light backdrop tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/50 via-white to-white pointer-events-none" />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 relative z-10 text-center">
        {/* Main Editorial Headline */}
        <h1 className="font-serif text-[38px] sm:text-[46px] md:text-[54px] lg:text-[58px] font-normal tracking-tight text-[#111827] leading-[1.12] max-w-[1040px] mx-auto transition-all">
          India&apos;s Largest AI-Powered
          <br className="hidden sm:inline" />
          <span className="block mt-1 sm:mt-0 font-serif">
            Corporate Services &amp; Compliance Platform
          </span>
        </h1>

        {/* Subtitle Value Proposition */}
        <p className="mt-6 text-[15px] sm:text-[16px] md:text-[17px] text-[#475467] max-w-[820px] mx-auto font-sans leading-relaxed">
          Join millions who trust MerraFilings to simplify MCA, GST, and Income Tax compliance with AI
          automation, expert support, paperless workflows, and secure cloud storage.
        </p>

        {/* Primary CTA Pill Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3 text-[15px] font-semibold text-white bg-[#111827] hover:bg-[#1f2937] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded-full transition-all duration-200 cursor-pointer group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom Quick Category Strip (Screenshot 1 Bottom) */}
        <div className="mt-14 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 xl:gap-5">
            {quickCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectCategory && onSelectCategory(item.id)}
                  className={`bg-white rounded-xl sm:rounded-2xl border border-[#E4E7EC] p-3.5 sm:p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/5 cursor-pointer group ${item.borderHover}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 ${item.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] font-semibold text-[#111827] group-hover:text-[#155EEF] transition-colors truncate">
                        {item.name}
                      </h3>
                      <p className="text-[12px] text-[#475467] truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
