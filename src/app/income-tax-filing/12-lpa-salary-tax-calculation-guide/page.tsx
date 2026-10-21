"use client";

import React, { useState } from "react";
import IncomeTaxGuideLayout from "@/components/IncomeTaxGuideLayout";
import {
  Calculator,
  Percent,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Receipt,
  FileCheck,
  Sparkles,
  ArrowRight,
  Layers,
  AlertCircle,
  Coins,
  Scale,
  Briefcase,
  Building,
} from "lucide-react";

const SALARY_COMPONENTS = [
  {
    title: "Basic Salary (40% - 50%)",
    badge: "Fully Taxable",
    desc: "The core foundational component of your compensation structure. It serves as the calculation base for EPF, Gratuity, and HRA exemptions.",
    color: "blue",
  },
  {
    title: "House Rent Allowance (HRA)",
    badge: "Section 10(13A) Exempt",
    desc: "Exempt up to the least of: actual HRA received, 50% of basic (metro) or 40% (non-metro), or rent paid in excess of 10% of basic salary.",
    color: "emerald",
  },
  {
    title: "Special & Flexi Allowances",
    badge: "Fully Taxable",
    desc: "Discretionary allowance paid to bridge basic salary and overall CTC. Subject to standard income tax slab rates without specific exemptions.",
    color: "purple",
  },
  {
    title: "Employee Provident Fund (EPF)",
    badge: "Section 80C Deductible",
    desc: "12% mandatory monthly contribution deducted towards EPFO. Fully eligible for deduction under Section 80C up to ₹1.5 Lakh per annum.",
    color: "indigo",
  },
];

const COMPARISON_TABLE = [
  {
    metric: "Gross Annual CTC",
    oldRegime: "₹12,00,000",
    newRegime: "₹12,00,000",
  },
  {
    metric: "Standard Deduction",
    oldRegime: "₹50,000",
    newRegime: "₹75,000 (Budget Updated)",
  },
  {
    metric: "Section 80C Deductions (EPF/PPF/ELSS)",
    oldRegime: "₹1,50,000",
    newRegime: "Not Allowed (₹0)",
  },
  {
    metric: "Section 80D Health Insurance",
    oldRegime: "₹25,000",
    newRegime: "Not Allowed (₹0)",
  },
  {
    metric: "Net Taxable Income",
    oldRegime: "₹9,75,000",
    newRegime: "₹11,25,000",
  },
  {
    metric: "Base Tax Liability",
    oldRegime: "₹1,07,500",
    newRegime: "₹68,750",
  },
  {
    metric: "Health & Education Cess (4%)",
    oldRegime: "₹4,300",
    newRegime: "₹2,750",
  },
  {
    metric: "Total Tax Outflow",
    oldRegime: "₹1,11,800",
    newRegime: "₹71,500",
  },
  {
    metric: "Net In-Hand Annual Savings",
    oldRegime: "Baseline",
    newRegime: "Save ₹40,300 under New Regime",
  },
];

const DEDUCTION_STRATEGIES = [
  {
    section: "Section 80C",
    limit: "₹1,50,000",
    title: "Core Statutory Investments",
    desc: "Max out your Employee Provident Fund (EPF), Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), and 5-year tax-saving fixed deposits.",
  },
  {
    section: "Section 80CCD(1B)",
    limit: "₹50,000",
    title: "National Pension System (NPS)",
    desc: "Exclusive additional deduction over and above Section 80C for Tier-1 NPS contributions, securing retirement wealth while reducing taxable income.",
  },
  {
    section: "Section 80D",
    limit: "Up to ₹1,00,000",
    title: "Comprehensive Health Insurance",
    desc: "Deduction of ₹25,000 for self/family, plus up to ₹50,000 for senior citizen parents, including ₹5,000 for annual preventive health check-ups.",
  },
  {
    section: "Section 24(b)",
    limit: "₹2,00,000",
    title: "Home Loan Interest Repayment",
    desc: "Claim deduction up to ₹2 Lakhs on home loan interest paid for self-occupied residential property under the Old Tax Regime.",
  },
];

const FAQS = [
  {
    q: "How much tax do I pay on a ₹12 LPA salary under the New Tax Regime?",
    a: "Under the updated New Tax Regime (AY 2026-27), with the enhanced Standard Deduction of ₹75,000, your taxable income is ₹11,25,000. The total tax payable is ₹68,750 plus 4% cess (₹2,750), totaling ₹71,500. This is significantly lower than the Old Regime unless you claim deductions exceeding ₹3.75 Lakhs.",
  },
  {
    q: "What is the monthly in-hand salary for a ₹12 LPA package?",
    a: "Under the New Tax Regime, after deducting annual tax of ₹71,500 and annual employee EPF of approximately ₹72,000 to ₹1,44,000, your monthly in-hand take-home salary ranges between ₹83,000 and ₹88,000 depending on your employer's EPF policy.",
  },
  {
    q: "Can I claim HRA exemption if I opt for the New Tax Regime?",
    a: "No. House Rent Allowance (HRA) exemption under Section 10(13A) is strictly available only under the Old Tax Regime. The New Tax Regime disallows HRA, LTA, and Chapter VI-A deductions (except employer NPS under 80CCD(2)).",
  },
  {
    q: "At what deduction level does the Old Tax Regime beat the New Tax Regime on ₹12 LPA?",
    a: "For a ₹12 LPA gross salary, the break-even deduction point is approximately ₹3,75,000. If your combined deductions across Section 80C, 80D, HRA, and Section 24(b) home loan interest exceed ₹3.75 Lakhs, the Old Regime results in lower tax; otherwise, the New Regime is superior.",
  },
  {
    q: "Is standard deduction available under both tax regimes for salaried professionals?",
    a: "Yes! Standard deduction is available under both regimes. For salaried employees, the standard deduction is ₹50,000 under the Old Regime and ₹75,000 under the updated New Tax Regime.",
  },
  {
    q: "How is the 4% Health and Education Cess calculated?",
    a: "Health and Education Cess is calculated as a flat 4% on the total basic income tax payable (after adjusting for any applicable rebates under Section 87A or surcharges). For example, if basic tax is ₹1,07,500, cess is 4% of ₹1,07,500 = ₹4,300.",
  },
  {
    q: "Can I switch between the Old and New Tax Regimes every financial year?",
    a: "Yes. Salaried individuals with no business or professional income can freely choose between the Old and New Tax Regimes each financial year at the time of filing their ITR-1 or ITR-2.",
  },
  {
    q: "What documents must I submit to my employer to calculate TDS accurately on ₹12 LPA?",
    a: "You should submit Form 12BB along with rent receipts, rent agreement, landlord PAN (if annual rent exceeds ₹1 Lakh), health insurance policy receipts, tuition fee receipts, and EPF/PPF investment proofs before your payroll cutoff.",
  },
  {
    q: "What happens if my employer deducts higher TDS than my final calculated tax?",
    a: "If excess TDS was deducted by your employer, you will automatically receive a tax refund with statutory interest under Section 244A directly to your pre-validated bank account when you file your ITR with Merrafilings.",
  },
  {
    q: "How does Merrafilings assist salaried individuals with ₹12 LPA salary tax filing?",
    a: "Merrafilings assigns a dedicated Chartered Accountant to review your Form 16, cross-reconcile your AIS and Form 26AS, model both Old and New regimes with precision, maximize legal refunds, and e-verify your ITR-1 or ITR-2 seamlessly.",
  },
];

export default function TwelveLpaSalaryTaxCalculationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <IncomeTaxGuideLayout
      currentSlug="12-lpa-salary-tax-calculation-guide"
      title="₹12 LPA Salary: Tax Calculation Explained with Real Examples"
      breadcrumbLabel="₹12 LPA Salary Tax Calculation"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Direct Tax Advisory Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          Earning a salary of <strong className="font-semibold text-slate-950">₹12 Lakhs Per Annum (₹12 LPA)</strong> is
          a major financial milestone in India. However, without proactive tax planning, a substantial portion of your hard-earned
          earnings can be consumed by income tax and mandatory deductions. Understanding how the Income Tax Department assesses
          your salary across Old and New tax regimes is essential for maximizing your monthly take-home pay.
        </p>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          This comprehensive guide provides a mathematical, step-by-step breakdown of tax liability on a ₹12 LPA CTC,
          analyzing gross versus net salary structures, standard deductions, Chapter VI-A investment exemptions, and a
          real-world case study comparing Old vs. New Tax Regimes for Assessment Year 2026-27.
        </p>
      </section>

      {/* Section 1: Income Tax Classification in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding the Basics: Income Tax Classification in India
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Under the Income Tax Act, 1961, all individual earnings are classified into five statutory heads of income:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">Head 1</span>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Income from Salaries</h3>
            <p className="text-xs text-slate-600">All wages, allowances, perquisites, and bonuses received from an employer.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">Head 2</span>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Income from House Property</h3>
            <p className="text-xs text-slate-600">Rental earnings or deemed rental values from owned residential or commercial properties.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider block mb-1">Head 3</span>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Profits from Business or Profession</h3>
            <p className="text-xs text-slate-600">Commercial profits earned by freelancers, proprietary owners, or professionals.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-1">Head 4 & 5</span>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Capital Gains & Other Sources</h3>
            <p className="text-xs text-slate-600">Gains from equities, mutual funds, real estate, bank interest, and dividend payouts.</p>
          </div>
        </div>
        <p className="text-xs text-slate-600 italic">
          For a salaried employee earning ₹12 LPA, earnings are primarily evaluated under "Income from Salaries," subject to deductions under Chapter VI-A.
        </p>
      </section>

      {/* Section 2: Breaking Down the ₹12 LPA Salary Structure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Breaking Down the ₹12 LPA Salary Components
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Your Cost to Company (CTC) of ₹12 LPA is never the exact amount credited to your bank account. It is divided into
          gross salary, tax-exempt allowances, and employer retirement contributions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {SALARY_COMPONENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Step-by-Step Tax Calculation Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Step-by-Step Tax Calculation for ₹12 LPA Salary
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          The Income Tax Department applies a sequential procedure to evaluate your ultimate tax liability:
        </p>

        <div className="space-y-3.5">
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-emerald-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs">1</span>
              <span>Compute Total Gross Salary</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed pl-8">
              Sum all salary credits including Basic Pay, HRA, Special Allowance, and variable performance bonuses. For this model, Gross Salary = <strong>₹12,00,000</strong>.
            </p>
          </div>

          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">2</span>
              <span>Apply Statutory Standard & Chapter VI-A Deductions</span>
            </div>
            <div className="text-xs text-slate-700 leading-relaxed pl-8 space-y-1.5">
              <p>• <strong>Standard Deduction:</strong> ₹50,000 under Old Regime / ₹75,000 under New Regime.</p>
              <p>• <strong>Section 80C:</strong> Up to ₹1,50,000 for EPF, PPF, ELSS, life insurance, and child tuition fees.</p>
              <p>• <strong>Section 80D:</strong> Up to ₹25,000 for family health insurance premiums (up to ₹50,000 for senior parents).</p>
            </div>
          </div>

          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-purple-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs">3</span>
              <span>Calculate Base Tax Using Applicable Slabs</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed pl-8">
              Tax is computed progressively segment by segment according to the prevailing rates under the chosen regime.
            </p>
          </div>

          <div className="p-4.5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 mb-2 text-amber-800 font-semibold text-sm">
              <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs">4</span>
              <span>Add 4% Health & Education Cess</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed pl-8">
              Multiply the calculated basic tax by 4% to arrive at the final payable tax or refundable amount.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Real-World Numerical Case Study */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Real-World Case Study: Old vs. New Tax Regime on ₹12 LPA
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Let us consider a salaried professional earning ₹12,00,000 annually with ₹1.5 Lakhs invested in Section 80C (EPF/ELSS)
          and ₹25,000 paid towards health insurance under Section 80D:
        </p>

        {/* Detailed Breakdown Box */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Old Tax Regime Step-by-Step</span>
            <span className="text-xs text-slate-400">AY 2026-27</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <p className="text-slate-400">Gross Salary: <span className="text-white font-medium">₹12,00,000</span></p>
              <p className="text-slate-400">Standard Deduction: <span className="text-white font-medium">- ₹50,000</span></p>
              <p className="text-slate-400">Section 80C Deduction: <span className="text-white font-medium">- ₹1,50,000</span></p>
              <p className="text-slate-400">Section 80D Mediclaim: <span className="text-white font-medium">- ₹25,000</span></p>
              <p className="text-emerald-300 font-semibold pt-1 border-t border-slate-800">
                Total Deductions: ₹2,25,000
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="text-slate-400">Taxable Net Income: <span className="text-white font-medium">₹9,75,000</span></p>
              <p className="text-slate-400">0 to ₹2.5 Lakhs (Nil): <span className="text-white font-medium">₹0</span></p>
              <p className="text-slate-400">₹2.5L to ₹5.0L (5%): <span className="text-white font-medium">₹12,500</span></p>
              <p className="text-slate-400">₹5.0L to ₹9.75L (20% on ₹4.75L): <span className="text-white font-medium">₹95,000</span></p>
              <p className="text-emerald-300 font-semibold pt-1 border-t border-slate-800">
                Base Tax: ₹1,07,500 + 4% Cess (₹4,300) = ₹1,11,800
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-4 overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Tax Calculation Parameter</th>
                <th className="p-3 sm:p-4">Old Tax Regime</th>
                <th className="p-3 sm:p-4 text-emerald-800 bg-emerald-50/50">New Tax Regime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMPARISON_TABLE.map((row, idx) => (
                <tr key={idx} className={idx === COMPARISON_TABLE.length - 1 ? "bg-emerald-50/70 font-semibold text-emerald-950" : ""}>
                  <td className="p-3 sm:p-4 font-medium text-slate-900">{row.metric}</td>
                  <td className="p-3 sm:p-4">{row.oldRegime}</td>
                  <td className="p-3 sm:p-4 text-emerald-900">{row.newRegime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Key Takeaway:</strong> With standard ₹2.25 Lakhs of deductions, you save <strong>₹40,300</strong> by choosing the
            New Tax Regime. You should choose the Old Regime only if your combined deductions (HRA + 80C + 80D + home loan interest) exceed ₹3,75,000.
          </p>
        </div>
      </section>

      {/* Section 5: Strategies to Optimize Tax Savings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Smart Tax Planning Strategies for Salaried Professionals
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Legally minimizing your tax footprint requires structured investments aligned with income tax exemptions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {DEDUCTION_STRATEGIES.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  {item.section}
                </span>
                <span className="text-xs font-semibold text-slate-900">{item.limit}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mt-2 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Common queries regarding ₹12 LPA salary tax calculations, deductions, and regime choices answered by tax experts.
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
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40">
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
