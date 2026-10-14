"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstNoticeGuideLayout from "@/components/GstNoticeGuideLayout";
import {
  ShieldAlert,
  AlertTriangle,
  FileCheck2,
  Scale,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  FileText,
  BadgeAlert,
  Search,
  Sparkles,
  Gavel,
  Landmark,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What should be my immediate first step upon receiving a GST notice?",
    a: "Do not panic. Your immediate first step is to open the notice PDF downloaded from the GST portal (services.gst.gov.in), verify the Document Identification Number (DIN) for official authenticity, identify the specific section under which it was issued (e.g., Section 61 for scrutiny or Section 73/74 for tax demand), and note the exact statutory deadline for submitting your reply (normally 30 days).",
  },
  {
    q: "Can I pay the admitted tax voluntarily to reduce penalties?",
    a: "Yes. If the notice highlights a legitimate error such as late filing or an inadvertent ITC calculation mistake, you can pay the admitted tax along with applicable 18% annual interest via Form GST DRC-03 under Section 73(5) before the issuance of a formal demand order. This generally caps or waives statutory penalties under Section 73.",
  },
  {
    q: "What happens if I miss the reply deadline on my GST notice?",
    a: "Missing the reply deadline allows the adjudicating tax officer to initiate ex-parte proceedings under Section 62 (Best Judgment Assessment) or issue an adverse demand order under Section 73/74 on Form GST DRC-07. This can lead to statutory recovery actions under Section 79, including attachment of business bank accounts and cancellation of your GST registration.",
  },
  {
    q: "Is it mandatory to attend a personal hearing for a GST notice?",
    a: "A personal hearing is mandatory before an adverse order is passed against a taxpayer if requested in your reply. When submitting your response on Form ASMT-11 or DRC-06, you can explicitly tick the option requesting a personal hearing (virtual or physical) if the department proposes to reject your written submissions.",
  },
  {
    q: "Can Merrafilings handle the entire reply drafting and portal submission?",
    a: "Yes. Merrafilings provides end-to-end legal notice defense. Our team of Chartered Accountants and GST litigators analyzes the allegations, reconciles GSTR-1/3B/2B data, drafts a formal paragraph-wise legal rebuttal with statutory citations, and files your response electronically on the GST portal before the deadline.",
  },
];

export default function GstNoticeReceivedGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstNoticeGuideLayout
      currentSlug="gst-notice-received-guide"
      title="GST Notice Received? Don't Panic. Here's What You Should Do"
      breadcrumbLabel="Notice Received Action Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Legal & Tax Litigation Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro Section */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Receiving a GST notice can be intimidating, especially if it is the first time your business has been flagged by the Goods and Services Tax department. Many founders and accountants immediately assume that receiving a notice implies wrongful conduct or severe statutory penalties. In reality, that is rarely the case.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            A GST notice is primarily a formal statutory communication from the Central or State tax authorities requesting clarification, documentation, or reconciliation regarding data filed in your monthly or annual returns. In the vast majority of cases, notices are triggered by automated portal algorithms detecting mathematical variances between return forms. When handled methodically and responded to within the statutory timeline, most notices are dropped cleanly without financial penalties.
          </p>
        </section>

        {/* Quick Summary Highlights Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 border border-indigo-100/90 shadow-2xs">
          <div className="flex items-center gap-2 text-indigo-950 font-semibold text-sm mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Essential First Steps at a Glance</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal">
            <div className="p-3 bg-white rounded-xl border border-indigo-100/80 shadow-3xs">
              <span className="block text-slate-500 text-[11px] mb-1">Check Validity</span>
              <strong className="text-slate-900 text-[13px] block">Verify Portal DIN</strong>
              <p className="text-slate-600 mt-1 text-[11.5px]">Confirm Document Identification Number on cbic.gov.in</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100/80 shadow-3xs">
              <span className="block text-slate-500 text-[11px] mb-1">Limitation Window</span>
              <strong className="text-slate-900 text-[13px] block">Standard 30 Days</strong>
              <p className="text-slate-600 mt-1 text-[11.5px]">Statutory timeline to draft and upload reply</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100/80 shadow-3xs">
              <span className="block text-slate-500 text-[11px] mb-1">Voluntary Settlement</span>
              <strong className="text-emerald-700 text-[13px] block">Form DRC-03</strong>
              <p className="text-slate-600 mt-1 text-[11.5px]">Settle genuine errors with 0% or reduced penalty</p>
            </div>
          </div>
        </div>

        {/* Section 1: Why Do You Receive a GST Notice? */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Why Do You Receive a GST Notice?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The GST Network (GSTN) utilizes sophisticated artificial intelligence and automated data analytics engines that continuously cross-reference returns filed by buyers, suppliers, banking channels, and e-way bill portals. The tax department routinely issues notices due to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13.5px] text-slate-700 font-normal">
            <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block">Delay in Filing GST Returns:</strong>
                Failing to submit GSTR-3B, GSTR-1, or GSTR-9 within the monthly or annual statutory due dates.
              </div>
            </li>
            <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block">GSTR-1 vs GSTR-3B Mismatch:</strong>
                Variances between outward supplies declared in GSTR-1 and tax liability paid in GSTR-3B.
              </div>
            </li>
            <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block">GSTR-2B vs 3B ITC Divergence:</strong>
                Claiming more Input Tax Credit in GSTR-3B than reflected in auto-populated GSTR-2B.
              </div>
            </li>
            <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block">E-Invoicing &amp; E-Way Bill Discrepancies:</strong>
                Differences between reported values on the e-way bill portal and tax return invoices.
              </div>
            </li>
            <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block">Non-Payment or Short Payment of GST:</strong>
                Cash ledger shortfalls or incorrect utilization of CGST, SGST, and IGST credit heads.
              </div>
            </li>
            <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block">Departmental Scrutiny &amp; Audit Queries:</strong>
                Routine requests for books of accounts, purchase registers, or vendor payment proofs.
              </div>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 italic">
            Note: In many instances, a simple data entry discrepancy by one of your vendors—such as entering your GSTIN with a typo—triggers an automated system alert that can be resolved with proper invoice reconciliation.
          </p>
        </section>

        {/* Section 2: Types of GST Notices */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Types of GST Notices &amp; Their Legal Implications</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The Central Goods and Services Tax (CGST) Act, 2017 outlines distinct statutory notices depending on the stage of investigation and the nature of the alleged non-compliance:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
              <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Notice Type</th>
                  <th className="py-3 px-4">Statutory Form</th>
                  <th className="py-3 px-4">Governing Section</th>
                  <th className="py-3 px-4">Prescribed Response Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Non-Filing Notice</td>
                  <td className="py-3 px-4 text-slate-800">Form GSTR-3A</td>
                  <td className="py-3 px-4 text-slate-700">Section 46 / Rule 68</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">File pending returns within 15 days with late fees</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Return Scrutiny Notice</td>
                  <td className="py-3 px-4 text-slate-800">Form ASMT-10</td>
                  <td className="py-3 px-4 text-slate-700">Section 61 / Rule 99</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Submit explanation on Form ASMT-11 within 30 days</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Pre-SCN Intimation</td>
                  <td className="py-3 px-4 text-slate-800">Form DRC-01A</td>
                  <td className="py-3 px-4 text-slate-700">Rule 142(1A)</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Accept and pay via DRC-03 or contest via DRC-01B</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Show Cause Notice (Demand)</td>
                  <td className="py-3 px-4 text-slate-800">Form DRC-01</td>
                  <td className="py-3 px-4 text-slate-700">Section 73 or 74</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Draft formal legal reply on Form DRC-06 within 30 days</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Departmental Audit Intimation</td>
                  <td className="py-3 px-4 text-slate-800">Form ADT-01</td>
                  <td className="py-3 px-4 text-slate-700">Section 65 / Rule 101</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Provide statutory records and books within 15 working days</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Registration Clarification</td>
                  <td className="py-3 px-4 text-slate-800">Form GST REG-03</td>
                  <td className="py-3 px-4 text-slate-700">Rule 9(2)</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Submit clarification via Form GST REG-04 within 7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: What Should You Do After Receiving a GST Notice? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What Should You Do After Receiving a GST Notice? (5-Step Action Protocol)</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Follow this systematic 5-step protocol established by tax litigation experts to handle the notice efficiently:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-2 font-semibold text-indigo-950 text-sm mb-1">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold">1</span>
                <span>Download &amp; Verify Authenticity of the Notice</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 pl-8 leading-relaxed">
                Log in to the official GST portal (<code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">services.gst.gov.in</code>), navigate to <strong>User Services &gt; View Notices and Orders</strong>, and download the full notice including all annexures. Verify the mandatory Document Identification Number (DIN) on the CBIC portal to ensure it is legally valid.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-2 font-semibold text-indigo-950 text-sm mb-1">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold">2</span>
                <span>Ascertain the Statutory Section &amp; Limitation Due Date</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 pl-8 leading-relaxed">
                Determine whether the notice is issued under Section 61 (scrutiny), Section 73 (non-fraud demand), or Section 74 (fraud/suppression demand). Note down the strict response deadline (typically 30 days) in your compliance calendar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-2 font-semibold text-indigo-950 text-sm mb-1">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold">3</span>
                <span>Gather All Invoices, Ledgers &amp; Banking Payment Trails</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 pl-8 leading-relaxed">
                Retrieve the relevant tax period invoices, e-way bills, bank statement entries proving supplier payments within 180 days (Rule 37), and reconcile your internal purchase register against GSTR-2B.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-2 font-semibold text-indigo-950 text-sm mb-1">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold">4</span>
                <span>Draft a Structured Paragraph-Wise Legal Rebuttal</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 pl-8 leading-relaxed">
                Address each allegation in the notice sequentially. State factual justifications, reference relevant CBIC circulars or High Court judgments, attach supporting reconciliation sheets, and explicitly request a personal hearing if any adverse view is contemplated.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-2 font-semibold text-indigo-950 text-sm mb-1">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold">5</span>
                <span>File Electronically on the GST Portal with DSC/EVC</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 pl-8 leading-relaxed">
                Upload your drafted response on Form ASMT-11 or Form DRC-06, attach PDF proofs (up to 5MB each), sign digitally via Class 3 DSC or Aadhaar OTP, and archive the system-generated Application Reference Number (ARN) receipt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Can a GST Notice Be Resolved? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Can a GST Notice Be Resolved?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Yes, absolutely. The vast majority of GST notices are satisfactorily resolved without litigation once the taxpayer provides clear arithmetic reconciliations or rectifies pending compliances:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <strong className="text-indigo-900 block font-semibold text-sm">Missed Returns:</strong>
              <p>Filing the pending return immediately with late fees closes GSTR-3A non-filer notices automatically.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <strong className="text-indigo-900 block font-semibold text-sm">Data Mismatches:</strong>
              <p>Furnishing a chartered accountant reconciliation statement showing timing differences drops ASMT-10 scrutiny.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <strong className="text-indigo-900 block font-semibold text-sm">Genuine Tax Shortfalls:</strong>
              <p>Voluntarily remitting admitted tax via Form DRC-03 with 18% interest saves you from heavy Section 74 penalties.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes to Avoid */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>Common Mistakes to Avoid When Responding to a Notice</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Taxpayers often worsen their legal standing by committing avoidable mistakes during the reply process:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-rose-600 shrink-0">•</span>
              <span><strong>Ignoring the Notice:</strong> Believing the notice is an automated system glitch that will be forgotten. It never is; it escalates into an ex-parte demand order.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-rose-600 shrink-0">•</span>
              <span><strong>Missing the Reply Deadline:</strong> Allowing the 30-day window to lapse without submitting an interim extension application.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-rose-600 shrink-0">•</span>
              <span><strong>Submitting Incomplete Invoices:</strong> Uploading partial ledgers that fail to prove physical movement of goods or banking payment clearances.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-rose-600 shrink-0">•</span>
              <span><strong>Informal or Unsupported Arguments:</strong> Submitting colloquial explanations rather than citing specific statutory rules and circulars.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-rose-600 shrink-0">•</span>
              <span><strong>Waiting Until the 30th Day:</strong> Technical glitches on the GST portal or DSC driver failures on the final day can cause inadvertent missed deadlines.</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Final Thoughts */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Final Thoughts: Protecting Your Business Reputation
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Receiving a GST notice is not a crisis—it is an administrative opportunity to clarify your tax positions and rectify unintentional filing errors. The key is to act promptly, engage qualified tax practitioners, and submit a transparent, well-documented response within the prescribed timeline. Proactive resolution reinforces your compliance score and shields your business from costly litigation.
          </p>
        </section>

        {/* Section 7: Interactive FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions (FAQs)</span>
          </h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1F1646] via-[#2D1B69] to-[#1F1646] text-white shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Merrafilings Notice Defense Support</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Need Expert Assistance Drafting Your GST Notice Reply?
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Our specialized tax litigators review your notice, evaluate statutory grounds, reconcile return ledgers, and draft formal, audit-ready submissions within 24 to 48 hours.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-notice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore GST Notice Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstNoticeGuideLayout>
  );
}
