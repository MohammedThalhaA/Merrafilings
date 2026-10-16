"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstAmendmentGuideLayout from "@/components/GstAmendmentGuideLayout";
import {
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Scale,
  Clock,
  ShieldCheck,
  TrendingUp,
  Receipt,
  FileCheck2,
  AlertCircle,
  Cpu,
  Layers,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What was the significance of the 2023 GST e-invoicing amendment?",
    a: "Effective 1st August 2023, the CBIC lowered the mandatory e-invoicing threshold for business-to-business (B2B) supplies from ₹10 Crore to ₹5 Crore (Notification No. 10/2023-Central Tax). Any registered business whose aggregate annual turnover exceeded ₹5 Crore in any financial year from 2017–18 onward must issue e-invoices with an Invoice Reference Number (IRN) and signed QR code.",
  },
  {
    q: "What is Rule 37A introduced in the GST amendments?",
    a: "Rule 37A mandates that if a recipient taxpayer claims Input Tax Credit (ITC) based on an invoice reported by a supplier in Form GSTR-1, but the supplier fails to furnish their Form GSTR-3B by the 30th of November following the end of the financial year, the recipient must reverse the corresponding ITC along with interest on or before 30th November. The reversed ITC can be re-claimed once the supplier files GSTR-3B.",
  },
  {
    q: "How do Forms DRC-01B and DRC-01C affect taxpayers under the latest rules?",
    a: "Under Rules 88C and 88D, the GST portal automatically generates Form GST DRC-01B when outward tax liability declared in GSTR-1 exceeds GSTR-3B beyond a predetermined tolerance limit, and Form GST DRC-01C when ITC availed in GSTR-3B exceeds GSTR-2B. Taxpayers must either pay the differential tax or submit a detailed electronic explanation within 7 days, failing which their subsequent GSTR-1 filing is automatically blocked.",
  },
  {
    q: "What are the consequences of failing to implement GST amendment guidelines?",
    a: "Non-compliance triggers severe statutory ramifications: blocking of E-Way Bill generation (Rule 138E), automated blocking of GSTR-1 / IFF filing (Rule 59(6)), levying of late fees up to ₹50/day under Section 47, general penalties under Section 125, and potential registration suspension under Rule 21A.",
  },
  {
    q: "Did the 2023 amendments extend the deadline for claiming previous year's ITC?",
    a: "Yes. The statutory deadline for availing input tax credit, issuing credit notes, and rectifying errors in monthly returns for any financial year was extended to the 30th day of November following the close of the financial year (or the actual date of filing the annual return in Form GSTR-9, whichever is earlier).",
  },
];

export default function GstAmendmentGuidelines2023Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAmendmentGuideLayout
      currentSlug="gst-amendment-guidelines-key-2023-updates"
      title="Understanding GST Amendment Guidelines for 2023"
      breadcrumbLabel="Guidelines & Key Updates"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Navigating India&apos;s indirect tax landscape requires businesses to stay vigilantly aligned with the continuous stream of <strong className="font-semibold text-slate-950">GST amendment guidelines</strong>. Designed by the GST Council and enacted through CBIC notifications, these regulatory guidelines introduce critical structural reforms, revise compliance thresholds, fine-tune Input Tax Credit (ITC) eligibility, and expand digital reporting mandates.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            The landmark 2023–2024 guidelines introduced far-reaching changes—most notably lowering the e-invoicing threshold to ₹5 Crore, rolling out automated mismatch notices (DRC-01B/01C), tightening ITC reversal rules under Rule 37A, and instituting strict biometric verification for registrations. Understanding these guidelines is indispensable for safeguarding your business against departmental scrutiny and penalties.
          </p>
        </section>

        {/* Section 1: Statutory vs Procedural Amendments */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory vs. Procedural GST Amendments</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            GST amendments broadly fall into two regulatory categories, each governed by different constitutional and administrative protocols:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Statutory Legislative Amendments</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                These represent substantive modifications enacted by the Parliament and State Legislatures through the Union Finance Act. They alter core legal sections of the CGST, SGST, and IGST Acts—such as Section 16 (eligibility of ITC), Section 17 (apportionment &amp; blocked credits), and Section 122 (penal provisions).
              </p>
              <div className="text-[11px] font-mono text-indigo-700 bg-indigo-50/70 p-2 rounded-lg border border-indigo-100">
                Example: Enactment of Section 16(2)(aa) mandating GSTR-2B reflection.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Procedural &amp; Administrative Amendments</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Notified by the Central Board of Indirect Taxes and Customs (CBIC) under delegated legislation. These guidelines prescribe rules, compliance forms, deadlines, e-invoicing limits, and portal operational workflows under the CGST Rules, 2017.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                Example: Notification No. 10/2023-Central Tax reducing e-invoicing limit.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Key 2023 Regulatory Amendments */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Key Pillars of the 2023 GST Amendment Guidelines</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The 2023 amendments introduced a paradigm shift toward real-time systemic validation and data triangulation between buyer and seller filings:
          </p>

          <div className="space-y-4 my-6">
            {/* Item 1 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <Receipt className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>1. E-Invoicing Expansion to ₹5 Crore Turnover</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The government expanded e-invoicing to MSMEs by lowering the threshold to ₹5 Crore. Every B2B supply, export transaction, and credit/debit note issued by eligible taxpayers must be reported in real-time to the Invoice Registration Portal (IRP) to generate a unique 64-character Invoice Reference Number (IRN) and digitally signed QR code. Non-compliant invoices are legally invalid under Rule 48(5), barring customers from claiming ITC.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <TrendingUp className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>2. Rule 37A: Mandatory ITC Reversal for Defaulting Suppliers</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If a buyer claims ITC against an invoice reflected in GSTR-2B, but the supplier fails to discharge the liability by filing Form GSTR-3B by 30th November of the following financial year, Rule 37A requires the recipient to reverse such credit. Businesses must implement automated vendor follow-up mechanisms to track whether vendors have paid their tax.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>3. Automated Systemic Scrutiny via Rules 88C and 88D</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The GST portal now actively conducts automated algorithms between returns. Discrepancies between GSTR-1 and GSTR-3B trigger Form GST DRC-01B, while discrepancies between GSTR-2B and GSTR-3B trigger Form GST DRC-01C. Taxpayers are given a strict 7-day window to pay the differential amount or explain the variance before subsequent filings are locked.
              </p>
            </div>

            {/* Item 4 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>4. Revised Statutory Deadlines &amp; Amnesty Schemes</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The timeline for issuing credit notes, claiming missing ITC, and making return amendments was permanently harmonized to 30th November following the end of the financial year. Concurrently, the CBIC rolled out targeted amnesty schemes with capped late fees for non-filers of Form GSTR-4, GSTR-9, and GSTR-10.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Summary Comparison Matrix */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Summary of Key GST Compliance Amendments</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Here is a comprehensive regulatory comparison detailing the key changes, applicable rules, and operational impact:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">Compliance Area</th>
                  <th className="p-3.5 sm:p-4">Prior Provision</th>
                  <th className="p-3.5 sm:p-4">Amended Guideline</th>
                  <th className="p-3.5 sm:p-4">Statutory Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">E-Invoicing Threshold</td>
                  <td className="p-3.5 sm:p-4">Turnover &gt; ₹10 Crore</td>
                  <td className="p-3.5 sm:p-4 font-medium text-purple-700">Turnover &gt; ₹5 Crore</td>
                  <td className="p-3.5 sm:p-4">Notification 10/2023-CT</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Missing ITC &amp; Amendments</td>
                  <td className="p-3.5 sm:p-4">September Return Due Date</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-700">30th November following FY</td>
                  <td className="p-3.5 sm:p-4">Finance Act / Sec 16(4)</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Supplier Tax Default</td>
                  <td className="p-3.5 sm:p-4">No specific reversal rule</td>
                  <td className="p-3.5 sm:p-4 font-medium text-amber-700">Rule 37A mandatory reversal</td>
                  <td className="p-3.5 sm:p-4">CGST Rule 37A</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Liability Differences</td>
                  <td className="p-3.5 sm:p-4">Manual departmental notices</td>
                  <td className="p-3.5 sm:p-4 font-medium text-red-700">Auto Form DRC-01B (7-day reply)</td>
                  <td className="p-3.5 sm:p-4">CGST Rule 88C</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Excess ITC Availed</td>
                  <td className="p-3.5 sm:p-4">Manual ASMT-10 scrutiny</td>
                  <td className="p-3.5 sm:p-4 font-medium text-red-700">Auto Form DRC-01C (7-day reply)</td>
                  <td className="p-3.5 sm:p-4">CGST Rule 88D</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Actionable Checklist for Businesses */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Steps to Ensure Absolute Compliance with New Guidelines</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Businesses should adopt this structured compliance roadmap to adapt to the amended regulations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 group-hover:text-[#5C3BFF] transition-colors">
                1. Reconcile GSTR-2B Monthly
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate provisional ITC claims. Only avail input tax credit that appears on the static Form GSTR-2B statement generated on the 14th of each month.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 group-hover:text-[#5C3BFF] transition-colors">
                2. Audit Vendor GSTR-3B Filings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Establish an automated vendor rating system. Withhold payments or dispute non-compliant vendors who fail to file GSTR-3B to prevent Rule 37A reversals.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 group-hover:text-[#5C3BFF] transition-colors">
                3. Upgrade ERP for E-Invoicing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If turnover exceeds ₹5 Crore in any prior year, integrate ERP directly with certified IRP portals to generate IRN and QR codes instantly upon invoice creation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 group-hover:text-[#5C3BFF] transition-colors">
                4. Monitor Portal Notices (DRC-01B/C)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appoint dedicated tax advisors to monitor the portal weekly. Respond to Form GST DRC-01B or DRC-01C within 7 days to avoid GSTR-1 blocking.
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
                Stay Fully Compliant with Latest GST Amendments
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                From updating registration particulars to managing e-invoicing transitions and handling DRC-01B/C notices, Merrafilings indirect tax specialists keep your operations seamless and penalty-free.
              </p>
            </div>
            <Link
              href="/gst-amendment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-[#155EEF] hover:text-white text-xs font-semibold shadow-md transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>Explore GST Amendment Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </article>
    </GstAmendmentGuideLayout>
  );
}
