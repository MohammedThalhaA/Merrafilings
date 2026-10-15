"use client";

import React, { useState } from "react";
import { Clock, ShieldCheck, AlertCircle, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";

interface LiveDeadlinesTickerProps {
  onSelectDeadline?: (deadlineTitle: string) => void;
}

export default function LiveDeadlinesTicker({ onSelectDeadline }: LiveDeadlinesTickerProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const deadlines = [
    {
      id: "gstr-3b",
      title: "GSTR-3B Return",
      subtitle: "Monthly Summary Filing",
      dueDate: "20th Oct",
      status: "Active Portal",
      statusType: "urgent", // urgent, active, upcoming
      daysLeft: "5 Days Left",
      desc: "Mandatory monthly filing for regular taxpayers. Reconcile input credit with GSTR-2B before generation.",
    },
    {
      id: "dir-3",
      title: "DIR-3 KYC",
      subtitle: "Director Verification",
      dueDate: "30th Oct",
      status: "Active Filing",
      statusType: "active",
      daysLeft: "15 Days Left",
      desc: "Annual mandatory KYC for all DIN holders to prevent deactivation and heavy ₹5,000 late fees.",
    },
    {
      id: "aoc-4",
      title: "MCA AOC-4",
      subtitle: "Financial Statements",
      dueDate: "30th Oct",
      status: "Statutory ROC",
      statusType: "active",
      daysLeft: "15 Days Left",
      desc: "Mandatory filing of audited balance sheet and P&L under Companies Act for FY 2024-25.",
    },
    {
      id: "tds-challan",
      title: "TDS Deposit",
      subtitle: "Challan ITNS-281",
      dueDate: "7th Nov",
      status: "Upcoming",
      statusType: "upcoming",
      daysLeft: "23 Days Left",
      desc: "Payment of tax deducted at source for contractor, professional fees, and salary payments.",
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-[#FBFBFA] border-b border-slate-200/80 font-sans">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ticker Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Statutory Compliance Calendar &amp; Active Deadlines
            </span>
            <span className="text-[11px] text-slate-500 hidden md:inline">
              | Live sync with GSTN &amp; MCA V3 Portals
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Updated Daily by CA Desk</span>
          </div>
        </div>

        {/* 4 Interactive Deadline Cards Grid with Micro-Hover Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {deadlines.map((item, idx) => {
            const isHovered = selectedIdx === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedIdx(idx)}
                onMouseLeave={() => setSelectedIdx(null)}
                onClick={() => onSelectDeadline && onSelectDeadline(item.title)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isHovered
                    ? "bg-white border-slate-300 shadow-md -translate-y-1"
                    : "bg-white/90 border-slate-200/90 shadow-2xs hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${
                      item.statusType === "urgent"
                        ? "bg-amber-50 text-amber-800 border-amber-200"
                        : item.statusType === "active"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-blue-50 text-blue-800 border-blue-200"
                    }`}>
                      {item.daysLeft}
                    </span>
                    <span className="text-xs font-semibold text-slate-900">
                      Due: {item.dueDate}
                    </span>
                  </div>

                  <h4 className="font-serif text-base text-slate-900 font-normal leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    CA Assistance
                  </span>
                  <span className="text-emerald-700 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    File Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
