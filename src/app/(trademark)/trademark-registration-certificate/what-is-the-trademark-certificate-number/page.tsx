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
  Hash,
  Globe2,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export default function WhatIsTrademarkCertificateNumberPage() {
  return (
    <TrademarkCertificateGuideLayout
      currentSlug="what-is-the-trademark-certificate-number"
      title="What is the Trademark Certificate Number? Meaning, Purpose & Significance"
      breadcrumbLabel="Trademark Certificate Number"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In Indian trademark administration, brand owners frequently encounter two distinct identification numbers: the <strong className="font-semibold text-slate-950">Trademark Application Number</strong> and the <strong className="font-semibold text-slate-950">Trademark Certificate Number</strong>. While both identifiers pertain to the exact same brand asset, they serve completely different legal and procedural purposes across the trademark lifecycle.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Understanding the significance of your Trademark Certificate Number is crucial when dealing with litigation in commercial courts, customs border enforcement, e-commerce brand registries (such as Amazon and Flipkart), and international filings under the Madrid Protocol.
        </p>
      </div>

      {/* Highlights Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Identification Number Comparison</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Application Number</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Allocated at Filing (Tracking ID)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Certificate Number</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Allocated at Registration (Proof of Title)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Certificate Position</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Top-Right Corner of Form RG-2</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is the Certificate Number */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Trademark Certificate Number?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A Trademark Certificate Number is an exclusive, permanent sequential numeral allocated by the Trade Marks Registry at the exact moment a trademark is entered into the official <strong className="font-semibold text-slate-950">Register of Trade Marks</strong> under Section 23(2) of the Trade Marks Act, 1999.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          While millions of applications are filed every year (each receiving an Application Number), only applications that successfully navigate the entire examination, opposition, and verification cycle receive a Certificate Number. Thus, a Certificate Number is conclusive proof that the mark is no longer merely pending—it has attained registered status.
        </p>
      </section>

      {/* Section 2: Application Number vs Certificate Number Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Trademark Application Number vs Certificate Number
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The following table summarizes the structural and statutory distinctions between both numbers:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Trademark Application Number</th>
                <th className="py-3 px-4">Trademark Certificate Number</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Allocation Point</td>
                <td className="py-3.5 px-4">Immediately upon filing Form TM-A</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Only upon registration certificate grant</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Legal Meaning</td>
                <td className="py-3.5 px-4">Application is under review / provisional</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">Statutory deed of registered ownership</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Usage in Status Search</td>
                <td className="py-3.5 px-4">Primary key to track progress on IP India</td>
                <td className="py-3.5 px-4">Secondary key listed in e-Register records</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Permitted Symbol</td>
                <td className="py-3.5 px-4">™ (Claim of trademark use)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">&reg; (Registered trademark)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Can It Expire or Be Refused?</td>
                <td className="py-3.5 px-4">Yes (if abandoned, opposed, or refused)</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">Permanent deed; renewed every 10 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Where to Find It on Form RG-2 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Where to Locate Your Trademark Certificate Number
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          On an official Form RG-2 certificate:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-800 font-normal pt-1">
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Top-Right Header:</strong> Labeled explicitly as <strong className="font-medium text-slate-950">&quot;Certificate No. / प्रमाण पत्र संख्या&quot;</strong>, positioned immediately adjacent to the Ashoka Lion emblem.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">IP India e-Register:</strong> Listed on the public search screen in the row labeled <strong className="font-medium text-slate-950">&quot;Certificate No.&quot;</strong> alongside the registration order date.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Key Strategic Uses */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. When is the Trademark Certificate Number Required?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-indigo-950">1. Commercial Court Infringement Lawsuits</strong>
            <p className="text-slate-800 leading-relaxed font-normal">
              Essential for pleading statutory infringement under Section 29, eliminating the need to prove common-law passing off.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-purple-950">2. Customs IPR Border Protection</strong>
            <p className="text-slate-800 leading-relaxed font-normal">
              Required by Indian Customs under the Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007 to seize infringing import shipments at ports.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-emerald-950">3. Global Madrid Protocol Extensions</strong>
            <p className="text-slate-800 leading-relaxed font-normal">
              Used as the base registration number when extending brand protection internationally across 130+ WIPO member nations.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-rose-950">4. Amazon Brand Registry &amp; Anti-Counterfeit</strong>
            <p className="text-slate-800 leading-relaxed font-normal">
              Mandatory credential to unlock automated brand gating, buy-box protection, and Project Zero capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Can the Certificate Number be different from the Application Number?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Yes. In India, the Certificate Number is an independent sequential registration number assigned upon grant, whereas the Application Number is the initial filing serial number.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Does my Certificate Number change when I renew after 10 years?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              No. Your Certificate Number and Application Number remain permanent for the lifetime of the brand. When you file Form TM-R for renewal, the Registry issues a Renewal Certificate validating the existing registration for another 10 years.
            </p>
          </div>
        </div>
      </section>
    </TrademarkCertificateGuideLayout>
  );
}
