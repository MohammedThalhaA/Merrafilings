"use client";

import React, { useState } from "react";
import Itr7GuideLayout from "@/components/Itr7GuideLayout";
import {
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Building2,
  Scale,
  Award,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Laptop,
  Check,
  KeyRound,
  Calculator,
  Layers,
  ChevronDown,
  HelpCircle,
  Sparkles,
  HeartHandshake,
  Users,
  Vote,
  GraduationCap,
  FlaskConical,
  Receipt,
  FileSignature,
} from "lucide-react";

const ENTITY_CATEGORIES = [
  {
    section: "Section 139(4A)",
    title: "Public Charitable & Religious Trusts",
    desc: "Entities holding property under trust for charitable or religious purposes claiming exemption under Section 11 and Section 12. Must apply 85% of income towards approved objects.",
    color: "emerald",
    badge: "Section 11/12 Exemption",
  },
  {
    section: "Section 139(4B)",
    title: "Registered Political Parties",
    desc: "Political parties registered with the Election Commission of India under Section 29A of the RPA, 1951 claiming 100% tax exemption on donations and rental income under Section 13A.",
    color: "blue",
    badge: "Section 13A Exemption",
  },
  {
    section: "Section 139(4C)",
    title: "Scientific, Medical & Specialized Bodies",
    desc: "Scientific research associations (Sec 10(21)), news agencies (Sec 10(22B)), professional associations (Sec 10(23A)), sports bodies (Sec 10(23B)), and hospitals/medical funds (Sec 10(23C)).",
    color: "purple",
    badge: "Specialized Institutions",
  },
  {
    section: "Section 139(4D)",
    title: "Universities, Colleges & Educational Institutes",
    desc: "Universities, colleges, or higher educational institutions not required to file returns under any other provision, claiming exemption under Section 10(23C)(iiiab), (iiiac), (iv), (v), or (vi).",
    color: "amber",
    badge: "Educational Institutions",
  },
  {
    section: "Section 139(4E)",
    title: "Business Trusts (REITs & InvITs)",
    desc: "SEBI-registered Real Estate Investment Trusts (REITs) and Infrastructure Investment Trusts (InvITs) distributing rental, interest, or dividend income under Section 115UA.",
    color: "rose",
    badge: "Real Estate & Infra Trusts",
  },
  {
    section: "Section 139(4F)",
    title: "Alternative Investment Funds (AIFs)",
    desc: "Investment funds and securitization vehicles referred to in Section 115UB operating under pass-through taxation rules for investors and unit holders.",
    color: "teal",
    badge: "Securitization Funds",
  },
];

const ITR7_SCHEDULES = [
  {
    code: "Part A-GEN",
    title: "General Entity & Trustee Disclosures",
    desc: "Captures legal entity classification, 16-character Section 12AB URN, Section 80G approval status, date of trust registration, objects of trust, and complete details of Trustees, Directors, and Key Persons.",
    color: "emerald",
  },
  {
    code: "Schedule VC",
    title: "Voluntary Contributions & Donations",
    desc: "Itemized breakdown of domestic donations, grants from government, foreign contributions under FCRA, anonymous donations under Section 115BBC, and corpus donations received for capital projects.",
    color: "blue",
  },
  {
    code: "Schedule AI & ER/EC",
    title: "Aggregate Income & Charitable Application",
    desc: "Schedule AI evaluates aggregate gross receipts from trust property. Schedule ER captures revenue expenditure on charitable activities in India, while Schedule EC captures capital expenditures incurred on trust assets.",
    color: "purple",
  },
  {
    code: "Schedule J & K",
    title: "Disbursements, Provisions & Balance Sheet",
    desc: "Schedule J reconciles income applied, deemed applications, and specific accumulations. Schedule K acts as the statutory balance sheet statement showing capital funds, corpus reserves, investments, and liabilities.",
    color: "amber",
  },
  {
    code: "Schedule LA & ET",
    title: "Political Parties & Electoral Trusts",
    desc: "Specialized schedules for political parties under Section 13A (recording voluntary contributions exceeding ₹20,000, audited accounts, and ECI reports) and Electoral Trusts under Section 13B.",
    color: "rose",
  },
  {
    code: "Schedule 115TD",
    title: "Accreted Income (Exit Tax) Calculation",
    desc: "Computation of tax on accreted income payable at maximum marginal rates (34.944%) in cases of trust dissolution, conversion into non-charitable entities, or non-renewal of Section 12AB registration.",
    color: "teal",
  },
];

const FILING_PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Collate Financial Records & Donation Ledgers",
    desc: "Assemble certified balance sheets, receipts & payments statements, bank reconciliation statements, and Form 10BD donation acknowledgments. Ensure all voluntary donations match bank deposits.",
  },
  {
    step: "Step 2",
    title: "Verify Statutory CA Audit (Form 10B / Form 10BB)",
    desc: "Ensure your Chartered Accountant has furnished Form 10B (for trusts > ₹5 Cr or foreign funds) or Form 10BB on the e-filing portal before September 30 with a valid Unique Document Identification Number (UDIN).",
  },
  {
    step: "Step 3",
    title: "Submit Form 9A / Form 10 Before Audit Due Date",
    desc: "If 85% of income was not applied during the financial year, file Form 9A (deemed application for delayed receipts) or Form 10 (accumulation up to 5 years) electronically before the September 30 deadline.",
  },
  {
    step: "Step 4",
    title: "Download Offline Utility & Populate ITR-7 Schedules",
    desc: "Access the Income Tax e-filing portal, select Assessment Year 2026-27, and open Form ITR-7. Fill out Part A-GEN, Schedule VC, AI, ER, EC, and verify computed taxable income in Part B-TI.",
  },
  {
    step: "Step 5",
    title: "Complete Electronic Verification with Class 3 DSC",
    desc: "Validate the JSON schema for computational errors. Submit the return and authenticate it using the registered Class 3 Digital Signature Certificate (DSC) of the Managing Trustee or Principal Officer.",
  },
];

const BEST_PRACTICES = [
  {
    title: "Strict Monitoring of the 85% Application Rule",
    desc: "Ensure at least 85% of total annual income is expended directly on charitable or religious objects in India. Do not treat inter-trust corpus donations as application, as this is prohibited by law.",
  },
  {
    title: "Timely Submission of Form 10B/10BB by September 30",
    desc: "The statutory audit report must be uploaded 30 days before the ITR-7 deadline. Missing September 30 leads to automatic rejection of Section 11/12 exemptions during automated CPC processing.",
  },
  {
    title: "Annual Reconciliation of Form 10BD with AIS / TIS",
    desc: "Every donor listed in Form 10BD must reconcile with receipts in Schedule VC. Discrepancies cause donor 80G claim rejections and trigger Section 133(6) automated scrutiny notices for the trust.",
  },
  {
    title: "Maintain Permissible Modes of Investment under Section 11(5)",
    desc: "All surplus funds and corpus reserves must be invested strictly in designated securities, public sector banks, or post office savings under Section 11(5). Impermissible investments trigger Section 13 penalties.",
  },
];

const RECENT_UPDATES = [
  {
    title: "Automated Pre-Population of Audit UDINs",
    desc: "Form ITR-7 now automatically cross-references and validates the UDIN generated by your CA in Form 10B/10BB, eliminating manual clerical errors and notice disputes.",
  },
  {
    title: "Inter-Trust Donation Application Restricted to 85%",
    desc: "Grants given to another registered trust out of current-year income are now recognized as application only up to 85% of the transferred amount to prevent circular grant hopping.",
  },
  {
    title: "Stricter Anonymous Donation Scrutiny (Section 115BBC)",
    desc: "Anonymous donations exceeding 5% of total donations or ₹1,00,000 (whichever is higher) are taxed at a flat 30% rate, with automated detection via banking transaction monitoring.",
  },
];

const FAQS = [
  {
    q: "What makes Form ITR-7 different from ITR-5 and ITR-6?",
    a: "While ITR-5 (for LLPs/firms) and ITR-6 (for companies) focus on commercial business profitability and MAT calculations, Form ITR-7 is exclusively designed for entities claiming statutory tax exemptions under non-profit sections (Sections 11, 12, 13A, and 10). It evaluates compliance with the 85% application of income rule and donor transparency.",
  },
  {
    q: "Can a Section 8 Company file Form ITR-6 instead of ITR-7?",
    a: "If a Section 8 company has registered under Section 12AB and claims exemption under Section 11 and Section 12, it must mandatorily file Form ITR-7. If it does not claim Section 11/12 exemptions, it must file Form ITR-6.",
  },
  {
    q: "What is the penalty for filing Form ITR-7 after the October 31 deadline?",
    a: "Under Section 12A(1)(ba), filing Form ITR-7 on or before the due date under Section 139(1) is compulsory to claim Section 11 and Section 12 exemptions. If filed late, all exemptions are cancelled, gross income is taxed at 30%, and a late filing fee up to ₹5,000 is levied under Section 234F.",
  },
  {
    q: "What is the difference between Form 10B and Form 10BB?",
    a: "Form 10B is required if the trust's total income exceeds ₹5 Crores, or if it received any foreign contribution under FCRA, or if it derives income from a business undertaking under Section 11(4A). In all other cases, Form 10BB is the applicable audit report.",
  },
  {
    q: "What is Form 9A in trust tax filing?",
    a: "Form 9A is an electronic application filed under Explanation to Section 11(1) to deem income as applied in the current financial year when the trust did not receive the income during the year, or was unable to spend it due to genuine delay. It must be filed before September 30.",
  },
  {
    q: "What is Form 10 accumulation and how long can funds be accumulated?",
    a: "Under Section 11(2), a trust can accumulate up to 85% of its income for specific stated purposes for a maximum duration of 5 years. The trust must file Form 10 electronically before September 30 and invest the accumulated money strictly as per Section 11(5).",
  },
  {
    q: "Is Class 3 DSC mandatory for all ITR-7 filings?",
    a: "Yes. For political parties, Section 8 companies, and charitable trusts whose accounts are required to be audited under Section 12A(1)(b), e-verification using a valid Class 3 Digital Signature Certificate (DSC) is mandatory by law.",
  },
  {
    q: "How can Merrafilings ensure zero-defect ITR-7 compliance for our trust?",
    a: "Merrafilings pairs your organization with an experienced Non-Profit Chartered Accountant who handles end-to-end compliance: Form 10B/10BB audit reporting, Form 9A/10 drafting, donor reconciliation with Form 10BD, Section 11/12 exemption claims, and DSC verification.",
  },
];

export default function UnderstandingTheItr7FormAComprehensiveGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Itr7GuideLayout
      currentSlug="understanding-the-itr7-form-a-comprehensive-guide"
      title="Understanding the ITR-7 Form: A Comprehensive Guide"
      breadcrumbLabel="Understanding the ITR-7 Form"
      metaPublishedDate="Assessment Year 2026-27 Compliant"
      readingTime="10 min read"
      authorName="Merrafilings Non-Profit & Direct Tax Desk"
    >
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Completing an annual income tax return can be an intricate and demanding responsibility, particularly for non-profit
          institutions governed by multifaceted exemption frameworks. For charitable trusts, non-governmental organizations (NGOs),
          educational foundations, research bodies, and political parties, statutory tax compliance is not merely about calculating
          liabilities—it is the foundational prerequisite to preserving tax-exempt status.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          This comprehensive guide demystifies <strong className="font-semibold text-slate-950">Form ITR-7</strong>, offering
          clarity on statutory entity qualifications under Sections 139(4A) to 139(4F), dissecting the anatomy of core schedules,
          outlining the 85% application rule, presenting the master compliance calendar, and providing practical recommendations for
          a seamless, penalty-free filing experience for Assessment Year 2026-27.
        </p>
      </section>

      {/* Section 2: What is the ITR-7 Form? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. What is the ITR-7 Form? The Non-Profit Return Architecture
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The <strong className="text-slate-950">ITR-7 Form</strong> is the dedicated direct tax return prescribed by the CBDT
          for entities claiming exemptions under Sections 11, 12, 13A, 13B, and 10 of the Income Tax Act, 1961. It caters specifically to:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-3">
          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <HeartHandshake className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
              Charitable &amp; Religious Trusts
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Public trusts, registered societies, and Section 8 companies holding valid Section 12AB registrations.
            </p>
          </div>

          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <Vote className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
              Political Parties &amp; Electoral Trusts
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              ECI-registered parties and approved electoral trusts claiming full exemptions under Sections 13A &amp; 13B.
            </p>
          </div>

          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <GraduationCap className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1">
              Colleges, Universities &amp; Hospitals
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Educational institutions, medical centers, and scientific bodies exempted under Section 10(23C).
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Who Should File Form ITR-7? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Who Should File the ITR-7 Form? Statutory Classification
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Sections 139(4A) to 139(4F) govern every entity category obligated to submit Form ITR-7:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {ENTITY_CATEGORIES.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white px-2.5 py-0.5 rounded-full border border-emerald-200/60 transition-colors">
                  {item.section}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Anatomy of Form ITR-7 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Anatomy of Form ITR-7: Key Sections &amp; Crucial Schedules
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Form ITR-7 contains over 30 specialized schedules structured to capture complete financial transparency:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {ITR7_SCHEDULES.map((item, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white px-2.5 py-0.5 rounded-full border border-blue-200/60 transition-colors">
                  {item.code}
                </span>
                <Layers className="w-4 h-4 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Step-by-Step Filing Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. How to File the ITR-7 Form: 5-Stage Step-by-Step Procedure
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Executing a seamless ITR-7 return requires structured coordination between the non-profit management and auditor:
        </p>

        <div className="space-y-3.5 mt-3">
          {FILING_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1.5 text-emerald-800 font-semibold text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white text-emerald-800 flex items-center justify-center text-xs font-bold transition-colors">
                  {idx + 1}
                </span>
                <span className="group-hover:text-emerald-900 transition-colors">{step.title}</span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed pl-8">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Master Due Dates Calendar */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5. Statutory Due Dates Master Calendar for AY 2026-27
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Meeting statutory deadlines is compulsory to protect Section 11/12 exemptions under Section 12A(1)(ba):
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-xl mt-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Compliance Event</th>
                <th className="p-3 sm:p-4">Governing Section / Form</th>
                <th className="p-3 sm:p-4 text-emerald-800 bg-emerald-50/50">Statutory Due Date</th>
                <th className="p-3 sm:p-4">Statutory Consequence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Donation Statement Filing</td>
                <td className="p-3 sm:p-4 font-mono text-xs">Form 10BD / 10BE</td>
                <td className="p-3 sm:p-4 font-semibold text-slate-900">31 May 2026</td>
                <td className="p-3 sm:p-4">₹200/day late fee under Sec 234G</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Non-Audit Trust Return Filing</td>
                <td className="p-3 sm:p-4 font-mono text-xs">Form ITR-7 (Non-Audit)</td>
                <td className="p-3 sm:p-4 font-semibold text-slate-900">31 July 2026</td>
                <td className="p-3 sm:p-4">Late fees under Section 234F</td>
              </tr>
              <tr className="bg-emerald-50/40">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Statutory CA Audit Report</td>
                <td className="p-3 sm:p-4 font-mono text-xs">Form 10B / Form 10BB</td>
                <td className="p-3 sm:p-4 text-emerald-800 font-bold">30 September 2026</td>
                <td className="p-3 sm:p-4 text-rose-700 font-medium">Complete loss of tax exemption!</td>
              </tr>
              <tr className="bg-emerald-50/40">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Income Accumulation Filing</td>
                <td className="p-3 sm:p-4 font-mono text-xs">Form 9A / Form 10</td>
                <td className="p-3 sm:p-4 text-emerald-800 font-bold">30 September 2026</td>
                <td className="p-3 sm:p-4 text-rose-700 font-medium">Unspent 85% taxed at 30%</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Audit Trust ITR-7 Return</td>
                <td className="p-3 sm:p-4 font-mono text-xs">Form ITR-7 (Audited)</td>
                <td className="p-3 sm:p-4 text-blue-800 font-bold">31 October 2026</td>
                <td className="p-3 sm:p-4 text-rose-700 font-medium">Section 12A(1)(ba) exemption cancellation</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Belated &amp; Revised Return</td>
                <td className="p-3 sm:p-4 font-mono text-xs">Section 139(4) / 139(5)</td>
                <td className="p-3 sm:p-4 font-semibold text-purple-800">31 December 2026</td>
                <td className="p-3 sm:p-4">Final deadline with Section 234F fee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Actionable Best Practices */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          6. Best Practices for Hassle-Free Form ITR-7 Compliance
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Adopt these four disciplined practices to safeguard your organization's tax-exempt integrity:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {BEST_PRACTICES.map((item, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1.5 text-emerald-800 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="group-hover:text-emerald-900 transition-colors">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Recent CBDT Amendments */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          7. Recent Updates &amp; Amendments Impacting ITR-7
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Key structural modifications deployed on the Income Tax e-filing portal for Assessment Year 2026-27:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-3">
          {RECENT_UPDATES.map((item, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1.5 text-blue-800 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 group-hover:rotate-12 transition-transform" />
                <h3 className="group-hover:text-blue-900 transition-colors">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Technical queries regarding Form ITR-7 schedules, Section 11/12 tax exemptions, Form 10 accumulation, and CA audit mandates answered.
        </p>

        <div className="space-y-2.5 mt-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Itr7GuideLayout>
  );
}
