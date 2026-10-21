import React from "react";
import type { Metadata } from "next";
import Itr5GuideLayout from "@/components/Itr5GuideLayout";
import {
  Calendar,
  AlertCircle,
  CheckCircle2,
  FileText,
  Clock,
  ShieldAlert,
  HelpCircle,
  Scale,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Building2,
  FileCheck,
  Receipt,
  UserCheck,
  Percent,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ITR Due Date - 31st August: What LLPs & Partnership Firms Need to Know | Merrafilings",
  description:
    "Comprehensive guide on the ITR-5 filing due date of 31st August for non-audit LLPs and Partnership Firms in India. Learn eligibility criteria, required documents, penalties for delay, and expert compliance advice.",
};

export default function DueDate31stAugustPage() {
  return (
    <Itr5GuideLayout
      currentSlug="due-date-31st-august"
      title="ITR Due Date - 31st August: LLPs Need to Know"
      breadcrumbLabel="ITR Due Date 31st August"
      metaPublishedDate="Assessment Year 2026-27"
      readingTime="7 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* 1. Executive Summary */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Overview: The 31st August ITR-5 Filing Deadline
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Income Tax Return (ITR) filing cycle in India enforces strict statutory deadlines for diverse categories of taxpayers. For Limited Liability Partnerships (LLPs), general partnership firms, Associations of Persons (AOPs), and Bodies of Individuals (BOIs) not subject to mandatory statutory tax audit, the Central Board of Direct Taxes (CBDT) sets the baseline filing deadline as 31st July, with statutory notifications extending eligible non-audit timelines to <strong>31st August</strong> in specific assessment windows.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          This window provides eligible non-audit business entities critical breathing room to finalize their financial statements, calculate allowable partner salary and interest deductions under Section 40(b), reconcile their tax credits against Form 26AS and the Annual Information Statement (AIS), and complete error-free electronic submissions via Digital Signature Certificates (DSC).
        </p>
      </section>

      {/* 2. What is Form ITR-5? */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          What is ITR-5 and Who Must File It?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          <strong>ITR-5</strong> is the statutory income tax return form structured specifically for pass-through entities and collective business bodies other than individual sole proprietorships and incorporated companies. Under the provisions of the Income Tax Act, 1961, the following entities must file their annual returns using Form ITR-5:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Limited Liability Partnerships (LLPs)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              All LLPs incorporated under the Limited Liability Partnership Act, 2008, irrespective of whether they carried on commercial operations or incurred profits/losses during the fiscal year.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Partnership Firms
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              General partnership firms registered or unregistered under the Indian Partnership Act, 1932, operating commercial trades, professional services, or industrial operations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Associations of Persons (AOPs) &amp; BOIs
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Consortiums, co-operative bodies, joint ventures, and groups of individuals coming together to execute specific revenue-generating projects or manage collective capital.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Investment Funds &amp; Business Trusts
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Alternative Investment Funds (AIFs Category I/II/III), Real Estate Investment Trusts (REITs), Infrastructure Investment Trusts (InvITs), and Artificial Juridical Persons (AJPs).
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-[13px] text-amber-950 leading-relaxed font-normal">
            <strong>Important Exclusion:</strong> Private Limited and Public Limited companies must file <strong>ITR-6</strong>. Charitable trusts, religious institutions, political parties, and educational trusts claiming exemptions under Section 11/12 must file <strong>ITR-7</strong>. These entities cannot use ITR-5 under any circumstances.
          </div>
        </div>
      </section>

      {/* 3. Who Can File by 31st August vs Audit Due Dates */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Who Can File ITR-5 by 31st August? (Audit vs. Non-Audit Criteria)
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The 31st August filing timeline applies exclusively to <strong>non-audit taxpayers</strong>. If an entity is subject to mandatory tax audit under Section 44AB of the Income Tax Act or statutory audit under Rule 24 of the Limited Liability Partnership Rules, different statutory deadlines apply.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto my-4 border border-slate-200 rounded-xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-800">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-950 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Taxpayer Category</th>
                <th className="py-3 px-4">Statutory Threshold / Condition</th>
                <th className="py-3 px-4">Statutory Due Date</th>
                <th className="py-3 px-4">Verification Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Non-Audit Partnership Firms &amp; LLPs
                </td>
                <td className="py-3 px-4 font-normal">
                  Turnover &lt; ₹1 Cr (cash) / &lt; ₹10 Cr (95%+ digital payments) and capital contribution &le; ₹25 Lakhs
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">
                  31st August (or 31st July statutory baseline)
                </td>
                <td className="py-3 px-4 font-normal">
                  DSC / Aadhaar OTP / EVC
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Tax Audit Cases (Section 44AB)
                </td>
                <td className="py-3 px-4 font-normal">
                  Business turnover exceeding ₹1 Cr / ₹10 Cr digital, or professional receipts exceeding ₹50 Lakhs / ₹75 Lakhs
                </td>
                <td className="py-3 px-4 font-semibold text-slate-900">
                  31st October (Tax Audit Report due 30th September)
                </td>
                <td className="py-3 px-4 font-normal">
                  Mandatory Class 3 DSC of Designated Partner / CA
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Transfer Pricing Cases (Section 92E)
                </td>
                <td className="py-3 px-4 font-normal">
                  Entities entering into international or specified domestic transactions with associated enterprises (Form 3CEB)
                </td>
                <td className="py-3 px-4 font-semibold text-slate-900">
                  30th November
                </td>
                <td className="py-3 px-4 font-normal">
                  Mandatory Class 3 DSC
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Belated / Revised Return (Sec 139(4) / 139(5))
                </td>
                <td className="py-3 px-4 font-normal">
                  Returns submitted after the original due date or corrections filed for past inadvertent omissions
                </td>
                <td className="py-3 px-4 font-semibold text-rose-700">
                  31st December of the Assessment Year
                </td>
                <td className="py-3 px-4 font-normal">
                  DSC / EVC (Subject to Section 234F Late Fee)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Documents Required Before Filing */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Exhaustive Checklist of Documents Required Before Filing ITR-5
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          To ensure that your partnership or LLP tax filing is completely notice-safe, keep the following documentation compiled and cross-verified prior to preparing the return:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-800 font-normal">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Permanent Account Number (PAN):</strong> Valid PAN card issued in the name of the LLP or partnership firm.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Partner Identity &amp; DPIN Details:</strong> PAN and Aadhaar details of all active and sleeping partners, along with Designated Partner Identification Numbers (DPIN/DIN) for LLPs.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Partnership Deed / LLP Agreement:</strong> Stamped and executed agreement specifying profit-sharing ratios, capital contribution limits, and authorization for partner remuneration under Section 40(b).
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Financial Statements:</strong> Audited or CA-reviewed Balance Sheet, Trading Account, and Profit &amp; Loss Statement prepared up to 31st March.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Form 26AS, AIS &amp; TIS:</strong> Comprehensive Tax Credit Statement, Annual Information Statement, and Taxpayer Information Summary downloaded from the e-filing portal to reconcile TDS, TCS, high-value cash transactions, and interest credits.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Advance Tax &amp; Self-Assessment Challans:</strong> BSR code, challan tender date, and challan serial number for advance tax installments paid under Challan ITNS 280.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Section 40(b) Partner Remuneration &amp; Interest Schedule:</strong> Computations demonstrating that interest paid on partner capital does not exceed 12% per annum and salary deductions comply with book profit limits.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>
              <strong>Bank Account Pre-validation:</strong> Full details of all current accounts, cash-credit accounts, and overdraft facilities maintained during the year, with at least one designated account pre-validated for refund processing.
            </span>
          </li>
        </ul>
      </section>

      {/* 5. Benefits of Filing Before Due Date */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Why You Must File ITR-5 on or Before 31st August
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Submitting your ITR-5 within the prescribed statutory due date delivers indispensable legal, commercial, and financial advantages to your business:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              Immunity from Section 234F Late Penalties
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Filing after the deadline triggers an automatic mandatory fee under Section 234F of up to ₹5,000 (or ₹1,000 for entities with total income up to ₹5 Lakhs).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Carry-Forward of Business Losses (Section 80)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Under Section 80 read with Section 72 and 74, unabsorbed business losses and capital losses cannot be carried forward for set-off in future years if the return is filed belatedly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1">
              <Percent className="w-4 h-4 text-emerald-600" />
              Prevention of Penal Interest (Sec 234A/B/C)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Filing on time halts the compounding 1% per month interest charged under Section 234A on any outstanding self-assessment tax liability.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-emerald-600" />
              Institutional Banking &amp; Tender Approvals
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Banks, NBFCs, and government procurement portals strictly require the last 3 years of timely filed ITR-V acknowledgments before approving credit lines, loans, or issuing tenders.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Common Mistakes to Avoid */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Common Costly Mistakes to Avoid in ITR-5
        </h2>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-red-100 bg-red-50/40">
            <h3 className="text-sm font-bold text-red-950 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              1. Non-Compliance with Section 40(b) Remuneration Limits
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Claiming partner salary or bonus that exceeds statutory book profit caps or is not authorized by the terms of the registered partnership deed will be added back to taxable income, attracting 30% firm tax plus surcharge.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-red-100 bg-red-50/40">
            <h3 className="text-sm font-bold text-red-950 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              2. Revenue Mismatches with Form 26AS, AIS, and GSTR-9
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Any variance between turnover declared in ITR-5 and turnover reported across monthly GSTR-3B filings or TDS deductions in 26AS triggers automated Section 143(1)(a) computational mismatch notices.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-red-100 bg-red-50/40">
            <h3 className="text-sm font-bold text-red-950 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              3. Omission of Foreign Asset Disclosures (Schedule FA)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              If an LLP or partnership holds foreign securities, depository accounts, or beneficial interests overseas, failure to disclose them in Schedule FA attracts severe scrutiny and penalties under the Black Money Act.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-red-100 bg-red-50/40">
            <h3 className="text-sm font-bold text-red-950 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              4. Forgetting to E-Verify the Return Within 30 Days
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Submitting the ITR-5 JSON file online is incomplete without digital verification. For LLPs, verification via the Class 3 Digital Signature Certificate (DSC) of a Designated Partner is mandatory. If not verified within 30 days, the return is declared invalid.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Summary & Merrafilings Support */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          How Merrafilings Simplifies Your ITR-5 Filing
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing ITR-5 for a partnership firm or LLP demands meticulous accounting calibration. At Merrafilings, our dedicated Corporate Tax Advisory desk pairs your firm with seasoned Chartered Accountants who finalize your Part A Balance Sheet, compute Section 40(b) deductions, optimize Alternate Minimum Tax (AMT Section 115JC), and ensure seamless submission with zero notice exposure.
        </p>
      </section>
    </Itr5GuideLayout>
  );
}
