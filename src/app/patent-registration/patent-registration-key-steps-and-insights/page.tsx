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
  Coins,
  TrendingUp,
  Globe2,
} from "lucide-react";

export default function PatentRegistrationKeyStepsInsightsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the recent amendment regarding Form 27 (Statement of Commercial Working)?",
      a: "Under the Patents (Amendment) Rules, 2024, patent owners are no longer required to file Form 27 annually. Instead, the Statement of Commercial Working of Granted Patents is now required only once every three financial years, significantly reducing administrative compliance burdens for domestic and global patentees.",
    },
    {
      q: "What is an Office Action or First Examination Report (FER)?",
      a: "An Office Action (known in India as the FER) is a formal written communication from the Patent Examiner outlining legal, technical, or statutory objections to your application. Common objections relate to non-patentability under Section 3, lack of inventive step over cited prior art, or vague claim language. The applicant has 6 months (extendable by 3 months via Form 4) to file a formal written response and claim amendments.",
    },
    {
      q: "Can a patent be revoked after it has been granted in India?",
      a: "Yes. Under Section 64 of the Patents Act, 1970, any interested person or the Central Government can file a Revocation Petition before the High Court or Controller on grounds such as prior public knowledge, lack of inventive step, non-disclosure of foreign filing details (Section 8), or obtaining the patent fraudulently.",
    },
    {
      q: "How does the Unified Patent Court (UPC) impact Indian tech companies exporting to Europe?",
      a: "The UPC allows Indian companies to enforce or defend Unitary Patents across 17+ participating European Union member states through a single centralized court proceeding, eliminating the need to litigate in individual European national courts.",
    },
    {
      q: "What constitutes 'industrial applicability' for a patent?",
      a: "Under Section 2(1)(ac), an invention is capable of industrial application if it can be made or used in an industry. Purely theoretical scientific formulas, abstract mathematical theorems, or perpetual motion concepts that defy laws of physics fail this criterion.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="patent-registration-key-steps-and-insights"
      title="Understanding Patent Registration: Key Steps and Essential Insights"
      breadcrumbLabel="Key Steps & Essential Insights"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In today&apos;s intensely competitive, tech-driven commercial ecosystem, protecting intellectual property is paramount. A patent is the most potent legal instrument available to inventors and businesses, granting an exclusive 20-year temporary monopoly in exchange for disclosing technical knowledge to the public. Understanding the sequential milestones of patent registration and the nuances of patent prosecution is vital to transforming technological breakthroughs into commercially viable, defensible market assets.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide explores the six essential steps of the patenting journey, analyzes the strategic importance of patents, unpacks key procedural challenges, and highlights recent legislative and technological developments—including AI search algorithms, simplified Form 27 commercial working filings, and blockchain IP verification.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Patent Lifecycle Architecture</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Examination Window</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Form 18 / 18A (Expedited)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">FER Response Window</span>
            <strong className="font-semibold text-slate-950 text-[13px]">6 Months (+3 Mo Extension)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Commercial Working</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Form 27 Once Every 3 Years</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The Strategic Importance of Patents */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Strategic Importance of Patent Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A patent is not merely a legal certificate; it is a powerful business weapon that fundamentally alters market dynamics in favor of the inventor:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Exclusive Market Monopoly:</strong>
            Gain unfettered control over the manufacturing, distribution, and pricing of your innovation, effectively locking competitors out of your technical space.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Direct Commercial Monetization:</strong>
            License your patent to global manufacturers for upfront signing bonuses and recurring royalties, or sell the patent outright as a capital asset.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Investor &amp; Venture Magnet:</strong>
            Venture capital and private equity investors prioritize patented or patent-pending startups, viewing IP protection as verified proof of defensibility.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Cross-Licensing &amp; Freedom to Operate:</strong>
            A strong patent portfolio protects your business from predatory infringement suits by allowing you to negotiate cross-licensing pacts with industry giants.
          </div>
        </div>
      </section>

      {/* Section 2: 6 Steps to Successfully Register a Patent */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 6 Core Steps to Successful Patent Registration
        </h2>
        <div className="space-y-3 pt-2">
          {/* Step 1 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Determine Patentability &amp; InPASS Novelty Audit
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Evaluate whether the invention is novel, involves an inventive step, and possesses industrial applicability. Screen Indian and foreign patent databases to verify no prior identical technical disclosures exist.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Prepare Precision Specification, Claims &amp; Drawings
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Draft Form 2 containing the technical background, summary, detailed enablement of the best working mode, numbered engineering drawings, abstract, and independent/dependent patent claims.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  File Application on the CGPDTM Electronic Portal
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Submit Form 1, Form 2, Form 3 (Statement under Section 8), and Form 5 (Inventorship) to the Indian Patent Office, generating an instant Application Number and official filing date.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Journal Publication &amp; Substantive Examination Request (Form 18)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The application is published at 18 months (or 1 month via Form 9). File Form 18 or Form 18A (Expedited Examination) to initiate substantive examination by technical patent examiners.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                5
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Respond to Office Actions &amp; First Examination Report (FER)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Receive the FER outlining examiner citations. Submit written legal arguments, distinguish cited prior art, and amend claim language within 6 months to overcome all statutory objections.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                6
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Official Grant of Patent &amp; Letters Patent Document
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Upon clearing all examination requirements, the Controller issues the Certificate of Patent. The grant is published in the Patent Journal, securing your 20-year legal monopoly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Strategic Considerations & Emerging Trends */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Key Challenges and Emerging Global Patent Trends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Territorial Limitations
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              A patent granted in India is enforceable only within Indian territorial waters and airspace. To protect exports in the US or Europe, inventors must leverage PCT or Paris Convention filings within priority windows.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Blockchain IP Timestamping
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Emerging legal tech platforms use decentralized cryptographic hashes to establish immutable, unalterable proof of creation dates for preliminary research before patent filing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-1 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Unified Patent Court (UPC)
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              European patent litigation is now centralized under the UPC, allowing Indian exporters to enforce Unitary Patents across 17+ European nations simultaneously.
            </p>
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
