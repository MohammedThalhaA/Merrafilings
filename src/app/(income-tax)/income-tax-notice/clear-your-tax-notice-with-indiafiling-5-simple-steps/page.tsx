"use client";

import React, { useState } from "react";
import Link from "next/link";
import IncomeTaxNoticeGuideLayout from "@/components/IncomeTaxNoticeGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronDown,
  Building2,
  Scale,
  Receipt,
  FileSpreadsheet,
  FileCheck2,
  Sparkles,
  Search,
  UploadCloud,
  SendHorizontal,
  FolderOpen,
  Award,
  DollarSign,
  HeartHandshake,
  KeyRound,
  FileSearch,
} from "lucide-react";

export default function ClearTaxNotice5StepsGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "How does Merrafilings assist in clearing an Income Tax Notice?",
      a: "Merrafilings pairs you with experienced Chartered Accountants who analyze your notice, verify its DIN authenticity, reconcile your ITR against Form 26AS, AIS, and TIS ledgers, compile necessary documentary proof, draft legally sound point-by-point replies, and submit the response online via the e-Proceedings portal while tracking case closure.",
    },
    {
      q: "What should I do if the tax department has made an incorrect calculation or ignored TDS credits?",
      a: "If the notice or Section 143(1) intimation contains an apparent mistake of fact or law (such as omitting advance tax, disallowing valid TDS, or arithmetic miscalculation), our CAs file an online Rectification Application under Section 154 of the Income Tax Act, rectifying the error without costly appeals.",
    },
    {
      q: "What is an adjournment petition, and when should I file one?",
      a: "If the statutory time given in the notice (e.g., 7 or 15 days) is insufficient to collect third-party documents such as bank certificates or property valuations, an Adjournment Petition can be filed on the e-filing portal before the deadline expires, stating legitimate reasons and requesting reasonable extra time.",
    },
    {
      q: "Can I dispute only a part of the tax demand raised?",
      a: "Yes. When responding to an outstanding demand on the portal, you can select 'Partially Disagree with Demand'. You can pay the undisputed amount and submit detailed objections, calculation schedules, and supporting evidence for the contested amount.",
    },
    {
      q: "What is the penalty if a notice under Section 142(1) is not complied with?",
      a: "Failure to comply with a Section 142(1) notice attracts a fixed penalty of ₹10,000 under Section 272A(1)(d) for each default. Additionally, the Assessing Officer is empowered to complete the assessment ex-parte as a 'Best Judgment Assessment' under Section 144.",
    },
  ];

  return (
    <IncomeTaxNoticeGuideLayout
      currentSlug="clear-your-tax-notice-with-indiafiling-5-simple-steps"
      title="Clear Your Tax Notice with Merrafilings in 5 Simple Steps: Complete Resolution Roadmap"
      breadcrumbLabel="Clear Your Notice in 5 Steps"
      metaPublishedDate="AY 2026-27 Compliant / Chartered Accountant Assisted"
      readingTime="10 min read"
      authorName="Merrafilings Direct Tax Litigation & Assessment Defense Desk"
    >
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Receiving an income tax notice can be an intimidating ordeal for individuals, professionals, and corporate entities alike. The intricate complexities of direct tax compliance, coupled with the unfamiliarity of assessment procedures under the Faceless Assessment Scheme, often compound anxiety. Nevertheless, a prompt, accurate, and legally robust response is imperative to avoid arbitrary tax demands, punitive interest charges, and prolonged litigation.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          By leveraging the structured, expert assistance of <strong>Merrafilings</strong>, you can efficiently resolve any tax notice with clarity, speed, and total peace of mind. This comprehensive guide outlines our signature 5-step resolution framework designed to defend your position and achieve statutory case closure.
        </p>
      </section>

      {/* Section 1: Understanding Tax Notices */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Tax Notices: Why Does the Department Issue Them?
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">
          Tax notices are formal administrative and statutory communications sent to taxpayers to highlight variances in filed returns, flag non-filing, or seek verification of deductions and financial transactions. Common causes include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block mb-0.5">Under-reporting of Income:</strong>
                Variations between declared income and figures captured in Form 26AS, AIS, or TIS ledgers.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block mb-0.5">Deduction &amp; Exemption Inconsistencies:</strong>
                Claiming deductions under Section 80C, 80D, 80G, or HRA that exceed employer Form 16 or lack proof.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block mb-0.5">Non-Filing or Belated Returns:</strong>
                Failing to submit mandatory returns where gross total income exceeds the basic exemption limit.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block mb-0.5">CASS Computerized Scrutiny:</strong>
                Algorithmic selection based on high refund claims, unsecured business loans, or abnormal turnover dips.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 5-Step Resolution Roadmap */}
      <section className="space-y-6 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. The 5-Step Tax Notice Resolution Framework
        </h2>

        {/* Step 1 */}
        <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
              Step 1: Analyze the Tax Notice &amp; Verify DIN
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
            The initial and foundational step is to thoroughly examine the notice. Check the Assessment Year, issuing officer details, and verify the mandatory Document Identification Number (DIN). Determine the statutory section (e.g., Section 139(9) defective return, Section 143(1) intimation, Section 142(1) inquiry, or Section 148 reassessment) and note any penalty or interest implications under Sections 234A/B/C.
          </p>
        </div>

        {/* Step 2 */}
        <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
              Step 2: Seek Professional Assistance from Merrafilings
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
            Tax statutes are intricate and constantly evolving. Merrafilings connects you directly with certified Chartered Accountants and direct tax practitioners who evaluate whether to accept the proposed addition, contest the demand with supporting legal arguments, or file a Section 154 rectification application for computational errors.
          </p>
        </div>

        {/* Step 3 */}
        <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
              Step 3: Compile Complete Supporting Documentation
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
            Gather all primary financial and legal paperwork required to substantiate your position. This includes bank statements for all accounts, salary slips, Form 16/16A, investment receipts (ELSS, PPF, health insurance), previous ITR-V acknowledgments, capital gains statements, and registered purchase/sale deeds.
          </p>
        </div>

        {/* Step 4 */}
        <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
              04
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
              Step 4: Draft a Legally Sound Point-by-Point Rebuttal
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
            Merrafilings tax attorneys draft structured, formal submissions that address each point raised by the tax authority sequentially. Statements are substantiated by citing relevant provisions of the Income Tax Act, CBDT circulars, and Supreme Court or High Court precedents, accompanied by organized annexures.
          </p>
        </div>

        {/* Step 5 */}
        <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
              05
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
              Step 5: Submit Digitally via e-Proceedings &amp; Monitor Closure
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
            The finalized response is uploaded directly to the e-filing portal under Pending Actions &gt; e-Proceedings before the statutory deadline. Merrafilings captures the official timestamped acknowledgment receipt and monitors case progression until the Assessing Officer passes a closure order.
          </p>
        </div>
      </section>

      {/* Section 3: Benefits of Using Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Key Benefits of Resolving Your Notice with Merrafilings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <Award className="w-5 h-5 text-emerald-600" />
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Expert CA Panel</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct access to chartered accountants specializing in faceless assessments and direct tax litigation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <HeartHandshake className="w-5 h-5 text-blue-600" />
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Total Stress Reduction</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We handle document reconciliation, legal drafting, and portal submissions with professional diligence.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <DollarSign className="w-5 h-5 text-amber-600" />
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Penalty Prevention</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Avoid crushing penalties under Section 270A (50%-200%) and Section 272A (₹10,000 per default).
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Frequently Asked Questions on Notice Resolution
        </h2>
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-medium text-slate-900 hover:text-emerald-700 hover:bg-slate-50/60 transition cursor-pointer"
                >
                  <span className="text-xs sm:text-[13.5px] leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </IncomeTaxNoticeGuideLayout>
  );
}
