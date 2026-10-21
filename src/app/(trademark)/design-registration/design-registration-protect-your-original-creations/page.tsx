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
  MapPin,
  HelpCircle,
  Building2,
} from "lucide-react";

export default function DesignRegistrationProtectYourOriginalCreationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the official statutory government fee for filing an industrial design in India?",
      a: "Under the First Schedule of the Design Rules, official government filing fees on Form 1 are heavily subsidized for small businesses: ₹1,000 for Natural Persons, Startups (DPIIT recognized), and MSMEs (holding Udyam registration), compared to ₹4,000 for Large Corporate Entities. E-filing provides an additional 10% fee reduction compared to physical paper lodgment.",
    },
    {
      q: "Can I claim priority from an earlier design application filed in the USA, EU, or Japan?",
      a: "Yes. Under Section 44 of the Designs Act, 2000 and the Paris Convention for the Protection of Industrial Property, any applicant who has filed a design application in a reciprocating convention country has a strict 6-month priority window. Filing in India within 6 months preserves the original foreign priority date, defeating any intervening third-party publications.",
    },
    {
      q: "How does Section 22 protect my design against industrial piracy?",
      a: "Section 22 makes it illegal for any unauthorized person to apply the registered design or any fraudulent or obvious imitation to any article for sale. The registered owner can institute civil proceedings to recover statutory liquidated damages up to ₹50,000 per violation from the infringer as a contract debt, or claim an account of profits and seek permanent injunctions.",
    },
    {
      q: "What are the rules regarding dashed and solid lines in representation drawings?",
      a: "In standardized representation sheets, solid lines represent the proprietary aesthetic features for which exclusive monopoly is claimed. Dashed or broken lines are strictly utilized to indicate disclaimed environment, background context, or functional connecting components that form part of the article but are not claimed as part of the novel ornamental design.",
    },
    {
      q: "Can a registered design be renewed after the initial 10-year period expires?",
      a: "Yes. Under Section 10(2) of the Designs Act, the initial 10-year term can be extended by an additional 5 years (bringing total protection to 15 years) by submitting Form 4 along with the statutory renewal fee (₹2,000 for MSMEs/Startups, ₹8,000 for Large Entities) before the expiry of the initial 10-year period.",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="design-registration-protect-your-original-creations"
      title="Design Registration: Protect Your Original Creations"
      breadcrumbLabel="Protect Original Creations"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In an aggressive manufacturing ecosystem, when a product achieves market success, competitors routinely duplicate its external form, casing contours, and visual proportions within weeks. Without formal statutory protection under the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong>, innovators have virtually zero legal recourse against copycats selling identical-looking clones at lower prices.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Registering your industrial design legally insulates your creative investment, providing an unassailable <strong className="font-semibold text-slate-950">15-year statutory monopoly</strong> across India. This guide examines the strategic blueprint for shielding your creations, details the statutory fee schedule with MSME/Startup incentives, explains representation drafting rules, and explores regional industrial applications across India’s manufacturing corridors.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Economic &amp; Enforcement Benefits</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">MSME / Startup Govt Fee</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">₹1,000 (75% Official Rebate)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Exclusivity</span>
            <strong className="font-semibold text-slate-950 text-[13px]">15 Years (10 + 5 Form 4)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Piracy Injunction</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">District &amp; High Court Jurisdiction</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The Commercial Case for Protection */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why You Must Legally Protect Original Product Aesthetics
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial design registration is not merely administrative paperwork—it is an aggressive defensive moat and a valuable commercial weapon:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Deterrence Against Counterfeits &amp; Clones:</strong>
            Displaying &quot;Registered Design No. XXXXXX&quot; on packaging and promotional materials puts competitors and contract manufacturers on notice, drastically reducing unauthorized duplication.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Section 22 Piracy Protection:</strong>
            Indian courts have established that visual imitation constitutes actionable piracy. Claimants can seize infringing moulds, dies, and stock without proving fraudulent intent.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Premium Pricing &amp; Brand Equity:</strong>
            A unique aesthetic silhouette commands higher consumer pricing power and prevents your brand from sinking into commoditized price wars.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Licensing &amp; Technology Transfer:</strong>
            Registered designs can be licensed regionally or internationally, generating passive royalty cash flows while retaining underlying title ownership.
          </div>
        </div>
      </section>

      {/* Section 2: Statutory Fee Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Official Government Fee Schedule (Design Rules, 2001)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Ministry of Commerce and Industry grants substantial subsidies to encourage individual creators, startups, and MSME manufacturing enterprises:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Statutory Stage / Form</th>
                <th className="p-3">Natural Person / Individual</th>
                <th className="p-3">Startup (DPIIT) / Small Entity (MSME)</th>
                <th className="p-3">Large Corporate Entity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Form 1: Design Application Filing (e-Filing)</td>
                <td className="p-3 text-emerald-700 font-medium">₹1,000</td>
                <td className="p-3 text-emerald-700 font-medium">₹1,000</td>
                <td className="p-3 font-medium">₹4,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Form 4: 5-Year Extension of Copyright in Design</td>
                <td className="p-3 text-emerald-700 font-medium">₹2,000</td>
                <td className="p-3 text-emerald-700 font-medium">₹2,000</td>
                <td className="p-3 font-medium">₹8,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Form 5: Restoration of Lapsed Design (if filed in 1 yr)</td>
                <td className="p-3 text-emerald-700 font-medium">₹1,000</td>
                <td className="p-3 text-emerald-700 font-medium">₹1,000</td>
                <td className="p-3 font-medium">₹4,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Form 24: Claiming MSME / Startup Status</td>
                <td className="p-3 text-emerald-700 font-medium">Nil</td>
                <td className="p-3 text-emerald-700 font-medium">Nil</td>
                <td className="p-3 font-medium">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Digital CAD & Drawing Specifications */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Technical Drafting Standards for Design Applications
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Over 60% of First Examination Reports (FER) issue objections due to improper representation sheets. Adhering to strict Patent Office drafting guidelines avoids costly prosecution delays:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Standard 7-View Orthographic Layout:</strong>
            Sheets must include: Perspective View, Front Elevation, Rear Elevation, Left Side, Right Side, Top Plan, and Bottom Plan. All angles must depict identical proportions.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Pristine Neutral Background:</strong>
            No environmental clutter, human hands, tools, or drop shadows are permitted. The product must be cleanly isolated against a pure white background.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">No Dimensional or Descriptive Text:</strong>
            Dimension lines, measurements, millimeter callouts, trade names, and promotional watermarks are strictly forbidden on the representation sheets.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Novelty Statement Precision:</strong>
            The application must specify whether novelty resides in the overall shape, surface ornamentation, pattern, or specific configuration of the article.
          </div>
        </div>
      </section>

      {/* Section 4: Regional Industrial Hubs in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Industry Applications Across India’s Manufacturing Corridors
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial design registrations are heavily leveraged across specialized state manufacturing clusters:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>Gujarat Hub</span>
            </div>
            Textile prints in Surat, ceramic tiles &amp; sanitaryware in Morbi, brass hardware in Jamnagar, and precision valve bodies in Rajkot.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>Karnataka Hub</span>
            </div>
            Consumer electronics, EV battery enclosures, IoT wearables, medical device casings, and drone airframes in Bangalore and Mangalore.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tamil Nadu Hub</span>
            </div>
            Automotive lighting assemblies in Chennai, pump casings in Coimbatore, and specialized leather footwear designs in Ambur.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>Maharashtra Hub</span>
            </div>
            Luxury FMCG cosmetics containers, pharmaceutical blister packs, high-end furniture, and electrical appliances in Mumbai and Pune.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Clear, authoritative answers from Merrafilings patent draughtsmen and attorneys:
        </p>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-3 text-slate-950 font-medium text-xs sm:text-[13.5px] hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-indigo-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed border-t border-slate-100 bg-slate-50/40">
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
