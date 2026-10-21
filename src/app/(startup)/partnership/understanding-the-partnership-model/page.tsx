"use client";

import React, { useState } from "react";
import PartnershipGuideLayout from "@/components/PartnershipGuideLayout";
import {
  Users2,
  Scale,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Briefcase,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Layers,
  FileCheck2,
  Handshake,
  Clock,
  Compass,
  CheckCircle2,
  Building,
  Target,
  BadgePercent,
  Receipt,
  Award,
} from "lucide-react";

const PARTNERSHIP_TYPES = [
  {
    title: "General Partnership (GP)",
    icon: <Users2 className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Unlimited Liability",
    desc: "Governed by the Indian Partnership Act, 1932. All partners hold joint decision-making authority and carry joint and several unlimited personal liability. If business assets fall short during insolvency, personal property of any partner can be attached to settle firm debts.",
  },
  {
    title: "Limited Liability Partnership (LLP)",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Limited Liability",
    desc: "A corporate hybrid governed by the Limited Liability Partnership Act, 2008 and registered with the Ministry of Corporate Affairs (MCA). Offers limited liability protection restricted strictly to agreed capital contribution, shielding personal assets from debts incurred by co-partners.",
  },
  {
    title: "Partnership at Will",
    icon: <Clock className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Flexible Duration",
    desc: "Formed under Section 7 of the Indian Partnership Act without any fixed duration or predetermined termination event. Any partner can legally dissolve the partnership at any time simply by serving written notice to all other partners.",
  },
  {
    title: "Particular Partnership",
    icon: <Target className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Project-Specific",
    desc: "Established under Section 8 for a distinct project, venture, or commercial undertaking (such as constructing a specific building or executing a joint import consignment). The firm dissolves automatically upon completion of the venture.",
  },
];

const ADVANTAGES = [
  {
    title: "Shared Management & Responsibilities",
    icon: <Handshake className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Synergy",
    desc: "Operational responsibilities are distributed among co-founders based on their respective core competencies, eliminating single-founder burnout and enabling superior operational oversight.",
  },
  {
    title: "Combined Financial Resources",
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Capital Scale",
    desc: "Partners pool personal savings, credit lines, and working capital, giving the enterprise substantially greater capitalization capacity and borrowing leverage with commercial banks than a sole proprietorship.",
  },
  {
    title: "Complementary Multi-Disciplinary Skills",
    icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Expertise",
    desc: "Unites diverse functional expertise—such as technical engineering, financial governance, vendor logistics, and enterprise sales—under a unified equity-sharing umbrella.",
  },
  {
    title: "Tax Deductible Partner Remuneration",
    icon: <Receipt className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Section 40(b)",
    desc: "Under the Indian Income Tax Act, the firm can deduct working partner salaries, bonuses, commissions, and interest on partner capital up to 12% per annum, reducing the firm's net taxable income.",
  },
];

const SUCCESS_STRATEGIES = [
  {
    title: "Draft a Comprehensive Partnership Deed",
    icon: <FileCheck2 className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Execute a detailed legal deed on state stamp paper clearly stipulating capital contributions, profit/loss sharing ratios, partner remuneration, banking signing powers, and clear admission/retirement terms.",
  },
  {
    title: "Maintain Structured Operational Communication",
    icon: <Compass className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "Establish weekly operational standups and monthly financial review meetings with documented minutes to review cash flow runways, client receivables, and prevent miscommunication.",
  },
  {
    title: "Define Clear Authority & Functional Roles",
    icon: <Briefcase className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Assign distinct executive domains (e.g., Partner A handles client delivery and technical execution; Partner B oversees finance, taxation, and supplier negotiations) to avoid operational overlap.",
  },
  {
    title: "Incorporate Robust Crisis & Arbitration Terms",
    icon: <Scale className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "Include a mandatory arbitration clause under the Arbitration and Conciliation Act, 1996 to resolve founder disputes privately without paralyzing court litigation.",
  },
];

const CHALLENGES = [
  {
    title: "Joint & Several Unlimited Liability",
    icon: <AlertTriangle className="w-5 h-5 text-rose-600" />,
    color: "rose",
    badge: "High Risk",
    desc: "Under the doctrine of mutual agency (Section 18), every partner is both a principal and an agent for all other partners. Any commercial debt or contract executed by one partner binds the personal assets of every other partner.",
  },
  {
    title: "Co-Founder Deadlocks & Disagreements",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    color: "amber",
    badge: "Governance",
    desc: "Equal 50-50 equity stakes without a designated tie-breaker or majority voting mechanism can lead to prolonged management gridlock when partners disagree on strategic direction or capital expenditure.",
  },
  {
    title: "Lack of Perpetual Succession",
    icon: <Clock className="w-5 h-5 text-orange-600" />,
    color: "orange",
    badge: "Fragility",
    desc: "Under Section 42 of the Partnership Act, the death, insolvency, or retirement of any partner automatically dissolves a two-member general partnership unless the deed explicitly contains a continuity clause.",
  },
  {
    title: "Inability to Raise Venture Capital",
    icon: <Building className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Funding Limit",
    desc: "Traditional general partnerships cannot issue equity shares, convertible debt instruments, or employee stock options (ESOPs), making them ineligible for institutional VC funding.",
  },
];

const FAQS = [
  {
    q: "What is the legal definition of a partnership under Indian law?",
    a: "Under Section 4 of the Indian Partnership Act, 1932, a partnership is defined as the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all. It requires an agreement, business activity, profit-sharing, and mutual agency.",
  },
  {
    q: "Is it legally compulsory to register a partnership firm in India?",
    a: "Registration with the Registrar of Firms (ROF) is not legally mandatory, but unregistered firms face severe legal disabilities under Section 69 of the Act: they cannot file a lawsuit against third parties to enforce contractual rights, nor can partners sue each other or claim set-offs exceeding ₹100.",
  },
  {
    q: "How many partners are legally permitted in a general partnership firm?",
    a: "Under the Companies Act, 2013, a partnership firm must have a minimum of 2 partners. The maximum number of partners allowed in an unincorporated general partnership firm is capped at 50 partners.",
  },
  {
    q: "Can a minor become a partner in a partnership firm in India?",
    a: "Under Section 30 of the Indian Partnership Act, 1932, a minor cannot be a full partner because a minor cannot enter into a valid contract under the Indian Contract Act. However, with the consent of all existing partners, a minor can be admitted solely to the benefits of the partnership.",
  },
  {
    q: "How is a partnership firm taxed in India?",
    a: "A partnership firm is taxed as a separate legal entity under the Income Tax Act, 1961 at a flat rate of 30% plus applicable surcharge and 4% Health and Education Cess. However, the firm can claim tax deductions for interest on partner capital (up to 12% p.a.) and partner remuneration within limits prescribed under Section 40(b).",
  },
  {
    q: "What are the limits on partner salary deduction under Section 40(b)?",
    a: "For working partners, salary/bonus deductions are allowed as follows: on the first ₹3 Lakhs of book profit or in case of loss, up to ₹1,50,000 or 90% of book profit (whichever is more); on the balance book profit, up to 60% of book profit. All remuneration must be explicitly authorized in the partnership deed.",
  },
  {
    q: "What is the difference between a General Partnership and an LLP?",
    a: "A General Partnership is governed by the Indian Partnership Act, 1932, does not require MCA registration, and partners carry unlimited personal liability. An LLP is governed by the LLP Act, 2008, registered with the MCA, possesses a separate corporate legal identity, and partners enjoy limited liability restricted to their capital contribution.",
  },
  {
    q: "Can a partnership firm own immovable property in its own name?",
    a: "No. Because an unincorporated partnership firm is not a distinct legal entity, it cannot purchase or hold immovable property in its own commercial name. Real estate is registered in the joint individual names of the partners as trustees of the firm.",
  },
  {
    q: "What documents are required to draft a partnership deed?",
    a: "Drafting requires: (1) Identity proof of all partners (PAN card, Aadhaar card, Passport), (2) Address proof of partners, (3) Proposed business trade name, (4) Proof of principal business address (electricity bill/rent agreement + NOC), and (5) Capital contribution breakdown and profit-sharing percentages.",
  },
  {
    q: "How can a partnership firm be dissolved peacefully?",
    a: "A firm can be dissolved by mutual agreement of all partners, by serving written notice in a Partnership at Will, upon completion of the specific venture, or upon the death/insolvency of a partner (unless the deed specifies otherwise). Dissolution is finalized by settling creditor liabilities, liquidating assets, and submitting Form E/Notice to the Registrar of Firms.",
  },
];

export default function UnderstandingThePartnershipModelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PartnershipGuideLayout
      currentSlug="understanding-the-partnership-model"
      title="Understanding the Partnership Model"
      breadcrumbLabel="Understanding Partnership Model"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          A <strong className="font-semibold text-slate-950">Partnership</strong> represents a
          strategic collaborative alliance where two or more individuals or entities join hands to
          manage, finance, and operate a commercial venture in agreement with each other. Governed by
          the <strong className="font-semibold text-slate-950">Indian Partnership Act, 1932</strong>,
          it remains one of India&apos;s most widely adopted commercial formats due to its simplicity,
          shared management burden, and mutual sharing of profits.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          Whether you are two professionals launching a consultancy, co-founders opening a manufacturing
          unit, or family members pooling retail capital, understanding the legal nuances, structural
          variations, and statutory liabilities of the partnership model is foundational to safeguarding
          your commercial interests.
        </p>
      </section>

      {/* Section 1: Types of Partnerships */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Types of Partnerships in India: Choosing the Right Structure
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Selecting the appropriate legal variant directly influences partner liability, compliance overheads, and long-term business continuity:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {PARTNERSHIP_TYPES.map((item, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (item.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (item.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
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

      {/* Section 2: Advantages */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Strategic Advantages of the Partnership Model
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Forming a multi-partner enterprise unlocks operational synergy, pooled capital scale, and significant tax deduction advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {ADVANTAGES.map((card, idx) => {
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
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                    {card.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Establishing a Successful Partnership */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Establishing a Successful Partnership: 4 Foundational Pillars
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Successful multi-owner ventures depend on structured governance, transparency, and preemptive legal agreements:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {SUCCESS_STRATEGIES.map((strategy, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (strategy.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (strategy.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (strategy.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (strategy.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {strategy.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                    {strategy.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {strategy.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Inherent Challenges & Legal Liabilities */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Challenges in Partnerships & How to Mitigate Them
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          While partnerships offer immense speed and flexibility, unaddressed structural risks can jeopardize partner personal wealth:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {CHALLENGES.map((item, idx) => {
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
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 uppercase tracking-wider shrink-0">
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

      {/* Section 5: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-blue-50/40 to-slate-50 border border-emerald-200/80 space-y-4">
          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span>Launch Your Partnership Firm Seamlessly with Merrafilings</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Merrafilings takes the complexity out of partnership firm formation. Our corporate advocates draft robust custom partnership deeds compliant with state stamp laws, complete Registrar of Firms (ROF) Form A filings, procure the firm PAN card, and set up your commercial bank current account in 3 to 5 business days.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-emerald-950">24 Hours</span>
              <span className="text-[11px] text-slate-700 font-medium">Deed Drafting SLA</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-blue-900">ROF Registered</span>
              <span className="text-[11px] text-slate-700 font-medium">Form A Filing</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-purple-900">Firm PAN &amp; TAN</span>
              <span className="text-[11px] text-slate-700 font-medium">Direct Tax Ready</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">Zero-Balance</span>
              <span className="text-[11px] text-slate-700 font-medium">Current Bank A/C</span>
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
          In-depth legal answers regarding partnership structures and statutory compliance in India:
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
    </PartnershipGuideLayout>
  );
}
