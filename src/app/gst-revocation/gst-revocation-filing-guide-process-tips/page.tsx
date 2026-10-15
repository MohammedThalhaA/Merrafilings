"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstRevocationGuideLayout from "@/components/GstRevocationGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Scale,
  Clock,
  ShieldCheck,
  Building2,
  Receipt,
  RotateCcw,
  Undo2,
  Lightbulb,
  Check,
  Layers,
  Send,
  FileCheck2,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What digital signing mechanism is mandatory for filing Form GST REG-21?",
    a: "Under Rule 26 of the CGST Rules, incorporated entities such as Private Limited Companies, Public Limited Companies, and LLPs must digitally sign Form GST REG-21 using a Class 3 Digital Signature Certificate (DSC) of the Authorized Signatory registered on the portal. Proprietorships, Hindu Undivided Families (HUFs), and Partnership firms can use Electronic Verification Code (EVC) via Aadhaar OTP.",
  },
  {
    q: "Can I file Form GST REG-21 if the cancellation order was passed more than 90 days ago?",
    a: "Yes, but it requires a formal Condonation of Delay petition. Under the amended Section 30 proviso, the Joint or Additional Commissioner can condone delay up to an additional 90 days (total 180 days), and the Principal Commissioner or Commissioner can condone delay for a further 90 days (total 270 days) upon showing 'sufficient cause'.",
  },
  {
    q: "What constitutes 'sufficient cause' for condoning delay in revocation filing?",
    a: "Recognized grounds under indirect tax case law include: serious medical incapacitation of the proprietor/managing director, severe natural disasters or local disruptions, prolonged commercial disruption or death of key accounting personnel, and unexpected banking/account freezes where reasonable diligence is evidenced.",
  },
  {
    q: "How can I check the real-time processing status of my revocation application?",
    a: "After submitting Form GST REG-21, a 15-digit Application Reference Number (ARN) is issued. You can track its live status on the GST portal under Services > Registration > Track Application Status by entering the ARN. Key statuses include 'Pending for Processing', 'Notice Issued (REG-23)', 'Approved (REG-22)', or 'Rejected (REG-05)'.",
  },
  {
    q: "What should I do if the tax officer issues a rejection order in Form GST REG-05?",
    a: "If the revocation is rejected, you must file an administrative appeal before the First Appellate Authority (Joint Commissioner of Appeals) under Section 107 of the CGST Act using Form GST APL-01 within 3 months, accompanied by a mandatory 10% pre-deposit of the disputed tax liability.",
  },
];

export default function GstRevocationFilingGuideProcessTipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstRevocationGuideLayout
      currentSlug="gst-revocation-filing-guide-process-tips"
      title="Introduction to GST Revocation Filing: Process, Timelines & Practical Tips"
      breadcrumbLabel="Filing Guide & Process Tips"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            In modern indirect tax administration, understanding statutory processes such as <strong className="font-semibold text-slate-950">GST Revocation Filing</strong> is fundamental for commercial survival. When tax officers initiate involuntary cancellation under Section 29(2) due to continuous return defaults or administrative discrepancies, business operations are thrown into sudden jeopardy.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            However, by mastering the procedural nuances of <strong className="font-semibold text-slate-950">Form GST REG-21</strong>, businesses can effectively overturn cancellation orders and restore their GSTIN. Governed by <strong className="font-semibold text-slate-950">Section 30 of the CGST Act</strong> read with <strong className="font-semibold text-slate-950">Rule 23 of the CGST Rules</strong>, this guide provides an operational walkthrough, statutory timelines, delay condonation strategies, and pro-tips for error-free filing.
          </p>
        </section>

        {/* Section 1: Why Revocation Filing is Mission-Critical */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Why Timely Revocation Filing is Mission-Critical</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing for revocation within prescribed statutory timelines preserves your corporate identity and shields your business from catastrophic liabilities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                <Receipt className="w-4 h-4 text-emerald-600" />
                <span>Legitimate Tax Invoicing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reactivates your legal right to issue GST tax invoices, charge applicable tax rates, and allow your B2B customers to claim seamless Input Tax Credit.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>Avoid Section 122 Penalties</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prevents devastating tax penalties (up to 100% of tax collected or ₹10,000) and personal liabilities for directors and partners under Section 122/132.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                <Undo2 className="w-4 h-4 text-purple-600" />
                <span>Credit Ledger Unfreezing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unblocks your Electronic Credit Ledger balances, enabling accumulated ITC to be legally utilized against outward tax liabilities once restored.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Filing Workflow */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step Revocation Filing Workflow on the GST Portal</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Follow this rigorous 5-step operational protocol when preparing and submitting Form GST REG-21:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <span>Step 1: Complete Pre-Filing Tax &amp; Return Clearance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Under Rule 23, the GST portal enforces automated pre-conditions: you must file all overdue returns (GSTR-1, GSTR-3B, CMP-08) up to the effective cancellation date and pay all taxes, Section 50 interest (18% p.a.), and late fees before Form GST REG-21 can be unlocked.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <span>Step 2: Log in and Navigate to Registration Services</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Log into <code className="font-mono text-slate-800">services.gst.gov.in</code>. Navigate to <strong className="text-slate-800 font-semibold">Services &gt; Registration &gt; Application for Revocation of Cancelled Registration</strong>. The screen will automatically display your cancellation order number (Form GST REG-19) and cancellation date.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <span>Step 3: Articulate Reason for Revocation with Precision</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                In the mandatory text box, draft a comprehensive justification explaining why non-compliance occurred, confirming that all defaulting returns and payments have been discharged, and respectfully petitioning for registration restoration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
                <span>Step 4: Upload Corroborating Documentary Evidence</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Attach proof of return filing acknowledgments, tax payment challan receipts, bank statements, medical/factual justification documents, and condonation petitions (if filing between 90 and 270 days) in PDF format (up to 5 MB).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
                <span>Step 5: Sign Digitally (DSC/EVC) &amp; Receive 15-Digit ARN</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Check the verification declaration, select the Authorized Signatory, enter place, and submit with Class 3 DSC (for Companies/LLPs) or EVC (Aadhaar OTP for Proprietorships/Partnerships). Retain the generated 15-digit Application Reference Number (ARN) for real-time tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Statutory Timelines & Delay Condonation Framework */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory Timelines &amp; Three-Tier Delay Condonation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Section 30 establishes a structured three-tier limitation timeline for filing Form GST REG-21:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">Limitation Window</th>
                  <th className="p-3.5 sm:p-4">Competent Authority</th>
                  <th className="p-3.5 sm:p-4">Filing Requirement &amp; Legal Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Within 90 Days</td>
                  <td className="p-3.5 sm:p-4 font-medium text-slate-900">Proper Tax Officer (Jurisdictional Ward)</td>
                  <td className="p-3.5 sm:p-4">Standard statutory window. File directly on the portal without requiring formal condonation.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-amber-700">90 to 180 Days</td>
                  <td className="p-3.5 sm:p-4 font-medium text-slate-900">Additional / Joint Commissioner</td>
                  <td className="p-3.5 sm:p-4">Requires formal Condonation Petition under Section 30 proviso establishing &apos;sufficient cause&apos;.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-red-700">180 to 270 Days</td>
                  <td className="p-3.5 sm:p-4 font-medium text-slate-900">Principal Commissioner / Commissioner</td>
                  <td className="p-3.5 sm:p-4">Requires high-level condonation petition demonstrating exceptional hardship or insurmountable delay.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Process Tips & Pitfall Avoidance */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Expert Process Tips for Fast-Track Revocation Approval</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Incorporate these practical tips to ensure your revocation is processed without procedural roadblocks:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                Tip 1: Clear Electronic Cash Ledger Deficits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensure that sufficient cash balance exists in your Electronic Cash Ledger under Major Heads (IGST/CGST/SGST) and Minor Heads (Tax/Interest/Fee) to offset liabilities before submitting pending returns.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                Tip 2: Cross-Reference GSTR-2B Before 3B
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When filing overdue GSTR-3B returns, ensure ITC claimed strictly matches available GSTR-2B records to prevent automated Rule 88D system flags that trigger fresh cancellation proceedings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                Tip 3: Prepare for Form GST REG-23 Notice
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the officer issues a clarification notice in Form GST REG-23, prepare your response immediately. Form GST REG-24 must be filed within 7 working days; missing this deadline triggers immediate rejection under REG-05.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 group-hover:text-[#5C3BFF] transition-colors">
                Tip 4: Calendar the 30-Day Interim Return Rule
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Once the revocation order in Form GST REG-22 is received, calendar the mandatory 30-day window under Rule 23(1) to file all returns for the period between cancellation and restoration order date.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="space-y-2.5 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200 hover:border-[#5C3BFF] hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Overcome GST Cancellation with Expert Legal Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Whether filing within 90 days or requiring delay condonation representation before Commissioners, Merrafilings ensures your Form GST REG-21 is prepared with precision.
              </p>
            </div>
            <Link
              href="/gst-revocation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-[#155EEF] hover:text-white text-xs font-semibold shadow-md transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>Explore GST Revocation Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </article>
    </GstRevocationGuideLayout>
  );
}
