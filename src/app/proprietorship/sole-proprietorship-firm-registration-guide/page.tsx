"use client";

import React, { useState } from "react";
import ProprietorshipGuideLayout from "@/components/ProprietorshipGuideLayout";
import {
  FileCheck,
  ShieldCheck,
  Building,
  CreditCard,
  Calculator,
  Receipt,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Scale,
  Calendar,
  Layers,
  ArrowRight,
  FileSpreadsheet,
  BadgeCheck,
  Briefcase,
  Users,
} from "lucide-react";

const REGISTRATION_ROADMAP = [
  {
    step: "01",
    title: "Select & Validate Your Commercial Trade Name",
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Brand Protection",
    desc: "Choose a memorable trade moniker that conveys your market offering. Conduct an exhaustive trademark search on the official IP India portal to verify the name does not infringe registered trademarks in your specific class under the Trade Marks Act, 1999.",
  },
  {
    step: "02",
    title: "Obtain Primary Government Registrations (Udyam & Shop Act)",
    icon: <FileCheck className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Legal Existence",
    desc: "Since India has no single central proprietorship incorporation certificate, you establish formal business status by securing a Central Udyam MSME Registration and your State/Municipal Shop and Establishment Act License (Gumasta / Trade License).",
  },
  {
    step: "03",
    title: "Apply for GSTIN and TAN Tax Identifiers",
    icon: <Calculator className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Indirect Tax",
    desc: "Enroll for Goods and Services Tax (GSTIN) on the GST portal to conduct interstate sales, list on e-commerce marketplaces (Amazon/Flipkart), or if turnover crosses ₹40 Lakhs (goods) or ₹20 Lakhs (services). Apply for TAN if deducting TDS.",
  },
  {
    step: "04",
    title: "Secure Industry & Sector-Specific Regulatory Permits",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Sector Clearances",
    desc: "Obtain specific statutory licenses mandatory for your field: FSSAI Food Safety License for restaurants/cloud kitchens, Drug License for pharmaceuticals, Import Export Code (IEC) from DGFT for global trade, or State Pollution Control Board NOC.",
  },
  {
    step: "05",
    title: "Open a Business Current Bank Account (RBI Mandate)",
    icon: <CreditCard className="w-5 h-5 text-cyan-600" />,
    color: "cyan",
    badge: "RBI KYC Compliant",
    desc: "Submit the proprietor's PAN card, address proof, and two government registrations issued in the firm's trade name to open an active commercial current account. This satisfies the RBI 2-document verification mandate for unincorporated entities.",
  },
];

const COMPLIANCE_PILLARS = [
  {
    category: "Income Tax Compliance",
    icon: <Receipt className="w-5 h-5 text-blue-600" />,
    color: "blue",
    obligations: [
      {
        title: "Annual Income Tax Return (ITR-3 or ITR-4)",
        detail:
          "File Form ITR-3 (regular business P&L and Balance Sheet) or Form ITR-4 Sugam (Presumptive Taxation under Section 44AD/44ADA) by July 31 (non-audit) or October 31 (tax audit cases).",
      },
      {
        title: "Quarterly Advance Tax Payments",
        detail:
          "Pay advance tax in four installments: 15% (June 15), 45% (Sept 15), 75% (Dec 15), and 100% (March 15). Presumptive filers can pay 100% directly by March 15 under Section 211.",
      },
      {
        title: "Tax Audit under Section 44AB",
        detail:
          "Compulsory tax audit by an independent Chartered Accountant if business turnover exceeds ₹1 Crore (or ₹10 Crore if digital transactions exceed 95%), or ₹50 Lakh for professionals.",
      },
    ],
  },
  {
    category: "GST & Indirect Tax Obligations",
    icon: <Calculator className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    obligations: [
      {
        title: "Monthly Invoicing & GSTR-1 Outward Supply Return",
        detail:
          "Report all B2B sales and interstate B2C sales by the 11th of each month (or quarterly under the QRMP scheme) via the GST portal.",
      },
      {
        title: "GSTR-3B Summary & Tax Payment",
        detail:
          "Reconcile Input Tax Credit (ITC) with GSTR-2B and remit monthly GST liabilities by the 20th of the following month to avoid 18% per annum statutory interest.",
      },
      {
        title: "Annual Return (GSTR-9)",
        detail:
          "File comprehensive annual GST return by December 31 following the close of the financial year if turnover exceeds ₹2 Crore.",
      },
    ],
  },
  {
    category: "TDS, Labor & State Obligations",
    icon: <Users className="w-5 h-5 text-purple-600" />,
    color: "purple",
    obligations: [
      {
        title: "TDS Deduction & Filing (Quarterly 24Q / 26Q)",
        detail:
          "Deduct TDS on contractor payments (Section 194C), professional fees (Section 194J), and commercial rent (Section 194I) if subject to tax audit in the preceding fiscal year.",
      },
      {
        title: "EPF and ESIC Registrations",
        detail:
          "Mandatory EPF registration upon reaching 20 employees and ESIC registration upon reaching 10 employees earning up to ₹21,000 monthly.",
      },
      {
        title: "State Professional Tax (P-Tax)",
        detail:
          "Pay monthly/annual state professional tax on employer and employee wages in states where P-Tax legislation applies (e.g., Maharashtra, Karnataka, West Bengal, Tamil Nadu).",
      },
    ],
  },
];

const ADVANTAGES_CARD = [
  {
    title: "Swift 48-Hour Setup",
    icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "No ROC filings, no government incorporation stamp duties, and zero requirement for drafting complex Memorandum and Articles of Association.",
  },
  {
    title: "Zero Corporate Dividend Tax",
    icon: <Scale className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Profits are withdrawn by the proprietor without attracting corporate dividend distribution taxes or double taxation surcharges.",
  },
  {
    title: "Lowest Ongoing Compliance Overhead",
    icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Exempt from filing MCA annual returns (Form AOC-4, MGT-7), holding board meetings, or maintaining secretarial statutory books.",
  },
  {
    title: "100% Unilateral Governance",
    icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "You retain sole ownership of all commercial assets, client relationships, and business profits without interference from minority partners.",
  },
];

const FAQS = [
  {
    q: "Is there an official government certificate called 'Sole Proprietorship Registration Certificate'?",
    a: "No. The Government of India does not issue a standalone 'Proprietorship Registration Certificate'. Instead, legal recognition is established through tax and municipal registrations such as the Udyam MSME Registration Certificate, GSTIN Certificate, and State Shop & Establishment Act License.",
  },
  {
    q: "Can I register a sole proprietorship firm without a commercial office space?",
    a: "Yes. You can operate legally from your residential premises. The bank and tax authorities will accept an electricity bill or municipal tax receipt in your or your family member's name, accompanied by a signed No-Objection Certificate (NOC) and rent agreement if rented.",
  },
  {
    q: "What is the penalty for not filing GST returns on time for a proprietorship firm?",
    a: "Late filing attracts a statutory penalty of ₹50 per day (₹20 per day for NIL returns), subject to a maximum cap, alongside penal interest of 18% per annum calculated on the outstanding tax liability from the due date until the actual date of payment.",
  },
  {
    q: "Do I need a separate PAN card for my registered firm?",
    a: "No. The proprietor's personal PAN is used for the firm. The Income Tax Department treats the proprietor and the proprietorship firm as a single taxable unit.",
  },
  {
    q: "Can I change my proprietorship firm's trade name later?",
    a: "Yes. You can alter your trade name by updating your Udyam MSME profile, amending your GST registration details via the non-core field amendment on the GST portal, and informing your bank with an updated board resolution/declaration.",
  },
  {
    q: "Is Presumptive Taxation under Section 44AD available to all proprietorships?",
    a: "Section 44AD is available to resident sole proprietors engaged in trading, retailing, manufacturing, or wholesale business with turnover up to ₹3 Crore (if 95% of receipts are non-cash). Professionals (doctors, engineers, lawyers, CAs, IT consultants) can claim presumptive tax under Section 44ADA up to ₹75 Lakh turnover.",
  },
  {
    q: "Can my proprietorship firm hire foreign employees or freelancers?",
    a: "Yes. You can engage foreign freelancers or consultants. However, you must comply with RBI FEMA regulations, obtain an Import Export Code (IEC) if receiving cross-border services, and withhold applicable TDS under Section 195 with Form 15CA/15CB certification from a Chartered Accountant.",
  },
  {
    q: "What happens to the firm's registrations if I decide to shut down the business?",
    a: "You must systematically surrender and cancel all registrations: surrender your GSTIN through Form GST REG-16, cancel your Shop & Establishment license with the local municipal ward, deregister your Udyam MSME number, settle all vendor liabilities, and close the commercial current bank account.",
  },
  {
    q: "How can I convert my registered proprietorship firm into a Private Limited Company?",
    a: "You can convert by incorporating a new Private Limited Company and executing a formal Business Transfer Agreement (BTA) or slump sale under Section 47(xiv) of the Income Tax Act. All assets, contracts, and vendor relationships transfer to the new corporate entity without attracting capital gains tax.",
  },
  {
    q: "What documents does Merrafilings need to register my sole proprietorship firm?",
    a: "We only need: (1) Proprietor's PAN card, (2) Aadhaar card, (3) Passport-size photo, (4) Proof of business address (electricity bill/property tax receipt), and (5) Signed No-Objection Certificate (NOC) or rent agreement. Our team handles all portal filings and drafting.",
  },
];

export default function SoleProprietorshipFirmRegistrationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ProprietorshipGuideLayout
      currentSlug="sole-proprietorship-firm-registration-guide"
      title="Sole Proprietorship Firm Registration Guide"
      breadcrumbLabel="Firm Registration Guide"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          Registering a sole proprietorship firm is the most direct, economical pathway to establish
          a legally recognized commercial entity in India.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          This authoritative guide provides an in-depth roadmap covering registration prerequisites,
          tax registrations, RBI-compliant current banking, ongoing statutory compliance calendars, and
          seamless future conversion pathways.
        </p>
      </section>

      {/* Section 1: Legal Framework */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Sole Proprietorship Firm in India?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          In Indian commercial law, a sole proprietorship is an unincorporated enterprise owned and
          operated by an individual. The law does not draw a legal distinction between the owner and the
          business. Consequently, the firm does not possess an independent corporate charter like a
          Private Limited Company. Instead, its legal existence and commercial legitimacy are established
          through a constellation of statutory registrations issued under central, state, and municipal
          statutes—including Udyam MSME, GSTIN, and the State Shop & Establishment Act.
        </p>
        <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
          <strong className="text-indigo-950 font-semibold block mb-1">
            Why Formal Firm Registration is Crucial:
          </strong>
          While an informal business can operate on a cash basis, formal firm registration is mandatory
          to open a commercial current bank account, invoice corporate and B2B clients, register on
          e-commerce marketplaces, secure government MSME subsidies, and protect your brand identity under
          trademark law.
        </div>
      </section>

      {/* Section 2: Core Advantages */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Core Strategic Advantages of a Registered Proprietorship
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Discover why millions of Indian merchants, consultants, and professionals choose the sole proprietorship firm model:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {ADVANTAGES_CARD.map((card, idx) => {
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

      {/* Section 3: 5-Step Registration Roadmap */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
              3. Five-Step Operational Roadmap to Firm Registration
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
              Follow these sequential phases to register your sole proprietorship firm with zero regulatory friction.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 shrink-0 self-start sm:self-auto">
            Operational Blueprint
          </span>
        </div>

        <div className="space-y-3 mt-3">
          {REGISTRATION_ROADMAP.map((item, idx) => {
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
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
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
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Ongoing Compliance Obligations */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            4. Ongoing Statutory Compliance & Legal Obligations
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
            Registration is only the starting point. Maintain total compliance with Indian tax authorities and statutory bodies:
          </p>
        </div>

        <div className="space-y-4">
          {COMPLIANCE_PILLARS.map((pillar, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (pillar.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (pillar.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (pillar.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            }

            return (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-3.5 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-950 transition-colors">
                    {pillar.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pillar.obligations.map((item, obIdx) => (
                    <div
                      key={obIdx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200/80 space-y-1.5"
                    >
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-800 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: Future Growth & Conversion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Conversion Roadmap: Upgrading to Private Limited Company
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          As business turnover expands, third-party liability multiplies, or outside venture capital is
          sought, maintaining an unincorporated proprietorship becomes a bottleneck. Indian law allows a
          smooth, tax-neutral conversion into a Private Limited Company:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-blue-400 transition-all duration-200">
            <span className="text-xs font-bold text-blue-700 block">Phase 1</span>
            <h4 className="text-sm font-semibold text-slate-950">Company Incorporation</h4>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Incorporate a new corporate entity with the MCA, drafting MOA/AOA clauses explicitly authorizing the acquisition of the sole proprietorship firm.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-emerald-400 transition-all duration-200">
            <span className="text-xs font-bold text-emerald-700 block">Phase 2</span>
            <h4 className="text-sm font-semibold text-slate-950">Business Transfer Agreement</h4>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Execute a Slump Sale Agreement under Section 47(xiv) of the Income Tax Act, transferring all firm assets, goodwill, and liabilities to the company.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-purple-400 transition-all duration-200">
            <span className="text-xs font-bold text-purple-700 block">Phase 3</span>
            <h4 className="text-sm font-semibold text-slate-950">Statutory Novation</h4>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Novate customer contracts, transfer vendor leases, assign registered trademarks, update GST portal records, and migrate bank accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Merrafilings Fast Track Banner */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50 border border-indigo-200/80 space-y-4">
          <div className="flex items-center gap-2 text-indigo-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-indigo-700" />
            <span>Merrafilings End-to-End Firm Registration Support</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Establish your sole proprietorship firm with complete peace of mind. Our team of senior Chartered Accountants and Company Secretaries manages your trademark clearance, Udyam MSME certificate, GSTIN allotment, municipal Shop Act license, and RBI-mandated bank account dossier within 48 to 72 hours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-indigo-100 text-center">
              <span className="block text-lg font-bold text-indigo-950">48-72 Hrs</span>
              <span className="text-[11px] text-slate-700 font-medium">Express Processing</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-indigo-100 text-center">
              <span className="block text-lg font-bold text-emerald-800">100% Digital</span>
              <span className="text-[11px] text-slate-700 font-medium">Zero Office Visits</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-indigo-100 text-center">
              <span className="block text-lg font-bold text-blue-900">Dedicated CA</span>
              <span className="text-[11px] text-slate-700 font-medium">Compliance Advisory</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-indigo-100 text-center">
              <span className="block text-lg font-bold text-purple-900">RBI Ready</span>
              <span className="text-[11px] text-slate-700 font-medium">Bank Dossier Kit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-sm text-slate-800 font-normal">
          Common queries regarding sole proprietorship firm registration and legal compliance:
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
