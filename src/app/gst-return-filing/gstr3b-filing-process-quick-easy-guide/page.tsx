"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstReturnGuideLayout from "@/components/GstReturnGuideLayout";
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
  Calendar,
  Calculator,
  AlertTriangle,
} from "lucide-react";

export default function Gstr3bFilingProcessQuickEasyGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Can I edit the auto-populated figures in Table 3.1 and Table 4 of GSTR-3B?",
      a: "Yes. While Table 3.1 (outward liabilities) is auto-populated from GSTR-1/GSTR-1A and Table 4 (eligible ITC) is auto-populated from GSTR-2B, the portal permits manual modifications. However, if your declared tax liability is lower than GSTR-1 or your claimed ITC exceeds GSTR-2B by any margin, the cells highlight in red and the GST portal may automatically issue an electronic discrepancy notice on Form DRC-01B or DRC-01C.",
    },
    {
      q: "What is the consequence of not paying tax in GSTR-3B even if GSTR-1 was filed on time?",
      a: "Merely filing GSTR-1 does not discharge your statutory tax liability. Tax settlement occurs exclusively through Form GSTR-3B. If GSTR-3B is delayed, an 18% annual interest under Section 50 applies to the net cash tax payable, daily late fees accumulate under Section 47, and failing to file for two consecutive periods triggers automatic blocking of your E-Way Bill portal access.",
    },
    {
      q: "Can I file GSTR-3B if my Input Tax Credit exceeds my output tax liability?",
      a: "Yes! In fact, you should file promptly. If your eligible ITC exceeds your output tax liability, the entire tax payable will be offset against your electronic credit ledger with zero cash payment required. The surplus ITC balance remains safely deposited in your credit ledger to be carried forward indefinitely to future months.",
    },
    {
      q: "What is the due date for GSTR-3B filing for quarterly QRMP taxpayers?",
      a: "Under the QRMP scheme, taxpayers are split by state into two categories: Category 1 States (Southern & Western states like Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana) file by the 22nd of the month following the quarter. Category 2 States (Northern & Eastern states like Delhi, UP, Punjab, Rajasthan, West Bengal) file by the 24th of the month following the quarter.",
    },
    {
      q: "Can a filed GSTR-3B return be revised or canceled?",
      a: "No. Once Form GSTR-3B is officially submitted and verified via DSC or EVC, it cannot be revised, retracted, or canceled. Any reconciliation adjustments, under-reported liabilities, or excess credits must be adjusted in the subsequent tax period or through voluntary tax payment on Form DRC-03.",
    },
  ];

  return (
    <GstReturnGuideLayout
      currentSlug="gstr3b-filing-process-quick-easy-guide"
      title="GSTR-3B Process: A Comprehensive Guide to GST Return Filing"
      breadcrumbLabel="GSTR-3B Filing Process"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings Tax Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In India&apos;s indirect taxation regime, <strong className="font-semibold text-slate-950">Form GSTR-3B</strong> is the ultimate monthly or quarterly self-declaration summary return where taxpayers settle their tax dues and formally discharge statutory liabilities under Section 39 of the CGST Act. While GSTR-1 details outward sales at the invoice level, tax payments and Input Tax Credit (ITC) offsets occur <strong className="font-semibold text-slate-950">exclusively through GSTR-3B</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive operational guide breaks down the architecture of Form GSTR-3B, examines auto-population linkages from GSTR-1 and GSTR-2B, outlines the step-by-step portal filing sequence, details credit ledger offset rules, and highlights proactive measures to prevent automated tax discrepancy notices (DRC-01B / DRC-01C).
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GSTR-3B Filing Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Monthly Due Date</span>
            <strong className="font-semibold text-slate-950 text-[13px]">20th of Subsequent Month</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Quarterly QRMP Due Date</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">22nd / 24th Post Quarter</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Late Fee</span>
            <strong className="font-semibold text-red-600 text-[13px]">₹50/Day (₹20/Day for Nil)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Anatomy of Form GSTR-3B Tables */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Anatomy of Form GSTR-3B: Table Structure Explained
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Form GSTR-3B is organized into structured declaration tables covering outward supplies, inter-state supplies, tax credits, and cash payments:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Table Identifier</th>
                <th className="p-3">Section Title</th>
                <th className="p-3">Data Source &amp; Contents</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Table 3.1</td>
                <td className="p-3 font-medium text-slate-950">Outward &amp; Reverse Charge Supplies</td>
                <td className="p-3">Auto-populated from GSTR-1/1A: Taxable sales (3.1a), zero-rated exports (3.1b), nil/exempt (3.1c), and RCM inward liability (3.1d).</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Table 3.2</td>
                <td className="p-3 font-medium text-slate-950">Inter-State Supplies to Unregistered Persons</td>
                <td className="p-3">Subset of Table 3.1 detailing inter-state sales made to unregistered end consumers, composition dealers, and UIN holders.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Table 4</td>
                <td className="p-3 font-medium text-slate-950">Eligible Input Tax Credit (ITC)</td>
                <td className="p-3">Auto-drafted from GSTR-2B: (4A) Available ITC, (4B) Reversals under Section 17(5) and Rules 38/42/43, and (4C) Net Claimable ITC.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Table 5</td>
                <td className="p-3 font-medium text-slate-950">Exempt, Nil-Rated &amp; Non-GST Inward Supplies</td>
                <td className="p-3">Reporting purchases of non-taxable petroleum products, alcoholic liquor, or statutory exempted agricultural items.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Table 6.1</td>
                <td className="p-3 font-medium text-slate-950">Payment of Tax</td>
                <td className="p-3">Settlement table showing total tax payable, offset via Electronic Credit Ledger (IGST/CGST/SGST), and cash paid via PMT-06.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Step-by-Step Filing Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Step-by-Step GSTR-3B Portal Filing Sequence
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings accountants execute the GSTR-3B filing through five coordinated procedural steps:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Portal Authentication &amp; Period Selection</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Log into the GST Common Portal (gst.gov.in) &rarr; Select <em>Returns Dashboard</em> &rarr; Choose the applicable Financial Year and Return Filing Period (Month/Quarter) &rarr; Click <em>Prepare Online</em> under GSTR-3B.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Verify Auto-Populated Data (GSTR-1 &amp; GSTR-2B)</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Review the system-generated comparison sheet comparing Table 3.1 with GSTR-1/GSTR-1A and Table 4 with the static GSTR-2B statement to verify that all figures reconcile perfectly.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Confirm ITC Reversals &amp; Save Form</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Adjust any permanent or temporary reversals under Table 4(B) (such as 180-day non-payment to suppliers under Section 16(2) proviso) and click <em>Save GSTR-3B</em> to calculate net tax liabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Compute Tax Liability &amp; Offset Credit Ledgers</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Click <em>Proceed to Payment</em>. The system automatically applies the Rule 88A offset hierarchy. If additional cash is needed, create an electronic challan (PMT-06) via Net Banking or NEFT/RTGS.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Filing with Digital Signature (DSC) or EVC</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Click <em>File GSTR-3B with DSC</em> (compulsory for Companies &amp; LLPs) or <em>File with EVC</em> (Aadhaar OTP for Proprietorships). The portal issues the official Application Reference Number (ARN) receipt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Critical Errors to Avoid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Costly GSTR-3B Filing Mistakes to Avoid
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Avoid common filing blunders that trigger automated GST departmental notices:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Claiming ITC Beyond GSTR-2B:</strong>
            Claiming Input Tax Credit on invoices not reflected in GSTR-2B violates Rule 36(4) and triggers an automated demand notice on Form DRC-01C.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Mismatched Liability vs GSTR-1:</strong>
            Reporting lower tax liability in Table 3.1 than what was declared in GSTR-1 triggers an instant system-generated notice on Form DRC-01B requiring payment within 7 days.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Ignoring Section 17(5) Blocked Credits:</strong>
            Claiming credits on personal goods, food and catering, employee health insurance (unless statutory), or vehicles with seating &lt; 13 persons attracts penalty proceedings.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Forgetting Nil Returns:</strong>
            Failing to file GSTR-3B during zero-transaction months leads to automated compounding late fees and risk of GSTIN cancellation under Section 29.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Practical queries answered by Merrafilings GST compliance managers:
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
    </GstReturnGuideLayout>
  );
}
