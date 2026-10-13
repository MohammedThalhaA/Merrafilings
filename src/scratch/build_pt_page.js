const fs = require('fs');

const faqs = JSON.parse(fs.readFileSync('C:/Users/MOHAMMED THALHA A/.gemini/antigravity-ide/brain/30ef5269-82f5-403e-afa7-d4da1d71c3d9/scratch/pt_clean_faqs.json', 'utf8'));

// Split 19 FAQs: 5, 5, 5, 4
const faqCol1 = faqs.slice(0, 5);
const faqCol2 = faqs.slice(5, 10);
const faqExtra1 = faqs.slice(10, 15);
const faqExtra2 = faqs.slice(15, 19);

const tsxContent = `"use client";

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
  AlertTriangle,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  UtensilsCrossed,
  Flame,
  Download,
  Search,
  CheckCircle,
  HelpCircle,
  Wheat,
  Truck,
  Globe2,
  Layers,
  Zap,
  HeartPulse,
  Briefcase,
  Calendar,
  DollarSign,
  UserCheck,
  FileSpreadsheet,
  Coins,
  Cpu,
} from "lucide-react";

const FAQ_COL_1 = ${JSON.stringify(faqCol1, null, 2)};

const FAQ_COL_2 = ${JSON.stringify(faqCol2, null, 2)};

const FAQ_EXTRA_COL_1 = ${JSON.stringify(faqExtra1, null, 2)};

const FAQ_EXTRA_COL_2 = ${JSON.stringify(faqExtra2, null, 2)};

const FORM_FEATURES = [
  { icon: <Landmark className="w-4 h-4" />, text: "State Commercial Tax Dept Registration" },
  { icon: <Receipt className="w-4 h-4" />, text: "PTRC (Employer) & PTEC (Professional) Certificates" },
  { icon: <FileCheck className="w-4 h-4" />, text: "State Salary Slab Mapping & Challan Setup" },
  { icon: <Award className="w-4 h-4" />, text: "100% Legal Immunity Under Article 276" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Professional Tax Enrolment (PTEC)",
    shortDesc: "For self-employed professionals, sole proprietors, doctors, CAs, lawyers, and company directors paying annual personal professional tax.",
    expandedDesc: "Complete state commercial tax portal filing, business address and PAN verification, PTEC registration certificate issuance, and payment challan generation within 3 to 5 working days.",
    price: "₹2,499",
    priceSub: "+ State Govt Fees | Annual Certificate",
    badge: "For Professionals",
    features: [
      "PTEC Registration Certificate Allotment",
      "PAN & Professional Degree Verification",
      "State Commercial Tax Portal User Creation",
      "First Year Professional Tax Challan Generation",
      "Guidance on Income Tax Section 16(iii) Deductions",
      "Dedicated Tax Specialist Support",
    ],
  },
  {
    name: "Professional Tax Registration (PTRC)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Mandatory for employers (Companies, LLPs, Firms, Establishments) deducting monthly professional tax from staff salaries and depositing with the state.",
    expandedDesc: "End-to-end employer PTRC portal lodgement, employee salary slab classification, monthly deduction framework setup, electronic challan integration, and delivery of official Registration Certificate within 5 to 7 working days.",
    price: "₹4,499",
    priceSub: "+ State Govt Fees | Mandatory for Employers",
    features: [
      "Official PTRC Registration Certificate Issuance",
      "Employee Salary Slab Classification & Tax Table",
      "Monthly Salary Deduction & Payroll Integration",
      "Commercial Tax Portal Employer Login Credentials",
      "Monthly / Annual E-Challan Return Setup",
      "Priority Senior Tax Consultant Guidance",
    ],
  },
  {
    name: "PTRC + PTEC Dual Combo with Annual Filing",
    shortDesc: "Complete employer and director compliance package for newly incorporated companies, LLPs, and corporate firms.",
    expandedDesc: "Dual certificate registration covering employer PTRC and company/director PTEC, plus complete annual return filing support, state tax audit liaison, and penalty immunity consultation.",
    price: "₹7,999",
    priceSub: "+ State Govt Fees | Complete Corporate Combo",
    features: [
      "Dual Issuance: Employer PTRC + Director/Firm PTEC",
      "Comprehensive Salary Deduction & Master Schedule",
      "First Annual Professional Tax Return Filing Included",
      "Annual Tax Payment Challan Generation",
      "Multi-State Office Branch Compliance Advisory",
      "Dedicated Corporate Tax Lead Support",
    ],
  },
];

const RELATED_GUIDES = [
  "Difference Between PTRC and PTEC: Who Needs Which Certificate?",
  "State-wise Professional Tax Slabs in India: Complete Comparison",
  "How to Claim Professional Tax Deduction Under Section 16(iii) of Income Tax",
  "Professional Tax Registration Due Dates and Penalty Structure",
  "How to Generate and Pay Professional Tax E-Challan Online",
  "States Where Professional Tax is Mandatory vs Not Applicable",
];

const RELATED_SERVICES_TAGS = [
  "ESI Registration",
  "EPF Registration",
  "Shop & Establishment Act",
  "GST Registration",
  "Payroll Compliance",
  "Company Incorporation",
  "LLP Registration",
  "Income Tax Return (ITR)",
];

const POPULAR_SEARCHES_TAGS = [
  "professional tax registration online apply",
  "ptrc and ptec difference in maharashtra",
  "professional tax slabs in karnataka west bengal",
  "professional tax certificate download online",
  "professional tax exemption categories in india",
  "penalty for non registration of professional tax",
  "professional tax due date 30th june",
  "article 276 professional tax limit 2500",
  "professional tax online payment mahagst",
  "ptrc monthly return filing online",
  "professional tax documents required for pvt ltd",
  "how to get ptec number for doctors lawyers cas",
];

const TABLE_1_PT_VS_IT = [
  { parameter: "Nature of Tax", pt: "State-level direct tax on professions, trades and employments", it: "Central government direct tax on personal and corporate total income" },
  { parameter: "Constitutional Mandate", pt: "Levied under Article 276 of the Constitution of India", it: "Levied under Entry 82 of List I (Union List) of the Constitution" },
  { parameter: "Governing Authority", pt: "Respective State Commercial Taxes / Sales Tax Department", it: "Central Board of Direct Taxes (CBDT), Ministry of Finance" },
  { parameter: "Maximum Statutory Ceiling", pt: "Strict constitutional cap of ₹2,500 per individual per financial year", it: "Progressive slabs (up to 30% + surcharge/cess) with no ceiling" },
  { parameter: "Tax Deductibility", pt: "Deductible from gross salary under Section 16(iii) of the Income Tax Act", it: "Not deductible against other taxes" },
  { parameter: "Collection Mechanism", pt: "Deducted monthly by employer (salaried) or paid annually (self-employed)", it: "Collected via TDS, advance tax, and self-assessment tax" },
];

const TABLE_2_COLLECTION = [
  { category: "Salaried Employees", responsibleParty: "Employer (Company, LLP, Firm, Establishment)", collectionMethod: "Deducted monthly from gross salary pay slip", remittance: "Employer deposits with state commercial tax dept before due date" },
  { category: "Self-Employed Professionals (CAs, Doctors, Lawyers)", responsibleParty: "Individual Professional", collectionMethod: "Direct self-assessment based on professional experience / turnover", remittance: "Individual pays directly via state treasury e-challan annually" },
  { category: "Sole Proprietors & Business Owners", responsibleParty: "Business Owner", collectionMethod: "Direct self-assessment based on shop / business license category", remittance: "Owner pays directly via PTEC portal registration annually" },
  { category: "Directors of Companies & Designated Partners", responsibleParty: "Individual Director / Partner", collectionMethod: "Direct self-assessment as office holders", remittance: "Individual / entity deposits PTEC fee annually by 30th June" },
];

const TABLE_3_PTRC_VS_PTEC = [
  { parameter: "Full Form", ptrc: "Professional Tax Registration Certificate", ptec: "Professional Tax Enrolment Certificate" },
  { parameter: "Applicable Entity", ptrc: "Employers employing staff earning taxable salaries", ptec: "Self-employed individuals, professionals, business entities & directors" },
  { parameter: "Primary Purpose", ptrc: "Authorizes employer to deduct PT from staff wages and remit to state", ptec: "Enrolls the entity or individual to pay their own personal business PT" },
  { parameter: "Who Must Apply", ptrc: "Companies, LLPs, partnerships, factories, shops employing staff", ptec: "Doctors, CAs, advocates, consultants, company directors, proprietors" },
  { parameter: "Return Filing Frequency", ptrc: "Monthly, quarterly, or annual return filing as per state rules", ptec: "Annual return filing / annual challan payment in most states" },
  { parameter: "Liability Nature", ptrc: "Vicarious employer liability (collect and deposit)", ptec: "Direct personal liability of the professional / enterprise" },
];

const TABLE_4_STATE_SLABS = [
  { state: "Maharashtra", salaryRange: "Up to ₹7,500 (Men) / ₹25,000 (Women): Nil | ₹7,501 to ₹10,000: ₹175/mo | Above ₹10,000: ₹200/mo (₹300 in Feb)", maxAnnual: "₹2,500" },
  { state: "Karnataka", salaryRange: "Up to ₹15,000: Nil | ₹15,001 to ₹24,999: ₹150/mo | Above ₹25,000: ₹200/mo", maxAnnual: "₹2,400" },
  { state: "West Bengal", salaryRange: "Up to ₹10,000: Nil | ₹10,001 to ₹15,000: ₹110/mo | ₹15,001 to ₹25,000: ₹130/mo | ₹25,001 to ₹40,000: ₹150/mo | Above ₹40,000: ₹200/mo", maxAnnual: "₹2,400" },
  { state: "Tamil Nadu", salaryRange: "Half-yearly slabs: Up to ₹21,000: Nil | ₹21,001 to ₹30,000: ₹100 | ₹30,001 to ₹45,000: ₹235 | ₹45,001 to ₹60,000: ₹510 | Above ₹75,000: ₹1,250 (half-yearly)", maxAnnual: "₹2,500" },
  { state: "Andhra Pradesh", salaryRange: "Up to ₹15,000: Nil | ₹15,001 to ₹20,000: ₹150/mo | Above ₹20,000: ₹200/mo", maxAnnual: "₹2,400" },
  { state: "Telangana", salaryRange: "Up to ₹15,000: Nil | ₹15,001 to ₹20,000: ₹150/mo | Above ₹20,000: ₹200/mo", maxAnnual: "₹2,400" },
  { state: "Gujarat", salaryRange: "Up to ₹12,000: Nil (Exempted) | Above ₹12,000: ₹200/mo", maxAnnual: "₹2,400" },
  { state: "Madhya Pradesh", salaryRange: "Up to ₹18,750: Nil | ₹18,751 to ₹25,000: ₹125/mo | ₹25,001 to ₹33,333: ₹166/mo | Above ₹33,333: ₹208/mo (₹212 in last month)", maxAnnual: "₹2,500" },
];

const TABLE_5_DOCUMENTS = [
  { entity: "Private / Public Limited Company", docs: "Certificate of Incorporation, MOA & AOA, Company PAN, GST Certificate, List of Directors with PAN & Address Proofs, Cancelled Cheque, Board Resolution" },
  { entity: "Limited Liability Partnership (LLP)", docs: "LLP Certificate of Incorporation, LLP Agreement, LLP PAN, GST Certificate, List of Designated Partners with PAN, Cancelled Cheque" },
  { entity: "Partnership Firm", docs: "Registered Partnership Deed, Firm PAN Card, GST Certificate, List of Partners with PAN & Aadhaar, Address Proof of Business, Cancelled Cheque" },
  { entity: "Sole Proprietorship", docs: "PAN Card of Proprietor, Aadhaar Card, Shop & Establishment Certificate / Udyam MSME, Business Address Proof, Cancelled Cheque" },
  { entity: "Self-Employed Professional", docs: "PAN Card, Aadhaar Card, Professional Degree / Bar Council / ICAI / Medical Council Certificate, Clinic / Office Address Proof, Cancelled Cheque" },
  { entity: "Trust / Society / Section 8 Non-Profit", docs: "Registration Certificate, Trust Deed / MOA, PAN Card of Entity, List of Trustees / Governing Body Members, Address Proof, Cancelled Cheque" },
];

const TABLE_6_FEES_TIMELINE = [
  { service: "PTRC Registration (Employer)", govtFee: "₹0 to ₹2,500 (Varies by State)", professionalFee: "₹4,499", timeline: "3 to 7 Working Days" },
  { service: "PTEC Registration (Professional / Director)", govtFee: "₹0 to ₹2,500 (Varies by State)", professionalFee: "₹2,499", timeline: "2 to 5 Working Days" },
  { service: "Monthly Return Filing (Per Month)", govtFee: "Nil", professionalFee: "Available under annual retainer", timeline: "Before State Due Date (e.g., 20th or 30th)" },
  { service: "Annual Return Filing (PTRC / PTEC)", govtFee: "Nil", professionalFee: "Available under annual retainer", timeline: "Annual due date (e.g., 30th June)" },
];

const TABLE_7_PENALTIES = [
  { defaultType: "Failure to Apply for Registration / Enrolment", penalty: "Penalty of ₹5 per day of delay from liability date (escalating to ₹1,000 - ₹5,000 in states like Maharashtra)" },
  { defaultType: "Late Payment of Professional Tax", penalty: "Interest at 1.25% per month (15% per annum) on unpaid tax for each month of delay" },
  { defaultType: "Willful Non-Payment / Tax Evasion", penalty: "Penalty of 10% to 100% of unpaid tax amount plus statutory interest and prosecution" },
  { defaultType: "Late Filing of Monthly / Annual Returns", penalty: "Late fee penalty of ₹1,000 to ₹2,000 per return depending on state provisions" },
  { defaultType: "Employer Failure to Deduct Tax from Salary", penalty: "Employer is held personally liable for 100% of tax amount plus interest; cannot recover retroactively" },
  { defaultType: "Providing False or Fraudulent Records", penalty: "Prosecution under state Professional Tax Act with heavy fines and cancellation of business permits" },
];

function PTGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is Professional Tax Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          <strong className="text-slate-800 font-medium">Professional Tax (PT)</strong> is a state-level direct tax levied on individuals earning income through any profession, trade, calling, or employment in India. Empowered under <strong className="text-slate-800 font-medium">Article 276 of the Constitution of India</strong>, state governments and municipal corporations are constitutionally authorized to levy and collect this tax, subject to a strict statutory ceiling of <strong className="text-slate-800 font-medium">₹2,500 per person per financial year</strong>.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Unlike Central Income Tax, Professional Tax is governed by respective state enactments (such as the Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975, or the Karnataka Tax on Professions Act, 1976). Revenue collected through professional tax is utilized by state governments to fund civic municipal infrastructure, public health, and urban amenities.
        </p>

        <div className="bg-[#FAF9F7] p-5 rounded-2xl border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
            <Receipt className="w-5 h-5 text-emerald-600" />
            <span>100% Tax Deductibility Under Section 16(iii) of the Income Tax Act</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            An essential financial advantage of paying Professional Tax is that the entire amount paid is <strong>fully deductible from gross taxable salary</strong> under Section 16(iii) of the Income Tax Act, 1961. This deduction lowers the employee&apos;s taxable salary baseline before computing their final Central Income Tax liability.
          </p>
        </div>
      </section>

      {/* Section 2: PT vs Income Tax + Table 1 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Professional Tax vs. Income Tax: Key Differences
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Understanding the constitutional boundaries between State Professional Tax and Central Income Tax clarifies why both registrations are independently mandatory:
        </p>

        {/* Table 1 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-emerald-700">State Professional Tax</th>
                <th className="py-3 px-4 text-[#155EEF]">Central Income Tax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_1_PT_VS_IT.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.parameter}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal">{row.pt}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal">{row.it}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: PTRC vs PTEC + Table 3 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What Are the Two Types of Professional Tax Certificates? (PTRC vs. PTEC)
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          State commercial tax departments issue two distinct types of certificates based on whether you are paying tax on your own earnings or collecting it from your employees:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* PTRC Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="inline-block text-[11px] font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full mb-3">
              FOR EMPLOYERS • VICARIOUS LIABILITY
            </div>
            <h3 className="text-base font-medium text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">
              PTRC – Professional Tax Registration Certificate
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
              Mandatory for any employer (company, partnership, LLP, factory, or shop) that employs staff earning above the state threshold. Authorizes the employer to deduct PT from wages and remit it to the state.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Applied by: The Employer Entity</li>
              <li>• Obligation: Deduct monthly &amp; file periodic returns</li>
              <li>• Timeline: Within 30 days of hiring first eligible employee</li>
            </ul>
          </div>

          {/* PTEC Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full mb-3">
              FOR PROFESSIONALS • DIRECT LIABILITY
            </div>
            <h3 className="text-base font-medium text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
              PTEC – Professional Tax Enrolment Certificate
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
              Required for self-employed professionals (doctors, lawyers, CAs, architects, consultants), sole proprietors, partners, and company directors paying personal professional tax directly to the government.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Applied by: Individual Professional / Entity</li>
              <li>• Obligation: Annual direct tax payment (due by 30th June)</li>
              <li>• Timeline: Within 30 days of commencing practice / trade</li>
            </ul>
          </div>
        </div>

        {/* Table 3 */}
        <div className="pt-2">
          <h3 className="text-sm font-medium text-slate-900 mb-2">
            Table 3: Comprehensive PTRC vs. PTEC Comparison Matrix
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-[13px]">
              <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4 text-[#155EEF]">PTRC (Employer Certificate)</th>
                  <th className="py-3 px-4 text-emerald-700">PTEC (Enrolment Certificate)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-light text-slate-600">
                {TABLE_3_PTRC_VS_PTEC.map((row, idx) => (
                  <tr key={idx} className="transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800">{row.parameter}</td>
                    <td className="py-3 px-4 leading-relaxed font-normal">{row.ptrc}</td>
                    <td className="py-3 px-4 leading-relaxed font-normal">{row.ptec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Who Needs PT Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Who Needs to Register for Professional Tax in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Professional Tax applies across a diverse spectrum of corporate entities and independent professionals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Building className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Corporate Employers &amp; Startups</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Private Limited companies, public companies, LLPs, and partnership firms employing staff on payroll.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <HeartPulse className="w-5 h-5 text-rose-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Doctors &amp; Medical Practitioners</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Independent medical consultants, surgeons, dentists, nursing home owners, and diagnostic lab directors.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Scale className="w-5 h-5 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">CAs, CSs, ICWAs &amp; Advocates</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Practicing Chartered Accountants, Company Secretaries, legal advocates, and corporate legal advisors.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Cpu className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Engineers, Architects &amp; Surveyors</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Consulting civil/mechanical engineers, licensed structural architects, interior designers, and urban planners.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Briefcase className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Freelancers &amp; IT Contractors</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Independent software developers, digital marketing consultants, business coaches, and media professionals.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Store className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Sole Proprietors &amp; Traders</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Retail merchants, wholesalers, contractors, commission agents, and commercial establishment operators.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: State-Wise Slabs + Table 4 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. State-Wise Professional Tax Slabs &amp; Rates in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Because Professional Tax is a state-subject levy, every state legislature drafts its own wage thresholds and slab structures (never exceeding ₹2,500/year):
        </p>

        {/* Table 4 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">State Jurisdiction</th>
                <th className="py-3 px-4">Monthly Gross Salary Slab &amp; Tax Deduction</th>
                <th className="py-3 px-4 text-emerald-700">Max Annual Tax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_4_STATE_SLABS.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800 whitespace-nowrap">{row.state}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.salaryRange}</td>
                  <td className="py-3 px-4 font-semibold text-emerald-800 whitespace-nowrap">{row.maxAnnual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Exemptions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Who is Exempted from Professional Tax in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Specific categories of citizens and workers are granted complete statutory exemption under state Professional Tax acts:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-light">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Senior citizens aged 65 years and above (varies by state)</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Individuals suffering from permanent physical disability or blindness</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Parents or legal guardians of children with permanent mental/physical disability</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Members of the Indian Armed Forces (Army, Navy, Air Force) and Auxiliary Reservists</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Badli / casual workers employed in textile and seasonal industries</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Residents of Union Territories without legislature (e.g., Chandigarh, Ladakh, Lakshadweep)</span>
          </div>
        </div>
      </section>

      {/* Section 7: Documents Required + Table 5 */}
      <section id="documents-required" className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. What Documents Are Required for Professional Tax Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          The documentation requirements depend on the applicant&apos;s corporate entity classification:
        </p>

        {/* Table 5 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Entity Type</th>
                <th className="py-3 px-4">Statutory &amp; Identity Documents Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_5_DOCUMENTS.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800 whitespace-nowrap">{row.entity}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.docs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Step-by-Step Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Step-by-Step Professional Tax Registration Process Online
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings manages the entire filing across state commercial tax portals (e.g., Mahagst, Commercial Taxes Karnataka, CTD Telangana):
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Jurisdiction &amp; Certificate Classification Audit</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                We review your business operations to determine whether you require PTRC (employer deduction), PTEC (director/proprietor enrolment), or both.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">State Commercial Tax Portal User Profile Creation</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                We set up your verified account on the state commercial tax department portal, linking your PAN, GSTIN, and business address credentials.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Application Lodgement &amp; Supporting Document Upload</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Our specialists draft the statutory registration petition, attach entity KYC, property lease proofs, director lists, and submit online.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Scrutiny &amp; Verification by Commercial Tax Officer (CTO)</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                The jurisdictional tax officer evaluates your application. We coordinate any clarification notices to ensure rapid sign-off.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#00B074] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Certificate Issuance &amp; E-Challan Setup</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Upon approval, your official PTRC / PTEC registration certificate is issued, and we configure your monthly/annual payment challan system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Fees & Timelines + Table 6 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. What is the Professional Tax Registration Fee &amp; Timeline?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          State commercial tax registration fees and timelines vary by jurisdiction:
        </p>

        {/* Table 6 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Service Category</th>
                <th className="py-3 px-4 text-emerald-700">Govt Statutory Fee</th>
                <th className="py-3 px-4">Professional Fee</th>
                <th className="py-3 px-4 text-blue-700">Estimated Turnaround</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_6_FEES_TIMELINE.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.service}</td>
                  <td className="py-3 px-4 text-emerald-800 font-medium">{row.govtFee}</td>
                  <td className="py-3 px-4">{row.professionalFee}</td>
                  <td className="py-3 px-4 text-blue-800 font-medium">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: Penalties + Table 7 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. What Are the Penalties for Non-Compliance with Professional Tax?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Failing to enroll or delaying tax remittances triggers statutory penalties under state acts:
        </p>

        {/* Table 7 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Type of Default</th>
                <th className="py-3 px-4 text-rose-700">Prescribed Legal Penalty &amp; Interest</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_7_PENALTIES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.defaultType}</td>
                  <td className="py-3 px-4 text-rose-900 leading-relaxed font-normal">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Why Choose Merrafilings for Professional Tax Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings is India&apos;s leading corporate taxation platform. We eliminate municipal bureaucracy:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online Filing – No physical visits to state commercial tax offices</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Pan-India Coverage – Over 30,000+ businesses registered across all PT states</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Dedicated CA / Tax Specialist for salary slab mapping &amp; return filing</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Automated Due Date Alerts – Avoid ₹5/day penalty and 1.25% monthly interest</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Professional Tax Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for Professional Tax Registration Today</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function ProfessionalTaxRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="State Commercial Taxes Department"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Professional Tax Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Get your official PTRC (Employer) and PTEC (Professional) registration certificate online. State-wise salary slab mapping, digital challan setup, and 100% statutory compliance across all Indian states."
      formTitle="Apply for Professional Tax"
      formSubtitle="Enter your business details below to consult with our commercial tax specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. State-wise{" "}
          <span className="font-normal text-[#00B074]">professional tax pricing.</span>
        </>
      }
      pricingSubtitle="Select your registration category for fast, guaranteed PTRC / PTEC certificate issuance."
      breadcrumbCurrent="Professional Tax Registration"
      guideTitle="Professional Tax Registration Online for Businesses and Professionals in India"
      guideContent={<PTGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about obtaining Professional Tax Registration, PTRC, and PTEC in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
`;

if (!fs.existsSync('src/app/professional-tax-registration')) {
  fs.mkdirSync('src/app/professional-tax-registration', { recursive: true });
}
fs.writeFileSync('src/app/professional-tax-registration/page.tsx', tsxContent);
console.log('Successfully written src/app/professional-tax-registration/page.tsx, length:', tsxContent.length);
