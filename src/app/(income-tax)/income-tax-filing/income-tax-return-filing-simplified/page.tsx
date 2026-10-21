"use client";

import React, { useState } from "react";
import IncomeTaxGuideLayout from "@/components/IncomeTaxGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Receipt,
  FileCheck,
  Layers,
  Scale,
  Calendar,
  AlertTriangle,
  Coins,
  Calculator,
  UserCheck,
} from "lucide-react";

const FOUR_CORE_BENEFITS = [
  {
    title: "Definitive Legal Proof of Income",
    badge: "Financial Credibility",
    desc: "Filed ITR-V acknowledgements are the premier financial identity proof demanded by scheduled commercial banks for home loans, car loans, commercial credit lines, and international travel visas.",
    icon: <FileCheck className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
  },
  {
    title: "Instant Claiming of Tax Refunds",
    badge: "Direct Bank Credit",
    desc: "If your employer, bank, or clients deducted excess TDS compared to your true tax liability, filing your return is the only statutory mechanism to claim that refund plus 0.5% per month interest under Section 244A.",
    icon: <Coins className="w-5 h-5 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Carry Forward of Capital & Trading Losses",
    badge: "Future Tax Offset",
    desc: "Losses incurred in equities, F&O derivatives, intraday trading, or house properties can be legally carried forward for up to 8 subsequent assessment years to reduce future tax bills—provided you file before the due date.",
    icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
    color: "purple",
  },
  {
    title: "Immunity from Penalties & Scrutiny Notices",
    badge: "Penalty Shield",
    desc: "Timely e-filing protects you from mandatory late filing fees under Section 234F (up to ₹5,000), escalating monthly interest under Section 234A, and high-risk automated scrutiny notices.",
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
    color: "amber",
  },
];

const ITR_FORMS_GRID = [
  {
    form: "ITR-1 (SAHAJ)",
    eligibleFor: "Salaried & Pensioners",
    scope: "For resident individuals having total income up to ₹50 Lakhs from salary, one house property, and other sources (interest, dividends). Agricultural income up to ₹5,000.",
    badge: "Most Common",
  },
  {
    form: "ITR-2",
    eligibleFor: "Capital Gains & Multiple Properties",
    scope: "For individuals and HUFs not having business/profession income. Covers capital gains from stocks/real estate, foreign assets, directorship in companies, or multiple house properties.",
    badge: "Investors & NRIs",
  },
  {
    form: "ITR-3",
    eligibleFor: "Business & Professionals",
    scope: "For individuals and HUFs earning profits from proprietary business, partnership share, freelancing, or clinical/legal/accounting practice.",
    badge: "Entrepreneurs",
  },
  {
    form: "ITR-4 (SUGAM)",
    eligibleFor: "Presumptive Taxpayers",
    scope: "For resident individuals, HUFs, and firms (excluding LLPs) with total income up to ₹50 Lakhs declaring presumptive profits under Section 44AD, 44ADA, or 44AE.",
    badge: "Presumptive 50%/6%",
  },
  {
    form: "ITR-5",
    eligibleFor: "Partnership Firms & LLPs",
    scope: "For registered and unregistered Partnership Firms, Limited Liability Partnerships (LLPs), Association of Persons (AOPs), and Body of Individuals (BOIs).",
    badge: "Firm Standard",
  },
  {
    form: "ITR-6",
    eligibleFor: "Corporate Entities",
    scope: "Mandatory for all incorporated companies (Private Limited, Public Limited, One Person Company) not claiming charitable exemptions under Section 11.",
    badge: "Corporate",
  },
];

const RECENT_CHANGES = [
  {
    title: "Pre-Filled Return Data Integration",
    desc: "The income tax e-filing portal automatically pulls verified financial data from your Annual Information Statement (AIS) and Taxpayer Information Summary (TIS), pre-filling salaries, dividends, and interest.",
  },
  {
    title: "Default New Tax Regime (Section 115BAC)",
    desc: "The New Tax Regime is now the statutory default. Taxpayers wishing to utilize the Old Tax Regime must actively elect it on the portal (and submit Form 10-IEA if carrying business income).",
  },
  {
    title: "Mandatory Schedule VDA (Virtual Digital Assets)",
    desc: "Comprehensive transaction-level reporting is mandatory for gains realized from cryptocurrencies, tokens, and non-fungible tokens (NFTs), taxed at a flat 30% without loss set-off.",
  },
  {
    title: "Standard Deduction Hike to ₹75,000",
    desc: "Under the updated New Tax Regime, the standard deduction for salaried employees and pensioners has been increased from ₹50,000 to ₹75,000, boosting tax-free income.",
  },
];

const FAQS = [
  {
    q: "Who is legally required to file an Income Tax Return in India?",
    a: "Filing is mandatory if your gross total income exceeds the basic exemption limit (₹2.5 Lakhs under Old Regime or ₹3 Lakhs under New Regime). Additionally, filing is compulsory if you deposited over ₹1 Crore in current accounts, spent over ₹2 Lakhs on foreign travel, incurred over ₹1 Lakh in electricity bills, or have foreign assets.",
  },
  {
    q: "What is the difference between ITR-1 (Sahaj) and ITR-2?",
    a: "ITR-1 is restricted to resident individuals with income up to ₹50 Lakhs from salary, one house property, and interest income. If you sold shares, mutual funds, cryptocurrency, own multiple house properties, or hold foreign assets, you must file ITR-2 regardless of your income level.",
  },
  {
    q: "How does pre-filling work in modern ITR filing?",
    a: "The Income Tax Department links your PAN with banks, employers, stock depositories, and mutual fund houses. Data on salary TDS, bank interest, dividend payouts, and securities sales are pre-populated into your online return from your AIS and Form 26AS.",
  },
  {
    q: "What happens if I forget to e-verify my filed ITR?",
    a: "An unverified return is treated as invalid in the eyes of the law. If you do not e-verify within 30 days of submission (via Aadhaar OTP, Net Banking, or physical ITR-V to CPC Bengaluru), your return is deemed never filed, exposing you to Section 234F late penalties.",
  },
  {
    q: "What is Form 10-IEA and when is it required?",
    a: "Form 10-IEA is required for individuals and HUFs having income from business or profession who wish to opt out of the default New Tax Regime and file under the Old Tax Regime. It must be submitted on or before the due date specified under Section 139(1).",
  },
  {
    q: "Can I file my ITR if my PAN and Aadhaar are not linked?",
    a: "If your PAN is inoperative due to non-linking with Aadhaar, you cannot file your return or claim pending tax refunds until you link them on the e-filing portal after paying the statutory fee under Section 234H.",
  },
  {
    q: "What is the penalty for filing my ITR after the July 31 due date?",
    a: "Under Section 234F, a late fee of ₹5,000 is levied if you file after the due date (reduced to ₹1,000 if total taxable income is below ₹5 Lakhs). Additionally, interest of 1% per month is charged on unpaid taxes under Section 234A.",
  },
  {
    q: "Can I revise my income tax return if I made an error during filing?",
    a: "Yes. Under Section 139(5), you can file a Revised Return to correct any omission, missed deduction, or calculation error up to 31st December of the relevant Assessment Year without any additional penalty.",
  },
  {
    q: "How long does it take for the Income Tax Department to process a tax refund?",
    a: "Once your return is e-verified and processed by the Centralized Processing Center (CPC) under Section 143(1), valid refunds are usually credited directly to your pre-validated bank account within 7 to 30 working days.",
  },
  {
    q: "Why should I file my ITR through Merrafilings rather than DIY portals?",
    a: "Merrafilings pairs you with qualified Chartered Accountants who thoroughly inspect your AIS/TIS for hidden discrepancies, ensure optimal tax regime selection, maximize all Chapter VI-A deductions, and provide free year-round notice protection.",
  },
];

export default function IncomeTaxReturnFilingSimplifiedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <IncomeTaxGuideLayout
      currentSlug="income-tax-return-filing-simplified"
      title="Income Tax Return Filing Simplified: A Complete Guide"
      breadcrumbLabel="ITR Filing Simplified"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax Advisory Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing your <strong className="font-semibold text-slate-950">Income Tax Return (ITR)</strong> is often perceived
          as a daunting annual chore. However, with modern digitized tax administration, pre-filled financial datasets,
          and automated verification pipelines, filing your annual return is simpler and more advantageous than ever before.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Whether you are a first-time salaried employee, an active stock market investor, or an independent consultant,
          this simplified guide decodes core statutory obligations, explains which ITR form fits your financial profile,
          highlights recent portal revisions, and demonstrates how to maximize your lawful tax refunds.
        </p>
      </section>

      {/* Section 1: 4 Core Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. Understanding the Importance &amp; Strategic Benefits of Filing ITR
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing an income tax return is not merely about tax compliance; it is a foundational pillar of personal financial health:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {FOUR_CORE_BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: 4-Step Simplified Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. The 4-Step Master Blueprint to Filing Your ITR
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Executing your annual income tax return involves four clear, straightforward milestones:
        </p>

        <div className="space-y-3.5 mt-3">
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-emerald-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs">1</span>
              <span>Compile &amp; Reconcile Financial Records</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pl-8">
              Download your <strong>Form 16 / 16A</strong>, <strong>Annual Information Statement (AIS)</strong>, and <strong>Form 26AS</strong>.
              Gather interest certificates from your banks, broker capital gains statements, and receipts for investments under Section 80C to 80U.
            </p>
          </div>

          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">2</span>
              <span>Select the Appropriate ITR Form</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pl-8">
              Choosing the wrong form invalidates your submission. Salaried individuals with simple income use <strong>ITR-1</strong>;
              equity and crypto investors require <strong>ITR-2</strong>; and professionals or business owners use <strong>ITR-3 or ITR-4</strong>.
            </p>
          </div>

          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-purple-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs">3</span>
              <span>Execute Computation &amp; Tax Regime Comparison</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pl-8">
              Compare your tax outgo under the <strong>Old Tax Regime</strong> (with HRA and Chapter VI-A deductions) versus the
              <strong>New Tax Regime</strong> (with ₹75,000 standard deduction and lower slab rates). Choose the optimal tax structure.
            </p>
          </div>

          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-amber-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs">4</span>
              <span>Submit &amp; Instant E-Verification</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pl-8">
              Submit your return electronically on the portal and immediately complete e-verification via <strong>Aadhaar OTP</strong>
              or <strong>Net Banking EVC</strong>. Always download your official <strong>ITR-V acknowledgement</strong> for record-keeping.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: ITR Forms Comparison Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Which ITR Form Should You File? (Form 1 to Form 6 Breakdown)
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Selecting the correct form ensures smooth processing by the CPC system without defect notices:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
          {ITR_FORMS_GRID.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900">{item.form}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  {item.badge}
                </span>
              </div>
              <h4 className="text-xs font-semibold text-emerald-700 mb-1">{item.eligibleFor}</h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.scope}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Modern Changes & Portal Upgrades */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Recent Structural Changes in Income Tax Filing
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Central Board of Direct Taxes (CBDT) has deployed several key updates relevant for AY 2026-27:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {RECENT_CHANGES.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Statutory Filing Due Dates */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5. Master Calendar: Key Filing Dates to Avoid Penalties
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Taxpayer Category</th>
                <th className="p-3 sm:p-4">Statutory Due Date</th>
                <th className="p-3 sm:p-4">Remarks &amp; Relief</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Salaried &amp; Non-Audit Individuals (ITR-1 &amp; ITR-2)</td>
                <td className="p-3 sm:p-4 text-emerald-800 font-semibold">31 July 2026</td>
                <td className="p-3 sm:p-4">Standard due date for individual taxpayers without business income.</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Non-Audit Business / Freelancers (ITR-3 &amp; ITR-4)</td>
                <td className="p-3 sm:p-4 text-emerald-800 font-semibold">31 August 2026</td>
                <td className="p-3 sm:p-4">Extended relief deadline for small business and freelance taxpayers.</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Tax Audit Cases (Section 44AB)</td>
                <td className="p-3 sm:p-4 text-blue-800 font-semibold">31 October 2026</td>
                <td className="p-3 sm:p-4">Audit report (Form 3CA-3CD) must be submitted by 30 September 2026.</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Belated &amp; Revised Returns (AY 2026-27)</td>
                <td className="p-3 sm:p-4 text-purple-800 font-semibold">31 December 2026</td>
                <td className="p-3 sm:p-4">Final deadline with Section 234F late filing fee.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Everything you need to know about simplified income tax e-filing answered by Merrafilings tax experts.
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
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </IncomeTaxGuideLayout>
  );
}
