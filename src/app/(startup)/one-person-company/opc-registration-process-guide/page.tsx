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
  TrendingUp,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is a One Person Company (OPC) under the Companies Act, 2013?",
    a: "Defined under Section 2(62) of the Companies Act, 2013, a One Person Company (OPC) is a corporate business entity formed with only one person as its member/shareholder. It extends all privileges of a Private Limited Company—including a separate legal personality and limited liability—while eliminating the historic requirement of having at least two shareholders.",
  },
  {
    q: "Can a single person be both the sole shareholder and the sole director?",
    a: "Yes. In an OPC, the single individual member can function simultaneously as the sole shareholder and sole director. While the company must have at least one director, the Companies Act allows an OPC to appoint up to 15 directors if operational scale demands, while shareholding remains 100% held by the solo member.",
  },
  {
    q: "Why is an INC-3 Nominee mandatory for an OPC?",
    a: "Because an OPC has only one shareholder, perpetual succession requires designating a nominee. Under Rule 3 of the Companies (Incorporation) Rules, 2014, the subscriber must nominate an individual in Form INC-3 who will automatically assume control of the company's shares in the unfortunate event of the member's death or mental incapacitation.",
  },
  {
    q: "What is the government fee for OPC incorporation in India?",
    a: "Under the MCA SPICe+ initiative, the Ministry of Corporate Affairs charges ZERO government incorporation fees for companies with an authorized share capital up to ₹15,00,000. Founders only need to pay nominal state stamp duty (which varies by state), notary charges, name reservation fee (₹1,000 if using separate RUN, or free within integrated SPICe+), and professional certification fees.",
  },
  {
    q: "Can an NRI or foreign citizen register an OPC in India?",
    a: "As per the Ministry of Corporate Affairs amendments introduced via Union Budget 2021, Non-Resident Indians (NRIs) who are Indian citizens are eligible to incorporate an OPC. The residency test was relaxed from 182 days down to 120 days in India during the preceding financial year. However, foreign nationals who do not hold Indian citizenship are not permitted to form an OPC.",
  },
  {
    q: "Is there any turnover or capital threshold forcing mandatory conversion into a Private Limited Company?",
    a: "No. Historically, an OPC was mandatorily required to convert into a Private Limited Company if its paid-up capital exceeded ₹50 Lakhs or average annual turnover exceeded ₹2 Crores over three consecutive years. The MCA completely removed these mandatory turnover and capital limits in 2021, allowing OPCs to scale to any size without forced conversion.",
  },
];

export default function OpcRegistrationProcessGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <OpcGuideLayout
      currentSlug="opc-registration-process-guide"
      title="Understanding the OPC Registration Process: A Complete Guide"
      breadcrumbLabel="OPC Registration Process Guide"
      metaPublishedDate="Oct 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Executive Summary */}
      <section className="space-y-4">
        <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-800">
          The introduction of the <strong className="text-slate-900 font-semibold">One Person Company (OPC)</strong> under{" "}
          <strong className="text-slate-900 font-semibold">Section 2(62) of the Companies Act, 2013</strong> has fundamentally revolutionized
          how solo entrepreneurs, freelance consultants, technocrats, and sole proprietors structure their ventures across India.
          Historically, sole entrepreneurs were restricted to unregistered sole proprietorships—a high-risk business model where personal
          assets like bank savings, vehicles, and real estate are directly vulnerable to business debts, supplier claims, and commercial litigation.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          An OPC offers the gold standard solution: it grants solo founders complete, autonomous operational ownership while establishing
          an ironclad <strong className="text-slate-900 font-semibold">corporate veil of limited liability</strong> and a distinct legal entity
          status. This exhaustive guide provides an authoritative roadmap to navigating the entire OPC registration lifecycle on the
          MCA V3 Portal—from Digital Signature Certificates (DSC) and name reservation to SPICe+ Part A &amp; B e-filing, nominee appointment,
          and statutory post-incorporation compliances.
        </p>
      </section>

      {/* Highlight Box: Definition & Legal Essence */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 border border-emerald-200/80 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5 text-emerald-950 font-semibold text-base sm:text-lg">
          <Building2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>What is a One Person Company (OPC)?</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          According to <strong className="text-slate-900 font-semibold">Section 2(62) of the Companies Act, 2013</strong>, a One Person Company
          is defined simply as a company that has only one person as a member. Unlike traditional Private Limited Companies that mandate
          a minimum of two members and two directors, an OPC empowers a single individual to act simultaneously as the{" "}
          <strong className="text-slate-900 font-semibold">sole shareholder</strong> and the{" "}
          <strong className="text-slate-900 font-semibold">primary director</strong>, giving you 100% equity retention and zero boardroom friction.
        </p>
      </div>

      {/* Strategic Core Benefits Grid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Award className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Key Benefits of Registering an OPC in India
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Before initiating your digital registration, consider the distinct legal and commercial advantages that make an OPC superior to an
          unregistered proprietorship:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Benefit 1 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm sm:text-base">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>1. Limited Liability Protection</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Your liability is strictly limited to the unpaid subscription amount of your share capital. In the event of bankruptcy,
              unpaid vendor loans, or contractual defaults, your personal savings, ancestral property, and private assets remain fully insulated.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm sm:text-base">
              <Globe2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>2. Perpetual Succession</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Proprietorships dissolve automatically upon the owner&apos;s death. An OPC thrives perpetually. Through the statutory{" "}
              <strong className="text-slate-900 font-medium">Form INC-3 Nominee</strong> designation, ownership seamlessly transfers to the
              designated legal nominee without freezing bank accounts or disrupting customer contracts.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm sm:text-base">
              <Zap className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>3. Simplified Statutory Compliance</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              OPCs enjoy statutory carve-outs under company law: no requirement to hold Annual General Meetings (AGMs), exemption from
              preparing Cash Flow Statements, simplified Annual Return filing via <strong className="text-slate-900 font-medium">Form MGT-7A</strong>,
              and need for only one board meeting per half of the calendar year.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm sm:text-base">
              <TrendingUp className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <span>4. Corporate Prestige &amp; Funding Ease</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Holding a 21-digit Corporate Identification Number (CIN) published on the official MCA public registry enhances institutional
              credibility. Scheduled commercial banks, NBFCs, government tender boards, and enterprise buyers readily extend credit lines
              and vendors contracts that are denied to informal firms.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step OPC Registration Process */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Step-by-Step OPC Registration Process on MCA V3
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          The Ministry of Corporate Affairs has integrated the entire company formation workflow into the digital{" "}
          <strong className="text-slate-900 font-semibold">SPICe+ (INC-32)</strong> web-form system. Below is the precise 5-step regulatory
          sequence executed by Merrafilings:
        </p>

        {/* Timeline Steps */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative pl-6 sm:pl-7 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <span>Phase 01</span>
              <span className="text-slate-300">•</span>
              <span>Prerequisite</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Step 1: Obtain a Class 3 Digital Signature Certificate (DSC)
            </h3>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              All electronic statutory forms on the MCA V3 portal must be signed with a government-authorized Class 3 Digital Signature Certificate.
              Our compliance team collects the director&apos;s Aadhaar/PAN credentials and executes video verification to procure a FIPS-compliant
              cryptographic USB token from licensed Certifying Authorities (CAs) such as eMudhra, Capricorn, or VSign.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative pl-6 sm:pl-7 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <span>Phase 02</span>
              <span className="text-slate-300">•</span>
              <span>Identification</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Step 2: Director Identification Number (DIN) Allotment
            </h3>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              If the proposed sole director does not already possess an approved DIN, the Director Identification Number is directly applied
              for and allotted within the integrated SPICe+ Part B form. No separate DIR-3 filing is required for new directorships, saving both
              time and independent filing charges.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative pl-6 sm:pl-7 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <span>Phase 03</span>
              <span className="text-slate-300">•</span>
              <span>Corporate Identity</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Step 3: Company Name Reservation via MCA RUN / SPICe+ Part A
            </h3>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              Your company name must be completely distinct and strictly reflect the nature of your business operations. It must terminate
              with the statutory suffix: <strong className="text-slate-900 font-semibold">&ldquo;(OPC) Private Limited&rdquo;</strong> (e.g.,
              &ldquo;Nexora Cloud Solutions (OPC) Private Limited&rdquo;). Name approval can be sought either via the stand-alone{" "}
              <strong className="text-slate-900 font-medium">RUN (Reserve Unique Name)</strong> web facility with a ₹1,000 government fee or
              directly inside SPICe+ Part A. Up to two proposed names can be submitted with an operational justification letter.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative pl-6 sm:pl-7 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <span>Phase 04</span>
              <span className="text-slate-300">•</span>
              <span>Drafting &amp; Filing</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Step 4: Execute SPICe+ Part B, Charter Drafting &amp; Nominee Consent
            </h3>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-3">
              Once the name is approved, Merrafilings drafts and uploads the comprehensive incorporation dossier:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700">
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>e-MOA (INC-33):</strong> Electronic charter defining business objectives.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>e-AOA (INC-34):</strong> Internal governance regulations of the OPC.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Form INC-3:</strong> Statutory written consent signed by the nominee.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Form INC-9:</strong> Self-declaration affidavit by subscriber &amp; director.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Office Proof:</strong> Electricity bill/Tax receipt + Rent agreement + Owner NOC.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>AGILE-PRO-S:</strong> Auto-allotment of EPFO, ESIC, Professional Tax &amp; Bank Account.</span>
              </li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative pl-6 sm:pl-7 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <span>Phase 05</span>
              <span className="text-slate-300">•</span>
              <span>Final Issuance</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Step 5: RoC Scrutiny &amp; Certificate of Incorporation Issuance
            </h3>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
              The Registrar of Companies (RoC) examines the submitted digital forms, affidavits, and professional certification by our
              Practicing Chartered Accountant or Company Secretary. Upon satisfaction, the RoC issues the official{" "}
              <strong className="text-slate-900 font-semibold">Certificate of Incorporation (Form INC-11)</strong> carrying your 21-digit CIN,
              permanent company PAN, and TAN, confirming the legal inception of your One Person Company.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Scale className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Comparative Analysis: OPC vs Sole Proprietorship vs Private Limited
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Understand where an OPC sits in relation to alternative business structures under Indian law:
        </p>

        <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3.5 sm:p-4">Key Parameter</th>
                <th className="p-3.5 sm:p-4 text-emerald-700 bg-emerald-50/60">One Person Company (OPC)</th>
                <th className="p-3.5 sm:p-4">Sole Proprietorship</th>
                <th className="p-3.5 sm:p-4">Private Limited Company</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Minimum Members</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">1 Member Only</td>
                <td className="p-3.5 sm:p-4">1 Individual</td>
                <td className="p-3.5 sm:p-4">2 Members Minimum</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Liability of Owner</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">Limited to Share Capital</td>
                <td className="p-3.5 sm:p-4 text-rose-600 font-medium">Unlimited (Personal Assets at Risk)</td>
                <td className="p-3.5 sm:p-4">Limited to Share Capital</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Separate Legal Entity</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">Yes (Under Companies Act)</td>
                <td className="p-3.5 sm:p-4 text-slate-500">No (Owner &amp; Firm Are One)</td>
                <td className="p-3.5 sm:p-4">Yes (Under Companies Act)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Nominee Mandate</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">Mandatory (Form INC-3)</td>
                <td className="p-3.5 sm:p-4">Optional / Succession Laws</td>
                <td className="p-3.5 sm:p-4">Not Required</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">Annual General Meeting</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">Statutorily Exempted</td>
                <td className="p-3.5 sm:p-4">Not Applicable</td>
                <td className="p-3.5 sm:p-4">Mandatory Every Year</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3.5 sm:p-4 font-medium text-slate-900">MCA Incorporation Fee</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/30">₹0 (Up to ₹15L Capital)</td>
                <td className="p-3.5 sm:p-4">No Central Register</td>
                <td className="p-3.5 sm:p-4">₹0 (Up to ₹15L Capital)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Latest Regulatory Updates */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Recent Regulatory Updates &amp; Amendments by MCA
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            The Ministry of Corporate Affairs and the Ministry of Finance introduced landmark reforms to promote solo entrepreneurship:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 font-semibold">Removal of Conversion Caps:</strong> Previously, OPCs were forced to convert
                into private limited companies if their paid-up capital exceeded ₹50 Lakhs or turnover hit ₹2 Crores. This restriction has been
                completely eliminated. An OPC can now scale without limitation.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 font-semibold">NRI Incorporation Permitted:</strong> Non-Resident Indians (NRIs) who are
                Indian citizens can now incorporate and operate OPCs.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 font-semibold">Relaxed Residency Criteria:</strong> The residency period in India required
                to establish eligibility has been slashed from 182 days down to 120 days in the preceding financial year.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 font-semibold">Fast-Track SPICe+ Integration:</strong> Name reservation, DIN allotment,
                incorporation, PAN, TAN, EPFO, ESIC, and corporate bank accounts are processed simultaneously on MCA V3.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Common Challenges & Solutions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Common Pitfalls in OPC Registration &amp; How to Avoid Them
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              1. MCA Name Rejections Due to Trademark Conflicts
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              If your proposed business name resembles an existing company or an active trademark registered in the same class, the RoC will
              reject the RUN filing. Always conduct a comprehensive MCA and IP India Trademark search before filing.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              2. Stale Utility Bills for Registered Office
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              The electricity bill, water bill, or gas bill submitted as proof of registered office must not be older than 2 months (60 days)
              from the submission date. Any mismatch in the owner&apos;s name on the utility bill and NOC will cause resubmission notices.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              3. Incomplete Nominee Documentation (Form INC-3)
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              The nominee must provide their self-attested PAN card, identity proof, and residential address proof, along with a signed Form INC-3.
              Failure to correctly upload both the consent letter and supporting proofs will stall approval.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F1646]">
            Frequently Asked Questions on OPC Registration
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
