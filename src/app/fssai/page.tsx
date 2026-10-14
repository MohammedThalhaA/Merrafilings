"use client";

import React from "react";
import ServicePageTemplate, {
  PricingPackage,
  useServicePage,
} from "@/components/ServicePageTemplate";
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Building,
  Check,
  Clock,
  Landmark,
  BadgePercent,
  AlertTriangle,
  Receipt,
  FileCheck,
  Scale,
  MapPin,
  CheckCircle2,
  Store,
  Factory,
  UtensilsCrossed,
  Flame,
  Download,
  Search,
  CheckCircle,
  HelpCircle,
  Wheat,
  Truck,
  Globe2,
  Layers,
  Zap,
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "Who are exempted from FSSAI registration?",
    "a": "Individual members manufacturing or conducting food business activities from home for a registered Cooperative Society or Mahila Udyog or Self Help Group or Gruh Udyog, or any similar government-registered society; The Direct Selling entity is willing to take responsibility for its Direct Sellers and has given them written authorization to do so; A milkman/vendor registers with a Cooperative Society and sells his whole milk production to that society.; The delivery person, direct selling agent, or owner of food vending machines, water vending machines, food ATMs, or food carts."
  },
  {
    "q": "Can we start a business without FSSAI?",
    "a": "No. To ensure safe and wholesome food for human consumption, FSSAI Act requires licenses from FSSAI for every food business set up. It’s important for all the Food Business Operators to obtain a 14-digit FSSAI License Number and print it on all the food products they own. To get more details on consequences of starting a business without an FSSAI license under Food Safety Norms."
  },
  {
    "q": "Is GST required for FSSAI?",
    "a": "FSSAI, on July 27th, 2022 vide a notice announced that GST at the prescribed rate would be applicable on all services provided by FSSAI like issuing a Central license, Food Safety Mitra Fees, Product Approval Fees, Import Clearance Fees, and so forth will attract an 18% service tax."
  },
  {
    "q": "What is the validity of FSSAI registration?",
    "a": "FSSAI registration or FSSAI license is valid for one year or five years, depending on the food license fees paid to the Government."
  },
  {
    "q": "How to renew FSSAI license/Registration after expiry?",
    "a": "From October 1, 2021, the FSSAI has mandated for all food business to FSSAI registration or FSSAI license number on invoices and bills. Food Business Operators can renew the FSSAI License/Registration even after the expiry date with the following penalties: Three times the existing annual registration/FSSAI license fee in the period – 1st day to 90th day from the original expiry date. Additional two times of the existing annual registration/FSSAI license fee (i.e., total five times) in the period – 91st day to 180th day from the original expiry date."
  },
  {
    "q": "What is FSSAI Registration?",
    "a": "FSSAI Registration is a mandatory authorisation for food business operators in India, ensuring that food products meet safety and quality standards set by the Food Safety and Standards Authority of India."
  },
  {
    "q": "Who needs to get FSSAI Registration?",
    "a": "All food business operators involved in manufacturing, processing, storage, distribution, or sale of food products must obtain FSSAI Registration or License based on their business size and turnover."
  },
  {
    "q": "What are the types of FSSAI Registration?",
    "a": "There are three types: Basic Registration (for turnover under ₹12 lakh), State License (for turnover between ₹12 lakh and ₹20 crore), and Central License (for turnover above ₹20 crore)."
  }
];

const FAQ_COL_2 = [
  {
    "q": "Who issues the FSSAI Certificate?",
    "a": "The Food Safety and Standards Authority of India (FSSAI) issues the certificate after successful registration or licensing of the food business."
  },
  {
    "q": "What details are mentioned on the FSSAI Certificate?",
    "a": "It includes the 14-digit FSSAI registration or license number, name of the business, address, validity period, and the photograph of the licensee."
  },
  {
    "q": "How long is the FSSAI Certificate valid?",
    "a": "The validity ranges from 1 to 5 years depending on the business’s choice and type of registration/license."
  },
  {
    "q": "Can I operate my food business without an FSSAI Certificate?",
    "a": "No, operating without an FSSAI Certificate or valid registration/license is illegal and subject to penalties."
  },
  {
    "q": "How do I get the FSSAI Certificate after registration?",
    "a": "After your application is approved and verified by the authorities, the certificate is issued and can be downloaded from the FoSCoS portal or sent via email."
  },
  {
    "q": "How long does FSSAI Registration take?",
    "a": "FSSAI Registration is usually granted within 7-15 working days if all documents are correct and the application is complete."
  },
  {
    "q": "How much does it cost to obtain the FSSAI Certificate?",
    "a": "The cost varies depending on the type of registration/license—Basic Registration is nominal, while State and Central Licenses have higher fees."
  },
  {
    "q": "What documents are required for FSSAI Registration?",
    "a": "General documents include identity proof, business registration certificate, proof of premises possession, food safety plan, list of food products, and bank details."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "Is FSSAI Registration compulsory for home-based food businesses?",
    "a": "Yes, all food business operators, including home-based kitchens and small vendors, must obtain FSSAI Registration."
  },
  {
    "q": "Can I apply for FSSAI Registration online?",
    "a": "Yes, you can apply online through the official FoSCoS portal or use expert services like Merrafilings to simplify the process."
  },
  {
    "q": "How much does FSSAI Registration cost?",
    "a": "Basic Registration fees are usually nominal (around ₹100), while State and Central Licenses have higher fees based on the business scale."
  },
  {
    "q": "What is the validity period of FSSAI Registration?",
    "a": "FSSAI Registration can be valid for 1 to 5 years, depending on the business type and applicant’s choice."
  },
  {
    "q": "What happens if I operate without FSSAI Registration?",
    "a": "Operating without FSSAI Registration is illegal and may lead to penalties, fines, or business closure."
  },
  {
    "q": "What is the difference between FSSAI Registration and FSSAI License?",
    "a": "Registration is for small businesses with limited turnover, whereas License is mandatory for medium and large businesses with higher turnover."
  },
  {
    "q": "How do I know which FSSAI Registration type I need?",
    "a": "It depends on your annual turnover and business scale. Small vendors need Basic Registration; mid-sized businesses require State License, and large businesses need Central License."
  },
  {
    "q": "Can FSSAI Registration be renewed?",
    "a": "Yes, FSSAI Registration must be renewed before expiry to avoid penalties and ensure continued compliance."
  },
  {
    "q": "Does FSSAI Registration cover all food products?",
    "a": "Yes, it covers all food products, including manufacturing, processing, storage, distribution, and sale."
  },
  {
    "q": "Can I display the FSSAI Registration number on food packaging?",
    "a": "Yes, displaying the 14-digit FSSAI Registration number on food packages is mandatory for consumer awareness and compliance."
  },
  {
    "q": "Is FSSAI Registration required for food importers and exporters?",
    "a": "Yes, all food importers and exporters must obtain FSSAI Registration or License to operate legally."
  },
  {
    "q": "Can I transfer my FSSAI Registration to another business or location?",
    "a": "No, FSSAI Registration is non-transferable. You must apply for a new registration if the business ownership or location changes."
  },
  {
    "q": "Can Merrafilings help me get my FSSAI Certificate?",
    "a": "Yes, Merrafilings provides end-to-end assistance in preparing, submitting, and following up on your FSSAI application to get your certificate smoothly."
  },
  {
    "q": "What is an FSSAI Certificate?",
    "a": "The FSSAI Certificate is an official document issued by the Food Safety and Standards Authority of India that certifies a food business’s compliance with food safety and hygiene standards."
  },
  {
    "q": "Who are exempted from FSSAI registration?",
    "a": "Individual members manufacturing or conducting food business activities from home for a registered Cooperative Society or Mahila Udyog or Self Help Group or Gruh Udyog, or any similar government-registered society; The Direct Selling entity is willing to take responsibility for its Direct Sellers and has given them written authorization to do so; A milkman/vendor registers with a Cooperative Society and sells his whole milk production to that society.; The delivery person, direct selling agent, or owner of food vending machines, water vending machines, food ATMs, or food carts."
  },
  {
    "q": "Can we start a business without FSSAI?",
    "a": "No. To ensure safe and wholesome food for human consumption, FSSAI Act requires licenses from FSSAI for every food business set up. It’s important for all the Food Business Operators to obtain a 14-digit FSSAI License Number and print it on all the food products they own. To get more details on consequences of starting a business without an FSSAI license under Food Safety Norms."
  },
  {
    "q": "Is GST required for FSSAI?",
    "a": "FSSAI, on July 27th, 2022 vide a notice announced that GST at the prescribed rate would be applicable on all services provided by FSSAI like issuing a Central license, Food Safety Mitra Fees, Product Approval Fees, Import Clearance Fees, and so forth will attract an 18% service tax."
  },
  {
    "q": "What is the validity of FSSAI registration?",
    "a": "FSSAI registration or FSSAI license is valid for one year or five years, depending on the food license fees paid to the Government."
  },
  {
    "q": "How to renew FSSAI license/Registration after expiry?",
    "a": "From October 1, 2021, the FSSAI has mandated for all food business to FSSAI registration or FSSAI license number on invoices and bills. Food Business Operators can renew the FSSAI License/Registration even after the expiry date with the following penalties: Three times the existing annual registration/FSSAI license fee in the period – 1st day to 90th day from the original expiry date. Additional two times of the existing annual registration/FSSAI license fee (i.e., total five times) in the period – 91st day to 180th day from the original expiry date."
  },
  {
    "q": "What is FSSAI Registration?",
    "a": "FSSAI Registration is a mandatory authorisation for food business operators in India, ensuring that food products meet safety and quality standards set by the Food Safety and Standards Authority of India."
  },
  {
    "q": "Who needs to get FSSAI Registration?",
    "a": "All food business operators involved in manufacturing, processing, storage, distribution, or sale of food products must obtain FSSAI Registration or License based on their business size and turnover."
  },
  {
    "q": "What are the types of FSSAI Registration?",
    "a": "There are three types: Basic Registration (for turnover under ₹12 lakh), State License (for turnover between ₹12 lakh and ₹20 crore), and Central License (for turnover above ₹20 crore)."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "Who issues the FSSAI Certificate?",
    "a": "The Food Safety and Standards Authority of India (FSSAI) issues the certificate after successful registration or licensing of the food business."
  },
  {
    "q": "What details are mentioned on the FSSAI Certificate?",
    "a": "It includes the 14-digit FSSAI registration or license number, name of the business, address, validity period, and the photograph of the licensee."
  },
  {
    "q": "How long is the FSSAI Certificate valid?",
    "a": "The validity ranges from 1 to 5 years depending on the business’s choice and type of registration/license."
  },
  {
    "q": "Can I operate my food business without an FSSAI Certificate?",
    "a": "No, operating without an FSSAI Certificate or valid registration/license is illegal and subject to penalties."
  },
  {
    "q": "How do I get the FSSAI Certificate after registration?",
    "a": "After your application is approved and verified by the authorities, the certificate is issued and can be downloaded from the FoSCoS portal or sent via email."
  },
  {
    "q": "How long does FSSAI Registration take?",
    "a": "FSSAI Registration is usually granted within 7-15 working days if all documents are correct and the application is complete."
  },
  {
    "q": "How much does it cost to obtain the FSSAI Certificate?",
    "a": "The cost varies depending on the type of registration/license—Basic Registration is nominal, while State and Central Licenses have higher fees."
  },
  {
    "q": "What documents are required for FSSAI Registration?",
    "a": "General documents include identity proof, business registration certificate, proof of premises possession, food safety plan, list of food products, and bank details."
  },
  {
    "q": "Is FSSAI Registration compulsory for home-based food businesses?",
    "a": "Yes, all food business operators, including home-based kitchens and small vendors, must obtain FSSAI Registration."
  },
  {
    "q": "Can I apply for FSSAI Registration online?",
    "a": "Yes, you can apply online through the official FoSCoS portal or use expert services like Merrafilings to simplify the process."
  },
  {
    "q": "How much does FSSAI Registration cost?",
    "a": "Basic Registration fees are usually nominal (around ₹100), while State and Central Licenses have higher fees based on the business scale."
  },
  {
    "q": "What is the validity period of FSSAI Registration?",
    "a": "FSSAI Registration can be valid for 1 to 5 years, depending on the business type and applicant’s choice."
  },
  {
    "q": "What happens if I operate without FSSAI Registration?",
    "a": "Operating without FSSAI Registration is illegal and may lead to penalties, fines, or business closure."
  },
  {
    "q": "What is the difference between FSSAI Registration and FSSAI License?",
    "a": "Registration is for small businesses with limited turnover, whereas License is mandatory for medium and large businesses with higher turnover."
  },
  {
    "q": "How do I know which FSSAI Registration type I need?",
    "a": "It depends on your annual turnover and business scale. Small vendors need Basic Registration; mid-sized businesses require State License, and large businesses need Central License."
  },
  {
    "q": "Can FSSAI Registration be renewed?",
    "a": "Yes, FSSAI Registration must be renewed before expiry to avoid penalties and ensure continued compliance."
  },
  {
    "q": "Does FSSAI Registration cover all food products?",
    "a": "Yes, it covers all food products, including manufacturing, processing, storage, distribution, and sale."
  },
  {
    "q": "Can I display the FSSAI Registration number on food packaging?",
    "a": "Yes, displaying the 14-digit FSSAI Registration number on food packages is mandatory for consumer awareness and compliance."
  },
  {
    "q": "Is FSSAI Registration required for food importers and exporters?",
    "a": "Yes, all food importers and exporters must obtain FSSAI Registration or License to operate legally."
  },
  {
    "q": "Can I transfer my FSSAI Registration to another business or location?",
    "a": "No, FSSAI Registration is non-transferable. You must apply for a new registration if the business ownership or location changes."
  },
  {
    "q": "Can Merrafilings help me get my FSSAI Certificate?",
    "a": "Yes, Merrafilings provides end-to-end assistance in preparing, submitting, and following up on your FSSAI application to get your certificate smoothly."
  },
  {
    "q": "What is an FSSAI Certificate?",
    "a": "The FSSAI Certificate is an official document issued by the Food Safety and Standards Authority of India that certifies a food business’s compliance with food safety and hygiene standards."
  }
];

const FORM_FEATURES = [
  { icon: <FileText className="w-4 h-4" />, text: "FoSCoS Application Filing & Document Audit" },
  { icon: <UtensilsCrossed className="w-4 h-4" />, text: "Food Category Mapping & FSMS Declaration" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "FSS Act 2006 100% Legal Compliance" },
  { icon: <Award className="w-4 h-4" />, text: "14-Digit FSSAI License / Registration Issuance" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "FSSAI Basic Registration (1 Year)",
    shortDesc: "Ideal for petty food businesses, small retailers, hawkers, tea stalls, and home bakers with annual turnover up to ₹12 Lakhs.",
    expandedDesc: "Complete FoSCoS Form A drafting, applicant KYC & premise address verification, food category mapping under FSSAI schedule, self-declaration drafting, and digital 14-digit certificate delivery in 7 to 10 working days.",
    price: "₹1,899",
    priceSub: "All Inclusive | Valid for 1 Year",
    badge: "Most Economical",
    features: [
      "FoSCoS Form A Online Drafting & Filing",
      "Food Category Classification & Mapping",
      "Food Safety Management System (FSMS) Self-Declaration",
      "Applicant Photo ID & Premises Proof Audit",
      "Official 14-Digit FSSAI Registration Certificate",
      "Dedicated Food Safety Legal Specialist Support",
    ],
  },
  {
    name: "FSSAI State License",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Mandatory for mid-sized restaurants, cloud kitchens, bakeries, wholesalers, caterers, and food manufacturers (₹12 Lakhs to ₹20 Crores turnover).",
    expandedDesc: "Complete FoSCoS Form B filing, kitchen / manufacturing blueprint consultation, daily production capacity calculation, water potability test report advisory, detailed FSMS plan drafting, and liaison with State Food Safety Officer (FSO).",
    price: "₹4,999",
    priceSub: "+ Govt Statutory Fees | Valid 1 to 5 Years",
    features: [
      "FoSCoS Form B Comprehensive Drafting & Filing",
      "Kitchen Layout Blueprint & Equipment List Advisory",
      "Detailed FSMS Plan Drafting by Certified Food Auditor",
      "NABL Water Test Report Review & Assistance",
      "Direct State Food Safety Officer (FSO) Query Handling",
      "Annual Return & Mandatory Compliance Assistance",
    ],
  },
  {
    name: "FSSAI Central License",
    shortDesc: "Mandatory for large-scale food processors (> ₹20 Cr turnover), 100% Export Oriented Units (EOU), food importers with IEC, and multi-state chains.",
    expandedDesc: "Central Licensing Authority (CLA) filing on FoSCoS portal. Includes Import Export Code (IEC) integration, multi-location head office architecture, recall plan drafting, specialized category approvals (nutraceuticals, health supplements), and senior regulatory legal counsel.",
    price: "₹9,999",
    priceSub: "+ Central Statutory Fees | Pan-India Scope",
    features: [
      "Central Licensing Authority (CLA) Form B Filing",
      "Import Export Code (IEC) Linkage for Food Trade",
      "Multi-State Head Office Compliance Framework",
      "Detailed Recall Plan & Hazard Analysis Critical Control Point (HACCP)",
      "Priority Senior Food Regulatory Legal Lead Support",
      "Annual Return Form D-1 Filing Advisory & Guidance",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Check FSSAI License Number Online on FoSCoS Portal",
  "Difference Between FSSAI Registration and State / Central License",
  "Mandatory Labeling and Display Rules for Packaged Food Items",
  "FSSAI Renewal Process: How to Avoid Penalties and Late Fees",
  "Water Potability Testing Report Norms for Restaurants & Bakeries",
  "FSSAI Annual Return Filing (Form D-1) Guidelines for Manufacturers",
];

const RELATED_SERVICES_TAGS = [
  "Municipal Trade License",
  "Shop & Establishment License",
  "GST Registration for Restaurants",
  "Trademark Registration for Food Brand",
  "Import Export Code (IEC)",
  "ISO 22000 Food Safety Certification",
  "Food Lab Testing & Nutrition Analysis",
  "Barcodes for Packaged Food Products",
];

const POPULAR_SEARCHES_TAGS = [
  "fssai license apply online",
  "fssai registration fees in india",
  "foscos fssai login portal",
  "fssai certificate download online",
  "fssai state license eligibility criteria",
  "fssai central license requirements",
  "fssai basic registration form a",
  "food safety license online apply",
  "fssai 14 digit license number check",
  "fssai penalty for running without license",
  "food business operator fssai documents",
  "fssai renewal late fee calculation",
];

const TABLE_1_TYPES = [
  {
    type: "FSSAI Basic Registration",
    eligibility: "Small food businesses, petty food operators, home bakers, street vendors, temporary stall holders",
    turnover: "Up to Rs. 12 Lakhs per annum",
    authority: "Designated Local Officer / Panchayat / Municipal Authority",
  },
  {
    type: "FSSAI State License",
    eligibility: "Medium-scale food processors, restaurants, bakeries, cloud kitchens, caterers, wholesalers, storage units",
    turnover: "Between Rs. 12 Lakhs and Rs. 20 Crores per annum",
    authority: "State Food Safety Authority (State Designated Officer)",
  },
  {
    type: "FSSAI Central License",
    eligibility: "Large food businesses, 100% Export Oriented Units (EOU), food importers with IEC, multi-state operators, e-commerce",
    turnover: "Above Rs. 20 Crores per annum (or any import/export activity)",
    authority: "Central Government / FSSAI Central Licensing Authority (CLA)",
  },
];

const TABLE_2_DOCUMENTS = [
  { document: "Photo ID Proof of Applicant (Aadhaar, Voter ID, PAN, Passport)", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Address Proof of Business Premises (Electricity bill, Rent deed & NOC)", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Passport Size Photographs of Proprietor / Partners / Directors", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Business Registration (Certificate of Incorporation, Partnership Deed, MOA/AOA)", basic: "❌ Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "Food Safety Management System (FSMS) Plan or Certificate", basic: "❌ (Self-Declaration only)", state: "✅ Required", central: "✅ Required" },
  { document: "List of Food Products / Categories Proposed to be Manufactured/Sold", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Blueprint / Floor Plan of Kitchen or Processing Unit with Dimensions", basic: "❌ Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "List of Installed Machinery & Equipment with Horsepower (HP)", basic: "❌ Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "NABL Chemical & Bacteriological Water Testing Report", basic: "❌ Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "NOC from Municipality / Local Health Department", basic: "✅ If applicable", state: "✅ Required", central: "❌ Not Applicable" },
  { document: "Import Export Code (IEC) from DGFT", basic: "❌ Not Applicable", state: "❌ Not Applicable", central: "✅ Required (for Importers/Exporters)" },
  { document: "Form IX: Nomination of Responsible Person for Food Safety", basic: "❌ Not Required", state: "✅ Required (Companies)", central: "✅ Required (Companies)" },
];

const TABLE_3_INSPECTION = [
  {
    stage: "Application Scrutiny & Document Verification",
    basic: "2 to 3 Working Days",
    state: "7 to 15 Working Days",
    central: "15 to 30 Working Days",
  },
  {
    stage: "On-Site Physical Inspection Required?",
    basic: "No Inspection Required (Instant Scrutiny)",
    state: "Yes (At discretion of State FSO Officer)",
    central: "Yes (Mandatory pre-licensing inspection)",
  },
  {
    stage: "Clarification / Query Resolution Window",
    basic: "30 Days to respond",
    state: "30 Days to respond",
    central: "30 Days to respond",
  },
  {
    stage: "Total Expected Approval & Certificate Delivery",
    basic: "7 to 10 Working Days",
    state: "30 to 45 Working Days",
    central: "45 to 60 Working Days",
  },
];

const TABLE_4_FEES = [
  { type: "FSSAI Basic Registration", fee: "₹100 per year", duration: "1 to 5 Years", remarks: "Fixed statutory government fee across all Indian states" },
  { type: "FSSAI State License (Category A - Production / Processing)", fee: "₹3,000 – ₹5,000 per year", duration: "1 to 5 Years", remarks: "Based on installed production capacity (MT/day) or hotel star rating" },
  { type: "FSSAI State License (Category B - Trade / Catering / Restaurant)", fee: "₹2,000 per year", duration: "1 to 5 Years", remarks: "Standard fee for cloud kitchens, restaurants, bakeries, wholesalers" },
  { type: "FSSAI Central License (Manufacturing / Export / Import)", fee: "₹7,500 per year", duration: "1 to 5 Years", remarks: "Central Licensing Authority fee for large manufacturers and foreign traders" },
];

const TABLE_5_VALIDITY = [
  { type: "FSSAI Basic Registration", minVal: "1 Year", maxVal: "5 Years", renewalWindow: "120 Days before expiry", mandatoryBefore: "30 Days before expiry to avoid penalties" },
  { type: "FSSAI State License", minVal: "1 Year", maxVal: "5 Years", renewalWindow: "120 Days before expiry", mandatoryBefore: "30 Days before expiry to avoid ₹100/day late fee" },
  { type: "FSSAI Central License", minVal: "1 Year", maxVal: "5 Years", renewalWindow: "120 Days before expiry", mandatoryBefore: "30 Days before expiry to avoid certificate lapse" },
];

const TABLE_6_PENALTIES = [
  { offence: "Operating a Food Business without FSSAI License / Registration (Section 31)", penalty: "Imprisonment up to 6 Months AND fine up to ₹5,00,000" },
  { offence: "Selling or Manufacturing Sub-standard Food Products (Section 51)", penalty: "Financial penalty up to ₹5,00,000" },
  { offence: "Selling Misbranded Food or Non-Compliant Package Labels (Section 52)", penalty: "Financial penalty up to ₹3,00,000" },
  { offence: "Misleading Advertisement or False Health Claims (Section 53)", penalty: "Financial penalty up to ₹10,00,000" },
  { offence: "Selling Unsafe Food Causing Non-Grievous Injury (Section 59)", penalty: "Financial penalty up to ₹3,00,000 + Imprisonment up to 1 Year" },
  { offence: "Selling Unsafe Food Causing Grievous Injury or Death (Section 59)", penalty: "Imprisonment up to 7 Years / Life Imprisonment + fine up to ₹10,00,000" },
  { offence: "Failure to Comply with Food Safety Officer (FSO) Directives (Section 55)", penalty: "Cancellation / Suspension of License AND fine up to ₹2,00,000" },
  { offence: "Unsanitary or Unhygienic Processing / Storage Premises (Section 56)", penalty: "Financial penalty up to ₹1,00,000" },
];

function FSSAIGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is FSSAI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          <strong className="text-slate-800 font-medium">FSSAI Registration</strong> is an official certification issued by the <strong className="text-slate-800 font-medium">Food Safety and Standards Authority of India (FSSAI)</strong>, the apex statutory authority functioning under the Ministry of Health and Family Welfare, Government of India. It grants legal authorization to any Food Business Operator (FBO) to manufacture, process, package, store, transport, distribute, or sell food products within India.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Established under the <strong className="text-slate-800 font-medium">Food Safety and Standards Act, 2006 (FSS Act)</strong>, FSSAI registration acts as a guarantee of quality and hygiene. It ensures that the food products supplied to consumers meet scientific standards, preventing food adulteration, contamination, and toxic ingredients.
        </p>

        {/* 14-Digit Anatomy Card */}
        <div className="bg-[#FAF9F7] p-5 rounded-2xl border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Understanding the 14-Digit FSSAI License / Registration Number</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            Every certified food business is issued a unique 14-digit registration number that provides complete traceability. The structure of this 14-digit number is decoded as follows:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-1 text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="block font-semibold text-emerald-700 text-sm">Digit 1</span>
              <span className="text-slate-700 font-medium">Registration Status</span>
              <span className="block text-[11px] text-slate-500 font-light mt-0.5">Indicates whether registration or license</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="block font-semibold text-blue-700 text-sm">Digits 2 &amp; 3</span>
              <span className="text-slate-700 font-medium">State Code</span>
              <span className="block text-[11px] text-slate-500 font-light mt-0.5">Identifies the Indian state of operation</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="block font-semibold text-purple-700 text-sm">Digits 4 &amp; 5</span>
              <span className="text-slate-700 font-medium">Enrollment Year</span>
              <span className="block text-[11px] text-slate-500 font-light mt-0.5">The calendar year when license was granted</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="block font-semibold text-amber-700 text-sm">Digits 6, 7 &amp; 8</span>
              <span className="text-slate-700 font-medium">Quantity Master</span>
              <span className="block text-[11px] text-slate-500 font-light mt-0.5">Classification of food business category</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="block font-semibold text-rose-700 text-sm">Digits 9 to 14</span>
              <span className="text-slate-700 font-medium">Unique FBO Serial</span>
              <span className="block text-[11px] text-slate-500 font-light mt-0.5">Distinct manufacturer serial number</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Types of FSSAI Registration + Table 1 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. What are the Different Types of FSSAI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          FSSAI classifies food business registrations into three main categories based on the scale of business operations, annual turnover thresholds, and production capacity:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full mb-3">
              TIER 1 • PETTY OPERATORS
            </div>
            <h3 className="text-base font-medium text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
              FSSAI Basic Registration
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
              Designed for petty food manufacturers, small retail shops, hawkers, tea stalls, juice corners, home bakers, and temporary food stalls with turnover up to ₹12 Lakhs per annum.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Filing Form: Form A on FoSCoS</li>
              <li>• Statutory Fee: ₹100 / year</li>
              <li>• Delivery: 7 to 10 working days</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white border-2 border-[#00B074] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
            <div className="inline-block text-[11px] font-semibold text-white bg-[#00B074] px-2.5 py-1 rounded-full mb-3">
              TIER 2 • MID-SCALE FBOs
            </div>
            <h3 className="text-base font-medium text-slate-900 mb-1.5 group-hover:text-[#00B074] transition-colors">
              FSSAI State License
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
              Mandatory for restaurants, bakeries, cloud kitchens, caterers, food distributors, wholesalers, and mid-sized manufacturing units with turnover between ₹12 Lakhs and ₹20 Crores.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Filing Form: Form B on FoSCoS</li>
              <li>• Statutory Fee: ₹2,000 to ₹5,000 / year</li>
              <li>• Delivery: 30 to 45 working days</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#594CF5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <div className="inline-block text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full mb-3">
              TIER 3 • ENTERPRISE &amp; EXPORT
            </div>
            <h3 className="text-base font-medium text-slate-900 mb-1.5 group-hover:text-purple-700 transition-colors">
              FSSAI Central License
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
              Required for large food manufacturers exceeding ₹20 Crores turnover, 100% Export Oriented Units (EOU), food importers holding IEC, seaports, airports, and multi-state restaurant chains.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Filing Form: Form B (Central CLA)</li>
              <li>• Statutory Fee: ₹7,500 / year</li>
              <li>• Delivery: 45 to 60 working days</li>
            </ul>
          </div>
        </div>

        {/* Table 1 */}
        <div className="pt-2">
          <h3 className="text-sm font-medium text-slate-900 mb-2">
            Table 1: Comparison of FSSAI Registration Types, Eligibility &amp; Authorities
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-[13px]">
              <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">License Type</th>
                  <th className="py-3 px-4">Eligibility Overview</th>
                  <th className="py-3 px-4">Annual Turnover Limit</th>
                  <th className="py-3 px-4">Issuing Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-light text-slate-600">
                {TABLE_1_TYPES.map((row, idx) => (
                  <tr key={idx} className="transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800">{row.type}</td>
                    <td className="py-3 px-4 leading-relaxed">{row.eligibility}</td>
                    <td className="py-3 px-4 text-emerald-800 font-medium">{row.turnover}</td>
                    <td className="py-3 px-4 leading-relaxed">{row.authority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Who Needs to Apply */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. Who Needs to Apply for FSSAI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Under Section 31 of the Food Safety and Standards Act, 2006, any commercial establishment or individual involved in any stage of the food value chain is legally classified as a Food Business Operator (FBO) and must obtain FSSAI registration:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Factory className="w-5 h-5 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Food Manufacturers &amp; Processors</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Industrial plants manufacturing packaged goods, beverages, snacks, oils, confectionery, or dairy products.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <UtensilsCrossed className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Restaurants &amp; Cloud Kitchens</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Dine-in restaurants, cafes, cloud kitchens, delivery kitchens, food trucks, and corporate canteens.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Store className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Wholesalers, Distributors &amp; Retailers</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Kirana stores, supermarkets, grocery wholesalers, cold storages, warehouses, and re-packers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Globe2 className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Food Importers &amp; Exporters</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Importers bringing foreign packaged foods into India or exporting domestic produce through customs ports.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Truck className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Food Transporters &amp; Delivery Fleets</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Logistics operators transporting perishable food items, refrigerated container trucks, and delivery networks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Flame className="w-5 h-5 text-rose-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">E-Commerce &amp; Online Food Aggregators</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Online food delivery portals (Swiggy, Zomato), grocery delivery apps, and online marketplace sellers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Documents Required + Table 2 */}
      <section id="documents-required" className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. What are the Documents Required for FSSAI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          The documentation requirements vary depending on whether you are applying for Basic Registration, State License, or Central License:
        </p>

        {/* Table 2 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Document Checklist</th>
                <th className="py-3 px-4 text-emerald-700">Basic Registration</th>
                <th className="py-3 px-4 text-[#00B074]">State License</th>
                <th className="py-3 px-4 text-purple-700">Central License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_2_DOCUMENTS.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.document}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.basic}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal">{row.state}</td>
                  <td className="py-3 px-4 leading-relaxed font-normal">{row.central}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: FSSAI Registration Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. What is the FSSAI Registration Process?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          The FSSAI licensing process is 100% digitalized on the FoSCoS cloud platform. Merrafilings handles the end-to-end filing to ensure zero delays:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Eligibility &amp; Food Category Selection</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                We review your business operations against FSSAI food product categorization codes (Dairy, Confectionery, Beverages, Meat, Health Supplements) and determine whether Form A (Basic) or Form B (State/Central) applies.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">FoSCoS Portal Application Drafting</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Our team registers your account on the FoSCoS portal, fills out all statutory forms, drafts the Food Safety Management Plan (FSMS), and prepares self-declarations.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Document Upload &amp; Treasury Fee Payment</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                All applicant KYC, premises proof, water testing reports, and layout plans are uploaded to the government server, and statutory fees are paid via online challan for the requested validity period (1 to 5 years).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Designated Officer (DO) Scrutiny &amp; Inspection</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                The food authority reviews the application. For State and Central licenses, a Food Safety Officer (FSO) may schedule an inspection of the premises. We assist in resolving any queries within the mandated 30-day window.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="w-7 h-7 rounded-full bg-[#00B074] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900">FSSAI License Issuance &amp; QR Certificate Download</h3>
              <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                Upon final approval, the 14-digit FSSAI Registration Certificate with an embedded verification QR code is issued and delivered straight to your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Inspection & Approval Process + Table 3 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. What is the FSSAI Registration Inspection and Approval Process?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Once your application is submitted on FoSCoS, the Designated Officer (DO) conducts a thorough scrutiny. Understanding the inspection criteria and approval stages helps avoid unnecessary delays:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Key Inspection Parameters
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Kitchen / manufacturing floor cleanliness and drainage facilities</li>
              <li>• Availability of potable running water with NABL test reports</li>
              <li>• Pest control measures and sealed waste disposal systems</li>
              <li>• Health check-up certificates and food-handling gear of staff</li>
              <li>• Separate storage areas for raw materials and finished products</li>
            </ul>
          </div>

          <div className="p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" /> Inspection &amp; Approval Milestones
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-light">
              <li>• Basic Registration: No inspection; automated approval in 7-10 days</li>
              <li>• State License: Discretionary inspection within 30 days of submission</li>
              <li>• Central License: Mandatory physical inspection before approval</li>
              <li>• Clarifications must be replied to within 30 days on FoSCoS</li>
            </ul>
          </div>
        </div>

        {/* Table 3 */}
        <div className="pt-2">
          <h3 className="text-sm font-medium text-slate-900 mb-2">
            Table 3: Processing Stages &amp; Approval Timelines
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-[13px]">
              <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Processing Stage</th>
                  <th className="py-3 px-4 text-emerald-700">Basic Registration</th>
                  <th className="py-3 px-4 text-[#00B074]">State License</th>
                  <th className="py-3 px-4 text-purple-700">Central License</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-light text-slate-600">
                {TABLE_3_INSPECTION.map((row, idx) => (
                  <tr key={idx} className="transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800">{row.stage}</td>
                    <td className="py-3 px-4 leading-relaxed">{row.basic}</td>
                    <td className="py-3 px-4 leading-relaxed">{row.state}</td>
                    <td className="py-3 px-4 leading-relaxed font-normal">{row.central}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: Fees + Table 4 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. What are the Fees for FSSAI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Government statutory fees are determined according to the registration tier and the validity period chosen by the applicant (1 to 5 years):
        </p>

        {/* Table 4 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Registration Type</th>
                <th className="py-3 px-4">Official Statutory Fee</th>
                <th className="py-3 px-4">Validity Options</th>
                <th className="py-3 px-4">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_4_FEES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.type}</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">{row.fee}</td>
                  <td className="py-3 px-4">{row.duration}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Validity + Table 5 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. What is the Validity of FSSAI License?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          FSSAI registration or license is granted for a minimum duration of 1 year and a maximum duration of 5 years, depending on the number of years paid for during initial application.
        </p>

        {/* Table 5 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">License Type</th>
                <th className="py-3 px-4">Minimum Validity</th>
                <th className="py-3 px-4">Maximum Validity</th>
                <th className="py-3 px-4">Renewal Window Opens</th>
                <th className="py-3 px-4">Mandatory Renewal Deadline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_5_VALIDITY.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.type}</td>
                  <td className="py-3 px-4">{row.minVal}</td>
                  <td className="py-3 px-4">{row.maxVal}</td>
                  <td className="py-3 px-4 text-blue-700 font-medium">{row.renewalWindow}</td>
                  <td className="py-3 px-4 text-rose-700 font-medium">{row.mandatoryBefore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Renewal Process */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. What is the FSSAI License Renewal Process?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          FSSAI licenses must be renewed well before their expiration date to maintain seamless business operations and avoid heavy government penalties:
        </p>
        <div className="bg-amber-50/60 p-4.5 rounded-2xl border border-amber-200/80 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-medium text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Crucial Rule: Apply at least 30 Days Before Expiry</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed font-light">
            The FoSCoS portal allows renewal applications starting 120 days prior to expiry. If a renewal application is not filed at least 30 days before the expiration date, a mandatory late fee penalty of <strong>₹100 per day</strong> is levied. If the license expires completely, the FBO cannot renew and must apply for a brand new license, halting operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-semibold text-[#155EEF] block mb-1">Step 1: Check Expiry Date</span>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Verify your certificate expiration date on the FoSCoS portal or via your Merrafilings dashboard.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-semibold text-[#155EEF] block mb-1">Step 2: File Form A/B Renewal</span>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Submit the online renewal petition with updated annual turnover figures and latest premise proofs.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-semibold text-[#00B074] block mb-1">Step 3: Download Renewed License</span>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Upon officer sign-off, download your renewed certificate preserving your original 14-digit number.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Penalties + Table 6 */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. What are the Penalties for Non-Compliance with FSSAI?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Operating a food business in India without a valid FSSAI license or violating food safety norms carries severe criminal penalties and financial liabilities under the FSS Act, 2006:
        </p>

        {/* Table 6 */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Offence &amp; Statutory Section</th>
                <th className="py-3 px-4 text-rose-700">Prescribed Legal Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-light text-slate-600">
              {TABLE_6_PENALTIES.map((row, idx) => (
                <tr key={idx} className="transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.offence}</td>
                  <td className="py-3 px-4 text-rose-900 leading-relaxed font-normal">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: How to Check Status */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. How to Check FSSAI Registration Status Online?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          You can track your application status anytime using your 17-digit FoSCoS application reference number:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#155EEF]" /> Step-by-Step Status Tracking
            </h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 font-light">
              <li>Visit the official portal at <strong>foscos.fssai.gov.in</strong></li>
              <li>Click on &apos;Track Application Status&apos; on the top navigation bar.</li>
              <li>Enter your 17-digit FoSCoS Application Reference Number.</li>
              <li>Enter the Captcha verification code and click &apos;Submit&apos;.</li>
              <li>View the active status: <em>Submitted, Under Scrutiny, Query Raised, or Approved</em>.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-600" /> How to Download FSSAI Certificate
            </h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 font-light">
              <li>Log in to the FoSCoS portal with your user credentials.</li>
              <li>Navigate to &apos;Issued &gt; Issued License / Registration&apos;.</li>
              <li>Click on your 14-digit License Number link to open authorization details.</li>
              <li>Download the official PDF certificate featuring the embedded QR code.</li>
              <li>Print and display the certificate prominently at your business entrance.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 12: Common Mistakes */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. What are the Common Mistakes to Avoid in FSSAI Registration?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <AlertTriangle className="w-4 h-4 text-rose-600 mb-1.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Incorrect Turnover Estimation</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Applying for Basic Registration when actual turnover exceeds ₹12 Lakhs leads to rejection and forfeiture of fees.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <AlertTriangle className="w-4 h-4 text-rose-600 mb-1.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Mismatched Food Product Categories</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Failing to map every food product category you sell results in an incomplete license requiring costly amendments.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <AlertTriangle className="w-4 h-4 text-rose-600 mb-1.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Submitting Blurry or Incomplete Documents</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Uploading illegible rent deeds, unsigned partnership agreements, or expired electricity bills triggers official scrutiny objections.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-rose-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <AlertTriangle className="w-4 h-4 text-rose-600 mb-1.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-slate-900 mb-1">Ignoring FSO Inspection Clarifications</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Failing to reply to Food Safety Officer queries on FoSCoS within 30 days causes automatic application rejection.
            </p>
          </div>
        </div>
      </section>

      {/* Section 13: Benefits */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          13. What are the Benefits of FSSAI Registration?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-medium text-slate-900 mb-1">Consumer Trust &amp; Brand Value</h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Displaying the official FSSAI logo and 14-digit number on your food packaging and storefront builds unmatched customer confidence.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Store className="w-5 h-5 text-[#155EEF] mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-medium text-slate-900 mb-1">Online Aggregator Onboarding</h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Mandatory for onboarding restaurants and food products on Swiggy, Zomato, Amazon, Blinkit, Zepto, and BigBasket.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <Scale className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-medium text-slate-900 mb-1">Complete Legal Immunity</h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Protects business owners from hefty fines up to ₹5 Lakhs and criminal imprisonment under Section 31 of the FSS Act, 2006.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          14. Why Choose Merrafilings for FSSAI Registration Services?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-light">
          Merrafilings is India&apos;s premier regulatory compliance platform. We remove all bureaucracy and streamline your food licensing end-to-end:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Online FoSCoS Process – No government office visits required</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Pan-India Support – Over 50,000+ Food Business Operators certified</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Dedicated Food Safety Legal Specialist for query resolution</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Automated Annual Renewal Tracking – Avoid ₹100/day late penalty fees</span>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => openContactModal("FSSAI License Registration")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#594CF5] via-[#7B4CF5] to-[#D946EF] hover:brightness-105 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] cursor-pointer transition-all duration-200"
          >
            <span>Apply for FSSAI License Today</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default function FSSAIPage() {
  return (
    <ServicePageTemplate
      badgeText="Food Safety and Standards Authority of India"
      heroTitle={
        <>
          <span>Apply for </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            FSSAI Registration
          </span>{" "}
          <span>Online in India</span>
        </>
      }
      heroSubtitle="Secure your official 14-digit FSSAI Food License or Basic Registration online. Complete FoSCoS portal application filing, food category classification, FSMS drafting, hygiene compliance, and prompt certificate issuance across all Indian states."
      formTitle="Apply for FSSAI License"
      formSubtitle="Enter your details below to consult with our food safety compliance specialists."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Transparent packages. State-wise{" "}
          <span className="font-normal text-[#00B074]">food licensing pricing.</span>
        </>
      }
      pricingSubtitle="Select your business category and turnover scale for rapid, guaranteed FSSAI Food License issuance."
      breadcrumbCurrent="FSSAI Registration"
      guideTitle="FSSAI Registration Online for Business in India"
      guideContent={<FSSAIGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about obtaining FSSAI Registration and Food Safety License in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
