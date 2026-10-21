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
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Compliant Filing for Proprietorships, LLPs & Private Limited Companies" },
  { icon: <Calculator className="w-4 h-4" />, text: "Comprehensive Balance Sheet & Profit and Loss Statement Preparation" },
  { icon: <Scale className="w-4 h-4" />, text: "Section 44AB Tax Audit & Form 3CA/3CB-3CD Reporting by Certified CAs" },
  { icon: <BadgePercent className="w-4 h-4" />, text: "Maximizing Depreciation Schedules & Legitimate Business Expense Deductions" },
  { icon: <Award className="w-4 h-4" />, text: "Continuous Scrutiny Notice Protection & Year-Round CA Tax Advisory" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Presumptive Business Return (ITR-4 / Sugam)",
    shortDesc: "Designed for small businesses, traders, and professionals under Sections 44AD, 44ADA & 44AE.",
    expandedDesc: "Complete preparation and filing of Form ITR-4 (Sugam) for small enterprises and freelance professionals opting for presumptive taxation. Eliminates the requirement to maintain cumbersome statutory books of account. Includes gross receipt validation, deemed profit computation (6%/8% for businesses or 50% for professionals), and instant e-verification.",
    price: "₹4,899",
    priceSub: "Per Assessment Year / Up to ₹2-3 Cr Turnover",
    badge: "Small Business",
    features: [
      "Filing of Form ITR-4 (Sugam) by Senior Tax Accountants",
      "Section 44AD Business Income Computation (6% / 8% Profit)",
      "Section 44ADA Professional Receipts (50% Deemed Profit)",
      "Exemption from Maintaining Formal Books of Account",
      "Form 26AS & Annual Information Statement (AIS) Cross-Check",
      "GST Turnover Reconciliation with Income Tax Figures",
      "Advance Tax Due Date Reminders & Computation",
      "Official ITR-V Acknowledgment Receipt Generation",
    ],
  },
  {
    name: "CA-Assisted Corporate & Firm Return",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Complete financial statement preparation and filing for LLPs, Partnership Firms & Companies.",
    expandedDesc: "A comprehensive tax solution managed directly by a qualified Chartered Accountant. Designed for Partnership Firms, LLPs, and Private Limited companies filing ITR-3, ITR-5, or ITR-6. Includes drafting statutory Profit & Loss accounts, balance sheets, partner remuneration adjustments under Section 40(b), fixed asset depreciation schedules, and corporate tax computation.",
    price: "₹12,899",
    priceSub: "Per Assessment Year / CA Certified",
    features: [
      "Everything in the Presumptive Return Package",
      "Personally Managed by Qualified Chartered Accountant (CA)",
      "Form ITR-3, ITR-5 (LLP/Firm) or ITR-6 (Company) Filing",
      "Preparation of Certified Balance Sheet & P&L Statements",
      "Partner Remuneration & Interest Adjustments (Sec 40(b))",
      "Section 32 Fixed Asset Depreciation Schedules",
      "Set-off & Carry Forward of Unabsorbed Business Losses",
      "Detailed Reconciliation of GST vs. Income Tax Turnover",
      "Digital Signature (DSC) Affixation & Verification",
    ],
  },
  {
    name: "Comprehensive Corporate Tax & Audit Suite",
    shortDesc: "End-to-end corporate compliance, Section 44AB tax audit, and year-round CA advisory.",
    expandedDesc: "The ultimate compliance suite for high-turnover businesses, manufacturers, and corporate entities exceeding tax audit thresholds. Covers comprehensive Section 44AB audit verification, compilation and electronic filing of Form 3CA/3CB and Form 3CD, advance tax schedules, TDS withholding reviews, transfer pricing screening, and priority notice representation.",
    price: "₹19,899",
    priceSub: "Annual Retainer / Includes Tax Audit Assistance",
    badge: "Enterprise Suite",
    features: [
      "Dedicated Senior Partner Chartered Accountant (CA) Assigned",
      "Section 44AB Tax Audit Verification & Form 3CD Filing",
      "Full Corporate / Firm Income Tax Return Submission",
      "Quarterly Advance Tax Estimation & Installment Calculations",
      "Comprehensive Quarterly TDS & TCS Reconciliation",
      "End-to-End Handling of Scrutiny Notices & Rectifications",
      "Annual Business Tax Restructuring & Deduction Planning",
      "Direct Priority Telephone & WhatsApp Line with Senior Tax Desk",
    ],
  },
];

const BUSINESS_ENTITIES = [
  {
    type: "Sole Proprietorship",
    form: "ITR-3 or ITR-4 (Sugam)",
    who: "Individual business owners, shopkeepers, service providers, and independent contractors.",
    taxRate: "Individual Slab Rates (up to 30%) + Surcharge & 4% Cess",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    type: "Partnership Firm",
    form: "ITR-5 Form",
    who: "Partnership firms registered under the Indian Partnership Act, 1932.",
    taxRate: "Flat 30% on Net Taxable Profits + 12% Surcharge (if income > ₹1 Cr) + 4% Cess",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    type: "Limited Liability Partnership (LLP)",
    form: "ITR-5 Form",
    who: "LLPs incorporated under the Limited Liability Partnership Act, 2008.",
    taxRate: "Flat 30% + Alternate Minimum Tax (AMT) under Section 115JC at 18.5%",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    type: "Private Limited Company",
    form: "ITR-6 Form",
    who: "Domestic companies incorporated under Companies Act, 2013.",
    taxRate: "22% (under Section 115BAA) or 25% (turnover ≤ ₹400 Cr) or 30% + Surcharge & Cess",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const AUDIT_THRESHOLDS = [
  {
    category: "Standard Business Entities",
    threshold: "Turnover exceeding ₹1 Crore",
    desc: "Mandatory tax audit under Section 44AB with Form 3CB-3CD filing by an independent Chartered Accountant in full-time practice.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    category: "Digital Business Transactions (≥ 95%)",
    threshold: "Turnover exceeding ₹10 Crores",
    desc: "If cash receipts and cash payments do not exceed 5% of total turnover/expenditure, the audit ceiling is expanded tenfold to ₹10 Crores.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    category: "Professional Practices (Section 44ADA)",
    threshold: "Gross receipts exceeding ₹50 Lakhs (or ₹75 Lakhs)",
    desc: "Applies to doctors, engineers, lawyers, architects, and technical consultants. The threshold is ₹75 Lakhs if cash receipts remain ≤ 5%.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    category: "Presumptive Businesses Declaring Lower Profits",
    threshold: "Turnover > Exemption limit & profit < 6%/8%",
    desc: "If a business opts out of Section 44AD and declares profit lower than deemed percentages while income exceeds basic exemption limits.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
];

const COMMON_MISTAKES = [
  { title: "Incorrect ITR Form Selection", desc: "Using ITR-1 or ITR-2 when having proprietary business income, or filing ITR-4 for an LLP which is legally prohibited." },
  { title: "GST vs. ITR Turnover Mismatch", desc: "Failing to reconcile annual gross turnover reported across monthly GSTR-1 returns with the sales figures declared in the ITR." },
  { title: "Unclaimed Form 26AS TDS Credits", desc: "Failing to cross-verify customer and client TDS deductions in Form 26AS/AIS, leading to unclaimed tax credits and higher tax dues." },
  { title: "Ignoring Advance Tax Installments", desc: "Failing to pay 15%, 45%, 75%, and 100% advance tax on time, which triggers mandatory penal interest under Sections 234B and 234C." },
  { title: "Disallowance of MSME Dues (Sec 43B(h))", desc: "Failing to clear payments to registered micro and small enterprises within 15/45 days, causing automatic disallowance and higher tax." },
  { title: "Failure to Conduct Mandatory Audit", desc: "Crossing turnover thresholds without obtaining a Tax Audit Report in Form 3CD, inviting steep penalties under Section 271B." },
];

const FAQ_COL_1 = [
  {
    q: "Is it mandatory for a business or company to file an Income Tax Return if it incurred a loss?",
    a: "Yes. Under Section 139(1) of the Income Tax Act, 1961, every registered Company and Limited Liability Partnership (LLP) must file an annual income tax return, even if it was dormant, had zero revenue, or incurred a substantial financial loss. For sole proprietorships and firms, filing is mandatory if gross income before deductions exceeds basic exemption limits, or if you wish to carry forward business losses to offset against future profits.",
  },
  {
    q: "What is the Presumptive Taxation Scheme under Section 44AD and 44ADA?",
    a: "The Presumptive Taxation Scheme allows eligible small businesses (Section 44AD) with turnover up to ₹2 Crores (₹3 Crores if cash receipts ≤ 5%) to declare income at a flat rate of 8% of turnover (reduced to 6% for payments received through banking/digital channels) without maintaining statutory accounting books. For specified professionals under Section 44ADA (gross receipts up to ₹50L/₹75L), taxable profit is deemed at 50% of gross receipts.",
  },
  {
    q: "When is a Tax Audit mandatory for a business under Section 44AB?",
    a: "A tax audit is mandatory if total annual sales, turnover, or gross receipts in business exceed ₹1 Crore in any financial year. However, if aggregate cash receipts and cash payments do not exceed 5% of total transactions (95% digital transactions), the tax audit threshold is elevated to ₹10 Crores. For professionals, the audit threshold is ₹50 Lakhs (or ₹75 Lakhs under digital compliance).",
  },
  {
    q: "What are the due dates for filing business income tax returns?",
    a: "For businesses and firms whose accounts are NOT subject to a tax audit, the due date is July 31 of the assessment year. For companies, LLPs, and businesses subject to a statutory tax audit under Section 44AB, the due date is October 31. For taxpayers required to submit transfer pricing Form 3CEB for international transactions, the due date is November 30.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the penalty if a business fails to file its ITR on time?",
    a: "Failing to file your business ITR by the statutory due date attracts a mandatory late fee under Section 234F of up to ₹5,000, along with monthly interest at 1% under Section 234A on any outstanding tax. Failure to conduct a mandatory tax audit under Section 44AB invites an additional penalty under Section 271B equal to 0.5% of total turnover, up to a maximum of ₹1,50,000.",
  },
  {
    q: "Can business losses be carried forward to subsequent financial years?",
    a: "Yes. Business losses (other than speculative losses) can be carried forward for up to 8 consecutive assessment years and set off against future business profits. Unabsorbed depreciation can be carried forward indefinitely. However, to preserve the right to carry forward losses, the business ITR MUST be filed on or before the due date under Section 139(3).",
  },
  {
    q: "How does Advance Tax work for businesses and self-employed professionals?",
    a: "If a business's total estimated tax liability (after adjusting TDS) exceeds ₹10,000 in a financial year, it must pay advance tax in four quarterly installments: 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. Small businesses opting for Section 44AD presumptive taxation can pay 100% of their advance tax in a single installment by March 15.",
  },
  {
    q: "What consequences can company directors face for non-filing of corporate ITR?",
    a: "Non-filing of corporate tax returns can lead to severe regulatory consequences: corporate bank accounts may be frozen, the company will be disqualified from government procurement tenders, and under severe prosecution provisions of Section 276CC, defaulting directors risk penalties and imprisonment of up to 7 years.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Which ITR form must a Private Limited Company or Public Company file?",
    a: "All domestic and foreign companies registered under the Companies Act must file Form ITR-6 electronically using a Digital Signature Certificate (DSC). The only exception is companies claiming tax exemptions under Section 11 (charitable/religious institutions), which must file Form ITR-7.",
  },
  {
    q: "What is the corporate tax rate for domestic companies in India?",
    a: "Under Section 115BAA, domestic companies can opt for a concessional base tax rate of 22% (effective tax rate of 25.17% including 10% surcharge and 4% cess) subject to foregoing certain exemptions/incentives. For companies not opting for Section 115BAA, the base tax rate is 25% if annual turnover was up to ₹400 Crores, or 30% if turnover exceeded ₹400 Crores, plus applicable surcharge and 4% cess.",
  },
  {
    q: "How to reconcile GST turnover with income tax return turnover?",
    a: "Businesses must cross-verify the aggregate turnover reported across all 12 monthly GSTR-1 and GSTR-3B filings with the gross revenue shown in the audited Profit and Loss account and ITR Schedule BP. Any variances due to unbilled revenue, advance receipts, credit notes, or financial year-end adjustments should be documented with a detailed reconciliation sheet to avoid scrutiny notices.",
  },
  {
    q: "Can a business file a revised return to correct inadvertent errors?",
    a: "Yes. Under Section 139(5), a business can file a Revised Return if it discovers any omission or wrong statement in the original return. The revised return must be filed before December 31 of the relevant Assessment Year, or before the completion of the assessment, whichever is earlier.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What is Section 43B(h) regarding payments to MSMEs?",
    a: "Introduced to protect micro and small enterprises, Section 43B(h) mandates that any sum payable by a business to a registered Micro or Small enterprise beyond the time limit specified in the MSMED Act (15 days where no written agreement exists, or maximum 45 days under written contract) will be disallowed as an expense in that financial year and added back to taxable income.",
  },
  {
    q: "Is TAN registration mandatory before deducting TDS on business payments?",
    a: "Yes. Every business entity (companies, LLPs, and audited proprietary firms) that is required to deduct tax at source (TDS) under Sections 194C (contractors), 194J (professional fees), 194I (rent), or 194Q (purchase of goods) must obtain a 10-digit Tax Deduction and Collection Account Number (TAN) from the IT Department before making deductions.",
  },
  {
    q: "What are Form 15CA and Form 15CB for foreign remittances?",
    a: "Form 15CA is an online declaration filed by the remitter before sending funds overseas. Form 15CB is a statutory certificate issued by an independent Chartered Accountant certifying the nature of the remittance, applicability of withholding tax (TDS), and Double Taxation Avoidance Agreement (DTAA) provisions.",
  },
  {
    q: "How does Merrafilings assist corporate and firm clients with tax filings?",
    a: "Merrafilings assigns dedicated senior Chartered Accountants to compile statutory financial statements, optimize Section 40(b) partner remuneration, review fixed asset depreciation under Section 32, file Form 3CB-3CD tax audit reports, reconcile GST vs. ITR turnover, and provide continuous scrutiny notice defense.",
  },
];

const RELATED_GUIDES = [
  {
    title: "ITR Filing for Small Business Online in India",
    href: "/business-itr-filing/itr-for-small-business",
  },
  {
    title: "Presumptive Taxation Scheme for Business in India",
    href: "/business-itr-filing/presumptive-taxation-scheme-business",
  },
  {
    title: "ITR for Business Income Filing in India Online",
    href: "/business-itr-filing/itr-for-business-income",
  },
  {
    title: "Business ITR Form Types for Every Entity in India",
    href: "/business-itr-filing/business-itr-types",
  },
  {
    title: "Business ITR Filing Process Guide for Success",
    href: "/business-itr-filing/business-tax-filing-guide-for-success",
  },
];

const RELATED_SERVICES_TAGS = [
  "ITR-4 Sugam",
  "ITR-5 Partnership / LLP",
  "ITR-6 Company",
  "Section 44AB Tax Audit",
  "Form 3CA 3CD",
  "Advance Tax Computation",
  "TDS Reconciliation",
  "Corporate Tax Advisory",
];

const POPULAR_SEARCHES_TAGS = [
  "business itr filing online",
  "section 44ad presumptive taxation 6% 8%",
  "section 44ab tax audit 10 crore limit",
  "corporate tax rate 22 percent 115baa",
  "advance tax quarterly due dates",
  "form 3cd tax audit report filing",
  "carry forward business loss 8 years",
  "penalty section 271b tax audit",
];

function BusinessItrGuideContent() {
  return (
    <div className="space-y-12 text-slate-800">
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Business &amp; Corporate Income Tax Filing in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Every commercial entity operating in India—from sole proprietorships and micro-enterprises to partnership firms, LLPs, and Private Limited companies—is governed by strict statutory income tax filing mandates under the Income Tax Act, 1961. Filing business tax returns establishes creditworthiness, validates statutory deductions, reconciles GST invoices, and shields directors and partners from severe non-compliance penalties.
        </p>
      </section>

      {/* Section 2: Entity Types & Forms (4 Color-Matched Cards) */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Business Entity Classification &amp; Applicable ITR Forms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
          {BUSINESS_ENTITIES.map((ent, idx) => (
            <div
              key={idx}
              className={`group p-5.5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${ent.cardHover} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${ent.iconBox}`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold text-slate-900 transition-colors ${ent.titleHover}`}>
                    {ent.type}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    Form: {ent.form}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-[13px] text-slate-600 pt-2 border-t border-slate-100">
                <p>
                  <strong className="text-slate-800 font-semibold">Scope of Operations:</strong> {ent.who}
                </p>
                <p className="text-slate-700">
                  <strong className="text-slate-900 font-semibold">Statutory Tax Rate:</strong> {ent.taxRate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Presumptive Taxation Deep Dive */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Presumptive Taxation Schemes: Sections 44AD, 44ADA &amp; 44AE
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Designed specifically to unburden small businesses and professionals from maintaining complex statutory accounting ledgers, the Presumptive Taxation Scheme permits declaring deemed taxable income directly as a percentage of gross turnover or receipts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl border border-blue-200/90 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 group">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mb-3 w-fit">
              <BadgePercent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">Section 44AD (Businesses)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-3">
              Applies to eligible businesses with turnover up to ₹2 Crores (extended to ₹3 Crores if cash receipts ≤ 5%). Income is deemed at 8% of turnover (reduced to 6% for payments received through digital/banking modes).
            </p>
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Zero Books of Account Needed
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-purple-200/90 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 group">
            <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 mb-3 w-fit">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-purple-700 transition-colors">Section 44ADA (Professionals)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-3">
              Covers specified professionals (doctors, engineers, IT consultants, architects, lawyers, accountants) with gross receipts up to ₹50 Lakhs (elevated to ₹75 Lakhs if cash receipts remain ≤ 5%). Profit is deemed at 50% of receipts.
            </p>
            <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
              50% Statutory Expense Allowance
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-200/90 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-300 group">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-3 w-fit">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">Section 44AE (Goods Transporters)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-3">
              Exclusively for small logistics operators engaged in plying, hiring, or leasing goods carriages who own not more than 10 goods vehicles at any time during the year. Profit is deemed at fixed rates per ton/vehicle.
            </p>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Fixed Per-Vehicle Income Rates
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: Section 44AB Tax Audit Thresholds (4 Color-Matched Cards) */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Section 44AB Tax Audit Criteria &amp; Applicability Rules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
          {AUDIT_THRESHOLDS.map((aud, idx) => (
            <div
              key={idx}
              className={`group p-5.5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${aud.cardHover} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${aud.iconBox}`}>
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold text-slate-900 transition-colors ${aud.titleHover}`}>
                    {aud.category}
                  </h3>
                  <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
                    Threshold: {aud.threshold}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Advance Tax Schedule & Deadlines */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Advance Tax Payment Schedule &amp; Filing Calendar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Advance Tax Installments */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-bold text-slate-900 text-sm">
              Quarterly Advance Tax Payment Slabs
            </div>
            <div className="p-4 space-y-3 text-xs sm:text-[13px] text-slate-700">
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>1st Installment (On or before June 15):</span>
                <strong className="text-blue-700 font-semibold">15% of estimated tax</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>2nd Installment (On or before Sept 15):</span>
                <strong className="text-emerald-700 font-semibold">45% of estimated tax</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>3rd Installment (On or before Dec 15):</span>
                <strong className="text-purple-700 font-semibold">75% of estimated tax</strong>
              </div>
              <div className="flex justify-between">
                <span>4th Installment (On or before March 15):</span>
                <strong className="text-amber-700 font-semibold">100% of estimated tax</strong>
              </div>
            </div>
          </div>

          {/* Business Filing Calendar */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-bold text-slate-900 text-sm">
              Official Business ITR Filing Due Dates
            </div>
            <div className="p-4 space-y-3 text-xs sm:text-[13px] text-slate-700">
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Proprietorships &amp; Firms (Non-Audit):</span>
                <strong className="text-blue-700 font-semibold">31st July 2026</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Tax Audit Entities (Firms, LLPs, Companies):</span>
                <strong className="text-purple-700 font-semibold">31st October 2026</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span>Transfer Pricing Cases (Form 3CEB):</span>
                <strong className="text-amber-700 font-semibold">30th November 2026</strong>
              </div>
              <div className="flex justify-between">
                <span>Belated &amp; Revised Business Returns:</span>
                <strong className="text-slate-900 font-semibold">31st December 2026</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Common Mistakes to Avoid */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Critical Mistakes to Avoid in Business ITR Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMON_MISTAKES.map((item, idx) => (
            <div key={idx} className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 mb-2 text-rose-600 font-bold text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Essential Financial Records Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Mandatory Financial Documentation Checklist for Businesses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Financial Statements:</strong>
            <span>Statutory Balance Sheet, Profit &amp; Loss Statement, Trial Balance, and Depreciation Schedule under Section 32.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">GST &amp; Inward Reconciliations:</strong>
            <span>GSTR-1 and GSTR-3B filed returns, e-way bill logs, and GSTR-9 annual return reconciliation statements.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Tax Credit Statements:</strong>
            <span>Form 26AS, AIS/TIS showing customer TDS deductions under Section 194C, 194J, 194H, and TCS under 206C.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Banking &amp; Loan Records:</strong>
            <span>Annual bank statements for all current accounts, OD/CC sanction letters, and interest certificates.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Statutory Payment Challans:</strong>
            <span>Advance tax payment receipts, self-assessment tax challans, and proof of timely EPF/ESI remittances under Sec 43B.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Digital Signature Certificate:</strong>
            <span>Valid Class 3 Digital Signature Certificate (DSC) of the authorized director or designated partner for signing.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BusinessItrFilingPage() {
  return (
    <ServicePageTemplate
      badgeText="Statutory Corporate & Firm Tax Compliance AY 2026-27"
      heroTitle={
        <>
          <span>File Your </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Business Income Tax Return Online
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="File your business income tax return online with dedicated Chartered Accountants. Complete corporate tax compliance for Proprietorships, LLPs, Firms, and Companies with balance sheet preparation, Section 44AB audit assistance, and deduction optimization."
      formTitle="Business ITR Advisory Desk"
      formSubtitle="Connect with our corporate tax team for balance sheet drafting, Section 44AB audit reviews, and complete tax savings advisory."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">corporate tax filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for presumptive ITR-4 filing, CA-assisted corporate return, or complete annual tax audit management."
      breadcrumbCurrent="Business ITR Filing"
      guideTitle="Comprehensive Guide to Business & Corporate Income Tax Return Filing in India - AY 2026-27"
      guideContent={<BusinessItrGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about business tax filing, Section 44AD/ADA presumptive rules, Section 44AB audit thresholds, and corporate tax rates."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
