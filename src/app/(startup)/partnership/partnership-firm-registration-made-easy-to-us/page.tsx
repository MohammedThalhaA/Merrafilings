"use client";

import React, { useState } from "react";
import PartnershipGuideLayout from "@/components/PartnershipGuideLayout";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Building,
  Calculator,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Award,
  Scale,
  Calendar,
  Layers,
  ArrowRight,
  FileSpreadsheet,
  BadgeCheck,
  Briefcase,
  Users2,
  BookOpen,
} from "lucide-react";

const BENEFITS_LIST = [
  {
    title: "Effortless & Inexpensive Formation",
    icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Low Cost",
    desc: "Can be established within days without cumbersome Ministry of Corporate Affairs (MCA) incorporation fees, zero DIN charges, and minimal initial stamp duties compared to private limited companies.",
  },
  {
    title: "Synergistic Pooling of Resources",
    icon: <Users2 className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Resource Scale",
    desc: "Combining the capital, industry connections, technical prowess, and managerial expertise of multiple partners fosters a balanced, resilient enterprise capable of scaling rapidly.",
  },
  {
    title: "Operational Agility & Decision Speed",
    icon: <Briefcase className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Fast Pivots",
    desc: "Free from procedural formalities like passing board resolutions, convening statutory annual general meetings (AGMs), or filing complex secretarial filings with ROC.",
  },
  {
    title: "Tax Deductions for Partner Remuneration",
    icon: <Calculator className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Section 40(b)",
    desc: "Partnership firms can legally reduce net taxable business profits by deducting authorized salaries, bonuses, and interest on partner capital (up to 12% p.a.) under the Income Tax Act.",
  },
];

const FIVE_STEPS = [
  {
    step: "01",
    title: "Choose a Distinctive Firm Name",
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Brand Search",
    desc: "Select a unique trade name that reflects your market offering. Perform a trademark check on IP India to prevent legal conflicts and ensure compliance with the Emblems & Names Act, 1950.",
  },
  {
    step: "02",
    title: "Draft an Exhaustive Partnership Deed",
    icon: <FileText className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Legal Charter",
    desc: "Draft a formal legal deed outlining each partner's capital contribution, profit and loss sharing ratio, management powers, bank signing authorities, arbitration clauses, and partner remuneration under Section 40(b).",
  },
  {
    step: "03",
    title: "Apply for Firm Permanent Account Number (PAN)",
    icon: <CreditCard className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "Tax Identity",
    desc: "Obtain a distinct 10-digit PAN card issued in the firm's commercial name by the Income Tax Department (the 4th character is 'F', designating Firm status), essential for all statutory tax and banking operations.",
  },
  {
    step: "04",
    title: "Register with the State Registrar of Firms (ROF)",
    icon: <Building className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "ROF Form 1",
    desc: "File Form 1 / Form A with the state Registrar of Firms along with certified copies of the notarized deed, partner address proofs, business premise utility bills, and prescribed government fees to secure the official Certificate of Registration.",
  },
  {
    step: "05",
    title: "Secure Business Permits & Open Current Bank Account",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
    color: "cyan",
    badge: "Banking & Tax",
    desc: "Open a dedicated commercial current account using the firm PAN, registered deed, and ROF certificate. Complete State Shop & Establishment registration, Udyam MSME certification, and mandatory GST registration.",
  },
];

const COMPLIANCE_PILLARS = [
  {
    title: "Income Tax Return (ITR-5 Filing)",
    icon: <Calendar className="w-5 h-5 text-blue-600" />,
    color: "blue",
    desc: "Partnership firms must file Form ITR-5 annually by July 31 (for non-audit cases) or October 31 (where tax audit is applicable under Section 44AB). Income is taxed at a flat rate of 30% plus cess.",
  },
  {
    title: "Mandatory Maintenance of Books (Section 44AA)",
    icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    desc: "Maintain systematic double-entry ledgers, cash books, journals, and original purchase vouchers for at least 6 assessment years to comply with statutory income tax audit norms.",
  },
  {
    title: "GST Return Filings (GSTR-1 & GSTR-3B)",
    icon: <Calculator className="w-5 h-5 text-purple-600" />,
    color: "purple",
    desc: "If enrolled for GSTIN, file outward supply details in GSTR-1 by the 11th of each month and reconcile input tax credits (ITC) with monthly tax payments in GSTR-3B by the 20th.",
  },
  {
    title: "Tax Audit Thresholds (Section 44AB)",
    icon: <Scale className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    desc: "Compulsory tax audit by an independent Chartered Accountant if business turnover exceeds ₹1 Crore (or ₹10 Crore if digital non-cash transactions exceed 95% of total turnover).",
  },
];

const FAQS = [
  {
    q: "Why is an official PAN card required for a partnership firm?",
    a: "Unlike a sole proprietorship which uses the owner's personal PAN, a partnership firm is a distinct taxable unit under the Indian Income Tax Act. The firm must obtain its own PAN card (where the fourth letter is 'F') to file income tax returns (ITR-5), remit advance tax, deduct TDS, and open a business current bank account.",
  },
  {
    q: "Can a partnership deed be executed on plain paper?",
    a: "No. A partnership deed executed on plain paper has zero legal validity in a court of law. It must be executed on non-judicial stamp paper of appropriate denomination prescribed by your state government's stamp act and notarized by an authorized Public Notary.",
  },
  {
    q: "What is the minimum capital required to start a partnership firm in India?",
    a: "There is no minimum statutory capital requirement under the Indian Partnership Act, 1932. Partners can start a partnership firm with any amount of initial capital—even ₹5,000 or ₹10,000—as agreed upon and specified in the deed.",
  },
  {
    q: "Can one partner bind the entire partnership firm in a commercial contract?",
    a: "Yes. Under Section 18 of the Act, every partner is an agent of the firm for the purposes of the business. Acts done by a partner in the ordinary course of business legally bind the firm and all other co-partners, unless third parties are explicitly notified of restricted authority.",
  },
  {
    q: "What happens if a partner retires or withdraws from the firm?",
    a: "A partner can retire in accordance with the terms of the deed or with the consent of all other partners. To update public and banking records, a Reconstitution / Supplementary Partnership Deed must be executed, and Form E / Notice of Change must be submitted to the Registrar of Firms.",
  },
  {
    q: "Can a partnership firm be converted into a Private Limited Company later?",
    a: "Yes. As the business scales, a registered partnership firm can be converted into a Private Limited Company under Chapter XXI (Part I) of the Companies Act, 2013, or through a slump sale agreement, transferring all assets, goodwill, and liabilities seamlessly without triggering capital gains tax.",
  },
  {
    q: "Can a partnership firm register under Udyam MSME?",
    a: "Yes. A partnership firm holding a valid firm PAN and GSTIN (if applicable) can obtain a Central Udyam MSME Registration Certificate online to qualify for priority bank lending, interest subvention schemes, and 50% discount on government trademark fees.",
  },
  {
    q: "What are the key terms that must be included in a partnership deed?",
    a: "Essential clauses include: firm name, registered office address, date of commencement, nature of business, capital contribution of each partner, profit/loss sharing percentage, interest on capital, partner salaries/remuneration under Section 40(b), banking operation mandates, and dispute arbitration.",
  },
  {
    q: "What are the consequences if the firm fails to file ITR-5 on time?",
    a: "Late filing of Form ITR-5 attracts statutory late filing fees under Section 234F (up to ₹5,000), penal interest on outstanding taxes under Section 234A, and forfeits the legal right to carry forward business losses to future assessment years.",
  },
  {
    q: "How does Merrafilings make partnership firm registration easy?",
    a: "Merrafilings manages the complete lifecycle: bespoke partnership deed drafting by senior advocates, state stamp paper procurement, notarization coordination, ROF Form 1 submission, firm PAN/TAN allotment, and priority current bank account opening assistance.",
  },
];

export default function PartnershipFirmRegistrationMadeEasyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PartnershipGuideLayout
      currentSlug="partnership-firm-registration-made-easy-to-us"
      title="Partnership Firm Registration Made Easy"
      breadcrumbLabel="Registration Made Easy"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          Starting a partnership firm is one of the most accessible and effective business pathways
          for co-founders seeking shared operational governance, pooled capital resources, and rapid
          market deployment.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          However, navigating state stamp acts, drafting legally resilient partnership deeds, obtaining
          firm PAN cards, and filing with the Registrar of Firms (ROF) can appear daunting without
          proper guidance. This operational handbook demystifies the entire registration process into
          five practical, stress-free milestones.
        </p>
      </section>

      {/* Section 1: Core Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Core Benefits of Establishing a Partnership Firm
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Discover why multi-founder teams across retail, manufacturing, and professional services prefer the partnership model:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {BENEFITS_LIST.map((b, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (b.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (b.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (b.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (b.color === "indigo") {
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
                      {b.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                      {b.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                    {b.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Five Key Steps */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
              2. Five Essential Steps to Register Your Partnership Firm
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
              Follow this organized legal workflow to establish your registered firm on solid ground:
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 shrink-0 self-start sm:self-auto">
            Operational Blueprint
          </span>
        </div>

        <div className="space-y-3.5">
          {FIVE_STEPS.map((item, idx) => {
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

      {/* Section 3: Compliance Tips */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Ongoing Tax & Statutory Compliance for Partnership Firms
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Registration is just the foundation. Maintaining recurring fiscal and statutory compliance shields the partners from penal tax interest:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {COMPLIANCE_PILLARS.map((col, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (col.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            } else if (col.color === "emerald") {
              hoverClasses = "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-950";
            } else if (col.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (col.color === "indigo") {
              hoverClasses = "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-950";
            }

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {col.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                    {col.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  {col.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Merrafilings Fast-Track Banner */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/70 via-slate-50 to-blue-50/40 border border-purple-200/80 space-y-4">
          <div className="flex items-center gap-2 text-purple-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-purple-700" />
            <span>Merrafilings End-to-End Partnership Firm Launchpad</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Take the guesswork out of partnership firm registration. Our dedicated team of Chartered Accountants and corporate advocates drafts your deed on state stamp paper, prepares partner affidavits, files ROF Form 1, procures your firm PAN/TAN, and assists with business current bank account activation in 48 to 72 hours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-purple-100 text-center">
              <span className="block text-lg font-bold text-purple-950">48-72 Hrs</span>
              <span className="text-[11px] text-slate-700 font-medium">Deed Drafting SLA</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-purple-100 text-center">
              <span className="block text-lg font-bold text-emerald-800">100% Digital</span>
              <span className="text-[11px] text-slate-700 font-medium">Paperless Filing</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-purple-100 text-center">
              <span className="block text-lg font-bold text-blue-900">ROF Support</span>
              <span className="text-[11px] text-slate-700 font-medium">Certificate Allotment</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-purple-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">Bank Ready</span>
              <span className="text-[11px] text-slate-700 font-medium">Current Account Kit</span>
            </div>
          </div>
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
          Answers to common queries regarding partnership firm registration, taxation, and legal requirements:
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
