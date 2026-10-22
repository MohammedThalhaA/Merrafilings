"use client";

import React, { useState } from "react";
import Link from "next/link";
import IncomeTaxNoticeGuideLayout from "@/components/IncomeTaxNoticeGuideLayout";
import {
  ShieldAlert,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Building2,
  FileText,
  Scale,
  Receipt,
  FileSpreadsheet,
  AlertTriangle,
  FolderSync,
  UploadCloud,
  SendHorizontal,
  KeyRound,
  ShieldCheck,
  UserCheck,
  SearchCheck,
  Sparkles,
} from "lucide-react";

export default function TaxNoticeConsultationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What should be my immediate first step upon receiving an income tax notice?",
      a: "Do not panic or rush to submit an unverified reply. First, verify the Document Identification Number (DIN) on the official incometax.gov.in portal under 'Authenticate Notice Issued by ITD'. Once confirmed genuine, note the statutory deadline (usually 15 to 30 days) and identify the specific section (e.g., Section 139(9), 143(1)(a), 142(1), or 143(2)) to determine whether it is an informational query, computational adjustment, or scrutiny audit.",
    },
    {
      q: "Can a hasty or premature response worsen my tax situation?",
      a: "Yes. In direct tax litigation, early admissions or incomplete explanations become part of the department's permanent assessment record. Submitting half-baked explanations or conflicting bank statements without reconciling them against your filed ITR, Form 26AS, and AIS often triggers deeper inquiries or converts a limited scrutiny into a complete faceless audit.",
    },
    {
      q: "What is the difference between an informational inquiry and a proposed adjustment under Section 143(1)(a)?",
      a: "An informational inquiry (such as e-Verification under the Compliance Portal) simply asks for clarification regarding high-value transactions. A proposed adjustment under Section 143(1)(a) is a formal notification that CPC Bengaluru has detected an arithmetical error, tax credit mismatch, or disallowed deduction, and intends to increase your taxable income or tax demand unless you file a point-by-point objection within 30 days.",
    },
    {
      q: "Why is professional CA triage important when dealing with tax notices?",
      a: "Tax notices are written in dense statutory language. Professional triage categorizes the notice by risk level, separates routine clerical anomalies from severe under-reporting risks (Section 270A), establishes a precise evidentiary paper-book, and drafts legally backed submissions citing relevant board circulars and judicial precedents.",
    },
    {
      q: "What happens after submitting a response on the e-Proceedings portal?",
      a: "Submitting a response generates an official e-Proceedings Acknowledgment Number. However, the process does not terminate immediately. The Assessing Officer or Faceless Assessment Unit reviews the submission and may issue a follow-up query, pass an assessment order under Section 143(3), or issue a closure intimation. It is essential to keep tracking the portal status regularly.",
    },
  ];

  return (
    <IncomeTaxNoticeGuideLayout
      currentSlug="tax-notice-consultation-your-expert-guidance"
      title="Tax Notice Consultation: Your Expert Strategic Guidance for Resolving Income Tax Notices"
      breadcrumbLabel="Tax Notice Consultation"
      metaPublishedDate="AY 2026-27 Compliant / Faceless Assessment Scheme"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax Litigation & Assessment Defense Desk"
    >
      {/* Intro Section */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Every year, the arrival of an official communication or email alert from the Income Tax Department can spark emotions ranging from mild curiosity to acute anxiety in just moments. This is the psychological reality of an income tax notice: its formal bureaucratic language, references to statutory sections, and stern deadline warnings can overwhelm even conscientious taxpayers.
        </p>
        <p className="text-slate-600 leading-relaxed">
          However, diving headfirst into panic or rushing to submit an impulsive explanation often complicates rather than simplifies the situation. Some notices are purely routine administrative communications, others correct minor arithmetic or TDS credit mismatches, and some arise due to clerical reporting errors by third-party reporting entities (such as banks, registrars, or employers). What matters is adopting a calm, composed strategy: <strong>reviewing the notice, verifying its legal authenticity, collating solid documentary evidence, and formulating an airtight legal response</strong>.
        </p>
      </section>

      {/* Core Principle Callout */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-slate-50 border border-emerald-200/80 shadow-2xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-emerald-950">
              The Golden Rule of Income Tax Notice Handling
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Never ignore a notice, and never rush an unvetted response. In Indian tax litigation, every written statement uploaded to the e-Proceedings portal becomes part of the statutory case record. A composed, documented, and professional response protects your rights and ensures fair assessment.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: The Early Triage Moment */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Early Triage Moment: Assessing Notice Severity &amp; Scope
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Triage may sound like medical terminology, but in tax litigation, distinguishing whether an incoming communication is merely informational, highlights a reconcilable data mismatch, or signals impending penalty proceedings determines every subsequent step you must take.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Card 1 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 block mb-1">
              Level 1 • Routine Clarification
            </span>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
              Informational &amp; Verification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Notices such as automated e-Verification queries or basic Form 26AS/AIS credit mismatches. Usually resolved with simple digital confirmation or minor data reconciliation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 block mb-1">
              Level 2 • Adjustment Notice
            </span>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
              Proposed Adjustments &amp; Defects
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Section 143(1)(a) proposed additions or Section 139(9) defective return alerts. Demands structured objections and document citations within a strict 15 or 30-day window.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Scale className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-700 block mb-1">
              Level 3 • Audit &amp; Litigation
            </span>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-rose-700 transition-colors mb-2">
              Scrutiny &amp; Reassessment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Section 143(2) faceless scrutiny, Section 142(1) formal inquiry, or Section 148 income escaping assessment. Demands legal paper-books, audit ledgers, and forensic defense.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Emotional Comfort vs Technical Compliance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The Role of Expert Consultation: Emotional Comfort &amp; Technical Precision
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Many taxpayers consult direct tax professionals not merely for mechanical e-filing, but for critical psychological reassurance. A calm, authoritative assessment from a practicing Chartered Accountant—such as <em>&quot;This is a standard computerized mismatch between your broker&apos;s AIS reporting and Schedule CG; provide your contract notes and bank statements, and we will reconcile it&quot;</em>—brings immediate peace of mind.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          This emotional comfort is the essential foundation for structured compliance. Once anxiety is contained, the consultation transitions into technical precision: examining the Assessing Officer&apos;s statutory jurisdiction, confirming Document Identification Number (DIN) validity, checking limitation dates, and pinpointing the exact financial schedules in dispute.
        </p>
      </section>

      {/* Section 3: Gather, Annotate, Wait */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Gather, Annotate, Wait: The Systematic Documentation Cycle
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Gathering documents often moves at an uneven pace. On one day, you easily locate salary Form 16 and bank interest certificates; on the next, you find yourself tracking down an elusive purchase deed or vendor invoice from three assessment years ago. Meanwhile, departmental deadlines—be it 30 days, 15 days, or a stringent 7 days—march on inexorably.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Spreadsheet Triaging &amp; Reconciliation
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Create a working audit schedule categorizing notice points into Verified, Pending Evidence, and Ambiguous. Contrast filed ITR entries against Form 26AS, AIS, and TIS to identify discrepancies before writing a single word of your reply.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-slate-900 group-hover:text-purple-800 transition-colors">
                Statutory Deadline Tracking
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under the Income Tax Act, non-compliance with statutory notice deadlines triggers ex-parte best judgment assessments under Section 144 or penalties under Section 272A. If gathering third-party evidence requires extra time, an interim adjournment petition must be filed online.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Reply is Not the End */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Reply is Not the End: Post-Submission Dynamics &amp; Case Closure
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Uploading a drafted response to the e-Proceedings portal and receiving an acknowledgment reference number brings great psychological relief, but it is not the statutory conclusion of the case. In modern faceless tax administration:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-700 list-disc pl-5 leading-relaxed">
          <li>
            <strong>Digital Tagging &amp; File Formats:</strong> Departmental servers impose file size restrictions and PDF naming protocols. Scrambling to re-compress files or resolving failed upload errors at 11:50 PM on deadline day can be catastrophic.
          </li>
          <li>
            <strong>Follow-Up Questionnaires:</strong> The Assessing Officer or Faceless Assessment Unit often issues supplementary queries or requests specific cross-confirmations under Section 133(6).
          </li>
          <li>
            <strong>Uncovering Systemic Issues:</strong> Notice consultations occasionally expose deeper structural matters, such as misclassified capital gains, un-reconciled GST turnover, or undeclared overseas assets in Schedule FA, which require forward-looking tax advisory and revised return planning.
          </li>
        </ul>
      </section>

      {/* Section 5: Comparative Overview Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Notice Classification, Time Limits &amp; Statutory Action Matrix
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 font-semibold">Statutory Notice</th>
                <th className="py-3 px-4 font-semibold">Primary Trigger / Cause</th>
                <th className="py-3 px-4 font-semibold">Statutory Deadline</th>
                <th className="py-3 px-4 font-semibold">Consequence of Inaction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">Section 143(1)(a)</td>
                <td className="py-3 px-4">Arithmetic error, inconsistent deduction, or 26AS mismatch</td>
                <td className="py-3 px-4 font-medium text-emerald-700">30 Days</td>
                <td className="py-3 px-4 text-rose-600 font-medium">Automatic tax demand &amp; interest under 234B/C</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">Section 139(9)</td>
                <td className="py-3 px-4">Defective return (missing schedules, unpaid self-assessment tax)</td>
                <td className="py-3 px-4 font-medium text-amber-700">15 Days</td>
                <td className="py-3 px-4 text-rose-600 font-medium">Return treated as invalid (deemed never filed)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">Section 142(1)</td>
                <td className="py-3 px-4">Inquiry notice to produce specific accounts, bills, or unfiled return</td>
                <td className="py-3 px-4 font-medium text-blue-700">As specified (typically 15 days)</td>
                <td className="py-3 px-4 text-rose-600 font-medium">₹10,000 penalty under 272A + Section 144 assessment</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">Section 143(2)</td>
                <td className="py-3 px-4">Selection for detailed Faceless Scrutiny assessment via CASS</td>
                <td className="py-3 px-4 font-medium text-purple-700">Within 3 months of AY end</td>
                <td className="py-3 px-4 text-rose-600 font-medium">Unilateral ex-parte order &amp; 50%-200% penalty under 270A</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">Section 148</td>
                <td className="py-3 px-4">Information suggesting income chargeable to tax escaped assessment</td>
                <td className="py-3 px-4 font-medium text-indigo-700">30 to 90 Days</td>
                <td className="py-3 px-4 text-rose-600 font-medium">Reassessment order, heavy tax demand, interest &amp; prosecution</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Interactive Collapsible FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Frequently Asked Questions on Tax Notice Consultation
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
