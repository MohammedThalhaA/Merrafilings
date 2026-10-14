"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  HelpCircle,
  Scale,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Award,
} from "lucide-react";

export default function UnderstandingTrademarkObjectionPage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="understanding-trademark-objection-a-complete-guide"
      title="Understanding Trademark Objection: A Complete Legal &amp; Procedural Guide"
      breadcrumbLabel="Understanding Trademark Objection"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          For most entrepreneurs, encountering the status <strong className="font-semibold text-rose-700">&quot;Objected&quot;</strong> on their IP India tracking dashboard causes immediate concern. However, in professional trademark practice, an objection is simply an administrative checkpoint. The Trade Marks Registry examines tens of thousands of filings annually and routinely issues Examination Reports to ensure that only distinctive, non-conflicting marks receive statutory monopoly rights under the <strong className="font-semibold text-slate-900">Trade Marks Act, 1999</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-light">
          This comprehensive guide demystifies why objections arise, how examiners evaluate applications under <strong className="font-medium text-slate-900">Section 9 and Section 11</strong>, and what legal strategies ensure a swift waiver and progression to official Journal publication.
        </p>
      </div>

      {/* Anatomy of Examination Report Box */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          What is a Trademark Examination Report?
        </h2>
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          The Examination Report is the official written document issued by the Trademark Examiner summarizing their evaluation of your application. Every report is structured into three fundamental parts:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <FileText className="w-4 h-4" />
              <span>Part I: Application Summary &amp; Formality Review</span>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Confirms applicant name, correspondence address, Nice class specification, and whether filing formalities (such as Form TM-48 power of attorney) are in order.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-rose-700 font-medium text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>Part II: Statutory Objections Under Section 9 &amp; 11</span>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              The substantive core of the report. The Examiner specifies the legal provisions under which registration is provisionally refused and provides the rationale.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-blue-700 font-medium text-sm">
              <Search className="w-4 h-4" />
              <span>Part III: Search Report Annexure (Conflicting Marks)</span>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              If a Section 11 objection is raised, this section includes a table of existing registered trademarks or pending prior applications that the Examiner deems deceptively similar.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Deep Dive into Section 9 and 11 */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Decoding Section 9 vs. Section 11 Objections
          </h2>
          <p className="text-sm text-slate-600 font-light mt-1">
            Understanding the legal basis of the objection dictates the exact defense strategy to adopt:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Section 9 Details */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="flex items-center gap-2 text-purple-800 font-medium text-sm sm:text-base">
              <Scale className="w-4 h-4" />
              <span>Section 9: Absolute Grounds</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Section 9(1) bars marks that are not inherently distinctive:
            </p>
            <ul className="text-xs text-slate-600 font-light space-y-1.5 list-disc pl-4">
              <li><strong className="font-medium text-slate-800">Section 9(1)(a):</strong> Devoid of any distinctive character to identify the source.</li>
              <li><strong className="font-medium text-slate-800">Section 9(1)(b):</strong> Exclusively designates kind, quality, intended purpose, value, or geographic origin.</li>
              <li><strong className="font-medium text-slate-800">Section 9(1)(c):</strong> Contains words that have become customary in current trade language.</li>
            </ul>
            <div className="pt-2 text-xs font-light text-slate-500 border-t border-slate-200">
              <strong className="text-emerald-700 font-medium">Effective Rebuttal:</strong> Prove that the mark is coined/arbitrary, or establish that extensive commercial usage has endowed the mark with &quot;acquired distinctiveness&quot; (secondary meaning) prior to the filing date.
            </div>
          </div>

          {/* Section 11 Details */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="flex items-center gap-2 text-blue-800 font-medium text-sm sm:text-base">
              <ShieldAlert className="w-4 h-4" />
              <span>Section 11: Relative Grounds</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Section 11(1) bars marks that conflict with pre-existing marks:
            </p>
            <ul className="text-xs text-slate-600 font-light space-y-1.5 list-disc pl-4">
              <li><strong className="font-medium text-slate-800">Identity / Similarity:</strong> Identity with an earlier trademark for similar goods/services.</li>
              <li><strong className="font-medium text-slate-800">Likelihood of Confusion:</strong> Possibility that an average consumer would believe the two brands originate from the same business.</li>
            </ul>
            <div className="pt-2 text-xs font-light text-slate-500 border-t border-slate-200">
              <strong className="text-emerald-700 font-medium">Effective Rebuttal:</strong> Apply the &quot;Anti-Dissection Rule&quot; (comparing marks as a whole), establish distinct phonetic/visual differences, demonstrate non-overlapping customer segments, or prove prior honest concurrent adoption under Section 12.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 30-Day Reply Workflow */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          What Happens After Filing the Objection Reply?
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Once your legal response is e-filed on the IP India portal, the Examiner re-evaluates the matter:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs sm:text-sm text-slate-700 font-light">
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-1">
            <span className="font-semibold text-emerald-900 block">Scenario A: Waiver &amp; Acceptance</span>
            <p className="text-emerald-800 text-xs">
              Examiner accepts your legal arguments. The status moves to &quot;Accepted &amp; Advertised&quot; for 4-month Journal publication.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100 space-y-1">
            <span className="font-semibold text-amber-900 block">Scenario B: Show Cause Hearing</span>
            <p className="text-amber-800 text-xs">
              If the Examiner remains partially unconvinced, a digital show-cause hearing is scheduled where Merrafilings attorneys argue before the Hearing Officer.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 space-y-1">
            <span className="font-semibold text-rose-900 block">Scenario C: Application Refusal</span>
            <p className="text-rose-800 text-xs">
              Rare if defended professionally. If refused post-hearing, a formal appeal can be preferred before the High Court Commercial Appellate Division.
            </p>
          </div>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
