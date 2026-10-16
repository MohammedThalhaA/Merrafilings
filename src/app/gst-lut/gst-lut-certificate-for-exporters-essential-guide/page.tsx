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

export default function GstLutCertificateForExportersEssentialGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Is obtaining an LUT Certificate mandatory for all exporters in India?",
      a: "Obtaining an LUT Certificate is not compulsory if you choose to pay 18% Integrated GST (IGST) upfront on every export invoice and subsequently claim a tax refund from Customs or the GST department. However, because paying IGST locks up significant working capital for months, filing Form GST RFD-11 to secure an LUT Certificate is standard industry best practice for virtually all Indian exporters.",
    },
    {
      q: "What is the official validity period of an LUT Certificate under GST?",
      a: "An LUT Certificate is valid for exactly one financial year—from the date of filing until the 31st of March of that fiscal year. Exporters must file a renewal LUT for the subsequent financial year before generating any export invoices dated on or after 1st April.",
    },
    {
      q: "What happens if I export goods or services without an active LUT Certificate?",
      a: "If you export without an active LUT Certificate, the supply cannot be treated as zero-rated under bond. You are legally required to charge and deposit full Integrated GST (typically 18%) to the government. Failing to pay IGST on unbonded exports attracts statutory penalties, mandatory 18% interest under Section 50, and delays in Customs clearance.",
    },
    {
      q: "How long does it take to obtain the LUT Certificate once submitted online?",
      a: "Online submission on the GST Common Portal is instantaneous. Once the form is validated with witness particulars and signed via DSC or Aadhaar EVC, the portal immediately generates the official Application Reference Number (ARN) acknowledgment receipt, which serves as your active LUT Certificate.",
    },
    {
      q: "Does the LUT Certificate allow me to claim refund of accumulated Input Tax Credit (ITC)?",
      a: "Yes! While you pay 0% IGST on your export sales, you continue to accumulate Input Tax Credit on input goods, capital machinery, and domestic services (e.g. software licenses, raw materials, professional fees). Under Section 54 of the CGST Act, you can file Form GST RFD-01 to claim a 100% electronic cash refund of this accumulated unutilized ITC directly to your bank account.",
    },
  ];

  return (
    <GstLutGuideLayout
      currentSlug="gst-lut-certificate-for-exporters-essential-guide"
      title="Understanding the LUT Certificate for GST Compliance"
      breadcrumbLabel="LUT Certificate Compliance"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings Export Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          For Indian businesses expanding into the global marketplace, maintaining robust liquidity is paramount. Under Section 16 of the <strong className="font-semibold text-slate-950">Integrated Goods and Services Tax (IGST) Act, 2017</strong>, exports of goods and services are categorized as &quot;zero-rated supplies&quot;. However, to execute zero-rated exports without paying 18% IGST upfront, exporters must possess an official <strong className="font-semibold text-slate-950">Letter of Undertaking (LUT) Certificate</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed by <strong className="font-semibold text-slate-950">Rule 96A of the CGST Rules, 2017</strong>, the LUT Certificate represents a binding legal commitment submitted on <strong className="font-semibold text-slate-950">Form GST RFD-11</strong> assuring the tax authorities that goods or services will be exported in accordance with statutory conditions. This essential guide explains the operational mechanics of the LUT Certificate, eligibility criteria, documentation protocols, and working capital optimization benefits.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>LUT Certificate Regulatory Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Form</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Form GST RFD-11 (ARN Receipt)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Validity Lifecycle</span>
            <strong className="font-semibold text-slate-950 text-[13px]">1 Financial Year (Expires March 31)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Turnaround Time</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Instant ARN Generation</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is the LUT Certificate? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is the GST LUT Certificate?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The LUT Certificate is the official Application Reference Number (ARN) acknowledgment generated by the GST Common Portal upon successfully submitting Form GST RFD-11. It certifies that the registered taxpayer is authorized to export goods or cross-border services at 0% tax under Rule 96A without furnishing an expensive bank-guaranteed export bond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Cash Flow Protection:</strong>
            Exporters avoid paying 18% of their gross consignment value upfront, keeping working capital liquid for manufacturing, procurement, and shipping logistics.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Competitive Global Pricing:</strong>
            Without indirect tax cash outflow, Indian exporters can quote sharper price points to international buyers, enhancing global market competitiveness.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Administrative Efficiency:</strong>
            Eliminates the bureaucratic friction of filing routine monthly IGST refund claims, customs ICEGATE matching delays, and officer queries.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Extended to SEZ Supplies:</strong>
            Supplies made to Special Economic Zone (SEZ) units or SEZ co-developers are treated as zero-rated exports and fully covered under the LUT Certificate.
          </div>
        </div>
      </section>

      {/* Section 2: Statutory Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Eligibility Criteria for LUT Submission
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Notification No. 37/2017 – Central Tax, all registered taxpayers are eligible to submit an LUT provided they satisfy two mandatory legal conditions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-800 text-sm mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Active GST Registration</span>
            </div>
            The applicant must hold an active GSTIN with up-to-date return filings (GSTR-1 and GSTR-3B) and no pending cancellation proceedings.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <Scale className="w-4 h-4 text-indigo-600" />
              <span>Clean Prosecution Record (&lt; ₹2.5 Cr)</span>
            </div>
            The applicant or directors must not have been prosecuted for any tax evasion offense exceeding ₹250 Lakhs (₹2.5 Crores) under the CGST Act, IGST Act, or existing laws.
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Filing Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Step-by-Step Application Procedure for LUT Certificate
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings manages the complete filing workflow across five seamless steps:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Access the GST Common Portal</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Log in to gst.gov.in using your 15-digit GSTIN credentials &rarr; Navigate to <em>Services &rarr; User Services &rarr; Furnish Letter of Undertaking (LUT)</em>.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Select Applicable Financial Year</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Choose the financial year from the drop-down menu for which the LUT exemption is sought. Upload previous year&apos;s LUT copy if applying for annual renewal.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Confirm Statutory Undertaking Checkboxes</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Verify the three statutory declaration clauses agreeing to export goods within 3 months, realize foreign remittance within 1 year, and pay applicable tax with interest in case of default.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Furnish Two Independent Witnesses</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Provide full legal names, occupations, and residential/commercial addresses of two independent adult witnesses.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Sign &amp; Download Official ARN Certificate</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Authenticate using Class 3 DSC (for Companies/LLPs) or Aadhaar EVC (for Proprietors). Instantly download the official ARN acknowledgment PDF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Validity & Mandatory Annual Renewal */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Validity &amp; Mandatory Annual March Renewal
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          An LUT is strictly valid for <strong className="font-semibold text-slate-950">one financial year</strong> and automatically lapses on <strong className="font-semibold text-slate-950">31st March</strong> of that fiscal year.
        </p>

        <div className="p-4.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-[13px] text-indigo-950 font-normal leading-relaxed">
          <strong className="font-semibold text-indigo-950 block mb-1">March Renewal Deadline:</strong>
          Exporters must file a renewal LUT for the upcoming fiscal year before issuing any export invoices dated on or after 1st April. If an exporter generates an invoice on 2nd April without an active renewed LUT, they are legally obligated to deposit 18% IGST on that transaction. Merrafilings maintains automated docketing to guarantee timely annual renewal every March.
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Answers from Merrafilings export tax advocates:
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
