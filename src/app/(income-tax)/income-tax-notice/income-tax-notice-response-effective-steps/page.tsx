"use client";

import React, { useState } from "react";
import Link from "next/link";
import IncomeTaxNoticeGuideLayout from "@/components/IncomeTaxNoticeGuideLayout";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronDown,
  Building2,
  Scale,
  Receipt,
  FileSpreadsheet,
  FileCheck2,
  ShieldCheck,
  Search,
  UploadCloud,
  SendHorizontal,
  FolderOpen,
  Sparkles,
  HelpCircle,
  FileWarning,
  Flame,
  BadgeAlert,
} from "lucide-react";

export default function IncomeTaxNoticeResponseStepsGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What are the most frequent triggers for an automated Income Tax notice in India?",
      a: "The most common triggers include: (1) Inconsistencies between your filed ITR and the Annual Information Statement (AIS) or Form 26AS, (2) Failure to report interest income from savings accounts, fixed deposits, or recurring deposits, (3) High-Value Financial Transactions reported by banks and registrars under the Statement of Financial Transactions (SFT), and (4) Random computerized selection under the Computer Assisted Scrutiny System (CASS).",
    },
    {
      q: "What is the consequence of not replying to a Section 139(9) Defective Return notice within 15 days?",
      a: "If you fail to rectify a defective return within 15 days (or an extended period granted by the Assessing Officer), your filed return is treated as an 'invalid return'. This legally means the return is deemed never to have been filed, exposing you to late filing fees under Section 234F, interest under Section 234A, forfeiture of carry-forward losses, and non-issuance of refunds.",
    },
    {
      q: "How do I verify if a tax notice received by email is genuine or fraudulent?",
      a: "Every authentic communication from the Income Tax Department contains a unique Document Identification Number (DIN). Go to the official e-filing portal (incometax.gov.in), click 'Authenticate Notice/Order issued by ITD', and enter the DIN along with your mobile number. If the notice does not appear in the portal database, it is non-genuine or invalid in accordance with CBDT Circular No. 19/2019.",
    },
    {
      q: "Can I submit my notice response physically at the local Income Tax Office?",
      a: "Under the Faceless Assessment and e-Proceedings regime, physical submissions at local wards are strictly discontinued for automated and faceless notices. All submissions, explanations, and supporting documents must be uploaded digitally through your e-filing dashboard under 'Pending Actions > e-Proceedings'.",
    },
    {
      q: "What should I do if I agree with the tax demand raised in the notice?",
      a: "If the notice correctly identifies an omitted income or tax calculation error that you agree with, you can select 'Agree with Demand' on the portal, pay the outstanding tax and statutory interest via Challan (ITNS 280), and submit the Challan BSR code and CIN on the portal to close the demand.",
    },
  ];

  return (
    <IncomeTaxNoticeGuideLayout
      currentSlug="income-tax-notice-response-effective-steps"
      title="Understanding Your Income Tax Notice Response: Effective Steps & Strategic Compliance"
      breadcrumbLabel="Understanding Your Notice Response"
      metaPublishedDate="AY 2026-27 Compliant / e-Proceedings Standards"
      readingTime="9 min read"
      authorName="Merrafilings Direct Tax Litigation & Assessment Defense Desk"
    >
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Receiving an income tax notice can feel intimidating, but responding methodically, accurately, and punctually is vital. Understanding the underlying statutory trigger behind the communication and adhering to a disciplined response methodology eliminates conflicts with the tax authorities, protects your financial reputation, and shields you from unnecessary tax demands and interest charges.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          With the Central Board of Direct Taxes (CBDT) transitioning entirely to data-driven risk engines, computerized analytics cross-reference your filed return against massive data streams from banks, mutual fund houses, credit card issuers, and sub-registrars. When variances emerge, automated notices are generated. This guide breaks down why notices are triggered, how to decode them, and the 5 effective steps to formulate a flawless response.
        </p>
      </section>

      {/* Section 1: What Triggers an Income Tax Notice */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What Triggers an Income Tax Notice?
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Direct tax scrutiny is rarely arbitrary today. Notices are primarily triggered by systemic data discrepancies across four primary avenues:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Trigger 1 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FolderOpen className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
              Mismatched Financial Information
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discrepancies between your filed ITR and third-party records, including Form 16 (employer salary certificate), Form 26AS (tax credit ledger), or the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS).
            </p>
          </div>

          {/* Trigger 2 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileWarning className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
              Non-Disclosure of Income Sources
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Failing to declare secondary income streams such as savings account interest, term deposit interest, stock market intraday or F&amp;O trading turnover, foreign assets, or crypto/virtual digital asset capital gains.
            </p>
          </div>

          {/* Trigger 3 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Flame className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-rose-700 transition-colors mb-2">
              High-Value Transactions (SFT)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Significant financial movements flagged by reporting institutions under Section 285BA, such as cash deposits exceeding ₹10 Lakhs, credit card settlements over ₹10 Lakhs, or immovable property transactions exceeding ₹30 Lakhs.
            </p>
          </div>

          {/* Trigger 4 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
              CASS Random &amp; Rule-Based Scrutiny
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Computer Assisted Scrutiny System (CASS) algorithms periodically flag returns where gross profit percentages drop unexpectedly, excessive unsecured loans are introduced, or high refund claims appear abnormal.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Decoding the Tax Notice */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Decoding the Tax Notice: Four Principal Categories
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Upon receiving a communication, your first duty is to decode its legal nomenclature and understand its statutory mandate:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wide">
                Section 156
              </span>
              <h4 className="text-sm font-semibold text-slate-900">Demand Notice</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Served when the department concludes that tax, interest, or penalty is due from you following assessment or rectification. Requires payment within 30 days of service, failing which 1% per month interest accrues under Section 220(2).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wide">
                Section 143(2)
              </span>
              <h4 className="text-sm font-semibold text-slate-900">Scrutiny Notice</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Initiates formal faceless scrutiny. Must be served within 3 months from the end of the financial year in which the return was furnished. Demands production of books, invoices, and vouchers to substantiate claims.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wide">
                Section 139(9)
              </span>
              <h4 className="text-sm font-semibold text-slate-900">Defective Return Notice</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Issued when an ITR contains fatal errors (e.g., claiming TDS without declaring corresponding income, missing balance sheet schedules for audit cases, or unpaid self-assessment tax). Grants exactly 15 days to rectify.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-rose-400 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[11px] font-bold uppercase tracking-wide">
                Section 148 / 148A
              </span>
              <h4 className="text-sm font-semibold text-slate-900">Reassessment Notice for Prior Years</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Issued when the department possesses specific risk-flagged information indicating income chargeable to tax escaped assessment. Requires filing a return in response and defending past year transaction histories.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 5 Steps to Responding Effectively */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. 5 Systematic Steps to Responding Effectively
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          With notice particulars decoded, follow this battle-tested 5-step roadmap to draft and submit a compliant response:
        </p>

        <div className="space-y-4 pt-1">
          {/* Step 1 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                1
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Review the Notice Thoroughly
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Download the original PDF from the e-filing portal. Verify the Assessment Year, Document Identification Number (DIN), and response deadline. Note every specific paragraph and table where the department questions figures.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                2
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Gather Complete Corroborative Documentation
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Collect primary evidence: bank statements for all operational bank accounts, salary slips, Form 16/16A, investment proofs under Chapter VI-A (80C, 80D, 80G), capital asset purchase/sale agreements, and audited balance sheets if applicable.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                3
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Consult a Direct Tax Professional
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Tax litigation involves subtle interpretations of CBDT Circulars and judicial rulings. Consulting certified Chartered Accountants ensures you evaluate whether to agree, file a Section 154 rectification, or mount a formal statutory objection.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                4
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Draft a Comprehensive, Point-by-Point Rebuttal
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Address every numbered query sequentially. Maintain an objective, respectful, and authoritative tone. Cross-reference every factual statement with marked Annexures (e.g., Annexure A: Bank Ledger; Annexure B: TDS Certificate).
            </p>
          </div>

          {/* Step 5 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                5
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Submit Online via e-Proceedings &amp; Preserve Acknowledgment
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Upload your response and PDF attachments under &apos;Pending Actions &gt; e-Proceedings&apos;. E-verify using Digital Signature Certificate (DSC) or Aadhaar OTP. Immediately download and archive the official Acknowledgment Slip.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Avoid Common Mistakes */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Fatal Mistakes to Avoid When Responding to Tax Notices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-rose-800 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Ignoring the Notice</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ignoring notices leads directly to ex-parte best judgment assessments under Section 144, where the officer assesses tax at maximum rates without giving you further hearings.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-rose-800 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-600" />
              <span>Delaying the Response</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Once the portal deadline expires, the submission window locks automatically. Any subsequent filing requires condonation of delay petitions, causing immense procedural friction.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-rose-800 flex items-center gap-1.5">
              <FileWarning className="w-4 h-4 text-rose-600" />
              <span>Submitting Inaccurate Data</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Providing contradictory statements or unverified bank figures triggers under-reporting penalties under Section 270A, ranging from 50% to 200% of the tax payable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-medium text-slate-900 hover:text-emerald-700 hover:bg-slate-50/60 transition cursor-pointer"
                >
                  <span className="text-xs sm:text-[13.5px] leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </IncomeTaxNoticeGuideLayout>
  );
}
