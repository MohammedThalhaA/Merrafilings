"use client";

import React from "react";
import Link from "next/link";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Building,
  Check,
  Clock,
  Landmark,
  BadgePercent,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  Globe2,
  TrendingUp,
  Layers,
  Zap,
  Briefcase,
  HelpCircle,
  Truck,
  CheckCircle,
  FileSpreadsheet,
  Calendar,
  DollarSign,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  Laptop,
  Sparkles,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "What is a trademark?",
    "a": "In India, a trademark can be a unique sign, image, or name that signifies who created a product or provided a service. It stands as a unique identifier for a business, showcasing its brand and quality. Registering a trademark grants exclusive rights to use it, preventing unauthorized usage by others."
  },
  {
    "q": "Why is the trademark objection step crucial in India?",
    "a": "The trademark objection step is pivotal during the trademark registration process. It involves an officer meticulously checking the chosen brand name to ensure compliance with all rules. Objections indicate issues or conflicts, which need rectification for successful registration."
  },
  {
    "q": "What are the primary steps for Trademark Registration in India?",
    "a": "Trademark registration involves: Trademark search; Filing of trademark application; Formality inspection; Publication in the journal; Grant of trademark registration"
  },
  {
    "q": "What happens if there's a Trademark Objection?",
    "a": "Upon submitting a trademark application, it undergoes rigorous examination. If any inconsistencies or overlaps with existing trademarks are found, an objection is issued. It's vital to note that an objection isn't a denial but a request for clarification or adjustment."
  },
  {
    "q": "Why do I need to pay trademark objection reply fees?",
    "a": "These fees cover the administrative costs of processing your reply and the jurisdiction in which the trademark application is filed. We offers exclusive and competitive pricing for responding to trademark objections."
  }
];

const FAQ_COL_2 = [
  {
    "q": "What are objections under Section 11?",
    "a": "Section 11 objections relate to the similarity between the proposed trademark and existing ones. These can be due to identical marks, similar sounds, or shared concepts among trademarks."
  },
  {
    "q": "What are objections under Section 9?",
    "a": "Section 9 deals with objections raised due to trademarks that are too descriptive, lack distinctiveness, or are potentially misleading to consumers."
  },
  {
    "q": "How does one respond to trademark objections online?",
    "a": "If the trademark application fails to meet standards, a notification is sent to the applicant. They must respond within 30 days, addressing the concerns raised. Failure to satisfy the standards may result in application denial, though appeals can be made to the Intellectual Property Appellate Board."
  },
  {
    "q": "What's the difference between Trademark Objection and Trademark Opposition?",
    "a": "While the terms are sometimes used interchangeably, they are different. An \"objection\" relates to concerns raised by the reviewing officer about the registration process. In contrast, \"trademark opposition\" involves challenges by third parties disputing the trademark's validity."
  },
  {
    "q": "When should one submit the objection reply?",
    "a": "Upon receiving the examination report, it's crucial to file a reply within 30 days, comprehensively addressing all queries raised."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "What documents are needed for the reply note?",
    "a": "To effectively address objections, one should submit: Invoices and bills; Affidavits; Business cards and letterheads; Relevant government documents, such as MSME or FSSCI certificates; Screenshots of social media pages or advertisement copies"
  },
  {
    "q": "How should one respond to the Trademark Objection?",
    "a": "On receiving the examination report, a detailed written reply should be promptly submitted. This response should present justifications, evidence, and facts, asserting the mark's eligibility for valid registration."
  },
  {
    "q": "What are critical aspects to consider when crafting a reply?",
    "a": "Crafting a reply demands: Comprehensive objection analysis; Adherence to the specified format; References to applicable laws, prior rulings, and mark differences; Including any supporting documents or evidence; An affidavit if the trademark appears on digital platforms"
  },
  {
    "q": "What role does Merrafilings play in the Trademark Objection process?",
    "a": "Merrafilings offers expert guidance on trademark objections and end-to-end registration services. Their team specializes in addressing objections, ensuring responses are comprehensive, boosting the chances of successful trademark registration."
  },
  {
    "q": "Why should I consider Merrafilings for managing Trademark Objections?",
    "a": "Merrafilings boasts expertise in the intricacies of trademark objections. By choosing them, you enhance your chances of navigating these challenges and securing your trademark with confidence."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "Can a trademark application be denied?",
    "a": "Yes, if the applicant's response to an objection doesn't meet the expected standards, the application may be denied. However, the applicant can appeal against this decision."
  },
  {
    "q": "How does one differentiate between identical and similar trademarks?",
    "a": "Identical marks are exactly the same, while similar trademarks might have differences in appearance, sound, or concept but can still cause confusion among consumers."
  },
  {
    "q": "Why is a descriptive trademark objectionable?",
    "a": "Descriptive trademarks, like \"FreshJuice\" for juice products, directly describe the product. Such trademarks lack uniqueness, making them objectionable as they don't distinctly identify the source of the goods or services."
  },
  {
    "q": "What is the public's role after the objection is addressed?",
    "a": "After addressing the objection, the trademark is listed in a public journal. The public then has four months to review and raise any opposition against it."
  },
  {
    "q": "What happens if an objection isn't addressed within the stipulated time?",
    "a": "If objections aren't addressed within the provided timeframe, the trademark application may face rejection."
  }
];

const FORM_FEATURES = [
  { icon: <Clock className="w-4 h-4" />, text: "Strict 30-Day Statutory Reply Filing Limitation" },
  { icon: <Scale className="w-4 h-4" />, text: "Defend Section 9 Absolute Grounds (Non-Distinctiveness)" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Defend Section 11 Relative Grounds (Similarity with Prior Marks)" },
  { icon: <AlertTriangle className="w-4 h-4" />, text: "Prevent Irreversible 'Abandoned' Status on Trademark Register" },
  { icon: <Award className="w-4 h-4" />, text: "Drafted & Filed by Senior Intellectual Property Attorneys" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Section 9 Objection Legal Reply",
    shortDesc: "For marks objected on absolute grounds (descriptive, generic, or non-distinctive).",
    expandedDesc: "Detailed analysis of examination report, drafting of legal rebuttal substantiating acquired distinctiveness and commercial goodwill, compilation of sales proof/invoices, and Form TM-M e-filing on IP India.",
    price: "₹2,499",
    priceSub: "All Inclusive | Single Class",
    badge: "Section 9 Defense",
    features: [
      "Examination Report In-Depth Scrutiny",
      "Legal Grounds of Acquired Distinctiveness",
      "Case Law Citations & High Court Precedents",
      "User Affidavit of Commercial Prior Use",
      "Official Form TM-M Portal E-Filing",
      "Dedicated Trademark Attorney Representation",
    ],
  },
  {
    name: "Section 11 Conflict Rebuttal Suite",
    popular: true,
    badge: "Most Popular",
    shortDesc: "For marks objected due to conflict or phonetic/visual similarity with cited prior registered trademarks.",
    expandedDesc: "Comprehensive legal counter-rebuttal establishing phonetic, visual, structural, and semantic distinctions. Includes trade channel difference arguments, leading Supreme Court precedent citations, and official IP India e-filing.",
    price: "₹4,499",
    priceSub: "All Inclusive | Prior Mark Rebuttal",
    features: [
      "Comprehensive Prior Mark Conflict Analysis",
      "Phonetic & Visual Disparity Rebuttal",
      "Differentiation of Target Consumer Base",
      "Comprehensive Landmark Precedent Citations",
      "Compilation of Documentary User Evidence",
      "Official Form TM-M Filing & Acknowledgment",
      "Priority Attorney Support Till Acceptance",
    ],
  },
  {
    name: "Objection Reply + Hearing Advocacy Retainer",
    shortDesc: "End-to-end defense covering written objection reply plus senior attorney advocacy in formal show-cause hearing.",
    expandedDesc: "Designed for high-stake corporate brands and valuable commercial trademarks. Covers written response drafting plus preparation of written submissions and live appearance before the Hearing Officer.",
    price: "₹7,999",
    priceSub: "All Inclusive | Reply + Hearing Retainer",
    badge: "Complete Retainer",
    features: [
      "Full Section 9 & 11 Legal Counter-Reply",
      "Compilation of Comprehensive Legal Dossier",
      "Senior Trademark Attorney Hearing Briefing",
      "Formal Representation before Hearing Officer",
      "Written Submissions Post-Hearing Lodgement",
      "Continuous Monitoring Until Journal Publication",
      "Guaranteed Direct IP Counsel Retainer",
    ],
  },
];

const RELATED_GUIDES = [
  {
    title: "Trademark Objection Guidelines: A Comprehensive Guide",
    href: "/trademark-objection/trademark-objection-guidelines-a-comprehensive-guide",
  },
  {
    title: "Apply Trademark Objection: Step-by-Step Guide",
    href: "/trademark-objection/apply-trademark-objection-stepbystep-guide",
  },
  {
    title: "Trademark Objection Required Documents: Complete Guide",
    href: "/trademark-objection/trademark-objection-required-documents-guide",
  },
  {
    title: "Unlock the Power of Trademark Registration in India",
    href: "/trademark-objection/unlock-the-power-of-trademark-registration-in-india",
  },
  {
    title: "Understanding Trademark Objection: A Complete Guide",
    href: "/trademark-objection/understanding-trademark-objection-a-complete-guide",
  },
  {
    title: "Trademark Objection in India: Complete Guide",
    href: "/trademark-objection/trademark-objection-in-india-complete-guide",
  },
  {
    title: "Documents Required for Trademark Objection",
    href: "/trademark-objection/documents-required-for-trademark-objection",
  },
];

const RELATED_SERVICES_TAGS = [
  "Trademark Registration",
  "Trademark Renewal",
  "Trademark Opposition",
  "Trademark Hearing",
  "TM Infringement Notice",
  "Copyright Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "trademark objection reply online",
  "section 9 trademark objection format",
  "section 11 1 relative grounds objection reply",
  "trademark status objected meaning",
  "how to avoid trademark abandonment"
];

function TrademarkObjectionGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          A <strong className="font-semibold text-slate-950">Trademark Objection</strong> is a formal legal query raised by the Trademark Examiner during the substantive examination stage of your application under the Trade Marks Act, 1999. Published in an official <strong className="font-semibold text-slate-950">Examination Report</strong>, an objection halts your application&apos;s progress toward registration. The applicant must mandatorily file a comprehensive, legally reasoned written reply within <strong className="font-semibold text-slate-950">30 days</strong> of receiving the report. Failure to respond within this strict statutory deadline results in the Trademark Registry deeming the application <strong className="font-semibold text-rose-700">&quot;Abandoned&quot;</strong>, causing permanent forfeiture of your priority date and brand investment.
        </p>
      </div>

      {/* Section 1: What is a Trademark Objection */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Trademark Objection in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          An objection does not mean your trademark has been rejected. It is an administrative show-cause opportunity granted by the Examiner for you to explain why your mark complies with statutory requirements. Objections are raised primarily under two provisions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Section 9: Absolute Grounds for Refusal</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Raised when the Examiner believes the mark is non-distinctive, purely descriptive of the goods/services (e.g., &quot;Best Coffee&quot;), customary in the trade, or deceptive.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Section 11: Relative Grounds for Refusal</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Raised when your mark is identical with or deceptively similar to an earlier registered trademark or pending prior application in the same or similar class.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 & Table 1: Status Codes */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Trademark Status Progression &amp; Meanings
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          When tracking your application on the IP India electronic portal, your status will reflect one of the following stages:
        </p>

        {/* Table 1: Status Codes */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Application Status</th>
                <th className="py-3 px-4">Statutory Meaning</th>
                <th className="py-3 px-4">Action Required by Applicant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Formalities Chk Pass</td>
                <td className="py-3 px-4 font-normal text-slate-900">Application passed initial check; under substantive examination</td>
                <td className="py-3 px-4 font-medium text-slate-900">Wait for Examination Report</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-rose-50/40">
                <td className="py-3 px-4 font-semibold text-rose-700">Objected</td>
                <td className="py-3 px-4 font-normal text-rose-950">Examination report issued citing Section 9 or 11 objections</td>
                <td className="py-3 px-4 font-bold text-rose-700">File Legal Reply Within 30 Days</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-emerald-800">Accepted &amp; Advertised</td>
                <td className="py-3 px-4 font-normal text-slate-900">Reply accepted; published in Trademark Journal for 4 months</td>
                <td className="py-3 px-4 font-medium text-slate-900">Monitor for third-party opposition</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-amber-800">Opposed</td>
                <td className="py-3 px-4 font-normal text-slate-900">Third party filed formal opposition notice (Form TM-O)</td>
                <td className="py-3 px-4 font-medium text-slate-900">File Counter-Statement within 2 months</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-emerald-800">Registered</td>
                <td className="py-3 px-4 font-normal text-slate-900">Trademark approved and official ® certificate issued</td>
                <td className="py-3 px-4 font-medium text-slate-900">Download certificate &amp; maintain for 10 years</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-slate-100">
                <td className="py-3 px-4 font-semibold text-slate-950">Abandoned</td>
                <td className="py-3 px-4 font-normal text-slate-900">Application dismissed due to failure to reply within 30 days</td>
                <td className="py-3 px-4 font-medium text-rose-700">File restoration or re-apply fresh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The 30-Day Strict Deadline */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. The Critical 30-Day Statutory Limitation Period
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Rule 33 of the Trade Marks Rules, 2017, the applicant must respond to the examination report within <strong className="font-semibold text-slate-950">one month (30 days)</strong> from the date of receipt. While extensions were granted in earlier decades, the Registry strictly enforces this 30-day timeline today. If a reply is delayed, the system triggers an automated abandonment order. Merrafilings ensures your response is drafted, vetted, and lodged on the IP India gateway within 3 to 5 business days of notification.
        </p>
      </section>

      {/* Section 4: Step-by-Step Response Strategy */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. 5-Step Professional Trademark Objection Reply Strategy
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Examination Report Forensic Analysis</h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-0.5 leading-relaxed">
                Deconstruct the Examiner&apos;s specific grounds—whether raised under Section 9(1)(a), Section 9(1)(b), or conflicting marks cited under Section 11(1).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Evidence of Commercial Prior Use Compilation</h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-0.5 leading-relaxed">
                Compile invoices, GST returns, audited turnover, website screenshots, and marketing materials proving continuous commercial use under a notarized User Affidavit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Judicial Case Law Rebuttal Drafting</h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-0.5 leading-relaxed">
                Draft a persuasive legal counter-argument referencing Supreme Court and Delhi High Court IP precedents establishing phonetic disparity and absence of consumer confusion.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Electronic Lodgement on IP India Gateway</h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-0.5 leading-relaxed">
                Submit the reply formally under Form TM-M with supporting digital exhibits and receive instant electronic receipt and filing timestamp.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">5</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Show-Cause Hearing Representation (If Required)</h3>
              <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-0.5 leading-relaxed">
                If the Examiner is not fully convinced by written submissions, our registered Trademark Attorney attends the formal virtual hearing to advocate for acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 & Table 2: Fee Structure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Trademark Objection Fee Structure in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Understanding the fee components involved in filing a trademark objection response:
        </p>

        {/* Table 2: Fees */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Fee Component</th>
                <th className="py-3 px-4">Statutory Details</th>
                <th className="py-3 px-4">Approximate Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Government Portal Filing Fee</td>
                <td className="py-3 px-4 font-normal text-slate-900">There is NO government statutory fee to file an objection reply</td>
                <td className="py-3 px-4 font-bold text-emerald-800">₹0 (Nil)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Notarized User Affidavit</td>
                <td className="py-3 px-4 font-normal text-slate-900">Non-judicial stamp paper fee + public notary attestation</td>
                <td className="py-3 px-4 font-normal text-slate-900">₹200 – ₹500</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Professional Legal Drafting Fee</td>
                <td className="py-3 px-4 font-normal text-slate-900">Drafted by registered Trademark Attorney with case law citations</td>
                <td className="py-3 px-4 font-semibold text-purple-800">₹2,499 – ₹4,499 (Merrafilings)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Formal Hearing Fee (If Scheduled)</td>
                <td className="py-3 px-4 font-normal text-slate-900">Virtual appearance and arguments by Senior IP Counsel</td>
                <td className="py-3 px-4 font-medium text-slate-900">Optional Retainer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Why Choose Merrafilings for Trademark Objection Replies?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          A generic, copy-pasted objection reply is the leading reason trademarks get abandoned. Merrafilings pairs your case with specialized IP advocates:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">97.6% First-Instance Examiner Acceptance Rate</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Expedited 48-Hour Turnaround Within 30-Day Window</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Extensive High Court &amp; Supreme Court IP Citation Library</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Complete Post-Filing Tracking Until Journal Advertisement</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Trademark Objection Reply")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>File Your Trademark Objection Reply Online</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function TrademarkObjectionPage() {
  return (
    <ServicePageTemplate
      badgeText="Trade Marks Act 1999 Statutory Examination Defense"
      heroTitle={
        <>
          <span>File </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Trademark Objection Reply
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Overcome Section 9 and Section 11 trademark objections within the statutory 30-day window. Get customized legal replies drafted with authoritative high-court precedents and evidence of prior use by registered IP attorneys."
      formTitle="Respond to Trademark Objection"
      formSubtitle="Enter your application number below to receive an attorney examination analysis within 2 hours."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">objection reply pricing.</span>
        </>
      }
      pricingSubtitle="Select your objection grounds for customized legal rebuttal and IP India portal submission."
      breadcrumbCurrent="Trademark Objection"
      guideTitle="Trademark Objection Reply Online - Section 9 &amp; 11 Legal Defense"
      guideContent={<TrademarkObjectionGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about trademark objections, examination reports, Section 9, Section 11, and the 30-day deadline."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
