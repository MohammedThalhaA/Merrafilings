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
  Lock,
  Cpu,
} from "lucide-react";

export default function ComprehensiveGuideToGstReturnFilingsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the new mandatory e-Invoicing threshold for businesses under GST?",
      a: "The Central Board of Indirect Taxes and Customs (CBIC) has made e-Invoicing mandatory for all registered businesses whose aggregate annual turnover exceeds ₹5 Crores in any preceding financial year. Such taxpayers must generate an Invoice Reference Number (IRN) and signed QR code from the Invoice Registration Portal (IRP) for every B2B and export invoice.",
    },
    {
      q: "What are Form DRC-01B and Form DRC-01C automated notices?",
      a: "Form DRC-01B is an automated electronic notice issued when the tax liability declared in GSTR-1 exceeds the liability paid in GSTR-3B by a predefined percentage or amount. Form DRC-01C is issued when the Input Tax Credit (ITC) claimed in GSTR-3B exceeds the eligible credit reflected in GSTR-2B. Taxpayers must either pay the differential tax or submit a formal electronic explanation within 7 days.",
    },
    {
      q: "Who is exempt from filing the annual return on Form GSTR-9?",
      a: "The Government of India has granted an exemption to registered taxpayers having an aggregate annual turnover up to ₹2 Crores in a financial year from mandatory filing of the annual return on Form GSTR-9. However, voluntary filing is recommended to reconcile ledger balances.",
    },
    {
      q: "Can a business claim Input Tax Credit on invoices received from non-filing vendors?",
      a: "No. Under Section 16(2)(aa) of the CGST Act, Input Tax Credit can only be claimed if the supplier has furnished the invoice in their Form GSTR-1 or IFF and the details have been communicated to the recipient in their static Form GSTR-2B statement. Provisional ITC claims without GSTR-2B backing are completely disallowed.",
    },
    {
      q: "What happens if a business fails to file GST returns for more than 6 months?",
      a: "Under Section 29(2) of the CGST Act, continuous default in return filing for six months (or three consecutive quarters for composition dealers) gives the GST Tax Officer the authority to initiate suo-moto cancellation of your GSTIN, freezing business bank accounts, terminating E-Way bill generation, and halting commercial operations.",
    },
  ];

  return (
    <GstReturnGuideLayout
      currentSlug="comprehensive-guide-to-gst-return-filings"
      title="GST Return Filings: A Comprehensive Guide for Businesses"
      breadcrumbLabel="Comprehensive Filing Guide"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Tax Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In the Indian tax ecosystem, <strong className="font-semibold text-slate-950">GST return compliance</strong> is not merely an administrative obligation—it is the operational backbone of commercial credibility. Modern corporate clients, e-commerce marketplaces, and institutional buyers will only transact with vendors who maintain flawless GST compliance records and whose invoices consistently reflect in their <strong className="font-semibold text-slate-950">GSTR-2B Input Tax Credit</strong> ledgers.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive master guide provides a 360-degree blueprint of the Indian GST return filing framework. Discover who needs to file across various taxpayer categories, review the complete spectrum of return formats from GSTR-1 to GSTR-9, master the statutory compliance calendar, and learn how cutting-edge reforms like e-invoicing and automated DRC-01B/C notices shape modern compliance.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Return Framework Highlights</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">e-Invoicing Mandate</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Turnover &gt; ₹5 Crores</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">ITC Validation</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">100% GSTR-2B Match Required</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Annual GSTR-9 Exemption</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">Turnover up to ₹2 Crores</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Types of GST Returns */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Complete Directory of GST Return Forms in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The table below outlines all official GST return forms, taxpayer categories, and statutory deadlines:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Return Form</th>
                <th className="p-3">Applicable Taxpayer</th>
                <th className="p-3">Frequency</th>
                <th className="p-3">Statutory Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-1</td>
                <td className="p-3">Regular Taxpayer (Outward Supplies)</td>
                <td className="p-3">Monthly / Quarterly</td>
                <td className="p-3">11th (Monthly) / 13th (QRMP)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-3B</td>
                <td className="p-3">Regular Taxpayer (Summary &amp; Tax)</td>
                <td className="p-3">Monthly / Quarterly</td>
                <td className="p-3">20th (Monthly) / 22nd or 24th (QRMP)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form CMP-08</td>
                <td className="p-3">Composition Scheme Dealers</td>
                <td className="p-3">Quarterly</td>
                <td className="p-3">18th of month following quarter</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-4</td>
                <td className="p-3">Composition Scheme Dealers</td>
                <td className="p-3">Annually</td>
                <td className="p-3">30th April following fiscal year</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-6</td>
                <td className="p-3">Input Service Distributors (ISD)</td>
                <td className="p-3">Monthly</td>
                <td className="p-3">13th of following month</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-7</td>
                <td className="p-3">Tax Deductors (TDS under Sec 51)</td>
                <td className="p-3">Monthly</td>
                <td className="p-3">10th of following month</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-8</td>
                <td className="p-3">E-Commerce Operators (TCS Sec 52)</td>
                <td className="p-3">Monthly</td>
                <td className="p-3">10th of following month</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-indigo-700">Form GSTR-9</td>
                <td className="p-3">Regular Taxpayers (Annual Consolidation)</td>
                <td className="p-3">Annually</td>
                <td className="p-3">31st December following fiscal year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Core Steps to File GST Returns */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 5-Stage Professional Return Filing Workflow
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Executing error-free GST returns requires a structured operational method:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Assemble Source Documentation</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Consolidate all tax invoices, export shipping bills, delivery challans, credit notes, and debit notes. Verify customer GSTINs and HSN/SAC codes.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">GSTR-1 Outward Supplies Lodgment</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Upload B2B invoices, B2C summaries, zero-rated exports, and nil-rated sales on or before the 11th of the month.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Static GSTR-2B Input Tax Credit Reconciliation</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Download the static GSTR-2B statement generated on the 14th of the month. Match every purchase entry against internal books and identify supplier defaults.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Tax Offset Optimization &amp; PMT-06 Challan</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Apply Rule 88A credit ledger offset rules to minimize cash outgo. Generate an electronic cash challan (PMT-06) for any remaining balance.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Electronic Submission &amp; ARN Generation</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Submit Form GSTR-3B using Class 3 Digital Signature Certificate (DSC) or Aadhaar OTP (EVC) on or before the 20th. Archive the ARN receipt in your corporate compliance vault.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Recent Regulatory Innovations */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Recent Technological Innovations in the GST Return System
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The GST Network (GSTN) has deployed automated systemic checks to eliminate tax evasion and streamline taxpayer experience:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Mandatory e-Invoicing:</strong>
            Entities with turnover &gt; ₹5 Crores must transmit invoice details to the IRP portal, which directly pushes authenticated data into GSTR-1, eliminating manual reporting errors.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Automated DRC-01B &amp; DRC-01C Notices:</strong>
            Algorithmic red flags trigger instantly when GSTR-1 tax exceeds GSTR-3B liability (DRC-01B) or GSTR-3B ITC exceeds GSTR-2B credit (DRC-01C).
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Mandatory Two-Factor Authentication (2FA):</strong>
            Enhanced portal security requires OTP verification via registered mobile numbers for all taxpayer logins, shielding corporate credentials.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Rule 138E E-Way Bill Auto-Lock:</strong>
            Defaulting on two consecutive return filings automatically suspends the taxpayer&apos;s ability to generate transit e-way bills.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Answers from Merrafilings senior tax advocates:
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
