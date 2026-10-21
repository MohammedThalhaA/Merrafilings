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
  Globe2,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "What is LEI Number?",
    a: "A Legal Entity Identifier (LEI) is a 20-character alphanumeric code unique to each legal entity participating in global financial transactions. Governed by the Global Legal Entity Identifier Foundation (GLEIF) under ISO 17442 norms, it provides clear, standardized identification of counterparties worldwide.",
  },
  {
    q: "Who needs an LEI Number in India?",
    a: "Under Reserve Bank of India (RBI) mandates, LEI is required for non-individuals conducting RTGS and NEFT transactions of ₹50 Crore and above, entities participating in Over-the-Counter (OTC) derivative markets, participants in non-derivative markets (money markets & G-Secs), and corporate borrowers with aggregate banking exposure of ₹5 Crore and above.",
  },
  {
    q: "What are the typical uses of an LEI Code?",
    a: "An LEI code is used for large-value centralized payment transactions, OTC derivatives trade reporting, client identification in foreign exchange dealings, debt and equity issuances, credit facility appraisals by commercial banks, and cross-border trade transactions.",
  },
  {
    q: "Which organizations issue LEI Codes?",
    a: "LEI codes are issued by accredited Local Operating Units (LOUs) approved by the Global Legal Entity Identifier Foundation (GLEIF). In India, the primary accredited LOU is Legal Entity Identifier India Limited (LEIL), a wholly-owned subsidiary of the Clearing Corporation of India Limited (CCIL).",
  },
  {
    q: "Is obtaining an LEI Code compulsory?",
    a: "Yes. For entities engaging in transactions above the thresholds established by the RBI and SEBI, obtaining and maintaining an active LEI code is mandatory by law. Without an active LEI, banks will block high-value RTGS/NEFT payments.",
  },
];

const FAQ_COL_2 = [
  {
    q: "How is the LEI Code formatted?",
    a: "An LEI code follows a 20-character ISO 17442 standard: Characters 1-4 represent the LOU prefix (e.g., 3358 for CCIL/LEIL); Characters 5-18 represent the unique entity-specific identifier assigned to the firm; Characters 19-20 are two mathematical check digits calculated via checksum algorithms.",
  },
  {
    q: "What is the primary function of an LEI Code?",
    a: "The primary function of an LEI is to create a universally standardized system for identifying distinct legal entities in financial transactions, reducing systemic risk, eliminating counterparty ambiguity, and providing global financial transparency.",
  },
  {
    q: "What is the validity period of an LEI Code?",
    a: "An LEI code is valid for exactly one year from the date of issuance or last renewal. Entities must complete annual renewals and verify their Level 1 and Level 2 reference data to keep their status 'ISSUED' in the global registry.",
  },
  {
    q: "What is the procedure for applying for an LEI Code?",
    a: "The procedure involves: 1) Gathering entity incorporation documents and Board Resolution; 2) Registering on the accredited CCIL/LEIL portal; 3) Filling the application with Level 1 entity details and Level 2 parent structure; 4) Uploading required documents; 5) Paying statutory fees; and 6) Receiving your official LEI certificate upon LOU verification.",
  },
  {
    q: "What specific documents are needed to apply for an LEI?",
    a: "Documents include the Certificate of Incorporation, MOA & AOA / LLP Agreement / Partnership Deed, entity PAN card, audited financial statements or net worth certificate, Board Resolution or Letter of Authorization, and KYC documents of the authorized signatory.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How can one search for an existing LEI Code?",
    a: "Anyone can search and verify an existing LEI code for free on the official GLEIF Global LEI Search portal (gleif.org) or on the CCIL India LEI portal (legalentity.ccilindia.co.in) by entering the entity name or the 20-character code.",
  },
  {
    q: "What kind of information does an LEI reveal about an entity?",
    a: "An LEI provides two levels of public data: Level 1 ('Who is who') reveals official legal name, registered address, legal form, and registry number. Level 2 ('Who owns whom') reveals direct and ultimate parent holding entities that consolidate financial accounts.",
  },
  {
    q: "What role do LEIs play in enhancing financial market operations?",
    a: "LEIs streamline Know Your Customer (KYC) onboarding for banks, enable precise counterparty risk assessments, minimize settlement and transaction errors, and enhance regulatory reporting across global capital markets.",
  },
  {
    q: "Are there penalties for not having an LEI when required?",
    a: "Yes. In India, commercial banks will reject RTGS/NEFT payments of ₹50 Crore and above, credit and loan sanction facilities may be frozen, and participation in OTC derivatives and debt markets will be barred until a valid LEI is provided.",
  },
  {
    q: "How quickly can an LEI be issued after application?",
    a: "With complete and verified documentation submitted through Merrafilings, an LEI number is typically issued within 24 to 48 working hours.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Is it possible to cancel an LEI Code?",
    a: "An LEI code cannot be cancelled or deleted because it forms a permanent historical audit trail in the global financial database. However, if an entity dissolves or merges, its status in the registry will be updated to 'RETIRED' or 'MERGED'.",
  },
  {
    q: "Why are LEIs critical for regulatory compliance?",
    a: "LEIs are mandated by central financial watchdogs worldwide, including the Reserve Bank of India, SEBI, US SEC, and European ESMA, to track macroprudential risks and prevent fraudulent transactions across interconnected banking networks.",
  },
  {
    q: "What are the costs associated with obtaining an LEI?",
    a: "Statutory issuance fees for a new LEI range between ₹4,000 and ₹6,000 depending on the issuing authority, while annual renewals typically cost between ₹2,500 and ₹4,000. Merrafilings provides end-to-end all-inclusive packages.",
  },
  {
    q: "How can Merrafilings assist in the LEI registration process?",
    a: "Merrafilings manages the complete registration lifecycle: drafting institutional-grade Board Resolutions, reviewing entity documentation, filing on the CCIL/LEIL portal, handling officer scrutiny queries, and providing automated renewal management.",
  },
  {
    q: "What is LEI Certificate Meaning?",
    a: "An LEI Certificate is an official document generated by an accredited LOU confirming that an entity has been verified and assigned a specific 20-character Legal Entity Identifier, detailing its legal name, registration date, and next renewal date.",
  },
  {
    q: "What is the process of LEI Certificate Download?",
    a: "Once issued, log into your registered account on the CCIL LEI portal or Merrafilings dashboard, navigate to 'My LEI / Certificate', click 'Download Certificate', and save the authentic digitally signed PDF certificate.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "LLP Registration",
  "Public Limited Company",
  "One Person Company",
  "Import Export Code (IEC)",
  "GST Registration",
  "Trademark Registration",
  "RBI / FEMA Compliance",
  "FC-GPR Filing",
  "Startup India DPIIT",
];

const POPULAR_SEARCHES_TAGS = [
  "LEI code registration India",
  "LEI code online apply",
  "Legal Entity Identifier RBI guidelines",
  "LEI code validity and renewal",
  "CCIL LEI portal registration",
  "LEI for RTGS and NEFT above 50 crore",
  "LEI code format 20 digit",
  "Download LEI certificate PDF",
  "LEI number search India",
  "GLEIF accredited LOU India",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "1-Year LEI Registration",
    shortDesc:
      "Standard 1-year Legal Entity Identifier code issuance, GLEIF validation, and digital certificate...",
    expandedDesc:
      "Includes initial legal entity verification, GLEIF / LEIL application filing, level 1 and level 2 reference data validation, and digital certificate delivery within 24 hours.",
    price: "₹4,299",
    priceSub: "+ GST & Statutory LOU Fees | 1-Year Validity",
    features: [
      "20-Digit Global Legal Entity Identifier (LEI)",
      "Accredited Local Operating Unit (LOU) Filing",
      "Official GLEIF Global Database Entry",
      "Digital LEI Certificate & Verification Dossier",
    ],
  },
  {
    name: "3-Year Multi-Year LEI",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Multi-year LEI registration with automated annual maintenance and zero lapse guarantee...",
    expandedDesc:
      "Best value for corporate borrowers and frequent forex traders. Merrafilings manages annual data recertification and statutory renewal seamlessly for 3 consecutive years.",
    price: "₹10,499",
    priceSub: "+ GST & Statutory Fees | 3-Year Maintenance",
    features: [
      "3-Year Guaranteed Continuous Active Status",
      "Automated Annual GLEIF Data Recertification",
      "Priority Verification & Dedicated Account Manager",
      "RBI Compliance Certificate for Lending Banks",
      "Save 20% Compared to Annual Renewals",
    ],
  },
  {
    name: "5-Year Enterprise LEI",
    shortDesc:
      "Long-term 5-year compliance coverage with dedicated corporate concierge and continuous monitoring...",
    expandedDesc:
      "Ideal for large public enterprises, NBFCs, and multinationals requiring uninterrupted high-value transaction capability with complete multi-year regulatory immunity.",
    price: "₹16,999",
    priceSub: "+ GST & Statutory Fees | 5-Year Maintenance",
    features: [
      "5-Year Full Compliance Shield & Renewal",
      "Annual Corporate Structure & Shareholding Updates",
      "Dedicated Senior Compliance Officer",
      "Quarterly Regulatory Compliance Audits",
      "Free Fast-Track Transfer from Other LOUs",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Users className="w-4 h-4" />,
    text: "Fast-Track RBI Compliant Registration",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    text: "Multi-Year Registration Options (1, 3, or 5 Years)",
  },
  {
    icon: <Globe2 className="w-4 h-4" />,
    text: "Direct Application via Accredited LOUs (GLEIF Certified)",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Quick Issuance with Expert Legal Review",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for LEI Registration →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Understanding LEI Code Mandate by Reserve Bank of India",
  "LEI for Large-Value NEFT and RTGS Transactions (₹50 Cr+)",
  "LEI Requirements for Corporate Borrowers with ₹5 Cr+ Banking Exposure",
  "How to Renew or Transfer an Existing LEI Number in India",
  "Difference Between MCA CIN, GSTIN, and Global LEI Code",
  "GLEIF Validation Norms & Level 2 Parent Entity Reporting",
];

function LeiGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Legal Entity Identifier Number Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    A <strong className="font-medium text-slate-800">Legal Entity Identifier (LEI) number</strong> is a unique 20-character alphanumeric code assigned to legal entities participating in global financial transactions. Businesses, banks, mutual funds, and commercial corporations in India must obtain an <strong className="font-medium text-slate-800">LEI registration</strong> to comply with strict Reserve Bank of India (RBI) mandates and international financial governance standards. Merrafilings provides end-to-end expert advisory, swift documentation review, and seamless coordination with accredited Local Operating Units (LOUs) to issue and maintain your LEI code efficiently.
                  </p>
                </div>

                {/* Section 1: What is a Legal Entity Identifier (LEI) Number? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is a Legal Entity Identifier (LEI) Number?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    A Legal Entity Identifier number is a globally recognized unique identification code issued to legal entities involved in financial transactions. Introduced by the <strong>Financial Stability Board (FSB)</strong> and endorsed by the G20 in the aftermath of the 2008 global financial crisis, the LEI system was created to improve transparency, monitor systemic exposure, and eliminate counterparty ambiguity across international financial markets.
                  </p>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    In India, the Reserve Bank of India (RBI) has made LEI registration mandatory for entities participating in large-value centralized transactions, over-the-counter derivatives, non-derivative markets, and foreign currency transactions. Every LEI number is linked to publicly accessible, verified reference data about a legal entity, providing definitive proof of its institutional existence and corporate hierarchy.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-5 mb-2">
                    Structure of an LEI Code (ISO 17442 Norm)
                  </h3>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-3">
                    An LEI code is a 20-character alphanumeric identifier standardized under the international ISO 17442 norm, structured as follows:
                  </p>
                  <ul className="space-y-2 text-[13px] font-normal text-slate-900 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 1-4 (LOU Prefix):</strong> Identifies the accredited Local Operating Unit that issued the code (e.g., 3358 for CCIL/LEIL in India).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 5-18 (Unique Entity ID):</strong> Entity-specific alphanumeric characters assigned uniquely to the applying organization.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Characters 19-20 (Verification Check Digits):</strong> Two mathematical check digits calculated via standard algorithms for automated error detection and validation.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-5 mb-2">
                    LEI vs. Other Business Identifiers
                  </h3>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-3">
                    To understand where the LEI sits within corporate identity systems, consider how it compares to conventional domestic identifiers:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Identifier</th>
                          <th className="py-3 px-4 font-normal">Issuing Authority</th>
                          <th className="py-3 px-4 font-normal">Scope</th>
                          <th className="py-3 px-4 font-normal">Primary Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong className="text-slate-900">LEI Number</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">GLEIF / CCIL (LEIL)</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">Global</td>
                          <td className="py-3 px-4 text-slate-600">Financial transaction &amp; counterparty identification</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>PAN</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Income Tax Department</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Direct tax assessment and tracking</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>CIN</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Ministry of Corporate Affairs</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Corporate registration &amp; statutory identity</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>GSTIN</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">GST Council / CBIC</td>
                          <td className="py-3 px-4 text-slate-600">India</td>
                          <td className="py-3 px-4 text-slate-600">Goods and Services Tax compliance &amp; invoicing</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            <strong>DUNS Number</strong>
                          </td>
                          <td className="py-3 px-4 text-slate-600">Dun &amp; Bradstreet</td>
                          <td className="py-3 px-4 text-slate-600">Global</td>
                          <td className="py-3 px-4 text-slate-600">Commercial credit scoring &amp; vendor profiling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 2: Why is Legal Entity Identifier Registration Mandatory in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why is Legal Entity Identifier Registration Mandatory in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The LEI registration mandate in India was established by the Reserve Bank of India to bolster financial sector stability, track systemic concentration risks, and bring transparency to high-value capital transfers. Over recent years, the RBI has progressively expanded the scope of mandatory LEI compliance across corporate banking, foreign exchange, and debt markets.
                  </p>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Failing to obtain or renew an LEI number leads to immediate operational gridlock: commercial banks in India are prohibited from executing RTGS and NEFT transactions exceeding prescribed limits for non-compliant entities, causing delays in supplier disbursements, loan servicing, and overseas remittances.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    RBI Guidelines on LEI Compliance
                  </h3>
                  <ul className="space-y-2 text-[13px] font-normal text-slate-900 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>RTGS and NEFT Payments:</strong> Mandatory for all single payment transactions of ₹50 Crore and above undertaken by non-individual entities in centralized payment systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Over-The-Counter (OTC) Derivatives:</strong> Mandatory for all non-individual entities trading in interest rate, foreign currency, and credit derivative markets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Non-Derivative Financial Markets:</strong> Mandatory for participants in government securities (G-Secs), money markets, and corporate bond markets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Large Corporate Borrowers:</strong> Mandatory for non-individual borrowers having aggregate fund-based and non-fund-based banking exposures of ₹5 Crore and above from Scheduled Commercial Banks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Cross-Border Foreign Currency Deals:</strong> Mandatory for non-individual Indian resident entities undertaking cross-border capital or current account transfers above regulatory thresholds.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Who Needs to Complete the LEI Registration?
                  </h3>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Under notifications issued jointly by the RBI, SEBI, and IRDAI, the following categories of organizations must obtain an active LEI number: all public and private limited companies, banks, Non-Banking Financial Companies (NBFCs), insurance providers, mutual fund schemes, registered partnership firms, Limited Liability Partnerships (LLPs), institutional trusts, and foreign portfolio investors (FPIs).
                  </p>
                </div>

                {/* Section 3: What is the Purpose of LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Purpose of LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The fundamental purpose of LEI registration is to establish an internationally unified, unambiguous identity for every organization transacting in modern financial markets. By replacing fragmented regional registration codes with a single globally recognized credential, the LEI system enables regulators, financial institutions, and trading counterparties to clearly identify transaction parties across borders, significantly curtailing systemic vulnerabilities.
                  </p>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    In India, the RBI&apos;s mandate on large-value transactions enforces strict fiscal accountability, accelerates automated settlement processing, and directly bolsters national Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) risk management architectures.
                  </p>
                </div>

                {/* Section 4: What are the Benefits of LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What are the Benefits of LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Securing an official LEI certificate delivers substantial strategic, operational, and compliance advantages to corporate enterprises and institutional lenders alike:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Benefits for Corporate Entities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-[#00A86B]" />
                        Global Financial Recognition
                      </div>
                      <p className="text-[12px] font-normal text-slate-900">Universally recognized across 200+ jurisdictions, opening frictionless doors to international trade and overseas banking.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#00A86B]" />
                        Full Regulatory Compliance
                      </div>
                      <p className="text-[12px] font-normal text-slate-900">Guarantees uninterrupted processing of RTGS/NEFT transactions of ₹50 Cr+ without banking rejections or RBI penalties.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#00A86B]" />
                        Elevated Corporate Creditworthiness
                      </div>
                      <p className="text-[12px] font-normal text-slate-900">Instills institutional confidence in commercial banks, debt syndicates, and overseas export-import counterparties.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#00A86B]" />
                        Expedited Transaction Clearing
                      </div>
                      <p className="text-[12px] font-normal text-slate-900">Automates counterparty verification, eliminating manual compliance audits and settlement delays.</p>
                    </div>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mt-4 mb-2">
                    Benefits for Financial Institutions and Banks
                  </h3>
                  <ul className="space-y-2 text-[13px] font-normal text-slate-900">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Streamlined Regulatory Reporting:</strong> Standardizes counterparty data fields across internal risk databases and RBI reporting systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>KYC Cost Reduction:</strong> Eliminates duplicative identity verification through the publicly accessible global GLEIF database.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Transparent Ownership Hierarchies:</strong> Level 2 data maps complex corporate structures and ultimate parent exposure in seconds.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 5: What are the Types of Entities Eligible for LEI Registration? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What are the Types of Entities Eligible for LEI Registration?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Any distinct legal organization that participates in financial transactions is eligible and qualified to apply for an LEI code. The following categories of entities can register in India:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {[
                      { title: "Private Limited Companies", desc: "Corporations incorporated under Companies Act, 2013 engaged in financial dealings." },
                      { title: "Public Limited Companies", desc: "Listed or unlisted corporate enterprises with active debt or equity market exposure." },
                      { title: "One Person Companies (OPC)", desc: "Sole corporate vehicles with high-value commercial transactions." },
                      { title: "Limited Liability Partnerships (LLP)", desc: "LLPs participating in commercial banking and financial markets." },
                      { title: "Partnership Firms (Registered)", desc: "Firms transacting in regulated banking channels and OTC markets." },
                      { title: "Sole Proprietorships", desc: "Proprietorship concerns executing banking payments above regulatory limits." },
                      { title: "Section 8 Companies & NGOs", desc: "Non-profit corporate organizations receiving foreign or domestic capital." },
                      { title: "Trusts and Societies", desc: "Registered charitable or private trusts managing financial investments." },
                      { title: "Producer Companies", desc: "Agri-business producer institutions accessing centralized payment systems." },
                      { title: "Indian Subsidiaries of Foreign MNCs", desc: "Local corporate entities tied to foreign corporate parents." },
                      { title: "Banks, NBFCs & Mutual Funds", desc: "Financial institutions, asset managers, and insurance companies." },
                      { title: "Government Entities & PSUs", desc: "Public sector undertakings transacting in government securities." },
                    ].map((ent, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#FAF9F7] border border-slate-200/70">
                        <div className="font-medium text-[13px] text-slate-800">{ent.title}</div>
                        <div className="text-[12px] font-normal text-slate-900 mt-0.5">{ent.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: What Information is Required for LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Information is Required for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Before initiating the online application, entities must compile two levels of verified corporate data as mandated by the GLEIF governance framework:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Level 1 Data: Legal Entity Information (&ldquo;Who is Who&rdquo;)
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-normal text-slate-900 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Official statutory legal name as reflected in official government registries.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Registered office address and primary headquarters address with postal PIN code.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Country and state of formation or statutory registration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Legal entity classification (Company, LLP, Trust, Partnership, etc.).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Official business registration number (CIN, LLPIN, RoF Registration No.) and date.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Entity status in official registry (Active, Inactive, Dissolved).</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Level 2 Data: Corporate Structure Details (&ldquo;Who owns Whom&rdquo;)
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-normal text-slate-900">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Direct Parent Entity:</strong> Legal name, LEI (if available), and registration details of the immediate holding company consolidating the accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Ultimate Parent Entity:</strong> Details of the highest-level corporate parent consolidating financial accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span><strong>Opt-Out Exception Reporting:</strong> Formal declaration if no parent entity consolidates financial accounts (e.g., widely held public company or natural persons holding shares).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Permanent Account Number (PAN) and authorized signatory contact credentials.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 7: What Documents are Required for LEI Registration in India? */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What Documents are Required for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Uploading verified documents matching government registries ensures rapid clearance without requisition queries. Below is the entity-wise document matrix:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Type of Entity</th>
                          <th className="py-3 px-4 font-normal">Documents to be Uploaded</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Private / Public Limited Company
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, MOA &amp; AOA, Company PAN Card, GST Certificate, Audited Balance Sheet, Board Resolution.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Partnership Firm
                          </td>
                          <td className="py-3 px-4 text-slate-600">Partnership Deed, Registration Certificate, Firm PAN Card, GST Certificate, Registered Office Address Proof, Authorization Letter.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LLP (Limited Liability Partnership)
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation, LLP Agreement, LLP PAN Card, GST Certificate, Designated Partners Resolution.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Sole Proprietorship
                          </td>
                          <td className="py-3 px-4 text-slate-600">Proprietor PAN Card, GST Certificate, Shop &amp; Establishment License or Udyam Certificate, Bank Statement/Address Proof.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Trust / Society / NGO
                          </td>
                          <td className="py-3 px-4 text-slate-600">Trust Deed or MOA, Registration Certificate, Trust PAN Card, Trustees Resolution, Address Proof.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Government Entity / PSU
                          </td>
                          <td className="py-3 px-4 text-slate-600">Government Authorization Gazette / Letter, Entity PAN Card, Department Address Proof, Signatory Appointment Order.</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Foreign Entity
                          </td>
                          <td className="py-3 px-4 text-slate-600">Certificate of Incorporation from Country of Origin (Apostilled/Notarized), Indian PAN if available, Parent LEI proof.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    General Supporting Documentation for Other Entities
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-normal text-slate-900">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Government identity proof (PAN card and Aadhaar / Passport) of the authorized signatory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Latest audited financial statements or formal Chartered Accountant Net Worth Certificate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Board Resolution on corporate letterhead authorizing the submission and payment.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 8: How One Can Obtain LEI in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How One Can Obtain LEI in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    In India, entities can obtain their LEI number through a Local Operating Unit (LOU) accredited by the Global Legal Entity Identifier Foundation (GLEIF). The primary accredited LOU in India is <strong>Legal Entity Identifier India Limited (LEIL)</strong>, a dedicated subsidiary of the Clearing Corporation of India Limited (CCIL).
                  </p>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Entities can apply directly on the CCIL portal or engage authorized registration facilitators like Merrafilings. Applying with Merrafilings eliminates procedural friction: our regulatory specialists audit corporate records, draft mandatory Board Resolutions, manage LOU communications, and guarantee that the certificate is generated accurately without rejection.
                  </p>
                </div>

                {/* Section 9: What is the Process of LEI Application in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Process of LEI Application in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The LEI application process follows a structured validation sequence to ensure compliance with global GLEIF benchmarks:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-3">
                    Step-by-Step LEI Application Sequence
                  </h3>
                  <div className="space-y-3 mb-5">
                    {[
                      { step: "1", title: "Access CCIL LEI Portal", text: "Navigate to the official portal (legalentity.ccilindia.co.in) or initiate through Merrafilings." },
                      { step: "2", title: "User Account Creation", text: "Create user credentials using your verified corporate email ID and complete phone authentication." },
                      { step: "3", title: "Entity Type Selection", text: "Choose your exact business entity classification (Company, LLP, Firm, Trust, Society, etc.)." },
                      { step: "4", title: "Fill Level 1 & Level 2 Data", text: "Enter registered legal name, office address, registry details, and parent company structure." },
                      { step: "5", title: "Upload Supporting Documents", text: "Attach scanned PDF copies of incorporation certificate, PAN card, audited financials, and Board Resolution." },
                      { step: "6", title: "Pay Statutory Registration Fee", text: "Complete fee payment securely via net banking, corporate credit card, or NEFT gateway." },
                      { step: "7", title: "LOU Scrutiny & Data Cross-Verification", text: "Issuing authority validates submitted information against MCA, Income Tax, and state registries." },
                      { step: "8", title: "LEI Code Generation & Publication", text: "Your 20-digit LEI is published in the global GLEIF database and the official PDF certificate is issued." },
                    ].map((st) => (
                      <div key={st.step} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                        <div className="w-7 h-7 rounded-full bg-[#00A86B] text-white flex items-center justify-center text-xs font-semibold shrink-0">
                          {st.step}
                        </div>
                        <div>
                          <div className="font-medium text-[13.5px] text-slate-900">{st.title}</div>
                          <div className="text-[12.5px] font-normal text-slate-900 mt-0.5">{st.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    LEI Application Form Filling Guidelines
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-normal text-slate-900">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Ensure the legal name matches character-by-character with your MCA Certificate of Incorporation or PAN Card.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Provide the official registered office address; do not substitute with a temporary branch or factory address.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Ensure all document uploads are high-resolution, signed, and stamped by the designated authorized signatory.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 10: How to Register an LEI Number Online in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Register an LEI Number Online in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The entire LEI registration process in India is 100% digital with zero physical paperwork. However, avoiding common submission blunders is critical to prevent application rejection:
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Common Errors to Avoid During LEI Registration
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">1. Name Mismatches</div>
                      <div className="text-[12px] font-normal text-slate-900 mt-1">Discrepancies between the name in MCA, Income Tax PAN, and the LEI application will trigger instant rejection.</div>
                    </div>
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">2. Wrong Registered Address</div>
                      <div className="text-[12px] font-normal text-slate-900 mt-1">Using operational or branch addresses instead of the legal registered office listed with MCA causes verification failure.</div>
                    </div>
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">3. Incomplete Parent Entity Records</div>
                      <div className="text-[12px] font-normal text-slate-900 mt-1">Omitting parent company details or failing to upload formal consolidation opt-out reasons delays issuance.</div>
                    </div>
                    <div className="p-3 rounded-lg border border-red-200/80 bg-red-50/20">
                      <div className="font-medium text-[13px] text-red-900">4. Expired or Unsigned Documents</div>
                      <div className="text-[12px] font-normal text-slate-900 mt-1">Uploading undated Board Resolutions or expired registration certificates results in scrutiny queries.</div>
                    </div>
                  </div>
                </div>

                {/* Section 11: What is the LEI Registration Fee and Validity in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the LEI Registration Fee and Validity in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The cost of obtaining and maintaining an LEI code in India includes the statutory LOU fee plus professional facilitation fees. Below is the indicative fee structure:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Service Type</th>
                          <th className="py-3 px-4 font-normal">Indicative Fee Range</th>
                          <th className="py-3 px-4 font-normal">Validity Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            New LEI Registration
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">₹4,000 to ₹6,000</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">1 Year</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            Annual LEI Renewal
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">₹2,500 to ₹4,000</td>
                          <td className="py-3 px-4 text-[#00A86B] font-medium">1 Year</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LEI Transfer Between LOUs
                          </td>
                          <td className="py-3 px-4 text-slate-600">As applicable by issuing LOU</td>
                          <td className="py-3 px-4 text-slate-600">Preserves original validity</td>
                        </tr>
                        <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                          <td className="relative py-3 px-4 font-normal text-slate-800">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            LEI Reference Data Update
                          </td>
                          <td className="py-3 px-4 text-slate-600">Nominal processing charges</td>
                          <td className="py-3 px-4 text-slate-600">No change in validity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 12: What is the Renewal and Validity of LEI Code in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What is the Renewal and Validity of LEI Code in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    An LEI code is valid for exactly one year from the date of issuance. To keep the LEI status marked as &ldquo;ISSUED&rdquo; (Active) in the global GLEIF database, legal entities must submit annual renewal applications and verify their corporate ownership records.
                  </p>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    LEI Renewal Process and Timeline
                  </h3>
                  <ul className="space-y-1.5 text-[13px] font-normal text-slate-900 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Initiate renewal at least 30 days before the annual expiry date to prevent lapsing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Review existing Level 1 address data and Level 2 parent structure, updating changes if any.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">•</span>
                      <span>Pay the applicable annual LOU renewal fee and receive confirmation with updated validity.</span>
                    </li>
                  </ul>

                  <h3 className="text-[15px] sm:text-[16px] font-medium text-[#1F1646] mb-2">
                    Consequences of Non-Renewal of LEI
                  </h3>
                  <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/20 space-y-2">
                    <div className="flex items-center gap-2 text-red-900 font-medium text-[13.5px]">
                      <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                      Critical Penalties of a Lapsed LEI:
                    </div>
                    <ul className="text-[12.5px] font-normal text-slate-900 space-y-1.5 pl-6 list-disc">
                      <li><strong>Immediate Lapsed Status:</strong> Status changes from Active to LAPSED in the global GLEIF registry.</li>
                      <li><strong>Blocked Banking Transactions:</strong> Commercial banks in India will decline RTGS and NEFT transactions exceeding ₹50 Crore.</li>
                      <li><strong>Trade Facility Freezes:</strong> Credit, working capital lines, and letter of credit disbursements will be halted by financial institutions.</li>
                      <li><strong>Regulatory Sanctions:</strong> Penalties and compliance notices issued under RBI circulars and SEBI guidelines.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 13: How to Download the LEI Certificate in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Download the LEI Certificate in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Upon successful approval by the LOU, you can download your official LEI Certificate in PDF format through the following steps:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-[13px] font-normal text-slate-900 mb-4">
                    <li>Log into your registered account on the CCIL LEI portal (<span className="text-[#155EEF]">legalentity.ccilindia.co.in</span>) or Merrafilings dashboard.</li>
                    <li>Navigate to the &ldquo;My LEI&rdquo; or &ldquo;Certificate&rdquo; tab on your dashboard.</li>
                    <li>Select the active LEI record associated with your legal entity.</li>
                    <li>Click on &ldquo;Download Certificate&rdquo; to retrieve the digitally signed PDF file.</li>
                    <li>Store the certificate securely and share the 20-digit code with your commercial bank branch for RTGS/NEFT clearance.</li>
                  </ol>
                </div>

                {/* Section 14: How to Verify the Legal Entity Identifier Certificate in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    How to Verify the Legal Entity Identifier Certificate in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Commercial counterparties, corporate treasuries, and compliance officers can independently verify any LEI code in real-time:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1">1. Global GLEIF Search Portal</div>
                      <p className="text-[12.5px] font-normal text-slate-900">
                        Visit <span className="text-[#155EEF]">gleif.org</span> and enter the 20-character code in the global search bar to review entity ownership, LOU issuer, and active status.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-slate-200/70">
                      <div className="font-medium text-[13.5px] text-slate-900 mb-1">2. India CCIL / LEIL Directory</div>
                      <p className="text-[12.5px] font-normal text-slate-900">
                        Visit <span className="text-[#155EEF]">legalentity.ccilindia.co.in</span> and input the PAN, CIN, or LEI number to verify domestic records against RBI mandates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 15: Why Should You Choose Merrafilings for LEI Registration in India? */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Should You Choose Merrafilings for LEI Registration in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Merrafilings is India&apos;s premier corporate legal and compliance advisory platform. Our dedicated team of Chartered Accountants, Company Secretaries, and banking specialists takes the friction out of LEI registration and multi-year renewals:
                  </p>
                  <ul className="space-y-2.5 text-[13px] font-normal text-slate-900 mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Fast-Track Issuance in 24-48 Hours:</strong> Expedited documentation and direct coordination with CCIL/LEIL for urgent bank clearance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Error-Free Corporate Resolution Drafting:</strong> Institutional-grade drafting of Board Resolutions and authorization documents.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Multi-Year Auto-Renewal Protection:</strong> 3-year and 5-year maintenance programs guaranteeing that your LEI never lapses.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Dedicated Corporate Advisor:</strong> Personalized phone and chat support for your finance and treasury departments.</span>
                    </li>
                  </ul>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="font-medium text-[14.5px] text-slate-900">Need an LEI Code for High-Value Bank Transfers?</div>
                      <div className="text-[12.5px] font-normal text-slate-900">Connect with our corporate regulatory specialists today.</div>
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

export default function LeiCodePage() {
  return (
    <ServicePageTemplate
      badgeText="RBI & GLEIF Mandated Identification"
      heroTitle={
        <>
          <span>LEI Registration for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Businesses &amp; Transactions
          </span>
        </>
      }
      heroSubtitle="Get your 20-digit Legal Entity Identifier (LEI) fast and hassle-free. Essential for RBI compliance, high-value financial transactions, and global market credibility."
      formTitle="Apply for Your LEI Code"
      formSubtitle="Fast-track your LEI registration with expert verification, automated data validation, and swift issuance."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Choose the right validity package tailored for your financial transaction volume."
      breadcrumbCurrent="LEI Code"
      guideContent={<LeiGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Legal Entity Identifier (LEI) in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
