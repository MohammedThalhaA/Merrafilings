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
  Ban,
  UserCheck,
} from "lucide-react";

export default function Gstr10FilingWhoNeedsToFileAndWhenPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Gstr10GuideLayout
      currentSlug="gstr10-filing-who-needs-to-file-and-when"
      title="GSTR-10 Filing Explained: Who Needs to File and When?"
      breadcrumbLabel="Who Needs to File & Due Dates"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <div className="space-y-10 text-slate-900 leading-relaxed">
        
        {/* Executive Overview Banner */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border border-indigo-100 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Statutory Eligibility, Timelines &amp; Applicability Analysis</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-3">
            GSTR-10 Filing Explained: Who Needs to File and When?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            The introduction of the Goods and Services Tax (GST) framework transformed indirect taxation across India by consolidating complex excise, service, and VAT laws into a unified compliance architecture. Complying with GST deregistration requires a precise understanding of <strong className="font-semibold text-slate-950">Form GSTR-10 (Final Return)</strong>. This guide addresses the two most critical legal queries for exiting businesses: <strong className="font-semibold text-slate-950">Who is legally required to file GSTR-10?</strong> and <strong className="font-semibold text-slate-950">What is the exact statutory due date?</strong>
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/gstr-10"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-xs transition-colors"
            >
              <span>Explore GSTR-10 Filing Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-indigo-600 text-slate-800 text-xs font-medium transition-colors"
            >
              <span>Check Eligibility with CA</span>
            </button>
          </div>
        </section>

        {/* Section 1: What is Form GSTR-10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>What is Form GSTR-10?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Form <strong className="font-semibold text-slate-950">GSTR-10</strong> is the statutory "Final Return" under <strong className="font-semibold text-slate-950">Section 45 of the Central Goods and Services Tax (CGST) Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 81 of the CGST Rules, 2017</strong>.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Its primary purpose is to ensure that all business transactions conducted up to the cancellation date are accounted for, closing inventories of inputs and capital goods are verified, and all input tax credit reversals mandated under Section 29(5) are discharged before the GSTIN is permanently closed.
          </p>
        </section>

        {/* Section 2: Who Needs to File GSTR-10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <UserCheck className="w-5 h-5 text-emerald-600" />
            <span>Who Needs to File GSTR-10?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            The legal obligation to file Form GSTR-10 arises under specific statutory circumstances:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Entities Required to File GSTR-10</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Voluntary Cancellation:</strong> Any taxpayer who applied for surrender in Form GST REG-16 and received an order in Form GST REG-19.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Suo-Moto Departmental Cancellation:</strong> Any taxpayer whose registration was cancelled by the proper officer under Section 29(2) for default.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Zero Inventory Entities:</strong> Taxpayers who hold zero closing stock, raw materials, or machinery must still submit a "Nil GSTR-10".</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2 mb-2">
                <Ban className="w-4 h-4 text-rose-500" />
                <span>Who is NOT Required to File GSTR-10?</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Temporary Suspension:</strong> Entities whose registration is suspended under Rule 21A pending inquiry are not required to file GSTR-10 until a final cancellation order is passed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Composition Scheme:</strong> Taxpayers registered under Section 10 Composition Scheme.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>ISD &amp; Non-Resident Taxpayers:</strong> Input Service Distributors and Non-Resident Taxable Persons.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>TDS / TCS Authorities:</strong> Government deductors under Sections 51 and 52.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: When Do You Need to File GSTR-10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>When Do You Need to File GSTR-10? (Statutory Due Date)</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Timely filing of GSTR-10 is just as important as knowing whether you must file it. Under <strong className="font-semibold text-slate-950">Section 45</strong>, businesses must file Form GSTR-10 within:
          </p>

          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 text-xs text-indigo-950 leading-relaxed space-y-2">
            <div className="font-bold text-sm text-indigo-900">
              The 3-Month Rule under Section 45:
            </div>
            <p>
              Form GSTR-10 must be filed within <strong className="font-semibold">three months</strong> from:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-2xs">
                <span className="font-semibold text-slate-900 block mb-1">Trigger A: Date of Cancellation Order</span>
                <span className="text-slate-600">The date on which the proper officer signs and issues Form GST REG-19.</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-2xs">
                <span className="font-semibold text-slate-900 block mb-1">Trigger B: Effective Date of Cancellation</span>
                <span className="text-slate-600">The date from which the registration officially becomes inactive as stipulated in the order.</span>
              </div>
            </div>
            <p className="pt-1 font-semibold text-indigo-900">
              👉 Rule: The deadline is calculated from whichever of the above two dates is LATER.
            </p>
          </div>
        </section>

        {/* Section 4: Steps to File GSTR-10 */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Layers className="w-5 h-5 text-blue-600" />
            <span>Steps to Complete GSTR-10 Filing Online</span>
          </h2>
          <div className="space-y-3 pt-1">
            {[
              {
                step: "1. Login to the Official GST Portal",
                desc: "Navigate to gst.gov.in and log in using your GSTIN credentials. Your credentials remain valid for final return submission post cancellation.",
              },
              {
                step: "2. Select 'Final Return' under Returns Dashboard",
                desc: "Go to Services > Returns > Final Return (GSTR-10). The portal dashboard displays your cancellation order date and ARN.",
              },
              {
                step: "3. Fill Out Table 8 (Closing Stock Schedules)",
                desc: "Enter details of inputs held in stock, semi-finished goods, finished inventory, and capital goods. If no stock exists, check the 'Nil Return' box.",
              },
              {
                step: "4. Compute & Discharge Rule 44 Liabilities",
                desc: "Offset input credit reversal amounts against your electronic credit ledger or generate an electronic cash ledger challan for payment.",
              },
              {
                step: "5. Submit with Digital Verification (ARN Generation)",
                desc: "Sign using DSC (Class 3) or EVC (Aadhaar OTP). The portal issues an instant 15-digit ARN confirming successful final return filing.",
              },
            ].map((st, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-950 group-hover:text-blue-600 transition-colors">
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

        {/* Section 5: Penalties for Late Filing */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>Possible Penalties for Late Filing of Form GSTR-10</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-1.5 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Coins className="w-4 h-4 text-rose-600" />
                <span>₹200 Per Day Late Fee</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Under Section 47 of the CGST Act, a statutory late fee of ₹200 per day (₹100 CGST + ₹100 SGST) accrues daily for every day of delay past the 3-month statutory window.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-1.5 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Gavel className="w-4 h-4 text-rose-600" />
                <span>Section 62 Assessment Order</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                If the taxpayer fails to respond to Form GSTR-3A within 15 days, the tax officer passes a Best Judgement Assessment order, freezing corporate bank accounts to recover tax dues.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Key Details Required */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Receipt className="w-5 h-5 text-indigo-600" />
            <span>Key Details &amp; Documents Required for Filing</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              "GSTIN & Legal Name of the taxpayer",
              "Effective Date of Registration Cancellation (REG-19)",
              "ARN of the cancellation application",
              "Inventory list of inputs & capital goods held in stock",
              "Purchase tax invoices corresponding to stock",
              "Depreciation schedules for machinery (Rule 44)",
              "CA Valuation Certificate (with UDIN) if Table 8D is used",
              "Class 3 DSC or Aadhaar-registered mobile for OTP",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <Check className="w-4 h-4 text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-700 font-medium group-hover:text-indigo-700 transition-colors">{item}</span>
              </div>
            ))}
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
                q: "If my GST registration is suspended, do I need to file GSTR-10?",
                a: "No. Suspension under Rule 21A is a temporary status while department inquiries are pending. You only file GSTR-10 when a final cancellation order (Form GST REG-19) is formally issued.",
              },
              {
                q: "Can I file GSTR-10 if I have zero stock on the cancellation date?",
                a: "Yes. Taxpayers with zero inventory must file a 'Nil GSTR-10'. Failing to file Nil GSTR-10 still attracts the ₹200/day late fee.",
              },
              {
                q: "What is the consequence of ignoring Form GSTR-3A?",
                a: "Form GSTR-3A gives a final 15-day warning to file GSTR-10. Ignoring it allows the proper officer to initiate Best Judgement Assessment under Section 62, arbitrarily assessing tax liability and freezing bank accounts.",
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
              Zero-Discrepancy Final Closure
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ensure Flawless GSTR-10 Compliance with Merrafilings
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Don't let deregistration errors linger. Our Indirect Tax professionals verify your cancellation timelines, calculate Rule 44 reversals, and complete your final filing smoothly.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/gstr-10"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <span>View GSTR-10 Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 transition-colors cursor-pointer"
              >
                <span>Consult Senior CA</span>
              </button>
            </div>
          </div>
        </section>

      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle="GSTR-10 Who Needs to File & When Assistance"
      />
    </Gstr10GuideLayout>
  );
}
