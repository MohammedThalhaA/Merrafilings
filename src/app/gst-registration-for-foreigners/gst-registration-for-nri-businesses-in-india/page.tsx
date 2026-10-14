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
  Layers,
  Scale,
  ShieldCheck,
  Building2,
  FileCheck2,
  Coins,
  Clock,
  Landmark,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can an NRI use their personal foreign bank account for GST registration in India?",
    a: "No. The GST portal requires a bank account maintained within India. An NRI can open and link an NRE/NRO bank account or a dedicated current account in the name of the business entity with an authorized Indian bank branch.",
  },
  {
    q: "Can an NRI register as a regular domestic taxpayer instead of an NRTP?",
    a: "Yes. If an NRI establishes a permanent place of business in India (such as a Private Limited Company or LLP incorporated with the Ministry of Corporate Affairs, or a registered proprietorship with a physical office lease in India), they can register as a regular domestic taxpayer under Form GST REG-01 without the 90-day validity limitation or advance tax deposit mandate.",
  },
  {
    q: "What is the penalty for conducting business in India without GST registration as an NRI?",
    a: "Under Section 122 of the CGST Act, operating an unregistered taxable business in India attracts a penalty of 100% of the tax due or ₹10,000, whichever is higher. Additionally, goods in transit can be seized and confiscated under Section 129 and Section 130.",
  },
  {
    q: "Can an NRI appoint a family member residing in India as the authorized representative?",
    a: "Yes. An NRI can appoint any adult individual resident in India who holds a valid Permanent Account Number (PAN) as their authorized representative by executing a notarized Power of Attorney or Board Resolution.",
  },
  {
    q: "How does Merrafilings assist NRI founders setting up businesses in India?",
    a: "Merrafilings provides an all-inclusive NRI launchpad: company incorporation (Pvt Ltd / LLP), FEMA & RBI regulatory compliance, GST registration, authorized signatory representation, virtual office leasing, and ongoing monthly accounting.",
  },
];

export default function GstRegistrationForNriBusinessesInIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstForeignersGuideLayout
      currentSlug="gst-registration-for-nri-businesses-in-india"
      title="Comprehensive Guide to GST Registration for NRI Businesses in India"
      breadcrumbLabel="NRI Business GST Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings NRI Corporate Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            With India emerging as one of the world&apos;s most promising economic powerhouses, Non-Resident Indians (NRIs), Person of Indian Origin (PIO) entrepreneurs, and overseas corporate entities are actively investing across Indian real estate, technology, e-commerce, manufacturing, and consulting sectors.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            Whether you are an NRI entrepreneur launching an online direct-to-consumer brand, a foreign consultancy executing contracts in Mumbai or Bengaluru, or an overseas exporter trading in Indian commodities, understanding the Goods and Services Tax (GST) framework is your very first legal milestone. This authoritative guide examines the statutory requirements, procedural pathways, and documentation needed for seamless GST registration.
          </p>
        </section>

        {/* Section 1: Understanding GST for NRI Businesses */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Understanding GST Registration for NRI Businesses</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            The Goods and Services Tax operates as a unified destination-based tax levied on every value addition in India. For NRIs and foreign companies, obtaining GST registration is not merely a formality—it is the legal gateway that legitimizes commercial transactions, enables local invoicing, and secures compliance with Indian tax authorities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block text-sm">Mandatory Legal Requirement:</strong>
              <p>Under Section 24, any foreign or non-resident person making taxable supplies in India must register regardless of the turnover threshold.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block text-sm">Unrestricted Commercial Operations:</strong>
              <p>Enables opening Indian commercial bank accounts, executing vendor agreements, and collecting receivables seamlessly.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block text-sm">Input Tax Credit Optimization:</strong>
              <p>Allows businesses to offset tax paid on local procurement, logistics, and capital equipment against outward tax liabilities.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Non-Resident Taxable Person: An Overview */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Non-Resident Taxable Person (NRTP): Statutory Framework</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Under <strong className="font-semibold text-slate-950">Section 2(77) of the CGST Act</strong>, a Non-Resident Taxable Person is defined as any individual or corporate entity that occasionally undertakes transactions involving the supply of goods or services, whether as principal, agent, or in any other capacity, but who has no fixed place of business or residence in India.
          </p>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <h3 className="text-sm font-semibold text-indigo-950">Key Statutory Rules Governing NRTPs:</h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Threshold Exemption:</strong> Unlike domestic businesses that enjoy a ₹20/₹40 Lakh exemption, an NRTP must register before making even a single taxable rupee of supply.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Advance Application:</strong> Form GST REG-09 must be submitted at least <strong>5 days prior</strong> to commencing business in India.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>90-Day Validity &amp; Extension:</strong> The registration remains valid for 90 days, extendable by up to another 90 days via Form GST REG-11 upon additional tax deposit.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Step-by-Step GST Registration Process */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Step-by-Step GST Registration Process for Foreigners &amp; NRIs</span>
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 1 — Appoint Authorized Resident Representative in India:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Appoint an Indian resident who possesses a valid Indian PAN to act as the authorized signatory for all tax correspondence, return filing, and legal notices.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 2 — Generate TRN &amp; Access Form GST REG-09:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Generate a Temporary Reference Number (TRN) on the GST portal using the resident representative&apos;s PAN, email, and mobile OTP. Access the NRTP registration form.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 3 — Complete Business &amp; Turnover Declarations:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Input foreign company particulars, Tax Identification Number (TIN), declared period of operation (up to 90 days), and estimated outward taxable turnover.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 4 — Deposit Advance Tax via Electronic Cash Ledger:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Generate a payment challan and deposit 100% of the estimated net tax liability for the registration period under Section 27. Submit using Class 3 DSC.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 5 — Departmental Verification &amp; Allotment of GSTIN:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Upon review of apostilled documents, the proper officer issues the official 15-digit GSTIN Certificate (Form GST REG-06) within 3 to 7 working days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Documents Required */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Documents Required for NRI &amp; Foreign GST Registration</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Proof of Business Registration:</strong>
              Apostilled Certificate of Incorporation or foreign commercial license.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Identity Proof of Foreign Signatory:</strong>
              Valid passport copy attested by the Indian Consulate or Hague apostille.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Resident Representative KYC:</strong>
              Indian PAN card, Aadhaar card, and passport-sized photograph.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Proof of Indian Business Premises:</strong>
              Registered lease agreement, utility bill, or virtual office service contract.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Power of Attorney / Authorization:</strong>
              Formal Board Resolution authorizing the resident representative.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Bank Account Details in India:</strong>
              Cancelled cheque or bank statement from an Indian bank account (NRE/NRO/Current).
            </div>
          </div>
        </section>

        {/* Section 5: Recent Developments & Insights */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Recent Developments &amp; Insights for NRI Businesses</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Simplified GSTR-5 Return Filing:</strong> NRTPs now file a single consolidated monthly return (Form GSTR-5) on the 20th of the next month, replacing separate GSTR-1 and 3B filings.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>E-Invoicing Mandate:</strong> Foreign registered entities generating B2B supplies with turnover exceeding the statutory threshold must generate real-time IRN-validated e-invoices.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Direct Electronic Cash Ledger Refunds:</strong> Expedited digital refunds for unutilized advance tax deposits directly into the foreign entity&apos;s Indian bank account.</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: Accelerating NRI Business Growth in India
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Securing a GST registration is a transformative milestone for NRI founders and foreign businesses. With clear documentation, strategic tax modeling, and expert local representation, international enterprises can navigate Indian indirect taxation with total compliance, allowing leadership to focus on scaling and capturing market share.
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
            <span>Merrafilings NRI Business Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Launch Your Indian Enterprise with Complete Confidence
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Partner with Merrafilings for end-to-end NRI setup: company incorporation, GST registration, authorized resident signatory sponsorship, and complete tax filing.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-registration-for-foreigners"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Schedule NRI Setup Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstForeignersGuideLayout>
  );
}
