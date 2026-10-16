"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface StoryItem {
  id: string;
  tag: string;
  title: string;
  image: string;
  founderName: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  metrics: { label: string; value: string }[];
}

export default function CustomerStories() {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const [activeIndustry, setActiveIndustry] = useState<string>("all");

  const industries = [
    { id: "all", label: "All Founder Stories" },
    { id: "agritech", label: "Agritech & Food" },
    { id: "retail", label: "Retail & Franchise" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "tech", label: "Architectural Tech" },
  ];

  const stories: (StoryItem & { category: string })[] = [
    {
      id: "thinai-organics",
      category: "agritech",
      tag: "AGRITECH & ORGANICS",
      title: "How Thinai Organics built a nationwide brand from home",
      image: "/images/stories/thinai-organics.jpg",
      founderName: "Meera Krishnan",
      role: "Founder & CEO",
      company: "Thinai Organics",
      location: "Madurai, Tamil Nadu",
      quote:
        "When I started packing millets and organic pulses from my kitchen, getting FSSAI license and Trademark felt terrifying. Merrafilings took over the legal headache, and today we ship to over 14 states across India.",
      metrics: [
        { label: "Turnaround Time", value: "3 Days" },
        { label: "Licenses Secured", value: "FSSAI, GST & TM" },
        { label: "States Shipped", value: "14+ Pan-India" },
      ],
    },
    {
      id: "chennai-kulfi",
      category: "retail",
      tag: "RETAIL & FRANCHISE",
      title: "Chennai Kulfi — scaling a beloved quick-service brand",
      image: "/images/stories/chennai-kulfi.jpg",
      founderName: "Rajeshwaran S.",
      role: "Co-Founder & Director",
      company: "Chennai Kulfi",
      location: "Chennai, Tamil Nadu",
      quote:
        "When we expanded from 2 parlors to 80+ franchise stores, managing GST compliance for each state was becoming unmanageable. Merrafilings automated our GST reconciliation and annual filings with zero delays.",
      metrics: [
        { label: "Franchise Outlets", value: "80+ Stores" },
        { label: "GST Compliance", value: "100% On-Time" },
        { label: "Monthly Time Saved", value: "45+ Hours" },
      ],
    },
    {
      id: "rock-enterprises",
      category: "infrastructure",
      tag: "INFRASTRUCTURE",
      title: "Rock Enterprises — from sole proprietorship to enterprise entity",
      image: "/images/stories/rock-enterprises.jpg",
      founderName: "Vikram Malhotra",
      role: "Managing Director",
      company: "Rock Enterprises",
      location: "Bengaluru, Karnataka",
      quote:
        "Transitioning to a Private Limited entity allowed us to bid on large government infrastructure contracts. Merrafilings handled the incorporation and MCA secretarial work with absolute clarity.",
      metrics: [
        { label: "Entity Type", value: "Private Limited" },
        { label: "Govt Contracts Won", value: "₹24+ Crores" },
        { label: "Filing Accuracy", value: "99.9%" },
      ],
    },
    {
      id: "iceil-systems",
      category: "tech",
      tag: "ARCHITECTURAL TECH",
      title: "Iceil Systems — crafting precision architectural lighting spaces",
      image: "/images/stories/iceil-systems.jpg",
      founderName: "Pooja Reddy & Team",
      role: "Head of Operations",
      company: "Iceil Systems",
      location: "Hyderabad, Telangana",
      quote:
        "Our high-precision architectural lighting products require complex multi-state vendor billing and import tax handling. Merrafilings keeps our books audit-ready 365 days a year seamlessly.",
      metrics: [
        { label: "ITC Reconciled", value: "100% Auto-match" },
        { label: "Tax Credits Saved", value: "₹18+ Lakhs" },
        { label: "Compliance Status", value: "A+ Active" },
      ],
    },
  ];

  const filteredStories = activeIndustry === "all"
    ? stories
    : stories.filter((s) => s.category === activeIndustry);

  return (
    <section className="py-10 md:py-14 bg-[#FBFBFA] border-b border-slate-200/80">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div data-reveal="down" className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-5 border-b border-slate-200/70 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50/80 border border-emerald-100/90 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Verified Client Journeys
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight leading-snug">
              How Indian founders scale with Merrafilings
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Read how fast-growing businesses simplify company formation, tax returns, and statutory filings without bureaucratic friction.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            100% Verified Statutory Filings &amp; Real Founders
          </div>
        </div>

        {/* Industry Filter Pills */}
        <div data-reveal="zoom" className="flex flex-wrap items-center gap-2 mb-8">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(ind.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeIndustry === ind.id
                  ? "bg-slate-900 text-white shadow-xs scale-102"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* 4 Cards Grid - Refined Minimalist Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((story, sIdx) => {
            const revealDir = sIdx === 0 ? "left" : sIdx === 3 ? "right" : "up";
            const staggerClass = `stagger-${sIdx + 1}`;

            return (
              <div
                key={story.id}
                data-reveal={revealDir}
                onClick={() => setSelectedStory(story)}
                className={`bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer ${staggerClass}`}
              >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                
                {/* Minimalist Floating Play Pill */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/95 text-slate-900 shadow-sm flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                    {story.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[17px] text-slate-900 font-normal leading-snug group-hover:text-emerald-800 transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{story.founderName}</p>
                      <p className="text-[11px] text-slate-500">{story.company}</p>
                    </div>
                    <span className="text-xs font-medium text-emerald-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

      </div>

      {/* Story Details & Case Study Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-[640px] w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer border border-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header Banner */}
            <div className="relative h-56 w-full bg-slate-900">
              <Image
                src={selectedStory.image}
                alt={selectedStory.title}
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-6 text-white pr-12">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {selectedStory.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal mt-1 text-white">
                  {selectedStory.company}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">{selectedStory.location}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-5">
              {/* Quote */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="italic text-slate-700 text-sm leading-relaxed">
                  &ldquo;{selectedStory.quote}&rdquo;
                </p>
                <div className="mt-2.5 not-italic text-xs text-slate-900 font-semibold">
                  — {selectedStory.founderName}, {selectedStory.role}
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {selectedStory.metrics.map((m, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-white border border-slate-200">
                    <p className="text-base sm:text-lg font-semibold text-slate-900">{m.value}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Merrafilings Client</span>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
