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
  Palette,
  Package,
  Layers,
  Sparkle,
  HelpCircle,
  Check,
  Eye,
  Sliders,
  CheckSquare2,
  AlertTriangle,
  Coins,
  History,
  FileCheck,
  TrendingUp,
  XCircle,
  BookOpen,
  Camera,
  FolderLock,
  Gavel,
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "15 Years Exclusive Statutory Monopoly under Designs Act, 2000" },
  { icon: <Palette className="w-4 h-4" />, text: "Protects Aesthetic Shapes, Configurations, Patterns & Visual Dress" },
  { icon: <Layers className="w-4 h-4" />, text: "International Locarno Classification Compliance (Classes 1 to 32)" },
  { icon: <FileText className="w-4 h-4" />, text: "7-Angle Standard Orthographic Drawing Preparation (Front, Top, 3D)" },
  { icon: <Scale className="w-4 h-4" />, text: "Enables Civil Damages & Injunctions against Copycats under Sec 22" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Design Novelty Search & Audit",
    shortDesc: "Prior-art visual search on the IP India Design Registry to verify novelty before manufacturing or filing.",
    expandedDesc: "Comprehensive visual and structural novelty search across the Design Wing of the Controller General of Patents, Designs and Trade Marks (Kolkata) database and international registries. Includes Locarno class determination and patent attorney registrability opinion.",
    price: "₹2,999",
    priceSub: "Inclusive of Search Analytics",
    badge: "Pre-Filing Step",
    features: [
      "Prior-Art Design Novelty Search",
      "Locarno Classification (Classes 1–32) Audit",
      "Analysis of Non-Registered Market Designs",
      "Registrability & Risk Assessment Report",
      "Technical Representation Guidance",
      "Consultation with Registered Design Attorney",
    ],
  },
  {
    name: "Standard Design Registration Filing",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Complete industrial design filing on Form 1 with 7-view standard technical representations.",
    expandedDesc: "Preparation of Form 1, drafting of verified Statement of Novelty, formatting 7 standard drawing views (Perspective, Front, Rear, Top, Bottom, Left, and Right views) adhering strictly to Patent Office guidelines, official e-filing, and certificate follow-up.",
    price: "₹6,999",
    priceSub: "+ Govt Fee ₹1,000 (Individual/MSME) / ₹4,000 (Corporate)",
    features: [
      "Form 1 Application for Design Registration Drafting",
      "Statement of Novelty & Disclaimer Formulation",
      "Standard 7-View Orthographic Drawing Formatting",
      "Locarno Class Specification & Product Description",
      "Electronic Filing with Kolkata Design Office",
      "Official Application Number & Challan Receipt",
      "Management of Examiner Procedural Scrutiny",
      "Procurement of Official Design Certificate",
    ],
  },
  {
    name: "Design Renewal & Legal Portfolio",
    shortDesc: "Form 4 extension for 5 additional years plus certified court copies for anti-piracy enforcement.",
    expandedDesc: "Filing Form 4 to extend copyright in design from 10 to 15 years, payment of statutory extension fees, drafting assignments or licensing agreements (Form 11/12), and obtaining certified legal copies for High Court and Commercial Court litigation.",
    price: "₹9,999",
    priceSub: "+ Govt Extension Fee (₹2,000 / ₹4,000)",
    badge: "Extension Suite",
    features: [
      "Form 4 Application for 5-Year Design Extension",
      "Statutory Renewal Fee Management",
      "Updating Register of Designs Entry",
      "Certified True Copies for Court Infringement Suits",
      "Assignment / Licensing Agreement Drafting",
      "Full 15-Year Commercial Monopoly Preservation",
    ],
  },
];

const RELATED_GUIDES = [
  "What is Design Registration in India: Eligibility & Requirements",
  "Locarno Classification List (Classes 1 to 32) for Design Registration",
  "Design Registration vs Patent vs Trademark: Key Differences Explained",
  "How to Prepare 7-View Design Drawings According to Patent Office Rules",
  "Step-by-Step Design Registration Procedure from Filing to Certificate",
  "How to Extend Design Registration Validity from 10 to 15 Years",
];

const RELATED_SERVICES_TAGS = [
  "Patent Registration",
  "Trademark Registration",
  "Copyright Registration",
  "Trademark Opposition",
  "Startup India DPIIT",
  "Barcode Registration",
];

const POPULAR_SEARCHES_TAGS = [
  "design registration online in india",
  "industrial design registration fees ip india",
  "how to register product design shape in india",
  "locarno classification design classes",
  "design registration process kolkata patent office",
  "form 1 design application drawing guidelines",
];

function DesignRegistrationGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          <strong className="font-semibold text-slate-950">Industrial Design Registration</strong> in India is governed by the <strong className="font-semibold text-slate-950">Designs Act, 2000</strong> and the <strong className="font-semibold text-slate-950">Designs Rules, 2001</strong>, administered by the Design Wing of the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) head-quartered in Kolkata.
        </p>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed mt-3">
          While patents protect technical mechanisms and trademarks protect brand names, Design Registration exclusively safeguards the <strong className="font-semibold text-slate-950">visual appearance, shape, configuration, pattern, ornament, or composition of lines and colors</strong> applied to any industrial article. Registering a design grants a statutory monopoly of <strong className="font-semibold text-slate-950">15 years</strong> (10 years initial + 5 years extension), preventing competitors from manufacturing, distributing, or importing cheap visual knock-offs.
        </p>
      </div>

      {/* Why Design Registration is Important */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Why is Industrial Design Registration Crucial for Businesses?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">
              15-Year Nationwide Market Exclusivity
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Exclusive statutory right to manufacture, market, and license products featuring your proprietary aesthetic contour, shape, or ornamentation across India.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
              <Gavel className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">
              Anti-Piracy Enforcement under Section 22
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Enables immediate court injunctions halting copycat sales and allows recovery of statutory damages up to ₹50,000 per violation or actual lost profits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-3xs">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">
              Balance-Sheet IP Asset &amp; Licensing Income
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Registered designs enhance company valuation during venture rounds, serve as collateral for credit, and generate recurring royalty revenues through licensing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1.5 hover:bg-[#FFFDF7] transition-all duration-300 cursor-pointer group space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-200 shadow-3xs">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-slate-950 group-hover:text-amber-950 transition-colors">
              Fast-Track Grant in 3 to 6 Months
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Unlike patents which take 2–4 years, design registration is one of the fastest IP grants in India, often obtaining certificate issuance in under 6 months.
            </p>
          </div>
        </div>
      </section>

      {/* What Visual Elements Qualify & Types */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. What Visual Elements Qualify for Design Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 2(d) of the Designs Act, 2000, protection applies strictly to the visual features of an article judged solely by the eye:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="flex items-center gap-2.5 text-indigo-700 font-semibold text-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-3xs">
                <Palette className="w-4.5 h-4.5" />
              </div>
              <span className="group-hover:text-indigo-950 transition-colors">Three-Dimensional (3D) Features</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Unique physical shapes and configurations: ergonomic furniture, consumer gadget contours, distinctive bottle structures, automobile curves, footwear soles, and jewelry models.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-2.5">
            <div className="flex items-center gap-2.5 text-purple-700 font-semibold text-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-3xs">
                <Sparkle className="w-4.5 h-4.5" />
              </div>
              <span className="group-hover:text-purple-950 transition-colors">Two-Dimensional (2D) Features</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Ornamental patterns, surface prints, wallpaper motifs, textile prints, graphic engravings, and color arrangements applied to packaging boxes or fabrics.
            </p>
          </div>
        </div>
      </section>

      {/* Locarno Classification Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Industry Sectors &amp; the Locarno Classification (Classes 1–32)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial designs in India are classified under the international <strong className="font-semibold text-slate-950">Locarno Classification System</strong> comprising 32 industrial classes. Examples of major registered industry sectors include:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Locarno Class</th>
                <th className="py-3 px-4">Industry Sector</th>
                <th className="py-3 px-4">Typical Product Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 02</td>
                <td className="py-3.5 px-4">Fashion &amp; Apparel</td>
                <td className="py-3.5 px-4">Clothing garments, footwear, headwear, bags &amp; accessories</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 06</td>
                <td className="py-3.5 px-4">Furniture &amp; Home Furnishings</td>
                <td className="py-3.5 px-4">Chairs, modular desks, beds, lighting fixtures, mirrors</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 09</td>
                <td className="py-3.5 px-4">Packages &amp; Containers</td>
                <td className="py-3.5 px-4">Cosmetic bottles, FMCG beverage cans, corrugated boxes, jars</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 11</td>
                <td className="py-3.5 px-4">Articles of Adornment &amp; Jewelry</td>
                <td className="py-3.5 px-4">Precious rings, bracelets, medallions, ornamental brooches</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 12</td>
                <td className="py-3.5 px-4">Means of Transport &amp; Vehicles</td>
                <td className="py-3.5 px-4">Electric scooters, automobile dashboards, alloy wheels, bicycles</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 14</td>
                <td className="py-3.5 px-4">Telecommunications &amp; Electronics</td>
                <td className="py-3.5 px-4">Smartphones, smartwatches, wireless earbuds, laptop casings</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Class 23</td>
                <td className="py-3.5 px-4">Sanitary, Heating &amp; Drainage</td>
                <td className="py-3.5 px-4">Luxury bath fittings, designer faucets, water purifiers, air vents</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Registrability Criteria */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Statutory Criteria for Design Registrability in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 4 and Section 5 of the Designs Act, 2000, an industrial design must meet the following mandatory legal criteria:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Requirement</th>
                <th className="py-3 px-4">Legal Definition</th>
                <th className="py-3 px-4">How to Ensure Statutory Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Absolute Novelty</td>
                <td className="py-3.5 px-4">The design must be new and not disclosed publicly prior to filing</td>
                <td className="py-3.5 px-4">Conduct prior design search; never exhibit or sell the product before filing Form 1.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Individual Character</td>
                <td className="py-3.5 px-4">Creates a distinctly different overall visual impression from existing designs</td>
                <td className="py-3.5 px-4">Ensure prominent aesthetic features differentiate it from common trade variants.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Applied to an Article</td>
                <td className="py-3.5 px-4">Must be applied to a physical, manufactured, or handicraft product</td>
                <td className="py-3.5 px-4">Cannot protect abstract 2D drawings; must be embodied in a commercial article.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Non-Functional Aesthetic</td>
                <td className="py-3.5 px-4">Aesthetic appeal must not be dictated purely by mechanical function</td>
                <td className="py-3.5 px-4">Focus on artistic styling; pure mechanical linkages must be protected by Patents.</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Public Order &amp; Morality</td>
                <td className="py-3.5 px-4">Must not be scandalous, contrary to public order or national security</td>
                <td className="py-3.5 px-4">Cannot depict prohibited national emblems, flags, or offensive materials.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Official Fee Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Official Government Fee Schedule (First Schedule of Design Rules)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Design Rules provide substantial government fee subsidies for individuals, registered MSMEs, and recognized startups:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Statutory Form</th>
                <th className="py-3 px-4">Purpose</th>
                <th className="py-3 px-4">Natural Person / MSME / Startup</th>
                <th className="py-3 px-4">Large Corporate / Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 1</td>
                <td className="py-3.5 px-4">Application for Registration of Design</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹4,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 2</td>
                <td className="py-3.5 px-4">Reciprocal Application under Paris Convention (Priority)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹1,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹4,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 4</td>
                <td className="py-3.5 px-4">Extension of Copyright in Design (Years 11 to 15)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹2,000</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹4,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 11 / 12</td>
                <td className="py-3.5 px-4">Recordal of Assignment / License Transfer</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹500</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹2,000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 23</td>
                <td className="py-3.5 px-4">Certified True Copy for Court Injunction Suits</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">₹500</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">₹2,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mandatory Technical Drawing Specifications */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Mandatory 7-Angle Orthographic Drawing Guidelines
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Patent Office rejects applications with incomplete or unclear views. High-quality CAD drawings or photographs must depict:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-800 font-normal pt-1">
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">1. Perspective 3D View</div>
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">2. Front Elevation</div>
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">3. Rear Elevation</div>
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">4. Top Plan View</div>
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">5. Bottom Plan View</div>
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">6. Left Side Elevation</div>
          <div className="p-3 bg-white hover:bg-[#FAF9FF] hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer rounded-xl border border-slate-200/80 text-center font-medium">7. Right Side Elevation</div>
          <div className="p-3 bg-purple-50/80 hover:bg-purple-100/70 hover:border-purple-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer text-purple-900 rounded-xl border border-purple-200/80 text-center font-semibold">Clean White Background</div>
        </div>

        <p className="text-xs text-slate-800 leading-relaxed font-normal pt-1">
          * <strong className="font-semibold text-slate-950">Image Resolution Specs:</strong> Minimum 160x160 pixels to maximum 1600x1600 pixels, saved in high-contrast JPG or PDF format on neutral plain white background without shadow gradients, text watermarks, or measurement dimensions.
        </p>
      </section>

      {/* 5-Phase Procedure & Timeline */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Step-by-Step 5-Phase Design Registration Procedure
        </h2>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Phase 1: Pre-Filing Preparation &amp; Novelty Search (Weeks 1–2)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Exhaustive novelty audit on the IP India Design Registry database to verify no prior identical or confusingly similar designs have been published globally.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Phase 2: Online Application Lodgment (Form 1) (Day 1)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Filing Form 1, drafting Statement of Novelty and disclaimers, uploading standard 7-angle technical representations, and generating official Application Number.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Phase 3: Formality Check &amp; Substantive Examination (Months 1–3)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The Kolkata Design Office verifies document formalities (2–4 weeks) and conducts substantive examination for novelty and individual character against existing designs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Phase 4: Design Journal Publication &amp; Opposition Period (Month 4)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The accepted design is published in the official Design Journal. Interested parties have a statutory window to file objections based on prior publication.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5C3BFF] hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FAF9FF] transition-all duration-200 cursor-pointer group">
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Phase 5: Registration &amp; Official Certificate Issuance (Month 5–6)</h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              The Controller General issues the official Design Registration Certificate. Protection takes retroactive effect from the original filing date for 10 years.
            </p>
          </div>
        </div>
      </section>

      {/* Penalties for Infringement & Piracy */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Statutory Penalties for Design Piracy &amp; Infringement (Section 22)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Section 22 of the Designs Act, 2000 makes design piracy an actionable legal wrong. The registered proprietor can pursue substantial civil and criminal remedies:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Statutory Remedy / Penalty</th>
                <th className="py-3 px-4">Prescribed Quantum / Order</th>
                <th className="py-3 px-4">Enforcement Mechanism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Statutory Damages (Section 22(2)(a))</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Up to ₹50,000 per violation</td>
                <td className="py-3.5 px-4">Recoverable as a civil debt from the infringer without proving actual loss</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Actual Damages &amp; Accounts of Profit</td>
                <td className="py-3.5 px-4">Calculated based on actual commercial losses</td>
                <td className="py-3.5 px-4">Infringer is ordered to surrender all gross profits made from the pirated design</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Interim &amp; Permanent Injunctions</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">Immediate court stay order</td>
                <td className="py-3.5 px-4">Halts manufacturing, advertising, retailing, and online sales immediately</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Destruction of Counterfeit Goods</td>
                <td className="py-3.5 px-4">Court-supervised destruction</td>
                <td className="py-3.5 px-4">Destruction of all infringing inventory, moulds, dies, and manufacturing plates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Validity, Renewal & Restoration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Validity, 5-Year Renewal (Form 4), and Restoration of Lapsed Designs
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Period</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Protection Status</th>
                <th className="py-3 px-4">Mandatory Statutory Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Initial Registration</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">10 Years</td>
                <td className="py-3.5 px-4">Fully Protected</td>
                <td className="py-3.5 px-4">No renewal needed; maintain address compliance</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Renewal Window</td>
                <td className="py-3.5 px-4">Year 9 to 10</td>
                <td className="py-3.5 px-4 text-purple-700 font-medium">Eligible for Extension</td>
                <td className="py-3.5 px-4">File Form 4 with ₹2,000 / ₹4,000 fee before 10-year expiry</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Extended Term</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">+5 Years (Total 15 Years)</td>
                <td className="py-3.5 px-4">Fully Protected</td>
                <td className="py-3.5 px-4">Maximum term permitted under the Designs Act, 2000</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-rose-700">Post-15 Years</td>
                <td className="py-3.5 px-4">Expired</td>
                <td className="py-3.5 px-4 text-rose-700 font-semibold">Public Domain</td>
                <td className="py-3.5 px-4">Design enters public domain; non-renewable under Indian law</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-800 leading-relaxed font-normal pt-1">
          * <strong className="font-semibold text-slate-950">Restoration of Lapsed Designs:</strong> If Form 4 renewal was missed before 10 years, the design lapses. It can be restored within <strong className="font-semibold text-slate-950">6 months</strong> from lapse upon filing a restoration petition and paying overdue renewal fees plus ₹500 late surcharge. After 6 months, restoration is permanently barred.
        </p>
      </section>

      {/* Cancellation of Design */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Cancellation of a Registered Design (Section 19)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 19 of the Designs Act, 2000, any interested person can file a petition before the Controller to cancel a registered design on the following grounds:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">1. Lack of Novelty:</strong>
            The design was previously registered in India or disclosed anywhere in the world prior to the filing date.
          </div>
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">2. Prior Publication:</strong>
            The design was published in catalogs, advertisements, or public exhibitions before the application priority date.
          </div>
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">3. Not Registrable under the Act:</strong>
            The design is purely functional, non-distinctive, or scandalous/contrary to public order.
          </div>
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">4. Ownership Fraud:</strong>
            The registrant was not the true author or lawful assignee of the original industrial design.
          </div>
        </div>
      </section>

      {/* Design vs Trademark vs Copyright */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. Comparison: Design Registration vs Trademark vs Copyright
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Design Registration</th>
                <th className="py-3 px-4">Trademark Registration</th>
                <th className="py-3 px-4">Copyright Protection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">What It Protects</td>
                <td className="py-3.5 px-4">Aesthetic shape, ornamentation &amp; external form</td>
                <td className="py-3.5 px-4">Brand identity, name, logo &amp; origin identifier</td>
                <td className="py-3.5 px-4">Original artistic, literary, and musical creations</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Total Validity</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">15 Years (10 + 5 years renewal)</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">10 Years (Renewable indefinitely)</td>
                <td className="py-3.5 px-4 font-semibold text-blue-700">Author&apos;s Life + 60 Years</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Processing Time</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Fast (3 to 6 months)</td>
                <td className="py-3.5 px-4">Medium (6 to 12 months)</td>
                <td className="py-3.5 px-4">Medium (3 to 6 months)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Scope of Right</td>
                <td className="py-3.5 px-4">Specific visual design on specific product class</td>
                <td className="py-3.5 px-4">Broad brand protection across commercial classes</td>
                <td className="py-3.5 px-4">Original expression across all media formats</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Post-Registration Compliance Checklist */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. Post-Registration Compliance Checklist for Design Owners
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Compliance Requirement</th>
                <th className="py-3 px-4">Timeline</th>
                <th className="py-3 px-4">Action Required</th>
                <th className="py-3 px-4">Consequences of Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Update Address Changes</td>
                <td className="py-3.5 px-4">Within 3 months</td>
                <td className="py-3.5 px-4">Notify Design Registry of address changes</td>
                <td className="py-3.5 px-4">Missed official cancellation or hearing notices</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Manufacturing Records</td>
                <td className="py-3.5 px-4">Throughout 15 years</td>
                <td className="py-3.5 px-4">Preserve production batches, invoices, and molds</td>
                <td className="py-3.5 px-4">Difficulty calculating lost profit damages in court</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Market Infringement Audits</td>
                <td className="py-3.5 px-4">Quarterly</td>
                <td className="py-3.5 px-4">Monitor e-commerce platforms and wholesale markets</td>
                <td className="py-3.5 px-4">Dilution of exclusivity and lost commercial revenue</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Form 4 Extension Lodgment</td>
                <td className="py-3.5 px-4 font-semibold text-rose-700">Year 9 to 10</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Pay 5-year extension fees before year 10 ends</td>
                <td className="py-3.5 px-4 text-rose-700 font-semibold">Permanent lapse and loss of monopoly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Excluded Designs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          13. Designs Excluded from the Scope of Registration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">• Purely Functional Features:</strong>
            Designs serving only a mechanical or structural function without aesthetic value (e.g. screws, nuts, bolts, internal machine gears).
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">• Non-Product &amp; Abstract Concepts:</strong>
            Computer algorithms, abstract concepts, architectural layouts, or designs not applied to a physical article.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">• Protected Emblems &amp; National Insignia:</strong>
            Designs incorporating national flags, official government emblems, or symbols barred under the Emblems and Names Act, 1950.
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10 hover:-translate-y-1 hover:bg-rose-50/20 transition-all duration-300 cursor-pointer group text-xs sm:text-[13px] text-slate-900 font-normal">
            <strong className="font-semibold text-rose-950 block mb-1">• Commonly Known Shapes:</strong>
            Generic geometric forms or everyday configurations widely used across industry lacking individual character.
          </div>
        </div>
      </section>

      {/* Why Choose Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          14. Why Choose Merrafilings for Industrial Design Registration?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#5C3BFF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#5C3BFF] group-hover:text-white group-hover:border-[#5C3BFF] transition-all duration-200 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-indigo-950 transition-colors">Expert CAD 7-View Drafting</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Our in-house IP draughtsmen format your product images into flawless standard orthographic views complying with Patent Office standards.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7052FF] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1.5 hover:bg-[#FAF9FF] transition-all duration-300 cursor-pointer group space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7052FF] group-hover:text-white group-hover:border-[#7052FF] transition-all duration-200 shadow-2xs">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-purple-950 transition-colors">Fast-Track Kolkata Prosecution</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              Direct liaison with the central Design Wing in Kolkata ensures immediate clearance of formality defects and rapid certificate issuance.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F2FBF7] transition-all duration-300 cursor-pointer group space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00B074] group-hover:text-white group-hover:border-[#00B074] transition-all duration-200 shadow-2xs">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-950 group-hover:text-emerald-950 transition-colors">Section 22 Litigation Readiness</h3>
            <p className="text-xs text-slate-800 font-normal leading-relaxed">
              We provide Form 23 certified true copies and draft formal cease-and-desist notices to protect your designs against market copycats.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const FAQ_COL_1 = [
  {
    q: "Can a purely functional product feature be registered under the Designs Act?",
    a: "No. Under Section 2(d) of the Designs Act 2000, features dictated solely by functional, mechanical, or constructional utility are excluded. Functional mechanisms must be protected under the Patents Act, 1970.",
  },
  {
    q: "How long is an industrial design registration valid in India?",
    a: "An industrial design registration is initially valid for 10 years from the registration filing date. It can be extended for an additional period of 5 years by filing Form 4 before the expiration of the initial 10-year period, resulting in a total statutory protection of 15 years.",
  },
  {
    q: "What is the requirement of 'Novelty' in design registration?",
    a: "To qualify for registration, a design must be significantly new and original. It must not have been disclosed to the public anywhere in India or abroad through prior publication, exhibition, or commercial sale prior to the filing date.",
  },
  {
    q: "Can a foreigner or foreign company register a design in India?",
    a: "Yes. Any foreign individual or international corporate entity can apply for design registration in India. Under the Paris Convention, foreign applicants can also claim priority within six months from their home country filing date.",
  },
  {
    q: "What remedies are available if a competitor copies my registered design?",
    a: "Under Section 22 of the Designs Act, the registered proprietor can file an infringement suit in a District Court or High Court to obtain an interim injunction halting production and sales, and claim statutory damages up to ₹50,000 per violation or actual commercial lost profits.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Can I register a logo or trade brand under the Designs Act?",
    a: "No. A trademark, brand logo, or artistic emblem used to indicate commercial trade source must be registered under the Trade Marks Act 1999 or Copyright Act 1957. The Designs Act only protects the visual physical shape applied to an article of manufacture.",
  },
  {
    q: "How long does it take to obtain a Design Registration Certificate in India?",
    a: "Design registration is one of the fastest IP registration processes in India. Under standard timelines, applications are examined and registered within 3 to 6 months from the filing date, provided no substantive objections are raised by the examiner.",
  },
  {
    q: "Where is the Design Registry located in India?",
    a: "The central Design Wing of the Patent Office is located in Kolkata. While applications can be submitted online via the IP India portal or at regional patent offices (Delhi, Mumbai, Chennai), the examination and issuance of certificates are centralized in Kolkata.",
  },
  {
    q: "Can multiple designs be filed in a single application?",
    a: "No. Each design requires a separate application on Form 1 with its dedicated Locarno class and fee. However, a set of articles (e.g. a matching dining cutlery set or tea set) can be registered together if they share the same aesthetic design theme.",
  },
  {
    q: "Can a registered design be canceled by a competitor?",
    a: "Yes. Under Section 19 of the Designs Act, any interested person can file a petition for cancellation before the Controller on grounds that the design was not novel, was previously published in India or abroad, or does not constitute patentable design subject matter.",
  },
];

export default function DesignRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Designs Act, 2000 & Design Rules 2001 Statutory Protection"
      heroTitle={
        <>
          <span>Industrial Design </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Registration Online
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Protect the aesthetic shape, configuration, pattern, and ornamental contours of your commercial products. Secure 15 years of exclusive commercial monopoly under the Designs Act, 2000."
      formTitle="Design Registration Advisory"
      formSubtitle="Have a unique product design? Consult our registered IP attorneys for novelty search, 7-angle drawing preparation, and fast-track Kolkata filing."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">industrial design registration fees.</span>
        </>
      }
      pricingSubtitle="Select your requirement for design prior-art search, standard Form 1 filing, or 5-year extension."
      breadcrumbCurrent="Design Registration"
      guideTitle="Industrial Design Registration in India - Form 1 & Locarno Classification Guide"
      guideContent={<DesignRegistrationGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqSubtitle="Frequently asked questions about design eligibility, Locarno classes, 7-view drawing rules, and 15-year validity."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
