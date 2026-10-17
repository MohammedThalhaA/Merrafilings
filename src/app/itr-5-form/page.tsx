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
  Factory,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Specialized ITR-5 Filing for Partnership Firms, LLPs, AOPs & BOIs" },
  { icon: <Calculator className="w-4 h-4" />, text: "Optimized Partner Remuneration & Interest Allowances under Section 40(b)" },
  { icon: <Scale className="w-4 h-4" />, text: "Alternate Minimum Tax (AMT Section 115JC) & Form 29C Certification" },
  { icon: <BadgePercent className="w-4 h-4" />, text: "Comprehensive Balance Sheet, Manufacturing, Trading & P&L Reporting" },
  { icon: <Award className="w-4 h-4" />, text: "Section 44AB Tax Audit Verification & DSC-Based E-Filing Assistance" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ITR-5 Assisted Tax Filing (Non-Audit)",
    shortDesc: "Comprehensive financial statement drafting and ITR-5 e-filing for non-audit firms and LLPs.",
    expandedDesc: "Complete end-to-end tax preparation and submission for Partnership Firms, LLPs, AOPs, and BOIs not subject to statutory tax audit. Senior tax accountants review your trial balance, extract Part A Balance Sheet and P&L figures, calibrate partner remuneration against statutory Section 40(b) caps, reconcile bank interest and TDS in Form 26AS/AIS, and submit Form ITR-5 with official acknowledgment.",
    price: "₹5,899",
    priceSub: "Per Assessment Year / Non-Audit Returns",
    badge: "Essential Compliance",
    features: [
      "Preparation & Submission of Form ITR-5 for AY 2026-27",
      "Statutory Balance Sheet & Profit and Loss Account Compilation",
      "Section 40(b) Partner Remuneration Calculation & Deduction Check",
      "Interest on Partner Capital Verification (Capped at 12% p.a.)",
      "Form 26AS, AIS & TIS Tax Credit Reconciliation",
      "Depreciation Schedules as per Income Tax Act (Section 32)",
      "Carry Forward of Business & Capital Losses (Schedule CFL)",
      "Official ITR-V Acknowledgment & E-Verification Guidance",
    ],
  },
  {
    name: "ITR-5 CA-Assisted Tax Compliance",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Personally handled by a qualified Chartered Accountant with advanced tax optimization.",
    expandedDesc: "Our premier tax filing solution where a dedicated Chartered Accountant personally manages your firm's compliance lifecycle. Covers intricate Schedule BP business adjustments, Schedule CG capital gains segregation, Alternate Minimum Tax (AMT) under Section 115JC with Form 29C drafting, foreign assets/income disclosure (Schedule FA/FSI), and strategic tax planning to minimize liability within legal parameters.",
    price: "₹12,899",
    priceSub: "Per Assessment Year / CA Certified",
    features: [
      "Everything in the Assisted Tax Filing Package",
      "Personally Handled & Reviewed by Senior Chartered Accountant (CA)",
      "Comprehensive Schedule BP, CG & OS Computations",
      "Alternate Minimum Tax (AMT) Section 115JC & Form 29C Certification",
      "Pre-Filing Tax Optimization Consultation with Senior Tax Partner",
      "Unabsorbed Depreciation & Prior Year Loss Set-off Verification",
      "GST vs. Income Tax Turnover Cross-Reconciliation",
      "Foreign Assets & Remittance Reporting (Schedule FA & Schedule FSI)",
      "Digital Signature Certificate (DSC) Portal Registration & Affixing",
    ],
  },
  {
    name: "ITR-5 Comprehensive Tax Audit Suite",
    shortDesc: "End-to-end compliance for entities subject to Section 44AB tax audit and transfer pricing.",
    expandedDesc: "Tailored for partnership firms, manufacturing LLPs, and large trade enterprises crossing statutory audit turnover limits (₹1 Cr / ₹10 Cr). Includes full Section 44AB audit verification, compilation and electronic filing of Form 3CB-3CD, transfer pricing reporting (Form 3CEB) where required, advance tax installment schedules, TDS withholding audits, and priority defense against income tax scrutiny notices.",
    price: "₹19,899",
    priceSub: "Annual Retainer / Includes Tax Audit Support",
    badge: "Complete Audit Suite",
    features: [
      "Dedicated Senior Partner Chartered Accountant (CA) Assigned",
      "Complete Section 44AB Tax Audit Verification & Reporting",
      "Electronic Filing of Tax Audit Report in Form 3CB-3CD",
      "Form 3CEB Transfer Pricing Certification (if applicable)",
      "Quarterly Advance Tax Estimation & Installment Calculations",
      "Comprehensive TDS & TCS Withholding Review & Filing Sync",
      "End-to-End Handling of Scrutiny Notices & Section 143(1) Intimations",
      "Annual Business Restructuring & Entity Conversion Advisory",
      "Direct Priority Phone & WhatsApp Line with Lead Tax Desk",
    ],
  },
];

const ELIGIBLE_ENTITIES = [
  {
    title: "Partnership Firms",
    desc: "Firms formed under the Indian Partnership Act, 1932. Mandatory annual filing of ITR-5 irrespective of profit, loss, or business volume.",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Limited Liability Partnerships (LLPs)",
    desc: "LLPs incorporated under the Limited Liability Partnership Act, 2008. Requires DSC verification if audited or if designated partner signs.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Association of Persons (AOPs)",
    desc: "Two or more entities/persons combining for a common enterprise or business purpose to produce income, excluding companies.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Body of Individuals (BOIs)",
    desc: "An agglomeration of individual human beings joined together without formal partnership, earning income collectively.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Cooperative Societies & Local Authorities",
    desc: "Urban, rural, credit, and marketing cooperative societies registered under Cooperative Societies Acts, as well as municipal bodies.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    title: "Business Trusts & Investment Funds",
    desc: "REITs, InvITs, Alternative Investment Funds (AIFs Category I/II/III), and estates of deceased persons / insolvents.",
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
];

const ITR5_SCHEDULES = [
  {
    part: "Part A - General",
    desc: "Entity profile, PAN, Date of Incorporation/Deed, Status (Firm/LLP/AOP), Address, details of all Partners/Members with PAN and profit-sharing ratios.",
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    part: "Part A - BS, P&L & OI",
    desc: "Statutory Balance Sheet as of March 31st, Profit & Loss statement, and Other Information (accounting method, inventory valuation, disallowed expenses).",
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    part: "Schedule BP (Business Profits)",
    desc: "Computation of net income from business/profession after adjusting Section 40(b) partner remuneration, Section 32 depreciation, and Section 43B statutory payments.",
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    part: "Schedule DPM & DOA (Depreciation)",
    desc: "Block of assets depreciation under Income Tax Section 32 for plant & machinery, buildings, computers, furniture, and intangible assets.",
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    part: "Schedule AMT & AMTC",
    desc: "Computation of Alternate Minimum Tax under Section 115JC (18.5% on Adjusted Total Income) and tax credit entitlement under Section 115JD.",
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBox: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    part: "Schedule CFL & Part B (TI/TTI)",
    desc: "Details of unabsorbed losses brought forward and carried forward to future years, computation of Gross Total Income, and total tax payable.",
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
];

const FAQ_COL_1 = [
  {
    q: "Who is required to file the ITR-5 Form?",
    a: "The ITR-5 Form is specifically designated for Partnership Firms registered under the Indian Partnership Act 1932, Limited Liability Partnerships (LLPs) registered under the LLP Act 2008, Associations of Persons (AOPs), Bodies of Individuals (BOIs), Cooperative Societies, Local Authorities, Artificial Juridical Persons, and Business Trusts/Investment Funds. It is NOT for individuals, HUFs, or companies.",
  },
  {
    q: "Who is strictly excluded from filing Form ITR-5?",
    a: "Individual taxpayers (who file ITR-1, ITR-2, or ITR-3), Hindu Undivided Families (ITR-2/ITR-3), Companies registered under Companies Act (who must file ITR-6), and charitable/religious trusts or political parties claiming exemption under Section 11 or required to file under Sections 139(4A), 139(4B), 139(4C), or 139(4D) who must file ITR-7 cannot use Form ITR-5.",
  },
  {
    q: "What is the income tax rate applicable to Partnership Firms and LLPs in India?",
    a: "Partnership Firms and LLPs are taxed at a flat rate of 30% on their net taxable income. Additionally, a surcharge of 12% is levied if the total taxable income exceeds ₹1 Crore. A Health and Education Cess of 4% applies on the aggregate of income tax and surcharge. The effective tax rate is 31.2% for income up to ₹1 Crore, and 34.944% for income exceeding ₹1 Crore. They may also be subject to Alternate Minimum Tax (AMT) at 18.5% under Section 115JC.",
  },
  {
    q: "What are the rules and statutory limits for partner remuneration under Section 40(b)?",
    a: "Under Section 40(b) of the Income Tax Act, salary, bonus, commission, or remuneration paid to working partners is deductible from the firm's business profits only if authorized by the Partnership Deed or LLP Agreement. The maximum allowable deduction is: (1) On the first ₹3,00,000 of book profit (or in case of a loss): ₹1,50,000 or 90% of book profit, whichever is greater; (2) On the balance of book profit exceeding ₹3,00,000: 60% of book profit.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can a Partnership Firm or LLP pay interest on capital to partners, and is it tax deductible?",
    a: "Yes, interest paid to partners on their capital contribution is tax deductible for the firm, provided two conditions are satisfied: (1) Payment must be explicitly authorized by and in accordance with the Partnership Deed / LLP Agreement; and (2) The rate of simple interest cannot exceed 12% per annum. Any interest paid in excess of 12% p.a. is disallowed under Section 40(b) and added back to the firm's taxable profits.",
  },
  {
    q: "What are the due dates for filing ITR-5 for Assessment Year 2026-27?",
    a: "The due dates for filing Form ITR-5 are: (1) 31st July 2026 for non-audit firms and LLPs; (2) 31st October 2026 for firms and LLPs subject to tax audit under Section 44AB; (3) 30th November 2026 for entities required to furnish an international or specified domestic transfer pricing report in Form 3CEB; and (4) 31st December 2026 for filing a belated or revised return.",
  },
  {
    q: "Is Digital Signature Certificate (DSC) mandatory for filing ITR-5?",
    a: "Yes, for LLPs and any partnership firm whose accounts are required to be audited under Section 44AB, e-verification using a Class 3 Digital Signature Certificate (DSC) of the Designated Partner or Managing Partner is legally mandatory. For non-audit partnership firms, verification can alternatively be done via Electronic Verification Code (EVC) generated through Aadhaar OTP or net banking.",
  },
  {
    q: "What is Alternate Minimum Tax (AMT) under Section 115JC for LLPs and Firms?",
    a: "Alternate Minimum Tax (AMT) applies to non-corporate entities (including LLPs and firms) that claim certain deductions (such as Chapter VI-A heading 'C' deductions like 80-IA, 80-IB, or Section 35AD). If the regular income tax payable is less than 18.5% of 'Adjusted Total Income' plus applicable surcharge and cess, the entity must pay tax computed as AMT. A Form 29C report certified by a Chartered Accountant must be submitted before filing the ITR.",
  },
];

const RELATED_GUIDES = [
  {
    title: "Business ITR Filing Online in India",
    href: "/business-itr-filing",
  },
  {
    title: "Income Tax Return Online (Individual & HNW)",
    href: "/income-tax-filing",
  },
  {
    title: "Step-by-Step LLP Registration Guide",
    href: "/llp-registration/llp-registration-guide-comprehensive-steps",
  },
  {
    title: "Understanding GST Return Filings",
    href: "/llp-registration/understand-gst-return-filings-a-comprehensive-guide",
  },
];

const RELATED_SERVICES_TAGS = [
  "Partnership Tax Return",
  "LLP Annual Filing",
  "Section 40(b) Remuneration",
  "Section 44AB Tax Audit",
  "Form 3CB 3CD",
  "Form 29C AMT Report",
  "Form 3CEB Transfer Pricing",
  "Class 3 DSC Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "itr 5 form online filing",
  "partnership firm tax rate 30 percent",
  "llp income tax return due date",
  "section 40b partner salary calculation",
  "12 percent interest on partner capital",
  "alternate minimum tax 115jc llp",
  "dsc mandatory for llp itr",
  "itr 5 late fee section 234f",
];

function Itr5GuideContent() {
  return (
    <div className="space-y-12 text-slate-800">
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Form ITR-5 for Non-Individual Entities (AY 2026-27)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Form ITR-5 is the designated income tax return form prescribed by the Central Board of Direct Taxes (CBDT) for entities other than individual taxpayers, Hindu Undivided Families (HUFs), companies, and charitable trusts. It caters specifically to complex commercial partnerships, including registered Partnership Firms, Limited Liability Partnerships (LLPs), Associations of Persons (AOPs), and Bodies of Individuals (BOIs).
        </p>
      </section>

      {/* Section 2: Eligible Entities (6 Color-Matched Cards) */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Entities Eligible &amp; Mandated to File Form ITR-5
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {ELIGIBLE_ENTITIES.map((item, idx) => (
            <div
              key={idx}
              className={`group p-5.5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${item.cardHover} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${item.iconBox}`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className={`text-base font-bold text-slate-900 transition-colors ${item.titleHover}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Who Cannot File ITR-5 */}
        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/90 mt-4">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Entities Ineligible to Use Form ITR-5
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 mb-3 leading-relaxed">
                The following taxpayers cannot use Form ITR-5 and must file under their designated forms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Individuals &amp; HUFs:</strong> Must file Form ITR-1, ITR-2, or ITR-3</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Private &amp; Public Companies:</strong> Must file Form ITR-6</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Charitable &amp; Religious Trusts:</strong> Must file Form ITR-7</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span><strong>Political Parties &amp; Scientific Research:</strong> Must file Form ITR-7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Structure of ITR-5 Form & Key Schedules */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Structure of Form ITR-5: Parts &amp; Critical Schedules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {ITR5_SCHEDULES.map((item, idx) => (
            <div
              key={idx}
              className={`group p-5.5 rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 ${item.cardHover} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-105 ${item.iconBox}`}>
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className={`text-base font-bold text-slate-900 transition-colors ${item.titleHover}`}>
                  {item.part}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* AY 2026-27 Mandatory Disclosures */}
        <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Mandatory Disclosures &amp; Revisions for AY 2026-27
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px]">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">Legal Entity Identifier (LEI):</strong>
              <span className="text-slate-600">Mandatory 20-digit LEI code disclosure for entities claiming tax refunds of ₹50 Crores or more.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">Capital Gains Date Split:</strong>
              <span className="text-slate-600">Strict segregation of capital gains realized before and after 23rd July 2024 to apply revised tax rates.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">MSME Section 43B(h) Audit:</strong>
              <span className="text-slate-600">Mandatory reporting of delayed payments to micro and small vendors beyond 15/45 days, disallowed and added to profits.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">Schedule FA &amp; Foreign Income:</strong>
              <span className="text-slate-600">Comprehensive reporting of foreign bank accounts, cross-border equity stakes, and DTAA tax relief under Section 90/91.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tax Rates & Surcharge */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Tax Rates, Surcharge &amp; Alternate Minimum Tax (AMT)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl border border-blue-200/90 bg-white shadow-2xs">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mb-3 w-fit">
              <BadgePercent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Flat 30% Base Tax</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Applied on net taxable profits after deducting allowable business expenses, depreciation under Sec 32, and partner deductions under Sec 40(b).
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-purple-200/90 bg-white shadow-2xs">
            <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 mb-3 w-fit">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">12% Surcharge</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Applicable if net taxable income exceeds ₹1 Crore in the financial year. Marginal relief applies to eliminate sudden excessive tax spikes.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-200/90 bg-white shadow-2xs">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-3 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">4% Health &amp; Education Cess</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Levied on the combined aggregate of income tax and surcharge. Effective rate is 31.2% (under ₹1 Cr) and 34.944% (above ₹1 Cr).
            </p>
          </div>
        </div>

        {/* Alternate Minimum Tax (AMT Section 115JC) */}
        <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Scale className="w-5 h-5 text-emerald-600" />
            Alternate Minimum Tax (AMT) under Section 115JC
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-600 mb-3 leading-relaxed font-normal">
            If an LLP or Partnership Firm claims profit-linked tax holidays under Section 80H to 80RRB (excluding 80P), deductions under Section 35AD for specified capital projects, or SEZ deductions under Section 10AA, it cannot reduce its tax burden below 18.5% of Adjusted Total Income (ATI). Form 29C certified by a Chartered Accountant must be submitted electronically before filing Form ITR-5.
          </p>
        </div>
      </section>

      {/* Section 5: Section 40(b) Partner Remuneration & Interest */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Section 40(b): Partner Remuneration &amp; Interest Allowances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border border-emerald-200/90 bg-white shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">First ₹3,00,000 of Book Profit</span>
            <div className="text-xl font-bold text-slate-900 mt-1 mb-2">₹1,50,000 or 90% of Book Profit</div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Whichever is higher. If the firm makes a commercial loss or nominal profit, up to ₹1,50,000 can still be paid as partner remuneration.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-blue-200/90 bg-white shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Balance Book Profit &gt; ₹3,00,000</span>
            <div className="text-xl font-bold text-slate-900 mt-1 mb-2">60% of Balance Book Profit</div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              60% of all book profits exceeding ₹3 Lakhs can be disbursed to working partners as salary, bonus, or commission.
            </p>
          </div>
        </div>

        {/* Key Statutory Conditions */}
        <div className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Statutory Conditions for Claiming Deductions:</h4>
          <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Deed Authorization:</strong> Remuneration and interest must be specifically quantified or determinable under the registered Partnership Deed / LLP Agreement.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>12% Simple Interest Cap:</strong> Interest on capital is tax-deductible up to a strict ceiling of 12% simple interest per annum. Excess interest is disallowed.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Working Partners Only:</strong> Remuneration deductions are restricted strictly to individual working partners actively engaged in business operations.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 6: Section 44AB Audit & Deadlines Calendar */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Section 44AB Audit Thresholds &amp; Official Due Dates (AY 2026-27)
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Entity Category</th>
                  <th className="py-3 px-4">Audit Requirement</th>
                  <th className="py-3 px-4">Statutory Due Date</th>
                  <th className="py-3 px-4">Verification Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Partnership Firms &amp; LLPs (Non-Audit)</td>
                  <td className="py-3.5 px-4">Accounts not subject to audit</td>
                  <td className="py-3.5 px-4 font-bold text-blue-700">31st July 2026</td>
                  <td className="py-3.5 px-4">EVC / Aadhaar OTP or DSC</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Audit Cases (Firms, LLPs, AOPs, BOIs)</td>
                  <td className="py-3.5 px-4">Section 44AB Tax Audit (Form 3CB-3CD)</td>
                  <td className="py-3.5 px-4 font-bold text-purple-700">31st October 2026</td>
                  <td className="py-3.5 px-4 text-rose-600 font-medium">Class 3 DSC Mandatory</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Transfer Pricing Cases (Form 3CEB)</td>
                  <td className="py-3.5 px-4">International or specified domestic transactions</td>
                  <td className="py-3.5 px-4 font-bold text-amber-700">30th November 2026</td>
                  <td className="py-3.5 px-4 text-rose-600 font-medium">Class 3 DSC Mandatory</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Belated &amp; Revised Returns</td>
                  <td className="py-3.5 px-4">Late filing under Section 234F</td>
                  <td className="py-3.5 px-4 font-bold text-slate-700">31st December 2026</td>
                  <td className="py-3.5 px-4">DSC or EVC as applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: Required Documents */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Required Documents Checklist for ITR-5 Filing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Entity Incorporation &amp; Deed:</strong>
            <span>PAN card of Firm/LLP, registered Partnership Deed or LLP Agreement, and Certificate of Incorporation.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Financial Statements:</strong>
            <span>Balance Sheet as of March 31, Profit &amp; Loss Account, Trial Balance, and Fixed Asset Depreciation Schedules.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Tax Audit Documentation:</strong>
            <span>Tax Audit Report in Form 3CB-3CD by independent practicing CA (for audited entities exceeding turnover limits).</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Tax Credit &amp; Reconciliation:</strong>
            <span>Form 26AS, AIS/TIS showing customer TDS/TCS, and GST turnover reconciliation statements with books.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Partner / Member Particulars:</strong>
            <span>PAN cards, capital balances, profit-sharing ratios, and remuneration/interest calculation working sheets.</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <strong className="text-slate-900 font-semibold block mb-1">Class 3 Digital Signature:</strong>
            <span>Valid Class 3 DSC of the Managing Partner or Designated Partner for portal authentication and e-verification.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Itr5FormPage() {
  return (
    <ServicePageTemplate
      badgeText="Assessment Year 2026-27 Compliant Firm & LLP E-Filing"
      heroTitle={
        <>
          <span>Partnership Firm / LLP Tax Filing Online – </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            ITR-5 Form
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="File your Form ITR-5 income tax return online with certified Chartered Accountants. Complete compliance for Partnership Firms, LLPs, AOPs, and BOIs under flat 30% tax rates with Section 40(b) partner remuneration planning and Section 44AB tax audit support."
      formTitle="ITR-5 Tax Filing Advisory"
      formSubtitle="Connect with our firm tax experts for balance sheet compilation, partner salary optimization, and DSC-based e-filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">ITR-5 filing fees.</span>
        </>
      }
      pricingSubtitle="Select your plan for non-audit ITR-5 return filing, CA-assisted tax compliance, or complete tax audit suite."
      breadcrumbCurrent="Partnership Firm / LLP ITR"
      guideTitle="Comprehensive Guide to Form ITR-5 Filing for Partnership Firms & LLPs in India - AY 2026-27"
      guideContent={<Itr5GuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about Form ITR-5 eligibility, flat 30% tax rates, Section 40(b) partner remuneration, and Section 44AB audits."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
