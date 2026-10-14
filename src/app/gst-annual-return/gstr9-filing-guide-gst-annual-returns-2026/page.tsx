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
  UploadCloud,
  Laptop,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Is GSTR-9 filing mandatory for all GST-registered businesses in 2026?",
    a: "Under current CBIC notifications, GSTR-9 filing is mandatory for regular taxpayers whose aggregate annual turnover exceeds ₹2 Crore. For taxpayers with an aggregate turnover up to ₹2 Crore, filing GSTR-9 is optional/exempted. However, taxpayers with turnover exceeding ₹5 Crore must also file the self-certified reconciliation statement in Form GSTR-9C.",
  },
  {
    q: "Can I claim unclaimed Input Tax Credit (ITC) directly in Form GSTR-9?",
    a: "No. Form GSTR-9 is an annual compilation return and does not permit claiming fresh or additional Input Tax Credit. Any missed ITC from a financial year can only be claimed in the monthly GSTR-3B filed up to 30th November following the end of the financial year (or the date of filing the annual return, whichever is earlier).",
  },
  {
    q: "Can additional tax liabilities be discharged through Form GSTR-9?",
    a: "Yes. If an annual reconciliation reveals an unpaid tax liability, short-payment of tax, or excess ITC availed, taxpayers can voluntarily discharge the liability along with applicable interest under Section 50 using Form GST DRC-03 in cash.",
  },
  {
    q: "What is the penalty for filing GSTR-9 after the due date?",
    a: "Under Section 47 of the CGST Act, late filing of GSTR-9 attracts a late fee of ₹50 per day (₹25 CGST + ₹25 SGST) for turnover up to ₹5 Crore, and ₹100 per day for turnover between ₹5 Crore and ₹20 Crore, subject to a maximum cap of 0.04% to 0.05% of turnover in the State or Union Territory.",
  },
  {
    q: "How does Merrafilings assist with GSTR-9 preparation and filing?",
    a: "Merrafilings provides end-to-end annual return support. Our Chartered Accountants perform forensic 3-way reconciliations (Audited Books vs GSTR-1 vs GSTR-3B vs GSTR-2B), compile Table 4–14 data points, compute net tax adjustments, and file your GSTR-9/9C on the GST portal.",
  },
];

export default function Gstr9FilingGuide2026Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAnnualReturnGuideLayout
      currentSlug="gstr9-filing-guide-gst-annual-returns-2026"
      title="GST Annual Return Filing GSTR-9 in 2026: A Comprehensive Guide"
      breadcrumbLabel="GSTR-9 2026 Filing Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Indirect Tax Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            The year 2026 marks the onset of a new fiscal period, emphasizing the critical importance of keeping your enterprise aligned with India&apos;s evolving tax compliance framework. The Goods and Services Tax (GST) continues to form the backbone of Indian indirect taxation, with the <strong className="font-semibold text-slate-950">Form GSTR-9</strong> serving as the pivotal annual return that reconciles all business activities conducted throughout the financial year.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Whether managing a high-growth startup, an established manufacturing enterprise, or a professional service firm, understanding the intricacies of GSTR-9 is essential to avoid punitive late fees, minimize departmental scrutiny notices (Form ASMT-10), and maintain an unblemished tax compliance rating.
          </p>
        </section>

        {/* Section 1: Introduction to GST and GSTR-9 */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Introduction to GST and GSTR-9</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The Goods and Services Tax operates as a unified consumption tax levied on the supply of goods and services across India. To maintain integrity, the GST regime requires consistent monthly or quarterly filings (GSTR-1 outward supply statements and GSTR-3B tax payment returns).
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Form GSTR-9 acts as the master consolidation return under <strong className="font-semibold text-slate-950">Section 44 of the CGST Act</strong>. It allows taxpayers to aggregate, verify, and cross-reconcile all 12 monthly tax declarations with audited financial books of accounts, creating an authoritative annual record.
          </p>
        </section>

        {/* Section 2: What is GSTR-9 & Key Components */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is GSTR-9? Key Structural Components</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            GSTR-9 is a detailed statutory document containing six structured parts that capture every facet of a taxpayer&apos;s annual operations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part I: Basic Profile Details</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Captures the financial year, GSTIN, legal name, trade name, and jurisdiction details of the registered entity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part II: Outward &amp; Inward Supplies (Tables 4 &amp; 5)</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Consolidates all taxable supplies, B2B sales, B2C transactions, zero-rated exports, SEZ supplies, and reverse-charge inwards.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part III: Input Tax Credit (ITC) (Tables 6, 7 &amp; 8)</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Highlights total ITC availed through GSTR-3B, statutory credit reversals under Rules 37, 42, 43, and auto-computed comparison against GSTR-2B.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part IV: Taxes Paid Summary (Table 9)</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Detailed account of actual tax payable versus tax discharged in cash and through electronic credit ledgers during the financial year.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part V: Previous FY Adjustments (Tables 10 to 14)</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Encompasses amendments, debit notes, credit notes, or ITC of the reporting year declared in returns filed between April and November of the next FY.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Part VI: Demands, Refunds &amp; HSN (Tables 15 to 19)</strong>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Summary of refund claims sanctioned/rejected, pending tax demands, HSN-wise outward summaries, and late fee calculations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Steps to File GSTR-9 in 2026 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Laptop className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Steps to File GSTR-9 in 2026: Online Portal Workflow</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing GSTR-9 can be executed seamlessly by adhering to the standard GST portal workflow:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 1 — Log into the GST Portal:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Access <code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">gst.gov.in</code> with authorized credentials, navigate to <strong>Services &gt; Returns &gt; Annual Return</strong>, select the relevant Financial Year, and click on <strong>Prepare Online</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 2 — Download &amp; Verify System-Computed Summaries:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Download the auto-drafted GSTR-9 PDF, GSTR-1 summary, and GSTR-3B summary generated by the system. Cross-verify auto-filled figures with your internal general ledgers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 3 — Edit &amp; Enter True Transactional Data:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Update turnover tables, bifurcate ITC into inputs, capital goods, and input services, report credit reversals, and declare subsequent period adjustments accurately.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 4 — Settle Additional Dues via Form DRC-03:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                If Table 9 reveals any tax liability shortfall, generate a cash payment challan and discharge the tax plus 18% annual interest via Form DRC-03 under voluntary payment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 5 — Review, Authenticate &amp; Archive ARN:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Preview the draft GSTR-9 summary, click <strong>File GSTR-9</strong>, authenticate using Class 3 DSC (for companies/LLPs) or Aadhaar EVC, and download the final filed return along with the Application Reference Number (ARN).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Recent Updates in GSTR-9 Filing for 2026 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Recent Updates in GSTR-9 Filing for 2026</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Recent GST Council recommendations have introduced pivotal enhancements to simplify annual compliance:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block">Automated Error Checking:</strong>
              <p>The GST portal flags real-time mathematical discrepancies between GSTR-3B and GSTR-9 before submission, eliminating accidental filing mistakes.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block">Enhanced Table 8D Matching:</strong>
              <p>Advanced reconciliation tools provide transparent drill-downs into GSTR-2B invoice-level credits versus credits claimed in Table 6B.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block">Rationalized Late Fees:</strong>
              <p>Late fee caps are permanently tiered based on annual turnover, preventing exorbitant fees for small and mid-sized enterprises.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Challenges of Filing GSTR-9 */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Challenges of Filing GSTR-9 &amp; How to Overcome Them</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Despite digital advancements, businesses commonly encounter several friction points during annual return compilation:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Incomplete Transactional Records:</strong> Unreconciled manual invoices, missing credit notes, or delayed vendor entries create irreconcilable return differences.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Complex Table 8 Ineligible ITC Reconciliation:</strong> Differentiating between genuine timing differences and permanently lapsed credits requires thorough invoice-by-invoice analysis.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Heightened Departmental Scrutiny:</strong> Algorithmic ASMT-10 notices are automatically issued if negative variances in Table 8 exceed tolerance thresholds.</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Expert Tips for Efficient GSTR-9 Filing */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Expert Tips for Efficient GSTR-9 Filing</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Execute Continuous Book Reconciliation:</strong>
              Compare turnover reported in audited trial balances with cumulative GSTR-1 filings early in Q3 to avoid December rush.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Utilize Specialized GST Software:</strong>
              Automate GSTR-2B data fetching, invoice matching, and Table 6 bifurcation using certified enterprise accounting tools.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Audit Supplier Non-Compliance:</strong>
              Identify vendors who failed to file GSTR-1 and enforce credit recovery or invoice settlement before annual closure.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Seek Professional CA Assistance:</strong>
              Engage qualified tax litigators and Chartered Accountants to audit complex transactions and file error-free returns.
            </div>
          </div>
        </section>

        {/* Section 7: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Solidifying Your Corporate Tax Standing
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing Form GSTR-9 is more than an administrative compliance checkbox—it is a vital financial seal on your annual operations. Meticulous preparation, timely reconciliation, and professional execution protect your business from statutory penalties, solidify your creditworthiness, and ensure seamless commercial operations.
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
            <span>Merrafilings Annual Return Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Need Expert Support Filing Your GSTR-9 &amp; GSTR-9C?
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Partner with our seasoned Chartered Accountants for complete turnover matching, Table 8 ITC reconciliation, and guaranteed timely portal filing.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-annual-return"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore Annual Return Plans (From ₹4,988)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstAnnualReturnGuideLayout>
  );
}
