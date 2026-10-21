"use client";

import React from "react";
import Link from "next/link";
import CopyrightGuideLayout from "@/components/CopyrightGuideLayout";
import {
  Scale,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Award,
  Layers,
  BookOpen,
  DollarSign,
  Briefcase,
  FileCheck,
  CheckSquare,
} from "lucide-react";

export default function CopyrightsRegistrationRequiredDocumentsPage() {
  return (
    <CopyrightGuideLayout
      currentSlug="copyrights-registration-required-documents-guide"
      title="Copyrights Registration Required Documents: A Comprehensive Guide"
      breadcrumbLabel="Required Documents Guide"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Filing for copyright protection in India is a meticulous administrative procedure governed by the <strong className="font-semibold text-slate-950">Copyright Rules, 2013</strong>. More than 45% of copyright applications experience procedural examination discrepancies or prolonged delays simply due to missing No-Objection Certificates (NOCs), incomplete Statement of Particulars, or improper work deposit formats.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Whether you are an independent creator or a corporate enterprise protecting proprietary software, assembling an ironclad documentation package is the single most critical factor for swift approval. This comprehensive guide details the exact statutory documents required for every copyright category in India.
        </p>
      </div>

      {/* Section 1: The Core Document Package */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Essential Statutory Documentation Package
        </h2>
        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>1. Completed Statutory Form XIV</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
              The formal application prescribed under the Copyright Rules, 2013. Must contain legal particulars of the applicant, correspondence address, whether applicant is author or assignee, and signature of the applicant or authorized advocate.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>2. Statement of Particulars (SoP) &amp; Further Particulars (SoFP)</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
              Defines the nature of the work, title, language, author nationality, whether published or unpublished, date of first publication, and names and addresses of all owners of various rights comprising the copyright.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>3. Statutory Work Deposit Copies</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
              Two identical, unaltered deposit copies of the work. For literary or artistic works, high-resolution printed or digital PDF copies; for software, the first 10 and last 10 pages of unredacted source code; for sound/cinematograph works, master digital media files.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>4. Identity &amp; Corporate Incorporation Proofs</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
              For individuals: Aadhaar Card, Passport, or PAN card. For companies/LLPs: Certificate of Incorporation (CoI), Board Resolution authorizing the signatory, and authorized signatory PAN/Aadhaar.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Special Documentation Scenarios Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Mandatory Documentation for Special Categories
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Depending on the creation relationship and type of work, specific supplementary legal exhibits must be attached:
        </p>

        {/* Table: Special Cases */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Special Scenario</th>
                <th className="py-3 px-4">Required Legal Exhibit</th>
                <th className="py-3 px-4">Legal Consequence if Omitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Work Created by Employee / Freelancer</td>
                <td className="py-3 px-4 font-normal text-slate-900">Signed Work-for-Hire Assignment Deed or Employment IP agreement</td>
                <td className="py-3 px-4 font-medium text-rose-800">Application stalled; copyright remains with the individual developer/designer</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Artistic Work Used on Commercial Goods</td>
                <td className="py-3 px-4 font-normal text-slate-900">Search Certificate (Form TM-C) from Trade Marks Registry (Section 45)</td>
                <td className="py-3 px-4 font-medium text-rose-800">Mandatory statutory rejection under Rule 70(1)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Published Work with Third-Party Publisher</td>
                <td className="py-3 px-4 font-normal text-slate-900">No-Objection Certificate (NOC) from the publishing house</td>
                <td className="py-3 px-4 font-medium text-rose-800">Third-party discrepancy objection notice issued by Examiner</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Joint Authorship / Collaborative Work</td>
                <td className="py-3 px-4 font-normal text-slate-900">Co-authorship declaration &amp; mutual consent affidavits from all creators</td>
                <td className="py-3 px-4 font-medium text-rose-800">Application held in abeyance pending dispute resolution</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Derivative Work / Translation</td>
                <td className="py-3 px-4 font-normal text-slate-900">License agreement or written authorization from original copyright holder</td>
                <td className="py-3 px-4 font-medium text-rose-800">Infringement objection raised; registration denied</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Common Pitfalls Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Common Documentation Errors to Avoid
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950 block mb-1">Typographical Discrepancies:</strong>
            <p className="text-slate-800 font-normal leading-relaxed">
              Ensure applicant and author names match the uploaded government identity proof letter-for-letter. Any spelling variance triggers an official discrepancy notice.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950 block mb-1">Incomplete Source Code Submission:</strong>
            <p className="text-slate-800 font-normal leading-relaxed">
              Submitting entire software repositories is rejected. The Copyright Office mandates strictly the first 10 and last 10 pages of unredacted source code in clear PDF format.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950 block mb-1">Unnotarized Assignment Deeds:</strong>
            <p className="text-slate-800 font-normal leading-relaxed">
              IP assignment agreements executed on plain paper without adequate non-judicial stamp paper and notary attestation are deemed legally defective by the Registrar.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <strong className="font-semibold text-slate-950 block mb-1">Unresponsive to 30-Day Discrepancies:</strong>
            <p className="text-slate-800 font-normal leading-relaxed">
              If an Examiner raises a document query, you must file your compliance response within 30 days. Ignoring notices leads to irreversible abandonment.
            </p>
          </div>
        </div>
      </section>
    </CopyrightGuideLayout>
  );
}
