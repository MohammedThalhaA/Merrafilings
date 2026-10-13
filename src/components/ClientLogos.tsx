"use client";

import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-white border-b border-[#E4E7EC]/70">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <p className="text-center text-[12px] md:text-[13px] font-semibold text-[#475467] uppercase tracking-[0.16em] mb-8">
          OUR CLIENTS
        </p>

        {/* Logos Container with Scroll Controls */}
        <div className="relative flex items-center group">
          <div
            ref={scrollRef}
            className="flex items-center gap-10 md:gap-14 overflow-x-auto no-scrollbar scroll-smooth w-full py-2 px-1 select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* 1. iinvolve */}
            <div className="shrink-0 flex items-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="font-extrabold text-[22px] tracking-tight text-[#111827]">
                i<span className="text-[#155EEF]">i</span>NVOLVE
              </span>
            </div>

            {/* 2. duracool */}
            <div className="shrink-0 flex items-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="font-bold text-[22px] tracking-normal text-[#0369A1] font-sans">
                duracool
              </span>
            </div>

            {/* 3. Joyalukkas */}
            <div className="shrink-0 flex items-center gap-2 h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <div className="w-6 h-6 rounded-full bg-[#CA8A04] flex items-center justify-center text-white text-[10px] font-bold">
                J
              </div>
              <div className="leading-tight">
                <span className="font-bold text-[18px] text-[#A16207] tracking-tight block">
                  Joyalukkas
                </span>
                <span className="text-[8.5px] text-[#713F12] block tracking-wide">
                  World&apos;s favourite jeweller
                </span>
              </div>
            </div>

            {/* 4. YES BANK */}
            <div className="shrink-0 flex items-center gap-1.5 h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="text-[#DC2626] font-bold text-[18px]">✓</span>
              <span className="font-black text-[18px] tracking-wider text-[#1E3A8A]">
                YES BANK
              </span>
            </div>

            {/* 5. Flipkart Explore Plus */}
            <div className="shrink-0 flex items-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <div className="leading-none">
                <span className="font-extrabold text-[20px] text-[#2563EB] tracking-tight italic">
                  Flipkart
                </span>
                <span className="block text-[9px] font-semibold text-[#D97706] tracking-wider mt-0.5">
                  Explore Plus <span className="text-[#F59E0B]">✦</span>
                </span>
              </div>
            </div>

            {/* 6. cello */}
            <div className="shrink-0 flex items-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="font-black text-[24px] tracking-tight text-[#475467] font-sans">
                cello<sup className="text-[10px]">®</sup>
              </span>
            </div>

            {/* 7. EaseMyTrip */}
            <div className="shrink-0 flex items-center gap-1 h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="text-[#0284C7] text-[18px]">✈</span>
              <span className="font-extrabold text-[19px] tracking-tight text-[#0284C7]">
                EaseMyTrip<span className="text-[12px] font-normal text-[#64748B]">.com</span>
              </span>
            </div>

            {/* 8. Additional trusted Indian enterprises */}
            <div className="shrink-0 flex items-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="font-black text-[20px] tracking-tight text-[#EA580C]">
                SWIGGY
              </span>
            </div>

            <div className="shrink-0 flex items-center h-10 px-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <span className="font-bold text-[19px] tracking-tight text-[#E11D48] italic">
                zomato
              </span>
            </div>
          </div>

          {/* Right Scroll Arrow Button (Matching screenshot 2) */}
          <div className="shrink-0 ml-4 hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full border border-[#E4E7EC] bg-white flex items-center justify-center text-[#475467] hover:text-[#111827] hover:border-[#155EEF] transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll clients left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full border border-[#E4E7EC] bg-white flex items-center justify-center text-[#475467] hover:text-[#111827] hover:border-[#155EEF] transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll clients right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
