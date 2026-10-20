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
  Gavel,
  ShieldAlert,
  SendHorizontal,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Gavel className="w-4 h-4" />, text: "Expert Notice Analysis & Response Drafting by Senior Chartered Accountants" },
  { icon: <KeyRound className="w-4 h-4" />, text: "Mandatory Document Identification Number (DIN) Verification on IT Portal" },
  { icon: <Scale className="w-4 h-4" />, text: "Comprehensive Defense for Sections 143(1), 143(2), 142(1), 148 & 139(9)" },
  { icon: <ShieldAlert className="w-4 h-4" />, text: "Prevention of Ex-Parte Best Judgment Assessments under Section 144" },
  { icon: <Award className="w-4 h-4" />, text: "Complete E-Proceedings Portal Submission & Timely Stay on Tax Demands" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Notice Review & Legal Opinion",
    shortDesc: "Preliminary analysis, DIN authentication, and strategic advisory report on department notice.",
    expandedDesc: "Designed for taxpayers who have received an intimation, query, or notice from the Income Tax Department and require immediate clarity. A senior tax partner verifies the notice's Document Identification Number (DIN) on incometax.gov.in, examines the underlying tax discrepancy against your filed ITR, Form 26AS, and AIS data, and issues a formal written legal opinion outlining the exact documents, response strategy, and deadline requirements.",
    price: "₹2,899",
    priceSub: "Per Notice / Advisory Report Included",
    badge: "Initial Diagnostic",
    features: [
      "Document Identification Number (DIN) Authenticity Verification",
      "Statutory Root Cause Analysis (Form 26AS / AIS / SFT Mismatch)",
      "Examination of Applicable Section (139(9), 142(1), 143(1), 143(2))",
      "Evaluation of Outstanding Tax Demand, Interest & Penalties",
      "Detailed Written Legal Strategy & Document Checklist",
      "30-Minute One-on-One Consultation with Senior Tax Partner",
      "Assessment of Revision (139(5)) or Rectification (154) Feasibility",
      "Same-Day Turnaround for Urgent Notice Deadlines",
    ],
  },
  {
    name: "Notice Drafting & E-Filing Response",
    popular: true,
    badge: "Most Popular",
    shortDesc: "End-to-end legal response drafting, reconciliation compilation, and portal submission.",
    expandedDesc: "Our flagship notice resolution service. A practicing Chartered Accountant handles your complete reply to notices issued under Section 139(9) (defective return), Section 142(1) (inquiry), Section 143(1) (adjustment demand), or Section 245 (refund adjustment). We reconcile transactions with bank statements and invoices, draft a point-by-point formal legal reply quoting judicial precedents, upload supporting evidence on the e-Proceedings portal, and obtain official submission acknowledgment.",
    price: "₹9,899",
    priceSub: "Complete Resolution / Single Notice Response",
    features: [
      "Everything in the Notice Review Package",
      "Point-by-Point Formal Legal Response Drafting by Practicing CA",
      "Complete Financial Reconciliation of Discrepant Income / Deductions",
      "Compilation & Digital Tagging of Supporting Documentary Evidence",
      "Filing Corrected ITR or Rectification under Section 154 (if required)",
      "Official E-Proceedings Submission on incometax.gov.in",
      "Representation via Digital Written Submissions before the Assessing Officer",
      "Continuous Monitoring Until Formal Order / Intimation Closure",
    ],
  },
  {
    name: "Comprehensive Scrutiny Defense Suite",
    shortDesc: "End-to-end defense for complex scrutiny assessments under Section 143(2), 148, or Section 144.",
    expandedDesc: "Tailored for high-net-worth individuals, companies, and partnership firms facing full faceless scrutiny assessments under Section 143(2), reassessment proceedings under Section 148 (income escaping assessment), or best-judgment notices under Section 144. Includes comprehensive paper-book compilation, multiple rounds of written submissions, bank statement transaction forensics, capital gains / SFT transaction defense, and penalty waiver petitions under Section 270A/271.",
    price: "₹19,899",
    priceSub: "Full Assessment Retainer / Multi-Round Defense",
    badge: "Complete Scrutiny Suite",
    features: [
      "Dedicated Senior Ex-Department / Senior Partner CA Assigned",
      "Comprehensive Defense for Section 143(2) Scrutiny & Section 148 Reassessment",
      "Preparation of Exhaustive Legal Paper-Book & Forensic Financial Schedules",
      "Multi-Round Written Submissions on Faceless Assessment Scheme",
      "High-Value SFT Cash / Property / Share Transaction Justification",
      "Capital Gains Indexation & Reinvestment (Sec 54/54F) Re-Verification",
      "Drafting of Applications for Stay of Demand under Section 220(6)",
      "Penalty Proceedings Representation & Mitigation Petitions",
      "Direct Priority Escalation Line with Lead Tax Litigation Desk",
    ],
  },
];

const NOTICE_TYPES = [
  {
    section: "Section 143(1)",
    title: "Summary Processing Intimation",
    desc: "Computerized processing notice issued by CPC Bengaluru detailing differences between income declared and tax computed, resulting in either a tax refund, zero balance, or a formal tax demand.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    section: "Section 139(9)",
    title: "Defective Return Notice",
    desc: "Issued when an ITR contains fatal errors, missing schedules, unpaid self-assessment tax, or un-audited books. The taxpayer must rectify defects within 15 days, failing which the return is treated as invalid.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    section: "Section 142(1)",
    title: "Inquiry Notice Before Assessment",
    desc: "Issued by the Assessing Officer requiring the taxpayer to file an overdue income tax return, produce specific books of accounts, or furnish bank statements and expense vouchers for verification.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    section: "Section 143(2)",
    title: "Scrutiny Assessment Notice",
    desc: "Formal selection of your return for detailed audit under the Faceless Assessment Scheme. Requires comprehensive verification of claims, deductions, exemptions, and source of funds.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    section: "Section 148",
    title: "Income Escaping Assessment",
    desc: "Reassessment notice issued when the tax department has credible evidence that taxable income has escaped assessment in previous years (up to 3 years or 5 years for income > ₹50 Lakhs).",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    section: "Section 245",
    title: "Adjustment of Refund Against Demand",
    desc: "Notice of proposed adjustment where the department intends to offset a current-year refund against past unpaid tax demands. Taxpayer has 30 days to agree, disagree, or partially agree.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const COMMON_REASONS = [
  {
    title: "Mismatch with Form 26AS & AIS / TIS",
    desc: "The department's automated algorithms cross-verify reported revenues against TDS certificates, bank interest disclosures, dividend distributions, and high-value transactions in the Annual Information Statement.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Non-Filing or Late Filing of ITR",
    desc: "Taxpayers whose gross income exceeds basic exemption limits or who meet mandatory filing criteria (electricity bills > ₹1 Lakh, foreign travel > ₹2 Lakhs, bank deposits > ₹50 Lakhs) but failed to file on time.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "High-Value Financial Transactions (SFT)",
    desc: "Large cash deposits in savings/current accounts, purchase of immovable properties over ₹30 Lakhs, credit card bill payments over ₹10 Lakhs, or mutual fund investments reported by third-party financial institutions.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Excessive or Fraudulent Deduction Claims",
    desc: "Unusually high deductions claimed under Chapter VIA (Sections 80C, 80D, 80G donations, 80E) or disproportionate House Rent Allowance (HRA) and LTA claims not matching salary slips or Form 16.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Selection for Computerized Scrutiny (CASS)",
    desc: "Returns selected based on predetermined risk parameters through Computer Assisted Scrutiny Selection (CASS) to verify aggressive tax positions, loss claims, or sharp declines in gross profit margins.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Undisclosed Foreign Assets / Foreign Income",
    desc: "Failure to disclose foreign bank accounts, shares in foreign entities (e.g., US stocks, ESOPs), or overseas property in Schedule FA attracts immediate scrutiny under the Black Money Act.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const RESPONSE_STEPS = [
  {
    step: "Step 01",
    title: "Authenticate Notice DIN",
    desc: "Log in to incometax.gov.in. Verify the unique Document Identification Number (DIN) under 'Authenticate Notice Issued by ITD' to confirm legal validity and jurisdiction.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "Step 02",
    title: "Analyze Root Discrepancy",
    desc: "Our chartered accountants examine the specific section, assessment year, and reasons stated by the Assessing Officer against your books, bank accounts, and Form 26AS/AIS.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "Step 03",
    title: "Collate Evidentiary Documentation",
    desc: "Gather bank transaction statements, investment receipts, purchase deeds, tax deduction certificates, and vendor ledgers to prepare comprehensive proof of explanation.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "Step 04",
    title: "Draft Formal Legal Reply",
    desc: "Prepare a point-by-point legal response addressing every departmental inquiry, citing statutory sections, circulars, and binding judicial precedents supporting your tax position.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "Step 05",
    title: "E-Proceedings Portal Submission",
    desc: "Submit the drafted response online under Pending Actions > e-Proceedings. Upload digitally signed PDF attachments and select appropriate status (Agree / Disagree).",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "Step 06",
    title: "Order Tracking & Case Closure",
    desc: "Obtain official submission acknowledgment. We monitor departmental assessment orders, rectification outcomes under Section 154, and verify cancellation of disputed demands.",
    color: "teal",
    cardHover: "hover:border-teal-500 hover:shadow-teal-500/15 hover:bg-teal-50/20",
    titleHover: "group-hover:text-teal-700",
    iconBox: "bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-100/80 group-hover:border-teal-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is an Income Tax Notice?",
    a: "An Income Tax Notice is an official communication issued by the Income Tax Department of India to a taxpayer seeking clarification, demanding payment of outstanding taxes, calling for additional documents, or notifying selection for scrutiny assessment under specific provisions of the Income Tax Act, 1961.",
  },
  {
    q: "How do I check if an Income Tax Notice is genuine?",
    a: "Every authentic notice issued by the Income Tax Department since October 2019 carries a mandatory computer-generated Document Identification Number (DIN). You can authenticate any notice by visiting incometax.gov.in and clicking 'Authenticate Notice/Order Issued by ITD' under Quick Links, or checking 'e-Proceedings' after logging in.",
  },
  {
    q: "What is a Section 143(1) Intimation Notice?",
    a: "Section 143(1) is an automated summary assessment intimation sent by CPC Bengaluru after computerized processing of your filed ITR. It highlights any arithmetical errors, tax credit mismatches, or incorrect deduction claims, and concludes with either a tax refund, a demand for additional tax, or confirmation of zero balance.",
  },
  {
    q: "What should I do if I receive a Defective Return notice under Section 139(9)?",
    a: "A notice under Section 139(9) is issued when your return contains errors such as unpaid taxes, missing balance sheets, or incomplete schedules. You must file a corrected return within 15 days from the date of receiving the notice. Failure to respond within 15 days results in the return being treated as invalid (deemed never filed).",
  },
  {
    q: "What is the difference between a Section 142(1) and a Section 143(2) notice?",
    a: "A Section 142(1) notice is an inquiry notice calling for specific accounts, documents, or an overdue tax return before assessment. A Section 143(2) notice is a formal Scrutiny Assessment notice indicating that your return has been selected for in-depth examination under the Faceless Assessment Scheme.",
  },
  {
    q: "What is a Section 148 Reassessment Notice?",
    a: "Section 148 is issued when the Assessing Officer has 'information suggesting that income chargeable to tax has escaped assessment'. Under recent amendments, notices can generally be issued up to 3 years from the end of the relevant assessment year, or up to 5 years if escaped income is ₹50 Lakhs or more.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What happens if I ignore an Income Tax Notice?",
    a: "Ignoring a notice triggers severe legal consequences: (1) Best judgment ex-parte assessment under Section 144, where the officer determines taxable income unilaterally; (2) Penalty of ₹10,000 for each failure under Section 272A; (3) Penalty of 50% to 200% under Section 270A; (4) Prosecution under Section 276C; and (5) Bank account attachments.",
  },
  {
    q: "What is a Notice of Demand under Section 156?",
    a: "Section 156 is issued when any tax, interest, or penalty is determined as payable by the taxpayer following an order or assessment. The demand must be paid within 30 days of receiving the notice, failing which interest at 1% per month under Section 220(2) starts accruing, and recovery proceedings begin.",
  },
  {
    q: "What is a Section 245 notice for adjustment of refund?",
    a: "Section 245 gives the department the right to set off an income tax refund due for the current assessment year against outstanding tax demands from earlier years. The taxpayer is given 30 days to agree, disagree, or partially agree with the proposed adjustment on the portal.",
  },
  {
    q: "Can I respond to an Income Tax Notice online without visiting the tax office?",
    a: "Yes, 100%. Under India's Faceless Assessment and E-Proceedings regime, all notices must be answered electronically on the Income Tax portal under 'Pending Actions > e-Proceedings'. Physical visits to income tax offices are completely eliminated.",
  },
  {
    q: "What is the deadline for responding to an income tax notice?",
    a: "The response deadline is strictly specified in the notice itself, typically ranging from 15 days to 30 days from the date of service. If you require more time to gather records, an online adjournment request can be submitted through the portal before the deadline expires.",
  },
  {
    q: "What should I do if a notice shows tax demand due to TDS mismatch?",
    a: "If the demand is due to unmatched TDS credit, verify whether the deductor has filed their quarterly return correctly and quoted your correct PAN. If the deductor made an error, request them to file a correction statement; alternatively, file a rectification request under Section 154.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Can a Revised Return be filed after receiving a Section 143(1) intimation?",
    a: "Yes, provided the deadline for filing a revised return under Section 139(5) (i.e., 31st December of the assessment year) has not expired. If the deadline has passed, your remedy is to file a Rectification Application under Section 154 or an Updated Return (ITR-U) under Section 139(8A).",
  },
  {
    q: "What is a Rectification Application under Section 154?",
    a: "Section 154 allows taxpayers to request correction of any mistake apparent from the record in an order or intimation passed by the Assessing Officer or CPC. Common grounds include TDS mismatch, arithmetic errors, and non-credit of advance tax payments.",
  },
  {
    q: "How does the Faceless Assessment Scheme work for scrutiny notices?",
    a: "Under the Faceless Assessment Scheme, all cases are allocated randomly to Assessment Units across India via dynamic automated algorithms. All communication, queries, responses, and draft assessment orders are exchanged digitally via the e-filing portal with complete anonymity.",
  },
  {
    q: "What is a Show Cause Notice before penalty under Section 274?",
    a: "Before levying any statutory penalty for under-reporting or misreporting of income, the officer must issue a Show Cause Notice under Section 274 giving the taxpayer an opportunity to explain why penalty should not be imposed. A detailed legal reply must be filed.",
  },
  {
    q: "What should I do if an old demand from 5-10 years ago appears on my portal?",
    a: "Old legacy demands often appear due to incomplete migration of manual records to CPC. Taxpayers can submit an online response on the portal under 'Pending Actions > Response to Outstanding Demand', providing old challan copies or claiming indemnity up to ₹1,00,000 under CBDT waiver schemes.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What are High-Value Financial Transactions (SFT) and how do they trigger notices?",
    a: "Banks, mutual funds, registrars, and credit card companies are required to report high-value transactions (Statement of Financial Transactions - SFT) to the CBDT. If your declared income does not justify your property purchases, cash deposits, or share trades, an inquiry notice is automatically triggered.",
  },
  {
    q: "Can a taxpayer request a video conference hearing in a faceless assessment?",
    a: "Yes. In cases where the department proposes a variation (addition to income) adverse to the taxpayer, the taxpayer can request a personal hearing through video conferencing via the e-filing portal to explain their case verbally to the assessment unit.",
  },
  {
    q: "What is the penalty for non-disclosure of foreign assets in an income tax return?",
    a: "Non-disclosure of foreign assets or foreign income in Schedule FA of an ITR attracts a severe flat penalty of ₹10,000,000 (₹10 Lakhs) under Section 43 of the Black Money Act, along with rigorous imprisonment of 6 months to 7 years under Section 50.",
  },
  {
    q: "Can an income tax notice be appealed if the Assessing Officer rejects my response?",
    a: "Yes. If an adverse assessment order is passed, the taxpayer has the statutory right to file an online appeal before the Commissioner of Income Tax (Appeals) [CIT(A)] in Form 35 within 30 days of receiving the order.",
  },
  {
    q: "How can Merrafilings assist with Income Tax Notice resolution?",
    a: "Merrafilings pairs you with experienced litigation Chartered Accountants. We verify notice DIN, analyze transaction trails, prepare comprehensive written legal replies with case laws, handle e-Proceedings portal submissions, and represent you until the case is closed.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Revised Return Filing (Section 139(5)) & Updated Return (ITR-U) Guide",
    href: "/revised-return",
    date: "Rectification Desk",
    readTime: "8 min read",
  },
  {
    title: "Quarterly TDS Return Filing: Due Dates, Penalties & TRACES Correction",
    href: "/tds-return-filing",
    date: "Tax Compliance",
    readTime: "9 min read",
  },
  {
    title: "Corporate Tax Return Filing (Form ITR-6) for Companies in India: AY 2026-27",
    href: "/itr-6-form",
    date: "Corporate Tax",
    readTime: "9 min read",
  },
  {
    title: "Understanding Section 143(1) Intimation & Rectification under Section 154",
    href: "/income-tax-filing",
    date: "Tax Advisory",
    readTime: "7 min read",
  },
];

const RELATED_SERVICES_TAGS = [
  "Income Tax Notice",
  "Section 143(1) Intimation",
  "Section 143(2) Scrutiny",
  "Section 142(1) Inquiry",
  "Section 148 Reassessment",
  "Section 139(9) Defective",
  "Section 156 Demand",
  "Section 245 Refund",
  "DIN Verification",
  "Faceless Assessment",
  "Section 154 Rectification",
  "Tax Notice Response",
];

const POPULAR_SEARCHES_TAGS = [
  "income tax notice online response",
  "how to check DIN number on income tax portal",
  "Section 143 1 intimation demand response",
  "defective return notice Section 139 9",
  "how to respond to scrutiny notice Section 143 2",
  "reassessment notice Section 148 time limit",
  "Section 245 refund adjustment reply",
  "penalty for not responding to income tax notice",
  "e-Proceedings portal submission guide",
  "outstanding tax demand waiver scheme",
  "income tax notice lawyer CA fees",
  "how to download notice PDF from e-filing",
];

function NoticeGuideContent() {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Income Tax Notices: Statutory Communication & DIN Mandate
        </h2>
        <p>
          An <strong>Income Tax Notice</strong> is an official communication issued by the Income Tax Department of India under various sections of the <strong>Income Tax Act, 1961</strong>. Notices are issued to seek clarification on financial transactions, point out discrepancies in reported income, demand unpaid taxes, call for unfiled returns, or notify selection for in-depth scrutiny assessment.
        </p>
        <p>
          Under CBDT Circular No. 19/2019, <strong>every authentic notice or order must carry a unique, computer-generated Document Identification Number (DIN)</strong>. Any communication received without a valid DIN is legally invalid and non-est. Under India's Faceless Assessment regime, all notice proceedings and responses must be conducted 100% digitally via the <strong>e-Proceedings portal on incometax.gov.in</strong>.
        </p>
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
            <strong>Strict Response Deadlines:</strong> Every notice contains a legally binding time limit (typically 15 to 30 days). Ignoring a notice triggers ex-parte assessment under Section 144, penalties under Section 272A, bank account attachments, and potential prosecution under Section 276C!
          </div>
        </div>
      </section>

      {/* Section 2: Types of Income Tax Notices */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Common Types of Income Tax Notices in India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NOTICE_TYPES.map((item, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${item.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {item.section}
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

      {/* Section 3: Statutory Summary Table */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Statutory Notice Matrix: Sections, Causes & Action Required
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Section</th>
                <th className="py-3.5 px-4 font-semibold">Notice Type</th>
                <th className="py-3.5 px-4 font-semibold">Trigger Cause</th>
                <th className="py-3.5 px-4 font-semibold">Action Required</th>
                <th className="py-3.5 px-4 font-semibold">Time Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 139(9)</td>
                <td className="py-3 px-4 font-medium text-slate-900">Defective Return</td>
                <td className="py-3 px-4">Missing schedules, unpaid taxes, balance sheet error</td>
                <td className="py-3 px-4 text-purple-700 font-medium">File corrected return on portal</td>
                <td className="py-3 px-4 font-semibold text-rose-600">15 Days</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 142(1)</td>
                <td className="py-3 px-4 font-medium text-slate-900">Inquiry Notice</td>
                <td className="py-3 px-4">Non-filing of return or verification of accounts</td>
                <td className="py-3 px-4 text-purple-700 font-medium">Submit ITR or produce ledger proofs</td>
                <td className="py-3 px-4 font-semibold text-slate-900">As specified</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 143(1)</td>
                <td className="py-3 px-4 font-medium text-slate-900">CPC Intimation</td>
                <td className="py-3 px-4">TDS mismatch, computational adjustments</td>
                <td className="py-3 px-4 text-purple-700 font-medium">File Sec 154 rectification or pay demand</td>
                <td className="py-3 px-4 font-semibold text-slate-900">30 Days</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 143(2)</td>
                <td className="py-3 px-4 font-medium text-slate-900">Scrutiny Assessment</td>
                <td className="py-3 px-4">CASS selection, suspicious loss claims, high deductions</td>
                <td className="py-3 px-4 text-purple-700 font-medium">Comprehensive legal reply &amp; paper book</td>
                <td className="py-3 px-4 font-semibold text-rose-600">As specified</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 148</td>
                <td className="py-3 px-4 font-medium text-slate-900">Reassessment Notice</td>
                <td className="py-3 px-4">Escaped income &gt; ₹50L or departmental intelligence</td>
                <td className="py-3 px-4 text-purple-700 font-medium">File return &amp; submit reasons defense</td>
                <td className="py-3 px-4 font-semibold text-rose-600">30 Days</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 156</td>
                <td className="py-3 px-4 font-medium text-slate-900">Notice of Demand</td>
                <td className="py-3 px-4">Tax liability, interest, or penalties determined</td>
                <td className="py-3 px-4 text-purple-700 font-medium">Pay tax or file appeal / stay application</td>
                <td className="py-3 px-4 font-semibold text-rose-600">30 Days</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-blue-600">Section 245</td>
                <td className="py-3 px-4 font-medium text-slate-900">Refund Adjustment</td>
                <td className="py-3 px-4">Offsetting current refund against past demands</td>
                <td className="py-3 px-4 text-purple-700 font-medium">Agree, Disagree, or Partially Agree online</td>
                <td className="py-3 px-4 font-semibold text-rose-600">30 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Common Triggers */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Top Triggers & Reasons for Receiving an Income Tax Notice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMON_REASONS.map((r, idx) => (
            <div
              key={idx}
              className={`group border border-slate-200/80 rounded-2xl p-5 ${r.cardHover} hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${r.iconBox} mb-3 transition-all shrink-0`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className={`font-semibold text-slate-900 text-sm sm:text-base ${r.titleHover} transition-colors mb-2`}>
                {r.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Step-by-Step Response */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Step-by-Step Online Notice Response & E-Proceedings Procedure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESPONSE_STEPS.map((step, idx) => (
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

      {/* Section 6: Penalties Table */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Legal Penalties & Consequences of Ignoring Income Tax Notices
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Nature of Non-Compliance</th>
                <th className="py-3.5 px-4 font-semibold">Governing Section</th>
                <th className="py-3.5 px-4 font-semibold">Statutory Penalty &amp; Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Failure to comply with Section 142(1) / 143(2)</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 144</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Ex-parte Best Judgment Assessment</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Default in answering statutory summons/notice</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 272A</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Penalty of ₹10,000 for each default</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Delay in paying demand under Section 156</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 220(2)</td>
                <td className="py-3.5 px-4 text-slate-900 font-medium">Interest at 1.00% per month until full payment</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Under-reporting of taxable income</td>
                <td className="py-3.5 px-4 font-medium text-amber-600">Section 270A</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Penalty of 50% of tax on under-reported income</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Misreporting or concealment of income</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 270A</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Penalty of 200% of tax on misreported income</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Willful evasion of income tax</td>
                <td className="py-3.5 px-4 font-medium text-rose-600">Section 276C</td>
                <td className="py-3.5 px-4 text-rose-600 font-bold">Rigorous imprisonment from 6 months up to 7 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Documents Checklist */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Documentation Checklist for Preparing Notice Response
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Notice Copy &amp; DIN:</strong>
            <span>Downloaded PDF copy of the notice with complete DIN number and reference dates.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Original Filed ITR:</strong>
            <span>ITR-V acknowledgment, computational sheet, and XML/JSON copy of filed return.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Form 26AS &amp; AIS / TIS:</strong>
            <span>Complete tax credit statements showing TDS/TCS entries and SFT transaction details.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Bank Statements:</strong>
            <span>Annotated bank account statements explaining deposits, high-value credits, and transfers.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Deduction &amp; Exemption Proofs:</strong>
            <span>Rent receipts, 80C/80D premium receipts, donation receipts, and home loan interest certs.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Books of Accounts &amp; Audit Report:</strong>
            <span>Balance Sheet, P&L, general ledgers, and Form 3CA/3CB-3CD audit reports (for businesses).</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function IncomeTaxNoticePage() {
  return (
    <ServicePageTemplate
      badgeText="Direct Tax Litigation & Faceless Assessment Defense Desk"
      heroTitle={
        <>
          <span>Income Tax Notice Consultation &amp; </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Online Response
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Received an Income Tax Notice? Connect with expert litigation Chartered Accountants. We verify notice DIN authenticity, reconcile Form 26AS/AIS mismatches, draft point-by-point legal replies, and submit responses via the E-Proceedings portal to resolve tax demands and stay penalties."
      formTitle="Resolve Your Income Tax Notice"
      formSubtitle="Connect with our direct tax litigation desk for DIN verification, legal response drafting, and e-Proceedings portal defense."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">tax notice consultation fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for preliminary notice review, end-to-end response drafting, or comprehensive scrutiny assessment defense."
      breadcrumbCurrent="Income Tax Notice"
      guideTitle="Comprehensive Guide to Income Tax Notices (Sections 143(1), 143(2), 142(1), 148 & 139(9)) & E-Proceedings - AY 2026-27"
      guideContent={<NoticeGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Income Tax notices, DIN verification, Section 143(1) intimations, 143(2) scrutiny, and e-Proceedings response."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
