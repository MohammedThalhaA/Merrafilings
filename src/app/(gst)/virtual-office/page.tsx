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
  Store,
  Truck,
  Globe2,
  Mail,
  PhoneCall,
  Laptop,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Compliant for GST & MCA Company Incorporation Across India" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Full Document Suite: Registered Lease Deed, Owner NOC & Electricity Bill" },
  { icon: <MapPin className="w-4 h-4" />, text: "Prime Commercial Business Hubs in Delhi, Mumbai, Bengaluru, Chennai & 30+ Cities" },
  { icon: <Truck className="w-4 h-4" />, text: "Multi-State GSTIN Solution for Amazon, Flipkart & E-Commerce Sellers" },
  { icon: <Building2 className="w-4 h-4" />, text: "Physical Signage & Verification Desk for Departmental Field Inspections" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Virtual Office for GST Registration",
    shortDesc: "Government-approved commercial address with complete documentation for new GSTIN registration.",
    expandedDesc: "Complete virtual office address package designed specifically for obtaining a new GSTIN as a Principal Place of Business (PPoB) or Additional Place of Business (APoB). Includes 1-year commercial address rights, landlord No Objection Certificate (NOC), registered Leave and Licence Agreement, latest electricity bill, and physical signage display.",
    price: "₹10,424",
    priceSub: "Per Year / Inclusive of Documentation",
    badge: "GSTIN Ready",
    features: [
      "1-Year Prime Commercial Business Address",
      "Valid for GST Registration (PPoB or APoB)",
      "Landlord No Objection Certificate (NOC)",
      "Registered Leave and Licence Agreement",
      "Latest Paid Electricity / Utility Bill",
      "Signage Display at Premises for GST Verification",
      "Handling Departmental Physical Verification Visits",
      "Mail & Official Correspondence Collection",
    ],
  },
  {
    name: "Virtual Office for Company Registration (MCA)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "MCA-compliant registered office address for SPICe+ Private Limited, LLP, or OPC incorporation.",
    expandedDesc: "End-to-end registered office solution meeting all Ministry of Corporate Affairs (MCA) and Registrar of Companies (RoC) mandates under the Companies Act, 2013. Includes address authorization for SPICe+ Part B, municipal tax receipts, utility bills, mail scanning, receptionist call handling, and meeting room access credits.",
    price: "₹14,999",
    priceSub: "Per Year / MCA & RoC Compliant",
    features: [
      "Everything in GST Virtual Office Package",
      "MCA & RoC Compliant Registered Office Address",
      "Documentation for SPICe+ Incorporation Form",
      "Municipal Property Tax Receipt & Title Clearance",
      "Daily Mail Receiving, Scanning & Digital Notification",
      "Professional Courier Forwarding to Your Home City",
      "4 Hours of Free Meeting Room Access per Quarter",
      "Dedicated Corporate Concierge & Reception Desk",
    ],
  },
  {
    name: "Multi-State E-Commerce Enterprise Suite",
    shortDesc: "Nationwide virtual offices across 3 States + 3 State GSTIN applications for online sellers & enterprises.",
    expandedDesc: "Tailored for e-commerce sellers scaling on Amazon, Flipkart, and Meesho, or pan-India service providers. Provides registered commercial addresses across 3 strategic States, preparation and filing of 3 state-specific GSTINs, automated courier forwarding, and compliance protection against GST cancellation.",
    price: "₹29,999",
    priceSub: "3 States Address + 3 State GSTINs",
    badge: "Enterprise Suite",
    features: [
      "Virtual Office Addresses Across Any 3 Indian States",
      "Complete 3-State GSTIN Registration Preparation & Filing",
      "Landlord NOCs, Rent Agreements & Utility Bills for all 3 Hubs",
      "APoB Warehouse Addition Support for FBA / Flipkart Fulfilled",
      "Unlimited Mail Handling & Courier Forwarding Across All Hubs",
      "Physical Signage at All 3 Premises for Officer Inspections",
      "Priority CA Support for State-Wise GSTR-1 & 3B Setup",
      "Dedicated Enterprise Account Manager & Hotline",
    ],
  },
];

const FAQ_COL_1 = [
  {
    q: "Is a virtual office legally valid for GST registration in India?",
    a: "Yes. The GST department officially accepts virtual office addresses as a valid Principal Place of Business (PPoB) or Additional Place of Business (APoB), provided the applicant submits legitimate documentation including: (1) A registered Leave and Licence Agreement; (2) A valid No Objection Certificate (NOC) from the property owner; and (3) A recent electricity or utility bill not older than two months.",
  },
  {
    q: "Does the Ministry of Corporate Affairs (MCA) accept virtual offices for company incorporation?",
    a: "Yes. The Ministry of Corporate Affairs (MCA) accepts a virtual office address as the official registered office of a Private Limited Company, One Person Company (OPC), or Limited Liability Partnership (LLP) when filing the SPICe+ incorporation form, provided certified address proofs and owner authorization are attached.",
  },
  {
    q: "How does a virtual office help e-commerce sellers selling on Amazon or Flipkart?",
    a: "E-commerce sellers who store goods in fulfillment centers or warehouses across different Indian States (such as Amazon FBA or Flipkart Fulfilment Centers) must obtain a separate state-specific GSTIN in each state. A virtual office provides a legal commercial address in those states at minimal cost, allowing sellers to fulfill marketplace rules without physically leasing costly offices.",
  },
  {
    q: "What happens if a GST officer conducts a physical site verification?",
    a: "Under Rule 9 of the CGST Rules, tax officers may conduct physical site inspections before or after granting registration. Merrafilings virtual office spaces are fully equipped commercial facilities with prominent physical nameplates/signage, on-site receptionists, and verification personnel who assist tax officers and confirm your business presence during departmental visits.",
  },
  {
    q: "Which documents must the business owner provide to activate a virtual office?",
    a: "To activate a virtual office, the business owner must provide: (1) PAN card of the business or authorized director; (2) Aadhaar card / passport of the director; (3) Passport-size photograph; and (4) Certificate of Incorporation or Partnership Deed (if an existing entity). Documentation is signed digitally within 24 to 48 hours.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can I receive official letters, bank correspondence, and notices at my virtual office?",
    a: "Yes. All our virtual office plans include professional mail handling. Official correspondence from government departments (GST, MCA, Income Tax), banks, and clients is securely received, scanned, and emailed to you on the same day. Physical documents can also be forwarded to your home or operational address.",
  },
  {
    q: "How much cost does a virtual office save compared to a physical office lease?",
    a: "A traditional commercial office in prime cities costs anywhere from ₹25,000 to over ₹1,50,000 per month in rent, plus heavy security deposits, interior fit-outs, electricity bills, and maintenance. A virtual office provides the exact same legal commercial address and compliance benefits starting from just ₹868 per month (₹10,424/year), saving over 90% in overheads.",
  },
  {
    q: "Can I access meeting rooms or work desks at the virtual office location?",
    a: "Yes. Our business and enterprise virtual office plans include complimentary credits for professional conference rooms, boardrooms, and high-speed Wi-Fi co-working hot desks, allowing you to meet clients, investors, or auditors in person in a corporate setting.",
  },
  {
    q: "What happens when my 1-year virtual office agreement expires?",
    a: "Before the 1-year tenure concludes, you will receive renewal notices. You can renew the agreement for another year with an updated rent agreement and utility bill to ensure your GSTIN and MCA records remain active and compliant without interruption.",
  },
  {
    q: "How does Merrafilings assist with virtual offices and GST registration?",
    a: "Merrafilings offers a unified, single-window service: we provide prime commercial addresses across all major Indian cities, draft registered lease agreements, coordinate with landlords for NOCs, file your GST and MCA applications, and manage field verification visits to guarantee 100% registration success.",
  },
];

const RELATED_GUIDES = [
  {
    title: "GST Registration Online: Process, Eligibility & Documentation",
    href: "/gst-registration",
  },
  {
    title: "GST Registration Amendment Online: Update Core & Non-Core Details",
    href: "/gst-amendment",
  },
  {
    title: "GST Registration Revocation: Restore Cancelled GSTIN Online",
    href: "/gst-revocation",
  },
  {
    title: "GSTR-10 Final Return Filing: Due Date, Late Fees & Process",
    href: "/gstr-10",
  },
  {
    title: "GST Return Filing by Accountants: Form GSTR-1 & 3B",
    href: "/gst-return-filing",
  },
  {
    title: "Company Registration Online: Private Limited Incorporation",
    href: "/company-registration",
  },
];

const RELATED_SERVICES_TAGS = [
  "Virtual Office Online",
  "Virtual Office for GST",
  "Virtual Office for MCA",
  "Registered Office Address",
  "Multi State GSTIN",
  "Amazon FBA GST Address",
  "Commercial Rent Agreement",
  "Landlord NOC for GST",
  "Virtual Office Bangalore",
  "Virtual Office Mumbai",
];

const POPULAR_SEARCHES_TAGS = [
  "virtual office for gst registration price",
  "can i use virtual office for pvt ltd company",
  "amazon vpoa virtual principal place of business",
  "virtual office in delhi for gst",
  "documents required for virtual office gst",
  "physical verification virtual office gst",
  "cost of virtual office in mumbai bangalore",
  "virtual office leave and licence agreement",
  "virtual office for e-commerce sellers india",
  "mca compliant registered address online",
];

function VirtualOfficeGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <div className="space-y-10 text-slate-900 font-normal">
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-900 font-normal">
          A <strong className="font-semibold text-slate-950">virtual office online in India</strong> is a modern, cost-efficient corporate solution that provides startups, SMEs, freelancers, and e-commerce entrepreneurs with a prestigious registered commercial address without the capital drain of leasing, maintaining, or furnishing a physical office space.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Whether you need a government-approved address to obtain a new <strong className="font-semibold text-slate-950">GSTIN</strong>, establish a registered corporate office for <strong className="font-semibold text-slate-950">MCA Private Limited / LLP incorporation</strong>, or secure multi-state GST registrations for Amazon FBA and Flipkart fulfillment hubs, a virtual office provides the full legal suite of documentation accepted by all statutory authorities across India.
        </p>
      </section>

      {/* Snapshot Box */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-100/90 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-900 font-medium text-sm mb-3">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Virtual Office Strategic Business Advantages</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-normal text-slate-900">
          <div className="p-3.5 bg-white rounded-xl border border-indigo-100/80 shadow-3xs hover:border-[#00B074] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <span className="block text-slate-500 text-[11px] mb-1 group-hover:text-emerald-900 transition-colors">Overhead Cost Savings</span>
            <strong className="font-semibold text-emerald-600 text-[13px] group-hover:text-emerald-800 transition-colors">Save 90%+ vs Physical Lease</strong>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-indigo-100/80 shadow-3xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <span className="block text-slate-500 text-[11px] mb-1 group-hover:text-indigo-900 transition-colors">Document Delivery Speed</span>
            <strong className="font-semibold text-slate-950 text-[13px] group-hover:text-[#5C3BFF] transition-colors">Active within 24 to 48 Hours</strong>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-indigo-100/80 shadow-3xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <span className="block text-slate-500 text-[11px] mb-1 group-hover:text-indigo-900 transition-colors">Statutory Acceptance</span>
            <strong className="font-semibold text-slate-950 text-[13px] group-hover:text-[#5C3BFF] transition-colors">100% MCA &amp; GSTIN Compliant</strong>
          </div>
        </div>
      </div>

      {/* Section 1: What is a Virtual Office? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Virtual Office and How is it Legally Recognized?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A virtual office delivers a verified physical commercial mailing address, official correspondence management, and on-demand meeting space access without requiring a permanent tenant lease:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <strong className="text-slate-950 font-semibold block text-sm flex items-center gap-2.5 group-hover:text-[#5C3BFF] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white transition-all duration-200">
                <Receipt className="w-4 h-4" />
              </div>
              <span>GST Department Recognition (PPoB &amp; APoB)</span>
            </strong>
            <p className="text-slate-700 leading-relaxed font-normal">
              Under the CGST Act, 2017, the GST portal allows taxpayers to register any legitimate commercial premises as their Principal Place of Business (PPoB) or Additional Place of Business (APoB), provided valid tenancy deeds, owner NOCs, and utility bills are uploaded.
            </p>
          </div>

          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <strong className="text-slate-950 font-semibold block text-sm flex items-center gap-2.5 group-hover:text-[#5C3BFF] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white transition-all duration-200">
                <Building2 className="w-4 h-4" />
              </div>
              <span>Ministry of Corporate Affairs (MCA) Compliance</span>
            </strong>
            <p className="text-slate-700 leading-relaxed font-normal">
              Under Section 12 of the Companies Act, 2013, every incorporated company must maintain a registered office capable of receiving official communications. A virtual office with registered tenancy agreements fulfills all RoC requirements during SPICe+ filing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Virtual Office vs Physical Office Comparison */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Virtual Office vs. Traditional Physical Office
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Comparing the strategic, financial, and operational parameters of virtual and physical commercial premises:
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-900">
            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Evaluation Parameter</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Virtual Office Solution</th>
                <th className="py-3 px-4">Traditional Physical Office</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Annual Cost</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">₹10,000 – ₹15,000 / Year</td>
                <td className="py-3 px-4 text-slate-700">₹3,00,000 – ₹15,00,000+ / Year</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Security Deposit</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">₹0 (Zero Security Deposit)</td>
                <td className="py-3 px-4 text-slate-700">3 to 10 Months Rent Advance</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Setup Time</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">24 to 48 Hours</td>
                <td className="py-3 px-4 text-slate-700">3 to 8 Weeks</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">GST &amp; MCA Validity</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">100% Accepted with NOC &amp; Deed</td>
                <td className="py-3 px-4 text-slate-700">100% Accepted with Lease Deed</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Multi-State Scaling</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">Effortless pan-India expansion</td>
                <td className="py-3 px-4 text-slate-700">Very costly &amp; administratively heavy</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-950">Meeting Room Access</td>
                <td className="py-3 px-4 bg-emerald-50/30 text-emerald-700 font-semibold">Pay-per-use or free quarterly credits</td>
                <td className="py-3 px-4 text-slate-700">Requires dedicated square footage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Essential Documentation Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Complete Documentation Suite Provided
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings furnishes a complete, legally vetted documentation package to guarantee instant government approvals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">1. No Objection Certificate (NOC):</strong>
            <span className="text-slate-700 font-normal">Official authorization executed by the commercial property owner authorizing business registration.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">2. Leave &amp; Licence Agreement:</strong>
            <span className="text-slate-700 font-normal">12-month commercial tenancy agreement with clear commercial terms and business name.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">3. Latest Utility / Electricity Bill:</strong>
            <span className="text-slate-700 font-normal">Original paid electricity bill (under 2 months old) verifying the exact premises address.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">4. Municipal Property Tax Receipt:</strong>
            <span className="text-slate-700 font-normal">Paid municipal tax assessment receipt for states requiring municipal ownership validation.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">5. Physical Signboard Display:</strong>
            <span className="text-slate-700 font-normal">Prominent business signage installed at the hub for officer inspection and verification.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group">
            <strong className="text-slate-950 font-semibold block mb-1 group-hover:text-[#5C3BFF] transition-colors">6. Dedicated On-Site Desk Representation:</strong>
            <span className="text-slate-700 font-normal">Front-desk officers present during tax authority field visits to endorse your registration.</span>
          </div>
        </div>
      </section>

      {/* Section 4: Who Should Use a Virtual Office? */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Who Should Use a Virtual Office in India?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-[13px] text-slate-800">
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group space-y-2">
            <strong className="text-indigo-950 font-semibold block text-sm group-hover:text-emerald-950 transition-colors">Startups &amp; Founders:</strong>
            <p className="text-slate-600 font-normal leading-relaxed">Establish a prime commercial identity in Bengaluru, Mumbai, or Delhi from day one without burning early angel capital on physical rent.</p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group space-y-2">
            <strong className="text-indigo-950 font-semibold block text-sm group-hover:text-emerald-950 transition-colors">E-Commerce Sellers:</strong>
            <p className="text-slate-600 font-normal leading-relaxed">Obtain mandatory state GSTINs to enroll in Amazon FBA and Flipkart Fulfillment Centers across Maharashtra, Karnataka, Delhi, and Haryana.</p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group space-y-2">
            <strong className="text-indigo-950 font-semibold block text-sm group-hover:text-emerald-950 transition-colors">Freelancers &amp; Consultants:</strong>
            <p className="text-slate-600 font-normal leading-relaxed">Protect residential privacy while displaying a prestigious commercial address on invoices, proposals, and official contracts.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Why Choose Merrafilings for Your Virtual Office
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings manages the complete registration chain. Unlike property aggregators who leave you to handle government paperwork alone, we provide the commercial address, prepare and file your GST and MCA applications, handle officer site verifications, and assist with ongoing tax return filings under one unified roof.
        </p>
      </section>
    </div>
  );
}

export default function VirtualOfficePage() {
  return (
    <ServicePageTemplate
      badgeText="Government-Approved Registered Address for GST & MCA Company Incorporation"
      heroTitle={
        <>
          <span>Prestigious Commercial Address – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Virtual Office Online
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Get a verified, government-compliant registered office address in prime commercial hubs across India. Complete documentation with registered lease deeds, landlord NOCs, and electricity bills for instant GST registration and MCA company incorporation without physical rent overheads."
      formTitle="Virtual Office Helpdesk"
      formSubtitle="Connect with our corporate address specialists to select your city, receive instant compliance documents, and apply for your GSTIN or Company Incorporation."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent pricing. Prime{" "}
          <span className="font-normal text-[#00B074]">virtual office addresses.</span>
        </>
      }
      pricingSubtitle="Select your plan for 1-year GST registration address, MCA SPICe+ company incorporation, or pan-India multi-state e-commerce suites."
      breadcrumbCurrent="Virtual Office"
      guideTitle="Comprehensive Guide to Virtual Office in India - Plans, Documents, GSTIN, MCA Compliance & Pricing"
      guideContent={<VirtualOfficeGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about virtual office legality for GST and MCA, multi-state Amazon FBA addresses, physical inspections, and document packages."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
