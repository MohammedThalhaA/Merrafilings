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
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Accurate E-Filing with Chartered Accountant Verification" },
  { icon: <Clock className="w-4 h-4" />, text: "Fastest Refund Processing with Automated Bank Pre-Validation" },
  { icon: <Calculator className="w-4 h-4" />, text: "Maximum Tax Optimization: Old vs. New Tax Regime Auto-Comparison" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Complete Reconciliation of Form 26AS, AIS (Annual Information) & TIS" },
  { icon: <Award className="w-4 h-4" />, text: "Free Year-Round Notice Handling & Dedicated Senior Tax Advisory" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ITR-1 (Sahaj) Assisted Filing",
    shortDesc: "End-to-end filing for salaried individuals, pensioners, and single house property owners.",
    expandedDesc: "Complete preparation and filing of Form ITR-1 (Sahaj) by expert accountants. Covers salary income, pension, single house property, bank interest, and exempt agricultural income up to ₹5,000. Includes Form 16 review, 26AS & AIS reconciliation, deduction claims under Section 80C to 80U, and instant e-verification assistance.",
    price: "₹2,899",
    priceSub: "Per Assessment Year / All Inclusive",
    badge: "Salaried Standard",
    features: [
      "Filing of Form ITR-1 (Sahaj) by Tax Accountants",
      "Salary, Pension & Single House Property Income",
      "Form 16 & Form 26AS Full Cross-Reconciliation",
      "AIS / TIS Financial Data Verification",
      "Maximizing Chapter VI-A Deductions (80C, 80D, etc.)",
      "Old vs. New Tax Regime Benefit Evaluation",
      "Instant Electronic Return Verification (Aadhaar OTP / EVC)",
      "Official ITR-V Acknowledgment Receipt Delivery",
    ],
  },
  {
    name: "CA-Assisted Capital Gains & Multi-Source ITR",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Comprehensive filing for capital gains, shares/mutual funds, multiple properties, and directors.",
    expandedDesc: "Handled personally by a qualified Chartered Accountant. Designed for individuals and HUFs filing ITR-2 or ITR-3 with capital gains from equity shares, mutual funds, F&O derivatives, cryptocurrency (VDA), sale of real estate, foreign assets, ESOPs, directorships in companies, or multiple rental properties.",
    price: "₹12,899",
    priceSub: "Per Assessment Year / CA Certified",
    features: [
      "Everything in the ITR-1 Package",
      "Qualified Chartered Accountant (CA) Managed Filing",
      "Form ITR-2 or ITR-3 Preparation & Verification",
      "Capital Gains from Stocks, Mutual Funds & Real Estate",
      "Cryptocurrency & Virtual Digital Asset (VDA) Reporting",
      "ESOPs, RSUs & Foreign Asset Reporting (Schedule FA)",
      "Multiple House Properties & Interest Optimization",
      "Directorship Disclosures & Unlisted Shares Filing",
      "Set-off & Carry Forward of Capital / Trading Losses",
    ],
  },
  {
    name: "CA-Managed Annual Tax Compliance Suite",
    shortDesc: "360-degree year-round tax management, advance tax computation, and notice handling.",
    expandedDesc: "A premium annual tax management program for high-net-worth individuals, executives, and active investors. Includes proactive quarterly advance tax computation, comprehensive tax planning for the upcoming fiscal year, quarterly TDS reconciliation, priority notice defense under Section 143(1)/139(9), and on-demand CA consultation throughout the year.",
    price: "₹19,899",
    priceSub: "Annual Retainer / Priority Dedicated CA",
    badge: "HNW Suite",
    features: [
      "Dedicated Senior Chartered Accountant (CA) Assigned",
      "Complete ITR Filing (Any Applicable Form ITR-1 to ITR-4)",
      "Quarterly Advance Tax Estimation & Payment Schedules",
      "Year-Round Tax Saving & Restructuring Advisory",
      "End-to-End Handling of Income Tax Department Notices",
      "Filing Revised (Section 139(5)) or Updated Returns (ITR-U)",
      "Continuous Tracking of Inward Tax Refunds & ECS Credits",
      "Direct Phone & WhatsApp Line with Senior Tax Partner",
    ],
  },
];

const ELIGIBILITY_CRITERIA = [
  {
    category: "Individuals Below 60 Years",
    criteria: "Annual gross total income exceeds ₹2.5 Lakhs (Old Regime) or ₹3.0 Lakhs (New Regime)",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    category: "Senior Citizens (60–80 Years)",
    criteria: "Annual gross income exceeds ₹3.0 Lakhs under the Old Tax Regime",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    category: "Super Senior Citizens (Above 80 Years)",
    criteria: "Annual gross income exceeds ₹5.0 Lakhs under the Old Tax Regime",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    category: "Companies, Firms & LLPs",
    criteria: "Compulsory filing regardless of profit, zero income, or financial loss",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    category: "Non-Resident Indians (NRIs)",
    criteria: "Total income accrued, deemed to accrue, or received in India exceeds ₹2.5L / ₹3L",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    category: "Freelancers & Self-Employed",
    criteria: "Income from proprietary business or professional practice exceeds basic exemption threshold",
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
];

const ITR_FORMS = [
  {
    form: "ITR-1 (Sahaj)",
    who: "Resident Individuals with income up to ₹50 Lakhs",
    incomeSources: "Salary, pension, one house property, and other sources (interest, dividends). Agricultural income up to ₹5,000.",
    exclusions: "Business income, capital gains, foreign assets, multiple house properties, or company directorship.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    form: "ITR-2",
    who: "Individuals & HUFs not having business/professional income",
    incomeSources: "Capital gains (shares, mutual funds, real estate), multiple house properties, foreign income/assets, directorships in companies.",
    exclusions: "Income under the head 'Profits and Gains of Business or Profession' (PGBP).",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    form: "ITR-3",
    who: "Individuals & HUFs having business or professional income",
    incomeSources: "Proprietorship business, professional practice (doctors, lawyers, consultants), partners in firms, intraday/F&O trading.",
    exclusions: "Eligible for all sources including salary, capital gains, and multiple properties.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    form: "ITR-4 (Sugam)",
    who: "Resident Individuals, HUFs & Firms (non-LLP) under Presumptive Tax",
    incomeSources: "Presumptive business income under Section 44AD/44AE or professional receipts under Section 44ADA up to ₹50 Lakhs / ₹2-3 Crores.",
    exclusions: "LLPs, capital gains, foreign assets, or turnover exceeding statutory presumptive caps.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const TAX_BENEFITS = [
  {
    title: "Official Proof of Financial Solvency",
    desc: "Filed ITR acknowledgments serve as the primary legal evidence of regular income, indispensable for securing home loans, business financing, commercial vehicle leases, and high-limit credit cards.",
    icon: Award,
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Smooth International Visa Clearances",
    desc: "Embassies of the US, UK, Schengen countries, Canada, and Australia mandate 3 years of verified ITR receipts to assess travel ties and financial stability before approving visitor or business visas.",
    icon: Globe2,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Claiming Excess TDS & TCS Refunds",
    desc: "If excess tax was deducted at source by employers, banks on FD interest, or property purchasers, e-filing your return is the only statutory mechanism to claim a direct bank refund with interest.",
    icon: Coins,
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Carry Forward of Capital & Business Losses",
    desc: "Incurred losses in equity markets, F&O derivatives, or business operations can be carried forward for up to 8 assessment years to offset future taxable profits—only if filed before the July 31 due date.",
    icon: TrendingUp,
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
  {
    title: "Avoid Penalties, Fines & Interest Outflows",
    desc: "Late filing attracts statutory fees under Section 234F up to ₹5,000, along with mandatory monthly 1% penal interest under Section 234A on any outstanding unpaid tax liability.",
    icon: AlertTriangle,
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "High-Value Insurance Coverage Approval",
    desc: "Life insurance companies require 3 consecutive years of ITRs demonstrating steady income before issuing term insurance policies with sum assured exceeding ₹50 Lakhs to ₹1 Crore.",
    icon: ShieldCheck,
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Secure Document Collection & Financial Ingestion",
    desc: "Upload your Form 16, salary slips, bank statements, and trading summaries. Our portal connects directly to Income Tax e-filing systems to extract 26AS, AIS, and TIS records.",
  },
  {
    step: "02",
    title: "Income Aggregation & Schedule Mapping",
    desc: "Tax experts classify your earnings across the five statutory heads: Salaries, House Property, Capital Gains, Business/Profession, and Other Sources.",
  },
  {
    step: "03",
    title: "Regime Optimization: Old vs. New Tax Slabs",
    desc: "We run a dual-computation model comparing tax liability under Section 115BAC (New Regime) versus the Old Regime to choose the option yielding the highest tax savings.",
  },
  {
    step: "04",
    title: "Review of Draft Tax Computation Sheet",
    desc: "You receive a clear summary of total gross income, allowed deductions, net taxable income, advance tax/TDS adjusted, and exact refund or balance tax payable.",
  },
  {
    step: "05",
    title: "Electronic Submission to Income Tax Portal",
    desc: "Upon your approval, your tax return is lodged with the Centralized Processing Centre (CPC), Bengaluru via direct API integration.",
  },
  {
    step: "06",
    title: "Instant E-Verification & ITR-V Acknowledgment",
    desc: "We guide you through instant verification using Aadhaar OTP, NetBanking, or Demat EVC, securing the official government ITR-V receipt immediately.",
  },
];

const DEDUCTIONS_LIST = [
  { section: "Section 80C", purpose: "PPF, EPF, ELSS, Life Insurance Premium, Principal Repayment of Home Loan, NSC, SSY, Tuition Fees", limit: "₹1,50,000" },
  { section: "Section 80D", purpose: "Medical Health Insurance Premiums for self, family (₹25k) and senior citizen parents (up to ₹50k)", limit: "₹25,000 to ₹1,00,000" },
  { section: "Section 80CCD(1B)", purpose: "Additional contribution to National Pension Scheme (NPS) beyond 80C limit", limit: "₹50,000" },
  { section: "Section 24(b)", purpose: "Interest paid on housing loan for self-occupied property", limit: "₹2,00,000" },
  { section: "Section 80E", purpose: "Interest paid on higher education loan for self, spouse, or children (available for 8 consecutive years)", limit: "No Upper Ceiling" },
  { section: "Section 80G", purpose: "Donations to eligible charitable institutions, Prime Minister Relief Fund, and notified funds", limit: "50% or 100% of Donation" },
  { section: "Section 80TTA / 80TTB", purpose: "Savings bank interest deduction (80TTA: ₹10k for non-seniors; 80TTB: ₹50k on all deposits for senior citizens)", limit: "₹10,000 / ₹50,000" },
  { section: "Standard Deduction", purpose: "Flat statutory deduction for all salaried employees and pensioners under both regimes", limit: "₹75,000 (New) / ₹50,000 (Old)" },
];

const FAQ_COL_1 = [
  {
    q: "What does e-Filing an Income Tax Return (ITR) mean?",
    a: "e-Filing of Income Tax Return (ITR) is the process of submitting income tax returns electronically through the Income Tax Department's official portal (incometax.gov.in). It eliminates paperwork and offline queues. It is mandatory for all individuals whose taxable income exceeds exemption thresholds. An Income Tax Return details your gross income across all heads, deductions claimed, and taxes paid for the financial year (April 1 to March 31).",
  },
  {
    q: "If my employer has already deducted TDS, do I still need to file an Income Tax Return?",
    a: "Yes. TDS deduction by your employer and filing an Income Tax Return are two completely distinct legal obligations under the Income Tax Act, 1961. TDS is merely an advance deposit of tax on your salary. You must still file an ITR to declare your total worldwide income, account for other income sources (like interest or capital gains), claim eligible deductions under Chapter VI-A, and receive any excess tax refund.",
  },
  {
    q: "What is the difference between the New Tax Regime and the Old Tax Regime?",
    a: "The New Tax Regime (Section 115BAC) is the default regime for FY 2025-26 (AY 2026-27), offering lower concessional tax slab rates and a standard deduction of ₹75,000 for salaried employees, but with no deductions under Chapter VI-A (Section 80C, 80D, HRA, etc.). The Old Tax Regime allows higher slab rates but permits claiming deductions like Section 80C (up to ₹1.5L), health insurance under 80D, home loan interest under Section 24(b), and HRA exemptions. Merrafilings calculates both regimes automatically to select the lowest tax liability for you.",
  },
  {
    q: "What is a Nil ITR, and why should I file one if my income is below taxable limits?",
    a: "A Nil ITR is filed when your total taxable income is below the basic exemption threshold (₹2.5 Lakhs in the Old Regime or ₹3 Lakhs in the New Regime) and no tax is payable. Filing a Nil ITR is essential to claim back any TDS deducted on bank interest, maintain a clean continuous financial record for passport/visa applications, secure bank home loans, and carry forward any trading or business losses.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the deadline for filing individual Income Tax Returns in India?",
    a: "For salaried individuals, freelancers, and businesses not subject to a tax audit, the mandatory deadline is July 31 of the Assessment Year. For taxpayers whose accounts are subject to audit under Section 44AB, the deadline is October 31. Belated returns for FY 2025-26 can be filed up to December 31, 2026 with applicable late fees under Section 234F.",
  },
  {
    q: "What happens if I miss the ITR filing deadline of July 31?",
    a: "Missing the July 31 deadline attracts late filing fees under Section 234F: ₹1,000 if your total income is up to ₹5 Lakhs, and ₹5,000 if income exceeds ₹5 Lakhs. Additionally, interest at 1% per month is charged under Section 234A on any unpaid tax balance, and you permanently lose the right to carry forward capital or business losses.",
  },
  {
    q: "Can I file an Income Tax Return without Form 16?",
    a: "Yes, you can file your ITR without Form 16. Our Chartered Accountants compute your salary income using your monthly payslips, bank statements, and tax credit details downloaded directly from Form 26AS and the Annual Information Statement (AIS) on the income tax portal.",
  },
  {
    q: "How long does it take to receive the income tax refund in my bank account?",
    a: "Once your ITR is electronically filed and e-verified, the CPC typically processes the return within 10 to 30 business days. The refund amount is credited directly to your pre-validated, Aadhaar-linked bank account via RBI ECS transfer.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Can I use ITR-1 if I have income from agriculture that is tax-exempt?",
    a: "Yes, you can use Form ITR-1 (Sahaj) if your net agricultural income does not exceed ₹5,000 in the financial year. If your agricultural earnings exceed ₹5,000, you are legally disqualified from using ITR-1 and must file Form ITR-2.",
  },
  {
    q: "What is the Seventh Proviso to Section 139(1) for mandatory tax filing?",
    a: "Even if your gross income is below the taxable threshold, you must mandatorily file an ITR if you: (1) Deposited over ₹1 Crore in one or more current accounts; (2) Incurred travel expenditure exceeding ₹2 Lakhs on foreign travel for yourself or anyone else; (3) Paid electricity bills exceeding ₹1 Lakh in the year; (4) Have total business sales exceeding ₹60 Lakhs or professional receipts exceeding ₹10 Lakhs; or (5) Had TDS/TCS of ₹25,000 or more (₹50,000 for senior citizens).",
  },
  {
    q: "What is an Updated Return (ITR-U), and can I correct past unfiled returns?",
    a: "Under Section 139(8A), taxpayers who missed filing their return or made errors in previous returns can file an Updated Return (ITR-U) within 24 months (2 years) from the end of the relevant assessment year by paying the applicable additional tax (25% to 50% extra tax), provided no search or seizure proceedings are underway.",
  },
  {
    q: "What is the difference between Assessment Year (AY) and Financial Year (FY)?",
    a: "Financial Year (FY) is the 12-month period in which you earn your income (e.g., April 1, 2025 to March 31, 2026 is FY 2025-26). Assessment Year (AY) is the immediately succeeding year in which that income is evaluated, reported, and taxed (e.g., April 1, 2026 to March 31, 2027 is AY 2026-27).",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How do I e-verify my Income Tax Return after submission?",
    a: "You can e-verify your return instantly using: (1) Aadhaar OTP sent to your registered mobile number; (2) Net banking login through your bank account; (3) Electronic Verification Code (EVC) via bank account or demat account; or (4) Digital Signature Certificate (DSC). E-verification must be completed within 30 days of submission.",
  },
  {
    q: "What is Form 26AS and how is it different from the Annual Information Statement (AIS)?",
    a: "Form 26AS reflects taxes deducted at source (TDS), tax collected at source (TCS), advance tax paid, and self-assessment tax. AIS (Annual Information Statement) is a far more comprehensive statement showing all financial transactions recorded by the IT Department, including share trading, mutual fund dividends, property transactions, foreign remittances, and savings interest.",
  },
  {
    q: "Can I revise my Income Tax Return if I discover an error after filing?",
    a: "Yes. Under Section 139(5), you can file a Revised Return at any time before three months prior to the end of the relevant Assessment Year (i.e., on or before December 31, 2026 for AY 2026-27), or before completion of assessment, whichever is earlier. There is no penalty for revising a return.",
  },
  {
    q: "How does Merrafilings help in maximizing my income tax refund?",
    a: "Our Chartered Accountants conduct an in-depth audit of your Form 16, AIS, and bank statements. We compare tax liabilities under both the New and Old Tax Regimes, claim all eligible deductions (HRA, 80C, 80D, 80G, home loan interest, NPS), ensure 100% TDS credit reconciliation, and ensure prompt bank pre-validation for swift direct credit.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Business ITR Filing Online in India",
    href: "/business-itr-filing",
  },
  {
    title: "ITR-5 Form for Partnerships & LLPs",
    href: "/itr-5-form",
  },
  {
    title: "Understanding GST Return Filings",
    href: "/llp-registration/understand-gst-return-filings-a-comprehensive-guide",
  },
  {
    title: "Step-by-Step LLP Registration Guide",
    href: "/llp-registration/llp-registration-guide-comprehensive-steps",
  },
];

const RELATED_SERVICES_TAGS = [
  "ITR-1 Filing",
  "Capital Gains Tax",
  "Business ITR Filing",
  "ITR-5 Form",
  "TDS Return Filing",
  "TAN Registration",
  "Form 15CA 15CB",
  "Income Tax Notice Defense",
];

const POPULAR_SEARCHES_TAGS = [
  "income tax filing online india",
  "itr efiling 2026-27",
  "new tax regime vs old tax regime",
  "itr 1 eligibility criteria",
  "itr 2 capital gains stock trading",
  "income tax refund tracking cpc",
  "section 80c tax deductions",
  "belated return penalty section 234f",
];

function IncomeTaxFilingGuideContent() {
  return (
    <div className="space-y-12 text-slate-800">
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Income Tax E-Filing in India for FY 2025-26 (AY 2026-27)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          E-Filing your <strong className="font-semibold text-slate-950">Income Tax Return (ITR)</strong> is the statutory process of submitting your annual earnings, deductions, and tax computations to the Income Tax Department of India under the Income Tax Act, 1961. Operating on a self-assessment basis through the centralized e-filing portal (incometax.gov.in), every eligible taxpayer must file an annual return to establish legal compliance, prevent penalties, claim excess tax refunds, and maintain an official financial track record.
        </p>
      </section>

      {/* Section 2: Eligibility Criteria (6 Color-Matched Cards) */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who is Eligible and Required to File Income Tax Returns?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {ELIGIBILITY_CRITERIA.map((item, idx) => (
            <div
              key={idx}
              className={`group p-5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${item.cardHover} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${item.iconBox}`}>
                  <Users className="w-5 h-5" />
                </div>
                <h3 className={`text-base font-semibold text-slate-900 transition-colors ${item.titleHover}`}>
                  {item.category}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.criteria}
              </p>
            </div>
          ))}
        </div>

        {/* Seventh Proviso Mandatory Filing Box */}
        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/90 mt-4">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Mandatory Filing Criteria (Seventh Proviso to Section 139(1))
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 mb-3 leading-relaxed">
                Even if your total income is below the basic exemption limit, filing an ITR is legally mandatory under Indian tax laws if you meet any of the following triggers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Bank Deposits:</strong> Deposited &gt; ₹1 Crore in current accounts or &gt; ₹50 Lakhs in savings accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Foreign Travel:</strong> Incurred travel expenditure exceeding ₹2 Lakhs for self or others</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Electricity Bills:</strong> Paid aggregate electricity bills exceeding ₹1 Lakh during the year</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>TDS / TCS Credit:</strong> Total tax deducted or collected at source exceeds ₹25,000 (₹50,000 for seniors)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Business / Profession:</strong> Business turnover &gt; ₹60 Lakhs or professional receipts &gt; ₹10 Lakhs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Foreign Assets:</strong> Holds beneficial interest, foreign securities, or signing authority abroad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Strategic Benefits (6 Color-Matched Cards) */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Crucial Strategic Benefits of Timely ITR E-Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TAX_BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group p-5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${item.cardHover} hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${item.iconBox}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-base font-semibold text-slate-900 transition-colors ${item.titleHover}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Guide to Selecting ITR Forms */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Complete ITR Forms Guide (ITR-1 through ITR-4)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
          {ITR_FORMS.map((form, idx) => (
            <div
              key={idx}
              className={`group p-5.5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${form.cardHover} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${form.iconBox}`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold text-slate-900 transition-colors ${form.titleHover}`}>
                    {form.form}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">{form.who}</span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-[13px] text-slate-600 pt-2 border-t border-slate-100">
                <p>
                  <strong className="text-slate-800 font-semibold">Sources Covered:</strong> {form.incomeSources}
                </p>
                <p className="text-rose-600">
                  <strong className="text-rose-700 font-semibold">Exclusions:</strong> {form.exclusions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Income Tax Slabs Comparison */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Income Tax Slabs &amp; Rates for FY 2025-26 (AY 2026-27)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The New Tax Regime under Section 115BAC continues as the default framework with lower slab rates and a standard deduction of ₹75,000 for salaried employees. Taxpayers earning up to ₹7.75 Lakhs pay zero net income tax after rebate under Section 87A.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Income Slabs</th>
                  <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">New Regime (Default - Sec 115BAC)</th>
                  <th className="py-3 px-4">Old Tax Regime (With Deductions)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Up to ₹3,00,000</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold bg-emerald-50/20">NIL</td>
                  <td className="py-3 px-4">NIL (Up to ₹2,50,000)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">₹3,00,001 to ₹6,00,000</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold bg-emerald-50/20">5% (Full 87A Rebate)</td>
                  <td className="py-3 px-4">5% (₹2.5L to ₹5.0L)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">₹6,00,001 to ₹9,00,000</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold bg-emerald-50/20">10% (Rebate up to ₹7.75L)</td>
                  <td className="py-3 px-4">20% (₹5.0L to ₹10.0L)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">₹9,00,001 to ₹12,00,000</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold bg-emerald-50/20">15%</td>
                  <td className="py-3 px-4">20% (₹5.0L to ₹10.0L)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">₹12,00,001 to ₹15,00,000</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold bg-emerald-50/20">20%</td>
                  <td className="py-3 px-4">30% (Above ₹10,00,000)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Above ₹15,00,000</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold bg-emerald-50/20">30%</td>
                  <td className="py-3 px-4">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: Key Deductions Guide */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Key Income Tax Deductions Guide (Old Tax Regime)
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Section</th>
                  <th className="py-3 px-4">Eligible Investments &amp; Expenditures</th>
                  <th className="py-3 px-4">Maximum Statutory Ceiling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {DEDUCTIONS_LIST.map((ded, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{ded.section}</td>
                    <td className="py-3.5 px-4">{ded.purpose}</td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-700">{ded.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: Penalties and Deadlines */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Statutory Due Dates &amp; Late Filing Penalty Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Due dates */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-bold text-slate-900 text-sm">
              Official Filing Deadlines (AY 2026-27)
            </div>
            <div className="p-4 space-y-3 text-xs sm:text-[13px] text-slate-700">
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Non-Audit Individual / HUF:</span>
                <strong className="text-blue-700 font-semibold">31st July 2026</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Tax Audit Cases (Sec 44AB):</span>
                <strong className="text-purple-700 font-semibold">31st October 2026</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Transfer Pricing Cases (Form 3CEB):</span>
                <strong className="text-amber-700 font-semibold">30th November 2026</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Belated &amp; Revised Returns:</span>
                <strong className="text-slate-900 font-semibold">31st December 2026</strong>
              </div>
              <div className="flex justify-between">
                <span>Updated Return (ITR-U):</span>
                <strong className="text-emerald-700 font-semibold">Within 24 Months</strong>
              </div>
            </div>
          </div>

          {/* Penalties */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/30 overflow-hidden shadow-2xs">
            <div className="bg-rose-100/60 px-4 py-3 border-b border-rose-200 font-bold text-slate-900 text-sm">
              Penalties for Late Filing &amp; Defaults
            </div>
            <div className="p-4 space-y-3 text-xs sm:text-[13px] text-slate-700">
              <div className="flex justify-between pb-2 border-b border-rose-100">
                <span>Section 234F Late Fee (&gt; ₹5L Income):</span>
                <strong className="text-rose-700 font-semibold">₹5,000</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-rose-100">
                <span>Section 234F Late Fee (&le; ₹5L Income):</span>
                <strong className="text-rose-700 font-semibold">₹1,000</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-rose-100">
                <span>Section 234A Penal Interest:</span>
                <strong className="text-rose-700 font-semibold">1% per month on unpaid tax</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-rose-100">
                <span>Carry Forward of Losses:</span>
                <strong className="text-rose-700 font-semibold">Forfeited if filed late</strong>
              </div>
              <div className="flex justify-between">
                <span>Section 276CC Prosecution:</span>
                <strong className="text-rose-700 font-semibold">3 Months to 7 Years</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Step-by-Step E-Filing Process */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Step-by-Step Assisted E-Filing Workflow at Merrafilings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-bold">
                  {step.step}
                </span>
                <span>Milestone {step.step}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function IncomeTaxFilingPage() {
  return (
    <ServicePageTemplate
      badgeText="FY 2025-26 & AY 2026-27 CBDT Compliant E-Filing"
      heroTitle={
        <>
          <span>File Your </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Income Tax Return Online
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="File your ITR online for FY 2025-26 (AY 2026-27) with certified tax professionals. Fast-track refund processing, dual-regime comparison (New vs. Old Slabs), 100% AIS reconciliation, and dedicated notice defense."
      formTitle="Income Tax E-Filing Helpdesk"
      formSubtitle="Connect with our certified tax accountants for dual-regime comparison, instant Form 16 verification, and fastest refund processing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">expert tax filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for assisted salaried ITR-1 filing, CA-managed capital gains ITR-2/3, or full annual tax compliance."
      breadcrumbCurrent="Income Tax Filing"
      guideTitle="Comprehensive Guide to Income Tax Return (ITR) E-Filing in India - AY 2026-27"
      guideContent={<IncomeTaxFilingGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about salaried ITR, Form 16, New vs. Old Tax Regimes, July 31 deadlines, and tax refunds."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
