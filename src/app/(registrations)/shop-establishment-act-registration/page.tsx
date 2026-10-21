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
  Calendar,
  DollarSign,
  UserCheck,
  UtensilsCrossed,
  HeartPulse,
  Flame,
  ArrowRight,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "What is Shop and Establishment Act registration?",
    a: "The Shop and Establishment Act registration is a mandatory statutory state license issued by the respective state labour department. It legally authorizes a commercial establishment, office, or retail shop to conduct business within the state while regulating employment conditions, employee working hours, wages, and workplace health and safety standards."
  },
  {
    q: "Who is required to obtain a Shop and Establishment license?",
    a: "Every commercial entity operating from a physical business premises—including retail shops, commercial offices, software and IT companies, consulting firms, hotels, restaurants, healthcare clinics, educational institutes, entertainment venues, and godowns/warehouses—must obtain this registration within 30 days of commencement."
  },
  {
    q: "Why is Shop and Establishment registration crucial for businesses?",
    a: "Beyond being a statutory mandate, this registration serves as official government proof of legal existence and commercial address. Leading banks mandate this certificate to open commercial current accounts. It also shields business owners from municipal inspection fines, notices, and operational shutdowns."
  },
  {
    q: "Does the registration process vary across different Indian states?",
    a: "Yes. While the overarching regulatory framework is governed by model statutory principles, each state has enacted its own specific Act (such as the Maharashtra Shops & Establishments Act / Gumasta, Delhi Shops Act, Karnataka Shops & Commercial Establishments Act / e-Karmika, Tamil Nadu Shops Act, etc.) with state-specific forms, fee schedules, and validity terms."
  },
  {
    q: "How does Merrafilings assist in the Shop and Establishment registration process?",
    a: "Merrafilings manages the entire registration process online: auditing commercial premises documents, preparing state-specific applications on designated labour department portals, coordinating municipal statutory fees, resolving department queries, and delivering your official digital certificate within 2 to 5 business days."
  },
  {
    q: "What key workplace aspects does the Shop and Establishment Act cover?",
    a: "The Act comprehensively regulates daily and weekly working hours, interval rest breaks, overtime wage rates, paid leave policies (earned, casual, and sick leave), statutory public holidays, terms of service and termination, and employee health, sanitation, and fire safety provisions."
  }
];

const FAQ_COL_2 = [
  {
    q: "What businesses fall under the definition of a 'Shop' under the Act?",
    a: "A 'shop' is legally defined as any physical premises where goods are sold either by retail or wholesale, or where services are rendered to customers. This includes showrooms, grocery stores, retail outlets, hair salons, and consumer service centers."
  },
  {
    q: "What constitutes a 'Commercial Establishment' under the Act?",
    a: "A 'commercial establishment' includes commercial, banking, trading, or insurance establishments; an establishment or administrative service where persons are employed in office work; freelance agencies; consulting firms; software companies; and entertainment venues like cinemas, restaurants, and cafes."
  },
  {
    q: "Are online businesses and work-from-home entities required to register?",
    a: "Yes. Even if your business operates primarily online, e-commerce, or through remote work, having a registered physical office address in India necessitates obtaining a Shop and Establishment registration to legalize business operations and establish corporate banking."
  },
  {
    q: "What is the statutory deadline for completing this registration?",
    a: "Under most state legislations, every employer must submit an application for registration to the local labour inspector within 30 days from the date of commencing business operations from the commercial premises."
  },
  {
    q: "What are the essential documents required for Shop Act registration?",
    a: "Key documents include identity and address proof of the proprietor/directors (PAN and Aadhaar), commercial premises proof (registered rental agreement, electricity bill, or property tax receipt with NOC from owner), photograph of the shop entrance displaying the name board, and business constitution certificate (GST, Incorporation, or Partnership Deed)."
  },
  {
    q: "What is the validity period of a Shop and Establishment certificate?",
    a: "Validity varies by state. In states like Maharashtra and Delhi, small establishments receive lifetime validity with auto-renewal notifications. In other states like Karnataka, Tamil Nadu, and Telangana, licenses are issued for 1 to 5 years, after which a simple online renewal is required."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What are the exemptions from Shop and Establishment registration?",
    a: "Central and state government offices, statutory public authorities, reserve bank establishments, railway and postal operations, and institutions providing emergency health and medical services are generally exempt from standard municipal shop registration."
  },
  {
    q: "What statutory registers must employers maintain under the Act?",
    a: "Employers must maintain a Register of Wages and Fines, Register of Employment and Attendance, Register of Leave with Pay, and an Inspection Book for authorized labour inspectors during periodic visits."
  },
  {
    q: "What are the penalties for operating without a Shop Act license?",
    a: "Operating without registration can attract compounding financial penalties ranging from ₹2,500 to ₹10,000 for initial offenses, repeated daily fines for continuing defaults, and potential municipal notices leading to temporary commercial sealing of the premises."
  },
  {
    q: "Can I make amendments to my Shop and Establishment certificate later?",
    a: "Yes. Any changes in business name, commercial address, number of employees, or addition/removal of partners or directors can be updated on the state labour portal through a formal amendment filing within 30 days of the change."
  },
  {
    q: "Is a physical inspection of the premises conducted before issuing the license?",
    a: "In most progressive states with online single-window clearances, certificates are issued automatically or post-document scrutiny without pre-inspection. However, labour inspectors may conduct random post-issuance visits to verify employee welfare and register maintenance."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How does Merrafilings ensure compliance with state-specific regulations?",
    a: "Our dedicated labour law legal team maintains up-to-date expertise across the specific legislative nuances, portal procedures, and municipal bylaws of all 28 states and union territories, ensuring 100% compliant and error-free submissions."
  },
  {
    q: "Does Merrafilings assist with statutory register templates and compliance kits?",
    a: "Yes. Along with your official registration certificate, Merrafilings provides complimentary, legally drafted digital templates for muster rolls, wage registers, leave books, and mandatory statutory display notices."
  },
  {
    q: "Can a residential address be registered under the Shop and Establishment Act?",
    a: "Most states allow professional consultancies, IT startups, and freelance service providers to register from a residential premises provided they have a valid utility bill and a No Objection Certificate (NOC) from the property owner."
  },
  {
    q: "What is the difference between Trade License and Shop Act License?",
    a: "A Shop & Establishment license is issued by the State Labour Department to govern employment terms, employee welfare, and working hours. A Trade License is issued by the local Municipal Corporation (health & sanitization wing) to ensure the trade activity does not cause public health hazards or nuisance."
  },
  {
    q: "How can I download my Shop and Establishment license certificate online?",
    a: "Once approved by the labour commissioner, your digitally signed, QR-coded certificate is available for direct PDF download on your state portal dashboard, and a verified copy is sent immediately to your email by Merrafilings."
  }
];

const FORM_FEATURES = [
  { icon: <Store className="w-4 h-4" />, text: "Mandatory Municipal License for All Commercial Premises" },
  { icon: <Building className="w-4 h-4" />, text: "Essential Legal Document for Opening Current Bank Accounts" },
  { icon: <FileCheck className="w-4 h-4" />, text: "100% Online Paperless State Labour Portal Application" },
  { icon: <Globe2 className="w-4 h-4" />, text: "Pan-India Coverage Across All 28 States & Union Territories" },
  { icon: <Clock className="w-4 h-4" />, text: "Fast-Track 2 to 5 Day Processing with Labour Law Experts" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Small Establishment Basic",
    shortDesc: "Designed for retail shops, single-person consultancies, and micro enterprises with 0 to 9 employees.",
    expandedDesc: "Complete state labor department portal registration, commercial lease/address verification, municipal fee payment coordination, and official digital registration certificate download.",
    price: "₹2,499",
    priceSub: "All Inclusive | 0-9 Employees",
    badge: "Basic",
    features: [
      "State Shop & Establishment Certificate",
      "Online Labour Portal Profile Creation",
      "Premises Address & KYC Documentation Audit",
      "Municipal Government Fee Lodgement",
      "Digital Certificate Download & Storage",
      "Dedicated State Labour Law Specialist",
    ],
  },
  {
    name: "Commercial Establishment Standard",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Ideal for growing offices, IT/software firms, restaurants, and retail chains with 10 or more employees.",
    expandedDesc: "Includes multi-employee statutory registration, working hours and overtime declaration, employee holiday master, state labor compliance kit, and formal certificate issuance with 1-year advisory.",
    price: "₹4,499",
    priceSub: "All Inclusive | 10+ Employees",
    features: [
      "Full Shop & Establishment License (10+ Staff)",
      "Statutory Working Hours & Shift Approvals",
      "Labour Department Scrutiny & Query Resolution",
      "Compliant Wage, Leave & Attendance Registers",
      "Current Bank Account Verification Support",
      "Priority Fast-Track Turnaround (2-3 Days)",
      "1-Year Labour Law Compliance Advisory",
    ],
  },
  {
    name: "Comprehensive Multi-Branch / Annual Compliance Suite",
    shortDesc: "End-to-end multi-city branch registration and statutory annual labor maintenance for enterprises and retail chains.",
    expandedDesc: "Covers dual/multi-location registrations, annual return filings, employee addition/deletion filings, display board statutory compliance, and dedicated senior labor counsel retainer.",
    price: "₹7,999",
    priceSub: "All Inclusive | Enterprise Retainer",
    badge: "Enterprise Suite",
    features: [
      "Multi-State / Branch Shop Act Registrations",
      "Annual Labour Return Filings & Submissions",
      "Statutory Notice Board & Display Compliance Kit",
      "Labour Inspector Inspection Readiness Audit",
      "Employee Exit / Addition Intimation Filings",
      "Dedicated Senior Labour Law Retainer Specialist",
      "Multi-Year License Renewal Management",
    ],
  },
];

const RELATED_GUIDES = [
  "Maharashtra Gumasta License vs Delhi Shop Act: Key Differences",
  "How to Open a Current Bank Account with Shop & Establishment Certificate",
  "Statutory Registers Required Under State Shops & Establishments Acts",
  "Difference Between Trade License and Shop & Establishment License",
  "Working Hours, Overtime, and Leave Rules for Commercial Establishments",
  "Step-by-Step Online Renewal Process for Shop Act Licenses"
];

const RELATED_SERVICES_TAGS = [
  "Trade License",
  "ESI Registration",
  "Professional Tax Registration",
  "FSSAI License",
  "GST Registration",
  "Udyam Registration"
];

const POPULAR_SEARCHES_TAGS = [
  "shop and establishment act registration online",
  "gumasta license apply online",
  "shop act license fees Delhi Mumbai Bangalore",
  "shop act certificate download",
  "commercial establishment license requirements"
];

function ShopActGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
          The <strong className="font-medium text-slate-800">Shop and Establishment Act License</strong> is a mandatory state-level statutory authorization issued by the Department of Labour in every Indian state and union territory. Enacted to regulate terms of employment, working conditions, employee wages, and commercial operations across the unorganized and organized private sectors, this license applies universally to retail shops, commercial offices, software corporations, consulting agencies, restaurants, and service providers. Possessing an active Shop &amp; Establishment certificate is not only legally compulsory within 30 days of opening a physical commercial premises, but is also the foremost commercial document required by leading banks to <strong className="font-medium text-slate-800">open a commercial business current bank account</strong>.
        </p>
      </div>

      {/* Section 1: What is a Shop and Establishment Act License */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Shop and Establishment Act License in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The Shop and Establishment Act is state-specific legislation enacted by respective state governments to govern the operational conduct of commercial establishments and protect employee rights. While the Factories Act, 1948 oversees industrial manufacturing units, the <strong>Shop and Establishment Act regulates all non-factory commercial entities</strong>—including retail shops, administrative corporate offices, financial firms, educational centers, hotels, and entertainment facilities.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Commonly known as the <strong>Gumasta License</strong> in Maharashtra, <strong>e-Karmika</strong> in Karnataka, or <strong>Labour Department Registration</strong> in Delhi and other states, this certificate proves that your business enterprise is officially registered on municipal records and complies with state employment standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Store className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Commercial Legitimacy</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Primary state proof of legal commercial establishment and trade address.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Building className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Current Bank Account</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Recognized by all major scheduled banks as mandatory KYC to open business accounts.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Scale className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Employee Rights Framework</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Governs working hours, overtime wages, maternity benefits, and statutory leaves.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Who Can Apply for Shop Act */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who Can Apply for Shop and Establishment Act Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Any individual or business operating from a designated premises must obtain this registration. The Act categorizes establishments into two primary classifications:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Store className="w-4 h-4 text-emerald-600" />
              Shops &amp; Retail Outlets
            </h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed mb-2.5">
              Any premises where goods are sold at retail or wholesale prices, or where personal services are rendered to customers:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Supermarkets, grocery stores, pharmacies &amp; apparel stores</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Salons, wellness spas, beauty clinics &amp; dry cleaners</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Retail showrooms, auto dealerships &amp; repair workshops</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              Commercial Establishments &amp; Offices
            </h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed mb-2.5">
              Any premises carrying on trading, banking, consulting, software, or professional administrative operations:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                <span>IT, ITES, software development &amp; tech startup offices</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                <span>Legal firms, CA practices, marketing &amp; consultancy agencies</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                <span>Restaurants, cafes, food courts, hotels &amp; commercial kitchens</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                <span>Warehouses, godowns, fulfillment hubs &amp; logistics offices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Exemptions */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Entities Exempt from Mandatory Shop Act Registration
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          While the Act applies widely, certain entities are granted statutory exemption from obtaining a municipal Shop Act registration:
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Government &amp; Public Sector Offices:</strong> Central government, state government, and local municipal administrative departments.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Offices of Reserve Bank of India (RBI):</strong> Regulated apex central banking establishments.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Railways &amp; National Transport:</strong> Railway operational offices, post and telegraph installations, and defence installations.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Agricultural Establishments:</strong> Farming, harvesting, and primary agrarian operations not conducted as commercial trade shops.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Benefits of Shop and Establishment Act Registration in India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Landmark className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Commercial Current Account Opening</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Mandatory KYC document demanded by banks (HDFC, ICICI, SBI, Axis) to verify commercial establishment proof.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <ShieldCheck className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Immunity from Municipal Inspection Fines</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Prevents harassment, spot fines, and closure notices from local municipal corporation labour inspectors.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Award className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Government Tenders &amp; Subsidy Eligibility</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Required to participate in local municipal supply contracts, state tenders, and MSME industrial subsidy schemes.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Users className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Smooth Employee Dispute Resolution</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Standardizes employment terms, shielding management against frivolous wage and overtime disputes in labour courts.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Key Regulatory Features */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Key Regulatory Features of the Shop and Establishment Act
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Every employer registered under the Act must operate within these prescribed employment boundaries:
        </p>

        <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Daily &amp; Weekly Working Hours:</strong> Daily working hours are typically capped at 8 to 9 hours per day (max 48 hours weekly), with a mandatory rest interval of 30–60 minutes after every 4–5 continuous hours.
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <DollarSign className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Overtime Wages:</strong> Any work performed beyond statutory daily limits must be remunerated at double the standard wage rate (2x overtime pay).
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Calendar className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Mandatory Weekly Off:</strong> Every establishment must remain closed on at least one designated day per week, or provide rolling compensatory weekly offs for 24/7 operating businesses.
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <HeartPulse className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong>Employee Health &amp; Workplace Safety:</strong> Premises must maintain adequate ventilation, natural/artificial lighting, clean drinking water, fire safety equipment, and first-aid kits.
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Documents Required */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Documents Required for Shop and Establishment Registration
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Submit clear scanned copies of the following documents for fast verification:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-2.5 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              For Proprietorship &amp; Individual Traders
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-normal">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>PAN Card &amp; Aadhaar Card:</strong> Self-attested identity proof of the business proprietor.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Commercial Premises Proof:</strong> Registered Rent Agreement / Lease Deed with landlord NOC, or Property Tax Receipt.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Utility Bill:</strong> Recent electricity bill or water bill for the commercial address (not older than 2 months).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Signboard Photograph:</strong> Front-facing photograph of the establishment clearly displaying the trade name board in local language/English.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-2.5 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              For Companies, LLPs &amp; Partnership Firms
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-normal">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Entity PAN &amp; Certificate:</strong> Certificate of Incorporation + MOA/AOA, or registered Partnership Deed.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Directors / Partners KYC:</strong> PAN and Aadhaar copies of all active directors or designated partners.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Board Resolution / Authorization Letter:</strong> Resolution nominating an authorized signatory to represent the enterprise.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Employee Details Master:</strong> Total count of employees categorized by male, female, managerial, and clerical staff.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: State-Wise Overview (Table) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. State-Wise Overview, Acts &amp; Validity Breakdown
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Each state enforces its distinct statutory title and fee structure. Below is a comparative snapshot across premier commercial hubs:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">State</th>
                <th className="p-3 sm:p-3.5">Applicable State Legislation</th>
                <th className="p-3 sm:p-3.5">Common Local Name</th>
                <th className="p-3 sm:p-3.5">Standard Validity Term</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Maharashtra</td>
                <td className="p-3 sm:p-3.5">Maharashtra Shops &amp; Establishments Act, 2017</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">Gumasta License / Form A/F</td>
                <td className="p-3 sm:p-3.5">Lifetime (0–9 staff) / 3 Years (10+ staff)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Delhi</td>
                <td className="p-3 sm:p-3.5">Delhi Shops &amp; Establishments Act, 1954</td>
                <td className="p-3 sm:p-3.5 font-semibold text-blue-700">Delhi Labour Certificate</td>
                <td className="p-3 sm:p-3.5">Continuous with annual compliance intimation</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Karnataka</td>
                <td className="p-3 sm:p-3.5">Karnataka Shops &amp; Commercial Establishments Act, 1961</td>
                <td className="p-3 sm:p-3.5 font-semibold text-purple-700">e-Karmika Registration</td>
                <td className="p-3 sm:p-3.5">5 Years with renewal</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Tamil Nadu</td>
                <td className="p-3 sm:p-3.5">Tamil Nadu Shops &amp; Establishments Act, 1947</td>
                <td className="p-3 sm:p-3.5 font-semibold text-amber-700">TN Labour License</td>
                <td className="p-3 sm:p-3.5">1 to 5 Years</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Telangana</td>
                <td className="p-3 sm:p-3.5">Telangana Shops &amp; Establishments Act, 1988</td>
                <td className="p-3 sm:p-3.5 font-semibold text-teal-700">TS Labour Registration</td>
                <td className="p-3 sm:p-3.5">1 to 5 Years</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Uttar Pradesh</td>
                <td className="p-3 sm:p-3.5">UP Dookan Aur Vanijya Adhishthan Adhiniyam, 1962</td>
                <td className="p-3 sm:p-3.5 font-semibold text-rose-700">Nivesh Mitra Shop License</td>
                <td className="p-3 sm:p-3.5">1 to 5 Years</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Gujarat</td>
                <td className="p-3 sm:p-3.5">Gujarat Shops &amp; Establishments Act, 2019</td>
                <td className="p-3 sm:p-3.5 font-semibold text-indigo-700">Gujarat Gumasta Dhara</td>
                <td className="p-3 sm:p-3.5">Lifetime (small) / Annual Renewal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Step-by-Step Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Step-by-Step Online Shop Act Registration with Merrafilings
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">1</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">State Jurisdiction &amp; Employee Slab Determination</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Determine the precise state labour department portal and fee slab based on employee headcount (0-9 vs 10+ employees).</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">2</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Premises KYC &amp; Documentation Audit</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Our legal team audits lease deeds, utility bills, entity registration proofs, and signboard photographs to ensure zero department rejection.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">3</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Online State Labour Portal Filing &amp; Fee Lodgement</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">The formal application is drafted, uploaded, and submitted with exact municipal treasury fees on the state labour department portal.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">4</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Labour Inspector Clearance &amp; Certificate Delivery</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Upon approval by the area labour commissioner, your digitally signed, QR-coded Shop &amp; Establishment certificate is downloaded and delivered with free statutory register kits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Why Choose Merrafilings for Shop Act Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings manages municipal registrations for over 30,000+ businesses across India with dedicated legal care:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online Paperless Filing – Zero visits to local municipal offices</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Multi-State Single Window – Seamless branch expansion across 28 states</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Free Statutory Register Templates (Attendance, Wages, Inspection)</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Proactive Renewal Alerts &amp; Labour Law Compliance Advisory</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Shop & Establishment Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for Shop &amp; Establishment License Online</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function ShopEstablishmentPage() {
  return (
    <ServicePageTemplate
      badgeText="State Labour Department Statutory Municipal License"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Shop &amp; Establishment Act Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Obtain your official state Shop &amp; Establishment license (Gumasta / Trade Premises Registration) 100% online. Mandatory for opening commercial bank accounts, hiring employees, and operating retail, IT, and commercial offices without municipal penalties."
      formTitle="Get Your Shop Act License"
      formSubtitle="Enter your commercial establishment details below to speak with our state labour law specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">municipal registration pricing.</span>
        </>
      }
      pricingSubtitle="Select your employee headcount tier for swift state labour department certificate issuance."
      breadcrumbCurrent="Shop Act Registration"
      guideTitle="Shop and Establishment Act Registration Online in India"
      guideContent={<ShopActGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about Shop &amp; Establishment Act registration, Gumasta license, state rules, and bank accounts in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
