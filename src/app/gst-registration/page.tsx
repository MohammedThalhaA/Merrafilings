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
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Official 15-Digit GSTIN & Form GST REG-06 Certificate" },
  { icon: <Receipt className="w-4 h-4" />, text: "Free Invoicing Software & GSTR-2B ITC Matching Portal" },
  { icon: <Truck className="w-4 h-4" />, text: "Permits Interstate Trade & E-Commerce (Amazon / Flipkart / Meesho)" },
  { icon: <Laptop className="w-4 h-4" />, text: "100% Paperless Digital Filing via Aadhaar OTP Authentication" },
  { icon: <Scale className="w-4 h-4" />, text: "Dedicated Tax Consultant for HSN / SAC Code & Jurisdiction Mapping" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Basic GST Registration",
    shortDesc: "End-to-end GST registration on the GST portal with ARN generation and official certificate download.",
    expandedDesc: "Complete preparation of Part A and Part B of Form GST REG-01, applicant identity verification, principal place of business documentation review, HSN/SAC code classification, Aadhaar OTP authentication, and delivery of Form GST REG-06 registration certificate.",
    price: "₹1,499",
    priceSub: "+ Applicable Government Fees (Nil for Standard Form)",
    badge: "Standard Plan",
    features: [
      "Preparation of Form GST REG-01 (Part A & B)",
      "TRN Generation & Instant ARN Tracking",
      "Principal Place of Business Document Scrutiny",
      "HSN / SAC Code Mapping (Up to 5 Goods/Services)",
      "Aadhaar OTP e-KYC Authentication Guidance",
      "Resolution of Clarification Notice (Form GST REG-03)",
      "Procurement of Form GST REG-06 Certificate",
      "Assigned Tax Consultant Support",
    ],
  },
  {
    name: "GST Registration + 3 Months Filing",
    popular: true,
    badge: "Most Popular",
    shortDesc: "New GST registration plus complete 1st quarter GSTR-1 and GSTR-3B return filing with accountant support.",
    expandedDesc: "Everything in the Basic package plus 3 months of complete return filing compliance. Includes sales invoice data entry, monthly GSTR-1 upload, GSTR-2B purchase input tax credit (ITC) reconciliation, tax challan preparation (PMT-06), and filing of GSTR-3B returns by a dedicated accountant.",
    price: "₹7,899",
    priceSub: "Registration + 1 Full Quarter Compliance",
    features: [
      "Everything in Basic GST Registration Package",
      "Form GST REG-06 Registration Certificate",
      "3 Months GSTR-1 & GSTR-3B Return Filing",
      "Monthly GSTR-2B Input Tax Credit (ITC) Reconciliation",
      "Challan Generation (PMT-06) & Tax Payment Advisory",
      "Free Invoicing & E-Way Bill Billing Portal Access",
      "Bank Account Linking on GST Portal (Rule 10A)",
      "Dedicated Personal Accountant Support",
    ],
  },
  {
    name: "Annual GST Registration & Compliance",
    shortDesc: "Complete 1-year total compliance suite covering registration, 12 monthly filings, and annual GSTR-9.",
    expandedDesc: "Comprehensive peace-of-mind compliance for growing enterprises. Covers initial GST registration, 12 months of GSTR-1 and GSTR-3B return filings, continuous GSTR-2B vendor reconciliation, handling departmental notices (DRC-01/REG-03), and preparation of the annual GSTR-9 return.",
    price: "₹19,899",
    priceSub: "12 Months Complete Corporate Tax Suite",
    badge: "Enterprise Suite",
    features: [
      "Full GSTIN Registration & Legal Jurisdiction Mapping",
      "12 Months Complete GSTR-1 & GSTR-3B Filing",
      "Annual GSTR-9 Return Preparation & Scrutiny",
      "GSTR-9C Reconciliation Scrutiny (Turnover > ₹5 Cr)",
      "Monthly Vendor GSTR-2B Reconciliation & ITC Maximization",
      "Handling Departmental Clarifications & Notices",
      "Addition of Additional Places of Business / Amendments",
      "Dedicated Senior Chartered Accountant (CA) Advisory",
    ],
  },
];

function GstRegistrationGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-semibold text-slate-950">Goods and Services Tax (GST)</strong> is India&apos;s unified indirect tax system that consolidated a fragmented regime of VAT, Central Excise, Service Tax, Octroi, and Entry Tax into a transparent single-tax framework. Governed by the <strong className="font-semibold text-slate-950">Central Goods and Services Tax (CGST) Act, 2017</strong>, obtaining a <strong className="font-semibold text-slate-950">GST Identification Number (GSTIN)</strong> is legally mandatory for businesses exceeding the statutory turnover threshold and for all entities participating in interstate commerce or online e-commerce platforms.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          At Merrafilings, our registered tax consultants and chartered accountants streamline your GST registration journey from initial Temporary Reference Number (TRN) creation to biometric Aadhaar verification, document vetting, clarification resolution (Form GST REG-03), and final issuance of your statutory <strong className="font-semibold text-slate-950">Form GST REG-06 Registration Certificate</strong> within 3 to 7 working days.
        </p>
      </div>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Registration Fast Facts</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Standard Processing SLA</span>
            <strong className="font-semibold text-slate-950 text-[13px]">3 to 7 Working Days</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Turnover Threshold (Goods)</span>
            <strong className="font-semibold text-slate-950 text-[13px]">₹40 Lakhs (Normal States)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Official Certificate</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Form GST REG-06 (Lifetime)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Anatomy of GSTIN */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Anatomy of the 15-Digit GST Identification Number (GSTIN)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Every registered taxpayer is allocated a unique 15-digit alphanumeric identifier based on their Permanent Account Number (PAN):
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3">Character Position</th>
                <th className="p-3">Component Representation</th>
                <th className="p-3">Example Segment</th>
                <th className="p-3">Legal Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-900 font-normal">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Digits 1 &amp; 2</td>
                <td className="p-3">State Code (Census 2011)</td>
                <td className="p-3 font-mono text-indigo-700">33 (Tamil Nadu) / 27 (Maharashtra)</td>
                <td className="p-3">Determines geographic state tax jurisdiction</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Digits 3 to 12</td>
                <td className="p-3">10-Digit Permanent Account Number (PAN)</td>
                <td className="p-3 font-mono text-indigo-700">AAACM1234F</td>
                <td className="p-3">Ties GST identity directly to CBDT Income Tax records</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Digit 13</td>
                <td className="p-3">Entity Number / Registration Count</td>
                <td className="p-3 font-mono text-indigo-700">1 (First registration in state)</td>
                <td className="p-3">Permits multiple business verticals under one PAN</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Digit 14</td>
                <td className="p-3">Default Alpha Character</td>
                <td className="p-3 font-mono text-indigo-700">Z</td>
                <td className="p-3">Retained for future statutory expansion</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-950">Digit 15</td>
                <td className="p-3">Checksum Digit</td>
                <td className="p-3 font-mono text-indigo-700">5 (Alphanumeric)</td>
                <td className="p-3">Automated mathematical error-detection code</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Who Needs GST Registration? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who Needs Mandatory GST Registration in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 22 and Section 24 of the CGST Act, registration is triggered under two primary regimes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">A. Turnover-Based Thresholds:</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li><strong className="font-medium text-slate-950">Suppliers of Goods:</strong> Annual aggregate turnover exceeding ₹40 Lakhs (₹20 Lakhs for Special Category States).</li>
              <li><strong className="font-medium text-slate-950">Suppliers of Services:</strong> Annual aggregate turnover exceeding ₹20 Lakhs (₹10 Lakhs for Special Category States).</li>
              <li><strong className="font-medium text-slate-950">Special Category States:</strong> Manipur, Mizoram, Nagaland, and Tripura have a reduced limit of ₹10 Lakhs.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">B. Mandatory Registration (Irrespective of Turnover):</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>Interstate taxable suppliers selling goods across state borders.</li>
              <li>E-commerce sellers on Amazon, Flipkart, Meesho, or Shopify.</li>
              <li>Casual taxable persons and non-resident taxable persons.</li>
              <li>Persons required to pay tax under Reverse Charge Mechanism (RCM).</li>
              <li>Input Service Distributors (ISD) and agents of suppliers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Mandatory Documents for GST Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Document requirements vary depending on your commercial entity type:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Sole Proprietorship</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>PAN Card &amp; Aadhaar Card of Proprietor</li>
              <li>Passport-size photograph of Proprietor</li>
              <li>Electricity bill / Property tax receipt</li>
              <li>Rent agreement &amp; Landlord NOC (if rented)</li>
              <li>Cancelled cheque or bank statement copy</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Partnership Firm / LLP</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>PAN Card of Firm / LLP</li>
              <li>Partnership Deed or LLP Agreement</li>
              <li>Certificate of Incorporation (for LLP)</li>
              <li>PAN &amp; Aadhaar of all Designated Partners</li>
              <li>Board Resolution / Authorization Letter</li>
              <li>Premises ownership proof &amp; Bank statement</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="font-semibold text-indigo-950 block mb-1.5">Private Limited Company</strong>
            <ul className="space-y-1 text-slate-800 list-disc list-inside">
              <li>Company PAN Card &amp; Certificate of Incorporation</li>
              <li>Memorandum (MOA) &amp; Articles (AOA)</li>
              <li>PAN &amp; Aadhaar of all Directors</li>
              <li>Board Resolution appointing Authorized Signatory</li>
              <li>Registered Office electricity bill &amp; NOC</li>
              <li>Company Bank Account cancelled cheque</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. The 5-Step Online GST Registration Workflow
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings manages the complete filing workflow across five coordinated milestones:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Part A Lodgment &amp; TRN Generation</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  We submit legal business name, PAN, primary email, and mobile number on the GST Common Portal. Upon dual-OTP verification, the system instantly generates a 15-digit Temporary Reference Number (TRN).
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Part B Submission &amp; HSN Mapping</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  We populate comprehensive business parameters: state &amp; central tax jurisdictions (Ward/Circle), partner/director bio-data, principal and additional places of business, bank account details, and precise HSN/SAC code classifications.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Aadhaar Authentication &amp; ARN Issuance</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  The primary authorized signatory completes instant biometric Aadhaar OTP verification via the secure UIDAI authentication link. Once validated, the system issues an official Application Reference Number (ARN) for real-time tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Departmental Scrutiny &amp; Clarification Handling</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  The assigned GST Tax Officer reviews the application within 7 working days. If any clarification is issued on Form GST REG-03 (e.g. clarification regarding address utility bills), Merrafilings drafts and submits Form GST REG-04 rejoinders within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">Certificate Issuance (Form GST REG-06)</h4>
                <p className="text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
                  Upon approval, the system generates the official Certificate of Registration (Form GST REG-06) containing your active 15-digit GSTIN, legal name, trade name, and constitution of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Reasons for Rejection */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Common Rejection Pitfalls and How Merrafilings Protects You
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Over 30% of self-filed GST applications face rejection or delays due to avoidable procedural errors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Premises Ownership Ambiguity:</strong>
            Submitting utility bills older than 2 months, blurry scanned copies, or missing Landlord NOC letters. Merrafilings reviews all address deeds before portal submission.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">PAN &amp; Name Mismatches:</strong>
            Discrepancies between the trade name on the PAN database and the GST application. We execute automated pre-validation checks against CBDT records.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Opting Out of Aadhaar Authentication:</strong>
            Failing to authenticate via Aadhaar triggers compulsory on-site physical inspection by the GST inspector, delaying registration by 30+ days.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Rule 10A Bank Account Linking:</strong>
            Failing to furnish valid bank account details within 30 days of registration grant leads to automated suspension of the GSTIN. We assist with post-grant bank linking.
          </div>
        </div>
      </section>

      {/* Section 6: Statutory Penalties */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Statutory Penalties for Operating Without GST Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 122 of the CGST Act, operating a business liable for registration without obtaining a valid GSTIN attracts severe financial liabilities:
        </p>

        <div className="p-4.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-[13px] text-amber-950 font-normal leading-relaxed">
          <div className="flex items-center gap-2 font-semibold text-amber-900 text-sm mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Section 122(1) Financial Penalty</span>
          </div>
          Any taxable person who fails to obtain GST registration when liable is subject to a penalty equal to <strong className="font-semibold text-amber-950">100% of the tax amount evaded or ₹10,000, whichever is higher</strong>. In addition, all sales made without GSTIN are treated as clandestine removals, depriving the entity of Input Tax Credit and exposing directors/proprietors to prosecution under Section 132.
        </div>
      </section>
    </>
  );
}

const FAQ_COL_1 = [
  {
    q: "Is GST registration mandatory for a newly formed company or LLP?",
    a: "If the newly formed Private Limited Company or LLP engages exclusively in intrastate trade and its turnover does not exceed ₹40 Lakhs (for goods) or ₹20 Lakhs (for services), registration is not immediately mandatory. However, if the business engages in interstate sales, operates on e-commerce platforms (Amazon/Flipkart), or wishes to claim Input Tax Credit on capital goods and setup expenses, immediate registration is legally required.",
  },
  {
    q: "What is the turnover limit for GST registration across different states?",
    a: "For businesses supplying goods, the threshold is ₹40 Lakhs for normal states and ₹20 Lakhs for special category states (Uttarakhand, Meghalaya, Sikkim, etc.). For service providers, the limit is ₹20 Lakhs for normal states and ₹10 Lakhs for special category states. Manipur, Mizoram, Nagaland, and Tripura have a threshold of ₹10 Lakhs for both goods and services.",
  },
  {
    q: "Can I voluntarily register for GST even if my turnover is below the threshold?",
    a: "Yes. Under Section 25(3) of the CGST Act, any business can voluntarily apply for GST registration. Voluntary registration allows you to collect GST, claim Input Tax Credit on all purchases, issue GST-compliant B2B invoices, sell through e-commerce marketplaces, and build corporate credibility with institutional clients.",
  },
  {
    q: "Can I use a residential address as my registered place of business for GST?",
    a: "Yes. A residential apartment or home office can serve as the principal place of business for GST registration. You will need to provide an electricity bill (not older than 2 months), municipal property tax receipt, and an executed No Objection Certificate (NOC) from the property owner (e.g. parents or landlord).",
  },
  {
    q: "How long does it take to get a GST registration number in India?",
    a: "With Aadhaar authentication, if all documents are clear and verified by the tax officer without queries, the GST registration certificate (Form GST REG-06) is typically issued within 3 to 7 working days. If a clarification notice (REG-03) is issued, our team resolves it within 24 hours.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What happens if a clarification notice (Form GST REG-03) is issued?",
    a: "If the tax officer requires additional documentation regarding your address proof, business activities, or jurisdiction, they issue Form GST REG-03. The applicant has 7 working days to submit a clarification via Form GST REG-04. Merrafilings handles the drafting and submission of the rejoinder at no extra cost.",
  },
  {
    q: "Do I need separate GST registrations if I operate in multiple states?",
    a: "Yes. GST registration is state-specific. If your business operates branches, warehouses, or fulfillment centers across multiple states, you must obtain a separate GSTIN in each state where you maintain a place of business.",
  },
  {
    q: "What is the Composition Scheme under Section 10 of the GST Act?",
    a: "The Composition Scheme is a simplified tax mechanism for small taxpayers with annual turnover up to ₹1.5 Crores (₹75 Lakhs for Special Category States). Composition dealers pay tax at a low flat rate (1% for manufacturers/traders, 5% for restaurants) and file quarterly CMP-08 statements instead of monthly returns, but they cannot issue tax invoices or claim Input Tax Credit.",
  },
  {
    q: "What is the mandatory Rule 10A bank account linking requirement?",
    a: "Under Rule 10A of the CGST Rules, newly registered taxpayers must update their bank account details on the GST portal within 30 days from the date of registration grant or before filing the first return. Failure to link a valid bank account in the name of the registered entity can result in automatic portal suspension of the GSTIN.",
  },
  {
    q: "Can a GST registration be canceled or surrendered if the business closes?",
    a: "Yes. If a business discontinues operations, is transferred, or falls below the taxable turnover threshold, the proprietor or authorized signatory can file Form GST REG-16 online for voluntary cancellation of registration.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Online GST Return Filing by Accountants: Complete Guide",
    href: "/gst-return-filing",
  },
  {
    title: "GST Letter of Undertaking (LUT) Filing for Exporters",
    href: "/gst-lut",
  },
  {
    title: "Private Limited Company Registration Online",
    href: "/company-registration",
  },
  {
    title: "Limited Liability Partnership (LLP) Registration",
    href: "/llp-registration",
  },
  {
    title: "Udyam Registration for MSMEs in India",
    href: "/udyam-registration",
  },
  {
    title: "Trademark Registration Online in India",
    href: "/trademark-registration",
  },
];

const RELATED_SERVICES_TAGS = [
  "GST Return Filing",
  "GST LUT Filing",
  "Company Registration",
  "LLP Registration",
  "Udyam MSME",
  "Trade License",
  "Digital Signature",
  "Trademark Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "gst registration online india",
  "how to apply for gst number",
  "gst registration fees documents",
  "turnover limit for gst in india",
  "form gst reg 06 download pdf",
  "aadhaar authentication for gst",
  "gst registration for pvt ltd company",
  "composition scheme gst limit",
];

export default function GstRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Central Goods and Services Tax Act, 2017 & Integrated GST Compliance"
      heroTitle={
        <>
          <span>Online </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Registration
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Obtain your 15-digit GSTIN easily. Fast-track TRN generation, Aadhaar e-KYC authentication, document verification, and official Form GST REG-06 registration certificate delivered in 3 to 7 working days."
      formTitle="GST Registration Advisory"
      formSubtitle="Consult our qualified tax advocates and CAs for jurisdiction selection, HSN mapping, and fast-track portal approval."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">GST registration fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for new GST registration, quarterly compliance bundle, or 1-year total corporate tax suite."
      breadcrumbCurrent="GST Registration"
      guideTitle="Complete Guide to GST Registration Online in India - Eligibility, Documents & Process"
      guideContent={<GstRegistrationGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about GST eligibility, turnover limits, documents, Aadhaar verification, and Rule 10A."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
