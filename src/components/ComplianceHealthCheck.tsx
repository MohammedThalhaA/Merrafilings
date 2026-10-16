"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Zap,
  Info,
  RefreshCw,
} from "lucide-react";

interface ComplianceHealthCheckProps {
  onBookAudit?: () => void;
}

export default function ComplianceHealthCheck({ onBookAudit }: ComplianceHealthCheckProps) {
  const [stage, setStage] = useState<"early" | "growth" | "scale">("growth");
  const [compliances, setCompliances] = useState<Record<string, boolean>>({
    gst3b: true,
    rocAoc4: true,
    dir3Kyc: true,
    trademark: false,
    payrollPf: true,
    advanceTax: false,
  });

  const complianceItems = [
    {
      id: "gst3b",
      name: "Monthly GSTR-1 & 3B Filed",
      penaltyRisk: "₹50/day late fee + ITC block",
      frequency: "Monthly",
    },
    {
      id: "rocAoc4",
      name: "MCA Annual Return (AOC-4 & MGT-7)",
      penaltyRisk: "₹100/day continuous fine on company",
      frequency: "Annual",
    },
    {
      id: "dir3Kyc",
      name: "Director DIN e-KYC (DIR-3 KYC)",
      penaltyRisk: "₹5,000 late fee + DIN deactivation",
      frequency: "Annual",
    },
    {
      id: "trademark",
      name: "Brand Logo & Name Trademark Registered",
      penaltyRisk: "Competitor infringement & IP loss",
      frequency: "10-Year Lock",
    },
    {
      id: "payrollPf",
      name: "EPFO & ESIC Welfare Remittances",
      penaltyRisk: "12% interest + penal damages",
      frequency: "Monthly",
    },
    {
      id: "advanceTax",
      name: "Quarterly Advance Corporate Tax",
      penaltyRisk: "1% monthly penal interest u/s 234B/C",
      frequency: "Quarterly",
    },
  ];

  const toggleCompliance = (id: string) => {
    setCompliances((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(compliances).filter(Boolean).length;
  const totalCount = complianceItems.length;
  const score = Math.round((checkedCount / totalCount) * 100);

  const getStatus = () => {
    if (score >= 85) {
      return {
        label: "Low Statutory Risk",
        badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
        barColor: "bg-emerald-600",
        message: "Your company has sound compliance hygiene. Keep automated filings active to avoid unexpected penalty notices.",
        icon: ShieldCheck,
        iconColor: "text-emerald-600",
      };
    }
    if (score >= 50) {
      return {
        label: "Moderate Risk Detected",
        badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
        barColor: "bg-amber-500",
        message: "Key statutory filings are missing. You may be accruing compounding MCA or GST penalty liabilities.",
        icon: AlertTriangle,
        iconColor: "text-amber-500",
      };
    }
    return {
      label: "Critical Statutory Exposure",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
      barColor: "bg-rose-600",
      message: "Urgent: Defaulter status risk on MCA portal or GST registration cancellation. Immediate CA intervention recommended.",
      icon: ShieldAlert,
      iconColor: "text-rose-600",
    };
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  return (
    <section className="py-10 md:py-14 bg-white border-b border-slate-200/80 font-sans relative overflow-hidden" id="diagnostic">
      {/* Background glow blooms */}
      <div className="absolute top-1/3 -left-20 w-[450px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[300px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal="down" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3.5 py-1 rounded-full border border-emerald-100 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Interactive Risk Diagnostic</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0F172A] leading-[1.18]">
            Assess your startup’s compliance score in 30 seconds.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Select your operating compliances below to calculate your statutory risk score, identify hidden government penalty liabilities, and get instant CA remediation advice.
          </p>
        </div>

        {/* Diagnostic Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Checklists */}
          <div data-reveal="left" className="lg:col-span-7 bg-[#FAFBFB] rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            
            {/* Stage Selector Pills */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                1. Select Entity Stage
              </label>
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
                {[
                  { id: "early", label: "Seed / Pre-Revenue", sub: "0–1 yr" },
                  { id: "growth", label: "Growth Stage", sub: "₹20L–₹5Cr" },
                  { id: "scale", label: "Enterprise", sub: "₹5Cr+ Scale" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStage(s.id as any)}
                    className={`p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                      stage === s.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-xs font-semibold">{s.label}</p>
                    <p className={`text-[11px] mt-0.5 ${stage === s.id ? "text-slate-300" : "text-slate-400"}`}>
                      {s.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Checklist Items */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  2. Select Active Compliances You Maintain
                </label>
                <span className="text-[11px] text-slate-400 font-medium">Click to toggle</span>
              </div>

              <div className="space-y-2.5">
                {complianceItems.map((item) => {
                  const isChecked = !!compliances[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCompliance(item.id)}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer select-none group ${
                        isChecked
                          ? "bg-white border-slate-200/90 shadow-2xs hover:border-emerald-300"
                          : "bg-rose-50/40 border-rose-200/60 hover:bg-rose-50/70"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors shrink-0 ${
                            isChecked
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "border-slate-300 bg-white group-hover:border-slate-400"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs sm:text-[13px] font-medium leading-snug truncate ${isChecked ? "text-slate-900" : "text-rose-900 font-semibold"}`}>
                            {item.name}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {isChecked ? `Compliant • ${item.frequency}` : `Risk: ${item.penaltyRisk}`}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                          isChecked
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            : "bg-rose-100 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {isChecked ? "Active" : "Missing"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Live Health Score Output Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm text-left lg:sticky lg:top-24 self-start h-fit">
            
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Statutory Health Index
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${status.badgeColor}`}>
                    <StatusIcon className={`w-3.5 h-3.5 ${status.iconColor}`} />
                    {status.label}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-serif text-4xl sm:text-5xl font-normal text-slate-900">
                  {score}%
                </span>
                <p className="text-[11px] text-slate-400 font-medium">Compliance Index</p>
              </div>
            </div>

            {/* Dynamic Animated Meter */}
            <div className="mt-6">
              <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                <span>Statutory Compliance Rate</span>
                <span>{checkedCount} of {totalCount} Maintained</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200/60">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${status.barColor}`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>

            {/* Assessment Feedback */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              {status.message}
            </div>

            {/* Potential Penalty Estimate Box */}
            <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center justify-between text-xs font-semibold text-amber-900">
                <span>Estimated Penalty Exposure:</span>
                <span className="text-sm font-serif font-bold text-amber-950">
                  {score === 100 ? "₹0 (Zero Penalty)" : `₹${((totalCount - checkedCount) * 4500).toLocaleString("en-IN")}+`}
                </span>
              </div>
              <p className="text-[11px] text-amber-800/80 mt-1">
                {score === 100
                  ? "Flawless track record. Keep your annual filing calendar synced."
                  : "Includes compounding MCA delay fees and prospective department notices."}
              </p>
            </div>

            {/* Action CTA */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={onBookAudit}
                className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
              >
                <span>Request Free Comprehensive CA Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2 font-medium">
                Dual verification by certified Chartered Accountants &amp; Company Secretaries.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
