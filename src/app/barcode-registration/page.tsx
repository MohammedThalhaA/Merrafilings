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
  QrCode,
  Barcode,
  Boxes,
  ShoppingCart,
  ScanLine,
  ArrowRight,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "What is barcode registration?",
    a: "Barcode registration involves obtaining an official, globally unique barcode number for a product from GS1 India. When scanned by an optical barcode reader or mobile camera, it instantly retrieves product metadata such as brand name, SKU details, pricing, and batch numbers."
  },
  {
    q: "Why is barcode registration important for businesses in India?",
    a: "Barcode registration provides a unique global identification number for every product, enabling automated inventory tracking, seamless point-of-sale retail billing, and preventing counterfeit copies. It is also an absolute prerequisite for selling on Amazon, Flipkart, Blinkit, Zepto, and modern retail supermarkets."
  },
  {
    q: "Who can apply for barcode registration?",
    a: "Any business entity or individual can apply for barcode registration—including sole proprietorships, partnerships, LLPs, private limited companies, and individual artisans. There are no turnover restrictions to get started."
  },
  {
    q: "Is barcode registration mandatory in India?",
    a: "While not universally mandated for unorganized local trade, barcode registration is practically mandatory if you wish to sell packaged goods in organized retail (Reliance Retail, D-Mart, Spencer's), modern trade, quick commerce, or e-commerce marketplaces like Amazon and Flipkart."
  },
  {
    q: "How do I apply for barcode registration online?",
    a: "You can apply online through Merrafilings. We gather your company KYC, audited turnover proof, and product SKU requirements, file your application on the official GS1 India national portal, and deliver your GS1 allocation certificate along with digital print-ready barcode artwork within 48 to 72 hours."
  },
  {
    q: "What documents are required for barcode registration?",
    a: "Essential documents include the PAN Card of the business or proprietor, GST Registration Certificate, Certificate of Incorporation or Partnership Deed, Aadhaar Card of authorized director/partner, cancelled bank cheque, and audited balance sheet or CA turnover certificate."
  }
];

const FAQ_COL_2 = [
  {
    q: "What are the barcode registration fees in India?",
    a: "GS1 India membership fees depend on the company's annual turnover bracket and the total number of barcode numbers requested (e.g., 100, 1,000, 10,000, or 100,000 barcodes). Merrafilings provides transparent all-inclusive packages starting from ₹7,899 for 100 barcodes."
  },
  {
    q: "How many barcodes can I register at once?",
    a: "Barcodes are issued in standardized batches by GS1 India. You can register for 100 barcodes, 1,000 barcodes, 10,000 barcodes, or up to 100,000 barcodes based on your current product inventory and future SKU expansion plans."
  },
  {
    q: "Can I use the same barcode for multiple products?",
    a: "No. Each unique product, flavor, pack size, color, or variant must have its own distinct barcode. Using the same barcode across multiple products leads to inventory mismatch, incorrect pricing scans, and platform delisting."
  },
  {
    q: "How long does it take to get a barcode registered?",
    a: "With Merrafilings' expedited processing, GS1 barcode registration is typically completed within 2 to 3 business days once all required business documents and turnover proofs are validated."
  },
  {
    q: "Do I need to renew my barcode registration?",
    a: "Yes. GS1 India barcode allocations require periodic renewal (annual, 3-year, or multi-year terms) to keep your unique company prefix active in the global GS1 registry and maintain uninterrupted validity on retail platforms."
  },
  {
    q: "What happens if my barcode is not registered with GS1?",
    a: "Non-GS1 or unofficial barcodes generated through free internet generators are rejected by Amazon, Flipkart, and modern supermarkets. They carry a severe risk of duplicate conflict with existing brands and lack legal protection against counterfeiting."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "What is the difference between a UPC and an EAN barcode?",
    a: "UPC-A (Universal Product Code) is a 12-digit standard primarily used in the United States and Canada. EAN-13 (International Article Number) is a 13-digit standard used in India, Europe, and globally. Modern barcode scanners read both formats seamlessly."
  },
  {
    q: "Can I choose between a UPC and an EAN barcode?",
    a: "Indian businesses registering with GS1 India receive EAN-13 barcodes by default, which are accepted worldwide. If your primary market is North America, you can request UPC format allocation through GS1."
  },
  {
    q: "Can I change the product details associated with my barcode registration?",
    a: "Yes. Through the GS1 DataKart portal, you can update product attributes such as description, MRP, net weight, ingredients, and packaging dimensions associated with your allocated GTIN."
  },
  {
    q: "Can I transfer my barcode registration to someone else?",
    a: "Barcode allotments are tied to your company's legal entity and PAN. If your company undergoes a merger, acquisition, or brand sale, GS1 permits legal transfer of the company prefix upon formal documentation."
  },
  {
    q: "What happens if I lose my barcode registration certificate?",
    a: "Your GS1 allotment certificate and numbers are permanently archived in your GS1 digital account. Merrafilings can help you retrieve and re-download your digital allocation letter anytime."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "How do I print my barcode on my product packaging?",
    a: "Merrafilings provides print-ready vector artwork in EPS, PNG, and PDF formats. You can send these directly to your packaging designer or printing press to print directly onto boxes, bottles, pouches, or adhesive sticker labels."
  },
  {
    q: "How do I test if my barcode is working correctly?",
    a: "You can test the barcode using any handheld 1D optical scanner or mobile barcode scanner app. Ensure proper contrast (dark bars on light background) and adequate quiet zones on both sides of the barcode bars."
  },
  {
    q: "Can I use an Indian GS1 barcode for international export?",
    a: "Yes! GS1 India barcodes are globally compatible and accepted by customs authorities, international retail chains, and overseas importers across more than 150 countries."
  },
  {
    q: "What is a GS1 DataBar / 2D barcode?",
    a: "A 2D DataBar or QR barcode encodes richer metadata—such as expiry date, serial number, and batch lot—in a compact matrix. They are widely used in pharmaceuticals, fresh food, and traceability applications."
  },
  {
    q: "What is the difference between free barcode generators and GS1 barcodes?",
    a: "Free generators create random visual lines without registering the number in any database. They are not globally unique, are strictly banned on Amazon and retail stores, and lack legal standing. GS1 barcodes are legally authenticated, 100% unique, and globally verified."
  },
  {
    q: "How do I get a barcode for my products in India with Merrafilings?",
    a: "Simply choose your required barcode package (100, 1,000, or 10,000 barcodes), upload your basic business documents, and our dedicated barcode compliance team will handle everything from GS1 registration to final barcode artwork delivery."
  }
];

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Official GS1 India Authorized Global Barcodes" },
  { icon: <Store className="w-4 h-4" />, text: "Mandatory for Amazon, Flipkart, Blinkit & Zepto" },
  { icon: <Barcode className="w-4 h-4" />, text: "100% Unique GTIN-13 / EAN-13 Product Identification" },
  { icon: <FileCheck className="w-4 h-4" />, text: "Print-Ready Vector Barcode Artwork (EPS, PNG, PDF)" },
  { icon: <Clock className="w-4 h-4" />, text: "Expedited 48-Hour Allocation & Processing" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "100 Barcodes Starter",
    shortDesc: "Perfect for emerging brands, D2C startups, and boutique manufacturers launching initial product lines.",
    expandedDesc: "Up to 100 authentic GS1 EAN-13 barcodes with official GS1 India allocation certificate, valid for global retail scanning and e-commerce listings on Amazon, Flipkart, and modern supermarkets.",
    price: "₹7,899",
    priceSub: "All Inclusive | 100 Unique GTINs",
    badge: "Starter",
    features: [
      "100 Unique GS1 EAN-13 / GTIN-13 Barcodes",
      "Official GS1 India Allocation Certificate",
      "Product Data Allocation Assistance",
      "Amazon & Flipkart Listing Verification",
      "Vector EPS, PNG & PDF Barcode Image Files",
      "1-Year Registration Validity",
      "Dedicated E-Commerce Onboarding Advisor",
    ],
  },
  {
    name: "1,000 Barcodes Enterprise",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Designed for growing FMCG, cosmetics, apparel, and consumer brands with multiple SKU variations.",
    expandedDesc: "Up to 1,000 unique GS1 barcodes with multi-category product allocation, fast-track document scrutiny, supermarket retail POS compatibility, quick commerce onboarding, and priority support.",
    price: "₹14,899",
    priceSub: "All Inclusive | 1,000 Unique GTINs",
    features: [
      "1,000 Unique GS1 Barcodes (EAN-13 / UPC-A)",
      "Multi-Category Product SKU Allocation",
      "High-Resolution Print-Ready Artwork Generation",
      "Modern Retail & Supermarket POS Compatibility",
      "Quick Commerce Onboarding (Blinkit, Zepto, Swiggy)",
      "Amazon Brand Registry GTIN Exemption Audit",
      "Priority Fast-Track Lodgement (48 Hours)",
    ],
  },
  {
    name: "10,000 Barcodes FMCG Bulk Suite",
    shortDesc: "Comprehensive bulk barcode allocation for high-volume manufacturers, supermarket private labels, and pharma enterprises.",
    expandedDesc: "Up to 10,000 unique global GTINs, 1D (EAN-13) and 2D (Data Matrix/QR) codes, global GS1 Registry Alliance sync, and dedicated corporate compliance key account manager.",
    price: "₹24,899",
    priceSub: "All Inclusive | 10,000 Unique GTINs",
    badge: "Enterprise Suite",
    features: [
      "10,000 Unique Global GTIN Identifiers",
      "1D (EAN-13/UPC) & 2D (Data Matrix) Allocation",
      "Global GS1 Data Hub Synchronization",
      "Automated Warehouse Logistics Batch Barcoding",
      "Pharma & Healthcare Compliance Support",
      "Dedicated Corporate Key Account Manager",
      "Multi-Year Membership Advisory",
    ],
  },
];

const RELATED_GUIDES = [
  "What is GS1 Barcode Registration & How Does it Work?",
  "How to Get Barcodes for Amazon Brand Registry",
  "Difference Between EAN-13, UPC-A, and QR Codes",
  "GS1 India Fees Structure Based on Turnover Slabs",
  "How to Print Barcodes on Product Packaging Compliantly",
  "Packaging & Labelling Rules for Packaged Commodities in India"
];

const RELATED_SERVICES_TAGS = [
  "Trademark Registration",
  "FSSAI Food License",
  "ISO Certification",
  "Import Export Code (IEC)",
  "GST Registration",
  "Trade License"
];

const POPULAR_SEARCHES_TAGS = [
  "GS1 barcode registration India",
  "Barcode for Amazon product listing",
  "EAN 13 barcode cost India",
  "How to get barcode for retail products",
  "Barcode registration fees online"
];

function BarcodeGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[13.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-medium text-slate-800">GS1 Barcode Registration</strong> is the universal standard for product identification and automated supply chain operations across India and 150+ countries worldwide. Administered officially by <strong className="font-medium text-slate-800">GS1 India</strong> (an autonomous standards body established by the Ministry of Commerce and Industry alongside apex industry chambers like CII, FICCI, and ASSOCHAM), an official barcode embeds your unique manufacturer prefix into every SKU. Whether you sell on e-commerce marketplaces like <strong className="font-medium text-slate-800">Amazon and Flipkart</strong>, quick commerce apps like <strong className="font-medium text-slate-800">Blinkit and Zepto</strong>, or through modern supermarket cash registers, authentic GS1 barcode registration is a non-negotiable operational necessity.
        </p>
      </div>

      {/* Section 1: What is a Barcode */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is a Barcode &amp; How Does it Work?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          A barcode is a machine-readable optical representation of numbers and characters encoded in a visual sequence of parallel black bars and white spaces (or a 2D matrix of dots). When an optical scanner illuminates the code, the light reflected from the spaces is converted into digital signals, instantly retrieving the product&apos;s verified record from database systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Barcode className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">EAN-13 / GTIN Standard</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">13-digit global standard used across retail and point-of-sale scanning.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <ScanLine className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">Zero Scanning Errors</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Eliminates manual cashier entry errors and speeds up checkout by 90%.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Globe2 className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-slate-900">150+ Countries Compatible</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Authentic GS1 numbers work seamlessly across domestic and international borders.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Types of Barcodes (Table) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Types of Barcodes Used in India: 1D vs 2D
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Barcodes in commercial use fall into two broad technological categories: Linear One-Dimensional (1D) barcodes and Matrix Two-Dimensional (2D) barcodes. Understanding the difference is vital for selecting the right code for your packaging:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Feature</th>
                <th className="p-3 sm:p-3.5">1D Barcodes (Linear)</th>
                <th className="p-3 sm:p-3.5">2D Barcodes (Matrix)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Visual Format</td>
                <td className="p-3 sm:p-3.5">Horizontal lines &amp; vertical variable spaces</td>
                <td className="p-3 sm:p-3.5">Square grid matrix of dots, modules &amp; patterns</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Data Storage Capacity</td>
                <td className="p-3 sm:p-3.5">Limited capacity (typically 8 to 20 numeric digits)</td>
                <td className="p-3 sm:p-3.5">High capacity (thousands of alphanumeric characters, URLs)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Common Standard Formats</td>
                <td className="p-3 sm:p-3.5 font-semibold text-blue-700">EAN-13, UPC-A, Code 128, ITF-14</td>
                <td className="p-3 sm:p-3.5 font-semibold text-purple-700">QR Code, GS1 DataMatrix, PDF417</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Primary Commercial Use</td>
                <td className="p-3 sm:p-3.5">Retail FMCG, consumer goods, apparel, billing</td>
                <td className="p-3 sm:p-3.5">Healthcare, pharmaceuticals, logistics traceability, payments</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Scanner Compatibility</td>
                <td className="p-3 sm:p-3.5">Standard laser scanners, CCD readers, mobile cameras</td>
                <td className="p-3 sm:p-3.5">2D optical image scanners &amp; smartphone cameras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: What is GS1 Barcode Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What is GS1 Barcode Registration &amp; What is GS1 India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          <strong>GS1 India</strong> is a standards organization set up by the Ministry of Commerce &amp; Industry, Government of India along with premier trade bodies (CII, FICCI, ASSOCHAM, FIEO, Spices Board, and APEDA). It is the sole authorized organization in India for assigning globally unique, authentic barcode numbers.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          When you register with GS1 India, your business is allocated a dedicated <strong>GS1 Company Prefix (GCP)</strong>. This prefix forms the foundation of all your product barcodes (GTIN - Global Trade Item Number), ensuring that no other company anywhere in the world can ever share or duplicate your numbers.
        </p>
      </section>

      {/* Section 4: Why Barcode Registration is Important */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Why is Barcode Registration Important for Modern Businesses?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <ShoppingCart className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Mandatory E-Commerce Listing</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Amazon, Flipkart, Nykaa, and Tata CliQ mandate authentic GS1 barcodes to map ASINs and activate Brand Registry.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Store className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Modern Retail Shelf Access</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Supermarket retail chains like Reliance Smart, D-Mart, Spencer&apos;s, and Nature&apos;s Basket require GS1 barcodes for POS optical scanning.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <Layers className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Quick Commerce Delivery</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Instant delivery apps (Blinkit, Zepto, Swiggy Instamart) require barcoded SKUs for high-speed dark store scanning.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-500 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <ShieldCheck className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-[14px] font-semibold text-slate-900">Counterfeit Prevention</h4>
            <p className="text-xs text-slate-600 font-normal mt-1">Authentic barcodes registered in the GS1 Global Data Hub protect your brand identity from counterfeit imitations.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Documents Required (Table) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Documents Required for GS1 Barcode Registration
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          To register your products with GS1 India, the following statutory records must be furnished for identity, tax compliance, and turnover bracket verification:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Document Name</th>
                <th className="p-3 sm:p-3.5">Verification Purpose</th>
                <th className="p-3 sm:p-3.5">Mandatory Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">PAN Card (Business / Proprietor)</td>
                <td className="p-3 sm:p-3.5">Primary legal entity identity verification</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-600">✓ Mandatory for all</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">GST Registration Certificate</td>
                <td className="p-3 sm:p-3.5">Verification of registered trade premises &amp; tax compliance</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-600">✓ Mandatory for all</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Certificate of Incorporation / Partnership Deed</td>
                <td className="p-3 sm:p-3.5">Proof of corporate constitution (for Companies &amp; LLPs)</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-600">✓ Mandatory for entities</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Aadhaar Card of Signatory / Director</td>
                <td className="p-3 sm:p-3.5">Individual KYC of authorized representative</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-600">✓ Mandatory</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Cancelled Cheque or Bank Statement</td>
                <td className="p-3 sm:p-3.5">Validation of active corporate bank account details</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-600">✓ Mandatory</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Audited Balance Sheet or CA Turnover Certificate</td>
                <td className="p-3 sm:p-3.5">Determination of statutory GS1 turnover fee slab</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-600">✓ Mandatory (or Zero Turnover letter)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Step-by-Step Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Step-by-Step Barcode Registration Process with Merrafilings
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings manages the complete registration lifecycle on the GS1 India portal:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">1</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">SKU Count &amp; Turnover Analysis</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Determine the right barcode allocation batch (100, 1,000, 10,000) and verify your turnover documents to ensure lowest possible statutory fees.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">2</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">GS1 India Application Lodgement</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Prepare the statutory application and upload verified entity documents on the official GS1 India portal with digital authorization.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">3</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Prefix Allocation &amp; Certificate Delivery</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">GS1 issues your official GS1 Company Prefix (GCP) and formal Registration Allocation Letter with global GTIN authorization.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">4</div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Barcode Graphic Generation (EPS, PNG, PDF)</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Receive high-resolution, print-ready vector barcode artwork ready for your packaging manufacturer, graphic designer, or sticker printer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: GS1 vs Non-GS1 / Free Barcode (Comparison Tables) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. GS1 Barcodes vs Non-GS1 Barcodes &amp; Free Generators
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Many new businesses consider using free barcode generator websites to save money. However, free barcodes carry immense legal and commercial risks:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs mb-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
                <th className="p-3 sm:p-3.5">Feature</th>
                <th className="p-3 sm:p-3.5">Free Barcode Generator</th>
                <th className="p-3 sm:p-3.5">Official GS1 Registered Barcode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Cost</td>
                <td className="p-3 sm:p-3.5 text-slate-500">Free / Low initial price</td>
                <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">Official Statutory Membership</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Global Uniqueness</td>
                <td className="p-3 sm:p-3.5 text-rose-600 font-medium">❌ Not guaranteed (high duplicate risk)</td>
                <td className="p-3 sm:p-3.5 text-emerald-700 font-medium">✓ 100% Unique worldwide</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Amazon &amp; Flipkart Acceptance</td>
                <td className="p-3 sm:p-3.5 text-rose-600 font-medium">❌ Strictly rejected &amp; banned</td>
                <td className="p-3 sm:p-3.5 text-emerald-700 font-medium">✓ 100% Accepted &amp; Verified</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Product Database Listing</td>
                <td className="p-3 sm:p-3.5 text-rose-600 font-medium">❌ No central database entry</td>
                <td className="p-3 sm:p-3.5 text-emerald-700 font-medium">✓ Listed on GS1 Global Registry</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 sm:p-3.5 font-medium text-slate-900">Legal Ownership Protection</td>
                <td className="p-3 sm:p-3.5 text-rose-600 font-medium">❌ Zero legal standing</td>
                <td className="p-3 sm:p-3.5 text-emerald-700 font-medium">✓ Protected under Trademark &amp; GS1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Why Choose Merrafilings for Barcode Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings is India&apos;s leading business licensing and packaging compliance platform. We ensure fast, guaranteed GS1 registration:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Genuine GS1 India Allocation – Zero counterfeit barcode risk</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Fast 48-Hour Allocation – Swift document audit and submission</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Print-Ready Vector Files in EPS, PNG &amp; PDF Formats Included</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Amazon Brand Registry &amp; Marketplace Onboarding Support</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Barcode Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Get Official GS1 Barcodes Today</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function BarcodeRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="GS1 India Authorized Product Identification"
      heroTitle={
        <>
          <span>Get Your Official </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            GS1 Barcode Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Obtain authentic GS1 EAN-13 &amp; UPC barcodes for your products. Mandatory for listing on Amazon, Flipkart, Blinkit, Zepto, and global supermarket retail cash registers."
      formTitle="Get Your GS1 Barcodes"
      formSubtitle="Enter your contact details below to receive instant guidance and barcode allocation support."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">GS1 barcode pricing.</span>
        </>
      }
      pricingSubtitle="Select your product SKU tier for instant, authenticated GS1 India barcode generation."
      breadcrumbCurrent="Barcode Registration"
      guideTitle="GS1 Barcode Registration Online for Products in India"
      guideContent={<BarcodeGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about GS1 barcode registration, pricing, and retail compliance in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
