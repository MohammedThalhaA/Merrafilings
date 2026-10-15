"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  FileText,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Building,
  Award,
} from "lucide-react";

export default function TrademarkObjectionInIndiaCompleteGuidePage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="trademark-objection-in-india-complete-guide"
      title="Trademark Objection in India: Complete Guide to Law, Strategy &amp; Hearings"
      breadcrumbLabel="Trademark Objection in India"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          The procedural handling of a <strong className="font-semibold text-slate-900">Trademark Objection in India</strong> operates under the regulatory supervision of the Controller General of Patents, Designs and Trade Marks (CGPDTM), Ministry of Commerce and Industry. With 5 regional Trade Marks Registries located in Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad, applications are subjected to uniform scrutiny under the Trade Marks Act, 1999 and the Trade Marks Rules, 2017.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          When an Examination Report is issued, resolving the objection is purely a matter of legal advocacy and factual presentation. This complete guide provides legal practitioners and business owners with the authoritative framework needed to draft winning replies, cite binding judicial precedents, and navigate Show Cause Hearings successfully.
        </p>
      </div>

      {/* Jurisdictional Offices Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Trademark Registry Jurisdictions in India
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          Objections are administered by the territorial Registry corresponding to the principal place of business of the applicant:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2 text-xs font-normal text-slate-900">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1">
            <strong className="text-slate-900 font-medium block">Delhi TMR Branch</strong>
            <span className="text-slate-500">Delhi, Haryana, Punjab, Himachal Pradesh, J&amp;K, Ladakh, Chandigarh, UP, Uttarakhand.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1">
            <strong className="text-slate-900 font-medium block">Mumbai TMR Branch (Head Office)</strong>
            <span className="text-slate-500">Maharashtra, Madhya Pradesh, Chhattisgarh, Goa, Daman &amp; Diu.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1">
            <strong className="text-slate-900 font-medium block">Chennai TMR Branch</strong>
            <span className="text-slate-500">Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, Puducherry, Lakshadweep.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1">
            <strong className="text-slate-900 font-medium block">Kolkata TMR Branch</strong>
            <span className="text-slate-500">West Bengal, Bihar, Jharkhand, Odisha, Assam, and all North Eastern States.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1">
            <strong className="text-slate-900 font-medium block">Ahmedabad TMR Branch</strong>
            <span className="text-slate-500">State of Gujarat, State of Rajasthan, Dadra &amp; Nagar Haveli.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 shadow-3xs space-y-1 flex flex-col justify-center">
            <strong className="text-purple-900 font-medium block">Nationwide Digital Filing</strong>
            <span className="text-purple-700">All objection replies and hearings are conducted 100% digitally across all branches.</span>
          </div>
        </div>
      </section>

      {/* Section 2: Formal Reply Drafting Blueprint */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Legal Drafting Blueprint for Trademark Objection Reply
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          An objection reply must adhere strictly to established legal conventions to withstand Examiner scrutiny:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-normal">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Drafting Section</th>
                <th className="p-3.5 sm:p-4">Required Legal Substance</th>
                <th className="p-3.5 sm:p-4">Key Principles Cites</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">1. Formal Address &amp; Jurisdiction</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Addressed to Registrar of Trade Marks, referencing application number and class.</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Section 18 &amp; Rule 33</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">2. Applicant Genesis &amp; Adoption</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Bona fide honest adoption narrative explaining how the mark was coined.</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Honest Concurrent Adoption (Sec 12)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">3. Non-Applicability of Sec 9</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Rebutting descriptive character; asserting inherent or acquired secondary meaning.</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Proviso to Section 9(1)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">4. Distinguishability under Sec 11</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Demonstrating ocular, phonetic, structural, and trade channel disparities.</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Anti-Dissection Rule (Sec 17)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-semibold text-slate-900">5. Formal Legal Prayer</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Specific prayer for unconditional acceptance and publication in the Trade Marks Journal.</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">Rule 33(4)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Show Cause Hearings */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Navigating the Trademark Show-Cause Hearing in India
        </h2>
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            If the written response does not resolve the Examiner&apos;s doubts entirely, the application is marked <strong className="font-semibold text-slate-900">&quot;Ready for Show Cause Hearing&quot;</strong>. Under the modernized digital hearing system, hearings are conducted via video conferencing before an Assistant Registrar or Hearing Officer:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-600 font-normal">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block font-medium mb-1">Digital Hearing Notice (Rule 33)</strong>
              <span>Hearing notice issued online with link and scheduled time slot; typically provided 15 to 30 days in advance.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block font-medium mb-1">Attorney Representation (Form TM-48)</strong>
              <span>Merrafilings registered trademark advocates present oral arguments, cite judicial authorities, and lodge written notes of arguments.</span>
            </div>
          </div>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
