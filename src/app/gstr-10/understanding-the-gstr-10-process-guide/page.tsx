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
  Activity,
} from "lucide-react";

export default function UnderstandingTheGstr10ProcessGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Gstr10GuideLayout
      currentSlug="understanding-the-gstr-10-process-guide"
      title="Understanding the GSTR 10 Process: A Comprehensive Guide"
      breadcrumbLabel="GSTR-10 Process Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <div className="space-y-10 text-slate-900 leading-relaxed">
        
        {/* Executive Overview Banner */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border border-indigo-100 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Comprehensive Legal Framework &amp; Procedural Walkthrough</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-3">
            Understanding the GSTR-10 Process: A Comprehensive Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            The Goods and Services Tax (GST) framework in India has revolutionized corporate taxation, setting clear parameters for the lifecycle of a business from inception to dissolution. Central to this lifecycle is the <strong className="font-semibold text-slate-950">GSTR-10 Process</strong>, specifically crafted for enterprises undergoing deregistration or voluntary surrender. This authoritative manual examines the statutory duties, asset valuation protocols, portal payment channels, and departmental audit safeguards that every taxpayer must implement upon business closure.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/gstr-10"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-xs transition-colors"
            >
              <span>Explore GSTR-10 Filing Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-indigo-600 text-slate-800 text-xs font-medium transition-colors"
            >
              <span>Consult Tax Advocate</span>
            </button>
          </div>
        </section>

        {/* Section 1: What is GSTR 10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>What is Form GSTR-10?</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Form <strong className="font-semibold text-slate-950">GSTR-10</strong> is the statutory "Final Return" mandated under <strong className="font-semibold text-slate-950">Section 45 of the CGST Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 81 of the CGST Rules, 2017</strong>.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            It serves as the definitive legal statement filed by a business whose GST registration has been cancelled or surrendered, capturing all closing stocks of inputs, semi-finished goods, finished merchandise, and capital assets, and discharging the corresponding input tax credit reversals required under Section 29(5).
          </p>
        </section>

        {/* Section 2: Who Needs to File GSTR 10? */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <span>Who Needs to File GSTR-10 (And Exemptions)</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            The legal obligation to file Form GSTR-10 applies to every taxpayer whose GST registration is cancelled—whether on application by the taxpayer (voluntary surrender) or by the tax officer suo-moto.
          </p>

          <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <h4 className="text-xs font-bold text-slate-950 mb-2 group-hover:text-rose-700 transition-colors flex items-center gap-2">
              <Ban className="w-4 h-4 text-rose-500 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Statutory Exemptions under Section 45:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-normal">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Input Service Distributors (ISD)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Non-Resident Taxable Persons (NRTP)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Composition Scheme Taxpayers (Section 10)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>TDS &amp; TCS Deductors (Sections 51 &amp; 52)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Important Deadlines for Filing */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>Important Statutory Deadlines</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            Under Section 45, Form GSTR-10 must be filed within <strong className="font-semibold text-slate-950">three months</strong> from:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1 group-hover:text-indigo-600 transition-colors">
                Criterion A: Cancellation Date
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                The effective date of registration cancellation specified in the official cancellation order.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-xs font-bold text-slate-950 mb-1 group-hover:text-indigo-600 transition-colors">
                Criterion B: Order Date
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                The date of communication of the cancellation order in Form GST REG-19.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 font-semibold pt-1">
            * Statutory Rule: The 3-month timeline is calculated from whichever date occurs later.
          </p>
        </section>

        {/* Section 4: Details Required for Filing */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Receipt className="w-5 h-5 text-blue-600" />
            <span>Details &amp; Data Sets Required for GSTR-10 Filing</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              "Application Reference Number (ARN) of the cancellation application",
              "Cancellation Order details (Form GST REG-19)",
              "Details of inputs held in stock (raw materials)",
              "Details of inputs contained in semi-finished / finished goods",
              "Details of capital goods / plant & machinery held in stock",
              "Purchase tax invoices and bills of entry for stock items",
              "Chartered Accountant Valuation Certificate (Table 8D)",
              "Electronic Credit and Cash Ledger payment vouchers",
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                <Check className="w-4 h-4 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-700 font-medium group-hover:text-blue-700 transition-colors">{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Step-by-Step Guide to Filing */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Step-by-Step Guide to Filing Form GSTR-10</span>
          </h2>
          <div className="space-y-3 pt-1">
            {[
              {
                step: "1. Login to the GST Portal",
                desc: "Navigate to gst.gov.in and log in with your credentials. Go to Services > Returns > Final Return (GSTR-10).",
              },
              {
                step: "2. Furnish Required Inventory Schedules",
                desc: "Enter details in Table 8 (inputs, semi-finished goods, capital machinery). If no stock is held, click the 'Nil Return' checkbox.",
              },
              {
                step: "3. Make Necessary Tax Payments",
                desc: "If any tax liability is due under Section 29(5), discharge it using your credit ledger or generate a challan via the payment portal.",
              },
              {
                step: "4. Review Draft & Submit GSTR-10",
                desc: "Verify all entered details for accuracy against your financial statements, then proceed to submit.",
              },
              {
                step: "5. Authenticate via DSC / EVC (File GSTR-10)",
                desc: "Sign using Class 3 Digital Signature Certificate or Aadhaar EVC. An ARN is generated marking the final, irrevocable completion of the process.",
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

        {/* Section 6: Consequences of Not Filing GSTR 10 */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>Consequences of Not Filing Form GSTR-10</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-1.5 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Coins className="w-4 h-4 text-rose-600" />
                <span>Statutory Late Fee under Section 47</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                A late fee of ₹200 per day (₹100 CGST + ₹100 SGST) applies for each day the default continues beyond the 3-month statutory window.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/20 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h4 className="text-sm font-semibold text-rose-950 mb-1.5 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                <Gavel className="w-4 h-4 text-rose-600" />
                <span>Departmental Notice &amp; Section 62 Order</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                The tax authority issues a notice in Form GSTR-3A giving 15 days to file. Defaulting triggers a Best Judgement Assessment under Section 62 with recovery proceedings.
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
                q: "What is the difference between GSTR-9 and GSTR-10?",
                a: "GSTR-9 is an annual return filed every financial year by active taxpayers with turnover exceeding ₹2 Crores. GSTR-10 is a one-time final return filed only when GST registration is cancelled or surrendered.",
              },
              {
                q: "Do I have to file GSTR-10 if my business never conducted any sales?",
                a: "Yes. Even if a business had zero sales and zero closing stock, filing a 'Nil GSTR-10' is legally compulsory under Section 45 to formally complete the cancellation.",
              },
              {
                q: "Can GSTR-10 be revised after filing?",
                a: "No. Form GSTR-10 cannot be amended or revised once filed. It is crucial to get closing stock schedules and tax calculations validated by a professional beforehand.",
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
              End-to-End Final Return Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Execute Your GSTR-10 Process with Confidence
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              From stock compilation and Rule 44 calculations to senior CA certification and portal filing, Merrafilings provides comprehensive legal and technical support for your business exit.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/gstr-10"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <span>View GSTR-10 Services</span>
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
        serviceTitle="GSTR-10 Comprehensive Process Guide Assistance"
      />
    </Gstr10GuideLayout>
  );
}
