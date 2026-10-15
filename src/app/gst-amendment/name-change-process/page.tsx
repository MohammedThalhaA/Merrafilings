"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstAmendmentGuideLayout from "@/components/GstAmendmentGuideLayout";
import {
  FileText,
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
  Building2,
  Send,
  Download,
  AlertCircle,
  Landmark,
  UserCheck,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Is a fresh GST registration required after changing the company or LLP legal name?",
    a: "No. A fresh GST registration is NOT required when changing your business name, provided the 10-digit Permanent Account Number (PAN) remains unchanged. You only need to file a core field amendment application in Form GST REG-14 on the GST common portal. Your 15-digit GSTIN will remain exactly the same.",
  },
  {
    q: "What is the statutory deadline to update a name change on the GST portal?",
    a: "Under Rule 19(1) of the CGST Rules, 2017, a taxpayer must file Form GST REG-14 within 15 days from the date of occurrence of the change (for instance, within 15 days of the issuance of the Fresh Certificate of Incorporation by the ROC or execution of the amended partnership deed).",
  },
  {
    q: "What is the difference between Legal Name and Trade Name in GST?",
    a: "The Legal Name is the official corporate name registered with the Ministry of Corporate Affairs (MCA) or on the PAN database (e.g., 'ABC Technologies Private Limited'). The Trade Name is the commercial operating or brand name under which the business interacts with customers (e.g., 'Alpha Cloud Solutions'). Both can be amended, but changing the legal name requires strict officer verification against MCA records.",
  },
  {
    q: "How long does the GST department take to approve a legal name change?",
    a: "Under Rule 19(2) of the CGST Rules, the jurisdictional tax officer has 15 working days from the date of submission of Form GST REG-14 to review and approve the application. If satisfied, an approval order in Form GST REG-15 is issued immediately.",
  },
  {
    q: "Can I continue issuing tax invoices under the old name while the amendment is pending?",
    a: "Once the MCA approves the name change, your corporate entity legally exists under the new name. However, for GST compliance, it is standard practice to inform clients and, where feasible, reference 'Formerly known as [Old Name]' until the updated Form GST REG-06 certificate is issued, to ensure no discrepancies arise in e-invoicing and e-way bill portals.",
  },
  {
    q: "What happens if the tax officer issues a clarification notice (Form GST REG-03)?",
    a: "If the tax officer finds discrepancies or requires additional proof, they will issue Form GST REG-03 within 15 working days. You must submit your clarification along with supporting documents in Form GST REG-04 within 7 working days from the date of receiving the notice.",
  },
];

export default function GstNameChangeProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAmendmentGuideLayout
      currentSlug="name-change-process"
      title="GST Name Change Process in GST Registration - Complete Guide"
      breadcrumbLabel="Name Change Process"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Secretarial & Tax Team"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro Banner */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            Changing the name of a business enterprise is a frequent commercial milestone triggered by rebranding initiatives, structural conversions (such as firm to company transitions), corporate mergers, acquisitions, or the correction of clerical discrepancies. However, obtaining name approval from the <strong className="font-semibold text-slate-950">Registrar of Companies (ROC)</strong> or the <strong className="font-semibold text-slate-950">Ministry of Corporate Affairs (MCA)</strong> is only the first step.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            To maintain unblemished indirect tax compliance, your GST registration records must be updated through an amendment application under <strong className="font-semibold text-slate-950">Section 28 of the CGST Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 19 of the CGST Rules, 2017</strong>. Failing to amend your GST registration can lead to e-invoicing rejections, e-way bill blocks, and invoice reconciliation disputes with customers.
          </p>
        </section>

        {/* Section 1: When is GST Name Change Required? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>When is a GST Name Change Required?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            A GST amendment application must be filed on the common portal whenever there is an alteration in either the statutory legal name or the commercial operating trade name of the registered entity. Standard operational triggers include:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Private or Public Limited Companies</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a company changes its registered corporate name after passing a special resolution and obtaining a Fresh Certificate of Incorporation from the ROC under Section 13 of the Companies Act, 2013.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Limited Liability Partnerships (LLPs)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Following execution of a supplementary LLP agreement and approval of Form 5 (Notice for change of name) by the MCA Registrar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Partnership Firms</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When partners mutually execute an amended/supplementary partnership deed changing the firm name and recording it with the Registrar of Firms (ROF).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sole Proprietorships &amp; Brand Rebranding</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a proprietor changes their business trade name, or when any enterprise corrects inadvertent typographical errors made during initial GST registration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Legal Name vs Trade Name */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Types of Name Changes: Legal Name vs. Trade Name</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The GST framework strictly distinguishes between the <strong className="font-semibold text-slate-950">Legal Name</strong> and the <strong className="font-semibold text-slate-950">Trade Name</strong> of a business. Understanding this difference is vital because the procedural workflows and approval requirements differ significantly:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">Attribute</th>
                  <th className="p-3.5 sm:p-4">Legal Name Amendment</th>
                  <th className="p-3.5 sm:p-4">Trade Name Amendment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Definition</td>
                  <td className="p-3.5 sm:p-4">The statutory corporate entity name linked directly to the PAN database.</td>
                  <td className="p-3.5 sm:p-4">The operational trade/brand name under which transactions are conducted.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Illustration</td>
                  <td className="p-3.5 sm:p-4"><em>ABC Technologies Pvt Ltd</em> &rarr; <em>ABC Innovations Pvt Ltd</em></td>
                  <td className="p-3.5 sm:p-4"><em>Alpha Enterprise</em> &rarr; <em>Alpha Digital Cloud</em></td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Field Classification</td>
                  <td className="p-3.5 sm:p-4 font-medium text-purple-700">Core Field Amendment</td>
                  <td className="p-3.5 sm:p-4 font-medium text-emerald-700">Core Field / Business Details</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Approval Requirement</td>
                  <td className="p-3.5 sm:p-4">Mandatory verification &amp; approval by Tax Officer (Rule 19(2)).</td>
                  <td className="p-3.5 sm:p-4">Reviewed by Tax Officer during Core Field amendment workflow.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Statutory Timeline</td>
                  <td className="p-3.5 sm:p-4">Approved within 15 working days via Form GST REG-15.</td>
                  <td className="p-3.5 sm:p-4">Approved within 15 working days upon verification of business proof.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Documents Required */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory Documentation Required for GST Name Change</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Documentary precision is the single most important factor determining whether your amendment is approved or rejected by the tax officer. All uploaded files must be clear, color scans in PDF format (maximum size 1 MB):
          </p>

          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                For Private Limited, Public Limited &amp; One Person Companies (OPC)
              </h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                <li>Fresh Certificate of Incorporation issued by MCA/ROC reflecting the new legal name.</li>
                <li>ROC Approval Letter / Form INC-24 approval copy.</li>
                <li>Certified true copy of the Board Resolution authorizing the GST name amendment.</li>
                <li>Updated PAN card reflecting the new company name (if already updated).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                For Limited Liability Partnerships (LLP)
              </h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                <li>MCA Certificate of Registration of change of name for LLP.</li>
                <li>Approved copy of Form 5 submitted to the Registrar.</li>
                <li>Supplementary / Amended LLP Agreement executed on requisite stamp paper.</li>
                <li>Partner consent letter authorizing the designated partner to sign the amendment.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-[#5C3BFF] transition-colors">
                For Partnership Firms &amp; Sole Proprietorships
              </h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                <li>Amended / Supplementary Partnership Deed registered with the local Registrar of Firms.</li>
                <li>Updated trade license, municipal establishment certificate, or Udyam registration showing the revised trade name.</li>
                <li>Notarized Affidavit or declaration affirming the change of commercial trade name.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Portal Workflow */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Send className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step Process to Change Name on the GST Portal</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Filing Form GST REG-14 for a name change is executed completely online through the official GST Common Portal (<code className="text-xs font-mono bg-slate-100 px-1 py-0.5 rounded text-indigo-700">gst.gov.in</code>). Follow these 5 procedural steps:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">1</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 1: Authenticate on the GST Common Portal</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Navigate to <code className="font-mono text-slate-800">services.gst.gov.in</code> and log in using your valid username, password, and the dynamic captcha code.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">2</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 2: Navigate to Amendment of Core Fields</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                From the top dashboard menu, click on <strong className="font-semibold text-slate-800">Services &gt; Registration &gt; Amendment of Registration Core Fields</strong>. This loads Form GST REG-14 in edit mode.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">3</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 3: Edit Legal Name / Trade Name &amp; Reasons</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Under the &apos;Business Details&apos; tab, click the edit icon beside &apos;Legal Name of Business&apos; or &apos;Trade Name&apos;. Enter the revised name precisely matching your ROC incorporation certificate. Specify the <strong className="font-semibold text-slate-800">Date of Amendment</strong> and input a clear justification in the <strong className="font-semibold text-slate-800">Reasons for Amendment</strong> field.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">4</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 4: Upload MCA &amp; ROC Supporting Proof</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                In the document upload section, select the appropriate document type (e.g., &apos;Others&apos; or &apos;Certificate of Incorporation&apos;). Upload the clear PDF scan of the fresh Certificate of Incorporation / ROC Approval letter and click &apos;Save&apos;.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200">5</span>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#5C3BFF] transition-colors">Step 5: Digital Verification &amp; ARN Generation</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Navigate to the &apos;Verification&apos; tab. Check the declaration checkbox, select the authorized signatory, and sign the application using a <strong className="font-semibold text-slate-800">Class 3 Digital Signature Certificate (DSC)</strong> (mandatory for Companies and LLPs) or via <strong className="font-semibold text-slate-800">Electronic Verification Code (EVC)</strong>. Upon successful submission, a 15-digit Application Reference Number (ARN) is issued instantly via email and SMS.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Department Scrutiny & Approval */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Tax Department Scrutiny &amp; Order Issuance (Rule 19)</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Unlike non-core amendments that receive immediate auto-approval, amending the legal name of a business is classified as a <strong className="font-semibold text-slate-950">Core Field</strong> amendment. Under Rule 19 of the CGST Rules, 2017:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 hover:border-[#10B981] hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 text-emerald-950 font-semibold text-xs mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Approval Order in Form GST REG-15</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the proper officer is satisfied with the authenticity of the MCA certificates and Board Resolutions, they will issue an approval order in <strong className="text-slate-900 font-semibold">Form GST REG-15</strong> within 15 working days. The revised GST Registration Certificate (Form GST REG-06) is generated automatically.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 text-amber-950 font-semibold text-xs mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Clarification Notice in Form GST REG-03</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the officer notices a discrepancy (such as name spelling differences between MCA and GST records), they issue a notice in <strong className="text-slate-900 font-semibold">Form GST REG-03</strong> within 15 working days. The taxpayer must furnish a complete reply in <strong className="text-slate-900 font-semibold">Form GST REG-04</strong> within 7 working days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Post Name Change Compliance Checklist */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Essential Post-Approval Compliance Checklist</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Once your amendment is sanctioned and Form GST REG-15 is issued, execute this operational checklist to ensure seamless business continuity:
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 my-4">
            <li className="flex items-start gap-2.5">
              <Download className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Download Updated Certificate:</strong> Log in to the portal and download the updated Form GST REG-06 certificate displaying the new business name. Display it prominently at all registered business locations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Update Invoicing ERP Systems:</strong> Update ERP/billing software (Tally, SAP, Zoho) to ensure all subsequent tax invoices, credit notes, and debit notes display the revised legal name.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Sync E-Way Bill &amp; E-Invoice Portals:</strong> Log in to the e-Way Bill and Invoice Registration Portal (IRP). Click &apos;Update from GST Common Portal&apos; to sync the new business name.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Landmark className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Notify Banking Partners &amp; Stakeholders:</strong> Submit the updated GST certificate and fresh Certificate of Incorporation to your commercial bank, key vendors, and corporate clients to avoid payment delays.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <UserCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Align Interconnected Registrations:</strong> Update the company name across allied statutory bodies including Import Export Code (IEC), FSSAI, MSME/Udyam, and the Trademark Registry.</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Common Rejection Causes */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Common Reasons for Rejection &amp; How to Prevent Them</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            GST amendment applications for name changes are frequently rejected due to easily preventable documentation oversights:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="text-red-600 font-semibold text-xs mb-1 group-hover:text-red-700 transition-colors">Mismatch with MCA</div>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">Entering a legal name that differs even by a single character or punctuation mark from the ROC incorporation certificate.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="text-red-600 font-semibold text-xs mb-1 group-hover:text-red-700 transition-colors">Illegible Uploads</div>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">Uploading low-resolution, blurred, or truncated scans of the fresh Certificate of Incorporation or approval orders.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="text-red-600 font-semibold text-xs mb-1 group-hover:text-red-700 transition-colors">Missing Authorization</div>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">Omitting the certified Board Resolution or authorization letter empowering the signatory to execute the amendment.</p>
            </div>
          </div>
        </section>

        {/* Section 8: Interactive FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Quick legal answers regarding the GST name change process, statutory timelines, and documentation:
          </p>

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

        {/* Section 9: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Need Assistance with Your GST Name Change?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Let Merrafilings handle your complete corporate amendment. Our Chartered Accountants and Company Secretaries draft board resolutions, verify MCA records, file Form GST REG-14, and track officer approvals to ensure seamless execution.
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
