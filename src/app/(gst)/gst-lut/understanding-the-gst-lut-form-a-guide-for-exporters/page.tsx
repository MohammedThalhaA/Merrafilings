"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstLutGuideLayout from "@/components/GstLutGuideLayout";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Scale,
  Award,
  ChevronDown,
  Layers,
  BookOpen,
  TrendingUp,
  Receipt,
  FileCheck,
  Zap,
  HelpCircle,
  Globe2,
  FileSignature,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

export default function UnderstandingTheGstLutFormAGuideForExportersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Form GST RFD-11 and where is it located on the GST portal?",
      a: "Form GST RFD-11 is the statutory electronic format designated under Rule 96A of the CGST Rules for furnishing a Letter of Undertaking (LUT) or an Export Bond. On the GST Common Portal, it is located under the navigation path: Services > User Services > Furnish Letter of Undertaking (LUT).",
    },
    {
      q: "Are software and IT consulting service exporters required to fill Form GST RFD-11?",
      a: "Yes. Export of services—including IT consulting, software programming, graphic design, remote marketing, and SaaS subscriptions—qualifies as a zero-rated supply under Section 16 of the IGST Act. To invoice overseas clients in foreign currency without adding 18% IGST, service exporters must submit Form GST RFD-11 annually.",
    },
    {
      q: "Can a director or partner act as one of the witnesses on Form GST RFD-11?",
      a: "No. The two witnesses on Form GST RFD-11 must be independent third-party individuals. While employees, colleagues, accountants, or friends can serve as witnesses, the person signing the form as the authorized signatory cannot witness their own signature.",
    },
    {
      q: "What is the time limit for realizing foreign exchange under Form GST RFD-11?",
      a: "Under the statutory undertaking of Form GST RFD-11 and Foreign Exchange Management Act (FEMA) regulations, foreign currency remittances for export of services must be received in convertible foreign exchange within one year from the date of the export invoice.",
    },
    {
      q: "Can Form GST RFD-11 be rejected by the tax department after filing?",
      a: "The generation of the ARN acknowledgment is automatic. However, the jurisdictional GST officer reviews the submission and can issue a notice if the taxpayer has been prosecuted for tax evasion exceeding ₹2.5 Crores or if the witness information is fraudulent.",
    },
  ];

  return (
    <GstLutGuideLayout
      currentSlug="understanding-the-gst-lut-form-a-guide-for-exporters"
      title="Understanding the GST LUT Form: An Essential Guide for Exporters"
      breadcrumbLabel="GST LUT Form Guide"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings Export Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In international trade, indirect taxation can easily create friction. When Indian businesses supply goods or digital services across international borders, paying an 18% tax upfront and awaiting bureaucratic refunds severely impairs business cash flows. <strong className="font-semibold text-slate-950">Form GST RFD-11 (Letter of Undertaking)</strong> serves as the official statutory gateway that frees exporters from this tax lockup.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed by <strong className="font-semibold text-slate-950">Section 16 of the IGST Act, 2017</strong> and <strong className="font-semibold text-slate-950">Rule 96A of the CGST Rules, 2017</strong>, Form GST RFD-11 allows registered businesses to execute zero-rated supplies without paying Integrated GST. This comprehensive guide unpacks the statutory architecture of the form, analyzes the three mandatory undertaking clauses, details witness requirements, and explains how to prevent procedural delays.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Form GST RFD-11 Regulatory Anatomy</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Provision</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Rule 96A(1) CGST Rules, 2017</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Applicable Supply</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">Zero-Rated Exports &amp; SEZ Supplies</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Execution Mode</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Class 3 DSC or Aadhaar EVC</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The Three Statutory Undertaking Clauses */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The 3 Statutory Declarations Inside Form GST RFD-11
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          When submitting Form GST RFD-11, the authorized signatory binds the business to three statutory undertakings:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Timeline for Export of Goods</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  The exporter undertakes to physically dispatch and export goods out of India within <strong>3 months</strong> from the date of the export invoice.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Remittance Realization for Services</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  For service exports, the exporter undertakes to receive full foreign currency payment in convertible foreign exchange within <strong>1 year</strong> from the export invoice date.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Tax &amp; Interest Liability in Case of Default</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  The exporter undertakes that if goods are not exported within 3 months or payment is not realized within 1 year, they will pay the full Integrated GST along with <strong>18% annual interest</strong> under Section 50 within 15 days of default.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Form RFD-11 is Essential for Exporters */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Strategic Advantages of Form GST RFD-11
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Executing Form RFD-11 delivers direct commercial and administrative benefits:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Working Capital Preservation:</strong>
            Exporters retain 100% of their liquid cash instead of depositing 18% with the tax department and waiting months for refund clearances.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Zero Bank Guarantee Overheads:</strong>
            Unlike an Export Bond which requires depositing collateral and paying bank guarantee commissions, an LUT requires zero bank guarantee.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Automated Customs ICEGATE Clearance:</strong>
            Shipping bills referencing an active LUT ARN number clear Indian Customs ports without inspection delays or tax debit locks.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Unrestricted Unutilized ITC Cash Refund:</strong>
            Accumulated Input Tax Credit on domestic inputs can be claimed as a direct cash refund under Section 54 using Form RFD-01.
          </div>
        </div>
      </section>

      {/* Section 3: Documents Required for Form RFD-11 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Documentation Checklist for Form GST RFD-11
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Assemble the following particulars prior to portal login:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Required Particular</th>
                <th className="p-3">Document / Data Component</th>
                <th className="p-3">Compliance Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Active GSTIN</td>
                <td className="p-3 text-indigo-700 font-mono">15-Digit GST Identification Number</td>
                <td className="p-3">Verifies entity registration status and jurisdiction</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Import Export Code (IEC)</td>
                <td className="p-3 text-indigo-700 font-mono">10-Digit DGFT IEC Number</td>
                <td className="p-3">Mandatory for goods exporters to link with ICEGATE</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Authorized Signatory DSC / EVC</td>
                <td className="p-3">Class 3 Digital Signature or Aadhaar OTP</td>
                <td className="p-3">Legal authentication of Form RFD-11 submission</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Two Independent Witnesses</td>
                <td className="p-3">Name, Occupation, and Full Address</td>
                <td className="p-3">Statutory verification of legal undertaking execution</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Answers from Merrafilings export compliance specialists:
        </p>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-3 text-slate-950 font-medium text-xs sm:text-[13.5px] hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-indigo-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </GstLutGuideLayout>
  );
}
