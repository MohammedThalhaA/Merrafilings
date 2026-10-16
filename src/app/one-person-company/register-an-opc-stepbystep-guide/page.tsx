"use client";

import React, { useState } from "react";
import Link from "next/link";
import OpcGuideLayout from "@/components/OpcGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users2,
  Scale,
  Award,
  AlertCircle,
  Layers,
  FileCheck2,
  Lock,
  Globe2,
  Compass,
  Zap,
  KeyRound,
  FileSpreadsheet,
  Check,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How many total days does it take to register an OPC?",
    a: "With all documents in order, OPC registration typically takes 3 to 7 working days. The timeline includes: Class 3 DSC issuance (1 day), SPICe+ Part A name approval (1–2 days), and SPICe+ Part B incorporation scrutiny by the Central Registration Centre (CRC / RoC) (2–4 days).",
  },
  {
    q: "What documents are required from the sole director and the nominee?",
    a: "Both the sole director and the nominee must provide: (1) Self-attested PAN Card (mandatory for Indian nationals), (2) Identity proof (Passport, Voter ID, or Driving License), (3) Residential address proof not older than 2 months (Bank Statement, Electricity Bill, or Mobile Postpaid Bill), and (4) Form INC-3 signed consent for the nominee.",
  },
  {
    q: "Can a person form more than one One Person Company in India?",
    a: "No. Under Rule 3 of the Companies (Incorporation) Rules, 2014, a natural person who is an Indian citizen is eligible to incorporate only ONE One Person Company. Additionally, that individual cannot be designated as a nominee in more than one OPC at the same time.",
  },
  {
    q: "Is having a commercial office mandatory for registering an OPC?",
    a: "No. You can register an OPC using your residential address as its official registered office. All you need is the electricity bill or property tax receipt of the property (under 60 days old), a lease/rental agreement if rented, and a No Objection Certificate (NOC) from the property owner.",
  },
  {
    q: "What happens if the sole member of an OPC passes away?",
    a: "Upon the unfortunate death or incapacitation of the sole member, the designated nominee automatically inherits all shares of the company as per the nomination in the Memorandum of Association and Form INC-3. The nominee then files Form INC-4 with the RoC within 30 days to officially assume ownership.",
  },
  {
    q: "Are statutory audits mandatory for an OPC even with zero revenue?",
    a: "Yes. Every company incorporated under the Companies Act, 2013, including an OPC, must appoint an independent Chartered Accountant as its Statutory Auditor within 30 days of incorporation (Form ADT-1) and get its annual financial statements audited annually, regardless of turnover.",
  },
];

export default function RegisterAnOpcStepByStepGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <OpcGuideLayout
      currentSlug="register-an-opc-stepbystep-guide"
      title="How to Register an OPC: A Step-by-Step Guide"
      breadcrumbLabel="Step-by-Step OPC Registration"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-800">
          In today’s fast-paced, digital-first business environment, the rise of{" "}
          <strong className="text-slate-900 font-semibold">One Person Companies (OPCs)</strong> has fundamentally transformed the Indian startup
          ecosystem. For consultants, software engineers, boutique agency founders, e-commerce merchants, and solo innovators, an OPC offers
          the ultimate operational autonomy: the capability to run a corporate enterprise single-handedly without the dilution of equity or the
          inevitable friction of multiple co-founders.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          Unlike an informal sole proprietorship where your personal assets are on the line for every business liability, registering an OPC wraps
          your business in the statutory armor of <strong className="text-slate-900 font-semibold">limited liability</strong> while granting you
          access to institutional banking, angel funding, and public trust. This detailed step-by-step guide explains the complete, end-to-end
          procedure for registering an OPC in India under the MCA V3 portal guidelines.
        </p>
      </section>

      {/* Why Choose an OPC Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Award className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Understanding the Core Advantages of an OPC
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
              <span>Full Asset Protection</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Personal bank balances, vehicles, and real estate are completely ring-fenced from commercial liabilities and business debts.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Users2 className="w-4.5 h-4.5 text-emerald-600" />
              <span>No Co-Founder Friction</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              No mandatory second shareholder or complex partner dispute resolution protocols. You make every operational call swiftly.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Zap className="w-4.5 h-4.5 text-emerald-600" />
              <span>Lighter Compliance Burden</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exempt from holding formal AGMs and preparing cash flow statements. Streamlined annual returns via Form MGT-7A.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Building2 className="w-4.5 h-4.5 text-emerald-600" />
              <span>Institutional Loan Readiness</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Commercial banks, NBFCs, and state financial corporations favor incorporated entities over informal proprietorships.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Roadmap */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            The 6-Step Implementation Roadmap for OPC Registration
          </h2>
        </div>

        {/* Step Cards */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 1: Obtain a Digital Signature Certificate (DSC)</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Turnaround: 24 Hours</span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Because the entire incorporation pipeline on the Ministry of Corporate Affairs (MCA) V3 portal is 100% paperless, every statutory
              e-form must be digitally signed with a <strong className="text-slate-900 font-semibold">Class 3 Digital Signature Certificate (DSC)</strong>.
            </p>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1.5">
              <div className="font-semibold text-slate-900">How Merrafilings processes your DSC:</div>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Video and Aadhaar OTP verification conducted seamlessly online through a licensed CA agency.</li>
                <li>FIPS-compliant cryptographic USB hardware token configured and dispatched.</li>
                <li>Digital signature registered and mapped onto the MCA V3 portal director profile.</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 2: Director Identification Number (DIN) Allotment</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Auto-Integrated</span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Every director in India must hold a unique 8-digit Director Identification Number (DIN) allotted by the MCA. Under the revised
              SPICe+ system, you do not need to file a separate Form DIR-3 prior to incorporation. If you do not possess a DIN, the application
              is submitted directly inside <strong className="text-slate-900 font-medium">SPICe+ Part B</strong>, and your DIN is automatically
              issued upon company incorporation approval.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 3: Name Reservation via MCA RUN or SPICe+ Part A</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Turnaround: 1–2 Days</span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Choosing an acceptable corporate name requires strict adherence to Rule 8 of the Companies (Incorporation) Rules, 2014.
              The name must consist of three parts:
            </p>
            <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs sm:text-[13px] text-emerald-950 font-medium">
              <code>[Unique Distinctive Name] + [Principal Business Activity] + [(OPC) Private Limited]</code>
              <div className="mt-1 text-slate-600 font-normal">
                Example: <em>&ldquo;Apex Quantum Technologies (OPC) Private Limited&rdquo;</em>
              </div>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Merrafilings checks real-time database availability against both the MCA Company Registry and the Controller General of Patents,
              Designs, and Trade Marks (CGPDTM) to avoid conflicts and rejections. Once approved, the name remains reserved for 20 days.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 4: Draft Statutory MOA, AOA &amp; Nominee Consent (INC-3)</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Legal Charters</span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Our corporate legal counsel drafts your electronic constitutional charters:
            </p>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>e-MOA (Form INC-33):</strong> Sets out the fundamental business objectives and authorized share capital.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>e-AOA (Form INC-34):</strong> Contains the internal regulations, operational powers of the sole director, and management rules.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Form INC-3 (Nominee Written Consent):</strong> A mandatory declaration signed by the appointed nominee agreeing to step
                  in if the sole member becomes incapacitated or deceased.
                </span>
              </li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="p-5.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 5: File SPICe+ Part B &amp; Linked Declarations</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">RoC Examination</span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              All statutory forms, affidavits (Form INC-9), director consent (Form DIR-2), registered office proof (utility bills + rent deed + NOC),
              and the nominee dossier are bundled into the integrated SPICe+ Part B form. Our licensed Practicing CA/CS digitally signs and certifies
              the dossier before uploading it to the MCA Central Registration Centre (CRC).
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-5.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 6: Auto-Generation of PAN, TAN, AGILE-PRO-S &amp; Bank Account</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Final Issuance</span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Upon approval by the Registrar of Companies:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Certificate of Incorporation (CIN):</strong> Official legal birth certificate.</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>PAN &amp; TAN:</strong> Auto-generated from the Income Tax Department.</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>EPFO &amp; ESIC Numbers:</strong> Social security registrations pre-activated.</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Corporate Bank Account:</strong> Integrated account opened with top partner banks.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Document Checklist */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <FileText className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Exhaustive Document Checklist for OPC Incorporation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* For Director & Member */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white space-y-2">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              For Sole Member &amp; Director
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Self-attested PAN Card (Mandatory for Indian nationals).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Identity Proof: Valid Passport, Voter ID, or Driving License.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Address Proof: Bank Statement or Utility Bill (under 60 days old).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Passport-size digital photograph &amp; specimen signature.</span>
              </li>
            </ul>
          </div>

          {/* For Nominee */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white space-y-2">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              For Nominee (Mandatory Under Law)
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Self-attested PAN Card.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Identity Proof: Passport, Voter ID, or Driving License.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Address Proof: Bank Statement or Utility Bill (under 60 days old).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Signed Form INC-3 consent letter for nominee appointment.</span>
              </li>
            </ul>
          </div>

          {/* For Registered Office */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white sm:col-span-2 space-y-2">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              For Registered Office Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="font-semibold text-slate-800 mb-1">Utility Bill Proof</div>
                <span>Electricity bill, gas bill, or mobile bill (not older than 2 months).</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="font-semibold text-slate-800 mb-1">Rent / Ownership Deed</div>
                <span>Notarized Rent Agreement or registered property sale deed.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="font-semibold text-slate-800 mb-1">Owner&apos;s NOC</div>
                <span>No Objection Certificate signed by the legal property owner.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Frequently Asked Questions on Step-by-Step OPC Registration
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 text-slate-900 font-semibold text-xs sm:text-sm hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4.5 sm:px-4.5 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </OpcGuideLayout>
  );
}
