"use client";

import React, { useState } from "react";
import Link from "next/link";
import LlpGuideLayout from "@/components/LlpGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Building,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  FileCheck,
  UserCheck,
  KeyRound,
  FileSignature,
  ArrowRight,
  Sparkles,
  Info,
  Receipt,
  Award,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is the primary advantage of opting for LLP registration in India?",
    a: "An LLP blends the collaborative and operational flexibility of an ordinary partnership with the limited liability protection typical of a corporate company. Under the LLP Act, 2008, partners are not personally liable for the enterprise's debts or for the unauthorized actions and negligence of other partners, ensuring personal financial protection.",
  },
  {
    q: "Why are Digital Signature Certificates (DSC) required for LLP registration?",
    a: "All incorporation applications and statutory ROC forms on the MCA V3 portal are filed electronically. A Class 3 DSC with encrypted cryptographic tokens provides legally recognized verification under the Information Technology Act, 2000, ensuring identity authenticity and non-repudiation.",
  },
  {
    q: "How important is the LLP Agreement in the registration process?",
    a: "The LLP Agreement is the foundational constitutional charter governing mutual rights, duties, capital contributions, profit-sharing ratios, dispute resolution clauses, and management roles. Under Section 23 of the LLP Act, it must be executed on non-judicial stamp paper and submitted to the MCA in Form 3 within 30 days of incorporation.",
  },
  {
    q: "What documentation is needed for proving the registered office address for an LLP?",
    a: "You need: (1) Proof of commercial or residential premises ownership (Sale Deed / Property Tax Receipt) or a valid Rent/Lease Agreement; (2) A utility bill (Electricity, Gas, Water, or Telephone Bill) not older than 2 months; and (3) A signed No Objection Certificate (NOC) from the legal property owner.",
  },
  {
    q: "Can you explain the role of Form 3 and Form 4 in LLP registration?",
    a: "Form 3 contains statutory information relating to the executed LLP Agreement, while Form 4 contains consent and particulars of appointment, cessation, or changes of designated partners. Under current MCA V3 workflows, partner appointment details are integrated into the FiLLiP e-form, while the LLP Agreement is subsequently filed in Form 3 within 30 days.",
  },
  {
    q: "Is it mandatory for all partners to have a DIN/DPIN for LLP registration?",
    a: "Designated Partners must possess a Designated Partner Identification Number (DPIN) or Director Identification Number (DIN). For partners who do not yet hold a DIN/DPIN, up to two DINs can be allotted directly through the FiLLiP incorporation form without requiring a prior standalone DIR-3 application.",
  },
  {
    q: "What steps should be taken if the intended LLP name is already in use?",
    a: "If the desired name conflicts with existing companies, LLPs, or registered trademarks, the MCA Central Registration Centre (CRC) will reject or mark it for resubmission. You should submit an alternative unique name complying with Rule 18 of the LLP Rules, 2009, reflecting the primary business objective.",
  },
  {
    q: "How does address proof for partners contribute to LLP registration?",
    a: "Partner address proofs (such as bank statements, electricity bills, or mobile postpaid bills not older than 2 months) validate the physical residence of each partner. This is required by the MCA to ensure compliance with KYC standards and enforce accountability under Indian corporate law.",
  },
  {
    q: "What happens after submitting all the necessary documents online?",
    a: "Once filed via the MCA V3 portal, the Registrar of Companies (ROC) Central Registration Centre (CRC) scrutinizes the application. If compliant, the ROC issues the Certificate of Incorporation (COI) containing the LLPIN (Limited Liability Partnership Identification Number), PAN, and TAN.",
  },
  {
    q: "Are there consent requirements for partners during LLP registration?",
    a: "Yes. Every partner and designated partner must furnish formal written consent in Form 9 (Consent to act as Partner/Designated Partner) and DIR-2. This declares their willingness to assume fiduciary responsibilities and confirms that they are not disqualified by any court of law.",
  },
];

const DOCUMENT_CHECKLIST = [
  {
    category: "Identity Proof (Partners)",
    documents: "PAN Card (Mandatory for Indian Nationals) / Valid Passport (Mandatory for Foreign Nationals & NRIs)",
    criteria: "Name and date of birth must match government records exactly. Clear scanned color copy.",
  },
  {
    category: "Address Proof (Partners)",
    documents: "Voter ID / Passport / Driving Licence / Aadhaar Card",
    criteria: "Current residential address must match the latest government identity record.",
  },
  {
    category: "Residence Proof (Partners)",
    documents: "Bank Account Statement / Electricity Bill / Telephone / Mobile Postpaid Bill",
    criteria: "Must strictly be less than 2 months old and clearly display partner's complete name and address.",
  },
  {
    category: "Registered Office Proof",
    documents: "Electricity Bill / Gas Bill / Water Bill + Rent Agreement + Owner NOC",
    criteria: "Utility bill not older than 2 months. Rent agreement signed with property owner along with signed NOC.",
  },
  {
    category: "Digital Signature Certificate",
    documents: "Class 3 DSC with ePass FIPS Token",
    criteria: "Mandatory for all designated partners to electronically sign MCA V3 e-forms.",
  },
  {
    category: "Statutory Consent Forms",
    documents: "Form 9 & DIR-2 Consent Sheets",
    criteria: "Form 9 signed by partners consenting to act as designated partners and declaring non-disqualification.",
  },
  {
    category: "LLP Agreement (Post-Incorporation)",
    documents: "Executed LLP Agreement on Judicial Stamp Paper",
    criteria: "Executed with non-judicial stamp duty based on state slab, notarized, and filed in Form 3 within 30 days.",
  },
];

const QUICK_CHECKLIST_ITEMS = [
  {
    title: "PAN Card",
    desc: "Self-attested PAN card copy for all Indian partners.",
    icon: <FileText className="w-4 h-4 text-emerald-600" />,
    iconBox: "bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200 group-hover:scale-105",
    hoverBorder: "hover:border-emerald-500",
    hoverShadow: "hover:shadow-md hover:shadow-emerald-500/15",
    hoverBg: "hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
  },
  {
    title: "Identity Proof",
    desc: "Valid Passport, Voter ID, or Driving Licence.",
    icon: <UserCheck className="w-4 h-4 text-blue-600" />,
    iconBox: "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200 group-hover:scale-105",
    hoverBorder: "hover:border-blue-500",
    hoverShadow: "hover:shadow-md hover:shadow-blue-500/15",
    hoverBg: "hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
  },
  {
    title: "Residential Proof",
    desc: "Bank statement or utility bill < 2 months old.",
    icon: <Receipt className="w-4 h-4 text-purple-600" />,
    iconBox: "bg-purple-50 text-purple-600 border border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200 group-hover:scale-105",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-md hover:shadow-purple-500/15",
    hoverBg: "hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
  },
  {
    title: "Registered Office",
    desc: "Recent electricity bill + Rent Agreement + Owner NOC.",
    icon: <Building className="w-4 h-4 text-amber-600" />,
    iconBox: "bg-amber-50 text-amber-600 border border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200 group-hover:scale-105",
    hoverBorder: "hover:border-amber-500",
    hoverShadow: "hover:shadow-md hover:shadow-amber-500/15",
    hoverBg: "hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
  },
  {
    title: "Digital Signature",
    desc: "Class 3 DSC for all proposed designated partners.",
    icon: <KeyRound className="w-4 h-4 text-teal-600" />,
    iconBox: "bg-teal-50 text-teal-600 border border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200 group-hover:scale-105",
    hoverBorder: "hover:border-teal-500",
    hoverShadow: "hover:shadow-md hover:shadow-teal-500/15",
    hoverBg: "hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
  },
  {
    title: "LLP Agreement",
    desc: "Stamped & notarized agreement for Form 3 filing.",
    icon: <FileSignature className="w-4 h-4 text-indigo-600" />,
    iconBox: "bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200 group-hover:scale-105",
    hoverBorder: "hover:border-indigo-500",
    hoverShadow: "hover:shadow-md hover:shadow-indigo-500/15",
    hoverBg: "hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "Step 1",
    title: "Obtain Class 3 DSC",
    desc: "Designated partners obtain Class-3 Digital Signatures with encrypted tokens to sign MCA electronic filings securely.",
    icon: <KeyRound className="w-5 h-5 text-emerald-600" />,
    iconBox: "bg-emerald-50 text-emerald-700 border border-emerald-200/80 group-hover:bg-emerald-600 group-hover:text-white",
    hoverBorder: "hover:border-emerald-500",
    hoverShadow: "hover:shadow-md hover:shadow-emerald-500/15",
    hoverBg: "hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
  },
  {
    step: "Step 2",
    title: "Apply for DPIN / DIN",
    desc: "Acquire Director Identification Numbers for proposed designated partners through the FiLLiP integrated form.",
    icon: <UserCheck className="w-5 h-5 text-blue-600" />,
    iconBox: "bg-blue-50 text-blue-700 border border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white",
    hoverBorder: "hover:border-blue-500",
    hoverShadow: "hover:shadow-md hover:shadow-blue-500/15",
    hoverBg: "hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
  },
  {
    step: "Step 3",
    title: "RUN-LLP Name Reservation",
    desc: "Submit your desired trade name via RUN-LLP on the MCA portal, adhering to trademark availability and Rule 18 naming rules.",
    icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    iconBox: "bg-purple-50 text-purple-700 border border-purple-200/80 group-hover:bg-purple-600 group-hover:text-white",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-md hover:shadow-purple-500/15",
    hoverBg: "hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
  },
  {
    step: "Step 4",
    title: "File Form FiLLiP (Incorporation)",
    desc: "Upload the complete incorporation package with partner identity, address proof, subscriber sheets, and office proof to ROC.",
    icon: <FileText className="w-5 h-5 text-amber-600" />,
    iconBox: "bg-amber-50 text-amber-700 border border-amber-200/80 group-hover:bg-amber-600 group-hover:text-white",
    hoverBorder: "hover:border-amber-500",
    hoverShadow: "hover:shadow-md hover:shadow-amber-500/15",
    hoverBg: "hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
  },
  {
    step: "Step 5",
    title: "Receive Certificate of Incorporation",
    desc: "Upon ROC verification, the Certificate of Incorporation (COI) is granted with your unique 7-digit LLPIN, PAN, and TAN.",
    icon: <Award className="w-5 h-5 text-teal-600" />,
    iconBox: "bg-teal-50 text-teal-700 border border-teal-200/80 group-hover:bg-teal-600 group-hover:text-white",
    hoverBorder: "hover:border-teal-500",
    hoverShadow: "hover:shadow-md hover:shadow-teal-500/15",
    hoverBg: "hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
  },
  {
    step: "Step 6",
    title: "Draft & File Form 3 (LLP Agreement)",
    desc: "Execute your LLP Agreement on non-judicial stamp paper, notarize, and file Form 3 on the MCA portal within 30 days.",
    icon: <FileSignature className="w-5 h-5 text-indigo-600" />,
    iconBox: "bg-indigo-50 text-indigo-700 border border-indigo-200/80 group-hover:bg-indigo-600 group-hover:text-white",
    hoverBorder: "hover:border-indigo-500",
    hoverShadow: "hover:shadow-md hover:shadow-indigo-500/15",
    hoverBg: "hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
  },
];

export default function KeyDocumentsForLlpRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LlpGuideLayout
      currentSlug="key-documents-for-llp-registration-guide"
      title="Key Documents for LLP Registration: Complete Checklist & Statutory Guide"
      breadcrumbLabel="Key Documents Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          Forming a <strong className="font-semibold text-slate-950">Limited Liability Partnership (LLP)</strong> in India is one of the most attractive choices for entrepreneurs, professionals, software firms, and consulting agencies. It seamlessly marries the internal operational freedom of a traditional partnership with the risk-mitigating corporate shield of limited liability.
        </p>
        <p className="text-[14px] text-slate-700 leading-relaxed">
          However, before reaping the commercial and tax benefits of an LLP, assembling the complete set of <strong className="font-semibold text-slate-900">statutory documents</strong> is an absolute prerequisite. Incomplete paperwork, misspelled partner names, or utility bills older than 60 days are the leading causes of MCA resubmissions and incorporation rejections. This guide delivers a meticulous, CA-verified checklist of every document required under the <strong className="font-medium text-slate-900">LLP Act, 2008</strong> and current MCA V3 guidelines.
        </p>
      </section>

      {/* Visual Checklist Box with Color-Matched Cards */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-[#FDFBF9] to-teal-50/40 border border-emerald-200/80 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-900 font-semibold text-base mb-3">
          <FileCheck className="w-5 h-5 text-emerald-600" />
          <span>Quick Checklist of Mandatory LLP Documents</span>
        </div>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed mb-4">
          Prepare high-resolution digital PDF/JPEG scans of the following before commencing your registration filing on the MCA V3 portal:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13px]">
          {QUICK_CHECKLIST_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 ${item.hoverBorder} ${item.hoverShadow} ${item.hoverBg} hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
            >
              <span className={`p-1 rounded-md shrink-0 transition-colors ${item.iconBox}`}>
                {item.icon}
              </span>
              <div>
                <strong className={`block text-slate-900 ${item.titleHover} transition-colors font-semibold`}>
                  {item.title}
                </strong>
                <span className="text-slate-600 leading-relaxed">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep-Dive Sections */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] border-b border-slate-200 pb-2.5">
          Detailed Breakdown of Essential LLP Documents
        </h2>

        {/* 1. Partner Identification */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
            <UserCheck className="w-5 h-5 text-emerald-600" />
            <h3>1. Partner Identification &amp; Address Proofs</h3>
          </div>
          <p className="text-[13.5px] text-slate-700 leading-relaxed">
            Every partner and designated partner must furnish authenticated proof of identity and residence. The Ministry of Corporate Affairs uses these to verify the authenticity of individuals forming the body corporate:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-800 list-disc pl-5">
            <li>
              <strong className="font-semibold text-slate-900">Permanent Account Number (PAN):</strong> PAN is compulsory for all Indian citizens. The name, parent’s name, and date of birth in other documents must match the Income Tax PAN database verbatim.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Identity Proof:</strong> In addition to PAN, one secondary identity document is mandatory: Voter ID card, valid Passport, or Driving Licence. For foreign nationals, a valid Passport notarized or apostilled in their country of origin is mandatory.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Address / Residence Proof:</strong> Must reflect the partner’s present residential address. Acceptable documents include bank account statement, electricity bill, telephone bill, or mobile postpaid bill. <em className="text-amber-800 font-medium">Statutory Rule: The document must strictly not be older than 2 months from the date of filing.</em>
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Passport-Sized Photographs:</strong> Clear front-facing color photographs with a plain background.
            </li>
          </ul>
        </div>

        {/* 2. Registered Office */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
            <Building className="w-5 h-5 text-emerald-600" />
            <h3>2. Registered Office Address Documentation</h3>
          </div>
          <p className="text-[13.5px] text-slate-700 leading-relaxed">
            Under Section 13 of the LLP Act, 2008, every LLP must possess a registered office in India capable of receiving and acknowledging all official communications, notices, and legal summons:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-800 list-disc pl-5">
            <li>
              <strong className="font-semibold text-slate-900">Utility Bill:</strong> Recent electricity bill, gas connection bill, water bill, or landline bill in the name of the property owner (strictly less than 2 months old).
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Proof of Premises Rights:</strong> If rented, a copy of the valid Rent/Lease Agreement along with rent receipts. If owned by any partner, proof of ownership such as Sale Deed, Title Deed, or Municipal Tax Receipt.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">No Objection Certificate (NOC):</strong> A signed written declaration from the property owner granting permission to the proposed LLP to use the premises as its registered corporate office.
            </li>
          </ul>
        </div>

        {/* 3. Consent & Declaration Forms */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
            <FileSignature className="w-5 h-5 text-emerald-600" />
            <h3>3. Partner Consent &amp; Subscriber Declarations</h3>
          </div>
          <p className="text-[13.5px] text-slate-700 leading-relaxed">
            Formal subscriber declarations are embedded in the electronic filing package to confirm that designated partners willingly enter the contract:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-800 list-disc pl-5">
            <li>
              <strong className="font-semibold text-slate-900">Form 9 (Consent to act as Partner/Designated Partner):</strong> Contains explicit affirmation of willingness to hold managerial office and compliance with eligibility thresholds.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">DIR-2 / Declaration of Non-Disqualification:</strong> Confirmation that designated partners are not convicted of offenses involving moral turpitude, undischarged insolvents, or barred by courts.
            </li>
          </ul>
        </div>

        {/* 4. DSC and DPIN */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
            <KeyRound className="w-5 h-5 text-emerald-600" />
            <h3>4. Digital Signatures (DSC) &amp; DPIN / DIN</h3>
          </div>
          <p className="text-[13.5px] text-slate-700 leading-relaxed">
            Because the MCA V3 portal functions paperlessly, digital credentials are essential prerequisites:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-800 list-disc pl-5">
            <li>
              <strong className="font-semibold text-slate-900">Class 3 DSC:</strong> Required for at least the designated partners signing the incorporation forms. Merrafilings issues MCA-compatible DSCs with USB crypto tokens.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">DPIN / DIN:</strong> Designated Partner Identification Number. If partners already hold an active DIN, it can be seamlessly used. If not, up to 2 DPINs are allotted directly upon filing Form FiLLiP.
            </li>
          </ul>
        </div>

        {/* 5. LLP Agreement & Form 3 */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
            <FileText className="w-5 h-5 text-emerald-600" />
            <h3>5. Constitutional LLP Agreement &amp; Form 3 Filing</h3>
          </div>
          <p className="text-[13.5px] text-slate-700 leading-relaxed">
            The LLP Agreement is the most critical constitutional document of your enterprise. It governs the internal operations and mutual relationships of the partners:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-[13px] text-slate-700 space-y-2">
            <p>
              <strong>Mandatory Clauses to Include:</strong> Name of LLP, Registered office, Nature of business activities, Total capital contribution and individual shares, Profit/loss sharing ratios, Rights &amp; responsibilities of designated partners, Admission, resignation &amp; expulsion clauses, and Arbitration &amp; dispute settlement mechanisms.
            </p>
            <p className="text-amber-800 font-medium">
              Important: Under Section 23(2) of the LLP Act, this agreement must be printed on state-specific non-judicial stamp paper, notarized, and submitted to the Registrar in MCA Form 3 within 30 days of receiving the Certificate of Incorporation. Failing to do so triggers a daily statutory penalty of ₹100 without ceiling.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Checklist Table */}
      <section className="space-y-3 pt-4 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
          Complete LLP Documentation Checklist &amp; Criteria
        </h2>
        <p className="text-[13.5px] text-slate-700 leading-relaxed">
          The table below summarizes the statutory documents required by the MCA CRC wing for processing an LLP registration:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-3xs mt-3">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-900 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Document Category</th>
                <th className="p-3 sm:p-3.5">Specific Document Required</th>
                <th className="p-3 sm:p-3.5">Compliance &amp; Validity Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {DOCUMENT_CHECKLIST.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">{item.category}</td>
                  <td className="p-3 sm:p-3.5">{item.documents}</td>
                  <td className="p-3 sm:p-3.5 text-slate-600">{item.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step by Step Execution Process with Color-Matched Cards */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
          Step-by-Step LLP Documentation &amp; Filing Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px]">
          {WORKFLOW_STEPS.map((wf, idx) => (
            <div
              key={idx}
              className={`group p-4 rounded-xl border border-slate-200 bg-white ${wf.hoverBorder} ${wf.hoverShadow} ${wf.hoverBg} hover:-translate-y-0.5 transition-all duration-200 space-y-2 cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[11px] transition-colors ${wf.iconBox}`}>
                  {wf.step}
                </span>
                <span className="shrink-0">{wf.icon}</span>
              </div>
              <h4 className={`font-semibold text-slate-900 text-sm ${wf.titleHover} transition-colors`}>
                {wf.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Pitfalls Callout */}
      <section className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm sm:text-base">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Critical Documentation Pitfalls to Avoid</span>
        </div>
        <ul className="text-xs sm:text-[13px] text-amber-900/90 space-y-1.5 list-disc pl-5">
          <li><strong>Outdated Utility Bills:</strong> Using an electricity or telephone bill older than 2 months is the #1 reason for CRC resubmission.</li>
          <li><strong>Mismatch in Names:</strong> Even minor spelling variations between PAN and Aadhaar/Bank records will halt verification.</li>
          <li><strong>Unnotarized Rent Agreement:</strong> Rent agreements without proper stamp paper value and notary seal are rejected by the ROC.</li>
          <li><strong>Delaying Form 3 Filing:</strong> The 30-day clock begins on the date printed on your Certificate of Incorporation. Missing this deadline costs ₹100 per day.</li>
        </ul>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
              Statutory guidance and legal queries on LLP documentation in India.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-xs sm:text-[13.5px] text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer gap-3"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF9F7]/40">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </LlpGuideLayout>
  );
}
