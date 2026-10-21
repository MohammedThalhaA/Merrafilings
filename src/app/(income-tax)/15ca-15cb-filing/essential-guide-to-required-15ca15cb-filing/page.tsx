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
  Monitor,
  Laptop,
  Check,
} from "lucide-react";

export default function EssentialGuideRequiredPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Can a foreign remittance be made without an Indian PAN for the non-resident recipient?",
      a: "Yes. Under Section 206AA read with Rule 37BC, higher withholding tax of 20% does not apply to non-residents without PAN for payments of interest, royalty, fees for technical services (FTS), and capital gains, provided they furnish their overseas Tax Identification Number (TIN), Tax Residency Certificate (TRC), and contact information in their home country.",
    },
    {
      q: "How can businesses overcome portal technical glitches when filing Form 15CA/CB?",
      a: "Keep your emBridge / DSC signer utility updated to the latest version, clear browser cache, and verify that the CA's Class 3 Digital Signature Certificate is properly mapped to their ICAI profile on the e-filing portal. For high-value transactions, file 24–48 hours ahead of bank cut-off times to accommodate portal maintenance windows.",
    },
    {
      q: "What role does the Authorised Dealer (AD) Category-I bank play after Form 15CA is generated?",
      a: "The AD bank acts as the gatekeeper. The bank verifies that the acknowledgment number on Form 15CA is valid, confirms that the transaction value, currency, and beneficiary name match Form A2 and the commercial invoice, and checks that Form 15CB with valid UDIN is attached before releasing foreign exchange over SWIFT.",
    },
    {
      q: "What is the penalty for filing false or inaccurate particulars in Form 15CA?",
      a: "Furnishing inaccurate or fabricated particulars in Form 15CA attracts a statutory penalty of ₹1,00,000 under Section 271-I. Additionally, if tax was under-deducted as a result of willful misrepresentation, under-reporting penalties up to 200% of the tax evaded can be levied under Section 270A.",
    },
    {
      q: "Does Form 15CA need to be filed if the foreign remittance is completely non-taxable?",
      a: "Yes, unless the transaction is listed among the 33 exempted RBI Purpose Codes in Rule 37BB(3). For other non-taxable payments, Part D of Form 15CA must be filed as a self-declaration stating the legal grounds under the Income Tax Act or DTAA why no tax is chargeable in India.",
    },
  ];

  return (
    <Form15caGuideLayout
      currentSlug="essential-guide-to-required-15ca15cb-filing"
      title="15CA-15CB Filing Online in India Compliance Guide"
      breadcrumbLabel="15CA-15CB Online Compliance Guide"
      metaPublishedDate="Cross-Border E-Filing Protocol / AY 2026-27"
      readingTime="8 min read"
      authorName="Merrafilings International Tax Desk"
    >
      {/* Intro Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-blue-50/60 border border-emerald-100 text-slate-800 mb-8">
        <div className="flex items-start gap-3.5">
          <Monitor className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
          <div className="text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-semibold text-slate-950">
              End-to-End Digital Workflow for Cross-Border Remittances
            </p>
            <p className="text-slate-700">
              Cross-border payments from India require aligning domestic tax mandates under <strong>Section 195 of the Income Tax Act</strong> with Reserve Bank of India foreign exchange regulations under <strong>FEMA</strong>. The Income Tax Department's e-Filing portal provides an entirely digital pipeline for uploading, verifying, and certifying foreign remittance declarations.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              This compliance guide walks you through the 5-step operational filing protocol, key digital updates, technical troubleshooting strategies, and best practices to ensure unhindered overseas wire transfers.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Overview */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            1
          </span>
          The Operational Essence of 15CA &amp; 15CB Online Filing
        </h2>
        <p>
          The online submission of Form 15CA and Form 15CB bridges the tax authorities, remitting businesses, practicing Chartered Accountants, and Authorised Dealer Category-I banks into a unified digital verification loop:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                Form 15CA E-Declaration
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Executed by the remitter on the e-filing portal. Captures PAN/TAN identifiers, non-resident payee KYC, invoice particulars, SBI TT buying rates, and tax deduction status under Parts A, B, C, or D.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                Form 15CB Digital Audit
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Certified by an independent Chartered Accountant. Validates contract terms, verifies DTAA tax residency eligibility, confirms PE absence, and authenticates the filing with a real-time ICAI UDIN.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Step-by-Step Guide */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            2
          </span>
          Step-by-Step Online Filing Execution Protocol
        </h2>
        <div className="space-y-4 pt-2">
          {[
            {
              step: "Step 1",
              title: "Identify Transaction Type & Check Rule 37BB Exemptions",
              desc: "Determine if the payment falls under the 33 exempted RBI Purpose Codes (e.g. import of physical goods, personal education, tourism). If exempt, no forms are needed. If not exempt, calculate the cumulative financial year remittance value to verify if it exceeds the ₹5,00,000 threshold.",
            },
            {
              step: "Step 2",
              title: "Compile & Verify Comprehensive Documentation",
              desc: "Gather the commercial invoice, signed contract, foreign payee Tax Identification Number (TIN), Tax Residency Certificate (TRC), electronically submitted Form 10F, and No-PE declarations. Reconcile currencies and payment terms.",
            },
            {
              step: "Step 3",
              title: "Chartered Accountant Uploads Form 15CB with UDIN",
              desc: "The practicing CA logs into the income tax portal, completes the statutory sections of Form 15CB (nature of payment, relevant DTAA article, rate of deduction), generates an ICAI UDIN, and submits the certificate using Class 3 DSC.",
            },
            {
              step: "Step 4",
              title: "Remitter E-Files Form 15CA (Part C or Appropriate Part)",
              desc: "The remitter accesses the e-filing portal, selects Form 15CA, connects the pending Form 15CB certificate, inputs the remitter bank details (IFSC, BSR code), and digitally signs using DSC or Aadhaar EVC.",
            },
            {
              step: "Step 5",
              title: "Submit Acknowledgment to Authorised Dealer Bank",
              desc: "Download the signed Form 15CA acknowledgment receipt and deliver it along with Form 15CB, commercial invoice, and completed FEMA Form A2 to the AD bank. The bank verifies the acknowledgment on the tax portal and transmits the wire.",
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
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Recent Developments */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            3
          </span>
          Recent Digital &amp; Regulatory Enhancements in 15CA-15CB Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Laptop className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors mb-1">
              Mandatory E-Portal Form 10F
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Non-residents claiming treaty benefits without complete TRCs must digitally file Form 10F on the e-filing portal. Physical manual declarations are no longer accepted.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors mb-1">
              Real-Time UDIN Validation
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              The e-filing portal verifies the CA's UDIN directly against the ICAI repository in real time, preventing unauthorized certification.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Landmark className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-purple-700 transition-colors mb-1">
              API-Linked Bank Verification
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Major Authorised Dealer banks now leverage direct APIs to authenticate Form 15CA acknowledgments before queuing outward telegraphic wire transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Common Challenges & Solutions */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            4
          </span>
          Common Challenges and How to Overcome Them
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <Monitor className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-base group-hover:text-rose-700 transition-colors mb-2">
              Technical Portal Glitches
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Frequent DSC signer utility timeouts and portal downtime can delay urgent cross-border supplier settlements.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
              <strong>Solution:</strong> Update emBridge drivers, register DSC fresh on portal, and initiate filings 24 hours prior to bank wire cut-off.
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <FileCheck className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-base group-hover:text-amber-700 transition-colors mb-2">
              Documentation Discrepancies
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Minor differences between overseas entity name on TRC vs. commercial invoice or SWIFT instructions halt bank transfers.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
              <strong>Solution:</strong> Perform pre-filing KYC reconciliation. Confirm that invoice, TRC, Form 10F, and bank accounts reflect identical legal names.
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-base group-hover:text-purple-700 transition-colors mb-2">
              Complex Treaty Characterization
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Distinguishing between Royalty, Fees for Technical Services (FTS), and Business Profits under nuanced DTAA clauses is legally complex.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
              <strong>Solution:</strong> Rely on Merrafilings' international tax CAs who examine relevant judicial precedents and bilateral treaty protocols.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive FAQ Accordion */}
      <section className="space-y-4 mb-8 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          Frequently Asked Questions on 15CA &amp; 15CB Online Compliance
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
