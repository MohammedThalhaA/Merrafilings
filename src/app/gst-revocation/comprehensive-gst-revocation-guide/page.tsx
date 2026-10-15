"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstRevocationGuideLayout from "@/components/GstRevocationGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Scale,
  Clock,
  ShieldCheck,
  Building2,
  Receipt,
  RotateCcw,
  Undo2,
  BookOpen,
  Gavel,
  Coins,
  Layers,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can a taxpayer who voluntarily surrendered GST registration apply for revocation?",
    a: "No. Under Section 30 of the CGST Act, revocation of cancellation is applicable solely to instances where the registration was cancelled involuntarily ('suo-moto') by the tax department. If you voluntarily surrendered your GST registration under Form GST REG-16, revocation is legally impermissible; you must file an application for fresh GST registration.",
  },
  {
    q: "What are the continuous non-filing thresholds that trigger suo-moto cancellation?",
    a: "Under Section 29(2), regular taxpayers who fail to furnish returns for a continuous period of 6 months (or continuous period prescribed, e.g., 2 consecutive periods under recent amendments) and composition taxpayers who fail to file returns for 3 consecutive tax quarters face immediate show-cause notices for cancellation.",
  },
  {
    q: "How does the extended limitation window of 180 and 270 days operate?",
    a: "While Section 30 prescribes a standard 90-day deadline from the cancellation order, the proviso empowers the Additional or Joint Commissioner to condone delay up to an additional 90 days (total 180 days), and the Principal Commissioner or Commissioner for a further 90 days (total 270 days) upon submission of a formal condonation petition demonstrating sufficient cause.",
  },
  {
    q: "What happens to accumulated Input Tax Credit when GST registration is cancelled and then revoked?",
    a: "During the period of cancellation, the taxpayer's Electronic Credit Ledger is frozen, preventing any credit utilization or transfer. Once the proper officer passes the revocation order in Form GST REG-22, the active ledger status is restored, and accumulated valid ITC becomes fully accessible again.",
  },
  {
    q: "What legal recourse is available if the tax officer rejects the revocation in Form GST REG-05?",
    a: "If the proper officer rejects the revocation application, the taxpayer has the statutory right under Section 107 of the CGST Act to file an appeal before the Appellate Authority (Joint Commissioner of Appeals) using Form GST APL-01 within 3 months from the date of the rejection order.",
  },
];

export default function ComprehensiveGstRevocationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstRevocationGuideLayout
      currentSlug="comprehensive-gst-revocation-guide"
      title="Understanding GST Revocation: A Comprehensive Guide"
      breadcrumbLabel="Comprehensive Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            The cancellation of a Goods and Services Tax (GST) registration by tax authorities is among the most severe administrative actions an Indian enterprise can face. Whether arising from extended cash-flow bottlenecks, non-filing of monthly returns, accounting oversight, or misinterpretation of statutory provisions, cancellation brings an immediate halt to legitimate commercial trade.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            However, Indian indirect tax jurisprudence recognizes that honest businesses must be granted fair legal avenues to rectify compliance defaults. Governed under <strong className="font-semibold text-slate-950">Section 30 of the Central Goods and Services Tax (CGST) Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 23 of the CGST Rules, 2017</strong>, the revocation framework allows taxpayers to restore their cancelled GSTIN to active status. This comprehensive guide breaks down the legal architecture, cancellation grounds, four-stage procedural workflow, and commercial implications of GST revocation.
          </p>
        </section>

        {/* Section 1: What is GST Revocation? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory Definition: What Exactly is GST Revocation?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            In tax law, <strong className="font-semibold text-slate-950">&quot;Revocation of Cancellation&quot;</strong> signifies the official reversal or withdrawal of a cancellation order passed by the proper tax officer. Once approved, it nullifies the cancellation and restores the registration back to its original active condition as if no cancellation had occurred.
          </p>

          <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 my-4 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-amber-900 text-xs sm:text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Critical Legal Distinction: Voluntary Cancellation vs Suo-Moto Cancellation</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              Section 30 applies <strong>strictly and exclusively</strong> to registrations cancelled <em>suo-moto</em> (involuntarily) by the proper officer under Section 29(2). If a taxpayer voluntarily applied to cancel their registration under Section 29(1) using Form GST REG-16 and an order was issued in Form GST REG-19, revocation is <strong>legally impermissible</strong>. In such cases, the taxpayer must apply for a brand new GST registration if they intend to resume business.
            </p>
          </div>
        </section>

        {/* Section 2: Why Might a Suo-Moto Cancellation Occur? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Why Do Authorities Issue Suo-Moto Cancellation Orders?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Under Section 29(2) of the CGST Act, the proper officer is legally empowered to cancel a GST registration from a prospective or retrospective date based on specific statutory violations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>1. Consecutive Return Non-Filing Defaults</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Failure by a regular taxpayer to furnish GSTR-1 and GSTR-3B returns for continuous monthly tax periods, or failure by a composition dealer to furnish quarterly returns for 3 consecutive quarters.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>2. Rule 10A Bank Account Default</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Failure to furnish verified bank account details within 30 days of registration grant or before filing the first outward supply statement triggers automatic suspension and cancellation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <Building2 className="w-4 h-4 text-purple-600" />
                <span>3. Non-Commencement of Business</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Any person who has obtained voluntary registration under Section 25(3) but fails to commence commercial business operations within 6 months from the date of registration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <Gavel className="w-4 h-4 text-red-600" />
                <span>4. Fraud or Suppression of Material Facts</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Where registration was obtained by fraud, wilful misstatement, or suppression of facts, or where circular trading / fake invoicing without physical goods movement is detected.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The 4 Procedural Steps */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The 4 Procedural Stages of GST Revocation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Successfully navigating the revocation process requires meticulous execution across four statutory stages:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <span>Stage 1: Filing Application in Form GST REG-21</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                The taxpayer files Form GST REG-21 within the statutory 90-day window (or up to 180 / 270 days with delay condonation). Crucially, all defaulting returns up to cancellation date must be filed and all taxes/interest cleared before portal submission.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <span>Stage 2: Uploading Verified Documentary Evidence</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                Attach solid evidentiary records explaining why defaults occurred: tax challans, bank statements, certified reconciliation statements, and partner/board resolutions formally authorizing the restoration request.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <span>Stage 3: Proper Officer Evaluation &amp; SCN Handling</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                The tax officer evaluates the application within 30 days. If satisfied, they pass a restoration order. If not satisfied, they issue Form GST REG-23 (Show Cause Notice). The taxpayer must file a formal rejoinder in Form GST REG-24 within 7 working days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#5C3BFF] transition-colors">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">4</span>
                <span>Stage 4: Issuance of Revocation Order in Form GST REG-22</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                Upon satisfaction, the officer issues Form GST REG-22. The GSTIN is immediately restored to active status on the portal, restoring full invoicing, e-way bill, and ITC privileges.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Implications of Revocation */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Operational &amp; Commercial Implications of Successful Revocation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Restoring your GSTIN revitalizes your enterprise across multiple operational fronts:
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 my-4">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Legal Tax Invoicing Resumed:</strong> You can once again issue compliant tax invoices and collect GST legally from clients without risking Section 122 penalties.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Credit Ledger Reactivation:</strong> Accumulated Input Tax Credit balances become accessible for offsetting future outward tax obligations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Immediate E-Way Bill Generation:</strong> Transporting consignments above ₹50,000 becomes fully compliant, eliminating vehicle detention risks under Section 129.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Vendor &amp; Client Retention:</strong> B2B enterprise customers can safely release payments and claim input credits on your supplies without audit disallowances.</span>
            </li>
          </ul>
        </section>

        {/* Section 5: Mandatory Post-Revocation Compliances */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Undo2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Mandatory Post-Revocation Compliance under Rule 23(1)</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Receiving the revocation order is not the end of the journey. Taxpayers must fulfill critical post-restoration obligations:
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 my-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              The 30-Day Interim Return Filing Rule
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Rule 23(1) of the CGST Rules, once Form GST REG-22 is issued, the taxpayer is statutorily mandated to file all pending returns for the interim period—from the effective date of cancellation to the date of the revocation order—within <strong className="text-slate-900 font-semibold">30 days from the date of the revocation order</strong>. Failing to file these interim returns will trigger another round of cancellation proceedings.
            </p>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="space-y-2.5 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200 hover:border-[#5C3BFF] hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 7: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Get Your Cancelled GSTIN Restored Smoothly
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                From calculating minimum tax and interest dues to drafting delay condonation petitions and representing before tax commissioners, Merrafilings provides end-to-end GST revocation assistance.
              </p>
            </div>
            <Link
              href="/gst-revocation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-[#155EEF] hover:text-white text-xs font-semibold shadow-md transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>Explore GST Revocation Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </article>
    </GstRevocationGuideLayout>
  );
}
