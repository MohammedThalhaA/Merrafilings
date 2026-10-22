"use client";

import React, { useState } from "react";
import Link from "next/link";
import RevisedReturnGuideLayout from "@/components/RevisedReturnGuideLayout";
import {
  FileText,
  ShieldCheck,
  RotateCcw,
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
  FileSpreadsheet,
  Check,
} from "lucide-react";

export default function FileRevisedReturnRequiredDocumentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is the original 15-digit acknowledgment number mandatory when filing a revised return?",
      a: "The 15-digit acknowledgment number and filing date from your original ITR-V are statutory prerequisites under Part A General of the revised return utility. The Income Tax Department's system uses these details to link the amended schedules directly to your original assessment docket, allowing the Centralized Processing Centre (CPC Bengaluru) to substitute the old filing.",
    },
    {
      q: "Do I need to physically upload or attach investment receipts when filing a revised return?",
      a: "No. Income Tax Return forms in India are annexure-less. You do not upload scanned copies of Section 80C, 80D, or rent receipts on the portal. However, you must preserve physical or digital copies in your tax records, as the Assessing Officer may call for them during Section 143(1)(a) discrepancy proceedings or limited scrutiny under Section 143(2).",
    },
    {
      q: "What should I do if the tax deducted by my employer or client does not match Form 26AS?",
      a: "If TDS entries are missing or understated on Form 26AS, contact the deductor immediately to file a revised TDS return (Form 24Q or 26Q). Once the deductor corrects the filing and the credit reflects on TRACES and Form 26AS, compile the revised 26AS statement and file your revised return to claim full tax credits.",
    },
    {
      q: "Can I file a revised return without Form 16?",
      a: "Yes. If your employer has not issued an updated Form 16 or if you left the organization, you can compile monthly salary slips, your bank statements showing net salary credits, and the Annual Information Statement (AIS) to compute your gross taxable salary, professional tax, and standard deduction accurately.",
    },
    {
      q: "What documents are required to rectify misreported capital gains on stock or mutual fund trading?",
      a: "You need the consolidated Capital Gains Tax Statement or P&L statement provided by your stock broker (e.g., Zerodha, Groww, AngelOne) or Mutual Fund Registrar (CAMS/KFintech). This report segregates short-term capital gains (Section 111A at 15%/20%) and long-term capital gains (Section 112A at 10%/12.5% beyond the ₹1.25 Lakh exemption threshold).",
    },
    {
      q: "What happens if I fail to complete e-Verification within 30 days of filing the revised return?",
      a: "If electronic verification (via Aadhaar OTP, NetBanking, or Demat EVC) or physical transmission of a signed ITR-V to CPC Bengaluru is not completed within 30 days of submission, the revised return is legally deemed invalid. In such cases, the department treats the revised return as never filed and continues processing your original return.",
    },
  ];

  return (
    <RevisedReturnGuideLayout
      currentSlug="file-revised-return-required-documents"
      title="File Revised Return - Required Documents & Process Guide"
      breadcrumbLabel="Required Documents Guide"
      metaPublishedDate="AY 2026-27 Compliant / Rule 12"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax & Document Verification Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Statutory Documentation Checklist
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Essential Records, Proofs &amp; Verification Procedures for Section 139(5)
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Filing a revised income tax return requires precision. Because an amended filing overrides your earlier declaration, every new figure—whether it is an omitted bank interest item, an overlooked Section 80D health insurance premium, or a corrected broker capital gains ledger—must be substantiated by verifiable documentation. This comprehensive guide outlines the complete category-wise document checklist, statutory eligibility criteria, and portal procedures required to execute an error-free revised return.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: Core Document Categories */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Category-Wise Document Checklist for Revised Returns
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Assemble the following verification records before accessing the income tax e-filing portal to ensure seamless reconciliation across all schedules:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Card 1: Original Filing Proofs */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-100/80 transition-all duration-300">
                <Receipt className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                  1. Original Filing &amp; Identity Records
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 font-normal">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original ITR-V Acknowledgment:</strong> 15-digit receipt number &amp; filing timestamp.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Permanent Account Number (PAN):</strong> Validated and linked with Aadhaar.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Active Portal Credentials:</strong> e-Filing password &amp; Aadhaar-linked mobile for OTP.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Income Rectification Records */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-100/80 transition-all duration-300">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  2. Income Substantiation Documents
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 font-normal">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Form 16 (Part A &amp; B):</strong> Issued by employer showing salary breakdown.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Bank Interest Certificates:</strong> Savings account interest &amp; Fixed Deposit Form 16A.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Broker Capital Gain Reports:</strong> Annual equity, derivatives, and crypto P&amp;L ledgers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Tax Credits Statements */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 group-hover:scale-110 group-hover:bg-purple-100/80 transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                  3. Tax Credit &amp; SFT Ledgers
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 font-normal">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Form 26AS Tax Credit Statement:</strong> Verified TDS, TCS, and high-value transactions.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>AIS &amp; TIS Statements:</strong> Comprehensive records of share trades, dividends, and rent.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Advance Tax Challan Receipts:</strong> Challan 280 / BSR code for self-assessment tax paid.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4: Deductions Proofs */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100 group-hover:scale-110 group-hover:bg-amber-100/80 transition-all duration-300">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">
                  4. Chapter VI-A &amp; Exemption Proofs
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 font-normal">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Section 80C Receipts:</strong> PPF passbook, ELSS statements, life insurance premium.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Section 80D Mediclaim:</strong> Health insurance payment receipts for self &amp; senior parents.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>HRA &amp; Home Loan:</strong> Rent agreement, rent receipts, Form 10BA, and Section 24(b) certificate.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Statutory Eligibility Criteria */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Statutory Eligibility Criteria under Section 139(5)
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          Under the provisions of the Income Tax Act, 1961, any entity or individual who fulfills the following statutory conditions is entitled to file a revised return:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-3 px-4">Eligibility Parameter</th>
                <th className="py-3 px-4">Statutory Rule / Provision</th>
                <th className="py-3 px-4">Compliance Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Preceding Filing Prerequisite</td>
                <td className="py-3.5 px-4">Section 139(1) or Section 139(4)</td>
                <td className="py-3.5 px-4">The taxpayer must have filed an original timely return or a belated return. A person who never filed cannot file a revised return.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Bona Fide Omission / Mistake</td>
                <td className="py-3.5 px-4">Section 139(5) Pre-condition</td>
                <td className="py-3.5 px-4">Revision is legally meant for inadvertent omissions, misstatements, or calculation errors, not deliberate tax fraud or concealment.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Statutory Cutoff Timeline</td>
                <td className="py-3.5 px-4">31st December of Assessment Year</td>
                <td className="py-3.5 px-4">Must be filed on or before 31st December of the AY, or before completion of assessment by the AO, whichever is earlier.</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Assessment Status Prerequisite</td>
                <td className="py-3.5 px-4">Section 143(3) / 144 Completion</td>
                <td className="py-3.5 px-4">Receipt of automated Section 143(1) intimation does NOT prevent revision. Only a completed regular scrutiny assessment terminates revision rights.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 03: Step-by-Step Document Preparation Workflow */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Step-by-Step Document Reconciliation &amp; E-Filing Process
        </h2>
        <div className="space-y-3.5 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                1
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  Retrieve Original ITR-V &amp; Extract Receipt Number
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Download the acknowledgment of your first filing from your registered email or the portal under <em>e-File &gt; View Filed Returns</em>. Note the 15-digit acknowledgment number and filing date.
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
                  Reconcile Multi-Source Income Ledgers with AIS/TIS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Open your AIS statement and match each reported transaction against your bank accounts, dividend credits, and mutual fund redemption statements to determine exact omissions.
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
                  Prepare Revised Computation &amp; Deposit Balance Tax (Challan 280)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  If the addition of omitted income results in higher taxable liability, compute the additional tax and interest under Section 234B/234C, pay it online via e-Pay Tax, and retain the BSR code and Challan Identification Number (CIN).
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
                  Submit Revised ITR &amp; Complete e-Verification within 30 Days
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Enter the portal, choose Revised Return u/s 139(5), link the original acknowledgment number, re-populate verified schedules, attach CIN details of tax paid, submit, and instantly e-verify using Aadhaar OTP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Common Pitfalls in Documentation */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Common Pitfalls in Revised Return Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40 space-y-2">
            <div className="flex items-center gap-2 text-rose-800 font-semibold text-sm">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Quoting Wrong Acknowledgment Number</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Typing the PAN or filing confirmation reference instead of the official 15-digit numeric ITR-V acknowledgment number causes automated rejection of the revision by the CPC schema validator.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Neglecting 30-Day E-Verification Window</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              A revised return submitted without e-verification within 30 days is treated as never filed. If the December 31st deadline passes in the interim, you lose the opportunity to re-file under Section 139(5).
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-semibold text-sm">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <span>Failing to Re-Enter Accurate Baseline Figures</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Because a revised return overrides the original in its entirety, submitting only the corrected schedule while leaving other income sections blank results in inadvertent deletion of previously declared salary or business income.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-purple-200 bg-purple-50/40 space-y-2">
            <div className="flex items-center gap-2 text-purple-800 font-semibold text-sm">
              <Landmark className="w-4 h-4 text-purple-600" />
              <span>Unvalidated Bank Accounts for Refund Credit</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Enhanced refunds resulting from newly claimed Chapter VI-A deductions cannot be credited if the designated bank account on the portal does not have &quot;Validated&quot; and &quot;EVC Enabled&quot; status.
            </p>
          </div>
        </div>
      </section>

      {/* Section 05: Collapsible FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions: Required Documents for Revised Return
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
