"use client";

import React, { useState } from "react";
import Link from "next/link";
import TdsGuideLayout from "@/components/TdsGuideLayout";
import {
  Globe,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Scale,
  Clock,
  Landmark,
  FileCheck,
  Receipt,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  DollarSign,
  Briefcase,
} from "lucide-react";

export default function Section195PaymentToNonResidentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the primary objective of Section 195 of the Income Tax Act?",
      a: "Section 195 mandates withholding tax (TDS) on all payments made to a non-resident or foreign company if the sum represents income chargeable to tax in India. The statutory goal is to ensure that taxes on cross-border revenue originating from Indian sources are captured at the point of remittance, preventing offshore tax evasion.",
    },
    {
      q: "Is there any minimum financial threshold under Section 195 before TDS applies?",
      a: "No. Unlike domestic TDS provisions (such as Section 194C or 194J which have ₹30,000 or ₹1,00,000 thresholds), Section 195 does not provide any minimum exemption threshold. Even a cross-border payment of ₹1,000 or $50 attracts TDS if the underlying sum is taxable in India.",
    },
    {
      q: "How does a Double Taxation Avoidance Agreement (DTAA) benefit cross-border payments?",
      a: "Under Section 90(2) of the Income Tax Act, the taxpayer has the legal right to apply either the domestic Income Tax Act provisions or the applicable DTAA, whichever is more beneficial. For instance, if domestic law prescribes 20% on royalties, but the applicable DTAA prescribes 10% or 15%, the deductor can apply the lower treaty rate, provided the non-resident furnishes a valid Tax Residency Certificate (TRC) and Form 10F.",
    },
    {
      q: "What documents must the non-resident provide to claim lower DTAA tax rates?",
      a: "To claim treaty benefits, the non-resident payee must furnish: (1) A valid Tax Residency Certificate (TRC) issued by their resident country's tax authority; (2) Electronically filed Form 10F on the Indian income tax e-filing portal; (3) A No-Permanent Establishment (No-PE) self-declaration; and (4) PAN or valid alternative tax identification under Rule 37BC.",
    },
    {
      q: "What is the difference between Section 195 TDS and Form 15CA / Form 15CB compliance?",
      a: "Section 195 is the substantive statutory provision mandating tax deduction and deposit. Form 15CA and Form 15CB under Rule 37BB are reporting and remittance compliance tools. Form 15CB is a formal certificate issued by an independent Chartered Accountant certifying the taxability and withholding rate, while Form 15CA is the remitter's electronic undertaking submitted to the Authorized Dealer bank before processing foreign currency transfers.",
    },
    {
      q: "What happens if an Indian business fails to deduct TDS on a foreign payment under Section 195?",
      a: "Failure to deduct or deposit TDS attracts severe statutory consequences: (1) 100% expenditure disallowance under Section 40(a)(i), inflating the Indian entity's taxable income; (2) Interest at 1% or 1.5% per month under Section 201(1A); (3) Penalty equal to the tax amount under Section 271C; and (4) Assessee-in-default proceedings under Section 201(1).",
    },
  ];

  return (
    <TdsGuideLayout
      currentSlug="section-195--payment-to-non-resident"
      title="Section 195 of the Income Tax Act: TDS on Payments to Non-Residents"
      breadcrumbLabel="Section 195 Non-Resident TDS"
      metaPublishedDate="AY 2026-27 Compliant / Section 195"
      readingTime="8 min read"
      authorName="Merrafilings International Tax & Cross-Border Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Cross-Border Withholding Tax Mandate
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Statutory Withholding on Offshore Remittances
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Whenever an Indian resident, corporate entity, partnership, or individual makes a foreign currency payment or overseas credit to a <strong>non-resident individual or foreign enterprise</strong>, the transaction falls under the legal purview of <strong>Section 195 of the Income Tax Act, 1961</strong>. Before remitting funds through an Authorized Dealer (AD) bank, the payer is legally obligated to determine whether the sum represents income <em>chargeable to tax in India</em>, identify the precise withholding rate, and verify potential relief under bilateral <strong>Double Taxation Avoidance Agreements (DTAA)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: What is Section 195? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          What is Section 195 of the Income Tax Act?
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Section 195 serves as the statutory backbone for withholding taxes on cross-border payments. Unlike domestic provisions where taxes are deducted based on arbitrary gross turnover or statutory minimum limits, Section 195 applies strictly to <strong>any sum chargeable under the provisions of this Act</strong> paid to a non-resident (other than a company) or to a foreign company.
        </p>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-[13px] leading-relaxed flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">The Core Legal Test:</strong> You cannot assume there is zero TDS simply because the service was delivered remotely or the money is wired to an overseas bank account. The paramount statutory question is: <em>Does this payment represent income accrued, arisen, or deemed to accrue or arise in India under Sections 5 and 9 of the Act?</em> If the answer is affirmative, Section 195 TDS is mandatory prior to remittance.
          </div>
        </div>
      </section>

      {/* Section 02: To Whom Does Section 195 Apply? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          To Whom Does Section 195 Apply?
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The liability to deduct withholding tax under Section 195 extends broadly across all categories of payers and offshore payees:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Card 1: Who is the Payer? */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Building2 className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Obligated Payers (Deductors)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Applies to <strong>any person</strong> making a payment—including Indian Private Limited companies, Public Limited entities, LLPs, partnership firms, trusts, proprietorships, resident individuals, and even non-resident payers if the income has an Indian tax nexus.
            </p>
          </div>

          {/* Card 2: Who is the Payee? */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                Eligible Payees (Recipients)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Encompasses any <strong>non-resident individual (NRI), foreign partnership, overseas LLP, or foreign corporate body</strong> having tax residence outside India and receiving revenue chargeable under the Income Tax Act.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: Payments Covered Under Section 195 */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Specified Payments Covered Under Section 195
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Section 195 governs a comprehensive spectrum of cross-border financial transactions. The most common commercial payments include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Briefcase className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
              Consultancy &amp; Professional Fees
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Fees paid to overseas technical advisors, legal counsels, management consultants, and independent architects.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-500/10 hover:bg-indigo-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-1">
              Royalties &amp; IP Licensing
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Payments for software licenses, SaaS subscriptions, patents, trademarks, design blueprints, or copyrighted materials.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
              Fees for Technical Services (FTS)
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Technical data processing, engineering support, software coding services, or industrial testing performed overseas.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-sky-500 hover:shadow-md hover:shadow-sky-500/10 hover:bg-sky-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Landmark className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1">
              Interest on Foreign Loans
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Interest remitted to foreign lenders on External Commercial Borrowings (ECB), foreign debentures, or overseas credit lines.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-rose-700 transition-colors mb-1">
              Capital Gains on Indian Assets
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Gains arising from transfer of shares in Indian companies, immovable properties, or securities held by non-residents.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <DollarSign className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
              Commission &amp; Other Incomes
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Commission paid to foreign sales agents, rent paid for Indian assets, or any other income chargeable to tax in India.
            </p>
          </div>
        </div>
      </section>

      {/* Section 04: What is the TDS Rate Under Section 195? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          TDS Rates Under Section 195 (Act vs DTAA)
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          There is <strong>no single fixed withholding rate</strong> under Section 195. The statutory withholding rate is dictated by the specific nature of the income, the relevant section under the Income Tax Act, and the rate specified under the bilateral <strong>Double Taxation Avoidance Agreement (DTAA)</strong> between India and the recipient&apos;s country of residence.
        </p>

        {/* Comparison Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-3xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
                  <th className="p-3 sm:p-3.5">Nature of Cross-Border Payment</th>
                  <th className="p-3 sm:p-3.5">Domestic Act Base Rate*</th>
                  <th className="p-3 sm:p-3.5">Typical DTAA Treaty Rate**</th>
                  <th className="p-3 sm:p-3.5">Governing Provision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">
                    Royalty Payments (Software, IP, Patents)
                  </td>
                  <td className="p-3 sm:p-3.5">20% + Surcharge &amp; Cess</td>
                  <td className="p-3 sm:p-3.5 text-emerald-700 font-semibold">10% – 15%</td>
                  <td className="p-3 sm:p-3.5">Section 115A / Treaty Art. 12</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">
                    Fees for Technical / Professional Services (FTS)
                  </td>
                  <td className="p-3 sm:p-3.5">20% + Surcharge &amp; Cess</td>
                  <td className="p-3 sm:p-3.5 text-emerald-700 font-semibold">10% – 15%</td>
                  <td className="p-3 sm:p-3.5">Section 115A / Treaty Art. 12/13</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">
                    Interest on Foreign Currency Loans (ECB)
                  </td>
                  <td className="p-3 sm:p-3.5">20% (or 5% for specified infra)</td>
                  <td className="p-3 sm:p-3.5 text-emerald-700 font-semibold">7.5% – 15%</td>
                  <td className="p-3 sm:p-3.5">Section 115A / 194LC / Art. 11</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">
                    Dividend on Shares to Foreign Shareholders
                  </td>
                  <td className="p-3 sm:p-3.5">20% + Surcharge &amp; Cess</td>
                  <td className="p-3 sm:p-3.5 text-emerald-700 font-semibold">5% – 15%</td>
                  <td className="p-3 sm:p-3.5">Section 115A / Treaty Art. 10</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">
                    Long-Term Capital Gains (Unlisted Securities)
                  </td>
                  <td className="p-3 sm:p-3.5">10% / 12.5% (Finance Act 2024)</td>
                  <td className="p-3 sm:p-3.5 text-slate-600">Subject to Treaty Terms</td>
                  <td className="p-3 sm:p-3.5">Section 112 / Treaty Art. 13</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">
                    Other Taxable Incomes
                  </td>
                  <td className="p-3 sm:p-3.5">Rates in force (30% / 40%)</td>
                  <td className="p-3 sm:p-3.5 text-slate-600">As per Treaty Article</td>
                  <td className="p-3 sm:p-3.5">Finance Act Rates in Force</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 leading-snug">
            *Applicable Surcharge (2% to 5% for foreign corporations; up to 25% for individuals) and 4% Health &amp; Education Cess must be added to domestic rates. Under DTAA rates, surcharge and cess are generally not levied unless specified by the treaty.
          </div>
        </div>
      </section>

      {/* Section 05: Can DTAA Reduce the TDS Rate & The Role of TRC */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          How DTAA and Tax Residency Certificate (TRC) Protect Payers
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Section 90(2) contains an explicit statutory override: whenever India has entered into a Double Taxation Avoidance Agreement with a foreign jurisdiction, the provisions of the Act shall apply only to the extent that they are more beneficial to the taxpayer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Item 1: TRC */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              1. Tax Residency Certificate (TRC)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Mandatory under Section 90(4). Issued by the government or revenue authority of the non-resident&apos;s country, verifying fiscal residence. Without a valid TRC, DTAA benefits cannot be claimed legally.
            </p>
          </div>

          {/* Item 2: Form 10F */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
              2. Form 10F Electronic Filing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Self-declaration furnishing statutory details (nationality, tax ID, period of residence, address) if not explicitly stated in the foreign TRC. Must be electronically submitted on incometax.gov.in.
            </p>
          </div>

          {/* Item 3: No-PE Declaration */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
              3. No-PE Self-Declaration
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Formal confirmation by the foreign vendor that they do not possess a Permanent Establishment (PE) or fixed place of business in India under Article 5 of the treaty, preventing business profits taxation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 06: Does Having PAN Automatically Mean Lower TDS? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Does Having a PAN Guarantee Lower TDS?
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          <strong>No.</strong> Possessing an Indian PAN simply ensures compliance with Section 206AA. It does not automatically grant any concessional tax rate.
        </p>

        <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-[13px] text-slate-700 leading-relaxed space-y-2">
          <p>
            <strong>PAN vs. TRC Distinct Functions:</strong> An Indian PAN is merely a tax identification number that prevents the punitive 20% minimum rate under Section 206AA. It does not substantiate tax residency. To claim a concessional 10% or 15% rate under DTAA, the non-resident <em>must still furnish a valid TRC and Form 10F</em>.
          </p>
          <p>
            <strong>Rule 37BC Exemption:</strong> Under Rule 37BC of the Income Tax Rules, non-residents who do not hold an Indian PAN are exempted from Section 206AA punitive rates for specified payments (interest, royalty, FTS, capital gains), provided they submit their: (1) Name, email, contact number; (2) Address in the country of residence; (3) Tax Identification Number (TIN) issued in that country; and (4) Valid TRC.
          </p>
        </div>
      </section>

      {/* Section 07: Interplay with Form 15CA and Form 15CB */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            07
          </span>
          Foreign Remittance Workflow: Form 15CA and Form 15CB
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Deducting tax under Section 195 is only the initial legal phase. Before your Authorized Dealer bank will wire funds abroad, you must complete regulatory reporting under <strong>Rule 37BB</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Form 15CB: CA Statutory Certification
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              A certificate issued and digitally signed by an independent Chartered Accountant (CA) with a valid UDIN. The CA certifies the taxability of the transaction, the applicable DTAA provisions, the exact rate of tax deduction, and compliance with the Income Tax Act. Required whenever taxable foreign remittances exceed ₹5 Lakh in a financial year.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                Form 15CA: Remitter&apos;s Electronic Undertaking
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              An electronic declaration submitted on the income tax portal by the Indian remitter:
              <br />
              &bull; <strong>Part A:</strong> Remittance taxable and aggregate doesn&apos;t exceed ₹5 Lakh.
              <br />
              &bull; <strong>Part B:</strong> Remittance covered by Section 195(2)/197 AO order.
              <br />
              &bull; <strong>Part C:</strong> Remittance exceeds ₹5 Lakh and Form 15CB obtained.
              <br />
              &bull; <strong>Part D:</strong> Remittance not chargeable to tax in India.
            </p>
          </div>
        </div>
      </section>

      {/* Section 08: Real-World Step-by-Step Scenario */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            08
          </span>
          Practical Step-by-Step Case: Remitting ₹5,00,000 to Overseas Consultant
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Suppose an Indian technology company engages an independent AI software consultant based in Germany or the UAE and is invoicing ₹5,00,000 ($6,000). The standard compliance roadmap is:
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              step: "Step 01",
              title: "Determine Scope of Services & Indian Taxability",
              desc: "Examine whether the software advisory qualifies as Fees for Technical Services (FTS) under Section 9(1)(vii) or is purely an offshore activity without Indian tax nexus.",
            },
            {
              step: "Step 02",
              title: "Verify Bilateral DTAA Treaty Terms",
              desc: "Cross-examine the India-Germany DTAA (Article 12). While domestic tax rate is 20% + surcharge/cess, the treaty allows 10% withholding.",
            },
            {
              step: "Step 03",
              title: "Collect Mandated Offshore Documents",
              desc: "Obtain the German consultant's Tax Residency Certificate (TRC), electronically signed Form 10F, Tax Identification Number (TIN), and No-PE certificate.",
            },
            {
              step: "Step 04",
              title: "Compute & Deduct TDS Prior to Credit/Payment",
              desc: "Deduct 10% TDS (₹50,000) at the time of booking invoice or remittance. Remit net ₹4,50,000 to the overseas consultant.",
            },
            {
              step: "Step 05",
              title: "Complete Form 15CB Certification & Form 15CA Upload",
              desc: "Chartered Accountant signs Form 15CB with UDIN. Indian company generates 15CA acknowledgement and delivers both to the Authorized Dealer bank.",
            },
            {
              step: "Step 06",
              title: "Challan 281 Deposit & Form 27Q Quarterly Return",
              desc: "Deposit ₹50,000 TDS via Challan 281 by the 7th of next month under Major Head 0020/0021. Report transaction in Form 27Q quarterly return and issue Form 16A.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5 cursor-pointer"
            >
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {item.step}
              </span>
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 09: Statutory Penalties for Section 195 Defaults */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            09
          </span>
          Statutory Penalties &amp; Default Consequences
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The Income Tax Department enforces zero tolerance on cross-border non-deduction. Defaulting on Section 195 triggers severe multi-fold repercussions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-rose-200 bg-rose-50/40 shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-rose-800">
              <AlertTriangle className="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-bold">100% Section 40(a)(i) Expense Disallowance</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Unlike domestic vendor payments where only 30% is disallowed, <strong>100% of the entire foreign remittance</strong> is added back to your company&apos;s net profit, triggering standard 25% or 30% corporate income tax plus surcharge and cess.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-amber-200 bg-amber-50/40 shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-amber-800">
              <Clock className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-bold">Compound Interest under Section 201(1A)</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              1.0% interest per month for failure to deduct tax from the date tax was deductible until deduction, and 1.5% interest per month for delayed deposit from the date of deduction until actual treasury deposit.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-blue-200 bg-blue-50/40 shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-blue-800">
              <Scale className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-bold">Equal Monetary Penalty under Section 271C</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              The Joint Commissioner of Income Tax can impose a direct financial penalty <strong>equal to the entire amount of tax failed to be deducted</strong> or deposited, in addition to demanding the original tax.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-purple-200 bg-purple-50/40 shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-purple-800">
              <Receipt className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-bold">Assessee-in-Default Liability</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              The Indian payer is deemed an &apos;assessee-in-default&apos; under Section 201(1). The tax department can issue bank attachment orders and recover the offshore tax directly from the Indian company&apos;s bank accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions on Section 195
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="group border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-emerald-500/60 shadow-3xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-3.5 px-4 sm:px-5 flex items-center justify-between gap-4 text-left font-semibold text-slate-900 text-xs sm:text-[13.5px] cursor-pointer"
                >
                  <span className="group-hover:text-emerald-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-emerald-600 transition-colors">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white shadow-lg text-center space-y-4">
        <h3 className="text-lg sm:text-2xl font-bold tracking-tight">
          Planning Cross-Border Payments or Foreign Remittances?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Avoid the statutory 100% expenditure disallowance and Section 201 default notices. Our senior Chartered Accountants verify bilateral DTAA treaties, review Tax Residency Certificates (TRC), issue digital Form 15CB certifications, and submit Form 27Q quarterly returns.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/tds-return-filing"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-[13px] shadow-sm transition-all"
          >
            Explore TDS Filing Packages
          </Link>
          <Link
            href="/income-tax"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-[13px] border border-white/20 transition-all"
          >
            View Direct Tax Services
          </Link>
        </div>
      </div>
    </TdsGuideLayout>
  );
}
