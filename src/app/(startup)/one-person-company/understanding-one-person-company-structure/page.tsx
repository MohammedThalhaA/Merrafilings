"use client";

import React, { useState } from "react";
import Link from "next/link";
import OpcGuideLayout from "@/components/OpcGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users2,
  Scale,
  Award,
  AlertCircle,
  Layers,
  FileCheck2,
  Lock,
  Globe2,
  Compass,
  Zap,
  Check,
  Building,
  Target,
  Percent,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Can an OPC have multiple directors even though it has only one shareholder?",
    a: "Yes. While an OPC can have only ONE shareholder/member, Section 149(1) of the Companies Act, 2013 permits an OPC to appoint up to 15 directors on its board to manage day-to-day executive operations. All equity and dividend ownership remains 100% with the sole member.",
  },
  {
    q: "What business activities are strictly prohibited for a One Person Company?",
    a: "Under Rule 3 of the Companies (Incorporation) Rules, 2014, an OPC cannot be incorporated or converted into a Section 8 (non-profit/charitable) company. Furthermore, an OPC cannot carry out Non-Banking Financial Investment (NBFC) activities, including investments in securities of any body corporate.",
  },
  {
    q: "Can an OPC convert into a Private Limited Company or Public Limited Company?",
    a: "Yes. Following the MCA 2021 amendments, an OPC can convert voluntarily into a Private Limited Company or Public Limited Company at any time after incorporation by simply altering its Memorandum and Articles of Association and increasing its member count to the requisite statutory minimum (2 for Private Limited, 7 for Public Limited).",
  },
  {
    q: "What tax rate applies to a One Person Company in India?",
    a: "An OPC is taxed as a domestic corporate entity under the Income Tax Act, 1961. It can opt for the concessional corporate tax rate of 22% (effective ~25.17% inclusive of surcharge and cess) under Section 115BAA, provided it does not claim specified exemptions or deductions, or standard base rates under Section 115BAB for new manufacturing companies.",
  },
  {
    q: "Can an individual change their nominated nominee in an OPC?",
    a: "Yes. The sole member of an OPC may change the nominee at any time by giving written notice to the company and the nominee. The company must then file Form INC-4 with the Registrar of Companies within 30 days of receiving notice, along with the written consent of the new nominee in Form INC-3.",
  },
];

export default function UnderstandingOnePersonCompanyStructurePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <OpcGuideLayout
      currentSlug="understanding-one-person-company-structure"
      title="One Person Company: A Comprehensive Guide to Structure & Success"
      breadcrumbLabel="OPC Structure & Advantages"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-800">
          When starting a new commercial enterprise in India, founders have several organizational vehicles to choose from—including sole
          proprietorships, general partnerships, LLPs, and private limited companies. As an increasingly popular and sophisticated choice, the{" "}
          <strong className="text-slate-900 font-semibold">One Person Company (OPC)</strong> has emerged as the premier corporate vehicle
          for independent business owners who desire absolute operational ownership and unilateral decision-making power combined with the
          uncompromising legal shield of <strong className="text-slate-900 font-semibold">limited liability</strong>.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          Introduced under the Companies Act of 2013, the OPC is an ingenious hybrid construct: it embodies the nimbleness and simplicity of
          a sole proprietorship while providing the statutory standing, perpetual succession, and financial protections of a registered company.
          This guide provides a comprehensive legal dissection of the OPC structure, its anatomical framework, strategic advantages, and compliance rules.
        </p>
      </section>

      {/* Anatomy of the OPC Structure */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Building2 className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            The Three Pillars of the OPC Corporate Structure
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          The structural architecture of an OPC rests upon three fundamental legal principles:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Single Ownership
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formed with exactly one natural person as the member/shareholder. The member exercises 100% voting power, receives 100% of dividends,
              and retains total strategic control without external interference.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Limited Liability Shield
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The owner&apos;s financial liability is strictly limited to the unpaid subscription amount of their shares. Commercial losses or business
              bankruptcies cannot attach to the owner&apos;s personal bank accounts or private property.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Separate Legal Entity
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The OPC is an artificial judicial person distinct from its creator. It can acquire property, sign commercial leases, enter into
              contracts, hold patents, and initiate legal proceedings under its own corporate seal.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Award className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Strategic Advantages of Choosing an OPC for Solo Ventures
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>1. Complete Operational Control</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike partnerships or private limited entities where decision-making can be paralyzed by boardroom dissent, the sole owner of an
              OPC makes strategic and tactical decisions instantly, aligning management with visionary goals.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>2. Lighter Regulatory Burden</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              OPCs are exempted from tedious corporate compliance requirements under the Companies Act, including the mandate to hold Annual
              General Meetings (AGMs) and file complex cash flow statements.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>3. Professional Brand Recognition</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operating under a registered corporate suffix &ldquo;(OPC) Private Limited&rdquo; elevates your business stature in enterprise markets,
              enabling solo founders to secure lucrative corporate vendor contracts and enterprise software deals.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>4. Corporate Tax Optimizations</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              OPCs can leverage corporate tax regimes under Section 115BAA with a base rate of 22%, along with standard corporate deductions for
              business expenses, director remuneration, and depreciation that are inaccessible to sole proprietors.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>5. Unhindered Access to Bank Finance</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scheduled commercial banks and financial institutions evaluate corporate balance sheets far more favorably than individual tax returns,
              granting OPCs access to institutional credit lines and government startup loans.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid across 4 Structures */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Scale className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Comparative Matrix: OPC vs Private Limited vs LLP vs Proprietorship
          </h2>
        </div>

        <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3.5 sm:p-4">Criteria</th>
                <th className="p-3.5 sm:p-4 text-emerald-700 bg-emerald-50/60">One Person Company</th>
                <th className="p-3.5 sm:p-4">Private Limited</th>
                <th className="p-3.5 sm:p-4">LLP</th>
                <th className="p-3.5 sm:p-4">Sole Proprietorship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/70">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Minimum Members</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">1 Member</td>
                <td className="p-3.5 sm:p-4">2 Members</td>
                <td className="p-3.5 sm:p-4">2 Partners</td>
                <td className="p-3.5 sm:p-4">1 Individual</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Personal Liability</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">Limited</td>
                <td className="p-3.5 sm:p-4">Limited</td>
                <td className="p-3.5 sm:p-4">Limited</td>
                <td className="p-3.5 sm:p-4 text-rose-600 font-medium">Unlimited</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Perpetual Succession</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">Yes (via Nominee)</td>
                <td className="p-3.5 sm:p-4">Yes</td>
                <td className="p-3.5 sm:p-4">Yes</td>
                <td className="p-3.5 sm:p-4 text-slate-500">No (Dissolves on death)</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Board Meetings</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">1 per half year</td>
                <td className="p-3.5 sm:p-4">4 per year (Quarterly)</td>
                <td className="p-3.5 sm:p-4">As per agreement</td>
                <td className="p-3.5 sm:p-4">None</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Tax Structure</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">22% Corporate Tax</td>
                <td className="p-3.5 sm:p-4">22% Corporate Tax</td>
                <td className="p-3.5 sm:p-4">30% Flat Tax</td>
                <td className="p-3.5 sm:p-4">Individual Slabs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Statutory Rules & Convertibility */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Legal Framework &amp; Restrictions for One Person Companies
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            While offering extraordinary freedom, the Companies Act specifies clear guardrails to maintain corporate governance:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Mandatory Nominee:</strong> Form INC-3 consent must be lodged during incorporation. If the nominee withdraws, a replacement
                must be nominated within 15 days, and Form INC-4 filed within 30 days.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Prohibited Sectors:</strong> An OPC cannot carry out Non-Banking Financial Investment activities or invest in equity shares
                of other corporate bodies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Voluntary Conversion:</strong> You are free to convert your OPC into a Private Limited Company at any point to bring on
                investors, without waiting for any mandatory lock-in period.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Frequently Asked Questions on OPC Structure &amp; Governance
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 text-slate-900 font-semibold text-xs sm:text-sm hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4.5 sm:px-4.5 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </OpcGuideLayout>
  );
}

