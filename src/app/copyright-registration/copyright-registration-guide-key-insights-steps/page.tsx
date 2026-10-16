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
  Code,
  Globe2,
  TrendingUp,
} from "lucide-react";

export default function CopyrightRegistrationGuideKeyInsightsPage() {
  return (
    <CopyrightGuideLayout
      currentSlug="copyright-registration-guide-key-insights-steps"
      title="Copyright Registration Guide: Essential Insights & Key Steps"
      breadcrumbLabel="Essential Insights & Steps"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Overview Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In our hyper-connected digital economy, creative assets can be cloned, scraped, and pirated with a single click. Whether you are an author writing a book, a SaaS founder architecting proprietary software, or a multimedia studio producing commercial video content, securing statutory <strong className="font-semibold text-slate-950">Copyright Registration</strong> is the cornerstone of intellectual property defense.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed under the <strong className="font-semibold text-slate-950">Copyright Act, 1957</strong>, registration transforms your creative labor into a legally recognized, monetizable, and defendable corporate asset. This guide provides vital strategic insights and a step-by-step roadmap to navigate the Indian copyright lifecycle seamlessly.
        </p>
      </div>

      {/* Section 1: The Core Value Proposition */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Copyright Protection: Ideas vs Expression
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A foundational tenet of copyright jurisprudence is that <strong className="font-semibold text-slate-950">copyright does not protect ideas, concepts, or raw data</strong>; it protects only the original, tangible <strong className="font-semibold text-slate-950">expression</strong> of those ideas. For example, two novelists may write stories about intergalactic space travel, but neither can claim monopoly over the broad plot concept. However, the unique sentence structures, character names, dialogues, and literary expressions in their books are strictly protected under copyright law.
        </p>
        <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
          <strong className="font-semibold text-purple-950">The Fixation Requirement:</strong> To qualify for statutory copyright in India, the work must be fixed in a tangible medium of expression—such as written manuscripts, audio master recordings, digital video files, or software source code committed to a storage drive.
        </div>
      </section>

      {/* Section 2: 5 Essential Steps Table & Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 5 Essential Steps to Register Copyright Online in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The registration workflow is executed electronically through the official portal of the Registrar of Copyrights:
        </p>

        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Prepare the Tangible Work &amp; Ownership Declarations</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Ensure the work is complete. For literary works, compile 2 physical/digital copies; for software, prepare the first 10 and last 10 pages of unredacted source code; for commercial logos, secure Form TM-C from the Trade Marks Registry.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Access the Electronic Copyright Office (e-Filing Gateway)</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Create an authenticated user account with mobile OTP and email verification, linking appropriate applicant identity credentials.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Fill Form XIV &amp; Statement of Particulars (SoP)</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Enter precise metadata: author nationality, whether published or unpublished, date of first publication, language, and details of any co-authors or employers.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Remit Statutory Government Fees &amp; Receive Diary Number</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Pay the prescribed fee via Bharatkosh payment gateway. The portal instantly generates a formal Diary Number timestamp for real-time surveillance.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">5</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Mandatory 30-Day Objection Period &amp; Registration Grant</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The application undergoes a 30-day statutory waiting period. Following examiner approval and resolution of discrepancies, the official Certificate of Registration is issued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Summary Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Work Categories, Fixation Formats &amp; Statutory Durations
        </h2>

        {/* Table: Summary */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Category of Work</th>
                <th className="py-3 px-4">Fixation Deposit Format</th>
                <th className="py-3 px-4">Statutory Duration of Protection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Literary &amp; Dramatic</td>
                <td className="py-3 px-4 font-normal text-slate-900">2 printed / PDF copies of book or script</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Author Lifetime + 60 Years</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Software Source Code</td>
                <td className="py-3 px-4 font-normal text-slate-900">First 10 &amp; last 10 pages in PDF format</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Author Lifetime + 60 Years (or 60 years for corporate)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Musical Compositions</td>
                <td className="py-3 px-4 font-normal text-slate-900">Sheet music notation or audio recording</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Author Lifetime + 60 Years</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Cinematograph Films</td>
                <td className="py-3 px-4 font-normal text-slate-900">Master video copy &amp; complete script</td>
                <td className="py-3 px-4 font-semibold text-blue-900">60 Years from Publication Date</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Commercial Sound Recordings</td>
                <td className="py-3 px-4 font-normal text-slate-900">High-fidelity WAV / MP3 master file</td>
                <td className="py-3 px-4 font-semibold text-blue-900">60 Years from Publication Date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Common Pitfalls & Practical Tips */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Common Pitfalls to Avoid During Copyright Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1">
            <h4 className="font-semibold text-rose-950 group-hover:text-rose-700 transition-colors flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Missing No-Objection Certificates (NOCs)</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              If multiple contributors (illustrators, hired software developers, editors) worked on your project, you must append signed assignment deeds or NOCs establishing ownership transfer.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1">
            <h4 className="font-semibold text-rose-950 group-hover:text-rose-700 transition-colors flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Failing to Respond to Discrepancies</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              If the Examiner issues a discrepancy letter, you have exactly 30 days to file a formal reply. Unanswered discrepancies lead to automatic application abandonment.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1">
            <h4 className="font-semibold text-rose-950 group-hover:text-rose-700 transition-colors flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Confusing Trademark with Copyright</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Short brand names or slogans cannot be copyrighted. Applying for a copyright on a two-word business brand will result in immediate rejection by the Examiner.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1">
            <h4 className="font-semibold text-rose-950 group-hover:text-rose-700 transition-colors flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Artistic Works Without Form TM-C</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              If an artistic work or logo can be applied to commercial goods, Section 45 requires obtaining a Search Certificate (Form TM-C) from the Trade Marks Registry before filing.
            </p>
          </div>
        </div>
      </section>
    </CopyrightGuideLayout>
  );
}
