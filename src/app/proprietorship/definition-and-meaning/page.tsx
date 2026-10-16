"use client";

import React, { useState } from "react";
import ProprietorshipGuideLayout from "@/components/ProprietorshipGuideLayout";
import {
  Store,
  Scale,
  AlertTriangle,
  BadgePercent,
  Zap,
  Layers,
  Receipt,
  Clock,
  Ban,
  Award,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building2,
  ShieldCheck,
  FileText,
} from "lucide-react";

const CHARACTERISTICS = [
  {
    title: "1. Single Individual Ownership",
    icon: <Store className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Solo Equity",
    desc: "Ownership rests entirely with one person. No co-owners, partners, or shareholders are involved. The proprietor exercises 100% unilateral authority over strategic direction, capital allocations, service pricing, and operational execution without needing board resolutions.",
  },
  {
    title: "2. No Separate Legal Entity",
    icon: <Scale className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Unified Persona",
    desc: "Under Indian commercial jurisprudence, the proprietor and the firm are legally one and the same. The enterprise cannot sue or be sued independently of the individual. All contracts, statutory licenses, leases, and banking relationships are executed in the proprietor's personal legal name.",
  },
  {
    title: "3. Unlimited Personal Liability",
    icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
    color: "amber",
    badge: "Risk Exposure",
    desc: "The owner bears total personal financial liability for all business debts, tort claims, supplier arrears, and statutory defaults. If business assets fall short during insolvency or legal damages, court recovery can attach personal savings, residential property, and personal vehicles.",
  },
  {
    title: "4. Complete Profit Ownership",
    icon: <BadgePercent className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "100% Retention",
    desc: "All net surplus and earnings belong exclusively to the proprietor. There are no mandatory dividend distributions, partner profit-sharing ratios, or corporate retained earnings covenants. Every rupee of operational profit translates directly into personal earnings.",
  },
  {
    title: "5. Direct Personal Responsibility",
    icon: <Zap className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Agile Leadership",
    desc: "Direct hands-on governance where the proprietor oversees customer relations, supplier negotiations, employee management, and statutory tax compliance. Eliminates bureaucratic gridlock and allows instant strategic pivots.",
  },
  {
    title: "6. Informal Organizational Structure",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Zero Red Tape",
    desc: "Free from procedural formalities like convening Annual General Meetings (AGMs), filing board minutes, passing special resolutions, or maintaining formal statutory registers required under the Companies Act, 2013.",
  },
  {
    title: "7. Simple Pass-Through Tax Treatment",
    icon: <Receipt className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Individual Slabs",
    desc: "Business profits are treated as personal income of the proprietor and taxed at individual income tax slab rates (under Old or New Tax Regime). No double dividend distribution tax, with eligibility for Section 44AD presumptive taxation up to ₹3 Crore turnover.",
  },
  {
    title: "8. Easy Formation & Minimal Compliance",
    icon: <Clock className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Fast Launch",
    desc: "No incorporation certificate from the Registrar of Companies (ROC) is required. Registration is established simply by obtaining local business proof: Udyam MSME, GSTIN, and municipal Shop & Establishment Act registration.",
  },
  {
    title: "9. Lack of Perpetual Succession",
    icon: <Ban className="w-5 h-5 text-rose-600" />,
    color: "rose",
    badge: "No Perpetuity",
    desc: "The existence of the firm is tied directly to the proprietor's life and mental capacity. In the event of death, severe incapacitation, or bankruptcy, the firm automatically dissolves legally, requiring heirs to obtain fresh licenses to continue operations.",
  },
  {
    title: "10. Personal Reputation as Brand Equity",
    icon: <Award className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Trust Anchor",
    desc: "The goodwill, credit score, and commercial standing of the enterprise are indistinguishable from the proprietor's individual integrity. Financial institutions assess loan underwriting based primarily on the proprietor's personal CIBIL score and personal tax track record.",
  },
];

const FAQS = [
  {
    q: "What is the legal definition of a sole proprietorship in India?",
    a: "Under Indian law, a sole proprietorship is an unincorporated commercial enterprise owned, financed, and controlled by a single natural person. It has no distinct legal personality separate from its proprietor, meaning the owner and the business entity are legally identical in all liabilities, assets, and tax assessments.",
  },
  {
    q: "What are the primary characteristics of a sole proprietorship?",
    a: "The primary characteristics include single individual ownership, absence of a separate legal entity, unlimited personal liability for debts, 100% profit and loss ownership, direct operational responsibility, pass-through individual taxation, minimal regulatory filings, and lack of perpetual succession.",
  },
  {
    q: "How does a sole proprietorship differ from a partnership firm?",
    a: "A sole proprietorship is owned and funded by one individual who absorbs all profits and risks alone. A partnership requires a minimum of two individuals operating under a formal Partnership Deed governed by the Indian Partnership Act, 1932, sharing profits, management responsibilities, and mutual agency.",
  },
  {
    q: "Why do Indian entrepreneurs choose a sole proprietorship over an LLP or Private Limited Company?",
    a: "Entrepreneurs choose a sole proprietorship for its rock-bottom formation costs, absolute decision-making autonomy, complete privacy of financial accounts (no public MCA filings), zero mandatory statutory audit requirements below ₹1 Crore turnover, and simple pass-through taxation.",
  },
  {
    q: "What does unlimited personal liability mean for a sole proprietor?",
    a: "Unlimited liability means that if the business accumulates unpaid loans, supplier defaults, or consumer court damage decrees, creditors have the legal right under the Civil Procedure Code to attach and auction the proprietor's personal bank accounts, jewelry, vehicles, and real estate to recover dues.",
  },
  {
    q: "How is income tax calculated and filed for a sole proprietorship in India?",
    a: "A proprietorship does not possess a separate PAN card; it uses the proprietor's personal PAN. Business net profit is declared on Form ITR-3 (or Form ITR-4 under the Section 44AD presumptive scheme) and taxed according to personal income tax slab rates rather than flat corporate tax rates.",
  },
  {
    q: "What impact does a proprietor's personal reputation have on commercial operations?",
    a: "Because the business has no separate corporate credit rating, suppliers, vendors, and commercial banks evaluate creditworthiness solely on the proprietor's personal CIBIL score, personal asset net worth, and individual banking discipline.",
  },
  {
    q: "Does a sole proprietorship have perpetual succession?",
    a: "No. Unlike registered companies where ownership shares transfer smoothly upon death, a sole proprietorship legally ceases upon the owner's death or permanent incapacitation. Heirs cannot automatically inherit the existing GSTIN or firm licenses and must apply afresh.",
  },
  {
    q: "Why is sole proprietorship ideal for service-based businesses and freelancers?",
    a: "Service providers, IT consultants, designers, coaches, and digital agency owners rely on their own personal skill and client relationships. A proprietorship allows them to bill global and domestic clients with zero corporate governance overheads and monetize profits instantly.",
  },
  {
    q: "Can a sole proprietorship be converted into a Private Limited Company or LLP later?",
    a: "Yes. As revenues grow and external venture capital or limited liability protection is needed, a sole proprietorship can be smoothly converted into a One Person Company (OPC), Private Limited Company, or LLP via a Business Transfer Agreement (slump sale) under Section 47(xiv) of the Income Tax Act.",
  },
];

export default function DefinitionAndMeaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ProprietorshipGuideLayout
      currentSlug="definition-and-meaning"
      title="Sole Proprietorship Definition and Features in India"
      breadcrumbLabel="Definition & Meaning"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Overview Intro */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          A <strong className="font-semibold text-slate-950">Sole Proprietorship</strong> represents the most foundational and widely adopted business structure in India. It is an unincorporated commercial enterprise owned, operated, and controlled by a single individual who assumes all operational rights, commercial gains, and financial liabilities.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          For solo entrepreneurs, freelancers, local retail traders, and boutique consultancy firms, understanding the precise statutory meaning and operational characteristics of a sole proprietorship is critical before committing capital. Unlike incorporated corporate vehicles like Private Limited Companies or LLPs, a proprietorship offers zero bureaucratic red tape, complete autonomy, and immediate market entry.
        </p>
      </section>

      {/* Section 1: Legal Meaning & Nature */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is the Statutory Meaning of a Sole Proprietorship in India?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Under Indian jurisprudence, there is no separate governing statute solely titled the &quot;Sole Proprietorship Act.&quot; Instead, a proprietorship is governed by general commercial statutes including the <strong className="font-semibold text-slate-950">Indian Contract Act, 1872</strong>, the <strong className="font-semibold text-slate-950">Income Tax Act, 1961</strong>, the <strong className="font-semibold text-slate-950">Central Goods and Services Tax (CGST) Act, 2017</strong>, and state-specific <strong className="font-semibold text-slate-950">Shops and Commercial Establishments Acts</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm group-hover:text-emerald-800 transition-colors">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
              <span>Identity of the Enterprise</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
              The firm possesses no distinct corporate veil. The business operates under the owner&apos;s personal PAN card. While it may adopt a distinctive trade name (e.g., &quot;Merra Apex Consulting&quot;), legally that trade name is merely an alias for the proprietor.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:text-blue-800 transition-colors">
              <FileText className="w-4.5 h-4.5 text-blue-600" />
              <span>Capital &amp; Assets Ownership</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
              All commercial machinery, stock-in-trade, leasehold premises, and bank balances are the absolute personal property of the proprietor. No shares are issued, and no capital dilution is possible without converting to a partnership or company.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 10 Core Characteristics */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 10 Primary Characteristics of a Sole Proprietorship
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          The following ten foundational characteristics define how a sole proprietorship functions in day-to-day legal, operational, and financial environments:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {CHARACTERISTICS.map((item, idx) => {
            const hoverBorderMap: Record<string, string> = {
              emerald: "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-800",
              blue: "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-800",
              purple: "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-800",
              indigo: "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-800",
              amber: "hover:border-amber-500 hover:shadow-amber-500/10 group-hover:text-amber-800",
              rose: "hover:border-rose-500 hover:shadow-rose-500/10 group-hover:text-rose-800",
            };
            const hoverClasses = hoverBorderMap[item.color] || "hover:border-emerald-500 hover:shadow-emerald-500/10";

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-2.5 ${hoverClasses}`}
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

      {/* Section 3: Comparative Analysis Matrix */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Comparative Analysis: Proprietorship vs Other Business Structures
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Understanding the strategic trade-offs between a Sole Proprietorship and incorporated legal models in India:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-emerald-800">Sole Proprietorship</th>
                <th className="py-3 px-4">Partnership Firm</th>
                <th className="py-3 px-4">Limited Liability Partnership (LLP)</th>
                <th className="py-3 px-4">Private Limited Company</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Governing Law</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Unincorporated / Common Law</td>
                <td className="py-3.5 px-4">Partnership Act, 1932</td>
                <td className="py-3.5 px-4">LLP Act, 2008</td>
                <td className="py-3.5 px-4">Companies Act, 2013</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Number of Members</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Exactly 1</td>
                <td className="py-3.5 px-4">2 to 50</td>
                <td className="py-3.5 px-4">Min 2, No maximum</td>
                <td className="py-3.5 px-4">Min 2, Max 200</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Liability Protection</td>
                <td className="py-3.5 px-4 text-rose-700 font-medium">Unlimited Personal Liability</td>
                <td className="py-3.5 px-4 text-rose-700 font-medium">Unlimited &amp; Joint</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Limited to Agreed Capital</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Limited to Unpaid Shares</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Separate Legal Entity</td>
                <td className="py-3.5 px-4 font-medium text-rose-700">No</td>
                <td className="py-3.5 px-4">No</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Yes (Body Corporate)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Yes (Artificial Person)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Tax Rate Structure</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Individual Slabs (Up to 30%)</td>
                <td className="py-3.5 px-4">Flat 30% + Surcharge</td>
                <td className="py-3.5 px-4">Flat 30% + Surcharge</td>
                <td className="py-3.5 px-4">Flat 22% / 25% + Cess</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Annual ROC Filings</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Zero ROC Compliance</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Zero ROC Compliance</td>
                <td className="py-3.5 px-4">Form 8 &amp; Form 11 (Mandatory)</td>
                <td className="py-3.5 px-4">AOC-4, MGT-7, Audit (Mandatory)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Distinctive Features in Indian Business Environment */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Sole Proprietorship in India&apos;s Business Ecosystem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <h3 className="font-semibold text-slate-950 text-sm group-hover:text-emerald-800 transition-colors">
              Deep Cultural Alignment with Self-Employment
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              India boasts over 63 million MSMEs, of which over 90% operate as sole proprietorships. This reflects the deep cultural pride in independent self-employment and autonomous generational trade.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <h3 className="font-semibold text-slate-950 text-sm group-hover:text-emerald-800 transition-colors">
              Access to Priority Sector Lending &amp; MUDRA Loans
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Proprietors with active Udyam certificates can access government-subsidized collateral-free loans under the Pradhan Mantri MUDRA Yojana (Shishu, Kishore, and Tarun schemes up to ₹10 Lakhs).
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Why Choose Merrafilings for Your Proprietorship Setup?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 mb-2" />
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm group-hover:text-emerald-800 transition-colors mb-1">
              Complete Digital Setup
            </h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              We obtain your Udyam MSME, GST registration, and state Shop Act certificate with zero physical office visits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 mb-2" />
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm group-hover:text-blue-800 transition-colors mb-1">
              Current Account Approval
            </h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              We coordinate with leading national banks (HDFC, ICICI, SBI) to ensure your business current account satisfies RBI KYC guidelines seamlessly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4.5 h-4.5 text-purple-600 mb-2" />
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm group-hover:text-purple-800 transition-colors mb-1">
              Year-Round Tax Advisory
            </h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Our chartered accountants manage monthly GST returns (GSTR-1, GSTR-3B) and annual ITR-3 / ITR-4 filing with complete audit representation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Interactive FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-3xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-medium text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal border-t border-slate-100/80">
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
