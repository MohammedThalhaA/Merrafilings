"use client";

import React from "react";
import Link from "next/link";
import TrademarkGuideLayout from "@/components/TrademarkGuideLayout";
import {
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function TrademarkRenewalValidityPage() {
  return (
    <TrademarkGuideLayout
      currentSlug="trademark-registration-in-india-can-be-renewed-after"
      title="Trademark Registration in India Can Be Renewed After How Many Years?"
      breadcrumbLabel="Trademark Renewal Validity & Timelines"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-200/80 shadow-2xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              10
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-medium text-emerald-950">
                Direct Statutory Answer: Exactly 10 Years
              </h2>
              <p className="text-xs sm:text-sm text-emerald-800/90 font-light mt-1 leading-relaxed">
                Under <strong className="font-semibold">Section 25 of the Trade Marks Act, 1999</strong>, a registered trademark in India is valid for a statutory term of <strong className="font-semibold">10 years</strong> from the initial filing date. It can be renewed perpetually every 10 years by filing <strong className="font-semibold">Form TM-R</strong> with the Trade Marks Registry.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[14.5px] leading-relaxed text-slate-700 font-light">
          Unlike patents (which lapse irrevocably after 20 years) or industrial designs (which expire after 15 years), trademark rights in India have <strong className="font-medium text-slate-900">no finite expiration cap</strong>. As long as you submit the required renewal filings and pay the prescribed statutory fees within designated timelines, your exclusive brand monopoly can endure for generations.
        </p>
      </div>

      {/* Section 1: Validity Stages Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Trademark Validity &amp; Renewal Lifecycle in India
        </h2>
        <p className="text-sm text-slate-600 font-light">
          The table below illustrates how the 10-year validity cycles extend perpetually through timely filings:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Trademark Milestone</th>
                <th className="p-3.5 sm:p-4">Statutory Validity Granted</th>
                <th className="p-3.5 sm:p-4">Filing Form Required</th>
                <th className="p-3.5 sm:p-4">Legal Protection Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Initial Registration</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">10 Years from Application Date</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Form TM-A</td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Active (® Mark Authorized)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">First Renewal (Year 10)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">Additional 10 Years (Years 10–20)</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Form TM-R</td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Continued Protection</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Second Renewal (Year 20)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">Additional 10 Years (Years 20–30)</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Form TM-R</td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Continued Protection</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Subsequent Renewals</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">Indefinitely in 10-Year Increments</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Form TM-R</td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Perpetual Monopolistic Right</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: When Can You File Renewal (3 Windows) */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            When Can a Trademark Renewal Application Be Filed?
          </h2>
          <p className="text-sm text-slate-600 font-light mt-1">
            Indian trademark law establishes 3 critical statutory windows for renewing an expiring mark:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Window 1: On-Time Window */}
          <div className="p-5 rounded-2xl bg-white border border-emerald-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
                Window 1: Normal Renewal
              </span>
              <h3 className="text-base font-medium text-slate-900">
                Within 6 Months Prior to Expiry
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                You can submit Form TM-R anytime within the 6 months leading up to your trademark’s 10th anniversary. This is the optimal window that incurs standard government fees with zero late penalties.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 text-xs">
              <span className="text-slate-400 block text-[11px]">Govt E-Filing Fee</span>
              <strong className="text-emerald-600 font-semibold text-sm">₹9,000 / class</strong>
            </div>
          </div>

          {/* Window 2: Grace Period */}
          <div className="p-5 rounded-2xl bg-white border border-amber-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold">
                Window 2: Grace Period
              </span>
              <h3 className="text-base font-medium text-slate-900">
                Within 6 Months After Expiry
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                If you miss the initial deadline, the Trade Marks Act grants a 6-month statutory grace period immediately following the expiration date. You must pay a surcharge penalty alongside standard renewal fees.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 text-xs">
              <span className="text-slate-400 block text-[11px]">Govt Fee + Late Surcharge</span>
              <strong className="text-amber-600 font-semibold text-sm">₹9,000 + ₹4,500 / class</strong>
            </div>
          </div>

          {/* Window 3: Restoration Window */}
          <div className="p-5 rounded-2xl bg-white border border-rose-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 text-xs font-semibold">
                Window 3: Restoration
              </span>
              <h3 className="text-base font-medium text-slate-900">
                Within 1 Year After Expiry
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                If the grace period lapses, the Registrar removes the mark from the Register. However, under Section 25(4), you can file for &quot;Restoration and Renewal&quot; within 1 year of expiry with an explanation of delay.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 text-xs">
              <span className="text-slate-400 block text-[11px]">Govt Fee + Restoration Charge</span>
              <strong className="text-rose-600 font-semibold text-sm">₹9,000 + ₹9,000 / class</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Government Renewal Cost Table */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Trademark Renewal Fees Based on Number of Classes
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Under the Trade Marks Rules 2017, the statutory renewal fee for Form TM-R is ₹9,000 per class (unlike Form TM-A, there is no MSME rebate for renewal fees):
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Number of Classes</th>
                <th className="p-3.5 sm:p-4">Normal E-Filing Renewal Fee</th>
                <th className="p-3.5 sm:p-4">Renewal in Grace Period (+Surcharge)</th>
                <th className="p-3.5 sm:p-4">Physical Filing Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">1 Class</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹9,000</td>
                <td className="p-3.5 sm:p-4 text-amber-700">₹13,500</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">2 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹18,000</td>
                <td className="p-3.5 sm:p-4 text-amber-700">₹27,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹20,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">3 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹27,000</td>
                <td className="p-3.5 sm:p-4 text-amber-700">₹40,500</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹30,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: What Happens If You Do Not Renew */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          What Happens If a Trademark Is Not Renewed?
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Neglecting trademark renewal carries serious statutory and commercial consequences for your business:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-light">
          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-950 block">Removal from the Register of Trade Marks</strong>
              <span className="text-rose-700 text-xs">The Registrar publishes notice of mark removal, officially stripping your registration certificate of validity.</span>
            </div>
          </div>

          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-950 block">Forfeiture of the Exclusive ® Symbol</strong>
              <span className="text-rose-700 text-xs">Continuing to use the ® symbol on an unrenewed, lapsed mark constitutes an offence punishable under Section 107 of the Act.</span>
            </div>
          </div>

          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-950 block">Loss of Statutory Infringement Protection</strong>
              <span className="text-rose-700 text-xs">You can no longer file a statutory infringement lawsuit under Section 29, being relegated to slower common law passing-off remedies.</span>
            </div>
          </div>

          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium text-rose-950 block">Exposure to Competitor Squatting</strong>
              <span className="text-rose-700 text-xs">Once 1 year passes without restoration, third parties or rival firms can register identical or confusingly similar marks.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trademark Registration vs Renewal */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Trademark Registration vs. Trademark Renewal
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Particular</th>
                <th className="p-3.5 sm:p-4">New Trademark Registration</th>
                <th className="p-3.5 sm:p-4">Trademark Renewal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Statutory Form</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Form TM-A</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Form TM-R</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Substantive Examination</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Yes (Assessed under Sections 9 &amp; 11)</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">No (Procedural verification only)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Journal Advertisement</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Mandatory 4-Month Opposition Window</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">No Public Opposition Period</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Typical Processing Time</td>
                <td className="p-3.5 sm:p-4 text-slate-600">6 to 18 months</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">1 to 3 weeks for renewal order</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </TrademarkGuideLayout>
  );
}
