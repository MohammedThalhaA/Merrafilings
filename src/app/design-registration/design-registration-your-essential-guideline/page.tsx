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
  HelpCircle,
  FolderLock,
  Compass,
} from "lucide-react";

export default function DesignRegistrationYourEssentialGuidelinePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Section 15(2) of the Copyright Act and how does it affect design rights?",
      a: "Section 15(2) of the Indian Copyright Act, 1957 creates a critical intersection: copyright in any design capable of being registered under the Designs Act, but which has not been registered, ceases as soon as any article to which the design has been applied is reproduced more than 50 times by an industrial process. Therefore, failing to register your industrial design under the Designs Act 2000 strips away both copyright and design protection once commercial manufacturing crosses 50 units.",
    },
    {
      q: "Can a functional or mechanical feature be protected as a registered design?",
      a: "No. Section 2(d) of the Designs Act specifically excludes any mode or principle of construction or anything which is in substance a mere mechanical device. The design protection applies solely to the visual appeal judged solely by the eye (shape, configuration, pattern, ornament, or composition of lines or colours). Functional or technical mechanisms must be protected via Patents.",
    },
    {
      q: "Can I protect graphical user interfaces (GUIs) or digital screen layouts in India?",
      a: "Yes. Following landmark jurisprudence and the alignment of the Design Rules with the Locarno Classification (notably Class 14-04 for screen displays and icons), GUIs, animated software interfaces, and mobile app layout patterns applied to electronic devices can now be registered provided they are depicted on a visible display article.",
    },
    {
      q: "What constitutes 'prior publication' under the Designs Act, 2000?",
      a: "Prior publication occurs if the design has been made accessible to the public anywhere in India or internationally prior to the application filing date. This includes social media posts, e-commerce listings, YouTube demonstrations, crowdfunding campaigns (Kickstarter), trade show displays, or sales invoices. Absolute novelty requires zero public exposure before official filing.",
    },
    {
      q: "How many orthographic views are required during the application filing?",
      a: "The central Design Office in Kolkata strictly requires consistent representation sheets showing 7 standardized views: Perspective view, Front view, Back view, Left side view, Right side view, Top plan view, and Bottom view. All views must be photographed or rendered against a clean white neutral background without dimensional arrows or descriptive text.",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="design-registration-your-essential-guideline"
      title="Design Registration: Protect Your Original Creations & Essential Guidelines"
      breadcrumbLabel="Essential Guidelines"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In an era where copycat manufacturers can replicate product shapes, packaging silhouettes, and consumer electronics casings within weeks of launch, understanding the legal mechanics of the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> is an indispensable requirement for product designers, industrial manufacturers, and modern direct-to-consumer (D2C) brands.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial design registration delivers a legally enforceable 15-year statutory monopoly over the <strong className="font-semibold text-slate-950">aesthetic features</strong> of an article—including its 3D shape, configuration, surface patterns, and decorative lines. This guideline breaks down the statutory criteria under Sections 4 &amp; 5, contrasts design protection with copyright and trademarks, outlines the 5-stage registration pipeline, and details modern global trends including AI-assisted designs and GUI protections.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Protection Framework at a Glance</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Legislation</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Designs Act, 2000 &amp; Rules 2001</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Central Registration Office</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Patent Office (Design Wing), Kolkata</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">International Classification</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Locarno Classification (32 Classes)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Statutory Criteria for Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Statutory Criteria: What Qualifies for Design Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 2(d) and Section 4 of the Designs Act, 2000, an industrial design must fulfill four mandatory legal prerequisites to qualify for registration:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Sparkles className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Absolute Novelty</strong>
            </div>
            The design must be completely new and never before published, displayed, sold, or exhibited anywhere in India or internationally prior to the official application filing date.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Palette className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Originality of Character</strong>
            </div>
            The design must originate from the author’s creative skill and must not be an obvious combination or minor alteration of existing publicly known shapes or configurations.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Layers className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Applied to an Article</strong>
            </div>
            The design cannot exist in the abstract on paper; under Section 2(a), it must be applied to a manufactured article or substance by an industrial or chemical process.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Scale className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Eye Appeal (Non-Functional)</strong>
            </div>
            The visual features must appeal directly to and be judged solely by the human eye. Any feature dictated solely by mechanical function or engineering utility is excluded.
          </div>
        </div>
      </section>

      {/* Section 2: Comparative Analysis - Design vs Copyright vs Trademark */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Comparative Matrix: Design vs. Copyright vs. Trademark
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Creators often confuse industrial design rights with artistic copyright or trademark protection. The table below delineates the statutory differences under Indian IP jurisprudence:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Feature Parameter</th>
                <th className="p-3">Industrial Design</th>
                <th className="p-3">Copyright Protection</th>
                <th className="p-3">Trademark Registration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Governing Statute</td>
                <td className="p-3">Designs Act, 2000</td>
                <td className="p-3">Copyright Act, 1957</td>
                <td className="p-3">Trade Marks Act, 1999</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Subject Matter Protected</td>
                <td className="p-3">Aesthetic shape, ornamentation, surface contour of manufactured article</td>
                <td className="p-3">Original literary, artistic, dramatic, or musical expressions</td>
                <td className="p-3">Brand names, logos, slogans, 3D shapes acting as source identifiers</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Industrial Exploitation Limit</td>
                <td className="p-3">Unlimited commercial scale (primary intended vehicle)</td>
                <td className="p-3 text-red-600 font-medium">Lapses under Sec 15(2) after 50 industrial reproductions</td>
                <td className="p-3">Unlimited commercial scale in commerce</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Statutory Duration</td>
                <td className="p-3 text-emerald-700 font-medium">10 Years + 5 Year Extension (Max 15 Years)</td>
                <td className="p-3">Lifetime of Author + 60 Years</td>
                <td className="p-3">10 Years (Renewable indefinitely every 10 years)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Registration Requirement</td>
                <td className="p-3">Mandatory prior registration; no common law rights</td>
                <td className="p-3">Automatic on creation; registration voluntary</td>
                <td className="p-3">Registration recommended; common law passing-off available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The 5-Step Design Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The 5-Step Design Registration Roadmap
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings manages the complete end-to-end design prosecution before the Patent Office Design Wing in Kolkata:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Comprehensive Prior Art Design Search</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  We audit both Indian and international design databases (WIPO Hague Express, DesignView) across your Locarno class to ensure no identical or confusingly similar design has been registered or publicly disclosed.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Standardized 7-Angle Representation Drafting</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Our patent draughtsmen format your CAD models into pristine orthographic views (Front, Back, Left, Right, Top, Bottom, and Isometric Perspective) on high-contrast white backgrounds adhering strictly to Design Rules 14 and 15.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Form 1 Electronic Lodgment &amp; Priority Claim</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Lodgment of statutory Form 1 on the IP India e-filing portal along with statement of novelty, priority documents under the Paris Convention (if applicable), and MSME/Startup fee concession certificates.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">First Examination Report (FER) Resolution</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  The Controller of Designs conducts formality checks and substantive novelty audits. If an objection is raised regarding representation shading or classification, Merrafilings attorneys submit legal counter-statements within the statutory 6-month window.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Journal Publication &amp; Certificate Issuance</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Upon acceptance, the design is published in the official Patent Office Designs Journal. The Controller issues the official seal and Registration Certificate, conferring exclusive rights retroactive to the original filing date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Global Trends in Industrial Design */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Emerging Global Trends in Design Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial design protection is rapidly expanding beyond mechanical sheet metal and traditional furniture into digital ecosystems:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Hague International Harmonization:</strong>
            Standardization across international trade blocs allows multinational enterprises to register aesthetic forms across over 90 member countries through a single centralized application.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">AI-Assisted Design Audits:</strong>
            Patent offices globally are employing artificial intelligence visual search engines to automatically compare 3D mesh files against hundreds of thousands of prior designs, making novelty vetting far more rigorous.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Micro-Component Protection:</strong>
            Registrations are increasingly sought not just for finished products but for discrete proprietary components—such as distinct earbuds, watch crowns, drone propeller clips, and luxury bottle closures.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Common queries answered by Merrafilings patent and design attorneys:
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
