"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ServiceSearchModal from "@/components/ServiceSearchModal";
import {
  User,
  FileText,
  ShieldCheck,
  Calendar,
  TrendingUp,
  Download,
  Star,
  Award,
  Users,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Building,
  PhoneCall,
  Check,
  ChevronUp,
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
    name: "iInvolve",
    logo: (
      <div className="flex items-center gap-1.5 font-sans select-none">
        <span className="font-serif font-black text-[15px] text-slate-800 tracking-tighter leading-none">M</span>
        <span className="text-[12.5px] font-medium text-slate-700 tracking-tight">iinvolve</span>
      </div>
    ),
  },
  {
    name: "duracool",
    logo: (
      <span className="text-[14.5px] font-semibold text-[#0284C7] tracking-tight font-sans select-none">duracool</span>
    ),
  },
  {
    name: "Joyalukkas",
    logo: (
      <div className="flex items-center gap-1.5 select-none">
        <div className="w-3.5 h-3.5 rounded-full bg-[#991B1B] flex items-center justify-center shrink-0">
          <span className="text-[8px] text-white font-bold leading-none">J</span>
        </div>
        <span className="text-[12.5px] font-serif font-bold text-[#991B1B] tracking-tight">Joyalukkas</span>
      </div>
    ),
  },
  {
    name: "YES BANK",
    logo: (
      <div className="flex items-center gap-1.5 select-none">
        <span className="text-[#DC2626] text-[13px] font-black leading-none">✓</span>
        <span className="text-[12px] font-bold text-[#0F4C81] tracking-wider font-sans">YES BANK</span>
      </div>
    ),
  },
  {
    name: "Flipkart",
    logo: (
      <div className="flex flex-col items-center leading-none select-none">
        <div className="flex items-center gap-0.5">
          <span className="text-[13px] font-bold text-[#2874F0] italic tracking-tight">Flipkart</span>
          <span className="text-[8px] text-[#F59E0B] font-bold">✦</span>
        </div>
        <span className="text-[7.5px] text-[#D97706] font-semibold tracking-wider">Explore Plus</span>
      </div>
    ),
  },
  {
    name: "cello",
    logo: (
      <span className="text-[15.5px] font-black text-slate-700 tracking-tight lowercase font-sans select-none">cello</span>
    ),
  },
  {
    name: "EaseMyTrip",
    logo: (
      <div className="flex items-center gap-1 font-sans select-none">
        <span className="text-[#0284C7] text-[12px] font-bold">✈</span>
        <span className="text-[12px] font-bold text-[#0284C7] tracking-tight">
          EaseMyTrip<span className="text-[9.5px] font-normal text-slate-500">.com</span>
        </span>
      </div>
    ),
  },
  {
    name: "ICICI Bank",
    logo: (
      <div className="flex items-center gap-1.5 font-sans select-none">
        <div className="w-3.5 h-3.5 rounded-full bg-[#C2410C] flex items-center justify-center shrink-0">
          <span className="text-[8.5px] text-white font-black italic leading-none">i</span>
        </div>
        <span className="text-[12px] font-bold text-[#7C2D12] tracking-tight">ICICI Bank</span>
      </div>
    ),
  },
  {
    name: "MILTON",
    logo: (
      <span className="text-[13px] font-black text-[#DC2626] tracking-widest uppercase font-sans select-none">MILTON</span>
    ),
  },
  {
    name: "DBS",
    logo: (
      <div className="flex items-center gap-1.5 font-sans select-none">
        <span className="text-[#DC2626] text-[11px] font-black">♦</span>
        <span className="text-[13px] font-bold text-slate-900 tracking-wider">DBS</span>
      </div>
    ),
  },
  {
    name: "Tirumala",
    logo: (
      <span className="text-[13px] font-semibold text-[#15803D] tracking-tight font-sans select-none">Tirumala</span>
    ),
  },
  {
    name: "Bombay Shaving Co",
    logo: (
      <span className="text-[10.5px] font-serif font-bold text-slate-800 text-center leading-tight select-none">Bombay Shaving Co</span>
    ),
  },
];

const FAQ_COL_1 = [
  {
    q: "What is Proprietorship Registration?",
    a: "Proprietorship Registration is the process of legally establishing a sole proprietorship business owned and managed by a single individual. It is one of the simplest and most common business structures in India, where the owner has complete control over the business and is personally liable for all its obligations.",
  },
  {
    q: "Does a Proprietorship Firm need a separate PAN card?",
    a: "No, a proprietorship firm does not need a separate PAN card. The proprietor's personal PAN card is used for all business-related financial and tax transactions. The firm and the owner are treated as the same legal entity under Indian law.",
  },
  {
    q: "Is GST Registration mandatory for a Proprietorship Firm?",
    a: "GST Registration is mandatory for a proprietorship firm if the annual turnover exceeds ₹40 lakhs for goods or ₹20 lakhs for services. It is also mandatory regardless of turnover if you sell goods or services across state borders or through e-commerce platforms like Amazon, Flipkart, or Meesho.",
  },
  {
    q: "Which businesses are best suited for a sole proprietorship?",
    a: "Sole proprietorship is best suited for retail shops, freelance professionals, consultants, digital creators, small traders, artisans, home-based businesses, and service providers who want complete autonomy with minimal compliance and low upfront capital.",
  },
  {
    q: "What are the limitations of a sole proprietorship?",
    a: "The main limitations include: unlimited personal liability where personal assets can be used to settle business debts, difficulty in raising equity funding or venture capital, limited growth scalability, and lack of perpetual succession (the business dissolves upon the owner's demise).",
  },
];

const FAQ_COL_2 = [
  {
    q: "How to register a proprietorship business in India?",
    a: "To register a proprietorship business in India, follow these steps: Obtain a PAN card in your name, Register for GST if your turnover exceeds the threshold or if selling inter-state/online, Apply for Udyam (MSME) Registration, Open a current bank account in the business name, and obtain any applicable local municipal trade licenses.",
  },
  {
    q: "Can a sole proprietor register for MSME/Udyam Registration?",
    a: "Yes, a sole proprietor can register for MSME/Udyam Registration. It provides multiple benefits such as priority sector bank lending, lower interest rates, government subsidies, and protection against delayed buyer payments under the MSMED Act.",
  },
  {
    q: "What are the common mistakes to avoid in a sole proprietorship?",
    a: "Common mistakes include: mixing personal and business funds in a savings account, ignoring GST or income tax return filing deadlines, failing to obtain Udyam or required local trade licenses, keeping messy accounting records, and overlooking the risk of unlimited personal liability.",
  },
  {
    q: "What are the two main advantages of a sole proprietorship?",
    a: "The two primary advantages are: (1) Easy and rapid formation with negligible compliance burden and low cost, and (2) Total autonomy and 100% profit retention without needing partner or board approvals.",
  },
  {
    q: "How do I start a business as a sole proprietor?",
    a: "To start a business as a sole proprietor, choose a unique business name, obtain an Aadhaar & PAN card, apply for Udyam MSME and GST registration online through MerraFilings, open a dedicated current bank account with your GST certificate, and obtain any local Shop & Establishment municipal permits.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What documents are required for Proprietorship Registration?",
    a: "The required documents include: PAN Card of the proprietor, Aadhaar Card, Address Proof of the business place (Electricity Bill / Rent Agreement + NOC), Bank Account proof (Cancelled Cheque or Bank Statement), and Passport-size photograph.",
  },
  {
    q: "What is the cost of Proprietorship Registration?",
    a: "Basic government registration like Udyam is free. Government GST registration is also free. Professional assistance packages on MerraFilings start from ₹1,499/month for end-to-end filing and dedicated accountant support.",
  },
  {
    q: "Can a foreign citizen start a sole proprietorship in India?",
    a: "No, foreign nationals or non-resident Indians (NRIs) cannot register a sole proprietorship in India without prior RBI/Government approvals. Foreign entrepreneurs are advised to incorporate a Private Limited Company or Wholly Owned Subsidiary instead.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How long does it take to register a Proprietorship Firm?",
    a: "Proprietorship setup usually takes 3 to 7 working days. Udyam MSME certificate is generated rapidly, while GST registration with Aadhaar biometric authentication typically takes 3 to 7 business days.",
  },
  {
    q: "Is a current bank account required for a Proprietorship Firm?",
    a: "Yes, opening a dedicated current bank account in the name of your proprietorship firm is highly recommended. It establishes professional credibility, helps keep business finances separate, and is required for commercial merchant payments.",
  },
  {
    q: "What tax and compliance requirements apply to a Proprietorship Firm?",
    a: "Income earned by a proprietorship is taxed under individual income tax slab rates of the proprietor. If registered for GST, monthly/quarterly GSTR-1 and GSTR-3B filings are mandatory, along with annual ITR filing (ITR-3 or ITR-4).",
  },
];

const RELATED_SERVICES_TAGS = [
  "Merrafilings Portal",
  "OPC Registration",
  "Partnership Firm Registration",
  "Private Limited Company",
  "Section 8 Company",
  "India Business Setup",
  "LLP Registration",
  "Virtual Office Address",
  "PLC to OPC",
  "Public Limited Company",
  "Producer Company",
  "Pitch Deck",
];

const POPULAR_SEARCHES_TAGS = [
  "Company Registration",
  "GST Registration",
  "LLP Registration",
  "Partnership",
  "Startup Registration",
  "Trademark Search",
  "Trademark Objection",
  "Trademark Registration",
  "Trademark Renewal",
  "GST Return Filing",
  "Partnership Tax Return Filing",
  "Proprietorship Compliance",
  "Check Company Name Availability",
  "Company Annual Filing",
  "LLP Winding Up",
  "MCA Services",
  "Tax Audit",
  "Virtual Office",
  "One Person Company",
  "Trade License",
  "Start Up India",
  "Legal Name Change",
  "RCMC Registration",
  "FSSAI License",
  "Emudhra Digital Signature Certificate",
  "Notary",
  "Trust Registration",
  "Udyam Registration",
  "Business Tax Return Filing",
  "Income Tax Filing",
  "Winding Up Of A Company",
  "Online CA Consultation",
  "Lawyer Consultation",
  "Trademark Registration Certificate",
  "Indian Subsidiary",
  "DIN Reactivation",
  "Shop Establishment Act Registration",
  "ISO Registration",
  "ESI Registration",
  "Professional Tax Registration",
  "Professional Tax Return Filing",
  "Company Name Change",
  "Barcode Registration",
  "TDS Return Filing",
  "Patent Registration",
  "Copyright Registration",
  "LLP Annual Filing",
  "HR and Payroll Service",
];

const REGISTRATION_REQUIREMENTS = [
  {
    type: "GST Registration",
    isLink: true,
    href: "#pricing",
    requirement: "Mandatory for businesses with turnover above threshold",
    when: "Annual turnover exceeds specified limit",
  },
  {
    type: "Udyam Registration",
    isLink: false,
    requirement: "Government recognition for small businesses",
    when: "Manufacturing or service enterprises",
  },
  {
    type: "Professional License",
    isLink: false,
    requirement: "Authority to practice specific profession",
    when: "Service-based professional businesses",
  },
  {
    type: "Shop & Establishment",
    isLink: true,
    href: "#pricing",
    requirement: "Local authority approval for retail operations",
    when: "Fixed location retail or service business",
  },
  {
    type: "Import-Export Code",
    isLink: true,
    href: "#pricing",
    requirement: "For international trade operations",
    when: "Businesses involving cross-border transactions",
  },
  {
    type: "Environmental Clearance",
    isLink: false,
    requirement: "Approval for environmentally sensitive activities",
    when: "Manufacturing with environmental impact",
  },
  {
    type: "Food Safety License",
    isLink: true,
    href: "#pricing",
    requirement: "FSSAI registration for food businesses",
    when: "Food production, processing, or retail",
  },
];

export default function ProprietorshipPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<string | null>("c1-2");
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
                Proprietorship
              </span>{" "}
              <span className="font-light text-[#12023B]">Registration in India</span>
            </h1>
            <p className="mt-3 text-xs sm:text-sm md:text-base font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Register your Proprietorship firm in India quickly and legally. Get GST, Udyam, PAN support and complete sole proprietorship registration online with expert assistance.
            </p>

            {/* UPI Autopay Banner */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#155EEF] bg-white shadow-xs text-xs sm:text-sm text-slate-800">
              <span className="font-medium text-[#155EEF] flex items-center gap-1">
                <span className="text-[11px] tracking-wide bg-[#155EEF]/10 text-[#155EEF] px-1.5 py-0.5 rounded font-mono font-semibold">UPI</span>
                AUTOPAY
              </span>
              <span className="text-slate-600 font-light">Start and manage a Proprietorship at just</span>
              <span className="font-medium text-slate-900">₹1,499</span>
              <span className="text-slate-500 font-light">/month</span>
              <a
                href="#pricing"
                className="ml-1 text-[#155EEF] font-medium underline underline-offset-2 hover:text-[#1849A9]"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Hero Two-Column Card Floating Over Canvas */}
          <div className="mt-8 max-w-[1100px] mx-auto bg-white rounded-3xl md:rounded-[32px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.07)] p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Benefits & Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B]">
                    Start Your Proprietorship
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm font-light text-slate-600 leading-relaxed">
                    Proprietorship registration in India is the easiest way to start a single-owner business, and we provide complete proprietorship registration services including GST, Udyam, and bank account setup for a fast and compliant business launch.
                  </p>
                </div>

                <ul className="space-y-3.5 pt-1">
                  <li className="flex items-center gap-3.5 text-xs sm:text-sm font-normal text-slate-700 group/item hover:translate-x-1 transition-transform duration-200 cursor-default">
                    <div className="w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(107,75,255,0.12)] border border-purple-100/70 shrink-0 group-hover/item:scale-110 group-hover/item:shadow-[0_4px_12px_rgba(107,75,255,0.18)] transition-all duration-200">
                      <svg className="w-4 h-4 text-[#6B4BFF]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-5.5 8a5.5 5.5 0 0111 0H4.5z" />
                      </svg>
                    </div>
                    <span>Expert Registration Consultation</span>
                  </li>

                  <li className="flex items-center gap-3.5 text-xs sm:text-sm font-normal text-slate-700 group/item hover:translate-x-1 transition-transform duration-200 cursor-default">
                    <div className="w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(107,75,255,0.12)] border border-purple-100/70 shrink-0 group-hover/item:scale-110 group-hover/item:shadow-[0_4px_12px_rgba(107,75,255,0.18)] transition-all duration-200">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 3a2 2 0 012-2h5.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a2 2 0 01-2 2H6a2 2 0 01-2-2V3z" fill="#6B4BFF" />
                        <path d="M7 10h6M7 13h4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span>End-to-End Documentation Support</span>
                  </li>

                  <li className="flex items-center gap-3.5 text-xs sm:text-sm font-normal text-slate-700 group/item hover:translate-x-1 transition-transform duration-200 cursor-default">
                    <div className="w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(107,75,255,0.12)] border border-purple-100/70 shrink-0 group-hover/item:scale-110 group-hover/item:shadow-[0_4px_12px_rgba(107,75,255,0.18)] transition-all duration-200">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                        <path d="M10 1.5l7 3.2v5.1c0 4.6-3 8.9-7 10.2-4-1.3-7-5.6-7-10.2V4.7l7-3.2z" fill="#6B4BFF" />
                        <path d="M7 10l2 2 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Dedicated Compliance Expert</span>
                  </li>

                  <li className="flex items-center gap-3.5 text-xs sm:text-sm font-normal text-slate-700 group/item hover:translate-x-1 transition-transform duration-200 cursor-default">
                    <div className="w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(107,75,255,0.12)] border border-purple-100/70 shrink-0 group-hover/item:scale-110 group-hover/item:shadow-[0_4px_12px_rgba(107,75,255,0.18)] transition-all duration-200">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1z" fill="#6B4BFF" />
                        <path d="M5 8.5h10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span>GST Registration & Monthly Filing Support</span>
                  </li>

                  <li className="flex items-center gap-3.5 text-xs sm:text-sm font-normal text-slate-700 group/item hover:translate-x-1 transition-transform duration-200 cursor-default">
                    <div className="w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(107,75,255,0.12)] border border-purple-100/70 shrink-0 group-hover/item:scale-110 group-hover/item:shadow-[0_4px_12px_rgba(107,75,255,0.18)] transition-all duration-200">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="#6B4BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 13.5l4.5-4.5 3 3 6.5-6.5M13 5.5h4v4" />
                      </svg>
                    </div>
                    <span>Income Tax Return Filing Assistance</span>
                  </li>

                  <li className="flex items-center gap-3.5 text-xs sm:text-sm group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(107,75,255,0.12)] border border-purple-100/70 shrink-0 group-hover/item:scale-110 group-hover/item:shadow-[0_4px_12px_rgba(107,75,255,0.18)] transition-all duration-200">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 3a2 2 0 012-2h5.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a2 2 0 01-2 2H6a2 2 0 01-2-2V3z" fill="#6B4BFF" />
                        <path d="M10 7.5v6m0 0l-2-2m2 2l2-2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <a
                      href="#documents"
                      className="text-[#6B4BFF] font-medium underline underline-offset-4 decoration-[#6B4BFF]/50 hover:decoration-[#6B4BFF] hover:text-[#5338D9] transition-all"
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
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our senior proprietorship compliance advisor will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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
              {/* Card 1: 4.3 Verified Reviews */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(245,158,11,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E9] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <svg className="w-5 h-5 text-[#F04438] transition-colors" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    <span>4.3</span>
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

      {/* Our Clients Section (Matching exact Merrafilings Mini Cards Carousel in Reference Screenshot) */}
      <section className="py-9 sm:py-11 bg-white border-b border-[#E4E7EC]">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Gradient Line */}
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-[22px] font-normal text-slate-900 tracking-tight">
              Our Clients
            </h3>
            <div className="w-11 h-[2px] bg-gradient-to-r from-[#7052FF] to-[#E966DF] rounded-full mx-auto mt-1.5" />
          </div>

          {/* Mini Cards Single-Row Track with Arrow Controls */}
          <div className="relative flex items-center gap-2.5 sm:gap-3">
            {/* Scroll Left Button */}
            <button
              type="button"
              onClick={() => scrollClients("left")}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all shrink-0 cursor-pointer hidden md:flex"
              aria-label="Scroll clients left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Mini Cards Container */}
            <div
              ref={clientScrollRef}
              className="flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto scroll-smooth py-1 px-0.5 flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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

            {/* Scroll Right Button (Matching Reference Screenshot) */}
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

      {/* Pricing Section (Matching exact Merrafilings design in Screenshot 1) */}
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
              Transparent pricing and full support from incorporation to compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: GST Registration + Monthly Filing */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  GST Registration + Monthly Filing
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Get complete GST registration and monthly filing services, ensuring compliance and smooth processing of GSTR-1 and GSTR-...{" "}
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
                    Includes end-to-end documentation, GST officer query response, digital signature integration, and monthly sales purchase reconciliation.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹1,499
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GST Registration Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GST Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated Accountant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-1 Monthly Filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-3B Monthly Filing</span>
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

            {/* Package 2: Proprietorship - GST */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Proprietorship - GST
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  For proprietorship businesses looking for complete GST compliance, get GST registration, UDYAM registration, 12 months o...{" "}
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
                    Includes GSTIN registration, Udyam MSME certification, 12 months of GSTR-1 & 3B compliance, and LEDGERS software subscription.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹7,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GST Registration for Proprietorship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>UDYAM Registration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-1 Filing – 12 Months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-3B Filing – 12 Months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>LEDGERS GST Software Access – 12 Months</span>
                    </li>
                  </ul>
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

            {/* Package 3: 1 Year GST Filing + ITR */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  1 Year GST Filing + ITR
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Merrafilings seamlessly provides customized accounting services for businesses with turnover up to 40 lakhs, ensuring co...{" "}
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
                    Full financial year accounting coverage: GST return filing, year-end Profit & Loss statement, Balance Sheet, and Income Tax filing.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹19,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated Accountant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-1 Filing – 12 Months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-3B Filing – 12 Months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Income Tax Filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Financial Statements</span>
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
                    +1 more
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

      {/* Comprehensive Guide Section (Matching exact Merrafilings reference design in Screenshot) */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[13px] font-light text-slate-500 mb-5 flex-wrap">
            <a href="/" className="hover:text-[#155EEF] transition-colors">
              Merrafilings
            </a>
            <span className="text-slate-300">/</span>
            <a href="#startup" className="hover:text-[#155EEF] transition-colors">
              Business Registration
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-[#00B074] font-normal">Proprietorship</span>
          </nav>

          {/* Grid Layout: Main Article on Left, Sidebar on Right (Full width, not squeezed in center) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden p-6 sm:p-10 border-t-2 border-t-emerald-400">
              <article className="max-w-none space-y-7">
                {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Solo Proprietorship Firm Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Starting a business as a <strong className="font-normal text-slate-900">sole proprietor</strong> offers simplicity and complete control over your individual business registration. Whether you are an entrepreneur looking to establish your presence or planning to expand your business ventures, understanding the nuances of <a href="#pricing" className="text-[#155EEF] hover:underline font-normal">proprietorship registration online</a> is crucial. This comprehensive guide covers everything you need to know about registering a sole proprietorship in India, from eligibility criteria to the final registration process. Our experts at <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a> provide seamless solutions for self-employed registration and business establishment with affordable fees.
                  </p>
                </div>

                {/* Section 2: What is a Sole Proprietorship */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    What is a Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    A <a href="#overview" className="text-[#00B074] hover:underline font-normal">sole proprietorship</a> is the simplest form of business structure where an individual operates a business under their own name or a registered business name. The proprietor has complete authority over all business decisions and is personally responsible for all business liabilities. This one-person business model requires minimal formalities compared to other business structures, making it an attractive option for entrepreneurs.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    Key Characteristics of a Sole Proprietorship
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-light text-slate-600">
                    {[
                      "Single individual ownership and management",
                      "Unlimited personal liability",
                      "Simple registration and compliance requirements",
                      "Direct access to all business profits",
                      "Flexible operational structure",
                      "Quick decision-making process",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                          <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3: Key Features & Advantages */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Key Features of a Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Understanding the distinctive features of a sole proprietorship helps entrepreneurs make informed decisions. A proprietor registration provides numerous operational advantages that appeal to independent business owners. The proprietor maintains complete autonomy in business operations, which enables rapid adaptation to market changes. Unlike partnerships or companies, a sole proprietorship does not require approval from multiple stakeholders for critical business decisions.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    Operational Advantages
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-light text-slate-600">
                    {[
                      "Complete control over business operations and strategy",
                      "Simplified decision-making without board approvals",
                      "Direct profit retention without profit sharing obligations",
                      "Minimal compliance and reporting requirements",
                      "Lower registration and annual maintenance costs",
                      "Flexible working hours and operational schedule",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                          <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 4: Is Registration Mandatory */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Is Proprietorship Registration Mandatory in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    The question of whether proprietorship registration is mandatory depends on various business factors and regulatory requirements. While a sole proprietorship does not have a single dedicated governing act, obtaining statutory registrations (GST, Udyam MSME, and Local Shop Act) makes your enterprise legally compliant.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    When Registration Becomes Mandatory
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-light text-slate-600">
                    {[
                      "Manufacturing or trading businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for services)",
                      "Professional services requiring regulatory licensing and invoicing",
                      "Opening a current bank account in the business firm's name",
                      "Applying for collateral-free MSME bank loans and credit facilities",
                      "Operating on e-commerce platforms (Amazon, Flipkart, GeM, Meesho)",
                      "Employing staff requiring PF / ESI payroll compliance",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                          <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 5: Documents Required */}
                <div id="documents" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Documents Required for Sole Proprietorship Registration in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Gathering the required documents streamlines the proprietorship registration process significantly. Your Aadhaar card serves as primary identity and residential proof for online proprietorship registration. A PAN certificate issued by the income tax department is mandatory for all business operations.
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Aadhaar Card", desc: "Identity & residential address proof" },
                      { title: "PAN Card", desc: "Proprietor's Permanent Account Number" },
                      { title: "Electricity / Utility Bill", desc: "Proof of registered business address (< 2 months old)" },
                      { title: "Rent Agreement & NOC", desc: "If operating from rented commercial or residential premises" },
                      { title: "Bank Account Proof", desc: "Cancelled cheque or latest bank statement" },
                      { title: "Passport Photographs", desc: "Recent color photographs of the proprietor" },
                    ].map((doc, idx) => (
                      <div key={idx} className="p-3 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                        <p className="font-normal text-[13.5px] text-[#111827]">{doc.title}</p>
                        <p className="text-[12px] font-light text-slate-500 mt-0.5">{doc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: Additional Registration Requirements Table (Exact Match to User Reference Screenshot) */}
                <div className="border-t border-slate-100 pt-6">
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    annual turnover exceeds specified thresholds, enabling you to collect and remit goods and services tax. <a href="#pricing" className="text-[#00A86B] underline underline-offset-2 hover:text-[#008f5a] font-normal">Udyam registration</a> provides government recognition for micro, small, and medium enterprises, unlocking access to various subsidies and schemes.
                  </p>

                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-4">
                    Additional Registration Requirements by Business Type
                  </h2>

                  {/* Table with green top accent border and interactive hover effects */}
                  <div className="overflow-x-auto rounded-lg border border-slate-200/90 shadow-2xs">
                    <table className="w-full border-collapse text-[13px] sm:text-[13.5px] border-t-[3px] border-t-[#00A86B]">
                      <thead>
                        <tr className="bg-[#F8FAFC] border-b border-slate-200/90 text-left">
                          <th className="py-3 px-4 font-semibold text-slate-800 border-r border-slate-200/90 w-[28%] sm:w-[30%]">
                            Registration Type
                          </th>
                          <th className="py-3 px-4 font-semibold text-slate-800 border-r border-slate-200/90 w-[38%]">
                            Requirement
                          </th>
                          <th className="py-3 px-4 font-semibold text-slate-800 w-[34%] sm:w-[32%]">
                            When Applicable
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {REGISTRATION_REQUIREMENTS.map((row, idx) => (
                          <tr
                            key={idx}
                            className="group hover:bg-[#EDF8F3] transition-colors duration-150 border-b border-slate-200/80 last:border-b-0 cursor-default"
                          >
                            <td className="relative py-3.5 px-4 border-r border-slate-200/80">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.isLink ? (
                                <a
                                  href={row.href}
                                  className="text-[#00A86B] underline underline-offset-2 hover:text-[#008f5a] font-normal transition-colors"
                                >
                                  {row.type}
                                </a>
                              ) : (
                                <span className="font-normal text-slate-800">
                                  {row.type}
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 border-r border-slate-200/80 font-light text-slate-600">
                              {row.requirement}
                            </td>
                            <td className="py-3.5 px-4 font-light text-slate-600">
                              {row.when}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Advantages of a Sole Proprietorship in India (Screenshot reference section) */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Advantages of a Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Operating as a sole proprietor offers numerous advantages that make this business structure attractive for entrepreneurs. Complete autonomy allows you to make all business decisions independently without consulting partners or board members. <a href="#pricing" className="text-[#00A86B] underline underline-offset-2 hover:text-[#008f5a] font-normal">Sole proprietorship advantages</a> include simplified business structure with minimal legal formalities and compliance requirements. Tax efficiency emerges through various deduction options available to self-employed professionals and business owners.
                  </p>
                </div>

                {/* Section 7: Step-by-Step Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    How to Register a Sole Proprietorship Firm in India
                  </h2>
                  <ol className="mt-4 space-y-3 list-decimal list-inside text-[13.5px] font-light text-slate-600 leading-relaxed">
                    <li className="pl-1"><strong className="font-normal text-slate-900">Select a Unique Business Name:</strong> Pick a distinctive trading name that reflects your activity and doesn&apos;t infringe existing trademarks.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Document Verification:</strong> Organize PAN, Aadhaar, bank statements, and business address electricity bills.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Apply for Udyam MSME Registration:</strong> Register on the government portal using Aadhaar OTP verification to obtain your official MSME certificate.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">File for GSTIN:</strong> Submit Form GST REG-01 with business place photos and biometric Aadhaar authentication.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Open Current Account:</strong> Present the GST Certificate, Udyam certificate, and PAN to open a dedicated firm account with any leading bank.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Start Invoicing & Compliance:</strong> Generate GST-compliant invoices using LEDGERS and submit monthly GSTR-1/3B filings.</li>
                  </ol>
                </div>

                {/* Section 8: Government Schemes */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Government Schemes for Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    The Indian government offers multiple flagship credit and subsidy schemes specifically crafted for sole proprietor micro-enterprises:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">Pradhan Mantri MUDRA Yojana</h4>
                      <p className="text-[12px] font-light text-slate-500 mt-1">Collateral-free business loans up to ₹10 Lakhs under Shishu, Kishore, and Tarun schemes for working capital.</p>
                    </div>
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">Credit Guarantee Fund (CGTMSE)</h4>
                      <p className="text-[12px] font-light text-slate-500 mt-1">Guarantees collateral-free credit facilities up to ₹2 Crore for new and existing micro-enterprises.</p>
                    </div>
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">Stand-Up India Scheme</h4>
                      <p className="text-[12px] font-light text-slate-500 mt-1">Bank loans between ₹10 Lakhs and ₹1 Crore for greenfield enterprises set up by SC/ST or women proprietors.</p>
                    </div>
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">PMEGP Subsidy</h4>
                      <p className="text-[12px] font-light text-slate-500 mt-1">Government subsidy ranging from 15% to 35% on project cost for setting up new micro manufacturing and service units.</p>
                    </div>
                  </div>
                </div>

                {/* Section 9: Why Choose MerraFilings */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Why Choose MerraFilings for Proprietorship Registration in India?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    MerraFilings brings specialized expertise in guiding proprietors through the complete registration process with precision and efficiency. Our experienced team understands the nuances of proprietorship registration across all Indian states, providing personalized end-to-end guidance from document drafting to GST and bank setup.
                  </p>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    With zero hidden costs, instant transparent pricing, dedicated compliance managers, and our integrated LEDGERS accounting software, thousands of sole proprietors across India trust us every month.
                  </p>
                </div>
              </article>
            </div>

            {/* Right Sticky Sidebar (Matching exact Merrafilings widgets in Screenshot) */}
            <div className="space-y-5 lg:sticky lg:top-24">
              {/* Consult Experts Pill Card with 3 Avatars */}
              <div
                onClick={() => setContactOpen(true)}
                className="bg-white rounded-xl border border-slate-200/80 p-3 px-4 shadow-2xs hover:shadow-xs transition-shadow flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
                      alt="Consultant"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                      alt="Consultant"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
                      alt="Consultant"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
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
                      "Sole Proprietorship Definition and Features in India",
                      "Comprehensive Guide to Proprietorship Registration",
                      "How to Start a Proprietorship: A Step-by-Step Guide",
                      "Understanding Proprietorship: A Beginner's Guide",
                      "How to Register a Proprietorship Company in 2026",
                      "Sole Proprietorship Firm Registration Guide",
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

              {/* Proprietorship in States Directory */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-normal text-[14px] text-slate-800">Proprietorship by State</span>
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
                        <span>Proprietorship in {st}</span>
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
            Common questions about Solo Proprietorship Company Registration Online in India.
          </p>

          {/* 2-Column FAQ Grid matching reference screenshot */}
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

          {/* Related Services - Business Registration Card (Matching Screenshot) */}
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

          {/* Popular Searches Card (Matching Screenshot) */}
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

      {/* Floating Live Chat Button (Screenshot 1, 2, 3) */}
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
        serviceTitle="Proprietorship Registration"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
