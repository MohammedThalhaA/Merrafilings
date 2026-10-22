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
} from "lucide-react";

export default function FileRevisedReturnOptimizeYourTaxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the primary legal provision governing a Revised Return in India?",
      a: "A revised return is governed by Section 139(5) of the Income Tax Act, 1961. It permits any taxpayer who has filed an original return under Section 139(1) or a belated return under Section 139(4) to furnish a revised return if they discover any omission, inadvertent mistake, or incorrect statement prior to the statutory deadline.",
    },
    {
      q: "How does filing a revised return optimize my income tax liability?",
      a: "Filing a revised return allows you to incorporate legitimate tax deductions omitted during the original filing (such as Section 80C, 80D, 80G, or HRA), claim credit for previously uncredited TDS/TCS entries that reflect on Form 26AS, rectify misreported capital losses for lawful carry-forward, and unlock delayed or enhanced tax refunds directly credited to your pre-validated bank account.",
    },
    {
      q: "What is the statutory deadline for filing a revised return for AY 2026-27?",
      a: "For Assessment Year 2026-27 (Financial Year 2025-26), the deadline is 31st December 2026, or before the completion of the assessment under Section 143(3) by the Assessing Officer, whichever is earlier. Missing this date forfeits your right to revise the return and claim missed deductions.",
    },
    {
      q: "Can I switch between the Old and New Tax Regime while revising my return?",
      a: "For salaried taxpayers without business income, the Income Tax Department permits switching between the Old and New Tax Regimes within a revised return filed on or before December 31st. However, taxpayers with income from business or profession who exercised or opted out via Form 10-IEA are bound by statutory restrictions and cannot alter regime choices in a revised return.",
    },
    {
      q: "Does filing a revised return trigger an automatic tax audit or scrutiny notice?",
      a: "No. Filing a revised return under Section 139(5) is a standard statutory right designed to encourage voluntary compliance. In fact, correcting omissions proactively before the department flags discrepancies in AIS/TIS shields you from Section 143(1)(a) adjustment notices and Section 270A under-reporting penalties (which range from 50% to 200%).",
    },
    {
      q: "How many times can I revise my Income Tax Return before December 31st?",
      a: "The Income Tax Act does not impose a limit on the number of revisions. You may revise your return multiple times before December 31st of the assessment year, provided each subsequent revision quotes the 15-digit acknowledgment number and date of the immediately preceding return.",
    },
  ];

  return (
    <RevisedReturnGuideLayout
      currentSlug="file-a-revised-return-optimize-your-tax"
      title="File a Revised Return: Optimize Your Tax"
      breadcrumbLabel="Optimize Your Tax"
      metaPublishedDate="AY 2026-27 Compliant / Section 139(5)"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax & ITR Rectification Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Tax Optimization &amp; Rectification
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Transform Inadvertent Filing Errors into Tax Optimization Opportunities
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Filing an Income Tax Return (ITR) under tight deadlines often results in unintentional omissions—such as missed Chapter VI-A investment receipts, overlooked medical insurance deductions, omitted secondary savings interest, or mismatched Form 26AS tax credits. Under <strong>Section 139(5) of the Income Tax Act, 1961</strong>, the law grants taxpayers an invaluable statutory window to rectify every discrepancy, claim missed exemptions, and optimize tax cash flows before <strong>31st December of the Assessment Year</strong> with zero penalty.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: Understanding Revised Tax Returns */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Understanding Revised Tax Returns under Section 139(5)
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          A Revised Return is an amended, comprehensive version of your original income tax filing. When submitted on the Income Tax e-Filing portal, it does not act as a mere supplementary annexure; rather, it <strong>completely substitutes, supersedes, and replaces</strong> the originally filed return for all legal and assessment purposes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-100/80 transition-all duration-300">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                  Complete Legal Substitution
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Once successfully verified, the Centralized Processing Centre (CPC Bengaluru) processes your tax computation exclusively on the basis of the figures furnished in the revised return, archiving the original return.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-100/80 transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Zero Late Fee or Penalty
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Unlike belated filings under Section 139(4) which attract Section 234F fees (up to ₹5,000), a timely revised return submitted by 31st December incurs no government late fees or under-reporting penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Assessing the Need for Revision */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Assessing the Need for Revision: Common Discrepancies
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Prior to initiating a revision, taxpayers should perform a thorough reconciliation between their filed ITR-V, the employer&apos;s Form 16, bank statements, the Annual Information Statement (AIS), and the Taxpayer Information Summary (TIS). Common trigger scenarios include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Calculator className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
              Missed Chapter VI-A Deductions
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Forgetting to declare PPF, ELSS, Life Insurance (80C), Mediclaim (80D), Education Loan Interest (80E), or Donations (80G) on which documentation arrived late.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
              Omitted Secondary Income
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Unreported savings bank interest, recurring/fixed deposit interest, stock dividends, or crypto/VDA profits captured in the department&apos;s AIS/TIS portal.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-rose-700 transition-colors">
              Mismatched TDS Credits
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Deductions made by employers, clients, or banks that failed to appear on Form 26AS by the July deadline due to late quarterly TDS filing by deductors.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">
              Incorrect ITR Form Selection
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Submitting ITR-1 (Sahaj) when holding unlisted shares, directorships, or foreign assets, which legally necessitates filing ITR-2 or ITR-3.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-sky-500 hover:shadow-md hover:shadow-sky-500/10 hover:bg-sky-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Landmark className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-sky-700 transition-colors">
              Invalid Bank Details for Refunds
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Typing errors in bank account numbers, IFSC codes, or unvalidated accounts leading to refund failure intimations from the State Bank of India refund banker.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
              Capital Loss Set-Off Errors
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Inaccurate calculation of short-term vs long-term stock/real estate capital losses, denying legal carry-forward rights for the subsequent 8 assessment years.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: Documents Required Checklist */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Key Documents Required to Prepare a Revised Return
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Filing an accurate revised return requires assembling both original filing records and substantiated proof of the newly introduced figures:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-3 px-4">Document Category</th>
                <th className="py-3 px-4">Specific Records Required</th>
                <th className="py-3 px-4">Statutory Importance in Revision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Original Filing Proof</td>
                <td className="py-3.5 px-4">Original ITR-V Acknowledgment Slip &amp; Date of Filing</td>
                <td className="py-3.5 px-4">Mandatory 15-digit receipt number must be quoted in Part A General of the revised form.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Department Statements</td>
                <td className="py-3.5 px-4">Latest Form 26AS, AIS, and TIS (PDF/JSON)</td>
                <td className="py-3.5 px-4">Validates that all high-value SFT transactions and TDS deposits are reconciled before submission.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Missed Deductions</td>
                <td className="py-3.5 px-4">ELSS statements, PPF receipts, health insurance premiums, 80G donation receipts</td>
                <td className="py-3.5 px-4">Ensures legitimate reductions in taxable income and justifies enhanced refund calculations.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Salary &amp; Income Proofs</td>
                <td className="py-3.5 px-4">Form 16 Part A &amp; B, Rent receipts for HRA, Form 12BB</td>
                <td className="py-3.5 px-4">Rectifies salary computation discrepancies between employer Form 16 and ITR schedule.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Capital Gains Ledgers</td>
                <td className="py-3.5 px-4">Broker Tax P&amp;L statements, property purchase/sale deeds, Section 54 proofs</td>
                <td className="py-3.5 px-4">Accurately re-computes long-term/short-term gains, indexation benefits, and rollover relief.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Banking Information</td>
                <td className="py-3.5 px-4">Pre-validated Bank Account Details, Bank Interest Certificates</td>
                <td className="py-3.5 px-4">Enables direct Electronic Clearing Service (ECS) refund credits and includes 80TTA/80TTB claims.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 04: The 5 Methodical Steps */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          The 5 Methodical Steps to File a Revised Return
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Executing a revised filing on the e-filing portal (incometax.gov.in) requires sequential accuracy across all tax schedules:
        </p>

        <div className="space-y-3.5 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                1
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Scrutinize Original Return &amp; Compile Discrepancy Note
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Download your filed ITR-V and JSON filing data. Cross-verify every income head (Salary, House Property, Capital Gains, Business, Other Sources) against your AIS and bank statements to generate an exact schedule of additions and deductions.
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
                  Log into e-Filing Portal &amp; Select Section 139(5)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Log into <em>incometax.gov.in</em> using PAN credentials. Navigate to <strong>e-File &gt; Income Tax Return &gt; File Income Tax Return</strong>. Select Assessment Year 2026-27, choose the correct ITR form type, and select <strong>&quot;Revised Return u/s 139(5)&quot;</strong> under the filing section.
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
                  Link 15-Digit Original Acknowledgment Number &amp; Date
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Under Part A General Information, enter the 15-digit receipt number of your originally filed return (or last revised return) and the exact date on which it was submitted. Without these parameters, the system cannot link the revision to your master assessment record.
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
                  Re-Input Complete Schedule Data &amp; Calculate Tax
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Because the revised return replaces the entire original filing, re-confirm all unchanged figures and input corrected schedules. If the revision produces additional tax liability, pay self-assessment tax along with statutory interest under Section 234B/234C via e-Pay Tax.
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
                  Submit &amp; Complete Mandatory Electronic Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Submit the revised return and immediately complete e-verification using Aadhaar OTP, NetBanking, Demat EVC, or Class 3 DSC. E-verification must be concluded within <strong>30 days</strong> of submission; failing to verify invalidates the revised filing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Optimization Strategies */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Tax Optimization Strategies through Revised Return Filing
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Beyond error correction, high-income earners, freelancers, and business owners leverage Section 139(5) as a proactive financial tool:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Maximizing Legitimate Tax Refunds</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              If delayed investment proofs (such as tuition fees, ELSS investments made in March, or Section 80D medical coverage for elderly parents) were not submitted to your employer by payroll freeze dates, claiming them in your revised return creates an immediate legitimate refund credit with statutory interest under Section 244A (0.5% per month).
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
              <Scale className="w-4 h-4" />
              <span>Switching Between Old &amp; New Regimes</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Salaried individuals who defaulted to the New Tax Regime (Section 115BAC) under automatic payroll deductions can calculate whether high HRA, home loan interest (Section 24(b)), and Section 80C deductions yield lower tax under the Old Regime, and switch regimes seamlessly before December 31st.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <History className="w-4 h-4" />
              <span>Preserving Loss Carry-Forward Rights</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Provided your original return was submitted before the statutory due date (July 31st or October 31st), revising your capital gains or business loss computation before December 31st preserves your legal entitlement to carry forward short-term and long-term capital losses for up to 8 assessment years.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Pre-Empting Section 270A Penalties</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              The Centralized Processing Centre automatically cross-references AIS disclosures against your return. Disclosing omitted bank interest, trading turnover, or dividend income voluntarily via a revised return completely eliminates under-reporting and misreporting charges (50% to 200% penalty).
            </p>
          </div>
        </div>
      </section>

      {/* Section 06: Recent Regulatory Developments */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Recent Developments &amp; Best Practices in e-Filing Revisions
        </h2>
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-3 text-xs sm:text-[13px] text-slate-700 font-normal leading-relaxed">
          <p>
            <strong>1. Automated Pre-Fill Synchronization:</strong> The modern e-filing portal automatically pulls verified Form 26AS TDS credits and updated AIS dividends into the revised utility, dramatically minimizing manual data entry errors.
          </p>
          <p>
            <strong>2. Real-Time AIS Feedback Integration:</strong> If an entry in your AIS is erroneous (e.g., duplicated share transactions or misattributed interest), taxpayers can submit instant feedback on the AIS portal before filing the revised return, ensuring zero mismatch flags.
          </p>
          <p>
            <strong>3. Transition to Section 139(8A) ITR-U:</strong> If a taxpayer completely misses the December 31st revised return deadline, standard revisions are no longer permitted. The only available remedy is filing an <strong>Updated Return (ITR-U)</strong> within 24 months, which requires paying 25% or 50% additional tax and cannot be used to claim additional refunds or increase losses.
          </p>
        </div>
      </section>

      {/* Section 07: Collapsible FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions: Optimizing Taxes via Revised Return
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
