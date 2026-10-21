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
  DollarSign,
  Briefcase,
  Percent,
} from "lucide-react";

export default function TdsUnderSection195Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is Section 195 considered unique compared to other TDS provisions?",
      a: "Section 195 is unique because it lacks any statutory monetary threshold (unlike domestic Sections 194C or 194J). Any sum chargeable to tax in India paid to a non-resident attracts withholding tax from the very first rupee. Furthermore, Section 195 allows the taxpayer to apply beneficial Double Taxation Avoidance Agreement (DTAA) treaty rates under Section 90(2).",
    },
    {
      q: "Can a payer apply for a lower or nil deduction certificate under Section 195?",
      a: "Yes. Under Section 195(2), where the payer considers that the whole of the remittance would not represent chargeable income in India, they can make an application to the Assessing Officer (AO) to determine the taxable proportion. Similarly, the non-resident payee can apply for a Nil or Lower Deduction Certificate under Section 197.",
    },
    {
      q: "What is the surcharge and cess treatment under Section 195?",
      a: "When deducting tax at rates prescribed under the domestic Income Tax Act (Finance Act), applicable Surcharge (ranging from 2% to 5% for foreign corporations, and up to 25% for individuals) plus 4% Health and Education Cess must be added to the base rate. However, when applying DTAA treaty rates, surcharge and cess are generally not levied unless specifically provided for in the treaty.",
    },
    {
      q: "Does crediting a payment to an 'Expenses Payable' account trigger TDS under Section 195?",
      a: "Yes, absolutely. Under Section 195, TDS must be deducted at the earlier of actual payment or credit of such income to the account of the payee, including any 'Suspense Account', 'Provision Account', or 'Sundry Creditors' ledger. TDS liability cannot be postponed by delaying the cash remittance.",
    },
    {
      q: "Which quarterly TDS return must be filed for Section 195 deductions?",
      a: "All tax deductions made under Section 195 on payments to non-residents must be reported quarterly in Form 27Q. The return must detail the deductee's country of residence, TRC status, DTAA rate applied, and Form 15CA/15CB acknowledgement numbers.",
    },
    {
      q: "What is the statutory penalty under Section 40(a)(i) for non-deduction under Section 195?",
      a: "Under Section 40(a)(i), if tax deductible under Section 195 is not deducted, or after deduction is not paid on or before the due date for filing the income tax return under Section 139(1), 100% of the entire foreign expenditure is disallowed as a business deduction, directly increasing the Indian company's corporate tax burden.",
    },
  ];

  return (
    <TdsGuideLayout
      currentSlug="tds-under-section-195"
      title="Section 195 of the Income Tax Act: A Complete Guide to TDS on Payments to Non-Residents"
      breadcrumbLabel="Complete Guide to Section 195"
      metaPublishedDate="AY 2026-27 Compliant / Section 195"
      readingTime="8 min read"
      authorName="Merrafilings International Tax & Cross-Border Desk"
    >
      {/* Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              International Tax &amp; Cross-Border Compliance
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Cross-Border Withholding Tax Under Section 195
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              In today&apos;s interconnected economy, Indian businesses routinely remit payments to foreign consultants, global cloud platforms, software vendors, and overseas lenders. Whenever an Indian payer remits funds to a non-resident that is chargeable to tax in India, <strong>Section 195 of the Income Tax Act, 1961</strong> mandates withholding of tax at source. This comprehensive guide covers the statutory scope, deduction triggers, DTAA treaty mechanisms, Form 15CA/15CB workflows, and penalty defense strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: Core Statutory Scope */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Understanding the Scope of Section 195
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Section 195 governs withholding tax on any sum chargeable under the provisions of the Income Tax Act paid to a non-resident or foreign enterprise:
        </p>

        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong>No Minimum Threshold:</strong> Unlike domestic sections (such as 194C with ₹30,000 threshold or 194J with ₹30,000 limit), Section 195 has <em>no minimum exemption limit</em>. Even an overseas transaction of $100 requires tax withholding if the income is taxable in India.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong>Payer Neutrality:</strong> The legal obligation falls on <em>any person</em> making the payment—regardless of whether the remitter is a resident Indian company, an LLP, an individual, or even another foreign entity paying for Indian services.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong>Accrual or Receipt in India:</strong> The test of taxability rests on Sections 5 and 9 of the Act, which deem income to accrue or arise in India through a business connection, property, or technical service utilized in India.
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Who is Required to Deduct TDS? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Who is Required to Deduct TDS Under Section 195?
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The legal obligation to withhold tax at source applies universally across:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {[
            "Private & Public Cos",
            "Limited Liability Partnerships",
            "Partnership Firms",
            "Resident Individuals",
            "Hindu Undivided Families",
            "Trusts & AOPs",
          ].map((entity, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl border border-slate-200 bg-white text-center shadow-3xs hover:border-emerald-500 hover:shadow-xs transition-all"
            >
              <Building2 className="w-4 h-4 text-emerald-600 mx-auto mb-1.5" />
              <div className="text-xs font-bold text-slate-900 leading-tight">{entity}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Common Payments Covered Under Section 195 */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Commercial Payments Covered Under Section 195
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The following cross-border remittances are routinely governed by Section 195:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Briefcase className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
              Consultancy &amp; Advisory Fees
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Remittances to foreign management consultants, strategy experts, foreign lawyers, and overseas designers.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
              Royalty for Software &amp; IP
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Software license fees, cloud infrastructure access, trademark royalties, patents, and technical know-how.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-1">
              Fees for Technical Services (FTS)
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Engineering drawings, specialized IT coding, technical data hosting, and scientific analysis conducted abroad.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Landmark className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
              Interest on Overseas Loans (ECB)
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Interest paid to overseas banking institutions, foreign debenture holders, and international loan providers.
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
              Proceeds from sale of shares in Indian companies or transfer of immovable property by non-resident owners.
            </p>
          </div>

          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <DollarSign className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
              Dividends &amp; Commissions
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Dividends declared by Indian corporations to foreign shareholders and sales commission paid to overseas agents.
            </p>
          </div>
        </div>
      </section>

      {/* Section 04: Point of Deduction */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Point of Deduction: Credit or Payment (Whichever is Earlier)
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The liability to deduct tax under Section 195 crystallizes at the <strong>earliest point</strong> of:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Clock className="w-4.5 h-4.5 text-emerald-600" />
              <span>Credit to Account of Non-Resident</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Occurs when the vendor invoice is booked in the books of accounts, even if credited to a &apos;Suspense Account&apos; or &apos;Payable Account&apos;. You cannot defer TDS simply by delaying the wire transfer.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Receipt className="w-4.5 h-4.5 text-blue-600" />
              <span>Actual Remittance / Payment</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Occurs upon actual transmission of funds via bank wire, SWIFT, credit card, or payment aggregator. If an advance is paid before receiving an invoice, TDS must be deducted at the time of advance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 05: DTAA Relief & Lower Deduction Certificate */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Treaty Relief &amp; Lower/Nil Deduction Certificates
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Section 195 provides two powerful legal mechanisms to avoid excessive tax withholding:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Mechanism 1: DTAA */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                DTAA Treaty Relief under Section 90(2)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              India maintains tax treaties with over 85 nations. If the treaty prescribes a 10% rate on software royalty while the domestic Act prescribes 20%, the payer can deduct at 10%, provided the foreign entity furnishes: (1) Tax Residency Certificate (TRC); (2) Electronically filed Form 10F; and (3) No-PE declaration.
            </p>
          </div>

          {/* Mechanism 2: Lower Deduction Certificate */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Percent className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Lower / Nil Certificate (Sec 195(2) / 197)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Where only an incidental fraction of a global turnkey contract represents Indian income, the Indian payer can apply to the Assessing Officer under Section 195(2) to determine the exact proportion chargeable. Alternatively, the non-resident can apply under Section 197 for a Nil or Concessional Deduction Certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 06: Deductor Compliance Checklist */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Statutory Compliance Checklist for Deductors
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Every cross-border transaction requires fulfilling five sequential compliance milestones:
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              step: "Step 01",
              title: "Obtain Commercial TAN under Section 203A",
              desc: "A commercial Tax Deduction and Collection Account Number (TAN) is mandatory to deposit non-resident tax and submit Form 27Q.",
            },
            {
              step: "Step 02",
              title: "Secure Mandatory DTAA Documentation Prior to Remittance",
              desc: "Collect the overseas payee's Tax Residency Certificate (TRC), Form 10F, Tax Identification Number (TIN), and No-Permanent Establishment (PE) declaration.",
            },
            {
              step: "Step 03",
              title: "Obtain Form 15CB CA Certification & File Form 15CA",
              desc: "Engage a Chartered Accountant to issue digital Form 15CB with UDIN, and submit Form 15CA undertaking to the Authorized Dealer bank.",
            },
            {
              step: "Step 04",
              title: "Remit TDS via Challan 281 by 7th of Next Month",
              desc: "Deposit the deducted tax under Major Head 0020 (Company) or 0021 (Non-Company) and Minor Head 200 via the e-Pay Tax portal.",
            },
            {
              step: "Step 05",
              title: "File Quarterly Form 27Q & Issue Form 16A",
              desc: "Submit quarterly return Form 27Q on incometax.gov.in. Once processed by CPC-TDS, download digitally signed Form 16A certificates from TRACES for delivery to the foreign vendor.",
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

      {/* Section 07: Practical Cross-Border Example */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            07
          </span>
          Practical Example: $10,000 Payment to a US Tech Consultant
        </h2>
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
            Suppose an Indian SaaS company engages an independent software architect based in California, USA, invoicing <strong>USD 10,000 (approx. ₹8,40,000)</strong> for cloud security architecture:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-slate-500 font-medium">Without DTAA Documentation:</div>
              <div className="text-sm font-bold text-rose-700">20% + Surcharge + Cess = ~21.84%</div>
              <div className="text-[11px] text-slate-600 leading-snug">
                Payer must withhold ₹1,83,456 under domestic Section 115A / 206AA.
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
              <div className="text-emerald-800 font-medium">With India-US DTAA (Art. 12):</div>
              <div className="text-sm font-bold text-emerald-700">15% Flat Treaty Rate</div>
              <div className="text-[11px] text-slate-600 leading-snug">
                Upon furnishing US Form 6166 (TRC), Form 10F, and No-PE certificate, tax withheld is only ₹1,26,000 (saving ₹57,456).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08: Frequently Asked Questions */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions on Section 195 TDS
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
          Cross-Border Remittance &amp; Section 195 Retainer
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Ensure 100% compliance on foreign remittances. Merrafilings assists with DTAA treaty interpretations, TRC and Form 10F documentation, digital Form 15CB certifications, and quarterly Form 27Q return filings.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/tds-return-filing"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-[13px] shadow-sm transition-all"
          >
            File Form 27Q Foreign TDS
          </Link>
          <Link
            href="/income-tax"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-[13px] border border-white/20 transition-all"
          >
            Schedule International Tax Advisory
          </Link>
        </div>
      </div>
    </TdsGuideLayout>
  );
}
