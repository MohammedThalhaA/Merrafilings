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
  HeartHandshake,
  CheckCircle2,
  AlertTriangle,
  FolderLock,
  Landmark,
  BadgePercent,
  Receipt,
  FileCheck,
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
    name: "Khatabook",
    logo: (
      <span className="text-[15px] font-bold text-slate-800 select-none">
        Khata<span className="text-red-500">book</span>
      </span>
    ),
  },
  {
    name: "mamaearth",
    logo: (
      <span className="text-[14px] font-semibold text-[#00A86B] tracking-wide select-none">
        mamaearth
      </span>
    ),
  },
  {
    name: "GROWW",
    logo: (
      <span className="text-[15px] font-semibold text-slate-700 tracking-wider select-none">
        GROWW
      </span>
    ),
  },
  {
    name: "Lenskart",
    logo: (
      <span className="text-[15px] font-bold text-[#000042] select-none">
        lenskart
      </span>
    ),
  },
  {
    name: "Joyalukkas",
    logo: (
      <div className="flex items-center gap-1.5 select-none">
        <div className="w-3.5 h-3.5 rounded-full bg-[#991B1B] flex items-center justify-center shrink-0">
          <span className="text-[8px] text-white font-bold leading-none">J</span>
        </div>
        <span className="text-[12.5px] font-serif font-bold text-[#991B1B] tracking-tight">
          Joyalukkas
        </span>
      </div>
    ),
  },
];

const TRUST_TYPES_TABLE = [
  {
    type: "Public Trust",
    purpose: "Benefit of the general public for social, educational, and medical welfare",
    governedBy: "State Public Trusts Acts (e.g. Bombay Public Trust Act)",
  },
  {
    type: "Private Trust",
    purpose: "Benefit of specific individuals, family members, or estate succession",
    governedBy: "Indian Trusts Act, 1882",
  },
  {
    type: "Charitable Trust",
    purpose: "Education, poverty relief, environmental cause, or medical aid",
    governedBy: "Income Tax Act, 1961 & State Laws",
  },
  {
    type: "Religious Trust",
    purpose: "Religious ceremonies, maintenance of temples, shrines, and endowments",
    governedBy: "Religious Endowment Acts / State Boards",
  },
  {
    type: "Revocable Trust",
    purpose: "Flexible estate planning trust that can be altered or cancelled by the settlor",
    governedBy: "Indian Trusts Act, 1882",
  },
  {
    type: "Irrevocable Trust",
    purpose: "Permanent trust where assets cannot be reclaimed once transferred into corpus",
    governedBy: "Indian Trusts Act, 1882",
  },
];

const TRUST_DOCUMENTS_TABLE = [
  {
    document: "Trust Deed on Stamp Paper",
    purpose: "Foundational constitutional charter outlining legal name, aims, powers, and rules",
    format: "Executed on Non-Judicial Stamp Paper",
  },
  {
    document: "PAN Card of Settlor & All Trustees",
    purpose: "Identity proof and permanent taxation verification",
    format: "Clear Self-Attested Digital Copies",
  },
  {
    document: "Aadhaar Card / Passport / Voter ID",
    purpose: "Address and Indian citizenship verification for minimum 2 trustees",
    format: "Clear Scanned PDF / Images",
  },
  {
    document: "Registered Office Address Proof",
    purpose: "Jurisdictional evidence for local Sub-Registrar registration",
    format: "Electricity Bill or Water Bill (< 2 months old)",
  },
  {
    document: "No Objection Certificate (NOC)",
    purpose: "Consent from property owner allowing trust office operations",
    format: "Signed NOC with Rent Agreement/Ownership Deed",
  },
  {
    document: "Two Passport-size Photographs",
    purpose: "Biometric and Sub-Registrar ledger documentation records",
    format: "2 Recent Color Photos per Trustee",
  },
  {
    document: "Property Documents (if settled)",
    purpose: "Proof of title if immovable property is endowed to the trust corpus",
    format: "Sale Deed or Gift Deed Copy",
  },
  {
    document: "Two Independent Witnesses",
    purpose: "Witnesses present during physical deed execution before Sub-Registrar",
    format: "Valid ID Proof (Aadhaar/PAN) of 2 Witnesses",
  },
];

const TRUST_ITR7_TABLE = [
  {
    particular: "Applicable To",
    details: "Charitable Trusts, Religious Trusts, NGOs, and Institutions claiming tax exemption",
  },
  {
    particular: "Annual Due Date",
    details: "31st October (for audited trusts requiring Form 10B) / 31st July (non-audit trusts)",
  },
  {
    particular: "Mandatory Audit Requirement",
    details: "Form 10B / 10BB audit report mandatory by CA if gross receipts exceed ₹2.5 Lakhs",
  },
  {
    particular: "Statutory Form Used",
    details: "Form ITR-7 (Electronic E-filing on Income Tax Portal)",
  },
  {
    particular: "Income Tax Sections Covered",
    details: "Sections 11, 12, 12A, 12AA, 12AB, and 13 of the Income Tax Act, 1961",
  },
];

const TRUST_VS_SOCIETY_VS_SECTION8_TABLE = [
  {
    parameter: "Governing Law",
    trust: "Indian Trusts Act, 1882",
    society: "Societies Registration Act, 1860",
    section8: "Companies Act, 2013",
  },
  {
    parameter: "Minimum Members",
    trust: "2 Trustees",
    society: "7 Members",
    section8: "2 Directors / Shareholders",
  },
  {
    parameter: "Registration Authority",
    trust: "Sub-Registrar (Local Registration)",
    society: "Registrar of Societies (State)",
    section8: "Ministry of Corporate Affairs (MCA)",
  },
  {
    parameter: "Tax Exemption (12A & 80G)",
    trust: "Eligible for 12A & 80G",
    society: "Eligible for 12A & 80G",
    section8: "Eligible for 12A & 80G",
  },
  {
    parameter: "Compliance Level",
    trust: "Moderate",
    society: "Moderate",
    section8: "High (ROC & MCA Filings)",
  },
  {
    parameter: "Best Suited For",
    trust: "Charitable & Religious purposes, family asset protection",
    society: "Cultural, scientific, athletic, and local community activities",
    section8: "Large-scale institutional NGOs, corporate CSR funding & grants",
  },
];

// 20 FAQs divided into Column 1 & Column 2 (10 each) matching reference layout
const FAQ_COL_1 = [
  {
    q: "What is trust?",
    a: "A trust is a legal arrangement where a trustee holds and manages assets to benefit one or more beneficiaries. As specified in the trust deed, the trustee is responsible for administering the trust solely for its defined objectives.",
  },
  {
    q: "What is Trust Registration?",
    a: "Trust registration is the process of legally establishing a trust entity by fulfilling the necessary formalities and complying with the Trust's Act of 1882 or relevant State Public Trust Acts. Registration recognizes the trust legally and ensures compliance with statutory provisions.",
  },
  {
    q: "Who can create trust in India?",
    a: "Any person competent to contract, including individuals, companies, and organizations, can create a trust in India. The person or entity creating the trust is known as the trustor or settlor.",
  },
  {
    q: "How many trustees are required to register a trust in India?",
    a: "A minimum of 2 trustees is required to register a trust in India. The law mandates that a trust must have at least two individuals who will act as trustees to manage and administer the trust's assets for the benefit of the beneficiaries.",
  },
  {
    q: "Can the author of the trust also be a trustee?",
    a: "In private trusts, the author/settlor transfers property to independent trustees. In public charitable trusts in India, the Settlor can often be appointed as the Managing Trustee or Founder Trustee along with independent co-trustees, provided there is no conflict with state laws.",
  },
  {
    q: "Are there any restrictions on the number of trustees for a trust?",
    a: "No, there is no statutory limitation on the maximum number of trustees for a trust. While at least two trustees are required to register a trust in India, there is no specified upper limit on the number of trustees.",
  },
  {
    q: "Are all trustees required to be residents of India?",
    a: "Yes, all trustees of an Indian trust are typically required to be residents of India. According to Indian law and practice, at least one trustee must be a resident of India to ensure proper local administration, bank operations, and statutory compliance.",
  },
  {
    q: "What are the documents required for trust registration in India?",
    a: "The documents generally required include: Trust Deed executed on stamp paper, PAN Card and Identity Proofs (Aadhaar/Passport) of Trustees, Address Proof of the registered office (utility bill < 2 months), Landlord NOC, and passport-size photographs.",
  },
  {
    q: "Is it necessary to have a physical office address for trust registration?",
    a: "Yes, it is essential to have a physical office address for trust registration in India. The physical office address serves as the official registered address of the trust for all Sub-Registrar jurisdiction, legal notices, and correspondence.",
  },
  {
    q: "What is the process of trust registration in India?",
    a: "Trust registration in India involves selecting a unique name, drafting a comprehensive trust deed, executing it on non-judicial stamp paper, presenting it with trustees and 2 witnesses before the Sub-Registrar, obtaining the certified deed, and applying for trust PAN and bank account.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can a trust operate in multiple states in India?",
    a: "Yes, a trust can operate in multiple states in India. Trusts are not restricted to operating within a specific state and can extend their activities across India, provided the registered Trust Deed explicitly permits nationwide operations under its jurisdiction clause.",
  },
  {
    q: "How long does it take to register a trust in India?",
    a: "Drafting the trust deed and preparing documentation takes 3 to 5 working days. The Sub-Registrar registration appointment and certified deed issuance typically take another 5 to 7 days, depending on the state registration office schedule.",
  },
  {
    q: "Is it mandatory to obtain a PAN card for a registered trust?",
    a: "Yes, a registered trust in India must obtain a separate PAN (Permanent Account Number) card to conduct financial activities, open a bank account, receive charitable contributions, apply for 12A/80G, and file annual tax returns.",
  },
  {
    q: "Can a trust engage in commercial activities?",
    a: "No, a charitable trust is primarily established for non-profit welfare or public causes. However, under Section 11(4A) of the Income Tax Act, business activities that are incidental to the attainment of the trust's charitable objectives are permitted if separate books of accounts are maintained.",
  },
  {
    q: "What are the tax benefits available to registered trusts in India?",
    a: "Registered trusts enjoy 100% income tax exemption on their surplus under Section 12A (12AB) and can provide tax deductions of 50% or 100% to their donors under Section 80G of the Income Tax Act.",
  },
  {
    q: "Can a trust be dissolved or revoked?",
    a: "A private revocable trust can be revoked by the settlor according to its deed terms. However, public charitable trusts are generally irrevocable and cannot be dissolved at will; their assets must be transferred to another trust with similar objectives upon court approval.",
  },
  {
    q: "Can the beneficiaries of trust be changed?",
    a: "In public charitable trusts, beneficiaries are the public at large within the specified welfare categories. In private trusts, the identity of named beneficiaries is set in the deed and can only be amended if the deed specifically empowers trustees or the settlor to alter beneficiary classes.",
  },
  {
    q: "Can a trust be converted into a private limited company?",
    a: "No, a trust cannot be directly converted into a private limited company in India. A trust and a company are two distinct legal entities with different legal frameworks, governance rules, and tax regimes.",
  },
  {
    q: "What are the reporting requirements for a registered trust in India?",
    a: "Registered trusts must maintain proper books of accounts, get their accounts audited by a CA in Form 10B/10BB if income exceeds ₹2.5 Lakhs, file annual ITR-7 by 31st October, and submit annual returns to the state Charity Commissioner if applicable.",
  },
  {
    q: "Can a foreign national create trust in India?",
    a: "A foreign national can create a trust in India subject to compliance with the Foreign Contribution Regulation Act (FCRA) and Foreign Exchange Management Act (FEMA). To receive foreign donations, the trust must subsequently obtain FCRA clearance from the MHA.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Section 8 Company Registration",
  "Society Registration",
  "12A and 80G Registration",
  "FCRA Registration",
  "CSR-1 Registration",
  "NGO Darpan Registration",
  "Private Limited Company",
  "One Person Company",
  "Limited Liability Partnership",
  "ITR-7 Return Filing",
  "Form 10B Audit Assistance",
  "Trust PAN & TAN Allotment",
];

const POPULAR_SEARCHES_TAGS = [
  "Trust Registration in India",
  "Online Trust Registration",
  "Charitable Trust Deed Drafting",
  "Private Trust Registration Online",
  "Indian Trusts Act 1882",
  "Trust Registration Process",
  "Documents Required for Trust Registration",
  "Trust Registration Fees",
  "Public Charitable Trust Formation",
  "Religious Trust Registration",
  "Trust PAN Card Online",
  "Trust TAN Registration",
  "Section 12A Exemption Form 10A",
  "Section 80G Certificate for Donors",
  "Trust vs Section 8 Company",
  "Trust vs Society Registration",
  "Sub Registrar Trust Deed Execution",
  "ITR-7 Return Filing for Trusts",
  "Form 10B Audit Report",
  "NGO Registration India",
  "Trust Bank Account Opening Resolution",
  "Trust Stamp Duty by State",
];

export default function TrustRegistrationPage() {
  // Modals
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hero Lead Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing card expand states
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<string | null>("c1-0");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);

  // State list collapse toggle in sidebar
  const [stateListOpen, setStateListOpen] = useState(true);

  // Client mini cards carousel scroll
  const clientScrollRef = useRef<HTMLDivElement>(null);

  const scrollClients = (direction: "left" | "right") => {
    if (clientScrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
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
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-light text-slate-400 mb-6">
            <a href="/" className="hover:text-slate-700 transition-colors">
              MerraFilings
            </a>
            <span>/</span>
            <a href="/registrations" className="hover:text-slate-700 transition-colors">
              Registrations
            </a>
            <span>/</span>
            <span className="text-slate-600 font-normal">
              Trust Registration
            </span>
          </nav>

          {/* Main Hero Title & Tagline */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-light text-[#12023B] leading-snug">
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
                Trust Registration
              </span>{" "}
              in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Register a Trust in India with expert assistance including Trust Deed drafting, PAN registration, and statutory compliance support to start your non-profit legally today.
            </p>

            {/* Banner Pill: Starting from ₹2,899 */}
            <div className="mt-4 flex items-center justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-blue-500 bg-white shadow-xs hover:shadow-md hover:bg-blue-50/50 transition-all cursor-pointer group"
              >
                <span className="text-xs sm:text-sm text-slate-700">
                  Trust Registration starting from{" "}
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
                    Start Your Trust Registration
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Trust registration for non-profits in India with complete legal support. Our service includes trust deed drafting, PAN registration, and registration certificate, ensuring a smooth and hassle-free registration process.
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
                      Trust Deed Drafting
                    </span>
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
                    <span className="text-[13.5px] font-light text-slate-700">
                      PAN Card Registration
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
                    <span className="text-[13.5px] font-light text-slate-700">
                      Income Tax Filing (ITR-7)
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
                      Dedicated Compliance Expert
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
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. Our senior non-profit &amp; trust legal specialist will call you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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

                    {/* Full Name */}
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

                    {/* Action Buttons: WhatsApp & Continue */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            `https://wa.me/918939885544?text=Hi,%20I%20want%20to%20register%20a%20Trust%20in%20India`,
                            "_blank"
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        type="submit"
                        className="flex-1 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] to-[#D946EF] hover:opacity-95 shadow-sm transition-all cursor-pointer text-center"
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
                  <Award className="w-5 h-5 text-[#F04438] transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    <span>4.4</span>
                    <div className="flex items-center text-amber-400 text-[11px] gap-0.5">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="relative inline-block text-slate-300">
                        ★
                        <span className="absolute inset-0 overflow-hidden w-[40%] text-amber-400">
                          ★
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Verified Client Reviews
                  </p>
                </div>
              </div>

              {/* Card 2: 15+ Years of Experience */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(217,119,6,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8E7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#D97706] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    15+ Years
                  </p>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Non-Profit &amp; Trust Law
                  </p>
                </div>
              </div>

              {/* Card 3: 2 Lakh+ Customers */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(107,75,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Users className="w-5 h-5 text-[#6B4BFF] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    50,000+ Trusts
                  </p>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Drafted &amp; Registered
                  </p>
                </div>
              </div>

              {/* Card 4: App Tracking */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-emerald-200 hover:shadow-[0_8px_25px_rgba(0,176,116,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <Smartphone className="w-5 h-5 text-[#00B074] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    12A &amp; 80G Support
                  </p>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Tax Exemption Filing
                  </p>
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

      {/* Pricing Section (Matching Exact Merrafilings Layout & Green Hover) */}
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
              Clear, transparent pricing from expert Trust Deed drafting to full 12A &amp; 80G income tax registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: Trust Deed Drafting */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Trust Registration - Trust Deed
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Get your Trust registered in just 5–7 days with an expert-drafted deed prepared by our legal team...{" "}
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
                  <div className="mt-2.5 p-3 bg-[#F8FAFC] rounded-xl text-[12px] font-light text-slate-600 border border-slate-200/80">
                    Includes customized Trust Deed drafting under Indian Trusts Act, legal review of objects, trustee power clauses, PAN application support, and Sub-Registrar procedural guidance. (Government stamp duty and notary fees payable to state authorities).
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹2,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ stamp duty</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Fast 5–7 working days deed delivery
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Customized Legal Trust Deed Drafting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Charitable / Religious / Private Objects Structuring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Trustee Roles &amp; Succession Clauses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Sub-Registrar Registration Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Trust PAN Card Application Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Dedicated Legal Relationship Manager</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Choose Deed Drafting
                </button>
              </div>
            </div>

            {/* Package 2: Trust Deed & ITR */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Trust Registration - Deed &amp; ITR
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Expert-drafted trust deed, PAN, bank account support, first-year ITR-7 filing, and 1-year access to Ledgers cloud accounting software...{" "}
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
                  <div className="mt-2.5 p-3 bg-[#F8FAFC] rounded-xl text-[12px] font-light text-slate-600 border border-slate-200/80">
                    Includes everything in Deed plan plus annual income tax return filing (ITR-7), book-keeping setup, and 12-month license to Ledgers compliance suite.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹10,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ stamp duty</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Includes First-Year ITR-7 &amp; Accounting
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Everything in Trust Deed Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Trust PAN &amp; TAN Allotment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Trust Bank Current Account Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>1st Year Income Tax Return (ITR-7)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>1-Year Access to Ledgers Accounting Software</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Tax Exemption Advisory by Senior CA</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Choose Deed &amp; ITR
                </button>
              </div>
            </div>

            {/* Package 3: Trust Deed, ITR, 12A & 80G (Comprehensive NGO Package) */}
            <div className="group bg-white rounded-[22px] border-[2px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-[0_20px_40px_rgba(0,176,116,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B074] text-white text-[11px] font-medium tracking-wide uppercase px-3 py-0.5 rounded-full shadow-2xs">
                Comprehensive NGO Package
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Deed, ITR, 12A &amp; 80G Registration
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  The ultimate non-profit package: expert trust deed drafting, PAN, ITR filing, Section 12A tax exemption, and Section 80G donor deduction...{" "}
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
                  <div className="mt-2.5 p-3 bg-[#F8FAFC] rounded-xl text-[12px] font-light text-slate-600 border border-slate-200/80">
                    Complete tax exemption registration under Form 10A on the Income Tax Portal. Provides 100% tax exemption on trust surplus plus 50% tax deduction certificates for all your donors and CSR partners.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹26,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ stamp duty</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Includes 12A &amp; 80G Tax Exemption Certificates
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Everything in Deed &amp; ITR Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Section 12A Tax Exemption (Form 10A Filing)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Section 80G Donor Tax Deduction Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Income Tax Portal Entity Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>1st Year Annual ITR-7 Return Filing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>1-Year Ledgers Cloud Accounting Software</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-white bg-[#00B074] hover:bg-[#009B66] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                  Choose 12A &amp; 80G Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Sidebar Grid Section */}
      <section className="py-12 bg-[#FAF9F7]/50 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Comprehensive Guide Content (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-2xs space-y-10">
              {/* Section 1: Introduction */}
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-normal text-[#1F1646] mb-3">
                  Trust Registration Online in India
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                  Registering a trust in India provides a strong legal foundation for managing charitable, religious, or private objectives. Whether you aim to serve society or protect family assets, trust registration in India ensures transparency, legal recognition, and tax benefits under the Indian Trusts Act, 1882 and relevant state-specific statutes.
                </p>
              </div>

              {/* Section 2: What is a Trust and Why is it Registered in India? */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a Trust and Why is it Registered in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  A trust is a legal arrangement where one party (the settlor) transfers property or assets to another party (the trustee) for the benefit of a third party (the beneficiary). In India, trusts are primarily governed by the Indian Trusts Act, 1882 for private trusts, while public and charitable trusts are regulated by state-specific legislation.
                </p>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Registering a trust gives it a legal identity, enabling it to own property, enter into contracts, open bank accounts, and avail tax exemptions. Charitable trust registration is especially important for NGOs and non-profit organisations seeking government recognition and donor credibility.
                </p>

                {/* 3 Key Parties in a Trust */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px] font-light text-slate-700 mb-6">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      1. The Settlor / Author
                    </strong>
                    The individual or corporate entity who establishes the trust and contributes the initial property or financial corpus.
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      2. The Trustees
                    </strong>
                    The trusted fiduciaries who hold legal title to trust assets and administer them solely for the trust&apos;s lawful objectives.
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      3. The Beneficiaries
                    </strong>
                    The target individuals, communities, or general public who receive scholarships, welfare aid, or asset distributions.
                  </div>
                </div>

                {/* Key Objectives */}
                <h3 className="text-[15px] font-medium text-slate-900 mb-2.5">
                  Key Objectives of Trust Registration
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span>Legal recognition &amp; distinct identity for the trust entity</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span>Protection of trust assets and endowed properties</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span>Eligibility for income tax exemptions under Sections 12A &amp; 80G</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span>Enhanced credibility among donors, CSR committees, &amp; govt</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span>Smooth perpetual succession and seamless management of family assets</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Types of Trusts in India Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Types of Trusts in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  India recognises several types of trusts based on their purpose, structure, and beneficiaries. Understanding the type of trust best suited to your objectives is the first step in the online trust registration process:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Type of Trust</th>
                        <th className="py-3 px-4 font-normal">Purpose &amp; Scope</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Governing By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_TYPES_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.type}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.governedBy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4: Characteristics of a Registered Trust */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Characteristics of Trust Registration in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  A registered trust in India carries several defining characteristics that distinguish it from other non-profit structures such as societies or Section 8 companies:
                </p>
                <div className="space-y-3 text-[13px] font-light text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Legal Entity:</strong> A registered trust has a distinct legal identity separate from its individual trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Trustee Obligations:</strong> Trustees are legally and fiduciarily bound to act solely in the best interest of the beneficiaries.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Asset Protection:</strong> Trust property is completely protected from the personal liabilities and debts of trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Irrevocability:</strong> Most charitable trusts, once formed, cannot be arbitrarily dissolved without statutory or court process.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Tax Exemption Eligibility:</strong> Registered trusts can apply for 12A and 80G registration for 100% income tax exemptions.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Perpetual Succession:</strong> The trust continues indefinitely regardless of retirement, addition, or demise of trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Transparency:</strong> Regular annual compliance and statutory audit filings in Form 10B/10BB guarantee public trust.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: What is a Trust Deed and What Should It Contain? */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a Trust Deed and Why is it Important?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  A trust deed is the foundational legal charter that defines the structure, purpose, powers, and rules of the trust. It is executed on non-judicial stamp paper and signed by the settlor and trustees in the presence of two independent witnesses. Without a registered trust deed, formal legal recognition and tax exemptions are impossible.
                </p>

                <h3 className="text-[15px] font-medium text-slate-900 mb-3">
                  What Should a Trust Deed Contain?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-light text-slate-700">
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">1. Name and Registered Address</strong>
                    Clear, distinct trust name and physical jurisdictional address.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">2. Settlor &amp; Trustee Details</strong>
                    Complete names, occupations, KYC, and addresses of all appointed trustees.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">3. Objectives &amp; Charitable Scope</strong>
                    Unambiguous clauses detailing educational, relief, or religious purposes.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">4. Corpus &amp; Trust Property</strong>
                    Initial settlement amount and description of movable/immovable assets.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">5. Trustee Rights &amp; Administrative Powers</strong>
                    Borrowing powers, property management, and bank operation authorisations.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">6. Trustee Appointment &amp; Removal</strong>
                    Clear rules for quorum of meetings, resignation, and election of new trustees.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">7. Succession &amp; Dissolution Rules</strong>
                    Perpetual succession clauses and asset disposal rules upon winding up.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">8. Beneficiary Entitlements</strong>
                    Categories of recipients eligible for welfare grants, relief, or aid.
                  </div>
                </div>
              </div>

              {/* Section 6: Documents Required Table */}
              <div id="documents-required" className="border-t border-slate-100 pt-6 scroll-mt-24">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Documents Required for Trust Registration?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Preparing the correct documentation is essential for smooth Sub-Registrar execution. The following authenticated documents are required:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Document Required</th>
                        <th className="py-3 px-4 font-normal">Purpose &amp; Significance</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_DOCUMENTS_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.document}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.format}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 7: Step-by-Step Procedure */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Step-by-Step Procedure for Trust Registration in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  The trust registration procedure in India involves several critical steps to establish full legal recognition:
                </p>

                <div className="space-y-3.5">
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Choose the Type of Trust &amp; Settle Name
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Decide whether to establish a public charitable, religious, or private trust. Ensure the proposed name complies with the Emblems and Names Act.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Draft the Comprehensive Trust Deed
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Prepare the formal constitutional deed with aims, trustee powers, voting quorum, meeting guidelines, and perpetual succession clauses.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Select and Appoint Trustees (Minimum 2)
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Appoint at least two adult trustees of sound mind with valid Indian PAN and Aadhaar records to administer trust operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Execute Deed on Non-Judicial Stamp Paper
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Print the finalized trust deed on non-judicial stamp paper based on the prescribed stamp duty rate of the registered office state.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Visit the Jurisdictional Sub-Registrar Office
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        The Settlor, trustees, and two independent witnesses appear before the local Sub-Registrar for deed execution and biometric verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Obtain Certified Trust Registration Deed
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Once validated and stamped, the Sub-Registrar issues the official registered copy bearing volume and book registration numbers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      7
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Apply for Trust PAN &amp; TAN Card
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Apply online in Form 49A with the registered deed to secure the trust&apos;s distinct Permanent Account Number (PAN).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      8
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Open Dedicated Trust Bank Current Account
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Open a bank current account in the trust name using the certified deed, PAN, and trustee board authorization resolution.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00A86B] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      9
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Apply for 12A &amp; 80G Tax Exemption (Form 10A)
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        File electronic application Form 10A on the Income Tax Portal to obtain 12A tax exemption and 80G donor deduction status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8: How to Apply for PAN Card for a Trust */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How to Apply for PAN Card for a Registered Trust?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  After obtaining the registered trust deed, applying for a PAN card is a mandatory step. A dedicated PAN is required for opening a bank account, filing annual income tax returns, and issuing donor receipts:
                </p>
                <div className="bg-[#FAF9F7] p-4 rounded-xl border border-slate-200/80">
                  <h4 className="text-[13.5px] font-medium text-slate-800 mb-2">
                    Documents Required for Trust PAN Card:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>Certified Copy of Registered Trust Deed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>Sub-Registrar Registration Endorsement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>Registered Office Address Proof</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>KYC of Authorized Managing Trustee</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 9: ITR-7 Return Filing for Trusts */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is ITR-7 Return Filing for Trusts?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  All registered trusts in India that claim income tax exemption under Sections 11, 12, 12A, or 12AA are required to file their annual income tax return using Form ITR-7:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Particulars</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Compliance Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_ITR7_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.particular}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 10: 12A & 80G Registration Guidance */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How to Get 12A &amp; 80G Registration for a Trust?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Section 12A (now 12AB) and Section 80G together form the backbone of a non-profit trust&apos;s financial framework in India:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1.5 flex items-center gap-1.5">
                      <BadgePercent className="w-4 h-4 text-[#00A86B]" />
                      Section 12A (100% Tax Relief)
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Grants complete income tax exemption on the trust&apos;s annual surplus income. Filed electronically via Form 10A on the Income Tax Portal.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1.5 flex items-center gap-1.5">
                      <Receipt className="w-4 h-4 text-[#00A86B]" />
                      Section 80G (Donor Tax Deduction)
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Empowers donors (individuals, corporates, CSR committees) to claim 50% or 100% deduction on their donations, boosting fundraising capacity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11: Annual Compliance Checklist */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Compliance Requirements for Registered Trusts?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  To safeguard tax-exempt status and avoid penalties, registered trusts must maintain the following ongoing compliances:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 block">ITR-7 Return Filing:</strong>
                      File annual returns with the Income Tax Department by 31st October.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 block">Form 10B / 10BB Audit:</strong>
                      Mandatory CA audit report if total annual receipts exceed ₹2.5 Lakhs.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 block">12A &amp; 80G Timely Renewal:</strong>
                      Ensure timely 5-year re-registration under Form 10AB.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 block">Books of Accounts Maintenance:</strong>
                      Maintain ledgers, vouchers, and receipt books systematically.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 block">TDS &amp; GST Compliance:</strong>
                      Deduct and deposit TDS on professional payments where applicable.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 block">FCRA Compliance:</strong>
                      Separate bank account and quarterly reporting if foreign funds are accepted.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 12: Trust vs Society vs Section 8 Company Comparison */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Difference Between Trust, Society and Section 8 Company?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Choosing the right non-profit structure is critical. Here is a direct comparison across essential legal parameters:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-normal">Parameter</th>
                        <th className="py-2.5 px-3 font-normal text-[#00A86B]">Trust</th>
                        <th className="py-2.5 px-3 font-normal">Society</th>
                        <th className="py-2.5 px-3 font-normal">Section 8 Company</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_VS_SOCIETY_VS_SECTION8_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-2.5 px-3 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.trust}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.society}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.section8}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 13: Cancellation of Trust Registration */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Cancellation of Trust Registration?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Trust registration and 12A/80G status can be revoked under Section 12AB if the trust violates statutory non-profit criteria. Common causes include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-light text-slate-600">
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Non-filing of annual ITR-7 returns for consecutive fiscal years</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Misuse of trust funds or property for personal trustee enrichment</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Deviation from stated charitable objectives in the registered deed</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Failure to renew 12A or 80G registrations under Form 10AB</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Violation of FCRA provisions regarding foreign funding</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Court injunction or dissolution order by charity commissioner</span>
                  </div>
                </div>
              </div>

              {/* Section 14: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Trust Registration Services?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Expert Legal Drafting Team
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Custom deeds crafted by seasoned legal draftsmen ensuring complete compliance with the Indian Trusts Act and Income Tax provisions.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      12A &amp; 80G Guaranteed Support
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Complete filing on the Income Tax Portal via Form 10A / 10AB to secure 100% tax exemption and donor deduction eligibility.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Local Sub-Registrar Coordination
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Clear guidance on state stamp duty, appointment scheduling, and document execution at your designated jurisdictional office.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Annual Compliance &amp; ITR-7
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Ongoing annual accounting, Form 10B audit coordination, and annual ITR-7 filing support to maintain active compliance year after year.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Card 1: Consult Experts Banner */}
              <div
                onClick={() => setIsContactOpen(true)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F1646] to-[#382B7D] p-5 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <HeartHandshake className="w-6 h-6 text-[#00B074]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-white group-hover:text-emerald-300 transition-colors">
                      Consult a Trust Legal Expert
                    </h3>
                    <p className="text-[12px] font-light text-slate-300 mt-0.5">
                      Get personalized counsel on Trust Deed clauses, 12A/80G, and state stamp duty.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>Speak to a Legal Specialist</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 2: Related Guides */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-5">
                <div className="w-8 h-[2px] bg-[#00A86B] rounded-full mb-3" />
                <h3 className="text-[14px] font-medium text-slate-900 mb-3">
                  Related Guides &amp; Resources
                </h3>
                <nav className="space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <a
                    href="/section-8-company-registration"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Section 8 Non-Profit vs Trust</span>
                  </a>
                  <a
                    href="/one-person-company"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>One Person Company (OPC) Registration</span>
                  </a>
                  <a
                    href="/partnership"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Partnership Firm Registration in India</span>
                  </a>
                  <a
                    href="/proprietorship"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Sole Proprietorship Registration</span>
                  </a>
                  <a
                    href="/startup"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors pb-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>12A &amp; 80G Tax Exemption Guide</span>
                  </a>
                </nav>
              </div>

              {/* Card 3: State-wise Trust Registration Links */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-[2px] bg-[#00A86B] rounded-full" />
                  <button
                    type="button"
                    onClick={() => setStateListOpen(!stateListOpen)}
                    className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {stateListOpen ? "Collapse ⌃" : "Expand ⌵"}
                  </button>
                </div>
                <h3 className="text-[14px] font-medium text-slate-900 mb-1">
                  Trust Registration by State
                </h3>
                <p className="text-[11.5px] font-light text-slate-400 mb-3">
                  Check state-specific stamp duty and Sub-Registrar requirements:
                </p>
                {stateListOpen && (
                  <div className="max-h-[300px] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin text-[12px] font-light">
                    {INDIAN_STATES.slice(0, 16).map((st) => (
                      <div
                        key={st}
                        onClick={() => setIsContactOpen(true)}
                        className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-emerald-50/60 text-slate-600 hover:text-[#00A86B] transition-colors cursor-pointer"
                      >
                        <span>Trust Registration in {st}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section (2-Column Grid Matching Reference) */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="w-10 h-[3px] bg-[#00A86B] rounded-full mb-3" />
            <h2 className="text-2xl sm:text-[28px] font-normal text-[#111827]">
              Frequently asked questions
            </h2>
            <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500 mt-1">
              Common questions answered about Trust creation, Trustee criteria, 12A &amp; 80G tax exemptions, and annual filing.
            </p>
          </div>

          {/* 2-Column FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Column 1 */}
            <div className="space-y-3.5">
              {(showMoreFaqs ? FAQ_COL_1 : FAQ_COL_1.slice(0, 5)).map((faq, idx) => {
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
                      <div className="px-5 pb-4.5 pt-1 text-[13px] font-light text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAF9F7]/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              {(showMoreFaqs ? FAQ_COL_2 : FAQ_COL_2.slice(0, 5)).map((faq, idx) => {
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
                      <div className="px-5 pb-4.5 pt-1 text-[13px] font-light text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAF9F7]/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Load More FAQs Button */}
          <div className="text-center mt-9 mb-14">
            <button
              type="button"
              onClick={() => setShowMoreFaqs(!showMoreFaqs)}
              className="px-6 py-2.5 rounded-lg bg-[#00A86B] hover:bg-[#00925d] text-white text-[13.5px] font-medium transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>{showMoreFaqs ? "Show less questions" : "Load more questions (10 more)"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showMoreFaqs ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Related Services - Business Registration Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 mb-6">
            <h3 className="font-normal text-[15px] sm:text-[16px] text-slate-800 mb-4">
              Related Services - Business &amp; Non-Profit Registration
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
        serviceTitle="Trust Registration Online in India"
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
