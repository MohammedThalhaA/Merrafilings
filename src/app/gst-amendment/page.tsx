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
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Edit3,
  Calendar,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Governed under Section 28 of CGST Act & Rule 19 of CGST Rules" },
  { icon: <Edit3 className="w-4 h-4" />, text: "Form GST REG-14 Filing for Core & Non-Core Registration Fields" },
  { icon: <Clock className="w-4 h-4" />, text: "Instant Auto-Approval for Non-Core Fields (Email, Mobile, Bank, HSN)" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Document Legalization & Drafting for Core Address & Director Changes" },
  { icon: <Scale className="w-4 h-4" />, text: "Form GST REG-03 Clarification Notice Handling & REG-04 Reply Support" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Non-Core Field Amendment",
    shortDesc: "Instant auto-approved updates for contact details, authorized representatives, bank accounts, or HSN codes.",
    expandedDesc: "Complete portal filing for non-core registration modifications that do not require tax officer approval. Covers updating registered mobile numbers, primary and secondary email addresses, bank accounts, authorized signatories, and adding or removing HSN/SAC codes with immediate ARN generation.",
    price: "₹999",
    priceSub: "All-Inclusive Professional Fee",
    badge: "Instant Approval",
    features: [
      "Filing Form GST REG-14 (Non-Core Fields)",
      "Mobile Number & Email Address Update",
      "Bank Account Addition / Modification",
      "Addition / Deletion of HSN/SAC Codes",
      "Authorized Representative Details Update",
      "Zero Officer Scrutiny (Auto-Approved)",
      "Instant Updated GST Registration Certificate",
      "Dedicated Tax Professional Assistance",
    ],
  },
  {
    name: "Core Field Amendment",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Complete documentation and filing for business address, trade name, or partner/director modifications.",
    expandedDesc: "Comprehensive legal assistance for core modifications governed under Rule 19 requiring proper tax officer scrutiny. Includes drafting address change resolutions, review of rent agreements and electricity bills, addition/removal of partners or directors, and liaison with tax officers for 15-day approval.",
    price: "₹1,999",
    priceSub: "Complete Documentation & Filing",
    features: [
      "Everything in Non-Core Package",
      "Principal Place of Business Address Change",
      "Addition of Additional Places of Business / Branches",
      "Addition or Deletion of Partners / Directors / Promoters",
      "Business Trade Name Modification",
      "Verification of Title Deeds, NOC & Rent Agreements",
      "Preparation of Form GST REG-14 Core Application",
      "Handling Form GST REG-03 Clarifications (if issued)",
      "Tracking until Form GST REG-15 Approval Order",
    ],
  },
  {
    name: "Multi-State & Constitution Suite",
    shortDesc: "End-to-end legal support for change in business constitution, PAN transitions, and multi-state branch additions.",
    expandedDesc: "Tailored for businesses undergoing structural reorganization—such as converting from sole proprietorship to partnership or private limited company, legal name changes post-MCA approval, and bulk addition of warehouse locations across multiple Indian States.",
    price: "₹3,999",
    priceSub: "Corporate Reorganization & Multi-State",
    badge: "Enterprise Suite",
    features: [
      "Comprehensive Constitution Modification Support",
      "Legal Name Change Alignment with MCA & PAN",
      "Proprietorship to Partnership / Pvt Ltd Transition Advisory",
      "Multi-State Additional Places of Business Filing",
      "Drafting Board Resolutions & Partnership Deeds",
      "Capital Asset & Stock ITC Transfer (Form GST ITC-02)",
      "Senior CA & Legal Practitioner Consultation",
      "Complete Compliance Tracker & Notice Shield",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a GST registration amendment and what is its legal basis?",
    a: "A GST amendment refers to the legal process of updating or modifying the information furnished at the time of GST registration whenever business particulars change. It is governed under Section 28 of the CGST Act, 2017 read with Rule 19 of the CGST Rules, 2017. The application is filed electronically on the GST portal using Form GST REG-14.",
  },
  {
    q: "What is the key difference between Core and Non-Core field amendments?",
    a: "Core field amendments involve critical business information—such as legal name, principal place of business, additional places of business, and partners/directors—which require verification and approval by a proper tax officer within 15 working days. Non-core fields—such as registered email, mobile number, bank account details, and HSN codes—are auto-approved immediately upon electronic verification without any officer scrutiny.",
  },
  {
    q: "What is the statutory time limit for filing a GST amendment application?",
    a: "Under Rule 19(1) of the CGST Rules, a taxpayer must file Form GST REG-14 within 15 days of the occurrence of the event that necessitates the change (e.g., within 15 days of signing a new commercial lease or appointing a new director). Failing to update changes within 15 days can trigger compliance notices or suspension under Section 29.",
  },
  {
    q: "Can a taxpayer amend their PAN linked to the GSTIN?",
    a: "No. A GSTIN is structurally generated based on the 10-digit Permanent Account Number (PAN). Any change in the PAN—such as when converting a sole proprietorship to a private limited company or partnership—cannot be amended on the existing GSTIN. The taxpayer must apply for a fresh GST registration under the new PAN and transfer or cancel the old registration.",
  },
  {
    q: "What happens if a GST registration is currently cancelled or suspended?",
    a: "A taxpayer cannot file a GST amendment application if their GSTIN is cancelled. If cancelled by the tax officer, the taxpayer must first file Form GST REG-21 to revoke the cancellation under Section 30. Once the registration is restored to active status, amendment applications via Form GST REG-14 can be submitted.",
  },
];

const FAQ_COL_2 = [
  {
    q: "How long does a tax officer take to approve a core field amendment?",
    a: "Under Rule 19(2), the proper officer has 15 working days from the date of submission of Form GST REG-14 to approve the amendment. If the officer is satisfied with the documentation, an approval order in Form GST REG-15 is issued, and an amended GST Registration Certificate (Form GST REG-06) is made available on the portal.",
  },
  {
    q: "What should I do if the tax officer issues Form GST REG-03 seeking clarification?",
    a: "If the tax officer finds discrepancies or requires additional documentation, they will issue a clarification notice in Form GST REG-03 within 15 working days. The taxpayer must submit a detailed explanation and upload supporting documents in Form GST REG-04 within 7 working days from the date of receipt of the notice.",
  },
  {
    q: "Which documents are required for changing the principal place of business address?",
    a: "For changing the business address, the taxpayer must upload: (1) Proof of ownership (electricity bill, property tax receipt, or municipal khata) or a registered Rent/Lease Agreement; (2) A valid No Objection Certificate (NOC) signed by the property owner; and (3) An updated utility bill not older than 2 months.",
  },
  {
    q: "Does changing non-core details like bank account details affect invoice issuance?",
    a: "No. Updating non-core details does not change your 15-digit GSTIN. Invoicing, e-way bill generation, and customer collections can continue uninterrupted while the updated details reflect in the portal database immediately.",
  },
  {
    q: "How does Merrafilings assist with GST registration amendments?",
    a: "Merrafilings handles the entire amendment lifecycle: classifying changes into core vs non-core, drafting board resolutions and rent agreements, filing Form GST REG-14 on the GST common portal, tracking officer approvals, and drafting legal replies to Form GST REG-03 notices to prevent rejections.",
  },
];

const RELATED_GUIDES = [
  {
    title: "GST Registration Revocation: Restore Cancelled GSTIN Online",
    href: "/gst-revocation",
  },
  {
    title: "GSTR-10 Final Return Filing: Due Date, Late Fees & Process",
    href: "/gstr-10",
  },
  {
    title: "Virtual Office Online for GST & MCA Company Registration",
    href: "/virtual-office",
  },
  {
    title: "GST Registration Online: Process, Eligibility & Documentation",
    href: "/gst-registration",
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
  "GST Amendment Online",
  "Form GST REG-14",
  "Core Field Amendment",
  "Non Core GST Amendment",
  "Change GST Business Address",
  "Add Partner in GSTIN",
  "Update GST Mobile Email",
  "GST REG-03 Notice Reply",
  "GST REG-15 Approval Order",
  "GST Certificate Download",
];

const POPULAR_SEARCHES_TAGS = [
  "how to change address in gst certificate",
  "gst registration amendment fees",
  "time limit for gst amendment 15 days",
  "form gst reg 14 download pdf",
  "gst amendment core fields list",
  "add bank account in gst portal",
  "change legal name in gst",
  "gst amendment rejection reasons",
  "form gst reg 04 format",
  "amendment of registration rule 19 cgst",
];

function GstAmendmentGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          A <strong className="font-semibold text-slate-950">GST registration amendment</strong> allows registered taxpayers to update or modify their business details whenever commercial information changes. Governed under <strong className="font-semibold text-slate-950">Section 28 of the Central Goods and Services Tax (CGST) Act, 2017</strong> and <strong className="font-semibold text-slate-950">Rule 19 of the CGST Rules, 2017</strong>, filing a timely amendment on the GST portal ensures your GSTIN records remain accurate, preventing departmental notices, return filing blocks, or registration suspension.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Whether your business has relocated to a new office, added a new warehouse, appointed new directors or partners, or simply updated contact details, the law mandates submitting <strong className="font-semibold text-slate-950">Form GST REG-14</strong> within 15 days of the change.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>GST Amendment Statutory Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Statutory Application Deadline</span>
            <strong className="font-semibold text-slate-950 text-[13px]">Within 15 Days of Change</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Officer Approval Window (Core)</span>
            <strong className="font-semibold text-slate-950 text-[13px]">15 Working Days (REG-15)</strong>
          </div>
          <div className="p-3 bg-white rounded-xl border border-indigo-50 shadow-3xs">
            <span className="block text-slate-500 text-[11px] mb-1">Non-Core Approval Speed</span>
            <strong className="font-semibold text-emerald-600 text-[13px]">Instant Auto-Approval</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Who is Eligible for GST Amendment? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Who is Eligible for Amendment of GST Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Any taxpayer with an active GSTIN is entitled to amend their registration details whenever business information changes. The eligibility breakdown across taxpayer categories is as follows:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Taxpayer Category</th>
                <th className="py-3 px-4">Eligible for GST Amendment?</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Statutory Governing Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Regular GST Taxpayers</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes</td>
                <td className="py-3 px-4 bg-emerald-50/30">Section 28 &amp; Rule 19 (Form GST REG-14)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Composition Scheme Taxpayers</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes</td>
                <td className="py-3 px-4 bg-emerald-50/30">Section 10 &amp; Rule 19</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Non-Resident Taxable Persons (NRTP)</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes</td>
                <td className="py-3 px-4 bg-emerald-50/30">Rule 19 within 90-day validity window</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Input Service Distributors (ISD)</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes</td>
                <td className="py-3 px-4 bg-emerald-50/30">Rule 19 for ISD office address &amp; signatories</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">TDS / TCS Deductors</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">✅ Yes</td>
                <td className="py-3 px-4 bg-emerald-50/30">Section 51 / 52 drawing authority changes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Cancelled GST Registration</td>
                <td className="py-3 px-4 text-rose-700 font-semibold">❌ No</td>
                <td className="py-3 px-4 bg-rose-50/30">Must apply for GST Revocation (REG-21) first</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Core vs Non-Core Field Amendments */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Core Fields vs. Non-Core Fields in GST Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          All changes to GST registration details are split into two categories under the CGST Rules:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Core Field Amendment</th>
                <th className="py-3 px-4 text-indigo-900 bg-indigo-50/50">Non-Core Field Amendment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Tax Officer Approval</td>
                <td className="py-3 px-4 font-semibold text-amber-700">Required (Mandatory scrutiny)</td>
                <td className="py-3 px-4 bg-indigo-50/30 font-semibold text-emerald-700">Not Required (Auto-Approved)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Processing Timeline</td>
                <td className="py-3 px-4">Up to 15 working days</td>
                <td className="py-3 px-4 bg-indigo-50/30">Instant upon electronic verification</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Form Used</td>
                <td className="py-3 px-4">Form GST REG-14</td>
                <td className="py-3 px-4 bg-indigo-50/30">Form GST REG-14</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Illustrative Fields</td>
                <td className="py-3 px-4">Legal name, business address, partners/directors</td>
                <td className="py-3 px-4 bg-indigo-50/30">Mobile, email, bank details, HSN/SAC codes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Supporting Documents</td>
                <td className="py-3 px-4">Mandatory (Title deeds, rent agreement, NOC, photo)</td>
                <td className="py-3 px-4 bg-indigo-50/30">Minimal / Cancelled cheque for bank update</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-950">Rejection Possibility</td>
                <td className="py-3 px-4 text-amber-700 font-medium">Yes — officer may issue REG-03 or reject</td>
                <td className="py-3 px-4 bg-indigo-50/30 text-emerald-700 font-medium">Zero rejection risk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Core Fields and Document Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Documents Required for Core Field Amendments
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Core field changes have a direct bearing on tax jurisdiction and business liability. Taxpayers must submit certified documentary evidence:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-slate-950 font-semibold block text-sm flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span>Change in Principal / Additional Place of Business</span>
            </strong>
            <ul className="space-y-1 list-disc pl-4 text-slate-700">
              <li>Ownership proof (Electricity Bill / Municipal Tax receipt not older than 2 months)</li>
              <li>Registered Rent / Lease Agreement if premises are rented</li>
              <li>No Objection Certificate (NOC) from the property owner</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-slate-950 font-semibold block text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>Addition or Deletion of Partners / Directors</span>
            </strong>
            <ul className="space-y-1 list-disc pl-4 text-slate-700">
              <li>PAN card and Aadhaar card of the incoming partner/director</li>
              <li>Passport-sized photograph of the incoming official</li>
              <li>Board Resolution / Amended Partnership Deed evidencing appointment or resignation</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-slate-950 font-semibold block text-sm flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>Change in Legal Name or Trade Name</span>
            </strong>
            <ul className="space-y-1 list-disc pl-4 text-slate-700">
              <li>Fresh Certificate of Incorporation issued by MCA (for corporate name change)</li>
              <li>Amended Partnership Deed / Trade License / Shops Act license</li>
              <li>PAN card reflecting the revised legal entity name</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-slate-950 font-semibold block text-sm flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Change in Constitution of Business</span>
            </strong>
            <ul className="space-y-1 list-disc pl-4 text-slate-700">
              <li>Amended constitutional charters (MOA, AOA, or Partnership Deed)</li>
              <li>Asset transfer deed and Form GST ITC-02 for transferring unutilized credit</li>
              <li>Note: Conversion involving PAN change requires fresh registration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: 10-Step Online Amendment Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step Online Amendment Process (Form GST REG-14)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The amendment application is processed entirely online via the official GST portal (<code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">gst.gov.in</code>):
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 1 — Login to GST Portal:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Visit <code className="text-indigo-600">www.gst.gov.in</code> and log in using your valid username and password credentials.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 2 — Navigate to Amendment Section:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Navigate to <strong>Services &gt; Registration &gt; Amendment of Registration Core Fields</strong> or <strong>Amendment of Registration Non-Core Fields</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 3 — Select Relevant Modification Tab:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Choose the specific tab to amend (Business Details, Principal Place of Business, Additional Places, Promoters/Partners, Bank Accounts, or Goods/Services).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 4 — Update Fields &amp; State Reason for Amendment:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Input the revised particulars, provide the date of amendment, and specify the legal justification for the modification.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 5 — Upload Certified Supporting Documents:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Upload clear PDF/JPEG copies of rent agreements, utility bills, NOCs, PAN cards, or board resolutions within portal size limits (under 1 MB).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 6 — Electronic Verification &amp; Submission:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Digitally authenticate Form GST REG-14 using Class 3 Digital Signature Certificate (DSC) for companies/LLPs or Aadhaar EVC OTP for proprietorships.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 7 — ARN Generation &amp; Status Tracking:</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              The system issues an Application Reference Number (ARN) via email and SMS to monitor application processing in real time.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-indigo-950 font-semibold block text-sm mb-1">Step 8 — Tax Officer Review (Core Fields Only):</strong>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              The proper tax officer reviews the paperwork within 15 working days. If documents are in order, approval order Form GST REG-15 is issued.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Handling REG-03 Notices */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Handling Clarifications (Form GST REG-03 &amp; REG-04)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          If the proper officer detects discrepancies or seeks additional clarification during core field scrutiny, they will issue a show-cause notice in <strong className="font-semibold text-slate-950">Form GST REG-03</strong> within 15 working days:
        </p>

        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Strict 7-Day Statutory Response Window (Rule 19(3))</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed">
            The taxpayer must submit their written clarification and upload rectified documents in <strong className="font-semibold text-slate-950">Form GST REG-04</strong> within <strong className="font-semibold text-slate-950">7 working days</strong> from the receipt of Form GST REG-03. Failing to reply within 7 days results in rejection under Form GST REG-05.
          </p>
          <div className="pt-1">
            <button
              onClick={() => openContactModal("Notice Clarification Support (REG-03 / REG-04)")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium shadow-3xs transition-colors"
            >
              <span>Draft Expert Reply to REG-03 Notice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Why Choose Merrafilings for Your GST Amendment
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings assigns certified Chartered Accountants and seasoned tax lawyers to manage your registration modifications. We review constitutional documents, ensure rent deeds and electricity bills comply with GST portal validation standards, draft comprehensive justifications, and track your application until your amended Form GST REG-06 certificate is successfully issued.
        </p>
      </section>
    </div>
  );
}

export default function GstAmendmentPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 28 CGST Act, 2017 & Rule 19 Registration Amendment Desk"
      heroTitle={
        <>
          <span>Update Your Business Details – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GST Registration Amendment
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Modify your GSTIN records swiftly and accurately. File Form GST REG-14 for business address relocation, addition of branches, director/partner updates, bank accounts, or HSN codes with Chartered Accountant guidance and zero rejection risk."
      formTitle="GST Amendment Helpdesk"
      formSubtitle="Connect with our indirect tax specialists for instant non-core updates, core field documentation, and 15-day officer approval tracking."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent pricing. Fast{" "}
          <span className="font-normal text-[#00B074]">GST amendment solutions.</span>
        </>
      }
      pricingSubtitle="Select your package for instant non-core updates, full core address/director changes, or multi-state enterprise reorganization suites."
      breadcrumbCurrent="GST Amendment"
      guideTitle="Comprehensive Guide to GST Registration Amendment (Form GST REG-14) - Core vs Non-Core, Limits, Documents & Procedure"
      guideContent={<GstAmendmentGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about core vs non-core fields, 15-day application timelines, Form GST REG-03 clarification notices, and amended certificates."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
