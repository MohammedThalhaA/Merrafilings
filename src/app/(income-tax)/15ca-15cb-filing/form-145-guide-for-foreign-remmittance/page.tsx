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
  Info,
} from "lucide-react";

export default function Form145GuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the key difference between Form 15CA and Form 145 under the Income Tax Act, 2025?",
      a: "Form 145 is the updated statutory renumbering of Form 15CA under the Income Tax Act, 2025. It retains the same core legal objective: an electronic undertaking submitted by a remitter prior to transferring funds overseas. However, the new framework streamlines duplicate filings—notably, if an Assessing Officer order is held under Part B, filing Part C / Form 146 is no longer required.",
    },
    {
      q: "What is Form 146 and how does it relate to Form 15CB?",
      a: "Form 146 is the direct successor to Form 15CB. It is a formal certificate issued by an independent practicing Chartered Accountant confirming the nature of the cross-border payment, taxability under Indian domestic law, applicability of Double Taxation Avoidance Agreements (DTAA), and the exact withholding tax (TDS) computed with a valid UDIN.",
    },
    {
      q: "Can I file Form 145 after making the foreign wire transfer through my bank?",
      a: "No. Under Section 195(6) and Rule 37BB, Form 145 must be filed BEFORE the remittance is executed. Authorised Dealer (AD) banks are legally prohibited from processing outward foreign remittances without receiving the signed Form 145 acknowledgment and CA certification.",
    },
    {
      q: "When is CA certification in Form 146 mandatory before filing Form 145?",
      a: "Form 146 is mandatory only when filing Part C of Form 145. This applies when the outward remittance exceeds ₹5,00,000 in aggregate during the financial year and the sum is chargeable to income tax in India, and no lower/nil withholding certificate has been obtained from the Assessing Officer.",
    },
    {
      q: "What happens if an incorrect part of Form 145 is selected during filing?",
      a: "Selecting an incorrect part (such as filing Part D for taxable payments or filing Part A when payments exceed ₹5 Lakhs) renders the remittance undertaking legally invalid. It can result in a flat ₹1,00,000 penalty under Section 271-I, 100% expenditure disallowance under Section 40(a)(i), and scrutiny notices from the International Taxation Directorate.",
    },
  ];

  return (
    <Form15caGuideLayout
      currentSlug="form-145-guide-for-foreign-remmittance"
      title="Understanding Form 145/146 under the Income Tax Act, 2025 for Foreign Remittance"
      breadcrumbLabel="Form 145 & 146 Guide"
      metaPublishedDate="Income Tax Act 2025 / AY 2026-27 Compliant"
      readingTime="9 min read"
      authorName="Merrafilings International Tax Desk"
    >
      {/* Intro Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-blue-50/60 border border-emerald-100 text-slate-800 mb-8">
        <div className="flex items-start gap-3.5">
          <Sparkles className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
          <div className="text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-semibold text-slate-950">
              Statutory Transition to Form 145 &amp; Form 146
            </p>
            <p className="text-slate-700">
              With the rollout of the <strong>Income Tax Act, 2025</strong>, the Central Board of Direct Taxes (CBDT) systematically modernized and renumbered statutory tax forms. The longstanding <strong>Form 15CA is renumbered as Form 145</strong>, while the Chartered Accountant certification <strong>Form 15CB is renumbered as Form 146</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              While the operational workflow remains anchored in cross-border tracking under Section 195, several critical duplication rules have been relaxed—making it imperative for corporate remitters, importers, startups, and individuals to understand the new filing architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: What is Form 145 */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            1
          </span>
          What is Form 145 under the Income Tax Act, 2025?
        </h2>
        <p>
          <strong>Form 145</strong> is an electronic statutory undertaking required by the Income Tax Department from any person or entity in India intending to remit funds overseas to a non-resident or foreign corporation.
        </p>
        <p>
          Before an Authorised Dealer (AD Category-I) bank can release foreign exchange or execute an outward SWIFT wire transfer, Form 145 must be furnished online to establish that statutory withholding taxes (TDS) have been properly deducted or that the remittance is legally exempt from Indian tax jurisdiction.
        </p>

        {/* 5 Core Information Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors mb-1.5">
              Parties Identification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full legal names, PAN/TAN of the remitter, overseas address, country of residence, and Tax Identification Number (TIN) of the foreign beneficiary.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all">
              <Receipt className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors mb-1.5">
              Remittance Purpose &amp; Nature
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exact commercial nature of payment, relevant RBI Purpose Code, and technical characterization (e.g., Royalty, FTS, Capital Gain, Business Profit).
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 transition-all">
              <Coins className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors mb-1.5">
              Financial Quantification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gross remitted sum denominated in foreign currency (USD, EUR, GBP, SGD, etc.), TT buying rate applied, and the converted equivalent in Indian Rupees (INR).
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white group-hover:scale-110 transition-all">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors mb-1.5">
              Taxability &amp; DTAA Relief
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detailed assessment of whether income accrues or arises in India, domestic tax rates under Section 195, and lower treaty rate benefits claimed under relevant DTAA articles.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 transition-all">
              <Calculator className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-rose-700 transition-colors mb-1.5">
              TDS Calculation &amp; Deposit
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Applicable withholding rate, surcharge, Health &amp; Education Cess, gross TDS deducted, BSR code, challan serial number, and deposit date.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110 transition-all">
              <FileSignature className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-teal-700 transition-colors mb-1.5">
              CA Form 146 Integration
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Linking of the Chartered Accountant certification Form 146 (earlier 15CB) with ICAI-generated UDIN and Chartered Accountant membership details.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Who Needs to File Form 145 */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            2
          </span>
          Who Needs to File Form 145?
        </h2>
        <p>
          Any individual, firm, LLP, corporate enterprise, or non-profit entity resident in India initiating an overseas wire payment to a non-resident must file Form 145. Common transaction categories requiring mandatory compliance include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          {[
            {
              title: "Consultancy & Advisory Fees",
              desc: "Payments to overseas consultants, management advisors, or overseas legal counsel for professional services.",
            },
            {
              title: "Fees for Technical Services (FTS)",
              desc: "Technical engineering fees, architectural drawings, software coding services, and managerial expertise.",
            },
            {
              title: "Royalty & Trademark Licensing",
              desc: "Payments for intellectual property usage, brand franchising, patent rights, technical know-how, and copyrights.",
            },
            {
              title: "Software Licenses & SaaS Subscriptions",
              desc: "Cloud infrastructure charges (AWS, Azure, GCP), software distribution fees, and enterprise digital tool subscriptions.",
            },
            {
              title: "Agency & Sales Commissions",
              desc: "Remittances to foreign sales agents, international commission brokers, and overseas business referral partners.",
            },
            {
              title: "Interest & External Commercial Borrowing",
              desc: "Outward interest remittances on foreign loans, overseas vendor credits, bonds, or inter-company credit lines.",
            },
            {
              title: "Professional Service Fees",
              desc: "Remittances to foreign artists, speakers, keynote trainers, clinical trial researchers, and domain specialists.",
            },
            {
              title: "Capital Gains & Share Repatriation",
              desc: "Payment of consideration for transfer of Indian assets, shares of domestic companies, or liquidation proceeds.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
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

      {/* Section 3: The 4 Parts of Form 145 */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            3
          </span>
          The Four Distinct Parts of Form 145
        </h2>
        <p>
          Form 145 is divided into four separate parts based on payment value, domestic tax chargeability, and whether lower deduction approvals have been granted:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Part A */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wider group-hover:bg-blue-600 group-hover:text-white transition-colors">
                Part A
              </span>
              <span className="text-xs font-semibold text-slate-700">Small Taxable Remittances</span>
            </div>
            <h3 className="font-semibold text-slate-950 text-base mb-2 group-hover:text-blue-700 transition-colors">
              Taxable Remittances Up to ₹5 Lakhs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Applicable when the remittance is chargeable to income tax in India and the aggregate of such payments during the financial year does not exceed <strong>₹5,00,000</strong>.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Self-declaration by remitter only</span>
              </div>
              <p className="text-[11px] text-slate-700 pl-5">
                No CA certificate (Form 146) required. Basic invoice details and TDS challan are reported.
              </p>
            </div>
          </div>

          {/* Part B */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 uppercase tracking-wider group-hover:bg-purple-600 group-hover:text-white transition-colors">
                Part B
              </span>
              <span className="text-xs font-semibold text-slate-700">Assessing Officer Certificate</span>
            </div>
            <h3 className="font-semibold text-slate-950 text-base mb-2 group-hover:text-purple-700 transition-colors">
              Remittances with Lower/Nil AO Order
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Applicable where the remittance exceeds <strong>₹5,00,000</strong> and the payer or payee has obtained an order or certificate from the Assessing Officer under Section 195(2), 195(3), or Section 197.
            </p>
            <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-purple-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-purple-950">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Major Reform: Eliminates Form 146!</span>
              </div>
              <p className="text-[11px] text-purple-800 pl-5">
                Under the new law, filing Part B with an AO certificate number waives the need to file Part C or obtain Form 146, ending prior duplications.
              </p>
            </div>
          </div>

          {/* Part C */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                Part C
              </span>
              <span className="text-xs font-semibold text-slate-700">CA Audit Mandate</span>
            </div>
            <h3 className="font-semibold text-slate-950 text-base mb-2 group-hover:text-emerald-700 transition-colors">
              Taxable Remittances Exceeding ₹5 Lakhs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Applicable when the remittance exceeds <strong>₹5,00,000</strong>, the payment is taxable in India, and no AO certificate is available. A Chartered Accountant must issue <strong>Form 146</strong> (earlier Form 15CB).
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Requires UDIN-Certified Form 146</span>
              </div>
              <p className="text-[11px] text-slate-700 pl-5">
                The CA uploads Form 146 first. The remitter then accepts the certificate on the portal to generate Part C.
              </p>
            </div>
          </div>

          {/* Part D */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 uppercase tracking-wider group-hover:bg-teal-600 group-hover:text-white transition-colors">
                Part D
              </span>
              <span className="text-xs font-semibold text-slate-700">Non-Taxable Declarations</span>
            </div>
            <h3 className="font-semibold text-slate-950 text-base mb-2 group-hover:text-teal-700 transition-colors">
              Payments Not Chargeable to Indian Tax
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Applicable where the remittance is <strong>not chargeable to tax in India</strong> under the provisions of the Income Tax Act or applicable DTAA (other than payments covered under the 33 exempted list of Rule 37BB).
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Self-declaration of non-taxability</span>
              </div>
              <p className="text-[11px] text-slate-700 pl-5">
                Detailed rationale for non-taxability must be stated. No CA certificate is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Form 146 Deep Dive */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            4
          </span>
          Form 146 – The Chartered Accountant Certification (New Form 15CB)
        </h2>
        <p>
          Form 146 is the official certificate signed and uploaded by an independent practicing Chartered Accountant under Section 195(6). It provides statutory assurance that the remitter has appropriately evaluated international tax laws before transferring funds abroad.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Aspect</th>
                <th className="py-3.5 px-4 font-semibold">Under Prior Law (Form 15CB)</th>
                <th className="py-3.5 px-4 font-semibold">Under Income Tax Act, 2025 (Form 146)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Form Number</td>
                <td className="py-3.5 px-4">Form 15CB</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Form 146</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Associated Remitter Form</td>
                <td className="py-3.5 px-4">Form 15CA (Part C)</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Form 145 (Part C)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Filing When AO Order Exists</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">Often required dual filings</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Completely Exempted under Part B</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">ICAI UDIN Authentication</td>
                <td className="py-3.5 px-4">Mandatory within 15 days</td>
                <td className="py-3.5 px-4 font-medium text-slate-900">Mandatory at time of e-submission</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">DTAA Relief Scrutiny</td>
                <td className="py-3.5 px-4">TRC + Form 10F manual validation</td>
                <td className="py-3.5 px-4 font-medium text-slate-900">Electronic Form 10F cross-referenced on portal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Documents Required */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            5
          </span>
          Mandatory Documentation Checklist for Form 145 &amp; 146
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            {
              title: "1. Remitter Identifiers",
              desc: "PAN card, TAN registration, active e-Filing portal login credentials, and Indian bank account details.",
            },
            {
              title: "2. Overseas Payee Details",
              desc: "Legal name, registered overseas address, contact details, country of residence, and overseas Tax Identification Number (TIN).",
            },
            {
              title: "3. Agreement & Commercial Invoice",
              desc: "Executed master service agreement (MSA), purchase order, detailed invoice stating scope of services, currency, and value.",
            },
            {
              title: "4. Tax Residency Certificate (TRC)",
              desc: "Valid TRC issued by the home tax authority of the non-resident country covering the relevant financial period.",
            },
            {
              title: "5. Electronic Form 10F",
              desc: "Form 10F verified online by the foreign entity through their non-resident e-Filing account if TRC lacks statutory particulars.",
            },
            {
              title: "6. No Permanent Establishment (PE)",
              desc: "Declaration from non-resident confirming lack of fixed place of business, service PE, or agency PE in India.",
            },
            {
              title: "7. Beneficial Ownership Undertaking",
              desc: "Undertaking confirming that the foreign recipient is the true beneficial owner of the income and not a conduit entity.",
            },
            {
              title: "8. Challan 281 for TDS Deposit",
              desc: "Challan receipt evidencing payment of deducted TDS under Minor Head 200/400 (if payment is taxable).",
            },
            {
              title: "9. Form 146 CA Certificate",
              desc: "UDIN-authenticated Form 146 certificate from a practicing Chartered Accountant (for Part C filings).",
            },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h4 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors mb-1">
                {doc.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {doc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Step-by-Step Filing Workflow */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            6
          </span>
          Step-by-Step E-Filing Procedure for Form 145 &amp; Form 146
        </h2>
        <div className="space-y-3.5 pt-2">
          {[
            {
              step: "Step 1",
              title: "Evaluate Taxability & Withholding Rates",
              desc: "Examine whether the payment is deemed to accrue or arise in India under Section 9(1). Review the applicable DTAA provisions between India and the recipient's tax jurisdiction to identify beneficial withholding rates.",
            },
            {
              step: "Step 2",
              title: "Chartered Accountant Uploads Form 146 (If Part C Applicable)",
              desc: "Engage a practicing Chartered Accountant. The CA logs into the income tax portal, completes Form 146 with remittance details, currency rates, DTAA articles, generates an ICAI UDIN, and submits the form digitally.",
            },
            {
              step: "Step 3",
              title: "Remitter Accesses Portal & Navigates to Form 145",
              desc: "The remitter logs into the e-Filing portal, navigates to 'e-File' > 'Income Tax Forms' > 'File Income Tax Forms', and selects Form 145 (Forms as per Income Tax Act, 2025).",
            },
            {
              step: "Step 4",
              title: "Select the Applicable Part (A, B, C, or D)",
              desc: "Choose Part A (taxable <= ₹5L), Part B (AO order held), Part C (taxable > ₹5L with CA cert), or Part D (non-taxable). For Part C, the system prompts the remitter to accept the pending Form 146 uploaded by the CA.",
            },
            {
              step: "Step 5",
              title: "Furnish Bank & Outward Wire Particulars",
              desc: "Input remitter bank branch details, IFSC/SWIFT code, BSR code, proposed date of remittance, and exact destination country.",
            },
            {
              step: "Step 6",
              title: "E-Verify & Submit Form 145",
              desc: "Verify the form using Digital Signature Certificate (DSC) for companies/LLPs, or Aadhaar OTP / EVC for eligible individuals. Once submitted, download the signed Form 145 acknowledgment and provide it to your Authorised Dealer (AD) bank along with Form A2.",
            },
          ].map((st, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {st.step}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Pitfalls & Mistakes */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            7
          </span>
          Critical Compliance Pitfalls &amp; Mistakes to Avoid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {[
            {
              title: "Selecting Incorrect Part of Form 145",
              desc: "Filing Part D (non-taxable) for payments that are actually taxable under Indian laws (e.g., software or technical support) can trigger severe misreporting penalties under Section 270A and 271-I.",
            },
            {
              title: "Filing Post-Remittance",
              desc: "Form 145 is a mandatory condition precedent. Submitting the form after money has already left India is a procedural non-compliance that banks must report to the RBI and Income Tax Directorate.",
            },
            {
              title: "Ignoring DTAA Surcharge & Cess Rules",
              desc: "When claiming DTAA treaty rates, surcharge and Health & Education Cess cannot be added unless specified by treaty terms. Miscalculating tax rates results in overpayment or short-deduction notices.",
            },
            {
              title: "Absence of Valid TRC & Form 10F",
              desc: "Claiming lower treaty tax rates without securing an active Tax Residency Certificate (TRC) covering the remitted fiscal year invalidates treaty relief, exposing the remitter to domestic 20%+ rates.",
            },
            {
              title: "Currency Conversion Discrepancies",
              desc: "Applying spot currency rates instead of the SBI telegraphic transfer buying rate (TT buying rate) on the specified date of deduction creates challan reconciliation mismatches.",
            },
            {
              title: "Failing to Deposit TDS Before Remittance",
              desc: "TDS must be deducted at source and deposited under Challan 281 prior to or simultaneously with generating Form 145 Part C.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
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

      {/* Section 8: Interactive FAQ Accordion */}
      <section className="space-y-4 mb-8 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          Frequently Asked Questions on Form 145 &amp; Form 146
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
