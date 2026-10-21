import React from "react";
import type { Metadata } from "next";
import Itr6GuideLayout from "@/components/Itr6GuideLayout";
import {
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Building2,
  Scale,
  Award,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Receipt,
  Coins,
  Percent,
  FileCheck,
  KeyRound,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Complete ITR-6 Return Filing Online Fee Guide | Merrafilings",
  description:
    "Comprehensive guide to ITR-6 return filing online fees, corporate pricing tiers, mandatory documents, Section 234F late penalties, and step-by-step filing procedures for companies in India.",
};

export default function Itr6ReturnFilingOnlineFeePage() {
  return (
    <Itr6GuideLayout
      currentSlug="itr-6-return-filing-online-fee"
      title="Complete ITR-6 Return Filing Online Fee Guide"
      breadcrumbLabel="ITR-6 Return Filing Online Fee Guide"
      metaPublishedDate="Assessment Year 2026-27"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* 1. Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Understanding the Corporate ITR-6 Return Filing Online Fee Structure
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          For companies registered under the Companies Act, 2013 or 1956, filing the annual corporate tax return using <strong>Form ITR-6</strong> is a stringent statutory obligation. Understanding the complete fee structure associated with ITR-6 filing is essential for financial planning and maintaining flawless corporate governance.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The total cost of corporate tax filing comprises transparent professional chartered accountant charges, statutory government late filing fees under Section 234F where applicable, digital certificate procurement, and statutory audit verification. At Merrafilings, we provide all-inclusive, fixed pricing models with zero hidden levies, ensuring complete corporate compliance.
        </p>
      </section>

      {/* 2. How Much Does ITR-6 Filing Cost Online? */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          How Much Does ITR-6 Filing Cost Online in India?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Professional ITR-6 filing fees depend on corporate entity size, annual turnover, volume of transactions, balance sheet complexity, and statutory audit applicability under Section 44AB of the Income Tax Act:
        </p>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto my-4 border border-slate-200 rounded-xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-800">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-950 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Compliance Tier</th>
                <th className="py-3 px-4">Entity Profile &amp; Complexity</th>
                <th className="py-3 px-4">Average Professional Fee</th>
                <th className="py-3 px-4">Included Deliverables</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Dormant / Nil Return
                </td>
                <td className="py-3 px-4 font-normal">
                  Companies with zero commercial turnover, no operating revenue, and minimal bank movements
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">
                  ₹2,500 – ₹4,999
                </td>
                <td className="py-3 px-4 font-normal">
                  Part A-BS balance sheet filing, bank reconciliation, nil ITR-6 filing &amp; DSC verification
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Non-Audit Corporate Return
                </td>
                <td className="py-3 px-4 font-normal">
                  Small Pvt Ltd &amp; OPCs with turnover below Section 44AB limits (&lt; ₹1 Cr / ₹10 Cr digital)
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">
                  ₹5,899 – ₹9,899
                </td>
                <td className="py-3 px-4 font-normal">
                  Schedule III mapping, MAT Section 115JB evaluation, 26AS/AIS reconciliation &amp; ITR-6 lodgment
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  CA-Assisted Tax Audit Suite
                </td>
                <td className="py-3 px-4 font-normal">
                  Turnover exceeding ₹1 Cr / ₹10 Cr, requiring mandatory tax audit and Form 3CA-3CD
                </td>
                <td className="py-3 px-4 font-bold text-slate-900">
                  ₹15,000 – ₹25,000
                </td>
                <td className="py-3 px-4 font-normal">
                  Statutory CA tax audit, Form 3CA-3CD filing, depreciation calibration, MAT computation, ITR-6
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Transfer Pricing &amp; MNC Retainer
                </td>
                <td className="py-3 px-4 font-normal">
                  Companies with cross-border associated enterprise transactions requiring Form 3CEB
                </td>
                <td className="py-3 px-4 font-bold text-slate-900">
                  Custom Quote (₹25,000+)
                </td>
                <td className="py-3 px-4 font-normal">
                  Transfer pricing audit (3CEB), Schedule FA overseas disclosure, master file reporting
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
          <strong>Government Statutory Fees Note:</strong> There is no government fee for filing ITR-6 on or before the due date (31st October / 30th November). However, belated filings attract mandatory statutory late fees under Section 234F collected directly by the Income Tax Department: ₹1,000 for companies with total income up to ₹5 Lakhs, and ₹5,000 for income exceeding ₹5 Lakhs.
        </div>
      </section>

      {/* 3. Essential Documents Checklist */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Exhaustive Document Checklist for ITR-6 Filing
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Although ITR-6 is an electronic, annexure-less return, comprehensive documentation must be compiled to extract accurate figures for over 35 statutory schedules:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer space-y-2">
            <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm flex items-center gap-2.5 transition-colors">
              <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shrink-0">
                <FileCheck className="w-4 h-4" />
              </span>
              Corporate Financial Statements
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 font-normal pl-10.5">
              <li>• Audited Balance Sheet (Part A-BS) conforming to Schedule III</li>
              <li>• Profit &amp; Loss Statement (Part A-P&amp;L)</li>
              <li>• Cash Flow Statement (where applicable under Companies Act)</li>
              <li>• Auditor&rsquo;s Report and Notes to Accounts</li>
              <li>• Form 3CA-3CD Tax Audit Report (if Section 44AB applies)</li>
            </ul>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer space-y-2">
            <h3 className="font-bold text-slate-950 group-hover:text-blue-700 text-sm flex items-center gap-2.5 transition-colors">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </span>
              Tax Statements &amp; Secretarial Records
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 font-normal pl-10.5">
              <li>• Form 26AS, AIS (Annual Information Statement) &amp; TIS</li>
              <li>• Advance Tax &amp; Self-Assessment Challan ITNS 280 receipts</li>
              <li>• Class 3 Digital Signature Certificate (DSC) of Director</li>
              <li>• DIN and PAN details of all active Directors</li>
              <li>• GSTR-9 / GSTR-9C Annual Turnover cross-reconciliation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Which Companies Must File ITR-6? */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Which Companies Are Legally Required to File Form ITR-6?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Under Section 139(1) of the Income Tax Act, 1961, <strong>every incorporated company in India is legally mandated to file Form ITR-6</strong>, regardless of revenue or operational status:
        </p>

        <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-800 font-normal">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Private Limited Companies:</strong> All private corporations registered under the Companies Act, irrespective of profit, loss, or zero commercial transactions.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Public Limited Companies:</strong> Both listed and unlisted public companies must file ITR-6 with audited accounts and Schedule MAT.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>One Person Companies (OPC):</strong> Incorporated single-owner entities with corporate status must submit Form ITR-6.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Foreign Companies with Indian PE:</strong> Foreign corporations with branch offices, project offices, or permanent establishments in India.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
            <span>
              <strong>Strict Exclusion:</strong> Companies claiming charitable or religious exemption under Section 11 must file <strong>ITR-7</strong>, not ITR-6.
            </span>
          </li>
        </ul>
      </section>

      {/* 5. Penalties for Late Filing */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Penalties &amp; Commercial Risks of Late ITR-6 Filing
        </h2>
        <div className="space-y-3">
          <div className="group p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-bold text-rose-950 group-hover:text-rose-800 mb-1 flex items-center gap-2 transition-colors">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              Section 234F Statutory Late Fee
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-8">
              Mandatory late fee of ₹5,000 is automatically levied upon submission after the due date (₹1,000 if total taxable income is up to ₹5 Lakhs).
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-bold text-rose-950 group-hover:text-rose-800 mb-1 flex items-center gap-2 transition-colors">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              Forfeiture of Carry-Forward Losses (Section 80)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-8">
              Under Section 80 read with Section 72, if ITR-6 is filed past the deadline, current-year business losses and capital losses cannot be carried forward to offset future corporate profits.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-bold text-rose-950 group-hover:text-rose-800 mb-1 flex items-center gap-2 transition-colors">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              Compounding Interest under Sections 234A, 234B &amp; 234C
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-8">
              Penal interest accumulates at 1% per month on outstanding tax liabilities, significantly increasing overall compliance costs.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Step-by-Step Filing Procedure */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Step-by-Step Corporate ITR-6 Online Filing Process
        </h2>
        <div className="space-y-3">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              1
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Financial Finalization &amp; Tax Audit Upload
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Finalize Schedule III financials, draft the tax computation, and upload Form 3CA-3CD before 30th September if Section 44AB applies.
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              2
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Tax Regime Selection (Sec 115BAA vs. Normal)
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Evaluate whether adopting the Section 115BAA concessional 22% regime (via Form 10-IC) or claiming existing MAT credits under normal rates delivers greater tax savings.
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              3
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                ITR-6 JSON Generation &amp; Error Validation
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Populate all 35+ schedules in the CBDT offline utility, validate JSON schemas, and ensure zero schema mismatch errors.
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              4
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Mandatory Class 3 DSC Electronic Verification
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Upload the JSON return on the Income Tax portal and sign electronically using the registered Class 3 DSC of the Managing Director or Director. Download the ITR-V acknowledgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Merrafilings Summary */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          How Merrafilings Delivers 100% Notice-Proof Corporate Tax Filing
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Merrafilings pairs your company with experienced Chartered Accountants specializing in corporate direct taxation. From Schedule III financial mapping and Section 115BAA optimization to tax audit execution and DSC verification, we handle your end-to-end ITR-6 compliance with total accuracy.
        </p>
      </section>
    </Itr6GuideLayout>
  );
}
