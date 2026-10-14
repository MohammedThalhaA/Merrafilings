"use client";

import React, { useState } from "react";
import Link from "next/link";
import TrademarkGuideLayout from "@/components/TrademarkGuideLayout";
import {
  Layers,
  Search,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Sparkles,
  ArrowRight,
  Info,
  Package,
  Briefcase,
  HelpCircle,
} from "lucide-react";

const ALL_45_CLASSES = [
  // Goods (Classes 1-34)
  { id: 1, type: "Goods", title: "Class 1: Industrial Chemicals & Raw Plastics", desc: "Chemicals for industry, science, photography, agriculture, horticulture, forestry; unprocessed artificial resins, manures, industrial adhesives." },
  { id: 2, type: "Goods", title: "Class 2: Paints, Varnishes & Anti-Corrosives", desc: "Paints, varnishes, lacquers; preservatives against rust and deterioration of wood; colorants, mordants; raw natural resins." },
  { id: 3, type: "Goods", title: "Class 3: Cosmetics, Soaps & Cleaning Preparations", desc: "Non-medicated cosmetics and toiletry preparations; perfumes, essential oils, bleaching and cleaning preparations, hair lotions, dentifrices." },
  { id: 4, type: "Goods", title: "Class 4: Lubricants, Fuels & Industrial Oils", desc: "Industrial oils and greases; lubricants; dust absorbing and binding compositions; fuels (including motor spirit) and illuminants; candles and wicks." },
  { id: 5, type: "Goods", title: "Class 5: Pharmaceuticals & Medical Dietary Products", desc: "Pharmaceuticals, medical and veterinary preparations; sanitary preparations; dietetic food and dietary supplements for medical use, disinfectants." },
  { id: 6, type: "Goods", title: "Class 6: Metals, Hardware & Metal Building Materials", desc: "Common metals and their alloys; metal ores; metal building materials; small items of metal hardware; safes, metal pipes and tubes." },
  { id: 7, type: "Goods", title: "Class 7: Machines, Motors & Power Tools", desc: "Machines, machine tools, power-operated tools; motors and engines (except for land vehicles); machine coupling and transmission components; agricultural implements." },
  { id: 8, type: "Goods", title: "Class 8: Hand Tools, Cutlery & Razors", desc: "Hand-operated tools and implements; cutlery, side arms; razors, shavers, electric clippers." },
  { id: 9, type: "Goods", title: "Class 9: Software, Electronics & Mobile Apps", desc: "Computer software, mobile applications, computers, telecommunications apparatus, electronic devices, audio/video equipment, optical and measuring instruments." },
  { id: 10, type: "Goods", title: "Class 10: Medical Devices & Surgical Instruments", desc: "Surgical, medical, dental, and veterinary apparatus and instruments; artificial limbs, eyes and teeth; orthopedic articles; diagnostic equipment." },
  { id: 11, type: "Goods", title: "Class 11: Lighting, Heating & Sanitary Fixtures", desc: "Apparatus and installations for lighting, heating, cooling, steam generating, cooking, drying, ventilating, water supply and sanitary purposes." },
  { id: 12, type: "Goods", title: "Class 12: Vehicles & Locomotion Apparatus", desc: "Vehicles; apparatus for locomotion by land, air, or water; automotive parts, bicycles, electric vehicles, automobile accessories." },
  { id: 13, type: "Goods", title: "Class 13: Firearms & Fireworks", desc: "Firearms; ammunition and projectiles; explosives; fireworks." },
  { id: 14, type: "Goods", title: "Class 14: Jewelry, Precious Stones & Watches", desc: "Precious metals and their alloys; jewelry, precious and semi-precious stones; horological and chronometric instruments (watches and clocks)." },
  { id: 15, type: "Goods", title: "Class 15: Musical Instruments", desc: "Musical instruments; music stands and stands for musical instruments; conductors' batons." },
  { id: 16, type: "Goods", title: "Class 16: Stationery, Paper Goods & Books", desc: "Paper and cardboard; printed matter, books, magazines; bookbinding material; photographs; stationery and office requisites; artists' materials." },
  { id: 17, type: "Goods", title: "Class 17: Rubber, Plastics & Insulating Materials", desc: "Unprocessed and semi-processed rubber, gutta-percha, gum, asbestos, mica; plastics and resins in extruded form; packing, stopping, and insulating materials." },
  { id: 18, type: "Goods", title: "Class 18: Leather Goods, Bags & Luggage", desc: "Leather and imitations of leather; animal skins and hides; luggage and carrying bags; umbrellas and parasols; walking sticks; whips, harness and saddlery." },
  { id: 19, type: "Goods", title: "Class 19: Non-Metallic Building Materials", desc: "Materials, not of metal, for building and construction; rigid pipes, not of metal, for building; asphalt, pitch, tar, and bitumen; cement, bricks, stone." },
  { id: 20, type: "Goods", title: "Class 20: Furniture, Mirrors & Containers", desc: "Furniture, mirrors, picture frames; containers, not of metal, for storage or transport; unworked or semi-worked bone, horn, whalebone, or mother-of-pearl." },
  { id: 21, type: "Goods", title: "Class 21: Kitchenware, Glassware & Cookware", desc: "Household or kitchen utensils and containers; cookware and tableware, except forks, knives, and spoons; combs and sponges; brushes; glassware, porcelain." },
  { id: 22, type: "Goods", title: "Class 22: Ropes, Tents, Sails & Packaging Sacks", desc: "Ropes and string; nets; tents and tarpaulins; awnings of textile or synthetic materials; sails; sacks for the transport and storage of materials in bulk." },
  { id: 23, type: "Goods", title: "Class 23: Yarns & Threads for Textiles", desc: "Yarns and threads for textile use." },
  { id: 24, type: "Goods", title: "Class 24: Textiles, Bed Linen & Household Fabrics", desc: "Textiles and substitutes for textiles; household linen; curtains of textile or plastic; bed covers, table covers." },
  { id: 25, type: "Goods", title: "Class 25: Clothing, Footwear & Headwear", desc: "Clothing, footwear, headwear; shirts, dresses, trousers, jackets, sports apparel, shoes, boots, caps, hats." },
  { id: 26, type: "Goods", title: "Class 26: Lace, Ribbons, Embroidery & Buttons", desc: "Lace, braid and embroidery, and haberdashery ribbons and bows; buttons, hooks and eyes, pins and needles; artificial flowers; hair decorations." },
  { id: 27, type: "Goods", title: "Class 27: Carpets, Rugs & Floor Coverings", desc: "Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings, not of textile." },
  { id: 28, type: "Goods", title: "Class 28: Toys, Games & Sporting Articles", desc: "Games, toys, and playthings; video game apparatus; gymnastic and sporting articles; decorations for Christmas trees." },
  { id: 29, type: "Goods", title: "Class 29: Dairy, Meat, Edible Oils & Processed Foods", desc: "Meat, fish, poultry, and game; meat extracts; preserved, frozen, dried, and cooked fruits and vegetables; jellies, jams, compotes; eggs; milk, cheese, butter, yogurt; edible oils." },
  { id: 30, type: "Goods", title: "Class 30: Coffee, Tea, Spices, Bakery & Confectionery", desc: "Coffee, tea, cocoa, and substitutes therefor; rice, pasta, and noodles; tapioca and sago; flour and preparations made from cereals; bread, pastries, and confectionery; chocolate; spices." },
  { id: 31, type: "Goods", title: "Class 31: Fresh Produce, Agricultural Seeds & Live Animals", desc: "Raw and unprocessed agricultural, aquacultural, horticultural, and forestry products; raw and unprocessed grains and seeds; fresh fruits and vegetables, fresh herbs; natural plants and flowers; live animals; foodstuffs and beverages for animals." },
  { id: 32, type: "Goods", title: "Class 32: Non-Alcoholic Beverages, Fruit Juices & Beers", desc: "Beers; non-alcoholic beverages; mineral and aerated waters; fruit beverages and fruit juices; syrups and other non-alcoholic preparations for making beverages." },
  { id: 33, type: "Goods", title: "Class 33: Alcoholic Beverages (Except Beer)", desc: "Alcoholic beverages, except beers; wines, spirits, liqueurs, whisky, vodka, rum." },
  { id: 34, type: "Goods", title: "Class 34: Tobacco & Smokers' Articles", desc: "Tobacco and tobacco substitutes; cigarettes, cigars; electronic cigarettes and oral vaporizers for smokers; smokers' articles; matches." },

  // Services (Classes 35-45)
  { id: 35, type: "Services", title: "Class 35: Advertising, Retail, E-Commerce & Business Management", desc: "Advertising; business management, organization, and administration; office functions; wholesale and retail services; e-commerce online retail marketplaces." },
  { id: 36, type: "Services", title: "Class 36: Financial, Banking, Real Estate & Insurance", desc: "Financial, monetary, and banking services; insurance services; real estate affairs; investment advisory, cryptocurrency exchange, fintech solutions." },
  { id: 37, type: "Services", title: "Class 37: Construction, Repair & Equipment Installation", desc: "Construction services; installation and repair services; mining extraction, oil and gas drilling; vehicle maintenance and overhaul." },
  { id: 38, type: "Services", title: "Class 38: Telecommunications, Broadcasting & Data Transmission", desc: "Telecommunications services; internet access broadcasting, cellular mobile connectivity, radio and television transmission, streaming infrastructure." },
  { id: 39, type: "Services", title: "Class 39: Transport, Logistics, Warehousing & Travel", desc: "Transport; packaging and storage of goods; travel arrangement; freight forwarding, courier delivery, passenger transport, supply chain logistics." },
  { id: 40, type: "Services", title: "Class 40: Treatment of Materials & Custom Manufacturing", desc: "Treatment of materials; recycling of waste and trash; air purification and water treatment; printing services; food and drink preservation; custom manufacturing." },
  { id: 41, type: "Services", title: "Class 41: Education, Training, Entertainment & Publishing", desc: "Education; providing of training; entertainment; sporting and cultural activities; digital publishing, coaching, film and music production, e-learning platforms." },
  { id: 42, type: "Services", title: "Class 42: IT Services, Software Development & Cloud Computing", desc: "Scientific and technological services and research and design relating thereto; industrial analysis; design and development of computer hardware and software; SaaS, cloud hosting." },
  { id: 43, type: "Services", title: "Class 43: Restaurants, Cafes, Catering & Hospitality", desc: "Services for providing food and drink; temporary accommodation; restaurants, cafes, cloud kitchens, hotels, resorts, event catering." },
  { id: 44, type: "Services", title: "Class 44: Medical Clinics, Wellness, Beauty & Healthcare", desc: "Medical services; veterinary services; hygienic and beauty care for human beings or animals; agriculture, aquaculture, horticulture, and forestry services; hospitals, salons, spas." },
  { id: 45, type: "Services", title: "Class 45: Legal Services, Security & Personal Investigations", desc: "Legal services; security services for the physical protection of tangible property and individuals; personal and social services rendered by others to meet the needs of individuals; domain name registration." },
];

export default function ListOfClassesTrademarkPage() {
  const [filterType, setFilterType] = useState<"All" | "Goods" | "Services">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = ALL_45_CLASSES.filter((c) => {
    const matchesFilter = filterType === "All" || c.type === filterType;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `class ${c.id}`.includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <TrademarkGuideLayout
      currentSlug="list-of-classes-for-trademark-registration"
      title="List Of Classes For Trademark Registration in India (Classes 1 to 45)"
      breadcrumbLabel="List of Trademark Classes"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          When applying for trademark registration in India, identifying the precise <strong className="font-semibold text-slate-900">Trademark Class</strong> is mandatory. India conforms strictly to the international <strong className="font-semibold text-slate-900">Nice Classification System</strong>, established under the Nice Agreement (1957) and updated periodically by the World Intellectual Property Organization (WIPO).
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-light">
          The Nice Classification system groups commercial activities into <strong className="font-medium text-slate-800">45 distinct classes</strong>. Classes 1 through 34 encompass physical goods and tangible commodities, while Classes 35 through 45 cover commercial and professional services. Trademark rights in India are strictly class-specific: securing a trademark in Class 25 (Apparel) does not inherently protect you against a business using the same mark in Class 43 (Restaurants) unless your mark qualifies as a &quot;Well-Known Trademark&quot; under Section 11(6) of the Trade Marks Act 1999.
        </p>
      </div>

      {/* Interactive Class Directory Section */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
              Complete Directory of All 45 Trademark Classes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">
              Search or filter through the complete Nice Classification catalogue:
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl self-start sm:self-auto text-xs font-medium">
            <button
              onClick={() => setFilterType("All")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterType === "All"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All (45)
            </button>
            <button
              onClick={() => setFilterType("Goods")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterType === "Goods"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Goods (1-34)
            </button>
            <button
              onClick={() => setFilterType("Services")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterType === "Services"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Services (35-45)
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product, service, or keyword (e.g. software, clothing, tea, banking)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#155EEF] transition-all"
          />
        </div>

        {/* Classes Table / Cards List */}
        <div className="space-y-3 pt-2">
          {filteredClasses.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs sm:text-sm">
              No classes matched your search &quot;{searchQuery}&quot;. Please consult our IP attorneys for custom classification.
            </div>
          ) : (
            filteredClasses.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#155EEF]/60 hover:shadow-xs transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md ${
                        item.type === "Goods"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-purple-50 text-purple-700"
                      }`}
                    >
                      {item.type}
                    </span>
                    <h3 className="font-medium text-slate-900 text-sm sm:text-[15px]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400">Nice Classification</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Section 2: Single-Class vs Multi-Class Filing */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Single-Class vs. Multi-Class Trademark Applications
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Applicants operating across multiple commercial categories can choose between submitting multiple single-class Form TM-A filings or lodging a consolidated multi-class application:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Key Dimension</th>
                <th className="p-3.5 sm:p-4">Single-Class Application</th>
                <th className="p-3.5 sm:p-4">Multi-Class Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Number of Classes</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Strictly 1 class per application</td>
                <td className="p-3.5 sm:p-4 text-purple-700 font-medium">Two or more classes under one Form TM-A</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Statutory Government Fee</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Calculated per class (₹4,500 / ₹9,000)</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Equal to sum of classes (₹4,500 × N / ₹9,000 × N)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Risk of Opposition Delay</td>
                <td className="p-3.5 sm:p-4 text-emerald-600 font-medium">
                  Independent: An objection in one class does not hold up your other classes.
                </td>
                <td className="p-3.5 sm:p-4 text-rose-600">
                  Shared: An objection in one single class can delay registration across all included classes.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">Administrative Tracking</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Separate application numbers per class</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Single application number for convenient docketing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: How to Choose the Correct Class */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Strategic Roadmap: How to Select the Right Classes for Your Brand
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-light text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">1. Analyze Core vs. Auxiliary Revenue</span>
            <p className="text-slate-500 text-xs">
              Separate your primary product (e.g. coffee beans in Class 30) from your retail experience or distribution channel (e.g. cafe retail in Class 43).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">2. Anticipate 3-Year Product Roadmaps</span>
            <p className="text-slate-500 text-xs">
              If your clothing brand (Class 25) plans to launch fragrances and cosmetics (Class 3) or footwear within 2 years, file proactively to lock priority.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">3. Never Rely Exclusively on Class Headings</span>
            <p className="text-slate-500 text-xs">
              Nice class headings only provide high-level summaries. Detailed item specifications must be curated during Form TM-A drafting to avoid Registry objections.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">4. Cross-Examine Overlapping Digital Services</span>
            <p className="text-slate-500 text-xs">
              Tech startups frequently require dual filing: Class 9 for the mobile app software download and Class 42 for SaaS cloud delivery services.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Fees Based on Classes Table */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          Government Fees by Number of Classes
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Government statutory e-filing fees multiply linearly by the number of classes designated:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-800 font-medium">
                <th className="p-3.5 sm:p-4">Number of Classes</th>
                <th className="p-3.5 sm:p-4">Individual / DPIIT Startup / MSME Fee</th>
                <th className="p-3.5 sm:p-4">Company / LLP / Firm Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">1 Class (Single Class)</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹4,500</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹9,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">2 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹9,000</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹18,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">3 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹13,500</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹27,000</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-normal text-slate-900">4 Classes</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">₹18,000</td>
                <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹36,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </TrademarkGuideLayout>
  );
}
