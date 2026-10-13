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
    q: "What is Section 8 company?",
    a: "A Section 8 company is a type of not-for-profit company registered under Section 8 of the Companies Act, 2013, set up for the promotion of commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. These companies are formed to benefit society and are granted exemptions from several strict provisions of the Companies Act.",
  },
  {
    q: "What is difference between NGO and Section 8 company?",
    a: "An NGO is an umbrella term for non-governmental organizations operating with a charitable purpose (which can be registered as a Trust, Society, or Section 8 Company). A Section 8 Company is a formal corporate non-profit registered under the Companies Act, 2013 with the MCA. Section 8 companies enjoy higher credibility, limited liability, national reach, and can generate revenue, provided all surplus is reinvested into their charitable objectives.",
  },
  {
    q: "Do I have to be present in-person to incorporate a Section 8 Company?",
    a: "No, you do not have to be physically present at any government office or our premises. The entire Section 8 registration process is 100% digital. All documents can be uploaded online, and our MCA professionals file the SPICe+ and INC-12 forms electronically on your behalf.",
  },
  {
    q: "What are the documents required for registration?",
    a: "Identity proof (PAN Card mandatory for Indian nationals, along with Passport, Voter ID, or Driving License) and Address Proof (Bank Statement or Utility Bill not older than 2 months) are mandatory for all proposed Directors. For the registered office: latest electricity/utility bill and Rent Agreement with NOC from the landlord are required.",
  },
  {
    q: "How long is the registration of the Company valid?",
    a: "Once incorporated, a Section 8 Company has perpetual existence and remains active as long as statutory annual compliances (AOC-4, MGT-7, and ITR-7) are regularly completed. It continues to exist regardless of changes in directors, members, or trustees.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can Section 8 company make profit?",
    a: "Yes, Section 8 companies can legally earn income and generate profits through trade, investments, donations, consultancy, and grants. However, they are legally prohibited from paying dividends or distributing profits to their members or shareholders. All surplus income must be reinvested to further the company's non-profit objectives.",
  },
  {
    q: "How long will it take to incorporate a Company?",
    a: "Merrafilings can incorporate a Section 8 Company within 15 to 25 working days. The turnaround time depends on the prompt submission of KYC documents by the promoters and the speed of government approvals for the Section 8 License (Form INC-12) and SPICe+ Part B incorporation.",
  },
  {
    q: "What is a Digital Signature Certificate (DSC)?",
    a: "A Digital Signature Certificate (DSC) establishes the electronic identity of the signee while filing documents on the Ministry of Corporate Affairs portal. MCA mandates Class-3 Digital Signatures for all proposed directors to sign electronic incorporation forms securely.",
  },
  {
    q: "What is the Director Identification Number (DIN)?",
    a: "Director Identification Number (DIN) is a unique 8-digit identification number allotted by the Ministry of Corporate Affairs to existing or proposed directors. A person can have only one DIN in their lifetime, and it never expires.",
  },
  {
    q: "Can NRIs / Foreign Nationals be a Director in a Section 8 Company?",
    a: "Yes, an NRI or Foreign National can be a Director in a Section 8 Company after obtaining a DIN and DSC. However, the Companies Act mandates that at least one Director on the Board of Directors must be an Indian Resident (who stayed in India for at least 182 days in the previous financial year).",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How many people are required to register a Section 8 Company?",
    a: "A minimum of two people are required to register a private Section 8 company in India (serving as directors and shareholders). There is no statutory restriction on the maximum number of members.",
  },
  {
    q: "Is a Physical Commercial Office Mandatory to Establish a Section 8 Company?",
    a: "No, a commercial office is not mandatory. A registered address in India is essential for MCA official communications, and this can be a residential premises owned or rented by one of the founders, supported by an electricity bill and landlord NOC.",
  },
  {
    q: "What are the requirements to be a Director?",
    a: "Any natural person aged 18 years or above who is of sound mind and has not been disqualified under the Companies Act can become a Director. Foreign nationals are also eligible.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What are Section 12A and 80G registrations?",
    a: "Section 12A grants income tax exemption on the surplus revenue of the non-profit organization, while Section 80G provides a 50% tax deduction benefit to donors making contributions to the Section 8 company.",
  },
  {
    q: "Can a Section 8 Company receive foreign funding?",
    a: "Yes, a Section 8 company can receive foreign donations and grants after obtaining registration under the Foreign Contribution Regulation Act (FCRA) from the Ministry of Home Affairs, or by obtaining prior permission.",
  },
  {
    q: "What are the mandatory annual compliances for Section 8 companies?",
    a: "Annual compliances include holding an Annual General Meeting (AGM), minimum 2 board meetings per year, statutory audit by a Chartered Accountant, filing Form AOC-4 (Financial Statements), Form MGT-7 (Annual Return), and ITR-7 with the Income Tax Department.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Merrafilings Portal",
  "Trust Registration",
  "Society Registration",
  "12A and 80G Registration",
  "FCRA Registration",
  "CSR-1 Registration",
  "Private Limited Company",
  "One Person Company",
  "Limited Liability Partnership",
  "NGO Darpan Registration",
  "Section 8 Annual Compliance",
  "Virtual Office Address",
];

const POPULAR_SEARCHES_TAGS = [
  "Section 8 Company Registration",
  "Non Profit Company India",
  "NGO Registration Online",
  "Section 8 Company MCA",
  "12A Registration Online",
  "80G Exemption Certificate",
  "FCRA Registration Consultant",
  "CSR Registration Form CSR-1",
  "Section 8 License Form INC-12",
  "SPICe+ Part B Incorporation",
  "MOA and AOA Non Profit Drafting",
  "Section 8 Annual Filing AOC-4",
  "Form MGT-7 Annual Return",
  "DIR-3 KYC Filing",
  "Income Tax Exemption for NGO",
  "Trust vs Section 8 Company",
  "Society vs Section 8 Company",
  "Digital Signature Certificate DSC",
  "Director Identification Number DIN",
  "Section 8 Company Name Reservation RUN",
  "Company Registration in India",
  "Online CA Consultation",
  "Trademark Registration for NGO",
  "Startup India Recognition",
];

const SECTION_8_VS_NGO_COMPARISON = [
  {
    parameter: "Governing Law",
    trust: "Indian Trusts Act, 1882",
    society: "Societies Registration Act, 1860",
    section8: "Companies Act, 2013",
  },
  {
    parameter: "Registration Authority",
    trust: "Sub-Registrar of the State",
    society: "Registrar of Societies (State)",
    section8: "Ministry of Corporate Affairs (MCA)",
  },
  {
    parameter: "Minimum Members",
    trust: "2 Trustees",
    society: "7 Members",
    section8: "2 Directors / Shareholders",
  },
  {
    parameter: "Legal Status",
    trust: "Not a separate legal entity",
    society: "Separate legal entity",
    section8: "Distinct Corporate Legal Entity",
  },
  {
    parameter: "Donor Credibility",
    trust: "Moderate",
    society: "Moderate",
    section8: "Highest (National & Global)",
  },
  {
    parameter: "Foreign Funding (FCRA)",
    trust: "Eligible after approvals",
    society: "Eligible after approvals",
    section8: "Highly preferred by international bodies",
  },
  {
    parameter: "Compliance & Governance",
    trust: "Less Stringent",
    society: "Moderate",
    section8: "Transparent & Well-Governed (MCA)",
  },
];

export default function Section8CompanyPage() {
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
                Section 8 Company
              </span>{" "}
              Registration in India
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14.5px] font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Register a Section 8 Company in India with expert assistance. Includes MCA name approval, MOA &amp; AOA drafting, PAN &amp; TAN registration, and statutory compliance support. Start your non-profit legally today.
            </p>
          </div>

          {/* Hero Journey Card (Form & Value Props) */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/80 bg-white/95 shadow-xl shadow-slate-900/5 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Key Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] leading-snug">
                    Launch Your Section 8 Company with Zero Hassle
                  </h2>
                  <p className="text-xs sm:text-[13px] font-light text-slate-500 mt-1.5 leading-relaxed">
                    Incorporate your non-profit company under the Companies Act 2013 with complete government license, national operating authority, and full corporate credibility. Complete legal and MCA filing support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-purple-100/80 flex items-center justify-center shrink-0 text-[#6B4BFF]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        MCA Name &amp; License INC-12
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Central Govt approval for NGO
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
                        e-MOA &amp; e-AOA Drafting
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Section 8 charitable objectives
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F7] border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/80 flex items-center justify-center shrink-0 text-amber-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-slate-800">
                        10–14 Days Delivery
                      </h4>
                      <p className="text-[11.5px] font-light text-slate-500">
                        Guaranteed timeline with CIN &amp; PAN
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
                    <span>Nationwide Jurisdiction Without Sub-Registrar</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" />
                    <span>12A &amp; 80G Tax Exemption Advisory Included</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#FAF9F7] to-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="mb-4 text-center sm:text-left">
                  <h3 className="text-[17px] font-medium text-[#1F1646]">
                    Start Your Section 8 Company Registration
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
                      Thank you, {formName}. Our Senior Section 8 NGO Legal Advisor will reach out to you within 15 minutes.
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
                  <form onSubmit={handleSubmit} className="space-y-3">
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
                            `https://wa.me/918939885544?text=Hi,%20I%20want%20to%20register%20a%20Section%208%20Company%20in%20India`,
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
                  <p className="text-[11.5px] font-light text-slate-500">NGO &amp; Corporate Law</p>
                </div>
              </div>

              {/* Card 3: 25,000+ Non-Profits */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-[0_8px_25px_rgba(107,75,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-2xs">
                  <Users className="w-5 h-5 text-[#6B4BFF] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">25,000+ Non-Profits</p>
                  <p className="text-[11.5px] font-light text-slate-500">Incorporated Pan India</p>
                </div>
              </div>

              {/* Card 4: App Tracking */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F7]/70 hover:bg-white border border-slate-200/50 hover:border-emerald-200 hover:shadow-[0_8px_25px_rgba(0,176,116,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 shadow-2xs">
                  <Smartphone className="w-5 h-5 text-[#00B074] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#111827] transition-colors">Live MCA Tracking</p>
                  <p className="text-[11.5px] font-light text-slate-500">Status Updates on App</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section (Single-row Mini Cards Carousel matching Reference Image) */}
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
              Transparent pricing and full support from incorporation to non-profit compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {/* Package 1: Section 8 Company - Incorporation */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Section 8 Company - Incorporation
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Register Your Company in Just 7–10 Days – Online &amp; Hassle-Free! Fully managed incorporation with complete document...{" "}
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
                    Includes end-to-end documentation support, RUN name approval, Digital Signature Certificates for 2 directors, DIN allotment, MOA &amp; AOA drafting, Form INC-12 filing, and Certificate of Incorporation.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹2,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee &amp; DSC extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>MCA Name Approval (RUN)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>DSC for 2 Directors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>DIN Allotment for 2 Directors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>MOA &amp; AOA Drafting (Non-Profit)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Certificate of Incorporation &amp; CIN</span>
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

            {/* Package 2: Section 8 Company - Incorporation + 12A & 80G */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Section 8 - Incorporation + 12A &amp; 80G
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Complete incorporation bundled with Income Tax exemption approvals under Section 12A &amp; 80G for donor tax deductions...{" "}
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
                    Includes full incorporation package plus Form 10A filing for Section 12A tax exemption on surplus income and Section 80G donor tax relief certificate.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹9,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee &amp; DSC extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Complete Section 8 Incorporation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Section 12A Tax Exemption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Section 80G Donor Exemption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Form 10A Preparation &amp; Filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Dedicated CA &amp; Legal Advisor</span>
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

            {/* Package 3: Section 8 Company - Incorporation and Compliance */}
            <div className="group bg-white rounded-[22px] border-[1.5px] border-slate-200/90 hover:border-[#00B074] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-[0_16px_36px_rgba(0,176,116,0.14)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer relative">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-normal text-[#111827] group-hover:text-emerald-950 transition-colors">
                  Section 8 - Incorporation &amp; Compliance
                </h3>
                <p className="text-[12.5px] font-light text-slate-500 mt-2 leading-relaxed">
                  Register your company in just 7–10 days with complete incorporation, compliance &amp; accounting support for 1 full yea...{" "}
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
                    Comprehensive corporate package: Section 8 license &amp; incorporation, 12 months accounting on LEDGERS software, Annual AOC-4 financial statement filing, MGT-7 annual return, and ITR-7 income tax filing.
                  </p>
                )}

                <div className="mt-5 mb-5">
                  <div className="text-[26px] sm:text-[28px] font-normal text-[#111827] tracking-tight">
                    ₹19,899
                  </div>
                  <p className="text-[11.5px] font-light text-slate-400 mt-0.5">+ GST | Govt. fee &amp; DSC extra</p>
                </div>

                <div className="pt-2">
                  <p className="text-[12.5px] font-light text-slate-500 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Complete Section 8 Incorporation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Form AOC-4 Financial Statements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Form MGT-7 Annual Return Filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>ITR-7 Non-Profit Tax Return</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#00B074" strokeWidth="1.2" />
                        <path d="M5 8.2l2 2 4-4.4" stroke="#00B074" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Director KYC (DIR-3 KYC for 2)</span>
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
            <a href="/startup" className="hover:text-[#155EEF] transition-colors">
              Business Registration
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-[#00B074] font-normal">Section 8 Company</span>
          </nav>

          {/* Grid Layout: Main Article on Left, Sidebar on Right (Full width, not squeezed in center) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-start">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden p-6 sm:p-10 border-t-2 border-t-emerald-400">
              <article className="max-w-none space-y-7">
                {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Section 8 Company Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    <strong className="font-normal text-slate-900">Section 8 company registration in India</strong> is the legally recognized process of incorporating a non-profit organization under the <strong className="font-normal text-slate-900">Companies Act, 2013</strong>. It is ideal for individuals and organizations aiming to promote education, charity, science, religion, arts, or social welfare. A Section 8 company enjoys distinct legal identity, <a href="#pricing" className="text-[#155EEF] hover:underline font-normal">income tax benefits</a>, and higher credibility compared to traditional non-profit structures. Our experts at <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a> provide complete end-to-end guidance from name approval to 12A &amp; 80G registrations at transparent costs.
                  </p>
                </div>

                {/* Section 2: What is Section 8 Company Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    What is Section 8 Company Registration in India?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-light text-slate-600 leading-relaxed">
                    A <strong className="font-normal text-slate-900">Section 8 company</strong> is a type of non-profit organization registered under <strong className="font-normal text-slate-900">Section 8 of the Companies Act, 2013</strong>, governed by the Ministry of Corporate Affairs (MCA). It is incorporated with the primary objective of promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. Unlike commercial companies, a Section 8 company does not distribute dividends or profits to its members — all income and surplus must be reinvested solely towards achieving its stated public welfare objectives.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    Features of Section 8 Company
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-light text-slate-600">
                    {[
                      "Registered under the Companies Act, 2013 with MCA corporate oversight",
                      "Separate legal entity distinct from its promoters and directors",
                      "No distribution of dividends or profits to its shareholders or members",
                      "Limited liability protection safeguarding personal assets of members",
                      "No minimum paid-up capital requirement to commence operations",
                      "Significantly higher credibility among national and international donors",
                      "Eligible for Section 12A and 80G registrations for 100% tax exemptions",
                      "Can receive CSR funding from corporate donors under the Companies Act",
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

                {/* Section 3: Comparison Table - Trust vs Society vs Section 8 */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Key Differences Between Trust, Society, and Section 8 Company
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Choosing the right non-profit structure is critical for long-term governance and fundraising success. Here is an interactive comparison across key parameters:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Parameter</th>
                          <th className="py-3 px-4 font-normal">Trust</th>
                          <th className="py-3 px-4 font-normal">Society</th>
                          <th className="py-3 px-4 font-normal text-[#00A86B]">Section 8 Company</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SECTION_8_VS_NGO_COMPARISON.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                          >
                            <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.parameter}
                            </td>
                            <td className="py-3 px-4 text-slate-600">{row.trust}</td>
                            <td className="py-3 px-4 text-slate-600">{row.society}</td>
                            <td className="py-3 px-4 font-medium text-[#00A86B]">{row.section8}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 4: Section 8 Company vs NGO & vs Pvt Ltd */}
                <div className="border-t border-slate-100 pt-6 space-y-4">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Section 8 Company vs NGO &amp; Private Limited Company
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Many founders confuse Section 8 companies with traditional NGOs. An NGO is an umbrella category that encompasses Trusts, Societies, and Section 8 companies. While Trusts and Societies are registered under archaic state acts, a Section 8 company enjoys national recognition, standardized MCA filing systems, and the ability to operate across all Indian states without requiring separate state approvals.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Compared to a regular <a href="#pvt-ltd" className="text-[#155EEF] hover:underline font-normal">Private Limited Company</a>, a Section 8 company cannot distribute dividends or capital gains to its promoters. However, it benefits from substantial stamp duty concessions, exemption from minimum capital rules, and the ability to obtain 12A and 80G tax exemptions for tax-free donations.
                  </p>
                </div>

                {/* Section 5: Why Should You Register a Section 8 Company (Benefits) */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Should You Register a Section 8 Company in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Registering a Section 8 company in India offers significant legal, financial, and reputational advantages for non-profit initiatives:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {[
                      {
                        title: "Tax Exemptions (12A & 80G)",
                        desc: "Eligible for 100% income tax exemption under Section 12A, while Section 80G allows donors to claim 50% tax deductions.",
                      },
                      {
                        title: "Limited Liability Protection",
                        desc: "Directors and members bear no personal financial liability for the contractual obligations or debts of the company.",
                      },
                      {
                        title: "Separate Legal Entity",
                        desc: "Can own real estate, open commercial bank accounts, sign institutional contracts, and sue or be sued in its own corporate name.",
                      },
                      {
                        title: "Higher Institutional Credibility",
                        desc: "Regulated strictly by the MCA, making it the most preferred structure for government grants, CSR funding, and institutional aid.",
                      },
                      {
                        title: "No Minimum Capital Requirement",
                        desc: "Founders can commence incorporation with any nominal capital without mandatory paid-up thresholds.",
                      },
                      {
                        title: "Perpetual Succession",
                        desc: "The organization continues to exist perpetually regardless of changes in directors, trustees, or voting members.",
                      },
                      {
                        title: "Foreign Contribution (FCRA)",
                        desc: "Eligible to apply for FCRA registration to accept overseas funding, grants, and international charity donations.",
                      },
                      {
                        title: "Stamp Duty Exemptions",
                        desc: "Most Indian states grant full or partial exemption from stamp duty on incorporation documents and property registrations.",
                      },
                    ].map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60 hover:bg-white hover:border-[#00B074] transition-all"
                      >
                        <h4 className="text-[13.5px] font-medium text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
                          {benefit.title}
                        </h4>
                        <p className="text-[12px] font-light text-slate-600 mt-1 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: Eligibility Criteria & Minimum Requirements */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Who is Eligible to Register a Section 8 Company in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Before starting the Section 8 incorporation process, ensure that your founding team meets the following mandatory criteria:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Requirement</th>
                          <th className="py-3 px-4 font-normal">Statutory Criteria</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Minimum Directors
                          </td>
                          <td className="py-3 px-4 text-slate-600">Minimum 2 Directors (at least 1 must be an Indian Resident)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Minimum Members
                          </td>
                          <td className="py-3 px-4 text-slate-600">Minimum 2 Members / Shareholders (can be same as the directors)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            DIN &amp; DSC
                          </td>
                          <td className="py-3 px-4 text-slate-600">Class-3 DSC and Director Identification Number (DIN) for all proposed directors</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Registered Office Address
                          </td>
                          <td className="py-3 px-4 text-slate-600">Must maintain a valid address in India with utility bill and owner NOC</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Section 8 License
                          </td>
                          <td className="py-3 px-4 text-slate-600">Form INC-12 license approval issued by MCA (Central Government)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Minimum Paid-up Capital
                          </td>
                          <td className="py-3 px-4 text-slate-600">Zero minimum paid-up capital requirement under the Companies Act 2013</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 7: Documents Required */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Documents Are Required for Section 8 Company Registration?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Having the complete set of verified documents ready ensures quick name approval and seamless SPICe+ form processing:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#00A86B]" />
                        Documents from Directors &amp; Promoters
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>PAN Card of all proposed directors and shareholders (mandatory)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Identity Proof: Aadhaar Card, Passport, Voter ID, or Driving License</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Address Proof: Bank Statement or Electricity Bill (within 2 months)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Passport-size color photograph of each director</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Specimen signature &amp; Class-3 Digital Signature Certificate (DSC)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#00A86B]" />
                        Documents for Registered Office Premises
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-light text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Latest Electricity, Water, or Gas Bill (not older than 2 months)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Rent Agreement executed between property owner and company/director</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>No Objection Certificate (NOC) signed by the property owner</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Property tax paid receipt or ownership deed (if owned by promoter)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 8: Step-by-Step Registration Process */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Step-by-Step Process for Section 8 Company Registration in India
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-5">
                    The registration process is entirely online through the MCA portal. Here is how our team guides you through the 5 essential milestones:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "Step 1",
                        title: "Obtain DSC and Apply for DIN",
                        desc: "Every proposed director must obtain a Class-3 Digital Signature Certificate (DSC) to sign forms digitally. DIN is allotted simultaneously during the SPICe+ Part B incorporation filing.",
                      },
                      {
                        step: "Step 2",
                        title: "MCA Name Reservation via RUN (Reserve Unique Name)",
                        desc: "Apply for name approval through the RUN service on the MCA portal. The company name must indicate charitable intent and typically ends with words like Foundation, Forum, Association, Council, or Federation.",
                      },
                      {
                        step: "Step 3",
                        title: "MOA & AOA Drafting and License Application (Form INC-12)",
                        desc: "Draft the Memorandum of Association (MOA) and Articles of Association (AOA) strictly adhering to non-profit objectives. Submit Form INC-12 with estimated future income and expenditure forecasts to obtain the Section 8 License (Form INC-16).",
                      },
                      {
                        step: "Step 4",
                        title: "File SPICe+ Part B Incorporation on MCA Portal",
                        desc: "Submit the integrated SPICe+ form with linked forms (AGILE-PRO-S, INC-9, and URC-1). This single unified filing applies for Company Incorporation, PAN, TAN, EPFO, ESIC, and corporate bank account reservation.",
                      },
                      {
                        step: "Step 5",
                        title: "Receive Certificate of Incorporation & PAN/TAN",
                        desc: "Upon thorough verification by the Registrar of Companies (ROC), the MCA issues the Certificate of Incorporation containing the CIN. Your Section 8 company is now formally incorporated and ready to start social work!",
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

                {/* Section 9: Timeline & Fees Table */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Timeline and Fee Breakdown for Section 8 Company Registration
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Estimated working days and typical government &amp; professional cost components:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Timeline Table */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                      <table className="w-full text-left text-[12px] font-light text-slate-700">
                        <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                          <tr>
                            <th className="py-2.5 px-3 font-normal">Milestone</th>
                            <th className="py-2.5 px-3 font-normal">Timeline</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">DSC Procurement</td>
                            <td className="py-2.5 px-3 text-slate-600">1–2 Working Days</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">MCA Name Approval (RUN)</td>
                            <td className="py-2.5 px-3 text-slate-600">2–3 Working Days</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">INC-12 License Approval</td>
                            <td className="py-2.5 px-3 text-slate-600">7–10 Working Days</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">SPICe+ Incorporation</td>
                            <td className="py-2.5 px-3 text-slate-600">3–5 Working Days</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">PAN &amp; TAN Allotment</td>
                            <td className="py-2.5 px-3 text-slate-600">1–2 Working Days</td>
                          </tr>
                          <tr className="bg-emerald-50/60 font-medium text-[#00A86B]">
                            <td className="py-2.5 px-3">Total Estimated Time</td>
                            <td className="py-2.5 px-3">15–25 Working Days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Fees Breakdown Table */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                      <table className="w-full text-left text-[12px] font-light text-slate-700">
                        <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                          <tr>
                            <th className="py-2.5 px-3 font-normal">Component</th>
                            <th className="py-2.5 px-3 font-normal">Estimated Cost</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">DSC (per director)</td>
                            <td className="py-2.5 px-3 text-slate-600">₹1,000 – ₹2,000</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">MCA Name Approval Fee</td>
                            <td className="py-2.5 px-3 text-slate-600">₹1,000</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">INC-12 License Govt Fee</td>
                            <td className="py-2.5 px-3 text-slate-600">₹2,000 – ₹5,000</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-all">
                            <td className="py-2.5 px-3 font-normal text-slate-800">SPICe+ Govt Filing</td>
                            <td className="py-2.5 px-3 text-slate-600">₹2,000 – ₹5,000</td>
                          </tr>
                          <tr className="hover:bg-[#EDF8F3] transition-all">
                            <td className="py-2.5 px-3 font-normal text-slate-800">Professional Services</td>
                            <td className="py-2.5 px-3 text-slate-600">Starts ₹2,899</td>
                          </tr>
                          <tr className="bg-emerald-50/60 font-medium text-[#00A86B]">
                            <td className="py-2.5 px-3">Total Estimated Range</td>
                            <td className="py-2.5 px-3">₹10,000 – ₹25,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Section 10: Mandatory Compliances After Incorporation */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Compliances After Section 8 Company Registration
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Post-incorporation, every Section 8 company must fulfil mandatory annual MCA and Income Tax compliances to protect its legal standing and tax-exempt status:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Compliance</th>
                          <th className="py-3 px-4 font-normal">Form / Filing</th>
                          <th className="py-3 px-4 font-normal">Prescribed Due Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Financial Statements Filing
                          </td>
                          <td className="py-3 px-4 text-slate-600">Form AOC-4</td>
                          <td className="py-3 px-4 text-slate-600">Within 30 days of Annual General Meeting (AGM)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Annual Return Filing
                          </td>
                          <td className="py-3 px-4 text-slate-600">Form MGT-7</td>
                          <td className="py-3 px-4 text-slate-600">Within 60 days of AGM</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Income Tax Return
                          </td>
                          <td className="py-3 px-4 text-slate-600">ITR-7</td>
                          <td className="py-3 px-4 text-slate-600">31st October every financial year</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Statutory Audit
                          </td>
                          <td className="py-3 px-4 text-slate-600">CA Audit Report</td>
                          <td className="py-3 px-4 text-slate-600">Mandatory every year before the AGM</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Director KYC
                          </td>
                          <td className="py-3 px-4 text-slate-600">Form DIR-3 KYC</td>
                          <td className="py-3 px-4 text-slate-600">30th September every year</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            FCRA Annual Return
                          </td>
                          <td className="py-3 px-4 text-slate-600">Form FC-4</td>
                          <td className="py-3 px-4 text-slate-600">31st December (if receiving foreign funds)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 11: Why Choose Merrafilings */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Choose Merrafilings for Section 8 Company Registration?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Merrafilings is India&apos;s modern cloud compliance platform, assisting thousands of non-profits, foundations, and social impact leaders nationwide:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-light text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Dedicated CA &amp; CS advisory team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Transparent pricing with zero hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Fast turnaround: Incorporation in 15–25 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Assistance with 12A, 80G, CSR-1 &amp; FCRA</span>
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
                      "Understanding the Section 8 Company Structure",
                      "Understanding Section 8 Company: Structure, Benefits, and Setup",
                      "Difference Between Trust, Society, and Section 8 Company",
                      "How to Apply for Section 12A and 80G Tax Exemption",
                      "CSR-1 Registration Guide for Section 8 Companies",
                      "FCRA Registration: How Non-Profits Receive Foreign Funds",
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

              {/* Section 8 Company in States Directory */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden border-t-2 border-t-emerald-400">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-normal text-[14px] text-slate-800">Section 8 Company by State</span>
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
                        <span>Section 8 Company in {st}</span>
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
            Common questions about Section 8 Company Incorporation Starting at ₹2,899 in India.
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
        serviceTitle="Section 8 Company Registration"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
