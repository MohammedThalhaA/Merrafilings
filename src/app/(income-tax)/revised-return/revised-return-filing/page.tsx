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
  Zap,
} from "lucide-react";

export default function RevisedReturnFilingGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the core difference between a Belated Return and a Revised Return?",
      a: "A Belated Return is filed under Section 139(4) when you fail to submit your initial return by the original July 31st or October 31st due date; it attracts late filing fees under Section 234F (up to ₹5,000) and forfeits loss carry-forward benefits. A Revised Return is filed under Section 139(5) to correct mistakes in an already filed return; it attracts ZERO government penalty when filed before December 31st and preserves all original carry-forward rights.",
    },
    {
      q: "Can I file a revised return if I received an automated intimation under Section 143(1)?",
      a: "Yes. An automated intimation received under Section 143(1) from CPC Bengaluru is merely a summary processing statement, not a completed regular scrutiny assessment. You are legally entitled to file a revised return under Section 139(5) until 31st December of the assessment year even after receiving Section 143(1) intimation.",
    },
    {
      q: "Will filing a revised return delay my original income tax refund?",
      a: "When you submit a revised return, the Centralized Processing Centre replaces the original calculation with the revised computation. While it initiates a fresh processing cycle, it ensures that your refund is calculated on accurate figures. In many cases, revising to claim omitted Chapter VI-A deductions significantly increases your net refund amount, which is paid with interest under Section 244A.",
    },
    {
      q: "Can I revise my return to reduce my declared taxable income?",
      a: "Yes. Under Section 139(5), a revised return can be filed to rectify bona fide computational errors or include missed statutory exemptions/deductions that legitimately reduce your net taxable income, resulting in an additional refund. However, you should possess valid supporting receipts and bank records to substantiate the reduction if queried by the tax department.",
    },
    {
      q: "What happens if I discover an error after the December 31st deadline has passed?",
      a: "Once the 31st December statutory cutoff expires, you can no longer file a standard revised return under Section 139(5). Your sole legal recourse is filing an Updated Return (Form ITR-U) under Section 139(8A) within 24 months from the end of the relevant assessment year. Note that ITR-U requires paying an additional 25% or 50% tax and cannot be used to claim additional refunds or declare higher losses.",
    },
    {
      q: "Do I need a Digital Signature Certificate (DSC) to submit a revised return?",
      a: "A Digital Signature Certificate (Class 3 DSC) is mandatory only for corporate entities and taxpayers whose accounts are subject to mandatory tax audit under Section 44AB. Individual salaried filers, freelancers, and non-audit business owners can seamlessly verify their revised return using Aadhaar OTP or NetBanking EVC.",
    },
  ];

  return (
    <RevisedReturnGuideLayout
      currentSlug="revised-return-filing"
      title="Optimize Your Taxes with Revised Return Filing"
      breadcrumbLabel="Revised Return Filing Guide"
      metaPublishedDate="AY 2026-27 Compliant / Section 139(5)"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax Advisory Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Statutory Rectification Guide
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Optimize Your Taxes &amp; Rectify Inadvertent Filing Errors
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Filing taxes in an increasingly digital and data-driven landscape can be challenging. Taxpayers often find themselves needing to correct a previously submitted Income Tax Return (ITR) due to clerical inaccuracies, delayed tax credit postings on Form 26AS, or omitted deductions. <strong>Revised Return Filing under Section 139(5)</strong> is the statutory bridge that enables you to fix mistakes, include missing income or deductions, and align your tax profile with official department records—guaranteeing complete legal transparency and avoiding harsh under-reporting penalties.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: What is Revised Return Filing? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          What is Revised Return Filing?
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Revised Return Filing is a statutory mechanism codified under Section 139(5) of the Income Tax Act, 1961. It empowers any taxpayer who has submitted their initial return—whether on or before the due date (Section 139(1)) or belatedly (Section 139(4))—to rectify any bona fide error or omission. It is a critical legal instrument designed to ensure that taxpayers maintain accurate, audit-proof tax records without facing punitive actions.
        </p>

        {/* 3 Pillars of Revision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-100/80 transition-all duration-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
              Fix Filing Mistakes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Correct inaccurate personal information, address typos, wrong bank account numbers, or inadvertent clerical miscalculations across income schedules.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-100/80 transition-all duration-300">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
              Include Missing Items
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Incorporate omitted savings/FD bank interest, dividend distributions, secondary consulting fees, or missed Chapter VI-A deductions (80C, 80D, 80G).
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-100/80 transition-all duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
              Meet Statutory Timelines
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Execute amendments strictly before the statutory deadline of 31st December of the assessment year, ensuring zero penalty or interest escalation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02: Why File a Revised Return? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Why File a Revised Return? Strategic Benefits
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          While revising an already filed return might feel redundant, proactive correction delivers significant tangible benefits for salaried individuals, traders, and businesses alike:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Statutory Compliance &amp; Notice Immunity</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              The modern Income Tax portal employs automated data-matching algorithms that compare your ITR against the Annual Information Statement (AIS) and Form 26AS. Voluntary disclosure via Section 139(5) prevents the issuance of Section 143(1)(a) discrepancy notices and Section 148 reassessment notices.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Enhanced Financial Credibility</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Accurate, reconciled ITR records are indispensable when applying for home loans, commercial credit lines, foreign visa clearances, or corporate tenders. A clean, revised computation eliminates discrepancies between declared tax returns and bank statements.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Scale className="w-4 h-4" />
              <span>Elimination of Under-Reporting Penalties</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Under Section 270A of the Income Tax Act, under-reporting or misreporting of income can attract penalties ranging from 50% to 200% of the tax payable. Voluntarily rectifying omissions before departmental detection establishes bona fide intent and legally protects you from penalties.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <Receipt className="w-4 h-4" />
              <span>Unlocking Pending or Enhanced Tax Refunds</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Taxpayers frequently discover uncredited TDS deductions or missed investment receipts after the July filing rush. Incorporating these in a revised return unlocks legitimate additional refunds, credited directly to your bank account along with interest under Section 244A.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: Step-by-Step Filing Guide */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Step-by-Step Guide to File a Revised Return Online
        </h2>
        <div className="space-y-3.5 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                1
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Step 1: Identify the Mistakes &amp; Reconcile Statements
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Carefully examine your originally submitted ITR-V alongside your latest Form 26AS, AIS, and TIS statements. Highlight omitted interest income, uncredited tax deductions, or missed Chapter VI-A investment receipts.
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
                  Step 2: Access the Income Tax e-Filing Portal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Log in to the official income tax portal (<em>incometax.gov.in</em>) using your PAN, password, and two-factor authentication. Navigate to <strong>e-File &gt; Income Tax Return &gt; File Income Tax Return</strong>.
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
                  Step 3: Select Assessment Year &amp; Choose Section 139(5)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Select Assessment Year 2026-27 (or the relevant AY), choose online filing mode, and select <strong>&quot;Revised Return u/s 139(5)&quot;</strong> under the filing section. Enter your original 15-digit ITR-V acknowledgment number and original filing date.
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
                  Step 4: Fill in Corrected Information Across All Schedules
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Enter the rectified information in the applicable schedules. Ensure that all unchanged salary, business, and capital gains figures are accurately retained, as the revised return completely overwrites your previous record.
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
                  Step 5: Submit, E-Verify &amp; Retain Acknowledgment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Submit the revised return and immediately complete e-verification via Aadhaar OTP, NetBanking, or Class 3 DSC. Download your revised ITR-V acknowledgment slip and retain it in your permanent tax dossier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Common Mistakes to Avoid */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Common Mistakes to Avoid in Revised Return Filing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40 space-y-2">
            <div className="flex items-center gap-2 text-rose-800 font-semibold text-sm">
              <Clock className="w-4 h-4 text-rose-600" />
              <span>Procrastination Beyond Dec 31</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Delaying filing until after December 31st permanently forfeits your right to file under Section 139(5). You will be forced into an Updated Return (ITR-U) with heavy 25% or 50% additional tax penalties.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Entering Partial Schedules</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              A revised return is not an addendum. If you fail to re-enter your previously filed salary or business turnover figures, the system will process your return as if those incomes were zero, causing major assessment defects.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Failing to E-Verify within 30 Days</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Submitting the form online is only half the process. If e-verification is not concluded within 30 days, the revised return is deemed non-est (invalid), leaving your flawed original return active.
            </p>
          </div>
        </div>
      </section>

      {/* Section 05: Collapsible FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions: Revised Return Filing &amp; Compliance
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
