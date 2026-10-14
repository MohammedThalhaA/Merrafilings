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
  Lightbulb,
  Cpu,
  Microscope,
  FileSpreadsheet,
  Check,
  Building,
  HelpCircle,
  Layers,
  Globe2,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "20 Years Exclusive Nationwide Statutory Patent Monopoly" },
  { icon: <Clock className="w-4 h-4" />, text: "Same-Day Provisional Filing to Secure 12-Month Priority Date" },
  { icon: <Search className="w-4 h-4" />, text: "Prior-Art Patentability Search Across Global IP Databases" },
  { icon: <FileText className="w-4 h-4" />, text: "Patent Claim Drafting by Registered Patent Agents & Advocates" },
  { icon: <Scale className="w-4 h-4" />, text: "80% Government Fee Rebate Assistance for Startups & Small Entities" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Patentability Search & Prior-Art Audit",
    shortDesc: "Exhaustive prior-art search across global databases to determine patent eligibility before drafting.",
    expandedDesc: "Comprehensive novelty, inventive step, and industrial applicability analysis across Indian Patent Advanced Search System (InPASS), USPTO, EPO (Espacenet), and WIPO Patentscope. Includes formal Patentability Opinion Report with claim guidance.",
    price: "₹3,999",
    priceSub: "Inclusive of Search Analytics",
    badge: "Pre-Filing Step",
    features: [
      "Global Novelty & Prior-Art Patent Search",
      "InPASS, USPTO & WIPO Patent Database Audit",
      "Analysis of Non-Patent Literature & Publications",
      "Detailed Patentability Opinion & Risk Report",
      "Claim Strategy & Classification Guidance",
      "Consultation with Registered Patent Attorney",
    ],
  },
  {
    name: "Provisional Patent Application Filing",
    popular: true,
    badge: "Most Popular for Inventors",
    shortDesc: "Fast-track provisional filing under Section 9 to lock in your official priority date immediately.",
    expandedDesc: "Drafting of Provisional Specification (Form 2), Application for Grant (Form 1), Statement and Undertaking (Form 3), and official Patent Office submission. Grants 'Patent Pending' status and locks priority for 12 months.",
    price: "₹7,999",
    priceSub: "+ Govt Fee (₹1,600 Individual / ₹4,000 Corporate)",
    features: [
      "Provisional Specification Drafting (Form 2)",
      "Form 1 Application for Grant of Patent",
      "Form 3 Statement & Undertaking Preparation",
      "Form 5 Declaration of Inventorship",
      "Instant Electronic Filing on IP India Portal",
      "Immediate Official Application Number & CBR Receipt",
      "12-Month Priority Clock Secured for Complete Filing",
      "Use of 'Patent Pending' Legal Status",
    ],
  },
  {
    name: "Complete Patent Specification & Grant Assistance",
    shortDesc: "Comprehensive non-provisional patent specification drafting with claims, drawings, and examination requests.",
    expandedDesc: "Full techno-legal drafting of Complete Specification, independent and dependent patent claims, technical drawings, abstract, Form 18 (Request for Examination), and proactive management of First Examination Report (FER) scrutiny.",
    price: "₹19,999",
    priceSub: "+ Govt Fees & Examination Charges",
    badge: "Full Grant Suite",
    features: [
      "Complete Specification Techno-Legal Drafting",
      "Independent & Dependent Claims Formulation",
      "Patent Technical Illustrations & Flowcharts",
      "Form 18 Request for Examination (RFE) Lodgment",
      "Form 9 Early Publication Request (Optional)",
      "Response to First Examination Report (FER)",
      "Patent Office Hearing Representation (if required)",
      "Full 20-Year Patent Grant Management",
    ],
  },
];

const RELATED_GUIDES = [
  "What Inventions Can Be Patented in India: Section 3 Exclusions",
  "Provisional vs Complete Patent Specification: Strategic Differences",
  "How to Conduct a Prior Art Patent Search on InPASS",
  "Patent Registration Process in India: Timelines from Filing to Grant",
  "Understanding Patent Claims: Independent vs Dependent Claims",
  "PCT International Patent Application: Extending Protection to 157 Countries",
];

const RELATED_SERVICES_TAGS = [
  "Patent Search",
  "Provisional Patent",
  "Design Registration",
  "Trademark Registration",
  "Copyright Registration",
  "Startup India DPIIT",
];

const POPULAR_SEARCHES_TAGS = [
  "patent registration online in india",
  "provisional patent filing fees in india",
  "how to patent an idea or software algorithm",
  "patent search inpass ip india",
  "cost of patent registration in india",
  "patent grant timeline form 18",
];

function PatentRegistrationGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          A <strong className="font-semibold text-slate-950">Patent</strong> is an exclusive legal monopoly granted by the Government of India through the <strong className="font-semibold text-slate-950">Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM)</strong> under the <strong className="font-semibold text-slate-950">Patents Act, 1970</strong>. A granted patent gives an inventor the statutory authority to exclude others from making, using, offering for sale, selling, or importing the patented invention for a period of <strong className="font-semibold text-slate-950">20 years</strong> across the entirety of India.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          Whether you are an individual inventor, an R&amp;D-driven startup, or an enterprise engineering novel hardware or formulations, patent protection transforms technological innovations into defensible balance-sheet assets, enabling licensing royalties, market dominance, and premium corporate valuation.
        </p>
      </div>

      {/* Section 1: Statutory Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. The 3 Core Statutory Criteria for Patentability in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 2(1)(j) of the Patents Act, 1970, an invention must satisfy three cumulative tests to qualify for patent grant:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <Lightbulb className="w-4.5 h-4.5" />
              <span>1. Novelty (Newness)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              The invention must not have been anticipated by prior art in any public domain, published document, or commercial usage globally before the filing date.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Cpu className="w-4.5 h-4.5" />
              <span>2. Inventive Step (Non-Obviousness)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              The invention must feature a technical advancement or economic significance that is not obvious to a person skilled in the relevant art (PSITA).
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Microscope className="w-4.5 h-4.5" />
              <span>3. Industrial Applicability</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              The invention must have practical utility and be capable of being made or used in an industry or manufacturing process.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Non-Patentable Inventions (Section 3 Exclusions) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. What Inventions Cannot Be Patented? (Section 3 Exclusions)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Indian Patents Act explicitly bars certain categories of discoveries and algorithms under Section 3:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Section</th>
                <th className="py-3 px-4">Excluded Category</th>
                <th className="py-3 px-4">Statutory Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Section 3(a)</td>
                <td className="py-3.5 px-4">Frivolous inventions or against natural laws</td>
                <td className="py-3.5 px-4">Perpetual motion machines without scientific basis</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Section 3(b)</td>
                <td className="py-3.5 px-4">Contrary to public order, morality, or health</td>
                <td className="py-3.5 px-4">Inventions causing serious prejudice to human, animal, or plant life</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Section 3(d)</td>
                <td className="py-3.5 px-4">Mere discovery of a new form of known substance</td>
                <td className="py-3.5 px-4">Anti-evergreening clause; requires proven enhancement of therapeutic efficacy</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Section 3(k)</td>
                <td className="py-3.5 px-4">Mathematical methods, business methods, or computer programs per se</td>
                <td className="py-3.5 px-4">Pure software/algorithms are protected by Copyright; requires technical effect/hardware integration</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Section 3(p)</td>
                <td className="py-3.5 px-4">Traditional knowledge or aggregation of known properties</td>
                <td className="py-3.5 px-4">Preserves indigenous Ayurvedic and herbal heritage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Statutory Fee Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Official Government Fee Schedule (First Schedule of Patent Rules)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Patent Rules provide an 80% statutory fee discount for natural persons (individuals), DPIIT-recognized startups, educational institutions, and MSMEs:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Stage / Form</th>
                <th className="py-3 px-4">Individual / Natural Person</th>
                <th className="py-3 px-4">Startup / MSME / University</th>
                <th className="py-3 px-4">Large Corporate / Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 1 (Application Filing)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,600</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,600</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹8,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 9 (Early Publication - Optional)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,500</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,500</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹12,500</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18 (Request for Examination - RFE)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹4,000</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹4,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹20,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18A (Expedited Examination - Startups/Women)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹8,000</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹8,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹60,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Patent vs Copyright vs Trademark */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Comparison: Patent vs Trademark vs Copyright
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Patent Registration</th>
                <th className="py-3 px-4">Trademark Registration</th>
                <th className="py-3 px-4">Copyright Registration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Subject Matter</td>
                <td className="py-3.5 px-4">Inventions, functional devices &amp; chemical processes</td>
                <td className="py-3.5 px-4">Brand names, logos, slogans &amp; trade dress</td>
                <td className="py-3.5 px-4">Original literary, artistic, musical &amp; source code works</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Duration</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">20 Years (Non-renewable)</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">10 Years (Renewable indefinitely)</td>
                <td className="py-3.5 px-4 font-semibold text-blue-700">Lifetime of author + 60 Years</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Registration Requirement</td>
                <td className="py-3.5 px-4">Mandatory (No common-law patent rights)</td>
                <td className="py-3.5 px-4">Recommended (Common law passing off exists)</td>
                <td className="py-3.5 px-4">Automatic upon creation; registration provides prima facie proof</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Step-by-Step Filing Roadmap */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. End-to-End Patent Filing Procedure in India
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 1: Prior-Art Novelty Search</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Conduct an exhaustive search to ensure your invention has not been previously published or disclosed anywhere in the world.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 2: Provisional Specification (Form 2)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              If the invention is in the prototype or development phase, file a provisional specification to secure an immediate priority date for 12 months.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 3: Complete Specification with Claims</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              File the complete specification within 12 months, detailing the full technical disclosure, best mode of operation, and legal patent claims.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 4: Publication &amp; Examination Request</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The application is published in the Patent Journal at 18 months (or 1 month via Form 9 Early Publication). File Form 18 to trigger substantive examination.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950">Step 5: Responding to First Examination Report (FER) &amp; Grant</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Our registered patent agent drafts legal and technical replies to examiner objections within 6 months. Upon satisfaction, the Patent Certificate is granted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const FAQ_COL_1 = [
  {
    q: "Can I patent an idea or concept without building a working prototype?",
    a: "You cannot patent a purely abstract idea, theory, or concept. However, you do not necessarily need a fully finished commercial product; you need a detailed technical specification showing how the invention works, its components, flowcharts, and how it can be reduced to practice.",
  },
  {
    q: "What is the difference between a provisional and a complete patent application?",
    a: "A provisional application is a preliminary document filed to secure an early priority filing date before commercialization or public disclosure. It provides a 12-month grace window during which the inventor must submit a Complete Specification containing finalized technical claims.",
  },
  {
    q: "Can computer software and mobile applications be patented in India?",
    a: "Under Section 3(k) of the Patents Act, computer programs per se are excluded. However, software innovations that demonstrate a technical effect, solve a specific hardware problem, or are integrated with a novel physical device or system are regularly granted patents by the Indian Patent Office.",
  },
  {
    q: "How long does it take to get a patent granted in India?",
    a: "Under normal examination timelines, patent grant takes 2.5 to 4 years. However, eligible applicants (startups, small entities, female inventors, government departments) can file Form 18A for Expedited Examination, reducing grant timelines to 12 to 18 months.",
  },
  {
    q: "Does an Indian patent protect my invention internationally?",
    a: "No. Patent rights are territorial. A patent granted by the Indian Patent Office protects your invention only within India. To protect your invention abroad, you can file a Patent Cooperation Treaty (PCT) application or international convention applications within 12 months of your Indian priority date.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can I publish a research paper or exhibit my invention before filing a patent?",
    a: "No. Publicly publishing, exhibiting, selling, or discussing your invention without a non-disclosure agreement (NDA) before filing destroys its 'Novelty' requirement under Section 2(1)(j), making it permanently ineligible for patent protection globally. Always file at least a provisional application before public exposure.",
  },
  {
    q: "What is the validity period of a granted patent in India?",
    a: "Every granted patent is valid for 20 years computed from the original application filing date (or international PCT filing date), subject to the payment of statutory annual renewal maintenance fees starting from the 3rd year.",
  },
  {
    q: "What are the government fee rebates for DPIIT-recognized Startups?",
    a: "DPIIT-recognized startups and MSMEs receive an 80% statutory fee rebate on patent filing, examination, and expedited examination fees, significantly reducing total government outlay to just ₹1,600 for Form 1 and ₹4,000 for Form 18.",
  },
  {
    q: "What is a First Examination Report (FER)?",
    a: "A First Examination Report (FER) is the official communication from the Patent Examiner evaluating the novelty, inventive step, and clarity of your claims. The applicant has a strict 6-month window (extendable by 3 months via Form 4) to submit a formal written reply overcoming all objections.",
  },
  {
    q: "Can a patent be renewed after 20 years?",
    a: "No. Under Indian law and TRIPS agreements, a patent cannot be renewed beyond 20 years. Once 20 years expire, the technology enters the public domain, enabling any business or manufacturer to freely produce and commercialize it.",
  },
];

export default function PatentRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="The Patents Act, 1970 & Patent Rules 2003 Statutory Protection"
      heroTitle={
        <>
          <span>Patent </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Registration Online
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Protect your technical inventions, software innovations, industrial apparatus, and chemical formulations. Secure 20-year legal monopoly under the Patents Act, 1970 with registered Patent Agents."
      formTitle="Patent Filing Advisory"
      formSubtitle="Have a novel invention? Consult our registered Patent Agents for prior-art search, provisional filing, and claim drafting."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">patent drafting &amp; filing fees.</span>
        </>
      }
      pricingSubtitle="Select your requirement for prior-art novelty search, provisional specification, or full non-provisional grant."
      breadcrumbCurrent="Patent Registration"
      guideTitle="Patent Registration in India - Complete Statutory & Filing Guide"
      guideContent={<PatentRegistrationGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about patent eligibility, provisional filing, Section 3 exclusions, and grant timelines."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
