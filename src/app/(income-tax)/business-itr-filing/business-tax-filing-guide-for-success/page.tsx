"use client";

import React, { useState } from "react";
import BusinessItrGuideLayout from "@/components/BusinessItrGuideLayout";
import {
  TrendingUp,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Receipt,
  FileCheck,
  Sparkles,
  ArrowRight,
  Calculator,
  Layers,
  AlertTriangle,
  Coins,
  Scale,
  Calendar,
  Zap,
  Rocket,
} from "lucide-react";

const SUCCESS_MILESTONES = [
  {
    step: "Stage 01",
    title: "Financial Consolidation & Book Closing",
    desc: "Reconcile customer ledgers, close statutory journals, complete inventory valuation, and draft provisional financial statements (Balance Sheet & P&L).",
  },
  {
    step: "Stage 02",
    title: "AIS, 26AS & GST Cross-Reconciliation",
    desc: "Cross-verify turnover reported in GSTR-1 and GSTR-3B with P&L sales, and ensure every TDS deduction under Section 194C/194J/194Q matches Form 26AS and AIS.",
  },
  {
    step: "Stage 03",
    title: "Statutory Tax Audit (Section 44AB) Sign-Off",
    desc: "If turnover exceeds audit thresholds, your practicing Chartered Accountant conducts audit verifications and digitally uploads Form 3CA/3CB and Form 3CD with a valid UDIN.",
  },
  {
    step: "Stage 04",
    title: "Schedule Population & JSON Schema Validation",
    desc: "Fill out mandatory schedules including Schedule MAT (115JB), Schedule CFL (Losses), Schedule ESR (Scientific Research), and Schedule FA (Foreign Assets).",
  },
  {
    step: "Stage 05",
    title: "Cryptographic Submission via Class 3 DSC",
    desc: "Upload the verified JSON return to the CBDT e-filing portal and complete electronic verification using the designated partner's or director's registered DSC token.",
  },
];

const GST_ITR_INTERSECTION = [
  {
    title: "Turnover Cross-Verification",
    desc: "Gross taxable supplies reported in GSTR-1 and GSTR-9 must exactly harmonize with gross revenue declared in Schedule PL of the ITR to avoid automated Section 133(6) inquiry notices.",
  },
  {
    title: "Input Tax Credit (ITC) Alignment",
    desc: "ITC claimed in GSTR-3B must align with purchase ledgers. Under Section 145A, valuation of purchase and sale of goods must include taxes and cesses incurred.",
  },
  {
    title: "E-Invoicing Data Ingestion",
    desc: "The Income Tax Department's risk management engine now directly pulls B2B e-invoicing records to cross-check sales figures in real-time.",
  },
  {
    title: "Non-Deductibility of Direct GST Payments",
    desc: "GST collected from customers is held in fiduciary trust for the government and cannot be claimed as a commercial expense in the Profit & Loss statement.",
  },
];

const STARTUP_ADVANTAGES = [
  {
    title: "Section 80-IAC 3-Year Tax Holiday",
    desc: "DPIIT-recognized eligible startups can claim a 100% tax deduction on profits for 3 consecutive financial years out of their first 10 years, conditional on timely ITR filing.",
  },
  {
    title: "Investor Due Diligence & Equity Rounds",
    desc: "Venture capital funds, angel syndicates, and institutional lenders mandate clean, verified ITR receipts and audit reports before issuing term sheets.",
  },
  {
    title: "Angel Tax Exemption (Section 56(2)(viib))",
    desc: "Preserves statutory protection from angel tax scrutiny when raising seed capital above fair market value.",
  },
  {
    title: "8-Year Carry Forward of Startup Losses",
    desc: "Unabsorbed business and depreciation losses can be carried forward for up to 8 years, even if shareholding changes, provided Section 79 conditions are met.",
  },
];

const FAQS = [
  {
    q: "Why is timely business ITR filing critical for bank credit and working capital?",
    a: "Scheduled commercial banks and non-banking financial companies (NBFCs) evaluate working capital lines, cash-credit (CC) limits, and bank guarantees by inspecting 3 consecutive years of audited ITR-V receipts and financial statements to assess debt-service coverage ratios (DSCR).",
  },
  {
    q: "How does the GST portal communicate with the Income Tax e-filing system?",
    a: "The Central Board of Direct Taxes (CBDT) and the Central Board of Indirect Taxes and Customs (CBIC) maintain automated data-sharing APIs. Sales turnover declared in GSTR-1 and annual returns (GSTR-9/9C) is automatically cross-referenced against revenue reported in Schedule PL of the ITR.",
  },
  {
    q: "What triggers a Section 133(6) inquiry notice during business tax assessment?",
    a: "Section 133(6) notices are typically triggered by variances between GST sales and ITR revenues, high-value unverified cash deposits, mismatch between TDS claimed and Form 26AS credits, or abnormal fluctuations in gross profit ratios compared to industry benchmarks.",
  },
  {
    q: "What is the penalty for missing the business ITR deadline?",
    a: "Under Section 234F, a late fee of ₹5,000 (reduced to ₹1,000 if income is under ₹5 Lakhs) is charged. Additionally, interest of 1% per month applies under Section 234A on outstanding tax, and the business permanently loses the statutory right to carry forward operational losses under Section 139(3).",
  },
  {
    q: "Can a startup claim the Section 80-IAC tax holiday if its ITR is filed belatedly?",
    a: "No! Under direct tax rules, the 100% tax holiday under Section 80-IAC is strictly conditional on the return being submitted on or before the statutory due date prescribed under Section 139(1). A belated return automatically forfeits the tax holiday for that assessment year.",
  },
  {
    q: "What is the consequence of failing to get accounts audited under Section 44AB?",
    a: "Under Section 271B, failure to get accounts audited and file the Tax Audit Report (Form 3CA/3CB and Form 3CD) before the statutory due date attracts a penalty of 0.5% of total turnover, up to a maximum of ₹1,50,000.",
  },
  {
    q: "What are the due dates for business ITR filing for AY 2026-27?",
    a: "For non-audit cases (sole proprietorships), the deadline is 31 August 2026. For businesses subject to statutory tax audit under Section 44AB, the deadline is 31 October 2026 (with Form 3CD due by 30 September 2026). For transfer pricing cases, the deadline is 30 November 2026.",
  },
  {
    q: "Can a business revise its return if an expense deduction was mistakenly omitted?",
    a: "Yes. Under Section 139(5), a business can submit a Revised Return to rectify any legitimate omission or mathematical error up to 31st December of the relevant Assessment Year, or before completion of assessment, whichever is earlier.",
  },
  {
    q: "What is an Updated Return (ITR-U) and when can a company use it?",
    a: "If a business failed to file an original or revised return, it can file an Updated Return (ITR-U) under Section 139(8A) within 24 months from the end of the relevant assessment year by paying additional tax (25% within 12 months, or 50% between 12 and 24 months).",
  },
  {
    q: "How does Merrafilings guarantee successful, notice-proof business ITR filings?",
    a: "Merrafilings assigns dedicated corporate Chartered Accountants who perform end-to-end ledger reviews, GSTR turnover reconciliation, fixed asset depreciation mapping, Tax Audit Form 3CD filing, and provide free year-round representation against scrutiny notices.",
  },
];

export default function BusinessTaxFilingGuideForSuccessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <BusinessItrGuideLayout
      currentSlug="business-tax-filing-guide-for-success"
      title="Business ITR Filing Process Guide for Success"
      breadcrumbLabel="Business ITR Filing Process Guide"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Maintaining corporate direct tax compliance in India is not merely an annual regulatory ritual; it is a critical strategic
          pillar that directly governs your company's credit ratings, bank loan limits, investor valuations, and legal standing.
          Every registered commercial enterprise—from early-stage tech startups to mature manufacturing corporations—must navigate
          the <strong className="font-semibold text-slate-950">Business ITR Filing Process</strong> with uncompromising accuracy.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          With the Central Board of Direct Taxes (CBDT) deploying AI-driven cross-verification pipelines that synchronize e-invoices,
          GST returns, banking transactions, and Annual Information Statements (AIS) in real time, even minor reporting discrepancies can
          trigger automated scrutiny notices. This master handbook provides an executive roadmap for successful, notice-proof business
          tax filing in India.
        </p>
      </section>

      {/* Section 1: The 5-Stage Filing Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. The 5-Stage Master Blueprint for Business ITR Success
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Executing an error-free corporate return requires systematic progression through five statutory milestones:
        </p>

        <div className="space-y-3.5 mt-3">
          {SUCCESS_MILESTONES.map((item, idx) => (
            <div key={idx} className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
              <span className="text-xs font-mono font-bold bg-slate-900 group-hover:bg-emerald-600 text-white px-2.5 py-1 rounded-md transition-colors shrink-0 mt-0.5">
                {item.step}
              </span>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: GST & ITR Deep-Dive */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. The Critical Intersection: Harmonizing GST Returns with ITR
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Over 75% of business scrutiny notices originate from mismatches between indirect tax filings and direct tax returns:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {GST_ITR_INTERSECTION.map((item, idx) => (
            <div key={idx} className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">{item.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Startup India Advantages */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Unlocking Growth: Tax Incentives for Startups &amp; MSMEs
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Timely business ITR filing unlocks transformative statutory benefits for emerging ventures:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {STARTUP_ADVANTAGES.map((item, idx) => (
            <div key={idx} className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 inline-block mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                Startup Advantage
              </span>
              <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-blue-700 transition-colors mb-1">{item.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Master Compliance Calendar */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Master Corporate Tax Compliance Calendar (AY 2026-27)
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-xl mt-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Taxpayer Category</th>
                <th className="p-3 sm:p-4">Statutory Due Date</th>
                <th className="p-3 sm:p-4">Statutory Consequence of Delay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 sm:p-4 font-bold text-slate-900">Non-Audit Small Businesses (ITR-3 / ITR-4)</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-800">31 August 2026</td>
                <td className="p-3 sm:p-4 text-xs text-slate-600">Late fee under Section 234F + loss of loss carry forward</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-slate-900">Tax Audit Cases (Section 44AB)</td>
                <td className="p-3 sm:p-4 font-semibold text-blue-800">31 October 2026</td>
                <td className="p-3 sm:p-4 text-xs text-slate-600">Tax Audit Report (3CD) due by 30 September 2026</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-slate-900">Transfer Pricing Cases (Section 92E)</td>
                <td className="p-3 sm:p-4 font-semibold text-purple-800">30 November 2026</td>
                <td className="p-3 sm:p-4 text-xs text-slate-600">Form 3CEB must be uploaded by 31 October 2026</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-slate-900">Belated &amp; Revised Returns</td>
                <td className="p-3 sm:p-4 font-semibold text-amber-800">31 December 2026</td>
                <td className="p-3 sm:p-4 text-xs text-slate-600">Final statutory window for FY 2025-26 (AY 2026-27)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Strategic corporate filing questions, GST turnover reconciliation, and audit protocols answered by Merrafilings Chartered Accountants.
        </p>

        <div className="space-y-2.5 mt-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </BusinessItrGuideLayout>
  );
}
