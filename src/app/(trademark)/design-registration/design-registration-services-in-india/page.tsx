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
  Building,
  HelpCircle,
  Gavel,
} from "lucide-react";

export default function DesignRegistrationServicesInIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Where is the central office for design registration located in India?",
      a: "Under the Designs Act 2000, all industrial design applications in India are processed, examined, and registered centrally by the Patent Office (Design Wing) located in Kolkata (Boudhik Sampada Bhawan, Salt Lake City). While regional Patent Offices in Delhi, Mumbai, and Chennai accept physical filings, all substantive examination and certificate issuance occur through the central Kolkata Design Office.",
    },
    {
      q: "What is Form 21 and why is it mandatory when filing through Merrafilings?",
      a: "Form 21 is the statutory Power of Attorney under the Design Rules, 2001. It formally authorizes Merrafilings registered patent and design agents to lodge applications, file legal representations, receive official correspondence, and represent the applicant during controller hearings on their behalf.",
    },
    {
      q: "What is the procedure if a design registration lapses after 10 years without Form 4 renewal?",
      a: "Under Section 12 of the Designs Act, if the renewal fee on Form 4 is not paid before the 10-year expiration, the copyright in the design lapses. However, the owner can apply for restoration within one year from the date of cessation by submitting Form 5 along with statutory restoration fees, proving that the failure to pay was unintentional and without undue delay.",
    },
    {
      q: "Can I file an industrial design application online through the IP India e-filing portal?",
      a: "Yes. The Indian Patent Office operates a comprehensive e-filing portal (ipindiaonline.gov.in). E-filing provides instant application number generation, automated fee payment with a 10% official discount over physical filings, and real-time electronic tracking of examination reports and hearing notices.",
    },
    {
      q: "What court has jurisdiction to hear industrial design infringement lawsuits in India?",
      a: "Under Section 22(2) of the Designs Act, an infringement suit for piracy of registered design cannot be instituted in any court inferior to a District Court. Furthermore, if the defendant challenges the validity of the registered design in their written statement, the lawsuit is automatically transferred to the High Court having commercial division jurisdiction.",
    },
  ];

  return (
    <DesignGuideLayout
      currentSlug="design-registration-services-in-india"
      title="Design Registration in India: A Comprehensive Guide to Legal Protection"
      breadcrumbLabel="Comprehensive Legal Protection"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In a dynamic commercial ecosystem where physical appearance and ornamental uniqueness directly drive consumer preference, securing exclusive statutory rights over your product designs is a strategic priority. The <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> provides the legislative framework in India to legally protect novel shapes, patterns, configurations, and ornaments applied to industrial articles.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          This comprehensive guide outlines the end-to-end framework of industrial design registration in India. Explore the legislative foundation of the Designs Act, review the online e-filing roadmap, examine the complete documentation checklist, understand 15-year validity and Form 4 extensions, and learn how Section 22 empowers rights holders to stop copycats across major metropolitan hubs.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Statutory Framework Summary</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Central Authority</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Controller General of Patents &amp; Designs</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Total Term of Protection</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">15 Years (10 Years + 5 Years)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Infringement Court</span>
            <strong className="font-semibold text-indigo-900 text-[13px]">District Court / High Court</strong>
          </div>
        </div>
      </div>

      {/* Section 1: The Designs Act, 2000 - Legislative Foundation */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Legislative Foundation: The Designs Act, 2000
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Designs Act, 2000 repealed the antiquated 1911 statute, aligning Indian design protection with TRIPS (Trade-Related Aspects of Intellectual Property Rights). Key legislative pillars include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Section 2(d) - Design Definition:</strong>
            Protects only the features of shape, configuration, pattern, ornament, or composition of lines or colours applied to any article by industrial process, whether 2D or 3D, judged solely by the eye.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Section 4 - Prohibition of Registration:</strong>
            Strict prohibition against registering designs that are not new or original, or have been publicly disclosed prior to the filing date in India or abroad, or contain scandalous matter.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Section 11 - Copyright on Registration:</strong>
            When a design is registered, the proprietor gets copyright in the design for 10 years from the date of registration, conferring exclusive right to apply the design to any article in the specified class.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Section 22 - Piracy of Registered Design:</strong>
            Empowers the registered proprietor to file civil suits against anyone applying the registered design or fraudulent imitation without consent, recovering damages up to ₹50,000 per violation.
          </div>
        </div>
      </section>

      {/* Section 2: Online Registration Roadmap */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Step-by-Step Online Registration Roadmap
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The registration process through the central e-filing system involves five structured procedural phases:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Novelty Search &amp; Locarno Classification</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Verify absolute novelty using the official Patent Office database and global design registers. Classify the article into one of 32 Locarno international classes.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Preparing Representation Sheets &amp; Form 1</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Assemble the 7 orthographic views (Perspective, Front, Back, Left, Right, Top, Bottom) on standardized sheets with statement of novelty and applicant particulars.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Electronic Filing &amp; CBR Generation</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Upload files to the IP India e-filing portal. The system instantly generates the official Application Number and Central Book Receipt (CBR) establishing the priority date.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Formal &amp; Substantive Examination (FER)</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  The Kolkata Design Wing conducts formality scrutiny and prior art examination within 1 to 3 months. Any objection must be responded to within 6 months.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Gazette Publication &amp; Certificate Issuance</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Upon approval, the design is published in the official Patent Office Designs Journal. The Controller issues the sealed Registration Certificate granting 10 years exclusivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mandatory Documentation Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Mandatory Statutory Documentation Checklist
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Ensure all statutory documentation is assembled prior to e-lodgment:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Document Title</th>
                <th className="p-3">Statutory Form</th>
                <th className="p-3">Purpose &amp; Legal Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Application for Registration</td>
                <td className="p-3 text-indigo-700 font-medium">Form 1</td>
                <td className="p-3">Contains applicant bio-data, class of article, and statement of novelty</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Power of Attorney</td>
                <td className="p-3 text-indigo-700 font-medium">Form 21</td>
                <td className="p-3">Authorizes Merrafilings patent agents to represent the applicant</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Orthographic Representation Sheets</td>
                <td className="p-3 text-indigo-700 font-medium">Rule 14 Sheets</td>
                <td className="p-3">Standardized 7-view visual drawings/photographs on clean background</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">MSME / Startup Claim</td>
                <td className="p-3 text-indigo-700 font-medium">Form 24</td>
                <td className="p-3">Udyam or DPIIT certificate claiming 75% fee concession</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Certified Priority Document</td>
                <td className="p-3 text-indigo-700 font-medium">Sec 44 Claim</td>
                <td className="p-3">Certified copy of foreign convention filing (if claiming 6-month priority)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Metropolitan Service Hubs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Specialized Design Services Across Major Indian Metros
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings provides seamless design registration services across major Indian commercial centers:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <Building className="w-3.5 h-3.5 text-indigo-600" />
              <span>Mumbai</span>
            </div>
            FMCG cosmetics containers, luxury lifestyle goods, pharmaceutical packaging, and consumer durables.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <Building className="w-3.5 h-3.5 text-indigo-600" />
              <span>Bangalore</span>
            </div>
            Hardware tech prototypes, IoT devices, electronic enclosures, aerospace parts, and Class 14 GUI interfaces.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <Building className="w-3.5 h-3.5 text-indigo-600" />
              <span>Chennai</span>
            </div>
            Automobile body contours, motorcycle chassis parts, industrial pump casings, and leather fashion accessories.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-sm mb-1.5">
              <Building className="w-3.5 h-3.5 text-indigo-600" />
              <span>Delhi NCR</span>
            </div>
            Direct-to-consumer (D2C) home appliances, modular furniture, electrical fittings, and sports equipment.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Frequently Asked Questions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Answers to key legal and procedural questions regarding Indian design registration:
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
