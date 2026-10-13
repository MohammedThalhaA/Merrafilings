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
  Sparkles,
  Building,
  Check,
  ChevronUp,
  Clock,
  TrendingUp,
  Landmark,
  BadgePercent,
  Briefcase,
  ShieldAlert,
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

// All 21 unique FAQs from the live source
const FAQ_COL_1 = [
  {
    q: "What is LEI Number?",
    a: "A Legal Entity Identifier (LEI) is a 20-character alphanumeric code unique to each legal entity participating in global financial transactions. Governed by the Global Legal Entity Identifier Foundation (GLEIF) under ISO 17442 norms, it provides clear, standardized identification of counterparties worldwide.",
  },
  {
    q: "Who needs an LEI Number in India?",
    a: "Under Reserve Bank of India (RBI) mandates, LEI is required for non-individuals conducting RTGS and NEFT transactions of ₹50 Crore and above, entities participating in Over-the-Counter (OTC) derivative markets, participants in non-derivative markets (money markets & G-Secs), and corporate borrowers with aggregate banking exposure of ₹5 Crore and above.",
  },
  {
    q: "What are the typical uses of an LEI Code?",
    a: "An LEI code is used for large-value centralized payment transactions, OTC derivatives trade reporting, client identification in foreign exchange dealings, debt and equity issuances, credit facility appraisals by commercial banks, and cross-border trade transactions.",
  },
  {
    q: "Which organizations issue LEI Codes?",
    a: "LEI codes are issued by accredited Local Operating Units (LOUs) approved by the Global Legal Entity Identifier Foundation (GLEIF). In India, the primary accredited LOU is Legal Entity Identifier India Limited (LEIL), a wholly-owned subsidiary of the Clearing Corporation of India Limited (CCIL).",
  },
  {
    q: "Is obtaining an LEI Code compulsory?",
    a: "Yes. For entities engaging in transactions above the thresholds established by the RBI and SEBI, obtaining and maintaining an active LEI code is mandatory by law. Without an active LEI, banks will block high-value RTGS/NEFT payments.",
  },
];

const FAQ_COL_2 = [
  {
    q: "How is the LEI Code formatted?",
    a: "An LEI code follows a 20-character ISO 17442 standard: Characters 1-4 represent the LOU prefix (e.g., 3358 for CCIL/LEIL); Characters 5-18 represent the unique entity-specific identifier assigned to the firm; Characters 19-20 are two mathematical check digits calculated via checksum algorithms.",
  },
  {
    q: "What is the primary function of an LEI Code?",
    a: "The primary function of an LEI is to create a universally standardized system for identifying distinct legal entities in financial transactions, reducing systemic risk, eliminating counterparty ambiguity, and providing global financial transparency.",
  },
  {
    q: "What is the validity period of an LEI Code?",
    a: "An LEI code is valid for exactly one year from the date of issuance or last renewal. Entities must complete annual renewals and verify their Level 1 and Level 2 reference data to keep their status 'ISSUED' in the global registry.",
  },
  {
    q: "What is the procedure for applying for an LEI Code?",
    a: "The procedure involves: 1) Gathering entity incorporation documents and Board Resolution; 2) Registering on the accredited CCIL/LEIL portal; 3) Filling the application with Level 1 entity details and Level 2 parent structure; 4) Uploading required documents; 5) Paying statutory fees; and 6) Receiving your official LEI certificate upon LOU verification.",
  },
  {
    q: "What specific documents are needed to apply for an LEI?",
    a: "Documents include the Certificate of Incorporation, MOA & AOA / LLP Agreement / Partnership Deed, entity PAN card, audited financial statements or net worth certificate, Board Resolution or Letter of Authorization, and KYC documents of the authorized signatory.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How can one search for an existing LEI Code?",
    a: "Anyone can search and verify an existing LEI code for free on the official GLEIF Global LEI Search portal (gleif.org) or on the CCIL India LEI portal (legalentity.ccilindia.co.in) by entering the entity name or the 20-character code.",
  },
  {
    q: "What kind of information does an LEI reveal about an entity?",
    a: "An LEI provides two levels of public data: Level 1 ('Who is who') reveals official legal name, registered address, legal form, and registry number. Level 2 ('Who owns whom') reveals direct and ultimate parent holding entities that consolidate financial accounts.",
  },
  {
    q: "What role do LEIs play in enhancing financial market operations?",
    a: "LEIs streamline Know Your Customer (KYC) onboarding for banks, enable precise counterparty risk assessments, minimize settlement and transaction errors, and enhance regulatory reporting across global capital markets.",
  },
  {
    q: "Are there penalties for not having an LEI when required?",
    a: "Yes. In India, commercial banks will reject RTGS/NEFT payments of ₹50 Crore and above, credit and loan sanction facilities may be frozen, and participation in OTC derivatives and debt markets will be barred until a valid LEI is provided.",
  },
  {
    q: "How quickly can an LEI be issued after application?",
    a: "With complete and verified documentation submitted through Merrafilings, an LEI number is typically issued within 24 to 48 working hours.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Is it possible to cancel an LEI Code?",
    a: "An LEI code cannot be cancelled or deleted because it forms a permanent historical audit trail in the global financial database. However, if an entity dissolves or merges, its status in the registry will be updated to 'RETIRED' or 'MERGED'.",
  },
  {
    q: "Why are LEIs critical for regulatory compliance?",
    a: "LEIs are mandated by central financial watchdogs worldwide, including the Reserve Bank of India, SEBI, US SEC, and European ESMA, to track macroprudential risks and prevent fraudulent transactions across interconnected banking networks.",
  },
  {
    q: "What are the costs associated with obtaining an LEI?",
    a: "Statutory issuance fees for a new LEI range between ₹4,000 and ₹6,000 depending on the issuing authority, while annual renewals typically cost between ₹2,500 and ₹4,000. Merrafilings provides end-to-end all-inclusive packages.",
  },
  {
    q: "How can Merrafilings assist in the LEI registration process?",
    a: "Merrafilings manages the complete registration lifecycle: drafting institutional-grade Board Resolutions, reviewing entity documentation, filing on the CCIL/LEIL portal, handling officer scrutiny queries, and providing automated renewal management.",
  },
  {
    q: "What is LEI Certificate Meaning?",
    a: "An LEI Certificate is an official document generated by an accredited LOU confirming that an entity has been verified and assigned a specific 20-character Legal Entity Identifier, detailing its legal name, registration date, and next renewal date.",
  },
  {
    q: "What is the process of LEI Certificate Download?",
    a: "Once issued, log into your registered account on the CCIL LEI portal or Merrafilings dashboard, navigate to 'My LEI / Certificate', click 'Download Certificate', and save the authentic digitally signed PDF certificate.",
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

      {/* Hero Section with Master Radial Backdrop */}
      <section className="relative overflow-visible pt-6 sm:pt-8 md:pt-[30px] pb-4 sm:pb-5 md:pb-6">
        {/* Curved Radial Gradient Backdrop matching reference template */}
        <div
          className="absolute inset-x-0 top-0 z-0 mx-auto w-full px-4 sm:px-0 rounded-b-[30px] sm:rounded-b-[40px] md:rounded-b-[50px]"
          style={{
            height: "calc(100% - 120px)",
            minHeight: "500px",
            background:
              "radial-gradient(ellipse 140% 90% at 20% 100%, rgb(255, 209, 189) 0%, rgba(255, 233, 225, 1) 25%, rgba(240, 208, 195, 0.5) 45%, rgba(238, 218, 209, 0.2) 65%, transparent 85%), radial-gradient(ellipse 140% 90% at 80% 100%, rgb(153, 228, 255) 0%, rgb(153, 228, 255) 0%, rgba(187, 222, 233, 0.5) 45%, rgba(189, 229, 241, 0.2) 65%, transparent 85%), linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(250, 248, 248) 35%, rgb(245, 242, 242) 55%, rgb(240, 238, 238) 70%, rgba(235, 233, 233, 0.5) 85%, rgba(230, 228, 228, 0.2) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
          {/* Hero Header */}
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight text-[#12023B]">
              <span>LEI Registration for </span>
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
                Businesses &amp; Transactions
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 font-light">
              Get your globally recognized 20-digit Legal Entity Identifier (LEI) code quickly and easily with Merrafilings. Ensure compliance with RBI guidelines for seamless high-value transactions.
            </p>
          </div>

          {/* Floating Intake Card with 5 Features on Left and Form on Right */}
          <div className="relative z-10 mx-auto mt-6 sm:mt-8 max-w-[72rem] rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 p-5 sm:p-8 md:p-10 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-2 items-start">
              {/* Left Column: Heading, Subtitle & 5 Purple Bullets */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#12023B] leading-tight">
                    Apply for Your LEI Code
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Fast, secure, and hassle-free LEI registration and renewal tailored for Indian corporations, banks, and LLPs.
                  </p>
                </div>

                <ul className="space-y-3.5 pt-2">
                  {/* Feature 1 */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-light">
                      RBI Mandatory Compliance Verification
                    </span>
                  </li>

                  {/* Feature 2 */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-light">
                      Document Collection &amp; Drafting
                    </span>
                  </li>

                  {/* Feature 3 */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <Building className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-light">
                      CCIL / GLEIF LOU Application Filing
                    </span>
                  </li>

                  {/* Feature 4 */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-light">
                      Fast-Track Issuance in 24-48 Hours
                    </span>
                  </li>

                  {/* Feature 5: Gradient-Text Required Documents Link */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <a
                      href="#documents-required"
                      className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                      Required Documents
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column: Lead Form */}
              <div className="bg-[#FAF8F5]/90 rounded-2xl border border-[#EBE6DD] p-5 sm:p-6 shadow-xs">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827]">Application Received!</h3>
                    <p className="text-[14px] text-[#475467]">
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our LEI regulatory specialist will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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
                  <Users className="w-5 h-5 text-[#6B4BFF]" />
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
              className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth"
            >
              {CLIENT_MINI_CARDS.map((client, idx) => (
                <div
                  key={idx}
                  className="min-w-[130px] sm:min-w-[150px] h-[58px] px-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#00B074]/60 hover:shadow-xs flex items-center justify-center transition-all shrink-0 select-none cursor-pointer"
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

      {/* Pricing Packages Section (3 Cards with green hover highlight) */}
      <section id="pricing" className="py-14 sm:py-16 bg-[#FBFBFA]/60 border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111827]">
              Simple packages. Transparent{" "}
              <span className="font-normal text-[#00B074]">pricing.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-light">
              Choose the right Legal Entity Identifier (LEI) registration or renewal package for your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Package 1: 1-Year LEI Registration */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  1-Year LEI Code
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Standard new LEI registration valid for 1 year across global banking networks...{" "}
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
                    Includes Level 1 &amp; Level 2 reference data verification, draft Board Resolution, registration on CCIL/LEIL, official certificate issuance, and compliance with RBI RTGS/NEFT requirements.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹4,499
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST &amp; LOU Fee | 1-Year Validity</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>New 20-Digit LEI Code Allocation</span>
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
                      <span>Official PDF Certificate Download</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Bank RTGS/NEFT Compliance Letter</span>
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

            {/* Package 2: 3-Year LEI Multi-Year Package (Most Popular) */}
            <div className="group bg-white rounded-[22px] border-[2px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,176,116,0.12)] hover:shadow-[0_20px_42px_rgba(0,176,116,0.22)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00B074] text-white text-[11px] font-semibold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                Most Popular
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  3-Year Multi-Year LEI
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Automatic annual renewals for 3 years without transaction lapse risk...{" "}
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
                    Recommended for active corporate borrowers and exporters. Merrafilings manages annual data re-certification and pays statutory renewal fees seamlessly, guaranteeing continuous active status in the global registry.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹9,999
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Full 3-Year Protection &amp; Renewal</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>New LEI Code or Transfer Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>3 Years Continuous Active Status Guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Zero Lapsed Status &amp; Automatic Re-validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Annual Parent Entity (Level 2) Data Updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated CA/CS Compliance Officer</span>
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

            {/* Package 3: 5-Year Enterprise Package */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  5-Year Enterprise LEI
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Long-term 5-year compliance lock-in for large enterprises, public limited companies, and financial institutions...{" "}
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
                    Maximum cost savings and zero administrative burden. Covers 5 continuous years of registration, automated Level 1/Level 2 renewals, priority bank communications, and expedited 24-hour response on registry updates.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹14,999
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Complete 5-Year Enterprise Protection</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Full 5-Year LEI Code Allocation &amp; Maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Highest Cumulative Savings (Up to 40% Off)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Annual Automated LOU Fee Settlements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Corporate Ownership Structure Consultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Priority Support &amp; Instant Banking Letters</span>
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
            <span className="text-[#00B074] font-normal">LEI Code</span>
          </nav>

          {/* Grid Layout: Main Article on Left, Sidebar on Right (Full width, not squeezed in center) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden p-6 sm:p-10 border-t-2 border-t-emerald-400">
              <article className="max-w-none space-y-8">
                {/* Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Legal Entity Identifier Number Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    A <strong className="font-medium text-slate-800">Legal Entity Identifier (LEI) number</strong> is a unique 20-character alphanumeric code assigned to legal entities participating in global financial transactions. Businesses, banks, mutual funds, and commercial corporations in India must obtain an <strong className="font-medium text-slate-800">LEI registration</strong> to comply with strict Reserve Bank of India (RBI) mandates and international financial governance standards. Merrafilings provides end-to-end expert advisory, swift documentation review, and seamless coordination with accredited Local Operating Units (LOUs) to issue and maintain your LEI code efficiently.
                  </p>
                </div>

                {/* Section 1: What is a Legal Entity Identifier (LEI) Number? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is a Legal Entity Identifier (LEI) Number?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    A Legal Entity Identifier number is a globally recognized unique identification code issued to legal entities involved in financial transactions. Introduced by the <strong>Financial Stability Board (FSB)</strong> and endorsed by the G20 in the aftermath of the 2008 global financial crisis, the LEI system was created to improve transparency, monitor systemic exposure, and eliminate counterparty ambiguity across international financial markets.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    In India, the Reserve Bank of India (RBI) has made LEI registration mandatory for entities participating in large-value centralized transactions, over-the-counter derivatives, non-derivative markets, and foreign currency transactions. Every LEI number is linked to publicly accessible, verified reference data about a legal entity, providing definitive proof of its institutional existence and corporate hierarchy.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-5 mb-2">
                    Structure of an LEI Code (ISO 17442 Norm)
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                    An LEI code is a 20-character alphanumeric identifier standardized under the international ISO 17442 norm, structured as follows:
                  </p>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 1-4 (LOU Prefix):</strong> Identifies the accredited Local Operating Unit that issued the code (e.g., 3358 for CCIL/LEIL in India).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 5-18 (Unique Entity ID):</strong> Entity-specific alphanumeric characters assigned uniquely to the applying organization.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 19-20 (Verification Check Digits):</strong> Two mathematical check digits calculated via standard algorithms for automated error detection and validation.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-5 mb-2">
                    LEI vs. Other Business Identifiers
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                    To understand where the LEI sits within corporate identity systems, consider how it compares to conventional domestic identifiers:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Identifier</th>
                          <th className="py-3 px-4 font-normal">Issuing Authority</th>
                          <th className="py-3 px-4 font-normal">Scope</th>
                          <th className="py-3 px-4 font-normal">Primary Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong className="text-slate-900">LEI Number</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">GLEIF / CCIL (LEIL)</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">Global</td>
                          <td className="py-3 px-4 text-slate-600">Financial transaction &amp; counterparty identification</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>PAN</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Income Tax Department</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Direct tax assessment and tracking</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>CIN</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Ministry of Corporate Affairs</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Corporate registration &amp; statutory identity</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>GSTIN</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">GST Council / CBIC</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Goods and Services Tax compliance &amp; invoicing</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>DUNS Number</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Dun &amp; Bradstreet</td>
                          <td className="py-3 px-4 text-slate-600">Global</td>
                          <td className="py-3 px-4 text-slate-600">Commercial credit scoring &amp; vendor profiling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 2: Why is Legal Entity Identifier Registration Mandatory in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why is Legal Entity Identifier Registration Mandatory in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The LEI registration mandate in India was established by the Reserve Bank of India to bolster financial sector stability, track systemic concentration risks, and bring transparency to high-value capital transfers. Over recent years, the RBI has progressively expanded the scope of mandatory LEI compliance across corporate banking, foreign exchange, and debt markets.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Failing to obtain or renew an LEI number leads to immediate operational gridlock: commercial banks in India are prohibited from executing RTGS and NEFT transactions exceeding prescribed limits for non-compliant entities, causing delays in supplier disbursements, loan servicing, and overseas remittances.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    RBI Guidelines on LEI Compliance
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>RTGS and NEFT Payments:</strong> Mandatory for all single payment transactions of ₹50 Crore and above undertaken by non-individual entities in centralized payment systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Over-The-Counter (OTC) Derivatives:</strong> Mandatory for all non-individual entities trading in interest rate, foreign currency, and credit derivative markets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Non-Derivative Financial Markets:</strong> Mandatory for participants in government securities (G-Secs), money markets, and corporate bond markets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Large Corporate Borrowers:</strong> Mandatory for non-individual borrowers having aggregate fund-based and non-fund-based banking exposures of ₹5 Crore and above from Scheduled Commercial Banks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Cross-Border Foreign Currency Deals:</strong> Mandatory for non-individual Indian resident entities undertaking cross-border capital or current account transfers above regulatory thresholds.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Who Needs to Complete the LEI Registration?
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Under notifications issued jointly by the RBI, SEBI, and IRDAI, the following categories of organizations must obtain an active LEI number: all public and private limited companies, banks, Non-Banking Financial Companies (NBFCs), insurance providers, mutual fund schemes, registered partnership firms, Limited Liability Partnerships (LLPs), institutional trusts, and foreign portfolio investors (FPIs).
                  </p>
                </div>

                {/* Section 3: What is the Purpose of LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Purpose of LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The fundamental purpose of LEI registration is to establish an internationally unified, unambiguous identity for every organization transacting in modern financial markets. By replacing fragmented regional registration codes with a single globally recognized credential, the LEI system enables regulators, financial institutions, and trading counterparties to clearly identify transaction parties across borders, significantly curtailing systemic vulnerabilities.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    In India, the RBI&apos;s mandate on large-value transactions enforces strict fiscal accountability, accelerates automated settlement processing, and directly bolsters national Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) risk management architectures.
                  </p>
                </div>

                {/* Section 4: What are the Benefits of LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What are the Benefits of LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Securing an official LEI certificate delivers substantial strategic, operational, and compliance advantages to corporate enterprises and institutional lenders alike:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Benefits for Corporate Entities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-[#00A86B]" />
                        Global Financial Recognition
                      </div>
                      <p className="text-[12px] font-light text-slate-600">Universally recognized across 200+ jurisdictions, opening frictionless doors to international trade and overseas banking.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#00A86B]" />
                        Full Regulatory Compliance
                      </div>
                      <p className="text-[12px] font-light text-slate-600">Guarantees uninterrupted processing of RTGS/NEFT transactions of ₹50 Cr+ without banking rejections or RBI penalties.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#00A86B]" />
                        Elevated Corporate Creditworthiness
                      </div>
                      <p className="text-[12px] font-light text-slate-600">Instills institutional confidence in commercial banks, debt syndicates, and overseas export-import counterparties.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#00A86B]" />
                        Expedited Transaction Clearing
                      </div>
                      <p className="text-[12px] font-light text-slate-600">Automates counterparty verification, eliminating manual compliance audits and settlement delays.</p>
                    </div>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Benefits for Financial Institutions and Banks
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Streamlined Regulatory Reporting:</strong> Standardizes counterparty data fields across internal risk databases and RBI reporting systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>KYC Cost Reduction:</strong> Eliminates duplicative identity verification through the publicly accessible global GLEIF database.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Transparent Ownership Hierarchies:</strong> Level 2 data maps complex corporate structures and ultimate parent exposure in seconds.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 5: What are the Types of Entities Eligible for LEI Registration? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What are the Types of Entities Eligible for LEI Registration?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Any distinct legal organization that participates in financial transactions is eligible and qualified to apply for an LEI code. The following categories of entities can register in India:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {[
                      { title: "Private Limited Companies", desc: "Corporations incorporated under Companies Act, 2013 engaged in financial dealings." },
                      { title: "Public Limited Companies", desc: "Listed or unlisted corporate enterprises with active debt or equity market exposure." },
                      { title: "One Person Companies (OPC)", desc: "Sole corporate vehicles with high-value commercial transactions." },
                      { title: "Limited Liability Partnerships (LLP)", desc: "LLPs participating in commercial banking and financial markets." },
                      { title: "Partnership Firms (Registered)", desc: "Firms transacting in regulated banking channels and OTC markets." },
                      { title: "Sole Proprietorships", desc: "Proprietorship concerns executing banking payments above regulatory limits." },
                      { title: "Section 8 Companies & NGOs", desc: "Non-profit corporate organizations receiving foreign or domestic capital." },
                      { title: "Trusts and Societies", desc: "Registered charitable or private trusts managing financial investments." },
                      { title: "Producer Companies", desc: "Agri-business producer institutions accessing centralized payment systems." },
                      { title: "Indian Subsidiaries of Foreign MNCs", desc: "Local corporate entities tied to foreign corporate parents." },
                      { title: "Banks, NBFCs & Mutual Funds", desc: "Financial institutions, asset managers, and insurance companies." },
                      { title: "Government Entities & PSUs", desc: "Public sector undertakings transacting in government securities." },
                    ].map((ent, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#FAF9F7] border border-slate-200/70">
                        <div className="font-medium text-[13px] text-slate-800">{ent.title}</div>
                        <div className="text-[12px] font-light text-slate-500 mt-0.5">{ent.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: What Information is Required for LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Information is Required for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Before initiating the online application, entities must compile two levels of verified corporate data as mandated by the GLEIF governance framework:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Level 1 Data: Legal Entity Information (&ldquo;Who is Who&rdquo;)
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-light text-slate-600 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Official statutory legal name as reflected in official government registries.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Registered office address and primary headquarters address with postal PIN code.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Country and state of formation or statutory registration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Legal entity classification (Company, LLP, Trust, Partnership, etc.).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Official business registration number (CIN, LLPIN, RoF Registration No.) and date.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Entity status in official registry (Active, Inactive, Dissolved).</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Level 2 Data: Corporate Structure Details (&ldquo;Who owns Whom&rdquo;)
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Direct Parent Entity:</strong> Legal name, LEI (if available), and registration details of the immediate holding company consolidating the accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Ultimate Parent Entity:</strong> Details of the highest-level corporate parent consolidating financial accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Opt-Out Exception Reporting:</strong> Formal declaration if no parent entity consolidates financial accounts (e.g., widely held public company or natural persons holding shares).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Permanent Account Number (PAN) and authorized signatory contact credentials.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 7: What Documents are Required for LEI Registration in India? */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Documents are Required for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Uploading verified documents matching government registries ensures rapid clearance without requisition queries. Below is the entity-wise document matrix:
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
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, MOA &amp; AOA, Company PAN Card, GST Certificate, Audited Balance Sheet, Board Resolution.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Partnership Firm
                          </td>
                          <td className="py-3 px-4 text-slate-600">Partnership Deed, Registration Certificate, Firm PAN Card, GST Certificate, Registered Office Address Proof, Authorization Letter.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LLP (Limited Liability Partnership)
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, LLP Agreement, LLP PAN Card, GST Certificate, Designated Partners Resolution.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Sole Proprietorship
                          </td>
                          <td className="py-3 px-4 text-slate-600">Proprietor PAN Card, GST Certificate, Shop &amp; Establishment License or Udyam Certificate, Bank Statement/Address Proof.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Trust / Society / NGO
                          </td>
                          <td className="py-3 px-4 text-slate-600">Trust Deed or MOA, Registration Certificate, Trust PAN Card, Trustees Resolution, Address Proof.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Government Entity / PSU
                          </td>
                          <td className="py-3 px-4 text-slate-600">Government Authorization Gazette / Letter, Entity PAN Card, Department Address Proof, Signatory Appointment Order.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Foreign Entity
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation from Country of Origin (Apostilled/Notarized), Indian PAN if available, Parent LEI proof.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    General Supporting Documentation for Other Entities
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Government identity proof (PAN card and Aadhaar / Passport) of the authorized signatory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Latest audited financial statements or formal Chartered Accountant Net Worth Certificate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Board Resolution on corporate letterhead authorizing the submission and payment.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 8: How One Can Obtain LEI in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How One Can Obtain LEI in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    In India, entities can obtain their LEI number through a Local Operating Unit (LOU) accredited by the Global Legal Entity Identifier Foundation (GLEIF). The primary accredited LOU in India is <strong>Legal Entity Identifier India Limited (LEIL)</strong>, a dedicated subsidiary of the Clearing Corporation of India Limited (CCIL).
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Entities can apply directly on the CCIL portal or engage authorized registration facilitators like Merrafilings. Applying with Merrafilings eliminates procedural friction: our regulatory specialists audit corporate records, draft mandatory Board Resolutions, manage LOU communications, and guarantee that the certificate is generated accurately without rejection.
                  </p>
                </div>

                {/* Section 9: What is the Process of LEI Application in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Process of LEI Application in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The LEI application process follows a structured validation sequence to ensure compliance with global GLEIF benchmarks:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-3">
                    Step-by-Step LEI Application Sequence
                  </h3>
                  <div className="space-y-3 mb-5">
                    {[
                      { step: "1", title: "Access CCIL LEI Portal", text: "Navigate to the official portal (legalentity.ccilindia.co.in) or initiate through Merrafilings." },
                      { step: "2", title: "User Account Creation", text: "Create user credentials using your verified corporate email ID and complete phone authentication." },
                      { step: "3", title: "Entity Type Selection", text: "Choose your exact business entity classification (Company, LLP, Firm, Trust, Society, etc.)." },
                      { step: "4", title: "Fill Level 1 & Level 2 Data", text: "Enter registered legal name, office address, registry details, and parent company structure." },
                      { step: "5", title: "Upload Supporting Documents", text: "Attach scanned PDF copies of incorporation certificate, PAN card, audited financials, and Board Resolution." },
                      { step: "6", title: "Pay Statutory Registration Fee", text: "Complete fee payment securely via net banking, corporate credit card, or NEFT gateway." },
                      { step: "7", title: "LOU Scrutiny & Data Cross-Verification", text: "Issuing authority validates submitted information against MCA, Income Tax, and state registries." },
                      { step: "8", title: "LEI Code Generation & Publication", text: "Your 20-digit LEI is published in the global GLEIF database and the official PDF certificate is issued." },
                    ].map((st) => (
                      <div key={st.step} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                        <div className="w-7 h-7 rounded-full bg-[#00A86B] text-white flex items-center justify-center text-xs font-semibold shrink-0">
                          {st.step}
                        </div>
                        <div>
                          <div className="font-medium text-[13.5px] text-slate-900">{st.title}</div>
                          <div className="text-[12.5px] font-light text-slate-600 mt-0.5">{st.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    LEI Application Form Filling Guidelines
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Ensure the legal name matches character-by-character with your MCA Certificate of Incorporation or PAN Card.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Provide the official registered office address; do not substitute with a temporary branch or factory address.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Ensure all document uploads are high-resolution, signed, and stamped by the designated authorized signatory.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 10: How to Register an LEI Number Online in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Register an LEI Number Online in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The entire LEI registration process in India is 100% digital with zero physical paperwork. However, avoiding common submission blunders is critical to prevent application rejection:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Common Errors to Avoid During LEI Registration
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">1. Name Mismatches</div>
                      <div className="text-[12px] font-light text-slate-600 mt-1">Discrepancies between the name in MCA, Income Tax PAN, and the LEI application will trigger instant rejection.</div>
                    </div>
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">2. Wrong Registered Address</div>
                      <div className="text-[12px] font-light text-slate-600 mt-1">Using operational or branch addresses instead of the legal registered office listed with MCA causes verification failure.</div>
                    </div>
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">3. Incomplete Parent Entity Records</div>
                      <div className="text-[12px] font-light text-slate-600 mt-1">Omitting parent company details or failing to upload formal consolidation opt-out reasons delays issuance.</div>
                    </div>
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">4. Expired or Unsigned Documents</div>
                      <div className="text-[12px] font-light text-slate-600 mt-1">Uploading undated Board Resolutions or expired registration certificates results in scrutiny queries.</div>
                    </div>
                  </div>
                </div>

                {/* Section 11: What is the LEI Registration Fee and Validity in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the LEI Registration Fee and Validity in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The cost of obtaining and maintaining an LEI code in India includes the statutory LOU fee plus professional facilitation fees. Below is the indicative fee structure:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Service Type</th>
                          <th className="py-3 px-4 font-normal">Indicative Fee Range</th>
                          <th className="py-3 px-4 font-normal">Validity Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            New LEI Registration
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">₹4,000 to ₹6,000</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">1 Year</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Annual LEI Renewal
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">₹2,500 to ₹4,000</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">1 Year</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LEI Transfer Between LOUs
                          </td>
                          <td className="py-3 px-4 text-slate-600">As applicable by issuing LOU</td>
                          <td className="py-3 px-4 text-slate-600">Preserves original validity</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LEI Reference Data Update
                          </td>
                          <td className="py-3 px-4 text-slate-600">Nominal processing charges</td>
                          <td className="py-3 px-4 text-slate-600">No change in validity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 12: What is the Renewal and Validity of LEI Code in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Renewal and Validity of LEI Code in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    An LEI code is valid for exactly one year from the date of issuance. To keep the LEI status marked as &ldquo;ISSUED&rdquo; (Active) in the global GLEIF database, legal entities must submit annual renewal applications and verify their corporate ownership records.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    LEI Renewal Process and Timeline
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-light text-slate-600 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Initiate renewal at least 30 days before the annual expiry date to prevent lapsing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Review existing Level 1 address data and Level 2 parent structure, updating changes if any.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Pay the applicable annual LOU renewal fee and receive confirmation with updated validity.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Consequences of Non-Renewal of LEI
                  </h3>
                  <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/20 space-y-2">
                    <div className="flex items-center gap-2 text-red-900 font-medium text-[13.5px]">
                      <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                      Critical Penalties of a Lapsed LEI:
                    </div>
                    <ul className="text-[12.5px] font-light text-slate-700 space-y-1.5 pl-6 list-disc">
                      <li><strong>Immediate Lapsed Status:</strong> Status changes from Active to LAPSED in the global GLEIF registry.</li>
                      <li><strong>Blocked Banking Transactions:</strong> Commercial banks in India will decline RTGS and NEFT transactions exceeding ₹50 Crore.</li>
                      <li><strong>Trade Facility Freezes:</strong> Credit, working capital lines, and letter of credit disbursements will be halted by financial institutions.</li>
                      <li><strong>Regulatory Sanctions:</strong> Penalties and compliance notices issued under RBI circulars and SEBI guidelines.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 13: How to Download the LEI Certificate in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Download the LEI Certificate in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Upon successful approval by the LOU, you can download your official LEI Certificate in PDF format through the following steps:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li>Log into your registered account on the CCIL LEI portal (<span className="text-[#155EEF]">legalentity.ccilindia.co.in</span>) or Merrafilings dashboard.</li>
                    <li>Navigate to the &ldquo;My LEI&rdquo; or &ldquo;Certificate&rdquo; tab on your dashboard.</li>
                    <li>Select the active LEI record associated with your legal entity.</li>
                    <li>Click on &ldquo;Download Certificate&rdquo; to retrieve the digitally signed PDF file.</li>
                    <li>Store the certificate securely and share the 20-digit code with your commercial bank branch for RTGS/NEFT clearance.</li>
                  </ol>
                </div>

                {/* Section 14: How to Verify the Legal Entity Identifier Certificate in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Verify the Legal Entity Identifier Certificate in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Commercial counterparties, corporate treasuries, and compliance officers can independently verify any LEI code in real-time:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1">1. Global GLEIF Search Portal</div>
                      <p className="text-[12.5px] font-light text-slate-600">
                        Visit <span className="text-[#155EEF]">gleif.org</span> and enter the 20-character code in the global search bar to review entity ownership, LOU issuer, and active status.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1">2. India CCIL / LEIL Directory</div>
                      <p className="text-[12.5px] font-light text-slate-600">
                        Visit <span className="text-[#155EEF]">legalentity.ccilindia.co.in</span> and input the PAN, CIN, or LEI number to verify domestic records against RBI mandates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 15: Why Should You Choose Merrafilings for LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Should You Choose Merrafilings for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Merrafilings is India&apos;s premier corporate legal and compliance advisory platform. Our dedicated team of Chartered Accountants, Company Secretaries, and banking specialists takes the friction out of LEI registration and multi-year renewals:
                  </p>
                  <ul className="space-y-2.5 text-[13px] font-light text-slate-600 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Fast-Track Issuance in 24-48 Hours:</strong> Expedited documentation and direct coordination with CCIL/LEIL for urgent bank clearance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Error-Free Corporate Resolution Drafting:</strong> Institutional-grade drafting of Board Resolutions and authorization documents.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Multi-Year Auto-Renewal Protection:</strong> 3-year and 5-year maintenance programs guaranteeing that your LEI never lapses.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Dedicated Corporate Advisor:</strong> Personalized phone and chat support for your finance and treasury departments.</span>
                    </li>
                  </ul>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="font-medium text-[14.5px] text-slate-900">Need an LEI Code for High-Value Bank Transfers?</div>
                      <div className="text-[12.5px] font-light text-slate-600">Connect with our corporate regulatory specialists today.</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setContactOpen(true)}
                      className="px-5 py-2.5 rounded-lg bg-[#00B074] hover:bg-[#009B66] text-white font-medium text-[13.5px] shadow-sm transition-all shrink-0 cursor-pointer"
                    >
                      Apply with Merrafilings
                    </button>
                  </div>
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
            Common questions about Legal Entity Identifier (LEI) Code Registration and Renewal in India.
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
              Related Services - Corporate Compliance
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
        serviceTitle="Legal Entity Identifier (LEI) Registration & Renewal"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
