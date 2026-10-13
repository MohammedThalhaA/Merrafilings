export interface NavDropdownItem {
  title: string;
  desc?: string;
  href: string;
  badge?: string;
}

export interface NavCategory {
  id: string;
  label: string;
  hasDropdown: boolean;
  highlight?: boolean;
  badge?: string;
  columnLayout?: {
    columnsCount: number;
    width: string;
    columns: { title: string; href: string }[][];
  };
  items?: {
    categoryTitle?: string;
    links: NavDropdownItem[];
  }[];
}

export const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "startup",
    label: "Startup",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 2,
      width: "w-[480px]",
      columns: [
        // Column 1 from Screenshot 1
        [
          { title: "Proprietorship", href: "/proprietorship" },
          { title: "Partnership", href: "/partnership" },
          { title: "One Person Company", href: "/one-person-company" },
          { title: "Limited Liability Partnership", href: "/llp-registration" },
          { title: "Private Limited Company", href: "/company-registration" },
        ],
        // Column 2 from Screenshot 1
        [
          { title: "Section 8 Company", href: "/section-8-company-registration" },
          { title: "Trust Registration", href: "/trust-registration" },
          { title: "Public Limited Company", href: "/public-limited-company" },
          { title: "Producer Company", href: "/producer-company-registration" },
          { title: "Indian Subsidiary", href: "/indian-subsidiary" },
        ],
      ],
    },
  },
  {
    id: "registrations",
    label: "Registrations",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 3,
      width: "w-[680px]",
      columns: [
        [
          { title: "Startup India", href: "/start-up-india" },
          { title: "Trade License", href: "/trade-license" },
          { title: "FSSAI Registration", href: "/fssai" },
          { title: "FSSAI License", href: "/fssai-license" },
          { title: "ISO Registration", href: "/iso-registration" },
        ],
        [
          { title: "ESI Registration", href: "/esi-registration" },
          { title: "Professional Tax Registration", href: "/professional-tax-registration" },
          { title: "RCMC Registration", href: "#rcmc" },
          { title: "Barcode Registration", href: "#barcode" },
        ],
        [
          { title: "Digital Signature", href: "#dsc" },
          { title: "Shop Act Registration", href: "#shop-act" },
          { title: "Udyam Registration", href: "#udyam" },
          { title: "Legal Name Change", href: "#name-change" },
        ],
      ],
    },
  },
  {
    id: "trademark",
    label: "Trademark",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 3,
      width: "w-[680px]",
      columns: [
        // Column 1 from Screenshot 1
        [
          { title: "Trademark Registration", href: "#tm-reg" },
          { title: "Trademark Objection", href: "#tm-objection" },
          { title: "Trademark Certificate", href: "#tm-certificate" },
          { title: "Trademark Opposition", href: "#tm-opposition" },
          { title: "Trademark Hearing", href: "#tm-hearing" },
          { title: "Trademark Rectification", href: "#tm-rectification" },
        ],
        // Column 2 from Screenshot 1
        [
          { title: "TM Infringement Notice", href: "#tm-infringement" },
          { title: "Trademark Renewal", href: "#tm-renewal" },
          { title: "Trademark Transfer", href: "#tm-transfer" },
          { title: "Expedited TM Registration", href: "#tm-expedited" },
          { title: "Logo Designing", href: "#logo-design" },
          { title: "Design Registration", href: "#design-reg" },
        ],
        // Column 3 from Screenshot 1
        [
          { title: "Design Objection", href: "#design-objection" },
          { title: "Copyright Registration", href: "#copyright-reg" },
          { title: "Copyright Objection", href: "#copyright-objection" },
          { title: "Patent Registration", href: "#patent-reg" },
          { title: "Trademark Protection", href: "#tm-protection" },
        ],
      ],
    },
  },
  {
    id: "gst",
    label: "GST",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 2,
      width: "w-[520px]",
      columns: [
        // Column 1 from Screenshot 1
        [
          { title: "GST Registration", href: "#gst-reg" },
          { title: "GST Return Filing by Accountant", href: "#gst-returns" },
          { title: "GST LUT Form", href: "#gst-lut" },
          { title: "GST Notice", href: "#gst-notice" },
          { title: "GST Annual Return Filing (GSTR-9)", href: "#gstr-9" },
        ],
        // Column 2 from Screenshot 1
        [
          { title: "GST Registration for Foreigners", href: "#gst-foreigners" },
          { title: "GST Amendment", href: "#gst-amend" },
          { title: "GST Revocation", href: "#gst-revocation" },
          { title: "GSTR-10", href: "#gstr-10" },
          { title: "Virtual Office + GSTIN", href: "#virtual-office" },
        ],
      ],
    },
  },
  {
    id: "income-tax",
    label: "Income Tax",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 2,
      width: "w-[500px]",
      columns: [
        // Column 1 from Screenshot 2
        [
          { title: "Income Tax E-Filing", href: "#itr-efiling" },
          { title: "Business ITR Filing", href: "#itr-business" },
          { title: "Partnership Firm / LLP ITR", href: "#itr-firm" },
          { title: "Company ITR Filing", href: "#itr-company" },
          { title: "Trust / NGO Tax Filing", href: "#itr-trust" },
        ],
        // Column 2 from Screenshot 2
        [
          { title: "15CA - 15CB Filing", href: "#15ca-15cb" },
          { title: "TAN Registration", href: "#tan-reg" },
          { title: "TDS Return Filing", href: "#tds-filing" },
          { title: "Income Tax Notice", href: "#it-notice" },
          { title: "Revised ITR Return (ITR-U)", href: "#itr-u" },
        ],
      ],
    },
  },
  {
    id: "mca",
    label: "MCA",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 3,
      width: "w-[720px]",
      columns: [
        // Column 1 from Screenshot 3
        [
          { title: "Company Compliance", href: "#company-compliance" },
          { title: "LLP Compliance", href: "#llp-compliance" },
          { title: "OPC Compliance", href: "#opc-compliance" },
          { title: "Name Change - Company", href: "#name-change-co" },
          { title: "Registered Office Change", href: "#office-change" },
          { title: "DIN eKYC Filing", href: "#din-ekyc" },
          { title: "DIN Reactivation", href: "#din-reactivation" },
        ],
        // Column 2 from Screenshot 3
        [
          { title: "Director Change", href: "#director-change" },
          { title: "Remove Director", href: "#remove-director" },
          { title: "ADT-1 Filing", href: "#adt-1" },
          { title: "DPT-3 Filing", href: "#dpt-3" },
          { title: "LLP Form 11 Filing", href: "#form-11" },
          { title: "Dormant Status Filing", href: "#dormant-status" },
          { title: "MOA Amendment", href: "#moa-amend" },
        ],
        // Column 3 from Screenshot 3
        [
          { title: "AOA Amendment", href: "#aoa-amend" },
          { title: "Authorized Capital Increase", href: "#auth-capital" },
          { title: "Share Transfer", href: "#share-transfer" },
          { title: "Demat of Shares", href: "#demat-shares" },
          { title: "Winding Up - LLP", href: "#winding-llp" },
          { title: "Winding Up - Company", href: "#winding-co" },
          { title: "Commencement (INC-20A)", href: "#inc-20a" },
        ],
      ],
    },
  },
  {
    id: "compliance",
    label: "Compliance",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 2,
      width: "w-[540px]",
      columns: [
        [
          { title: "Company Compliance", href: "#company-compliance" },
          { title: "LLP Compliance", href: "#llp-compliance" },
          { title: "OPC Compliance", href: "#opc-compliance" },
          { title: "Section 8 Compliance", href: "#sec8-compliance" },
          { title: "Secretarial Audit", href: "#sec-audit" },
          { title: "Due Diligence", href: "#due-diligence" },
          { title: "Statutory Audit", href: "#stat-audit" },
        ],
        [
          { title: "Payroll Management", href: "#payroll" },
          { title: "PF Return Filing", href: "#pf-return" },
          { title: "ESI Return Filing", href: "#esi-return" },
          { title: "Professional Tax Return", href: "#pt-return" },
          { title: "TDS Compliance", href: "#tds-compliance" },
          { title: "POSH Compliance", href: "#posh" },
          { title: "RBI & FEMA Compliance", href: "#fema-compliance" },
        ],
      ],
    },
  },
  {
    id: "consultation",
    label: "Consultation",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 2,
      width: "w-[540px]",
      columns: [
        [
          { title: "Talk to a Lawyer", href: "#talk-lawyer" },
          { title: "Talk to a Chartered Accountant", href: "#talk-ca" },
          { title: "Talk to a Company Secretary", href: "#talk-cs" },
          { title: "Legal Notice Consultation", href: "#legal-notice" },
          { title: "Property Legal Consultation", href: "#property-legal" },
          { title: "Startup Advisory & Mentorship", href: "#startup-advisory" },
        ],
        [
          { title: "Income Tax Consultation", href: "#tax-consult" },
          { title: "GST Notice Consultation", href: "#gst-consult" },
          { title: "Trademark Hearing Consultation", href: "#tm-consult" },
          { title: "Contract Drafting & Vetting", href: "#contract-vetting" },
          { title: "Business Valuation Advisory", href: "#valuation-consult" },
          { title: "ROC Compliance Advisory", href: "#roc-consult" },
        ],
      ],
    },
  },
  {
    id: "global",
    label: "Global",
    hasDropdown: true,
    columnLayout: {
      columnsCount: 2,
      width: "w-[540px]",
      columns: [
        [
          { title: "Dubai Mainland Company", href: "#dubai-mainland" },
          { title: "Dubai Freezone Company", href: "#dubai-freezone" },
          { title: "UAE Corporate Tax Filing", href: "#uae-tax" },
          { title: "UAE VAT Registration", href: "#uae-vat" },
          { title: "UAE Bank Account Opening", href: "#uae-bank" },
        ],
        [
          { title: "US Incorporation", href: "#us-incorporation" },
          { title: "US LLC Registration", href: "#us-llc" },
          { title: "US C-Corporation", href: "#us-ccorp" },
          { title: "UK Company Formation", href: "#uk-formation" },
          { title: "Singapore Incorporation", href: "#singapore-incorporation" },
          { title: "International Trademark (Madrid)", href: "#madrid-tm" },
        ],
      ],
    },
  },
  {
    id: "refer",
    label: "Refer 🎁",
    hasDropdown: false,
  },
  {
    id: "hiring",
    label: "We're Hiring! 🥳",
    hasDropdown: false,
  },
];
