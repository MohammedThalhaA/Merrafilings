"use client";

import React, { useState } from "react";
import Link from "next/link";
import LlpGuideLayout from "@/components/LlpGuideLayout";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
  Scale,
  Zap,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  MapPin,
  Landmark,
  Briefcase,
  Users2,
  Receipt,
  FileCheck2,
  KeyRound,
  DollarSign,
  HeartHandshake,
  Factory,
} from "lucide-react";

const CHENNAI_ENTITY_TYPES = [
  {
    title: "Private Limited Company",
    desc: "The premier corporate vehicle for high-growth startups and tech firms in Chennai. Offers limited liability protection, distinct corporate identity, and seamless equity fundraising from venture capital and angel syndicates.",
    icon: Building2,
    color: "blue",
    badge: "Most Popular",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBoxHover: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Limited Liability Partnership (LLP)",
    desc: "The optimal legal framework for consultancies, software boutiques, and professional service firms. Merges the flexibility of a traditional partnership with limited liability and reduced statutory compliance audits under the LLP Act, 2008.",
    icon: Users2,
    color: "emerald",
    badge: "Low Compliance",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "One Person Company (OPC)",
    desc: "Designed exclusively for solo entrepreneurs and individual founders seeking full corporate autonomy without personal liability risks, retaining 100% equity ownership under Companies Act provisions.",
    icon: KeyRound,
    color: "purple",
    badge: "Solo Founder",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBoxHover: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Section 8 Non-Profit Company",
    desc: "Incorporated to promote commerce, arts, sciences, education, research, social welfare, or charity. Enjoys corporate status, eligibility for CSR grants, and Section 12A/80G tax exemptions without distributing dividends.",
    icon: HeartHandshake,
    color: "amber",
    badge: "Non-Profit",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBoxHover: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    title: "Public Limited Company",
    desc: "Tailored for mega-scale ventures and industrial manufacturers planning to raise equity capital from the public, requiring a minimum of 3 directors and 7 shareholders with strict corporate governance.",
    icon: Landmark,
    color: "indigo",
    badge: "Large Capital",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBoxHover: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
  {
    title: "Producer Company",
    desc: "Formed by primary agricultural producers and agrarian cooperatives in Tamil Nadu to streamline crop procurement, processing, value addition, and international agro-exports under collective ownership.",
    icon: Factory,
    color: "rose",
    badge: "Agro / Farmers",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBoxHover: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
];

const CHENNAI_ADVANTAGES = [
  {
    title: "Premier Talent & Technical Education Hub",
    desc: "Direct access to top-tier technical and executive talent from IIT Madras, Anna University, Loyola College, and premier CA/CS training institutes, fueling world-class tech, fintech, and engineering teams.",
    icon: Award,
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBoxHover: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    title: "Robust SEZ & Industrial Corridors",
    desc: "Surrounded by world-renowned industrial hubs including OMR IT Expressway, Guindy Industrial Estate, TIDEL Park, Ambattur Industrial Estate, and Oragadam-Sriperumbudur manufacturing zones.",
    icon: Factory,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    title: "Dual Maritime Port Logistics",
    desc: "Home to two of India's major commercial ports—Chennai Port and Kamarajar Port Ennore—offering unmatched sea-freight advantages for import, export, and international supply chain enterprises.",
    icon: MapPin,
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBoxHover: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    title: "Progressive Tamil Nadu Startup Incentives",
    desc: "Strong state government backing through StartupTN (TANSIM), Guidance Tamil Nadu single-window portal, research subsidies, and preferential state procurement allocations.",
    icon: Sparkles,
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBoxHover: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
];

const INCORPORATION_STEPS = [
  {
    step: "01",
    title: "Procure Class 3 Digital Signatures (DSC)",
    desc: "All proposed directors or designated partners obtain government-authorized Class 3 Digital Signature Certificates with cryptographic hardware tokens for secure MCA filing authentication.",
    icon: KeyRound,
    color: "blue",
    cardHover: "hover:border-blue-500 hover:shadow-blue-500/15 hover:bg-blue-50/20",
    titleHover: "group-hover:text-blue-700",
    iconBoxHover: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/80 group-hover:border-blue-200",
  },
  {
    step: "02",
    title: "Corporate Name Reservation (SPICe+ Part A)",
    desc: "Submit your preferred business names through the MCA SPICe+ Part A or RUN-LLP facility, ensuring compliance with Companies (Incorporation) Rules and trademark clearance.",
    icon: FileText,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
  {
    step: "03",
    title: "Director Identification (DIN / DPIN) Allotment",
    desc: "Unique Director Identification Numbers (DIN) or Designated Partner Identification Numbers (DPIN) are seamlessly allotted to incoming founders through the integrated incorporation form.",
    icon: Users2,
    color: "purple",
    cardHover: "hover:border-purple-500 hover:shadow-purple-500/15 hover:bg-purple-50/20",
    titleHover: "group-hover:text-purple-700",
    iconBoxHover: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100/80 group-hover:border-purple-200",
  },
  {
    step: "04",
    title: "Drafting e-MOA & e-AOA / LLP Agreement",
    desc: "Corporate attorneys draft the electronic Memorandum of Association (INC-33) and Articles of Association (INC-34), or structured LLP Agreement outlining governance clauses and equity splits.",
    icon: Scale,
    color: "indigo",
    cardHover: "hover:border-indigo-500 hover:shadow-indigo-500/15 hover:bg-indigo-50/20",
    titleHover: "group-hover:text-indigo-700",
    iconBoxHover: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100/80 group-hover:border-indigo-200",
  },
  {
    step: "05",
    title: "Submitting Integrated SPICe+ Part B Form",
    desc: "Lodge the consolidated SPICe+ Part B application along with registered office utility bills, property owner NOC, and statutory declarations with ROC Chennai.",
    icon: FileCheck2,
    color: "amber",
    cardHover: "hover:border-amber-500 hover:shadow-amber-500/15 hover:bg-amber-50/20",
    titleHover: "group-hover:text-amber-700",
    iconBoxHover: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100/80 group-hover:border-amber-200",
  },
  {
    step: "06",
    title: "Automated PAN, TAN & EPFO/ESIC Generation",
    desc: "Corporate PAN and TAN are automatically assigned by the Income Tax Department simultaneously with mandatory EPFO, ESIC, and Profession Tax registrations.",
    icon: Receipt,
    color: "rose",
    cardHover: "hover:border-rose-500 hover:shadow-rose-500/15 hover:bg-rose-50/20",
    titleHover: "group-hover:text-rose-700",
    iconBoxHover: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100/80 group-hover:border-rose-200",
  },
  {
    step: "07",
    title: "ROC Chennai Certificate of Incorporation (COI)",
    desc: "The Registrar of Companies (ROC), Chennai validates the docket and formally issues your digital Certificate of Incorporation containing the corporate CIN and permanent registration seal.",
    icon: Award,
    color: "cyan",
    cardHover: "hover:border-cyan-500 hover:shadow-cyan-500/15 hover:bg-cyan-50/20",
    titleHover: "group-hover:text-cyan-700",
    iconBoxHover: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:bg-cyan-100/80 group-hover:border-cyan-200",
  },
  {
    step: "08",
    title: "Bank Account Opening & Commencement Filing",
    desc: "Open a commercial bank current account with your preferred bank and lodge Form INC-20A (Commencement of Business declaration) within 180 days of incorporation.",
    icon: DollarSign,
    color: "emerald",
    cardHover: "hover:border-emerald-500 hover:shadow-emerald-500/15 hover:bg-emerald-50/20",
    titleHover: "group-hover:text-emerald-700",
    iconBoxHover: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100/80 group-hover:border-emerald-200",
  },
];

const FAQS = [
  {
    q: "What is the jurisdiction of the Registrar of Companies (ROC) in Chennai?",
    a: "The Registrar of Companies (ROC), Chennai—located at Shastri Bhavan, 26, Haddows Road, Nungambakkam, Chennai, Tamil Nadu 600006—exercises jurisdiction over company and LLP incorporations and regulatory filings across the districts of northern and central Tamil Nadu as well as the Union Territory of Puducherry.",
  },
  {
    q: "How many days does it take to register a company or LLP in Chennai?",
    a: "With complete KYC documentation and name availability, the typical incorporation timeline is 5 to 7 business days from filing the SPICe+ Part B form to the issuance of the Certificate of Incorporation by ROC Chennai.",
  },
  {
    q: "Can I use a residential address or virtual office as the registered office in Chennai?",
    a: "Yes. The Ministry of Corporate Affairs allows a residential apartment or commercial property to be used as a company's registered office, provided you submit an electricity bill (not older than 2 months), property owner NOC, and signed rent/lease agreement.",
  },
  {
    q: "Can foreign nationals and NRIs register a company in Chennai?",
    a: "Yes. Foreign nationals and NRIs can establish an Indian Subsidiary Company or incorporate an LLP under the automatic FDI route for most sectors. The only mandatory prerequisite is appointing at least one resident Indian citizen as a director or designated partner.",
  },
  {
    q: "What are the mandatory annual compliances after registering a company in Chennai?",
    a: "Companies incorporated in Chennai must complete annual ROC filings including Form AOC-4 (Financial Statements), Form MGT-7 (Annual Return), hold an Annual General Meeting (AGM), file Income Tax Returns, complete director KYC (DIR-3 KYC), and execute quarterly GST filings if registered.",
  },
  {
    q: "How much capital is required to start a Private Limited Company or LLP in Chennai?",
    a: "There is no minimum statutory paid-up capital requirement under Indian law. You can register your company or LLP in Chennai with nominal capital as low as ₹1,000 or ₹10,000.",
  },
];

export default function CompanyRegistrationInChennaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LlpGuideLayout
      currentSlug="company-registration-in-chennai"
      title="Company Registration in Chennai: Register Your Business Online"
      breadcrumbLabel="Company Registration in Chennai"
      metaPublishedDate="Oct 2026"
      readingTime="11 min read"
      authorName="Merrafilings Corporate Legal & Secretarial Practice, Chennai Desk"
    >
      {/* Hero Overview */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>ROC Chennai Jurisdiction &amp; MCA Guidelines 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1646] tracking-tight leading-snug">
          Company Registration in Chennai: Complete Step-by-Step Incorporation Guide
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-normal">
          Chennai, the commercial capital of Tamil Nadu and the economic powerhouse of South India, offers an ideal
          launchpad for forward-thinking entrepreneurs, startups, and international subsidiaries. Whether you are
          establishing a high-growth <strong className="font-semibold text-slate-950">Private Limited Company</strong>,
          a flexible <strong className="font-semibold text-slate-950">Limited Liability Partnership (LLP)</strong>,
          or an autonomous One Person Company (OPC), registering under the provisions of the Companies Act, 2013 or LLP Act, 2008
          confers limited liability, corporate brand equity, and seamless institutional fundraising capabilities.
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          This comprehensive statutory guide covers available corporate structures, commercial advantages of Chennai,
          documentation standards, SPICe+ MCA digital procedures, cost breakdowns, and ongoing ROC compliance protocols.
        </p>
      </section>

      {/* Chennai Business Structures */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            1. Types of Legal Business Structures You Can Register in Chennai
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Selecting the ideal legal vehicle is critical to balancing ownership rights, liability exposure, and statutory compliance:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
          {CHENNAI_ENTITY_TYPES.map((entity, idx) => {
            const Icon = entity.icon;
            return (
              <div
                key={idx}
                className={`group p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-2 ${entity.cardHover}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-all ${entity.iconBoxHover}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-semibold text-slate-950 transition-colors ${entity.titleHover}`}>
                      {entity.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 shrink-0">
                    {entity.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {entity.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Chennai Strategic Advantages */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            2. Strategic Advantages of Registering Your Business in Chennai
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Consistently ranked among India&apos;s top business destinations, Chennai blends industrial maturity with deep tech innovation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {CHENNAI_ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className={`group p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-2 ${adv.cardHover}`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-all ${adv.iconBoxHover}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-sm font-semibold text-slate-950 transition-colors ${adv.titleHover}`}>
                    {adv.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Step-by-Step Incorporation Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            3. Step-by-Step Company Incorporation Process via MCA SPICe+
          </h2>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Incorporation in Chennai is executed 100% online through the MCA21 V3 digital platform:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {INCORPORATION_STEPS.map((stepItem, idx) => {
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
                      Stage {stepItem.step}
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

      {/* Documentation Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Essential Documents Required for ROC Chennai Registration
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Prepare clear scanned copies of the following documents before commencing the SPICe+ filing:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
          {/* Card 1 */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100/80 group-hover:border-blue-200 group-hover:scale-105 transition-all shrink-0">
                <Users2 className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-blue-700 transition-colors">
                Directors Identity Proofs
              </strong>
            </div>
            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-normal">
              <li>PAN Card (Mandatory for Indian nationals)</li>
              <li>Aadhaar Card, Passport, or Voter ID</li>
              <li>Passport-size color photograph</li>
              <li>Digital Signature Certificate (Class 3 DSC)</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100/80 group-hover:border-emerald-200 group-hover:scale-105 transition-all shrink-0">
                <Receipt className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-emerald-700 transition-colors">
                Residential Address Proofs
              </strong>
            </div>
            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-normal">
              <li>Latest Bank Statement with transactions</li>
              <li>Electricity Bill or Telephone Bill</li>
              <li>Gas connection utility bill</li>
              <li>Must be strictly under 2 months old</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/15 hover:bg-purple-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center group-hover:bg-purple-100/80 group-hover:border-purple-200 group-hover:scale-105 transition-all shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <strong className="text-slate-900 block font-semibold group-hover:text-purple-700 transition-colors">
                Chennai Office Address Proofs
              </strong>
            </div>
            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-normal">
              <li>TANGEDCO Electricity bill or Property Tax receipt</li>
              <li>No Objection Certificate (NOC) from landlord</li>
              <li>Registered or notarized Lease/Rental Agreement</li>
              <li>Proof of ownership (if owned property)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Company Registration Cost in Chennai: Transparent Fee Breakdown
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          The Central Government provides ₹0 MCA incorporation fees for companies incorporated with authorized capital up to ₹15 Lakhs:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-slate-50/90 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-3 px-3.5">Company Structure</th>
                <th className="py-3 px-3.5">Government Statutory Fees</th>
                <th className="py-3 px-3.5">Professional &amp; Drafting Fees</th>
                <th className="py-3 px-3.5">Total Estimated Package</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900">Private Limited Company</td>
                <td className="py-3 px-3.5 text-emerald-700 font-bold">₹0 – ₹1,500 (Stamp Duty)</td>
                <td className="py-3 px-3.5">₹3,999 – ₹7,999</td>
                <td className="py-3 px-3.5 font-semibold text-slate-950">₹5,999 – ₹9,999</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900">Limited Liability Partnership (LLP)</td>
                <td className="py-3 px-3.5 text-emerald-700 font-bold">₹500 – ₹1,000</td>
                <td className="py-3 px-3.5">₹2,999 – ₹5,999</td>
                <td className="py-3 px-3.5 font-semibold text-slate-950">₹3,999 – ₹6,999</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900">One Person Company (OPC)</td>
                <td className="py-3 px-3.5 text-emerald-700 font-bold">₹0 – ₹1,000</td>
                <td className="py-3 px-3.5">₹3,499 – ₹6,499</td>
                <td className="py-3 px-3.5 font-semibold text-slate-950">₹4,999 – ₹7,999</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-3.5 font-semibold text-slate-900">Section 8 Non-Profit Company</td>
                <td className="py-3 px-3.5 text-emerald-700 font-bold">₹0 – ₹2,000</td>
                <td className="py-3 px-3.5">₹5,999 – ₹9,999</td>
                <td className="py-3 px-3.5 font-semibold text-slate-950">₹7,999 – ₹11,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Post-Registration Compliances Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Post-Incorporation Statutory Compliances in Tamil Nadu
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Safeguard your entity from ROC penal notices and maintain corporate active status with these mandatory post-incorporation milestones:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-[13px] mt-2">
          {/* Item 1 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/15 hover:bg-blue-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100/80 group-hover:border-blue-200 group-hover:scale-105 transition-all shrink-0">
                <FileCheck2 className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                Form INC-20A (Commencement of Business)
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Must be filed within 180 days of incorporation, proving share subscription money has been deposited into the bank account.
            </p>
          </div>

          {/* Item 2 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100/80 group-hover:border-emerald-200 group-hover:scale-105 transition-all shrink-0">
                <Scale className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Auditor Appointment (Form ADT-1)
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Appointment of the company&apos;s first statutory auditor by the Board of Directors within 30 days of registration.
            </p>
          </div>

          {/* Item 3 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/15 hover:bg-purple-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center group-hover:bg-purple-100/80 group-hover:border-purple-200 group-hover:scale-105 transition-all shrink-0">
                <Receipt className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
                GST &amp; Professional Tax Registration
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Enrolment for Tamil Nadu state GST and registering for employer Professional Tax with the Greater Chennai Corporation.
            </p>
          </div>

          {/* Item 4 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/15 hover:bg-amber-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:border-amber-200 group-hover:scale-105 transition-all shrink-0">
                <Award className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                Annual ROC Returns (AOC-4 &amp; MGT-7)
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Filing balance sheets and annual returns annually with ROC Chennai to avoid director disqualification under Section 164.
            </p>
          </div>

          {/* Item 5 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-500/15 hover:bg-indigo-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-100/80 group-hover:border-indigo-200 group-hover:scale-105 transition-all shrink-0">
                <Users2 className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                DIR-3 KYC for All Directors
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Annual digital KYC verification of director mobile and email coordinates before the annual September 30 deadline.
            </p>
          </div>

          {/* Item 6 */}
          <div className="group p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center group-hover:bg-rose-100/80 group-hover:border-rose-200 group-hover:scale-105 transition-all shrink-0">
                <Landmark className="w-3.5 h-3.5" />
              </div>
              <strong className="block font-semibold text-slate-900 group-hover:text-rose-700 transition-colors">
                Corporate Income Tax Return (ITR-6 / ITR-5)
              </strong>
            </div>
            <p className="text-slate-600 leading-relaxed pt-0.5">
              Annual electronic income tax return filing with audited financials by certified chartered accountants.
            </p>
          </div>
        </div>
      </section>

      {/* Merrafilings Chennai Advantage */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-emerald-50/40 border border-blue-200/80 space-y-4">
          <div className="flex items-center gap-2 text-slate-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>Why Register Your Chennai Company with Merrafilings?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            With deep local familiarity with ROC Chennai procedural guidelines and a dedicated team of Company Secretaries, Chartered Accountants, and Corporate Attorneys, Merrafilings delivers seamless 5-day incorporation, guaranteed name approval assistance, registered office solutions, and comprehensive annual compliance packages.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-blue-950">5-7 Days</span>
              <span className="text-[11px] text-slate-700 font-medium">Fast-Track COI</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-emerald-900">Local Presence</span>
              <span className="text-[11px] text-slate-700 font-medium">ROC Chennai Liaison</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-purple-900">All-Inclusive</span>
              <span className="text-[11px] text-slate-700 font-medium">DSC, DIN, PAN, TAN</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-blue-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">StartupTN Ready</span>
              <span className="text-[11px] text-slate-700 font-medium">State Grant Advisory</span>
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
          Authoritative legal answers regarding company and LLP formation in Chennai, Tamil Nadu:
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
