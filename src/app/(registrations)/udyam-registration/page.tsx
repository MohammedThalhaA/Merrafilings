"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Building,
  Check,
  Clock,
  Landmark,
  BadgePercent,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  Globe2,
  TrendingUp,
  Layers,
  Zap,
  Briefcase,
  HelpCircle,
  Truck,
  CheckCircle,
  FileSpreadsheet,
  Calendar,
  DollarSign,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  Laptop,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "Who is eligible for Udyog Aadhar registration?",
    "a": "Anyone wishing to establish a micro, small, or medium enterprise can apply for Udyam Registration. Partnership Firm; One Person Company; Proprietorships; Private Limited Company; Limited Company; Producer Company; Limited Liability Partnership; Any association of persons; Co-operative societies; Any other undertaking; Hindu Undivided Family (HUF); Note: As per the Revised Guidelines for MSME, retail and wholesale trades will be allowed to register on Udyam Registration Portal."
  },
  {
    "q": "What are MSME registrtation charges?",
    "a": "The Registration for MSMEs under Udyam Registration Portal is entirely online, and there is no MSME registration fees. It is free of cost. The registration process can be tedious and time-consuming, but Merrafilings can help you make it easier. With our assistance, you can quickly get your Udyog Aadhar Registration done with minimal effort and hassle."
  },
  {
    "q": "What is Udyog Aadhar Registration Benefits?",
    "a": "Udyog Aadhar Registration will be an enterprise's permanent registration and primary identification number.; MSME Registration is paperless and based on self-declaration.; Udyam registration is permanent, and there will be no need for renewal.; Any activities, including manufacturing, service, or both, may be specified in one Udayam Registration.; Enterprises may register themselves on GeM (Government e Portal along with the Udyam Registration.; MSMEs themselves can also be onboard on the TReDS Platform ; The Udyam Registration may also help MSMEs in availing the benefits of the following Schemes of the Ministry of MSMEs :; Credit Guarantee Scheme; Public Procurement Policy; Additional edge in Government Tenders & Protection against delayed payments.; Udyam registered entity becomes eligible for priority sector lending from Banks."
  },
  {
    "q": "What is NIC code for Udyam Registration?",
    "a": "The NIC code is a business code that is provided by the government to track the business proceedings for the organization under the micro, small and medium enterprises."
  },
  {
    "q": "How many NIC codes can one add to NIC registration?",
    "a": "One can add a maximum of 10 NIC codes for Udyam registration."
  },
  {
    "q": "What is the Udyam Registration?",
    "a": "Udyam registration is the latest Registration procedure for the Micro, Small, and Medium Enterprises (MSME), launched on July 1, 2020, by the government to ease the registration process. Merrafilings simplifies the registration process and helps you obtain Udyam certificate with affordable MSME registration fees."
  }
];

const FAQ_COL_2 = [
  {
    "q": "Who is eligible for Udyam registration?",
    "a": "Anyone intending to establish micro, small, or medium enterprise may apply online for Udyam registration and obtaining Udyam certificate. Merrafilings helps all the eligible entrepreneurs to register under Udyam with reasonable MSME registration fees."
  },
  {
    "q": "Who is eligible to apply for MSME registration?",
    "a": "MSME registration and Udyam Certificate can be obtained by the following entities that fulfill the revised MSME classification criteria of annual turnover and investment: Individuals, startups, business owners, and entrepreneurs; Private and public limited companies; Sole proprietorship; Partnership firm; Limited Liability Partnerships (LLPs); Self-Help Groups (SHGs); Co-operative societies; Trusts; These entities involved in the following activities are eligible for Udyam registration: Manufacturing Enterprises ; Service Enterprises ; Small retailers or wholesalers"
  },
  {
    "q": "What are the definitions of MSME effective from 01/7/2020?",
    "a": "Composite Criteria: Investment in Plant / Machinery and Turnover Sl.No Type of Enterprises Investment Turnover 1 Micro enterprises Less than Rs.1 Crore Less than Rs.5 Crore 2 Small enterprises Less than Rs.10 Crore Less than Rs.50 Crore 3 Medium enterprises Less than Rs.20 Crore Less than Rs.100 Crore"
  },
  {
    "q": "How can I initiate the Udyam registration certificate download?",
    "a": "To initiate the Udyam registration certificate download, you need to log in to the official Udyam registration portal with your credentials and download the certificate."
  },
  {
    "q": "Can we have two Udyam registrations?",
    "a": "When the enterprises are different, i.e., established under other names and registered or incorporated separately, the enterprise proprietor can apply for MSME registration. However, an enterprise cannot file for more than one Udyam Registration. All the activities, including manufacturing or service, should be specified or added to one Udyam Registration. An entrepreneur can add additional actions to the Udyam Registration by clicking on the ‘Update Details’ option on the homepage."
  },
  {
    "q": "Is the Aadhar card compulsory for Udyam Registration?",
    "a": "Yes. For obtaining Udyam registration, an Aadhaar card is compulsory. In case an applicant is other than the proprietor, the Aadhaar card of the partner and the director will be required."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "Can I obtain more than one Registration on the same PAN?",
    "a": "No, one cannot take more than one Udyam Registration on the same PAN."
  },
  {
    "q": "What is the NIC code for Udyam Registration?",
    "a": "The NIC code is a business code that is provided by the government to track the business proceedings for the organization under the micro, small and medium enterprises. One can add a maximum of 10 NIC codes for Udyam registration."
  },
  {
    "q": "What are the uses of Udyam Registration?",
    "a": "MSME registration helps in getting government tenders; Under bank loan, 15% import subsidy on fully automatic machinery; It becomes easy to get licenses, approvals, and registrations, irrespective of the field of business; Compensation of ISO certificate expenditure; It helps in getting low-interest rates on loans; Registered MSMEs get tariff subsidies and tax and capital subsidies; Gets exemption under Direct Tax Laws; Concession in electricity Bills; Protection against payments (Delayed payments) MSME Samadhan; Technology and quality up-gradation support to MSMEs"
  },
  {
    "q": "How long does it take to obtain Udyam Registration?",
    "a": "The processing is dependent on the submission of the documents by the client."
  },
  {
    "q": "Are there any chances of rejection of Udyam?",
    "a": "The application will be approved based on the information provided by the applicant. The documents and details should be up to date to avoid any chances of rejection."
  },
  {
    "q": "Is Registration of MSME /Udyog Aadhar replaced with Udyam Registration?",
    "a": "Yes, MSME / Udyog Aadhaar registration is replaced with Udyam Registration. As per the notification of MSME dated 26.06. 2020, Udyam Registration is the new process of Registration launched by the Ministry of Micro, Small, and Medium Enterprises, effective from July 1, 2020."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "Is the MSME Udyam registration compulsory?",
    "a": "No. The enterprises that come under the MSME category need not mandatorily apply for MSME registration. However, it is better to obtain MSME/Udyam registration as the government provides a lot of benefits in terms of loan facilities, easy access to credit, low-interest rates, eligibility to many schemes, etc., to the enterprises that have Udyam registration."
  },
  {
    "q": "Do I need multiple registrations for manufacturing plants in different cities?",
    "a": "No. The MSME Certificate is for a single entity irrespective of multiple branches or plants. However, information about various departments or plants must be furnished."
  },
  {
    "q": "Whose Aadhaar number is required to be entered when filling the MSME registration?",
    "a": "In the case of a company, its authorized signatory should provide the PAN and Aadhaar number while filling in the MSME registration."
  },
  {
    "q": "Is Aadhar mandatory for Udyam Registration?",
    "a": "Yes, Aadhar is mandatory for obtaining the Udyam registration."
  },
  {
    "q": "What documents are required for Udyam Registration?",
    "a": "The user will have to provide their 12 digit Aadhar number, PAN Card, and the bank account details of the business for the registration process."
  },
  {
    "q": "What is the validity of Udyam registration?",
    "a": "The registration is valid till the existence of enterprises and there is no need to renew the registration."
  },
  {
    "q": "Are traders eligible for Udyam registration?",
    "a": "Earlier, the MSME registration covered only manufacturing and service industries. The scheme does not cover trading companies. However, in July 2021, the government announced that the wholesale and retail trade would come under the MSME classification and thus can apply for their wholesale/retail business registration."
  }
];

const FORM_FEATURES = [
  { icon: <Award className="w-4 h-4" />, text: "Official Ministry of MSME Recognition Certificate" },
  { icon: <Landmark className="w-4 h-4" />, text: "Priority Sector Bank Lending & Collateral-Free Loans" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "45-Day Buyer Payment Protection under MSME Samadhan" },
  { icon: <BadgePercent className="w-4 h-4" />, text: "50% Patent & Trademark Statutory Fee Concessions" },
  { icon: <Clock className="w-4 h-4" />, text: "Fast-Track 24-48 Hour Processing with Lifetime Validity" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Basic Udyam Registration",
    shortDesc: "Essential statutory MSME certification for micro enterprises, sole proprietors, and startups.",
    expandedDesc: "Complete Aadhaar & PAN validation, accurate 5-digit NIC activity mapping, filing on the National Udyam portal, and instant digital QR-coded registration certificate download with permanent validity.",
    price: "₹2,899",
    priceSub: "All Inclusive | Lifetime Validity",
    badge: "Basic MSME",
    features: [
      "Official Permanent Udyam Certificate",
      "Accurate NIC Code Activity Mapping (Up to 10)",
      "Zero Physical Documentation / Paperless Filing",
      "Instant Certificate Download & Cloud Storage",
      "Eligible for Priority Sector Bank Loans",
      "Dedicated MSME Registration Specialist",
    ],
  },
  {
    name: "Udyam + GeM Public Tender Suite",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Comprehensive package for expanding businesses seeking government tenders and marketplace procurement.",
    expandedDesc: "Includes full Udyam Registration plus vendor onboarding on the Government e-Marketplace (GeM), Earnest Money Deposit (EMD) exemption facilitation, and compliance kit for public procurement tenders.",
    price: "₹4,899",
    priceSub: "All Inclusive | Complete Tender Setup",
    features: [
      "Full Udyam (MSME) Registration Certificate",
      "Government e-Marketplace (GeM) Vendor Setup",
      "Primary User & Secondary User Account Creation",
      "EMD & Tender Fee Exemption Filing Guide",
      "MSME Samadhan Delayed Payment Filing Advisory",
      "Priority Fast-Track Turnaround (24 Hours)",
      "1-Year Compliance & Portal Support",
    ],
  },
  {
    name: "Comprehensive MSME Priority Growth Suite",
    shortDesc: "Complete regulatory, banking, and subsidy advisory suite for growing manufacturers, traders, and service providers.",
    expandedDesc: "Designed for SMEs seeking bank loan subsidies, interest rate subventions, ZED certification advisory, TReDS bill discounting onboarding, and priority corporate tax exemptions under Section 43B(h).",
    price: "₹7,999",
    priceSub: "All Inclusive | Enterprise SME Advisory",
    badge: "Enterprise Suite",
    features: [
      "Full Udyam + GeM Portal Onboarding",
      "TReDS Bill Discounting Portal Profile Setup",
      "Section 43B(h) 45-Day Payment Compliance Kit",
      "CGTMSE Collateral-Free Loan Application Kit",
      "50% Trademark & Patent Rebate Verification",
      "Dedicated Senior Corporate & MSME Counsel",
      "Annual Turnover / Investment Portal Re-validation",
    ],
  },
];

const RELATED_GUIDES = [
  "Understanding the 45-Day MSME Payment Rule Under Section 43B(h)",
  "How to Check Udyam Registration Status and Download Certificate Online",
  "Composite Criteria: Revised MSME Classification for Micro, Small & Medium",
  "How to Register as a Vendor on Government e-Marketplace (GeM)",
  "Top 10 Government Subsidy Schemes for Udyam Registered MSMEs",
  "Step-by-Step Guide to Updating NIC Codes on Udyam Portal"
];

const RELATED_SERVICES_TAGS = [
  "GST Registration",
  "Startup India",
  "Trade License",
  "Shop Act Registration",
  "ISO Registration",
  "Trademark Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "udyam registration online apply",
  "msme certificate download with udyam number",
  "udyam registration fees in India",
  "difference between udyog aadhar and udyam",
  "msme 45 days payment rule income tax"
];

function UdyamGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-medium text-slate-800">Udyam Registration</strong> (also known as Micro, Small, and Medium Enterprise or MSME Registration) is the official statutory registration system introduced by the Ministry of Micro, Small &amp; Medium Enterprises (MoMSME), Government of India, on July 1, 2020. Replacing the obsolete Udyog Aadhaar and EM-I/II frameworks, Udyam Registration establishes a digital, paperless, and self-declaration-based single-window identity for enterprises across India. It unlocks crucial government-backed benefits, including priority sector lending, collateral-free bank loans, subsidies on patent and trademark filings, exemptions from government tender fees, and statutory protection against buyer payment delays under Section 43B(h) of the Income Tax Act.
        </p>
      </div>

      {/* Section 1: What is Udyam Registration in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is Udyam Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Udyam Registration is the primary identification mechanism for businesses classified as Micro, Small, or Medium Enterprises in India. Fully integrated with the Income Tax (CBDT) and Goods and Services Tax Network (GSTN) databases, the Udyam portal automatically verifies financial data, investment figures, and annual turnover without requiring manual balance sheet uploads. Once registered, the enterprise is allotted a permanent 16-character alphanumeric <strong className="font-medium text-slate-800">Udyam Registration Number (URN)</strong> and an official digital QR-coded certificate that never expires.
        </p>
      </section>

      {/* Section 2: Purpose of UDYAM Registration in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. What is the Purpose of UDYAM Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The central objective of the Udyam framework is to formalize and accelerate the growth of India&apos;s MSME sector, which contributes over 30% to the national GDP and 45% to total exports. Key statutory purposes include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
              <Landmark className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Priority Sector Lending</span>
            </h3>
            <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
              Mandatory qualification for scheduled commercial banks to grant concessional credit under Priority Sector Lending (PSL) targets.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Collateral-Free Credit via CGTMSE</span>
            </h3>
            <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
              Enables enterprises to access institutional bank financing up to ₹5 Crore without offering third-party collateral or assets.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Public Procurement Exemption</span>
            </h3>
            <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
              Central ministries and public sector undertakings (PSUs) must mandatorily procure 25% of annual requirements from MSMEs with EMD waivers.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-amber-700 transition-colors flex items-center gap-2">
              <BadgePercent className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Statutory IP &amp; Quality Subsidies</span>
            </h3>
            <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
              50% fee concessions on Trademark filings, 80% on Patents, and reimbursement of expenses incurred in obtaining ISO certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Are Banks Asking for UDYAM Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Why Are Banks Mandating UDYAM Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Under Reserve Bank of India (RBI) circulars, all scheduled commercial banks, regional rural banks (RRBs), and NBFCs are mandated to verify Udyam Registration certificates before classifying commercial loans under Priority Sector Lending. Possessing an active Udyam certificate offers businesses:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal pl-4 list-disc">
          <li><strong>Interest Rate Subventions:</strong> 1% to 2% discount on working capital term loans and cash credit facilities.</li>
          <li><strong>Mudra Loan Clearances:</strong> Rapid processing of Shishu (up to ₹50,000), Kishore (up to ₹5 Lakh), and Tarun (up to ₹10 Lakh) loan schemes.</li>
          <li><strong>Exemption from Loan Margin Money:</strong> Relaxed margin requirements for manufacturing plant and machinery additions.</li>
          <li><strong>Seamless Commercial Current Accounts:</strong> Serves as an unassailable government proof of commercial activity for instant current account KYC.</li>
        </ul>
      </section>

      {/* Section 4: Who Can Apply for UDYAM Registration in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Who Can Apply for UDYAM Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Any commercial entity engaged in manufacturing, production, processing, preservation of goods, or rendering services can register. As per the landmark July 2021 notification by the Ministry of MSME, <strong className="font-medium text-slate-800">retail and wholesale traders</strong> are also fully eligible to register under Udyam to obtain Priority Sector Lending benefits. Eligible legal constitutions include:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-2 text-xs font-normal text-slate-900">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Sole Proprietorships</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Partnership Firms</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Limited Liability Partnerships (LLP)</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Private Limited Companies</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Public Limited Companies</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">One Person Companies (OPC)</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Hindu Undivided Families (HUF)</div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">Co-operative Societies &amp; Trusts</div>
        </div>
      </section>

      {/* Section 5 & 6: UDYAM Registration Number Structure & Table 1 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. UDYAM Registration Number Structure &amp; Format
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Upon successful verification of Aadhaar and PAN data on the national portal, the enterprise is assigned a unique, permanent identification string termed the <strong className="font-medium text-slate-800">Udyam Registration Number (URN)</strong> formatted as follows:
        </p>

        {/* Table 1: URN Structure */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Component</th>
                <th className="py-3 px-4">Format</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Prefix</td>
                <td className="py-3 px-4 font-mono text-[#594CF5]">UDYAM</td>
                <td className="py-3 px-4 font-normal">Fixed standardized prefix for all Indian registrations</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">State Code</td>
                <td className="py-3 px-4 font-mono text-[#594CF5]">XX (2 Letters)</td>
                <td className="py-3 px-4 font-normal">Two-letter state abbreviation where registered office is situated (e.g., MH, TN, DL, KA)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">District Code</td>
                <td className="py-3 px-4 font-mono text-[#594CF5]">00 (2 Digits)</td>
                <td className="py-3 px-4 font-normal">Numerical code identifying the municipal district jurisdiction</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Serial Number</td>
                <td className="py-3 px-4 font-mono text-[#594CF5]">0000000 (7 Digits)</td>
                <td className="py-3 px-4 font-normal">Unique sequential alphanumeric serial allocated to the enterprise</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-purple-50/40">
                <td className="py-3 px-4 font-semibold text-slate-900">Full Example</td>
                <td className="py-3 px-4 font-mono font-semibold text-purple-700">UDYAM-TN-01-0012345</td>
                <td className="py-3 px-4 font-normal text-slate-900">Enterprise registered in Chennai District, Tamil Nadu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Status Codes & Table 2 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Udyam Application Status Codes &amp; Verification
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          After submitting your application, you can track its progress on the national portal. The application transitions through standard status checkpoints:
        </p>

        {/* Table 2: Status Meanings */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Application Status</th>
                <th className="py-3 px-4">Statutory Meaning &amp; Action Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-blue-700">Submitted</td>
                <td className="py-3 px-4 font-normal">Application successfully lodged on national portal; under automated database check.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-purple-700">Verified</td>
                <td className="py-3 px-4 font-normal">Aadhaar OTP confirmed, PAN verified with CBDT, and GST data matched.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-emerald-700">Approved</td>
                <td className="py-3 px-4 font-normal">Udyam Registration Certificate generated and ready for instant PDF download.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-amber-700">Pending</td>
                <td className="py-3 px-4 font-normal">Additional verification needed or PAN-Aadhaar linkage check in progress.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-rose-700">Rejected</td>
                <td className="py-3 px-4 font-normal">Discrepancy in applicant name, mismatched PAN, or duplicate application flagged.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Old MSME (Udyog Aadhaar) vs Udyam Registration & Table 3 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Difference Between Old MSME (Udyog Aadhaar) vs Udyam Registration
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Entrepreneurs who held old Udyog Aadhaar Memorandums (UAM) or EM-II certificates must migrate to Udyam Registration. Old registrations are no longer legally recognized by banks or government departments.
        </p>

        {/* Table 3: Comparison */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Old MSME (Udyog Aadhaar)</th>
                <th className="py-3 px-4">New Udyam Registration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">National Portal</td>
                <td className="py-3 px-4 font-normal">Udyog Aadhaar Portal (Discontinued)</td>
                <td className="py-3 px-4 font-normal font-medium text-purple-700">Udyam Registration Portal (Active)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Launch Date</td>
                <td className="py-3 px-4 font-normal">September 2015</td>
                <td className="py-3 px-4 font-normal">July 1, 2020</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Verification Basis</td>
                <td className="py-3 px-4 font-normal">Self-declaration without automated tax verification</td>
                <td className="py-3 px-4 font-normal text-emerald-700 font-medium">Real-time IT (CBDT) and GSTN API integration</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Classification Basis</td>
                <td className="py-3 px-4 font-normal">Investment in Plant &amp; Machinery only</td>
                <td className="py-3 px-4 font-normal">Composite Criteria: Investment AND Annual Turnover</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Validity Period</td>
                <td className="py-3 px-4 font-normal">Required periodic manual renewal</td>
                <td className="py-3 px-4 font-normal text-emerald-700 font-medium">Permanent Lifetime (Auto-updates via ITR)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Current Legal Status</td>
                <td className="py-3 px-4 font-normal text-rose-600 font-medium">Invalidated by MoMSME</td>
                <td className="py-3 px-4 font-normal text-emerald-700 font-medium">100% Mandatory for all MSME benefits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: MSME Classification Criteria & Table 4 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Revised Composite MSME Classification Criteria in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Effective July 1, 2020, the Government of India abolished the distinction between the manufacturing and service sectors, adopting a unified <strong className="font-medium text-slate-800">Composite Criteria</strong> combining investment in plant, machinery, or equipment with annual turnover:
        </p>

        {/* Table 4: Composite Criteria */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Enterprise Category</th>
                <th className="py-3 px-4">Investment in Plant &amp; Equipment</th>
                <th className="py-3 px-4">Annual Net Turnover</th>
                <th className="py-3 px-4">Export Turnover Exclusion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium text-xs">
                    Micro Enterprise
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-slate-800">Does not exceed ₹1 Crore</td>
                <td className="py-3 px-4 font-medium text-slate-800">Does not exceed ₹5 Crore</td>
                <td className="py-3 px-4 font-normal text-emerald-600">Exports 100% Excluded</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium text-xs">
                    Small Enterprise
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-slate-800">Does not exceed ₹10 Crore</td>
                <td className="py-3 px-4 font-medium text-slate-800">Does not exceed ₹50 Crore</td>
                <td className="py-3 px-4 font-normal text-emerald-600">Exports 100% Excluded</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-900">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-medium text-xs">
                    Medium Enterprise
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-slate-800">Does not exceed ₹50 Crore</td>
                <td className="py-3 px-4 font-medium text-slate-800">Does not exceed ₹250 Crore</td>
                <td className="py-3 px-4 font-normal text-emerald-600">Exports 100% Excluded</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 font-normal italic pt-1">
          *Note: Under Section 7 of the MSMED Act, turnover generated from export of goods or services is completely excluded while calculating the turnover threshold for MSME classification.
        </p>
      </section>

      {/* Section 10: 45-Day Payment Rule & Section 43B(h) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. The 45-Day Payment Rule Under Section 43B(h) of the Income Tax Act
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          One of the most powerful protections provided to Udyam-registered Micro and Small enterprises is statutory protection against delayed payments from commercial buyers:
        </p>
        <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200/60 space-y-2 text-xs sm:text-sm text-slate-700 font-normal">
          <p>
            <strong>Statutory Payment Timeline (MSMED Act Section 15):</strong> A buyer must make payment to an MSME supplier within the agreed period, which cannot exceed <strong className="text-purple-900 font-medium">45 days</strong> from the day of acceptance of goods/services. If no written agreement exists, payment must be made within <strong className="text-purple-900 font-medium">15 days</strong>.
          </p>
          <p>
            <strong>Compounding Penal Interest (Section 16):</strong> If the buyer fails to pay within 45 days, they are legally liable to pay monthly compounding interest at <strong className="text-purple-900 font-medium">three times the RBI Bank Rate</strong>.
          </p>
          <p>
            <strong>Section 43B(h) Tax Disallowance:</strong> Introduced via the Finance Act 2023, if a corporate or business buyer fails to settle overdue payments to registered Micro or Small enterprises before the end of the financial year, the outstanding expense is <strong className="text-rose-700 font-medium">disallowed as a business deduction</strong> and added back to the buyer&apos;s taxable income, resulting in heavy income tax liability for the defaulting buyer.
          </p>
        </div>
      </section>

      {/* Section 11: Step-by-Step Application Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Step-by-Step Udyam Registration Online Process
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The registration process is 100% paperless and executed digitally:
        </p>
        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Aadhaar &amp; PAN Authentication</h3>
              <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                Enter the 12-digit Aadhaar number of the proprietor, managing partner, or authorized director. Verify identity via instant Aadhaar OTP, followed by PAN validation.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Enterprise Profile &amp; Location Details</h3>
              <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                Provide enterprise name, official business address, plant/unit location addresses, commercial bank account details (IFSC and account number), and employee headcount.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">National Industrial Classification (NIC) Code Selection</h3>
              <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                Accurately map your business activities under 2-digit, 4-digit, and 5-digit NIC codes (manufacturing, service, or retail/wholesale trade). Up to 10 NIC codes can be added.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Final OTP Submission &amp; Certificate Issuance</h3>
              <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                Submit the final OTP received on your Aadhaar-linked mobile. Your application is assigned an acknowledgement number, and the official Udyam Registration Certificate is generated within 24 to 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Documents Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Mandatory Documents &amp; Information Checklist
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Because the Udyam portal operates on digital self-declaration, <strong className="font-medium text-slate-800">no physical documents need to be uploaded</strong>. You only require the following verified data points:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 group-hover:text-emerald-950 font-normal transition-colors">Aadhaar card linked with active mobile number for OTP</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 group-hover:text-emerald-950 font-normal transition-colors">Permanent Account Number (PAN) of enterprise / proprietor</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 group-hover:text-emerald-950 font-normal transition-colors">Commercial bank account number and IFSC code</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 group-hover:text-emerald-950 font-normal transition-colors">GSTIN (if applicable or mandatory under GST Act)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 group-hover:text-emerald-950 font-normal transition-colors">Exact address of manufacturing plants and offices</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 group-hover:text-emerald-950 font-normal transition-colors">Number of male, female, and other employees</span>
          </div>
        </div>
      </section>

      {/* Section 13: Common Mistakes & How to Avoid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. Common Mistakes to Avoid in Udyam Registration
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal pl-4 list-disc">
          <li><strong>Multiple Registrations on Same PAN:</strong> Only ONE Udyam registration is legally permitted per PAN. All branches, units, and manufacturing facilities must be added under the same registration.</li>
          <li><strong>Incorrect NIC Codes:</strong> Selecting broad or incorrect NIC codes can disqualify your business from state industrial subsidies and specific sector bank schemes.</li>
          <li><strong>Aadhaar-PAN Name Mismatch:</strong> Spelling discrepancies between your PAN card and Aadhaar card cause instant portal validation rejection.</li>
          <li><strong>Ignoring Annual Updates:</strong> Failure to verify ITR data annually on the portal can lead to suspension of MSME classification status.</li>
        </ul>
      </section>

      {/* Section 14: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          13. Why Choose Merrafilings for Udyam Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          While government portal registration is paperless, ensuring accurate 5-digit NIC code mapping, seamless PAN-GST data integration, GeM tender readiness, and Section 43B(h) compliance requires professional regulatory precision. Merrafilings provides:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-normal text-slate-900">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Dedicated MSME Regulatory Consultants</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">100% Error-Free Fast-Track 24-48 Hour Turnaround</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Free GeM &amp; TReDS Portal Onboarding Advisory</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Complimentary Section 43B(h) 45-Day Invoice Clause Template</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Udyam MSME Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for Udyam Registration Certificate Online</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function UdyamRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Ministry of MSME Government of India Certification"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Udyam (MSME) Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Obtain your official permanent MSME Udyam Certificate 100% online. Unlock priority bank lending, collateral-free credit, 45-day buyer payment protection under Section 43B(h), and government tender fee exemptions."
      formTitle="Get Your Udyam Certificate"
      formSubtitle="Enter your business details below to speak with our MSME certification specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">MSME registration pricing.</span>
        </>
      }
      pricingSubtitle="Select your business package for swift Udyam certificate issuance and GeM tender onboarding."
      breadcrumbCurrent="Udyam Registration"
      guideTitle="Udyam Registration Online - MSME Certificate in India"
      guideContent={<UdyamGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Udyam registration, MSME certificate, 45-day payment rules, and bank loans in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
