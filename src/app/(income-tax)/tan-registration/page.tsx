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
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Hash className="w-4 h-4" />, text: "10-Digit Alphanumeric TAN Allotment via Protean / NSDL (Form 49B)" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Mandatory Section 203A Compliance to Avoid ₹10,000 Penalties (Sec 272BB)" },
  { icon: <KeyRound className="w-4 h-4" />, text: "Complete Activation on Income Tax E-Filing Portal & TRACES System" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Enables Quarterly Form 24Q, 26Q, 27Q Filing & Form 16/16A Issuance" },
  { icon: <Award className="w-4 h-4" />, text: "Fast-Track Digital Allotment with 100% Online Document Verification" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "TAN Registration Basic",
    shortDesc: "End-to-end Form 49B drafting, document verification, and official TAN allotment letter delivery.",
    expandedDesc: "Ideal for newly incorporated companies, partnership firms, proprietary businesses, and charitable trusts needing a Tax Deduction and Collection Account Number (TAN) under Section 203A. Our compliance specialists verify your PAN and registered office address, prepare statutory Form 49B, handle NSDL/Protean portal submission, track application status, and deliver your digitally signed TAN allotment letter within 7-10 working days.",
    price: "₹988",
    priceSub: "One-Time Allotment / Lifetime Validity",
    badge: "Essential Compliance",
    features: [
      "Preparation & Online Submission of Statutory Form 49B",
      "PAN & Registered Entity Address Proof Verification",
      "Government Application Processing on Protean (NSDL) Portal",
      "15-Digit Acknowledgement Slip Generation for Instant Tracking",
      "Dispatch of Physical Acknowledgement to Facilitation Centre",
      "Real-Time Application Status Monitoring & Department Follow-Up",
      "Digitally Signed Official TAN Allotment Letter Delivery via Email",
      "Lifetime TAN Validity with Zero Renewal or Maintenance Charges",
    ],
  },
  {
    name: "TAN + Portal Activation Suite",
    popular: true,
    badge: "Most Popular",
    shortDesc: "TAN allotment plus complete registration and activation on the Income Tax E-Filing Portal and TRACES.",
    expandedDesc: "Our most popular comprehensive onboarding package. In addition to securing your 10-digit TAN number, our chartered accountants complete formal user registration on the official Income Tax e-filing portal (incometax.gov.in) and create your deductor account on the TRACES portal (tdscpc.gov.in). We configure authorized signatories, link Digital Signature Certificates (DSC) where applicable, and provide a 30-minute consultation on statutory TDS deduction rates.",
    price: "₹2,499",
    priceSub: "Complete Deductor Setup / All-Inclusive",
    features: [
      "Everything in the TAN Registration Basic Package",
      "Formal User Account Registration on Income Tax Portal (incometax.gov.in)",
      "TRACES Deductor Profile Creation & Password Setup (tdscpc.gov.in)",
      "Principal Officer & Authorized Signatory Credential Verification",
      "Class 3 Digital Signature Certificate (DSC) Portal Configuration",
      "Statutory TDS Threshold & Rate Chart Advisory (Sections 192, 194C, 194J, 194I)",
      "E-Pay Tax Challan 281 Generation Guidance for Monthly TDS Deposits",
      "Dedicated Tax Specialist Support via Priority Email and WhatsApp",
    ],
  },
  {
    name: "TAN & Quarterly TDS Retainer",
    shortDesc: "Complete TAN registration, portal activations, and filing of your first quarterly TDS return.",
    expandedDesc: "Designed for expanding businesses, contractors, startups, and LLPs hiring employees or engaging professional vendors. Covers complete TAN allotment, full activation on ITD and TRACES portals, and end-to-end preparation, validation, and electronic filing of your first quarterly TDS return (Form 24Q for salary or Form 26Q for non-salary vendor payments) including generation of official Form 16 / 16A certificates.",
    price: "₹6,999",
    priceSub: "Setup + 1st Quarter TDS Filing Included",
    badge: "Complete Deductor Suite",
    features: [
      "Everything in the TAN + Portal Activation Suite",
      "Preparation, FVU Validation & Filing of 1st Quarter TDS Return (Form 24Q or 26Q)",
      "Challan 281 Reconciliation with Deductee PANs on TRACES",
      "Generation & Download of Digitally Signed Form 16 / 16A Certificates",
      "Quarterly Due Date Monitoring & Reminder Desk",
      "Correction Statement Drafting (if required for challan mismatch)",
      "Section 234E & Section 271H Compliance Safeguard",
      "Direct Senior CA Consultation for Cross-Border / Vendor Contracts",
    ],
  },
];

const ELIGIBLE_ENTITIES = [
  {
    title: "Private & Public Companies",
    desc: "All corporate entities registered under the Companies Act, 2013 deducting TDS on employee salaries, office rent, vendor contracts, professional fees, and director remuneration.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Partnership Firms & LLPs",
    desc: "Firms and Limited Liability Partnerships paying salaries, interest on partner capital, legal/consulting fees, contractor payments, and rent exceeding statutory thresholds.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Sole Proprietors & HUFs (Audit Cases)",
    desc: "Proprietors and Hindu Undivided Families whose turnover exceeds Section 44AB tax audit limits (₹1 Cr / ₹10 Cr), making them statutorily liable to deduct TDS on business payments.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Trusts, Societies & NGOs",
    desc: "Charitable and religious institutions registered under Section 12AB making payments to civil contractors, event managers, software vendors, and administrative employees.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Government Departments & Local Bodies",
    desc: "Central and state government offices, statutory boards, defense departments, and municipal corporations executing public infrastructure contracts and paying official salaries.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "E-Commerce Operators",
    desc: "Digital marketplace operators liable to collect Tax Collected at Source (TCS) under Section 206C(1H) / 194-O on payments made to sellers and marketplace participants.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const TAN_BENEFITS = [
  {
    title: "Mandatory Statutory Compliance",
    desc: "Fulfills strict legal requirements under Section 203A of the Income Tax Act, 1961. Essential for any entity legally deducting TDS or collecting TCS in India.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Avoidance of ₹10,000 Penalties",
    desc: "Section 272BB levies a flat penalty of ₹10,000 for failing to obtain TAN or failing to quote TAN in quarterly statements, payment challans, and tax certificates.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Enables Form 16 / 16A Issuance",
    desc: "Without an active TAN, deductors cannot log into the TRACES system to download digitally signed Form 16 (for employees) or Form 16A (for vendors and landlords).",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Seamless Form 26AS Tax Credits",
    desc: "Ensures taxes deducted from employees, contractors, and suppliers are accurately credited to their Form 26AS and AIS, preventing vendor disputes and tax notices.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Foreign Remittance Processing",
    desc: "Mandatory for filing Form 15CA and obtaining Form 15CB when remitting taxable funds abroad to foreign software companies, consultants, or foreign parent entities.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Lifetime Permanent Validity",
    desc: "Once allotted by the Income Tax Department, a TAN number is permanently valid for the entire lifetime of the business entity with zero renewal fees or recurring re-applications.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "Step 01",
    title: "Entity Document Collection",
    desc: "Collate entity PAN card, Certificate of Incorporation or Partnership Deed, registered office address proof, and details of the Principal Officer / Director.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 02",
    title: "Drafting Statutory Form 49B",
    desc: "Our legal desk prepares Form 49B online selecting the correct deductor category, assessing officer jurisdiction code, and designated person particulars.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 03",
    title: "NSDL / Protean Portal Filing",
    desc: "Submit Form 49B on the Protean (NSDL) TIN portal. Process official application processing fees and generate the 14/15-digit statutory acknowledgement receipt.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 04",
    title: "Acknowledgement Submission",
    desc: "The signed acknowledgement form along with verified supporting documentation is dispatched to the Protean NSDL central processing office in Pune.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 05",
    title: "Department Verification & Status Tracking",
    desc: "Income Tax Department authorities review the application, cross-verify entity PAN records with CBDT databases, and generate the unique 10-digit TAN number.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "TAN Allotment Letter & Portal Setup",
    desc: "Receive the official digitally signed TAN allotment letter. We register and activate your TAN credentials on incometax.gov.in and TRACES for quarterly filings.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is TAN registration number?",
    a: "TAN stands for Tax Deduction and Collection Account Number. It is a unique 10-digit alphanumeric code issued by the Income Tax Department of India under Section 203A of the Income Tax Act, 1961 to persons and entities responsible for deducting tax at source (TDS) or collecting tax at source (TCS).",
  },
  {
    q: "Who needs to obtain a TAN in India?",
    a: "Every individual, firm, LLP, company, local authority, trust, or government office that makes payments subject to TDS (such as salaries, contractor fees, rent, professional services, or interest) or collects TCS must obtain a TAN before deducting or depositing taxes.",
  },
  {
    q: "Why is a TAN number required?",
    a: "Section 203A mandates that TAN must be quoted in all TDS/TCS payment challans (Challan 281), quarterly TDS/TCS return statements (Form 24Q, 26Q, 27Q, 27EQ), TDS certificates issued to payees (Form 16/16A), Form 15CA/15CB for foreign remittances, and all correspondence with the Income Tax Department.",
  },
  {
    q: "What is the validity of a TAN number?",
    a: "A TAN number is valid for the lifetime of the entity. Once allotted, it does not require renewal, annual maintenance, or reapplication. The same TAN is used for all quarterly TDS filings indefinitely.",
  },
  {
    q: "What is the difference between PAN and TAN?",
    a: "PAN (Permanent Account Number) is used for overall taxpayer identification, paying direct taxes, and filing annual income tax returns (ITR). In contrast, TAN (Tax Deduction and Collection Account Number) is specifically used by entities that deduct or collect tax on behalf of the government from third parties (employees, vendors, landlords).",
  },
  {
    q: "What is the penalty for not having or not quoting a TAN?",
    a: "Under Section 272BB of the Income Tax Act, failure to apply for a TAN or failing to quote the allotted TAN in TDS challans, returns, or certificates attracts a mandatory flat penalty of ₹10,000 per violation.",
  },
];

const FAQ_COL_2 = [
  {
    q: "How is the 10-digit TAN number structured?",
    a: "A TAN number follows a specific structure: (1) First 3 characters are alphabetic, representing the city jurisdiction code (e.g., MUM for Mumbai, DEL for Delhi, BLR for Bengaluru); (2) 4th character is the initial letter of the deductor's legal name; (3) Next 5 characters are unique sequential numerals; (4) 10th character is an alphabetic check digit (e.g., MUMD12345F).",
  },
  {
    q: "Do sole proprietors need to obtain a TAN?",
    a: "A sole proprietor must obtain a TAN if their business turnover exceeds the tax audit limit under Section 44AB (₹1 Crore for business or ₹10 Crores for digital transactions / ₹50 Lakhs for professionals), or if they pay rent exceeding ₹50,000 per month under commercial leases requiring standard TDS under Section 194I.",
  },
  {
    q: "When is TAN NOT required for individuals?",
    a: "Under Section 194-IA (TDS on purchase of immovable property over ₹50 Lakhs) and Section 194-IB (TDS on residential rent over ₹50,000/month by individuals not under audit), individuals can deduct and deposit TDS using their PAN via Form 26QB or Form 26QC without obtaining a TAN.",
  },
  {
    q: "What documents are required for TAN application in Form 49B?",
    a: "Required documents include: (1) PAN card of the entity or individual; (2) Certificate of Incorporation, Partnership Deed, or Trust Deed; (3) Proof of registered office address (utility bill, lease agreement); (4) Identity and address proof of the Principal Officer, Director, Partner, or Karta.",
  },
  {
    q: "How long does it take to get a TAN number allotted?",
    a: "Once Form 49B is submitted online and verified, the Income Tax Department typically allots the TAN number within 7 to 10 working days. An instant 14/15-digit acknowledgement number is generated immediately upon filing.",
  },
  {
    q: "Can an entity hold more than one TAN?",
    a: "No. Under the Income Tax Act, holding or using more than one TAN for the same business entity is illegal. If multiple TANs have been inadvertently allotted, the excess TANs must be formally surrendered to avoid penalties under Section 272BB.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How do you activate a newly allotted TAN on the Income Tax Portal?",
    a: "Visit incometax.gov.in, click 'Register', choose 'Taxpayer' and select user type as 'Tax Deductor & Collector'. Enter the 10-digit TAN, provide the entity's incorporation date, verify via OTP sent to registered mobile and email, and set the portal password. The TAN is then fully active for e-filing.",
  },
  {
    q: "What is TRACES and why must TAN be registered on it?",
    a: "TRACES (TDS Reconciliation Analysis and Correction Enabling System) at tdscpc.gov.in is the CBDT's official portal for deductors. Registering your TAN on TRACES is mandatory to download Form 16 / 16A certificates, view Form 26AS matching, check TDS defaults, and file online correction returns.",
  },
  {
    q: "Can a TAN be updated or corrected if the company changes its address or name?",
    a: "Yes. In case of change in entity name, registered office address, or authorized principal officer, a TAN Correction / Change Request application must be filed online using Form 49B on the Protean NSDL portal with supporting legal evidence.",
  },
  {
    q: "Is TAN mandatory for filing Form 15CA and Form 15CB for foreign remittances?",
    a: "Yes. When making taxable payments to non-residents under Section 195, the Indian remitter must quote their TAN to deposit withholding tax and submit the quarterly non-resident TDS return in Form 27Q.",
  },
  {
    q: "What is the official government fee for TAN application?",
    a: "The statutory government processing fee for Form 49B on the Protean NSDL TIN portal is ₹65 plus 18% GST (total ₹77). Professional assistance fees for document validation, drafting, and portal setup are charged separately.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Can a branch office of a company have a separate TAN?",
    a: "Yes. If a company operates autonomous branch offices or factory locations that maintain separate payrolls or accounts, each branch can obtain a distinct branch TAN to deduct and file TDS locally.",
  },
  {
    q: "What happens if TDS is deducted but not deposited in the government account?",
    a: "Deducting TDS and failing to deposit it by the 7th of the following month attracts mandatory interest under Section 201(1A) at 1.5% per month, potential disallowance of expenditure under Section 40(a)(ia), and criminal prosecution under Section 276B.",
  },
  {
    q: "How can I verify the authenticity of an allotted TAN number online?",
    a: "You can verify any TAN number on the Income Tax e-Filing portal under 'Quick Links > Know Your TAN'. Enter the deductor category, state, and registered mobile number to confirm active status and jurisdiction.",
  },
  {
    q: "What is Challan 281 and how is TAN used with it?",
    a: "Challan ITNS 281 is the dedicated tax payment voucher used to deposit TDS and TCS amounts into authorized bank branches or online via e-Pay Tax. Quoting the correct TAN on Challan 281 is mandatory to credit the deposit against the deductor's quarterly return.",
  },
  {
    q: "How does Merrafilings assist with TAN registration and compliance?",
    a: "Merrafilings manages the complete TAN lifecycle: drafting Form 49B, processing government submissions, securing fast-track allotment, activating credentials on both Income Tax and TRACES portals, and handling your ongoing quarterly TDS returns.",
  },
];

const RELATED_GUIDES = [
  {
    title: "TAN Registration: A Comprehensive Guide for Businesses in India",
    href: "/tan-registration/tan-registration-guide-for-businesses",
    date: "Business Guide",
    readTime: "7 min read",
  },
  {
    title: "Online TAN Number Application Process in India: Step-by-Step Guide",
    href: "/tan-registration/online-tan-application-process-india",
    date: "Online Application",
    readTime: "8 min read",
  },
  {
    title: "TAN Registration in India: Process, Compliance, and Key Updates Explained",
    href: "/tan-registration/tan-registration-process-compliance-updates",
    date: "Compliance & Updates",
    readTime: "8 min read",
  },
  {
    title: "TAN Registration Essential Guide for Indian Businesses",
    href: "/tan-registration/tan-registration-guide-for-indian-businesses",
    date: "Essential Guide",
    readTime: "7 min read",
  },
  {
    title: "Understanding TAN Registration: Key Steps Explained",
    href: "/tan-registration/tan-registration-key-steps-explained",
    date: "Key Steps Explained",
    readTime: "8 min read",
  },
];

const RELATED_SERVICES_TAGS = [
  "TAN Registration",
  "Form 49B Filing",
  "Tax Deductor Account",
  "TDS Return Filing",
  "TRACES Portal Activation",
  "Section 203A Compliance",
  "Challan 281 Payment",
  "Form 16 Issuance",
  "Form 16A Certificate",
  "Section 272BB Penalty",
  "Corporate Tax Setup",
  "Protean NSDL TIN",
];

const POPULAR_SEARCHES_TAGS = [
  "TAN registration online",
  "how to apply for TAN number",
  "Form 49B online application",
  "difference between PAN and TAN",
  "TAN number format explained",
  "TAN registration fees India",
  "who needs TAN registration",
  "penalty for not having TAN",
  "activate TAN on income tax portal",
  "check TAN application status",
  "TRACES portal registration with TAN",
  "TAN customer care helpline",
];

function TanGuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is TAN Registration? Legal Mandate under Section 203A
        </h2>
        <p>
          <strong>TAN (Tax Deduction and Collection Account Number)</strong> is a unique 10-digit alphanumeric identifier issued by the Income Tax Department of India under <strong>Section 203A of the Income Tax Act, 1961</strong>. Every person or commercial entity responsible for deducting Tax Deducted at Source (TDS) or collecting Tax Collected at Source (TCS) must mandatorily obtain a TAN before carrying out any taxable business payments.
        </p>
        <p>
          TAN must be quoted in all TDS payment challans, quarterly TDS returns (Forms 24Q, 26Q, 27Q, 27EQ), TDS certificates (Form 16/16A), and cross-border remittance declarations (Form 15CA/15CB). Quoting an incorrect TAN or failing to obtain a TAN attracts a mandatory flat penalty of <strong>₹10,000 under Section 272BB</strong> of the Act.
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Lifetime Validity:</strong> Once allotted by the Income Tax Department via Protean (NSDL e-Gov) or UTIITSL, a TAN number is permanently valid across India for the entire lifetime of the entity with zero renewal fees.
          </div>
        </div>
      </section>

      {/* Section 2: Difference between TAN and PAN */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Comparative Analysis: Difference Between TAN and PAN
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Distinguishing Feature</th>
                <th className="py-3.5 px-4 font-semibold text-blue-700">TAN (Tax Deduction &amp; Collection Number)</th>
                <th className="py-3.5 px-4 font-semibold text-emerald-700">PAN (Permanent Account Number)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Governing Section</td>
                <td className="py-3.5 px-4">Section 203A of Income Tax Act, 1961</td>
                <td className="py-3.5 px-4">Section 139A of Income Tax Act, 1961</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Primary Objective</td>
                <td className="py-3.5 px-4 text-blue-700 font-medium">Deducting TDS and collecting TCS on behalf of CBDT</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Taxpayer identification, paying tax, filing annual ITR</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Application Form</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Form 49B</td>
                <td className="py-3.5 px-4">Form 49A (Domestic) / Form 49AA (Foreign)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Mandatory For</td>
                <td className="py-3.5 px-4">Employers, firms, companies making specified payments</td>
                <td className="py-3.5 px-4">All earning individuals, businesses, bank accounts</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Alphanumeric Structure</td>
                <td className="py-3.5 px-4">10 characters (e.g., MUMD12345F - City code based)</td>
                <td className="py-3.5 px-4">10 characters (e.g., ABCDE1234F - Status based)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Non-Compliance Penalty</td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">₹10,000 under Section 272BB</td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">₹10,000 under Section 272B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: 10-Digit TAN Structure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Structure of a TAN Number: Decoding the 10-Character Code
        </h2>
        <p>
          Every TAN number issued by the Income Tax Department follows a strict logical structure that encodes geographic jurisdiction and legal entity characteristics:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-[13px]">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              1st to 3rd Characters
            </span>
            <strong className="text-slate-900 block font-semibold">Jurisdiction / City Code</strong>
            <p className="text-slate-600">Three alphabetic letters representing the location of the Assessing Officer (e.g., <strong>MUM</strong> for Mumbai, <strong>DEL</strong> for Delhi, <strong>CHE</strong> for Chennai).</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
              4th Character
            </span>
            <strong className="text-slate-900 block font-semibold">Entity Initial Letter</strong>
            <p className="text-slate-600">Single alphabetic character matching the first letter of the deductor's legal name or company trade name (e.g., <strong>D</strong> for Delta Corp).</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              5th to 9th Characters
            </span>
            <strong className="text-slate-900 block font-semibold">Sequential Number</strong>
            <p className="text-slate-600">Five numeric digits generated sequentially by the Central Processing System (e.g., <strong>12345</strong>).</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              10th Character
            </span>
            <strong className="text-slate-900 block font-semibold">Check Digit</strong>
            <p className="text-slate-600">Final single alphabetic letter acting as a mathematical checksum to prevent clerical errors (e.g., <strong>F</strong>).</p>
          </div>
        </div>
      </section>

      {/* Section 4: Who Needs TAN */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Entities Statutorily Required to Obtain TAN in India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ELIGIBLE_ENTITIES.map((item, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${item.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBox} mb-3.5 transition-all shrink-0`}>
                <Building2 className="w-5 h-5" />
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

      {/* Section 5: Benefits */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Core Advantages & Compliance Benefits of Securing a TAN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TAN_BENEFITS.map((b, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${b.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${b.iconBox} mb-3 transition-all shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${b.titleHover} transition-colors mb-2`}>
                {b.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Step-by-Step Registration */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Step-by-Step TAN Registration Process via Form 49B
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REGISTRATION_STEPS.map((step, idx) => (
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
          7. Statutory Penalties for TAN Non-Compliance under Income Tax Act
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Violation / Default</th>
                <th className="py-3.5 px-4 font-semibold">Governing Section</th>
                <th className="py-3.5 px-4 font-semibold">Statutory Penalty / Consequence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Failure to apply for TAN</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 272BB(1)</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Flat penalty of ₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Quoting false or incorrect TAN</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 272BB(1A)</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Flat penalty of ₹10,000</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Failure to quote TAN in Challan 281</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 203A</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Bank rejection &amp; uncredited TDS payment</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Delayed deposit of deducted TDS</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 201(1A)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Interest at 1.5% per month until payment</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Late filing of quarterly TDS returns</td>
                <td className="py-3.5 px-4 font-medium text-purple-600">Section 234E</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Mandatory fee of ₹200 per day of delay</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Non-filing of TDS returns (&gt;1 year)</td>
                <td className="py-3.5 px-4 font-medium text-purple-600">Section 271H</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Penalty from ₹10,000 up to ₹1,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Documentation Checklist for Form 49B TAN Application
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Entity Proof &amp; PAN Card:</strong>
            <span>PAN card copy of the company, LLP, firm, trust, or individual applicant.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Incorporation / Deed Proof:</strong>
            <span>Certificate of Incorporation (CIN), registered Partnership Deed, or Trust Deed.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Registered Address Proof:</strong>
            <span>Electricity bill, telephone bill, bank statement, or registered lease agreement of office.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Principal Officer Particulars:</strong>
            <span>PAN card, Aadhaar card, designation, and mobile/email of the Director, Partner, or Karta.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Assessing Officer Code:</strong>
            <span>AO Code, Area Code, Range Code, and AO Type mapped to the applicant's registered pin code.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Digital Signature (If Online):</strong>
            <span>Class 3 DSC of the authorized signatory for paperless online submission.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function TanRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 203A Compliant Tax Deductor Registration Desk"
      heroTitle={
        <>
          <span>TAN Registration Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Form 49B Allotment
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Obtain your 10-digit Tax Deduction and Collection Account Number (TAN) under Section 203A of the Income Tax Act. Complete Form 49B preparation, Protean NSDL e-filing, and instant activation on incometax.gov.in and TRACES portals to avoid ₹10,000 penalties."
      formTitle="Apply for TAN Registration"
      formSubtitle="Connect with our corporate tax desk for Form 49B drafting, document validation, and quick digital TAN allotment."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">TAN registration fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for basic Form 49B TAN allotment, portal activation suite, or full quarterly TDS compliance."
      breadcrumbCurrent="TAN Registration"
      guideTitle="Comprehensive Guide to TAN Registration (Form 49B) & Tax Deductor Compliance in India - AY 2026-27"
      guideContent={<TanGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about TAN registration, Form 49B filing, difference between PAN and TAN, and TRACES portal activation."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
