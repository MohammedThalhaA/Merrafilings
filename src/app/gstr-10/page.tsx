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
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Calculator,
  Calendar,
  XCircle,
  Boxes,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Mandatory Final Return under Section 45 of CGST Act & Rule 81" },
  { icon: <Clock className="w-4 h-4" />, text: "Filing within 3 Months from Cancellation Order to Avoid ₹200/Day Late Fee" },
  { icon: <Calculator className="w-4 h-4" />, text: "Automated Closing Stock Valuation & Rule 44 ITC Reversal Computation" },
  { icon: <Boxes className="w-4 h-4" />, text: "Inputs, Semi-Finished Goods & Capital Machinery ITC Reversal Ledger" },
  { icon: <Scale className="w-4 h-4" />, text: "Chartered Accountant Certification & Protection against Section 62 Best Judgement" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Nil GSTR-10 Final Return",
    shortDesc: "One-time final return filing for cancelled businesses holding zero closing stock or capital assets.",
    expandedDesc: "Complete final return preparation and portal filing for taxpayers whose GSTIN has been cancelled or surrendered, having zero stock of inputs, semi-finished goods, finished goods, or capital assets as on the cancellation date. Includes cancellation order verification and submission with ARN confirmation.",
    price: "₹1,499",
    priceSub: "Flat Professional Fee (Zero Stock)",
    badge: "Nil Return",
    features: [
      "Verification of Cancellation Order (Form GST REG-19)",
      "Zero Stock Declaration Verification",
      "Preparation of Form GSTR-10 on GST Common Portal",
      "Drafting Nil Closing Inventory Schedules",
      "Electronic Verification using DSC or Aadhaar EVC",
      "Application Reference Number (ARN) Generation",
      "Permanent Registration Closure Confirmation",
      "Dedicated Tax Professional Assistance",
    ],
  },
  {
    name: "Standard GSTR-10 with Stock & ITC Reversal",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Comprehensive stock inventory valuation, Rule 44 ITC reversal calculation, and portal tax discharge.",
    expandedDesc: "Essential for cancelled businesses holding closing inventory of raw materials, work-in-progress, finished products, or plant and machinery. Includes itemized stock valuation, computing mandatory Section 29(5) / Rule 44 credit reversal, challan generation, and senior Chartered Accountant review.",
    price: "₹3,499",
    priceSub: "Stock Valuation & Rule 44 Reversal",
    features: [
      "Everything in Nil GSTR-10 Package",
      "Item-Wise Closing Inventory Compilation",
      "Valuation of Inputs, Semi-Finished & Finished Goods",
      "Calculation of Capital Goods ITC Reversal (Rule 44)",
      "Comparison: Higher of Availed ITC vs Output Tax",
      "Electronic Cash / Credit Ledger Tax Discharge",
      "Handling GSTR-3A Departmental Notice Discrepancies",
      "Senior Chartered Accountant (CA) Review & Sign-Off",
    ],
  },
  {
    name: "Complete GST Surrender & GSTR-10 Suite",
    shortDesc: "End-to-end service: voluntary GST cancellation application (REG-16) + final GSTR-10 return closure.",
    expandedDesc: "Designed for businesses seeking complete, orderly closure of their GSTIN. Covers filing voluntary cancellation in Form GST REG-16, handling officer clarifications (Form GST REG-17), obtaining the final cancellation order (Form GST REG-19), and filing the GSTR-10 final return with CA asset certification.",
    price: "₹6,999",
    priceSub: "End-to-End Cancellation & Final Closure",
    badge: "Enterprise Suite",
    features: [
      "Voluntary Cancellation Filing (Form GST REG-16)",
      "Preparation of Closure Reason & Supporting Documents",
      "Handling Departmental Queries & Field Verifications",
      "Securing Cancellation Order (Form GST REG-19)",
      "Exhaustive Closing Stock & Asset Inventory Audit",
      "Form GSTR-10 Final Return Preparation & Filing",
      "Chartered Accountant Asset & Tax Clearance Certificate",
      "Final Permanent Closure & No-Dues Protection",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "What is Form GSTR-10 and who is legally required to file it?",
    a: "Form GSTR-10 is the mandatory 'Final Return' under GST, governed by Section 45 of the CGST Act, 2017 read with Rule 81 of the CGST Rules, 2017. It must be filed by every registered taxpayer whose GST registration has been cancelled (whether suo-moto by the tax officer or voluntarily surrendered by the taxpayer). It is a one-time final statement to settle closing inventory tax credits and liabilities.",
  },
  {
    q: "How does GSTR-10 differ from the GSTR-9 Annual Return?",
    a: "GSTR-9 is a recurring annual return filed every financial year by active taxpayers with turnover exceeding ₹2 Crores. In contrast, GSTR-10 is a one-time 'Final Return' filed only once when a registration is officially cancelled or surrendered, declaring closing stocks held on the cancellation date and reversing eligible tax credits.",
  },
  {
    q: "What is the statutory due date for filing GSTR-10?",
    a: "Under Section 45, GSTR-10 must be filed within three months from the date of the cancellation order or the effective date of cancellation, whichever is later. For example, if a cancellation order is issued on 1st October with effective cancellation from 15th October, the return must be filed within three months from 15th October.",
  },
  {
    q: "What is the penalty and late fee for late filing of GSTR-10?",
    a: "Under Section 47 of the CGST Act, late filing of GSTR-10 attracts a statutory late fee of ₹200 per day (₹100 CGST + ₹100 SGST) from the day following the due date until the actual date of filing. Unlike regular returns, the normal provisions contain no statutory maximum cap unless a specific amnesty notification is announced.",
  },
  {
    q: "Which categories of taxpayers are exempt from filing GSTR-10?",
    a: "The following taxpayers are exempt from filing GSTR-10: (1) Input Service Distributors (ISD); (2) Non-Resident Taxable Persons (NRTP); (3) Composition Scheme taxpayers registered under Section 10; (4) Persons deducting tax at source (TDS) under Section 51; (5) Persons collecting tax at source (TCS) under Section 52; and (6) Overseas OIDAR service providers.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the mandatory ITC reversal requirement under Section 29(5)?",
    a: "Under Section 29(5) read with Rule 44, a taxpayer whose registration is cancelled must pay an amount equal to the higher of: (1) The Input Tax Credit availed on inputs held in stock, inputs contained in semi-finished/finished goods, and capital goods (reduced by 5% per quarter of use); OR (2) The output tax payable on the open market value of such goods on the effective cancellation date.",
  },
  {
    q: "What happens if a taxpayer fails to file GSTR-10 after receiving a notice?",
    a: "If GSTR-10 is not filed within the 3-month window, the GST officer issues a notice in Form GSTR-3A giving 15 days to file the return. If the taxpayer still defaults, the officer can proceed to pass a 'Best Judgement Assessment' order under Section 62, assessing tax liability based on available records along with interest and 100% penalty.",
  },
  {
    q: "Can I file GSTR-10 if my business had zero stock on the cancellation date?",
    a: "Yes. Even if your business holds zero inventory, raw materials, or capital assets, filing a 'Nil' GSTR-10 return is legally compulsory. Failing to submit the Nil return still triggers the ₹200 per day late fee and leaves your GSTIN closure technically incomplete.",
  },
  {
    q: "Can I apply for revocation of cancellation after filing GSTR-10?",
    a: "No. Filing GSTR-10 signifies the permanent final closure of the GSTIN. If your registration was cancelled suo-moto by an officer and you wish to restore it, you must apply for GST Revocation (Form GST REG-21) BEFORE filing GSTR-10. Once GSTR-10 is accepted, the registration cannot be revived.",
  },
  {
    q: "How does Merrafilings assist with GSTR-10 final return filing?",
    a: "Merrafilings manages complete final closure: compiling stock schedules, computing Rule 44 capital goods depreciation and ITC reversal, preparing Form GSTR-10 on the portal, generating tax challans, and providing Chartered Accountant sign-off to ensure complete legal protection against Section 62 assessment orders.",
  },
];

const RELATED_GUIDES = [
  {
    title: "GST Registration Revocation: Restore Cancelled GSTIN Online",
    href: "/gst-revocation",
  },
  {
    title: "GST Registration Amendment Online: Update Core & Non-Core Details",
    href: "/gst-amendment",
  },
  {
    title: "Virtual Office Online for GST & MCA Company Registration",
    href: "/virtual-office",
  },
  {
    title: "GST Notice Reply & Legal Response Solutions in India",
    href: "/gst-notice",
  },
  {
    title: "GST Annual Return Filing (GSTR-9 & GSTR-9C) Complete Guide",
    href: "/gst-annual-return",
  },
  {
    title: "GST Return Filing by Accountants: Form GSTR-1 & 3B",
    href: "/gst-return-filing",
  },
];

const RELATED_SERVICES_TAGS = [
  "GSTR-10 Final Return",
  "GST Final Return Online",
  "Section 45 CGST Act",
  "Rule 81 CGST Rules",
  "GSTR-10 Late Fee",
  "Section 29(5) ITC Reversal",
  "Rule 44 Capital Goods Reversal",
  "Form GSTR-3A Notice Reply",
  "Voluntary GST Cancellation",
  "Form GST REG-16 Filing",
];

const POPULAR_SEARCHES_TAGS = [
  "gstr 10 due date 3 months",
  "gstr 10 penalty 200 per day",
  "gstr 10 itc reversal on closing stock",
  "nil gstr 10 filing procedure",
  "how to file gstr 10 on gst portal",
  "difference between gstr 9 and gstr 10",
  "gstr 10 format excel pdf download",
  "gstr 10 amnesty scheme late fee waiver",
  "form gst reg 19 cancellation order",
  "section 62 best judgement assessment gst",
];

function Gstr10GuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          The <strong className="font-semibold text-slate-950">GSTR-10 Final Return</strong> is a statutory compliance filing governed under <strong className="font-semibold text-slate-950">Section 45 of the Central Goods and Services Tax (CGST) Act, 2017</strong> and <strong className="font-semibold text-slate-950">Rule 81 of the CGST Rules, 2017</strong>. It is a mandatory, one-time return that must be submitted by every taxpayer whose GST registration has been cancelled by the tax authorities or voluntarily surrendered.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The core objective of filing GSTR-10 is to settle all closing inventory tax credits. Under <strong className="font-semibold text-slate-950">Section 29(5)</strong>, taxpayers must reverse any Input Tax Credit (ITC) availed on unsold stocks, semi-finished goods, and capital assets, ensuring no unrecovered government revenue remains before the GSTIN is permanently archived.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GSTR-10 Final Return Compliance Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Filing Deadline</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Within 3 Months of Order</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Daily Late Fee</span>
            <strong className="font-semibold text-rose-600 text-[13px]">₹200 per Day (₹100 + ₹100)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Legal Reversal Mandate</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Section 29(5) &amp; Rule 44</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Who Must File GSTR-10? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Who is Required to File Form GSTR-10?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing GSTR-10 is compulsory for standard businesses whose registration has ended, but specific taxpayer categories are exempt by law:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Taxpayer Category</th>
                <th className="py-3 px-4">Required to File GSTR-10?</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Statutory Provision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Regular Taxpayers (Suo-Moto Cancelled by Officer)</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes — Compulsory</td>
                <td className="py-3 px-4 bg-emerald-50/30">Section 45 &amp; Rule 81</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Taxpayers who Voluntarily Surrendered GSTIN</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes — Compulsory</td>
                <td className="py-3 px-4 bg-emerald-50/30">Section 45 &amp; Rule 81</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Composition Scheme Taxpayers (Section 10)</td>
                <td className="py-3 px-4 text-slate-500 font-semibold">❌ No — Exempt</td>
                <td className="py-3 px-4 bg-slate-50">Exempted under Section 45</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Non-Resident Taxable Persons (NRTP)</td>
                <td className="py-3 px-4 text-slate-500 font-semibold">❌ No — Exempt</td>
                <td className="py-3 px-4 bg-slate-50">Exempted under Section 45</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Input Service Distributors (ISD)</td>
                <td className="py-3 px-4 text-slate-500 font-semibold">❌ No — Exempt</td>
                <td className="py-3 px-4 bg-slate-50">Exempted under Section 45</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">TDS Deductors (Sec 51) &amp; TCS Collectors (Sec 52)</td>
                <td className="py-3 px-4 text-slate-500 font-semibold">❌ No — Exempt</td>
                <td className="py-3 px-4 bg-slate-50">Exempted under Section 45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Due Date & Penalties */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Due Date, Late Fees &amp; Section 62 Best Judgement
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The GSTR-10 deadline is strictly enforced. It must be filed within <strong className="font-semibold text-slate-950">3 months</strong> from the date of the cancellation order or date of cancellation, whichever is later:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-slate-500 text-[11px] block">Daily Late Fee Accumulation</span>
            <strong className="text-rose-700 font-semibold text-sm">₹200 / Day (₹100 CGST + ₹100 SGST)</strong>
            <p className="text-slate-600 leading-relaxed">
              Late fee starts accumulating automatically from the day immediately following the 3-month deadline until the return is successfully filed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-slate-500 text-[11px] block">Form GSTR-3A Notice</span>
            <strong className="text-amber-800 font-semibold text-sm">15-Day Final Notice</strong>
            <p className="text-slate-600 leading-relaxed">
              If GSTR-10 is not submitted within 3 months, the department issues Form GSTR-3A under Section 46, requiring submission within 15 days.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-slate-500 text-[11px] block">Section 62 Assessment</span>
            <strong className="text-slate-950 font-semibold text-sm">Best Judgement Assessment</strong>
            <p className="text-slate-600 leading-relaxed">
              If the taxpayer fails to respond to Form GSTR-3A, the officer assesses closing stock unilaterally and issues a demand order with interest and 100% penalty.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: ITC Reversal under Section 29(5) & Rule 44 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Input Tax Credit (ITC) Reversal Rules on Closing Stock
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 29(5) of the CGST Act, every registered person whose registration is cancelled must pay an amount calculated as follows:
        </p>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="text-xs sm:text-[13px] text-slate-700 space-y-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-950 font-semibold block mb-0.5">A. For Inputs, Semi-Finished Goods &amp; Finished Goods:</strong>
              Pay the higher of: (1) The Input Tax Credit availed on such inputs; OR (2) The output tax payable on the open market value of such goods on the effective cancellation date.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-950 font-semibold block mb-0.5">B. For Capital Goods and Plant &amp; Machinery (Rule 44):</strong>
              Pay the higher of: (1) The Input Tax Credit availed on such capital goods reduced by <strong>5 percentage points for every quarter</strong> of use (assuming a 5-year useful life); OR (2) The tax on the transaction value of such capital goods sold under Section 15.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Filing Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step GSTR-10 Online Filing Procedure
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 1 — Login to GST Portal:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Visit <code className="text-indigo-600">www.gst.gov.in</code> and log in using your cancelled GSTIN credentials.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 2 — Navigate to Final Return:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Go to <strong>Services &gt; Returns &gt; Final Return</strong>. Click on <strong>Prepare Online</strong> under Form GSTR-10.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 3 — Verify Auto-Populated Particulars:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              The portal auto-populates legal name, trade name, cancellation order number, and effective cancellation date. Verify these details.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 4 — Enter Closing Stock Details (Table 8):</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Declare itemized details of inputs held in stock, inputs contained in semi-finished/finished goods, and capital goods (with invoice numbers, HSN, quantity, and credit availed).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 5 — Settle Tax Liability &amp; Late Fees:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Review Table 9 tax liabilities and Table 10 late fees. Pay through the Electronic Cash Ledger or utilize available Electronic Credit Ledger balances via challan.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 6 — Authenticate &amp; Generate ARN:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Digitally sign using Class 3 DSC or Aadhaar EVC OTP. The portal issues an Application Reference Number (ARN) confirming permanent closure.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Why Choose Merrafilings for Your GSTR-10 Final Return
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings indirect tax specialists protect your business from open-ended assessment risks. We compile your closing inventory, calculate exact Rule 44 depreciation credits to prevent overpaying tax, file Form GSTR-10 on the portal, and provide comprehensive compliance archiving for the mandatory 6-year retention period under Section 36.
        </p>
      </section>
    </div>
  );
}

export default function Gstr10Page() {
  return (
    <ServicePageTemplate
      badgeText="Section 45 CGST Act, 2017 & Rule 81 Final Return Compliance Desk"
      heroTitle={
        <>
          <span>Permanent Registration Closure – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GSTR-10 Final Return
          </span>{" "}
          <span>Filing Online in India</span>
        </>
      }
      heroSubtitle="File your Form GSTR-10 final return after GST registration cancellation or surrender. Ensure accurate closing stock valuation, Rule 44 ITC reversal calculation, and timely portal submission within 3 months to avoid ₹200/day late fees and Section 62 assessment orders."
      formTitle="GSTR-10 Final Return Desk"
      formSubtitle="Consult our senior Chartered Accountants for closing stock reconciliation, Rule 44 capital goods reversal, and fast-track GSTR-10 filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Fixed{" "}
          <span className="font-normal text-[#00B074]">final return fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for Nil GSTR-10 filing, closing stock valuation with Rule 44 ITC reversal, or complete voluntary surrender suites."
      breadcrumbCurrent="GSTR-10 Final Return"
      guideTitle="Comprehensive Guide to GSTR-10 Final Return Filing - Due Date, ITC Reversal, Closing Stock, Penalties & Procedure"
      guideContent={<Gstr10GuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about GSTR-10 three-month due dates, closing stock declarations, Section 29(5) ITC reversals, and ₹200/day late fees."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
