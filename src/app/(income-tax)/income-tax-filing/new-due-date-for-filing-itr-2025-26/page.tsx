"use client";

import React, { useState } from "react";
import IncomeTaxGuideLayout from "@/components/IncomeTaxGuideLayout";
import {
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Receipt,
  FileCheck,
  Scale,
  ShieldAlert,
  Coins,
  BadgeAlert,
} from "lucide-react";

const MASTER_DUE_DATES = [
  {
    category: "Individuals filing ITR-1 & ITR-2 (Non-audit salaried & house property)",
    dueDate: "31 July 2026",
    applicableForm: "ITR-1 (Sahaj), ITR-2",
    badge: "Salaried Deadline",
    statusColor: "emerald",
  },
  {
    category: "Non-Audit Business, Freelancers & Professionals",
    dueDate: "31 August 2026",
    applicableForm: "ITR-3, ITR-4 (Sugam)",
    badge: "New Extended Relief",
    statusColor: "blue",
  },
  {
    category: "Tax Audit Cases under Section 44AB (Companies, LLPs, Audit Firms)",
    dueDate: "31 October 2026",
    applicableForm: "ITR-5, ITR-6 (Form 3CD due 30 Sept)",
    badge: "Audit Mandate",
    statusColor: "purple",
  },
  {
    category: "International & Domestic Transfer Pricing Entities (Section 92E)",
    dueDate: "30 November 2026",
    applicableForm: "ITR-6 (Form 3CEB due 31 Oct)",
    badge: "Transfer Pricing",
    statusColor: "indigo",
  },
  {
    category: "Belated Return Filing Deadline (Section 139(4))",
    dueDate: "31 December 2026",
    applicableForm: "Any Form (with ₹5,000 late fee)",
    badge: "Late Filing Cutoff",
    statusColor: "amber",
  },
  {
    category: "Revised Return Submission (Section 139(5))",
    dueDate: "31 December 2026",
    applicableForm: "Any Form (Correction/Omissions)",
    badge: "Final Revision Window",
    statusColor: "teal",
  },
  {
    category: "Updated Return (ITR-U under Section 139(8A))",
    dueDate: "Up to 31 March 2029",
    applicableForm: "ITR-U (Additional 25% to 50% tax)",
    badge: "2-Year Window",
    statusColor: "rose",
  },
];

const THREE_MAJOR_REVISIONS = [
  {
    num: "1",
    title: "Segregated Due Date for Business & Professional Taxpayers",
    desc: "Historically, all non-audit taxpayers shared a July 31 deadline. For AY 2026-27 onwards, CBDT has officially carved out an additional month (until 31 August 2026) for non-audit ITR-3 and ITR-4 taxpayers, granting much-needed breathing room to freelancers, MSMEs, and consultants.",
  },
  {
    num: "2",
    title: "Heightened Disclosures for Capital Gains & Buybacks",
    desc: "New reporting frameworks require precise classification of short-term capital gains (taxed at 20%), long-term capital gains (taxed at 12.5% without indexation), and share buyback receipts (now taxed as deemed dividends in the hands of shareholders).",
  },
  {
    num: "3",
    title: "Pre-Release of Online & JSON / Excel Utilities",
    desc: "The Income Tax Department has rolled out schema utilities and web-based preparation tools well in advance, enabling early taxpayer validation and minimizing last-week server bottlenecks.",
  },
];

const PENALTY_CONSEQUENCES = [
  {
    section: "Section 234F",
    title: "Late Filing Fee",
    amount: "₹5,000",
    desc: "Mandatory fee levied if return is filed after the due date. Capped at ₹1,000 if total taxable income is up to ₹5,00,000.",
  },
  {
    section: "Section 234A",
    title: "Penal Interest",
    amount: "1% Per Month",
    desc: "Simple interest of 1% per month or part of a month charged on unpaid tax liability from the due date until the actual date of filing.",
  },
  {
    section: "Section 139(3)",
    title: "Forfeiture of Loss Carry-Forward",
    amount: "Permanent Loss",
    desc: "Business losses, speculation losses, and capital losses cannot be carried forward to subsequent years if the return is filed belatedly.",
  },
  {
    section: "Section 244A",
    title: "Loss of Refund Interest",
    amount: "Delayed Credit",
    desc: "Interest on income tax refunds (0.5% per month) is delayed or forfeited for the period of delay attributable to the taxpayer.",
  },
];

const FAQS = [
  {
    q: "What is the new ITR due date for non-audit businesses and freelancers for AY 2026-27?",
    a: "The due date for taxpayers filing Form ITR-3 and ITR-4 without statutory tax audit requirements is 31 August 2026. This is a one-month extension compared to salaried individuals whose deadline remains 31 July 2026.",
  },
  {
    q: "What happens if I miss the 31 July 2026 deadline as a salaried individual?",
    a: "If you miss the July 31 due date, you can still file a Belated Return up to 31 December 2026. However, you will have to pay a late fee under Section 234F (₹5,000, or ₹1,000 if income is under ₹5 Lakhs) plus 1% per month interest under Section 234A on any unpaid taxes.",
  },
  {
    q: "When is the tax audit report due for FY 2025-26?",
    a: "For entities subject to tax audit under Section 44AB, the Tax Audit Report (Form 3CA-3CD) must be digitally filed by the Chartered Accountant by 30 September 2026, while the final Form ITR-6 or ITR-5 return is due on 31 October 2026.",
  },
  {
    q: "Can I carry forward my stock trading losses if I file after the due date?",
    a: "No! Under Section 139(3) of the Income Tax Act, business losses (including F&O trading losses) and capital losses (short-term and long-term) cannot be carried forward if your ITR is filed after the statutory due date. Only house property loss is allowed to be carried forward in belated filings.",
  },
  {
    q: "Is there any extension for submitting revised returns for AY 2026-27?",
    a: "Under Section 139(5), a revised return to rectify errors or omissions can be submitted up to 31 December 2026 (three months prior to the end of the assessment year), or before the completion of assessment, whichever is earlier.",
  },
  {
    q: "What is the Updated Return (ITR-U) and how long can I use it?",
    a: "If you missed both the original and belated return deadlines, you can file an Updated Return (ITR-U) under Section 139(8A) within 24 months from the end of the relevant assessment year (i.e., up to 31 March 2029 for AY 2026-27), upon payment of 25% to 50% additional tax.",
  },
  {
    q: "Does the new due date of August 31 apply to professionals filing under Section 44ADA?",
    a: "Yes. Freelancers, doctors, advocates, IT consultants, and technical service providers filing Form ITR-4 under presumptive taxation Section 44ADA enjoy the extended due date of 31 August 2026.",
  },
  {
    q: "What documents should I keep ready to file before the due date?",
    a: "You must download and reconcile Form 16/16A, Annual Information Statement (AIS), Taxpayer Information Summary (TIS), Form 26AS, full-year bank statements, mutual fund/stock capital gains statements, and Chapter VI-A investment proofs.",
  },
  {
    q: "Why shouldn't I wait until the last week of the filing deadline?",
    a: "In the final 7 to 10 days before any major ITR deadline, the e-filing portal experiences severe traffic surges leading to slow page loads, OTP delivery failures, banking gateway timeouts, and e-verification errors.",
  },
  {
    q: "How does Merrafilings ensure on-time filing before statutory deadlines?",
    a: "Merrafilings operates a dedicated compliance monitoring desk that flags upcoming deadlines, assigns senior CAs for fast turnaround, pre-validates AIS data, and issues verified ITR-V acknowledgements well before cutoff dates.",
  },
];

export default function NewDueDateForFilingItrPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <IncomeTaxGuideLayout
      currentSlug="new-due-date-for-filing-itr-2025-26"
      title="New Due Dates for Filing ITR for FY 2025-26 (AY 2026-27)"
      breadcrumbLabel="New ITR Due Dates (AY 2026-27)"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax Advisory Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Central Board of Direct Taxes (<strong className="font-semibold text-slate-950">CBDT</strong>) has introduced
          critical updates to the statutory Income Tax Return filing calendar for <strong className="font-semibold text-slate-950">Financial Year 2025-26 (Assessment Year 2026-27)</strong>.
          Taxpayers, corporate directors, and practicing professionals must align their compliance schedules with these revised timelines to prevent
          hefty late fees, interest charges, and the loss of loss-carry-forward privileges.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          This comprehensive advisory breaks down the master timeline for each taxpayer category, details the newly segregated
          due dates for business returns, outlines enhanced capital gains reporting protocols, and explains the statutory
          implications of belated filings.
        </p>
      </section>

      {/* Section 1: Master Due Dates Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. Revised Master ITR Filing Due Dates for AY 2026-27
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Review the statutory due dates prescribed under Section 139(1) of the Income Tax Act for each taxpayer classification:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-xl mt-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Taxpayer Category &amp; Profile</th>
                <th className="p-3 sm:p-4">Applicable Form</th>
                <th className="p-3 sm:p-4 text-emerald-800 bg-emerald-50/50">Statutory Due Date</th>
                <th className="p-3 sm:p-4">Status Tag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {MASTER_DUE_DATES.map((row, idx) => (
                <tr key={idx} className={row.badge.includes("New") ? "bg-blue-50/40" : ""}>
                  <td className="p-3 sm:p-4 font-medium text-slate-900">{row.category}</td>
                  <td className="p-3 sm:p-4 font-mono text-xs">{row.applicableForm}</td>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">{row.dueDate}</td>
                  <td className="p-3 sm:p-4">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {row.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Key Structural Highlights */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Key Highlights &amp; Landmark Changes for AY 2026-27
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Three pivotal administrative and structural changes distinguish the current filing cycle:
        </p>

        <div className="space-y-3.5 mt-3">
          {THREE_MAJOR_REVISIONS.map((item, idx) => (
            <div key={idx} className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-1.5 text-emerald-800 font-semibold text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white text-emerald-800 flex items-center justify-center text-xs font-bold transition-colors">
                  {item.num}
                </span>
                <span className="group-hover:text-emerald-900 transition-colors">{item.title}</span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed pl-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Consequences of Missing Due Dates */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Statutory Penalties &amp; Costs of Missing the Filing Due Date
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Failing to submit your return on or before the designated cutoff triggers strict statutory penalties:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {PENALTY_CONSEQUENCES.map((item, idx) => (
            <div key={idx} className="group p-4.5 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-700 bg-rose-100 group-hover:bg-rose-200 px-2.5 py-0.5 rounded-full border border-rose-200 transition-colors">
                  {item.section}
                </span>
                <span className="text-xs font-semibold text-slate-900">{item.amount}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-rose-900 transition-colors mb-1">{item.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Actionable Pre-Filing Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Essential Pre-Filing Checklist for AY 2026-27
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Do not delay your preparation until the final week. Complete these five proactive steps early:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal"><strong className="group-hover:text-emerald-900 transition-colors">Download AIS &amp; Form 26AS:</strong> Inspect every reported credit, interest payment, and tax deducted by employers and clients.</p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal"><strong className="group-hover:text-blue-900 transition-colors">Verify Bank Account Pre-Validation:</strong> Ensure your primary bank account is pre-validated on the portal for speedy refund credits.</p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal"><strong className="group-hover:text-purple-900 transition-colors">Reconcile Capital Gains Statements:</strong> Obtain realized profit/loss statements from your equity brokers and mutual fund CAMS/KFintech.</p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal"><strong className="group-hover:text-amber-900 transition-colors">Finalize Books of Accounts:</strong> Business owners should reconcile GST turnover and book revenues to prevent notice inquiries.</p>
          </div>
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
          Statutory timelines, deadline extensions, and penalty rules for AY 2026-27 answered by Merrafilings tax experts.
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
