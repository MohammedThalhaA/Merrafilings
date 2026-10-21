"use client";

import React, { useState } from "react";
import Link from "next/link";
import TanGuideLayout from "@/components/TanGuideLayout";
import {
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Building2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Scale,
  Clock,
  Landmark,
  FileCheck,
  Receipt,
  Users,
  Percent,
} from "lucide-react";

export default function TanRegistrationGuideForIndianBusinessesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "At what point in the business lifecycle must an Indian startup apply for TAN?",
      a: "An Indian business should apply for TAN immediately upon incorporation or before executing any transaction where TDS is statutory required—such as hiring the first salaried employee (Section 192), entering a commercial lease with monthly rent over ₹50,000 (Section 194I), or engaging professional vendors or software consultants (Section 194J).",
    },
    {
      q: "Does a small proprietary business or MSME need TAN if it has no salaried employees?",
      a: "Yes, if the business is subject to tax audit under Section 44AB (turnover exceeding ₹1 Crore for business or ₹50 Lakhs for professionals) or makes contractual payments exceeding ₹30,000 per single bill / ₹1,00,000 aggregate per year (Section 194C), or pays rent over ₹2,40,000 per year (Section 194I).",
    },
    {
      q: "Can a foreign company operating an Indian branch office obtain an Indian TAN?",
      a: "Yes. Foreign corporations operating authorized branch offices, project offices, or liaison offices in India can apply for a TAN under Form 49B by selecting the 'Company / Branch of Foreign Company' category, using their Indian office address and foreign incorporation credentials.",
    },
    {
      q: "How does our TAN ensure that our vendors and employees get tax credit?",
      a: "When you deposit deducted tax under your 10-digit TAN via Challan 281 and file quarterly returns (Form 24Q or 26Q), the CBDT system automatically credits the tax directly to the payee's PAN. The deduction then reflects seamlessly in the payee's Form 26AS, AIS, and TIS.",
    },
    {
      q: "What is the consequence of deducting TDS from a vendor without possessing a TAN?",
      a: "Deducting TDS without quoting a valid TAN is illegal. The bank will reject Challan 281, preventing you from depositing the tax. This triggers a ₹10,000 penalty under Section 272BB, interest of 1.5% per month under Section 201(1A), and 30% disallowance of the vendor payment under Section 40(a)(ia).",
    },
    {
      q: "Is TAN registration valid across all Indian states?",
      a: "Yes. The Tax Deduction and Collection Account Number is a central federal tax identifier issued by the Income Tax Department of India. It has nationwide jurisdiction across all states and union territories.",
    },
  ];

  return (
    <TanGuideLayout
      currentSlug="tan-registration-guide-for-indian-businesses"
      title="TAN Registration Essential Guide for Indian Businesses"
      breadcrumbLabel="Essential Guide for Businesses"
      metaPublishedDate="AY 2026-27 Compliant / Section 203A"
      readingTime="7 min read"
      authorName="Merrafilings Direct Tax & TDS Compliance Desk"
    >
      {/* Intro Box */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/80 rounded-2xl p-6 sm:p-7 mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Foundational Tax Deductor Guide for Indian Enterprises
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              The <strong>Tax Deduction and Collection Account Number (TAN)</strong> is an indispensable pillar of corporate governance in India. Whether launching a tech startup, scaling an MSME manufacturing unit, running a partnership firm, or operating a professional consultancy, securing a TAN under <strong>Section 203A of the Income Tax Act, 1961</strong> enables lawful tax withholding, protects against <strong>30% expense disallowances (Section 40(a)(ia))</strong>, and safeguards against <strong>₹10,000 Section 272BB fines</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Understanding TAN & Its Role */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            01
          </span>
          Understanding TAN and Its Role in Indian Business
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          In India's direct tax framework, the government entrusts businesses with the statutory duty of acting as withholding tax collectors. When you pay a salary to an engineer, professional fees to an advocate, or contract sums to an IT vendor, you must deduct a prescribed percentage at source and remit it to the government treasury.
        </p>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          A TAN is an <strong>alphanumeric 10-digit identifier</strong> issued to identify who made the deduction and ensure that the credit is appropriately mapped to the recipient's Permanent Account Number (PAN).
        </p>

        {/* 3 Core Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
            <strong className="text-xs font-bold text-slate-900 block mb-1">Withholding Agent Status:</strong>
            <span className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Empowers your business to legally deduct TDS and collect TCS without attracting unauthorized withholding penalties.
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
            <strong className="text-xs font-bold text-slate-900 block mb-1">Challan 281 Acceptance:</strong>
            <span className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Authorized commercial banks and the e-Pay Tax portal require a valid 10-digit TAN before accepting monthly tax payments.
            </span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
            <strong className="text-xs font-bold text-slate-900 block mb-1">Certificate Issuance:</strong>
            <span className="text-[11px] text-slate-600 font-normal leading-relaxed">
              Mandatory prerequisite for logging onto TRACES to download digitally verified Form 16 and Form 16A certificates for payees.
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Why Accurate TAN Management Matters */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            02
          </span>
          Why Accurate TAN Management Matters for Indian Businesses
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Diligent compliance with your TAN registration provides significant operational and fiscal benefits:
        </p>

        {/* 4 Interactive Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5">
              1. 100% Tax Deduction Allowance (Avoid Sec 40(a))
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Under Section 40(a)(ia), if a business fails to deduct TDS or fails to deposit it using a valid TAN, 30% of that vendor expense is disallowed as a taxable deduction, drastically inflating income tax liability.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
              2. Seamless Tax Audit Compliance (Sec 44AB)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Statutory tax auditors scrutinize Form 3CD (Clauses 21 and 34) for complete TAN compliance. Clean quarterly TDS filing records ensure an unqualified tax audit report without adverse auditor remarks.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5">
              3. Vendor Trust &amp; Payee Satisfaction
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Suppliers and contractors monitor their Form 26AS real-time. Timely filing under your TAN credits their withholding taxes instantly, preserving commercial goodwill and preventing payment disputes.
            </p>
          </div>

          <div className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
              4. Banking &amp; Investor Due Diligence
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Venture capital investors, private equity funds, and lending banks perform thorough statutory due diligence. Possessing an active TAN and clean TRACES history is a mandatory condition precedent for funding.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The 5-Step Procedural Lifecycle */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            03
          </span>
          The 5-Step TAN Allotment Lifecycle
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          The procedural journey from preparing Form 49B to receiving your official TAN allotment letter:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              1
            </div>
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Application Form 49B Preparation:</strong>
              Draft the statutory Form 49B on the Protean NSDL TIN portal. Map your jurisdiction Assessing Officer (AO) Code based on registered office location.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              2
            </div>
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Form Submission &amp; Evidence Validation:</strong>
              Enter entity PAN, legal incorporation date, registered premises address, and Principal Officer particulars (Director, Partner, or Karta).
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              3
            </div>
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Government Processing Fee Payment:</strong>
              Remit the statutory ₹77 processing fee (₹65 base fee + 18% GST) via online banking, debit card, or UPI.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              4
            </div>
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Acknowledgement Receipt Generation:</strong>
              Save the generated 14-digit acknowledgment receipt. Affix authorized signature and dispatch with physical proofs to Protean Pune within 15 days (unless DSC e-signed).
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              5
            </div>
            <div className="text-xs text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-0.5">Official Issuance of 10-Digit TAN:</strong>
              The Income Tax Department allots the TAN within 5–7 working days, transmitting the digitally signed allotment letter via email, followed by the physical document.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Key Commercial TDS Sections Handled via TAN */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            04
          </span>
          Primary Commercial TDS Sections Managed Under Your TAN
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
          Indian businesses utilize their TAN to withhold tax across the following primary commercial transaction categories:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Section</th>
                <th className="py-3 px-4">Nature of Payment</th>
                <th className="py-3 px-4">Statutory Threshold</th>
                <th className="py-3 px-4">Standard TDS Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-emerald-700">Section 192</td>
                <td className="py-3 px-4">Salary payments to employees</td>
                <td className="py-3 px-4">Basic tax exemption limit</td>
                <td className="py-3 px-4">Average slab rates</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-blue-700">Section 194C</td>
                <td className="py-3 px-4">Payments to contractors &amp; subcontractors</td>
                <td className="py-3 px-4">₹30,000 single / ₹1,00,000 aggregate</td>
                <td className="py-3 px-4">1% (Ind/HUF) / 2% (Others)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-purple-700">Section 194I</td>
                <td className="py-3 px-4">Rent for land, building, or furniture</td>
                <td className="py-3 px-4">₹2,40,000 per financial year</td>
                <td className="py-3 px-4">10% (Building) / 2% (Plant/Machinery)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-amber-700">Section 194J</td>
                <td className="py-3 px-4">Professional &amp; technical services fees</td>
                <td className="py-3 px-4">₹30,000 per financial year</td>
                <td className="py-3 px-4">10% (Prof) / 2% (Tech/BPO)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-bold text-rose-700">Section 195</td>
                <td className="py-3 px-4">Foreign remittances &amp; payments to non-residents</td>
                <td className="py-3 px-4">Any sum chargeable to tax</td>
                <td className="py-3 px-4">Treaty (DTAA) or Domestic rate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Interactive FAQ Accordion */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
            05
          </span>
          Frequently Asked Questions on Business TAN Management
        </h2>
        <div className="space-y-3 pt-1">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-3xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-[14px] text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </TanGuideLayout>
  );
}
