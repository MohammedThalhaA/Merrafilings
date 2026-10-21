"use client";

import React, { useState } from "react";
import IncomeTaxGuideLayout from "@/components/IncomeTaxGuideLayout";
import {
  MapPin,
  Building,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Receipt,
  FileCheck,
  Sparkles,
  ArrowRight,
  Landmark,
  Layers,
  AlertTriangle,
  Coins,
  Globe2,
  CreditCard,
  Percent,
} from "lucide-react";

const ADVANTAGES = [
  {
    title: "24/7 Digital Convenience",
    badge: "No Physical Queues",
    desc: "Eliminates tedious visits to municipal corporation offices or sub-registrar treasuries. Access tax records, view demand notices, and pay anytime from any device.",
    icon: <Globe2 className="w-5 h-5 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Early Bird Rebates & Cost Savings",
    badge: "Up to 5% - 10% Discount",
    desc: "Most state municipal corporations offer a statutory 5% to 10% rebate on property taxes if paid within the first 30 to 60 days of the fiscal year.",
    icon: <Percent className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
  },
  {
    title: "Instant Digitally Signed Receipts",
    badge: "Legal Ownership Proof",
    desc: "Download official e-receipts and updated tax clearance certificates (Khata extract / Mutation log) instantly, vital for home loans and clear property title deeds.",
    icon: <FileCheck className="w-5 h-5 text-purple-600" />,
    color: "purple",
  },
  {
    title: "Automated Penalty Prevention",
    badge: "Zero Penal Interest",
    desc: "Avoid compounding penal interest (typically 1% to 2% per month) on overdue land taxes with automated SMS and email renewal alerts.",
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
    color: "amber",
  },
];

const ONBOARDING_STEPS = [
  {
    step: "Step 1",
    title: "Access Official State or Municipal Revenue Portal",
    desc: "Navigate to your local municipal or revenue portal (e.g., BBMP/Kaveri in Karnataka, BMC/Mahabhumi in Maharashtra, MCG in Haryana, MeeSeva/Dharani in Telangana/AP).",
  },
  {
    step: "Step 2",
    title: "Register Profile & Link Property Identifiers",
    desc: "Create an authenticated account and link your parcel using the Unique Property Identification Number (PID), Assessment Number, Survey Number, or Khata Details.",
  },
  {
    step: "Step 3",
    title: "Inspect Valuation & Applicable Surcharges",
    desc: "Verify that the unit area classification, zone tier, land extent (sq. ft. or gunthas), and local cess charges (infrastructure, health, library cess) are calculated accurately.",
  },
  {
    step: "Step 4",
    title: "Execute Online Payment & Store E-Receipt",
    desc: "Pay securely via UPI, Net Banking, or Credit Card. Immediately download and archive the cryptographically verifiable tax receipt and updated Khata extract.",
  },
];

const INCOME_TAX_INTERSECTION = [
  {
    section: "Section 50C",
    title: "Circle Rate Benchmark",
    desc: "If land is sold below the state guidance value / circle rate, the stamp duty valuation is deemed the actual sale consideration for capital gains computation.",
  },
  {
    section: "Section 54F",
    title: "Capital Gains Tax Exemption",
    desc: "Long-term capital gains from the sale of vacant land can be 100% tax-exempt if net proceeds are reinvested in a residential house within the prescribed statutory period.",
  },
  {
    section: "CGAS Scheme",
    title: "Capital Gains Account Scheme",
    desc: "If unutilized capital gains cannot be invested before the ITR due date, depositing them into a designated CGAS bank account legally shelters you from immediate tax.",
  },
  {
    section: "Municipal Tax Deduction",
    title: "House Property Computation",
    desc: "Under Section 23(1), municipal and land taxes paid directly by the owner during the financial year are fully deductible from Gross Annual Value (GAV).",
  },
];

const FAQS = [
  {
    q: "What is land tax and how is it different from building property tax?",
    a: "Land tax (often assessed as Vacant Land Tax or VLT) is levied specifically on the capital or circle value of the underlying plot or parcel, irrespective of whether any superstructure exists. In contrast, property tax assesses both the land and the constructed built-up area based on unit area rate methods.",
  },
  {
    q: "Who is legally responsible for paying land tax in India?",
    a: "The legal titleholder whose name is registered in the municipal records, revenue Patta/Khata, or sale deed is responsible for paying land tax. In cases of joint ownership, all co-owners are jointly and severally liable.",
  },
  {
    q: "Can I pay land tax online for agricultural land?",
    a: "Yes. Many state revenue departments (such as Dharani in Telangana, AnyRoR in Gujarat, or Mahabhulekh in Maharashtra) provide specialized portals for remitting rural land revenue and agricultural cesses online.",
  },
  {
    q: "What is the penalty for late payment of land tax?",
    a: "Most municipal corporations levy simple interest ranging between 1% and 2% per month on unpaid land tax amounts. Persistent non-payment can lead to attachment of property, sealing of premises, or denial of mutation certificates during subsequent sales.",
  },
  {
    q: "What identifiers do I need to look up my land tax demand online?",
    a: "You typically need your 10-to-15 digit Property Identification Number (PID), Khata Number, Assessment Number, or Survey Number along with the registered mobile number associated with the parcel.",
  },
  {
    q: "Can I claim land and municipal tax payments as a deduction in my Income Tax Return?",
    a: "Yes! If the land or property yields rental income, municipal taxes actually paid during the financial year by the owner can be deducted from Gross Annual Value under Section 23(1) of the Income Tax Act when computing 'Income from House Property'.",
  },
  {
    q: "What should I do if my land tax payment was debited from my bank but no receipt was generated?",
    a: "Do not pay twice immediately. Portal payment gateways typically reconcile within 24 to 48 hours. Visit the portal's 'Track Payment Status' or 'Payment Reconciliation' tab, enter your transaction reference number, and regenerate the official receipt.",
  },
  {
    q: "How are land tax rates calculated across different cities?",
    a: "Municipalities use either the Unit Area Method (classifying properties into zones A through F based on guidance value) or the Capital Value System (multiplying circle rate by plot dimensions and usage coefficients).",
  },
  {
    q: "What happens if the property dimensions or zone on the online portal are incorrect?",
    a: "You must lodge an online grievance or submit a rectification petition with supporting documents (Sale Deed, Approved Layout Plan, and Survey Sketch) to the municipal revenue officer to re-assess the annual demand.",
  },
  {
    q: "How does Merrafilings assist property owners with land tax and capital gains?",
    a: "Merrafilings helps individuals and companies calculate vacant land tax, resolve title and Khata discrepancies, compute capital gains on land sales, optimize Section 54F exemptions, and execute seamless annual ITR filings.",
  },
];

export default function LandTaxOnlineEffortlessTaxManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <IncomeTaxGuideLayout
      currentSlug="land-tax-online-effortless-tax-management"
      title="Land Tax Online: Simplify and Save on Your Property Taxes"
      breadcrumbLabel="Land Tax Online Management"
      metaPublishedDate="AY 2026-27 Compliant"
      readingTime="8 min read"
      authorName="Merrafilings Property & Direct Tax Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          In an era of digitized governance, managing real estate assets has transitioned from bureaucratic municipal offices
          to seamless web portals. <strong className="font-semibold text-slate-950">Land Tax Online</strong> enables
          property owners, real estate developers, and individual investors to evaluate annual tax assessments, settle dues,
          and secure verified property tax receipts in minutes.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Whether you own vacant residential plots, commercial development land, or ancestral parcels, this comprehensive
          handbook explains how land tax is assessed, outlines the direct advantages of digital remittance, and highlights
          critical income tax implications under Sections 50C and 54F of the Income Tax Act.
        </p>
      </section>

      {/* Section 1: Fundamentals of Land Tax */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          1. Understanding Land Tax: The Legal &amp; Revenue Basics
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Land tax is an ad-valorem or unit-area levy imposed by state municipal corporations and urban local bodies (ULBs):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Who Must Pay?</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Every individual, corporate entity, or HUF holding registered ownership title, Patta, or mutation rights to taxable land parcels within municipal limits.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">What is Taxed?</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              The underlying land area, assessed either on its capital circle rate value or unit area rate (UAR), independent of building constructions.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">How are Rates Determined?</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Based on geographic zone classifications (Tier 1/2/3), street width frontage, developmental infrastructure, and commercial vs. residential zoning.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Statutory Exemptions</h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Land parcels exclusively dedicated to public places of worship, registered charitable trust activities, public burial grounds, or active rural cultivation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Advantages of Managing Land Tax Online */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          2. Four Core Advantages of Paying Land Tax Online
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Switching to digital municipal channels delivers significant time and financial dividends:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {ADVANTAGES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Step-by-Step Online Payment Workflow */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          3. How to Pay Land Tax Online: A 4-Step Walkthrough
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Follow this standardized procedure across municipal revenue portals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {ONBOARDING_STEPS.map((step, idx) => (
            <div key={idx} className="p-4.5 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 inline-block mb-2">
                {step.step}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Income Tax Intersection */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          4. Income Tax Implications on Land Ownership &amp; Disposal
        </h2>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-800 font-normal">
          Land ownership directly impacts your direct tax returns under the Income Tax Act, 1961:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
          {INCOME_TAX_INTERSECTION.map((item, idx) => (
            <div key={idx} className="p-4.5 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60 inline-block mb-2">
                {item.section}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Troubleshooting Challenges */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
          5. Common Online Land Tax Challenges &amp; Solutions
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900">Payment Gateway Drops &amp; Delayed Receipts</h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mt-0.5 leading-relaxed">
                If money is deducted without generating a receipt, check your bank statement for a transaction reference number (UTR). Allow 24 hours for automatic reconciliation before initiating a fresh payment.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900">Incorrect Property Zone or Extent</h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mt-0.5 leading-relaxed">
                If the municipal system misclassifies your plot into an expensive commercial zone, submit an online grievance accompanied by your approved layout sanction to recalibrate the demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs Accordion */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Practical queries regarding online land tax payment, municipal rebates, and property tax compliance answered.
        </p>

        <div className="space-y-2.5 mt-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </IncomeTaxGuideLayout>
  );
}
