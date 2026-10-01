const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const OUTPUT_PDF = path.join(PUBLIC_DIR, 'assets', 'Yebis_Engineering_Corporate_Portfolio.pdf');
const HTML_FILE = path.join(__dirname, 'portfolio-render.html');

function toBase64(relPath) {
  try {
    const fullPath = path.join(PUBLIC_DIR, relPath.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) {
      console.warn('File not found:', fullPath);
      return '';
    }
    const ext = path.extname(fullPath).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';
    const data = fs.readFileSync(fullPath).toString('base64');
    return `data:${mime};base64,${data}`;
  } catch (e) {
    console.error('Error reading image:', relPath, e.message);
    return '';
  }
}

// 9 Statutory Licensure Documents
const STATUTORY_DOCUMENTS = [
  {
    id: "DOC-01",
    annexNumber: "ANNEX A-01",
    ref: "Ref: AAR/BL/TX-092/2016",
    titleAmharic: "የግብር ክሊራንስ ሰርተፊኬት",
    titleEnglish: "Official Corporate Tax Clearance Certificate",
    authority: "Addis Ababa City Administration Revenues Bureau — Bole Sub-City Branch",
    category: "Fiscal & Statutory Compliance",
    status: "Valid & Current for Public Tender",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-1.jpg'),
    description: "Formal certification validating full settlement of regional and federal tax assessments. Mandatory for institutional procurement and public contracting.",
  },
  {
    id: "DOC-02",
    annexNumber: "ANNEX A-02",
    ref: "Trade Reg No: BL/AA/1/0001088/2004",
    titleAmharic: "የንግድ ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Commercial Registration Certificate",
    authority: "Federal Democratic Republic of Ethiopia Ministry of Trade & Industry",
    category: "Corporate Legal Charter",
    status: "Officially Registered Entity",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-2.jpg'),
    description: "Principal statutory commercial charter establishing Yebis Engineering PLC (formerly Yeshitila Tedla Building Contractor) as a registered corporate entity.",
  },
  {
    id: "DOC-03",
    annexNumber: "ANNEX A-03",
    ref: "TIN: 0001985917",
    titleAmharic: "የግብር ከፋይ መለያ ቁጥር (TIN)",
    titleEnglish: "Official Taxpayer Identification Number Registration",
    authority: "Ethiopian Revenues and Customs Authority (ERCA)",
    category: "Fiscal Identification",
    status: "Active Verified Taxpayer",
    orientation: "landscape",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-3.jpg'),
    description: "National Taxpayer Identification certification authorizing legitimate execution of commercial transactions and corporate invoice issuance.",
  },
  {
    id: "DOC-04",
    annexNumber: "ANNEX A-04",
    ref: "License No: 14/673/60074/2004 · GC-3",
    titleAmharic: "የንግድ ሥራ ፈቃድ — ሕንፃና አጠቃላይ ሥራ ተቋራጭ",
    titleEnglish: "Grade 3 General Contractor Principal Business License",
    authority: "Ministry of Urban Development & Construction / Ministry of Trade",
    category: "Statutory Construction Licensure",
    status: "Grade 3 General Contractor (GC-3)",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-4.jpg'),
    description: "Statutory accreditation qualifying Yebis Engineering to contract and execute complex commercial, institutional, and civil infrastructure projects nationwide.",
  },
  {
    id: "DOC-05",
    annexNumber: "ANNEX A-05",
    ref: "Endorsement Year: 2016 E.C.",
    titleAmharic: "የንግድ ፈቃድ እድሳትና ብቃት ማረጋገጫ",
    titleEnglish: "Business License Renewal & Competency Verification",
    authority: "Addis Ababa City Administration Trade Development Bureau",
    category: "Regulatory Endorsement",
    status: "Renewed & Active in Good Standing",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-5.jpg'),
    description: "Annual competency verification endorsing capitalization, certified equipment fleet ownership, and qualified senior engineering personnel on staff.",
  },
  {
    id: "DOC-06",
    annexNumber: "ANNEX A-06",
    ref: "Attestation Dossier: AAE/CR-4410",
    titleAmharic: "የንግድ ማህበራት ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Commercial Registration Legal Entity Attestation",
    authority: "Commercial Registration and Business Licensing Agency",
    category: "Corporate Structure Attestation",
    status: "Legally Constituted Enterprise",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-6.jpg'),
    description: "Statutory attestation confirming legal constitution, designated managing directors, and corporate status under the revised Ethiopian Commercial Code.",
  },
  {
    id: "DOC-07",
    annexNumber: "ANNEX A-07",
    ref: "Brand Title: Yebis Engineering (የቢስ ኢንጂነሪንግ)",
    titleAmharic: "የንግድ ስም ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Official Trade Name Registration Certificate",
    authority: "Ministry of Trade and Regional Integration",
    category: "Intellectual Property & Brand Registration",
    status: "Protected Proprietary Trade Name",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-7.jpg'),
    description: "Official certificate granting exclusive commercial trademark and trade name rights to 'Yebis Engineering' across Ethiopia.",
  },
  {
    id: "DOC-08",
    annexNumber: "ANNEX A-08",
    ref: "VAT Certificate No: 00298418",
    titleAmharic: "የተጨማሪ እሴት ታክስ (VAT) ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Value Added Tax (VAT) Official Registration Certificate",
    authority: "Ethiopian Revenues and Customs Authority (ERCA)",
    category: "Tax Operations Licensure",
    status: "Registered VAT Enterprise (15%)",
    orientation: "landscape",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-8.jpg'),
    description: "Mandatory statutory registration certifying compliance with 15% Value Added Tax laws and enabling verified tax invoice issuance on all certified billings.",
  },
  {
    id: "DOC-09",
    annexNumber: "ANNEX A-09",
    ref: "Regulatory Registry: YEB-CORP-REG",
    titleAmharic: "የኮንስትራክሽን የብቃት ማረጋገጫና ሕጋዊ ማስረጃ",
    titleEnglish: "Construction Competency & Official Commercial Register",
    authority: "Construction Industry Regulatory Authority / Ministry of Infrastructure",
    category: "Technical Capacity Certification",
    status: "Grade 3 Competency Approved",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-9.jpg'),
    description: "Official technical competency ledger verifying corporate machinery assets, calibrated laboratory testing compliance, and senior supervisory engineers.",
  },
];

// All 21 Master Project Records
const RAW_PROJECTS = [
  { recordNumber: 1, title: "Nefas Silk Lafto Sub-City G+2 Communal Sanitation & Water Infrastructure", client: "Nefas Silk Lafto Sub-City Admin", year: "2010", cost: "ETB 2,145,210.00", location: "Addis Ababa", type: "Public Civil & Sanitary Infrastructure" },
  { recordNumber: 2, title: "Lideta Sub-City Kebele 03/04 Administration Compound Rehabilitation", client: "Lideta Sub-City Administration", year: "2010", cost: "ETB 1,890,450.00", location: "Addis Ababa", type: "Municipal Rehabilitation" },
  { recordNumber: 3, title: "Bole Sub-City Woreda 03 Multi-Purpose Community Hall & Public Offices", client: "Bole Sub-City Administration", year: "2011", cost: "ETB 3,420,110.00", location: "Addis Ababa", type: "Civic & Community Facility" },
  { recordNumber: 4, title: "Yeka Sub-City Kebele Primary School Expansion — Academic Blocks A & B", client: "Yeka Sub-City Education Bureau", year: "2011", cost: "ETB 4,115,800.00", location: "Addis Ababa", type: "Educational Infrastructure" },
  { recordNumber: 5, title: "St. Peter's Specialized Hospital - X-Ray & Radiology Suite Shielding", client: "St. Peter's Specialized Hospital", year: "2012", cost: "ETB 886,096.97", location: "Addis Ababa", type: "Specialized Medical Radiation Shielding" },
  { recordNumber: 6, title: "Sululta TVET College Heavy Technical Workshop Facility", client: "Oromia S/Z Sululta TVET College", year: "2012", cost: "ETB 6,958,545.53", location: "Sululta, Oromia", type: "Technical Vocational Workshop" },
  { recordNumber: 7, title: "Kirkos Sub-City Drainage Reticulation & Basalt Paving Rehabilitation", client: "Kirkos Sub-City Administration", year: "2013", cost: "ETB 2,750,000.00", location: "Addis Ababa", type: "Stormwater Drainage & Roadworks" },
  { recordNumber: 8, title: "Addis Ketema Sub-City Primary Health Center Outpatient & Emergency Wing", client: "Addis Ketema Health Bureau", year: "2013", cost: "ETB 4,890,000.00", location: "Addis Ababa", type: "Clinical Healthcare Facility" },
  { recordNumber: 9, title: "Akaki Kality Industrial Zone Access Culverts & Compound Civil Works", client: "Industrial Development Agency", year: "2013", cost: "ETB 3,120,400.00", location: "Addis Ababa", type: "Civil Infrastructure & Culverts" },
  { recordNumber: 10, title: "Gullele Sub-City Woreda 08 Youth Vocational Skills Center & Library", client: "Gullele Sub-City Admin", year: "2014", cost: "ETB 3,870,000.00", location: "Addis Ababa", type: "Educational & Cultural Complex" },
  { recordNumber: 11, title: "ALERT Specialized Hospital - Phase II Clinical Wing Expansion", client: "ALERT Hospital", year: "2014", cost: "ETB 2,280,077.60", location: "Addis Ababa", type: "Clinical Expansion & Sterile Suites" },
  { recordNumber: 12, title: "Cancer Care Home & Specialized Patient Residence", client: "Cancer Care Ethiopia", year: "2016", cost: "ETB 8,186,933.04", location: "Burayu, Oromia", type: "Specialized Medical Residential" },
  { recordNumber: 13, title: "Kolfe Keranio Sub-City Emergency Relief Logistics Storage Depot", client: "Disaster Risk Management Commission", year: "2017", cost: "ETB 5,430,000.00", location: "Addis Ababa", type: "Logistics Warehouse & Depots" },
  { recordNumber: 14, title: "Arsi Negele Secondary School Science Laboratory & ICT Complex", client: "West Arsi Education Bureau", year: "2018", cost: "ETB 5,780,000.00", location: "Arsi Negele, Oromia", type: "Educational Laboratory Complex" },
  { recordNumber: 15, title: "Chole Technical & Vocational Training (TVET) College Campus Expansion", client: "Oromia TVET Bureau (OTVETB)", year: "2019", cost: "ETB 9,645,940.10", location: "Chole, Arsi, Oromia", type: "Turnkey Vocational Campus" },
  { recordNumber: 16, title: "Secondary Livestock Market Center & Trade Infrastructure — Woliso", client: "Oromia Trade & Market Dev / AGPII", year: "2019", cost: "ETB 9,236,778.89", location: "Woliso, Oromia", type: "Agricultural Trade Infrastructure" },
  { recordNumber: 17, title: "Commercial Office Building Kazanchis (2B+G+8)", client: "Private Real Estate Investment Group", year: "2024", cost: "ETB 45,000,000.00", location: "Kazanchis, Addis Ababa", type: "High-Rise Commercial Tower" },
  { recordNumber: 18, title: "Bespoke Luxury Private Residence — Bole Diplomatic Quarter (G+2)", client: "Private Client", year: "2023", cost: "ETB 18,000,000.00", location: "Bole, Addis Ababa", type: "Luxury Residential Villa" },
  { recordNumber: 19, title: "CMC High-Density Residential Condominium Tower (2B+G+10)", client: "Urban Development Partnership", year: "2023", cost: "ETB 32,000,000.00", location: "CMC, Addis Ababa", type: "Multi-Family Residential Tower" },
  { recordNumber: 20, title: "Corporate Headquarters Turnkey Interior Fit-Out (3 Floor Plates)", client: "Private Corporate Enterprise", year: "2024", cost: "ETB 9,500,000.00", location: "Bole, Addis Ababa", type: "Workplace Interior Architecture" },
  { recordNumber: 21, title: "Bole Medhanialem Architectural Facade & Double-Glazed Curtain Wall", client: "Commercial Asset Developer", year: "2024", cost: "ETB 14,000,000.00", location: "Bole Medhanialem, Addis Ababa", type: "Curtain Walling & Engineered Glazing" }
];

const SORTED_PROJECTS = [...RAW_PROJECTS].sort((a, b) => a.recordNumber - b.recordNumber);

// Case Studies with exact file mappings from site-images.ts
const CASE_STUDIES = [
  {
    recordNumber: 15,
    title: "Chole Technical & Vocational Training (TVET) College Campus Expansion",
    client: "Oromia Technical & Vocational Education & Training Bureau (OTVETB)",
    location: "Chole, Arsi Zone, Oromia",
    year: "2019",
    value: "ETB 9,645,940.10",
    scope: "Turnkey General Contracting",
    image: toBase64('/assets/works/chole-tvet-expansion.jpg'),
    desc: "Comprehensive institutional campus expansion covering multi-classroom academic wings, heavy industrial training workshops with high-clearance bays, faculty administration offices, and compound surface drainage infrastructure.",
    specs: [
      "Reinforced concrete frame structures, suspended slabs & foundations",
      "Industrial vocational workshops with high-clearance bays",
      "Multi-classroom academic wings & administrative offices",
      "Surface drainage, perimeter security wall & access gates"
    ],
    technicalRecord: "Bid No: OTVETB/NCB/EXP/16/2018 · Contract Period: 240 Calendar Days (+ 365 Days DLP)"
  },
  {
    recordNumber: 16,
    title: "Secondary Livestock Market Center & Trade Infrastructure — Woliso",
    client: "Oromia Trade & Market Development Bureau / AGPII",
    location: "Woliso Town, South West Shewa Zone",
    year: "2019",
    value: "ETB 9,236,778.89",
    scope: "Turnkey General Contracting",
    image: toBase64('/assets/works/oromiya-livestock-market.png'),
    desc: "Civil and trade infrastructure development including heavy earthworks, basalt stone retaining walls, livestock sorting chutes, veterinary quarantine stations, and administrative commerce booths.",
    specs: [
      "Earthworks and basalt stone retaining wall networks",
      "Steel livestock containment pens and sorting chutes",
      "Veterinary quarantine units, loading ramps & weighing stations",
      "Market administration offices and stormwater infrastructure"
    ],
    technicalRecord: "Ref: DTGB/B-10/214 · Program: Agricultural Growth Program II (AGPII)"
  },
  {
    recordNumber: 12,
    title: "Cancer Care Home & Specialized Patient Residence",
    client: "Cancer Care Ethiopia",
    location: "Burayu, Oromia",
    year: "2016",
    value: "ETB 8,186,933.04",
    scope: "Turnkey General Contracting",
    image: toBase64('/assets/works/cancer-care-eth.jpg'),
    desc: "Turnkey delivery of a dedicated patient recovery complex with accommodation, clinical consultation suites, commercial kitchen/dining facilities, and hygienic medical-grade wall/floor finishes.",
    specs: [
      "Reinforced concrete superstructure & high-density HCB masonry",
      "Clinical and residential plumbing networks & backup power",
      "Hygienic anti-microbial floor/wall finishes & recovery courtyard",
      "Universal barrier-free accessibility ramp network"
    ],
    technicalRecord: "Mode: Turnkey General Contractor · Structural Frame: Cast-in-place RC"
  },
  {
    recordNumber: 6,
    title: "Sululta TVET College Heavy Technical Workshop Facility",
    client: "Oromia S/Z Sululta TVET College",
    location: "Sululta, Oromia",
    year: "2012",
    value: "ETB 6,958,545.53",
    scope: "Turnkey General Contracting",
    image: toBase64('/assets/works/sululta-tvet-college.png'),
    desc: "Technical workshop facility for vocational engineering education, integrating unobstructed 24m clear-span steel trusses, heavy reinforced concrete slabs (45 kN/m² capacity), and industrial 380V 3-phase power reticulation.",
    specs: [
      "Structural steel portal frame erection (24m clear span trusses)",
      "Heavy reinforced concrete slab with hardener topping (45 kN/m²)",
      "3-phase industrial power reticulation (380V)",
      "Service pits, drainage trenches & industrial bay roll-up doors"
    ],
    technicalRecord: "Clear Span: 24m steel portal · Floor Load: 45 kN/m² · Power: 380V Industrial"
  },
  {
    recordNumber: 11,
    title: "ALERT Specialized Hospital - Phase II Clinical Wing Expansion",
    client: "ALERT Hospital",
    location: "Zenebework, Addis Ababa",
    year: "2014",
    value: "ETB 2,280,077.60",
    scope: "Turnkey General Contracting",
    image: toBase64('/assets/works/alert-clinical-wing.png'),
    desc: "Structural expansion and modernization of clinical facilities including examination bays, consultation spaces, sanitary systems, acoustic suspended ceilings, and anti-static seamless epoxy flooring.",
    specs: [
      "Reinforced concrete structural expansion",
      "Medical sanitary core, clinical drainage & scrub sinks",
      "Acoustic suspended ceilings & specialized LED illumination",
      "Anti-static seamless epoxy floor coating & medical-grade wall finishes"
    ],
    technicalRecord: "Client Sector: Federal Specialized Hospital · Finishes: Medical-grade washable plaster"
  },
  {
    recordNumber: 5,
    title: "St. Peter's Specialized Hospital - X-Ray & Radiology Suite Shielding",
    client: "St. Peter's Specialized Hospital",
    location: "Entoto Road, Addis Ababa",
    year: "2012",
    value: "ETB 886,096.97",
    scope: "Specialized Medical Radiation Shielding",
    image: toBase64('/assets/works/st.paul-medical-college.jpg'),
    desc: "Specialized architectural and engineering works for diagnostic X-ray facilities, including baryte radiation shielding plaster, lead-sheet interlinings, radiation-attenuating lead glass, and dedicated clean-power conduits.",
    specs: [
      "Baryte radiation-shielding plaster (2.0 mm Pb lead-equivalent)",
      "Lead-sheet interlinings and lead-glass observation windows",
      "Reinforced heavy equipment mounting pad",
      "Dedicated clean-power electrical conduit pathways"
    ],
    technicalRecord: "Shielding: 2.0 mm Pb lead-equivalent baryte plaster · Observation: Attenuating lead glass"
  }
];

const MODERN_DEV = [
  {
    recordNumber: 17,
    title: "Commercial Office Building Kazanchis",
    client: "Private Real Estate Investment Group",
    location: "Kazanchis Corridor, Addis Ababa",
    year: "2024",
    value: "ETB 45,000,000.00",
    scope: "2B+G+8 Commercial Tower (12,200 SQM GFA)",
    image: toBase64('/assets/works/kazanchis-office-bldg.png'),
    specs: "Deep secant piled shoring, C40/50 high-strength concrete, low-E double glazed unitized curtain wall, dual traction passenger elevators."
  },
  {
    recordNumber: 18,
    title: "Bespoke Luxury Private Residence — Bole",
    client: "Private Client",
    location: "Bole Diplomatic Quarter, Addis Ababa",
    year: "2023",
    value: "ETB 18,000,000.00",
    scope: "G+2 Luxury Villa (850 SQM)",
    image: toBase64('/assets/works/bole-lexury-resident.png'),
    specs: "Seismic-isolated raft foundation, fair-faced architectural concrete, custom walnut joinery, imported Italian marble, integrated solar heating."
  },
  {
    recordNumber: 19,
    title: "CMC High-Density Residential Condominium Tower",
    client: "Urban Development Partnership",
    location: "CMC Residential Corridor, Addis Ababa",
    year: "2023",
    value: "ETB 32,000,000.00",
    scope: "2B+G+10 Multi-Unit Tower (84 Apartments)",
    image: toBase64('/assets/works/cmd-residential-condominum.png'),
    specs: "10 cast-in-place suspended slabs, dual 8-passenger high-speed lifts, 100m³ underground buffer reservoir, anodized aluminum fenestration."
  },
  {
    recordNumber: 20,
    title: "Corporate Headquarters Turnkey Interior Fit-Out",
    client: "Private Corporate Enterprise",
    location: "Bole Commercial District, Addis Ababa",
    year: "2024",
    value: "ETB 9,500,000.00",
    scope: "3 Floor Plates Workplace Interior (2,400 SQM)",
    image: toBase64('/assets/works/corporate-hq-interior.png'),
    specs: "Raised technical access flooring, STC 48 acoustic demountable glass fronts, custom executive joinery tables, Cat 6A cabling, scene lighting."
  },
  {
    recordNumber: 21,
    title: "Bole Medhanialem Architectural Facade & Glazing",
    client: "Commercial Asset Developer",
    location: "Bole Medhanialem, Addis Ababa",
    year: "2024",
    value: "ETB 14,000,000.00",
    scope: "3,800 SQM Engineered Curtain Wall & Canopy",
    image: toBase64('/assets/works/bole-medhanialem-arch-facade.png'),
    specs: "Engineered to 1.4 kN/m² wind load, 6mm Low-E + 12mm Argon + 6mm Clear, 12mm spider-glass entrance canopy, extruded solar shading louvers."
  }
];

const LOGO_BASE64 = toBase64('/assets/logo-light.png');

const CLIENT_LOGOS = [
  { name: "ALERT Hospital", src: toBase64('/assets/logos/alert-comprhensive-specialized-hosp-logo.png') },
  { name: "St. Peter Hospital", src: toBase64('/assets/logos/St.Peter Hospital.png') },
  { name: "St. Paul's Hospital", src: toBase64('/assets/logos/St.Paul-hospital.png') },
  { name: "Customs Commission", src: toBase64('/assets/logos/customs-commission.png') },
  { name: "AAHDPO", src: toBase64('/assets/logos/aahdpo-logo.png') },
  { name: "World Vision", src: toBase64('/assets/logos/world-vision.png') },
  { name: "The Hunger Project", src: toBase64('/assets/logos/the-hunger-project.png') }
];

// Generate Clean HTML Content for A4 Printing
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Yebis Engineering Corporate Portfolio Dossier</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 10mm 10mm 10mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      width: 100%;
      height: 100%;
      background: #ffffff;
      color: #1b1c1a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 11px;
      line-height: 1.4;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .portfolio-sheet {
      page-break-after: always;
      break-after: page;
      break-inside: avoid;
      page-break-inside: avoid;
      height: 277mm;
      max-height: 277mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      background: #ffffff;
      overflow: hidden;
    }
    .portfolio-sheet:last-child {
      page-break-after: auto;
      break-after: auto;
    }
    .sheet-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9.5px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #555555;
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 4px;
      margin-bottom: 10px;
    }
    .sheet-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9px;
      text-transform: uppercase;
      color: #6b7280;
      border-top: 1px solid #d1d5db;
      padding-top: 5px;
      margin-top: 6px;
    }
    .section-tag {
      font-size: 10px;
      color: #8d4b00;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 2px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .card {
      border: 1px solid #d1d5db;
      background: #fafaf9;
      padding: 9px;
    }
    .badge-amber {
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fcd34d;
      padding: 1px 4px;
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
    }
    .badge-green {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #86efac;
      padding: 1px 5px;
      font-size: 8.5px;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9px;
    }
    th {
      background: #1b1c1a;
      color: #ffffff;
      padding: 4px 6px;
      text-align: left;
      font-size: 8.5px;
      font-weight: 700;
      text-transform: uppercase;
    }
    td {
      padding: 3.5px 6px;
      border-bottom: 1px solid #e5e7eb;
      vertical-align: top;
      line-height: 1.35;
      word-break: break-word;
    }
    tr:nth-child(even) {
      background: #f9fafb;
    }
    .text-primary {
      color: #8d4b00;
    }
    .bg-dark {
      background: #1b1c1a;
      color: #ffffff;
    }
  </style>
</head>
<body>

  <!-- ========================================== -->
  <!-- SHEET 01: COVER & EXECUTIVE CREDENTIALS -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span style="font-weight:700; color:#8d4b00;">GRADE 3 GENERAL CONTRACTOR (GC-3)</span>
        <span>ADDIS ABABA, ETHIOPIA · OFFICIAL QUALIFICATION DOSSIER</span>
      </div>

      <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px;">
        <div style="width:60px; height:60px; background:#1b1c1a; border:1px solid #8d4b00; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <img src="${LOGO_BASE64}" alt="Logo" style="width:44px; height:44px; object-fit:contain;" />
        </div>
        <div>
          <h1 class="mono" style="font-size:24px; font-weight:800; text-transform:uppercase; letter-spacing:-0.02em; line-height:1.1;">
            Yebis Engineering PLC
          </h1>
          <p class="mono" style="font-size:10px; color:#8d4b00; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">
            From Structure to Finish · Integrated Construction Solutions
          </p>
          <span class="mono" style="font-size:9px; color:#6b7280; text-transform:uppercase;">
            Formerly: Yeshitila Tedla Building Contractor (Established 2004 E.C.)
          </span>
        </div>
      </div>

      <p style="font-size:11px; color:#374151; line-height:1.45; margin-bottom:12px;">
        Comprehensive corporate profile, statutory licensure records, engineering capability matrix, and full historical performance register of 21 executed construction projects across commercial, institutional, public healthcare, and technical education sectors.
      </p>

      <div style="width:100%; height:2px; background:#000000; margin-bottom:12px;"></div>

      <div style="margin-bottom:12px;">
        <span class="section-tag mono">/// SECTION 01: EXECUTIVE OVERVIEW</span>
        <h2 class="section-title mono">Corporate Profile &amp; Operating Philosophy</h2>
        <p style="font-size:10.5px; color:#374151; line-height:1.45; margin-bottom:7px;">
          Yebis Engineering PLC is an accredited <strong>Grade 3 General Contractor (GC-3)</strong> headquartered in Addis Ababa, Ethiopia. Delivering turnkey general contracting, heavy reinforced concrete superstructures, electromechanical building services, and precision interior architecture, the firm serves federal ministries, regional bureaus, international NGOs, and private developers.
        </p>
        <p style="font-size:10.5px; color:#374151; line-height:1.45;">
          Originally founded in 2004 E.C. as <strong>"Yeshitila Tedla Building Contractor"</strong>, the company established its foundational reputation through rigorous structural execution, public housing, and complex medical infrastructure projects—including specialized radiation-shielded suites for federal hospitals. Today, the organization operates integrated specialty divisions comprising dedicated aluminum fenestration and precision timber joinery manufacturing plants in Addis Ababa, eliminating subcontractor delays and ensuring single-point accountability.
        </p>
      </div>

      <!-- 4-Stat Box -->
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:8px; background:#f9fafb; border:1px solid #d1d5db; padding:10px; margin-bottom:12px; text-align:center;">
        <div>
          <div class="mono" style="font-size:20px; font-weight:800; color:#000000;">21</div>
          <div style="font-size:9px; text-transform:uppercase; color:#4b5563; font-weight:600;">Executed Projects</div>
        </div>
        <div style="border-left:1px solid #d1d5db;">
          <div class="mono" style="font-size:20px; font-weight:800; color:#8d4b00;">16</div>
          <div style="font-size:9px; text-transform:uppercase; color:#4b5563; font-weight:600;">Verified Institutional</div>
        </div>
        <div style="border-left:1px solid #d1d5db;">
          <div class="mono" style="font-size:20px; font-weight:800; color:#000000;">104.1M+</div>
          <div style="font-size:9px; text-transform:uppercase; color:#4b5563; font-weight:600;">Portfolio Value (ETB)</div>
        </div>
        <div style="border-left:1px solid #d1d5db;">
          <div class="mono" style="font-size:20px; font-weight:800; color:#8d4b00;">GC-3</div>
          <div style="font-size:9px; text-transform:uppercase; color:#4b5563; font-weight:600;">Federal Licensure</div>
        </div>
      </div>

      <!-- Statutory Banner -->
      <div class="bg-dark mono" style="padding:10px; font-size:9.5px; display:grid; grid-template-columns: 1fr 1fr; gap:8px; line-height:1.55;">
        <div>
          <strong>CONTRACTOR GRADE:</strong> Grade 3 General Contractor (GC-3)<br />
          <strong>TRADE REGISTRATION:</strong> BL/AA/1/0001088/2004<br />
          <strong>TAX IDENTIFICATION (TIN):</strong> 0001985917
        </div>
        <div>
          <strong>VAT REGISTRATION:</strong> 00298418 (15% Standard)<br />
          <strong>PRINCIPAL LICENSE:</strong> 14/673/60074/2004<br />
          <strong>HEADQUARTERS:</strong> Bole Sub-City, Addis Ababa, Ethiopia
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 01 OF 12 // CORPORATE CREDENTIALS</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 02: CAPABILITIES MATRIX -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>TECHNICAL CAPABILITY MATRIX</span>
        <span>INTEGRATED CONSTRUCTION SERVICES</span>
      </div>

      <span class="section-tag mono">/// SECTION 02: TECHNICAL SCOPE</span>
      <h2 class="section-title mono">Multi-Disciplinary Scope &amp; Specialized Services</h2>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:7px; margin-bottom:10px;">
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">01. GENERAL CONTRACTING (GC-3)</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Turnkey multi-story building construction, reinforced concrete frame superstructures, substructure earthworks, civil drainage, and structural rehabilitation.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">02. STRUCTURAL DESIGN &amp; BIM</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Complete architectural detailing, MEP spatial coordination, structural calculation verification, rebar schedule optimization, and 3D clash detection.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">03. ELECTRICAL &amp; MEP RETICULATION</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Main distribution boards, MV/LV panel synchronization, standby diesel generator changeovers, building management cable pathways, and emergency lighting.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">04. PLUMBING &amp; SANITARY SYSTEMS</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">PPR potable water networks, multi-stage booster pump sets, PVC sanitary drainage stacks, 10-bar hydrostatic testing, and polyurethane waterproofing.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">05. ACOUSTIC INTERIORS &amp; FINISHING</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Acoustic gypsum partition walls, suspended Armstrong grid ceilings, high-traffic rectified porcelain tiling, anti-static epoxy coatings, and architectural coatings.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">06. IN-HOUSE JOINERY WORKSHOP</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Addis Ababa industrial woodworking facility fabricating solid hardwood doors, flame-retardant fire doors, executive conference furniture, and acoustic wall paneling.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">07. ALUMINUM &amp; CURTAIN WALLING</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Structural aluminum facade engineering, thermal-break double-glazed window fenestration (1.8–2.2mm profiles), spider glass canopies, and metalwork.</p>
        </div>
        <div class="card">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:2px;">08. STRUCTURAL RETROFITTING &amp; RENOVATION</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.35;">Taking over incomplete structural skeletons, column jacketing, foundation underpinning, healthcare radiological retrofitting, and refurbishment.</p>
        </div>
      </div>

      <!-- Competitive Advantage -->
      <div style="background:#fef3c7; border-left:4px solid #8d4b00; padding:9px; margin-bottom:10px;">
        <span class="mono" style="font-size:10px; font-weight:700; color:#8d4b00; text-transform:uppercase;">KEY COMPETITIVE ADVANTAGE: SELF-PERFORMED FINISHING PLANTS</span>
        <p style="font-size:10px; color:#374151; line-height:1.4; margin-top:2px;">
          Unlike contractors who depend entirely on fragmented third-party subcontractors for architectural finishes, Yebis Engineering maintains dedicated aluminum fabrication and heavy industrial joinery workshops in Addis Ababa. This vertical integration guarantees millimeter-precise tolerance control, elimination of supply-chain bottlenecks, and comprehensive single-source warranties.
        </p>
      </div>

      <!-- Equipment & QA Strip -->
      <div class="card" style="padding:9px;">
        <span class="mono" style="font-size:9.5px; font-weight:700; text-transform:uppercase; display:block; margin-bottom:3px;">EQUIPMENT FLEET &amp; QUALITY ASSURANCE PROTOCOLS:</span>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:6px; font-size:9px; color:#4b5563;">
          <div><strong>PLANT &amp; MACHINERY:</strong> Rebar benders &amp; cutters, concrete transit mixers, plate compactors, laser levels, scaffolding sets.</div>
          <div><strong>QUALITY CONTROLS:</strong> Compressive concrete cube testing (C25/C30/C40), slump checks, rebar tensile testing certifications.</div>
          <div><strong>HSE PROTOCOLS:</strong> Mandatory PPE compliance, toolbox safety meetings, scaffolding load verification, zero lost-time aim.</div>
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 02 OF 12 // SCOPE OF OPERATIONS</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 03: MAJOR TURNKEY PROJECTS (15 & 16) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>PROJECT DOSSIER // INSTITUTIONAL INFRASTRUCTURE</span>
        <span>VERIFIED PERFORMANCE</span>
      </div>

      <span class="section-tag mono">/// SECTION 03: MAJOR TURNKEY PROJECTS</span>
      <h2 class="section-title mono">Selected Projects // Educational &amp; Civil Infrastructure</h2>

      <div style="display:flex; flex-direction:column; gap:10px;">
        ${[CASE_STUDIES[0], CASE_STUDIES[1]].map(cs => `
          <div class="card" style="padding:9px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:5px;">
              <span class="mono text-primary" style="font-size:10.5px; font-weight:700;">
                PROJECT ${cs.recordNumber < 10 ? '0' + cs.recordNumber : cs.recordNumber} · ${cs.scope.toUpperCase()} · ${cs.year}
              </span>
              <span class="mono" style="font-size:10px; font-weight:700; background:#e5e7eb; padding:2px 5px; border:1px solid #d1d5db;">
                ${cs.value}
              </span>
            </div>

            <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
              ${cs.title}
            </h3>

            <div class="mono" style="font-size:9.5px; color:#4b5563; margin-bottom:5px;">
              <strong>Client:</strong> ${cs.client} · <strong>Location:</strong> ${cs.location}
            </div>

            <div style="width:100%; height:125px; background:#e5e7eb; overflow:hidden; border:1px solid #d1d5db; margin-bottom:5px;">
              <img src="${cs.image}" alt="${cs.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>

            <p style="font-size:10px; color:#374151; line-height:1.4; margin-bottom:5px;">
              ${cs.desc}
            </p>

            <ul style="font-size:9.5px; color:#4b5563; display:grid; grid-template-columns: 1fr 1fr; gap:3px; padding-left:14px; margin-bottom:5px;">
              ${cs.specs.map(s => `<li style="word-break:break-word; line-height:1.3;">${s}</li>`).join('')}
            </ul>

            <div class="mono" style="font-size:9px; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:3px;">
              ${cs.technicalRecord}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 03 OF 12 // FEATURED CONTRACTS 15 &amp; 16</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 04: SPECIALIZED FACILITIES (12 & 06) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>PROJECT DOSSIER // HEALTHCARE &amp; INDUSTRIAL WORKSHOPS</span>
        <span>VERIFIED PERFORMANCE</span>
      </div>

      <span class="section-tag mono">/// SECTION 04: SPECIALIZED FACILITIES</span>
      <h2 class="section-title mono">Selected Projects // Clinical Residences &amp; Heavy Portal Workshops</h2>

      <div style="display:flex; flex-direction:column; gap:10px;">
        ${[CASE_STUDIES[2], CASE_STUDIES[3]].map(cs => `
          <div class="card" style="padding:9px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:5px;">
              <span class="mono text-primary" style="font-size:10.5px; font-weight:700;">
                PROJECT ${cs.recordNumber < 10 ? '0' + cs.recordNumber : cs.recordNumber} · ${cs.scope.toUpperCase()} · ${cs.year}
              </span>
              <span class="mono" style="font-size:10px; font-weight:700; background:#e5e7eb; padding:2px 5px; border:1px solid #d1d5db;">
                ${cs.value}
              </span>
            </div>

            <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
              ${cs.title}
            </h3>

            <div class="mono" style="font-size:9.5px; color:#4b5563; margin-bottom:5px;">
              <strong>Client:</strong> ${cs.client} · <strong>Location:</strong> ${cs.location}
            </div>

            <div style="width:100%; height:125px; background:#e5e7eb; overflow:hidden; border:1px solid #d1d5db; margin-bottom:5px;">
              <img src="${cs.image}" alt="${cs.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>

            <p style="font-size:10px; color:#374151; line-height:1.4; margin-bottom:5px;">
              ${cs.desc}
            </p>

            <ul style="font-size:9.5px; color:#4b5563; display:grid; grid-template-columns: 1fr 1fr; gap:3px; padding-left:14px; margin-bottom:5px;">
              ${cs.specs.map(s => `<li style="word-break:break-word; line-height:1.3;">${s}</li>`).join('')}
            </ul>

            <div class="mono" style="font-size:9px; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:3px;">
              ${cs.technicalRecord}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 04 OF 12 // FEATURED CONTRACTS 12 &amp; 06</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 05: SPECIALIZED MEDICAL ENGINEERING (11 & 05) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>PROJECT DOSSIER // SPECIALIZED CLINICAL ENGINEERING</span>
        <span>RADIATION SHIELDING &amp; STERILE SUITES</span>
      </div>

      <span class="section-tag mono">/// SECTION 05: SPECIALIZED MEDICAL ENGINEERING</span>
      <h2 class="section-title mono">Hospital Expansion &amp; Diagnostic Radiology Shielding</h2>

      <div style="display:flex; flex-direction:column; gap:10px;">
        ${[CASE_STUDIES[4], CASE_STUDIES[5]].map(cs => `
          <div class="card" style="padding:9px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:5px;">
              <span class="mono text-primary" style="font-size:10.5px; font-weight:700;">
                PROJECT ${cs.recordNumber < 10 ? '0' + cs.recordNumber : cs.recordNumber} · ${cs.scope.toUpperCase()} · ${cs.year}
              </span>
              <span class="mono" style="font-size:10px; font-weight:700; background:#e5e7eb; padding:2px 5px; border:1px solid #d1d5db;">
                ${cs.value}
              </span>
            </div>

            <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
              ${cs.title}
            </h3>

            <div class="mono" style="font-size:9.5px; color:#4b5563; margin-bottom:5px;">
              <strong>Client:</strong> ${cs.client} · <strong>Location:</strong> ${cs.location}
            </div>

            <div style="width:100%; height:125px; background:#e5e7eb; overflow:hidden; border:1px solid #d1d5db; margin-bottom:5px;">
              <img src="${cs.image}" alt="${cs.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>

            <p style="font-size:10px; color:#374151; line-height:1.4; margin-bottom:5px;">
              ${cs.desc}
            </p>

            <ul style="font-size:9.5px; color:#4b5563; display:grid; grid-template-columns: 1fr 1fr; gap:3px; padding-left:14px; margin-bottom:5px;">
              ${cs.specs.map(s => `<li style="word-break:break-word; line-height:1.3;">${s}</li>`).join('')}
            </ul>

            <div class="mono" style="font-size:9px; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:3px;">
              ${cs.technicalRecord}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 05 OF 12 // HEALTHCARE CONTRACTS 11 &amp; 05</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 06: MODERN DEVELOPMENTS (17 TO 21) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>DEVELOPMENT PORTFOLIO // COMMERCIAL &amp; RESIDENTIAL</span>
        <span>MODERN ASSET DELIVERY</span>
      </div>

      <span class="section-tag mono">/// SECTION 06: MODERN DEVELOPMENTS</span>
      <h2 class="section-title mono">Commercial Towers, Residential Enclaves &amp; Facades (Records 17–21)</h2>
      <p style="font-size:10px; color:#4b5563; margin-bottom:8px;">
        Contemporary high-density towers, luxury residences, architectural facades, and corporate interiors executed with strict engineering tolerances.
      </p>

      <div style="display:flex; flex-direction:column; gap:7px;">
        ${MODERN_DEV.map(dev => `
          <div class="card" style="display:flex; align-items:flex-start; gap:9px; padding:6px 8px;">
            <div style="width:80px; height:64px; background:#e5e7eb; border:1px solid #d1d5db; overflow:hidden; flex-shrink:0;">
              <img src="${dev.image}" alt="${dev.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:2px; margin-bottom:2px;">
                <span class="mono text-primary" style="font-size:9px; font-weight:700;">
                  RECORD ${dev.recordNumber} · ${dev.year} · ${dev.location}
                </span>
                <span class="mono" style="font-size:9px; font-weight:700; background:#ffffff; padding:1px 5px; border:1px solid #d1d5db;">
                  ${dev.value}
                </span>
              </div>
              <h4 style="font-size:10.5px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
                ${dev.title} — <span class="mono" style="font-weight:500; color:#4b5563;">${dev.scope}</span>
              </h4>
              <p style="font-size:9.2px; color:#4b5563; line-height:1.3; word-break:break-word;">
                ${dev.specs}
              </p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 06 OF 12 // MODERN DEVELOPMENTS 17 TO 21</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 07: 21-PROJECT MASTER PERFORMANCE REGISTER -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>STATUTORY TRACK RECORD AUDIT</span>
        <span>COMPLETE PERFORMANCE REGISTER</span>
      </div>

      <span class="section-tag mono">/// SECTION 07: COMPREHENSIVE PERFORMANCE REGISTER</span>
      <h2 class="section-title mono">Complete Corporate Track Record (All 21 Executed Contracts)</h2>
      <p style="font-size:9.5px; color:#4b5563; margin-bottom:6px;">
        Master chronological ledger documenting all completed works across public ministries, institutional agencies, healthcare facilities, and commercial developments.
      </p>

      <div style="border:1px solid #d1d5db; overflow:hidden;">
        <table>
          <thead>
            <tr class="mono">
              <th style="width:26px; text-align:center;">No.</th>
              <th style="width:43%;">Project Title &amp; Scope</th>
              <th style="width:30%;">Client / Contracting Authority</th>
              <th style="width:36px; text-align:center;">Year</th>
              <th style="text-align:right; width:86px;">Contract Value</th>
            </tr>
          </thead>
          <tbody>
            ${SORTED_PROJECTS.map(p => `
              <tr>
                <td class="mono text-primary" style="font-weight:700; text-align:center;">
                  ${p.recordNumber < 10 ? '0' + p.recordNumber : p.recordNumber}
                </td>
                <td>
                  <div style="font-weight:600; color:#000000; font-size:9px;">
                    ${p.title}
                    ${p.recordNumber >= 17 ? '<span class="badge-amber" style="margin-left:3px;">Dev</span>' : ''}
                  </div>
                  <div class="mono" style="font-size:7.8px; color:#6b7280; margin-top:1px;">
                    ${p.type} · ${p.location}
                  </div>
                </td>
                <td style="color:#374151; font-size:8.8px;">
                  ${p.client}
                </td>
                <td class="mono" style="text-align:center; color:#4b5563; font-size:8.5px;">
                  ${p.year}
                </td>
                <td class="mono" style="text-align:right; font-weight:700; color:#000000; white-space:nowrap; font-size:8.8px;">
                  ${p.cost}
                </td>
              </tr>
            `).join('')}
            <tr style="background:#f3f4f6; font-weight:700; border-top:2px solid #9ca3af;" class="mono">
              <td colspan="4" style="padding:5px; text-transform:uppercase; font-size:9px;">
                Total Delivered Portfolio Value (21 Contract Records)
              </td>
              <td style="padding:5px; text-align:right; color:#8d4b00; font-size:9px; white-space:nowrap;">
                ETB 104,115,263.78
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Institutional Seals Strip -->
      <div style="margin-top:6px; padding:5px 8px; background:#f9fafb; border:1px solid #d1d5db;">
        <span class="mono" style="font-size:8px; font-weight:700; text-transform:uppercase; color:#4b5563; display:block; margin-bottom:3px;">
          INSTITUTIONAL CLIENT CREDENTIALS &amp; CONTRACTING AUTHORITIES:
        </span>
        <div style="display:flex; justify-content:space-around; align-items:center;">
          ${CLIENT_LOGOS.map(c => `
            <div style="display:flex; flex-direction:column; align-items:center; text-align:center;">
              <img src="${c.src}" alt="${c.name}" style="height:20px; max-width:50px; object-fit:contain; filter:grayscale(100%); opacity:0.85;" />
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 07 OF 12 // PERFORMANCE REGISTER LEDGER</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 08: STATUTORY CERTIFICATES 01 & 02 -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
        <span>ANNEX A: OFFICIAL CERTIFICATES</span>
      </div>

      <span class="section-tag mono">/// SECTION 08: STATUTORY COMPLIANCE</span>
      <h2 class="section-title mono">Tax Clearance &amp; Commercial Registration Charters</h2>
      <p style="font-size:10px; color:#4b5563; margin-bottom:8px;">
        High-resolution certified statutory instruments establishing fiscal standing and legal corporate status.
      </p>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
        ${[STATUTORY_DOCUMENTS[0], STATUTORY_DOCUMENTS[1]].map(doc => `
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between; height:226mm;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
                <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${doc.annexNumber}</span>
                <span class="badge-green">${doc.status}</span>
              </div>
              <h3 style="font-size:10.5px; font-weight:700; text-transform:uppercase; color:#000000; line-height:1.2; margin-bottom:2px;">
                ${doc.titleEnglish}
              </h3>
              <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:3px;">
                ${doc.titleAmharic}
              </p>
              <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.3; margin-bottom:5px;">
                <div><strong>Authority:</strong> ${doc.authority}</div>
                <div><strong>${doc.ref}</strong></div>
              </div>
            </div>

            <div style="width:100%; height:156mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px;">
              <img src="${doc.image}" alt="${doc.titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>

            <p style="font-size:9px; color:#4b5563; line-height:1.3; border-top:1px solid #e5e7eb; padding-top:3px; margin-top:3px;">
              ${doc.description}
            </p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 08 OF 12 // STATUTORY CERTIFICATES 01 &amp; 02</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 09: STATUTORY CERTIFICATES 03 & 04 -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
        <span>ANNEX A: OFFICIAL CERTIFICATES</span>
      </div>

      <span class="section-tag mono">/// SECTION 09: FISCAL &amp; CONTRACTOR LICENSURE</span>
      <h2 class="section-title mono">Taxpayer Identification (TIN) &amp; Grade 3 General Contractor License</h2>
      <p style="font-size:10px; color:#4b5563; margin-bottom:8px;">
        Certified TIN registration document and statutory Grade 3 General Contractor business license issued by the Ministry of Trade.
      </p>

      <div style="display:flex; flex-direction:column; gap:9px;">
        <!-- Doc 03 (Landscape TIN) -->
        <div class="card" style="height:110mm; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${STATUTORY_DOCUMENTS[2].annexNumber}</span>
              <h3 style="font-size:10px; font-weight:700; text-transform:uppercase;">
                ${STATUTORY_DOCUMENTS[2].titleEnglish} (${STATUTORY_DOCUMENTS[2].titleAmharic})
              </h3>
            </div>
            <span class="badge-green">${STATUTORY_DOCUMENTS[2].status}</span>
          </div>

          <div style="display:flex; gap:10px; align-items:center; flex:1;">
            <div style="width:65%; height:86mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px;">
              <img src="${STATUTORY_DOCUMENTS[2].image}" alt="${STATUTORY_DOCUMENTS[2].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div class="mono" style="width:35%; font-size:9px; color:#374151; line-height:1.45;">
              <div><strong>Authority:</strong> ${STATUTORY_DOCUMENTS[2].authority}</div>
              <div><strong>Credential:</strong> ${STATUTORY_DOCUMENTS[2].ref}</div>
              <p style="font-family:sans-serif; font-size:9px; color:#4b5563; margin-top:6px; line-height:1.35;">
                ${STATUTORY_DOCUMENTS[2].description}
              </p>
            </div>
          </div>
        </div>

        <!-- Doc 04 (Portrait GC-3 License) -->
        <div class="card" style="height:110mm; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${STATUTORY_DOCUMENTS[3].annexNumber}</span>
              <h3 style="font-size:10px; font-weight:700; text-transform:uppercase;">
                ${STATUTORY_DOCUMENTS[3].titleEnglish} (${STATUTORY_DOCUMENTS[3].titleAmharic})
              </h3>
            </div>
            <span class="badge-green">${STATUTORY_DOCUMENTS[3].status}</span>
          </div>

          <div style="display:flex; gap:10px; align-items:center; flex:1;">
            <div style="width:65%; height:86mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px;">
              <img src="${STATUTORY_DOCUMENTS[3].image}" alt="${STATUTORY_DOCUMENTS[3].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div class="mono" style="width:35%; font-size:9px; color:#374151; line-height:1.45;">
              <div><strong>Authority:</strong> ${STATUTORY_DOCUMENTS[3].authority}</div>
              <div><strong>Credential:</strong> ${STATUTORY_DOCUMENTS[3].ref}</div>
              <p style="font-family:sans-serif; font-size:9px; color:#4b5563; margin-top:6px; line-height:1.35;">
                ${STATUTORY_DOCUMENTS[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 09 OF 12 // STATUTORY CERTIFICATES 03 &amp; 04</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 10: STATUTORY CERTIFICATES 05 & 06 -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
        <span>ANNEX A: OFFICIAL CERTIFICATES</span>
      </div>

      <span class="section-tag mono">/// SECTION 10: COMPETENCY &amp; LEGAL STANDING</span>
      <h2 class="section-title mono">Business License Renewal &amp; Commercial Registry Attestation</h2>
      <p style="font-size:10px; color:#4b5563; margin-bottom:8px;">
        Official annual competency validation and legally certified enterprise registration attestation documents.
      </p>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
        ${[STATUTORY_DOCUMENTS[4], STATUTORY_DOCUMENTS[5]].map(doc => `
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between; height:226mm;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
                <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${doc.annexNumber}</span>
                <span class="badge-green">${doc.status}</span>
              </div>
              <h3 style="font-size:10.5px; font-weight:700; text-transform:uppercase; color:#000000; line-height:1.2; margin-bottom:2px;">
                ${doc.titleEnglish}
              </h3>
              <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:3px;">
                ${doc.titleAmharic}
              </p>
              <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.3; margin-bottom:5px;">
                <div><strong>Authority:</strong> ${doc.authority}</div>
                <div><strong>${doc.ref}</strong></div>
              </div>
            </div>

            <div style="width:100%; height:156mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px;">
              <img src="${doc.image}" alt="${doc.titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>

            <p style="font-size:9px; color:#4b5563; line-height:1.3; border-top:1px solid #e5e7eb; padding-top:3px; margin-top:3px;">
              ${doc.description}
            </p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 10 OF 12 // STATUTORY CERTIFICATES 05 &amp; 06</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 11: STATUTORY CERTIFICATES 07 & 08 -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
        <span>ANNEX A: OFFICIAL CERTIFICATES</span>
      </div>

      <span class="section-tag mono">/// SECTION 11: TRADE BRAND &amp; TAX OPERATIONS</span>
      <h2 class="section-title mono">Official Trade Name &amp; Value Added Tax (VAT) Certifications</h2>
      <p style="font-size:10px; color:#4b5563; margin-bottom:8px;">
        Ministry trade name protection title and Ethiopian Revenues and Customs Authority 15% VAT registration certification.
      </p>

      <div style="display:flex; flex-direction:column; gap:9px;">
        <!-- Doc 08 (Landscape VAT) -->
        <div class="card" style="height:110mm; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${STATUTORY_DOCUMENTS[7].annexNumber}</span>
              <h3 style="font-size:10px; font-weight:700; text-transform:uppercase;">
                ${STATUTORY_DOCUMENTS[7].titleEnglish} (${STATUTORY_DOCUMENTS[7].titleAmharic})
              </h3>
            </div>
            <span class="badge-green">${STATUTORY_DOCUMENTS[7].status}</span>
          </div>

          <div style="display:flex; gap:10px; align-items:center; flex:1;">
            <div style="width:65%; height:86mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px;">
              <img src="${STATUTORY_DOCUMENTS[7].image}" alt="${STATUTORY_DOCUMENTS[7].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div class="mono" style="width:35%; font-size:9px; color:#374151; line-height:1.45;">
              <div><strong>Authority:</strong> ${STATUTORY_DOCUMENTS[7].authority}</div>
              <div><strong>Credential:</strong> ${STATUTORY_DOCUMENTS[7].ref}</div>
              <p style="font-family:sans-serif; font-size:9px; color:#4b5563; margin-top:6px; line-height:1.35;">
                ${STATUTORY_DOCUMENTS[7].description}
              </p>
            </div>
          </div>
        </div>

        <!-- Doc 07 (Portrait Trade Name) -->
        <div class="card" style="height:110mm; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${STATUTORY_DOCUMENTS[6].annexNumber}</span>
              <h3 style="font-size:10px; font-weight:700; text-transform:uppercase;">
                ${STATUTORY_DOCUMENTS[6].titleEnglish} (${STATUTORY_DOCUMENTS[6].titleAmharic})
              </h3>
            </div>
            <span class="badge-green">${STATUTORY_DOCUMENTS[6].status}</span>
          </div>

          <div style="display:flex; gap:10px; align-items:center; flex:1;">
            <div style="width:65%; height:86mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px;">
              <img src="${STATUTORY_DOCUMENTS[6].image}" alt="${STATUTORY_DOCUMENTS[6].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div class="mono" style="width:35%; font-size:9px; color:#374151; line-height:1.45;">
              <div><strong>Authority:</strong> ${STATUTORY_DOCUMENTS[6].authority}</div>
              <div><strong>Credential:</strong> ${STATUTORY_DOCUMENTS[6].ref}</div>
              <p style="font-family:sans-serif; font-size:9px; color:#4b5563; margin-top:6px; line-height:1.35;">
                ${STATUTORY_DOCUMENTS[6].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 11 OF 12 // STATUTORY CERTIFICATES 07 &amp; 08</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 12: STATUTORY CERTIFICATE 09 + ATTESTATION & CONTACT -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div>
      <div class="sheet-header mono">
        <span>STATUTORY DOSSIER // EXECUTIVE ATTESTATION</span>
        <span>FINAL CERTIFICATION &amp; DISPATCH BUREAU</span>
      </div>

      <span class="section-tag mono">/// SECTION 12: STATUTORY CERTIFICATION &amp; BUREAU CONTACT</span>
      <h2 class="section-title mono">Competency Attestation &amp; Official Executive Sign-Off</h2>
      <p style="font-size:10px; color:#4b5563; margin-bottom:8px;">
        Final statutory registration document accompanied by the executive seal and contact directory of Yebis Engineering PLC.
      </p>

      <!-- Doc 09 -->
      <div class="card" style="display:flex; gap:12px; align-items:center; margin-bottom:9px; padding:7px;">
        <div style="width:38%; height:84mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; flex-shrink:0;">
          <img src="${STATUTORY_DOCUMENTS[8].image}" alt="${STATUTORY_DOCUMENTS[8].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
        </div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:2px; margin-bottom:2px;">
            <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${STATUTORY_DOCUMENTS[8].annexNumber}</span>
            <span class="badge-green">${STATUTORY_DOCUMENTS[8].status}</span>
          </div>
          <h3 style="font-size:10.5px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
            ${STATUTORY_DOCUMENTS[8].titleEnglish}
          </h3>
          <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:3px;">
            ${STATUTORY_DOCUMENTS[8].titleAmharic}
          </p>
          <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.35;">
            <div><strong>Authority:</strong> ${STATUTORY_DOCUMENTS[8].authority}</div>
            <div><strong>${STATUTORY_DOCUMENTS[8].ref}</strong></div>
          </div>
          <p style="font-size:9px; color:#4b5563; line-height:1.35; border-top:1px solid #e5e7eb; padding-top:4px; margin-top:4px;">
            ${STATUTORY_DOCUMENTS[8].description}
          </p>
        </div>
      </div>

      <!-- Attestation Box -->
      <div style="background:#fef3c7; border:1px solid #fcd34d; padding:9px; margin-bottom:9px;">
        <span class="mono" style="font-size:10px; font-weight:700; color:#8d4b00; text-transform:uppercase; display:block; margin-bottom:2px;">
          EXECUTIVE ATTESTATION &amp; CORPORATE WARRANTY:
        </span>
        <p style="font-size:9.5px; color:#374151; line-height:1.4; margin-bottom:6px;">
          We hereby certify that the technical credentials, contract execution records, statutory licenses, and corporate information contained within this Qualification Dossier accurately reflect the authentic legal and operational standing of <strong>Yebis Engineering PLC (Grade 3 General Contractor)</strong> as registered with the Federal Democratic Republic of Ethiopia Ministry of Trade and Regional Integration and the Ministry of Urban Development and Construction.
        </p>
        <div class="mono" style="display:grid; grid-template-columns: 1fr 1fr; border-top:1px solid #fde68a; padding-top:5px; font-size:9px; color:#4b5563;">
          <div>
            <strong>AUTHORIZED SIGNATORY:</strong> Managing Directorate<br />
            <strong>LEGAL STATUS:</strong> Active Certified General Contractor
          </div>
          <div style="text-align:right;">
            <strong>CORPORATE SEAL:</strong> Yebis Engineering PLC<br />
            <strong>DATE OF ISSUANCE:</strong> Current Corporate Dossier (2026 G.C.)
          </div>
        </div>
      </div>

      <!-- Contact Bureau -->
      <div class="bg-dark" style="padding:10px; border:1px solid #000000;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:4px; margin-bottom:6px;">
          <div>
            <h3 class="mono" style="font-size:13px; font-weight:800; text-transform:uppercase; color:#ffffff;">
              Yebis Engineering PLC
            </h3>
            <span class="mono" style="font-size:9px; color:#fbbf24; text-transform:uppercase;">
              Grade 3 General Contractor (GC-3) · Bole Sub-City, Addis Ababa, Ethiopia
            </span>
          </div>
          <div class="mono" style="font-size:8.5px; color:#a1a1aa; text-align:right;">
            <span>TRADE REG: BL/AA/1/0001088/2004</span> · <span>TIN: 0001985917</span>
          </div>
        </div>

        <div class="mono" style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px; font-size:9px;">
          <div>
            <span style="color:#fbbf24; font-weight:700; display:block; margin-bottom:1px;">HEADQUARTERS</span>
            <p style="color:#d4d4d8; line-height:1.35;">
              Cameroon Street, Yebis Tower<br />
              Bole Sub-City, Woreda 03<br />
              Addis Ababa, Ethiopia
            </p>
          </div>
          <div>
            <span style="color:#fbbf24; font-weight:700; display:block; margin-bottom:1px;">DIRECT TELEPHONY</span>
            <p style="color:#d4d4d8; line-height:1.35;">
              HQ: +251 91 151 7784<br />
              Tenders: +251 91 387 9093<br />
              Operations: +251 91 162 9879
            </p>
          </div>
          <div>
            <span style="color:#fbbf24; font-weight:700; display:block; margin-bottom:1px;">DIGITAL DISPATCH</span>
            <p style="color:#d4d4d8; line-height:1.35;">
              inquiries@yebisengineering.pro.et<br />
              www.yebisengineering.pro.et<br />
              Mon–Sat: 08:00 – 18:00 EAT
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>END OF DOSSIER // SHEET 12 OF 12</span>
    </div>
  </section>

</body>
</html>
`;

fs.writeFileSync(HTML_FILE, html, 'utf8');
console.log('HTML written successfully to:', HTML_FILE, 'Size:', html.length, 'bytes');

// Execute Edge using execFileSync directly (no powershell quote escaping issues)
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${OUTPUT_PDF}`,
  HTML_FILE
];

console.log('Running Edge print-to-pdf via execFileSync...');
try {
  execFileSync(edgePath, args, { stdio: 'inherit' });
  if (fs.existsSync(OUTPUT_PDF)) {
    const stats = fs.statSync(OUTPUT_PDF);
    console.log('SUCCESS! PDF generated:', OUTPUT_PDF, 'Size:', stats.size, 'bytes');
  } else {
    console.error('PDF file does not exist after command!');
  }
} catch (e) {
  console.error('Edge execution error:', e.message);
}
