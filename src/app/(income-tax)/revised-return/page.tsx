"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
} from "@/components/ServicePageTemplate";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Scale,
  Award,
  BadgePercent,
  Building2,
  Coins,
  Check,
  HelpCircle,
  TrendingUp,
  Receipt,
  FileCheck,
  Layers,
  MapPin,
  Laptop,
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Globe2,
  FileSignature,
  DollarSign,
  Calculator,
  Percent,
  CreditCard,
  Hash,
  KeyRound,
  FileSpreadsheet,
  RotateCcw,
  History,
  FileEdit,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <RotateCcw className="w-4 h-4" />, text: "Rectify Mistakes in Filed ITR under Section 139(5) Before 31st December" },
  { icon: <Calculator className="w-4 h-4" />, text: "Claim Missed Chapter VIA Deductions (80C, 80D, 80G) & Excluded TDS Credits" },
  { icon: <History className="w-4 h-4" />, text: "Updated Return (ITR-U Section 139(8A)) for Past 2 Assessment Years" },
  { icon: <FileEdit className="w-4 h-4" />, text: "Correct Misreported Capital Gains, Salary Allowances & AIS Transactions" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Avoid Section 143(1) Defect Notices, Demand Letters & Section 270A Penalties" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Revised Return (Salaried / Individuals)",
    shortDesc: "Correction of errors in original ITR for salaried individuals and freelancers under Section 139(5).",
    expandedDesc: "Designed for individuals and salaried professionals who discovered mistakes in their first-filed ITR-1 or ITR-2 for AY 2026-27. Our senior tax accountants reconcile your Form 16, Form 26AS, and AIS data, incorporate missed Chapter VIA deductions (80C, 80D, 80G, HRA), update bank interest disclosures, prepare the revised computation, and submit the revised return under Section 139(5) quoting the original acknowledgment number.",
    price: "₹2,899",
    priceSub: "Per Assessment Year / Section 139(5)",
    badge: "Essential Revision",
    features: [
      "Preparation & Online E-Filing of Revised Return under Section 139(5)",
      "Quoting & Linking of Original 15-Digit ITR Acknowledgment Number",
      "Reconciliation with Form 26AS, AIS & Taxpayer Information Summary (TIS)",
      "Addition of Missed Chapter VIA Deductions (80C, 80D, 80G, 80TTA)",
      "Correction of Omitted Bank Interest, Dividend & Other Income",
      "Correction of Bank Account Number for Direct Tax Refund Credit",
      "Pre-Filing Computation Check to Maximize Legitimate Tax Refund",
      "Instant Generation of Revised ITR-V Acknowledgment Slip",
    ],
  },
  {
    name: "CA-Assisted Revised Return (Business / CG)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Personally handled by a senior Chartered Accountant for complex capital gains, business, or foreign assets.",
    expandedDesc: "Our most popular comprehensive revision suite for traders, property sellers, business proprietors, and partners. A practicing Chartered Accountant conducts a forensic review of your original ITR-3, ITR-4, or ITR-5, rectifies capital gains computations (Schedule CG), adjusts depreciation ledgers, updates foreign assets (Schedule FA), resolves Section 143(1) mismatch warnings, and ensures complete immunity from under-reporting penalties.",
    price: "₹5,899",
    priceSub: "Per Assessment Year / CA Certified",
    features: [
      "Everything in the Salaried Revised Return Package",
      "Personally Handled & Reviewed by Senior Practicing Chartered Accountant",
      "Intricate Capital Gains Re-computation (Stocks, Mutual Funds, Real Estate)",
      "Presumptive Business Turnover & Profit Adjustments (Sec 44AD/44ADA)",
      "Schedule FA (Foreign Assets) & Foreign Remittance Omission Rectification",
      "Switching between Old and New Tax Regime (if permitted by law)",
      "Reconciliation of Disputed Tax Credits & Section 154 Advice",
      "Digital Signature Certificate (DSC) / EVC Verification Assistance",
    ],
  },
  {
    name: "Updated Return (ITR-U Section 139(8A))",
    shortDesc: "Filing of updated return for previous assessment years up to 2 years with additional tax calculation.",
    expandedDesc: "Tailored for taxpayers who completely missed filing their original return or missed the 31st December revised return deadline for past financial years (FY 2023-24, FY 2024-25, FY 2025-26). Covers complete preparation of Form ITR-U under Section 139(8A), computation of statutory additional tax (25% or 50%), challan preparation, and voluntary disclosure to eliminate risk of departmental search, seizure, or Section 148 reassessment.",
    price: "₹9,899",
    priceSub: "Past Assessment Years / Includes ITR-U Suite",
    badge: "Past Year Regularization",
    features: [
      "Dedicated Senior Direct Tax Partner Assigned",
      "Preparation & Submission of Updated Return under Section 139(8A)",
      "Accurate Computation of 25% or 50% Additional Tax Liability",
      "Multi-Year AIS, TIS & High-Value SFT Transaction Audit",
      "Voluntary Regularization of Previously Omitted Business / Trading Income",
      "E-Pay Tax Challan Generation for Additional Tax & Interest under 234A/B/C",
      "Protection from Search, Reassessment (Sec 148) & Prosecution (Sec 276C)",
      "Full Advisory on Future Tax Compliance & Audit Risk Mitigation",
    ],
  },
];

const REVISION_REASONS = [
  {
    title: "Omitted Interest, Dividend or Freelance Income",
    desc: "Failure to disclose savings bank interest, fixed deposit interest, dividends, or secondary freelance income that appears in the Annual Information Statement (AIS).",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Missed Eligible Deductions & Exemptions",
    desc: "Forgetting to claim Chapter VIA tax deductions under Section 80C (PPF, ELSS, tuition fees), Section 80D (health insurance), Section 80G (donations), or HRA in the original filing.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Incorrect TDS / TCS Credit Claimed",
    desc: "Entering mismatched TDS amounts that conflict with Form 26AS, or failing to claim tax deducted by clients, banks, or employers due to delayed TDS return filings.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Selection of Incorrect ITR Form Type",
    desc: "Filing ITR-1 when holding foreign shares (US stocks/ESOPs) or directorships, which legally requires ITR-2 or ITR-3, triggering an automated Section 139(9) defective return notice.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Errors in Capital Gains or Loss Set-Off",
    desc: "Incorrect purchase dates, indexation figures, exemption claims under Section 54/54F, or wrong classification between short-term and long-term capital assets.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Incorrect Bank Details for Tax Refund",
    desc: "Typing an incorrect bank account number or IFSC code in the return, leading to refund failures and delays on the Centralized Processing Centre (CPC) portal.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FILING_STEPS = [
  {
    step: "Step 01",
    title: "Identify Omissions & Collate Proofs",
    desc: "Review your first-filed ITR, Form 26AS, AIS, and TIS statements to pinpoint the exact income discrepancies, missing deductions, or clerical errors.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 02",
    title: "Locate Original ITR Acknowledgment",
    desc: "Retrieve the 15-digit Acknowledgment Number and the exact date of filing of your originally submitted return (or last revised return) from your ITR-V receipt.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 03",
    title: "Select Section 139(5) on Portal",
    desc: "Log into incometax.gov.in. Navigate to e-File > File Income Tax Return. Select AY 2026-27, choose the appropriate ITR form, and select 'Revised Return u/s 139(5)'.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 04",
    title: "Input Corrected Schedule Data",
    desc: "Re-enter the complete, corrected information across all schedules. Because the revised return replaces the original entirely, all schedules must be filled accurately.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 05",
    title: "Pay Additional Tax & Interest (If Any)",
    desc: "If revising increases your taxable income, compute and deposit the balance self-assessment tax along with interest under Section 234B/234C via e-Pay Tax prior to submission.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "Submit & Complete E-Verification",
    desc: "Submit the return and electronically verify within 30 days using Aadhaar OTP, NetBanking, or Class 3 DSC. Download your revised ITR-V acknowledgment receipt.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is an ITR Revised Return under Section 139(5)?",
    a: "A Revised Return under Section 139(5) of the Income Tax Act, 1961 is a corrected version of the originally filed Income Tax Return submitted to rectify any omission, error, or wrong statement. Once submitted, the revised return completely substitutes and replaces the original return.",
  },
  {
    q: "What is the deadline for filing a revised return for AY 2026-27?",
    a: "The statutory deadline for filing a revised return under Section 139(5) for Assessment Year 2026-27 (Financial Year 2025-26) is December 31st, 2026, or before the completion of the assessment by the Assessing Officer, whichever is earlier.",
  },
  {
    q: "Is there any penalty for filing a revised return before December 31st?",
    a: "No. If a revised return is submitted on or before 31st December of the assessment year, there is zero government penalty or late fee under the Income Tax Act. However, if the revision results in higher tax liability, statutory interest under Section 234B and 234C must be paid on the incremental tax.",
  },
  {
    q: "How many times can a taxpayer file a revised return?",
    a: "There is no statutory restriction on the number of times a return can be revised. A taxpayer can file a revised return multiple times on or before December 31st of the assessment year, provided each successive revision quotes the acknowledgment number of the immediately preceding return.",
  },
  {
    q: "Can a belated return filed under Section 139(4) be revised?",
    a: "Yes. Following amendments introduced by the Finance Act 2016, a belated return filed after the original July/October deadline under Section 139(4) can also be revised under Section 139(5) on or before December 31st of the assessment year.",
  },
  {
    q: "What is an Updated Return (ITR-U) under Section 139(8A)?",
    a: "An Updated Return (ITR-U) is a special provision introduced under Section 139(8A) that permits taxpayers to update their tax return for up to 24 months (2 years) from the end of the relevant assessment year to declare additional omitted income, subject to payment of 25% or 50% additional tax.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What are the core differences between a Revised Return and an Updated Return (ITR-U)?",
    a: "A Revised Return (Sec 139(5)) must be filed by 31st December of the AY, attracts zero penalty, and can be used to declare omitted income, claim missed deductions, or claim higher refunds. In contrast, an Updated Return (ITR-U Sec 139(8A)) can be filed up to 2 years later, attracts 25% or 50% additional tax, and can ONLY be used to declare additional income—never to claim refunds or increase losses.",
  },
  {
    q: "Can I claim missed deductions (like Section 80C or 80D) in a revised return?",
    a: "Yes, absolutely. A revised return is the legal mechanism to claim deductions under Section 80C, 80D, 80G, or exemptions like HRA that were inadvertently omitted in the original filing, allowing you to claim an additional tax refund.",
  },
  {
    q: "Does a revised return completely overwrite the first-filed return?",
    a: "Yes. The revised return is not an addendum or supplementary sheet; it completely supersedes the original filing. Therefore, all original accurate disclosures, salary figures, and schedules must be re-entered along with the corrected entries.",
  },
  {
    q: "What happens if I miss the 31st December revised return deadline?",
    a: "If you miss the December 31st deadline, you permanently lose the right to file a standard revised return or claim additional tax refunds for that assessment year. Your only remaining option to report omitted income is to file an Updated Return (ITR-U) with 25% or 50% additional tax.",
  },
  {
    q: "Can I change my ITR form type while filing a revised return?",
    a: "Yes. If you erroneously filed ITR-1 instead of ITR-2 or ITR-3 in the original submission, you can select the correct ITR form while filing the revised return under Section 139(5) to cure the defect.",
  },
  {
    q: "Can business losses be carried forward in a revised return?",
    a: "Yes. As long as the original return was filed on or before the statutory due date under Section 139(1), any revision of business or capital losses in a revised return filed before 31st December will continue to enjoy legal carry-forward benefits.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What information from the original return is required to file a revised return?",
    a: "You must provide two specific data points from your original ITR-V: (1) The unique 15-digit original Acknowledgment Number; and (2) The exact Date of Filing of the original return. If you have already revised once, provide the details of the latest revised return.",
  },
  {
    q: "Is e-Verification mandatory for a revised income tax return?",
    a: "Yes, 100%. A revised return must be electronically verified within 30 days of submission via Aadhaar OTP, NetBanking, or Class 3 DSC. If not verified within 30 days, the revised return is deemed invalid and treated as never filed.",
  },
  {
    q: "Can a revised return be filed if the original return has already been processed by CPC?",
    a: "Yes. Even if you have received an intimation under Section 143(1) from CPC Bengaluru, you can still file a revised return under Section 139(5) as long as the December 31st deadline has not expired and formal scrutiny assessment under Section 143(3) has not been concluded.",
  },
  {
    q: "What additional tax is payable when filing an Updated Return (ITR-U)?",
    a: "Under Section 140B: (1) An additional tax equal to 25% of the aggregate tax and interest is payable if ITR-U is filed within 12 months from the end of the relevant AY; (2) An additional tax equal to 50% is payable if ITR-U is filed between 12 to 24 months from the end of the AY.",
  },
  {
    q: "Who is NOT eligible to file an Updated Return (ITR-U)?",
    a: "ITR-U cannot be filed to: (1) File a nil return or loss return; (2) Claim or increase an income tax refund; (3) When search/seizure proceedings under Section 132 have been initiated; or (4) When prosecution proceedings under Chapter XXII have commenced.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Can I switch between the Old and New Tax Regime in a revised return?",
    a: "For salaried individuals without business income, the tax regime can be switched between Old and New in a revised return filed on or before December 31st. However, taxpayers with business income who opted for or opted out of the new regime via Form 10-IEA cannot change their choice in a revised return.",
  },
  {
    q: "How does filing a revised return protect against Section 270A penalties?",
    a: "Voluntarily disclosing omitted income in a revised return before detection by the tax department eliminates under-reporting and misreporting charges, protecting the taxpayer from penalties ranging from 50% to 200% under Section 270A.",
  },
  {
    q: "What should I do if my income tax refund was rejected due to bank account errors?",
    a: "You can either file a revised return with corrected bank details (if before December 31st), or simply submit a 'Refund Re-issue Request' on the e-filing portal under Services > Refund Re-issue after validating your pre-validated bank account.",
  },
  {
    q: "Can an offline utility be used to prepare a revised return?",
    a: "Yes. You can download the official JSON/Excel utility from incometax.gov.in, select 'Revised Return u/s 139(5)', enter the original acknowledgment number, fill the schedules, generate the JSON file, and upload it on the portal.",
  },
  {
    q: "How does Merrafilings assist with Revised Return and ITR-U filing?",
    a: "Merrafilings pairs you with senior Chartered Accountants who reconcile multi-year AIS/TIS data, recalculate deductions, eliminate tax mismatches, compute exact incremental tax or refund amounts, and complete certified portal filings under Section 139(5) or Section 139(8A).",
  },
];

const RELATED_GUIDES = [
  {
    title: "File a Revised Return: Optimize Your Tax",
    href: "/revised-return/file-a-revised-return-optimize-your-tax",
    date: "Tax Optimization",
    readTime: "8 min read",
  },
  {
    title: "File Revised Return - Required Documents & Process Guide",
    href: "/revised-return/file-revised-return-required-documents",
    date: "Documentation Desk",
    readTime: "8 min read",
  },
  {
    title: "Optimize Your Taxes with Revised Return Filing",
    href: "/revised-return/revised-return-filing",
    date: "Statutory Filing",
    readTime: "8 min read",
  },
  {
    title: "Revised Return Filing: Easy 5 Steps Guide",
    href: "/revised-return/revised-return-filing-easy-5-steps-guide",
    date: "Step-by-Step Guide",
    readTime: "8 min read",
  },
  {
    title: "Revised Income Tax Return Online - How to File & Due Dates",
    href: "/revised-return/how-to-file-a-revised-income-tax-return",
    date: "Portal & Due Dates",
    readTime: "9 min read",
  },
];

const RELATED_SERVICES_TAGS = [
  "Revised Return",
  "Section 139(5) ITR",
  "ITR-U Updated Return",
  "Section 139(8A)",
  "Belated Return",
  "Form 26AS Rectification",
  "AIS Mismatch",
  "Missed 80C Deduction",
  "Capital Gains Revision",
  "Tax Refund Reissue",
  "Defective ITR Correction",
  "E-Verification",
];

const POPULAR_SEARCHES_TAGS = [
  "revised return filing due date AY 2026-27",
  "how to file revised income tax return online",
  "difference between revised and updated return",
  "ITR U filing process and 25 percent tax",
  "Section 139 5 revised return rules",
  "can I claim refund in revised return",
  "how many times can I revise ITR",
  "penalty for filing revised return",
  "ITR U form download",
  "how to rectify defective return Section 139 9",
  "missed 80C deduction in original ITR",
  "revised ITR acknowledgment number",
];

function RevisedReturnGuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Revised Income Tax Returns under Section 139(5)
        </h2>
        <p>
          Discovering an omission, clerical error, or misstatement after filing your annual Income Tax Return is common. Under <strong>Section 139(5) of the Income Tax Act, 1961</strong>, any taxpayer who has furnished a return of income—whether submitted on or before the due date (Section 139(1)) or as a belated return (Section 139(4))—is legally entitled to furnish a <strong>Revised Return</strong>.
        </p>
        <p>
          A revised return is not a supplementary sheet; it <strong>completely replaces and supersedes the first-filed return</strong>. Taxpayers can file a revised return multiple times before the statutory deadline of <strong>31st December of the assessment year</strong> with zero penalty, provided each revision references the previous acknowledgment number.
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
          <RotateCcw className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
            <strong>Voluntary Rectification Advantage:</strong> Rectifying an omission voluntarily in a revised return before department notice shields you from under-reporting penalties (50% to 200% under Section 270A) and potential prosecution.
          </div>
        </div>
      </section>

      {/* Section 2: Comparison Table: Revised vs Belated vs Updated (ITR-U) */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Comparative Analysis: Revised Return vs. Belated Return vs. Updated Return (ITR-U)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Evaluation Criteria</th>
                <th className="py-3.5 px-4 font-semibold text-emerald-700">Revised Return</th>
                <th className="py-3.5 px-4 font-semibold text-amber-700">Belated Return</th>
                <th className="py-3.5 px-4 font-semibold text-purple-700">Updated Return (ITR-U)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Governing Section</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Section 139(5)</td>
                <td className="py-3.5 px-4 font-bold text-amber-700">Section 139(4)</td>
                <td className="py-3.5 px-4 font-bold text-purple-700">Section 139(8A)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Eligibility</td>
                <td className="py-3.5 px-4">Those who filed original or belated return</td>
                <td className="py-3.5 px-4">Those who missed original July/Oct deadline</td>
                <td className="py-3.5 px-4">Any taxpayer reporting additional income</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Statutory Deadline</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">31st December of AY</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">31st December of AY</td>
                <td className="py-3.5 px-4 font-bold text-purple-700">Up to 24 Months from end of AY</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Primary Objective</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Correct errors, add deductions, claim refunds</td>
                <td className="py-3.5 px-4">First-time filing after original due date</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Declare previously omitted taxable income</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Penalty / Extra Tax</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">Zero penalty / Free revision</td>
                <td className="py-3.5 px-4 text-rose-600">Late fee up to ₹5,000 (Sec 234F)</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">25% or 50% Additional Tax</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Claim Higher Refund?</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-600">Yes, fully allowed</td>
                <td className="py-3.5 px-4">Yes, allowed</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">No, strictly prohibited</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Carry Forward of Loss</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Allowed (if original was on time)</td>
                <td className="py-3.5 px-4 text-rose-600">Disallowed (except House Property)</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Cannot increase or create loss</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Top Reasons for Revision */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Top Reasons Requiring a Revised Return Filing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVISION_REASONS.map((r, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${r.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${r.iconBox} mb-3 transition-all shrink-0`}>
                <FileEdit className="w-4 h-4" />
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${r.titleHover} transition-colors mb-2`}>
                {r.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Due Dates */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Statutory Due Dates for AY 2026-27 Return Filings
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Taxpayer Category</th>
                <th className="py-3.5 px-4 font-semibold">Original Return Due Date (139(1))</th>
                <th className="py-3.5 px-4 font-semibold">Revised Return Due Date (139(5))</th>
                <th className="py-3.5 px-4 font-semibold">Updated Return Deadline (139(8A))</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Salaried &amp; Non-Audit Individuals / HUF</td>
                <td className="py-3.5 px-4">31st July 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Corporate &amp; Tax Audit Cases (Firms/LLPs)</td>
                <td className="py-3.5 px-4">31st October 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Transfer Pricing Cases (Form 3CEB)</td>
                <td className="py-3.5 px-4">30th November 2026</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">31st December 2026</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">31st March 2029</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Step-by-Step Filing */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Step-by-Step Online Revised Return E-Filing Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FILING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${step.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                  {step.step}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.iconBox} transition-all shrink-0`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${step.titleHover} transition-colors mb-2`}>
                {step.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Key Rules Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Golden Rules to Remember Before Submitting a Revised Return
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px]">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <strong className="text-blue-700 block font-semibold">1. Must Be Preceded by an Original Return:</strong>
            <p className="text-slate-600">A revised return cannot be filed if you never filed an original return under Section 139(1) or 139(4). If no return was filed, you must file a belated return or an Updated Return (ITR-U).</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <strong className="text-emerald-700 block font-semibold">2. Mandatory 15-Digit Acknowledgment Link:</strong>
            <p className="text-slate-600">You must quote the 15-digit acknowledgment number and filing date of the original (or immediately preceding) return. Failing to link the acknowledgment leads to rejection as an invalid return.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <strong className="text-purple-700 block font-semibold">3. Full Re-entry of All Schedules:</strong>
            <p className="text-slate-600">Because the revised return replaces the original completely, leaving any schedule blank erases your earlier declarations. All income heads, deductions, and tax credits must be completely reported.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <strong className="text-rose-700 block font-semibold">4. Mandatory E-Verification within 30 Days:</strong>
            <p className="text-slate-600">A revised return must be electronically verified using Aadhaar OTP, NetBanking, or Class 3 DSC within 30 days. Unverified returns are treated as invalid, restoring your original erroneous return!</p>
          </div>
        </div>
      </section>

      {/* Section 7: Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Required Documents Checklist for Revised Return &amp; ITR-U
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Original ITR-V Acknowledgment:</strong>
            <span>15-digit acknowledgment number and date of original return filing.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Updated AIS / TIS Statements:</strong>
            <span>Latest Annual Information Statement showing all reported interest, shares, and dividends.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Form 26AS Tax Credit Statement:</strong>
            <span>Verified TDS / TCS ledgers showing updated credits deposited by employers and clients.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Missed Deduction Receipts:</strong>
            <span>Investment proofs for 80C, medical insurance 80D, donation receipts 80G, and rent receipts for HRA.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Capital Gains Statements:</strong>
            <span>Broker P&amp;L reports, property sale/purchase deeds, and Section 54 reinvestment proofs.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Validated Bank Account Details:</strong>
            <span>Pre-validated bank account number and IFSC code for direct income tax refund crediting.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function RevisedReturnPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 139(5) Revised Return & Section 139(8A) ITR-U Desk"
      heroTitle={
        <>
          <span>Revised Return Filing Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Section 139(5) &amp; ITR-U
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Made a mistake or missed income in your filed tax return? File a Revised Return under Section 139(5) before December 31st with zero penalty, or file an Updated Return (ITR-U) under Section 139(8A) for past 2 assessment years to correct errors, claim missed deductions, and resolve AIS mismatches."
      formTitle="File Your Revised Return"
      formSubtitle="Connect with our tax experts to rectify mistakes, update omitted income, claim missed deductions, and file your revised ITR."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">revised return filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for salaried return revision, CA-assisted business/capital gains revision, or updated return (ITR-U)."
      breadcrumbCurrent="Revised Return Filing"
      guideTitle="Comprehensive Guide to Revised Return Filing (Section 139(5)) & Updated Return (ITR-U) in India - AY 2026-27"
      guideContent={<RevisedReturnGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about revised returns, Section 139(5) rules, December 31st deadline, Updated Return (ITR-U), and claiming missed deductions."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
