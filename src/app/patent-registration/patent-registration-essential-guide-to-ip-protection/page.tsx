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
  Send,
  HelpCircle,
  TrendingUp,
  Globe2,
} from "lucide-react";

export default function PatentRegistrationEssentialGuideIpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Why are patent claims considered the most critical part of an application?",
      a: "In patent litigation, what is not claimed is disclaimed. The claims define the precise legal boundaries of your monopoly. Even if an invention is described in detail in the specification, if a feature is not explicitly claimed in the patent claims, a competitor can legally copy it without committing patent infringement.",
    },
    {
      q: "What is the difference between an independent claim and a dependent claim?",
      a: "An independent claim stands alone and sets out the broad, essential inventive features of your invention without referencing any other claim. A dependent claim refers back to an independent claim and adds narrower, specific technical limitations or preferred embodiments, acting as a vital backup if the broader independent claim is challenged.",
    },
    {
      q: "How can I avoid the pitfall of 'narrow claims'?",
      a: "Avoid restricting your independent claims to specific materials, dimensions, or single geometric configurations unless they are fundamentally essential to the inventive concept. Use generic terminology (e.g. 'resilient member' instead of 'steel coil spring') so competitors cannot evade infringement by substituting minor materials.",
    },
    {
      q: "What happens if I neglect international protection within the 12-month priority window?",
      a: "Under the Paris Convention, you have exactly 12 months from your initial filing date in India to file corresponding patent applications abroad or via the PCT while claiming your Indian priority date. If you miss this 12-month deadline, your own published Indian patent application becomes prior art against you, permanently destroying novelty globally.",
    },
    {
      q: "Can an inventor draft and file their own patent without an attorney in India?",
      a: "Under Indian law, an inventor is legally permitted to draft and file their own patent application as an individual applicant. However, patent prosecution involves strict techno-legal claim drafting and statutory deadlines. Over 85% of self-filed patent applications without certified patent agent assistance face severe FER objections, abandonment, or overly narrow claim grants.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="patent-registration-essential-guide-to-ip-protection"
      title="Patent Registration: Your Essential Guide to IP Protection"
      breadcrumbLabel="Essential Guide to IP Protection"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Innovation is an exhilarating journey, but it is equally fraught with legal and commercial risks. When an inventor or enterprise develops a novel technology or breakthrough product, securing robust patent protection is the most decisive step to safeguard R&amp;D investments from unauthorized duplication and blatant commercial imitation. Ensuring your intellectual property is formally protected respects and values the creator&apos;s ingenuity and creates a sustainable engine for long-term corporate growth.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This essential guide explores the core principles of patent registration under the <strong className="font-semibold text-slate-950">Patents Act, 1970</strong>. Discover the four critical pillars of patent preparation, examine the common drafting pitfalls that compromise enforceability, and learn why partnering with registered patent attorneys maximizes claim defensibility and commercial market dominance.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Core Patent Enforcement Metrics</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Legal Monopoly</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Section 48 Exclusive Right</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Paris Convention Window</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Strict 12 Months from Filing</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Remedy for Infringement</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Accounts of Profit &amp; Injunctions</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The 4 Critical Pillars */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The 4 Critical Pillars of Patent Protection
        </h2>
        <div className="space-y-3 pt-2">
          {/* Pillar 1 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Conduct a Thorough Prior-Art Search
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Screen Indian Patent Advanced Search System (InPASS) and global databases. A comprehensive prior-art search identifies existing patents similar to your invention, steering your claim scope and preventing catastrophic infringement claims down the line.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Prepare a Detailed Technical Specification &amp; Claims Set
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The specification must meet the statutory requirement of enablement—explaining how to make and use the invention without undue experimentation. Formulate robust independent and dependent claims to maximize legal enforceability.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  File with the Appropriate Patent Office Jurisdiction
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Lodge Form 1 and Form 2 with the appropriate territorial patent branch (Chennai, Delhi, Mumbai, Kolkata) based on the applicant&apos;s place of business. Adhere strictly to electronic filing guidelines and format specifications.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Respond Constructively to Patent Office Actions &amp; FERs
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Address examiner objections with precision. Provide clear technical explanations, cite supporting embodiments from the specification, and amend claims if necessary to overcome prior art citations and statutory Section 3 exclusions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Avoiding Critical Pitfalls */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Avoiding Critical Pitfalls in Patent Protection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-rose-950 group-hover:text-rose-950 transition-colors">
              Vague Descriptions
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Lack of precise technical disclosure invites rejection under Section 10(4) and makes the patent vulnerable to post-grant revocation for insufficiency of disclosure.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-rose-950 group-hover:text-rose-950 transition-colors">
              Overly Narrow Claims
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Including non-essential hardware or process details in independent claims allows competitors to design around your product by changing a single component.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-rose-950 group-hover:text-rose-950 transition-colors">
              Neglecting International Deadlines
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Failing to file PCT or foreign applications within 12 months from the Indian filing permanently waives your foreign patent rights in all other countries.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Indispensable Role of Certified Attorneys */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The Value of Professional Patent Legal Representation
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Drafting a patent application is a blend of advanced science and intricate legal drafting. Certified Patent Agents registered with the Indian Patent Office ensure:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Optimized Claim Architecture:</strong>
            Drafting multi-tiered claims that provide broad market protection while retaining robust dependent fallback positions.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Section 3 Statutory Clearance:</strong>
            Formulating claims to successfully clear statutory barriers regarding software, algorithms, and chemical compositions.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Hearing Advocacy:</strong>
            Representing the inventor in oral hearings before the Controller of Patents to rebut examiner objections in person.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">• Global PCT Execution:</strong>
            Guiding international filings, priority claims, and national phase entries across the US, Europe, and Asia.
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions
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
