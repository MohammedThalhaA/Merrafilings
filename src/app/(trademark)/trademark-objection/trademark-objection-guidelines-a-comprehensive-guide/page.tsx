"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  Scale,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Award,
  Layers,
  BookOpen,
} from "lucide-react";

export default function TrademarkObjectionGuidelinesPage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="trademark-objection-guidelines-a-comprehensive-guide"
      title="Trademark Objection Guidelines: A Comprehensive Legal Guide"
      breadcrumbLabel="Trademark Objection Guidelines"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Overview Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          Receiving a <strong className="font-semibold text-slate-900">Trademark Objection</strong> from the Trade Marks Registry is a common yet time-critical stage in the Indian trademark registration lifecycle. Governed by the <strong className="font-semibold text-slate-900">Trade Marks Act, 1999</strong> and <strong className="font-semibold text-slate-900">Rule 33 of the Trade Marks Rules, 2017</strong>, an objection represents a formal legal query raised by the Trademark Examiner during the substantive examination phase.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-normal">
          It is crucial to understand that an objection is <strong className="font-medium text-slate-900">not a permanent rejection</strong>. Instead, it is an administrative show-cause opportunity providing the applicant a statutory window of <strong className="font-semibold text-rose-700">30 days</strong> to file a comprehensive written legal rebuttal. When drafted with authoritative judicial precedents and supported by prior commercial use evidence, a high percentage of objected marks proceed successfully to official Journal publication.
        </p>
      </div>

      {/* Critical 30-Day Alert Box */}
      <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-rose-50/80 via-amber-50/50 to-white border border-rose-200/80 shadow-2xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-rose-950">
              Strict 30-Day Statutory Limitation Period
            </h3>
            <p className="text-xs sm:text-sm text-rose-900/90 font-normal mt-1 leading-relaxed">
              Under Rule 33, the applicant must file their written response within exactly 30 days from the date of dispatch or receipt of the Examination Report. Failure to lodge a reply within this period triggers automatic mark abandonment by the Registry under Section 132.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Grounds for Objection */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Common Grounds for Trademark Objection in India
        </h2>
        <p className="text-sm text-slate-600 font-normal leading-relaxed">
          The Trade Marks Act, 1999 empowers the Examiner to object to an application primarily under two distinct statutory sections:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Section 9 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-purple-700 font-medium">
              <Scale className="w-4 h-4" />
              <span>Section 9: Absolute Grounds for Refusal</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Pertains to intrinsic defects in the mark itself. Common reasons include:
            </p>
            <ul className="text-xs text-slate-600 font-normal space-y-1.5 list-disc pl-4">
              <li><strong className="font-medium text-slate-800">Lack of Distinctiveness:</strong> Mark cannot differentiate your goods from others.</li>
              <li><strong className="font-medium text-slate-800">Descriptive Terms:</strong> Designates kind, quality, purpose, or geographical origin (e.g., &quot;Cold Drink&quot;).</li>
              <li><strong className="font-medium text-slate-800">Customary Language:</strong> Established phrases commonly used in current trade practices.</li>
              <li><strong className="font-medium text-slate-800">Deceptive or Scandalous:</strong> Likely to deceive the public or cause religious offense.</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-blue-700 font-medium">
              <ShieldAlert className="w-4 h-4" />
              <span>Section 11: Relative Grounds for Refusal</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Pertains to conflicts with third-party pre-existing rights. Common reasons include:
            </p>
            <ul className="text-xs text-slate-600 font-normal space-y-1.5 list-disc pl-4">
              <li><strong className="font-medium text-slate-800">Identical Mark:</strong> Same wordmark or logo already registered for identical goods.</li>
              <li><strong className="font-medium text-slate-800">Deceptive Similarity:</strong> Phonetic, visual, or conceptual resemblance creating confusion.</li>
              <li><strong className="font-medium text-slate-800">Well-Known Trademarks:</strong> Mark conflicts with recognized famous marks under Section 11(6).</li>
              <li><strong className="font-medium text-slate-800">Cross-Class Association:</strong> Consumers might mistakenly assume a commercial connection.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Section 9 vs Section 11 Comparison Table */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Comparison: Section 9 vs. Section 11 Objections
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-normal">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Key Dimension</th>
                <th className="p-3.5 sm:p-4">Section 9 (Absolute Grounds)</th>
                <th className="p-3.5 sm:p-4">Section 11 (Relative Grounds)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Legal Focus</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Inherent character and distinctiveness of mark</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Conflict with prior registered or pending marks</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Third-Party Involvement</td>
                <td className="p-3.5 sm:p-4 text-slate-600">No third party cited; purely statutory evaluation</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Specific conflicting marks cited in examination report</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Primary Legal Defense</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Prove acquired distinctiveness through extensive prior usage &amp; sales turnover</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Establish visual, phonetic, and semantic differences, or honest concurrent use</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Key Evidence Required</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Rule 25 User Affidavit, turnover CA certificates, advertising bills</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Phonetic comparison matrix, trade channel differences, prior use receipts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Step-by-Step Response Strategy */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          How to Structure a Strong Trademark Objection Response
        </h2>
        <p className="text-sm text-slate-600 font-normal">
          A successful objection reply requires a structured, multi-tier legal argument:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <strong className="font-medium text-slate-900 block text-sm">Detailed Ground-by-Ground Rebuttal</strong>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Address each specific objection paragraph cited by the Examiner separately. Never submit generic or one-line denials.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <strong className="font-medium text-slate-900 block text-sm">Anti-Dissection Rule &amp; Whole Mark Doctrine</strong>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Under Section 17 of the Act, a trademark must be assessed in its commercial totality. Highlight that individual elements cannot be dissected in isolation to engineer a superficial similarity.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <strong className="font-medium text-slate-900 block text-sm">Relevant Judicial Precedents</strong>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Cite authoritative rulings from the Supreme Court of India, High Courts (e.g. Delhi, Bombay, Madras), and IPAB decisions establishing registrability of comparable marks.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0">
              4
            </div>
            <div>
              <strong className="font-medium text-slate-900 block text-sm">Notarized User Affidavit &amp; Documentary Exhibits</strong>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Back claims of commercial goodwill with date-stamped tax invoices, audited sales turnover figures, packaging specimen photos, and marketing media expenditures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Trademark Objection vs Opposition */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Trademark Objection vs. Trademark Opposition
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-normal">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Aspect</th>
                <th className="p-3.5 sm:p-4">Trademark Objection</th>
                <th className="p-3.5 sm:p-4">Trademark Opposition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Raised By</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Government Trademark Examiner</td>
                <td className="p-3.5 sm:p-4 text-rose-700 font-medium">Third Party / Competitor</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Procedural Stage</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Substantive examination (pre-publication)</td>
                <td className="p-3.5 sm:p-4 text-slate-600">During official Trade Marks Journal advertisement</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Statutory Response Window</td>
                <td className="p-3.5 sm:p-4 text-rose-700 font-semibold">Strictly 30 Days</td>
                <td className="p-3.5 sm:p-4 text-slate-600">2 Months to file Counter-Statement (Form TM-O)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Outcome Upon Resolution</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">Acceptance for Journal Publication</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">Official Registration Certificate Issuance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
