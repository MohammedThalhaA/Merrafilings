"use client";

import React from "react";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Smartphone,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Building,
  Check,
  ChevronUp,
  Scale,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  FolderLock,
  Landmark,
  BadgePercent,
  Receipt,
  FileCheck,
  Globe2,
} from "lucide-react";

const COMPANY_MIN_REQUIREMENTS_TABLE = [
  {
    requirement: "Minimum Number of Directors",
    criteria: "Minimum 2 directors (maximum up to 15 directors permitted under Companies Act)",
  },
  {
    requirement: "Resident Director Requirement",
    criteria: "At least 1 director must be an Indian resident (stayed in India for >= 182 days in previous FY)",
  },
  {
    requirement: "Minimum Number of Shareholders",
    criteria: "Minimum 2 shareholders (maximum up to 200). Directors can also be shareholders",
  },
  {
    requirement: "Minimum Paid-up Capital",
    criteria: "Zero minimum statutory capital requirement; can commence with any nominal capital (e.g. ₹1,000)",
  },
  {
    requirement: "Digital Signatures & DIN",
    criteria: "Class 3 DSC for all proposed directors and DIN allotment via MCA SPICe+ form",
  },
  {
    requirement: "Registered Business Address",
    criteria: "Commercial or residential physical address anywhere in India with utility bill and NOC",
  },
  {
    requirement: "Constitutional Documents",
    criteria: "e-MOA (INC-33) and e-AOA (INC-34) drafting outlining company objects and bylaws",
  },
];

const COMPANY_COMPARISON_TABLE = [
  {
    parameter: "Governing Statute",
    pvtLtd: "Companies Act, 2013 (Ministry of Corporate Affairs)",
    llp: "LLP Act, 2008 (Ministry of Corporate Affairs)",
    opc: "Companies Act, 2013 (MCA - Single Founder)",
  },
  {
    parameter: "Legal Identity",
    pvtLtd: "Separate legal entity distinct from owners",
    llp: "Separate legal entity distinct from partners",
    opc: "Separate legal entity with 1 sole promoter",
  },
  {
    parameter: "Liability of Members",
    pvtLtd: "Limited to face value of shares subscribed",
    llp: "Limited to agreed capital contribution",
    opc: "Limited to face value of unpaid shares",
  },
  {
    parameter: "Venture Capital & Equity Funding",
    pvtLtd: "Highly preferred by VCs, angel investors & banks",
    llp: "Cannot issue shares or equity to venture funds",
    opc: "Limited fundraising options; single shareholder only",
  },
  {
    parameter: "ESOPs & Employee Stock Options",
    pvtLtd: "Permitted; easy to attract top tech talent",
    llp: "Cannot issue ESOPs to staff",
    opc: "Cannot issue ESOPs",
  },
  {
    parameter: "Foreign Direct Investment (FDI)",
    pvtLtd: "100% permitted under automatic FDI routes",
    llp: "Permitted under restricted automatic routes",
    opc: "Foreign nationals/NRIs cannot form an OPC",
  },
  {
    parameter: "Statutory Annual Audit",
    pvtLtd: "Mandatory from day 1 by an independent CA",
    llp: "Exempt if turnover < ₹40L & capital < ₹25L",
    opc: "Mandatory annually",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a Private Limited Company Registration?",
    a: "Company Registration is the legal process of incorporating a business entity under the Companies Act, 2013, governed by the Ministry of Corporate Affairs (MCA). It endows the business with a separate legal personality, limited liability protection for shareholders, perpetual succession, and the legal capacity to raise funds, own property, and enter contracts in its own name.",
  },
  {
    q: "Why is a Private Limited Company best for startups seeking investment?",
    a: "A Private Limited Company is the global gold standard for startups and scaling businesses. Institutional venture capital funds, angel networks, and banks invest exclusively in Private Limited Companies because they can issue equity shares, preference shares, convertible debentures, and ESOPs (Employee Stock Option Plans).",
  },
  {
    q: "How many directors and shareholders are required to register a company?",
    a: "A Private Limited Company requires a minimum of 2 directors (up to 15) and a minimum of 2 shareholders (up to 200). The same individuals can hold dual roles as both directors and shareholders. At least one director must be a resident of India (residing for 182+ days in the preceding financial year).",
  },
  {
    q: "Is there any minimum capital requirement for company registration?",
    a: "No! The Government of India eliminated the minimum paid-up capital requirement under the Companies (Amendment) Act. You can incorporate a Private Limited Company with any nominal capital, such as ₹1,000 or ₹10,000, deposited into the company's bank account after incorporation.",
  },
  {
    q: "Can a foreign national or NRI be a director in an Indian company?",
    a: "Yes. Foreign nationals and Non-Resident Indians (NRIs) can be directors and hold up to 100% equity shares in an Indian Private Limited Company under the automatic FDI route. The foreign director only needs to provide an apostilled or notarized copy of their passport, address proof, and obtain a Class 3 Digital Signature Certificate (DSC). At least one co-director must be an Indian resident.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the SPICe+ form and what services are integrated into it?",
    a: "SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is the MCA's integrated web-form. Through SPICe+ Part A and Part B alongside AGILE-PRO-S, you receive 10 statutory approvals in one shot: Name Reservation, Incorporation (CIN), DIN allotment, PAN, TAN, EPFO registration, ESIC registration, Professional Tax registration, corporate Bank Account opening, and GSTIN.",
  },
  {
    q: "How long does the company registration process take in India?",
    a: "With Merrafilings, company registration typically takes 7 to 10 working days, subject to MCA approval timelines and timely submission of partner KYC documents. We handle name availability checks, DSC generation, SPICe+ filing, and document notarisation swiftly.",
  },
  {
    q: "What is Form INC-20A (Commencement of Business)?",
    a: "Form INC-20A is a mandatory post-incorporation filing under Section 10A of the Companies Act. It must be filed within 180 days of incorporation, certifying that the subscribers have deposited their agreed share capital into the company's bank account. Without filing INC-20A, the company cannot commence commercial operations or borrow funds.",
  },
  {
    q: "Can a residential address be used as the company's registered office?",
    a: "Yes! A residential property owned or rented by any promoter can be registered as the official company address. You only need to submit a recent electricity or gas bill (< 2 months old) along with a signed No Objection Certificate (NOC) from the property owner.",
  },
  {
    q: "What are the mandatory annual compliances for a Private Limited Company?",
    a: "Every registered Private Limited Company must complete key statutory compliances every year: (1) Statutory Audit by an independent CA, (2) Annual General Meeting (AGM) within 6 months of fiscal year close, (3) Form AOC-4 (Financial Statements), (4) Form MGT-7 (Annual Return), (5) DIR-3 KYC for all directors, and (6) Corporate Income Tax Return (ITR-6).",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Can a salaried individual become a director in a Private Limited Company?",
    a: "Yes, an employed professional can become a director, provided their current employment contract or employment terms do not contain restrictions against holding directorships or commercial interests in outside ventures.",
  },
  {
    q: "What is a Corporate Identity Number (CIN)?",
    a: "A CIN is a unique 21-digit alphanumeric identification number allotted by the Registrar of Companies (ROC) to every incorporated company. It identifies the industry code, state of registration, year of incorporation, company type, and registration number.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Is it mandatory to maintain physical books of accounts?",
    a: "Under the Companies Act, books of accounts can be maintained electronically on cloud software like Merrafilings Ledgers, provided the accounting software retains an unalterable audit trail (edit log) for every transaction throughout the financial year.",
  },
  {
    q: "Can an existing Partnership or LLP be converted into a Private Limited Company?",
    a: "Yes. An existing Partnership Firm or Limited Liability Partnership (LLP) can be converted into a Private Limited Company under Part I of Chapter XXI of the Companies Act, 2013 by filing Form URC-1 with the ROC without attracting capital gains tax.",
  },
];

const RELATED_SERVICES_TAGS = [
  "One Person Company (OPC)",
  "Limited Liability Partnership (LLP)",
  "Public Limited Company",
  "Section 8 Non-Profit Company",
  "Partnership Firm",
  "Sole Proprietorship",
  "INC-20A Commencement of Business",
  "GST Registration for Companies",
  "Director KYC DIR-3",
  "AOC-4 & MGT-7 Annual ROC Filing",
  "Trademark Registration for Brand",
  "Accounting & Bookkeeping Services",
];

const POPULAR_SEARCHES_TAGS = [
  "Company Registration Online India",
  "Private Limited Company Incorporation",
  "Register Pvt Ltd Company MCA SPICe+",
  "Cost of Company Registration in India",
  "Documents Required for Company Registration",
  "Company Name Availability Check RUN",
  "DIN Allotment Online for Directors",
  "Class 3 DSC for Company Incorporation",
  "MOA and AOA Drafting Online",
  "Startup India DPIIT Recognition",
  "Private Limited vs LLP Differences",
  "AGILE PRO S Form for GST and Bank",
  "Form INC 20A Certificate of Commencement",
  "Statutory Audit for Private Limited",
  "Corporate Identity Number CIN Search",
  "Annual Return MGT 7 Filing Due Date",
  "Financial Statements AOC 4 MCA",
  "Company Registration Stamp Duty by State",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Private Ltd - Incorporation",
    shortDesc:
      "Register your company in just 7–10 days. Online, investor-ready & hassle-free incorporation...",
    expandedDesc:
      "Includes name reservation via RUN/SPICe+ Part A, 2 Director Identification Numbers (DIN), Digital Signatures (DSC), SPICe+ Part B drafting, e-MOA, e-AOA, PAN, TAN & Bank Account opening assistance.",
    price: "₹2,899",
    priceSub: "+ MCA Government Fees & Stamp Duty",
    features: [
      "Company Name Approval via SPICe+ Part A",
      "2 Digital Signature Certificates (DSC Class 3)",
      "2 Director Identification Numbers (DIN)",
      "Drafting of e-MOA & e-AOA Constitutionals",
      "Incorporation Certificate (COI) Issuance",
      "Company PAN & TAN Allotment",
      "Zero-Balance Corporate Bank Account Opening",
    ],
  },
  {
    name: "Incorporation & Compliance",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Complete incorporation plus mandatory 1st year ROC compliances to keep your company audit-ready...",
    expandedDesc:
      "Covers complete incorporation, Commencement of Business Certificate (INC-20A), Auditor Appointment (ADT-1), DIR-3 KYC for directors, and first annual MCA compliance filings.",
    price: "₹19,899",
    priceSub: "+ MCA Stamp Duty | Full 1-Year Compliance Shield",
    features: [
      "Complete Company Incorporation Package",
      "Commencement of Business (Form INC-20A)",
      "Auditor Appointment Filing (Form ADT-1)",
      "DIR-3 KYC Filing for 2 Directors",
      "Annual ROC Return Filing (AOC-4 & MGT-7)",
      "Minutes of First Board Meeting & Share Certificates",
      "Dedicated Corporate Secretary / CA Manager",
    ],
  },
  {
    name: "Comprehensive Startup Suite",
    shortDesc:
      "The all-inclusive package: Incorporation, 1-Year ROC compliance, GST registration, Trademark & Cloud Accounting...",
    expandedDesc:
      "Engineered for high-growth ventures raising funds. Covers full incorporation, corporate filings, GST registration, 1 Trademark filing under 1 class, and LEDGERS cloud accounting suite.",
    price: "₹29,899",
    priceSub: "+ MCA Stamp Duty | Enterprise Growth Tier",
    features: [
      "Complete Company Incorporation Suite",
      "Full 1-Year ROC & MCA Annual Compliance",
      "GST Registration & 12 Months GST Returns",
      "1 Trademark Registration Application (1 Class)",
      "LEDGERS Cloud Invoicing & Accounting Software (1 Year)",
      "Preparation of Financial Statements & Audit Support",
      "Corporate Income Tax Return (ITR-6) Filing",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Building className="w-4 h-4" />,
    text: "SPICe+ MCA Fast-Track Incorporation",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "2 DIN & Class-3 Digital Signatures Included",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    text: "e-MOA, e-AOA, PAN, TAN & Bank Account",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "100% Online MCA Portal Scrutiny & Approval",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Company Registration →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Comprehensive Checklist for Private Limited Company Incorporation",
  "Understanding SPICe+ Part A & Part B MCA Filing Process",
  "Mandatory Post-Incorporation Compliances: INC-20A & ADT-1",
  "Differences Between Private Limited, LLP, and OPC in India",
  "Director Identification Number (DIN) & Class-3 DSC Guide",
  "How to Open a Corporate Bank Account After Company Incorporation",
];

function CompanyGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
              <div>
                <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                  Private Limited Company Registration Online in India
                </h1>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-3">
                  A <strong className="font-medium text-slate-800">Private Limited Company</strong> is India&apos;s most sought-after and respected corporate structure for entrepreneurs, startups, and growing enterprises. Regulated by the <strong className="font-medium text-slate-800">Companies Act, 2013</strong> and the Ministry of Corporate Affairs (MCA), it grants limited liability protection, a separate legal personality, and an established framework for raising venture capital and equity funding.
                </p>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                  With a Private Limited Company, shareholders are not personally liable for company debts beyond their subscribed share capital. At <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a>, our team of dedicated Chartered Accountants and corporate lawyers manage your entire incorporation process—from RUN name reservation to Certificate of Incorporation and post-incorporation commencement filings.
                </p>
              </div>

              {/* Section 2: Key Advantages of a Private Limited Company */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Should You Register a Private Limited Company?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Entrepreneurs choose the Private Limited corporate structure because it provides the strongest institutional foundation for business expansion:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-900">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Investor Ready &amp; Easy Equity Funding
                    </strong>
                    Venture capital funds, private equity investors, and angel syndicates mandate a Private Limited Company before issuing term sheets.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Limited Liability Protection
                    </strong>
                    Shareholders&apos; personal properties, bank savings, and assets are completely safe from business losses, creditors, or legal claims.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Perpetual Corporate Succession
                    </strong>
                    The company enjoys unbroken continuous legal existence. Changes in directors, management, or shareholders do not affect its legal status.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      ESOP Issuance for Talent Attraction
                    </strong>
                    Can grant Employee Stock Option Plans (ESOPs) to recruit, motivate, and retain top technical, executive, and product talent.
                  </div>
                </div>
              </div>

              {/* Section 3: Minimum Requirements Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Statutory Minimum Requirements for Company Registration
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Before applying on the MCA SPICe+ portal, verify that your founding group satisfies these corporate standards:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Requirement</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Statutory Minimum Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {COMPANY_MIN_REQUIREMENTS_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.requirement}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.criteria}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4: Eligibility Criteria */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Eligibility Criteria for Directors &amp; Shareholders
                </h2>
                <div className="space-y-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Age &amp; Capacity:</strong> Any natural person aged 18 years or above with contractual capacity can become a director or shareholder.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Resident Director Rule:</strong> At least one director must have resided in India for not less than 182 days during the financial year.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Foreign Nationals &amp; NRIs:</strong> Foreign citizens can be directors and hold equity shares. Their passport, identity, and address proofs must be notarized or apostilled in their home country.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Corporate Shareholders:</strong> Corporate bodies, LLPs, or registered trusts can hold shares in a Private Limited Company through designated authorized representatives.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Documents Required */}
              <div id="documents-section" className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for Company Registration in India
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Keep clear digital scanned copies of the following documents ready for frictionless MCA filing:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* For Directors & Shareholders */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#6B4BFF]" />
                      <span>For All Directors &amp; Shareholders</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Self-attested PAN Card (Passport for foreign citizens)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Identity Proof: Aadhaar Card, Passport, or Voter ID</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Address Proof: Bank statement or utility bill (&lt; 2 months old)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Recent passport size photograph</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Registered Office */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#00A86B]" />
                      <span>For Registered Office in India</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Electricity, water, or gas bill (&lt; 2 months old)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>No Objection Certificate (NOC) signed by property owner</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Rent agreement (if rented property)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Residential premises are completely acceptable</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6: Step-by-Step Incorporation Process */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step Company Incorporation Process
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-5">
                  Our structured process on the MCA portal ensures zero delays and maximum approval speed:
                </p>

                <div className="space-y-3.5">
                  {[
                    {
                      step: "Step 1",
                      title: "Digital Signature Certificates (DSC) & DIN",
                      desc: "Class-3 Digital Signature Certificates are generated for all proposed directors to enable encrypted digital signing across all MCA electronic forms.",
                    },
                    {
                      step: "Step 2",
                      title: "Name Reservation via RUN / SPICe+ Part A",
                      desc: "We file two unique proposed name choices on the MCA portal for Central Registration Centre (CRC) validation and name approval.",
                    },
                    {
                      step: "Step 3",
                      title: "Drafting e-MOA (INC-33) & e-AOA (INC-34)",
                      desc: "Our corporate lawyers draft digital Memorandum & Articles of Association specifying your business objectives, capital division, and internal operational rules.",
                    },
                    {
                      step: "Step 4",
                      title: "Filing SPICe+ Part B & Certificate Issuance",
                      desc: "Unified SPICe+ filing accompanied by AGILE-PRO-S. The MCA issues the Certificate of Incorporation (CIN) along with company PAN and TAN cards.",
                    },
                  ].map((st, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#00B074] transition-all flex items-start gap-4"
                    >
                      <span className="px-2.5 py-1 rounded-md bg-[#E8FAF2] text-[#00B074] text-xs font-semibold shrink-0">
                        {st.step}
                      </span>
                      <div>
                        <h4 className="font-medium text-slate-800 text-[13.5px] mb-1">{st.title}</h4>
                        <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: Comparison Table - Pvt Ltd vs LLP vs OPC */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Comparison: Private Limited vs. LLP vs. One Person Company
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Compare the major parameters before finalizing your company structure:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Parameter</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Private Limited Company</th>
                        <th className="py-3 px-4 font-normal">Limited Liability Partnership</th>
                        <th className="py-3 px-4 font-normal">One Person Company (OPC)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {COMPANY_COMPARISON_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.pvtLtd}</td>
                          <td className="py-3 px-4 text-slate-600">{row.llp}</td>
                          <td className="py-3 px-4 text-slate-600">{row.opc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 8: Mandatory Annual Compliances */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Mandatory Compliances After Company Registration
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Post-incorporation, every Private Limited Company must fulfill these statutory MCA and Income Tax compliances:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Statutory Compliance</th>
                        <th className="py-3 px-4 font-normal">Form / Filing</th>
                        <th className="py-3 px-4 font-normal">Prescribed Due Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Commencement of Business
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form INC-20A</td>
                        <td className="py-3 px-4 text-slate-600">Within 180 days of incorporation</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Financial Statements Filing
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form AOC-4</td>
                        <td className="py-3 px-4 text-slate-600">Within 30 days of Annual General Meeting (AGM)</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Annual Return of Company
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form MGT-7</td>
                        <td className="py-3 px-4 text-slate-600">Within 60 days of Annual General Meeting</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Corporate Income Tax Return
                        </td>
                        <td className="py-3 px-4 text-slate-600">ITR-6</td>
                        <td className="py-3 px-4 text-slate-600">31st October every financial year</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Director KYC Verification
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form DIR-3 KYC</td>
                        <td className="py-3 px-4 text-slate-600">On or before 30th September annually</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Statutory CA Audit
                        </td>
                        <td className="py-3 px-4 text-slate-600">CA Audit Report</td>
                        <td className="py-3 px-4 text-slate-600">Mandatory every financial year prior to AGM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Company Registration?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Merrafilings is India&apos;s leading tech-driven corporate services platform, trusted by over 2 Lakh businesses nationwide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Dedicated CA, CS &amp; Senior Legal Advisor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Transparent Pricing with zero hidden overheads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Fast Turnaround: Registration in 7–10 working days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Complete Startup Ecosystem: GST, Trademark &amp; Accounting</span>
                  </div>
                </div>
              </div>
    </>
  );
}

export default function CompanyRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="India's #1 Corporate Formation Platform"
      heroTitle={
        <>
          <span>Register Your </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Private Limited Company
          </span>{" "}
          <span>Online</span>
        </>
      }
      heroSubtitle="Incorporate your company in India fast, 100% online, and hassle-free. Get MCA approval, SPICe+ filing, digital signatures, PAN, TAN & corporate bank account."
      formTitle="Incorporate Your Company"
      formSubtitle="Enter your details below to get immediate guidance from an MCA filing specialist."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end corporate support from name reservation to incorporation certificate."
      breadcrumbCurrent="Private Limited Company"
      guideContent={<CompanyGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Common questions about incorporating a Private Limited Company in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
