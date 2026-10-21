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

const PACKAGES: PricingPackage[] = [
  {
    name: "Section 8 Company - Incorporation",
    shortDesc:
      "Name approval via RUN, Central Government Section 8 License (Form INC-12) & SPICe+ filing...",
    expandedDesc:
      "Includes MCA name approval, Central Government Section 8 License (Form INC-12), 2 Director Identification Numbers (DIN), 2 Digital Signatures (DSC), charter drafting (MOA/AOA), PAN, TAN and COI.",
    price: "₹2,899",
    priceSub: "+ MCA Government Fees & Stamp Duty",
    features: [
      "Company Name Approval via SPICe+ Part A",
      "Section 8 License from Central Government (INC-12)",
      "2 Digital Signature Certificates (DSC Class 3)",
      "2 Director Identification Numbers (DIN)",
      "Custom Non-Profit Charter Drafting (MOA & AOA)",
      "Incorporation Certificate (COI) Issuance",
      "PAN, TAN and Zero-Balance NGO Bank Account",
    ],
  },
  {
    name: "Section 8 - Incorporation + 12A & 80G",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Incorporation plus Income Tax Exemption 12A registration & 80G tax deduction for donor fundraising...",
    expandedDesc:
      "Essential for operational NGOs. Complete incorporation plus Income Tax 12A registration (100% tax exemption on trust income) and 80G certification (enabling 50% tax deductions for donors).",
    price: "₹9,899",
    priceSub: "+ MCA Stamp Duty | Complete Donor Tax Exemption Suite",
    features: [
      "Complete Section 8 Incorporation Package",
      "Income Tax Section 12A Registration (Form 10A)",
      "Income Tax Section 80G Registration (Form 10A)",
      "CSR-1 Registration for Corporate Social Responsibility Funding",
      "Commencement of Business Certificate (INC-20A)",
      "First Statutory Auditor Appointment (Form ADT-1)",
      "Dedicated Non-Profit Advisory Specialist",
    ],
  },
  {
    name: "Section 8 - Incorporation & Compliance",
    shortDesc:
      "Incorporation, 12A/80G, CSR-1, NGO Darpan Portal registration & 1st Year Annual ROC compliance...",
    expandedDesc:
      "The comprehensive non-profit governance suite: Incorporation, tax exemptions, NITI Aayog NGO Darpan registration for government grants, FCRA advisory, and 1 full year of ROC & MCA annual compliance filings.",
    price: "₹19,899",
    priceSub: "+ Stamp Duty | Full 1-Year Institutional NGO Shield",
    features: [
      "Everything in Incorporation + 12A & 80G Package",
      "NITI Aayog NGO Darpan Portal Registration",
      "Full 1-Year ROC & MCA Annual Filing Compliance",
      "Annual ROC Financial Statement Filing (AOC-4)",
      "Annual Return of Company Filing (MGT-7)",
      "NGO Income Tax Return (ITR-7) Preparation",
      "Dedicated Non-Profit Chartered Accountant Manager",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Landmark className="w-4 h-4" />,
    text: "Central Government Section 8 License (Form INC-12)",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "12A & 80G Tax Exemption Certificates for Donors",
  },
  {
    icon: <Award className="w-4 h-4" />,
    text: "CSR-1 & NITI Aayog NGO Darpan Portal Registration",
  },
  {
    icon: <Scale className="w-4 h-4" />,
    text: "Limited Liability Protection with Highest NGO Credibility",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Section 8 Company →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Comprehensive Guide to Incorporating a Section 8 Non-Profit Company",
  "How to Obtain Section 12A & 80G Income Tax Registration for NGOs",
  "CSR-1 Registration for Receiving Corporate Social Responsibility Funds",
  "NITI Aayog NGO Darpan Portal Registration Process Explained",
  "Differences Between Section 8 Company, Trust, and Society in India",
  "Annual ROC Compliances for Section 8 Companies: Forms & Penalties",
];

function Section8GuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Section 8 Company Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    <strong className="font-normal text-slate-900">Section 8 company registration in India</strong> is the legally recognized process of incorporating a non-profit organization under the <strong className="font-normal text-slate-900">Companies Act, 2013</strong>. It is ideal for individuals and organizations aiming to promote education, charity, science, religion, arts, or social welfare. A Section 8 company enjoys distinct legal identity, <a href="#pricing" className="text-[#155EEF] hover:underline font-normal">income tax benefits</a>, and higher credibility compared to traditional non-profit structures. Our experts at <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a> provide complete end-to-end guidance from name approval to 12A &amp; 80G registrations at transparent costs.
                  </p>
                </div>

                {/* Section 2: What is Section 8 Company Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    What is Section 8 Company Registration in India?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    A <strong className="font-normal text-slate-900">Section 8 company</strong> is a type of non-profit organization registered under <strong className="font-normal text-slate-900">Section 8 of the Companies Act, 2013</strong>, governed by the Ministry of Corporate Affairs (MCA). It is incorporated with the primary objective of promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. Unlike commercial companies, a Section 8 company does not distribute dividends or profits to its members — all income and surplus must be reinvested solely towards achieving its stated public welfare objectives.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    Features of Section 8 Company
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-normal text-slate-900">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Choosing the right non-profit structure is critical for long-term governance and fundraising success. Here is an interactive comparison across key parameters:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Many founders confuse Section 8 companies with traditional NGOs. An NGO is an umbrella category that encompasses Trusts, Societies, and Section 8 companies. While Trusts and Societies are registered under archaic state acts, a Section 8 company enjoys national recognition, standardized MCA filing systems, and the ability to operate across all Indian states without requiring separate state approvals.
                  </p>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Compared to a regular <a href="#pvt-ltd" className="text-[#155EEF] hover:underline font-normal">Private Limited Company</a>, a Section 8 company cannot distribute dividends or capital gains to its promoters. However, it benefits from substantial stamp duty concessions, exemption from minimum capital rules, and the ability to obtain 12A and 80G tax exemptions for tax-free donations.
                  </p>
                </div>

                {/* Section 5: Why Should You Register a Section 8 Company (Benefits) */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Should You Register a Section 8 Company in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
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
                        <p className="text-[12px] font-normal text-slate-900 mt-1 leading-relaxed">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Before starting the Section 8 incorporation process, ensure that your founding team meets the following mandatory criteria:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Having the complete set of verified documents ready ensures quick name approval and seamless SPICe+ form processing:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#00A86B]" />
                        Documents from Directors &amp; Promoters
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
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
                      <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-5">
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
                          <p className="text-[12.5px] font-normal text-slate-900 mt-1 leading-relaxed">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Estimated working days and typical government &amp; professional cost components:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Timeline Table */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                      <table className="w-full text-left text-[12px] font-normal text-slate-900">
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
                      <table className="w-full text-left text-[12px] font-normal text-slate-900">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Post-incorporation, every Section 8 company must fulfil mandatory annual MCA and Income Tax compliances to protect its legal standing and tax-exempt status:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
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
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Merrafilings is India&apos;s modern cloud compliance platform, assisting thousands of non-profits, foundations, and social impact leaders nationwide:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
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
    </>
  );
}

export default function Section8CompanyRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="India's Most Prestigious Non-Profit Structure"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Section 8 Company
          </span>{" "}
          Registration in India
        </>
      }
      heroSubtitle="Establish a world-class non-profit organization with limited liability protection and national recognition. Fast-track central government licensing, 12A/80G tax exemptions, and CSR-1 registration."
      formTitle="Start Your Section 8 Company"
      formSubtitle="Enter your details below to consult with our specialized non-profit incorporation and 12A/80G tax exemption team."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end corporate support from license issuance to 12A/80G registration."
      breadcrumbCurrent="Section 8 Company"
      guideContent={<Section8GuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about establishing a Section 8 Company in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
