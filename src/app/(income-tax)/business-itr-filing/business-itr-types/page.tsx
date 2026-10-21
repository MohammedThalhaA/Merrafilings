"use client";

import React, { useState } from "react";
import BusinessItrGuideLayout from "@/components/BusinessItrGuideLayout";
import {
  Layers,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Receipt,
  FileCheck,
  Sparkles,
  ArrowRight,
  Calculator,
  Scale,
  Briefcase,
  AlertTriangle,
  Coins,
  Store,
  UserCheck,
} from "lucide-react";

const ITR_TYPES_LIST = [
  {
    form: "ITR-1 (SAHAJ)",
    category: "Non-Business / Salaried",
    eligibility: "Resident individuals earning salary, single house property, and interest income up to ₹50 Lakhs.",
    businessApplicability: "Strictly Disallowed for Business Income",
    color: "slate",
  },
  {
    form: "ITR-2",
    category: "Non-Business / Capital Gains",
    eligibility: "Individuals & HUFs with capital gains, multiple properties, foreign assets, or directorships in companies.",
    businessApplicability: "Strictly Disallowed for Business Income",
    color: "slate",
  },
  {
    form: "ITR-3",
    category: "Sole Proprietors & Self-Employed",
    eligibility: "Individuals & HUFs carrying on proprietary businesses, medical/legal practices, or receiving partnership firm shares.",
    businessApplicability: "Primary Form for Non-Presumptive Proprietorships",
    color: "blue",
  },
  {
    form: "ITR-4 (SUGAM)",
    category: "Presumptive Small Businesses",
    eligibility: "Individuals, HUFs, and partnership firms opting for presumptive taxation under Sections 44AD, 44ADA, or 44AE.",
    businessApplicability: "Simplified Form (No Books of Account Required)",
    color: "emerald",
  },
  {
    form: "ITR-5",
    category: "Partnership Firms & LLPs",
    eligibility: "Registered/unregistered Partnership Firms, Limited Liability Partnerships (LLPs), AOPs, BOIs, and Estate of Insolvent.",
    businessApplicability: "Mandatory for all Firms and LLPs (Even at ₹0 Income)",
    color: "purple",
  },
  {
    form: "ITR-6",
    category: "Corporate Enterprises (Companies)",
    eligibility: "Private Limited Companies, Public Limited Companies, and One Person Companies (OPCs) not claiming Section 11 exemption.",
    businessApplicability: "Compulsory Corporate Return with Mandatory Class 3 DSC",
    color: "indigo",
  },
  {
    form: "ITR-7",
    category: "Trusts, NGOs & Political Entities",
    eligibility: "Charitable and religious trusts, section 8 companies, universities, research associations, and political parties.",
    businessApplicability: "Mandatory for Entities claiming Section 11 & 12 Exemptions",
    color: "teal",
  },
];

const COMPARISON_TABLE = [
  {
    parameter: "Applicable Entity Type",
    itr3: "Individuals & HUFs",
    itr5: "Partnership Firms & LLPs",
    itr6: "Corporate Companies (Pvt/Public/OPC)",
  },
  {
    parameter: "PAN Card Requirement",
    itr3: "Individual PAN of Proprietor",
    itr5: "Separate Firm / LLP PAN",
    itr6: "Dedicated Corporate Company PAN",
  },
  {
    parameter: "Balance Sheet & P&L",
    itr3: "Required if books are maintained",
    itr5: "Mandatory Statutory Schedules",
    itr6: "Mandatory Audited Financials (MCA Align)",
  },
  {
    parameter: "Partner / Director Schedules",
    itr3: "Not Applicable",
    itr5: "Mandatory Partner Ratios & Remuneration",
    itr6: "Mandatory Shareholder & Director Disclosures",
  },
  {
    parameter: "Verification Method",
    itr3: "Aadhaar OTP / Net Banking / DSC",
    itr5: "Class 3 DSC or Net Banking EVC",
    itr6: "Strictly Class 3 DSC of Director",
  },
  {
    parameter: "Statutory Tax Rate",
    itr3: "Individual Slab Rates (Old/New)",
    itr5: "Flat 30% (+ Surcharge & 4% Cess)",
    itr6: "22% (Sec 115BAA) or 25% (+ Surcharge & Cess)",
  },
];

const FAQS = [
  {
    q: "Can a private limited company file its income tax return using ITR-4 or ITR-5?",
    a: "No. Companies incorporated under the Companies Act, 2013 (including Private Limited, Public Limited, and OPCs) are strictly restricted to filing Form ITR-6 (or ITR-7 if registered as a Section 8 charitable non-profit). Filing under ITR-4 or ITR-5 will cause immediate rejection.",
  },
  {
    q: "What is the key difference between ITR-3 and ITR-4?",
    a: "ITR-3 is for sole proprietors who maintain comprehensive books of account (P&L and balance sheet) or are subject to tax audit under Section 44AB. ITR-4 (Sugam) is a simplified form for small businesses and professionals declaring deemed profits under presumptive taxation (Section 44AD/44ADA) without maintaining books.",
  },
  {
    q: "Is ITR-5 filing mandatory for an LLP if it had zero business activity during the year?",
    a: "Yes. Under direct tax statutes, every Limited Liability Partnership (LLP) registered with the MCA must mandatorily file Form ITR-5 every financial year, even if there were zero transactions, no revenue, or continuous operational losses.",
  },
  {
    q: "Can a company verify Form ITR-6 using Aadhaar OTP?",
    a: "No. Under statutory direct tax e-filing rules, corporate entities filing Form ITR-6 are legally mandated to verify their returns exclusively through a registered Class 3 Digital Signature Certificate (DSC) belonging to the Managing Director or authorized Director.",
  },
  {
    q: "Which ITR form is applicable to a freelancer or digital creator?",
    a: "Freelancers, software consultants, and content creators can file Form ITR-4 under Section 44ADA (declaring 50% of gross receipts as profit without maintaining books) if receipts are under ₹75 Lakhs. If receipts exceed this threshold or actual expenses exceed 50%, they must file Form ITR-3 with books of accounts.",
  },
  {
    q: "What is Schedule MAT in Form ITR-6?",
    a: "Schedule MAT captures calculations for Minimum Alternate Tax under Section 115JB. If the income tax calculated on regular taxable income is lower than 15% of the company's book profits (derived from the audited P&L), the company must pay tax based on book profits.",
  },
  {
    q: "Can a Partnership Firm opt for the New Tax Regime?",
    a: "No. The concessional New Tax Regime under Section 115BAC applies only to Individuals, HUFs, AOPs, and BOIs. Partnership Firms and LLPs remain subject to the flat 30% direct tax rate under Section 115JC.",
  },
  {
    q: "What happens if a business files using the incorrect ITR form?",
    a: "Filing an inappropriate form causes the Centralized Processing Center (CPC) to issue a 'Defective Return Notice' under Section 139(9). The taxpayer is granted 15 days to rectify the defect by filing the correct form; failure to do so renders the return invalid and deemed never filed.",
  },
  {
    q: "Which ITR form is applicable for Section 8 companies and educational trusts?",
    a: "Section 8 non-profit companies, charitable institutions, and educational societies claiming statutory tax exemption under Section 11 and 12 must file Form ITR-7 accompanied by Form 10B/10BB audit reports.",
  },
  {
    q: "How does Merrafilings ensure the right ITR form is selected for my enterprise?",
    a: "Merrafilings direct tax experts analyze your legal entity structure, ownership charter, commercial turnover, and digital receipt percentage to assign the exact ITR form, avoiding Section 139(9) defective notices.",
  },
];

export default function BusinessItrTypesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <BusinessItrGuideLayout
      currentSlug="business-itr-types"
      title="Business ITR Form Types for Every Entity in India"
      breadcrumbLabel="Business ITR Form Types"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Selecting the appropriate <strong className="font-semibold text-slate-950">Income Tax Return (ITR) Form</strong> is
          the foundational step in maintaining corporate tax compliance in India. The Central Board of Direct Taxes (CBDT)
          notifies distinct return formats engineered specifically for different commercial personas—ranging from solo proprietorships
          and presumptive traders to multi-partner LLPs and corporate conglomerates.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Submitting an incompatible form causes the automated CPC processing engine to issue a statutory
          <strong className="font-semibold text-slate-950"> Defective Return Notice under Section 139(9)</strong>, exposing the business
          to invalid filing penalties and forfeited loss carry-forward rights. This definitive guide decodes all business ITR form
          categories (ITR-3, ITR-4, ITR-5, ITR-6, and ITR-7), providing a comparative roadmap for Indian enterprises.
        </p>
      </section>

      {/* Section 1: Complete CBDT Forms Overview */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. The Complete Spectrum of CBDT Income Tax Forms (ITR-1 to ITR-7)
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Review which forms are reserved for individuals and which are legally mandated for commercial entities:
        </p>

        <div className="space-y-3 mt-3">
          {ITR_TYPES_LIST.map((item, idx) => (
            <div
              key={idx}
              className="p-4.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200 font-mono">
                    {item.form}
                  </span>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900">{item.category}</h3>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 self-start sm:self-auto">
                  {item.businessApplicability}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.eligibility}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Detailed Head-to-Head Comparison */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Comparative Matrix: ITR-3 vs. ITR-5 vs. ITR-6
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Examine the structural, legal, and operational distinctions among the three primary commercial filing forms:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-xl mt-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Compliance Parameter</th>
                <th className="p-3 sm:p-4">Form ITR-3 (Proprietorship)</th>
                <th className="p-3 sm:p-4">Form ITR-5 (Firm / LLP)</th>
                <th className="p-3 sm:p-4 text-emerald-800 bg-emerald-50/50">Form ITR-6 (Company)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMPARISON_TABLE.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-3 sm:p-4 font-bold text-slate-900">{row.parameter}</td>
                  <td className="p-3 sm:p-4">{row.itr3}</td>
                  <td className="p-3 sm:p-4">{row.itr5}</td>
                  <td className="p-3 sm:p-4 text-emerald-900 font-medium">{row.itr6}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Entity-wise Form Selection Guide */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Quick Entity-wise Form Selection Guide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-1">Sole Proprietorship</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Use <strong>ITR-4 Sugam</strong> if opting for Section 44AD presumptive taxation without books. Use <strong>ITR-3</strong> if maintaining accounting books or claiming loss carry-forwards.
            </p>
          </div>
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-1">Partnership Firm &amp; LLP</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Always file <strong>Form ITR-5</strong>. Partnership firms may opt for Section 44AD via ITR-5, while LLPs are strictly mandated to maintain audited statutory accounts.
            </p>
          </div>
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-1">Private Limited Company &amp; OPC</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Mandatory to file <strong>Form ITR-6</strong> electronically with the designated Director's active Class 3 Digital Signature Certificate (DSC).
            </p>
          </div>
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-1">Section 8 NGO &amp; Trust</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Must file <strong>Form ITR-7</strong> along with Form 10B audit report to preserve statutory exemptions under Sections 11 and 12.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Statutory classification, form switching, and compliance guidelines answered by Merrafilings corporate tax experts.
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
