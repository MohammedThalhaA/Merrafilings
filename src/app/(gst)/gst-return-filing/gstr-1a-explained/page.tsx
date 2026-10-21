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
  AlertTriangle,
  RotateCcw,
} from "lucide-react";

export default function Gstr1aExplainedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Is filing Form GSTR-1A mandatory for every registered taxpayer?",
      a: "No. Form GSTR-1A is strictly an optional correction facility. If your GSTR-1 was filed accurately with zero omissions or mistakes, you do not need to file GSTR-1A. You can proceed directly to file your GSTR-3B for that tax period.",
    },
    {
      q: "What is the exact timeframe window during which GSTR-1A can be filed?",
      a: "GSTR-1A is accessible on the GST portal immediately after Form GSTR-1 is successfully filed (typically between the 11th/13th of the month) up until the submission of Form GSTR-3B for that same tax period (typically by the 20th of the month). Once GSTR-3B is filed, the GSTR-1A window closes permanently for that period.",
    },
    {
      q: "Can I add an invoice that was completely missed in GSTR-1 using GSTR-1A?",
      a: "Yes. GSTR-1A allows both amendments to previously submitted outward supplies (modifying invoice value, tax rates, or recipient GSTIN) and adding completely new B2B or B2C invoices that were inadvertently omitted from GSTR-1.",
    },
    {
      q: "How does filing GSTR-1A affect my GSTR-3B tax payment liability?",
      a: "The figures submitted and approved in GSTR-1A automatically update the auto-populated outward supply liabilities in Table 3.1 of Form GSTR-3B. This ensures your tax liability in GSTR-3B perfectly mirrors your actual commercial invoices, preventing tax mismatch notices under Section 73.",
    },
    {
      q: "What happens to the buyer's Input Tax Credit (ITC) when a supplier files GSTR-1A?",
      a: "Any upward amendment or addition of an omitted B2B invoice in GSTR-1A flows into the recipient's GSTR-2B, enabling them to claim the legitimate Input Tax Credit in their GSTR-3B without waiting for the subsequent month's amendment cycle.",
    },
  ];

  return (
    <GstReturnGuideLayout
      currentSlug="gstr-1a-explained"
      title="GSTR-1A: What Is It and How Does It Help Correct GSTR-1?"
      breadcrumbLabel="GSTR-1A Form Explained"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Tax Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In the Indian indirect tax ecosystem, <strong className="font-semibold text-slate-950">Form GSTR-1</strong> represents the primary statement of outward supplies. However, businesses frequently encounter inadvertent errors when reporting sales—such as quoting an incorrect customer GSTIN, applying the wrong tax slab, classifying a B2B transaction as B2C, or missing an invoice during month-end reconciliations.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Previously, taxpayers had zero procedural flexibility to correct such mistakes within the same tax period and were forced to wait an entire month to report amendments in the next GSTR-1, causing severe Input Tax Credit (ITC) bottlenecks for buyers and artificial tax mismatches in <strong className="font-semibold text-slate-950">Form GSTR-3B</strong>. The introduction of <strong className="font-semibold text-slate-950">Form GSTR-1A</strong> fundamentally resolves this challenge, providing an agile pre-GSTR-3B correction window.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GSTR-1A Operational Essentials</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Availability Window</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Post GSTR-1 &rarr; Pre GSTR-3B</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Nature of Form</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Optional Correction Facility</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Impact on GSTR-3B</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">Auto-Updates Table 3.1 Liability</strong>
          </div>
        </div>
      </div>

      {/* Section 1: When Can GSTR-1A Be Used? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Statutory Sequence: When Can GSTR-1A Be Filed?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          GSTR-1A operates strictly as an intermediary bridge within a single tax period. Taxpayers must observe the following procedural chronological pipeline:
        </p>

        <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 my-3">
          <div className="flex items-center justify-between text-xs sm:text-[13px] font-semibold text-slate-950 flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">1. Prepare GSTR-1</span>
            <span className="text-slate-400">&rarr;</span>
            <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">2. File GSTR-1 (by 11th)</span>
            <span className="text-slate-400">&rarr;</span>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-200">3. Review &amp; File GSTR-1A (Optional)</span>
            <span className="text-slate-400">&rarr;</span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200">4. File GSTR-3B (by 20th)</span>
          </div>
        </div>

        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Form GSTR-1A is not designed to replace GSTR-1; rather, it functions as an auxiliary amendment canvas. If you realize on the 14th of the month that an export invoice was tagged with the wrong currency exchange rate or a high-value B2B invoice was missed, you no longer have to wait 30 days. You rectify it inside GSTR-1A, and your GSTR-3B auto-populates the accurate liability on the 20th.
        </p>
      </section>

      {/* Section 2: What Errors Does GSTR-1A Rectify? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Common Invoice Errors Resolved by GSTR-1A
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          GSTR-1A empowers accounts teams to amend the following invoice-level discrepancies before liabilities crystallize:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Incorrect Customer GSTIN:</strong>
            Amend instances where a valid B2B buyer&apos;s GSTIN was mistyped or mapped to an incorrect sister entity.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Missed B2B Invoices:</strong>
            Add sales invoices generated toward the end of the tax period that were inadvertently omitted from GSTR-1.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. B2C to B2B Re-Classification:</strong>
            Rectify transactions erroneously reported as B2C Others so your corporate client can claim legitimate Input Tax Credit.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Tax Rate &amp; Place of Supply Changes:</strong>
            Adjust tax slab mismatches (e.g. 18% applied instead of 12%) or fix interstate vs intrastate POS mapping errors.
          </div>
        </div>
      </section>

      {/* Section 3: Practical Numeric Case Study */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Practical Case Study: How GSTR-1A Prevents Tax Penalties
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Consider a practical scenario illustrating the commercial advantage of GSTR-1A:
        </p>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 text-xs sm:text-[13px] text-slate-900 font-normal">
          <p>
            <strong>ABC Private Limited</strong> files its GSTR-1 for the month of July on 10th August. While conducting mid-month internal audits on 14th August, the Chief Accountant discovers that an invoice issued to <strong>XYZ Enterprises</strong> was reported with a clerical error:
          </p>

          <div className="overflow-x-auto my-2 rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-800">
                  <th className="p-2.5">Parameter</th>
                  <th className="p-2.5">Originally Reported (GSTR-1)</th>
                  <th className="p-2.5">Actual Invoice Value</th>
                  <th className="p-2.5">Variance / Error</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-2.5 font-semibold text-slate-950">Taxable Value</td>
                  <td className="p-2.5 text-red-600 font-mono">₹1,00,000</td>
                  <td className="p-2.5 text-emerald-700 font-mono">₹5,08,475</td>
                  <td className="p-2.5 font-mono">+ ₹4,08,475</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-slate-950">IGST (18%)</td>
                  <td className="p-2.5 text-red-600 font-mono">₹18,000</td>
                  <td className="p-2.5 text-emerald-700 font-mono">₹91,525</td>
                  <td className="p-2.5 font-mono">+ ₹73,525</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The Outcome with GSTR-1A:</strong> ABC Pvt Ltd logs into the portal on 15th August, opens Form GSTR-1A, amends the invoice to ₹5,08,475 taxable value, and submits the form. When they open GSTR-3B on 19th August, Table 3.1 automatically reflects the corrected liability of ₹91,525. XYZ Enterprises immediately sees the full ₹91,525 in their July GSTR-2B. Zero interest under Section 50, zero buyer friction, and zero departmental notices!
          </p>
        </div>
      </section>

      {/* Section 4: GSTR-1 vs GSTR-1A Comparison Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Comparison: Form GSTR-1 vs. Form GSTR-1A
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Understanding the distinct legal identities of the two outward supply instruments:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Feature Parameter</th>
                <th className="p-3">Form GSTR-1</th>
                <th className="p-3">Form GSTR-1A</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Statutory Character</td>
                <td className="p-3">Mandatory outward supply return under Section 37</td>
                <td className="p-3 text-emerald-700 font-medium">Optional amendment facility</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Filing Due Date</td>
                <td className="p-3">11th of subsequent month (Monthly) / 13th (Quarterly)</td>
                <td className="p-3">Flexible window between GSTR-1 filing and GSTR-3B filing</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Primary Purpose</td>
                <td className="p-3">Initial reporting of all monthly sales and tax invoices</td>
                <td className="p-3">Correction of clerical errors and addition of missed invoices</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Late Fee Applicability</td>
                <td className="p-3">Attracts late fee under Section 47 if filed late</td>
                <td className="p-3 text-emerald-700 font-medium">Nil late fees (voluntary correction mechanism)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Authoritative answers from Merrafilings GST practitioners:
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
