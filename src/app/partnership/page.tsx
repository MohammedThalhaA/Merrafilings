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
    q: "What is the registration of a partnership?",
    a: "Registration of partnership in India is legally formalizing a partnership firm by filing an application with the Registrar of Firms under the Indian Partnership Act, 1932. The registration process involves providing details about the partnership firm, such as its name, location, partners' details, and the terms and conditions of the partnership agreement.",
  },
  {
    q: "Is it compulsory to register a partnership?",
    a: "Under the Indian Partnership Act, 1932, registering a partnership firm is optional but highly recommended. An unregistered firm cannot sue third parties in court to enforce contractual rights, nor can it claim legal set-offs. Registering the firm with the Registrar of Firms (ROF) provides legal recognition and safeguards the rights of all partners.",
  },
  {
    q: "Who is eligible for partnership?",
    a: "Any person of sound mind who is not a minor, not an undischarged insolvent, and not disqualified from contracting by law can become a partner. In addition, registered partnership firms, companies (if permitted by MOA), and the Karta of an HUF (in individual capacity) are also legally eligible to be partners.",
  },
  {
    q: "How much capital is required to start a Partnership?",
    a: "A Partnership firm can be started with any amount of capital. There is no minimum capital requirement prescribed under the Indian Partnership Act, 1932. Partners can contribute cash, property, or specialized skills as defined in the Partnership Deed.",
  },
  {
    q: "What are the advantages of registering a Partnership firm?",
    a: "A registered partnership firm enjoys full legal standing to file suits in court against third parties or between partners to enforce contractual rights. It can claim legal set-offs exceeding ₹100 in court disputes, easily open bank accounts, qualify for government tenders, and obtain commercial loans.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Is a partnership firm a separate legal entity?",
    a: "No. In the eyes of the law, a partnership firm is not a separate legal entity distinct from its partners. Partners have unlimited liability and are jointly and severally responsible for all debts, losses, and obligations incurred by the firm.",
  },
  {
    q: "Is it compulsory for partnership firms to file income tax returns?",
    a: "Yes. Every partnership firm in India must mandatorily file its annual Income Tax Return (ITR-5), irrespective of whether it made a profit or incurred a loss during the financial year. Partnership firm net profits are taxed at a flat rate of 30% plus applicable surcharge and cess.",
  },
  {
    q: "Can a person transfer their share in a partnership firm?",
    a: "There are strict statutory restrictions on the transfer of ownership interest in a partnership firm. A partner cannot transfer or assign their partnership share or interest to an outsider without the unanimous consent of all other partners.",
  },
  {
    q: "What is a Partnership deed?",
    a: "A Partnership deed is a legally binding agreement executed between partners on non-judicial stamp paper. It details the firm's name, registered address, nature of business, capital contributions, profit-and-loss sharing ratio, management duties, partner remuneration, and dispute resolution mechanisms.",
  },
  {
    q: "Why is a Partnership deed necessary?",
    a: "The Partnership deed establishes clear governance rules between partners and serves as conclusive proof of ownership and terms. It is the primary document required for obtaining the firm's PAN card, opening a commercial current bank account, securing GST registration, and registering with the Registrar of Firms.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Is audit required for a Partnership firm?",
    a: "Statutory company audits are not mandatory for ordinary partnership firms. However, a Tax Audit under Section 44AB of the Income Tax Act becomes compulsory if the firm's annual turnover exceeds ₹1 crore (for business) or ₹50 lakhs (for professions).",
  },
  {
    q: "Can I convert my Partnership firm into a Company / LLP?",
    a: "Yes, an existing partnership firm can be converted into a Limited Liability Partnership (LLP) or a Private Limited Company under Part I of Chapter XXI of the Companies Act, 2013, to achieve limited liability and separate legal identity.",
  },
  {
    q: "How to open a bank account for a Partnership firm?",
    a: "To open a current bank account in the partnership firm's name, submit a notarized or registered Partnership Deed, the firm's PAN card, address proof of the registered place of business, and KYC documents (PAN & Aadhaar) of all partners.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How many people are required to start a Partnership firm?",
    a: "A minimum of 2 partners are required to establish a partnership firm. Under the Companies Act, 2013, the maximum number of partners permitted in an ordinary partnership firm is 50.",
  },
  {
    q: "Who can be a Partner in an Indian Partnership firm?",
    a: "Any Indian citizen residing in India who is an adult and legally competent to contract can become a partner. Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) can invest in Indian partnerships only under specific RBI and FDI regulatory approvals.",
  },
  {
    q: "What documents are required to register a Partnership firm?",
    a: "Required documents include PAN cards and Aadhaar/Passport of all partners, passport-size photographs, electricity bill or utility bill of the business address, Rent Agreement with owner NOC, and a duly notarized Partnership Deed on state stamp paper.",
  },
];

const RELATED_SERVICES_TAGS = [
  "IndiaFilings Signup",
  "Partnership Deed Drafting",
  "LLP Registration",
  "Sole Proprietorship",
  "Private Limited Company",
  "One Person Company",
  "GST Registration",
  "Firm PAN Card",
  "MSME Udyam Registration",
  "Firm Bank Account",
  "Partnership Dissolution Deed",
  "Virtual Office Address",
];

const POPULAR_SEARCHES_TAGS = [
  "Partnership Firm Registration",
  "Partnership Deed Online",
  "Form 1 Registrar of Firms",
  "Partnership Act 1932",
  "Two Person Business India",
  "General Partnership India",
  "Partnership vs LLP",
  "Partnership vs Pvt Ltd",
  "Partnership Firm Tax Rate 30%",
  "ITR-5 Partnership Return",
  "Notarized Partnership Deed",
  "Stamp Duty on Partnership Deed",
  "Firm PAN Card Online",
  "GST Registration for Partnership",
  "MSME Registration for Partnership",
  "Partnership at Will",
  "Particular Partnership",
  "Partnership Firm Current Account",
  "Online CA Consultation",
  "Trademark Registration for Firm",
  "Startup Registration India",
  "ROC Annual Compliance",
  "Tax Audit Section 44AB",
  "Company Registration",
];

const PARTNERSHIP_VS_OTHER_COMPARISON = [
  {
    feature: "Minimum Members",
    partnership: "2 Partners",
    llp: "2 Partners",
    pvtLtd: "2 Shareholders / Directors",
    proprietor: "1 Proprietor",
  },
  {
    feature: "Legal Entity",
    partnership: "No (Same as partners)",
    llp: "Yes (Distinct Corporate Entity)",
    pvtLtd: "Yes (Distinct Corporate Entity)",
    proprietor: "No (Same as owner)",
  },
  {
    feature: "Liability of Owners",
    partnership: "Unlimited (Joint & Several)",
    llp: "Limited to Capital Contribution",
    pvtLtd: "Limited to Share Capital",
    proprietor: "Unlimited Personal Liability",
  },
  {
    feature: "Statutory Registration",
    partnership: "Optional with State ROF",
    llp: "Mandatory with MCA",
    pvtLtd: "Mandatory with MCA",
    proprietor: "Optional (GST / Udyam)",
  },
  {
    feature: "Compliance Burden",
    partnership: "Minimal (ITR-5 & GST)",
    llp: "Moderate (Form 8 & Form 11)",
    pvtLtd: "High (AOC-4, MGT-7, Audit)",
    proprietor: "Minimal (Individual ITR)",
  },
  {
    feature: "Income Tax Rate",
    partnership: "Flat 30% (+ cess)",
    llp: "Flat 30% (+ cess)",
    pvtLtd: "22% – 25% (+ cess)",
    proprietor: "Individual Slab Rates",
  },
];

const PARTNERSHIP_TYPES_TABLE = [
  {
    type: "General Partnership (GP)",
    liability: "Unlimited",
    duration: "Ongoing",
    management: "All Partners",
    bestFor: "Small Businesses & Retail Traders",
  },
  {
    type: "Limited Liability Partnership (LLP)",
    liability: "Limited",
    duration: "Ongoing (Perpetual)",
    management: "Designated Partners",
    bestFor: "Professionals, Consultants & Startups",
  },
  {
    type: "Partnership at Will",
    liability: "Unlimited",
    duration: "No Fixed Term (Notice Based)",
    management: "All Partners",
    bestFor: "Flexible Small Ventures & Family Trades",
  },
  {
    type: "Particular Partnership",
    liability: "Unlimited",
    duration: "Project-Specific Duration",
    management: "All Partners",
    bestFor: "Joint Ventures & Construction Projects",
  },
  {
    type: "Limited Partnership (LP)",
    liability: "Mixed (General + Limited)",
    duration: "Ongoing",
    management: "General Partners Only",
    bestFor: "Real Estate & Private Investment Funds",
  },
];

const REGISTERED_VS_UNREGISTERED_TABLE = [
  {
    feature: "Legal Recognition",
    registered: "Full recognition under Partnership Act, 1932",
    unregistered: "Limited legal status",
  },
  {
    feature: "Right to File Lawsuits",
    registered: "Can sue third parties in court for contract breach",
    unregistered: "Cannot sue third parties in court",
  },
  {
    feature: "Court Set-Off Claims",
    registered: "Allowed to claim set-offs in dispute proceedings",
    unregistered: "Not allowed in court disputes",
  },
  {
    feature: "Bank Loan & Credit Access",
    registered: "Easy institutional loan approvals",
    unregistered: "Strict and cumbersome loan processing",
  },
  {
    feature: "Government Tenders",
    registered: "Eligible for government tenders & institutional contracts",
    unregistered: "Not eligible for public sector tenders",
  },
  {
    feature: "Market Credibility",
    registered: "High trust with vendors, banks, and clients",
    unregistered: "Low commercial credibility",
  },
];

export default function PartnershipPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<string | null>("c1-0");
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

      {/* Hero Section with IndiaFilings Curved Radial Mesh Background */}
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
                Partnership Company
              </span>{" "}
              Registration Online in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Start your Partnership Firm Registration in India today with IndiaFilings. Expert help on partnership deed drafting, PAN card, GST registration, MSME, and certificate of registration.
            </p>
          </div>

          {/* Hero Content Glassmorphism Box */}
          <div className="w-full max-w-[72rem] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/70 bg-white/90 shadow-xl sm:shadow-2xl shadow-slate-900/10 backdrop-blur p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Key Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#12023B] mb-2 sm:mb-3">
                    Start Your Partnership Firm
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Partnership Firm registration under the Indian Partnership Act, 1932. Complete legal support including deed drafting, notarization, PAN, GST, and Registrar of Firms (ROF) certificate.
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
                    <span className="text-[13.5px] font-light text-slate-700">Partnership Deed Drafting</span>
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
                    <span className="text-[13.5px] font-light text-slate-700">PAN Card &amp; GST Registration</span>
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
                    <span className="text-[13.5px] font-light text-slate-700">Income Tax &amp; GST Return Filing</span>
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
                    <span className="text-[13.5px] font-light text-slate-700">Dedicated Compliance Expert</span>
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
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our senior partnership firm legal advisor will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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

      {/* Pricing Section (Matching exact IndiaFilings design with Green Hover Border & Dynamic Button) */}
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
              Transparent pricing and full support from partnership deed drafting to state registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: Partnership Deed Drafting */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Partnership Deed Drafting
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Get your Partnership Deed drafted and vetted by senior legal experts as per the Indian Partnership Act, 1932...{" "}
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
                    Includes custom drafting of clauses for profit/loss ratio, partner remuneration, capital interest, dispute resolution, and state-wise non-judicial stamp duty guidance.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹2,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Stamp duty extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Consultation with Legal Expert</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Custom Partnership Deed Drafting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Profit Sharing &amp; Capital Structuring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Notarization &amp; Stamp Paper Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Partnership Firm PAN Application</span>
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

            {/* Package 2: Partnership Firm - Registration + GST */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Partnership Firm - Registration + GST
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Complete legal registration of your Partnership firm with the Registrar of Firms (ROF), along with firm PAN and GST...{" "}
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
                    Includes Deed drafting, Form 1 filing with Registrar of Firms, Registration Certificate, firm PAN allotment, and GST registration with biometric verification.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹6,899
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
                      <span>Partnership Deed Drafting &amp; Notarization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Form 1 Application to Registrar (ROF)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Partnership Registration Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Firm PAN &amp; TAN Allotment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GST Registration for Firm</span>
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

            {/* Package 3: Partnership Firm - Registration & Compliance */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Partnership - Registration &amp; Compliance
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Full year accounting, tax filing, and compliance coverage for your registered partnership firm. Includes dedicated acc...{" "}
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
                    End-to-end corporate care: ROF registration, PAN, GST, 12 months GSTR-1 &amp; 3B filing, LEDGERS accounting software, and ITR-5 income tax return filing.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹14,899
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
                      <span>Full Partnership Registration + Deed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>12 Months Accounting on LEDGERS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>GSTR-1 &amp; GSTR-3B Filings (12 Months)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Income Tax Return (ITR-5) Filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Annual Financial Statements (P&amp;L)</span>
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

      {/* Comprehensive Guide Section (Matching exact IndiaFilings reference design) */}
      <section id="overview-section" className="py-10 sm:py-12 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[13px] font-light text-slate-500 mb-5 flex-wrap">
            <a href="/" className="hover:text-[#155EEF] transition-colors">
              IndiaFilings
            </a>
            <span className="text-slate-300">/</span>
            <a href="/startup" className="hover:text-[#155EEF] transition-colors">
              Business Registration
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-[#00B074] font-normal">Partnership Firm</span>
          </nav>

          {/* Grid Layout: Main Article on Left, Sidebar on Right (Full width, not squeezed in center) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden p-6 sm:p-10 border-t-2 border-t-emerald-400">
              <article className="max-w-none space-y-7">
                {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Partnership Firm Registration in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    A <strong className="font-normal text-slate-900">partnership firm</strong> is one of the most preferred business structures in India, where two or more individuals come together to run a business and share profits and losses. Governed by the <strong className="font-normal text-slate-900">Indian Partnership Act, 1932</strong>, a partnership firm offers immense operational flexibility, shared management responsibility, and ease of formation. Whether you are starting a new joint venture or formalizing an ongoing enterprise, understanding the complete <a href="#pricing" className="text-[#155EEF] hover:underline font-normal">partnership firm registration process</a> is the first step towards building a legally recognized and credible business in India. Our legal experts at <a href="/" className="text-[#00B074] hover:underline font-normal">IndiaFilings</a> guide you through every milestone from custom deed drafting to Registrar of Firms certificate delivery.
                  </p>
                </div>

                {/* Section 2: What is Partnership Firm Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    What is Partnership Firm Registration in India?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    <strong className="font-normal text-slate-900">Partnership firm registration in India</strong> is the legal procedure of registering a business entity formed by two or more co-founders under the <strong className="font-normal text-slate-900">Indian Partnership Act, 1932</strong>. Although registration is optional under the Act, a registered firm enjoys significant legal standing over an unregistered one, including the statutory right to sue defaulting parties in court and claim monetary set-offs.
                  </p>
                  <p className="mt-2.5 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    The registration is administered by the <strong className="font-normal text-slate-900">Registrar of Firms (ROF)</strong> under the respective state government where the firm&apos;s principal place of business is situated. A comprehensively drafted <strong className="font-normal text-slate-900">Partnership Deed</strong> executed on state non-judicial stamp paper serves as the legal backbone of the enterprise.
                  </p>
                </div>

                {/* Section 3: Types of Partnership Firms */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What are the Types of Partnership Firms in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Selecting the right partnership model determines the liability exposure, governance flexibility, and longevity of your business:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Type of Partnership</th>
                          <th className="py-3 px-4 font-normal">Liability</th>
                          <th className="py-3 px-4 font-normal">Duration</th>
                          <th className="py-3 px-4 font-normal">Management</th>
                          <th className="py-3 px-4 font-normal text-[#00A86B]">Best Suited For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {PARTNERSHIP_TYPES_TABLE.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                          >
                            <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.type}
                            </td>
                            <td className="py-3 px-4 text-slate-600">{row.liability}</td>
                            <td className="py-3 px-4 text-slate-600">{row.duration}</td>
                            <td className="py-3 px-4 text-slate-600">{row.management}</td>
                            <td className="py-3 px-4 font-medium text-[#00A86B]">{row.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">1. General Partnership (GP)</h3>
                      <p className="text-[13px] font-light text-slate-600 mt-1 leading-relaxed">
                        The most prevalent format where all partners hold joint authority and unlimited personal liability. If the business defaults, personal assets of any or all partners can be attached to settle firm debts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">2. Limited Liability Partnership (LLP)</h3>
                      <p className="text-[13px] font-light text-slate-600 mt-1 leading-relaxed">
                        A corporate hybrid governed by the LLP Act, 2008 with Ministry of Corporate Affairs oversight. Partners enjoy limited liability protection restricted strictly to their agreed capital contribution.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">3. Partnership at Will</h3>
                      <p className="text-[13px] font-light text-slate-600 mt-1 leading-relaxed">
                        Formed without any fixed duration clause in the deed under Section 7 of the Act. Any partner can dissolve the partnership at any time simply by serving written notice to other co-partners.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">4. Particular Partnership</h3>
                      <p className="text-[13px] font-light text-slate-600 mt-1 leading-relaxed">
                        Constituted under Section 8 solely for a specific project, tender, or venture (e.g. joint construction or infrastructure subcontracting). Automatically dissolves upon completion of the venture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Registered vs Unregistered Partnership Table */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Registered vs Unregistered Partnership Firm in India
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Indian Partnership Act does not penalize non-registration, but it imposes severe legal disabilities on unregistered firms:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Feature</th>
                          <th className="py-3 px-4 font-normal text-[#00A86B]">Registered Partnership Firm</th>
                          <th className="py-3 px-4 font-normal">Unregistered Partnership Firm</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {REGISTERED_VS_UNREGISTERED_TABLE.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                          >
                            <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.feature}
                            </td>
                            <td className="py-3 px-4 font-medium text-[#00A86B]">{row.registered}</td>
                            <td className="py-3 px-4 text-slate-600">{row.unregistered}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 5: Eligibility & Name Selection */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Eligibility and Naming Rules for Partnership Firms
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#00A86B]" />
                        Partner Eligibility Criteria
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Minimum 2 partners, maximum 50 partners under Companies Act</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Must be an adult of sound mind, not an undischarged insolvent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Minors can be admitted to benefits of partnership with guardian consent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Existing registered firms and companies can become corporate partners</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-2 flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#00A86B]" />
                        Naming Rules &amp; Guidelines
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Must be distinct and not identical to any registered trademark or firm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Cannot contain words like Crown, Emperor, Empire, Royal without approval</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Cannot suggest patronization by Central or State Governments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Must comply with Emblems and Names (Improper Use) Act, 1950</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 6: Documents Required */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Documents Required for Partnership Firm Registration
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The essential documentation checklist required for drafting the deed and filing Form 1 with the Registrar:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#00A86B]" />
                        Documents from All Partners
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>PAN Card of all partners (mandatory for taxation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Identity Proof: Aadhaar Card, Passport, or Voter ID</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Address Proof: Bank Statement or Utility Bill (within 2 months)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Passport-size color photographs of each partner</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#00A86B]" />
                        Principal Place of Business Documents
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Latest Electricity bill or property tax receipt of office premises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Rent Agreement executed on stamp paper (if premises is rented)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>No Objection Certificate (NOC) from property owner</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Partnership Deed printed on state non-judicial stamp paper</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 7: Step-by-Step Registration Process */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Step-by-Step Partnership Registration Process in India
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-5">
                    Follow these 6 sequential steps to legally register and operationalize your partnership enterprise:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "Step 1",
                        title: "Drafting the Comprehensive Partnership Deed",
                        desc: "Prepare a detailed Partnership Deed incorporating the firm name, capital contribution per partner, profit & loss sharing ratio, partner salaries, banking authorization, and exit terms.",
                      },
                      {
                        step: "Step 2",
                        title: "Executing Stamp Duty & Notarization",
                        desc: "Print the deed on non-judicial stamp paper of appropriate value as prescribed by your state Stamp Act (e.g. ₹200–₹500 in TN/MH), sign across all pages, and get it notarized by a public notary.",
                      },
                      {
                        step: "Step 3",
                        title: "Submitting Form 1 to Registrar of Firms (ROF)",
                        desc: "Submit Form 1 (Application for Registration of Firm) along with notarized deed, affidavit, and address proofs to the state Registrar of Firms portal or physical office.",
                      },
                      {
                        step: "Step 4",
                        title: "Paying State Government Registration Fees",
                        desc: "Pay the prescribed state registration fees online or via treasury challan. The Registrar scrutinizes documents and enters the firm into the official Register of Firms.",
                      },
                      {
                        step: "Step 5",
                        title: "Receiving the Certificate of Registration",
                        desc: "The Registrar issues the official Partnership Registration Certificate containing the registration number, confirming the firm's legal existence under the 1932 Act.",
                      },
                      {
                        step: "Step 6",
                        title: "Applying for Firm PAN, GST, and Current Bank Account",
                        desc: "Apply for a separate PAN card in the firm's name via NSDL/UTIITSL, secure GST registration, open a dedicated commercial current account, and start billing clients.",
                      },
                    ].map((stepItem, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-200/80 bg-white">
                        <div className="w-16 h-10 rounded-lg bg-emerald-50 text-[#00A86B] font-semibold text-[13px] flex items-center justify-center shrink-0 border border-emerald-200/60">
                          {stepItem.step}
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium text-slate-900">{stepItem.title}</h4>
                          <p className="text-[12.5px] font-light text-slate-600 mt-1 leading-relaxed">
                            {stepItem.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 8: Comparison with other Structures */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Partnership Firm vs Other Business Structures
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Comparison between Partnership Firm, LLP, Private Limited Company, and Sole Proprietorship:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3 font-normal">Feature</th>
                          <th className="py-2.5 px-3 font-normal text-[#00A86B]">Partnership Firm</th>
                          <th className="py-2.5 px-3 font-normal">LLP</th>
                          <th className="py-2.5 px-3 font-normal">Private Limited</th>
                          <th className="py-2.5 px-3 font-normal">Sole Proprietorship</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {PARTNERSHIP_VS_OTHER_COMPARISON.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">{row.feature}</td>
                            <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.partnership}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.llp}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.pvtLtd}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.proprietor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 9: Compliances After Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Compliance Requirements for Partnership Firms in India
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Statutory compliances required to maintain good tax standing and avoid penal interest:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-light text-slate-700">
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Income Tax Return (ITR-5):</strong> Flat 30% tax rate, filed annually by 31st July</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>GST Returns:</strong> Monthly GSTR-1 and GSTR-3B filings (if registered under GST)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Tax Audit under 44AB:</strong> Mandatory if annual turnover exceeds ₹1 crore (business)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>TDS Compliance:</strong> Quarterly filing of 24Q/26Q if deducting tax on payments</span>
                    </div>
                  </div>
                </div>

                {/* Section 10: Why Choose IndiaFilings */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Choose IndiaFilings for Partnership Firm Registration?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    IndiaFilings is India&apos;s leading corporate services platform, having assisted over 100,000+ businesses with firm registration and annual compliance:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-light text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Experienced CAs and Advocates specializing in Partnership Law</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Fast turnaround: Deed drafting in 24 hours, registration in 5–7 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Transparent fee structure with absolutely zero hidden charges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Free LEDGERS software subscription for accounting &amp; invoicing</span>
                    </div>
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
                      "Understanding the Partnership Model in India",
                      "Partnership Firm Registration: A Comprehensive Guide",
                      "Partnership Deed Drafting: Essential Clauses to Include",
                      "How to Apply for Partnership Firm PAN Card",
                      "Difference Between Registered & Unregistered Partnership",
                      "Taxation of Partnership Firms: Complete ITR-5 Guide",
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

              {/* Partnership Firm in States Directory */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-normal text-[14px] text-slate-800">Partnership Firm by State</span>
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
                        <span>Partnership in {st}</span>
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

      {/* Frequently Asked Questions Section (Matching exact IndiaFilings 2-column reference design) */}
      <section className="py-14 sm:py-18 bg-white border-t border-[#E4E7EC]">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Green Accent Dash */}
          <div className="w-10 h-[3px] bg-[#00A86B] mb-3.5 rounded-full" />

          {/* Section Header */}
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-normal text-slate-900 tracking-tight leading-snug">
            Frequently asked questions
          </h2>
          <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500 mt-1.5 mb-8">
            Common questions about Partnership Company Registration Online in India.
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
        serviceTitle="Partnership Firm Registration"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
