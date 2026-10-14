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
  Check,
  Clock,
  Scale,
  CheckCircle2,
  Globe2,
  TrendingUp,
  Layers,
  Zap,
  Briefcase,
  HelpCircle,
  CheckCircle,
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Music,
  Code,
  Film,
  Camera,
  Palette,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    q: "Can titles or names be copyrighted?",
    a: "Generally, titles, names, slogans, short phrases, or catchphrases cannot be copyrighted under Indian law. Copyright protects original creative expression and substantive content. If you want legal protection for a brand name, company title, or slogan, you should register it as a Trademark rather than a copyright.",
  },
  {
    q: "What is the difference between Copyright registration and Trademark registration?",
    a: "A Trademark protects commercial brand identifiers—such as brand names, logos, catchphrases, and distinctive product packaging—to indicate commercial origin and prevent consumer confusion. A Copyright protects original creative, literary, artistic, musical, dramatic, and technological works (such as books, songs, software code, and movies) to grant the creator exclusive commercial reproduction and licensing rights.",
  },
  {
    q: "How long is Copyright registration valid in India?",
    a: "For literary, dramatic, musical, and artistic works, copyright protection lasts for the entire lifetime of the original author plus 60 years after their demise (calculated from the calendar year following death). For cinematograph films, sound recordings, photographs, and posthumous publications, protection extends for 60 years from the date of formal publication.",
  },
];

const FAQ_COL_2 = [
  {
    q: "Is a Copyright obtained in India valid across the world?",
    a: "Yes. India is a signatory to the Berne Convention for the Protection of Literary and Artistic Works and the Universal Copyright Convention. By virtue of the International Copyright Order, creative works copyrighted in India receive automatic reciprocal legal protection across more than 180 member countries worldwide without needing individual filings in each country.",
  },
  {
    q: "What is the copyright registration cost in India?",
    a: "The statutory government fee for copyright filing begins at ₹500 for literary, dramatic, musical, artistic, and software works filed by individuals or startups. For cinematograph films and commercial sound recordings, government fees range from ₹2,000 to ₹5,000 depending on the nature of the application. Professional drafting and filing assistance is provided by Merrafilings starting from ₹1,999.",
  },
  {
    q: "What are the core benefits of statutory copyright registration?",
    a: "Registration provides conclusive legal prima facie evidence of ownership in court (Section 48 of Copyright Act). It empowers you to file civil infringement suits, claim statutory damages, recover lost royalties, seek court injunctions against copycats, and initiate criminal anti-piracy raids through the police.",
  },
];

const FAQ_EXTRA_COL_1 = [
  {
    q: "How long does it take to obtain the copyright registration certificate?",
    a: "The standard statutory process typically takes 3 to 6 months. Once Form XIV is lodged, there is a mandatory statutory 30-day waiting period for third-party objections. If no objections or discrepancies are raised by the Copyright Examiner, the certificate is granted upon formal approval by the Registrar of Copyrights.",
  },
  {
    q: "Is it necessary to publish a work before copyrighting it?",
    a: "No, both unpublished and published works can be copyrighted in India. In fact, registering unpublished manuscripts, secret screenplays, proprietary source code, or unreleased song demos is highly recommended to establish an indisputable priority timestamp of creation before sharing the work with collaborators or producers.",
  },
  {
    q: "Can a copyright registration application get rejected?",
    a: "An application can face objections or rejection if it lacks originality, copies existing published works, lacks proper No-Objection Certificates (NOCs) from co-creators or hired developers, or fails to satisfy procedural documentation rules. Working with experienced IP attorneys at Merrafilings ensures your application complies with all statutory guidelines.",
  },
];

const FAQ_EXTRA_COL_2 = [
  {
    q: "Who can obtain Copyright registration?",
    a: "Any original creator, author, software programmer, composer, filmmaker, artist, or photographer can register copyright. In the case of works created under employment ('work made for hire') or commissioned by a corporate entity, the employer or business entity can apply as the owner by submitting appropriate assignment agreements or employment contracts.",
  },
  {
    q: "Why is Copyright registration important for software developers?",
    a: "Software source code and binary object code are legally classified as 'literary works' under Section 2(o) of the Copyright Act. Registering your code provides robust legal proof against proprietary code theft, unauthorized copying, reverse engineering, unauthorized API cloning, and commercial IP disputes.",
  },
  {
    q: "Why Choose Merrafilings for Copyright Registration?",
    a: "Merrafilings pairs your creative project with specialized intellectual property advocates. We handle Nice and Copyright classification, prepare flawless Form XIV filings, manage mandatory 30-day surveillance, draft legal responses to examiner discrepancies, and ensure secure digital vault storage of your official registration certificate.",
  },
];

const FORM_FEATURES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Protect Original Literary, Artistic & Musical Works" },
  { icon: <Award className="w-4 h-4" />, text: "Official Government Copyright Registration Certificate" },
  { icon: <Clock className="w-4 h-4" />, text: "Author Lifetime + 60 Years Statutory Protection" },
  { icon: <Globe2 className="w-4 h-4" />, text: "Worldwide Reciprocal Protection Across 180+ Berne Nations" },
  { icon: <TrendingUp className="w-4 h-4" />, text: "Commercial Royalty Licensing & Exclusive Distribution Rights" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "Literary, Dramatic & Artistic Works",
    shortDesc: "For books, manuscripts, articles, poems, drawings, paintings, logos, and website copy.",
    expandedDesc: "Complete legal review of creative work, classification mapping, preparation of Form XIV and Statement of Particulars, official electronic lodgement on the Copyright Office portal, and management of the mandatory 30-day objection period.",
    price: "₹1,999",
    priceSub: "+ Govt Fee ₹500 | 1 Work",
    badge: "Most Popular",
    popular: true,
    features: [
      "Comprehensive Work Originality Review",
      "Preparation of Form XIV & Statement of Particulars",
      "Drafting of Author User Affidavit & NOCs",
      "Electronic Filing on Official Copyright Portal",
      "Diary Number Generation & Instant Tracking",
      "Mandatory 30-Day Discrepancy Surveillance",
      "Dedicated IP Advocate Representation",
    ],
  },
  {
    name: "Software Code, Mobile Apps & AI Algorithms",
    shortDesc: "For proprietary source code, software architectures, algorithms, and mobile applications.",
    expandedDesc: "Specialized software IP protection under Section 2(o). Includes redaction formatting of first 10 and last 10 pages of source code, developer employment assignment deed vetting, trade secret compliance, and electronic submission.",
    price: "₹2,999",
    priceSub: "+ Govt Fee ₹500 | Software IP",
    badge: "Tech & SaaS",
    features: [
      "Source Code & Object Code Compliance Formatting",
      "First 10 & Last 10 Pages Redaction Review",
      "Developer & Employee Assignment Deed Vetting",
      "Drafting of Corporate Ownership Declarations",
      "Electronic Filing with Copyright Registrar",
      "Handling of Examiner Procedural Discrepancies",
      "Guaranteed Software IP Protection Suite",
    ],
  },
  {
    name: "Cinematograph Films, Music & Sound Recordings",
    shortDesc: "For music albums, compositions, podcasts, movies, documentaries, and web series.",
    expandedDesc: "Comprehensive entertainment IP coverage. Includes producer assignment verification, lyricist and composer synchronization deeds, multi-performer NOC clearance, and official registration under the commercial sound/film schedule.",
    price: "₹4,999",
    priceSub: "+ Govt Fee ₹2,000 / ₹5,000 | Media",
    badge: "Media & Films",
    features: [
      "Master Audio / Video Script Formal Review",
      "Music Synchronization & Lyricist Rights Clearance",
      "Director & Performer Assignment Deed Verification",
      "High-Value Film / Sound Recording Portal Filing",
      "Representation before Registrar of Copyrights",
      "Worldwide Berne Convention Enforcement Advisory",
      "End-to-End Tracking Until Certificate Grant",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Register Copyright for Software Code in India",
  "Copyright vs Trademark: Differences, Benefits, and Protection",
  "Documents Required for Copyright Registration in India",
  "Understanding Lifetime + 60 Years Copyright Duration",
  "How to Handle Copyright Examination Discrepancy Letters",
  "Berne Convention: How Indian Copyrights Protect You Globally",
];

const RELATED_SERVICES_TAGS = [
  "Trademark Registration",
  "Trademark Objection",
  "Patent Registration",
  "Design Registration",
  "Logo Designing",
  "Trade Secret Protection",
];

const POPULAR_SEARCHES_TAGS = [
  "copyright registration online India",
  "copyright registration fees for software",
  "how to copyright a book in India",
  "copyright office portal diary number tracking",
  "copyright validity lifetime plus 60 years",
];

function CopyrightRegistrationGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Intro */}
      <div>
        <p className="text-[14.5px] font-normal text-slate-900 leading-relaxed">
          In India, intellectual creativity is legally safeguarded under the <strong className="font-semibold text-slate-950">Copyright Act, 1957</strong> and the <strong className="font-semibold text-slate-950">Copyright Rules, 2013</strong>. Copyright is a bundled statutory right conferred upon authors, software engineers, composers, artists, and filmmakers to control the reproduction, publication, adaptation, and public performance of their original creations. While common law copyright arises automatically upon creation, formal statutory registration with the <strong className="font-semibold text-slate-950">Registrar of Copyrights</strong> provides indispensable legal prima facie evidence of ownership under Section 48, establishing an unassailable public record that empowers creators to claim statutory damages, issue takedown notices, and prevent commercial piracy across digital and physical domains.
        </p>
      </div>

      {/* Section 1: What is Copyright */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. Understanding Statutory Copyright Protection in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Copyright protects the original <strong className="font-semibold text-slate-950">expression of an idea</strong>, rather than the idea itself. It provides creators with economic and moral rights to exploit their works commercially while prohibiting third parties from copying, pirating, selling, or broadcasting their creations without explicit authorization or payment of royalties.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          In our modern digital economy—where software code, digital art, online courses, music tracks, and cinematic content can be cloned in seconds—a government-issued Copyright Registration Certificate serves as an ironclad legal barrier against unauthorized duplication and intellectual property theft.
        </p>
      </section>

      {/* Section 2: Who Needs Copyright Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. Who Should Apply for Copyright Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Any individual, startup, institution, or corporation that invests creative intellect or financial capital into original creative assets should obtain copyright registration:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <BookOpen className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors">
              Authors &amp; Writers
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Books, research papers, novels, poems, scripts, and website editorial content.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Code className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors">
              Software Developers
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              SaaS platforms, mobile application source code, database architectures, and algorithms.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Music className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors">
              Musicians &amp; Composers
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Musical compositions, melodies, lyrics, studio master audio recordings, and beats.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Palette className="w-5 h-5 text-pink-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-[13.5px] text-slate-950 group-hover:text-[#155EEF] transition-colors">
              Artists &amp; Designers
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-800 font-normal mt-1 leading-relaxed">
              Brand logos, illustrations, paintings, digital artwork, graphics, and architectural designs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Advantages Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Core Advantages of Statutory Copyright Registration
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Registering your copyright with the Indian Copyright Office provides comprehensive legal remedies and commercial leverage:
        </p>

        {/* Table 1: Benefits */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Statutory Benefit</th>
                <th className="py-3 px-4">Legal Explanation &amp; Practical Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Legal Proof of Ownership</td>
                <td className="py-3 px-4 font-normal text-slate-900">Under Section 48, the Register of Copyrights is prima facie evidence of particulars entered therein. You do not need to prove creation history in court.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Exclusive Economic Rights</td>
                <td className="py-3 px-4 font-normal text-slate-900">Absolute monopoly to reproduce, publish, perform, distribute, and translate the work, preventing unauthorized exploitation.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Civil &amp; Criminal Enforcement</td>
                <td className="py-3 px-4 font-normal text-slate-900">Right to file suit for permanent injunctions, Anton Piller inspection orders, and criminal police raids against piracy under Sections 63 and 64.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Statutory Damages &amp; Accounts of Profit</td>
                <td className="py-3 px-4 font-normal text-slate-900">Eligibility to recover financial damages, disgorgement of profits earned by infringers, and legal attorney fee compensation.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Worldwide Berne Convention Protection</td>
                <td className="py-3 px-4 font-normal text-slate-900">Automatic reciprocal copyright protection across 180+ member countries globally without requiring individual national filings.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Commercial Royalty Licensing</td>
                <td className="py-3 px-4 font-normal text-slate-900">Legally license or assign intellectual property to publishers, record labels, OTT platforms, or software distributors for passive royalties.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Enhanced Enterprise Valuation</td>
                <td className="py-3 px-4 font-normal text-slate-900">Tangible IP asset recorded on corporate balance sheets, essential for venture capital funding rounds, mergers, and business valuations.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Legal Rights Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. Exclusive Legal Rights Conferred on the Author
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Under Section 14 and Section 57 of the Copyright Act 1957, a copyright holder holds both economic and moral rights:
        </p>

        {/* Table 2: Legal Rights */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Statutory Right</th>
                <th className="py-3 px-4">Scope of Exclusive Authority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Reproduction Right</td>
                <td className="py-3 px-4 font-normal text-slate-900">Exclusive right to make physical or digital copies of the work in any format, including electronic storage and printing.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Distribution &amp; Publication Right</td>
                <td className="py-3 px-4 font-normal text-slate-900">Authority to sell, lease, rent, or distribute copies of the creative work to the public.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Public Communication &amp; Broadcast</td>
                <td className="py-3 px-4 font-normal text-slate-900">Right to publicly perform, screen, stream, or broadcast the work via internet, TV, radio, or theater.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Derivative Works (Adaptation)</td>
                <td className="py-3 px-4 font-normal text-slate-900">Exclusive power to convert a book into a screenplay, translate text into other languages, or modify software code into new versions.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Moral Rights (Paternity &amp; Integrity)</td>
                <td className="py-3 px-4 font-normal text-slate-900">Special rights under Section 57 to claim authorship perpetually and prevent any distortion, mutilation, or derogatory modification prejudicial to the author’s honor.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Official Fees & Timeline Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Official Government Fee Schedule &amp; Timelines in India
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Statutory government fees prescribed under the Second Schedule of the Copyright Rules:
        </p>

        {/* Table 3: Fees */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Category of Creative Work</th>
                <th className="py-3 px-4">Statutory Government Fee</th>
                <th className="py-3 px-4">Standard Registration Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Literary, Dramatic, Musical Works</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹500 per work</td>
                <td className="py-3 px-4 font-normal text-slate-900">3 to 6 Months (Includes 30-day objection window)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Artistic Works (Non-Goods / Services)</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹500 per work</td>
                <td className="py-3 px-4 font-normal text-slate-900">3 to 6 Months</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Artistic Works Capable of Being Used on Goods (Logo/Label)</td>
                <td className="py-3 px-4 font-semibold text-amber-800">₹2,000 per work</td>
                <td className="py-3 px-4 font-normal text-slate-900">Requires Search Certificate (Form TM-C) from TM Registry</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Software Programs &amp; Databases</td>
                <td className="py-3 px-4 font-semibold text-emerald-800">₹500 per program</td>
                <td className="py-3 px-4 font-normal text-slate-900">3 to 5 Months</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Cinematograph Commercial Films</td>
                <td className="py-3 px-4 font-semibold text-purple-800">₹5,000 per film</td>
                <td className="py-3 px-4 font-normal text-slate-900">4 to 7 Months</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Sound Recordings (Commercial Albums)</td>
                <td className="py-3 px-4 font-semibold text-blue-800">₹2,000 per recording</td>
                <td className="py-3 px-4 font-normal text-slate-900">4 to 6 Months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Step-by-Step Registration Procedure */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. Step-by-Step Online Copyright Registration Workflow
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Filing of Form XIV &amp; Statement of Particulars</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Draft application Form XIV, Statement of Particulars (SoP), and Statement of Further Particulars (SoFP) detailing author, owner, publication year, and language.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Electronic Lodgement &amp; Diary Number Issuance</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Submit application online on the Copyright Office gateway, pay prescribed government fees, and receive a formal Diary Number timestamp for real-time tracking.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Mandatory 30-Day Objection Waiting Period</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Statutory mandatory 30-day window during which the Registrar awaits any claims or objections from third parties or co-owners.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">4</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Substantive Examination by Copyright Scrutinizer</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                The Examiner inspects the work for originality and procedural compliance. If discrepancies are raised, Merrafilings drafts and submits a formal legal reply.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-6 h-6 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">5</div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-950">Grant of Official Certificate of Copyright Registration</h3>
              <p className="text-xs sm:text-[13px] text-slate-900 font-normal mt-0.5 leading-relaxed">
                Upon satisfaction of the Registrar, the registration is formally entered into the Register of Copyrights and the official certificate is issued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: IP Comparison Table */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Comprehensive IP Protection Matrix: Trademark vs Copyright vs Design vs Patent
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Comparing the four core pillars of intellectual property protection in India:
        </p>

        {/* Table 4: IP Matrix */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left text-xs sm:text-sm text-slate-900 font-normal">
            <thead className="bg-[#1F1646] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Trademark (Brand)</th>
                <th className="py-3 px-4">Copyright (Creative)</th>
                <th className="py-3 px-4">Design (Aesthetics)</th>
                <th className="py-3 px-4">Patent (Invention)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">What it Protects</td>
                <td className="py-3 px-4 font-normal text-slate-900">Brand names, logos, slogans, trade dress</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Books, music, software code, artwork, films</td>
                <td className="py-3 px-4 font-normal text-slate-900">Visual external shape, 3D configuration</td>
                <td className="py-3 px-4 font-normal text-slate-900">Functional technological inventions &amp; processes</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Primary Commercial Value</td>
                <td className="py-3 px-4 font-normal text-slate-900">Customer brand recognition &amp; commercial monopoly</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Monetization, royalty licensing &amp; anti-piracy</td>
                <td className="py-3 px-4 font-normal text-slate-900">Product differentiation in retail markets</td>
                <td className="py-3 px-4 font-normal text-slate-900">20-year technological manufacturing monopoly</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Duration of Protection</td>
                <td className="py-3 px-4 font-normal text-slate-900">Perpetual (Renewed every 10 years)</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Author Lifetime + 60 Years</td>
                <td className="py-3 px-4 font-normal text-slate-900">10 + 5 Years (Maximum 15 years)</td>
                <td className="py-3 px-4 font-normal text-slate-900">20 Years from filing date</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-950">Risk of Non-Registration</td>
                <td className="py-3 px-4 font-normal text-slate-900">Competitors can clone your brand name freely</td>
                <td className="py-3 px-4 font-semibold text-purple-900">Difficult to prove ownership or claim damages in court</td>
                <td className="py-3 px-4 font-normal text-slate-900">Rivals can legally replicate outer product design</td>
                <td className="py-3 px-4 font-normal text-slate-900">Public domain disclosure forfeits patentability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Why Choose Merrafilings for Copyright Registration?
        </h2>
        <p className="text-[14.5px] leading-relaxed text-slate-900 font-normal">
          Copyright applications frequently stall due to minor discrepancies or improper No-Objection Certificates. Merrafilings ensures end-to-end legal certainty:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-[13px] font-normal text-slate-900">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Specialized IP Advocates for Literary, Tech &amp; Entertainment</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Same-Day Form XIV E-Filing &amp; Diary Number Generation</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Software Source Code Redaction &amp; Confidentiality Guarantee</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-900 group-hover:text-black font-medium transition-colors">Continuous Surveillance Until Official Certificate Issuance</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("Copyright Registration Online")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Register Your Copyright Online Now</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function CopyrightRegistrationPage() {
  return (
    <ServicePageTemplate
      badgeText="Statutory Copyright Act 1957 Creative Asset Protection"
      heroTitle={
        <>
          <span>Online </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            Copyright Registration
          </span>{" "}
          <span>in India</span>
        </>
      }
      heroSubtitle="Protect your original literary, artistic, software, musical, and cinematographic works under the Copyright Act, 1957. Secure nationwide exclusive ownership, commercial licensing rights, and lifetime + 60 years legal protection."
      formTitle="Apply for Copyright Registration"
      formSubtitle="Get expert guidance, accurate application filing, and continuous monitoring until your copyright is successfully registered."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. Standard{" "}
          <span className="font-normal text-[#00B074]">copyright registration pricing.</span>
        </>
      }
      pricingSubtitle="Select your creative work category for specialized drafting, IP classification, and portal e-filing."
      breadcrumbCurrent="Copyright Registration"
      guideTitle="Copyright Registration Online - Copyright Act 1957 Complete Legal Guide"
      guideContent={<CopyrightRegistrationGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about copyright registration in India, software protection, Berne Convention, validity, and fees."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
