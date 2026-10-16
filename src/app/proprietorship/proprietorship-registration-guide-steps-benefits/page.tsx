"use client";

import React, { useState } from "react";
import ProprietorshipGuideLayout from "@/components/ProprietorshipGuideLayout";
import {
  CreditCard,
  Search,
  MapPin,
  Landmark,
  Award,
  Receipt,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Zap,
  Building,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

const REGISTRATION_STEPS = [
  {
    step: "1",
    title: "1. Obtain or Verify the Proprietor's PAN Card",
    icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
    badge: "Identity Root",
    color: "emerald",
    desc: "A sole proprietorship operates on the proprietor's personal PAN. Ensure your PAN is linked to your active Aadhaar card with an up-to-date mobile number for biometric OTP authentication on government portals.",
  },
  {
    step: "2",
    title: "2. Choose a Compliant Business Name",
    icon: <Search className="w-5 h-5 text-blue-600" />,
    badge: "Brand Identity",
    color: "blue",
    desc: "Select a distinct commercial trade name. Conduct an exhaustive IP India public trademark search to ensure your trade name does not infringe upon registered marks under Nice Classification, avoiding future cease-and-desist notices.",
  },
  {
    step: "3",
    title: "3. Establish Business Location & Address Proof",
    icon: <MapPin className="w-5 h-5 text-purple-600" />,
    badge: "Premises KYC",
    color: "purple",
    desc: "Every proprietorship must verify an official place of business. Prepare an electricity bill, property tax receipt, or municipal water bill (under 2 months old), along with a registered rent agreement and No Objection Certificate (NOC) from the landlord.",
  },
  {
    step: "4",
    title: "4. Register on the Udyam MSME Portal",
    icon: <Award className="w-5 h-5 text-indigo-600" />,
    badge: "Statutory Proof",
    color: "indigo",
    desc: "File your self-declaration on the Ministry of MSME's Udyam portal using your Aadhaar. This generates an official Udyam Registration Certificate featuring a QR code, which serves as conclusive government proof of business existence.",
  },
  {
    step: "5",
    title: "5. GST Registration (Form GST REG-01)",
    icon: <Receipt className="w-5 h-5 text-emerald-600" />,
    badge: "Tax Clearance",
    color: "emerald",
    desc: "Mandatory if annual turnover exceeds ₹40 Lakhs (goods) or ₹20 Lakhs (services), or if engaging in inter-state trade or e-commerce selling. Merrafilings processes Form GST REG-01 online with Aadhaar authentication for fast 3-day approval.",
  },
  {
    step: "6",
    title: "6. Open a Dedicated Current Bank Account",
    icon: <Landmark className="w-5 h-5 text-blue-600" />,
    badge: "Banking KYC",
    color: "blue",
    desc: "Under the Reserve Bank of India (RBI) Master Directions on KYC, opening a proprietorship current account requires two government registrations in the firm's trade name (e.g., GST Certificate + Udyam Certificate or Shop Act License).",
  },
  {
    step: "7",
    title: "7. Secure Local Municipal & Sectoral Licenses",
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
    badge: "Operations",
    color: "amber",
    desc: "Apply for state Shop & Establishment registration within 30 days of commercial opening. If operating in food handling, secure FSSAI; for exports, obtain an Import Export Code (IEC) from the DGFT.",
  },
];

const FAQS = [
  {
    q: "What is the official cost of registering a proprietorship in India?",
    a: "The central government imposes zero official fees for Udyam MSME registration. GST registration is also free of government fees. Minor state-level fees apply for Shop & Establishment licenses (ranging from ₹200 to ₹1,500 depending on the state and headcount). Merrafilings provides end-to-end documentation and liaison for an all-inclusive low professional fee.",
  },
  {
    q: "Can a sole proprietorship be converted into a Private Limited Company or LLP?",
    a: "Yes. Once business revenue expands or equity investment is required, you can convert the proprietorship into an LLP or Private Limited Company through a slump sale or Business Transfer Agreement (BTA). All accumulated assets, contracts, and IP can be transferred tax-neutrally under Section 47(xiv) of the Income Tax Act.",
  },
  {
    q: "Is GST registration mandatory for every sole proprietorship?",
    a: "GST registration is mandatory only if your aggregate annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in Special Category States) or ₹20 Lakhs for services (₹10 Lakhs in Special Category States). However, registration is compulsory regardless of turnover if you sell via e-commerce (Amazon, Flipkart), supply inter-state, or export services.",
  },
  {
    q: "Do sole proprietors need a local trade or business license?",
    a: "Yes, depending on your business activity and location. Almost all retail stores and offices must register under the state's Shop and Establishment Act. Food and beverage operators require an FSSAI license, while specific trades require municipal health and trade permits.",
  },
  {
    q: "What are the most common mistakes entrepreneurs make during proprietorship registration?",
    a: "Common pitfalls include: (1) mixing personal and business funds in a savings account, (2) failing to check trademark conflicts on the trade name, (3) providing outdated utility bills resulting in GST officer rejections, and (4) omitting to obtain two government documents required by banks under RBI KYC rules.",
  },
];

export default function ProprietorshipRegistrationGuideStepsBenefitsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ProprietorshipGuideLayout
      currentSlug="proprietorship-registration-guide-steps-benefits"
      title="Comprehensive Guide to Proprietorship Registration"
      breadcrumbLabel="Registration Steps & Benefits"
      metaPublishedDate="Oct 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Legal Team"
    >
      {/* Intro */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
          The path of entrepreneurship in India begins with choosing the appropriate legal structure. For single founders seeking minimal statutory friction, a <strong className="font-semibold text-slate-950">Sole Proprietorship</strong> provides the fastest, most economical gateway to establishing an active commercial presence.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          While a sole proprietorship does not receive an incorporation certificate from the Ministry of Corporate Affairs (MCA), it achieves legal standing through state and central operational registrations. This comprehensive guide details the prerequisites, step-by-step registration workflow, financial advantages, and critical compliance protocols.
        </p>
      </section>

      {/* Section 1: Core Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Key Benefits of Sole Proprietorship Registration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm group-hover:text-emerald-800 transition-colors">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Rapid 48-Hour Establishment</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              No drafting of Memorandum of Association (MOA) or Articles of Association (AOA) is required. Registration is executed rapidly through Udyam MSME and GST portal clearance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:text-blue-800 transition-colors">
              <Building className="w-4 h-4 text-blue-600" />
              <span>Zero Mandatory Board Compliance</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Eliminates mandatory board meetings, AGM filings, Director Identification Number (DIN) maintenance, and statutory MCA annual forms like AOC-4 and MGT-7.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm group-hover:text-purple-800 transition-colors">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span>Pass-Through Individual Tax Slabs</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Net income is taxed under progressive individual income tax slabs rather than flat corporate tax. Eligible proprietors can also adopt the Section 44AD presumptive tax scheme.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm group-hover:text-amber-800 transition-colors">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Priority Sector Lending &amp; Subsidies</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Udyam-registered sole proprietors qualify for 50% discount on government trademark filing fees, government tender fee exemptions, and lower bank interest rates under CGTMSE.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Prerequisites */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Mandatory Prerequisites for Registration
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Before initiating your registration application, ensure you have gathered the following verified documentation:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-[13px] text-slate-900 font-normal">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="group-hover:text-emerald-950 transition-colors">Proprietor&apos;s PAN Card &amp; Aadhaar Card (linked to active mobile)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="group-hover:text-emerald-950 transition-colors">Recent passport-size photograph (white background)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="group-hover:text-emerald-950 transition-colors">Registered office utility bill (Electricity / Water / Municipal Tax &lt; 60 days)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="group-hover:text-emerald-950 transition-colors">Landlord Rent Agreement and signed No Objection Certificate (NOC)</span>
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Step-by-Step Proprietorship Registration Workflow
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
          Follow these seven sequential steps to formalize your business identity and activate commercial banking:
        </p>

        <div className="space-y-3 pt-2">
          {REGISTRATION_STEPS.map((item, idx) => {
            const hoverBorderMap: Record<string, string> = {
              emerald: "hover:border-emerald-500 hover:shadow-emerald-500/10 group-hover:text-emerald-800",
              blue: "hover:border-blue-500 hover:shadow-blue-500/10 group-hover:text-blue-800",
              purple: "hover:border-purple-500 hover:shadow-purple-500/10 group-hover:text-purple-800",
              indigo: "hover:border-indigo-500 hover:shadow-indigo-500/10 group-hover:text-indigo-800",
              amber: "hover:border-amber-500 hover:shadow-amber-500/10 group-hover:text-amber-800",
            };
            const hoverClasses = hoverBorderMap[item.color] || "hover:border-emerald-500 hover:shadow-emerald-500/10";

            return (
              <div
                key={idx}
                className={`p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-2 ${hoverClasses}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed pl-11">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Common Challenges */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Challenges in Proprietorship Registration &amp; Mitigation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <AlertCircle className="w-4.5 h-4.5 text-rose-600 mb-1" />
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm group-hover:text-rose-800 transition-colors">
              Unlimited Personal Liability
            </h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Personal assets remain vulnerable to business debts. Mitigation: Procure commercial general liability insurance and convert to an LLP once turnover scales.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <AlertCircle className="w-4.5 h-4.5 text-amber-600 mb-1" />
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm group-hover:text-amber-800 transition-colors">
              Bank Account Opening Delays
            </h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Banks strictly reject applications lacking two verified registrations under RBI KYC. Mitigation: Merrafilings secures both Udyam and GSTIN prior to banking submission.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group space-y-1.5">
            <AlertCircle className="w-4.5 h-4.5 text-purple-600 mb-1" />
            <h3 className="font-semibold text-slate-950 text-xs sm:text-sm group-hover:text-purple-800 transition-colors">
              Capital Ceiling Limitations
            </h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Venture capital and angel funds cannot invest in an unincorporated proprietorship. Mitigation: Bootstrap initially and convert smoothly to a Pvt Ltd when seeking institutional funding.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-3xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-medium text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal border-t border-slate-100/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </ProprietorshipGuideLayout>
  );
}
