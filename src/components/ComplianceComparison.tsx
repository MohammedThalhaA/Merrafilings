"use client";

import React from "react";
import { Check, X, ShieldCheck, Sparkles, ArrowRight, Zap, HelpCircle } from "lucide-react";

interface ComplianceComparisonProps {
  onGetStarted?: () => void;
}

export default function ComplianceComparison({ onGetStarted }: ComplianceComparisonProps) {
  const comparisons = [
    {
      feature: "Turnaround Time for Pvt Ltd Incorporation",
      traditional: "15 to 25 Days (Manual iterations)",
      diy: "20 to 45 Days (Common form resubmissions)",
      merrafilings: "3 to 5 Business Days (Fast-Track Spice+)",
      isHighlighted: true,
    },
    {
      feature: "Statutory Filing Rejection Protection",
      traditional: "Extra professional fees charged per resubmission",
      diy: "Govt fees forfeited on technical rejection",
      merrafilings: "100% Free re-drafting & CA sign-off guarantee",
      isHighlighted: true,
    },
    {
      feature: "Dedicated Professional Guidance",
      traditional: "Delegated to junior office interns",
      diy: "Zero human help; confusing portal error codes",
      merrafilings: "Assigned Senior Chartered Accountant & CS",
      isHighlighted: true,
    },
    {
      feature: "GST Input Tax Credit (ITC) Reconciliation",
      traditional: "Once a year at balance sheet finalization",
      diy: "Manual Excel matching line-by-line",
      merrafilings: "Monthly CA verification & 2B reconciliation before filing",
      isHighlighted: true,
    },
    {
      feature: "Statutory Deadline WhatsApp & SMS Radar",
      traditional: "Occasional reminders or missed deadlines",
      diy: "Zero notifications; founder tracks on calendar",
      merrafilings: "Automated 15-day prior radar with ₹0 late fee SLA",
      isHighlighted: true,
    },
    {
      feature: "Encrypted Cloud Document Repository",
      traditional: "Loose physical paper files & random PDFs",
      diy: "Scattered downloads across browser history",
      merrafilings: "Bank-grade 256-bit encrypted digital vault 24/7",
      isHighlighted: true,
    },
    {
      feature: "Pricing Transparency & Billing",
      traditional: "Vague initial quote; hidden surprise out-of-pocket bills",
      diy: "Hidden penalties from overlooked stamp duties",
      merrafilings: "100% Transparent upfront fixed fees. Zero surprises.",
      isHighlighted: true,
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#FAFBFB] border-b border-slate-200/80 font-sans relative overflow-hidden" id="comparison">
      {/* Dynamic ambient bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-emerald-100/25 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div data-reveal="down" className="text-center max-w-3xl mx-auto mb-7 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3.5 py-1 rounded-full border border-emerald-100 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Capability Comparison</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0F172A] leading-[1.18]">
            Why 45,000+ businesses upgrade to Merrafilings.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            See how our dedicated CA &amp; CS corporate care compares to traditional unorganized consultants and frustrating DIY government portals.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div data-reveal="up" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/90 bg-[#FAFBFB]">
                  <th className="py-5 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 w-2/5">
                    Service Benchmark
                  </th>
                  <th className="py-5 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 w-1/5">
                    Traditional Local CA
                  </th>
                  <th className="py-5 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 w-1/5">
                    DIY Govt Portals
                  </th>
                  <th className="py-5 px-6 text-xs font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-50/80 border-l border-emerald-200/60 w-1/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Merrafilings Platform</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.diy}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-emerald-900 bg-emerald-50/40 border-l border-emerald-100">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                        <span>{row.merrafilings}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Callout */}
          <div className="p-6 bg-[#FAFBFB] border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  Backed by 100% Statutory Compliance Guarantee
                </p>
                <p className="text-[11px] text-slate-500">
                  Zero hidden costs. Zero missed deadlines. Complete audit preparedness.
                </p>
              </div>
            </div>

            <button
              onClick={onGetStarted}
              className="py-2.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Switch to Merrafilings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
