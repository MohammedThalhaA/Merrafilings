"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ServiceSearchModal from "@/components/ServiceSearchModal";
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
  MessageCircle,
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

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi NCR",
  "Chandigarh",
  "Jammu & Kashmir",
  "Ladakh",
  "Puducherry",
];

const CLIENT_MINI_CARDS = [
  {
    name: "CRED",
    logo: (
      <span className="text-[17px] font-bold tracking-tighter text-slate-800 select-none">
        CRED
      </span>
    ),
  },
  {
    name: "meesho",
    logo: (
      <span className="text-[16px] font-extrabold tracking-tight text-[#9A216A] select-none">
        meesho
      </span>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-1 font-bold text-[#0C2340] text-[15px] select-none">
        <span className="text-[#0C6CF2]">R</span>azorpay
      </div>
    ),
  },
  {
    name: "Zepto",
    logo: (
      <span className="text-[17px] font-black tracking-tight text-[#7915F7] select-none">
        zepto
      </span>
    ),
  },
  {
    name: "slice",
    logo: (
      <span className="text-[17px] font-bold tracking-tight text-[#7C3AED] select-none">
        slice
      </span>
    ),
  },
  {
    name: "Cars24",
    logo: (
      <div className="flex items-center gap-0.5 font-black text-slate-800 text-[15px] select-none">
        <span>CARS</span>
        <span className="text-[#FF5A00]">24</span>
      </div>
    ),
  },
  {
    name: "Groww",
    logo: (
      <span className="text-[16px] font-bold tracking-tight text-[#00D09C] select-none">
        groww
      </span>
    ),
  },
];

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

export default function CompanyRegistrationPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing card expand states
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // FAQ states
  const [openFaq, setOpenFaq] = useState<string | null>("c1-0");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);

  // State list collapse in sidebar
  const [stateListOpen, setStateListOpen] = useState(true);

  // Client mini cards carousel scroll
  const clientScrollRef = useRef<HTMLDivElement>(null);

  const scrollClients = (direction: "left" | "right") => {
    if (clientScrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      clientScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formPhone || !formState) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#00A86B]/15 selection:text-[#00A86B]">
      {/* Top Header Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Section with Merrafilings Curved Radial Mesh Background */}
      <section className="relative overflow-visible pt-6 sm:pt-8 md:pt-10 pb-16 bg-white">
        {/* Curved gradient backdrop canvas */}
        <div
          className="absolute inset-x-0 top-0 z-0 mx-auto w-full rounded-b-[40px] sm:rounded-b-[52px] md:rounded-b-[64px] overflow-hidden pointer-events-none"
          style={{
            height: "calc(100% - 90px)",
            minHeight: "540px",
            background: `
              radial-gradient(ellipse 65% 75% at 0% 75%, 
                rgb(255, 215, 198) 0%,
                rgba(255, 226, 213, 0.95) 25%,
                rgba(255, 238, 230, 0.6) 50%,
                rgba(255, 248, 244, 0.15) 75%,
                transparent 85%
              ),
              radial-gradient(ellipse 65% 75% at 100% 75%,
                rgb(192, 226, 236) 0%,
                rgba(202, 232, 240, 0.95) 25%,
                rgba(220, 240, 247, 0.6) 50%,
                rgba(238, 248, 252, 0.15) 75%,
                transparent 85%
              ),
              linear-gradient(180deg,
                rgb(255, 255, 255) 0%,
                rgb(250, 249, 248) 35%,
                rgb(245, 243, 241) 70%,
                rgb(239, 236, 232) 100%
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Title & Tagline */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-light text-[#12023B] leading-snug">
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
                Private Limited Company
              </span>{" "}
              Registration in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Register your Private Limited Company online in India with expert assistance. Fast MCA name approval, SPICe+ incorporation, MOA &amp; AOA drafting, PAN &amp; TAN cards, and complete compliance support.
            </p>
          </div>

          {/* Hero Content Glassmorphism Box */}
          <div className="w-full max-w-[72rem] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Key Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B] mb-2 sm:mb-3">
                    Start Your Company in India
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    India&apos;s most popular legal structure for startups and ambitious founders looking to raise institutional funding and protect private assets.
                  </p>
                </div>

                {/* 5 Bullet Features */}
                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="#6B4BFF" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">MCA Name Approval (RUN Portal)</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="#6B4BFF" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">SPICe+ Incorporation Filing</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="#6B4BFF" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">MOA &amp; AOA Drafting (e-MOA/e-AOA)</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="#6B4BFF" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">PAN &amp; TAN Allotment</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="#6B4BFF" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="#documents-section"
                      className="text-[13.5px] font-semibold bg-gradient-to-r from-[#5D54FF] via-[#A767EC] to-[#F968E7] bg-clip-text text-transparent underline underline-offset-2 decoration-[#A767EC] hover:opacity-85 transition-opacity cursor-pointer"
                    >
                      Required Documents
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column: Lead Form */}
              <div className="bg-[#FAF8F5]/60 rounded-2xl p-5 sm:p-7 border border-[#E4E7EC]/70">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827]">Application Received!</h3>
                    <p className="text-[14px] text-[#475467]">
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our senior corporate incorporation specialist will contact you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 text-[13px] font-medium text-[#155EEF] hover:underline cursor-pointer"
                    >
                      Submit another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                    {/* Continue with Google */}
                    <button
                      type="button"
                      onClick={() => alert("Google Single Sign-On simulation. Please fill in the details below.")}
                      className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white hover:bg-[#F8FAFC] border border-[#D0D5DD] rounded-xl text-[14px] font-medium text-[#344054] shadow-xs transition-colors cursor-pointer"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      <span>Continue with Google</span>
                    </button>

                    {/* OR divider */}
                    <div className="relative flex items-center justify-center my-3">
                      <div className="border-t border-[#D0D5DD] w-full" />
                      <span className="bg-[#FAF8F5] px-3 text-[12px] font-semibold text-[#98A2B3] uppercase tracking-wider absolute">
                        OR
                      </span>
                    </div>

                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name *"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-md text-[13.5px] font-normal text-slate-800 placeholder-slate-400 focus:border-[#6B4BFF] focus:ring-2 focus:ring-[#6B4BFF]/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-md text-[13.5px] font-normal text-slate-800 placeholder-slate-400 focus:border-[#6B4BFF] focus:ring-2 focus:ring-[#6B4BFF]/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number with India Flag */}
                    <div className="flex">
                      <span className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-[#F8FAFC] border border-r-0 border-[#D0D5DD] rounded-l-md text-[13px] text-slate-600 font-normal select-none">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-r-md text-[13.5px] font-normal text-slate-800 placeholder-slate-400 focus:border-[#6B4BFF] focus:ring-2 focus:ring-[#6B4BFF]/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Select State */}
                    <div>
                      <select
                        required
                        value={formState}
                        onChange={(e) => setFormState(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-md text-[13.5px] font-normal text-slate-800 focus:border-[#6B4BFF] focus:ring-2 focus:ring-[#6B4BFF]/20 focus:outline-none transition-all"
                      >
                        <option value="">Select State *</option>
                        {INDIAN_STATES.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="px-8 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] to-[#D946EF] hover:opacity-95 shadow-sm transition-all cursor-pointer"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Trust Stats Cards with Hover Effects */}
            <div className="mt-8 pt-6 border-t border-slate-100/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {/* Card 1: 4.4 Verified Reviews */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(245,158,11,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E9] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <svg className="w-5 h-5 text-[#F04438] transition-colors" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    <span>4.4</span>
                    <div className="flex items-center text-amber-400 text-[11px] gap-0.5">
                      <span>★</span><span>★</span><span>★</span><span>★</span>
                      <span className="relative inline-block text-slate-300">
                        ★
                        <span className="absolute inset-0 overflow-hidden w-[40%] text-amber-400">★</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11.5px] font-light text-slate-500">Verified Reviews</p>
                </div>
              </div>

              {/* Card 2: 15+ Years of Experience */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(217,119,6,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8E7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <svg className="w-5 h-5 text-[#D97706] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9M6.75 6.75h10.5m-10.5 0a3 3 0 01-3-3V3.75h16.5v.001a3 3 0 01-3 3m-10.5 0v3.75a5.25 5.25 0 0010.5 0V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">15+ Years</p>
                  <p className="text-[11.5px] font-light text-slate-500">of Experience</p>
                </div>
              </div>

              {/* Card 3: 2 Lakh+ Customers */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(107,75,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Users className="w-5 h-5 text-[#6B4BFF] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">2 Lakh+ Customers</p>
                  <p className="text-[11.5px] font-light text-slate-500">Served Across India</p>
                </div>
              </div>

              {/* Card 4: App Tracking */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-emerald-200 hover:shadow-[0_8px_25px_rgba(0,176,116,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <Smartphone className="w-5 h-5 text-[#00B074] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">App Tracking</p>
                  <p className="text-[11.5px] font-light text-slate-500">Live Status &amp; Alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section (Single-row Mini Cards Carousel) */}
      <section className="py-7 border-y border-slate-100 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => scrollClients("left")}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-all shrink-0 cursor-pointer"
              aria-label="Scroll clients left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div
              ref={clientScrollRef}
              className="flex items-center gap-3 sm:gap-3.5 overflow-x-auto scrollbar-none scroll-smooth py-1 px-1 flex-1 min-w-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CLIENT_MINI_CARDS.map((client, idx) => (
                <div
                  key={idx}
                  className="h-[52px] sm:h-[54px] w-[130px] sm:w-[145px] px-3.5 rounded-xl border border-slate-200/85 bg-white flex items-center justify-center shadow-3xs hover:shadow-xs hover:border-slate-300 transition-all shrink-0 cursor-pointer select-none"
                >
                  {client.logo}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollClients("right")}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-all shrink-0 cursor-pointer"
              aria-label="Scroll clients right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section (Matching exact Merrafilings design with Green Hover Border & Register Button) */}
      <section id="pricing" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-normal text-[#111827] leading-snug">
              Simple packages. Transparent{" "}
              <span className="bg-gradient-to-r from-[#7052FF] via-[#9E6AFF] to-[#E966DF] bg-clip-text text-transparent font-normal">
                pricing.
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#7052FF] to-[#E966DF] rounded-full mx-auto mt-2 mb-3" />
            <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500">
              Transparent pricing and end-to-end corporate support from name reservation to incorporation certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: Private Limited Company - Incorporation */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Private Ltd - Incorporation
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Register your company in just 7–10 days. Online, investor-ready &amp; hassle-free incorporation...{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === 1 ? null : 1);
                    }}
                    className="text-[#155EEF] font-normal hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                  >
                    {expandedCard === 1 ? "Read less ⌃" : "Read more ⌵"}
                  </button>
                </p>
                {expandedCard === 1 && (
                  <p className="text-[12px] font-light text-slate-600 mt-2 bg-[#F8FAFC] p-3 rounded-lg border border-[#E4E7EC]">
                    Includes RUN name reservation, Class 3 DSC for 2 directors, DIN allotment, e-MOA &amp; e-AOA drafting, SPICe+ Part B incorporation filing, Certificate of Incorporation (CIN), and PAN/TAN cards.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹2,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee &amp; DSC extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>MCA Name Reservation (RUN Portal)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Class 3 DSC for 2 Directors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>DIN Allotment for 2 Directors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Drafting of e-MOA (INC-33) &amp; e-AOA (INC-34)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Certificate of Incorporation (CIN), PAN &amp; TAN</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === 1 ? null : 1);
                    }}
                    className="text-[12px] font-normal text-[#00B074] hover:underline cursor-pointer mt-2 block"
                  >
                    +2 more
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Package 2: Incorporation + Compliance (Recommended) */}
            <div className="group bg-white rounded-[22px] border-[2px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-[0_20px_40px_rgba(0,176,116,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B074] text-white text-[11px] font-medium tracking-wide uppercase px-3 py-0.5 rounded-full shadow-2xs">
                Most Popular
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Incorporation &amp; Compliance
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Full incorporation plus mandatory post-incorporation setup, Commencement of Business (INC-20A), and 1st year compliances...{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === 2 ? null : 2);
                    }}
                    className="text-[#155EEF] font-normal hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                  >
                    {expandedCard === 2 ? "Read less ⌃" : "Read more ⌵"}
                  </button>
                </p>
                {expandedCard === 2 && (
                  <p className="text-[12px] font-light text-slate-600 mt-2 bg-[#F8FAFC] p-3 rounded-lg border border-[#E4E7EC]">
                    Includes full incorporation package plus Form INC-20A filing, issuance of physical share certificates, statutory registers setup, GST registration, and first board meeting documentation.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹19,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Complete Post-Inc Setup</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Complete Private Limited Incorporation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Commencement of Business (Form INC-20A)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Government GST Registration Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Share Certificates &amp; Statutory Registers (Sec 88)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated CA &amp; Corporate Legal Advisor</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === 2 ? null : 2);
                    }}
                    className="text-[12px] font-normal text-[#00B074] hover:underline cursor-pointer mt-2 block"
                  >
                    +3 more
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-white bg-[#00B074] hover:bg-[#009B66] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Package 3: Comprehensive Startup Suite */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Comprehensive Startup Suite
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Total annual compliance coverage: incorporation, GST, trademark application, accounting, and annual ROC filings...{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === 3 ? null : 3);
                    }}
                    className="text-[#155EEF] font-normal hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                  >
                    {expandedCard === 3 ? "Read less ⌃" : "Read more ⌵"}
                  </button>
                </p>
                {expandedCard === 3 && (
                  <p className="text-[12px] font-light text-slate-600 mt-2 bg-[#F8FAFC] p-3 rounded-lg border border-[#E4E7EC]">
                    Includes full incorporation package, INC-20A, 1 Trademark application (Form TM-A), Form AOC-4 &amp; MGT-7 filings, director KYC (DIR-3 KYC for 2), corporate tax return (ITR-6), and 1-year Merrafilings Ledgers cloud software.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹29,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Full 1st Year Compliance &amp; TM</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Everything in Incorporation &amp; Compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>1 Brand Trademark Application (TM-A Filing)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Annual ROC Filing: Form AOC-4 &amp; Form MGT-7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Director KYC (DIR-3 KYC for 2 Directors)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Corporate Income Tax Return (ITR-6) Filing</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === 3 ? null : 3);
                    }}
                    className="text-[12px] font-normal text-[#00B074] hover:underline cursor-pointer mt-2 block"
                  >
                    +3 more
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Sidebar Grid Section */}
      <section id="overview-section" className="py-12 bg-[#FAF9F7]/50 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[13px] font-light text-slate-500 mb-6 flex-wrap">
            <a href="/" className="hover:text-[#155EEF] transition-colors">
              Merrafilings
            </a>
            <span className="text-slate-300">/</span>
            <a href="/startup" className="hover:text-[#155EEF] transition-colors">
              Business Registration
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-[#00B074] font-normal">Private Limited Company</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Comprehensive Guide Content (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-2xs space-y-10">
              {/* Section 1: Overview */}
              <div>
                <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                  Private Limited Company Registration Online in India
                </h1>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                  A <strong className="font-medium text-slate-800">Private Limited Company</strong> is India&apos;s most sought-after and respected corporate structure for entrepreneurs, startups, and growing enterprises. Regulated by the <strong className="font-medium text-slate-800">Companies Act, 2013</strong> and the Ministry of Corporate Affairs (MCA), it grants limited liability protection, a separate legal personality, and an established framework for raising venture capital and equity funding.
                </p>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                  With a Private Limited Company, shareholders are not personally liable for company debts beyond their subscribed share capital. At <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a>, our team of dedicated Chartered Accountants and corporate lawyers manage your entire incorporation process—from RUN name reservation to Certificate of Incorporation and post-incorporation commencement filings.
                </p>
              </div>

              {/* Section 2: Key Advantages of a Private Limited Company */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Should You Register a Private Limited Company?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Entrepreneurs choose the Private Limited corporate structure because it provides the strongest institutional foundation for business expansion:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-light text-slate-700">
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
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Before applying on the MCA SPICe+ portal, verify that your founding group satisfies these corporate standards:
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
                <div className="space-y-3 text-[13px] font-light text-slate-600">
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
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Keep clear digital scanned copies of the following documents ready for frictionless MCA filing:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* For Directors & Shareholders */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#6B4BFF]" />
                      <span>For All Directors &amp; Shareholders</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
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
                    <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
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
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-5">
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
                        <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">{st.desc}</p>
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
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Compare the major parameters before finalizing your company structure:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
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
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Post-incorporation, every Private Limited Company must fulfill these statutory MCA and Income Tax compliances:
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
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Merrafilings is India&apos;s leading tech-driven corporate services platform, trusted by over 2 Lakh businesses nationwide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-light text-slate-700">
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
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Consult Experts Card with 3 Avatars */}
              <div
                onClick={() => setIsContactOpen(true)}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xs p-4 flex items-center justify-between transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                      alt="Expert 1"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                      alt="Expert 2"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces"
                      alt="Expert 3"
                    />
                  </div>
                  <span className="text-[14px] font-normal text-slate-800">
                    Consult <span className="text-[#155EEF] font-normal">Experts</span>
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] transition-colors" />
              </div>

              {/* Related Guides Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-5">
                  <h4 className="font-normal text-[14px] text-slate-800 mb-4">Related Guides</h4>
                  <ul className="space-y-3.5 text-[12.5px] font-light text-slate-700">
                    {[
                      "Understanding Private Limited Company Structure",
                      "How to Choose a Unique Company Name on MCA",
                      "Step-by-Step Guide to Form INC-20A Commencement",
                      "Key Differences Between Private Limited and LLP",
                      "How to Issue ESOPs in a Private Limited Company",
                      "Mandatory Annual ROC Filings (AOC-4 and MGT-7)",
                    ].map((guide, idx) => (
                      <li key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                        <a
                          href="#overview-section"
                          className="flex items-start gap-2.5 text-slate-600 hover:text-[#155EEF] transition-colors group"
                        >
                          <span className="text-slate-400 group-hover:text-[#155EEF] shrink-0 text-[13px] leading-tight">→</span>
                          <span className="line-clamp-2 leading-snug">{guide}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Company Registration by State Directory */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-normal text-[14px] text-slate-800">Company Registration by State</span>
                  <button
                    type="button"
                    onClick={() => setStateListOpen(!stateListOpen)}
                    className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    {stateListOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
                {stateListOpen && (
                  <div className="max-h-[380px] overflow-y-auto p-4 space-y-1.5 text-[12.5px] font-light">
                    {INDIAN_STATES.slice(0, 18).map((st, idx) => (
                      <a
                        key={idx}
                        href="#overview-section"
                        className="flex items-center justify-between py-1.5 px-2 text-[#00B074] hover:text-emerald-700 hover:bg-emerald-50/50 rounded-lg transition-colors border-b border-slate-50 last:border-0"
                      >
                        <span>Company Registration in {st}</span>
                        <span className="text-slate-300 text-[11px]">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section (Matching exact Merrafilings 2-column reference design) */}
      <section className="py-14 sm:py-18 bg-white border-t border-[#E4E7EC]">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Green Accent Dash */}
          <div className="w-10 h-[3px] bg-[#00A86B] mb-3.5 rounded-full" />

          {/* Section Header */}
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-normal text-slate-900 tracking-tight leading-snug">
            Frequently asked questions
          </h2>
          <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500 mt-1.5 mb-8">
            Common questions about Private Limited Company Incorporation Starting at ₹2,899 in India.
          </p>

          {/* 2-Column FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Column 1 */}
            <div className="space-y-3.5">
              {(showMoreFaqs ? [...FAQ_COL_1, ...FAQ_EXTRA_COL_1] : FAQ_COL_1).map((faq, idx) => {
                const faqId = `c1-${idx}`;
                const isOpen = openFaq === faqId;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaq(isOpen ? null : faqId)}
                    className={`bg-white rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden group ${
                      isOpen
                        ? "border-[#00B074] shadow-xs"
                        : "border-slate-200/90 hover:border-[#00B074] hover:shadow-2xs"
                    }`}
                  >
                    <div className="py-4 px-5 flex items-center justify-between gap-4">
                      <span className="font-normal text-[13.5px] sm:text-[14px] text-slate-800 leading-snug group-hover:text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#00B074]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="px-5 pb-4.5 pt-1 text-[13px] font-light text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              {(showMoreFaqs ? [...FAQ_COL_2, ...FAQ_EXTRA_COL_2] : FAQ_COL_2).map((faq, idx) => {
                const faqId = `c2-${idx}`;
                const isOpen = openFaq === faqId;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaq(isOpen ? null : faqId)}
                    className={`bg-white rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden group ${
                      isOpen
                        ? "border-[#00B074] shadow-xs"
                        : "border-slate-200/90 hover:border-[#00B074] hover:shadow-2xs"
                    }`}
                  >
                    <div className="py-4 px-5 flex items-center justify-between gap-4">
                      <span className="font-normal text-[13.5px] sm:text-[14px] text-slate-800 leading-snug group-hover:text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#00B074]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="px-5 pb-4.5 pt-1 text-[13px] font-light text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Load more questions button */}
          <div className="text-center mt-9 mb-14">
            <button
              type="button"
              onClick={() => setShowMoreFaqs(!showMoreFaqs)}
              className="px-6 py-2.5 rounded-lg bg-[#00A86B] hover:bg-[#00925d] text-white text-[13.5px] font-medium transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>{showMoreFaqs ? "Show less questions" : "Load more questions"}</span>
            </button>
          </div>

          {/* Related Services - Business Registration Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 mb-6">
            <h3 className="font-normal text-[15px] sm:text-[16px] text-slate-800 mb-4">
              Related Services - Business Registration
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {RELATED_SERVICES_TAGS.map((tag, idx) => (
                <a
                  key={idx}
                  href="#pricing"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg border border-slate-200/90 bg-white text-[12px] sm:text-[12.5px] font-light text-slate-600 hover:text-[#00A86B] hover:border-[#00A86B] transition-all shadow-3xs hover:shadow-2xs cursor-pointer"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Searches Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 mb-6">
            <h3 className="font-normal text-[15px] sm:text-[16px] text-slate-800 mb-4">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {POPULAR_SEARCHES_TAGS.map((tag, idx) => (
                <a
                  key={idx}
                  href="#pricing"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg border border-slate-200/90 bg-white text-[12px] sm:text-[12.5px] font-light text-slate-600 hover:text-[#00A86B] hover:border-[#00A86B] transition-all shadow-3xs hover:shadow-2xs cursor-pointer"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsContactOpen(true)}
          className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#00BF72] hover:bg-[#00AB66] text-white font-medium text-[13.5px] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-white text-[#00BF72]" />
          <span>Live chat with experts</span>
        </button>
      </div>

      {/* Global Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        serviceTitle="Private Limited Company Registration in India"
      />

      <ServiceSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={() => setIsContactOpen(true)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
