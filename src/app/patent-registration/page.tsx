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
  CheckSquare2,
  AlertTriangle,
  Coins,
  History,
  FileCheck,
  TrendingUp,
  XCircle,
  BookOpen,
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
          A <strong className="font-semibold text-slate-950">Patent</strong> is an exclusive legal monopoly granted by the Government of India through the <strong className="font-semibold text-slate-950">Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM)</strong> under the <strong className="font-semibold text-slate-950">Patents Act, 1970</strong>. A granted patent gives an inventor the statutory authority to exclude competitors, counterfeiters, and third parties from making, using, offering for sale, selling, or importing the patented invention for a term of <strong className="font-semibold text-slate-950">20 years</strong> across the entirety of India.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          Patent registration documents your technical invention and establishes you as the legal owner with public priority. Whether you are an independent inventor, a high-tech startup, or an enterprise engineering novel hardware, formulations, or industrial systems, patent protection secures your market moat, enables licensing royalties, deters copycats, and drastically elevates company valuation during venture funding or acquisitions.
        </p>
      </div>

      {/* Pre-Filing Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Comprehensive Pre-Filing Checklist for Patent Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Before lodging an application with the Indian Patent Office, thorough pre-filing preparation ensures your application is robust and minimizes procedural delays or office objections:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">1. Conduct Prior-Art Search</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Audit Indian and international patent databases (InPASS, USPTO, Espacenet, WIPO) and scientific literature to confirm global novelty.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">2. Document Technical Description</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Prepare comprehensive technical write-ups detailing the problem solved, structural parts, materials, and method of working.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">3. Compile Proof of Inventorship</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Maintain lab notebooks, engineering logs, prototype photos, test results, and dated records establishing the true inventors.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">4. Formulate Strategic Patent Claims</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Define the legal perimeter of protection by articulating independent claims (broad scope) and dependent claims (specific embodiments).
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">5. Prepare High-Resolution Drawings</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Create clear black-and-white technical schematics, flowcharts, or chemical formulas with numbered reference indicators.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">6. Determine Application Type</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Choose between a fast Provisional Application (locks 12-month priority for prototypes) or a Complete Specification filing.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">7. Verify Section 3 Exclusions</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Ensure the subject matter is not barred under Section 3 (e.g. computer programs per se, mathematical algorithms, or frivolous ideas).
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200">
              <CheckSquare2 className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">8. Plan Official Statutory Budget</h3>
              <p className="text-xs text-slate-800 font-normal mt-0.5 leading-relaxed">
                Claim MSME / DPIIT Startup subsidies (80% fee discount) to drastically reduce filing, examination, and maintenance expenditures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Eligibility Criteria Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Statutory Eligibility Criteria for Patent Registration in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          To qualify for patent grant under Section 2(1)(j) of the Patents Act, 1970, your invention must meet the following mandatory benchmarks:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Eligibility Criteria</th>
                <th className="py-3 px-4">Statutory Requirements</th>
                <th className="py-3 px-4">Detailed Legal Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Novelty (Newness)</td>
                <td className="py-3.5 px-4">Must not be anticipated by prior art anywhere in the world</td>
                <td className="py-3.5 px-4">The invention must not exist in public domain, published technical papers, commercial use, or patent filings globally before the priority date.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Inventive Step (Non-Obviousness)</td>
                <td className="py-3.5 px-4">Technical advancement or economic significance not obvious to an expert</td>
                <td className="py-3.5 px-4">A person skilled in the relevant art (PSITA) would not be able to easily combine existing technologies to arrive at your invention without creative effort.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Industrial Applicability</td>
                <td className="py-3.5 px-4">Capable of practical utility and repeatable industrial manufacturing</td>
                <td className="py-3.5 px-4">The invention must have concrete practical utility and be capable of being made, produced, or used in an industry or manufacturing trade.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Enablement &amp; Disclosure</td>
                <td className="py-3.5 px-4">Complete technical disclosure enabling replication</td>
                <td className="py-3.5 px-4">The patent specification must clearly disclose the best mode of performing the invention so that another engineer can recreate it without undue experimentation.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Patentable Subject Matter</td>
                <td className="py-3.5 px-4">Must fall outside the statutory negative list of Section 3 &amp; 4</td>
                <td className="py-3.5 px-4">The invention cannot be a mere scientific principle, mathematical method, abstract software per se, frivolous gadget, or contrary to natural physical laws.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What Can Be Patented */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What Inventions Can Be Patented in India?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Inventions qualifying for patent protection span diverse sectors of science and engineering, provided they deliver tangible technical outcomes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-2xs">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              Mechanical &amp; Hardware
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              Innovative machines, robotic arms, consumer devices, tools, mechanical linkages, and automated apparatus.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-2xs">
              <Microscope className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Chemical &amp; Materials
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              Novel chemical compounds, polymers, composites, coatings, industrial purification processes, and synthetic methods.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1.5 hover:bg-[#FFFDF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-200 shadow-2xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-amber-950 transition-colors">
              Software with Technical Effect
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              Computer-implemented inventions (CII), IoT sensor firmware, encryption engines, and AI algorithms tied to hardware.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-2xs">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Pharmaceuticals &amp; Biotech
            </h3>
            <p className="text-[12px] text-slate-800 leading-relaxed font-normal">
              New drug formulations demonstrating enhanced therapeutic efficacy (Section 3(d)), diagnostic kits, and bioreactors.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Patents */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Categories and Types of Patent Filings in India
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Patent Category</th>
                <th className="py-3 px-4">Scope &amp; Description</th>
                <th className="py-3 px-4">Typical Product Examples</th>
                <th className="py-3 px-4">Protection Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Utility Patents (Standard)</td>
                <td className="py-3.5 px-4">Protects the structural, mechanical, or functional working of an invention</td>
                <td className="py-3.5 px-4">Automotive engines, EV battery packs, manufacturing machines</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">20 Years from Filing Date</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Industrial Design Patents</td>
                <td className="py-3.5 px-4">Protects ornamental or aesthetic visual shape under Designs Act 2000</td>
                <td className="py-3.5 px-4">Smartphone contour, furniture profile, bottle shapes</td>
                <td className="py-3.5 px-4 font-semibold text-blue-700">15 Years (10 + 5 renewal)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Software &amp; Computer Inventions</td>
                <td className="py-3.5 px-4">Protects software demonstrating a measurable technical effect</td>
                <td className="py-3.5 px-4">AI computer vision pipelines, cryptographic network protocols</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">20 Years from Filing Date</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Chemical &amp; Pharma Patents</td>
                <td className="py-3.5 px-4">Protects novel synthesized compounds, therapeutic molecules, and alloys</td>
                <td className="py-3.5 px-4">Active pharmaceutical ingredients (APIs), nano-coatings</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">20 Years from Filing Date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Mandatory Documents and Statutory Forms for Patent Filing
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Preparing the correct techno-legal documents and filing the requisite forms under the Patent Rules, 2003 is crucial to pass formality examination:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Statutory Form / Doc</th>
                <th className="py-3 px-4">Document Category</th>
                <th className="py-3 px-4">Statutory Purpose &amp; Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 1</td>
                <td className="py-3.5 px-4">Application for Grant</td>
                <td className="py-3.5 px-4">Official petition establishing applicant details, inventor names, priority claims, and declarations.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 2</td>
                <td className="py-3.5 px-4">Patent Specification</td>
                <td className="py-3.5 px-4">Provisional or Complete specification describing background, summary, detailed drawings, and claims.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 3</td>
                <td className="py-3.5 px-4">Statement &amp; Undertaking</td>
                <td className="py-3.5 px-4">Statutory disclosure under Section 8 regarding corresponding foreign patent applications filed.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 5</td>
                <td className="py-3.5 px-4">Declaration of Inventorship</td>
                <td className="py-3.5 px-4">Declaration signed by true and first inventors assigning rights to the applicant company or institution.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18 / 18A</td>
                <td className="py-3.5 px-4">Request for Examination</td>
                <td className="py-3.5 px-4">Mandatory request filed within 48 months (Form 18) or expedited request for Startups/women (Form 18A).</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 26</td>
                <td className="py-3.5 px-4">Power of Attorney</td>
                <td className="py-3.5 px-4">Legal authorization authorizing registered Patent Agents / Advocates to represent the applicant.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Drawings &amp; Abstract</td>
                <td className="py-3.5 px-4">Technical Representation</td>
                <td className="py-3.5 px-4">A4 black-and-white CAD drawings with numbered callouts and a concise 150-word technical abstract.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Official Fee Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Official Government Fee Schedule (First Schedule of Patent Rules)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Patent Rules provide an 80% statutory fee subsidy for natural persons (individuals), DPIIT-recognized startups, educational institutions, and MSMEs:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Service / Form Number</th>
                <th className="py-3 px-4">Individual Applicant</th>
                <th className="py-3 px-4">Startup / MSME / University</th>
                <th className="py-3 px-4">Large Corporation / Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 1: Application Filing (Up to 30 pages &amp; 10 claims)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,600</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,600</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹8,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 9: Early Publication Request (Optional, within 1 mo.)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,500</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,500</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹12,500</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18: Request for Examination (RFE)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹4,000</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹4,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹20,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 18A: Expedited Examination (Startups/Female Inventors)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹8,000</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹8,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹60,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Total Baseline Govt Filing + Standard Examination</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">₹5,600</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">₹5,600</td>
                <td className="py-3.5 px-4 font-bold text-slate-950">₹28,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Patent Validity & Annual Renewal Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Patent Validity &amp; Annual Maintenance Renewal Fee Schedule
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 53 of the Patents Act, 1970, patent protection lasts for a term of <strong className="font-semibold text-slate-950">20 years</strong> from the application filing date. To keep the patent in force, statutory renewal maintenance fees must be paid annually starting from the 3rd year onwards:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Patent Lifetime Period</th>
                <th className="py-3 px-4">Annual Fee (Natural Person / Startup)</th>
                <th className="py-3 px-4">Annual Fee (Large Entity / Corporate)</th>
                <th className="py-3 px-4">Statutory Action Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Years 1 &amp; 2</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">No Renewal Fee Payable</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">No Renewal Fee Payable</td>
                <td className="py-3.5 px-4">Covered by initial filing and grant processing</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Years 3 to 6</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹800 / year</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹4,000 / year</td>
                <td className="py-3.5 px-4">Pay before expiry of preceding year (or pay accumulated at grant)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Years 7 to 10</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,400 / year</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹12,000 / year</td>
                <td className="py-3.5 px-4">Maintain continuous commercial monopoly in India</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Years 11 to 15</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹4,800 / year</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹24,000 / year</td>
                <td className="py-3.5 px-4">Mid-lifecycle patent maintenance</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Years 16 to 20</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹8,000 / year</td>
                <td className="py-3.5 px-4 font-semibold text-slate-950">₹40,000 / year</td>
                <td className="py-3.5 px-4">Final 5-year commercial monopoly term</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-rose-700">Post-20 Years</td>
                <td className="py-3.5 px-4" colSpan={2}>
                  <strong className="text-rose-700 font-semibold">Public Domain:</strong> Non-renewable under statutory law. Freely usable by all.
                </td>
                <td className="py-3.5 px-4">Patent permanently expires</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-800 leading-relaxed font-normal pt-1">
          * <strong className="font-semibold text-slate-950">Lapse &amp; Restoration:</strong> If renewal fees are unpaid, the patent lapses. It can be restored under Section 60 within 18 months from the date of lapse upon filing Form 15 and paying overdue fees with restoration penalties.
        </p>
      </section>

      {/* End-to-End Filing Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. End-to-End Patent Filing Procedure &amp; Examination Timeline
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-950">Stage 1: Novelty Search &amp; Pre-Filing Audit (Days 1–7)</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">Phase 1</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Exhaustive search on InPASS, WIPO Patentscope, Espacenet, and Google Patents to ensure zero prior disclosures exist.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-950">Stage 2: Provisional Specification (Form 2) Filing (Day 8)</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60">Phase 2</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Filing Form 1, Form 2, and Form 3 on the IP India portal. Grants immediate official application number, CBR receipt, and locks priority for 12 months.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-950">Stage 3: Complete Specification with Claims (Within 12 Months)</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">Phase 3</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Techno-legal drafting of Complete Specification, independent/dependent claims, formal drawings, and Form 5 Declaration of Inventorship.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-950">Stage 4: Journal Publication &amp; Form 18 Examination (18 Months)</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">Phase 4</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Automatic publication in the Patent Office Journal at 18 months (or 1 month via Form 9 early publication). Substantive examination initiated via Form 18.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-950">Stage 5: First Examination Report (FER) &amp; Grant (24–36 Months)</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">Phase 5</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Examiner issues FER citing novelty or Section 3 objections. Our patent agents submit formal written rebuttals and attend hearings to secure final Patent Grant Certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Patent Opposition & Objections */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Handling Patent Objections &amp; Opposition Proceedings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-200 shadow-2xs">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-amber-950 transition-colors">
              Pre-Grant Opposition (Section 25(1))
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Any person can file a Pre-Grant Opposition in writing with the Controller at any time after publication in the Patent Journal but before the patent is granted. Grounds include lack of novelty, prior publication, insufficient disclosure, or non-patentability under Section 3.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-2xs">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Post-Grant Opposition (Section 25(2))
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Any &apos;person interested&apos; (competitor, commercial operator) can file a Post-Grant Opposition on Form 7 within 12 months from the date of publication of the grant. The Controller constitutes an Opposition Board to examine evidence and hold oral hearings.
            </p>
          </div>
        </div>
      </section>

      {/* Common Reasons Patents Get Rejected */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Top Reasons Patent Applications Get Rejected in India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">1. Anticipation by Prior Art:</strong>
            Examiners discover identical or closely analogous scientific publications or global patents published prior to your filing date.
          </div>
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">2. Barred by Section 3 Statutory Exclusions:</strong>
            Claiming computer programs per se (Section 3(k)), mere discovery of living substances (Section 3(j)), or non-efficacious pharma tweaks (Section 3(d)).
          </div>
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">3. Insufficient Enablement / Vague Claims:</strong>
            Failing to describe the best working mode or drafting overly broad claims that fail to clearly specify what the inventor actually constructed.
          </div>
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">4. Non-Unity of Invention:</strong>
            Attempting to bundle multiple distinct, unrelated inventions under a single application without a single overarching inventive concept.
          </div>
        </div>
      </section>

      {/* Patent vs Copyright vs Trademark */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Comparison: Patent vs Trademark vs Copyright in India
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
                <td className="py-3.5 px-4">Technical inventions, machines, processes &amp; formulations</td>
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
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Enforcement Action</td>
                <td className="py-3.5 px-4">District / High Court patent infringement suit</td>
                <td className="py-3.5 px-4">Civil infringement suit &amp; criminal seizure</td>
                <td className="py-3.5 px-4">Civil copyright suit &amp; police seizure of copies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. Why Choose Merrafilings for Patent Filing &amp; Prosecution?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Registered Patent Attorneys</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Every techno-legal specification and claim set is personally drafted by certified patent agents registered with the CGPDTM.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-2xs">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">Global Prior-Art Intelligence</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Comprehensive searches across Indian InPASS, USPTO, WIPO, and Espacenet ensure zero surprises during substantive examination.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-2xs">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">80% Government Rebate Guarantee</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              We seamlessly link your DPIIT startup registration or MSME Udyam to secure the maximum 80% statutory fee discount on filing and FERs.
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
