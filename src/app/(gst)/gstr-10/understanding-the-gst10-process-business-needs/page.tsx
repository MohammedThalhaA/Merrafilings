"use client";

import React, { useState } from "react";
import Link from "next/link";
import Gstr10GuideLayout from "@/components/Gstr10GuideLayout";
import ContactModal from "@/components/ContactModal";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Calculator,
  Scale,
  Sparkles,
  Layers,
  Calendar,
  Building2,
  FileCheck,
  Receipt,
  Boxes,
  Database,
  Search,
  Check,
} from "lucide-react";

export default function UnderstandingGst10ProcessBusinessNeedsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Gstr10GuideLayout
      currentSlug="understanding-the-gst10-process-business-needs"
      title="Understanding the GST-10 Process: A Business Necessity"
      breadcrumbLabel="GST-10 Process & Business Needs"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <div className="space-y-10 text-slate-900 leading-relaxed">
        
        {/* Executive Overview Banner */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border border-indigo-100 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Corporate Compliance &amp; Fiscal Closure Analysis</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-3">
            Understanding the GST-10 Process: A Vital Business Necessity
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            As commercial enterprises navigate the intricate landscape of indirect tax compliance, the term <strong className="font-semibold text-slate-950">"GST-10 Process"</strong> has transitioned into an indispensable requirement in modern financial management. When an enterprise closes its doors, undergoes corporate restructuring, or voluntarily cancels its Goods and Services Tax (GST) registration, simply halting invoicing is legally insufficient. The GST-10 Process acts as the definitive statutory ledger to account for all closing inventory, reconcile input tax credits, discharge pending dues, and obtain complete immunity from subsequent departmental assessments.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/gstr-10"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-xs transition-colors"
            >
              <span>Explore GSTR-10 Final Return Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-indigo-600 text-slate-800 text-xs font-medium transition-colors"
            >
              <span>Consult Indirect Tax CA</span>
            </button>
          </div>
        </section>

        {/* Section 1: What is the GST-10 Process? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>What is the GST-10 Process?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            The <strong className="font-semibold text-slate-950">GST-10 Process</strong> represents a legally mandated statutory framework under <strong className="font-semibold text-slate-950">Section 45 of the Central Goods and Services Tax (CGST) Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 81 of the CGST Rules, 2017</strong>. It stipulates that every registered taxable entity whose GST registration has been either cancelled by the tax authority or voluntarily surrendered must declare their final liabilities and reconcile their tax positions within the GST system.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Unlike recurring monthly or quarterly filings (GSTR-1, GSTR-3B) or annual reconciliations (GSTR-9), Form GSTR-10 is a <strong className="font-semibold text-slate-950">one-time Final Return</strong>. It functions as an auxiliary balance sheet submitted to the GST portal that transparently records:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5">
                <Receipt className="w-4 h-4 text-indigo-600" />
                <span>Closing Stock Declaration</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full inventory accounting of raw materials, work-in-progress, finished manufactured products, and capital goods held on the effective cancellation date.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5">
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>Rule 44 Credit Reversal</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Repayment of input tax credits availed on inputs in stock or depreciated capital machinery, payable either by ledger offset or electronic cash deposit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Key Components of the GST-10 Process */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Key Components of the GST-10 Process</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            To successfully execute and navigate the GST-10 Process without triggering departmental scrutiny or audits, enterprise owners and accounting executives must adhere to four essential foundational pillars:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                1
              </div>
              <h3 className="text-sm font-semibold text-slate-950 mb-1.5 group-hover:text-emerald-700 transition-colors">
                Understanding Annual Compliance vs Final Return
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Businesses often confuse GSTR-9 with GSTR-10. GSTR-9 is an ongoing annual reconciliation filed while holding active GSTIN status. GSTR-10 is filed strictly upon cancellation to permanently freeze and settle indirect tax accounts.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                2
              </div>
              <h3 className="text-sm font-semibold text-slate-950 mb-1.5 group-hover:text-emerald-700 transition-colors">
                Accurate Documentation &amp; Invoices
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Maintaining intact purchase tax invoices, bills of entry, credit notes, and supplier debit records is indispensable. Where purchase invoices are unavailable, open market valuation certified by a CA is mandatory.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                3
              </div>
              <h3 className="text-sm font-semibold text-slate-950 mb-1.5 group-hover:text-emerald-700 transition-colors">
                Financial Reconciliation with Books
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Trial balance entries, asset registers, and audited balance sheets must align exactly with portal inventory declarations. Any unexplained variance invites departmental notice under Section 73 or 74.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                4
              </div>
              <h3 className="text-sm font-semibold text-slate-950 mb-1.5 group-hover:text-emerald-700 transition-colors">
                Chartered Accountant Certification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Under Rule 44(3), whenever inputs or capital assets are declared without corresponding supplier invoices, the taxpayer must upload a certificate issued by a practicing Chartered Accountant or Cost Accountant.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Importance of GST-10 for Business Efficiency */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Scale className="w-5 h-5 text-blue-600" />
            <span>Importance of GST-10 for Enterprise Efficiency &amp; Risk Mitigation</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Embracing a systematic GST-10 Process transcends standard regulatory compliance; it forms the backbone of commercial risk management and fiscal security:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Drastic Reduction of Unforeseen Financial Penalties</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Taxpayers often assume that receiving Form GST REG-19 (Cancellation Order) terminates their compliance obligations. In reality, failing to file Form GSTR-10 within 90 days triggers a recurring late fee of ₹200 per day under Section 47. Timely filing permanently eliminates this mounting financial liability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Full Transparency with Revenue Authorities</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Submitting Form GSTR-10 presents an unambiguous, verified record of your closing tax positions. It ensures that the jurisdictional GST commissionerate has zero pending queries regarding unreversed input credits, thereby protecting company directors and partners from personal liability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Clean Exit for Corporate Mergers, Acquisitions &amp; Dissolutions</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Prospective buyers, acquiring conglomerates, or banks conducting due diligence require a clean GST deregistration certificate and GSTR-10 filing acknowledgment. Without it, legacy indirect tax liabilities can stall major corporate transactions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Guide to Filing GST-10 */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <FileCheck className="w-5 h-5 text-indigo-600" />
            <span>Step-by-Step Guide to Executing the GST-10 Filing</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            For seamless and error-free execution of Form GSTR-10 on the official GST Common Portal (gst.gov.in), businesses should adhere to this standardized five-phase protocol:
          </p>

          <div className="space-y-3 pt-2">
            {[
              {
                step: "Phase 1: Consolidate Information & Closing Records",
                desc: "Compile all relevant physical and digital documentation, including the cancellation order (Form GST REG-19), ARN of surrender, physical stock count as on the cancellation date, asset purchase vouchers, and electronic credit ledger statements.",
              },
              {
                step: "Phase 2: Review Ledger Books & Trial Balances",
                desc: "Audit the financial ledger to verify that every inward and outward transaction conducted up to the effective cancellation date has been recorded in prior GSTR-1 and GSTR-3B filings.",
              },
              {
                step: "Phase 3: Fill Out Form GSTR-10 on the Portal",
                desc: "Log into gst.gov.in, navigate to Services > Returns > Final Return (GSTR-10). Populate Table 8A (inputs in stock with invoices), Table 8B (inputs contained in semi-finished/finished goods), Table 8C (capital goods/machinery), and Table 8D (stock without invoices).",
              },
              {
                step: "Phase 4: Cross-Verification & Tax Liability Computation",
                desc: "Compute the tax liability under Section 29(5) read with Rule 44. Calculate the higher of the availed ITC (with 5% quarterly reduction for machinery) or output tax on market value. Offset against electronic cash/credit balance.",
              },
              {
                step: "Phase 5: Digital Signature Submission & Certification",
                desc: "Review the draft summary PDF. Upload CA/CMA valuation certificate if Table 8D is used. Authenticate using Class 3 Digital Signature Certificate (DSC) or Aadhaar-based Electronic Verification Code (EVC) to generate the ARN.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {item.step}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Latest Updates on the GST-10 Process */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Latest Regulatory Updates &amp; Departmental Directives</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            The GST Council and the Central Board of Indirect Taxes and Customs (CBIC) have implemented pivotal updates impacting final return compliance:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-amber-950 mb-1.5 group-hover:text-amber-700 transition-colors">
                Digital Verification &amp; Auto-Locking
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                The portal now automatically syncs previous GSTR-2B data against Table 8 stock claims, flagging inflated ITC reversions or unaccounted capital assets instantly.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-amber-950 mb-1.5 group-hover:text-amber-700 transition-colors">
                Enforcement of Section 62 Assessment
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Field officers have been directed to strictly issue Best Judgement Assessment orders within 30 days of Form GSTR-3A expiry, disallowing deferred filings without heavy penalties.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-amber-950 mb-1.5 group-hover:text-amber-700 transition-colors">
                Mandatory CA UDIN for Stock Valuation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                All Chartered Accountant valuation certificates uploaded under Table 8D must possess a verifiable Unique Document Identification Number (UDIN) to prevent portal rejection.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Common Challenges & Solutions */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>Common Challenges Faced by Taxpayers &amp; Tactical Solutions</span>
          </h2>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  !
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-rose-600 transition-colors">
                    Challenge 1: Inability to Trace Historical Purchase Invoices
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <strong className="text-slate-800">The Problem:</strong> When cancelling a registration after years of operation, businesses frequently cannot locate original purchase invoices for capital machinery or leftover stocks.
                    <br />
                    <strong className="text-slate-800">The Solution:</strong> Enter such stock items under Table 8D (goods without invoices) and engage a practicing CA or CMA to furnish a market valuation certificate compliant with Rule 44(3).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  !
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-rose-600 transition-colors">
                    Challenge 2: Misinterpreting "Nil Return" When No Stock is Held
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <strong className="text-slate-800">The Problem:</strong> Taxpayers believe that having zero closing stock exempts them from submitting Form GSTR-10 altogether, only to discover accumulated daily late fees later.
                    <br />
                    <strong className="text-slate-800">The Solution:</strong> Even with zero stock, taxpayers must explicitly file a "Nil GSTR-10" via the portal to close out the statutory file and generate an official closure ARN.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  !
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-rose-600 transition-colors">
                    Challenge 3: Complex Capital Goods 5% Depreciation Calculations
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <strong className="text-slate-800">The Problem:</strong> Erroneously calculating pro-rata useful life reductions for plant and machinery under Rule 44 leads to audit notices for short payment of tax.
                    <br />
                    <strong className="text-slate-800">The Solution:</strong> Leverage Merrafilings' automated Rule 44 tax computation engine, which calculates quarterly usage deductions from the invoice date down to the day of cancellation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Comprehensive FAQ Grid */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <span>Frequently Asked Questions (FAQs)</span>
          </h2>

          <div className="space-y-3 pt-1">
            {[
              {
                q: "What is the exact deadline to file Form GSTR-10?",
                a: "Under Section 45 of the CGST Act, 2017, Form GSTR-10 must be filed within 3 months from the date of the cancellation order (Form GST REG-19) or the effective date of cancellation specified in the order, whichever is later.",
              },
              {
                q: "What is the late fee penalty for delayed submission of GSTR-10?",
                a: "Under Section 47 of the CGST Act, a late fee of ₹200 per day (₹100 CGST + ₹100 SGST) is charged for every day of default beyond the 3-month statutory window until the return is successfully filed.",
              },
              {
                q: "Can I revise Form GSTR-10 after submitting it on the portal?",
                a: "No. The GST portal does not permit revision of Form GSTR-10 once submitted. It is therefore vital to review all closing stock valuations and tax computations with a Chartered Accountant before final submission.",
              },
              {
                q: "Are composition dealers required to file Form GSTR-10?",
                a: "No. Taxpayers registered under the GST Composition Scheme (Section 10), Input Service Distributors (ISD), Non-Resident Taxable Persons, and entities deducting TDS/TCS under Sections 51/52 are legally exempt from filing GSTR-10.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-950 group-hover:text-indigo-600 transition-colors">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white shadow-xl">
          <div className="max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-semibold border border-indigo-400/30">
              Complete Final Return Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to File Your Form GSTR-10 with Zero Hassle?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Connect with Merrafilings' team of Chartered Accountants and Indirect Tax Specialists. We manage inventory schedules, Rule 44 tax calculations, CA asset certification, and seamless portal filing with full legal protection.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/gstr-10"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <span>View GSTR-10 Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 transition-colors cursor-pointer"
              >
                <span>Speak to CA Now</span>
              </button>
            </div>
          </div>
        </section>

      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle="GSTR-10 Final Return Assistance"
      />
    </Gstr10GuideLayout>
  );
}
