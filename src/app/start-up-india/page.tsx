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
  Rocket,
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
    q: "What is Startup India Registration and DPIIT Recognition?",
    a: "Startup India Registration is the official process of enrolling your venture under the Government of India's flagship Startup India scheme to obtain DPIIT recognition. This certificate unlocks 3-year income tax exemptions (Section 80-IAC), angel tax relief, 80% patent rebates, and access to government-backed funding.",
  },
  {
    q: "Who is eligible for Startup India DPIIT recognition?",
    a: "Eligible entities must be incorporated in India as a Private Limited Company, Limited Liability Partnership (LLP), or Registered Partnership Firm; must not be older than 10 years from incorporation; annual turnover must not exceed ₹100 Crore in any financial year; and the business must work toward innovation, development, or scalable improvement of products or services.",
  },
  {
    q: "Can sole proprietorships or unregistered firms apply for Startup India?",
    a: "No. Sole proprietorships and notarized (unregistered) partnership firms are not eligible for DPIIT recognition. You must first incorporate or convert your business into a Private Limited Company, LLP, or registered partnership firm.",
  },
  {
    q: "What is the 3-Year Tax Holiday under Section 80-IAC?",
    a: "DPIIT-recognised Private Limited Companies and LLPs incorporated on or after April 1, 2016, can apply to the Inter-Ministerial Board (IMB) for a 100% tax exemption on profits for any 3 consecutive financial years out of their first 10 years of operation.",
  },
  {
    q: "What is Angel Tax Exemption under Section 56(2)(viib)?",
    a: "Recognized startups can claim exemption from angel tax on equity investments received from accredited investors, angel funds, or foreign venture capitalists above the Fair Market Value (FMV) by filing Form 2 on the Startup India portal.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What Intellectual Property (IP) rebates do recognized startups receive?",
    a: "DPIIT-recognised startups receive an 80% statutory rebate on patent filing fees, a 50% rebate on trademark applications, fast-tracked patent examinations, and free facilitation services from government-empanelled IP attorneys.",
  },
  {
    q: "How does Startup India benefit startups bidding for Government Tenders?",
    a: "DPIIT-recognized startups are completely exempt from 'prior experience' and 'prior turnover' criteria in public procurement tenders on the Government e-Marketplace (GeM) and central government contracts, leveling the playing field with large corporates.",
  },
  {
    q: "What documents are required to apply for DPIIT Recognition?",
    a: "Required documents include Certificate of Incorporation / Registration, Entity PAN Card, pitch deck / presentation explaining innovation, proof of concept (website URL, demo video, or prototype images), letter of authorization, and founder identity proofs.",
  },
  {
    q: "How long does it take to obtain the DPIIT Certificate?",
    a: "Once your application with complete innovation narrative, pitch deck, and documents is submitted through Merrafilings, the DPIIT certificate is typically issued by the government within 5 to 10 working days.",
  },
  {
    q: "Does the Startup India Certificate require annual renewal?",
    a: "No. The DPIIT Certificate of Recognition has no expiry date and does not require annual renewal. It remains active as long as the startup remains within the 10-year age limit and under ₹100 Crore annual turnover threshold.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What is self-certification for labor and environmental laws?",
    a: "DPIIT-recognised startups can self-certify compliance for up to 5 years under 9 labor laws (including PF, ESIC, Gratuity) and 3 environmental laws, exempting them from routine regulatory inspections.",
  },
  {
    q: "What is the fast-track exit / winding-up provision for startups?",
    a: "Under the Insolvency and Bankruptcy Code (IBC), DPIIT-recognized startups can wind up and exit operations within 90 days (compared to 180 days for standard companies) through a simplified fast-track mechanism.",
  },
  {
    q: "Can a startup formed by splitting an existing business qualify?",
    a: "No. The scheme strictly disqualifies any entity created by splitting up, reconstruction, or rebranding an existing business. The venture must represent a genuinely new, innovative undertaking.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What is the Fund of Funds for Startups (FFS)?",
    a: "The Government of India established a ₹10,000 Crore Fund of Funds managed by SIDBI, which invests in SEBI-registered Alternative Investment Funds (AIFs) that channel capital directly to DPIIT-recognized startups.",
  },
  {
    q: "Can an existing company older than 5 years apply for DPIIT recognition?",
    a: "Yes, as long as the entity was incorporated less than 10 years ago and its annual turnover has never exceeded ₹100 Crore in any financial year since incorporation.",
  },
  {
    q: "How does Merrafilings ensure DPIIT application approval?",
    a: "Merrafilings startup specialists critically audit your business model, draft an institutional-grade innovation statement, refine your pitch deck to meet DPIIT criteria, and handle queries from scrutiny officers.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "LLP Registration",
  "Section 80-IAC Tax Exemption",
  "Trademark Registration",
  "Patent Filing & Fast-track",
  "GST Registration",
  "Import Export Code (IEC)",
  "GeM Portal Registration",
  "One Person Company",
  "LEI Code Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "Startup India registration online",
  "DPIIT recognition certificate apply",
  "Startup India 80-IAC tax holiday",
  "Startup India eligibility criteria",
  "Angel tax exemption Form 2",
  "Startup India patent 80% rebate",
  "Startup India portal login",
  "Startup India registration fees",
  "DPIIT startup recognition download",
  "Startup India self certification labor laws",
];

export default function StartupIndiaPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<string | null>("startup-c1-0");
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
              Get Your{" "}
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
                Startup India
              </span>{" "}
              Recognition Today
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Start your journey towards 3-year income tax holidays, 80% patent rebates, angel tax exemption, government tenders without prior turnover, and national DPIIT recognition for your venture.
            </p>
          </div>

          {/* Hero Content Glassmorphism Box */}
          <div className="w-full max-w-[72rem] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Key Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B] mb-2 sm:mb-3">
                    Apply for Startup India Registration Now
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Turn your innovative idea into a government-recognized high-growth venture with complete DPIIT recognition, tax relief, and IP protection support.
                  </p>
                </div>

                {/* 5 Bullet Features */}
                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">Official DPIIT Certificate of Recognition</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <BadgePercent className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">3-Year Income Tax Holiday Advisory (Section 80-IAC)</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">Angel Tax Exemption (Sec 56) &amp; SIDBI Fund of Funds</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-purple-200/50 shadow-xs flex items-center justify-center shrink-0">
                      <FileCheck className="w-4 h-4 text-[#6B4BFF]" />
                    </div>
                    <span className="text-[13.5px] font-light text-slate-700">80% Rebate on Patent &amp; 50% on Trademark Filings</span>
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
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our startup advisory team will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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
              Zero government fee on the Startup India portal. Transparent professional pricing for full application drafting &amp; advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: Basic Eligibility Assessment */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Startup India — Eligibility &amp; Review
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Audit your business structure, innovation questionnaire, and prepare mandatory documents...{" "}
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
                    Includes checking 10-year entity age, turnover thresholds under ₹100 Crore, innovation statement audit, authorization drafting, and Startup India portal profile registration.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹2,999
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Zero Govt fee on portal</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>DPIIT Eligibility &amp; Sector Verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Startup India Portal Account Creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Proof of Concept &amp; Pitch Deck Audit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Formal Letter of Authorization Drafting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated Startup Advisory Consultant</span>
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

            {/* Package 2: Standard DPIIT Recognition (Most Popular) */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-[0_16px_36px_rgba(0,176,116,0.12)] hover:shadow-[0_20px_42px_rgba(0,176,116,0.2)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00B074] to-[#059669] text-white text-[11px] font-semibold tracking-wider uppercase py-1 px-4 rounded-full shadow-xs">
                Most Popular
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  DPIIT Recognition Certificate
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  End-to-end filing on the DPIIT portal with professional innovation statement drafting and guaranteed certificate issuance...{" "}
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
                    Covers complete preparation of innovation narratives, scalability rationale, pitch deck optimization, submission on startupindia.gov.in, officer query resolution, and digital DPIIT Certificate generation.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹4,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | End-to-end filing &amp; query resolution</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Complete DPIIT Recognition Filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Professional Innovation Narrative Writing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Official DPIIT Certificate Issuance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Self-Certification under Labor Laws Guide</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>1-Year LEDGERS Accounting Cloud Free</span>
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

            {/* Package 3: Tax Exemption & Growth Suite */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  DPIIT + Tax Holiday Suite
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  DPIIT Recognition + Section 80-IAC 3-Year Income Tax Exemption and Angel Tax filing support...{" "}
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
                    Designed for startups raising capital. Includes DPIIT recognition, filing for 80-IAC 3-year tax exemption before the Inter-Ministerial Board (IMB), Section 56 angel tax relief, and GeM tender registration.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹9,999
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Complete recognition + 80-IAC package</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>DPIIT Recognition Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Section 80-IAC 3-Year Tax Exemption Dossier</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Angel Tax Exemption Form 2 Declaration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GeM Portal Government Tender Registration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Senior Chartered Accountant Consultation</span>
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
            <span className="text-[#00B074] font-normal">Startup India</span>
          </nav>

          {/* Grid Layout: Main Article on Left, Sidebar on Right (Full width, not squeezed in center) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden p-6 sm:p-10 border-t-2 border-t-emerald-400">
              <article className="max-w-none space-y-7">
                {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Startup India Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    India has built one of the world&apos;s most dynamic startup ecosystems, and the <strong className="font-medium text-slate-800">Startup India Registration</strong> scheme is at the heart of this transformation. Backed by the Government of India, this initiative empowers entrepreneurs with DPIIT recognition, tax relief, funding access, and regulatory support to build scalable, innovation-driven businesses across the country.
                  </p>
                </div>

                {/* Section 2: What is a Startup */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is a Startup as per Government Guidelines?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    As per the Government of India, a startup is an entity incorporated or registered in India that is less than 10 years old, has an annual turnover not exceeding ₹100 crore in any financial year, and is engaged in innovation, development, or improvement of products, processes, or services with a scalable business model.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    The business must not be formed by splitting up or reconstructing a business already in existence.
                  </p>
                </div>

                {/* Section 3: Eligible Entities Table */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Which Business Entities Can Apply for Startup India in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Government of India recognises only specific legal entity types under the Startup India program:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Entity Type</th>
                          <th className="py-3 px-4 font-normal">Governing Law</th>
                          <th className="py-3 px-4 font-normal">DPIIT Eligible</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Private Limited Company
                          </td>
                          <td className="py-3 px-4 text-slate-600">Companies Act, 2013</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Yes</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Limited Liability Partnership (LLP)
                          </td>
                          <td className="py-3 px-4 text-slate-600">LLP Act, 2008</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Yes</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Registered Partnership Firm
                          </td>
                          <td className="py-3 px-4 text-slate-600">Indian Partnership Act, 1932</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Yes</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Sole Proprietorship
                          </td>
                          <td className="py-3 px-4 text-slate-600">Not Applicable</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ No</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Public Limited Company
                          </td>
                          <td className="py-3 px-4 text-slate-600">Companies Act, 2013</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 4: Benefits of DPIIT Recognition */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Are the Benefits of Registering Under Startup India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Registering under the Startup India scheme unlocks a structured suite of benefits specifically designed to ease the financial and operational burden on early-stage businesses:
                  </p>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Tax Holiday:</strong> 3-year income tax exemption on 100% of profits under Section 80-IAC of the Income Tax Act</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Angel Tax Exemption:</strong> Relief from tax on share premium investments above Fair Market Value under Section 56(2)(viib)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>IP Rebates:</strong> 80% rebate on statutory patent filing fees and 50% rebate on trademark applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Compliance Relaxation:</strong> Self-certification under 9 labor laws and 3 environmental laws for up to 5 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Government Procurement:</strong> Exemption from prior turnover and experience criteria in public tenders on GeM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Fast-Track Exit:</strong> 90-day winding-up provisions under the Insolvency and Bankruptcy Code (IBC)</span>
                    </li>
                  </ul>
                </div>

                {/* Section 5: Documents Required */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Documents Are Needed for Startup India Registration?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Preparing a complete set of documents ensures an error-free, expedited DPIIT recognition process:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Document Category</th>
                          <th className="py-3 px-4 font-normal">Requirements</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Incorporation Certificate
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation (for Pvt Ltd / LLP) or Partnership Registration Certificate</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Tax Identification Proof
                          </td>
                          <td className="py-3 px-4 text-slate-600">Company / LLP / Firm PAN Card with registered office details</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Proof of Concept / Pitch Deck
                          </td>
                          <td className="py-3 px-4 text-slate-600">Presentation, Pitch Deck, Website URL, mobile app link, or video explaining innovation</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Authorization Letter
                          </td>
                          <td className="py-3 px-4 text-slate-600">Board Resolution or authorization letter authorizing the designated founder to file</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            IP Filings (If Any)
                          </td>
                          <td className="py-3 px-4 text-slate-600">Trademark application numbers or patent publication certificates (optional)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6: Step-by-Step Registration Process */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Step-by-Step Startup India Registration Process
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li><strong>Incorporate Business:</strong> Incorporate as Private Limited Company, LLP, or Registered Partnership Firm</li>
                    <li><strong>Portal Account Creation:</strong> Register profile on the official startupindia.gov.in national portal</li>
                    <li><strong>Fill Application:</strong> Enter entity details, incorporation date, sector, and comprehensive innovation description</li>
                    <li><strong>Upload Documents:</strong> Upload incorporation certificate, authorization letter, and pitch deck</li>
                    <li><strong>Self-Certification:</strong> Affirm compliance under prescribed DPIIT eligibility rules</li>
                    <li><strong>DPIIT Certificate Issuance:</strong> Upon scrutiny approval, receive your digital Certificate of Recognition</li>
                  </ol>
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
                      "Understanding DPIIT Recognition for Startups in India",
                      "Section 80-IAC Income Tax Holiday: Eligibility & Application",
                      "Angel Tax Exemption: How Startups File Form 2",
                      "80% Patent Rebate & Fast-Track Examination for Startups",
                      "How to Register as a Startup on GeM Portal",
                      "Difference Between MCA Registration and DPIIT Startup Recognition",
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

              {/* Startup India by State Directory */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-normal text-[14px] text-slate-800">Startup India by State</span>
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
                        <span>Startup India in {st}</span>
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
            Common questions about Startup India Registration and DPIIT Recognition Starting at ₹4,899 in India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Column 1 */}
            <div className="space-y-3.5">
              {(showMoreFaqs ? [...FAQ_COL_1, ...FAQ_EXTRA_COL_1] : FAQ_COL_1).map((faq, idx) => {
                const faqId = `startup-c1-${idx}`;
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
                const faqId = `startup-c2-${idx}`;
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
        serviceTitle="Startup India Registration & DPIIT Recognition"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
