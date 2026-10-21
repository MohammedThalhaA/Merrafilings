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
  Layers,
  BookOpen,
  FileBadge,
  Check,
} from "lucide-react";

export default function TMRegistrationCertificateCompleteGuidePage() {
  return (
    <TrademarkCertificateGuideLayout
      currentSlug="tm-registration-certificate"
      title="Trademark Registration Certificate: Complete Legal & Procedural Guide"
      breadcrumbLabel="TM Registration Certificate"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          A <strong className="font-semibold text-slate-950">Trademark Registration Certificate</strong> is the official statutory deed issued by the <strong className="font-semibold text-slate-950">Trade Marks Registry, Government of India</strong> under Rule 54 of the Trade Marks Rules, 2017. Known statutorily as <strong className="font-semibold text-slate-950">Form RG-2</strong>, it confirms that your trademark has successfully cleared every procedural, legal, and public scrutiny milestone and is entered into the Register of Trade Marks.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide explores what a trademark certificate contains, when and how it is issued, the crucial differences between an application receipt and a final certificate, and the vital steps a brand owner must take once the document is in hand.
        </p>
      </div>

      {/* Highlights Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Certificate Factsheet</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Official Statutory Form</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Form RG-2 (Section 23(2))</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Issuing Authority</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Registrar of Trade Marks, India</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Legal Symbol Unlocked</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Registered Symbol &reg;</strong>
          </div>
        </div>
      </div>

      {/* Section 1: When is the Certificate Issued? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Procedural Roadmap to Certificate Issuance
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A trademark registration certificate is never issued automatically upon application submission. An application must traverse a rigorous five-stage regulatory lifecycle:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-[#155EEF] font-semibold text-sm">
              <FileBadge className="w-4 h-4" />
              <span>Stage 1: Formality Check &amp; Examination</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The Registry validates filing particulars and an Examiner assesses distinctiveness under Section 9 (Absolute Grounds) and conflicts under Section 11 (Relative Grounds).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Stage 2: Trade Marks Journal Publication</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Once accepted, the mark is published in the official weekly Trade Marks Journal, initiating a strict 4-month public opposition period under Section 21.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Stage 3: Opposition Clearance &amp; Order</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              If no notice of opposition is filed within the 4-month window (or if an opposition is adjudicated in the applicant&apos;s favor), the Registry issues an internal registration order.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Stage 4: Entry into Register &amp; Form RG-2 Generation</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The mark is assigned a permanent Certificate Number, entered into the official Register of Trade Marks, and digitally signed by the Registrar for electronic download.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Application Receipt vs Registration Certificate */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Trademark Application Receipt vs Registration Certificate
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Entrepreneurs frequently confuse the initial filing acknowledgment with a certificate of registration. They are fundamentally different legal instruments:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Application Receipt (Form TM-A Acknowledgment)</th>
                <th className="py-3 px-4">Registration Certificate (Form RG-2)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Issuance Time</td>
                <td className="py-3.5 px-4">Issued instantly upon payment and filing</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Issued 6–18 months later after full legal approval</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Legal Status</td>
                <td className="py-3.5 px-4">Indicates pending application only; subject to objection/refusal</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">Conclusive statutory deed of ownership across India</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Symbol Permitted</td>
                <td className="py-3.5 px-4">™ (Unregistered Trademark symbol)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">&reg; (Registered Trademark symbol)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Court Admissibility</td>
                <td className="py-3.5 px-4">Does not establish statutory infringement rights</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">Prima facie proof of validity under Section 31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Essential Components of Form RG-2 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Essential Data Fields Encapsulated in Form RG-2
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Every authentic Government of India Trademark Certificate displays eight critical statutory particulars:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">1. National Emblem &amp; Watermark:</strong>
            <p className="text-slate-800 mt-0.5">The Lion Capital of Ashoka with the official seal of the Trade Marks Registry.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">2. Certificate Number:</strong>
            <p className="text-slate-800 mt-0.5">A unique sequential number assigned upon formal entry into the Register of Trade Marks.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">3. Application Number:</strong>
            <p className="text-slate-800 mt-0.5">The original tracking ID allocated upon filing Form TM-A.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">4. Class &amp; Nice Classification:</strong>
            <p className="text-slate-800 mt-0.5">The exact classes (1–45) detailing the goods and commercial services covered.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">5. Proprietor Name &amp; Address:</strong>
            <p className="text-slate-800 mt-0.5">The legal identity and registered office address of the brand owner.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">6. User Claim Date:</strong>
            <p className="text-slate-800 mt-0.5">Prior commercial user date or &quot;Proposed to be used&quot; designation.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">7. Representation of the Mark:</strong>
            <p className="text-slate-800 mt-0.5">Visual depiction of the exact wordmark, device, logo, or color combination protected.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950">8. Digital Signature of Registrar:</strong>
            <p className="text-slate-800 mt-0.5">Digital cryptographic authentication by the Registrar of Trade Marks.</p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Does the Government send a physical hard-copy trademark certificate by postal mail?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              No. In accordance with digital e-governance reforms under the Trade Marks Rules 2017, the Trade Marks Registry issues digitally signed electronic certificates downloadable from the IP India web portal. Physical copies are no longer dispatched by post.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">How long is the Trademark Registration Certificate valid?</h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Under Section 25 of the Trade Marks Act 1999, the certificate is valid for 10 years computed from the original application filing date. It can be renewed indefinitely every 10 years by filing Form TM-R.
            </p>
          </div>
        </div>
      </section>
    </TrademarkCertificateGuideLayout>
  );
}
