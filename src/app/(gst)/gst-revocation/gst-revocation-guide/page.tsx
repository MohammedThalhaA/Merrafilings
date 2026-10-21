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
  BarChart3,
  TrendingUp,
  AlertCircle,
  FileCheck2,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How does GST cancellation differ from GST suspension?",
    a: "Suspension is a temporary status initiated automatically when a show-cause notice (Form GST REG-17) is issued or when severe return mismatches are flagged. During suspension, you cannot issue tax invoices or pass ITC, but registration is not fully cancelled. If you fail to resolve the notice satisfactorily, suspension converts into permanent cancellation via Form GST REG-19.",
  },
  {
    q: "Can a cancelled GSTIN still be searched and verified on the GST portal?",
    a: "Yes. The GST portal maintains public records of all GSTINs. When a GSTIN is cancelled, its status displays publicly as 'Cancelled', along with the effective cancellation date. This alerts customers, vendors, and financial institutions that the entity cannot legally transact in taxable supplies.",
  },
  {
    q: "What is the consequence of conducting business under a cancelled GST registration?",
    a: "Engaging in taxable supplies or collecting GST while registration is cancelled is a serious statutory offence under Section 122 of the CGST Act. It attracts a minimum penalty equal to 100% of the tax involved or ₹10,000 (whichever is higher), alongside potential recovery proceedings and criminal prosecution under Section 132.",
  },
  {
    q: "How does the Composition Scheme affect GST cancellation and revocation?",
    a: "Under Section 10 read with Section 29(2)(b), composition taxpayers who fail to file Form CMP-08 statements for 3 consecutive quarters face cancellation. To seek revocation under Form GST REG-21, all overdue CMP-08 statements and the annual GSTR-4 return must be filed and taxes cleared first.",
  },
  {
    q: "Is there any personal hearing required before a revocation application is approved?",
    a: "Generally, if all pending returns and tax dues are cleared, the proper officer approves Form GST REG-21 on the portal without requiring a physical appearance. However, if the officer issues Form GST REG-23 notice and your written reply (REG-24) requires further factual substantiation, they may schedule a personal hearing (virtual or in-person).",
  },
];

export default function GstRevocationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstRevocationGuideLayout
      currentSlug="gst-revocation-guide"
      title="GST Revocation Guide: Statutory Rules, Business Impact & Restoration"
      breadcrumbLabel="Revocation Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            The introduction of the Goods and Services Tax (GST) consolidated India&apos;s indirect tax architecture into a single unified regime. While GST streamlines tax compliance for compliant businesses, regulatory mechanisms are equally uncompromising when compliance failures occur. If a business falls behind on statutory filings or breaches operational rules, tax authorities are empowered to cancel the registration.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Facing GST cancellation is an acute crisis, but it is not irreversible. Under <strong className="font-semibold text-slate-950">Section 30 of the CGST Act</strong>, taxpayers are granted the statutory right to apply for revocation of cancellation. This guide provides an in-depth breakdown of why cancellations occur, how business operations are impacted in the short and long term, and the exact roadmap to reinstate your GST registration swiftly.
          </p>
        </section>

        {/* Section 1: Involuntary Cancellation Grounds */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory Grounds for Involuntary GST Cancellation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Cancellation of GST registration is executed under Section 29(2) by the proper officer. Understanding the underlying triggers helps taxpayers formulate a watertight revocation rebuttal:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Return Non-Filing Defaults</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The most frequent trigger: failure to file monthly returns (GSTR-3B/GSTR-1) consecutively, or failure by composition dealers to file quarterly CMP-08 statements for three consecutive tax quarters.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors">
                <BarChart3 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated Return Discrepancies</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated system scrutiny under Rule 88C (liability declared in GSTR-1 exceeding GSTR-3B) or Rule 88D (ITC claimed in GSTR-3B exceeding GSTR-2B) without furnishing valid justification in DRC-01B/DRC-01C.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-purple-600 transition-colors">
                <Building2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Failed Physical Verification</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under Rule 25, if tax officers conduct physical premises verification and find the taxpayer non-existent or not operating from the registered principal address, cancellation is initiated immediately.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                <span>Misuse of Registration &amp; Fake Invoicing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Availing fraudulent ITC or issuing tax invoices without actual movement of goods/services (bogus billing) leads to immediate retrospective cancellation and criminal proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Impact of Cancellation: Short vs Long Term */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Short-Term vs Long-Term Business Repercussions</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            GST cancellation impacts an enterprise across multiple time horizons, making speedy revocation an existential necessity:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-3xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3.5 sm:p-4">Operational Dimension</th>
                  <th className="p-3.5 sm:p-4">Short-Term Impact (Days 1–30)</th>
                  <th className="p-3.5 sm:p-4">Long-Term Impact (Months 2+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Invoicing &amp; Supply</td>
                  <td className="p-3.5 sm:p-4">Immediate halt on issuing tax invoices and charging GST legally.</td>
                  <td className="p-3.5 sm:p-4">Loss of core B2B customer accounts and cancellation of supply contracts.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Logistics &amp; Transport</td>
                  <td className="p-3.5 sm:p-4">E-way bill generation portal completely disabled for goods movement.</td>
                  <td className="p-3.5 sm:p-4">Seizure and confiscation of consignments under Section 129 &amp; 130.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Banking &amp; Credit</td>
                  <td className="p-3.5 sm:p-4">Inability to deposit customer GST cheques; automated bank compliance alerts.</td>
                  <td className="p-3.5 sm:p-4">Downgrading of corporate credit rating; freezing of working capital overdrafts.</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Tenders &amp; Empanelment</td>
                  <td className="p-3.5 sm:p-4">Rejection of pending bids due to inactive GSTIN status on portal.</td>
                  <td className="p-3.5 sm:p-4">Long-term debarment from government procurement portals (GeM) and PSU tenders.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: The Three-Phase Regulatory Lifecycle */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The Regulatory Lifecycle of Cancellation and Revocation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The legal lifecycle flows through three structured statutory phases:
          </p>

          <div className="space-y-3.5 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-1 group-hover:text-indigo-600 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <span>Phase 1: Notice Issuance &amp; Order Passing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                The officer issues Form GST REG-17 (Show Cause Notice for Cancellation), granting 7 working days to reply. If the taxpayer does not respond or the reply is found unacceptable, the officer issues a final cancellation order in Form GST REG-19.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-1 group-hover:text-indigo-600 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <span>Phase 2: Rectification &amp; Form GST REG-21 Application</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                The taxpayer files all pending returns up to cancellation date, pays taxes with interest, and files Form GST REG-21 within the statutory 90-day limitation window (extendable up to 180 or 270 days with condonation).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-1 group-hover:text-indigo-600 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <span>Phase 3: Adjudication &amp; Restoration Order (REG-22)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Within 30 days of REG-21, the officer issues either Form GST REG-22 (Restoration Order) restoring active status, or Form GST REG-23 notice (giving 7 working days to file Form GST REG-24 rejoinder).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Actionable Steps to Address Revocation */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Actionable Strategy to Address and Reverse Revocation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            To maximize the speed of restoration and avoid administrative rejection, follow this strategic roadmap:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold">1. Conduct Total Compliance Audit</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tally all defaulting months, compute accurate tax liability, calculate Section 50 interest at 18%, and identify late fee caps available under relevant GST amnesty schemes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                <Scale className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="text-xs font-bold">2. Engage Professional Counsel</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work with experienced Indirect Tax Advocates or Chartered Accountants to draft strong factual rebuttals and legal condonation petitions that officers cannot easily dismiss.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold">3. Proactive ARN Monitoring</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track your 15-digit ARN daily on the portal. If Form GST REG-23 is received, submit Form GST REG-24 within 7 working days to prevent automatic rejection.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Prevention Best Practices */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Preventative Best Practices: Safeguarding Your GSTIN Against Future Cancellation</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Prevention is far more economical and stress-free than curing cancellation. Adopt these corporate compliance habits:
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 my-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Automate Monthly Filing Calendars:</strong> Never allow more than 1 month of GSTR-1 or GSTR-3B filings to lapse, even if turnover is nil.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Prompt Mismatch Reconciliation:</strong> Conduct monthly 2B vs 3B reconciliations and respond immediately to DRC-01B/DRC-01C portal alerts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Maintain Physical Signage &amp; Address Proofs:</strong> Ensure principal and additional business premises display GSTIN boards, rental agreements, and electricity bills as required by Rule 25.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="font-semibold text-slate-900">Periodic Retainer Compliance Reviews:</strong> Retain professional tax advisors like Merrafilings to oversee return filings and maintain continuous good standing with tax jurisdictions.</span>
            </li>
          </ul>
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
                Reinstate Your GST Registration with Total Peace of Mind
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Let Merrafilings handle your complete GST Revocation dossier: tax reconciliation, REG-21 portal filing, notice replies, and follow-ups until your GSTIN is active again.
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
