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
  Send,
  FileCheck2,
  AlertCircle,
  Ban,
  Layers,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Who is eligible to apply for revocation of GST registration cancellation?",
    a: "Only taxpayers whose GST registration was cancelled 'suo-moto' (involuntarily) by the proper tax officer under Section 29(2) of the CGST Act (for reasons such as consecutive non-filing of returns) can apply for revocation using Form GST REG-21. Taxpayers who voluntarily applied for cancellation cannot seek revocation; they must apply for fresh registration.",
  },
  {
    q: "What is the standard time limit to apply for GST revocation?",
    a: "Under Section 30 of the CGST Act, 2017, the standard application window is 90 days from the date of service of the cancellation order. If this period is missed, the timeline can be extended up to 180 days by the Additional or Joint Commissioner, and up to 270 days by the Principal Commissioner upon demonstrating sufficient cause.",
  },
  {
    q: "Can I file Form GST REG-21 while returns are still pending?",
    a: "No. If your registration was cancelled for non-filing of returns, the GST portal structurally blocks the submission of Form GST REG-21 until all pending returns (GSTR-1 and GSTR-3B or CMP-08) up to the effective date of cancellation are filed, and all unpaid tax, interest, and late fees are fully cleared.",
  },
  {
    q: "What happens if the tax officer issues a notice in Form GST REG-23?",
    a: "If the tax officer is not fully satisfied with the grounds or documentation submitted in Form GST REG-21, they will issue a show-cause notice in Form GST REG-23 within 30 days. You must submit a comprehensive legal rejoinder with supporting evidence in Form GST REG-24 within 7 working days from receipt of the notice.",
  },
  {
    q: "What should I do once the revocation order (Form GST REG-22) is passed?",
    a: "Upon receipt of the restoration order in Form GST REG-22, your GSTIN is restored to active status. Under Rule 23(1) of the CGST Rules, you must file all pending returns for the interim period (from the effective date of cancellation to the date of the revocation order) within 30 days.",
  },
];

export default function GstRevocationHowToApplyEffectivelyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstRevocationGuideLayout
      currentSlug="gst-revocation-how-to-apply-effectively"
      title="Understanding GST Revocation: How to Apply Effectively"
      breadcrumbLabel="How to Apply"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Goods and Services Tax (GST) is the foundational indirect tax mechanism governing commercial trade and service delivery across India. Holding an active GSTIN is mandatory for taxable business operations. However, when statutory non-compliances occur—such as continuous non-filing of monthly or quarterly returns—the jurisdictional tax officer can initiate involuntary <strong className="font-semibold text-slate-950">suo-moto cancellation</strong> under Section 29(2) of the CGST Act, 2017.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            A cancelled registration halts commercial existence: you cannot issue tax invoices, collect GST from buyers, generate e-way bills, or pass Input Tax Credit (ITC). Fortunately, the law provides a formal statutory mechanism to reverse this cancellation: <strong className="font-semibold text-slate-950">Revocation of Cancellation of Registration</strong> governed by <strong className="font-semibold text-slate-950">Section 30 of the CGST Act</strong> read with <strong className="font-semibold text-slate-950">Rule 23 of the CGST Rules</strong>. This guide explains how to prepare, file, and secure approval for Form GST REG-21 effectively.
          </p>
        </section>

        {/* Section 1: The Critical Importance of Revocation */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The Strategic Importance of Restoring Your GSTIN</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Allowing a cancelled GST registration to remain unattended creates cascading legal, operational, and financial hazards for any business:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                <Ban className="w-4 h-4 text-red-600 shrink-0" />
                <span>Operational Paralysis</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collecting GST or issuing tax invoices while registration is cancelled is an offense under Section 122 punishable with 100% tax penalties. Generating e-way bills is also instantly blocked.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                <Receipt className="w-4 h-4 text-amber-600 shrink-0" />
                <span>ITC Blockade for Buyers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Corporate clients and B2B buyers cannot claim input tax credit on purchases made from a cancelled GSTIN, resulting in withheld payments, cancellation of supply contracts, and vendor blacklisting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Restoration of Business Standing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revocation through Form GST REG-21 reinstates your original GSTIN, restores accumulated electronic credit balances, and enables seamless commercial transactions without surrendering your business identity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Prerequisites Before Applying */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Essential Prerequisites for Filing Form GST REG-21</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Before submitting your application on the GST common portal, you must satisfy three mandatory statutory requirements under Rule 23:
          </p>

          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-1 group-hover:text-emerald-600 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1. Filing All Due Returns Up to Cancellation Date</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If registration was cancelled due to non-filing, you must file all overdue returns (Form GSTR-1, Form GSTR-3B, or Form CMP-08) for the defaulting periods up to the effective date of the cancellation order. The portal will not accept Form GST REG-21 while prior returns remain unfiled.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-1 group-hover:text-emerald-600 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2. Full Discharge of Outstanding Taxes, Interest &amp; Late Fees</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All tax liabilities declared in the pending returns must be paid in full through cash or available credit ledgers, along with mandatory interest calculated at 18% per annum under Section 50 and late fees under Section 47.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-1 group-hover:text-emerald-600 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3. Gathering Documentary Justification &amp; Authority Resolutions</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compile credible documentary proof explaining the reasons for past defaults (e.g., medical emergencies, severe cash flow crunches, business restructuring, or accounting oversight) along with partner/board resolutions authorizing the revocation application.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Portal Application Process */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step Portal Guide: How to Apply for Revocation Online</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Applying for revocation on the GST portal is completely digitized. Follow these 5 structured steps:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">1</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Step 1: Authenticate on the GST Common Portal</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Navigate to <code className="font-mono text-slate-800">services.gst.gov.in</code>. Log in using your existing Username and Password. Even though registration is cancelled, portal access remains available for compliance and revocation purposes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">2</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Step 2: Access the Revocation Form</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Click on the <strong className="text-slate-800 font-semibold">&apos;Services&apos;</strong> tab on the main dashboard, select <strong className="text-slate-800 font-semibold">&apos;Registration&apos;</strong>, and click on <strong className="text-slate-800 font-semibold">&apos;Application for Revocation of Cancelled Registration&apos;</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">3</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Step 3: Articulate Reasons for Revocation</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Review the pre-populated cancellation order details (Form GST REG-19 number and date). In the text box labeled <strong className="text-slate-800 font-semibold">&apos;Reasons for Revocation&apos;</strong>, articulate clearly why cancellation occurred, confirm that all returns and taxes are fully discharged, and request restoration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">4</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Step 4: Attach Supporting Evidence &amp; Proofs</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Upload verified PDF documents supporting your explanation: proof of tax payment challans, copy of filed returns acknowledgments, bank statements, and condonation petitions if applying beyond 90 days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">5</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Step 5: Sign Digitally &amp; Generate ARN</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Check the verification box, select the Authorized Signatory, enter the location, and submit using a Class 3 Digital Signature Certificate (mandatory for Companies and LLPs) or Electronic Verification Code (EVC) via Aadhaar OTP. A 15-digit ARN is issued immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Officer Scrutiny & Order Lifecycle */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Officer Scrutiny &amp; Statutory Order Lifecycle</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Once Form GST REG-21 is submitted, the jurisdictional tax officer has <strong className="font-semibold text-slate-950">30 days</strong> to review the application and make a statutory determination:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">Statutory Form</th>
                  <th className="p-3.5 sm:p-4">Purpose &amp; Authority Action</th>
                  <th className="p-3.5 sm:p-4">Statutory Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Form GST REG-22</td>
                  <td className="p-3.5 sm:p-4">Order of Revocation of Cancellation. Registration is formally restored to active status.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-900">Within 30 days of REG-21 submission</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-amber-700">Form GST REG-23</td>
                  <td className="p-3.5 sm:p-4">Show Cause Notice seeking clarification why the application should not be rejected.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-amber-900">Within 30 days of REG-21 submission</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-blue-700">Form GST REG-24</td>
                  <td className="p-3.5 sm:p-4">Taxpayer reply to the REG-23 notice along with additional supporting evidence.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-blue-900">Within 7 working days of REG-23 notice</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-red-700">Form GST REG-05</td>
                  <td className="p-3.5 sm:p-4">Final rejection order if officer remains dissatisfied with taxpayer reply.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-red-900">Appealable under Section 107 within 3 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Common Mistakes to Avoid */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Common Pitfalls to Avoid During Revocation Filing</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Many taxpayers encounter unexpected rejections due to preventable administrative mistakes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-xs uppercase tracking-wider group-hover:text-red-600 transition-colors">
                <Ban className="w-4 h-4 text-red-600 shrink-0" />
                <span>1. Applying Without Filing All Overdue Returns</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filing Form GST REG-21 before filing all defaulting returns up to cancellation date leads to immediate rejection by the portal or the proper officer.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-xs uppercase tracking-wider group-hover:text-amber-600 transition-colors">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. Overlooking the Limitation Period</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Applying beyond 90 days without attaching a formally drafted Condonation of Delay petition addressing the Additional/Joint Commissioner leads to jurisdictional dismissal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-xs uppercase tracking-wider group-hover:text-orange-600 transition-colors">
                <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
                <span>3. Submitting Vague or Unsubstantiated Justifications</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Merely writing &quot;business loss&quot; or &quot;oversight&quot; without financial records or medical documents gives the officer legal grounds to issue an SCN in REG-23.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-xs uppercase tracking-wider group-hover:text-red-600 transition-colors">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <span>4. Defaulting on the 7-Day SCN Reply Window</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Failing to submit Form GST REG-24 within 7 working days of receiving Form GST REG-23 results in automatic issuance of a rejection order in Form GST REG-05.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
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

        {/* Section 7: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Restore Your Cancelled GST Registration with Experts
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Don&apos;t let cancellation halt your business. Merrafilings reconciles your pending returns, drafts robust condonation petitions, and ensures quick Form GST REG-22 restoration.
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
