"use client";

import React, { useState } from "react";
import BusinessItrGuideLayout from "@/components/BusinessItrGuideLayout";
import {
  BadgePercent,
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
  Layers,
  AlertTriangle,
  Coins,
  Scale,
  Briefcase,
  Building,
} from "lucide-react";

const PRESUMPTIVE_SECTIONS = [
  {
    section: "Section 44AD",
    title: "Small Businesses & Retail Traders",
    eligible: "Resident Individuals, HUFs & Partnership Firms (Excluding LLPs)",
    turnoverLimit: "Up to ₹3 Crore (Digital ≥ 95%) / ₹2 Crore (Cash)",
    rate: "6% on Digital Receipts | 8% on Cash Turnover",
    form: "Form ITR-4 (Sugam)",
    color: "emerald",
  },
  {
    section: "Section 44ADA",
    title: "Specified Practicing Professionals",
    eligible: "Doctors, Lawyers, CAs, Architects, Engineers & IT Consultants",
    turnoverLimit: "Up to ₹75 Lakhs (Digital ≥ 95%) / ₹50 Lakhs (Cash)",
    rate: "50% of Gross Professional Receipts",
    form: "Form ITR-4 (Sugam)",
    color: "blue",
  },
  {
    section: "Section 44AE",
    title: "Goods Carriage Transport Operators",
    eligible: "Transporters owning up to 10 Goods Commercial Vehicles",
    turnoverLimit: "Maximum 10 Goods Carriages at any time in FY",
    rate: "₹1,000/ton per month (Heavy) | ₹7,500/month (Others)",
    form: "Form ITR-4 (Sugam)",
    color: "purple",
  },
];

const WORKING_EXAMPLE = [
  {
    parameter: "Total Annual Turnover",
    cashMode: "₹50,00,000 (100% Cash)",
    digitalMode: "₹50,00,000 (100% Banking/UPI)",
  },
  {
    parameter: "Applicable Presumptive Rate",
    cashMode: "8% (Standard Rate)",
    digitalMode: "6% (Concessional Digital Rate)",
  },
  {
    parameter: "Deemed Taxable Business Profit",
    cashMode: "₹4,00,000",
    digitalMode: "₹3,00,000",
  },
  {
    parameter: "Taxable Income Reduction",
    cashMode: "Baseline",
    digitalMode: "₹1,00,000 Lower Taxable Income",
  },
  {
    parameter: "Audit & Bookkeeping Obligation",
    cashMode: "Exempt (Sec 44AA & 44AB)",
    digitalMode: "Exempt (Sec 44AA & 44AB)",
  },
];

const ADVANTAGES = [
  {
    title: "Zero Accounting Burden (Section 44AA)",
    desc: "Taxpayers are legally excused from preparing daily cash books, inventory ledgers, purchase registers, or audited balance sheets.",
  },
  {
    title: "Immunity from Tax Audit (Section 44AB)",
    desc: "No requirement to engage a practicing Chartered Accountant for Section 44AB audits, saving substantial compliance expenses.",
  },
  {
    title: "Single Advance Tax Date (15th March)",
    desc: "Instead of tracking four quarterly advance tax deadlines, 100% of advance tax can be remitted in one single payment on or before March 15.",
  },
  {
    title: "Encouragement for Digital Transactions",
    desc: "A 2% lower presumptive profit rate (6% vs. 8%) directly rewards business owners for adopting UPI, NEFT, and card settlement methods.",
  },
];

const FAQS = [
  {
    q: "Who is eligible to opt for the Presumptive Taxation Scheme under Section 44AD?",
    a: "Resident individuals, Hindu Undivided Families (HUFs), and partnership firms (excluding Limited Liability Partnerships) engaged in any business with an annual turnover of up to ₹3 Crores (where cash receipts do not exceed 5%) are eligible.",
  },
  {
    q: "Why are LLPs excluded from Section 44AD presumptive taxation?",
    a: "Under direct tax provisions, Limited Liability Partnerships (LLPs) are corporate bodies governed by the LLP Act, 2008 with distinct statutory auditing standards. They are expressly barred from using Section 44AD and must file Form ITR-5 with audited financial statements.",
  },
  {
    q: "What is the consequence if I declare profit lower than 6% or 8%?",
    a: "If your actual business profits are lower than 6% (digital) or 8% (cash) and your total taxable income exceeds the basic exemption limit, you cannot use the presumptive scheme. You must maintain books of accounts under Section 44AA and undergo a mandatory tax audit under Section 44AB.",
  },
  {
    q: "Explain the strict 5-year lock-in rule under Section 44AD(4).",
    a: "If an eligible taxpayer avails Section 44AD in one assessment year and opts out in any of the subsequent 5 years (by declaring profit below 6%/8%), they are barred from returning to the presumptive taxation scheme for the next 5 consecutive assessment years.",
  },
  {
    q: "Can I claim separate business expenses like shop rent, employee salary, or electricity under Section 44AD?",
    a: "No. The deemed profit rate of 6% or 8% already takes into account all deductible commercial expenses under Sections 30 to 38. No separate deductions for rent, wages, depreciation, or utility bills can be claimed against presumptive income.",
  },
  {
    q: "Can a professional like an advocate or doctor use Section 44AD?",
    a: "No. Professionals specified under Section 44AA(1) cannot use Section 44AD. Instead, they are covered under Section 44ADA, which allows professionals with gross receipts up to ₹75 Lakhs to declare 50% of receipts as deemed profit.",
  },
  {
    q: "When is the advance tax payable for taxpayers under the presumptive scheme?",
    a: "Taxpayers opting for presumptive taxation under Section 44AD or 44ADA are required to pay 100% of their advance tax in a single installment on or before 15th March of the financial year.",
  },
  {
    q: "What is the enhanced turnover limit of ₹3 Crores for Section 44AD?",
    a: "The standard turnover limit for Section 44AD is ₹2 Crores. However, starting from FY 2023-24 onwards, the limit was raised to ₹3 Crores on the condition that aggregate cash receipts during the financial year do not exceed 5% of total turnover.",
  },
  {
    q: "Can a business dealing in agency or commission income use presumptive taxation?",
    a: "No. Under Section 44AD(6), persons earning income in the nature of commission or brokerage, or individuals carrying on an agency business, are strictly disqualified from availing presumptive taxation.",
  },
  {
    q: "How does Merrafilings help taxpayers file under the Presumptive Taxation Scheme?",
    a: "Merrafilings verifies your turnover split between digital and cash modes, confirms Section 44AD/44ADA eligibility, pre-reconciles AIS data, calculates net advance tax dues, files Form ITR-4 Sugam, and assists with e-verification.",
  },
];

export default function PresumptiveTaxationSchemeBusinessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <BusinessItrGuideLayout
      currentSlug="presumptive-taxation-scheme-business"
      title="Presumptive Taxation Scheme for Business in India"
      breadcrumbLabel="Presumptive Taxation Scheme"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The <strong className="font-semibold text-slate-950">Presumptive Taxation Scheme</strong> is one of the most
          progressive direct tax simplifications introduced under the Income Tax Act, 1961. Designed specifically to shield small
          traders, retailers, and self-employed professionals from the burden of maintaining voluminous accounting ledgers, this scheme
          allows taxpayers to declare business profits as a predetermined statutory percentage of their gross turnover.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Under <strong className="font-semibold text-slate-950">Section 44AD</strong> (for businesses), <strong className="font-semibold text-slate-950">Section 44ADA</strong> (for professionals),
          and <strong className="font-semibold text-slate-950">Section 44AE</strong> (for transporters), eligible taxpayers can file their annual return using
          the simplified <strong className="font-semibold text-slate-950">Form ITR-4 (Sugam)</strong> without requiring a Chartered Accountant tax audit.
          This comprehensive guide explains eligibility thresholds, calculation methodologies, digital incentives, and opting-out implications.
        </p>
      </section>

      {/* Section 1: Overview of the 3 Presumptive Sections */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. The Three Statutory Presumptive Taxation Schemes
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Income Tax Act classifies presumptive taxation across three specialized statutory provisions:
        </p>

        <div className="space-y-4 mt-3">
          {PRESUMPTIVE_SECTIONS.map((sec, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {sec.section}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">{sec.title}</h3>
                </div>
                <span className="text-xs font-mono font-medium text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200 self-start sm:self-auto group-hover:border-emerald-200 transition-colors">
                  {sec.form}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mt-3 pt-3 border-t border-slate-100">
                <div>
                  <span className="text-slate-500 block mb-0.5">Eligible Taxpayers</span>
                  <strong className="text-slate-800">{sec.eligible}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Statutory Turnover Ceiling</span>
                  <strong className="text-slate-800">{sec.turnoverLimit}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Deemed Profit Rate</span>
                  <strong className="text-emerald-700">{sec.rate}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Mathematical Example */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Cash vs. Digital Turnover: Real-World Mathematical Calculation
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The government rewards businesses that transact digitally by lowering the deemed profit threshold from 8% to 6%.
          Consider a retail firm with ₹50 Lakhs in annual turnover:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-xl mt-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Computation Metric</th>
                <th className="p-3 sm:p-4">100% Cash Collections</th>
                <th className="p-3 sm:p-4 text-emerald-800 bg-emerald-50/50">100% Digital / UPI Receipts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {WORKING_EXAMPLE.map((row, idx) => (
                <tr key={idx} className={idx === 3 ? "bg-emerald-50/70 font-semibold text-emerald-950" : ""}>
                  <td className="p-3 sm:p-4 font-medium text-slate-900">{row.parameter}</td>
                  <td className="p-3 sm:p-4">{row.cashMode}</td>
                  <td className="p-3 sm:p-4 text-emerald-900">{row.digitalMode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
          <strong>Key Insight:</strong> By channeling customer payments through UPI, QR codes, or bank transfers, this business reduces its taxable profit by ₹1,00,000, significantly reducing net income tax payable.
        </p>
      </section>

      {/* Section 3: Core Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Strategic Benefits of Presumptive Taxation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">{adv.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: 5-Year Lock-in Rule Warning */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. The Critical 5-Year Lock-In Rule (Section 44AD(4))
        </h2>
        <div className="group p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-2xs hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/15 hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-900 group-hover:text-amber-950 transition-colors">
            <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </span>
            <span>Understanding the Statutory Opting-Out Hazard</span>
          </div>
          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 font-normal pl-10">
            If a small business opts for Section 44AD in one assessment year and subsequently declares profit below the deemed 6% or 8% rate in any of the subsequent 5 years, the consequences are severe:
          </p>
          <ul className="text-xs sm:text-[13px] text-slate-800 space-y-1 list-disc pl-15">
            <li>The business is <strong>strictly barred</strong> from re-entering Section 44AD for the next 5 consecutive assessment years.</li>
            <li>The taxpayer is mandated to maintain comprehensive books of account under Section 44AA.</li>
            <li>The taxpayer must undergo a compulsory Chartered Accountant tax audit under Section 44AB.</li>
          </ul>
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
          Detailed statutory rules and compliance requirements under Section 44AD and 44ADA answered by tax experts.
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
