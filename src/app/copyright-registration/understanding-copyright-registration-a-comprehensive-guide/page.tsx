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
  Lightbulb,
  Globe2,
} from "lucide-react";

export default function UnderstandingCopyrightRegistrationGuidePage() {
  return (
    <CopyrightGuideLayout
      currentSlug="understanding-copyright-registration-a-comprehensive-guide"
      title="Understanding Copyright Registration: A Comprehensive Strategic Guide"
      breadcrumbLabel="Understanding Copyright Registration"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In our current era of rapid digital innovation and boundless content reproduction, intellectual creations represent the most valuable yet vulnerable assets of modern enterprises. <strong className="font-semibold text-slate-950">Copyright Registration</strong> is the official legal instrument that establishes an unassailable public record of your ownership, safeguarding your creations from unauthorized piracy and commercial exploitation.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed under the <strong className="font-semibold text-slate-950">Copyright Act, 1957</strong>, registration grants exclusive commercial monopoly over original literary, dramatic, musical, artistic, software, and cinematographic works. This comprehensive guide breaks down the core concepts, modern legal developments, and procedural mechanics of copyright registration in India.
        </p>
      </div>

      {/* Section 1: What is Copyright Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is Copyright Registration? Unregistered vs Registered Rights
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Indian jurisprudence, copyright arises automatically upon creation the moment a work is fixed in a tangible medium. However, relying on this unregistered common law status leaves creators severely disadvantaged in litigation:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
            <h4 className="font-semibold text-amber-950">Unregistered Common Law Copyright</h4>
            <ul className="space-y-1.5 text-amber-900/90 list-disc pl-4 font-normal">
              <li>Heavy burden on creator to prove exact creation timestamp in court.</li>
              <li>Courts require exhaustive witnesses, drafts, and forensic digital proof.</li>
              <li>Cannot initiate fast-track criminal anti-piracy police raids.</li>
              <li>Complex and expensive preliminary injunction hearings.</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
            <h4 className="font-semibold text-emerald-950">Statutory Registered Copyright (Section 48)</h4>
            <ul className="space-y-1.5 text-emerald-900/90 list-disc pl-4 font-normal">
              <li>Conclusive prima facie evidence of ownership accepted by all courts.</li>
              <li>Burden of proof automatically shifts to the accused infringer.</li>
              <li>Police authorized to seize pirated goods without search warrants (Section 64).</li>
              <li>Immediate eligibility for statutory damages and legal fee recovery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: 4-Stage Lifecycle Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 4 Stages of the Copyright Registration Lifecycle
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Preparation &amp; Fixation of Tangible Work</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Fix the creation into a tangible format—manuscript, source code, MP3 audio file, or MP4 video. Compile author identity proofs and execute work-for-hire assignment agreements where applicable.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Electronic Filing of Form XIV &amp; Fee Remittance</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Lodge Form XIV and Statement of Particulars on the electronic Copyright Office portal. Remit prescribed statutory fees to obtain the official Diary Number.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Statutory 30-Day Waiting Period &amp; Scrutiny</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Mandatory cooling-off window for third-party objections, followed by substantive examiner scrutiny for statutory compliance and originality.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Grant of Registration Certificate</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The particulars are permanently entered into the Register of Copyrights and the digitally signed Certificate of Registration is issued to the owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Debunking Common Misconceptions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Debunking Critical Copyright Misconceptions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 className="font-semibold text-rose-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Myth 1: &quot;Poor Man&apos;s Copyright&quot;</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Mailing a sealed envelope of your manuscript or code to yourself has zero evidentiary standing under the Indian Evidence Act or Section 48 of the Copyright Act.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 className="font-semibold text-rose-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Myth 2: &quot;Protects Business Brand Names&quot;</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Names, slogans, and short titles cannot be copyrighted. Commercial brand identifiers must be registered as Trademarks under the Trade Marks Act 1999.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h4 className="font-semibold text-rose-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Myth 3: &quot;Valid Only for 10 Years&quot;</span>
            </h4>
            <p className="text-slate-800 font-normal leading-relaxed">
              Unlike trademarks (which must be renewed every 10 years), copyrights in literary and artistic works endure perpetually for the author&apos;s lifetime plus 60 years.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Modern Developments */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Modern Copyright Developments: Generative AI &amp; Code Protection
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The emergence of Generative Artificial Intelligence (AI) has sparked global legal discussions around copyright authorship. Under Section 2(d) of the Indian Copyright Act, an &quot;author&quot; must be a natural person who caused the work to be created. Works created entirely by automated AI algorithms without substantial human intellectual contribution cannot claim copyright.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Conversely, software engineers, prompt engineers, and creators who write original code, structure architectures, or edit creative content retain complete statutory copyright over their creative inputs.
        </p>
      </section>
    </CopyrightGuideLayout>
  );
}
