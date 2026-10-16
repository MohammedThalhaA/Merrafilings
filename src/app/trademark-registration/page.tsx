"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Building,
  Check,
  Clock,
  Landmark,
  BadgePercent,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  Globe2,
  TrendingUp,
  Layers,
  Zap,
  Briefcase,
  HelpCircle,
  Truck,
  CheckCircle,
  FileSpreadsheet,
  Calendar,
  DollarSign,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  Laptop,
  Sparkles,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "What is a trademark?",
    "a": "A trademark is a distinctive marker that distinguishes products or services from competitors. It can include symbols, designs, expressions, or identifiable features associated with a specific brand."
  },
  {
    "q": "What is trademark registration and its importance?",
    "a": "To answer a question of what is trademark registration, it involves legally securing exclusive rights to use a unique mark that distinguishes a company's goods or services. It provides legal protection and enhances brand recognition."
  },
  {
    "q": "Who can apply for trademark registration in India?",
    "a": "Trademark registration India is open to individuals, companies, proprietorship firms, partnerships, LLPs, Indian and foreign companies, trusts, and societies."
  },
  {
    "q": "What are the types of trademark registrations in India?",
    "a": "Trademark registration India includes product marks, service marks, collective marks, certification marks, shape marks, pattern marks, and sound marks."
  },
  {
    "q": "How do I choose the correct trademark class?",
    "a": "Carefully select the appropriate class that categorizes your goods or services. Common classes include Class 9 (software, electronics), Class 25 (clothing), Class 35 (business management), and Class 41 (education). Our experts can help you select the correct trademark class when register trademark india."
  },
  {
    "q": "Why is a trademark search necessary?",
    "a": "A trademark search helps ensure the uniqueness and exclusivity of your brand by identifying pre-existing trademarks in the market. Merrafilings provides tools and support for this search in the process of trademark registration India."
  },
  {
    "q": "What initial details are required for trademark registration?",
    "a": "Initial details include the applicants name, business type, business objectives, brand/logo/slogan name, and registration address."
  },
  {
    "q": "What documents are needed for trademark registration India?",
    "a": "Required documents vary by applicant type. Common documents to register trademark India include PAN card, Aadhar card, GST certificate, incorporation certificate, and partnership deed."
  },
  {
    "q": "How to register trademark in India?",
    "a": "Here are the brief steps regarding how to register brand name in India: Trademark search; Class Selection and Document Preparation; Trademark Application Filing; Vienna Codification Process; Trademark Examination; Trademark Journal Publication; Trademark Objection/Opposition (if applicable); Trademark Hearing; Trademark Registration"
  },
  {
    "q": "What is the Vienna Codification process?",
    "a": "The Vienna Classification categorizes figurative elements of trademarks. The Registrar applies this classification to the trademarks figurative elements."
  },
  {
    "q": "What happens during trademark examination?",
    "a": "A Trademark Registrar officer assesses the application, generating an examination report. The officer can accept, allow for journal publication or object to the application."
  }
];

const FAQ_COL_2 = [
  {
    "q": "What is a trademark journal publication?",
    "a": "Accepted trademarks are published in the Trademark journal, allowing public objections. If no objections arise within 90 days, the trademark is registered in 12 weeks."
  },
  {
    "q": "What is a trademark opposition?",
    "a": "A third party may file an objection to trademark registration if it harms their interests. Both parties can present arguments, and a Trademark Hearing Officer decides."
  },
  {
    "q": "What happens if there are no objections or oppositions?",
    "a": "If no objections are raised, the trademark document and registration certificate are prepared and issued, granting exclusive rights to the owner."
  },
  {
    "q": "How often should I renew my trademark?",
    "a": "Trademarks must be renewed every ten years to maintain their protection."
  },
  {
    "q": "How can Merrafilings assist with trademark registration?",
    "a": "Merrafilings simplifies the trademark registration process, offering services like trademark search, class selection, document collection, application filing, objection handling, and more."
  },
  {
    "q": "Can I use the TM symbol after applying for trademark registration?",
    "a": "Yes, once the trademark application is submitted, you can use the TM symbol to indicate that you have applied for trademark registration."
  },
  {
    "q": "Can I appeal a decision made during the trademark registration process?",
    "a": "You can appeal decisions to the Intellectual Property Appellate Board if you disagree with the Registrar or Hearing Officers judgment."
  },
  {
    "q": "What are the post-registration services offered by Merrafilings?",
    "a": "Merrafilings provides post-registration services such as trademark renewal, assignment, licensing, and other related services."
  },
  {
    "q": "How do I get started with Merrafilings for trademark registration?",
    "a": "You can contact our experts and initiate the process by providing basic information about your desired trademark and industry. Merrafilings experts will guide you throughout the registration process."
  },
  {
    "q": "How to register brand name in India?",
    "a": "Here are the steps on how to register brand name in India: Create a unique brand name.; Conduct an online trademark search.; File a trademark application with the relevant class.; Address any objections.; Wait for publication in the Trade Marks Journal.; Receive a trademark registration certificate if no opposition arises."
  },
  {
    "q": "What is the process of logo registration in India?",
    "a": "Here is the step-by-step process of the logo registration in India: Conduct a trademark search.; File a trademark application with the Trademark Office.; Pay the required fee.; Wait for examination and publication in the Trade Marks Journal.; Address any oppositions.; Receive a registration certificate if approved."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "How to get trademark in India?",
    "a": "Here are the brief procedure on how to get trademark in India: Choose a unique mark.; Conduct a trademark search.; File a trademark application using Form TM-A.; Pay the registration fee.; Address any objections or oppositions.; Receive a registration certificate upon approval."
  },
  {
    "q": "How to trademark my business name in India?",
    "a": "Here is the step by step process to answer the question of \"how to trademark my business name in India: Ensure the name is unique and not already in use.; Conduct a trademark search.; File a trademark application with the relevant class.; Pay the registration fee.; Address any objections or oppositions.; Receive a registration certificate if approved."
  },
  {
    "q": "What is a brand name in trademark law?",
    "a": "A brand name refers to a unique name or identifier used to distinguish a company’s products or services. When registered, it becomes a legally protected trademark."
  },
  {
    "q": "Can I register my brand name without a logo?",
    "a": "Yes, you can register a wordmark (brand name) without a logo. It protects the text irrespective of design or formatting."
  },
  {
    "q": "How long does it take to register a brand name in India?",
    "a": "It typically takes 6 to 18 months for full registration, but you can use the ™ symbol immediately after filing."
  },
  {
    "q": "What symbol can I use after registering my brand name?",
    "a": "You can use the ™ symbol after filing and the ® symbol once your brand name is officially registered."
  },
  {
    "q": "Is it mandatory to register a brand name?",
    "a": "While not legally mandatory, registration is highly recommended to secure exclusive rights and avoid legal disputes."
  },
  {
    "q": "What is the validity of a registered brand name?",
    "a": "A trademark is valid for 10 years from the date of registration and can be renewed indefinitely every 10 years."
  },
  {
    "q": "Can a brand name be registered under multiple classes?",
    "a": "Yes, if your brand deals with multiple goods or services across different sectors, it can be registered under multiple trademark classes."
  },
  {
    "q": "What if someone objects to my brand name application?",
    "a": "If an objection is raised, you must file a response with supporting documents to clarify or defend your application."
  },
  {
    "q": "Can I register a brand name already in use by someone else?",
    "a": "No, if a brand name is already registered or closely resembles an existing trademark, your application may be rejected or opposed."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "What happens if I don’t renew my trademark?",
    "a": "If you don’t renew it within the grace period, your trademark will lapse and you’ll lose exclusive rights over your brand name."
  },
  {
    "q": "What is a brand name in trademark law?",
    "a": "A brand name refers to a unique name or identifier used to distinguish a company’s products or services. When registered, it becomes a legally protected trademark."
  },
  {
    "q": "Can I register my brand name without a logo?",
    "a": "Yes, you can register a wordmark (brand name) without a logo. It protects the text irrespective of design or formatting."
  },
  {
    "q": "How long does it take to register a brand name in India?",
    "a": "It typically takes 6 to 18 months for full registration, but you can use the ™ symbol immediately after filing."
  },
  {
    "q": "What symbol can I use after registering my brand name?",
    "a": "You can use the ™ symbol after filing and the ® symbol once your brand name is officially registered."
  },
  {
    "q": "Is it mandatory to register a brand name?",
    "a": "While not legally mandatory, registration is highly recommended to secure exclusive rights and avoid legal disputes."
  },
  {
    "q": "What is the validity of a registered brand name?",
    "a": "A trademark is valid for 10 years from the date of registration and can be renewed indefinitely every 10 years."
  },
  {
    "q": "Can a brand name be registered under multiple classes?",
    "a": "Yes, if your brand deals with multiple goods or services across different sectors, it can be registered under multiple trademark classes."
  },
  {
    "q": "What if someone objects to my brand name application?",
    "a": "If an objection is raised, you must file a response with supporting documents to clarify or defend your application."
  },
  {
    "q": "Can I register a brand name already in use by someone else?",
    "a": "No, if a brand name is already registered or closely resembles an existing trademark, your application may be rejected or opposed."
  },
  {
    "q": "What happens if I don’t renew my trademark?",
    "a": "If you don’t renew it within the grace period, your trademark will lapse and you’ll lose exclusive rights over your brand name."
  }
];

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Exclusive Nationwide Brand Ownership & Monopoly" },
  { icon: <Sparkles className="w-4 h-4" />, text: "Instant Right to Use ™ Symbol Upon Application Filing" },
  { icon: <Globe2 className="w-4 h-4" />, text: "Comprehensive AI-Powered Public Search Across All 45 Classes" },
  { icon: <Clock className="w-4 h-4" />, text: "10-Year Perpetual Statutory Brand Protection with Renewals" },
  { icon: <Award className="w-4 h-4" />, text: "Same-Day Form TM-A Filing by Registered Trademark Attorneys" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Individual / Startup / MSME Filing",
    shortDesc: "Official trademark application for sole proprietors, individuals, DPIIT startups, and Udyam-registered MSMEs.",
    expandedDesc: "Includes extensive public trademark search, Nice classification mapping, preparation of Form TM-A, 50% government fee concession eligibility check, and same-day electronic filing on the IP India portal.",
    price: "₹1,999",
    priceSub: "+ Govt Fee ₹4,500 | 1 Class",
    badge: "50% Govt Rebate",
    features: [
      "In-Depth Phonetic & Visual TM Search",
      "Accurate Nice Class Selection (Classes 1-45)",
      "Form TM-A Preparation & Same-Day E-Filing",
      "Instant ™ Symbol Allotment & Govt Receipt",
      "50% Concession for MSMEs & Startups",
      "Dedicated Trademark Attorney Assistance",
    ],
  },
  {
    name: "Company / LLP / Partnership Filing",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Statutory trademark registration for Private Limited, LLP, Public Limited, and established commercial enterprises.",
    expandedDesc: "Complete corporate brand protection covering board resolution / authorization letter drafting, logo & wordmark dual review, Form TM-A filing, and active examination tracking through official journal publication.",
    price: "₹2,999",
    priceSub: "+ Govt Fee ₹9,000 | 1 Class",
    features: [
      "Comprehensive Multi-Class Conflict Search",
      "Board Resolution & TM-48 Legal Authorization",
      "Same-Day Form TM-A Digital Lodgement",
      "Instant Application Number & TM Receipt",
      "Real-Time Examination Report Monitoring",
      "Priority Legal Support by Senior TM Agents",
      "1-Year Status Tracking till Certificate Grant",
    ],
  },
  {
    name: "Comprehensive Brand Protection Suite",
    shortDesc: "Multi-class filing, examination objection defense coverage, and 1-year brand infringement surveillance.",
    expandedDesc: "Ideal for fast-scaling brands and D2C enterprises. Includes trademark filing across 2 relevant classes, complimentary legal reply for any procedural examination objections, and proactive journal monitoring against copycats.",
    price: "₹6,999",
    priceSub: "+ Govt Fees | Multi-Class + Defense",
    badge: "Enterprise Suite",
    features: [
      "Dual Class Filing (e.g., Goods + Services)",
      "Full Examination Objection Defense Coverage",
      "User Affidavit & Commercial Evidence Prep",
      "1-Year Trademark Journal Infringement Alerts",
      "Amazon Brand Registry & FlipKart Support",
      "Dedicated Senior IP Counsel Retainer",
      "Official ® Registration Certificate Guarantee",
    ],
  },
];

const RELATED_GUIDES = [
  {
    title: "How to Apply for Trademark Registration Online in India?",
    href: "/trademark-registration/how-to-apply-for-trademark-registration",
  },
  {
    title: "List of Classes for Trademark Registration in India",
    href: "/trademark-registration/list-of-classes-for-trademark-registration",
  },
  {
    title: "Trademark Registration in India Can Be Renewed After How Many Years?",
    href: "/trademark-registration/trademark-registration-in-india-can-be-renewed-after",
  },
  {
    title: "Trademark Registration Cost in India",
    href: "/trademark-registration/trademark-registration-cost-in-india",
  },
  {
    title: "Trademark Registration Process Flowchart",
    href: "/trademark-registration/trademark-registration-process-flowchart",
  },
];

const RELATED_SERVICES_TAGS = [
  "Trademark Objection",
  "Trademark Renewal",
  "Copyright Registration",
  "Patent Registration",
  "Design Registration",
  "Logo Designing"
];

const POPULAR_SEARCHES_TAGS = [
  "trademark registration online India",
  "trademark search portal IP India",
  "cost of trademark registration for startup",
  "trademark certificate download with application number",
  "difference between TM and R symbol"
];

function TrademarkRegistrationGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-semibold text-slate-950">Trademark Registration in India</strong> is governed by the <strong className="font-semibold text-slate-950">Trade Marks Act, 1999</strong> and administered by the Controller General of Patents, Designs, and Trade Marks (CGPDTM), Ministry of Commerce and Industry. A registered trademark grants the applicant exclusive legal ownership and nationwide monopoly over their brand name, logo, slogan, label, sound mark, or shape of goods. Obtaining a trademark prevents unauthorized third parties, competitors, and counterfeiters from using deceptive, confusingly similar marks, while creating an intangible commercial asset that significantly elevates enterprise valuation during venture funding, franchising, and licensing deals.
        </p>
      </div>

      {/* Section 1: What is Trademark Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is Trademark Registration in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A trademark is any visual or distinctive sign capable of being represented graphically and capable of distinguishing the goods or services of one enterprise from those of others. Trademark registration confers statutory protection under Section 28 of the Trade Marks Act 1999, providing the registered proprietor the exclusive right to use the mark in relation to the goods or services for which it is registered and to obtain legal relief in respect of trademark infringement.
        </p>
      </section>

      {/* Section 2: Who Needs Trademark Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who Needs Trademark Registration in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Any individual, startup, MSME, or corporation that sells products or delivers services under a unique commercial identity needs trademark registration:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
              <Store className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>E-Commerce &amp; D2C Brands</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Mandatory to unlock Amazon Brand Registry, Flipkart Brand Protection, and prevent unauthorized sellers from hijacking product listings.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-blue-700 transition-colors flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Startups &amp; Tech Ventures</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Protects proprietary software, mobile app names, domain trademarks, and creates valuable IP assets required for institutional venture funding.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-purple-700 transition-colors flex items-center gap-2">
              <Factory className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Manufacturers &amp; Traders</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Shields packaging artwork, product names, FMCG brand identities, and dealer networks against cheap counterfeit copies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits of Trademark Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Core Benefits of Trademark Registration
        </h2>
        <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-900 font-normal pl-4 list-disc">
          <li><strong className="font-semibold text-slate-950">Exclusive Legal Monopoly:</strong> Complete legal right to prevent competitors from using the same or deceptively similar name in your industry.</li>
          <li><strong className="font-semibold text-slate-950">Right to Use the ® Symbol:</strong> Only registered trademark owners can display the prestigious ® symbol, proving verified authenticity to customers.</li>
          <li><strong className="font-semibold text-slate-950">Legal Protection Against Infringement:</strong> Power to file civil and criminal suits in court, obtain immediate interim injunctions, and seize counterfeit stock.</li>
          <li><strong className="font-semibold text-slate-950">Global Brand Protection:</strong> A registered Indian trademark serves as the base application to seek international protection across 130+ countries under the Madrid Protocol.</li>
          <li><strong className="font-semibold text-slate-950">Transferable Commercial Asset:</strong> Trademarks can be licensed, franchised, or sold, generating consistent royalty revenue.</li>
        </ul>
      </section>

      {/* Section 4: Types of Trademarks */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Types of Trademarks That Can Be Registered in India
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs sm:text-[12.5px] font-normal text-slate-800">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">
            <strong className="block text-slate-950 font-semibold mb-1">Word Mark</strong>
            Brand names, words, or letters (e.g., Apple, Nike)
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">
            <strong className="block text-slate-950 font-semibold mb-1">Device / Logo Mark</strong>
            Visual logos, symbols, or graphic representations
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">
            <strong className="block text-slate-950 font-semibold mb-1">Tagline / Slogan</strong>
            Catchy brand catchphrases (e.g., &quot;Just Do It&quot;)
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#155EEF] transition-all">
            <strong className="block text-slate-950 font-semibold mb-1">Sound / 3D Mark</strong>
            Audio tunes, jingles, and distinctive product shapes
          </div>
        </div>
      </section>

      {/* Section 5: Trademark Search & Nice Classification */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Trademark Search &amp; Nice Classification (Classes 1 to 45)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Before submitting an application, conducting an exhaustive search on the IP India database is mandatory to avoid objections under Section 11 (similarity with existing marks). Trademarks are filed under the international <strong className="font-semibold text-slate-950">Nice Classification</strong> comprising 45 classes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-[13px] font-normal text-slate-800">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm">Classes 1 to 34: Goods &amp; Manufactured Products</h3>
            <p className="text-slate-800 mt-1 leading-relaxed">
              Covers chemicals, pharmaceuticals, electronics, textiles, apparel, jewelry, packaged food, beverages, and cosmetics.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm">Classes 35 to 45: Commercial Services</h3>
            <p className="text-slate-800 mt-1 leading-relaxed">
              Covers retail/wholesale trading, advertising, software &amp; IT development, banking, education, hospitality, and legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 & Table 1: Trademark Registration Process in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. The 8-Stage Trademark Registration Process in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The registration journey progresses through defined statutory milestones administered by the Trade Marks Registry:
        </p>

        {/* Table 1: Process */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Stage</th>
                <th className="py-3 px-4">Statutory Description</th>
                <th className="py-3 px-4">Key Legal Activities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">1. Application Preparation</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Document collation &amp; class mapping</td>
                <td className="py-3 px-4 font-normal text-slate-900">Audit logo artwork, draft goods/services list, execute Form TM-48 power of attorney</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">2. Online E-Filing</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Submission on IP India gateway</td>
                <td className="py-3 px-4 font-normal text-slate-900">Form TM-A lodged, statutory fee paid, instant application number and ™ right generated</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">3. Formalities Check Pass</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Administrative scrutiny</td>
                <td className="py-3 px-4 font-normal text-slate-900">Registry checks basic documents, user affidavit, fee concession eligibility (MSME/Startup)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">4. Substantive Examination</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Examination by Examiner</td>
                <td className="py-3 px-4 font-normal text-slate-900">Searches existing database for conflicts under Section 9 (distinctiveness) and Section 11 (similarity)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">5. Journal Publication</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Advertisement in TM Journal</td>
                <td className="py-3 px-4 font-normal text-slate-900">If accepted, published in the official weekly Trademark Journal for public notice</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">6. 4-Month Opposition Window</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Statutory public opposition</td>
                <td className="py-3 px-4 font-normal text-slate-900">Third parties can file opposition within 120 days; if opposed, counter-statement filed</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">7. Final Registration Approval</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Clearance post-opposition</td>
                <td className="py-3 px-4 font-normal text-slate-900">Upon completion of opposition period without objections, mark moves to certificate stage</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-purple-50/40">
                <td className="py-3 px-4 font-bold text-purple-700">8. ® Certificate Grant</td>
                <td className="py-3 px-4 font-semibold text-slate-950">Official Registration Certificate</td>
                <td className="py-3 px-4 font-medium text-slate-900">Digitally signed, QR-coded Certificate issued with 10-year validity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7 & Table 2: Typical Timeline */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Typical Trademark Registration Timelines in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          While you obtain the legal right to use the ™ symbol on the very day of filing, the complete progression to the ® symbol typically spans:
        </p>

        {/* Table 2: Timeline */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Registration Milestone</th>
                <th className="py-3 px-4">Standard Estimated Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Filing Form TM-A &amp; ™ Symbol Right</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">Same Day (Within 24 Hours)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Formalities Check &amp; Examination Report</td>
                <td className="py-3 px-4 font-normal text-slate-900">1 to 3 Months</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Advertisement in Trademark Journal</td>
                <td className="py-3 px-4 font-normal text-slate-900">2 to 4 Weeks Post-Acceptance</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Statutory Public Opposition Window</td>
                <td className="py-3 px-4 font-normal text-slate-900">4 Months (Mandatory by Law)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Final ® Certificate Generation</td>
                <td className="py-3 px-4 font-normal text-slate-900">2 to 4 Weeks Post-Opposition</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-purple-50/40">
                <td className="py-3 px-4 font-bold text-purple-700">Total Turnaround (Uncontested Mark)</td>
                <td className="py-3 px-4 font-bold text-purple-700">6 to 8 Months (Average)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Government Fees & Startup Concessions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Statutory Government Fees &amp; 50% Startup Concessions
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Trade Marks Rules, 2017 offer generous government fee rebates to promote startups and micro enterprises:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-[13px] font-normal text-slate-800">
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
            <h3 className="font-semibold text-emerald-950 text-xs sm:text-sm">Individuals, Startups &amp; MSMEs: ₹4,500 / Class</h3>
            <p className="text-emerald-900 mt-1 leading-relaxed">
              Proprietorships, individuals, DPIIT recognized startups, and Udyam-registered enterprises pay 50% discounted government fee of ₹4,500 per class (e-filing).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80">
            <h3 className="font-semibold text-blue-950 text-xs sm:text-sm">Corporates &amp; Non-MSMEs: ₹9,000 / Class</h3>
            <p className="text-blue-900 mt-1 leading-relaxed">
              Private Limited companies, Public Limited, LLPs, and foreign corporate entities without MSME/Startup certificates pay the standard ₹9,000 per class.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Mandatory Documents for Trademark Registration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 font-medium">Brand Name, Slogan, or High-Resolution Logo Artwork</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 font-medium">PAN &amp; Aadhaar / Passport of the applicant</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 font-medium">Certificate of Incorporation / Partnership Deed (if company)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 font-medium">Udyam Registration Certificate (for 50% fee concession)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 font-medium">Signed Form TM-48 (Legal Power of Attorney)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 font-medium">User Affidavit with proof of prior usage date (if mark in use)</span>
          </div>
        </div>
      </section>

      {/* Section 10: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Why Choose Merrafilings for Trademark Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Merrafilings is India&apos;s leading Intellectual Property firm, managing trademark filings for over 100,000+ businesses with the highest first-time grant rate:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Same-Day Filing &amp; Instant Application Number</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Dedicated Trademark Attorneys &amp; Registered IP Agents</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Complimentary Multi-Layered Conflict Search</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-emerald-800 font-medium transition-colors">Full 10-Year Validity Tracking &amp; Certificate Vault</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Trademark Registration Online")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Register Your Trademark Online Now</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function TrademarkRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Controller General of Patents, Designs &amp; Trade Marks"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Trademark Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Secure exclusive legal rights to your brand name, logo, and tagline under the Trade Marks Act 1999. Use the ™ symbol same-day, prevent counterfeit copycats, and protect your brand equity across India."
      formTitle="Register Your Trademark"
      formSubtitle="Enter your brand details below to get a complimentary public trademark search report."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">trademark filing pricing.</span>
        </>
      }
      pricingSubtitle="Select your business structure for same-day Form TM-A e-filing by registered trademark attorneys."
      breadcrumbCurrent="Trademark Registration"
      guideTitle="Trademark Registration Online - Brand Name &amp; Logo Protection"
      guideContent={<TrademarkRegistrationGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about trademark registration, Nice classification, government fees, and ™ symbol in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
