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

import Link from "next/link";

const OPC_DOCUMENTS_TABLE = [
  {
    document: "PAN Card (Director & Nominee)",
    purpose: "Mandatory identity & taxation verification",
    format: "Self-attested Digital Copy",
  },
  {
    document: "Aadhaar Card / Passport / Voter ID",
    purpose: "Residential and nationality proof",
    format: "Clear Color Scan (Self-attested)",
  },
  {
    document: "Bank Statement / Electricity Bill",
    purpose: "Personal address verification (must be under 2 months old)",
    format: "Latest 2 Months Statement / Utility Bill",
  },
  {
    document: "Registered Office Address Proof",
    purpose: "Proof of principal place of business operations",
    format: "Electricity Bill, Gas Bill or Water Bill (< 2 months)",
  },
  {
    document: "NOC from Property Owner",
    purpose: "Written authorization to use the property for OPC office",
    format: "Signed NOC with ownership document/rent deed",
  },
  {
    document: "Form INC-3 (Nominee Consent)",
    purpose: "Written legal consent of the nominee to assume directorship",
    format: "Signed Form INC-3 with nominee ID & address proof",
  },
  {
    document: "MOA & AOA (e-MOA & e-AOA)",
    purpose: "Charter governing company objectives and internal management",
    format: "MCA SPICe+ INC-33 & INC-34 digitally signed",
  },
];

const OPC_COST_BREAKDOWN_TABLE = [
  {
    component: "SPICe+ Part A (Name Approval)",
    cost: "₹1,000",
    remarks: "MCA filing charges for 2 name choices via RUN portal",
  },
  {
    component: "MCA Govt Incorporation Fee",
    cost: "₹0",
    remarks: "Waived by MCA for capital up to ₹15 Lakhs under Ease of Doing Business",
  },
  {
    component: "State Stamp Duty (MOA & AOA)",
    cost: "₹500 – ₹2,500",
    remarks: "Varies state-wise depending on registered office location",
  },
  {
    component: "Class-3 DSC (Director & Nominee)",
    cost: "₹1,500 – ₹2,500",
    remarks: "Digital Signature Certificate with 2-year validity & e-Token",
  },
  {
    component: "PAN, TAN & AGILE-PRO-S",
    cost: "₹130",
    remarks: "Integrated allotment of PAN, TAN, EPFO, ESIC & Profession Tax",
  },
  {
    component: "Professional Legal Filing",
    cost: "₹2,899",
    remarks: "End-to-end documentation, filing & ROC follow-up by Merrafilings",
  },
];

const OPC_TIMELINE_TABLE = [
  {
    stage: "1. Name Availability & Reservation",
    time: "1 – 2 Days",
    description: "Online name search and MCA approval via SPICe+ Part A / RUN",
  },
  {
    stage: "2. DSC Procurement",
    time: "1 Day",
    description: "Class-3 Digital Signature Certificate issuance via video KYC",
  },
  {
    stage: "3. Drafting MOA, AOA & Nominee INC-3",
    time: "1 – 2 Days",
    description: "Drafting e-MOA (INC-33), e-AOA (INC-34), and nominee declarations",
  },
  {
    stage: "4. SPICe+ Part B & AGILE-PRO-S Submission",
    time: "1 Day",
    description: "Uploading digital forms and statutory declarations on MCA V3 portal",
  },
  {
    stage: "5. Central Registration Centre (CRC) Review",
    time: "2 – 4 Days",
    description: "Scrutiny and verification of documents by MCA Registrar",
  },
  {
    stage: "6. Incorporation Certificate & PAN/TAN",
    time: "1 Day",
    description: "Instant issuance of Certificate of Incorporation with CIN, PAN & TAN",
  },
  {
    stage: "Total Estimated Turnaround Time",
    time: "7 – 10 Working Days",
    description: "Complete legal incorporation from start to certificate download",
  },
];

const OPC_ANNUAL_COMPLIANCE_TABLE = [
  {
    compliance: "Form AOC-4 (Financial Statements Filing)",
    dueDate: "Within 180 days of FY closure (27th September)",
    frequency: "Annually",
    description: "Filing of Balance Sheet, Profit & Loss account, and Auditor's report",
  },
  {
    compliance: "Form MGT-7A (Abridged Annual Return)",
    dueDate: "Within 60 days of completion of 180 days from FY end",
    frequency: "Annually",
    description: "Simplified annual return designed specifically for OPCs and Small Companies",
  },
  {
    compliance: "Form DIR-3 KYC (Director KYC Verification)",
    dueDate: "On or before 30th September every year",
    frequency: "Annually",
    description: "Annual biometric/OTP verification for all DIN holders to keep status active",
  },
  {
    compliance: "Income Tax Return (ITR-6)",
    dueDate: "31st October (if tax audit applies) / 31st July",
    frequency: "Annually",
    description: "Corporate income tax return filing with Income Tax Department",
  },
  {
    compliance: "Form ADT-1 (Statutory Auditor Appointment)",
    dueDate: "Within 15 days of first AGM / Appointment",
    frequency: "Every 5 Years",
    description: "Formal notification to ROC regarding appointment of Statutory Auditor",
  },
  {
    compliance: "Statutory Registers & Board Minutes",
    dueDate: "Maintained regularly throughout the year",
    frequency: "Continuous",
    description: "Record of resolutions passed by single director and member",
  },
];

const OPC_VS_OTHER_COMPARISON = [
  {
    feature: "Ownership / Shareholders",
    opc: "Only 1 Individual (Natural Indian citizen)",
    pvtLtd: "Minimum 2, Maximum 200",
    llp: "Minimum 2 Partners, No limit",
    proprietor: "Only 1 Individual",
  },
  {
    feature: "Directors Required",
    opc: "Minimum 1, Maximum 15",
    pvtLtd: "Minimum 2, Maximum 15",
    llp: "Minimum 2 Designated Partners",
    proprietor: "1 (Owner itself)",
  },
  {
    feature: "Nominee Appointment",
    opc: "Mandatory (Form INC-3)",
    pvtLtd: "Not Applicable",
    llp: "Not Applicable",
    proprietor: "Nomination optional",
  },
  {
    feature: "Personal Liability",
    opc: "Limited to share capital",
    pvtLtd: "Limited to share capital",
    llp: "Limited to capital contribution",
    proprietor: "Unlimited (Personal assets at risk)",
  },
  {
    feature: "Legal Status",
    opc: "Separate Legal Entity",
    pvtLtd: "Separate Legal Entity",
    llp: "Separate Legal Entity",
    proprietor: "No Separate Legal Entity",
  },
  {
    feature: "Annual General Meeting (AGM)",
    opc: "Exempt (Not required)",
    pvtLtd: "Mandatory every year",
    llp: "Exempt",
    proprietor: "Exempt",
  },
  {
    feature: "FDI / Foreign Investment",
    opc: "Not Permitted",
    pvtLtd: "Allowed (100% Automatic in most sectors)",
    llp: "Allowed under automatic route",
    proprietor: "Not Permitted",
  },
  {
    feature: "Tax Rate",
    opc: "22% base + surcharge (Sec 115BAA)",
    pvtLtd: "22% base + surcharge (Sec 115BAA)",
    llp: "30% base + surcharge",
    proprietor: "Individual Slab Rates (up to 39%)",
  },
];

const OPC_FAQS = [
  {
    q: "What is a One Person Company (OPC) in India?",
    a: "An OPC (One Person Company) is a recognized corporate business structure introduced under Section 2(62) of the Companies Act, 2013. It allows a single entrepreneur to operate as a full corporate entity with limited liability protection, a distinct legal personality, and perpetual succession, combining the simplicity of a sole proprietorship with the legal safeguards of a private limited company.",
  },
  {
    q: "Who is eligible to register an OPC in India?",
    a: "Only a natural person who is an Indian citizen (whether resident in India or non-resident/NRI) is eligible to incorporate an OPC and act as its nominee. A person cannot incorporate more than one OPC or be a nominee in more than one OPC at the same time. Minors are strictly prohibited from holding shares or being nominated.",
  },
  {
    q: "Why is a Nominee required in an OPC, and what is Form INC-3?",
    a: "Because an OPC has only one shareholder, Section 3(1)(c) of the Companies Act requires the sole member to nominate an individual who will assume ownership of the company in the event of the member's death or mental incapacity. The nominee must provide prior written consent in Form INC-3, ensuring unbroken perpetual succession.",
  },
  {
    q: "What is the minimum capital required to incorporate an OPC?",
    a: "There is zero minimum paid-up capital requirement to register an OPC in India under the Companies Act, 2013. You can start with an authorized capital as low as ₹10,000 or ₹1,00,000, and there is no obligation to deposit large sums into the corporate bank account prior to incorporation.",
  },
  {
    q: "Can an OPC be converted into a Private Limited Company?",
    a: "Yes! Following the MCA amendment rules, an OPC can now voluntarily convert into a Private Limited Company or Public Limited Company at any time without waiting for mandatory thresholds. You simply need to increase the number of members to at least 2 and directors to at least 2 and file the relevant ROC forms.",
  },
  {
    q: "Can an OPC raise funds from angel investors or venture capital?",
    a: "An OPC cannot directly issue shares to outside investors because it can only have one shareholder by definition. However, if an investor wishes to invest equity, the OPC can easily be converted into a Private Limited Company, allowing new shares to be allotted seamlessly.",
  },
  {
    q: "Is holding an Annual General Meeting (AGM) mandatory for an OPC?",
    a: "No. Section 96(1) of the Companies Act explicitly exempts One Person Companies from holding Annual General Meetings (AGMs). All member resolutions can simply be recorded in the company minute book signed by the sole member, substantially reducing compliance hassle.",
  },
  {
    q: "Can an OPC carry out Non-Banking Financial (NBFC) or investment activities?",
    a: "No. Under the Companies (Incorporation) Rules, 2014, an OPC is strictly prohibited from carrying out Non-Banking Financial Investment activities, including investment in securities of other corporate bodies, or converting into a Section 8 (non-profit) company.",
  },
  {
    q: "What documents are required for the registered office of an OPC?",
    a: "You need a copy of the latest utility bill (electricity, water, or piped gas bill not older than 2 months), rent agreement along with rent receipts if rented, and a signed No Objection Certificate (NOC) from the property owner granting permission to use the address.",
  },
  {
    q: "What is the difference between an OPC and a Sole Proprietorship?",
    a: "A sole proprietorship has no legal separation between the business and the individual, meaning the owner has unlimited personal liability for business debts. An OPC is an independent legal entity registered with the MCA; the owner's personal assets are 100% protected, and the company has perpetual succession.",
  },
  {
    q: "How long does it take to register an OPC with Merrafilings?",
    a: "With complete and valid documents, the entire incorporation process takes approximately 7 to 10 working days. This includes name reservation, DSC issuance, SPICe+ form drafting, MCA CRC scrutiny, and issuance of the Certificate of Incorporation with PAN and TAN.",
  },
  {
    q: "What ongoing annual compliances must an OPC fulfill?",
    a: "An OPC must file Form AOC-4 (financial statements) within 180 days of financial year end, Form MGT-7A (abridged annual return), file Form DIR-3 KYC for the director by 30th September, and file the annual Income Tax Return (ITR-6) by 31st October.",
  },
];

const FAQ_COL_1 = OPC_FAQS.slice(0, 6);
const FAQ_COL_2 = OPC_FAQS.slice(6, 12);

const PACKAGES: PricingPackage[] = [
  {
    name: "OPC Registration - Incorporation",
    shortDesc:
      "Register your company in just 7–10 days with online & hassle-free MCA filing. Fully managed incorporation...",
    expandedDesc:
      "Includes MCA name approval, Class-3 DSC, DIN allocation, e-MOA & e-AOA drafting, Form INC-3 preparation, PAN, TAN, and Certificate of Incorporation.",
    price: "₹2,899",
    priceSub: "+ Government Fees | Fast 7–10 working days delivery",
    features: [
      "SPICe+ Part A (Name Reservation)",
      "Class-3 DSC (1 Director + 1 Nominee)",
      "Director Identification Number (DIN)",
      "e-MOA (INC-33) & e-AOA (INC-34)",
      "Company PAN & TAN Allotment",
      "Certificate of Incorporation (CIN)",
    ],
  },
  {
    name: "OPC Registration - Standard Plan",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "Complete incorporation plus GST, MSME, and initial corporate governance setup to start operations and invoicing immediately...",
    expandedDesc:
      "Includes complete incorporation, GST registration, Udyam MSME certificate, first board resolution, share certificates, and dedicated compliance specialist.",
    price: "₹7,999",
    priceSub: "+ Government Fees | Includes GST & MSME Registrations",
    features: [
      "Everything in Incorporation Plan",
      "GST Registration Allotment",
      "Udyam (MSME) Certificate",
      "First Board Resolution & Share Certificate",
      "Bank Current Account Zero-Balance Support",
      "1-Year Compliance Advisory",
    ],
  },
  {
    name: "OPC Incorporation & Compliance",
    shortDesc:
      "Complete peace of mind: incorporation plus full 1st-year statutory ROC filings, DIR-3 KYC, Auditor appointment, and accounting software...",
    expandedDesc:
      "Comprehensive full-year compliance coverage including Form AOC-4, Form MGT-7A, DIR-3 KYC, Form ADT-1, corporate ITR-6 filing, and 12-month Ledgers cloud accounting software.",
    price: "₹19,899",
    priceSub: "+ Government Fees | Complete 1-Year ROC & Tax Compliance",
    features: [
      "Everything in Standard Plan",
      "Annual ROC Filing: Form AOC-4 & MGT-7A",
      "Director Annual KYC (DIR-3 KYC)",
      "Auditor Appointment Filing (Form ADT-1)",
      "Income Tax Return (ITR-6) Filing",
      "LEDGERS Accounting Software (1 Year)",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Users className="w-4 h-4" />,
    text: "Single Founder 100% Ownership & Complete Control",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Separate Legal Entity with Limited Liability Shield",
  },
  {
    icon: <Building className="w-4 h-4" />,
    text: "MCA SPICe+ Fast-Track 7–10 Days Processing",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    text: "CIN, PAN, TAN, e-MOA & e-AOA Included",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for OPC Registration →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  {
    title: "Understanding the OPC Registration Process: A Complete Guide",
    href: "/one-person-company/opc-registration-process-guide",
  },
  {
    title: "How to Register an OPC: A Step-by-Step Guide",
    href: "/one-person-company/register-an-opc-stepbystep-guide",
  },
  {
    title: "Understanding OPC Registration Fee: How to Apply Easily",
    href: "/one-person-company/opc-registration-fee-how-to-apply-easily",
  },
  {
    title: "One Person Company: Structure, Rules & Success Guide",
    href: "/one-person-company/understanding-one-person-company-structure",
  },
  {
    title: "OPC Registration: Streamline Your Business Setup in India",
    href: "/one-person-company/opc-registration-streamline-your-business-setup",
  },
];

const RELATED_SERVICES_TAGS = [
  "Private Limited Company",
  "LLP Registration",
  "Sole Proprietorship",
  "Partnership Firm",
  "GST Registration",
  "Trademark Registration",
  "Startup India DPIIT",
  "Section 8 Company",
];

const POPULAR_SEARCHES_TAGS = [
  "One Person Company registration online",
  "OPC registration fees in India",
  "Documents required for OPC incorporation",
  "OPC annual compliance checklist",
  "Nominee director rules under Companies Act",
];

function OpcGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Introduction */}
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-normal text-[#1F1646] mb-3">
                  One Person Company Registration Online in India
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                  One Person Company (OPC) registration in India allows a solo entrepreneur to establish a corporate business entity with full limited liability protection and an independent corporate personality. Governed by the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013, an OPC eliminates the need for finding a co-founder while providing the credibility, corporate banking access, and succession advantages previously reserved solely for multi-shareholder companies.
                </p>
              </div>

              {/* Section 2: What is an OPC */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  What is a One Person Company?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-3">
                  Under Section 2(62) of the Companies Act, 2013, a One Person Company is defined as a company which has only one person as a member. The corporate structure features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] font-normal text-slate-900">
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Single Shareholder
                    </strong>
                    100% equity is held by one natural Indian citizen, ensuring complete operational autonomy and decision-making speed.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Limited Liability Shield
                    </strong>
                    The owner's personal wealth and assets are completely legally separated from the debts, losses, or legal liabilities of the company.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Mandatory Nominee
                    </strong>
                    A nominee director is designated to safeguard perpetual succession if the sole member faces unforeseen demise or incapacity.
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FAF9F7]/60">
                    <strong className="font-normal text-slate-900 block mb-1">
                      Perpetual Corporate Entity
                    </strong>
                    The company exists independently of the owner’s lifespan and can contract, own property, and sue or be sued in its corporate name.
                  </div>
                </div>
              </div>

              {/* Section 3: Who Can Start an OPC */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Who Can Start an OPC in India?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  The Companies Act sets straightforward eligibility criteria for entrepreneurs planning to incorporate an OPC:
                </p>
                <div className="space-y-3 text-[13px] font-normal text-slate-900">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Natural Indian Citizens:</strong> Any Indian citizen aged 18 or above can incorporate an OPC. Following recent amendments, Non-Resident Indians (NRIs) who stayed in India for at least 120 days during the preceding financial year are also eligible.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">Solo Professionals &amp; Freelancers:</strong> Software consultants, doctors, designers, chartered accountants, and architects who wish to separate personal assets from consulting contracts.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">One OPC per Individual Rule:</strong> A person can incorporate only one OPC at a time, and can act as a nominee in only one OPC simultaneously.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      ✓
                    </div>
                    <div>
                      <strong className="font-normal text-slate-800">No Minor Participation:</strong> A minor cannot be a member, nominee, or hold beneficial interest in an OPC.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Documents Required Table (Shake-free zero layout shift) */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Documents Required for OPC Registration
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  All documents must be self-attested by the proposed director and nominee prior to electronic filing on the MCA V3 portal:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Document Required</th>
                        <th className="py-3 px-4 font-normal">Purpose</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_DOCUMENTS_TABLE.map((row, idx) => (
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

              {/* Section 5: Step-by-Step Incorporation Process */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Step-by-Step OPC Registration Process via SPICe+
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  The Ministry of Corporate Affairs streamlined company incorporation through the integrated web-form SPICe+ (INC-32). Here are the 6 stages:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Check Name Availability &amp; File SPICe+ Part A
                      </h4>
                      <p className="text-[12.5px] font-normal text-slate-900 mt-0.5 leading-relaxed">
                        Submit 2 proposed names on the MCA portal complying with naming guidelines. The approved name will end with the statutory suffix "(OPC) Private Limited".
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Obtain Class-3 Digital Signature Certificate (DSC)
                      </h4>
                      <p className="text-[12.5px] font-normal text-slate-900 mt-0.5 leading-relaxed">
                        Procure Class-3 DSC with e-Token for the proposed director. All electronic forms on the MCA V3 portal must be digitally signed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Draft e-MOA (INC-33), e-AOA (INC-34) &amp; Form INC-3
                      </h4>
                      <p className="text-[12.5px] font-normal text-slate-900 mt-0.5 leading-relaxed">
                        Draft electronic Memorandum and Articles of Association specifying the business objects. Secure the nominee's formal consent in Form INC-3.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        File SPICe+ Part B &amp; AGILE-PRO-S Integrated Form
                      </h4>
                      <p className="text-[12.5px] font-normal text-slate-900 mt-0.5 leading-relaxed">
                        Submit director details, registered office proof, DIN application, PAN, TAN, EPFO, ESIC, Profession Tax, and bank opening preference in one single filing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-purple-100 text-[#6B4BFF] font-medium text-xs flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Central Registration Centre (CRC) Verification
                      </h4>
                      <p className="text-[12.5px] font-normal text-slate-900 mt-0.5 leading-relaxed">
                        The Registrar of Companies (CRC Manesar) examines the submitted application and declarations. Queries or re-submissions (if any) are handled within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00A86B] font-medium text-xs flex items-center justify-center shrink-0">
                      6
                    </span>
                    <div>
                      <h4 className="text-[14px] font-normal text-slate-800">
                        Certificate of Incorporation (COI) &amp; CIN Issuance
                      </h4>
                      <p className="text-[12.5px] font-normal text-slate-900 mt-0.5 leading-relaxed">
                        Upon approval, the ROC issues the Certificate of Incorporation containing the unique 21-digit Corporate Identification Number (CIN), permanent PAN, and TAN.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Cost Breakdown Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How Much Does OPC Registration Cost in India?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Here is the transparent cost structure including MCA government charges, state stamp duty, and professional service fees:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Service Component</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Estimated Cost</th>
                        <th className="py-3 px-4 font-normal">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_COST_BREAKDOWN_TABLE.map((row, idx) => (
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

              {/* Section 7: Registration Timeline Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  How Long Does OPC Registration Take?
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Detailed timeline breakdown across each procedural stage of incorporation:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Registration Stage</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Time Required</th>
                        <th className="py-3 px-4 font-normal">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_TIMELINE_TABLE.map((row, idx) => (
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
              </div>

              {/* Section 8: Mandatory Annual Compliances Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Mandatory Annual Compliances for OPC
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  To keep the corporate status active and prevent statutory ROC penalties or DIN deactivations, every OPC must fulfill the following annual filings:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs mb-4">
                  <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-normal">Compliance Type</th>
                        <th className="py-3 px-4 font-normal">Prescribed Due Date</th>
                        <th className="py-3 px-4 font-normal text-[#00A86B]">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_ANNUAL_COMPLIANCE_TABLE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-3 px-4 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.compliance}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{row.dueDate}</td>
                          <td className="py-3 px-4 font-medium text-[#00A86B]">{row.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: OPC vs Pvt Ltd vs LLP Comparison Table */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  OPC vs Private Limited Company vs LLP Comparison
                </h2>
                <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                  Evaluating different business structures before incorporation ensures you select the model that best matches your investment, liability, and scaling goals:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
                  <table className="w-full text-left text-[12px] font-normal text-slate-900">
                    <thead className="bg-[#FAF9F7] text-slate-800 font-normal border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-normal">Feature</th>
                        <th className="py-2.5 px-3 font-normal text-[#00A86B]">One Person Company (OPC)</th>
                        <th className="py-2.5 px-3 font-normal">Private Limited</th>
                        <th className="py-2.5 px-3 font-normal">LLP</th>
                        <th className="py-2.5 px-3 font-normal">Sole Proprietorship</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {OPC_VS_OTHER_COMPARISON.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#EDF8F3] transition-colors duration-150 group cursor-default"
                        >
                          <td className="relative py-2.5 px-3 font-normal text-slate-800 group-hover:text-slate-900">
                            <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                            {row.feature}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-[#00A86B]">{row.opc}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.pvtLtd}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.llp}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.proprietor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 10: Why Choose Merrafilings */}
              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-3">
                  Why Choose Merrafilings for OPC Registration?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Dedicated CA &amp; CS Oversight
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Every application is thoroughly drafted and verified by senior corporate compliance professionals, guaranteeing zero rejections.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      100% Online &amp; Paperless
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Submit your documents securely from home. We handle digital signature procurement, MCA filings, and courier documents directly.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Zero Hidden Fees Guarantee
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      Transparent quotation with exact breakdowns of MCA fees, stamp duty, and legal fees. No surprise charges mid-process.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                    <h4 className="text-[14px] font-medium text-slate-900 mb-1">
                      Post-Incorporation Compliance
                    </h4>
                    <p className="text-[12.5px] font-normal text-slate-900 leading-relaxed">
                      From GST registration to annual ROC filing and accounting support, we stay with your business for the long haul.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Official OPC Registration Guides & Handbooks */}
              <div className="border-t border-slate-100 pt-8 mt-2">
                <div className="mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>In-Depth Regulatory Handbooks</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-normal text-[#1F1646]">
                    Official One Person Company Knowledge Guides
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-700 mt-1 leading-relaxed">
                    Step-by-step statutory roadmaps, government fee schedules, and incorporation procedures curated by Chartered Accountants and Company Secretaries.
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

export default function OnePersonCompanyPage() {
  return (
    <ServicePageTemplate
      badgeText="Single Founder Corporate Structure"
      heroTitle={
        <>
          One Person Company (OPC){" "}
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Registration in India
          </span>
        </>
      }
      heroSubtitle="Enjoy the power of a private limited company with 100% ownership in a single founder's hands. Limited liability protection, corporate legal status, and minimal compliance."
      formTitle="Start Your One Person Company"
      formSubtitle="Enter your details below to consult with our specialized MCA incorporation team."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Clear, transparent pricing for your One Person Company with complete CA support and zero hidden fees."
      breadcrumbCurrent="One Person Company"
      guideContent={<OpcGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about registering a One Person Company in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
