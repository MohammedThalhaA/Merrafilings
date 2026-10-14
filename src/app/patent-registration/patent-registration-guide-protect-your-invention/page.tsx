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
  Coins,
  TrendingUp,
} from "lucide-react";

export default function PatentRegistrationGuideProtectInventionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the difference between a utility patent and an industrial design registration?",
      a: "A utility patent (standard patent) protects the functional, mechanical, chemical, or operational mechanism of an invention (how it works) for 20 years. An industrial design registration protects only the ornamental, aesthetic external shape, contour, or visual surface pattern of an article (how it looks) for up to 15 years under the Designs Act, 2000.",
    },
    {
      q: "Can plants and living organisms be patented in India?",
      a: "Under Section 3(j) of the Indian Patents Act, plants and animals in whole or any part thereof other than microorganisms, but including seeds, varieties, and species and essentially biological processes, are not patentable. However, novel plant varieties can be protected under the Protection of Plant Varieties and Farmers' Rights Act, 2001 (PPV&FR Act).",
    },
    {
      q: "What are the official government fees to file a patent application in India?",
      a: "For natural persons, recognized DPIIT startups, and MSME Udyam enterprises, the official e-filing fee for Form 1 is ₹1,600 (up to 30 pages and 10 claims). For large corporations and other legal entities, the fee is ₹8,000. Each additional page beyond 30 costs ₹160 (subsidized) or ₹800 (corporate), and each additional claim beyond 10 costs ₹320 or ₹1,600.",
    },
    {
      q: "What is the green patent expedited examination incentive?",
      a: "Under amended Patent Rules, inventions pertaining to green technologies, renewable energy systems, clean water recycling, and environmental sustainability qualify for fast-track processing and priority examination, allowing inventors to receive examination reports within months.",
    },
    {
      q: "What rights does 'Patent Pending' grant before the patent is officially issued?",
      a: "Marking your product as 'Patent Pending' puts the entire market on notice that a patent application has been officially filed. While damages cannot be collected until the patent is granted, once issued, your retroactive rights allow you to claim compensation from the date the application was officially published in the Patent Journal.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="patent-registration-guide-protect-your-invention"
      title="Patent Registration: Your Complete Guide to Securing Your Invention and Protecting Your Ideas"
      breadcrumbLabel="Complete Guide to Securing Ideas"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In an era defined by lightning-fast technological breakthroughs and fierce global competition, protecting your innovative creations is one of the most consequential decisions an entrepreneur, researcher, or enterprise can make. Patent registration is the cornerstone of intellectual property ownership, creating an impenetrable 20-year legal monopoly that transforms intangible ideas into high-value commercial assets.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Whether you have invented a breakthrough medical device, an advanced clean-tech battery architecture, an industrial robotic mechanism, or a specialized chemical formulation, this complete guide provides an authoritative roadmap to securing patent protection. Learn about patent classifications, three-step application drafting, cost breakdowns, and emerging global trends in patent prosecution.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Protection Scope</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Standard Monopoly Term</span>
            <strong className="font-semibold text-slate-950 text-[13px]">20 Years from Filing Date</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Statute</span>
            <strong className="font-semibold text-slate-950 text-[13px]">The Patents Act, 1970</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Enforcement Remedy</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Civil Injunctions &amp; Damages</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is Patent Registration? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is Patent Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Patent registration is the formal grant of exclusive legal rights issued by the Controller General of Patents, Designs and Trade Marks (CGPDTM). Under Section 48 of the Patents Act, 1970, a patent confers upon the patentee the exclusive right to prevent third parties who do not have their consent from the act of:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">For Product Patents:</strong>
            Making, using, offering for sale, selling, or importing for those purposes that product in India without authorization.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">For Process Patents:</strong>
            Using that process, and using, offering for sale, selling, or importing any product obtained directly by that process.
          </div>
        </div>
      </section>

      {/* Section 2: Types of Patents */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 3 Primary Types of Patent Registrations
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Understanding the appropriate IP category ensures your research and design expenditures are properly protected:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Utility Patents (Standard)
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Protects functional mechanisms, industrial machines, chemical processes, alloys, and software tied to hardware systems. Valid for 20 years from filing date.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Industrial Design Patents
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Protects novel aesthetic shapes, exterior styling, and ornamental contours applied to physical manufactured articles. Valid for 10 + 5 years under the Designs Act 2000.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Plant Varieties &amp; Biotech
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Protects distinct, uniform, and stable plant varieties under the PPV&amp;FR Act, or recombinant DNA/microorganisms under specialized Patent Office guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 3-Step Registration Architecture */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The 3-Step Core Patent Registration Architecture
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Step 1: Conduct a Rigorous Prior-Art Patent Search
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Screen worldwide patent databases (InPASS, USPTO, EPO Espacenet, WIPO) and scientific publications. Verify that your core inventive concept has never been published or commercialized before.
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
                  Step 2: Prepare Comprehensive Specification &amp; Legal Claims
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Draft Form 2 containing the technical specification: Background of Invention, Objects, Detailed Description of all working modes, Technical Drawings with reference numbers, Abstract, and precise Claim boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Step 3: Electronic Portal Filing &amp; Request for Examination
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Lodge Form 1, Form 2, Form 3, and Form 5 on the official portal. File Form 18 or Form 18A (Expedited Examination) to trigger technical scrutiny, respond to the FER, and secure your final patent grant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Costs Involved */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Transparent Cost Breakdown in Patent Registration
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Stage / Form</th>
                <th className="py-3 px-4">Purpose</th>
                <th className="py-3 px-4">Natural Person / MSME / Startup</th>
                <th className="py-3 px-4">Large Corporate / Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 1 (Filing)</td>
                <td className="py-3.5 px-4">Application for Grant (Up to 30 pages, 10 claims)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,600</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹8,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 9 (Optional)</td>
                <td className="py-3.5 px-4">Early Publication within 1 month</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,500</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹12,500</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18 (RFE)</td>
                <td className="py-3.5 px-4">Standard Request for Examination</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹4,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹20,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18A (Expedited)</td>
                <td className="py-3.5 px-4">Fast-Track Examination (Startups / MSMEs)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹8,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹60,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Annuities (Years 3–6)</td>
                <td className="py-3.5 px-4">Annual maintenance renewal fee</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹800 / year</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹4,000 / year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Latest Developments */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Latest Developments Shaping Patent Prosecution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              AI-Driven Prior-Art Screening
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Patent registries worldwide now deploy deep semantic NLP algorithms to identify prior art across non-English research papers in seconds.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Global PCT Harmonization
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              With 157+ member states, unified search standards through WIPO ensure that a positive search report in India expedites grant approvals abroad.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-1 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Green Technology Fast-Track
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Innovations targeting solar energy, carbon sequestration, and EV power electronics receive prioritized examination schedules and fee waivers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Frequently Asked Questions
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
