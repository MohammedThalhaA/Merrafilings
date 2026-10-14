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
  Layers,
  BookOpen,
  Scale,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can I make corrections to previous years' transactions in GSTR-9?",
    a: "Yes. Part V of Form GSTR-9 (Tables 10, 11, 12, and 13) allows taxpayers to report outward supplies, credit notes, debit notes, or Input Tax Credit of the reporting financial year that were declared in monthly returns filed between April and November of the subsequent financial year.",
  },
  {
    q: "Is HSN-wise summary mandatory in Form GSTR-9?",
    a: "Under current reporting relaxations, HSN-wise summary of outward supplies (Table 17) is mandatory for taxpayers with aggregate turnover exceeding ₹5 Crore (reporting at least 6-digit HSN codes), while reporting of inward supplies HSN (Table 18) remains optional.",
  },
  {
    q: "What is the consequence of failing to report credit reversals in Table 7?",
    a: "Failure to report mandatory credit reversals under Rule 37 (180-day non-payment to suppliers), Rule 42 (exempt supply credit), or Section 17(5) (blocked credits) results in departmental discrepancy flags, attracting demand notices under Section 73 with 18% annual interest.",
  },
  {
    q: "How can I download the auto-drafted GSTR-9 data from the portal?",
    a: "After logging in, navigate to Services > Returns > Annual Return, select the Financial Year, and click on 'Download GSTR-9 System Computed Summary (PDF)' and 'Download GSTR-1 / GSTR-3B Summary'. You can compare these JSON/PDF files directly against your internal accounting software.",
  },
  {
    q: "Why engage Merrafilings for GSTR-9 preparation?",
    a: "Merrafilings assigns certified Chartered Accountants who conduct forensic 3-way reconciliations across your sales ledgers, purchase registers, GSTR-1, GSTR-3B, and GSTR-2B. We ensure all 6 parts of Form GSTR-9 are filled with precision, avoiding future scrutiny notices.",
  },
];

export default function GuideToGstr9AnnualReturnEssentialHandbookPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAnnualReturnGuideLayout
      currentSlug="guide-to-gstr9-annual-return-your-essential-handbook"
      title="Understanding GSTR-9 Annual Return: Your Go-To Guide"
      breadcrumbLabel="GSTR-9 Essential Handbook"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Tax Advisory Desk"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Completing your <strong className="font-semibold text-slate-950">GSTR-9 Annual Return</strong> may seem daunting given the complex multi-table structure and mathematical cross-checks required. However, with systematic guidance and forensic reconciliation, the filing process becomes straightforward, transparent, and manageable.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            This essential handbook walks through all operational facets of Form GSTR-9, dissecting each of its six parts, outlining filing eligibility criteria, detailing the portal submission steps, and highlighting critical precautions to ensure complete regulatory compliance.
          </p>
        </section>

        {/* Section 1: What is GSTR-9? */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is Form GSTR-9?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Form GSTR-9 is an annual return mandated under <strong className="font-semibold text-slate-950">Section 44 of the CGST Act</strong>. It provides an authoritative consolidation of an enterprise&apos;s monthly or quarterly GST declarations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Annual Sales &amp; Turnover:</strong>
              Consolidates domestic, B2B, B2C, export, and reverse-charge sales.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Input Tax Credit (ITC):</strong>
              Summarizes credits availed, reversed, and reconciled with GSTR-2B.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Taxes Remitted:</strong>
              Reports actual tax liability discharged through cash and credit ledgers.
            </div>
          </div>
        </section>

        {/* Section 2: Who Needs to File GSTR-9? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Who Needs to File GSTR-9?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Every regular registered taxpayer—including manufacturers, wholesalers, retailers, e-commerce operators, and service providers—with aggregate turnover exceeding ₹2 Crore must file GSTR-9. The following entities are exempted:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Taxpayers under Composition Scheme (file Form GSTR-4)</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Casual Taxable Persons (CTP)</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Non-Resident Taxable Persons (NRTP)</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Input Service Distributors (ISD)</span>
            </li>
          </ul>
        </section>

        {/* Section 3: The 6 Parts of GSTR-9 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The 6 Parts of Form GSTR-9 Explained</span>
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part I: Basic Details</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Contains basic taxpayer identifiers: Financial Year, GSTIN, Legal Name, and Trade Name.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part II: Outward &amp; Inward Supplies Declared during FY</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Table 4 details supplies on which tax is payable; Table 5 outlines supplies on which tax is not payable (zero-rated, nil, exempt, non-GST).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part III: Input Tax Credit (ITC) Availed &amp; Reversed</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Table 6 breaks down ITC availed; Table 7 covers statutory reversals under Rule 37, 42, 43; Table 8 calculates difference against GSTR-2B.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part IV: Tax Paid Details</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Table 9 captures actual tax payable versus tax paid in cash and credit ledgers for CGST, SGST, IGST, and Cess.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part V: Subsequent Period Adjustments</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Tables 10 to 14 consolidate transactions of the reporting FY declared in returns filed from April to November of the subsequent FY.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part VI: Other Information &amp; Demands/Refunds</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Tables 15 to 19 cover demands, refunds, composition inward supplies, deemed supplies, HSN summaries, and late fees.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Importance of Filing GSTR-9 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Why Filing GSTR-9 is Crucial for Your Business</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Statutory Immunity:</strong>
              Timely filing closes the annual assessment window and caps late fees.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Financial Transparency:</strong>
              Provides institutional lenders and auditors with an immutable tax audit trail.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">ITC Safeguarding:</strong>
              Guarantees all eligible credits match supplier filings without departmental dispute.
            </div>
          </div>
        </section>

        {/* Section 5: Steps to File GSTR-9 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Steps to File GSTR-9 Efficiently</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">1. Gather Complete Data:</span>
              <p>Reconcile sales registers, purchase ledgers, and monthly GSTR-1/3B summaries.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">2. Access Portal &amp; Select Year:</span>
              <p>Log into <code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">gst.gov.in</code> and navigate to Returns &gt; Annual Return.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">3. Fill Tables Section-by-Section:</span>
              <p>Verify auto-populated values, enter adjustments, and review Table 9 taxes paid.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">4. Authenticate &amp; Generate ARN:</span>
              <p>Submit via Class 3 DSC or Aadhaar EVC and download the acknowledgment receipt.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Common Mistakes to Avoid */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Common Mistakes and How to Avoid Them</span>
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Entering Unreconciled Figures:</strong> Relying on unverified rough estimates rather than audited general ledgers leads to scrutiny notices.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Omitting Table 7 Credit Reversals:</strong> Inadvertently omitting Rule 37 reversals for invoices unpaid beyond 180 days triggers statutory interest demands.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Misclassifying Supplies:</strong> Confusing zero-rated export supplies with exempt domestic transactions misstates refund entitlements.</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Mastering Annual Return Compliance
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Navigating Form GSTR-9 requires technical precision, methodical reconciliation, and an understanding of evolving tax provisions. By preparing ledgers early, verifying auto-filled figures, and filing well before the December 31st deadline, businesses safeguard their fiscal integrity and maintain an unblemished tax standing.
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
            <span>Merrafilings GSTR-9 Filing Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Consult a Senior Chartered Accountant for Your GSTR-9
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Book an annual return reconciliation session. Our tax experts audit your ledgers, align Table 8 ITC with GSTR-2B, and file error-free returns on time.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-annual-return"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore GSTR-9 Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstAnnualReturnGuideLayout>
  );
}
