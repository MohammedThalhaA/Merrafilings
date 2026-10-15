"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  Scale,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UploadCloud,
  FileSpreadsheet,
  Globe2,
  Award,
} from "lucide-react";

export default function DocumentsRequiredForTrademarkObjectionPage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="documents-required-for-trademark-objection"
      title="Documents Required For Trademark Objection: The Complete Evidence Dossier"
      breadcrumbLabel="Documents Required for Objection"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          Submitting a persuasive written rebuttal to a Trademark Examination Report requires compiling an airtight <strong className="font-semibold text-slate-900">evidence dossier</strong>. Under Indian intellectual property jurisprudence, unsubstantiated statements are summarily rejected by Hearing Officers; every factual assertion regarding prior commercial use, distinctiveness, or brand uniqueness must be corroborated by documentary proof.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          This comprehensive guide outlines the complete list of mandatory and supporting documents needed to defend your application against <strong className="font-medium text-slate-900">Section 9 and Section 11</strong> objections, along with technical e-filing specifications mandated by the IP India digital portal.
        </p>
      </div>

      {/* Complete Document Dossier Grid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          The 11 Pillars of Trademark Objection Documentation
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          Review the complete evidentiary catalogue required to assemble your formal reply:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {/* Doc 1 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <FileCheck className="w-4 h-4" />
              <span>1. Examination Report</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Official PDF copy of the Examination Report downloaded from the Trade Marks Registry gateway displaying the notice dispatch date.
            </p>
          </div>

          {/* Doc 2 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <Scale className="w-4 h-4" />
              <span>2. Sworn User Affidavit (Rule 25)</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Legal affidavit affirmed on non-judicial stamp paper, duly notarized, swearing to the exact date of first commercial adoption and continuous use.
            </p>
          </div>

          {/* Doc 3 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <Receipt className="w-4 h-4" />
              <span>3. Continuous Tax Invoices</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Chronologically ordered sales invoices, GST invoices, or excise receipts proving commercial distribution of goods/services under the brand.
            </p>
          </div>

          {/* Doc 4 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <FileSpreadsheet className="w-4 h-4" />
              <span>4. CA Turnover Certificate</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Certificate from a practicing Chartered Accountant certifying year-wise gross sales turnover specifically attributable to the trademark.
            </p>
          </div>

          {/* Doc 5 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <Globe2 className="w-4 h-4" />
              <span>5. Website &amp; Domain Records</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              WHOIS domain creation certificate, historical Wayback Machine snapshots, social media engagement metrics, and active web storefront links.
            </p>
          </div>

          {/* Doc 6 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <Award className="w-4 h-4" />
              <span>6. Marketing Expenditure Invoices</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Invoices for digital ads (Google Ads, Meta Ads), newspaper advertisements, event banners, and celebrity endorsements demonstrating brand visibility.
            </p>
          </div>

          {/* Doc 7 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>7. Packaging &amp; Label Specimens</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              High-resolution photographs of actual physical product packaging, containers, garment tags, or store signage exhibiting the mark.
            </p>
          </div>

          {/* Doc 8 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <UploadCloud className="w-4 h-4" />
              <span>8. Signed Form TM-48 (Power of Attorney)</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Formal statutory legal authorization empowering Merrafilings trademark attorneys to file pleadings and appear before the Hearing Officer.
            </p>
          </div>

          {/* Doc 9 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>9. Proof of Business Incorporation</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Certificate of Incorporation, LLP Agreement, Partnership Deed, or Udyam MSME Registration Certificate validating the applicant&apos;s legal persona.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Technical E-Filing Guidelines */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Technical Specifications for E-Filing on IP India
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-normal">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Submission Requirement</th>
                <th className="p-3.5 sm:p-4">Technical Parameter Mandated</th>
                <th className="p-3.5 sm:p-4">Registry Compliance Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Document File Format</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Strictly Searchable PDF Format (Single File / Multi-Volume)</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Encrypted or password-protected PDFs are rejected</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Maximum Upload Size</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Under 10 MB per attachment file</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Exhibits exceeding limit must be split into Part 1 &amp; Part 2</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Digital Signature (DSC)</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">Class 3 Digital Signature Certificate of authorized agent</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Cryptographic timestamp affixed at upload</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Pagination &amp; Indexing</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Consecutive page numbering with master index table</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Enables Hearing Officer to cite exact pages during hearing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Summary Checklist */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Pre-Submission Verification Checklist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-normal">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Application number, trade class, and applicant entity name are consistent across all exhibits.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>User affidavit is signed, attested by an authorized Notary Public, and stamped with correct state duty.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Tax invoices clearly show the earliest user date claimed in initial Form TM-A filing.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Reply is filed within 30 days of examination report dispatch to prevent abandonment.</span>
          </div>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
