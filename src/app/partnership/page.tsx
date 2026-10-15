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

const PARTNERSHIP_VS_OTHER_COMPARISON = [
  {
    feature: "Minimum Members",
    partnership: "2 Partners",
    llp: "2 Partners",
    pvtLtd: "2 Shareholders / Directors",
    proprietor: "1 Proprietor",
  },
  {
    feature: "Legal Entity",
    partnership: "No (Same as partners)",
    llp: "Yes (Distinct Corporate Entity)",
    pvtLtd: "Yes (Distinct Corporate Entity)",
    proprietor: "No (Same as owner)",
  },
  {
    feature: "Liability of Owners",
    partnership: "Unlimited (Joint & Several)",
    llp: "Limited to Capital Contribution",
    pvtLtd: "Limited to Share Capital",
    proprietor: "Unlimited Personal Liability",
  },
  {
    feature: "Statutory Registration",
    partnership: "Optional with State ROF",
    llp: "Mandatory with MCA",
    pvtLtd: "Mandatory with MCA",
    proprietor: "Optional (GST / Udyam)",
  },
  {
    feature: "Compliance Burden",
    partnership: "Minimal (ITR-5 & GST)",
    llp: "Moderate (Form 8 & Form 11)",
    pvtLtd: "High (AOC-4, MGT-7, Audit)",
    proprietor: "Minimal (Individual ITR)",
  },
  {
    feature: "Income Tax Rate",
    partnership: "Flat 30% (+ cess)",
    llp: "Flat 30% (+ cess)",
    pvtLtd: "22% – 25% (+ cess)",
    proprietor: "Individual Slab Rates",
  },
];

const PARTNERSHIP_TYPES_TABLE = [
  {
    type: "General Partnership (GP)",
    liability: "Unlimited",
    duration: "Ongoing",
    management: "All Partners",
    bestFor: "Small Businesses & Retail Traders",
  },
  {
    type: "Limited Liability Partnership (LLP)",
    liability: "Limited",
    duration: "Ongoing (Perpetual)",
    management: "Designated Partners",
    bestFor: "Professionals, Consultants & Startups",
  },
  {
    type: "Partnership at Will",
    liability: "Unlimited",
    duration: "No Fixed Term (Notice Based)",
    management: "All Partners",
    bestFor: "Flexible Small Ventures & Family Trades",
  },
  {
    type: "Particular Partnership",
    liability: "Unlimited",
    duration: "Project-Specific Duration",
    management: "All Partners",
    bestFor: "Joint Ventures & Construction Projects",
  },
  {
    type: "Limited Partnership (LP)",
    liability: "Mixed (General + Limited)",
    duration: "Ongoing",
    management: "General Partners Only",
    bestFor: "Real Estate & Private Investment Funds",
  },
];

const REGISTERED_VS_UNREGISTERED_TABLE = [
  {
    feature: "Legal Recognition",
    registered: "Full recognition under Partnership Act, 1932",
    unregistered: "Limited legal status",
  },
  {
    feature: "Right to File Lawsuits",
    registered: "Can sue third parties in court for contract breach",
    unregistered: "Cannot sue third parties in court",
  },
  {
    feature: "Court Set-Off Claims",
    registered: "Allowed to claim set-offs in dispute proceedings",
    unregistered: "Not allowed in court disputes",
  },
  {
    feature: "Bank Loan & Credit Access",
    registered: "Easy institutional loan approvals",
    unregistered: "Strict and cumbersome loan processing",
  },
  {
    feature: "Government Tenders",
    registered: "Eligible for government tenders & institutional contracts",
    unregistered: "Not eligible for public sector tenders",
  },
  {
    feature: "Market Credibility",
    registered: "High trust with vendors, banks, and clients",
    unregistered: "Low commercial credibility",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is the registration of a partnership?",
    a: "Registration of partnership in India is legally formalizing a partnership firm by filing an application with the Registrar of Firms under the Indian Partnership Act, 1932. The registration process involves providing details about the partnership firm, such as its name, location, partners' details, and the terms and conditions of the partnership agreement.",
  },
  {
    q: "Is it compulsory to register a partnership?",
    a: "Under the Indian Partnership Act, 1932, registering a partnership firm is optional but highly recommended. An unregistered firm cannot sue third parties in court to enforce contractual rights, nor can it claim legal set-offs. Registering the firm with the Registrar of Firms (ROF) provides legal recognition and safeguards the rights of all partners.",
  },
  {
    q: "Who is eligible for partnership?",
    a: "Any person of sound mind who is not a minor, not an undischarged insolvent, and not disqualified from contracting by law can become a partner. In addition, registered partnership firms, companies (if permitted by MOA), and the Karta of an HUF (in individual capacity) are also legally eligible to be partners.",
  },
  {
    q: "How much capital is required to start a Partnership?",
    a: "A Partnership firm can be started with any amount of capital. There is no minimum capital requirement prescribed under the Indian Partnership Act, 1932. Partners can contribute cash, property, or specialized skills as defined in the Partnership Deed.",
  },
  {
    q: "What are the advantages of registering a Partnership firm?",
    a: "A registered partnership firm enjoys full legal standing to file suits in court against third parties or between partners to enforce contractual rights. It can claim legal set-offs exceeding ₹100 in court disputes, easily open bank accounts, qualify for government tenders, and obtain commercial loans.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Is a partnership firm a separate legal entity?",
    a: "No. In the eyes of the law, a partnership firm is not a separate legal entity distinct from its partners. Partners have unlimited liability and are jointly and severally responsible for all debts, losses, and obligations incurred by the firm.",
  },
  {
    q: "Is it compulsory for partnership firms to file income tax returns?",
    a: "Yes. Every partnership firm in India must mandatorily file its annual Income Tax Return (ITR-5), irrespective of whether it made a profit or incurred a loss during the financial year. Partnership firm net profits are taxed at a flat rate of 30% plus applicable surcharge and cess.",
  },
  {
    q: "Can a person transfer their share in a partnership firm?",
    a: "There are strict statutory restrictions on the transfer of ownership interest in a partnership firm. A partner cannot transfer or assign their partnership share or interest to an outsider without the unanimous consent of all other partners.",
  },
  {
    q: "What is a Partnership deed?",
    a: "A Partnership deed is a legally binding agreement executed between partners on non-judicial stamp paper. It details the firm's name, registered address, nature of business, capital contributions, profit-and-loss sharing ratio, management duties, partner remuneration, and dispute resolution mechanisms.",
  },
  {
    q: "Why is a Partnership deed necessary?",
    a: "The Partnership deed establishes clear governance rules between partners and serves as conclusive proof of ownership and terms. It is the primary document required for obtaining the firm's PAN card, opening a commercial current bank account, securing GST registration, and registering with the Registrar of Firms.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Is audit required for a Partnership firm?",
    a: "Statutory company audits are not mandatory for ordinary partnership firms. However, a Tax Audit under Section 44AB of the Income Tax Act becomes compulsory if the firm's annual turnover exceeds ₹1 crore (for business) or ₹50 lakhs (for professions).",
  },
  {
    q: "Can I convert my Partnership firm into a Company / LLP?",
    a: "Yes, an existing partnership firm can be converted into a Limited Liability Partnership (LLP) or a Private Limited Company under Part I of Chapter XXI of the Companies Act, 2013, to achieve limited liability and separate legal identity.",
  },
  {
    q: "How to open a bank account for a Partnership firm?",
    a: "To open a current bank account in the partnership firm's name, submit a notarized or registered Partnership Deed, the firm's PAN card, address proof of the registered place of business, and KYC documents (PAN & Aadhaar) of all partners.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How many people are required to start a Partnership firm?",
    a: "A minimum of 2 partners are required to establish a partnership firm. Under the Companies Act, 2013, the maximum number of partners permitted in an ordinary partnership firm is 50.",
  },
  {
    q: "Who can be a Partner in an Indian Partnership firm?",
    a: "Any Indian citizen residing in India who is an adult and legally competent to contract can become a partner. Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) can invest in Indian partnerships only under specific RBI and FDI regulatory approvals.",
  },
  {
    q: "What documents are required to register a Partnership firm?",
    a: "Required documents include PAN cards and Aadhaar/Passport of all partners, passport-size photographs, electricity bill or utility bill of the business address, Rent Agreement with owner NOC, and a duly notarized Partnership Deed on state stamp paper.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Merrafilings Portal",
  "Partnership Deed Drafting",
  "LLP Registration",
  "Sole Proprietorship",
  "Private Limited Company",
  "One Person Company",
  "GST Registration",
  "Firm PAN Card",
  "MSME Udyam Registration",
  "Firm Bank Account",
  "Partnership Dissolution Deed",
  "Virtual Office Address",
];

const POPULAR_SEARCHES_TAGS = [
  "Partnership Firm Registration",
  "Partnership Deed Online",
  "Form 1 Registrar of Firms",
  "Partnership Act 1932",
  "Two Person Business India",
  "General Partnership India",
  "Partnership vs LLP",
  "Partnership vs Pvt Ltd",
  "Partnership Firm Tax Rate 30%",
  "ITR-5 Partnership Return",
  "Notarized Partnership Deed",
  "Stamp Duty on Partnership Deed",
  "Firm PAN Card Online",
  "GST Registration for Partnership",
  "MSME Registration for Partnership",
  "Partnership at Will",
  "Particular Partnership",
  "Partnership Firm Current Account",
  "Online CA Consultation",
  "Trademark Registration for Firm",
  "Startup Registration India",
  "ROC Annual Compliance",
  "Tax Audit Section 44AB",
  "Company Registration",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Partnership Deed Drafting",
    shortDesc:
      "Expert legal drafting of comprehensive Partnership Deed under Indian Partnership Act, 1932...",
    expandedDesc:
      "Includes tailored profit/loss sharing clauses, capital contribution terms, dispute resolution mechanism, partner rights and duties, and state stamp paper guidance.",
    price: "₹2,899",
    priceSub: "+ State Stamp Duty | 100% Lawyer Drafted",
    features: [
      "Custom Partnership Deed Legal Drafting",
      "Capital Contribution & Profit Sharing Ratio Clauses",
      "Roles, Rights & Responsibilities of Partners Defined",
      "Dispute Resolution & Dissolution Terms",
      "Stamp Paper Purchase Advisory & Notarization Guidance",
      "Permanent Account Number (PAN) Card Application",
      "Zero-Balance Current Bank Account Support",
    ],
  },
  {
    name: "Partnership Firm - Registration + GST",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Deed drafting, Registrar of Firms (ROF) registration filing, PAN, TAN & GST registration...",
    expandedDesc:
      "Ideal for business partners requiring official government recognition (ROF Form A filing), legal right to sue in court, GST registration, and MSME/Udyam certificate.",
    price: "₹6,899",
    priceSub: "+ ROF Government Fees | Complete Legal Registration",
    features: [
      "Everything in Partnership Deed Drafting Package",
      "Registrar of Firms (ROF) Form A Filing & Liaison",
      "ROF Registration Certificate Attainment",
      "Firm PAN & TAN Allotment",
      "GST Registration Certificate Application",
      "MSME / Udyam Registration for Government Subsidies",
      "Dedicated Corporate Legal Expert & Fast-Track Processing",
    ],
  },
  {
    name: "Partnership - Registration & Compliance",
    shortDesc:
      "ROF Registration, GST, Trademark Filing & 1st Year Annual Tax Compliance (ITR-5 Filing)...",
    expandedDesc:
      "The all-inclusive package: Deed drafting, ROF certification, brand protection with 1 Trademark application (1 class), monthly GST return filings, and annual ITR-5 partnership tax filing.",
    price: "₹14,899",
    priceSub: "+ ROF / Trademark Govt Fees | Full 1-Year Compliance",
    features: [
      "Complete ROF Registration + GST Package",
      "1 Trademark Application Filing (Class 1-45)",
      "12 Months GST Return Filing (GSTR-1 & GSTR-3B)",
      "Annual Financial Statement Drafting (Balance Sheet & P&L)",
      "Partnership Firm Income Tax Return (ITR-5) Filing",
      "TDS Compliance & Annual Filing Guidance",
      "Dedicated Chartered Accountant & Legal Manager",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <FileText className="w-4 h-4" />,
    text: "Custom Partnership Deed Drafted by Senior Advocates",
  },
  {
    icon: <Building className="w-4 h-4" />,
    text: "Registrar of Firms (ROF) Form A Filing & Certification",
  },
  {
    icon: <Receipt className="w-4 h-4" />,
    text: "Firm PAN, TAN & GST Registration Included",
  },
  {
    icon: <Scale className="w-4 h-4" />,
    text: "100% Legally Compliant with Indian Partnership Act, 1932",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Partnership Firm →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Registered vs Unregistered Partnership Firm: Legal Rights Explained",
  "How to Register a Partnership Firm with the Registrar of Firms (ROF)",
  "Essential Clauses Every Partnership Deed Must Have in India",
  "Differences Between General Partnership, LLP, and Private Limited",
  "Income Tax Rules for Partnership Firms: 30% Flat Tax & Partner Salary",
  "How to Dissolve or Reconstitute a Partnership Firm in India",
];

function PartnershipGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Partnership Firm Registration in India
                  </h1>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    A <strong className="font-normal text-slate-900">partnership firm</strong> is one of the most preferred business structures in India, where two or more individuals come together to run a business and share profits and losses. Governed by the <strong className="font-normal text-slate-900">Indian Partnership Act, 1932</strong>, a partnership firm offers immense operational flexibility, shared management responsibility, and ease of formation. Whether you are starting a new joint venture or formalizing an ongoing enterprise, understanding the complete <a href="#pricing" className="text-[#155EEF] hover:underline font-normal">partnership firm registration process</a> is the first step towards building a legally recognized and credible business in India. Our legal experts at <a href="/" className="text-[#00B074] hover:underline font-normal">MerraFilings</a> guide you through every milestone from custom deed drafting to Registrar of Firms certificate delivery.
                  </p>
                </div>

                {/* Section 2: What is Partnership Firm Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    What is Partnership Firm Registration in India?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    <strong className="font-normal text-slate-900">Partnership firm registration in India</strong> is the legal procedure of registering a business entity formed by two or more co-founders under the <strong className="font-normal text-slate-900">Indian Partnership Act, 1932</strong>. Although registration is optional under the Act, a registered firm enjoys significant legal standing over an unregistered one, including the statutory right to sue defaulting parties in court and claim monetary set-offs.
                  </p>
                  <p className="mt-2.5 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    The registration is administered by the <strong className="font-normal text-slate-900">Registrar of Firms (ROF)</strong> under the respective state government where the firm&apos;s principal place of business is situated. A comprehensively drafted <strong className="font-normal text-slate-900">Partnership Deed</strong> executed on state non-judicial stamp paper serves as the legal backbone of the enterprise.
                  </p>
                </div>

                {/* Section 3: Types of Partnership Firms */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    What are the Types of Partnership Firms in India?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Selecting the right partnership model determines the liability exposure, governance flexibility, and longevity of your business:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Type of Partnership</th>
                          <th className="py-3 px-4 font-normal">Liability</th>
                          <th className="py-3 px-4 font-normal">Duration</th>
                          <th className="py-3 px-4 font-normal">Management</th>
                          <th className="py-3 px-4 font-normal text-[#00A86B]">Best Suited For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {PARTNERSHIP_TYPES_TABLE.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                          >
                            <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.type}
                            </td>
                            <td className="py-3 px-4 text-slate-600">{row.liability}</td>
                            <td className="py-3 px-4 text-slate-600">{row.duration}</td>
                            <td className="py-3 px-4 text-slate-600">{row.management}</td>
                            <td className="py-3 px-4 font-medium text-[#00A86B]">{row.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">1. General Partnership (GP)</h3>
                      <p className="text-[13px] font-normal text-slate-900 mt-1 leading-relaxed">
                        The most prevalent format where all partners hold joint authority and unlimited personal liability. If the business defaults, personal assets of any or all partners can be attached to settle firm debts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">2. Limited Liability Partnership (LLP)</h3>
                      <p className="text-[13px] font-normal text-slate-900 mt-1 leading-relaxed">
                        A corporate hybrid governed by the LLP Act, 2008 with Ministry of Corporate Affairs oversight. Partners enjoy limited liability protection restricted strictly to their agreed capital contribution.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">3. Partnership at Will</h3>
                      <p className="text-[13px] font-normal text-slate-900 mt-1 leading-relaxed">
                        Formed without any fixed duration clause in the deed under Section 7 of the Act. Any partner can dissolve the partnership at any time simply by serving written notice to other co-partners.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-normal text-[#1F1646]">4. Particular Partnership</h3>
                      <p className="text-[13px] font-normal text-slate-900 mt-1 leading-relaxed">
                        Constituted under Section 8 solely for a specific project, tender, or venture (e.g. joint construction or infrastructure subcontracting). Automatically dissolves upon completion of the venture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Registered vs Unregistered Partnership Table */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Registered vs Unregistered Partnership Firm in India
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The Indian Partnership Act does not penalize non-registration, but it imposes severe legal disabilities on unregistered firms:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                      <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4 font-normal">Feature</th>
                          <th className="py-3 px-4 font-normal text-[#00A86B]">Registered Partnership Firm</th>
                          <th className="py-3 px-4 font-normal">Unregistered Partnership Firm</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {REGISTERED_VS_UNREGISTERED_TABLE.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                          >
                            <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.feature}
                            </td>
                            <td className="py-3 px-4 font-medium text-[#00A86B]">{row.registered}</td>
                            <td className="py-3 px-4 text-slate-600">{row.unregistered}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 5: Eligibility & Name Selection */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Eligibility and Naming Rules for Partnership Firms
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#00A86B]" />
                        Partner Eligibility Criteria
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Minimum 2 partners, maximum 50 partners under Companies Act</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Must be an adult of sound mind, not an undischarged insolvent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Minors can be admitted to benefits of partnership with guardian consent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Existing registered firms and companies can become corporate partners</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-2 flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#00A86B]" />
                        Naming Rules &amp; Guidelines
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Must be distinct and not identical to any registered trademark or firm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Cannot contain words like Crown, Emperor, Empire, Royal without approval</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Cannot suggest patronization by Central or State Governments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Must comply with Emblems and Names (Improper Use) Act, 1950</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 6: Documents Required */}
                <div id="documents-required" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Documents Required for Partnership Firm Registration
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    The essential documentation checklist required for drafting the deed and filing Form 1 with the Registrar:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#00A86B]" />
                        Documents from All Partners
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>PAN Card of all partners (mandatory for taxation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Identity Proof: Aadhaar Card, Passport, or Voter ID</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Address Proof: Bank Statement or Utility Bill (within 2 months)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Passport-size color photographs of each partner</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/50">
                      <h4 className="text-[14px] font-normal text-slate-800 mb-3 flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#00A86B]" />
                        Principal Place of Business Documents
                      </h4>
                      <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Latest Electricity bill or property tax receipt of office premises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Rent Agreement executed on stamp paper (if premises is rented)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>No Objection Certificate (NOC) from property owner</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#00A86B] font-bold">✓</span>
                          <span>Partnership Deed printed on state non-judicial stamp paper</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 7: Step-by-Step Registration Process */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Step-by-Step Partnership Registration Process in India
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-5">
                    Follow these 6 sequential steps to legally register and operationalize your partnership enterprise:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "Step 1",
                        title: "Drafting the Comprehensive Partnership Deed",
                        desc: "Prepare a detailed Partnership Deed incorporating the firm name, capital contribution per partner, profit & loss sharing ratio, partner salaries, banking authorization, and exit terms.",
                      },
                      {
                        step: "Step 2",
                        title: "Executing Stamp Duty & Notarization",
                        desc: "Print the deed on non-judicial stamp paper of appropriate value as prescribed by your state Stamp Act (e.g. ₹200–₹500 in TN/MH), sign across all pages, and get it notarized by a public notary.",
                      },
                      {
                        step: "Step 3",
                        title: "Submitting Form 1 to Registrar of Firms (ROF)",
                        desc: "Submit Form 1 (Application for Registration of Firm) along with notarized deed, affidavit, and address proofs to the state Registrar of Firms portal or physical office.",
                      },
                      {
                        step: "Step 4",
                        title: "Paying State Government Registration Fees",
                        desc: "Pay the prescribed state registration fees online or via treasury challan. The Registrar scrutinizes documents and enters the firm into the official Register of Firms.",
                      },
                      {
                        step: "Step 5",
                        title: "Receiving the Certificate of Registration",
                        desc: "The Registrar issues the official Partnership Registration Certificate containing the registration number, confirming the firm's legal existence under the 1932 Act.",
                      },
                      {
                        step: "Step 6",
                        title: "Applying for Firm PAN, GST, and Current Bank Account",
                        desc: "Apply for a separate PAN card in the firm's name via NSDL/UTIITSL, secure GST registration, open a dedicated commercial current account, and start billing clients.",
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

                {/* Section 8: Comparison with other Structures */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Partnership Firm vs Other Business Structures
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Comparison between Partnership Firm, LLP, Private Limited Company, and Sole Proprietorship:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                    <table className="w-full text-left text-[12px] font-normal text-slate-900">
                      <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3 font-normal">Feature</th>
                          <th className="py-2.5 px-3 font-normal text-[#00A86B]">Partnership Firm</th>
                          <th className="py-2.5 px-3 font-normal">LLP</th>
                          <th className="py-2.5 px-3 font-normal">Private Limited</th>
                          <th className="py-2.5 px-3 font-normal">Sole Proprietorship</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {PARTNERSHIP_VS_OTHER_COMPARISON.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#EDF8F3] transition-colors duration-150">
                            <td className="py-2.5 px-3 font-normal text-slate-800">{row.feature}</td>
                            <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.partnership}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.llp}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.pvtLtd}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.proprietor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 9: Compliances After Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Compliance Requirements for Partnership Firms in India
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Statutory compliances required to maintain good tax standing and avoid penal interest:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Income Tax Return (ITR-5):</strong> Flat 30% tax rate, filed annually by 31st July</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>GST Returns:</strong> Monthly GSTR-1 and GSTR-3B filings (if registered under GST)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>Tax Audit under 44AB:</strong> Mandatory if annual turnover exceeds ₹1 crore (business)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span><strong>TDS Compliance:</strong> Quarterly filing of 24Q/26Q if deducting tax on payments</span>
                    </div>
                  </div>
                </div>

                {/* Section 10: Why Choose Merrafilings */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                    Why Choose Merrafilings for Partnership Firm Registration?
                  </h2>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    Merrafilings is India&apos;s leading corporate compliance platform, having assisted over 100,000+ businesses with firm registration and annual compliance:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Experienced CAs and Advocates specializing in Partnership Law</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Fast turnaround: Deed drafting in 24 hours, registration in 5–7 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Transparent fee structure with absolutely zero hidden charges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00A86B] font-bold">✓</span>
                      <span>Free LEDGERS software subscription for accounting &amp; invoicing</span>
                    </div>
                  </div>
                </div>
    </>
  );
}

export default function PartnershipPage() {
  return (
    <ServicePageTemplate
      badgeText="Traditional Partnership with Operational Simplicity"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Partnership Company
          </span>{" "}
          Registration Online in India
        </>
      }
      heroSubtitle="Start your joint business journey with two or more partners. Fast-track deed drafting, Registrar of Firms (ROF) registration, PAN, TAN & GST certification."
      formTitle="Start Your Partnership Firm"
      formSubtitle="Enter your details below to get immediate consultation from our partnership legal specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end legal support from deed drafting to ROF registration certificate."
      breadcrumbCurrent="Partnership"
      guideContent={<PartnershipGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about registering a Partnership Firm in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
