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
  Check,
} from "lucide-react";

export default function RevisedReturnFilingEasy5StepsGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I change my ITR form type while filing a revised return?",
      a: "Yes, absolutely. If you erroneously filed ITR-1 (Sahaj) in your original return when you actually held directorships in an unlisted company, owned foreign assets, or traded in equity derivatives (F&O)—which legally mandates ITR-2 or ITR-3—you can select the correct ITR form in Step 3 while filing the revised return under Section 139(5). This completely cures the defect before the department issues a Section 139(9) defective notice.",
    },
    {
      q: "Where do I find the 15-digit acknowledgment number of my original return?",
      a: "The 15-digit acknowledgment number is located on the top-right corner of your original ITR-V acknowledgment slip. Alternatively, you can log in to incometax.gov.in, navigate to 'e-File' > 'Income Tax Returns' > 'View Filed Returns', and locate the 15-digit numeric acknowledgment number and the exact date of submission.",
    },
    {
      q: "What if my original return was filed after the July 31st due date (as a belated return)?",
      a: "You are still 100% eligible to file a revised return. Following amendments introduced by the Finance Act, 2016, a belated return filed under Section 139(4) can be revised under Section 139(5) at any time on or before December 31st of the assessment year, or before completion of assessment, whichever is earlier.",
    },
    {
      q: "Is there any fee or penalty payable while filing in Step 5?",
      a: "There is zero government late fee or filing penalty for submitting a revised return on or before 31st December. However, if your revision incorporates previously omitted income that increases your taxable liability, statutory interest under Section 234B and 234C on the incremental tax amount must be paid via e-Pay Tax prior to final submission.",
    },
    {
      q: "Can I revise my return if I have already received my original tax refund?",
      a: "Yes. Even if your original return has been processed by CPC Bengaluru and the refund has been credited to your bank account, you can still file a revised return under Section 139(5) before December 31st. If the revision yields an additional refund, CPC will issue a supplementary credit. If it creates tax payable, you must pay the excess refund back along with applicable interest.",
    },
    {
      q: "What makes CA-assisted revision through Merrafilings superior to self-filing?",
      a: "Merrafilings pairs you with a senior Chartered Accountant who conducts forensic AIS/TIS reconciliation, re-computes capital gains with precise grandfathering/indexation, audits Schedule VI-A deduction proofs, and validates the schema. This eliminates common self-filing traps like incomplete schedules or schema rejections, providing complete post-filing audit defense.",
    },
  ];

  return (
    <RevisedReturnGuideLayout
      currentSlug="revised-return-filing-easy-5-steps-guide"
      title="Revised Return Filing: Easy 5 Steps Guide"
      breadcrumbLabel="Easy 5-Step Filing Guide"
      metaPublishedDate="AY 2026-27 Compliant / Section 139(5)"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax Rectification Team"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Step-by-Step E-Filing Framework
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Filing a Revised Return Made Seamless with Merrafilings
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              A common anxiety for taxpayers is realizing an error after clicking &quot;Submit&quot; on their annual tax return. Fortunately, the law provides a robust mechanism to rectify mistakes, declare omitted income, or claim missed deductions. Merrafilings has structured an easy, sequential 5-step roadmap to guide you through filing a revised return under <strong>Section 139(5) of the Income Tax Act, 1961</strong>—ensuring complete statutory compliance, rapid verification, and zero risk of departmental mismatch notices.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: Deep-Dive 5 Steps */}
      <section className="mb-10 space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          The 5 Concrete Steps to File a Revised Return
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Follow these structured steps on the official e-filing portal to submit your revised return accurately:
        </p>

        {/* Step 1 */}
        <div className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              01
            </span>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                  Step 1: Determine Eligibility &amp; Statutory Deadlines
                </h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 w-fit">
                  Deadline: 31st December
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Before commencing, verify that you filed an initial return under Section 139(1) or Section 139(4). Ensure that the statutory cutoff of <strong>31st December of the Assessment Year</strong> (for AY 2026-27, 31st December 2026) has not expired, and confirm that no formal assessment order under Section 143(3) or Section 144 has been finalized by your Jurisdictional Assessing Officer (JAO).
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Confirm original filing timestamp and ITR-V status.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verify absence of final Section 143(3) scrutiny orders.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              02
            </span>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                  Step 2: Log into the Income Tax Portal &amp; Access Dashboard
                </h3>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 w-fit">
                  Portal: incometax.gov.in
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Visit <em>incometax.gov.in</em> and log in using your Permanent Account Number (PAN) as the User ID and your secure password. Complete Two-Factor Authentication (2FA) via OTP. Once inside the user dashboard, navigate to <strong>e-File &gt; Income Tax Returns &gt; File Income Tax Return</strong>.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Authenticate with Aadhaar-linked OTP or NetBanking credentials.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Check &apos;Pending Actions&apos; tab for any Section 143(1)(a) discrepancy alerts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              03
            </span>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-purple-700 transition-colors">
                  Step 3: Choose the Appropriate ITR Form Type
                </h3>
                <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60 w-fit">
                  ITR-1, 2, 3 or 4
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Select Assessment Year 2026-27 and choose your filing mode (Online or Offline JSON utility). Crucially, you are not bound to your original ITR form selection. If your initial return erroneously used ITR-1 but you traded stocks or own overseas assets, select <strong>ITR-2</strong> or <strong>ITR-3</strong> to legally regularize your disclosures.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>ITR-1: Salaried individuals with income up to ₹50 Lakhs (no capital gains).</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>ITR-2: Capital gains, foreign assets, agricultural income &gt; ₹5,000, directorships.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>ITR-3/4: Business, professional freelance income, and presumptive taxation (44AD/44ADA).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              04
            </span>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-700 transition-colors">
                  Step 4: Fill in Corrections, Link Acknowledgment &amp; Update Schedules
                </h3>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60 w-fit">
                  Select Sec 139(5)
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                In Part A General Information, choose <strong>&apos;17-Revised Return u/s 139(5)&apos;</strong> under the &apos;Filed u/s&apos; dropdown. Enter the <strong>15-digit original receipt number</strong> and original filing date. Then systematically update all income schedules, incorporate missed Section 80C/80D deductions, update bank details for refunds, and verify the summary calculation.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Ensure all unchanged baseline figures from the original filing are preserved.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>If additional tax arises, pay self-assessment tax via e-Pay Tax before submitting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              05
            </span>
            <div className="space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-rose-700 transition-colors">
                  Step 5: Submit the Revised Return &amp; Complete E-Verification
                </h3>
                <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60 w-fit">
                  Mandatory within 30 Days
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Review the preview of your revised form, click &quot;Proceed to Validation&quot;, and submit electronically. Immediately e-verify using <strong>Aadhaar OTP</strong>, <strong>NetBanking</strong>, or <strong>Demat EVC</strong>. E-verification must be finalized within <strong>30 days</strong> of submission; an unverified revised return is deemed non-est (invalid) by law.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-1 font-normal">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Instantly download the new revised ITR-V acknowledgment slip.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Receive official confirmation SMS and email from CPC Bengaluru.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Comparative Matrix */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Comparative Overview: Original vs Revised vs Updated Return
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-3 px-4">Filing Dimension</th>
                <th className="py-3 px-4">Original Return (139(1))</th>
                <th className="py-3 px-4 text-emerald-700">Revised Return (139(5))</th>
                <th className="py-3 px-4 text-purple-700">Updated Return (ITR-U 139(8A))</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Standard Due Date</td>
                <td className="py-3.5 px-4">31st July / 31st Oct</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">31st December of AY</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Up to 24 Months from end of AY</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Government Penalty / Fee</td>
                <td className="py-3.5 px-4">Zero (if timely)</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Zero Late Fee</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">25% or 50% Additional Tax</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Claim Missed Refunds?</td>
                <td className="py-3.5 px-4">Yes</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Yes, 100% Permitted</td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">NO (Cannot claim refund)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Declare / Increase Losses?</td>
                <td className="py-3.5 px-4">Yes, carry-forward allowed</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Yes, preserved if 139(1) met</td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">NO (Cannot increase losses)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Change Tax Regime?</td>
                <td className="py-3.5 px-4">Yes</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Yes (Salaried individuals)</td>
                <td className="py-3.5 px-4 text-slate-500">Restricted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 03: Advantages with Merrafilings */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Advantages of Filing a Revised Return with Merrafilings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Forensic Multi-Statement Reconciliation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Our tax accountants cross-match your original ITR with Form 26AS, AIS, and TIS to identify every unreported savings interest, dividend, or SFT transaction before CPC flags a discrepancy.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
              <Calculator className="w-4 h-4" />
              <span>Maximum Refund Optimization</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We ensure all eligible deductions under Chapter VI-A (80C, 80D, 80G, 80TTA), missed HRA exemptions, and home loan interest are claimed to maximize your legitimate refund credit.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Building2 className="w-4 h-4" />
              <span>CA-Assisted Capital Gains &amp; Business Support</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              For complex trading ledgers, equity derivatives, real estate sales, and foreign assets, our practicing Chartered Accountants handle re-computations and audit compliance directly.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <Landmark className="w-4 h-4" />
              <span>End-to-End Tracking until CPC Intimation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We monitor your return status on the CPC portal until the final Section 143(1) intimation order is issued and the refund is successfully credited to your bank account.
            </p>
          </div>
        </div>
      </section>

      {/* Section 04: Collapsible FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions: 5-Step Revised Return Filing
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
