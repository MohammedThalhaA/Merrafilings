"use client";

import React, { useState } from "react";
import Link from "next/link";
import LlpGuideLayout from "@/components/LlpGuideLayout";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Sparkles,
  Award,
  Building2,
  TrendingUp,
  Scale,
  Zap,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  BadgePercent,
  Receipt,
  FileCheck2,
  Briefcase,
  Users2,
  DollarSign,
  Lightbulb,
} from "lucide-react";

const CORE_ELIGIBILITY_PILLARS = [
  {
    title: "Entity Age Eligibility (Under 10 Years)",
    desc: "Your business entity must have been registered or incorporated not more than 10 years prior to the date of your DPIIT application. The clock starts ticking from the exact date stamped on your Certificate of Incorporation.",
    icon: Clock,
    color: "blue",
    badge: "10-Year Ceiling",
    accent: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleColor: "group-hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Annual Turnover Cap (≤ ₹100 Crores)",
    desc: "The total annual turnover of the startup must not have exceeded ₹100 Crores in any preceding financial year since incorporation. Crossing this threshold at any point permanently graduates the entity into an established enterprise.",
    icon: DollarSign,
    color: "emerald",
    badge: "₹100 Cr Limit",
    accent: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleColor: "group-hover:text-emerald-700",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Eligible Corporate Legal Structure",
    desc: "The enterprise must be incorporated as a Private Limited Company (Companies Act, 2013), a Limited Liability Partnership (LLP Act, 2008), or a Registered Partnership Firm (Indian Partnership Act, 1932). Sole proprietorships do not qualify.",
    icon: Building2,
    color: "purple",
    badge: "MCA / RoF Registered",
    accent: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleColor: "group-hover:text-purple-700",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Innovation & Scalability Quotient",
    desc: "The startup must actively work towards the development, commercialization, or improvement of innovative products, processes, or services, or demonstrate a highly scalable business model with proven potential for wealth and employment generation.",
    icon: Lightbulb,
    color: "amber",
    badge: "Innovation Core",
    accent: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleColor: "group-hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "Incorporate Your Entity with MCA or RoF",
    desc: "Register your business entity as a Private Limited Company or LLP through the MCA portal (SPICe+ / FiLLiP) or as a Registered Partnership Firm via the state Registrar of Firms with a stamped Partnership Deed.",
    icon: Building2,
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBoxHover: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "02",
    title: "Create Startup India Portal Profile",
    desc: "Visit the official Startup India portal (startupindia.gov.in) and register your user account using your official business email ID, setting up two-factor authorization credentials.",
    icon: Users2,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "03",
    title: "Fill the DPIIT Recognition Application Form",
    desc: "Navigate to the 'Recognition' module. Enter your corporate CIN/LLPIN, registered address, authorized representative details, board member DINs, and incorporation date.",
    icon: FileText,
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBoxHover: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "04",
    title: "Articulate Innovation, Problem & Scalability",
    desc: "Draft concise responses detailing the market problem your startup solves, the uniqueness of your solution, direct competitive advantages, and the scalable job/wealth creation blueprint.",
    icon: Sparkles,
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBoxHover: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
  {
    step: "05",
    title: "Upload Mandatory Proof Documents & Pitch Deck",
    desc: "Attach the Certificate of Incorporation, Memorandum of Association (MOA/AOA) or LLP Agreement, founder KYC, comprehensive pitch deck, website/mobile app links, and patent proof (if applicable).",
    icon: FileCheck2,
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBoxHover: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "06",
    title: "Self-Certify Compliance & Submit for Scrutiny",
    desc: "Execute mandatory self-certification confirming that the entity is not formed by splitting or reconstructing an existing business and turnover has never breached ₹100 Crores, then submit.",
    icon: ShieldCheck,
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBoxHover: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "07",
    title: "DPIIT Review & Clarification Window",
    desc: "The DPIIT verification team reviews submissions within 2 to 4 weeks. Any missing validation or innovation queries must be addressed through the portal dashboard within the stipulated deadline.",
    icon: Scale,
    color: "cyan",
    cardHover: "hover:border-cyan-500 hover:shadow-cyan-500/15 hover:bg-cyan-50/20",
    titleHover: "group-hover:text-cyan-700",
    iconBoxHover: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:bg-cyan-100/80 group-hover:border-cyan-200",
  },
  {
    step: "08",
    title: "Download DPIIT Recognition Certificate",
    desc: "Upon official approval, download the government-sealed Certificate of Recognition containing your unique DIPP registration number directly from your dashboard.",
    icon: Award,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
];

const STARTUP_BENEFITS = [
  {
    title: "3-Year Income Tax Holiday (Section 80-IAC)",
    desc: "Eligible recognized Private Limited companies and LLPs can apply for a 100% tax exemption on profits for 3 consecutive financial years out of their first 10 years of operations.",
    icon: BadgePercent,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Angel Tax Exemption (Section 56(2)(viib))",
    desc: "Complete exemption from angel tax scrutiny under Section 56(2)(viib) when issuing shares at premium above fair market value to angel investors, family offices, and venture funds.",
    icon: TrendingUp,
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBoxHover: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "80% Patent & 50% Trademark Fee Rebates",
    desc: "Substantial statutory IP discounts: 80% reduction in patent application fees and 50% discount on trademark filings, paired with fast-tracked statutory examination by IPO facilitators.",
    icon: Zap,
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBoxHover: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Exemption in Public Procurement (GeM Portal)",
    desc: "Government tenders and PSU contracts waive mandatory criteria such as Earned Money Deposits (EMD), prior minimum turnover, and previous operational experience for DPIIT startups.",
    icon: Briefcase,
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBoxHover: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Access to Seed Funding & SISFS Grants",
    desc: "Direct eligibility to apply for the Startup India Seed Fund Scheme (SISFS) offering up to ₹20 Lakhs in non-dilutive grants for proof-of-concept and up to ₹50 Lakhs in debt/convertibles.",
    icon: DollarSign,
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBoxHover: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
  {
    title: "Self-Certification Under 9 Statutory Laws",
    desc: "Startups can self-certify compliance for 6 key labour laws and 3 environmental regulations for 3 to 5 years, shielding founders from arbitrary inspector-raj physical audits.",
    icon: ShieldCheck,
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBoxHover: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
];

const FAQS = [
  {
    q: "Can an existing LLP or Partnership firm apply for Startup India recognition?",
    a: "Yes. Both Limited Liability Partnerships (LLPs) registered under the LLP Act, 2008 and Partnership Firms registered under the Indian Partnership Act, 1932 are fully eligible for DPIIT Startup India recognition, provided they are under 10 years old, their turnover has never exceeded ₹100 Crores, and they demonstrate an innovative business model. Note that for Section 80-IAC tax holiday, only Private Limited companies and LLPs are eligible.",
  },
  {
    q: "How does the 10-year age limit get calculated by the DPIIT?",
    a: "The age of the startup is calculated strictly from the date of incorporation or registration stated on your Certificate of Incorporation (issued by the MCA or Registrar of Firms) up to the current calendar date. If your entity was registered on 15th January 2018, it remains eligible until 14th January 2028, provided other criteria continue to be fulfilled.",
  },
  {
    q: "What does 'non-reconstruction or non-splitting of an existing business' mean?",
    a: "The DPIIT strictly prohibits entities formed by merely re-branding, spinning off, dissolving and re-registering, or reconstructing an already existing business. The startup must be a genuinely new entrepreneurial initiative. Converting an existing sole proprietorship or general partnership into an LLP or Pvt Ltd can be approved only if it represents a brand new technology or distinct product line with independent intellectual property.",
  },
  {
    q: "What happens if our annual turnover crosses ₹100 Crores in the 4th year?",
    a: "If the annual turnover of your recognized startup crosses ₹100 Crores in any financial year, your startup status will immediately cease from the subsequent financial year. The business will transition to standard corporate tax compliance and can no longer claim exemptions reserved exclusively for DPIIT startups.",
  },
  {
    q: "How long does it take to obtain the DPIIT Recognition Certificate?",
    a: "The typical processing time for Startup India DPIIT recognition is 2 to 4 weeks from the date of application submission. Simple, well-documented applications with clear pitch decks and tangible proof of innovation are frequently cleared within 10 to 14 business days.",
  },
  {
    q: "Is there any government fee charged for the Startup India registration on the portal?",
    a: "No. The Department for Promotion of Industry and Internal Trade (DPIIT) does not levy any official government application fee for issuing the Startup India Recognition Certificate. The entire online portal process is free from statutory fees, although professional fees apply if you engage legal experts for drafting, compliance review, and submission handling.",
  },
];

export default function StartupIndiaEligibilityProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LlpGuideLayout
      currentSlug="startup-india-registration-eligibility-process"
      title="Startup India Registration Eligibility Criteria and Process Guide"
      breadcrumbLabel="Startup India Eligibility & Process"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Secretarial & Startup Advisory Desk"
    >
      {/* Hero Overview */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DPIIT Recognition Statutory Roadmap 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1646] tracking-tight leading-snug">
          Startup India Registration: Complete Eligibility Criteria &amp; Official Process Guide
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-normal">
          The <strong className="font-semibold text-slate-950">Startup India Initiative</strong>, spearheaded by the
          Department for Promotion of Industry and Internal Trade (DPIIT), is India&apos;s flagship program designed
          to catalyze entrepreneurial innovation, fuel high-growth enterprises, and unlock transformative fiscal incentives.
          Whether you are operating an emerging Limited Liability Partnership (LLP) or a fast-scaling Private Limited entity,
          securing official DPIIT recognition provides access to 3-year income tax exemptions, angel tax immunity, patent rebates,
          and government tender preferences.
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          This comprehensive statutory guide examines the 4 foundational eligibility pillars, entity-specific qualifications,
          non-reconstruction mandates, step-by-step digital application protocol, required evidentiary records, and common
          scrutiny pitfalls to avoid.
        </p>
      </section>

      {/* 4 Pillars of Eligibility */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            1. The 4 Mandatory Eligibility Pillars for DPIIT Recognition
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          To qualify for the grant of a Startup India Recognition Certificate, your enterprise must satisfy all four of the
          following statutory conditions concurrently:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {CORE_ELIGIBILITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-2.5 ${pillar.accent}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-all ${pillar.iconBox}`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className={`text-sm font-semibold text-slate-950 transition-colors ${pillar.titleColor}`}>
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 shrink-0">
                    {pillar.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Non-Reconstruction Rule & Caution Box */}
      <section className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-semibold text-base">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Statutory Prohibition: No Splitting Up or Reconstruction</span>
        </div>
        <p className="text-xs sm:text-[13.5px] text-amber-950/90 leading-relaxed font-normal">
          Under DPIIT notification guidelines, an entity formed by the splitting up or reconstruction of a business already in
          existence shall <strong className="font-semibold text-amber-950">not</strong> be considered a &quot;Startup&quot;. If an existing
          business entity is merely converted, restructured, or separated to illegitimately claim tax holidays, the application will be
          summarily rejected, and previously claimed benefits may be clawed back with statutory penal interest.
        </p>
      </section>

      {/* Entity Comparison Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Business Entity Types &amp; Startup India Eligibility Matrix
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Not all business structures qualify for the complete suite of Startup India benefits. Review how your preferred entity compares:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-50/90 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-3 px-3.5">Business Structure</th>
                <th className="py-3 px-3.5">Governing Authority</th>
                <th className="py-3 px-3.5">DPIIT Recognition</th>
                <th className="py-3 px-3.5">Section 80-IAC Tax Holiday</th>
                <th className="py-3 px-3.5">Fundraising Suitability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Private Limited Company
                </td>
                <td className="py-3 px-3.5">MCA (Companies Act, 2013)</td>
                <td className="py-3 px-3.5 text-emerald-700 font-semibold">Fully Eligible</td>
                <td className="py-3 px-3.5 text-emerald-700 font-semibold">Fully Eligible</td>
                <td className="py-3 px-3.5">Highest (Equity &amp; VC ready)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Limited Liability Partnership (LLP)
                </td>
                <td className="py-3 px-3.5">MCA (LLP Act, 2008)</td>
                <td className="py-3 px-3.5 text-emerald-700 font-semibold">Fully Eligible</td>
                <td className="py-3 px-3.5 text-emerald-700 font-semibold">Eligible (Incorporated post-Apr 2016)</td>
                <td className="py-3 px-3.5">High (Ideal for founders &amp; partners)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  Registered Partnership Firm
                </td>
                <td className="py-3 px-3.5">Registrar of Firms (1932 Act)</td>
                <td className="py-3 px-3.5 text-emerald-700 font-semibold">Fully Eligible</td>
                <td className="py-3 px-3.5 text-rose-700 font-semibold">Ineligible</td>
                <td className="py-3 px-3.5">Moderate (Internal capital sharing)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors bg-rose-50/20">
                <td className="py-3 px-3.5 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Sole Proprietorship
                </td>
                <td className="py-3 px-3.5">Local Municipal / Shop Act</td>
                <td className="py-3 px-3.5 text-rose-700 font-semibold">Ineligible</td>
                <td className="py-3 px-3.5 text-rose-700 font-semibold">Ineligible</td>
                <td className="py-3 px-3.5">Restricted (No distinct legal identity)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Step-by-Step Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            3. Step-by-Step Startup India Registration Protocol
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          The registration journey is executed entirely through the digital Startup India single-window clearance portal:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {REGISTRATION_STEPS.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={idx}
                className={`group p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-2 ${stepItem.cardHover}`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-all ${stepItem.iconBoxHover}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-bold text-slate-500 tracking-wider uppercase">
                      Step {stepItem.step}
                    </span>
                    <h3 className={`text-sm font-semibold text-slate-950 transition-colors leading-tight ${stepItem.titleHover}`}>
                      {stepItem.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Documents Required Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Essential Documents Required for DPIIT Verification
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Ensure all uploaded records are high-resolution, unredacted PDFs under prescribed portal file size limits (5MB per document):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {/* Card 1: Incorporation */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100/80 group-hover:border-blue-200 group-hover:scale-105 transition-all shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-blue-700 transition-colors">
                Corporate Entity Documentation
              </strong>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Certificate of Incorporation (COI) issued by MCA, stamped Memorandum and Articles of Association (MOA/AOA), or signed &amp; registered LLP Agreement / Partnership Deed.
            </p>
          </div>

          {/* Card 2: Identity */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100/80 group-hover:border-emerald-200 group-hover:scale-105 transition-all shrink-0">
                <Users2 className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-emerald-700 transition-colors">
                Founders Identity &amp; PAN Proofs
              </strong>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Permanent Account Number (PAN) of the entity, along with PAN, Aadhaar cards, and DIN/DPIN documentation of all active directors, designated partners, or general partners.
            </p>
          </div>

          {/* Card 3: Innovation Proof */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/15 hover:bg-purple-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center group-hover:bg-purple-100/80 group-hover:border-purple-200 group-hover:scale-105 transition-all shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-purple-700 transition-colors">
                Proof of Innovation &amp; Pitch Deck
              </strong>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              A comprehensive pitch deck (10-15 slides) covering problem statement, tech architecture, website URL, mobile application demo links, patent filings, or customer traction metrics.
            </p>
          </div>

          {/* Card 4: Financial Records */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/15 hover:bg-amber-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:border-amber-200 group-hover:scale-105 transition-all shrink-0">
                <Receipt className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-amber-700 transition-colors">
                Bank &amp; Financial Certifications
              </strong>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              Latest 6 months bank statement of the current account, balance sheet/ITR (if the entity has completed a financial year), and Chartered Accountant turnover certification.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Benefits Unlocked */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            5. Key Incentives Unlocked Upon DPIIT Recognition
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Securing your DPIIT Recognition Certificate empowers your business with substantial financial, legal, and operational advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
          {STARTUP_BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`group p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-2 ${b.cardHover}`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-all ${b.iconBoxHover}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-xs sm:text-sm font-semibold text-slate-950 transition-colors ${b.titleHover}`}>
                    {b.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Common Rejections & Solutions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Common Reasons for DPIIT Application Rejection
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Over 30% of initial applications face scrutiny queries or rejection due to easily preventable documentation errors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] mt-2">
          {/* Card 1 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center group-hover:bg-rose-100/80 group-hover:border-rose-200 group-hover:scale-105 transition-all shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-rose-700 transition-colors">
                Generic &amp; Non-Innovative Business Model
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Standard trading, general brokerage, or straightforward reselling without proprietary tech or process novelty will be rejected. Always highlight unique intellectual assets, algorithms, or workflow innovations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/15 hover:bg-amber-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:border-amber-200 group-hover:scale-105 transition-all shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                Missing Website, Pitch Deck, or Demo Proof
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Submitting empty website links or generic 2-page documents leads to immediate scrutiny. Provide functional web links, verifiable wireframes, product screenshots, or test credentials for evaluators.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/15 hover:bg-purple-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center group-hover:bg-purple-100/80 group-hover:border-purple-200 group-hover:scale-105 transition-all shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
                Entity Mismatch or Unregistered Deed
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Unnotarized or unregistered partnership agreements and unregistered trade names fail validation. Ensure your LLP Agreement or MOA has been formally lodged and approved by the ROC.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100/80 group-hover:border-blue-200 group-hover:scale-105 transition-all shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                Direct Reconstruction from Old Proprietorships
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              If the founders held identical commercial activities under an older proprietorship, DPIIT might view it as a reconstruction. Clearly articulate how the new LLP/Pvt Ltd represents an autonomous, innovative entity.
            </p>
          </div>
        </div>
      </section>

      {/* Merrafilings Professional Assistance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-blue-50/40 border border-emerald-200/80 space-y-4">
          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span>Fast-Track Your DPIIT Recognition with Merrafilings</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Navigating the technical drafting, innovation presentation, and Section 80-IAC tax exemption filings demands specialized legal precision. Merrafilings assists innovative enterprises across India with entity incorporation, pitch deck refinement, compliance verification, and end-to-end liaison with the DPIIT evaluation desk.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-emerald-950">100% Online</span>
              <span className="text-[11px] text-slate-700 font-medium">Zero Office Visits</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-blue-900">Expert Review</span>
              <span className="text-[11px] text-slate-700 font-medium">Innovation Pitch Polish</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-purple-900">80-IAC Filing</span>
              <span className="text-[11px] text-slate-700 font-medium">3-Year Tax Exemption</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">IP Rebates</span>
              <span className="text-[11px] text-slate-700 font-medium">80% Patent Discount</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-sm text-slate-700 font-normal">
          Clear answers to common questions regarding Startup India registration criteria, eligibility, and benefits:
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
    </LlpGuideLayout>
  );
}
