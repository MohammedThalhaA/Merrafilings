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
  Factory,
  KeyRound,
  FileSpreadsheet,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Building2 className="w-4 h-4" />, text: "Specialized Corporate ITR-6 Filing for Pvt Ltd, Public Ltd & OPCs" },
  { icon: <Calculator className="w-4 h-4" />, text: "Section 115BAA Concessional Tax (22%) vs. Normal Corporate Tax Advisory" },
  { icon: <Scale className="w-4 h-4" />, text: "Minimum Alternate Tax (MAT Section 115JB) & Schedule MATC Optimization" },
  { icon: <FileSpreadsheet className="w-4 h-4" />, text: "Part A-BS (Balance Sheet) & Part A-P&L Schedule III Financial Statement Integration" },
  { icon: <KeyRound className="w-4 h-4" />, text: "Mandatory Class 3 Digital Signature Certificate (DSC) E-Filing & Verification" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ITR-6 Assisted Tax Filing (Non-Audit)",
    shortDesc: "End-to-end corporate return preparation and e-filing for private companies not subject to tax audit.",
    expandedDesc: "Complete corporate income tax filing for Private Limited Companies and One Person Companies (OPC) with turnover below statutory audit limits. Our senior tax accountants thoroughly review your MCA-compliant financial statements, extract Part A-BS (Balance Sheet) and Part A-P&L items, reconcile customer TDS/TCS with Form 26AS/AIS, verify MAT liability under Section 115JB, and generate validated JSON for electronic submission on the Income Tax portal.",
    price: "₹9,899",
    priceSub: "Per Assessment Year / Non-Audit Returns",
    badge: "Essential Corporate Compliance",
    features: [
      "Preparation & Submission of Form ITR-6 for AY 2026-27",
      "Schedule III Balance Sheet & Profit & Loss Compilation",
      "Section 115BAA (22% Concessional) Eligibility & Form 10-IC Filing",
      "Minimum Alternate Tax (MAT) Calculation under Section 115JB",
      "Form 26AS, AIS & TIS Corporate Tax Credit Reconciliation",
      "Tax Depreciation Calculation under Section 32 (Schedule DPM/DOA)",
      "Carry Forward of Business & Unabsorbed Depreciation (Schedule CFL)",
      "Official ITR-V Acknowledgment & Class 3 DSC Verification Support",
    ],
  },
  {
    name: "ITR-6 CA-Assisted Tax Compliance",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Personally handled by a qualified corporate Chartered Accountant with advanced tax optimization.",
    expandedDesc: "Our premier corporate tax solution where a senior practicing Chartered Accountant personally handles your company's complete return filing lifecycle. Includes comprehensive Section 44AB tax audit report (Form 3CA-3CD) synchronization, intricate Schedule BP business adjustments, Schedule CG capital gains segregation, Schedule MATC tax credit utilization, foreign assets disclosure (Schedule FA), and aggressive yet compliant corporate tax planning.",
    price: "₹12,899",
    priceSub: "Per Assessment Year / CA Certified",
    features: [
      "Everything in the Assisted Tax Filing Package",
      "Personally Handled & Certified by Senior Chartered Accountant (CA)",
      "Tax Audit Report (Form 3CA-3CD) Data Integration & Filing Sync",
      "Intricate Schedule BP Corporate Business Adjustments",
      "Capital Gains Segregation (Schedule CG) & Indexation Benefits",
      "MAT Credit Entitlement & Utilization Schedules (Schedule MATC)",
      "GST vs. Income Tax Turnover Cross-Reconciliation Analysis",
      "Foreign Assets & Cross-Border Transaction Reporting (Schedule FA & FSI)",
      "Class 3 Digital Signature (DSC) Portal Registration & Affixing",
    ],
  },
  {
    name: "ITR-6 CA Managed Corporate Suite",
    shortDesc: "Annual retainer covering corporate tax planning, advance tax, transfer pricing, and notice defense.",
    expandedDesc: "Tailored for growing enterprises, manufacturing companies, and funded tech startups requiring continuous tax advisory and audit defense. Includes dedicated CA support across the financial year, quarterly advance tax estimation, transfer pricing reporting (Form 3CEB) where applicable, corporate restructuring guidance, TDS return synchronization, and complete representation for Section 143(1) intimations and Section 142(1) scrutiny inquiries.",
    price: "₹19,899",
    priceSub: "Annual Corporate Retainer / Full Lifecycle",
    badge: "Complete Corporate Suite",
    features: [
      "Dedicated Senior Partner Chartered Accountant (CA) Assigned",
      "Complete Section 44AB Corporate Tax Audit Verification",
      "Transfer Pricing Certification (Form 3CEB) Support (if applicable)",
      "Quarterly Corporate Advance Tax Estimation & Challan Generation",
      "Quarterly TDS Withholding Review & Form 26Q/27Q Reconciliation",
      "Pre-Filing Corporate Board Tax Advisory Consultation",
      "End-to-End Handling of Scrutiny Notices & Section 143(1) Intimations",
      "M&A, Demerger & Corporate Capital Restructuring Tax Guidance",
      "Direct Priority Phone & WhatsApp Line with Corporate Tax Desk",
    ],
  },
];

const ELIGIBLE_COMPANIES = [
  {
    title: "Private Limited Companies",
    desc: "Companies registered under the Companies Act, 2013. Mandatory annual filing of ITR-6 irrespective of whether the company made a profit, suffered a loss, or remained dormant.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Public Limited Companies",
    desc: "Listed and unlisted public companies operating in India. Must report detailed shareholding patterns, debentures, reserves, and full Schedule III financial statements.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "One Person Companies (OPC)",
    desc: "Single-member corporate entities incorporated under Section 2(62) of the Companies Act. Treated as full corporate entities subject to standard corporate tax rates and ITR-6.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Foreign Companies in India",
    desc: "Non-resident corporate bodies having a branch office, project office, liaison office, or permanent establishment (PE) earning taxable business income in India.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Section 8 Companies (Without Sec 11)",
    desc: "Non-profit licensed companies that have NOT applied for or claimed exemption under Section 11 of the Income Tax Act must file their annual tax declaration in Form ITR-6.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Dormant & Inactive Companies",
    desc: "Even if a company has zero revenue, no commercial transactions, or dormant status under Section 455 of the Companies Act, filing a nil ITR-6 return remains strictly compulsory.",
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
];

const ITR6_SCHEDULES = [
  {
    code: "Part A-GEN",
    title: "General Information & Corporate Identity",
    desc: "CIN number, PAN, date of incorporation, nature of business activities, shareholding pattern (domestic & foreign), holding/subsidiary relationships, and DIN of directors.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    code: "Part A-BS",
    title: "Schedule III Balance Sheet Compilation",
    desc: "Itemized disclosure of equity share capital, reserves & surplus, long-term borrowings, deferred tax liabilities, trade payables, fixed assets, non-current investments, and bank balances.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    code: "Part A-P&L",
    title: "Profit and Loss Account Schedules",
    desc: "Revenue from operations, export earnings, other operating income, cost of materials consumed, employee benefit expenses, finance costs, depreciation, and net corporate profit.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    code: "Schedule BP",
    title: "Computation of Income from Business / Profession",
    desc: "Statutory tax adjustments adding back non-deductible expenses (Section 40(a), 43B disallowances, excessive depreciation) and deducting tax-exempt incomes and statutory allowances.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    code: "Schedule MAT & MATC",
    title: "Minimum Alternate Tax & Tax Credit",
    desc: "Computation of book profits under Section 115JB at 15%. Verification of tax payable under normal provisions vs. MAT, and carry forward/set-off of accumulated MAT credits for 15 years.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    code: "Schedule FA & FSI",
    title: "Foreign Assets & Income from Outside India",
    desc: "Mandatory reporting of foreign bank accounts, financial interests in foreign entities, immovable properties outside India, foreign trusts, and capital investments held overseas.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FILING_STEPS = [
  {
    step: "Step 01",
    title: "Document Collation & Book Closure",
    desc: "Finalize financial accounts under Companies Act 2013, generate trial balance, reconcile GST turnover with sales ledgers, and download Form 26AS, AIS, and TIS statements.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 02",
    title: "Section 44AB Audit & Tax Computation",
    desc: "Complete statutory corporate tax audit (Form 3CA-3CD) if turnover exceeds threshold. Compute tax under normal corporate rates vs. Section 115BAA concessional regime vs. MAT Section 115JB.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 03",
    title: "ITR-6 Offline Utility Preparation",
    desc: "Download official CBDT ITR-6 Schema/Utility for AY 2026-27. Input Part A general data, balance sheet figures, P&L schedules, business adjustments, and validate zero schema errors.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 04",
    title: "Self-Assessment Tax & Challan Payment",
    desc: "Calculate balance self-assessment tax after adjusting advance tax, TDS, and TCS credits. Generate e-Pay Tax challan on the e-filing portal and complete payment via net banking or UPI.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 05",
    title: "Portal Upload & Class 3 DSC Verification",
    desc: "Upload validated JSON return on incometax.gov.in. Authenticate electronically using the registered Class 3 Digital Signature Certificate (DSC) of the Director or Managing Director.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "ITR-V Acknowledgment & Loss Lock-In",
    desc: "Obtain official 15-digit e-filing acknowledgment receipt (ITR-V). Verify that business losses, unabsorbed depreciation, and capital losses are legally locked in for 8 years carry forward.",
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
];

const COMMON_MISTAKES = [
  {
    title: "Selecting Wrong Corporate Tax Regime",
    desc: "Failing to evaluate the effective tax liability between Section 115BAA (22% flat without deductions/MAT) and normal corporate rates (25%/30% with accelerated depreciation and MAT credit).",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Inconsistent Balance Sheet vs. MCA Filings",
    desc: "Submitting financial figures in Part A-BS and Part A-P&L of ITR-6 that conflict with figures filed in Form AOC-4 with the Registrar of Companies (ROC), triggering automatic scrutiny flags.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Omission of Schedule FA (Foreign Assets)",
    desc: "Failure to disclose overseas bank accounts, offshore subsidiaries, or shares held in foreign companies attracts severe penalties up to ₹10 Lakhs under the Black Money Act.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Attempting EVC Instead of Mandatory DSC",
    desc: "Companies cannot verify ITR-6 through Aadhaar OTP, bank EVC, or net banking. Filing is legally incomplete and void ab initio unless signed with a valid Class 3 DSC of an authorized director.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Delayed Filing Forfeiting Business Losses",
    desc: "Under Section 139(3), business losses (excluding unabsorbed depreciation) cannot be carried forward to subsequent years if the ITR-6 return is submitted after the statutory due date.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Neglecting Section 43B(h) MSME Payment Rules",
    desc: "Failing to pay micro and small enterprise suppliers within statutory limits (15/45 days) results in mandatory disallowance of expenditure, artificially inflating corporate tax liability.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is ITR 6?",
    a: "ITR 6 is the specialized Income Tax Return form prescribed by the Central Board of Direct Taxes (CBDT) exclusively for companies registered under the Companies Act, 2013 or Companies Act, 1956. This includes Private Limited, Public Limited, One Person Companies (OPC), and foreign corporations. Companies claiming exemption under Section 11 (charitable or religious trusts) are excluded and must file Form ITR-7.",
  },
  {
    q: "Who needs to file ITR 6 online in India?",
    a: "All domestic companies (Private Limited, Public Limited, One Person Companies, Section 8 companies not claiming Section 11 exemption) and foreign companies operating in India must file Form ITR-6. The filing is strictly mandatory for every incorporated company regardless of whether it carried out active commercial business, recorded a profit, incurred a loss, or remained completely dormant during the financial year.",
  },
  {
    q: "What is the corporate income tax rate for companies in India for AY 2026-27?",
    a: "For domestic companies, tax rates depend on the chosen regime: (1) Section 115BAA offers a flat concessional rate of 22% (effective 25.17% including 10% surcharge and 4% cess) with no MAT applicability; (2) Normal regime is 25% base tax for companies with total turnover up to ₹400 Crores in the preceding base financial year; (3) Standard corporate rate is 30% for companies exceeding ₹400 Crores turnover. Foreign companies are taxed at 35% base tax plus surcharge and cess.",
  },
  {
    q: "What is Minimum Alternate Tax (MAT) under Section 115JB?",
    a: "Minimum Alternate Tax (MAT) is a statutory mechanism to ensure that zero-tax companies pay a minimum tax on their book profits. Under Section 115JB, if the tax payable on total income under normal provisions is less than 15% of book profits, the book profit is deemed to be total income and taxed at 15% (plus surcharge and cess). Companies opting for the concessional Section 115BAA or 115BAB tax regimes are completely exempt from MAT.",
  },
  {
    q: "What is the due date for filing Form ITR-6?",
    a: "The standard due date for companies required to get their accounts audited under the Companies Act or Section 44AB of the Income Tax Act is October 31st of the assessment year (e.g., October 31, 2026 for FY 2025-26). If the company has entered into international or specified domestic transactions requiring transfer pricing reporting in Form 3CEB, the statutory filing deadline is extended to November 30th of the assessment year.",
  },
  {
    q: "Is Digital Signature Certificate (DSC) mandatory for filing ITR-6?",
    a: "Yes, absolutely. Unlike individual taxpayers who can authenticate returns through Aadhaar OTP or bank EVC, the Income Tax Act mandates that every company must verify Form ITR-6 electronically using a valid Class 3 Digital Signature Certificate (DSC). The DSC must belong to the Managing Director, Director, or authorized representative whose PAN is registered as the principal officer on the e-filing portal.",
  },
  {
    q: "What documents are required for filing ITR-6?",
    a: "ITR-6 is an annexure-less electronic return, meaning physical documents do not need to be uploaded. However, complete documentation is required to extract schedule details: Certificate of Incorporation, Memorandum and Articles of Association (MOA/AOA), audited Balance Sheet and P&L Account conforming to Schedule III, Tax Audit Report in Form 3CA-3CD, Form 26AS, AIS/TIS statements, GST return reconciliation, shareholding records, and Class 3 DSC.",
  },
  {
    q: "What are the consequences of filing ITR-6 after the due date?",
    a: "Late filing attracts a mandatory late fee under Section 234F of up to ₹5,000. Additionally, penal interest is charged under Section 234A at 1% per month on outstanding tax dues, alongside interest under Section 234B and 234C. Crucially, late filing completely disqualifies the company from carrying forward current-year business losses and capital losses under Section 139(3).",
  },
  {
    q: "Can a company carry forward business losses if ITR-6 is filed on time?",
    a: "Yes. Timely filing before the October 31st or November 30th due date permits companies to carry forward non-speculative business losses and capital losses for up to 8 consecutive assessment years to set off against future business profits. Unabsorbed depreciation, however, can be carried forward indefinitely even if the return is filed belatedly.",
  },
  {
    q: "Who is NOT eligible to file Form ITR-6?",
    a: "The following entities are strictly barred from filing ITR-6: (1) Individuals and Sole Proprietorships (file ITR-1 to ITR-4); (2) Hindu Undivided Families (HUFs); (3) Partnership Firms, LLPs, AOPs, and BOIs (file ITR-5); (4) Charitable or religious trusts claiming tax exemption under Section 11 (file ITR-7); (5) Local authorities and cooperative societies.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What are the key sections and schedules in Form ITR-6?",
    a: "ITR-6 is divided into Part A (General Info, Balance Sheet, Manufacturing, Trading, and P&L Accounts, Other Information Part A-OI), Part B (Computation of Total Income and Tax Liability), and over 35 supporting schedules covering Business Profits (BP), Capital Gains (CG), Minimum Alternate Tax (MAT & MATC), Deductions (VIA), Tax Credits (TDS/TCS), and Foreign Assets (FA).",
  },
  {
    q: "What should a company do if its turnover exceeds ₹1 Crore or ₹10 Crores?",
    a: "Under Section 44AB, a corporate entity must undergo a statutory tax audit by an independent practicing Chartered Accountant if total sales or turnover exceeds ₹1 Crore (or ₹10 Crores if cash receipts and cash payments do not exceed 5% of total transactions). The tax auditor must furnish Form 3CA and Form 3CD electronically at least one month before the ITR-6 filing due date (i.e., on or before September 30th).",
  },
  {
    q: "What happens if a company fails to file ITR-6 entirely?",
    a: "Non-filing triggers severe regulatory actions: best-judgment assessment under Section 144, penalties under Section 271F, prosecution under Section 276CC with rigorous imprisonment of up to 7 years for willful failure to furnish returns, disqualification of directors under the Companies Act, and potential freezing of corporate bank accounts.",
  },
  {
    q: "Can a company amend or revise its ITR-6 after initial submission?",
    a: "Yes. Under Section 139(5), if any omission or wrong statement is discovered in the original return, the company can file a Revised Return. The revised return must be submitted on or before December 31st of the relevant assessment year, or before the completion of the assessment, whichever is earlier.",
  },
  {
    q: "How does Section 115BAA differ from the regular corporate tax regime?",
    a: "Section 115BAA allows domestic companies to pay tax at a concessional rate of 22% (effective 25.17%), provided they forego specific tax deductions, exemptions (such as Section 10AA, 32(1)(iia) additional depreciation, 35AD), and cannot set off brought-forward losses attributable to such incentives. Importantly, companies choosing Section 115BAA are permanently exempt from Minimum Alternate Tax (MAT). Once exercised via Form 10-IC, the option cannot be revoked in subsequent years.",
  },
  {
    q: "What is Schedule FA in ITR-6 and is it mandatory?",
    a: "Schedule FA covers Foreign Assets. It is strictly mandatory for any Indian resident company holding assets outside India, including bank accounts, custodial accounts, equity/debt interests in foreign entities, immovable property, or signing authority in foreign accounts. Non-disclosure or misstatement in Schedule FA attracts severe penalties of ₹10 Lakhs and criminal prosecution under the Black Money (Undisclosed Foreign Income and Assets) Act, 2015.",
  },
  {
    q: "How do you e-file Form ITR-6 online step by step?",
    a: "Filing ITR-6 involves: (1) Downloading the official CBDT JSON utility or preparing data via authorized tax software; (2) Compiling Part A-BS, Part A-P&L, and all tax schedules; (3) Validating data and generating the final JSON file; (4) Logging into incometax.gov.in using the company's PAN; (5) Navigating to e-File > Income Tax Returns > File Income Tax Return; (6) Uploading the JSON file; (7) Signing with the registered Class 3 DSC of the director; and (8) Generating the ITR-V acknowledgment.",
  },
  {
    q: "Will the company receive an acknowledgment receipt after filing ITR-6?",
    a: "Yes. Upon successful electronic submission and DSC authentication, the Income Tax Department instantly generates Form ITR-V (Income Tax Return Verification / Acknowledgment) containing a unique 15-digit acknowledgment number. Because the return is signed with a Class 3 DSC, no physical paper needs to be posted to CPC Bengaluru; the filing process is 100% complete.",
  },
  {
    q: "What should a company do if it engages in international transactions?",
    a: "If the company has entered into cross-border transactions or specified domestic transactions with associated enterprises, it must comply with Transfer Pricing regulations under Section 92E. The company must obtain an independent accountant's report in Form 3CEB and file it electronically on or before October 31st. The due date for the company's ITR-6 is then November 30th of the assessment year.",
  },
  {
    q: "How can Merrafilings assist with Corporate ITR-6 filing?",
    a: "Merrafilings provides end-to-end corporate tax solutions led by senior Chartered Accountants. We handle Schedule III financial statement mapping, MAT vs. Section 115BAA tax regime modeling, tax audit (Form 3CA-3CD) synchronization, transfer pricing disclosures, Class 3 DSC portal registration, and error-free e-filing with year-round scrutiny notice support.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Is an audit under the Companies Act sufficient, or is a Tax Audit under Section 44AB also required?",
    a: "Statutory audit under the Companies Act, 2013 is mandatory for every company regardless of turnover. However, a Tax Audit under Section 44AB of the Income Tax Act is an additional separate requirement triggered if business turnover exceeds ₹1 Crore (or ₹10 Crores for digital transactions). In tax audit cases, the auditor must furnish Form 3CA-3CD prior to ITR-6 filing.",
  },
  {
    q: "How are dividends received by domestic companies taxed in ITR-6?",
    a: "Dividends received by a domestic company from another domestic or foreign company are treated as taxable income under 'Income from Other Sources' at normal corporate tax rates. However, under Section 80M, a domestic company can claim a deduction for dividends received if it distributes dividends to its own shareholders on or before the due date for filing its return.",
  },
  {
    q: "How does the MSME payment rule under Section 43B(h) affect corporate ITR-6 filing?",
    a: "Section 43B(h) disallows any sum payable to a micro or small enterprise registered under the MSMED Act if not paid within the agreed timeline (up to 45 days) or 15 days in the absence of an agreement. Unpaid sums as of March 31 are added back to taxable business profits in Schedule BP of ITR-6 and can only be deducted in the subsequent financial year when actual payment is made.",
  },
  {
    q: "What is the procedure for claiming MAT credit in subsequent years?",
    a: "When a company pays tax under MAT (Section 115JB), the excess of MAT over normal tax is credited as MAT Credit under Section 115JAA. In future years when normal tax exceeds MAT, the company can set off this credit against the excess tax liability. The credit can be carried forward for up to 15 assessment years and must be tracked in Schedule MATC of ITR-6.",
  },
  {
    q: "Can a dormant or non-operational company skip ITR-6 filing?",
    a: "No. The Income Tax Act does not provide any exemption for dormant, inactive, or non-operational companies. Every active or dormant company with an active PAN must furnish Form ITR-6 annually. Failure to file attracts statutory penalties, loss of corporate status, and potential prosecution of directors.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How are capital gains taxed for companies in Form ITR-6?",
    a: "Corporate capital gains are reported in Schedule CG. Short-term capital gains on listed equity shares subject to STT are taxed at 20% (Section 111A), while unlisted shares and normal short-term gains are taxed at standard corporate rates. Long-term capital gains on listed equity are taxed at 12.5% on gains exceeding ₹1.25 Lakhs (Section 112A), while other long-term assets are taxed at 12.5% without indexation under recent Finance Act amendments.",
  },
  {
    q: "What is Form 10-IC and when must it be submitted for Section 115BAA?",
    a: "Form 10-IC is the mandatory statutory election form to opt for the concessional 22% corporate tax regime under Section 115BAA. It must be filed electronically on the Income Tax portal before or on the due date specified under Section 139(1) for furnishing the return of income. If Form 10-IC is not filed on time, the company will be assessed under normal tax rates of 25%/30% with MAT applicability.",
  },
  {
    q: "How is corporate CSR expenditure treated in Form ITR-6?",
    a: "Corporate Social Responsibility (CSR) expenditure incurred pursuant to Section 135 of the Companies Act, 2013 is deemed NOT to be incurred wholly and exclusively for business purposes under Explanation 2 to Section 37(1). Consequently, CSR spending is strictly non-deductible and must be added back to accounting profits in Schedule BP of ITR-6.",
  },
  {
    q: "What is the treatment of unabsorbed depreciation versus business loss in ITR-6?",
    a: "Business losses can be carried forward for a maximum of 8 assessment years and can only be set off against business income, provided the return is filed on or before the due date. In contrast, unabsorbed depreciation under Section 32(2) can be carried forward indefinitely and can be set off against any head of income (except salary), even if the ITR-6 is filed belatedly.",
  },
  {
    q: "How does Merrafilings ensure complete security and confidentiality of corporate tax data?",
    a: "Merrafilings employs enterprise-grade 256-bit SSL encryption, restricted access controls, and strict non-disclosure agreements across our corporate tax desks. Your balance sheets, board resolutions, bank statements, and director credentials are encrypted end-to-end and handled exclusively by certified Chartered Accountants.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Complete ITR-6 Return Filing Online Fee Guide",
    href: "/itr-6-form/itr-6-return-filing-online-fee",
  },
  {
    title: "Introduction to ITR6 Return Filing",
    href: "/itr-6-form/it-returns-introduction-to-itr6-filing-guide",
  },
];

const RELATED_SERVICES_TAGS = [
  "Company ITR Filing",
  "ITR-6 Form",
  "Corporate Tax Return",
  "Section 115BAA Concessional Tax",
  "MAT Section 115JB",
  "Form 3CA-3CD Tax Audit",
  "Pvt Ltd Tax Filing",
  "OPC Income Tax Return",
  "Class 3 DSC Verification",
  "Schedule FA Foreign Assets",
  "Form 10-IC Filing",
  "Corporate Income Tax",
];

const POPULAR_SEARCHES_TAGS = [
  "ITR 6 filing online",
  "ITR 6 due date AY 2026-27",
  "company income tax return filing",
  "corporate tax rate 22 percent",
  "how to file ITR 6 online",
  "MAT calculation Section 115JB",
  "ITR 6 utility download",
  "documents required for ITR 6",
  "difference between ITR 5 and ITR 6",
  "Section 44AB tax audit for companies",
  "ITR 6 DSC verification",
  "penalties for late filing ITR 6",
];

function Itr6GuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Form ITR-6: The Statutory Corporate Income Tax Return in India
        </h2>
        <p>
          <strong>Form ITR-6</strong> is the comprehensive annual Income Tax Return form prescribed by the Central Board of Direct Taxes (CBDT) specifically for companies incorporated under the Companies Act, 2013 (or the erstwhile Companies Act, 1956). Every registered corporate entity in India—including Private Limited Companies, Public Limited Companies, One Person Companies (OPC), and foreign corporations with operations in India—must file Form ITR-6 annually.
        </p>
        <p>
          The only corporate exception is for companies claiming tax exemptions under <strong>Section 11</strong> of the Income Tax Act (charitable or religious institutions), which are required to file <strong>Form ITR-7</strong>. For all other corporate taxpayers, whether profit-making, loss-making, or dormant, filing ITR-6 electronically with a valid <strong>Class 3 Digital Signature Certificate (DSC)</strong> is a strict legal mandate.
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Mandatory Corporate Filing:</strong> Under Section 139(1) of the Income Tax Act, every incorporated company must furnish its return of income on or before the prescribed due date, irrespective of whether its gross revenue is zero or it has suffered substantial commercial losses.
          </div>
        </div>
      </section>

      {/* Section 2: Corporate Tax Rates */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Corporate Tax Rates & Concessional Regimes for AY 2026-27
        </h2>
        <p>
          Corporate tax computation in Form ITR-6 requires evaluating between the traditional tax regime with allowable incentive deductions and the newer concessional tax regimes introduced by the Taxation Laws (Amendment) Act, 2019:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Tax Regime / Section</th>
                <th className="py-3.5 px-4 font-semibold">Base Tax Rate</th>
                <th className="py-3.5 px-4 font-semibold">Surcharge &amp; Cess</th>
                <th className="py-3.5 px-4 font-semibold">Effective Tax Rate</th>
                <th className="py-3.5 px-4 font-semibold">MAT Applicability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 115BAA (Concessional Domestic)</td>
                <td className="py-3.5 px-4">22.00% flat</td>
                <td className="py-3.5 px-4">10% Surcharge + 4% HEC</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">25.17%</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Exempt from MAT</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 115BAB (New Manufacturing)</td>
                <td className="py-3.5 px-4">15.00% flat</td>
                <td className="py-3.5 px-4">10% Surcharge + 4% HEC</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600">17.16%</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Exempt from MAT</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Normal Regime (Turnover &le; ₹400 Cr in FY 23-24)</td>
                <td className="py-3.5 px-4">25.00%</td>
                <td className="py-3.5 px-4">7% / 12% Surcharge + 4% HEC</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">26.00% – 29.12%</td>
                <td className="py-3.5 px-4 text-amber-700 font-medium">MAT Applicable (15%)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Normal Regime (Turnover &gt; ₹400 Cr)</td>
                <td className="py-3.5 px-4">30.00%</td>
                <td className="py-3.5 px-4">7% / 12% Surcharge + 4% HEC</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">31.20% – 34.94%</td>
                <td className="py-3.5 px-4 text-amber-700 font-medium">MAT Applicable (15%)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Foreign Companies in India</td>
                <td className="py-3.5 px-4">35.00% (Budget updated)</td>
                <td className="py-3.5 px-4">2% / 5% Surcharge + 4% HEC</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">36.19% – 38.22%</td>
                <td className="py-3.5 px-4 text-amber-700 font-medium">MAT Applicable (15%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          *Note: To elect the concessional 22% rate under Section 115BAA, the company must furnish statutory <strong>Form 10-IC</strong> electronically on the e-filing portal on or before the due date for filing the return of income under Section 139(1).
        </p>
      </section>

      {/* Section 3: Eligible Entities */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Who Needs to File Form ITR-6 in India?
        </h2>
        <p>
          Form ITR-6 is applicable to all corporate structures operating in India. Explore the corporate categories below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ELIGIBLE_COMPANIES.map((item, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${item.cardHover} hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBox} mb-3.5 transition-all shrink-0`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${item.titleHover} transition-colors mb-2`}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Architecture & Schedules */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Form ITR-6 Architecture: Key Schedules & Financial Statements
        </h2>
        <p>
          Form ITR-6 contains the most comprehensive disclosure framework among all income tax return forms. It directly integrates audited financial statements prepared under Schedule III of the Companies Act, 2013:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITR6_SCHEDULES.map((sched, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${sched.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {sched.code}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${sched.iconBox} transition-all shrink-0`}>
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${sched.titleHover} transition-colors mb-2`}>
                {sched.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {sched.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Mandatory Class 3 DSC */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Mandatory Class 3 Digital Signature Certificate (DSC) Verification
        </h2>
        <p>
          Unlike individuals or proprietary firms who can verify income tax returns using electronic verification codes (EVC) via Aadhaar OTP or net banking, <strong>corporate returns must be digitally signed</strong> under Rule 12 of the Income Tax Rules.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-[13px]">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <KeyRound className="w-4 h-4" />
              <span>Class 3 Token Mandatory</span>
            </div>
            <p className="text-slate-600">The DSC must be a Class 3 cryptographic token issued by a licensed Certifying Authority (eMudhra, Capricorn, VSign) containing signing capabilities.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <Users className="w-4 h-4" />
              <span>Director's PAN Registered</span>
            </div>
            <p className="text-slate-600">The DSC must belong to the Managing Director or Director registered on MCA as an authorized signatory and linked on the IT portal.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-600 font-semibold">
              <Laptop className="w-4 h-4" />
              <span>EMBridge Utility Setup</span>
            </div>
            <p className="text-slate-600">The DSC signer utility (EMBridge / emSigner) must be installed locally to communicate between the USB token and the incometax.gov.in portal.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Step-by-Step Filing Process */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Step-by-Step ITR-6 Electronic Filing Process
        </h2>
        <p>
          Preparing and submitting Form ITR-6 involves a rigorous multi-stage verification workflow. Our corporate tax specialists execute each step seamlessly:
        </p>
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

      {/* Section 7: Due Dates & Penalties */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Statutory Due Dates & Non-Compliance Penalties for AY 2026-27
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Corporate Category / Compliance</th>
                <th className="py-3.5 px-4 font-semibold">Statutory Due Date</th>
                <th className="py-3.5 px-4 font-semibold">Mandatory Reports Due</th>
                <th className="py-3.5 px-4 font-semibold">Late Filing Penalties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Standard Corporate Tax Audit Cases</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">31st October 2026</td>
                <td className="py-3.5 px-4">Form 3CA-3CD (due 30th Sept 2026)</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">₹5,000 (Sec 234F) + 1% p.m. (Sec 234A)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Transfer Pricing Cases (International / Specified)</td>
                <td className="py-3.5 px-4 font-bold text-purple-600">30th November 2026</td>
                <td className="py-3.5 px-4">Form 3CEB (due 31st Oct 2026)</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">₹5,000 (Sec 234F) + Loss Forfeiture</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Belated or Revised Corporate Returns</td>
                <td className="py-3.5 px-4 font-bold text-slate-700">31st December 2026</td>
                <td className="py-3.5 px-4">Corrected JSON upload via portal</td>
                <td className="py-3.5 px-4 text-slate-600 font-medium">Late fee applies; no further revisions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Common Mistakes */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Common Pitfalls to Avoid in Corporate ITR-6 Filing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMON_MISTAKES.map((err, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${err.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${err.iconBox} mb-3 transition-all shrink-0`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${err.titleHover} transition-colors mb-2`}>
                {err.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {err.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Required Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Required Documents Checklist for Corporate ITR-6 Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Corporate Identity &amp; MoA/AoA:</strong>
            <span>PAN card of the company, Certificate of Incorporation (CIN), and updated Memorandum and Articles of Association.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Audited Financial Statements:</strong>
            <span>Schedule III Balance Sheet, Profit &amp; Loss Statement, Cash Flow Statement, and Director's Report as approved by the Board.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Tax Audit Report (Form 3CA-3CD):</strong>
            <span>Statutory Tax Audit Report issued by a practicing Chartered Accountant for companies crossing Section 44AB turnover limits.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Tax Credit Reconciliation:</strong>
            <span>Form 26AS, Annual Information Statement (AIS), and Taxpayer Information Summary (TIS) reconciled with general ledgers.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">GST vs. Book Turnover Matrix:</strong>
            <span>Reconciliation statement reconciling gross sales reported across monthly GSTR-1 / GSTR-3B filings with corporate books.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Class 3 Digital Signature (DSC):</strong>
            <span>Valid Class 3 DSC token of the Managing Director or authorized Director registered as Principal Officer on the e-filing portal.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Itr6FormPage() {
  return (
    <ServicePageTemplate
      badgeText="Assessment Year 2026-27 Compliant Corporate E-Filing"
      heroTitle={
        <>
          <span>Company ITR Filing Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Form ITR-6
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="File your corporate income tax return online with dedicated Chartered Accountants. Complete ITR-6 compliance for Private Limited, Public Limited, and OPCs with Section 115BAA concessional tax modeling (22%), Minimum Alternate Tax (MAT Section 115JB), and mandatory Class 3 DSC verification."
      formTitle="Company ITR-6 Filing Advisory"
      formSubtitle="Connect with our corporate tax desk for Schedule III financial statement mapping, MAT credit optimization, and DSC-based e-filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">ITR-6 corporate filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for non-audit corporate return filing, CA-assisted compliance, or annual managed corporate retainer."
      breadcrumbCurrent="Company ITR Filing"
      guideTitle="Comprehensive Guide to Form ITR-6 Filing for Companies in India - AY 2026-27"
      guideContent={<Itr6GuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Form ITR-6 corporate tax returns, Section 115BAA concessional rates, MAT Section 115JB, and mandatory Class 3 DSC."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
