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
  Scale,
  ShieldCheck,
  Building2,
  FileCheck2,
  Coins,
  Clock,
  Landmark,
  Briefcase,
  Layers,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can a foreign company extend its NRTP registration beyond 90 days?",
    a: "Yes. Under Section 27(1) proviso, an NRTP can apply for an extension of registration before the expiry of the initial 90 days by filing Form GST REG-11 on the GST portal and depositing additional advance tax corresponding to the estimated liability for the extended period (up to an additional 90 days).",
  },
  {
    q: "What is the penalty for failing to file monthly Form GSTR-5 on time?",
    a: "Under Section 47 of the CGST Act, late filing of Form GSTR-5 attracts a statutory late fee of ₹50 per day of delay (₹25 CGST + ₹25 SGST) or ₹20 per day for nil returns, subject to the statutory maximum cap. In addition, 18% annual interest is charged under Section 50 on any unpaid tax dues.",
  },
  {
    q: "Can a foreign business register for GST in multiple Indian States?",
    a: "Yes. GST in India is state-centric. If a foreign business conducts taxable supplies from places of business located in multiple States or Union Territories, it must obtain a distinct GST registration (GSTIN) in each respective State under the same foreign entity legal name.",
  },
  {
    q: "Is biometric Aadhaar authentication required for the foreign director?",
    a: "No. Since foreign nationals do not possess an Indian Aadhaar card, biometric authentication is conducted for the authorized resident Indian signatory who holds an Indian PAN and Aadhaar card, as permitted under the CGST Rules.",
  },
  {
    q: "How does Merrafilings handle ongoing compliance after registration?",
    a: "Merrafilings manages complete post-registration compliance: monthly transaction accounting, Form GSTR-5 preparation and filing, tax liability discharge, registration extension applications (REG-11), and final surrender/tax refund applications upon project completion.",
  },
];

export default function GstRegistrationForForeignersInIndiaNewPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <GstForeignersGuideLayout
      currentSlug="gst-registration-for-foreigners-in-india-new"
      title="GST Registration for Foreigners in India: Legal Compliance"
      breadcrumbLabel="Legal Compliance & Eligibility"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Cross-Border Compliance Practice"
    >
      <article className="space-y-10 text-slate-900 font-normal">
        
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
            The introduction of the Goods and Services Tax (GST) revolutionized India&apos;s indirect tax landscape by unifying fragmented federal and state tax laws into a cohesive digital architecture. While the framework has created immense operational efficiencies for domestic companies, questions frequently arise regarding how foreign corporations, non-resident taxable persons, and international traders can obtain and maintain GST registration in India.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
            This comprehensive handbook demystifies the legal compliance pathway for foreigners operating in India. It examines the statutory eligibility criteria, mandatory authorized representative rules, required apostilled documentation, procedural registration milestones, and monthly filing obligations necessary to guarantee uninterrupted business operations.
          </p>
        </section>

        {/* Section 1: Understanding GST Registration for Foreigners */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Understanding GST Registration for Foreigners</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            For foreign entities, acquiring a Goods and Services Tax Identification Number (GSTIN) is the primary legal mechanism to establish tax identity in India. Operating without a valid GST registration when conducting taxable commerce invites severe legal sanctions, including supply chain disruptions, cargo seizures at border checkpoints under Section 129, and 100% statutory penalties under Section 122.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Strict Statutory Compliance:</strong>
              Mandatory under Section 24(v) of the CGST Act for non-resident suppliers regardless of annual turnover.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Commercial Legitimacy:</strong>
              Enables issuance of valid tax invoices that allow Indian corporate clients to claim Input Tax Credit (ITC).
            </div>
          </div>
        </section>

        {/* Section 2: Why Foreigners Need GST Registration */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Why Foreigners Need GST Registration in India</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Foreign corporations require GST registration under numerous commercial circumstances:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-700">
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Supplying Goods or Services in India:</strong> Making physical or digital sales to Indian business partners or consumers.</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Participating in Business Exhibitions &amp; Trade Shows:</strong> Showcasing or selling commercial samples at Indian trade expos.</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Executing Project Contracts &amp; Joint Ventures:</strong> Undertaking turn-key engineering, procurement, construction, or technical consulting.</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Exporting Goods from Indian Ports:</strong> Procuring domestic commodities in India for international export under Letter of Undertaking (LUT).</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Eligibility Criteria for GST Registration */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Eligibility Criteria &amp; Structural Classifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px] text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Non-Resident Taxable Person (NRTP)</strong>
              <p className="text-slate-600 leading-relaxed">
                Applies to overseas companies operating temporarily in India without a fixed office. Governed by Section 27, registration is valid for 90 days and requires an advance tax deposit.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Wholly-Owned Indian Subsidiary (Pvt Ltd)</strong>
              <p className="text-slate-600 leading-relaxed">
                For foreign corporations incorporating a permanent Indian entity. Registered under regular domestic GST (Form GST REG-01) with permanent validity and standard monthly filings.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">Foreign Branch / Project Office (FTS/PO)</strong>
              <p className="text-slate-600 leading-relaxed">
                Entities established with Reserve Bank of India (RBI) approval under FEMA regulations, registered under regular GST for the project duration.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-slate-900 font-semibold block text-sm mb-1">OIDAR Service Provider</strong>
              <p className="text-slate-600 leading-relaxed">
                Overseas SaaS, media, and digital providers supplying services to non-taxable Indian individuals, registered through simplified Form GST REG-10 without Indian physical presence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The GST Registration Process for Foreigners */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>The GST Registration Process for Foreigners (Form GST REG-09)</span>
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">1. Appoint an Authorized Signatory in India:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Due to jurisdictional requirements, foreign entities must appoint an authorized representative resident in India with a valid Indian PAN to digitally sign and verify the application.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">2. File Form GST REG-09 on the Portal:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Submit Form GST REG-09 online at least 5 days prior to commencing business, declaring foreign registration details, Taxpayer Identification Number, and intended operational duration.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">3. Remit Advance Tax Deposit under Section 27:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Pay the estimated tax liability for the requested registration period via the Electronic Cash Ledger. The system only issues an ARN after the challan is successfully credited.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] transition-all">
              <strong className="text-indigo-950 font-semibold block text-sm mb-1">4. Verification &amp; Issuance of GSTIN:</strong>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                The tax authority reviews the submitted documentation. Upon approval, a 15-digit GSTIN Certificate (Form GST REG-06) is issued, enabling commercial operations immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Documents Required */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Essential Documentation Checklist</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Foreign Incorporation Proof:</strong>
              Apostilled Certificate of Incorporation or foreign business license.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Passport of Authorized Foreign Signatory:</strong>
              Consular-attested passport copy with photograph.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Indian Authorized Signatory KYC:</strong>
              Indian PAN card, Aadhaar card, and authorization resolution.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Address Proof in India:</strong>
              Lease agreement, utility bill, or virtual office service contract.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Bank Account Details in India:</strong>
              Indian bank statement or cancelled cheque for transaction settlements.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 font-semibold block mb-0.5">Power of Attorney (POA):</strong>
              Formal Board Resolution authorizing the resident representative.
            </div>
          </div>
        </section>

        {/* Section 6: GST Compliance and Filing Obligations */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Post-Registration GST Compliance &amp; Monthly Filing</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Once registered, maintaining rigorous ongoing compliance is vital to avoid penalties or business interruptions:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Monthly Return Filing (Form GSTR-5):</strong> An NRTP must file Form GSTR-5 on or before the 20th of the succeeding month, detailing all outward supplies and tax payments.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Preservation of Books of Accounts (Section 36):</strong> Maintain comprehensive digital ledgers, invoices, and payment receipts for at least 72 months from the annual return due date.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Extension or Surrender:</strong> File Form GST REG-11 to extend registration for another 90 days, or file for final tax refund upon concluding Indian operations.</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Conclusion */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646] tracking-tight">
            Conclusion: A Secure Commercial Pathway into India
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Entering the Indian market offers immense commercial opportunities for international corporations. By ensuring strict adherence to GST registration procedures, working with certified resident representatives, and maintaining disciplined return filing habits, foreign enterprises establish a secure, compliant foundation to thrive in one of the world&apos;s leading economies.
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
            <span>Merrafilings Cross-Border Compliance Advisory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Ready to Expand into India? Get Your Foreign GSTIN
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Our international tax attorneys manage your entire Indian registration, resident representative sponsorship, advance tax calculation, and monthly Form GSTR-5 compliance.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/gst-registration-for-foreigners"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Get Started with Foreign GST</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </GstForeignersGuideLayout>
  );
}
