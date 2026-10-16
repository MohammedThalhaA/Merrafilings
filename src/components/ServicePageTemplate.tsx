"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ServiceSearchModal from "@/components/ServiceSearchModal";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Smartphone,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Sparkles,
  Building,
  Check,
  ChevronUp,
  Clock,
  Globe2,
  Lock,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Scale,
  Receipt,
  FileCheck,
  Briefcase,
  Zap,
  TrendingUp,
  Star,
  BadgePercent,
  Activity,
  Laptop,
  Store,
  Layers,
  AlertTriangle,
  FileSpreadsheet,
  Landmark,
} from "lucide-react";

export interface SpotlightCardItem {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  title: string;
  desc: string;
}

export interface ServiceSpotlightData {
  mandatoryTag: string;
  mandatoryTitle: string;
  mandatorySubtitle: string;
  mandatoryItems: SpotlightCardItem[];
  chooseTag: string;
  chooseTitle: string;
  chooseSubtitle: string;
  chooseItems: SpotlightCardItem[];
  dashboardMetric1: { label: string; value: string };
  dashboardMetric2: { label: string; value: string };
  dashboardSteps: string[];
}

export function getServiceSpotlightData(breadcrumbCurrent: string, badgeText?: string): ServiceSpotlightData {
  const b = (breadcrumbCurrent || "").toLowerCase();

  // 1. Professional Tax
  if (b.includes("professional tax")) {
    return {
      mandatoryTag: "STATUTORY STATE TAX MANDATE",
      mandatoryTitle: "Why Professional Tax Registration is Mandatory for Businesses?",
      mandatorySubtitle: "Mandatory state-level tax compliance for employers and practicing professionals to ensure lawful salary disbursement and statutory returns.",
      dashboardMetric1: { label: "Processing SLA", value: "3 - 5 Days" },
      dashboardMetric2: { label: "Approval Rate", value: "99.8%" },
      dashboardSteps: [
        "Jurisdiction & Certificate Classification (PTRC / PTEC)",
        "State Commercial Tax Portal Profile Lodgement",
        "Official Registration Certificate Issuance"
      ],
      mandatoryItems: [
        {
          icon: <Receipt className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Mandatory State Tax Compliance",
          desc: "Professional Tax registration (PTRC / PTEC) is legally compulsory for employers and practicing professionals across applicable states."
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Required for Payroll Processing",
          desc: "Essential for legal salary structuring, monthly employee wage deductions, and remitting timely state challans."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Avoid Heavy State Tax Penalties",
          desc: "Non-registration incurs steep statutory fines up to ₹5/day and 1.25% monthly interest on overdue tax liabilities."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-indigo-50",
          iconColor: "text-indigo-600",
          hoverBorder: "hover:border-indigo-500",
          title: "Prerequisite for Commercial Licenses",
          desc: "Compulsory prerequisite for Municipal Trade Licenses, Shop & Establishment permits, and corporate bank accounts."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Professional Tax?",
      chooseSubtitle: "Merrafilings – India's trusted corporate compliance cloud & regulatory advisory platform.",
      chooseItems: [
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Trusted by 100,000+ Businesses",
          desc: "Dedicated assistance for corporate employers, LLP partners, directors, and independent medical/legal practitioners."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "State-Wise Compliance Experts",
          desc: "Dedicated tax advocates ensuring accurate slab mapping across Maharashtra, Karnataka, West Bengal, Tamil Nadu & more."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Online Compliance Dashboard",
          desc: "Track PTRC / PTEC application status, download e-certificates, and automate monthly challans directly online."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Transparent Fixed Pricing",
          desc: "Affordable upfront quotes with 100% money-back service guarantee and zero unexpected department liaison fees."
        }
      ]
    };
  }

  // 2. ESI Registration
  if (b.includes("esi")) {
    return {
      mandatoryTag: "COMPULSORY LABOUR LAW SOCIAL SECURITY",
      mandatoryTitle: "Why ESI Registration is Mandatory for Employers?",
      mandatorySubtitle: "Statutory social security mandate under the ESI Act for all commercial establishments and factories with 10 or more workers.",
      dashboardMetric1: { label: "ESIC Code Allotment", value: "2 - 3 Days" },
      dashboardMetric2: { label: "Worker Coverage", value: "100% Insured" },
      dashboardSteps: [
        "Shram Suvidha Profile & Statutory Form 1 Lodgement",
        "DSC Digital Authentication & Officer Verification",
        "17-Digit Employer Code & Pehchan Card Delivery"
      ],
      mandatoryItems: [
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Mandatory Social Security Coverage",
          desc: "Compulsory under Section 2A of the ESI Act for all factories and establishments with 10+ employees earning up to ₹21,000/mo."
        },
        {
          icon: <Activity className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Complete Medical & Sickness Benefits",
          desc: "Provides full medical outpatient cover, sickness cash compensation, maternity benefits, and disability pension for your staff."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Total Employer Legal Immunity",
          desc: "Under Section 53, registered employers are fully shielded from tort damages and Employee Compensation Act lawsuits."
        },
        {
          icon: <Receipt className="w-5 h-5" />,
          iconBg: "bg-rose-50",
          iconColor: "text-rose-600",
          hoverBorder: "hover:border-rose-500",
          title: "Avoid 12% Interest & Damages",
          desc: "Unregistered employers face 12% annual interest, damages up to 25%, and criminal prosecution under Section 85."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for ESI Registration?",
      chooseSubtitle: "Merrafilings – India's trusted labour law compliance partner for over 25,000+ registered employers.",
      chooseItems: [
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "17-Digit Code in 48-72 Hours",
          desc: "Direct Shram Suvidha API integration ensuring rapid code generation without visiting ESIC branch offices."
        },
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Pehchan Smart Card Enrollment",
          desc: "Complete roster onboarding support to generate individual Insurance Numbers and downloadable Pehchan smart identity cards."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Monthly ECR Return & Challan Engine",
          desc: "Automated wage ledger calculations to file monthly contributions smoothly before the 15th statutory deadline."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Dedicated Labour Law Consultant",
          desc: "Assigned compliance officer to handle ESIC inspections, C-18 notices, and annual record maintenance."
        }
      ]
    };
  }

  // 3. FSSAI Registration / Food License
  if (b.includes("fssai")) {
    return {
      mandatoryTag: "MANDATORY FOOD SAFETY & STANDARDS COMPLIANCE",
      mandatoryTitle: "Why FSSAI Registration is Mandatory for Food Businesses?",
      mandatorySubtitle: "Statutory 14-digit food safety license under the FSS Act, 2006 for all food business operators (FBOs) manufacturing, handling, or selling food.",
      dashboardMetric1: { label: "FoSCoS Approval SLA", value: "3 - 7 Days" },
      dashboardMetric2: { label: "First-Time Pass Rate", value: "99.4%" },
      dashboardSteps: [
        "Food Category Selection & Kitchen Layout Vetting",
        "FoSCoS Central Server Application Lodgement",
        "14-Digit FSSAI Certificate Issuance & E-Locker Deposit"
      ],
      mandatoryItems: [
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Statutory Legal Requirement",
          desc: "Section 31 of the FSS Act makes it illegal to operate any food business without an active FSSAI registration or license."
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Mandatory for Swiggy & Zomato",
          desc: "Non-negotiable requirement for listing on food delivery platforms, cloud kitchen marketplaces, and quick-commerce apps."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Builds Consumer Trust & Hygiene Seal",
          desc: "Printing the 14-digit FSSAI logo on product packaging and menus reassures consumers of verified food safety."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Avoid ₹5 Lakh Fine & Imprisonment",
          desc: "Operating without FSSAI attracts severe penalties up to ₹5,00,000, shop sealing, and up to 6 months imprisonment."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for FSSAI?",
      chooseSubtitle: "Merrafilings – trusted food safety compliance partner for 40,000+ restaurants and food startups.",
      chooseItems: [
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "100% Online FoSCoS Portal Filing",
          desc: "Direct submission on the central Food Safety Compliance System with zero visits to municipal health wards."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Precision License Classification",
          desc: "Expert guidance between Basic Registration (under ₹12L turnover), State License, and Central License categories."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Guaranteed Dossier Review",
          desc: "Thorough vetting of kitchen floorplans, water test reports, and food category codes to eliminate query notices."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Automated Renewal Tracking",
          desc: "Proactive renewal alerts to prevent the ₹100/day late filing penalty before license expiration."
        }
      ]
    };
  }

  // 4. ISO Registration
  if (b.includes("iso")) {
    return {
      mandatoryTag: "INTERNATIONAL QUALITY & SECURITY BENCHMARK",
      mandatoryTitle: "Why ISO Certification is Crucial for Growing Enterprises?",
      mandatorySubtitle: "Internationally recognized quality management certification (ISO 9001, 27001, 14001) that validates enterprise capability.",
      dashboardMetric1: { label: "Turnaround Time", value: "3 - 5 Days" },
      dashboardMetric2: { label: "Global Validity", value: "160+ Countries" },
      dashboardSteps: [
        "Gap Analysis & Quality SOP Manual Preparation",
        "Internal Audit & Stage 1/2 Assessment Review",
        "Accredited ISO Certificate Issuance & QR Validation"
      ],
      mandatoryItems: [
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Mandatory for Govt & Global Tenders",
          desc: "Compulsory pre-qualification criterion for bidding on PSU tenders, defense contracts, and global corporate RFPs."
        },
        {
          icon: <Globe2 className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "International Credibility & Trust",
          desc: "Demonstrates world-class operational standards, risk management, and quality control valid across 160+ countries."
        },
        {
          icon: <Building className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Enterprise & MNC Vendor Onboarding",
          desc: "Mandatory requirement demanded by tier-1 banks, insurance firms, and multinationals before signing vendor agreements."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Reduces Operational Errors & Waste",
          desc: "Streamlines internal business processes, reduces operational defects, and elevates workforce productivity."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for ISO Certification?",
      chooseSubtitle: "Merrafilings – India's accredited corporate certification advisory for fast-growing businesses.",
      chooseItems: [
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "IAF & Internationally Accredited Bodies",
          desc: "Choice of recognized certification bodies with QR-code verifiable certificates for instant global verification."
        },
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Turnkey SOP & Audit Documentation",
          desc: "Expert lead auditors draft your complete quality policy manual, audit checklist, and management reviews."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Fast-Track 3-Day Delivery",
          desc: "Digital certification workflow with fast turnaround and verifiable online validation for tight tender timelines."
        },
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Continuous Surveillance Support",
          desc: "Annual surveillance audit handholding to ensure your certification remains compliant throughout its 3-year validity."
        }
      ]
    };
  }

  // 5. Trade License
  if (b.includes("trade")) {
    return {
      mandatoryTag: "MUNICIPAL CORPORATION STATUTORY COMPLIANCE",
      mandatoryTitle: "Why Municipal Trade License is Mandatory for Commercial Premises?",
      mandatorySubtitle: "Statutory municipal permit required before commencing any commercial, manufacturing, or service operation within municipal limits.",
      dashboardMetric1: { label: "Ward Approval SLA", value: "5 - 7 Days" },
      dashboardMetric2: { label: "Municipal Coverage", value: "Pan-India" },
      dashboardSteps: [
        "Premises & Property Tax Document Audit",
        "Ward Portal Application & Inspection Liaison",
        "Official Municipal Trade License Issuance"
      ],
      mandatoryItems: [
        {
          icon: <Building className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Mandatory Municipal Authorization",
          desc: "Legally required under state municipal corporation acts before operating any retail, manufacturing, or commercial space."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Health, Safety & Fire Clearance",
          desc: "Formally validates that your commercial premise conforms to municipal health bylaws and fire safety norms."
        },
        {
          icon: <Receipt className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Required for Current Accounts & Loans",
          desc: "Essential proof of legitimate commercial location demanded by banks, NBFCs, and payment gateway providers."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Prevent Premature Shop Sealing",
          desc: "Operating without a trade license attracts immediate municipal sealing orders, heavy daily fines, and closure notices."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Trade License?",
      chooseSubtitle: "Merrafilings – Pan-India municipal compliance specialists for retail and commercial enterprises.",
      chooseItems: [
        {
          icon: <Building className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Pan-India Municipal Coverage",
          desc: "Deep expertise across civic corporations in Mumbai (BMC), Delhi (MCD), Bengaluru (BBMP), Chennai, and Kolkata."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Property & Zonal Compliance Audit",
          desc: "Verification of property tax receipts, commercial occupancy NOCs, and master plan zoning rules."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "100% Online Hassle-Free Filing",
          desc: "We handle the entire ward-level liaison and sanitary inspection coordination digitally."
        },
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Annual Renewal Management",
          desc: "Automated advance renewal alerts so your municipal trade license never lapses into late penalty surcharges."
        }
      ]
    };
  }

  // 6. Startup India
  if (b.includes("startup")) {
    return {
      mandatoryTag: "GOVERNMENT OF INDIA DPIIT RECOGNITION",
      mandatoryTitle: "Why DPIIT Startup India Recognition is Crucial for New Ventures?",
      mandatorySubtitle: "Official recognition unlocking 3-year income tax holiday, angel tax exemption, and public procurement benefits.",
      dashboardMetric1: { label: "DPIIT Certificate SLA", value: "2 - 4 Days" },
      dashboardMetric2: { label: "Success Rate", value: "98.4%" },
      dashboardSteps: [
        "Innovation Narrative & Incorporation Charter Review",
        "DPIIT National Portal Registration & Upload",
        "Official Startup India Certificate & Tax Holiday Filing"
      ],
      mandatoryItems: [
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Section 80-IAC 3-Year 100% Tax Holiday",
          desc: "Eligible startups can claim 100% tax exemption on profits for 3 consecutive financial years."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Complete Angel Tax Exemption",
          desc: "Section 56(2)(viib) exemption protects early-stage equity funding raised above fair market value from taxation."
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Exemption in Government Tenders",
          desc: "Relaxed public procurement norms with complete exemption from prior turnover, prior experience, and EMD deposits."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "80% Patent & 50% Trademark Rebates",
          desc: "Massive statutory fee reductions and expedited examination for intellectual property registrations."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Startup India?",
      chooseSubtitle: "Merrafilings – India's #1 startup legal partner, helping 15,000+ startups obtain DPIIT certificates.",
      chooseItems: [
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Specialized Startup Legal Counsel",
          desc: "Seasoned corporate lawyers craft your innovation pitch, business scalability model, and documentation."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "98.4% First-Time DPIIT Approval Rate",
          desc: "Rigorous validation against innovation benchmarks to eliminate rejection risks on the national portal."
        },
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Section 80-IAC Board Prep",
          desc: "Guidance for presenting your pitch before the Inter-Ministerial Board for tax exemption clearance."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Seed Fund & Compliance Advisory",
          desc: "End-to-end support for term sheets, SHA drafting, and Startup India Seed Fund Scheme applications."
        }
      ]
    };
  }

  // 7. RCMC Registration
  if (b.includes("rcmc")) {
    return {
      mandatoryTag: "FOREIGN TRADE POLICY (FTP) EXPORT MANDATE",
      mandatoryTitle: "Why RCMC Registration is Essential for Exporters in India",
      mandatorySubtitle: "Mandatory DGFT authorization connecting exporters with Export Promotion Councils to unlock duty incentives and export benefits.",
      dashboardMetric1: { label: "Council SLA", value: "3 - 5 Days" },
      dashboardMetric2: { label: "FTP Incentives", value: "100% Eligible" },
      dashboardSteps: [
        "Product ITC-HS Code & Appropriate EPC Selection",
        "DGFT e-RCMC Portal Documentation & Application Lodgement",
        "Council Verification & 5-Year RCMC Certificate Issuance"
      ],
      mandatoryItems: [
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Claim RoDTEP & Duty Drawback",
          desc: "Mandatory prerequisite to claim export incentives, customs duty remissions, and RoDTEP financial benefits."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Advance Authorization & EPCG Scheme",
          desc: "Permits duty-free import of raw materials and capital goods for export manufacturing under DGFT foreign trade schemes."
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Export Restricted & Regulated Goods",
          desc: "Legally authorizes your enterprise to trade in restricted goods specified in the Foreign Trade Policy."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Global Trade Delegations & Buyer Meets",
          desc: "Gain privileged access to international buyer-seller meets, foreign trade delegations, and international expos."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for RCMC Registration?",
      chooseSubtitle: "Merrafilings is India's leading foreign trade consultant, facilitating seamless EPC and FIEO registrations for exporters nationwide.",
      chooseItems: [
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Accurate EPC Jurisdiction Mapping",
          desc: "Our trade experts map your business to the exact jurisdiction among 35 Export Promotion Councils, APEDA, or FIEO."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "100% Online DGFT e-RCMC Filing",
          desc: "Fast digital lodgement on the DGFT e-RCMC portal with thorough document validation to eliminate rejections."
        },
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "CA-Certified FX Earnings Support",
          desc: "Assistance with statutory past foreign exchange earnings statements, MOA alignment, and bank documentation."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Post-Registration Compliance & Renewals",
          desc: "Automated alerts for quarterly export return submissions, council amendments, and timely 5-year renewal filing."
        }
      ]
    };
  }

  // 8. Barcode Registration
  if (b.includes("barcode")) {
    return {
      mandatoryTag: "GLOBAL PRODUCT IDENTIFICATION MANDATE",
      mandatoryTitle: "Why GS1 Barcode Registration is Mandatory for Modern Brands",
      mandatorySubtitle: "Assign globally authentic GTIN identifiers to eliminate duplicate SKU errors and meet mandatory marketplace requirements.",
      dashboardMetric1: { label: "GS1 Allocation SLA", value: "2 - 3 Days" },
      dashboardMetric2: { label: "Marketplace Acceptance", value: "100% Guaranteed" },
      dashboardSteps: [
        "Product SKU Analysis & Company Turnover Bracket Mapping",
        "GS1 India National Portal Lodgement & Allotment Filing",
        "Official Allotment Letter & Digital Barcode Files Delivery"
      ],
      mandatoryItems: [
        {
          icon: <Store className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Mandatory for Amazon & Flipkart",
          desc: "Strictly required for product listings, Brand Registry, and preventing hijackers on national e-commerce portals."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Supermarket & Modern Retail POS",
          desc: "Enables instant automated point-of-sale optical barcode scanning across modern retail supermarkets and department stores."
        },
        {
          icon: <Layers className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Global Supply Chain & Quick Commerce",
          desc: "Seamless integration with Blinkit, Zepto, Swiggy Instamart, and international customs tracking systems."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Combat Counterfeits & Duplicates",
          desc: "Unique GS1 prefix identifies your brand globally and protects your consumer goods from duplicate and fake copies."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Barcode Registration?",
      chooseSubtitle: "Merrafilings helps over 10,000+ FMCG, retail, and e-commerce enterprises secure authentic GS1 India barcodes with rapid turnaround.",
      chooseItems: [
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "100% Authentic GS1 India Registration",
          desc: "Direct allocation from GS1 India—never counterfeit or recycled numbers that get delisted by e-commerce platforms."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Expedited 48-Hour Processing",
          desc: "Swift verification of audited financial records and prompt fee lodgement for rapid barcode certificate issuance."
        },
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Digital Barcode Artwork in All Formats",
          desc: "Receive high-resolution print-ready barcode artwork in vector EPS, PNG, and PDF formats for immediate packaging print."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Cataloging & Marketplace Advisory",
          desc: "Hands-on assistance in mapping GTINs with Amazon ASINs, Flipkart FSNs, and packaging compliance regulations."
        }
      ]
    };
  }

  // 9. Digital Signature Certificate (DSC)
  if (b.includes("digital") || b.includes("dsc") || b.includes("signature")) {
    return {
      mandatoryTag: "CCA AUTHORIZED ELECTRONIC IDENTIFICATION",
      mandatoryTitle: "Why Class 3 Digital Signature Certificate (DSC) is Mandatory",
      mandatorySubtitle: "Statutory cryptographic credential required for MCA ROC filings, Income Tax e-filing, GST returns, and government e-tenders under the IT Act 2000.",
      dashboardMetric1: { label: "Issuance SLA", value: "30 - 60 Mins" },
      dashboardMetric2: { label: "Legal Standing", value: "IT Act 2000" },
      dashboardSteps: [
        "Paperless Video KYC & Aadhaar / PAN Verification",
        "Licensed Certifying Authority (eMudhra/Capricorn/NSDL) Approval",
        "FIPS Level 2 Cryptographic USB Token Dispatch / Download"
      ],
      mandatoryItems: [
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "MCA, ROC & Company Incorporation",
          desc: "Mandatory for all company directors and designated partners to sign SPICe+, DIN forms, and annual ROC returns."
        },
        {
          icon: <Receipt className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Income Tax (ITR) & GST Portal e-Filing",
          desc: "Statutorily mandated for corporate tax audits, high-turnover GST returns, and secure e-verification."
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "e-Tendering & Govt e-Procurement",
          desc: "Mandatory Signing + Encryption Class 3 DSC to bid on GeM, Indian Railways, CPWD, and state procurement portals."
        },
        {
          icon: <Globe2 className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "DGFT & Customs ICEGATE Clearance",
          desc: "Enables secure transmission of shipping bills, bill of entry, and export incentive claims on the ICEGATE portal."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Digital Signature Certificates?",
      chooseSubtitle: "Merrafilings issues over 25,000+ Class 3 DSC tokens annually with instantaneous paperless verification and pan-India express courier delivery.",
      chooseItems: [
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Instant 30-Minute Paperless Video KYC",
          desc: "Zero physical paperwork—complete quick Aadhaar OTP and 15-second video recording from your smartphone or laptop."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "CCA Licensed Certifying Authorities",
          desc: "Direct issuance from authorized CAs including eMudhra, Capricorn, and NSDL ensuring 100% legal compliance."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Pre-Configured FIPS USB Token",
          desc: "Shipped in genuine high-security FIPS Level 2 certified cryptographic USB tokens (HYP2003 / ProxKey) with password protection."
        },
        {
          icon: <Laptop className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Free Remote Technical Driver Setup",
          desc: "Our technical support team assists via remote screen share to configure token drivers and browser signing certificates."
        }
      ]
    };
  }

  // 10. Shop and Establishment Act Registration
  if (b.includes("shop") || b.includes("establishment")) {
    return {
      mandatoryTag: "STATE LABOUR DEPARTMENT STATUTORY MANDATE",
      mandatoryTitle: "Why Shop & Establishment Act Registration is Mandatory",
      mandatorySubtitle: "State municipal license establishing lawful commercial operation, commercial bank account eligibility, and statutory labor compliance.",
      dashboardMetric1: { label: "Approval SLA", value: "2 - 5 Days" },
      dashboardMetric2: { label: "State Coverage", value: "Pan-India 28 States" },
      dashboardSteps: [
        "Commercial Premises Proof & Entity KYC Scrutiny",
        "State Labour Portal Digital Form Lodgement & Fee Payment",
        "Labour Inspector Verification & Official Certificate Issuance"
      ],
      mandatoryItems: [
        {
          icon: <Store className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Mandatory Commercial Premises License",
          desc: "Compulsory for all commercial offices, retail shops, warehouses, software hubs, and restaurants within 30 days of opening."
        },
        {
          icon: <Building className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Current Bank Account Proof",
          desc: "Serves as authoritative legal proof of business establishment required by leading banks to open commercial current accounts."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Employee Welfare & Working Hours",
          desc: "Regulates statutory employment norms—daily working hours, overtime wages, mandatory weekly offs, and employee health safeguards."
        },
        {
          icon: <AlertTriangle className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Shield Against Fines & Sealing",
          desc: "Protects your enterprise against surprise municipal labor inspections, business closure notices, and compounding daily penalties."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Shop Act Registration?",
      chooseSubtitle: "Merrafilings manages state-specific labor registrations for over 30,000+ commercial establishments across all 28 states and union territories.",
      chooseItems: [
        {
          icon: <Globe2 className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Pan-India State Portal Expertise",
          desc: "Tailored documentation and exact portal filing across Delhi, Maharashtra (Gumasta), Karnataka (e-Karmika), Tamil Nadu, and all states."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "100% Online Digital Filing",
          desc: "Complete digital lodgement without visiting local municipal corporations or labor commissioner offices."
        },
        {
          icon: <FileSpreadsheet className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Compliant Statutory Register Kits",
          desc: "Complimentary digital templates for statutory wage registers, leave books, inspection registers, and accident registers."
        },
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Renewal Alerts & Inspection Advisory",
          desc: "Proactive tracking of validity periods and dedicated labor compliance advisory for handling official department queries."
        }
      ]
    };
  }

  // 11. Udyam / MSME Registration
  if (b.includes("udyam") || b.includes("msme")) {
    return {
      mandatoryTag: "MINISTRY OF MSME STATUTORY RECOGNITION",
      mandatoryTitle: "Why Udyam (MSME) Registration is Vital for Business Growth",
      mandatorySubtitle: "Official statutory registration with the Ministry of MSME unlocking priority credit lending, collateral-free loans, 45-day payment security, and government subsidies.",
      dashboardMetric1: { label: "Certificate SLA", value: "1 - 2 Days" },
      dashboardMetric2: { label: "Validity", value: "Lifetime Free" },
      dashboardSteps: [
        "Aadhaar & PAN Verification with NIC Code Mapping",
        "National Udyam Portal Application Lodgement",
        "Permanent Udyam Registration Certificate Issuance"
      ],
      mandatoryItems: [
        {
          icon: <Landmark className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Priority Lending & Cheaper Loans",
          desc: "Access collateral-free bank loans under CGTMSE and 1-2% interest rate subventions from scheduled banks."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "45-Day Payment Protection",
          desc: "Under MSME Act Section 15 and IT Act Section 43B(h), buyers must clear dues within 45 days or face compounding interest."
        },
        {
          icon: <BadgePercent className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "50% Patent & Trademark Subsidies",
          desc: "Enjoy 50% statutory fee concessions on trademark filings and up to 80% subsidies on government patent processing."
        },
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "GeM Portal & Tender Waivers",
          desc: "Exemption from Earnest Money Deposits (EMD) and tender fees in public procurement and GeM tenders."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Udyam Registration?",
      chooseSubtitle: "Merrafilings has empowered over 50,000+ micro, small, and medium enterprises to secure Udyam certification with zero hassles.",
      chooseItems: [
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Accurate 5-Digit NIC Mapping",
          desc: "Our regulatory specialists map up to 10 NIC activity codes to maximize eligibility across government schemes."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "100% Error-Free Lodgement",
          desc: "Flawless validation of GST, PAN, and investment parameters to ensure zero rejection or portal discrepancy flags."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "GeM & TReDS Onboarding Support",
          desc: "Seamless post-registration guidance for listing on the Government e-Marketplace and TReDS bill discounting platforms."
        },
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Lifetime Certificate Locker",
          desc: "Access your digital QR-coded Udyam certificate 24/7 with automated alerts for annual investment/turnover updates."
        }
      ]
    };
  }

  // 12. Legal Name Change / Gazette
  if (b.includes("name") || b.includes("gazette")) {
    return {
      mandatoryTag: "OFFICIAL GOVERNMENT GAZETTE PUBLICATION",
      mandatoryTitle: "Why Formal Legal Name Change is Crucial in India",
      mandatorySubtitle: "Statutory 3-step legal procedure required to update official identity records across Passport, PAN, Aadhaar, educational certificates, and banking credentials.",
      dashboardMetric1: { label: "Central Gazette SLA", value: "3 - 4 Weeks" },
      dashboardMetric2: { label: "Legal Standing", value: "100% Pan-India" },
      dashboardSteps: [
        "Notarized Name Change Affidavit Drafting",
        "National Newspaper Advertisement Publication (English + Vernacular)",
        "Official Central Government Gazette Notification & Delivery"
      ],
      mandatoryItems: [
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Legally Binding Notarized Affidavit",
          desc: "First mandatory step executed on non-judicial stamp paper stating old name, new name, and valid legal reason."
        },
        {
          icon: <Globe2 className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Mandatory for Passport & Visa Reissue",
          desc: "MEA and passport seva kendras strictly mandate Central Gazette publication for major name changes and adult identity updates."
        },
        {
          icon: <CheckCircle2 className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Clean PAN & Aadhaar KYC Sync",
          desc: "Eliminates name mismatch errors across banks, EPFO, mutual funds, property titles, and income tax records."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Central Gazette Pan-India Recognition",
          desc: "Published in the official Gazette of India (Department of Publication), serving as conclusive government legal proof."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Legal Name Change?",
      chooseSubtitle: "Merrafilings manages complete end-to-end name change procedures for individuals, married women, minors, and NRIs across all states.",
      chooseItems: [
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Legally Vetted Affidavit Drafting",
          desc: "Customized legal affidavit tailored to your specific reason (marriage, divorce, spelling error, numerology, religion)."
        },
        {
          icon: <Receipt className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "National Newspaper Ad Publication",
          desc: "We coordinate statutory ad releases in leading English and state vernacular newspapers without you visiting press offices."
        },
        {
          icon: <Building className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Direct Central Gazette Liaison",
          desc: "Complete documentation submission and fee lodgement with the Department of Publication (Civil Lines, Delhi)."
        },
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Post-Gazette KYC Update Support",
          desc: "Step-by-step guidance to update your new legal name across Aadhaar, PAN, Passport, driving license, and bank accounts."
        }
      ]
    };
  }

  // 13. Trademark Objection
  if (b.includes("objection")) {
    return {
      mandatoryTag: "TRADEMARK ACT 1999 STATUTORY EXAMINATION DEFENSE",
      mandatoryTitle: "Why Timely Trademark Objection Reply is Mandatory",
      mandatorySubtitle: "Failure to file a comprehensive legal reply within the statutory 30-day window results in your trademark being marked 'Abandoned' with complete loss of brand rights.",
      dashboardMetric1: { label: "Statutory Deadline", value: "Strict 30 Days" },
      dashboardMetric2: { label: "Success Rate", value: "97.6%" },
      dashboardSteps: [
        "Examination Report & Objection Grounds Scrutiny (Sec 9 & 11)",
        "Legal Counter-Drafting with Case Law & Supporting Proof",
        "IP India Portal Lodgement & Examiner Acceptance Tracking"
      ],
      mandatoryItems: [
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-rose-50",
          iconColor: "text-rose-600",
          hoverBorder: "hover:border-rose-500",
          title: "Strict 30-Day Statutory Limitation",
          desc: "Section 21 and Trademark Rules mandate submitting a written rebuttal within 30 days of receiving the examination report."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Overcome Section 9 Absolute Grounds",
          desc: "Proves acquired distinctiveness and commercial recognition to defeat non-distinctive or descriptive objections."
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Overcome Section 11 Relative Conflicts",
          desc: "Differentiates your mark from cited prior marks using phonetic, visual, and trade channel distinction precedents."
        },
        {
          icon: <AlertTriangle className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Prevent Irreversible Abandonment",
          desc: "Timely reply safeguards your application date, priority rights, and prevents third-party rivals from hijacking the mark."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Trademark Objection?",
      chooseSubtitle: "Handled by senior Intellectual Property attorneys with extensive citation libraries and high-court precedent mastery.",
      chooseItems: [
        {
          icon: <Award className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Senior IP Attorneys & TM Agents",
          desc: "Custom-drafted legal replies prepared by experienced trademark lawyers—never generic automated templates."
        },
        {
          icon: <FileText className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Robust Evidence & User Affidavit",
          desc: "Compilation of invoices, turnover certificates, and marketing collaterals demonstrating continuous prior commercial use."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Seamless E-Filing on IP India Portal",
          desc: "Official digital submission under Form TM-M with real-time acknowledgment and status tracking till publication."
        },
        {
          icon: <Users className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Dedicated Hearing Support",
          desc: "Comprehensive preparation and legal advocacy if a show-cause hearing is scheduled before the Trademark Hearing Officer."
        }
      ]
    };
  }

  // 14. Trademark Renewal
  if (b.includes("renewal")) {
    return {
      mandatoryTag: "SECTION 25 TRADEMARK ACT STATUTORY RENEWAL",
      mandatoryTitle: "Why Renewing Your Trademark Every 10 Years is Crucial",
      mandatorySubtitle: "Statutory protection under the Trade Marks Act 1999 expires after 10 years; timely renewal preserves exclusive monopoly, brand equity, and prevents third-party trademark squatting.",
      dashboardMetric1: { label: "Renewal Extension", value: "10 Years" },
      dashboardMetric2: { label: "Grace Period", value: "6 Months" },
      dashboardSteps: [
        "Trademark Register Search & Form TM-R Preparation",
        "Statutory Government Fee Lodgement & Portal Filing",
        "Trademark Journal Notification & Renewal Certificate Grant"
      ],
      mandatoryItems: [
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Preserve Exclusive Brand Monopoly",
          desc: "Maintains perpetual ownership and legal protection to sue infringers under Section 29 of the Trade Marks Act 1999."
        },
        {
          icon: <AlertTriangle className="w-5 h-5" />,
          iconBg: "bg-rose-50",
          iconColor: "text-rose-600",
          hoverBorder: "hover:border-rose-500",
          title: "Prevent Removal from Register (Sec 25)",
          desc: "Non-renewal results in your mark being deleted from the official Register, allowing competitors to claim your brand name."
        },
        {
          icon: <Receipt className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Avoid Heavier Restoration Surcharges",
          desc: "Renewing within the primary window avoids expensive government restoration penalty fees applicable after expiration."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Protect Commercial Goodwill & Valuation",
          desc: "An active trademark registration is essential for brand valuation, franchising, investor due diligence, and licensing deals."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Trademark Renewal?",
      chooseSubtitle: "Merrafilings manages renewal and portfolio maintenance for over 40,000+ registered trademarks across all 45 classes.",
      chooseItems: [
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Automated 10-Year Expiry Tracking",
          desc: "Proactive surveillance ensures Form TM-R is prepared and submitted well before the statutory deadline."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Zero Downtime Form TM-R Filing",
          desc: "Instant paperless digital submission on the IP India gateway with immediate government fee challan delivery."
        },
        {
          icon: <Scale className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Restoration & Late Renewal Handling",
          desc: "Expert handling of restoration petitions for marks expired within the 6-month to 1-year statutory restoration window."
        },
        {
          icon: <FileCheck className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Updated Digital Certificate Delivery",
          desc: "Official Certificate of Renewal issued by the Registrar of Trade Marks delivered directly to your digital vault."
        }
      ]
    };
  }

  // 15. Trademark Registration
  if (b.includes("trademark")) {
    return {
      mandatoryTag: "CONTROLLER GENERAL OF PATENTS, DESIGNS & TRADEMARKS",
      mandatoryTitle: "Why Trademark Registration is Essential for Your Brand",
      mandatorySubtitle: "Legal ownership granting exclusive nationwide rights to use your brand name, logo, and slogan, with statutory power to stop counterfeiters and copycats.",
      dashboardMetric1: { label: "Filing SLA", value: "Same Day (TM)" },
      dashboardMetric2: { label: "Protection", value: "10-Year Validity" },
      dashboardSteps: [
        "Comprehensive Public Trademark Search & Nice Class Mapping",
        "Form TM-A Filing on IP India Portal & Instant ™ Allotment",
        "Examiner Clearance, Journal Publication & ® Certificate Grant"
      ],
      mandatoryItems: [
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Exclusive Legal Monopoly",
          desc: "Confers exclusive nationwide statutory rights to your brand name, symbol, logo, or tagline under the Trade Marks Act 1999."
        },
        {
          icon: <Sparkles className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "Immediate Right to Use ™ Symbol",
          desc: "Use the ™ symbol immediately after filing Form TM-A to signal brand ownership and deter unauthorized imitators."
        },
        {
          icon: <AlertTriangle className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Combat Infringers & Counterfeiters",
          desc: "Empowers you to file civil and criminal infringement suits, claim damages, and seek commercial injunctions."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Valuable Intangible Business Asset",
          desc: "Can be sold, franchised, licensed, or pledged, significantly boosting corporate valuation during funding rounds."
        }
      ],
      chooseTag: "THE MERRAFILINGS ADVANTAGE",
      chooseTitle: "Why Choose Merrafilings for Trademark Registration?",
      chooseSubtitle: "Merrafilings is India's #1 IP legal platform, having filed and managed over 100,000+ trademark applications nationwide.",
      chooseItems: [
        {
          icon: <Globe2 className="w-5 h-5" />,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverBorder: "hover:border-blue-500",
          title: "In-Depth Public Search & Analysis",
          desc: "Multi-layered similarity search across phonetic, visual, and semantic registers to eliminate objection risks."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          hoverBorder: "hover:border-emerald-500",
          title: "Same-Day Form TM-A E-Filing",
          desc: "Rapid digital lodgement on the official IP India gateway with instant application number and TM receipt issuance."
        },
        {
          icon: <Layers className="w-5 h-5" />,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverBorder: "hover:border-purple-500",
          title: "Accurate Nice Class Mapping (1 to 45)",
          desc: "Precise classification of products and services under international Nice Classification to prevent misclassification."
        },
        {
          icon: <Clock className="w-5 h-5" />,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          hoverBorder: "hover:border-amber-500",
          title: "Continuous Lifecycle Monitoring",
          desc: "Automated tracking through examination, opposition periods, journal publication, and final registration certificate issuance."
        }
      ]
    };
  }

  // 16. General Fallback
  return {
    mandatoryTag: "STATUTORY CORPORATE MANDATE",
    mandatoryTitle: `Why ${breadcrumbCurrent} is Essential for Your Business`,
    mandatorySubtitle: "Ensure 100% regulatory compliance, protect your enterprise against penalties, and unlock legitimate commercial operations.",
    dashboardMetric1: { label: "Processing SLA", value: "3 - 5 Days" },
    dashboardMetric2: { label: "Govt SLA", value: "Guaranteed" },
    dashboardSteps: [
      "Entity KYC & Statutory Documentation Scrutiny",
      "Government Portal Profile & Application Lodgement",
      "Official Certificate Issuance & E-Locker Deposit"
    ],
    mandatoryItems: [
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        hoverBorder: "hover:border-emerald-500",
        title: "Statutory Legal Validity",
        desc: "Ensures your enterprise operates with lawful regulatory standing across municipal, state, and central jurisdictions."
      },
      {
        icon: <Briefcase className="w-5 h-5" />,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        hoverBorder: "hover:border-blue-500",
        title: "Commercial Banking & Funding",
        desc: "Essential prerequisite for opening current bank accounts, securing term loans, and attracting equity investments."
      },
      {
        icon: <Scale className="w-5 h-5" />,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        hoverBorder: "hover:border-purple-500",
        title: "Avoid Regulatory Sanctions & Fines",
        desc: "Protects your management from compounding late penalties, compliance notices, and operational disruption."
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        hoverBorder: "hover:border-amber-500",
        title: "Market Credibility & Client Trust",
        desc: "Signals institutional credibility to enterprise clients, vendor networks, and institutional partners."
      }
    ],
    chooseTag: "THE MERRAFILINGS ADVANTAGE",
    chooseTitle: `Why Choose Merrafilings for ${breadcrumbCurrent}?`,
    chooseSubtitle: "Merrafilings – India's trusted corporate compliance cloud & regulatory advisory platform.",
    chooseItems: [
      {
        icon: <Users className="w-5 h-5" />,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        hoverBorder: "hover:border-blue-500",
        title: "Assigned Senior Specialists",
        desc: "Dedicated corporate attorneys, CAs, and CS professionals supervising every application step."
      },
      {
        icon: <Zap className="w-5 h-5" />,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        hoverBorder: "hover:border-emerald-500",
        title: "100% Online Paperless Process",
        desc: "Zero physical queues or department visits — complete digital submission and e-certificate delivery."
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        hoverBorder: "hover:border-purple-500",
        title: "LEDGERS Cloud Automated Filing",
        desc: "Integrated compliance dashboard providing timely renewal alerts and secure digital record vaults."
      },
      {
        icon: <Award className="w-5 h-5" />,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        hoverBorder: "hover:border-amber-500",
        title: "Transparent Upfront Pricing",
        desc: "Honest, all-inclusive quotes with zero surprise department liaison fees or unexpected charges."
      }
    ]
  };
}

export interface ServicePageContextType {
  openContactModal: (serviceTitle?: string) => void;
  openSearchModal: () => void;
}

export const ServicePageContext = React.createContext<ServicePageContextType>({
  openContactModal: () => {},
  openSearchModal: () => {},
});

export const useServicePage = () => React.useContext(ServicePageContext);

export interface PricingPackage {
  name: string;
  badge?: string;
  popular?: boolean;
  shortDesc: string;
  expandedDesc?: string;
  price: string;
  priceSub: string;
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServicePageTemplateProps {
  badgeText?: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  formTitle: string;
  formSubtitle: string;
  formFeatures?: Array<{
    text: React.ReactNode;
    icon?: React.ReactNode;
    isLink?: boolean;
    href?: string;
  }>;
  packages: PricingPackage[];
  pricingTitle?: React.ReactNode;
  pricingSubtitle?: string;
  breadcrumbCurrent: string;
  spotlight?: ServiceSpotlightData;
  guideTitle?: string;
  guideContent: React.ReactNode;
  relatedGuides: (string | { title: string; href: string })[];
  relatedGuidesTitle?: string;
  faqCol1: FAQItem[];
  faqCol2: FAQItem[];
  faqExtraCol1?: FAQItem[];
  faqExtraCol2?: FAQItem[];
  faqSubtitle?: string;
  relatedServicesTags?: string[];
  popularSearchesTags?: string[];
}

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi NCR",
  "Chandigarh",
  "Jammu & Kashmir",
  "Ladakh",
  "Puducherry",
];

const CLIENT_MINI_CARDS = [
  {
    name: "CRED",
    logo: <span className="text-[17px] font-bold tracking-tighter text-slate-800 select-none">CRED</span>,
  },
  {
    name: "meesho",
    logo: <span className="text-[16px] font-extrabold tracking-tight text-[#9A216A] select-none">meesho</span>,
  },
  {
    name: "groww",
    logo: <span className="text-[16px] font-bold tracking-tight text-[#00D09C] select-none">GROWW</span>,
  },
  {
    name: "razorpay",
    logo: <span className="text-[15px] font-bold tracking-tight text-[#0C2340] select-none">Razorpay</span>,
  },
  {
    name: "zerodha",
    logo: <span className="text-[15px] font-semibold tracking-wider text-[#387ED1] select-none">ZERODHA</span>,
  },
  {
    name: "zomato",
    logo: <span className="text-[16px] font-black tracking-tight text-[#E23744] select-none italic">zomato</span>,
  },
  {
    name: "swiggy",
    logo: <span className="text-[15px] font-extrabold tracking-tight text-[#FC8019] select-none">SWIGGY</span>,
  },
  {
    name: "cleartax",
    logo: <span className="text-[15px] font-bold tracking-tight text-[#1F3A93] select-none">cleartax</span>,
  },
];

const DELIVERABLE_THEMES = [
  {
    // Indigo / Violet (Matches Screenshot Card 1)
    iconBox: "bg-indigo-50 text-indigo-600 border-indigo-100/90 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600",
    hoverBorder: "hover:border-indigo-500",
    hoverShadow: "hover:shadow-indigo-500/15",
    hoverBg: "hover:bg-indigo-50/15",
    linkText: "text-indigo-700 hover:text-indigo-800",
  },
  {
    // Purple (Matches Screenshot Card 2 active/hover effect)
    iconBox: "bg-purple-50 text-purple-600 border-purple-100/90 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-purple-500/15",
    hoverBg: "hover:bg-purple-50/15",
    linkText: "text-purple-700 hover:text-purple-800",
  },
  {
    // Blue / Corporate
    iconBox: "bg-blue-50 text-blue-600 border-blue-100/90 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
    hoverBorder: "hover:border-blue-500",
    hoverShadow: "hover:shadow-blue-500/15",
    hoverBg: "hover:bg-blue-50/15",
    linkText: "text-blue-700 hover:text-blue-800",
  },
  {
    // Teal
    iconBox: "bg-teal-50 text-teal-600 border-teal-100/90 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",
    hoverBorder: "hover:border-teal-500",
    hoverShadow: "hover:shadow-teal-500/15",
    hoverBg: "hover:bg-teal-50/15",
    linkText: "text-teal-700 hover:text-teal-800",
  },
  {
    // Emerald / Forest
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100/90 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
    hoverBorder: "hover:border-emerald-500",
    hoverShadow: "hover:shadow-emerald-500/15",
    hoverBg: "hover:bg-emerald-50/15",
    linkText: "text-emerald-700 hover:text-emerald-800",
  },
  {
    // Amber / Bronze
    iconBox: "bg-amber-50 text-amber-600 border-amber-100/90 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
    hoverBorder: "hover:border-amber-500",
    hoverShadow: "hover:shadow-amber-500/15",
    hoverBg: "hover:bg-amber-50/15",
    linkText: "text-amber-700 hover:text-amber-800",
  },
];

function getSpotlightCardColorClasses(item: SpotlightCardItem) {
  const border = item.hoverBorder || "hover:border-emerald-500";
  let shadow = "hover:shadow-emerald-500/10";
  let groupHoverText = "group-hover:text-emerald-700";

  if (border.includes("blue")) {
    shadow = "hover:shadow-blue-500/10";
    groupHoverText = "group-hover:text-blue-700";
  } else if (border.includes("amber")) {
    shadow = "hover:shadow-amber-500/10";
    groupHoverText = "group-hover:text-amber-700";
  } else if (border.includes("indigo")) {
    shadow = "hover:shadow-indigo-500/10";
    groupHoverText = "group-hover:text-indigo-700";
  } else if (border.includes("purple")) {
    shadow = "hover:shadow-purple-500/10";
    groupHoverText = "group-hover:text-purple-700";
  } else if (border.includes("teal")) {
    shadow = "hover:shadow-teal-500/10";
    groupHoverText = "group-hover:text-teal-700";
  } else if (border.includes("rose") || border.includes("red")) {
    shadow = "hover:shadow-rose-500/10";
    groupHoverText = "group-hover:text-rose-700";
  }

  return { border, shadow, groupHoverText };
}

export default function ServicePageTemplate({
  badgeText = "Fast-Track Government & Corporate Filing",
  heroTitle,
  heroSubtitle,
  formTitle,
  formSubtitle,
  formFeatures,
  packages,
  pricingTitle = (
    <>
      Simple packages. Transparent <span className="font-normal text-[#00B074]">pricing.</span>
    </>
  ),
  pricingSubtitle = "Choose the right package tailored for your business scale.",
  breadcrumbCurrent,
  guideTitle,
  guideContent,
  relatedGuides,
  relatedGuidesTitle = "Related Guides",
  faqCol1,
  faqCol2,
  faqExtraCol1 = [],
  faqExtraCol2 = [],
  faqSubtitle,
  relatedServicesTags = [
    "Private Limited Company",
    "LLP Registration",
    "One Person Company",
    "GST Registration",
    "Trademark Registration",
    "Startup India Registration",
    "LEI Code Registration",
    "Import Export Code (IEC)",
  ],
  popularSearchesTags = [
    "Online registration in India",
    "Government portal filing fees",
    "Certificate download PDF",
    "MCA ROC annual compliances",
    "Fast-track processing timelines",
  ],
  spotlight,
}: ServicePageTemplateProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [modalServiceTitle, setModalServiceTitle] = useState(breadcrumbCurrent);
  const spotlightData = spotlight || getServiceSpotlightData(breadcrumbCurrent, badgeText);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formState, setFormState] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing read more states
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<string | null>("faq-c1-0");
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);

  // State directory collapse
  const [stateListOpen, setStateListOpen] = useState(true);

  // Clients carousel ref
  const clientScrollRef = useRef<HTMLDivElement>(null);

  const scrollClients = (direction: "left" | "right") => {
    if (clientScrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formEmail && formPhone && formState) {
      setFormSubmitted(true);
    }
  };

  const openServiceModal = (customTitle?: string) => {
    setModalServiceTitle(customTitle || breadcrumbCurrent);
    setContactOpen(true);
  };

  return (
    <ServicePageContext.Provider
      value={{
        openContactModal: openServiceModal,
        openSearchModal: () => setSearchOpen(true),
      }}
    >
      <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-[#155EEF] selection:text-white">
        {/* 1. Header Navigation */}
        <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenContact={() => openServiceModal()} />

      {/* 2. Redesigned Editorial Hero: Asymmetric Command Center */}
      <section className="hero-section no-reveal is-revealed relative pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden font-sans">
        {/* Dynamic ambient floating light blooms */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-emerald-100/35 via-teal-100/20 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse" />
        <div className="absolute top-10 right-1/4 w-[450px] h-[300px] bg-gradient-to-bl from-blue-100/25 via-slate-100/30 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFA]/60 via-white to-white pointer-events-none" />

        <div className="relative w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            {/* Left Column (7 Cols): Headline, Value Matrix & Trust Badges */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Category Pill with Live Pulse Dot */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-medium tracking-tight shadow-xs hover:border-slate-300 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>{badgeText}</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-semibold">Dual CA/CS Vetted</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal leading-[1.15] text-[#0F172A] tracking-tight">
                  {heroTitle}
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 font-normal max-w-2xl xl:max-w-3xl">
                  {heroSubtitle}
                </p>
              </div>

              {/* Interactive Deliverables / Features Grid */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Standard Service Inclusions &amp; Workflow
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {formFeatures ? (
                    formFeatures.map((feat, idx) => {
                      const theme = DELIVERABLE_THEMES[idx % DELIVERABLE_THEMES.length];
                      return (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs ${theme.hoverBorder} ${theme.hoverShadow} ${theme.hoverBg} hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
                        >
                          <div className={`w-8 h-8 rounded-xl ${theme.iconBox} flex items-center justify-center shrink-0 transition-all duration-200`}>
                            {feat.icon || <Check className="w-4 h-4" />}
                          </div>
                          {feat.isLink ? (
                            <a
                              href={feat.href || "#documents-required"}
                              className={`text-xs sm:text-[13px] font-semibold ${theme.linkText} flex items-center gap-1.5 group-hover:translate-x-1 transition-transform`}
                            >
                              <span>{feat.text}</span>
                            </a>
                          ) : (
                            <span className="text-xs sm:text-[13px] text-slate-800 font-medium group-hover:text-slate-950 transition-colors">
                              {feat.text}
                            </span>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] text-slate-800 font-medium group-hover:text-emerald-900 transition-colors">
                          Eligibility Check &amp; Advisory
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-500 hover:shadow-blue-500/10 hover:bg-blue-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] text-slate-800 font-medium group-hover:text-blue-900 transition-colors">
                          Document Review &amp; Drafting
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-500 hover:shadow-teal-500/10 hover:bg-teal-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 border border-teal-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-200">
                          <Building className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] text-slate-800 font-medium group-hover:text-teal-900 transition-colors">
                          Government Portal Application Filing
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-indigo-500 hover:shadow-indigo-500/10 hover:bg-indigo-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] text-slate-800 font-medium group-hover:text-indigo-900 transition-colors">
                          Official Certificate Issuance
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-500 hover:shadow-purple-500/10 hover:bg-purple-50/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer group sm:col-span-2">
                        <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 border border-purple-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <a
                          href="#documents-required"
                          className="text-xs sm:text-[13px] font-semibold text-purple-700 hover:text-purple-800 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                        >
                          <span>Required Documents Checklist &rarr;</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Streamlined Live Trust Metrics Strip */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-1 font-semibold text-[13px] text-slate-900">
                    <span>4.9</span>
                    <span className="text-amber-400 text-xs">★★★★★</span>
                  </div>
                  <div className="text-[11px] font-normal text-slate-500 mt-0.5">Verified Reviews</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 hover:bg-amber-50/15 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                  <div className="font-semibold text-[13px] text-slate-900 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>15+ Years</span>
                  </div>
                  <div className="text-[11px] font-normal text-slate-500 mt-0.5">CA Track Record</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                  <div className="font-semibold text-[13px] text-slate-900 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    <span>250,000+</span>
                  </div>
                  <div className="text-[11px] font-normal text-slate-500 mt-0.5">Clients Served</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 hover:bg-emerald-50/15 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                  <div className="font-semibold text-[13px] text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Live Tracking</span>
                  </div>
                  <div className="text-[11px] font-normal text-slate-500 mt-0.5">MCA &amp; GST Sync</div>
                </div>
              </div>
            </div>

            {/* Right Column (5 Cols): The "Smart Registration Desk" Intake Portal */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm relative hover:border-slate-300 hover:shadow-md transition-all duration-300 text-left">
                {/* Security Tag */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <Lock className="w-3.5 h-3.5" />
                    <span>256-Bit Bank-Grade SSL</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Dual CA/CS Assigned</span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl font-normal text-slate-900 leading-snug">
                  {formTitle}
                </h2>
                <p className="mt-1 text-xs text-slate-600 font-normal leading-relaxed mb-5">
                  {formSubtitle}
                </p>

                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Application Received!</h3>
                    <p className="text-[13px] text-slate-600">
                      Thank you, <strong className="text-slate-900">{formName}</strong>. Our corporate advisory team
                      will call you at <strong className="text-slate-900">{formPhone}</strong> within 15 minutes.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 text-[13px] font-medium text-emerald-700 hover:underline cursor-pointer"
                    >
                      Submit another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    {/* Google SSO Button */}
                    <button
                      type="button"
                      onClick={() => alert("Google Single Sign-On simulation. Please fill in the details below.")}
                      className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl text-[13px] font-medium text-slate-700 shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      <span>Continue with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center my-2">
                      <div className="border-t border-slate-200 w-full" />
                      <span className="bg-white px-2.5 text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider absolute">
                        OR
                      </span>
                    </div>

                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-4 py-2.5 min-h-[44px] bg-slate-50/70 border border-slate-200 rounded-xl text-base sm:text-[13px] font-normal text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Official Email *"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full px-4 py-2.5 min-h-[44px] bg-slate-50/70 border border-slate-200 rounded-xl text-base sm:text-[13px] font-normal text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone with Flag */}
                    <div className="flex">
                      <span className="inline-flex items-center gap-1 px-3 py-2.5 min-h-[44px] bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs sm:text-[12.5px] text-slate-600 font-normal select-none">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number *"
                        pattern="[0-9]{10}"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="flex-1 min-w-0 px-4 py-2.5 min-h-[44px] bg-slate-50/70 border border-slate-200 rounded-r-xl text-base sm:text-[13px] font-normal text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <select
                        required
                        value={formState}
                        onChange={(e) => setFormState(e.target.value)}
                        className="w-full px-4 py-2.5 min-h-[44px] bg-slate-50/70 border border-slate-200 rounded-xl text-base sm:text-[13px] font-normal text-slate-700 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="">Select Operating State *</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full font-medium text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
                      >
                        <span>Continue Application</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                        100% Free Initial Assessment • Zero Hidden Costs
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Live Statutory Approvals Marquee Ribbon */}
      <div className="bg-[#FAFBFB] border-b border-slate-200/80 py-2.5 overflow-hidden font-sans select-none relative">
        <div className="flex items-center gap-4">
          <div className="shrink-0 flex items-center gap-2 pl-4 sm:pl-6 z-20 bg-[#FAFBFB] pr-3 border-r border-slate-200/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider whitespace-nowrap">
              Live Approvals
            </span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-3">
              {[
                { title: "Pvt Ltd Approved", city: "Bengaluru, KA", sla: "SLA: 3 Days" },
                { title: "Trademark TM-A Registered", city: "Mumbai, MH", sla: "Direct e-Filing" },
                { title: "GSTR-3B Tax Return Filed", city: "Delhi NCR", sla: "100% ITC Matched" },
                { title: "Udyam MSME Certificate Issued", city: "Chennai, TN", sla: "Instant Allotment" },
                { title: "FSSAI Central License Granted", city: "Ahmedabad, GJ", sla: "5-Year Term" },
                { title: "DIR-3 KYC Director DIN Authenticated", city: "Pune, MH", sla: "Zero Late Fee" },
                { title: "Pvt Ltd Approved", city: "Bengaluru, KA", sla: "SLA: 3 Days" },
                { title: "Trademark TM-A Registered", city: "Mumbai, MH", sla: "Direct e-Filing" },
                { title: "GSTR-3B Tax Return Filed", city: "Delhi NCR", sla: "100% ITC Matched" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-xs text-slate-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-semibold text-slate-900">{item.title}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{item.city}</span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    {item.sla}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Social Proof Strip (Single-Row Logo Marquee) */}
      <section className="py-7 border-b border-slate-100 bg-white overflow-hidden">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider shrink-0">
              Trusted by India&apos;s fastest growing scaleups:
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
              <button
                type="button"
                onClick={() => scrollClients("left")}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-3xs hover:shadow-sm hover:border-slate-300 hover:scale-105 active:scale-95 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all shrink-0 cursor-pointer"
                aria-label="Scroll clients left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div
                ref={clientScrollRef}
                className="flex items-center gap-4 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth"
              >
                {CLIENT_MINI_CARDS.map((client, idx) => (
                  <div
                    key={idx}
                    className="min-w-[120px] h-[50px] px-3.5 rounded-xl border border-slate-200/70 bg-[#FAF9F7]/60 hover:bg-white hover:border-[#00B074] hover:shadow-sm hover:scale-105 flex items-center justify-center transition-all duration-200 shrink-0 select-none cursor-pointer"
                  >
                    {client.logo}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollClients("right")}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-3xs flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all shrink-0 cursor-pointer"
                aria-label="Scroll clients right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. Service Strategic Spotlight: Why Mandatory & Why Choose Merrafilings */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 font-sans relative overflow-hidden">
        {/* Subtle ambient bloom */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-100/25 blur-3xl rounded-full pointer-events-none" />

        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 space-y-16 lg:space-y-20 relative z-10">
          {/* Part 1: Why Mandatory */}
          <div className="space-y-8 sm:space-y-10">
            <div data-reveal="down" className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{spotlightData.mandatoryTag}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 leading-snug">
                {spotlightData.mandatoryTitle}
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
                {spotlightData.mandatorySubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Interactive Statutory Gateway Card */}
              <div data-reveal="left" className="lg:col-span-5 flex flex-col text-left">
                <div className="bg-white rounded-3xl p-6 sm:p-7 text-slate-900 shadow-sm flex flex-col justify-between border border-slate-200/90 relative overflow-hidden h-full group hover:border-slate-300 hover:shadow-md transition-all duration-300">
                  {/* Top Bar with Live Ping */}
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[11px] font-mono text-slate-600 font-medium ml-2">gov-gateway.merrafilings</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Live Registry Synced
                      </div>
                    </div>

                    {/* Service Name Chip */}
                    <div className="mb-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700 block mb-1">
                        Active Statutory Flow
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-950">
                        {breadcrumbCurrent} Gateway
                      </h3>
                    </div>

                    {/* Progress Checklist */}
                    <div className="space-y-2.5 my-5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      {spotlightData.dashboardSteps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-800 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Live Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                        <span className="text-[11px] text-slate-700 font-semibold block">
                          {spotlightData.dashboardMetric1.label}
                        </span>
                        <span className="text-base font-bold text-slate-950 tracking-tight mt-0.5 block">
                          {spotlightData.dashboardMetric1.value}
                        </span>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                        <span className="text-[11px] text-slate-700 font-semibold block">
                          {spotlightData.dashboardMetric2.label}
                        </span>
                        <span className="text-base font-bold text-emerald-700 tracking-tight mt-0.5 block">
                          {spotlightData.dashboardMetric2.value}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openServiceModal(breadcrumbCurrent)}
                      className="w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>File Online with Chartered Accountants</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-[11px] text-slate-600 text-center mt-2.5 font-medium">
                      Dual CA/CS Verification Included • Zero Physical Visits Required
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Strategic Mandate Feature Cards */}
              <div data-reveal="right" className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {spotlightData.mandatoryItems.map((item, idx) => {
                    const colorStyle = getSpotlightCardColorClasses(item);
                    return (
                      <div
                        key={idx}
                        className={`p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 ${colorStyle.border} ${colorStyle.shadow} transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} border border-slate-200/70 flex items-center justify-center shrink-0 mb-3.5 group-hover:scale-110 transition-transform`}>
                            {item.icon}
                          </div>
                          <h4 className={`text-[15px] sm:text-base font-bold text-slate-950 ${colorStyle.groupHoverText} transition-colors`}>
                            {item.title}
                          </h4>
                          <p className="text-[13px] sm:text-[13.5px] text-slate-800 font-normal leading-relaxed mt-2">
                            {item.desc}
                          </p>
                        </div>
                        <div className={`mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 ${colorStyle.groupHoverText}`}>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 group-hover:text-inherit">Statutory Mandate</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-inherit group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200/80" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 border border-slate-200 rounded-full shadow-2xs">
                The Merrafilings Legal &amp; Compliance Advantage
              </span>
            </div>
          </div>

          {/* Part 2: Why Choose Merrafilings */}
          <div className="space-y-8 sm:space-y-10">
            <div data-reveal="down" className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>{spotlightData.chooseTag}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 leading-snug">
                {spotlightData.chooseTitle}
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
                {spotlightData.chooseSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: 4 Value Pillar Cards */}
              <div data-reveal="left" className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {spotlightData.chooseItems.map((item, idx) => {
                    const colorStyle = getSpotlightCardColorClasses(item);
                    return (
                      <div
                        key={idx}
                        className={`p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 ${colorStyle.border} ${colorStyle.shadow} transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} border border-slate-200/70 flex items-center justify-center shrink-0 mb-3.5 group-hover:scale-110 transition-transform`}>
                            {item.icon}
                          </div>
                          <h4 className={`text-[15px] sm:text-base font-bold text-slate-950 ${colorStyle.groupHoverText} transition-colors`}>
                            {item.title}
                          </h4>
                          <p className="text-[13px] sm:text-[13.5px] text-slate-800 font-normal leading-relaxed mt-2">
                            {item.desc}
                          </p>
                        </div>
                        <div className={`mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 ${colorStyle.groupHoverText}`}>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 group-hover:text-inherit">Guaranteed Quality</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Enterprise Credibility & Assurance Showcase Card */}
              <div data-reveal="right" className="lg:col-span-5 flex flex-col order-1 lg:order-2 text-left">
                <div className="bg-white rounded-3xl p-6 sm:p-7 text-slate-900 shadow-sm border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full group">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -z-10 group-hover:bg-emerald-100/50 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50/50 rounded-full blur-3xl -z-10 group-hover:bg-teal-100/50 transition-all duration-500" />

                  {/* Top Stats */}
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                      <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>4.9 / 5 Rated Platform</span>
                      </div>
                      <span className="text-xs text-slate-700 font-semibold font-mono">100,000+ Filings</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 mb-5 text-center">
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-base sm:text-lg font-bold text-slate-950 block">100k+</span>
                        <span className="text-[11px] text-slate-700 font-semibold block mt-0.5">Enterprises</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-base sm:text-lg font-bold text-emerald-700 block">28</span>
                        <span className="text-[11px] text-slate-700 font-semibold block mt-0.5">States &amp; UTs</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                        <span className="text-base sm:text-lg font-bold text-teal-700 block">99.8%</span>
                        <span className="text-[11px] text-slate-700 font-semibold block mt-0.5">Pass SLA</span>
                      </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ISO 27001 Certified Bank-Grade Data Vault</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                        <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ICAI &amp; Bar Council Regulated Practitioners</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                        <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Real-Time Government Portal Sync &amp; Challan Storage</span>
                      </div>
                    </div>

                    {/* Verified Endorsement */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                      <p className="text-[13px] text-slate-900 font-normal leading-relaxed">
                        &ldquo;Merrafilings took complete ownership of our corporate filings. Transparent pricing, zero hidden charges, and certificates delivered well ahead of schedule.&rdquo;
                      </p>
                      <div className="mt-3 text-xs text-slate-700 flex items-center justify-between">
                        <span className="font-bold text-slate-950">Vikram Singhania, Founder</span>
                        <span className="text-emerald-700 font-bold">&check; Verified Client</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div>
                    <button
                      type="button"
                      onClick={() => openServiceModal(breadcrumbCurrent)}
                      className="w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                    >
                      <span>Speak to a Senior Specialist</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <p className="text-[11px] text-slate-600 text-center mt-2.5 font-medium">
                      Instant Callback Within 15 Minutes • Confidential &amp; Protected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Redesigned Pricing Studio: Structured Tier Comparison */}
      <section id="pricing" className="py-16 sm:py-20 bg-[#FAFBFB] border-b border-slate-200/80 font-sans">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div data-reveal="down" className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <Receipt className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transparent Statutory Fees</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 leading-snug">
              {pricingTitle}
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              {pricingSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {packages.map((pkg, idx) => {
              const cardNum = idx + 1;
              const isPopular = pkg.popular || idx === 1;
              const cardReveal = idx === 0 ? "left" : idx === 1 ? "up" : "right";
              const tierLabel = idx === 0 ? "Starter Tier" : isPopular ? "Flagship Package" : "Complete Coverage";
              const tierChipColor = idx === 0
                ? "bg-slate-100 text-slate-700 border-slate-200/80"
                : isPopular
                ? "bg-emerald-100 text-emerald-800 border-emerald-200/80"
                : "bg-blue-50 text-blue-700 border-blue-200/80";

              return (
                <div
                  key={idx}
                  data-reveal={cardReveal}
                  className={`pricing-card-lift group rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer relative text-left ${
                    isPopular
                      ? "is-popular-card bg-gradient-to-b from-emerald-50/40 via-white to-white border-2 border-emerald-500 shadow-[0_16px_40px_rgba(5,150,105,0.14)] ring-1 ring-emerald-500/20"
                      : "bg-white border border-slate-200/90 hover:border-emerald-500/70 shadow-2xs"
                  } stagger-${idx + 1}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md shadow-emerald-600/30">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-100" />
                      <span>{pkg.badge || "Most Popular • Best Value"}</span>
                    </div>
                  )}

                  <div>
                    {/* Tier Chip */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border mb-3 ${tierChipColor}`}>
                      {isPopular && <Zap className="w-3 h-3 text-emerald-600" />}
                      {idx === 2 && <ShieldCheck className="w-3 h-3 text-blue-600" />}
                      <span>{tierLabel}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-normal text-slate-600 mt-2 leading-relaxed">
                      {pkg.shortDesc}{" "}
                      {pkg.expandedDesc && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCard(expandedCard === cardNum ? null : cardNum);
                          }}
                          className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-0.5 cursor-pointer ml-1"
                        >
                          {expandedCard === cardNum ? "Read less ⌃" : "Read more ⌵"}
                        </button>
                      )}
                    </p>

                    {pkg.expandedDesc && expandedCard === cardNum && (
                      <p className="text-xs font-normal text-slate-700 mt-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed animate-fadeIn">
                        {pkg.expandedDesc}
                      </p>
                    )}

                    {/* Price Header Strip */}
                    <div className="mt-5 mb-5 pb-5 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl sm:text-[38px] font-normal text-slate-900 tracking-tight">
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-[11.5px] font-medium text-slate-500 mt-0.5">
                        {pkg.priceSub}
                      </p>

                      {/* Assurance Chip */}
                      {isPopular ? (
                        <div className="mt-2.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50/90 px-2.5 py-1 rounded-lg border border-emerald-200/80 inline-flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Fast-Track Express Filing Included</span>
                        </div>
                      ) : idx === 0 ? (
                        <div className="mt-2.5 text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/80 inline-flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                          <span>Statutory Government Portal Lodgement</span>
                        </div>
                      ) : (
                        <div className="mt-2.5 text-[11px] font-semibold text-blue-800 bg-blue-50/90 px-2.5 py-1 rounded-lg border border-blue-200/80 inline-flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-blue-600" />
                          <span>Dual CA &amp; Legal Advisory Sign-Off</span>
                        </div>
                      )}
                    </div>

                    {/* Feature Inclusions Checklist */}
                    <div className="pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-3.5">
                        What&apos;s included in this plan:
                      </p>
                      <ul className="space-y-3 text-xs sm:text-[13px] font-medium text-slate-800">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100/90 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span className="leading-snug text-slate-800 font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Clean Action Button */}
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => openServiceModal(pkg.name)}
                      className={`w-full py-3.5 px-6 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group/btn ${
                        isPopular
                          ? "text-white bg-slate-900 hover:bg-emerald-600 hover:shadow-emerald-600/25"
                          : "text-slate-800 bg-slate-100 hover:bg-slate-200 hover:text-slate-950"
                      }`}
                    >
                      <span>{isPopular ? "Get Started Now" : "Select Package"}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <p className="text-[11px] text-slate-600 text-center mt-2.5 font-medium">
                      Zero Hidden Costs • Instant Filing Setup
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Knowledge Hub: Editorial Workspace + Intelligence Rail */}
      <section id="overview-section" className="py-14 sm:py-16 bg-white font-sans">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          {/* Breadcrumb Navigation */}
          <nav data-reveal="down" className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-slate-500 mb-6 flex-wrap">
            <a href="/" className="hover:text-slate-900 transition-colors">
              Home
            </a>
            <span className="text-slate-300">/</span>
            <a href="/registrations" className="hover:text-slate-900 transition-colors">
              Registrations
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-emerald-700 font-semibold">{breadcrumbCurrent}</span>
          </nav>

          {/* Quick-Jump Floating Navigation Strip */}
          <div className="mb-8 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
            <span className="text-slate-400 px-3 font-semibold uppercase tracking-wider shrink-0 text-[11px]">
              Quick Jump:
            </span>
            <a
              href="#overview-section"
              className="px-3 py-1.5 rounded-xl bg-white text-slate-700 hover:text-emerald-700 border border-slate-200/80 shadow-2xs transition-all whitespace-nowrap font-medium"
            >
              Overview &amp; Guide
            </a>
            <a
              href="#documents-required"
              className="px-3 py-1.5 rounded-xl bg-white text-slate-700 hover:text-emerald-700 border border-slate-200/80 shadow-2xs transition-all whitespace-nowrap font-medium"
            >
              Documents Required
            </a>
            <a
              href="#pricing"
              className="px-3 py-1.5 rounded-xl bg-white text-slate-700 hover:text-emerald-700 border border-slate-200/80 shadow-2xs transition-all whitespace-nowrap font-medium"
            >
              Fee &amp; Packages
            </a>
            <a
              href="#faqs"
              className="px-3 py-1.5 rounded-xl bg-white text-slate-700 hover:text-emerald-700 border border-slate-200/80 shadow-2xs transition-all whitespace-nowrap font-medium"
            >
              FAQs
            </a>
          </div>

          {/* Asymmetric Reading Architecture (8 Cols Editorial + 4 Cols Rail) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Main Editorial Workspace (8 Cols) */}
            <div className="lg:col-span-8 text-left">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs border-t-4 border-t-emerald-600">
                {/* Verified CA Author Header */}
                <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                      CA
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">Reviewed by CA Regulatory Desk</span>
                      <span className="text-[11px] text-slate-400">Statutory Compliance Verified • Updated FY 2024–25</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 font-medium text-slate-600 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    4 Min Read
                  </span>
                </div>

                <article className="max-w-none space-y-8 text-[#0F172A] font-normal">
                  {/* Title */}
                  {guideTitle && (
                    <div>
                      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 text-left mb-6 leading-snug">
                        {guideTitle}
                      </h1>
                    </div>
                  )}

                  {/* Body Content */}
                  {guideContent}
                </article>
              </div>
            </div>

            {/* Right Intelligence Rail (4 Cols) - Sticky */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start h-fit text-left">
              {/* Card 1: Consult Experts Concierge */}
              <div
                onClick={() => openServiceModal()}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1.5 p-5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full group-hover:bg-emerald-100 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    3 Advisors Online
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover group-hover:scale-105 transition-transform"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                      alt="Expert 1"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover group-hover:scale-105 transition-transform"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                      alt="Expert 2"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover group-hover:scale-105 transition-transform"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces"
                      alt="Expert 3"
                    />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      Consult Advisory Desk
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">Free 15-min assessment call</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Curated Related Guides */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden border-t-2 border-t-emerald-600">
                <div className="p-5">
                  <h4 className="font-semibold text-xs sm:text-[14px] text-slate-900 mb-4 uppercase tracking-wider text-slate-500">
                    {relatedGuidesTitle}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px]">
                    {relatedGuides.map((guide, idx) => {
                      const title = typeof guide === "string" ? guide : guide.title;
                      const href = typeof guide === "string" ? "#overview-section" : guide.href;
                      const isExternal = typeof guide !== "string" && guide.href.startsWith("http");

                      const linkContent = (
                        <>
                          <span className="text-emerald-700 font-semibold group-hover:translate-x-1 shrink-0 text-sm leading-tight transition-transform duration-200 mt-0.5">
                            &rarr;
                          </span>
                          <span className="line-clamp-2 leading-snug text-slate-800 group-hover:text-emerald-700 font-medium transition-colors">
                            {title}
                          </span>
                        </>
                      );

                      return (
                        <li key={idx} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                          {isExternal ? (
                            <a
                              href={href}
                              className="flex items-start gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 transition-all duration-200 group hover:pl-2"
                            >
                              {linkContent}
                            </a>
                          ) : (
                            <Link
                              href={href}
                              className="flex items-start gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 transition-all duration-200 group hover:pl-2"
                            >
                              {linkContent}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Card 3: State Directory Drawer */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden border-t-2 border-t-emerald-500">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-[13.5px] text-slate-900">Registration by State</span>
                  <button
                    onClick={() => setStateListOpen(!stateListOpen)}
                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                  >
                    {stateListOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
                {stateListOpen && (
                  <div className="max-h-[360px] overflow-y-auto p-4 space-y-1.5 text-xs font-normal">
                    {INDIAN_STATES.slice(0, 18).map((st, idx) => (
                      <a
                        key={idx}
                        href="#overview-section"
                        className="flex items-center justify-between py-2 px-2.5 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-xl transition-all duration-200 hover:pl-3 border-b border-slate-50 last:border-0"
                      >
                        <span>
                          {breadcrumbCurrent} in {st}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Redesigned FAQ Hub */}
      <section id="faqs" className="py-16 sm:py-20 bg-[#FAFBFB] border-t border-slate-200/80 font-sans">
        <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 text-left">
          <div data-reveal="down">
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-3" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1.5 mb-8">
              {faqSubtitle || `Common questions about ${breadcrumbCurrent} in India.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Column 1 */}
            <div data-reveal="left" className="space-y-3.5">
              {(showMoreFaqs ? [...faqCol1, ...faqExtraCol1] : faqCol1).map((faq, idx) => {
                const faqId = `faq-c1-${idx}`;
                const isOpen = openFaq === faqId;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaq(isOpen ? null : faqId)}
                    className={`bg-white rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden group ${
                      isOpen ? "border-emerald-600 shadow-xs" : "border-slate-200/90 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="py-4 px-5 flex items-center justify-between gap-4">
                      <span className="font-medium text-xs sm:text-[14px] text-slate-900 leading-snug group-hover:text-emerald-800">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-[13px] font-normal text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div data-reveal="right" className="space-y-3.5">
              {(showMoreFaqs ? [...faqCol2, ...faqExtraCol2] : faqCol2).map((faq, idx) => {
                const faqId = `faq-c2-${idx}`;
                const isOpen = openFaq === faqId;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaq(isOpen ? null : faqId)}
                    className={`bg-white rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden group ${
                      isOpen ? "border-emerald-600 shadow-xs" : "border-slate-200/90 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="py-4 px-5 flex items-center justify-between gap-4">
                      <span className="font-medium text-xs sm:text-[14px] text-slate-900 leading-snug group-hover:text-emerald-800">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-[13px] font-normal text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Load More Questions */}
          {(faqExtraCol1.length > 0 || faqExtraCol2.length > 0) && (
            <div className="text-center mt-9 mb-14">
              <button
                type="button"
                onClick={() => setShowMoreFaqs(!showMoreFaqs)}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{showMoreFaqs ? "Show less questions" : "Load more questions"}</span>
              </button>
            </div>
          )}

          {/* Related Services Discovery */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 mb-6">
            <h3 className="font-bold text-xs sm:text-[14px] text-slate-900 mb-4 uppercase tracking-wider">
              Related Corporate Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedServicesTags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#pricing"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white text-xs font-medium text-slate-700 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 mb-6">
            <h3 className="font-bold text-xs sm:text-[14px] text-slate-900 mb-4 uppercase tracking-wider">
              Popular Regulatory Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSearchesTags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#pricing"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white text-xs font-medium text-slate-700 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Concierge Action */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 safe-pb">
        <button
          onClick={() => openServiceModal()}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full bg-[#00BF72] hover:bg-[#00AB66] text-white font-medium text-xs sm:text-[13.5px] shadow-md hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white text-[#00BF72] shrink-0" />
          <span className="whitespace-nowrap">Live chat with experts</span>
        </button>
      </div>

      {/* Interactive Global Modals */}
      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(srv) => openServiceModal(srv)}
      />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        serviceTitle={modalServiceTitle}
      />

      {/* 7. Footer */}
      <Footer />
    </div>
  </ServicePageContext.Provider>
);
}
