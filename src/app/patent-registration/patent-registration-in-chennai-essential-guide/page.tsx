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
  Building2,
  MapPin,
  ChevronDown,
  Layers,
  BookOpen,
  Cpu,
  Car,
  Coins,
  TrendingUp,
} from "lucide-react";

export default function PatentRegistrationChennaiEssentialGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Where is the Indian Patent Office located in Chennai and what states fall under its jurisdiction?",
      a: "The Patent Office Chennai is located at the Intellectual Property Office Building, G.S.T. Road, Guindy, Chennai - 600032. Under the Patent Rules, 2003, it has territorial jurisdiction over patent applications originating from Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Karnataka, and the Union Territories of Puducherry and Lakshadweep.",
    },
    {
      q: "Can startups in Chennai get fast-track patent grants within 12 months?",
      a: "Yes. Startups recognized by DPIIT, MSME enterprises, and female applicants can file Form 18A for Expedited Examination under Rule 24C of the Patent Rules. Along with Form 9 (Early Publication), applications at the Chennai Patent Office have been examined and granted in as little as 8 to 12 months.",
    },
    {
      q: "Are patent examination hearings in Chennai conducted in person or online?",
      a: "Today, nearly all patent hearings before the Assistant Registrars and Controllers at the Chennai Patent Office are conducted electronically via secure video conferencing, allowing inventors and patent agents to attend hearings remotely without physical travel to Guindy.",
    },
    {
      q: "What types of industries in Chennai file the most patents?",
      a: "Chennai is known as the 'Detroit of Asia' for automotive tech and electric vehicles (EVs). High patent filing volumes also come from healthcare and biotechnology, defense and aerospace, semiconductor electronics, and deep-tech SaaS startups emerging from incubators like IIT Madras Research Park.",
    },
    {
      q: "What documents are required to file a patent application under the Chennai Patent Office?",
      a: "Mandatory documents include: (1) Form 1 (Application for Grant), (2) Form 2 (Provisional or Complete Specification with Claims and Drawings), (3) Form 3 (Statement & Undertaking under Section 8), (4) Form 5 (Declaration as to Inventorship), (5) Form 26 (Power of Attorney in favor of registered patent agent), and (6) Startup DPIIT Certificate or MSME Udyam for statutory fee subsidies.",
    },
  ];

  return (
    <PatentGuideLayout
      currentSlug="patent-registration-in-chennai-essential-guide"
      title="Patent Registration in Chennai: The Essential Guide for Innovators & Startups"
      breadcrumbLabel="Patent Registration in Chennai"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In today&apos;s intensely competitive, tech-driven business landscape, innovation is the ultimate engine of economic prosperity. In South India, <strong className="font-semibold text-slate-950">Chennai</strong> stands as a premier epicentre of high-tech manufacturing, automotive engineering, deep-tech research, healthcare biotechnology, and SaaS software corridors. Whether you are an entrepreneur at the IIT Madras Research Park, an EV startup in the industrial corridor, or a clinical researcher in Guindy, securing a registered patent is critical to maintaining exclusive ownership of your inventions.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This essential guide details the specific procedural steps, statutory fee schedules, and territorial jurisdiction rules of the <strong className="font-semibold text-slate-950">Patent Office Chennai</strong>. Learn how to conduct novelty audits, draft bulletproof specifications, leverage Startup India fast-track examination rules, and attend electronic Controller hearings to secure your 20-year monopoly.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Chennai Patent Office Profile</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Office Location</span>
            <strong className="font-semibold text-slate-950 text-[13px]">G.S.T. Road, Guindy, Chennai</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Territorial Jurisdiction</span>
            <strong className="font-semibold text-slate-950 text-[13px]">TN, KA, AP, TS, KL &amp; UTs</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Expedited Examination</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Form 18A (Rule 24C)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Why Patent Registration is Crucial in Chennai */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Patent Registration is Vital in Chennai&apos;s Industrial Landscape
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          As a global hub of manufacturing and industrial technology, Chennai is home to thousands of manufacturing units, software export firms, and premier research universities. Here is why securing your innovation with an official patent is indispensable:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Automotive &amp; EV Leadership
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Chennai manufactures over 35% of India&apos;s automotive components. Patents on battery thermal management, powertrain electronics, and sensor hardware safeguard OEM vendor contracts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Deep-Tech &amp; SaaS Clusters
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              From the OMR SaaS belt to IIT Madras Research Park, patents that demonstrate a technical effect on hardware architectures command premium venture capital valuations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Licensing to Global Giants
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Chennai&apos;s special economic zones and industrial parks provide direct avenues for domestic patent holders to license their proprietary technology to multinational corporations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Steps to Patent Registration under Chennai Jurisdiction */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Steps to Patent Registration in the Chennai Patent Office
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
                  Conduct Pre-Filing Prior-Art Search
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Screen InPASS, USPTO, and international databases. Confirm that your technology has not been published or claimed in prior scientific literature before drafting your application.
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
                  Drafting Specifications &amp; Lodging on IP India Portal
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Prepare Form 2 with full engineering diagrams and claim sets. File Form 1 electronically under Chennai territorial jurisdiction, securing an immediate CBR receipt with your Application Number.
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
                  Publication in Official Patent Journal (Normal vs Form 9)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Your application is published in the Patent Journal after 18 months. File Form 9 for early publication within 1 month to fast-track subsequent examination stages.
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
                  Substantive Examination (Form 18 / Form 18A Expedited)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Chennai startups, female inventors, and MSMEs can file Form 18A under Rule 24C to receive the First Examination Report (FER) within months instead of the normal multi-year examination queue.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                5
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Responding to FER Citations &amp; Video Hearing Grant
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Submit detailed technical rebuttals within 6 months. Attend electronic hearings via video conferencing with Chennai Assistant Controllers to secure your final Patent Grant Certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Statutory Concessions for Chennai Startups */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Statutory Fee Rebates for Chennai Innovators
        </h2>
        <div className="p-4.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-xs sm:text-[13px] text-emerald-950 font-normal leading-relaxed">
          <strong className="font-semibold block mb-1 text-emerald-950">Startup India &amp; MSME 80% Fee Discount:</strong>
          Recognized DPIIT startups and MSME Udyam holders in Chennai pay only <strong className="font-semibold text-emerald-900">₹1,600</strong> for Form 1 filing (compared to ₹8,000 for corporations) and only <strong className="font-semibold text-emerald-900">₹4,000</strong> for Request for Examination (compared to ₹20,000 for corporations). Merrafilings seamlessly links your Udyam or DPIIT certificate to unlock all statutory discounts.
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
