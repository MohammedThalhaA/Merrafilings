"use client";

import React, { useState } from "react";
import Link from "next/link";
import Form15caGuideLayout from "@/components/Form15caGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Scale,
  Globe2,
  Coins,
  SendHorizontal,
  Landmark,
  FileCheck,
  Building2,
  Calculator,
  ArrowRight,
  Sparkles,
  Layers,
  AlertTriangle,
  Receipt,
  FileSignature,
  Briefcase,
  ChevronDown,
  Percent,
  Check,
} from "lucide-react";

export default function ForeignRemittanceCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Does Form 15CA apply to outward payments made by individuals under LRS?",
      a: "Yes and No. If the personal remittance falls under the 33 exempted RBI Purpose Codes of Rule 37BB (such as education fees under S0305, personal travel under S0301, or medical treatment under S0304), neither Form 15CA nor Form 15CB is required. However, if the personal outward payment is taxable in India or represents commercial transactions, Form 15CA is strictly applicable.",
    },
    {
      q: "Can non-residents claim a refund in India if excess TDS was deducted on their remittance?",
      a: "Yes. If excess TDS was deducted on outward payment due to missing TRC or non-availability of treaty benefits, the non-resident can obtain an Indian PAN, file an income tax return (ITR) in India, and claim a direct refund with statutory interest under Section 244A.",
    },
    {
      q: "What is a 'Permanent Establishment' (PE) and why is it central to 15CB certification?",
      a: "Under Article 5 and Article 7 of Double Taxation Avoidance Agreements (DTAA), business profits earned by a foreign company can only be taxed in India if the entity has a Permanent Establishment (PE) in India. If the foreign entity has no PE, their commercial income is not taxable in India, allowing remittance without Indian withholding tax.",
    },
    {
      q: "What is the penalty if a business fails to deduct TDS on a foreign payment?",
      a: "Under Section 40(a)(i), 100% of the expenditure paid to a non-resident without deducting required TDS is disallowed as a business expense in the remitter's tax return. Furthermore, the remitter is liable to pay interest at 1% to 1.5% per month under Section 201(1A) and face penalty under Section 271C.",
    },
    {
      q: "How long is a Tax Residency Certificate (TRC) valid for foreign remittances?",
      a: "A TRC is generally valid for the specific calendar or fiscal tax year for which it is issued by the foreign government. If multi-year contracts exist, an updated TRC must be procured from the overseas beneficiary each year.",
    },
  ];

  return (
    <Form15caGuideLayout
      currentSlug="15ca15cb-filing-foreign-remittance-compliance"
      title="Understanding 15CA-15CB Filing: Compliance for Foreign Remittances"
      breadcrumbLabel="Foreign Remittance Compliance"
      metaPublishedDate="Cross-Border Tax Compliance / AY 2026-27"
      readingTime="8 min read"
      authorName="Merrafilings International Tax Desk"
    >
      {/* Intro Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-blue-50/60 border border-emerald-100 text-slate-800 mb-8">
        <div className="flex items-start gap-3.5">
          <Globe2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
          <div className="text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-semibold text-slate-950">
              International Tax Governance &amp; Regulatory Compliance
            </p>
            <p className="text-slate-700">
              Whether you are an Indian enterprise procuring global software licenses, an exporter remitting overseas commissions, or an entrepreneur paying technical advisory fees to offshore domain specialists, cross-border payments are strictly governed by Section 195 of the Income Tax Act, 1961.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Filing Form 15CA and Form 15CB provides the statutory authorization required by the Reserve Bank of India (RBI) and Authorised Dealer (AD) Category-I banks to process outward foreign remittances while protecting businesses from heavy statutory disallowances.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: What is 15CA-15CB Filing */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            1
          </span>
          What is 15CA-15CB Filing for Foreign Remittances?
        </h2>
        <p>
          The 15CA-15CB compliance mechanism is a synchronized tax reporting process established under Section 195(6) and Rule 37BB of the Income Tax Rules. It ensures that any sum transferred outside India is evaluated for Indian income tax liability before the wire transfer takes place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                Form 15CA (Remitter's Declaration)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Acts as the remitter's electronic declaration stating the nature and amount of payment made to a non-resident. It acts as an enforceable undertaking that the remitter has deducted the requisite TDS or that the payment is not taxable in India.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                Form 15CB (CA Audit Certification)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A professional certificate issued by an independent Chartered Accountant. The CA certifies that taxes have been calculated in strict accordance with the provisions of the Income Tax Act and applicable Double Taxation Avoidance Agreements (DTAA).
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Required */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            2
          </span>
          The Regulatory Objectives Behind Cross-Border Withholding
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors mb-1">
              Prevent Revenue Leakage
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Once money leaves India, recovering outstanding taxes from a foreign recipient is extraordinarily difficult. Withholding tax at source ensures taxes are collected at the moment of payment.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Landmark className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors mb-1">
              FEMA &amp; RBI Synchronisation
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintains an orderly foreign exchange market by correlating outward remittances under FEMA Purpose Codes with verified income tax electronic undertakings.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Globe2 className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm group-hover:text-purple-700 transition-colors mb-1">
              Treaty Alignment
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Implements bilateral Double Taxation Avoidance Agreements (DTAA) so that foreign service providers are not subjected to double taxation in both India and their resident country.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Remittance Categories */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            3
          </span>
          Key Commercial Remittance Categories &amp; Tax Treatment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {[
            {
              category: "Cloud Hosting & SaaS Subscriptions",
              taxTreatment: "Subject to Equalisation Levy or Royalty / FTS evaluation depending on software license vs. automated service distinction under Section 9(1)(vi).",
              color: "blue",
            },
            {
              category: "Overseas Agency & Sales Commissions",
              taxTreatment: "Generally non-taxable in India under Section 9(1)(i) if services are rendered entirely outside India and payee has no PE/business connection in India.",
              color: "emerald",
            },
            {
              category: "Technical Services & Engineering Fees (FTS)",
              taxTreatment: "Taxable in India under Section 195 at domestic rates (20% + surcharge & cess) or lower treaty rate (usually 10%–15%) if TRC and Form 10F are provided.",
              color: "purple",
            },
            {
              category: "Royalty, Trademark & Copyright Licensing",
              taxTreatment: "Subject to withholding tax under Section 195 / Article 12 of DTAA. Requires in-depth examination of whether rights are for commercial use or distribution.",
              color: "amber",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h4 className="font-semibold text-slate-900 text-base group-hover:text-emerald-700 transition-colors mb-2">
                {item.category}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.taxTreatment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Strategic Compliance Tips */}
      <section className="space-y-4 mb-10 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
            4
          </span>
          Proactive Compliance Strategies for Businesses
        </h2>
        <div className="space-y-3.5 pt-2">
          {[
            {
              title: "1. Embed Tax Clearance Clauses in Vendor Agreements",
              desc: "Ensure international contracts explicitly state whether consideration is inclusive or exclusive of Indian withholding taxes. If net of tax, the remitter must gross up the payment under Section 195A.",
            },
            {
              title: "2. Verify TRC Validity Before Financial Year End",
              desc: "Many countries issue Tax Residency Certificates on a calendar-year basis (Jan–Dec), whereas India follows April–March. Obtain matching certificates covering the exact transaction date.",
            },
            {
              title: "3. Reconcile Form 15CA with Form 27Q Quarterly Returns",
              desc: "All outward payments reported in Form 15CA where TDS was deducted must precisely match the PAN/TAN, challan serial numbers, and deduction dates in the quarterly Form 27Q non-resident TDS return.",
            },
            {
              title: "4. Maintain Permanent Audit Files for 8 Years",
              desc: "Under Section 149 of the Income Tax Act, cross-border transactions involving foreign remittances can be reopened for reassessment for up to 10 years. Retain invoices, agreements, TRCs, 15CA acknowledgments, and 15CB certificates securely.",
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors mb-1">
                {tip.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Interactive FAQ Accordion */}
      <section className="space-y-4 mb-8 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          Frequently Asked Questions on Foreign Remittance Compliance
        </h2>
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-semibold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Form15caGuideLayout>
  );
}
