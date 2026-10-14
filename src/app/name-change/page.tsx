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
    "q": "What is the legal name change process in India?",
    "a": "A legal name change in India involves creating a notarized affidavit, publishing the name change in local and national newspapers, and obtaining a Gazette notification. This process ensures that your new name is legally recognized by all government and private records."
  },
  {
    "q": "Why is a Gazette notification necessary for a name change?",
    "a": "A Gazette notification formalizes the name change process by officially publishing your new name in the Gazette of India. This step confirms your name change's legality, allowing you to update your identity across all official documents."
  },
  {
    "q": "How can I change my name on my PAN card after a legal name change?",
    "a": "After obtaining the Gazette notification, you can apply to update your PAN card with your new name. This involves submitting the Gazette notification and other pertinent documents to ensure your PAN reflects your legally recognized name."
  },
  {
    "q": "Is it possible for NRIs to undergo a legal name change in India?",
    "a": "Yes, Non-Resident Indians (NRIs) are eligible to apply for a legal name change in India. They must follow the same procedure as residents, including preparing an affidavit and publishing the name change in newspapers."
  }
];

const FAQ_COL_2 = [
  {
    "q": "What role does an affidavit play in the name change procedure?",
    "a": "An affidavit is crucial in the name change process, as it officially declares your intention to switch from your old name to your new name. Notarizing this affidavit is a necessary step for validation when pursuing newspaper publication and Gazette notification."
  },
  {
    "q": "How does a legal name change enhance legal identity update and prevent inconsistencies?",
    "a": "A legal name change ensures that your new name is consistently reflected across all personal, financial, and legal documents. This coherence prevents identity discrepancies and miscommunication with government authorities and private entities."
  },
  {
    "q": "Can I change my name legally for reasons of personal preference after marriage or divorce?",
    "a": "Yes, individuals may legally change their names due to marriage, divorce, or personal preference. Whether adopting a spouse’s surname or reverting to a maiden name, the same legal name change process applies."
  },
  {
    "q": "Is newspaper publication mandatory for a name change, and why?",
    "a": "Yes, publishing your name change in newspapers is a mandatory step in the process. It serves as public notice, ensuring that the name change is transparent and providing an opportunity for anyone with concerns to raise objections before the Gazette notification."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "What is the difference between the Central Gazette and a State Gazette?",
    "a": "The Central Gazette is published by the Controller of Publications (Government of India) and has universal legal validity across all Indian states and international embassies/consulates. A State Gazette is published by respective state government presses and holds primary recognition within that particular state. Central Gazette notification is strongly recommended for Passport, Visa, central government employment, and banking updates."
  },
  {
    "q": "Can a minor's name be legally changed in India?",
    "a": "Yes. For a minor child (below 18 years), parents or legal guardians must execute a minor name change affidavit on non-judicial stamp paper, publish advertisements in two local newspapers, and submit the petition signed by both parents to the Department of Publication for Gazette notification."
  },
  {
    "q": "What documents are required to update a Passport after a legal name change?",
    "a": "To update your Passport, you must submit: (1) An attested copy of the Central Gazette notification containing the name change, (2) Original clippings of the two newspaper advertisements, (3) Notarized Name Change Affidavit (Annexure E for major changes), and (4) Existing original passport along with self-attested copies of first and last pages."
  },
  {
    "q": "How can I update my educational certificates and degrees with my new name?",
    "a": "Most universities, boards (CBSE/ICSE/State Boards), and institutes do not reissue original past degrees with a new name. Instead, you present your original degree certificate accompanied by the official Central Gazette notification and Name Change Deed. Legally, the Gazette notification binds all institutions, employers, and authorities to recognize the old certificate under your new legal name."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "Is an advocate or physical court appearance required for a Gazette notification?",
    "a": "No physical court appearance or advocate is required. The Gazette application is an administrative submission made to the Controller of Publications (Civil Lines, Delhi). Merrafilings handles the entire documentation, affidavit drafting, newspaper release, and postal/department lodgement on your behalf."
  },
  {
    "q": "How can I download the official Gazette of India copy once published?",
    "a": "The Government of India has discontinued physical print copies of the Gazette. Once published, your notification appears in Part IV of the official e-Gazette (egazette.gov.in). Merrafilings downloads the digitally signed, QR-coded PDF document from the official portal and delivers it directly to your email."
  },
  {
    "q": "Can a woman revert to her maiden surname after divorce?",
    "a": "Yes. A woman can revert to her maiden name or adopt a new surname post-divorce by executing a notarized name change affidavit enclosing the court decree of divorce, publishing newspaper ads, and notifying the change in the Central Gazette."
  },
  {
    "q": "What happens if there is a typographical error in the Gazette publication?",
    "a": "If an error occurs due to a printing mistake at the government press, a corrigendum or errata is published in a subsequent issue upon submitting a formal rectification request with proof of your original application."
  }
];

const FORM_FEATURES = [
  { icon: <FileText className="w-4 h-4" />, text: "Legally Binding Notarized Name Change Affidavit" },
  { icon: <Receipt className="w-4 h-4" />, text: "Dual Newspaper Publication (English + Vernacular)" },
  { icon: <Scale className="w-4 h-4" />, text: "Official Central Government of India Gazette Notification" },
  { icon: <Globe2 className="w-4 h-4" />, text: "100% Pan-India & International Legal Validity" },
  { icon: <Clock className="w-4 h-4" />, text: "End-to-End Online Assistance for Passport, PAN & Aadhaar" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Affidavit & Newspaper Ad Package",
    shortDesc: "Initial statutory legal step for minor name corrections, marriage surname updates, and local bank KYC.",
    expandedDesc: "Includes professional drafting of legal name change affidavit on non-judicial stamp paper, advocate notarization, and publication of statutory advertisement in one English national daily and one regional vernacular daily.",
    price: "₹2,499",
    priceSub: "All Inclusive | Affidavit + 2 Newspapers",
    badge: "Basic Legal",
    features: [
      "Customized Legal Affidavit Drafting",
      "Notarization by Authorized Public Notary",
      "English National Daily Newspaper Publication",
      "State Vernacular Daily Newspaper Publication",
      "Digital Newspaper Clipping Copies Delivered",
      "Dedicated Legal Drafting Specialist",
    ],
  },
  {
    name: "Complete Central Gazette Package",
    popular: true,
    badge: "Most Popular",
    shortDesc: "The complete 3-step legal process mandatory for Passport, Government Jobs, Visa, and major name changes.",
    expandedDesc: "Comprehensive package covering affidavit notarization, dual newspaper ads, complete dossier preparation for the Department of Publication (Civil Lines, Delhi), government fee lodgement, and delivery of official e-Gazette notification.",
    price: "₹4,999",
    priceSub: "All Inclusive | Full Gazette Notification",
    features: [
      "Legally Vetted Name Change Affidavit & Notary",
      "Dual Newspaper Publication (National + Vernacular)",
      "Central Gazette Dossier Drafting & Verification",
      "Department of Publication Government Fee Included",
      "Direct Liaison with Controller of Publications",
      "Official Digital Gazette Notification Delivery",
      "100% Pan-India & Global Passport Validity",
    ],
  },
  {
    name: "Tatkal / End-to-End Identity Update Suite",
    shortDesc: "Priority expedited processing plus comprehensive documentation kit for updating Passport, PAN, Aadhaar, and bank accounts.",
    expandedDesc: "Designed for individuals requiring urgent name change for foreign visa travel, employment onboarding, or property registration. Includes priority Gazette filing and dedicated paralegal support for updating all primary ID documents.",
    price: "₹7,999",
    priceSub: "All Inclusive | Priority + Full Document Support",
    badge: "Priority Suite",
    features: [
      "Complete Central Gazette Legal Package",
      "Expedited Dossier Dispatch & Priority Lodgement",
      "Step-by-Step Passport Name Change Dossier Kit",
      "PAN Card Name Correction Online Filing Assistance",
      "Aadhaar & Bank KYC Name Update Advisory",
      "Dedicated Senior Legal Case Manager",
      "Lifetime Digital Storage of Gazette Documents",
    ],
  },
];

const RELATED_GUIDES = [
  "Step-by-Step Guide: How to Change Your Name in India Legally",
  "Central Gazette vs State Gazette: Which One is Required for Passport?",
  "How to Change Name on PAN Card and Aadhaar After Marriage",
  "Newspaper Advertisement Format for Legal Name Change in India",
  "How to Update Name in Passport Post Gazette Publication",
  "Minor Name Change Procedure: Legal Guidelines for Parents"
];

const RELATED_SERVICES_TAGS = [
  "Digital Signature",
  "Udyam Registration",
  "Trade License",
  "Shop Act Registration",
  "Startup India",
  "GST Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "name change procedure in India",
  "central gazette notification online fees",
  "name change after marriage process",
  "newspaper advertisement for name change",
  "how to legally change surname in India"
];

function NameChangeGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
          <strong className="font-medium text-slate-800">Legal Name Change in India</strong> is a formal statutory procedure governed by the Indian Evidence Act, the Department of Publication (Ministry of Housing and Urban Affairs), and passport guidelines issued by the Ministry of External Affairs. Whether prompted by marriage, divorce, astrological preferences, spelling rectifications, or personal choice, changing your legal name requires a mandatory three-step legal protocol: executing a <strong className="font-medium text-slate-800">notarized affidavit</strong>, publishing a <strong className="font-medium text-slate-800">public notice in two newspapers</strong>, and notifying the change in the <strong className="font-medium text-slate-800">Gazette of India (Central or State Gazette)</strong>. A gazetted name change serves as conclusive legal proof to update identity across Passport, PAN, Aadhaar, educational certificates, and property titles.
        </p>
      </div>

      {/* Section 1: What is Legal Name Change in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is Legal Name Change in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          A legal name change is the lawful process of adopting a new name, altering an existing first name, modifying a middle name, or changing a surname. In India, a person cannot simply begin using a new name on official records without completing the prescribed legal procedure. The government requires public announcement through newspapers and an official gazette entry to prevent identity fraud, debt evasion, or criminal impersonation while conferring unquestionable legal legitimacy upon the individual&apos;s new identity.
        </p>
      </section>

      {/* Section 2: Reasons for Name Change in India */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Common Reasons for Legal Name Change in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Under Indian jurisprudence, an adult citizen has the fundamental right to change their name for any lawful reason, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Marriage &amp; Divorce</span>
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
              Adopting spouse&apos;s surname after marriage, hyphenating last names, or reverting to maiden surname following a divorce decree.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Spelling Corrections</span>
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
              Rectifying clerical spelling discrepancies between 10th marksheet, birth certificate, Aadhaar, and PAN records.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Astrology &amp; Numerology</span>
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
              Modifying letter spellings or adopting a brand-new name based on numerological, astrological, or spiritual guidance.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Religious Conversion</span>
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
              Adopting a new identity aligned with faith following voluntary religious conversion, supported by conversion deed.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Minor Child Name Change</span>
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
              Changing child&apos;s name during school admissions, adoption, or parental surname alignment executed by legal guardians.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <h3 className="font-medium text-[13.5px] text-slate-900 group-hover:text-[#155EEF] transition-colors flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Personal Preference</span>
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
              Simplifying a lengthy name, changing gender identity, or removing caste-indicating surnames to establish personal identity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Name Change Procedure in India & Table 1 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Mandatory 3-Step Procedure for Name Change in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Under government regulations, a legally recognized name change requires completing three consecutive procedural stages, followed by document updating:
        </p>

        {/* Table 1: 4-Step Process & Authorities */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Step</th>
                <th className="py-3 px-4">Statutory Activity</th>
                <th className="py-3 px-4">Jurisdictional Authority</th>
                <th className="py-3 px-4">Deliverable Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">Step 1</td>
                <td className="py-3 px-4 font-medium text-slate-900">Affidavit Preparation &amp; Notarization</td>
                <td className="py-3 px-4 font-light">First Class Judicial Magistrate / Public Notary</td>
                <td className="py-3 px-4 font-light text-slate-800">Notarized Stamp Paper Affidavit</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">Step 2</td>
                <td className="py-3 px-4 font-medium text-slate-900">Newspaper Advertisement Publication</td>
                <td className="py-3 px-4 font-light">1 English National Daily + 1 Regional Daily</td>
                <td className="py-3 px-4 font-light text-slate-800">Original Published Newspaper Clippings</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-[#594CF5]">Step 3</td>
                <td className="py-3 px-4 font-medium text-slate-900">Gazette Notification Publication</td>
                <td className="py-3 px-4 font-light">Department of Publication, Govt of India</td>
                <td className="py-3 px-4 font-light text-emerald-700 font-medium">Official Gazette Notification (Part IV)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-purple-50/40">
                <td className="py-3 px-4 font-bold text-purple-700">Step 4</td>
                <td className="py-3 px-4 font-medium text-slate-900">Identity Document Records Update</td>
                <td className="py-3 px-4 font-light">UIDAI, Income Tax Dept, Passport Office, Banks</td>
                <td className="py-3 px-4 font-light text-slate-800">Updated Passport, PAN, Aadhaar &amp; Passbook</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Affidavit Format */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Affidavit Drafting &amp; Notarization Guidelines
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          The name change affidavit is the primary sworn legal document executed on non-judicial stamp paper (typically ₹10 to ₹100 denomination based on state stamp duty acts). It must contain:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-light pl-4 list-disc">
          <li><strong>Applicant Details:</strong> Full current legal name, father&apos;s/husband&apos;s name, and complete residential address.</li>
          <li><strong>The Declaration:</strong> Clear statement declaring the abandonment of the old name and absolute adoption of the new name.</li>
          <li><strong>The Reason:</strong> Specific declaration of the reason for name change (marriage, divorce, spelling, numerology, etc.).</li>
          <li><strong>No Deception Clause:</strong> A sworn undertaking stating that the name change is not intended to defraud creditors or evade criminal liabilities.</li>
          <li><strong>Notarization:</strong> Must be signed before an advocate and attested with an official seal and stamp of a Public Notary or Oath Commissioner.</li>
        </ul>
      </section>

      {/* Section 6: Newspaper Advertisement Publication */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Newspaper Advertisement Guidelines (Dual Publication)
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Once the affidavit is notarized, government regulations mandate publishing a public notice in two newspapers circulating in your home district:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="font-medium text-xs sm:text-sm text-slate-900">1. Leading English National Daily</h3>
            <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
              Published in a recognized national newspaper circulating widely in your state (e.g., Times of India, Indian Express, Hindustan Times, Financial Express).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="font-medium text-xs sm:text-sm text-slate-900">2. Regional State Vernacular Daily</h3>
            <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
              Published in the primary official regional language newspaper of your resident state (e.g., Hindi, Marathi, Tamil, Kannada, Bengali, Telugu, Gujarati).
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 font-light italic pt-1">
          *Important: Always retain at least 4 to 5 full original newspaper copies (not just clippings) as the Department of Publication requires original unclipped newspapers with date lines visible.
        </p>
      </section>

      {/* Section 7: Is Gazette Mandatory & Table 2 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Is Gazette Notification Mandatory for Every Name Change?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          While simple surname updates after marriage can sometimes be handled for Aadhaar using a marriage certificate, government authorities, the Passport Office, banks, and educational boards mandate a formal Gazette notification in the majority of circumstances:
        </p>

        {/* Table 2: When Gazette is Mandatory */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Name Change Scenario</th>
                <th className="py-3 px-4">Gazette Notification Requirement</th>
                <th className="py-3 px-4">Statutory Justification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Passport Reissue / Major Name Change</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Strictly Mandatory</td>
                <td className="py-3 px-4 font-light">Ministry of External Affairs Passport Rules mandate Central Gazette copy.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Government Employees &amp; Defense Personnel</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Strictly Mandatory</td>
                <td className="py-3 px-4 font-light">Service book records, pension records, and EPF can only be updated via Gazette.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Educational Certificate Alignment</td>
                <td className="py-3 px-4 font-semibold text-rose-600">Strictly Mandatory</td>
                <td className="py-3 px-4 font-light">Universities require Gazette entry to recognize old marksheet under new identity.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Post-Divorce Surname Reversion</td>
                <td className="py-3 px-4 font-medium text-amber-600">Highly Recommended</td>
                <td className="py-3 px-4 font-light">Eliminates conflicts across passport, visa, and corporate employment records.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Marriage Surname Update (Aadhaar &amp; PAN only)</td>
                <td className="py-3 px-4 font-light text-slate-600">Not Mandatory (Marriage Certificate Sufficient)</td>
                <td className="py-3 px-4 font-light">Registrar marriage certificate is accepted for basic domestic identity documents.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Central Gazette vs State Gazette & Table 3 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Central Gazette vs State Gazette for Name Change
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Understanding the distinction between the Central Gazette and a State Gazette is critical before filing your petition:
        </p>

        {/* Table 3: Comparison */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Central Gazette (The Gazette of India)</th>
                <th className="py-3 px-4">State Gazette (e.g., Maharashtra / Delhi Gazette)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Publishing Authority</td>
                <td className="py-3 px-4 font-light">Controller of Publications, Government of India (Delhi)</td>
                <td className="py-3 px-4 font-light">Director of Government Printing, State Government Press</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Legal Jurisdiction</td>
                <td className="py-3 px-4 font-medium text-emerald-700">Universal Pan-India &amp; International Recognition</td>
                <td className="py-3 px-4 font-light">Primarily valid within that specific resident state</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Passport Office Acceptance</td>
                <td className="py-3 px-4 font-semibold text-emerald-700">100% Accepted by all Regional Passport Offices (RPO)</td>
                <td className="py-3 px-4 font-light text-amber-700">May face scrutiny or rejection by RPOs outside state</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Processing Time</td>
                <td className="py-3 px-4 font-light">3 to 5 Weeks</td>
                <td className="py-3 px-4 font-light">2 to 4 Weeks (varies by state infrastructure)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Merrafilings Recommendation</td>
                <td className="py-3 px-4 font-semibold text-[#594CF5]">Strongly Recommended for All Indian Citizens &amp; NRIs</td>
                <td className="py-3 px-4 font-light">Suitable only for local state utility and schooling records</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Legal Cost Breakdown & Table 4 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Legal Name Change Cost Breakdown in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          The cumulative expense for completing a name change depends on stamp paper rates, newspaper circulation sizes, and official government gazette printing charges:
        </p>

        {/* Table 4: Cost Breakdown */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-medium">
              <tr>
                <th className="py-3 px-4">Component Service</th>
                <th className="py-3 px-4">Standard Estimated Cost (₹)</th>
                <th className="py-3 px-4">Scope of Coverage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Affidavit Drafting &amp; Notarization</td>
                <td className="py-3 px-4 font-light">₹200 – ₹500</td>
                <td className="py-3 px-4 font-light">Stamp paper fee + Public Notary attestation</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Newspaper Advertisements (English + Vernacular)</td>
                <td className="py-3 px-4 font-light">₹500 – ₹1,500</td>
                <td className="py-3 px-4 font-light">Classified public notice in two circulated newspapers</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">State Gazette Notification Fee</td>
                <td className="py-3 px-4 font-light">₹1,000 – ₹2,500</td>
                <td className="py-3 px-4 font-light">Official government press printing fee (State portal)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Central Gazette Notification (Govt Fee)</td>
                <td className="py-3 px-4 font-light">₹1,100 – ₹2,500</td>
                <td className="py-3 px-4 font-light">Department of Publication Bharatkosh portal fee</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-purple-50/40">
                <td className="py-3 px-4 font-semibold text-slate-900">Merrafilings End-to-End Package</td>
                <td className="py-3 px-4 font-bold text-purple-700">₹4,999 (All Inclusive)</td>
                <td className="py-3 px-4 font-light text-slate-800">Affidavit + 2 Newspapers + Central Gazette + Full Legal Support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: Documents Checklist for Gazette Filing */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Mandatory Dossier Checklist for Central Gazette Submission
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          When submitting your petition to the Department of Publication in New Delhi, the following statutory dossier must be compiled:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 font-light">Original Notarized Name Change Affidavit</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 font-light">Original Newspaper Sheets (English + Vernacular dailies)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 font-light">Prescribed Gazette Application Proforma duly signed</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 font-light">Digital Compact Disc (CD) containing soft copy (.docx)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 font-light">Self-attested identity proof (Aadhaar, Voter ID, or PAN)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs text-slate-700 font-light">Two recent passport-size photographs signed on the back</span>
          </div>
        </div>
      </section>

      {/* Section 11: How to Update Documents Post Gazette */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Step-by-Step Identity Document Updates Post Gazette
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Once your e-Gazette notification is published and downloaded, follow this sequential order to update your identity records smoothly:
        </p>
        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Update Aadhaar Card (First Priority)</h3>
              <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
                Visit any Aadhaar Seva Kendra with the Gazette notification copy and affidavit. UIDAI updates your demographic name in 2 to 5 days, providing the foundation for subsequent document updates.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Update PAN Card Online via NSDL / Protean</h3>
              <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
                Submit a PAN change request form using your updated Aadhaar. The Income Tax Department updates your name while retaining your existing 10-character PAN number.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Apply for Passport Reissue with New Name</h3>
              <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
                Book an appointment at your Regional Passport Seva Kendra (PSK) submitting the Gazette notification, newspaper advertisements, and updated Aadhaar/PAN.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-900">Bank Accounts, Driving License, Property &amp; Mutual Funds</h3>
              <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
                Submit self-attested copies of your Gazette notification and updated PAN/Aadhaar to your bank branch, RTO, registrar of properties, and CAMS/KFintech for full KYC synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Why Choose Merrafilings for Legal Name Change?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Navigating notary drafting, formatting newspaper ad text, creating CD soft copies in exact government specifications, and coordinating with the Department of Publication in New Delhi can be overwhelming. Merrafilings handles the entire journey:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-light text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online Paperless Process – No Visits to Delhi Needed</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Direct Tie-Ups with National &amp; State Vernacular Newspapers</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Legally Vetted Gazette Dossier Prepared to Eliminate Rejections</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Step-by-Step Passport &amp; Aadhaar Post-Gazette Update Guide</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Legal Name Change in India")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for Legal Name Change &amp; Gazette Online</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function NameChangePage() {
  return (
    <ServicePageTemplate
      badgeText="Official Government Gazette Notification & Legal Documentation"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Legal Name Change in India
          </span>{" "}
          <span>Online</span>
        </>
      }
      heroSubtitle="Complete your 3-step legal name change procedure online. Get professionally drafted affidavit notarization, dual newspaper advertisements, and official Central Government Gazette publication with pan-India and international validity."
      formTitle="Start Your Legal Name Change"
      formSubtitle="Enter your details below to speak with our Gazette documentation and legal experts."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">Gazette publication pricing.</span>
        </>
      }
      pricingSubtitle="Select your package for notarized affidavit, newspaper publication, and Central Gazette notification."
      breadcrumbCurrent="Legal Name Change"
      guideTitle="Legal Name Change in India - Affidavit & Gazette Online"
      guideContent={<NameChangeGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about legal name change in India, Central Gazette publication, Passport updates, and newspaper ads."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
