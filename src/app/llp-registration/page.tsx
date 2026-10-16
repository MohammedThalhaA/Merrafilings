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

const LLP_MIN_REQUIREMENTS_TABLE = [
  {
    requirement: "Minimum Number of Partners",
    criteria: "Minimum 2 partners required (no maximum statutory limit)",
  },
  {
    requirement: "Designated Partners",
    criteria: "Minimum 2 designated partners (must be individuals, at least 1 must be an Indian resident)",
  },
  {
    requirement: "Identification Number",
    criteria: "DPIN (Designated Partner Identification Number) or DIN for all designated partners",
  },
  {
    requirement: "Digital Signatures",
    criteria: "Class 3 DSC for all proposed designated partners to sign MCA e-filings",
  },
  {
    requirement: "Minimum Capital Contribution",
    criteria: "No minimum capital requirement; can begin with any nominal amount (e.g. ₹1,000)",
  },
  {
    requirement: "Registered Business Address",
    criteria: "Commercial or residential physical address anywhere in India with utility bill & NOC",
  },
  {
    requirement: "Constitutional Charter",
    criteria: "Executed LLP Agreement on state judicial stamp paper filed within 30 days of incorporation",
  },
];

const LLP_COMPARISON_TABLE = [
  {
    parameter: "Governing Statute",
    llp: "LLP Act, 2008 (Ministry of Corporate Affairs)",
    pvtLtd: "Companies Act, 2013 (MCA)",
    partnership: "Indian Partnership Act, 1932 (State Registrar)",
  },
  {
    parameter: "Legal Identity",
    llp: "Separate legal entity distinct from partners",
    pvtLtd: "Separate legal entity distinct from directors",
    partnership: "No separate identity; partners are personally liable",
  },
  {
    parameter: "Liability of Partners/Members",
    llp: "Limited to agreed capital contribution",
    pvtLtd: "Limited to face value of unpaid shares",
    partnership: "Unlimited; personal assets can be attached",
  },
  {
    parameter: "Minimum / Max Members",
    llp: "Minimum 2, No maximum limit",
    pvtLtd: "Minimum 2, Maximum 200",
    partnership: "Minimum 2, Maximum 50",
  },
  {
    parameter: "Mandatory Audit Requirement",
    llp: "Exempt if turnover < ₹40L & capital < ₹25L",
    pvtLtd: "Mandatory from day 1 regardless of revenue",
    partnership: "Only if tax audit limits are crossed",
  },
  {
    parameter: "Annual Filings & Overhead",
    llp: "Form 11 & Form 8 (Low compliance cost)",
    pvtLtd: "AOC-4, MGT-7, Board meetings (Moderate to high)",
    partnership: "Income tax return only (Minimal)",
  },
  {
    parameter: "Foreign Investment (FDI)",
    llp: "100% permitted under automatic FDI route",
    pvtLtd: "Permitted under automatic & approval routes",
    partnership: "Prior RBI / Government approval required",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is a Limited Liability Partnership (LLP)?",
    a: "An LLP is an incorporated corporate body combining the flexibility of an ordinary partnership firm with the limited liability protections of a private limited company. Formed under the LLP Act 2008, it is a separate legal entity distinct from its partners, meaning partners are not personally liable for the debts or wrongful acts of other partners.",
  },
  {
    q: "How many partners are required to register an LLP?",
    a: "A minimum of two partners are required to form an LLP. There is no statutory upper limit on the maximum number of partners. At least two partners must be designated partners, and at least one designated partner must be an Indian resident (residing in India for not less than 120 days during the financial year).",
  },
  {
    q: "Is there any minimum capital requirement for starting an LLP?",
    a: "No! There is no mandatory minimum capital requirement to incorporate an LLP. Partners can commence operations with any nominal contribution, such as ₹1,000 or ₹10,000. Capital can be contributed in monetary form or through tangible/intangible assets.",
  },
  {
    q: "Is a statutory audit mandatory for an LLP in India?",
    a: "No! Unlike Private Limited Companies which require statutory audits from day one, an LLP is legally exempt from audit if its annual turnover does not exceed ₹40 Lakhs or its partner capital contribution does not exceed ₹25 Lakhs. This significantly reduces ongoing accounting and compliance overhead.",
  },
  {
    q: "What is an LLP Agreement and why must it be filed within 30 days?",
    a: "The LLP Agreement is the foundational constitutional charter defining the rights, duties, capital contributions, profit-sharing ratios, and managerial responsibilities of partners. Under Section 23 of the LLP Act, this agreement must be executed on judicial stamp paper and filed with the MCA in Form 3 within 30 days of incorporation.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is DPIN and is it mandatory for all partners?",
    a: "DPIN stands for Designated Partner Identification Number. It is a unique 8-digit identification number allotted by the Ministry of Corporate Affairs (MCA). It is mandatory for all designated partners in an LLP. If a partner already possesses a DIN (Director Identification Number), the same number functions as DPIN.",
  },
  {
    q: "Can NRIs and foreign nationals become partners in an Indian LLP?",
    a: "Yes. Foreign nationals and NRIs can become partners and designated partners in an LLP. Under the automatic FDI route, 100% Foreign Direct Investment (FDI) is permitted in LLPs operating in sectors where 100% FDI is allowed without performance-linked conditions. At least one designated partner must be a resident of India.",
  },
  {
    q: "What are the mandatory annual filings for an LLP?",
    a: "An LLP must complete two primary statutory MCA filings every year: (1) Form 11 (Annual Return) within 60 days of fiscal year end (due on or before May 30th), and (2) Form 8 (Statement of Account & Solvency) within 30 days of the end of 6 months of fiscal year end (due on or before October 30th). Additionally, Income Tax Return Form ITR-5 must be filed annually.",
  },
  {
    q: "Which is better for startups: LLP or Private Limited Company?",
    a: "An LLP is ideal for bootstrapping founders, professional service practices, consultancies, and family businesses that seek limited liability, lower compliance burdens, audit exemption (up to ₹40L turnover), and no dividend distribution tax. A Private Limited Company is preferable if you plan to raise institutional VC/seed equity funding or issue ESOPs.",
  },
  {
    q: "Can an existing partnership firm be converted into an LLP?",
    a: "Yes. Under Section 55 and the Second Schedule of the LLP Act 2008, an existing general partnership firm registered under the Indian Partnership Act 1932 can be converted into an LLP seamlessly without attracting capital gains tax, provided all partners transition in identical shareholding proportions.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "Can a salaried individual become a partner in an LLP?",
    a: "Yes, an employed individual can become a partner in an LLP, provided their existing employment contract or employer's HR policies do not prohibit holding directorships or commercial partnerships in external businesses.",
  },
  {
    q: "What is the tax rate applicable to an LLP in India?",
    a: "An LLP is taxed as a separate legal firm at a flat corporate tax rate of 30% plus surcharge and health & education cess. Notably, profits distributed to partners after paying corporate tax are completely tax-free in the hands of the individual partners.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Can a residential property be used as the registered office for an LLP?",
    a: "Yes, a residential property owned or rented by any partner can be used as the registered office address. You only need to provide a recent electricity or gas bill, along with a No Objection Certificate (NOC) from the property owner.",
  },
  {
    q: "What happens if the LLP Agreement is not filed within 30 days?",
    a: "Delay in filing Form 3 attracts a statutory MCA late fee of ₹100 per day until rectified. Merrafilings ensures your LLP Agreement is drafted, executed on judicial stamp paper, and filed with the MCA well within the prescribed 30-day window.",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "One Person Company",
  "Partnership Firm",
  "Sole Proprietorship",
  "Section 8 Company Registration",
  "Trust Registration",
  "LLP Agreement Drafting Form 3",
  "Form 11 Annual Return Filing",
  "Form 8 Statement of Accounts",
  "GST Registration for LLP",
  "Convert Partnership to LLP",
  "LLP Winding Up & Strike Off",
];

const POPULAR_SEARCHES_TAGS = [
  "LLP Registration Online India",
  "Limited Liability Partnership Formation",
  "LLP Name Approval RUN MCA",
  "FiLLiP Form Incorporation",
  "DPIN Allotment Online",
  "LLP vs Private Limited Company",
  "LLP vs Partnership Firm",
  "LLP Agreement Judicial Stamp Paper",
  "Audit Exemption for LLP",
  "Designated Partner Resident India",
  "Class 3 DSC for Designated Partners",
  "Form 11 Annual Filing Due Date",
  "Form 8 Solvency Statement",
  "Flat 30% Corporate Tax for LLP",
  "PAN and TAN for LLP",
  "LLP Bank Current Account Opening",
  "FDI in LLP Automatic Route",
  "LLP Stamp Duty by State",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "LLP - Incorporation",
    shortDesc:
      "Name reservation via RUN-LLP, 2 Partner DPIN allotments, Class-3 DSC, and FiLLiP filing...",
    expandedDesc:
      "Includes name approval via MCA RUN-LLP, 2 Designated Partner Identification Numbers (DPIN), 2 Digital Signatures, FiLLiP e-form filing, and Certificate of Incorporation (COI) issuance.",
    price: "₹2,999",
    priceSub: "+ MCA Government Fees & Stamp Duty",
    features: [
      "LLP Name Approval via RUN-LLP",
      "2 Digital Signature Certificates (DSC Class 3)",
      "2 Designated Partner Identification Numbers (DPIN)",
      "FiLLiP Incorporation Form Preparation & Submission",
      "Certificate of Incorporation (COI) Issuance",
      "LLP PAN & TAN Card Allotment",
      "Corporate Zero-Balance Bank Account Opening",
    ],
  },
  {
    name: "LLP - Incorporation + Agreement",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Incorporation plus professional LLP Agreement drafting and Form 3 MCA ROC filing within 30 days...",
    expandedDesc:
      "Covers complete incorporation plus customized legal drafting of the LLP Agreement tailored to your profit sharing and capital ratios, state stamp duty guidance, and statutory Form 3 filing.",
    price: "₹5,999",
    priceSub: "+ State Stamp Duty | Complete Legal Setup",
    features: [
      "Complete LLP Incorporation Package",
      "Custom Legal Drafting of LLP Agreement",
      "Statutory Form 3 Preparation & ROC Filing",
      "Stamp Paper Purchase Guidance & State Compliance",
      "Partnership Capital Contribution Recording",
      "First Meeting of Designated Partners Minutes",
      "Dedicated Corporate Secretary / CA Manager",
    ],
  },
  {
    name: "LLP - Complete Compliance Suite",
    shortDesc:
      "Incorporation, LLP Agreement, GST Registration & 1st Year Annual ROC Compliance (Form 8 & Form 11)...",
    expandedDesc:
      "All-inclusive compliance shield. Covers full incorporation, Form 3 filing, GST registration, Statement of Account & Solvency (Form 8), and Annual Return (Form 11) for zero penalty assurance.",
    price: "₹12,499",
    priceSub: "+ Stamp Duty | Full 1-Year Compliance Shield",
    features: [
      "Complete LLP Incorporation + Form 3 Filing",
      "GST Registration Application & Certificate",
      "Annual ROC Statement of Accounts & Solvency (Form 8)",
      "Annual ROC Return of LLP (Form 11)",
      "DIR-3 KYC Filing for Designated Partners",
      "Income Tax Return (ITR-5) for Partnership Firm",
      "Dedicated Corporate Account Manager & CA Support",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Scale className="w-4 h-4" />,
    text: "Limited Liability Protection with Low Compliance Burden",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "2 DPINs & Class-3 Digital Signatures Included",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    text: "Custom LLP Agreement Drafting & Form 3 ROC Filing",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Certificate of Incorporation, PAN & TAN",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for LLP Registration →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  {
    title: "Understanding Key Documents for LLP Registration",
    href: "/llp-registration/key-documents-for-llp-registration-guide",
  },
  {
    title: "A Comprehensive Guide to LLP Registration: Step-by-Step",
    href: "/llp-registration/llp-registration-guide-comprehensive-steps",
  },
  {
    title: "How to Register an LLP: A Step-by-Step Guide",
    href: "/llp-registration/register-llp-comprehensive-stepbystep-guide",
  },
  {
    title: "Understanding GST Return Filings: A Comprehensive Guide",
    href: "/llp-registration/understand-gst-return-filings-a-comprehensive-guide",
  },
];

function LlpGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
              <div>
                <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                  Limited Liability Partnership (LLP) Registration Online in India
                </h1>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-3">
                  A <strong className="font-medium text-slate-800">Limited Liability Partnership (LLP)</strong> is one of the most preferred corporate business vehicles in India for service providers, consultants, software agencies, and co-founded ventures. Introduced under the <strong className="font-medium text-slate-800">Limited Liability Partnership Act, 2008</strong>, an LLP combines the operational flexibility of a partnership with the limited liability protections of a private limited company.
                </p>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                  Unlike traditional partnership firms, an LLP operates as a <strong className="font-medium text-slate-800">separate legal entity</strong>. The personal wealth and private assets of individual partners remain shielded from business liabilities, debts, or misdeeds of other partners. With <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a>, you get transparent, end-to-end guidance from MCA name approval to stamp paper agreement execution.
                </p>
              </div>

              {/* Section 2: Key Advantages of Choosing an LLP */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Key Advantages of Registering an LLP in India
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Founders select the LLP structure over other legal entities due to distinctive advantages in tax, governance, and liability protection:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-900">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Limited Liability Protection
                    </strong>
                    Partners are only liable to the extent of their agreed capital contribution. Personal assets can never be attached for business debts.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      No Minimum Capital Required
                    </strong>
                    Incorporate your LLP with zero mandatory paid-up capital. You can begin with ₹1,000 or any nominal capital contribution.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      Audit Exemption up to ₹40 Lakhs
                    </strong>
                    LLPs are completely exempt from mandatory statutory audits until annual turnover exceeds ₹40 Lakhs or capital exceeds ₹25 Lakhs.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/70">
                    <strong className="font-medium text-slate-900 block mb-1">
                      No Dividend Distribution Tax (DDT)
                    </strong>
                    Profits distributed to partners are entirely tax-free in the hands of the partners once the LLP pays its corporate tax.
                  </div>
                </div>
              </div>

              {/* Section 3: Minimum Requirements Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Minimum Statutory Requirements for LLP Incorporation
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Before applying for incorporation on the Ministry of Corporate Affairs (MCA) portal, ensure your founding team satisfies these legal conditions:
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
                      {LLP_MIN_REQUIREMENTS_TABLE.map((row, idx) => (
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
                  Eligibility Criteria for Partners &amp; Designated Partners
                </h2>
                <div className="space-y-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Age &amp; Capacity:</strong> Any natural person aged 18 years or above with capacity to contract can become a partner. Corporate bodies can also become partners through designated nominees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Designated Partner Residency:</strong> At least one designated partner must be an Indian resident, having resided in India for not less than 120 days during the financial year.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">DPIN &amp; DSC:</strong> All designated partners must hold a valid Designated Partner Identification Number (DPIN/DIN) and Class-3 Digital Signature Certificate.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">NRIs &amp; Foreign Nationals:</strong> 100% foreign direct investment (FDI) is permitted in LLPs under the automatic route for sectors where 100% FDI is allowed without conditions.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Documents Required */}
              <div id="documents-section" className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for LLP Registration in India
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  To ensure uninterrupted filing on the MCA portal, have clear scanned copies of these documents ready:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* For Partners */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#6B4BFF]" />
                      <span>For All Partners &amp; Designated Partners</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Self-attested PAN Card (Passport for foreign citizens)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Identity Proof: Aadhaar Card, Passport, or Voter ID</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Address Proof: Bank statement or utility bill (&lt; 2 months old)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Recent passport size photograph</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Registered Office */}
                  <div className="p-4 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/60">
                    <h3 className="font-medium text-slate-800 text-[13.5px] mb-2.5 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#00A86B]" />
                      <span>For Registered Office in India</span>
                    </h3>
                    <ul className="space-y-2 text-[12.5px] font-normal text-slate-900">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Electricity, water, or gas bill (&lt; 2 months old)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>No Objection Certificate (NOC) signed by property owner</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Rent / Lease agreement (if rented property)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B074] shrink-0" />
                        <span>Residential premises are completely acceptable</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6: Step-by-Step Incorporation Process */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step LLP Incorporation Process
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-5">
                  At Merrafilings, we handle the entire lifecycle from preliminary document preparation to post-incorporation deed filings:
                </p>

                <div className="space-y-3.5">
                  {[
                    {
                      step: "Step 1",
                      title: "Digital Signature & DPIN Allotment",
                      desc: "Class-3 Digital Signature Certificates (DSC) are generated for the proposed designated partners to enable legal signing on the MCA portal.",
                    },
                    {
                      step: "Step 2",
                      title: "LLP Name Reservation (RUN-LLP)",
                      desc: "We submit two distinct name options reflecting your business objectives on the MCA RUN-LLP portal for official Central Registration Centre (CRC) approval.",
                    },
                    {
                      step: "Step 3",
                      title: "FiLLiP Incorporation Filing",
                      desc: "Upon name approval, the unified Form FiLLiP is submitted alongside subscriber sheets, registered office proofs, and consent forms for Certificate of Incorporation issuance.",
                    },
                    {
                      step: "Step 4",
                      title: "Drafting & Filing Form 3 LLP Agreement",
                      desc: "Within 30 days of incorporation, your customized LLP Agreement is printed on judicial stamp paper, notarised, signed, and filed with ROC in Form 3.",
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

              {/* Section 7: Comparison Table - LLP vs Pvt Ltd vs Partnership */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Comparison: LLP vs. Private Limited vs. General Partnership
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Select the entity structure that corresponds accurately to your fundraising goals, compliance capability, and risk appetite:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Parameter</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Limited Liability Partnership</th>
                        <th className="py-3 px-4 font-normal">Private Limited Company</th>
                        <th className="py-3 px-4 font-normal">Partnership Firm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {LLP_COMPARISON_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.parameter}
                          </td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.llp}</td>
                          <td className="py-3 px-4 text-slate-600">{row.pvtLtd}</td>
                          <td className="py-3 px-4 text-slate-600">{row.partnership}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 8: Mandatory Annual Compliances */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Mandatory Compliances After LLP Registration
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  LLPs enjoy straightforward compliances compared to private companies, but statutory deadlines must be honoured to avoid late penalties:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Statutory Compliance</th>
                        <th className="py-3 px-4 font-normal">Form / Filing</th>
                        <th className="py-3 px-4 font-normal">Prescribed Due Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          LLP Agreement Execution
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form 3</td>
                        <td className="py-3 px-4 text-slate-600">Within 30 days of incorporation</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Annual Return of LLP
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form 11</td>
                        <td className="py-3 px-4 text-slate-600">On or before 30th May every year</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Statement of Account &amp; Solvency
                        </td>
                        <td className="py-3 px-4 text-slate-600">Form 8</td>
                        <td className="py-3 px-4 text-slate-600">On or before 30th October every year</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          Income Tax Return Filing
                        </td>
                        <td className="py-3 px-4 text-slate-600">ITR-5</td>
                        <td className="py-3 px-4 text-slate-600">31st July (non-audit) or 31st October (audit)</td>
                      </tr>
                      <tr className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default">
                        <td className="relative py-3 px-4 font-normal text-slate-800">
                          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                          DIR-3 KYC for Designated Partners
                        </td>
                        <td className="py-3 px-4 text-slate-600">DIR-3 KYC / Web KYC</td>
                        <td className="py-3 px-4 text-slate-600">On or before 30th September annually</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for Your LLP Registration?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Merrafilings is India&apos;s premier corporate compliance platform, trusted by over 2 Lakh businesses nationwide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Dedicated CA, CS &amp; Corporate Legal Advisor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Transparent Pricing with zero hidden overheads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>Fast Turnaround: Registration in 7–10 working days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00A86B] font-bold">✓</span>
                    <span>100% Online Paperless Process across all 28 states</span>
                  </div>
                </div>
              </div>

              {/* Related Regulatory Guides Cards */}
              <div className="border-t border-slate-100 pt-7 mt-6">
                <div className="mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>In-Depth Statutory Handbooks</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-normal text-[#1F1646]">
                    Official LLP Knowledge &amp; Registration Guides
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-700 mt-1 leading-relaxed">
                    Step-by-step statutory roadmaps, document checklists, and compliance guides curated by practicing Chartered Accountants and Company Secretaries.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RELATED_GUIDES.map((guide, idx) => (
                    <Link
                      key={idx}
                      href={guide.href}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 font-bold text-xs border border-emerald-200/70 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          0{idx + 1}
                        </div>
                        <h4 className="text-[14px] sm:text-[14.5px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors leading-snug">
                          {guide.title}
                        </h4>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
    </>
  );
}

export default function LlpRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Flexible Partnership with Limited Liability"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Limited Liability Partnership
          </span>{" "}
          Registration in India
        </>
      }
      heroSubtitle="Enjoy the dual advantage of limited liability protection and operational partnership flexibility. Online MCA filing, LLP agreement drafting, PAN, TAN & corporate bank account."
      formTitle="Start Your LLP in India"
      formSubtitle="Enter your details below to get immediate assistance from an MCA incorporation professional."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end corporate support from name reservation to incorporation certificate."
      breadcrumbCurrent="LLP Registration"
      guideContent={<LlpGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Common questions about registering a Limited Liability Partnership (LLP) in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
