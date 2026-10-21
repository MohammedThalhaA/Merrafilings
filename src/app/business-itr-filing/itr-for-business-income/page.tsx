"use client";

import React, { useState } from "react";
import BusinessItrGuideLayout from "@/components/BusinessItrGuideLayout";
import {
  Briefcase,
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
  Layers,
  AlertTriangle,
  Coins,
  Scale,
  Calendar,
  Percent,
} from "lucide-react";

const ENTITY_FORM_MATRIX = [
  {
    entity: "Sole Proprietorship / Freelancers",
    form: "ITR-3 or ITR-4 (Sugam)",
    taxRate: "Individual Slab Rates (Old or New Slabs)",
    auditTrigger: "Turnover > ₹1 Cr (Cash) or ₹10 Cr (Digital)",
    color: "blue",
  },
  {
    entity: "Partnership Firm",
    form: "ITR-5",
    taxRate: "Flat 30% (+ Surcharge & 4% Cess)",
    auditTrigger: "Turnover > ₹1 Cr (Cash) or ₹10 Cr (Digital)",
    color: "emerald",
  },
  {
    entity: "Limited Liability Partnership (LLP)",
    form: "ITR-5",
    taxRate: "Flat 30% (+ Alternate Minimum Tax AMT 18.5%)",
    auditTrigger: "Turnover > ₹1 Cr or Contribution > ₹25L",
    color: "purple",
  },
  {
    entity: "Private Limited Company",
    form: "ITR-6",
    taxRate: "22% (Sec 115BAA) or 25% (+ Surcharge & Cess)",
    auditTrigger: "Mandatory Statutory Audit (Companies Act)",
    color: "indigo",
  },
];

const ADVANCE_TAX_SCHEDULE = [
  {
    installment: "1st Installment",
    dueDate: "On or before 15th June",
    percentage: "15% of Estimated Annual Tax",
    interestRule: "Section 234C interest applies if < 12% paid",
  },
  {
    installment: "2nd Installment",
    dueDate: "On or before 15th September",
    percentage: "45% of Estimated Annual Tax",
    interestRule: "Section 234C interest applies if < 36% paid",
  },
  {
    installment: "3rd Installment",
    dueDate: "On or before 15th December",
    percentage: "75% of Estimated Annual Tax",
    interestRule: "Section 234C interest applies if < 75% paid",
  },
  {
    installment: "4th Installment",
    dueDate: "On or before 15th March",
    percentage: "100% of Estimated Annual Tax",
    interestRule: "Section 234B interest applies if < 90% paid",
  },
];

const DOCUMENT_CHECKLIST = [
  { title: "Books of Accounts", desc: "Audited or compiled Profit & Loss Statement, Balance Sheet, and Trial Balance ledgers." },
  { title: "Banking Records", desc: "Full financial year bank statements across all current and overdraft accounts with reconciliation." },
  { title: "GST Returns (1 & 3B)", desc: "Monthly/quarterly GSTR summaries to cross-verify declared sales and prevent mismatch notices." },
  { title: "TDS Certificates (Form 16A)", desc: "Tax deduction certificates issued by corporate clients under Section 194C, 194J, or 194Q." },
  { title: "Form 26AS & AIS / TIS", desc: "Comprehensive statements downloaded from the portal reflecting all prepaid taxes and credits." },
  { title: "Fixed Asset Depreciation", desc: "Schedule of additions, disposals, and block-wise depreciation calculated under Section 32." },
];

const FAQS = [
  {
    q: "How is net business taxable income computed in India?",
    a: "Business income is computed by taking gross commercial turnover or revenue, deducting allowable operating expenses under Sections 30 to 38 (office rent, employee wages, Section 32 depreciation, utility bills, raw material costs), and adjusting for non-allowable expenses under Section 40A to arrive at Net Taxable Profits.",
  },
  {
    q: "Is advance tax mandatory for all businesses?",
    a: "Yes. Under Section 208, every business taxpayer whose estimated net tax liability (after subtracting TDS credits) exceeds ₹10,000 in a financial year must pay advance tax in four statutory installments.",
  },
  {
    q: "What is the penalty for failing to pay quarterly advance tax?",
    a: "Under Section 234C, simple interest of 1% per month is charged for deferment of each advance tax installment. Furthermore, under Section 234B, simple interest of 1% per month is charged if at least 90% of the assessed tax was not paid before the end of the financial year.",
  },
  {
    q: "Can a business carry forward operational losses if it files after the due date?",
    a: "No! Under Section 139(3), business losses (under Section 72) and speculation losses (under Section 73) cannot be carried forward to subsequent years if the ITR is filed after the statutory due date. Timely filing before the due date is strictly mandatory to retain loss carry-forward rights for 8 years.",
  },
  {
    q: "What is Section 43B(h) regarding payments to micro and small enterprises?",
    a: "Under Section 43B(h), any payment due from a business to a registered Micro or Small enterprise that remains unpaid beyond the MSMED Act statutory deadline (15 days without contract, or maximum 45 days under written agreement) is disallowed as a business expense for that financial year and added back to taxable income.",
  },
  {
    q: "What is the tax rate applicable to Partnership Firms and LLPs?",
    a: "Partnership Firms and LLPs are taxed at a flat rate of 30% plus 12% surcharge (if total income exceeds ₹1 Crore) and 4% Health & Education Cess, resulting in an effective tax rate of 31.2% to 34.944%.",
  },
  {
    q: "What is the concessional corporate tax rate under Section 115BAA?",
    a: "Section 115BAA provides a concessional base tax rate of 22% (effective 25.168% including 10% surcharge and 4% cess) for domestic companies, provided they do not claim specified deductions or incentives.",
  },
  {
    q: "How does the Income Tax Department reconcile GST turnover with ITR figures?",
    a: "The CBDT e-filing system automatically pulls gross taxable turnover from the GST portal (GSTR-1 and GSTR-3B) and flags any mismatch against the revenue declared in Schedule PL of the ITR, issuing automated verification notices under Section 133(6) or 143(1).",
  },
  {
    q: "What are the due dates for business ITR filing for AY 2026-27?",
    a: "For non-audit business taxpayers (sole proprietorships), the due date is 31 August 2026. For businesses requiring a Section 44AB tax audit (companies, firms, and high-turnover proprietorships), the due date is 31 October 2026.",
  },
  {
    q: "How does Merrafilings assist corporate clients with business ITR filings?",
    a: "Merrafilings pairs your enterprise with senior Chartered Accountants who prepare statutory P&L and balance sheets, optimize partner remuneration under Section 40(b), reconcile GST vs. ITR figures, calculate quarterly advance taxes, and file returns with complete DSC validation.",
  },
];

export default function ItrForBusinessIncomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <BusinessItrGuideLayout
      currentSlug="itr-for-business-income"
      title="ITR for Business Income Filing in India Online"
      breadcrumbLabel="ITR for Business Income"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing an <strong className="font-semibold text-slate-950">Income Tax Return for Business Income</strong> is
          a statutory obligation for every commercial enterprise operating in India. Whether you manage a sole proprietorship,
          a registered partnership firm, a Limited Liability Partnership (LLP), or an incorporated private limited enterprise,
          annual tax declaration is compulsory under the Income Tax Act, 1961.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Accurate business ITR filing ensures transparent tax calculation, enables the lawful carry-forward of unabsorbed business
          losses for up to 8 assessment years, satisfies banking underwriting norms for working capital loans, and prevents punitive
          Section 234F penalties. This comprehensive guide outlines the calculation methodology, form selection, advance tax calendar,
          and documentation checklist for business income e-filing.
        </p>
      </section>

      {/* Section 1: Entity Applicability Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. Business Entity Classification &amp; ITR Form Applicability
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Different commercial structures are subject to distinct statutory tax rates and filing forms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          {ENTITY_FORM_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.entity}
                </h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.form}
                </span>
              </div>
              <div className="space-y-1.5 text-xs border-t border-slate-100 pt-3">
                <p><strong className="text-slate-800">Tax Rate:</strong> {item.taxRate}</p>
                <p><strong className="text-slate-800">Audit Trigger:</strong> {item.auditTrigger}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Calculation Methodology */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. How Business Income Tax Calculation Works: Step-by-Step
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Income Tax Department evaluates taxable commercial income through a systematic sequential formula:
        </p>

        <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3.5 mt-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Statutory Computation Formula</span>
            <span className="text-xs text-slate-400">Section 28 to 44DB</span>
          </div>
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-slate-300">1. Gross Business Revenue / Commercial Receipts</p>
            <p className="text-rose-400">Less: Deductible Operating Expenses (Rent, Salaries, Utilities, Raw Materials)</p>
            <p className="text-rose-400">Less: Section 32 Depreciation on Commercial Assets</p>
            <p className="text-emerald-300 font-semibold">= Net Profit Before Tax (PBT)</p>
            <p className="text-slate-300">Add: Disallowed Expenses (Sec 40A(3) cash payments &gt; ₹10k, Sec 43B unpaid statutory dues)</p>
            <p className="text-emerald-400 font-bold pt-2 border-t border-slate-800 text-sm sm:text-base">
              = Net Taxable Income from Business or Profession (PGBP)
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Advance Tax Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Mandatory Quarterly Advance Tax Payment Schedule
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Businesses with estimated annual tax liability exceeding ₹10,000 must remit advance tax in four installments:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-xl mt-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Installment</th>
                <th className="p-3 sm:p-4">Statutory Due Date</th>
                <th className="p-3 sm:p-4 text-emerald-800">Cumulative Tax Due</th>
                <th className="p-3 sm:p-4">Interest Penalty Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {ADVANCE_TAX_SCHEDULE.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-3 sm:p-4 font-bold text-slate-900">{row.installment}</td>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">{row.dueDate}</td>
                  <td className="p-3 sm:p-4 font-semibold text-emerald-900">{row.percentage}</td>
                  <td className="p-3 sm:p-4 text-xs text-slate-600">{row.interestRule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Mandatory Document Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Essential Pre-Filing Documentation Checklist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
          {DOCUMENT_CHECKLIST.map((doc, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{doc.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{doc.desc}</p>
            </div>
          ))}
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
          Common queries regarding business income tax calculation, advance tax schedules, and entity return types answered by CAs.
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
