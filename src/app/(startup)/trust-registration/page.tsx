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

const TRUST_TYPES_TABLE = [
  {
    type: "Public Trust",
    purpose: "Benefit of the general public for social, educational, and medical welfare",
    governedBy: "State Public Trusts Acts (e.g. Bombay Public Trust Act)",
  },
  {
    type: "Private Trust",
    purpose: "Benefit of specific individuals, family members, or estate succession",
    governedBy: "Indian Trusts Act, 1882",
  },
  {
    type: "Charitable Trust",
    purpose: "Education, poverty relief, environmental cause, or medical aid",
    governedBy: "Income Tax Act, 1961 & State Laws",
  },
  {
    type: "Religious Trust",
    purpose: "Religious ceremonies, maintenance of temples, shrines, and endowments",
    governedBy: "Religious Endowment Acts / State Boards",
  },
  {
    type: "Revocable Trust",
    purpose: "Flexible estate planning trust that can be altered or cancelled by the settlor",
    governedBy: "Indian Trusts Act, 1882",
  },
  {
    type: "Irrevocable Trust",
    purpose: "Permanent trust where assets cannot be reclaimed once transferred into corpus",
    governedBy: "Indian Trusts Act, 1882",
  },
];

const TRUST_DOCUMENTS_TABLE = [
  {
    document: "Trust Deed on Stamp Paper",
    purpose: "Foundational constitutional charter outlining legal name, aims, powers, and rules",
    format: "Executed on Non-Judicial Stamp Paper",
  },
  {
    document: "PAN Card of Settlor & All Trustees",
    purpose: "Identity proof and permanent taxation verification",
    format: "Clear Self-Attested Digital Copies",
  },
  {
    document: "Aadhaar Card / Passport / Voter ID",
    purpose: "Address and Indian citizenship verification for minimum 2 trustees",
    format: "Clear Scanned PDF / Images",
  },
  {
    document: "Registered Office Address Proof",
    purpose: "Jurisdictional evidence for local Sub-Registrar registration",
    format: "Electricity Bill or Water Bill (< 2 months old)",
  },
  {
    document: "No Objection Certificate (NOC)",
    purpose: "Consent from property owner allowing trust office operations",
    format: "Signed NOC with Rent Agreement/Ownership Deed",
  },
  {
    document: "Two Passport-size Photographs",
    purpose: "Biometric and Sub-Registrar ledger documentation records",
    format: "2 Recent Color Photos per Trustee",
  },
  {
    document: "Property Documents (if settled)",
    purpose: "Proof of title if immovable property is endowed to the trust corpus",
    format: "Sale Deed or Gift Deed Copy",
  },
  {
    document: "Two Independent Witnesses",
    purpose: "Witnesses present during physical deed execution before Sub-Registrar",
    format: "Valid ID Proof (Aadhaar/PAN) of 2 Witnesses",
  },
];

const TRUST_ITR7_TABLE = [
  {
    particular: "Applicable To",
    details: "Charitable Trusts, Religious Trusts, NGOs, and Institutions claiming tax exemption",
  },
  {
    particular: "Annual Due Date",
    details: "31st October (for audited trusts requiring Form 10B) / 31st July (non-audit trusts)",
  },
  {
    particular: "Mandatory Audit Requirement",
    details: "Form 10B / 10BB audit report mandatory by CA if gross receipts exceed ₹2.5 Lakhs",
  },
  {
    particular: "Statutory Form Used",
    details: "Form ITR-7 (Electronic E-filing on Income Tax Portal)",
  },
  {
    particular: "Income Tax Sections Covered",
    details: "Sections 11, 12, 12A, 12AA, 12AB, and 13 of the Income Tax Act, 1961",
  },
];

const TRUST_VS_SOCIETY_VS_SECTION8_TABLE = [
  {
    parameter: "Governing Law",
    trust: "Indian Trusts Act, 1882",
    society: "Societies Registration Act, 1860",
    section8: "Companies Act, 2013",
  },
  {
    parameter: "Minimum Members",
    trust: "2 Trustees",
    society: "7 Members",
    section8: "2 Directors / Shareholders",
  },
  {
    parameter: "Registration Authority",
    trust: "Sub-Registrar (Local Registration)",
    society: "Registrar of Societies (State)",
    section8: "Ministry of Corporate Affairs (MCA)",
  },
  {
    parameter: "Tax Exemption (12A & 80G)",
    trust: "Eligible for 12A & 80G",
    society: "Eligible for 12A & 80G",
    section8: "Eligible for 12A & 80G",
  },
  {
    parameter: "Compliance Level",
    trust: "Moderate",
    society: "Moderate",
    section8: "High (ROC & MCA Filings)",
  },
  {
    parameter: "Best Suited For",
    trust: "Charitable & Religious purposes, family asset protection",
    society: "Cultural, scientific, athletic, and local community activities",
    section8: "Large-scale institutional NGOs, corporate CSR funding & grants",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is trust?",
    a: "A trust is a legal arrangement where a trustee holds and manages assets to benefit one or more beneficiaries. As specified in the trust deed, the trustee is responsible for administering the trust solely for its defined objectives.",
  },
  {
    q: "What is Trust Registration?",
    a: "Trust registration is the process of legally establishing a trust entity by fulfilling the necessary formalities and complying with the Trust's Act of 1882 or relevant State Public Trust Acts. Registration recognizes the trust legally and ensures compliance with statutory provisions.",
  },
  {
    q: "Who can create trust in India?",
    a: "Any person competent to contract, including individuals, companies, and organizations, can create a trust in India. The person or entity creating the trust is known as the trustor or settlor.",
  },
  {
    q: "How many trustees are required to register a trust in India?",
    a: "A minimum of 2 trustees is required to register a trust in India. The law mandates that a trust must have at least two individuals who will act as trustees to manage and administer the trust's assets for the benefit of the beneficiaries.",
  },
  {
    q: "Can the author of the trust also be a trustee?",
    a: "In private trusts, the author/settlor transfers property to independent trustees. In public charitable trusts in India, the Settlor can often be appointed as the Managing Trustee or Founder Trustee along with independent co-trustees, provided there is no conflict with state laws.",
  },
  {
    q: "Are there any restrictions on the number of trustees for a trust?",
    a: "No, there is no statutory limitation on the maximum number of trustees for a trust. While at least two trustees are required to register a trust in India, there is no specified upper limit on the number of trustees.",
  },
  {
    q: "Are all trustees required to be residents of India?",
    a: "Yes, all trustees of an Indian trust are typically required to be residents of India. According to Indian law and practice, at least one trustee must be a resident of India to ensure proper local administration, bank operations, and statutory compliance.",
  },
  {
    q: "What are the documents required for trust registration in India?",
    a: "The documents generally required include: Trust Deed executed on stamp paper, PAN Card and Identity Proofs (Aadhaar/Passport) of Trustees, Address Proof of the registered office (utility bill < 2 months), Landlord NOC, and passport-size photographs.",
  },
  {
    q: "Is it necessary to have a physical office address for trust registration?",
    a: "Yes, it is essential to have a physical office address for trust registration in India. The physical office address serves as the official registered address of the trust for all Sub-Registrar jurisdiction, legal notices, and correspondence.",
  },
  {
    q: "What is the process of trust registration in India?",
    a: "Trust registration in India involves selecting a unique name, drafting a comprehensive trust deed, executing it on non-judicial stamp paper, presenting it with trustees and 2 witnesses before the Sub-Registrar, obtaining the certified deed, and applying for trust PAN and bank account.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can a trust operate in multiple states in India?",
    a: "Yes, a trust can operate in multiple states in India. Trusts are not restricted to operating within a specific state and can extend their activities across India, provided the registered Trust Deed explicitly permits nationwide operations under its jurisdiction clause.",
  },
  {
    q: "How long does it take to register a trust in India?",
    a: "Drafting the trust deed and preparing documentation takes 3 to 5 working days. The Sub-Registrar registration appointment and certified deed issuance typically take another 5 to 7 days, depending on the state registration office schedule.",
  },
  {
    q: "Is it mandatory to obtain a PAN card for a registered trust?",
    a: "Yes, a registered trust in India must obtain a separate PAN (Permanent Account Number) card to conduct financial activities, open a bank account, receive charitable contributions, apply for 12A/80G, and file annual tax returns.",
  },
  {
    q: "Can a trust engage in commercial activities?",
    a: "No, a charitable trust is primarily established for non-profit welfare or public causes. However, under Section 11(4A) of the Income Tax Act, business activities that are incidental to the attainment of the trust's charitable objectives are permitted if separate books of accounts are maintained.",
  },
  {
    q: "What are the tax benefits available to registered trusts in India?",
    a: "Registered trusts enjoy 100% income tax exemption on their surplus under Section 12A (12AB) and can provide tax deductions of 50% or 100% to their donors under Section 80G of the Income Tax Act.",
  },
  {
    q: "Can a trust be dissolved or revoked?",
    a: "A private revocable trust can be revoked by the settlor according to its deed terms. However, public charitable trusts are generally irrevocable and cannot be dissolved at will; their assets must be transferred to another trust with similar objectives upon court approval.",
  },
  {
    q: "Can the beneficiaries of trust be changed?",
    a: "In public charitable trusts, beneficiaries are the public at large within the specified welfare categories. In private trusts, the identity of named beneficiaries is set in the deed and can only be amended if the deed specifically empowers trustees or the settlor to alter beneficiary classes.",
  },
  {
    q: "Can a trust be converted into a private limited company?",
    a: "No, a trust cannot be directly converted into a private limited company in India. A trust and a company are two distinct legal entities with different legal frameworks, governance rules, and tax regimes.",
  },
  {
    q: "What are the reporting requirements for a registered trust in India?",
    a: "Registered trusts must maintain proper books of accounts, get their accounts audited by a CA in Form 10B/10BB if income exceeds ₹2.5 Lakhs, file annual ITR-7 by 31st October, and submit annual returns to the state Charity Commissioner if applicable.",
  },
  {
    q: "Can a foreign national create trust in India?",
    a: "A foreign national can create a trust in India subject to compliance with the Foreign Contribution Regulation Act (FCRA) and Foreign Exchange Management Act (FEMA). To receive foreign donations, the trust must subsequently obtain FCRA clearance from the MHA.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Section 8 Company Registration",
  "Society Registration",
  "12A and 80G Registration",
  "FCRA Registration",
  "CSR-1 Registration",
  "NGO Darpan Registration",
  "Private Limited Company",
  "One Person Company",
  "Limited Liability Partnership",
  "ITR-7 Return Filing",
  "Form 10B Audit Assistance",
  "Trust PAN & TAN Allotment",
];

const POPULAR_SEARCHES_TAGS = [
  "Trust Registration in India",
  "Online Trust Registration",
  "Charitable Trust Deed Drafting",
  "Private Trust Registration Online",
  "Indian Trusts Act 1882",
  "Trust Registration Process",
  "Documents Required for Trust Registration",
  "Trust Registration Fees",
  "Public Charitable Trust Formation",
  "Religious Trust Registration",
  "Trust PAN Card Online",
  "Trust TAN Registration",
  "Section 12A Exemption Form 10A",
  "Section 80G Certificate for Donors",
  "Trust vs Section 8 Company",
  "Trust vs Society Registration",
  "Sub Registrar Trust Deed Execution",
  "ITR-7 Return Filing for Trusts",
  "Form 10B Audit Report",
  "NGO Registration India",
  "Trust Bank Account Opening Resolution",
  "Trust Stamp Duty by State",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Trust Registration - Trust Deed",
    shortDesc:
      "Expert legal drafting of comprehensive public or private Trust Deed under Indian Trusts Act, 1882...",
    expandedDesc:
      "Includes customized charitable/religious objectives drafting, settler & trustee power clauses, beneficiary rights, property vesting terms, and Sub-Registrar stamp paper advisory.",
    price: "₹2,899",
    priceSub: "+ Sub-Registrar Stamp Duty & Registration Fees",
    features: [
      "Custom Legal Trust Deed Drafting by Advocates",
      "Charitable / Religious / Private Objectives Framing",
      "Trustee Appointment, Powers & Succession Clauses",
      "Stamp Paper Purchase Guidance & Notarization Advice",
      "Permanent Account Number (PAN) Card Application",
      "Zero-Balance Trust Current Bank Account Assistance",
      "Complete Checklist for Sub-Registrar Office Visit",
    ],
  },
  {
    name: "Trust Registration - Deed & ITR",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Deed drafting, Sub-Registrar registration liaison, PAN, TAN & 1st Year Trust ITR-7 filing...",
    expandedDesc:
      "Covers complete Trust Deed drafting, local Sub-Registrar registration support, PAN, TAN, NGO Darpan portal enrollment, and preparation of first annual financial statements & ITR-7 filing.",
    price: "₹10,899",
    priceSub: "+ Sub-Registrar Fees | Complete Legal Registration",
    features: [
      "Everything in Trust Deed Drafting Package",
      "Sub-Registrar Physical Execution Coordination",
      "Trust PAN & TAN Card Allotment",
      "NITI Aayog NGO Darpan Portal Registration",
      "Preparation of Trust Accounts & Balance Sheet",
      "Annual Income Tax Return (ITR-7) Filing for Trusts",
      "Dedicated Non-Profit Chartered Accountant Manager",
    ],
  },
  {
    name: "Deed, ITR, 12A & 80G Registration",
    shortDesc:
      "The comprehensive charitable trust suite: Deed, registration, 12A tax exemption & 80G donor deduction...",
    expandedDesc:
      "The gold standard for charitable organizations. Covers full registration, Section 12A registration for 100% tax exemption on trust income, Section 80G certificate for 50% donor tax deductions, and CSR-1 registration.",
    price: "₹26,899",
    priceSub: "+ Sub-Registrar Fees | Complete Donor Tax Shield",
    features: [
      "Complete Trust Deed & Sub-Registrar Registration",
      "Income Tax Section 12A Registration (Form 10A)",
      "Income Tax Section 80G Registration (Form 10A)",
      "CSR-1 Registration for Corporate Social Responsibility Funding",
      "NITI Aayog NGO Darpan Portal Onboarding",
      "Full 1st Year ITR-7 Preparation & Tax Optimization",
      "Dedicated Senior Non-Profit CA & Legal Advisory Team",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <FileText className="w-4 h-4" />,
    text: "Custom Trust Deed Drafted by Experienced Legal Counsel",
  },
  {
    icon: <Building className="w-4 h-4" />,
    text: "Local Sub-Registrar Office Execution & Registration Guidance",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "12A & 80G Income Tax Exemption Certificates for Donors",
  },
  {
    icon: <Award className="w-4 h-4" />,
    text: "NITI Aayog NGO Darpan & CSR-1 Registration for Grants",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Trust Registration →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  "Comprehensive Guide to Public Charitable Trust Registration in India",
  "How to Register a Trust Deed with the Sub-Registrar: Step-by-Step",
  "Section 12A and 80G Registration for Charitable & Religious Trusts",
  "Differences Between Trust, Society, and Section 8 Non-Profit Company",
  "NITI Aayog NGO Darpan Portal Registration for Government Grants",
  "Income Tax Rules for Trusts: Form 10B/10BB Audit & ITR-7 Deadlines",
];

function TrustGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Introduction */}
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-normal text-[#1F1646] mb-3">
                  Trust Registration Online in India
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                  Registering a trust in India provides a strong legal foundation for managing charitable, religious, or private objectives. Whether you aim to serve society or protect family assets, trust registration in India ensures transparency, legal recognition, and tax benefits under the Indian Trusts Act, 1882 and relevant state-specific statutes.
                </p>
              </div>

              {/* Section 2: What is a Trust and Why is it Registered in India? */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a Trust and Why is it Registered in India?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  A trust is a legal arrangement where one party (the settlor) transfers property or assets to another party (the trustee) for the benefit of a third party (the beneficiary). In India, trusts are primarily governed by the Indian Trusts Act, 1882 for private trusts, while public and charitable trusts are regulated by state-specific legislation.
                </p>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Registering a trust gives it a legal identity, enabling it to own property, enter into contracts, open bank accounts, and avail tax exemptions. Charitable trust registration is especially important for NGOs and non-profit organisations seeking government recognition and donor credibility.
                </p>

                {/* 3 Key Parties in a Trust */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px] font-normal text-slate-900 mb-6">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      1. The Settlor / Author
                    </strong>
                    The individual or corporate entity who establishes the trust and contributes the initial property or financial corpus.
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      2. The Trustees
                    </strong>
                    The trusted fiduciaries who hold legal title to trust assets and administer them solely for the trust&apos;s lawful objectives.
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      3. The Beneficiaries
                    </strong>
                    The target individuals, communities, or general public who receive scholarships, welfare aid, or asset distributions.
                  </div>
                </div>

                {/* Key Objectives */}
                <h3 className="text-[15px] font-medium text-slate-900 mb-2.5">
                  Key Objectives of Trust Registration
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12.5px] font-normal text-slate-900">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span className="group-hover:text-emerald-950 transition-colors">Legal recognition &amp; distinct identity for the trust entity</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span className="group-hover:text-emerald-950 transition-colors">Protection of trust assets and endowed properties</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span className="group-hover:text-emerald-950 transition-colors">Eligibility for income tax exemptions under Sections 12A &amp; 80G</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span className="group-hover:text-emerald-950 transition-colors">Enhanced credibility among donors, CSR committees, &amp; govt</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                    <span className="group-hover:text-emerald-950 transition-colors">Smooth perpetual succession and seamless management of family assets</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Types of Trusts in India Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Types of Trusts in India?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  India recognises several types of trusts based on their purpose, structure, and beneficiaries. Understanding the type of trust best suited to your objectives is the first step in the online trust registration process:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Type of Trust</th>
                        <th className="py-3 px-4 font-normal">Purpose &amp; Scope</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Governing By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_TYPES_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.type}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.governedBy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4: Characteristics of a Registered Trust */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Characteristics of Trust Registration in India?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  A registered trust in India carries several defining characteristics that distinguish it from other non-profit structures such as societies or Section 8 companies:
                </p>
                <div className="space-y-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Legal Entity:</strong> A registered trust has a distinct legal identity separate from its individual trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Trustee Obligations:</strong> Trustees are legally and fiduciarily bound to act solely in the best interest of the beneficiaries.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Asset Protection:</strong> Trust property is completely protected from the personal liabilities and debts of trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Irrevocability:</strong> Most charitable trusts, once formed, cannot be arbitrarily dissolved without statutory or court process.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Tax Exemption Eligibility:</strong> Registered trusts can apply for 12A and 80G registration for 100% income tax exemptions.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Perpetual Succession:</strong> The trust continues indefinitely regardless of retirement, addition, or demise of trustees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Transparency:</strong> Regular annual compliance and statutory audit filings in Form 10B/10BB guarantee public trust.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: What is a Trust Deed and What Should It Contain? */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a Trust Deed and Why is it Important?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  A trust deed is the foundational legal charter that defines the structure, purpose, powers, and rules of the trust. It is executed on non-judicial stamp paper and signed by the settlor and trustees in the presence of two independent witnesses. Without a registered trust deed, formal legal recognition and tax exemptions are impossible.
                </p>

                <h3 className="text-[15px] font-medium text-slate-900 mb-3">
                  What Should a Trust Deed Contain?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-900">
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">1. Name and Registered Address</strong>
                    Clear, distinct trust name and physical jurisdictional address.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">2. Settlor &amp; Trustee Details</strong>
                    Complete names, occupations, KYC, and addresses of all appointed trustees.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">3. Objectives &amp; Charitable Scope</strong>
                    Unambiguous clauses detailing educational, relief, or religious purposes.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">4. Corpus &amp; Trust Property</strong>
                    Initial settlement amount and description of movable/immovable assets.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">5. Trustee Rights &amp; Administrative Powers</strong>
                    Borrowing powers, property management, and bank operation authorisations.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">6. Trustee Appointment &amp; Removal</strong>
                    Clear rules for quorum of meetings, resignation, and election of new trustees.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">7. Succession &amp; Dissolution Rules</strong>
                    Perpetual succession clauses and asset disposal rules upon winding up.
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-0.5">8. Beneficiary Entitlements</strong>
                    Categories of recipients eligible for welfare grants, relief, or aid.
                  </div>
                </div>
              </div>

              {/* Section 6: Documents Required Table */}
              <div id="documents-required" className="border-t border-slate-100 pt-6 scroll-mt-24">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Documents Required for Trust Registration?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Preparing the correct documentation is essential for smooth Sub-Registrar execution. The following authenticated documents are required:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Document Required</th>
                        <th className="py-3 px-4 font-normal">Purpose &amp; Significance</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_DOCUMENTS_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.document}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.format}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 7: Step-by-Step Procedure */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Step-by-Step Procedure for Trust Registration in India?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  The trust registration procedure in India involves several critical steps to establish full legal recognition:
                </p>

                <div className="space-y-3.5">
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Choose the Type of Trust &amp; Settle Name
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Decide whether to establish a public charitable, religious, or private trust. Ensure the proposed name complies with the Emblems and Names Act.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Draft the Comprehensive Trust Deed
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Prepare the formal constitutional deed with aims, trustee powers, voting quorum, meeting guidelines, and perpetual succession clauses.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Select and Appoint Trustees (Minimum 2)
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Appoint at least two adult trustees of sound mind with valid Indian PAN and Aadhaar records to administer trust operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Execute Deed on Non-Judicial Stamp Paper
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Print the finalized trust deed on non-judicial stamp paper based on the prescribed stamp duty rate of the registered office state.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Visit the Jurisdictional Sub-Registrar Office
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        The Settlor, trustees, and two independent witnesses appear before the local Sub-Registrar for deed execution and biometric verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Obtain Certified Trust Registration Deed
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Once validated and stamped, the Sub-Registrar issues the official registered copy bearing volume and book registration numbers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      7
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Apply for Trust PAN &amp; TAN Card
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Apply online in Form 49A with the registered deed to secure the trust&apos;s distinct Permanent Account Number (PAN).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      8
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Open Dedicated Trust Bank Current Account
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        Open a bank current account in the trust name using the certified deed, PAN, and trustee board authorization resolution.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00A86B] font-medium text-xs flex items-center justify-center shrink-0 mt-0.5">
                      9
                    </span>
                    <div>
                      <h4 className="text-[13.5px] font-medium text-slate-800">
                        Apply for 12A &amp; 80G Tax Exemption (Form 10A)
                      </h4>
                      <p className="text-[12px] font-normal text-slate-900 leading-relaxed">
                        File electronic application Form 10A on the Income Tax Portal to obtain 12A tax exemption and 80G donor deduction status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8: How to Apply for PAN Card for a Trust */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How to Apply for PAN Card for a Registered Trust?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  After obtaining the registered trust deed, applying for a PAN card is a mandatory step. A dedicated PAN is required for opening a bank account, filing annual income tax returns, and issuing donor receipts:
                </p>
                <div className="bg-[#FAF9F7] p-4 rounded-xl border border-slate-200/80">
                  <h4 className="text-[13.5px] font-medium text-slate-800 mb-2">
                    Documents Required for Trust PAN Card:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] font-normal text-slate-900">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>Certified Copy of Registered Trust Deed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>Sub-Registrar Registration Endorsement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>Registered Office Address Proof</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00B074]" />
                      <span>KYC of Authorized Managing Trustee</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 9: ITR-7 Return Filing for Trusts */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is ITR-7 Return Filing for Trusts?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  All registered trusts in India that claim income tax exemption under Sections 11, 12, 12A, or 12AA are required to file their annual income tax return using Form ITR-7:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Particulars</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Compliance Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_ITR7_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.particular}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 10: 12A & 80G Registration Guidance */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How to Get 12A &amp; 80G Registration for a Trust?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Section 12A (now 12AB) and Section 80G together form the backbone of a non-profit trust&apos;s financial framework in India:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#00A86B] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <h4 className="text-[14px] font-medium text-slate-900 group-hover:text-emerald-800 transition-colors mb-1.5 flex items-center gap-1.5">
                      <BadgePercent className="w-4 h-4 text-[#00A86B]" />
                      Section 12A (100% Tax Relief)
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Grants complete income tax exemption on the trust&apos;s annual surplus income. Filed electronically via Form 10A on the Income Tax Portal.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#00A86B] hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <h4 className="text-[14px] font-medium text-slate-900 group-hover:text-emerald-800 transition-colors mb-1.5 flex items-center gap-1.5">
                      <Receipt className="w-4 h-4 text-[#00A86B]" />
                      Section 80G (Donor Tax Deduction)
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Empowers donors (individuals, corporates, CSR committees) to claim 50% or 100% deduction on their donations, boosting fundraising capacity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11: Annual Compliance Checklist */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What are the Compliance Requirements for Registered Trusts?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  To safeguard tax-exempt status and avoid penalties, registered trusts must maintain the following ongoing compliances:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-900">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 group-hover:text-emerald-800 transition-colors block">ITR-7 Return Filing:</strong>
                      File annual returns with the Income Tax Department by 31st October.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 group-hover:text-emerald-800 transition-colors block">Form 10B / 10BB Audit:</strong>
                      Mandatory CA audit report if total annual receipts exceed ₹2.5 Lakhs.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 group-hover:text-emerald-800 transition-colors block">12A &amp; 80G Timely Renewal:</strong>
                      Ensure timely 5-year re-registration under Form 10AB.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 group-hover:text-emerald-800 transition-colors block">Books of Accounts Maintenance:</strong>
                      Maintain ledgers, vouchers, and receipt books systematically.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 group-hover:text-emerald-800 transition-colors block">TDS &amp; GST Compliance:</strong>
                      Deduct and deposit TDS on professional payments where applicable.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-[#00A86B] hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                    <FileCheck className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-slate-800 group-hover:text-emerald-800 transition-colors block">FCRA Compliance:</strong>
                      Separate bank account and quarterly reporting if foreign funds are accepted.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 12: Trust vs Society vs Section 8 Company Comparison */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Difference Between Trust, Society and Section 8 Company?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Choosing the right non-profit structure is critical. Here is a direct comparison across essential legal parameters:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-normal">Parameter</th>
                        <th className="py-2.5 px-3 font-normal text-[#00A86B]">Trust</th>
                        <th className="py-2.5 px-3 font-normal">Society</th>
                        <th className="py-2.5 px-3 font-normal">Section 8 Company</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {TRUST_VS_SOCIETY_VS_SECTION8_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-2.5 px-3 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.trust}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.society}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.section8}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 13: Cancellation of Trust Registration */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is the Cancellation of Trust Registration?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Trust registration and 12A/80G status can be revoked under Section 12AB if the trust violates statutory non-profit criteria. Common causes include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-900">
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 hover:bg-white hover:border-red-400 hover:shadow-sm hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-red-950 transition-colors">Non-filing of annual ITR-7 returns for consecutive fiscal years</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 hover:bg-white hover:border-red-400 hover:shadow-sm hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-red-950 transition-colors">Misuse of trust funds or property for personal trustee enrichment</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 hover:bg-white hover:border-red-400 hover:shadow-sm hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-red-950 transition-colors">Deviation from stated charitable objectives in the registered deed</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 hover:bg-white hover:border-red-400 hover:shadow-sm hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-red-950 transition-colors">Failure to renew 12A or 80G registrations under Form 10AB</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 hover:bg-white hover:border-red-400 hover:shadow-sm hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-red-950 transition-colors">Violation of FCRA provisions regarding foreign funding</span>
                  </div>
                  <div className="p-3 rounded-lg border border-red-100 bg-red-50/40 hover:bg-white hover:border-red-400 hover:shadow-sm hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="group-hover:text-red-950 transition-colors">Court injunction or dissolution order by charity commissioner</span>
                  </div>
                </div>
              </div>

              {/* Section 14: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Trust Registration Services?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Expert Legal Drafting Team
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Custom deeds crafted by seasoned legal draftsmen ensuring complete compliance with the Indian Trusts Act and Income Tax provisions.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      12A &amp; 80G Guaranteed Support
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Complete filing on the Income Tax Portal via Form 10A / 10AB to secure 100% tax exemption and donor deduction eligibility.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Local Sub-Registrar Coordination
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Clear guidance on state stamp duty, appointment scheduling, and document execution at your designated jurisdictional office.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Annual Compliance &amp; ITR-7
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Ongoing annual accounting, Form 10B audit coordination, and annual ITR-7 filing support to maintain active compliance year after year.
                    </p>
                  </div>
                </div>
              </div>
    </>
  );
}

export default function TrustRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="India's Oldest & Most Flexible Non-Profit Vehicle"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Trust Registration
          </span>{" "}
          in India
        </>
      }
      heroSubtitle="Create an enduring charitable, religious, or private trust for public welfare, healthcare, education, or family asset protection. Complete deed drafting, Sub-Registrar registration, PAN, TAN, and 12A/80G tax exemptions."
      formTitle="Start Your Trust Registration"
      formSubtitle="Enter your details below to consult with our specialized trust deed drafting and non-profit advisory team."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end legal support from deed drafting to 12A/80G registration."
      breadcrumbCurrent="Trust Registration"
      guideContent={<TrustGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about registering a Trust in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
