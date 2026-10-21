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
  HeartHandshake,
  Landmark,
  GraduationCap,
  Hospital,
  Vote,
  Compass,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <HeartHandshake className="w-4 h-4" />, text: "Specialized ITR-7 E-Filing for Charitable Trusts, NGOs, Societies & Section 8" },
  { icon: <Scale className="w-4 h-4" />, text: "Section 11 & 12 Exemption Tracking with 85% Statutory Application Rules" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Mandatory Audit Report Filing in Form 10B / Form 10BB (Due Sept 30)" },
  { icon: <Receipt className="w-4 h-4" />, text: "Income Accumulation Filings in Form 9A & Form 10 to Safeguard Tax Exemptions" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Form 10BD Donor Statement Synchronization & Class 3 DSC Verification" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ITR-7 Assisted Tax Filing (Non-Audit)",
    shortDesc: "End-to-end tax return preparation and e-filing for trusts and societies below statutory audit threshold.",
    expandedDesc: "Designed for small charitable trusts, non-profit societies, religious institutions, and voluntary organizations with gross receipts below the mandatory audit limit. Senior non-profit tax accountants analyze your receipt and payment statements, income & expenditure account, verify Section 12AB registration credentials, reconcile voluntary contributions with Form 10BD/AIS, compute 85% application of income, and e-file Form ITR-7 with complete acknowledgment.",
    price: "₹9,899",
    priceSub: "Per Assessment Year / Non-Audit Returns",
    badge: "Essential Non-Profit Compliance",
    features: [
      "Preparation & Submission of Form ITR-7 for AY 2026-27",
      "Receipts & Payments and Income & Expenditure Compilation",
      "Section 11/12 Exemption & 85% Application of Income Verification",
      "15% Unconditional Income Accumulation Calibration",
      "Form 10BD Donation Statement Reconciliation with AIS/TIS",
      "Schedule VC (Voluntary Contributions) & Corpus Segregation",
      "Depreciation Claims as per Recent Judicial Guidelines",
      "Official ITR-V Acknowledgment & Class 3 DSC Authentication",
    ],
  },
  {
    name: "ITR-7 CA-Assisted Tax Compliance",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Personally handled by a senior non-profit Chartered Accountant with audit reporting synchronization.",
    expandedDesc: "Our premier solution for established NGOs, educational trusts, healthcare societies, and Section 8 companies requiring comprehensive exemption defense. A senior practicing Chartered Accountant personally audits your accounts, prepares statutory Audit Report in Form 10B or Form 10BB before the September 30 deadline, drafts Form 9A / Form 10 for deemed or specific accumulations, scrutinizes anonymous donations under Section 115BBC, and files ITR-7 with zero discrepancy.",
    price: "₹12,899",
    priceSub: "Per Assessment Year / CA Certified",
    features: [
      "Everything in the Assisted Tax Filing Package",
      "Personally Handled & Certified by Senior Non-Profit Chartered Accountant",
      "Form 10B / Form 10BB Statutory Audit Report Synchronization",
      "Form 9A (Deemed Application) & Form 10 (Specific Accumulation) Drafting",
      "Section 115BBC Anonymous Donations Verification (Taxed at 30%)",
      "Capital Asset Transfer & Section 11(1A) Reinvestment Advisory",
      "Section 13 Prohibited Persons & Related-Party Transaction Audit",
      "Corpus Donation Earmarking & Investment under Section 11(5) Review",
      "Digital Signature Certificate (DSC) Portal Registration & Verification",
    ],
  },
  {
    name: "ITR-7 Comprehensive Trust Suite",
    shortDesc: "Annual retainer covering Section 12AB/80G renewals, Form 10BD, FCRA reporting, and notice defense.",
    expandedDesc: "Tailored for large universities, hospitals, national NGOs, and political entities requiring year-round regulatory oversight. Includes dedicated CA support across the financial year, annual Form 10BD donation filings and donor certificate generation (Form 10BE), FCRA return (FC-4) synchronization, quarterly TDS return filings on NGO vendor/employee payments, and robust legal representation for Section 143(1) intimations and Section 148 scrutiny notices.",
    price: "₹19,899",
    priceSub: "Annual Retainer / Complete Non-Profit Oversight",
    badge: "Complete NGO Retainer",
    features: [
      "Dedicated Senior Partner Chartered Accountant (CA) Assigned",
      "Complete Form 10B / Form 10BB Statutory Audit Oversight",
      "Annual Form 10BD Statement Filing & Form 10BE Certificate Issuance",
      "Section 12AB & 80G Re-registration Maintenance Advisory",
      "FCRA Compliance & Foreign Contribution Sync with Home Ministry",
      "Quarterly TDS Withholding Review & Filing for Trusts (Form 24Q/26Q)",
      "End-to-End Handling of Scrutiny Notices & Section 143(1) Intimations",
      "Section 115TD Accreted Income (Exit Tax) Risk Assessment",
      "Direct Priority Phone & WhatsApp Line with NGO Tax Desk",
    ],
  },
];

const ELIGIBLE_ENTITIES = [
  {
    title: "Charitable & Religious Trusts",
    desc: "Public charitable and religious trusts registered under Section 12AB of the Income Tax Act. Entitled to tax exemptions on voluntary contributions and application of income under Sections 11 and 12.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Registered Societies & Non-Profits",
    desc: "Societies registered under the Societies Registration Act, 1860 or State Acts carrying out social welfare, cultural, environmental, or educational objects with Section 12AB exemption status.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Section 8 Non-Profit Companies",
    desc: "Companies incorporated under Section 8 of the Companies Act, 2013 for promoting commerce, art, science, charity, or religion that have obtained Section 12AB registration must file Form ITR-7.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Political Parties",
    desc: "Political parties registered under Section 29A of the Representation of the People Act, 1951 claiming 100% tax exemption under Section 13A for voluntary contributions and property income.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Universities, Schools & Hospitals",
    desc: "Educational institutions, universities, and hospitals claiming tax exemption under Section 10(23C)(iiiab), (iiiac), (iv), (v), (vi), or (via) of the Income Tax Act.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Scientific Research & Business Trusts",
    desc: "Scientific research associations (Sec 10(21)), news agencies (Sec 10(22B)), sports associations (Sec 10(23)), business trusts (Sec 139(4E)), and investment funds (Sec 139(4F)).",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const ITR7_SCHEDULES = [
  {
    code: "Part A-GEN",
    title: "General Entity & Registration Details",
    desc: "Entity legal status, Section 12A/12AB URN registration number, Section 80G approval number, date of registration, objects of trust, and Details of Trustees/Governing Body members.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    code: "Schedule VC",
    title: "Voluntary Contributions & Grants",
    desc: "Itemized breakdown of domestic donations, foreign contributions under FCRA, anonymous donations, government grants, and corpus donations received for specific capital projects.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    code: "Schedule AI & ER",
    title: "Aggregate Income & Revenue Expenditure",
    desc: "Computation of gross income derived from property held under trust, applied revenue expenditure towards charitable/religious purposes in India, and disallowances under Section 40(a).",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    code: "Schedule EC",
    title: "Capital Expenditure on Objects",
    desc: "Capital expenditure incurred during the previous year for acquiring fixed assets (land, buildings, equipment) used wholly and exclusively for fulfilling the charitable purposes of the trust.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    code: "Schedule 115BBC & 115BBI",
    title: "Special Tax Rates on Unapproved Income",
    desc: "Computation of tax at flat 30% on anonymous donations exceeding statutory thresholds (Sec 115BBC) and specified non-compliant incomes, improper accumulations, or commercial breaches (Sec 115BBI).",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    code: "Schedule 115TD",
    title: "Accreted Income (Exit Tax) Valuation",
    desc: "Mandatory computation of accreted income tax at maximum marginal rate (34.94%) if the trust converts into a non-charitable entity, merges with an ineligible institution, or dissolves.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FILING_STEPS = [
  {
    step: "Step 01",
    title: "Accounts Audit & Statement Finalization",
    desc: "Finalize Balance Sheet, Income & Expenditure Statement, and Receipt & Payment accounts. Reconcile donor data with annual Form 10BD return filed on the Income Tax portal.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 02",
    title: "File Audit Report (Form 10B / 10BB)",
    desc: "A practicing Chartered Accountant completes the statutory audit and submits Form 10B (receipts > ₹5 Cr / FCRA / foreign application) or Form 10BB on or before September 30th.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 03",
    title: "Submit Form 9A & Form 10 (If Required)",
    desc: "If the trust could not apply 85% of income, submit Form 9A (for deemed application) or Form 10 (for 5-year specific project accumulation) electronically before the statutory deadline.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 04",
    title: "Compile Form ITR-7 Return Data",
    desc: "Open official CBDT ITR-7 Schema utility. Fill Part A entity information, Schedule VC, Schedule AI, Schedule ER, Schedule EC, Schedule 115BBC, and calculate zero net tax liability.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 05",
    title: "Validate & Upload JSON on Portal",
    desc: "Perform comprehensive pre-submission schema validations. Log into incometax.gov.in using Trust / NGO PAN, navigate to e-File > File Income Tax Return, and upload validated JSON.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "Class 3 DSC Verification & ITR-V",
    desc: "Authenticate the filing electronically using the registered Class 3 Digital Signature Certificate (DSC) of the Managing Trustee or President. Download official ITR-V acknowledgment receipt.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const COMMON_MISTAKES = [
  {
    title: "Missing Audit Form 10B/10BB Deadline",
    desc: "Failing to upload Form 10B/10BB by September 30 (one month prior to ITR-7) results in automatic forfeiture of Section 11/12 tax exemptions, taxing gross receipts at maximum 30% rates.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Failure to Submit Form 9A or Form 10",
    desc: "If less than 85% of income is applied to charitable purposes, failing to file Form 9A (for deemed application) or Form 10 (for accumulation) prior to the due date leads to instant tax liability.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Discrepancy Between Form 10BD and ITR-7",
    desc: "Mismatch between donations declared in annual Form 10BD statement and voluntary contributions reported in Schedule VC triggers automated algorithmic scrutiny under Section 143(1).",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Unapproved Investments under Section 11(5)",
    desc: "Investing trust funds, corpus, or accumulated reserves in unapproved financial instruments, equity shares, or private businesses violates Section 11(5) and attracts penal cancellation of 12AB status.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Violations under Section 13 (Prohibited Persons)",
    desc: "Applying trust income, property, or paying excessive remuneration to founders, trustees, or their relatives triggers strict Section 13 disallowance, forfeiting total tax exemption.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Attempting to File ITR-5 or ITR-6 Instead",
    desc: "A trust holding Section 12AB registration cannot file ITR-5 (for firms) or ITR-6 (for companies). Doing so invalidates all exemption schedules, treating the entity as an Association of Persons (AOP).",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is Form ITR-7?",
    a: "ITR-7 is the specialized Income Tax Return form prescribed for entities required to furnish returns under Section 139(4A), 139(4B), 139(4C), 139(4D), 139(4E), or 139(4F) of the Income Tax Act. It is predominantly used by Charitable and Religious Trusts, Non-Governmental Organizations (NGOs), Registered Societies, Section 8 Non-Profit Companies, Political Parties, and Educational/Medical institutions claiming statutory tax exemptions.",
  },
  {
    q: "Who is required to file ITR-7 online in India?",
    a: "Every trust, society, NGO, section 8 company, or association claiming income tax exemption under Section 11, Section 12, Section 10(23C), or Section 13A must file Form ITR-7. Even if total taxable income after applying exemption is zero, filing ITR-7 is strictly mandatory to establish statutory compliance, retain 12AB/80G registrations, and report charitable expenditures.",
  },
  {
    q: "What is the 85% application of income rule for charitable trusts?",
    a: "Under Section 11(1)(a) of the Income Tax Act, a charitable or religious trust must apply at least 85% of its total income towards charitable or religious purposes in India during the relevant financial year. The remaining 15% can be accumulated unconditionally without attracting any income tax liability. If the trust fails to apply 85%, the unspent balance is taxed unless Form 9A or Form 10 is filed.",
  },
  {
    q: "What is the difference between Form 10B and Form 10BB?",
    a: "Form 10B and Form 10BB are statutory audit reports issued by a Chartered Accountant for entities filing ITR-7: (1) Form 10B is mandatory if the trust's total income exceeds ₹5 Crores, OR if the trust has received foreign contributions under FCRA, OR if it has applied any income outside India; (2) Form 10BB is applicable in all other audit cases where total income exceeds the basic exemption limit without Section 11/12 relief.",
  },
  {
    q: "What is the due date for filing Form ITR-7 and Audit Reports?",
    a: "For trusts and NGOs subject to statutory audit, the due date for submitting the Audit Report (Form 10B or Form 10BB) is September 30th of the assessment year (strictly one month prior to ITR filing). The due date for filing Form ITR-7 is October 31st of the assessment year (e.g., October 31, 2026 for FY 2025-26). Non-audit trusts file ITR-7 by July 31st.",
  },
  {
    q: "What happens if Form 10B or Form 10BB is filed late?",
    a: "CBDT guidelines mandate that Form 10B/10BB must be filed at least one month before the ITR-7 due date. Failure to file by September 30th results in total forfeiture of Section 11 and Section 12 tax exemptions. In such cases, the Assessing Officer will tax the gross income of the trust at standard rates without allowing deductions for charitable expenditures.",
  },
  {
    q: "What is Form 9A and when should it be filed?",
    a: "Form 9A is an electronic application for 'deemed application of income' under Explanation 1 to Section 11(1). It is filed when a trust could not apply 85% of its income either because the income was not received during the financial year or for any other reason. It must be filed at least two months prior to the due date for filing ITR-7 (i.e., on or before August 31st).",
  },
  {
    q: "What is Form 10 and how does it allow accumulation for 5 years?",
    a: "Under Section 11(2), if a trust cannot apply 85% of its income in the current year, it can accumulate up to 100% of the unspent income for a maximum period of 5 years for specific capital purposes (such as constructing a hospital, school, or community center). The trust must file Form 10 electronically and invest the accumulated funds in modes specified under Section 11(5).",
  },
  {
    q: "How are anonymous donations taxed under Section 115BBC in ITR-7?",
    a: "Under Section 115BBC, anonymous donations (donations where the donor's identity, name, or address is not maintained) received by charitable trusts are taxed at a flat rate of 30% (plus surcharge and cess) on the amount exceeding: 5% of total donations received OR ₹1,00,000, whichever is higher. Wholly religious trusts are exempt from this provision.",
  },
  {
    q: "Can a Section 8 company file Form ITR-6 instead of ITR-7?",
    a: "If a Section 8 company holds valid registration under Section 12AB (or Section 10(23C)) and claims tax exemption on its income, it MUST file Form ITR-7. If it has not applied for or does not claim Section 11/12 tax exemptions, it must file Form ITR-6 as a standard commercial corporate entity.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What are the core differences between ITR-7 and ITR-6 forms?",
    a: "ITR-7 is exclusively for charitable, religious, non-profit, educational, and political entities claiming statutory tax exemptions under Sections 11, 12, 10(23C), or 13A. In contrast, ITR-6 is for commercial companies (Pvt Ltd, Public Ltd, OPC) operating for profit. ITR-7 focuses on donor accountability and 85% income application, whereas ITR-6 focuses on commercial balance sheets and corporate tax calculation.",
  },
  {
    q: "What is Form 10BD and how does it connect with ITR-7 filing?",
    a: "Form 10BD is the annual statement of donations that every Section 80G registered trust must file electronically on or before May 31st following the financial year. The details entered in Form 10BD populate the donor's AIS and determine the voluntary contributions declared in Schedule VC of Form ITR-7. Any mismatch between Form 10BD and ITR-7 triggers scrutiny notices.",
  },
  {
    q: "What is Section 115TD Accreted Income Tax (Exit Tax)?",
    a: "Section 115TD imposes an exit tax at the maximum marginal rate (34.94%) on the 'accreted income' (fair market value of total assets minus total liabilities) of a trust if: (1) It converts into any form not eligible for Section 12AB; (2) It merges with an unregistered entity; or (3) On dissolution, it fails to transfer its assets to another registered charitable trust within 12 months.",
  },
  {
    q: "Is Digital Signature Certificate (DSC) mandatory for filing Form ITR-7?",
    a: "Yes. In the case of trusts, societies, and Section 8 companies whose accounts are required to be audited under Section 12A(1)(b) or whose Managing Trustee / Director is registered with a DSC, Form ITR-7 must be electronically signed using a valid Class 3 Digital Signature Certificate. Non-audit societies can use Aadhaar OTP or EVC.",
  },
  {
    q: "What is the penalty for filing Form ITR-7 late?",
    a: "Late filing attracts a fee under Section 234F of ₹5,000 (or ₹1,000 for income below ₹5 Lakhs). Far more critically, delayed filing beyond the October 31 due date invalidates Section 11 and 12 exemptions under Section 12A(1)(ba), leading to the gross income being taxed at maximum marginal rates, plus interest under Sections 234A, 234B, and 234C.",
  },
  {
    q: "Can a trust carry forward unapplied deficits or losses in ITR-7?",
    a: "Following amendments in recent Finance Acts, trusts cannot claim set-off or carry forward of excess application of earlier years against current year income. Application of income must strictly be from current-year receipts or permitted accumulations under Section 11(1) / Form 9A / Form 10.",
  },
  {
    q: "What are the approved investment modes under Section 11(5)?",
    a: "Section 11(5) prescribes safe investment modes for trust funds and accumulations, including: government savings certificates, postal savings bank accounts, deposits with public sector or scheduled commercial banks, units of UTI, government bonds, and shares of public sector companies. Investment in private company shares or unsecured loans violates Section 11(5).",
  },
  {
    q: "How does a political party file ITR-7 under Section 139(4B)?",
    a: "Political parties registered under Section 29A of the Representation of the People Act, 1951 must file ITR-7 to claim 100% tax exemption under Section 13A. They must maintain audited books, maintain donor details for contributions exceeding ₹20,000, accept no cash donations exceeding ₹2,000, submit contribution reports to the Election Commission, and file ITR-7 on time.",
  },
  {
    q: "What documents must be maintained for ITR-7 filing verification?",
    a: "Trusts must maintain: Trust Deed / Society Bylaws, Section 12AB and 80G registration certificates, audited balance sheet and income & expenditure account, Form 10B/10BB audit report, donation receipts with donor PAN/address, Form 10BD acknowledgment, bank statements for all operational accounts, and proof of capital expenditure assets.",
  },
  {
    q: "How can Merrafilings assist NGOs and Charitable Trusts with ITR-7?",
    a: "Merrafilings provides end-to-end non-profit tax governance led by experienced Chartered Accountants. We handle 85% application analysis, Form 10B/10BB audit certification, Form 9A/Form 10 accumulation filings, Form 10BD donor reconciliations, Class 3 DSC verification, and representation against scrutiny notices to preserve your charitable exemptions.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How is commercial income earned by a charitable trust treated under Section 2(15)?",
    a: "Under the proviso to Section 2(15), if a trust carries on any commercial activity or trade for the advancement of any other object of general public utility (GPU), the activity will not be deemed charitable if gross receipts from such commercial activity exceed 20% of the total receipts of the trust in that financial year.",
  },
  {
    q: "Can a trust pay remuneration to its trustees without losing tax exemption?",
    a: "Under Section 13(1)(c) and Section 13(2)(c), any payment of remuneration, salary, or allowance to trustees, founders, or their specified relatives must be reasonable and strictly for actual services rendered. If remuneration is found to be excessive or unreasonable, the trust loses its tax exemption for the amount under Section 13.",
  },
  {
    q: "What is Section 115BBI and what specified incomes are taxed at 30%?",
    a: "Section 115BBI levies a flat 30% tax on specified violations by trusts, including: (1) Unapplied accumulated income under Form 10; (2) Income invested in unapproved modes under Section 11(5); (3) Income applied for personal benefit of prohibited persons under Section 13(1)(c); and (4) Income applied outside India without CBDT approval.",
  },
  {
    q: "How are corpus donations treated in Form ITR-7?",
    a: "Corpus donations are voluntary contributions made with a specific written direction from the donor that they shall form part of the trust corpus. Under Section 11(1)(d), corpus donations are 100% exempt from income tax, provided they are invested or deposited in modes specified under Section 11(5) and not used for revenue expenses.",
  },
  {
    q: "Can an NGO lose its Section 12AB registration due to late filing of ITR-7?",
    a: "Yes. Consistent failure to file Form ITR-7 on time, non-filing of statutory audit reports in Form 10B/10BB, or intentional suppression of non-charitable commercial receipts gives the Principal Commissioner grounds to initiate cancellation proceedings of Section 12AB and 80G registrations under Section 12AB(4).",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What is the procedure for universities and hospitals filing under Section 10(23C)?",
    a: "Educational institutions and hospitals wholly or substantially financed by the government are exempt under Section 10(23C)(iiiab)/(iiiac). Those with aggregate annual receipts up to ₹5 Crores are exempt under Section 10(23C)(iiiad)/(iiiae). Institutions exceeding ₹5 Crores must obtain approval under Section 10(23C)(vi)/(via) and file ITR-7 along with Form 10B/10BB.",
  },
  {
    q: "How does a trust report foreign contributions received under FCRA in ITR-7?",
    a: "Foreign contributions must be reported in Schedule VC under 'Foreign Contributions' matching the annual return filed with the Ministry of Home Affairs in Form FC-4. The trust must also report details of the dedicated FCRA bank account with the State Bank of India, New Delhi Main Branch.",
  },
  {
    q: "Can a trust claim depreciation on assets where capital expenditure was already claimed?",
    a: "Under Section 11(6), if the acquisition of a capital asset has been claimed as an application of income for charitable or religious purposes in any previous year, no deduction by way of depreciation shall be allowed on that asset in the current or subsequent years, preventing double deduction.",
  },
  {
    q: "What is the treatment of inter-trust donations in Form ITR-7?",
    a: "Donations made by one registered charitable trust to another registered charitable trust out of current-year income are treated as valid application of income (capped at 85%). However, donations made towards the corpus of another trust are strictly NOT treated as application of income under Explanation 2 to Section 11(1).",
  },
  {
    q: "What should a trust do if it receives an Income Tax Notice under Section 143(1) with tax demand?",
    a: "Such notices typically arise due to non-matching of Form 10B/10BB, late filing of Form 9A/10, or incorrect entries in Schedule VC. Merrafilings assists in reviewing the CPC computation, filing rectification requests under Section 154, or filing online appeals before the CIT(Appeals) to restore complete exemption.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Comprehensive Guide to Corporate Tax Filing (Form ITR-6) for Companies in India",
    href: "/itr-6-form",
    date: "Corporate Tax",
    readTime: "9 min read",
  },
  {
    title: "Form ITR-5 Filing Guide for Partnership Firms & LLPs in India (AY 2026-27)",
    href: "/itr-5-form",
    date: "Statutory Guide",
    readTime: "10 min read",
  },
  {
    title: "Section 12AB & 80G Registration Renewal Process for NGOs and Charitable Trusts",
    href: "/income-tax-filing",
    date: "Non-Profit Desk",
    readTime: "8 min read",
  },
  {
    title: "Form 15CA & 15CB Filing for Cross-Border Remittances: Procedure & CA Certificate",
    href: "/15ca-15cb-filing",
    date: "International Tax",
    readTime: "7 min read",
  },
];

const RELATED_SERVICES_TAGS = [
  "Trust Tax Filing",
  "ITR-7 Form",
  "NGO Tax Return",
  "Section 11 Exemption",
  "Section 12AB Compliance",
  "Form 10B Audit",
  "Form 10BB Audit",
  "Form 9A Accumulation",
  "Form 10 Accumulation",
  "Form 10BD Statement",
  "Section 8 Company Tax",
  "Political Party ITR",
];

const POPULAR_SEARCHES_TAGS = [
  "ITR 7 filing online",
  "ITR 7 due date AY 2026-27",
  "trust income tax return filing",
  "Form 10B vs 10BB due date",
  "85 percent application of income trust",
  "how to file ITR 7 online",
  "ITR 7 utility download",
  "Section 115BBC anonymous donations",
  "difference between ITR 6 and ITR 7",
  "NGO tax audit requirements",
  "ITR 7 DSC verification",
  "penalty for late filing ITR 7",
];

function Itr7GuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Form ITR-7: The Specialized Non-Profit Income Tax Return
        </h2>
        <p>
          <strong>Form ITR-7</strong> is the statutory Income Tax Return form prescribed by the Central Board of Direct Taxes (CBDT) for entities claiming exemptions under the non-profit and charitable provisions of the Income Tax Act, 1961. This includes Public Charitable and Religious Trusts, Non-Governmental Organizations (NGOs), Registered Societies, Section 8 Non-Profit Companies, Political Parties, Universities, Colleges, and Medical Institutions.
        </p>
        <p>
          Unlike commercial return forms (ITR-5 and ITR-6) that focus on taxable profits and business margins, Form ITR-7 is designed around <strong>transparency, donor accountability, and the application of voluntary contributions towards charitable objects</strong>. Even if an NGO's taxable income after statutory exemptions is nil, filing Form ITR-7 within prescribed deadlines is strictly mandatory to protect Section 12AB and Section 80G tax-exempt registrations.
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
          <HeartHandshake className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
            <strong>Exemption Protection Mandate:</strong> Under Section 12A(1)(ba), claiming exemptions under Section 11 and Section 12 is conditional upon furnishing Form ITR-7 on or before the due date specified under Section 139(1). Late filing permanently revokes exemption for that assessment year, taxing gross donations at 30%!
          </div>
        </div>
      </section>

      {/* Section 2: Eligible Entities & Sections */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who Must File Form ITR-7: Statutory Categories under Section 139
        </h2>
        <p>
          Form ITR-7 is categorized according to the specific statutory sub-sections under Section 139 of the Income Tax Act:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Section</th>
                <th className="py-3.5 px-4 font-semibold">Entity Type</th>
                <th className="py-3.5 px-4 font-semibold">Governing Exemption</th>
                <th className="py-3.5 px-4 font-semibold">Mandatory Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 139(4A)</td>
                <td className="py-3.5 px-4">Charitable &amp; Religious Trusts</td>
                <td className="py-3.5 px-4">Section 11 &amp; Section 12</td>
                <td className="py-3.5 px-4 font-medium text-emerald-600">85% Application + Form 10B/10BB</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 139(4B)</td>
                <td className="py-3.5 px-4">Political Parties</td>
                <td className="py-3.5 px-4">Section 13A</td>
                <td className="py-3.5 px-4 font-medium text-blue-600">Election Commission Report + Audit</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 139(4C)</td>
                <td className="py-3.5 px-4">Scientific Research, News Agencies, Hospitals</td>
                <td className="py-3.5 px-4">Section 10(21), 10(22B), 10(23A/B/C)</td>
                <td className="py-3.5 px-4 font-medium text-purple-600">Approval under relevant clause + Audit</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 139(4D)</td>
                <td className="py-3.5 px-4">Universities, Colleges, Institutions</td>
                <td className="py-3.5 px-4">Section 10(23C)(iiiad)/(vi)</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Receipts &gt; ₹5 Cr approval requirement</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Section 139(4E) &amp; (4F)</td>
                <td className="py-3.5 px-4">Business Trusts &amp; Investment Funds</td>
                <td className="py-3.5 px-4">Section 115UA &amp; Section 115UB</td>
                <td className="py-3.5 px-4 font-medium text-slate-700">Pass-through income reporting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: 85% Application Rule */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Core Exemption Mechanics: 85% Application, Corpus & Accumulation
        </h2>
        <p>
          Tax exemptions for non-profits under Sections 11 and 12 operate on strict mathematical thresholds. The trust must structure its receipts and expenditures according to the following framework:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              85%
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Mandatory Application</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              At least 85% of total income (revenue plus general voluntary contributions) must be spent on charitable or religious activities in India during the financial year.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              15%
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Unconditional Accumulation</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Up to 15% of total receipts can be retained and accumulated unconditionally without specifying any capital purpose and without attracting income tax.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
              100%
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Exempt Corpus Donations</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Voluntary contributions received with specific written donor instructions forming the trust corpus (Sec 11(1)(d)) are 100% tax-free if invested under Section 11(5).
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
              9A
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Deemed Application (Form 9A)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Filed if 85% application could not be achieved because income was not received during the year. Must be filed 2 months prior to ITR-7 due date.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
              10
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">5-Year Accumulation (Form 10)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Permits accumulating up to 100% unspent income for up to 5 assessment years for stated capital projects, provided funds are deposited in Section 11(5) modes.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm">
              30%
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Anonymous Donations Tax</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Section 115BBC taxes anonymous donations exceeding 5% of total donations or ₹1,00,000 at a flat 30% plus surcharge and cess.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Mandatory Audit Form 10B vs 10BB */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Statutory Audit Mandate: Form 10B vs. Form 10BB
        </h2>
        <p>
          Under Rule 16CC and Rule 17B of the Income Tax Rules, every trust or institution whose total income exceeds the basic exemption limit must obtain a Chartered Accountant audit report:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px]">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Form 10B Audit Report
              </span>
              <span className="text-slate-500 font-medium">Due: 30th September</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Mandatory if <strong>any ONE</strong> of the following conditions is satisfied:
            </p>
            <ul className="space-y-1.5 text-slate-600 list-disc pl-4">
              <li>Total income of the trust exceeds <strong>₹5 Crores</strong> during the previous year.</li>
              <li>The trust has received any foreign contribution under FCRA regulations.</li>
              <li>The trust has applied any part of its income outside India.</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Form 10BB Audit Report
              </span>
              <span className="text-slate-500 font-medium">Due: 30th September</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Applicable in all other audit cases where:
            </p>
            <ul className="space-y-1.5 text-slate-600 list-disc pl-4">
              <li>Total income exceeds the basic exemption threshold (₹2.5 Lakhs).</li>
              <li>Total income does NOT exceed ₹5 Crores.</li>
              <li>No foreign contribution received and no foreign application made.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison Table ITR-7 vs ITR-6 */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Comparative Analysis: Form ITR-7 vs. Form ITR-6
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Evaluation Criteria</th>
                <th className="py-3.5 px-4 font-semibold text-emerald-700">Form ITR-7 (Non-Profit / Trusts)</th>
                <th className="py-3.5 px-4 font-semibold text-blue-700">Form ITR-6 (Commercial Companies)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Entity Types Covered</td>
                <td className="py-3.5 px-4">NGOs, charitable/religious trusts, societies, Section 8 with 12A</td>
                <td className="py-3.5 px-4">Private Limited, Public Limited, OPCs, foreign corporations</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Tax Exemption Regime</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">100% exemption on applying 85% of income under Sec 11/12</td>
                <td className="py-3.5 px-4">Taxed on corporate net profits (22% / 25% / 30%)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Primary Focus</td>
                <td className="py-3.5 px-4">Donor accountability, receipt utilization, public interest</td>
                <td className="py-3.5 px-4">Commercial profitability, shareholder equity, ROC alignment</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Core Audit Requirement</td>
                <td className="py-3.5 px-4">Form 10B / Form 10BB (due 30th September)</td>
                <td className="py-3.5 px-4">Form 3CA-3CD under Section 44AB (due 30th September)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Accumulation Provisions</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Form 9A (deemed) &amp; Form 10 (5-year specific capital projects)</td>
                <td className="py-3.5 px-4">No accumulation concept; standard reserves &amp; surplus</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Minimum Alternate Tax (MAT)</td>
                <td className="py-3.5 px-4">Not applicable to charitable trusts</td>
                <td className="py-3.5 px-4 text-amber-700 font-medium">Section 115JB MAT applies unless Section 115BAA opted</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Consequence of Late Filing</td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">Immediate loss of Sec 11/12 exemption; taxed at 30% flat</td>
                <td className="py-3.5 px-4">Late fee under 234F; forfeiture of business loss carry forward</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: ITR-7 Schedules Architecture */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Key Schedules in Form ITR-7 Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITR7_SCHEDULES.map((sched, idx) => (
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

      {/* Section 7: Step-by-Step Filing */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Step-by-Step Form ITR-7 Online Submission Process
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

      {/* Section 8: Common Mistakes */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Critical Errors to Avoid in ITR-7 Return Filing
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

      {/* Section 9: Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Essential Documentation Checklist for ITR-7 Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Registration Certificates:</strong>
            <span>Trust Deed / Society Registration Certificate, Section 12A/12AB URN order, and Section 80G registration order.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Audited Financial Statements:</strong>
            <span>Balance Sheet, Income &amp; Expenditure Statement, and Receipt &amp; Payment account certified by an independent auditor.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Audit Report (Form 10B/10BB):</strong>
            <span>Statutory Audit Report furnished electronically on the e-filing portal by a practicing Chartered Accountant.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Donation Reconciliations:</strong>
            <span>Form 10BD statement of donations acknowledgment, donor registry with PANs, and corpus donation confirmation letters.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">FCRA &amp; Bank Records:</strong>
            <span>Bank account statements for all operational bank accounts, including dedicated SBI New Delhi FCRA account statement.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Class 3 Digital Signature:</strong>
            <span>Valid Class 3 DSC token of the Managing Trustee, President, Secretary, or Director registered as Principal Officer.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Itr7FormPage() {
  return (
    <ServicePageTemplate
      badgeText="Assessment Year 2026-27 Compliant Trust & NGO E-Filing"
      heroTitle={
        <>
          <span>Trust / NGO Tax Filing Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Form ITR-7
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="File Form ITR-7 online for Charitable Trusts, NGOs, Section 8 Companies, Political Parties, and Educational Institutions. Complete compliance for Section 11/12 tax exemptions, Form 10B/10BB audit reporting, 85% income application tracking, Form 9A/Form 10 accumulations, and mandatory Class 3 DSC verification."
      formTitle="Trust / NGO ITR-7 Advisory"
      formSubtitle="Connect with our non-profit tax desk for exemption claims, donor reconciliation, Form 10B/10BB sync, and DSC-based e-filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">ITR-7 non-profit filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for non-audit trust return filing, CA-assisted exemption compliance, or annual NGO retainer."
      breadcrumbCurrent="Trust / NGO Tax Filing"
      guideTitle="Comprehensive Guide to Form ITR-7 Filing for Trusts, NGOs & Non-Profits in India - AY 2026-27"
      guideContent={<Itr7GuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Form ITR-7 filing, Section 11/12 exemptions, 85% application rules, Form 10B/10BB audits, and Form 10 accumulation."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
