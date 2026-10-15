"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstAmendmentGuideLayout from "@/components/GstAmendmentGuideLayout";
import {
  Laptop,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Scale,
  Clock,
  ShieldCheck,
  FileCheck2,
  Send,
  Download,
  AlertCircle,
  Terminal,
  Cpu,
  Layers,
  FileText,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How do I check the live status of my GST amendment application online?",
    a: "After submitting Form GST REG-14, you receive a 15-digit Application Reference Number (ARN). To track it, visit the GST common portal, navigate to Services > Registration > Track Application Status, enter your ARN, and view real-time status updates (such as 'Pending for Processing', 'Clarification Filed', or 'Approved').",
  },
  {
    q: "Can non-core field amendments be filed along with core field amendments in one application?",
    a: "No. The GST portal maintains separate filing pathways for core and non-core fields. To amend non-core fields (like bank accounts or contact numbers), you must navigate to 'Amendment of Registration Non-Core Fields', which is auto-approved instantly. For address or promoter changes, you must submit a separate application under 'Amendment of Registration Core Fields'.",
  },
  {
    q: "What should I do if my emSigner fails to detect my Digital Signature Certificate (DSC)?",
    a: "Ensure you are running the latest emSigner utility as Administrator. Check that port 1585 is free and your Java Runtime Environment (JRE) is up to date. Alternatively, if your business constitution permits (such as proprietorships or partnerships), authenticate using Aadhaar-based OTP (EVC).",
  },
  {
    q: "What is the penalty if I amend my business address after the 15-day statutory window?",
    a: "Failing to report changes within 15 days violates Rule 19(1) of the CGST Rules. While the portal may still permit late submission, repeated delays can attract general penalties under Section 125 up to ₹25,000, trigger physical site verification, or lead to registration suspension under Rule 21A.",
  },
  {
    q: "Does updating my GST business address automatically change my MCA registered office?",
    a: "No. The GST common portal and the Ministry of Corporate Affairs (MCA) operate on independent statutory databases. Companies must first file Form INC-22 with the ROC to change their registered office, and subsequently use the approved MCA receipt to amend their Principal Place of Business on the GST portal.",
  },
];

export default function GstAmendmentOnlineStreamlineCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAmendmentGuideLayout
      currentSlug="gst-amendment-online-streamline-your-compliance"
      title="Understanding GST Amendment & GST Amendment Online"
      breadcrumbLabel="GST Amendment Online"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            In India&apos;s dynamic corporate landscape, business agility frequently necessitates operational changes—such as moving to larger office premises, expanding warehouse branches, onboarding new partners, or updating banking channels. To ensure these operational transitions remain fully compliant, the Goods and Services Tax framework provides a completely digitized mechanism: <strong className="font-semibold text-slate-950">GST Amendment Online</strong>.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Governed under <strong className="font-semibold text-slate-950">Section 28 of the CGST Act, 2017</strong> and <strong className="font-semibold text-slate-950">Rule 19 of the CGST Rules, 2017</strong>, filing Form GST REG-14 on the common portal ensures that statutory tax records remain identical to actual commercial realities, eliminating invoice rejections, e-way bill generation blocks, and tax audits.
          </p>
        </section>

        {/* Section 1: What is a GST Amendment? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is a GST Amendment? Core vs. Non-Core Fields</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A GST amendment refers to the legal process of updating, adding, or modifying business particulars submitted during initial GST registration. The GST portal classifies amendments into two distinct operational categories:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Core Field Amendments</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Core fields involve foundational legal information that defines the entity&apos;s statutory standing. These changes require mandatory documentary justification and review by the proper tax officer within 15 working days:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
                <li>Legal Name of Business (without altering PAN).</li>
                <li>Principal Place of Business (address within the same State).</li>
                <li>Additional Places of Business (new warehouses, retail outlets).</li>
                <li>Addition / Deletion of Partners, Directors, Karta, or Managing Committee members.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Non-Core Field Amendments</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Non-core fields include routine administrative and operational details. Modifications do not require tax officer intervention and are auto-approved instantly upon digital signing:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
                <li>Bank Account details (addition, deletion, or primary account switch).</li>
                <li>Authorized Signatory contact details (mobile number &amp; email).</li>
                <li>Addition / Deletion of HSN/SAC codes for goods and services.</li>
                <li>Authorized Representative details.</li>
                <li>State-specific operational information.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Online Amendment Workflow */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Laptop className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step Portal Process for Online GST Amendment</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing Form GST REG-14 online takes less than 15 minutes when your documentation is prepared in advance. Follow this standardized procedure:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">1</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 1: Authenticate on the Common Portal</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Access <code className="font-mono text-slate-800">services.gst.gov.in</code>. Enter your valid Username and Password, input the captcha, and click &apos;Login&apos;.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">2</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 2: Choose Appropriate Amendment Pathway</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Navigate to <strong className="text-slate-800 font-semibold">Services &gt; Registration</strong> and select either <strong className="text-slate-800 font-semibold">&apos;Amendment of Registration Core Fields&apos;</strong> or <strong className="text-slate-800 font-semibold">&apos;Amendment of Registration Non-Core Fields&apos;</strong> depending upon your intended changes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">3</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 3: Modify Information &amp; Specify Statutory Reasons</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Select the tab you need to update (e.g., &apos;Principal Place of Business&apos; or &apos;Promoter/Partners&apos;). Click &apos;Edit&apos;, make the necessary modifications, select the exact <strong className="text-slate-800 font-semibold">Date of Amendment</strong>, and provide a clear commercial justification in the &apos;Reasons&apos; text box.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">4</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 4: Upload High-Resolution Documentary Evidence</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Upload verified proof (such as registered lease deeds, latest electricity bills, owner NOC, or Board Resolutions). Files must be in PDF or JPEG format, not exceeding 1 MB in size.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">5</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 5: Sign Digitally &amp; Generate ARN</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Proceed to the &apos;Verification&apos; tab, select the Authorized Signatory, enter the place of filing, and sign with a Class 3 DSC (for Companies and LLPs) or via EVC OTP. A 15-digit ARN is dispatched instantly for tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Challenges and Solutions */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Common Technical Obstacles on the GST Portal &amp; Solutions</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing amendments online can occasionally be hindered by portal technical glitches. Here is how our specialists troubleshoot common errors:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <Cpu className="w-4 h-4 text-indigo-600" />
                <span>emSigner Not Working / DSC Errors</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensure you are running the GST-approved emSigner version as Administrator. Add <code className="text-slate-800 bg-slate-200/60 px-1 py-0.5 rounded">https://127.0.0.1:1585</code> to your browser exceptions, or clear SSL state in internet options.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Session Expiry During Document Uploads</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The GST portal enforces an aggressive 15-minute inactivity timeout. Compress all PDF attachments beforehand and fill the application during non-peak morning or late evening hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>File Size &amp; Resolution Rejections</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The portal strictly limits uploads to 1 MB for core proofs and 500 KB for photos/NOCs. Ensure scans are 150–200 DPI in clear grayscale or color to maintain legibility without exceeding caps.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Form GST REG-03 Clarification Notice</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the officer issues a clarification notice regarding address proof or authority letters, you have exactly 7 working days to file Form GST REG-04 online before the application is deemed rejected.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Application Status Tracking Lifecycle */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Understanding ARN Status Checkpoints</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            When tracking your 15-digit ARN on the portal, your application progresses through these standardized statutory states:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">ARN Status</th>
                  <th className="p-3.5 sm:p-4">Statutory Meaning</th>
                  <th className="p-3.5 sm:p-4">Taxpayer Action Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-blue-700">Pending for Processing</td>
                  <td className="p-3.5 sm:p-4">Application assigned to jurisdictional tax officer for verification.</td>
                  <td className="p-3.5 sm:p-4">No action required. Officer has 15 working days to review.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-amber-700">Pending for Clarification</td>
                  <td className="p-3.5 sm:p-4">Officer issued Form GST REG-03 notice seeking explanations.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-amber-900">Must submit Form GST REG-04 within 7 working days.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Approved</td>
                  <td className="p-3.5 sm:p-4">Form GST REG-15 approval order issued by the department.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-900">Download amended GST Certificate (Form REG-06).</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-red-700">Rejected</td>
                  <td className="p-3.5 sm:p-4">Officer issued Form GST REG-05 rejection order due to deficient reply.</td>
                  <td className="p-3.5 sm:p-4 font-medium text-red-900">Rectify documentation and file a fresh REG-14 application.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="space-y-2.5 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200 hover:border-[#5C3BFF] hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Streamline Your GST Amendment Online with Experts
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Avoid DSC errors, document rejections, and lengthy officer clarifications. Partner with Merrafilings for accurate Form GST REG-14 filing, guaranteed 15-day tracking, and seamless certificate updates.
              </p>
            </div>
            <Link
              href="/gst-amendment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-[#155EEF] hover:text-white text-xs font-semibold shadow-md transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>Explore GST Amendment Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </article>
    </GstAmendmentGuideLayout>
  );
}
