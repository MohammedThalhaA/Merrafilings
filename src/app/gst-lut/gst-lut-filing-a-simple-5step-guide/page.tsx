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
  Users,
} from "lucide-react";

export default function GstLutFilingASimple5StepGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What are the 5 core steps to file a GST LUT online?",
      a: "The 5 steps are: (1) Gathering required documentation including GSTIN, IEC, and witness details; (2) Accessing Form GST RFD-11 on the GST portal under User Services; (3) Filling out financial year details, accepting the three statutory undertakings, and providing witness data; (4) Signing electronically via Class 3 DSC (for companies/LLPs) or Aadhaar EVC (for proprietorships); (5) Generating the Application Reference Number (ARN) acknowledgment receipt and downloading the active LUT Certificate.",
    },
    {
      q: "How soon can I start exporting without IGST after completing the 5 steps?",
      a: "Immediately upon submission! As soon as you complete Step 5 and the portal generates your Application Reference Number (ARN), your LUT is legally active for that entire financial year. You can cite this ARN on export invoices, shipping bills, and service agreements right away.",
    },
    {
      q: "Do I need to submit physical copies of Form GST RFD-11 to the tax department?",
      a: "No. The entire GST LUT filing process is 100% digital. There is no requirement to visit the jurisdictional GST office or submit paper documents, provided you are eligible and have not been prosecuted for tax evasion exceeding ₹2.5 Crores.",
    },
    {
      q: "What happens if our foreign client takes more than one year to pay for service exports?",
      a: "Under the statutory undertaking in Form GST RFD-11 and FEMA rules, export proceeds for services must be realized within one year from the invoice date. If payment is delayed beyond this statutory window, you must pay Integrated GST (IGST) at the applicable rate along with 18% annual interest under Section 50, unless you obtain an extension from the Reserve Bank of India (RBI).",
    },
    {
      q: "Can Merrafilings assist with both the annual LUT filing and subsequent ITC refund claims?",
      a: "Yes. Merrafilings provides end-to-end export tax services: we file your annual Form GST RFD-11, manage witness verification, track financial year renewals, and handle zero-rated export Input Tax Credit (ITC) refund claims under Form GST RFD-01 to recover accumulated GST on your business overheads.",
    },
  ];

  return (
    <GstLutGuideLayout
      currentSlug="gst-lut-filing-a-simple-5step-guide"
      title="GST LUT Filing in 5 Steps: The Complete Exporter Guide"
      breadcrumbLabel="5-Step Filing Guide"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Export Legal Team"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          In India&apos;s fast-paced international trade environment, managing working capital is the single biggest determinant of export profitability. Under Section 16 of the <strong className="font-semibold text-slate-950">Integrated Goods and Services Tax (IGST) Act, 2017</strong>, cross-border shipments of goods and overseas service deliveries qualify as &quot;zero-rated supplies&quot;. Exporters have two distinct pathways: pay 18% IGST upfront and navigate bureaucratic refund claims, or file a <strong className="font-semibold text-slate-950">Letter of Undertaking (LUT)</strong> under <strong className="font-semibold text-slate-950">Rule 96A of the CGST Rules</strong> to export completely tax-free.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing an LUT replaces cumbersome cash outflows and bank-guaranteed export bonds with an instantaneous, 100% electronic undertaking on <strong className="font-semibold text-slate-950">Form GST RFD-11</strong>. Below is the definitive, structured 5-step roadmap to filing your GST LUT accurately, avoiding common portal errors, and ensuring unhindered zero-rated export operations for the entire financial year.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST LUT 5-Step Execution Snapshot</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Process Mode</span>
            <strong className="font-semibold text-slate-950 text-[13px]">100% Online via GST Portal</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Acknowledgment Generated</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">ARN Receipt (Instant)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Window</span>
            <strong className="font-semibold text-slate-950 text-[13px]">1 Financial Year (Expires Mar 31)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Why Use the LUT Route? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Savvy Exporters Choose LUT over IGST Tax Payment
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          When exporting from India, the tax framework gives you two operational options. Understanding the cash-flow contrast explains why over 95% of active exporters rely on the Letter of Undertaking mechanism:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Zero Blocked Working Capital:</strong>
            Without an LUT, you must deposit 18% IGST on every invoice. For an exporter shipping ₹1 Crore monthly, that locks up ₹18 Lakhs every single month while awaiting tax refunds. LUT eliminates this drain completely.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Elimination of Refund Waiting Queues:</strong>
            Customs and GST refund processing cycles routinely take 60 to 120 days due to gateway data mismatches between ICEGATE and GSTN. LUT bypasses the refund queue entirely by stopping tax collection at the source.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Retention of Full Input Tax Credit (ITC):</strong>
            Zero-rated LUT supplies do not compromise your input credits. You retain the right to accumulate ITC on raw material purchases, domestic courier charges, software tools, and factory leases, and claim refunds under Section 54.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">International Pricing Competitiveness:</strong>
            By omitting indirect taxes from overseas proforma invoices, Indian exporters can present transparent, globally competitive quotes without confusing overseas buyers with Indian domestic taxes.
          </div>
        </div>
      </section>

      {/* Section 2: Detailed 5-Step Process */}
      <section className="space-y-6 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The Definitive 5-Step GST LUT Filing Process
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Executing your LUT filing on Form GST RFD-11 requires precision to prevent administrative holds or inadvertent invalidations. Follow this 5-step sequence:
        </p>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                1
              </span>
              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1F1646] group-hover:text-[#5C3BFF] transition-colors">
                  Step 1: Registration, Statutory Pre-requisites &amp; Document Collation
                </h3>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  Before logging into the portal, ensure your business fulfills statutory baseline criteria and assemble the required records:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-900 font-normal pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Active GSTIN registration in Regular taxpayer scheme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Valid Import Export Code (IEC) issued by DGFT</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Clean compliance record (no tax evasion &gt; ₹2.5 Cr)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full names, occupations &amp; addresses of 2 independent witnesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                2
              </span>
              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1F1646] group-hover:text-[#5C3BFF] transition-colors">
                  Step 2: Accessing &amp; Preparing Form GST RFD-11
                </h3>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  Sign in to the GST Common Portal (<code className="text-xs bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">gst.gov.in</code>) and navigate to:
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
                  Services &gt; User Services &gt; Furnish Letter of Undertaking (LUT)
                </div>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  Select the applicable <strong className="font-semibold text-slate-950">Financial Year</strong> from the dropdown. If you have furnished an LUT in the preceding financial year, upload the prior year&apos;s ARN acknowledgment document in PDF or JPEG format.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                3
              </span>
              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1F1646] group-hover:text-[#5C3BFF] transition-colors">
                  Step 3: Accepting Statutory Undertakings &amp; Recording Witness Particulars
                </h3>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  Form GST RFD-11 contains three mandatory legal undertaking declarations governed by Rule 96A. You must check each declaration box to confirm:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-900 font-normal pl-2">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-indigo-700">A.</span>
                    <span>Goods will be physically exported outside India within 3 months from the date of the export invoice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-indigo-700">B.</span>
                    <span>For service exports, foreign currency remittances will be received in convertible foreign exchange within 1 year.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-indigo-700">C.</span>
                    <span>In case of non-compliance, you undertake to pay the full Integrated GST amount along with 18% annual interest under Section 50(1).</span>
                  </li>
                </ul>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed pt-1">
                  Next, input the details of two independent adult witnesses: legal name, occupation (e.g. Accountant, Engineer, Advocate), complete residential/office address, and PIN code.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                4
              </span>
              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1F1646] group-hover:text-[#5C3BFF] transition-colors">
                  Step 4: Digital Authentication via DSC or Aadhaar EVC
                </h3>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  Select the primary Authorized Signatory from the dropdown list and specify the Place of Signing. You will authenticate the application using the prescribed digital method:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-900 font-normal">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="font-semibold text-indigo-950 block mb-1">Companies &amp; LLPs:</strong>
                    Must sign via a valid <strong className="font-semibold text-slate-950">Class 3 Digital Signature Certificate (DSC)</strong> registered with the authorized director or partner&apos;s PAN.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="font-semibold text-indigo-950 block mb-1">Proprietorships &amp; Partnerships:</strong>
                    Can authenticate using <strong className="font-semibold text-slate-950">Electronic Verification Code (EVC)</strong> via an OTP sent to the authorized signatory&apos;s registered mobile number and email.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                5
              </span>
              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1F1646] group-hover:text-[#5C3BFF] transition-colors">
                  Step 5: Instant ARN Generation, LUT Confirmation &amp; Record Archival
                </h3>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  Once authenticated, the GST Common Portal immediately generates your 15-digit <strong className="font-semibold text-slate-950">Application Reference Number (ARN)</strong> and issues an electronic acknowledgment slip. This ARN slip constitutes your active LUT Certificate.
                </p>
                <p className="text-[13.5px] text-slate-900 font-normal leading-relaxed">
                  You can download the PDF anytime via: <code className="text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">Services &gt; User Services &gt; View My Submitted LUTs</code>. Save a copy in your ERP and share the ARN with your Customs Broker, shipping freight forwarder, and international accounting department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparative Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Comparative Analysis: LUT Route vs Export with IGST Payment
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Compliance Parameter</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Export Under LUT (Form RFD-11)</th>
                <th className="py-3 px-4">Export with Payment of IGST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Upfront Tax Liability</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">0% (Nil Payment)</td>
                <td className="py-3 px-4 text-slate-800">Full IGST (Typically 18%)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Working Capital Impact</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">100% Capital Preserved</td>
                <td className="py-3 px-4 text-rose-700">Heavy Capital Blockage</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Filing Frequency</td>
                <td className="py-3 px-4 text-slate-900">Once per Financial Year</td>
                <td className="py-3 px-4 text-slate-900">Per Invoice / Per Shipping Bill</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Refund Processing Mechanism</td>
                <td className="py-3 px-4 text-slate-900">Unutilized ITC Refund (RFD-01)</td>
                <td className="py-3 px-4 text-slate-900">Customs ICEGATE / GST Portal Refund</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Average Clearance Time</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Instantaneous (Under ARN)</td>
                <td className="py-3 px-4 text-slate-900">60 to 120 Days for Tax Refund</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Common Pitfalls */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. 4 Common LUT Filing Mistakes &amp; How to Prevent Them
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">1. Selecting the Incorrect Financial Year:</strong>
            Filing an LUT for the expiring financial year instead of the upcoming one invalidates your zero-rated exports after March 31. Always double-check the fiscal year dropdown before clicking submit.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">2. Listing Ineligible Witnesses:</strong>
            The authorized signatory cannot serve as their own witness, nor can a single individual occupy both witness slots. Ensure two distinct, independent adult individuals are recorded with complete residential details.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">3. Omitting the LUT Declaration on Invoices:</strong>
            Invoices issued under LUT must explicitly state: <em>&quot;Supply Meant For Export Under Letter of Undertaking Without Payment of Integrated Tax&quot;</em> alongside your ARN. Omitting this declaration triggers Customs discrepancies.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-900 block mb-1">4. Overlooking Foreign Exchange Deadlines:</strong>
            For service exports, failing to collect foreign remittance within 1 year violates the statutory undertaking. Maintain a strict ledger of Foreign Inward Remittance Certificates (FIRC) / e-BRCs to avoid interest liabilities.
          </div>
        </div>
      </section>

      {/* Section 5: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Empower Your Export Compliance with Merrafilings
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          While the GST portal facilitates online submissions, regulatory oversights, witness disqualifications, or delayed annual renewals can halt international shipments and subject your business to retrospective tax claims.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings manages the complete export tax lifecycle for hundreds of Indian manufacturing firms, IT software consultancies, and digital service agencies. Our dedicated export compliance desk verifies legal entity eligibility, authenticates Form GST RFD-11 filings within 6 hours, issues renewal alerts before March 31, and assists with seamless unutilized Input Tax Credit (ITC) refund claims under Section 54.
        </p>
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
            Export Working Capital Protection
          </span>
          <h3 className="text-xl sm:text-2xl font-normal tracking-tight">
            Ready to File Your GST LUT for FY 2026-27?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-xl">
            Let Merrafilings export tax specialists file your Form GST RFD-11 with complete witness verification, same-day ARN receipt, and zero shipping disruptions.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
        >
          <span>File Your LUT Today</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </GstLutGuideLayout>
  );
}
