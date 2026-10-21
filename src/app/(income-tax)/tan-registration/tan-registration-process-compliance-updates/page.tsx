"use client";

import React, { useState } from "react";
import Link from "next/link";
import TanGuideLayout from "@/components/TanGuideLayout";
import {
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Landmark,
  Scale,
  RefreshCw,
  Cpu,
  Layers,
  FileCheck,
  AlertCircle,
  Building2,
  Hash,
} from "lucide-react";

export default function TanRegistrationProcessComplianceUpdatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What are the quarterly TDS return filing due dates for TAN holders?",
      a: "Quarterly TDS return deadlines are strictly mandated by the CBDT: Quarter 1 (April–June) is due on 31st July; Quarter 2 (July–September) is due on 31st October; Quarter 3 (October–December) is due on 31st January; and Quarter 4 (January–March) is due on 31st May. Missing these dates triggers a mandatory ₹200/day late fee under Section 234E.",
    },
    {
      q: "When must monthly TDS deductions be deposited into the government account?",
      a: "TDS deducted during any calendar month must be remitted to the Central Government using Challan ITNS 281 on or before the 7th day of the succeeding month. For taxes deducted in March, the payment due date is extended to 30th April.",
    },
    {
      q: "What is Section 234E late fee for delayed TDS filing?",
      a: "Under Section 234E of the Income Tax Act, any deductor who fails to file their quarterly TDS statement (Form 24Q, 26Q, 27Q) by the prescribed deadline must pay a mandatory late filing fee of ₹200 for every day during which the failure continues, up to the total amount of TDS deducted in that quarter.",
    },
    {
      q: "What are the latest technological updates introduced by CBDT for TAN holders?",
      a: "Recent upgrades include: (1) Real-time automated cross-verification of Challan 281 deposits against the e-Pay Tax ledger; (2) Instant synchronization of deductor returns with payees' Annual Information Statement (AIS) and Form 26AS; (3) Mobile notifications and app-based tracking of TDS compliance status; and (4) Integrated SPICe+ auto-allotment of TAN during company incorporation.",
    },
    {
      q: "Can a business be prosecuted criminally for failing to deposit deducted TDS?",
      a: "Yes. Under Section 276B of the Income Tax Act, 1961, if an employer or deductor deducts tax at source from salaries or vendors but fails to deposit it into the government treasury, the Principal Officer is liable for rigorous imprisonment of between 3 months and 7 years, along with a fine.",
    },
    {
      q: "What is the procedure for updating or correcting errors in an existing TAN?",
      a: "If there is a change in the entity's legal name, registered office address, or authorized signatory, an online 'Changes or Correction in TAN Data' application must be filed on the Protean TIN portal using Form 49B, supported by documentary proof such as the amended Certificate of Incorporation or revised Partnership Deed.",
    },
  ];

  return (
    <TanGuideLayout
      currentSlug="tan-registration-process-compliance-updates"
      title="TAN Registration in India: Process, Compliance, and Key Updates Explained"
      breadcrumbLabel="Compliance & Key Updates"
      metaPublishedDate="AY 2026-27 Compliant / Section 203"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax & TDS Compliance Desk"
    >
      {/* Intro Box */}
      <div className="bg-gradient-to-r from-purple-50 via-emerald-50 to-teal-50 border border-purple-200/80 rounded-2xl p-6 sm:p-7 mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              The Ongoing Compliance Mandate Under Section 203
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Acquiring a <strong>Tax Deduction and Collection Account Number (TAN)</strong> is just the starting point of your corporate tax responsibilities. Under <strong>Section 203 of the Income Tax Act, 1961</strong>, deductors bear continuous statutory obligations: monthly remittance by the 7th, quarterly return statements, issuance of digitally signed Form 16/16A certificates, and adherence to <strong>CBDT's digital compliance architecture</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Overview & Getting a TAN */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Securing Your 10-Digit TAN: The Dual Registration Pathways
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The Tax Deduction and Collection Account Number (TAN) is a unique 10-character code mandated for all authorized entities deducting or collecting tax on behalf of the Central Government. The registration can be executed via two pathways:
        </p>

        {/* 2 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
              Online Path (Protean TIN-NSDL)
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-normal leading-relaxed">
              <li>Log onto the Protean TIN portal and choose Form 49B.</li>
              <li>Map the jurisdictional Assessing Officer (AO) Code by pin code.</li>
              <li>Input entity PAN, legal name, and Principal Officer details.</li>
              <li>Pay the ₹77 statutory fee via UPI, Net Banking, or Debit Card.</li>
              <li>Receive an instant 14-digit acknowledgment number for tracking.</li>
            </ul>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
              Offline Path (TIN Facilitation Center)
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-normal leading-relaxed">
              <li>Procure physical Form 49B from an authorized TIN-FC.</li>
              <li>Fill the application legibly in BLOCK letters with black ink.</li>
              <li>Enclose self-attested entity incorporation proof and office address.</li>
              <li>Submit docket at the nearest center and pay processing fee.</li>
              <li>Retain stamped counterfoil receipt to monitor physical TAN delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Post-Registration Compliance Obligations */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Post-Allotment Statutory Compliance Architecture
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Once your TAN is allotted, your enterprise is held to strict statutory timelines under the Income Tax Rules. Non-compliance results in severe financial and criminal penalties:
        </p>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Hash className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              1. Mandatory Quotation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              TAN must be quoted in all Challan 281 payments, quarterly returns (24Q, 26Q, 27Q), certificates (Form 16/16A), and all official correspondence with the CBDT.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
              2. Monthly 7th Remittance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              All tax deducted during a month must be credited into the government treasury by the 7th of the following month (30th April for March deductions).
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5">
              3. Quarterly Return Filing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Transmit validated electronic returns (Form 24Q for salary, 26Q for domestic vendors, 27Q for non-residents) on the e-filing portal before statutory cutoffs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Statutory Compliance Calendar */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Quarterly TDS Compliance Calendar &amp; Statutory Cutoffs
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Financial Quarter</th>
                <th className="py-3 px-4">Period Covered</th>
                <th className="py-3 px-4">TDS Return Due Date</th>
                <th className="py-3 px-4">Form 16 / 16A Issuance Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">Quarter 1 (Q1)</td>
                <td className="py-3 px-4">1st April to 30th June</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">31st July</td>
                <td className="py-3 px-4">15th August (Form 16A)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">Quarter 2 (Q2)</td>
                <td className="py-3 px-4">1st July to 30th September</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">31st October</td>
                <td className="py-3 px-4">15th November (Form 16A)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">Quarter 3 (Q3)</td>
                <td className="py-3 px-4">1st October to 31st December</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">31st January</td>
                <td className="py-3 px-4">15th February (Form 16A)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">Quarter 4 (Q4)</td>
                <td className="py-3 px-4">1st January to 31st March</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">31st May</td>
                <td className="py-3 px-4">15th June (Form 16 &amp; 16A)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Key Recent Updates in TAN Operations */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Recent Technological &amp; Compliance Updates
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The Income Tax Department and CBDT have overhauled direct tax infrastructure to enhance transparency and eliminate TDS leakage:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Project Insight &amp; Automated Default Intimations:</strong>
              The Central Processing Cell (TDS-CPC) in Vaishali automatically flags short-deductions, pan-not-available penal rates (Section 206AA), and interest dues under Section 201(1A), issuing automated demand intimations directly to deductor portals.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Integration with AIS &amp; Form 26AS:</strong>
              TDS reported under your TAN instantly updates the payee's Annual Information Statement (AIS) and Taxpayer Information Summary (TIS). Any delayed return directly impedes the payee's income tax refund, leading to commercial friction.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Smartphone App-Based Status Tracking:</strong>
              The Income Tax Department has enabled deductor mobile services allowing business owners to monitor real-time Challan 281 credit status and view pending TDS correction requests from any mobile device.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Operational Challenges & Solutions */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Common Deductor Challenges &amp; Practical Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Challenge: Incorrect Challan 281 TAN Entry
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Depositing TDS under an erroneous TAN credits tax to someone else's account, leaving your return uncredited.
            </p>
            <div className="text-[11px] text-emerald-700 font-medium bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
              <strong>Solution:</strong> File a Challan Correction Request (OLTAS) online through your bank or via the TRACES deductor dashboard.
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Challenge: Invalid Payee PANs (Section 206AA)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Entering faulty vendor PANs triggers a mandatory 20% higher deduction demand plus interest from TRACES.
            </p>
            <div className="text-[11px] text-emerald-700 font-medium bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
              <strong>Solution:</strong> Utilize the TRACES 'PAN Verification' tool before releasing invoice payments to validate active PAN status.
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Comprehensive Penalty Matrix */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Statutory Penalty Matrix for Non-Compliance
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Infraction</th>
                <th className="py-3 px-4">Governing Section</th>
                <th className="py-3 px-4">Statutory Fine / Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Failure to Apply or Quote TAN</td>
                <td className="py-3 px-4">Section 272BB</td>
                <td className="py-3 px-4 font-semibold text-rose-600">₹10,000 flat penalty</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Quoting False / Inaccurate TAN</td>
                <td className="py-3 px-4">Section 272BB(1A)</td>
                <td className="py-3 px-4 font-semibold text-rose-600">₹10,000 flat penalty</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-amber-700">Late Deposit of Deducted TDS</td>
                <td className="py-3 px-4">Section 201(1A)</td>
                <td className="py-3 px-4 font-semibold text-amber-600">1.5% interest per month + 30% expenditure disallowance (Sec 40(a))</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-purple-700">Late Filing of Quarterly TDS Returns</td>
                <td className="py-3 px-4">Section 234E</td>
                <td className="py-3 px-4 font-semibold text-purple-600">Mandatory ₹200 per day of delay</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-red-800">Failure to File TDS Return (&gt; 1 Year)</td>
                <td className="py-3 px-4">Section 271H</td>
                <td className="py-3 px-4 font-bold text-rose-700">₹10,000 up to ₹1,00,000 penalty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Interactive FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            07
          </span>
          Frequently Asked Questions on TAN Compliance &amp; Updates
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
