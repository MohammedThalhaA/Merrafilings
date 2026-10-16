"use client";

import React, { useState } from "react";
import ProprietorshipGuideLayout from "@/components/ProprietorshipGuideLayout";
import {
  BookOpen,
  UserCheck,
  FileText,
  Zap,
  Receipt,
  ShieldAlert,
  Coins,
  Compass,
  Users2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building2,
  ArrowRight,
  ShieldCheck,
  Scale,
  Sparkles,
  AlertCircle,
  Clock,
  Target,
} from "lucide-react";

const CHARACTERISTICS = [
  {
    title: "Single Individual Ownership",
    icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Solo Founder",
    desc: "A single person owns 100% of the firm's equity, retains all operating surplus, and bears total responsibility for business liabilities, debts, and statutory mandates.",
  },
  {
    title: "Minimal Regulatory Hurdles",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Zero MCA Bureaucracy",
    desc: "Unlike corporate entities registered with the Ministry of Corporate Affairs (MCA), a proprietorship requires no DIN (Director Identification Number), name reservation approvals, or mandatory annual audits if turnover is within limits.",
  },
  {
    title: "Complete Decision-Making Autonomy",
    icon: <Zap className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Agile Leadership",
    desc: "The owner makes swift, unilateral strategic choices without holding board meetings, passing shareholder resolutions, or resolving disputes among co-founders.",
  },
  {
    title: "Pass-Through Direct Taxation",
    icon: <Receipt className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Personal Slabs",
    desc: "Profits are treated as individual income of the proprietor and taxed at personal income tax slab rates, avoiding corporate dividend distribution taxes.",
  },
];

const ADVANTAGES = [
  {
    title: "Simplicity & Low Setup Costs",
    icon: <Clock className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "Launch your business in as little as 48 to 72 hours with low initial capital and zero complex charter paperwork like Articles of Association (AOA) or Memorandums (MOA).",
  },
  {
    title: "Direct Tax Loss Offsets",
    icon: <Receipt className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Under the Indian Income Tax Act, business losses incurred in a proprietorship can be set off against taxable income from other heads (except salary), reducing your overall tax outflow.",
  },
  {
    title: "Operational Agility & Speed",
    icon: <Zap className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Test new product lines, adjust pricing structures, or switch supply chain partners overnight without having to convene shareholder committees.",
  },
  {
    title: "Absolute Financial Privacy",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "Your balance sheets, revenue numbers, and profit margins remain strictly confidential and are not publicly searchable on corporate MCA databases.",
  },
];

const DISADVANTAGES = [
  {
    title: "Unlimited Personal Liability",
    icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
    color: "rose",
    desc: "There is no corporate veil. If the business defaults on debts, bank loans, or court judgments, your personal house, car, and personal savings can be seized.",
  },
  {
    title: "Limited Capital & Funding Constraints",
    icon: <Coins className="w-5 h-5 text-amber-600" />,
    color: "amber",
    desc: "Because you cannot issue shares or equity, venture capital funds and angel networks cannot invest. Financing is restricted to personal savings and collateralized bank loans.",
  },
  {
    title: "Fragile Business Continuity",
    icon: <Compass className="w-5 h-5 text-orange-600" />,
    color: "orange",
    desc: "The life of the enterprise is tied directly to the proprietor. In the unfortunate event of the owner's death or physical incapacitation, the firm dissolves automatically.",
  },
  {
    title: "Solo Founder Skill Bottlenecks",
    icon: <Users2 className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Wearing every hat—from sales and accounting to logistics and legal compliance—can lead to operational exhaustion and slow business growth.",
  },
];

const SELF_ASSESSMENT_CRITERIA = [
  {
    title: "1. Business Scale & Operational Scope",
    icon: <Target className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Ideal for local retail stores, freelance developers, design agencies, small trading shops, and solo consultancy practices. Less suitable for scalable high-growth tech startups needing millions in venture funding.",
  },
  {
    title: "2. Financial Risk & Liability Exposure",
    icon: <Scale className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "If your operations carry low operational risk and minimal supplier debt, a proprietorship is safe. If you deal in hazardous manufacturing or high debt exposure, an LLP or Private Limited Company is essential.",
  },
  {
    title: "3. Long-Term Growth & Investment Goals",
    icon: <TrendingUpIcon className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "If you plan to grant employee stock options (ESOPs) or onboard strategic equity partners within 12 to 24 months, incorporate a Private Limited Company immediately rather than converting later.",
  },
  {
    title: "4. Industry & Tender Requirements",
    icon: <Building2 className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "Certain government tenders, enterprise vendor portals, and corporate contracts mandate that suppliers be incorporated entities (Private Limited or LLP). Verify your target clients' procurement rules.",
  },
];

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

const BEGINNER_STEPS = [
  {
    num: "1",
    title: "Choose a Unique Trade Name",
    desc: "Select a distinct business moniker and perform a comprehensive IP India trademark search to verify no identical marks exist in your commercial trademark class.",
  },
  {
    num: "2",
    title: "Register for Udyam MSME",
    desc: "Obtain an official 16-digit Udyam Registration number using your personal Aadhaar and PAN at zero government fee to validate MSME status.",
  },
  {
    num: "3",
    title: "Secure State Licenses & GSTIN",
    desc: "Acquire your municipal Shop and Establishment certificate and file for GST registration if your turnover exceeds threshold limits or you trade across states.",
  },
  {
    num: "4",
    title: "Open a Current Bank Account",
    desc: "Present your two statutory registrations (e.g., GST + Udyam) to your commercial bank to open an operational current account adhering to RBI KYC directives.",
  },
  {
    num: "5",
    title: "Obtain Commercial Insurance",
    desc: "Safeguard against unlimited liability by securing commercial general liability, asset fire insurance, and professional indemnity coverage tailored to your sector.",
  },
];

const FAQS = [
  {
    q: "What makes a sole proprietorship different from a One Person Company (OPC)?",
    a: "A sole proprietorship is an unincorporated business without a separate legal identity, where the owner carries unlimited personal liability. An OPC is a corporate entity registered under the Companies Act, 2013 with the MCA, offering limited liability protection, a distinct corporate seal, and perpetual succession.",
  },
  {
    q: "Can a homemaker or student start a sole proprietorship in India?",
    a: "Yes. Any Indian citizen who is at least 18 years of age and possesses a valid PAN card, Aadhaar card, and active bank account can legally establish a sole proprietorship from anywhere in India.",
  },
  {
    q: "Do I need to maintain books of accounts if I have a small business?",
    a: "Under Section 44AA of the Income Tax Act, maintaining books of accounts is mandatory if income exceeds ₹2.5 Lakh or gross receipts exceed ₹25 Lakh in any of the 3 preceding years. However, you can opt for Presumptive Taxation under Section 44AD/44ADA to declare profits at 6%-8% (or 50% for professionals) without maintaining elaborate ledgers.",
  },
  {
    q: "How does taxation work if I also earn salary income alongside my proprietorship?",
    a: "Your net proprietorship business profits (income minus legitimate operating expenses) are added to your salary income under the respective heads of 'Profits and Gains of Business or Profession' (PGBP) and 'Salaries' on your annual ITR-3 form, and taxed at your applicable personal income slab rate.",
  },
  {
    q: "Can a sole proprietorship have branches in different states of India?",
    a: "Yes. A proprietorship can open branches across multiple states. However, you will need to apply for a separate state GST registration (GSTIN) in each state where you establish an active business place, using the same underlying PAN.",
  },
  {
    q: "Is an auditor required for a sole proprietorship?",
    a: "A statutory tax audit under Section 44AB is only mandatory if your business turnover exceeds ₹1 Crore (or ₹10 Crore if cash transactions are less than 5% of total turnover). For professionals, the tax audit limit is ₹50 Lakh (or ₹75 Lakh under Section 44ADA).",
  },
  {
    q: "Can I accept foreign payments in a sole proprietorship bank account?",
    a: "Yes. You can receive inward foreign remittances for exports or services in your business current account, provided you comply with RBI FEMA regulations and request your bank to issue a Foreign Inward Remittance Certificate (FIRC) / Electronic FIRC.",
  },
  {
    q: "What happens if my sole proprietorship incurs heavy losses?",
    a: "Business losses can be set off against other taxable heads of income (such as house property, capital gains, or other business profits) in the same financial year, or carried forward for up to 8 assessment years to offset future business profits, provided you file your ITR before the due date.",
  },
  {
    q: "Can a proprietorship be converted into a Limited Liability Partnership (LLP)?",
    a: "Yes. You can convert your proprietorship into an LLP or Private Limited Company by executing an asset transfer agreement and filing the necessary incorporation documents with the Ministry of Corporate Affairs (MCA).",
  },
  {
    q: "What documents are required to prove the existence of a proprietorship to clients?",
    a: "Clients typically verify a proprietorship through its GST Registration Certificate, Udyam MSME Registration Certificate, Municipal Shop & Establishment License, or a signed letterhead with bank account details and cancelled cheque.",
  },
];

export default function UnderstandingProprietorshipBeginnersGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ProprietorshipGuideLayout
      currentSlug="understanding-proprietorship-a-beginners-guide"
      title="Understanding Proprietorship: A Beginner's Guide"
      breadcrumbLabel="Beginner's Guide"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          Selecting your first business structure is one of the most critical decisions you will
          make as a new founder.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          This comprehensive guide covers the essential principles of sole
          proprietorships in India—examining legal definitions, key characteristics, operational benefits,
          inherent liabilities, and a practical self-assessment matrix to help you choose with confidence.
        </p>
      </section>

      {/* Section 1: What is a Proprietorship? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Proprietorship? Core Concepts Explained
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          In simple terms, a sole proprietorship is an unincorporated business structure owned, managed,
          and financed by a single individual. In the eyes of the law, the owner and the enterprise are
          indivisible. There is no corporate charter, no external board of directors, and no division of
          equity. The business operates under the personal legal identity of the proprietor, making it
          the most popular and accessible starting point for first-time entrepreneurs, solo consultants,
          and small traders across India.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal space-y-1">
          <strong className="text-slate-950 font-semibold block">
            The Fundamental Legal Reality:
          </strong>
          Because there is no separate legal entity, all assets belonging to the enterprise are legally
          your personal assets, and all debts incurred by the business are your personal debts. This creates
          both unmatched operational freedom and significant personal financial exposure.
        </div>
      </section>

      {/* Section 2: Key Characteristics */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Key Characteristics of a Sole Proprietorship
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Four cornerstone pillars define the structure and legal posture of a sole proprietorship:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {CHARACTERISTICS.map((item, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (item.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (item.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (item.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (item.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2.5 ${hoverClasses}`}
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
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                    {item.badge}
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

      {/* Section 3: Advantages & Disadvantages */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            3. Advantages vs. Disadvantages: The Founder&apos;s Dilemma
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
            A balanced overview of what makes proprietorships so attractive, alongside their critical operational limitations.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Strategic Advantages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADVANTAGES.map((item, idx) => {
                let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
                if (item.color === "emerald") {
                  hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
                } else if (item.color === "blue") {
                  hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
                } else if (item.color === "purple") {
                  hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
                } else if (item.color === "indigo") {
                  hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
                }

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-1.5 ${hoverClasses}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-3">
            <h3 className="text-sm font-bold text-rose-900 uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              Inherent Challenges & Limitations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DISADVANTAGES.map((item, idx) => {
                let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
                if (item.color === "rose") {
                  hoverClasses = "hover:border-rose-500 hover:shadow-rose-500/10 group-hover:text-rose-950";
                } else if (item.color === "amber") {
                  hoverClasses = "hover:border-amber-500 hover:shadow-amber-500/10 group-hover:text-amber-950";
                } else if (item.color === "orange") {
                  hoverClasses = "hover:border-orange-500 hover:shadow-orange-500/10 group-hover:text-orange-950";
                } else if (item.color === "purple") {
                  hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
                }

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-1.5 ${hoverClasses}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Self-Assessment Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Is a Proprietorship Right for You? Self-Assessment Matrix
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Before taking the plunge, evaluate your business vision across these four diagnostic dimensions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {SELF_ASSESSMENT_CRITERIA.map((criterion, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (criterion.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (criterion.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (criterion.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (criterion.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {criterion.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                    {criterion.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {criterion.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: Five-Step Beginner Setup */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Establishing Your Business: 5 Essential Steps
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          A high-level view of how beginners transition from an idea to a fully functioning commercial entity:
        </p>

        <div className="space-y-2.5 mt-2">
          {BEGINNER_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {s.num}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-950">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Future Conversion Path */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50 to-blue-50/50 border border-emerald-200/80 space-y-3">
          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span>The Growth Path: Upgrading to Private Limited or OPC</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            A sole proprietorship does not have to be your forever structure. When your annual revenues cross
            ₹50 Lakhs to ₹1 Crore, your commercial contracts expand, or you prepare to seek outside investment,
            Merrafilings can smoothly convert your sole proprietorship into a Private Limited Company or One Person
            Company (OPC). Through a tax-neutral slump sale agreement under Section 47(xiv) of the Income Tax Act,
            your existing brand reputation, assets, and vendor agreements carry over seamlessly.
          </p>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions for Beginners
          </h2>
        </div>
        <p className="text-sm text-slate-800 font-normal">
          Answers to common questions from first-time entrepreneurs starting out in India:
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
