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
  ExternalLink,
  BookOpen,
} from "lucide-react";

export default function EssentialDocumentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Why is a Tax Residency Certificate (TRC) mandatory for claiming DTAA benefits?",
      a: "Under Section 90(4) of the Income Tax Act, an assessee not being a resident in India cannot claim relief under any Double Taxation Avoidance Agreement (DTAA) unless they obtain a Tax Residency Certificate (TRC) containing prescribed particulars from the Government of the country of which they are a resident.",
    },
    {
      q: "Can a foreign party submit a physical Form 10F, or is electronic filing mandatory?",
      a: "As per CBDT notification, Form 10F must be submitted electronically through the Income Tax e-Filing portal. Non-residents without a PAN can register on the portal without PAN under Category 'Non-Residents not having PAN and not required to have PAN' to digitally furnish and sign Form 10F.",
    },
    {
      q: "What is the consequence of not maintaining an agreement/contract for foreign remittance?",
      a: "Without a valid written agreement or contract defining the scope of work, the tax authorities and Chartered Accountants cannot accurately determine whether the payment constitutes Fees for Technical Services (FTS), Royalty, or Business Income. This ambiguity frequently results in higher domestic withholding (e.g. 20% + surcharge & cess) or dispute under scrutiny.",
    },
    {
      q: "What is Form A2 and how is it related to Form 15CA and Form 15CB?",
      a: "Form A2 is a FEMA document required by Authorised Dealer (AD) Category-I banks under Reserve Bank of India (RBI) regulations for buying foreign currency for outward payments. Form 15CA and Form 15CB represent tax clearance under the Income Tax Act, whereas Form A2 represents foreign exchange clearance under FEMA.",
    },
    {
      q: "What happens if bank account details on the invoice do not match the wire transfer instructions?",
      a: "Authorised Dealer banks will halt outward remittance processing immediately if there is a discrepancy between the beneficiary name or bank account on the commercial invoice and the SWIFT wire instructions. Any amendment requires revised Form 15CA and Form 15CB certification.",
    },
  ];

  return (
    <Form15caGuideLayout
      currentSlug="essential-documents-for-15ca15cb-filing-guide"
      title="Documents Required for 15CA-15CB Filing: A Comprehensive Guide"
      breadcrumbLabel="Documents Required"
      metaPublishedDate="Cross-Border Tax Evidence / AY 2026-27"
      readingTime="8 min read"
      authorName="Merrafilings International Tax Desk"
    >
      {/* Intro Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-blue-50/60 border border-emerald-100 text-slate-800 mb-8">
        <div className="flex items-start gap-3.5">
          <BookOpen className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
          <div className="text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-semibold text-slate-950">
              Crucial Documentary Evidence for Cross-Border Transactions
            </p>
            <p className="text-slate-700">
              Filing Form 15CA and Form 15CB is not merely an online form-filling formality. It is an audit-backed statutory exercise. Both the Income Tax Department and Authorised Dealer (AD) banks require unassailable documentary evidence to substantiate payment classification, verify treaty eligibility, and prevent tax leakage on outward remittances.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              This guide provides an exhaustive checklist of mandatory documents, international tax certificates, and procedural verifications required before initiating your foreign remittance.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Understanding 15CA & 15CB Roles */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            1
          </span>
          Understanding Forms 15CA &amp; 15CB: The Evidentiary Foundation
        </h2>
        <p>
          Whenever an Indian resident remits money outside India, two interconnected forms act as statutory proof of income tax compliance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                  Form 15CA (Remitter Undertaking)
                </h3>
                <span className="text-[11px] text-slate-700 uppercase tracking-wider font-semibold">
                  Rule 37BB / Section 195(6)
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
              An electronic self-declaration filed by the remitter setting out transaction particulars, overseas party details, remittance amount, and tax deducted at source. It confirms whether the payment is taxable in India and under which statutory part the filing is executed.
            </p>
            <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 pt-2 border-t border-slate-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mandatory for all bank wire transfers</span>
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                  Form 15CB (CA Audit Certificate)
                </h3>
                <span className="text-[11px] text-slate-700 uppercase tracking-wider font-semibold">
                  Section 195(6) / ICAI UDIN Mandate
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
              A formal certification issued by an independent Chartered Accountant certifying the nature of the transaction, taxability under Indian domestic laws, applicability of Double Taxation Avoidance Agreements (DTAA), and accuracy of withholding rates.
            </p>
            <div className="text-[11px] text-blue-800 font-semibold flex items-center gap-1.5 pt-2 border-t border-slate-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Mandatory for taxable remittances &gt; ₹5 Lakhs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Are These Documents Needed */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            2
          </span>
          Why is Comprehensive Documentation Essential?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Landmark className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors mb-1.5">
              AD Bank Release Prerequisite
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under RBI directions, Authorised Dealer Category-I banks will decline outward SWIFT wire transfers unless verified Form 15CA, Form 15CB, and matching invoices are submitted.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors mb-1.5">
              Legitimate DTAA Treaty Relief
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Taxpayers can reduce withholding taxes from 20%–40% down to 5%–10% under bilateral treaties only if valid TRC, Form 10F, and No-PE certificates are on record.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-rose-700 transition-colors mb-1.5">
              Defense Against Penalties
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete documentation prevents Section 271-I penalties (₹1,00,000 per default) and protects corporate remitters from Section 40(a)(i) 100% tax disallowance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The 10 Essential Documents */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            3
          </span>
          The 10 Essential Documents for Form 15CA &amp; 15CB
        </h2>
        <p>
          Ensure the following comprehensive dossier is compiled and vetted prior to submitting Form 15CB and Form 15CA on the e-filing portal:
        </p>

        <div className="space-y-4 pt-2">
          {/* Doc 1 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Receipt className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    1. Commercial Invoice &amp; Remittance Schedule
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Mandatory
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The commercial invoice issued by the overseas beneficiary must detail:
                </p>
                <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
                  <li>Unique invoice number, invoice date, and due payment date.</li>
                  <li>Clear, descriptive breakdown of services rendered or goods supplied.</li>
                  <li>Invoiced currency (e.g., USD, EUR, GBP) and gross billing amount.</li>
                  <li>Payment settlement terms and overseas remittee banking instructions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Doc 2 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileSignature className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                    2. Underlying Commercial Agreement / Contract / PO
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Mandatory for Audits
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The signed Master Services Agreement (MSA), software licensing agreement, technical collaboration contract, or formal purchase order. This contract establishes whether intellectual property rights are granted, where services are physically performed, and who bears Indian withholding tax (tax gross-up provisions).
                </p>
              </div>
            </div>
          </div>

          {/* Doc 3 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-purple-700 transition-colors">
                    3. Tax Residency Certificate (TRC)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    Section 90(4) Mandate
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An authentic Tax Residency Certificate issued by the tax revenue authority of the overseas country where the payee resides (e.g., Form 6166 from the US IRS, HMRC certificate from the UK, IRAS certificate from Singapore). It must explicitly state the payee is a tax resident for the calendar/fiscal year in which the payment is made.
                </p>
              </div>
            </div>
          </div>

          {/* Doc 4 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-amber-700 transition-colors">
                    4. Electronic Form 10F Self-Declaration
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Mandatory E-Portal Filing
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under Section 90(5) and Rule 21AB, if the TRC does not contain all specified particulars (status, nationality, overseas tax identification number, period of residence, and residential address), the non-resident must electronically submit Form 10F on the Income Tax Department e-Filing portal.
                </p>
              </div>
            </div>
          </div>

          {/* Doc 5 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    5. No Permanent Establishment (No-PE) Declaration
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    DTAA Article 5 / 7
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A formal written confirmation from an authorised signatory of the foreign recipient affirming that they do not possess a Permanent Establishment (PE), fixed place of business, service PE, or dependent agent in India during the relevant fiscal year. Under Article 7 of tax treaties, business profits cannot be taxed in India without a PE.
                </p>
              </div>
            </div>
          </div>

          {/* Doc 6 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Scale className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-rose-700 transition-colors">
                    6. Beneficial Ownership Certificate
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Anti-Conduit Verification
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A certificate affirming that the recipient is the true beneficial owner of the funds remitted and has the absolute economic right to use and enjoy the income, rather than acting as a nominee, agent, or conduit entity for a third-party located in a non-treaty jurisdiction.
                </p>
              </div>
            </div>
          </div>

          {/* Doc 7 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-500/10 hover:bg-indigo-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-indigo-700 transition-colors">
                    7. Bank Details of Remitter &amp; Beneficiary (SWIFT / BIC)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Banking Settlement
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Detailed banking identifiers including Remitter Indian Bank name, branch IFSC code, and BSR code; Beneficiary Overseas Bank name, foreign branch address, IBAN or account number, SWIFT/BIC code, and intermediary routing numbers.
                </p>
              </div>
            </div>
          </div>

          {/* Doc 8 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    8. Challan 281 for TDS Deposit (If Taxable)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Tax Treasury Proof
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Where withholding tax is applicable, the paid Challan 281 bearing the BSR code, date of deposit, and challan serial number under Minor Head 200 (Company) or 400 (Non-Company). The challan amount must match the TDS calculated in Form 15CB.
                </p>
              </div>
            </div>
          </div>

          {/* Doc 9 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 hover:bg-cyan-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <FileSignature className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                    9. Form 15CB CA Certificate with Valid UDIN
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                    ICAI Authentication
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Form 15CB certificate issued and digitally uploaded on the income tax portal by a practicing Chartered Accountant holding a valid Certificate of Practice (COP), along with an authentic Unique Document Identification Number (UDIN).
                </p>
              </div>
            </div>
          </div>

          {/* Doc 10 */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <SendHorizontal className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    10. Form A2 &amp; FEMA Purpose Code Declaration
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    AD Bank Wire Release
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The standard FEMA Form A2 application completed by the remitter instructing their Authorised Dealer bank to debit the INR account and execute the outward transfer under the specific RBI Purpose Code (e.g., S0102, S0305, S1007, S1101).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 3-Step Process for Clean Documentation */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            4
          </span>
          3-Step Protocol for Flawless 15CA &amp; 15CB Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
              Phase 1: Pre-Transaction
            </span>
            <h4 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors mb-2">
              Collect &amp; Validate Non-Resident KYC
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Obtain the latest TRC, electronic Form 10F, and No-PE certificates before contracting or scheduling payments. Validate that the non-resident's country has an active DTAA with India.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Phase 2: CA Certification
            </span>
            <h4 className="font-semibold text-slate-900 text-base group-hover:text-blue-700 transition-colors mb-2">
              Engage Expert CA for Form 15CB
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Have our international tax Chartered Accountants examine contract clauses, verify domestic vs. treaty withholding tax rates, compute exact TDS liability, and generate the UDIN certificate.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-2">
              Phase 3: E-Filing &amp; Bank
            </span>
            <h4 className="font-semibold text-slate-900 text-base group-hover:text-purple-700 transition-colors mb-2">
              E-File Form 15CA &amp; Dispatch to Bank
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submit Form 15CA Part C with DSC on the e-filing portal. Download the official acknowledgment receipt and transmit it with Form A2 to your bank for swift SWIFT transfer execution.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive FAQ Accordion */}
      <section className="space-y-4 mb-8 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          Frequently Asked Questions on Required Documents
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
