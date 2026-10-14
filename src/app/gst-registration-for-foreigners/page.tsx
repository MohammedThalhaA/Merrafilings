"use client";

import React, { useState } from "react";
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
  Plane,
  FileSignature,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Globe2 className="w-4 h-4" />, text: "Mandatory NRTP Registration Under Section 24 & Section 27 CGST Act" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "No Indian PAN Required – Foreign Passport & Home Country TIN Accepted" },
  { icon: <Users className="w-4 h-4" />, text: "Resident Indian Authorised Signatory & Representation Services" },
  { icon: <Clock className="w-4 h-4" />, text: "90-Day Initial Validity with 90-Day Extension Support (Form GST REG-11)" },
  { icon: <Receipt className="w-4 h-4" />, text: "Monthly Form GSTR-5 Filing & Advance Tax Deposit Refund Recovery" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "NRTP Basic Registration",
    shortDesc: "Temporary 90-day GSTIN registration for foreign companies, exhibitors, and overseas entities.",
    expandedDesc: "Complete preparation and filing of Form GST REG-09 on the GST Common Portal using valid foreign passport credentials and home country tax ID. Includes advance tax challan preparation, coordinating with your Indian authorized signatory, and obtaining the official 15-digit GSTIN.",
    price: "₹24,989",
    priceSub: "Excludes Advance Tax Deposit (Paid to Govt)",
    badge: "90-Day Setup",
    features: [
      "Preparation & Filing of Form GST REG-09",
      "Foreign Passport & Apostilled TIN Documentation Scrutiny",
      "Advance Tax Liability Calculation & Challan Generation",
      "Indian Authorized Signatory Liaison Support",
      "TRN & Instant ARN Generation on GST Portal",
      "Resolution of Clarification Notices (GST REG-03)",
      "Procurement of 90-Day Valid GSTIN Certificate",
      "Assigned International Tax Specialist",
    ],
  },
  {
    name: "NRTP Registration + 90-Day Returns",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Complete registration plus 3 monthly GSTR-5 return filings and advance tax refund assistance.",
    expandedDesc: "Comprehensive turnkey package for foreign entities operating in India for up to 90 days. Covers initial Form GST REG-09 registration, monthly Form GSTR-5 return filings, sales invoicing compliance, input tax credit tracking on imported goods, and final unutilized advance tax refund processing under Section 13.",
    price: "₹34,989",
    priceSub: "Full 90-Day End-to-End Compliance",
    features: [
      "Everything in NRTP Basic Registration Package",
      "Form GST REG-06 Official Registration Certificate",
      "3 Months Complete Form GSTR-5 Return Filings",
      "Invoicing & E-Way Bill Compliance Assistance",
      "Input Tax Credit (ITC) Reconciliation for Imported Goods",
      "Extension Filing Support (Form GST REG-11 if needed)",
      "Final Advance Tax Refund Application (GSTR-5 Table 13)",
      "Dedicated Senior Chartered Accountant (CA) Manager",
    ],
  },
  {
    name: "Foreign Corporate Full Setup",
    shortDesc: "Permanent Indian Subsidiary incorporation, permanent GSTIN, and 12-month compliance suite.",
    expandedDesc: "Ideal for foreign enterprises establishing a permanent presence in India. Covers incorporation of a wholly-owned Indian subsidiary (Pvt Ltd), obtaining corporate PAN/TAN, permanent GST registration without 90-day expiration, RBI FDI compliance reporting (FC-GPR), and 1 year of complete tax filings.",
    price: "₹49,989",
    priceSub: "Permanent Subsidiary & 1 Year Compliance",
    badge: "Permanent Setup",
    features: [
      "Wholly Owned Indian Subsidiary (Pvt Ltd) Incorporation",
      "Corporate Indian PAN, TAN & Bank Account Opening",
      "Permanent Regular GST Registration (No 90-Day Expiry)",
      "Import Export Code (IEC) Issuance from DGFT",
      "RBI FDI Compliance & Form FC-GPR Reporting Advisory",
      "12 Months Complete GSTR-1 & GSTR-3B Return Filings",
      "Annual GSTR-9 Preparation & Audit Advisory",
      "Dedicated Corporate Legal & International Tax Partner",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "Who qualifies as a Non-Resident Taxable Person (NRTP) under Indian GST?",
    a: "Under Section 2(77) of the CGST Act, 2017, a Non-Resident Taxable Person is any individual, corporation, or entity that occasionally supplies goods or services in India but has no fixed place of business or residence in India. This includes overseas businesses participating in trade exhibitions, international consulting firms providing on-site services, and foreign companies supplying goods within Indian domestic territory.",
  },
  {
    q: "Is GST registration mandatory for foreign businesses, or is there a turnover threshold?",
    a: "Under Section 24(v) of the CGST Act, GST registration is compulsory for all Non-Resident Taxable Persons from the very first rupee of taxable supply. The standard domestic turnover exemption threshold (₹20 Lakhs for services or ₹40 Lakhs for goods) does not apply to non-residents. Operating without registration attracts heavy penalties and seizure of consignments.",
  },
  {
    q: "Does a foreign applicant need an Indian PAN card to obtain GST registration?",
    a: "No. A foreign individual or overseas entity is not required to obtain an Indian PAN. Under Rule 13 of the CGST Rules, the application on Form GST REG-09 is authenticated using the applicant's valid foreign passport and the Tax Identification Number (TIN) or Unique Identification Number issued by their home country government.",
  },
  {
    q: "Why is a Resident Indian Authorised Signatory mandatory for foreign GST registration?",
    a: "Under Rule 13(1) of the CGST Rules, a foreign applicant must appoint an authorized signatory who is a resident of India holding a valid Indian PAN and Aadhaar. The resident signatory represents the foreign entity for statutory notices, signs electronic filings on the portal, and ensures local tax accountability.",
  },
  {
    q: "What is the advance tax deposit requirement for NRTP registration?",
    a: "Under Section 27(2) of the CGST Act, a non-resident applicant must estimate their net tax liability for the requested registration period and deposit that entire estimated amount in advance into the Electronic Cash Ledger before the GST registration certificate can be issued. The tax department will not generate the GSTIN until the advance tax payment challan is successfully realized.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the validity period of an NRTP GST registration, and can it be extended?",
    a: "An NRTP registration is valid for the duration specified in the application or 90 days from the effective date of registration, whichever is earlier. It can be extended for an additional period of up to 90 days (maximum 180 days total) by submitting Form GST REG-11 on the GST portal before the initial validity period expires, accompanied by an additional advance tax deposit for the extended duration.",
  },
  {
    q: "Can a Non-Resident Taxable Person claim Input Tax Credit (ITC) in India?",
    a: "Under Section 27(3) of the CGST Act, an NRTP cannot claim Input Tax Credit on domestic goods or services procured within India. The only exception is Input Tax Credit on goods directly imported into India by the NRTP, where IGST paid at Indian Customs can be availed as credit against outward tax liabilities.",
  },
  {
    q: "Which GST returns must a foreign registered entity file?",
    a: "Non-resident taxable persons must file a monthly return using Form GSTR-5. It must be filed within 13 days after the end of each calendar month or within 7 days after the expiration of their registration validity period, whichever is earlier. Foreign suppliers of digital, software, or streaming services (OIDAR) file Form GSTR-5A.",
  },
  {
    q: "How can a foreign taxpayer claim a refund of unutilized advance tax deposit?",
    a: "If the actual tax liability incurred during the 90-day period is less than the advance tax originally deposited, the unutilized surplus balance in the Electronic Cash Ledger is 100% refundable. The refund is claimed directly through Section 13 of Form GSTR-5 after all monthly returns for the entire validity period have been filed.",
  },
  {
    q: "Can non-resident taxable persons opt for the GST Composition Scheme?",
    a: "No. Under Section 10 of the CGST Act, Non-Resident Taxable Persons and Casual Taxable Persons are strictly barred from opting for the Composition Scheme. They must charge and pay GST at normal regular rates applicable to the goods or services supplied.",
  },
];

const RELATED_GUIDES = [
  {
    title: "GST Registration for Foreigners: 5 Easy Steps",
    href: "/gst-registration-for-foreigners/gst-registration-for-foreigners-5-easy-steps",
  },
  {
    title: "Understanding GST Registration for Foreigners: A Complete Guide",
    href: "/gst-registration-for-foreigners/gst-registration-for-foreigners-simplified",
  },
  {
    title: "Comprehensive Guide to GST Registration for NRI Businesses in India",
    href: "/gst-registration-for-foreigners/gst-registration-for-nri-businesses-in-india",
  },
  {
    title: "GST Registration for Foreigners in India: Legal Compliance",
    href: "/gst-registration-for-foreigners/gst-registration-for-foreigners-in-india-new",
  },
  {
    title: "GST Notice Reply & Legal Response Solutions in India",
    href: "/gst-notice",
  },
  {
    title: "GST Annual Return Filing (GSTR-9 & GSTR-9C) Complete Guide",
    href: "/gst-annual-return",
  },
];

const RELATED_SERVICES_TAGS = [
  "Foreign GST Registration",
  "NRTP Form GST REG-09",
  "Non-Resident Taxable Person",
  "Advance Tax Deposit Challan",
  "Form GSTR-5 Filing",
  "Authorized Signatory Support",
  "Foreign Company GSTIN",
  "OIDAR Registration GSTR-5A",
];

const POPULAR_SEARCHES_TAGS = [
  "gst registration for foreigners in india",
  "non resident taxable person gst rules",
  "form gst reg 09 documents checklist",
  "advance tax deposit nrtp gst",
  "validity of foreign gst registration 90 days",
  "can foreigner get gst without pan",
  "form gstr 5 due date and format",
  "indian authorized signatory for foreign company",
];

function GstForeignersGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          India&apos;s dynamic economy attracts thousands of multinational corporations, foreign exhibitors, overseas engineering consultants, and international digital service providers. Under <strong className="font-semibold text-slate-950">Section 24(v) and Section 27 of the Central Goods and Services Tax (CGST) Act, 2017</strong>, any foreign entity or non-resident individual supplying taxable goods or services within Indian territorial jurisdiction must obtain mandatory <strong className="font-semibold text-slate-950">GST Registration as a Non-Resident Taxable Person (NRTP)</strong>.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Unlike domestic businesses that enjoy a turnover exemption threshold of up to ₹40 Lakhs, foreign enterprises are subject to compulsory registration from the very first rupee of commercial supply. The law accommodates foreign businesses by exempting them from requiring an Indian PAN card; instead, registration is granted on <strong className="font-semibold text-slate-950">Form GST REG-09</strong> based on a valid foreign passport, supported by a resident Indian authorized signatory and an advance tax deposit.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Non-Resident Taxable Person (NRTP) Regulatory Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Registration Form</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Form GST REG-09</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Initial Validity Window</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">90 Days (Extendable by 90 Days)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Tax Exemption Threshold</span>
            <strong className="font-semibold text-rose-700 text-[13px]">Nil (Mandatory from Re. 1)</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Who Needs NRTP Registration? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Who Must Obtain GST Registration as a Foreigner in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The requirement for non-resident registration applies broadly across corporate entities and individual consultants operating without a permanent establishment in India:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Foreign Companies &amp; Project Contractors:</strong>
            Overseas corporations executing short-term turnkey installations, machinery erection, or technical project contracts within India.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Trade Fair &amp; Exhibition Participants:</strong>
            Foreign exhibitors displaying and selling industrial equipment, luxury goods, handicrafts, or artworks at trade expos across Indian metro cities.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Overseas E-Commerce Sellers:</strong>
            Foreign vendors selling inventory stored in Indian fulfillment warehouses or selling directly to domestic consumers through e-commerce marketplaces.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">International Performers &amp; Consultants:</strong>
            Foreign artists, sports professionals, architectural consultants, and legal specialists delivering high-value services directly on Indian soil.
          </div>
        </div>
      </section>

      {/* Section 2: NRTP vs Casual Taxable Person */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. NRTP vs Casual Taxable Person (CTP): Crucial Legal Distinctions
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Non-Resident Taxable Person (NRTP)</th>
                <th className="py-3 px-4">Casual Taxable Person (CTP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Residency Status</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Foreign national or entity outside India</td>
                <td className="py-3 px-4 text-slate-800">Resident of India operating in another state</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">PAN Requirement</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">Not required (Passport + foreign TIN accepted)</td>
                <td className="py-3 px-4 text-slate-800">Mandatory Indian Permanent Account Number (PAN)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Registration Form</td>
                <td className="py-3 px-4 text-slate-900">Form GST REG-09</td>
                <td className="py-3 px-4 text-slate-900">Form GST REG-01</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Authorised Signatory</td>
                <td className="py-3 px-4 text-slate-900">Must appoint a Resident Indian with PAN</td>
                <td className="py-3 px-4 text-slate-900">Taxpayer themselves or resident employee</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Input Tax Credit (ITC)</td>
                <td className="py-3 px-4 font-semibold text-rose-700">Only on directly imported goods (No domestic ITC)</td>
                <td className="py-3 px-4 text-emerald-700">Full domestic and import ITC eligible</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Monthly Return Form</td>
                <td className="py-3 px-4 font-semibold text-indigo-950">Form GSTR-5 (due by 13th of next month)</td>
                <td className="py-3 px-4 text-slate-800">Normal returns (GSTR-1 &amp; GSTR-3B)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Mandatory Documentation Checklist for Form GST REG-09
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Document Category</th>
                <th className="py-3 px-4">Prescribed Records &amp; Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Proof of Foreign Identity</td>
                <td className="py-3 px-4 text-slate-800">Clear scanned copy of valid Foreign Passport of applicant / authorized director (with English translation if in foreign language).</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Foreign Business Proof</td>
                <td className="py-3 px-4 text-slate-800">Certificate of Incorporation from home country + Tax Identification Number (TIN) or Unique Entity Number.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Resident Authorised Signatory</td>
                <td className="py-3 px-4 text-slate-800">Indian PAN card, Aadhaar card, photograph, and residential address proof of the appointed resident representative.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Letter of Authorisation / POA</td>
                <td className="py-3 px-4 text-slate-800">Formal Board Resolution or Power of Attorney executed by foreign entity authorizing the Indian resident to act on its behalf.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Principal Business Address in India</td>
                <td className="py-3 px-4 text-slate-800">Lease agreement, exhibition stall allotment letter, or Virtual Office NOC with electricity bill for the temporary business location.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Advance Tax Deposit Challan</td>
                <td className="py-3 px-4 text-slate-800">Electronic Cash Ledger payment receipt generated through CPIN evidencing deposit of estimated net GST liability.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: 8-Step Application Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step Procedure: Obtaining NRTP GSTIN on the Portal
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 1 — Appoint Resident Authorized Signatory:</strong>
            Formally designate a resident Indian citizen with valid PAN and Aadhaar credentials via a Power of Attorney or Board Resolution.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 2 — Generate Temporary Reference Number (TRN):</strong>
            Visit <code className="text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">gst.gov.in</code>. Select &quot;New Registration&quot; &gt; &quot;Non-Resident Taxable Person&quot;. Input foreign applicant name, passport number, and resident authorized signatory&apos;s PAN to generate the TRN via OTP.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 3 — Complete Form GST REG-09:</strong>
            Log in with TRN. Enter business details, country of origin, passport details, temporary Indian address, and specify the requested registration period (up to 90 days).
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 4 — Calculate &amp; Deposit Advance Tax:</strong>
            Estimate total taxable turnover for the 90 days and calculate net tax liability. Generate an electronic challan and deposit the full tax amount into the Electronic Cash Ledger.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Step 5 — Submit via DSC/EVC &amp; Receive GSTIN:</strong>
            The resident authorized signatory signs the application electronically using Class 3 DSC or Aadhaar EVC. Once scrutinized, the tax officer issues the official Form GST REG-06 registration certificate.
          </div>
        </div>
      </section>

      {/* Section 5: Ongoing Compliance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Ongoing Compliance: Form GSTR-5 Filings &amp; Advance Tax Refund
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Monthly Form GSTR-5 Deadlines:</strong>
            NRTPs must file Form GSTR-5 by the 13th of every succeeding month. The return summarizes outward supplies, tax collected, and adjustments against the advance tax cash ledger.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Form GST REG-11 Validity Extension:</strong>
            If operations extend beyond 90 days, an extension application on Form GST REG-11 must be filed before the initial 90 days expire, accompanied by an additional advance tax deposit.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Surplus Advance Tax Cash Refund:</strong>
            Any balance remaining in the Electronic Cash Ledger after paying actual tax dues is 100% refundable. The application is made under Section 13 of Form GSTR-5 upon completing operations.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-indigo-950 block mb-1">Transition to Permanent Subsidiary:</strong>
            Foreign enterprises transitioning from occasional trade to long-term operations should incorporate an Indian private limited subsidiary to obtain a permanent GSTIN without advance tax deposits.
          </div>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Partner with Merrafilings for Seamless International GST Compliance
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Operating across international tax jurisdictions demands rigorous regulatory adherence. Missing the 5-day advance application rule, inaccurate tax liability estimation, or failure to appoint a compliant resident authorized signatory can stall cross-border operations and delay customs clearances.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings provides end-to-end foreign enterprise support: we furnish resident Indian authorized signatory representation, verify foreign legal documentation, coordinate advance tax challan payments, handle 90-day Form GSTR-5 filings, and recover surplus cash ledger refunds directly to your designated corporate accounts.
        </p>
      </section>
    </div>
  );
}

export default function GstRegistrationForForeignersPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 24(v) & Section 27 CGST Act Non-Resident Taxable Person (NRTP) Setup"
      heroTitle={
        <>
          <span>Expanding to India? – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Registration
          </span>{" "}
          <span>for Foreigners &amp; NRTPs</span>
        </>
      }
      heroSubtitle="Obtain mandatory GST registration for non-resident taxable persons and foreign corporations operating in India. Complete Form GST REG-09 filing, resident authorized signatory representation, advance tax deposit advisory, and GSTR-5 return compliance."
      formTitle="Foreign Taxpayer Desk"
      formSubtitle="Consult our cross-border tax specialists for swift Form GST REG-09 preparation, authorized signatory appointment, and advance tax estimation."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Fixed{" "}
          <span className="font-normal text-[#00B074]">cross-border GST fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for 90-day NRTP registration, complete 90-day return & refund compliance, or permanent Indian subsidiary incorporation."
      breadcrumbCurrent="GST for Foreigners"
      guideTitle="Comprehensive Guide to GST Registration for Foreigners & Non-Resident Taxable Persons (NRTP) in India"
      guideContent={<GstForeignersGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about NRTP eligibility, foreign passport submission, resident authorized signatories, and advance tax refunds."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
