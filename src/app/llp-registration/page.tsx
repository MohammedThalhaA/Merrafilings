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
    id: "standard",
    name: "LLP Incorporation",
    price: "₹2,899",
    originalPrice: "₹5,999",
    gstNote: "+ Govt fees & Stamp Duty as applicable",
    description: "Fast-track incorporation for modern startups and consulting firms.",
    features: [
      "RUN-LLP Name Approval Filing",
      "Class-3 DSC for 2 Designated Partners",
      "DPIN Allocation for 2 Partners",
      "FiLLiP Incorporation Form Submission",
      "Certificate of Incorporation (COI) & LLPIN",
      "Firm PAN & TAN Allotment",
      "Zero-balance Corporate Bank Account setup",
    ],
  },
  {
    id: "incorporation_agreement",
    name: "Incorporation + Agreement",
    badge: "MOST POPULAR",
    price: "₹5,899",
    originalPrice: "₹10,999",
    gstNote: "+ Govt fees & Stamp Duty as applicable",
    popular: true,
    description: "Complete incorporation with customized legal deed and MCA Form 3 filing.",
    features: [
      "Everything included in LLP Incorporation",
      "Custom LLP Agreement Drafting by Senior Legal Advocate",
      "Profit/Loss sharing & Capital Contribution clauses",
      "Dispute resolution & Non-compete covenants",
      "State-specific Stamp Paper & Notarization support",
      "Filing of Form 3 with MCA within 30 days",
      "Udyam / MSME Registration Certificate included",
    ],
  },
  {
    id: "comprehensive",
    name: "Incorporation + Annual Compliance",
    badge: "COMPLETE VALUE",
    price: "₹9,899",
    originalPrice: "₹18,999",
    gstNote: "+ Govt fees as applicable",
    description: "End-to-end setup and 1-year secretarial & tax filing protection.",
    features: [
      "Everything in Incorporation + Agreement plan",
      "1-Year Dedicated Corporate Secretarial Advisor",
      "Annual Return Filing (Form 11)",
      "Statement of Account & Solvency (Form 8)",
      "ITR-5 Income Tax Return Filing for the entity",
      "DIR-3 KYC for 2 Designated Partners",
      "GST Registration & quarterly filing consultation",
    ],
  },
];

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is a Limited Liability Partnership (LLP)?",
    a: "An LLP is an incorporated business entity that combines the flexibility of a traditional partnership with the limited liability protections of a private limited company. Governed by the LLP Act 2008, it is a separate legal entity distinct from its partners, meaning partners are not personally liable for the firm's obligations or the wrongful acts of other partners.",
  },
  {
    q: "How many partners are required to register an LLP?",
    a: "A minimum of two partners are required to incorporate an LLP. There is no upper limit on the maximum number of partners. At least two partners must be designated partners, and at least one designated partner must be an Indian resident (residing in India for not less than 120 days during the financial year).",
  },
  {
    q: "Is there any minimum capital requirement for starting an LLP?",
    a: "No, there is no statutory minimum capital requirement to incorporate an LLP. Partners can begin with any nominal contribution, such as ₹1,000 or ₹10,000. Capital can be contributed in tangible form (cash, property) or intangible form (know-how, contracts).",
  },
  {
    q: "What is DPIN and is it mandatory for all partners?",
    a: "DPIN stands for Designated Partner Identification Number. It is a unique 8-digit identification number allotted by the Ministry of Corporate Affairs (MCA). It is mandatory for all designated partners in an LLP. If a partner already possesses a DIN (Director Identification Number), the same number functions as DPIN.",
  },
  {
    q: "Is an audit mandatory for an LLP in India?",
    a: "No! Unlike Private Limited Companies which require mandatory statutory audits from day one, an LLP is exempt from audit if its annual turnover does not exceed ₹40 Lakhs or its partner capital contribution does not exceed ₹25 Lakhs. This significantly lowers ongoing compliance costs.",
  },
  {
    q: "What is an LLP Agreement and why must it be filed within 30 days?",
    a: "The LLP Agreement is the foundational constitutional charter defining the rights, duties, capital ratios, profit-sharing formulas, admission/retirement terms, and managerial obligations of the partners. Under Section 23 of the LLP Act, this agreement must be executed on judicial stamp paper and filed with the MCA in Form 3 within 30 days of incorporation.",
  },
  {
    q: "Can NRIs and foreign nationals become partners in an Indian LLP?",
    a: "Yes. Foreign nationals and NRIs can become partners and designated partners in an LLP. Under the automatic FDI route, 100% Foreign Direct Investment (FDI) is permitted in LLPs operating in sectors where 100% FDI is allowed without performance-linked conditions. At least one designated partner must be a resident of India.",
  },
  {
    q: "What are the mandatory annual filings for an LLP?",
    a: "An LLP must complete two primary statutory MCA filings every year: (1) Form 11 (Annual Return) within 60 days of fiscal year end (due on or before May 30th), and (2) Form 8 (Statement of Account & Solvency) within 30 days of the end of 6 months of fiscal year end (due on or before October 30th). Additionally, Income Tax Return Form ITR-5 must be filed annually.",
  },
  {
    q: "Which is better for startups: LLP or Private Limited Company?",
    a: "An LLP is ideal for bootstrapping founders, professional service practices, family businesses, and software agencies who want limited liability protection, lower compliance overhead, no mandatory audits (up to ₹40L turnover), and no dividend distribution tax. A Private Limited Company is preferable if you plan to raise institutional VC/seed equity funding or issue ESOPs.",
  },
  {
    q: "Can an existing partnership firm be converted into an LLP?",
    a: "Yes. Under Section 55 and the Second Schedule of the LLP Act 2008, an existing general partnership firm registered under the Indian Partnership Act 1932 can be converted into an LLP seamlessly without attracting capital gains tax, provided all partners transition in identical shareholding proportions.",
  },
];

export default function LLPRegistrationPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "eligibility" | "documents" | "process" | "comparison" | "compliance">("overview");
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
                LLP Registration
              </span>{" "}
              in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Register your Limited Liability Partnership (LLP) in India with expert CA/CS assistance. Get MCA name approval, RUN filing, FiLLiP incorporation, LLP Agreement drafting, PAN &amp; TAN registration, and compliance support.
            </p>

            {/* Price Pill Banner */}
            <div className="mt-4 flex items-center justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-blue-500 bg-white shadow-xs hover:shadow-md hover:bg-blue-50/50 transition-all cursor-pointer group"
              >
                <span className="text-xs sm:text-sm text-slate-700">
                  LLP Registration starting from{" "}
                  <strong className="text-slate-900 font-semibold">₹2,899</strong>
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
                    Start Your LLP Registration
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Register your Limited Liability Partnership (LLP) in India with MCA filing, name approval, PAN, and Certificate of Incorporation to set up a compliant and flexible partnership business.
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
                      MCA Name Approval
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
                      LLP Incorporation
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
                      LLP Agreement Drafting
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
                      PAN &amp; TAN Registration
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
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. A Senior LLP Corporate Legal Advisor from Merrafilings will contact you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200/60 text-xs font-medium text-[#6B4BFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent MCA Incorporation Plans</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#12023B] tracking-tight">
              Simple, Transparent Pricing for Your LLP
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-light text-slate-600">
              Select the package that fits your firm. Complete filing support with zero hidden professional charges.
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
              { id: "eligibility", label: "Eligibility & Partners" },
              { id: "documents", label: "Documents Required" },
              { id: "process", label: "Step-by-Step Process" },
              { id: "comparison", label: "LLP vs Pvt Ltd vs Partnership" },
              { id: "compliance", label: "Annual Compliances" },
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
                    What is a Limited Liability Partnership (LLP)?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    A <strong>Limited Liability Partnership (LLP)</strong> is an internationally recognized corporate structure governed by the <strong>Limited Liability Partnership Act, 2008</strong>. It grants the organizational freedom and operational flexibility of a partnership firm while providing the statutory <strong>separate legal identity</strong> and <strong>limited liability shield</strong> typical of a private limited company.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    In an LLP, the liability of each partner is limited strictly to their agreed capital contribution in the firm. One partner is not responsible or liable for the independent misconduct, negligence, or debt obligations of another partner. This makes LLPs the corporate vehicle of choice for <strong>startups, consulting firms, technology practices, legal and CA firms, and creative agencies</strong> across India.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-[#FAF9F7] p-6 rounded-2xl border border-slate-200/80 space-y-3">
                  <h3 className="text-sm font-medium text-[#1F1646] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00A86B]" />
                    <span>Key LLP Fast Facts</span>
                  </h3>
                  <ul className="space-y-2 text-xs font-light text-slate-600">
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Governing Act:</span>
                      <strong className="text-slate-800">LLP Act, 2008</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Regulatory Ministry:</span>
                      <strong className="text-slate-800">Ministry of Corporate Affairs</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Minimum Partners:</span>
                      <strong className="text-slate-800">2 Partners (No upper limit)</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span>Statutory Audit:</span>
                      <strong className="text-slate-800">Exempt below ₹40L turnover</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Minimum Capital:</span>
                      <strong className="text-slate-800">No Minimum Prescribed</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 6 Key Benefits Cards */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#12023B] mb-5">
                  Core Advantages of Registering an LLP
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
                      title: "Limited Liability Protection",
                      desc: "Partners' personal properties and savings are 100% shielded from company liabilities, contractual losses, and commercial debts.",
                    },
                    {
                      icon: <Building className="w-5 h-5 text-purple-600" />,
                      title: "Perpetual Succession",
                      desc: "The LLP enjoys an uninterrupted legal existence. Admission, death, bankruptcy, or resignation of any partner does not dissolve the firm.",
                    },
                    {
                      icon: <Scale className="w-5 h-5 text-blue-600" />,
                      title: "Audit Exemption Benefit",
                      desc: "Save tens of thousands in statutory CA audit costs annually. Audits are mandatory only if turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs.",
                    },
                    {
                      icon: <BadgePercent className="w-5 h-5 text-amber-600" />,
                      title: "No Dividend Distribution Tax",
                      desc: "Profits distributed among partners after corporate tax payment are completely tax-free in the hands of the individual partners under Income Tax rules.",
                    },
                    {
                      icon: <FolderLock className="w-5 h-5 text-rose-600" />,
                      title: "Operational Flexibility",
                      desc: "Partners can customize management terms, internal profit sharing ratios, and voting mechanisms freely through the signed LLP Agreement.",
                    },
                    {
                      icon: <Globe2 className="w-5 h-5 text-indigo-600" />,
                      title: "100% Foreign Direct Investment (FDI)",
                      desc: "LLPs are eligible for 100% foreign investment under the automatic route for sectors where 100% FDI is permitted without government approval.",
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

          {/* Tab 2: Eligibility */}
          {activeTab === "eligibility" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Eligibility Criteria for Registering an LLP
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Before initiating the digital registration process, ensure your founding members fulfill the MCA statutory requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-4">
                  <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#6B4BFF]" />
                    <span>Partner &amp; Designated Partner Criteria</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Minimum 2 Partners:</strong> At least two individuals or corporate bodies must agree to form the LLP. No upper ceiling on total partners.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Designated Partners (DP):</strong> At least 2 designated partners must be natural persons, and at least one must be a Resident of India (stayed 120+ days in preceding FY).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Age Requirement:</strong> All natural designated partners must be at least 18 years of age and legally competent to contract.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>DPIN &amp; DSC:</strong> Every designated partner must hold a valid Digital Signature Certificate (Class-3 DSC) and DPIN/DIN.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-4">
                  <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#6B4BFF]" />
                    <span>Entity &amp; Registered Office Criteria</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Unique Proposed Name:</strong> Must end with "LLP" or "Limited Liability Partnership" and must not infringe existing registered trademarks or company names.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Registered Office in India:</strong> Must have an Indian physical commercial or residential address to receive official communications and legal notices from MCA.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Lawful Business Purpose:</strong> The business activities contemplated by the partners must be lawful and for profit. Not-for-profit LLPs are not permitted.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                      <span><strong>Capital Contribution:</strong> Any mutual capital amount agreed by partners; no fixed minimum capital required.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Documents Required */}
          {activeTab === "documents" && (
            <div id="documents-required" className="space-y-8 animate-fade-in scroll-mt-24">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Documents Required for LLP Registration in India
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  All documents can be submitted online as scanned PDFs or JPEGs. No physical visits to government offices needed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center gap-2.5 text-[#12023B] font-medium text-base">
                    <FileCheck className="w-5 h-5 text-[#6B4BFF]" />
                    <span>1. Partner KYC Documentation</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>PAN Card:</strong> Self-attested copy of PAN card for all Indian partners.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Identity Proof:</strong> Self-attested copy of Aadhaar Card, Passport, or Voter ID.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Address Proof:</strong> Bank Statement, Electricity Bill, or Telephone bill (less than 2 months old).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Passport Photo:</strong> Recent passport-sized color photograph of each designated partner.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>For Foreign Partners:</strong> Notarized and apostilled passport and bank statement.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center gap-2.5 text-[#12023B] font-medium text-base">
                    <Building className="w-5 h-5 text-[#6B4BFF]" />
                    <span>2. Registered Office Premises Proof</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-[13px] font-light text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Utility Proof:</strong> Electricity bill, Gas bill, Water bill, or Property Tax receipt (less than 2 months old).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>No-Objection Certificate (NOC):</strong> Signed NOC from property owner consenting to office usage.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Rent Agreement:</strong> Valid registered or notarized rent agreement if the premises are rented.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
                      <span><strong>Digital Signature Certificate:</strong> Class-3 DSC for document signing (arranged by Merrafilings).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Step-by-Step Process */}
          {activeTab === "process" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Step-by-Step LLP Registration Procedure
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  How Merrafilings incorporates your Limited Liability Partnership in 7 to 10 working days:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    step: "01",
                    title: "DSC & DPIN Processing",
                    desc: "We obtain Class-3 Digital Signature Certificates (DSC) with encryption tokens for designated partners and generate their DPINs on the MCA portal.",
                  },
                  {
                    step: "02",
                    title: "Name Reservation (RUN-LLP)",
                    desc: "We submit up to 2 unique proposed names via the MCA RUN-LLP (Reserve Unique Name) online tool with appropriate business objective codes.",
                  },
                  {
                    step: "03",
                    title: "FiLLiP Form Filing",
                    desc: "Upon name approval, our CA/CS team files Form FiLLiP (Form for incorporation of Limited Liability Partnership) along with registered office proofs and KYC.",
                  },
                  {
                    step: "04",
                    title: "Certificate of Incorporation",
                    desc: "The Registrar of Companies (ROC) reviews the application and issues the Certificate of Incorporation (COI) containing the unique 7-digit LLPIN.",
                  },
                  {
                    step: "05",
                    title: "LLP Agreement Drafting",
                    desc: "Our legal advocates draft your comprehensive LLP Agreement reflecting your exact partner equity, voting powers, and profit-sharing terms.",
                  },
                  {
                    step: "06",
                    title: "MCA Form 3 Filing & PAN/TAN",
                    desc: "We stamp and file the executed LLP Agreement in MCA Form 3 within 30 days and deliver your firm's PAN, TAN, and bank account kit.",
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

          {/* Tab 5: Comparison Table */}
          {activeTab === "comparison" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Comparison: LLP vs Private Limited vs General Partnership
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Understand the structural, tax, and compliance differences before choosing your corporate entity.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-[13px] border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-[#FAF9F7] border-b border-slate-200 text-slate-900 font-medium">
                      <th className="p-3.5 sm:p-4">Key Parameter</th>
                      <th className="p-3.5 sm:p-4 text-[#6B4BFF] font-semibold">Limited Liability Partnership</th>
                      <th className="p-3.5 sm:p-4">Private Limited Company</th>
                      <th className="p-3.5 sm:p-4">Traditional Partnership</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Governing Act</td>
                      <td className="p-3.5 sm:p-4 text-[#6B4BFF] font-medium">LLP Act, 2008</td>
                      <td className="p-3.5 sm:p-4">Companies Act, 2013</td>
                      <td className="p-3.5 sm:p-4">Indian Partnership Act, 1932</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Partner/Member Liability</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Limited to capital contribution</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Limited to unpaid share value</td>
                      <td className="p-3.5 sm:p-4 text-rose-600 font-medium">Unlimited joint personal liability</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Separate Legal Entity</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Yes (Distinct legal person)</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Yes (Distinct legal person)</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">No separate legal existence</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Mandatory Annual Audit</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Only if turnover &gt; ₹40 Lakhs</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">Mandatory from Year 1</td>
                      <td className="p-3.5 sm:p-4">Only if turnover &gt; ₹1 Crore (Tax Audit)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Annual Compliance Costs</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Low to Moderate</td>
                      <td className="p-3.5 sm:p-4 text-amber-700">Higher (Auditor, Board meetings, ROC forms)</td>
                      <td className="p-3.5 sm:p-4">Very Low (Income tax filing only)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-normal text-slate-900">Venture Capital / Angel Funding</td>
                      <td className="p-3.5 sm:p-4">Difficult (No shares/equity)</td>
                      <td className="p-3.5 sm:p-4 text-[#00A86B] font-medium">Highly Preferred (Equity &amp; ESOPs)</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">Not possible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 6: Annual Compliance */}
          {activeTab === "compliance" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#12023B]">
                  Statutory Annual Compliances for an Indian LLP
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                  Keeping your LLP compliant avoids hefty MCA late penalties (₹100/day per form). Merrafilings assists with all mandatory filings:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#6B4BFF]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">Form 11: Annual Return</h3>
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    A summary of the management, partners, and changes in designated partners. Must be filed within 60 days from the close of the financial year.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#6B4BFF] bg-white px-2 py-1 rounded border border-purple-200">
                      Due Date: On or before May 30th
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#00A86B]">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">Form 8: Statement of Account</h3>
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    A declaration of financial status and solvency by designated partners along with statement of assets &amp; liabilities.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#00A86B] bg-white px-2 py-1 rounded border border-emerald-200">
                      Due Date: On or before October 30th
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">ITR-5: Income Tax Return</h3>
                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    Annual income tax return filed with the Income Tax Department. Tax rate is flat 30% plus applicable surcharge &amp; cess.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-blue-600 bg-white px-2 py-1 rounded border border-blue-200">
                      Due Date: July 31st / Oct 31st
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
              Frequently Asked Questions on LLP Registration
            </h2>
            <p className="text-xs sm:text-sm font-light text-slate-500 mt-2">
              Have questions about partners, tax, or legal filings? Here are the most common questions answered.
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
        serviceTitle="LLP Registration Online in India"
      />

      <ServiceSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={() => setIsContactOpen(true)}
      />
    </div>
  );
}
