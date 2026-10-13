"use client";

import React from "react";
import {
  Building2,
  FileText,
  Landmark,
  CreditCard,
  ShieldCheck,
  Mail,
  ArrowRight,
} from "lucide-react";

interface BusinessSolutionsGridProps {
  onSelectSolution?: (title: string) => void;
}

export default function BusinessSolutionsGrid({ onSelectSolution }: BusinessSolutionsGridProps) {
  const solutions = [
    {
      id: "business-registration",
      title: "Business Registration",
      icon: Building2,
      iconColor: "text-[#0284C7]",
      accentColor: "#0284C7",
      description:
        "Private Limited, LLP, OPC — DIN, DSC, PAN, name approval, and incorporation end to end.",
      buttonText: "Learn more",
      buttonColor: "text-[#0284C7] hover:text-[#0369A1]",
    },
    {
      id: "gst-compliance",
      title: "GST Compliance",
      icon: FileText,
      iconColor: "text-[#16A34A]",
      accentColor: "#16A34A",
      description:
        "GST registration, GSTR 1, GSTR 3B filing, reconciliation, and notice handling — automated.",
      buttonText: "Learn more",
      buttonColor: "text-[#16A34A] hover:text-[#15803D]",
    },
    {
      id: "mca-compliance",
      title: "MCA Compliance",
      icon: Landmark,
      iconColor: "text-[#9333EA]",
      accentColor: "#9333EA",
      description:
        "ROC annual filings, director KYC, company changes with full MCA portal integration.",
      buttonText: "Learn more",
      buttonColor: "text-[#9333EA] hover:text-[#7E22CE]",
    },
    {
      id: "income-tax-filing",
      title: "Income Tax Filing",
      icon: CreditCard,
      iconColor: "text-[#EA580C]",
      accentColor: "#EA580C",
      description:
        "Individual and corporate ITR filing, TDS returns, and tax planning with expert guidance.",
      buttonText: "Learn more",
      buttonColor: "text-[#EA580C] hover:text-[#C2410C]",
    },
    {
      id: "trademark-protection",
      title: "Trademark Protection",
      icon: ShieldCheck,
      iconColor: "text-[#E11D48]",
      accentColor: "#E11D48",
      description:
        "Search, file, and protect your brand with trademark registration and watch services.",
      buttonText: "Learn more",
      buttonColor: "text-[#E11D48] hover:text-[#BE123C]",
    },
    {
      id: "hr-payroll",
      title: "HR & Payroll",
      icon: Mail,
      iconColor: "text-[#0D9488]",
      accentColor: "#0D9488",
      description:
        "Payroll, PF, ESI, TDS on salary, payslips, and attendance — all on a single platform.",
      buttonText: "Learn more",
      buttonColor: "text-[#0D9488] hover:text-[#0F766E]",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E4E7EC]" id="solutions">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Screenshot 3) */}
        <div className="text-center max-w-[800px] mx-auto mb-14 md:mb-16">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold text-[#111827] tracking-tight leading-[1.2]">
            India&apos;s trusted platform for business solutions
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#475467] leading-relaxed">
            From incorporation to compliance — end-to-end support to help you start,
            manage, and grow your business at every stage of your journey.
          </p>
        </div>

        {/* 6 Cards Grid (Matching Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => onSelectSolution && onSelectSolution(item.title)}
                className="group bg-white rounded-2xl md:rounded-[22px] border border-[#E4E7EC] p-7 sm:p-8 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className={`w-8 h-8 ${item.iconColor} stroke-[1.8]`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-semibold text-[#111827] tracking-tight group-hover:text-[#155EEF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[14.5px] text-[#475467] leading-[1.6]">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Action Link (Matching Screenshot 3) */}
                <div className="mt-8 pt-2">
                  <span
                    className={`inline-flex items-center gap-2 text-[14px] font-semibold ${item.buttonColor} transition-colors`}
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
