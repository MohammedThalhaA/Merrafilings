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
  RefreshCw,
  HelpCircle,
  Calendar,
  Layers,
  BookOpen,
} from "lucide-react";

export default function TrademarkRenewalProcessKeyStepsPage() {
  return (
    <TrademarkRenewalGuideLayout
      currentSlug="trademark-renewal-process-guide-key-steps-explained"
      title="Understanding the Trademark Renewal Process: A Step-by-Step Guide"
      breadcrumbLabel="Renewal Process Guide"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          A registered trademark is one of the most durable commercial assets a business can own. Unlike patents (which expire after 20 years) or copyright (which lasts for author lifetime plus 60 years), trademark protection under Indian law can be renewed indefinitely every <strong className="font-semibold text-slate-950">10 years</strong> under Section 25 of the <strong className="font-semibold text-slate-950">Trade Marks Act, 1999</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          However, securing perpetual brand exclusivity requires strict adherence to statutory renewal deadlines, prescribed forms, and official fee structures. This comprehensive guide provides an authoritative step-by-step breakdown of the trademark renewal procedure in India, detailing when to file, documents required, government fees, and post-renewal verification.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Renewal Baseline</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Act &amp; Section</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Section 25, Trade Marks Act, 1999</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Prescribed Form</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Form TM-R (Renewal &amp; Restoration)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Govt Fee (Electronic)</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">₹9,000 per class (Standard Window)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Renewal Timeline */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The 3 Statutory Windows for Trademark Renewal
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Trade Marks Registry provides three distinct legal windows for maintaining your registered mark:
        </p>

        <div className="space-y-3 pt-2">
          {/* Window 1 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Standard Renewal Window (Up to 6 Months Before Expiry)</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The ideal window to file Form TM-R. Opens exactly 6 months prior to the 10-year expiration date. Standard official fee: <strong className="text-emerald-700 font-semibold">₹9,000 per mark per class</strong>. Seamless processing with zero risk of removal from the Register.
                </p>
              </div>
            </div>
          </div>

          {/* Window 2 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Grace Period with Late Surcharge (Up to 6 Months After Expiry)</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  If the deadline passes, Section 25(3) allows late renewal within 6 months post-expiration. Requires payment of standard fee plus statutory late surcharge (<strong className="text-amber-700 font-semibold">₹9,000 + ₹4,500 = ₹13,500 per class</strong>).
                </p>
              </div>
            </div>
          </div>

          {/* Window 3 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950">Restoration Window (6 Months to 1 Year After Expiry)</h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  If unpaid after 6 months, the Registrar removes the mark from the Register. Under Section 25(4), the proprietor can petition for restoration and renewal between 6 months and 1 year post-expiration. Requires <strong className="text-rose-700 font-semibold">₹9,000 renewal + ₹9,000 restoration surcharge = ₹18,000 per class</strong>, supported by a formal legal affidavit justifying the delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Step-by-Step Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Step-by-Step Guide to Filing Form TM-R
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Follow this 5-step operational roadmap to renew your registered trademark without procedural delays:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Step 1: Audit Application Status &amp; Title</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-normal">
              Verify your original application number, registered owner details, class specification, and validity date on the official IP India e-Register. Ensure no pending change of address or assignment is unrecorded.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Step 2: Execute Form TM-48 (Power of Attorney)</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-normal">
              Authorize your registered Trademark Agent or Attorney through an executed Power of Attorney to draft and file the electronic submission on your behalf.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Step 3: Electronically File Form TM-R</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-normal">
              Submit Form TM-R on the IP India Comprehensive e-Filing Portal. Select whether the application is for timely renewal, renewal with surcharge, or restoration.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Step 4: Statutory Fee Payment &amp; CBR Issuance</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-normal">
              Pay the government statutory fee online via Bharatkosh payment gateway. An electronic Comprehensive Bank Receipt (CBR) is generated instantly as legal acknowledgment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Registry Examination & Certificate Issuance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What Happens After Filing Form TM-R?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Once Form TM-R is submitted, the Trade Marks Registry performs an internal verification:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800 font-normal pt-1">
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Status Transition:</strong> The application status updates to <strong className="font-medium text-purple-700">&quot;Renewal Filed&quot;</strong>, confirming legal protection remains uninterrupted while the file is processed.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Journal Notification:</strong> The renewal order is gazetted in the official Trade Marks Journal.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Renewal Certificate Issuance:</strong> The Registry generates an official Renewal Certificate validating registration for the subsequent 10-year block.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">From what date is the 10-year renewal period calculated?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Under Section 25(1) of the Trade Marks Act, trademark validity is computed from the original application filing date, not from the date the certificate was issued. Each 10-year renewal takes effect from the expiration of the preceding registration term.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Can an expired trademark be revived after 1 year?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Once more than 1 year has elapsed since expiration, the Trade Marks Registry permanently removes the mark from the Register. It cannot be restored via Form TM-R; the proprietor must file a brand new trademark application (Form TM-A), subjecting the brand to fresh examination, public search, and opposition risks.
            </p>
          </div>
        </div>
      </section>
    </TrademarkRenewalGuideLayout>
  );
}
