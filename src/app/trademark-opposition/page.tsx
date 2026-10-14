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
          <strong className="font-semibold text-slate-950">Trademark Opposition</strong> is a critical quasi-judicial proceeding governed by <strong className="font-semibold text-slate-950">Section 21 of the Trade Marks Act, 1999</strong> and <strong className="font-semibold text-slate-950">Rules 42 to 51 of the Trade Marks Rules, 2017</strong>. Once a trademark application clears internal examiner scrutiny and is published in the official weekly <strong className="font-semibold text-slate-950">Trade Marks Journal</strong>, any person—regardless of whether they hold a registered mark—has a strict statutory window of <strong className="font-semibold text-slate-950">4 months</strong> to oppose its registration.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          Opposition proceedings serve as the ultimate democratic safeguard in intellectual property law: enabling senior brand owners to halt deceptive imitations before they obtain legal monopoly, while giving applicants a formal legal forum to defend their brand&apos;s distinctiveness and commercial priority.
        </p>
      </div>

      {/* Section 1: Objection vs Opposition Comparison Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Trademark Objection vs Trademark Opposition: Key Differences
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Entrepreneurs frequently confuse an Objection with an Opposition. They are governed by separate sections and procedural standards:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Trademark Objection</th>
                <th className="py-3 px-4">Trademark Opposition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Initiating Entity</td>
                <td className="py-3.5 px-4">Raised internally by the Trademark Examiner</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">Initiated by an external third party or competitor</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Statutory Stage</td>
                <td className="py-3.5 px-4">Initial examination phase (Form TM-A review)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Post-publication phase in Trade Marks Journal</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Response Deadline</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">30 days from Examination Report receipt</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Strict 2 months from Notice of Opposition service (No extensions)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Government Fee</td>
                <td className="py-3.5 px-4">₹0 (Free electronic response filing)</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">₹2,700 / ₹3,000 for Form TM-O (Notice &amp; Counter-Statement)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Consequence of Inaction</td>
                <td className="py-3.5 px-4">Application marked &quot;Refused&quot; or &quot;Abandoned&quot;</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Application deemed permanently &quot;Abandoned&quot; under Section 21(2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Grounds for Trademark Opposition */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Grounds for Trademark Opposition
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          An opposition must be founded on established statutory grounds under the Trade Marks Act, 1999:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Section 9 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <Scale className="w-4.5 h-4.5" />
              <span>Section 9: Absolute Grounds for Refusal</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-800 font-normal">
              <li>• <strong className="font-semibold text-slate-950">Descriptive Mark:</strong> The mark indicates the kind, quality, quantity, or values of goods.</li>
              <li>• <strong className="font-semibold text-slate-950">Deceptive Similarity:</strong> The mark deceives the public or causes confusion regarding origin.</li>
              <li>• <strong className="font-semibold text-slate-950">Customary Language:</strong> The mark consists exclusively of words customary in current trade language.</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <ShieldAlert className="w-4.5 h-4.5" />
              <span>Section 11: Relative Grounds for Refusal</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-800 font-normal">
              <li>• <strong className="font-semibold text-slate-950">Identical / Similar Mark:</strong> Conflicting with an earlier registered trademark or prior application.</li>
              <li>• <strong className="font-semibold text-slate-950">Similar Goods / Services:</strong> Likelihood of consumer confusion in identical or allied trade classes.</li>
              <li>• <strong className="font-semibold text-slate-950">Well-Known Mark Dilution:</strong> Unfairly trading on or tarnishing the reputation of a well-known brand.</li>
              <li>• <strong className="font-semibold text-slate-950">Bad-Faith Adoption:</strong> Copying an established foreign or domestic trademark without bona fide intent.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: The 5 Stages of Opposition Proceedings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Step-by-Step Trademark Opposition Trial Lifecycle
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Stage</th>
                <th className="py-3 px-4">Action &amp; Prescribed Rule</th>
                <th className="py-3 px-4">Responsible Party</th>
                <th className="py-3 px-4">Strict Statutory Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 1</td>
                <td className="py-3.5 px-4">Notice of Opposition (Form TM-O)</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Opponent</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Within 4 months of Journal publication</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 2</td>
                <td className="py-3.5 px-4">Counter-Statement (Form TM-O)</td>
                <td className="py-3.5 px-4 text-blue-700 font-medium">Applicant</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Within 2 months of receiving Notice (Strictly fatal if missed)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 3</td>
                <td className="py-3.5 px-4">Rule 45 Evidence in Support of Opposition</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Opponent</td>
                <td className="py-3.5 px-4">Within 2 months of Counter-Statement receipt</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 4</td>
                <td className="py-3.5 px-4">Rule 46 Evidence in Support of Application</td>
                <td className="py-3.5 px-4 text-blue-700 font-medium">Applicant</td>
                <td className="py-3.5 px-4">Within 2 months of Opponent Evidence receipt</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Stage 5</td>
                <td className="py-3.5 px-4">Rule 47 Evidence in Reply &amp; Hearing</td>
                <td className="py-3.5 px-4">Both Parties / Registrar</td>
                <td className="py-3.5 px-4">Formal oral arguments; Registrar issues final judgment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: What Happens if Counter-Statement is Not Filed */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. The Critical Importance of the 2-Month Counter-Statement Deadline
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 21(2) of the Trade Marks Act 1999, if the applicant fails to send a counter-statement within two months from receipt of the notice of opposition, they shall be <strong className="font-semibold text-rose-700">deemed to have abandoned their application</strong>.
        </p>
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-[13px] text-slate-900 font-normal leading-relaxed">
          <strong className="text-amber-950 font-semibold">Strict Statutory Bar:</strong> Indian High Courts (including the landmark Delhi High Court judgments) have repeatedly affirmed that the Registrar has <strong className="font-semibold text-rose-700">no discretionary power to extend the 2-month deadline</strong> for filing a counter-statement. Once 60 days pass, the application is permanently lost. Immediate legal intervention is vital.
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
    a: "Yes. Any final order passed by the Registrar of Trade Marks can be appealed to the High Court having territorial jurisdiction within three months from the date of the decision.",
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
