"use client";

import React, { useState } from "react";
import ProprietorshipGuideLayout from "@/components/ProprietorshipGuideLayout";
import {
  Sparkles,
  Compass,
  FileCheck2,
  Building,
  CreditCard,
  Calculator,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Briefcase,
  Search,
  Scale,
  Users,
  Award,
} from "lucide-react";

const STARTUP_STEPS = [
  {
    step: "01",
    title: "Decide on a Business Name & Conduct Brand Search",
    icon: <Search className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Brand Identity",
    summary:
      "Your firm name forms the foundational identity for invoices, client trust, and online presence.",
    points: [
      "Select a distinct, memorable trade name that communicates your commercial offering clearly.",
      "Ensure the name does not infringe existing registered trademarks via the IP India Public Search portal (under the Trade Marks Act, 1999).",
      "Avoid restricted words requiring MCA approval (such as 'National', 'Bank', 'Insurance', 'Corporation', or 'Government').",
      "Secure matching digital handles and .in / .com domains to establish instant digital credibility.",
    ],
  },
  {
    step: "02",
    title: "Secure Mandatory Local Licenses & Regulatory Permits",
    icon: <FileCheck2 className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Legal Standing",
    summary:
      "Establish valid statutory proof of commercial existence in your local municipal jurisdiction.",
    points: [
      "Apply for State Shop and Establishment Act Registration (Gumasta license in Maharashtra, Trade License in WB/Delhi/Tamil Nadu).",
      "Obtain Central Udyam MSME Registration via Aadhaar OTP to unlock priority sector bank lending and interest subventions.",
      "Sector-specific approvals: FSSAI Food Business License for eateries/cloud kitchens, Drug License for pharmacies, or Pollution Control Board NOC.",
      "Professional tax (P-Tax) registration with the local state treasury if operating in states like Maharashtra, Karnataka, or West Bengal.",
    ],
  },
  {
    step: "03",
    title: "Register for Essential Tax Identifiers (PAN & GSTIN)",
    icon: <Calculator className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Fiscal Compliance",
    summary:
      "Align your enterprise with Indian direct and indirect tax mandates from day one.",
    points: [
      "Direct Tax: A sole proprietorship operates under the proprietor's individual Permanent Account Number (PAN). No separate company PAN is issued.",
      "Apply for Tax Deduction and Collection Account Number (TAN) under Section 203A if deducting TDS on contractor payments, salaries, or commercial rent.",
      "Mandatory GST Registration if turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for services) or if engaging in interstate e-commerce sales (Amazon, Flipkart).",
      "Evaluate the GST Composition Scheme (1% or 6% flat tax) for local retailers with turnover under ₹1.5 Crore seeking quarterly ease.",
    ],
  },
  {
    step: "04",
    title: "Open a Dedicated Commercial Current Bank Account",
    icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Financial Segregation",
    summary:
      "Never mingle personal household finances with business operations; open an active current account.",
    points: [
      "Satisfy the Reserve Bank of India (RBI) 2-Document Mandate: Banks require two separate government registrations in the trade name (e.g., GST Certificate + Udyam Registration or Shop Act).",
      "Submit proprietor's PAN card, Aadhaar card, electricity bill of premises, and business address proof.",
      "Activate corporate internet banking, payment gateway API integrations (Razorpay, Cashfree), and merchant UPI QR codes.",
      "Maintain a clean audit trail to demonstrate operational turnover when applying for working capital limits or Mudra loans.",
    ],
  },
  {
    step: "05",
    title: "Establish Systematic Bookkeeping & Accounting Records",
    icon: <Building className="w-5 h-5 text-cyan-600" />,
    color: "cyan",
    badge: "Books of Accounts",
    summary:
      "Deploy robust daily ledger tracking to streamline yearly income tax filings and monitor profitability.",
    points: [
      "Select an appropriate accounting framework: Cash basis (for solo consultants) vs. Accrual basis (for trading and inventory-heavy ventures).",
      "Leverage cloud-based invoicing and accounting tools (TallyPrime, Zoho Books, QuickBooks) for automated GST invoice generation and debit note tracking.",
      "Decide on tax filing mechanism: Presumptive Taxation under Section 44AD (taxing 6%-8% of gross turnover without maintenance of books) or regular ITR-3 with P&L balance sheet.",
      "Retain all physical invoices, supplier receipts, and bank statements for a statutory minimum of 6 to 8 assessment years.",
    ],
  },
  {
    step: "06",
    title: "Procure Comprehensive Commercial Business Insurance",
    icon: <ShieldAlert className="w-5 h-5 text-amber-600" />,
    color: "amber",
    badge: "Risk Cushion",
    summary:
      "Because the proprietor carries unlimited personal liability, insurance shields personal assets from operational hazards.",
    points: [
      "Commercial General Liability (CGL): Shields against customer slip-and-fall injuries, property damage, or consumer litigation.",
      "Standard Fire & Special Perils Policy: Covers inventory stock, factory equipment, raw materials, and office machinery against fire, flood, and theft.",
      "Professional Indemnity Insurance: Essential for medical practitioners, legal counsels, architects, and IT freelancers against claims of professional negligence.",
      "Key Person & Health Protection: Safeguards your household against business disruption if the sole owner suffers unexpected medical incapacity.",
    ],
  },
];

const PROS_AND_CONS = [
  {
    type: "pro",
    title: "Utmost Operational Simplicity",
    icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "Can be established within 48 to 72 hours with minimal setup capital, zero legal deeds, and no complex Registrar of Companies (ROC) charter drafting.",
  },
  {
    type: "pro",
    title: "100% Autonomous Decision Power",
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Complete freedom to negotiate vendor deals, adjust pricing models, alter product catalogs, and disburse operational surpluses without seeking board approval.",
  },
  {
    type: "pro",
    title: "Direct Tax Pass-Through Benefits",
    icon: <Scale className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Business revenues are merged directly into your individual ITR, qualifying for slab benefits, Section 80C deductions, and presumptive taxation under Section 44AD.",
  },
  {
    type: "pro",
    title: "Absolute Commercial Privacy",
    icon: <Award className="w-5 h-5 text-cyan-600" />,
    color: "cyan",
    desc: "No mandate to publish annual financial statements, profit & loss summaries, or auditor reports on public MCA registry portals.",
  },
  {
    type: "con",
    title: "Unlimited Personal Liability",
    icon: <AlertTriangle className="w-5 h-5 text-rose-600" />,
    color: "rose",
    desc: "No corporate veil protects the founder. Creditors, statutory departments, or court litigants can seize your personal residence, land, and personal bank accounts to recover dues.",
  },
  {
    type: "con",
    title: "Restricted Capital Mobilization",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    color: "amber",
    desc: "Inability to issue equity shares, convertible notes, or ESOPs means institutional venture capital (VC) funds and angel networks cannot invest.",
  },
  {
    type: "con",
    title: "Lack of Perpetual Succession",
    icon: <Compass className="w-5 h-5 text-orange-600" />,
    color: "orange",
    desc: "The enterprise is legally tethered to the individual. In the event of death, bankruptcy, or permanent incapacity, operations freeze and licenses terminate.",
  },
  {
    type: "con",
    title: "Total Skill & Burnout Dependency",
    icon: <Users className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "The founder must simultaneously shoulder marketing, finance, customer dispute handling, and compliance, creating bottlenecks as transaction volumes scale.",
  },
];

const SUCCESS_BLUEPRINT = [
  {
    title: "Draft an Agile One-Page Business Plan",
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "Outline your core value proposition, ideal customer persona, supplier sourcing pricing, and 12-month break-even timeline. Revisit your unit margins monthly to discard unprofitable SKUs.",
  },
  {
    title: "Build Obsessive Customer Retention Loops",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "As a small business, personalized client service is your competitive edge against corporate giants. Collect WhatsApp or email feedback within 24 hours of delivery to resolve friction immediately.",
  },
  {
    title: "Maintain a Strict 90-Day Cash Runway",
    icon: <Building className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Never drain working capital accounts for personal luxuries. Keep a minimum 3-month operational buffer for rent, utility bills, and supplier vendor payments to weather demand slowdowns.",
  },
  {
    title: "Know When to Transition to Pvt Ltd or LLP",
    icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "When gross revenue surpasses ₹1-2 Crore, third-party liability escalates, or external equity capital is needed, execute a tax-neutral slump sale or statutory conversion into a Private Limited Company.",
  },
];

const FAQS = [
  {
    q: "Can I start a proprietorship business from my residential home address?",
    a: "Yes. In India, a proprietor can legally use their residential address as the registered commercial place of business for Udyam MSME, GSTIN, and municipal trade licensing. You will need an electricity bill or water bill under your or your parents' name, accompanied by a signed No-Objection Certificate (NOC).",
  },
  {
    q: "Is it legally compulsory to register a trade name with the government?",
    a: "There is no central proprietorship charter authority in India. However, to legally transact, open a current bank account, and invoice clients, you must obtain at least two government registrations carrying your trade name (such as Udyam MSME Certificate and GST Registration or Municipal Shop & Establishment license).",
  },
  {
    q: "Can I protect my proprietorship trade name from being copied by competitors?",
    a: "Yes, by filing an official Trademark application under the Trade Marks Act, 1999 with the Controller General of Patents, Designs and Trade Marks (IP India). Registering a trademark gives you exclusive statutory nationwide ownership over the brand name, logo, or tagline.",
  },
  {
    q: "What is the difference between an individual PAN and a proprietorship PAN?",
    a: "There is zero legal difference. Because a sole proprietorship is not a distinct legal entity, the Indian Income Tax Department does not issue a separate PAN for the firm. All business income, advance taxes, and capital gains are computed on the proprietor's individual 10-digit alphanumeric PAN.",
  },
  {
    q: "Why do banks insist on two documents to open a current account?",
    a: "Under the Reserve Bank of India (RBI) Master Direction on Know Your Customer (KYC), banks must verify the legal existence and active commercial activity of unincorporated proprietorship firms through two independent statutory registrations (e.g., GST Registration Certificate, Udyam MSME Certificate, Shop Act License, or FSSAI License).",
  },
  {
    q: "Can a foreigner or Non-Resident Indian (NRI) start a sole proprietorship in India?",
    a: "No. Under the Foreign Exchange Management Act (FEMA) regulations, foreign nationals, Persons of Indian Origin (PIO), and Non-Resident Indians (NRIs) cannot establish a sole proprietorship without prior approval from the Reserve Bank of India (RBI). NRIs are advised to incorporate a Private Limited Company or LLP instead.",
  },
  {
    q: "What are the advance tax payment deadlines for a sole proprietor?",
    a: "If your calculated income tax liability exceeds ₹10,000 for the financial year, you must pay advance tax in four quarterly installments: 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. If opted for Presumptive Taxation under Section 44AD, 100% can be remitted by March 15.",
  },
  {
    q: "Can I hire full-time employees in a sole proprietorship firm?",
    a: "Yes. A sole proprietorship can recruit any number of salaried employees, apprentices, or independent contractors. If you employ 10 or more workers, you may need to register under the ESIC Act, and if you employ 20 or more staff, EPF (Employees' Provident Fund) registration becomes mandatory.",
  },
  {
    q: "How can I convert my sole proprietorship into a Private Limited Company later?",
    a: "Conversion is achieved by incorporating a new Private Limited Company and executing a formal Business Transfer Agreement (BTA) or slump sale under Section 47(xiv) of the Income Tax Act. All assets, contracts, and liabilities are transferred without attracting capital gains tax, provided the proprietor holds at least 50% voting rights for 5 years.",
  },
  {
    q: "What happens to the business debts if the sole proprietor passes away?",
    a: "Because there is no limited liability, any unpaid business liabilities, bank overdrafts, or statutory dues become claims against the deceased proprietor's estate. Legal heirs inherit both the assets and the corresponding liabilities up to the net value of the inherited estate.",
  },
];

export default function HowToStartProprietorshipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ProprietorshipGuideLayout
      currentSlug="how-to-start-a-proprietorship-stepbystep-guide"
      title="How to Start a Proprietorship: A Step-by-Step Guide"
      breadcrumbLabel="How to Start Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          Starting your commercial journey as a solo entrepreneur offers unmatched operational
          agility, instant decision-making authority, and minimal initial capitalization.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          This definitive operational guide details every critical step—from brand clearance and state
          permits to tax registration, RBI-compliant current banking, and comprehensive risk mitigation.
        </p>
      </section>

      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding the Proprietorship Model in India
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          A sole proprietorship is a business wholly owned, governed, and capitalized by a single individual.
          Because Indian law does not distinguish between the entrepreneur and their commercial entity, all
          revenues, contractual rights, and statutory duties accrue directly to the proprietor. This structure
          serves as the entry-level vehicle of choice for independent consultants, trade merchants, retail
          operators, digital creators, and neighborhood boutique service providers across the country.
        </p>
        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
          <strong className="text-blue-900 font-semibold block mb-1">
            Core Regulatory Principle:
          </strong>
          Unlike a Private Limited Company or LLP registered under the Ministry of Corporate Affairs (MCA),
          a proprietorship requires no certificate of incorporation. Its commercial legitimacy is derived
          through statutory certificates such as Udyam MSME, GSTIN, and municipal Shop & Establishment licenses.
        </div>
      </section>

      {/* Section 2: 6 Steps to Start */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
              2. Six Practical Steps to Launch Your Proprietorship
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
              Execute these sequential stages to establish a bulletproof, legally compliant commercial enterprise.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 shrink-0 self-start sm:self-auto">
            Step-by-Step Blueprint
          </span>
        </div>

        <div className="space-y-4">
          {STARTUP_STEPS.map((item, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (item.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (item.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (item.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (item.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            } else if (item.color === "cyan") {
              hoverClasses = "hover:border-cyan-500 hover:shadow-cyan-500/10 group-hover:text-cyan-950";
            } else if (item.color === "amber") {
              hoverClasses = "hover:border-amber-500 hover:shadow-amber-500/10 group-hover:text-amber-950";
            }

            return (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-3 ${hoverClasses}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-800 shrink-0">
                      Step {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0 hidden sm:inline-block">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  {item.summary}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-900 leading-relaxed font-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Pros and Cons */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Advantages and Disadvantages of a Sole Proprietorship
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Before committing personal capital, carefully weigh the inherent strategic trade-offs of the sole proprietorship vehicle:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {PROS_AND_CONS.map((item, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (item.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (item.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (item.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (item.color === "cyan") {
              hoverClasses = "hover:border-cyan-500 hover:shadow-cyan-500/10 group-hover:text-cyan-950";
            } else if (item.color === "rose") {
              hoverClasses = "hover:border-rose-500 hover:shadow-rose-500/10 group-hover:text-rose-950";
            } else if (item.color === "amber") {
              hoverClasses = "hover:border-amber-500 hover:shadow-amber-500/10 group-hover:text-amber-950";
            } else if (item.color === "orange") {
              hoverClasses = "hover:border-orange-500 hover:shadow-orange-500/10 group-hover:text-orange-950";
            } else if (item.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                      item.type === "pro"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : "bg-rose-100 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {item.type === "pro" ? "Advantage" : "Limitation"}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Blueprint for Success */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Blueprint for Long-Term Proprietorship Success
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Scaling a business without co-founders demands rigorous financial discipline and operational clarity. Implement these tested practices to safeguard and grow your business:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {SUCCESS_BLUEPRINT.map((card, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (card.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (card.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (card.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (card.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/40 to-slate-50 border border-blue-200/80 space-y-4">
          <div className="flex items-center gap-2 text-blue-900 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-blue-700" />
            <span>Launch Your Proprietorship Hassle-Free with Merrafilings</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Merrafilings manages your entire sole proprietorship setup under one roof. Our seasoned team of Chartered Accountants, Company Secretaries, and Legal Experts coordinates your Udyam MSME certification, GSTIN registration, State Trade/Shop Act licenses, and RBI-mandated bank account document bundles within 3 to 5 business days.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-blue-900">48-72 Hrs</span>
              <span className="text-[11px] text-slate-700 font-medium">Turnaround Time</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-emerald-800">100% Online</span>
              <span className="text-[11px] text-slate-700 font-medium">Paperless Process</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-purple-900">Dedicated CA</span>
              <span className="text-[11px] text-slate-700 font-medium">Compliance Expert</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">RBI Ready</span>
              <span className="text-[11px] text-slate-700 font-medium">Bank Account Kit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Comprehensive FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-sm text-slate-800 font-normal">
          Expert legal and tax answers on establishing and operating a sole proprietorship in India:
        </p>

        <div className="space-y-2.5 mt-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/60 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 hover:bg-slate-100/70 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </ProprietorshipGuideLayout>
  );
}
