"use client";

import React, { useState } from "react";
import Link from "next/link";
import TanGuideLayout from "@/components/TanGuideLayout";
import {
  Laptop,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Building2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CreditCard,
  SendHorizontal,
  Search,
  Scale,
  Award,
  Clock,
  KeyRound,
  FileCheck,
  Layers,
  Cpu,
} from "lucide-react";

export default function OnlineTanApplicationProcessIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I apply for TAN completely online without visiting any government office?",
      a: "Yes. The entire TAN application process under Form 49B is hosted online on the official Protean (formerly NSDL) TIN portal. You can complete the form, pay the statutory ₹77 fee electronically, and verify the submission using a digital signature certificate (DSC) or dispatch the signed physical acknowledgment slip to the central processing center in Pune.",
    },
    {
      q: "What is the 14-digit acknowledgment number received after online TAN submission?",
      a: "The 14-digit acknowledgment number is a unique tracking code generated instantly upon successful online submission of Form 49B and fee payment. It allows you to monitor the real-time processing status of your TAN allotment on the Protean tracking portal.",
    },
    {
      q: "How do I find the correct Assessing Officer (AO) Code for my business online?",
      a: "The Protean TIN portal provides an integrated AO Code search tool. You select your city, state, and deductor category (Company, Individual, Partnership, etc.). The system displays the specific Area Code, AO Type, Range Code, and AO Number based on your registered office pin code and jurisdictional tax ward.",
    },
    {
      q: "What payment modes are accepted for the online TAN application fee?",
      a: "The government fee of ₹77 (₹65 application fee + 18% GST) can be paid online via Net Banking, Debit Card, Credit Card, or UPI directly through the payment gateway on the Protean TIN portal.",
    },
    {
      q: "How long does it take to receive the TAN number after submitting the online application?",
      a: "Once Form 49B is processed and verified by the Income Tax Department, the 10-digit TAN number is typically generated within 5 to 7 working days. The digitally signed TAN Allotment Letter is sent immediately to the applicant's registered email address, followed by physical dispatch.",
    },
    {
      q: "What must be done immediately after the TAN number is allotted online?",
      a: "After allotment, you must complete two critical portal activations: (1) Register your TAN as a 'Tax Deductor & Collector' on the Income Tax e-Filing portal (incometax.gov.in), and (2) Create a deductor account on the TRACES portal (tdscpc.gov.in) to enable quarterly return filings and download Form 16 / 16A certificates.",
    },
  ];

  return (
    <TanGuideLayout
      currentSlug="online-tan-application-process-india"
      title="Online TAN Number Application Process in India: Step-by-Step Guide"
      breadcrumbLabel="Online Application Process"
      metaPublishedDate="AY 2026-27 Compliant / Section 203A"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax & TDS Compliance Desk"
    >
      {/* Intro Box */}
      <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 border border-sky-200/80 rounded-2xl p-6 sm:p-7 mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Digital E-Filing Mandate for Form 49B
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Acquiring a <strong>Tax Deduction and Collection Account Number (TAN)</strong> has been completely streamlined through the official <strong>Protean (NSDL) TIN e-Governance portal</strong>. Whether you are an expanding startup, a corporate enterprise, an employer disbursing salaries, or an entity paying contractor fees, applying online guarantees faster turnaround, automated validation, and immediate generation of your <strong>14-digit tracking acknowledgment</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Advantages of Applying Online */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Why Apply for TAN Online? Core Advantages
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The transition to electronic filing of statutory Form 49B provides operational benefits over manual paper queues at regional tax offices:
        </p>

        {/* 4 Interactive Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-sky-500 hover:shadow-md hover:shadow-sky-500/10 hover:bg-sky-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors mb-1.5">
              1. 100% Anywhere, Anytime Access
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              File Form 49B securely 24/7 from any location in India or abroad without queuing at physical TIN Facilitation Centers or waiting for regional office working hours.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              2. Real-Time Data Validation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              The online portal automatically matches PAN details against the CBDT database and validates AO codes against postal pin codes, eliminating rejection due to formatting errors.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5">
              3. Instant Fee Remittance &amp; Tracking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Pay the statutory ₹77 government fee instantly via UPI, Net Banking, or Cards, generating an immediate 14-digit acknowledgment number for end-to-end status tracking.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
              4. Fast-Track Digital Allotment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Digital processing drastically cuts TAN issuance time from 20 days down to 5–7 business days, delivering an official digitally signed allotment letter straight to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Step-by-Step Online TAN Application Guide */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Step-by-Step Online TAN Application (Form 49B Walkthrough)
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Follow this structured roadmap to execute an error-free online submission on the Protean TIN e-Governance portal:
        </p>

        {/* 6 Sequential Steps */}
        <div className="space-y-3.5 pt-2">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col sm:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              1
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Step 1: Access the Official Protean (NSDL) TIN Portal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Visit the official Protean eGov portal at <code>tin-nsdl.com</code>. Navigate to the <strong>Services</strong> dropdown and click on <strong>TAN</strong>. Select <strong>Apply Online &gt; New TAN (Form 49B)</strong>.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col sm:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              2
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Step 2: Select the Appropriate Applicant Category
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Choose the correct deductor entity category: <em>Company, Individual / Hindu Undivided Family (HUF), Partnership Firm / LLP, Association of Persons (AOP), Trust, Branch / Division, or Statutory Body</em>. This locks in the specific legal validation parameters.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col sm:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              3
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Step 3: Determine and Map the Assessing Officer (AO) Code
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Use the integrated search tool to locate your jurisdictional tax office. Fill in the <strong>Area Code, AO Type, Range Code, and AO Number</strong>. Selecting the correct code ensures your deductor file is linked to the accurate tax ward.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col sm:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              4
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Step 4: Complete Enterprise Particulars &amp; Responsible Officer Details
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Enter the exact legal business name, registered corporate address, entity PAN, and contact details. Provide the full name, PAN, designation, and residential address of the Principal Officer (Director, Partner, or Karta).
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col sm:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              5
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Step 5: Remit Government Fee Online
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Proceed to the payment gateway. Pay the statutory government fee of <strong>₹77 (₹65 base + 18% GST)</strong> using Net Banking, Debit Card, Credit Card, or UPI. A transaction confirmation voucher will be displayed immediately.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col sm:flex-row items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              6
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Step 6: Receive 14-Digit Acknowledgment &amp; Complete Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Save and print the generated 14-digit acknowledgment slip. If not using a Class 3 DSC, affix the authorized signatory's signature and dispatch the acknowledgment with proof of identity and address to Protean's Pune office within 15 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Essential Documents Checklist */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Documents Required for Online TAN Application
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Keep scanned copies of the following documents readily accessible during the application process:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs space-y-2">
            <strong className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-600" />
              For Companies &amp; LLPs:
            </strong>
            <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 font-normal">
              <li>Certificate of Incorporation (CIN) or LLP Registration Certificate</li>
              <li>PAN card copy of the corporate entity / LLP</li>
              <li>Registered office address proof (utility bill, lease deed)</li>
              <li>Board resolution / authorization letter appointing the Principal Officer</li>
              <li>PAN and Aadhaar card of the authorized Director or Partner</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs space-y-2">
            <strong className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              For Proprietorships, Firms &amp; Trusts:
            </strong>
            <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 font-normal">
              <li>Registered Partnership Deed or Trust Deed copy</li>
              <li>PAN card of the partnership firm, trust, or sole proprietor</li>
              <li>Address proof of business premises (electricity bill, property receipt)</li>
              <li>Identity and address proof (Aadhaar / Passport) of Managing Partner / Trustee</li>
              <li>GST registration certificate or Udyam MSME registration (if applicable)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Post-Allotment Digital Activations */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Post-Allotment Mandatory Digital Portal Activations
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Receiving your TAN is only step one. To legally fulfill tax deduction duties, you must complete onboarding across two critical Central Government systems:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
              <KeyRound className="w-4 h-4 text-indigo-600" />
              <span>1. Income Tax E-Filing Portal (incometax.gov.in)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Register your 10-digit TAN as a <strong>Tax Deductor &amp; Collector</strong>. Verify using OTP sent to the registered mobile and email. This portal allows you to file electronic quarterly TDS statements, view compliance notices, and remit advance TDS payments.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-teal-600" />
              <span>2. TRACES Deductor Portal (tdscpc.gov.in)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Register on TRACES (TDS Reconciliation Analysis and Correction Enabling System). Once your first quarterly TDS return is processed, TRACES enables downloading digitally signed <strong>Form 16</strong> (salary) and <strong>Form 16A</strong> (non-salary) certificates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Statutory Deductor Penalties */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Statutory Penalties for TAN Non-Compliance
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Default Category</th>
                <th className="py-3 px-4">Statutory Section</th>
                <th className="py-3 px-4">Legal Consequence / Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Failure to Apply or Quote TAN</td>
                <td className="py-3 px-4">Section 272BB</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Flat penalty of ₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Quoting False / Dummy TAN</td>
                <td className="py-3 px-4">Section 272BB(1A)</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Flat penalty of ₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-amber-700">Delayed TDS Remittance</td>
                <td className="py-3 px-4">Section 201(1A)</td>
                <td className="py-3 px-4 font-semibold text-amber-600">1.5% interest per month from deduction date</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-purple-700">Late Filing of Quarterly TDS Returns</td>
                <td className="py-3 px-4">Section 234E</td>
                <td className="py-3 px-4 font-semibold text-purple-600">₹200 per day of delay up to total TDS amount</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Interactive FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            06
          </span>
          Frequently Asked Questions on Online TAN Application
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
