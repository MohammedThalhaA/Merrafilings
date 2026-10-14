"use client";

import React from "react";
import Link from "next/link";
import TrademarkGuideLayout from "@/components/TrademarkGuideLayout";
import {
  GitFork,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  FileText,
  Search,
  Scale,
  Sparkles,
  Award,
  Layers,
  HelpCircle,
} from "lucide-react";

export default function TrademarkProcessFlowchartPage() {
  return (
    <TrademarkGuideLayout
      currentSlug="trademark-registration-process-flowchart"
      title="Trademark Registration Process Flowchart in India: Complete Step-by-Step Lifecycle"
      breadcrumbLabel="Registration Process Flowchart"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          The <strong className="font-semibold text-slate-900">trademark registration process flowchart</strong> delineates the precise chronological pathway a brand application traverses from inception to final certificate issuance by the Trade Marks Registry. Governed by the <strong className="font-semibold text-slate-900">Trade Marks Act, 1999</strong> and the <strong className="font-semibold text-slate-900">Trade Marks Rules, 2017</strong>, the registration lifecycle encompasses public conflict searches, formality validations, substantive examination, journal advertisements, and opposition proceedings.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-light">
          Understanding this visual process helps founders, legal counsels, and brand owners anticipate regulatory timelines, manage procedural requisitions promptly, and transition successfully from the provisional <strong className="font-medium text-slate-800">™</strong> status to the official registered <strong className="font-medium text-slate-800">®</strong> mark.
        </p>
      </div>

      {/* Visual Step-by-Step Flowchart Pipeline */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-base">
          <GitFork className="w-5 h-5 text-indigo-600" />
          <span>Interactive Trademark Registration Process Flowchart</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 font-light">
          Review each critical milestone in the statutory IP India workflow:
        </p>

        {/* Pipeline Container */}
        <div className="relative space-y-4 pt-2">
          {/* Stage 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                1
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                    Stage 1: Pre-Filing Trademark Conflict Search
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                    Day 1
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Screening the proposed wordmark or logo on the IP India public database. Merrafilings attorneys evaluate phonetic similarities, visual resemblance, and cross-class conflicts under Section 11 to ensure high registrability.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <ArrowDown className="w-4 h-4 text-slate-300" />
          </div>

          {/* Stage 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                    Stage 2: Class Selection &amp; Specification Drafting
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                    Day 1–2
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Mapping commercial activities to the international Nice Classification (Classes 1–45). Preparing custom item specifications and assembling the user affidavit if prior commercial usage is claimed.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <ArrowDown className="w-4 h-4 text-slate-300" />
          </div>

          {/* Stage 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                3
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                    Stage 3: Form TM-A Digital Lodgement &amp; ™ Allotment
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                    Same Day
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Application is filed electronically on the IP India gateway using a Class 3 Digital Signature. The Registry instantly issues an official receipt with the permanent Application Number, authorizing the applicant to affix the <strong className="font-semibold text-slate-900">™</strong> mark immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <ArrowDown className="w-4 h-4 text-slate-300" />
          </div>

          {/* Stage 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                4
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                    Stage 4: Formality Check &amp; Vienna Codification
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                    Month 1–2
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  The Trade Marks Office verifies basic filing formalities (POA authorization, correct fee remitted, clean documentation). For logos and devices, visual elements are classified under the Vienna Agreement code framework.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <ArrowDown className="w-4 h-4 text-slate-300" />
          </div>

          {/* Stage 5: Examination Fork */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 shadow-2xs relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
                5
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                    Stage 5: Substantive Examination &amp; Objection Handling
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    Month 2–4
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  A Trademark Examiner scrutinizes the mark against Section 9 (distinctiveness) and Section 11 (similarity to prior marks). If objections arise, an official Examination Report is issued requiring a detailed written legal response within <strong className="font-medium text-slate-900">30 days</strong>. If accepted without objection, it bypasses directly to Stage 6.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <ArrowDown className="w-4 h-4 text-slate-300" />
          </div>

          {/* Stage 6 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF]/50 transition-all relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                6
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">
                    Stage 6: Trade Marks Journal Advertisement
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                    4-Month Window
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Upon examiner acceptance, the trademark is published in the official weekly Trade Marks Journal. This initiates a statutory 4-month public window enabling any interested third party to file a notice of opposition (Form TM-O).
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <ArrowDown className="w-4 h-4 text-slate-300" />
          </div>

          {/* Stage 7: Registration Certificate */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-300 shadow-xs relative">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                7
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-medium text-emerald-950 text-sm sm:text-base">
                    Stage 7: Official Registration Certificate Grant (®)
                  </h3>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-600 text-white">
                    Final Goal
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900/90 font-light leading-relaxed">
                  If no third-party opposition is lodged within the 4-month publication period, the Registrar formally seals and issues your digital Trademark Registration Certificate. You obtain exclusive legal ownership nationwide and are fully authorized to use the <strong className="font-semibold text-emerald-800">®</strong> registered symbol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Summary Table of Key Stages */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Trademark Lifecycle Stages Summary Table
        </h2>
        <p className="text-sm text-slate-600 font-light">
          A high-level reference summarizing what occurs during each phase and the typical procedural duration:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Process Stage</th>
                <th className="p-3.5 sm:p-4">What Happens</th>
                <th className="p-3.5 sm:p-4">Typical Duration</th>
                <th className="p-3.5 sm:p-4">Symbol / Legal Rights</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Trademark Search</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Conflict analysis on IP India database</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Same Day</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Pre-filing stage</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Form TM-A Filing</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Digital lodgement &amp; government fee payment</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Same Day</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">™ Symbol Right Granted</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Examination by Registry</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Formality check and substantive law review</td>
                <td className="p-3.5 sm:p-4 text-slate-500">1 to 4 Months</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Under Examination</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Journal Publication</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Public advertisement for third-party scrutiny</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Strictly 4 Months</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Advertised / Accepted</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Certificate Issuance</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Official seal and digital certificate release</td>
                <td className="p-3.5 sm:p-4 text-slate-500">2 to 4 Weeks post-journal</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-semibold">® Registered Symbol Granted</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Trademark Renewal</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Extension of statutory validity via Form TM-R</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Every 10 Years</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-semibold">Perpetual Monopoly Extended</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: How Long Does the Process Take? */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          How Long Does the Trademark Registration Process Take in India?
        </h2>
        <p className="text-sm text-slate-600 font-light">
          On average, an uncontested trademark application takes <strong className="font-semibold text-slate-900">6 to 12 months</strong> from initial filing to certificate issuance. However, if an Examination Objection or third-party Opposition is lodged, the timeline may extend to <strong className="font-semibold text-slate-900">12 to 18 months</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-light text-slate-700">
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
            <span className="font-semibold text-emerald-900 block">Fast-Track / Uncontested Scenario (6–8 Months)</span>
            <p className="text-emerald-800 text-xs">
              When a mark is highly distinctive (coined name), no prior conflicting marks exist, the examiner accepts the mark without objection, and no opposition is filed during the 4-month journal publication.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 space-y-1.5">
            <span className="font-semibold text-amber-900 block">Contested / Objection Scenario (12–18 Months)</span>
            <p className="text-amber-800 text-xs">
              When the registry issues a Section 9 or 11 Examination Report requiring a written reply, followed by a formal Show-Cause hearing before the Hearing Officer, or if a competitor files a notice of opposition.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: What If Objected or Opposed? */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Handling Examination Objections &amp; Oppositions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-light text-slate-700">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-3xs space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-medium">
              <Scale className="w-4 h-4" />
              <span>Trademark Examination Objection</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              An objection is raised by the <em>government examiner</em>. The applicant must submit a comprehensive legal rebuttal citing legal precedents and judicial rulings within 30 days. Merrafilings senior attorneys draft rigorous replies that achieve high acceptance rates without requiring personal hearings.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-3xs space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Third-Party Trademark Opposition</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              An opposition is filed by a <em>third party or competitor</em> within 4 months of journal publication via Form TM-O. Both parties exchange pleadings (Counter-Statement on Form TM-O, Rule 45 Evidence, Rule 46 Evidence) followed by an oral hearing before the Registrar.
            </p>
          </div>
        </div>
      </section>
    </TrademarkGuideLayout>
  );
}
