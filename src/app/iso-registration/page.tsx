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
  AlertTriangle,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  UtensilsCrossed,
  Flame,
  Download,
  Search,
  CheckCircle,
  HelpCircle,
  Wheat,
  Truck,
  Globe2,
  Layers,
  Zap,
  Cpu,
  HeartPulse,
  Leaf,
  Lock,
  Compass,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "What is ISO registration?",
    "a": "ISO registration refers to obtaining certification for compliance with one or more standards established by the International Organization for Standardization (ISO)."
  },
  {
    "q": "Why should a company obtain ISO certification?",
    "a": "Companies obtain ISO certification to demonstrate their commitment to quality and to increase customer confidence in their products and services. It also helps them improve their internal processes and efficiency and can be required for specific contracts or business opportunities."
  },
  {
    "q": "What is the purpose of ISO registration?",
    "a": "ISO registration aims to ensure that a company meets the needs of its customers and stakeholders while complying with regulatory requirements."
  },
  {
    "q": "What are the benefits of ISO registration?",
    "a": "The benefits of ISO registration include the following: Improved credibility; Enhanced customer satisfaction; Better compliance with legal and regulatory requirements; Increased efficiency and productivity"
  },
  {
    "q": "How can a company prepare for ISO registration in India?",
    "a": "Conducting a gap analysis to identify areas where the company's current quality management system does not meet the requirements of the relevant ISO standard can help it prepare for ISO registration."
  },
  {
    "q": "How long does it take to get ISO certification?",
    "a": "Obtaining ISO certification depends on the size and complexity of the organization, as well as the scope of the certification. Implementing a quality management system and undergoing certification typically takes several months to a year or more."
  },
  {
    "q": "Is ISO certification mandatory for businesses in India?",
    "a": "ISO certification is not mandatory for businesses in India, but it can be a requirement for specific contracts or business opportunities."
  }
];

const FAQ_COL_2 = [
  {
    "q": "Who can issue ISO certification in India?",
    "a": "The certification of ISO certification can be issued by third-party certification bodies accredited by the National Accreditation Board for Certification Bodies (NABCB) or other recognized accreditation bodies."
  },
  {
    "q": "Who can issue ISO registration in India?",
    "a": "ISO registration can be issued by third-party certification bodies accredited by the National Accreditation Board for Certification Bodies (NABCB) or other recognized accreditation bodies."
  },
  {
    "q": "What is the ISO audit process?",
    "a": "The ISO audit process systematically reviews the organization's operations, procedures, and systems to determine whether they comply with the applicable ISO standard."
  },
  {
    "q": "How long is ISO certification valid?",
    "a": "ISO certification is typically valid for three years, after which the company must undergo a recertification audit to maintain certification."
  },
  {
    "q": "What is the cost of ISO certification in India?",
    "a": "The cost of ISO certification in India varies depending on the certification body, the organizations size and complexity, and the certifications scope. It typically includes the cost of the initial audit and ongoing surveillance and recertification audits."
  },
  {
    "q": "How often do organizations need to renew their ISO certification?",
    "a": "ISO certification is typically valid for three years, after which the organization must undergo a recertification audit to renew their certification."
  },
  {
    "q": "What is the role of the certification body in ISO registration?",
    "a": "The role of the certification body in ISO registration is to conduct an audit to verify that the companys quality management system meets the requirements of the relevant ISO standard."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "What is the role of the National Accreditation Board for Certification Bodies (NABCB) in ISO registration?",
    "a": "The role of the NABCB is to accredit certification bodies that are qualified to issue ISO registration certificates."
  },
  {
    "q": "What is the process for obtaining ISO registration in India?",
    "a": "Obtaining ISO registration in India involves implementing a quality management system that meets the requirements of the relevant ISO standard and undergoing an audit by a third-party certification body."
  },
  {
    "q": "How can an organization maintain ISO certification?",
    "a": "An organization can maintain ISO certification by regularly reviewing and updating its quality management system, conducting internal audits, and addressing non-conformities."
  },
  {
    "q": "How can an organization prepare for the ISO certification audit?",
    "a": "An organization can prepare for the ISO certification audit by documenting processes and procedures, training employees, and implementing a quality management system."
  },
  {
    "q": "Can an organization fail the ISO certification audit?",
    "a": "An organization can only succeed in the ISO certification audit if it meets the applicable ISO standard requirements."
  },
  {
    "q": "Can small businesses get ISO certification?",
    "a": "Yes, small businesses can get ISO certification if they comply with the applicable ISO standard requirements."
  },
  {
    "q": "What are the ISO certification requirements?",
    "a": "The ISO certification requirements vary depending on the specific ISO standard. Still, generally, they include implementing a quality management system, documenting processes and procedures, and demonstrating compliance with applicable legal and regulatory requirements."
  },
  {
    "q": "What is ISO registration?",
    "a": "ISO registration refers to obtaining certification for compliance with one or more standards established by the International Organization for Standardization (ISO)."
  },
  {
    "q": "Why should a company obtain ISO certification?",
    "a": "Companies obtain ISO certification to demonstrate their commitment to quality and to increase customer confidence in their products and services. It also helps them improve their internal processes and efficiency and can be required for specific contracts or business opportunities."
  },
  {
    "q": "What is the purpose of ISO registration?",
    "a": "ISO registration aims to ensure that a company meets the needs of its customers and stakeholders while complying with regulatory requirements."
  },
  {
    "q": "What are the benefits of ISO registration?",
    "a": "The benefits of ISO registration include the following: Improved credibility; Enhanced customer satisfaction; Better compliance with legal and regulatory requirements; Increased efficiency and productivity"
  },
  {
    "q": "How can a company prepare for ISO registration in India?",
    "a": "Conducting a gap analysis to identify areas where the company's current quality management system does not meet the requirements of the relevant ISO standard can help it prepare for ISO registration."
  },
  {
    "q": "How long does it take to get ISO certification?",
    "a": "Obtaining ISO certification depends on the size and complexity of the organization, as well as the scope of the certification. Implementing a quality management system and undergoing certification typically takes several months to a year or more."
  },
  {
    "q": "Is ISO certification mandatory for businesses in India?",
    "a": "ISO certification is not mandatory for businesses in India, but it can be a requirement for specific contracts or business opportunities."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "Who can issue ISO certification in India?",
    "a": "The certification of ISO certification can be issued by third-party certification bodies accredited by the National Accreditation Board for Certification Bodies (NABCB) or other recognized accreditation bodies."
  },
  {
    "q": "Who can issue ISO registration in India?",
    "a": "ISO registration can be issued by third-party certification bodies accredited by the National Accreditation Board for Certification Bodies (NABCB) or other recognized accreditation bodies."
  },
  {
    "q": "What is the ISO audit process?",
    "a": "The ISO audit process systematically reviews the organization's operations, procedures, and systems to determine whether they comply with the applicable ISO standard."
  },
  {
    "q": "How long is ISO certification valid?",
    "a": "ISO certification is typically valid for three years, after which the company must undergo a recertification audit to maintain certification."
  },
  {
    "q": "What is the cost of ISO certification in India?",
    "a": "The cost of ISO certification in India varies depending on the certification body, the organizations size and complexity, and the certifications scope. It typically includes the cost of the initial audit and ongoing surveillance and recertification audits."
  },
  {
    "q": "How often do organizations need to renew their ISO certification?",
    "a": "ISO certification is typically valid for three years, after which the organization must undergo a recertification audit to renew their certification."
  },
  {
    "q": "What is the role of the certification body in ISO registration?",
    "a": "The role of the certification body in ISO registration is to conduct an audit to verify that the companys quality management system meets the requirements of the relevant ISO standard."
  },
  {
    "q": "What is the role of the National Accreditation Board for Certification Bodies (NABCB) in ISO registration?",
    "a": "The role of the NABCB is to accredit certification bodies that are qualified to issue ISO registration certificates."
  },
  {
    "q": "What is the process for obtaining ISO registration in India?",
    "a": "Obtaining ISO registration in India involves implementing a quality management system that meets the requirements of the relevant ISO standard and undergoing an audit by a third-party certification body."
  },
  {
    "q": "How can an organization maintain ISO certification?",
    "a": "An organization can maintain ISO certification by regularly reviewing and updating its quality management system, conducting internal audits, and addressing non-conformities."
  },
  {
    "q": "How can an organization prepare for the ISO certification audit?",
    "a": "An organization can prepare for the ISO certification audit by documenting processes and procedures, training employees, and implementing a quality management system."
  },
  {
    "q": "Can an organization fail the ISO certification audit?",
    "a": "An organization can only succeed in the ISO certification audit if it meets the applicable ISO standard requirements."
  },
  {
    "q": "Can small businesses get ISO certification?",
    "a": "Yes, small businesses can get ISO certification if they comply with the applicable ISO standard requirements."
  },
  {
    "q": "What are the ISO certification requirements?",
    "a": "The ISO certification requirements vary depending on the specific ISO standard. Still, generally, they include implementing a quality management system, documenting processes and procedures, and demonstrating compliance with applicable legal and regulatory requirements."
  }
];

const FORM_FEATURES = [
  { icon: <Award className="w-4 h-4" />, text: "NABCB, UKAS & IAF Accredited Certification" },
  { icon: <FileText className="w-4 h-4" />, text: "Quality Manual & SOP Documentation Drafting" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Stage 1 Audit & Stage 2 Certification Support" },
  { icon: <CheckCircle className="w-4 h-4" />, text: "100% GeM Portal & Govt Tender Valid Certificate" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "ISO 9001:2015 (Fast-Track Non-Audited)",
    shortDesc: "Designed for early-stage startups and MSMEs requiring quick ISO compliance for corporate vendor onboarding, company profiling, and trust building.",
    expandedDesc: "Complete Quality Management System documentation, Quality Policy formulation, standard SOP drafting, certificate issuance by accredited registrar, and digital QR-code verifiable certificate delivered within 3-5 working days.",
    price: "₹7,899",
    priceSub: "All Inclusive | Fast-Track 3-5 Days Delivery",
    badge: "Fast-Track",
    features: [
      "ISO 9001:2015 Quality Management Certificate",
      "Drafting of Quality Policy & Quality Manual",
      "Standard Operating Procedures (SOP) Templates",
      "Digital QR Code Verifiable Certificate",
      "Company Profile & Vendor Empanelment Valid",
      "Dedicated ISO Consultant Support",
    ],
  },
  {
    name: "ISO 9001 + ISO 14001 (Audited Dual Certification)",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Comprehensive Quality (QMS) & Environmental (EMS) dual certification with accredited certification body (IAF/NABCB/UKAS). Mandatory for Govt tenders & GeM portal.",
    expandedDesc: "End-to-end certification lifecycle: Gap analysis, internal auditor training, Stage 1 documentation review, Stage 2 implementation audit, Non-Conformance (NC) closure, and issuance of 3-year accredited certificates.",
    price: "₹28,899",
    priceSub: "+ Audit Fees | 3-Year Certification Validity",
    features: [
      "Dual Certification: ISO 9001:2015 + ISO 14001:2018",
      "IAF / NABCB / UKAS Member Accredited Certificate",
      "100% Valid for GeM Portal & Government E-Tenders",
      "Comprehensive Gap Analysis & Risk Assessment",
      "Stage 1 (Documentation) & Stage 2 (On-Site) Audit",
      "Annual Surveillance Audit Guidance for 3 Years",
    ],
  },
  {
    name: "ISO 27001:2022 ISMS (Information Security)",
    shortDesc: "Essential for IT, SaaS, Fintech, Healthcare, and enterprise technology service providers managing sensitive customer data and cloud infrastructure.",
    expandedDesc: "Comprehensive Information Security Management System (ISMS) implementation based on the latest 2022 standard. Includes Statement of Applicability (SoA) formulation, asset inventory classification, risk treatment plan, and accredited Stage 1 & 2 audit coordination.",
    price: "₹39,899",
    priceSub: "+ Audit Fees | Enterprise Cybersecurity Standard",
    features: [
      "ISO/IEC 27001:2022 ISMS Standard Certification",
      "Statement of Applicability (SoA) Formulation (93 Controls)",
      "Cybersecurity Risk Assessment & Treatment Plan",
      "Information Security Policy (ISP) Manual Drafting",
      "Lead Auditor Assistance for Stage 1 & 2 Audits",
      "Enterprise Vendor Security Assessment Clearance",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Verify ISO Certificate Online via IAF CertSearch",
  "Difference Between Audited and Non-Audited ISO Certification",
  "ISO 9001 vs ISO 14001 vs ISO 27001: Which Standard Do You Need?",
  "Step-by-Step Guide to Clearing Stage 1 & Stage 2 External Audits",
  "How ISO Certification Boosts GeM Portal Vendor Bidding Score",
  "Mandatory Internal Audit and Management Review Meeting Procedures",
];

const RELATED_SERVICES_TAGS = [
  "Company Registration",
  "MSME Udyam Registration",
  "Trademark Registration",
  "Startup India Recognition",
  "CE Marking Certification",
  "GMP Certification",
  "HACCP Food Safety",
  "CMMI Level Certification",
];

const POPULAR_SEARCHES_TAGS = [
  "iso certification online apply in india",
  "iso 9001 2015 certificate cost in india",
  "iso registration fees breakdown",
  "accredited iso certification bodies list",
  "iso certificate check online iaf certsearch",
  "iso 27001 certification cost for startup",
  "iso certification for gem portal bidding",
  "iso certificate renewal process in india",
  "nabcb accredited certification bodies",
  "iso documentation process and templates",
  "iso stage 1 stage 2 audit differences",
  "iso 14001 environmental management system",
];

const TABLE_1_DOCUMENTS = [
  {
    entity: "Private Limited Company / Public Limited Company",
    link: "/company-registration",
    docs: "Certificate of Incorporation (COI), MOA & AOA, PAN Card, GST Certificate, List of Directors, Audited Financial Statements, Business Address Proof",
  },
  {
    entity: "Partnership Firm",
    link: "/partnership",
    docs: "Registered Partnership Deed, Partnership PAN Card, GST Registration Certificate, Address Proof of Business, Identity Proofs of all Partners",
  },
  {
    entity: "Limited Liability Partnership (LLP)",
    link: "/llp-registration",
    docs: "Certificate of Incorporation, LLP Agreement, LLP PAN Card, GST Registration Certificate, List and DIN/DPIN of Designated Partners",
  },
  {
    entity: "Sole Proprietorship",
    link: "/proprietorship",
    docs: "Proprietor PAN Card, GST Registration Certificate, Shop and Establishment Certificate / Udyam MSME, Business Address Proof, Bank Statement",
  },
  {
    entity: "Trust / Society / Section 8 Non-Profit",
    link: "/trust-registration",
    docs: "Trust Deed / Society Registration Certificate / Section 8 License, 12A & 80G Certificates, PAN Card, List of Trustees / Governing Body Members",
  },
];

const TABLE_2_BODIES = [
  {
    body: "Bureau Veritas Certification India",
    accreditation: "NABCB (India), UKAS (United Kingdom)",
    standards: "ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 50001",
  },
  {
    body: "TUV India Pvt Ltd (TÜV NORD Group)",
    accreditation: "NABCB (India), DAkkS (Germany)",
    standards: "ISO 9001, ISO 14001, ISO 22000, ISO 27001, IATF 16949",
  },
  {
    body: "DNV GL Business Assurance India",
    accreditation: "NABCB (India), RvA (Netherlands)",
    standards: "ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 50001",
  },
  {
    body: "BSI Group India (British Standards Institution)",
    accreditation: "NABCB (India), UKAS (United Kingdom)",
    standards: "ISO 9001, ISO 27001, ISO 22000, ISO 45001, ISO 22301",
  },
  {
    body: "SGS India Pvt Ltd",
    accreditation: "NABCB (India), SAS (Switzerland), UKAS",
    standards: "ISO 9001, ISO 14001, ISO 22000, ISO 45001, ISO 13485",
  },
];

const TABLE_3_TIMELINE = [
  {
    phase: "Phase 1: Gap Analysis and Diagnostic Study",
    activity: "Comprehensive evaluation of existing business workflows against ISO clauses, identifying procedural gaps and compliance deficits.",
    duration: "2 to 4 Weeks",
  },
  {
    phase: "Phase 2: Documentation Development",
    activity: "Drafting Quality Manual, Quality Policy, standard operating procedures (SOPs), work instructions, and risk registers.",
    duration: "4 to 8 Weeks",
  },
  {
    phase: "Phase 3: System Implementation & Staff Training",
    activity: "Rolling out newly documented processes across departments, conducting workforce awareness sessions and record-keeping drills.",
    duration: "4 to 8 Weeks",
  },
  {
    phase: "Phase 4: Internal Audit & Management Review (MRM)",
    activity: "Trained internal auditors conduct mock audits to verify procedural compliance; leadership convenes Management Review Meeting.",
    duration: "2 to 4 Weeks",
  },
  {
    phase: "Phase 5: Stage 1 External Audit (Documentation Review)",
    activity: "Accredited certification body auditor reviews all manuals, policies, and readiness for Stage 2 on-site assessment.",
    duration: "1 to 2 Weeks",
  },
  {
    phase: "Phase 6: Stage 2 External Audit (Implementation Assessment)",
    activity: "Auditor conducts detailed physical/virtual interviews, reviews live operational records, and assesses compliance on the ground.",
    duration: "1 to 3 Weeks",
  },
  {
    phase: "Phase 7: Corrective Actions & Certificate Issuance",
    activity: "Closure of identified Non-Conformances (NCs), final technical approval by certification board, and formal certificate grant.",
    duration: "2 to 4 Weeks",
  },
];

const TABLE_4_CHALLENGES = [
  {
    challenge: "Resistance to Organizational Change",
    description: "Employees accustomed to informal practices may perceive ISO documentation as tedious administrative overhead, slowing departmental adoption.",
    solution: "Conduct interactive team workshops illustrating how standardized SOPs reduce operational errors and workload. Merrafilings consultants guide internal change management.",
  },
  {
    challenge: "Documentation Overload & Complexity",
    description: "Businesses often draft needlessly bulky manuals that confuse staff and create difficult maintenance burdens during annual surveillance audits.",
    solution: "Adopt lean, pragmatic documentation tailored to your actual operational size. Modern cloud document repositories ensure agile SOP updates without red tape.",
  },
  {
    challenge: "Limited Internal Resources & Time Constraints",
    description: "SMEs and startups frequently lack full-time quality assurance officers, causing ISO implementation to stall under competing daily priorities.",
    solution: "Partner with dedicated Merrafilings compliance leads who manage 90% of drafting, gap analysis, and auditor coordination, freeing your core team.",
  },
  {
    challenge: "Sustaining Post-Certification Compliance",
    description: "Organizations often relax quality procedures after initial certification, risking non-compliance findings during mandatory Annual Surveillance Audits.",
    solution: "Institute quarterly internal reviews and leverage automated compliance reminders to keep operational logs, risk matrices, and training logs perpetually audit-ready.",
  },
];

const TABLE_5_COST = [
  {
    component: "Consultation, Gap Analysis & System Design",
    cost: "₹15,000 to ₹50,000",
    notes: "Varies depending on organizational scale, number of operational locations, and complexity of business processes.",
  },
  {
    component: "Documentation & SOP Development",
    cost: "₹20,000 to ₹75,000",
    notes: "Covers tailored Quality Manual, procedure drafts, work instructions, and department-specific record templates.",
  },
  {
    component: "Internal Auditor & Workforce Training",
    cost: "₹10,000 to ₹30,000",
    notes: "Formal training batches for staff and designated internal auditors on standard clauses and audit execution.",
  },
  {
    component: "Accredited Certification Body Audit Fee (Stage 1 & 2)",
    cost: "₹25,000 to ₹1,50,000",
    notes: "Official fees charged by accredited registrars (e.g., TUV, Bureau Veritas, DNV) based on company headcount.",
  },
  {
    component: "Annual Surveillance Audit Fee (Years 2 & 3)",
    cost: "₹15,000 to ₹75,000 / year",
    notes: "Mandatory mid-cycle audit conducted at Month 12 and Month 24 to maintain active certificate validity.",
  },
  {
    component: "Recertification Audit (Every 3 Years)",
    cost: "₹20,000 to ₹1,00,000",
    notes: "Full recertification cycle audit conducted prior to certificate expiration at the end of Year 3.",
  },
];

function ISOGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is ISO Certification in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          <strong className="text-slate-800 font-medium">ISO Certification</strong> is a globally recognized seal of approval that certifies that an organization conforms to the international operational and quality benchmarks established by the <strong className="text-slate-800 font-medium">International Organization for Standardization (ISO)</strong>. Headquartered in Geneva, Switzerland, ISO is an independent, non-governmental international federation of national standards bodies across 168+ member countries, with the Bureau of Indian Standards (BIS) serving as India&apos;s national member body.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          In India, ISO certification is not issued directly by ISO itself; rather, it is awarded by accredited third-party <strong className="text-slate-800 font-medium">Certification Bodies (CBs)</strong> that are recognized by accreditation authorities such as the <strong className="text-slate-800 font-medium">National Accreditation Board for Certification Bodies (NABCB)</strong> in India or international equivalents like UKAS (United Kingdom) and DAkkS (Germany) under the <strong className="text-slate-800 font-medium">International Accreditation Forum (IAF)</strong> multilateral recognition arrangement.
        </p>

        <div className="bg-[#FAF9F7] p-5 rounded-2xl border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
            <Award className="w-5 h-5 text-emerald-600" />
            <span>The Strategic Distinction: Audited vs. Fast-Track Non-Audited ISO Certification</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs text-slate-600 font-light">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200">
              <span className="font-semibold text-slate-800 block text-sm mb-1 text-[#155EEF]">Accredited Audited Certification (IAF / NABCB)</span>
              <p className="leading-relaxed">
                Requires mandatory Stage 1 documentation and Stage 2 on-site implementation audits by an accredited certification body. Mandatorily required for Government e-Marketplace (GeM) portal tenders, public sector procurement, export contracts, and enterprise B2B vendor empanelment.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200">
              <span className="font-semibold text-slate-800 block text-sm mb-1 text-purple-700">Fast-Track Non-Audited Certification</span>
              <p className="leading-relaxed">
                Focuses on rapid documentation compliance, quality manual formulation, and SOP adoption. Ideal for early-stage startups and MSMEs needing immediate credibility, website trust badges, internal operational structuring, and commercial proposal presentation within 3-5 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why ISO is Important */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Why is ISO Certification Important for Businesses in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Whether you run an industrial manufacturing plant, an IT services firm, or a healthcare establishment, ISO certification transforms internal operations while opening lucrative commercial gateways:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Landmark className="w-5 h-5 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Government &amp; GeM Tenders</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Most central and state government e-tenders and GeM portal bids mandate active ISO 9001 and ISO 14001 certification as non-negotiable pre-qualification criteria.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Globe2 className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Global Export Acceptance</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              International clients in the US, Europe, and Middle East require IAF-recognized ISO certification before signing offshore supply agreements or outsourcing contracts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Scale className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Operational Consistency</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Standardized processes and clear SOPs minimize manufacturing defects, eliminate redundant tasks, reduce scrap, and drastically reduce operational overheads.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <ShieldCheck className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Customer Credibility</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Showcasing the prestigious ISO badge on marketing collateral, product packaging, and corporate profiles signals uncompromising quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Types of ISO Certifications */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What are the Key Types of ISO Certifications in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          ISO has published over 24,000 international standards. The most widely adopted certifications in the Indian corporate landscape include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700"><Award className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">ISO 9001:2015 - Quality Management (QMS)</h3>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              The world&apos;s benchmark quality standard. Focuses on customer satisfaction, consistent product quality, process optimization, and leadership governance across manufacturing and service sectors.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700"><Leaf className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">ISO 14001:2015 - Environmental Management (EMS)</h3>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Specifies requirements for establishing an environmental management framework. Helps companies reduce industrial waste, minimize carbon footprint, comply with pollution boards, and achieve sustainability.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700"><Lock className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-700 transition-colors">ISO 27001:2022 - Information Security (ISMS)</h3>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              The international benchmark for cyber risk management and data protection. Mandatory for SaaS platforms, fintechs, cloud software vendors, and BPO organizations handling sensitive user data.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-purple-50 text-purple-700"><HeartPulse className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-purple-700 transition-colors">ISO 45001:2018 - Occupational Health &amp; Safety (OHSMS)</h3>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Designed to mitigate workplace health risks, reduce on-site industrial injuries, and create safe operational environments across construction sites, chemical plants, and heavy engineering factories.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-amber-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-amber-50 text-amber-700"><UtensilsCrossed className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-amber-700 transition-colors">ISO 22000:2018 - Food Safety Management (FSMS)</h3>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Integrates HACCP principles with ISO quality control. Tailored for commercial food processors, packaging manufacturers, cold chain logistics, catering firms, and restaurants aiming for global food safety.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700"><Cpu className="w-4 h-4" /></span>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-indigo-700 transition-colors">ISO 13485:2016 - Medical Devices Quality</h3>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Mandatory comprehensive quality management system standard for manufacturers, assemblers, and distributors of diagnostic equipment and medical devices seeking CDSCO and international clearances.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits for SMEs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. What are the Specific Benefits of ISO Certification for SMEs in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Small and Medium Enterprises (MSMEs) form the backbone of the Indian industrial economy. For MSMEs, achieving ISO certification offers decisive growth catalysts:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700 font-light">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-medium block">Level Playing Field Against Large Corporations:</strong>
              Certifies that an MSME follows the identical rigorous quality processes as established multinationals, building immediate enterprise buyer confidence.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-medium block">Government Subsidy &amp; Reimbursement Schemes:</strong>
              Under the Ministry of MSME&apos;s Lean Manufacturing and Quality Certification schemes, eligible registered MSMEs can claim substantial financial reimbursements against certification fees.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-medium block">Accelerated Vendor Empanelment:</strong>
              Tier-1 automotive OEMs, infrastructure contractors, and retail conglomerates automatically whitelist ISO-certified vendors during supplier selection.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-medium block">Reduced Operational Waste &amp; Rework:</strong>
              Structured standard operating procedures minimize human errors, employee rework hours, and material wastage, directly improving gross profit margins.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who Should Apply */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Who Should Apply for ISO Certification in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          ISO standards are universally applicable across every industry vertical, company size, and organizational structure:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1 text-center text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <Factory className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
            <span className="font-medium text-slate-900 block">Manufacturing</span>
            <span className="text-[11px] text-slate-500 font-light">ISO 9001 / 14001</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <Cpu className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
            <span className="font-medium text-slate-900 block">IT &amp; Software</span>
            <span className="text-[11px] text-slate-500 font-light">ISO 27001 / 20000</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <Building className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
            <span className="font-medium text-slate-900 block">Construction</span>
            <span className="text-[11px] text-slate-500 font-light">ISO 45001 / 9001</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 hover:border-rose-500 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <HeartPulse className="w-5 h-5 text-rose-600 mx-auto mb-1.5" />
            <span className="font-medium text-slate-900 block">Healthcare</span>
            <span className="text-[11px] text-slate-500 font-light">ISO 13485 / 15189</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <UtensilsCrossed className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <span className="font-medium text-slate-900 block">Food &amp; Agro</span>
            <span className="text-[11px] text-slate-500 font-light">ISO 22000 / HACCP</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 hover:border-purple-500 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <Truck className="w-5 h-5 text-purple-600 mx-auto mb-1.5" />
            <span className="font-medium text-slate-900 block">Logistics</span>
            <span className="text-[11px] text-slate-500 font-light">ISO 28000 / 9001</span>
          </div>
        </div>
      </section>

      {/* Section 6: Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. What is the Eligibility Criteria for ISO Certificate Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Any commercial, non-profit, or government entity can apply for ISO certification provided the following baseline operational pre-requisites are fulfilled:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-light">
          <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Valid Legal Entity Status (Pvt Ltd, LLP, Partnership, Proprietorship, Trust)</span>
          </li>
          <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Active Business Operations for at least 3 months with commercial transaction records</span>
          </li>
          <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Clearly defined organizational hierarchy, department roles, and management leadership</span>
          </li>
          <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Readiness to document SOPs and adopt quality control record-keeping practices</span>
          </li>
        </ul>
      </section>

      {/* Section 7: Legal Framework */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Legal Framework Governing ISO Certification in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Understanding the regulatory hierarchy behind ISO accreditation ensures you invest in certificates that carry authentic legal authority:
        </p>
        <div className="bg-[#FAF9F7] p-4.5 rounded-2xl border border-slate-200/80 space-y-2 text-xs text-slate-600 leading-relaxed font-light">
          <p>
            <strong className="text-slate-800 font-medium">Quality Council of India (QCI) &amp; NABCB:</strong> The National Accreditation Board for Certification Bodies (NABCB) is a constituent board of QCI, established under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry. NABCB accredits third-party certification bodies in India according to ISO/IEC 17021 standards.
          </p>
          <p>
            <strong className="text-slate-800 font-medium">International Accreditation Forum (IAF):</strong> NABCB is a signatory to the IAF Multilateral Recognition Arrangement (MLA). Consequently, any certificate granted by an NABCB-accredited body is legally equivalent to certificates issued by accreditation authorities across 100+ countries worldwide.
          </p>
        </div>
      </section>

      {/* Section 8: Compliance Requirements */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. What are the Compliance Requirements for ISO Certification in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          All modern ISO management system standards follow the High-Level Structure (Annex SL) rooted in the proven <strong className="text-slate-800 font-medium">Plan-Do-Check-Act (PDCA) cycle</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-2">1</span>
            <h4 className="text-sm font-medium text-slate-900 mb-1">Plan: Policy &amp; Objectives</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              Formulate quality objectives, identify contextual business risks, outline stakeholder requirements, and define procedural roadmaps.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">2</span>
            <h4 className="text-sm font-medium text-slate-900 mb-1">Do: Implementation &amp; SOPs</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              Execute documented workflows, train operating personnel, maintain evidence logs, and ensure strict process control across operations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mb-2">3</span>
            <h4 className="text-sm font-medium text-slate-900 mb-1">Check: Internal Audit &amp; MRM</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              Conduct periodic internal audits to spot non-conformances, track operational KPIs, and convene formal Management Review Meetings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs mb-2">4</span>
            <h4 className="text-sm font-medium text-slate-900 mb-1">Act: Corrective Action (CAPA)</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              Implement Corrective and Preventive Actions (CAPA) to eradicate root causes of recurring errors, driving perpetual business excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Documents Required + Table 1 */}
      <section id="documents-required" className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. What are the Documents Required for ISO Certification in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          The baseline statutory entity documents depend on your organization&apos;s corporate structure:
        </p>

        {/* Table 1 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Entity Type</th>
                <th className="py-3 px-4">Statutory &amp; Operational Documents Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_1_DOCUMENTS.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">
                    <Link href={row.link} className="text-[#155EEF] hover:underline font-medium">
                      {row.entity}
                    </Link>
                  </td>
                  <td className="py-3 px-4 leading-relaxed">{row.docs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: How to Apply */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. How to Apply for ISO Certification in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings manages the complete certification workflow through a structured 5-step digital process:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Standard Selection &amp; Diagnostic Consultation</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Our ISO lead consultant assesses your business scope, tender objectives, and client mandates to identify the optimal ISO standard (e.g., ISO 9001, 14001, 27001) and accreditation level.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Customized Documentation &amp; SOP Formulation</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                We draft your bespoke Quality Manual, Quality Policy, Work Instructions, and department-wise Standard Operating Procedures (SOPs), aligning them precisely with ISO clauses.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">System Implementation &amp; Internal Audit Preparation</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                We assist your team in deploying newly documented procedures, maintaining record logs, conducting mock internal audits, and convening formal Management Review Meetings (MRM).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Stage 1 &amp; Stage 2 External Registrar Audit</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                An accredited certification body conducts the Stage 1 document review followed by the Stage 2 implementation assessment. We coordinate auditor queries and Non-Conformance (NC) closures.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#00B074] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Formal Certificate Grant &amp; Online Registry Verification</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Upon final approval, your official ISO certificate with accreditation body logos (IAF / NABCB / UKAS) and QR-code verification is issued, valid for 3 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Process of ISO Certification */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Understanding the Two-Stage External Audit Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#155EEF]" /> Stage 1 External Audit: Readiness Review
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Review of Quality Manual, Policy, and process flow documentation</li>
              <li>• Verification that organizational scope accurately reflects operations</li>
              <li>• Assessment of internal audit results and management review meeting records</li>
              <li>• Identification of preliminary documentation gaps before on-site audit</li>
            </ul>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Stage 2 External Audit: Implementation
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• On-site or remote evaluation of actual daily operational practices</li>
              <li>• Interviews with departmental managers, supervisors, and operating staff</li>
              <li>• Random sampling of quality inspection sheets, calibration, and training logs</li>
              <li>• Formal closing meeting detailing positive findings and any minor NCs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 12: Choosing Certification Body + Table 2 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. How to Choose an Accredited ISO Certification Body in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Selecting a respected, accredited certification body ensures your certificate will be universally accepted by government tender committees and international corporate buyers:
        </p>

        {/* Table 2 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Accredited Certification Body</th>
                <th className="py-3 px-4">Recognized Accreditation Boards</th>
                <th className="py-3 px-4">Commonly Certified Standards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_2_BODIES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.body}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal text-emerald-800">{row.accreditation}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.standards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 13: Timelines + Table 3 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          13. What is the Timeline Involved in the ISO Certification Process?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          While fast-track non-audited certificates can be delivered within 3-5 working days, a comprehensive audited certification process spans several milestone phases:
        </p>

        {/* Table 3 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Implementation Phase</th>
                <th className="py-3 px-4">Core Activities &amp; Milestones</th>
                <th className="py-3 px-4">Estimated Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_3_TIMELINE.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.phase}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.activity}</td>
                  <td className="py-3 px-4 text-blue-700 font-medium whitespace-nowrap">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 14: Challenges & Solutions + Table 4 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          14. Common Challenges &amp; Solutions in ISO Certification
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Navigating ISO implementation requires proactive management of common operational bottlenecks:
        </p>

        {/* Table 4 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Operational Challenge</th>
                <th className="py-3 px-4">Root Cause &amp; Description</th>
                <th className="py-3 px-4">Recommended Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_4_CHALLENGES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.challenge}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.description}</td>
                  <td className="py-3 px-4 leading-relaxed text-slate-700">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 15: Fees + Table 5 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          15. What is the ISO Certification Fee Structure in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          ISO certification costs comprise consultancy, documentation, and statutory certification body audit fees:
        </p>

        {/* Table 5 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Certification Component</th>
                <th className="py-3 px-4">Estimated Cost Range</th>
                <th className="py-3 px-4">Pricing Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_5_COST.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.component}</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">{row.cost}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 16: Validity & Renewal */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          16. Validity, Surveillance Audits &amp; Certificate Renewal
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Accredited ISO certificates are issued with a <strong className="text-slate-800 font-medium">3-year validity cycle</strong>. However, active validity is contingent on passing mandatory annual surveillance audits:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-[#155EEF] block mb-1">Year 1: Initial Certification</span>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Successful completion of Stage 1 and Stage 2 audits grants formal certificate issuance, valid for 3 years.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-amber-700 block mb-1">Years 1 &amp; 2: Surveillance Audits</span>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Mandatory external audits conducted at Month 12 and Month 24 to verify continued system maintenance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-[#00B074] block mb-1">Year 3: Recertification Audit</span>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Prior to month 36 expiration, a full recertification audit renews the certificate for an additional 3-year term.
            </p>
          </div>
        </div>
      </section>

      {/* Section 17: How to Verify Certificate */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          17. How to Verify ISO Certification Online via IAF CertSearch?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Government tender evaluators and corporate procurement heads verify authentic ISO certificates via global databases:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#155EEF]" /> Global IAF CertSearch Verification
            </h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 font-light">
              <li>Visit the official global portal at <strong>iafcertsearch.org</strong></li>
              <li>Enter your registered legal entity name or ISO certificate registration number.</li>
              <li>View active certificate validity, accredited certification body name, and certified scope.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-600" /> Registrar QR-Code Validation
            </h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 font-light">
              <li>Scan the secure QR code printed directly on your official ISO certificate document.</li>
              <li>The QR code resolves to the certification body&apos;s direct registry record.</li>
              <li>Instantly confirm active status, surveillance audit clearance, and validity dates.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 18: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          18. Why Choose Merrafilings for ISO Certification in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings is India&apos;s premier corporate compliance network. We take the complexity out of ISO certification:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">15,000+ Enterprises &amp; MSMEs Successfully Certified Across India</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Accredited IAF, NABCB &amp; UKAS Member Registrar Network</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Guaranteed GeM Portal &amp; Government E-Tender Acceptance</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Dedicated Lead Auditor for Gap Analysis &amp; Documentation Drafting</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("ISO Certification Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for ISO Certification Today</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function ISORegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="International Organization for Standardization (ISO)"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            ISO Certification
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Get ISO 9001, ISO 14001, ISO 27001, ISO 45001, and ISO 22000 certified with accredited certification bodies (NABCB, UKAS, IAF). 100% online documentation, gap analysis audit, and guaranteed tender eligibility."
      formTitle="Apply for ISO Certification"
      formSubtitle="Enter your business details below to consult with our certified ISO lead auditors."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard-wise{" "}
          <span className="font-normal text-[#00B074]">ISO certification pricing.</span>
        </>
      }
      pricingSubtitle="Select your standard and accreditation level for fast, tender-ready ISO certification."
      breadcrumbCurrent="ISO Certification"
      guideTitle="ISO Certification & Registration Online for Business in India"
      guideContent={<ISOGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about obtaining ISO Certification and Accreditation in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
