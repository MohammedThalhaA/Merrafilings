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
  Laptop,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  Download,
  UploadCloud,
  FileSignature,
  Search,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is the file format and file size limit for uploading attachments on the GST portal?",
    a: "The GST portal accepts attachments exclusively in PDF format. Each individual supporting file must not exceed 5 MB in size. Up to 4 or 5 separate PDF attachments can typically be uploaded depending on the specific notice reply form (e.g., Form ASMT-11 or Form DRC-06). Ensure scanned PDFs are legible and black-and-white to keep file sizes within limits.",
  },
  {
    q: "Can I sign and submit my GST notice reply using Aadhaar OTP (EVC)?",
    a: "Proprietorships, individuals, and partnerships can submit their GST notice replies using Aadhaar-based Electronic Verification Code (EVC). However, for Companies (Private Limited, Public Limited) and LLPs, digital signing using a registered Class 3 Digital Signature Certificate (DSC) is mandatory under the CGST Rules.",
  },
  {
    q: "Where can I view the order passed after submitting my online reply?",
    a: "Once the adjudicating officer evaluates your reply, any formal order (such as Form ASMT-12 dropping scrutiny or Form DRC-07 confirming a tax demand) will be uploaded to the GST portal. You can view and download it under Services > User Services > View Notices and Orders or View Additional Notices and Orders.",
  },
  {
    q: "Can I request an extension of time if I cannot compile all records within 30 days?",
    a: "Yes. You can submit an interim response before the 30-day deadline expires on the GST portal explaining the reasons for delay (such as pending vendor reconciliations or third-party confirmations) and formally requesting an extension of 15 to 30 days. Most officers grant reasonable extensions when requested before the due date.",
  },
  {
    q: "How does Merrafilings assist with the online reply submission process?",
    a: "Merrafilings takes complete responsibility for the reply process. Our Chartered Accountants evaluate the notice allegations, prepare comprehensive mathematical reconciliation exhibits, draft a formal legal submission citing relevant CBIC circulars, format attachments according to portal size constraints, and file the reply via authorized DSC/EVC credentials.",
  },
];

export default function ReplyToGstNoticeOnlineGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstNoticeGuideLayout
      currentSlug="reply-to-a-gst-notice-online-stepbystep-guide"
      title="How to Reply to a GST Notice Online: Step-by-Step Guide"
      breadcrumbLabel="Online Reply Step-by-Step"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Portal & Litigation Desk"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Tax administration under India&apos;s Goods and Services Tax (GST) framework has achieved unprecedented digital transformation. The era of carrying heavy physical binders to local tax ward offices has been largely replaced by automated electronic workflows on the GST common portal (<code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded font-mono text-sm">services.gst.gov.in</code>).
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Responding to a GST notice digitally is faster, transparent, and creates an immutable digital audit trail. However, navigating the portal&apos;s interface, adhering to statutory form formats, uploading compressed evidence files, and authenticating via DSC/EVC requires strict procedural compliance. This authoritative guide provides an exact 7-step roadmap to draft, format, and submit your GST notice reply online without errors.
          </p>
        </section>

        {/* Section 1: Understanding GST Notices */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Understanding GST Notices: Origins &amp; Triggers</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A GST notice is an official legal communication issued by the proper officer under the CGST/SGST Acts. Common triggers include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Return Data Inconsistencies:</strong>
              Discrepancies noted between outward sales declared in GSTR-1 and tax liability paid in GSTR-3B.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Input Tax Credit (ITC) Divergence:</strong>
              Excess credit claimed in GSTR-3B compared to auto-generated supplier filings in GSTR-2B.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Default in Filing Periodic Returns:</strong>
              Failure to submit monthly returns by the statutory due date (triggering Form GSTR-3A).
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">E-Way Bill &amp; E-Invoice Mismatches:</strong>
              Variances between movement documents and declared turnover in monthly returns.
            </div>
          </div>
        </section>

        {/* Section 2: The Importance of Timely Response */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500 shrink-0" />
            <span>The Critical Importance of Timely Response</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Ignoring or delaying your reply past the statutory limitation period (typically 30 days) triggers automatic punitive enforcement mechanisms:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Ex-Parte Best Judgment Assessment (Section 62/73):</strong> The tax officer calculates tax liability unilaterally based on available portal data without considering your purchase credits or exemptions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>Recovery Proceedings (Section 79):</strong> The department can issue garnishee notices to your bankers to freeze accounts and debit funds directly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-600 shrink-0">•</span>
              <span><strong>GSTIN Suspension &amp; Cancellation:</strong> Failure to respond to non-filing or registration inquiries leads to immediate suspension of your GSTIN, halting billing operations.</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Step-by-Step Guide to Reply to a GST Notice Online */}
        <section className="space-y-6 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Laptop className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step Guide to Reply to a GST Notice Online (7-Step Portal Workflow)</span>
          </h2>

          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span>Access the GST Portal &amp; Authenticate</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Navigate to the official Goods and Services Tax common portal (<code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">https://www.gst.gov.in</code>). Click on <strong>Login</strong> at the top right corner. Enter your authorized 15-character GSTIN Username, Password, and solve the Captcha challenge.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Navigate to Notices and Orders Repository</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Once inside the dashboard, click on <strong>Services</strong> in the top navigation bar &gt; select <strong>User Services</strong> from the dropdown menu &gt; click on <strong>View Notices and Orders</strong>. For certain demand notices (such as DRC-01 or DRC-01A), also check <strong>Services &gt; User Services &gt; View Additional Notices and Orders</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Download &amp; Scrutinize the Notice PDF</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Identify the relevant notice based on the date of issue and Reference Number. Click on the <strong>Download</strong> link to save the complete notice PDF. Carefully examine the Document Identification Number (DIN), the statutory section cited, the detailed calculation sheet in the annexures, and the response deadline date.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span>Compile Evidentiary Documentation &amp; Reconciliations</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Based on the specific allegations, assemble all supporting documentation: tax invoices, GSTR-2B monthly archives, bank account payment trails showing invoice settlement within 180 days (Rule 37), e-way bills, and chartered accountant reconciliation certificates. Convert all documents into black-and-white PDFs under 5MB each.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <span>Draft a Structured Legal Submission Letter</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Prepare a formal written reply on your company letterhead. Start with the notice reference number, DIN, and date. Address each allegation in a dedicated numbered paragraph. Quote applicable CGST Sections, Rules, and relevant CBIC Circulars. Conclude with a clear prayer requesting the dropping of proceedings, and explicitly tick the box requesting a <strong>Personal Hearing</strong> before any adverse order is passed.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">6</span>
                <span>Submit Response Online &amp; Digitally Authenticate</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Return to the notice entry on the GST portal and click on <strong>Reply</strong>. The system will open the statutory reply form (e.g., Form ASMT-11 for scrutiny or Form DRC-06 for demand SCN). Enter your written summary in the response text box, attach your prepared PDF files, check the verification box, select the Authorized Signatory, and sign using <strong>DSC</strong> (mandatory for companies/LLPs) or <strong>EVC</strong> (Aadhaar OTP for proprietorships).
              </p>
            </div>

            {/* Step 7 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">7</span>
                <span>Record ARN Confirmation &amp; Track Case Status</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Upon successful submission, the portal generates a 15-digit Application Reference Number (ARN) along with an official acknowledgment receipt sent to your registered email and mobile. Download and preserve this receipt. Check back periodically under <em>View Notices and Orders</em> for the officer&apos;s follow-up communication or final closure order (Form ASMT-12 / DRC-05).
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Tips for a Seamless Response Process */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Essential Tips for a Seamless Portal Response Process</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Verify File Constraints in Advance:</strong>
              Compress scanned PDFs to ensure they are strictly under 5MB. Clear, legible black-and-white scans avoid rejection.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Voluntary Tax Settlement (Form DRC-03):</strong>
              If you discover an admitted calculation shortfall, pay it voluntarily via Form DRC-03 before submitting your reply to reduce penalties.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Never Skip the Personal Hearing Request:</strong>
              Always explicitly request an opportunity of being heard in person. Failure by the officer to grant a hearing violates natural justice principles.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Engage Professional Counsel for Complex Notices:</strong>
              For notices involving Section 74 (fraud allegations) or substantial sums, engage a qualified GST litigator to avoid fatal drafting errors.
            </div>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Mastering Digital GST Notice Defense
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Replying to a GST notice online is an organized, transparent administrative process when approached systematically. By downloading the notice promptly, compiling rigorous documentary evidence, drafting an authoritative rebuttal, and submitting it well before the deadline, taxpayers can protect their businesses from ex-parte orders and unwarranted penalties.
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
            <span>Merrafilings Electronic Notice Filing Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Need Expert Support Filing Your Online GST Notice Reply?
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Let our experienced Chartered Accountants and tax lawyers handle your reply drafting, PDF evidentiary exhibit compilation, and electronic DSC portal submission.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-notice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Get Professional Notice Reply Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstNoticeGuideLayout>
  );
}
