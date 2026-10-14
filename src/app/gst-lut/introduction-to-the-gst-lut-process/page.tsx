"use client";

import React, { useState } from "react";
import Link from "next/link";
import GstLutGuideLayout from "@/components/GstLutGuideLayout";
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
  ChevronDown,
  Layers,
  BookOpen,
  TrendingUp,
  Receipt,
  FileCheck,
  Zap,
  HelpCircle,
  Globe2,
  FileSignature,
  DollarSign,
  AlertTriangle,
  Building2,
  Landmark,
} from "lucide-react";

export default function IntroductionToTheGstLutProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the fundamental legal purpose of a GST Letter of Undertaking (LUT)?",
      a: "A Letter of Undertaking (LUT) is a statutory declaration submitted on Form GST RFD-11 under Rule 96A of the CGST Rules, 2017. It allows registered Indian exporters to ship goods and supply overseas cross-border services as 'zero-rated supplies' without paying Integrated GST (IGST) upfront, on the legal promise that goods will be exported within 3 months and service remittances received within 1 year.",
    },
    {
      q: "What is the difference between an LUT and an Export Bond?",
      a: "An LUT is a simple, electronic document filed online on the GST portal without any stamp paper, bank collateral, or financial cost. An Export Bond, by contrast, must be executed on non-judicial stamp paper and backed by a running bank guarantee (typically 15% of the estimated tax liability). Only taxpayers prosecuted for tax evasion exceeding ₹2.5 Crores are forced to execute Export Bonds; all other regular exporters are eligible for the hassle-free LUT.",
    },
    {
      q: "Who is disqualified from filing a GST LUT?",
      a: "Under Rule 96A of the CGST Rules and Notification No. 37/2017-Central Tax, any taxpayer who has been prosecuted for any offense under the CGST Act, IGST Act, SGST Act, or existing laws where the amount of tax evaded exceeds ₹250 Lakhs (₹2.5 Crores) is legally barred from filing an LUT and must furnish an Export Bond with a bank guarantee instead.",
    },
    {
      q: "Can supplies made to Special Economic Zone (SEZ) developers or units be made under an LUT?",
      a: "Yes. Under Section 16(1)(b) of the IGST Act, supplies of goods or services to a Special Economic Zone (SEZ) developer or an SEZ unit are classified as zero-rated supplies on par with physical exports. You can supply to SEZ entities without charging IGST by quoting your active LUT ARN on tax invoices, accompanied by an endorsement from the SEZ Specified Officer.",
    },
    {
      q: "How does an exporter claim Input Tax Credit (ITC) refunds while operating under an LUT?",
      a: "Because exports under LUT are zero-rated at 0% tax, exporters accumulate Input Tax Credit on input goods, packaging, capital equipment, and domestic service fees. Under Section 54(3) of the CGST Act, you can file Form GST RFD-01 periodically to receive a 100% electronic cash refund of this accumulated unutilized ITC directly into your verified bank account.",
    },
  ];

  return (
    <GstLutGuideLayout
      currentSlug="introduction-to-the-gst-lut-process"
      title="Introduction to the GST LUT Process: Zero-Rated Export Compliance"
      breadcrumbLabel="Introduction to LUT Process"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Export Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          Exporting goods and services from India is a cornerstone of business expansion. To make Indian enterprises competitive in international markets, the GST regime treats exports as <strong className="font-semibold text-slate-950">&quot;zero-rated supplies&quot;</strong> under Section 16 of the <strong className="font-semibold text-slate-950">Integrated Goods and Services Tax (IGST) Act, 2017</strong>. However, to execute zero-rated exports without paying 18% IGST upfront, exporters must understand and utilize the <strong className="font-semibold text-slate-950">GST Letter of Undertaking (LUT) Process</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Governed under <strong className="font-semibold text-slate-950">Rule 96A of the Central Goods and Services Tax (CGST) Rules, 2017</strong>, the LUT process replaces expensive bank guarantees and blocked cash reserves with an electronic undertaking filed on <strong className="font-semibold text-slate-950">Form GST RFD-11</strong>. This introductory guide provides an exhaustive breakdown of the regulatory architecture, taxpayer eligibility criteria, portal navigation, and compliance timelines that govern export trade in India.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST LUT Process Foundational Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Provision</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Rule 96A CGST Rules, 2017</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Exemption</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">0% Upfront Tax (Zero-Rated)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Barred Threshold</span>
            <strong className="font-semibold text-rose-700 text-[13px]">Prosecution &gt; ₹250 Lakhs</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is a GST LUT? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a GST Letter of Undertaking (LUT)?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A Letter of Undertaking (LUT) is a formal, legally binding document furnished electronically by a registered taxpayer declaring their solemn commitment to fulfill all statutory conditions associated with zero-rated exports. Under this instrument, the taxpayer is authorized to dispatch consignments of goods outside India, provide digital or software services to overseas clients, or supply goods/services to Special Economic Zone (SEZ) developers without paying Integrated GST (IGST) at the time of supply.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Legal Binding Under Rule 96A:</strong>
            The LUT binds the exporter to export goods within 90 days of the invoice date and realize foreign exchange for service exports within 365 days, failing which the tax must be remitted with 18% annual interest.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Single Annual Submission:</strong>
            Unlike transaction-based shipping bills, an LUT is submitted only once per financial year. Once the Application Reference Number (ARN) is generated, it covers all export consignments until the 31st of March.
          </div>
        </div>
      </section>

      {/* Section 2: LUT vs Export Bond */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. LUT vs Export Bond: Core Differences &amp; Eligibility
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Prior to the introduction of simplified LUT notifications, exporters had to execute cumbersome Export Bonds backed by bank guarantees. Today, the GST law clearly bifurcates who can file an LUT and who must execute a bond:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Letter of Undertaking (LUT)</th>
                <th className="py-3 px-4">Export Bond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Statutory Form</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Form GST RFD-11 (Online)</td>
                <td className="py-3 px-4 text-slate-800">Form GST RFD-11 (Physical + Online)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Bank Guarantee / Collateral</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">None (0% Collateral)</td>
                <td className="py-3 px-4 text-rose-700">Mandatory Bank Guarantee (15% of Tax)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Stamp Paper Execution</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Not Required</td>
                <td className="py-3 px-4 text-slate-800">Non-Judicial Stamp Paper Required</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Eligibility Profile</td>
                <td className="py-3 px-4 text-slate-900">All registered exporters without tax evasion prosecution</td>
                <td className="py-3 px-4 text-slate-900">Exporters prosecuted for tax evasion &gt; ₹2.5 Crores</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Turnaround &amp; Approval</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Instant ARN Acknowledgment</td>
                <td className="py-3 px-4 text-slate-900">Manual review &amp; sign-off by Deputy Commissioner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Statutory Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Mandatory Eligibility Criteria for Filing GST LUT
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          To successfully furnish an LUT on Form GST RFD-11, the applicant entity must fulfill three statutory prerequisites:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold mb-2">
              1
            </div>
            <strong className="font-semibold text-indigo-950 block mb-1">Active Regular GSTIN:</strong>
            The business must hold an active GST registration as a regular taxpayer. Composition dealers cannot engage in international trade or file an LUT.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold mb-2">
              2
            </div>
            <strong className="font-semibold text-indigo-950 block mb-1">Absence of Prosecution:</strong>
            The taxpayer, proprietor, director, or partner must not have been prosecuted for any tax evasion offense exceeding ₹250 Lakhs under the GST or earlier laws.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold mb-2">
              3
            </div>
            <strong className="font-semibold text-indigo-950 block mb-1">Valid IEC &amp; Authorized Signatory:</strong>
            For physical goods exports, an active Import Export Code (IEC) linked to the GSTIN is mandatory, along with registered Class 3 DSC credentials.
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Portal Walkthrough */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Portal Walkthrough: Navigating the GST LUT Workflow
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Submitting Form GST RFD-11 on the official GST Common Portal is streamlined. Here is the operational navigation trail:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Sign In &amp; Access User Services:</strong>
            Log into <code className="text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">gst.gov.in</code>. Navigate via the top menu: <strong className="font-semibold text-slate-950">Services &gt; User Services &gt; Furnish Letter of Undertaking (LUT)</strong>.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Select Financial Year:</strong>
            Choose the fiscal year for which the LUT is being furnished (e.g. FY 2026-27). If renewing, attach the PDF of the previous year&apos;s approved LUT acknowledgment.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Tick Statutory Undertakings:</strong>
            Acknowledge all three legal checkboxes: (1) Export goods within 3 months; (2) Observe GST legal provisions; (3) Pay full tax with 18% interest in event of export or remittance failure.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Furnish Witness Details:</strong>
            Provide legal name, occupation, full address, and PIN code for two independent witnesses.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">5. Sign Electronically &amp; Receive ARN:</strong>
            Sign via Class 3 DSC (for corporate entities/LLPs) or Aadhaar OTP EVC (for proprietorships/partnerships). Download your 15-digit ARN receipt instantly.
          </div>
        </div>
      </section>

      {/* Section 5: Common Traps */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Crucial Compliance Timelines &amp; Common Errors to Avoid
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">Annual Expiration on March 31:</strong>
            An LUT expires strictly at 11:59 PM on 31st March of each financial year. Generating an export invoice on 1st April without an active renewed LUT forces mandatory 18% IGST payment.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">90-Day Physical Export Clock for Goods:</strong>
            Goods invoiced under LUT must leave Indian territorial waters within 3 months. Exporters must secure the final Bill of Lading or Air Waybill within this window to prevent demand notices.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">FEMA 1-Year Realization for Services:</strong>
            Remittances for export services must be received in convertible foreign currency within 1 year. Indian Rupee realizations are prohibited unless received through an approved Special Vostro Rupee Account (SVRA).
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">Table 6A Disclosure in GSTR-1:</strong>
            Export invoices must be correctly reported under Table 6A of GSTR-1 with zero tax rate and shipping bill numbers to reconcile seamlessly with ICEGATE Customs data.
          </div>
        </div>
      </section>

      {/* Section 6: Interactive FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-3xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-[14.5px] font-medium text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[13.5px] text-slate-900 font-normal leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1F1646] to-[#2D1B69] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
            Export Legal &amp; Tax Compliance Desk
          </span>
          <h3 className="text-xl sm:text-2xl font-normal tracking-tight">
            Consult Merrafilings for Your Zero-Rated Export Setup
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-xl">
            From initial GST LUT filing and witness verification to international invoicing setup and unutilized ITC refunds, our legal experts safeguard your export trade.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
        >
          <span>Speak with an Export Specialist</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </GstLutGuideLayout>
  );
}
