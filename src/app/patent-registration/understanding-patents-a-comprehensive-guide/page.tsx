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
  Cpu,
  Palette,
  Leaf,
  Globe2,
  Coins,
  TrendingUp,
} from "lucide-react";

export default function UnderstandingPatentsComprehensiveGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Can an Artificial Intelligence (AI) system be named as an inventor on an Indian patent?",
      a: "No. Under the Patents Act, 1970, an inventor must be a 'natural person' (human being). In line with global judicial rulings from the US, UK, and EPO regarding the DABUS AI system, the Indian Patent Office requires that human engineers or researchers who designed, prompted, or guided the AI system be designated as the true and first inventors.",
    },
    {
      q: "What is the Patent Prosecution Highway (PPH) and does India participate in it?",
      a: "The Patent Prosecution Highway (PPH) is a bilateral framework between patent offices that allows an applicant who receives a positive examination report in one patent office to request expedited examination in the partner patent office. India currently operates a bilateral PPH pilot program with the Japan Patent Office (JPO).",
    },
    {
      q: "What is a 'patent troll' or Non-Practicing Entity (NPE) and how can businesses defend themselves?",
      a: "A Non-Practicing Entity (NPE) is a company that acquires patents not to manufacture or commercialize products, but solely to sue operating companies for patent infringement damages. Businesses defend themselves by maintaining proactive freedom-to-operate (FTO) searches, building defensive patent portfolios, and joining patent defensive aggregators.",
    },
    {
      q: "What is the difference between a product patent and a process patent in pharmaceuticals?",
      a: "A product patent gives an absolute monopoly over the chemical entity itself, preventing anyone else from making that molecule regardless of how they synthesize it. A process patent protects only a specific chemical manufacturing route, allowing competitors to synthesize the identical drug using a different, non-infringing chemical process.",
    },
    {
      q: "What is the Scheme for Facilitating Start-Ups Intellectual Property Protection (SIPP)?",
      a: "The Government of India's SIPP scheme provides registered startups with empanelled IP Facilitators who draft and prosecute patent applications free of professional charge (the government reimburses the facilitator fees directly). Startups need only pay the subsidized statutory government fees.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="understanding-patents-a-comprehensive-guide"
      title="Understanding Patents: A Comprehensive Guide to Protecting Inventions"
      breadcrumbLabel="Comprehensive Patent Guide"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In an era propelled by hyper-speed technological evolution, protecting intellectual property has become more imperative than ever before. At the apex of intellectual property protection stands the patent system—an ingenious legal framework designed to incentivize human ingenuity by granting creators temporary, exclusive market monopolies. Understanding how patents function, how they are classified, and how to harness them strategically is essential for every innovator, researcher, and growing business.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide dissects the fundamental principles of patent law under the <strong className="font-semibold text-slate-950">Patents Act, 1970</strong>. Explore the comparative boundaries between utility patents, design patents, and plant variety protection, follow the four-stage lifecycle from prior-art search to final grant, and examine modern developments including AI-assisted prosecution, the Patent Prosecution Highway (PPH), and defensive IP moats.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Patent System Blueprint</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Standard Duration</span>
            <strong className="font-semibold text-slate-950 text-[13px]">20 Years from Filing Date</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Inventorship Standard</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Natural Person (Human)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Startup Scheme</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">SIPP Free Facilitation</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is a Patent? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Patent and How Does It Function?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A patent is a statutory contract between an inventor and the sovereign state. In exchange for the inventor fully and publicly disclosing how their technical invention works (the &apos;specification&apos;), the government confers exclusive statutory authority to prohibit all third parties from producing, using, selling, or importing that invention for a non-extendable period of <strong className="font-semibold text-slate-950">20 years</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Defensive Commercial Moat
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Preemptively blocks well-funded conglomerates from replicating your proprietary hardware, process chemistry, or software architecture.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Monetization &amp; Royalties
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Patents transform abstract ideas into legally transferable property that can be mortgaged, licensed for royalties, or transferred outright.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Enterprise Valuation
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              A robust patent portfolio signals technical superiority and market defensibility, directly unlocking higher venture capital valuation multiples.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Comparison: Patents vs Trademarks vs Copyrights */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Comparison: Patents vs Industrial Designs vs Copyright vs Trademark
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">IP Right</th>
                <th className="py-3 px-4">Subject Matter Protected</th>
                <th className="py-3 px-4">Governing Statute</th>
                <th className="py-3 px-4">Monopoly Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Utility Patent</td>
                <td className="py-3.5 px-4">Functional inventions, machines, processes &amp; chemical compositions</td>
                <td className="py-3.5 px-4">The Patents Act, 1970</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">20 Years from Filing Date</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Industrial Design</td>
                <td className="py-3.5 px-4">Ornamental shape, external profile &amp; visual aesthetics of an article</td>
                <td className="py-3.5 px-4">The Designs Act, 2000</td>
                <td className="py-3.5 px-4 text-blue-700 font-semibold">15 Years (10 + 5 renewal)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Trademark</td>
                <td className="py-3.5 px-4">Brand names, logos, slogans, trade dress &amp; commercial identifiers</td>
                <td className="py-3.5 px-4">Trade Marks Act, 1999</td>
                <td className="py-3.5 px-4 text-purple-700 font-semibold">10 Years (Renewable indefinitely)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Copyright</td>
                <td className="py-3.5 px-4">Original artistic, literary, musical works &amp; raw software code</td>
                <td className="py-3.5 px-4">The Copyright Act, 1957</td>
                <td className="py-3.5 px-4 text-indigo-700 font-semibold">Author&apos;s Life + 60 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The 4-Stage Lifecycle */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The 4-Stage Patent Lifecycle
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Stage 1: Exhaustive Prior-Art Audit
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Screen InPASS, USPTO, EPO Espacenet, and scientific journals. Confirm novelty and define the inventive delta differentiating your product from existing technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Stage 2: Precision Drafting &amp; Electronic Filing
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Draft Form 2 containing the specification, enablement of best working mode, numbered engineering illustrations, and independent/dependent patent claims. File Form 1 on the e-filing portal.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Stage 3: Substantive Examination &amp; FER Resolution
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Upon filing Form 18, technical examiners evaluate the claims. Rebut citations in the First Examination Report (FER) within 6 months and present oral arguments at Controller hearings.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 hover:bg-emerald-50/20 transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Stage 4: Grant Issuance &amp; 20-Year Maintenance
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Receive the official Certificate of Patent. Maintain annual annuity payments from year 3 to year 20, and file Form 27 commercial working statements once every 3 financial years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Modern Trends */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Emerging Global Dynamics in the Patent Ecosystem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              AI-Assisted Inventions
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              While AI algorithms cannot be named inventors under Section 6, software implementations that exhibit a measurable technical effect on hardware architectures are regularly granted patents.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Defensive Patent Aggregation
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              To neutralize predatory patent assertion entities (patent trolls), innovative companies increasingly cross-license their patents through collaborative IP consortia.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-1 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Patent Prosecution Highway
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Bilateral PPH agreements between India and global registries (e.g. JPO) allow applicants with positive examination findings in one office to fast-track grants in partner jurisdictions.
            </p>
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
