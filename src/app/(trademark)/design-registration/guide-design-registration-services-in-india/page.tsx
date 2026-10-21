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
  Users2,
  Briefcase,
  HelpCircle,
  Check,
} from "lucide-react";

export default function GuideDesignRegistrationServicesInIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Why should an enterprise engage a professional design consultant instead of filing directly?",
      a: "Over 65% of self-filed design applications receive First Examination Report (FER) objections or face outright rejection due to improper representation drafting (e.g. wrong angles, shadows, dimensional arrows), misclassification under the Locarno system, or vague novelty statements. A professional IP firm ensures flawless representation sheets, performs prior art clearance searches, handles controller hearings under Rule 18, and prevents costly invalidation.",
    },
    {
      q: "How does Merrafilings handle objections raised in the First Examination Report (FER)?",
      a: "When the Kolkata Design Wing issues an FER, our patent attorneys analyze each cited objection (whether related to prior art novelty or technical representation defects). We draft a comprehensive legal counter-statement, prepare amended representation sheets if necessary, and file the formal compliance response within the statutory 6-month period (extendable by 3 months via Form 18).",
    },
    {
      q: "What is the difference between a Design Registration and a Design Patent?",
      a: "In India, the legal term is 'Industrial Design Registration' governed by the Designs Act, 2000. In the United States and several other jurisdictions, this exact same protection is formally called a 'Design Patent'. Both protect the novel, non-functional aesthetic appearance, shape, configuration, and surface ornamentation of an article.",
    },
    {
      q: "Can a registered design be co-protected with Trademark and Copyright?",
      a: "Yes. An integrated IP strategy provides multi-layered defense: (1) Industrial Design Registration protects the 3D physical shape and contour of the product, (2) Trademark protects brand names, logos, and distinctive packaging trade dress, and (3) Copyright safeguards promotional catalog photography, packaging graphic illustrations, and software code.",
    },
    {
      q: "What documents must an applicant provide to Merrafilings to commence design filing?",
      a: "The applicant needs to provide: (1) 3D CAD files or clear high-resolution multi-angle photographs of the prototype, (2) Applicant details (Name, Address, Nationality, Legal Entity type), (3) Udyam MSME Certificate or DPIIT Startup Certificate (to claim the 75% government fee subsidy), and (4) Executed Form 21 (Power of Attorney authorizing Merrafilings to represent before the Controller).",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="guide-design-registration-services-in-india"
      title="Comprehensive Guide to Design Registration Services in India"
      breadcrumbLabel="Services Guide"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Navigating the statutory requirements of the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> requires a meticulous blend of legal precision, technical drafting expertise, and deep procedural familiarity with the central Patent Office Design Wing in Kolkata. A single defect in orthographic perspective or an inaccurate novelty disclaimer can trigger procedural delays or permanently jeopardize your 15-year statutory exclusivity.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide outlines the end-to-end scope of professional design registration services in India. Discover how certified IP consultants conduct prior art audits, draft standardized 7-angle representation sheets, resolve First Examination Report (FER) objections, and orchestrate a synchronized IP moat combining design, trademark, and copyright rights.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Professional Service Spectrum</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Prior Art Clearance</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Indian &amp; Global Locarno Databases</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Representation Drafting</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">7-View CAD Orthographic Layouts</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Representation</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">Controller Hearings (Rule 18)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: End-to-End Professional Service Scope */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. End-to-End Scope of Professional Design Services
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          When engaging Merrafilings, your industrial design prosecution is managed across six seamless phases:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Locarno Classification &amp; Novelty Clearance:</strong>
            Pinpointing the exact Locarno class (from Class 01 food products to Class 32 graphic symbols) and vetting databases to ensure absolute novelty before incurring government expenses.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Certified Draughtsman Representation Sheets:</strong>
            Converting client 3D STEP/IGES models or high-resolution studio photos into standardized 7-view orthographic sheets complying with Rule 14 dimensions and margin specifications.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Form 1 Electronic Lodgment &amp; Statement of Novelty:</strong>
            Drafting the legally binding novelty endorsement claim and filing Form 1 with Form 21 (Power of Attorney) on the IP India portal.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. FER Analysis &amp; Objection Resolution:</strong>
            Crafting formal legal replies to Examiner reports, attending video-conference hearings before the Assistant Controller of Designs if contested, and securing official acceptance.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">5. Design Journal Monitoring &amp; Certification:</strong>
            Tracking weekly Patent Office Design Journals, verifying publication entry accuracy, and transmitting the official sealed Registration Certificate.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">6. Post-Grant Form 4 Extension Management:</strong>
            Automated calendar docketing to file Form 4 prior to the 10th anniversary, guaranteeing seamless continuation of exclusive rights up to year 15.
          </div>
        </div>
      </section>

      {/* Section 2: Associated Costs & Fee Transparency */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Complete Cost Breakdown &amp; Budgeting
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Understanding the distinction between official statutory government fees and professional legal assistance ensures predictable IP budgeting:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Cost Component</th>
                <th className="p-3">Natural Person / MSME / Startup</th>
                <th className="p-3">Large Corporate Entity</th>
                <th className="p-3">Professional Service Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Statutory Filing Fee (Form 1)</td>
                <td className="p-3 text-emerald-700 font-medium">₹1,000 (Govt Fee)</td>
                <td className="p-3 font-medium">₹4,000 (Govt Fee)</td>
                <td className="p-3">Official e-filing fee paid directly to Controller General</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Prior Art Design Clearance</td>
                <td className="p-3" colSpan={2}>Included in Merrafilings Package</td>
                <td className="p-3">Indian &amp; WIPO database search with written novelty opinion</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">7-View CAD Representation Sheets</td>
                <td className="p-3" colSpan={2}>Included in Merrafilings Package</td>
                <td className="p-3">Patent draughtsman standard orthographic views preparation</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">FER Objection Prosecution</td>
                <td className="p-3" colSpan={2}>Transparent Case-to-Case Assistance</td>
                <td className="p-3">Drafting legal rejoinder, amended drawings, and Controller hearing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Holistic IP Protection Strategy */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Building an Integrated Intellectual Property Moat
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Leading enterprises do not rely on a single IP category. Merrafilings coordinates a synchronized 3-way protection strategy:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <Palette className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Industrial Design</strong>
            </div>
            Locks the 3D aesthetic shape, contour, container silhouette, and ergonomic curves against physical copycats and duplicate moulds.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <ShieldCheck className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Trademark / Trade Dress</strong>
            </div>
            Protects brand names, logos, distinctive packaging color schemes, and product trade dress serving as commercial source identifiers.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-2 mb-2 text-[#5C3BFF]">
              <BookOpen className="w-4 h-4" />
              <strong className="font-semibold text-indigo-950 text-sm">Copyright Protection</strong>
            </div>
            Secures commercial catalog photography, product packaging graphic illustrations, user manuals, and underlying software firmware code.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Answers from experienced Merrafilings design consultants and patent agents:
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
