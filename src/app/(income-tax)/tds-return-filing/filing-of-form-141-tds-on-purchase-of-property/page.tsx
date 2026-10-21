"use client";

import React, { useState } from "react";
import Link from "next/link";
import TdsGuideLayout from "@/components/TdsGuideLayout";
import {
  Building2,
  ShieldCheck,
  FileText,
  AlertTriangle,
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
  Layers,
  Sparkles,
  Users,
  Coins,
  DollarSign,
  Home,
} from "lucide-react";

export default function FilingOfForm141TdsOnPurchaseOfPropertyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Form 141 under the new Income-tax Act, 2025?",
      a: "Form 141 is the newly introduced consolidated challan-cum-statement enacted under the Income-tax Act, 2025. It unifies and replaces multiple standalone challans, most notably Form 26QB (TDS on purchase of immovable property), Form 26QC (TDS on rent), Form 26QD (TDS under Section 194M), and Form 26QE (TDS on virtual digital assets).",
    },
    {
      q: "Does an individual property buyer need a TAN to file Form 141?",
      a: "No. A Tax Deduction and Collection Account Number (TAN) is strictly not required for filing Form 141 on property purchases. The buyer can complete the deduction and filing using their existing Permanent Account Number (PAN) along with the seller's PAN.",
    },
    {
      q: "What is the threshold limit and rate for TDS on property purchases?",
      a: "TDS applies whenever the sale consideration or the stamp duty value (SDV) of the immovable property (excluding agricultural land) exceeds ₹50,00,000 (₹50 Lakh). The buyer must deduct TDS at 1% of the total consideration or 1% of the stamp duty value, whichever is higher.",
    },
    {
      q: "What is the statutory deadline for depositing TDS and filing Form 141?",
      a: "Form 141 must be filed and the deducted tax deposited within 30 days from the end of the month in which the tax was deducted. For example, if payment or credit is made to the seller on July 14, 2026, Form 141 must be submitted on or before August 30, 2026.",
    },
    {
      q: "How are joint buyers and joint sellers handled in Form 141?",
      a: "Where multiple buyers or sellers are party to a property transaction, separate Form 141 statements must be filed for each distinct buyer-seller pair for their respective financial share. For example, if there are 2 joint buyers and 2 joint sellers, a total of 4 separate Form 141 filings (2 × 2) are required.",
    },
    {
      q: "What TDS certificate replaces Form 16B under the new Income-tax Act, 2025?",
      a: "Under the new Income-tax Act, 2025 framework, the earlier TDS certificate Form 16B has been formally replaced by Form 132. The buyer is statutorily required to download Form 132 from the compliance portal and furnish it to the seller within 15 days of filing Form 141.",
    },
    {
      q: "Does Form 141 apply if I purchase property from a Non-Resident Indian (NRI) seller?",
      a: "No. Form 141 applies exclusively to resident sellers. If the seller is a non-resident (NRI or foreign entity), TDS must be deducted under Section 195 at higher capital gains rates (20% / 12.5% plus surcharge and cess), the buyer must obtain a TAN, and the remittance must be filed via Challan 281 and Form 27Q.",
    },
  ];

  return (
    <TdsGuideLayout
      currentSlug="filing-of-form-141-tds-on-purchase-of-property"
      title="Filing of Form 141 for TDS on Purchase of Property – Complete Guide (Income-tax Act, 2025)"
      breadcrumbLabel="Form 141 Property TDS"
      metaPublishedDate="AY 2026-27 Compliant / Income-tax Act, 2025"
      readingTime="8 min read"
      authorName="Merrafilings Real Estate & Direct Tax Desk"
    >
      {/* Intro Hero Card */}
      <div className="group p-6 sm:p-7 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-sky-50/40 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 mb-8 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Home className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              Income-tax Act, 2025 Regulatory Overhaul
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
              Consolidated Challan-Cum-Statement: Form 141
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Under the newly codified <strong>Income-tax Act, 2025</strong>, the Government of India has instituted a major compliance reform by introducing <strong>Form 141</strong>. This new consolidated challan-cum-statement officially replaces legacy withholding returns, including <strong>Form 26QB</strong> (TDS on property), <strong>Form 26QC</strong> (TDS on rent), <strong>Form 26QD</strong> (contractual payments), and <strong>Form 26QE</strong> (virtual digital assets). For real estate purchases exceeding ₹50 Lakh, buyers must deposit tax and file Form 141 within 30 days, subsequently issuing the new <strong>Form 132 TDS Certificate</strong> to the seller.
            </p>
          </div>
        </div>
      </div>

      {/* Section 01: What is Form 141? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          What is Form 141 and What Does It Replace?
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Historically, deductors who were not required to obtain a commercial TAN had to juggle four disconnected quarterly statements. The Income-tax Act, 2025 consolidates these into a single unified digital reporting architecture known as <strong>Form 141</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Replaces Form 26QB
            </span>
            <h4 className="text-xs font-bold text-slate-900">Purchase of Immovable Property</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              1% withholding on residential flats, plots, commercial units, and buildings &gt; ₹50 Lakh.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Replaces Form 26QC
            </span>
            <h4 className="text-xs font-bold text-slate-900">TDS on High-Value Rent</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Monthly rent payments exceeding ₹50,000 paid by resident individuals and HUFs.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
              Replaces Form 26QD
            </span>
            <h4 className="text-xs font-bold text-slate-900">Contractual Payments (194M)</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Payments to resident contractors or professionals exceeding ₹50 Lakh annually.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              Replaces Form 26QE
            </span>
            <h4 className="text-xs font-bold text-slate-900">Virtual Digital Assets (VDAs)</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              TDS on transfer of cryptocurrencies, NFTs, and digital tokens under Section 194S.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02: Applicability on Purchase of Property */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Applicability of TDS on Property Purchase
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The requirement to deduct withholding tax and submit Form 141 triggers when:
        </p>

        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong>Transaction Threshold:</strong> The total agreed sale consideration or the official Stamp Duty Value (circle rate) of the immovable property exceeds <strong>₹50,00,000 (Rupees Fifty Lakh)</strong>. If consideration is ₹48 Lakh but the circle rate is ₹52 Lakh, TDS is mandatory on ₹52 Lakh.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong>Covered Property Types:</strong> Applies to residential apartments, independent villas, commercial shops, office premises, industrial land, residential plots, and under-construction developer units.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong>Express Exemption:</strong> Pure agricultural rural land is explicitly exempt from TDS provisions under the Act.
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Rate of TDS & Computation Rule */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Rate of TDS &amp; Legal Computation Base
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The buyer must compute and deduct TDS at:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Standard Withholding Rate
            </div>
            <div className="text-2xl font-black text-slate-900">1.0% Flat</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Calculated on the <strong>higher of</strong>:
              <br />
              &bull; 1% of the total agreed sale consideration; or
              <br />
              &bull; 1% of the official Stamp Duty Value (circle rate).
              <br />
              Incidental charges like club membership, car parking, water/electricity meter fees, and maintenance deposits form part of consideration.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40 space-y-2">
            <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">
              Punitive Rate for Missing / Inoperative PAN
            </div>
            <div className="text-2xl font-black text-rose-900">20.0% Flat</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Under <strong>Section 206AA</strong>, if the seller fails to provide a valid PAN or if the seller&apos;s PAN is unlinked with Aadhaar (deemed inoperative), the buyer is statutorily compelled to deduct <strong>20% TDS</strong>. Never proceed with registration without validating seller PAN.
            </p>
          </div>
        </div>
      </section>

      {/* Section 04: Due Date for Filing Form 141 */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Statutory Due Date for Filing Form 141
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Unlike monthly payroll TDS which must be deposited by the 7th of the next month, the timeline for property transactions provides a 30-day window:
        </p>

        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
            <Clock className="w-5 h-5 text-emerald-600" />
            <span>Filing Deadline: 30 days from the end of the month of deduction</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 text-xs sm:text-[13px] text-slate-700 leading-relaxed border border-slate-200/80">
            <strong>Illustrative Example:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Date of payment / credit to seller: <strong>July 12, 2026</strong></li>
              <li>Month of deduction ends on: <strong>July 31, 2026</strong></li>
              <li>Statutory deadline for filing Form 141: <strong>August 30, 2026</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 05: Step-by-Step Filing Procedure */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Step-by-Step Filing Workflow on the Income Tax Portal
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The buyer can file Form 141 directly through the official e-filing portal without requiring any specialized software or validation utility:
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              step: "Step 01",
              title: "Log in to Income Tax E-Filing Portal",
              desc: "Sign in to incometax.gov.in using the Buyer's PAN and password credentials. Navigate to 'e-File' > 'e-Pay Tax'.",
            },
            {
              step: "Step 02",
              title: "Initiate Form 141 Challan",
              desc: "Click on 'New Payment' and select the 'Form 141 (TDS on Property/Rent/VDAs)' compliance tile.",
            },
            {
              step: "Step 03",
              title: "Enter Buyer & Seller Particulars",
              desc: "Input Buyer PAN, Seller PAN, residential status, complete postal address, email, and mobile contact numbers.",
            },
            {
              step: "Step 04",
              title: "Submit Property & Consideration Breakdown",
              desc: "Enter complete property address, sale agreement date, total consideration amount, and stamp duty value (circle rate).",
            },
            {
              step: "Step 05",
              title: "Remit TDS via Digital Payment Gateway",
              desc: "Review computed 1% tax. Remit the amount instantly through Net Banking, Debit Card, UPI, or generate an RTGS/NEFT challan.",
            },
            {
              step: "Step 06",
              title: "Download Challan Acknowledgment",
              desc: "Save the generated Challan Receipt containing the BSR code, Challan Number, and 9-digit Transaction Reference Number.",
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

      {/* Section 06: TDS Certificate - Transition to Form 132 */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Issuance of TDS Certificate: Form 132 Replaces Form 16B
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Under the new Income-tax Act, 2025:
        </p>

        <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-3">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm sm:text-base">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <span>Form 132: Mandatory Statutory Certificate for Seller</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
            Legacy <strong>Form 16B has been formally retired and replaced by Form 132</strong>. Within 15 days of filing Form 141, the buyer must log in to the compliance portal (TRACES), download the digitally signed Form 132, and deliver it to the seller as conclusive legal proof of tax deposited with the government.
          </p>
        </div>
      </section>

      {/* Section 07: Critical Practical Nuances */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            07
          </span>
          Crucial Practical Rules for Property Buyers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Rule 1: TAN Not Required */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>1. Commercial TAN is Not Required</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Individual property buyers do not need to apply for a Tax Deduction Account Number (TAN) under Section 203A. The buyer&apos;s individual PAN is completely sufficient for filing Form 141.
            </p>
          </div>

          {/* Rule 2: Joint Buyers & Sellers */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm">
              <Users className="w-4.5 h-4.5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>2. Multi-Party Separate Filings</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              When there are multiple co-owners or co-purchasers, separate Form 141 returns must be filed for each individual combination. (e.g., 2 buyers purchasing from 2 sellers requires <strong>4 separate Form 141 filings</strong>).
            </p>
          </div>

          {/* Rule 3: Installment Payments */}
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-sm">
              <Coins className="w-4.5 h-4.5 text-amber-600 group-hover:scale-110 transition-transform" />
              <span>3. Under-Construction Tranches</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              If purchasing an under-construction unit from a builder paid across construction milestones, 1% TDS must be deducted from <strong>each installment</strong> and deposited via Form 141 within 30 days of that tranche.
            </p>
          </div>

          {/* Rule 4: NRI Sellers Warning */}
          <div className="group p-5 rounded-2xl border border-rose-200 bg-rose-50/40 shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold text-sm">
              <AlertTriangle className="w-4.5 h-4.5 text-rose-600 group-hover:scale-110 transition-transform" />
              <span>4. Non-Resident Seller: Form 141 Inapplicable</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Form 141 is strictly for resident sellers. If the seller is an NRI, Section 195 applies requiring 20% / 12.5% TDS, TAN registration, Challan 281, and Form 27Q. Filing Form 141 for an NRI seller is a severe statutory default!
            </p>
          </div>
        </div>
      </section>

      {/* Section 08: Penalties and Late Fees */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            08
          </span>
          Statutory Penalties for Non-Filing or Delay
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Failing to deduct or deposit TDS on property transactions triggers stringent legal sanctions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-1.5">
            <div className="text-xs font-bold text-amber-700">Late Fee under Sec 234E</div>
            <div className="text-lg font-bold text-slate-900">₹200 per day</div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Accumulates automatically for every day past the 30-day cutoff until Form 141 is submitted.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-1.5">
            <div className="text-xs font-bold text-blue-700">Delayed Deposit Interest</div>
            <div className="text-lg font-bold text-slate-900">1.5% per month</div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Under Section 201(1A), calculated from the date of deduction to the actual deposit date.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-1.5">
            <div className="text-xs font-bold text-rose-700">Penalty under Sec 271H</div>
            <div className="text-lg font-bold text-slate-900">₹10K – ₹1 Lakh</div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Imposed by the AO for delays exceeding one year or for submitting incorrect PANs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 09: Frequently Asked Questions */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions on Form 141 Property TDS
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
          Buying Real Estate Above ₹50 Lakh?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Let Merrafilings calculate the correct withholding, verify seller PAN status against circle rates, file statutory Form 141, and deliver Form 132 certificates to safeguard your property purchase.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/tds-return-filing"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-[13px] shadow-sm transition-all"
          >
            File Form 141 Property TDS
          </Link>
          <Link
            href="/income-tax"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-[13px] border border-white/20 transition-all"
          >
            Consult Real Estate Tax CA
          </Link>
        </div>
      </div>
    </TdsGuideLayout>
  );
}
