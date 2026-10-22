"use client";

import React, { useState } from "react";
import Link from "next/link";
import IncomeTaxNoticeGuideLayout from "@/components/IncomeTaxNoticeGuideLayout";
import {
  Building2,
  Home,
  Calculator,
  Scale,
  Receipt,
  FileSpreadsheet,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Percent,
  FileText,
  BadgeAlert,
  Sparkles,
  HelpCircle,
  TrendingDown,
} from "lucide-react";

export default function DeemedLetOutPropertyGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "How many properties can an individual taxpayer claim as self-occupied without paying deemed rent?",
      a: "Following the amendment introduced by the Finance Act 2019 under Section 23(2) of the Income Tax Act, an individual or HUF can claim up to TWO residential properties as self-occupied with an Annual Value taken as NIL. If you own three or more residential properties, you must select two as self-occupied, and the third (and subsequent) property will be treated as a 'Deemed Let-Out Property' (DLOP), even if it remains vacant.",
    },
    {
      q: "Can I choose which properties to declare as self-occupied each year?",
      a: "Yes. The Income Tax Act allows taxpayers the flexibility to choose which two houses to declare as self-occupied in any given assessment year. You can evaluate the tax calculations annually and select the properties that have higher notional rental values as self-occupied to legally minimize your total taxable house property income.",
    },
    {
      q: "Is there a ceiling on the home loan interest deduction for a deemed let-out property?",
      a: "Unlike self-occupied properties—where home loan interest deduction under Section 24(b) is capped at ₹2,00,000 per financial year—there is NO statutory ceiling on interest deduction for let-out or deemed let-out properties. However, under Section 71(3A), the maximum loss under the head 'Income from House Property' that can be set off against other heads of income (such as salary or business profits) in the current year is limited to ₹2,00,000. Any unabsorbed loss can be carried forward for up to 8 assessment years.",
    },
    {
      q: "Why do taxpayers receive income tax notices regarding deemed let-out properties?",
      a: "The Income Tax Department's Insight portal and Annual Information Statement (AIS) capture high-value property purchases from the state sub-registrar, municipal tax records, and high electricity bills under SFT reporting. When the automated system detects that a taxpayer owns three or more residential properties but has declared only one or none in their ITR, notices under Section 142(1) or Section 148 are issued proposing additions on account of un-reported deemed rental income.",
    },
    {
      q: "Are municipal taxes deductible for a deemed let-out property even if no rent is received?",
      a: "Yes. Municipal taxes (property tax, sewerage tax, water tax) actually paid by the owner during the financial year can be deducted from the Gross Annual Value to arrive at the Net Annual Value. However, unpaid or accrued municipal taxes cannot be claimed.",
    },
  ];

  return (
    <IncomeTaxNoticeGuideLayout
      currentSlug="deemed-letout"
      title="Concept of Deemed Let-Out Property under the Income Tax Act, 1961: Taxation, Calculation & Notice Defense"
      breadcrumbLabel="Concept of Deemed Let-Out Property"
      metaPublishedDate="AY 2026-27 Compliant / Section 23 & 24 House Property"
      readingTime="10 min read"
      authorName="Merrafilings Direct Tax Litigation & Assessment Defense Desk"
    >
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          The concept of <strong>Deemed Let-Out Property (DLOP)</strong> is one of the most critical and frequently misunderstood provisions under the <strong>Income Tax Act, 1961</strong>, specifically governing the taxation of income from house property under Sections 22 through 27. It comes into effect when a taxpayer owns multiple residential properties but leaves one or more vacant or unoccupied by tenants.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          The statutory intention of the Legislature is unambiguous: property owners should not be exempt from taxation simply by keeping residential assets locked or vacant. The Act treats such vacant properties as if they have been rented out at fair market rates and taxes the owner on a <strong>notional rent</strong>. Understanding this mechanism is vital to avoid sudden scrutiny notices under Section 142(1) or Section 148.
        </p>
      </section>

      {/* Section 1: What is Deemed Let-Out Property */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Deemed Let-Out Property?
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Under the Income Tax Act, a residential house is classified as <strong>Deemed to be Let Out</strong> if:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Home className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              Not Occupied by Owner
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The property is not occupied by the owner as a primary or secondary personal residence during the financial year.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
              Not Actually Rented Out
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The property remains vacant or locked throughout the year, yielding zero actual cash rental income.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5">
              Statutory Tax Liability
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The owner is legally obligated to compute notional annual rent and pay income tax under Section 23(1) of the Act.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Statutory Conditions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Conditions under Section 23 of the Income Tax Act
        </h2>
        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1">
              The Two Self-Occupied Houses Exemption (Section 23(2))
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prior to Budget 2019, only one property was permitted as self-occupied with NIL annual value. The Finance Act 2019 amended Section 23(2) to permit taxpayers to claim up to <strong>TWO residential houses</strong> as self-occupied. If an individual owns three or more properties, only two can be declared self-occupied; all remaining properties are statutorily deemed to be let out.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1">
              Computation of Notional Annual Rent (Section 23(1))
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tax is computed not on zero actual rent, but on the <strong>Reasonable Expected Rent (RER)</strong>. RER is determined as the higher of Municipal Value and Fair Market Rent, capped by the Standard Rent under the local Rent Control Act.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How Deemed Let-Out Property is Taxed */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. How is Deemed Let-Out Property Taxed? (Step-by-Step Formula)
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          The computation of taxable income from a deemed let-out house follows this statutory formula:
        </p>

        <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 font-mono text-xs sm:text-[13px] shadow-sm">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-emerald-400">Step 1: Gross Annual Value (GAV)</span>
            <span>Higher of (Municipal Value vs Fair Rent), subject to Standard Rent</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-blue-400">Step 2: Less Municipal Taxes Paid</span>
            <span>Only taxes actually paid during the year by the owner</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-amber-400">Step 3: Net Annual Value (NAV)</span>
            <span>GAV minus Municipal Taxes Paid</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-purple-400">Step 4: Less Standard Deduction (Sec 24(a))</span>
            <span>Flat 30% of Net Annual Value</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-rose-400">Step 5: Less Interest on Housing Loan (Sec 24(b))</span>
            <span>Actual interest paid (No ₹2 Lakh cap for deemed let-out!)</span>
          </div>
          <div className="flex justify-between items-center pt-1 font-bold text-emerald-300">
            <span>Final Income from House Property</span>
            <span>Added to Gross Total Income &amp; taxed at slab rates</span>
          </div>
        </div>
      </section>

      {/* Section 4: Numerical Case Study */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Practical Numerical Case Study: Mr. A&apos;s Vacant Property
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Consider an individual, <strong>Mr. A</strong>, who owns two residential properties:
        </p>
        <ul className="text-xs sm:text-[13px] text-slate-700 list-disc pl-5 space-y-1">
          <li><strong>Property 1 (Primary Home):</strong> He resides here with family. Declared as Self-Occupied (NAV = NIL).</li>
          <li><strong>Property 2 (Second Home):</strong> Located in Pune, kept vacant throughout the financial year without being rented out.</li>
        </ul>

        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 text-xs sm:text-[13px]">
          <h4 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">
            Tax Computation for Property 2 (Deemed Let-Out):
          </h4>
          <div className="flex justify-between text-slate-600 py-1">
            <span>Fair Market Rent (₹15,000 x 12 months)</span>
            <span className="font-medium text-slate-900">₹1,80,000</span>
          </div>
          <div className="flex justify-between text-slate-600 py-1 border-t border-slate-100">
            <span>Less: Municipal Taxes Paid</span>
            <span className="text-rose-600 font-medium">- ₹12,000</span>
          </div>
          <div className="flex justify-between text-slate-800 font-semibold py-1.5 border-t border-slate-200 bg-slate-50/60 px-2 rounded-lg">
            <span>Net Annual Value (NAV)</span>
            <span>₹1,68,000</span>
          </div>
          <div className="flex justify-between text-slate-600 py-1 border-t border-slate-100">
            <span>Less: Section 24(a) Standard Deduction (30% of ₹1,68,000)</span>
            <span className="text-rose-600 font-medium">- ₹50,400</span>
          </div>
          <div className="flex justify-between text-slate-600 py-1 border-t border-slate-100">
            <span>Less: Housing Loan Interest under Section 24(b) (Assumed zero)</span>
            <span className="text-slate-500 font-medium">₹0</span>
          </div>
          <div className="flex justify-between text-emerald-900 font-bold py-2 border-t border-emerald-200 bg-emerald-50 px-2.5 rounded-lg text-sm">
            <span>Taxable Income from Deemed Let-Out Property</span>
            <span>₹1,17,600</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed italic">
          *Note: Even though Mr. A earned zero actual rupee from Property 2, he is legally taxed on ₹1,17,600, which will be added to his taxable salary and other income.
        </p>
      </section>

      {/* Section 5: Why Notices are Issued */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Why Income Tax Notices are Triggered for Deemed Let-Out Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-amber-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>AIS &amp; SFT Land Registry Mismatch</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When you purchase a third property, the sub-registrar files an SFT report with your PAN. If your return shows only one self-occupied house and zero deemed rent for the others, the automated CPC system flags the return.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-rose-900 flex items-center gap-1.5">
              <BadgeAlert className="w-4 h-4 text-rose-700" />
              <span>Inquiry Notice under Section 142(1)</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Assessing Officer issues a questionnaire requesting proof of occupancy (utility bills, voter ID) for the declared self-occupied units, and proposes adding reasonable market rent for the un-declared vacant properties.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Frequently Asked Questions on Deemed Let-Out Property
        </h2>
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-medium text-slate-900 hover:text-emerald-700 hover:bg-slate-50/60 transition cursor-pointer"
                >
                  <span className="text-xs sm:text-[13.5px] leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </IncomeTaxNoticeGuideLayout>
  );
}
