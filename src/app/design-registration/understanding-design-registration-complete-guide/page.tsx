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
  Cpu,
  Monitor,
  HelpCircle,
  Globe2,
  Lock,
} from "lucide-react";

export default function UnderstandingDesignRegistrationCompleteGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Can a software mobile app interface or website screen be registered as an industrial design in India?",
      a: "Yes. Following landmark rulings (such as the Calcutta High Court in the Amazon case) and the adoption of the 10th edition of the Locarno Classification, Graphical User Interfaces (GUIs), animated icon sequences, and screen displays are registrable under Class 14-04, provided they are embodied and visually depicted on a designated hardware display device (e.g. mobile phone, tablet, or monitor screen).",
    },
    {
      q: "What is the fatal consequence of premature product disclosure before filing?",
      a: "Unlike patent law in some foreign jurisdictions that offer a 12-month grace period, Indian design law enforces strict 'Absolute Novelty'. If an inventor posts photos on Instagram, pitches on Shark Tank, or publishes a Kickstarter campaign before Form 1 is officially stamped, the design is legally deemed published. Any competitor can subsequently petition to cancel the registration under Section 19.",
    },
    {
      q: "What grounds can competitors use to cancel my registered design under Section 19?",
      a: "Under Section 19 of the Designs Act, any interested person can file a petition before the Controller or High Court to cancel a registration on grounds that: (1) it was previously registered in India, (2) it was published in India or abroad prior to filing date, (3) it lacks novelty or original character, (4) it is not a design under Section 2(d), or (5) it contains scandalous or obscene matter.",
    },
    {
      q: "How does the WIPO Hague System work for international industrial designs?",
      a: "The Hague System allows creators to file a single international application through WIPO in one language with one set of fees, securing design protection across over 90 contracting member countries. While India is actively working toward full accession to the Geneva Act of the Hague Agreement, Indian applicants currently utilize Paris Convention 6-month priority filings to secure global protection.",
    },
    {
      q: "How long does the entire design registration examination take from filing to grant?",
      a: "In India, the industrial design examination process is one of the fastest in the world. The central Design Office in Kolkata typically issues the First Examination Report (FER) within 1 to 3 months. Once objections (if any) are complied with, the Certificate of Registration is customarily issued within 4 to 7 months from filing.",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="understanding-design-registration-complete-guide"
      title="Understanding Design Registration: A Complete Guide for Innovators"
      breadcrumbLabel="Understanding Design Registration"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In product commercialization, engineering and technical utility get products to work, but <strong className="font-semibold text-slate-950">design aesthetics</strong> drive consumer purchasing decisions. From the ergonomic curvature of a high-end steering wheel to the distinctive minimalist silhouette of a smart blender or wearable health band, visual identity defines market distinction.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial design law under the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> provides product developers with an impenetrable legal perimeter. This in-depth guide covers the statutory mechanisms of visual protection, explores how consumer perception defines design disputes, provides a practical roadmap for protecting digital GUI interfaces under Class 14-04, and details best practices to prevent inadvertent novelty destruction.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Strategic Takeaways for Innovators</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Novelty Standard</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Absolute Global Novelty (Sec 4)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Digital Design Class</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Locarno Class 14-04 (GUIs &amp; Icons)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Average Grant Turnaround</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">4 to 7 Months Total</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The Anatomy of a Protectable Design */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Anatomy of a Protectable Industrial Design
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 2(d) of the Designs Act, 2000, protection is confined to the visual features applied to an article. The statutory elements include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Shape &amp; 3D Configuration:</strong>
            The external volumetric form, contours, bevels, ergonomic curves, and geometric silhouette that define the object in three dimensions.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Surface Patterns &amp; Textures:</strong>
            Two-dimensional decorative surface reliefs, knurling patterns on metal handles, textured grips on tools, or tactile geometrical grids.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Ornamental Line Compositions:</strong>
            Decorative line work, engraving, or aesthetic border compositions stamped, etched, or printed onto the article.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Unique Colour Combinations:</strong>
            Distinctive color splits or aesthetic chromatic arrangements applied to the surface, provided they are judged solely by visual appeal.
          </div>
        </div>
      </section>

      {/* Section 2: Protecting Digital Designs & Graphical User Interfaces (GUIs) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Protecting Digital Designs, GUIs &amp; Screen Layouts
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          As software applications and digital interfaces dominate consumer touchpoints, protecting screen ergonomics and digital layouts has become essential:
        </p>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-indigo-950 font-semibold text-sm">
            <Monitor className="w-4 h-4 text-[#5C3BFF]" />
            <span>Registration of GUIs under Locarno Class 14-04</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
            The Indian Patent Office previously resisted registering pure digital software screens because they lacked a permanent physical article. However, following judicial clarification by the High Court of Calcutta, GUIs are registrable when claimed in conjunction with a display device (such as an automotive infotainment screen, mobile phone display, smart kiosk, or medical telemetry screen).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-normal text-slate-900">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-950 font-semibold block mb-1">Hardware Context Requirement:</strong>
              The representation sheets must depict the GUI inside dashed or solid outlines of the underlying hardware display screen.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-950 font-semibold block mb-1">Animated Interface Sequences:</strong>
              Animated transitions, dynamic menus, and interactive states can be registered by submitting sequential frame-by-frame orthographic sheets.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Best Practices for Innovators */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Proactive Best Practices for Protecting Your Design Pipeline
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Avoid common legal traps that invalidate design registrations before manufacturing begins:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#5C3BFF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Enforce Strict Confidentiality (NDAs)</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Never show prototypes to third-party manufacturers, mould-makers, distributors, or investors without an executed Non-Disclosure Agreement. Private disclosures under an NDA do not legally constitute public publication under Section 4.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#5C3BFF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">File Form 1 Prior to Any Market Launch</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Always ensure Form 1 is officially stamped and assigned a filing number on the IP India e-filing portal before printing marketing brochures, launching digital campaigns, or shipping sample production batches.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <Globe2 className="w-5 h-5 text-[#5C3BFF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Coordinate International Paris Convention Filings</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Track the strict 6-month international convention deadline. If your product is destined for North America, Europe, or the UK, file counterpart design applications within 6 months of your Indian priority date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Regional Adoption in Emerging Industrial Corridors */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Industrial Design Adoption in Emerging Regional Hubs
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Beyond major metros, design protection is driving competitive industrial growth across emerging enterprise clusters:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1">Rourkela Steel Corridor:</strong>
            Protecting specialized heavy industrial structural shapes, engineered pipe fittings, and fabricated construction hardware.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1">Manipur &amp; North East:</strong>
            Handicraft exporters registering bamboo architectural fixtures, geometric cane weaves, and handloom textile surface patterns.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1">Jodhpur Wooden Furniture:</strong>
            Artisanal furniture exporters shielding distinctive colonial and rustic wooden joinery aesthetics against international piracy.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1">Mangalore Coastal Hub:</strong>
            Marine hardware manufacturers, polymer packaging firms, and electrical switchgear producers securing proprietary housing moulds.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Got questions about design law? Merrafilings patent and design specialists provide clear answers:
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
