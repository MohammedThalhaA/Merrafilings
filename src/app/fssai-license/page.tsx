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
} from "lucide-react";

const FAQ_COL_1 = [
  {
    "q": "What is an FSSAI License?",
    "a": "An FSSAI License is a certification issued by the Food Safety and Standards Authority of India (FSSAI) for food businesses. It is mandatory and demonstrates compliance with food safety standards to ensure safe and hygienic food to consumers."
  },
  {
    "q": "Who needs to obtain an FSSAI License?",
    "a": "Any food business operator, including manufacturers, distributors, retailers, and importers, must obtain an FSSAI License. This certification is mandatory for businesses with a turnover exceeding 12 lahks."
  },
  {
    "q": "What are the types of FSSAI Licenses?",
    "a": "The FSSAI offers three types of licenses based on the scale and nature of the business. Basic FSSAI Registration; State License; Central License"
  },
  {
    "q": "What documents are required for an FSSAI License?",
    "a": "The required documents include identity proof, address proof, food safety management plan, and proof of possession of premises."
  },
  {
    "q": "What is the validity period of an FSSAI License?",
    "a": "The validity of an FSSAI License varies based on the type of License, ranging from 1 to 5 years. The Food Business Operator must apply for renewal thirty days before the expiry of the current request."
  },
  {
    "q": "Can I operate my food business without an FSSAI License?",
    "a": "No, it is mandatory to obtain an FSSAI License before commencing any food-related business activities."
  },
  {
    "q": "How long does it take to obtain an FSSAI License?",
    "a": "The processing time for an FSSAI License application is usually around 30-60 days, depending on the license type and documentation completeness."
  },
  {
    "q": "What is the penalty for operating without an FSSAI License?",
    "a": "Operating a food business without an FSSAI License can lead to penalties, fines, and potential business closure."
  },
  {
    "q": "How can I complete the FSSAI license apply process?",
    "a": "The FSSAI license apply process involves determining the FSSAI license type, Registering on the FSSAI portal, Submitting the required documents, paying the application fee, and tracking the status of your application. Once the FSSAI license apply process is complete, you will receive your FSSAI license in 60 days."
  },
  {
    "q": "What is the FSSAI license cost for registering a food business in India?",
    "a": "The FSSAI license cost depends on the type of license your business requires, which can be categorized into Basic, State, and Central licenses. The FSSAI license cost varies based on factors like the scale of your business, its annual turnover, and the type of operations."
  },
  {
    "q": "Can I apply for an FSSAI License if my business still needs to be operational?",
    "a": "Yes, you can apply for an FSSAI License even if your business is not operational, but the License will be granted once you meet all the requirements."
  },
  {
    "q": "Are food businesses required to display their FSSAI licenses?",
    "a": "All food businesses must prominently display their FSSAI License at their premises."
  },
  {
    "q": "Is there a separate license for the import/export of food products?",
    "a": "Yes, an FSSAI License for import/export is required in addition to the regular FSSAI License for food business operations."
  },
  {
    "q": "What is the difference between an FSSAI License and FSSAI Registration?",
    "a": "FSSAI Registration applies to small-scale food businesses, while an FSSAI License is required for medium to large-scale food businesses."
  }
];

const FAQ_COL_2 = [
  {
    "q": "Can I upgrade my FSSAI Registration to an FSSAI License?",
    "a": "You can upgrade your FSSAI Registration to an FSSAI License if your business grows beyond the registration limits."
  },
  {
    "q": "Can I operate multiple food businesses with a single FSSAI License?",
    "a": "No, each food business requires a separate FSSAI License, even if the same person or entity operates them."
  },
  {
    "q": "Do I need to submit periodic returns or reports with my FSSAI License?",
    "a": "Yes, FSSAI License holders must submit periodic returns and reports per the guidelines issued by the FSSAI."
  },
  {
    "q": "Can I modify the details mentioned in my FSSAI License?",
    "a": "Yes, you can apply for modifications or amendments to your FSSAI License if there are any changes in your business details."
  },
  {
    "q": "Do I need to obtain FSSAI License for utensils/packaging material meant for serving or packaging food?",
    "a": "You do not need to obtain an FSSAI License or Registration for utensils or packaging material intended for serving or packaging food. These items are not considered food under the definition provided in Section 3(n) of the FSS Act, 2006. Therefore, they are not subject to the requirement of an FSSAI License."
  },
  {
    "q": "My License was canceled. Can I apply for a new License?",
    "a": "Yes, you can apply for a new FSSAI license after three months from the date of cancellation as per Regulation 2.1.8 (3). However, ensuring that you have addressed and complied with all the observations mentioned in the improvement notice issued by the concerned authority is essential."
  },
  {
    "q": "I have a pulses/grains milling unit. What kind of License do I need to obtain?",
    "a": "If you have a pulses/grains milling unit, you must obtain a State License for your business. Pulses/Grains milling units are categorized as manufacturing businesses, and regardless of their production capacity, they fall under the State License category. Therefore, you should apply for a State License for your milling unit."
  },
  {
    "q": "How to transfer the License from one owner to another in case of the death of the owner?",
    "a": "In the unfortunate event of the owner's death, the License can be transferred to another individual. To transfer the License, you must provide the necessary documents, including the previous owner's death certificate and proof of legal heirship."
  },
  {
    "q": "How to renew your license/Registration after expiry?",
    "a": "To renew your FSSAI License/Registration after its expiry, you can follow these steps: You can renew your FSSAI License/Registration even after it has expired. However, penalties will be imposed based on the duration of the delay.; If you renew within 90 days from the original expiry date, you must pay three times the existing annual fee.; If the renewal is done between 91 to 180 days from the original expiry date, an additional two times the existing annual fee will be charged, making it a total penalty of five times the fee."
  },
  {
    "q": "Can I transfer my FSSAI License to another person?",
    "a": "No, an FSSAI License is non-transferable. In case of a change in ownership, a new license application must be filed."
  },
  {
    "q": "Do I need to renew my FSSAI License?",
    "a": "Yes, an FSSAI License must be renewed before its expiry to continue operating the food business legally."
  },
  {
    "q": "How can I do the FSSAI license number search by name?",
    "a": "Currently, the FSSAI portal does not directly allow FSSAI license number search by name of the business. However, you can visit the FoSCoS website and use the 'FBO Search' tab to find details by entering the license number. For searching by name, you might need to contact local FSSAI authorities."
  },
  {
    "q": "How much are the Food License Fees?",
    "a": "The FSSAI registration fees vary based on the type of license required. For instance, FSSAI Central License fees are typically higher and more comprehensive. The fees can be structured for different durations, such as the FSSAI license fee for 1 year or FSSAI license fee for 5 years, with the longer-term option potentially offering a more streamlined payment process. These fees are essential for ensuring compliance with food safety regulations in India."
  },
  {
    "q": "What are the different categories of FSSAI License Fee?",
    "a": "When considering the FSSAI license fee, it's essential to understand the different categories and their associated costs. The FSSAI registration fees vary based on the type of license required, with FSSAI Central License fees typically higher than State Licenses. The FSSAI license fee for 1 year and FSSAI license fee for 5 years are calculated based on the annual fee structure, although specific multi-year discounts may apply. Overall, these fees are part of the broader food license fees that ensure compliance with food safety standards in India."
  }
];

const FAQ_EXTRA_COL_1 = [
  {
    "q": "What is an FSSAI License?",
    "a": "An FSSAI License is a certification issued by the Food Safety and Standards Authority of India (FSSAI) for food businesses. It is mandatory and demonstrates compliance with food safety standards to ensure safe and hygienic food to consumers."
  },
  {
    "q": "Who needs to obtain an FSSAI License?",
    "a": "Any food business operator, including manufacturers, distributors, retailers, and importers, must obtain an FSSAI License. This certification is mandatory for businesses with a turnover exceeding 12 lahks."
  },
  {
    "q": "What are the types of FSSAI Licenses?",
    "a": "The FSSAI offers three types of licenses based on the scale and nature of the business. Basic FSSAI Registration; State License; Central License"
  },
  {
    "q": "What documents are required for an FSSAI License?",
    "a": "The required documents include identity proof, address proof, food safety management plan, and proof of possession of premises."
  },
  {
    "q": "What is the validity period of an FSSAI License?",
    "a": "The validity of an FSSAI License varies based on the type of License, ranging from 1 to 5 years. The Food Business Operator must apply for renewal thirty days before the expiry of the current request."
  },
  {
    "q": "Can I operate my food business without an FSSAI License?",
    "a": "No, it is mandatory to obtain an FSSAI License before commencing any food-related business activities."
  },
  {
    "q": "How long does it take to obtain an FSSAI License?",
    "a": "The processing time for an FSSAI License application is usually around 30-60 days, depending on the license type and documentation completeness."
  },
  {
    "q": "What is the penalty for operating without an FSSAI License?",
    "a": "Operating a food business without an FSSAI License can lead to penalties, fines, and potential business closure."
  },
  {
    "q": "How can I complete the FSSAI license apply process?",
    "a": "The FSSAI license apply process involves determining the FSSAI license type, Registering on the FSSAI portal, Submitting the required documents, paying the application fee, and tracking the status of your application. Once the FSSAI license apply process is complete, you will receive your FSSAI license in 60 days."
  },
  {
    "q": "What is the FSSAI license cost for registering a food business in India?",
    "a": "The FSSAI license cost depends on the type of license your business requires, which can be categorized into Basic, State, and Central licenses. The FSSAI license cost varies based on factors like the scale of your business, its annual turnover, and the type of operations."
  },
  {
    "q": "Can I apply for an FSSAI License if my business still needs to be operational?",
    "a": "Yes, you can apply for an FSSAI License even if your business is not operational, but the License will be granted once you meet all the requirements."
  },
  {
    "q": "Are food businesses required to display their FSSAI licenses?",
    "a": "All food businesses must prominently display their FSSAI License at their premises."
  },
  {
    "q": "Is there a separate license for the import/export of food products?",
    "a": "Yes, an FSSAI License for import/export is required in addition to the regular FSSAI License for food business operations."
  },
  {
    "q": "What is the difference between an FSSAI License and FSSAI Registration?",
    "a": "FSSAI Registration applies to small-scale food businesses, while an FSSAI License is required for medium to large-scale food businesses."
  }
];

const FAQ_EXTRA_COL_2 = [
  {
    "q": "Can I upgrade my FSSAI Registration to an FSSAI License?",
    "a": "You can upgrade your FSSAI Registration to an FSSAI License if your business grows beyond the registration limits."
  },
  {
    "q": "Can I operate multiple food businesses with a single FSSAI License?",
    "a": "No, each food business requires a separate FSSAI License, even if the same person or entity operates them."
  },
  {
    "q": "Do I need to submit periodic returns or reports with my FSSAI License?",
    "a": "Yes, FSSAI License holders must submit periodic returns and reports per the guidelines issued by the FSSAI."
  },
  {
    "q": "Can I modify the details mentioned in my FSSAI License?",
    "a": "Yes, you can apply for modifications or amendments to your FSSAI License if there are any changes in your business details."
  },
  {
    "q": "Do I need to obtain FSSAI License for utensils/packaging material meant for serving or packaging food?",
    "a": "You do not need to obtain an FSSAI License or Registration for utensils or packaging material intended for serving or packaging food. These items are not considered food under the definition provided in Section 3(n) of the FSS Act, 2006. Therefore, they are not subject to the requirement of an FSSAI License."
  },
  {
    "q": "My License was canceled. Can I apply for a new License?",
    "a": "Yes, you can apply for a new FSSAI license after three months from the date of cancellation as per Regulation 2.1.8 (3). However, ensuring that you have addressed and complied with all the observations mentioned in the improvement notice issued by the concerned authority is essential."
  },
  {
    "q": "I have a pulses/grains milling unit. What kind of License do I need to obtain?",
    "a": "If you have a pulses/grains milling unit, you must obtain a State License for your business. Pulses/Grains milling units are categorized as manufacturing businesses, and regardless of their production capacity, they fall under the State License category. Therefore, you should apply for a State License for your milling unit."
  },
  {
    "q": "How to transfer the License from one owner to another in case of the death of the owner?",
    "a": "In the unfortunate event of the owner's death, the License can be transferred to another individual. To transfer the License, you must provide the necessary documents, including the previous owner's death certificate and proof of legal heirship."
  },
  {
    "q": "How to renew your license/Registration after expiry?",
    "a": "To renew your FSSAI License/Registration after its expiry, you can follow these steps: You can renew your FSSAI License/Registration even after it has expired. However, penalties will be imposed based on the duration of the delay.; If you renew within 90 days from the original expiry date, you must pay three times the existing annual fee.; If the renewal is done between 91 to 180 days from the original expiry date, an additional two times the existing annual fee will be charged, making it a total penalty of five times the fee."
  },
  {
    "q": "Can I transfer my FSSAI License to another person?",
    "a": "No, an FSSAI License is non-transferable. In case of a change in ownership, a new license application must be filed."
  },
  {
    "q": "Do I need to renew my FSSAI License?",
    "a": "Yes, an FSSAI License must be renewed before its expiry to continue operating the food business legally."
  },
  {
    "q": "How can I do the FSSAI license number search by name?",
    "a": "Currently, the FSSAI portal does not directly allow FSSAI license number search by name of the business. However, you can visit the FoSCoS website and use the 'FBO Search' tab to find details by entering the license number. For searching by name, you might need to contact local FSSAI authorities."
  },
  {
    "q": "How much are the Food License Fees?",
    "a": "The FSSAI registration fees vary based on the type of license required. For instance, FSSAI Central License fees are typically higher and more comprehensive. The fees can be structured for different durations, such as the FSSAI license fee for 1 year or FSSAI license fee for 5 years, with the longer-term option potentially offering a more streamlined payment process. These fees are essential for ensuring compliance with food safety regulations in India."
  },
  {
    "q": "What are the different categories of FSSAI License Fee?",
    "a": "When considering the FSSAI license fee, it's essential to understand the different categories and their associated costs. The FSSAI registration fees vary based on the type of license required, with FSSAI Central License fees typically higher than State Licenses. The FSSAI license fee for 1 year and FSSAI license fee for 5 years are calculated based on the annual fee structure, although specific multi-year discounts may apply. Overall, these fees are part of the broader food license fees that ensure compliance with food safety standards in India."
  }
];

const FORM_FEATURES = [
  { icon: <FileText className="w-4 h-4" />, text: "FoSCoS Application Filing & Document Audit" },
  { icon: <UtensilsCrossed className="w-4 h-4" />, text: "Food Category Mapping & FSMS Plan" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "FSS Act 2006 100% Legal Compliance" },
  { icon: <Award className="w-4 h-4" />, text: "14-Digit FSSAI License / Registration Issuance" },
];

const PACKAGES: PricingPackage[] = [
  {
    name: "FSSAI Basic Registration",
    shortDesc: "Designed for small food businesses, hawkers, street food vendors, and cloud kitchens with annual turnover up to ₹12 Lakhs.",
    expandedDesc: "Complete FoSCoS Form A drafting, photo identity proof review, business address documentation, product categorization under FSSAI food safety regulations, and digital certificate delivery within 7-10 working days.",
    price: "₹3,899",
    priceSub: "+ Govt Statutory Fees | Valid 1 to 5 Years",
    features: [
      "FoSCoS Form A Online Drafting & Submission",
      "Food Category Classification & Mapping",
      "Self-Declaration of Food Safety Compliance",
      "14-Digit FSSAI Registration Number & Certificate",
    ],
  },
  {
    name: "FSSAI State License",
    popular: true,
    badge: "Most Popular",
    shortDesc: "Mandatory for mid-sized food processors, restaurants, catering services, wholesalers, and cloud kitchens (₹12 Lakhs to ₹20 Crores turnover).",
    expandedDesc: "Comprehensive FoSCoS Form B application, kitchen layout blueprint review, machinery horsepower & daily production capacity calculation, water test report verification, Food Safety Management System (FSMS) plan, and state food safety officer scrutiny handling.",
    price: "₹8,499",
    priceSub: "+ State Statutory Fees | Turnaround 20-30 Days",
    features: [
      "FoSCoS Form B Comprehensive Application",
      "Kitchen Blueprint & Plant Layout Consultation",
      "FSMS Plan Drafting & Food Category Approvals",
      "Water Potability Report & Machinery Verification",
      "Direct Department Follow-up & Clarification Handling",
      "Priority Food Safety Compliance Officer Support",
    ],
  },
  {
    name: "FSSAI Central License",
    shortDesc: "Required for large-scale manufacturers (> ₹20 Cr turnover), multi-state food chains, importers/exporters, and airports/seaports.",
    expandedDesc: "Central Licensing Authority (CLA) filing on FoSCoS. Includes Import Export Code (IEC) linkage for food trade, recalled product management documentation, laboratory nutritional testing advisory, and dedicated senior food regulatory legal counsel.",
    price: "₹14,999",
    priceSub: "+ Central Statutory Fees | Pan-India & Multi-State",
    features: [
      "Central Licensing Authority (CLA) Form B Filing",
      "Import Export Code (IEC) & Custom Gate Linkage",
      "Multi-Unit Head Office Centralized Dashboard",
      "Product Recall Policy & FSMS Detailed Dossier",
      "Dedicated Senior Food Safety Legal Specialist",
      "Annual Return Form D-1 & Compliance Advisory",
    ],
  },
];

const RELATED_GUIDES = [
  "How to Check FSSAI License Number Online on FoSCoS",
  "Difference Between FSSAI Registration and State / Central License",
  "Mandatory Labeling and Display Rules for Food Businesses",
  "FSSAI Renewal Process: How to Avoid Cancellation and Late Fees",
  "Water Testing Report Norms for Restaurants and Food Units",
  "FSSAI Annual Return Filing (Form D-1) Guidelines for Manufacturers",
];

const RELATED_SERVICES_TAGS = [
  "Municipal Trade License",
  "Shop & Establishment License",
  "GST Registration for Restaurants",
  "Trademark Registration for Food Brand",
  "Import Export Code (IEC) for Food",
  "ISO 22000 Food Safety Certification",
  "Nutrition Facts & Food Lab Testing",
  "Barcodes for Packaged Food Items",
];

const POPULAR_SEARCHES_TAGS = [
  "fssai license apply online",
  "fssai registration fees in india",
  "foscos portal login",
  "fssai certificate download",
  "fssai state license eligibility",
  "fssai central license requirements",
  "fssai basic registration form a",
  "food safety license online",
  "fssai turnover limit 12 lakhs",
  "fssai status check by application number",
  "penalty for running food business without fssai",
  "food license documents required",
];

const STATE_VS_CENTRAL_TABLE = [
  { parameter: "Issuing Authority", state: "State Food Safety Authority (Designated Food Safety Officer)", central: "Central Licensing Authority (FSSAI Central Head Office)" },
  { parameter: "Annual Turnover Threshold", state: "₹12 Lakh to ₹20 Crore per annum", central: "Above ₹20 Crore per annum (or 100% Export Units)" },
  { parameter: "Operational Scope", state: "Single state operational boundary", central: "Multiple state operations, Head Offices, or nationwide retail chains" },
  { parameter: "Manufacturing Capacity (Dairy)", state: "501 to 50,000 Litres of milk per day", central: "More than 50,000 Litres of milk per day" },
  { parameter: "Manufacturing Capacity (Meat)", state: "Up to 50 large animals or 150 small animals/day", central: "Large industrial slaughterhouses exceeding state capacity" },
  { parameter: "Import / Export Operations", state: "Not eligible for direct foreign food import", central: "Mandatory for all food importers and exporters holding IEC" },
  { parameter: "Validity Period", state: "1 to 5 years (selected at application)", central: "1 to 5 years (selected at application)" },
];

const ELIGIBILITY_CRITERIA_TABLE = [
  { category: "Petty Food Manufacturers & Vendors", criteria: "Turnover < ₹12 Lakh/yr or production < 100 kg/ltr per day", license: "FSSAI Basic Registration (Form A)" },
  { category: "Mid-Sized Restaurants & Cloud Kitchens", criteria: "Turnover between ₹12 Lakh and ₹20 Crore/yr", license: "FSSAI State License (Form B)" },
  { category: "Food Wholesalers, Distributors & Retailers", criteria: "Turnover between ₹12 Lakh and ₹20 Crore/yr", license: "FSSAI State License (Form B)" },
  { category: "Large Food Processing Plants & Breweries", criteria: "Turnover > ₹20 Crore/yr or large production capacity", license: "FSSAI Central License (Form B)" },
  { category: "Food Importers & Export Oriented Units (EOU)", criteria: "Any import/export of food items regardless of turnover", license: "FSSAI Central License (Form B)" },
  { category: "Catering Units at Central Govt Locations", criteria: "Operations at Airports, Seaports, Railways, Defense canteens", license: "FSSAI Central License (Form B)" },
];

const DOCUMENTS_CHECKLIST_TABLE = [
  { document: "Passport Size Photograph of FBO Owner / Partners / Directors", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Government Photo ID Proof (Aadhaar, PAN, Voter ID, Passport)", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Proof of Premises Possession (Electricity Bill, Rent Agreement & NOC)", basic: "✅ Required", state: "✅ Required", central: "✅ Required" },
  { document: "Partnership Deed / Certificate of Incorporation (CIN) & MOA/AOA", basic: "Optional", state: "✅ Required", central: "✅ Required" },
  { document: "Blueprint / Layout Plan of the Manufacturing & Kitchen Processing Area", basic: "Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "List of Food Products Proposed to be Manufactured / Sold", basic: "✅ Self Declaration", state: "✅ Detailed Schedule", central: "✅ Detailed Schedule" },
  { document: "List of Equipment, Machinery & Horsepower Installed", basic: "Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "Chemical & Bacteriological Water Testing Report from NABL Lab", basic: "Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "Food Safety Management System (FSMS) Plan or ISO 22000 Certificate", basic: "Not Required", state: "✅ Required", central: "✅ Required" },
  { document: "Director General of Foreign Trade (DGFT) Import Export Code (IEC)", basic: "Not Applicable", state: "Not Applicable", central: "✅ Required for Importers" },
];

const FEES_STRUCTURE_TABLE = [
  { type: "FSSAI Basic Registration", fee: "₹100 per year", validity: "1 to 5 years", eligible: "Petty food manufacturers, hawkers, small retailers (< ₹12 Lakh)" },
  { type: "FSSAI State License (Category 1: 4-Star Hotels, Large Dist.)", fee: "₹5,000 per year", validity: "1 to 5 years", eligible: "Hotels 4-star and above, large state distributors" },
  { type: "FSSAI State License (Category 2: Restaurants, Wholesalers)", fee: "₹2,000 per year", validity: "1 to 5 years", eligible: "Restaurants, cloud kitchens, bakeries, general food traders" },
  { type: "FSSAI State License (Manufacturing / Processing)", fee: "₹3,000 – ₹5,000 per year", validity: "1 to 5 years", eligible: "Food manufacturers producing between 100 kg to 2 MT/day" },
  { type: "FSSAI Central License (All Categories)", fee: "₹7,500 per year", validity: "1 to 5 years", eligible: "Importers, manufacturers > ₹20 Cr, multi-state operators, airports" },
];

const FSSAI_VS_FOSCOS_TABLE = [
  { parameter: "Full Name", fssai: "Food Safety and Standards Authority of India", foscos: "Food Safety Compliance System", foodLicense: "Official FSSAI License Certificate" },
  { parameter: "Nature & Role", fssai: "Statutory Regulatory Body under Ministry of Health & Family Welfare", foscos: "Cloud-Based Digital IT Portal replacing old FLRS system", foodLicense: "Legal Operating Permit with 14-digit registration number" },
  { parameter: "Primary Function", fssai: "Frames national food standards, testing guidelines, and policy", foscos: "Processes online license applications, renewals, and audits", foodLicense: "Mandatory compliance proof to display at food premises" },
  { parameter: "User Accessibility", fssai: "Government regulatory administration", foscos: "Accessible 24/7 by all Food Business Operators (FBOs)", foodLicense: "Publicly verifiable via QR code and FSSAI database" },
];

const PENALTIES_TABLE = [
  { violation: "Operating Food Business Without FSSAI License (Section 31)", penalty: "Imprisonment up to 6 months AND fine up to ₹5,00,000" },
  { violation: "Selling Substandard or Adulterated Food (Section 51)", penalty: "Financial penalty up to ₹5,00,000" },
  { violation: "Selling Misbranded Food or Misleading Labels (Section 52)", penalty: "Financial penalty up to ₹3,00,000" },
  { violation: "Manufacturing or Selling Unsafe Food with Injuries (Section 59)", penalty: "Imprisonment from 1 to 6 years AND fine up to ₹5,00,000" },
  { violation: "Unhygienic or Insanitary Processing Conditions (Section 56)", penalty: "Financial penalty up to ₹1,00,000" },
  { violation: "Failure to Comply with Improvement Notice (Section 55)", penalty: "Immediate suspension or cancellation of FSSAI License AND fine up to ₹2,00,000" },
];

function FSSAIGuideContent() {
  const { openContactModal } = useServicePage();

  return (
    <>
      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          1. What is FSSAI License Registration in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          <strong className="text-slate-800 font-medium">FSSAI License Registration</strong> is a mandatory statutory legal authorization established under the <strong className="text-slate-800 font-medium">Food Safety and Standards Act, 2006 (FSS Act)</strong>. It is governed by the Food Safety and Standards Authority of India under the Ministry of Health and Family Welfare.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Any individual or commercial enterprise involved in food manufacturing, processing, packaging, storage, transportation, distribution, wholesale, retail, catering, or import/export must possess a valid 14-digit FSSAI license or registration certificate before commencing commercial operations.
        </p>
        <div className="bg-[#FAF9F7] p-4.5 rounded-2xl border border-slate-200/80 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <strong className="text-slate-800 font-medium block mb-0.5">The 14-Digit FSSAI Number Mandate:</strong>
            The 14-digit FSSAI registration number provides complete traceability of food origin and manufacturer credibility. It is legally mandatory to print this number alongside the FSSAI logo on all food package labels, display it on restaurant entrance boards, and print it on consumer food bills.
          </div>
        </div>
      </section>

      {/* Section 2: What is FoSCoS Portal */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          2. What is the FoSCoS Portal &amp; Why is FSSAI Mandatory?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          The <strong className="text-slate-800 font-medium">Food Safety Compliance System (FoSCoS)</strong> is the next-generation cloud architecture launched by FSSAI (replacing the legacy Food Licensing and Registration System - FLRS). All new license applications, renewals, annual returns (Form D-1), product endorsements, and modifications are processed exclusively through FoSCoS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-emerald-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>Consumer Safety &amp; Trust</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal pl-10.5">
              Assures customers that ingredients, preparation hygiene, water potability, and packaging conform to national Codex standards.
            </p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#155EEF] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:bg-blue-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-blue-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#155EEF] group-hover:text-white transition-all duration-200">
                <Store className="w-4 h-4" />
              </div>
              <span>E-Commerce &amp; Zomato Onboarding</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal pl-10.5">
              Online aggregators (Swiggy, Zomato, Amazon, Blinkit, Zepto) mandatorily verify active FSSAI credentials before listing merchant menus.
            </p>
          </div>
          <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-600 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:bg-purple-50/20 transition-all duration-300 cursor-pointer group">
            <h3 className="text-[14.5px] font-medium text-slate-900 mb-1.5 flex items-center gap-2.5 group-hover:text-purple-950 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                <Scale className="w-4 h-4" />
              </div>
              <span>Protection from Prosecution</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal pl-10.5">
              Eliminates severe Section 31 legal liability, which imposes prison terms up to 6 months and hefty fines for uncertified food sales.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 3 Types of FSSAI License */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          3. What are the Types of FSSAI License in India?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          FSSAI classifies food business operators (FBOs) into three tiers based on annual turnover, daily installed processing capacity, and geographic footprint:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {/* Tier 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div>
              <div className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full mb-3">
                TIER 1 • PETTY BUSINESSES
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-1.5">FSSAI Basic Registration</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed mb-3">
                For petty food manufacturers, street hawkers, tea stalls, small home bakers, and retail outlets with annual turnover up to ₹12 Lakhs.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 font-normal">
                <li>• Filing Form: Form A via FoSCoS</li>
                <li>• Govt Fee: ₹100 per year</li>
                <li>• Timeline: 7 to 10 working days</li>
              </ul>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="p-5 rounded-2xl bg-white border-2 border-[#00B074] shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div>
              <div className="inline-block text-[11px] font-semibold text-white bg-[#00B074] px-2.5 py-1 rounded-full mb-3">
                TIER 2 • MID-SCALE FBOs
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-1.5">FSSAI State License</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed mb-3">
                For commercial restaurants, cloud kitchens, bakeries, food processors, distributors, and warehouses with turnover between ₹12 Lakhs and ₹20 Crores.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 font-normal">
                <li>• Filing Form: Form B via FoSCoS</li>
                <li>• Govt Fee: ₹2,000 to ₹5,000 / year</li>
                <li>• Timeline: 20 to 30 working days</li>
              </ul>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-purple-500 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div>
              <div className="inline-block text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full mb-3">
                TIER 3 • ENTERPRISE &amp; EXPORT
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-1.5">FSSAI Central License</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed mb-3">
                For large manufacturers exceeding ₹20 Crores turnover, 100% Export Oriented Units (EOUs), food importers holding IEC, and multi-state chains.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 font-normal">
                <li>• Filing Form: Form B (Central CLA)</li>
                <li>• Govt Fee: ₹7,500 per year</li>
                <li>• Timeline: 30 to 45 working days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: State vs Central License (Table 1) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          4. State vs. Central FSSAI License: Detailed Comparison
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Selecting between a State and Central license depends on turnover scale, daily production volume, and foreign trade integration:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-[#00B074]">State FSSAI License</th>
                <th className="py-3 px-4 text-purple-700">Central FSSAI License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {STATE_VS_CENTRAL_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.parameter}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.state}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.central}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Eligibility Criteria (Table 2) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          5. Which Food Business Operators (FBOs) Require FSSAI Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Under Section 31 of the Food Safety and Standards Act, every entity in the food supply chain requires appropriate certification:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Food Operator Segment</th>
                <th className="py-3 px-4">Turnover &amp; Capacity Criteria</th>
                <th className="py-3 px-4">Mandatory License Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {ELIGIBILITY_CRITERIA_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.category}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.criteria}</td>
                  <td className="py-3 px-4 text-[#155EEF] font-normal">{row.license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Documents Checklist Matrix (Table 3) */}
      <section id="documents-required" className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          6. FSSAI Registration Document Checklist Matrix
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Ensure all applicant identification, property deeds, and food processing technical plans are compiled accurately before submitting to FoSCoS:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Document Description</th>
                <th className="py-3 px-4">Basic Registration</th>
                <th className="py-3 px-4 text-[#00B074]">State License</th>
                <th className="py-3 px-4 text-purple-700">Central License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {DOCUMENTS_CHECKLIST_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.document}</td>
                  <td className="py-3 px-4 text-slate-600">{row.basic}</td>
                  <td className="py-3 px-4 text-slate-800 font-normal">{row.state}</td>
                  <td className="py-3 px-4 text-slate-800 font-normal">{row.central}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Step-by-Step Registration Guide */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          7. Step-by-Step Process for FSSAI Registration via FoSCoS
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings manages the complete filing and technical liaison lifecycle through the official FoSCoS portal:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">1</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Food Category &amp; Business Eligibility Audit</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                We analyze your product catalog against the 17 official FSSAI Food Category Codes (e.g., Dairy, Fats, Bakery, Beverages, Health Supplements) to establish whether Basic, State, or Central filing applies.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">2</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">FoSCoS Portal User Account &amp; Form A/B Drafting</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                We generate your secure FoSCoS profile, draft Form A (Registration) or Form B (License), and compile technical FSMS documentation and kitchen blueprints.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">3</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Online Submission &amp; Statutory Fee Payment</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                Application is lodged directly with the Food Safety Authority along with the official treasury challan payment for the chosen validity duration (1 to 5 years).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#155EEF] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#155EEF] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">4</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors">Department Scrutiny &amp; Inspection Resolution</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                The Designated Officer (DO) audits the submission. If inspection queries are raised, our food regulatory compliance specialists draft technical responses within 30 days.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs hover:border-[#00B074] hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 hover:bg-[#F8FAFC] transition-all duration-300 cursor-pointer group">
            <span className="w-7 h-7 rounded-full bg-[#00B074] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">5</span>
            <div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-emerald-900 transition-colors">14-Digit FSSAI License Issuance &amp; QR Certificate</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                Upon final approval, your official FSSAI Registration Certificate containing your 14-digit number and QR code is issued and stored in your Merrafilings cloud vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Government Fee Structure (Table 4) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          8. Fees for FSSAI License Registration in India
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Government statutory fees are officially prescribed by FSSAI and paid directly via the FoSCoS portal gateway:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">License Category</th>
                <th className="py-3 px-4">Statutory Annual Fee</th>
                <th className="py-3 px-4">Permitted Validity</th>
                <th className="py-3 px-4">Eligibility Overview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {FEES_STRUCTURE_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.type}</td>
                  <td className="py-3 px-4 text-emerald-800 font-normal">{row.fee}</td>
                  <td className="py-3 px-4">{row.validity}</td>
                  <td className="py-3 px-4 leading-relaxed">{row.eligible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: FSSAI vs FoSCoS vs Food License (Table 5) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          9. Difference Between FSSAI, FoSCoS, and Food License
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-[#155EEF]">FSSAI</th>
                <th className="py-3 px-4 text-purple-700">FoSCoS</th>
                <th className="py-3 px-4 text-[#00B074]">Food License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {FSSAI_VS_FOSCOS_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.parameter}</td>
                  <td className="py-3 px-4 text-slate-800 font-normal">{row.fssai}</td>
                  <td className="py-3 px-4 text-slate-800 font-normal">{row.foscos}</td>
                  <td className="py-3 px-4 text-slate-800 font-normal">{row.foodLicense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: Consequences & Penalties (Table 6) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          10. Penalties for Non-Compliance with FSSAI
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Food safety violations in India are strictly prosecuted under Chapter IX of the Food Safety and Standards Act, 2006:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-[13px]">
            <thead className="bg-[#FAF9F7] text-slate-700 font-medium border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Statutory Violation</th>
                <th className="py-3 px-4 text-rose-700">Prescribed Legal Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-900">
              {PENALTIES_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{row.violation}</td>
                  <td className="py-3 px-4 text-rose-900 leading-relaxed">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: How to Download & Check Status */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          11. How to Check Status &amp; Download Certificate Online
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#155EEF]" /> Check Application Status Online
            </h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 font-normal">
              <li>Visit the official portal at <strong>foscos.fssai.gov.in</strong></li>
              <li>Click on &apos;Track Application Status&apos; on the homepage.</li>
              <li>Enter your 17-digit FoSCoS Application Reference Number.</li>
              <li>Enter Captcha code and view real-time scrutiny progress.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-600" /> Download FSSAI Certificate
            </h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 font-normal">
              <li>Log in to your FoSCoS account using your User ID and Password.</li>
              <li>Navigate to &apos;Issued &gt; Issued License / Registration&apos;.</li>
              <li>Click on the License Number link to view full authorization details.</li>
              <li>Download the official PDF certificate featuring the embedded QR code.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 12: Why Merrafilings */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1F1646] tracking-tight">
          12. Why Choose Merrafilings for FSSAI License Registration?
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 font-normal">
          Merrafilings is India&apos;s leading regulatory compliance platform, having assisted over 50,000+ restaurants, food brands, cloud kitchens, and importers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">100% Digital FoSCoS Filing – Zero government office visits</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Expert Food Category &amp; FSMS Plan Mapping by CA/CS Experts</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Fast Turnaround &amp; Prompt Query Resolution with Food Safety Officers</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00B074] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle2 className="w-4 h-4 text-[#00B074] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-slate-900 transition-colors">Automated Annual Renewal Tracking &amp; Form D-1 Filing Reminders</span>
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

export default function FSSAILicensePage() {
  return (
    <ServicePageTemplate
      badgeText="FSSAI Food Safety & Regulatory Authority"
      heroTitle={
        <>
          <span>Get Your </span>
          <span className="bg-gradient-to-r from-[#5C3BFF] via-[#7052FF] to-[#FF4ED0] bg-clip-text text-transparent font-medium">
            FSSAI License
          </span>{" "}
          <span>Registration Online</span>
        </>
      }
      heroSubtitle="Secure your official 14-digit FSSAI Food License or Basic Registration online. Complete FoSCoS portal filing, category mapping, FSMS drafting, and fast approval across all states in India."
      formTitle="Apply for FSSAI License"
      formSubtitle="Enter your business details below to get immediate guidance from an FSSAI compliance specialist."
      formFeatures={FORM_FEATURES}
      packages={PACKAGES}
      pricingTitle={
        <>
          Simple packages. Transparent{" "}
          <span className="font-normal text-[#00B074]">food licensing pricing.</span>
        </>
      }
      pricingSubtitle="Select your business turnover scale for rapid, guaranteed FSSAI Food License issuance."
      breadcrumbCurrent="FSSAI License"
      guideTitle="FSSAI License Registration Online for Business in India"
      guideContent={<FSSAIGuideContent />}
      relatedGuides={RELATED_GUIDES}
      faqCol1={FAQ_COL_1}
      faqCol2={FAQ_COL_2}
      faqExtraCol1={FAQ_EXTRA_COL_1}
      faqExtraCol2={FAQ_EXTRA_COL_2}
      faqSubtitle="Frequently asked questions about FSSAI License Registration and FoSCoS compliance in India."
      relatedServicesTags={RELATED_SERVICES_TAGS}
      popularSearchesTags={POPULAR_SEARCHES_TAGS}
    />
  );
}
