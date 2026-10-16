"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle, Send, Award, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface HowItWorksProps {
  onStartProcess?: () => void;
}

export default function HowItWorks({ onStartProcess }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      timing: "10 Mins",
      sla: "Instant Digilocker / Upload",
      title: "Digital Document Upload",
      desc: "Complete your KYC and submit basic director identity and address documents through our encrypted, paperless web portal.",
      icon: UploadCloud,
      color: "bg-sky-50 text-sky-700 border-sky-100",
    },
    {
      step: "02",
      timing: "Day 1",
      sla: "Certified CA Verification",
      title: "Dual CA & CS Document Audit",
      desc: "Licensed Chartered Accountants and Company Secretaries audit your documents, verify name clearance, and draft corporate charters.",
      icon: CheckCircle,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      step: "03",
      timing: "Day 2",
      sla: "Direct MCA V3 / GSTN API",
      title: "Direct Government Lodgement",
      desc: "Applications are electronically submitted to the MCA V3 or GSTN portal via direct API with instant tracking reference numbers (SRN).",
      icon: Send,
      color: "bg-purple-50 text-purple-700 border-purple-100",
    },
    {
      step: "04",
      timing: "Day 3 - 4",
      sla: "Instant Vault Access",
      title: "Certificate & Digital Vault",
      desc: "Receive your official Certificate of Incorporation, PAN, TAN, and bank account resolution stored securely in your digital vault.",
      icon: Award,
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#FBFBFA] border-b border-slate-200/80 font-sans relative overflow-hidden" id="how-it-works">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="down" className="text-center max-w-[780px] mx-auto mb-8 md:mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-100 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Predictable Linear Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight leading-[1.18]">
            How Merrafilings works for your business.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Eliminate weeks of confusion, physical notary queues, and bureaucratic back-and-forth. Experience India&apos;s most reliable end-to-end digital compliance experience.
          </p>
        </div>

        {/* Linear Step Progression Indicator on Desktop */}
        <div data-reveal="zoom" className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-10 px-6">
          {steps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 cursor-pointer transition-all duration-200 ${
                  activeStep === idx ? "scale-105" : "opacity-75 hover:opacity-100"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  activeStep === idx
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-200 text-slate-700"
                }`}>
                  {st.step}
                </div>
                <span className={`text-xs font-semibold ${
                  activeStep === idx ? "text-slate-900" : "text-slate-500"
                }`}>
                  {st.title.split(" ")[0]}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-4 bg-slate-200 relative overflow-hidden">
                  <div
                    className={`h-full bg-emerald-600 transition-all duration-500 ${
                      activeStep > idx ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 4 Steps Grid with Rich Multi-Directional Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = activeStep === idx;
            const revealDir = idx === 0 ? "left" : idx === 3 ? "right" : "up";
            const staggerClass = `stagger-${idx + 1}`;

            return (
              <div
                key={idx}
                data-reveal={revealDir}
                onMouseEnter={() => setActiveStep(idx)}
                className={`bg-white rounded-2xl border p-6 sm:p-7 relative flex flex-col justify-between transition-all duration-300 cursor-pointer group ${staggerClass} ${
                  isCurrent
                    ? "border-slate-400 shadow-xl -translate-y-1.5"
                    : "border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[11px] font-bold text-slate-400 tracking-wider">
                      STEP {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {item.timing}
                    </span>
                  </div>

                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 mb-5 ${item.color} reveal-icon`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg text-[#0F172A] leading-snug group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="text-slate-500 text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {item.sla}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{idx + 1}/4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner with Hover Transform */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={onStartProcess}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 min-h-[44px] text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
          >
            <span className="text-center">Start Your Incorporation or Statutory Filing Today</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
