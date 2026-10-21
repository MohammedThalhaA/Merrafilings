"use client";

import React, { useState } from "react";
import Link from "next/link";
import Form15caGuideLayout from "@/components/Form15caGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Scale,
  Globe2,
  Coins,
  SendHorizontal,
  Landmark,
  FileCheck,
  Building2,
  Calculator,
  ArrowRight,
  Sparkles,
  Layers,
  AlertTriangle,
  Receipt,
  FileSignature,
  Briefcase,
  ChevronDown,
  TrendingUp,
  Cpu,
} from "lucide-react";

export default function ComprehensiveGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Can an Indian resident make an outward payment without Form 15CA and Form 15CB?",
      a: "Only if the remittance falls under the 33 exempted RBI Purpose Codes listed in Rule 37BB(3) (such as import of physical goods under Codes S0101-S0109, personal travel, or overseas education under LRS). For all other commercial, professional, royalty, or technical remittances, banks are legally prohibited from executing wire transfers without Form 15CA.",
    },
    {
      q: "What is the threshold limit that triggers mandatory Form 15CB certification?",
      a: "Form 15CB certification is mandatory whenever the payment or aggregate payments to a non-resident exceed ₹5,00,000 in a financial year AND the payment is chargeable to income tax in India. For non-taxable payments or payments below ₹5 Lakhs, Form 15CB is not required.",
    },
    {
      q: "Who is responsible for filing Form 15CA on the income tax portal?",
      a: "The remitter (the payer in India making the outward payment) is responsible for filing Form 145/15CA. However, if Part C is applicable, the practicing Chartered Accountant must first upload Form 146/15CB, which the remitter then accesses and accepts on the portal.",
    },
    {
      q: "How does the Income Tax Department verify that Form 15CB was truly issued by a CA?",
      a: "Every Form 15CB must carry a system-generated Unique Document Identification Number (UDIN) issued by the Institute of Chartered Accountants of India (ICAI). The income tax e-filing portal automatically cross-validates the CA membership number and UDIN in real time.",
    },
    {
      q: "Can Form 15CA be revised or cancelled after submission?",
      a: "Form 15CA cannot be edited once submitted. However, the remitter can withdraw or cancel Form 15CA on the e-filing portal within 7 days of submission if the bank has not yet processed the outward wire transfer. A fresh Form 15CA must then be filed with updated details.",
    },
  ];

  return (
    <Form15caGuideLayout
      currentSlug="comprehensive-guide-to-15ca-15cb-filing"
      title="Complete Guide to 15CA 15CB Filings in 2023"
      breadcrumbLabel="Complete 15CA 15CB Guide"
      metaPublishedDate="Cross-Border Payments Compliance / AY 2026-27"
      readingTime="9 min read"
      authorName="Merrafilings International Tax Desk"
    >
      {/* Intro Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-blue-50/60 border border-emerald-100 text-slate-800 mb-8">
        <div className="flex items-start gap-3.5">
          <TrendingUp className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
          <div className="text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-semibold text-slate-950">
              Navigating Cross-Border Remittances with Confidence
            </p>
            <p className="text-slate-700">
              In an interconnected global business environment, Indian companies, IT firms, exporters, and startups routinely execute overseas remittances for software subscriptions, marketing commissions, foreign cloud hosting, and technical advisory services.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Every cross-border remittance is governed by the twin mechanisms of <strong>Section 195 of the Income Tax Act</strong> and <strong>Rule 37BB</strong>. This comprehensive guide details the operational roadmap, statutory thresholds, CA certification duties, and critical updates that govern outward payments from India.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: The Basics of 15CA & 15CB */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            1
          </span>
          Understanding 15CA and 15CB: The Fundamental Architecture
        </h2>
        <p>
          Forms 15CA and 15CB operate in tandem to create a secure, transparent compliance trail for funds leaving India. Understanding their distinct legal purposes prevents both transaction delays and costly regulatory disputes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                  Form 15CA
                </h3>
                <span className="text-[11px] text-slate-700 font-semibold uppercase tracking-wider">
                  Remitter's Statutory Declaration
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
              An electronic declaration furnished by the payer confirming that payments to a non-resident comply with Indian withholding tax provisions. Form 15CA collects transaction values, exchange rates, foreign recipient data, and the relevant statutory category.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
              Submitted online via the Income Tax e-Filing portal prior to dispatching banking wire instructions.
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                  Form 15CB
                </h3>
                <span className="text-[11px] text-slate-700 font-semibold uppercase tracking-wider">
                  Chartered Accountant Audit Certification
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
              A professional audit certificate issued by a practicing Chartered Accountant under Section 195(6). The CA verifies the agreement, interprets applicable DTAA provisions, confirms non-existence of a Permanent Establishment (PE), and computes exact withholding tax.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
              Authenticated with an official ICAI Unique Document Identification Number (UDIN).
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Filings Are Necessary */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            2
          </span>
          Why Are 15CA and 15CB Filings Statutorily Mandated?
        </h2>
        <p>
          The Indian Government monitors foreign exchange transactions to maintain economic stability, prevent revenue loss, and fulfill international tax transparency standards:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Globe2 className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors mb-1">
              Tracking Outward Flows
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides the revenue department with real-time digital tracking of capital and operational outflows from Indian bank accounts.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors mb-1">
              Preventing Tax Evasion
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ensures non-resident income taxable in India under Section 9(1) does not escape appropriate source taxation.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Landmark className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-purple-700 transition-colors mb-1">
              Banking Automation
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              AD Category-I banks require automated clearance keys before executing outward telegraphic SWIFT wires.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-amber-700 transition-colors mb-1">
              Corporate Deductibility
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compliance guarantees that foreign expenditure is not disallowed in the remitter's corporate income tax return (ITR-6).
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The 5-Step Filing Roadmap */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            3
          </span>
          Step-by-Step Filing Roadmap for 15CA &amp; 15CB
        </h2>
        <div className="space-y-4 pt-2">
          {[
            {
              step: "Phase 1",
              title: "Determine Requirement & Statutory Category",
              desc: "Evaluate whether the transaction falls under the 33 exempted RBI Purpose Codes. If not exempted, establish whether the aggregate annual remittances to the non-resident exceed ₹5,00,000, and whether the payment is taxable under domestic law or DTAA.",
              badge: "Classification",
            },
            {
              step: "Phase 2",
              title: "Engage Chartered Accountant for 15CB Audit",
              desc: "Provide the commercial invoice, agreement, TRC, Form 10F, and No-PE declarations to a practicing Chartered Accountant. The CA analyzes treaty articles, computes withholding tax, and verifies SBI TT buying rates.",
              badge: "CA Certification",
            },
            {
              step: "Phase 3",
              title: "Chartered Accountant Uploads Form 15CB with UDIN",
              desc: "The CA logs into the Income Tax portal under 'Chartered Accountant' login, completes Form 15CB, enters the ICAI-generated UDIN, and digitally signs using their Class 3 Digital Signature Certificate (DSC).",
              badge: "UDIN Generation",
            },
            {
              step: "Phase 4",
              title: "Remitter Submits Form 15CA (Part C)",
              desc: "The remitter logs into their corporate e-Filing portal, navigates to 'e-File' > 'Income Tax Forms', and selects Form 15CA. The system displays the pending Form 15CB uploaded by the CA. The remitter verifies, accepts, attaches banking details, and e-verifies via DSC or EVC.",
              badge: "Remitter Submission",
            },
            {
              step: "Phase 5",
              title: "Bank Submission & SWIFT Wire Dispatch",
              desc: "The remitter downloads the system-generated Form 15CA acknowledgment receipt and submits it along with Form 15CB, commercial invoice, and completed Form A2 to the Authorised Dealer bank for instant funds release.",
              badge: "Bank Wire Release",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.step}
                </span>
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Comparison Matrix Form 15CA vs Form 15CB */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            4
          </span>
          Comparative Analysis: Form 15CA vs. Form 15CB
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Parameter</th>
                <th className="py-3.5 px-4 font-semibold">Form 15CA</th>
                <th className="py-3.5 px-4 font-semibold">Form 15CB</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Legal Character</td>
                <td className="py-3.5 px-4">Self-declaration undertaking by the remitter</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Independent audit certificate by a Chartered Accountant</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Governing Rule</td>
                <td className="py-3.5 px-4">Rule 37BB(1) of Income Tax Rules</td>
                <td className="py-3.5 px-4">Rule 37BB(2) read with Section 195(6)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Mandatory Threshold</td>
                <td className="py-3.5 px-4">Required for all outward remittances (unless on Rule 37BB list)</td>
                <td className="py-3.5 px-4">Required only if taxable AND remittance exceeds ₹5,00,000</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Portal Filing Order</td>
                <td className="py-3.5 px-4">Filed second (after Form 15CB is accepted)</td>
                <td className="py-3.5 px-4">Uploaded first by the certifying CA</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Authentication Required</td>
                <td className="py-3.5 px-4">DSC or Aadhaar OTP / EVC of the remitter</td>
                <td className="py-3.5 px-4 font-semibold text-blue-700">CA Digital Signature (DSC) + ICAI UDIN</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Penalty for Default</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">₹1,00,000 under Section 271-I</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">Disciplinary liability under ICAI regulations + 271-I</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Common Mistakes */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            5
          </span>
          Frequent Filing Mistakes That Trigger Bank Rejections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {[
            {
              title: "Discrepancy in Invoiced Currency vs. Remitted Currency",
              desc: "Invoicing in USD but instructing the bank to remit in EUR creates currency mismatch queries that require cancellation and refiling.",
            },
            {
              title: "Mismatch with Bank Account Name on Commercial Invoice",
              desc: "If the beneficiary corporate name on the invoice differs from the overseas bank account title, banks will freeze the telegraphic wire.",
            },
            {
              title: "Failure to Secure Valid UDIN for Form 15CB",
              desc: "A Form 15CB uploaded without a verified UDIN is invalid in the eyes of revenue authorities and can trigger automated deficiency notices.",
            },
            {
              title: "Incorrect Application of Exchange Rates",
              desc: "Using average monthly rates instead of the SBI Telegraphic Transfer Buying Rate on the specified date of deduction causes challan reconciliations to fail.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm group-hover:text-rose-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Interactive FAQ Accordion */}
      <section className="space-y-4 mb-8 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          Frequently Asked Questions on 15CA &amp; 15CB
        </h2>
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-semibold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Form15caGuideLayout>
  );
}
