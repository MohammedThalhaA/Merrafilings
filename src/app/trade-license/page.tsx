"use client";

import React from "react";
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
  UtensilsCrossed,
  Flame,
  Download,
  Search,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "What is Trade License?",
    "a": "A Trade License meaning is defined as an official document issued by the Municipal Corporation allowing an individual or business to engage in a specific trade or business activity within a designated area, ensuring compliance with local safety and health standards."
  },
  {
    "q": "Who issues a Trade License?",
    "a": "Trade Licenses are issued by the licensing department of the Municipal Corporation, which includes departments such as industries, engineering, and health, based on local government regulations."
  },
  {
    "q": "Why is a Trade License important?",
    "a": "It ensures businesses adhere to safety, health, and ethical standards, promoting public safety and fair market practices, making it crucial for business legitimacy and societal harmony."
  },
  {
    "q": "What are the main objectives of a Trade License?",
    "a": "To regulate and control business activities, ensuring they do not negatively impact the surrounding environment and community, and to uphold ethical and legal business practices."
  },
  {
    "q": "What advantages does having a Trade License offer?",
    "a": "It ensures legal compliance, enhances public safety, boosts business credibility, aids in regulatory compliance, provides access to government support, establishes business legitimacy, and facilitates expansion."
  },
  {
    "q": "What types of businesses require a Trade License?",
    "a": "Retail stores, food establishments, manufacturing units, healthcare facilities, entertainment venues, transport services, construction and real estate businesses, businesses dealing with fireworks and explosives, liquor establishments, and street vendors."
  },
  {
    "q": "What types of Trade Licenses are there?",
    "a": "Type A for food services, Type B for manufacturing/processing units using machinery, Type C for high-risk activities like fireworks manufacturing, and Gumasta License in Maharashtra."
  },
  {
    "q": "What is the eligibility to apply for a Trade License?",
    "a": "Applicants must be over 18, have no criminal records, and the business must be legally permissible."
  },
  {
    "q": "What documents are needed for a Trade License?",
    "a": "Application form, letter of approval, city census map, tax statements, building plan (if applicable), and any additional documents requested by the Municipal Ward Officer."
  },
  {
    "q": "How do I apply for a Trade License?",
    "a": "Obtain and fill out the application form, submit it with required documents and fee, undergo possible municipal inspection, and receive the license upon approval."
  }
];

const FAQ_COL_2 = [
  {
    "q": "How does Merrafilings help in obtaining a Trade License?",
    "a": "Merrafilings guides through the application process, ensures accurate document preparation, and liaises with authorities, simplifying the process for businesses."
  },
  {
    "q": "Can I apply for a Trade License online?",
    "a": "Yes, depending on the municipal corporation's system, applications can be submitted online or offline."
  },
  {
    "q": "What is the validity period of a Trade License?",
    "a": "A Trade License is typically valid for one year and must be renewed annually."
  },
  {
    "q": "What happens if I operate without a Trade License?",
    "a": "It can lead to fines, penalties, or even business closure due to non-compliance with local regulations."
  },
  {
    "q": "Can a Trade License be transferred?",
    "a": "Trade Licenses are usually non-transferable, as they are issued to specific individuals or businesses for specific locations and activities."
  },
  {
    "q": "Is a Trade License the same across all Indian states?",
    "a": "The process and requirements for a Trade License can vary between states and municipalities based on local regulations."
  },
  {
    "q": "How long does it take to get a Trade License?",
    "a": "The approval time can vary but generally takes a few weeks, depending on the local municipal authority's process."
  },
  {
    "q": "What is the Trade License cost?",
    "a": "The trade license cost depends on the type of business, size, and location, and varies across different municipalities."
  },
  {
    "q": "Do I need a Trade License if I have a small home-based business?",
    "a": "Yes, depending on the nature of the business and local regulations, even small or home-based businesses may require a Trade License."
  },
  {
    "q": "How can I renew my Trade License?",
    "a": "Submit a renewal application along with the required fee before the license expires, as per the procedure laid out by the local municipal authority."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "What is Trade License?",
    "a": "A Trade License meaning is defined as an official document issued by the Municipal Corporation allowing an individual or business to engage in a specific trade or business activity within a designated area, ensuring compliance with local safety and health standards."
  },
  {
    "q": "Who issues a Trade License?",
    "a": "Trade Licenses are issued by the licensing department of the Municipal Corporation, which includes departments such as industries, engineering, and health, based on local government regulations."
  },
  {
    "q": "Why is a Trade License important?",
    "a": "It ensures businesses adhere to safety, health, and ethical standards, promoting public safety and fair market practices, making it crucial for business legitimacy and societal harmony."
  },
  {
    "q": "What are the main objectives of a Trade License?",
    "a": "To regulate and control business activities, ensuring they do not negatively impact the surrounding environment and community, and to uphold ethical and legal business practices."
  },
  {
    "q": "What advantages does having a Trade License offer?",
    "a": "It ensures legal compliance, enhances public safety, boosts business credibility, aids in regulatory compliance, provides access to government support, establishes business legitimacy, and facilitates expansion."
  },
  {
    "q": "What types of businesses require a Trade License?",
    "a": "Retail stores, food establishments, manufacturing units, healthcare facilities, entertainment venues, transport services, construction and real estate businesses, businesses dealing with fireworks and explosives, liquor establishments, and street vendors."
  },
  {
    "q": "What types of Trade Licenses are there?",
    "a": "Type A for food services, Type B for manufacturing/processing units using machinery, Type C for high-risk activities like fireworks manufacturing, and Gumasta License in Maharashtra."
  },
  {
    "q": "What is the eligibility to apply for a Trade License?",
    "a": "Applicants must be over 18, have no criminal records, and the business must be legally permissible."
  },
  {
    "q": "What documents are needed for a Trade License?",
    "a": "Application form, letter of approval, city census map, tax statements, building plan (if applicable), and any additional documents requested by the Municipal Ward Officer."
  },
  {
    "q": "How do I apply for a Trade License?",
    "a": "Obtain and fill out the application form, submit it with required documents and fee, undergo possible municipal inspection, and receive the license upon approval."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "How does Merrafilings help in obtaining a Trade License?",
    "a": "Merrafilings guides through the application process, ensures accurate document preparation, and liaises with authorities, simplifying the process for businesses."
  },
  {
    "q": "Can I apply for a Trade License online?",
    "a": "Yes, depending on the municipal corporation's system, applications can be submitted online or offline."
  },
  {
    "q": "What is the validity period of a Trade License?",
    "a": "A Trade License is typically valid for one year and must be renewed annually."
  },
  {
    "q": "What happens if I operate without a Trade License?",
    "a": "It can lead to fines, penalties, or even business closure due to non-compliance with local regulations."
  },
  {
    "q": "Can a Trade License be transferred?",
    "a": "Trade Licenses are usually non-transferable, as they are issued to specific individuals or businesses for specific locations and activities."
  },
  {
    "q": "Is a Trade License the same across all Indian states?",
    "a": "The process and requirements for a Trade License can vary between states and municipalities based on local regulations."
  },
  {
    "q": "How long does it take to get a Trade License?",
    "a": "The approval time can vary but generally takes a few weeks, depending on the local municipal authority's process."
  },
  {
    "q": "What is the Trade License cost?",
    "a": "The trade license cost depends on the type of business, size, and location, and varies across different municipalities."
  },
  {
    "q": "Do I need a Trade License if I have a small home-based business?",
    "a": "Yes, depending on the nature of the business and local regulations, even small or home-based businesses may require a Trade License."
  },
  {
    "q": "How can I renew my Trade License?",
    "a": "Submit a renewal application along with the required fee before the license expires, as per the procedure laid out by the local municipal authority."
  }
];

const FORM_FEATURES = [
  { icon: <FileText className="w-4 h-4" />, text: "Document Collection & Municipal Verification" },
  { icon: <Building className="w-4 h-4" />, text: "Ward Inspection & Application Filing" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "State Municipal Act 100% Legal Compliance" },
  { icon: <Award className="w-4 h-4" />, text: "Fast Municipal Trade License Issuance" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "State Municipal Trade License",
    shortDesc: "Standard municipal trade license registration for retail outlets, consulting offices, and small commercial establishments.",
    expandedDesc: "Complete municipal trade license application filing, municipal ward boundary verification, property document scrutiny, and online certificate delivery for Telangana, Tamil Nadu, and standard municipal bodies.",
    price: "₹5,899",
    priceSub: "+ Municipal Statutory Fees | Valid 1 Year",
    features: [
      "Municipal Trade License Application Drafting",
      "Ward Officer Document Scrutiny & Submission",
      "Property Tax & Lease Deed Verification",
      "Official Municipal Trade License Certificate",
    ],
  },
  {
    name: "Commercial & Industrial Trade License",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Comprehensive trade license processing for high-volume commercial spaces, restaurants, and manufacturing units.",
    expandedDesc: "Specialized assistance for complex municipal zones like BBMP (Karnataka), KMC (West Bengal), BMC (Maharashtra), or MCD (Delhi). Includes machinery horsepower verification, pollution categorization, and ward inspection coordination.",
    price: "₹9,899",
    priceSub: "+ Local Authority Statutory Fees | Priority Processing",
    features: [
      "Comprehensive Ward Inspection Coordination",
      "Building Sanction Plan & Floor Area Audit",
      "Fire & Health NOC Guidance (If Applicable)",
      "Express Liaison with Municipal Executive Officer",
      "Annual Renewal Tracker & Compliance Safeguard",
    ],
  },
  {
    name: "Pan-India Corporate Multi-Branch",
    shortDesc: "Centralized trade license acquisition and automated annual renewals for retail chains, franchise brands, and multi-state offices.",
    expandedDesc: "Designed for corporate enterprises with 5+ commercial retail branches or cloud kitchens across multiple Indian states. Centralized digital dashboard, dedicated account manager, and zero-lapse renewal safeguards.",
    price: "₹18,999",
    priceSub: "Custom Tailored Package | Multi-City Enterprise",
    features: [
      "Centralized Multi-City Municipal Compliance Hub",
      "Bulk Documentation & Digital Property Vault",
      "Dedicated Senior Legal & Municipal Relationship Manager",
      "Quarterly Compliance Audit & Ward Resolution",
      "Guaranteed Timely Renewal Notification System",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Apply for Gumasta License in Maharashtra",
  "Shop and Establishment Act vs Municipal Trade License",
  "Fire NOC Requirements for Commercial Establishments",
  "Trade License Renewal Process & Late Fee Slabs",
  "Documents Required for Municipal Trade License",
  "How to Check Trade License Application Status Online",
];

const RELATED_SERVICES_TAGS = [
  "Shop & Establishment Registration",
  "FSSAI Food Safety License",
  "GST Registration Online",
  "MSME Udyam Registration",
  "Fire Department NOC",
  "Pollution Control Board Consent",
  "Professional Tax Enrollment",
  "Trademark Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "trade license online",
  "municipal trade license apply",
  "trade license fees in india",
  "trade license certificate download",
  "trade license issuing authority",
  "gumasta license apply",
  "trade license documents required",
  "trade license renewal online",
  "penalty for no trade license",
  "trade license status check",
  "bbmp trade license",
  "greater chennai corporation trade license",
];

const ISSUING_AUTHORITIES_TABLE = [
  { authority: "Municipal Corporation (Mahanagar Palika)", area: "Major metropolitan cities and tier-1 urban areas (e.g., BMC Mumbai, BBMP Bengaluru, GCC Chennai, MCD Delhi, GHMC Hyderabad)" },
  { authority: "Municipal Council (Nagar Palika Parishad)", area: "Smaller cities, district headquarters, and medium-sized towns" },
  { authority: "Nagar Panchayat / Town Panchayat", area: "Transitional semi-urban areas moving from rural to urban" },
  { authority: "Gram Panchayat", area: "Rural villages and peripheral agricultural zones outside municipal limits" },
  { authority: "Special Development Authorities (IDA/BDA/HUDA)", area: "Industrial corridors, Special Economic Zones (SEZs), and planned tech hubs" },
];

const TRADE_CATEGORIES_TABLE = [
  { category: "Category A: Food & Hospitality Trades", scope: "Restaurants, cafes, bakeries, bars, catering units, food processing centers, hotels, canteens", requirement: "Mandatory Health NOC & FSSAI alignment" },
  { category: "Category B: Industrial & Manufacturing Trades", scope: "Factories, engineering workshops, printing presses, milling plants, automobile servicing", requirement: "Machinery HP verification & Pollution consent" },
  { category: "Category C: Dangerous & Hazardous Trades", scope: "Timber depots, firecracker retail, chemical storage, gas bottling, scrap yards, paint warehouses", requirement: "Fire safety NOC & explosive department clearance" },
  { category: "Shop & Commercial Establishment (General)", scope: "Retail stores, garment showrooms, supermarkets, salons, coaching centers, consulting firms", requirement: "Standard Municipal Ward compliance & ownership proof" },
  { category: "Gumasta License (Maharashtra Specific)", scope: "All shops and commercial enterprises operating within Mumbai, Pune, and Maharashtra municipalities", requirement: "Governed under Maharashtra Shops & Establishments Act" },
];

const DOCUMENTS_REQUIRED_TABLE = [
  { document: "Completed Trade License Application Form", purpose: "Primary municipal statutory application declaration" },
  { document: "Identity Proof of Applicant / Business Owner", purpose: "Aadhaar Card, PAN Card, Passport, or Voter ID" },
  { document: "Business Constitution Certificate", purpose: "Certificate of Incorporation (CIN), Partnership Deed, or GSTIN" },
  { document: "Proof of Commercial Premises Possession", purpose: "Registered Sale Deed, Electricity Bill, or Registered Lease Agreement with Owner NOC" },
  { document: "Property Tax Paid Receipt (Latest Financial Year)", purpose: "Ensures property is clear of municipal property tax arrears" },
  { document: "Sanctioned Building Plan / Occupancy Certificate (OC)", purpose: "Verifies the building is authorized for non-residential commercial use" },
  { document: "Fire & Health Department NOC (If Applicable)", purpose: "Required for restaurants, lodgings, schools, and hazardous material storage" },
  { document: "Pollution Control Board Consent (CTE/CTO)", purpose: "Required for Category B & C manufacturing and processing facilities" },
];

const ONLINE_VS_OFFLINE_TABLE = [
  { parameter: "Application Mode", online: "State / Municipal Single Window Online Portal", offline: "Physical visit to Municipal Ward Office" },
  { parameter: "Convenience & Accessibility", online: "24/7 online submission from any device", offline: "Subject to municipal office hours and long queues" },
  { parameter: "Document Submission", online: "Instant encrypted digital upload", offline: "Physical attested paper photocopies submitted in person" },
  { parameter: "Application Tracking", online: "Real-time SMS, Email, and Portal Application ID tracking", offline: "Requires physical follow-up with Ward Inspector" },
  { parameter: "Processing Timeline", online: "Typically 7 to 15 business days", offline: "20 to 45 business days depending on backlog" },
  { parameter: "Certificate Delivery", online: "Digital PDF with QR code & digital signature download", offline: "Physical collection from Municipal Revenue Department" },
];

const FEES_STRUCTURE_TABLE = [
  { category: "Small Retail & Service Shops (< 200 sq.ft.)", range: "₹500 – ₹2,000 per annum", factors: "Carpet area and local municipality property tax zone" },
  { category: "Restaurants, Cafes & Food Establishments", range: "₹2,500 – ₹10,000 per annum", factors: "Seating capacity, kitchen area, and liquor authorization" },
  { category: "Medium Manufacturing & Processing Units", range: "₹5,000 – ₹25,000 per annum", factors: "Total machinery horsepower (HP) and workforce headcount" },
  { category: "Hazardous, Chemical & Storage Trades", range: "₹10,000 – ₹50,000+ per annum", factors: "Flammability risk profile, storage tonnage, and environmental classification" },
  { category: "Commercial Offices & IT / ITES Centers", range: "₹2,000 – ₹8,000 per annum", factors: "Floor area and municipal commercial zoning rate" },
];

function TradeLicenseGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: What is a Trade License */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Trade License in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          A <strong className="text-slate-800 font-medium">Trade License</strong> is an official permit granted by a municipal corporation, municipality, or local administrative body authorizing an individual or commercial enterprise to conduct a specific trade, manufacturing, or service activity within a designated municipal jurisdiction.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Unlike one-time company incorporations, a trade license is a location-specific and time-bound operating permit. It must be renewed annually before the beginning of each municipal financial year. The primary objective is to verify that the commercial activity is operated in conformity with local public health, environmental safety, fire security, and urban zoning regulations.
        </p>
        <div className="bg-[#FAF9F7] p-4.5 rounded-2xl border border-slate-200/80 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <strong className="text-slate-800 font-medium block mb-0.5">Critical Legal Pre-Requisite:</strong>
            Holding a GST registration or Private Limited incorporation does NOT exempt a business from municipal licensing. Operating without a valid trade license is a punishable violation under State Municipal Corporation Acts.
          </div>
        </div>
      </section>

      {/* Section 2: Why Trade License is Important */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Why Trade License Important for Your Business in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Securing a trade license is an indispensable milestone for any operating business. Beyond meeting statutory mandates, it confers concrete operational advantages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-emerald-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00B074] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white transition-all duration-200">
                <Scale className="w-4 h-4" />
              </div>
              <span>Legal Immunity &amp; Business Legitimacy</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light pl-10.5">
              Protects business owners against unannounced municipal raids, stop-work notices, and sealing of premises by municipal enforcement inspectors.
            </p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:bg-blue-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-blue-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#155EEF] group-hover:text-white transition-all duration-200">
                <Store className="w-4 h-4" />
              </div>
              <span>Consumer &amp; Neighborhood Trust</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light pl-10.5">
              Proves to customers, neighboring residents, and landlords that your operations comply with ethical health, sound, and waste sanitation norms.
            </p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:bg-purple-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-purple-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                <Landmark className="w-4 h-4" />
              </div>
              <span>Banking &amp; Credit Facilities</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light pl-10.5">
              Banks and non-banking financial institutions (NBFCs) mandatorily examine active municipal trade certificates before sanctioning business loans or overdrafts.
            </p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-emerald-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Government Tenders &amp; Subsidies</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light pl-10.5">
              Required for onboarding onto the Government e-Marketplace (GeM) and qualifying for state industrial incentive schemes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Objectives */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What are the Main Objectives of a Trade License?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Municipal licensing systems were introduced to balance commercial growth with civic order. The four core objectives include:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-light">
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 font-medium">Controlling Public Nuisance:</strong> Ensuring that high-noise, air-polluting, or effluent-generating activities are confined to designated industrial zones away from residential clusters.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 font-medium">Ensuring Occupational Safety:</strong> Verifying that manufacturing machinery, high-voltage equipment, and boiler installations follow structural safety norms.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 font-medium">Preventing Health Hazards:</strong> Regulating food handlers, slaughterhouses, chemical handlers, and salons to eliminate epidemics and toxic contamination.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#00B074] shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 font-medium">Tax &amp; Civic Revenue Oversight:</strong> Creating a municipal registry that prevents non-payment of property tax and commercial utility surcharges.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Who Can Issue Trade License (Table 1) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Who Can Issue a Trade License in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Trade licenses in India are administered strictly at the local government level under State Municipal Corporation Acts. The issuing authority depends directly on the location of your commercial premises:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Issuing Authority</th>
                <th className="py-3 px-4">Applicable Area &amp; Jurisdiction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {ISSUING_AUTHORITIES_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.authority}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Categories of Trade License (Table 2) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Different Categories of Trade License in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Municipal bylaws categorize commercial activities based on potential hazards and environmental impact. Identifying your proper category is essential to ensure accurate fee calculation and documentation:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Trade Category</th>
                <th className="py-3 px-4">Eligible Businesses</th>
                <th className="py-3 px-4">Specific NOC Mandates</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TRADE_CATEGORIES_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.category}</td>
                  <td className="py-3 px-4">{row.scope}</td>
                  <td className="py-3 px-4 text-[#155EEF]">{row.requirement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Eligibility & Disqualifications */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Eligibility &amp; Disqualification Criteria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200/60 shadow-2xs hover:shadow-md hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-[14px] font-medium text-emerald-950 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Eligibility Checklist
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 font-light">
              <li>• Applicant must be at least 18 years of age and legally competent to enter contracts.</li>
              <li>• The enterprise must be engaged in an activity permissible under Indian law.</li>
              <li>• Applicant must possess valid legal possession of commercial property (Ownership or Lease).</li>
              <li>• The business owner must have a clean legal record without municipal violations.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-red-50/40 border border-red-200/60 shadow-2xs hover:shadow-md hover:border-red-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-[14px] font-medium text-red-950 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" /> Grounds for Immediate Rejection
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 font-light">
              <li>• Commercial operations conducted on unregularized residential-only premises.</li>
              <li>• Properties with unpaid municipal property tax dues or pending court litigation.</li>
              <li>• Unauthorized building extensions lacking a valid Sanctioned Building Plan.</li>
              <li>• Banned substances, illegal gambling, or unlicensed chemical processing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Documents Required (Table 3) */}
      <section id="documents-required" className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Documents Required for Trade License Registration
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Submitting clear, valid, and properly attested documentation prevents inspection queries and ward delays. Prepare the following checklist:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Document Name</th>
                <th className="py-3 px-4">Statutory Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {DOCUMENTS_REQUIRED_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.document}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Step-by-Step Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Step-by-Step Procedure for Trade License in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings manages the complete administrative lifecycle to ensure your certificate is issued smoothly without visiting municipal offices:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">1</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Jurisdiction &amp; Authority Identification</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                We pinpoint your exact municipal corporation zone, ward number, and applicable municipal schedule based on your pin code and trade category.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">2</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Application Drafting &amp; Document Scrutiny</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Our CA/CS team reviews your lease deed, property tax receipt, and structural plans to ensure zero discrepancy prior to submission on the state portal.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">3</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Filing &amp; Statutory Fee Payment</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                The application is submitted to the Revenue &amp; Health licensing department along with prescribed municipal statutory challan fees.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">4</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Ward Inspection &amp; Scrutiny Coordination</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                If the municipal officer requires a physical site verification, our local field network coordinates inspection protocols and resolves questions.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#00B074] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">5</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-emerald-900 transition-colors">Certificate Generation &amp; Digital Delivery</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Upon final approval, the digitally signed Trade License Certificate with official QR code is issued and stored permanently in your Merrafilings dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Online vs Offline (Table 4) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Online vs. Offline Process Comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-[#155EEF]">Online Process (Recommended)</th>
                <th className="py-3 px-4 text-slate-500">Offline Process</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {ONLINE_VS_OFFLINE_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.parameter}</td>
                  <td className="py-3 px-4 text-slate-800 font-normal">{row.online}</td>
                  <td className="py-3 px-4 text-slate-500">{row.offline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: Fees Structure (Table 5) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Fees Structure for Trade License Registration
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Municipal trade license statutory fees differ across states and cities. Key determinants include carpet area, commercial property tax slab, and machinery horsepower:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Business Category</th>
                <th className="py-3 px-4">Approximate Fee Range</th>
                <th className="py-3 px-4">Fee Determining Factor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {FEES_STRUCTURE_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.category}</td>
                  <td className="py-3 px-4 font-normal text-emerald-800">{row.range}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.factors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: Penalties for Non-Compliance */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Penalties for Operating Without a Trade License
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Municipal enforcement squads conduct periodic audits. Operating without a valid trade license or failing to renew triggers severe statutory penalties:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/70">
            <h3 className="text-xs font-semibold text-rose-900 uppercase tracking-wider mb-1">Financial Fines</h3>
            <p className="text-xs text-slate-600 font-light">
              Fines ranging from ₹2,000 to ₹50,000 plus an additional daily penalty of up to ₹500 per day until rectified.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/70">
            <h3 className="text-xs font-semibold text-rose-900 uppercase tracking-wider mb-1">Shop Sealing</h3>
            <p className="text-xs text-slate-600 font-light">
              Immediate physical closure, locks, and municipal seals placed on the commercial establishment without prior notice.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/70">
            <h3 className="text-xs font-semibold text-rose-900 uppercase tracking-wider mb-1">Utility Disconnection</h3>
            <p className="text-xs text-slate-600 font-light">
              Revocation of commercial water and electricity connections under the Municipal Corporation Act.
            </p>
          </div>
        </div>
      </section>

      {/* Section 12: Certificate Download & Verification */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. How to Download &amp; Verify Your Trade License Certificate
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Once your license is approved by the municipal executive officer, follow these steps to download and verify the certificate:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600 font-light">
          <li>Visit your respective municipal corporation portal (e.g., e-Nagar, BBMP Citizen Portal, Greater Chennai e-Services).</li>
          <li>Navigate to the <strong className="text-slate-800 font-medium">Trade License &gt; Check Status / Download</strong> module.</li>
          <li>Enter your unique <strong className="text-slate-800 font-medium">Application Reference Number (ARN)</strong> or Trade License ID.</li>
          <li>Complete mobile OTP verification linked to the business owner&apos;s phone number.</li>
          <li>Download the digitally signed Trade License Certificate with the official municipal hologram and verification QR code.</li>
        </ol>
      </section>

      {/* Section 13: Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          13. Why Choose Merrafilings for Trade License Services?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Navigating municipal bureaucracy can be cumbersome and time-consuming. Merrafilings makes municipal licensing completely digital and worry-free:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online Process – Zero municipal office visits required</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Pan-India Presence – Over 500+ municipal bodies covered</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Dedicated CA / Legal Executive for municipal liaison</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Automated Annual Renewal Alerts – Never miss a deadline</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Trade License Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for Trade License Today</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function TradeLicensePage() {
  return (
    <ServicePageTemplate
      badgeText="Municipal Trade & Business Licensing"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Trade License
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Get your official Municipal Trade License online with 100% legal compliance. End-to-end documentation, ward liaison, and digital certificate delivery across all municipal corporations in India."
      formTitle="Apply for Trade License"
      formSubtitle="Enter your details below to speak with our municipal licensing specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. State-wise{" "}
          <span className="font-normal text-[#00B074]">pricing.</span>
        </>
      }
      pricingSubtitle="Select your business category and state jurisdiction for swift, guaranteed municipal licensing."
      breadcrumbCurrent="Trade License"
      guideTitle="Trade License Registration Online for Business in India"
      guideContent={<TradeLicenseGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about obtaining a Municipal Trade License in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
