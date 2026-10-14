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
  Gavel,
  Landmark,
  FileSignature,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Detailed Scrutiny & Legal Grounds Evaluation by Chartered Accountants" },
  { icon: <FileText className="w-4 h-4" />, text: "Drafting Formal Legal Replies for ASMT-11, DRC-06, REG-04 & ADT-01" },
  { icon: <Scale className="w-4 h-4" />, text: "GSTR-1 vs GSTR-3B & GSTR-2B Input Tax Credit (ITC) Reconciliation" },
  { icon: <Clock className="w-4 h-4" />, text: "Fast-Track 24-48 Hour Drafting to Meet Strict 30-Day Statutory Deadlines" },
  { icon: <Gavel className="w-4 h-4" />, text: "Section 107 Appellate Representation & Pre-Deposit Advisory Support" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "30-Min Tax Notice Consultation",
    shortDesc: "Comprehensive expert review of your GST notice with actionable advice and risk evaluation.",
    expandedDesc: "Detailed scrutiny of your issued notice (ASMT-10, DRC-01, DRC-01A, or GSTR-3A) by a senior GST advocate. Includes root cause diagnosis (turnover mismatch, ineligible ITC, or late filing), liability estimation, strategy planning, and a clear legal action plan.",
    price: "₹1,988",
    priceSub: "Flat Professional Fee / Single Notice",
    badge: "Consultation Plan",
    features: [
      "In-Depth Review of Issued GST Notice & Allegations",
      "Analysis of Sections (Sec 61, 73, 74 or 129)",
      "Cross-Verification with GSTR-1, 3B & 2B Records",
      "Identification of Statutory Risk & Penal Exposure",
      "Actionable Step-by-Step Response Strategy",
      "Advice on Pre-SCN Disclosures (DRC-01A)",
      "30-Minute Direct Phone / Video Consultation",
      "Written Opinion Summary via Email",
    ],
  },
  {
    name: "Comprehensive Notice Response",
    popular: true,
    badge: "Most Popular",
    shortDesc: "End-to-end legal drafting, document compilation, and online portal submission of your reply.",
    expandedDesc: "Complete legal drafting of the formal reply (Form ASMT-11, DRC-06, REG-04, or CMP-06) on company letterhead citing relevant legal precedents and CBIC circulars. Includes supporting ledger reconciliations, invoice compilation, portal submission via DSC/EVC, and tracking through order issuance.",
    price: "₹9,988",
    priceSub: "Complete Reply Drafting & Portal Submission",
    features: [
      "Everything in Notice Consultation Package",
      "Formal Legal Reply Drafting by Specialized GST Advocates",
      "GSTR-1, GSTR-3B & GSTR-2B In-Depth Reconciliations",
      "HSN Classification & E-Way Bill Cross-Checks",
      "Compilation & Indexing of Supporting Invoices & Vouchers",
      "Electronic Filing on GST Portal (ASMT-11 / DRC-06)",
      "Attendance to Departmental Follow-Up Clarifications",
      "Dedicated Senior Chartered Accountant (CA) Case Manager",
    ],
  },
  {
    name: "Show Cause & Appellate Defense",
    shortDesc: "Comprehensive legal defense for high-value Section 73/74 demands, audits, and Section 107 appeals.",
    expandedDesc: "Designed for complex show cause notices, audit assessments (ADT-01), best-judgment orders, and departmental demands exceeding ₹5 Lakhs. Covers preparation of detailed counter-affidavits, drafting Form GST APL-01 before the Appellate Authority, pre-deposit advisory, and virtual personal hearing representation.",
    price: "₹19,899",
    priceSub: "High-Stake Demand & Appeal Representation",
    badge: "Appellate Defense",
    features: [
      "Defense Against Section 73 / 74 Severe Demand Notices",
      "Departmental GST Audit Representation (Form ADT-01)",
      "Drafting & Filing Appeal before Appellate Authority (APL-01)",
      "10% Mandatory Pre-Deposit Calculation & Challan Advisory",
      "Citation of Supreme Court, High Court & Tribunal Case Laws",
      "Personal Hearing Briefing & Legal Representation",
      "Stay of Recovery Proceedings & Bank Attachment Lifting",
      "Direct Senior Legal Counsel & CA Partner Oversight",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a GST notice and why has my business received one?",
    a: "A GST notice is an official communication issued by the Central or State GST Department regarding discrepancies, non-compliance, unpaid taxes, return mismatches, or requests for clarification. Notices are typically triggered by algorithmic automated reconciliations between your sales returns (GSTR-1), monthly tax summaries (GSTR-3B), vendor auto-drafted credits (GSTR-2B), or e-way bill movements.",
  },
  {
    q: "How can I check if a GST notice has been officially served to me?",
    a: "Under Section 169 of the CGST Act, notices are officially served when uploaded directly to your GST Common Portal dashboard, sent to your registered email, or delivered by registered post. To check online, log into gst.gov.in, navigate to Services > User Services > View Notices and Orders, and also review the 'Additional Notices and Orders' tab. Departmental uploads are legally deemed served regardless of whether you opened the notification.",
  },
  {
    q: "What are the common statutory forms for GST notices and replies?",
    a: "The most common notice forms include: Form ASMT-10 for return scrutiny under Section 61 (replied via Form ASMT-11); Form DRC-01 for demand show cause notices under Section 73 or 74 (replied via Form DRC-06); Form DRC-01A for pre-SCN intimations (replied via Form DRC-01B); Form GSTR-3A for non-filing of monthly returns; Form ADT-01 for departmental audits; and Form GST REG-03 for registration clarifications (replied via REG-04).",
  },
  {
    q: "What is the statutory deadline to submit a reply to a GST notice?",
    a: "The statutory reply window is explicitly stated in the notice. Typically, scrutiny notices (ASMT-10) and demand notices (DRC-01) grant taxpayers 30 days from the date of service to furnish a reply. Pre-SCN intimations under DRC-01A or registration queries under REG-03 allow 7 to 15 days. If you require additional time to compile records, you can submit an interim request for extension before the deadline lapses.",
  },
  {
    q: "What are the legal consequences of ignoring a GST notice?",
    a: "Ignoring a GST notice triggers severe statutory actions under the CGST Act. The tax officer may pass an ex-parte Best Judgment Assessment under Section 62, issue a recovery notice under Section 79 to freeze business bank accounts, attach trade receivables, cancel your GST registration, levy penalties up to 100% of unpaid tax under Section 74, and charge mandatory 18% annual interest under Section 50.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the difference between a notice under Section 73 and Section 74?",
    a: "Section 73 applies to normal cases of tax unpaid, short-paid, or wrongful ITC availed without any intention of fraud or willful misstatement. The penalty under Section 73 is limited to 10% of the tax due or ₹10,000 (whichever is higher), and the limitation period for issuing a notice is 3 years from the annual return due date. Section 74 applies to cases involving fraud, suppression of facts, or willful misstatement, carrying a 100% penalty and a 5-year limitation period.",
  },
  {
    q: "What documents must I assemble before drafting a reply to a GST notice?",
    a: "You must assemble: (1) The original notice PDF with its DIN (Document Identification Number); (2) Filed GSTR-1, GSTR-3B, and GSTR-9 returns; (3) Relevant purchase/sales registers and invoices; (4) GSTR-2A/2B reconciliations proving ITC genuineness and banking payment trails (Rule 37 compliance within 180 days); (5) E-way bills and delivery challans; and (6) A structured written legal submission addressing each numbered paragraph.",
  },
  {
    q: "What is Form DRC-01A and can I resolve the dispute before a formal SCN?",
    a: "Form DRC-01A is a pre-show cause notice intimation issued under Rule 142(1A). It informs the taxpayer of the tax liability ascertained by the tax officer prior to issuing a formal demand. If you agree with the calculation, you can pay the tax with a reduced penalty using Form DRC-03 and intimate the department via Form DRC-01B, effectively concluding proceedings without entering contentious litigation.",
  },
  {
    q: "Can I appeal against an adverse GST order passed by the tax officer?",
    a: "Yes. If the adjudicating officer passes an unfavorable assessment order (Form DRC-07), you have the legal right under Section 107 of the CGST Act to file an appeal before the Appellate Authority using Form GST APL-01 within 3 months of the order date. You must make a mandatory pre-deposit of 10% of the disputed tax amount, upon which the balance tax recovery is automatically stayed.",
  },
  {
    q: "Why should I engage Merrafilings rather than submitting an informal reply myself?",
    a: "GST litigation requires strict evidentiary compliance. Informal or incomplete replies often lead officers to reject explanations, confirm heavy tax demands, and impose statutory penalties. Merrafilings pairs your case with qualified Chartered Accountants and GST advocates who verify your reconciliation numbers, cite binding High Court rulings and CBIC notifications, and represent your business professionally to close notices cleanly.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Understanding Your GST Tax Notice: Complete Compliance Guide",
    href: "/gst-notice",
  },
  {
    title: "GST Return Filing by Accountants: Form GSTR-1, 3B & Reconciliation",
    href: "/gst-return-filing",
  },
  {
    title: "GST Annual Return Filing (GSTR-9 & GSTR-9C) Complete Guide",
    href: "/gst-annual-return",
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
  "GST Notice Reply",
  "Form ASMT-10 Response",
  "DRC-01 Demand Notice",
  "GSTR-3A Non-Filer Notice",
  "GST Audit ADT-01",
  "GST Appeal APL-01",
  "GSTR-1 vs 3B Mismatch",
  "ITC Reconciliation",
];

const POPULAR_SEARCHES_TAGS = [
  "how to reply to gst notice online",
  "asmt 10 gst notice format",
  "reply to drc 01 notice",
  "gst notice under section 73 penalty",
  "time limit to reply to gst notice",
  "gst bank attachment section 79",
  "appeal against gst order form apl 01",
  "gst notice lawyer consultation",
];

function GstNoticeGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Receiving an official <strong className="font-semibold text-slate-950">GST Notice in India</strong> is a statutory communication from the Central or State tax authorities that demands immediate attention. Under the <strong className="font-semibold text-slate-950">Central Goods and Services Tax (CGST) Act, 2017</strong>, notices are issued when automated portal algorithms or audit officers detect discrepancies between outward supply declarations, monthly cash tax payments, vendor input tax credits, or statutory filing timelines.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A GST notice does not automatically imply a penalty or wrongdoing; often, it represents a departmental request for documentation or reconciliation. However, ignoring or improperly replying to a notice can trigger ex-parte tax demands, 100% penalties, bank account attachments under Section 79, and cancellation of your GSTIN. This comprehensive guide outlines every type of GST notice, limitation periods, legal response procedures, and appellate remedies available under Indian tax law.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Notice Compliance &amp; Litigation Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Standard Reply Window</span>
            <strong className="font-semibold text-slate-950 text-[13px]">30 Days from Service Date</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Normal Cases Limitation</span>
            <strong className="font-semibold text-slate-950 text-[13px]">3 Years (Section 73)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Fraud / Misstatement Limitation</span>
            <strong className="font-semibold text-rose-700 text-[13px]">5 Years (Section 74)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Types of GST Notices */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Statutory Types of GST Notices &amp; Corresponding Reply Forms
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The CGST Rules, 2017 prescribe specific statutory forms for each category of notice. Identifying the precise form number received on the GST portal is the first step toward formulating a legally sound response:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Notice Form</th>
                <th className="py-3 px-4">Governing Section / Rule</th>
                <th className="py-3 px-4">Purpose &amp; Allegation</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Prescribed Reply Form</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form ASMT-10</td>
                <td className="py-3 px-4 text-slate-800">Section 61 / Rule 99</td>
                <td className="py-3 px-4 text-slate-900">Scrutiny of returns; discrepancies between GSTR-1, 3B &amp; 2B</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Form ASMT-11</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form DRC-01A</td>
                <td className="py-3 px-4 text-slate-800">Rule 142(1A)</td>
                <td className="py-3 px-4 text-slate-900">Pre-SCN intimation of tax liability before issuing formal demand</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Form DRC-01B / DRC-03</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form DRC-01</td>
                <td className="py-3 px-4 text-slate-800">Section 73 or 74 / Rule 142(1)</td>
                <td className="py-3 px-4 text-slate-900">Formal Show Cause Notice for tax demand, short payment or wrong ITC</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Form DRC-06</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form GSTR-3A</td>
                <td className="py-3 px-4 text-slate-800">Section 46 / Rule 68</td>
                <td className="py-3 px-4 text-slate-900">Notice to non-filers failing to file GSTR-1, GSTR-3B or GSTR-9</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Filing Pending Return within 15 Days</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form ADT-01</td>
                <td className="py-3 px-4 text-slate-800">Section 65 / Rule 101</td>
                <td className="py-3 px-4 text-slate-900">Intimation of GST Departmental Audit at business premises</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Produce Books &amp; Records in 15 Days</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form GST REG-03</td>
                <td className="py-3 px-4 text-slate-800">Rule 9(2)</td>
                <td className="py-3 px-4 text-slate-900">Clarification sought on new registration or core field amendment</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Form GST REG-04 (in 7 Working Days)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Form CMP-05</td>
                <td className="py-3 px-4 text-slate-800">Rule 6(4)</td>
                <td className="py-3 px-4 text-slate-900">Notice for denying permission to pay tax under Composition Scheme</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Form CMP-06 (in 15 Days)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Common Reasons */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Root Causes: Why Do Businesses Receive GST Notices?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. GSTR-1 vs GSTR-3B Tax Mismatch:</strong>
            Declaring higher outward taxable supplies in GSTR-1 than the tax actually paid in GSTR-3B triggers automatic departmental notices under Section 75(12) as self-assessed tax unpaid.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Excess Input Tax Credit (GSTR-2B Mismatch):</strong>
            Claiming higher ITC in Table 4 of GSTR-3B compared to the auto-generated credit reflected in GSTR-2B triggers Form DRC-01C or scrutiny notice under Section 61.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Non-Payment to Vendors within 180 Days:</strong>
            Under the second proviso to Section 16(2), if a buyer fails to pay the vendor within 180 days from the invoice date, the availed ITC must be reversed along with 18% interest.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. E-Way Bill vs GSTR-1 Discrepancy:</strong>
            Consignments transported with E-Way bills that do not reconcile with the invoice values declared in monthly GSTR-1 returns prompt scrutiny and consignment interrogation notices.
          </div>
        </div>
      </section>

      {/* Section 3: Time Limits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Statutory Limitation Periods &amp; Section 73 vs Section 74
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The CGST Act establishes strict statutory deadlines within which tax officers must issue notices and conclude adjudication orders:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-indigo-950 bg-indigo-50/50">Section 73 (Non-Fraud Cases)</th>
                <th className="py-3 px-4 text-rose-950 bg-rose-50/50">Section 74 (Fraud / Willful Misstatement)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Trigger Grounds</td>
                <td className="py-3 px-4 text-slate-800">Genuine computation errors, bonafide interpretation disputes</td>
                <td className="py-3 px-4 text-slate-800">Fraud, suppression of facts, willful misstatement to evade tax</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Notice Issuance Deadline</td>
                <td className="py-3 px-4 text-slate-800">At least 3 months prior to final order (2 years 9 months)</td>
                <td className="py-3 px-4 text-slate-800">At least 6 months prior to final order (4 years 6 months)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Adjudication Order Time Limit</td>
                <td className="py-3 px-4 text-slate-800">3 years from the due date of Annual Return (GSTR-9)</td>
                <td className="py-3 px-4 text-slate-800">5 years from the due date of Annual Return (GSTR-9)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Applicable Penalty</td>
                <td className="py-3 px-4 text-slate-800">10% of tax due or ₹10,000 (whichever is higher)</td>
                <td className="py-3 px-4 font-semibold text-rose-700">100% of tax evaded (Minimum ₹10,000)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Mandatory Interest</td>
                <td className="py-3 px-4 text-slate-800">18% per annum under Section 50(1)</td>
                <td className="py-3 px-4 text-slate-800">18% per annum under Section 50(1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Step-by-Step Response Protocol */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step Protocol: How to Reply to a GST Notice Online
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 1 — Download &amp; Scrutinize the Notice:</strong>
            Log into <code className="text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">gst.gov.in</code>. Navigate to <strong className="font-semibold text-slate-950">Services &gt; User Services &gt; View Notices and Orders</strong>. Download the official PDF and note the DIN (Document Identification Number), allegations, and the 30-day expiry date.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 2 — Mathematical Reconciliation:</strong>
            Pull outward sales registers, purchase registers, bank statements, and GSTR-2B credit ledgers. Reconcile monthly variances to ascertain whether the departmental query represents an accounting mismatch or a bonafide liability.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 3 — Professional Legal Reply Drafting:</strong>
            Prepare a paragraph-wise rebuttal on corporate letterhead. Quote relevant statutory provisions, CBIC clarifying circulars, and judicial precedents from the High Court or Supreme Court supporting your position.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 4 — Voluntary Tax Payment via Form DRC-03 (If Applicable):</strong>
            If any portion of the tax short-payment is valid, deposit the admitted tax amount via Form GST DRC-03 under Section 73(5) to cap penalties and avoid further interest accruals.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 5 — Electronic Portal Submission via DSC/EVC:</strong>
            Open the relevant notice entry on the GST portal, click &quot;Reply&quot;, enter your detailed explanation, attach supporting ledgers and invoices in PDF format (up to 5MB each), and sign electronically via Class 3 DSC or Aadhaar EVC.
          </div>
        </div>
      </section>

      {/* Section 5: Appeals under Section 107 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Section 107 Appeals: Challenging Unfair GST Demand Orders
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          If the adjudicating officer rejects your reply and confirms an adverse tax demand by issuing an assessment order on <strong className="font-semibold text-slate-950">Form GST DRC-07</strong>, you are not without remedy. Taxpayers have the statutory right under <strong className="font-semibold text-slate-950">Section 107 of the CGST Act</strong> to file an appeal before the First Appellate Authority:
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <div className="flex items-center gap-2 text-indigo-950 font-semibold text-sm">
            <Gavel className="w-4 h-4 text-indigo-600" />
            <span>Appellate Roadmap (Form GST APL-01)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-900 font-normal">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-indigo-700">1. Limitation:</span>
              <span>Must be filed within <strong>3 months</strong> from the date of communication of the order (condonable by 1 additional month upon sufficient cause).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-indigo-700">2. Mandatory Pre-Deposit:</span>
              <span>Payment of full admitted tax + <strong>10% of the disputed tax amount</strong> (capped at ₹25 Crores).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-indigo-700">3. Automatic Recovery Stay:</span>
              <span>Upon successful payment of the 10% pre-deposit and generation of the provisional acknowledgment (Form GST APL-02), all recovery actions and bank attachment proceedings are automatically stayed.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Why Entrust Your GST Notice Defense to Merrafilings?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Navigating GST litigation requires a nuanced balance of mathematical reconciliation and legal acumen. Merrafilings houses a dedicated team of Chartered Accountants, ex-tax department consultants, and high court litigators who have handled over 10,000+ tax notices across India.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          From fast-track 24-hour notice evaluations and robust ASMT-11/DRC-06 reply drafting to virtual personal hearings and Appellate Tribunal filings, our specialists protect your business from arbitrary tax demands, exorbitant penalties, and working capital freezes.
        </p>
      </section>
    </div>
  );
}

export default function GstNoticePage() {
  return (
    <ServicePageTemplate
      badgeText="CGST Act, 2017 Notice Defense & Section 107 Appellate Representation"
      heroTitle={
        <>
          <span>Received a Tax Notice? – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Notice Reply
          </span>{" "}
          <span>&amp; Legal Defense</span>
        </>
      }
      heroSubtitle="Resolve Form ASMT-10 scrutiny, DRC-01 demand show cause notices, GSTR-3A non-filer notices, and Section 73/74 proceedings. Get expert assistance from Chartered Accountants and tax advocates to draft legally robust replies and avoid heavy penalties."
      formTitle="GST Notice Advisory Desk"
      formSubtitle="Consult our senior tax practitioners for immediate notice review, discrepancy reconciliation, and timely electronic portal submission."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Fixed{" "}
          <span className="font-normal text-[#00B074]">GST notice defense fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for 30-minute expert notice analysis, end-to-end reply drafting & portal submission, or full Section 107 appellate representation."
      breadcrumbCurrent="GST Notice"
      guideTitle="Comprehensive Guide to GST Notices in India - Scrutiny, SCN, Penalties & Legal Reply Protocol"
      guideContent={<GstNoticeGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about GST scrutiny notices, DRC-01 demand forms, limitation periods, interest liabilities, and appellate procedures."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
