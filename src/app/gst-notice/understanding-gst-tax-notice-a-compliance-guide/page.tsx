"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstNoticeGuideLayout from "@/components/GstNoticeGuideLayout";
import {
  ShieldCheck,
  AlertCircle,
  FileSpreadsheet,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  FileText,
  Sparkles,
  Layers,
  Scale,
  Clock,
  TrendingUp,
  Cpu,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is the primary difference between a Scrutiny Notice and a Show Cause Notice (SCN)?",
    a: "A Scrutiny Notice (Form ASMT-10) is an exploratory inquiry issued under Section 61 where the tax officer seeks explanations for observed discrepancies between your return filings (such as GSTR-1 vs GSTR-3B). A Show Cause Notice (Form DRC-01), issued under Section 73 or 74, is a formal legal demand quantifying specific tax liabilities, interest, and penalties that you must formally contest or pay.",
  },
  {
    q: "Can the tax department attach my bank accounts over a GST notice?",
    a: "Provisional attachment of bank accounts under Section 83 is an extraordinary measure reserved for pending proceedings under Section 62, 63, 64, 67, 73, or 74 to protect revenue. It cannot be done casually for standard initial inquiries without written commissioner-level authorization.",
  },
  {
    q: "How does the GST portal detect discrepancies automatically?",
    a: "The GST Network runs automated risk assessment algorithms that cross-verify data across three layers: (1) Outward tax liability in GSTR-1 vs cash paid in GSTR-3B; (2) Inward ITC claimed in GSTR-3B vs ITC auto-generated in supplier-filed GSTR-2B; and (3) E-Way Bills and E-Invoices generated through the Invoice Registration Portal (IRP).",
  },
  {
    q: "What should I do if an audit notice (Form ADT-01) is served on my business?",
    a: "Upon receiving Form ADT-01 under Section 65, you are granted at least 15 working days' advance notice before the audit begins. You should immediately compile audited financial statements, general ledgers, trial balance, tax invoice registers, and input-output reconciliations, and consult your tax advisor to prepare an audit defense file.",
  },
  {
    q: "How does Merrafilings assist with ongoing GST compliance and notice handling?",
    a: "Merrafilings offers comprehensive compliance management including monthly 3-way reconciliation (books vs GSTR-1 vs GSTR-2B), proactive mismatch alerts, advance notice diagnosis, structured legal reply drafting, and representation before adjudicating authorities.",
  },
];

export default function UnderstandingGstTaxNoticeGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstNoticeGuideLayout
      currentSlug="understanding-gst-tax-notice-a-compliance-guide"
      title="Understanding GST Tax Notice: A Guide to Compliance"
      breadcrumbLabel="Tax Notice Compliance Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            In today&apos;s dynamic and increasingly digitized economic ecosystem, navigating regulatory obligations under the Goods and Services Tax (GST) framework is indispensable for business resilience. Dealing with a GST tax notice has become a routine aspect of tax administration as enforcement shifts toward real-time algorithmic scrutiny.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            This comprehensive compliance guide provides a detailed breakdown of what a GST tax notice entails, the statutory grounds upon which notices are issued, step-by-step procedures to resolve queries effectively, and operational best practices to safeguard your enterprise from future inquiries.
          </p>
        </section>

        {/* Section 1: What is a GST Tax Notice? */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is a GST Tax Notice?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A GST tax notice is an official legal communication issued by Central or State tax authorities under the provisions of the Central Goods and Services Tax (CGST) Act, 2017, State GST Acts, or the Integrated GST (IGST) Act. Notices serve as formal instruments alerting taxpayers to observed discrepancies, compliance omissions, or unpaid liabilities.
          </p>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <h3 className="text-sm font-semibold text-indigo-950">Key Attributes of a Valid GST Notice:</h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Document Identification Number (DIN):</strong> Every valid departmental communication must bear an official system-generated DIN verifiable on the CBIC portal.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Specific Statutory Section:</strong> The notice must explicitly invoke the governing section (e.g., Section 46, 61, 65, 73, or 74) specifying the officer&apos;s jurisdiction.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Clear Quantification of Allegations:</strong> The notice must clearly enumerate observed variances, turnover differences, or contested Input Tax Credit figures.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Types of GST Tax Notices */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Types of GST Tax Notices Under Indian Law</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The GST legislation establishes specific notice categories, each designed for a particular phase of the assessment cycle:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md transition-all">
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">Section 46 • Rule 68</span>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">Notice for Non-Filing of Returns (Form GSTR-3A)</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Served when a taxpayer fails to file monthly GSTR-1 or GSTR-3B by the statutory due date. Grants 15 days to file the pending return along with applicable late fees, failing which Best Judgment Assessment is initiated under Section 62.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md transition-all">
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">Section 61 • Rule 99</span>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">Return Scrutiny Notice (Form ASMT-10)</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Highlights internal variances between GSTR-1 outward turnover, GSTR-3B tax paid, and GSTR-2B input tax credit. Requires submission of an explanatory reply on Form ASMT-11 within 30 days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md transition-all">
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">Section 73 &amp; 74 • Rule 142</span>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">Show Cause &amp; Demand Notice (Form DRC-01)</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Formal legal notice alleging non-payment, short-payment of tax, or wrongful credit availing. Demands payment of tax, mandatory 18% annual interest under Section 50, and statutory penalties. Reply is filed on Form DRC-06.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md transition-all">
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">Section 65 • Rule 101</span>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">Notice for Departmental Audit (Form ADT-01)</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Notifies the taxpayer that an official audit team will examine books of accounts, financial ledgers, and transaction trails. The department must give at least 15 working days&apos; advance notice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Common Reasons for Receiving a GST Tax Notice */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Common Reasons for Receiving a GST Tax Notice</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A comprehensive audit of thousands of tax notices reveals that the majority stem from the following operational triggers:
          </p>
          <div className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">1. Turnover Discrepancies between GST Returns and Financials / Form 26AS:</strong>
              Variances between gross revenue reported in audited financial statements, Income Tax Form 26AS / AIS, and aggregate taxable turnover reported in GSTR-9/9C.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">2. Failure to Reconcile GSTR-1 and GSTR-3B:</strong>
              Declaring high outward taxable supplies in GSTR-1 (which passes credit to buyers) but failing to remit corresponding cash or credit tax in monthly GSTR-3B.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">3. Claiming Undue or Ineligible Input Tax Credit (ITC):</strong>
              Availing ITC that exceeds GSTR-2B, claiming credit on blocked categories under Section 17(5) (e.g., motor vehicles, food &amp; beverages, personal consumption), or failing to reverse ITC under Rule 42/43.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">4. Failure to Pay Suppliers within 180 Days (Rule 37):</strong>
              Under the CGST Rules, if a recipient fails to pay the supplier within 180 days from the invoice date, claimed ITC must be reversed with interest.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">5. Delays in Remitting Cash GST Liabilities:</strong>
              Filing returns without discharging tax dues through the electronic cash ledger, triggering automated interest calculation demands under Section 50.
            </div>
          </div>
        </section>

        {/* Section 4: Steps to Take Upon Receiving a GST Notice */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Steps to Take Upon Receiving a GST Notice</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Adopting a structured methodology ensures that your defense is legally tenable and factually sound:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 1 • Thorough Reading</span>
              <p>Identify the exact grounds, numerical computations, and statutory deadline stipulated in the notice.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 2 • Evidence Gathering</span>
              <p>Extract relevant tax invoices, e-way bills, bank clearance statements, and GSTR-2B download archives.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 3 • Expert Consultation</span>
              <p>Engage experienced tax advocates or Chartered Accountants to draft an authoritative legal submission.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-bold text-indigo-600 block mb-1">Step 4 • Electronic Portal Filing</span>
              <p>Submit your formal reply with verifiable attachments before the deadline to prevent adverse ex-parte orders.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Preventing GST Tax Notices: Best Practices */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Preventing GST Tax Notices: Operational Best Practices</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            While knowing how to respond to a notice is essential, instituting preventive internal controls minimizes risk:
          </p>
          <ul className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Maintain Transparent Digital Records:</strong> Archive electronic invoices, delivery challans, and proof of receipt for at least 72 months from the annual return due date as required by Section 36.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Execute Monthly 3-Way Reconciliations:</strong> Compare your purchase register against auto-populated GSTR-2B before filing GSTR-3B to prevent claiming ineligible or missing credits.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Adhere to Sequential Filing Mandates:</strong> Ensure GSTR-1 is filed accurately before generating GSTR-3B, eliminating artificial timing variances.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Track CBIC Clarifications &amp; Circulars:</strong> Keep up to date with GST Council recommendations, rate notifications, and judicial interpretations.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Conduct Periodic Internal Audits:</strong> Perform bi-annual diagnostic reviews with an external tax advisor to detect and rectify errors proactively.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 6: Changing Dynamics of GST Compliance */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The Changing Dynamics of GST Compliance in India</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Tax compliance in India has transitioned from manual document verification to an automated, data-driven ecosystem. Recent developments that directly influence tax notices include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block">E-Invoicing Expansion:</strong>
              <p>Real-time invoice generation through Invoice Registration Portals (IRP) creates instant data trails, eliminating discrepancies between business billing and tax returns.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block">Strict ITC Matching (Section 16(2)(aa)):</strong>
              <p>Input Tax Credit can strictly only be availed if the supplier has filed GSTR-1 and the credit is reflected in the recipient&apos;s GSTR-2B, eliminating provisional credit buffers.</p>
            </div>
          </div>
        </section>

        {/* Section 7: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Proactive Compliance as a Strategic Asset
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Navigating a GST tax notice need not disrupt your business operations when handled with technical precision and timely diligence. By understanding the underlying reasons, assembling complete factual documentation, and leveraging seasoned tax professionals, taxpayers can resolve notices efficiently and establish lasting compliance hygiene.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1F1646] via-[#2D1B69] to-[#1F1646] text-white shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Merrafilings Expert Compliance Support</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Facing an Audit or Scrutiny Notice? Let Our Litigators Assist.
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Book a dedicated consultation session with our indirect tax litigation specialists to analyze your notice, evaluate risk exposure, and draft an authoritative reply.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-notice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore Notice Defense Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstNoticeGuideLayout>
  );
}
