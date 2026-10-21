"use client";

import React, { useState } from "react";
import Link from "next/link";
import TdsGuideLayout from "@/components/TdsGuideLayout";
import {
  FileText,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Scale,
  Clock,
  Landmark,
  FileCheck,
  Receipt,
  AlertCircle,
  Sparkles,
  Award,
  BadgeCheck,
  DollarSign,
  HeartHandshake,
} from "lucide-react";

export default function TdsReturnFilingGuidelinesBenefitsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the primary benefit of filing TDS returns on time for a business?",
      a: "The most immediate benefit is financial protection: it completely avoids the statutory daily late fee of ₹200 per day under Section 234E, protects the business against penalties ranging from ₹10,000 to ₹1,00,000 under Section 271H, and guarantees that business expenses paid to vendors are not disallowed under Section 40(a)(ia).",
    },
    {
      q: "How does timely TDS filing safeguard a company's expense deductions under Section 40(a)(ia)?",
      a: "Under Section 40(a)(ia), if an entity fails to deduct TDS or fails to deposit deducted TDS on or before the due date for filing its income tax return under Section 139(1), 30% of the expenditure paid to resident contractors, professionals, or landlords is disallowed from business deductions. For payments to non-residents under Section 40(a)(i), 100% is disallowed. Timely compliance protects these critical tax deductions.",
    },
    {
      q: "How does TDS return filing benefit vendors, contractors, and employees?",
      a: "When a deductor files their quarterly return, the tax deducted is credited to the deductee's Permanent Account Number (PAN) and automatically reflected in Form 26AS and the Annual Information Statement (AIS). This allows employees and vendors to claim legitimate credit against their income tax liabilities and claim refunds seamlessly during their annual ITR filing.",
    },
    {
      q: "Can delayed TDS return filing affect a company's ability to secure bank loans or tenders?",
      a: "Yes. Leading commercial banks, NBFCs, credit rating agencies, and government procurement bodies inspect TRACES default reports, Form 26AS matching, and direct tax compliance track records. An organization with outstanding Section 200A demands, delayed TDS filings, or short-deduction flags faces reduced credit scores and tender disqualifications.",
    },
    {
      q: "What is the consequence of failing to issue Form 16 or Form 16A after filing returns?",
      a: "Under Section 272A(2)(g) of the Income Tax Act, failure to furnish TDS certificates (Form 16 to employees by June 15th, or Form 16A to quarterly non-salary payees within 15 days of the return due date) attracts a statutory penalty of ₹500 per day for every day the default continues.",
    },
    {
      q: "How does proper TDS compliance assist in corporate tax audit (Form 3CD)?",
      a: "During the mandatory Tax Audit under Section 44AB, the auditor must scrutinize all TDS compliance records under Clause 34 of Form 3CD. Having accurate quarterly filings, matched challans, and zero Section 200A demands ensures a clean, unqualified Tax Audit Report.",
    },
  ];

  return (
    <TdsGuideLayout
      currentSlug="tds-return-filing-guidelines-benefits"
      title="TDS Return Filing Guidelines: Key Benefits & Statutory Importance"
      breadcrumbLabel="TDS Filing Guidelines & Benefits"
      metaPublishedDate="AY 2026-27 Compliant / Section 200(3)"
      readingTime="7 min read"
      authorName="Merrafilings Corporate Tax & Compliance Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Strategic Corporate Value &amp; Compliance
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Transforming TDS Filing from a Obligation to a Strategic Asset
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Tax Deducted at Source (TDS) is often perceived strictly as an administrative burden; however, disciplined quarterly adherence under <strong>Section 200(3) of the Income Tax Act, 1961</strong> yields profound financial, operational, and reputational benefits. From safeguarding <strong>100% of your corporate tax deductions</strong> under Section 40(a) to maintaining high commercial credit ratings, error-free TDS filing protects your balance sheet from compounding late fees, interest, and vendor disputes.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: Core Benefits of Proper TDS Filing */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Top 5 Tangible Benefits of Disciplined TDS Filing
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Maintaining punctual quarterly returns delivers multi-layered advantages across the organizational ecosystem:
        </p>

        <div className="space-y-4 pt-2">
          {/* Benefit 1 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    1. Absolute Protection from Severe Statutory Penalties
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Saves Up to ₹1 Lakh+
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Punctual filing avoids the non-negotiable late fee of <strong>₹200 per day under Section 234E</strong>. Furthermore, it protects management against punitive fines ranging from <strong>₹10,000 to ₹1,00,000 under Section 271H</strong> and mitigates 1.5% monthly compound interest under Section 201(1A).
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    2. Safeguarding Business Expense Deductions (Section 40(a))
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    Corporate Tax Shield
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Under <strong>Section 40(a)(ia)</strong>, failing to deduct or deposit TDS causes <strong>30% of payments made to resident vendors, contractors, and landlords to be disallowed</strong> from your company&apos;s allowable expenditure, artificially increasing net taxable profits. For non-resident payments under Section 40(a)(i), <strong>100% of the expense is disallowed</strong>. Regular compliance preserves every single rupee of expense deduction.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    3. Seamless Vendor Relations &amp; Form 26AS Matching
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                    Vendor Goodwill
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Vendors and service providers closely monitor their Form 26AS and Annual Information Statement (AIS). When your organization files quarterly returns promptly, TDS credits populate without delay, preventing vendor payment disputes, supplier holds, and legal notices demanding credit proof.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    4. Superior Commercial Credit Rating &amp; Tender Eligibility
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                    Financing Advantage
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Banks, financial institutions, and government procurement portals evaluate direct tax compliance when assessing working capital loan applications and public tenders. A clean TRACES compliance portal with zero outstanding defaults accelerates debt underwriting and strengthens government bidding credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    5. Clean Tax Audit Reports (Clause 34 of Form 3CD)
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                    Audit Readiness
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Under <strong>Clause 34 of Form 3CD (Tax Audit Report)</strong>, the statutory auditor must explicitly report any short deduction, delayed deduction, non-payment, or unfiled returns. Error-free quarterly compliance guarantees an unqualified, clean audit report, eliminating scrutiny risk from jurisdictional Assessing Officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Essential Guidelines for Flawless TDS Returns */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Core Guidelines to Ensure Seamless Filing
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Adhering to four golden rules ensures your quarterly filings remain completely free of CPC-TDS default intimations:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Verify Deductee PAN &amp; Aadhaar Status</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Always validate that vendor PANs are operative. If an individual PAN is inoperative due to lack of Aadhaar linkage, deduct tax at 20% under Section 206AA to avoid short-deduction demands.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm">
              <Receipt className="w-4.5 h-4.5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Match Challan 281 CIN with OLTAS Records</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Cross-verify the Challan Identification Number (7-digit BSR code, deposit date, and challan serial number) against the Challan Status Inquiry (CSI) file downloaded from the e-filing portal before FVU validation.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold text-sm">
              <Clock className="w-4.5 h-4.5 text-purple-600 group-hover:scale-110 transition-transform" />
              <span>Respect Cutoff Deadlines Strictly</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              File on or before July 31 (Q1), October 31 (Q2), January 31 (Q3), and May 31 (Q4). Set internal accounting calendar alerts by the 20th of the filing month to allow ample buffer for FVU error rectification.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-sm">
              <BadgeCheck className="w-4.5 h-4.5 text-amber-600 group-hover:scale-110 transition-transform" />
              <span>Promptly Distribute Form 16 / 16A</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Download official digitally signed certificates from TRACES once the return is processed. Deliver Form 16 to employees by June 15th and Form 16A to non-salary payees within 15 days of the filing due date.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: Quarterly Return Summary Table */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Quarterly TDS Calendar &amp; Statutory Forms
        </h2>

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-3xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                  <th className="p-3 sm:p-3.5">Quarter</th>
                  <th className="p-3 sm:p-3.5">Period Covered</th>
                  <th className="p-3 sm:p-3.5">Filing Due Date</th>
                  <th className="p-3 sm:p-3.5">Applicable Statements</th>
                  <th className="p-3 sm:p-3.5">Certificate Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-bold text-slate-900">Q1</td>
                  <td className="p-3 sm:p-3.5">April 1 – June 30</td>
                  <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">July 31st</td>
                  <td className="p-3 sm:p-3.5">24Q, 26Q, 27Q, 27EQ</td>
                  <td className="p-3 sm:p-3.5">August 15th (16A)</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-bold text-slate-900">Q2</td>
                  <td className="p-3 sm:p-3.5">July 1 – Sept 30</td>
                  <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">October 31st</td>
                  <td className="p-3 sm:p-3.5">24Q, 26Q, 27Q, 27EQ</td>
                  <td className="p-3 sm:p-3.5">November 15th (16A)</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-bold text-slate-900">Q3</td>
                  <td className="p-3 sm:p-3.5">Oct 1 – Dec 31</td>
                  <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">January 31st</td>
                  <td className="p-3 sm:p-3.5">24Q, 26Q, 27Q, 27EQ</td>
                  <td className="p-3 sm:p-3.5">February 15th (16A)</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-bold text-slate-900">Q4</td>
                  <td className="p-3 sm:p-3.5">Jan 1 – March 31</td>
                  <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">May 31st</td>
                  <td className="p-3 sm:p-3.5">24Q (Annexure II), 26Q, 27Q, 27EQ</td>
                  <td className="p-3 sm:p-3.5">June 15th (16 &amp; 16A)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 04: Frequently Asked Questions */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions on TDS Benefits &amp; Guidelines
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="group border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-emerald-500/60 shadow-3xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-3.5 px-4 sm:px-5 flex items-center justify-between gap-4 text-left font-semibold text-slate-900 text-xs sm:text-[13.5px] cursor-pointer"
                >
                  <span className="group-hover:text-emerald-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-emerald-600 transition-colors">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white shadow-lg text-center space-y-4">
        <h3 className="text-lg sm:text-2xl font-bold tracking-tight">
          Maximize Your Business Tax Health with Merrafilings
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Protect your business expense deductions under Section 40(a), eliminate late filing fees, and provide instant Form 16/16A certificates to your employees and vendors.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/tds-return-filing"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-[13px] shadow-sm transition-all"
          >
            Get Started with TDS Return Filing
          </Link>
          <Link
            href="/income-tax"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-[13px] border border-white/20 transition-all"
          >
            Explore All Tax Solutions
          </Link>
        </div>
      </div>
    </TdsGuideLayout>
  );
}
