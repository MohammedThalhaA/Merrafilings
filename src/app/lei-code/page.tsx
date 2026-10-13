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
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);
  const [stateListOpen, setStateListOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const clientsScrollRef = useRef<HTMLDivElement>(null);

  const scrollClients = (direction: "left" | "right") => {
    if (clientsScrollRef.current) {
      const scrollAmount = 300;
      clientsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#6B4BFF]/20 selection:text-[#12023B]">
      {/* Global Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Section */}
      <section
        className="relative overflow-visible pt-6 sm:pt-8 md:pt-[30px] pb-6 sm:pb-8 md:pb-10"
        aria-label="LEI Code Registration"
      >
        {/* Curved Radial Mesh Backdrop */}
        <div
          className="absolute inset-x-0 top-0 z-0 mx-auto w-full px-4 sm:px-0 rounded-b-[40px] sm:rounded-b-[52px] md:rounded-b-[64px]"
          style={{
            height: "calc(100% - 100px)",
            minHeight: "560px",
            background: `
              radial-gradient(ellipse 140% 90% at 20% 100%, 
                rgb(255, 209, 189) 0%,
                rgba(255, 233, 225, 1) 25%,
                rgba(240, 208, 195, 0.5) 45%,
                rgba(238, 218, 209, 0.2) 65%,
                transparent 85%
              ),
              radial-gradient(ellipse 140% 90% at 80% 100%,
                rgb(153, 228, 255) 0%,
                rgb(153, 228, 255) 0%,
                rgba(187, 222, 233, 0.5) 45%,
                rgba(189, 229, 241, 0.2) 65%,
                transparent 85%
              ),
              linear-gradient(to bottom,
                #ffffff 0%,
                #FAF8F8 35%,
                #F5F2F2 55%,
                #F0EEEE 70%,
                rgba(235, 233, 233, 0.5) 85%,
                rgba(230, 228, 228, 0.2) 100%
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          {/* Main Title & Subtitle */}
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center pt-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal leading-snug tracking-tight text-[#12023B]">
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
                LEI Registration
              </span>{" "}
              for Businesses &amp; Financial Transactions
            </h1>
            <p className="mt-3.5 sm:mt-4 max-w-2xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-slate-600 font-light">
              Establish global financial identity with an internationally recognized 20-digit LEI code mandatory for RBI, SEBI, cross-border payments, RTGS/NEFT above ₹50 Cr, and global market compliance.
            </p>

            {/* Pill Banner: Starts from ₹4,899 */}
            <div className="mt-5">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border-2 border-blue-500 bg-white shadow-sm hover:shadow-md hover:border-blue-600 hover:bg-blue-50 transition-all text-xs sm:text-sm group"
              >
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-slate-700">
                  Get Your LEI Code Registration — starts from{" "}
                  <strong className="text-slate-900 font-semibold">₹4,899</strong>
                </span>
                <span className="text-blue-600 font-medium group-hover:underline inline-flex items-center gap-0.5">
                  View Price <ChevronRight className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>

          {/* Floating Glassmorphic Lead Intake Card */}
          <div className="relative z-10 mx-auto mt-8 sm:mt-10 max-w-5xl">
            <div className="w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur p-5 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Column: Value Prop & Bullet Points */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#12023B] tracking-tight">
                      Apply for Your LEI Code
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-light">
                      Senior compliance specialists manage LEI validation, CCIL/GLEIF submission, and global registry issuance for fast, error-free processing.
                    </p>
                  </div>

                  {/* 5 Purple Icon Bullets */}
                  <ul className="space-y-3.5 pt-2">
                    <li className="flex items-center gap-3 text-xs sm:text-[13.5px] text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 border border-purple-200/40 shadow-sm flex items-center justify-center shrink-0">
                        <Globe2 className="w-4 h-4 text-[#6B4BFF]" />
                      </div>
                      <span>Global GLEIF &amp; CCIL Registry Alignment</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-[13.5px] text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 border border-purple-200/40 shadow-sm flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4 text-[#6B4BFF]" />
                      </div>
                      <span>RBI Mandate for RTGS/NEFT Above ₹50 Crore</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-[13.5px] text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 border border-purple-200/40 shadow-sm flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#6B4BFF]" />
                      </div>
                      <span>Fast Processing with Document Accuracy Checks</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-[13.5px] text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 border border-purple-200/40 shadow-sm flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#6B4BFF]" />
                      </div>
                      <span>Multi-Year Renewal Protection against Lapsed Status</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-[13.5px] text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 border border-purple-200/40 shadow-sm flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-[#6B4BFF]" />
                      </div>
                      <a
                        href="#documents-required"
                        className="font-medium bg-gradient-to-r from-[#5D54FF] via-[#A767EC] to-[#F968E7] bg-clip-text text-transparent underline underline-offset-2 hover:opacity-85 transition-opacity"
                      >
                        Required Documents Checklist
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Lead Intake Form */}
                <div className="bg-[#FAF8F5]/60 rounded-2xl p-5 sm:p-7 border border-[#E4E7EC]/70">
                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-[#111827]">Application Received!</h3>
                      <p className="text-[14px] text-[#475467]">
                        Thank you, <strong className="text-[#111827]">{formName}</strong>. Our senior regulatory specialist will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes to initiate your LEI application.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-5 py-2 text-[13px] font-medium text-[#155EEF] hover:underline"
                      >
                        Submit another query
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleHeroSubmit} className="space-y-4">
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

              {/* 4 Bottom Trust Stat Cards */}
              <div className="mt-8 pt-6 border-t border-slate-100/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {/* Stat 1: 4.4 Verified Reviews */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(245,158,11,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF6E9] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                    <svg className="w-5 h-5 text-[#F04438]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
                    <p className="text-[11.5px] font-light text-slate-500 mt-0.5">Verified Reviews</p>
                  </div>
                </div>

                {/* Stat 2: 15+ Years Experience */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-blue-200 hover:shadow-[0_8px_25px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                  <div className="w-11 h-11 rounded-2xl bg-[#EFF8FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                    <Award className="w-5 h-5 text-[#2E90FA]" />
                  </div>
                  <div>
                    <div className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                      15+ Years
                    </div>
                    <p className="text-[11.5px] font-light text-slate-500 mt-0.5">Regulatory Experience</p>
                  </div>
                </div>

                {/* Stat 3: 2 Lakh+ Clients */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(147,51,234,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                  <div className="w-11 h-11 rounded-2xl bg-[#F9F5FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                    <Users className="w-5 h-5 text-[#7F56D9]" />
                  </div>
                  <div>
                    <div className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                      2 Lakh+
                    </div>
                    <p className="text-[11.5px] font-light text-slate-500 mt-0.5">Corporate Clients</p>
                  </div>
                </div>

                {/* Stat 4: App Tracking */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-emerald-200 hover:shadow-[0_8px_25px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                  <div className="w-11 h-11 rounded-2xl bg-[#ECFDF3] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                    <Smartphone className="w-5 h-5 text-[#12B76A]" />
                  </div>
                  <div>
                    <div className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                      LEDGERS
                    </div>
                    <p className="text-[11.5px] font-light text-slate-500 mt-0.5">App Tracking &amp; Renewal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-6 border-y border-slate-100 bg-[#FAF9F7]/50 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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
              ref={clientsScrollRef}
              className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar scroll-smooth py-1"
            >
              {CLIENT_MINI_CARDS.map((client, idx) => (
                <div
                  key={idx}
                  className="px-6 py-2 rounded-xl bg-white border border-slate-200/80 shadow-3xs hover:shadow-xs hover:border-slate-300 transition-all shrink-0 flex items-center justify-center min-w-[130px]"
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
      <section id="pricing" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>New 20-Digit LEI Code Allotment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>CCIL / GLEIF Database Publication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Board Resolution &amp; Drafting Review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Level 1 Reference Data Validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
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
                    +2 more features
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

            {/* Package 2: 3-Year LEI Code (Most Popular) */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-[0_16px_36px_rgba(0,176,116,0.12)] hover:shadow-[0_20px_42px_rgba(0,176,116,0.2)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00B074] to-[#059669] text-white text-[11px] font-semibold tracking-wider uppercase py-1 px-4 rounded-full shadow-xs">
                Most Popular • Recommended
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
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Full 3-Year Active Validity Guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Automated Annual Data Re-verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Level 1 &amp; Level 2 GLEIF Mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Free Legal Address &amp; Name Updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
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
                    +3 more features
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
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
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>5-Year Continuous Active Registration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Zero Lapsed Status Guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Complex Parent-Subsidiary GLEIF Tree</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Priority 24-Hour Issuance Turnaround</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
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
                    +4 more features
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

      {/* Detailed Guide Section with 2 Columns (8 Cols Article + 4 Cols Sticky Sidebar) */}
      <section id="overview-section" className="py-12 sm:py-16 bg-[#FAFAF9]/60 border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Columns: Authoritative Guide */}
            <div className="lg:col-span-8">
              <article className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 md:p-10 space-y-8">
                {/* Section 1: Introduction */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Global Regulatory Identifier</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#12023B] tracking-tight leading-snug">
                    What is a Legal Entity Identifier (LEI) Code?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light leading-relaxed text-slate-600">
                    A <strong className="font-medium text-slate-800">Legal Entity Identifier (LEI)</strong> is a unique 20-character alphanumeric code established by the <strong>Financial Stability Board (FSB)</strong> and endorsed by G20 nations in the aftermath of the 2008 global financial crisis. It uniquely identifies distinct legal entities engaging in financial market transactions worldwide.
                  </p>
                  <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-slate-600">
                    In India, the <strong>Reserve Bank of India (RBI)</strong> and <strong>Securities and Exchange Board of India (SEBI)</strong> have mandated LEI codes across corporate lending, Over-The-Counter (OTC) derivatives, money markets, and high-value centralized payment transfers (RTGS and NEFT exceeding ₹50 Crore).
                  </p>
                </div>

                {/* Section 2: Structure Breakdown */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-[17px] font-normal text-[#12023B] mb-3">
                    Structure of a 20-Character LEI Code (ISO 17442 Standard)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-4">
                    <div className="p-4 rounded-xl border border-purple-100 bg-purple-50/50">
                      <div className="text-lg font-bold text-[#6B4BFF] font-mono">3358</div>
                      <div className="text-xs font-medium text-slate-800 mt-1">Chars 1–4: LOU Prefix</div>
                      <div className="text-[11.5px] text-slate-500 font-light mt-0.5">Identifies the accredited Local Operating Unit (e.g., CCIL in India)</div>
                    </div>
                    <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
                      <div className="text-lg font-bold text-blue-600 font-mono">00N4879K2L1P</div>
                      <div className="text-xs font-medium text-slate-800 mt-1">Chars 5–18: Entity ID</div>
                      <div className="text-[11.5px] text-slate-500 font-light mt-0.5">Unique alpha-numeric entity code assigned to the business</div>
                    </div>
                    <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
                      <div className="text-lg font-bold text-emerald-600 font-mono">82</div>
                      <div className="text-xs font-medium text-slate-800 mt-1">Chars 19–20: Check Digits</div>
                      <div className="text-[11.5px] text-slate-500 font-light mt-0.5">Two mathematical checksum digits for real-time validation</div>
                    </div>
                  </div>
                </div>

                {/* Section 3: LEI vs Other Identifiers Table */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-[17px] font-normal text-[#12023B] mb-3">
                    Comparative Breakdown: LEI vs Other Business Identifiers
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Identifier</th>
                          <th className="py-3 px-4 font-normal">Issuing Authority</th>
                          <th className="py-3 px-4 font-normal">Geographic Scope</th>
                          <th className="py-3 px-4 font-normal">Primary Function</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-purple-50/40 transition-colors">
                          <td className="py-3 px-4 font-medium text-slate-900">LEI Code (20 Digits)</td>
                          <td className="py-3 px-4 text-slate-600">GLEIF / CCIL (India)</td>
                          <td className="py-3 px-4 text-purple-700 font-medium">Global (180+ Countries)</td>
                          <td className="py-3 px-4 text-slate-600">Financial transactions, OTC derivatives, high-value RTGS</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">PAN (10 Digits)</td>
                          <td className="py-3 px-4 text-slate-600">Income Tax Department</td>
                          <td className="py-3 px-4 text-slate-600">National (India)</td>
                          <td className="py-3 px-4 text-slate-600">Tax assessment and TDS compliance</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">CIN (21 Digits)</td>
                          <td className="py-3 px-4 text-slate-600">Ministry of Corporate Affairs</td>
                          <td className="py-3 px-4 text-slate-600">National (India)</td>
                          <td className="py-3 px-4 text-slate-600">Corporate incorporation identity under Companies Act</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">GSTIN (15 Digits)</td>
                          <td className="py-3 px-4 text-slate-600">GST Council / CBIC</td>
                          <td className="py-3 px-4 text-slate-600">National (India)</td>
                          <td className="py-3 px-4 text-slate-600">Indirect tax invoice matching &amp; input tax credit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 4: Why Mandatory in India */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-[17px] font-normal text-[#12023B] mb-3">
                    Reserve Bank of India (RBI) LEI Mandates
                  </h3>
                  <div className="space-y-3 text-[13px] font-light text-slate-600 leading-relaxed">
                    <p>
                      The Reserve Bank of India has issued phased notifications making LEI compulsory for non-individual borrowers and entities conducting large-scale capital movements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                        <span className="font-medium text-slate-800 block mb-1">RTGS / NEFT Over ₹50 Crore</span>
                        <span className="text-xs text-slate-500">All payment transactions initiated by entities of value ₹50 Cr and above must include remitter and beneficiary LEIs.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                        <span className="font-medium text-slate-800 block mb-1">Over-the-Counter Derivatives</span>
                        <span className="text-xs text-slate-500">Interest rate, foreign currency, and credit derivatives markets require active LEI for deal reporting.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                        <span className="font-medium text-slate-800 block mb-1">Large Corporate Borrowers</span>
                        <span className="text-xs text-slate-500">Borrowers with aggregate credit exposure exceeding ₹5 Crore from banking networks must hold an active LEI.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                        <span className="font-medium text-slate-800 block mb-1">Cross-Border Forex Transfers</span>
                        <span className="text-xs text-slate-500">Capital account outward remittances and foreign portfolio investments require verified LEI credentials.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5: Documents Required Table */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h3 className="text-[17px] font-normal text-[#12023B] mb-3">
                    Mandatory Documents Required for LEI Application
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Entity Type</th>
                          <th className="py-3 px-4 font-normal">Mandatory Documents to be Uploaded</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">Private / Public Ltd. Company</td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, MoA &amp; AoA, Company PAN, Audited Balance Sheet, Board Resolution</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">Limited Liability Partnership (LLP)</td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, Registered LLP Agreement, LLP PAN, Designated Partners KYC</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">Partnership Firm</td>
                          <td className="py-3 px-4 text-slate-600">Notarized/Registered Partnership Deed, Firm PAN, Registration Certificate (if any), Partners KYC</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">Trust / Society / Non-Profit</td>
                          <td className="py-3 px-4 text-slate-600">Trust Deed or Bylaws, Registration Certificate, Trust PAN, Resolution of Trustees</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-normal text-slate-800">Foreign Subsidiary in India</td>
                          <td className="py-3 px-4 text-slate-600">Indian CoI, Parent Entity Apostilled Incorporation Proof, Parent LEI (for Level 2 linkage), PAN</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6: Step-by-Step Registration Process */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-[17px] font-normal text-[#12023B] mb-3">
                    Step-by-Step LEI Registration Process with Merrafilings
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        step: "Step 1",
                        title: "Document Collection & Pre-Verification",
                        desc: "Our legal officers verify your incorporation certificate, PAN card, audited balance sheets, and ensure the official legal name exactly matches government registries.",
                      },
                      {
                        step: "Step 2",
                        title: "Drafting Board Resolution & Power of Attorney",
                        desc: "We draft the formal Board Resolution authorizing the application and designated signatory to ensure 100% compliance with LOU regulatory norms.",
                      },
                      {
                        step: "Step 3",
                        title: "Online Filing on Accredited CCIL / LOU Portal",
                        desc: "Our team enters verified Level 1 reference data (name, legal address, headquarters) and Level 2 parent structure data into the official registry.",
                      },
                      {
                        step: "Step 4",
                        title: "LOU Validation & 20-Digit LEI Issuance",
                        desc: "The issuing authority verifies the submitted records against the MCA / Income Tax databases and assigns your unique 20-character LEI code.",
                      },
                      {
                        step: "Step 5",
                        title: "Global GLEIF Publication & Certificate Download",
                        desc: "Your LEI code is published on the international GLEIF registry and your official PDF certificate is sent instantly for bank submission.",
                      },
                    ].map((st, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-[#FAF9F7]/40">
                        <span className="font-semibold text-xs text-[#6B4BFF] uppercase tracking-wider shrink-0 mt-0.5">
                          {st.step}
                        </span>
                        <div>
                          <div className="font-medium text-[13.5px] text-slate-800">{st.title}</div>
                          <div className="text-[12.5px] font-light text-slate-600 mt-1 leading-relaxed">{st.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            {/* Right 4 Columns: Sticky Sidebar */}
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
                    Consult <span className="text-[#155EEF] font-normal">LEI Experts</span>
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

              {/* State-wise Directory Dropdown */}
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

      {/* 2-Column FAQ Section */}
      <section id="faqs" className="py-14 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-[#00A86B] mb-3" />
          <h2 className="text-2xl sm:text-[28px] font-normal text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500 mt-1.5 mb-8">
            Essential queries about Legal Entity Identifier (LEI) Code registration, RBI rules, validity, and renewal in India.
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

          {/* Load More Button */}
          <div className="text-center mt-9 mb-14">
            <button
              type="button"
              onClick={() => setShowMoreFaqs(!showMoreFaqs)}
              className="px-6 py-2.5 rounded-lg bg-[#00A86B] hover:bg-[#00925d] text-white text-[13.5px] font-medium transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>{showMoreFaqs ? "Show less questions" : "Load more questions"}</span>
            </button>
          </div>

          {/* Related Services Tags */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 mb-6">
            <h3 className="font-normal text-[15px] sm:text-[16px] text-slate-800 mb-4">
              Related Services — Corporate &amp; Financial Compliance
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

          {/* Popular Searches Tags */}
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
          onClick={() => setIsContactOpen(true)}
          className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#00BF72] hover:bg-[#00AB66] text-white font-medium text-[13.5px] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-white text-[#00BF72]" />
          <span>Live chat with experts</span>
        </button>
      </div>

      {/* Global Modals */}
      <ServiceSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={() => setIsContactOpen(true)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        serviceTitle="Legal Entity Identifier (LEI) Code Registration"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
