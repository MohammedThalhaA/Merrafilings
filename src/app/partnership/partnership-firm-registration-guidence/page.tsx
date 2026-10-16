"use client";

import React, { useState } from "react";
import PartnershipGuideLayout from "@/components/PartnershipGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  Building,
  CreditCard,
  Scale,
  Sparkles,
  FileCheck2,
  TrendingUp,
  MapPin,
  Laptop,
  Coins,
  BadgeCheck,
  Award,
  Users2,
} from "lucide-react";

const WHY_REGISTER_CARDS = [
  {
    title: "Statutory Right to Sue in Court",
    icon: <Scale className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Section 69 Protection",
    desc: "Under Section 69 of the Indian Partnership Act, 1932, an unregistered firm cannot file a lawsuit against third-party clients or defaulting vendors to recover dues over ₹100. ROF registration unlocks full legal recourse in civil courts.",
  },
  {
    title: "Binding Dispute Resolution Among Partners",
    icon: <FileCheck2 className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Deed Enforceability",
    desc: "Co-partners in a registered firm can legally enforce clauses of the partnership deed against defaulting partners, ensuring smooth internal dispute arbitration, capital restitution, and structured dissolution.",
  },
  {
    title: "Enhanced Institutional Financing & Credit",
    icon: <Coins className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Bank Ready",
    desc: "Commercial banks and NBFCs require an official Registrar of Firms (ROF) Form A or registration certificate before approving business overdraft facilities, cash credit limits, and CGTMSE collateral-free loans.",
  },
  {
    title: "Statutory Right of Set-Off",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Fiscal Protection",
    desc: "In commercial litigation or vendor disputes, a registered firm can claim monetary set-offs or counterclaim against third-party litigants, a statutory right strictly denied to unregistered partnerships.",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "Select a Distinct & Legally Compliant Firm Name",
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Brand Search",
    desc: "Pick an original trade name reflecting your business activity. Ensure it does not infringe registered trademarks on the IP India portal (under Trade Marks Act, 1999) and complies with the Emblems and Names (Prevention of Improper Use) Act, 1950 (avoiding words like 'Crown', 'Imperial', 'National', or 'Government').",
  },
  {
    step: "02",
    title: "Draft a Comprehensive Partnership Deed",
    icon: <FileText className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Core Charter",
    desc: "Prepare the legal agreement defining capital contributions, profit/loss sharing ratios, partner remuneration terms under Section 40(b), interest on capital (up to 12%), bank account signing mandates, and clear retirement/death succession clauses.",
  },
  {
    step: "03",
    title: "Execute on State Stamp Paper & Notarize",
    icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Stamp Duty",
    desc: "Print the finalized deed on non-judicial stamp paper as prescribed by your state stamp act (stamp duty varies by state and capital contribution: e.g., ₹500 in Maharashtra, 1% of capital in certain states). All partners must sign in the presence of two independent witnesses before a Public Notary.",
  },
  {
    step: "04",
    title: "Submit Application (Form A / Form 1) to State ROF",
    icon: <Building className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "ROF Filing",
    desc: "File Form 1 / Form A with the Registrar of Firms (ROF) jurisdiction in your state. Submit certified true copies of the deed, address proofs of business premises, electricity bills, and partner affidavits. Upon physical or online verification, the ROF issues the official Registration Certificate.",
  },
];

const STATE_PORTALS = [
  {
    state: "Maharashtra",
    portal: "RFO Maharashtra (Aple Sarkar)",
    timeline: "7 - 10 Days",
    desc: "Online portal filing with physical verification. Mandatory ₹500 minimum stamp duty on deeds.",
  },
  {
    state: "Karnataka",
    portal: "Kaveri Online Services / District Registrar",
    timeline: "5 - 7 Days",
    desc: "Digital application submission with physical deed submission at the respective District Registrar of Firms.",
  },
  {
    state: "Delhi",
    portal: "e-District Delhi Portal",
    timeline: "5 - 8 Days",
    desc: "Fully digital application workflow with Aadhaar e-sign and online statutory challan payment.",
  },
  {
    state: "Tamil Nadu",
    portal: "TNREGINET Portal",
    timeline: "6 - 9 Days",
    desc: "District Sub-Registrar jurisdiction filing with online document upload and physical deed verification.",
  },
];

const FAQS = [
  {
    q: "What is the primary difference between a registered and unregistered partnership firm?",
    a: "Under Section 69 of the Indian Partnership Act, 1932, an unregistered firm cannot file a civil lawsuit against third parties to enforce contracts or claim dues exceeding ₹100. A registered firm, holding an ROF Certificate, possesses full legal standing to sue clients, enforce deed clauses against partners, and claim monetary set-offs.",
  },
  {
    q: "What is the stamp paper value required for a partnership deed?",
    a: "Stamp duty is governed by individual state stamp acts. For instance, in Maharashtra it is ₹500 on capital up to ₹50,000 and scaled up to ₹5,000 for higher capital. In Karnataka, Delhi, and Tamil Nadu, stamp duty typically ranges from ₹200 to ₹1,000 or a percentage of contributed capital.",
  },
  {
    q: "Can a partnership firm apply for a PAN card before ROF registration?",
    a: "Yes. An unincorporated partnership firm can obtain a firm PAN card from NSDL/UTIITSL immediately after executing the notarized partnership deed, even while the state ROF application is in process.",
  },
  {
    q: "Can we modify the partnership deed after registration with the Registrar of Firms?",
    a: "Yes. Any changes to the firm name, business address, partner admission, retirement, or profit-sharing ratios can be made by executing a Supplementary Partnership Deed and filing Form E / Form B with the Registrar of Firms within statutory deadlines.",
  },
  {
    q: "What documents are required from each partner for ROF registration?",
    a: "Each partner must provide: (1) Self-attested PAN card, (2) Aadhaar card / Passport / Voter ID for identity and address proof, (3) Passport-size photograph, and (4) Signed affidavit confirming no disqualification under law.",
  },
  {
    q: "What proof is required for the partnership firm's registered office address?",
    a: "Acceptable proofs include: a recent electricity bill, municipal property tax receipt, or water bill (not older than 2 months), accompanied by a signed No-Objection Certificate (NOC) from the property owner and a notarized rent/lease agreement if rented.",
  },
  {
    q: "How long does it take to obtain the ROF Registration Certificate?",
    a: "Depending on your state's processing speed and whether the state offers a fully digital portal, ROF registration generally takes between 5 to 14 business days from the date of application submission and fee payment.",
  },
  {
    q: "Is GST registration mandatory for a registered partnership firm?",
    a: "GST registration is mandatory if annual turnover crosses ₹40 Lakhs for goods (₹20 Lakhs for services) or if you engage in interstate supplies or e-commerce sales. Even below threshold limits, voluntary GSTIN allotment is recommended for claiming Input Tax Credit (ITC).",
  },
  {
    q: "Can an NRI or foreign national become a partner in an Indian partnership firm?",
    a: "Under FEMA guidelines, Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) can invest in partnership firms on a non-repatriable basis without prior approval. However, foreign nationals cannot form general partnerships without prior government/RBI clearance.",
  },
  {
    q: "How does Merrafilings assist with partnership firm registration?",
    a: "Merrafilings offers end-to-end legal support: custom deed drafting by seasoned advocates, state stamp duty advisory, notarization guidance, state ROF Form 1 submission, firm PAN/TAN procurement, GST registration, and business current account support.",
  },
];

export default function PartnershipFirmRegistrationGuidencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PartnershipGuideLayout
      currentSlug="partnership-firm-registration-guidence"
      title="Understanding Partnership Firm Registration: A Comprehensive Guide"
      breadcrumbLabel="Registration Guidance"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          For aspiring co-founders and seasoned business professionals, establishing a partnership
          firm with proper government registration is paramount to ensuring smooth operations,
          unbreakable contract enforceability, and clear partner rights.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          While the Indian Partnership Act, 1932 makes registration optional, operating an unregistered
          firm leaves the enterprise legally vulnerable in disputes. This comprehensive legal guide provides
          step-by-step instructions on registering your partnership firm with the state Registrar of Firms
          (ROF), compiling prerequisites, and navigating state portal requirements with ease.
        </p>
      </section>

      {/* Section 1: Why Register a Partnership Firm */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why Register a Partnership Firm? Legal Advantages of ROF Recognition
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Registering your partnership firm with the state Registrar of Firms transforms an informal alliance into a legally fortified commercial entity:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {WHY_REGISTER_CARDS.map((item, idx) => {
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

      {/* Section 2: Step-by-Step Registration Guide */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
              2. Step-by-Step Guide to Partnership Firm Registration
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
              Execute these 4 sequential milestones to attain full statutory legal registration with the Registrar of Firms:
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 shrink-0 self-start sm:self-auto">
            ROF Roadmap
          </span>
        </div>

        <div className="space-y-3.5">
          {REGISTRATION_STEPS.map((item, idx) => {
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

      {/* Section 3: State-Specific Portals */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. State-Specific Registrar of Firms (ROF) Portals & Timelines
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          In India, the Registrar of Firms operates under respective state registration departments. Key state processes include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {STATE_PORTALS.map((st, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-semibold text-slate-950">{st.state}</h3>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {st.timeline}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700">{st.portal}</p>
              <p className="text-xs text-slate-800 leading-relaxed font-normal">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Modern Digital Trends */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/40 border border-blue-200/80 space-y-3">
          <div className="flex items-center gap-2 text-blue-950 font-semibold text-base sm:text-lg">
            <Laptop className="w-5 h-5 text-blue-700" />
            <span>Digital Transformation in Partnership Firm Registration</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            With the rise of state digital portals, partnership registration is transitioning away from manual queues. Many state registries now support e-stamping via Stock Holding Corporation of India (SHCIL), online Form A filing with digital signature certificates (DSC), and instant electronic issuance of the firm registration certificate. Merrafilings leverages these digital frameworks to expedite your firm&apos;s legal formation.
          </p>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-sm text-slate-800 font-normal">
          Expert legal guidance on partnership firm registration procedures and documentation:
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
