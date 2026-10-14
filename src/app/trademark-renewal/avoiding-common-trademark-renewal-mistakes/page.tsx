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
  AlertTriangle,
  XCircle,
  HelpCircle,
  Calendar,
} from "lucide-react";

export default function AvoidingCommonTrademarkRenewalMistakesPage() {
  return (
    <TrademarkRenewalGuideLayout
      currentSlug="avoiding-common-trademark-renewal-mistakes"
      title="Common Mistakes to Avoid in Trademark Renewal: Legal & Practical Guide"
      breadcrumbLabel="Common Renewal Mistakes"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Renewing a registered trademark in India appears deceptively simple on paper: submit Form TM-R and pay the statutory fee. Yet, every year, hundreds of established brands in India unintentionally lose their trademark protection or incur hefty penalties due to avoidable administrative, technical, and legal oversights.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          In this guide, Merrafilings senior IP attorneys break down the <strong className="font-semibold text-slate-950">most critical trademark renewal mistakes</strong>, the severe commercial liabilities they trigger, and the proactive safeguards every business owner should implement.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Renewal Risk Analysis</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Most Frequent Error</span>
            <strong className="font-semibold text-rose-700 text-[13px]">Calculating Expiry from Certificate Grant</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Restoration Penalty Surcharge</span>
            <strong className="font-semibold text-amber-700 text-[13px]">100% Surcharge (₹9,000 + ₹9,000)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Maximum Hard Deadline</span>
            <strong className="font-semibold text-slate-950 text-[13px]">1 Year Post-Expiry (No Extensions)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The Top 6 Renewal Mistakes */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The 6 Most Costly Trademark Renewal Mistakes
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Review these frequent missteps and their statutory consequences under the Trade Marks Act, 1999:
        </p>

        <div className="space-y-3.5 pt-2">
          {/* Mistake 1 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-4.5 h-4.5" />
              <span>Mistake 1: Calculating 10-Year Validity from Certificate Date Instead of Filing Date</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-slate-950 font-semibold">The Trap:</strong> Because trademark applications can take 1 to 3 years to reach final registration, business owners often mistakenly assume their 10 years start from the certificate date.
            </p>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-emerald-700 font-semibold">Statutory Rule:</strong> Section 25(1) clearly dictates that registration takes effect retrospectively from the <strong className="text-slate-950 font-medium">Application Filing Date</strong>. Counting from certificate issuance leads to missing renewal cutoffs entirely.
            </p>
          </div>

          {/* Mistake 2 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-4.5 h-4.5" />
              <span>Mistake 2: Relying Blindly on the Registry&apos;s O-3 Reminder Notice</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-slate-950 font-semibold">The Trap:</strong> Assuming the government will notify you before your mark expires. If you have changed your office address without updating Form TM-M, the notice will bounce.
            </p>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-emerald-700 font-semibold">Legal Reality:</strong> Indian courts have held that non-delivery of an O-3 notice does not invalidate the removal of an expired mark if the proprietor failed to maintain an updated address of service.
            </p>
          </div>

          {/* Mistake 3 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-4.5 h-4.5" />
              <span>Mistake 3: Attempting to Modify Logo Graphics or Wording in Form TM-R</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-slate-950 font-semibold">The Trap:</strong> Submitting a redesigned, modernized logo during renewal filing.
            </p>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-emerald-700 font-semibold">Legal Reality:</strong> Form TM-R strictly renews the mark <strong className="text-slate-950 font-medium">as-is</strong>. Attempting to modify the visual mark results in discrepancy notices. Changes to brand representation require filing a fresh Form TM-A.
            </p>
          </div>

          {/* Mistake 4 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-4.5 h-4.5" />
              <span>Mistake 4: Ignoring Multi-Class Surcharge Obligations</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-slate-950 font-semibold">The Trap:</strong> Paying the renewal fee for a single class on a multi-class registration (e.g. registered in Classes 9, 35, and 42).
            </p>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-emerald-700 font-semibold">Fee Requirement:</strong> Renewal fees are payable on a <strong className="text-slate-950 font-medium">per-class basis</strong> (₹9,000 × 3 = ₹27,000). Partial payment leads to the automatic abandonment of the unpaid classes.
            </p>
          </div>

          {/* Mistake 5 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-4.5 h-4.5" />
              <span>Mistake 5: Overlooking Unrecorded Entity Name or Structure Changes</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-slate-950 font-semibold">The Trap:</strong> If your company transitioned from a Proprietorship to a Private Limited, or merged with another firm, filing Form TM-R under the new company name without recording the assignment will be rejected.
            </p>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-emerald-700 font-semibold">Solution:</strong> File Form TM-P (Transfer/Assignment) either before or concurrently with the renewal application.
            </p>
          </div>

          {/* Mistake 6 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-4.5 h-4.5" />
              <span>Mistake 6: Exceeding the 1-Year Restoration Outer Limit</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-slate-950 font-semibold">The Trap:</strong> Believing that paying sufficient penalties can revive a trademark after several years of abandonment.
            </p>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              <strong className="text-emerald-700 font-semibold">Statutory Bar:</strong> Under Rule 60 of the Trade Marks Rules 2017, the Registrar has <strong className="text-rose-700 font-semibold">zero discretionary power</strong> to restore a mark once 1 year has passed post-expiry. The mark is irreversibly extinguished.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Proactive Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Safe Renewal Checklist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] text-slate-900 font-normal pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1.5" />
            <strong className="font-semibold text-slate-950">Set Docket at 9.5 Years</strong>
            <p className="text-slate-800 mt-1 leading-relaxed">Initiate filing right when the 6-month pre-expiry window opens.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1.5" />
            <strong className="font-semibold text-slate-950">Verify Entity Records</strong>
            <p className="text-slate-800 mt-1 leading-relaxed">Confirm proprietor name, registered office, and partner lists match MCA records.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1.5" />
            <strong className="font-semibold text-slate-950">Engage Registered Counsel</strong>
            <p className="text-slate-800 mt-1 leading-relaxed">Ensure electronic filing via authorized IP attorneys to prevent portal rejections.</p>
          </div>
        </div>
      </section>

      {/* Section 3: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Can an abandoned trademark be re-registered as a fresh application?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Yes, you can file a fresh application (Form TM-A). However, you lose your original priority date. During the 10-year gap, new competitors may have registered conflicting marks, exposing your brand to Section 11 relative refusal.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">What should I do if my address changed after trademark registration?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              File Form TM-M (Request for Alteration of Address of Service) along with supporting address proof (Certificate of Incorporation, utility bill, or GST registration) to update official Registry records before or alongside renewal.
            </p>
          </div>
        </div>
      </section>
    </TrademarkRenewalGuideLayout>
  );
}
