"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  FAQItem,
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
  Users,
  Briefcase,
  AlertTriangle,
  Zap,
  Globe2,
  FileSignature,
  DollarSign,
  Calculator,
  Percent,
  Landmark,
  CreditCard,
  SendHorizontal,
  Banknote,
  FileLock2,
  Share2,
  CheckCheck,
  Compass,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "Net Worth Computation & 400% Automatic Limit Verification" },
  { icon: <FileSignature className="w-4 h-4 text-emerald-600" />, text: "Form ODI (Part I, II & III) Online E-Filing via AD Bank" },
  { icon: <Landmark className="w-4 h-4 text-emerald-600" />, text: "Unique Identification Number (UIN) Allotment from RBI" },
  { icon: <Globe2 className="w-4 h-4 text-emerald-600" />, text: "Wholly Owned Subsidiary (WOS) & Joint Venture (JV) Advisory" },
  { icon: <FileCheck className="w-4 h-4 text-emerald-600" />, text: "Annual Performance Report (APR) Filing & Post-ODI Compliance" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ODI Filing for Resident Individuals (LRS Route)",
    shortDesc: "Complete FEMA compliance for resident individuals acquiring equity or establishing an entity abroad under LRS.",
    expandedDesc: "Designed for resident individuals investing in foreign entities (Wholly Owned Subsidiaries, Joint Ventures, or overseas employee stock ownership) up to USD 250,000 per financial year under the Liberalised Remittance Scheme (LRS). We assist with LRS Form A2 declaration, Form ODI submission via your Authorised Dealer (AD) Bank, KYC documentation, valuation certification, and acquiring the RBI Unique Identification Number (UIN).",
    price: "₹7,999",
    priceSub: "Per Outward Investment | Up to USD 2,50,000/year",
    badge: "Individual Global Investor",
    features: [
      "LRS Limit Verification (USD 2,50,000 per financial year check)",
      "Preparation of Form A2 & FEMA Outward Remittance Declaration",
      "Submission of Form ODI Part I to Authorised Dealer (AD Bank)",
      "Verification of Foreign Entity Incorporation Certificate & Charter",
      "Valuation Report review for overseas share acquisitions",
      "Coordination with AD Bank for SWIFT remittance execution",
      "Unique Identification Number (UIN) retrieval from RBI",
      "Post-investment share certificate submission guidance",
      "Advisory on TCS (Tax Collected at Source) on foreign remittances",
    ],
  },
  {
    name: "Corporate ODI Filing – WOS / JV Setup",
    popular: true,
    badge: "Most Popular / Corporate Expansion",
    shortDesc: "End-to-end ODI compliance for Indian companies and LLPs setting up or acquiring an overseas subsidiary or joint venture under the 400% net worth automatic route.",
    expandedDesc: "Designed for Indian Private Limited companies, Public Limited companies, and LLPs expanding globally by setting up a Wholly Owned Subsidiary (WOS) or entering into a Joint Venture (JV). Under the Overseas Investment Rules 2022, Indian entities can invest up to 400% of their audited net worth under the automatic route. We handle statutory board resolutions, net worth certification by auditors, Form ODI Part I filing, AD bank scrutiny liaison, UIN issuance, and Form ODI Part II post-investment reporting.",
    price: "₹14,999",
    priceSub: "Per Foreign Subsidiary / Joint Venture Setup",
    features: [
      "Comprehensive 400% Net Worth Limit & Financial Commitment Analysis",
      "Drafting of Board Resolution approving global expansion & investment",
      "Auditor Net Worth Certificate preparation & verification",
      "Verification of foreign entity charter documents & JV agreement",
      "Preparation & lodging of Form ODI Part I with AD Category-I Bank",
      "Liaison with AD Bank Foreign Exchange division & RBI OI Portal",
      "Allotment of Unique Identification Number (UIN) by RBI",
      "Form ODI Part II filing upon receipt of foreign share certificates",
      "Comprehensive guidance on loan disbursements & corporate guarantees",
    ],
  },
  {
    name: "Annual Performance Report (APR) & Post-ODI Retainer",
    shortDesc: "Ongoing annual FEMA compliance covering Annual Performance Report (APR) filing by December 31, share certificate tracking, and dividend repatriation.",
    expandedDesc: "Statutory post-investment compliance is mandatory under FEMA for every foreign entity in which an Indian entity holds an ODI. Non-filing of the Annual Performance Report (APR) by December 31 invites Late Submission Fees (LSF) and freezing of foreign remittances. Our annual retainer manages APR drafting based on audited foreign financials, monitoring 60-day dividend repatriation rules, Form ODI Part III for disinvestment/restructuring, and RBI compounding petition filing if required.",
    price: "₹24,999",
    priceSub: "Annual Governance / APR Filing + Post-ODI Suite",
    badge: "Complete Global Governance",
    features: [
      "Annual Performance Report (Form APR) filing on RBI portal by Dec 31",
      "Review of Audited Financial Statements of the overseas entity",
      "Tracking & reporting of share certificate submission within 6 months",
      "Monitoring & reporting of dividend repatriation to India within 60 days",
      "Form ODI Part III filing for disinvestment, share transfer, or capital reduction",
      "Annual Return on Foreign Liabilities & Assets (FLA Return) sync",
      "Intimation of changes in foreign subsidiary capital structure or activities",
      "Compounding support before RBI for historical reporting delays",
      "Direct priority access to Senior FEMA & Cross-Border Legal Advisory Desk",
    ],
  },
];

const ODI_TYPES_GRID = [
  {
    type: "Wholly Owned Subsidiary (WOS)",
    ownership: "100% Equity Ownership",
    filing: "Mandatory Form ODI (Part I & II)",
    desc: "Sole ownership in an overseas operating company. Enables full operational autonomy, intellectual property protection, and establishment of dedicated overseas sales, tech, or holding hubs.",
    tagColor: "border-blue-200 bg-blue-50/70 text-blue-800",
    hoverColor: "hover:border-blue-500 hover:shadow-blue-500/10 hover:bg-blue-50/15",
    icon: <Building2 className="w-5 h-5 text-blue-600" />,
  },
  {
    type: "Joint Venture (JV)",
    ownership: "Shared Equity with Foreign Partner",
    filing: "Mandatory Form ODI (Part I & II)",
    desc: "Equity participation in partnership with a foreign entity. Ideal for leveraging local market distribution, regional licenses, and sharing operational risks in new international markets.",
    tagColor: "border-emerald-200 bg-emerald-50/70 text-emerald-800",
    hoverColor: "hover:border-emerald-500 hover:shadow-emerald-500/10 hover:bg-emerald-50/15",
    icon: <Users className="w-5 h-5 text-emerald-600" />,
  },
  {
    type: "Direct Equity / Capital Contribution",
    ownership: "Substantial Equity / Voting Rights",
    filing: "Mandatory Form ODI Reporting",
    desc: "Subscription or purchase of shares, voting capital, or convertible instruments in a foreign operating enterprise meeting the statutory criteria of Overseas Direct Investment under FEMA.",
    tagColor: "border-purple-200 bg-purple-50/70 text-purple-800",
    hoverColor: "hover:border-purple-500 hover:shadow-purple-500/10 hover:bg-purple-50/15",
    icon: <Coins className="w-5 h-5 text-purple-600" />,
  },
  {
    type: "Loan to Foreign Subsidiary / JV",
    ownership: "Debt / Working Capital Facility",
    filing: "Form ODI Reporting + Loan Agreement",
    desc: "Extending term loans or working capital credit to an overseas WOS or JV. The Indian entity must hold equity participation in the foreign entity to extend such debt under FEMA rules.",
    tagColor: "border-amber-200 bg-amber-50/70 text-amber-800",
    hoverColor: "hover:border-amber-500 hover:shadow-amber-500/10 hover:bg-amber-50/15",
    icon: <Landmark className="w-5 h-5 text-amber-600" />,
  },
  {
    type: "Corporate Guarantee / Performance Guarantee",
    ownership: "Contingent Liability Coverage",
    filing: "Part of Total Financial Commitment",
    desc: "Issuing corporate, performance, or personal guarantees on behalf of the overseas entity. Counts towards the Indian entity's 400% net worth limit and requires AD bank intimation.",
    tagColor: "border-teal-200 bg-teal-50/70 text-teal-800",
    hoverColor: "hover:border-teal-500 hover:shadow-teal-500/10 hover:bg-teal-50/15",
    icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  },
  {
    type: "Acquisition of Foreign Business / Assets",
    ownership: "M&A / Asset Purchase / Share Swap",
    filing: "Mandatory Form ODI + Valuation",
    desc: "Acquiring an existing foreign operating business, business division, or overseas intellectual property via cash consideration, share swap, or issuance of Indian capital instruments.",
    tagColor: "border-rose-200 bg-rose-50/70 text-rose-800",
    hoverColor: "hover:border-rose-500 hover:shadow-rose-500/10 hover:bg-rose-50/15",
    icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
  },
];

const ROUTE_COMPARISON = [
  {
    route: "Automatic Route (Up to 400% Net Worth)",
    applicability: "Indian Companies, LLPs & Registered Partnerships investing in permissible, bonafide business activities abroad.",
    financialCap: "Aggregate financial commitment up to 400% of the Indian entity's audited net worth as per the last balance sheet.",
    approvalMechanism: "Zero prior RBI approval needed. Application processed directly through Authorised Dealer (AD Category-I) Bank via RBI OI Portal.",
    badgeColor: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  {
    route: "Approval Route (Prior RBI Clearance)",
    applicability: "Investments exceeding 400% net worth, investments in restricted sectors (real estate/gambling), or countries under UN sanctions/Pakistan.",
    financialCap: "Beyond 400% net worth or non-standard corporate structures / multiple layers beyond permissible levels.",
    approvalMechanism: "Mandatory prior approval from RBI Central Office (Foreign Exchange Department) via AD Bank with detailed business feasibility dossier.",
    badgeColor: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    route: "Resident Individual Route (LRS)",
    applicability: "Resident individuals acquiring equity or establishing an overseas WOS/JV engaged in operating business activities.",
    financialCap: "Up to USD 2,50,000 per financial year under the Liberalised Remittance Scheme (LRS) quota.",
    approvalMechanism: "Processed by AD Bank under Form A2 and Form ODI without prior RBI clearance, subject to LRS limits.",
    badgeColor: "border-blue-200 bg-blue-50 text-blue-800",
  },
];

const ODI_STEPS = [
  {
    step: "01",
    title: "Structure Identification & Feasibility Audit",
    desc: "Define the investment mode (WOS vs JV, equity vs loan vs corporate guarantee). Verify that the overseas target engages in bonafide, permissible commercial business activities.",
    badge: "Structuring",
  },
  {
    step: "02",
    title: "Net Worth Computation & Limit Verification",
    desc: "Obtain an Auditor's Net Worth Certificate. Confirm that the total financial commitment does not breach the 400% net worth threshold under the automatic route.",
    badge: "Financial Cap",
  },
  {
    step: "03",
    title: "Corporate Authorizations & Board Resolution",
    desc: "Convene a Board Meeting to pass formal resolutions approving overseas investment, nominating authorized signatories, and specifying the AD Bank branch.",
    badge: "Board Approval",
  },
  {
    step: "04",
    title: "Valuation Report Procurement",
    desc: "For acquiring shares of an existing foreign entity, secure a valuation certificate from a SEBI-registered Merchant Banker or Chartered Accountant as mandated by FEMA.",
    badge: "Valuation",
  },
  {
    step: "05",
    title: "Submission of Form ODI Part I to AD Bank",
    desc: "Submit Form ODI Part I along with certified MoA/AoA, audited financials, net worth certificate, foreign entity incorporation charter, and bank KYC to the AD Category-I Bank.",
    badge: "Bank Lodgement",
  },
  {
    step: "06",
    title: "RBI OI Portal Reporting & UIN Allotment",
    desc: "The AD Bank verifies the dossier and logs the transaction on the RBI's Overseas Investment (OI) portal. The RBI allots a permanent Unique Identification Number (UIN).",
    badge: "UIN Issued",
  },
  {
    step: "07",
    title: "Outward SWIFT Remittance Execution",
    desc: "After UIN allotment, the AD Bank executes the foreign exchange wire transfer via SWIFT referencing the UIN, purpose code, and beneficiary account details.",
    badge: "Remittance",
  },
  {
    step: "08",
    title: "Form ODI Part II & Share Certificate Lodgement",
    desc: "Within 6 months of remittance, the Indian entity must obtain share certificates or proof of investment from the overseas entity and file Form ODI Part II with the AD Bank.",
    badge: "Share Receipt",
  },
  {
    step: "09",
    title: "Annual Performance Report (APR) Filing",
    desc: "Every year by December 31, file Form APR based on audited financial statements of the foreign entity to maintain active, non-defaulter compliance standing.",
    badge: "Annual APR",
  },
  {
    step: "10",
    title: "Disinvestment & Exit Reporting (Form ODI Part III)",
    desc: "In case of divestment, liquidation, or sale of foreign shares, repatriate sale proceeds within 90 days and report through Form ODI Part III within 30 days.",
    badge: "Exit Closure",
  },
];

const DOCUMENTS_CHECKLIST = [
  {
    category: "Indian Entity Statutory Credentials",
    items: [
      "Certificate of Incorporation, PAN card & active CIN/LLPIN",
      "Certified True Copy of Memorandum (MoA) & Articles of Association (AoA)",
      "Certified Board Resolution approving overseas investment & authorized signatories",
      "Audited Financial Statements of the Indian entity for the preceding 3 financial years",
      "Statutory Auditor's Net Worth Certificate certifying paid-up capital & free reserves",
    ],
  },
  {
    category: "Foreign Entity Charter & Agreements",
    items: [
      "Certificate of Incorporation / Registration of the foreign entity",
      "Memorandum / By-Laws / Charter documents of the overseas entity",
      "Share Purchase Agreement (SPA) or Joint Venture Agreement (JVA) where applicable",
      "Business Plan / Feasibility Report detailing proposed overseas commercial operations",
    ],
  },
  {
    category: "Banking, Valuation & Approvals",
    items: [
      "Valuation Certificate from SEBI-registered Merchant Banker or Chartered Accountant",
      "Bank Account Statement & KYC documentation of the remitting entity",
      "No Objection Certificate (NOC) from Indian lending banks (if outstanding credit facilities exist)",
      "Form A2 declaration for outward foreign exchange remittance",
    ],
  },
  {
    category: "Statutory Reporting Forms",
    items: [
      "Form ODI Part I: Pre-remittance application for UIN allotment",
      "Form ODI Part II: Post-remittance share certificate submission (within 6 months)",
      "Form ODI Part III: Disinvestment, restructuring, or transfer of overseas shares",
      "Annual Performance Report (APR): Annual compliance by December 31",
    ],
  },
];

const POST_INVESTMENT_RULES = [
  {
    title: "Annual Performance Report (APR) by Dec 31",
    desc: "Mandatory annual submission for every foreign entity invested in, based on audited financial accounts. Failure blocks further remittances and invites Late Submission Fees (LSF).",
    color: "blue",
  },
  {
    title: "Share Certificate Submission Within 6 Months",
    desc: "Original share certificates or statutory proof of investment issued by the foreign jurisdiction must be submitted to the AD Bank within 6 months from the date of remittance.",
    color: "emerald",
  },
  {
    title: "Repatriation of Foreign Earnings Within 60 Days",
    desc: "Dividends, interest on loans, management fees, or royalties received from the overseas entity must be repatriated to India within 60 days of declaration.",
    color: "purple",
  },
  {
    title: "Disinvestment Reporting in Form ODI Part III",
    desc: "Sale of shares, winding up, or transfer of foreign entity interest must be reported to the AD Bank within 30 days of receiving disinvestment proceeds, which must be remitted within 90 days.",
    color: "amber",
  },
  {
    title: "Two-Layer Subsidiary Restriction",
    desc: "Under FEMA Overseas Investment Rules 2022, an Indian entity cannot invest in an overseas entity that has more than two layers of subsidiaries (except banking & insurance).",
    color: "rose",
  },
  {
    title: "Pledge or Charge Reporting",
    desc: "Any creation of a pledge, mortgage, or charge over the shares or assets of the overseas entity in favor of a domestic or foreign lender must be reported to the AD Bank.",
    color: "teal",
  },
];

const FAQ_COL_1: FAQItem[] = [
  {
    q: "What is ODI filing under FEMA in India?",
    a: "ODI (Overseas Direct Investment) filing refers to the mandatory process of reporting and obtaining regulatory clearance for direct capital investments made by Indian residents, companies, LLPs, or partnerships into foreign business entities. It is strictly governed by the Foreign Exchange Management (Overseas Investment) Rules, 2022 and Regulations, 2022, administered by the Reserve Bank of India (RBI) via Authorised Dealer (AD) Banks.",
  },
  {
    q: "Who is eligible to make an Overseas Direct Investment from India?",
    a: "Eligible entities include: (1) Indian Companies incorporated under the Companies Act, (2) Limited Liability Partnerships (LLPs) registered under the LLP Act, (3) Registered Partnership Firms, (4) Resident Individuals up to USD 250,000 per financial year under the Liberalised Remittance Scheme (LRS), and (5) Recognized Indian Startups investing in foreign tech or business entities.",
  },
  {
    q: "What is the difference between ODI (Overseas Direct Investment) and OPI (Overseas Portfolio Investment)?",
    a: "Overseas Direct Investment (ODI) involves acquiring 10% or more of the equity capital in an unlisted or listed foreign entity, or acquiring control/voting rights, or investing in equity accompanied by loans/guarantees. Overseas Portfolio Investment (OPI) refers to passive minority investments in listed foreign securities amounting to less than 10% of paid-up capital without control.",
  },
  {
    q: "What is the financial limit for Indian companies under the ODI automatic route?",
    a: "Under the automatic route, an Indian entity (Company or LLP) can make a total financial commitment (equity, loans, 100% of performance guarantees, and 100% of corporate guarantees) up to 400% of its audited net worth as per the last audited balance sheet, without prior RBI approval.",
  },
  {
    q: "Can resident individuals make an overseas direct investment under ODI rules?",
    a: "Yes. Resident individuals can make an Overseas Direct Investment (ODI) in an operating foreign entity (WOS or JV) engaged in bonafide business activities (excluding financial services, real estate trading, or gambling) within the overall ceiling of USD 2,50,000 per financial year under the Liberalised Remittance Scheme (LRS).",
  },
  {
    q: "What is a Unique Identification Number (UIN) and why is it mandatory?",
    a: "A Unique Identification Number (UIN) is an alphanumeric identifier issued by the Reserve Bank of India for every foreign entity in which an Indian entity invests. No foreign exchange outward remittance can be executed by any AD Bank without quoting this RBI-generated UIN.",
  },
  {
    q: "What is the Annual Performance Report (APR) and what is its due date?",
    a: "An Annual Performance Report (APR) is a statutory report that every Indian entity must submit annually for each overseas subsidiary or joint venture in which it holds an ODI. The APR must be submitted to the AD Bank by December 31 every year based on the audited financial statements of the foreign entity.",
  },
  {
    q: "What documents are required for filing Form ODI Part I?",
    a: "Key documents include: Form ODI Part I signed by the authorized signatory, certified Board Resolution, Memorandum & Articles of Association, Audited Financial Statements of the Indian entity for the preceding 3 years, Statutory Auditor's Net Worth Certificate, Foreign Entity Incorporation Certificate & Charter, Share Purchase/JV Agreement, Valuation Certificate, and Bank NOC if credit facilities exist.",
  },
];

const FAQ_COL_2: FAQItem[] = [
  {
    q: "What is the timeline for submitting share certificates to the AD Bank after outward remittance?",
    a: "The Indian investor must submit the original share certificates or statutory equivalent proof of investment issued by the foreign regulatory authority to the AD Category-I Bank within 6 months from the date of outward foreign exchange remittance.",
  },
  {
    q: "Within what timeframe must dividends and foreign earnings be repatriated to India?",
    a: "All earnings from an overseas entity—including dividends, interest on loans, consultancy fees, or royalties—must be repatriated to India through banking channels within 60 days from the date of declaration or receipt.",
  },
  {
    q: "What are the prohibited sectors for Overseas Direct Investment (ODI)?",
    a: "Under FEMA Overseas Investment Rules 2022, Indian entities are strictly prohibited from investing in: (1) Real estate business (meaning buying and selling real estate or trading in Transferable Development Rights; development of commercial/residential properties is permissible), (2) Gambling in any form, and (3) Banking or financial services activities without prior approval from the sectoral financial regulator (RBI, SEBI, IRDAI).",
  },
  {
    q: "What is the two-layer subsidiary restriction under FEMA Overseas Investment Rules?",
    a: "Under Rule 19 of the Overseas Investment Rules 2022, an Indian entity cannot make an ODI in a foreign entity that has or sets up more than two layers of subsidiaries, in alignment with Section 186(1) of the Companies Act, 2013. Exceptions apply only to banking institutions, insurance companies, and regulated NBFCs.",
  },
  {
    q: "What is the procedure for disinvestment or exit from an overseas entity?",
    a: "An Indian entity may disinvest (sell shares, transfer ownership, or liquidate) without prior RBI approval if the investment was under the automatic route. The sale proceeds must be repatriated to India within 90 days from the date of disinvestment, and Form ODI Part III must be submitted to the AD Bank within 30 days of receiving the proceeds.",
  },
  {
    q: "What are the consequences and penalties for non-compliance with ODI regulations?",
    a: "Under Section 13 of FEMA, contravention of ODI rules can attract penalties up to three times the amount involved. Delays in APR or Form ODI filings attract Late Submission Fees (LSF). The RBI may freeze further outward remittances, issue compounding orders, or refer the matter to the Enforcement Directorate (ED) for willful violations.",
  },
  {
    q: "Can an Indian company extend loans or corporate guarantees to its foreign subsidiary?",
    a: "Yes, an Indian company can extend loans or corporate guarantees to an overseas entity, provided it holds equity participation in that foreign entity and has executed a formal loan agreement with interest rates pegged to standard benchmark rates (e.g., SOFR). All loans and guarantees count towards the 400% net worth financial commitment cap.",
  },
  {
    q: "How can past delays in ODI reporting be regularized with the RBI?",
    a: "Past reporting delays (such as delayed Form ODI Part II or delayed APRs) can be regularized by paying the prescribed Late Submission Fee (LSF) under RBI A.P. (DIR Series) Circulars, or by submitting a formal Compounding Petition under Section 15 of FEMA to the Reserve Bank of India.",
  },
];

const RELATED_GUIDES = [
  { title: "FC-TRS & FC-GPR Filing: Inbound FDI Reporting with RBI", href: "/fc-trs-filing" },
  { title: "Form 15CA & 15CB Filing: Foreign Remittance Tax Clearance", href: "/15ca-15cb-filing" },
  { title: "Indian Subsidiary Registration: Complete FDI Automatic Route Guide", href: "/indian-subsidiary" },
  { title: "TDS Return Filing Online: Quarterly Compliance in India", href: "/tds-return-filing" },
  { title: "Section 195 TDS on Payments to Non-Residents", href: "/tds-return-filing/section-195--payment-to-non-resident" },
];

const RELATED_SERVICES_TAGS = [
  "ODI Filing Online",
  "Overseas Direct Investment FEMA",
  "Form ODI Part I II III",
  "Annual Performance Report APR",
  "UIN Allotment RBI",
  "Overseas Subsidiary Formation",
  "400% Net Worth Limit Check",
  "LRS Route for Individuals",
  "FDI & FC-TRS Filing",
  "Form 15CA 15CB Certification",
  "Foreign Company Incorporation",
  "FEMA Compounding Advisory",
];

const POPULAR_SEARCHES_TAGS = [
  "odi filing online rbi",
  "overseas investment rules 2022",
  "form odi submission process",
  "annual performance report apr due date",
  "uin number for odi rbi",
  "400 percent net worth odi limit",
  "wholly owned subsidiary abroad fema",
  "resident individual investment abroad lrs",
  "late submission fee lsf odi",
  "disinvestment foreign subsidiary form odi part iii",
  "two layer subsidiary restriction fema",
  "rbi compounding petition odi delay",
];

function OdiGuideContent() {
  return (
    <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding ODI Filing Online for Overseas Investment under FEMA
        </h2>
        <p>
          <strong>Overseas Direct Investment (ODI)</strong> represents capital investments made by Indian residents, companies, LLPs, or registered partnership firms outside India. Whether incorporating a Wholly Owned Subsidiary (WOS), forging a cross-border Joint Venture (JV), or acquiring operating assets in international markets, compliance with the <strong>Foreign Exchange Management Act, 1999 (FEMA)</strong> and the <strong>FEMA (Overseas Investment) Rules &amp; Regulations, 2022</strong> is mandatory.
        </p>
        <p>
          The regulatory framework transitioned significantly in 2022, superseding the legacy FEMA 120 regulations. All overseas investments are now reported through Authorised Dealer (AD Category-I) Banks to the Reserve Bank of India via the dedicated <strong>RBI Overseas Investment (OI) portal</strong>. Securing a <strong>Unique Identification Number (UIN)</strong> from the RBI prior to outward remittance is a non-negotiable statutory prerequisite.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Globe2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Global Expansion Gateway</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Incorporate 100% owned subsidiaries in the US, UK, UAE, Singapore, or Europe under the streamlined 400% net worth automatic route.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Landmark className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">RBI UIN Protection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official UIN allotment safeguards all future wire transfers, overseas bank borrowings, and dividend repatriations back to India.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Statutory Immunity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proactive reporting insulates directors and partners from FEMA Section 13 fines (up to 3x investment) and ED scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Key Features of the RBI Overseas Investment (OI) Framework
        </h2>
        <p>
          The updated Overseas Investment Rules, 2022 modernised outbound foreign investment reporting with digital efficiency:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Single-Window Reporting</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All transactions—equity subscription, loan disbursement, corporate guarantee, and share swaps—are filed electronically via AD Banks on the unified RBI OI portal.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Real-Time Limit Monitoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The portal tracks the cumulative financial commitment against the entity&apos;s 400% net worth cap, preventing inadvertent statutory breaches.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Annual Performance Tracking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mandatory Annual Performance Report (APR) submissions by December 31 maintain transparent oversight of overseas business health.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Late Submission Fee (LSF) Window</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Procedural delays can be self-regularized through nominal LSF payments without undergoing lengthy compounding proceedings.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Clear ODI vs OPI Demarcation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Definitive separation between active control/unlisted investment (ODI) and passive portfolio investment in listed foreign securities (OPI).
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Simplified Disinvestment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Streamlined exit procedures allow full disinvestment without prior RBI approval under the automatic route, requiring reporting in Form ODI Part III.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Strategic Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Strategic Benefits of ODI for Indian Businesses &amp; Startups
        </h2>
        <p>
          Expanding abroad through lawful ODI channels unlocks substantial strategic, operational, and financial advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Global Market Access</h4>
            <p className="text-xs text-slate-600">Establish local presence in high-margin economies to capture enterprise clientele directly.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Tech &amp; IP Acquisition</h4>
            <p className="text-xs text-slate-600">Acquire proprietary technology, patents, and global engineering talent through overseas acquisitions.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">DTAA Tax Efficiency</h4>
            <p className="text-xs text-slate-600">Leverage bilateral tax treaties between India and the host country to prevent double taxation on dividends.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Supply Chain Resilience</h4>
            <p className="text-xs text-slate-600">Set up overseas manufacturing, warehousing, and distribution hubs to insulate business from geopolitical risks.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Eligibility Criteria: Who Can &amp; Cannot Invest in ODI
        </h2>
        <p>
          The Overseas Investment Rules classify entities into eligible and restricted categories based on legal constitution and regulatory standing:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Eligible Entities for ODI
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Indian Companies:</strong> Private Limited, Public Limited, and OPC registered under Companies Act.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Limited Liability Partnerships (LLPs):</strong> Eligible under standard automatic route provisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Registered Partnership Firms:</strong> Can invest in overseas JVs and WOS up to 400% net worth.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Resident Individuals:</strong> Can invest up to USD 2,50,000/year under the LRS route in operating entities.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>DPIIT-Recognized Startups:</strong> Special provisions for overseas tech expansion and sweat equity.</span>
              </li>
            </ul>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Ineligible &amp; Restricted Entities
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Entities on RBI Wilful Defaulter list, CIBIL caution list, or under CBI / ED prosecution.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Unapproved Non-Banking Financial Companies (NBFCs) investing without sectoral RBI clearance.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Entities investing in prohibited activities (real estate land trading, gambling, lottery).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Investments establishing more than two layers of subsidiaries (violating layering restriction).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Entities whose audited net worth is negative or insufficient to support the proposed commitment.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Types of ODI */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Types of Overseas Direct Investment under FEMA
        </h2>
        <p>
          FEMA categorises outbound investments according to corporate structure and financial commitment mode:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {ODI_TYPES_GRID.map((t, idx) => (
            <div
              key={idx}
              className={`group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs ${t.hoverColor} hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 group-hover:scale-110 transition-transform">
                    {t.icon}
                  </div>
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${t.tagColor}`}>
                    {t.ownership}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{t.type}</h3>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Requirement:</span>
                <span className="font-medium text-slate-800">{t.filing}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Automatic Route vs Approval Route */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. ODI Investment Routes: Automatic Route vs RBI Approval Route
        </h2>
        <p>
          Selecting the appropriate route depends on the investment quantum relative to net worth and the jurisdiction involved:
        </p>

        <div className="space-y-3 pt-2">
          {ROUTE_COMPARISON.map((r, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{r.route}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${r.badgeColor}`}>
                  FEMA Benchmark
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div>
                  <span className="font-semibold text-slate-800 block mb-0.5">Applicable Entities:</span>
                  <span>{r.applicability}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block mb-0.5">Financial Ceiling:</span>
                  <span>{r.financialCap}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block mb-0.5">Approval Procedure:</span>
                  <span>{r.approvalMechanism}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Documents Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Comprehensive Document Checklist for Form ODI Filing
        </h2>
        <p>
          Careful document preparation prevents queries and rejection by AD Category-I Bank Forex desks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {DOCUMENTS_CHECKLIST.map((docGroup, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-600" />
                {docGroup.category}
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {docGroup.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Step-by-Step Guide */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Step-by-Step ODI Filing Procedure in India
        </h2>
        <p>
          Follow this 10-step sequence from investment structuring to post-investment statutory reporting:
        </p>

        <div className="space-y-3 pt-2">
          {ODI_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-4"
            >
              <span className="text-xl sm:text-2xl font-bold text-emerald-600/40 group-hover:text-emerald-600 transition-colors font-mono shrink-0">
                {s.step}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">{s.title}</h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    {s.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Post-Investment Compliance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Mandatory Post-Investment Compliances for Overseas Entities
        </h2>
        <p>
          Acquiring a UIN and remitting funds is only the initial stage. Ongoing statutory governance is vital to maintain regulatory standing:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {POST_INVESTMENT_RULES.map((r, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1.5">{r.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10: Penalties & Late Submission Fees */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Penalties for Non-Compliance, Delayed APR &amp; Late Submission Fees
        </h2>
        <p>
          FEMA prescribes strict sanctions for reporting omissions, procedural delays, and unauthorized overseas remittances:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs text-slate-700 min-w-[600px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="p-3.5">Violation Type</th>
                <th className="p-3.5">Statutory Deadline</th>
                <th className="p-3.5">Regularization Route</th>
                <th className="p-3.5">Statutory Penalty under FEMA 13</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Delayed APR Submission</td>
                <td className="p-3.5">December 31 annually</td>
                <td className="p-3.5">Late Submission Fee (LSF) Matrix</td>
                <td className="p-3.5 text-rose-700 font-medium">Freezing of foreign remittances</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Delayed Share Certificate Submission</td>
                <td className="p-3.5">Within 6 months of remittance</td>
                <td className="p-3.5">LSF + Form ODI Part II filing</td>
                <td className="p-3.5 text-rose-700 font-medium">Deemed unauthorized capital export</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Breach of 400% Net Worth Cap</td>
                <td className="p-3.5">Prior to remittance</td>
                <td className="p-3.5">Formal Compounding Petition (RBI)</td>
                <td className="p-3.5 text-rose-700 font-medium">Up to 3x contravention amount</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Failure to Repatriate Earnings</td>
                <td className="p-3.5">Within 60 days of declaration</td>
                <td className="p-3.5">Immediate inward wire + Compounding</td>
                <td className="p-3.5 text-rose-700 font-medium">ED investigation under Section 13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: Inbound FDI vs Outbound ODI Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Cross-Border Comparison: Inbound FDI vs Outbound ODI
        </h2>
        <p>
          Distinguishing between incoming and outgoing capital reporting is fundamental for multi-jurisdictional businesses:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Inbound FDI (FC-GPR / FC-TRS)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Foreign capital flowing <em>into</em> an Indian enterprise from foreign investors. Reported via the <strong>FIRMS portal</strong> using Form FC-GPR (allotment) or Form FC-TRS (transfer).
            </p>
            <Link
              href="/fc-trs-filing"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              <span>Explore FDI &amp; FC-TRS Filing Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-600" />
              Outbound ODI (Form ODI Parts I, II, III &amp; APR)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Indian capital flowing <em>out</em> of India into overseas subsidiaries or joint ventures. Reported through AD Banks on the <strong>RBI OI portal</strong> with mandatory UIN allotment.
            </p>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
              Active Page Compliance Guide
            </span>
          </div>
        </div>
      </section>

      {/* Section 12: Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. Why Choose Merrafilings for Your Overseas Direct Investment
        </h2>
        <p>
          Merrafilings provides end-to-end global compliance support, partnering with senior FEMA attorneys, cross-border corporate secretarial specialists, and Tier-1 AD Banks:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <CheckCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">Rapid UIN Allotment</h4>
            <p className="text-[11px] text-slate-600">Form ODI Part I verified and submitted to AD Bank within 72 hours.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Scale className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">Auditor Net Worth Cert</h4>
            <p className="text-[11px] text-slate-600">In-house CA certification for 400% financial commitment verification.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">Automated APR Alerts</h4>
            <p className="text-[11px] text-slate-600">Never miss the December 31 deadline with our proactive tracking calendar.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Landmark className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">AD Bank Direct Liaison</h4>
            <p className="text-[11px] text-slate-600">Forex desk relationships across HDFC, ICICI, SBI, Axis, and HSBC.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function OdiFilingPage() {
  return (
    <ServicePageTemplate
      badgeText="FEMA Overseas Investment Rules, 2022 – RBI OI Portal Compliant"
      heroTitle={
        <>
          <span>ODI Filing Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Overseas Direct Investment
          </span>{" "}
          <span>under FEMA in India</span>
        </>
      }
      heroSubtitle="End-to-end regulatory compliance for Indian companies, LLPs, partnership firms, and resident individuals investing abroad. Form ODI submission (Parts I, II & III), Unique Identification Number (UIN) acquisition, Annual Performance Report (APR) filings, and AD Bank Category-I liaison under the FEMA Overseas Investment Rules & Regulations, 2022."
      formTitle="Overseas Direct Investment (ODI) Desk"
      formSubtitle="Connect with our FEMA cross-border investment specialists for Form ODI preparation, net worth valuation, and seamless UIN allotment."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">ODI filing fees.</span>
        </>
      }
      pricingSubtitle="Select your package for individual LRS overseas investment, corporate WOS / JV setup suite, or annual APR post-investment retainer."
      breadcrumbCurrent="ODI Filing Online"
      guideTitle="Comprehensive Guide to Overseas Direct Investment (ODI) Filing in India under FEMA & RBI Guidelines"
      guideContent={<OdiGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about Overseas Direct Investment (ODI) limits, Form ODI online submission, Unique Identification Number (UIN) allotment, and Annual Performance Report (APR) compliance."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
