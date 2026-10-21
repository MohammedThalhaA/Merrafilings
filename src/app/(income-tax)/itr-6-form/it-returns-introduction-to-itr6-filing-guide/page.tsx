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
  FileCheck,
  Laptop,
  Check,
  KeyRound,
  Calculator,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Introduction to ITR-6 Return Filing: Company Tax Guide | Merrafilings",
  description:
    "Complete statutory handbook on ITR-6 return filing for companies in India. Learn the key schedules of Form ITR-6, Part A & B structures, step-by-step e-filing procedures, and critical audit considerations.",
};

export default function IntroductionToItr6FilingGuidePage() {
  return (
    <Itr6GuideLayout
      currentSlug="it-returns-introduction-to-itr6-filing-guide"
      title="Introduction to ITR6 Return Filing"
      breadcrumbLabel="Introduction to ITR-6 Return Filing"
      metaPublishedDate="Assessment Year 2026-27"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* 1. Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          What is Form ITR-6 Return Filing?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          In India&rsquo;s direct tax regime, <strong>Form ITR-6</strong> is the specialized corporate tax return form prescribed by the Central Board of Direct Taxes (CBDT) exclusively for companies incorporated under the Companies Act, 2013 or earlier corporate legislation. Any company that does not claim exemption under Section 11 (which is reserved for charitable and religious trusts filing ITR-7) must mandatorily file its annual returns using ITR-6.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing ITR-6 is compulsory for all domestic entities—including Private Limited Companies, Public Limited Companies, One Person Companies (OPC), and foreign corporations with Indian permanent establishments—regardless of whether they recorded profits, incurred operating losses, or remained dormant throughout the financial year.
        </p>
      </section>

      {/* 2. Key Components and Structure of Form ITR-6 */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Key Components &amp; Architecture of Form ITR-6
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Form ITR-6 is one of the most comprehensive and structurally intricate tax returns in India, comprising over 35 distinct schedules divided into core sections:
        </p>

        <div className="space-y-4 my-4">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm flex items-center gap-2.5 mb-1.5 transition-colors">
              <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shrink-0">
                <Building2 className="w-4 h-4" />
              </span>
              Part A: General Information &amp; Schedule III Financials
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-10.5">
              Captures foundational corporate data including Corporate Identification Number (CIN), Company PAN, date of incorporation, nature of business codes, shareholding pattern, and residential status. It contains exhaustive financial statement tables: Part A-BS (Balance Sheet as per Schedule III), Part A-P&amp;L (Manufacturing, Trading, and Profit &amp; Loss account), and Part A-OI (Other Information required in tax audit cases).
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="font-bold text-slate-950 group-hover:text-blue-700 text-sm flex items-center gap-2.5 mb-1.5 transition-colors">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shrink-0">
                <Calculator className="w-4 h-4" />
              </span>
              Part B: Computation of Total Income &amp; Corporate Tax Liability
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-10.5">
              Consolidates taxable income across all heads, computes normal corporate tax liability (22% under Section 115BAA or 25%/30% under the normal regime), calculates Minimum Alternate Tax (MAT Section 115JB at 15%), credits advance tax, TDS, and TCS, and computes net tax payable or refundable.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/15 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="font-bold text-slate-950 group-hover:text-purple-700 text-sm flex items-center gap-2.5 mb-1.5 transition-colors">
              <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-200 shrink-0">
                <Layers className="w-4 h-4" />
              </span>
              Critical Supporting Schedules
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-normal mt-3 pl-10.5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong>Schedule BP:</strong> Computation of Business Profits</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong>Schedule CG:</strong> Short-term &amp; Long-term Capital Gains</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong>Schedule MAT &amp; MATC:</strong> Book Profit Tax &amp; Credit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong>Schedule CFL:</strong> Carry Forward of Prior Losses</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong>Schedule FA:</strong> Foreign Assets &amp; Offshore Accounts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong>Schedule GST:</strong> Cross-reconciliation of GSTR Turnover</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step Filing Guide */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Step-by-Step Guide to Filing Form ITR-6 Online
        </h2>
        <div className="space-y-3.5">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              1
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Preparation &amp; Accounting Assembly
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Compile your audited financial statements, tax audit report (Form 3CA-3CD), bank statements, and tax credit challans. Ensure that total revenue declared matches GSTR-1 and GSTR-3B annual filings.
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              2
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Accessing the Income Tax E-Filing Portal
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Log into the official e-filing portal (eportal.incometax.gov.in) using the company&rsquo;s PAN as User ID. Download the latest CBDT offline JSON utility or use certified CA filing software.
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              3
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Form Population &amp; Statutory Schedule Calibration
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Input all Balance Sheet and P&amp;L figures. Populate Schedule BP with non-deductible disallowances (Section 40A(3), Section 43B statutory dues), calibrate depreciation under Section 32, and compute MAT.
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
              4
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                Mandatory Class 3 Digital Signature Certificate (DSC) Verification
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Companies cannot use Aadhaar OTP or bank EVC to verify returns. Under direct tax rules, ITR-6 must be verified exclusively using the registered Class 3 DSC of the Managing Director or authorized Director.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Crucial Filing Deadlines & Audit Rules */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Important Deadlines &amp; Tax Audit Considerations
        </h2>
        <div className="overflow-x-auto my-3 border border-slate-200 rounded-xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-800">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-950 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Compliance Event</th>
                <th className="py-3 px-4">Statutory Due Date</th>
                <th className="py-3 px-4">Governing Section</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Tax Audit Report (Form 3CA-3CD)
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">30th September</td>
                <td className="py-3 px-4 font-normal">Section 44AB (1 month before ITR due date)</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Standard Corporate ITR-6 Filing
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">31st October</td>
                <td className="py-3 px-4 font-normal">Section 139(1) for companies subject to audit</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Transfer Pricing Return (Form 3CEB)
                </td>
                <td className="py-3 px-4 font-bold text-slate-900">30th November</td>
                <td className="py-3 px-4 font-normal">Section 92E for international/specified domestic transactions</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-bold text-slate-950">
                  Belated / Revised Return
                </td>
                <td className="py-3 px-4 font-bold text-rose-700">31st December</td>
                <td className="py-3 px-4 font-normal">Section 139(4) / 139(5) (Subject to Sec 234F fees)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Common Mistakes to Avoid */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Common Costly Pitfalls to Avoid in Corporate Tax Filing
        </h2>
        <div className="space-y-3">
          <div className="group p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-bold text-rose-950 group-hover:text-rose-800 mb-1 flex items-center gap-2 transition-colors">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              1. Failure to File Form 10-IC for Section 115BAA
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-8">
              Companies wishing to adopt the concessional 22% corporate tax rate under Section 115BAA must submit Form 10-IC electronically before or alongside the ITR-6 due date. Missing this form subjects the company to standard 25% or 30% tax rates.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-bold text-rose-950 group-hover:text-rose-800 mb-1 flex items-center gap-2 transition-colors">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              2. Discrepancies between 26AS, AIS, and Books of Account
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-8">
              Revenue mismatches between audited turnover and Form 26AS / AIS TDS records trigger automated Section 143(1)(a) tax notices. Thorough pre-filing reconciliation is essential.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-bold text-rose-950 group-hover:text-rose-800 mb-1 flex items-center gap-2 transition-colors">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              3. Omission of Non-Operating Income
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-8">
              Failing to report fixed deposit interest, mutual fund capital gains, forex gains, or scrap sales in Schedule OS/CG exposes the company to underreporting penalties under Section 270A.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Professional Assistance Callout */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          How Merrafilings Simplifies Corporate ITR-6 Compliance
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing ITR-6 requires rigorous accounting expertise and deep knowledge of both the Companies Act and the Income Tax Act. At Merrafilings, our dedicated Corporate Tax Advisory desk pairs your company with experienced Chartered Accountants who manage Schedule III financial finalization, MAT credit calculations, Form 3CA-3CD audits, and DSC-based submissions—ensuring zero notices and maximum tax efficiency.
        </p>
      </section>
    </Itr6GuideLayout>
  );
}
