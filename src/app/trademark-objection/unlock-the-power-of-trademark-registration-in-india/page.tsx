"use client";

import React from "react";
import Link from "next/link";
import TrademarkObjectionGuideLayout from "@/components/TrademarkObjectionGuideLayout";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  Globe2,
  CheckCircle2,
  AlertTriangle,
  Scale,
  DollarSign,
  ArrowRight,
  Layers,
  HelpCircle,
} from "lucide-react";

export default function UnlockTrademarkPowerPage() {
  return (
    <TrademarkObjectionGuideLayout
      currentSlug="unlock-the-power-of-trademark-registration-in-india"
      title="Unlock the Power of Trademark Registration in India: Commercial &amp; Legal Strategy"
      breadcrumbLabel="Unlock Trademark Power"
      metaPublishedDate="October 2026"
      readingTime="8 min read"
      authorName="Merrafilings IP Legal Team"
    >
      {/* Intro Overview */}
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-slate-700">
          In India&apos;s hyper-competitive digital economy, a brand name is no longer just a business label—it is an invaluable <strong className="font-semibold text-slate-900">commercial asset</strong> that drives enterprise valuation, consumer trust, and exclusive market share. Securing trademark registration under the <strong className="font-semibold text-slate-900">Trade Marks Act, 1999</strong> confers statutory ownership, enabling you to build, scale, and monetize your intellectual property without fear of counterfeit copycats.
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-600 font-light">
          Even when an application encounters procedural roadblocks such as a Trademark Examination Objection, understanding the profound commercial advantages of registration reinforces why overcoming objections promptly is an essential investment for any ambitious business.
        </p>
      </div>

      {/* 5 Core Pillars Grid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          The 5 Strategic Pillars of Registered Trademarks
        </h2>
        <p className="text-sm text-slate-600 font-light">
          Explore how a registered trademark elevates your brand from an unprotected business concept into an intellectual property powerhouse:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-900 text-sm sm:text-base">
              1. Statutory Monopoly &amp; Exclusive Rights
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Under Section 28, registration confers the nationwide exclusive right to use the mark. You can initiate statutory infringement lawsuits (Section 29) and obtain civil injunctions and damages against infringers.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-900 text-sm sm:text-base">
              2. Commercial Valuation &amp; Asset Creation
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              A registered trademark is an intangible corporate asset recorded on your balance sheet. It significantly boosts venture capital valuations, enables brand licensing, and facilitates profitable franchising agreements.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-900 text-sm sm:text-base">
              3. The Prestige of the ® Registered Symbol
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Affixing the official <strong className="font-semibold text-slate-900">®</strong> mark instantly projects corporate credibility and quality assurance, establishing immediate consumer trust and deterring unauthorized copycats.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-900 text-sm sm:text-base">
              4. E-Commerce &amp; Brand Registry Gates
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Global online platforms (Amazon Brand Registry, Flipkart Brand Store) require registered trademarks to grant brand gatekeeping powers, enabling instant takedowns of fraudulent reseller listings.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-900 text-sm sm:text-base">
              5. Perpetual 10-Year Generational Validity
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Unlike patents that lapse in 20 years, a trademark can be renewed perpetually every 10 years via Form TM-R, creating a brand monopoly that endures indefinitely across generations.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-900 text-sm sm:text-base">
              6. Global Expansion via Madrid Protocol
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              A domestic Indian trademark application serves as the home base for filing international trademark applications across 130+ countries under WIPO&apos;s Madrid System via a single consolidated filing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Overcoming Objections Unlocks Registration */}
      <section className="space-y-4 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          How Overcoming Trademark Objections Unlocks Brand Protection
        </h2>
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          More than 60% of trademark applications in India face an initial Examination Objection under Section 9 or Section 11. Far from being a fatal setback, resolving an objection through a rigorous legal response is the exact proving ground where statutory protection is forged:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs sm:text-sm text-slate-700 font-light">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">Clarifies Exclusive Scope of Monopoly</span>
            <p className="text-slate-500 text-xs">
              Responding to objection reports forces precise classification and item specification, ensuring that your monopoly covers exactly what you sell without vulnerability to non-use cancellations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="font-medium text-slate-900 block">Establishes Official Evidentiary Priority</span>
            <p className="text-slate-500 text-xs">
              Filing user affidavits and turnover exhibits establishes an indisputable evidentiary trail on the public record, preemptively neutralizing future competitor opposition lawsuits.
            </p>
          </div>
        </div>
      </section>
    </TrademarkObjectionGuideLayout>
  );
}
