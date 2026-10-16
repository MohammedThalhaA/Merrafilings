"use client";

import React, { useState } from "react";
import Link from "next/link";
import PatentGuideLayout from "@/components/PatentGuideLayout";
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
  Lightbulb,
  ChevronDown,
  Layers,
  BookOpen,
  CheckSquare2,
  XCircle,
  TrendingUp,
} from "lucide-react";

export default function EasyPatentRegistrationSimplifyingPathPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Can I patent an invention that I have already demonstrated publicly or at an exhibition?",
      a: "In India, Section 29 to Section 34 provide very narrow grace windows (e.g. government-notified exhibitions or reasonable trial). However, demonstrating, selling, or publicly publishing your invention before securing an official priority date generally destroys absolute novelty under Indian and international law. You should always file at least a Provisional Patent Application before any public exposure.",
    },
    {
      q: "How does a provisional patent make the registration path easier for startups?",
      a: "A provisional patent requires only a preliminary technical disclosure without finalized claims. It costs significantly less, locks in an irrevocable priority date immediately, grants the legal right to label your product as 'Patent Pending', and gives you a 12-month window to refine your prototype, raise funds, and draft complete claims.",
    },
    {
      q: "What makes an invention 'non-obvious' under the Indian Patents Act?",
      a: "Under Section 2(1)(ja), an inventive step means a technical advance as compared to existing knowledge, or having economic significance, that makes the invention not obvious to a person skilled in the relevant art (PSITA). Minor tweaks, common trade variants, or predictable combinations are rejected as obvious.",
    },
    {
      q: "What are the common reasons patent applications face First Examination Report (FER) delays?",
      a: "The most frequent FER objections include: (1) Section 3 exclusions (software per se, mathematical algorithms, medical treatment methods), (2) lack of inventive step cited against foreign patent publications, (3) vague or ambiguous claim language, and (4) non-submission of Section 8 foreign filing status updates (Form 3).",
    },
    {
      q: "Do I have to pay renewal fees every year after my patent is granted?",
      a: "Yes. In India, patent maintenance renewal fees (annuities) must be paid annually starting from the 3rd year onwards through the 20th year under Section 142. If maintenance fees are not paid within the prescribed window, the patent lapses and enters the public domain.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="easy-patent-registration-simplifying-your-path"
      title="Easy to Register Patent: Simplifying Your Path to Innovation"
      breadcrumbLabel="Easy Path to Innovation"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          From initial ideation in the laboratory or garage to final commercial launch, obtaining a patent for your novel product or process can initially appear overwhelming. Between dense legal specifications, complex claims drafting, prior-art scrutiny, and procedural office actions, many inventors feel intimidated. However, by breaking the patent journey down into structured, manageable milestones, securing a 20-year legal monopoly becomes straightforward and highly rewarding.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide outlines the essential steps, expert preparation strategies, and dangerous pitfalls to avoid when patenting your invention under the <strong className="font-semibold text-slate-950">Patents Act, 1970</strong>. Discover how to validate your idea, craft strong defensible claims, and leverage government fee subsidies to ensure your intellectual breakthroughs receive the legal protection they deserve.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Patentability Fundamentals</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Criterion 1</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Absolute Novelty (Global)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Criterion 2</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Inventive Step (Non-Obvious)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Criterion 3</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Industrial Applicability</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Why Patent Registration Matters */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Patent Registration Matters for Every Innovator
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          An inventor who develops a revolutionary product without patent protection leaves their business exposed to instant copycats. A registered patent provides:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Absolute Market Exclusivity
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              No competitor can manufacture, sell, import, or distribute your patented invention without your formal licensing agreement.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              High Valuation Multiplier
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Institutional venture funds and strategic acquirers place significant premium valuations on companies with granted or pending patent portfolios.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Licensing &amp; Royalties
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Monetize your R&amp;D investments by licensing your patents to manufacturing conglomerates or commercial partners in exchange for ongoing royalty streams.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Manageable Pathway */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 7 Manageable Milestones to Patent Grant
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Milestone 1: Idea Validation &amp; Patentability Check
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Verify that your invention meets the 3 statutory pillars of patentability: (1) Novelty, (2) Inventive Step, and (3) Industrial Applicability, and is not excluded under Section 3 (e.g. software per se or natural substances).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Milestone 2: Exhaustive Prior-Art Search
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Screen global patent and non-patent literature on InPASS, USPTO, WIPO, and Google Patents to ensure your technical features have not been previously described or patented anywhere in the world.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Milestone 3: Selecting Application Category (Provisional vs Complete)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              If the prototype is still undergoing refinement, file a fast Provisional Application to lock in your priority date. Complete Specifications must be submitted within 12 months with finalized claims.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Milestone 4: Precision Claims Formulation &amp; Drafting
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Patent claims represent the exact legal fence around your invention. Crafting independent claims (broad scope) and dependent claims (specific embodiments) is the most critical step of patent drafting.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Milestone 5: Electronic Application Filing (Form 1, 2, 3, 5)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              File application documents on the comprehensive e-filing portal of the Controller General of Patents, Designs &amp; Trade Marks (CGPDTM) to secure an official Application Number and CBR receipt immediately.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Milestone 6: First Examination Report (FER) Scrutiny &amp; Hearing
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Upon filing Form 18 (Request for Examination), the Patent Examiner issues the FER detailing any prior art or Section 3 objections. The applicant must file a formal written response within 6 months.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 hover:bg-emerald-50/20 transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Milestone 7: Patent Grant &amp; Annual Maintenance (Years 3 to 20)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Once objections are resolved, the Controller issues the official Certificate of Patent. Pay annual renewal fees on time to maintain validity throughout the full 20-year term.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Common Pitfalls and How to Avoid Them */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Common Pitfalls and How to Avoid Them
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">1. Incomplete Technical Enablement:</strong>
            Failing to describe how to build and operate the invention in clear detail leads to rejection under Section 10(4) for insufficient disclosure. Always disclose the best working mode.
          </div>

          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">2. Ignoring Prior Art Search:</strong>
            Drafting an application blindly without prior art searches wastes thousands of rupees on inventions already disclosed in foreign patent publications.
          </div>

          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">3. Vague or Overly Broad Claims:</strong>
            Claims that are too wide will be struck down during examination; claims that are too narrow allow competitors to design around your product easily.
          </div>

          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">4. Premature Public Disclosure:</strong>
            Sharing your invention on LinkedIn, YouTube, research journals, or pitching to investors without an NDA destroys absolute novelty permanently.
          </div>
        </div>
      </section>

      {/* Section 4: Tips for an Easy Registration Experience */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Pro Tips for a Streamlined Patenting Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Hire Certified Patent Attorneys:</strong>
            Patent drafting is techno-legal writing. Working with certified patent agents registered with the CGPDTM maximizes claim strength and grant probability.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Maintain Date-Stamped Lab Notebooks:</strong>
            Documenting the chronological development of your invention, test results, and iterations serves as crucial legal evidence of inventorship.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Leverage 80% Startup India Subsidies:</strong>
            Obtain DPIIT startup recognition or MSME Udyam to reduce your government e-filing fee from ₹4,000 / ₹8,000 down to just ₹1,600.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Request Early Publication (Form 9):</strong>
            Instead of waiting 18 months for automatic journal publication, file Form 9 to have your patent published within 1 month, unlocking expedited examination.
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-medium text-slate-900 text-sm hover:text-[#155EEF] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#155EEF]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </PatentGuideLayout>
  );
}
