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
  Globe2,
  ChevronDown,
  Layers,
  BookOpen,
  Send,
  HelpCircle,
  TrendingUp,
  Coins,
} from "lucide-react";

export default function IndianPatentApplicationPctPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Does a PCT application grant an international patent automatically?",
      a: "No. There is no such thing as an 'international patent'. A PCT application is a streamlined filing mechanism that preserves your priority date across 157+ member countries and provides an authoritative International Search Report (ISR). To secure patent rights in specific countries, you must enter the National Phase within 30 or 31 months from your initial priority date.",
    },
    {
      q: "Can the Indian Patent Office act as the Receiving Office and ISA for PCT filings?",
      a: "Yes. The Indian Patent Office (IPO) is both an authorized Receiving Office (RO/IN) and an accredited International Searching Authority (ISA) and International Preliminary Examining Authority (IPEA) under WIPO. Indian inventors can designate IPO for their international search at significantly subsidized rates compared to foreign authorities.",
    },
    {
      q: "What is the statutory deadline to enter the National Phase from a PCT filing?",
      a: "In India and most PCT member states (such as the US, EPO, Japan, China, UK), the deadline to enter the National Phase is 31 months from the earliest priority date. Some jurisdictions allow 30 months. Missing this deadline without a valid petition results in permanent abandonment of patent rights in that jurisdiction.",
    },
    {
      q: "Can I file a PCT application directly without first filing in India?",
      a: "If you are an Indian resident, Section 39 of the Patents Act 1970 requires that you either file a patent application in India at least 6 weeks before filing abroad, or obtain prior written Foreign Filing Permission (FFP) from the Controller. Filing directly abroad without FFP is a punishable statutory offense under Section 118.",
    },
    {
      q: "What are the government fee concessions for startups and MSMEs under PCT?",
      a: "WIPO offers a 90% reduction on international filing fees for natural persons from developing countries. Furthermore, the Indian Patent Office offers an 80% statutory fee rebate on domestic filing, search, and examination fees for DPIIT-recognized startups and registered MSME Udyam enterprises.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="indian-patent-application-easy-pct-process"
      title="Understanding Indian Patent Application and Easy PCT Application Process"
      breadcrumbLabel="PCT & International Filing"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Navigating the world of intellectual property can often seem daunting, particularly when inventors seek to protect cutting-edge technology not only within India but across multiple international markets. Securing patent protection under the <strong className="font-semibold text-slate-950">Patents Act, 1970</strong> and expanding it globally through the <strong className="font-semibold text-slate-950">Patent Cooperation Treaty (PCT)</strong> does not need to be complicated when approached with a structured roadmap.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide demystifies the dual process of filing an Indian patent application and seamlessly leveraging the PCT international phase. By understanding statutory timelines, documentation, and the strategic advantages of the 31-month National Phase window, Indian inventors, deep-tech startups, and enterprises can safeguard their innovations both domestically and in over 157 countries worldwide.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Patent &amp; PCT Filing Baseline</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Framework</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Patents Act 1970 &amp; WIPO PCT</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">PCT Member States</span>
            <strong className="font-semibold text-slate-950 text-[13px]">157+ Contracting Countries</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">National Phase Window</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Up to 31 Months from Priority</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Why File for a Patent in India? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why File for a Patent in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          India is recognized as one of the fastest-growing innovation economies globally. Filing a patent application with the Indian Patent Office provides distinct strategic and commercial advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              20-Year Statutory Monopoly
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Under Section 48, the patentee secures exclusive legal rights to prevent competitors from making, using, offering for sale, selling, or importing the patented product or process in India.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Commercial Monetization
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Patents serve as powerful intangible assets on company balance sheets, enabling recurring royalty revenues through patent licensing, corporate assignments, or cross-licensing deals.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Venture Capital &amp; Valuation
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              A granted patent or 'Patent Pending' status significantly enhances startup enterprise valuation during venture financing rounds and acts as a formidable defensive moat against copycats.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Step-by-Step Indian Patent Application */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Step-by-Step Indian Patent Application Procedure
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing a patent in India requires adhering to sequential statutory milestones mandated by the Patent Rules, 2003:
        </p>

        <div className="space-y-3 pt-2">
          {/* Step 1 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Novelty &amp; Prior-Art Search (InPASS &amp; Global Databases)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Before lodging an application, an exhaustive patent search is conducted on the Indian Patent Advanced Search System (InPASS), USPTO, Espacenet, and WIPO Patentscope to verify absolute global novelty and ensure the invention does not infringe existing patents.
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
                  Techno-Legal Drafting of Patent Specification (Form 2)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Drafting requires detailed documentation including: (1) Title of Invention, (2) Field and Prior Art Background, (3) Detailed Description illustrating the best working mode, (4) Technical Schematics and Flowcharts, and (5) Independent and Dependent Claims defining the legal boundary of protection.
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
                  Lodging Form 1 (Provisional vs Complete Specification)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Submit Form 1 on the IP India portal. Inventors can choose a <strong className="font-semibold text-slate-950">Provisional Application</strong> (securing an immediate priority date with 12 months to finalize claims) or a <strong className="font-semibold text-slate-950">Complete Specification</strong> (when the invention is finalized with complete claims).
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
                  Publication in the Official Patent Office Journal
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The application is published in the Patent Journal automatically after <strong className="font-semibold text-slate-950">18 months</strong> from the priority date under Section 11A. Applicants seeking fast examination can file Form 9 for early publication within 1 month.
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
                  Request for Examination (Form 18 / Form 18A) &amp; FER Scrutiny
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Examination is not automatic; applicants must file Form 18. Startups and MSMEs can file Form 18A for Expedited Examination. The Patent Examiner issues a First Examination Report (FER). The applicant must respond within 6 months to overcome citations.
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
                  Controller Hearing &amp; Official Patent Grant
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Upon resolving all objections, the Controller issues the official Patent Certificate under Section 43, granting full exclusive rights for 20 years from the original filing date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Easy PCT Application Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The Easy PCT (Patent Cooperation Treaty) Process
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The <strong className="font-semibold text-slate-950">Patent Cooperation Treaty (PCT)</strong>, administered by WIPO, provides an organized, unified international filing mechanism. It eliminates the logistical nightmare of filing individual national applications in dozens of countries simultaneously within the strict 12-month Paris Convention window.
        </p>

        {/* 2 Phases of PCT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="flex items-center gap-2.5 text-indigo-700 font-semibold text-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
                <Globe2 className="w-4.5 h-4.5" />
              </div>
              <span className="group-hover:text-indigo-950 transition-colors">Phase 1: International Phase (Months 0–18)</span>
            </div>
            <ul className="text-xs sm:text-[13px] text-slate-800 font-normal space-y-1.5 leading-relaxed pt-1">
              <li>• File PCT request with Indian Patent Office as Receiving Office (RO/IN) or WIPO directly.</li>
              <li>• Choose an accredited International Searching Authority (ISA) such as IPO, EPO, or USPTO.</li>
              <li>• Receive the International Search Report (ISR) and Written Opinion assessing novelty and inventive step.</li>
              <li>• WIPO publishes the application at 18 months, making your priority accessible worldwide.</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="flex items-center gap-2.5 text-purple-700 font-semibold text-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
                <Scale className="w-4.5 h-4.5" />
              </div>
              <span className="group-hover:text-purple-950 transition-colors">Phase 2: National Phase (Up to Month 31)</span>
            </div>
            <ul className="text-xs sm:text-[13px] text-slate-800 font-normal space-y-1.5 leading-relaxed pt-1">
              <li>• Enter designated member countries of commercial interest (US, EU, UK, Japan, China, India, etc.).</li>
              <li>• Defer massive foreign attorney fees, translation costs, and national filing fees by 18+ months.</li>
              <li>• Leverage a positive ISR to expedite national patent grants across foreign patent registries.</li>
              <li>• Each national patent office issues sovereign patent rights enforceable in its territory.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Key Strategic Advantages of PCT */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Key Strategic Advantages of the PCT Route
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Strategic Parameter</th>
                <th className="py-3 px-4">Direct Paris Convention Route</th>
                <th className="py-3 px-4">WIPO PCT International Route</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Foreign Filing Deadline</td>
                <td className="py-3.5 px-4 text-rose-700 font-medium">Strict 12 months from Indian filing</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">30 or 31 months from Indian filing (+19 months)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Upfront Capital Requirement</td>
                <td className="py-3.5 px-4">Heavy upfront fees for each individual country</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Minimal upfront cost; defer major foreign expenses</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Prior Art &amp; Search Clarity</td>
                <td className="py-3.5 px-4">Uncertain until examined by foreign offices</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Authoritative International Search Report (ISR) upfront</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Commercial Market Testing</td>
                <td className="py-3.5 px-4">Only 12 months to test market &amp; raise capital</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Full 31 months to validate market demand &amp; secure VC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Section 39 Mandatory Compliance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Mandatory Section 39 Compliance for Indian Inventors
        </h2>
        <div className="p-4.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-[13px] text-amber-950 font-normal leading-relaxed">
          <strong className="font-semibold block mb-1 text-amber-950">Important Statutory Notice under Section 39:</strong>
          Any person resident in India who invents a technical innovation MUST first file a patent application in India at least 6 weeks before filing abroad, or must apply for prior written Foreign Filing Permission (FFP) from the Indian Patent Office (Form 25). Filing directly abroad or via PCT without FFP violates Section 39 and is punishable by imprisonment or fine under Section 118, in addition to rendering any corresponding Indian patent application liable to abandonment.
        </div>
      </section>

      {/* Section 6: FAQs Accordion */}
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
