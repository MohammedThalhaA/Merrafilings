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

const PACKAGES: PricingPackage[] = [
  {
    name: "Public Ltd - Incorporation",
    shortDesc:
      "Statutory incorporation for minimum 7 shareholders and 3 directors under the Companies Act, 2013...",
    expandedDesc:
      "Includes name reservation via RUN/SPICe+ Part A with 'Limited' suffix, 3 Director Identification Numbers (DIN), 3 Class-3 DSCs, drafting of extensive e-MOA & e-AOA with public share capital clauses, PAN, TAN, and Certificate of Incorporation.",
    price: "₹19,899",
    priceSub: "+ MCA Government Stamp Duty & ROC Filing Fees",
    features: [
      "Company Name Approval via MCA SPICe+ Part A",
      "3 Digital Signature Certificates (DSC Class 3)",
      "3 Director Identification Numbers (DIN)",
      "Public Company e-MOA & e-AOA Drafting",
      "Certificate of Incorporation (COI) Issuance",
      "Company PAN, TAN & Bank Account Assistance",
      "Statutory Register Setup for 7 Shareholders",
    ],
  },
  {
    name: "Public Ltd - Incorporation & Compliance",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Complete incorporation plus mandatory post-incorporation filings: INC-20A, ADT-1, and Demat ISIN admission...",
    expandedDesc:
      "Essential for public companies planning to issue shares. Covers complete incorporation, Commencement of Business Certificate (INC-20A), Auditor Appointment (ADT-1), and admission of equity shares with NSDL/CDSL for mandatory dematerialization.",
    price: "₹39,899",
    priceSub: "+ Stamp Duty | Complete Pre-Operations & Demat Setup",
    features: [
      "Complete Public Company Incorporation Package",
      "Commencement of Business Certificate (INC-20A)",
      "First Statutory Auditor Appointment (Form ADT-1)",
      "ISIN Allotment & Demat Admission via NSDL / CDSL",
      "First Board of Directors & Statutory Meeting Minutes",
      "Share Certificates & Common Seal Drafting",
      "Dedicated Senior Corporate Secretary & CA Manager",
    ],
  },
  {
    name: "Corporate Enterprise Suite",
    shortDesc:
      "The comprehensive corporate suite: Incorporation, Demat setup, Secretarial Audit & 1-Year ROC compliance...",
    expandedDesc:
      "Tailored for high-growth enterprises gearing up for institutional funding, private equity, or eventual public IPO. Full secretarial audit, board meeting governance, Form AOC-4 & MGT-7 filings, and corporate ITR-6 preparation.",
    price: "₹69,899",
    priceSub: "+ Stamp Duty | Full 1-Year Corporate Governance Shield",
    features: [
      "Complete Incorporation + Demat ISIN Setup Package",
      "Full 1-Year ROC & MCA Annual Filing Compliance",
      "Preparation of Annual Financials & Directors' Report",
      "Secretarial Audit & Annual General Meeting (AGM) Support",
      "Corporate Income Tax Return (ITR-6) Filing",
      "Continuous Regulatory Compliance & MCA Scrutiny Shield",
      "Dedicated Team of Chartered Accountants & CS Officers",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Users className="w-4 h-4" />,
    text: "Incorporation for 7+ Shareholders & 3+ Directors",
  },
  {
    icon: <Landmark className="w-4 h-4" />,
    text: "Ability to Raise Capital from the General Public & Institutional Funds",
  },
  {
    icon: <Award className="w-4 h-4" />,
    text: "Mandatory Dematerialization (ISIN) via NSDL & CDSL",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Unrestricted Freely Transferable Shares with Highest Credibility",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Public Limited Company →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Comprehensive Guide to Forming a Public Limited Company in India",
  "Mandatory Dematerialization of Securities for Unlisted Public Companies",
  "Differences Between Public Limited, Private Limited, and Section 8",
  "How Public Limited Companies Raise Capital via IPO and Private Placement",
  "Role and Appointment of Independent Directors in Public Companies",
  "Annual ROC Compliances and Secretarial Audits for Public Companies",
];

function PublicGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
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
    </>
  );
}

export default function PublicLimitedCompanyPage() {
  return (
    <ServicePageTemplate
      badgeText="Apex Corporate Entity for Large Scale Capital"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-light">
            Public Limited Company
          </span>{" "}
          Registration in India
        </>
      }
      heroSubtitle="Build an enterprise positioned for large-scale institutional funding, public capital raising, and eventual stock market listing. Complete MCA SPICe+ filing, ISIN demat setup, DIN, DSC & corporate bank account."
      formTitle="Start Your Public Limited Company"
      formSubtitle="Enter your details below to consult with our senior corporate advisory and secretarial team."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end corporate support from name reservation to incorporation certificate."
      breadcrumbCurrent="Public Limited Company"
      guideContent={<PublicGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Common questions about incorporating a Public Limited Company in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
