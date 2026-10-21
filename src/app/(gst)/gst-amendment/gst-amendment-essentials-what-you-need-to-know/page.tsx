"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstAmendmentGuideLayout from "@/components/GstAmendmentGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Scale,
  Clock,
  ShieldCheck,
  Building2,
  Landmark,
  FileCheck2,
  AlertCircle,
  Ban,
  Layers,
  MapPin,
  Users,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can I transfer my GST registration to another State through an amendment?",
    a: "No. Under the GST legal framework, every GSTIN is structurally state-specific, beginning with a 2-digit State Code (e.g., 27 for Maharashtra, 07 for Delhi). If a business relocates its operations from one State to another, it cannot amend the State in the existing registration. The taxpayer must apply for a fresh GST registration in the new State and subsequently cancel or surrender the old registration.",
  },
  {
    q: "What is the consequence of failing to update bank details under Rule 10A?",
    a: "Under Rule 10A of the CGST Rules, newly registered taxpayers must add at least one valid bank account within 30 days of registration grant or before filing their first outward return (GSTR-1/IFF), whichever is earlier. Failing to comply results in system-automated suspension of the GSTIN under Rule 21A(2A), blocking e-way bill generation and invoice issuance.",
  },
  {
    q: "What is deemed approval in GST core field amendments?",
    a: "Under Rule 19(5) of the CGST Rules, if the proper officer fails to take any action—neither approving the application nor issuing a clarification notice in Form GST REG-03—within 15 working days from the date of submission of Form GST REG-14, the amendment is deemed to have been approved. The portal automatically updates the records and issues the revised Form GST REG-06 certificate.",
  },
  {
    q: "Can I add multiple additional places of business (branches) in a single amendment?",
    a: "Yes. Form GST REG-14 allows taxpayers to add multiple additional places of business (such as branch offices, godowns, factories, or fulfillment centers) located within the same State in a single core field amendment filing, provided valid address proofs and owner NOCs are uploaded for each premises.",
  },
  {
    q: "Can I change my constitution of business from Proprietorship to Pvt Ltd via amendment?",
    a: "No. Converting from a sole proprietorship to a private limited company or partnership involves a change in the underlying Permanent Account Number (PAN). Because a GSTIN is hard-coded to the entity's PAN, any PAN change requires obtaining a fresh GST registration under the new entity and transferring input tax credit via Form GST ITC-02.",
  },
];

export default function GstAmendmentEssentialsWhatYouNeedToKnowPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstAmendmentGuideLayout
      currentSlug="gst-amendment-essentials-what-you-need-to-know"
      title="Unpacking the GST Amendment: What You Need to Know"
      breadcrumbLabel="GST Amendment Essentials"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Indirect Tax Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            As commercial enterprises evolve, their underlying corporate architecture invariably changes. Businesses expand into new operational warehouses, appoint new managing directors, rebrand commercial trade names, or update banking partners. In the Indian indirect tax ecosystem, maintaining an exact synchronization between your day-to-day commercial reality and statutory tax records is not merely a formality—it is a continuous statutory mandate.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Governed by <strong className="font-semibold text-slate-950">Section 28 of the CGST Act, 2017</strong> read with <strong className="font-semibold text-slate-950">Rule 19 of the CGST Rules, 2017</strong>, the GST amendment process allows registered taxpayers to legally modify their registration particulars. This comprehensive guide unpacks the foundational essentials: core vs. non-core distinctions, statutory timelines, unamendable fields, and officer verification rules.
          </p>
        </section>

        {/* Section 1: The Three Tiers of GST Registration Fields */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The Three Tiers of GST Registration Information</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            For amendment purposes, registration details are segmented into three distinct legal tiers based on regulatory impact and verification protocols:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Tier 1: Core Fields</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Critical legal parameters that directly define the entity&apos;s identity, physical premises, and controlling stakeholders.
              </p>
              <ul className="text-[11.5px] text-slate-700 space-y-1 list-disc pl-4">
                <li>Legal name of business (without PAN change).</li>
                <li>Principal Place of Business.</li>
                <li>Additional Places of Business.</li>
                <li>Partners, Directors, Karta, or Promoters.</li>
              </ul>
              <div className="mt-3 text-[11px] font-medium text-purple-700 bg-purple-50 p-1.5 rounded">
                Requires 15-day officer approval (REG-15).
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Tier 2: Non-Core Fields</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Operational and administrative data that do not alter the fundamental legal identity of the business.
              </p>
              <ul className="text-[11.5px] text-slate-700 space-y-1 list-disc pl-4">
                <li>Bank account details (Rule 10A).</li>
                <li>Trade name / brand name.</li>
                <li>HSN / SAC codes for goods and services.</li>
                <li>Authorized representatives &amp; contact info.</li>
              </ul>
              <div className="mt-3 text-[11px] font-medium text-emerald-700 bg-emerald-50 p-1.5 rounded">
                Instant system auto-approval upon digital signing.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 mb-2 group-hover:text-rose-700 transition-colors">
                <Ban className="w-4 h-4 text-red-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Tier 3: Unamendable Fields</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Structural fields embedded into the algorithmic generation of the 15-digit GSTIN itself.
              </p>
              <ul className="text-[11.5px] text-slate-700 space-y-1 list-disc pl-4">
                <li>PAN linked to the GSTIN.</li>
                <li>State Code of registration.</li>
                <li>Entity constitution involving PAN changes.</li>
              </ul>
              <div className="mt-3 text-[11px] font-medium text-red-700 bg-red-50 p-1.5 rounded">
                Cannot be amended; requires fresh GST registration.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Statutory 15-Day Rule & Rule 10A */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Statutory Timelines: The 15-Day Application Rule</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Timing is vital in GST amendments. Under <strong className="font-semibold text-slate-950">Rule 19(1) of the CGST Rules</strong>, whenever there is any change in the particulars furnished in the registration application, the registered person must submit an application in <strong className="font-semibold text-slate-950">Form GST REG-14</strong> within <strong className="text-indigo-700 font-semibold">15 days</strong> of the occurrence of the event warranting the change.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 my-4 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Mandatory Post-Registration Bank Account Addition (Rule 10A)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              When applying for a new GST registration, taxpayers often do not yet possess a current bank account in the business name. Under Rule 10A, taxpayers are granted a statutory window of <strong className="font-semibold text-slate-900">30 days from registration grant</strong> (or before filing outward return GSTR-1/IFF, whichever is earlier) to submit their bank details via a non-core field amendment. Defaulting on this deadline triggers automated GSTIN suspension under Rule 21A(2A).
            </p>
          </div>
        </section>

        {/* Section 3: Core Amendment Workflow & Officer Verification */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The Core Field Approval Lifecycle &amp; Notice Handling</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Core field amendments undergo rigorous legal scrutiny by the jurisdictional tax officer. Here is how the statutory lifecycle unfolds:
          </p>

          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-[#5C3BFF] transition-colors">
                  Stage 1: Application Submission &amp; ARN Issuance
                </h3>
                <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Day 1</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Form GST REG-14 is submitted online with verified PDF proofs and signed via DSC/EVC. A 15-digit Application Reference Number (ARN) is generated instantly and the file is assigned to the proper officer.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-[#5C3BFF] transition-colors">
                  Stage 2: Officer Verification &amp; Order or Notice
                </h3>
                <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Within 15 Working Days</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The officer has 15 working days to review the proofs. If satisfied, an approval order in <strong className="text-slate-900 font-semibold">Form GST REG-15</strong> is issued. If the officer finds deficiencies, a clarification notice in <strong className="text-slate-900 font-semibold">Form GST REG-03</strong> is issued.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-amber-700 transition-colors">
                  Stage 3: Taxpayer Clarification Reply
                </h3>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Strict 7 Working Days</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If Form GST REG-03 is issued, the taxpayer must submit an electronic response along with additional supporting evidence in <strong className="text-slate-900 font-semibold">Form GST REG-04</strong> within 7 working days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-emerald-700 transition-colors">
                  Stage 4: Final Sanction or Deemed Approval
                </h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Within 7 Working Days of Reply</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upon receipt of the reply, the officer must issue an approval order (REG-15) or rejection order (REG-05) within 7 working days. If the officer takes no action within the prescribed timelines, the amendment is <strong className="text-emerald-700 font-semibold">Deemed Approved</strong> under Rule 19(5).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Documentary Evidence Checklist */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Documentary Checklist for Core Amendments</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Ensure you have these verified documents ready before initiating your core field amendment on the portal:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Address Change (Principal / Additional)</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                <li>Registered Rent / Lease Agreement in entity name.</li>
                <li>Electricity bill / Municipal Tax receipt not older than 2 months.</li>
                <li>Signed No Objection Certificate (NOC) from property owner.</li>
                <li>Board Resolution / partner consent for address change.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs mb-2 group-hover:text-[#5C3BFF] transition-colors">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>Addition of Director / Partner</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                <li>PAN card and Aadhaar card of incoming director/partner.</li>
                <li>Passport-size color photograph (JPEG &lt; 100 KB).</li>
                <li>DIR-12 approval from ROC / Supplementary Partnership Deed.</li>
                <li>Board Resolution appointing authorized signatory.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="space-y-2.5 my-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200 hover:border-[#5C3BFF] hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: CTA Section */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Get Your Core &amp; Non-Core Amendments Filed Accurately
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mt-1">
                Whether modifying your principal place of business, adding branch locations, or onboarding directors, Merrafilings provides end-to-end legal drafting, portal filing, and 15-day approval tracking.
              </p>
            </div>
            <Link
              href="/gst-amendment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-[#155EEF] hover:text-white text-xs font-semibold shadow-md transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>Explore GST Amendment Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </article>
    </GstAmendmentGuideLayout>
  );
}
