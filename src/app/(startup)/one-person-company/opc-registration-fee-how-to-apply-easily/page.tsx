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
  Coins,
  IndianRupee,
  Receipt,
  PieChart,
  Check,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is the MCA incorporation fee really ₹0 for an OPC in India?",
    a: "Yes. Under the Ministry of Corporate Affairs (MCA) SPICe+ initiative, the Central Government has waived 100% of the incorporation filing fee (Form INC-32) for companies having an authorized share capital up to ₹15,00,000. However, applicants must still pay nominal state-level stamp duty on the MOA, AOA, and Form INC-32, which varies by state.",
  },
  {
    q: "How much is the state stamp duty for OPC incorporation?",
    a: "State stamp duty is levied by individual state governments and varies based on your registered office location. For example, in Delhi and Haryana, stamp duty is around ₹300–₹600 for ₹1,00,000 authorized capital; in Maharashtra and Karnataka, it ranges between ₹1,000 and ₹2,500; while in states like Kerala or Punjab, it may range from ₹2,000 to ₹5,000.",
  },
  {
    q: "What is the fee for reserving a company name via RUN?",
    a: "Filing an application via the stand-alone RUN (Reserve Unique Name) service on the MCA V3 portal costs ₹1,000 per submission (allowing up to two name choices). Alternatively, if you file name reservation directly within SPICe+ Part A during the comprehensive incorporation filing, the name reservation is integrated seamlessly.",
  },
  {
    q: "What are the hidden post-incorporation costs for an OPC?",
    a: "Unlike unregistered proprietorships, an OPC has statutory compliance costs. These include: (1) Form ADT-1 for Auditor Appointment within 30 days (₹300–₹600 govt fee + professional charges), (2) Form INC-20A for Commencement of Business within 180 days, (3) Annual statutory audit by an independent CA, and (4) Annual MCA filing of Form AOC-4 and Form MGT-7A.",
  },
  {
    q: "Can I register an OPC with ₹10,000 or ₹1,00,000 capital?",
    a: "Yes. The Companies Act, 2013 removed the statutory requirement for minimum paid-up capital. You can start an OPC with an authorized capital of ₹1,00,000 and a paid-up capital of just ₹10,000 or ₹1,000. Most founders opt for ₹1,00,000 authorized capital to keep state stamp duty at the lowest minimum bracket.",
  },
];

export default function OpcRegistrationFeeHowToApplyEasilyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <OpcGuideLayout
      currentSlug="opc-registration-fee-how-to-apply-easily"
      title="Understanding OPC Registration Fee: How to Apply"
      breadcrumbLabel="OPC Registration Fee & Application"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-800">
          In today’s dynamic business environment, establishing a{" "}
          <strong className="text-slate-900 font-semibold">One Person Company (OPC)</strong> in India has emerged as the premier vehicle for
          solo entrepreneurs, independent software creators, and consultants seeking corporate prestige with total operational freedom.
          However, one of the most common questions entrepreneurs ask before taking the leap is:{" "}
          <em className="text-slate-900 font-medium">What is the exact cost of OPC registration, and how do I apply without encountering hidden charges?</em>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          This comprehensive advisory guide provides total financial clarity. We break down the statutory government fees, state-level stamp duties,
          professional drafting costs, and mandatory post-incorporation compliance charges, followed by an actionable roadmap on applying
          smoothly via the Ministry of Corporate Affairs (MCA) V3 digital portal.
        </p>
      </section>

      {/* The Importance of OPC Registration */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            The Importance of OPC Registration: Why the Investment Pays for Itself
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          While operating as an unregistered sole proprietorship seems cheap initially, it exposes your personal wealth to catastrophic
          business risks. Formally registering an OPC provides an impenetrable legal framework that ensures:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Independent Corporate Legal Identity</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              The company can own properties, hold bank accounts, sign enterprise contracts, and initiate legal proceedings in its own name.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ironclad Limited Liability Protection</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your personal assets (savings, vehicles, family home) can never be seized to settle corporate debts or commercial supplier claims.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Perpetual Existence via Nominee</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike a proprietorship which dissolves on death, an OPC endures forever through the pre-appointed legal nominee (Form INC-3).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Institutional Credit &amp; Tender Access</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A recognized CIN opens doors to government procurement tenders, vendor onboardings, and corporate collateral-free bank loans.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Cost Architecture Breakdown */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <IndianRupee className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Breaking Down the OPC Registration Fee Architecture
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          The total cost of incorporating an OPC in India consists of three primary layers:{" "}
          <strong className="text-slate-900 font-semibold">Government Levies</strong>,{" "}
          <strong className="text-slate-900 font-semibold">Professional Drafting Charges</strong>, and{" "}
          <strong className="text-slate-900 font-semibold">Statutory Post-Incorporation Compliance</strong>.
        </p>

        {/* Cost Pillar 1: Government Fees */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
            <Receipt className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>1. Mandatory Government Fees &amp; Statutory Levies</span>
          </div>
          <div className="space-y-2 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-900">MCA Incorporation Fee (SPICe+ Part B):</strong>
                <p className="text-slate-600 text-xs">For companies with Authorized Capital up to ₹15,00,000.</p>
              </div>
              <span className="font-bold text-emerald-700 text-sm bg-emerald-50 px-3 py-1 rounded-md shrink-0">
                ₹0 (100% Waived)
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-900">Name Reservation (MCA RUN Portal):</strong>
                <p className="text-slate-600 text-xs">Fee if using stand-alone RUN (integrated name search inside SPICe+ has no extra fee).</p>
              </div>
              <span className="font-bold text-slate-800 text-sm shrink-0">₹1,000</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-900">State Stamp Duty (MOA, AOA &amp; INC-32):</strong>
                <p className="text-slate-600 text-xs">Levied by the state government where your registered office is located.</p>
              </div>
              <span className="font-bold text-slate-800 text-sm shrink-0">₹300 – ₹2,500* (Varies by State)</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-900">Statutory PAN &amp; TAN Issuance:</strong>
                <p className="text-slate-600 text-xs">Central Board of Direct Taxes (CBDT) nominal fee.</p>
              </div>
              <span className="font-bold text-slate-800 text-sm shrink-0">₹131 (₹66 PAN + ₹65 TAN)</span>
            </div>
          </div>
        </div>

        {/* Cost Pillar 2: Professional Fees */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
            <Briefcase className="w-5 h-5 text-blue-600 shrink-0" />
            <span>2. Professional Advisory &amp; Statutory Certification Fees</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            Under <strong className="text-slate-900 font-semibold">Section 7(1)(b) of the Companies Act, 2013</strong>, an incorporation application
            CANNOT be submitted without mandatory statutory certification by an independent Practicing Chartered Accountant (CA), Company Secretary (CS),
            or Cost and Management Accountant (CMA). Professional costs encompass:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700">
            <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Class 3 DSC Cryptographic USB hardware token issuance and mapping.</span>
            </li>
            <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Drafting customized e-MOA (INC-33) and e-AOA (INC-34) legal charters.</span>
            </li>
            <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Drafting Nominee Consent Form INC-3 and Director Affidavits Form INC-9.</span>
            </li>
            <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Practicing CA/CS digital pre-scrutiny and statutory verification attestation.</span>
            </li>
          </ul>
        </div>

        {/* Cost Pillar 3: Post-Incorporation Compliance */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
            <PieChart className="w-5 h-5 text-purple-600 shrink-0" />
            <span>3. Annual Statutory Compliance Costs (Ongoing Lifecycle)</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            Incorporating an OPC brings ongoing legal obligations to preserve active company status on the MCA register:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="font-semibold text-slate-900 mb-1">Form ADT-1 (Auditor Appt.)</div>
              <span>Mandatory within 30 days of incorporation to appoint independent CA.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="font-semibold text-slate-900 mb-1">Form INC-20A (Commencement)</div>
              <span>Filing proof of capital infusion within 180 days of incorporation.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="font-semibold text-slate-900 mb-1">AOC-4 &amp; MGT-7A Returns</div>
              <span>Annual financial balance sheet and annual return filing with the RoC.</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Online */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            How to Apply for OPC Registration Online: 5-Step Process
          </h2>
        </div>

        <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal pl-5">
          <li className="leading-relaxed pl-1">
            <strong className="text-slate-900">Name Reservation:</strong> Log in to the MCA V3 Portal and submit your proposed unique name via
            SPICe+ Part A or the RUN web service. Ensure non-infringement of registered trademarks.
          </li>
          <li className="leading-relaxed pl-1">
            <strong className="text-slate-900">Digital Signature Certificate (DSC):</strong> Acquire a Class 3 DSC token for the sole director to sign
            e-forms and electronic charters.
          </li>
          <li className="leading-relaxed pl-1">
            <strong className="text-slate-900">Director Identification Number (DIN):</strong> Obtain your DIN directly integrated inside the SPICe+ form
            with verified identity proofs.
          </li>
          <li className="leading-relaxed pl-1">
            <strong className="text-slate-900">Filing of Form SPICe+ (Part B):</strong> Complete the master form attaching e-MOA (INC-33), e-AOA (INC-34),
            Nominee Consent (INC-3), director affidavit (INC-9), and registered office utility bills.
          </li>
          <li className="leading-relaxed pl-1">
            <strong className="text-slate-900">CIN, PAN &amp; Bank Account Issuance:</strong> RoC reviews the application, approves the filing, and issues the
            Certificate of Incorporation (CIN) alongside your corporate PAN, TAN, and linked bank account.
          </li>
        </ol>
      </section>

      {/* Documents Required */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <FileText className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Checklist of Essential Documents for Fast Application
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Director PAN Card</span>
            </div>
            <p className="text-slate-500 text-xs">Mandatory self-attested copy for Indian citizens.</p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Identity Proof</span>
            </div>
            <p className="text-slate-500 text-xs">Self-attested Voter ID, Passport, or Driving License.</p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Residential Address Proof</span>
            </div>
            <p className="text-slate-500 text-xs">Bank statement or utility bill (under 2 months old).</p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Registered Office Proof</span>
            </div>
            <p className="text-slate-500 text-xs">Electricity/Tax bill + Rent agreement + Owner NOC.</p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Frequently Asked Questions on OPC Fees &amp; Applications
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

