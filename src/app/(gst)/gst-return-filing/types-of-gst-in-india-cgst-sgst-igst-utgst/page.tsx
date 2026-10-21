"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstReturnGuideLayout from "@/components/GstReturnGuideLayout";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Scale,
  Award,
  ChevronDown,
  Layers,
  BookOpen,
  TrendingUp,
  Receipt,
  FileCheck,
  Zap,
  HelpCircle,
  Building,
  Landmark,
  MapPin,
} from "lucide-react";

export default function TypesOfGstInIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Why does India have a Dual GST structure instead of a single national tax?",
      a: "India operates under a federal constitutional framework where both the Central Government and State Governments possess sovereign taxation powers. The 101st Constitutional Amendment introduced a Dual GST model (CGST + SGST) allowing both tiers of government to simultaneously levy and collect indirect taxes on a shared taxable supply base without encroaching upon state fiscal autonomy.",
    },
    {
      q: "Which Union Territories levy UTGST and which levy SGST?",
      a: "Only Union Territories without an elected state legislative assembly levy UTGST: (1) Andaman & Nicobar Islands, (2) Lakshadweep, (3) Ladakh, (4) Dadra & Nagar Haveli and Daman & Diu, and (5) Chandigarh. In contrast, Union Territories with their own legislative assemblies—specifically Delhi, Puducherry, and Jammu & Kashmir—levy regular SGST alongside CGST.",
    },
    {
      q: "Can Input Tax Credit of CGST be utilized to pay SGST liability, or vice-versa?",
      a: "No. Cross-utilization between CGST and SGST is strictly prohibited under the GST law. CGST input credit can never be used to pay SGST liability, and SGST input credit can never be used to pay CGST liability. Both, however, can cross-utilize against IGST liabilities in accordance with Rule 88A.",
    },
    {
      q: "What is the statutory order of Input Tax Credit (ITC) utilization under Rule 88A?",
      a: "Under Rule 88A of the CGST Rules: (1) Input Tax Credit of IGST must be completely exhausted first against IGST liability, and any remaining IGST credit can be utilized toward CGST and SGST/UTGST liabilities in any proportion chosen by the taxpayer. (2) Only after IGST credit is fully reduced to zero can the taxpayer utilize CGST and SGST credits against their respective liabilities.",
    },
    {
      q: "How is GST charged on international imports of goods and services?",
      a: "Under Section 5(1) of the IGST Act, 2017, all imports of goods into India are treated as inter-state supplies and attract Integrated GST (IGST) in addition to Basic Customs Duty (BCD) at the point of customs clearance. Similarly, cross-border import of services attracts IGST under the Reverse Charge Mechanism (RCM) payable by the Indian recipient.",
    },
  ];

  return (
    <GstReturnGuideLayout
      currentSlug="types-of-gst-in-india-cgst-sgst-igst-utgst"
      title="The Comprehensive Guide to Types of GST in India: CGST, SGST, IGST, UTGST"
      breadcrumbLabel="Types of GST Explained"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings Tax Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          The rollout of the <strong className="font-semibold text-slate-950">Goods and Services Tax (GST)</strong> on 1st July 2017 represented the most monumental indirect tax reform in independent India&apos;s history. By subsuming 17 pre-existing central and state levies—including Central Excise, Service Tax, State VAT, Entry Tax, and Luxury Tax—GST established a unified national market governed by the principle of <strong className="font-semibold text-slate-950">&quot;One Nation, One Tax&quot;</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          To preserve India&apos;s federal fiscal equilibrium, the GST regime was established as a <strong className="font-semibold text-slate-950">Dual GST Model</strong> comprising four distinct tax categories: <strong className="font-semibold text-slate-950">CGST, SGST, IGST, and UTGST</strong>. Understanding the constitutional boundaries, applicability triggers, and credit utilization rules of each type is essential for issuing compliant tax invoices and claiming uninterrupted Input Tax Credit (ITC).
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Architecture Classification</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Intra-State Supplies</span>
            <strong className="font-semibold text-slate-950 text-[13px]">CGST + SGST (or UTGST)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Inter-State &amp; Imports</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">Integrated GST (IGST)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Tax Nature</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Destination-Based Consumption Tax</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The 4 Types of GST */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Detailed Breakdown of the 4 GST Types
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Each component of the GST system serves a designated constitutional and revenue-sharing mandate:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* CGST */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Landmark className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">1. Central GST (CGST)</strong>
            </div>
            <p className="leading-relaxed">
              Levied under the Central Goods and Services Tax Act, 2017 on all intra-state transactions (supplies within the same state). Collected directly by the Central Government to fund national administrative, defense, and infrastructure budgets.
            </p>
          </div>

          {/* SGST */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Building className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">2. State GST (SGST)</strong>
            </div>
            <p className="leading-relaxed">
              Levied under individual State Goods and Services Tax Acts on the identical intra-state supplies taxed by CGST. Collected by the respective State Commercial Tax Department to support regional state development and welfare programs.
            </p>
          </div>

          {/* IGST */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Scale className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">3. Integrated GST (IGST)</strong>
            </div>
            <p className="leading-relaxed">
              Governed by the IGST Act, 2017. Levied on all inter-state transactions (goods/services moving between two states) and cross-border imports. Collected by the Centre and apportioned to the destination state based on the consumption principle.
            </p>
          </div>

          {/* UTGST */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <MapPin className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">4. Union Territory GST (UTGST)</strong>
            </div>
            <p className="leading-relaxed">
              Levied under the Union Territory Goods and Services Tax Act, 2017. Applies in the 5 Union Territories without legislative assemblies, operating as the exact equivalent of SGST running alongside CGST.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Rate Split Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Tax Rate Split Matrix: Intra-State vs. Inter-State
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          In India, goods and services are classified under five standard GST rate slabs: 0%, 5%, 12%, 18%, and 28%. The table below illustrates how tax is apportioned across supply types:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Standard GST Slab</th>
                <th className="p-3">Intra-State: CGST Split</th>
                <th className="p-3">Intra-State: SGST / UTGST Split</th>
                <th className="p-3">Inter-State: Total IGST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">5% Slab (Essential Items)</td>
                <td className="p-3 text-indigo-700 font-mono">2.5%</td>
                <td className="p-3 text-indigo-700 font-mono">2.5%</td>
                <td className="p-3 font-semibold text-slate-950 font-mono">5.0%</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">12% Slab (Processed Foods / Apparel)</td>
                <td className="p-3 text-indigo-700 font-mono">6.0%</td>
                <td className="p-3 text-indigo-700 font-mono">6.0%</td>
                <td className="p-3 font-semibold text-slate-950 font-mono">12.0%</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">18% Slab (General Goods &amp; Services)</td>
                <td className="p-3 text-indigo-700 font-mono">9.0%</td>
                <td className="p-3 text-indigo-700 font-mono">9.0%</td>
                <td className="p-3 font-semibold text-slate-950 font-mono">18.0%</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">28% Slab (Luxury / Sin Goods)</td>
                <td className="p-3 text-indigo-700 font-mono">14.0%</td>
                <td className="p-3 text-indigo-700 font-mono">14.0%</td>
                <td className="p-3 font-semibold text-slate-950 font-mono">28.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: ITC Utilization Order (Rule 88A) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Input Tax Credit (ITC) Utilization Order under Rule 88A
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Section 49A and Rule 88A mandate a strict statutory sequence for offsetting accumulated input credits against tax liabilities:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-xs sm:text-sm mb-1">Step 1: Complete Exhaustion of IGST Credit</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Input tax credit of IGST must first be utilized 100% against IGST output liability. Any remaining IGST credit can be utilized toward CGST and SGST/UTGST liabilities in any ratio chosen by the taxpayer.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-xs sm:text-sm mb-1">Step 2: Utilization of CGST Credit</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Only after the IGST credit balance reaches zero can the taxpayer utilize CGST credit. CGST credit is first set off against CGST liability, and any remaining balance is utilized against IGST liability. <em>(Never against SGST!)</em>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-xs sm:text-sm mb-1">Step 3: Utilization of SGST/UTGST Credit</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  SGST/UTGST credit is first utilized against SGST/UTGST liability, and any remaining balance is set off against IGST liability. <em>(Never against CGST!)</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Answers from experienced Merrafilings indirect tax specialists:
        </p>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-3 text-slate-950 font-medium text-xs sm:text-[13.5px] hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-indigo-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </GstReturnGuideLayout>
  );
}
