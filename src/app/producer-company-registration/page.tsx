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

const PRODUCER_MIN_REQUIREMENTS_TABLE = [
  {
    requirement: "Minimum Number of Members / Shareholders",
    criteria: "Minimum 10 primary individual producers OR minimum 2 producer institutions (or a combination)",
  },
  {
    requirement: "Minimum Number of Directors",
    criteria: "Minimum 5 directors (maximum up to 15 directors allowed)",
  },
  {
    requirement: "Minimum Authorized Capital",
    criteria: "₹5,00,000 recommended minimum authorized capital (divided into equity shares)",
  },
  {
    requirement: "Producer Objective Verification",
    criteria: "Objects must strictly relate to agriculture, horticulture, dairy, forestry, poultry, or primary allied produce",
  },
  {
    requirement: "Producer Status Documentation",
    criteria: "Primary producer proof for all members (e.g. 7/12 extract, Khasra-Khatauni, Patta, or Panchayat certificate)",
  },
  {
    requirement: "Digital Signatures & DIN",
    criteria: "Class 3 DSC for all proposed directors and DIN allotment via MCA SPICe+ portal",
  },
  {
    requirement: "Constitutional Charter",
    criteria: "Customized MOA & AOA drafted strictly adhering to Part IXA statutory clauses of the Companies Act",
  },
];

const PRODUCER_COMPARISON_TABLE = [
  {
    parameter: "Governing Law & Regulator",
    producer: "Companies Act (Part IXA) under Central MCA",
    cooperative: "State Cooperative Societies Act (State Registrar)",
    pvtLtd: "Companies Act, 2013 (Central MCA)",
  },
  {
    parameter: "Area of Operation",
    producer: "All-India multi-state operations automatically allowed",
    cooperative: "Restricted to state of registration (unless MSCS Act)",
    pvtLtd: "All-India operations without territorial curbs",
  },
  {
    parameter: "Political & Government Interference",
    producer: "Strict corporate autonomy; zero political interference",
    cooperative: "Subject to state government inspection & political control",
    pvtLtd: "Complete private promoter autonomy",
  },
  {
    parameter: "Voting Rights System",
    producer: "Democratic: One member, one vote (irrespective of shares)",
    cooperative: "One member, one vote (often subject to registrar)",
    pvtLtd: "Proportional to number of equity shares held",
  },
  {
    parameter: "Tax Benefits & Subsidies",
    producer: "100% tax deduction under Sec 80PA + SFAC grant up to ₹15L",
    cooperative: "Subject to Section 80P tax deduction rules",
    pvtLtd: "Standard corporate tax (no Section 80PA benefits)",
  },
  {
    parameter: "Institutional Credit (NABARD)",
    producer: "Eligible for NABARD Credit Guarantee & Equity Grants",
    cooperative: "Eligible for cooperative bank schemes",
    pvtLtd: "Standard commercial bank debt and equity",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a Producer Company (Farmer Producer Company / FPO)?",
    a: "A Producer Company is a specialized hybrid legal corporate entity formed under Part IXA of the Companies Act. It combines the democratic ethos of a cooperative society with the professional governance, limited liability, and funding capabilities of a private limited company. It is established exclusively by primary producers such as farmers, milk producers, weavers, fishermen, and horticulturists.",
  },
  {
    q: "How many members are required to form a Producer Company?",
    a: "Under Section 378C of the Companies Act, a Producer Company requires a minimum of 10 or more individual primary producers, OR two or more producer institutions, OR a combination of 10 individuals and producer institutions. There is no statutory upper limit on the maximum number of members.",
  },
  {
    q: "How many directors are required for a Producer Company?",
    a: "A Producer Company must have a minimum of 5 directors and can appoint up to a maximum of 15 directors. All directors must be primary producers or representatives of producer institutions elected by the members.",
  },
  {
    q: "What is the 100% tax exemption under Section 80PA?",
    a: "Under Section 80PA of the Income Tax Act, a Producer Company with an annual turnover of up to ₹100 Crores is eligible for a 100% deduction on profits derived from the marketing of agricultural produce grown by its members, purchase of agricultural equipment, seeds, livestock, and processing activities for a period of 5 consecutive assessment years.",
  },
  {
    q: "What is the SFAC Matching Equity Grant Scheme for FPOs?",
    a: "The Small Farmers' Agri-Business Consortium (SFAC) provides a matching Equity Grant of up to ₹15 Lakhs to eligible Producer Companies. Under this scheme, the central government matches the equity contributed by farmer members up to ₹1,000 per farmer member, significantly strengthening the capital base of the FPO without dilution.",
  },
];

const FAQ_COL_2 = [
  {
    q: "How does the voting system work in a Producer Company?",
    a: "A Producer Company follows a strictly democratic governance model: 'One Member, One Vote'. Unlike standard commercial companies where voting power corresponds to the number of shares held, in a Producer Company, every primary producer member has exactly one vote, preventing concentration of power among wealthier shareholders.",
  },
  {
    q: "What is considered proof of being a 'Primary Producer'?",
    a: "Primary producers are individuals engaged in agriculture, horticulture, animal husbandry, pisciculture, or forestry. Proof includes Revenue Land Records (such as 7/12 extract, Khasra, Khatauni, Patta, or Jamabandi in the farmer's name), or an official Farmer Certificate issued by the local Tehsildar, Village Panchayat Officer, or Agriculture Officer.",
  },
  {
    q: "Can a Producer Company sell products across state borders?",
    a: "Yes! A Producer Company incorporated with the MCA enjoys nationwide operational jurisdiction right from day one. Unlike state cooperative societies that require complex Multi-State Cooperative licenses to trade across state borders, a Producer Company can purchase inputs, establish processing units, and sell produce across India freely.",
  },
  {
    q: "What is the credit guarantee fund offered by NABARD?",
    a: "NABARD, through the Credit Guarantee Fund Trust for FPOs, provides credit guarantees up to 85% for collateral-free bank loans extended to eligible Farmer Producer Companies. This enables newly formed FPOs to secure institutional bank loans without pledging agricultural land.",
  },
  {
    q: "What are the mandatory annual filings for a Producer Company?",
    a: "A Producer Company must hold its Annual General Meeting (AGM) within 90 days from the close of the financial year. It must file Form MGT-7 (Annual Return) and Form AOC-4 (Financial Statements) with the ROC within 60 and 30 days of the AGM respectively, undergo a mandatory statutory audit by a practicing CA, and file Corporate Income Tax Return (ITR-6).",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Can a Producer Company distribute bonus shares or dividends?",
    a: "Yes. A Producer Company can distribute patronage bonus to its members in proportion to their participation in business, and can also declare dividends out of surplus profits as approved in the Annual General Meeting, subject to statutory reserve allocations.",
  },
  {
    q: "Is an auditor mandatory for a Producer Company?",
    a: "Yes. Every Producer Company must appoint an independent practicing Chartered Accountant as its statutory auditor. The auditor must prepare an audit report verifying internal controls, member loans, and asset valuations prior to each Annual General Meeting.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Can non-farmers become shareholders in a Producer Company?",
    a: "No. The law strictly reserves shareholding in a Producer Company exclusively for active primary producers and producer institutions. However, outside professionals and experts can be appointed as expert directors or chief executive officers (CEOs) to assist in management.",
  },
  {
    q: "Why choose Merrafilings for Producer Company Incorporation?",
    a: "Merrafilings is India's leading agribusiness compliance advisory. We handle farmer KYC collation, specialized agricultural MOA & AOA drafting, MCA incorporation, Section 80PA tax certifications, and SFAC grant documentation with dedicated Agri-CA support.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "One Person Company",
  "Limited Liability Partnership",
  "Section 8 Non-Profit Company",
  "Trust Registration",
  "Partnership Firm",
  "FSSAI Food Business License",
  "GST Registration for FPOs",
  "SFAC Equity Grant Application",
  "NABARD Credit Guarantee Support",
  "AOC-4 & MGT-7 Annual Filing",
  "Statutory CA Audit for FPOs",
];

const POPULAR_SEARCHES_TAGS = [
  "Producer Company Registration Online",
  "Farmer Producer Company FPO Setup",
  "Companies Act Part IXA Producer Company",
  "SFAC Equity Grant up to 15 Lakhs",
  "Section 80PA Income Tax Exemption",
  "FPO vs Cooperative Society Differences",
  "Minimum 10 Farmers Producer Company",
  "5 Directors DIN and DSC Allotment",
  "Khasra Khatauni Farmer Land Records",
  "NABARD Collateral Free Loan for FPO",
  "Agricultural MOA AOA Drafting MCA",
  "One Member One Vote Democracy",
  "FPO Bank Account Opening Resolution",
  "Patronage Bonus for Farmer Members",
  "Form AOC-4 Financial Filing FPO",
  "Form MGT-7 Annual Return ROC",
  "Primary Producer Certificate Tehsildar",
  "Producer Company Stamp Duty by State",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Producer Company - Inception",
    shortDesc:
      "Statutory incorporation for 10 primary producers or 2 producer institutions under Companies Act, 2013...",
    expandedDesc:
      "Includes name reservation with 'Producer Company Limited' suffix via SPICe+ Part A, 5 Director Identification Numbers (DIN), 5 Class-3 DSCs, agricultural constitutionals drafting (MOA/AOA), and MCA incorporation certificate.",
    price: "₹14,899",
    priceSub: "+ MCA Government Stamp Duty & ROC Filing Fees",
    features: [
      "FPO Name Approval via MCA SPICe+ Part A",
      "5 Digital Signature Certificates (DSC Class 3)",
      "5 Director Identification Numbers (DIN)",
      "Agricultural Producer Charter Drafting (MOA & AOA)",
      "Certificate of Incorporation (COI) Issuance",
      "PAN, TAN, and Statutory Agricultural Bank Account",
      "Producer Member Register Preparation",
    ],
  },
  {
    name: "Incorporation & Subsidies",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Complete incorporation plus NABARD & SFAC matching grant registration, INC-20A, and GST setup...",
    expandedDesc:
      "Covers complete incorporation, Commencement of Business Certificate (INC-20A), Auditor Appointment (ADT-1), NABARD Equity Grant Scheme documentation, SFAC Credit Guarantee Scheme readiness, and agricultural GST registration.",
    price: "₹29,899",
    priceSub: "+ Stamp Duty | Complete Institutional FPO Setup",
    features: [
      "Complete Producer Company Incorporation Package",
      "SFAC / NABARD Equity Grant Scheme Application Dossier",
      "Commencement of Business Certificate (Form INC-20A)",
      "First Statutory Auditor Appointment (Form ADT-1)",
      "Agricultural GST Registration & Exemption Advisory",
      "First Board of Directors & General Meeting Minutes",
      "Dedicated Senior Agri-Corporate Counsel",
    ],
  },
  {
    name: "FPO Enterprise & Annual Suite",
    shortDesc:
      "The comprehensive agribusiness suite: Incorporation, NABARD/SFAC grants, APMC license & 1-Year ROC compliance...",
    expandedDesc:
      "Designed for thriving farmer producer organizations scaling commercial procurement, cold storage, or exports. Includes complete ROC annual filings, 100% tax rebate advisory under Section 80P, and APMC trader licensing.",
    price: "₹48,999",
    priceSub: "+ Stamp Duty | Full 1-Year Agribusiness Corporate Shield",
    features: [
      "Complete Incorporation + NABARD / SFAC Scheme Setup",
      "Full 1-Year ROC & MCA Annual Filing Compliance",
      "Income Tax Section 80P 100% Deduction Advisory & ITR-6",
      "State APMC / Mandi Unified Trading License Guidance",
      "FSSAI Central / State Food License Application",
      "Annual Internal Audit Support & Financial Statements",
      "Dedicated Agricultural Chartered Accountant & CS Team",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Users className="w-4 h-4" />,
    text: "Incorporation for 10+ Farmers or 2+ Producer Institutions",
  },
  {
    icon: <Landmark className="w-4 h-4" />,
    text: "NABARD & SFAC Equity Grant Advisory (Up to ₹15 Lakhs)",
  },
  {
    icon: <BadgePercent className="w-4 h-4" />,
    text: "100% Income Tax Exemption Eligibility under Section 80P",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Limited Liability Protection with Democratic Voting",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Producer Company →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Comprehensive Guide to Forming a Producer Company (FPO) in India",
  "NABARD Equity Grant & SFAC Credit Guarantee Schemes for FPOs",
  "How to Claim 100% Tax Exemption Under Section 80P for Producer Companies",
  "Voting Rights & Patronage Bonus Distribution in a Producer Company",
  "Differences Between Producer Company and Cooperative Society",
  "APMC License & e-NAM Portal Onboarding for Farmer Producer Organizations",
];

function ProducerGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
              <div>
                <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                  Producer Company Registration Online in India
                </h1>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                  A <strong className="font-medium text-slate-800">Producer Company</strong> (commonly known as a Farmer Producer Organisation or FPO) is an innovative legal corporate structure introduced under Part IXA of the <strong className="font-medium text-slate-800">Companies Act</strong>. It empowers agriculturalists, milk producers, artisans, and rural entrepreneurs to pool their resources, achieve economies of scale, and access institutional markets without losing democratic autonomy.
                </p>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                  Unlike traditional cooperative societies plagued by bureaucratic hurdles and political interference, a Producer Company operates under modern corporate law. It provides <strong className="font-medium text-slate-800">limited liability protection</strong>, nationwide business freedom, Section 80PA 100% tax benefits, and access to SFAC equity grants. At <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a>, our agribusiness legal advisors guide your founding committee through every statutory requirement.
                </p>
              </div>

              {/* Section 2: Key Benefits & Government Subsidies */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Key Benefits &amp; Government Subsidies for Producer Companies
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  The Government of India and state agencies have introduced high-impact financial incentives exclusively for registered Producer Companies:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-light text-slate-700">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      100% Tax Exemption (Sec 80PA)
                    </strong>
                    Enjoy 100% tax deduction on corporate profits from agricultural produce marketing and input supplies for FPOs having turnover up to ₹100 Crores.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      SFAC Matching Equity Grant
                    </strong>
                    Receive matching equity grants up to ₹15 Lakhs from SFAC to strengthen paid-up capital without any dilution of farmer voting rights.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      NABARD Credit Guarantees
                    </strong>
                    Access collateral-free bank loans with up to 85% credit guarantee cover under the Credit Guarantee Fund Trust for FPOs.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Democratic Governance
                    </strong>
                    Maintains 'One Member, One Vote' democracy, ensuring smallholders and marginal farmers retain equal control regardless of share size.
                  </div>
                </div>
              </div>

              {/* Section 3: Minimum Requirements Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Statutory Minimum Requirements for Producer Company Incorporation
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  To qualify for incorporation on the Central MCA portal under Part IXA, the promoter group must meet these criteria:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Requirement</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Statutory Minimum Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PRODUCER_MIN_REQUIREMENTS_TABLE.map((row, idx) => (
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
                  Eligibility Criteria for Farmer Members &amp; Directors
                </h2>
                <div className="space-y-3 text-[13px] font-light text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Primary Producer Qualification:</strong> Every shareholder must be an active primary producer producing crops, vegetables, milk, timber, handloom, or fisheries.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Director Board Composition:</strong> At least 5 directors must be appointed from among the primary producer members. Directors must hold active DINs and Class 3 DSCs.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Institutional Membership:</strong> Producer institutions (cooperative societies, self-help groups, societies) can become members or jointly promote the company.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Expert / Nominee Directors:</strong> The board may co-opt up to 1/5th of total directors as expert directors or agricultural specialists without voting rights.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Documents Required */}
              <div id="documents-section" className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for Producer Company Registration
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  We assist in collating and verifying farmer records to ensure frictionless approval from the Registrar of Companies:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* For Members & Directors */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#6B4BFF]" />
                      <span>For 10+ Members &amp; 5 Directors</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Self-attested PAN Card of all members and directors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Aadhaar Card or Voter ID / Passport for identity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Agricultural Land Document (7/12, Khasra, Khatauni, Patta)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Recent bank account statement (&lt; 2 months old)</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Registered Office */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#00A86B]" />
                      <span>For Registered Office in India</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Electricity, water, or telephone bill (&lt; 2 months old)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>No Objection Certificate (NOC) from property owner</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Rent agreement (if premises are leased)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Rural or agricultural premises are completely valid</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6: Step-by-Step Incorporation Process */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step Producer Company Incorporation Process
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-5">
                  Our structured process ensures seamless registration on the Ministry of Corporate Affairs (MCA) portal:
                </p>

                <div className="space-y-3.5">
                  {[
                    {
                      step: "Step 1",
                      title: "Digital Signatures & Producer Verification",
                      desc: "We generate Class 3 DSCs for all 5 directors and collate Revenue Land Records (7/12, Khasra) proving primary producer status for all 10+ founding shareholders.",
                    },
                    {
                      step: "Step 2",
                      title: "Name Reservation (RUN Portal)",
                      desc: "We file name options reflecting your agricultural mandate on the MCA RUN portal. The name must end with the mandatory suffix 'Producer Company Limited'.",
                    },
                    {
                      step: "Step 3",
                      title: "Drafting Agricultural MOA & AOA",
                      desc: "Our corporate lawyers draft customized Memorandum & Articles of Association incorporating Part IXA statutory clauses, voting rights, and patronage bonus rules.",
                    },
                    {
                      step: "Step 4",
                      title: "SPICe+ Part B Filing & Certificate Issuance",
                      desc: "We submit the SPICe+ Part B form to the Central Registration Centre (CRC). The Registrar issues the Certificate of Incorporation (CIN), PAN, and TAN.",
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
                        <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: Comparison Table - Producer Company vs Cooperative vs Private Ltd */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Comparison: Producer Company vs. Cooperative Society vs. Private Ltd
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Understand why Farmer Producer Companies have superseded traditional cooperatives across modern agricultural clusters:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Parameter</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Producer Company (FPO)</th>
                        <th className="py-3 px-4 font-normal">Cooperative Society</th>
                        <th className="py-3 px-4 font-normal">Private Limited Company</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PRODUCER_COMPARISON_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.producer}</td>
                          <td className="py-3 px-4 text-slate-600">{row.cooperative}</td>
                          <td className="py-3 px-4 text-slate-600">{row.pvtLtd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 8: Mandatory Annual Compliances */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Mandatory Compliances for Producer Companies
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  To safeguard company standing, protect director eligibility, and maintain Section 80PA benefits, these statutory deadlines must be honoured:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
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
                          Annual General Meeting (AGM)
                        </td>
                        <td className="py-3 px-4 text-slate-600">Member Meeting</td>
                        <td className="py-3 px-4 text-slate-600">Within 90 days from financial year close</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Financial Statements Filing
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form AOC-4</td>
                        <td className="py-3 px-4 text-slate-600">Within 30 days of Annual General Meeting</td>
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
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Producer Company Incorporation?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Merrafilings is India&apos;s foremost agribusiness corporate platform, empowering thousands of farmer producer organizations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-light text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Dedicated Agribusiness CA, CS &amp; Legal Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>End-to-End SFAC Matching Equity Grant Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>NABARD Credit Guarantee Documentation Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Transparent Pricing with zero surprise charges</span>
                  </div>
                </div>
              </div>
    </>
  );
}

export default function ProducerCompanyRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Empowering Farmers & Primary Producers"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
            Producer Company
          </span>{" "}
          Registration in India
        </>
      }
      heroSubtitle="Transform your agricultural or artisan community into a legally empowered, corporate agribusiness. Get MCA approval, NABARD scheme access, 100% tax exemption under Section 80P, and limited liability protection."
      formTitle="Start Your Producer Company (FPO)"
      formSubtitle="Enter your details below to consult with our specialized FPO incorporation and NABARD grant advisory team."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end corporate support from name reservation to incorporation certificate."
      breadcrumbCurrent="Producer Company"
      guideContent={<ProducerGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Common questions about establishing a Producer Company (Farmer Producer Organisation) in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
