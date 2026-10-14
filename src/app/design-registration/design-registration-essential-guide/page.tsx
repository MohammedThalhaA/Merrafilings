"use client";

import React, { useState } from "react";
import Link from "next/link";
import DesignGuideLayout from "@/components/DesignGuideLayout";
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
  Palette,
  ChevronDown,
  Layers,
  BookOpen,
  Globe2,
  Coins,
  TrendingUp,
} from "lucide-react";

export default function DesignRegistrationEssentialGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the primary difference between design registration and patent protection in India?",
      a: "Design registration under the Designs Act, 2000 protects only the aesthetic, visual appearance of an article (its 3D shape, configuration, or 2D pattern/ornamentation judged solely by the eye). It does not protect functional mechanics or technical operations. In contrast, a patent under the Patents Act, 1970 protects the technical, functional mechanism or chemical process of an invention.",
    },
    {
      q: "Can a registered industrial design be renewed beyond 15 years in India?",
      a: "No. Under Section 11 of the Designs Act, 2000, industrial design copyright is initially granted for 10 years and can be extended by a further 5 years (total 15 years) upon filing Form 4 before the end of the initial 10-year term. After 15 years, the design enters the public domain and cannot be renewed or extended under Indian law.",
    },
    {
      q: "What is the Hague System for international design registration?",
      a: "The Hague System, administered by the World Intellectual Property Organization (WIPO), allows design owners to obtain protection in over 90 member countries through a single international application filed in one language with one set of fees, avoiding the complexity of filing separate applications in each foreign territory.",
    },
    {
      q: "What happens if I forget to pay the Form 4 renewal fee before the 10th year expires?",
      a: "If the 5-year extension fee is not paid before the 10th year expiration, the design lapses. However, under Section 12 and Section 13 of the Act, the proprietor can file an application for restoration of the lapsed design within 6 months from the date of lapse, accompanied by Form 4, overdue fees, and a statement showing the failure to pay was unintentional.",
    },
    {
      q: "Are the representations and drawings strictly scrutinized by the Kolkata Design Office?",
      a: "Yes. The central Design Office in Kolkata rejects applications with unclear, shaded, or incomplete drawings. Applicants must submit consistent, high-contrast orthographic views (perspective, front, rear, top, bottom, left, and right elevations) against a neutral, plain white background without dimensional markings or text watermarks.",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="design-registration-essential-guide"
      title="Design Registration: Essential Guide and Latest Insights"
      breadcrumbLabel="Essential Guide & Insights"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In today&apos;s intensely visual consumer economy, product design often dictates consumer purchasing choices long before technical specifications are evaluated. The distinctive curve of a perfume bottle, the ergonomic contour of an electric scooter, or the sleek silhouette of a consumer electronics device all represent significant creative capital. Design registration under the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> provides the legal fortress needed to shield your aesthetic innovations from unauthorized market duplication.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This essential guide explores the core principles of industrial design registration in India. Discover how design protection differs from patents and copyright, understand the four-step registration roadmap administered by the central Kolkata Design Office, examine statutory remedies against piracy, and review international filing mechanisms under the WIPO Hague System.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Framework Baseline</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Legislation</span>
            <strong className="font-semibold text-slate-950 text-[13px]">The Designs Act, 2000</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Maximum Exclusivity</span>
            <strong className="font-semibold text-slate-950 text-[13px]">15 Years (10 + 5 Extension)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Central Registry Office</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Patent Office, Kolkata</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Understanding Design Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Industrial Design Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 2(d) of the Designs Act, 2000, a &apos;design&apos; means only the features of shape, configuration, pattern, ornament, or composition of lines or colours applied to any article—whether in two-dimensional or three-dimensional form—by any industrial process or means, which in the finished article appeal to and are judged solely by the eye.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Protection Against Imitation
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Registered designs are legally protected nationwide, deterring counterfeiters and providing grounds for immediate court injunctions under Section 22.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Brand Differentiation
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Distinctive physical contours establish an immediate visual signature in consumer minds, fostering enduring brand recall and customer loyalty.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Monetization &amp; Licensing
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Design registrations can be licensed, franchised, or assigned to third-party manufacturers, creating high-margin recurring royalty streams.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 4-Step Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 4-Step Design Registration Roadmap
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
                  Step 1: Conduct a Comprehensive Design Novelty Search
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Screen the official IP India Design Registry database and international design records to confirm that no identical or deceptively similar designs have been published prior to your filing date.
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
                  Step 2: Prepare Standard 7-Angle Representation Sheets
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Prepare orthographic CAD drawings or photographs depicting the design from all standard viewpoints: Perspective, Front, Rear, Top Plan, Bottom Plan, Left Side, and Right Side Elevations on a neutral plain white background.
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
                  Step 3: Online Application Lodgment (Form 1)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  File Form 1 on the IP India portal, classify the product under the international Locarno Classification system (Classes 1 to 32), endorse the mandatory Statement of Novelty and disclaimers, and generate your official Application Number.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Step 4: Examination, Journal Publication &amp; Certificate Issuance
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The Kolkata Design Wing conducts formality and substantive examinations. Once accepted, the design is published in the official Design Journal and the Controller General issues your Design Registration Certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Global Perspective & The Hague System */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Global Protection and the WIPO Hague System
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          For Indian enterprises exporting consumer goods, fashion apparel, or automotive components overseas, international design protection is essential:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Paris Convention 6-Month Priority:</strong>
            Indian applicants have a strict 6-month window from their Indian filing date to file corresponding foreign design applications abroad while retaining their Indian priority date.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">The WIPO Hague System:</strong>
            Allows centralized filing of up to 100 industrial designs across 90+ member countries in a single application, dramatically lowering global filing and maintenance costs.
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
    </DesignGuideLayout>
  );
}
