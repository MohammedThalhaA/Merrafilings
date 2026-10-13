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
  Tractor,
  Sprout,
  Wheat,
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

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  originalPrice: string;
  gstNote: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: "basic",
    name: "Producer Co. Incorporation",
    price: "₹14,899",
    originalPrice: "₹24,999",
    gstNote: "+ Govt fees & Stamp Duty as applicable",
    description: "Full statutory MCA registration for 10 individual farmers or 2 producer institutions.",
    features: [
      "SPICe+ Part A Name Reservation (Ending with Producer Company Limited)",
      "Class-3 DSC for 5 Proposed Directors",
      "DIN Allotment for 5 Directors",
      "Drafting of Agricultural MOA & AOA (Schedule I compliant)",
      "SPICe+ Part B Incorporation Filing with ROC",
      "Certificate of Incorporation (CIN) Allotment",
      "Company PAN, TAN & EPFO/ESIC Registration",
      "Zero-balance Corporate Bank Account Opening Assistance",
    ],
  },
  {
    id: "standard",
    name: "Incorporation + Agri Licensing",
    badge: "RECOMMENDED",
    price: "₹24,899",
    originalPrice: "₹38,999",
    gstNote: "+ Govt fees & Stamp Duty as applicable",
    popular: true,
    description: "Complete incorporation along with essential post-setup agricultural business licenses.",
    features: [
      "Everything included in Producer Co. Incorporation",
      "Custom Drafting of Farmer Share-Certificates & By-laws",
      "GST Registration for agricultural processing & trading",
      "FSSAI State/Central Food Safety Registration support",
      "APMC Mandi Trading license documentation guidance",
      "Udyam / MSME Registration for agri-infrastructure subsidies",
      "Dedicated Corporate Secretarial Consultant for 6 Months",
    ],
  },
  {
    id: "comprehensive",
    name: "FPO All-Inclusive + Subsidy Setup",
    badge: "TOTAL FPO VALUE",
    price: "₹39,899",
    originalPrice: "₹65,000",
    gstNote: "+ Govt fees as applicable",
    description: "End-to-end institutional setup, SFAC equity grant advisory & 1-year compliance.",
    features: [
      "Everything in Incorporation + Agri Licensing plan",
      "SFAC Equity Grant Scheme Advisory & Application dossier",
      "NABARD Institutional Loan eligibility & project report framework",
      "1-Year Mandatory Corporate Annual Filings (Form MGT-7, AOC-4)",
      "Annual General Meeting (AGM) documentation drafting",
      "Corporate Income Tax Return (ITR-6) Filing with 80PA Advisory",
      "DIR-3 KYC for all 5 Directors",
    ],
  },
];

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is a Producer Company under the Companies Act?",
    a: "A Producer Company is a legally recognized corporate entity established under the Companies Act, 2013 (Part IXA) by primary producers—such as farmers, milk producers, artisans, and fishermen. It bridges the gap between traditional cooperative societies and private limited companies by giving farmers corporate legal identity, limited liability, and professional governance while maintaining the democratic cooperative principle of 'one member, one vote'.",
  },
  {
    q: "What is the minimum membership required to form a Producer Company?",
    a: "Under Section 378C of the Companies Act, a Producer Company can be formed by: (1) Any 10 or more individual primary producers, or (2) Any two or more producer institutions, or (3) A combination of 10 or more individuals and producer institutions. There is no maximum limit on the total number of members.",
  },
  {
    q: "How many directors are needed for a Producer Company?",
    a: "Every Producer Company must have a minimum of 5 Directors and a maximum of 15 Directors. Directors must be primary producers elected by the members, and at least one director must be a resident of India. Merrafilings assists all 5 initial directors in obtaining Digital Signature Certificates (DSC) and Director Identification Numbers (DIN).",
  },
  {
    q: "What tax benefits are available to a Producer Company in India?",
    a: "Producer Companies enjoy massive tax incentives under Section 80PA of the Income Tax Act, 1961. A 100% deduction of profits is available for Producer Companies with a total annual turnover up to ₹100 Crores derived from eligible businesses, such as marketing members' produce, processing agricultural goods, and manufacturing/supplying farming inputs.",
  },
  {
    q: "Are Producer Companies eligible for government grants and NABARD subsidies?",
    a: "Yes! Producer Companies (FPOs) are the primary vehicle recognized by Central and State Governments for agricultural schemes. They are eligible for: (1) SFAC (Small Farmers' Agribusiness Consortium) Equity Grant matching up to ₹15 Lakhs, (2) SFAC Credit Guarantee Fund up to ₹2 Crores, (3) NABARD Producer Organization Development Fund (PODF), and (4) Agriculture Infrastructure Fund (AIF) interest subvention.",
  },
  {
    q: "Can a Producer Company sell goods in the open market and export?",
    a: "Yes. Unlike societies that often face state boundary constraints, a Producer Company operates as a private company with national jurisdiction. It can process, brand, sell directly to FMCG retailers, participate in e-NAM (electronic National Agriculture Market), and engage in international exports under its own corporate brand name.",
  },
  {
    q: "What is the voting rights structure in a Producer Company?",
    a: "Producer Companies follow democratic cooperative principles. In a company comprising individual producers, every member has a single vote ('one member, one vote'), regardless of how many shares they hold. If the company consists of producer institutions, voting is based on patronage or produce delivered to the company.",
  },
  {
    q: "What documents prove that the members are primary producers?",
    a: "To prove primary producer status during ROC scrutiny, members must provide agricultural land ownership records (such as 7/12 extract, Khasra/Khatauni, Patta copy) or a certificate issued by the Village Tehsildar / Gram Panchayat Pradhan confirming active agricultural produce or dairy activities.",
  },
  {
    q: "How does a Producer Company differ from a Cooperative Society?",
    a: "Cooperative societies are registered under state-specific Cooperative Societies Acts, often subject to bureaucratic government registrar interference and limited to one state. A Producer Company is registered under the Central Companies Act, enjoys nationwide operational freedom, has professional corporate governance, can raise institutional credit, and is completely free from political registrar control.",
  },
  {
    q: "What is the mandatory annual compliance for a Producer Company?",
    a: "A Producer Company must hold its Annual General Meeting (AGM) within 90 days from the close of the financial year. It must file Form MGT-7 (Annual Return) and Form AOC-4 (Financial Statements with ROC within 60 and 30 days of AGM respectively), undergo a statutory audit by a practicing Chartered Accountant, and file Corporate Income Tax Return (ITR-6) by September 30th.",
  },
];

export default function ProducerCompanyRegistrationPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "objectives" | "eligibility" | "documents" | "process" | "comparison" | "compliance">("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hero Lead Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Clients carousel scroll
  const clientScrollRef = useRef<HTMLDivElement>(null);

  const scrollClients = (direction: "left" | "right") => {
    if (clientScrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      clientScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formPhone || !formState) {
      alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans antialiased selection:bg-[#6B4BFF]/10 selection:text-[#6B4BFF]">
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-white">
        <div
          className="absolute inset-x-0 top-0 z-0 mx-auto w-full max-w-[1600px] h-[520px] pointer-events-none opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% 20%, rgba(200, 190, 255, 0.35) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 80% 25%, rgba(255, 210, 230, 0.35) 0%, transparent 70%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Title & Tagline */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-light text-[#12023B] leading-snug">
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
                Producer Company
              </span>{" "}
              Registration in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Incorporate a Farmer Producer Company (FPO/FPC) in India under the Companies Act. Empower farmers and agricultural producers with corporate identity, NABARD &amp; SFAC subsidies, Section 80PA tax benefits, and institutional funding.
            </p>

            {/* Price Pill Banner */}
            <div className="mt-4 flex items-center justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-blue-500 bg-white shadow-xs hover:shadow-md hover:bg-blue-50/50 transition-all cursor-pointer group"
              >
                <span className="text-xs sm:text-sm text-slate-700">
                  Producer Company starting from{" "}
                  <strong className="text-slate-900 font-semibold">₹14,899</strong>
                </span>
                <span className="text-xs sm:text-sm font-medium text-blue-600 underline group-hover:text-blue-700 flex items-center gap-0.5">
                  View Price
                  <ChevronRight className="w-3.5 h-3.5 inline" />
                </span>
              </a>
            </div>
          </div>

          {/* Hero Content Glassmorphism Box */}
          <div className="w-full max-w-[72rem] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Key Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B] mb-2 sm:mb-3">
                    Start Your Producer Company
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Empower farmers and rural producers with collective bargaining, government agricultural grants, equity grants, and complete MCA corporate incorporation with Merrafilings expert CA/CS support.
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
                    <span className="text-[13.5px] font-light text-slate-700">
                      MCA Name Reservation (Part A)
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="#6B4BFF"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">
                      SPICe+ Part B Incorporation Filing
                    </span>
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
                    <span className="text-[13.5px] font-light text-slate-700">
                      Custom Agricultural MOA &amp; AOA Drafting
                    </span>
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
                    <span className="text-[13.5px] font-light text-slate-700">
                      PAN, TAN &amp; Bank Account Setup
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="#6B4BFF"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="#documents-required"
                      className="text-[13.5px] font-semibold bg-gradient-to-r from-[#5D54FF] via-[#A767EC] to-[#F968E7] bg-clip-text text-transparent underline underline-offset-2 decoration-[#A767EC] hover:opacity-85 transition-opacity cursor-pointer"
                    >
                      Required Documents
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column: Interactive Lead Generation Form */}
              <div className="bg-[#FAF8F5]/60 rounded-2xl p-5 sm:p-7 border border-[#E4E7EC]/70">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827]">
                      Application Received!
                    </h3>
                    <p className="text-[14px] text-[#475467]">
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. A Senior FPO &amp; Agricultural Corporate Specialist from Merrafilings will contact you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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
                      onClick={() =>
                        alert(
                          "Google Single Sign-On simulation. Please enter your details below."
                        )
                      }
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
                        pattern="[0-9]{10}"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="flex-1 min-w-0 px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-r-md text-[13.5px] font-normal text-slate-800 placeholder-slate-400 focus:border-[#6B4BFF] focus:ring-2 focus:ring-[#6B4BFF]/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Select State */}
                    <div>
                      <select
                        required
                        value={formState}
                        onChange={(e) => setFormState(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-md text-[13.5px] font-normal text-slate-700 focus:border-[#6B4BFF] focus:ring-2 focus:ring-[#6B4BFF]/20 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="">Select State *</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Continue Button */}
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
              {/* Card 1: 4.8 Verified Reviews */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(245,158,11,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E9] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <svg className="w-5 h-5 text-[#F04438] transition-colors" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    <span>4.8</span>
                    <div className="flex items-center text-amber-400 text-[11px] gap-0.5">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
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
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-orange-200 hover:shadow-[0_8px_25px_rgba(234,88,12,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF4ED] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <svg className="w-5 h-5 text-[#EA580C] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">2 Lakh+ Customers</p>
                  <p className="text-[11.5px] font-light text-slate-500">Trusted across India</p>
                </div>
              </div>

              {/* Card 4: App Tracking */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-rose-200 hover:shadow-[0_8px_25px_rgba(240,68,56,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF1F3] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <svg className="w-5 h-5 text-[#F04438] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">App Tracking</p>
                  <p className="text-[11.5px] font-light text-slate-500">Live status updates</p>
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

      {/* Pricing Packages Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-[#FAF9F7]/70 border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200/60 text-xs font-medium text-emerald-700 mb-3">
              <Sprout className="w-3.5 h-3.5" />
              <span>Dedicated Agricultural &amp; FPO Packages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#12023B] tracking-tight">
              Transparent Pricing for Producer Companies
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-light text-slate-600">
              Clear corporate incorporation plans designed for farmers, rural collectives, and agricultural startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-white border-2 border-[#6B4BFF] shadow-xl shadow-purple-900/5 -translate-y-1"
                    : "bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#594CF5] to-[#D946EF] text-white text-[11px] font-semibold tracking-wide uppercase shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900">{tier.name}</h3>
                  <p className="text-xs font-light text-slate-500 mt-1 min-h-[36px]">{tier.description}</p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">{tier.price}</span>
                      <span className="text-xs text-slate-400 line-through">{tier.originalPrice}</span>
                    </div>
                    <p className="text-[11.5px] font-light text-slate-500 mt-1">{tier.gstNote}</p>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    className={`w-full py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer shadow-sm ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#594CF5] to-[#D946EF] text-white hover:opacity-95"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Get Started with {tier.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Knowledge Sections with Interactive Navigation Tabs */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200/80 mb-10">
            {[
              { id: "overview", label: "Overview & Features" },
              { id: "objectives", label: "Statutory Objectives" },
              { id: "eligibility", label: "Eligibility & Members" },
              { id: "documents", label: "Documents Required" },
              { id: "process", label: "Step-by-Step Incorporation" },
              { id: "comparison", label: "Producer Co. vs Society vs Pvt Ltd" },
              { id: "compliance", label: "Annual Compliance" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#1F1646] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-10 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B]">
                    What is a Producer Company in India?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    A <strong>Producer Company</strong> is a specialized corporate vehicle governed by <strong>Part IXA (Sections 378A to 378ZU) of the Companies Act, 2013</strong>. It is designed to empower agricultural producers, small farmers, horticulturists, and rural artisans by integrating the mutual-benefit principles of a cooperative society with the statutory protection, transparency, and operational efficiency of a private limited company.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    The concept was introduced based on the recommendations of the eminent Dr. Y.K. Alagh Committee to overcome the political interference and bureaucratic constraints of the Cooperative Societies Act. A Producer Company functions as a full-fledged corporate entity with <strong>perpetual succession, limited liability, national operating jurisdiction, and the ability to access institutional finance</strong> from NABARD, SFAC, and commercial banks.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-[#FAF9F7] p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-sm font-medium text-[#1F1646] flex items-center gap-2">
                    <Wheat className="w-4 h-4 text-emerald-600" />
                    <span>Producer Company Key Highlights</span>
                  </h3>
                  <ul className="space-y-2 text-xs font-light text-slate-600">
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Governing Law:</span>
                      <strong className="text-slate-800">Companies Act 2013 (Part IXA)</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Minimum Members:</span>
                      <strong className="text-slate-800">10 Producers / 2 Institutions</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Minimum Directors:</span>
                      <strong className="text-slate-800">5 Directors (Max 15)</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Tax Exemption:</span>
                      <strong className="text-[#00A86B] font-semibold">100% u/s 80PA (upto ₹100Cr)</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>SFAC Equity Grant:</span>
                      <strong className="text-slate-800">Up to ₹15 Lakhs matching</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 6 Key Benefits Cards */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#12023B] mb-5">
                  Core Advantages of a Producer Company (FPO/FPC)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      icon: <BadgePercent className="w-5 h-5 text-emerald-600" />,
                      title: "100% Tax Exemption (Sec 80PA)",
                      desc: "Eligible Producer Companies enjoy a complete 100% corporate tax deduction on agricultural profits for annual turnovers up to ₹100 Crores.",
                    },
                    {
                      icon: <Landmark className="w-5 h-5 text-purple-600" />,
                      title: "SFAC & NABARD Equity Grants",
                      desc: "Eligible for matching equity grants of up to ₹15 Lakhs per FPO from SFAC and credit guarantee cover of up to ₹2 Crores without collateral.",
                    },
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
                      title: "Limited Liability for Members",
                      desc: "Farmer members are protected with limited liability. Personal agricultural land and assets cannot be attached for company business liabilities.",
                    },
                    {
                      icon: <Scale className="w-5 h-5 text-amber-600" />,
                      title: "Democratic Member Governance",
                      desc: "Operates strictly on the 'one member, one vote' cooperative principle, preventing hostile corporate takeovers by outside wealthy investors.",
                    },
                    {
                      icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
                      title: "Enhanced Market Bargaining Power",
                      desc: "Bulk purchasing of quality seeds and fertilizers lowers input costs by 20-30%, while collective grading and marketing ensures higher crop realization.",
                    },
                    {
                      icon: <Globe2 className="w-5 h-5 text-indigo-600" />,
                      title: "National & Global Market Access",
                      desc: "Can trade across Indian state borders, establish direct corporate supply contracts with retail conglomerates, and export agri-produce internationally.",
                    },
                  ].map((card, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[#FAF9F7]/70 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3">
                        {card.icon}
                      </div>
                      <h4 className="text-[15px] font-medium text-slate-900">{card.title}</h4>
                      <p className="text-xs font-light text-slate-600 mt-1.5 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Objectives */}
          {activeTab === "objectives" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Statutory Objectives of a Producer Company
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Under Section 378B of the Companies Act, the Memorandum of Association (MOA) of a Producer Company must specify one or more of the following permitted statutory objectives:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    num: "1",
                    title: "Production & Harvesting Activities",
                    desc: "Production, harvesting, procurement, grading, pooling, handling, marketing, selling, and export of the primary produce of the members or import of goods or services for their benefit.",
                  },
                  {
                    num: "2",
                    title: "Processing & Value Addition",
                    desc: "Processing including preserving, drying, distilling, brewing, venting, canning, packaging, and cold-storage of produce of its members to secure maximum value addition.",
                  },
                  {
                    num: "3",
                    title: "Manufacture & Supply of Farming Inputs",
                    desc: "Manufacturing, sale, or supply of machinery, equipment, agricultural implements, certified seeds, fertilizers, organic pesticides, and animal fodder to member producers.",
                  },
                  {
                    num: "4",
                    title: "Education, Technical Advice & Training",
                    desc: "Providing education on the mutual assistance principles to members and others, training in modern agronomic techniques, drip irrigation, organic farming, and farm mechanization.",
                  },
                  {
                    num: "5",
                    title: "Consultancy, Insurance & Testing Services",
                    desc: "Rendering technical services, consultancy services, soil testing, lab certification, and insurance of primary produce, livestock, and member agricultural machinery.",
                  },
                  {
                    num: "6",
                    title: "Power Generation & Land Water Resource Management",
                    desc: "Generation, transmission, and distribution of power, revitalization of land and water resources, their use, conservation, and communications relatable to primary produce.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
                      {item.num}
                    </span>
                    <h3 className="text-base font-medium text-slate-900 pt-1">{item.title}</h3>
                    <p className="text-xs font-light text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Eligibility */}
          {activeTab === "eligibility" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Eligibility Criteria for Registering a Producer Company
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Members must fulfill the statutory legal definitions under Section 378C to form a Producer Company:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-4">
                  <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#6B4BFF]" />
                    <span>Member &amp; Founder Requirements</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Minimum 10 Individuals:</strong> At least 10 individuals, each being a primary agricultural producer (farmer, dairy owner, artisan).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>OR 2 Producer Institutions:</strong> Two or more registered cooperative institutions or entities composed of primary producers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Producer Status Proof:</strong> Every individual subscriber must produce proof of engaging in primary agriculture (Land 7/12 extract or Tehsildar certificate).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Age Requirement:</strong> All individual members must be natural persons who have attained 18 years of age.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-4">
                  <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#6B4BFF]" />
                    <span>Director &amp; Board Requirements</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Minimum 5 Directors:</strong> At least 5 directors must be nominated on the initial board (maximum allowable is 15 directors).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Resident Director:</strong> At least one director must have resided in India for not less than 182 days during the financial year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>DSC &amp; DIN:</strong> All 5 initial directors must obtain Class-3 Digital Signatures and Director Identification Numbers (arranged by Merrafilings).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Name Mandate:</strong> The proposed name must strictly conclude with the words <em>"Producer Company Limited"</em>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Documents Required */}
          {activeTab === "documents" && (
            <div id="documents-required" className="space-y-8 animate-fade-in scroll-mt-24">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Documents Required for Producer Company Registration
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  All documents can be submitted digitally as clear scans to our compliance portal:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center gap-2.5 text-[#12023B] font-medium text-base">
                    <FileCheck className="w-5 h-5 text-[#6B4BFF]" />
                    <span>1. Member &amp; Director KYC Documents</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>PAN Card:</strong> Self-attested PAN copies for all 10+ members and 5 directors.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Identity Proof:</strong> Self-attested copy of Aadhaar Card, Voter ID, or Passport.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Address Proof:</strong> Bank passbook statement, Electricity bill, or Phone bill (less than 2 months old).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Farmer Certificate / Land Document:</strong> 7/12 extract, Patta copy, or Gram Panchayat Pradhan verification.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Passport Photos:</strong> Recent passport-sized color photos of all proposed directors.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center gap-2.5 text-[#12023B] font-medium text-base">
                    <Building className="w-5 h-5 text-[#6B4BFF]" />
                    <span>2. Registered Office &amp; Incorporation Proof</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Utility Proof:</strong> Electricity bill, Property tax receipt, or Water bill of the registered office premises.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>NOC from Landlord:</strong> Signed No-Objection Certificate from the property owner.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Rent Agreement:</strong> Valid registered or notarized rent agreement if the premises are rented.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>DIR-2 Consent:</strong> Formal signed consent from 5 proposed directors to act in that capacity.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>INC-9 Declaration:</strong> Affidavit &amp; declaration of non-conviction by all subscribers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Step-by-Step Process */}
          {activeTab === "process" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Step-by-Step Incorporation Process for Producer Company
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  How Merrafilings incorporates your Producer Company through the MCA SPICe+ portal:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    step: "01",
                    title: "DSC & DIN Generation",
                    desc: "We process Class-3 Digital Signature Certificates (DSC) with USB tokens for all 5 initial directors and generate their Director Identification Numbers.",
                  },
                  {
                    step: "02",
                    title: "SPICe+ Part A Name Reservation",
                    desc: "We submit two proposed names via MCA RUN/SPICe+ Part A ensuring the name reflects agricultural activities and ends with 'Producer Company Limited'.",
                  },
                  {
                    step: "03",
                    title: "MOA & AOA Drafting",
                    desc: "Our legal advocates draft your specialized agricultural Memorandum & Articles of Association strictly incorporating mutual-benefit provisions under Section 378B.",
                  },
                  {
                    step: "04",
                    title: "SPICe+ Part B MCA Submission",
                    desc: "We file SPICe+ Part B along with AGILE-PRO-S (EPFO, ESIC, Professional Tax, Bank Account) and all agricultural verification proofs.",
                  },
                  {
                    step: "05",
                    title: "ROC Scrutiny & Incorporation",
                    desc: "The Registrar of Companies (ROC) reviews the agricultural credentials and issues the Certificate of Incorporation (CIN).",
                  },
                  {
                    step: "06",
                    title: "PAN, TAN & FPO Scheme Setup",
                    desc: "We deliver the entity PAN, TAN, and Certificate of Incorporation, and assist with corporate bank opening and SFAC/NABARD scheme onboarding.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 relative space-y-2">
                    <span className="text-xs font-mono font-bold text-[#6B4BFF] bg-purple-100/70 px-2 py-0.5 rounded">
                      STEP {item.step}
                    </span>
                    <h3 className="text-base font-medium text-slate-900 pt-1">{item.title}</h3>
                    <p className="text-xs font-light text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 6: Comparison Table */}
          {activeTab === "comparison" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Comparison: Producer Company vs Cooperative Society vs Private Limited
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Understand why modern farming groups and agritech founders prefer the Producer Company structure:
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-[13px] border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-[#FAF9F7] border-b border-slate-200 text-slate-900 font-medium">
                      <th className="p-3.5 sm:p-4">Parameter</th>
                      <th className="p-3.5 sm:p-4 text-[#6B4BFF] font-semibold">Producer Company</th>
                      <th className="p-3.5 sm:p-4">Cooperative Society</th>
                      <th className="p-3.5 sm:p-4">Private Limited Company</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Governing Act</td>
                      <td className="p-3.5 sm:p-4 text-[#6B4BFF] font-medium">Companies Act, 2013 (Part IXA)</td>
                      <td className="p-3.5 sm:p-4">State Cooperative Societies Act</td>
                      <td className="p-3.5 sm:p-4">Companies Act, 2013</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Government Interference</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Nil (Operates as corporate body)</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">High (State Registrar controls)</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B]">Nil (Autonomous directors)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Geographic Jurisdiction</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">All India &amp; Global Exports</td>
                      <td className="p-3.5 sm:p-4 text-amber-700">Usually restricted to single state</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B]">All India &amp; Global Exports</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Voting Power</td>
                      <td className="p-3.5 sm:p-4 text-[#6B4BFF] font-medium">One Member, One Vote (Democratic)</td>
                      <td className="p-3.5 sm:p-4">One Member, One Vote</td>
                      <td className="p-3.5 sm:p-4">Proportionate to Shares held</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Tax Benefit (Sec 80PA)</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-semibold">100% Tax Exemption available</td>
                      <td className="p-3.5 sm:p-4 text-amber-700">Limited Section 80P benefits</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">Standard Corporate Tax (22%-25%)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Institutional Grant (SFAC)</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-semibold">Eligible up to ₹15 Lakhs Grant</td>
                      <td className="p-3.5 sm:p-4">Eligible under select schemes</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">Not eligible for FPO Grants</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 7: Annual Compliance */}
          {activeTab === "compliance" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Mandatory Annual Compliances for a Producer Company
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Producer Companies are subject to corporate compliance under the MCA. Merrafilings ensures timely filing to protect your company's good standing:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#6B4BFF]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">Annual General Meeting (AGM)</h3>
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    Must be convened within 90 days from the close of the financial year. The annual audited accounts, board report, and patronage bonus are adopted.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#6B4BFF] bg-white px-2 py-1 rounded border border-purple-200">
                      Due: Within 90 days of FY close
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#00A86B]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">ROC Forms MGT-7 &amp; AOC-4</h3>
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    Filing of Annual Return (MGT-7) within 60 days of AGM and Financial Statements (AOC-4) with auditor's report within 30 days of AGM.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#00A86B] bg-white px-2 py-1 rounded border border-emerald-200">
                      Due: Post-AGM ROC filing
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">Income Tax Return (ITR-6)</h3>
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    Mandatory corporate tax return filing with claim for Section 80PA agricultural profit deductions accompanied by tax audit report Form 3CA/3CD.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-blue-600 bg-white px-2 py-1 rounded border border-blue-200">
                      Due: September 30th
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F7]/70 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#12023B]">
              Frequently Asked Questions on Producer Companies
            </h2>
            <p className="text-xs sm:text-sm font-light text-slate-500 mt-2">
              Common questions answered about FPO registration, subsidies, tax exemptions, and members.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-medium text-slate-900 hover:text-[#6B4BFF] transition-colors cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#6B4BFF]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-[13.5px] font-light text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
        serviceTitle="Producer Company Registration in India"
      />

      <ServiceSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={() => setIsContactOpen(true)}
      />
    </div>
  );
}
