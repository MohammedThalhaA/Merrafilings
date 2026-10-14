"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstAnnualReturnGuideLayout from "@/components/GstAnnualReturnGuideLayout";
import {
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Calculator,
  Clock,
  ShieldCheck,
  FileCheck2,
  Users,
  Layers,
  Scale,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Who is exempt from filing Form GSTR-9?",
    a: "Under Section 44 of the CGST Act and relevant notifications, taxpayers with aggregate annual turnover up to ₹2 Crore are exempt from filing GSTR-9. Furthermore, entities enrolled under the Composition Scheme (who file GSTR-4), Casual Taxable Persons, Non-Resident Taxable Persons, Input Service Distributors (ISD), and persons required to deduct/collect tax at source under Section 51/52 are completely exempt.",
  },
  {
    q: "Can I make amendments to outward supplies reported in GSTR-1 through GSTR-9?",
    a: "Yes. While you cannot issue new tax invoices directly in GSTR-9, any omitted outward supplies, upward revisions in tax liabilities, or corrections declared in subsequent returns (up to 30th November) can be reported in Part V (Tables 10 and 11) of GSTR-9. Any additional tax liability can be discharged via Form DRC-03.",
  },
  {
    q: "What is Table 8D in Form GSTR-9 and why is it critical?",
    a: "Table 8D computes the mathematical difference between Input Tax Credit auto-populated from GSTR-2B (Table 8A) and eligible ITC availed in GSTR-3B (Table 8B + 8C). A significant negative value in Table 8D indicates excess ITC availing, which triggers automated departmental scrutiny notices unless supported by valid reconciliation exhibits.",
  },
  {
    q: "What is the penalty for not filing GSTR-9 within the statutory due date?",
    a: "Under Section 47(2) of the CGST Act, failure to file GSTR-9 by the due date attracts a daily late fee of ₹50 per day (for turnover up to ₹5 Cr) or ₹100 per day (for turnover between ₹5 Cr and ₹20 Cr), capped at 0.04% to 0.05% of turnover in the State/UT. Additionally, prolonged non-filing invites notices under Section 46 and Section 73.",
  },
  {
    q: "Does filing GSTR-9 replace the need for statutory Income Tax audit reconciliation?",
    a: "No. GSTR-9 is strictly an indirect tax reconciliation under the CGST Act. However, figures reported in GSTR-9 (especially aggregate turnover and tax payments) are cross-verified by Income Tax authorities against Form 26AS, AIS, and Form 3CD (Tax Audit Report under the Income Tax Act).",
  },
];

export default function AnnualReturnGstr9FilingGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAnnualReturnGuideLayout
      currentSlug="annual-return-gstr9-filing-guide"
      title="Annual Return (GSTR-9) Filing: Comprehensive Guide"
      breadcrumbLabel="Annual Return Comprehensive Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Tax Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Filing the Annual Return (<strong className="font-semibold text-slate-950">Form GSTR-9</strong>) is an indispensable statutory obligation for registered businesses operating under India&apos;s Goods and Services Tax (GST) regime. Serving as the definitive annual consolidation of monthly tax returns, GSTR-9 enables corporate entities and tax authorities to establish an authoritative financial benchmark for the entire fiscal year.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            This comprehensive guide provides an exhaustive analysis of GSTR-9 applicability, mandatory thresholds, structural component breakdowns, step-by-step portal filing protocols, and proven strategies to reconcile Input Tax Credit (ITC) without triggering departmental inquiries.
          </p>
        </section>

        {/* Section 1: What is GSTR-9? */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is GSTR-9? Statutory Purpose</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Governed by <strong className="font-semibold text-slate-950">Section 44 of the CGST Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 80 of the CGST Rules</strong>, Form GSTR-9 is an annual return that consolidates all monthly or quarterly filings (GSTR-1 outward supplies and GSTR-3B tax returns). It acts as an overarching fiscal summary reflecting:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Annual Outward Taxable Supplies:</strong>
              Total B2B, B2C, export, SEZ, and zero-rated turnover generated during the financial year.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Input Tax Credit (ITC) Reconciliations:</strong>
              Credit availed, reversed under statutory rules (Rules 37, 42, 43), and compared against GSTR-2B.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Actual Tax Liability Discharged:</strong>
              Taxes discharged in cash through the electronic cash ledger versus utilization of electronic credit ledgers.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Subsequent Period Amendments:</strong>
              Prior FY sales adjustments or credit declarations made in returns filed up to 30th November.
            </div>
          </div>
        </section>

        {/* Section 2: Who Needs to File GSTR-9? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Who Needs to File GSTR-9? Applicability &amp; Exemptions</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Applicability of GSTR-9 is determined by statutory turnover thresholds and registration categories:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
              <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Taxpayer Category / Threshold</th>
                  <th className="py-3 px-4">Form GSTR-9 Obligation</th>
                  <th className="py-3 px-4">Governing Provision / Relaxations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Turnover up to ₹2 Crore</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Filing is Optional / Waived</td>
                  <td className="py-3 px-4 text-slate-700">Deemed to be filed if not submitted; no late fees</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Turnover &gt; ₹2 Crore to ₹5 Crore</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">Form GSTR-9 Mandatory</td>
                  <td className="py-3 px-4 text-slate-700">Consolidated annual return without reconciliation statement</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Turnover Exceeding ₹5 Crore</td>
                  <td className="py-3 px-4 text-indigo-900 font-semibold">GSTR-9 + GSTR-9C Mandatory</td>
                  <td className="py-3 px-4 text-slate-700">Must file GSTR-9 and self-certified reconciliation GSTR-9C</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Composition Dealers</td>
                  <td className="py-3 px-4 text-slate-600">Exempt from GSTR-9</td>
                  <td className="py-3 px-4 text-slate-700">Must file simplified annual return in Form GSTR-4</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Non-Residents, ISD, Casual Persons</td>
                  <td className="py-3 px-4 text-slate-600">Completely Exempt</td>
                  <td className="py-3 px-4 text-slate-700">Statutorily excluded under Section 44(1) proviso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Key Components of GSTR-9 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Detailed 6-Part Anatomy of Form GSTR-9</span>
          </h2>
          <div className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Part I (Tables 1 to 3) — Basic Profile:</strong>
              Financial Year, GSTIN, Legal Name, and Trade Name.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Part II (Tables 4 &amp; 5) — Outward &amp; Inward Supplies:</strong>
              Table 4 captures supplies on which tax is payable (B2B, B2C, advances, reverse charge). Table 5 captures supplies on which tax is not payable (exempted, nil-rated, non-GST).
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Part III (Tables 6 to 8) — Input Tax Credit (ITC):</strong>
              Table 6 bifurcates ITC availed in GSTR-3B. Table 7 details mandatory reversals (Rule 37, 42, 43, Section 17(5)). Table 8 matches available ITC against auto-populated GSTR-2B.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Part IV (Table 9) — Tax Paid Particulars:</strong>
              Details of tax payable and tax paid via cash ledger and credit ledger during the year.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Part V (Tables 10 to 14) — Subsequent Period Transactions:</strong>
              Supplies or ITC of the previous FY reported in returns filed from April to November of the current FY, along with differential tax paid.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Part VI (Tables 15 to 19) — Other Information:</strong>
              Demands and refunds, supplies received from composition taxpayers, HSN-wise outward summaries, and late fee calculations.
            </div>
          </div>
        </section>

        {/* Section 4: Steps for Filing GSTR-9 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Steps for Filing GSTR-9 Methodically</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 1 • Portal Login &amp; Navigation</span>
              <p>Log into <code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">gst.gov.in</code>, navigate to <strong>Services &gt; Returns &gt; Annual Return</strong>, and select the relevant Financial Year.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 2 • Download System Summaries</span>
              <p>Download the auto-generated GSTR-9 summary, GSTR-1 outward consolidated sheet, and GSTR-3B tax paid statements.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 3 • Verify &amp; Reconcile Figures</span>
              <p>Input true turnover figures, adjust Table 6 ITC categories, calculate Table 7 reversals, and verify Table 8 comparisons.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 4 • Submit &amp; Authenticate</span>
              <p>Preview draft PDF, click Compute Liabilities, pay any DRC-03 shortfall, and authenticate via DSC or EVC.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Statutory Due Date & Recent Updates */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory Due Date &amp; Recent Rationalizations</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The standard statutory deadline for filing Form GSTR-9 is <strong className="font-semibold text-slate-950">31st December</strong> following the close of the financial year. Recent amendments introduced by the GST Council have significantly lowered compliance friction:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Late Fee Rationalization:</strong> Late fees for taxpayers with turnover up to ₹5 Crore are capped at ₹50/day (maximum 0.04% of turnover).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Exemption for Nil Returns:</strong> Late fees are substantially reduced or waived for registered entities with zero business activity.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Self-Certification for GSTR-9C:</strong> Requirement for mandatory Chartered Accountant audit certification was abolished; taxpayers can now self-certify Form GSTR-9C directly.</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Common Mistakes to Avoid */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Common Mistakes to Avoid During GSTR-9 Filing</span>
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Blindly Accepting Auto-Populated Data:</strong> Portal-generated summaries may contain unadjusted invoice errors or duplicated credit entries. Always cross-verify with audited books.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Attempting to Claim Fresh ITC:</strong> Trying to enter unclaimed credits in GSTR-9 leads to departmental rejection; fresh credits cannot be claimed via annual returns.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Failing to Reconcile Table 8D ITC Variances:</strong> Unexplained negative differences in Table 8 trigger automated Form ASMT-10 scrutiny notices.</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Stay Compliant, Stay Informed
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing Form GSTR-9 accurately and punctually is a benchmark of corporate fiscal responsibility. By understanding the underlying statutory components, utilizing professional reconciliation tools, and filing well in advance of the December 31st deadline, businesses safeguard their working capital and maintain an unblemished compliance reputation.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1F1646] via-[#2D1B69] to-[#1F1646] text-white shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Merrafilings GSTR-9 Advisory Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Comprehensive Annual Return Filing by Chartered Accountants
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Ensure 100% accurate GSTR-9 compilation, Table 8 ITC matching, and GSTR-9C self-certification before the statutory December deadline.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-annual-return"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>File GSTR-9 with Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstAnnualReturnGuideLayout>
  );
}
