"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Search,
  Scale,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  HelpCircle,
  Award,
} from "lucide-react";

export default function ApplyTrademarkObjectionStepByStepPage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="apply-trademark-objection-stepbystep-guide"
      title="Apply Trademark Objection Reply: Step-by-Step Practical Filing Guide"
      breadcrumbLabel="Apply Trademark Objection Reply"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          When your trademark application status changes to <strong className="font-semibold text-rose-700">&quot;Objected&quot;</strong> on the IP India electronic portal, filing a structured, legally sound response is imperative. Applying for a trademark objection reply involves far more than submitting a routine explanation—it is a formal legal submission presented to the Assistant Registrar of Trade Marks rebutting statutory grounds raised under <strong className="font-semibold text-slate-900">Section 9 or Section 11</strong> of the Trade Marks Act, 1999.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-light">
          This authoritative step-by-step roadmap walks you through every stage from downloading the official Examination Report to drafting factual defenses, compiling evidentiary exhibits, and e-filing your reply within the mandatory <strong className="font-semibold text-slate-900">30-day statutory window</strong>.
        </p>
      </div>

      {/* 8-Step Roadmap Pipeline */}
      <section className="space-y-6 pt-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            The 8-Step Process to File a Trademark Objection Reply
          </h2>
          <p className="text-sm text-slate-600 font-light mt-1">
            Follow these systematic steps to successfully overcome Registry objections:
          </p>
        </div>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                1
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 1: Check Trademark Application Status on IP India Portal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Regularly track your application number on the official Trade Marks Registry electronic status module. The moment the status transitions from &quot;Formalities Chk Pass&quot; or &quot;Marked for Exam&quot; to &quot;Objected&quot;, initiate immediate response preparations.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 2: Download &amp; Scrutinize the Official Examination Report
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Click on &quot;View Examination Report&quot; on the portal to download the official PDF. Check the dispatch date stamped on the document to calculate your exact 30-day filing cutoff deadline.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                3
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 3: Analyze the Exact Statutory Grounds of Objection
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Determine whether the objection is founded upon Section 9 (distinctiveness / descriptive mark), Section 11 (conflicting prior registered marks cited in the search report annexure), or procedural deficiencies (such as invalid power of attorney or vague item descriptions).
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                4
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 4: Conduct In-Depth Legal Research on Cited Marks
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  For Section 11 objections, research every cited conflicting mark on the public register. Check whether the cited marks are currently abandoned, removed, expired, or registered for completely different goods. If a cited mark has lapsed, this forms a conclusive defense.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                5
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 5: Assemble Commercial Evidentiary Exhibits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Collate documentary proof substantiating your prior commercial presence: earliest tax invoices, audited turnover certificates, packaging photographs, domain registration WHOIS details, and marketing expenses establishing acquired distinctiveness.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                6
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 6: Draft the Comprehensive Legal Rebuttal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Structure your written legal reply with professional formatting: factual background of the applicant, paragraph-by-paragraph refutation of examiner observations, application of the Anti-Dissection Rule, and citations of landmark Supreme Court and High Court precedents.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                7
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                  Step 7: E-File Reply via Digital Signature on IP India Portal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Submit the written reply and affidavit exhibits through the official IP India comprehensive e-filing gateway under the &quot;Reply to Examination Report&quot; tab. Secure the digital submission timestamp and filing acknowledgement receipt.
                </p>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-300 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                8
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-medium text-emerald-950 text-sm sm:text-base">
                  Step 8: Monitor Application Status Progression
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900/90 font-light leading-relaxed">
                  Following reply submission, the Examiner reviews your response. If satisfied, the status progresses directly to &quot;Accepted &amp; Advertised&quot;. If additional clarifications are required, the status moves to &quot;Ready for Show Cause Hearing&quot;, where Merrafilings attorneys represent you before the Hearing Officer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Should Reply Contain */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Essential Components of an Effective Trademark Objection Reply
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-light text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">1. Formal Caption &amp; Title</span>
            <p className="text-slate-500 text-xs">
              Proper identification of application number, applicant name, trade class, and Examiner reference details.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">2. Inherent Distinctiveness Plea</span>
            <p className="text-slate-500 text-xs">
              Detailed justification establishing that the mark is coined, arbitrary, or has developed secondary meaning through long commercial use.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">3. Phonetic &amp; Visual Differentiation Matrix</span>
            <p className="text-slate-500 text-xs">
              Side-by-side comparative analysis proving that the mark differs in structure, syllable count, visual font, and trade channel from cited marks.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">4. Formal Prayer for Acceptance</span>
            <p className="text-slate-500 text-xs">
              Clear legal prayer requesting the Registrar to waive the objection and advertise the mark in the official Trade Marks Journal.
            </p>
          </div>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
