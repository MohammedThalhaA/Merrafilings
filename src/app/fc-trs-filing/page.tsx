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
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "Eligibility & Sectoral Review under DPIIT FDI Policy" },
  { icon: <Scale className="w-4 h-4 text-emerald-600" />, text: "Valuation & Pricing Verification (DCF / Fair Market Value)" },
  { icon: <FileSignature className="w-4 h-4 text-emerald-600" />, text: "Internal Approvals, Board Resolutions & Shareholder Filings" },
  { icon: <Landmark className="w-4 h-4 text-emerald-600" />, text: "Inward Remittance & AD Category-I Bank FIRC / KYC Coordination" },
  { icon: <Globe2 className="w-4 h-4 text-emerald-600" />, text: "RBI FIRMS Portal Reporting: Form FC-GPR & Form FC-TRS" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "FC-TRS Transfer of Shares Filing",
    shortDesc: "Statutory reporting on RBI FIRMS portal for transfer of shares or convertible instruments between resident and non-resident.",
    expandedDesc: "Under Regulation 10(4) of FEMA 20(R) and FEMA Non-Debt Instruments Rules, transfer of equity shares, compulsorily convertible preference shares (CCPS), or debentures between a resident Indian and a non-resident must be reported in Form FC-TRS within 60 days of receipt/remittance of consideration. Our FEMA legal desk vets the Share Purchase Agreement (SPA), verifies pricing guidelines against CA valuation, coordinates KYC with the Authorized Dealer (AD) Bank, submits Form FC-TRS on the FIRMS portal, and procures the official RBI acknowledgment.",
    price: "₹8,999",
    priceSub: "Per Share Transfer Transaction | Resident ↔ Non-Resident",
    badge: "Share Transfer Compliance",
    features: [
      "Vetting of Share Purchase Agreement (SPA) & Form SH-4 Stamping",
      "Valuation Certificate review as per RBI pricing guidelines (DCF method)",
      "Foreign Inward Remittance Certificate (FIRC) & KYC from AD Bank",
      "Entity Master & Business User (BU) verification on FIRMS portal",
      "Drafting & submission of Form FC-TRS on RBI Single Master Form (SMF)",
      "Practicing CA/CS certification of share transfer particulars",
      "Authorised Dealer (AD Category-I) Bank query liaison",
      "Generation of official RBI acknowledgment & UIN tracking",
      "Advisory on TDS withholding under Section 195 on capital gains",
    ],
  },
  {
    name: "FC-GPR Inward Allotment Suite",
    popular: true,
    badge: "Most Popular / Fresh Inward FDI",
    shortDesc: "End-to-end RBI reporting for fresh foreign equity allotment, CCPS issuance, or convertible notes.",
    expandedDesc: "Designed for Indian startups and corporations raising foreign capital under the automatic or approval route. Under FEMA regulations, once foreign funds arrive via SWIFT, the company must allot shares within 60 days of remittance receipt and file Form FC-GPR within 30 days of share allotment on the FIRMS portal. We handle the entire cycle: FIRC retrieval, valuation certification, board resolutions, CS compliance certificate, and SMF filing.",
    price: "₹14,999",
    priceSub: "Per Inward Remittance & Allotment Tranche",
    features: [
      "FIRMS Entity User (EU) & Business User (BU) account setup",
      "Foreign Inward Remittance Certificate (FIRC) & Bank KYC reconciliation",
      "Share Allotment Board Resolution & PAS-3 drafting for MCA sync",
      "CA Valuation Certificate review (Discounted Cash Flow methodology)",
      "CS Statutory Compliance Certificate adhering to DPIIT policy",
      "Preparation & e-filing of Form FC-GPR on RBI Single Master Form",
      "Liaison with Authorised Dealer (AD Bank) Foreign Exchange division",
      "End-to-end resolution of bank and RBI scrutiny queries",
      "Handover of official RBI Registration / Approval letter",
    ],
  },
  {
    name: "Complete Cross-Border FDI Retainer Suite",
    shortDesc: "Annual FEMA governance covering multiple remittances, share transfers, annual FLA return filing, and RBI compounding advisory.",
    expandedDesc: "Tailored for venture-backed startups, subsidiaries of overseas corporations, and multinational joint ventures. Covers ongoing FIRMS portal filings (up to 2 FC-GPR or FC-TRS filings), mandatory annual Foreign Liabilities and Assets (FLA) Return submission by July 15 on the FLAIR portal, downstream investment (Form DI) disclosures, secretarial record maintenance, and expert representation in compounding proceedings for delayed historical filings.",
    price: "₹29,999",
    priceSub: "Annual Retainer / Up to 2 Filings + Annual FLA Return",
    badge: "Complete Enterprise Retainer",
    features: [
      "Up to 2 FC-GPR or FC-TRS filings included per financial year",
      "Annual Foreign Liabilities and Assets (FLA) Return on FLAIR portal (Due July 15)",
      "Downstream Investment Reporting (Form DI) advisory",
      "Maintenance of statutory Foreign Investment Registers under Companies Act",
      "Review of overseas loan agreements (External Commercial Borrowings - ECB preview)",
      "Compounding petition drafting for past procedural delays under FEMA Section 15",
      "Press Note 3 compliance review for foreign investors",
      "Priority WhatsApp & direct phone access to Senior FEMA Attorney & Partner CA",
    ],
  },
];

const FDI_FORMS_GRID = [
  {
    form: "Form FC-GPR",
    fullName: "Foreign Currency – Gross Provisional Return",
    timeline: "Within 30 Days of Share Allotment",
    desc: "Mandatory reporting when an Indian company allots equity shares, compulsorily convertible preference shares (CCPS), or debentures to an overseas investor post-receipt of inward remittance.",
    tagColor: "border-blue-200 bg-blue-50/70 text-blue-800",
    hoverColor: "hover:border-blue-500 hover:shadow-blue-500/10 hover:bg-blue-50/15",
    icon: <Building2 className="w-5 h-5 text-blue-600" />,
  },
  {
    form: "Form FC-TRS",
    fullName: "Foreign Currency – Transfer of Shares",
    timeline: "Within 60 Days of Transfer / Remittance",
    desc: "Filed when equity shares or convertible instruments of an Indian company are transferred between a person resident in India and a person resident outside India, or between two non-residents.",
    tagColor: "border-emerald-200 bg-emerald-50/70 text-emerald-800",
    hoverColor: "hover:border-emerald-500 hover:shadow-emerald-500/10 hover:bg-emerald-50/15",
    icon: <Share2 className="w-5 h-5 text-emerald-600" />,
  },
  {
    form: "Form LLP-I & LLP-II",
    fullName: "LLP Foreign Capital Inflow & Divestment",
    timeline: "Within 30 / 60 Days of Capital Contribution",
    desc: "Form LLP-I reports receipt of foreign capital contribution in an Indian Limited Liability Partnership; Form LLP-II reports divestment or transfer of capital contribution between resident and non-resident.",
    tagColor: "border-purple-200 bg-purple-50/70 text-purple-800",
    hoverColor: "hover:border-purple-500 hover:shadow-purple-500/10 hover:bg-purple-50/15",
    icon: <Layers className="w-5 h-5 text-purple-600" />,
  },
  {
    form: "Form CN",
    fullName: "Convertible Notes Reporting",
    timeline: "Within 30 Days of Issue / Transfer",
    desc: "Applicable to DPIIT-recognized startups issuing convertible notes to foreign investors (minimum ₹25 Lakhs per tranche) or transferring convertible notes between resident and non-resident.",
    tagColor: "border-amber-200 bg-amber-50/70 text-amber-800",
    hoverColor: "hover:border-amber-500 hover:shadow-amber-500/10 hover:bg-amber-50/15",
    icon: <Coins className="w-5 h-5 text-amber-600" />,
  },
  {
    form: "Form ESOP",
    fullName: "Employee Stock Option Plan Reporting",
    timeline: "Within 30 Days of Grant / Allotment",
    desc: "Reports issuance of employee stock options, sweat equity shares, or share qualification shares to non-resident employees or directors of an Indian company or its foreign subsidiaries.",
    tagColor: "border-teal-200 bg-teal-50/70 text-teal-800",
    hoverColor: "hover:border-teal-500 hover:shadow-teal-500/10 hover:bg-teal-50/15",
    icon: <Award className="w-5 h-5 text-teal-600" />,
  },
  {
    form: "Form DI",
    fullName: "Downstream Investment Reporting",
    timeline: "Within 30 Days of Allotment",
    desc: "Reports indirect foreign investment when an Indian company that is foreign-owned or foreign-controlled (FOCC) makes an equity or convertible investment into another Indian operating company.",
    tagColor: "border-rose-200 bg-rose-50/70 text-rose-800",
    hoverColor: "hover:border-rose-500 hover:shadow-rose-500/10 hover:bg-rose-50/15",
    icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
  },
];

const ROUTE_COMPARISON = [
  {
    route: "Automatic Route (Up to 100% FDI)",
    sectors: "IT, Software, Manufacturing, E-commerce Marketplace, Healthcare, Renewable Energy, Automobile, Consulting",
    approvals: "Zero prior government or RBI approval required. Foreign funds remitted directly via AD Bank.",
    reporting: "Inward remittance reported via FIRMS portal. Form FC-GPR filed within 30 days of share allotment.",
    badgeColor: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  {
    route: "Government Approval Route",
    sectors: "Defence, Print Media, Satellite Operations, Mining, Telecom beyond 49%, Multi-brand Retail, Border Nations",
    approvals: "Mandatory prior approval from relevant Administrative Ministry / Department through National Single Window System (NSWS).",
    reporting: "Approval letter submitted with FIRMS filing. Form FC-GPR / FC-TRS filed post-approval within statutory deadlines.",
    badgeColor: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    route: "Press Note 3 (2020) Mandate",
    sectors: "Any sector where foreign investor or beneficial owner is situated in a country sharing a land border with India",
    approvals: "Mandatory prior Central Government approval regardless of sectoral percentage or automatic eligibility.",
    reporting: "Security clearance from Ministry of Home Affairs (MHA) and approval order required before funds remittance.",
    badgeColor: "border-rose-200 bg-rose-50 text-rose-800",
  },
];

const FIRMS_STEPS = [
  {
    step: "01",
    title: "Entity Master Registration (EMR)",
    desc: "Register the Indian company on the RBI FIRMS portal. Provide Corporate Identification Number (CIN), PAN, registered office address, authorized signatory KYC, and corporate authorization letter.",
    badge: "Portal Setup",
  },
  {
    step: "02",
    title: "Business User (BU) Account Setup",
    desc: "Create a Business User (BU) profile on FIRMS mapped to the specific Authorized Dealer (AD Category-I) Bank branch where the company maintains its foreign exchange capital account.",
    badge: "Bank Mapping",
  },
  {
    step: "03",
    title: "FIRC & Inward Remittance Reconciliation",
    desc: "Collect the Foreign Inward Remittance Certificate (FIRC) and Foreign Bank KYC from the AD Bank. Confirm SWIFT MT103 narration, purpose code (P0082/P0083), and foreign currency conversion rate.",
    badge: "Remittance Audit",
  },
  {
    step: "04",
    title: "Valuation Certificate Procurement",
    desc: "Obtain a formal share valuation report from a SEBI-registered Merchant Banker or practicing Chartered Accountant using internationally accepted methodologies (Discounted Cash Flow - DCF).",
    badge: "Pricing Guideline",
  },
  {
    step: "05",
    title: "Single Master Form (SMF) Submission",
    desc: "Log in to the FIRMS portal as Business User. Select Form FC-GPR (for allotment) or Form FC-TRS (for transfer). Populate investor particulars, share allotment details, and attach statutory certificates.",
    badge: "E-Filing",
  },
  {
    step: "06",
    title: "AD Bank Scrutiny & Forwarding to RBI",
    desc: "The designated AD Bank verifies all uploaded documents against SWIFT records, conducts KYC checks, confirms sectoral cap adherence, and forwards the dossier to the Reserve Bank of India.",
    badge: "AD Scrutiny",
  },
  {
    step: "07",
    title: "UIN Issuance & Regulatory Handover",
    desc: "Upon successful verification, the RBI issues an official Unique Identification Number (UIN) or approval letter. Corporate share registers and MCA return of allotment (PAS-3) are synchronized.",
    badge: "Compliance Certified",
  },
];

const DOCUMENTS_CHECKLIST = [
  {
    category: "Banking & Remittance Proofs",
    items: [
      "Foreign Inward Remittance Certificate (FIRC) issued by AD Bank",
      "Debit Certificate / Inward SWIFT MT103 advice confirming funds transfer",
      "Overseas Bank KYC Report of the non-resident investor",
      "Statement of bank account evidencing receipt of foreign currency",
    ],
  },
  {
    category: "Corporate Secretarial Documents",
    items: [
      "Certified True Copy of Memorandum (MOA) and Articles of Association (AOA)",
      "Board Resolution approving the allotment or transfer of shares",
      "Shareholder Resolution (EGM / AGM) where authorized share capital is increased",
      "List of Allottees with shareholding pattern before and after foreign investment",
    ],
  },
  {
    category: "Valuation & Financial Certificates",
    items: [
      "Valuation Certificate from SEBI-registered Merchant Banker or Chartered Accountant",
      "Computation sheet proving compliance with DCF / internationally accepted pricing guidelines",
      "Audited Financial Statements of the Indian company for the latest financial year",
      "Auditor Net Worth Certificate (where applicable for sectoral thresholds)",
    ],
  },
  {
    category: "Statutory Professional Certificates",
    items: [
      "Company Secretary (CS) Certificate confirming adherence to DPIIT FDI Policy",
      "Declaration confirming that investment does not breach FDI sectoral caps",
      "Press Note 3 Declaration certifying beneficial ownership status of investor",
      "Form FC-TRS consent letter signed by transferor and transferee (for share transfers)",
    ],
  },
];

const MISTAKES_TO_AVOID = [
  {
    title: "Missing the 30-Day or 60-Day Deadlines",
    desc: "Failing to allot shares within 60 days of inward remittance or failing to submit Form FC-GPR within 30 days of allotment triggers severe Late Submission Fees (LSF) and compounding liabilities.",
    color: "red",
  },
  {
    title: "Share Valuation Below Fair Market Value (FMV)",
    desc: "Under RBI pricing guidelines, shares issued to non-residents cannot be priced lower than fair value computed using DCF methodology. Issuing shares at a discount violates FEMA Section 6.",
    color: "amber",
  },
  {
    title: "Incomplete Non-Resident Bank KYC",
    desc: "AD Banks strictly reject FIRMS filings if the overseas bank does not supply standard KYC verifying the non-resident's beneficial ownership, source of wealth, and AML compliance.",
    color: "blue",
  },
  {
    title: "Confusing Form FC-GPR with Form FC-TRS",
    desc: "FC-GPR applies exclusively to fresh issuance/allotment of equity by the company. Secondary sale or purchase between resident and non-resident must be filed in Form FC-TRS.",
    color: "purple",
  },
  {
    title: "Ignoring Press Note 3 Beneficial Ownership Rules",
    desc: "If any investor or beneficial owner holding even minor shares is citizen/resident of a land-bordering nation (e.g. China, Hong Kong), failure to take prior Central Government clearance invalidates the transaction.",
    color: "rose",
  },
  {
    title: "Neglecting Annual FLA Return on FLAIR Portal",
    desc: "Every Indian company with historical foreign direct investment must submit the annual Foreign Liabilities and Assets (FLA) Return by July 15. Missing it blocks future FIRMS submissions.",
    color: "teal",
  },
];

const FAQ_COL_1: FAQItem[] = [
  {
    q: "What is FDI filing with RBI in India?",
    a: "FDI filing with RBI refers to the mandatory reporting of all foreign direct investment transactions by Indian companies to the Reserve Bank of India within statutory timelines under the Foreign Exchange Management Act (FEMA). Every inward remittance from a foreign investor for share allotment or share transfer must be filed electronically on the RBI FIRMS portal using the Single Master Form (SMF).",
  },
  {
    q: "What is the difference between Form FC-GPR and Form FC-TRS?",
    a: "Form FC-GPR (Foreign Currency – Gross Provisional Return) is filed by an Indian company when it issues and allots fresh equity shares, compulsorily convertible preference shares (CCPS), or debentures to an overseas investor post-receipt of inward capital. Form FC-TRS (Foreign Currency – Transfer of Shares) is filed when existing equity instruments are transferred between a resident Indian and a non-resident, or between two non-residents.",
  },
  {
    q: "What is the due date to file Form FC-GPR?",
    a: "Form FC-GPR must be filed with the Reserve Bank of India on the FIRMS portal within 30 days from the date of allotment of shares. Additionally, the Indian company must allot shares within 60 days from the date of receiving the inward remittance from abroad.",
  },
  {
    q: "What is the due date to file Form FC-TRS?",
    a: "Form FC-TRS must be submitted on the RBI FIRMS portal within 60 days from the date of transfer of capital instruments or receipt/remittance of the transfer consideration, whichever is earlier. The responsibility of filing rests with the resident transferor/transferee, or the non-resident through their authorized representative.",
  },
  {
    q: "Who is responsible for filing Form FC-TRS — the buyer or the seller?",
    a: "Under RBI regulations, the onus of filing Form FC-TRS rests on the person resident in India (whether acting as transferor or transferee). In transactions between two non-residents, the non-resident acquiring the shares is responsible for submitting Form FC-TRS through an Authorized Dealer Bank.",
  },
  {
    q: "Is there any government fee for FDI filing on the RBI FIRMS portal?",
    a: "No, the Reserve Bank of India does not levy any government filing fee for submitting Form FC-GPR or Form FC-TRS on the FIRMS portal. Costs incurred are strictly for professional services, valuation certificates by SEBI Merchant Bankers / Chartered Accountants, and stamp duty on share certificates.",
  },
  {
    q: "What is a Foreign Inward Remittance Certificate (FIRC)?",
    a: "A Foreign Inward Remittance Certificate (FIRC) is a statutory document issued by an Authorized Dealer (AD Category-I) Bank in India acting as proof that funds have been received in foreign currency from abroad. It contains the SWIFT reference, remitter details, purpose code, and exchange rate applied.",
  },
  {
    q: "What valuation methodology is mandatory for unlisted Indian companies receiving FDI?",
    a: "Under Rule 21 of FEMA Non-Debt Instruments Rules, the valuation of equity shares of an unlisted Indian company must be conducted in accordance with any internationally accepted pricing methodology on an arm's length basis (commonly the Discounted Cash Flow - DCF method) by a SEBI-registered Merchant Banker or a practicing Chartered Accountant. The issue or transfer price cannot be less than the fair value so determined.",
  },
  {
    q: "What happens if an Indian company fails to allot shares within 60 days of receiving inward remittance?",
    a: "If shares are not allotted within 60 days from the date of receipt of the foreign funds, the company must refund the entire inward remittance amount to the non-resident investor within 15 days from the expiry of the 60-day period. Failure to do so constitutes a direct contravention of FEMA and attracts compounding proceedings.",
  },
];

const FAQ_COL_2: FAQItem[] = [
  {
    q: "What is the penalty for non-reporting or delayed FDI filing with RBI?",
    a: "Non-reporting or delayed reporting under FEMA attracts Late Submission Fees (LSF) calculated based on the investment quantum and duration of delay. Under Section 13 of FEMA, non-compliance can result in penalties up to three times the sum involved in the contravention, or ₹2,00,000 where the amount is unquantifiable, plus ₹5,000 per day for continuing default.",
  },
  {
    q: "What is the FIRMS portal and Single Master Form (SMF)?",
    a: "FIRMS (Foreign Investment Reporting and Management System) is an integrated digital platform launched by the RBI to facilitate paperless reporting of foreign investment. The Single Master Form (SMF) on FIRMS integrates 9 different statutory forms (including FC-GPR, FC-TRS, LLP-I, LLP-II, CN, ESOP, and DI) into a unified online interface.",
  },
  {
    q: "Can Foreign Direct Investment be repatriated from India?",
    a: "Yes. Foreign investment is fully repatriable (net of applicable taxes like capital gains under Section 195) unless the foreign investment was made under specific non-repatriable schemes specifically reserved for NRIs on a non-repatriation basis under Schedule IV of FEMA NDI Rules.",
  },
  {
    q: "What are the prohibited sectors for FDI in India?",
    a: "Under DPIIT FDI Policy and FEMA regulations, FDI is strictly prohibited in: (1) Lottery business including government/private lotteries and online lotteries, (2) Gambling and betting including casinos, (3) Chit funds and Nidhi companies, (4) Trading in Transferable Development Rights (TDRs), (5) Real estate business or construction of farm houses, (6) Manufacturing of cigars, cheroots, cigarillos, and cigarettes, and (7) Activities/sectors not open to private sector investment such as atomic energy and railway operations.",
  },
  {
    q: "What is Press Note 3 (2020) and how does it affect foreign investments?",
    a: "Under Press Note 3 (2020 Series), any foreign investment from an entity located in a country that shares a land border with India (China, Hong Kong, Pakistan, Bangladesh, Myanmar, Nepal, Bhutan), or where the ultimate beneficial owner of the investment is situated in or is a citizen of any such country, requires mandatory prior approval from the Government of India, even if the sector is otherwise under the 100% automatic route.",
  },
  {
    q: "What is the Annual FLA Return and who must file it?",
    a: "The Foreign Liabilities and Assets (FLA) Return is an annual compliance mandatory for all Indian companies and LLPs that have received Foreign Direct Investment (FDI) or made Overseas Direct Investment (ODI). It must be filed on the RBI FLAIR portal by July 15 every year based on audited financial statements.",
  },
  {
    q: "What is the procedure for correcting FDI data previously submitted to RBI?",
    a: "If there is any clerical or factual error in an approved Form FC-GPR or FC-TRS, a request for correction along with supporting documents (board resolution, revised valuation certificate, AD Bank verification letter) must be submitted through the AD Bank to the RBI within 180 days from the original submission date.",
  },
  {
    q: "Can a Limited Liability Partnership (LLP) in India receive FDI?",
    a: "Yes. Foreign Direct Investment (FDI) is permitted in LLPs under the automatic route up to 100% in sectors where 100% FDI is allowed under company regulations without performance-linked conditionalities. Foreign capital contributions are reported using Form LLP-I on the FIRMS portal within 30 days.",
  },
  {
    q: "What is the compounding of contraventions under FEMA?",
    a: "Compounding is a voluntary process under Section 15 of FEMA where an applicant admits to a procedural non-compliance (such as delayed FC-GPR/FC-TRS filing or delayed share allotment) and applies to the RBI to regularize the default by paying a compounded sum, thereby avoiding formal prosecution and enforcement actions.",
  },
];

const RELATED_GUIDES = [
  { title: "FDI vs ODI Filing: Inbound vs Outbound FEMA Compliance", href: "/odi-filing" },
  { title: "Form 15CA & 15CB Filing: Foreign Remittance Tax Clearance", href: "/15ca-15cb-filing" },
  { title: "Indian Subsidiary Registration: Complete FDI Automatic Route Guide", href: "/indian-subsidiary" },
  { title: "TDS Return Filing Online: Quarterly Compliance in India", href: "/tds-return-filing" },
  { title: "Section 195 TDS on Payments to Non-Residents", href: "/tds-return-filing/section-195--payment-to-non-resident" },
];

const RELATED_SERVICES_TAGS = [
  "FC-TRS Filing Online",
  "FC-GPR Reporting RBI",
  "FIRMS Portal Registration",
  "FEMA Compliance Advisory",
  "DCF Valuation Certificate",
  "FIRC & Foreign Bank KYC",
  "Annual FLA Return (FLAIR)",
  "Press Note 3 Screening",
  "ODI Filing under FEMA",
  "Foreign Remittance 15CA 15CB",
  "Foreign Subsidiary Formation",
  "Compounding under FEMA",
];

const POPULAR_SEARCHES_TAGS = [
  "fc trs filing timeline",
  "fc gpr filing rbi guidelines",
  "firms portal single master form",
  "fdi automatic route india",
  "share transfer resident to non resident fema",
  "late submission fee lsf rbi",
  "valuation report for fdi ca sebi",
  "press note 3 approval process",
  "annual fla return due date",
  "fema 20r transfer of shares",
  "fdi in private limited company",
  "rbi compounding petition drafting",
];

function FcTrsGuideContent() {
  return (
    <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding FDI Filing with RBI in India Online (FC-GPR &amp; FC-TRS)
        </h2>
        <p>
          Foreign Direct Investment (FDI) represents cross-border capital flow wherein an overseas entity or foreign national acquires equity participation and lasting interest in an Indian business enterprise. All such transactions are strictly governed by the <strong>Reserve Bank of India (RBI)</strong> under the <strong>Foreign Exchange Management Act, 1999 (FEMA)</strong>, the <strong>FEMA (Non-Debt Instruments) Rules, 2019</strong>, and the consolidated FDI policy formulated by the <strong>Department for Promotion of Industry and Internal Trade (DPIIT)</strong>.
        </p>
        <p>
          Timely and accurate reporting of inward capital remittances and share transactions is a mandatory statutory obligation. To digitize and streamline this regulatory compliance, the RBI instituted the <strong>FIRMS (Foreign Investment Reporting and Management System) portal</strong>. FIRMS acts as the single digital gateway hosting the <strong>Single Master Form (SMF)</strong>, consolidating multiple statutory forms including <strong>Form FC-GPR</strong> (for fresh allotment of equity shares) and <strong>Form FC-TRS</strong> (for transfer of shares between resident and non-resident investors).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">FEMA Statutory Shield</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Legal protection against RBI notices, Late Submission Fees (LSF), and enforcement actions under FEMA Section 13.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Institutional Investor Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clean compliance track record accelerates subsequent institutional funding rounds, secondary exits, and bank credit.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Globe2 className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Repatriation Freedom</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guarantees unconditional repatriation of dividends, capital gains, and liquidation proceeds through AD Category-I banks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Key Statutory Forms Grid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory FDI Forms on RBI FIRMS Single Master Form (SMF)
        </h2>
        <p>
          Under the consolidated Single Master Form framework on the FIRMS portal, Indian companies and LLPs must report specific cross-border capital events using designated statutory forms:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {FDI_FORMS_GRID.map((item, idx) => (
            <div
              key={idx}
              className={`group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs ${item.hoverColor} hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>
                    {item.form}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.fullName}</h3>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Timeline:</span>
                <span className="font-medium text-slate-800">{item.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Automatic vs Government Route Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. FDI Investment Routes: Automatic Route vs Government Approval Route
        </h2>
        <p>
          Foreign investment into India enters through two primary legal pathways, each dictating distinct compliance workflows before and after funds are received:
        </p>

        <div className="space-y-3 pt-2">
          {ROUTE_COMPARISON.map((route, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{route.route}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${route.badgeColor}`}>
                  FEMA Policy Benchmark
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div>
                  <span className="font-semibold text-slate-800 block mb-0.5">Sectors Covered:</span>
                  <span>{route.sectors}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block mb-0.5">Approval Prerequisite:</span>
                  <span>{route.approvals}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block mb-0.5">Reporting Protocol:</span>
                  <span>{route.reporting}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: FIRMS Step-by-Step Reporting Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Step-by-Step FDI Filing Process on the RBI FIRMS Portal
        </h2>
        <p>
          Navigating the FIRMS portal demands synchronized actions between the Indian company, practicing Chartered Accountants / Company Secretaries, and the designated Authorized Dealer Bank. Follow this structured roadmap:
        </p>

        <div className="space-y-3 pt-2">
          {FIRMS_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-4"
            >
              <span className="text-xl sm:text-2xl font-bold text-blue-600/40 group-hover:text-blue-600 transition-colors font-mono shrink-0">
                {s.step}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">{s.title}</h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60">
                    {s.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Documents Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Comprehensive Document Checklist for FC-GPR &amp; FC-TRS Filings
        </h2>
        <p>
          Incomplete or erroneous documentation is the leading cause of FIRMS portal rejections and delay notices from AD Banks. Ensure you compile the following complete records:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {DOCUMENTS_CHECKLIST.map((docGroup, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                {docGroup.category}
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {docGroup.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Valuation & Pricing Guidelines */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. RBI Pricing Guidelines &amp; DCF Valuation Norms
        </h2>
        <p>
          Pricing guidelines under Rule 21 of the <strong>FEMA (Non-Debt Instruments) Rules, 2019</strong> ensure that Indian capital instruments are not transferred or issued to foreign investors at depressed valuations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Unlisted Indian Companies</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              The price of equity shares or convertible instruments issued to a non-resident cannot be less than the fair market value determined in accordance with internationally accepted pricing methodology (predominantly <strong>Discounted Cash Flow - DCF</strong>) on an arm&apos;s length basis by a <strong>SEBI-registered Merchant Banker</strong> or a practicing <strong>Chartered Accountant</strong>.
            </p>
            <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/60 text-xs text-blue-900">
              <strong>Transfer Rule (FC-TRS):</strong> When a resident transfers shares to a non-resident, price cannot be lower than DCF value. When a non-resident transfers to a resident, price cannot exceed DCF value.
            </div>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Listed Indian Companies</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              For listed entities, the issue or transfer price cannot be less than the market price calculated under the preferential allotment pricing formula prescribed under the <strong>SEBI (ICDR) Regulations, 2018</strong>.
            </p>
            <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200/60 text-xs text-purple-900">
              <strong>Rights &amp; Bonus Issues:</strong> The price of shares offered to non-residents on rights basis cannot be less than the price offered to resident shareholders of the company.
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Penalties & Late Submission Fees (LSF) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Statutory Timelines, Late Submission Fees (LSF) &amp; Compounding
        </h2>
        <p>
          Missing reporting deadlines under FEMA triggers severe financial consequences. The RBI provides a regularization mechanism known as <strong>Late Submission Fee (LSF)</strong> under A.P. (DIR Series) Circulars, enabling companies to regularize delays without undergoing cumbersome formal compounding proceedings:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs text-slate-700 min-w-[600px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="p-3.5">Filing Type</th>
                <th className="p-3.5">Statutory Deadline</th>
                <th className="p-3.5">Delayed Reporting Mechanism</th>
                <th className="p-3.5">Statutory Penalty under FEMA 13</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Form FC-GPR</td>
                <td className="p-3.5">Within 30 days of share allotment</td>
                <td className="p-3.5">LSF Matrix based on investment quantum &amp; delay duration</td>
                <td className="p-3.5 text-rose-700 font-medium">Up to 3x contravention amount</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Form FC-TRS</td>
                <td className="p-3.5">Within 60 days of transfer / payment</td>
                <td className="p-3.5">LSF or Compounding under Section 15</td>
                <td className="p-3.5 text-rose-700 font-medium">Up to 3x sum involved or ₹2 Lakhs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Allotment of Shares</td>
                <td className="p-3.5">Within 60 days of remittance receipt</td>
                <td className="p-3.5">Mandatory refund within 15 days if unallotted</td>
                <td className="p-3.5 text-rose-700 font-medium">Deemed unauthorized foreign loan (ECB)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3.5 font-medium text-slate-900">Annual FLA Return</td>
                <td className="p-3.5">By July 15 every year</td>
                <td className="p-3.5">Portal blacklisting &amp; LSF penalty</td>
                <td className="p-3.5 text-rose-700 font-medium">FIRMS portal filing suspension</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Common Mistakes to Avoid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Critical Mistakes to Avoid in FDI &amp; FC-TRS Reporting
        </h2>
        <p>
          Compliance oversights can stall subsequent fundraising, trigger Enforcement Directorate (ED) summons, and obstruct overseas investor exits. Avoid these frequent pitfalls:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {MISTAKES_TO_AVOID.map((m, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:bg-rose-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200/60 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">{m.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: MCA & Income Tax Synchronization */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Linkage with MCA Returns &amp; Section 195 Non-Resident Tax
        </h2>
        <p>
          FDI reporting does not operate in regulatory isolation. Every inward foreign investment triggers complementary filings with the <strong>Ministry of Corporate Affairs (MCA)</strong> and the <strong>Income Tax Department</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              MCA Return of Allotment (Form PAS-3)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              Within 30 days of share allotment, the company must file Form PAS-3 with the Registrar of Companies (ROC). The share price, non-resident allottee names, and valuation details must match the FC-GPR filing exactly to avoid ROC defect notices.
            </p>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
              MCA V3 &amp; RBI FIRMS Cross-Verification
            </span>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-blue-600" />
              Section 195 TDS &amp; Form 15CA / 15CB
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              In Form FC-TRS transactions where a resident buys shares from a non-resident, withholding tax (TDS) under Section 195 on capital gains must be deducted, accompanied by Form 15CA and Form 15CB CA certification before funds can be wired abroad.
            </p>
            <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
              Tax Clearance &amp; AD Bank Remittance Sync
            </span>
          </div>
        </div>
      </section>

      {/* Section 10: Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Why Entrust Your FDI &amp; FC-TRS Reporting to Merrafilings
        </h2>
        <p>
          Merrafilings pairs senior FEMA legal practitioners with registered valuation professionals and seasoned Chartered Accountants to ensure error-free, timely FIRMS submissions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <CheckCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">100% Approval Record</h4>
            <p className="text-[11px] text-slate-600">Zero rejections across 2,500+ FIRMS submissions.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">Fast-Track Filing</h4>
            <p className="text-[11px] text-slate-600">Form drafting &amp; CA certification delivered within 48 hours.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Scale className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">In-House Valuation</h4>
            <p className="text-[11px] text-slate-600">SEBI Merchant Banker &amp; CA DCF valuation certificates.</p>
          </div>
          <div className="group p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Landmark className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="text-xs font-semibold text-slate-900 mb-0.5">AD Bank Liaison</h4>
            <p className="text-[11px] text-slate-600">Direct query resolution with Forex divisions across all Tier-1 banks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FcTrsFilingPage() {
  return (
    <ServicePageTemplate
      badgeText="RBI FEMA 20(R) & FIRMS Portal Compliant – FDI Compliance Desk"
      heroTitle={
        <>
          <span>FDI Filing with RBI – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            FC-TRS &amp; FC-GPR Reporting
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Comprehensive FDI compliance service covering eligibility checks, DCF valuation, documentation, AD Category-I Bank coordination, and RBI filings on the FIRMS portal. Manage equity allotments, share transfers between resident and non-resident investors, and post-remittance compliance while remaining fully compliant with FEMA and DPIIT FDI regulations."
      formTitle="FDI & FC-TRS Compliance Desk"
      formSubtitle="Consult our FEMA legal and CA experts for FIRMS portal registration, valuation certification, and seamless AD bank liaison."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">FDI &amp; FC-TRS filing fees.</span>
        </>
      }
      pricingSubtitle="Select your package for FC-TRS share transfer reporting, FC-GPR fresh inward allotment suite, or complete annual cross-border FDI retainer."
      breadcrumbCurrent="FC-TRS & FDI Filing"
      guideTitle="Comprehensive Guide to FDI Filing with RBI in India Online: FC-GPR & FC-TRS Compliance under FEMA"
      guideContent={<FcTrsGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about RBI FIRMS portal registration, FC-GPR allotment deadlines, FC-TRS share transfer reporting, DCF valuation norms, and Late Submission Fees."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
