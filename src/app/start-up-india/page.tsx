"use client";

import React from "react";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Smartphone,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
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
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "What is Startup India Registration?",
    a: "Startup India Registration is the official process of enrolling a new business under the Government of India's Startup India initiative to access benefits like tax exemptions, easier compliance, funding support, and national recognition.",
  },
  {
    q: "What is DPIIT and why is it important for startups?",
    a: "The Department for Promotion of Industry and Internal Trade (DPIIT) is a central government body under the Ministry of Commerce and Industry that recognizes and supports startups in India. DPIIT registration provides startups with access to numerous benefits under the Startup India scheme including tax holidays and IP fee rebates.",
  },
  {
    q: "How to apply for DPIIT registration for a startup?",
    a: "To get DPIIT recognition, register on the Startup India portal (startupindia.gov.in), fill in your business details, outline your innovation and scalability metrics, upload necessary documents, and submit the application. Once verified by scrutiny officers, you will receive your DPIIT Certificate digitally.",
  },
  {
    q: "What are the startup India registration fees?",
    a: "The official government portal fee for DPIIT recognition is completely FREE. The overall cost depends on your chosen legal entity structure (incorporation fees for Private Limited Company, LLP, or Partnership Firm) and professional assistance fees for documentation, pitch deck structuring, and advisory.",
  },
  {
    q: "How can I register a startup in India?",
    a: "You can register a startup in India by first incorporating your business as a Private Limited Company, Limited Liability Partnership (LLP), or Registered Partnership firm, and then applying for a Startup India DPIIT certificate through the Startup India portal.",
  },
  {
    q: "What documents are required for DPIIT startup registration?",
    a: "Required documents include the Certificate of Incorporation or Registration Certificate of your entity, company/LLP PAN card, authorization letter from the authorized signatory, details of founders/directors, proof of concept (pitch deck, website link, or demo video), and IP registration details if applicable.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is a Startup India certificate?",
    a: "A Startup India certificate is an official digital credential issued by the DPIIT, recognizing a business as a qualified startup under the Startup India initiative, making it eligible for 3-year tax exemptions, angel tax relief, and public procurement preferences.",
  },
  {
    q: "What are the benefits of obtaining a Startup India registration certificate?",
    a: "Registration of a startup in India offers substantial benefits including a 3-year tax holiday under Section 80-IAC, exemption from angel tax under Section 56(2)(viib), self-certification under 9 labor and 3 environmental laws, 80% rebate on patent filings, 50% on trademarks, and exemption from prior turnover and experience criteria in public tenders.",
  },
  {
    q: "Does Merrafilings provide a startup India registration service?",
    a: "Yes. Merrafilings provides comprehensive end-to-end services for Startup India registration, including business incorporation, documentation audit, innovation statement drafting, pitch deck optimization, and liaison with DPIIT scrutiny authorities at transparent and affordable costs.",
  },
  {
    q: "What is the procedure for Startup India company registration?",
    a: "The procedure involves: 1) Incorporating your business with MCA or Registrar of Firms; 2) Creating a user profile on the Startup India portal; 3) Applying for DPIIT recognition with entity details and innovation pitch; 4) Uploading the required documents; and 5) Receiving the digital Startup India recognition certificate upon approval.",
  },
  {
    q: "How long does it take to get a DPIIT certificate?",
    a: "The DPIIT certificate is usually issued within 3 to 10 working days after submitting a complete, error-free application and required pitch deck on the Startup India portal.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Is there any renewal process for the Startup India registration certificate?",
    a: "No, the Startup India registration certificate does not require periodic or annual renewal. However, compliance with DPIIT guidelines (remaining under 10 years from incorporation and annual turnover under ₹100 crore) must be maintained to continue availing benefits.",
  },
  {
    q: "What is the difference between DPIIT registration and Startup India registration?",
    a: "DPIIT recognition is the core statutory component of the Startup India scheme. While registering an account on the Startup India portal provides community access, obtaining DPIIT recognition is the official prerequisite required to avail government tax holidays, funding, and IP rebates.",
  },
  {
    q: "Are there any specific criteria for startups to be eligible for Startup India registration?",
    a: "Yes. The entity must be incorporated as a Private Limited Company, Partnership firm, or LLP; must be less than 10 years old from incorporation; have an annual turnover not exceeding ₹100 crore in any financial year; and be engaged in innovation, development, or scalable improvement of products, processes, or services.",
  },
  {
    q: "Can existing businesses apply for Startup India registration?",
    a: "Yes, existing businesses can apply as long as they are incorporated as a Private Limited Company, LLP, or registered partnership firm, are within 10 years from the date of incorporation, have an annual turnover under ₹100 crore, and were not formed by splitting or reconstructing an existing business.",
  },
  {
    q: "Can I complete the Startup India registration process online?",
    a: "Yes, the entire Startup India registration process is 100% digital and conducted through the official government portal without requiring any physical presence or manual document submission at government offices.",
  },
  {
    q: "Who is not eligible for Startup India recognition?",
    a: "Entities formed as Sole Proprietorships, notarized (unregistered) partnership firms, Public Limited Companies, entities older than 10 years from incorporation, entities with turnover exceeding ₹100 crore, or businesses formed by splitting/reconstructing an existing business are strictly ineligible.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How to Register a Startup Company in India?",
    a: "To register a startup company: 1) Choose an eligible business structure (Private Limited Company, LLP, or Partnership); 2) Prepare your business plan and innovation pitch deck; 3) Obtain Certificate of Incorporation and PAN; 4) Obtain Digital Signature Certificate (DSC); 5) Create an account on startupindia.gov.in; and 6) Submit application for DPIIT recognition.",
  },
  {
    q: "What is the Startup India Certificate Cost?",
    a: "The government fee on the Startup India portal is ₹0 (Free). Professional service packages from Merrafilings start at ₹4,899 + GST for complete application drafting, innovation narrative structuring, and guaranteed digital certificate retrieval.",
  },
  {
    q: "What is the Startup India Scheme?",
    a: "Startup India is a flagship initiative of the Government of India launched on January 16, 2016, to build a strong ecosystem for nurturing innovation and driving sustainable economic growth and large-scale employment opportunities.",
  },
  {
    q: "Who manages the Startup India Initiative?",
    a: "The Startup India initiative is managed by a dedicated division under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of India.",
  },
  {
    q: "How does Startup India benefit startups bidding for Government Tenders?",
    a: "DPIIT-recognised startups enjoy complete exemption from 'prior experience' and 'prior turnover' criteria when bidding for central government tenders and public procurement contracts on the Government e-Marketplace (GeM) portal.",
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

const PACKAGES: PricingPackage[] = [
  {
    name: "DPIIT Eligibility & Advisory",
    shortDesc:
      "Complete eligibility screening, pitch deck review, and documentation assessment...",
    expandedDesc:
      "Includes expert evaluation of entity turnover, incorporation age, innovation parameters, scalability indicators, and draft pitch deck review for Startup India submission.",
    price: "₹1,999",
    priceSub: "+ GST | Documentation & Advisory",
    features: [
      "Comprehensive DPIIT Eligibility Audit",
      "Pitch Deck Review & Innovation Advisory",
      "Entity Structure Verification (Pvt Ltd / LLP)",
      "Document Checklist Validation",
    ],
  },
  {
    name: "Complete DPIIT Recognition",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "End-to-end filing on the DPIIT portal with professional innovation statement drafting and guaranteed certificate issuance...",
    expandedDesc:
      "Our expert corporate lawyers draft your innovation statement, prepare the compliance pitch, file on the Startup India portal, and liaise with DPIIT scrutiny officers until certificate issuance.",
    price: "₹4,899",
    priceSub: "+ GST | End-to-end recognition filing",
    features: [
      "Complete Startup India Portal Application Filing",
      "DPIIT Scrutiny Narrative & Innovation Statement",
      "Pitch Deck Presentation Structuring",
      "DPIIT Certificate of Recognition Issuance",
      "Startup India Portal Profile Setup & Networking Access",
    ],
  },
  {
    name: "DPIIT + Section 80-IAC Tax Exemption",
    shortDesc:
      "Full DPIIT recognition plus Section 80-IAC 3-year income tax holiday application and angel tax relief dossier...",
    expandedDesc:
      "Designed for startups raising capital. Includes DPIIT recognition, filing for 80-IAC 3-year tax exemption before the Inter-Ministerial Board (IMB), Section 56 angel tax relief, and GeM tender registration.",
    price: "₹9,999",
    priceSub: "+ GST | Complete recognition + 80-IAC package",
    features: [
      "DPIIT Recognition Certificate",
      "Section 80-IAC 3-Year Tax Exemption Dossier",
      "Angel Tax Exemption Form 2 Declaration",
      "GeM Portal Government Tender Registration",
      "Senior Chartered Accountant Consultation",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Users className="w-4 h-4" />,
    text: "Comprehensive DPIIT Eligibility Screening",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    text: "Pitch Deck & Innovation Statement Review",
  },
  {
    icon: <Building className="w-4 h-4" />,
    text: "Direct Startup India Portal Filing",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "DPIIT Certificate Issuance & Tax Benefits",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Startup India Registration →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Understanding DPIIT Recognition for Startups in India",
  "Section 80-IAC Income Tax Holiday: Eligibility & Application",
  "Angel Tax Exemption: How Startups File Form 2",
  "80% Patent Rebate & Fast-Track Examination for Startups",
  "How to Register as a Startup on GeM Portal",
  "Difference Between MCA Registration and DPIIT Startup Recognition",
];

function StartupGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Startup India Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    India has built one of the world&apos;s most vibrant and rapidly expanding startup ecosystems, and the <strong className="font-medium text-slate-800">Startup India Registration</strong> scheme is at the very core of this entrepreneurial transformation. Backed directly by the Government of India, this flagship program provides early-stage companies and innovative ventures with formal DPIIT recognition, substantial tax exemptions, subsidised intellectual property protection, streamlined compliance self-certification, and direct access to state-backed capital funds.
                  </p>
                </div>

                {/* Section 1: What is a Startup? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is a Startup?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    A startup is a newly incorporated business entity built around a unique idea, product, or service with high potential for rapid growth, market innovation, and commercial scalability. Unlike conventional businesses that operate on established commercial blueprints, startups focus on disrupting existing value chains or creating entirely new markets through innovation and modern technology.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    As per the statutory guidelines issued by the Government of India, a startup is formally defined as an entity incorporated or registered in India that:
                  </p>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Is less than 10 years old from the date of its incorporation or registration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Maintains an annual turnover not exceeding ₹100 crore in any financial year since its inception.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Is actively working towards innovation, development, or commercial improvement of products, processes, or services with a scalable business model.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Was not formed by splitting up or reconstructing an existing business already in operation.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-5 mb-2">
                    Types of Startups in India
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Technology Startups</h4>
                      <p className="text-[12.5px] font-light text-slate-600">Ventures focused on software development, Artificial Intelligence, SaaS platforms, and digital transformation.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Social Startups</h4>
                      <p className="text-[12.5px] font-light text-slate-600">Enterprises prioritizing measurable social impact, sustainable communities, healthcare access, and environmental solutions.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Scalable Startups</h4>
                      <p className="text-[12.5px] font-light text-slate-600">High-growth businesses built to capture massive national or global markets backed by venture capital.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Small Business &amp; Lifestyle Startups</h4>
                      <p className="text-[12.5px] font-light text-slate-600">Specialized ventures created around a founder&apos;s passion, niche domain expertise, or artisanal products.</p>
                    </div>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Key Characteristics of a Startup
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Innovation-led and technology-driven operations:</strong> Leveraging original intellectual property, software, or novel engineering methods.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>High scalability and non-linear growth potential:</strong> Designed to expand customer reach and revenue significantly without equivalent increases in production costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Early-stage dynamics:</strong> Navigating seed capital constraints, early market feedback cycles, and rapid product iteration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Risk-taking appetite:</strong> Supported by angel investors, venture funds, or incubator grants.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Targeted problem-solving:</strong> Addressing critical pain points in consumer workflows or business operations.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 2: What is the Startup India Scheme? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Startup India Scheme?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Startup India Scheme is a flagship national initiative unveiled on January 16, 2016, by the Government of India. The objective was to build an all-inclusive ecosystem that fosters entrepreneurship, stimulates grassroots innovation, and transforms India from a country of job-seekers into a powerhouse of job-creators.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Administered under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, the scheme operates through the centralized Startup India portal (<span className="text-[#155EEF]">startupindia.gov.in</span>), serving as a single-window digital gateway for online registration, verification, and incentive allocation.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Launch and Objective
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Launched on January 16, 2016, based on a comprehensive 19-point action plan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Aims to nurture innovation and promote entrepreneurship across all states and union territories.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Provides a simplified regulatory and legal compliance framework for emerging ventures.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Dramatically reduces regulatory burdens through self-certification mechanisms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Bridges the institutional gap between academic research, industry mentors, and venture capital.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Key Pillars of the Startup India Initiative
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#00A86B] flex items-center justify-center font-bold text-sm mb-2">
                        1
                      </div>
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Simplification &amp; Handholding</h4>
                      <p className="text-[12px] font-light text-slate-600">Online single-window portal, mobile app support, fast-track patent review, and 90-day exit resolution.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#00A86B] flex items-center justify-center font-bold text-sm mb-2">
                        2
                      </div>
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Funding Support &amp; Tax Incentives</h4>
                      <p className="text-[12px] font-light text-slate-600">₹10,000 crore Fund of Funds, credit guarantees, 3-year Section 80-IAC tax holiday, and angel tax exemptions.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#00A86B] flex items-center justify-center font-bold text-sm mb-2">
                        3
                      </div>
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1">Industry-Academia Incubation</h4>
                      <p className="text-[12px] font-light text-slate-600">Atal Incubation Centers, research parks, annual startup fests, and global market outreach programs.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: What is DPIIT Registration for Startups in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is DPIIT Registration for Startups in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    DPIIT Registration is the formal recognition protocol conducted by the Department for Promotion of Industry and Internal Trade. Obtaining this certification is the primary gateway through which eligible startups obtain official recognition from the Central Government, separating themselves from standard commercial business entities.
                  </p>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Once an enterprise is granted DPIIT recognition, it receives an authentic Certificate of Recognition endowed with a distinct DPIIT serial number. This certificate validates the business as innovative and scalable, granting immediate access to statutory tax holidays, discounted IP protection, relaxed public tender rules, and government-backed credit facilities.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    How DPIIT Registration Differs from Regular Business Registration
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Separate Statutory Layer:</strong> Incorporating with the Ministry of Corporate Affairs (MCA) or Registrar of Firms (RoF) grants legal existence; DPIIT recognition bestows qualified startup status.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Innovation Mandate:</strong> Only companies demonstrating novelty, technological scalability, or significant employment generation qualify for DPIIT certification.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Exclusive Privileges:</strong> Standard registered businesses must comply with all regular labor inspection routines and standard corporate tax rules without exemptions.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Certificate Details
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    The DPIIT Certificate of Recognition is issued electronically through the national Startup India portal upon application review. It features the company&apos;s corporate name, CIN / LLPIN / Registration Number, DPIIT Recognition Number, and date of issue. This official certificate never expires as long as the startup remains within the 10-year age limit and ₹100 crore annual turnover ceiling.
                  </p>
                </div>

                {/* Section 4: Who is Eligible for Startup India Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Who is Eligible for Startup India Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Eligibility for Startup India Registration is strictly regulated by guidelines established by DPIIT. Only businesses that meet all statutory eligibility criteria are approved for recognition.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                      <h4 className="font-medium text-[14px] text-slate-900 mb-1.5 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#00A86B]" />
                        Age of Entity
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600">
                        The business must have been incorporated or registered for less than 10 years from the date of incorporation. Companies older than 10 years are disqualified.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                      <h4 className="font-medium text-[14px] text-slate-900 mb-1.5 flex items-center gap-2">
                        <BadgePercent className="w-4 h-4 text-[#00A86B]" />
                        Turnover Limit
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600">
                        The entity&apos;s annual turnover must not have exceeded ₹100 crore in any single financial year since incorporation.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                      <h4 className="font-medium text-[14px] text-slate-900 mb-1.5 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#00A86B]" />
                        Innovation Criteria
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600">
                        Must actively work towards development or commercial improvement of products, processes, or services, or demonstrate a scalable model with high job/wealth creation potential.
                      </p>
                    </div>
                  </div>

                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    <strong>Original Entity Requirement:</strong> The venture must not be formed by splitting up, reconstructing, or reincorporating an existing enterprise already in operation.
                  </p>
                </div>

                {/* Section 5: Which Sectors Are Eligible for Startup India Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Which Sectors Are Eligible for Startup India Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Startup India scheme is sector-agnostic and embraces innovative ventures across virtually all major industries. Startups across diverse domains have been granted DPIIT recognition.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-3">
                    10 Eligible Core Sectors
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                    {[
                      { title: "Information Technology & Software", desc: "SaaS, AI/ML, cloud infrastructure, cyber security, and enterprise tools." },
                      { title: "Agriculture & Allied Services (AgriTech)", desc: "Precision farming, supply chain automation, organic inputs, and farm tech." },
                      { title: "Healthcare & Biotechnology (HealthTech/BioTech)", desc: "Diagnostics, medical devices, telemedicine, genomics, and pharmaceuticals." },
                      { title: "Education Technology (EdTech)", desc: "E-learning platforms, upskilling portals, adaptive testing, and school management." },
                      { title: "Financial Technology (FinTech)", desc: "Digital payments, neo-banking, InsurTech, RegTech, and wealth tech." },
                      { title: "Clean Energy & Environmental Solutions", desc: "Solar innovations, EV mobility, battery tech, and waste management." },
                      { title: "Manufacturing & Engineering (Industry 4.0)", desc: "IoT hardware, robotics, 3D printing, advanced materials, and automation." },
                      { title: "Retail & E-Commerce", desc: "D2C brands, social commerce, automated inventory, and omnichannel tools." },
                      { title: "Logistics & Supply Chain Management", desc: "Fleet management, cold chain tracking, hyper-local delivery, and warehousing." },
                      { title: "Food Processing & FMCG", desc: "Alternative proteins, packaged health foods, functional beverages, and processing tech." },
                    ].map((sec, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#FAF9F7] border border-slate-200/70">
                        <div className="font-medium text-[13px] text-slate-800">{sec.title}</div>
                        <div className="text-[12px] font-light text-slate-500 mt-0.5">{sec.desc}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Excluded Entities
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Businesses formed by splitting, reconstructing, or rebranding an existing firm.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Companies with annual turnover exceeding ₹100 crore in any previous fiscal year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Entities incorporated or registered more than 10 years ago.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Conventional commercial operations lacking demonstrable innovation, technology adoption, or scalability.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 6: Which Business Entities Can Apply for Startup India in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Which Business Entities Can Apply for Startup India in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Government of India recognizes only three specific legal entity types under the Startup India framework. Choosing the right entity structure before initiating DPIIT registration is critical:
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
                            <a href="/company-registration" className="text-[#155EEF] hover:underline font-medium">
                              Private Limited Company
                            </a>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Companies Act, 2013</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Yes</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <a href="/llp-registration" className="text-[#155EEF] hover:underline font-medium">
                              Limited Liability Partnership (LLP)
                            </a>
                          </td>
                          <td className="py-3 px-4 text-slate-600">LLP Act, 2008</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Yes</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <a href="/partnership" className="text-[#155EEF] hover:underline font-medium">
                              Partnership Firm (Registered)
                            </a>
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

                {/* Section 7: What Documents Are Needed for Startup India Registration in India? */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Documents Are Needed for Startup India Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Preparing a complete dossier of authentic documents prior to filing ensures faster clearance and prevents avoidable requisition queries from DPIIT scrutiny officers.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Standard Documents Checklist
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Document Category</th>
                          <th className="py-3 px-4 font-normal">Description &amp; Requirements</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Certificate of Incorporation
                          </td>
                          <td className="py-3 px-4 text-slate-600">Official Certificate of Incorporation issued by MCA (Pvt Ltd / LLP) or RoF Registration Certificate.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Tax Identification (PAN)
                          </td>
                          <td className="py-3 px-4 text-slate-600">Permanent Account Number (PAN) card of the incorporated company, LLP, or partnership firm.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Founder &amp; Director Details
                          </td>
                          <td className="py-3 px-4 text-slate-600">KYC documents (PAN, Aadhaar/Passport, DIN/DPIN, email IDs, contact numbers) of all founders.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Proof of Concept / Pitch Deck
                          </td>
                          <td className="py-3 px-4 text-slate-600">Comprehensive presentation deck, website link, mobile app demo URL, or video articulating innovation and business model.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Authorization Letter
                          </td>
                          <td className="py-3 px-4 text-slate-600">Formal Board Resolution or Power of Attorney authorizing the designated founder to sign and submit the application.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            IP Filing Records (Optional)
                          </td>
                          <td className="py-3 px-4 text-slate-600">Details of any applied or granted patents, trademark application numbers, or registered designs (strengthens application).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Entity-wise Document Requirements
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Private Limited Company:</strong> MCA Certificate of Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), and Company PAN Card.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Limited Liability Partnership (LLP):</strong> LLP Agreement, Certificate of Incorporation issued by MCA, Designated Partners list, and LLP PAN Card.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Partnership Firm:</strong> Registered Partnership Deed, Registration Certificate issued by Registrar of Firms, Partners KYC, and Partnership PAN Card.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 8: How to Register a Startup Under the Startup India Scheme in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Register a Startup Under the Startup India Scheme in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Startup India registration process is completely online with zero physical visits to any government department. When backed by well-prepared documentation and structured innovation answers, the registration is processed smoothly.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-3">
                    8-Step Registration Roadmap
                  </h3>
                  <div className="space-y-3">
                    {[
                      { step: "1", title: "Incorporate Your Business Entity", text: "Register your venture as a Private Limited Company, LLP, or Registered Partnership Firm with the respective authority." },
                      { step: "2", title: "Visit the Startup India Portal", text: "Access the official government portal at startupindia.gov.in to initiate your profile creation." },
                      { step: "3", title: "Create Your User Account", text: "Sign up using your official business email ID, verify OTP, and complete your founder profile." },
                      { step: "4", title: "Fill the DPIIT Recognition Form", text: "Enter your legal entity name, date of incorporation, corporate identification number, business address, and industry sector." },
                      { step: "5", title: "Articulate Innovation & Scalability", text: "Draft comprehensive responses detailing how your product/service is innovative, what problem it solves, and how it scales." },
                      { step: "6", title: "Upload Required Documents", text: "Attach clear digital copies of your Certificate of Incorporation, pitch deck, authorization letter, and entity PAN card." },
                      { step: "7", title: "Self-Certify Statutory Compliance", text: "Affirm declarations confirming the entity satisfies all age, turnover, and non-reconstruction criteria." },
                      { step: "8", title: "Receive Digital DPIIT Certificate", text: "Upon government officer verification, your official DPIIT Recognition Certificate is issued with a unique recognition number." },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                        <div className="w-7 h-7 rounded-full bg-[#00A86B] text-white flex items-center justify-center text-xs font-semibold shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-medium text-[13.5px] text-slate-900">{item.title}</div>
                          <div className="text-[12.5px] font-light text-slate-600 mt-0.5">{item.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 9: What Are the Advantages of the Startup India Scheme in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Are the Advantages of the Startup India Scheme in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The Startup India initiative delivers an extensive matrix of advantages spanning beyond fiscal incentives. It establishes an enabling infrastructure that facilitates ease of doing business, risk reduction, and cross-border expansion.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Top Strategic Advantages
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Official Government Stamp:</strong> DPIIT recognition validates your venture in the eyes of institutional investors, commercial lenders, and corporate partners.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Access to Startup India Hub:</strong> A unified digital ecosystem connecting over 100,000+ startups with mentors, incubation centers, and government programs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Fast-track 90-Day Winding Up:</strong> Provision under the Insolvency and Bankruptcy Code (IBC) to smoothly shut down unviable operations within 90 days.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Public Procurement Preferences:</strong> Full exemption from Earnest Money Deposit (EMD), prior experience, and prior turnover rules on the GeM portal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Incubation &amp; R&amp;D Infrastructure:</strong> Direct access to DPIIT-supported research parks, Atal Incubation Centers, and prototyping labs across India.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Government Support Mechanisms &amp; Ecosystem Benefits
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    DPIIT conducts ongoing inter-ministerial coordination to expedite regulatory clearances, enact targeted policy interventions, and organize specialized development schemes for women-led ventures and startups originating in Tier-2 and Tier-3 cities.
                  </p>
                </div>

                {/* Section 10: What Are the Benefits of Registering Under Startup India in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Are the Benefits of Registering Under Startup India in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Registering under the Startup India scheme unlocks a structured suite of benefits specifically designed to ease early-stage capital drain and operational compliance bottlenecks:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">Tax Holiday (Section 80-IAC)</div>
                      <p className="text-[12.5px] font-light text-slate-600">100% income tax exemption on corporate profits for 3 consecutive financial years within the first 10 years of incorporation.</p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">Angel Tax Exemption (Section 56)</div>
                      <p className="text-[12.5px] font-light text-slate-600">Exemption from tax on share premiums exceeding Fair Market Value when issuing equity shares to accredited investors.</p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">80% Patent &amp; 50% Trademark Rebates</div>
                      <p className="text-[12.5px] font-light text-slate-600">Massive statutory rebates on patent filing and trademark applications, coupled with fast-tracked IP examinations.</p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">Compliance Self-Certification</div>
                      <p className="text-[12.5px] font-light text-slate-600">Self-certify compliance under 9 central labor laws and 3 environmental regulations without surprise inspections for up to 5 years.</p>
                    </div>
                  </div>
                </div>

                {/* Section 11: How Much Does Startup India Registration Cost in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How Much Does Startup India Registration Cost in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    The DPIIT recognition process itself carries zero government fees on the official Startup India portal. The overall expense is determined by the underlying legal entity registration fees and professional advisory costs:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Cost Component</th>
                          <th className="py-3 px-4 font-normal">Approximate Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            DPIIT Recognition Fee
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">Free (Official Government Portal)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Private Limited Company Incorporation
                          </td>
                          <td className="py-3 px-4 text-slate-600">₹6,999 – ₹14,999 (Stamp duty + MCA filings)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LLP Registration
                          </td>
                          <td className="py-3 px-4 text-slate-600">₹5,999 – ₹11,999 (LLP Agreement + filings)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Partnership Firm Registration
                          </td>
                          <td className="py-3 px-4 text-slate-600">₹2,999 – ₹5,999 (Partnership Deed + RoF)</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Merrafilings DPIIT Filing Package
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">Starting at ₹4,899 + GST</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Patent Filing (80% Rebate)
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">80% Subsidized Statutory Fee</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Trademark Filing (50% Rebate)
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">50% Subsidized Statutory Fee</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 12: What Tax Benefits Do Startups Get Under Startup India in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Tax Benefits Do Startups Get Under Startup India in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Statutory tax benefits are among the strongest incentives for entrepreneurs to pursue DPIIT startup recognition. The Government has carved out specific exemptions within the Income Tax Act, 1961:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Section 80-IAC — 3-Year Income Tax Holiday
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Recognised Private Limited Companies and LLPs incorporated on or after April 1, 2016, can apply to the Inter-Ministerial Board (IMB) for a 100% tax deduction on profits for any 3 consecutive assessment years out of their first 10 years of existence. This enables early-stage startups to reinvest 100% of generated profits back into business scaling and talent acquisition.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Section 56(2)(viib) — Angel Tax Exemption
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    When an unlisted startup issues shares to resident investors at a premium higher than Fair Market Value, the excess was historically taxed as income from other sources (the &ldquo;Angel Tax&rdquo;). DPIIT-recognised startups can claim full exemption from Section 56(2)(viib) by filing a simple Form 2 declaration on the Startup India portal, provided their aggregate paid-up capital and share premium do not exceed ₹25 crore (excluding investments from listed companies, non-residents, and SEBI-registered Category I AIFs).
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Capital Gains Tax Exemption (Section 54GB)
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    Long-term capital gains realized by individuals or HUFs from the sale of residential property are exempt from tax if the proceeds are reinvested into the equity shares of an eligible DPIIT startup for purchasing new plant and machinery.
                  </p>
                </div>

                {/* Section 13: What Funding Support Can DPIIT-Recognised Startups Access in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Funding Support Can DPIIT-Recognised Startups Access in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Access to institutional growth capital is one of the highest hurdles faced by early founders. The Startup India initiative addresses this through state-backed funding mechanisms available exclusively to recognized startups:
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="p-4 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[14px] text-slate-900 mb-1 flex items-center gap-2">
                        <Landmark className="w-4 h-4 text-[#00A86B]" />
                        Fund of Funds for Startups (FFS) — ₹10,000 Crore Corpus
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600">
                        The Government of India created a dedicated ₹10,000 crore Fund of Funds managed by the Small Industries Development Bank of India (SIDBI). Rather than investing directly in single enterprises, FFS contributes capital to SEBI-registered Alternative Investment Funds (daughter funds), which in turn deploy early-stage equity capital into DPIIT-recognised startups across the country.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[14px] text-slate-900 mb-1 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#00A86B]" />
                        Credit Guarantee Scheme for Startups (CGSS)
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600">
                        Managed by the National Credit Guarantee Trustee Company (NCGTC), CGSS provides credit guarantee coverage up to ₹10 crore per startup on loans sanctioned by commercial banks and NBFCs, dramatically lowering collateral requirements for early ventures seeking debt capital.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <h4 className="font-medium text-[14px] text-slate-900 mb-1 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#00A86B]" />
                        SIDBI Direct Loans &amp; Venture Capital Support
                      </h4>
                      <p className="text-[12.5px] font-light text-slate-600">
                        Direct loan products, quasi-equity, and working capital lines provided through SIDBI schemes specifically tailored for innovative manufacturing and technology startups.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 14: What IP Benefits Do Registered Startups Get in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What IP Benefits Do Registered Startups Get in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Protecting proprietary inventions, brand assets, and industrial designs is crucial for innovation-driven enterprises. The Startup India program provides subsidized and fast-tracked Intellectual Property (IP) privileges:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">Patent Benefits</h4>
                      <ul className="text-[12px] font-light text-slate-600 space-y-1.5 mt-2">
                        <li>• Fast-tracked patent examination &amp; grant</li>
                        <li>• 80% rebate on statutory patent filing fees</li>
                        <li>• Subsidized international PCT applications</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">Trademark Benefits</h4>
                      <ul className="text-[12px] font-light text-slate-600 space-y-1.5 mt-2">
                        <li>• Expedited examination by Trademark Registry</li>
                        <li>• 50% rebate on official filing fees</li>
                        <li>• Multi-class brand asset protection</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                      <h4 className="font-medium text-[13.5px] text-slate-900 mb-1 text-[#00A86B]">IP Facilitation Cell</h4>
                      <ul className="text-[12px] font-light text-slate-600 space-y-1.5 mt-2">
                        <li>• Free legal advisory from empanelled attorneys</li>
                        <li>• Government bears statutory facilitator fees</li>
                        <li>• Advisory across patents, designs &amp; copyrights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 15: How is a DPIIT Startup Different from an MCA Company in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How is a DPIIT Startup Different from an MCA Company in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Many entrepreneurs mistakenly believe that registering a company with the Ministry of Corporate Affairs (MCA) automatically affords them Startup India benefits. However, DPIIT recognition is an entirely distinct certification providing privileges that standard MCA companies do not receive:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-light text-slate-700">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Parameter</th>
                          <th className="py-3 px-4 font-normal">DPIIT-Recognised Startup</th>
                          <th className="py-3 px-4 font-normal">MCA-Registered Company</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Tax Holiday
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ 3-year exemption under Section 80-IAC</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Not applicable</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Angel Tax Exemption
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Available under Section 56(2)(viib)</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Not available</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Patent Fee Rebate
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ 80% rebate on statutory fees</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Standard fees apply</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Trademark Fee Rebate
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ 50% rebate on statutory fees</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Standard fees apply</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Self-Certification
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Under 9 labor &amp; 3 environmental laws</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Full regular compliance required</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Government Procurement
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ Exemption from prior turnover &amp; EMD</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Standard criteria strictly apply</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Fast-track Winding Up
                          </td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">✅ 90-day process under IBC</td>
                          <td className="py-3 px-4 text-red-500 font-light">❌ Standard lengthy timeline (180+ days)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 16: What Compliances Apply After Startup India Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Compliances Apply After Startup India Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    While DPIIT recognition affords substantial compliance relief, startups must fulfill certain ongoing baseline obligations to retain their recognition and ensure unbroken access to fiscal incentives:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Annual Corporate &amp; Tax Obligations
                  </h3>
                  <ul className="space-y-2 text-[13px] font-light text-slate-600 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>MCA Annual Filings:</strong> Timely filing of annual financial statements (AOC-4) and annual return (MGT-7/7A) for companies, or Form 8 and Form 11 for LLPs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Income Tax Returns:</strong> Annual income tax returns must be filed punctually before prescribed statutory deadlines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Statutory Books &amp; Audit:</strong> Maintenance of proper books of accounts and statutory chartered accountant audits as required by law.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>GST Return Compliance:</strong> Regular filing of GSTR-1 and GSTR-3B if registered under GST based on the turnover threshold.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Labor &amp; Environmental Self-Certification
                  </h3>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
                    DPIIT-recognised startups can self-certify compliance under 9 central labor laws (including Employee Provident Fund, ESIC, Payment of Gratuity, and Maternity Benefit) for up to 5 years from incorporation without routine inspections. Startups in non-hazardous industrial sectors can also self-certify compliance under 3 central environmental laws for up to 3 years.
                  </p>
                </div>

                {/* Section 17: What Are the Challenges and Opportunities Under Startup India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Are the Challenges and Opportunities Under Startup India?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    While the Startup India initiative has democratized entrepreneurship across India, founders must navigate both structural hurdles and dynamic opportunities:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/20">
                      <h4 className="font-medium text-[14px] text-red-900 mb-2 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-red-600" />
                        Key Challenges
                      </h4>
                      <ul className="text-[12.5px] font-light text-slate-700 space-y-2">
                        <li>• <strong>Documentation Rigor:</strong> Inadequate articulation of innovation narrative leading to DPIIT application rejection.</li>
                        <li>• <strong>Tier-2 &amp; Tier-3 Awareness Gaps:</strong> Limited local knowledge regarding IMB Section 80-IAC approval mechanics.</li>
                        <li>• <strong>Strict Eligibility Criteria:</strong> Disqualification of traditional business models lacking technological novelty.</li>
                        <li>• <strong>Scrutiny Turnaround Times:</strong> Follow-up queries from department officers requiring immediate formal clarification.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/20">
                      <h4 className="font-medium text-[14px] text-emerald-950 mb-2 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-[#00A86B]" />
                        Key Opportunities
                      </h4>
                      <ul className="text-[12.5px] font-light text-slate-700 space-y-2">
                        <li>• <strong>₹10,000 Crore SIDBI Fund Access:</strong> Channeled directly through leading Indian VC funds and institutional AIFs.</li>
                        <li>• <strong>Government GeM Market:</strong> Direct preferential bidding on billions worth of public procurement tenders.</li>
                        <li>• <strong>Investor Credibility:</strong> Substantially elevated valuation and investor comfort during seed and Series A rounds.</li>
                        <li>• <strong>Global Market Exposure:</strong> International bilateral startup bridges with Germany, Japan, Singapore, and the US.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 18: Why Choose Merrafilings for Startup India Registration? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Choose Merrafilings for Startup India Registration?
                  </h2>
                  <p className="text-[13.5px] font-light text-slate-600 leading-relaxed mb-4">
                    Merrafilings is one of India&apos;s leading tech-enabled platforms for startup incorporation, business registrations, and comprehensive corporate compliance. With a team of veteran Chartered Accountants, Company Secretaries, and startup corporate lawyers, we make DPIIT recognition swift, precise, and completely stress-free.
                  </p>
                  <ul className="space-y-2.5 text-[13px] font-light text-slate-600 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>End-to-End Handholding:</strong> From business incorporation to innovation narrative drafting and DPIIT portal filing, we handle the entire process without errors.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Pitch Deck &amp; Innovation Rationale Structuring:</strong> Our experts refine your pitch deck and business model narrative to align precisely with DPIIT scrutiny requirements.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Dedicated CA/CS Advisors:</strong> Receive continuous guidance from specialized corporate compliance officers who track your application through issuance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Integrated Cloud Accounting:</strong> Free 1-year access to the LEDGERS cloud platform for GST invoicing, automated bookkeeping, and statutory filing tracking.</span>
                    </li>
                  </ul>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="font-medium text-[14.5px] text-slate-900">Ready to Get Your Startup India DPIIT Recognition?</div>
                      <div className="text-[12.5px] font-light text-slate-600">Connect with our startup advisors for an immediate eligibility assessment.</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openContactModal()}
                      className="px-5 py-2.5 rounded-lg bg-[#00B074] hover:bg-[#009B66] text-white font-medium text-[13.5px] shadow-sm transition-all shrink-0 cursor-pointer"
                    >
                      Apply with Merrafilings
                    </button>
                  </div>
                </div>
    </>
  );
}

export default function StartupIndiaPage() {
  return (
    <ServicePageTemplate
      badgeText="Government of India Flagship Initiative"
      heroTitle={
        <>
          Get Your{" "}
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Startup India
          </span>{" "}
          Recognition Today
        </>
      }
      heroSubtitle="Start your journey towards funding opportunities, tax benefits, and national recognition. Register your startup under the Startup India Initiative and unlock long-term growth potential."
      formTitle="Apply for Startup India Registration Now"
      formSubtitle="Turn your innovative idea into a recognized business with Startup India Registration."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Choose the right Startup India and DPIIT recognition package for your venture."
      breadcrumbCurrent="Startup India"
      guideTitle="Startup India Registration Online in India"
      guideContent={<StartupGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Startup India and DPIIT recognition."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
