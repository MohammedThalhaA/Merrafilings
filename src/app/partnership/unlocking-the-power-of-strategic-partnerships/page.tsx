"use client";

import React, { useState } from "react";
import PartnershipGuideLayout from "@/components/PartnershipGuideLayout";
import {
  Handshake,
  TrendingUp,
  Globe2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building,
  Target,
  Award,
  Layers,
  ArrowRight,
  Zap,
  Briefcase,
  Users2,
  Scale,
  Compass,
} from "lucide-react";

const STRATEGIC_BENEFITS = [
  {
    title: "Access to New Geographic & Demographic Markets",
    icon: <Globe2 className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Market Expansion",
    desc: "Collaborate with regional or international partners to instantly tap into established customer distributions, bypassing years of expensive localized brand building.",
  },
  {
    title: "Shared Capital Infrastructure & Technology",
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Cost Efficiency",
    desc: "Pool expensive R&D facilities, logistics networks, enterprise software licenses, and manufacturing equipment, significantly driving down unit production costs.",
  },
  {
    title: "Accelerated Product Innovation & R&D",
    icon: <Zap className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Innovation",
    desc: "Combine proprietary technologies and domain expertise from distinct industries to co-create groundbreaking products that neither entity could build alone.",
  },
  {
    title: "Substantial Risk & Downside Mitigation",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Risk Cushion",
    desc: "Entering risky new markets or launching unproven product categories becomes far safer when capital exposure and operational hazards are divided proportionally.",
  },
];

const PARTNERSHIP_VARIANTS = [
  {
    title: "Joint Ventures (JV)",
    icon: <Building className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Two or more companies establish an independent corporate legal entity (such as a Private Limited Company or LLP) for a specific long-term project, sharing equity, risks, and governance.",
  },
  {
    title: "Contractual Strategic Alliances",
    icon: <Handshake className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "Non-equity collaborative pacts where independent enterprises pool resources and cross-refer clients under detailed Service Level Agreements (SLAs) without incorporating a new company.",
  },
  {
    title: "Supply Chain & Distribution Alliances",
    icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "Long-term agreements connecting manufacturers directly with specialized logistics operators or wholesale distributors, streamlining supply velocity and inventory turns.",
  },
  {
    title: "Co-Marketing & Co-Branding Pacts",
    icon: <Award className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "Dual-brand marketing campaigns where complementary businesses combine marketing budgets to bundle products, co-sponsor industry events, and multiply social reach.",
  },
];

const SIX_STEPS = [
  {
    num: "1",
    title: "Identify & Vet Potential Partners with Due Diligence",
    desc: "Conduct thorough commercial, financial, and reputational background checks to ensure potential partners share complementary market goals and financial stability.",
  },
  {
    num: "2",
    title: "Define Clear Shared Objectives & Measurable KPIs",
    desc: "Establish transparent metrics upfront: revenue targets, customer acquisition milestones, resource allocation schedules, and timeline deadlines.",
  },
  {
    num: "3",
    title: "Evaluate Operational & Cultural Compatibility",
    desc: "Ensure leadership styles, decision-making velocities, work ethics, and long-term ethical visions harmonize to prevent friction during operational execution.",
  },
  {
    num: "4",
    title: "Negotiate Commercial Terms & Value Splits",
    desc: "Agree on capital investments, intellectual property (IP) licensing terms, revenue-sharing percentages, and expense distribution protocols.",
  },
  {
    num: "5",
    title: "Formalize Binding Legal Agreements & NDAs",
    desc: "Draft comprehensive legal agreements: Mutual Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), or formal Partnership Deeds with non-compete terms.",
  },
  {
    num: "6",
    title: "Launch Initiatives & Continually Monitor Performance",
    desc: "Deploy joint steering committees to track milestones monthly, resolve operational bottlenecks collaboratively, and adjust strategy based on market feedback.",
  },
];

const FAQS = [
  {
    q: "What is a strategic partnership agreement?",
    a: "A strategic partnership agreement is a formal, legally binding contract between two or more business entities detailing how they will share resources, technology, intellectual property, and revenue to pursue mutual commercial growth, while outlining liabilities and dispute resolution protocols.",
  },
  {
    q: "How does a strategic partnership differ from a traditional general partnership?",
    a: "A traditional partnership involves individuals co-owning a single business under the Indian Partnership Act, 1932 with joint unlimited liability. A strategic partnership often occurs between separate corporate entities (e.g., two Private Limited Companies) collaborating on a project through contracts or a Joint Venture.",
  },
  {
    q: "Why is a Non-Disclosure Agreement (NDA) critical before partnership negotiations?",
    a: "An NDA legally prevents prospective partners from misusing, leaking, or reverse-engineering proprietary trade secrets, customer lists, software algorithms, or financial data shared during exploratory partnership discussions.",
  },
  {
    q: "How is intellectual property (IP) protected in a strategic partnership?",
    a: "The agreement must clearly distinguish between 'Background IP' (intellectual property owned by each party prior to the collaboration) and 'Foreground IP' (new patents, software, or trademarks developed jointly during the venture), stipulating ownership and licensing rights.",
  },
  {
    q: "Can two partnership firms form a strategic joint venture?",
    a: "Yes. Two or more partnership firms or corporate entities can enter into a contractual joint venture or incorporate a new Special Purpose Vehicle (SPV) such as a Private Limited Company or LLP to carry out the joint commercial initiative.",
  },
  {
    q: "What should be included in the exit and termination clause of a partnership agreement?",
    a: "A robust exit clause defines termination triggers (e.g., breach of contract, insolvency, failure to achieve minimum revenue targets), notice periods (typically 30–90 days), data/IP return protocols, and liquidation or asset distribution mechanisms.",
  },
  {
    q: "How are revenues and profits typically shared in strategic alliances?",
    a: "Revenue can be split via gross margin percentages, milestone performance commissions, equity dividends (in JVs), or licensing royalty fees, depending on the relative capital, technical input, and risk contributed by each party.",
  },
  {
    q: "What happens if one partner breaches non-compete covenants?",
    a: "If the partnership agreement contains an enforceable negative covenant under the Indian Contract Act, 1872, the non-breaching party can seek immediate injunctive relief from civil courts alongside monetary liquidated damages.",
  },
  {
    q: "How do emerging technologies impact modern strategic partnerships?",
    a: "Modern partnerships leverage automated API integrations, shared cloud data lakes, AI-driven customer intelligence, and automated revenue reconciliation smart contracts, dramatically speeding up joint go-to-market cycles.",
  },
  {
    q: "How does Merrafilings assist businesses with strategic partnership contracts?",
    a: "Merrafilings provides end-to-end legal support: drafting Mutual NDAs, tailored Joint Venture Agreements, Strategic Collaboration MOUs, Partnership Deeds, and registering SPV entities with the Ministry of Corporate Affairs or state Registrar of Firms.",
  },
];

export default function UnlockingThePowerOfStrategicPartnershipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PartnershipGuideLayout
      currentSlug="unlocking-the-power-of-strategic-partnerships"
      title="Unlocking the Power of Strategic Partnerships"
      breadcrumbLabel="Strategic Partnerships"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          In an interconnected, fast-paced economy, building a high-growth business in complete isolation
          is rarely feasible. <strong className="font-semibold text-slate-950">Strategic Partnerships</strong> serve
          as high-octane growth catalysts—allowing ambitious founders and enterprises to expand market reach,
          accelerate innovation, and pool vital capital resources.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          From contractual distribution alliances to incorporated joint ventures, understanding how to
          structure, negotiate, and legally fortify strategic partnerships is essential. This strategic
          blueprint explores foundational alliance models, real-world case studies, execution methodologies,
          and essential legal protections.
        </p>
      </section>

      {/* Section 1: Why Strategic Partnerships Matter */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Strategic Partnerships Are Critical for Scalable Growth
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Collaborative alliances unlock four transformative commercial advantages that isolated operations cannot match:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {STRATEGIC_BENEFITS.map((item, idx) => {
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
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
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

      {/* Section 2: Types of Strategic Partnerships */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Common Models of Strategic Collaboration
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Different commercial objectives demand tailored partnership structures:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {PARTNERSHIP_VARIANTS.map((variant, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (variant.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (variant.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (variant.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (variant.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {variant.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                    {variant.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {variant.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: 6 Steps to Form a Strategic Partnership */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Six Steps to Establish an Enduring Strategic Alliance
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Executing a successful partnership requires systematic planning, mutual trust, and rigorous legal drafting:
        </p>

        <div className="space-y-2.5 mt-3">
          {SIX_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:border-emerald-500 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
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

      {/* Section 4: Real-World Case Studies */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Iconic Strategic Partnerships: Real-World Synergies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 hover:bg-white hover:border-blue-400 transition-all duration-200">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-950">Apple &amp; IBM</h4>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Combined Apple&apos;s intuitive iOS enterprise hardware with IBM&apos;s big data analytics and cloud backend to revolutionize enterprise mobile software.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 hover:bg-white hover:border-emerald-400 transition-all duration-200">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-950">Nike &amp; Apple</h4>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Pioneered wearable fitness tech through the Nike+iPod ecosystem, merging world-class athletic gear with synchronized digital music and workout tracking.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 hover:bg-white hover:border-purple-400 transition-all duration-200">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-950">Starbucks &amp; Spotify</h4>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Linked retail coffee loyalty with personalized digital audio streaming, giving coffee patrons direct curation power over in-store cafe playlists.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Merrafilings Legal Support */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-blue-50/40 border border-emerald-200/80 space-y-4">
          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span>Protect Your Alliance with Merrafilings Corporate Counsel</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Never embark on a strategic partnership without unassailable legal contracts. Merrafilings drafts customized Mutual NDAs, Joint Venture Agreements, Revenue-Sharing Pacts, and IP Licensing Deeds designed by corporate advocates to protect your equity and prevent future litigation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-emerald-950">Custom NDAs</span>
              <span className="text-[11px] text-slate-700 font-medium">Trade Secret Shield</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-blue-900">JV Drafting</span>
              <span className="text-[11px] text-slate-700 font-medium">Clear Equity Clauses</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-purple-900">IP Protection</span>
              <span className="text-[11px] text-slate-700 font-medium">Licensing &amp; Royalty</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">Arbitration</span>
              <span className="text-[11px] text-slate-700 font-medium">Private Dispute Resolution</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-sm text-slate-800 font-normal">
          Essential insights into structuring, contracting, and managing strategic business partnerships:
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
