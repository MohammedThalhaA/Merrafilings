import React from "react";
import type { Metadata } from "next";
import Itr5GuideLayout from "@/components/Itr5GuideLayout";
import {
  FileCheck,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Building2,
  Scale,
  Award,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileSignature,
  Users,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding LLP Compliance: The Complete Legal & Tax Guide | Merrafilings",
  description:
    "Comprehensive guide to Limited Liability Partnership (LLP) compliance in India. Learn the 4 core pillars of annual compliance, MCA Form 11 & Form 8 filings, ITR-5 tax rules, event-based obligations, and penalty mitigation.",
};

export default function UnderstandingLlpCompliance2023GuidePage() {
  return (
    <Itr5GuideLayout
      currentSlug="understanding-llp-compliance-2023-guide"
      title="Understanding LLP Compliance: A 2023 Guide"
      breadcrumbLabel="Understanding LLP Compliance (Guide)"
      metaPublishedDate="Assessment Year 2026-27"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Tax & Compliance Team"
    >
      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          What is LLP Compliance? The Legal Framework
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          A Limited Liability Partnership (LLP) is one of the most preferred corporate vehicles in India, combining the procedural simplicity of a conventional partnership with the separate legal entity status and limited liability shield of a company. However, the legal privileges granted under the Limited Liability Partnership Act, 2008, come with statutory accountability.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          <strong>LLP Compliance</strong> encompasses all the statutory, secretarial, accounting, and tax obligations that an LLP must fulfill throughout its lifecycle. Staying compliant ensures that the LLP maintains active status on the Ministry of Corporate Affairs (MCA) master portal, avoids punitive daily fines, and remains in prime standing for institutional funding, client contracts, and vendor onboarding.
        </p>
      </section>

      {/* 2. The 4 Pillars of LLP Compliance */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          The 4 Core Pillars of LLP Statutory Compliance
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          LLP compliance is divided into four distinct operational categories: Annual Secretarial Filings, Statement of Solvency, Direct Tax Submissions, and Event-Based Regulatory Amendments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {/* Pillar 1 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>1. Annual Secretarial Filings (Form 11)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Every LLP must file an annual return in <strong>Form 11</strong> with the Registrar of Companies (ROC) within 60 days of the financial year close (by <strong>30th May</strong>). It confirms the LLP’s management structure, capital contribution ratios, and business activities.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
              <FileSignature className="w-4 h-4 text-blue-600" />
              <span>2. Accounts &amp; Solvency Declaration (Form 8)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Due by <strong>30th October</strong> each year, <strong>Form 8</strong> requires the submission of the Balance Sheet, Profit &amp; Loss account, and a formal Statement of Solvency executed by the Designated Partners verifying that the LLP can pay its debts as they mature.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm">
              <Scale className="w-4 h-4 text-purple-600" />
              <span>3. Direct Tax Obligations (ITR-5 &amp; Advance Tax)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              LLPs must file their annual income tax return using <strong>Form ITR-5</strong> on the Income Tax e-filing portal. LLPs are subject to a flat income tax rate of 30% plus health &amp; education cess and surcharge, along with quarterly advance tax installments and TDS compliances.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-4.5 rounded-xl border border-slate-200 bg-white shadow-3xs space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <Settings className="w-4 h-4 text-amber-600" />
              <span>4. Event-Based Secretarial Disclosures</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Whenever structural adjustments occur—such as the admission or resignation of partners (Form 4), amendment of the partnership agreement (Form 3), or shifting the registered office (Form 15)—statutory disclosures must be lodged within 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Event-Based Compliance Requirements */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Event-Based LLP Compliances You Must Never Overlook
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Beyond annual routine filings, certain business events mandate immediate legal documentation under the LLP Rules:
        </p>

        <div className="overflow-x-auto my-3 border border-slate-200 rounded-xl shadow-3xs">
          <table className="w-full text-left text-xs sm:text-[13px] text-slate-800">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-950 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Trigger Event</th>
                <th className="py-3 px-4">Statutory MCA Form</th>
                <th className="py-3 px-4">Filing Window</th>
                <th className="py-3 px-4">Mandatory Attachments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Execution or Amendment of LLP Agreement
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">Form 3</td>
                <td className="py-3 px-4 font-normal">Within 30 days of modification</td>
                <td className="py-3 px-4 font-normal">
                  Duly stamped Supplementary LLP Deed &amp; partner resolutions
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Appointment, Resignation, or Change in Designation
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">Form 4</td>
                <td className="py-3 px-4 font-normal">Within 30 days of the change</td>
                <td className="py-3 px-4 font-normal">
                  Consent letters, resignation notices &amp; partner identity proofs
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Change of Registered Office Address
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">Form 15</td>
                <td className="py-3 px-4 font-normal">Within 30 days of office shift</td>
                <td className="py-3 px-4 font-normal">
                  NOC from property owner, utility bill &amp; partner consent
                </td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 font-semibold text-slate-950">
                  Change in Name of the LLP
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700">RUN-LLP &amp; Form 5</td>
                <td className="py-3 px-4 font-normal">Within 30 days of name approval</td>
                <td className="py-3 px-4 font-normal">
                  Certified resolution &amp; consent of all partners
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Penalties for Non-Compliance */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Penal Consequences of Non-Compliance on LLPs &amp; Partners
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Regulatory oversight on LLPs has tightened significantly. Defaulting on statutory obligations triggers severe monetary and operational consequences:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-slate-800 font-normal">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
            <span>
              <strong>Accumulating MCA Daily Additional Fees:</strong> Delays in filing Form 8 or Form 11 attract substantial recurring daily additional fees until the return is formally lodged.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
            <span>
              <strong>Income Tax Late Fee &amp; Interest:</strong> Late ITR-5 filing results in a ₹5,000 late fee under Section 234F, interest under Section 234A at 1% per month on outstanding tax, and forfeiture of carry-forward business losses.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
            <span>
              <strong>Disqualification of Designated Partners:</strong> Continued non-filing can lead to the deactivation of Designated Partner Identification Numbers (DPINs), preventing partners from managing other corporate entities.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
            <span>
              <strong>ROC Show Cause Notices &amp; Strike-Off Action:</strong> The Registrar may issue show-cause notices under Section 75 of the LLP Act or suo-motu initiate striking off the LLP’s name from the official register for non-operation.
            </span>
          </li>
        </ul>
      </section>

      {/* 5. Modern Digitalization and MCA V3 Transition */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          Digital Compliance on the MCA V3 Portal
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          The Ministry of Corporate Affairs transitioned all LLP filings to the <strong>MCA V3 Portal</strong>. Key upgrades under the V3 system include web-based dynamic filing forms, mandatory two-factor authentication, automatic pre-population of financial metadata, and automated cross-validation against Income Tax and GSTN databases.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          To file seamlessly on MCA V3, Designated Partners must possess an active <strong>Class 3 Digital Signature Certificate (DSC)</strong> registered under the &ldquo;Associate DSC&rdquo; service on the portal.
        </p>
      </section>

      {/* 6. Merrafilings Advisory */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          How Merrafilings Ensures Flawless LLP Compliance
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Maintaining multi-agency compliance can be challenging for busy business owners. Merrafilings provides an integrated corporate desk where qualified CAs and Company Secretaries handle everything—from maintaining statutory registers and drafting partner resolutions to filing MCA Form 11, Form 8, and ITR-5 with complete DSC validation.
        </p>
      </section>
    </Itr5GuideLayout>
  );
}
