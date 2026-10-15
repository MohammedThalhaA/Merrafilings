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
  RotateCcw,
  Calendar,
  Undo2,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Governed under Section 30 of CGST Act & Rule 23 of CGST Rules" },
  { icon: <RotateCcw className="w-4 h-4" />, text: "Form GST REG-21 Application for Suo-Moto Cancellation Revocation" },
  { icon: <Receipt className="w-4 h-4" />, text: "Reconciliation of All Pending Returns & Tax/Interest Clearance" },
  { icon: <Clock className="w-4 h-4" />, text: "Condonation Petition Drafting for 90 to 270-Day Delays" },
  { icon: <Scale className="w-4 h-4" />, text: "Form GST REG-23 Notice Reply (REG-24) & Section 107 Appeal Support" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Standard Revocation (Within 90 Days)",
    shortDesc: "Restoration of cancelled GSTIN within the standard statutory 90-day window from cancellation order.",
    expandedDesc: "Complete legal and portal filing assistance for taxpayers whose registration was cancelled suo-moto by the tax officer. Includes computation and filing of all pending GST returns, clearance of interest and late fees, drafting the revocation justification letter, and portal filing of Form GST REG-21 with ARN tracking.",
    price: "₹2,999",
    priceSub: "Complete Documentation & Filing",
    badge: "Statutory 90-Day Window",
    features: [
      "Verification of GST Cancellation Order",
      "Computation of Pending Returns, Tax, Interest & Late Fees",
      "Preparation of Written Justification & Revocation Grounds",
      "Preparation & Portal Filing of Form GST REG-21",
      "Application Reference Number (ARN) Generation",
      "Monitoring Officer Processing within 30 Days",
      "Handling Form GST REG-23 Clarification Notices",
      "Tracking until Form GST REG-22 Restoration Order",
    ],
  },
  {
    name: "Extended Revocation (90 to 270 Days)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Restoration filing for delayed cases requiring Additional / Joint Commissioner or Commissioner condonation.",
    expandedDesc: "Designed for taxpayers who missed the initial 90-day deadline. Includes drafting formal condonation of delay petitions under Section 30 proviso, representation before Joint / Additional Commissioners (up to 180 days) or Principal Commissioner (up to 270 days), comprehensive return reconciliation, and personal hearing advocacy.",
    price: "₹5,999",
    priceSub: "Delay Condonation & Officer Representation",
    features: [
      "Everything in Standard Revocation Package",
      "Drafting Formal Condonation of Delay Application",
      "Establishment of 'Sufficient Cause' under Section 30 Proviso",
      "Representation before Joint / Additional Commissioner (up to 180 Days)",
      "Representation before Principal Commissioner (up to 270 Days)",
      "Filing Form GST REG-24 Clarification Rejoinder",
      "Assistance with Personal Hearing (PH) Submissions",
      "Dedicated Senior Tax Litigator Representation",
    ],
  },
  {
    name: "Section 107 Appellate Defense Suite",
    shortDesc: "First Appellate Authority appeal when revocation is rejected under Form GST REG-05.",
    expandedDesc: "Comprehensive litigation defense when the tax officer has rejected the revocation application or passed an adverse cancellation order. Includes drafting formal Appeal Memo in Form GST APL-01 under Section 107, calculating mandatory 10% pre-deposit, legal citations, and Chartered Accountant / Advocate appearance.",
    price: "₹12,999",
    priceSub: "Appellate Authority Legal Defense",
    badge: "Litigation Suite",
    features: [
      "In-Depth Review of Rejection Order (Form GST REG-05)",
      "Drafting Appeal Memo (Form GST APL-01) with Grounds of Appeal",
      "Computation & Assistance with Mandatory 10% Pre-Deposit",
      "Compilation of Case Law & High Court Judicial Precedents",
      "Filing before Joint Commissioner (Appeals)",
      "Senior Indirect Tax Advocate Personal Hearing Representation",
      "Stay Application against Coercive Recovery Proceedings",
      "Complete Tracking until Appellate Final Order",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "What is revocation of GST registration cancellation?",
    a: "Revocation of GST registration cancellation is the legal process of reversing or withdrawing a cancellation order passed by a proper tax officer. Governed under Section 30 of the CGST Act, 2017 read with Rule 23 of the CGST Rules, 2017, it restores the cancelled GSTIN to active status, allowing the taxpayer to legally resume invoicing, return filing, and commercial operations.",
  },
  {
    q: "Can I apply for revocation if I cancelled my GST registration voluntarily?",
    a: "No. Under Section 30(1), revocation of cancellation applies strictly to cases where the registration was cancelled 'suo-moto' by the proper tax officer (such as for non-filing of returns). If a taxpayer voluntarily applied for cancellation (Form GST REG-16) and an order was passed in Form GST REG-19, revocation cannot be filed; the taxpayer must apply for fresh registration if they wish to resume business.",
  },
  {
    q: "What is the primary prerequisite before submitting Form GST REG-21?",
    a: "The most critical prerequisite is clearing all non-compliances that led to cancellation. If the registration was cancelled for non-filing of returns, the taxpayer must furnish all overdue returns (GSTR-1, GSTR-3B) from the date of default up to the date of cancellation, and pay all overdue taxes, interest under Section 50, and statutory late fees under Section 47 before submitting Form GST REG-21.",
  },
  {
    q: "What is the official time limit to file a GST revocation application?",
    a: "Under Section 30 of the CGST Act, the standard time limit is 90 days from the date of service of the cancellation order. However, the law provides for extension: (1) Up to an additional 90 days (total 180 days) by the Joint or Additional Commissioner; and (2) Up to a further 90 days (total 270 days) by the Principal Commissioner/Commissioner upon showing sufficient cause.",
  },
  {
    q: "What happens if my revocation application is rejected by the officer?",
    a: "If the proper officer is not satisfied with your reply or explanation, they will pass a rejection order in Form GST REG-05. Against this rejection order, the taxpayer has the statutory right to file an appeal before the Appellate Authority under Section 107 of the CGST Act within 3 months using Form GST APL-01.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is Form GST REG-23 and how must I respond to it?",
    a: "If the tax officer finds discrepancies or requires additional justification after you submit Form GST REG-21, they issue a show-cause notice in Form GST REG-23 within 30 days. The taxpayer must file a detailed reply along with supporting documents in Form GST REG-24 within 7 working days from the date of receipt of the notice.",
  },
  {
    q: "How long does the proper officer have to approve or reject the revocation?",
    a: "Under Rule 23(2), the proper officer must either approve the revocation by issuing an order in Form GST REG-22 or issue a clarification notice in Form GST REG-23 within 30 days from the date of receipt of the application in Form GST REG-21.",
  },
  {
    q: "Can I issue tax invoices or claim Input Tax Credit while my GSTIN is cancelled?",
    a: "No. While a GSTIN is cancelled or suspended, a business is legally prohibited from issuing GST tax invoices, collecting GST from customers, or generating e-way bills. Any tax collected during the cancellation period constitutes an offence under Section 122. Once Form GST REG-22 is issued, full invoicing rights and Input Tax Credit ledger access are restored.",
  },
  {
    q: "Must I file returns for the period between cancellation and revocation?",
    a: "Yes. Once the revocation order (Form GST REG-22) is passed, the taxpayer must file all returns for the period from the effective date of cancellation to the date of the revocation order within 30 days from the date of the revocation order.",
  },
  {
    q: "How does Merrafilings assist with GST registration revocation?",
    a: "Merrafilings provides end-to-end legal and tax representation: calculating and filing all back-due returns, computing minimum tax/interest liabilities, drafting bulletproof revocation grounds and condonation petitions, handling REG-23 notices, and representing your case before Commissioners and Appellate Authorities.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Understanding GST Revocation: How to Apply",
    href: "/gst-revocation/gst-revocation-how-to-apply-effectively",
  },
  {
    title: "Understanding GST Revocation: A Comprehensive Guide",
    href: "/gst-revocation/comprehensive-gst-revocation-guide",
  },
  {
    title: "GST Revocation Guide",
    href: "/gst-revocation/gst-revocation-guide",
  },
  {
    title: "Introduction to GST Revocation Filing",
    href: "/gst-revocation/gst-revocation-filing-guide-process-tips",
  },
  {
    title: "GST Revocation in 5 Easy Steps with Merrafilings",
    href: "/gst-revocation/gst-revocation-guide-in-5-easy-steps",
  },
];

const RELATED_SERVICES_TAGS = [
  "GST Revocation Online",
  "Form GST REG-21",
  "Suo Moto Cancellation Revocation",
  "GST REG-22 Approval Order",
  "GST REG-23 Notice Reply",
  "GST Cancellation Reversal",
  "Section 30 CGST Act",
  "Rule 23 CGST Rules",
  "Condonation of Delay GST",
  "Section 107 GST Appeal",
];

const POPULAR_SEARCHES_TAGS = [
  "how to revoke cancelled gst registration",
  "gst revocation time limit 270 days",
  "form gst reg 21 download format",
  "gst revocation after 180 days process",
  "file pending returns before revocation",
  "gst reg 05 rejection appeal format",
  "form gst reg 22 order download",
  "gst revocation fees in india",
  "reactivate cancelled gstin online",
  "section 30 cgst act revocation rules",
];

function GstRevocationGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          <strong className="font-semibold text-slate-950">GST registration revocation</strong> is the statutory legal procedure under <strong className="font-semibold text-slate-950">Section 30 of the Central Goods and Services Tax (CGST) Act, 2017</strong> and <strong className="font-semibold text-slate-950">Rule 23 of the CGST Rules, 2017</strong> that allows businesses whose GSTIN was cancelled by a tax officer to restore their registration and resume lawful commercial operations.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          When the GST department issues a suo-moto cancellation order—most commonly due to failure to file monthly returns for 6 consecutive months (or 2 tax periods for composition taxpayers)—a business cannot issue tax invoices, collect taxes, or generate e-way bills. Filing <strong className="font-semibold text-slate-950">Form GST REG-21</strong> on the GST common portal reinstates your active tax identity, preserves your Input Tax Credit balances, and shields your business from severe legal penalties under Section 122.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Revocation Statutory Compliance Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3.5 bg-white rounded-xl border border-indigo-100/80 shadow-3xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <span className="block text-slate-500 text-[11px] mb-1 group-hover:text-indigo-900 transition-colors">Standard Application Window</span>
            <strong className="font-semibold text-slate-950 text-[13px] group-hover:text-[#5C3BFF] transition-colors">90 Days from Cancellation Order</strong>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-indigo-100/80 shadow-3xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <span className="block text-slate-500 text-[11px] mb-1 group-hover:text-indigo-900 transition-colors">Maximum Extended Window</span>
            <strong className="font-semibold text-slate-950 text-[13px] group-hover:text-[#5C3BFF] transition-colors">Up to 270 Days (Commissioner)</strong>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-indigo-100/80 shadow-3xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <span className="block text-slate-500 text-[11px] mb-1 group-hover:text-emerald-900 transition-colors">Mandatory Officer Decision</span>
            <strong className="font-semibold text-emerald-600 text-[13px] group-hover:text-emerald-800 transition-colors">Within 30 Days (REG-22)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: When is Revocation Applicable? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why is GST Registration Cancelled &amp; When is Revocation Possible?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Revocation is strictly applicable to cancellations initiated unilaterally by the tax department (suo-moto cancellation under Section 29(2)). It is not permissible for voluntary closures:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Ground for Cancellation</th>
                <th className="py-3 px-4">Cancellation Type</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Revocation (REG-21) Possible?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Non-filing of returns for 6 consecutive months (or 2 quarters)</td>
                <td className="py-3 px-4 font-semibold text-indigo-700">Suo Moto (Tax Officer)</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">✅ Yes — upon filing all pending returns</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Non-commencement of business within 6 months of registration</td>
                <td className="py-3 px-4 font-semibold text-indigo-700">Suo Moto (Tax Officer)</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">✅ Yes — upon providing proof of business</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Alleged fraud, willful misstatement, or suppression of facts</td>
                <td className="py-3 px-4 font-semibold text-indigo-700">Suo Moto (Tax Officer)</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">✅ Yes — with comprehensive legal justification</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Business permanently discontinued or closed down</td>
                <td className="py-3 px-4 font-semibold text-slate-600">Voluntary (Taxpayer)</td>
                <td className="py-3 px-4 bg-rose-50/30 text-rose-700 font-semibold">❌ No — file GSTR-10 Final Return instead</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Turnover fell below mandatory threshold limit</td>
                <td className="py-3 px-4 font-semibold text-slate-600">Voluntary (Taxpayer)</td>
                <td className="py-3 px-4 bg-rose-50/30 text-rose-700 font-semibold">❌ No — voluntary cancellations cannot be revoked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Extended Time Limits Breakdown */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Time Limits &amp; Delay Condonation (90 to 270 Days)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The CGST Act provides a multi-tiered hierarchy of condonation powers to ensure deserving taxpayers can revive their business registrations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800 inline-block">Tier 1: Standard Window</span>
            <strong className="text-slate-950 font-semibold block text-sm group-hover:text-[#5C3BFF] transition-colors">Within 90 Days</strong>
            <p className="text-slate-700 leading-relaxed font-normal">
              Taxpayers can file Form GST REG-21 directly on the GST portal without needing special condonation orders, provided all pending returns and taxes are paid.
            </p>
          </div>

          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-100 text-indigo-800 inline-block">Tier 2: Joint / Addl. Commissioner</span>
            <strong className="text-slate-950 font-semibold block text-sm group-hover:text-[#5C3BFF] transition-colors">90 to 180 Days</strong>
            <p className="text-slate-700 leading-relaxed font-normal">
              If the 90-day window is breached, an application for condonation of delay must be submitted to the Joint or Additional Commissioner demonstrating sufficient cause.
            </p>
          </div>

          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-100 text-purple-800 inline-block">Tier 3: Principal Commissioner</span>
            <strong className="text-slate-950 font-semibold block text-sm group-hover:text-[#5C3BFF] transition-colors">180 to 270 Days</strong>
            <p className="text-slate-700 leading-relaxed font-normal">
              For delays between 180 and 270 days, power resides with the Commissioner / Principal Commissioner. Comprehensive legal grounds and hardship justifications are required.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Essential Documents Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Documents Required for GST Revocation (Form GST REG-21)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">Cancellation Order Copy:</strong>
            <span className="text-slate-700 font-normal">Form GST REG-19 or Form GST REG-17 show-cause notice issued by the officer.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">Proof of Filed Returns:</strong>
            <span className="text-slate-700 font-normal">Filing acknowledgments of all overdue GSTR-1 and GSTR-3B monthly returns.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">Tax, Interest &amp; Late Fee Challans:</strong>
            <span className="text-slate-700 font-normal">Receipts confirming full discharge of tax liabilities and Section 50 interest.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">Written Justification Letter:</strong>
            <span className="text-slate-700 font-normal">Detailed affidavit/letter explaining the bona fide reasons for the non-compliance.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">Updated Address &amp; Business Proof:</strong>
            <span className="text-slate-700 font-normal">Recent electricity bill, NOC, or rent agreement confirming active premises.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">Authorized Signatory Credentials:</strong>
            <span className="text-slate-700 font-normal">Class 3 Digital Signature Certificate (DSC) or Aadhaar EVC credentials.</span>
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Revocation Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step Revocation Procedure on the GST Portal
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1 group-hover:text-emerald-950 transition-colors">Step 1 — Clear All Overdue Returns &amp; Tax Liabilities:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Log in to the portal and file every overdue GSTR-1 and GSTR-3B return from the date of default up to the cancellation date, paying all interest and late fees via challan.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1 group-hover:text-emerald-950 transition-colors">Step 2 — Access Application for Revocation of Cancelled Registration:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Navigate to <strong>Services &gt; Registration &gt; Application for Revocation of Cancelled Registration</strong> on <code className="text-indigo-600">gst.gov.in</code>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1 group-hover:text-emerald-950 transition-colors">Step 3 — Complete Form GST REG-21 &amp; State Grounds:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Enter the cancellation order details, input the date of order service, state the comprehensive grounds for revocation, and attach supporting proofs.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1 group-hover:text-emerald-950 transition-colors">Step 4 — Digital Signature Authentication &amp; ARN Generation:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              Submit using Class 3 DSC (for companies/LLPs) or EVC OTP (for proprietorships). Save the generated Application Reference Number (ARN) for tracking.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1 group-hover:text-emerald-950 transition-colors">Step 5 — Officer Scrutiny &amp; Issuance of Order:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              The proper officer has 30 days to review the application. If satisfied, an approval order in <strong>Form GST REG-22</strong> is issued, instantly restoring your GSTIN to active status.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Handling Rejections & Appeals */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Handling REG-23 Clarifications &amp; Rejection Appeals (Section 107)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          If the proper officer requires further information, they will issue a show-cause notice in <strong className="font-semibold text-slate-950">Form GST REG-23</strong>. The taxpayer must respond within <strong className="font-semibold text-slate-950">7 working days</strong> using <strong className="font-semibold text-slate-950">Form GST REG-24</strong>.
        </p>
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-3">
          <h3 className="text-sm font-semibold text-slate-950 group-hover:text-[#5C3BFF] transition-colors">What If the Revocation is Rejected under Form GST REG-05?</h3>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
            If the officer rejects the revocation application, you have the right to file an appeal before the First Appellate Authority (Joint Commissioner Appeals) under <strong className="font-semibold text-slate-950">Section 107 of the CGST Act</strong> within 3 months using <strong className="font-semibold text-slate-950">Form GST APL-01</strong>, supported by established High Court rulings mandating business restoration upon tax recovery.
          </p>
          <div className="pt-1">
            <button
              onClick={() => openContactModal("GST Revocation Legal Representation / Appeal")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-3xs transition-colors"
            >
              <span>Consult Litigation Advocates for Appeal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Why Choose Merrafilings for Your GST Revocation
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings indirect tax litigators and Chartered Accountants have successfully restored thousands of cancelled registrations. We manage the entire lifecycle: clearing back-due returns, computing minimum liability, drafting condonation petitions for long-delayed cases, and appearing before Appellate Authorities to guarantee your GSTIN is restored.
        </p>
      </section>
    </div>
  );
}

export default function GstRevocationPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 30 CGST Act, 2017 & Rule 23 GSTIN Reinstatement Desk"
      heroTitle={
        <>
          <span>Restore Your Cancelled GSTIN – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Registration Revocation
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Reactivate your cancelled GSTIN and resume business operations legally. File Form GST REG-21, clear pending returns with minimum interest/penalty, and obtain delay condonation up to 270 days with expert Chartered Accountant representation."
      formTitle="GST Revocation Helpdesk"
      formSubtitle="Consult our senior tax practitioners to file pending returns, draft revocation justifications, and secure Form GST REG-22 reactivation orders."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Fast{" "}
          <span className="font-normal text-[#00B074]">GSTIN restoration.</span>
        </>
      }
      pricingSubtitle="Select your plan for standard 90-day revocation, extended 270-day delay condonation, or Section 107 appellate litigation defense."
      breadcrumbCurrent="GST Revocation"
      guideTitle="Comprehensive Guide to GST Registration Revocation (Form GST REG-21) - Time Limits, Condonation, Returns & Procedure"
      guideContent={<GstRevocationGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about suo-moto cancellation reversal, 90 to 270-day time limits, filing overdue returns, and Form GST REG-22 approval orders."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
