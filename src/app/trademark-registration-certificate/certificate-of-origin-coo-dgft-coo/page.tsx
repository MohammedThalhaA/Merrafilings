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
  Ship,
  Plane,
  BadgeCheck,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export default function CertificateOfOriginDGFTGuidePage() {
  return (
    <TrademarkCertificateGuideLayout
      currentSlug="certificate-of-origin-coo-dgft-coo"
      title="Certificate of Origin (CoO) – DGFT CoO: Comprehensive Guide"
      breadcrumbLabel="Certificate of Origin (CoO)"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In international trade and export compliance, a <strong className="font-semibold text-slate-950">Certificate of Origin (CoO)</strong> is an indispensable statutory commercial document certifying that goods in a specific export shipment were wholly obtained, produced, or manufactured in a particular country. For Indian exporters, the <strong className="font-semibold text-slate-950">Directorate General of Foreign Trade (DGFT)</strong> operates a centralized digital platform to streamline the electronic issuance of both Preferential and Non-Preferential Certificates of Origin.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Whether you are exporting goods under India&apos;s bilateral Free Trade Agreements (such as SAFTA, India-UAE CEPA, or ASEAN-India FTA) to claim concessional customs tariffs or fulfilling standard customs clearance mandates, this comprehensive guide outlines the regulatory requirements, platform procedures, and document checklists.
        </p>
      </div>

      {/* Highlights Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>DGFT CoO Snapshot</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Issuing Authority</span>
            <strong className="font-semibold text-slate-950 text-[13px]">DGFT &amp; Nominated Agencies</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Primary Digital Portal</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">coo.dgft.gov.in (Common Digital Platform)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Key Commercial Benefit</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Tariff Exemption &amp; Concessional Duties</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Preferential vs Non-Preferential CoO */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Types of Certificate of Origin: Preferential vs Non-Preferential
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Directorate General of Foreign Trade categorizes export certificates into two statutory streams:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Card 1 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <BadgeCheck className="w-4.5 h-4.5" />
              <span>1. Preferential Certificate of Origin</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Issued for shipments destined to countries with which India has signed Free Trade Agreements (FTAs), Preferential Trade Agreements (PTAs), or Comprehensive Economic Cooperation Agreements (CECAs).
            </p>
            <div className="pt-2 text-xs text-slate-900 font-medium">
              <strong className="text-emerald-700">Commercial Advantage:</strong> Entitles the overseas buyer to reduced or zero customs duty rates at foreign ports of entry.
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Globe2 className="w-4.5 h-4.5" />
              <span>2. Non-Preferential Certificate of Origin (NP CoO)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Certifies the nationality of the goods without conferring special tariff preferences. Required by foreign customs to enforce trade embargoes, quotas, anti-dumping regulations, and import origin audits.
            </p>
            <div className="pt-2 text-xs text-slate-900 font-medium">
              <strong className="text-purple-700">Commercial Advantage:</strong> Mandatory proof for standard customs clearance and letter of credit (LC) bank release.
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Major Trade Agreements Covered */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Major Trade Agreements Administered via the DGFT e-Platform
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The DGFT electronic platform facilitates automated certificate generation across prominent multilateral and bilateral agreements:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Trade Agreement</th>
                <th className="py-3 px-4">Key Partner Nations</th>
                <th className="py-3 px-4">Duty Benefit Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">India–UAE CEPA</td>
                <td className="py-3.5 px-4">United Arab Emirates (UAE)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Zero-duty access on 90%+ Indian product lines</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">AIFTA (ASEAN–India FTA)</td>
                <td className="py-3.5 px-4">Singapore, Malaysia, Vietnam, Indonesia, Thailand, etc.</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Substantial tariff elimination across industrial goods</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">SAFTA &amp; SAPTA</td>
                <td className="py-3.5 px-4">Sri Lanka, Bangladesh, Nepal, Bhutan, Maldives</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Regional South Asian tariff preferences</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">India–Japan CEPA (IJCEPA)</td>
                <td className="py-3.5 px-4">Japan</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Duty concessions on pharmaceuticals, seafood, engineering</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">India–Australia ECTA</td>
                <td className="py-3.5 px-4">Australia</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Preferential market access on textiles, leather, gems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Documents Required for DGFT CoO Application
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Exporters must prepare the following documentation before applying online:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-800 font-normal pt-1">
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Active Importer Exporter Code (IEC):</strong> Validated and linked on the DGFT portal.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Class 3 Digital Signature Certificate (DSC):</strong> Required for secure cryptographic login and application signing.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Commercial Export Invoice &amp; Packing List:</strong> Showing exact HS codes, item description, quantity, and FOB value.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Shipping Bill / Airway Bill / Bill of Lading:</strong> Documenting the carrier transport details and export shipment date.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="font-semibold text-slate-950">Manufacturer Purchase Invoice or Cost Statement:</strong> Required to establish local value addition criteria (Rules of Origin compliance).</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Application Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Online Procedure on DGFT e-Platform (coo.dgft.gov.in)
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 1: One-Time Exporter Registration</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Visit coo.dgft.gov.in. Insert your Class 3 DSC and register using your 10-digit IEC number. Validate director and registered office details.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 2: Select Issuing Agency &amp; Trade Agreement</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Choose the applicable Free Trade Agreement and the nearest designated issuing authority (e.g. Export Inspection Council, Spices Board, EEPC, or local Chamber of Commerce).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 3: Upload Invoices &amp; Pay Fees</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Enter shipping bill details, HS classification codes, local origin criteria percentage, and pay the nominal statutory processing fees online.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 4: Electronic Verification &amp; QR-Coded Issuance</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The designated agency reviews the submission online. Upon approval, a digitally signed Certificate of Origin with a secure verification QR code is generated for immediate download and electronic dispatch to foreign customs.
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
            <h3 className="text-sm font-semibold text-slate-950">Can a Certificate of Origin be issued after the shipment has departed?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Yes. Most trade agreements allow for retrospective issuance of Certificates of Origin marked &quot;ISSUED RETROSPECTIVELY&quot; within prescribed timelines (usually up to 6 months to 1 year from the bill of lading date) subject to documentary justification.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Is a Certificate of Origin required for all export shipments?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              A Preferential CoO is only required if the destination country offers tariff concessions under an FTA and the buyer requests it. Non-Preferential CoOs are required if mandated by the destination country&apos;s customs authorities or specified under the export Letter of Credit terms.
            </p>
          </div>
        </div>
      </section>
    </TrademarkCertificateGuideLayout>
  );
}
