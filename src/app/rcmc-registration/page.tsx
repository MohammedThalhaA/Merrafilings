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
  AlertTriangle,
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
  Ship,
  Plane,
  ArrowRight,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "What is an RCMC certificate?",
    a: "An RCMC (Registration Cum Membership Certificate) is an official authorization document issued by Export Promotion Councils (EPCs), Commodity Boards, or Export Development Authorities in India under the Foreign Trade Policy (FTP). It validates an exporter's registration with the authorized statutory council for their specific product or service line."
  },
  {
    q: "Why is RCMC registration mandatory for exporters?",
    a: "RCMC registration is mandatory under the Foreign Trade Policy of India for any exporter seeking to claim duty drawback, RoDTEP remissions, Advance Authorization, or export-import concessions. It is also required to export goods classified as restricted or regulated under the Indian Trade Classification (ITC-HS)."
  },
  {
    q: "Who is eligible to apply for RCMC registration in India?",
    a: "Any business entity—proprietorship, partnership, LLP, private limited, or public company—that holds a valid Import Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) can apply. Exporters can register as merchant exporters, manufacturer-exporters, or service providers."
  },
  {
    q: "What are the major benefits of holding an RCMC certificate?",
    a: "Key benefits include claiming duty drawback, RoDTEP, and RoSCTL export concessions; duty-free import of raw materials under Advance Authorization; participating in overseas trade delegations and buyer-seller meets; easier customs clearance; and enhanced credibility with international buyers."
  },
  {
    q: "Which authorities issue RCMC certificates in India?",
    a: "RCMC certificates are issued by 35 statutory bodies recognized by DGFT and the Ministry of Commerce & Industry. These include 27 Export Promotion Councils (EEPC, APEDA, GJEPC, AEPC, etc.), 6 Commodity Boards (Tea, Coffee, Spices, Rubber, Coir, Tobacco), and 2 Development Authorities (MPEDA, etc.). If your product is not covered by a specific council, FIEO (Federation of Indian Export Organisations) issues the RCMC."
  }
];

const FAQ_COL_2 = [
  {
    q: "How long is an RCMC certificate valid in India?",
    a: "An RCMC certificate is issued with a standard validity of 5 years, starting on 1st April of the licensing year of issue and expiring on 31st March of the fifth licensing year, subject to timely payment of annual council membership fees."
  },
  {
    q: "What key documents are required for RCMC registration?",
    a: "Primary documents include the DGFT Import Export Code (IEC), PAN Card of the entity, Certificate of Incorporation / Partnership Deed / GST Registration, CA-certified statement of past three years' export turnover and foreign exchange earnings, Board Resolution or Power of Attorney, and factory license (for manufacturer-exporters)."
  },
  {
    q: "What is the difference between Ordinary and Associate Membership?",
    a: "New exporters or businesses with lower export turnover generally enter as Associate Members. As export performance and turnover grow past council benchmarks, the entity can upgrade to Ordinary Membership, unlocking voting rights in council governance."
  },
  {
    q: "What statutory compliances must RCMC holders fulfill?",
    a: "RCMC holders must submit regular export performance returns (quarterly or annual) on the DGFT portal or council dashboard, notify the council of any amendments (change of address, directors, or factory address) within one month, and renew the certificate every 5 years."
  },
  {
    q: "How does Merrafilings assist with DGFT e-RCMC registration?",
    a: "Merrafilings manages the complete 100% online registration process: selecting the correct EPC for your product's HS code, preparing CA-certified turnover statements, filing through the DGFT e-RCMC digital module, liaising with council officers, and delivering your 5-year certificate with zero compliance hassle."
  }
];

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Mandatory for All Indian Exporters & Merchant Traders" },
  { icon: <Receipt className="w-4 h-4" />, text: "Unlocks RoDTEP, Duty Drawback & FTP Concessions" },
  { icon: <FileCheck className="w-4 h-4" />, text: "100% Online Filing via DGFT e-RCMC Digital Portal" },
  { icon: <Globe2 className="w-4 h-4" />, text: "Accurate EPC / Commodity Board / FIEO Mapping" },
  { icon: <Clock className="w-4 h-4" />, text: "Fast 3 to 5 Day Processing with Dedicated Trade Specialists" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "RCMC Renewal",
    shortDesc: "5-year renewal filing for existing exporters to maintain uninterrupted access to FTP benefits and incentives.",
    expandedDesc: "Complete DGFT e-RCMC renewal application filing, past FX earnings declaration upload, council fee coordination, address or director modifications, and renewed 5-year digital certificate issuance.",
    price: "₹2,899",
    priceSub: "All Inclusive | 5-Year Extension",
    badge: "Renewal",
    features: [
      "DGFT e-RCMC Renewal Application Filing",
      "Past FX Earnings & Turnover Declaration Upload",
      "Council Fee Coordination & Documentation Scrutiny",
      "Entity Address or Director Modification (if needed)",
      "Renewed 5-Year Digital Certificate Issuance",
      "Dedicated Foreign Trade Account Manager",
    ],
  },
  {
    name: "RCMC Registration - Basic",
    popular: true,
    badge: "Most Popular",
    shortDesc: "End-to-end RCMC registration with authorized Export Promotion Council or Commodity Board for new exporters.",
    expandedDesc: "Comprehensive ITC-HS code analysis, precise council jurisdiction mapping (APEDA, EEPC, FIEO, etc.), DGFT profile synchronization, CA-certified FX earnings validation, and 5-year certificate issuance.",
    price: "₹3,899",
    priceSub: "All Inclusive | Guaranteed Council Issuance",
    features: [
      "ITC-HS Code Analysis & Exact EPC Jurisdiction Mapping",
      "DGFT Portal Profile Sync & Digital Signature Setup",
      "Preparation of Council Membership Application Forms",
      "CA-Certified Foreign Exchange Earnings Validation",
      "Complete Filing on DGFT e-RCMC System",
      "Issuance of Official 5-Year Valid RCMC Certificate",
      "Guidance on Availing RoDTEP & Duty Drawback Schemes",
    ],
  },
  {
    name: "RCMC + IEC Export Comprehensive Suite",
    shortDesc: "Complete statutory onboarding package for new export businesses: Import Export Code (IEC) + RCMC + DGFT profile integration.",
    expandedDesc: "Includes brand new 10-digit DGFT IEC code registration, Class 3 DSC setup, council membership filing, bank AD code registration assistance, and 1 year of statutory export compliance support.",
    price: "₹6,899",
    priceSub: "All Inclusive | Complete Exporter Onboarding",
    badge: "Complete Suite",
    features: [
      "New 10-Digit DGFT Import Export Code (IEC) Registration",
      "DGFT Portal User Profile Creation & Class 3 DSC Linkage",
      "RCMC Registration with Authorized Export Promotion Council",
      "Liaison with Issuing EPC / Commodity Board Officers",
      "Bank AD Code Registration Guidance for Customs Clearance",
      "1-Year Export Statutory Compliance Advisory Support",
      "Priority Fast-Track Turnaround (3-4 Business Days)",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Apply for Import Export Code (IEC) Online",
  "RoDTEP Scheme: Eligibility, Rates & Claim Procedure",
  "Advance Authorization Scheme under Foreign Trade Policy",
  "Difference Between Merchant Exporter and Manufacturer Exporter",
  "List of 35 Export Promotion Councils Recognized by DGFT",
  "How to Register with FIEO for Multi-Product Exports"
];

const RELATED_SERVICES_TAGS = [
  "Import Export Code (IEC)",
  "GST LUT Filing for Exports",
  "APEDA Registration",
  "FIEO Membership",
  "FSSAI Food Export License",
  "LEI Code Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "RCMC registration online India",
  "RCMC certificate fees DGFT",
  "Export promotion council membership",
  "e-RCMC application procedure",
  "RCMC renewal documents required"
];

function RCMCGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[13.5px] font-light text-slate-600 leading-relaxed">
          The <strong className="font-medium text-slate-800">Registration-Cum-Membership Certificate (RCMC)</strong> is an indispensable statutory credential for any business enterprise aiming to export goods or services from India. Mandated under the <strong className="font-medium text-slate-800">Foreign Trade Policy (FTP)</strong> by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, the RCMC validates an exporter as an authorized member of a recognized <strong className="font-medium text-slate-800">Export Promotion Council (EPC)</strong>, Commodity Board, or Export Development Authority. Holding an RCMC is the primary gateway to claiming vital government incentives, including duty drawback, RoDTEP remissions, concessional import tariffs, and global market development assistance.
        </p>
      </div>

      {/* Section 1: What is RCMC */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is RCMC Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          RCMC stands for <strong>Registration-Cum-Membership Certificate</strong>. It is granted by designated Export Promotion Councils or commodity boards recognized by the Directorate General of Foreign Trade (DGFT). An RCMC functions as official documentary proof that an exporter is registered with an authorized apex body overseeing their particular trade domain.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Whether you are an established manufacturer exporting engineering goods or a fledgling merchant shipping agricultural produce, possessing an RCMC is legally mandatory if you plan to avail any concession, subsidy, or incentive introduced in the Foreign Trade Policy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">5-Year Legal Validity</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Valid across five full financial licensing years with seamless digital renewal.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Globe2 className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">35 Recognized Councils</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Specific statutory councils covering textiles, pharmaceuticals, agriculture, gems, and IT.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <BadgePercent className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Duty & Tax Incentives</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Compulsory for RoDTEP, RoSCTL, Duty Drawback, and Advance Authorizations.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Why RCMC is Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Why is RCMC Required for Exporters in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Under Chapter 2 of the Foreign Trade Policy, any exporter applying for an authorization to import or export restricted goods, or seeking duty remissions and benefits under schemes such as EPCG (Export Promotion Capital Goods) and Advance Authorization, must furnish an RCMC granted by the concerned council.
        </p>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-light">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Customs Duty Concessions:</strong> Exporters cannot claim tariff remissions or zero-duty import of raw materials without submitting their RCMC number.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Restricted Goods Clearance:</strong> Necessary for obtaining specialized export authorizations for dual-use technologies, defense goods, or restricted agricultural items.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>State & Central Export Subsidies:</strong> Central ministries disburse freight subsidies, technological upgradation grants, and exhibition subsidies strictly to RCMC holders.</span>
          </li>
        </ul>
      </section>

      {/* Section 3: Benefits of RCMC */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What are the Benefits of RCMC for Indian Exporters?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Holding an active RCMC certificate transforms your business into a verified, globally recognized export entity. The core commercial advantages include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Receipt className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">RoDTEP &amp; RoSCTL Claims</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Rebate of Duties and Taxes on Exported Products allows exporters to recover embedded central and state taxes.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Ship className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Advance Authorization Scheme</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Import raw materials and packaging supplies completely free of customs duty to manufacture export shipments.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Globe2 className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Global Trade Delegations</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Exclusive participation in government-sponsored international trade delegations, exhibitions, and buyer-seller meets.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-semibold text-slate-900">Enhanced International Credibility</h4>
            <p className="text-xs text-slate-600 font-light mt-1">Foreign buyers and overseas banking networks verify RCMC status on DGFT before executing high-value Letters of Credit (LC).</p>
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Eligibility Criteria for RCMC Registration in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Any commercial entity incorporated in India can apply for RCMC provided they satisfy basic foreign trade prerequisites:
        </p>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Valid Import Export Code (IEC):</strong> Must possess an active 10-digit IEC issued by DGFT with linked digital profile and PAN.
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Designated Line of Business:</strong> The applicant must declare their primary line of export products or services according to ITC-HS classification.
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Consent from Issuing Council:</strong> Obtain membership confirmation from the respective EPC or Commodity Board having jurisdiction over your goods.
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>FIEO Fallback:</strong> If your export product category is not covered by any designated council, you are eligible to register directly with the Federation of Indian Export Organisations (FIEO).
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: List of EPCs & Issuing Authorities (Table) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. List of Export Promotion Councils &amp; Issuing Authorities
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          India has over 35 recognized councils, boards, and development authorities authorized to issue RCMC certificates. Below is a reference of major categories and their corresponding issuing authorities:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Export Industry / Category</th>
                <th className="p-3 sm:p-3.5">Trade Type</th>
                <th className="p-3 sm:p-3.5">Authorized Issuing Body</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Agricultural &amp; Processed Food</td>
                <td className="p-3 sm:p-3.5">Merchant / Manufacturer</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">APEDA</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Engineering Goods &amp; Heavy Machinery</td>
                <td className="p-3 sm:p-3.5">Export / Import</td>
                <td className="p-3 sm:p-3.5 font-semibold text-blue-700">EEPC India</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Gems, Jewellery &amp; Diamonds</td>
                <td className="p-3 sm:p-3.5">Export Only</td>
                <td className="p-3 sm:p-3.5 font-semibold text-amber-700">GJEPC</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Apparel &amp; Cotton Textiles</td>
                <td className="p-3 sm:p-3.5">Manufacturer / Merchant</td>
                <td className="p-3 sm:p-3.5 font-semibold text-purple-700">AEPC / TEXPROCIL</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Chemicals, Dyes &amp; Pharmaceuticals</td>
                <td className="p-3 sm:p-3.5">Export</td>
                <td className="p-3 sm:p-3.5 font-semibold text-teal-700">CHEMEXCIL / PHARMEXCIL</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Marine &amp; Seafood Products</td>
                <td className="p-3 sm:p-3.5">Export</td>
                <td className="p-3 sm:p-3.5 font-semibold text-sky-700">MPEDA</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Software &amp; IT-Enabled Services</td>
                <td className="p-3 sm:p-3.5">Services Export</td>
                <td className="p-3 sm:p-3.5 font-semibold text-indigo-700">ESC / NASSCOM / STPI</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Handicrafts &amp; Cottage Industry</td>
                <td className="p-3 sm:p-3.5">Export</td>
                <td className="p-3 sm:p-3.5 font-semibold text-rose-700">EPCH</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Multi-Product / Unclassified Goods</td>
                <td className="p-3 sm:p-3.5">General Trading</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-800">FIEO (Federation of Indian Export Organisations)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Documents Required for RCMC Registration Online
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Keep digital copies of the following documents ready before initiating your application on the DGFT e-RCMC portal:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Import Export Code (IEC):</strong> Copy of the active 10-digit DGFT IEC certificate.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Entity Identification Proof:</strong> PAN Card of the company, LLP, firm, or individual proprietor.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Constitution Document:</strong> Certificate of Incorporation + MOA/AOA, or registered Partnership Deed / Trust Deed.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>CA Foreign Exchange Certificate:</strong> Statement of export turnover and FX earnings over past 3 financial years signed by a Chartered Accountant.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>GST Registration Certificate:</strong> Active GSTIN certificate verifying the registered premises.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Board Resolution / Authorization:</strong> Power of attorney authorizing the designated signatory to represent the enterprise.
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Step-by-Step Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Step-by-Step Online RCMC Registration Procedure on DGFT Portal
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Since December 2021, DGFT has integrated the common digital <strong>e-RCMC module</strong> across all 35 Export Promotion Councils. The workflow includes:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">1</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">DGFT Portal Login &amp; Profile Linkage</h4>
              <p className="text-xs text-slate-600 font-light mt-0.5">Log in to the official DGFT portal using IEC credentials. Navigate to Services &gt; e-RCMC &gt; Apply for e-RCMC.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">2</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Council &amp; Fee Slab Selection</h4>
              <p className="text-xs text-slate-600 font-light mt-0.5">Select the relevant Export Promotion Council based on your primary HS code. Choose membership category (Associate or Ordinary) based on your past turnover.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">3</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Document Upload &amp; CA Declaration</h4>
              <p className="text-xs text-slate-600 font-light mt-0.5">Upload scanned PDFs of the PAN card, Incorporation Deed, and CA certificate of foreign exchange earnings. Digitally sign using Class 3 DSC or Aadhaar e-Sign.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">4</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Council Verification &amp; Digital Certificate Issuance</h4>
              <p className="text-xs text-slate-600 font-light mt-0.5">The issuing council scrutinizes the file. Upon approval, the digitally signed RCMC certificate is issued directly to your DGFT portal account with a unique registration number.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Post-Registration Compliance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Mandatory Compliance for RCMC Holders
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Obtaining an RCMC certificate entails statutory obligations under the Foreign Trade Policy:
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-light">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Periodic Export Returns:</strong> Furnish quarterly or annual export shipment statements to your council detailing invoice values, country of destination, and foreign currency received.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Timely Membership Renewal:</strong> Pay annual council membership renewal fees every April to maintain active status across the 5-year validity period.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Intimation of Business Amendments:</strong> Any change in constitution, factory address, registered head office, or board members must be updated on the DGFT e-RCMC portal within 30 days.</span>
          </li>
        </ul>
      </section>

      {/* Section 9: Consequences of Operating Without RCMC */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Consequences of Operating Without a Valid RCMC
        </h2>
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 space-y-2">
          <p className="font-semibold flex items-center gap-2 text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            Operational &amp; Financial Disadvantages of Non-Registration
          </p>
          <p className="font-light leading-relaxed">
            While basic exports can technically occur under an IEC, <strong>unregistered exporters lose up to 3%–7% of their FOB invoice value</strong> in uncollected RoDTEP remissions, customs duty drawbacks, and port tariff refunds. Additionally, customs authorities may reject shipping bills for restricted commodity categories, leading to stranded consignments, severe detention charges, and forfeiture of government export benefits.
          </p>
        </div>
      </section>

      {/* Section 10: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Why Choose Merrafilings for RCMC Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings is India&apos;s trusted foreign trade legal partner, having onboarded over 15,000+ exporters onto the DGFT e-RCMC network:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online DGFT e-RCMC Process – Zero council visits needed</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Precise EPC Matching – Eliminates jurisdiction mismatch rejections</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">In-House CA Network – Fast certification of past FX earnings</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Post-Issuance RoDTEP &amp; Drawback Consultation Included</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("RCMC Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for RCMC Registration Online</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function RCMCRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="DGFT &amp; Export Promotion Council (EPC) Certificate"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            RCMC Registration
          </span>{" "}
          <span>– Export Business Certification</span>
        </>
      }
      heroSubtitle="Obtain your official Registration-Cum-Membership Certificate (RCMC) under the Foreign Trade Policy. Avail RoDTEP export incentives, customs duty drawbacks, and seamless council registration with expert guidance."
      formTitle="Apply for RCMC Registration Online"
      formSubtitle="Enter your business details below to consult with our foreign trade &amp; DGFT specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">export certification pricing.</span>
        </>
      }
      pricingSubtitle="Select the right RCMC registration or renewal package for your international trade business."
      breadcrumbCurrent="RCMC Registration"
      guideTitle="RCMC Registration Online in India - Get Export Certificate"
      guideContent={<RCMCGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about RCMC registration, DGFT e-RCMC, and Export Promotion Councils in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
