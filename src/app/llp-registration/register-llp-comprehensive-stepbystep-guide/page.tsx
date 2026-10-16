"use client";

import React, { useState } from "react";
import Link from "next/link";
import LlpGuideLayout from "@/components/LlpGuideLayout";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Building,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  ArrowRight,
  Globe2,
  FileSignature,
  Scale,
  Users,
  BadgeDollarSign,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is the legal eligibility criteria for LLP registration in India?",
    a: "Any individual or body corporate capable of entering into a legally binding contract can become a partner in an LLP. Individual partners must be at least 18 years of age, of sound mind, and not undischarged insolvents. Minors cannot be partners in an LLP, even for the purpose of sharing profits (unlike under the Partnership Act, 1932).",
  },
  {
    q: "How long does the entire LLP registration process take?",
    a: "With complete and verified documentation, the incorporation process typically takes 7 to 12 working days. Name approval via RUN-LLP takes 1-2 working days, FiLLiP verification and Certificate of Incorporation issuance takes 3-5 days, and execution of the LLP Agreement along with Form 3 filing takes another 2-4 days.",
  },
  {
    q: "Can foreign nationals and NRIs register an LLP in India?",
    a: "Yes. Foreign nationals, NRIs, and foreign corporate entities can register an LLP in India. Under current FDI guidelines, 100% Foreign Direct Investment (FDI) is permitted under the automatic route in sectors where 100% FDI is allowed without conditions. The only mandatory statutory condition is that at least one designated partner must be an Indian resident.",
  },
  {
    q: "How can changes be made to an already filed LLP agreement?",
    a: "Any amendment to an existing LLP agreement—such as changes in partner profit-sharing ratios, capital contribution increases, admission of new partners, or addition of business objectives—requires drafting a Supplementary LLP Agreement on non-judicial stamp paper and filing statutory MCA Form 3 within 30 days of the modification.",
  },
  {
    q: "What is the penalty if an LLP does not file its annual returns on time?",
    a: "Delayed filing of statutory annual forms (Form 11 and Form 8) previously attracted a severe penalty of ₹100 per day without ceiling. Under the decriminalized LLP (Amendment) Act, late fees have been rationalized to small-LLP-friendly slabs, but persistent default can still lead to prosecution and freezing of MCA status.",
  },
  {
    q: "Can an LLP have more than two designated partners?",
    a: "Yes. An LLP must have at least two designated partners, but there is no maximum limit. All designated partners must obtain a DPIN/DIN and Class 3 Digital Signature Certificate to sign statutory forms and assume legal fiduciary responsibilities on behalf of the LLP.",
  },
];

const STATUTORY_ROADMAP = [
  {
    step: "Step 1",
    title: "Class 3 DSC Procurement",
    detail:
      "All proposed designated partners must obtain a Class 3 Digital Signature Certificate with encrypted USB tokens for secure paperless e-filing on the MCA V3 portal.",
  },
  {
    step: "Step 2",
    title: "Director Identification (DPIN / DIN)",
    detail:
      "Designated partners require an 8-digit identification number. Existing DIN holders use their existing number; new applicants receive DPINs directly through the FiLLiP incorporation form.",
  },
  {
    step: "Step 3",
    title: "RUN-LLP Name Approval",
    detail:
      "Lodge your trade name application on the MCA portal. Ensure the proposed name is distinctive, reflects the commercial activity, and complies with Rule 18 naming standards.",
  },
  {
    step: "Step 4",
    title: "FiLLiP E-Filing & Certificate of Incorporation",
    detail:
      "Upload the incorporation e-form along with subscriber sheets, partner declarations (Form 9 & DIR-2), registered office utility bill, and owner NOC. Central ROC issues the COI.",
  },
  {
    step: "Step 5",
    title: "LLP Agreement Execution on Stamp Paper",
    detail:
      "Draft a comprehensive partnership deed tailored to your capital and profit-sharing terms, print on state-specific non-judicial stamp paper, and notarize before a gazetted public notary.",
  },
  {
    step: "Step 6",
    title: "Statutory Form 3 ROC Filing",
    detail:
      "Submit the executed LLP Agreement electronically in MCA Form 3 within 30 days of incorporation to legally validate your partnership terms and prevent daily statutory late penalties.",
  },
];

export default function RegisterLlpComprehensiveStepByStepGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <LlpGuideLayout
      currentSlug="register-llp-comprehensive-stepbystep-guide"
      title="How to Register an LLP: A Complete Step-by-Step Guide"
      breadcrumbLabel="How to Register LLP"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Introduction */}
      <section className="space-y-4">
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          Registering a <strong className="font-semibold text-slate-950">Limited Liability Partnership (LLP)</strong> involves a structured sequence of statutory procedures regulated by the Ministry of Corporate Affairs (MCA). Designed for modern entrepreneurs, professional consultancies, and family businesses, an LLP delivers the protective limited liability veil of a corporation alongside the organizational nimbleness of a partnership.
        </p>
        <p className="text-[14px] text-slate-700 leading-relaxed">
          Whether you are launching a technology startup in Bengaluru, a legal or accounting firm in Mumbai, or a trading enterprise in Delhi, this detailed roadmap explains every step of the registration journey. Learn how to reserve your trade name, assemble subscriber sheets, execute the partnership agreement on judicial stamp paper, and ensure 100% compliance under the <strong className="font-medium text-slate-900">LLP Act, 2008</strong>.
        </p>
      </section>

      {/* Understanding LLP Box */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-[#FAF9F7] to-teal-50/40 border border-emerald-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-emerald-950 font-semibold text-base sm:text-lg">
          <Scale className="w-5 h-5 text-emerald-600" />
          <h2>Understanding the LLP Structure: Why Choose It?</h2>
        </div>
        <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
          The Limited Liability Partnership structure was codified in India under the LLP Act, 2008 to overcome the fatal vulnerability of general partnership firms: <strong className="font-semibold text-slate-900">unlimited personal liability</strong>. Key reasons founders choose an LLP include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-[13px]">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-slate-900 block">Limited Liability Shield</strong>
            <p className="text-slate-600 leading-relaxed">
              Partners’ personal assets (properties, savings) are 100% immune from company debts and the negligence of fellow partners.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-slate-900 block">No Double Dividend Taxation</strong>
            <p className="text-slate-600 leading-relaxed">
              Unlike private limited companies where post-tax dividends face personal taxation, LLP profit withdrawals are entirely tax-free.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="font-semibold text-slate-900 block">Audit Exemption Thresholds</strong>
            <p className="text-slate-600 leading-relaxed">
              No mandatory CA audit if turnover is under ₹40 Lakhs and partner capital is under ₹25 Lakhs, slashing administrative overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Execution Process */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
            Step-by-Step Procedure to Register an LLP in India
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1">
            Follow this chronological statutory sequence to secure your Certificate of Incorporation without delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STATUTORY_ROADMAP.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-emerald-400 hover:shadow-xs transition-all space-y-2"
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs">
                {item.step}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
            Summary of Documents Required for LLP Filing
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1">
            Ensure every partner document is self-attested and complies with MCA digital scanning standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px]">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <h4 className="font-semibold text-slate-900">1. Partner KYC Documentation</h4>
            <ul className="text-slate-600 space-y-1 list-disc pl-4">
              <li>Self-attested PAN card copy (mandatory for Indian nationals).</li>
              <li>Valid Passport copy (mandatory for foreign nationals/NRIs).</li>
              <li>Aadhaar Card, Voter ID, or Driving Licence as ID proof.</li>
              <li>Recent passport-size colored photographs.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <h4 className="font-semibold text-slate-900">2. Residential Address Proof</h4>
            <ul className="text-slate-600 space-y-1 list-disc pl-4">
              <li>Latest Bank Account Statement (strictly &lt; 2 months old).</li>
              <li>Electricity Bill or Telephone/Mobile Postpaid Bill (&lt; 2 months old).</li>
              <li>Address on proof must match the address entered in the e-form.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <h4 className="font-semibold text-slate-900">3. Registered Business Office Proof</h4>
            <ul className="text-slate-600 space-y-1 list-disc pl-4">
              <li>Recent utility bill (Electricity, Gas, or Water bill &lt; 2 months old).</li>
              <li>Notarized Rent Agreement along with rent receipts (if leased).</li>
              <li>Property Sale Deed / Municipal Tax Receipt (if owned).</li>
              <li>Signed No Objection Certificate (NOC) from property owner.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <h4 className="font-semibold text-slate-900">4. Constitutional Legal Documents</h4>
            <ul className="text-slate-600 space-y-1 list-disc pl-4">
              <li>Subscriber Consent Sheet (Form 9 &amp; DIR-2 declarations).</li>
              <li>Drafted LLP Agreement signed by all partners.</li>
              <li>State-specific Non-Judicial Stamp Paper with notary seal.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Useful Tips for Founders */}
      <section className="p-5 rounded-2xl bg-gradient-to-br from-teal-50/70 via-slate-50 to-emerald-50/50 border border-teal-200/80 space-y-3">
        <div className="flex items-center gap-2 text-teal-950 font-semibold text-base">
          <Sparkles className="w-5 h-5 text-teal-600" />
          <h3>Strategic Tips for a Frictionless LLP Registration</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[12.5px] text-slate-700">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-semibold">1. Choose a Distinctive Name</strong>
            <p>
              Check the MCA company database and IP India trademark registry before filing to prevent name rejections and CRC resubmissions.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-semibold">2. Customize Your Agreement</strong>
            <p>
              Avoid generic boilerplate deeds. Ensure detailed clauses on partner profit-sharing, capital interest, voting rights, and exit mechanisms.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-semibold">3. Mind the 30-Day Form 3 Clock</strong>
            <p>
              Execute and file Form 3 within 30 days of COI issuance. Missing this deadline costs ₹100 per day in recurring statutory penalties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
              Practical answers to everyday LLP incorporation questions.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-xs sm:text-[13.5px] text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer gap-3"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF9F7]/40">
                    {item.a}
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
