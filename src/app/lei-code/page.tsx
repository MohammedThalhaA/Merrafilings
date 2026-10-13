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
  MessageCircle,
  Check,
  ChevronUp,
  CheckCircle2,
  Landmark,
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
    name: "groww",
    logo: (
      <span className="text-[16px] font-bold tracking-tight text-[#00D09C] select-none">
        GROWW
      </span>
    ),
  },
  {
    name: "razorpay",
    logo: (
      <span className="text-[15px] font-bold tracking-tight text-[#0C2340] select-none">
        Razorpay
      </span>
    ),
  },
  {
    name: "zerodha",
    logo: (
      <span className="text-[15px] font-semibold tracking-wider text-[#387ED1] select-none">
        ZERODHA
      </span>
    ),
  },
  {
    name: "zomato",
    logo: (
      <span className="text-[16px] font-black tracking-tight text-[#E23744] select-none italic">
        zomato
      </span>
    ),
  },
  {
    name: "swiggy",
    logo: (
      <span className="text-[15px] font-extrabold tracking-tight text-[#FC8019] select-none">
        SWIGGY
      </span>
    ),
  },
  {
    name: "cleartax",
    logo: (
      <span className="text-[15px] font-bold tracking-tight text-[#1F3A93] select-none">
        cleartax
      </span>
    ),
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a Legal Entity Identifier (LEI) Number?",
    a: "An LEI is a 20-digit alphanumeric code uniquely assigned to legal entities participating in global financial transactions. Standardized under ISO 17442 and overseen by GLEIF, it establishes transparent corporate identification across international markets and banking systems.",
  },
  {
    q: "Who needs an LEI Code in India as per RBI mandates?",
    a: "RBI mandates LEI for entities undertaking large-value transactions in centralized payment systems (RTGS & NEFT above ₹50 Crore), participants in OTC derivatives markets, non-derivative financial markets (government securities and money markets), and entities with substantial corporate borrowings.",
  },
  {
    q: "How is a 20-character LEI Code structured?",
    a: "An LEI consists of: Characters 1-4 representing the prefix of the accredited Local Operating Unit (LOU) like CCIL; Characters 5-18 being the unique entity identifier assigned to the firm; Characters 19-20 being two mathematical check digits calculated via ISO 17442 algorithms for instant verification.",
  },
  {
    q: "What is the validity period of an LEI Code?",
    a: "An LEI Code is valid for 1 year from the date of issuance. To maintain an active status in the global GLEIF database, legal entities must submit annual renewal applications and verify their corporate ownership records.",
  },
  {
    q: "What happens if an entity fails to renew its LEI on time?",
    a: "Failure to renew marks the LEI status as 'Lapsed' in the global registry. In India, banks and financial institutions will reject high-value RTGS/NEFT transfers, and clearing corporations may bar the entity from executing OTC derivative trades until the LEI is revived.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Which authority issues LEI Codes in India?",
    a: "In India, LEI codes are officially issued by Legal Entity Identifier India Ltd. (LEIL), a wholly-owned subsidiary of Clearing Corporation of India Ltd. (CCIL), recognized as an accredited Local Operating Unit (LOU) by GLEIF and Reserve Bank of India.",
  },
  {
    q: "What documents are required for corporate LEI registration?",
    a: "Corporates must submit the Certificate of Incorporation, Memorandum & Articles of Association (MoA & AoA), Company PAN Card, Audited Financial Statements, Board Resolution authorizing the signatory, and authorized signatory KYC (PAN & Aadhaar/Passport).",
  },
  {
    q: "Can partnership firms and LLPs apply for an LEI code?",
    a: "Yes. LLPs, registered partnership firms, sole proprietorships engaged in high-value banking, trusts, mutual funds, and non-banking financial entities are fully eligible and required to obtain an LEI if they cross regulatory banking thresholds.",
  },
  {
    q: "How long does it take to obtain an LEI Certificate with Merrafilings?",
    a: "Once all required entity documents and board resolutions are verified, Merrafilings coordinates with the accredited LOU to issue your LEI within 24 to 48 working hours. Fast-track issuance is available for urgent banking deadlines.",
  },
  {
    q: "What is the difference between Level 1 and Level 2 LEI data?",
    a: "Level 1 data answers 'who is who' (official legal name, registered address, legal form, registry ID). Level 2 data answers 'who owns whom' (information regarding direct and ultimate parent holding entities that consolidate the applicant's accounts).",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Is LEI mandatory for foreign cross-border payments?",
    a: "Yes. RBI circulars mandate LEI numbers for all cross-border transactions involving capital or current account transactions of ₹50 Crore and above undertaken by non-individual entities.",
  },
  {
    q: "Can an Indian subsidiary use its foreign parent company's LEI?",
    a: "No. Each distinct legal entity registered in India requires its own independent 20-digit LEI. However, Level 2 data will link the Indian subsidiary directly to the foreign parent's LEI in the GLEIF database.",
  },
  {
    q: "Can I transfer an existing LEI from another provider to Merrafilings?",
    a: "Yes. Merrafilings facilitates seamless LEI transfer between accredited LOUs or managing agents at zero disruption without altering your 20-digit LEI identifier.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How can I verify or search an LEI Code globally?",
    a: "Anyone can verify an LEI Code on the official GLEIF search portal (search.gleif.org) or the CCIL LEI directory to view verified entity details, registration status (ISSUED/LAPSED), and expiration date.",
  },
  {
    q: "Does Merrafilings provide multi-year LEI renewal packages?",
    a: "Yes. Merrafilings offers 3-year and 5-year multi-year maintenance packages where our compliance team handles the annual re-verification and prevents any risk of your LEI lapsing.",
  },
  {
    q: "What is the penalty for non-compliance with RBI LEI rules?",
    a: "Banks are legally prohibited by RBI from executing high-value credit, loan disbursements, or clearing RTGS transactions exceeding ₹50 Crore for entities without an active LEI. Transactions are frozen until compliant.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "LLP Registration",
  "Public Limited Company",
  "One Person Company",
  "Import Export Code (IEC)",
  "GST Registration",
  "Trademark Registration",
  "RBI / FEMA Compliance",
  "FC-GPR Filing",
  "Startup India DPIIT",
];

const POPULAR_SEARCHES_TAGS = [
  "LEI code registration India",
  "LEI code online apply",
  "Legal Entity Identifier RBI guidelines",
  "LEI code validity and renewal",
  "CCIL LEI portal registration",
  "LEI for RTGS and NEFT above 50 crore",
  "LEI code format 20 digit",
  "Download LEI certificate PDF",
  "LEI number search India",
  "GLEIF accredited LOU India",
];

export default function LeiCodePage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<string | null>("lei-c1-0");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);

  // Read more states for pricing cards
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // State list collapse toggle
  const [stateListOpen, setStateListOpen] = useState(true);

  // Clients carousel scroll ref
  const clientScrollRef = useRef<HTMLDivElement>(null);

  const scrollClients = (direction: "left" | "right") => {
    if (clientScrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formEmail && formPhone && formState) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-[#155EEF] selection:text-white">
      {/* Header Navigation */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Hero Section with Merrafilings Curved Radial Mesh Background */}
      <section className="relative overflow-visible pt-6 sm:pt-8 md:pt-10 pb-16 bg-white">
        {/* Curved gradient backdrop canvas with curved bottom edge */}
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
                LEI Registration
              </span>{" "}
              for Businesses &amp; Transactions
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Establish global financial identity with an internationally recognized 20-digit LEI code mandatory for RBI, SEBI, cross-border payments, RTGS/NEFT above ₹50 Cr, and global market compliance.
            </p>
          </div>

          {/* Hero Content Glassmorphism Box */}
          <div className="w-full max-w-[72rem] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Key Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B] mb-2 sm:mb-3">
                    Apply for Your LEI Code
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Specialists manage LEI validation, CCIL/GLEIF submission, and global registration for fast, compliant 20-digit issuance.
                  </p>
                </div>

                {/* 5 Bullet Features */}
                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <Globe2 className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">Global LEI Database Registration Support</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <Landmark className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">RBI, SEBI &amp; International Compliance Alignment</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">Fast Processing with Application Accuracy Checks</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">Renewal &amp; Lifecycle LEI Management Support</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-[#6B4BFF]" />
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

              {/* Right Column: Lead Form */}
              <div className="bg-[#FAF8F5]/60 rounded-2xl p-5 sm:p-7 border border-[#E4E7EC]/70">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827]">Application Received!</h3>
                    <p className="text-[14px] text-[#475467]">
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our senior regulatory specialist will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 text-[13px] font-medium text-[#155EEF] hover:underline"
                    >
                      Submit another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Award className="w-5 h-5 text-[#D97706] transition-colors" />
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
            {/* Scroll Left Button */}
            <button
              type="button"
              onClick={() => scrollClients("left")}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-all shrink-0 cursor-pointer"
              aria-label="Scroll clients left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Horizontal Mini Cards Container */}
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

            {/* Scroll Right Button */}
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

      {/* Pricing Section (Matching exact Merrafilings design with Green Hover Border & Dynamic Button) */}
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
              Complete support from CCIL verification to GLEIF global publication and renewal management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: 1-Year LEI Code */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  LEI Code — 1 Year
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Fast 24–48 hours issuance for standard regulatory transactions, banking RTGS/NEFT requirements...{" "}
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
                    Includes end-to-end documentation audit, preparation of authorized signatory board resolution, CCIL / LOU portal application, 20-digit LEI issuance, and downloadable digital certificate.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹4,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Official LOU Govt fees included</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>New 20-Digit LEI Code Allotment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>CCIL / GLEIF Database Publication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Board Resolution &amp; Drafting Review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Level 1 Reference Data Validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Official LEI Certificate PDF Download</span>
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
                  onClick={() => setContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Package 2: 3-Year LEI Code (Most Popular) */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-[0_16px_36px_rgba(0,176,116,0.12)] hover:shadow-[0_20px_42px_rgba(0,176,116,0.2)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00B074] to-[#059669] text-white text-[11px] font-semibold tracking-wider uppercase py-1 px-4 rounded-full shadow-xs">
                Most Popular
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  LEI Code — 3 Years
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  3 Years continuous validity with automated annual renewals and complete parent entity mapping...{" "}
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
                    Provides multi-year compliance protection with automated annual renewals, zero risk of lapsed status, free data change submissions, and Level 2 parent structure validation.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹11,999
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Covers 3 years renewal &amp; verification</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Full 3-Year Active Validity Guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Automated Annual Data Re-verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Level 1 &amp; Level 2 GLEIF Mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Free Legal Address &amp; Name Updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated Compliance Officer Support</span>
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
                  onClick={() => setContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-white bg-[#00B074] hover:bg-[#009B66] border border-[#00B074] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Package 3: 5-Year Corporate LEI Shield */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  LEI Code — 5 Years
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Maximum long-term security for financial institutions, NBFCs, listed companies, and large enterprises...{" "}
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
                    Includes five full years of hassle-free maintenance, complex group structure reporting, priority turnaround within 24 hours, and ongoing corporate banking transaction clearance advisory.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹17,999
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Covers 5 full years with zero hassle</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>5-Year Continuous Active Registration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Zero Lapsed Status Guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Complex Parent-Subsidiary GLEIF Tree</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Priority 24-Hour Issuance Turnaround</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Corporate Banking Desk Advisory</span>
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
                  onClick={() => setContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section (Matching exact Merrafilings reference design) */}
      <section id="overview-section" className="py-10 sm:py-12 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[13px] font-light text-slate-500 mb-5 flex-wrap">
            <a href="/" className="hover:text-[#155EEF] transition-colors">
              Merrafilings
            </a>
            <span className="text-slate-300">/</span>
            <a href="/registrations" className="hover:text-[#155EEF] transition-colors">
              Registrations
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-[#00B074] font-normal">Legal Entity Identifier Code</span>
          </nav>

          {/* Grid Layout: Main Article on Left, Sidebar on Right (Full width, not squeezed in center) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden p-6 sm:p-10 border-t-2 border-t-emerald-400">
              <article className="max-w-none space-y-7">
                {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Legal Entity Identifier Number Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    A <strong className="font-medium text-slate-800">Legal Entity Identifier (LEI) number</strong> is a unique 20-character alphanumeric code assigned to legal entities participating in financial transactions. Businesses, banks, and financial institutions in India must obtain an <strong className="font-medium text-slate-800">LEI registration</strong> to comply with Reserve Bank of India (RBI) mandates and global financial regulations. For seamless business registrations and compliance services in India, Merrafilings offers end-to-end support to help entities obtain their LEI number quickly and accurately.
                  </p>
                </div>

                {/* Section 2: What is an LEI */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is a Legal Entity Identifier (LEI) Number?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    A Legal Entity Identifier number is a globally recognized unique identification code issued to legal entities involved in financial transactions. Introduced by the <strong>Financial Stability Board (FSB)</strong> and endorsed by the G20, the LEI system was created to improve transparency in global financial markets. In India, the Reserve Bank of India has made LEI registration mandatory for entities participating in large-value financial transactions, over-the-counter derivatives, and foreign currency transactions.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Every LEI number is linked to verified reference data about a legal entity, ensuring accuracy and reliability in the global financial system.
                  </p>
                </div>

                {/* Section 3: Structure of an LEI Code */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Structure of an LEI Code (ISO 17442 Norm)
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                    An LEI code is a 20-character alphanumeric identifier structured as follows:
                  </p>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 1-4:</strong> Prefix identifying the LEI issuing organization (Local Operating Unit like CCIL in India)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 5-18:</strong> Unique entity-specific identifier assigned to the legal entity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 19-20:</strong> Two check digits used for mathematical validation and error detection</span>
                    </li>
                  </ul>
                </div>

                {/* Section 4: LEI vs Other Business Identifiers Table */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    LEI vs. Other Business Identifiers
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Identifier</th>
                          <th className="py-3 px-4 font-normal">Issuing Authority</th>
                          <th className="py-3 px-4 font-normal">Scope</th>
                          <th className="py-3 px-4 font-normal">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LEI Number
                          </td>
                          <td className="py-3 px-4 text-slate-600">GLEIF / CCIL (India)</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">Global</td>
                          <td className="py-3 px-4 text-slate-600">Financial transaction &amp; banking identification</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            PAN
                          </td>
                          <td className="py-3 px-4 text-slate-600">Income Tax Department</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Tax assessment identification</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            CIN
                          </td>
                          <td className="py-3 px-4 text-slate-600">Ministry of Corporate Affairs</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Company registration identity</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            GSTIN
                          </td>
                          <td className="py-3 px-4 text-slate-600">GST Council / CBIC</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Goods and Services Tax identification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 5: Why Mandatory in India */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why is Legal Entity Identifier Registration Mandatory in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The LEI registration India mandate was introduced by the Reserve Bank of India to strengthen the financial system and enhance transparency in large-value transactions. The RBI has progressively expanded the scope of LEI number compliance:
                  </p>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>All over-the-counter (OTC) derivative transactions involving non-individual residents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Large-value transactions in centralized payment systems (RTGS and NEFT above Rs. 50 crore)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Non-derivative markets including government securities and money markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Cross-border foreign currency transactions above specified regulatory thresholds</span>
                    </li>
                  </ul>
                </div>

                {/* Section 6: Documents Required */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Documents Are Required for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Submitting the correct documents is essential for a smooth LEI number registration process. Below is the checklist for different legal entities:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Type of Entity</th>
                          <th className="py-3 px-4 font-normal">Documents to be Uploaded</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Private / Public Limited Company
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, MOA and AOA, PAN Card, Audited Balance Sheet, Board Resolution</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Partnership Firm
                          </td>
                          <td className="py-3 px-4 text-slate-600">Partnership Deed, PAN Card, GST Registration Certificate, Address Proof</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LLP (Limited Liability Partnership)
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, LLP Agreement, PAN Card, Partners KYC</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Trust / Society / Non-Profit
                          </td>
                          <td className="py-3 px-4 text-slate-600">Registration Certificate, Trust Deed or MOA, PAN Card, Address Proof</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Foreign Entity
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation from country of origin, Notarized documents, Parent LEI</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 7: Process of LEI Application */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Step-by-Step LEI Application Process
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li><strong>Pre-Verification:</strong> Legal experts verify your entity registration documents and legal name</li>
                    <li><strong>Drafting Resolution:</strong> Preparation of formal Board Resolution authorizing designated applicant</li>
                    <li><strong>Online Application:</strong> Entering verified Level 1 reference data and Level 2 corporate ownership details</li>
                    <li><strong>Document Upload:</strong> Uploading audited balance sheets and authorized signatory KYC</li>
                    <li><strong>LOU Validation:</strong> Clearing Corporation of India (CCIL) verifies data against government registries</li>
                    <li><strong>LEI Issuance:</strong> 20-digit LEI code is generated and published in the global GLEIF database</li>
                  </ol>
                </div>

                {/* Section 8: Validity and Renewal */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Renewal and Validity of LEI Code in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    An LEI number validity period is typically one year from the date of issuance. Entities must ensure timely renewal to maintain an active LEI status in the global LEI database. An expired LEI can result in transaction rejections and regulatory non-compliance penalties imposed by the RBI.
                  </p>
                </div>
              </article>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Consult Experts Card with 3 Avatars */}
              <div
                onClick={() => setContactOpen(true)}
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
                      "Understanding Legal Entity Identifier (LEI) Codes",
                      "RBI Circular on LEI for RTGS and NEFT above ₹50 Crore",
                      "LEI Code Format & 20-Digit ISO 17442 Breakdown",
                      "Difference Between LEI, CIN, PAN, and GSTIN",
                      "How to Renew an Expired or Lapsed LEI Code",
                      "GLEIF Database Verification & Download Process",
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

              {/* LEI Code by State Directory */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-normal text-[14px] text-slate-800">LEI Registration by State</span>
                  <button
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
                        <span>LEI Code in {st}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column FAQ Section matching reference screenshot */}
      <section id="faqs" className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-[#00A86B] mb-3" />
          <h2 className="text-2xl sm:text-[28px] font-normal text-[#111827]">
            Frequently asked questions
          </h2>
          <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500 mt-1.5 mb-8">
            Common questions about Legal Entity Identifier (LEI) Code Registration Starting at ₹4,899 in India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Column 1 */}
            <div className="space-y-3.5">
              {(showMoreFaqs ? [...FAQ_COL_1, ...FAQ_EXTRA_COL_1] : FAQ_COL_1).map((faq, idx) => {
                const faqId = `lei-c1-${idx}`;
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
                const faqId = `lei-c2-${idx}`;
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

          {/* Related Services Card */}
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
          onClick={() => setContactOpen(true)}
          className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#00BF72] hover:bg-[#00AB66] text-white font-medium text-[13.5px] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-white text-[#00BF72]" />
          <span>Live chat with experts</span>
        </button>
      </div>

      {/* Global Modals */}
      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={() => setContactOpen(true)}
      />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        serviceTitle="Legal Entity Identifier (LEI) Code Registration"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
