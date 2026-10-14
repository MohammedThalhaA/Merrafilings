"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Scale,
  Award,
  Gavel,
  ShieldAlert,
  Calendar,
  Layers,
  BookOpen,
  Briefcase,
  AlertTriangle,
  UserCheck,
  Handshake,
  FileSpreadsheet,
  XCircle,
  Check,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <Clock className="w-4 h-4" />, text: "Strict 4-Month Opposition Window from Trade Marks Journal Date" },
  { icon: <Scale className="w-4 h-4" />, text: "Grounds under Section 9 (Absolute) & Section 11 (Relative) Grounds" },
  { icon: <ShieldAlert className="w-4 h-4" />, text: "Mandatory 2-Month Counter-Statement Filing to Prevent Abandonment" },
  { icon: <FileText className="w-4 h-4" />, text: "Rule 45 & 46 Evidence Drafting by Way of Affidavit" },
  { icon: <Gavel className="w-4 h-4" />, text: "Senior Trademark Attorney Appearance at Show-Cause Hearings" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Notice of Opposition Filing",
    shortDesc: "File a formal opposition on Form TM-O to stop a conflicting mark published in the Journal.",
    expandedDesc: "Comprehensive examination of the conflicting mark in the Trade Marks Journal, formulation of legal grounds under Section 9 and Section 11, drafting of verified Notice of Opposition (Form TM-O), and electronic filing with the Registry.",
    price: "₹7,999",
    priceSub: "+ Govt Fee ₹2,700 (Individual) / ₹3,000 (Corporate)",
    badge: "For Brand Owners Opposing",
    features: [
      "Conflict Analysis & Similarity Assessment",
      "Drafting Formal Notice of Opposition (Form TM-O)",
      "Formulation of Grounds under Section 9 & 11",
      "Electronic Filing within 4-Month Statutory Window",
      "Official Service of Notice on Applicant",
      "Senior Trademark Advocate Supervision",
    ],
  },
  {
    name: "Counter-Statement Defense",
    popular: true,
    badge: "Urgent 2-Month Deadline",
    shortDesc: "Defend your trademark application against third-party opposition to prevent abandonment.",
    expandedDesc: "In-depth factual and legal rebuttal of allegations raised in the opponent's TM-O notice. Detailed paragraph-wise reply, substantiation of prior use, distinctiveness claims, and electronic filing of Counter-Statement on Form TM-O within the mandatory 2-month statutory deadline.",
    price: "₹8,999",
    priceSub: "+ Govt Fee ₹2,700 (Individual) / ₹3,000 (Corporate)",
    features: [
      "Detailed Scrutiny of Opponent's Notice of Opposition",
      "Paragraph-wise Legal Counter-Statement Drafting",
      "Establishment of Commercial Prior-Use Priority",
      "Affidavit of Commercial Adoption Preparation",
      "Filing on Form TM-O to Prevent Application Abandonment",
      "Complete Compliance with Rule 44 Trade Marks Rules",
    ],
  },
  {
    name: "Full Opposition Trial & Hearing Suite",
    shortDesc: "End-to-end legal representation through evidence stages and final hearing before the Registrar.",
    expandedDesc: "Complete advocacy through Rule 45/46/47 evidence stages (affidavits, sales invoices, turnover exhibits, consumer surveys), cross-examination preparation, written arguments, and oral representation by senior IP advocates before the Registrar of Trade Marks.",
    price: "₹18,999",
    priceSub: "Per Hearing / Evidence Stage",
    badge: "Complete Litigation",
    features: [
      "Rule 45 Evidence in Support of Opposition Drafting",
      "Rule 46 Evidence in Support of Application Drafting",
      "Compilation & Stamping of Documentary Exhibits",
      "Filing Formal Written Submissions & Precedents",
      "Virtual or Physical Oral Advocacy at Registry Hearing",
      "Post-Hearing Brief & Final Order Procurement",
    ],
  },
];

const RELATED_GUIDES = [
  "Difference Between Trademark Objection and Trademark Opposition",
  "How to Respond to a Notice of Trademark Opposition on Form TM-O",
  "The 4-Month Statutory Opposition Window Under Section 21 Explained",
  "Rule 45, 46, and 47 Evidence by Way of Affidavit: Complete Guide",
  "Top Grounds for Trademark Opposition Under Section 9 and 11",
  "What Happens if You Miss the 2-Month Counter-Statement Deadline?",
];

const RELATED_SERVICES_TAGS = [
  "Trademark Registration",
  "Trademark Objection",
  "Trademark Renewal",
  "Trademark Certificate",
  "Patent Registration",
  "Copyright Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "trademark opposition procedure in india",
  "how to file counter statement form tm-o",
  "grounds for trademark opposition section 11",
  "trademark journal opposition 4 months window",
  "rule 45 evidence in support of opposition",
  "trademark hearing before registrar fees",
];

function TrademarkOppositionGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-semibold text-slate-950">Trademark Opposition</strong> is a statutory quasi-judicial proceeding governed by <strong className="font-semibold text-slate-950">Section 21 of the Trade Marks Act, 1999</strong> read alongside <strong className="font-semibold text-slate-950">Rules 42 to 51 of the Trade Marks Rules, 2017</strong>. When a trademark application passes examiner scrutiny, it is published in the official weekly <strong className="font-semibold text-slate-950">Trade Marks Journal</strong>. This triggers a strict statutory window of <strong className="font-semibold text-slate-950">4 months</strong> during which any person can formally challenge its registration.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          Opposition proceedings act as the ultimate democratic safeguard in commercial branding. It enables senior brand owners to halt confusingly similar marks before they obtain nationwide exclusive rights, while providing applicants a formal legal trial to defend their brand&apos;s distinctiveness, prior commercial adoption, and legitimate market presence.
        </p>
      </div>

      {/* Initiation & Eligibility */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Initiation of Trademark Opposition &amp; Legal Locus Standi
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 21 of the Trade Marks Act, the right to oppose a published mark is deliberately expansive to prevent market confusion and fraud:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-indigo-600" />
              &quot;Any Person&quot; May File Opposition
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              The law states &apos;any person&apos; can oppose. The opponent does not need Indian citizenship, nor do they need to operate a commercial business within India.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              Prior Registered Mark Not Mandatory
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              An opponent does not need an already registered trademark in India. Prior common-law commercial users, global brand owners, and consumers can file on prior adoption grounds.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Public Interest &amp; Consumer Protection
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Consumer protection societies or trade associations can oppose deceptive marks that could mislead consumers about geographic origin or product quality.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-600" />
              Jurisdiction &amp; Registry Filing
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              The opposition must be lodged before the specific branch of the Trade Marks Registry (Mumbai, Delhi, Chennai, Kolkata, or Ahmedabad) where the application was submitted.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Grounds for Opposition */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Grounds for Trademark Opposition in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          An opposition under Form TM-O must be founded on established statutory grounds under Section 9 (Absolute Grounds) or Section 11 (Relative Grounds) of the Act:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Section 9 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <Scale className="w-4.5 h-4.5" />
              <span>Section 9: Absolute Grounds for Refusal</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-800 font-normal">
              <li>• <strong className="font-semibold text-slate-950">Descriptive Mark:</strong> The mark indicates the kind, quality, quantity, values, or geographical origin of goods.</li>
              <li>• <strong className="font-semibold text-slate-950">Devoid of Distinctiveness:</strong> The mark lacks distinctiveness and cannot distinguish goods from others.</li>
              <li>• <strong className="font-semibold text-slate-950">Customary Trade Term:</strong> The mark consists exclusively of words customary in the current language or established trade practices.</li>
              <li>• <strong className="font-semibold text-slate-950">Deceptive Similarity:</strong> The mark deceives the public or causes confusion regarding nature or quality.</li>
              <li>• <strong className="font-semibold text-slate-950">Prohibited by Law:</strong> Prohibited under Emblems and Names (Prevention of Improper Use) Act, 1950, or hurts religious feelings.</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <ShieldAlert className="w-4.5 h-4.5" />
              <span>Section 11: Relative Grounds for Refusal</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-800 font-normal">
              <li>• <strong className="font-semibold text-slate-950">Identical / Similar Mark:</strong> Conflicting with an earlier registered trademark or prior pending application.</li>
              <li>• <strong className="font-semibold text-slate-950">Similar Goods / Services:</strong> Likelihood of consumer confusion in identical or allied trade classes.</li>
              <li>• <strong className="font-semibold text-slate-950">Well-Known Mark Dilution:</strong> Unfairly trading on or tarnishing the reputation of a well-known brand.</li>
              <li>• <strong className="font-semibold text-slate-950">Bad-Faith Adoption:</strong> Copying an established foreign or domestic trademark without bona fide intent.</li>
              <li>• <strong className="font-semibold text-slate-950">Passing Off Protection:</strong> The mark would be prevented by the law of passing off protecting an unregistered mark.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Difference Between Trademark Objection and Trademark Opposition Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Detailed Difference: Trademark Objection vs Trademark Opposition
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Many entrepreneurs confuse an objection with an opposition. They are entirely separate legal proceedings occurring at distinct stages of the trademark lifecycle:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Procedural Parameter</th>
                <th className="py-3 px-4">Trademark Objection</th>
                <th className="py-3 px-4">Trademark Opposition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Initiating Authority / Party</td>
                <td className="py-3.5 px-4">Raised internally by the Trademark Examiner</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">Initiated by an external third party or competitor</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Governing Stage</td>
                <td className="py-3.5 px-4">Initial examination stage (Form TM-A review)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Post-publication stage in the Trade Marks Journal</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Statutory Deadline to Reply</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">30 days from Examination Report receipt</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Strict 2 months from Notice service (No extensions possible)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Official Government Fee</td>
                <td className="py-3.5 px-4">₹0 (Free electronic response filing)</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">₹2,700 / ₹3,000 for Form TM-O (Notice &amp; Counter-Statement)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Evidence Requirements</td>
                <td className="py-3.5 px-4">Informal user affidavit with basic invoices</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">Formal Rule 45/46 evidentiary affidavits with stamped exhibits</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Nature of Proceeding</td>
                <td className="py-3.5 px-4">Administrative dialogue between Applicant &amp; Registry</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">Adversarial quasi-judicial trial between two opposing parties</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Consequence of Non-Response</td>
                <td className="py-3.5 px-4">Application marked &quot;Refused&quot; or &quot;Abandoned&quot;</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Application permanently &quot;Abandoned&quot; under Section 21(2)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Appellate Forum</td>
                <td className="py-3.5 px-4">Review petition or Appeal to High Court</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">Statutory Appeal under Section 91 to High Court within 3 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Step-by-Step 5-Stage Opposition Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Complete 5-Stage Trademark Opposition Procedure &amp; Trial Lifecycle
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Trial Stage</th>
                <th className="py-3 px-4">Procedural Action &amp; Form</th>
                <th className="py-3 px-4">Action By</th>
                <th className="py-3 px-4">Strict Statutory Window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 1</td>
                <td className="py-3.5 px-4">
                  <strong className="text-slate-950 block">Notice of Opposition (Form TM-O)</strong>
                  Grounds of opposition under Section 9/11 lodged with official fees.
                </td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Opponent</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Within 4 months of Journal publication (3 months + 1 mo. extension via TM-M)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 2</td>
                <td className="py-3.5 px-4">
                  <strong className="text-slate-950 block">Counter-Statement (Form TM-O)</strong>
                  Paragraph-by-paragraph factual &amp; legal rebuttal of opponent&apos;s grounds.
                </td>
                <td className="py-3.5 px-4 text-blue-700 font-medium">Applicant</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Strictly 2 months from receipt of Notice (Fatal if missed)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 3</td>
                <td className="py-3.5 px-4">
                  <strong className="text-slate-950 block">Rule 45 Evidence in Support of Opposition</strong>
                  Affidavit by opponent with commercial invoices, turnover, awards, advertisements.
                </td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Opponent</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Within 2 months from receipt of Counter-Statement</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 4</td>
                <td className="py-3.5 px-4">
                  <strong className="text-slate-950 block">Rule 46 Evidence in Support of Application</strong>
                  Affidavit by applicant establishing prior use, sales figures, and distinctive character.
                </td>
                <td className="py-3.5 px-4 text-blue-700 font-medium">Applicant</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Within 2 months from receipt of Rule 45 Evidence</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 5</td>
                <td className="py-3.5 px-4">
                  <strong className="text-slate-950 block">Rule 47 Evidence in Reply &amp; Final Hearing</strong>
                  Optional reply affidavit (1 month) followed by oral advocacy before Registrar.
                </td>
                <td className="py-3.5 px-4">Both Parties / Hearing Officer</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Registrar issues final written judgment granting or rejecting mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Importance of Compliance & Non-Extendable Deadlines */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Fatal Consequences of Non-Compliance: Section 21(2) Abandonment
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          During trademark opposition proceedings, adherence to statutory timelines is strictly monitored by the Trade Marks Registry:
        </p>

        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-2 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
          <div className="flex items-center gap-2 text-amber-950 font-semibold text-sm">
            <AlertTriangle className="w-4.5 h-4.5 text-amber-600" />
            <span>Strict Statutory Bar: Section 21(2) of the Trade Marks Act, 1999</span>
          </div>
          <p>
            If the applicant fails to send a counter-statement within two months from receipt of the notice of opposition, they shall be <strong className="font-semibold text-rose-700">deemed to have abandoned their application</strong>. The Delhi High Court and Intellectual Property Appellate Board (IPAB) have repeatedly affirmed that the Registrar has <strong className="font-semibold text-rose-700">zero discretionary power to extend the 2-month counter-statement deadline</strong>. Once 60 days expire without a valid Form TM-O on record, the trademark is permanently forfeited.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-600" />
              Abandonment of Opposition (Opponent Default)
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              If the opponent fails to file Rule 45 evidence or intimate reliance on facts within 2 months, the opposition is deemed abandoned under Rule 45(2), and the trademark proceeds to registration.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-600" />
              Abandonment of Application (Applicant Default)
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              If the applicant fails to file Rule 46 evidence or state intention to rely on counter-statement, the application is deemed abandoned under Rule 46(2), resulting in trademark cancellation.
            </p>
          </div>
        </div>
      </section>

      {/* Out-of-Court Settlements & ADR */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Amicable Settlements &amp; Alternative Dispute Resolution (ADR)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Opposition trials can be lengthy and expensive. Many commercial brand disputes are resolved amicably through out-of-court mechanisms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <Handshake className="w-4 h-4 text-indigo-600" />
              Coexistence Agreements
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              Parties contractually agree on geographical boundaries, customer segments, packaging styles, or trade channels where both marks can peacefully operate.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-purple-600" />
              Specification Amendment (TM-M)
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              The applicant files Form TM-M to delete conflicting goods, services, or sub-classes from their specification, resolving the opponent&apos;s commercial conflict.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h3 className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Voluntary TM-O Withdrawal
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              Following settlement or mutual consent, the opponent submits a formal letter to the Registrar withdrawing the Notice of Opposition, allowing the mark to register.
            </p>
          </div>
        </div>
      </section>

      {/* Hearing, Determination & High Court Appeals */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Opposition Hearing &amp; Appeals to the High Court (Section 91)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Once the evidence stages are concluded, the Registrar schedules a show-cause hearing:
        </p>

        <div className="space-y-2 pt-1 text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
          <p>
            • <strong className="font-semibold text-slate-950">Hearing Procedure:</strong> Parties or their authorized advocates appear before the Hearing Officer to argue facts, present case precedents, and establish similarity or distinctiveness. If either party fails to appear, the case is decided in favor of the appearing party or dismissed for default.
          </p>
          <p>
            • <strong className="font-semibold text-slate-950">Registrar&apos;s Order:</strong> The Registrar may: (1) refuse the trademark application completely, (2) accept the application unconditionally for registration, or (3) accept the mark subject to conditions, disclaimers, or goods limitations.
          </p>
          <p>
            • <strong className="font-semibold text-slate-950">Appeals to High Court:</strong> Under Section 91 of the Trade Marks Act, any party aggrieved by an order or decision of the Registrar can file an appeal before the High Court having territorial jurisdiction within <strong className="font-semibold text-slate-950">3 months</strong> from the date of the decision.
          </p>
        </div>
      </section>

      {/* Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Why Choose Merrafilings for Trademark Opposition &amp; Defense?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-semibold text-slate-950">Senior Trademark Advocates</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Every TM-O notice, counter-statement, and evidentiary affidavit is prepared and argued by seasoned IP litigators.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <h3 className="text-sm font-semibold text-slate-950">Zero-Default Deadline Guarantee</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Our automated milestone tracking ensures your 2-month counter-statement and Rule 45/46 evidence are filed well ahead of statutory cutoffs.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <Gavel className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-semibold text-slate-950">Registry Hearing Representation</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Complete oral advocacy before Hearing Officers across all 5 branches (Delhi, Mumbai, Chennai, Kolkata, Ahmedabad) and virtual hearings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const FAQ_COL_1 = [
  {
    q: "Who is eligible to file a trademark opposition in India?",
    a: "Under Section 21 of the Trade Marks Act, 'any person' can file an opposition. The opponent does not necessarily need to be an Indian citizen, nor do they need to have a registered trademark in India. Prior commercial users, international brand owners, consumers, or trade associations can oppose an application.",
  },
  {
    q: "Can the 4-month trademark opposition window be extended?",
    a: "Under Section 21(1), the opposition window is 3 months from the Journal publication date, extendable by not more than 1 month upon filing Form TM-M before the initial 3 months expire. Under no circumstances can the total period exceed 4 months.",
  },
  {
    q: "What happens if I miss the 2-month deadline to file my Counter-Statement?",
    a: "Section 21(2) mandates that failure to submit a Counter-Statement within 2 months results in your application being deemed 'Abandoned'. The Registrar has no statutory authority to condone delays in filing counter-statements.",
  },
  {
    q: "What evidence is required under Rule 45 and Rule 46?",
    a: "Evidence must be submitted in the form of a formal legal Affidavit sworn before a Notary or Oath Commissioner. Exhibits should include date-stamped sales invoices, CA-certified turnover certificates, marketing brochures, media articles, and proof of prior commercial adoption.",
  },
  {
    q: "Can opposition proceedings be settled amicably without a trial?",
    a: "Yes. Many opposition matters are settled out-of-court through Coexistence Agreements, Trademark Licensing, or by the applicant amending their goods/services specification (via Form TM-M) to delete conflicting items, after which the opponent formally withdraws the TM-O notice.",
  },
];

const FAQ_COL_2 = [
  {
    q: "What is the government fee to file a Trademark Opposition (Form TM-O)?",
    a: "The official statutory e-filing fee for Form TM-O is ₹2,700 for individuals, startups, and MSMEs, and ₹3,000 for corporations and other entities. The same fee applies when the applicant files their Counter-Statement.",
  },
  {
    q: "Where are trademark opposition hearings conducted?",
    a: "Hearings are scheduled before the Hearing Officer / Assistant Registrar at the respective jurisdictional Trade Marks Registry branch (Mumbai, Delhi, Chennai, Kolkata, or Ahmedabad). Today, most hearings are conducted virtually via video conferencing.",
  },
  {
    q: "What orders can the Registrar pass after hearing an opposition?",
    a: "The Registrar can: (1) refuse the trademark application completely, (2) accept the application for registration, or (3) accept the application subject to specific conditions, disclaimers, or class limitations.",
  },
  {
    q: "Can an aggrieved party appeal against the Registrar's opposition order?",
    a: "Yes. Any final order passed by the Registrar of Trade Marks can be appealed to the High Court having territorial jurisdiction within three months from the date of the decision under Section 91.",
  },
  {
    q: "Can an opponent claim legal costs or damages during trademark opposition?",
    a: "The Registrar has statutory power under Section 21(7) to award nominal costs to the prevailing party. However, substantial commercial damages and accounts of profit can only be claimed by filing a civil suit in a Commercial Court.",
  },
];

export default function TrademarkOppositionPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 21 Trade Marks Act 1999 Statutory Opposition & Defense"
      heroTitle={
        <>
          <span>Trademark </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Opposition &amp; Defense
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Oppose conflicting marks published in the official Trade Marks Journal or defend your application against third-party oppositions. Form TM-O drafting, 2-month counter-statements, Rule 45/46 evidence affidavits, and hearing advocacy."
      formTitle="Opposition Legal Advisory"
      formSubtitle="Received a Notice of Opposition or need to halt a conflicting brand in the Journal? Consult senior IP attorneys immediately."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">trademark opposition &amp; defense pricing.</span>
        </>
      }
      pricingSubtitle="Select your requirement for Notice of Opposition, Counter-Statement defense, or full trial trial representation."
      breadcrumbCurrent="Trademark Opposition"
      guideTitle="Trademark Opposition & Counter-Statement Procedure in India - Complete Legal Guide"
      guideContent={<TrademarkOppositionGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about trademark opposition deadlines, Section 9 & 11 grounds, counter-statements, and hearing procedures."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
