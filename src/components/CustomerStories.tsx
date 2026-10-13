"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, Star, CheckCircle, ArrowRight } from "lucide-react";

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

  const stories: StoryItem[] = [
    {
      id: "thinai-organics",
      tag: "CUSTOMER STORY",
      title: "How Thinai Organics built a brand from home",
      image: "/images/stories/thinai-organics.jpg",
      founderName: "Meera Krishnan",
      role: "Founder & CEO",
      company: "Thinai Organics",
      location: "Madurai, Tamil Nadu",
      quote:
        "When I started packing millets and organic pulses from my kitchen, getting FSSAI license and Trademark felt terrifying. MerraFilings took over the entire legal headache, and today we ship to over 14 states across India.",
      metrics: [
        { label: "Turnaround Time", value: "3 Days" },
        { label: "Licenses Secured", value: "FSSAI, GST & TM" },
        { label: "States Shipped", value: "14+ Pan-India" },
      ],
    },
    {
      id: "chennai-kulfi",
      tag: "CUSTOMER STORY",
      title: "Chennai Kulfi — scaling a beloved brand",
      image: "/images/stories/chennai-kulfi.jpg",
      founderName: "Rajeshwaran S.",
      role: "Co-Founder & Director",
      company: "Chennai Kulfi",
      location: "Chennai, Tamil Nadu",
      quote:
        "When we expanded from 2 parlors to 80+ franchise stores, managing GST compliance for each state was becoming unmanageable. MerraFilings automated our GST reconciliation and annual filings with zero delays.",
      metrics: [
        { label: "Franchise Outlets", value: "80+ Stores" },
        { label: "GST Compliance", value: "100% On-Time" },
        { label: "Monthly Time Saved", value: "45+ Hours" },
      ],
    },
    {
      id: "rock-enterprises",
      tag: "CUSTOMER STORY",
      title: "Rock Enterprises — A Story of Entrepreneurial Growth",
      image: "/images/stories/rock-enterprises.jpg",
      founderName: "Vikram Malhotra",
      role: "Managing Director",
      company: "Rock Enterprises",
      location: "Bengaluru, Karnataka",
      quote:
        "Transitioning from a sole proprietorship to a Private Limited entity allowed us to bid on large government infrastructure contracts. MerraFilings handled the incorporation and MCA secretarial work seamlessly.",
      metrics: [
        { label: "Entity Type", value: "Private Limited" },
        { label: "Govt Contracts Won", value: "₹24+ Crores" },
        { label: "Filing Accuracy", value: "99.9%" },
      ],
    },
    {
      id: "iceil-systems",
      tag: "CUSTOMER STORY",
      title: "Iceil Systems — Crafting Architectural Lighting Spaces",
      image: "/images/stories/iceil-systems.jpg",
      founderName: "Pooja Reddy & Team",
      role: "Head of Operations",
      company: "Iceil Systems",
      location: "Hyderabad, Telangana",
      quote:
        "Our high-precision architectural lighting products require complex multi-state vendor billing and import tax handling. MerraFilings keeps our books audit-ready 365 days a year without hiring full-time in-house legal teams.",
      metrics: [
        { label: "ITC Reconciled", value: "100% Auto-match" },
        { label: "Tax Credits Saved", value: "₹18+ Lakhs" },
        { label: "Compliance Status", value: "A+ Active" },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E4E7EC]">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        
        {/* Header (Matching Screenshot 4) */}
        <div className="mb-12 md:mb-14">
          <span className="block text-[11px] sm:text-[12px] font-bold text-[#155EEF] uppercase tracking-[0.16em] mb-2.5">
            CUSTOMER STORIES
          </span>
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold text-[#111827] tracking-tight leading-[1.2]">
            Watch how founders scale with MerraFilings
          </h2>
        </div>

        {/* 4 Cards Grid (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 2xl:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group relative h-[420px] sm:h-[450px] 2xl:h-[480px] rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Background Photo */}
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for text readability (Matching Screenshot 4) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 transition-opacity" />

              {/* Play Button Overlay */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#155EEF] transition-all">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>

              {/* Bottom Content Card Info (Matching Screenshot 4) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white space-y-2">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-white/70 block">
                  {story.tag}
                </span>
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-white leading-snug group-hover:text-blue-100 transition-colors">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Story Details & Video Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-[680px] w-full overflow-hidden shadow-2xl border border-[#E4E7EC] relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#111827] flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Media Top Banner */}
            <div className="relative h-60 w-full bg-[#111827]">
              <Image
                src={selectedStory.image}
                alt={selectedStory.title}
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#93C5FD]">
                  Founder Case Study
                </span>
                <h3 className="text-[20px] font-bold mt-0.5">{selectedStory.company}</h3>
                <p className="text-[13px] text-white/80">{selectedStory.location}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Quote */}
              <div className="relative pl-4 border-l-2 border-[#155EEF] italic text-[#475467] text-[15px] leading-relaxed">
                &ldquo;{selectedStory.quote}&rdquo;
                <div className="mt-2 not-italic font-semibold text-[#111827] text-[14px]">
                  — {selectedStory.founderName}, {selectedStory.role}
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 bg-[#F8FAFC] rounded-2xl p-4 border border-[#E4E7EC]">
                {selectedStory.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-[18px] sm:text-[20px] font-bold text-[#155EEF]">{m.value}</p>
                    <p className="text-[11.5px] text-[#475467] font-medium mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-[13px] text-[#15803D] font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified MerraFilings Client</span>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2.5 text-[14px] font-semibold text-white bg-[#155EEF] hover:bg-[#1849A9] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
