"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AIComplianceCloud from "@/components/AIComplianceCloud";
import BusinessSolutionsGrid from "@/components/BusinessSolutionsGrid";
import HowItWorks from "@/components/HowItWorks";
import CustomerStories from "@/components/CustomerStories";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ServiceSearchModal from "@/components/ServiceSearchModal";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Private Limited Company");

  const handleOpenContactWithService = (service: string) => {
    setSelectedService(service);
    setContactOpen(true);
  };

  const handleHeroGetStarted = () => {
    setSelectedService("Private Limited Company");
    setContactOpen(true);
  };

  const handleSelectCategory = (catId: string) => {
    const map: Record<string, string> = {
      startup: "Private Limited Company Incorporation",
      gst: "GST Registration & Returns",
      mca: "MCA & ROC Annual Compliance",
      "income-tax": "Income Tax Return (ITR) Filing",
      trademark: "Trademark Registration & Protection",
    };
    setSelectedService(map[catId] || "Corporate Services");
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => handleOpenContactWithService("Corporate Services")}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Screenshot 1) */}
        <HeroSection
          onGetStarted={handleHeroGetStarted}
          onSelectCategory={handleSelectCategory}
        />

        {/* 3. Trust Indicators / Client Logos (Screenshot 2 Top) */}
        <ClientLogos />

        {/* 4. AI-Powered Compliance Cloud Showcase (Screenshot 2 Bottom) */}
        <AIComplianceCloud
          onExplore={() => handleOpenContactWithService("AI Compliance Cloud")}
          onBookDemo={() => handleOpenContactWithService("Live AI Cloud Demo")}
        />

        {/* 5. Business Solutions & Category Cards (Screenshot 3) */}
        <BusinessSolutionsGrid
          onSelectSolution={(title) => handleOpenContactWithService(title)}
        />

        {/* 6. How It Works Section */}
        <HowItWorks
          onStartProcess={() => handleOpenContactWithService("New Business Incorporation")}
        />

        {/* 7. Customer Stories / Testimonials (Screenshot 4) */}
        <CustomerStories />

        {/* 8. Frequently Asked Questions (Screenshot 5) */}
        <FAQSection />

        {/* 9. Final CTA Section */}
        <FinalCTA
          onFormSubmit={(data) => {
            console.log("Consultation requested:", data);
          }}
        />
      </main>

      {/* 10. Comprehensive Enterprise Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(service) => handleOpenContactWithService(service)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  );
}
