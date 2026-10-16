"use client";

import React from "react";
import { ShieldCheck, Award, Zap, Building2, CheckCircle2 } from "lucide-react";

export default function ClientLogos() {
  const brands = [
    { name: "Thinai Organics", category: "Agri-Tech & FMCG", state: "Tamil Nadu", highlight: "FSSAI & Trademark" },
    { name: "Chennai Kulfi", category: "Food Franchise (80+ Outlets)", state: "Pan-India", highlight: "Multi-State GST" },
    { name: "Rock Enterprises", category: "Infrastructure & EPC", state: "Karnataka", highlight: "Pvt Ltd & ROC Filing" },
    { name: "Iceil Systems", category: "Architectural Lighting", state: "Telangana", highlight: "GST Input Reconciled" },
    { name: "NeoPay Logistics", category: "Supply Chain Tech", state: "Maharashtra", highlight: "EPFO & Payroll Setup" },
    { name: "Vyapar Health", category: "Healthcare SaaS", state: "Delhi NCR", highlight: "Incorporation & DPIIT" },
  ];

  const badges = [
    { label: "Direct MCA V3 Integration", icon: ShieldCheck },
    { label: "GSTN Authorized GSP Data Pipe", icon: Zap },
    { label: "IP India Registered Agents", icon: Award },
    { label: "Certified CA & CS Network", icon: Building2 },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#FBFBFA] border-y border-slate-200/70 font-sans">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        
        {/* Section Header */}
        <div data-reveal="down" className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            PROVEN TRACK RECORD ACROSS 28 STATES &amp; 8 UTS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F172A] tracking-tight">
            Powering ambitious startups, MSMEs, and enterprises across India.
          </h2>
        </div>

        {/* Brand Grid with Multi-Directional Entrance Animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {brands.map((brand, idx) => {
            const revealDir = idx < 2 ? "left" : idx < 4 ? "up" : "right";
            const staggerClass = `stagger-${idx + 1}`;

            return (
              <div
                key={idx}
                data-reveal={revealDir}
                className={`bg-white rounded-xl p-4 text-center border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between ${staggerClass}`}
              >
                <div>
                  <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
                    {brand.state}
                  </span>
                  <p className="text-[13.5px] font-semibold text-[#0F172A]">
                    {brand.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {brand.category}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100">
                  <span className="inline-block text-[10.5px] font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-100/60">
                    ✓ {brand.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statutory Accreditations Bar */}
        <div data-reveal="up" className="mt-10 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 font-medium"
              >
                <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{b.label}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
