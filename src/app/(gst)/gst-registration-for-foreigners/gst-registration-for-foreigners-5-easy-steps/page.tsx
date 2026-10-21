"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstForeignersGuideLayout from "@/components/GstForeignersGuideLayout";
import {
  Globe2,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  FileCheck2,
  Clock,
  ShieldCheck,
  Building2,
  Landmark,
  Coins,
  Scale,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can a foreign entity register for GST in India without establishing a local company?",
    a: "Yes. Under Section 24(v) of the CGST Act, a foreign company can register as a Non-Resident Taxable Person (NRTP) using Form GST REG-09 without incorporating a private limited company or subsidiary in India, provided they appoint an authorized signatory resident in India with a valid Indian PAN.",
  },
  {
    q: "What is the mandatory advance tax deposit requirement under Section 27?",
    a: "Unlike domestic Indian businesses that pay tax monthly after generating sales, an NRTP must make an advance deposit of tax equal to the estimated tax liability for the entire 90-day registration period before the GST certificate is granted. Any unutilized deposit is refundable upon closure of business in India.",
  },
  {
    q: "How long is a foreign GST registration certificate valid?",
    a: "Under Section 27(1), an NRTP registration is valid for the period specified in the application or 90 days from the effective date of registration, whichever is earlier. It can be extended for an additional period of up to 90 days by filing Form GST REG-11 and depositing additional estimated tax.",
  },
  {
    q: "Must the foreign business documents be notarized or apostilled?",
    a: "Yes. The foreign Certificate of Incorporation, Board Resolution authorizing the signatory, and passport copies must be attested either by an Indian Embassy/Consulate in the home country or apostilled in accordance with the Hague Apostille Convention.",
  },
  {
    q: "Can Merrafilings act as the resident authorized signatory for foreign entities?",
    a: "Yes. Merrafilings provides comprehensive authorized representative sponsorship. Our licensed Indian tax practitioners act as your authorized resident signatory, fulfill local KYC mandates, manage advance tax deposits, and handle monthly Form GSTR-5 filings.",
  },
];

export default function GstRegistrationForForeigners5EasyStepsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstForeignersGuideLayout
      currentSlug="gst-registration-for-foreigners-5-easy-steps"
      title="GST Registration for Foreigners: 5 Easy Steps"
      breadcrumbLabel="5-Step Registration Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Cross-Border Advisory"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            India represents one of the most dynamic and fastest-growing consumer markets in the world. For foreign enterprises, non-resident individuals, and multinational corporations planning to supply goods or services into India, obtaining a Goods and Services Tax (GST) registration is the foundational legal requirement.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Navigating the cross-border provisions of the Central Goods and Services Tax (CGST) Act may seem intricate for international businesses unfamiliar with Indian tax laws. This authoritative 5-step roadmap simplifies the entire procedure—from apostilled documentation and appointing an authorized resident representative to calculating advance tax deposits and securing your 15-digit GSTIN.
          </p>
        </section>

        {/* Section 1: Understanding GST and Its Importance */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Understanding GST and Its Strategic Importance for Foreign Firms</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The Goods and Services Tax is a comprehensive, multi-stage, destination-based tax levied on every value addition within Indian borders. It consolidates multiple federal and state indirect levies (such as VAT, Service Tax, and Central Excise) into a unified digital framework:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Unified National Market:</strong>
              <p>Enables foreign businesses to sell seamlessly across all 28 States and 8 Union Territories under a single digital tax registration.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Seamless Input Tax Credit:</strong>
              <p>Ensures that Indian corporate buyers can claim unhindered ITC on supplies purchased from registered foreign entities.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-sm">Enhanced Foreign Direct Investment:</strong>
              <p>Transparent digital tax mechanisms eliminate physical red-tape, accelerating customs clearance and trade contracts.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Who Needs GST Registration? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Who Needs GST Registration as a Foreigner?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Under Indian GST law, the standard turnover exemption threshold (₹40 Lakhs / ₹20 Lakhs) does <strong className="font-semibold text-slate-950">not apply</strong> to foreign businesses. Under <strong className="font-semibold text-slate-950">Section 24(v) of the CGST Act</strong>, GST registration is compulsory regardless of turnover for:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <span className="font-bold text-indigo-600 shrink-0">•</span>
              <span><strong>Non-Resident Taxable Persons (NRTP):</strong> Any foreign individual or corporate entity that occasionally undertakes taxable supplies of goods or services in India without having a fixed place of business in India.</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <span className="font-bold text-indigo-600 shrink-0">•</span>
              <span><strong>Foreign Exhibitors &amp; Trade Fair Participants:</strong> Foreign firms showcasing or selling commercial goods at Indian expos, exhibitions, or temporary retail hubs.</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <span className="font-bold text-indigo-600 shrink-0">•</span>
              <span><strong>Foreign Companies with Indian Project Offices:</strong> Multinational corporations executing engineering, procurement, or construction contracts in India.</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <span className="font-bold text-indigo-600 shrink-0">•</span>
              <span><strong>Online Information Database Access &amp; Retrieval (OIDAR):</strong> Overseas SaaS providers delivering cloud services, digital streaming, or digital advertising to Indian non-taxable consumers.</span>
            </li>
          </ul>
        </section>

        {/* Section 3: 5 Easy Steps to GST Registration for Foreigners */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step Guide to GST Registration for Foreigners (5 Steps)</span>
          </h2>

          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span>Prepare &amp; Apostille Essential Documentation</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10 mb-2">
                Compile all statutory identity and commercial documents. Foreign documents must be apostilled or attested by the Indian High Commission/Consulate:
              </p>
              <ul className="pl-10 space-y-1 text-xs text-slate-600 list-disc">
                <li>Certificate of Incorporation / Registration issued by the foreign government authority.</li>
                <li>Tax Identification Number (TIN) or Unique Business Identification Number in the home country.</li>
                <li>Passport copy of the authorized foreign signatory and passport-sized photographs.</li>
                <li>Board Resolution appointing a resident Indian representative with valid Indian PAN.</li>
                <li>Address proof of business premises in India (lease deed or virtual office consent letter).</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Register on the GST Portal &amp; Generate TRN</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Access the official GST common portal (<code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">gst.gov.in</code>), navigate to <strong>Services &gt; Registration &gt; New Registration</strong>. Select the taxpayer type as <strong>Non-Resident Taxable Person</strong>. Enter the PAN of the authorized resident Indian representative along with the authorized email and mobile to generate the 15-digit Temporary Reference Number (TRN).
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Complete Application Form GST REG-09</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Log into the portal using the TRN and fill out <strong className="font-semibold text-slate-950">Form GST REG-09</strong> at least 5 days prior to the commencement of business in India. Populate legal details of the foreign company, authorized signatory particulars, Indian place of business, HSN/SAC codes of goods or services, and state the exact registration period required (up to 90 days).
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span>Calculate &amp; Deposit Mandatory Advance Tax under Section 27</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                The GST portal automatically computes the estimated net tax liability for the declared 90-day period. Generate a tax payment challan and deposit the advance tax into the Electronic Cash Ledger via international wire transfer or authorized Indian banking channels. The application can only be submitted once the advance tax is credited.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <div className="flex items-center gap-3 font-semibold text-indigo-950 text-base mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <span>Departmental Verification &amp; Allotment of GSTIN</span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed pl-10">
                Authenticate the application digitally via DSC (Class 3) of the authorized Indian representative. Upon receipt of the Application Reference Number (ARN), the proper tax officer reviews the paperwork. If no clarifications are sought, the official 15-digit GSTIN Certificate (Form GST REG-06) is issued within 3 to 7 working days.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Benefits of Professional Assistance */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Why Foreign Enterprises Partner with Merrafilings</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Resident Representative Sponsorship:</strong>
              We provide qualified Indian Chartered Accountants to act as your authorized resident signatory under Indian law.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Advance Tax Estimation:</strong>
              We calculate precise advance tax deposits to prevent over-committing working capital under Section 27.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Apostille &amp; Legalization Guidance:</strong>
              Complete guidance on consular legalization standards to ensure zero registration rejections.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-1">Ongoing GSTR-5 Monthly Compliance:</strong>
              Punctual monthly return filing and post-project deposit refund assistance when business concludes.
            </div>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: A Clear Gateway to India&apos;s Growing Economy
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            While the Indian tax system might initially appear intricate to foreign executives, partnering with seasoned cross-border practitioners transforms registration into a seamless, predictable process. With accurate documentation and disciplined compliance, foreign firms can unlock the immense commercial potential of India with total legal peace of mind.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1F1646] via-[#2D1B69] to-[#1F1646] text-white shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Merrafilings Cross-Border Legal Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Expanding Your Business to India? Get Foreign GST Registration
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            From resident representative sponsorship to Form GST REG-09 drafting and advance tax management, our cross-border tax lawyers secure your GSTIN in 3 to 7 business days.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-registration-for-foreigners"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore Foreign GST Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstForeignersGuideLayout>
  );
}
