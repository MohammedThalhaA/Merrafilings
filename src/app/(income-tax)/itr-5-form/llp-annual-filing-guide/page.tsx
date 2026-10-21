import React from "react";
import type { Metadata } from "next";
import Itr5GuideLayout from "@/components/Itr5GuideLayout";
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
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LLP Annual Filing Guide: Form 11, Form 8 & ITR-5 Master Compliance | Merrafilings",
  description:
    "Complete statutory handbook on LLP Annual Filing in India. Understand MCA Form 11 (Annual Return), Form 8 (Statement of Accounts & Solvency), DIR-3 KYC, and ITR-5 direct tax compliance with timelines and penalties.",
};

export default function LlpAnnualFilingGuidePage() {
  return (
    <Itr5GuideLayout
      currentSlug="llp-annual-filing-guide"
      title="LLP Annual Filing Guide: Form 11, Form 8 & ITR-5 Complete Compliance"
      breadcrumbLabel="LLP Annual Filing Guide"
      metaPublishedDate="Assessment Year 2026-27"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Understanding the Dual-Pillar Annual Filing Framework for LLPs
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          A Limited Liability Partnership (LLP) registered under the Limited Liability Partnership Act, 2008, operates as a distinct legal corporate entity separate from its partners. While an LLP enjoys operational flexibility and limited liability protection, the Ministry of Corporate Affairs (MCA) and the Income Tax Department enforce an uncompromising dual-pillar annual compliance regime.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Every LLP—even those with <strong>zero commercial activity, no revenue, or operating at a net loss</strong>—must compulsorily complete annual filings with both the Registrar of Companies (ROC) and the Central Board of Direct Taxes (CBDT). Defaulting on these requirements triggers compounding daily late fees, partner disqualification, and potential civil adjudication.
        </p>
      </section>

      {/* 2. Key Components of LLP Annual Filing */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Key Components of LLP Annual Compliance
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          LLP annual compliance consists of four indispensable filings spanning corporate law, accounting solvency, partner governance, and direct taxation:
        </p>

        <div className="space-y-4 my-4">
          {/* Component 1: Form 11 */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <h3 className="font-bold text-slate-950 text-base flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                1. Form 11: Annual Return of the LLP
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                Due: 30th May (within 60 days of FY close)
              </span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-800 font-normal leading-relaxed mb-2">
              Form 11 captures the comprehensive structural profile of the LLP as of 31st March. It documents the total number of designated and ordinary partners, total contribution obligations received from partners, details of body corporate partners, summary of penalties imposed on the LLP, and confirmation that all partner changes during the fiscal year were duly reported via Form 4.
            </p>
            <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <strong>Statutory Certification:</strong> If the turnover of the LLP exceeds ₹5 Crores or the capital contribution exceeds ₹50 Lakhs, Form 11 must be digitally certified by a practicing Company Secretary (PCS).
            </div>
          </div>

          {/* Component 2: Form 8 */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <h3 className="font-bold text-slate-950 text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                2. Form 8: Statement of Account &amp; Solvency
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
                Due: 30th October (within 30 days from 6 months of FY end)
              </span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-800 font-normal leading-relaxed mb-2">
              Form 8 is the primary financial disclosure document filed with the ROC. It comprises two parts: Part A (Statement of Solvency signed by designated partners declaring whether the LLP is capable of paying its debts as they fall due) and Part B (Statement of Accounts, including Balance Sheet, Profit &amp; Loss Account, and disclosures of contingent liabilities).
            </p>
            <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <strong>Mandatory Digital Signatures:</strong> Must be digitally signed by at least two Designated Partners with Class 3 DSC and verified by a practicing CA, CS, or Cost Accountant.
            </div>
          </div>

          {/* Component 3: ITR-5 */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <h3 className="font-bold text-slate-950 text-base flex items-center gap-2">
                <Scale className="w-5 h-5 text-purple-600" />
                3. Form ITR-5: Annual Income Tax Return
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">
                Due: 31st July / 31st August (Non-Audit) or 31st October (Tax Audit)
              </span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-800 font-normal leading-relaxed">
              Every LLP must file Form ITR-5 with the Income Tax Department electronically using the Class 3 Digital Signature Certificate of its designated partner. ITR-5 computes taxable business profit, incorporates partner remuneration under Section 40(b), evaluates Alternate Minimum Tax (AMT Section 115JC), and reports taxes paid through TDS, TCS, and Advance Tax.
            </p>
          </div>

          {/* Component 4: DIR-3 KYC */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <h3 className="font-bold text-slate-950 text-base flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                4. Form DIR-3 KYC / DIR-3 KYC-Web: Partner Annual KYC
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
                Due: 30th September Annually
              </span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-800 font-normal leading-relaxed">
              Every individual partner holding an active Director Identification Number (DIN) or Designated Partner Identification Number (DPIN) must submit their annual KYC. Failure to file by 30th September leads to the DPIN status being marked &ldquo;Deactivated due to Non-filing of DIR-3 KYC&rdquo; and requires a government fee of ₹5,000 per DIN to restore.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Statutory Audit Thresholds */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Statutory Audit Rules: When is an LLP Legally Required to be Audited?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Unlike private limited companies where an annual statutory audit is compulsory regardless of revenue, the LLP framework offers an exemption for smaller entities. However, an LLP must have its accounts audited by a qualified Chartered Accountant in any of the following statutory circumstances:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/30">
            <h3 className="font-bold text-slate-950 text-sm mb-1.5 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-700" />
              1. Rule 24 of LLP Rules, 2009 (MCA Audit)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              An LLP is required to get its accounts audited if its <strong>annual turnover exceeds ₹40 Lakhs</strong> in any financial year OR if its <strong>total capital contribution exceeds ₹25 Lakhs</strong>. If either trigger is breached, CA audit certification on Form 8 is legally mandatory.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200/80 bg-blue-50/30">
            <h3 className="font-bold text-slate-950 text-sm mb-1.5 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-700" />
              2. Section 44AB of Income Tax Act (Tax Audit)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              If an LLP engages in commercial trade or business with gross receipts exceeding <strong>₹1 Crore</strong> (or <strong>₹10 Crores</strong> where digital transactions constitute 95% or more of all receipts and payments), it must undergo an Income Tax Audit and upload Form 3CB-3CD.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Complete Annual Compliance Calendar */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Master LLP Compliance Timeline &amp; Deadlines
        </h2>
        <div className="overflow-x-auto my-3 border border-slate-200 rounded-xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-800">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-950 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Compliance Item</th>
                <th className="py-3 px-4">Governing Authority</th>
                <th className="py-3 px-4">Statutory Deadline</th>
                <th className="py-3 px-4">Consequences of Late Filing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Form 11 (Annual Return)
                </td>
                <td className="py-3 px-4 font-normal">MCA / ROC</td>
                <td className="py-3 px-4 font-bold text-emerald-700">30th May</td>
                <td className="py-3 px-4 font-normal">
                  ₹100/day daily additional fees; potential ROC notice
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  ITR-5 (Non-Audit Return)
                </td>
                <td className="py-3 px-4 font-normal">Income Tax Department</td>
                <td className="py-3 px-4 font-bold text-emerald-700">31st July / 31st August</td>
                <td className="py-3 px-4 font-normal">
                  ₹5,000 late fee under Sec 234F + loss of carry-forward losses
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  DIR-3 KYC / Web KYC
                </td>
                <td className="py-3 px-4 font-normal">MCA Portal</td>
                <td className="py-3 px-4 font-bold text-slate-900">30th September</td>
                <td className="py-3 px-4 font-normal">
                  DPIN deactivation + ₹5,000 restoration penalty per partner
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Form 8 (Statement of Accounts)
                </td>
                <td className="py-3 px-4 font-normal">MCA / ROC</td>
                <td className="py-3 px-4 font-bold text-slate-900">30th October</td>
                <td className="py-3 px-4 font-normal">
                  ₹100/day daily additional fee; partners liable to adjudication
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  ITR-5 (Tax Audit Cases)
                </td>
                <td className="py-3 px-4 font-normal">Income Tax Department</td>
                <td className="py-3 px-4 font-bold text-slate-900">31st October</td>
                <td className="py-3 px-4 font-normal">
                  Sec 271B penalty (0.5% turnover up to ₹1.5L) + Sec 234F fee
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. 5-Step Process for Seamless LLP Compliance */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5-Step Strategy for Hassle-Free Annual Filing
        </h2>
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 text-sm">
                Year-Round Systematic Bookkeeping &amp; Bank Reconciliation
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Maintain day-to-day accounts and periodically reconcile current accounts with vendor invoices, customer billing, and TDS credit statements.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 text-sm">
                Ensure Class 3 Digital Signature Certificate (DSC) Validity
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Check that the Class 3 DSC tokens of all Designated Partners are active and registered on the MCA V3 portal and the Income Tax e-filing portal.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 text-sm">
                Compile Partner Remuneration &amp; Section 40(b) Deductions
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Ensure that interest on partner capital does not exceed 12% per annum and partner salaries strictly match the provisions of the registered LLP agreement.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 text-sm">
                File Form 11 Prior to 30th May to Prevent Additional ROC Levies
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Draft Form 11 early in May to ensure all partner entries match MCA records, avoiding unnecessary delay penalties.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              5
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-950 text-sm">
                Finalize Balance Sheet &amp; Submit Form 8 with CA Certification
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                Finalize financial statements in September, perform CA audit if turnover or capital criteria are crossed, and lodge Form 8 well before 30th October.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Summary Callout */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          How Merrafilings Manages End-to-End LLP Compliance
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Merrafilings operates an all-inclusive corporate retainership for LLPs across India. From day-to-day bookkeeping and Section 40(b) tax optimization to MCA Form 11, Form 8, and ITR-5 e-filing with DSC verification, our Chartered Accountants and Company Secretaries protect your firm from compliance penalties.
        </p>
      </section>
    </Itr5GuideLayout>
  );
}
