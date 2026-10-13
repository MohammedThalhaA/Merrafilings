"use client";

import React from "react";
import { UploadCloud, CheckCircle, Send, Award, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onStartProcess?: () => void;
}

export default function HowItWorks({ onStartProcess }: HowItWorksProps) {
  const steps = [
    {
      step: "01",
      title: "Upload Documents Online",
      desc: "Complete your KYC and submit required documents in under 5 minutes through our encrypted web portal.",
      icon: UploadCloud,
      color: "bg-[#EFF8FF] text-[#155EEF] border-[#B2DDFF]",
    },
    {
      step: "02",
      title: "Dual AI & CA/CS Verification",
      desc: "Proprietary AI verifies compliance checks before certified Chartered Accountants audit every detail.",
      icon: CheckCircle,
      color: "bg-[#ECFDF3] text-[#15803D] border-[#A6F4C5]",
    },
    {
      step: "03",
      title: "Direct Government Filing",
      desc: "Applications are submitted directly to MCA, GSTN, or Income Tax Department with instant tracking IDs.",
      icon: Send,
      color: "bg-[#FDF2FA] text-[#C11574] border-[#FCE7F6]",
    },
    {
      step: "04",
      title: "Receive Certificates & Lifetime Vault",
      desc: "Get your official government certificates, PAN/TAN, and automated renewal reminders in your dashboard.",
      icon: Award,
      color: "bg-[#FEF6EE] text-[#B54708] border-[#F9DBAF]",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-[#E4E7EC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#155EEF] mb-3">
            SEAMLESS WORKFLOW
          </span>
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold text-[#111827] tracking-tight leading-[1.2]">
            How MerraFilings works for your business
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#475467] leading-relaxed">
            Eliminate complex paperwork and government office visits. Experience India&apos;s fastest
            end-to-end digital compliance experience.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E4E7EC] p-6 sm:p-7 relative flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[13px] font-bold text-[#94A3B8] tracking-wider">
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[17px] font-semibold text-[#111827] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13.5px] text-[#475467] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center text-[12px] font-medium text-[#155EEF]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProcess}
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-full shadow-xs transition-colors cursor-pointer"
          >
            <span>Start Your Incorporation or Filing Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
