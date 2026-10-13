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

const PUBLIC_MIN_REQUIREMENTS_TABLE = [
  {
    requirement: "Number of Directors",
    criteria: "Minimum 3 Directors (At least one must be a resident of India)",
  },
  {
    requirement: "Number of Shareholders",
    criteria: "Minimum 7 Shareholders (No upper limit on maximum shareholders)",
  },
  {
    requirement: "Minimum Paid-up Capital",
    criteria: "No statutory minimum capital mandated (Zero capital under amended Companies Act)",
  },
  {
    requirement: "Digital Signature Certificate (DSC)",
    criteria: "Mandatory Class-3 DSC for all proposed directors to sign electronic forms",
  },
  {
    requirement: "Director Identification Number (DIN)",
    criteria: "Mandatory DIN allotted through SPICe+ Part B incorporation form",
  },
  {
    requirement: "Corporate Name Suffix",
    criteria: 'Must compulsorily end with the statutory suffix "Limited"',
  },
];

const PUBLIC_TIMELINE_TABLE = [
  {
    stage: "1. Class-3 DSC Procurement",
    time: "1 – 2 Working Days",
    description: "Issuance of Class-3 digital signatures for all 3 proposed directors",
  },
  {
    stage: "2. Name Reservation (RUN / SPICe+ Part A)",
    time: "2 – 3 Working Days",
    description: "MCA Central Registration Centre (CRC) scrutiny and name reservation",
  },
  {
    stage: "3. Drafting Charter Documents (MOA & AOA)",
    time: "1 – 2 Working Days",
    description: "Legal drafting of specialized Memorandum & Articles of Association",
  },
  {
    stage: "4. SPICe+ Part B & Statutory Filings",
    time: "1 Working Day",
    description: "Uploading digital SPICe+, AGILE-PRO-S, and statutory declarations on MCA portal",
  },
  {
    stage: "5. CRC Scrutiny & Approval",
    time: "4 – 6 Working Days",
    description: "Verification of documents, subscriber declarations, and registered office proof",
  },
  {
    stage: "6. Issuance of Certificate of Incorporation (COI)",
    time: "1 Working Day",
    description: "Allotment of Corporate Identity Number (CIN), PAN, TAN, and bank integration",
  },
  {
    stage: "Total Turnaround Time",
    time: "10 – 15 Working Days",
    description: "Complete end-to-end legal incorporation delivered by Merrafilings",
  },
];

const PUBLIC_COST_BREAKDOWN_TABLE = [
  {
    component: "Class-3 DSC (3 Directors)",
    cost: "₹3,000 – ₹4,500",
    remarks: "Class-3 encryption certificate with 2-year validity & secure USB token",
  },
  {
    component: "MCA Name Reservation (RUN Form)",
    cost: "₹1,000",
    remarks: "Government filing fee for 2 proposed company name choices",
  },
  {
    component: "MCA SPICe+ Filing Fee",
    cost: "₹0 – Nominal",
    remarks: "Waived or minimal government fee under Ease of Doing Business initiative",
  },
  {
    component: "State Stamp Duty (MOA & AOA)",
    cost: "₹2,000 – ₹10,000",
    remarks: "Varies depending on registered office state and authorized share capital",
  },
  {
    component: "PAN, TAN & Statutory Numbers",
    cost: "₹130",
    remarks: "Automatic allotment of Income Tax PAN, TAN, EPFO, and ESIC registrations",
  },
  {
    component: "Merrafilings Professional Legal Fee",
    cost: "₹19,899",
    remarks: "Dedicated senior corporate CA & legal team managing end-to-end documentation",
  },
];

const PUBLIC_VS_PVTLTD_VS_LLP_TABLE = [
  {
    parameter: "Minimum Members",
    publicLtd: "7 Shareholders, 3 Directors",
    pvtLtd: "2 Shareholders, 2 Directors",
    llp: "2 Partners, 2 Designated Partners",
  },
  {
    parameter: "Maximum Members",
    publicLtd: "Unlimited Shareholders",
    pvtLtd: "Maximum 200 Shareholders",
    llp: "Unlimited Partners",
  },
  {
    parameter: "Public Fund Raising / IPO",
    publicLtd: "✅ Permitted (Can invite public to subscribe)",
    pvtLtd: "❌ Strictly Prohibited",
    llp: "❌ Strictly Prohibited",
  },
  {
    parameter: "Share Transferability",
    publicLtd: "Freely Transferable without board consent",
    pvtLtd: "Restricted as per Articles of Association",
    llp: "Transferable as per LLP Agreement",
  },
  {
    parameter: "Stock Exchange Listing",
    publicLtd: "✅ Eligible for NSE & BSE listing",
    pvtLtd: "❌ Ineligible for public listing",
    llp: "❌ Ineligible for public listing",
  },
  {
    parameter: "Statutory Compliance Burden",
    publicLtd: "High (Rigorous governance & disclosures)",
    pvtLtd: "Moderate",
    llp: "Low to Moderate",
  },
  {
    parameter: "Managerial Remuneration Limits",
    publicLtd: "Subject to Section 197 Companies Act limits",
    pvtLtd: "No statutory ceiling",
    llp: "No statutory ceiling",
  },
];

const PUBLIC_VS_PVTLTD_2WAY_TABLE = [
  {
    parameter: "Minimum Shareholders",
    publicLtd: "7 Shareholders",
    pvtLtd: "2 Shareholders",
  },
  {
    parameter: "Maximum Shareholders",
    publicLtd: "No Limit (Unlimited)",
    pvtLtd: "200 Shareholders",
  },
  {
    parameter: "Minimum Directors",
    publicLtd: "3 Directors",
    pvtLtd: "2 Directors",
  },
  {
    parameter: "Name Suffix Requirement",
    publicLtd: 'Must end with "Limited"',
    pvtLtd: 'Must end with "Private Limited"',
  },
  {
    parameter: "Public Invitation for Deposits & Shares",
    publicLtd: "✅ Permitted under statutory prospectus rules",
    pvtLtd: "❌ Strictly Prohibited by law",
  },
  {
    parameter: "Statutory Quorum for AGM",
    publicLtd: "5 to 30 members depending on shareholder size",
    pvtLtd: "2 members personally present",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a Public Limited Company in India?",
    a: "A Public Limited Company is a corporate legal entity registered under the Companies Act, 2013 that has a minimum of 7 shareholders and 3 directors. It offers limited liability protection, perpetual succession, freely transferable shares, and the legal right to raise equity capital from the public and list on stock exchanges.",
  },
  {
    q: "What are the eligibility criteria to become a Director?",
    a: "A director must be an individual aged 18 years or above and of sound mind. There are no restrictions on Indian citizenship; foreign nationals can also be directors. However, the Companies Act mandates that at least one director must be an Indian resident (stayed in India for at least 182 days in the previous financial year).",
  },
  {
    q: "What is the minimum capital required to start a Public Limited Company?",
    a: "Under the amended Companies Act, 2013, there is no statutory minimum paid-up capital requirement to incorporate a Public Limited Company. You can incorporate with an authorized capital tailored to your venture's initial requirements without mandatory upfront blocked capital.",
  },
  {
    q: "Is a commercial office address mandatory for registration?",
    a: "A physical registered office in India is required to receive official government communications from the MCA and ROC. It can be a commercial, industrial, or residential premises owned or leased by the company or promoters, supported by a utility bill and landlord NOC.",
  },
  {
    q: "Do proposed directors have to appear in person for incorporation?",
    a: "No. The entire incorporation process with Merrafilings is 100% digital. You do not need to visit any government office or our premises. Documents, identity proofs, and signatures are processed electronically through the MCA V3 portal.",
  },
  {
    q: "What documents are required from directors and shareholders?",
    a: "Self-attested PAN cards (mandatory for Indian nationals) or Passports (for foreign nationals), Identity Proof (Voter ID, Passport, or Driving License), and personal Address Proof (bank statement, electricity bill, or mobile bill not older than 2 months) are required for all proposed directors and shareholders.",
  },
  {
    q: "How long does it take to incorporate a Public Limited Company with Merrafilings?",
    a: "With complete and verified KYC documents, the typical timeline is 10 to 15 working days. This includes obtaining 3 Class-3 DSCs, RUN name approval, drafting tailored MOA and AOA, and securing CRC MCA approval.",
  },
  {
    q: "How long is the Certificate of Incorporation valid for?",
    a: "Once issued by the Ministry of Corporate Affairs, the Certificate of Incorporation remains valid perpetually. A company continues to exist indefinitely as long as statutory annual compliances (AOC-4, MGT-7, and ITR-6) are filed regularly.",
  },
  {
    q: "What is a Director Identification Number (DIN)?",
    a: "A DIN is a unique 8-digit identification number allotted by the Ministry of Corporate Affairs to existing or proposed company directors. A director can hold only one DIN in their lifetime, which never expires.",
  },
  {
    q: "What is the authorized share capital fee?",
    a: "Authorized share capital is the maximum ceiling of capital a company is legally authorized to issue to shareholders. The government charges stamp duty and registration fees calculated in proportion to the authorized capital upon incorporation.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can a Public Limited Company issue shares to the public immediately upon incorporation?",
    a: "A company can issue shares to its initial 7+ subscribers upon incorporation. To offer shares to the wider public through an Initial Public Offering (IPO), the company must subsequently comply with SEBI regulations, draft an approved red herring prospectus, and obtain stock exchange listing approvals.",
  },
  {
    q: "What are the mandatory statutory compliances for a Public Limited Company?",
    a: "Mandatory compliances include holding a statutory meeting, conducting minimum 4 board meetings annually, holding an Annual General Meeting (AGM), statutory audit by an independent CA, filing Form AOC-4 (financial statements), Form MGT-7 (annual return), DIR-3 KYC, and corporate income tax return ITR-6.",
  },
  {
    q: "What is the difference between a Public Limited and Private Limited Company?",
    a: "A Public Limited Company requires minimum 7 members and 3 directors, has no upper limit on shareholders, offers freely transferable shares, and can raise capital from the general public. A Private Limited Company requires minimum 2 members, caps members at 200, restricts share transfers, and cannot invite public capital.",
  },
  {
    q: "Can an existing Private Limited Company convert into a Public Limited Company?",
    a: "Yes. A Private Limited Company can convert into a Public Limited Company by altering its MOA and AOA, passing a special resolution in an Extraordinary General Meeting (EGM), increasing directors to at least 3 and shareholders to at least 7, and filing Form INC-27 with the ROC.",
  },
  {
    q: "Are shares of an unlisted Public Limited Company required to be in Demat form?",
    a: "Yes. Under Rule 9A of the Companies (Prospectus and Allotment of Securities) Rules, every unlisted public company must issue securities only in dematerialised form and facilitate the dematerialisation of all its existing securities through depositories (NSDL/CDSL).",
  },
  {
    q: "Can NRIs and foreign entities invest in a Public Limited Company?",
    a: "Yes. NRIs, foreign nationals, and overseas institutional investors can invest in an Indian Public Limited Company under the Foreign Direct Investment (FDI) guidelines, either through the automatic route or government approval route depending on the sector.",
  },
  {
    q: "What is the commencement of business certificate (Form INC-20A)?",
    a: "Form INC-20A is a mandatory post-incorporation filing required under Section 10A of the Companies Act. It must be filed within 180 days of incorporation, certifying that all subscribers have deposited their agreed share capital into the company's bank account.",
  },
  {
    q: "What happens if a Public Limited Company fails to file annual returns?",
    a: "Failure to file annual ROC returns results in heavy additional statutory penalties (₹100 per day of delay per form), disqualification of directors under Section 164(2), and potential strike-off of the company name by the Registrar of Companies.",
  },
  {
    q: "Can a Public Limited Company accept public deposits?",
    a: "An eligible Public Limited Company having a net worth of not less than ₹100 Crores or a turnover of not less than ₹500 Crores can accept deposits from persons other than its members, subject to credit rating and Section 76 statutory provisions.",
  },
  {
    q: "Why choose Merrafilings for Public Limited Company Incorporation?",
    a: "Merrafilings provides end-to-end corporate services with dedicated senior Chartered Accountants and corporate lawyers. We manage RUN name approval, 3 DSCs, SPICe+ Part B drafting, INC-20A commencement, secretarial register setup, and post-incorporation compliance seamlessly.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "One Person Company",
  "Limited Liability Partnership",
  "Section 8 Company Registration",
  "Trust Registration",
  "Convert Private to Public Ltd",
  "INC-20A Commencement of Business",
  "Secretarial Audit Assistance",
  "Demat Connectivity ISIN",
  "Director KYC DIR-3",
  "AOC-4 Financial Filing",
  "MGT-7 Annual Return",
];

const POPULAR_SEARCHES_TAGS = [
  "Public Limited Company Registration India",
  "Incorporate Public Limited Company Online",
  "Public Company MCA SPICe+ Filing",
  "Public Limited vs Private Limited",
  "Minimum Capital Public Limited Company",
  "Public Limited Company Name Reservation RUN",
  "Class 3 DSC for Directors",
  "DIN Allotment Online",
  "Companies Act 2013 Public Company",
  "IPO Eligibility India",
  "Demat Share Allocation Unlisted Public Company",
  "Statutory Compliances for Public Limited",
  "Annual Return MGT-7 Filing",
  "Financial Statement AOC-4 Filing",
  "Corporate CA Advisory",
  "NSE BSE Listing Preparation",
  "Corporate Identity Number CIN Allotment",
  "Public Limited Stamp Duty by State",
];

export default function PublicLimitedCompanyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing card expand states
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // FAQ states
  const [openFaq, setOpenFaq] = useState<string | null>("c1-0");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);

  // State list collapse in sidebar
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
              Public Limited Company
            </span>
          </nav>

          {/* Main Hero Title & Tagline */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-light text-[#12023B] leading-snug">
              <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
                Public Limited Company
              </span>{" "}
              Registration in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Scale your business with public shareholding, IPO access, and corporate credibility. Complete MCA SPICe+ incorporation, RUN name reservation, custom MOA &amp; AOA drafting, DSC, DIN, and ROC compliance by Merrafilings.
            </p>

            {/* Banner Pill: Starting from ₹19,899 */}
            <div className="mt-4 flex items-center justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-blue-500 bg-white shadow-xs hover:shadow-md hover:bg-blue-50/50 transition-all cursor-pointer group"
              >
                <span className="text-xs sm:text-sm text-slate-700">
                  Public Limited Company starting from{" "}
                  <strong className="text-slate-900 font-semibold">₹19,899</strong>
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
                    Start Your Public Limited Company
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light text-slate-600 leading-relaxed">
                    Corporate legal structuring for high-growth enterprises and large capital projects. Complete MCA incorporation including 3 DSCs, 3 DINs, name reservation, custom MOA &amp; AOA, and PAN/TAN allotment.
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
                      MCA Name Reservation (RUN Portal)
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
                      Class-3 DSC &amp; DIN for 3 Directors
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
                      SPICe+ Part B Incorporation Filing
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
                      Custom MOA &amp; AOA Drafting
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
                      Thank you, <strong className="text-[#111827]">{formName}</strong>. A Senior Corporate Secretarial Advisor from Merrafilings will contact you at <strong className="text-[#111827]">{formPhone}</strong> within 15 minutes.
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
                            `https://wa.me/918939885544?text=Hi,%20I%20want%20to%20register%20a%20Public%20Limited%20Company%20in%20India`,
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
              {/* Card 1: 4.8 Verified Reviews */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(245,158,11,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E9] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Award className="w-5 h-5 text-[#F04438] transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    <span>4.8</span>
                    <div className="flex items-center text-amber-400 text-[11px] gap-0.5">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="relative inline-block text-slate-300">
                        ★
                        <span className="absolute inset-0 overflow-hidden w-[80%] text-amber-400">
                          ★
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Corporate Client Reviews
                  </p>
                </div>
              </div>

              {/* Card 2: 15+ Years Experience */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-amber-200 hover:shadow-[0_8px_25px_rgba(217,119,6,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8E7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#D97706] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    15+ Years
                  </p>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Corporate Law &amp; ROC
                  </p>
                </div>
              </div>

              {/* Card 3: 1,00,000+ Businesses */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(107,75,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Users className="w-5 h-5 text-[#6B4BFF] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">
                    1,00,000+ Companies
                  </p>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Incorporated Nationwide
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
                    Merrafilings Suite
                  </p>
                  <p className="text-[11.5px] font-light text-slate-500">
                    Live Portal &amp; Alerts
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
              Clear, transparent pricing and full support from MCA name approval to corporate secretarial compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: Incorporation */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Public Ltd - Incorporation
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Incorporate your Public Limited Company in 10–15 days with full MCA documentation and filing...{" "}
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
                    Includes RUN name approval for 2 proposed names, Class-3 DSC for 3 directors, DIN allotment for 3 directors, custom MOA &amp; AOA drafting, SPICe+ Part B submission, and Certificate of Incorporation (COI) with PAN/TAN. (Govt fees and state stamp duty extra).
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹19,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ govt fee &amp; stamp duty</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Fast 10–15 days turnaround
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>MCA Name Reservation (RUN Portal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Class-3 DSC for 3 Proposed Directors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>DIN Allotment for 3 Directors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>MOA &amp; AOA Drafting for 7 Subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>SPICe+ Part B Incorporation Filing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Certificate of Incorporation (CIN), PAN &amp; TAN</span>
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

            {/* Package 2: Incorporation & Compliance */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Public Ltd - Incorporation &amp; Compliance
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Full incorporation plus mandatory post-incorporation setup, Commencement of Business (INC-20A)...{" "}
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
                    Includes everything in Incorporation plan plus Form INC-20A filing, preparation of 7 physical share certificates, establishment of statutory registers under Section 88, first board meeting minutes, and corporate bank current account opening.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹39,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ govt fee &amp; stamp duty</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Includes Post-Incorporation Setup &amp; INC-20A
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Everything in Incorporation Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Commencement of Business (Form INC-20A)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Share Certificates for 7 Initial Subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Statutory Registers Setup (Sec 88)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>First Board Meeting Minutes &amp; Resolutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Dedicated Corporate Secretarial Manager</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-[#00B074] bg-[#E8FAF2] group-hover:bg-[#00B074] group-hover:text-white hover:!bg-[#009B66] border border-[#00B074]/35 group-hover:border-[#00B074] transition-all duration-200 cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  Choose Incorporation &amp; Setup
                </button>
              </div>
            </div>

            {/* Package 3: Corporate Growth Suite (Recommended) */}
            <div className="group bg-white rounded-[22px] border-[2px] border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-[0_20px_40px_rgba(0,176,116,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B074] text-white text-[11px] font-medium tracking-wide uppercase px-3 py-0.5 rounded-full shadow-2xs">
                Complete Corporate Suite
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Corporate Enterprise Suite
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  The complete package for scale: incorporation, Demat enablement advisory (ISIN generation), 1st year secretarial compliance...{" "}
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
                    Comprehensive enterprise setup including unlisted public company Demat registration (NSDL/CDSL ISIN coordination), Form AOC-4 &amp; MGT-7 filings, quarterly secretarial compliance, and 1-year Merrafilings Ledgers cloud accounting software.
                  </div>
                )}

                <div className="my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] sm:text-[32px] font-medium text-[#111827] tracking-tight">
                      ₹69,899
                    </span>
                    <span className="text-xs text-slate-400 font-light">+ govt fee &amp; stamp duty</span>
                  </div>
                  <p className="text-[11.5px] font-light text-[#00A86B] mt-0.5">
                    Includes 1st Year Compliance &amp; Demat Advisory
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Everything in Setup Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Demat Connectivity Advisory (NSDL/CDSL ISIN)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Annual Secretarial Filing (Form AOC-4 &amp; MGT-7)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Director KYC Filings (DIR-3 KYC for 3 Directors)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>Corporate Income Tax Return (ITR-6)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                    <span>1-Year Merrafilings Ledgers Enterprise Suite</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-[14.5px] text-white bg-[#00B074] hover:bg-[#009B66] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                  Choose Enterprise Suite
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
              {/* Section 1: Overview */}
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-normal text-[#1F1646] mb-3">
                  Public Limited Company Registration Online in India
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-3">
                  A <strong className="font-medium text-slate-800">Public Limited Company</strong> is the premier business structure in India for ambitious, large-scale commercial enterprises. It grants businesses legal authority to offer shares to the public, attract institutional capital, and pursue an Initial Public Offering (IPO) on stock exchanges like the NSE and BSE.
                </p>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                  Governed by the <strong className="font-medium text-slate-800">Companies Act, 2013</strong>, a public company provides limited liability shield to all shareholders, distinct legal entity status, and perpetual succession. At Merrafilings, our senior corporate secretarial lawyers and Chartered Accountants ensure seamless incorporation from RUN name approval to full statutory compliance.
                </p>
              </div>

              {/* Section 2: Why Choose Public Limited */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Should You Choose Public Limited Company Registration in India?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Unlike private business structures that restrict growth to 200 members, a Public Limited Company provides boundless scalability:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-light text-slate-700">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Access to Public Capital &amp; IPO
                    </strong>
                    Issue shares and debentures to the public, venture capitalists, and global institutional investors without restrictions on maximum shareholders.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Freely Transferable Shares
                    </strong>
                    Shareholders can freely transfer or trade their shares without needing approval from the board of directors.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Highest Corporate Prestige
                    </strong>
                    Commands premier brand trust among banks, financial institutions, suppliers, and government tender authorities.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Unbroken Perpetual Succession
                    </strong>
                    The company exists independently of changes in shareholders, directors, or management until dissolved by law.
                  </div>
                </div>
              </div>

              {/* Section 3: Minimum Requirements Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Minimum Requirements for a Public Limited Company?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Before applying for incorporation on the MCA portal, ensure your corporate founding team satisfies the statutory thresholds:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Requirement</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Statutory Minimum Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PUBLIC_MIN_REQUIREMENTS_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.requirement}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.criteria}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4: Eligibility Criteria */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Eligibility Criteria for Directors &amp; Shareholders
                </h2>
                <div className="space-y-3 text-[13px] font-light text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Age &amp; Capacity:</strong> Any natural person aged 18 years or above with legal capacity to contract can be appointed as a director.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Resident Director Rule:</strong> At least one director must have resided in India for at least 182 days during the previous financial year.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Foreign Nationals &amp; NRIs:</strong> Foreign citizens can be directors and shareholders after securing DIN and Class-3 DSC via verified passport records.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Corporate Shareholders:</strong> Other companies, LLPs, and venture capital funds can act as shareholders in a Public Limited Company.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Documents Required Table */}
              <div id="documents-required" className="border-t border-slate-100 pt-6 scroll-mt-24">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Documents Required for Public Limited Company Registration?
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  To ensure error-free electronic processing on the MCA SPICe+ system, prepare the following documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12.5px] font-light text-slate-700 mb-4">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      For Directors &amp; Promoters
                    </strong>
                    Self-attested PAN card (Indian nationals) or Passport (Foreign nationals), Voter ID/Driving License, and latest 2-month Bank Statement.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      For Registered Office
                    </strong>
                    Electricity Bill or Water Bill (&lt; 2 months old), Rent/Lease Agreement, and signed No Objection Certificate (NOC) from property owner.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Statutory Charter Documents
                    </strong>
                    Memorandum of Association (MOA), Articles of Association (AOA), Form DIR-2 consent, and Form INC-9 subscriber declarations.
                  </div>
                </div>
              </div>

              {/* Section 6: Step-by-Step Procedure */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Public Limited Company Registration Process in India?
                </h2>
                <div className="space-y-3.5">
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Obtain Class-3 Digital Signature Certificates (DSC)
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Obtain Class-3 DSCs for all 3 proposed directors to execute digital MCA incorporation forms and e-declarations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Apply for Company Name Approval (RUN / SPICe+ Part A)
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Submit 2 proposed unique names ending with &quot;Limited&quot; on the MCA RUN service for Central Registration Centre approval.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Draft Tailored MOA &amp; AOA
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Draft comprehensive Memorandum of Association (main and ancillary objects) and Articles of Association (governance, shares, voting rules).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        File SPICe+ Part B &amp; Integrated Services (AGILE-PRO-S)
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Submit SPICe+ Part B with DIN applications, registered office proofs, EPFO, ESIC, Profession Tax, and corporate bank current account selection.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        CRC Verification &amp; Certificate of Incorporation Issuance
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        MCA Registrar scrutinizes the filing and issues the Certificate of Incorporation bearing your 21-digit Corporate Identity Number (CIN).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00A86B] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        File Form INC-20A (Commencement of Business)
                      </h4>
                      <p className="text-[12px] font-light text-slate-600 leading-relaxed">
                        Deposit subscription capital into the corporate bank account within 180 days and file Form INC-20A to begin commercial trading.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: Estimated Timeline & Cost Breakdown */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Registration Timeline &amp; Cost Breakdown
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Overview of the stage-by-stage registration turnaround time:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-6">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Incorporation Stage</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Estimated Time</th>
                        <th className="py-3 px-4 font-normal">Scope &amp; Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PUBLIC_TIMELINE_TABLE.map((row, idx) => (
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

                <h3 className="text-[15px] font-medium text-slate-900 mb-3">
                  Statutory Fee Components
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Fee Component</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Cost Estimate</th>
                        <th className="py-3 px-4 font-normal">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PUBLIC_COST_BREAKDOWN_TABLE.map((row, idx) => (
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

              {/* Section 8: Comparison Tables */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Public Limited vs Private Limited vs LLP Comparison
                </h2>
                <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                  Understand how a Public Limited structure compares with other prominent incorporation options:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-6">
                  <table className="w-full text-left text-[12px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-normal">Parameter</th>
                        <th className="py-2.5 px-3 font-normal text-[#00A86B]">Public Limited</th>
                        <th className="py-2.5 px-3 font-normal">Private Limited</th>
                        <th className="py-2.5 px-3 font-normal">LLP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PUBLIC_VS_PVTLTD_VS_LLP_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-2.5 px-3 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.publicLtd}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.pvtLtd}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.llp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-[15px] font-medium text-slate-900 mb-3">
                  Public Limited vs Private Limited Company (Head-to-Head)
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                    <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-normal">Parameter</th>
                        <th className="py-2.5 px-3 font-normal text-[#00A86B]">Public Limited Company</th>
                        <th className="py-2.5 px-3 font-normal">Private Limited Company</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PUBLIC_VS_PVTLTD_2WAY_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-2.5 px-3 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.publicLtd}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.pvtLtd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Public Limited Company Incorporation?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Dedicated Senior Corporate Lawyers
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Handled directly by corporate practitioners experienced in complex multi-shareholder charter drafting and MCA CRC compliance.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      End-to-End Enterprise Setup
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      From RUN name reservation and 3 DSCs to statutory registers, INC-20A commencement, and dematerialisation connectivity.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Transparent &amp; Fixed Pricing
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Clear milestone-based fee structure with no hidden charges, ensuring complete predictability for board budgets.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Annual Secretarial Compliance
                    </h4>
                    <p className="text-[12.5px] font-light text-slate-600 leading-relaxed">
                      Full support for annual general meetings, statutory audits, Form AOC-4, Form MGT-7, and director KYC compliance year after year.
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
                    <Building className="w-6 h-6 text-[#00B074]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-white group-hover:text-emerald-300 transition-colors">
                      Consult a Corporate Lawyer
                    </h3>
                    <p className="text-[12px] font-light text-slate-300 mt-0.5">
                      Expert advice on Public Limited capital structuring, MOA clauses, and Demat rules.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>Speak to Senior Corporate Legal Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card 2: Related Guides */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-5">
                <div className="w-8 h-[2px] bg-[#00A86B] rounded-full mb-3" />
                <h3 className="text-[14px] font-medium text-slate-900 mb-3">
                  Related Corporate Guides
                </h3>
                <nav className="space-y-2.5 text-[12.5px] font-light text-slate-600">
                  <a
                    href="/section-8-company-registration"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors border-b border-slate-100/80 pb-2 last:border-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Section 8 Non-Profit Registration</span>
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
                    href="/trust-registration"
                    className="flex items-center gap-2 py-1 hover:text-[#00A86B] transition-colors pb-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Trust Registration Online in India</span>
                  </a>
                </nav>
              </div>

              {/* Card 3: State-wise Registration */}
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
                  Public Limited Registration by State
                </h3>
                <p className="text-[11.5px] font-light text-slate-400 mb-3">
                  Stamp duty and ROC jurisdictions across states:
                </p>
                {stateListOpen && (
                  <div className="max-h-[300px] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin text-[12px] font-light">
                    {INDIAN_STATES.slice(0, 16).map((st) => (
                      <div
                        key={st}
                        onClick={() => setIsContactOpen(true)}
                        className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-emerald-50/60 text-slate-600 hover:text-[#00A86B] transition-colors cursor-pointer"
                      >
                        <span>Public Ltd Registration in {st}</span>
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
              Common questions answered about Public Limited Company incorporation, share capital, directors, and statutory compliances.
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

          {/* Related Services - Corporate Registration Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 mb-6">
            <h3 className="font-normal text-[15px] sm:text-[16px] text-slate-800 mb-4">
              Related Services - Corporate Business Registration
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
        serviceTitle="Public Limited Company Registration in India"
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
