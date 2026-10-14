"use client";

import React from "react";
import Link from "next/link";
import TrademarkGuideLayout from "@/components/TrademarkGuideLayout";
import {
  DollarSign,
  Receipt,
  BadgePercent,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  Calculator,
  Scale,
} from "lucide-react";

export default function TrademarkRegistrationCostPage() {
  return (
    <TrademarkGuideLayout
      currentSlug="trademark-registration-cost-in-india"
      title="Trademark Registration Cost In India: Complete Fees &amp; Charges Guide"
      breadcrumbLabel="Trademark Registration Cost"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          Calculating the exact <strong className="font-semibold text-slate-900">trademark registration cost in India</strong> is one of the very first budgeting steps for startups, brand creators, and expanding corporations. The overall expenditure comprises two distinct components: the statutory <strong className="font-semibold text-slate-900">Government Filing Fee</strong> payable to the Trade Marks Registry (CGPDTM), and the <strong className="font-semibold text-slate-900">Professional Legal Fee</strong> charged by registered trademark attorneys for public search, Nice classification, and drafting.
        </p>

        {/* Highlight Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/50 border border-blue-100/90 shadow-2xs">
          <div className="flex items-center gap-2 text-blue-900 font-medium text-sm mb-3">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Essential Cost Takeaways</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-slate-700 font-light">
            <div className="p-3 bg-white rounded-xl border border-blue-50 shadow-3xs">
              <span className="text-slate-400 block text-[11px] mb-0.5">MSMEs / Startups Govt Fee</span>
              <strong className="text-emerald-600 text-sm font-semibold">₹4,500 / class</strong>
              <span className="block text-[10.5px] text-slate-400 mt-0.5">50% Statutory Subsidy</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-50 shadow-3xs">
              <span className="text-slate-400 block text-[11px] mb-0.5">Private Ltd / LLP Govt Fee</span>
              <strong className="text-purple-700 text-sm font-semibold">₹9,000 / class</strong>
              <span className="block text-[10.5px] text-slate-400 mt-0.5">Standard Corporate Tariff</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-50 shadow-3xs">
              <span className="text-slate-400 block text-[11px] mb-0.5">Validity Covered</span>
              <strong className="text-slate-900 text-sm font-semibold">10 Full Years</strong>
              <span className="block text-[10.5px] text-slate-400 mt-0.5">No annual recurring fee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Statutory Government Fee Breakdown */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Statutory Government Trademark Filing Fees (Form TM-A)
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Government fees are codified under the First Schedule of the Trade Marks Rules, 2017. Filing electronically saves 10% compared to physical paper submissions:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Applicant Category</th>
                <th className="p-3.5 sm:p-4">Online E-Filing Fee</th>
                <th className="p-3.5 sm:p-4">Physical Counter Fee</th>
                <th className="p-3.5 sm:p-4">Statutory Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">
                  Individual / Sole Proprietorship
                </td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹4,500</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹5,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Per mark, per class</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">
                  DPIIT Startup / Udyam MSME
                </td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹4,500</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹5,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Eligible for 50% statutory rebate</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">
                  Private Limited / Public Limited / LLP / Partnership
                </td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹9,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">₹10,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Per mark, per class</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Multi-Class Cost Matrix */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Trademark Cost by Number of Classes
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Government fees apply on a per-class basis. Below is the exact matrix for single vs multi-class filings:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Filing Scope</th>
                <th className="p-3.5 sm:p-4">Individual / MSME Govt Fee</th>
                <th className="p-3.5 sm:p-4">Company / LLP Govt Fee</th>
                <th className="p-3.5 sm:p-4">Common Industry Scenario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">1 Class (Single Class)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹4,500</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹9,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Stand-alone product (e.g. clothing in Class 25)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">2 Classes (Dual Filing)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹9,000</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹18,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Software product (Class 9) + SaaS cloud (Class 42)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">3 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹13,500</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹27,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">D2C Brand: Food (Class 30), Beverages (Class 32), Retail (Class 35)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">4 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹18,000</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹36,000</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Omnichannel conglomerates &amp; diversified brands</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Professional Fees vs Government Fees */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Total Cost Breakdown: Mandatory vs. Contingent Expenses
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Understanding which cost components are mandatory at inception versus contingent upon subsequent Registry reports prevents unforeseen financial surprises:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Cost Component</th>
                <th className="p-3.5 sm:p-4">Mandatory for Every Filing?</th>
                <th className="p-3.5 sm:p-4">When Is It Incurred?</th>
                <th className="p-3.5 sm:p-4">Typical Cost Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Govt Form TM-A Fee</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-semibold">Yes (Mandatory)</td>
                <td className="p-3.5 sm:p-4 text-slate-500">At time of initial digital submission</td>
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">₹4,500 / ₹9,000 per class</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Attorney Filing Fee</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-semibold">Yes (Recommended)</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Search, classification &amp; drafting</td>
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">₹1,999 to ₹2,999 (Merrafilings)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Examination Objection Reply</td>
                <td className="p-3.5 sm:p-4 text-amber-600 font-medium">Contingent</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Only if Registry issues Sec 9 or 11 notice</td>
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">₹1,500 to ₹3,500 per reply</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Opposition Defense (TM-O)</td>
                <td className="p-3.5 sm:p-4 text-amber-600 font-medium">Contingent</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Only if 3rd party opposes mark during journal ad</td>
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Govt ₹2,700 + Attorney Retainer</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Trademark Renewal (Year 10)</td>
                <td className="p-3.5 sm:p-4 text-slate-600 font-medium">After 10 Years</td>
                <td className="p-3.5 sm:p-4 text-slate-500">Every 10 years to preserve monopoly</td>
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">₹9,000 govt fee per class</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Is Fee Annual? */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Is the Trademark Registration Fee Paid Every Year?
        </h2>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
          <p className="text-sm font-medium text-slate-900">
            No. The trademark registration fee is NOT an annual recurring charge.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            When you pay the Form TM-A registration fee, your statutory monopoly remains legally protected for a continuous span of <strong className="font-semibold text-slate-900">10 full years</strong>. No maintenance fees, annual compliance dues, or retainer payments are legally mandated by the Trade Marks Registry during this decade. The next statutory fee is only payable at Year 10 when filing Form TM-R for renewal.
          </p>
        </div>
      </section>

      {/* Section 5: Strategies to Reduce Costs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          How to Legally Reduce Trademark Registration Cost
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm font-light text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <span className="font-semibold text-emerald-700 block">1. Obtain Udyam MSME Registration</span>
            <p className="text-slate-500 text-xs">
              Corporate entities that qualify for MSME status can obtain an instant Udyam certificate, reducing govt filing fees from ₹9,000 down to ₹4,500 per class (saving 50%).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <span className="font-semibold text-purple-700 block">2. Perform Exhaustive Pre-Filing Search</span>
            <p className="text-slate-500 text-xs">
              Detecting conflicting marks before filing avoids costly Registry examination objections, abandonment losses, and re-filing expenses.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-3xs space-y-1.5">
            <span className="font-semibold text-blue-700 block">3. File Digitally (E-Filing Portal)</span>
            <p className="text-slate-500 text-xs">
              Filing electronically via DSC avoids the 10% physical surcharge, courier costs, and lengthy paper processing delays.
            </p>
          </div>
        </div>
      </section>
    </TrademarkGuideLayout>
  );
}
