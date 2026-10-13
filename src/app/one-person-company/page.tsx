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
  Briefcase,
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
    name: "CARDS",
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

const OPC_DOCUMENTS_TABLE = [
  {
    document: "PAN Card (Director & Nominee)",
    purpose: "Mandatory identity & taxation verification",
    format: "Self-attested Digital Copy",
  },
  {
    document: "Aadhaar Card / Passport / Voter ID",
    purpose: "Residential and nationality proof",
    format: "Clear Color Scan (Self-attested)",
  },
  {
    document: "Bank Statement / Electricity Bill",
    purpose: "Personal address verification (must be under 2 months old)",
    format: "Latest 2 Months Statement / Utility Bill",
  },
  {
    document: "Registered Office Address Proof",
    purpose: "Proof of principal place of business operations",
    format: "Electricity Bill, Gas Bill or Water Bill (< 2 months)",
  },
  {
    document: "NOC from Property Owner",
    purpose: "Written authorization to use the property for OPC office",
    format: "Signed NOC with ownership document/rent deed",
  },
  {
    document: "Form INC-3 (Nominee Consent)",
    purpose: "Written legal consent of the nominee to assume directorship",
    format: "Signed Form INC-3 with nominee ID & address proof",
  },
  {
    document: "MOA & AOA (e-MOA & e-AOA)",
    purpose: "Charter governing company objectives and internal management",
    format: "MCA SPICe+ INC-33 & INC-34 digitally signed",
  },
];

const OPC_COST_BREAKDOWN_TABLE = [
  {
    component: "SPICe+ Part A (Name Approval)",
    cost: "₹1,000",
    remarks: "MCA filing charges for 2 name choices via RUN portal",
  },
  {
    component: "MCA Govt Incorporation Fee",
    cost: "₹0",
    remarks: "Waived by MCA for capital up to ₹15 Lakhs under Ease of Doing Business",
  },
  {
    component: "State Stamp Duty (MOA & AOA)",
    cost: "₹500 – ₹2,500",
    remarks: "Varies state-wise depending on registered office location",
  },
  {
    component: "Class-3 DSC (Director & Nominee)",
    cost: "₹1,500 – ₹2,500",
    remarks: "Digital Signature Certificate with 2-year validity & e-Token",
  },
  {
    component: "PAN, TAN & AGILE-PRO-S",
    cost: "₹130",
    remarks: "Integrated allotment of PAN, TAN, EPFO, ESIC & Profession Tax",
  },
  {
    component: "Professional Legal Filing",
    cost: "₹2,899",
    remarks: "End-to-end documentation, filing & ROC follow-up by Merrafilings",
  },
];

const OPC_TIMELINE_TABLE = [
  {
    stage: "1. Name Availability & Reservation",
    time: "1 – 2 Days",
    description: "Online name search and MCA approval via SPICe+ Part A / RUN",
  },
  {
    stage: "2. DSC Procurement",
    time: "1 Day",
    description: "Class-3 Digital Signature Certificate issuance via video KYC",
  },
  {
    stage: "3. Drafting MOA, AOA & Nominee INC-3",
    time: "1 – 2 Days",
    description: "Drafting e-MOA (INC-33), e-AOA (INC-34), and nominee declarations",
  },
  {
    stage: "4. SPICe+ Part B & AGILE-PRO-S Submission",
    time: "1 Day",
    description: "Uploading digital forms and statutory declarations on MCA V3 portal",
  },
  {
    stage: "5. Central Registration Centre (CRC) Review",
    time: "2 – 4 Days",
    description: "Scrutiny and verification of documents by MCA Registrar",
  },
  {
    stage: "6. Incorporation Certificate & PAN/TAN",
    time: "1 Day",
    description: "Instant issuance of Certificate of Incorporation with CIN, PAN & TAN",
  },
  {
    stage: "Total Estimated Turnaround Time",
    time: "7 – 10 Working Days",
    description: "Complete legal incorporation from start to certificate download",
  },
];

const OPC_ANNUAL_COMPLIANCE_TABLE = [
  {
    compliance: "Form AOC-4 (Financial Statements Filing)",
    dueDate: "Within 180 days of FY closure (27th September)",
    frequency: "Annually",
    description: "Filing of Balance Sheet, Profit & Loss account, and Auditor's report",
  },
  {
    compliance: "Form MGT-7A (Abridged Annual Return)",
    dueDate: "Within 60 days of completion of 180 days from FY end",
    frequency: "Annually",
    description: "Simplified annual return designed specifically for OPCs and Small Companies",
  },
  {
    compliance: "Form DIR-3 KYC (Director KYC Verification)",
    dueDate: "On or before 30th September every year",
    frequency: "Annually",
    description: "Annual biometric/OTP verification for all DIN holders to keep status active",
  },
  {
    compliance: "Income Tax Return (ITR-6)",
    dueDate: "31st October (if tax audit applies) / 31st July",
    frequency: "Annually",
    description: "Corporate income tax return filing with Income Tax Department",
  },
  {
    compliance: "Form ADT-1 (Statutory Auditor Appointment)",
    dueDate: "Within 15 days of first AGM / Appointment",
    frequency: "Every 5 Years",
    description: "Formal notification to ROC regarding appointment of Statutory Auditor",
  },
  {
    compliance: "Statutory Registers & Board Minutes",
    dueDate: "Maintained regularly throughout the year",
    frequency: "Continuous",
    description: "Record of resolutions passed by single director and member",
  },
];

const OPC_VS_OTHER_COMPARISON = [
  {
    feature: "Ownership / Shareholders",
    opc: "Only 1 Individual (Natural Indian citizen)",
    pvtLtd: "Minimum 2, Maximum 200",
    llp: "Minimum 2 Partners, No limit",
    proprietor: "Only 1 Individual",
  },
  {
    feature: "Directors Required",
    opc: "Minimum 1, Maximum 15",
    pvtLtd: "Minimum 2, Maximum 15",
    llp: "Minimum 2 Designated Partners",
    proprietor: "1 (Owner itself)",
  },
  {
    feature: "Nominee Appointment",
    opc: "Mandatory (Form INC-3)",
    pvtLtd: "Not Applicable",
    llp: "Not Applicable",
    proprietor: "Nomination optional",
  },
  {
    feature: "Personal Liability",
    opc: "Limited to share capital",
    pvtLtd: "Limited to share capital",
    llp: "Limited to capital contribution",
    proprietor: "Unlimited (Personal assets at risk)",
  },
  {
    feature: "Legal Status",
    opc: "Separate Legal Entity",
    pvtLtd: "Separate Legal Entity",
    llp: "Separate Legal Entity",
    proprietor: "No Separate Legal Entity",
  },
  {
    feature: "Annual General Meeting (AGM)",
    opc: "Exempt (Not required)",
    pvtLtd: "Mandatory every year",
    llp: "Exempt",
    proprietor: "Exempt",
  },
  {
    feature: "FDI / Foreign Investment",
    opc: "Not Permitted",
    pvtLtd: "Allowed (100% Automatic in most sectors)",
    llp: "Allowed under automatic route",
    proprietor: "Not Permitted",
  },
  {
    feature: "Tax Rate",
    opc: "22% base + surcharge (Sec 115BAA)",
    pvtLtd: "22% base + surcharge (Sec 115BAA)",
    llp: "30% base + surcharge",
    proprietor: "Individual Slab Rates (up to 39%)",
  },
];

const OPC_FAQS = [
  {
    q: "What is a One Person Company (OPC) in India?",
    a: "An OPC (One Person Company) is a recognized corporate business structure introduced under Section 2(62) of the Companies Act, 2013. It allows a single entrepreneur to operate as a full corporate entity with limited liability protection, a distinct legal personality, and perpetual succession, combining the simplicity of a sole proprietorship with the legal safeguards of a private limited company.",
  },
  {
    q: "Who is eligible to register an OPC in India?",
    a: "Only a natural person who is an Indian citizen (whether resident in India or non-resident/NRI) is eligible to incorporate an OPC and act as its nominee. A person cannot incorporate more than one OPC or be a nominee in more than one OPC at the same time. Minors are strictly prohibited from holding shares or being nominated.",
  },
  {
    q: "Why is a Nominee required in an OPC, and what is Form INC-3?",
    a: "Because an OPC has only one shareholder, Section 3(1)(c) of the Companies Act requires the sole member to nominate an individual who will assume ownership of the company in the event of the member's death or mental incapacity. The nominee must provide prior written consent in Form INC-3, ensuring unbroken perpetual succession.",
  },
  {
    q: "What is the minimum capital required to incorporate an OPC?",
    a: "There is zero minimum paid-up capital requirement to register an OPC in India under the Companies Act, 2013. You can start with an authorized capital as low as ₹10,000 or ₹1,00,000, and there is no obligation to deposit large sums into the corporate bank account prior to incorporation.",
  },
  {
    q: "Can an OPC be converted into a Private Limited Company?",
    a: "Yes! Following the MCA amendment rules, an OPC can now voluntarily convert into a Private Limited Company or Public Limited Company at any time without waiting for mandatory thresholds. You simply need to increase the number of members to at least 2 and directors to at least 2 and file the relevant ROC forms.",
  },
  {
    q: "Can an OPC raise funds from angel investors or venture capital?",
    a: "An OPC cannot directly issue shares to outside investors because it can only have one shareholder by definition. However, if an investor wishes to invest equity, the OPC can easily be converted into a Private Limited Company, allowing new shares to be allotted seamlessly.",
  },
  {
    q: "Is holding an Annual General Meeting (AGM) mandatory for an OPC?",
    a: "No. Section 96(1) of the Companies Act explicitly exempts One Person Companies from holding Annual General Meetings (AGMs). All member resolutions can simply be recorded in the company minute book signed by the sole member, substantially reducing compliance hassle.",
  },
  {
    q: "Can an OPC carry out Non-Banking Financial (NBFC) or investment activities?",
    a: "No. Under the Companies (Incorporation) Rules, 2014, an OPC is strictly prohibited from carrying out Non-Banking Financial Investment activities, including investment in securities of other corporate bodies, or converting into a Section 8 (non-profit) company.",
  },
  {
    q: "What documents are required for the registered office of an OPC?",
    a: "You need a copy of the latest utility bill (electricity, water, or piped gas bill not older than 2 months), rent agreement along with rent receipts if rented, and a signed No Objection Certificate (NOC) from the property owner granting permission to use the address.",
  },
  {
    q: "What is the difference between an OPC and a Sole Proprietorship?",
    a: "A sole proprietorship has no legal separation between the business and the individual, meaning the owner has unlimited personal liability for business debts. An OPC is an independent legal entity registered with the MCA; the owner's personal assets are 100% protected, and the company has perpetual succession.",
  },
  {
    q: "How long does it take to register an OPC with Merrafilings?",
    a: "With complete and valid documents, the entire incorporation process takes approximately 7 to 10 working days. This includes name reservation, DSC issuance, SPICe+ form drafting, MCA CRC scrutiny, and issuance of the Certificate of Incorporation with PAN and TAN.",
  },
  {
    q: "What ongoing annual compliances must an OPC fulfill?",
    a: "An OPC must file Form AOC-4 (financial statements) within 180 days of financial year end, Form MGT-7A (abridged annual return), file Form DIR-3 KYC for the director by 30th September, and file the annual Income Tax Return (ITR-6) by 31st October.",
  },
];

export default function OnePersonCompanyPage() {
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
            <a href="/startup" className="hover:text-slate-700 transition-colors">
              Startup
            </a>
            <span>/</span>
            <span className="text-slate-600 font-normal">
              One Person Company (OPC) Registration
            </span>
          </nav>

          {/* Title and Tagline */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-medium mb-4 shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>100% Digital MCA SPICe+ Incorporation for Solo Entrepreneurs</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-[#1F1646] leading-tight sm:leading-snug tracking-tight">
              One Person Company (OPC){" "}
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
                Registration in India
              </span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-[15px] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Empower your solopreneurship with full corporate identity, limited liability protection, and 100% personal control. Get complete MCA SPICe+ approval, e-MOA & e-AOA, PAN, TAN, and Certificate of Incorporation with dedicated CA support.
            </p>
          </div>

          {/* Hero Journey Card (Form & Value Props) */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/80 bg-white/95 shadow-xl shadow-slate-900/5 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Key Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] leading-snug">
                    Launch Your OPC with Zero Hassle
                  </h2>
                  <p className="text-xs sm:text-[13px] font-light text-slate-500 mt-1.5 leading-relaxed">
                    Fast-track your incorporation with India’s trusted corporate filing partner. Complete documentation, nominee filing, and bank account opening included.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-purple-100/80 flex items-center justify-center shrink-0 text-[#6B4BFF]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        MCA Name Approval
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        SPICe+ Part A / RUN filing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0 text-[#00A86B]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        Limited Liability Shield
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        100% personal asset protection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center shrink-0 text-blue-600">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        e-MOA & e-AOA Drafting
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Custom objectives & nominee INC-3
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/80 flex items-center justify-center shrink-0 text-amber-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        7–10 Days Delivery
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Guaranteed timeline with CIN & PAN
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-features checklist */}
                <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs font-light text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>No Minimum Capital Required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>Zero Annual General Meeting Burden</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>Free Corporate Bank Account Assistance</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#FAF9F7] to-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="mb-4 text-center sm:text-left">
                  <h3 className="text-[17px] font-medium text-[#1F1646]">
                    Start Your OPC Registration
                  </h3>
                  <p className="text-xs font-light text-slate-500 mt-0.5">
                    Fill the details to get an instant cost estimate and expert call.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00A86B] mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <h4 className="text-[16px] font-medium text-slate-800">
                      Application Submitted!
                    </h4>
                    <p className="text-xs font-light text-slate-600 max-w-xs mx-auto">
                      Thank you, {formName}. Our Senior Company Incorporation Specialist will reach out to you within 15 minutes.
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
                        <option value="">Select State of Registered Office *</option>
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
                            `https://wa.me/918939885544?text=Hi,%20I%20want%20to%20register%20a%20One%20Person%20Company%20(OPC)`,
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
                  <p className="text-[11.5px] font-light text-slate-500">Verified Reviews</p>
                </div>
              </div>

              {/* Card 2: 15+ Years of Experience */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(217,119,6,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8E7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#D97706] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">15+ Years</p>
                  <p className="text-[11.5px] font-light text-slate-500">Corporate Law Experience</p>
                </div>
              </div>

              {/* Card 3: 2 Lakh+ Customers */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(107,75,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Users className="w-5 h-5 text-[#6B4BFF] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">2 Lakh+ Companies</p>
                  <p className="text-[11.5px] font-light text-slate-500">Incorporated Pan India</p>
                </div>
              </div>

              {/* Card 4: App Tracking */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-emerald-200 hover:shadow-[0_8px_25px_rgba(0,176,116,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <Smartphone className="w-5 h-5 text-[#00B074] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">Live ROC Tracking</p>
                  <p className="text-[11.5px] font-light text-slate-500">Status Updates on App</p>
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
              Clear, transparent pricing for your One Person Company with complete CA support and zero hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: OPC Incorporation */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  OPC Registration - Incorporation
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Register your company in just 7–10 days with online &amp; hassle-free MCA filing. Fully managed incorporation with complete documentation support...{" "}
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
                    Includes MCA name approval, Class-3 DSC, DIN allocation, e-MOA &amp; e-AOA drafting, Form INC-3 preparation, PAN, TAN, and Certificate of Incorporation.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹2,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ govt fees</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Fast 7–10 working days delivery
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>SPICe+ Part A (Name Reservation)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Class-3 DSC (1 Director + 1 Nominee)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Director Identification Number (DIN)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>e-MOA (INC-33) &amp; e-AOA (INC-34)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Company PAN &amp; TAN Allotment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Certificate of Incorporation (CIN)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Choose Incorporation
                </button>
              </div>
            </div>

            {/* Package 2: Standard Plan (Popular) */}
            <div className="group bg-white rounded-[22px] border-[2px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-[0_20px_40px_rgba(0,176,116,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B074] text-white text-[11px] font-medium tracking-wide uppercase px-3 py-0.5 rounded-full shadow-2xs">
                Most Popular
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  OPC Registration - Standard Plan
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Complete incorporation plus GST, MSME, and initial corporate governance setup to start operations and invoicing immediately...{" "}
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
                    Includes complete incorporation, GST registration, Udyam MSME certificate, first board resolution, share certificates, and dedicated compliance specialist.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹7,999
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ govt fees</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Includes GST &amp; MSME Registrations
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Everything in Incorporation Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>GST Registration Allotment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Udyam (MSME) Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>First Board Resolution &amp; Share Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Bank Current Account Zero-Balance Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>1-Year Compliance Advisory</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-white bg-[#00B074] hover:bg-[#009B66] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                  Choose Standard Plan
                </button>
              </div>
            </div>

            {/* Package 3: Incorporation & Compliance */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  OPC Incorporation &amp; Compliance
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Complete peace of mind: incorporation plus full 1st-year statutory ROC filings, DIR-3 KYC, Auditor appointment, and accounting software...{" "}
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
                    Comprehensive full-year compliance coverage including Form AOC-4, Form MGT-7A, DIR-3 KYC, Form ADT-1, corporate ITR-6 filing, and 12-month Ledgers cloud accounting software.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹19,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ govt fees</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Complete 1-Year ROC &amp; Tax Compliance
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Everything in Standard Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Annual ROC Filing: Form AOC-4 &amp; MGT-7A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Director Annual KYC (DIR-3 KYC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Statutory Auditor Appointment (ADT-1)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Corporate Income Tax Return (ITR-6)</span>
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
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Choose Full Compliance
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
                  One Person Company Registration Online in India
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                  One Person Company (OPC) registration in India allows a solo entrepreneur to establish a corporate business entity with full limited liability protection and an independent corporate personality. Governed by the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013, an OPC eliminates the need for finding a co-founder while providing the credibility, corporate banking access, and succession advantages previously reserved solely for multi-shareholder companies.
                </p>
              </div>

              {/* Section 2: What is an OPC */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a One Person Company?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                  Under Section 2(62) of the Companies Act, 2013, a One Person Company is defined as a company which has only one person as a member. The corporate structure features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-light text-slate-700">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Single Shareholder
                    </strong>
                    100% equity is held by one natural Indian citizen, ensuring complete operational autonomy and decision-making speed.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Limited Liability Shield
                    </strong>
                    The owner's personal wealth and assets are completely legally separated from the debts, losses, or legal liabilities of the company.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Mandatory Nominee
                    </strong>
                    A nominee director is designated to safeguard perpetual succession if the sole member faces unforeseen demise or incapacity.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Perpetual Corporate Entity
                    </strong>
                    The company exists independently of the owner’s lifespan and can contract, own property, and sue or be sued in its corporate name.
                  </div>
                </div>
              </div>

              {/* Section 3: Who Can Start an OPC */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Who Can Start an OPC in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  The Companies Act sets straightforward eligibility criteria for entrepreneurs planning to incorporate an OPC:
                </p>
                <div className="space-y-3 text-[13px] font-light text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Natural Indian Citizens:</strong> Any Indian citizen aged 18 or above can incorporate an OPC. Following recent amendments, Non-Resident Indians (NRIs) who stayed in India for at least 120 days during the preceding financial year are also eligible.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Solo Professionals &amp; Freelancers:</strong> Software consultants, doctors, designers, chartered accountants, and architects who wish to separate personal assets from consulting contracts.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">One OPC per Individual Rule:</strong> A person can incorporate only one OPC at a time, and can act as a nominee in only one OPC simultaneously.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">No Minor Participation:</strong> A minor cannot be a member, nominee, or hold beneficial interest in an OPC.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Documents Required Table (Shake-free zero layout shift) */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for OPC Registration
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  All documents must be self-attested by the proposed director and nominee prior to electronic filing on the MCA V3 portal:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Document Required</th>
                        <th className="py-3 px-4 font-normal">Purpose</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_DOCUMENTS_TABLE.map((row, idx) => (
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

              {/* Section 5: Step-by-Step Incorporation Process */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step OPC Registration Process via SPICe+
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  The Ministry of Corporate Affairs streamlined company incorporation through the integrated web-form SPICe+ (INC-32). Here are the 6 stages:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Check Name Availability &amp; File SPICe+ Part A
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Submit 2 proposed names on the MCA portal complying with naming guidelines. The approved name will end with the statutory suffix "(OPC) Private Limited".
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Obtain Class-3 Digital Signature Certificate (DSC)
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Procure Class-3 DSC with e-Token for the proposed director. All electronic forms on the MCA V3 portal must be digitally signed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Draft e-MOA (INC-33), e-AOA (INC-34) &amp; Form INC-3
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Draft electronic Memorandum and Articles of Association specifying the business objects. Secure the nominee's formal consent in Form INC-3.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        File SPICe+ Part B &amp; AGILE-PRO-S Integrated Form
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Submit director details, registered office proof, DIN application, PAN, TAN, EPFO, ESIC, Profession Tax, and bank opening preference in one single filing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Central Registration Centre (CRC) Verification
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        The Registrar of Companies (CRC Manesar) examines the submitted application and declarations. Queries or re-submissions (if any) are handled within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00A86B] font-medium text-xs flex items-center justify-center shrink-0">
                      6
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Certificate of Incorporation (COI) &amp; CIN Issuance
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600 mt-0.5 leading-relaxed">
                        Upon approval, the ROC issues the Certificate of Incorporation containing the unique 21-digit Corporate Identification Number (CIN), permanent PAN, and TAN.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Cost Breakdown Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How Much Does OPC Registration Cost in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Here is the transparent cost structure including MCA government charges, state stamp duty, and professional service fees:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Service Component</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Estimated Cost</th>
                        <th className="py-3 px-4 font-normal">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_COST_BREAKDOWN_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.component}
                          </td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.cost}</td>
                          <td className="py-3 px-4 text-slate-600">{row.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 7: Registration Timeline Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How Long Does OPC Registration Take?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Detailed timeline breakdown across each procedural stage of incorporation:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Registration Stage</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Time Required</th>
                        <th className="py-3 px-4 font-normal">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_TIMELINE_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.stage}
                          </td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.time}</td>
                          <td className="py-3 px-4 text-slate-600">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 8: Mandatory Annual Compliances Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Mandatory Annual Compliances for OPC
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  To keep the corporate status active and prevent statutory ROC penalties or DIN deactivations, every OPC must fulfill the following annual filings:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Compliance Type</th>
                        <th className="py-3 px-4 font-normal">Prescribed Due Date</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_ANNUAL_COMPLIANCE_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.compliance}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.dueDate}</td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: OPC vs Pvt Ltd vs LLP Comparison Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  OPC vs Private Limited Company vs LLP Comparison
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Evaluating different business structures before incorporation ensures you select the model that best matches your investment, liability, and scaling goals:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-normal">Feature</th>
                        <th className="py-2.5 px-3 font-normal text-[#00A86B]">One Person Company (OPC)</th>
                        <th className="py-2.5 px-3 font-normal">Private Limited</th>
                        <th className="py-2.5 px-3 font-normal">LLP</th>
                        <th className="py-2.5 px-3 font-normal">Sole Proprietorship</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_VS_OTHER_COMPARISON.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-2.5 px-3 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.feature}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.opc}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.pvtLtd}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.llp}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.proprietor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 10: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for OPC Registration?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Dedicated CA &amp; CS Oversight
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Every application is thoroughly drafted and verified by senior corporate compliance professionals, guaranteeing zero rejections.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      100% Online &amp; Paperless
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Submit your documents securely from home. We handle digital signature procurement, MCA filings, and courier documents directly.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Zero Hidden Fees Guarantee
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Transparent quotation with exact breakdowns of MCA fees, stamp duty, and legal fees. No surprise charges mid-process.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Post-Incorporation Compliance
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      From GST registration to annual ROC filing and accounting support, we stay with your business for the long haul.
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
                    <Users className="w-6 h-6 text-[#00B074]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-white group-hover:text-emerald-300 transition-colors">
                      Consult an Incorporation Expert
                    </h3>
                    <p className="text-[12px] font-light text-slate-300 mt-0.5">
                      Get personalized advice on OPC suitability, naming, and taxation.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>Speak to a CA now</span>
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
                    href="/proprietorship"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Proprietorship to OPC Conversion</span>
                  </a>
                  <a
                    href="/partnership"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Partnership vs One Person Company</span>
                  </a>
                  <a
                    href="/section-8-company-registration"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Section 8 Non-Profit Registration</span>
                  </a>
                  <a
                    href="/trust-registration"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Trust Registration Online in India</span>
                  </a>
                  <a
                    href="/startup"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors pb-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Private Limited vs OPC Guide</span>
                  </a>
                </nav>
              </div>

              {/* Card 3: State-wise OPC Registration Links */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-5">
                <div className="w-8 h-[2px] bg-[#00A86B] rounded-full mb-3" />
                <h3 className="text-[14px] font-medium text-slate-900 mb-2">
                  OPC Registration by State
                </h3>
                <p className="text-[11.5px] font-light text-slate-400 mb-3">
                  Select your state to check local stamp duty rates &amp; ROC office:
                </p>
                <div className="max-h-[300px] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin text-[12px] font-light">
                  {INDIAN_STATES.slice(0, 16).map((st) => (
                    <div
                      key={st}
                      onClick={() => setIsContactOpen(true)}
                      className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-emerald-50/60 text-slate-600 hover:text-[#00A86B] transition-colors cursor-pointer"
                    >
                      <span>OPC in {st}</span>
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
              Common questions answered about One Person Company registration, nominee rules, and ongoing compliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OPC_FAQS.slice(0, faqLimit).map((faq, idx) => {
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
          {faqLimit < OPC_FAQS.length && (
            <div className="text-center mt-8">
              <button
                type="button"
                onClick={() => setFaqLimit(OPC_FAQS.length)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:text-[#00A86B] hover:border-[#00A86B] transition-all shadow-3xs cursor-pointer"
              >
                <span>Load more questions ({OPC_FAQS.length - faqLimit} more)</span>
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
        serviceTitle="One Person Company (OPC) Registration"
      />
      <ServiceSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={() => setIsContactOpen(true)}
      />
    </div>
  );
}
