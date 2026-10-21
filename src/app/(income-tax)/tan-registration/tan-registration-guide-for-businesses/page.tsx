"use client";

import React, { useState } from "react";
import Link from "next/link";
import TanGuideLayout from "@/components/TanGuideLayout";
import {
  Hash,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Scale,
  Clock,
  Landmark,
  FileCheck,
  Receipt,
  AlertCircle,
  Cpu,
  RefreshCw,
  SendHorizontal,
} from "lucide-react";

export default function TanRegistrationGuideForBusinessesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is TAN registration mandatory for private limited companies and LLPs in India?",
      a: "Yes. Every company (private or public) and Limited Liability Partnership (LLP) registered in India must obtain a Tax Deduction and Collection Account Number (TAN) under Section 203A of the Income Tax Act, 1961, before deducting tax at source (TDS) on salaries (Section 192), vendor payments (Section 194C), professional fees (Section 194J), or rent (Section 194I).",
    },
    {
      q: "What is the penalty for conducting business without obtaining a TAN when TDS applies?",
      a: "Under Section 272BB(1) of the Income Tax Act, failure to apply for a TAN or failure to quote the allotted TAN in TDS payment challans (Challan 281), quarterly returns, or tax certificates attracts a mandatory statutory penalty of ₹10,000. Additionally, quoting a false TAN attracts another flat penalty of ₹10,000 under Section 272BB(1A).",
    },
    {
      q: "Can a business hold multiple TAN numbers for different branches?",
      a: "A company can hold separate branch TANs only if different autonomous branch offices or factory locations maintain separate payrolls and independent accounts for local TDS filings. However, holding multiple TANs for the same administrative office or entity without operational segregation is strictly prohibited, and duplicate TANs must be formally surrendered.",
    },
    {
      q: "Does a newly allotted TAN require annual renewal or recurring compliance fees?",
      a: "No. A TAN number possesses lifetime validity for the registered entity. It does not require annual renewal, renewal fees, or periodic re-validation. The same 10-digit number remains valid as long as the legal entity operates.",
    },
    {
      q: "How does TAN differ from PAN for a business organization?",
      a: "PAN (Permanent Account Number) is used for overall taxpayer identification, paying direct corporate taxes, and filing annual Income Tax Returns (ITR-6 or ITR-5). In contrast, TAN (Tax Deduction and Collection Account Number) is solely used for deducting tax from third parties (employees, contractors, landlords) and depositing it into the Central Government's account via Challan 281.",
    },
    {
      q: "What is the government fee for filing Form 49B online?",
      a: "The statutory government fee for processing Form 49B on the Protean NSDL TIN portal is ₹65 plus 18% GST (total ₹77). This fee can be remitted online via Net Banking, Debit Card, Credit Card, or UPI.",
    },
  ];

  return (
    <TanGuideLayout
      currentSlug="tan-registration-guide-for-businesses"
      title="TAN Registration: A Comprehensive Guide for Businesses in India"
      breadcrumbLabel="Business Guide"
      metaPublishedDate="AY 2026-27 Compliant / Section 203A"
      readingTime="7 min read"
      authorName="Merrafilings Direct Tax & TDS Compliance Desk"
    >
      {/* Intro Box */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200/80 rounded-2xl p-6 sm:p-7 mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Hash className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Statutory Deductor Mandate under Section 203A
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              The <strong>Tax Deduction and Collection Account Number (TAN)</strong> is a mandatory 10-digit alphanumeric code issued by the Income Tax Department under <strong>Section 203A of the Income Tax Act, 1961</strong>. Any commercial establishment, employer, LLP, partnership, or proprietor deducting Tax Deducted at Source (TDS) or collecting Tax Collected at Source (TCS) must secure and quote TAN across all statutory filings. Operating without TAN triggers a mandatory <strong>₹10,000 flat penalty under Section 272BB</strong> and causes severe banking rejections.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: What is TAN Registration? */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          What is TAN Registration?
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          TAN registration is the formal statutory process by which an Indian or foreign entity liable to deduct or collect taxes at source petitions the Income Tax Department for a unique 10-character code. The allotment is administered through <strong>Protean eGov Technologies Limited (formerly NSDL e-Governance Infrastructure Limited)</strong> via statutory <strong>Form 49B</strong>.
        </p>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Without an active TAN, no financial institution in India can accept withholding tax deposits via <strong>Challan ITNS 281</strong>, nor can your accounts department transmit quarterly TDS statements in <strong>Form 24Q, 26Q, 27Q, or 27EQ</strong>.
        </p>

        {/* 10-Digit Alphanumeric Code Anatomy */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white mt-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              10-Digit Alphanumeric Structure of a TAN Number
            </span>
            <span className="text-xs text-slate-400">Example: DELM12345A</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-xl font-mono font-bold text-emerald-400 mb-1">DEL</div>
              <div className="text-[11px] text-slate-300 font-semibold">First 3 Letters</div>
              <div className="text-[10px] text-slate-400 mt-1">Jurisdiction City Code (Delhi)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-xl font-mono font-bold text-sky-400 mb-1">M</div>
              <div className="text-[11px] text-slate-300 font-semibold">4th Letter</div>
              <div className="text-[10px] text-slate-400 mt-1">Deductor Name Initial (Merrafilings)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-xl font-mono font-bold text-amber-400 mb-1">12345</div>
              <div className="text-[11px] text-slate-300 font-semibold">5 Numerical Digits</div>
              <div className="text-[10px] text-slate-400 mt-1">Unique Central System Sequence</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-xl font-mono font-bold text-purple-400 mb-1">A</div>
              <div className="text-[11px] text-slate-300 font-semibold">10th Letter</div>
              <div className="text-[10px] text-slate-400 mt-1">System Internal Check Character</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Reasons for Business TAN Registration */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Key Reasons Every Business Must Register for TAN
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Registering your TAN is not merely an optional tax exercise; it is an uncompromising legal obligation that forms the foundation of corporate tax governance:
        </p>

        {/* 4 Interactive Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              1. Mandatory by Law (Section 203A)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              All entities responsible for deducting or collecting tax at source are statutory bound to obtain a TAN. Operating without one triggers a mandatory flat penalty of ₹10,000 under Section 272BB.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
              2. Seamless TDS Challan 281 Payments
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              TDS deductions must be deposited into the government treasury by the 7th of every succeeding month using Challan ITNS 281. Banks will refuse Challan 281 payments if the 10-digit TAN is absent.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5">
              3. Issuing Form 16 &amp; Form 16A Certificates
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Employees and vendors demand valid TDS certificates for claiming tax credits. Having an active TAN registered on the TRACES portal is the only legal route to generate digitally signed Form 16/16A.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
              4. Complete Recognition by CBDT
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              A valid TAN maps your enterprise to the correct jurisdictional Assessing Officer (AO). It credits deducted taxes directly to your payees' Form 26AS / AIS / TIS, preventing payee disputes and legal notices.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Registration Workflow */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Step-by-Step Registration Procedure (Online &amp; Offline)
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Businesses can secure their TAN either via the digital Protean NSDL e-Governance portal or through physical TIN Facilitation Centers:
        </p>

        {/* Dual Mode Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Online Process */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span>Online Process (Form 49B via Protean)</span>
            </div>
            <ol className="space-y-2.5 text-xs text-slate-700 list-decimal pl-4 font-normal leading-relaxed">
              <li>
                <strong>Access Official Portal:</strong> Visit the Protean TIN-NSDL portal and select <em>Apply for New TAN (Form 49B)</em>.
              </li>
              <li>
                <strong>Jurisdiction AO Code Mapping:</strong> Select the Area Code, AO Type, Range Code, and AO Number based on your registered address.
              </li>
              <li>
                <strong>Complete Enterprise Details:</strong> Input applicant category (Company, Individual, Firm, Trust), PAN, and Principal Officer details.
              </li>
              <li>
                <strong>Pay Statutory Government Fee:</strong> Remit ₹77 (₹65 application fee + 18% GST) via Net Banking, Debit Card, or UPI.
              </li>
              <li>
                <strong>Acknowledgement Generation:</strong> Save the generated 14-digit acknowledgement number for tracking status.
              </li>
              <li>
                <strong>Document Dispatch:</strong> Sign the printed acknowledgment slip and dispatch it with PAN and address proof to Protean's Pune office within 15 days (unless DSC e-sign was executed).
              </li>
            </ol>
          </div>

          {/* Offline Process */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Offline Process (TIN Facilitation Center)</span>
            </div>
            <ol className="space-y-2.5 text-xs text-slate-700 list-decimal pl-4 font-normal leading-relaxed">
              <li>
                <strong>Procure Physical Form 49B:</strong> Download Form 49B from the Income Tax portal or collect from a certified TIN-FC.
              </li>
              <li>
                <strong>Complete in Block Letters:</strong> Fill the form legibly in English with black ink, ensuring no overwriting in critical fields.
              </li>
              <li>
                <strong>Attach Entity Proofs:</strong> Enclose self-attested copies of the Certificate of Incorporation / Partnership Deed, entity PAN, and office address proof.
              </li>
              <li>
                <strong>Submit at Nearest TIN-FC:</strong> Hand over the physical docket to an authorized TIN Facilitation Center executive.
              </li>
              <li>
                <strong>Fee Remittance &amp; Counterfoil:</strong> Pay the statutory processing fee in cash or demand draft and collect the counterfoil receipt.
              </li>
              <li>
                <strong>Postal TAN Delivery:</strong> The Income Tax Department dispatches the physical TAN allotment letter to the registered office address.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4: Essential Documents Checklist */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Essential Documents Required for Form 49B TAN Filing
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Ensuring that all evidentiary records match your corporate registration data eliminates unnecessary departmental scrutiny and rejections:
        </p>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs hover:border-emerald-400 hover:shadow-xs transition-all">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 font-bold text-xs">
              01
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Entity Proof</h4>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Certificate of Incorporation (CIN), registered Partnership Deed, LLP Agreement, or Trust Deed.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2 font-bold text-xs">
              02
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Entity PAN Card</h4>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Copy of the active PAN card issued to the corporate entity, partnership firm, trust, or sole proprietor.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs hover:border-purple-400 hover:shadow-xs transition-all">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2 font-bold text-xs">
              03
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Office Address Proof</h4>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Recent electricity bill, water bill, registered rent agreement, or property tax receipt for the premises.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2 font-bold text-xs">
              04
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Principal Officer KYC</h4>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
              PAN, Aadhaar, designation, mobile number, and verified email of the Managing Director, Partner, or Karta.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Recent Statutory Developments & Digital Modernization */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Recent Developments &amp; Updates in TAN Registration
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The Central Board of Direct Taxes (CBDT) and the Ministry of Corporate Affairs have unified tax infrastructure over recent fiscal updates:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Automated MCA Allotment via SPICe+:</strong>
              New companies registered through the MCA portal receive their PAN and TAN automatically embedded within the Certificate of Incorporation without filing separate Form 49B applications.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">AI-Powered Data Scrubbing:</strong>
              Protean now deploys automated name-matching and jurisdictional AO pin code validation, eliminating misrouted applications and cutting allotment turnaround from 14 days down to 5–7 business days.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Stricter Section 272BB Enforcement:</strong>
              The tax department has integrated Challan 281 reconciliation with Form 26AS. Businesses deducting TDS but using incorrect or dummy TAN codes face immediate automated penalty notices under Section 272BB(1A).
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Common Mistakes to Avoid */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Common Pitfalls to Avoid in TAN Registration
        </h2>
        <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 text-rose-950 space-y-3">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-rose-800">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Avoid These High-Risk Non-Compliance Traps</span>
          </div>
          <ul className="space-y-2 text-xs text-rose-900 list-disc pl-4 font-normal leading-relaxed">
            <li>
              <strong>Selecting the Wrong AO Code:</strong> Choosing an incorrect Ward or Circle misplaces your tax deductor file with an erroneous Assessing Officer, requiring an arduous formal transfer request later.
            </li>
            <li>
              <strong>Name Mismatch with Entity PAN:</strong> If the enterprise name entered in Form 49B varies even slightly from the CBDT PAN database, the application will be put on hold.
            </li>
            <li>
              <strong>Failing to Dispatch Physical Acknowledgment within 15 Days:</strong> If the application was not signed digitally via Class 3 DSC, the physical signed acknowledgment must reach Protean Pune within 15 days, or the request lapses automatically.
            </li>
            <li>
              <strong>Holding Multiple Duplicate TANs:</strong> Entities that accidentally obtain duplicate TANs face continuous scrutiny. The redundant TAN must be formally surrendered to the Assessing Officer.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 7: Statutory Comparison Table */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            07
          </span>
          Comparison: PAN vs TAN vs GSTIN vs DIN
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Understanding the distinct legal functions of corporate compliance identifiers prevents costly administrative confusion:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Identifier</th>
                <th className="py-3 px-4">Governing Law</th>
                <th className="py-3 px-4">Primary Purpose</th>
                <th className="py-3 px-4">Mandatory For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-emerald-800">TAN (10 Digits)</td>
                <td className="py-3 px-4">Section 203A, Income Tax Act</td>
                <td className="py-3 px-4">TDS/TCS deduction, Challan 281 deposit &amp; Form 16 issuance</td>
                <td className="py-3 px-4">All employers, deductors &amp; tax collectors</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-blue-800">PAN (10 Digits)</td>
                <td className="py-3 px-4">Section 139A, Income Tax Act</td>
                <td className="py-3 px-4">Taxpayer identification, advance tax, ITR-6 corporate tax returns</td>
                <td className="py-3 px-4">All taxpayers, companies, LLPs &amp; individuals</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-purple-800">GSTIN (15 Digits)</td>
                <td className="py-3 px-4">CGST / SGST Act, 2017</td>
                <td className="py-3 px-4">Collecting &amp; remitting indirect goods &amp; services tax</td>
                <td className="py-3 px-4">Businesses crossing ₹20L/₹40L threshold or inter-state sales</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-amber-800">DIN (8 Digits)</td>
                <td className="py-3 px-4">Companies Act, 2013</td>
                <td className="py-3 px-4">Director identification for corporate board governance</td>
                <td className="py-3 px-4">Any individual serving as Director in an Indian company</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Interactive FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            08
          </span>
          Frequently Asked Questions on Business TAN Registration
        </h2>
        <div className="space-y-3 pt-1">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-3xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-[14px] text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </TanGuideLayout>
  );
}
