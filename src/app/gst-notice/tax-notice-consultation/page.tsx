"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstNoticeGuideLayout from "@/components/GstNoticeGuideLayout";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  FileText,
  Scale,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Briefcase,
  AlertTriangle,
  Gavel,
  Landmark,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What documents should I have ready for a GST tax notice consultation?",
    a: "You should assemble: (1) The complete official notice PDF downloaded from the portal containing the Document Identification Number (DIN); (2) Filed return acknowledgments (GSTR-1, GSTR-3B, GSTR-9); (3) Relevant purchase registers and supplier invoices; (4) Bank account statements showing supplier payments; and (5) Any prior correspondence with the tax department.",
  },
  {
    q: "Can a tax consultant attend personal hearings on my behalf?",
    a: "Yes. Under Section 116 of the CGST Act, a registered taxpayer can authorize a Chartered Accountant, Company Secretary, Cost Accountant, or legal practitioner through a formal Letter of Authorization or Power of Attorney (Vakalatnama) to represent them in personal hearings before the Adjudicating Authority or Appellate Authority.",
  },
  {
    q: "How does a consultation help if the tax demand appears valid?",
    a: "Even if an error exists, a tax consultant ensures you utilize statutory provisions such as Section 73(5) or Section 74(5) to pay the admitted tax voluntarily, thereby capping or completely waiving statutory penalties. Furthermore, consultants ensure interest under Section 50 is calculated strictly on the net cash liability rather than the gross invoice amount.",
  },
  {
    q: "What is the typical duration and outcome of an initial notice consultation?",
    a: "A comprehensive notice consultation typically lasts 30 to 45 minutes. The outcome includes a legal diagnosis of the notice, an assessment of potential financial liability, identification of statutory defense grounds, and a detailed step-by-step roadmap for drafting and filing the reply.",
  },
  {
    q: "Why choose Merrafilings for tax notice consultations?",
    a: "Merrafilings houses a dedicated panel of ex-departmental consultants, Chartered Accountants, and High Court litigators who have handled over 10,000+ indirect tax notices across India. We deliver forensic arithmetic reconciliation combined with authoritative statutory drafting.",
  },
];

export default function TaxNoticeConsultationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstNoticeGuideLayout
      currentSlug="tax-notice-consultation"
      title="Tax Notice Consultation: Expert Guidance"
      breadcrumbLabel="Tax Notice Consultation"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Legal & Tax Litigation Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Receiving a formal tax notice can be an overwhelming experience. Navigating the intricate maze of statutory tax provisions, algorithmic discrepancy assessments, and strict limitation deadlines requires specialized legal and financial knowledge. A dedicated tax notice consultation provides the technical clarity and legal strategy required to protect your financial interests.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            This guide explores the role of a professional tax notice consultation, how expert guidance ensures regulatory compliance, the primary notice categories encountered in indirect and direct tax administration, and how to select the right practitioner to resolve your notice with confidence.
          </p>
        </section>

        {/* Section 1: What is a Tax Notice Consultation? */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is a Tax Notice Consultation?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A tax notice consultation is a structured advisory session between a taxpayer and a qualified indirect tax practitioner, Chartered Accountant, or tax advocate. The objective is to evaluate the legal validity and arithmetic allegations contained in an official departmental notice and formulate an unassailable response.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Forensic Legal Diagnosis:</strong>
              <p>Analyzing the statutory sections cited by the tax officer and verifying whether mandatory procedural standards (such as DIN generation) were followed.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Data &amp; ITC Reconciliation:</strong>
              <p>Comparing return filings (GSTR-1, 3B, 2B, 9) against audited ledgers to pinpoint the exact numerical variances alleged in the notice.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Strategic Legal Drafting:</strong>
              <p>Drafting a structured, point-by-point rebuttal citing binding CBIC circulars, GST Council clarifications, and appellate precedents.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Hearing Representation:</strong>
              <p>Preparing taxpayers for virtual or physical personal hearings and representing cases before Adjudicating Authorities under Section 116.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Are Tax Notice Consultations Essential? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Why Are Tax Notice Consultations Essential?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Attempting to reply to a statutory tax notice without technical expertise carries substantial financial risks. Here is why consulting an experienced tax advisor is vital:
          </p>
          <ul className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Expert Statutory Interpretation:</strong> Tax consultants possess specialized understanding of evolving tax statutes, judicial rulings, and departmental circulars that may directly favor your case.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Mitigating Financial Exposure:</strong> Improper or incomplete replies often lead officers to confirm maximum tax demands with 100% penalties and compounding interest. Expert consultation ensures penalties are contested or legally capped.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Adherence to Strict Limitation Timelines:</strong> Missing the 30-day statutory response window triggers ex-parte orders. Consultants ensure replies are prepared and submitted well before the deadline.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Safeguarding Business Continuity:</strong> By delegating notice defense to seasoned professionals, leadership can maintain focus on daily commercial operations without unneeded stress.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3: Navigating Common Tax Notices */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Navigating Common Tax Notices</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Tax notice consultations address a diverse array of statutory communications across indirect and direct tax regimes:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
              <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Notice Identifier</th>
                  <th className="py-3 px-4">Governing Section</th>
                  <th className="py-3 px-4">Core Allegation / Trigger</th>
                  <th className="py-3 px-4">Consultant Defense Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Form ASMT-10</td>
                  <td className="py-3 px-4 text-slate-800">Section 61 (Scrutiny)</td>
                  <td className="py-3 px-4 text-slate-700">GSTR-1 vs 3B turnover or GSTR-2B vs 3B ITC mismatch</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Reconcile timing differences; file Form ASMT-11</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Form DRC-01A</td>
                  <td className="py-3 px-4 text-slate-800">Rule 142(1A)</td>
                  <td className="py-3 px-4 text-slate-700">Pre-SCN intimation of tax liability</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Settle admitted tax with 0% penalty via DRC-03 or file DRC-01B</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Form DRC-01</td>
                  <td className="py-3 px-4 text-slate-800">Section 73 or 74</td>
                  <td className="py-3 px-4 text-slate-700">Show cause notice for tax demand, interest &amp; penalty</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Draft formal legal rebuttal on Form DRC-06</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Form GSTR-3A</td>
                  <td className="py-3 px-4 text-slate-800">Section 46</td>
                  <td className="py-3 px-4 text-slate-700">Default in filing monthly or annual returns</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Fast-track filing within 15 days to stop Best Judgment</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">Form ADT-01</td>
                  <td className="py-3 px-4 text-slate-800">Section 65</td>
                  <td className="py-3 px-4 text-slate-700">Departmental audit of books and transactions</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Audit defense dossier preparation &amp; representation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Steps to Prepare for a Tax Notice Consultation */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Steps to Prepare for a Productive Consultation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            To derive maximum strategic value from your consultation session, prepare the following materials in advance:
          </p>
          <div className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">1. Gather Complete Notice Documentation:</strong>
              Download the original notice PDF from the GST portal, ensuring all computation sheets, annexures, and exhibits are included.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">2. Compile Relevant Return Filings:</strong>
              Assemble filed copies of GSTR-1, GSTR-3B, GSTR-9, and the auto-generated GSTR-2B for the relevant financial year.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">3. Highlight Known Discrepancies:</strong>
              Make a brief list of any known transactions—such as a credit note issued late or an inadvertent typo in outward turnover—to discuss upfront.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">4. Prepare Clarification Questions:</strong>
              List specific questions regarding financial exposure, potential penalty waiving, and timeline feasibility.
            </div>
          </div>
        </section>

        {/* Section 5: Choosing the Right Tax Notice Consultant */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Users2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Choosing the Right Tax Notice Consultant</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Selecting the right advisory partner directly influences the outcome of your notice. Consider these benchmark criteria:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-1">Litigation Track Record:</strong>
              <p>Verify that the firm has proven experience defending tax disputes before Adjudicating Authorities and the Appellate Tribunal.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-1">Multi-Disciplinary Team:</strong>
              <p>Ensure the team comprises both Chartered Accountants for data reconciliation and tax advocates for legal drafting.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-1">Transparent Pricing:</strong>
              <p>Seek fixed professional fee structures with clear deliverables rather than ambiguous hourly rates.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-1">Electronic Filing Capabilities:</strong>
              <p>Confirm the practitioner can handle end-to-end digital submission on the GST portal using your authorized credentials.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Taking Charge of Your Tax Obligations
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A tax notice consultation empowers taxpayers with the knowledge, legal leverage, and strategic direction necessary to resolve departmental disputes cleanly. Engaging specialized practitioners is an investment in your company&apos;s financial security, protecting you from unwarranted penalties and preserving commercial peace of mind.
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
            <span>Schedule Your Tax Notice Consultation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Consult a Senior GST Litigator Today
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Schedule a dedicated 30-minute case evaluation with Merrafilings. Our senior tax advocates examine your notice, determine exposure, and craft an actionable legal action plan.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-notice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Book 30-Min Consultation (₹1,988)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstNoticeGuideLayout>
  );
}
