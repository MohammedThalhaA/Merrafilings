"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  FileText,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  Receipt,
  Building2,
  Globe2,
  Scale,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function TrademarkObjectionRequiredDocumentsGuidePage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="trademark-objection-required-documents-guide"
      title="Trademark Objection Required Documents: Complete Evidence Guide"
      breadcrumbLabel="Required Documents Guide"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          The legal strength of a trademark objection reply depends directly on the quality and authenticity of the documentary evidence annexed to your submission. Whether you are contesting a <strong className="font-semibold text-slate-900">Section 9 objection</strong> (alleging lack of distinctiveness) or a <strong className="font-semibold text-slate-900">Section 11 objection</strong> (citing conflicting prior trademarks), providing documentary proof of commercial priority and acquired goodwill is what turns an objection into an acceptance.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          Under the Trade Marks Rules, 2017, documentary evidence must be indexed systematically, marked as formal exhibits, and presented under a sworn <strong className="font-medium text-slate-900">User Affidavit (Rule 25)</strong> executed on non-judicial stamp paper.
        </p>
      </div>

      {/* Primary Document Categories Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Comprehensive Documentation Checklist for Trademark Defense
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          Review the essential documents required to establish a robust evidentiary foundation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {/* Doc 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>1. Official Examination Report</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              The certified examination report downloaded from IP India containing the Examiner&apos;s statutory queries and search report annexures.
            </p>
          </div>

          {/* Doc 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
              <Scale className="w-4 h-4 text-purple-600" />
              <span>2. Sworn User Affidavit (Rule 25)</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Legal affidavit executed on appropriate non-judicial stamp paper, notarized, and signed by the applicant detailing exact continuous commercial usage.
            </p>
          </div>

          {/* Doc 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
              <Receipt className="w-4 h-4 text-blue-600" />
              <span>3. Earliest Sales Invoices &amp; Tax Receipts</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              GST/VAT tax invoices clearly displaying the trademark, customer details, and dates establishing uninterrupted commercial presence since the claimed user date.
            </p>
          </div>

          {/* Doc 4 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>4. Chartered Accountant Turnover Certificate</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Audited annual turnover certificate signed and stamped by an active CA verifying annual sales figures specifically derived from goods/services sold under the brand.
            </p>
          </div>

          {/* Doc 5 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
              <Globe2 className="w-4 h-4 text-indigo-600" />
              <span>5. Digital Footprint &amp; Domain Records</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Domain registration WHOIS records, website screenshots with visible timestamps, social media handles, and online store listings (Amazon, Flipkart).
            </p>
          </div>

          {/* Doc 6 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>6. Marketing &amp; Advertisement Invoices</span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Proof of promotional expenditures including digital advertising receipts (Google Ads, Meta Ads), newspaper inserts, billboard contracts, and event sponsorships.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Evidentiary Requirements Based on Grounds */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Evidence Required Based on Objection Grounds
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Section 9 Evidence */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <h3 className="font-medium text-slate-900 text-sm sm:text-base text-purple-700">
              Evidence for Section 9 (Acquired Distinctiveness)
            </h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              When the mark is deemed descriptive or non-distinctive, the law permits registration under the proviso to Section 9(1) if you prove that the mark has acquired secondary meaning in the minds of the consuming public through extensive commercial usage.
            </p>
            <ul className="text-xs text-slate-600 font-normal space-y-1 list-disc pl-4 pt-1">
              <li>Consecutive annual sales turnover certificates</li>
              <li>Nationwide distribution channel agreements</li>
              <li>Customer testimonials and industry recognition</li>
              <li>Substantial cumulative marketing expenditure proofs</li>
            </ul>
          </div>

          {/* Section 11 Evidence */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <h3 className="font-medium text-slate-900 text-sm sm:text-base text-blue-700">
              Evidence for Section 11 (Conflicting Marks Defense)
            </h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              When the Examiner cites an earlier registered trademark, you must prove either that your mark is visually, phonetically, and structurally different, or invoke the statutory defense of honest concurrent use under Section 12.
            </p>
            <ul className="text-xs text-slate-600 font-normal space-y-1 list-disc pl-4 pt-1">
              <li>Comparative phonetic and visual comparison matrix</li>
              <li>Proof of distinct price points and target consumer demographic</li>
              <li>Proof of prior commercial use predating the cited mark</li>
              <li>Letter of Consent / Coexistence Agreement (if obtainable)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: How to Organize Exhibits */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          How to Structure Exhibits in the Reply Bundle
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          The Trade Marks Registry expects submissions to follow rigorous legal indexing:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-normal">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Exhibit Label</th>
                <th className="p-3.5 sm:p-4">Document Content</th>
                <th className="p-3.5 sm:p-4">Statutory Objective</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Annexure A</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Official Examination Report &amp; Application Form TM-A</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Record reference and jurisdictional foundation</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Annexure B</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Sworn Notarized User Affidavit (Rule 25)</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Sworn evidentiary affirmation of continuous use</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Annexure C</td>
                <td className="p-3.5 sm:p-4 text-slate-600">CA Turnover Certificate &amp; Historical Tax Invoices</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Substantiating acquired goodwill and secondary meaning</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Annexure D</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Media Publications, Social Proof &amp; Packaging Specimens</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Visual proof of distinctiveness in the trade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
