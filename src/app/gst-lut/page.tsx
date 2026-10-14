"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
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
  BadgePercent,
  Building2,
  Coins,
  Check,
  HelpCircle,
  TrendingUp,
  Receipt,
  FileCheck,
  Layers,
  MapPin,
  Laptop,
  Store,
  Truck,
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Globe2,
  FileSignature,
  DollarSign,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Clock className="w-4 h-4" />, text: "Valid for the Entire Financial Year (April 1 to March 31)" },
  { icon: <Globe2 className="w-4 h-4" />, text: "Export Goods & Software Services at 0% IGST without Tax Outflow" },
  { icon: <FileSignature className="w-4 h-4" />, text: "Immediate Official Form GST RFD-11 ARN Acknowledgment in 24 Hours" },
  { icon: <Building2 className="w-4 h-4" />, text: "Legally Permitted for Supplies to Special Economic Zones (SEZs)" },
  { icon: <Scale className="w-4 h-4" />, text: "Complete Filing with 2 Independent Witness Particulars & CA Advisory" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "GST LUT Annual Filing",
    shortDesc: "Preparation and online submission of Form GST RFD-11 Letter of Undertaking on the GST portal.",
    expandedDesc: "Complete preparation of Form GST RFD-11, verification of Import Export Code (IEC) and active GSTIN status, documentation of two independent witnesses, electronic signing via DSC or EVC, and download of the official ARN acknowledgment certificate valid for the entire financial year.",
    price: "₹1,999",
    priceSub: "Valid for Entire Current Financial Year",
    badge: "Standard Plan",
    features: [
      "Preparation of Form GST RFD-11 Letter of Undertaking",
      "Verification of GSTIN & IEC Code Particulars",
      "Documentation of 2 Independent Witnesses",
      "Digital Signature (DSC) / Aadhaar EVC Verification",
      "Immediate ARN Acknowledgment Receipt Generation",
      "Delivery of Official LUT Certificate PDF",
      "Guidance on Export Invoicing & Rule 96A Compliance",
      "Assigned Export Tax Consultant Support",
    ],
  },
  {
    name: "LUT + 1 Year Exporter GST Filing",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Annual LUT submission plus 12 months of zero-rated export GSTR-1 and GSTR-3B return compliance.",
    expandedDesc: "Designed for active exporters and IT/consulting service firms. Includes annual Form GST RFD-11 filing, 12 monthly GSTR-1 filings with detailed Table 6A export invoice uploads, GSTR-3B summary filings, foreign currency inward remittance verification, and continuous ITC accumulation tracking.",
    price: "₹7,899",
    priceSub: "LUT + 12 Months Complete Export Compliance",
    features: [
      "Everything in the Annual GST LUT Package",
      "Immediate Form GST RFD-11 Filing & Approval",
      "12 Months Complete GSTR-1 & GSTR-3B Filings",
      "Table 6A Export Invoice Reporting (Shipping Bill / Port Code)",
      "Zero-Rated Supply Verification & Invoicing Guidance",
      "Accumulated Input Tax Credit (ITC) Ledger Tracking",
      "Advice on Foreign Inward Remittance (FIRC / BRC)",
      "Dedicated Personal Accountant & Tax Advisory",
    ],
  },
  {
    name: "Exporter Growth Suite (LUT + ITC Refund)",
    shortDesc: "Comprehensive suite covering LUT, 12 months filing, and Form RFD-01 accumulated ITC refund filing.",
    expandedDesc: "The ultimate package for capital-intensive exporters. Includes annual LUT filing, 12 months comprehensive return filings, preparation and electronic submission of Form GST RFD-01 under Rule 89 for refund of accumulated unutilized Input Tax Credit, FIRC/BRC reconciliation, and representation before the GST refund sanctioning authority.",
    price: "₹19,899",
    priceSub: "Complete Exporter Tax & Refund Management",
    badge: "Enterprise Exporter",
    features: [
      "Annual Form GST RFD-11 LUT Submission & Auto-Renewal",
      "12 Months Full GSTR-1 & GSTR-3B Return Filings",
      "Preparation of Form GST RFD-01 for Accumulated ITC Refund",
      "Rule 89 Statement 3 / 3A Export Data Reconciliation",
      "Chartered Accountant (CA) Certification for Refund",
      "Bank Realization Certificate (BRC / FIRC) Verification",
      "Handling Deficiency Memos (Form RFD-03) & Sanctions",
      "Priority Senior CA Representation & Advisory",
    ],
  },
];

function GstLutGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          A <strong className="font-semibold text-slate-950">Letter of Undertaking (LUT)</strong> under GST is a statutory declaration submitted on <strong className="font-semibold text-slate-950">Form GST RFD-11</strong> pursuant to <strong className="font-semibold text-slate-950">Rule 96A of the CGST Rules, 2017</strong>. It legally empowers registered Indian exporters of goods and services to make &quot;zero-rated supplies&quot; under Section 16 of the Integrated Goods and Services Tax (IGST) Act without paying 18% Integrated GST upfront.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          Without an active LUT, exporters are legally compelled to pay Integrated GST on every export consignment or service invoice out of pocket and subsequently endure months of bureaucratic delay seeking cash refunds. Merrafilings provides fast-track, paperless GST LUT lodgment on the GST Common Portal, securing your official Application Reference Number (ARN) within 24 hours so your working capital remains 100% liquid.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST LUT Statutory Blueprint</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Governing Rule</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Rule 96A of CGST Rules, 2017</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Form</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Form GST RFD-11</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Validity Period</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">1 Financial Year (Expires 31st March)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Why Exporters Must File LUT */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Filing an LUT is Vital for Every Exporter
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Exporting without an active LUT damages corporate liquidity and creates heavy tax reconciliation overheads:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">1. Zero Working Capital Blockage:</strong>
            Exporters do not need to lock up 18% of their gross invoice value in IGST payments. Cash flows remain completely intact for raw materials, manufacturing, and business expansion.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">2. Elimination of Refund Hassles:</strong>
            Filing under payment of IGST requires tracking customs ICEGATE transmission and awaiting portal refunds. An LUT makes the invoice zero-rated at the point of origin.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">3. Covers Services &amp; Digital SaaS Exports:</strong>
            Freelancers, software developers, BPOs, and digital agencies invoicing overseas clients in foreign convertible currency can bill with 0% tax seamlessly.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">4. Extended to Special Economic Zones (SEZs):</strong>
            Supplies made to SEZ Units or SEZ Developers are deemed exports and qualify for zero-rated LUT benefits, expanding your institutional B2B reach.
          </div>
        </div>
      </section>

      {/* Section 2: Who is Eligible & Ineligible */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Eligibility Criteria: Who Can File and Who Cannot
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Central Board of Indirect Taxes and Customs (CBIC) establishes clear eligibility parameters:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-emerald-700 block mb-1.5 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Eligible for LUT Facility
            </strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>Any registered taxpayer supplying goods outside India.</li>
              <li>Service providers invoicing foreign clients (IT, Consulting, Design).</li>
              <li>Suppliers delivering goods or services to SEZ Units or Developers.</li>
              <li>Entities intending to supply without payment of IGST.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-red-700 block mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              Ineligible: Must File Export Bond
            </strong>
            <p className="text-slate-800 leading-relaxed">
              Any person or corporate entity who has been prosecuted for any tax offense under the CGST Act, IGST Act, or existing laws where the amount of tax evaded <strong className="font-semibold text-slate-950">exceeds ₹250 Lakhs (₹2.5 Crores)</strong> is legally barred from filing an LUT. Such entities must submit a formal Export Bond on non-judicial stamp paper backed by a bank guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: LUT vs Export Bond Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Comparative Analysis: GST LUT vs. Export Bond
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Understanding the procedural and financial distinctions between an LUT and an Export Bond:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Feature Parameter</th>
                <th className="p-3">Letter of Undertaking (LUT)</th>
                <th className="p-3">Export Bond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Filing Mechanism</td>
                <td className="p-3 text-emerald-700 font-medium">100% Online Paperless on GST Portal</td>
                <td className="p-3">Physical Non-Judicial Stamp Paper Submission</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Bank Guarantee Requirement</td>
                <td className="p-3 text-emerald-700 font-medium">Zero Bank Guarantee Required</td>
                <td className="p-3 text-red-600 font-medium">Mandatory Bank Guarantee (typically 15% of bond value)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Statutory Form</td>
                <td className="p-3">Form GST RFD-11</td>
                <td className="p-3">Form GST RFD-11 with Annexure Bond Format</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Validity Duration</td>
                <td className="p-3">Entire Financial Year (April 1 to March 31)</td>
                <td className="p-3">Covers specific running bond value or single export consignment</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Approval Turnaround</td>
                <td className="p-3 text-emerald-700 font-medium">Instant ARN Generation within 24 Hours</td>
                <td className="p-3">7 to 15 working days following physical officer verification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Mandatory Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Documents &amp; Information Required for GST LUT Filing
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Filing an LUT online requires basic corporate and witness details:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Business &amp; Exporter Particulars</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>Active 15-Digit GSTIN &amp; Portal Login Credentials</li>
              <li>Import Export Code (IEC) issued by DGFT (for goods exporters)</li>
              <li>PAN Card of the Business Entity</li>
              <li>Authorized Signatory KYC &amp; Class 3 DSC / Aadhaar OTP</li>
              <li>Previous Financial Year LUT Copy (in case of renewal)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Two Independent Witness Details</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>Full Legal Names of Witness 1 &amp; Witness 2</li>
              <li>Occupation of both witnesses (e.g. Accountant, Manager, Engineer)</li>
              <li>Residential or Business Address of both witnesses</li>
              <li>PAN / Aadhaar numbers (for identity verification)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Step-by-Step Filing Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Step-by-Step Guide: Filing LUT on the GST Portal
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings executes the online filing through the official GST Common Portal:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Portal Access &amp; Form RFD-11 Navigation</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Log in to the GST Portal (gst.gov.in) &rarr; Navigate to <em>Services &rarr; User Services &rarr; Furnish Letter of Undertaking (LUT)</em>. Select the applicable Financial Year from the drop-down menu.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Filing Declaration &amp; Statutory Undertakings</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Check the three mandatory statutory declaration boxes: (1) To export goods/services within 3 months of invoice date, (2) To observe all provisions of the GST Act, and (3) To pay IGST with 18% interest if goods are not exported within the stipulated timeframe.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Populating Independent Witness Particulars</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Enter the complete legal name, occupation, and residential address of Witness 1 and Witness 2 into the portal data fields.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Sign with DSC or EVC &amp; Download ARN Receipt</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Sign the application electronically using Class 3 Digital Signature Certificate (mandatory for Companies/LLPs) or Aadhaar OTP / EVC (for Proprietorships). The portal immediately generates the official Application Reference Number (ARN) receipt confirming your active LUT status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Annual Renewal Requirement */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Annual LUT Renewal: Don&apos;t Let Your Exemption Expire
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          An LUT is strictly valid for <strong className="font-semibold text-slate-950">one financial year</strong> and automatically expires on <strong className="font-semibold text-slate-950">31st March</strong> of that year.
        </p>

        <div className="p-4.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-[13px] text-indigo-950 font-normal leading-relaxed">
          <strong className="font-semibold text-indigo-950 block mb-1">Timely March Renewal is Mandatory:</strong>
          Exporters must file a fresh LUT for the upcoming fiscal year before issuing any export invoices dated on or after 1st April. If you generate an export invoice in April without a renewed LUT, you are legally liable to pay 18% IGST on that transaction. Merrafilings maintains automated compliance docketing to renew your LUT every March.
        </div>
      </section>
    </>
  );
}

const FAQ_COL_1 = [
  {
    q: "Is it mandatory to file an LUT if I export software or IT consulting services?",
    a: "Yes. Software exports, IT development, digital marketing, SaaS subscriptions, and remote consulting provided to foreign clients constitute 'Export of Services' under Section 2(6) of the IGST Act. To invoice foreign clients without charging 18% GST, you must have an active Letter of Undertaking (LUT) filed on Form GST RFD-11.",
  },
  {
    q: "How long is a Letter of Undertaking (LUT) valid under GST?",
    a: "An LUT is valid for the financial year in which it is filed, expiring automatically on 31st March of that fiscal year. A fresh LUT must be filed for every new financial year starting 1st April.",
  },
  {
    q: "Can a freelancer or sole proprietor file an LUT without a Digital Signature Certificate (DSC)?",
    a: "Yes. While Private Limited Companies and LLPs are statutorily required to sign Form GST RFD-11 using a Class 3 Digital Signature Certificate (DSC), Sole Proprietors and Individual freelancers can authenticate and file using Aadhaar OTP / Electronic Verification Code (EVC).",
  },
  {
    q: "What is the consequence of not filing an LUT before exporting?",
    a: "If goods or services are exported without an active LUT, the transaction cannot be treated as zero-rated under bond. The exporter is legally required to pay full Integrated GST (typically 18%) out of pocket on the invoice value, pay late interest if delayed, and then apply for a tax refund via Form RFD-01.",
  },
  {
    q: "What is the time limit for realizing foreign currency remittances under an LUT?",
    a: "For export of services, foreign exchange remittance must be received in convertible foreign currency (or in Indian Rupees wherever permitted by RBI) within one year from the date of the export invoice. For export of goods, the goods must be physically dispatched out of India within 3 months of the invoice date.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Who can act as witnesses on Form GST RFD-11 for an LUT?",
    a: "Any two independent adult individuals can serve as witnesses. They can be your colleagues, employees, friends, accountants, or business associates. You only need to furnish their legal name, occupation, and residential or commercial address.",
  },
  {
    q: "Can I claim a refund of accumulated Input Tax Credit (ITC) if I export under an LUT?",
    a: "Yes! When you export under an LUT with 0% IGST, you accumulate Input Tax Credit on input goods and services (e.g. software subscriptions, hardware purchases, rent, office supplies). Under Section 54 of the CGST Act, you can file Form GST RFD-01 to claim a 100% cash refund of this unutilized accumulated ITC directly into your bank account.",
  },
  {
    q: "Does an LUT cover supplies made to SEZ units or SEZ developers?",
    a: "Yes. Under Section 16(1)(b) of the IGST Act, supply of goods or services to a Special Economic Zone (SEZ) developer or an SEZ unit is treated as a zero-rated supply. An exporter can supply to SEZ entities without payment of IGST by quoting their active LUT number.",
  },
  {
    q: "Do I need an Import Export Code (IEC) to file a GST LUT?",
    a: "Exporters of physical goods must possess an active Import Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT). For pure service exporters (such as software developers or consultants), having an IEC is legally recommended but an active GSTIN is the primary statutory requirement for LUT filing.",
  },
  {
    q: "How quickly does the GST portal issue approval after submitting Form RFD-11?",
    a: "LUT submission is largely automated. Upon successful verification of the declarations and digital signing, the GST Common Portal instantly generates the Application Reference Number (ARN) receipt. Merrafilings transmits your official LUT certificate within 24 hours.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Understanding the LUT Certificate for GST Compliance",
    href: "/gst-lut/gst-lut-certificate-for-exporters-essential-guide",
  },
  {
    title: "Understanding the GST LUT Form: An Essential Guide for Exporters",
    href: "/gst-lut/understanding-the-gst-lut-form-a-guide-for-exporters",
  },
  {
    title: "GST LUT Filing in 5 Steps: The Complete Exporter Guide",
    href: "/gst-lut/gst-lut-filing-a-simple-5step-guide",
  },
  {
    title: "Introduction to the GST LUT Process",
    href: "/gst-lut/introduction-to-the-gst-lut-process",
  },
  {
    title: "Understanding GST LUT Form: A Comprehensive Guide",
    href: "/gst-lut/understanding-the-gst-lut-form-key-insights",
  },
];

const RELATED_SERVICES_TAGS = [
  "GST Registration",
  "GST Return Filing",
  "IEC Registration",
  "RCMC Registration",
  "Company Registration",
  "Trade License",
  "Digital Signature",
  "Trademark Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "gst lut filing online",
  "form gst rfd 11 format",
  "how to export without igst",
  "lut validity financial year",
  "lut renewal last date 31 march",
  "export of services zero rated gst",
  "lut vs export bond difference",
  "itc refund on export under lut",
];

export default function GstLutPage() {
  return (
    <ServicePageTemplate
      badgeText="Rule 96A CGST Rules, 2017 & Section 16 IGST Act Zero-Rated Supplies"
      heroTitle={
        <>
          <span>Export Without IGST – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST LUT Filing
          </span>{" "}
          <span>Online</span>
        </>
      }
      heroSubtitle="File Form GST RFD-11 Letter of Undertaking (LUT) on the GST portal to export goods and services with 0% IGST. Eliminate blocked working capital, avoid claiming tedious tax refunds, and stay 100% compliant for the entire financial year."
      formTitle="GST LUT Advisory Desk"
      formSubtitle="Consult our export tax specialists for zero-rated invoicing, witness documentation, and fast-track Form GST RFD-11 submission."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">export tax filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for annual LUT filing, 12 months exporter return compliance, or complete ITC refund management."
      breadcrumbCurrent="GST LUT"
      guideTitle="Comprehensive Guide to GST Letter of Undertaking (LUT) Filing in India - Rule 96A & Zero-Rated Exports"
      guideContent={<GstLutGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about LUT eligibility, export invoices, foreign inward remittances, SEZ supplies, and annual renewals."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
