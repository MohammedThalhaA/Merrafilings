"use client";

import React, { useState } from "react";
import {
  Building2,
  FileCheck2,
  Landmark,
  Receipt,
  ShieldCheck,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface AIComplianceCloudProps {
  onExplore?: () => void;
  onBookDemo?: () => void;
}

export default function AIComplianceCloud({ onExplore, onBookDemo }: AIComplianceCloudProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 0,
      title: "Business Registration",
      icon: Building2,
      color: "#2563EB",
      stroke: "#60A5FA",
      tag: "SPICe+ Part B & RUN Integration",
      detail: "Direct MCA V3 integration with automated DIN & PAN generation",
    },
    {
      id: 1,
      title: "GST Compliance",
      icon: FileCheck2,
      color: "#16A34A",
      stroke: "#4ADE80",
      tag: "GSP / GSTN Direct Pipe",
      detail: "Instant GSTR-1, 3B auto-filing & 2B invoice reconciliation",
    },
    {
      id: 2,
      title: "MCA Compliance",
      icon: Landmark,
      color: "#9333EA",
      stroke: "#C084FC",
      tag: "Annual ROC & KYC Engine",
      detail: "AOC-4, MGT-7 statutory auto-generation and director validation",
    },
    {
      id: 3,
      title: "Income Tax Filing",
      icon: Receipt,
      color: "#EA580C",
      stroke: "#FB923C",
      tag: "AIS & 26AS Tax Intelligence",
      detail: "Pre-filled ITR computation and tax exemption audit trail",
    },
    {
      id: 4,
      title: "Trademark Protection",
      icon: ShieldCheck,
      color: "#E11D48",
      stroke: "#F87171",
      tag: "IP India Real-Time Watch",
      detail: "Vienna code matching and automated trademark objection alerts",
    },
    {
      id: 5,
      title: "HR & Payroll",
      icon: Users,
      color: "#0D9488",
      stroke: "#2DD4BF",
      tag: "EPFO & ESIC Auto-Sync",
      detail: "One-click salary disbursement, Form 16 & statutory Challans",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E4E7EC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Text Information (Matching Screenshot 2) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#155EEF] mb-3">
                AI-POWERED
              </span>
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold tracking-tight text-[#111827] leading-[1.18]">
                India compliance, automated
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#475467] leading-relaxed">
              Stay compliant in India with automated help for GST filing, income tax returns, ROC
              compliance, and annual filings — with smart reminders and audit trails.
            </p>

            <p className="text-[15px] sm:text-[16px] text-[#475467] leading-relaxed">
              Connect banks, payment gateways, and government portals in one workflow so
              reconciliations, journal posting, and return-ready records stay in sync. Teams can also
              extend invoicing and compliance flows with developer-friendly APIs and webhooks.
            </p>

            {/* Feature Highlights */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-[14px] text-[#111827] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                <span>Zero manual entry: Direct connection to GSTN, MCA &amp; ITD</span>
              </div>
              <div className="flex items-center gap-2.5 text-[14px] text-[#111827] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                <span>Automated AI reconciliation with 99.9% filing accuracy</span>
              </div>
              <div className="flex items-center gap-2.5 text-[14px] text-[#111827] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                <span>Dual verification by AI algorithm and certified CA/CS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onExplore}
                className="px-5 py-2.5 text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore AI Compliance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBookDemo}
                className="px-5 py-2.5 text-[14px] font-semibold text-[#111827] bg-white border border-[#E4E7EC] hover:bg-[#F8FAFC] rounded-xl transition-colors cursor-pointer"
              >
                Book a Live Demo
              </button>
            </div>
          </div>

          {/* Right Column: AI Compliance Cloud Interactive Diagram (Matching Screenshot 2) */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#F8FAFC] rounded-3xl border border-[#E4E7EC] p-6 sm:p-8 md:p-10 shadow-xs overflow-hidden min-h-[460px] flex items-center">
              {/* Radial gradient background flair */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#155EEF]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3 py-2">
                
                {/* Center Hub: Dark box "MerraFilings AI COMPLIANCE CLOUD" */}
                <div className="flex flex-col items-center justify-center shrink-0">
                  <div className="relative w-[170px] sm:w-[195px] aspect-square rounded-3xl bg-[#0F172A] border border-[#1E293B] shadow-2xl p-5 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:scale-[1.02]">
                    {/* Glowing pulse ring */}
                    <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#155EEF]/30 via-[#10B981]/25 to-[#9333EA]/30 opacity-70 blur-md pointer-events-none -z-10" />

                    {/* Logo inside Hub */}
                    <div className="w-[104px] h-[34px] rounded-full border-2 border-[#15803D] bg-white flex items-center justify-center px-2 py-0.5 shadow-xs mb-3">
                      <span className="text-[12px] font-bold text-[#15803D] leading-none">
                        Merra<span className="text-[#EA580C]">Filings</span>
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#38BDF8] uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" /> AI Cloud
                      </span>
                      <p className="text-[11.5px] font-bold text-white uppercase tracking-wider leading-snug">
                        AI COMPLIANCE
                        <br />
                        CLOUD
                      </p>
                    </div>

                    <div className="mt-2.5 flex items-center gap-1.5 bg-[#1E293B]/70 px-2 py-0.5 rounded-full border border-white/5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
                      </span>
                      <span className="text-[9.5px] text-[#94A3B8] font-mono">24/7 Active</span>
                    </div>
                  </div>
                </div>

                {/* SVG Curved Dashed Connectors (Desktop & Tablet) */}
                <div className="hidden md:block flex-1 min-w-[80px] max-w-[150px] h-[348px] relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 348"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Optional subtle glow filter for active lines */}
                      <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* All 6 Continuous Streaming Dotted Lines */}
                    {nodes.map((node, i) => {
                      const yStart = 174;
                      const yEnd = 24 + i * 60;
                      const isHovered = activeNode === i;
                      const pathD = `M 0 ${yStart} C 40 ${yStart}, 48 ${yEnd}, 100 ${yEnd}`;

                      return (
                        <g key={node.id}>
                          {/* Background glow path when hovered */}
                          {isHovered && (
                            <path
                              d={pathD}
                              stroke={node.stroke}
                              strokeWidth="5"
                              strokeOpacity="0.4"
                              filter="url(#line-glow)"
                            />
                          )}

                          {/* Base animated flowing dotted path */}
                          <path
                            d={pathD}
                            stroke={node.stroke}
                            strokeWidth={isHovered ? "2.6" : "1.8"}
                            strokeLinecap="round"
                            className={`animate-flow-dash-${i}`}
                            style={{
                              transition: "stroke-width 0.2s, stroke 0.2s, opacity 0.2s",
                              opacity: isHovered ? 1 : 0.85,
                            }}
                          />

                          {/* Primary Traveling Luminous Data Packet */}
                          <circle r={isHovered ? "3.5" : "2.8"} fill={node.color} opacity="0.95">
                            <animateMotion
                              path={pathD}
                              dur={`${1.8 + i * 0.15}s`}
                              repeatCount="indefinite"
                            />
                          </circle>

                          {/* White Core of the Packet for vibrant sparkle */}
                          <circle r="1.5" fill="#FFFFFF" opacity="0.95">
                            <animateMotion
                              path={pathD}
                              dur={`${1.8 + i * 0.15}s`}
                              repeatCount="indefinite"
                            />
                          </circle>

                          {/* Secondary Staggered Packet */}
                          <circle r="2.2" fill={node.color} opacity="0.75">
                            <animateMotion
                              path={pathD}
                              dur={`${1.8 + i * 0.15}s`}
                              begin={`${0.9 + i * 0.08}s`}
                              repeatCount="indefinite"
                            />
                          </circle>

                          {/* Terminal receiver dot at card entrance */}
                          <circle
                            cx="100"
                            cy={yEnd}
                            r={isHovered ? "3.5" : "2.5"}
                            fill={node.color}
                            opacity={isHovered ? "1" : "0.85"}
                            style={{ transition: "r 0.2s, opacity 0.2s" }}
                          />
                        </g>
                      );
                    })}

                    {/* Central Origin Emitter Beacon */}
                    <circle cx="0" cy="174" r="6" fill="#10B981" opacity="0.25" className="animate-ping" />
                    <circle cx="0" cy="174" r="4.5" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <circle cx="0" cy="174" r="2.2" fill="#10B981" />
                  </svg>
                </div>

                {/* Right Stack: 6 Connected Service Pill Cards */}
                <div className="w-full md:w-[260px] lg:w-[280px] space-y-3 shrink-0">
                  {nodes.map((node, i) => {
                    const Icon = node.icon;
                    const isActive = activeNode === i;

                    return (
                      <div
                        key={node.id}
                        onMouseEnter={() => setActiveNode(i)}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`relative h-[48px] bg-white rounded-2xl border px-3.5 flex items-center justify-between transition-all duration-200 cursor-pointer shadow-2xs ${
                          isActive
                            ? "border-[#155EEF] shadow-md -translate-x-1"
                            : "border-[#E4E7EC] hover:border-[#CBD5E1]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                            style={{
                              backgroundColor: `${node.color}15`,
                              color: node.color,
                            }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block text-[13.5px] font-semibold text-[#111827] truncate">
                              {node.title}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Tooltip on hover */}
                        {isActive && (
                          <div className="absolute top-full left-0 right-0 mt-1 z-20 bg-[#111827] text-white rounded-lg p-2 text-[11px] shadow-lg animate-in fade-in duration-150">
                            <p className="font-semibold text-[#38BDF8]">{node.tag}</p>
                            <p className="text-[#E2E8F0] mt-0.5">{node.detail}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
