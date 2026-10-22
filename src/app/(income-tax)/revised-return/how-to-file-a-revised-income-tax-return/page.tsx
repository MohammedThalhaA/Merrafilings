"use client";

import React, { useState } from "react";
import Link from "next/link";
import RevisedReturnGuideLayout from "@/components/RevisedReturnGuideLayout";
import {
  RotateCcw,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Scale,
  Clock,
  Landmark,
  FileCheck,
  Receipt,
  AlertCircle,
  Sparkles,
  ExternalLink,
  DollarSign,
  Calculator,
  History,
  TrendingUp,
  Layers,
  FileEdit,
  Laptop,
} from "lucide-react";

export default function HowToFileRevisedIncomeTaxReturnPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the absolute last date to file a revised return for AY 2026-27?",
      a: "The absolute statutory deadline to file a revised return under Section 139(5) for Assessment Year 2026-27 (Financial Year 2025-26) is 31st December 2026. However, if the Assessing Officer completes regular scrutiny assessment under Section 143(3) before December 31st, your right to file a revised return terminates on the date of that assessment order.",
    },
    {
      q: "Should I file my revised return using the Online Mode or the Offline Utility Mode?",
      a: "For simple salary, single house property, and other sources income (ITR-1 and ITR-4), the Online Mode on incometax.gov.in is the fastest and easiest method. For complex capital gains, foreign assets, trading ledgers, or business accounts (ITR-2 and ITR-3), the Offline JSON Utility Mode is strongly recommended because it allows offline calculation, formula verification, and seamless batch data import.",
    },
    {
      q: "If I file a revised return, does interest under Section 234A, 234B, or 234C apply?",
      a: "If your original return was submitted on or before the due date, no Section 234A interest (for delayed filing) applies to the revised return. However, if revising incorporates omitted income that increases your net tax liability, interest under Section 234B (for shortfall in advance tax) and Section 234C (for deferment of advance tax installments) will be computed on the incremental tax amount.",
    },
    {
      q: "Can I revise a return that was already revised previously?",
      a: "Yes. The law allows unlimited revisions on or before December 31st of the assessment year. If you have already filed Revision 1, you can file Revision 2. In Revision 2, you must quote the 15-digit acknowledgment number and filing date of Revision 1 (the immediately preceding return), not the very first original return.",
    },
    {
      q: "What is the penalty if I miss the 31st December deadline for AY 2026-27?",
      a: "If you miss the December 31st cutoff, you cannot file a standard revised return. If you need to report omitted income, your only option is filing an Updated Return (ITR-U) under Section 139(8A) within 24 months, which carries a mandatory additional tax penalty of 25% (if filed within 12 months) or 50% (if filed between 12 and 24 months). Furthermore, you cannot claim refunds in ITR-U.",
    },
    {
      q: "How can I check if my revised return has been processed by CPC Bengaluru?",
      a: "Log in to incometax.gov.in, navigate to 'e-File' > 'Income Tax Returns' > 'View Filed Returns'. You will see your revised return with status indicators: 'Successfully e-Verified', 'Under Processing', 'Processed with Refund / Demand', or 'Intimation Sent u/s 143(1)'. Click 'View Details' to download the final intimation order.",
    },
  ];

  return (
    <RevisedReturnGuideLayout
      currentSlug="how-to-file-a-revised-income-tax-return"
      title="Revised Income Tax Return Online - How to File & Due Dates"
      breadcrumbLabel="How to File Revised ITR Online"
      metaPublishedDate="AY 2026-27 Compliant / Section 139(5)"
      readingTime="9 min read"
      authorName="Merrafilings Direct Tax Operations Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Online E-Filing &amp; Deadlines Architecture
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Comprehensive Guide to E-Filing a Revised ITR &amp; Statutory Due Dates
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Whether you discovered an omitted interest income, an uncredited TDS certificate on Form 26AS, or realized you forgot to claim Section 80D medical insurance deductions, filing a <strong>Revised Return under Section 139(5)</strong> is your legal shield against assessment notices. This comprehensive guide details the statutory due dates for Assessment Year 2026-27, breaks down both Online and Offline filing pathways, and outlines critical compliance rules to ensure smooth processing by CPC Bengaluru.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: Statutory Due Dates Matrix */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Statutory Due Dates Matrix: Original, Revised &amp; Updated Returns
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          The Income Tax Act prescribes clear timelines for initial filing, revision, and updated returns for Assessment Year 2026-27 (Financial Year 2025-26):
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-3 px-4">Taxpayer Category</th>
                <th className="py-3 px-4">Original Filing Due Date (139(1))</th>
                <th className="py-3 px-4 text-emerald-700 font-bold">Revised Return Cutoff (139(5))</th>
                <th className="py-3 px-4 text-purple-700 font-medium">Updated Return Deadline (139(8A))</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Salaried &amp; Non-Audit Individuals / HUF</td>
                <td className="py-3.5 px-4">31st July 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029 (24 Months)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Corporate &amp; Tax Audit Cases (Firms/LLPs)</td>
                <td className="py-3.5 px-4">31st October 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029 (24 Months)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Transfer Pricing Cases (Form 3CEB)</td>
                <td className="py-3.5 px-4">30th November 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029 (24 Months)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Belated Return Filers (Section 139(4))</td>
                <td className="py-3.5 px-4">Up to 31st Dec 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029 (24 Months)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 02: Online vs Offline Filing Modes */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Choosing Your Filing Method: Online Portal vs Offline JSON Utility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Online Portal Mode */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-100/80 transition-all duration-300">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                  Online Mode (Browser-Based Filing)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Ideal for salaried employees, pensioners, and simple presumptive filers using <strong>ITR-1</strong> or <strong>ITR-4</strong>.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct schedule editing directly inside the browser.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Real-time pre-fill synchronization from Form 26AS and AIS.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Instant e-verification via Aadhaar OTP upon submission.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Offline Utility Mode */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-100/80 transition-all duration-300">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  Offline JSON Utility Mode (Desktop Tool)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Recommended for complex capital gains, multiple properties, foreign assets, and audit cases using <strong>ITR-2</strong> or <strong>ITR-3</strong>.
                </p>
                <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Download pre-filled JSON from the portal and import into desktop tool.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Perform complex capital gains, indexation, and depreciation calculations.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Generate validated output JSON file and upload directly to portal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Procedural Walkthrough */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Detailed Procedural Walkthrough on the E-Filing Portal
        </h2>
        <div className="space-y-3.5 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                1
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Step 1: Collate Documentation &amp; Extract Original Filing Details
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Gather your Form 16, bank interest statements, broker P&amp;L reports, and missed Chapter VI-A investment proofs. Access your original ITR-V to record the 15-digit numeric acknowledgment number and date of submission.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                2
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Step 2: Log In &amp; Navigate to File Income Tax Return
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Log in to <em>incometax.gov.in</em> with PAN and password. Navigate to <strong>e-File &gt; Income Tax Return &gt; File Income Tax Return</strong>. Select AY 2026-27, choose Online Mode, and proceed.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                3
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Step 3: Select Section 139(5) &amp; Enter Preceding Acknowledgment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Under &apos;Filing Status&apos; / Part A General Information, select <strong>&apos;17-Revised Return u/s 139(5)&apos;</strong>. Type in the 15-digit receipt number and original filing date into the dedicated fields.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                4
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Step 4: Update Schedules, Re-Calculate Tax &amp; Pay Challan 280
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Carefully re-input the complete figures across all schedules. If revisions result in tax payable, pay the balance self-assessment tax along with Section 234B/234C interest via e-Pay Tax and input the BSR/Challan number.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                5
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Step 5: Preview, Submit &amp; Complete E-Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Preview the return to check calculations, submit, and verify immediately via Aadhaar OTP, NetBanking, or Class 3 DSC. Download your revised ITR-V acknowledgment slip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Crucial Statutory Rules */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Crucial Statutory Rules &amp; Best Practices to Remember
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <RotateCcw className="w-4 h-4" />
              <span>Unlimited Revisions Allowed</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              You can file a revised return multiple times on or before 31st December of the assessment year. Each successive revision must reference the acknowledgment number and date of the immediately preceding revised return.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
              <Clock className="w-4 h-4" />
              <span>Strict 30-Day Verification Window</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              A revised return submitted without e-verification within 30 days is deemed invalid by law. If the 31st December cutoff passes before you e-verify, you cannot submit a fresh revision under Section 139(5).
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Scale className="w-4 h-4" />
              <span>Full Replacement Doctrine</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              The revised return is a full replacement, not an addendum. Every figure, schedule, deduction, and income head must be re-entered along with your corrections.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Penalty Protection Advantage</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Voluntarily reporting omitted bank interest or capital gains in a revised return before receiving a departmental mismatch notice completely shields you from Section 270A penalties (50% to 200%).
            </p>
          </div>
        </div>
      </section>

      {/* Section 05: Collapsible FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions: How to File Revised ITR Online &amp; Due Dates
          </h2>
          <span className="text-xs text-slate-500 font-normal">Updated for AY 2026-27</span>
        </div>

        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200 hover:border-emerald-500/60 shadow-3xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-[15px] leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-colors">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </RevisedReturnGuideLayout>
  );
}
