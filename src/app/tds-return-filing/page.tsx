"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
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
  CreditCard,
  Hash,
  KeyRound,
  FileSpreadsheet,
  SendHorizontal,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <FileSpreadsheet className="w-4 h-4" />, text: "Quarterly TDS Return Preparation & FVU Validation (Forms 24Q, 26Q, 27Q, 27EQ)" },
  { icon: <Receipt className="w-4 h-4" />, text: "Challan 281 Reconciliation with Deductee PANs on TRACES System" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Zero Default Assurance to Prevent ₹200/Day Fee under Section 234E" },
  { icon: <Award className="w-4 h-4" />, text: "Bulk Generation & Download of Digitally Signed Form 16 & Form 16A" },
  { icon: <Scale className="w-4 h-4" />, text: "Online Correction Statements for PAN, Challan & Deductee Errors" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Quarterly TDS Filing (Single Quarter)",
    shortDesc: "End-to-end data validation, FVU generation, and portal submission for one quarter.",
    expandedDesc: "Designed for small businesses, LLPs, and startups requiring compliance for a specific quarter. Our TDS accountants collect your payment registers, verify deductee PANs against the Income Tax database, match Challan 281 CIN numbers, generate the validated .fvu file using official NSDL RPU utilities, upload the statement to TRACES / Income Tax portal, and generate digitally signed Form 16 / Form 16A certificates.",
    price: "₹3,499",
    priceSub: "Per Quarter / Up to 25 Deductees",
    badge: "Quarterly Compliance",
    features: [
      "Preparation & Filing of Form 24Q (Salary) or Form 26Q (Non-Salary)",
      "Validation of up to 25 Deductee PANs to Eliminate Invalid PAN Defaults",
      "Challan 281 BSR Code, Challan Date & CIN Matching",
      "Generation of Error-Free .fvu File using Latest NSDL RPU Utility",
      "E-Filing on Income Tax Portal via DSC or EVC Authentication",
      "Provisional Receipt (Token Number) Generation for Company Records",
      "TRACES Processing Status Tracking & Justification Report Review",
      "Download & Delivery of Digitally Signed Form 16 / Form 16A Certificates",
    ],
  },
  {
    name: "Annual TDS Retainer (All 4 Quarters)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Complete annual compliance covering Q1, Q2, Q3, and Q4 returns for both salary and vendor payments.",
    expandedDesc: "Our most popular comprehensive corporate package for established businesses, hospitals, schools, and companies. Covers complete quarterly compliance across all four quarters of the financial year for both Form 24Q (employee payroll) and Form 26Q (vendor contracts, rent, professional fees). Includes continuous PAN validation, monthly TDS payment deadline reminders, quarterly Form 16 / 16A issuance, and free correction return filings.",
    price: "₹11,899",
    priceSub: "Annual Retainer / 4 Quarters Complete",
    features: [
      "Filing of all 4 Quarters (Q1, Q2, Q3, Q4) for Form 24Q & Form 26Q",
      "Up to 100 Deductees per Quarter with Bulk Excel Integration",
      "Monthly TDS Deposit Reminders & Challan 281 Generation Desk",
      "Continuous Deductee PAN Health Check on TRACES",
      "Quarterly Generation of Form 16A for All Vendors & Landlords",
      "Annual Form 16 (Part A & Part B) Generation for All Employees",
      "Free TRACES Online Correction Statements (Challan / Deductee)",
      "Dedicated Tax Specialist Support via Direct Phone and WhatsApp",
    ],
  },
  {
    name: "TDS + Corporate Tax Compliance Suite",
    shortDesc: "Annual retainer covering TDS, TCS, foreign remittance sync (Form 27Q), and notice defense.",
    expandedDesc: "Tailored for mid-market corporations, exporters, funded tech companies, and entities with complex cross-border or contractor payments. Covers unlimited quarterly TDS (24Q, 26Q, 27Q) and TCS (27EQ) return filings, Form 15CA/15CB integration, Section 194-IA/194-IB advisory, monthly payroll tax computations, and complete representation for Section 200A intimations and demand notices.",
    price: "₹19,899",
    priceSub: "Annual Retainer / Unlimited Deductees",
    badge: "Complete Enterprise Suite",
    features: [
      "Dedicated Senior Partner Chartered Accountant (CA) Assigned",
      "Complete Filing of Form 24Q, 26Q, 27Q (Foreign), and 27EQ (TCS)",
      "Unlimited Deductee Records across all 4 Quarters",
      "Cross-Border Remittance TDS Sync under Section 195 / Form 15CB",
      "Section 43B(h) MSME & Vendor Contract Withholding Review",
      "Full Resolution of Section 200A TDS Intimations & Outstanding Demands",
      "Form 26AS & AIS Reconciliation for Corporate Annual ITR-6 Filing",
      "Priority Same-Day Turnaround for Urgent Quarterly Submissions",
    ],
  },
];

const TDS_FORMS = [
  {
    form: "Form 24Q",
    title: "TDS on Salary Payments (Section 192)",
    desc: "Quarterly return filed by employers detailing employee salaries, tax bracket deductions, and Chapter VIA exemptions. Annexure II is submitted in Q4 to finalize annual employee tax computations.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    form: "Form 26Q",
    title: "TDS on Non-Salary Payments (Residents)",
    desc: "Quarterly return covering payments to resident contractors (194C), professional/technical fees (194J), commercial rent (194I), commission/brokerage (194H), and interest (194A).",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    form: "Form 27Q",
    title: "TDS on Payments to Non-Residents (Section 195)",
    desc: "Mandatory quarterly return for remittances made to foreign vendors, non-resident consultants, overseas software platforms, royalties, and interest on external commercial borrowings (ECB).",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    form: "Form 27EQ",
    title: "TCS Return on Specified Transactions",
    desc: "Quarterly statement for Tax Collected at Source (TCS) by sellers on sale of scrap, timber, alcohol, minerals, overseas tour packages (LRS), and high-value vehicle sales under Section 206C.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const COMMON_TDS_RATES = [
  { section: "Section 192", nature: "Salaries to Employees", rate: "Slab Rates", threshold: "Basic Exemption Limit" },
  { section: "Section 194C", nature: "Contractors (Individual/HUF)", rate: "1.00%", threshold: "₹30,000 single / ₹1,00,000 aggregate" },
  { section: "Section 194C", nature: "Contractors (Companies/Firms)", rate: "2.00%", threshold: "₹30,000 single / ₹1,00,000 aggregate" },
  { section: "Section 194J", nature: "Professional Fees / Royalty", rate: "10.00%", threshold: "₹30,000 per annum" },
  { section: "Section 194J", nature: "Technical Services / BPO", rate: "2.00%", threshold: "₹30,000 per annum" },
  { section: "Section 194I", nature: "Rent - Land & Building", rate: "10.00%", threshold: "₹2,40,000 per annum" },
  { section: "Section 194I", nature: "Rent - Plant & Machinery", rate: "2.00%", threshold: "₹2,40,000 per annum" },
  { section: "Section 194A", nature: "Interest other than Securities", rate: "10.00%", threshold: "₹40,000 (₹50k for seniors) / ₹5,000" },
  { section: "Section 194H", nature: "Commission or Brokerage", rate: "5.00%", threshold: "₹15,000 per annum" },
  { section: "Section 194-IA", nature: "Purchase of Immovable Property", rate: "1.00%", threshold: "₹50,00,000 consideration" },
  { section: "Section 194-O", nature: "E-Commerce Operator on Sellers", rate: "1.00%", threshold: "₹5,00,000 (Individual/HUF)" },
  { section: "Section 195", nature: "Payments to Non-Residents", rate: "DTAA / 20%", threshold: "Nil - All Payments Taxable" },
];

const FILING_STEPS = [
  {
    step: "Step 01",
    title: "Data Collation & PAN Verification",
    desc: "Gather deductee payment details, invoices, and PANs for the quarter. Validate PANs on TRACES to ensure they are active and avoid 20% higher tax under Section 206AA.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 02",
    title: "Challan 281 Reconciliation",
    desc: "Cross-verify monthly TDS deposits with bank challans. Verify BSR Code, Challan Date, Challan Serial Number, and Minor Head 200/400 for accurate allocation.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 03",
    title: "RPU Return Preparation",
    desc: "Input deductee records, transaction dates, tax deducted, and mapped challans into the official NSDL Return Preparation Utility (RPU) for Form 24Q, 26Q, or 27Q.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 04",
    title: "FVU Validation & Error Scrubbing",
    desc: "Run the official File Validation Utility (FVU). The tool audits mathematical precision, challan amounts, and schema constraints to generate a zero-defect .fvu file.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 05",
    title: "Portal E-Filing & DSC Verification",
    desc: "Log in using TAN credentials on incometax.gov.in. Upload the validated .fvu file and authenticate using the registered Class 3 DSC or Electronic Verification Code (EVC).",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "Form 16 / 16A Certificate Delivery",
    desc: "Obtain the 15-digit Token Number receipt. Once processed by CPC-TDS, download official digitally signed Form 16 (Part A & B) and Form 16A certificates from TRACES.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is TDS return filing?",
    a: "TDS return filing is the mandatory quarterly submission of a detailed statement to the Income Tax Department under Section 200(3) of the Income Tax Act, 1961. It contains records of all tax deducted at source, PANs of deductees, payment particulars, and government deposit challans for that specific quarter.",
  },
  {
    q: "What are the due dates for filing quarterly TDS returns for AY 2026-27?",
    a: "The quarterly due dates are: (1) Quarter 1 (April to June): 31st July; (2) Quarter 2 (July to September): 31st October; (3) Quarter 3 (October to December): 31st January; (4) Quarter 4 (January to March): 31st May following the financial year.",
  },
  {
    q: "What are the due dates for depositing monthly TDS with the government?",
    a: "TDS deducted in any month must be deposited on or before the 7th of the following month (e.g., TDS deducted in October must be paid by November 7th). For the month of March, the statutory deposit deadline is extended to 30th April.",
  },
  {
    q: "What is the penalty for filing a TDS return late under Section 234E?",
    a: "Under Section 234E, a late filing fee of ₹200 per day is levied for every day the delay continues after the statutory due date. The total late fee cannot exceed the total amount of TDS deducted for that quarter. This fee must be paid before filing the belated return.",
  },
  {
    q: "What is the penalty under Section 271H?",
    a: "In addition to the daily fee under Section 234E, the Assessing Officer can levy a penalty ranging from ₹10,000 to ₹1,00,000 under Section 271H for failing to file the TDS return within one year from the due date, or for furnishing incorrect information (such as wrong PAN, wrong challan, or wrong deduction amount).",
  },
  {
    q: "What is the difference between Form 24Q and Form 26Q?",
    a: "Form 24Q is filed exclusively by employers for reporting TDS deducted on employee salaries under Section 192. Form 26Q is filed for reporting TDS deducted on non-salary payments made to resident individuals and entities (such as contractor fees, professional charges, rent, interest, commission).",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the interest rate for delayed TDS deduction versus delayed TDS deposit?",
    a: "Under Section 201(1A): (1) Delay in deducting TDS attracts interest at 1% per month from the date on which tax was deductible to the date of actual deduction; (2) Delay in depositing deducted TDS attracts interest at 1.5% per month from the date of deduction to the date of actual deposit.",
  },
  {
    q: "What happens if a vendor or employee does not provide a valid PAN?",
    a: "Under Section 206AA of the Income Tax Act, if the payee fails to furnish a valid PAN, the deductor must deduct TDS at the higher of: (1) The rate specified in the relevant Act provision; (2) The rate or rates in force; or (3) A flat rate of 20%.",
  },
  {
    q: "What is Form 16 and Form 16A and when must they be issued?",
    a: "Form 16 is the annual certificate of tax deducted on salary issued to employees on or before June 15th following the financial year. Form 16A is the quarterly certificate of tax deducted on non-salary payments (rent, professional, contractor) issued within 15 days from the due date for filing the quarterly return.",
  },
  {
    q: "How can errors in a filed TDS return be rectified?",
    a: "Errors can be rectified by filing a Correction Return on the TRACES portal (tdscpc.gov.in). Deductors can request a consolidated FVU file, correct deductee PANs, match unmatched challans, add missed deductee records, and upload the validated correction statement.",
  },
  {
    q: "Is TAN mandatory for filing TDS returns?",
    a: "Yes, absolutely. A valid 10-digit Tax Deduction and Collection Account Number (TAN) under Section 203A is strictly mandatory to deposit taxes via Challan 281 and file quarterly returns in Forms 24Q, 26Q, 27Q, and 27EQ.",
  },
  {
    q: "What is Section 40(a)(ia) expenditure disallowance?",
    a: "Under Section 40(a)(ia), if a business fails to deduct TDS or fails to deposit deducted TDS on or before the due date for filing its income tax return under Section 139(1), 30% of the expenditure paid to a resident is disallowed from business profits, significantly increasing corporate tax liability.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What is the File Validation Utility (FVU) in TDS return filing?",
    a: "The FVU is an official validation tool developed by Protean (NSDL) to verify the data structure, schema compliance, and mathematical calculations of e-TDS return text files generated by the Return Preparation Utility (RPU). A return cannot be uploaded without generating a valid .fvu file.",
  },
  {
    q: "What is Section 206AB higher TDS for non-filers of income tax returns?",
    a: "Under Section 206AB, TDS must be deducted at twice the normal rate or 5% (whichever is higher) on payments made to specified persons who have not filed their income tax returns for the previous assessment year and whose aggregate TDS/TCS was ₹50,000 or more.",
  },
  {
    q: "What is a Nil TDS return and is it mandatory to file?",
    a: "If an entity holds a TAN but did not deduct any TDS during a quarter, filing a formal return is not mandatory; however, filing a 'Declaration for Non-Filing of Return' on the TRACES portal is highly recommended to prevent automated default notices from CPC-TDS.",
  },
  {
    q: "What is Challan Identification Number (CIN) in TDS filing?",
    a: "CIN is a unique identifier comprising the 7-digit BSR Code of the bank branch, the date of deposit, and the 5-digit Challan Serial Number. Accurately entering the CIN is essential to match tax payments with deductee entries on TRACES.",
  },
  {
    q: "How does TDS return filing affect the deductee's Form 26AS and AIS?",
    a: "When a deductor files their quarterly return, the tax deducted and deposited is automatically populated in the payee's Form 26AS, AIS, and TIS. If the return is not filed or filed with an incorrect PAN, the deductee cannot claim tax credit, leading to tax disputes.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What is Form 27Q and when is it required?",
    a: "Form 27Q is the quarterly return for tax deducted at source on payments made to non-residents (foreign companies, NRIs, overseas vendors) under Section 195. It must be filed alongside Form 15CA and Form 15CB documentation.",
  },
  {
    q: "Can a government department be penalized for late TDS filing?",
    a: "Yes. Government deductors are equally subject to late filing fees under Section 234E and interest under Section 201(1A). If tax is deposited through book entry without challan, specific transfer vouchers must be reported.",
  },
  {
    q: "What is a Justification Report on TRACES?",
    a: "A Justification Report is an official PDF document generated by CPC-TDS detailing all defaults, late fees, short deductions, and interest identified in a processed quarterly return, guiding the deductor on necessary correction statements.",
  },
  {
    q: "How can Merrafilings assist with quarterly TDS return filing?",
    a: "Merrafilings offers end-to-end TDS compliance: PAN pre-verification, Challan 281 reconciliation, RPU/FVU preparation, portal filing, TRACES default monitoring, correction filing, and automated issuance of Form 16 and Form 16A certificates.",
  },
];

const RELATED_GUIDES = [
  {
    title: "TAN Registration Online: Form 49B Application Process, Eligibility & Validity",
    href: "/tan-registration",
    date: "Tax Setup",
    readTime: "7 min read",
  },
  {
    title: "Foreign Remittance Compliance: When is Form 15CA & 15CB Mandatory?",
    href: "/15ca-15cb-filing",
    date: "International Tax",
    readTime: "8 min read",
  },
  {
    title: "Corporate Tax Return Filing (Form ITR-6) for Companies in India: AY 2026-27",
    href: "/itr-6-form",
    date: "Corporate Tax",
    readTime: "9 min read",
  },
  {
    title: "Partnership Firm & LLP Tax Filing Guide (Form ITR-5): Rules & Deductions",
    href: "/itr-5-form",
    date: "Firm Tax Desk",
    readTime: "10 min read",
  },
];

const RELATED_SERVICES_TAGS = [
  "TDS Return Filing",
  "Form 24Q Salary",
  "Form 26Q Non-Salary",
  "Form 27Q Non-Resident",
  "Form 27EQ TCS",
  "TRACES Portal",
  "Form 16 Generation",
  "Form 16A Download",
  "Section 234E Late Fee",
  "Section 201(1A) Interest",
  "Challan 281 Reconciliation",
  "FVU Validation",
];

const POPULAR_SEARCHES_TAGS = [
  "TDS return filing due date AY 2026-27",
  "how to file TDS return online",
  "Form 24Q salary return filing",
  "Form 26Q non salary quarterly return",
  "TDS rates chart AY 2026-27",
  "late fee for TDS return Section 234E",
  "TRACES portal login with TAN",
  "how to download Form 16A from TRACES",
  "TDS return correction statement",
  "FVU validation utility download",
  "interest on late deposit of TDS",
  "penalty under Section 271H",
];

function TdsGuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding TDS Return Filing: Statutory Mandate under Section 200(3)
        </h2>
        <p>
          <strong>Tax Deducted at Source (TDS) Return Filing</strong> is a mandatory quarterly compliance requirement under <strong>Section 200(3) of the Income Tax Act, 1961</strong>. Every person or commercial entity responsible for deducting tax at source from employee salaries, contractor fees, professional charges, rent, interest, or foreign remittances must submit a quarterly electronic statement to the Income Tax Department.
        </p>
        <p>
          The TDS return establishes mathematical proof of tax deduction and deposit into the Central Government account via <strong>Challan 281</strong>. Accurate return filing is essential to ensure that deducted taxes are reflected in the payee's <strong>Form 26AS, AIS, and TIS</strong>, allowing them to claim legitimate tax credits during annual income tax filing.
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Zero-Tolerance Penalty Rules:</strong> Under Section 234E, missing the quarterly deadline attracts an automated fee of ₹200 per day until submission. Non-filing for more than one year attracts penalties from ₹10,000 up to ₹1,00,000 under Section 271H!
          </div>
        </div>
      </section>

      {/* Section 2: Types of TDS Return Forms */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Types of TDS & TCS Return Forms in India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TDS_FORMS.map((item, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${item.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {item.form}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.iconBox} transition-all shrink-0`}>
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${item.titleHover} transition-colors mb-2`}>
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Difference between TDS and TCS */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Core Comparative Breakdown: Difference Between TDS and TCS
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Distinguishing Feature</th>
                <th className="py-3.5 px-4 font-semibold text-blue-700">TDS (Tax Deducted at Source)</th>
                <th className="py-3.5 px-4 font-semibold text-amber-700">TCS (Tax Collected at Source)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Collection Mechanism</td>
                <td className="py-3.5 px-4">Payer (buyer/employer) deducts tax before making payment</td>
                <td className="py-3.5 px-4 text-amber-700 font-medium">Seller collects tax in addition to sale price from buyer</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Primary Transactions</td>
                <td className="py-3.5 px-4">Salaries, contractor fees, professional charges, rent, interest</td>
                <td className="py-3.5 px-4">Sale of scrap, minerals, motor vehicles &gt; ₹10L, foreign tour packages</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Governing Chapter</td>
                <td className="py-3.5 px-4">Chapter XVII-B of Income Tax Act</td>
                <td className="py-3.5 px-4">Section 206C of Income Tax Act</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Quarterly Return Forms</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Form 24Q, Form 26Q, Form 27Q</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Form 27EQ</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Certificate Issued</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Form 16 (Salary) / Form 16A (Non-Salary)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Form 27D</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: TDS Rates Table */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Common TDS Deduction Sections, Thresholds & Rates (AY 2026-27)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Section</th>
                <th className="py-3.5 px-4 font-semibold">Nature of Commercial Payment</th>
                <th className="py-3.5 px-4 font-semibold">Standard TDS Rate</th>
                <th className="py-3.5 px-4 font-semibold">Statutory Exemption Threshold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMMON_TDS_RATES.map((rate, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-blue-600">{rate.section}</td>
                  <td className="py-3 px-4 font-medium text-slate-900">{rate.nature}</td>
                  <td className="py-3 px-4 font-bold text-emerald-600">{rate.rate}</td>
                  <td className="py-3 px-4 text-slate-600">{rate.threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          *Note: If the deductee fails to furnish an active PAN, tax must be deducted at a higher rate of 20% under Section 206AA. Higher rates also apply to non-filers under Section 206AB.
        </p>
      </section>

      {/* Section 5: Due Dates */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Statutory Due Dates for Quarterly Filing & Monthly Deposits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px]">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <h3 className="font-bold text-sm text-blue-700 border-b border-blue-100 pb-2">
              Quarterly TDS Return Filing Deadlines
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex justify-between">
                <span>Quarter 1 (April – June):</span>
                <strong className="text-slate-900">31st July</strong>
              </li>
              <li className="flex justify-between">
                <span>Quarter 2 (July – September):</span>
                <strong className="text-slate-900">31st October</strong>
              </li>
              <li className="flex justify-between">
                <span>Quarter 3 (October – December):</span>
                <strong className="text-slate-900">31st January</strong>
              </li>
              <li className="flex justify-between">
                <span>Quarter 4 (January – March):</span>
                <strong className="text-emerald-700 font-bold">31st May</strong>
              </li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <h3 className="font-bold text-sm text-emerald-700 border-b border-emerald-100 pb-2">
              Monthly TDS Payment Deadlines (Challan 281)
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex justify-between">
                <span>April to February Deductions:</span>
                <strong className="text-slate-900">7th of Next Month</strong>
              </li>
              <li className="flex justify-between">
                <span>March Month Deductions:</span>
                <strong className="text-purple-700 font-bold">30th April</strong>
              </li>
              <li className="flex justify-between">
                <span>Property Purchase (Sec 194-IA):</span>
                <strong className="text-slate-900">30 days from month end</strong>
              </li>
              <li className="flex justify-between">
                <span>Government Deductors (No Challan):</span>
                <strong className="text-slate-900">Same Day of Deduction</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Step-by-Step Filing Process */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Step-by-Step Online TDS Return Preparation & Submission Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FILING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${step.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                  {step.step}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.iconBox} transition-all shrink-0`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${step.titleHover} transition-colors mb-2`}>
                {step.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Penalties Table */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Statutory Penalties, Interest & Consequences of Non-Compliance
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Default Category</th>
                <th className="py-3.5 px-4 font-semibold">Section</th>
                <th className="py-3.5 px-4 font-semibold">Statutory Financial &amp; Legal Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Late Filing of Quarterly Return</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 234E</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">₹200 per day of delay (capped at quarterly TDS)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Non-Filing of Return (&gt;1 Year)</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 271H</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Penalty from ₹10,000 up to ₹1,00,000</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Delayed Deduction of TDS</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 201(1A)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Interest at 1.00% per month until deducted</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Deducted but Delayed Deposit</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 201(1A)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Interest at 1.50% per month until deposited</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Business Expense Disallowance</td>
                <td className="py-3.5 px-4 font-medium text-purple-600">Section 40(a)(ia)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">30% of expenditure disallowed from taxable profit</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Willful Non-Payment of TDS</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 276B</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Rigorous imprisonment from 3 months to 7 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Documentation Checklist for TDS Return Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Deductor TAN &amp; PAN:</strong>
            <span>Active TAN number and PAN card of the business entity or deductor.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Payment Registers:</strong>
            <span>Quarterly expense ledgers detailing contractor, rent, professional, and salary payments.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Deductee PAN Database:</strong>
            <span>Verified PAN cards and postal addresses for all employees, vendors, and landlords.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Challan 281 Receipts:</strong>
            <span>Counterfoils of paid challans with valid BSR Code, Challan Date, and Serial Number (CIN).</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">TRACES Login Credentials:</strong>
            <span>Active user ID and password on tdscpc.gov.in for downloading previous return tokens.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Class 3 Digital Signature:</strong>
            <span>Registered Class 3 DSC of the Principal Officer for mandatory corporate return signing.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function TdsReturnFilingPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 200(3) Compliant Quarterly E-TDS Desk"
      heroTitle={
        <>
          <span>TDS Return Filing Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Quarterly Compliance
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="File your quarterly TDS and TCS returns (Form 24Q, 26Q, 27Q, 27EQ) online with certified Chartered Accountants. Complete data validation, Challan 281 reconciliation, TRACES portal processing, and instant generation of digitally signed Form 16 & Form 16A."
      formTitle="File Quarterly TDS Return"
      formSubtitle="Connect with our TDS compliance desk for FVU generation, PAN validation, challan reconciliation, and Form 16/16A delivery."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">TDS return filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for single quarter filing, complete 4-quarter annual retainer, or enterprise corporate suite."
      breadcrumbCurrent="TDS Return Filing"
      guideTitle="Comprehensive Guide to TDS Return Filing (Forms 24Q, 26Q, 27Q) & Compliance in India - AY 2026-27"
      guideContent={<TdsGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about quarterly TDS return filing, due dates, late fees under Section 234E, interest under 201(1A), and Form 16 generation."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
