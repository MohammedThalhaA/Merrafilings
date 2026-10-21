"use client";

import React, { useState } from "react";
import BusinessItrGuideLayout from "@/components/BusinessItrGuideLayout";
import {
  Store,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Receipt,
  FileCheck,
  Sparkles,
  ArrowRight,
  Calculator,
  Layers,
  AlertTriangle,
  Coins,
  BadgePercent,
  Calendar,
} from "lucide-react";

const SMALL_BIZ_FORMS = [
  {
    form: "ITR-4 (SUGAM)",
    who: "Presumptive Small Businesses & Traders",
    threshold: "Turnover up to ₹3 Crore (Digital ≥ 95%)",
    profitRate: "6% (Digital) / 8% (Cash)",
    booksRequired: "No Books of Account Required (Sec 44AA Exempt)",
    color: "emerald",
    desc: "The premier simplified return form for small shopkeepers, retailers, wholesalers, and micro-enterprises. Requires no balance sheet or P&L upload.",
  },
  {
    form: "ITR-3",
    who: "Proprietorships with Regular Books",
    threshold: "Any Turnover / Tax Audit if > ₹1 Cr (₹10 Cr Digital)",
    profitRate: "Actual Computed Net Profit from Books",
    booksRequired: "Mandatory Detailed Books (P&L & Balance Sheet)",
    color: "blue",
    desc: "Required for sole proprietors maintaining formal financial accounts, claiming depreciation on heavy equipment, or reporting business losses to carry forward.",
  },
];

const PRESUMPTIVE_ADVANTAGES = [
  {
    title: "Exemption from Books of Accounts",
    badge: "Section 44AA Relief",
    desc: "Eliminates the statutory obligation to maintain complex journals, general ledgers, cash books, and stock inventory registers.",
  },
  {
    title: "No Mandatory Tax Audit",
    badge: "Section 44AB Exemption",
    desc: "Saves expensive Chartered Accountant tax audit fees provided you declare income at or above the minimum 6% or 8% deemed rate.",
  },
  {
    title: "Single Advance Tax Installment",
    badge: "15th March Deadline",
    desc: "Pay 100% of your advance tax in one single installment on or before 15th March, bypassing the quarterly 4-stage installment schedule.",
  },
  {
    title: "Fast-Track Processing & Instant Refunds",
    badge: "CPC Fast-Lane",
    desc: "Form ITR-4 is processed rapidly by the Centralized Processing Center, leading to direct bank credit of pending TDS refunds within 7 to 15 days.",
  },
];

const FILING_STEPS = [
  {
    step: "Step 1",
    title: "Reconcile Gross Turnover with Banking Records",
    desc: "Calculate total sales receipts across bank deposits and UPI settlements. Segregate digital collections from cash receipts to optimize 6% vs. 8% deemed profit rates.",
  },
  {
    step: "Step 2",
    title: "Select the Appropriate Return (ITR-4 vs. ITR-3)",
    desc: "Choose ITR-4 Sugam for presumptive taxation without books, or ITR-3 if you maintain audited accounts or need to carry forward trading losses.",
  },
  {
    step: "Step 3",
    title: "Verify Form 26AS, AIS & GST Turnover",
    desc: "Cross-check all customer TDS deductions under Section 194C/194Q and verify that the declared ITR revenue aligns with your GSTR-1 and GSTR-3B filings.",
  },
  {
    step: "Step 4",
    title: "Submit & Complete Instant E-Verification",
    desc: "Upload the verified return on the CBDT portal and complete instant cryptographic verification via Aadhaar OTP or Net Banking to obtain your official ITR-V receipt.",
  },
];

const ESTIMATED_COSTS = [
  {
    form: "ITR-4 (Sugam)",
    businessType: "Small Business under Presumptive Scheme (44AD)",
    cost: "₹4,899",
    features: "Gross turnover validation, 6%/8% profit calculation, AIS review, e-verification",
  },
  {
    form: "ITR-3",
    businessType: "Sole Proprietorship with Books of Accounts",
    cost: "₹8,899",
    features: "Preparation of Balance Sheet & P&L, Section 32 depreciation, loss carry-forward",
  },
  {
    form: "ITR-3 with Tax Audit",
    businessType: "Turnover exceeding ₹1 Cr (Cash) / ₹10 Cr (Digital)",
    cost: "₹14,899",
    features: "CA Tax Audit, Form 3CB-3CD filing, UDIN generation, notice defense",
  },
  {
    form: "ITR-5",
    businessType: "Partnership Firm or LLP",
    cost: "₹12,899",
    features: "Partner remuneration under Section 40(b), profit ratios, DSC signing",
  },
];

const FAQS = [
  {
    q: "Is ITR filing mandatory for small business owners in India?",
    a: "Yes. Every small business owner whose gross total income exceeds the basic exemption limit (₹2.5 Lakhs under Old Regime or ₹3 Lakhs under New Regime) must file an ITR. Furthermore, filing is mandatory if business turnover exceeds ₹60 Lakhs, electricity bills exceed ₹1 Lakh, or TDS deducted exceeds ₹25,000, even if no tax is payable.",
  },
  {
    q: "What is the turnover limit for small businesses under Section 44AD?",
    a: "The turnover limit for Section 44AD presumptive taxation is ₹2 Crores. However, the Finance Act has enhanced this limit to ₹3 Crores, provided aggregate cash receipts during the financial year do not exceed 5% of total turnover.",
  },
  {
    q: "How is profit calculated under the Section 44AD presumptive scheme?",
    a: "Under Section 44AD, profits are deemed to be 6% of turnover received through digital modes (banking, UPI, debit/credit cards, RTGS/NEFT) and 8% of turnover received through physical cash.",
  },
  {
    q: "What is the 5-year lock-in rule for the presumptive taxation scheme?",
    a: "If an eligible small business opts for Section 44AD and subsequently declares income lower than the prescribed 6% or 8% rate in any of the following 5 years, the business is barred from re-entering the presumptive scheme for 5 consecutive assessment years and must undergo a mandatory Section 44AB tax audit.",
  },
  {
    q: "Can a small shopkeeper file ITR without maintaining accounting books?",
    a: "Yes! By opting for the presumptive taxation scheme under Section 44AD and filing Form ITR-4 (Sugam), small shopkeepers and traders are legally exempt from maintaining accounting books under Section 44AA and do not require a tax audit under Section 44AB.",
  },
  {
    q: "What documents do I need to prepare before filing small business ITR?",
    a: "You need your PAN and Aadhaar cards, bank statements for all business and personal accounts, GST return summaries (GSTR-1 and GSTR-3B), client TDS certificates (Form 16A), Form 26AS, AIS/TIS statements, and advance tax payment receipts.",
  },
  {
    q: "What is the statutory due date for small business ITR filing for AY 2026-27?",
    a: "For small businesses not subject to a tax audit (filing ITR-3 or ITR-4), the revised statutory deadline is 31 August 2026. For businesses requiring a Section 44AB tax audit, the due date is 31 October 2026.",
  },
  {
    q: "Can a small business carry forward losses under ITR-4 Sugam?",
    a: "No. Form ITR-4 Sugam does not support the set-off or carry-forward of business losses. If your business suffered a loss and you wish to carry it forward for up to 8 years under Section 72, you must maintain books and file Form ITR-3 before the statutory due date.",
  },
  {
    q: "What is the penalty for filing small business ITR after the deadline?",
    a: "Late filing attracts a penalty under Section 234F of ₹5,000 (reduced to ₹1,000 if total taxable income is below ₹5 Lakhs), alongside 1% per month penal interest on unpaid taxes under Section 234A.",
  },
  {
    q: "How does Merrafilings assist small businesses with tax compliance?",
    a: "Merrafilings provides end-to-end tax filing: our chartered accountants assess whether presumptive ITR-4 or regular ITR-3 yields lower tax, cross-reconcile your GST and banking records, file the return on the CBDT portal, and provide free year-round notice handling.",
  },
];

export default function ItrForSmallBusinessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <BusinessItrGuideLayout
      currentSlug="itr-for-small-business"
      title="ITR Filing for Small Business Online in India"
      breadcrumbLabel="ITR for Small Business"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Running a small business, retail store, wholesale agency, or home enterprise in India comes with statutory direct tax
          obligations. Every business owner is legally mandated to file an <strong className="font-semibold text-slate-950">Income Tax Return (ITR)</strong> annually,
          irrespective of whether the commercial enterprise turned a profit or operated at a financial loss.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Beyond fulfilling statutory direct tax requirements, timely business ITR filings establish financial solvency for bank loans,
          unlock MSME government credit facilities, protect against steep Section 234F late penalties, and enable lawful refund claims
          on withheld client TDS. This comprehensive guide details the right form choice, presumptive taxation benefits, documents,
          and filing procedures for Indian small business owners.
        </p>
      </section>

      {/* Section 1: What is ITR Filing for Small Business */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. What is Small Business ITR Filing and Why is it Essential?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Small business ITR filing refers to the electronic submission of annual commercial earnings, deductible expenses,
          and turnover figures to the Income Tax Department through the CBDT portal. It applies to sole proprietors, retail traders,
          manufacturing MSMEs, and independent service providers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">Bank Loan &amp; Overdraft Approvals</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Scheduled commercial banks mandate 3 consecutive years of verified ITR-V receipts to evaluate working capital loans, cash-credit (CC) limits, and business expansion financing.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">Recover Excess Client TDS</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              If commercial clients or online marketplaces deducted withholding tax under Section 194C or 194Q, e-filing your return is the only legal avenue to claim direct bank refunds.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">Government Tenders &amp; MSME Contracts</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Government e-Marketplace (GeM) registration and public procurement tenders require audited or verified tax returns as primary proof of operational stability.
            </p>
          </div>
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">Avoid Section 234F Fines</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Timely filing shields your venture from mandatory ₹5,000 late fees and compounding 1% monthly interest on unpaid taxes under Section 234A.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Form Selection (ITR-4 vs ITR-3) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Which ITR Form Should Small Business Owners Select?
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Choosing the correct form is the cornerstone of an error-free filing. Small businesses in India primarily file either Form ITR-4 (Sugam) or Form ITR-3:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          {SMALL_BIZ_FORMS.map((form, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                  {form.form}
                </h3>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors text-slate-700">
                  {form.who}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-3">{form.desc}</p>
              <div className="space-y-1.5 text-xs border-t border-slate-100 pt-3">
                <p><strong className="text-slate-800">Turnover Limit:</strong> {form.threshold}</p>
                <p><strong className="text-slate-800">Deemed Profit Rate:</strong> {form.profitRate}</p>
                <p className="text-emerald-700 font-medium">{form.booksRequired}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Presumptive Taxation Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. How Presumptive Taxation (Section 44AD) Unburdens Small Businesses
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Presumptive Taxation Scheme under Section 44AD is specifically crafted to minimize compliance overhead for small traders:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {PRESUMPTIVE_ADVANTAGES.map((item, idx) => (
            <div key={idx} className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/15 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 inline-block mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {item.badge}
              </span>
              <h3 className="text-sm sm:text-[15px] font-bold text-slate-950 group-hover:text-emerald-700 transition-colors mb-1">{item.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Step-by-Step Filing Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. How to File Small Business ITR Online: Step-by-Step
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Follow this structured four-stage workflow to execute an accurate submission on the CBDT e-filing portal:
        </p>

        <div className="space-y-3 mt-3">
          {FILING_STEPS.map((step, idx) => (
            <div key={idx} className="group p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors">
                {idx + 1}
              </span>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 text-sm transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Estimated Filing Costs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5. Transparent Filing Fee Structure for Small Enterprises
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">ITR Form</th>
                <th className="p-3 sm:p-4">Business Category</th>
                <th className="p-3 sm:p-4 text-emerald-800">Fee Range</th>
                <th className="p-3 sm:p-4">Scope of Professional Service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {ESTIMATED_COSTS.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-3 sm:p-4 font-bold text-slate-900">{row.form}</td>
                  <td className="p-3 sm:p-4">{row.businessType}</td>
                  <td className="p-3 sm:p-4 font-semibold text-emerald-900">{row.cost}</td>
                  <td className="p-3 sm:p-4 text-xs text-slate-600">{row.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
          Essential direct tax queries for small business owners and shopkeepers answered by Merrafilings Chartered Accountants.
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
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </BusinessItrGuideLayout>
  );
}
