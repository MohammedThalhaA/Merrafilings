"use client";

import React, { useState } from "react";
import PartnershipGuideLayout from "@/components/PartnershipGuideLayout";
import {
  FileText,
  ShieldAlert,
  Building,
  CreditCard,
  Scale,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  FileSpreadsheet,
  Coins,
  Briefcase,
} from "lucide-react";

const ESSENTIAL_STEPS = [
  {
    step: "01",
    title: "Select a Compliant Trade Name & Conduct Trademark Search",
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    color: "blue",
    badge: "Brand Search",
    desc: "Verify that the proposed firm name is unique and does not violate the Emblems and Names (Prevention of Improper Use) Act, 1950. Conduct a search on the official IP India registry to confirm no identical trademark exists in your relevant commercial class.",
  },
  {
    step: "02",
    title: "Draft an Exhaustive Partnership Deed with Tax Clauses",
    icon: <FileText className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
    badge: "Legal Charter",
    desc: "Incorporate crucial statutory clauses: capital contribution by each partner, profit/loss sharing percentage, interest on capital (up to 12% p.a.), working partner remuneration under Section 40(b), banking operation signing mandates, and an arbitration clause.",
  },
  {
    step: "03",
    title: "Submit Form 1 / Form A to the State Registrar of Firms",
    icon: <Building className="w-5 h-5 text-purple-600" />,
    color: "purple",
    badge: "ROF Submission",
    desc: "File the formal application with the state Registrar of Firms along with a certified notarized copy of the deed, address proof of business premises, electricity bills, and signed partner affidavits. Pay the prescribed state government registration fees.",
  },
  {
    step: "04",
    title: "Procure Firm Permanent Account Number (PAN) & TAN",
    icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
    color: "indigo",
    badge: "Direct Tax ID",
    desc: "Apply for a separate PAN card in the firm's commercial name through NSDL or UTIITSL (with the 4th letter being 'F'). Apply for a Tax Deduction and Collection Account Number (TAN) if deducting TDS on contractor fees or commercial rent.",
  },
  {
    step: "05",
    title: "Open a Commercial Current Bank Account & GST Setup",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
    color: "cyan",
    badge: "Banking & Tax",
    desc: "Present the firm PAN, notarized deed, and ROF acknowledgement/certificate to open an operational current account complying with RBI KYC directives. Obtain your GSTIN certificate to transact goods and services across state borders.",
  },
];

const COMMON_CHALLENGES = [
  {
    challenge: "Trade Name Rejections by ROF",
    icon: <AlertTriangle className="w-5 h-5 text-rose-600" />,
    color: "rose",
    solution:
      "Avoid generic terms or restricted words (like 'National', 'State', 'Bank', 'Crown'). Conduct an advance trademark search on IP India before finalizing the deed.",
  },
  {
    challenge: "Defective Clauses & Non-Deductible Salary",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    color: "amber",
    solution:
      "If the deed fails to explicitly authorize partner remuneration or interest on capital, the Income Tax Department will disallow tax deductions under Section 40(b). Always engage professional legal drafting.",
  },
  {
    challenge: "Inadequate State Stamp Duty Payment",
    icon: <Coins className="w-5 h-5 text-purple-600" />,
    color: "purple",
    solution:
      "Executing the deed on insufficient stamp paper invalidates the document in civil court under the Indian Stamp Act. Verify the exact stamp paper value mandated by your state registration authority.",
  },
  {
    challenge: "Lengthy ROF Verification Delays",
    icon: <Building className="w-5 h-5 text-blue-600" />,
    color: "blue",
    solution:
      "Engage experienced corporate filing experts like Merrafilings who liaise directly with district Registrar of Firms offices to resolve verification queries swiftly.",
  },
];

const FAQS = [
  {
    q: "What is Section 69 of the Indian Partnership Act, 1932?",
    a: "Section 69 outlines the legal disabilities of an unregistered partnership firm. An unregistered firm cannot file a civil suit against any third party to enforce a commercial contract, nor can its partners sue each other or the firm. Furthermore, an unregistered firm cannot claim a legal set-off or counterclaim exceeding ₹100 in court.",
  },
  {
    q: "Can a partnership firm have partners with unequal profit-sharing ratios?",
    a: "Yes. Profit and loss sharing ratios are determined purely by mutual agreement among the partners and stipulated in the partnership deed. If the deed is silent, Section 13(b) of the Act presumes that all partners share profits and losses equally.",
  },
  {
    q: "What is the role of an affidavit in partnership firm registration?",
    a: "The Registrar of Firms requires an affidavit signed by all partners confirming that all statements made in Form 1 / Form A (firm name, business address, partner details, date of joining) are true, accurate, and that the partners are legally eligible to enter into commercial contracts.",
  },
  {
    q: "Can a partnership firm operate from a co-working space or virtual office?",
    a: "Yes. A partnership firm can register its principal place of business at a virtual office or co-working space, provided it possesses a valid rent/service agreement, utility bill of the building, and a signed No-Objection Certificate (NOC) from the property owner/operator.",
  },
  {
    q: "What are the rules regarding partner salary deduction under Section 40(b)?",
    a: "Remuneration is tax-deductible only for working partners who actively participate in business operations. Deductions are capped at 90% of book profit (or ₹1.5 Lakh, whichever is greater) on the first ₹3 Lakh of profit, and 60% on the balance book profit. The terms must be explicitly spelled out in the deed.",
  },
  {
    q: "Can an existing unregistered firm get registered with the ROF later?",
    a: "Yes. An unregistered partnership firm can apply for registration with the Registrar of Firms at any time during its operational existence. However, registration cannot cure prior lawsuits filed while unregistered; the firm must be registered at the date the lawsuit is instituted.",
  },
  {
    q: "How does the death of a partner affect the partnership firm?",
    a: "Under Section 42(c), a partnership firm automatically dissolves upon the death of a partner unless the partnership deed contains an explicit contract to the contrary (e.g., stating that the firm shall continue with surviving partners and legal heirs).",
  },
  {
    q: "What are the audit requirements under Section 44AB for partnership firms?",
    a: "A tax audit by a Chartered Accountant is mandatory if gross business turnover exceeds ₹1 Crore in the financial year. The threshold is enhanced to ₹10 Crore if non-cash digital transactions constitute 95% or more of aggregate receipts and payments.",
  },
  {
    q: "Can a partnership firm register trademarks and patents in its own name?",
    a: "Under Indian IP law, trademark applications can be filed in the trading name of the partnership firm, but the registration certificate lists the individual names of all partners trading under the firm name.",
  },
  {
    q: "How can Merrafilings ensure error-free partnership firm registration?",
    a: "Merrafilings manages the entire registration workflow: pre-screening trade names on IP India, drafting tax-optimized partnership deeds on state stamp paper, coordinating notarization, filing Form 1 with state ROF registries, and securing firm PAN/TAN credentials.",
  },
];

export default function PartnershipFirmRegistrationGuideEssentialStepsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PartnershipGuideLayout
      currentSlug="partnership-firm-registration-guide-essential-steps"
      title="Partnership Firm Registration Guidelines: A Comprehensive Overview"
      breadcrumbLabel="Registration Guidelines & Steps"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          Partnership firms are among the most prevalent and resilient commercial formats in India,
          uniting co-founders under shared ownership and mutual growth.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          Before embarking on commercial operations, understanding the statutory registration
          requirements, deed drafting nuances, and legal protections under the Indian Partnership Act,
          1932 is essential. This comprehensive overview provides an in-depth operational blueprint of
          the registration process, key legal principles, and practical solutions to common hurdles.
        </p>
      </section>

      {/* Section 1: The Legal Imperative */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The Legal Imperative: Registered vs. Unregistered Firms
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          While the Indian Partnership Act does not mandate formal registration, operating an unregistered firm exposes founders to severe legal handicaps:
        </p>

        <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal space-y-2">
          <div className="flex items-center gap-2 text-rose-800 font-semibold text-sm">
            <ShieldAlert className="w-4.5 h-4.5 text-rose-600" />
            <span>The Section 69 Barrier Explained:</span>
          </div>
          <p className="text-slate-800 font-normal">
            Under Section 69 of the Indian Partnership Act, 1932:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-800 pt-1">
            <li>An unregistered firm cannot institute a lawsuit in any civil court against third parties to enforce contractual rights.</li>
            <li>No partner in an unregistered firm can sue co-partners or the firm for breach of deed terms, account reconciliation, or dissolution.</li>
            <li>The firm cannot claim a monetary set-off or counterclaim exceeding ₹100 against civil litigants.</li>
          </ul>
        </div>
      </section>

      {/* Section 2: 5 Essential Registration Steps */}
      <section className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
              2. Five Essential Steps to Register Your Partnership Firm
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-normal mt-0.5">
              Execute these foundational legal steps to obtain official recognition from the Registrar of Firms:
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 shrink-0 self-start sm:self-auto">
            Operational Blueprint
          </span>
        </div>

        <div className="space-y-3.5">
          {ESSENTIAL_STEPS.map((item, idx) => {
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

      {/* Section 3: Common Challenges & Solutions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Common Registration Challenges & How to Overcome Them
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Anticipate and eliminate procedural bottlenecks before filing with the state registrar:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {COMMON_CHALLENGES.map((item, idx) => {
            let hoverClasses = "hover:border-slate-300 hover:shadow-slate-500/10";
            if (item.color === "rose") {
              hoverClasses = "hover:border-rose-500 hover:shadow-rose-500/10 group-hover:text-rose-950";
            } else if (item.color === "amber") {
              hoverClasses = "hover:border-amber-500 hover:shadow-amber-500/10 group-hover:text-amber-950";
            } else if (item.color === "purple") {
              hoverClasses = "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-950";
            } else if (item.color === "blue") {
              hoverClasses = "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-950";
            }

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                    {item.challenge}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-normal">
                  <strong className="text-emerald-800 font-semibold block mb-0.5">Solution:</strong>
                  {item.solution}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Merrafilings Banner */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-blue-50/40 border border-emerald-200/80 space-y-4">
          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span>Complete Legal Assurance with Merrafilings</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Avoid common name conflicts, stamp duty errors, and Section 69 legal disabilities. Merrafilings connects you directly with corporate advocates and Chartered Accountants who draft custom deeds on state stamp paper, handle state ROF filings, procure firm PAN cards, and guide your business current banking.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-emerald-950">24-48 Hrs</span>
              <span className="text-[11px] text-slate-700 font-medium">Deed Drafting SLA</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-blue-900">100% Compliant</span>
              <span className="text-[11px] text-slate-700 font-medium">Section 40(b) Ready</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-purple-900">ROF Filing</span>
              <span className="text-[11px] text-slate-700 font-medium">Form 1 Certification</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-emerald-100 text-center">
              <span className="block text-lg font-bold text-indigo-900">Priority Bank</span>
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
          Statutory answers regarding partnership deed drafting and registration guidelines in India:
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
