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
  TrendingUp,
  Coins,
  Cpu,
} from "lucide-react";

export default function ImportanceOfDesignRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Why is design registration considered one of the fastest IP grants in India?",
      a: "Unlike patent applications which take 2 to 4 years to examine, the central Design Office in Kolkata processes industrial design filings much faster. Formality checks typically take 2 to 4 weeks, and substantive examination is conducted within 2 to 3 months. In most uncontested cases, official Design Certificates are issued in just 3 to 6 months.",
    },
    {
      q: "Can I protect a product packaging design under the Designs Act 2000?",
      a: "Yes. Product packaging, cosmetic bottles, FMCG beverage cartons, and container shapes are among the most frequently registered designs in India under Locarno Class 09 (Packages and Containers for the Transport or Handling of Goods). Distinctive packaging shapes can also be co-protected as trade dress under trademark law.",
    },
    {
      q: "What remedies are available if a competitor manufactures a pirated copy of my design?",
      a: "Under Section 22 of the Designs Act, 2000, the registered owner can file a civil suit in a District Court or High Court to obtain: (1) an immediate interim injunction halting production and sales, (2) statutory damages up to ₹50,000 per infringement recoverable as a civil debt without proving actual financial loss, (3) actual damages and surrender of all profits, and (4) court-supervised destruction of infringing dies, moulds, and inventory.",
    },
    {
      q: "Can I register a design after launching my product in the market or displaying it online?",
      a: "No. India adheres to the strict legal doctrine of 'Absolute Novelty'. Under Section 4, a design must not have been disclosed to the public anywhere in India or abroad by prior publication, marketing, public exhibition, or commercial sale before the filing date. Any prior public disclosure permanently destroys novelty and invalidates the registration.",
    },
    {
      q: "Does a single design registration cover multiple products in different classes?",
      a: "No. Under Section 6 of the Designs Act, an application can be filed for only one class of goods under the Locarno Classification. If the same design is applied to articles across multiple classes (e.g. automotive dashboard in Class 12 and home audio console in Class 14), separate applications must be lodged for each class.",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="importance-of-design-registration"
      title="Everything You Need to Know About Design Registration"
      breadcrumbLabel="Importance & Benefits"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In an intensely competitive modern marketplace where products often share identical internal components and technical architectures, <strong className="font-semibold text-slate-950">design aesthetics</strong> represent the primary commercial differentiator. Consumers gravitate toward elegance, ergonomic comfort, and visually arresting contours. Registering your industrial design under the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> provides the legal bedrock required to transform unique aesthetic creations into exclusive corporate assets.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide unpacks everything you need to know about industrial design registration in India. Explore why design exclusivity is crucial for modern brand equity, review the 5-phase registration process from novelty audits to certificate issuance, examine emerging trends in 3D digital file representation, and learn how to enforce your rights against counterfeiters.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Design Protection Essentials</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Standard Grant Timeline</span>
            <strong className="font-semibold text-slate-950 text-[13px]">3 to 6 Months (Fast-Track)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Damages</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Up to ₹50,000 / Infringement</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Initial Validity</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">10 Years (+5 Year Form 4 Extension)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Why is Design Registration Important? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why is Industrial Design Registration Crucial?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Securing statutory design registration delivers tangible commercial, legal, and economic dividends:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. 15-Year Market Exclusivity:</strong>
            Gain an exclusive statutory monopoly across India to manufacture, market, and sell articles embodying your aesthetic form without fear of copycat dilution.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Strong Legal Enforcement Framework:</strong>
            Unlike unregistered creations, a registered design provides prima facie evidence of ownership in court, enabling immediate ad-interim injunctions.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Enhanced Enterprise Valuation:</strong>
            Design registrations are recognized as balance-sheet intangible assets, serving as collateral for credit and boosting startup enterprise valuation during funding rounds.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Licensing &amp; Royalty Revenue:</strong>
            Monetize your design by granting exclusive or non-exclusive commercial licenses to domestic and global manufacturers in exchange for recurring royalties.
          </div>
        </div>
      </section>

      {/* Section 2: 5-Phase Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 5-Phase Design Registration Procedure
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Phase 1: Pre-Filing Novelty Search (Weeks 1–2)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Conduct an exhaustive search on the IP India Design Registry database to confirm that the design has not been previously published or registered in India or abroad.
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
                  Phase 2: Representation Preparation &amp; Form 1 Lodgment (Day 1)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Draft the Statement of Novelty and disclaimers. Prepare standard 7-angle CAD views (perspective, front, rear, top, bottom, left, right) and submit Form 1 electronically.
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
                  Phase 3: Formality Check &amp; Substantive Examination (Months 1–3)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The Kolkata Design Wing verifies document compliance and conducts substantive examination for individual character and aesthetic novelty. Rebut any formality objections promptly.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
                  Phase 4: Design Journal Publication &amp; Public Notice (Month 4)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  Upon passing examination, the accepted design representation is officially published in the Design Journal, putting the public and trade rivals on formal legal notice.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                5
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
                  Phase 5: Registration Certificate Issuance (Months 5–6)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  The Controller General issues the official Design Registration Certificate. Legal protection takes retroactive effect from the original filing date for 10 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Emerging Developments */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Emerging Developments in Design Protection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Digital 3D CAD Filings
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Modern registries now accommodate 3D CAD files (STEP, IGES, STL) to capture complex geometric contours and curved surfaces with sub-millimeter precision.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Hague System Global Reach
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              International harmonization simplifies cross-border design filings across 90+ nations via a single WIPO application, cutting multi-country legal expenses.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-1 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Sustainable &amp; Green Product Design
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Innovative biodegradable packaging, reusable modular components, and energy-efficient product configurations receive prioritized examination.
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
    </DesignGuideLayout>
  );
}
