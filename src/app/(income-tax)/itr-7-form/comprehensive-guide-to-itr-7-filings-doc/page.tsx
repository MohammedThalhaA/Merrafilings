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

const ELIGIBILITY_SECTIONS = [
  {
    section: "Section 139(4A)",
    title: "Charitable & Religious Trusts",
    desc: "Mandatory for trusts or institutions deriving income from property held under trust wholly for charitable or religious purposes, or receiving voluntary contributions subject to Section 11 and Section 12 exemptions.",
    threshold: "Required if Total Income before Sec 11/12 exemptions exceeds the basic exemption limit (₹2.5 Lakhs).",
    color: "emerald",
    badge: "Public Trusts & Societies",
  },
  {
    section: "Section 139(4B)",
    title: "Political Parties",
    desc: "Compulsory for the chief executive officer or treasurer of every registered political party claiming 100% tax exemption under Section 13A on voluntary contributions, property income, and capital gains.",
    threshold: "Mandatory if gross income exceeds basic exemption limit without giving effect to Section 13A relief.",
    color: "blue",
    badge: "ECI Registered Parties",
  },
  {
    section: "Section 139(4C)",
    title: "Scientific, Medical & Sports Bodies",
    desc: "Covers scientific research associations (Sec 10(21)), news agencies (Sec 10(22B)), professional bodies (Sec 10(23A)), sports institutions (Sec 10(23B)), and hospitals/medical institutes (Sec 10(23C)).",
    threshold: "Required if gross receipts exceed statutory exemption thresholds prescribed under respective sub-clauses.",
    color: "purple",
    badge: "Research & Media Bodies",
  },
  {
    section: "Section 139(4D)",
    title: "Universities, Colleges & Schools",
    desc: "Prescribed for universities, colleges, and recognized educational institutions claiming tax exemptions under Section 10(23C) not required to furnish returns under any other provision.",
    threshold: "Mandatory for all autonomous universities and higher learning centers registered under Central/State legislation.",
    color: "amber",
    badge: "Educational Institutions",
  },
  {
    section: "Section 139(4E)",
    title: "Business Trusts (REITs & InvITs)",
    desc: "Applicable to recognized Business Trusts including Real Estate Investment Trusts (REITs) and Infrastructure Investment Trusts (InvITs) not required to furnish returns under other sections.",
    threshold: "Mandatory for all SEBI-registered business trust vehicles distributing income under Section 115UA.",
    color: "rose",
    badge: "REITs & InvITs",
  },
  {
    section: "Section 139(4F)",
    title: "Securitization & Investment Funds",
    desc: "Prescribed for Alternative Investment Funds (AIF Category I and II) and securitization trusts claiming pass-through taxation status under Chapter XII-FB and Chapter XII-FA.",
    threshold: "Required to furnish details of income allocated and distributed to unit holders as per Section 115UB.",
    color: "teal",
    badge: "Investment Funds",
  },
];

const ESSENTIAL_DOCUMENTS = [
  {
    num: "01",
    title: "Audited Financial Statements",
    category: "Financial Accounts",
    importance: "Mandatory",
    desc: "Certified Balance Sheet, Income & Expenditure Statement, and complete Receipts & Payments Account compiled as per non-profit accounting standards and signed by the trustees and auditor.",
  },
  {
    num: "02",
    title: "Statutory Audit Report (Form 10B / Form 10BB)",
    category: "CA Audit Certification",
    importance: "Due Sept 30",
    desc: "Audit report electronically submitted by a practicing Chartered Accountant on the e-filing portal with a unique UDIN. Form 10B applies for trusts with income exceeding ₹5 Cr, foreign donations, or business undertakings; Form 10BB applies to all other trusts.",
  },
  {
    num: "03",
    title: "Form 9A & Form 10 (Income Accumulation)",
    category: "Exemption Filings",
    importance: "Pre-Filing Prerequisite",
    desc: "Mandatory forms filed on or before the due date for furnishing the audit report (September 30) if the trust was unable to apply 85% of its income during the financial year and wishes to accumulate funds for future application.",
  },
  {
    num: "04",
    title: "Form 10BD Statement & Form 10BE Certificates",
    category: "Donation Records",
    importance: "Donor Reconciliation",
    desc: "Annual statement of donations (Form 10BD) filed by May 31, accompanied by cross-matched donor receipts, donor PAN details, and individual certificates in Form 10BE issued to contributors claiming Section 80G deductions.",
  },
  {
    num: "05",
    title: "Section 12AB & 80G Registration Orders",
    category: "Statutory Approvals",
    importance: "URN Verification",
    desc: "Official 16-character Unique Registration Number (URN) certificate issued by the Principal Commissioner of Income Tax under Section 12AB, along with approval orders under Section 80G(5) and Section 10(23C).",
  },
  {
    num: "06",
    title: "FCRA Account Records & Class 3 DSC Token",
    category: "Authentication",
    importance: "Mandatory for E-Filing",
    desc: "Bank statements for all active operational bank accounts, including the designated SBI New Delhi Main Branch FCRA account (for foreign contributions), and a registered Class 3 Digital Signature Certificate of the Principal Officer.",
  },
];

const FILING_STEPS = [
  {
    step: "Step 1",
    title: "Compile & Reconcile Non-Profit Financial Datasets",
    desc: "Extract receipts and payment ledgers, separate voluntary corpus contributions from general donations, tally anonymous contributions under Section 115BBC, and verify expenditure vouchers against declared trust objects.",
  },
  {
    step: "Step 2",
    title: "Obtain & Submit CA Audit Report (Form 10B / 10BB)",
    desc: "Assign a practicing Chartered Accountant to conduct the statutory audit. The CA must upload Form 10B or Form 10BB with a valid UDIN at least one month before the ITR deadline (on or before September 30).",
  },
  {
    step: "Step 3",
    title: "File Form 9A / Form 10 for Income Accumulations",
    desc: "If current-year application falls short of the mandatory 85% threshold, submit Form 9A (for deemed application) or Form 10 (for accumulation up to 5 years) electronically prior to the statutory cutoff.",
  },
  {
    step: "Step 4",
    title: "Log In to Income Tax Portal & Download Offline Utility",
    desc: "Access your trust's PAN account on the official Income Tax portal (incometax.gov.in). Use the Java/JSON offline utility or online form selector, selecting Assessment Year 2026-27 and Form ITR-7.",
  },
  {
    step: "Step 5",
    title: "Accurately Populate Part A & Core Schedules",
    desc: "Complete Part A-GEN with your 16-character 12AB URN, Section 80G details, and Trustee data. Carefully populate Schedule VC (Voluntary Contributions), Schedule AI, Schedule ER (Revenue Application), and Schedule EC (Capital Application).",
  },
  {
    step: "Step 6",
    title: "Validate Computations in Part B & Check Tax Due",
    desc: "Run portal validation checks. Ensure the 15% unconditional accumulation is accurately reflected, verify tax credits against Form 26AS/AIS, and settle any self-assessment tax liability through Challan ITNS 280.",
  },
  {
    step: "Step 7",
    title: "E-Verify Return Using Class 3 Digital Signature",
    desc: "Sign and submit Form ITR-7 electronically. For trusts, societies, political parties, and Section 8 companies liable to audit, e-verification via Class 3 DSC registered in the Principal Officer's profile is compulsory.",
  },
];

const COMMON_MISTAKES = [
  {
    title: "Late Submission of Form 10B / Form 10BB Audit Report",
    desc: "Under amended provisions, the statutory audit report must be uploaded by September 30 (one month prior to the ITR-7 cutoff). Filing the audit report after this deadline completely disallows Section 11 and Section 12 exemptions, triggering tax at maximum marginal rates.",
    code: "Sec 12A(1)(b)",
  },
  {
    title: "Failing to File ITR-7 on or Before October 31 Deadline",
    desc: "Section 12A(1)(ba) strictly stipulates that claiming tax exemptions is contingent upon furnishing the return on or before the due date under Section 139(1). Filing a belated return under Section 139(4) forfeits all exemptions for that year.",
    code: "Sec 12A(1)(ba)",
  },
  {
    title: "Corpus Donations Given to Other Charitable Trusts",
    desc: "Under Explanation 2 to Section 11(1), donations made by one trust towards the corpus of another registered trust cannot be treated as an application of income. Treating inter-trust corpus donations as charitable application leads to hefty tax additions.",
    code: "Sec 11(1) Expl. 2",
  },
  {
    title: "Discrepancy Between Form 10BD and Schedule VC Voluntary Contributions",
    desc: "The CPC automated processing system cross-matches total voluntary donations in Schedule VC with the donor statement submitted in Form 10BD. Unexplained variances trigger defective return notices under Section 139(9).",
    code: "Sec 139(9)",
  },
];

const LATEST_UPDATES = [
  {
    title: "Strict Dual Audit Framework (Form 10B vs. 10BB)",
    desc: "Form 10B is now strictly mandated if the trust's total income exceeds ₹5 Crores, or if it received any foreign contributions, or if it runs business undertakings under Section 11(4A). Form 10BB applies to all other trusts.",
  },
  {
    title: "Mandatory Electronic Filing of Form 9A & Form 10",
    desc: "Physical resolutions or declarations are invalid. Deemed application (Form 9A) and specific accumulations (Form 10) must be filed electronically on the portal before the audit due date (September 30).",
  },
  {
    title: "85% Application Rule on Inter-Trust Donations",
    desc: "Only 85% of eligible grants made to other registered charitable trusts out of current-year income is credited as an application of income. The remaining 15% must be applied directly to programmatic charitable objects.",
  },
  {
    title: "Automated Non-Filing Scrutiny Inquiries",
    desc: "The Income Tax Department's Insight Portal now tracks NGO banking transactions and donor 80G claims. Non-filing or defective filing automatically triggers notices under Section 148A or Section 133(6).",
  },
];

const FAQS = [
  {
    q: "Who is required to file Form ITR-7 in India?",
    a: "Form ITR-7 is prescribed for entities claiming tax exemption under non-profit and charitable provisions, including Public Charitable and Religious Trusts (Sec 139(4A)), Political Parties (Sec 139(4B)), Scientific Research Bodies & News Agencies (Sec 139(4C)), Universities and Colleges (Sec 139(4D)), Business Trusts (Sec 139(4E)), and Investment Funds (Sec 139(4F)).",
  },
  {
    q: "What is the statutory deadline for filing Form ITR-7 for AY 2026-27?",
    a: "For entities liable to statutory tax audit (most trusts and Section 8 companies), the ITR-7 filing deadline is October 31, 2026. However, the mandatory Audit Report in Form 10B or Form 10BB must be filed one month earlier, on or before September 30, 2026. For non-audit trusts, the deadline is July 31, 2026.",
  },
  {
    q: "What happens if a trust files its ITR-7 after the statutory due date?",
    a: "Under Section 12A(1)(ba), timely filing of Form ITR-7 within the Section 139(1) deadline is a mandatory prerequisite for claiming Section 11 and Section 12 exemptions. If filed belatedly, the tax department denies all exemptions, and the trust's gross receipts (without standard deductions) are taxed at 30% along with late fees under Section 234F.",
  },
  {
    q: "How do I choose between Form 10B and Form 10BB for trust audit reporting?",
    a: "Form 10B must be filed if: (1) Total income of the trust exceeds ₹5 Crores; (2) The trust received any foreign contributions under FCRA; or (3) The trust has income derived from a business undertaking under Section 11(4A). In all other cases, Form 10BB is the applicable audit report.",
  },
  {
    q: "What is the 85% application of income rule in Form ITR-7?",
    a: "Charitable and religious trusts must apply at least 85% of their total income towards their charitable or religious objects within the financial year. The remaining 15% can be accumulated unconditionally without taxation. If 85% cannot be applied, the trust must file Form 9A or Form 10 to protect its exemption.",
  },
  {
    q: "Can a trust verify Form ITR-7 using Aadhaar OTP?",
    a: "No. For companies, political parties, and charitable trusts liable to audit under Section 12A(1)(b), e-verification via Class 3 Digital Signature Certificate (DSC) of the Principal Officer / Managing Trustee is mandatory. Aadhaar OTP is only permitted for small non-audit entities where the principal officer is an individual.",
  },
  {
    q: "What documents must be attached directly with Form ITR-7?",
    a: "Form ITR-7 is an annexure-less electronic return, meaning no physical documents need to be uploaded with the return itself. However, the audit report (Form 10B/10BB) and accumulation forms (Form 9A/10) must be filed separately on the portal prior to ITR-7 submission, and their acknowledgment numbers must be quoted in the ITR.",
  },
  {
    q: "How does Merrafilings assist trusts and NGOs with ITR-7 compliance?",
    a: "Merrafilings provides end-to-end trust taxation support: CA audit reporting in Form 10B/10BB, reconciliation of Form 10BD donation data with AIS/TIS, preparation of Form 9A/10 for lawful income accumulations, Schedule VC segregation, Section 11/12 exemption defense, and seamless Class 3 DSC e-filing.",
  },
];

export default function ComprehensiveGuideToItr7FilingsDocPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Itr7GuideLayout
      currentSlug="comprehensive-guide-to-itr-7-filings-doc"
      title="ITR 7 Filing Document: Comprehensive Guide for Taxpayers"
      breadcrumbLabel="ITR 7 Filing Document Guide"
      metaPublishedDate="Assessment Year 2026-27 Compliant"
      readingTime="9 min read"
      authorName="Merrafilings Non-Profit & Direct Tax Desk"
    >
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Each year, thousands of charitable trusts, educational institutions, political organizations, and non-profit
          enterprises participate in annual tax return filing across India. While completing a commercial return might take
          minimal effort, navigating the specialized provisions of <strong className="font-semibold text-slate-950">Form ITR-7</strong> requires
          rigorous statutory discipline, strict documentation tracking, and seamless synchronization with electronic audit reports.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          This comprehensive handbook decodes the entire architecture of Form ITR-7 for Assessment Year 2026-27.
          Whether you administer a registered public charitable trust, a Section 8 non-profit company, a university, or a political
          party, this guide details every mandatory document, explains the statutory eligibility framework under Sections 139(4A) to 139(4F),
          provides a 7-step e-filing blueprint, and highlights critical compliance pitfalls to avoid.
        </p>
      </section>

      {/* Section 2: What is Form ITR-7? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. What is Form ITR-7? Non-Profit Taxation Demystified
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          <strong className="text-slate-950">Form ITR-7</strong> is the statutory tax return form prescribed by the Central Board of
          Direct Taxes (CBDT) specifically for entities claiming exemptions under non-profit, educational, and philanthropic sections
          of the Income Tax Act, 1961. Unlike commercial entities that file ITR-5 or ITR-6 to compute net business profits, Form ITR-7 focuses on:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <HeartHandshake className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
              Voluntary Contributions &amp; Corpus Funds
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Accurate segregation of general donations, foreign contributions under FCRA, anonymous donations, and capital corpus receipts.
            </p>
          </div>

          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <Scale className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
              85% Mandatory Application of Income
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Statutory verification that at least 85% of total income has been applied towards charitable objects in India during the financial year.
            </p>
          </div>

          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <FileCheck className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1">
              Form 10B / 10BB Audit Synchronization
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Electronic cross-matching of audited financial ledgers with the statutory audit report submitted by an independent CA by September 30.
            </p>
          </div>

          <div className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <ShieldCheck className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
              Section 12AB Exemption Safeguard
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Mandatory compliance under Section 12A(1)(ba) to protect tax-exempt status and avoid punitive taxation of donations at 30%.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Statutory Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Statutory Eligibility Criteria: Who Must File Form ITR-7?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Entities obligated to furnish their returns using Form ITR-7 are classified under six specific sub-sections of Section 139:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {ELIGIBILITY_SECTIONS.map((item, idx) => (
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
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-3">
                {item.desc}
              </p>
              <div className="text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-normal">
                <strong className="text-slate-900">Statutory Condition:</strong> {item.threshold}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Mandatory Documents Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Mandatory Documentation Checklist for ITR-7 Filings
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Although Form ITR-7 is an annexure-less electronic return, all underlying statutory registers, audit certificates,
          and accumulation filings must be finalized and pre-validated before uploading your return:
        </p>

        <div className="space-y-3.5 mt-3">
          {ESSENTIAL_DOCUMENTS.map((doc, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                    {doc.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {doc.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-800 text-slate-700 transition-colors">
                    {doc.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    {doc.importance}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed pl-8">
                {doc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Step-by-Step Filing Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Step-by-Step Guide to Filing Form ITR-7 Online
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Follow this 7-step sequential workflow to complete an error-free ITR-7 e-filing for Assessment Year 2026-27:
        </p>

        <div className="space-y-3.5 mt-3">
          {FILING_STEPS.map((step, idx) => (
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

      {/* Section 6: Common Mistakes to Avoid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5. Critical Mistakes to Avoid in Form ITR-7 Filings
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Non-profit returns face automated algorithmic scrutiny. Even minor procedural errors can trigger total revocation of tax exemptions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {COMMON_MISTAKES.map((item, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-700 bg-rose-100 group-hover:bg-rose-200 px-2.5 py-0.5 rounded-full border border-rose-200 transition-colors">
                  {item.code}
                </span>
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-rose-900 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Latest Updates & Amendments */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          6. Latest Statutory Updates for Form ITR-7 (AY 2026-27)
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Stay fully aligned with recent direct tax amendments implemented by the CBDT:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {LATEST_UPDATES.map((item, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1.5 text-blue-800 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 group-hover:rotate-12 transition-transform" />
                <h3 className="group-hover:text-blue-900 transition-colors">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Practical queries regarding Form ITR-7 documentation, audit thresholds, and Section 12AB tax exemptions answered by Merrafilings non-profit tax experts.
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
