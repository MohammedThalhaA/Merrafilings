"use client";

import React, { useState } from "react";
import Link from "next/link";
import LlpGuideLayout from "@/components/LlpGuideLayout";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Building,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileSignature,
  Landmark,
  FileText,
  BadgePercent,
  Clock,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is the minimum number of partners required for an LLP?",
    a: "An LLP must have a minimum of two partners to be incorporated. There is no statutory ceiling or upper limit on the maximum number of partners. Out of the partners, at least two must be designated partners, and at least one designated partner must be a resident of India (residing for not less than 120 days during the financial year).",
  },
  {
    q: "Is an LLP agreement mandatory in India?",
    a: "Yes, executing the LLP Agreement is mandatory under Section 23 of the Limited Liability Partnership Act, 2008. The agreement defines the mutual rights, duties, profit-sharing ratios, capital contributions, and operational rules of the partners. It must be executed on state non-judicial stamp paper and submitted to the MCA in Form 3 within 30 days of incorporation.",
  },
  {
    q: "Can an existing partnership firm be converted into an LLP?",
    a: "Yes. Under Section 55 and the Second Schedule of the LLP Act, 2008, an existing general partnership firm registered under the Indian Partnership Act, 1932 can convert into an LLP seamlessly without triggering capital gains tax, provided all original partners become LLP partners in the same profit-sharing proportion.",
  },
  {
    q: "How do tax implications for an LLP differ from a Private Limited Company?",
    a: "An LLP is taxed at a flat rate of 30% plus applicable surcharge and cess. Unlike private limited companies, profits distributed to partners after paying tax are completely exempt from tax in the hands of individual partners, eliminating double dividend taxation. Furthermore, LLPs are not subject to Minimum Alternate Tax (MAT) on gross assets.",
  },
  {
    q: "What are the mandatory annual compliance requirements for an LLP?",
    a: "An LLP has two mandatory annual MCA ROC filings: (1) Form 11 (Annual Return) due within 60 days of the fiscal year end (by May 30th), and (2) Form 8 (Statement of Account & Solvency) due within 30 days of 6 months of fiscal year end (by October 30th). In addition, LLPs must file income tax return Form ITR-5 annually.",
  },
  {
    q: "When is a statutory audit mandatory for an LLP in India?",
    a: "Under Rule 24 of the LLP Rules, 2009, an LLP is legally exempt from statutory audit if its annual turnover does not exceed ₹40 Lakhs or its total partner capital contribution does not exceed ₹25 Lakhs. If either threshold is exceeded, accounts must be audited by a practicing Chartered Accountant.",
  },
  {
    q: "Is Foreign Direct Investment (FDI) permitted in an Indian LLP?",
    a: "Yes. 100% FDI is permitted under the automatic route for LLPs operating in sectors or activities where 100% FDI is allowed under company regulations without performance-linked conditions. At least one designated partner must remain an Indian resident.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Obtain Digital Signature Certificate (DSC)",
    desc: "Class-3 DSC is obtained for all proposed designated partners. Because all MCA V3 e-forms require cryptographic electronic signing, DSC ensures legal non-repudiation and identity safety.",
    duration: "1 Day",
  },
  {
    step: "02",
    title: "Apply for Director Identification Number (DIN / DPIN)",
    desc: "Every designated partner must possess an 8-digit DPIN/DIN. If partners do not already hold one, up to 2 DPINs are allotted directly during the FiLLiP incorporation submission.",
    duration: "Integrated",
  },
  {
    step: "03",
    title: "LLP Name Reservation via RUN-LLP",
    desc: "Submit up to 2 proposed names via the MCA RUN-LLP (Reserve Unique Name) service. Names must reflect primary business activities and avoid similarity to registered trademarks or corporate entities.",
    duration: "1-2 Days",
  },
  {
    step: "04",
    title: "Form FiLLiP Preparation & ROC Submission",
    desc: "Prepare and electronically lodge Form FiLLiP (Form for incorporation of Limited Liability Partnership) along with subscriber sheets, consent forms (Form 9), utility bills, and registered office NOC.",
    duration: "2-3 Days",
  },
  {
    step: "05",
    title: "Issuance of Certificate of Incorporation (COI)",
    desc: "The Central Registration Centre (CRC) scrutinizes the application and issues the Certificate of Incorporation containing the unique 7-digit LLPIN, PAN, and TAN.",
    duration: "Same Day as Approval",
  },
  {
    step: "06",
    title: "Drafting, Stamping & Filing Form 3 (LLP Agreement)",
    desc: "Draft a customized partnership deed, execute on state non-judicial stamp paper, notarize, and file Form 3 on the MCA portal within 30 days to conclude statutory incorporation.",
    duration: "Within 30 Days",
  },
];

const ADVANTAGES = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    title: "Limited Liability Protection",
    desc: "Partners enjoy personal wealth protection. Their liability is strictly capped at their agreed capital contribution, protecting homes, personal bank balances, and family assets from business risks.",
  },
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    title: "Flexible Management Model",
    desc: "Unlike rigid board structures in private limited companies, partners have total flexibility to structure daily managerial responsibilities, voting thresholds, and profit shares via the partnership agreement.",
  },
  {
    icon: <BadgePercent className="w-5 h-5 text-purple-600" />,
    title: "Tax Pass-Through Efficiency",
    desc: "Profits are taxed at the firm level at 30%. Distributions of post-tax profits to partners are 100% tax-free, eliminating the double taxation burden seen in corporate dividend regimes.",
  },
  {
    icon: <Building className="w-5 h-5 text-amber-600" />,
    title: "Separate Legal Personality",
    desc: "An LLP is an incorporated corporate body with perpetual succession. It can own assets, sign commercial contracts, borrow funds, and sue or be sued in its own distinct legal name.",
  },
  {
    icon: <Scale className="w-5 h-5 text-teal-600" />,
    title: "Low Compliance Burden",
    desc: "No mandatory board meetings, no statutory audit requirement for revenues under ₹40 Lakhs and capital under ₹25 Lakhs, and streamlined annual filings (Form 8 & Form 11).",
  },
  {
    icon: <Landmark className="w-5 h-5 text-indigo-600" />,
    title: "No Minimum Capital Requirement",
    desc: "Entrepreneurs can incorporate with any nominal capital (e.g. ₹1,000 or ₹10,000). There is no mandatory statutory paid-up capital threshold under the LLP Act.",
  },
];

export default function LlpRegistrationGuideComprehensiveStepsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LlpGuideLayout
      currentSlug="llp-registration-guide-comprehensive-steps"
      title="A Comprehensive Guide to LLP Registration: Step-by-Step Execution"
      breadcrumbLabel="Comprehensive Steps Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Section */}
      <section className="space-y-4">
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          <strong className="font-semibold text-slate-950">Limited Liability Partnership (LLP) Registration</strong> represents one of the most balanced structural choices for startups, professional consultants, boutique agencies, and co-founded ventures in India. It unites the operational freedom of a traditional partnership with the risk-mitigating protections of corporate limited liability.
        </p>
        <p className="text-[14px] text-slate-700 leading-relaxed">
          Over the past decade, LLP incorporation has surged across India due to its straightforward governance model, audit exemptions for early-stage ventures, and favorable tax pass-through structure. This comprehensive step-by-step guide walks you through every statutory phase of registering your LLP with the Ministry of Corporate Affairs (MCA) under the <strong className="font-medium text-slate-900">LLP Act, 2008</strong> and current MCA V3 procedures.
        </p>
      </section>

      {/* What is LLP Registration */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
          <Building className="w-5 h-5 text-emerald-600" />
          <h2>What is LLP Registration?</h2>
        </div>
        <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
          LLP Registration is the official process of incorporating a Limited Liability Partnership under Section 11 of the Limited Liability Partnership Act, 2008. Upon registration, the Ministry of Corporate Affairs grants a legal charter known as the <strong className="font-semibold text-slate-900">Certificate of Incorporation (COI)</strong>, along with a distinct 7-digit <strong className="font-semibold text-slate-900">LLPIN (Limited Liability Partnership Identification Number)</strong>.
        </p>
        <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
          Unlike general partnerships governed by the Partnership Act 1932, an LLP is a body corporate possessing an independent legal existence separate from its partners. It can hold property in its own name, enter contracts, and enjoy perpetual succession, meaning the exit, death, or insolvency of any partner does not jeopardize the company's existence.
        </p>
      </section>

      {/* Core Advantages Grid */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
            Key Advantages of Choosing an LLP Structure
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1">
            Why growing ventures and professional firms prioritize the LLP model over private limited and general partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-emerald-400 hover:shadow-xs transition-all space-y-2"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {adv.icon}
              </div>
              <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Step by Step Execution Process */}
      <section className="space-y-6 pt-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
            The 6-Step LLP Registration Roadmap (MCA V3 Process)
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1">
            A chronological guide to incorporating your Limited Liability Partnership in India with zero compliance hurdles.
          </p>
        </div>

        <div className="space-y-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 font-bold text-sm sm:text-base flex items-center justify-center shrink-0 border border-emerald-200/60">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
              <div className="shrink-0 pl-15 md:pl-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Nuances & State Stamp Duty Callout */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/60 via-slate-50 to-indigo-50/40 border border-blue-200/70 space-y-3">
        <div className="flex items-center gap-2 text-blue-900 font-semibold text-base">
          <Landmark className="w-5 h-5 text-blue-600" />
          <h3>State-Wise Stamp Duty Variations on LLP Agreements</h3>
        </div>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
          While the incorporation process through MCA V3 is centralized at the Central Registration Centre (CRC, Manesar), state stamp duty laws govern the execution of the constitutional LLP Agreement. Non-judicial stamp paper duty varies depending on the state where your registered office is situated and your total capital contribution:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80">
            <span className="font-semibold text-slate-900 block mb-0.5">Maharashtra</span>
            <span className="text-slate-600">Fixed ₹500 or slab-based percentage of capital contribution.</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80">
            <span className="font-semibold text-slate-900 block mb-0.5">Karnataka &amp; Tamil Nadu</span>
            <span className="text-slate-600">₹1,000 to ₹2,000+ depending on agreed partner capital.</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80">
            <span className="font-semibold text-slate-900 block mb-0.5">Delhi &amp; Uttar Pradesh</span>
            <span className="text-slate-600">Starting from ₹500 non-judicial stamp duty with notary attestation.</span>
          </div>
        </div>
        <p className="text-[12px] text-slate-600 leading-relaxed pt-1">
          Merrafilings manages complete state-specific legal stamp paper acquisition, drafting, notarization, and statutory Form 3 upload to guarantee zero non-compliance penalties.
        </p>
      </section>

      {/* Mandatory Annual Compliance Overview */}
      <section className="space-y-3 pt-4 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
          Post-Incorporation Annual Compliance Calendar
        </h2>
        <p className="text-[13.5px] text-slate-700 leading-relaxed">
          Maintaining an active, penalty-free status for your LLP requires fulfilling three foundational regulatory filings each year:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-[13px] mt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="text-emerald-700 font-bold block text-sm">Form 11 (Annual Return)</span>
            <span className="text-slate-500 block text-xs">Due by: May 30th</span>
            <p className="text-slate-600 text-xs leading-relaxed pt-1">
              Summary of management, partners, and capital contributions filed within 60 days of fiscal year end.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="text-emerald-700 font-bold block text-sm">Form 8 (Solvency Statement)</span>
            <span className="text-slate-500 block text-xs">Due by: October 30th</span>
            <p className="text-slate-600 text-xs leading-relaxed pt-1">
              Statutory declaration of financial standing, assets, and liabilities signed by designated partners.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="text-emerald-700 font-bold block text-sm">ITR-5 (Income Tax Return)</span>
            <span className="text-slate-500 block text-xs">Due by: July 31st / Oct 31st</span>
            <p className="text-slate-600 text-xs leading-relaxed pt-1">
              Annual tax declaration filed with the Income Tax Department at a flat 30% firm tax rate.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
              Everything you need to know about setting up and running an LLP in India.
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
