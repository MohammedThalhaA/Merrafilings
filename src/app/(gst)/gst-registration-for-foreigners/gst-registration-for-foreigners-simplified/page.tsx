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
  TrendingUp,
  FileText,
  Clock,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is an OIDAR service provider and does it require a physical office in India?",
    a: "OIDAR stands for Online Information Database Access and Retrieval services (e.g., cloud storage, online software, streaming media, digital advertising). Under Section 14 of the IGST Act, foreign OIDAR providers supplying services to non-taxable Indian consumers do not need a physical office in India; they can obtain a simplified GST registration directly via Form GST REG-10.",
  },
  {
    q: "Can a foreign company claim Input Tax Credit (ITC) under an NRTP registration?",
    a: "Under Section 17(5)(i) of the CGST Act, a Non-Resident Taxable Person cannot claim Input Tax Credit on domestic goods and services purchased within India, except for the tax paid on the import of goods into India. This is a critical distinction that foreign executives must consider when structuring their Indian operations.",
  },
  {
    q: "What return must a Non-Resident Taxable Person file each month?",
    a: "An NRTP must file Form GSTR-5 on a monthly basis on or before the 20th day of the succeeding month, or within 7 days after the last day of the validity period of registration, whichever is earlier. It encapsulates details of outward supplies and tax paid.",
  },
  {
    q: "What happens to the advance tax deposit if actual tax liability is lower?",
    a: "Under Section 27(3), if the actual tax liability for the registration period is less than the advance tax deposited, the excess balance in the Electronic Cash Ledger is fully refunded to the foreign taxpayer's designated bank account after filing the final Form GSTR-5 return.",
  },
  {
    q: "How does Merrafilings assist international businesses establishing in India?",
    a: "Merrafilings offers end-to-end foreign market entry services. We assist with choosing between an NRTP registration, OIDAR registration, or a wholly-owned Indian subsidiary (Pvt Ltd), appoint authorized resident signatories, provide virtual office addresses, and handle monthly GSTR-5 filings.",
  },
];

export default function GstRegistrationForForeignersSimplifiedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstForeignersGuideLayout
      currentSlug="gst-registration-for-foreigners-simplified"
      title="Understanding GST Registration for Foreigners: A Complete Guide"
      breadcrumbLabel="Foreign Business Key Insights"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings International Tax Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            For foreign enterprises and multinational corporations aiming to scale their footprint into the South Asian subcontinent, India presents an unparalleled growth market. With a thriving digital ecosystem, robust industrial corridors, and rising disposable incomes, establishing commercial operations in India has become a top priority for global executives.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            To capitalize effectively on this market potential, understanding India&apos;s Goods and Services Tax (GST) framework is non-negotiable. This comprehensive guide provides an in-depth breakdown of GST registration for foreign entities, clarifying statutory eligibility, required documentation, procedural milestones, and operational solutions to cross-border compliance challenges.
          </p>
        </section>

        {/* Section 1: What is GST & Why is it Important for Foreigners? */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>What is GST and Why is it Critical for International Firms?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Enacted under the 101st Constitutional Amendment Act, the Goods and Services Tax fundamentally transformed India&apos;s fiscal landscape by replacing a complex web of cascading federal and state levies with a single, destination-based tax system:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block text-sm">Single Tax Structure:</strong>
              <p>Replaces multiple cascading levies—including VAT, Central Excise, Entry Tax, and Service Tax—with standard CGST, SGST, and IGST rate slabs.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block text-sm">Destination-Based Levy:</strong>
              <p>Tax accrues to the State where goods or services are consumed rather than manufactured, ensuring equitable inter-state trade rules.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-semibold block text-sm">Multi-Stage ITC Mechanism:</strong>
              <p>Ensures that tax is applied only on value addition, eliminating the tax-on-tax cascade and lowering total supply chain overheads.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Do Foreign Businesses Need GST Registration? */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Why Do Foreign Businesses Need GST Registration?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            For international enterprises conducting commercial transactions in India, securing a GSTIN is vital for multiple operational and legal reasons:
          </p>
          <div className="space-y-3 text-xs sm:text-[13.5px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-0.5">1. Mandatory Statutory Compliance (Section 24):</strong>
              Under Section 24(v) of the CGST Act, any non-resident making taxable supplies within Indian territory must obtain mandatory registration regardless of turnover threshold.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-0.5">2. Legitimate Market Presence &amp; Customer Trust:</strong>
              Indian corporate clients are legally prohibited from paying vendors who cannot issue a valid GST tax invoice with an authentic 15-digit GSTIN.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <strong className="text-slate-900 font-semibold block mb-0.5">3. Smooth Customs Clearance for Imported Goods:</strong>
              A valid GSTIN linked with your Import Export Code (IEC) ensures that Integrated GST (IGST) paid at customs ports flows directly into your electronic ledgers.
            </div>
          </div>
        </section>

        {/* Section 3: Steps to GST Registration for Foreigners */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Steps to GST Registration for Foreigners: A Structured Overview</span>
          </h2>

          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm sm:text-base mb-1">
                Step 1: Determine Applicable Foreign GST Category
              </strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-2">
                Foreign enterprises must first identify the precise legal classification under which they are registering:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 pl-4 list-disc">
                <li><strong>Non-Resident Taxable Person (NRTP):</strong> For overseas companies occasionally supplying goods or services without a permanent fixed establishment in India (Form GST REG-09).</li>
                <li><strong>Wholly-Owned Indian Subsidiary (WOS / Pvt Ltd):</strong> For foreign firms creating a permanent corporate entity in India (Form GST REG-01).</li>
                <li><strong>OIDAR Service Provider:</strong> For international cloud, SaaS, or digital media platforms delivering remote services to Indian non-business consumers (Form GST REG-10).</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm sm:text-base mb-1">
                Step 2: Collate &amp; Legalize Requisite Documentation
              </strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-2">
                Gather all official corporate and personal identification records:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 pl-4 list-disc">
                <li>Certificate of Incorporation legalized by the Indian Embassy or apostilled under the Hague Convention.</li>
                <li>Tax Identification Number (TIN) or business registration license in the origin country.</li>
                <li>Power of Attorney / Board Resolution appointing an authorized resident Indian representative with a valid Indian PAN.</li>
                <li>Address proof of business premises or virtual office in India.</li>
                <li>Passport copies and photographs of the primary foreign director and the authorized signatory.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm sm:text-base mb-1">
                Step 3: Online Filing &amp; Advance Tax Deposit on the GST Portal
              </strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Log into the GST portal, generate a Temporary Reference Number (TRN), complete Form GST REG-09, calculate the estimated net tax liability for the declared registration period (up to 90 days), and remit the advance tax deposit into the Electronic Cash Ledger under Section 27. Submit using Class 3 DSC of the authorized resident representative.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Benefits of GST Registration for Foreign Firms */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Benefits of GST Registration for Foreign Businesses</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Commercial Legitimacy:</strong>
              A verified GSTIN instills total confidence in Indian corporate procurement teams and institutional buyers.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Import IGST Credit:</strong>
              Enables foreign entities to offset IGST paid at Indian customs against outward supply liabilities.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Unrestricted Expansion:</strong>
              Provides the legal foundation to scale from temporary project operations to permanent Indian subsidiaries.
            </div>
          </div>
        </section>

        {/* Section 5: Challenges & Solutions */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Challenges Faced by Foreign Businesses &amp; Proven Solutions</span>
          </h2>
          <div className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-0.5">Challenge: Requirement of an Indian Resident Signatory with PAN</strong>
              <p className="text-slate-600"><em>Solution:</em> Merrafilings provides institutional authorized representative sponsorship, fulfilling statutory Indian representation without requiring foreign staff relocation.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-0.5">Challenge: Mandatory Advance Tax Deposit Calculation (Section 27)</strong>
              <p className="text-slate-600"><em>Solution:</em> Our tax litigators model your sales pipelines to compute the exact minimum advance tax deposit, preserving your working capital.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-0.5">Challenge: Strict Document Apostille &amp; Legalization Standards</strong>
              <p className="text-slate-600"><em>Solution:</em> We guide your legal team on exact consular attestation wording, preventing procedural rejection notices (Form GST REG-03).</p>
            </div>
          </div>
        </section>

        {/* Section 6: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: A Business-Friendly Destination for Global Enterprises
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            India continues to solidify its reputation as a premier destination for global commerce and international investment. By adopting a methodical approach to GST registration, adhering strictly to documentation standards, and partnering with experienced local practitioners, foreign businesses can navigate Indian tax compliance effortlessly and unlock exceptional commercial growth.
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
            <span>Merrafilings Global Corporate Advisory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Consult a Cross-Border GST Specialist
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Book a dedicated consultation session with our international tax experts to review your business model, determine whether NRTP or Subsidiary registration fits best, and obtain your GSTIN swiftly.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-registration-for-foreigners"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore Foreign GST Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstForeignersGuideLayout>
  );
}
