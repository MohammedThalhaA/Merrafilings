"use client";

import React, { useState } from "react";
import Link from "next/link";
import IncomeTaxNoticeGuideLayout from "@/components/IncomeTaxNoticeGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronDown,
  Building2,
  Scale,
  Receipt,
  FileSpreadsheet,
  FileCheck2,
  Sparkles,
  AlertTriangle,
  FolderOpen,
  Search,
  UploadCloud,
  SendHorizontal,
  BookmarkCheck,
  ShieldAlert,
  HelpCircle,
  FileCode,
  KeyRound,
} from "lucide-react";

export default function EffectiveTaxNoticeResponseGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Section 245 refund adjustment, and can I object to it?",
      a: "Section 245 allows the Income Tax Department to set off any refund due to you in the current year against outstanding tax demands from prior assessment years. Upon receiving a notice under Section 245, you have 30 days to respond on the portal. You can agree to the adjustment, disagree if the past demand has already been paid or rectified, or partially disagree by submitting proof of payment.",
    },
    {
      q: "Why is CBDT Circular No. 19/2019 critical for all income tax notices?",
      a: "CBDT Circular No. 19/2019 mandates that any notice, summons, order, or letter issued by any income tax authority without a computer-generated Document Identification Number (DIN) is legally non-est (treated as invalid and never issued). Taxpayers must always verify the DIN before taking statutory action.",
    },
    {
      q: "Can I revise my Income Tax Return after receiving a notice?",
      a: "If you received a proposed adjustment intimation under Section 143(1)(a) or a defective return notice under Section 139(9), you can rectify and file a corrected response within the specified time. However, once a scrutiny notice under Section 143(2) is served, filing a revised return under Section 139(5) to alter claimed exemptions or reported income is legally impermissible after the statutory deadline (December 31st of the AY).",
    },
    {
      q: "What should be included in the submission paper-book uploaded to e-Proceedings?",
      a: "Your paper-book should include: (1) A formal cover letter addressing the Faceless Assessing Officer with your PAN, AY, and DIN, (2) A point-by-point factual and legal explanation addressing each query, (3) A computation of income reconciliation, and (4) Clearly indexed and cross-referenced Annexures (such as bank statements, purchase deeds, Form 16, or tax audit reports) in searchable PDF format.",
    },
    {
      q: "How do I track the final outcome after submitting my response?",
      a: "Log in to the e-filing portal and navigate to 'Pending Actions > e-Proceedings'. Click on the respective proceeding to view your submission history and check whether the Assessing Officer has issued an intimation of closure, a supplementary notice, or an Assessment Order under Section 143(3).",
    },
  ];

  return (
    <IncomeTaxNoticeGuideLayout
      currentSlug="effective-income-tax-notice-response-guide"
      title="Responding to an Income Tax Notice: Effective Handling Guide & Compliance Strategies"
      breadcrumbLabel="Effective Notice Response Guide"
      metaPublishedDate="AY 2026-27 Compliant / Comprehensive Litigation Guide"
      readingTime="9 min read"
      authorName="Merrafilings Direct Tax Litigation & Assessment Defense Desk"
    >
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Receiving an income tax notice can be daunting, yet understanding how to respond systematically reduces anxiety and prevents escalating tax disputes. Armed with precise statutory knowledge regarding the causes behind notice issuance and the procedural mechanics of faceless e-Proceedings, taxpayers can maintain compliance and resolve departmental queries with absolute confidence.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          An income tax notice is not a verdict of wrongdoing; it is an administrative inquiry requesting verification or clarification. Adopting a structured, evidence-backed approach ensures your legal rights are protected while resolving any computational or reporting discrepancies effectively.
        </p>
      </section>

      {/* Section 1: Understanding the Basics */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding the Core Basics: Why Notices are Issued
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Income tax notices are issued under various chapters of the Income Tax Act, 1961, driven by four predominant factors:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1">
              Discrepancies in Reported Income
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Numerical variations between declared figures in your ITR and information collected by the department through automated AIS, TIS, and SFT channels.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1">
              Non-Filing of Returns (Section 142(1))
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Failing to file an income tax return despite having high-value bank deposits, property acquisitions, or TDS deductions credited to your PAN.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1">
              Verification of Deductions &amp; Claims
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Requests for physical documentary proof regarding substantial deductions claimed under Section 80C, 80D, 80G (donations), 80E, or House Rent Allowance (HRA).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1">
              Tax Refund Withholding &amp; Adjustment (Section 245)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Notices proposing to withhold or adjust your eligible current year tax refund against disputed or unresolved tax demands from prior assessment years.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Key Elements of an Income Tax Notice */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Key Anatomy: Four Critical Elements of a Tax Notice
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-[11px] font-bold uppercase text-emerald-700 block mb-0.5">Element 1</span>
            <p className="text-xs font-semibold text-slate-900">Notice Number &amp; DIN</p>
            <p className="text-[11.5px] text-slate-600 mt-1 leading-snug">
              Unique digital identifier mandatory for validating the notice on incometax.gov.in.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-[11px] font-bold uppercase text-blue-700 block mb-0.5">Element 2</span>
            <p className="text-xs font-semibold text-slate-900">Assessment Year (AY)</p>
            <p className="text-[11.5px] text-slate-600 mt-1 leading-snug">
              The fiscal period under scrutiny. Ensures you retrieve and verify the correct tax year records.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-[11px] font-bold uppercase text-purple-700 block mb-0.5">Element 3</span>
            <p className="text-xs font-semibold text-slate-900">Reason for Notice</p>
            <p className="text-[11.5px] text-slate-600 mt-1 leading-snug">
              Detailed breakdown of flagged schedules, rejected deductions, or un-reconciled credits.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-[11px] font-bold uppercase text-rose-700 block mb-0.5">Element 4</span>
            <p className="text-xs font-semibold text-slate-900">Response Due Date</p>
            <p className="text-[11.5px] text-slate-600 mt-1 leading-snug">
              Strict statutory deadline. Submissions after this date are locked out by the e-filing system.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 6 Steps to Effective Notice Response */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. 6 Systematic Steps to Formulating an Airtight Response
        </h2>

        <div className="space-y-4 pt-1">
          {/* Step 1 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                1
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Verify Document Authenticity via DIN
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Confirm that the communication is genuine. Enter the DIN on the e-filing portal. In accordance with CBDT directives, notices issued without a valid DIN lack legal validity.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                2
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Gather Complete Transaction Paper-trail
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Collect corroborating documents: bank statements for all active accounts, Form 16/16A, investment counterfoils, broker statements, and deeds linked to the transaction in question.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                3
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Assess Notice Implications &amp; Legal Options
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Evaluate whether the notice demands payment, seeks additional data, or proposes additions. Determine whether to agree, disagree, file a Section 154 rectification, or seek an adjournment.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                4
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Draft a Point-by-Point Formal Rebuttal
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Draft a factual, respectful, and legally sound reply. Provide specific answers to every numbered query and support all claims with indexed documentary annexures.
            </p>
          </div>

          {/* Step 5 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                5
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Submit Online via e-Proceedings
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Log into incometax.gov.in, navigate to Pending Actions &gt; e-Proceedings, upload your response and attachments (ensuring file size compliance), and e-verify via DSC or Aadhaar OTP.
            </p>
          </div>

          {/* Step 6 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                6
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Archive Acknowledgment Slip &amp; Follow Up
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-10">
              Immediately download the official timestamped submission acknowledgment. Maintain permanent digital records and monitor the compliance dashboard for case closure intimations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Tips for a Seamless Experience */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Expert Tips for a Stress-Free Notice Resolution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Be Completely Proactive</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never wait until the final 48 hours. Compiling bank certificates and vendor confirmations often takes days, and server congestion near month-end deadlines can cause fatal upload failures.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Full Transparency &amp; Honesty</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              If an unintentional omission occurred in your ITR, acknowledging the discrepancy and paying the differential tax with applicable interest under Section 234B/C mitigates punitive penalties under Section 270A.
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
