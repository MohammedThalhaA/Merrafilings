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
      <span className="text-[17px] font-bold tracking-tighter text-slate-800">
        CRED
      </span>
    ),
  },
  {
    name: "meesho",
    logo: (
      <span className="text-[16px] font-extrabold tracking-tight text-[#9A216A]">
        meesho
      </span>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-1 font-bold text-[#0C2340] text-[15px]">
        <span className="text-[#0C6CF2]">R</span>azorpay
      </div>
    ),
  },
  {
    name: "Zepto",
    logo: (
      <span className="text-[17px] font-black tracking-tight text-[#7915F7]">
        zepto
      </span>
    ),
  },
  {
    name: "slice",
    logo: (
      <span className="text-[17px] font-bold tracking-tight text-[#7C3AED]">
        slice
      </span>
    ),
  },
  {
    name: "Khatabook",
    logo: (
      <span className="text-[15px] font-bold text-slate-800">
        Khata<span className="text-red-500">book</span>
      </span>
    ),
  },
  {
    name: "mamaearth",
    logo: (
      <span className="text-[14px] font-semibold text-[#00A86B] tracking-wide">
        mamaearth
      </span>
    ),
  },
  {
    name: "GROWW",
    logo: (
      <span className="text-[15px] font-semibold text-slate-700 tracking-wider">
        GROWW
      </span>
    ),
  },
  {
    name: "Lenskart",
    logo: (
      <span className="text-[15px] font-bold text-[#000042]">
        lenskart
      </span>
    ),
  },
];

const TRUST_TYPES_TABLE = [
  {
    type: "Public Charitable Trust",
    purpose: "Education, healthcare, poverty relief, environmental & social welfare for general public",
    governedBy: "State Public Trusts Acts (e.g. Bombay Public Trust Act) / Sub-Registrar",
  },
  {
    type: "Private Family Trust",
    purpose: "Asset protection, estate planning, succession & financial support for specific family beneficiaries",
    governedBy: "Indian Trusts Act, 1882",
  },
  {
    type: "Religious Trust",
    purpose: "Establishment, maintenance and worship of temples, shrines, religious institutions and rituals",
    governedBy: "Religious Endowments Acts / Relevant State Religious Boards",
  },
  {
    type: "Revocable Trust",
    purpose: "Flexible estate planning trust where the settlor retains the legal right to alter or cancel terms",
    governedBy: "Indian Trusts Act, 1882",
  },
  {
    type: "Irrevocable Trust",
    purpose: "Permanent transfer of assets where terms cannot be dissolved without court/beneficiary consent",
    governedBy: "Indian Trusts Act, 1882 / Income Tax Act (12A & 80G)",
  },
];

const TRUST_DOCUMENTS_TABLE = [
  {
    document: "Original Trust Deed",
    purpose: "Foundational charter executed on non-judicial stamp paper with full object clauses",
    format: "Stamp Paper with Original Signatures",
  },
  {
    document: "PAN Card of Settlor & Trustees",
    purpose: "Identity and taxation verification for all appointed trustees",
    format: "Self-attested Digital Copy",
  },
  {
    document: "Aadhaar / Passport / Voter ID",
    purpose: "Address and Indian nationality verification of settlor & minimum 2 trustees",
    format: "Clear Color Scans (Self-attested)",
  },
  {
    document: "Registered Office Address Proof",
    purpose: "Physical office location for all official communication and Sub-Registrar jurisdiction",
    format: "Electricity Bill or Water Bill (< 2 months old)",
  },
  {
    document: "No Objection Certificate (NOC)",
    purpose: "Written consent from the property owner permitting trust registered office operations",
    format: "Signed NOC with ownership document/rent deed",
  },
  {
    document: "Passport Size Photographs",
    purpose: "Biometric and physical records for sub-registrar ledger registration",
    format: "2 Recent Color Photos per Trustee",
  },
  {
    document: "Two Witnesses with Valid IDs",
    purpose: "Independent witnesses present during deed execution at the Sub-Registrar office",
    format: "PAN & Aadhaar cards of 2 witnesses",
  },
];

const TRUST_ITR7_TABLE = [
  {
    particular: "Applicable Entity",
    details: "Charitable Trusts, Religious Trusts, NGOs, and Institutions claiming tax exemption",
  },
  {
    particular: "Income Tax Sections Covered",
    details: "Sections 11, 12, 12A, 12AA, 12AB, and 13 of the Income Tax Act, 1961",
  },
  {
    particular: "Annual Due Date",
    details: "31st October every year (for audited trusts) / 31st July (non-audit)",
  },
  {
    particular: "Mandatory Audit Requirement",
    details: "Form 10B / Form 10BB audit report mandatory if total gross income exceeds ₹2.5 Lakhs",
  },
  {
    particular: "E-Filing Verification",
    details: "Digital Signature Certificate (DSC) of the Managing Trustee or Electronic Verification Code (EVC)",
  },
];

const TRUST_VS_SOCIETY_VS_SECTION8_TABLE = [
  {
    parameter: "Governing Legislation",
    trust: "Indian Trusts Act, 1882 / State Acts",
    society: "Societies Registration Act, 1860",
    section8: "Companies Act, 2013 (Central MCA)",
  },
  {
    parameter: "Minimum Members / Promoters",
    trust: "Minimum 2 Trustees",
    society: "Minimum 7 Members",
    section8: "Minimum 2 Directors & Shareholders",
  },
  {
    parameter: "Registering Authority",
    trust: "Local Sub-Registrar / Charity Commissioner",
    society: "Registrar of Societies (State Level)",
    section8: "Ministry of Corporate Affairs (Central Govt)",
  },
  {
    parameter: "Charter Document",
    trust: "Trust Deed on Stamp Paper",
    society: "Memorandum & Rules/Regulations",
    section8: "MOA & AOA (INC-33 & INC-34)",
  },
  {
    parameter: "Tax Exemption Benefits",
    trust: "Eligible for 12A & 80G",
    society: "Eligible for 12A & 80G",
    section8: "Eligible for 12A & 80G",
  },
  {
    parameter: "Foreign Funding (FCRA)",
    trust: "Eligible after 3 years audit",
    society: "Eligible after 3 years audit",
    section8: "Eligible after 3 years audit (Higher credibility)",
  },
  {
    parameter: "Legal Standing & Donor Trust",
    trust: "High for family & traditional charity",
    society: "Moderate for community clubs/groups",
    section8: "Highest globally for institutional & CSR grants",
  },
  {
    parameter: "Annual Compliance Burden",
    trust: "Low to Moderate (ITR-7 & Local Returns)",
    society: "Moderate (Annual general body meetings)",
    section8: "High (AOC-4, MGT-7, Statutory ROC filings)",
  },
];

const TRUST_FAQS = [
  {
    q: "What is a Trust and what is Trust Registration in India?",
    a: "A trust is a legal arrangement where a property owner (the Settlor) transfers assets or funds to trusted individuals (Trustees) to hold and manage for the benefit of third parties (Beneficiaries) or for charitable and public causes. Trust registration is the legal execution of this arrangement under the Indian Trusts Act, 1882 or relevant State Public Trust Acts through registration at the Sub-Registrar office.",
  },
  {
    q: "How many trustees are required to register a trust in India?",
    a: "A minimum of 2 trustees is required to register a trust in India. While there is no statutory upper limit on the maximum number of trustees, at least two individuals are necessary to administer trust affairs and safeguard proper governance.",
  },
  {
    q: "Can the author/settlor of the trust also be a trustee?",
    a: "Yes, in most public charitable trusts in India, the Settlor (the person who establishes the trust and contributes the initial corpus) can also act as one of the trustees, typically designated as the Founder Trustee or Managing Trustee, along with at least one other independent co-trustee.",
  },
  {
    q: "What is a Trust Deed and why is it essential?",
    a: "A Trust Deed is the foundational constitutional legal instrument of the trust. Printed on non-judicial stamp paper, it outlines the trust’s legal name, registered address, aims and charitable objectives, trustee powers, rules of succession, and financial guidelines. Without a registered Trust Deed, legal recognition and tax exemptions cannot be obtained.",
  },
  {
    q: "What is Section 12A registration, and how does it benefit a trust?",
    a: "Section 12A (now 12AB) of the Income Tax Act provides 100% income tax exemption to charitable and religious trusts. Once 12A registration is granted by the Principal Commissioner of Income Tax, the entire surplus income of the trust is exempt from income tax, provided it is utilized for charitable activities as per statutory norms.",
  },
  {
    q: "What is Section 80G registration, and why is it crucial for fundraising?",
    a: "Section 80G registration allows donors (individuals, businesses, and corporates) to claim a 50% or 100% deduction on their donations from their taxable income. This provides an enormous incentive for philanthropists and CSR committees to contribute grants and donations to your trust.",
  },
  {
    q: "Can a registered trust operate across multiple states in India?",
    a: "Yes! A trust registered with the local Sub-Registrar in one state can carry out charitable activities, establish branch offices, and operate across all states in India, provided its registered Trust Deed explicitly permits nationwide operations under its territorial jurisdiction clause.",
  },
  {
    q: "What is the difference between a Public Trust and a Private Trust?",
    a: "A Public Charitable Trust is created for the benefit of an uncertain and fluctuating body of individuals (the public at large), focusing on causes such as education, healthcare, or poverty alleviation. A Private Trust is created for the benefit of specific individuals or family members, typically for estate succession and asset protection.",
  },
  {
    q: "Is obtaining a PAN card mandatory for a registered trust?",
    a: "Yes. Once the Trust Deed is registered with the Sub-Registrar, obtaining a separate PAN card in the name of the trust is mandatory to open a dedicated bank current account, receive donations, apply for 12A/80G exemptions, and file annual ITR-7 returns.",
  },
  {
    q: "What annual compliances must a registered trust complete?",
    a: "Registered trusts must maintain regular books of accounts, get their accounts audited by a Chartered Accountant in Form 10B/10BB if gross receipts exceed ₹2.5 Lakhs, file the annual Income Tax Return in Form ITR-7 by 31st October, and submit periodic activity reports if required by state charity authorities.",
  },
  {
    q: "Can a trust receive foreign donations or grants?",
    a: "To receive foreign contributions or international donor grants, the trust must obtain FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs (MHA). Usually, a trust must have been active for at least 3 years and spent a minimum of ₹15 Lakhs on its core charitable objectives before applying for FCRA.",
  },
  {
    q: "Can a trust engage in commercial or profit-making business activities?",
    a: "A charitable trust cannot engage in commercial business purely for profit. However, under Section 11(4A) of the Income Tax Act, business activities that are incidental to the attainment of the trust’s charitable objectives are permitted, provided separate books of accounts are maintained.",
  },
];

export default function TrustRegistrationPage() {
  // Modal states
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing card detail expand states
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // FAQ states
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [faqLimit, setFaqLimit] = useState(6);

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
      {/* Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 bg-gradient-to-b from-[#F7F6FF] via-[#FAF9F7] to-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-light text-slate-400 mb-6">
            <a href="/" className="hover:text-slate-700 transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/registrations" className="hover:text-slate-700 transition-colors">
              Registrations
            </a>
            <span>/</span>
            <span className="text-slate-600 font-normal">
              Trust Registration Online in India
            </span>
          </nav>

          {/* Title and Tagline */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-medium mb-4 shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Charitable &amp; Private Trust Registration under Indian Trusts Act</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-[#1F1646] leading-tight sm:leading-snug tracking-tight">
              Trust Registration Online{" "}
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
                in India
              </span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-[15px] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Establish a legally recognized Charitable or Private Trust in India with expert legal guidance. Complete Trust Deed drafting, trustee appointment, Sub-Registrar execution, PAN registration, and 12A &amp; 80G tax exemptions.
            </p>
          </div>

          {/* Hero Journey Card (Form & Value Props) */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/80 bg-white/95 shadow-xl shadow-slate-900/5 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Key Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] leading-snug">
                    Start Your Non-Profit or Private Trust
                  </h2>
                  <p className="text-xs sm:text-[13px] font-light text-slate-500 mt-1.5 leading-relaxed">
                    Legally safeguard your philanthropic vision or family assets with complete end-to-end deed drafting, Sub-Registrar guidance, and taxation assistance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-purple-100/80 flex items-center justify-center shrink-0 text-[#6B4BFF]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        Expert Trust Deed Drafting
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Tailored objectives &amp; powers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0 text-[#00A86B]">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        12A &amp; 80G Tax Exemption
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        100% tax relief &amp; donor benefits
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center shrink-0 text-blue-600">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        Sub-Registrar Guidance
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Execution &amp; stamp duty support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/80 flex items-center justify-center shrink-0 text-amber-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        Fast 5–7 Days Delivery
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Deed ready with PAN &amp; bank help
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-features checklist */}
                <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs font-light text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>Minimum Only 2 Trustees Required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>Nationwide Operational Freedom</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>Complete Annual ITR-7 Support</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#FAF9F7] to-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="mb-4 text-center sm:text-left">
                  <h3 className="text-[17px] font-medium text-[#1F1646]">
                    Start Your Trust Registration
                  </h3>
                  <p className="text-xs font-light text-slate-500 mt-0.5">
                    Provide your details for custom deed drafting and local stamp duty advice.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00A86B] mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <h4 className="text-[16px] font-medium text-slate-800">
                      Enquiry Submitted Successfully!
                    </h4>
                    <p className="text-xs font-light text-slate-600 max-w-xs mx-auto">
                      Thank you, {formName}. Our Senior Non-Profit &amp; Trust Law Specialist will connect with you within 15 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-medium text-[#00A86B] underline pt-2"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroFormSubmit} className="space-y-3">
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
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
                        placeholder="Email Address *"
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
                        <option value="">Select State of Registration *</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Action Buttons */}
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
                        Continue Application
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
                      <span>★</span><span>★</span><span>★</span><span>★</span>
                      <span className="relative inline-block text-slate-300">
                        ★
                        <span className="absolute inset-0 overflow-hidden w-[40%] text-amber-400">★</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11.5px] font-light text-slate-500">Verified Client Reviews</p>
                </div>
              </div>

              {/* Card 2: 15+ Years of Experience */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(217,119,6,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8E7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#D97706] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">15+ Years</p>
                  <p className="text-[11.5px] font-light text-slate-500">Non-Profit &amp; Trust Law</p>
                </div>
              </div>

              {/* Card 3: 2 Lakh+ Customers */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(107,75,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Users className="w-5 h-5 text-[#6B4BFF] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">50,000+ Trusts</p>
                  <p className="text-[11.5px] font-light text-slate-500">Drafted &amp; Registered</p>
                </div>
              </div>

              {/* Card 4: App Tracking */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-emerald-200 hover:shadow-[0_8px_25px_rgba(0,176,116,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <Smartphone className="w-5 h-5 text-[#00B074] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">12A &amp; 80G Support</p>
                  <p className="text-[11.5px] font-light text-slate-500">Tax Exemption Filing</p>
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

      {/* Pricing Section */}
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
                    {expandedCard === 1 ? "less" : "more"}
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
                    {expandedCard === 2 ? "less" : "more"}
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

            {/* Package 3: Trust Deed, ITR, 12A & 80G (Most Popular) */}
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
                    {expandedCard === 3 ? "less" : "more"}
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

      {/* Main Content & Sidebar Section */}
      <section className="py-12 bg-[#FAF9F7]/50 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Comprehensive Guide Content */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-2xs space-y-10">
              {/* Section 1: Introduction */}
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-normal text-[#1F1646] mb-3">
                  Trust Registration Online in India
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                  Registering a trust in India establishes a strong, enduring legal foundation for managing charitable, religious, educational, or private family succession objectives. Whether you intend to launch an NGO to serve society or create a private vehicle to safeguard ancestral assets, trust registration provides distinct legal recognition, perpetual existence, and comprehensive tax exemption under the Indian Trusts Act, 1882 and the Income Tax Act, 1961.
                </p>
              </div>

              {/* Section 2: What is a Trust */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a Trust and Why Register in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                  Under the Indian Trusts Act, 1882, a trust is defined as an obligation annexed to the ownership of property, arising out of a confidence reposed in and accepted by the owner, or declared and accepted by him, for the benefit of another. The three essential parties involved are:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px] font-light text-slate-700">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      1. The Settlor / Author
                    </strong>
                    The individual or entity who creates the trust and dedicates property or funds to the trust corpus.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      2. The Trustees
                    </strong>
                    The trusted fiduciaries who hold legal title to trust assets and administer them solely for the trust’s objectives.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      3. The Beneficiaries
                    </strong>
                    The third parties or general public who receive the welfare benefits, scholarships, healthcare, or distributions.
                  </div>
                </div>
              </div>

              {/* Section 3: Types of Trusts in India Table (Zero Shake) */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Types of Trusts in India
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  India recognizes several trust classifications based on the intended purpose, governing statutes, and beneficiary groups:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Type of Trust</th>
                        <th className="py-3 px-4 font-normal">Purpose &amp; Scope</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Governing Law</th>
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
                  Core Characteristics of a Registered Trust
                </h2>
                <div className="space-y-3 text-[13px] font-light text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Distinct Legal Recognition:</strong> A registered trust is legally recognized by the government, banks, court systems, and philanthropic foundations to enter contracts and own real estate.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Asset &amp; Corpus Protection:</strong> Trust properties are completely ring-fenced from the personal creditors and private liabilities of individual trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">12A &amp; 80G Tax Exemption Eligibility:</strong> Only legally registered trusts can apply for 100% income tax exemption under Section 12A and issue 50% tax exemption receipts under Section 80G.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Perpetual Succession:</strong> The trust continues indefinitely regardless of resignation, addition, retirement, or demise of the original founding trustees.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Documents Required Table (Zero Shake) */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for Trust Registration
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  To register the Trust Deed at the local Sub-Registrar office, the following documentation must be prepared and authenticated:
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

              {/* Section 6: Step-by-Step Procedure */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step Trust Registration Procedure in India
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Select Trust Name &amp; Settle Objects
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Choose a unique name that does not violate the Emblems and Names Act. Draft clear, unambiguous charitable or private objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Draft the Comprehensive Trust Deed
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Prepare the legal deed incorporating trustee powers, beneficiary rules, quorum of meetings, bank account operation, and dissolution clauses.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Stamp Paper Purchase &amp; Execution
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Print the Trust Deed on non-judicial stamp paper of prescribed state stamp duty (e.g. ₹500 to ₹2,000 depending on state and corpus).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Registration at Sub-Registrar Office
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        The Settlor, trustees, and 2 witnesses appear before the Sub-Registrar of the jurisdiction where the registered office is located for deed execution and biometric photo verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Apply for Trust PAN &amp; TAN Card
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Once the certified deed is collected, submit an online PAN application in Form 49A to obtain the trust’s dedicated Permanent Account Number.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00A86B] font-medium text-xs flex items-center justify-center shrink-0">
                      6
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Open Bank Current Account &amp; File Form 10A (12A &amp; 80G)
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Open a bank account in the trust name. File electronic application Form 10A on the Income Tax Portal to secure 12A and 80G registration certificates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: ITR-7 Filing Details Table (Zero Shake) */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Annual Income Tax Return Filing (ITR-7) for Trusts
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Every registered trust claiming exemption under Sections 11 and 12 must file annual tax returns using Form ITR-7 to protect its tax-free status:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Compliance Particular</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Statutory Provision &amp; Rule</th>
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

              {/* Section 8: Trust vs Society vs Section 8 Company Comparison (Zero Shake) */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Trust vs Society vs Section 8 Company Comparison
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Detailed comparison across key parameters to help you choose the right non-profit or asset holding structure:
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

              {/* Section 9: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Trust Registration Services?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Senior Legal Drafting Team
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

            {/* Right Column: Sticky Sidebar */}
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
                <div className="w-8 h-[2px] bg-[#00A86B] rounded-full mb-3" />
                <h3 className="text-[14px] font-medium text-slate-900 mb-2">
                  Trust Registration by State
                </h3>
                <p className="text-[11.5px] font-light text-slate-400 mb-3">
                  Check state-specific stamp duty and Sub-Registrar requirements:
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="w-10 h-[3px] bg-[#00A86B] rounded-full mb-3" />
            <h2 className="text-2xl sm:text-[28px] font-normal text-[#111827]">
              Frequently Asked Questions
            </h2>
            <p className="text-[13px] sm:text-[13.5px] font-light text-slate-500 mt-1">
              Common questions answered about Trust creation, Trustee criteria, 12A &amp; 80G tax exemptions, and annual filing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRUST_FAQS.slice(0, faqLimit).map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#00B074] shadow-[0_0_0_3px_rgba(0,176,116,0.08)]"
                      : "border-slate-200/90 hover:border-[#00B074] hover:shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className="text-[13.5px] font-normal text-slate-800 leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#00A86B]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-[12.5px] font-light text-slate-600 leading-relaxed bg-[#FAF9F7]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Load More FAQs Button */}
          {faqLimit < TRUST_FAQS.length && (
            <div className="text-center mt-8">
              <button
                type="button"
                onClick={() => setFaqLimit(TRUST_FAQS.length)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:text-[#00A86B] hover:border-[#00A86B] transition-all shadow-3xs cursor-pointer"
              >
                <span>Load more questions ({TRUST_FAQS.length - faqLimit} more)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
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
    </div>
  );
}
