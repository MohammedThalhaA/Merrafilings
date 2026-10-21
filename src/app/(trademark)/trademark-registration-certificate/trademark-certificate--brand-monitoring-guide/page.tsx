"use client";

import React from "react";
import Link from "next/link";
import TrademarkCertificateGuideLayout from "@/components/TrademarkCertificateGuideLayout";
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
  Globe2,
  AlertTriangle,
  Layers,
  BookOpen,
  Briefcase,
  FileCheck2,
  Gavel,
} from "lucide-react";

export default function TrademarkCertificateBrandMonitoringGuideLegalEvidencePage() {
  return (
    <TrademarkCertificateGuideLayout
      currentSlug="trademark-certificate--brand-monitoring-guide"
      title="Trademark Certificate Brand Monitoring Guide: Legal Rights & Evidence Maintenance"
      breadcrumbLabel="Brand Monitoring Legal Guide"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Possessing a <strong className="font-semibold text-slate-950">Trademark Registration Certificate</strong> empowers brand owners with potent statutory rights under Section 28 of the <strong className="font-semibold text-slate-950">Trade Marks Act, 1999</strong>. However, enforcing these rights before Indian commercial courts requires meticulous record-keeping, timely evidence collection, and active brand monitoring.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide focuses on the legal evidentiary standards required to sustain trademark infringement actions, the statutory powers conferred by your certificate, and how continuous brand monitoring creates an unassailable legal defense against counterfeiters and deceptive copycats.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Powers &amp; Evidentiary Baseline</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Exclusive Rights</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Section 28(1), Trade Marks Act</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Civil Court Remedies</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Injunctions, Damages &amp; Seizure (Sec 135)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Registration Validity</span>
            <strong className="font-semibold text-slate-950 text-[13px]">10 Years Renewable (Sec 25)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Statutory Legal Rights Under Section 28 & 29 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Legal Rights Conferred by the Trademark Registration Certificate
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Indian jurisprudence, an official registration certificate transforms your brand from an unregistered common-law mark into an absolute statutory property with specific legal privileges:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Exclusive Use Across India (Section 28)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Grants the registered proprietor the exclusive legal monopoly to use the mark in relation to the goods or services for which it is registered throughout all Indian territories.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Gavel className="w-4 h-4" />
              <span>Right to Sue for Infringement (Section 29)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Unlike unregistered mark owners who must prove extensive commercial goodwill in tedious passing-off actions, a certificate holder only needs to demonstrate likelihood of confusion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Scale className="w-4 h-4" />
              <span>Conclusive Prima Facie Validity (Section 31)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              The original registration certificate or a certified copy from the Registrar is admissible in all Indian courts as prima facie proof of the validity of the mark.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <Award className="w-4 h-4" />
              <span>Right to Affix the ® Symbol (Section 107)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Only upon receipt of the official Form RG-2 certificate may a business legally affix the registered ® emblem. Using the ® mark prior to certificate grant constitutes an offense under Section 107.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Building an Admissible Evidence Portfolio */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Building an Admissible Evidence Portfolio for Infringement Suits
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          In IP litigation before District Commercial Courts and High Courts, evidence gathered during monitoring must comply with the Indian Evidence Act, 1872 and the Bharatiya Sakshya Adhiniyam, 2023. Key evidence protocols include:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">1. Digital Electronic Evidence Certification (Section 65B)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Screenshots of competitor websites, social ads, and marketplace listings must be accompanied by an affidavit under Section 65B of the Indian Evidence Act certifying the computer device, timestamp, and IP address.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">2. Trap Invoices &amp; Physical Evidence Logs</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Conducting test purchases creates concrete commercial proof of sale within the court&apos;s territorial jurisdiction. Retain physical packaging, courier waybills, and payment invoices intact in an evidence locker.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">3. Proof of Uninterrupted Use (User Affidavits)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Consistently maintain annual turnover figures, advertising expenditure receipts, GST invoices, and trade exhibition brochures to defend against non-use cancellation petitions under Section 47.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Certificate Maintenance & Renewal Tracking */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Certificate Maintenance &amp; 10-Year Renewal Lifecycle
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A trademark registration certificate remains valid for <strong className="font-semibold text-slate-950">10 years</strong> from the application filing date under Section 25. Regular monitoring must incorporate renewal tracking to avoid unintended abandonment:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Renewal Window</th>
                <th className="py-3 px-4">Prescribed Form</th>
                <th className="py-3 px-4">Statutory Fee (E-filing)</th>
                <th className="py-3 px-4">Status &amp; Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Standard Renewal Window</td>
                <td className="py-3.5 px-4">Form TM-R (6 Months before expiry)</td>
                <td className="py-3.5 px-4">₹9,000 per mark/class</td>
                <td className="py-3.5 px-4 text-emerald-800 font-medium">Safe &amp; Uninterrupted Protection</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-amber-700">Grace Period (With Surcharge)</td>
                <td className="py-3.5 px-4">Form TM-R (Up to 6 Months after expiry)</td>
                <td className="py-3.5 px-4">₹9,000 + ₹4,500 Late Surcharge</td>
                <td className="py-3.5 px-4 text-amber-800 font-medium">Mark enters &quot;Renewed on Surcharge&quot; status</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-rose-700">Restoration Window</td>
                <td className="py-3.5 px-4">Form TM-R (6 Months to 1 Year post-expiry)</td>
                <td className="py-3.5 px-4">₹9,000 + ₹9,000 Restoration Fee</td>
                <td className="py-3.5 px-4 text-rose-800 font-medium">Mark Removed from Register; Discretionary Grant</td>
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
            <h3 className="text-sm font-semibold text-slate-950">What happens if a competitor challenges my registration for non-use?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Under Section 47 of the Trade Marks Act, a third party can apply to remove your mark from the Register if it has not been bona fide used for a continuous period of 5 years and 3 months. Maintaining commercial usage evidence through sales invoices and monitoring records protects you from cancellation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Can I correct a typo in my trademark registration certificate?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Yes. Minor clerical or typographical errors in proprietor name or address can be corrected by filing Form TM-M (Request for Clerical Error Correction) with the Trade Marks Registry along with supporting legal documentation.
            </p>
          </div>
        </div>
      </section>
    </TrademarkCertificateGuideLayout>
  );
}
