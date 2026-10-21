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

const REGISTRATION_REQUIREMENTS = [
  {
    type: "GST Registration",
    isLink: true,
    href: "#pricing",
    requirement: "Mandatory for businesses with turnover above threshold",
    when: "Annual turnover exceeds specified limit",
  },
  {
    type: "Udyam Registration",
    isLink: false,
    requirement: "Government recognition for small businesses",
    when: "Manufacturing or service enterprises",
  },
  {
    type: "Professional License",
    isLink: false,
    requirement: "Authority to practice specific profession",
    when: "Service-based professional businesses",
  },
  {
    type: "Shop & Establishment",
    isLink: true,
    href: "#pricing",
    requirement: "Local authority approval for retail operations",
    when: "Fixed location retail or service business",
  },
  {
    type: "Import-Export Code",
    isLink: true,
    href: "#pricing",
    requirement: "For international trade operations",
    when: "Businesses involving cross-border transactions",
  },
  {
    type: "Environmental Clearance",
    isLink: false,
    requirement: "Approval for environmentally sensitive activities",
    when: "Manufacturing with environmental impact",
  },
  {
    type: "Food Safety License",
    isLink: true,
    href: "#pricing",
    requirement: "FSSAI registration for food businesses",
    when: "Food production, processing, or retail",
  },
];

const FAQ_COL_1 = [
  {
    q: "What is Proprietorship Registration?",
    a: "Proprietorship Registration is the process of legally establishing a sole proprietorship business owned and managed by a single individual. It is one of the simplest and most common business structures in India, where the owner has complete control over the business and is personally liable for all its obligations.",
  },
  {
    q: "Does a Proprietorship Firm need a separate PAN card?",
    a: "No, a proprietorship firm does not need a separate PAN card. The proprietor's personal PAN card is used for all business-related financial and tax transactions. The firm and the owner are treated as the same legal entity under Indian law.",
  },
  {
    q: "Is GST Registration mandatory for a Proprietorship Firm?",
    a: "GST Registration is mandatory for a proprietorship firm if the annual turnover exceeds ₹40 lakhs for goods or ₹20 lakhs for services. It is also mandatory regardless of turnover if you sell goods or services across state borders or through e-commerce platforms like Amazon, Flipkart, or Meesho.",
  },
  {
    q: "Which businesses are best suited for a sole proprietorship?",
    a: "Sole proprietorship is best suited for retail shops, freelance professionals, consultants, digital creators, small traders, artisans, home-based businesses, and service providers who want complete autonomy with minimal compliance and low upfront capital.",
  },
  {
    q: "What are the limitations of a sole proprietorship?",
    a: "The main limitations include: unlimited personal liability where personal assets can be used to settle business debts, difficulty in raising equity funding or venture capital, limited growth scalability, and lack of perpetual succession (the business dissolves upon the owner's demise).",
  },
];

const FAQ_COL_2 = [
  {
    q: "How to register a proprietorship business in India?",
    a: "To register a proprietorship business in India, follow these steps: Obtain a PAN card in your name, Register for GST if your turnover exceeds the threshold or if selling inter-state/online, Apply for Udyam (MSME) Registration, Open a current bank account in the business name, and obtain any applicable local municipal trade licenses.",
  },
  {
    q: "Can a sole proprietor register for MSME/Udyam Registration?",
    a: "Yes, a sole proprietor can register for MSME/Udyam Registration. It provides multiple benefits such as priority sector bank lending, lower interest rates, government subsidies, and protection against delayed buyer payments under the MSMED Act.",
  },
  {
    q: "What are the common mistakes to avoid in a sole proprietorship?",
    a: "Common mistakes include: mixing personal and business funds in a savings account, ignoring GST or income tax return filing deadlines, failing to obtain Udyam or required local trade licenses, keeping messy accounting records, and overlooking the risk of unlimited personal liability.",
  },
  {
    q: "What are the two main advantages of a sole proprietorship?",
    a: "The two primary advantages are: (1) Easy and rapid formation with negligible compliance burden and low cost, and (2) Total autonomy and 100% profit retention without needing partner or board approvals.",
  },
  {
    q: "How do I start a business as a sole proprietor?",
    a: "To start a business as a sole proprietor, choose a unique business name, obtain an Aadhaar & PAN card, apply for Udyam MSME and GST registration online through MerraFilings, open a dedicated current bank account with your GST certificate, and obtain any local Shop & Establishment municipal permits.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What documents are required for Proprietorship Registration?",
    a: "The required documents include: PAN Card of the proprietor, Aadhaar Card, Address Proof of the business place (Electricity Bill / Rent Agreement + NOC), Bank Account proof (Cancelled Cheque or Bank Statement), and Passport-size photograph.",
  },
  {
    q: "What is the cost of Proprietorship Registration?",
    a: "Basic government registration like Udyam is free. Government GST registration is also free. Professional assistance packages on MerraFilings start from ₹1,499/month for end-to-end filing and dedicated accountant support.",
  },
  {
    q: "Can a foreign citizen start a sole proprietorship in India?",
    a: "No, foreign nationals or non-resident Indians (NRIs) cannot register a sole proprietorship in India without prior RBI/Government approvals. Foreign entrepreneurs are advised to incorporate a Private Limited Company or Wholly Owned Subsidiary instead.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How long does it take to register a Proprietorship Firm?",
    a: "Proprietorship setup usually takes 3 to 7 working days. Udyam MSME certificate is generated rapidly, while GST registration with Aadhaar biometric authentication typically takes 3 to 7 business days.",
  },
  {
    q: "Is a current bank account required for a Proprietorship Firm?",
    a: "Yes, opening a dedicated current bank account in the name of your proprietorship firm is highly recommended. It establishes professional credibility, helps keep business finances separate, and is required for commercial merchant payments.",
  },
  {
    q: "What tax and compliance requirements apply to a Proprietorship Firm?",
    a: "Income earned by a proprietorship is taxed under individual income tax slab rates of the proprietor. If registered for GST, monthly/quarterly GSTR-1 and GSTR-3B filings are mandatory, along with annual ITR filing (ITR-3 or ITR-4).",
  },
];

const RELATED_SERVICES_TAGS = [
  "Merrafilings Portal",
  "OPC Registration",
  "Partnership Firm Registration",
  "Private Limited Company",
  "Section 8 Company",
  "India Business Setup",
  "LLP Registration",
  "Virtual Office Address",
  "PLC to OPC",
  "Public Limited Company",
  "Producer Company",
  "Pitch Deck",
];

const POPULAR_SEARCHES_TAGS = [
  "Company Registration",
  "GST Registration",
  "LLP Registration",
  "Partnership",
  "Startup Registration",
  "Trademark Search",
  "Trademark Objection",
  "Trademark Registration",
  "Trademark Renewal",
  "GST Return Filing",
  "Partnership Tax Return Filing",
  "Proprietorship Compliance",
  "Check Company Name Availability",
  "Company Annual Filing",
  "LLP Winding Up",
  "MCA Services",
  "Tax Audit",
  "Virtual Office",
  "One Person Company",
  "Trade License",
  "Start Up India",
  "Legal Name Change",
  "RCMC Registration",
  "FSSAI License",
  "Emudhra Digital Signature Certificate",
  "Notary",
  "Trust Registration",
  "Udyam Registration",
  "Business Tax Return Filing",
  "Income Tax Filing",
  "Winding Up Of A Company",
  "Online CA Consultation",
  "Lawyer Consultation",
  "Trademark Registration Certificate",
  "Indian Subsidiary",
  "DIN Reactivation",
  "Shop Establishment Act Registration",
  "ISO Registration",
  "ESI Registration",
  "Professional Tax Registration",
  "Professional Tax Return Filing",
  "Company Name Change",
  "Barcode Registration",
  "TDS Return Filing",
  "Patent Registration",
  "Copyright Registration",
  "LLP Annual Filing",
  "HR and Payroll Service",
];

const PACKAGES: PricingPackage[] = [
  {
    name: "GST Registration + Monthly Filing",
    shortDesc:
      "Essential GST certificate registration and basic monthly compliance for solo businesses...",
    expandedDesc:
      "Includes GST portal registration, application filing, ARN generation, GST certificate download, and 1st month filing assistance.",
    price: "₹1,499",
    priceSub: "+ GST | Ideal for New Retailers & Freelancers",
    features: [
      "Official Goods & Services Tax (GST) Registration",
      "GSTIN Certificate Allotment within 3-7 Days",
      "HSN/SAC Code Identification & Advisory",
      "Zero-Balance Current Bank Account Authorization",
      "1 Month Free GST Invoicing on LEDGERS Platform",
      "Basic Tax Consultation with GST Specialist",
    ],
  },
  {
    name: "Proprietorship - GST",
    popular: true,
    badge: "Most Popular",
    shortDesc:
      "The complete business identity bundle: GST, Udyam MSME certificate, Current account & Invoicing...",
    expandedDesc:
      "Most chosen package for single-owner operations. Includes GST registration, MSME/Udyam central registration for government loan subsidies, current bank account resolution, and 12-month LEDGERS invoicing suite.",
    price: "₹7,899",
    priceSub: "+ GST | Complete Sole Business Starter Kit",
    features: [
      "Complete GST Registration & Certificate",
      "MSME / Udyam Government Registration Certificate",
      "Current Bank Account Opening Resolution & Support",
      "LEDGERS Cloud Invoicing & Billing Software (1 Year)",
      "3 Months GST Return Filing (GSTR-1 & GSTR-3B)",
      "Priority Verification & Dedicated Account Manager",
    ],
  },
  {
    name: "1 Year GST Filing + ITR",
    shortDesc:
      "All-inclusive annual compliance: GST registration, 12 months filing returns, and Annual ITR...",
    expandedDesc:
      "Zero-penalty peace of mind. Covers complete registration, Udyam MSME, all 12 monthly GST returns, and individual/proprietorship Income Tax Return (ITR-3 / ITR-4) filing with Chartered Accountant sign-off.",
    price: "₹19,899",
    priceSub: "+ GST | Full 1-Year Financial & Tax Shield",
    features: [
      "Everything in Proprietorship - GST Package",
      "Full 12 Months GST Returns (GSTR-1 & GSTR-3B)",
      "Annual GST Return (GSTR-9) Filing Support",
      "Annual Business Financials (P&L & Balance Sheet)",
      "Proprietorship Income Tax Return (ITR-3 / ITR-4)",
      "TDS Compliance & Year-End Tax Optimization",
      "Dedicated Chartered Accountant (CA) Advisory",
    ],
  },
];

const FORM_FEATURES = [
  {
    icon: <Users className="w-4 h-4" />,
    text: "Single Owner Full Control with Zero Equity Dilution",
  },
  {
    icon: <Receipt className="w-4 h-4" />,
    text: "GST Registration & Udyam MSME Certificate Included",
  },
  {
    icon: <Building className="w-4 h-4" />,
    text: "Current Bank Account Opening Assistance",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "Simplest Legal Setup with Minimal Compliance Burden",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Documents Required for Sole Proprietorship →",
    isLink: true,
    href: "#documents-required",
  },
];

const RELATED_GUIDES = [
  {
    title: "Sole Proprietorship Definition and Features in India",
    href: "/proprietorship/definition-and-meaning",
  },
  {
    title: "Comprehensive Guide to Proprietorship Registration",
    href: "/proprietorship/proprietorship-registration-guide-steps-benefits",
  },
  {
    title: "How to Start a Proprietorship: A Step-by-Step Guide",
    href: "/proprietorship/how-to-start-a-proprietorship-stepbystep-guide",
  },
  {
    title: "Understanding Proprietorship: A Beginner's Guide",
    href: "/proprietorship/understanding-proprietorship-a-beginners-guide",
  },
  {
    title: "Sole Proprietorship Firm Registration Guide",
    href: "/proprietorship/sole-proprietorship-firm-registration-guide",
  },
];

function ProprietorGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Intro with Centered Title matching Reference Image */}
                <div>
                  <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-normal text-[#1F1646] text-center mb-6 leading-snug">
                    Solo Proprietorship Firm Registration Online in India
                  </h1>
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Starting a business as a <strong className="font-normal text-slate-900">sole proprietor</strong> offers simplicity and complete control over your individual business registration. Whether you are an entrepreneur looking to establish your presence or planning to expand your business ventures, understanding the nuances of <a href="#pricing" className="text-[#155EEF] hover:underline font-normal">proprietorship registration online</a> is crucial. This comprehensive guide covers everything you need to know about registering a sole proprietorship in India, from eligibility criteria to the final registration process. Our experts at <a href="/" className="text-[#00B074] hover:underline font-normal">Merrafilings</a> provide seamless solutions for self-employed registration and business establishment with affordable fees.
                  </p>
                </div>

                {/* Section 2: What is a Sole Proprietorship */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    What is a Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    A <a href="#overview" className="text-[#00B074] hover:underline font-normal">sole proprietorship</a> is the simplest form of business structure where an individual operates a business under their own name or a registered business name. The proprietor has complete authority over all business decisions and is personally responsible for all business liabilities. This one-person business model requires minimal formalities compared to other business structures, making it an attractive option for entrepreneurs.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    Key Characteristics of a Sole Proprietorship
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-normal text-slate-900">
                    {[
                      "Single individual ownership and management",
                      "Unlimited personal liability",
                      "Simple registration and compliance requirements",
                      "Direct access to all business profits",
                      "Flexible operational structure",
                      "Quick decision-making process",
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

                {/* Section 3: Key Features & Advantages */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Key Features of a Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Understanding the distinctive features of a sole proprietorship helps entrepreneurs make informed decisions. A proprietor registration provides numerous operational advantages that appeal to independent business owners. The proprietor maintains complete autonomy in business operations, which enables rapid adaptation to market changes. Unlike partnerships or companies, a sole proprietorship does not require approval from multiple stakeholders for critical business decisions.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    Operational Advantages
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-normal text-slate-900">
                    {[
                      "Complete control over business operations and strategy",
                      "Simplified decision-making without board approvals",
                      "Direct profit retention without profit sharing obligations",
                      "Minimal compliance and reporting requirements",
                      "Lower registration and annual maintenance costs",
                      "Flexible working hours and operational schedule",
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

                {/* Section 4: Is Registration Mandatory */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Is Proprietorship Registration Mandatory in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    The question of whether proprietorship registration is mandatory depends on various business factors and regulatory requirements. While a sole proprietorship does not have a single dedicated governing act, obtaining statutory registrations (GST, Udyam MSME, and Local Shop Act) makes your enterprise legally compliant.
                  </p>

                  <h3 className="text-[15px] font-normal text-[#1F1646] mt-5 mb-3">
                    When Registration Becomes Mandatory
                  </h3>
                  <ul className="space-y-2.5 text-[13px] font-normal text-slate-900">
                    {[
                      "Manufacturing or trading businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for services)",
                      "Professional services requiring regulatory licensing and invoicing",
                      "Opening a current bank account in the business firm's name",
                      "Applying for collateral-free MSME bank loans and credit facilities",
                      "Operating on e-commerce platforms (Amazon, Flipkart, GeM, Meesho)",
                      "Employing staff requiring PF / ESI payroll compliance",
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

                {/* Section 5: Documents Required */}
                <div id="documents" className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Documents Required for Sole Proprietorship Registration in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Gathering the required documents streamlines the proprietorship registration process significantly. Your Aadhaar card serves as primary identity and residential proof for online proprietorship registration. A PAN certificate issued by the income tax department is mandatory for all business operations.
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Aadhaar Card", desc: "Identity & residential address proof" },
                      { title: "PAN Card", desc: "Proprietor's Permanent Account Number" },
                      { title: "Electricity / Utility Bill", desc: "Proof of registered business address (< 2 months old)" },
                      { title: "Rent Agreement & NOC", desc: "If operating from rented commercial or residential premises" },
                      { title: "Bank Account Proof", desc: "Cancelled cheque or latest bank statement" },
                      { title: "Passport Photographs", desc: "Recent color photographs of the proprietor" },
                    ].map((doc, idx) => (
                      <div key={idx} className="p-3 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                        <p className="font-normal text-[13.5px] text-[#111827]">{doc.title}</p>
                        <p className="text-[12px] font-normal text-slate-900 mt-0.5">{doc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: Additional Registration Requirements Table (Exact Match to User Reference Screenshot) */}
                <div className="border-t border-slate-100 pt-6">
                  <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed mb-4">
                    annual turnover exceeds specified thresholds, enabling you to collect and remit goods and services tax. <a href="#pricing" className="text-[#00A86B] underline underline-offset-2 hover:text-[#008f5a] font-normal">Udyam registration</a> provides government recognition for micro, small, and medium enterprises, unlocking access to various subsidies and schemes.
                  </p>

                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646] mb-4">
                    Additional Registration Requirements by Business Type
                  </h2>

                  {/* Table with green top accent border and interactive hover effects */}
                  <div className="overflow-x-auto rounded-lg border border-slate-200/90 shadow-2xs">
                    <table className="w-full border-collapse text-[13px] sm:text-[13.5px] border-t-[3px] border-t-[#00A86B]">
                      <thead>
                        <tr className="bg-[#F8FAFC] border-b border-slate-200/90 text-left">
                          <th className="py-3 px-4 font-semibold text-slate-800 border-r border-slate-200/90 w-[28%] sm:w-[30%]">
                            Registration Type
                          </th>
                          <th className="py-3 px-4 font-semibold text-slate-800 border-r border-slate-200/90 w-[38%]">
                            Requirement
                          </th>
                          <th className="py-3 px-4 font-semibold text-slate-800 w-[34%] sm:w-[32%]">
                            When Applicable
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {REGISTRATION_REQUIREMENTS.map((row, idx) => (
                          <tr
                            key={idx}
                            className="group hover:bg-[#EDF8F3] transition-colors duration-150 border-b border-slate-200/80 last:border-b-0 cursor-default"
                          >
                            <td className="relative py-3.5 px-4 border-r border-slate-200/80">
                              <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                              {row.isLink ? (
                                <a
                                  href={row.href}
                                  className="text-[#00A86B] underline underline-offset-2 hover:text-[#008f5a] font-normal transition-colors"
                                >
                                  {row.type}
                                </a>
                              ) : (
                                <span className="font-normal text-slate-800">
                                  {row.type}
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 border-r border-slate-200/80 font-normal text-slate-900">
                              {row.requirement}
                            </td>
                            <td className="py-3.5 px-4 font-normal text-slate-900">
                              {row.when}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Advantages of a Sole Proprietorship in India (Screenshot reference section) */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Advantages of a Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    Operating as a sole proprietor offers numerous advantages that make this business structure attractive for entrepreneurs. Complete autonomy allows you to make all business decisions independently without consulting partners or board members. <a href="#pricing" className="text-[#00A86B] underline underline-offset-2 hover:text-[#008f5a] font-normal">Sole proprietorship advantages</a> include simplified business structure with minimal legal formalities and compliance requirements. Tax efficiency emerges through various deduction options available to self-employed professionals and business owners.
                  </p>
                </div>

                {/* Section 7: Step-by-Step Registration */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    How to Register a Sole Proprietorship Firm in India
                  </h2>
                  <ol className="mt-4 space-y-3 list-decimal list-inside text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    <li className="pl-1"><strong className="font-normal text-slate-900">Select a Unique Business Name:</strong> Pick a distinctive trading name that reflects your activity and doesn&apos;t infringe existing trademarks.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Document Verification:</strong> Organize PAN, Aadhaar, bank statements, and business address electricity bills.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Apply for Udyam MSME Registration:</strong> Register on the government portal using Aadhaar OTP verification to obtain your official MSME certificate.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">File for GSTIN:</strong> Submit Form GST REG-01 with business place photos and biometric Aadhaar authentication.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Open Current Account:</strong> Present the GST Certificate, Udyam certificate, and PAN to open a dedicated firm account with any leading bank.</li>
                    <li className="pl-1"><strong className="font-normal text-slate-900">Start Invoicing & Compliance:</strong> Generate GST-compliant invoices using LEDGERS and submit monthly GSTR-1/3B filings.</li>
                  </ol>
                </div>

                {/* Section 8: Government Schemes */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Government Schemes for Sole Proprietorship in India
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    The Indian government offers multiple flagship credit and subsidy schemes specifically crafted for sole proprietor micro-enterprises:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">Pradhan Mantri MUDRA Yojana</h4>
                      <p className="text-[12px] font-normal text-slate-900 mt-1">Collateral-free business loans up to ₹10 Lakhs under Shishu, Kishore, and Tarun schemes for working capital.</p>
                    </div>
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">Credit Guarantee Fund (CGTMSE)</h4>
                      <p className="text-[12px] font-normal text-slate-900 mt-1">Guarantees collateral-free credit facilities up to ₹2 Crore for new and existing micro-enterprises.</p>
                    </div>
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">Stand-Up India Scheme</h4>
                      <p className="text-[12px] font-normal text-slate-900 mt-1">Bank loans between ₹10 Lakhs and ₹1 Crore for greenfield enterprises set up by SC/ST or women proprietors.</p>
                    </div>
                    <div className="p-4 bg-[#FAF9F7]/70 rounded-xl border border-slate-200/60">
                      <h4 className="font-normal text-slate-900 text-[14px]">PMEGP Subsidy</h4>
                      <p className="text-[12px] font-normal text-slate-900 mt-1">Government subsidy ranging from 15% to 35% on project cost for setting up new micro manufacturing and service units.</p>
                    </div>
                  </div>
                </div>

                {/* Section 9: Why Choose MerraFilings */}
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="text-[18px] sm:text-[19px] font-normal text-[#1F1646]">
                    Why Choose MerraFilings for Proprietorship Registration in India?
                  </h2>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    MerraFilings brings specialized expertise in guiding proprietors through the complete registration process with precision and efficiency. Our experienced team understands the nuances of proprietorship registration across all Indian states, providing personalized end-to-end guidance from document drafting to GST and bank setup.
                  </p>
                  <p className="mt-3 text-[13.5px] font-normal text-slate-900 leading-relaxed">
                    With zero hidden costs, instant transparent pricing, dedicated compliance managers, and our integrated LEDGERS accounting software, thousands of sole proprietors across India trust us every month.
                  </p>
                </div>
    </>
  );
}

export default function ProprietorshipPage() {
  return (
    <ServicePageTemplate
      badgeText="Simplest Business Model for Solo Entrepreneurs"
      heroTitle={
        <>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-normal">
            Proprietorship
          </span>{" "}
          <span className="font-normal text-[#12023B]">Registration in India</span>
        </>
      }
      heroSubtitle="Launch your solo business in India fast and affordably. 100% online setup with GST registration, Udyam MSME certification, and dedicated bank account support."
      formTitle="Start Your Proprietorship"
      formSubtitle="Enter your details below to get immediate guidance on registering your single-owner business."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Transparent pricing and end-to-end support for sole proprietors across India."
      breadcrumbCurrent="Proprietorship"
      guideContent={<ProprietorGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Common questions about registering a Sole Proprietorship in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
