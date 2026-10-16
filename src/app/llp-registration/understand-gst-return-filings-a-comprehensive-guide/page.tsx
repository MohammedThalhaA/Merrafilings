"use client";

import React, { useState } from "react";
import Link from "next/link";
import LlpGuideLayout from "@/components/LlpGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Building,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Scale,
  Receipt,
  FileCheck,
  BadgePercent,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Is GST registration mandatory for all Limited Liability Partnerships (LLPs)?",
    a: "GST registration is mandatory for an LLP if its aggregate annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in special category states) or ₹20 Lakhs for services (₹10 Lakhs in special category states). Additionally, GST registration is compulsory irrespective of turnover if the LLP engages in inter-state taxable supplies, sells through e-commerce operators, or is liable to pay tax under the Reverse Charge Mechanism (RCM).",
  },
  {
    q: "What is the difference between GSTR-1 and GSTR-3B?",
    a: "GSTR-1 is a detailed statement of outward supplies (sales invoices, credit notes, debit notes, and export invoices) with no direct tax payment. GSTR-3B, on the other hand, is a monthly self-declaration summary return where outward liabilities and eligible Input Tax Credit (ITC) from GSTR-2B are offset, and the net balance tax is settled in cash through electronic challans.",
  },
  {
    q: "Can an LLP file GST returns using an OTP (EVC) instead of a DSC?",
    a: "No. Under Rule 26 of the Central Goods and Services Tax (CGST) Rules, 2017, all registered companies and Limited Liability Partnerships must electronically sign and authenticate their GST returns exclusively using a valid Class 3 Digital Signature Certificate (DSC) of a designated partner. Electronic Verification Code (EVC) OTP authentication is permitted only for proprietorships and ordinary partnerships.",
  },
  {
    q: "What happens if an LLP has zero sales or purchases in a month?",
    a: "Even if an LLP has zero business transactions in a given tax period, filing a 'Nil Return' in GSTR-1 and GSTR-3B is legally mandatory before the due date. Failure to file Nil returns still incurs a statutory late fee of ₹20 per day (₹10 CGST + ₹10 SGST) per return until rectified.",
  },
  {
    q: "What is the penalty for late filing of GST returns in India?",
    a: "For regular returns with tax liabilities, the statutory late fee is ₹50 per day (₹25 CGST + ₹25 SGST) subject to a maximum cap of ₹10,000 per return. In addition, interest at 18% per annum is levied on the net tax liability payable in cash from the due date until the actual date of payment.",
  },
  {
    q: "What is the consequence if GSTR-1 and GSTR-3B figures do not match?",
    a: "Under Rule 88C of the CGST Rules, if the outward tax liability reported in GSTR-1 exceeds the liability paid in GSTR-3B by a prescribed percentage or amount, an automated system notice in Form DRC-01B is served. The LLP must either pay the differential tax with interest or explain the reasons within 7 days, failing which recovery proceedings are initiated and subsequent GSTR-1 filing is blocked.",
  },
  {
    q: "What is the newly introduced Form GSTR-1A?",
    a: "GSTR-1A is an optional amendment facility introduced by the GST Council. It allows taxpayers to add missed invoices, modify details, or amend outward supplies reported in GSTR-1 before filing the corresponding GSTR-3B for that tax period, ensuring that the auto-populated tax figures in GSTR-3B match true liability perfectly.",
  },
];

const GST_RETURN_TYPES = [
  {
    form: "GSTR-1",
    purpose: "Statement of Outward Supplies (Sales)",
    frequency: "Monthly (11th) or Quarterly (13th under QRMP)",
    who: "All regular taxpayers registered under GST",
    details: "Invoice-level details of B2B sales, debit/credit notes, exports, and consolidated B2C sales summary.",
  },
  {
    form: "GSTR-3B",
    purpose: "Monthly Summary Return & Net Tax Settlement",
    frequency: "Monthly (20th of the following month)",
    who: "All regular taxpayers",
    details: "Summary of outward supplies, auto-populated ITC from GSTR-2B, reverse charge liabilities, and cash ledger payments.",
  },
  {
    form: "CMP-08 / GSTR-4",
    purpose: "Composition Scheme Quarterly Challan & Annual Return",
    frequency: "Quarterly (18th) / Annually (April 30th)",
    who: "Composition scheme dealers (Turnover up to ₹1.5 Cr)",
    details: "Simplified flat tax declaration without input tax credit benefits.",
  },
  {
    form: "GSTR-9",
    purpose: "Consolidated Annual Return",
    frequency: "Annually (by December 31st following fiscal year)",
    who: "Regular taxpayers with turnover > ₹2 Crores",
    details: "Complete reconciliation of monthly returns, audited financials, taxes paid, and ITC claimed throughout the year.",
  },
  {
    form: "GSTR-9C",
    purpose: "Reconciliation Statement",
    frequency: "Annually (by December 31st following fiscal year)",
    who: "Taxpayers with aggregate turnover > ₹5 Crores",
    details: "Self-certified reconciliation statement between audited annual accounts and the GSTR-9 annual return.",
  },
  {
    form: "GSTR-10",
    purpose: "Final Return upon Cancellation",
    frequency: "Within 3 months of cancellation or order date",
    who: "Entities whose GSTIN has been cancelled or surrendered",
    details: "Details of closing stock held, capital goods, and corresponding input tax liabilities to be reversed.",
  },
];

export default function UnderstandGstReturnFilingsAComprehensiveGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LlpGuideLayout
      currentSlug="understand-gst-return-filings-a-comprehensive-guide"
      title="Understanding GST Return Filings: A Comprehensive Guide for LLPs & Businesses"
      breadcrumbLabel="GST Return Filings Guide"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Section */}
      <section className="space-y-4">
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          The landscape of indirect tax compliance in India is founded upon the <strong className="font-semibold text-slate-950">Goods and Services Tax (GST)</strong> framework. For Limited Liability Partnerships (LLPs), private corporations, and growing businesses, maintaining meticulous, timely GST return filings is not merely a statutory obligation—it is directly tied to working capital efficiency, seamless vendor input tax credit (ITC) flow, and commercial credibility.
        </p>
        <p className="text-[14px] text-slate-700 leading-relaxed">
          Navigating monthly, quarterly, and annual GST obligations requires a firm grasp of procedural due dates, dynamic ITC matching against <strong className="font-medium text-slate-900">GSTR-2B</strong>, electronic challan payments, and automated MCA-GST data sharing. This detailed handbook simplifies every dimension of GST return filings under current statutory regulations.
        </p>
      </section>

      {/* What is GST & Why it Matters */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-semibold text-base sm:text-lg">
          <Receipt className="w-5 h-5 text-emerald-600" />
          <h2>What is GST and Why is Timely Return Filing Critical?</h2>
        </div>
        <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
          Introduced on July 1, 2017, the Goods and Services Tax (GST) consolidated dozens of central and state indirect taxes—including Central Excise, Service Tax, State VAT, and Entry Tax—into a single destination-based tax regime. The core architecture of GST eliminates the cascading "tax on tax" effect through a continuous chain of Input Tax Credits.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-[13px]">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-semibold">Seamless ITC Pass-Through</strong>
            <p className="text-slate-600 leading-relaxed">
              When your LLP files GSTR-1 on time, your corporate clients can claim Input Tax Credit without friction, ensuring repeat contracts and prompt payments.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-semibold">Zero Late Fees &amp; Interest</strong>
            <p className="text-slate-600 leading-relaxed">
              Timely filing circumvents the daily statutory late fees of ₹50/day and punishing 18% per annum interest on unremitted tax dues.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-semibold">Protection from Suspension</strong>
            <p className="text-slate-600 leading-relaxed">
              Consistent compliance prevents automated blocking of your E-Way Bill facility (Rule 138E) and protects your GSTIN from department cancellation.
            </p>
          </div>
        </div>
      </section>

      {/* Types of GST Returns Table */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
            Comprehensive Summary of GST Return Types &amp; Deadlines
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1">
            Every business entity registered under GST must file returns tailored to its registration category and transaction volumes:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-900 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Return Form</th>
                <th className="p-3 sm:p-3.5">Purpose &amp; Description</th>
                <th className="p-3 sm:p-3.5">Statutory Due Date</th>
                <th className="p-3 sm:p-3.5">Target Entities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {GST_RETURN_TYPES.map((ret, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="p-3 sm:p-3.5 font-bold text-emerald-800">{ret.form}</td>
                  <td className="p-3 sm:p-3.5">
                    <span className="font-medium text-slate-900 block">{ret.purpose}</span>
                    <span className="text-[11.5px] text-slate-500">{ret.details}</span>
                  </td>
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900">{ret.frequency}</td>
                  <td className="p-3 sm:p-3.5 text-slate-600">{ret.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7-Step Filing Workflow */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
            Step-by-Step Practical Workflow for Filing GST Returns
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1">
            Follow this rigorous 7-stage workflow to file accurate returns and eliminate tax department scrutiny:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13px]">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 1: Ledger &amp; Invoice Data Compilation</span>
            <p className="text-slate-600 leading-relaxed">
              Consolidate sales registers, purchase books, e-invoicing JSON files, and credit/debit notes for the tax period. Ensure all taxable, exempt, and export sales are categorized correctly.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 2: GSTR-2B Input Tax Credit Reconciliation</span>
            <p className="text-slate-600 leading-relaxed">
              Cross-verify purchase registers against the auto-generated GSTR-2B statement. Under Section 16(2)(aa), ITC can only be claimed if your supplier has reported the invoice in their GSTR-1.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 3: Access the Official GST Portal</span>
            <p className="text-slate-600 leading-relaxed">
              Log in to the government portal (<code>services.gst.gov.in</code>) using your registered 15-digit GSTIN credentials and navigate to the Returns Dashboard.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 4: Prepare &amp; Upload GSTR-1 Outward Supplies</span>
            <p className="text-slate-600 leading-relaxed">
              Enter invoice details in Table 4A (B2B sales), Table 5 (large B2C sales), Table 7 (small B2C), and Table 12 (HSN summary). Generate summary and submit with DSC.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 5: Review Auto-Populated GSTR-3B</span>
            <p className="text-slate-600 leading-relaxed">
              After GSTR-1 submission, open GSTR-3B. Verify that outward tax liabilities match GSTR-1 and that eligible ITC reflects GSTR-2B accurately.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 6: Offset Tax Liability &amp; Challan Payment</span>
            <p className="text-slate-600 leading-relaxed">
              Offset outward tax against available electronic credit ledger balance. If cash shortfall exists, generate a PMT-06 challan and pay via Net Banking or NEFT/RTGS.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white md:col-span-2 space-y-1">
            <span className="font-bold text-emerald-700 block text-xs">Stage 7: Electronic Verification (DSC) &amp; ARN Generation</span>
            <p className="text-slate-600 leading-relaxed">
              For LLPs and companies, sign the return electronically using the Class-3 Digital Signature Certificate (DSC) of a designated partner. Upon successful filing, an Application Reference Number (ARN) is generated for statutory audit records.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-semibold text-base">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Critical GST Return Mistakes to Avoid</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-amber-950/90">
          <div className="p-3 rounded-xl bg-white/80 border border-amber-200/70 space-y-1">
            <strong className="block font-semibold">1. Claiming Ineligible / Blocked ITC</strong>
            <p>
              Claiming credit on goods or services listed under Section 17(5) (such as personal motor vehicles, club memberships, food &amp; beverages) attracts mandatory recovery with 18% interest and 100% penalty.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/80 border border-amber-200/70 space-y-1">
            <strong className="block font-semibold">2. Discrepancy Between GSTR-1 and GSTR-3B</strong>
            <p>
              Reporting higher sales in GSTR-1 than paid in GSTR-3B triggers automated scrutiny notices in Form DRC-01B under Rule 88C, halting future return filings.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/80 border border-amber-200/70 space-y-1">
            <strong className="block font-semibold">3. Failure to File Nil Returns</strong>
            <p>
              Assuming zero business means zero filing is an expensive mistake. Even Nil returns accumulate daily late fees until formally lodged.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/80 border border-amber-200/70 space-y-1">
            <strong className="block font-semibold">4. Incorrect HSN / SAC Code Classifications</strong>
            <p>
              Providing truncated or incorrect 6-digit or 8-digit HSN codes can lead to misclassification penalties and customer invoice rejections.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Regulatory Developments */}
      <section className="space-y-3 pt-4 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
          Latest GST Reforms &amp; Compliance Updates
        </h2>
        <p className="text-[13.5px] text-slate-700 leading-relaxed">
          The GST Council and Central Board of Indirect Taxes and Customs (CBIC) continuously introduce procedural upgrades to modernize compliance:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] mt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <strong className="text-slate-900 block font-semibold">GSTR-1A Amendment Window</strong>
            <p className="text-slate-600 leading-relaxed">
              Taxpayers can now amend or add outward supply records between GSTR-1 and GSTR-3B, ensuring exact alignment before tax remittance.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <strong className="text-slate-900 block font-semibold">Hard-Locking of Auto-ITC</strong>
            <p className="text-slate-600 leading-relaxed">
              Manual upward tampering of ITC values in Table 4 of GSTR-3B beyond GSTR-2B thresholds now triggers mandatory system warnings and officer alerts.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <strong className="text-slate-900 block font-semibold">E-Invoicing Expansion</strong>
            <p className="text-slate-600 leading-relaxed">
              Mandatory B2B e-invoicing for all businesses crossing statutory aggregate turnover limits ensures real-time reporting to the Invoice Registration Portal (IRP).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
              Authoritative answers to common GST return and compliance queries.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-xs sm:text-[13.5px] text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer gap-3"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF9F7]/40">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </LlpGuideLayout>
  );
}
