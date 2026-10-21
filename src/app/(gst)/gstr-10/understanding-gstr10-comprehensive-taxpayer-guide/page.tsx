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
  Users,
} from "lucide-react";

export default function UnderstandingGstr10ComprehensiveTaxpayerGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Gstr10GuideLayout
      currentSlug="understanding-gstr10-comprehensive-taxpayer-guide"
      title="Understanding GSTR-10: Comprehensive Guide for Taxpayers"
      breadcrumbLabel="Comprehensive Taxpayer Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <div className="space-y-10 text-slate-900 leading-relaxed">
        
        {/* Executive Overview Banner */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border border-indigo-100 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Taxpayer Compliance Blueprint &amp; Deregistration Guide</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-3">
            Understanding GSTR-10: Comprehensive Guide for Indian Taxpayers
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Navigating statutory deregistration under the Indian Goods and Services Tax (GST) framework requires precision and strategic adherence to procedural timelines. <strong className="font-semibold text-slate-950">Form GSTR-10 (Final Return)</strong> is specifically crafted for taxpayers choosing to cancel or surrender their GSTIN, or whose registration has been cancelled by an order of the tax officer. This comprehensive guide outlines the filing architecture, credit reversal formulas, step-by-step portal workflow, and statutory safeguards for businesses exiting the GST regime.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/gstr-10"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-xs transition-colors"
            >
              <span>Explore GSTR-10 Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-indigo-600 text-slate-800 text-xs font-medium transition-colors"
            >
              <span>Schedule Taxpayer Consultation</span>
            </button>
          </div>
        </section>

        {/* Section 1: What is GSTR-10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>What is GSTR-10 and Why is it Mandatory?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Governed by <strong className="font-semibold text-slate-950">Section 45 of the CGST Act</strong> and <strong className="font-semibold text-slate-950">Rule 81 of the CGST Rules</strong>, Form GSTR-10 is the mandatory final return filed by every registered taxpayer whose GST registration has been cancelled.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Submitting Form GSTR-10 legally certifies that the taxpayer has accounted for all goods held in stock on the cancellation date, reversed eligible input tax credit under <strong className="font-semibold text-slate-950">Section 29(5)</strong>, and discharged all outstanding tax liabilities before permanently exiting the indirect tax system.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1 group-hover:text-indigo-600 transition-colors">
                1. Legal Compliance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Avoids strict statutory non-compliance penalties, departmental inspection notices, and personal director liability.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1 group-hover:text-indigo-600 transition-colors">
                2. Clearance of Liabilities
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Ensures all outstanding input tax credit reversals and interest liabilities are formally settled through the Electronic Cash/Credit Ledger.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1 group-hover:text-indigo-600 transition-colors">
                3. Permanent Formal Closure
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Officially closes your GST account on the portal and issues an irrevocable Application Reference Number (ARN) confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Key Components of GSTR-10 */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Layers className="w-5 h-5 text-emerald-600" />
            <span>Key Components of the GSTR-10 Final Return</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            To ensure zero discrepancies, the GSTR-10 form requires precise completion of the following four functional dimensions:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Receipt className="w-4 h-4 text-emerald-600" />
                <span>1. Basic Registration &amp; Order Identifiers</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Includes your GSTIN, Legal Name, Trade Name, Principal Place of Business, Order Number of Cancellation (Form GST REG-19), and the statutory Effective Date of Cancellation.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Boxes className="w-4 h-4 text-emerald-600" />
                <span>2. Inventory of Inputs &amp; Capital Goods</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Itemized reporting of inputs held in stock, inputs contained in semi-finished or finished products, and capital goods or machinery held on the date of cancellation.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>3. Mandatory Credit Reversal Computation (Rule 44)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Computing the amount of input tax credit to be reversed or output tax payable on the open market value, whichever is higher, under Section 29(5) of the CGST Act.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>4. Digital Verification &amp; Certification</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                Authenticating the return using Digital Signature Certificate (DSC) or Electronic Verification Code (EVC), accompanied by a Chartered Accountant certificate if Table 8D is used.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Guide to Filing */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            <span>Step-by-Step Guide to Filing GSTR-10 on the GST Portal</span>
          </h2>
          <div className="space-y-3 pt-1">
            {[
              {
                step: "Step 1: Gather Requisite Information & Financial Records",
                desc: "Collect the cancellation order (REG-19), closing stock balance sheets, purchase tax invoices, depreciation schedules for capital machinery, and electronic credit ledger balance.",
              },
              {
                step: "Step 2: Visit & Authenticate on the GST Portal",
                desc: "Go to gst.gov.in and log in using your active user ID and password. The system retains access for filing GSTR-10 even after registration deactivation.",
              },
              {
                step: "Step 3: Access the Final Return (GSTR-10) Dashboard",
                desc: "Navigate to Services > Returns > Final Return (GSTR-10). Enter the Application Reference Number (ARN) of the cancellation application.",
              },
              {
                step: "Step 4: Input Inventory & Stock Details",
                desc: "Fill in Table 8A, 8B, 8C, and 8D. If holding zero inventory, select 'Nil GSTR-10' to proceed without uploading schedules.",
              },
              {
                step: "Step 5: Review Draft, Pay Liabilities & Submit",
                desc: "Preview the draft PDF. If tax is payable under Section 29(5), offset it via credit ledger or generate a challan. Digitally sign via DSC or EVC to obtain your ARN.",
              },
            ].map((s, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <span className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {s.step}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Deadlines & Late Fee Penalties */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Clock className="w-5 h-5 text-rose-500" />
            <span>Deadlines &amp; Penalties for Non-Filing under Section 47</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Comprehending statutory deadlines is essential to prevent severe financial penalties:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-1.5 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose-600" />
                <span>3-Month Statutory Due Date</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Under Section 45, the return must be filed within <strong className="text-slate-900 font-semibold">3 months from the date of the cancellation order</strong> or the <strong className="text-slate-900 font-semibold">effective date of cancellation</strong>, whichever is later.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-1.5 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Coins className="w-4 h-4 text-rose-600" />
                <span>Late Fee of ₹200 / Day</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Failing to submit within 90 days triggers a statutory late fee of <strong className="text-slate-900 font-semibold">₹200 per day</strong> (₹100 CGST + ₹100 SGST). Departmental notices in Form GSTR-3A will be served, followed by Section 62 assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <span>Frequently Asked Questions (FAQs)</span>
          </h2>

          <div className="space-y-3 pt-1">
            {[
              {
                q: "What documents are required to prepare Form GSTR-10?",
                a: "You need the GST Cancellation Order (Form GST REG-19), closing stock balance sheets as on cancellation date, purchase tax invoices for stock and machinery, and a Chartered Accountant certificate with UDIN if invoices are unavailable (Table 8D).",
              },
              {
                q: "Can I pay GSTR-10 tax liability using my electronic credit ledger?",
                a: "Yes. Unutilized Input Tax Credit balance lying in your Electronic Credit Ledger as on the date of filing can be utilized to discharge GSTR-10 tax liabilities resulting from input reversals.",
              },
              {
                q: "Who is exempt from filing GSTR-10?",
                a: "Input Service Distributors (ISD), Non-Resident Taxable Persons, Composition scheme dealers (Section 10), and persons deducting TDS/TCS under Section 51/52 are exempt from GSTR-10.",
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
              Complete Taxpayer Peace of Mind
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              File Your GSTR-10 Final Return with Merrafilings Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Ensure accurate closing stock valuation, Rule 44 credit calculations, and senior CA sign-off. Protect your enterprise from departmental notices and punitive assessments.
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
        serviceTitle="Taxpayer GSTR-10 Filing Assistance"
      />
    </Gstr10GuideLayout>
  );
}
