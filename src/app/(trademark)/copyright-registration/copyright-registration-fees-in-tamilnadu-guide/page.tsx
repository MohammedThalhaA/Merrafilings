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
  Music,
  Code,
  Film,
  Palette,
} from "lucide-react";

export default function CopyrightRegistrationFeesTamilnaduPage() {
  return (
    <CopyrightGuideLayout
      currentSlug="copyright-registration-fees-in-tamilnadu-guide"
      title="Understanding Copyright Registration Fees in Tamilnadu: A Comprehensive Legal Guide"
      breadcrumbLabel="Copyright Fees in Tamilnadu"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In Tamil Nadu—renowned as a thriving epicenter for Tamil literature, the Kollywood entertainment industry, Carnatic musical traditions, and SaaS software engineering in Chennai and Coimbatore—protecting intellectual creativity through statutory <strong className="font-semibold text-slate-950">Copyright Registration</strong> is a fundamental commercial necessity.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed under the unified federal framework of the <strong className="font-semibold text-slate-950">Copyright Act, 1957</strong> and the <strong className="font-semibold text-slate-950">Copyright Rules, 2013</strong>, copyright fees in Tamil Nadu are federally standardized across all Indian states. However, total filing expenses vary significantly depending on whether the creative asset is an individual literary manuscript, proprietary software source code, a commercial music album, or a feature-length film. This comprehensive guide outlines the exact statutory fees, procedural steps, and strategic insights for creators across Tamil Nadu.
        </p>
      </div>

      {/* Section 1: Why Registration Matters in Tamil Nadu */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Statutory Copyright Registration Matters for Creators in Tamil Nadu
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          While common law copyright automatically subsists the moment an original work is created and fixed in a tangible medium, unregistered creators face immense hurdles in proving ownership before courts. Formal registration with the <strong className="font-semibold text-slate-950">Registrar of Copyrights</strong> provides decisive advantages:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-950">Conclusive Prima Facie Evidence (Section 48):</strong>
              <p className="text-slate-800 font-normal mt-0.5 leading-relaxed">
                The Register of Copyrights is accepted by the Madras High Court and district commercial courts as indisputable proof of authorship and ownership date.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-950">Criminal Anti-Piracy Enforcement:</strong>
              <p className="text-slate-800 font-normal mt-0.5 leading-relaxed">
                Enables immediate registration of First Information Reports (FIRs) and police raids under Section 64 against illicit distributors and online pirates.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-950">Licensing &amp; Royalties Monetization:</strong>
              <p className="text-slate-800 font-normal mt-0.5 leading-relaxed">
                Essential for entering legally binding syndication contracts with OTT streaming giants, music labels, publishing houses, and international distributors.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-slate-950">Statutory Damages &amp; Accounts of Profit:</strong>
              <p className="text-slate-800 font-normal mt-0.5 leading-relaxed">
                Registered owners can demand full disgorgement of profits earned by infringers plus legal litigation expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Types of Works Eligible */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Categories of Works Eligible for Copyright in Tamil Nadu
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Indian Copyright Office classifies copyrightable works into six distinct statutory categories under Section 13:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <BookOpen className="w-4 h-4 text-purple-600 mb-1.5" />
            <h4 className="font-semibold text-slate-950">Literary &amp; Dramatic Works</h4>
            <p className="text-slate-800 font-normal mt-1 leading-relaxed">
              Books, poems, theatrical screenplays, film dialogues, technical research papers, and website editorial copy.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Code className="w-4 h-4 text-blue-600 mb-1.5" />
            <h4 className="font-semibold text-slate-950">Software Programs &amp; SaaS</h4>
            <p className="text-slate-800 font-normal mt-1 leading-relaxed">
              Source code, compiled object code, backend architectures, mobile applications, and database schemas.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Music className="w-4 h-4 text-emerald-600 mb-1.5" />
            <h4 className="font-semibold text-slate-950">Musical Compositions</h4>
            <p className="text-slate-800 font-normal mt-1 leading-relaxed">
              Melodic notations, chords, musical arrangements, classical Carnatic compositions, and instrumental soundtracks.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Palette className="w-4 h-4 text-pink-600 mb-1.5" />
            <h4 className="font-semibold text-slate-950">Artistic Works &amp; Logos</h4>
            <p className="text-slate-800 font-normal mt-1 leading-relaxed">
              Paintings, graphics, architectural blueprints, commercial logos, product label designs, and illustrations.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Film className="w-4 h-4 text-amber-600 mb-1.5" />
            <h4 className="font-semibold text-slate-950">Cinematograph Films</h4>
            <p className="text-slate-800 font-normal mt-1 leading-relaxed">
              Feature films, regional web series, documentary shorts, animated videos, and commercial advertisements.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Layers className="w-4 h-4 text-indigo-600 mb-1.5" />
            <h4 className="font-semibold text-slate-950">Sound Recordings</h4>
            <p className="text-slate-800 font-normal mt-1 leading-relaxed">
              Commercial audio tracks, music albums, vocal recordings, audiobooks, and podcast series.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Statutory Fee Breakdown Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Complete Copyright Registration Fee Schedule in Tamil Nadu
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Statutory government fees prescribed under the Second Schedule of the Copyright Rules, 2013 applicable for applicants across Tamil Nadu:
        </p>

        {/* Table: Fees */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Category of Creative Work</th>
                <th className="py-3 px-4">Statutory Government Fee</th>
                <th className="py-3 px-4">Additional Compliance Requirements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Literary, Dramatic or Musical Work</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹500 per work</td>
                <td className="py-3 px-4 font-normal text-slate-900">2 complete manuscript / sheet music copies</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Software Code, Mobile Apps &amp; Databases</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹500 per program</td>
                <td className="py-3 px-4 font-normal text-slate-900">First 10 and last 10 pages of unredacted source code</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Artistic Work (Standard / Non-Commercial)</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹500 per work</td>
                <td className="py-3 px-4 font-normal text-slate-900">High-resolution physical/digital artwork copies</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Artistic Work Used on Commercial Goods (Brand Logo)</td>
                <td className="py-3 px-4 font-semibold text-amber-800">₹2,000 per work</td>
                <td className="py-3 px-4 font-normal text-slate-900">Mandatory Search Certificate (Form TM-C) from Trade Marks Registry</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Cinematograph Feature Film / Web Series</td>
                <td className="py-3 px-4 font-semibold text-purple-800">₹5,000 per film</td>
                <td className="py-3 px-4 font-normal text-slate-900">Script, soundtrack sync deeds &amp; master video copy</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Sound Recording / Commercial Audio Track</td>
                <td className="py-3 px-4 font-semibold text-blue-800">₹2,000 per track</td>
                <td className="py-3 px-4 font-normal text-slate-900">Master audio file &amp; lyricist/composer assignment deeds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: 5-Step Filing Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step Procedure to Register Copyright in Tamil Nadu
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Documentation Preparation &amp; Classification Mapping</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Compile work samples, identify exact statutory category, draft Statement of Particulars, and obtain No-Objection Certificates (NOCs) from creators or employers.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Electronic Portal Lodgement (Form XIV)</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Submit Form XIV online through the Copyright Office e-filing gateway, remit government statutory fees, and generate instant Diary Number.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Mandatory 30-Day Third-Party Objection Window</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Statutory cooling-off period during which any third party claiming prior authorship or ownership may file formal legal objections.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Substantive Examination &amp; Discrepancy Defense</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The Copyright Examiner scrutinizes the filing. If discrepancies are raised, Merrafilings drafts and submits a formal legal reply within 30 days.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">5</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Issuance of Official Copyright Registration Certificate</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The Registrar issues the official digital Certificate of Registration, recording the work permanently in the Register of Copyrights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions by Tamil Nadu Creators
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
              How long does the copyright registration process take from Tamil Nadu?
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Typically between 3 to 6 months. This accounts for the mandatory 30-day statutory waiting period, examiner scrutiny, and administrative record entry.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
              Is physical appearance required in New Delhi for creators from Chennai?
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              No. The entire process is 100% digital. Applications, document uploads, fee payments, discrepancy replies, and certificate issuances are executed through the electronic Copyright Portal.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
              What if someone in Tamil Nadu infringes upon my registered copyright?
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-1 leading-relaxed">
              Under Section 62 of the Copyright Act, you can initiate civil litigation in the District Court or Madras High Court within whose jurisdiction you reside or carry on business, regardless of where the infringer is located.
            </p>
          </div>
        </div>
      </section>
    </CopyrightGuideLayout>
  );
}
