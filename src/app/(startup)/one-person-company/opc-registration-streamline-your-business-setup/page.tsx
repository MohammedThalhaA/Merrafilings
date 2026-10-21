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
  Check,
  Timer,
  CheckSquare,
  BadgeCheck,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How does an OPC streamline business setup compared to a Private Limited Company?",
    a: "An OPC eliminates the requirement for finding a co-founder, drafting shareholder agreements, managing multiple DSCs, or convening quarterly board meetings with a quorum. It delivers all corporate benefits—including limited liability and separate legal personality—with only a single founder and simplified annual filings.",
  },
  {
    q: "What is the 120-day residency rule for OPC founders?",
    a: "Originally, the Companies Act required an Indian citizen to have resided in India for at least 182 days during the immediately preceding financial year to be eligible to form an OPC. The Ministry of Corporate Affairs amended this rule via Union Budget 2021, reducing the threshold to just 120 days, and extending eligibility to Non-Resident Indians (NRIs) who hold Indian passports.",
  },
  {
    q: "Can a minor be appointed as a nominee or member in an OPC?",
    a: "No. Rule 3(4) of the Companies (Incorporation) Rules, 2014 strictly prohibits a minor from becoming a member or nominee of a One Person Company, nor can a minor hold shares with beneficial interest.",
  },
  {
    q: "What happens if I miss the 30-day deadline for appointing a Statutory Auditor?",
    a: "Failure to file Form ADT-1 within 30 days of incorporation leads to heavy MCA late filing penalties under Section 403 of the Companies Act, starting at ₹100 per day of delay with compounding fines for the company and default officer. Merrafilings ensures your auditor appointment is lodged immediately upon incorporation.",
  },
  {
    q: "Can an OPC open a corporate bank account online?",
    a: "Yes. Through the integrated AGILE-PRO-S form in SPICe+, the MCA has partnered with leading commercial banks (including ICICI Bank, HDFC Bank, State Bank of India, Axis Bank, and Bank of Baroda) to auto-initiate your corporate current bank account opening simultaneously with incorporation.",
  },
];

export default function OpcRegistrationStreamlineYourBusinessSetupPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <OpcGuideLayout
      currentSlug="opc-registration-streamline-your-business-setup"
      title="Understanding OPC Registration: Streamline Your Business Setup"
      breadcrumbLabel="Streamline Your OPC Setup"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-800">
          In the evolving landscape of Indian corporate structuring, <strong className="text-slate-900 font-semibold">OPC Registration</strong> has
          emerged as the most effective path for modern entrepreneurs, freelancers, and solopreneurs who prefer to operate independently.
          The concept of a One Person Company was specifically introduced by the Ministry of Corporate Affairs to empower visionary solo founders,
          providing them with the immense credibility and protections of a corporate framework without the administrative friction of traditional
          multi-member corporate entities.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          Whether you are transitioning an existing sole proprietorship into a recognized corporate entity or launching an innovative digital
          startup from scratch, this comprehensive guide outlines how to streamline your OPC registration, master eligibility criteria, fulfill
          statutory compliances, and leverage contemporary MCA reforms for frictionless growth.
        </p>
      </section>

      {/* What is OPC Registration */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Building2 className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            What is OPC Registration &amp; Why Does It Streamline Operations?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          OPC Registration is the formal legal process of incorporating a single-member corporate entity governed by the{" "}
          <strong className="text-slate-900 font-semibold">Companies Act, 2013</strong>. It empowers an entrepreneur who was formerly a sole trader
          to establish a company that exists as a separate legal person in the eyes of law.
        </p>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          This structural transition streamlines setup by eliminating the classic bottlenecks of company formation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Limited Liability Protection</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your personal assets (savings, vehicles, family home) remain strictly protected from business creditors and legal disputes.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <Timer className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Continuous Corporate Existence</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              As a perpetual entity, the OPC continues seamlessly even upon the owner&apos;s death or incapacity through the statutory nominee.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <BadgeCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Enhanced Institutional Credibility</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Having an official MCA Corporate Identification Number (CIN) instantly inspires trust among enterprise clients and vendors.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <Zap className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>Access to Corporate Debt &amp; Grants</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enables solo founders to access government startup schemes, MSME collateral-free credit, and seed grants reserved for corporate bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Strict Statutory Eligibility Criteria */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <CheckSquare className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Statutory Eligibility Criteria for Incorporating an OPC
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Before initiating filing on the MCA V3 portal, ensure you satisfy all conditions mandated under Rule 3 of the Companies
          (Incorporation) Rules, 2014:
        </p>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">Indian Citizenship Requirement:</strong> Only a natural person who is an Indian citizen
                (whether resident in India or otherwise) is eligible to incorporate an OPC or be designated as a nominee.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">120-Day Residency Benchmark:</strong> The term &ldquo;resident in India&rdquo; means a person
                who has stayed in India for a period of not less than 120 days during the immediately preceding financial year (relaxed from 182 days).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">One Person - One OPC Rule:</strong> A natural person shall not be eligible to incorporate
                more than ONE One Person Company, nor can that person be a nominee in more than one OPC.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">Minor Disqualification:</strong> No minor shall become a member or nominee of an OPC or hold
                shares with beneficial interest under any circumstances.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Streamlined Step-by-Step Registration Pipeline */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            The Streamlined 6-Step Registration Pipeline
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-slate-900 text-sm">Acquire Class 3 Digital Signature Certificate (DSC):</strong>
              <p className="text-slate-600 text-xs mt-0.5">
                Obtain a cryptographic DSC token for the sole director to sign electronic forms on the MCA portal.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-slate-900 text-sm">Director Identification Number (DIN) Application:</strong>
              <p className="text-slate-600 text-xs mt-0.5">
                Apply for DIN allotment seamlessly integrated inside the SPICe+ Part B form with zero separate filing fees.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-slate-900 text-sm">Name Reservation via RUN / SPICe+ Part A:</strong>
              <p className="text-slate-600 text-xs mt-0.5">
                Submit unique proposed business name terminating with &ldquo;(OPC) Private Limited&rdquo; complying with MCA naming rules.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong className="text-slate-900 text-sm">Document &amp; Charter Preparation:</strong>
              <p className="text-slate-600 text-xs mt-0.5">
                Draft e-MOA (INC-33), e-AOA (INC-34), Nominee Consent Form INC-3, and director declaration INC-9.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              5
            </span>
            <div>
              <strong className="text-slate-900 text-sm">Integrated Filing of SPICe+ (INC-32):</strong>
              <p className="text-slate-600 text-xs mt-0.5">
                File unified incorporation dossier certified by Practicing CA/CS with AGILE-PRO-S linkages.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              6
            </span>
            <div>
              <strong className="text-slate-900 text-sm">Issuance of Certificate of Incorporation (CIN):</strong>
              <p className="text-slate-600 text-xs mt-0.5">
                RoC examines and issues Form INC-11 carrying your CIN, company PAN, TAN, and activated corporate bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Essential Compliance Requirements After OPC Incorporation
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Maintaining corporate good standing requires disciplined compliance with MCA and tax calendars:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Statutory Auditor Appointment (Form ADT-1)</span>
            </div>
            <p className="text-slate-600 text-xs">
              Must be appointed within 30 days of incorporation to conduct independent annual audits.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Commencement of Business (Form INC-20A)</span>
            </div>
            <p className="text-slate-600 text-xs">
              Must be filed within 180 days confirming subscription capital has been deposited into the bank.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Annual Return (Form MGT-7A)</span>
            </div>
            <p className="text-slate-600 text-xs">
              Simplified annual return filed with the RoC signed by the director or company secretary.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Financial Statements (Form AOC-4)</span>
            </div>
            <p className="text-slate-600 text-xs">
              Audited Balance Sheet and Profit &amp; Loss statement filed within 180 days from financial year close.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Trends & Developments */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Latest Trends &amp; Developments in OPC Setups
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-slate-200/90 space-y-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
          <p>
            The OPC landscape has witnessed substantial positive shifts in recent years:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Growth Restrictions:</strong> The elimination of mandatory turnover conversion caps allows solo-founded software,
                fintech, and consulting companies to scale to ₹10 Cr or ₹100 Cr turnover as an OPC without forced conversion.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Digital Economy Boom:</strong> An increasing number of YouTube creators, independent SaaS developers, and e-commerce
                sellers are registering OPCs to build enterprise-ready ventures with minimal overhead.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Startup India Recognition:</strong> An OPC is fully eligible for recognition under the Startup India DPIIT initiative,
                qualifying for 3-year Section 80-IAC tax exemptions and fast-track patent processing.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Frequently Asked Questions on Streamlined OPC Setup
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

