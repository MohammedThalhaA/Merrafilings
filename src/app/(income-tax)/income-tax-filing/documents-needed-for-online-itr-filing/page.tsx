"use client";

import React, { useState } from "react";
import IncomeTaxGuideLayout from "@/components/IncomeTaxGuideLayout";
import {
  FileText,
  ShieldCheck,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Landmark,
  FileCheck,
  AlertTriangle,
  Receipt,
  Users2,
  Briefcase,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ESSENTIAL_DOCUMENTS = [
  {
    num: "1",
    title: "Audited Financial Statements (Balance Sheet & P&L)",
    category: "Statutory Core",
    desc: "Complete Balance Sheet, Profit & Loss statement, Notes to Accounts, and Auditor's Report prepared in accordance with Schedule III of the Companies Act, 2013.",
    importance: "Mandatory for populating Schedule BS and Schedule PL in Form ITR-6.",
    color: "blue",
  },
  {
    num: "2",
    title: "Section 44AB Tax Audit Report (Form 3CA-3CD)",
    category: "Audit Mandate",
    desc: "Mandatory if total business turnover exceeds ₹1 Crore (or ₹10 Crores if aggregate cash receipts and payments do not exceed 5%). Must be digitally filed by a practicing CA prior to filing ITR.",
    importance: "ITR-6 cannot be verified without referencing the 3CA-3CD UDIN and acknowledgement number.",
    color: "emerald",
  },
  {
    num: "3",
    title: "Full-Year Bank Account Statements",
    category: "Banking Records",
    desc: "Comprehensive bank statements for all current, cash-credit, and overdraft accounts maintained throughout the financial year across all banks.",
    importance: "Used to cross-reconcile interest credits, high-value cash deposits, and Schedule BA disclosures.",
    color: "purple",
  },
  {
    num: "4",
    title: "TAN & Comprehensive TDS Certificates (Form 26AS & AIS)",
    category: "Tax Credits",
    desc: "Company TAN records, quarterly Form 24Q/26Q filings, client Form 16A TDS certificates, and full reconciliation with Form 26AS and AIS/TIS data.",
    importance: "Ensures prepaid tax credits and TCS claims are matched, preventing demand notices.",
    color: "amber",
  },
  {
    num: "5",
    title: "GST Registration Certificates & Annual Returns",
    category: "Indirect Tax Cross-Check",
    desc: "GSTIN certificates, GSTR-1, GSTR-3B monthly summaries, and annual reconciliation statements (GSTR-9 and GSTR-9C).",
    importance: "The IT Department automated system cross-checks ITR revenue against GST portal turnover.",
    color: "indigo",
  },
  {
    num: "6",
    title: "Director Credentials, DIN & Active Class 3 DSC",
    category: "Director KYC",
    desc: "PAN, Aadhaar, Director Identification Number (DIN), shareholding ratios, residential status, and active Class 3 Digital Signature Certificate (DSC) of the authorized director.",
    importance: "Corporate ITR-6 filing strictly mandates DSC verification; Aadhaar OTP is legally invalid for companies.",
    color: "teal",
  },
  {
    num: "7",
    title: "Prior Years' Income Tax Returns & Loss Records",
    category: "Loss Carry Forward",
    desc: "Copies of filed ITR-6 acknowledgements (ITR-V) and computation statements for the previous 8 assessment years.",
    importance: "Crucial for accurately claiming carried-forward business losses (Sec 72) and unabsorbed depreciation (Sec 32(2)).",
    color: "rose",
  },
];

const FILING_STEPS = [
  {
    step: "Step 1",
    title: "Compile Books & Pre-Reconcile AIS / 26AS",
    desc: "Finalize company books of accounts, perform statutory depreciation calculations, and match all client TDS credits against Form 26AS and the Annual Information Statement.",
  },
  {
    step: "Step 2",
    title: "Complete Statutory Audit & Tax Audit (Form 3CA-3CD)",
    desc: "Obtain independent auditor sign-off and ensure your Chartered Accountant uploads Form 3CD on the e-filing portal using a valid UDIN before 30th September.",
  },
  {
    step: "Step 3",
    title: "Prepare & Validate Form ITR-6 Offline Utility",
    desc: "Populate comprehensive schedules including MAT (Minimum Alternate Tax under Sec 115JB), foreign assets (Schedule FA), and related party transactions (Sec 40A(2)).",
  },
  {
    step: "Step 4",
    title: "Digitally Sign & Submit via Class 3 DSC",
    desc: "Generate the JSON file, upload it to the Income Tax portal, and execute cryptographic validation using the designated Director's registered Class 3 DSC token.",
  },
];

const FAQS = [
  {
    q: "Is filing ITR mandatory for a Private Limited Company if there was no revenue or profit?",
    a: "Yes. Under Section 139(1) of the Income Tax Act, 1961, every incorporated company (Private Limited, Public Limited, or OPC) must file Form ITR-6 every financial year, even if there was zero revenue, dormant status, or substantial financial loss.",
  },
  {
    q: "Can a company file its ITR using Aadhaar OTP or Net Banking EVC?",
    a: "No. Under statutory direct tax rules, corporate entities filing Form ITR-6 are legally mandated to verify and sign their returns exclusively using a valid Class 3 Digital Signature Certificate (DSC) of the designated Managing Director or Director.",
  },
  {
    q: "What is the turnover threshold that triggers a mandatory Tax Audit for companies?",
    a: "Under Section 44AB, tax audit is mandatory if gross business turnover exceeds ₹1 Crore. However, if aggregate cash receipts and cash payments do not exceed 5% of total transactions, the threshold is elevated to ₹10 Crores.",
  },
  {
    q: "What happens if a company files ITR-6 without filing the Tax Audit Report (Form 3CA-3CD)?",
    a: "Filing ITR-6 without uploading Form 3CD will lead to the return being treated as a 'Defective Return' under Section 139(9). Furthermore, a statutory penalty of 0.5% of turnover (up to ₹1,50,000) may be imposed under Section 271B.",
  },
  {
    q: "Why are previous years' ITR copies critical when preparing company returns?",
    a: "Prior year return copies contain statutory schedules detailing unabsorbed depreciation and business losses eligible for set-off. If losses are not accurately reported under Schedule CFL, the right to carry them forward for up to 8 years is permanently forfeited.",
  },
  {
    q: "How does the Income Tax Department detect GST turnover mismatches?",
    a: "The CBDT and CBIC systems are integrated via automated API pipelines. The e-filing engine cross-checks the revenue figures declared in Schedule PL of ITR-6 against the aggregate taxable turnover reported across all company GSTINs in GSTR-9 and GSTR-3B.",
  },
  {
    q: "What additional documentation is needed if the company engages in international transactions?",
    a: "If the company has international transactions with Associated Enterprises (AEs) exceeding ₹1 Crore, an Accountant's Report in Form 3CEB (Transfer Pricing Audit) must be obtained and uploaded along with Transfer Pricing documentation.",
  },
  {
    q: "What is Minimum Alternate Tax (MAT) and why are book profits needed?",
    a: "Companies are subject to MAT under Section 115JB if tax on regular taxable income is lower than 15% of adjusted book profits. Book profits are derived directly from the audited P&L statement, requiring detailed documentation of all provisions and reserves.",
  },
  {
    q: "What is the consequence of late filing of company ITR?",
    a: "Late filing attracts late fees under Section 234F (up to ₹5,000), penal interest of 1% per month under Sections 234A, 234B, and 234C, and the absolute forfeiture of the right to carry forward business and capital losses.",
  },
  {
    q: "How does Merrafilings manage company ITR filing end-to-end?",
    a: "Merrafilings pairs your company with senior Chartered Accountants who perform complete ledger reviews, cross-reconcile AIS and GSTR records, prepare Schedule MAT and depreciation schedules, execute Tax Audit filings, and upload ITR-6 with DSC validation.",
  },
];

export default function DocumentsNeededForOnlineItrFilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <IncomeTaxGuideLayout
      currentSlug="documents-needed-for-online-itr-filing"
      title="Documents Required for Company ITR Filing Online"
      breadcrumbLabel="Documents Required for Company ITR"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Direct Tax Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Filing corporate income tax returns (<strong className="font-semibold text-slate-950">Form ITR-6</strong>) is
          a rigorous compliance exercise governed by strict statutory rules. Entering the Income Tax e-filing portal
          without pre-compiling your financial records, audit certificates, and director authorizations leads to portal timeouts,
          defective returns, and expensive penalty notices.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Whether you manage a private limited enterprise, an OPC, or an unlisted public company, this comprehensive checklist
          outlines every mandatory document, statutory audit schedule, and reconciliation report required for seamless online
          corporate tax filing in India.
        </p>
      </section>

      {/* Section 1: Why Accurate Documentation Matters */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. Why Comprehensive Documentation is Vital for Corporate ITR
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Corporate tax filings undergo automated data validation across multiple government databases including MCA, GSTN,
          and banking networks. Maintaining flawless documentation guarantees:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">Zero Defective Notices</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">Prevents Section 139(9) notices arising from unmatched turnover or missing tax audit UDINs.</p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">Uninterrupted Loss Carry-Forward</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">Ensures past business losses and unabsorbed depreciation can be legally offset against future profits.</p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <Receipt className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1">Instant TDS / TCS Refunds</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">Facilitates prompt verification and release of excess withholding taxes directly into corporate accounts.</p>
          </div>
        </div>
      </section>

      {/* Section 2: 7 Essential Documents */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. The 7 Essential Primary Documents for Company ITR
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Ensure each of the following primary corporate records is verified and accessible before initiating Form ITR-6:
        </p>

        <div className="space-y-3.5 mt-3">
          {ESSENTIAL_DOCUMENTS.map((doc, idx) => (
            <div
              key={idx}
              className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                    {doc.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {doc.title}
                  </h3>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-800 text-slate-700 self-start sm:self-auto transition-colors">
                  {doc.category}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed pl-8 mb-2">
                {doc.desc}
              </p>
              <div className="pl-8 text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 group-hover:rotate-12 transition-transform" />
                <span><strong>Compliance Value:</strong> {doc.importance}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Additional Documentation for Special Cases */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. Specialized Schedules & Auxiliary Documentation
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Depending on your company’s commercial footprint, several additional records must be maintained:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">Transfer Pricing Audit (Form 3CEB)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Required if the company transacted with international associated enterprises or executed specified domestic transactions under Section 92E.
            </p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">DPIIT & Section 80-IAC Tax Exemption</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Recognized eligible startups claiming a 3-consecutive-year 100% tax holiday must furnish Inter-Ministerial Board (IMB) approval certificates.
            </p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1">Schedule FA (Foreign Assets & Accounts)</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Mandatory disclosures regarding foreign depository accounts, foreign equity holdings, custodial accounts, and overseas subsidiary shares.
            </p>
          </div>
          <div className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">Related Party Disclosures (Section 40A(2))</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Itemized ledgers of all remuneration, interest payments, commissions, and leases paid to directors or their relatives to demonstrate arms-length pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Filing Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Step-by-Step Company Online ITR Filing Procedure
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Follow this structured four-stage workflow to execute an error-free corporate return:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {FILING_STEPS.map((step, idx) => (
            <div key={idx} className="group p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white px-2.5 py-0.5 rounded-full border border-emerald-200/60 inline-block mb-2 transition-colors">
                {step.step}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">{step.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Common Pitfalls to Avoid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5. Critical Mistakes to Avoid in Corporate Tax Filings
        </h2>
        <div className="space-y-3">
          <div className="group p-4 rounded-xl border border-rose-200 bg-rose-50/40 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/15 hover:bg-rose-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-rose-900">Unreconciled GST Turnover and P&L Revenue</h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mt-0.5 leading-relaxed">
                Failing to explain variances between revenue in financial accounts and gross outward supplies reported in GSTR-9 triggers automated scrutiny inquiries under Section 133(6).
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-amber-200 bg-amber-50/40 hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/15 hover:bg-amber-50/70 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-amber-900">Attempting Aadhaar OTP Verification</h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mt-0.5 leading-relaxed">
                Directors often attempt to verify company returns using mobile OTP. For corporate entities, e-verification via Class 3 DSC registered in the director's profile is compulsory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Statutory corporate tax documentation and compliance guidelines answered by Merrafilings Chartered Accountants.
        </p>

        <div className="space-y-2.5 mt-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </IncomeTaxGuideLayout>
  );
}
