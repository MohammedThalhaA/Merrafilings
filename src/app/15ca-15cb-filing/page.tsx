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
  Landmark,
  CreditCard,
  SendHorizontal,
  Banknote,
  FileLock2,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <SendHorizontal className="w-4 h-4" />, text: "Fast-Track Form 15CB Certification by Practicing Chartered Accountants" },
  { icon: <Globe2 className="w-4 h-4" />, text: "Complete E-Filing of Form 15CA (Part A, Part B, Part C & Part D)" },
  { icon: <Scale className="w-4 h-4" />, text: "Double Taxation Avoidance Agreement (DTAA) Relief & TDS Rate Optimization" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Tax Residency Certificate (TRC) & Electronic Form 10F Verification" },
  { icon: <Landmark className="w-4 h-4" />, text: "Immediate Bank Submission Acknowledgment for Outward Wire Transfers" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Form 15CA Basic Filing (Part A / Part D)",
    shortDesc: "Self-declaration e-filing for non-taxable foreign payments or remittances below ₹5 Lakhs.",
    expandedDesc: "Designed for individuals and businesses sending money abroad where Form 15CB is not statutorily required. Covers remittances up to ₹5 Lakhs (Part A) or remittances completely non-chargeable to income tax in India under domestic law or DTAA provisions (Part D). Our international tax specialists review your transaction agreement, verify invoice particulars, prepare the online self-declaration, and generate the official Form 15CA acknowledgment for your Authorised Dealer (AD) bank.",
    price: "₹4,899",
    priceSub: "Per Outward Remittance / Non-Audit",
    badge: "Basic Remittance",
    features: [
      "Filing of Form 15CA Part A (Below ₹5 Lakhs) or Part D (Non-Taxable)",
      "Review of Foreign Vendor Agreement, Invoice & Purpose Code",
      "Analysis of Income Tax Act & DTAA Chargeability Provisions",
      "PAN, TAN & Remitter Entity Verification on E-Filing Portal",
      "Preparation of Online Undertaking & Form Draft",
      "Electronic Verification Code (EVC) or DSC Portal Submission",
      "Instant Generation of Official Bank Acknowledgment Slip",
      "Authorised Dealer (AD Category I Bank) Submission Guidance",
    ],
  },
  {
    name: "Form 15CA + 15CB Complete Certification",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Comprehensive CA certification (Form 15CB) with UDIN and Form 15CA Part C filing for remittances above ₹5 Lakhs.",
    expandedDesc: "Our flagship cross-border remittance package required for taxable foreign remittances exceeding ₹5 Lakhs in a financial year. A practicing Chartered Accountant conducts a thorough treaty analysis, examines the recipient's Tax Residency Certificate (TRC) and Form 10F, computes withholding tax (TDS) under Section 195, uploads Form 15CB with Unique Document Identification Number (UDIN) using a Class 3 DSC, and files Form 15CA Part C on the income tax portal.",
    price: "₹9,899",
    priceSub: "Per Remittance / Includes CA Certification",
    features: [
      "Comprehensive Form 15CB Certificate Issued by Senior CA with UDIN",
      "Submission of Form 15CA Part C on Income Tax E-Filing Portal",
      "In-Depth DTAA Treaty Article Evaluation (Royalties, FTS, Interest, Business)",
      "Tax Residency Certificate (TRC) & No-PE Declaration Verification",
      "Electronic Form 10F Preparation & Portal Validation",
      "Withholding Tax (TDS) Calculation & Challan 281 Generation",
      "TDS Deposit Guidance & Form 27Q Quarterly Sync Consultation",
      "Same-Day Digital Certificate Delivery for Urgent Wire Transfers",
      "Bank Liaison & AD Bank Query Resolution Support",
    ],
  },
  {
    name: "Annual Cross-Border Compliance Retainer",
    shortDesc: "Annual retainer covering multiple foreign remittances, Form 27Q filings, transfer pricing, and notice defense.",
    expandedDesc: "Designed for SaaS companies, exporters, multinational subsidiaries, and importing enterprises with continuous cross-border vendor payments. Includes up to 5 complete Form 15CA/15CB filings across the year, quarterly Form 27Q TDS return filings for non-residents, issuance of Form 16A withholding certificates, foreign contract drafting for withholding tax optimization, and robust legal representation for Section 195 or Section 201 scrutiny inquiries.",
    price: "₹19,899",
    priceSub: "Annual Retainer / Up to 5 Remittances + Form 27Q",
    badge: "Complete Cross-Border Suite",
    features: [
      "Dedicated Senior International Tax Chartered Accountant Assigned",
      "Up to 5 Form 15CA + Form 15CB Certifications Included per Financial Year",
      "Quarterly Non-Resident TDS Return Filing (Form 27Q)",
      "Quarterly Form 16A Certificate Generation for Foreign Vendors",
      "Foreign Vendor Contract Drafting & Tax Grossing-Up Advisory",
      "Equalisation Levy & Significant Economic Presence (SEP) Review",
      "Annual Transfer Pricing Review (Section 92E / Form 3CEB)",
      "Handling of Income Tax Notices & Section 143(1) Demands on Remittances",
      "Direct Priority Phone & WhatsApp Line with International Tax Desk",
    ],
  },
];

const FORM_15CA_PARTS = [
  {
    part: "Part A",
    title: "Remittances Below ₹5 Lakhs (Taxable)",
    desc: "Applicable when the remittance or aggregate remittances to a non-resident do not exceed ₹5,00,000 during the financial year and the amount is chargeable to tax under the Income Tax Act. Form 15CB is not required.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    part: "Part B",
    title: "Remittance with Tax Determination Order",
    desc: "Applicable when the remitter has obtained a lower or nil withholding tax order/certificate from the Assessing Officer under Section 195(2), Section 195(3), or Section 197. Form 15CB is not required.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    part: "Part C",
    title: "Remittances Above ₹5 Lakhs (Taxable)",
    desc: "The most common part for commercial payments. Applicable when the remittance exceeds ₹5,00,000 in a financial year and is chargeable to tax. Obtaining Form 15CB from a Chartered Accountant is mandatory prior to filing.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    part: "Part D",
    title: "Remittances Not Chargeable to Tax",
    desc: "Applicable when the foreign remittance is completely non-chargeable to tax in India under domestic tax law or applicable DTAA provisions (e.g., pure reimbursement of expenses without markup). Form 15CB is not required.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const REMITTANCE_REASONS = [
  {
    title: "Software Licenses & SaaS Subscriptions",
    desc: "Payments for cloud hosting (AWS, Google Cloud, Azure), enterprise SaaS subscriptions, software development tools, and digital platform access fees.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Royalties & Intellectual Property Fees",
    desc: "Transfers for trademark licensing, patent royalties, technical know-how, franchise fees, design rights, and literary or scientific copyright royalties.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Fees for Technical Services (FTS)",
    desc: "Remittances for engineering consultancy, management advisory, architectural designs, technical inspections, and professional services rendered by non-residents.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Overseas Advertising & Marketing",
    desc: "Payments made to global media networks (Meta Ads, Google Ads, LinkedIn Ads, TikTok) and international influencer marketing agencies.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Dividends & Interest on Foreign Loans",
    desc: "Repatriation of corporate dividends to foreign parent companies, and interest remittances on External Commercial Borrowings (ECB) or foreign currency loans.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Overseas Retainers & Legal Retainers",
    desc: "Retainer fees paid to foreign lawyers, international tax counsel, trademark attorneys, and foreign sales commission agents operating outside India.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FILING_STEPS = [
  {
    step: "Step 01",
    title: "Agreement & Document Examination",
    desc: "We analyze the underlying commercial contract, invoice, payment currency, and recipient's tax jurisdiction to determine whether the payment is taxable under Section 195.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 02",
    title: "DTAA Analysis & TRC Verification",
    desc: "We review the recipient's Tax Residency Certificate (TRC), electronic Form 10F, and No-PE Declaration to determine the lowest withholding tax rate between domestic law and treaty.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 03",
    title: "TDS Computation & Challan 281 Deposit",
    desc: "If tax is chargeable, we compute exact withholding tax with applicable surcharge and cess, generate e-Pay Tax challan under Minor Head 200, and assist in immediate tax deposit.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 04",
    title: "Form 15CB Issuance by Senior CA",
    desc: "A practicing Chartered Accountant completes Form 15CB on incometax.gov.in, signs it with a Class 3 DSC, and generates a statutory Unique Document Identification Number (UDIN).",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 05",
    title: "Form 15CA E-Filing on Portal",
    desc: "The remitter logs into the e-filing portal, selects Form 15CA (Part C), enters the Form 15CB acknowledgment number and UDIN, verifies the return via EVC or DSC, and submits.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "Bank Submission & Wire Transfer",
    desc: "Download the official Form 15CA acknowledgment slip and Form 15CB certificate. Submit both documents to your Authorised Dealer (AD) bank along with Form A2 to initiate outward transfer.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is Form 15CA and Form 15CB?",
    a: "Form 15CA and Form 15CB are statutory tax compliance documents mandated under Section 195 of the Income Tax Act, 1961 and Rule 37BB of the Income Tax Rules. Form 15CA is a self-declaration submitted online by the remitter (payer) detailing payments made to non-residents. Form 15CB is a formal certification issued by a practicing Chartered Accountant certifying the nature of payment, withholding tax (TDS) applicability, and eligibility for Double Taxation Avoidance Agreement (DTAA) treaty benefits.",
  },
  {
    q: "What is the core difference between Form 15CA and Form 15CB?",
    a: "Form 15CA is an undertaking/declaration filed directly by the remitter confirming whether tax has been deducted on the payment. Form 15CB is an independent audit certificate issued by a Chartered Accountant verifying that tax laws and DTAA treaties have been properly interpreted. Form 15CA is required for almost all foreign payments, whereas Form 15CB is required specifically when taxable payments exceed ₹5,00,000 in a financial year (under Part C of Form 15CA).",
  },
  {
    q: "When is Form 15CB mandatory?",
    a: "Form 15CB from a Chartered Accountant is legally mandatory when: (1) The foreign remittance is chargeable to tax under the Income Tax Act; (2) The amount or aggregate of remittances to the non-resident exceeds ₹5,00,000 during the financial year; and (3) No order or certificate has been obtained from the Assessing Officer under Section 195(2), 195(3), or 197.",
  },
  {
    q: "What are the four parts of Form 15CA?",
    a: "Form 15CA is divided into four distinct sections: (1) Part A: Taxable remittances up to ₹5,00,000 during the financial year (no 15CB required); (2) Part B: Remittances where an order under Section 195(2)/(3) or Section 197 has been obtained from the Assessing Officer; (3) Part C: Taxable remittances exceeding ₹5,00,000 during the financial year (Form 15CB is strictly mandatory); (4) Part D: Remittances that are completely non-chargeable to income tax in India.",
  },
  {
    q: "What is the penalty for not filing Form 15CA or Form 15CB?",
    a: "Under Section 271-I of the Income Tax Act, failure to furnish Form 15CA or Form 15CB, or submitting inaccurate or incomplete information, attracts a mandatory penalty of ₹1,00,000 for each failure. Furthermore, under Section 40(a)(i), failure to deduct or deposit TDS on foreign payments leads to 100% disallowance of the expenditure in the remitter's corporate income tax return, plus interest under Section 201(1A) at 1.5% per month.",
  },
  {
    q: "When is Form 15CA NOT required to be filed?",
    a: "Under Rule 37BB(3), Form 15CA is NOT required for remittances that fall under the specified 33 RBI purpose codes, including: import of goods into India (advances/settlements), remittances for education abroad (tuition fees), medical treatment abroad, personal travel expenses, investments abroad in equity or debt securities, and remittances covered under the Liberalised Remittance Scheme (LRS) for permitted personal uses.",
  },
  {
    q: "What documents are required to obtain Form 15CB from a Chartered Accountant?",
    a: "To issue Form 15CB, a Chartered Accountant requires: (1) PAN and TAN of the remitter; (2) Commercial invoice or agreement with the foreign entity; (3) Tax Residency Certificate (TRC) of the foreign recipient issued by their home tax authority; (4) Electronic Form 10F submitted on incometax.gov.in; (5) No-PE (Permanent Establishment) declaration from the non-resident; (6) Bank account details and purpose code; and (7) Proof of TDS payment challan.",
  },
  {
    q: "What is a Tax Residency Certificate (TRC) and why is it necessary?",
    a: "A Tax Residency Certificate (TRC) is an official document issued by the government or revenue authority of the recipient's country certifying that the recipient is a tax resident of that country. Under Section 90(4) of the Income Tax Act, a non-resident cannot claim beneficial tax rates under a Double Taxation Avoidance Agreement (DTAA) unless they furnish a valid TRC containing specified particulars.",
  },
  {
    q: "What is electronic Form 10F and who must file it?",
    a: "Form 10F is a statutory self-declaration required under Section 90(5) when the foreign entity's TRC does not contain all details required by Rule 21AB (such as nationality, tax identification number, and address). Non-resident payees must generate a portal account on incometax.gov.in and furnish Form 10F electronically to allow the Indian remitter to apply lower DTAA withholding rates.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Who is required to file Form 15CA and Form 15CB?",
    a: "Any person making a foreign remittance from India to a non-resident—including individuals, proprietary concerns, partnership firms, LLPs, private and public limited companies, and trusts—must file Form 15CA before the bank processes the wire transfer. Form 15CB must be executed by a practicing Chartered Accountant holding a valid Certificate of Practice (CoP).",
  },
  {
    q: "Can Authorised Dealer (AD) Banks process foreign wire transfers without Form 15CA?",
    a: "No. Under Section 195(6) of the Income Tax Act and Reserve Bank of India (RBI) guidelines, Authorised Dealer banks are legally prohibited from processing outward remittances to non-residents without receiving a copy of the electronically filed Form 15CA acknowledgment and Form 15CB certificate (where applicable).",
  },
  {
    q: "How does DTAA help in reducing withholding tax on foreign payments?",
    a: "Under Section 90(2), a taxpayer can choose between the provisions of the domestic Income Tax Act and the applicable Double Taxation Avoidance Agreement (DTAA), whichever is more beneficial. For example, while domestic law levies 20% tax on Fees for Technical Services (FTS) or Royalties, treaties with countries like the USA, UK, Singapore, or Germany often limit withholding to 10% or 15%, saving significant tax costs.",
  },
  {
    q: "How long does it take to obtain Form 15CB and file Form 15CA?",
    a: "With complete documentation (invoice, TRC, Form 10F, and TDS challan), Merrafilings completes the DTAA review, issues the Chartered Accountant certified Form 15CB with UDIN, and submits Form 15CA on the income tax portal within 24 to 48 hours. Urgent same-day expedited filings are also available for critical commercial payments.",
  },
  {
    q: "What is a Unique Document Identification Number (UDIN)?",
    a: "UDIN is an 18-digit unique number generated by practicing Chartered Accountants on the Institute of Chartered Accountants of India (ICAI) portal for every certificate issued. A Form 15CB certificate without a valid UDIN is invalid and will be rejected automatically by the Income Tax Department's portal and banking systems.",
  },
  {
    q: "What is the procedure for filing Form 15CA and 15CB online?",
    a: "The online process comprises: (1) Remitter assigns CA on incometax.gov.in; (2) CA logs into the portal using CA credentials, completes Form 15CB, signs with Class 3 DSC, and generates UDIN; (3) Remitter logs into portal, accepts Form 15CB, fills Form 15CA (Part C), and e-verifies; (4) Download 15CA acknowledgment and 15CB certificate and submit to bank alongside Form A2.",
  },
  {
    q: "Can a filed Form 15CA be withdrawn or revised?",
    a: "Yes. Form 15CA can be withdrawn online within 7 days from the date of submission if the foreign remittance is cancelled or if incorrect details were submitted. A fresh Form 15CA can then be submitted after rectifying the information.",
  },
  {
    q: "What is the difference between Grossing Up and Net of Tax in foreign contracts?",
    a: "Under Section 195A, if an agreement specifies that the tax deductible at source is to be borne by the Indian remitter ('net of tax' clause), the payment must be 'grossed up' for calculating tax liability. This increases the effective payment amount and leads to higher withholding tax costs for the Indian business.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How are software payments to foreign vendors (SaaS) treated for TDS?",
    a: "Following the landmark Supreme Court ruling in the Engineering Analysis Centre of Excellence case, payments for off-the-shelf software or SaaS licenses without transfer of copyright are generally NOT treated as royalties under DTAA treaties. However, a detailed factual review of the End User License Agreement (EULA) and Form 15CB certification is essential to establish non-taxability.",
  },
  {
    q: "What is Equalisation Levy and how does it relate to Form 15CA/15CB?",
    a: "Historically, Equalisation Levy (6% on digital advertising and 2% on e-commerce supplies) applied to specified digital transactions. However, with recent Finance Act amendments phasing out the 2% e-commerce levy, cross-border digital services are increasingly evaluated under Significant Economic Presence (SEP) rules and traditional DTAA provisions requiring Form 15CA/15CB compliance.",
  },
  {
    q: "Is TAN mandatory for making foreign remittances?",
    a: "Yes, if the foreign remittance is chargeable to tax and requires deduction of TDS under Section 195, the remitter MUST have a valid Tax Deduction and Collection Account Number (TAN) to deposit the tax and file quarterly TDS returns in Form 27Q. If the remittance is completely non-taxable (Part D), TAN is not mandatory.",
  },
  {
    q: "How does the remitter report foreign remittances in their annual income tax return?",
    a: "Corporate remitters must disclose all foreign remittances, royalty payments, and technical service fees in Part A-P&L, Schedule BP, and Schedule FA of Form ITR-6. LLPs and partnership firms disclose these in Form ITR-5, ensuring consistency between Form 15CA filings, Form 27Q TDS returns, and annual tax returns.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What happens if TDS on foreign remittance is deducted but not deposited on time?",
    a: "Under Section 201(1A), delay in depositing deducted TDS attracts mandatory interest at 1.5% per month or part of a month from the date of deduction to the date of actual payment. Additionally, the expense is disallowed under Section 40(a)(i) for that financial year.",
  },
  {
    q: "Can non-residents claim a refund in India if excess TDS was deducted on remittance?",
    a: "Yes. If excess tax was deducted at source on a cross-border remittance, the non-resident can obtain a PAN in India, file an income tax return in Form ITR-2 or ITR-3, and claim a direct refund of the excess TDS with statutory interest under Section 244A.",
  },
  {
    q: "What is Form A2 required by Authorised Dealer Banks?",
    a: "Form A2 is a FEMA application cum declaration form required by banks under RBI regulations for all outward foreign currency remittances. It specifies the remitter's details, beneficiary's bank details, purpose code, and amount. Form A2 is submitted to the bank along with Form 15CA and Form 15CB.",
  },
  {
    q: "Why choose Merrafilings for Form 15CA & 15CB compliance?",
    a: "Merrafilings pairs you with experienced international tax Chartered Accountants who specialize in cross-border transactions. We analyze complex DTAA treaties, verify TRC and Form 10F credentials, minimize withholding liabilities legally, issue UDIN-authenticated Form 15CB certificates swiftly, and provide full bank query defense.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Understanding TDS on Foreign Payments under Section 195: Rules, Rates & DTAA Relief",
    href: "/income-tax-filing",
    date: "International Tax",
    readTime: "8 min read",
  },
  {
    title: "Corporate Income Tax Return Filing (Form ITR-6) for Companies in India: AY 2026-27",
    href: "/itr-6-form",
    date: "Corporate Compliance",
    readTime: "9 min read",
  },
  {
    title: "Partnership Firm & LLP Tax Filing Guide (Form ITR-5): Rules, Deductions & Surcharges",
    href: "/itr-5-form",
    date: "Firm Tax Desk",
    readTime: "10 min read",
  },
  {
    title: "Tax Residency Certificate (TRC) & Electronic Form 10F Online Filing Guide",
    href: "/business-itr-filing",
    date: "Cross-Border Guide",
    readTime: "7 min read",
  },
];

const RELATED_SERVICES_TAGS = [
  "15CA 15CB Filing",
  "Form 15CA Online",
  "Form 15CB Certificate",
  "Foreign Remittance Compliance",
  "Section 195 TDS",
  "DTAA Treaty Benefit",
  "TRC Verification",
  "Form 10F E-Filing",
  "Outward Remittance India",
  "Form 27Q TDS Return",
  "CA UDIN Certification",
  "FEMA Compliance",
];

const POPULAR_SEARCHES_TAGS = [
  "Form 15CA online filing",
  "Form 15CB certificate CA cost",
  "when is 15CB required",
  "foreign remittance tax rate India",
  "difference between 15CA and 15CB",
  "Section 195 withholding tax",
  "Rule 37BB exempted list",
  "Form 15CA Part C filing process",
  "how to get Form 15CB online",
  "UDIN for Form 15CB",
  "penalty under Section 271-I",
  "TRC and Form 10F requirement",
];

function Form15caGuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Cross-Border Remittances: Statutory Mandate under Section 195 & Rule 37BB
        </h2>
        <p>
          Every person resident in India—whether an individual, partnership firm, LLP, private limited company, or trust—making an outward payment to a non-resident or foreign corporation must comply with the strict withholding tax framework mandated under <strong>Section 195 of the Income Tax Act, 1961</strong> and <strong>Rule 37BB of the Income Tax Rules, 1962</strong>.
        </p>
        <p>
          To prevent tax evasion and track cross-border capital flows, the Reserve Bank of India (RBI) and the Central Board of Direct Taxes (CBDT) mandate that Authorised Dealer (AD) banks cannot process outward telegraphic transfers without receiving electronic undertakings generated on the Income Tax Department's e-filing portal: <strong>Form 15CA</strong> (remitter self-declaration) and <strong>Form 15CB</strong> (Chartered Accountant audit certificate).
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Mandatory Banking Requirement:</strong> Under Section 195(6), any person responsible for paying to a non-resident any sum, whether or not chargeable to tax, shall furnish information relating to the payment in Form 15CA and Form 15CB. Banks will immediately reject foreign wire transfers without valid portal acknowledgments.
          </div>
        </div>
      </section>

      {/* Section 2: Core Differences Table */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Form 15CA vs. Form 15CB: Core Comparative Breakdown
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Distinguishing Feature</th>
                <th className="py-3.5 px-4 font-semibold text-blue-700">Form 15CA</th>
                <th className="py-3.5 px-4 font-semibold text-emerald-700">Form 15CB</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Legal Nature</td>
                <td className="py-3.5 px-4">Self-declaration and undertaking by remitter (payer)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Independent statutory audit certificate by practicing CA</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Submitted By</td>
                <td className="py-3.5 px-4">Remitter (Individual, Firm, Company, Trust)</td>
                <td className="py-3.5 px-4">Chartered Accountant holding Certificate of Practice (CoP)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Primary Objective</td>
                <td className="py-3.5 px-4">Declare payment details and confirm tax deduction to CBDT</td>
                <td className="py-3.5 px-4">Certify nature of income, applicable DTAA article, and TDS rate</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Unique Identifier</td>
                <td className="py-3.5 px-4">15-digit E-Filing Acknowledgment Number</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">18-digit Unique Document Identification Number (UDIN)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Threshold Applicability</td>
                <td className="py-3.5 px-4">Required for all foreign remittances (Parts A, B, C, D)</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Mandatory only when taxable remittance exceeds ₹5 Lakhs</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Filing Sequence</td>
                <td className="py-3.5 px-4">Filed AFTER obtaining Form 15CB acknowledgment (for Part C)</td>
                <td className="py-3.5 px-4">Issued and uploaded on the portal BEFORE Form 15CA Part C</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Non-Compliance Penalty</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">₹1,00,000 under Section 271-I + 100% expense disallowance</td>
                <td className="py-3.5 px-4 text-rose-600 font-medium">Disciplinary action by ICAI &amp; revenue investigation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The Four Parts of Form 15CA */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Structure of Form 15CA: Understanding Parts A, B, C & D
        </h2>
        <p>
          Form 15CA is divided into four distinct parts depending on the amount, taxability, and whether an Assessing Officer order has been obtained. Choosing the correct part is crucial to avoid return invalidation:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORM_15CA_PARTS.map((part, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${part.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {part.part}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${part.iconBox} transition-all shrink-0`}>
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${part.titleHover} transition-colors mb-2`}>
                {part.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {part.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Common Commercial Remittance Scenarios */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Common Commercial Remittance Scenarios Requiring 15CA / 15CB
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REMITTANCE_REASONS.map((item, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${item.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBox} mb-3.5 transition-all shrink-0`}>
                <Globe2 className="w-5 h-5" />
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

      {/* Section 5: Exempted Remittances under Rule 37BB */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Exempted Payments Under Rule 37BB: When Form 15CA is NOT Required
        </h2>
        <p>
          Under Rule 37BB(3) of the Income Tax Rules, the Central Board of Direct Taxes specifies 33 RBI purpose codes where <strong>neither Form 15CA nor Form 15CB</strong> is required to be furnished before initiating the transfer. Below are the primary commercial and personal exemptions:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Sr. No.</th>
                <th className="py-3.5 px-4 font-semibold">RBI Purpose Code Category</th>
                <th className="py-3.5 px-4 font-semibold">Exempted Nature of Foreign Remittance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">01</td>
                <td className="py-3 px-4 font-medium text-blue-600">Import of Goods (S0101 - S0109)</td>
                <td className="py-3 px-4">Advance payments and settlement for import of physical goods into India</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">02</td>
                <td className="py-3 px-4 font-medium text-emerald-600">Overseas Direct Investment (S0001 - S0005)</td>
                <td className="py-3 px-4">Indian investment abroad in equity capital, debt instruments, or overseas branches</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">03</td>
                <td className="py-3 px-4 font-medium text-purple-600">Education Abroad (S0305)</td>
                <td className="py-3 px-4">Remittances for tuition fees, boarding, and education loans for studies outside India</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">04</td>
                <td className="py-3 px-4 font-medium text-amber-600">Medical Treatment Abroad (S0304)</td>
                <td className="py-3 px-4">Remittance for medical treatment, hospital bills, and attendant expenses abroad</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">05</td>
                <td className="py-3 px-4 font-medium text-rose-600">Travel &amp; Tourism (S0301 - S0303)</td>
                <td className="py-3 px-4">Business travel expenses, holiday travel, conference ticketing, and lodging</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">06</td>
                <td className="py-3 px-4 font-medium text-teal-600">Freight &amp; Transportation (S0201 - S0208)</td>
                <td className="py-3 px-4">Payments for ocean shipping freight, air freight charges, container handling</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">07</td>
                <td className="py-3 px-4 font-medium text-indigo-600">Diplomatic &amp; Consular Remittances</td>
                <td className="py-3 px-4">Payments made by foreign embassies, diplomatic missions, and consular staff</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">08</td>
                <td className="py-3 px-4 font-medium text-slate-700">LRS Personal Remittances</td>
                <td className="py-3 px-4">Permitted maintenance of close relatives abroad under RBI Liberalised Remittance Scheme</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: When is 15CB Not Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Conditions When Form 15CB (CA Certificate) is NOT Required
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[13px]">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <strong className="text-blue-700 font-semibold block">1. Remittances Below ₹5 Lakhs:</strong>
            <p className="text-slate-600">When the remittance or aggregate remittances to a non-resident in a financial year do not exceed ₹5 Lakhs, only Part A of Form 15CA is required.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <strong className="text-purple-700 font-semibold block">2. Assessing Officer Order (Sec 195/197):</strong>
            <p className="text-slate-600">When the payer has obtained a certificate for nil/lower deduction under Section 195(2)/(3) or Section 197, only Part B of Form 15CA is filed.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <strong className="text-emerald-700 font-semibold block">3. Income Non-Chargeable to Tax:</strong>
            <p className="text-slate-600">When the payment is not chargeable to tax in India under domestic law or DTAA, the remitter files Part D of Form 15CA without CA certification.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <strong className="text-amber-700 font-semibold block">4. Payments on Rule 37BB Exempted List:</strong>
            <p className="text-slate-600">When the transaction falls under the 33 exempted RBI purpose codes (import of goods, overseas education, personal travel), neither form is required.</p>
          </div>
        </div>
      </section>

      {/* Section 7: Step-by-Step E-Filing Process */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Step-by-Step Online Filing Process for Form 15CB & Form 15CA
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

      {/* Section 8: Penalties & Legal Consequences */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Statutory Penalties & Legal Consequences of Non-Compliance
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Violation Type</th>
                <th className="py-3.5 px-4 font-semibold">Governing Section</th>
                <th className="py-3.5 px-4 font-semibold">Financial &amp; Legal Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Failure to File Form 15CA / 15CB</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 271-I</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Flat penalty of ₹1,00,000 per default</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Filing Inaccurate or False Particulars</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 271-I</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Penalty of ₹1,00,000 + penalty under 270A</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Non-Deduction of TDS on Remittance</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 40(a)(i)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">100% disallowance of expenditure in ITR</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Short Deduction / Late Deposit of TDS</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 201(1A)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Interest at 1.5% per month until deposit</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Processing Remittance Without 15CA</td>
                <td className="py-3.5 px-4 font-medium text-purple-600">Section 195(6)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Bank liable as assessee-in-default under Section 201</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Essential Document Checklist for Form 15CA & 15CB
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Remitter Identifiers:</strong>
            <span>PAN card, TAN (Tax Deduction Account Number), and active e-filing portal credentials of the remitting entity.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Commercial Agreement &amp; Invoice:</strong>
            <span>Copy of agreement/contract with the foreign party, detailed invoice, payment currency, and scope of work.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Tax Residency Certificate (TRC):</strong>
            <span>Valid TRC of the non-resident issued by their home tax jurisdiction covering the relevant financial year.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Electronic Form 10F:</strong>
            <span>Self-declaration in electronic Form 10F furnished on the income tax portal if TRC does not contain required fields.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">No-PE &amp; Beneficial Ownership:</strong>
            <span>Written declaration confirming the non-resident has no Permanent Establishment in India and is the beneficial owner.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">TDS Challan &amp; Bank Details:</strong>
            <span>Challan 281 proof of TDS deposit (if taxable), remitter bank account, SWIFT code, and Authorised Dealer branch.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Form15caPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 195 & Rule 37BB Compliant Foreign Remittance Desk"
      heroTitle={
        <>
          <span>Foreign Remittance Tax Compliance – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Form 15CA &amp; 15CB Filing
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Complete foreign remittance tax compliance under Section 195 of the Income Tax Act & Rule 37BB. Get Chartered Accountant certification (Form 15CB), DTAA tax residency evaluation, withholding tax (TDS) computation, and instant Form 15CA e-filing for outward bank wire transfers."
      formTitle="15CA - 15CB Remittance Desk"
      formSubtitle="Connect with our international tax Chartered Accountants for DTAA treaty relief, Form 15CB UDIN certification, and quick bank submission."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">15CA &amp; 15CB filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for basic Form 15CA self-declaration, complete CA-certified 15CB suite, or annual cross-border compliance."
      breadcrumbCurrent="15CA - 15CB Filing"
      guideTitle="Comprehensive Guide to Form 15CA & Form 15CB Filing for Foreign Remittances in India - AY 2026-27"
      guideContent={<Form15caGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Form 15CA & 15CB online filing, CA certification thresholds, Rule 37BB exemptions, and DTAA treaty benefits."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
