"use client";

import React, { useState } from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
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
  Store,
  Truck,
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Calculator,
  Calendar,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Mandatory Filing under Section 44 of CGST Act for Regular Taxpayers" },
  { icon: <Calculator className="w-4 h-4" />, text: "Automated GSTR-1, GSTR-3B & GSTR-2B Yearly Data Reconciliation" },
  { icon: <FileText className="w-4 h-4" />, text: "Preparation of GSTR-9 (19 Tables) & Self-Certified GSTR-9C (> ₹5 Cr)" },
  { icon: <Receipt className="w-4 h-4" />, text: "Table 8 ITC Matching to Eliminate Ineligible Credit Scrutiny Notices" },
  { icon: <Scale className="w-4 h-4" />, text: "Expert Chartered Accountant Review with DRC-03 Voluntary Tax Advisory" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Standard GSTR-9 Annual Return",
    shortDesc: "Annual return preparation and portal filing for regular taxpayers with turnover up to ₹2 Crore.",
    expandedDesc: "Complete preparation of Form GSTR-9 based on monthly filed GSTR-1 and GSTR-3B data. Includes auto-populated data verification, consolidation of outward taxable supplies, basic Input Tax Credit (ITC) reconciliation, HSN-wise summary preparation, and portal submission with acknowledgment.",
    price: "₹4,988",
    priceSub: "Flat Professional Fee / Financial Year",
    badge: "SME Package",
    features: [
      "Preparation of Form GSTR-9 (Parts I to VI)",
      "Auto-Populated Portal Data Verification",
      "Consolidation of 12 Months GSTR-1 & GSTR-3B Data",
      "Basic Table 6 & Table 8 ITC Matching",
      "HSN Summary Preparation for Outward Supplies",
      "Computation of Additional Liabilities (DRC-03)",
      "DSC or Aadhaar EVC Electronic Portal Filing",
      "Assigned Tax Professional Support",
    ],
  },
  {
    name: "Comprehensive GSTR-9 Filing",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Detailed table-by-table reconciliation and filing for businesses with turnover between ₹2 Cr and ₹5 Cr.",
    expandedDesc: "Complete mathematical reconciliation between annual books of accounts, sales registers, purchase registers, monthly GSTR-1, and GSTR-3B returns. Includes deep Table 8 GSTR-2B credit cross-matching, Table 10-14 amendments adjustments, computation of interest, and filing by senior CAs.",
    price: "₹9,899",
    priceSub: "Complete Reconciliation & Compliance",
    features: [
      "Everything in Standard GSTR-9 Package",
      "Detailed 12-Month Books vs GSTR-1 & 3B Reconciliation",
      "In-Depth Table 8 ITC Mismatch & Reversal Diagnosis",
      "Table 10 to 14 Prior Financial Year Adjustments",
      "HSN/SAC Code Scrutiny for Goods & Services",
      "Voluntary Tax Clearance via Form DRC-03",
      "Handling Departmental Scrutiny Warnings",
      "Dedicated Senior Chartered Accountant (CA) Review",
    ],
  },
  {
    name: "GSTR-9 + GSTR-9C Enterprise Suite",
    shortDesc: "End-to-end annual return + self-certified reconciliation statement for large businesses (> ₹5 Crore).",
    expandedDesc: "Designed for corporate enterprises with annual turnover exceeding ₹5 Crores. Covers exhaustive preparation of Form GSTR-9 and Form GSTR-9C (Reconciliation Statement), reconciling audited financial statements with portal declarations, Table 14 expense-wise credit analysis, and full board presentation.",
    price: "₹19,899",
    priceSub: "Mandatory for Turnover > ₹5 Crore",
    badge: "Enterprise Suite",
    features: [
      "Complete Form GSTR-9 Annual Return Preparation",
      "Preparation of Form GSTR-9C (Reconciliation Statement)",
      "Audited Financials (P&L & Balance Sheet) vs GST Reconciliation",
      "Reconciliation of Gross Turnover, Taxable Value & Tax Rate",
      "Expense-Wise ITC Analysis & RCM Liability Verification",
      "Self-Certification Advisory as per CGST Rules",
      "Resolution of Unreconciled Differences in Table 6 & Table 14",
      "Direct Senior CA Partner Consultation & Representation",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "What is Form GSTR-9 and who is legally required to file it?",
    a: "Form GSTR-9 is an annual return mandated under Section 44 of the CGST Act, 2017. It consolidates all monthly or quarterly returns (GSTR-1, GSTR-3B) filed during a financial year. It is mandatory for all regular GST taxpayers whose aggregate annual turnover exceeds ₹2 Crore. Taxpayers with turnover up to ₹2 Crore have the option to file voluntarily, which is recommended to close audit trails cleanly.",
  },
  {
    q: "What is the official due date for filing GSTR-9 and GSTR-9C?",
    a: "Under the CGST Act, the statutory due date for filing Form GSTR-9 and Form GSTR-9C is 31st December of the subsequent financial year (e.g., for FY 2025-26, the due date is 31st December 2026). While the government may grant extensions through CBIC notifications during system upgrades, filing well before December avoids server congestion and daily late fees.",
  },
  {
    q: "What are the four subcategories under GSTR-9 annual returns?",
    a: "There are four distinct annual return forms: (1) Form GSTR-9 for regular taxpayers; (2) Form GSTR-9A for taxpayers who opted for the Composition Scheme; (3) Form GSTR-9B for e-commerce operators collecting TCS under Section 52; and (4) Form GSTR-9C, which is a self-certified reconciliation statement for taxpayers with aggregate turnover exceeding ₹5 Crores.",
  },
  {
    q: "Can I revise Form GSTR-9 once it has been submitted on the GST portal?",
    a: "No. The GST Common Portal does not allow revision of Form GSTR-9 or GSTR-9C once submitted. Any omission, error, or incorrect figure entered becomes permanently locked. Therefore, taxpayers must thoroughly reconcile sales registers, purchase books, and electronic ledgers before generating the draft preview and clicking the final submit button.",
  },
  {
    q: "What is the penalty and late fee structure for delayed GSTR-9 filing?",
    a: "Under Section 47(2) of the CGST Act, late fees are tiered based on annual turnover: (1) For turnover up to ₹5 Cr: ₹50 per day (₹25 CGST + ₹25 SGST), capped at 0.04% of turnover; (2) For turnover ₹5 Cr to ₹20 Cr: ₹100 per day (₹50 CGST + ₹50 SGST), capped at 0.04% of turnover; (3) For turnover above ₹20 Cr: ₹200 per day (₹100 CGST + ₹100 SGST), capped at 0.50% of turnover.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is Form GSTR-9C and is a Chartered Accountant's certification still mandatory?",
    a: "Form GSTR-9C is a reconciliation statement that reconciles the figures reported in GSTR-9 with the taxpayer's audited annual financial statements (Balance Sheet and Profit & Loss Account). Applicable to taxpayers with turnover exceeding ₹5 Crore, GSTR-9C was amended from FY 2020-21 onwards to allow self-certification by the taxpayer, meaning a separate physical CA certification stamp is no longer mandatory, although CA review is vital.",
  },
  {
    q: "Can I claim additional Input Tax Credit (ITC) through Form GSTR-9?",
    a: "No. You cannot claim any unclaimed Input Tax Credit through Form GSTR-9. Any eligible ITC for a financial year must be claimed in monthly GSTR-3B returns up to the statutory deadline (30th November of the subsequent fiscal year). GSTR-9 is strictly a reporting and reconciliation statement, not a credit-claiming mechanism.",
  },
  {
    q: "How can I pay additional tax liability discovered during GSTR-9 preparation?",
    a: "If your annual reconciliation reveals unpaid tax, short payment, or excess ITC availed, you must pay the differential tax along with mandatory 18% annual interest under Section 50. This payment cannot be adjusted in GSTR-9 directly; it must be paid in cash using Form GST DRC-03 under the 'Annual Return' cause code.",
  },
  {
    q: "Who is exempt from filing GSTR-9 annual returns?",
    a: "Under Section 44(1) of the CGST Act, the following categories are exempt from filing GSTR-9: (1) Input Service Distributors (ISD); (2) Casual Taxable Persons; (3) Non-Resident Taxable Persons (NRTP); (4) Persons deducting tax at source under Section 51 (TDS); and (5) Persons collecting tax at source under Section 52 (TCS, who file GSTR-9B instead).",
  },
  {
    q: "Why should businesses with turnover below ₹2 Crore file GSTR-9 voluntarily?",
    a: "While GSTR-9 is optional for businesses with turnover up to ₹2 Crore, filing it voluntarily establishes a verified annual tax ledger. Banks and financial institutions routinely require filed GSTR-9 returns as audited turnover proof for working capital loans, trade credit limits, and government tender participation.",
  },
];

const RELATED_GUIDES = [
  {
    title: "GST Annual Return Filing (GSTR-9 & GSTR-9C) Complete Guide",
    href: "/gst-annual-return",
  },
  {
    title: "GST Return Filing by Accountants: Form GSTR-1, 3B & Reconciliation",
    href: "/gst-return-filing",
  },
  {
    title: "GST Notice Reply & Legal Response Solutions in India",
    href: "/gst-notice",
  },
  {
    title: "GST Registration Online: Step-by-Step Procedure & Documentation",
    href: "/gst-registration",
  },
  {
    title: "GST Letter of Undertaking (LUT) Filing for Zero-Rated Exports",
    href: "/gst-lut",
  },
  {
    title: "GST Registration for Foreigners & Non-Resident Taxable Persons",
    href: "/gst-registration-for-foreigners",
  },
];

const RELATED_SERVICES_TAGS = [
  "GSTR-9 Annual Return",
  "GSTR-9C Reconciliation",
  "GSTR-9A Composition",
  "GST Annual Audit",
  "Form DRC-03 Tax Payment",
  "Table 8 ITC Matching",
  "HSN Annual Summary",
  "Late Fee Waiver",
];

const POPULAR_SEARCHES_TAGS = [
  "gstr 9 due date 2026",
  "how to file gstr 9 annual return online",
  "gstr 9 turnover limit 2 crore",
  "gstr 9c applicability 5 crore",
  "penalty for late filing gstr 9",
  "difference between gstr 9 and gstr 9c",
  "table 8 itc reconciliation gstr 9",
  "gstr 9 format 19 tables pdf",
];

function GstAnnualReturnGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          The <strong className="font-semibold text-slate-950">GST Annual Return (Form GSTR-9)</strong> is the comprehensive yearly compliance statement governed under <strong className="font-semibold text-slate-950">Section 44 of the Central Goods and Services Tax (CGST) Act, 2017</strong> and Rule 80 of the CGST Rules, 2017. It consolidates all monthly or quarterly returns filed throughout the financial year, covering outward supplies, inward supplies, input tax credit availed, taxes paid, and refund claims.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing GSTR-9 accurately is the final opportunity for registered taxpayers to reconcile sales turnover, correct tax rate classifications, reverse ineligible Input Tax Credit, and clear outstanding liabilities before annual departmental scrutiny. For taxpayers whose aggregate turnover exceeds ₹5 Crores, submitting the self-certified <strong className="font-semibold text-slate-950">Form GSTR-9C Reconciliation Statement</strong> is an additional statutory mandate.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Annual Return Regulatory Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Mandatory Threshold (GSTR-9)</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Turnover &gt; ₹2.00 Crores</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Reconciliation Threshold (GSTR-9C)</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Turnover &gt; ₹5.00 Crores</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Annual Due Date</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">31st December Post-FY</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Types of GSTR-9 Returns */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Subcategories of GST Annual Returns (GSTR-9, 9A, 9B, 9C)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The GST legal framework prescribes four distinct annual return formats tailored to specific taxpayer categories and business operational models:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Form</th>
                <th className="py-3 px-4">Taxpayer Applicability</th>
                <th className="py-3 px-4">Statutory Threshold</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Core Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form GSTR-9</td>
                <td className="py-3 px-4 text-slate-800">Regular GST Taxpayers / SEZ Units</td>
                <td className="py-3 px-4 text-slate-900">Mandatory &gt; ₹2 Cr (Optional ≤ ₹2 Cr)</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Consolidated Annual Return</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form GSTR-9A</td>
                <td className="py-3 px-4 text-slate-800">Composition Scheme Dealers</td>
                <td className="py-3 px-4 text-slate-900">All Composition Taxpayers</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Annual Summary of Quarterly CMP-08</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form GSTR-9B</td>
                <td className="py-3 px-4 text-slate-800">Electronic Commerce Operators</td>
                <td className="py-3 px-4 text-slate-900">All Operators Collecting TCS</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Annual Statement of Section 52 TCS</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form GSTR-9C</td>
                <td className="py-3 px-4 text-slate-800">Large Taxpayers</td>
                <td className="py-3 px-4 text-slate-900">Mandatory &gt; ₹5.00 Crores</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Reconciliation with Audited Financials</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Anatomy of GSTR-9 (6 Parts & 19 Tables) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Anatomy of Form GSTR-9: 6 Parts &amp; 19 Tables Explained
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Form GSTR-9 is structured into 6 comprehensive parts containing 19 tables that record every dimension of your fiscal transactions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Part I (Tables 1 to 3) — Basic Profile:</strong>
            Auto-populated with financial year, GSTIN, legal registered name, trade name, and authorized signatory details.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Part II (Tables 4 &amp; 5) — Outward Supplies:</strong>
            Table 4 captures outward supplies on which tax is payable (B2B, B2C, zero-rated exports, reverse charge). Table 5 details exempt, nil-rated, and non-GST turnover.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Part III (Tables 6 to 8) — ITC Reconciliations:</strong>
            Table 6 details ITC availed via GSTR-3B bifurcated into inputs, capital goods, and input services. Table 7 records reversals under Rules 37, 42 &amp; 43. Table 8 compares credit with GSTR-2B.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Part IV (Table 9) — Tax Paid as Declared:</strong>
            Summarizes total tax payable versus actual tax paid through Electronic Cash Ledger and Electronic Credit Ledger across CGST, SGST, IGST, and Cess.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Part V (Tables 10 to 14) — Prior FY Adjustments:</strong>
            Captures additions, amendments, credit notes, and debit notes of the previous financial year declared in returns filed up to 30th November of the following year.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Part VI (Tables 15 to 19) — Demands &amp; HSN:</strong>
            Details GST refund claims, departmental demands, HSN-wise summaries of outward and inward supplies, and late fee liabilities payable upon filing.
          </div>
        </div>
      </section>

      {/* Section 3: GSTR-9 vs GSTR-9C */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Comparative Analysis: GSTR-9 vs GSTR-9C
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Form GSTR-9</th>
                <th className="py-3 px-4">Form GSTR-9C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Statutory Nature</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Consolidated Annual Tax Return</td>
                <td className="py-3 px-4 text-slate-800">Reconciliation Statement</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Applicability Threshold</td>
                <td className="py-3 px-4 text-slate-900">Mandatory for Turnover &gt; ₹2 Crore</td>
                <td className="py-3 px-4 font-semibold text-indigo-950">Mandatory for Turnover &gt; ₹5 Crore</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Primary Benchmark</td>
                <td className="py-3 px-4 text-slate-900">Aggregates monthly GSTR-1 &amp; GSTR-3B</td>
                <td className="py-3 px-4 text-slate-900">Reconciles GSTR-9 with Audited Financials</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Certification Mode</td>
                <td className="py-3 px-4 text-slate-900">Self-certified by Authorized Signatory</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Self-certified by Taxpayer (w.e.f. FY 2020-21)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Submission Dependency</td>
                <td className="py-3 px-4 text-slate-900">Filed independently on GST Portal</td>
                <td className="py-3 px-4 text-slate-900">Can only be filed AFTER GSTR-9 is submitted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Late Fees */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Late Fees &amp; Penal Provisions Under Section 47(2)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Failing to submit Form GSTR-9 on or before the 31st December statutory deadline triggers automated daily late fees calculated based on the taxpayer&apos;s annual aggregate turnover:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Turnover Bracket</th>
                <th className="py-3 px-4">Daily Late Fee (CGST + SGST)</th>
                <th className="py-3 px-4">Maximum Capped Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Turnover up to ₹5.00 Crores</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">₹50 / day (₹25 CGST + ₹25 SGST)</td>
                <td className="py-3 px-4 text-slate-800">0.04% of state/UT turnover</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Turnover between ₹5 Cr &amp; ₹20 Cr</td>
                <td className="py-3 px-4 font-semibold text-indigo-950">₹100 / day (₹50 CGST + ₹50 SGST)</td>
                <td className="py-3 px-4 text-slate-800">0.04% of state/UT turnover</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Turnover exceeding ₹20.00 Crores</td>
                <td className="py-3 px-4 font-semibold text-rose-700">₹200 / day (₹100 CGST + ₹100 SGST)</td>
                <td className="py-3 px-4 text-slate-800">0.50% of state/UT turnover</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Step-by-Step Portal Filing */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Step-by-Step Walkthrough: Filing Form GSTR-9 on the GST Portal
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 1 — Sign In &amp; Access Returns:</strong>
            Log into <code className="text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">gst.gov.in</code>. Navigate via: <strong className="font-semibold text-slate-950">Services &gt; Returns &gt; Annual Return</strong>. Select the relevant Financial Year.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 2 — Download Auto-Drafted PDF Summary:</strong>
            Download the system-computed GSTR-9 PDF and GSTR-2B summary generated by GSTN from filed GSTR-1 and GSTR-3B returns.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 3 — Reconcile Books with Table Data:</strong>
            Cross-check sales registers with Table 4 (Taxable Supplies) and Table 5 (Exempt Supplies). Verify ITC availed in Table 6 against audited ledgers and record reversals in Table 7.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 4 — Settle Discrepancies via Form DRC-03:</strong>
            If differential tax liability arises due to un-reported outward supplies or excess ITC availed, discharge the liability voluntarily via Form GST DRC-03 in cash.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 5 — Preview Draft, Compute Liabilities &amp; File:</strong>
            Click &quot;Compute Liabilities&quot; to calculate applicable late fees. Preview the draft PDF, verify all 19 tables, and sign electronically using Class 3 DSC or Aadhaar EVC.
          </div>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Seamless Annual GST Return Compliance with Merrafilings
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Because Form GSTR-9 cannot be revised after submission, errors in turnover reporting or Table 8 credit matching frequently trigger departmental scrutiny notices (ASMT-10) and interest demands under Section 50.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings assigns qualified Chartered Accountants and senior GST practitioners to manage your annual compliance. We reconcile your books of accounts with 12 months of GSTR-1 and GSTR-3B filings, resolve GSTR-2B mismatches, prepare self-certified GSTR-9C reconciliation statements, and secure timely portal filing well before the December deadline.
        </p>
      </section>
    </div>
  );
}

export default function GstAnnualReturnPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 44 CGST Act, 2017 & Rule 80 Annual Return Compliance"
      heroTitle={
        <>
          <span>Annual Compliance Made Easy – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Annual Return
          </span>{" "}
          <span>(GSTR-9 &amp; 9C)</span>
        </>
      }
      heroSubtitle="File your Form GSTR-9 annual return and GSTR-9C reconciliation statement accurately and on time. Consolidate 12 months of GSTR-1, GSTR-3B, and GSTR-2B credit ledgers with expert Chartered Accountant review to eliminate scrutiny notices and late fees."
      formTitle="GSTR-9 Annual Return Desk"
      formSubtitle="Consult our senior tax practitioners for comprehensive 12-month book reconciliation, Table 8 credit analysis, and fast-track portal filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Fixed{" "}
          <span className="font-normal text-[#00B074]">GST annual filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for standard GSTR-9 preparation, detailed table-by-table reconciliation, or enterprise GSTR-9 + GSTR-9C audit suites."
      breadcrumbCurrent="GST Annual Return"
      guideTitle="Comprehensive Guide to GST Annual Return Filing (GSTR-9 & GSTR-9C) - Formats, Limits, Penalties & Procedure"
      guideContent={<GstAnnualReturnGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about GSTR-9 turnover limits, GSTR-9C self-certification, Table 8 credit mismatches, and December due dates."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
