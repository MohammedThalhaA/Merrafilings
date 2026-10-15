"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Clock, ArrowUpRight } from "lucide-react";

interface RealtimeFilingsMarqueeProps {
  onSelectEvent?: (title: string) => void;
}

export default function RealtimeFilingsMarquee({ onSelectEvent }: RealtimeFilingsMarqueeProps) {
  const filings = [
    {
      type: "Pvt Ltd Incorporation",
      state: "Bengaluru, KA",
      status: "ROC Approved",
      time: "4 mins ago",
      turnaround: "SLA: 3 Days",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      type: "Trademark TM-A (Class 35)",
      state: "Mumbai, MH",
      status: "IP India Lodged",
      time: "9 mins ago",
      turnaround: "Same-Day Filing",
      iconColor: "text-teal-600 bg-teal-50 border-teal-200",
    },
    {
      type: "GSTR-3B Tax Return",
      state: "Delhi NCR",
      status: "GSTN Verified",
      time: "14 mins ago",
      turnaround: "100% ITC Matched",
      iconColor: "text-sky-600 bg-sky-50 border-sky-200",
    },
    {
      type: "DPIIT Startup India 80-IAC",
      state: "Hyderabad, TS",
      status: "Exemption Issued",
      time: "21 mins ago",
      turnaround: "Tax Holiday Validated",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      type: "DIR-3 KYC Director Updates",
      state: "Chennai, TN",
      status: "MCA V3 Authenticated",
      time: "27 mins ago",
      turnaround: "Zero Late Fee",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      type: "FSSAI Central Food License",
      state: "Ahmedabad, GJ",
      status: "FoSCal Approved",
      time: "33 mins ago",
      turnaround: "5-Year License",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      type: "LLP Annual ROC Form 11",
      state: "Pune, MH",
      status: "MCA Lodged",
      time: "39 mins ago",
      turnaround: "Dual CS Sign-Off",
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      type: "IEC Import Export Code",
      state: "Kolkata, WB",
      status: "DGFT Verified",
      time: "44 mins ago",
      turnaround: "Instant Certificate",
      iconColor: "text-teal-600 bg-teal-50 border-teal-200",
    },
  ];

  // Duplicate for seamless infinite loop
  const displayFilings = [...filings, ...filings];

  return (
    <div className="bg-[#FAFBFB] border-y border-slate-200/80 py-3 overflow-hidden font-sans select-none relative">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFBFB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFBFB] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-4">
        {/* Static Lead Label with Live Radar Pulse */}
        <div className="shrink-0 flex items-center gap-2 pl-4 sm:pl-6 z-20 bg-[#FAFBFB] pr-3 border-r border-slate-200/90">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-800 uppercase tracking-wider whitespace-nowrap">
            Live Statutory Activity
          </span>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-3">
            {displayFilings.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectEvent && onSelectEvent(item.type)}
                className="shrink-0 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all duration-200 cursor-pointer group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.type}
                </span>
                <span className="text-[11px] text-slate-400">•</span>
                <span className="text-[11px] text-slate-500 font-medium">{item.state}</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 border border-emerald-100 px-2 py-0.5 rounded-full">
                  {item.status}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
