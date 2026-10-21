"use client";

import React from "react";
import Link from "next/link";
import TrademarkRenewalGuideLayout from "@/components/TrademarkRenewalGuideLayout";
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
  Globe2,
  BookOpen,
  Layers,
  HelpCircle,
  FileSpreadsheet,
} from "lucide-react";

export default function TrademarkRenewalComprehensiveGuidePage() {
  return (
    <TrademarkRenewalGuideLayout
      currentSlug="trademark-renewal-your-comprehensive-guide"
      title="Trademark Renewal: A Comprehensive Guide to Indian Trademark Maintenance"
      breadcrumbLabel="Comprehensive Guide"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          A trademark registration grants exclusive legal monopoly over brand markers in India, but that statutory protection is not perpetual by default. Governed by <strong className="font-semibold text-slate-950">Section 25 of the Trade Marks Act, 1999</strong> and <strong className="font-semibold text-slate-950">Rule 57 of the Trade Marks Rules, 2017</strong>, trademark registrations are subject to a mandatory 10-year renewal cycle.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive legal guide provides an exhaustive analysis of the statutory renewal architecture in India—from calculating exact expiration dates and navigating Registry examination procedures to understanding international renewal implications under the Madrid Protocol.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Framework Summary</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Provision</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Section 25 &amp; Rules 57–60</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Validity Increment</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">10 Years per Renewal</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">International Protection</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Madrid Protocol Base Mark Dependency</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Detailed Procedural Stages */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Procedural Stages of Trademark Renewal in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing Form TM-R initiates a formal administrative review process within the Trade Marks Registry:
        </p>

        <div className="space-y-3.5 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Stage 1: Electronic Lodgment &amp; Formal Verification</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Form TM-R is lodged via the IP India e-filing portal. The system validates whether the application is filed within the standard 6-month pre-expiry window, the 6-month grace period, or the restoration window. Fees are processed through the Bharatkosh gateway.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Stage 2: Examination &amp; Discrepancy Scrutiny</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              A Registry examiner reviews the submission to confirm that the proprietor details, registered address, mark representation, and class designations align perfectly with official Register records. If discrepancies exist (e.g. unrecorded mergers), a formal formality check failure notice is issued.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Stage 3: Responding to Registry Discrepancy Letters</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              If an office action is raised, the applicant has 30 days to file a formal legal reply via Form TM-M, curing defects, submitting supporting affidavits, or clarifying power of attorney authorizations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Stage 4: Renewal Order &amp; Gazette Publication</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Upon satisfaction, the Registrar enters the renewal into the official Register, gazettes the renewal in the weekly Trade Marks Journal, and issues a digitally signed Renewal Certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Statutory Timelines & Fees Comparison */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Complete Statutory Timeline &amp; Fee Comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Filing Classification</th>
                <th className="py-3 px-4">Statutory Window</th>
                <th className="py-3 px-4">Official Electronic Fee</th>
                <th className="py-3 px-4">Required Documents</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Timely Renewal</td>
                <td className="py-3.5 px-4">6 Months Before Expiry</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">₹9,000 per class</td>
                <td className="py-3.5 px-4">Form TM-R, Power of Attorney (TM-48)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-amber-700">Late Renewal (Surcharge)</td>
                <td className="py-3.5 px-4">Up to 6 Months After Expiry</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">₹13,500 per class</td>
                <td className="py-3.5 px-4">Form TM-R, TM-48, Late Fee Remittance</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-rose-700">Restoration &amp; Renewal</td>
                <td className="py-3.5 px-4">6 Months to 1 Year After Expiry</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">₹18,000 per class</td>
                <td className="py-3.5 px-4">Form TM-R, Legal Affidavit for Delay, TM-48</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Madrid Protocol International Impact */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. International Impact: The Madrid Protocol Dependency
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          For Indian enterprises exporting products globally or holding international trademark registrations under the <strong className="font-semibold text-slate-950">Madrid System (WIPO)</strong>:
        </p>
        <div className="p-4.5 rounded-xl bg-purple-50/70 border border-purple-200/80 space-y-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <strong className="font-semibold text-purple-950">The 5-Year Central Attack Principle:</strong>
          <p className="text-slate-800 leading-relaxed font-normal">
            Under Article 6 of the Madrid Protocol, an international registration remains strictly dependent on the basic Indian home registration for a period of 5 years. If the basic Indian trademark is allowed to lapse or is removed for non-renewal during this period, the international registration across all designated overseas countries is automatically canceled. Renewing your Indian mark on time is vital to safeguard global IP rights.
          </p>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Can third parties oppose a trademark renewal application?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              No. Unlike initial trademark applications (Form TM-A) which are open to 4-month public oppositions under Section 21, timely trademark renewals cannot be opposed by third parties. However, in cases of restoration petitions filed after the mark was removed, the Registrar may publish the restoration proposal in the Journal.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">What is the consequence of not renewing on e-commerce marketplaces?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Amazon Brand Registry, Flipkart Brand Protection, and digital platforms continuously verify IP India database records. An &quot;Expired&quot; or &quot;Removed&quot; status triggers automated suspension of brand registry benefits and listing gating protections.
            </p>
          </div>
        </div>
      </section>
    </TrademarkRenewalGuideLayout>
  );
}
