"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RealtimeFilingsMarquee from "@/components/RealtimeFilingsMarquee";
import LiveDeadlinesTicker from "@/components/LiveDeadlinesTicker";
import ClientLogos from "@/components/ClientLogos";
import AIComplianceCloud from "@/components/AIComplianceCloud";
import ComplianceHealthCheck from "@/components/ComplianceHealthCheck";
import BusinessSolutionsGrid from "@/components/BusinessSolutionsGrid";
import IndustrySolutionsGrid from "@/components/IndustrySolutionsGrid";
import DashboardShowcase from "@/components/DashboardShowcase";
import ComplianceComparison from "@/components/ComplianceComparison";
import HowItWorks from "@/components/HowItWorks";
import RegulatoryGazetteRadar from "@/components/RegulatoryGazetteRadar";
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
        {/* 2. Hero Section */}
        <HeroSection
          onGetStarted={handleHeroGetStarted}
          onSelectCategory={handleSelectCategory}
        />

        {/* 3. Live Activity & Regulatory Approvals Marquee */}
        <RealtimeFilingsMarquee
          onSelectEvent={(event) => handleOpenContactWithService(`Inquiry: ${event}`)}
        />

        {/* 4. Live Compliance Calendar & Active Deadlines Ticker */}
        <LiveDeadlinesTicker
          onSelectDeadline={(deadline) => handleOpenContactWithService(`Compliance Deadline: ${deadline}`)}
        />

        {/* 5. Trust Indicators / Client Logos */}
        <ClientLogos />

        {/* 6. CA & CS Managed Corporate Compliance Services (All 4 Tabs strictly on the same line) */}
        <AIComplianceCloud
          onExplore={() => handleOpenContactWithService("Corporate Compliance Advisory")}
          onBookDemo={() => handleOpenContactWithService("Schedule CA Consultation")}
        />

        {/* 7. Interactive 30-Second Compliance Health Diagnostic Tool */}
        <ComplianceHealthCheck
          onBookAudit={() => handleOpenContactWithService("Comprehensive CA Compliance Audit")}
        />

        {/* 8. Core Business Solutions & Category Cards with Interactive Filter */}
        <BusinessSolutionsGrid
          onSelectSolution={(title) => handleOpenContactWithService(title)}
        />

        {/* 9. Industry Solutions & Sector Blueprints */}
        <IndustrySolutionsGrid
          onSelectIndustry={(industry) => handleOpenContactWithService(`Industry Pack: ${industry}`)}
        />

        {/* 10. Interactive Client Portal Simulation & Digital Document Vault */}
        <DashboardShowcase
          onOpenPortal={() => handleOpenContactWithService("Client Portal Access")}
        />

        {/* 11. Capability Matrix: Merrafilings vs Traditional CA vs DIY Portals */}
        <ComplianceComparison
          onGetStarted={() => handleOpenContactWithService("Enterprise Corporate Care Plan")}
        />

        {/* 12. Predictable Linear Workflow Section with Progress Connectors */}
        <HowItWorks
          onStartProcess={() => handleOpenContactWithService("New Business Incorporation")}
        />

        {/* 13. Real-Time Regulatory Gazette & Legal News Radar */}
        <RegulatoryGazetteRadar
          onConsultUpdate={(title) => handleOpenContactWithService(`Regulatory Update: ${title}`)}
        />

        {/* 14. Verified Customer Stories with Industry Filters */}
        <CustomerStories />

        {/* 15. Frequently Asked Questions with Live Search Filter */}
        <FAQSection />

        {/* 16. Final Advisory CTA Section */}
        <FinalCTA
          onFormSubmit={(data) => {
            console.log("Consultation requested:", data);
          }}
        />
      </main>

      {/* 17. Enterprise Directory Footer */}
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
