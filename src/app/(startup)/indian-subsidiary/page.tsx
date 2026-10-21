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
  ArrowRight,
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

const SUBSIDIARY_MIN_REQUIREMENTS_TABLE = [
  {
    requirement: "Minimum Number of Directors",
    criteria: "Minimum 2 directors. Foreign nationals can be directors; at least 1 director must be a resident of India",
  },
  {
    requirement: "Minimum Number of Shareholders",
    criteria: "Minimum 2 shareholders. For a Wholly Owned Subsidiary (WOS), foreign parent holds 99.9% + 1 nominee shareholder",
  },
  {
    requirement: "Minimum Paid-up Capital",
    criteria: "No statutory minimum capital requirement under Companies Act; can commence with nominal capital",
  },
  {
    requirement: "Foreign Direct Investment (FDI) Norms",
    criteria: "100% FDI allowed under the automatic route for most manufacturing, IT, services, and trade sectors",
  },
  {
    requirement: "Document Legalisation / Apostille",
    criteria: "Foreign parent company charter & board resolutions must be apostilled (Hague convention) or consular notarized",
  },
  {
    requirement: "Registered Business Address in India",
    criteria: "Must maintain a physical registered office in India (commercial office, virtual office, or leased premises)",
  },
  {
    requirement: "RBI Reporting (FIRMS Portal)",
    criteria: "Mandatory Form FC-GPR filing on RBI's FIRMS portal within 30 days of inward remittance and share allotment",
  },
];

const SUBSIDIARY_COMPARISON_TABLE = [
  {
    parameter: "Legal Status in India",
    subsidiary: "Separate Indian corporate entity (Private Ltd)",
    branch: "Extension of foreign parent company",
    liaison: "Representative office only (non-commercial)",
  },
  {
    parameter: "Permissible Commercial Activities",
    subsidiary: "Full commercial business, manufacturing & billing",
    branch: "Restricted commercial trading & export/import",
    liaison: "No commercial billing or profit generation allowed",
  },
  {
    parameter: "Applicable Corporate Tax Rate",
    subsidiary: "Standard domestic corporate tax (~22% - 25%)",
    branch: "Higher foreign corporate tax rate (40% + surcharge)",
    liaison: "Not taxed directly (cannot earn revenue)",
  },
  {
    parameter: "RBI Prior Approval Requirement",
    subsidiary: "No RBI approval needed under 100% Automatic Route",
    branch: "Mandatory prior RBI approval required",
    liaison: "Mandatory prior RBI approval required",
  },
  {
    parameter: "Foreign Shareholding Allowed",
    subsidiary: "Up to 100% equity owned by foreign parent company",
    branch: "100% parent entity division",
    liaison: "100% parent entity division",
  },
  {
    parameter: "Setup Timeline",
    subsidiary: "12–15 business days (fast-track MCA SPICe+)",
    branch: "6–12 weeks (due to RBI approvals)",
    liaison: "6–12 weeks (due to RBI approvals)",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is an Indian Subsidiary Company?",
    a: "An Indian Subsidiary Company is an incorporated corporate entity registered in India under the Companies Act, 2013, in which a foreign parent corporation owns and controls more than 50% of the voting shares (or 100% in the case of a Wholly Owned Subsidiary). It operates as a distinct domestic legal body, shielding the foreign parent from Indian jurisdiction liabilities.",
  },
  {
    q: "What is the difference between a Wholly Owned Subsidiary and a Subsidiary?",
    a: "A Wholly Owned Subsidiary (WOS) is an Indian company where 100% of the equity shares are held by the foreign parent entity (with 1 share typically held by a nominee to satisfy the legal 2-shareholder rule). A subsidiary is a company where the foreign entity holds between 51% and 99% of the shareholding, co-owned with an Indian or foreign joint venture partner.",
  },
  {
    q: "How many directors are required for an Indian Subsidiary?",
    a: "Under Section 149(3) of the Companies Act, an Indian Subsidiary requires a minimum of 2 directors. Foreign citizens can hold directorships, but at least one director must be an Indian resident who has lived in India for at least 182 days during the preceding financial year. Merrafilings can provide professional resident nominee director services if required.",
  },
  {
    q: "Is prior RBI approval needed to incorporate an Indian Subsidiary?",
    a: "For most industrial, IT, consulting, e-commerce, and manufacturing sectors, 100% Foreign Direct Investment (FDI) is permitted under the Automatic Route, meaning no prior approval from the Reserve Bank of India (RBI) or Ministry of Finance is required. The company can be incorporated directly on the MCA portal, followed by post-incorporation intimation via Form FC-GPR.",
  },
  {
    q: "What is Form FC-GPR on the RBI FIRMS portal?",
    a: "Form FC-GPR (Foreign Collaboration - General Permission Route) is a mandatory statutory filing submitted through the RBI's online FIRMS portal within 30 days from the date of allotment of equity shares to the foreign parent company. It certifies that foreign equity was received in compliance with FDI pricing guidelines and FEMA regulations.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What are the apostille requirements for foreign parent company documents?",
    a: "Since the parent entity is registered abroad, documents such as the Certificate of Incorporation, Charter/Bylaws, Board Resolution, and Power of Attorney must be notarized and apostilled by the competent authority in the origin country (if a Hague Apostille Convention signatory). For non-Hague countries, documents must be legalized by the Indian Embassy or Consulate.",
  },
  {
    q: "Can an Indian Subsidiary open an Indian Rupee bank account?",
    a: "Yes. Once the Certificate of Incorporation, PAN, and TAN are allotted, the Indian Subsidiary opens an active Current Account with an authorized dealer bank in India. The foreign parent company wires share capital via SWIFT, and the receiving bank issues a Foreign Inward Remittance Certificate (FIRC).",
  },
  {
    q: "What is the corporate tax rate applicable to an Indian Subsidiary?",
    a: "Because an Indian Subsidiary is incorporated as an Indian domestic company, it enjoys lower domestic corporate tax rates (typically 22% base tax plus surcharge and cess, or effectively 25.17% under Section 115BAA). In contrast, foreign branch offices are taxed at a punitive 40% rate plus surcharge.",
  },
  {
    q: "What is the Annual FLA Return filed with the RBI?",
    a: "Every Indian company that has received Foreign Direct Investment (FDI) must submit an annual Foreign Liabilities and Assets (FLA) Return directly to the Reserve Bank of India on or before July 15th every year. This filing reports the company's foreign equity, retained earnings, and overseas financial commitments.",
  },
  {
    q: "Can an Indian Subsidiary purchase commercial property in India?",
    a: "Yes. An Indian Subsidiary is a domestic legal person under Indian law. It has full statutory power to acquire, own, lease, or mortgage commercial real estate, offices, factories, and development infrastructure in India for its declared business operations, subject to FEMA real estate restrictions.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What is a Foreign Inward Remittance Certificate (FIRC)?",
    a: "An FIRC is an official document issued by an Authorized Dealer (AD) Category-I bank in India certifying that foreign currency has arrived into India from an overseas bank account. It is a mandatory prerequisite for filing Form FC-GPR on the RBI FIRMS portal.",
  },
  {
    q: "Can an Indian Subsidiary remit profits or dividends back to the foreign parent?",
    a: "Yes. Under current FEMA guidelines, dividends declared by an Indian Subsidiary can be freely repatriated back to the foreign parent company net of applicable withholding taxes (TDS) under Double Taxation Avoidance Agreements (DTAA).",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "What sectors require government approval for FDI in India?",
    a: "Sectors requiring prior approval from the respective government ministry include defense manufacturing, print media, broadcasting, satellite operations, multi-brand retail trading, and investments originating from countries sharing land borders with India under Press Note 3.",
  },
  {
    q: "Why choose Merrafilings for Indian Subsidiary Setup?",
    a: "Merrafilings is India's leading cross-border advisory platform. We manage end-to-end foreign apostille verification, MCA SPICe+ incorporation, RBI FEMA reporting on the FIRMS portal, and complete transfer pricing and accounting compliances.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "Branch Office in India",
  "Liaison Office Setup",
  "RBI Form FC-GPR Filing",
  "Annual FLA Return RBI",
  "Resident Nominee Director",
  "GST Registration for Foreign Firms",
  "Transfer Pricing Advisory",
  "FIRC & Foreign Remittance",
  "Trademark Registration India",
  "Statutory Audit for Subsidiaries",
  "Virtual Registered Office Address",
];

const POPULAR_SEARCHES_TAGS = [
  "Indian Subsidiary Registration",
  "Foreign Company Setup in India",
  "Wholly Owned Subsidiary WOS India",
  "FDI Automatic Route 100 Percent",
  "Incorporate Subsidiary Companies Act 2013",
  "Resident Director Requirement India",
  "Apostille Documents for MCA Incorporation",
  "RBI FIRMS Portal FC GPR Filing",
  "Foreign Liabilities and Assets FLA Return",
  "Indian Subsidiary vs Branch Office",
  "Corporate Tax Rate for Indian Subsidiary",
  "Foreign Inward Remittance FIRC Certificate",
  "Nominee Shareholder Agreement India",
  "Repatriation of Dividends to Foreign Parent",
  "Double Taxation Avoidance Agreement DTAA",
  "SPICe+ Part B Foreign Director DSC",
  "Bank Current Account Opening for Subsidiary",
  "Indian Subsidiary Stamp Duty by State",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Subsidiary - Incorporation",
    shortDesc:
      "End-to-end Indian subsidiary incorporation for foreign corporate entities under 100% FDI automatic route...",
    expandedDesc:
      "Includes name reservation on SPICe+ Part A, drafting of international Apostille/Consularized e-MOA & e-AOA, 2 DINs, Class-3 DSCs, PAN, TAN, and RBI FDI reporting consultation.",
    price: "₹9,899",
    priceSub: "+ MCA Government Fees & Stamp Duty",
    features: [
      "Foreign Parent Company Name Approval (SPICe+ Part A)",
      "2 Digital Signatures (DSC) for Foreign / Indian Directors",
      "2 Director Identification Numbers (DIN)",
      "Drafting of Charter Documents (e-MOA & e-AOA)",
      "Incorporation Certificate (COI) Issuance",
      "Corporate PAN, TAN, and EPFO / ESIC Registration",
      "Assistance with Capital Remittance Bank Account",
    ],
  },
  {
    name: "Incorporation & Compliance",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Incorporation plus mandatory post-incorporation FDI compliances: RBI FIRMS Portal FC-GPR filing & INC-20A...",
    expandedDesc:
      "Crucial for international entities remitting share capital into India. Includes RBI FIRMS registration, single master form (SMF), FC-GPR filing within 30 days of capital allotment, and INC-20A certificate.",
    price: "₹39,899",
    priceSub: "+ MCA Stamp Duty | Complete Cross-Border FDI Shield",
    features: [
      "Complete Indian Subsidiary Incorporation Package",
      "RBI FIRMS Portal Entity Master & Business User Setup",
      "FDI Inward Remittance Certificate (FIRC) Coordination",
      "FDI Reporting to RBI via Form FC-GPR",
      "Commencement of Business Certificate (INC-20A)",
      "First Auditor Appointment Filing (Form ADT-1)",
      "Dedicated Senior International Corporate Counsel",
    ],
  },
  {
    name: "Global Enterprise Suite",
    shortDesc:
      "The complete multinational package: Incorporation, RBI FC-GPR filing, 1-Year ROC compliance, GST & ITR-6...",
    expandedDesc:
      "Designed for overseas headquarters expanding rapidly into the Indian market. Full ongoing secretarial, FEMA cross-border compliance, transfer pricing review, and monthly GST accounting support.",
    price: "₹64,899",
    priceSub: "+ MCA Stamp Duty | Full 1-Year Global Corporate Shield",
    features: [
      "Complete Subsidiary Incorporation + RBI FC-GPR Filing",
      "Full 1-Year ROC & MCA Annual Filing Compliance",
      "GST Registration & 12 Months Filing Returns",
      "Transfer Pricing (TP) Advisory & Intercompany Agreement Review",
      "Annual RBI Foreign Liabilities & Assets (FLA) Return",
      "Corporate Income Tax Return (ITR-6) Filing",
      "Dedicated Cross-Border CA & CS Advisory Team",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Globe2 className="w-4 h-4" />,
    text: "100% FDI Automatic Route Approval",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "Resident Director & Apostille Documentation Guidance",
  },
  {
    icon: <Building className="w-4 h-4" />,
    text: "SPICe+ MCA Filing & Incorporation Certificate",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "RBI FIRMS Portal & FC-GPR Capital Reporting",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Indian Subsidiary →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Comprehensive Guide to Foreign Direct Investment (FDI) in India",
  "How Foreign Companies Register an Indian Subsidiary via SPICe+",
  "Apostille & Consular Legalization for Foreign Parent Company Documents",
  "RBI FIRMS Portal: Entity Master & Form FC-GPR Filing Explained",
  "Mandatory Resident Director Requirements under Companies Act 2013",
  "Annual Foreign Liabilities and Assets (FLA) Return Compliance",
];

function SubsidiaryGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
              <div>
                <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                  Indian Subsidiary Company Registration for Foreign Companies
                </h1>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-3">
                  Setting up an <strong className="font-medium text-slate-800">Indian Subsidiary Company</strong> is the most dependable and legally sound avenue for multinational corporations and foreign startups to establish an operational foothold in India. Regulated under Section 2(87) of the <strong className="font-medium text-slate-800">Companies Act, 2013</strong>, an Indian subsidiary operates as a domestic private limited company where more than 50% (or 100% in a Wholly Owned Subsidiary) of the equity capital is held by the overseas parent company.
                </p>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                  As an independent domestic legal entity, an Indian Subsidiary enjoys lower corporate tax rates, limited liability protection, full commercial trading rights, and access to India&apos;s fast-growing market. At <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a>, our cross-border corporate team coordinates foreign document apostilles, MCA incorporation, and RBI FEMA compliance smoothly.
                </p>
              </div>

              {/* Section 2: Why Global Companies Choose an Indian Subsidiary */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Should Foreign Companies Choose an Indian Subsidiary?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Compared to restrictive branch offices or liaison offices, an Indian Subsidiary offers unmatched operational freedom:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-900">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      100% Foreign Direct Investment (FDI)
                    </strong>
                    Under the automatic route, foreign parent corporations can own up to 100% of equity shares without prior government or RBI approval.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Limited Liability Shield
                    </strong>
                    The foreign parent company&apos;s global balance sheet and overseas assets remain completely insulated from Indian legal claims or liabilities.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Lower Domestic Corporate Tax Rate
                    </strong>
                    Taxed at India&apos;s standard domestic company tax rate (~22% base tax), avoiding the punitive 40% tax rate imposed on foreign branch offices.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Easy Profit Repatriation &amp; DTAA
                    </strong>
                    Profits and dividends can be repatriated to the foreign parent company seamlessly after paying taxes under favorable DTAA treaties.
                  </div>
                </div>
              </div>

              {/* Section 3: Minimum Requirements Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Statutory Minimum Requirements for Indian Subsidiary Setup
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  To establish an Indian Subsidiary on the MCA portal, ensure the following corporate conditions are satisfied:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Requirement</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Statutory Minimum Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {SUBSIDIARY_MIN_REQUIREMENTS_TABLE.map((row, idx) => (
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
                  Eligibility Criteria for Foreign Promoters &amp; Directors
                </h2>
                <div className="space-y-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Foreign Corporate Entity:</strong> Any overseas incorporated company, limited liability entity, or conglomerate can establish a subsidiary in India.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Indian Resident Director:</strong> At least one director on the board must be a resident of India (who has stayed in India for 182+ days in the preceding financial year).
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Foreign Directors:</strong> Foreign citizens can be directors. They need Class-3 DSCs and DINs allotted through passport verification.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Nominee Shareholder:</strong> For a 100% Wholly Owned Subsidiary, a nominee shareholder (individual or corporate) holds 1 share in trust to satisfy the 2-shareholder statutory rule.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Documents Required */}
              <div id="documents-section" className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for Indian Subsidiary Registration
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  All foreign corporate documents must be apostilled or consular notarized in the parent company&apos;s home jurisdiction:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* For Foreign Parent Company */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-[#6B4BFF]" />
                      <span>For Foreign Parent Company</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Apostilled Certificate of Incorporation / Business Charter</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Board Resolution authorizing Indian subsidiary incorporation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Power of Attorney appointing authorized signatory in India</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Apostilled MOA and AOA / Company Bylaws</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Directors & Registered Office */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#00A86B]" />
                      <span>For Directors &amp; Registered Office</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Foreign Director: Apostilled Passport copy &amp; address proof</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Indian Resident Director: Self-attested PAN and Aadhaar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Indian Registered Office: Utility bill (&lt; 2 months) &amp; owner NOC</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Virtual office address in India is completely acceptable</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6: Step-by-Step Incorporation Process */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step Indian Subsidiary Incorporation Process
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-5">
                  Our international corporate desk manages every phase with precision:
                </p>

                <div className="space-y-3.5">
                  {[
                    {
                      step: "Step 1",
                      title: "Document Apostille & Digital Signatures (DSC)",
                      desc: "We coordinate apostilling of the foreign parent charter and board resolution, and issue Class-3 DSCs for all proposed directors.",
                    },
                    {
                      step: "Step 2",
                      title: "Name Reservation via RUN Portal",
                      desc: "We file name options reflecting your foreign brand identity on the MCA RUN portal. Foreign brand names require an authorized NOC from the parent company.",
                    },
                    {
                      step: "Step 3",
                      title: "SPICe+ Incorporation Filing & Certificate Allotment",
                      desc: "Submission of unified SPICe+ Part B form to the Central Registration Centre (CRC). The MCA issues the Certificate of Incorporation (CIN), PAN, and TAN.",
                    },
                    {
                      step: "Step 4",
                      title: "Bank Account Setup, Capital Remittance & RBI FC-GPR",
                      desc: "The subsidiary opens a current bank account in India, receives the inward remittance (FIRC), files Form INC-20A, and submits Form FC-GPR on the RBI FIRMS portal.",
                    },
                  ].map((st, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#00B074] transition-all flex items-start gap-4"
                    >
                      <span className="px-2.5 py-1 rounded-md bg-[#E8FAF2] text-[#00B074] text-xs font-semibold shrink-0">
                        {st.step}
                      </span>
                      <div>
                        <h4 className="font-medium text-slate-800 text-[13.5px] mb-1">{st.title}</h4>
                        <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: Comparison Table - Subsidiary vs Branch vs Liaison */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Comparison: Wholly Owned Subsidiary vs. Branch Office vs. Liaison Office
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Understand why an Indian Subsidiary is the most advantageous investment route for foreign corporations:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Parameter</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Wholly Owned Subsidiary</th>
                        <th className="py-3 px-4 font-normal">Branch Office</th>
                        <th className="py-3 px-4 font-normal">Liaison Office</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {SUBSIDIARY_COMPARISON_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.subsidiary}</td>
                          <td className="py-3 px-4 text-slate-600">{row.branch}</td>
                          <td className="py-3 px-4 text-slate-600">{row.liaison}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 8: Mandatory Annual Compliances */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Mandatory Post-Incorporation &amp; Annual Compliances
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  An Indian Subsidiary must fulfill both domestic corporate and RBI FEMA regulatory filings:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Regulatory Compliance</th>
                        <th className="py-3 px-4 font-normal">Form / Regulatory Portal</th>
                        <th className="py-3 px-4 font-normal">Prescribed Due Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Commencement of Business
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form INC-20A (MCA)</td>
                        <td className="py-3 px-4 text-slate-600">Within 180 days of incorporation</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          FDI Reporting to RBI
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form FC-GPR (RBI FIRMS)</td>
                        <td className="py-3 px-4 text-slate-600">Within 30 days of share allotment</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Foreign Liabilities &amp; Assets (FLA)
                        </td>
                        <td className="py-3 px-4 text-slate-600">FLA Online Return (RBI)</td>
                        <td className="py-3 px-4 text-slate-600">On or before 15th July every year</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Financial Statements Filing
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form AOC-4 (MCA)</td>
                        <td className="py-3 px-4 text-slate-600">Within 30 days of AGM</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Annual Return of Company
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form MGT-7 (MCA)</td>
                        <td className="py-3 px-4 text-slate-600">Within 60 days of AGM</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Transfer Pricing Audit Report
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form 3CEB (Income Tax)</td>
                        <td className="py-3 px-4 text-slate-600">31st October every financial year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Your Indian Subsidiary?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Merrafilings is trusted by multinational firms, overseas funds, and global enterprises worldwide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Dedicated Cross-Border CA &amp; FEMA Legal Desk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>End-to-End RBI FIRMS Form FC-GPR &amp; FLA Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Resident Nominee Director &amp; Virtual Office Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Transparent Pricing with zero hidden overheads</span>
                  </div>
                </div>
              </div>
    </>
  );
}

export default function IndianSubsidiaryPage() {
  return (
    <ServicePageTemplate
      badgeText="FDI & Cross-Border Corporate Formation"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Indian Subsidiary Company
          </span>{" "}
          Registration for Foreign Companies
        </>
      }
      heroSubtitle="Expand your business into India with a wholly owned or majority-owned subsidiary. 100% online, FDI automatic route, RBI FIRMS compliance & corporate bank account."
      formTitle="Start Your Indian Subsidiary"
      formSubtitle="Enter your details below to consult with our cross-border FDI and corporate incorporation team."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end corporate support from name reservation to incorporation certificate."
      breadcrumbCurrent="Indian Subsidiary"
      guideContent={<SubsidiaryGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Common questions about establishing an Indian Subsidiary company."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
