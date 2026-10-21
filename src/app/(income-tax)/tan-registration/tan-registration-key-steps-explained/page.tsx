"use client";

import React, { useState } from "react";
import Link from "next/link";
import TanGuideLayout from "@/components/TanGuideLayout";
import {
  FileText,
  CheckCircle2,
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
  Hash,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

export default function TanRegistrationKeyStepsExplainedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Form 49B and where is it filed?",
      a: "Form 49B is the prescribed statutory application form under Rule 114A of the Income Tax Rules, 1962, for the allotment of a Tax Deduction and Collection Account Number (TAN). It is submitted electronically on the official Protean (formerly NSDL) TIN website or physically at certified TIN Facilitation Centers.",
    },
    {
      q: "What happens if I make a typographical mistake in Form 49B?",
      a: "Discrepancies in applicant details, entity name, or address will cause the application to be placed on hold or rejected by the Income Tax Department. You will need to submit clarification or file a fresh correction request, causing delays of 2 to 3 weeks.",
    },
    {
      q: "How can I track the live status of my TAN application?",
      a: "You can track the progress of your application on the Protean tracking portal by selecting 'Status Track for TAN' and entering your unique 14-digit acknowledgment number. The portal provides real-time updates from document verification to TAN allotment.",
    },
    {
      q: "Is an in-person interview or biometric verification required for TAN registration?",
      a: "No. TAN registration requires no physical appearance, police verification, or biometric scanning. All verification is document-based, cross-checked against the CBDT PAN database and MCA incorporation records.",
    },
    {
      q: "How is the physical TAN allotment letter delivered?",
      a: "Once allotted, an intimation email with the digitally signed TAN Allotment Letter is sent immediately to the applicant's registered email address. Subsequently, the Income Tax Department dispatches the physical document to the registered office address via registered speed post.",
    },
    {
      q: "Can I use my PAN in place of TAN while filing quarterly TDS returns?",
      a: "No. PAN and TAN cannot be used interchangeably. Section 203A explicitly mandates that only TAN must be quoted on all TDS challans (Challan 281), quarterly returns (Form 24Q/26Q), and TDS certificates (Form 16/16A). Quoting a PAN instead of a TAN attracts a ₹10,000 penalty under Section 272BB.",
    },
  ];

  return (
    <TanGuideLayout
      currentSlug="tan-registration-key-steps-explained"
      title="Understanding TAN Registration: Key Steps Explained"
      breadcrumbLabel="Key Steps Explained"
      metaPublishedDate="AY 2026-27 Compliant / Section 203A"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax & TDS Compliance Desk"
    >
      {/* Intro Box */}
      <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-purple-50 border border-teal-200/80 rounded-2xl p-6 sm:p-7 mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Mastering the TAN Registration Process: Step-by-Step
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Navigating the statutory <strong>Tax Deduction and Collection Account Number (TAN)</strong> registration process under <strong>Section 203A of the Income Tax Act, 1961</strong> requires absolute accuracy. From selecting your jurisdictional <strong>Assessing Officer (AO) Code</strong> to submitting <strong>Form 49B</strong> and securing activation on the <strong>TRACES portal</strong>, every step must be executed with precision to prevent costly delays and statutory <strong>₹10,000 non-compliance fines</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: What is TAN Registration & Legal Significance */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          What is TAN Registration? Legal Framework Explained
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The Tax Deduction and Collection Account Number (TAN) is a 10-digit alphanumeric code issued by the Income Tax Department to authorized entities deducting or collecting tax at source. It serves three statutory functions:
        </p>

        {/* 3 Core Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
            <strong className="text-xs font-bold text-slate-900 block mb-1">Deductor Authorization:</strong>
            <span className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Provides lawful authority to deduct tax on salaries, vendor contracts, professional charges, and commercial rent.
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
            <strong className="text-xs font-bold text-slate-900 block mb-1">Challan 281 Reconciliation:</strong>
            <span className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Ensures withholding tax deposits made via Challan 281 are correctly credited to the Central Government's account.
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
            <strong className="text-xs font-bold text-slate-900 block mb-1">TRACES Certificate Issuance:</strong>
            <span className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Enables downloading digitally signed Form 16 / 16A certificates directly credited to payees' Form 26AS.
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: 4 Core Phases of the TAN Registration Journey */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          The 4 Core Phases of TAN Registration
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          A successful TAN allotment moves through 4 distinct procedural milestones:
        </p>

        {/* 4 Interactive Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              Phase 1: Form 49B &amp; AO Code Mapping
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Initiate Form 49B on the Protean TIN portal. Accurately identify your Assessing Officer (AO) Code: Area Code, AO Type, Range Code, and AO Number based on registered office pin code and deductor type.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
              Phase 2: Data Entry &amp; Entity Validation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Input the exact corporate legal name, PAN, registered office address, and contact credentials. Enter the Principal Officer's identity and designation to satisfy regulatory KYC standards.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5">
              Phase 3: Fee Payment &amp; Acknowledgment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Pay the statutory ₹77 government fee (₹65 application fee + 18% GST) via Net Banking, Debit Card, or UPI. The portal instantly generates your unique 14-digit acknowledgment number for tracking.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
              Phase 4: Department Verification &amp; Allotment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Income Tax authorities verify the submission against CBDT PAN records. The 10-digit TAN number is allotted within 5–7 business days, delivering an official allotment letter to your email and registered office.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Breakdown of Form 49B Fields */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          Detailed Breakdown of Form 49B Fields
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Accurate entry across the core sections of statutory Form 49B ensures an unhindered approval flow:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
            <strong className="text-xs font-semibold text-slate-900 block mb-1">
              Field 1: Assessing Officer (AO) Details
            </strong>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Comprises 4 components: <em>Area Code (3 letters), AO Type (2 letters), Range Code (3 digits), and AO Number (2 digits)</em>. Mapped via your pin code and corporate structure.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
            <strong className="text-xs font-semibold text-slate-900 block mb-1">
              Field 2: Category of Deductor
            </strong>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Select Central/State Government, Statutory Body, Company, Branch of Company, Individual/HUF, Firm, or Association of Persons (AOP). Determines statutory representation requirements.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
            <strong className="text-xs font-semibold text-slate-900 block mb-1">
              Field 3: Deductor Name &amp; Address
            </strong>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Enter the exact business name matching the Certificate of Incorporation or PAN card. Registered office address must correspond with submitted electricity bills or lease deeds.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
            <strong className="text-xs font-semibold text-slate-900 block mb-1">
              Field 4: Principal Officer Particulars
            </strong>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Full legal name, PAN, designation (Director, Managing Partner, Karta, Principal Officer), residential address, email, and mobile phone number for OTP authentications.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Key Considerations & Mistakes to Avoid */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Key Considerations &amp; Common Errors to Avoid
        </h2>
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-3">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>High-Priority Application Verification Checklist</span>
          </div>
          <ul className="space-y-2 text-xs text-amber-900 list-disc pl-4 font-normal leading-relaxed">
            <li>
              <strong>AO Code Verification:</strong> Never guess your AO code. Consult the Protean jurisdictional lookup tool to ensure proper tax ward assignment.
            </li>
            <li>
              <strong>Complete Supporting Documentation:</strong> Ensure digital copies of your Certificate of Incorporation, entity PAN, and address proof are clear, valid, and recent.
            </li>
            <li>
              <strong>Prompt Physical Dispatch:</strong> If applying without a Class 3 DSC, ensure the signed physical acknowledgment slip reaches Protean's Pune office within 15 days of online submission.
            </li>
            <li>
              <strong>Single TAN Rule:</strong> Never apply for a second TAN for the same office. If an entity is mistakenly allotted multiple TANs, surrender the duplicate number immediately to avoid Section 272BB penalties.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Statutory Non-Compliance Penalties */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Statutory Deductor Penalty Matrix
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Default Category</th>
                <th className="py-3 px-4">Statutory Section</th>
                <th className="py-3 px-4">Penalty / Statutory Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Failure to Apply or Quote TAN</td>
                <td className="py-3 px-4">Section 272BB</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Flat penalty of ₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Quoting False / Inaccurate TAN</td>
                <td className="py-3 px-4">Section 272BB(1A)</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Flat penalty of ₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-amber-700">Late Deposit of Deducted TDS</td>
                <td className="py-3 px-4">Section 201(1A)</td>
                <td className="py-3 px-4 font-semibold text-amber-600">1.5% interest per month + 30% expenditure disallowance (Sec 40(a))</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-purple-700">Late Filing of Quarterly TDS Returns</td>
                <td className="py-3 px-4">Section 234E</td>
                <td className="py-3 px-4 font-semibold text-purple-600">Mandatory ₹200 per day of delay up to total TDS amount</td>
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
          Frequently Asked Questions on TAN Key Steps
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
