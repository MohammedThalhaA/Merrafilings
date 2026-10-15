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
  ListOrdered,
  Search,
  FolderCheck,
  Send,
  MessageSquare,
  FileCheck2,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Why should businesses choose Merrafilings for GST Revocation?",
    a: "Merrafilings pairs you with experienced Indirect Tax Advocates and Chartered Accountants who perform automated return reconciliation, compute exact statutory interest, draft legally sound condonation petitions, and handle all show-cause notices (REG-23) to guarantee the fastest path to Form GST REG-22 restoration.",
  },
  {
    q: "How many days does it typically take to restore a cancelled GST registration?",
    a: "Once Form GST REG-21 is filed, the proper tax officer is statutorily mandated to evaluate the application within 30 days. In straightforward cases where all defaulting returns and payments are cleared, approval (Form GST REG-22) is often received within 7 to 15 working days. If an SCN in REG-23 is issued, the overall timeline averages 20 to 35 days.",
  },
  {
    q: "Can I generate e-way bills immediately after Form GST REG-22 is issued?",
    a: "Yes. Once the proper officer passes the revocation order in Form GST REG-22, the GST common portal updates your status to 'Active'. Within a few hours of synchronization between the GST portal and the National Informatics Centre (NIC) E-Way Bill system, full e-way bill generation is restored.",
  },
  {
    q: "What happens if I fail to file interim returns within 30 days of receiving REG-22?",
    a: "Under Rule 23(1) of the CGST Rules, filing all pending returns from the cancellation date to the revocation order date within 30 days is a mandatory condition. If you breach this 30-day requirement, the tax officer can initiate fresh cancellation proceedings under Section 29(2) without further indulgence.",
  },
  {
    q: "Can an application for revocation be filed offline at the local GST tax ward?",
    a: "No. The revocation process is 100% digitalized on the GST common portal (services.gst.gov.in). Form GST REG-21 must be submitted electronically through the portal. However, for complex condonation petitions or personal hearings pursuant to Form GST REG-23 notices, personal representation before the jurisdictional Joint/Additional Commissioner may be required.",
  },
];

export default function GstRevocationGuideIn5EasyStepsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstRevocationGuideLayout
      currentSlug="gst-revocation-guide-in-5-easy-steps"
      title="GST Revocation in 5 Easy Steps with Merrafilings"
      breadcrumbLabel="5 Easy Steps Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Goods and Services Tax (GST) compliance is the lifeblood of legitimate commerce in India. However, operational hurdles, cash flow shortages, or administrative lapses can sometimes result in the involuntary cancellation of your GST registration by the tax department. When this occurs, taxable trading halts, e-way bill generation is blocked, and buyers cannot claim Input Tax Credit.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            While cancellation feels daunting, reversing it is a clear, structured statutory procedure. Governed under <strong className="font-semibold text-slate-950">Section 30 of the CGST Act</strong> read with <strong className="font-semibold text-slate-950">Rule 23 of the CGST Rules</strong>, restoring your cancelled GSTIN can be achieved effortlessly by following the proven 5-step methodology developed by Merrafilings Indirect Tax Advisory.
          </p>
        </section>

        {/* The 5 Steps Breakdown */}
        <section className="space-y-6 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The 5-Step Roadmap to Restoring Your GST Registration</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Follow this clear 5-step workflow to restore your cancelled GSTIN with zero administrative friction:
          </p>

          <div className="space-y-6 my-6">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">
                  Step 1: Root Cause Analysis &amp; Order Review
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                Begin by downloading and analyzing the formal cancellation order (<strong className="text-slate-800 font-semibold">Form GST REG-19</strong>) from the portal. Determine the exact statutory grounds cited by the proper officer: continuous non-filing of returns under Section 29(2)(c), non-compliance with bank furnishing rules under Rule 10A, or premises verification failure under Rule 25. Establishing the precise factual ground ensures our legal rebuttal directly addresses the officer&apos;s concerns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">
                  Step 2: Clear Pending Returns &amp; Assemble Evidence Dossier
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                Before the portal unlocks Form GST REG-21, you must file all overdue returns (GSTR-1, GSTR-3B, CMP-08) up to the effective cancellation date and pay outstanding taxes, Section 50 interest, and late fees. Simultaneously, compile supporting evidence: tax payment challans, bank statements, certified explanation letters, and condonation petitions (if applying beyond 90 days).
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">
                  Step 3: File Form GST REG-21 on the GST Common Portal
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                Log into <code className="font-mono text-slate-800">services.gst.gov.in</code>, navigate to <strong className="text-slate-800 font-semibold">Services &gt; Registration &gt; Application for Revocation of Cancelled Registration</strong>. Enter detailed grounds in the reasons box, attach verified PDF documentation, select the Authorized Signatory, and sign via Class 3 DSC (for Companies/LLPs) or EVC (Aadhaar OTP). The portal issues a 15-digit ARN instantly.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">
                  Step 4: Proactive ARN Tracking &amp; Responding to Form GST REG-23
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                The tax officer has 30 days to examine the application. If any additional factual clarification is needed, they will issue a show-cause notice in <strong className="text-slate-800 font-semibold">Form GST REG-23</strong>. Merrafilings drafts and submits a formal legal rejoinder in <strong className="text-slate-800 font-semibold">Form GST REG-24</strong> within 7 working days, ensuring no risk of dismissal under REG-05.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0">
                  5
                </span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">
                  Step 5: Receive Form GST REG-22 &amp; Execute Post-Revocation Compliances
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                Upon satisfaction, the officer issues <strong className="text-slate-800 font-semibold">Form GST REG-22</strong> (Order of Revocation of Cancellation). Your GSTIN status immediately reverts to &quot;Active&quot;. Under Rule 23(1), you must complete the final statutory duty: file all pending returns for the interim period between the cancellation date and revocation date within <strong className="text-slate-900 font-semibold">30 days</strong>.
              </p>
            </div>

          </div>
        </section>

        {/* Statutory Benchmarks Summary Table */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Summary of Key Statutory Timelines &amp; Authority Actions</span>
          </h2>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">Process Milestone</th>
                  <th className="p-3.5 sm:p-4">Governing Provision</th>
                  <th className="p-3.5 sm:p-4">Prescribed Statutory Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Standard REG-21 Filing</td>
                  <td className="p-3.5 sm:p-4">Section 30(1)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-900">Within 90 days of cancellation order</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Extended Condonation Window</td>
                  <td className="p-3.5 sm:p-4">Section 30 Proviso</td>
                  <td className="p-3.5 sm:p-4 font-medium text-amber-900">Up to 180 days (JC/ADC) &amp; 270 days (Comm.)</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Officer Scrutiny &amp; Order</td>
                  <td className="p-3.5 sm:p-4">Rule 23(2)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-blue-900">Within 30 days of application receipt</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">REG-23 Notice SCN Reply</td>
                  <td className="p-3.5 sm:p-4">Rule 23(3)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-red-900">Within 7 working days via Form GST REG-24</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Interim Return Filing Mandate</td>
                  <td className="p-3.5 sm:p-4">Rule 23(1)</td>
                  <td className="p-3.5 sm:p-4 font-medium text-indigo-900">Within 30 days from Form GST REG-22 order</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Why Choose Merrafilings */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Why Over 40,000+ Indian Businesses Trust Merrafilings</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Navigating GST cancellation requires speed, technical tax calculation, and assertive legal drafting. Here is what Merrafilings delivers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                Dedicated Tax Advocates
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct access to senior Indirect Tax Advocates and Chartered Accountants who formulate your case and petition.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                Zero Penalty Maximization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review applicable GST amnesty notifications to ensure you pay the absolute minimum late fees legally permissible.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                End-to-End Tracking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From initial computation to final REG-22 approval and post-restoration return filings, our team manages every detail.
              </p>
            </div>
          </div>
        </section>

        {/* Section: FAQ Accordion */}
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

        {/* Section: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Ready to Restore Your GSTIN in 5 Easy Steps?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Connect with our Indirect Tax Experts right now to initiate your tax reconciliation and fast-track your Form GST REG-21 submission today.
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
