"use client";

import React, { useState } from "react";
import {
  BellRing,
  ExternalLink,
  Calendar,
  AlertCircle,
  FileCheck,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface RegulatoryGazetteRadarProps {
  onConsultUpdate?: (title: string) => void;
}

export default function RegulatoryGazetteRadar({ onConsultUpdate }: RegulatoryGazetteRadarProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const circulars = [
    {
      id: "mca-1",
      authority: "Ministry of Corporate Affairs (MCA)",
      category: "mca",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      circularNo: "MCA GSR 412(E)",
      date: "Effective Immediately",
      impact: "High Impact",
      impactColor: "bg-rose-50 text-rose-700 border-rose-200",
      title: "Mandatory Geo-Tagging for Registered Offices in Form INC-22",
      summary: "All newly incorporated companies and companies changing registered office must upload geo-tagged photographs of the premises along with at least one director present.",
      takeaway: "Our incorporation desk automatically verifies GIS coordinates during drafting to prevent MCA V3 rejection.",
    },
    {
      id: "gst-1",
      authority: "CBIC / GST Council",
      category: "gst",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
      circularNo: "Notification No. 04/2024",
      date: "Active Pan-India",
      impact: "Critical",
      impactColor: "bg-rose-50 text-rose-700 border-rose-200",
      title: "Mandatory Biometric Aadhaar Verification for New GST Registrations",
      summary: "Applicants flagged by automated risk parameters are routed through biometric facilitation centers to curb fly-by-night shell invoicing networks.",
      takeaway: "Merrafilings prepares verified business proofs, NOCs, and electricity bills to fast-track approval without physical scrutiny.",
    },
    {
      id: "it-1",
      authority: "Income Tax Department (CBDT)",
      category: "tax",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      circularNo: "Section 44AD / 44ADA",
      date: "FY 2024–25 Ongoing",
      impact: "Favorable Tax Benefit",
      impactColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Enhanced Presumptive Taxation Limit to ₹3 Crore for Digital MSMEs",
      summary: "Eligible businesses with cash receipts not exceeding 5% can declare profits under presumptive taxation up to ₹3 Crore turnover without statutory tax audit.",
      takeaway: "Saves eligible founders up to ₹45,000 in mandatory audit costs while ensuring full tax hygiene.",
    },
    {
      id: "ip-1",
      authority: "IP India / Trade Marks Registry",
      category: "trademark",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
      circularNo: "CGPDTM Public Notice 2024",
      date: "Rolling Examination",
      impact: "Fast-Track Privilege",
      impactColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Expedited Examination (Form TM-M) for DPIIT Recognized Startups",
      summary: "Startups with valid DPIIT recognition certificates can jump standard 18-month trademark examination queues to secure brand registration within 90 days.",
      takeaway: "We bundle DPIIT recognition and TM expedited filing together for rapid venture launch.",
    },
  ];

  const filtered = activeFilter === "all"
    ? circulars
    : circulars.filter((c) => c.category === activeFilter);

  return (
    <section className="py-10 md:py-14 bg-white border-b border-slate-200/80 font-sans relative overflow-hidden" id="gazette">
      {/* Background glow blooms */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div data-reveal="down" className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 px-3.5 py-1 rounded-full border border-emerald-100 mb-3 shadow-2xs">
            <BellRing className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
            <span>Real-Time Regulatory Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0F172A] leading-[1.18]">
            Stay ahead of Indian regulatory shifts.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Our in-house corporate legal research desk monitors daily gazette circulars from MCA, GSTN, CBDT, and IP India to protect your business from statutory surprise.
          </p>
        </div>

        {/* Filter Pills */}
        <div data-reveal="zoom" className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Regulatory Circulars" },
            { id: "mca", label: "MCA & ROC" },
            { id: "gst", label: "GST & Indirect Tax" },
            { id: "tax", label: "Income Tax & CBDT" },
            { id: "trademark", label: "IP India & Brands" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#0F172A] text-white shadow-xs scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gazette Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filtered.map((item, idx) => {
            const revealDir = idx % 2 === 0 ? "left" : "right";
            const staggerClass = `stagger-${(idx % 2) + 1}`;

            return (
              <div
                key={item.id}
                data-reveal={revealDir}
                className={`bg-[#FAFBFB] rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-300/80 transition-all duration-300 flex flex-col justify-between group text-left ${staggerClass}`}
              >
              <div>
                {/* Meta bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.authority}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.impactColor}`}>
                      {item.impact}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {item.circularNo}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-normal text-slate-900 mt-2 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* CA Takeaway Box */}
                <div className="mt-4 p-3.5 rounded-2xl bg-white border border-slate-200/90">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-800 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Merrafilings CA Action Plan:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item.takeaway}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                <span className="flex items-center gap-1.5 text-slate-500 font-normal">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.date}
                </span>
                <button
                  onClick={() => onConsultUpdate && onConsultUpdate(item.title)}
                  className="inline-flex items-center gap-1.5 py-2.5 min-h-[44px] cursor-pointer hover:underline text-xs font-semibold text-slate-900 group-hover:text-emerald-700"
                >
                  <span>Consult Advisory Team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
        </div>

      </div>
    </section>
  );
}
