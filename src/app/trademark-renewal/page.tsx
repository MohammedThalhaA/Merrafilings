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
    "a": "A trademark is a specific sign capable of graphical representation which can differentiate the goods or services of one enterprise from those of other enterprises. This can include a name, word, phrase, logo, symbol, design, image, or a combination of these elements. It's essential for protecting a brand's unique identity in the marketplace."
  },
  {
    "q": "Why is trademark renewal important?",
    "a": "Trademark renewal ensures the continued protection of the brand's unique identity in the market. Without renewal, the rights to the trademark can be lost, meaning others could potentially use the trademark without facing any legal consequences. Renewal preserves the brand's exclusivity, legal status, and market position."
  },
  {
    "q": "How often do I need to renew my trademark?",
    "a": "Trademarks need to be renewed every ten years. It's important to note the expiration date of your trademark to avoid lapses in protection."
  },
  {
    "q": "Is there a grace period for trademark renewal?",
    "a": "Yes, there is a six-month grace period after the initial ten-year validity during which the owner can still renew the trademark. This offers flexibility and a safety net for trademark owners who might miss the initial deadline."
  },
  {
    "q": "What happens if I don't renew my trademark within the grace period?",
    "a": "If a trademark isn't renewed within this grace period, the Registrar will announce the trademark's removal in the official Trademark Journal, leading to a loss of all the rights and protections associated with that trademark."
  }
];

const FAQ_COL_2 = [
  {
    "q": "How can I initiate the renewal process?",
    "a": "To renew, you need to submit a formal application to the Registrar of Trademarks. This application must adhere to the set guidelines, be submitted within the given time frame, and be accompanied by the necessary renewal fee."
  },
  {
    "q": "Are there different methods to renew a trademark?",
    "a": "Yes. Owners can either: Renew with alterations: This allows updating or changing parts of the current trademark during the renewal process.; Renew without alterations: This simply extends the trademark's validity without making any changes to it."
  },
  {
    "q": "What if my trademark lapses after the ten-year duration?",
    "a": "If a trademark expires and isn't renewed, owners can still restore it. This requires undergoing a restoration process which is similar to renewal, but with an additional penalty fee due to the delay."
  },
  {
    "q": "How is the cost to renew trademark determined and why is it important to plan for it?",
    "a": "The cost to renew trademark is determined based on the type of trademark, the number of classes, and the mode of filing (online or offline). Understanding the cost to renew trademark is essential for businesses to maintain continuous protection of their brand without interruptions. Planning ahead for trademark renewal and its cost ensures that you avoid last-minute penalties and safeguard your trademark rights for the long term."
  },
  {
    "q": "What is the filing deadline for trademark renewal?",
    "a": "The renewal application should ideally be initiated six months before the trademark's expiration. Although renewal is possible up to a year before expiration, aiming for the six-month mark provides a safety buffer."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "What if I miss the deadline?",
    "a": "If the renewal deadline is missed, there's still a grace period of six months post-expiration where the trademark can be renewed by paying an additional surcharge."
  },
  {
    "q": "Can a cancelled trademark be restored?",
    "a": "Yes, if a trademark gets cancelled due to non-renewal, there's a window for its restoration. The owner must submit a reinstatement application within six months following the cancellation."
  },
  {
    "q": "What documents are required for trademark renewal?",
    "a": "When renewing a trademark, several documents are necessary: A copy of the original trademark registration certificate.; A copy of the TM-A form from the initial registration.; Applicant's identification and residence proof.; If someone else is representing the trademark owner, a Power of Attorney is necessary."
  },
  {
    "q": "Can you briefly describe the trademark renewal process in India?",
    "a": "In India, the renewal process is structured to ensure thorough protection: Submission of Form TM-R to the Trademark Registry.; A comprehensive review of the application by the Registry to ensure no conflicts.; Details of the renewed trademark are publicized in the Trademark Journal for four months, allowing third parties to raise objections.; Following this, and after resolving any disputes, the Trademark Renewal Certificate is issued, marking the trademark's renewed status for another decade."
  },
  {
    "q": "Is the renewal process complicated?",
    "a": "The renewal process involves several steps and careful documentation. While it can appear complex, entities like Merrafilings offer services that handle the intricate details, making the renewal process more streamlined for trademark owners."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "What is the Trademark Journal?",
    "a": "The Trademark Journal is an official publication where renewed trademarks are listed. This allows for transparency and offers third parties a chance to raise any objections they might have against a particular renewal."
  },
  {
    "q": "What if there are objections to my renewal?",
    "a": "If objections are raised, they must be addressed by the applicant. If unresolved, the Registrar might organize a hearing to understand and settle the matter."
  },
  {
    "q": "After renewing, how long will my trademark be valid?",
    "a": "Once successfully renewed, a trademark remains valid for an additional ten years from the date of renewal."
  },
  {
    "q": "What role does Merrafilings play in trademark renewal?",
    "a": "Merrafilings is a service provider that aids in the entire trademark renewal process. From gathering details, crafting the application, to managing the submission process with the Registrar of Trademarks, they ensure the renewal is accurate and timely."
  },
  {
    "q": "Why should I consider Merrafilings for my trademark renewal?",
    "a": "Merrafilings boasts expertise in trademark renewal. Their meticulous approach and dedication to client satisfaction ensures that the renewal process is smooth and efficient, safeguarding the trademark and the associated rights for the owner."
  }
];

const FORM_FEATURES = [
  { icon: <Clock className="w-4 h-4" />, text: "Extends Exclusive Trademark Rights for 10 Full Years" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Preserves Statutory Protection under Section 25 of TM Act" },
  { icon: <AlertTriangle className="w-4 h-4" />, text: "Prevents Deletion from Register & Trademark Squatting" },
  { icon: <Scale className="w-4 h-4" />, text: "Avoids Heavy Late Restoration Fines & Loss of Goodwill" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Fast-Track 24-Hour Form TM-R Filing by IP Attorneys" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Standard 10-Year Trademark Renewal",
    shortDesc: "Timely renewal filed within 6 months before the 10-year expiration date on Form TM-R.",
    expandedDesc: "Complete audit of existing trademark register entry, drafting of Form TM-R, payment of statutory government renewal fees, IP India portal e-filing, and delivery of official renewal journal notification.",
    price: "₹4,999",
    priceSub: "+ Govt Fee ₹9,000 | 1 Class",
    badge: "Timely Renewal",
    features: [
      "Trademark Register Verification & TM-R Drafting",
      "Statutory Form TM-R Electronic Lodgement",
      "Full Government Fee Payment Coordination",
      "Immediate Filing Receipt & Challan Delivery",
      "Trademark Journal Publication Tracking",
      "Updated Official Renewal Certificate Vault",
    ],
  },
  {
    name: "Late Renewal in Grace Period",
    popular: true,
    badge: "Most Popular",
    shortDesc: "For trademarks that have expired but are within the 6-month statutory grace period post-expiry.",
    expandedDesc: "Includes preparation of Form TM-R with late renewal surcharge, urgent filing to prevent removal from the register, legal affidavit explaining delay, and active follow-up until restoration confirmation.",
    price: "₹6,499",
    priceSub: "+ Govt Fee ₹13,500 | Grace Period",
    features: [
      "Urgent Grace Period Form TM-R Submission",
      "Statutory Late Fee Coordination (Govt Surcharge)",
      "Affidavit of Non-Abandonment Drafting",
      "Prevents Third-Party Brand Claims",
      "Direct Priority Follow-up with TM Registry",
      "Trademark Journal Renewal Notification",
      "Dedicated Senior IP Counsel Case Manager",
    ],
  },
  {
    name: "Trademark Restoration & Renewal Petition",
    shortDesc: "For registered trademarks removed from the register between 6 months and 1 year post-expiration.",
    expandedDesc: "Statutory restoration petition under Section 25(4) of the Trade Marks Act 1999. Includes detailed statement of case, substantial proof of continuous commercial use, petition filing, and advocacy before the Registrar.",
    price: "₹9,999",
    priceSub: "+ Govt Fee ₹18,000 | Restoration",
    badge: "Restoration Suite",
    features: [
      "Comprehensive Restoration Petition Drafting",
      "Substantive Statement of Case Preparation",
      "Compilation of Continuous Commercial Invoices",
      "Direct Liaison with the Registrar of Trade Marks",
      "Hearing Representation if Show-Cause Issued",
      "Restoration of Registered Status on Register",
      "10-Year Protection Re-established Guaranteed",
    ],
  },
];

const RELATED_GUIDES = [
  "Section 25 of Trade Marks Act: Trademark Renewal Rules & Timelines",
  "What Happens When a Trademark Expires: Grace Period vs Restoration",
  "How to Download Your Trademark Renewal Certificate Online",
  "Difference Between Timely Renewal (TM-R) and Late Restoration",
  "How to Transfer or Assign a Trademark During Renewal",
  "Top 5 Reasons Why Businesses Lose Their Registered Trademarks"
];

const RELATED_SERVICES_TAGS = [
  "Trademark Registration",
  "Trademark Objection",
  "Trademark Transfer",
  "Trademark Protection",
  "Design Registration",
  "Copyright Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "trademark renewal online apply",
  "trademark renewal fees in India",
  "form TM-R filing instructions",
  "trademark grace period restoration rules",
  "trademark validity 10 years renewal"
];

function TrademarkRenewalGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          In India, a registered trademark is valid for a period of <strong className="font-semibold text-slate-950">10 years</strong> from the original application filing date. Under <strong className="font-semibold text-slate-950">Section 25 of the Trade Marks Act, 1999</strong>, the trademark can be renewed perpetually for consecutive blocks of 10 years by filing <strong className="font-semibold text-slate-950">Form TM-R</strong> along with the prescribed statutory government fees. Renewing your trademark ensures that your exclusive monopoly over the brand name, logo, and slogan remains unbroken, safeguarding multi-year brand equity, customer trust, and corporate valuation while preventing third-party rivals from legally claiming your lapsed mark.
        </p>
      </div>

      {/* Section 1: Statutory Provision */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Statutory Renewal Framework Under Section 25 of Trade Marks Act
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Section 25 provides that the Registrar of Trade Marks shall renew the registration of a trademark for a period of 10 years from the expiration of the original registration or of the last renewal. An application for renewal can be filed as early as <strong className="font-semibold text-slate-950">six months to one year prior</strong> to the expiry date.
        </p>
      </section>

      {/* Section 2: Deletion of Mark Due to Non-Renewal */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Deletion of Registered Trademark Due to Non-Renewal (Section 25)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          If an application for renewal is not filed before the expiry date, the Registrar sends a notice in <strong className="font-semibold text-slate-950">Form RG-3</strong> intimating the proprietor of the impending expiration. If the trademark remains unrenewed within the 6-month grace period, the Registrar is statutorily authorized to <strong className="font-semibold text-rose-700">remove the trademark from the Register of Trade Marks</strong>. Once removed:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-900 font-normal pl-4 list-disc">
          <li>You instantly lose the legal right to use the ® symbol on your packaging, digital storefronts, and marketing materials.</li>
          <li>You forfeit the right to institute statutory infringement suits under Section 29, being relegated to the difficult and expensive burden of proving common law passing off.</li>
          <li>Competitors, squatters, or counterfeiters can immediately apply to register your identical brand name without initial opposition.</li>
        </ul>
      </section>

      {/* Section 3: Core Benefits of Renewing */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Core Commercial Benefits of Trademark Renewal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Perpetual Legal Monopoly</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Unlike patents or designs which irrevocably enter the public domain after 20 years, a trademark can be owned forever through timely 10-year renewals.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Brand Goodwill &amp; Valuation</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Preserves intangible enterprise goodwill on your balance sheet, critical for investor due diligence, franchising agreements, and corporate M&amp;A.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Deter Infringers &amp; Fakes</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1.5 leading-relaxed">
              Active registration discourages imitators and enables swift customs border enforcement against counterfeit import shipments under IPR Border Rules.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Filing Deadlines & Fees Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Trademark Renewal Timelines, Form Types &amp; Statutory Fees
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Trade Marks Rules, 2017 classify renewal proceedings into three distinct time windows:
        </p>

        {/* Table 1: Renewal Windows & Fees */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Renewal Window</th>
                <th className="py-3 px-4">Statutory Form</th>
                <th className="py-3 px-4">Government Fee (Per Class)</th>
                <th className="py-3 px-4">Remarks &amp; Conditions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Standard Timely Renewal</td>
                <td className="py-3 px-4 font-medium text-slate-900">Form TM-R</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹9,000 (Online E-Filing)</td>
                <td className="py-3 px-4 font-normal text-slate-900">Filed within 1 year to 6 months prior to expiry date. Zero late penalty.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Late Renewal (Grace Period)</td>
                <td className="py-3 px-4 font-medium text-slate-900">Form TM-R + Late Surcharge</td>
                <td className="py-3 px-4 font-semibold text-amber-800">₹9,000 + ₹4,500 Surcharge</td>
                <td className="py-3 px-4 font-normal text-slate-900">Available up to 6 months following expiry date. Prevents removal from register.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Restoration &amp; Renewal</td>
                <td className="py-3 px-4 font-medium text-slate-900">Form TM-R + Section 25(4) Petition</td>
                <td className="py-3 px-4 font-semibold text-rose-800">₹9,000 + ₹9,000 Restoration Surcharge</td>
                <td className="py-3 px-4 font-normal text-slate-900">Filed between 6 months and 1 year post-expiry. Requires explanatory User Affidavit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Step-by-Step Online Renewal Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Step-by-Step Trademark Renewal Procedure in India
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Application Drafting (Form TM-R)</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Audit existing trademark details on the IP India database, confirm owner identity, registered goods/services classes, and prepare Form TM-R with or without alterations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Electronic Portal Submission &amp; Fee Lodgement</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                File Form TM-R electronically on the IP India gateway using Class 3 digital signature certificates, deposit statutory fees, and obtain instant CBR receipt.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Trademark Journal Renewal Publication</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The Trademark Registry examines the filing, validates proprietor status, and advertises the renewal in the official weekly Trademark Journal.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Issuance of Official Renewal Certificate</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The Registrar issues the official digital Certificate of Renewal, updating the public register with your extended 10-year validity milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Streamline Trademark Renewal with Merrafilings
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Missing a renewal deadline can permanently destroy a decade of brand equity. Merrafilings provides proactive, automated trademark management:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Automated 10-Year Expiry Surveillance &amp; Timely Reminders</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Same-Day Form TM-R Digital Lodgement by IP Attorneys</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Specialized Grace Period &amp; Restoration Petition Advocacy</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Official Renewal Certificate Delivery &amp; Cloud Document Vault</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Trademark Renewal Online")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Renew Your Trademark Online Now</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function TrademarkRenewalPage() {
  return (
    <ServicePageTemplate
      badgeText="Section 25 Trade Marks Act 1999 Statutory Renewal"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Trademark Renewal
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Renew your registered trademark for another 10 years under Section 25 of the Trade Marks Act 1999. Prevent deletion from the official register, protect your brand goodwill, and maintain uninterrupted ownership rights."
      formTitle="Renew Your Trademark"
      formSubtitle="Enter your registered trademark details below to verify expiry date and file Form TM-R."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">trademark renewal pricing.</span>
        </>
      }
      pricingSubtitle="Select your filing window for timely renewal, grace period filing, or restoration."
      breadcrumbCurrent="Trademark Renewal"
      guideTitle="Trademark Renewal Online - Section 25 Form TM-R Filing"
      guideContent={<TrademarkRenewalGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about trademark renewal, Form TM-R, grace periods, restoration, and 10-year validity."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
