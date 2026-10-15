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
  Coins,
  Gavel,
} from "lucide-react";

export default function Gstr10FilingUltimateGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Gstr10GuideLayout
      currentSlug="gstr10-filing-ultimate-guide"
      title="GSTR-10: Ultimate Guide on Final Return Filing"
      breadcrumbLabel="GSTR-10 Ultimate Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <div className="space-y-10 text-slate-900 leading-relaxed">
        
        {/* Executive Overview Banner */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border border-indigo-100 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Comprehensive Statutory Handbook &amp; Portal Manual</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-3">
            GSTR-10: Ultimate Guide on Final Return Filing, Rules &amp; Due Dates
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Compliance with tax statutes forms the bedrock of sustainable business management. If your business operates or has previously operated under the Goods and Services Tax regime in India, comprehending what <strong className="font-semibold text-slate-950">Form GSTR-10 (Final Return)</strong> entails is paramount. This ultimate manual demystifies the statutory architecture, inventory valuation methods, 3-month statutory due dates, portal submission workflows, and severe enforcement penalties associated with GSTR-10 non-compliance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/gstr-10"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-xs transition-colors"
            >
              <span>Explore GSTR-10 Packages</span>
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

        {/* Section 1: What is GSTR-10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>What is Form GSTR-10?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Form <strong className="font-semibold text-slate-950">GSTR-10</strong> is colloquially known as the <strong className="font-semibold text-slate-950">"Final Return"</strong> under the Indian GST regime. It is governed by <strong className="font-semibold text-slate-950">Section 45 of the CGST Act, 2017</strong> read alongside <strong className="font-semibold text-slate-950">Rule 81 of the CGST Rules, 2017</strong>.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            The fundamental objective behind filing GSTR-10 is to ensure that a taxpayer whose GSTIN has been cancelled or voluntarily surrendered provides an exhaustive, verified record of all closing stock held on the effective cancellation date and clears any pending input tax credit reversals or outstanding tax dues before their GST profile is permanently deactivated.
          </p>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <strong className="font-semibold">Statutory Distinction:</strong> GSTR-10 is fundamentally different from GSTR-9 (Annual Return). GSTR-9 is filed annually by active businesses to report yearly turnover, whereas GSTR-10 is filed strictly once upon registration cancellation or surrender to effect a clean statutory exit.
          </div>
        </section>

        {/* Section 2: Who Needs to File GSTR-10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <span>Who Needs to File GSTR-10 (And Who is Exempt)?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Not every entity registered under GST is required to file Form GSTR-10. The statutory mandate applies specifically based on registration category and status:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-sm text-slate-950 group-hover:text-emerald-700 transition-colors mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Mandatory Filers</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Voluntary Surrender:</strong> Taxpayers who applied for voluntary cancellation under Form GST REG-16 and received an order in Form GST REG-19.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Suo-Moto Cancellation:</strong> Taxpayers whose registrations were cancelled by the proper officer under Section 29(2) due to non-filing of returns or statutory violations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Zero Stock Entities:</strong> Businesses with zero inventory or capital assets must still file a "Nil GSTR-10".</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-sm text-slate-950 group-hover:text-emerald-700 transition-colors mb-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Exempt Entities under Law</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Composition Taxpayers:</strong> Small businesses registered under Section 10 Composition Scheme.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Input Service Distributors (ISD):</strong> Entities registered under Section 24(viii).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Non-Resident Taxable Persons (NRTP):</strong> Foreign taxable persons registered under Section 27.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>TDS / TCS Deductors:</strong> Entities registered strictly under Section 51 or Section 52.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Why is GSTR-10 Important? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Scale className="w-5 h-5 text-indigo-600" />
            <span>Why GSTR-10 Filing is Crucial for Corporate Peace of Mind</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1.5 group-hover:text-indigo-600 transition-colors">
                Prevents Revenue Leakage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Ensures all input tax credit availed on unsold merchandise, raw materials, and plant machinery is duly reversed and reimbursed to the central and state governments.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1.5 group-hover:text-indigo-600 transition-colors">
                Protection from Section 62 Assessment
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Avoids the harsh issuance of a "Best Judgement Assessment" order, where officers arbitrarily determine tax liability with 100% penalties and bank freezes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1.5 group-hover:text-indigo-600 transition-colors">
                Irrevocable Commercial Closure
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Guarantees that directors, promoters, and partners carry zero lingering personal tax liabilities forward into new commercial undertakings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Key Components & Tables of GSTR-10 */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Boxes className="w-5 h-5 text-blue-600" />
            <span>Key Components &amp; Table Breakdown of Form GSTR-10</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Form GSTR-10 consists of several mandatory structural tables that must be populated accurately:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                <Receipt className="w-4 h-4 text-blue-600" />
                <span>Basic Registration &amp; Cancellation Details (Tables 1 to 7)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Auto-populated and verified fields including GSTIN, Legal Name, Trade Name, Principal Place of Business, Application Reference Number (ARN) of cancellation, and the Effective Date of Cancellation as decreed in Form GST REG-19.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                <Boxes className="w-4 h-4 text-blue-600" />
                <span>Table 8A, 8B &amp; 8C: Closing Stock with Corresponding Invoices</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Covers inputs held in stock (Table 8A), inputs contained in semi-finished or finished goods (Table 8B), and capital goods / machinery (Table 8C) where original supplier tax invoices and bills of entry are available. Requires declaring GSTIN of supplier, invoice number, invoice date, description of goods, quantity, taxable value, and tax amounts.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span>Table 8D: Stock Held Without Invoices (CA Certificate Mandatory)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Where original purchase invoices are lost or unavailable, details must be entered under Table 8D. Under Rule 44(3), the taxpayer must compute open market value and upload a certificate issued by a practicing Chartered Accountant or Cost Accountant bearing a valid UDIN.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Table 9 &amp; 10: Tax Payable &amp; Tax Paid</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Summarizes the net output liability resulting from closing stock declarations and Section 29(5) reversals. Payment can be discharged by utilizing unutilized Electronic Credit Ledger balances or via Electronic Cash Ledger challan payment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Step-by-Step Portal Filing Workflow */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>How to File Form GSTR-10 Online: Step-by-Step Guide</span>
          </h2>
          <div className="space-y-3 pt-1">
            {[
              {
                step: "Step 1: Access the GST Portal",
                desc: "Visit gst.gov.in and log in with your valid GST credentials. (Note: Login remains accessible even after registration cancellation for the purpose of filing GSTR-10).",
              },
              {
                step: "Step 2: Navigate to Final Return Dashboard",
                desc: "Go to Services > Returns > Final Return (GSTR-10). The portal will prompt you to input the ARN of the cancellation order and the effective cancellation date.",
              },
              {
                step: "Step 3: Enter Closing Stock Details",
                desc: "Fill in Table 8 with itemized closing inventory details. For zero inventory, click the 'Nil Return' checkbox.",
              },
              {
                step: "Step 4: Compute Rule 44 Tax Liability",
                desc: "Click 'Preview Draft GSTR-10'. The system calculates tax liability on inputs and depreciated capital goods (reduced by 5% per quarter of usage).",
              },
              {
                step: "Step 5: Discharge Tax Dues",
                desc: "Offset liability using available credit ledger balance or create a PMT-06 challan to pay via Net Banking, NEFT/RTGS, or UPI.",
              },
              {
                step: "Step 6: Submit via DSC or EVC",
                desc: "Sign using Class 3 Digital Signature Certificate (compulsory for LLPs and Companies) or Aadhaar OTP-based EVC (for Proprietors). An Application Reference Number (ARN) will be generated instantly.",
              },
            ].map((st, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors">
                    {st.step}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Deadline & Consequences of Non-Compliance */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>Strict Filing Deadlines &amp; Severe Consequences of Non-Compliance</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-2 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-600" />
                <span>The 3-Month Statutory Window</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Under Section 45, Form GSTR-10 must be filed within <strong className="text-slate-900 font-semibold">3 months from the date of the cancellation order</strong> or the <strong className="text-slate-900 font-semibold">effective date of cancellation</strong>, whichever is later. For instance, if an order is passed on 10th January with effective cancellation from 1st February, the 3-month clock starts from 1st February.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-2 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Coins className="w-4 h-4 text-rose-600" />
                <span>Daily Late Fees &amp; Statutory Fines</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Under Section 47 of the CGST Act, late filing attracts a statutory late fee of <strong className="text-slate-900 font-semibold">₹200 per day</strong> (₹100 CGST + ₹100 SGST). If left unfiled, the department issues a Form GSTR-3A defaulter notice and initiates Best Judgement Assessment proceedings under Section 62.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <span>Frequently Asked Questions (FAQs)</span>
          </h2>

          <div className="space-y-3 pt-1">
            {[
              {
                q: "Can I file GSTR-10 if my monthly returns (GSTR-3B) are pending?",
                a: "No. The GST portal mandates that all periodic returns (GSTR-1 and GSTR-3B) up to the effective date of cancellation must be filed before the system allows access to Form GSTR-10.",
              },
              {
                q: "What formula is used to calculate ITC reversal on capital goods?",
                a: "Under Rule 44(1)(b), the input tax credit involved in remaining useful life is calculated on a pro-rata basis, taking the total useful life of the asset as 5 years (60 months) and reducing the availed ITC by 5% for every quarter or part thereof from the date of the invoice.",
              },
              {
                q: "Can I restore my cancelled GST registration after submitting GSTR-10?",
                a: "No. Once Form GSTR-10 is successfully filed and accepted, the GSTIN is permanently closed. If you need to revoke the cancellation, you must file Form GST REG-21 before submitting GSTR-10.",
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
              Senior CA Review Included
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              File Your Form GSTR-10 with Merrafilings Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Avoid daily ₹200 late fees and aggressive Section 62 assessment orders. Our Indirect Tax Advocates handle complete stock verification, capital goods depreciation, and portal submission.
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
        serviceTitle="GSTR-10 Ultimate Guide Filing Assistance"
      />
    </Gstr10GuideLayout>
  );
}
