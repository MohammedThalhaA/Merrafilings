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
} from "lucide-react";

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "15 Years Exclusive Statutory Monopoly under Designs Act, 2000" },
  { icon: <Palette className="w-4 h-4" />, text: "Protects Aesthetic Shapes, Configurations, Patterns & Visual Dress" },
  { icon: <Layers className="w-4 h-4" />, text: "International Locarno Classification Compliance (Classes 1 to 32)" },
  { icon: <FileText className="w-4 h-4" />, text: "7-Angle Standard Orthographic Drawing Preparation (Front, Top, 3D)" },
  { icon: <Scale className="w-4 h-4" />, text: "Enables Civil Damages & Criminal Injunctions against Copycats" },
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
          While patents protect functional technological inventions and trademarks protect brand names, Design Registration exclusively safeguards the <strong className="font-semibold text-slate-950">aesthetic and visual features</strong>—including the shape, configuration, pattern, ornament, or composition of lines and colors applied to any article by an industrial process. Registering a design grants a statutory monopoly of <strong className="font-semibold text-slate-950">15 years</strong> (10 years initial + 5 years extension), preventing competitors from manufacturing or marketing cheap visual knock-offs.
        </p>
      </div>

      {/* Section 1: What Can Be Registered */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What Visual Elements Qualify for Design Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 2(d) of the Designs Act, 2000, protection applies strictly to the visual features of an article judged solely by the eye:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
              <Palette className="w-4.5 h-4.5" />
              <span>Three-Dimensional (3D) Features</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Unique physical shapes and configurations: ergonomic furniture, consumer gadget contours, distinctive bottle structures, automobile curves, footwear soles, and jewelry models.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <Sparkle className="w-4.5 h-4.5" />
              <span>Two-Dimensional (2D) Features</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal leading-relaxed">
              Ornamental patterns, surface prints, wallpaper motifs, textile prints, graphic engravings, and color arrangements applied to packaging boxes or fabrics.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Locarno Classification Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Industry Sectors &amp; the Locarno Classification (Classes 1–32)
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Industrial designs in India are categorized under the international <strong className="font-semibold text-slate-950">Locarno Classification System</strong> comprising 32 industrial classes:
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

      {/* Section 3: Statutory Government Fee Schedule */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Official Government Fee Schedule (First Schedule of Design Rules)
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

      {/* Section 4: Design vs Patent vs Trademark Comparison */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Comparison: Design Registration vs Patent vs Trademark
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
            <thead className="bg-slate-50 text-slate-950 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Design Registration</th>
                <th className="py-3 px-4">Patent Registration</th>
                <th className="py-3 px-4">Trademark Registration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">What It Protects</td>
                <td className="py-3.5 px-4">Aesthetic shape, ornamentation &amp; external form</td>
                <td className="py-3.5 px-4">Functional mechanism, technical process &amp; working principle</td>
                <td className="py-3.5 px-4">Brand identity, name, logo, sound &amp; origin identifier</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Total Validity</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">15 Years (10 + 5 years renewal)</td>
                <td className="py-3.5 px-4 font-semibold text-purple-700">20 Years (Non-renewable)</td>
                <td className="py-3.5 px-4 font-semibold text-blue-700">10 Years (Renewable indefinitely)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-950">Processing Time</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">Fast (3 to 6 months)</td>
                <td className="py-3.5 px-4">Medium-Slow (1.5 to 3 years)</td>
                <td className="py-3.5 px-4">Medium (6 to 12 months)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Standard 7-View Drawing Guidelines */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Mandatory Technical Requirements for Design Drawings
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          The Patent Office rejects applications with incomplete or unclear views. High-quality CAD drawings or photographs must depict:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-800 font-normal pt-1">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">1. Perspective 3D View</div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">2. Front Elevation</div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">3. Rear Elevation</div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">4. Top Plan View</div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">5. Bottom Plan View</div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">6. Left Side Elevation</div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-medium">7. Right Side Elevation</div>
          <div className="p-3 bg-purple-50 text-purple-900 rounded-xl border border-purple-200/80 text-center font-semibold">Clean White Background</div>
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
