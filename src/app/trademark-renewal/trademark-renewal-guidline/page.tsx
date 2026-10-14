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
  Layers,
  BookOpen,
  HelpCircle,
  Gavel,
} from "lucide-react";

export default function TrademarkRenewalGuidelinePage() {
  return (
    <TrademarkRenewalGuideLayout
      currentSlug="trademark-renewal-guidline"
      title="Trademark Renewal Guidelines in India: Regulatory & Procedural Standards"
      breadcrumbLabel="Renewal Guidelines"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In India, the protection and administration of trademarks are overseen by the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) under the statutory authority of the <strong className="font-semibold text-slate-950">Trade Marks Act, 1999</strong> and the <strong className="font-semibold text-slate-950">Trade Marks Rules, 2017</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          These official Trademark Renewal Guidelines outline the legal standards, regulatory cutoffs, documentation prerequisites, and post-renewal compliance obligations necessary to maintain unassailable brand exclusivity across all Indian jurisdictions.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Regulatory Compliance Standards</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Administrative Body</span>
            <strong className="font-semibold text-slate-950 text-[13px]">CGPDTM, Ministry of Commerce &amp; Industry</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Expiration</span>
            <strong className="font-semibold text-slate-950 text-[13px]">10 Years from Application Filing Date</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Official Renewal Form</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Form TM-R (Electronic Submission)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Core Guidelines */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Official Regulatory Guidelines for Trademark Renewal
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          All registered trademark owners must adhere to the following statutory guidelines issued under Rule 57 of the Trade Marks Rules 2017:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Guideline 1: Timely Filing Window</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Form TM-R may be submitted at any time within the six-month period preceding the expiration of the last registration. Filing during this window incurs only the standard statutory fee of ₹9,000 per class without late surcharges.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Guideline 2: Power of Attorney Authorization (Form TM-48)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              When filing through a registered Trademark Agent or Advocate, a properly executed Form TM-48 on non-judicial stamp paper must be attached. If the agent of record has changed since original registration, a fresh TM-48 is mandatory.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Guideline 3: Prohibition on Mark Alternation</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              A renewal application cannot be used to introduce amendments, additions, or graphic modifications to the registered trademark. The mark renewed will be identical to the representation entered in the Register.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Guideline 4: Mandatory Restoration Affidavit (Post-Expiry)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              If filing between 6 months and 1 year after the expiration date, the applicant must file a petition for restoration and renewal under Section 25(4) accompanied by an affidavit stating the genuine reasons why the mark could not be renewed within the prescribed time.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Statutory Penalties for False &reg; Symbol Usage */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Legal Penalties for False Representation of Trademark Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Maintaining active renewal is essential to avoid criminal liability under the Trade Marks Act:
        </p>

        <div className="p-4.5 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <strong className="font-semibold text-rose-950">Section 107 Penalty for Falsely Representing a Trade Mark as Registered:</strong>
          <p className="text-rose-900 leading-relaxed font-normal">
            Under Section 107, any person who represents that a trademark is registered (such as using the &reg; symbol or stating &quot;Registered Trademark&quot;) when it is not registered, or after the registration has expired without renewal, commits a cognizable statutory offense punishable by imprisonment for up to three years, or with a fine, or both.
          </p>
        </div>
      </section>

      {/* Section 3: Summary Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Summary Renewal Compliance Checklist
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Compliance Step</th>
                <th className="py-3 px-4">Requirement</th>
                <th className="py-3 px-4">Authority / Form</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Date Calculation</td>
                <td className="py-3.5 px-4">Determine 10th anniversary from original filing date</td>
                <td className="py-3.5 px-4">Section 25(1)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Application Lodgment</td>
                <td className="py-3.5 px-4">Form TM-R electronically signed via Class 3 DSC</td>
                <td className="py-3.5 px-4">Rule 57</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Statutory Fee</td>
                <td className="py-3.5 px-4">₹9,000 per class (timely) or ₹13,500 (grace period)</td>
                <td className="py-3.5 px-4">First Schedule</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Post-Filing Verification</td>
                <td className="py-3.5 px-4">Track e-Register until status updates to &quot;Registered&quot; with new date</td>
                <td className="py-3.5 px-4">Trade Marks Journal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Is an in-person appearance required at the Trade Marks Registry for renewal?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              No. Trademark renewal is processed 100% electronically through the IP India e-filing portal. In-person appearances are only required if a formal show-cause hearing is scheduled regarding disputed restoration petitions.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Can Merrafilings manage my company&apos;s multi-brand renewal portfolio?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Yes. Merrafilings provides automated IP docketing, deadline tracking, title auditing, and Form TM-R drafting for enterprise brand portfolios across all 45 Nice classes.
            </p>
          </div>
        </div>
      </section>
    </TrademarkRenewalGuideLayout>
  );
}
