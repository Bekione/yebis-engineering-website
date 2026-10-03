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

// 9 Statutory Licensure Documents Organized by Orientation & Function
const STATUTORY_DOCUMENTS = [
  {
    id: "DOC-01",
    annexNumber: "ANNEX A-01",
    ref: "Ref: ደ/10/06/35165/18 · Date: 2/10/2018 E.C.",
    titleAmharic: "የግብር አከፋፈል ማረጋገጫ ምስክር ወረቀት (የታክስ ክሊራንስ)",
    titleEnglish: "Corporate Tax Clearance Certificate",
    authority: "Addis Ababa City Revenues Bureau — Bole Sub-City Branch",
    category: "Fiscal & Statutory Compliance",
    status: "Valid & Current for Public Tender",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-1.jpg'),
    description: "Formal certification validating full settlement of regional and federal tax obligations. Mandatory for institutional procurement and public contracting.",
  },
  {
    id: "DOC-02",
    annexNumber: "ANNEX A-02",
    ref: "Trade Reg No: BL/AA/1/0001088/2004 · TIN: 0001985917",
    titleAmharic: "የንግድ ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Commercial Registration Certificate",
    authority: "Addis Ababa City Administration Trade Bureau",
    category: "Corporate Legal Charter",
    status: "Officially Registered Entity",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-2.jpg'),
    description: "Principal statutory commercial charter establishing Yebis Engineering PLC (formerly Yeshitela Tedla Building Contractor) under Commercial Registration Proc. No. 980/2016.",
  },
  {
    id: "DOC-03",
    annexNumber: "ANNEX A-03",
    ref: "License No: 14/673/5841/2004 · File: BL/AA/1/0001088/2004",
    titleAmharic: "የንግድ ሥራ ፈቃድ — ሕንፃና ውሃ ሥራ ተቋራጭ",
    titleEnglish: "Grade 3 General Contractor Principal Business License",
    authority: "Addis Ababa City Administration Trade Bureau / Ministry of Trade",
    category: "Statutory Construction Licensure",
    status: "Grade 3 General Contractor (GC-3)",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-4.jpg'),
    description: "Statutory accreditation qualifying Yebis Engineering to contract and execute complex commercial, institutional, and civil infrastructure projects nationwide.",
  },
  {
    id: "DOC-04",
    annexNumber: "ANNEX A-04",
    ref: "Renewal Endorsement: 22/4/2017 E.C. (2017 ታድሷል)",
    titleAmharic: "የንግድ ሥራ ፈቃድ እድሳትና ብቃት ማረጋገጫ",
    titleEnglish: "Business License Renewal & Competency Verification",
    authority: "Addis Ababa City Administration Trade Development Bureau",
    category: "Regulatory Endorsement",
    status: "Renewed & Active in Good Standing",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-5.jpg'),
    description: "Annual competency verification endorsing capitalization, certified equipment fleet ownership, and qualified senior engineering personnel on staff.",
  },
  {
    id: "DOC-05",
    annexNumber: "ANNEX A-05",
    ref: "Principal Reg No: 06/1/10522/97 · Mod Date: 9/3/2015 E.C.",
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
    id: "DOC-06",
    annexNumber: "ANNEX A-06",
    ref: "Cert No: 2506421 · Trade Reg: BL/AA/1/0001088/2004",
    titleAmharic: "የንግድ ስም ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Official Trade Name Registration Certificate",
    authority: "City Government of Addis Ababa Trade & Industry Bureau",
    category: "Intellectual Property & Brand Registration",
    status: "Protected Trade Name: Yebis Engineering",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-7.jpg'),
    description: "Official certificate granting exclusive proprietary commercial trademark and trade name rights to 'Yebis Engineering (የቢስ ኢንጂነሪንግ)' across Ethiopia.",
  },
  {
    id: "DOC-07",
    annexNumber: "ANNEX A-07",
    ref: "TIN: 0001985917 · Cert No: 1686714290819 · Date: 07-DEC-22",
    titleAmharic: "የግብር ከፋይ መለያ ቁጥር (TIN) ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Official Taxpayer Identification Number (TIN) Registration",
    authority: "FDRE — Addis Ababa City Administration Revenue Authority",
    category: "Fiscal Identification",
    status: "Active Verified Taxpayer",
    orientation: "landscape",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-3.jpg'),
    description: "National Taxpayer Identification certification establishing official fiscal registration for Yeshitla Tedla Helena-AB / Yebis Engineering for building and water works contracting.",
  },
  {
    id: "DOC-08",
    annexNumber: "ANNEX A-08",
    ref: "VAT Cert No: 00298418 · TIN: 0001985917 · Date: 11-OCT-2004",
    titleAmharic: "የተጨማሪ እሴት ታክስ (VAT) ምዝገባ ምስክር ወረቀት",
    titleEnglish: "Value Added Tax (VAT) Official Registration Certificate",
    authority: "Addis Ababa City Revenue Authority — Bole Small Tax Payers Branch",
    category: "Tax Operations Licensure",
    status: "Registered VAT Enterprise (15%)",
    orientation: "landscape",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-8.jpg'),
    description: "Mandatory statutory registration certifying compliance under VAT Proclamation No. 285/2002, authorizing certified 15% tax invoice issuance on all construction contracts.",
  },
  {
    id: "DOC-09",
    annexNumber: "ANNEX A-09",
    ref: "Dossier: 14/673/5841/2004 · TIN: 0001985917",
    titleAmharic: "የኮንስትራክሽን የብቃት ማረጋገጫና ሕጋዊ ማስረጃ",
    titleEnglish: "Construction Competency & Official Commercial Register",
    authority: "Addis Ababa City Administration Trade Bureau",
    category: "Technical Capacity Certification",
    status: "Grade 3 Competency Approved",
    orientation: "portrait",
    image: toBase64('/assets/company-docs/photo_2026-09-20_20-56-11-9.jpg'),
    description: "Official technical competency ledger verifying corporate machinery assets, calibrated laboratory testing compliance, and senior supervisory engineers on staff.",
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

// Case Studies with exact file mappings
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
      font-size: 10px;
      line-height: 1.42;
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
      min-height: 277mm;
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
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8.8px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #555555;
      border-bottom: 1.5px solid #1b1c1a;
      padding-bottom: 4px;
      margin-bottom: 8px;
    }
    .sheet-footer {
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8.5px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #6b7280;
      border-top: 1px solid #d1d5db;
      padding-top: 5px;
      margin-top: 8px;
    }
    .sheet-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
    }
    .section-tag {
      font-size: 9.5px;
      color: #8d4b00;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 3px;
    }
    .section-title {
      font-size: 14.5px;
      font-weight: 800;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 5px;
      letter-spacing: -0.01em;
    }
    .card {
      border: 1px solid #d1d5db;
      background: #fafaf9;
    }
    .badge-amber {
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fcd34d;
      padding: 2px 6px;
      font-size: 8.2px;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
      letter-spacing: 0.04em;
    }
    .badge-green {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #86efac;
      padding: 2px 6px;
      font-size: 8.2px;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
      letter-spacing: 0.04em;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9px;
    }
    th {
      background: #1b1c1a;
      color: #ffffff;
      padding: 5.5px 8px;
      text-align: left;
      font-size: 8.8px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    td {
      padding: 4.8px 8px;
      border-bottom: 1px solid #e5e7eb;
      vertical-align: middle;
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
    <div class="sheet-header mono">
      <span style="font-weight:700; color:#8d4b00;">GRADE 3 GENERAL CONTRACTOR (GC-3)</span>
      <span>ADDIS ABABA, ETHIOPIA · OFFICIAL QUALIFICATION DOSSIER</span>
    </div>

    <div class="sheet-body">
      <!-- Dossier Title Block -->
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #000000; padding-bottom:14px;">
        <div style="display:flex; align-items:center; gap:18px;">
          <div style="width:82px; height:82px; background:#1b1c1a; border:2px solid #8d4b00; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <img src="${LOGO_BASE64}" alt="Logo" style="width:62px; height:62px; object-fit:contain;" />
          </div>
          <div>
            <h1 class="mono" style="font-size:27px; font-weight:800; text-transform:uppercase; letter-spacing:-0.02em; line-height:1.05;">
              Yebis Engineering PLC
            </h1>
            <p class="mono" style="font-size:11px; color:#8d4b00; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-top:4px;">
              From Structure to Finish · Integrated Construction Solutions
            </p>
            <span class="mono" style="font-size:9.5px; color:#6b7280; text-transform:uppercase; display:block; margin-top:3px;">
              Formerly: Yeshitila Tedla Building Contractor (Established 2004 E.C. / 2012 G.C.)
            </span>
          </div>
        </div>
        <div class="mono" style="text-align:right; font-size:9.2px; color:#374151; line-height:1.6; border-left:1.5px solid #d1d5db; padding-left:16px;">
          <div><strong>DOSSIER ID:</strong> YEB-CORP-2026/01</div>
          <div><strong>COMPLIANCE:</strong> Grade 3 GC (GC-3)</div>
          <div><strong>HEADQUARTERS:</strong> Addis Ababa, Ethiopia</div>
        </div>
      </div>

      <!-- Section 01: Executive Overview -->
      <div style="border-left:3px solid #8d4b00; padding-left:14px;">
        <span class="section-tag mono">/// SECTION 01: EXECUTIVE OVERVIEW</span>
        <h2 class="section-title mono" style="font-size:16px; margin-bottom:8px;">Corporate Profile &amp; Operating Philosophy</h2>
        <p style="font-size:11px; color:#374151; line-height:1.62; margin-bottom:8px;">
          Yebis Engineering PLC is an accredited <strong>Grade 3 General Contractor (GC-3)</strong> headquartered in Addis Ababa, Ethiopia. Delivering turnkey general contracting, heavy reinforced concrete superstructures, electromechanical building services, and precision interior architecture, the firm serves federal ministries, regional bureaus, international NGOs, and private developers nationwide.
        </p>
        <p style="font-size:11px; color:#374151; line-height:1.62;">
          Originally founded in 2004 E.C. as <strong>"Yeshitila Tedla Building Contractor"</strong>, the company established its foundational reputation through rigorous structural execution, public housing, and complex medical infrastructure projects—including specialized radiation-shielded suites for federal hospitals. Today, the organization operates integrated specialty divisions comprising dedicated aluminum fenestration and precision timber joinery manufacturing plants in Addis Ababa, eliminating subcontractor delays and ensuring single-point accountability.
        </p>
      </div>

      <!-- 4-Stat Box -->
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:12px; background:#f9fafb; border:1px solid #d1d5db; border-top:3px solid #8d4b00; padding:18px 12px; text-align:center;">
        <div>
          <div class="mono" style="font-size:32px; font-weight:800; color:#000000; line-height:1;">21</div>
          <div style="font-size:9.5px; text-transform:uppercase; color:#1b1c1a; font-weight:700; margin-top:5px;">Executed Contracts</div>
          <div style="font-size:8.5px; color:#6b7280; margin-top:2px;">100% Completion Rate</div>
        </div>
        <div style="border-left:1px solid #d1d5db;">
          <div class="mono" style="font-size:32px; font-weight:800; color:#8d4b00; line-height:1;">16</div>
          <div style="font-size:9.5px; text-transform:uppercase; color:#1b1c1a; font-weight:700; margin-top:5px;">Institutional Clients</div>
          <div style="font-size:8.5px; color:#6b7280; margin-top:2px;">Ministries &amp; Hospitals</div>
        </div>
        <div style="border-left:1px solid #d1d5db;">
          <div class="mono" style="font-size:32px; font-weight:800; color:#000000; line-height:1;">104.1M+</div>
          <div style="font-size:9.5px; text-transform:uppercase; color:#1b1c1a; font-weight:700; margin-top:5px;">Delivered Portfolio (ETB)</div>
          <div style="font-size:8.5px; color:#6b7280; margin-top:2px;">Historical Track Record</div>
        </div>
        <div style="border-left:1px solid #d1d5db;">
          <div class="mono" style="font-size:32px; font-weight:800; color:#8d4b00; line-height:1;">GC-3</div>
          <div style="font-size:9.5px; text-transform:uppercase; color:#1b1c1a; font-weight:700; margin-top:5px;">Federal Licensure</div>
          <div style="font-size:8.5px; color:#6b7280; margin-top:2px;">Ministry of Trade &amp; Urban Dev</div>
        </div>
      </div>

      <!-- Core Competency Pillars (3 Pillars) -->
      <div>
        <span class="mono" style="font-size:10px; font-weight:700; color:#8d4b00; text-transform:uppercase; display:block; margin-bottom:6px;">
          STRATEGIC ADVANTAGES &amp; INSTITUTIONAL CAPACITY
        </span>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:12px;">
          <div class="card" style="padding:14px 14px; border-top:2.5px solid #8d4b00;">
            <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:5px;">01. FAST-TRACK STRUCTURAL DELIVERY</div>
            <p style="font-size:9.5px; color:#4b5563; line-height:1.5;">Heavy reinforced concrete superstructures, cast-in-place framing, deep secant piled shoring, and seismic raft foundations built to rigorous Ethiopian and Eurocode standards.</p>
          </div>
          <div class="card" style="padding:14px 14px; border-top:2.5px solid #8d4b00;">
            <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:5px;">02. IN-HOUSE MANUFACTURING PLANTS</div>
            <p style="font-size:9.5px; color:#4b5563; line-height:1.5;">Dedicated Addis Ababa aluminum facade fabrication and precision joinery workshops eliminate third-party supply-chain bottlenecks and guarantee millimeter tolerances.</p>
          </div>
          <div class="card" style="padding:14px 14px; border-top:2.5px solid #8d4b00;">
            <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:5px;">03. INSTITUTIONAL QA/QC &amp; ZERO-ACCIDENT HSE</div>
            <p style="font-size:9.5px; color:#4b5563; line-height:1.5;">Certified materials testing protocols (C25/C30/C40 concrete cube tests, rebar tensile certification) combined with zero lost-time HSE protocols across all active jobsites.</p>
          </div>
        </div>
      </div>

      <!-- Executive Leadership & Key Personnel -->
      <div class="card" style="padding:14px 16px;">
        <span class="mono" style="font-size:10px; font-weight:700; color:#000000; text-transform:uppercase; display:block; margin-bottom:8px; border-bottom:1px solid #e5e7eb; padding-bottom:5px;">
          EXECUTIVE LEADERSHIP &amp; SENIOR TECHNICAL GOVERNANCE
        </span>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:16px; font-size:9.5px; line-height:1.5; color:#374151;">
          <div>
            <strong style="color:#000000; font-size:10.5px;">Yeshitela Tedla Helenaabe</strong><br />
            <span class="mono" style="color:#8d4b00; font-size:8.8px; font-weight:700; display:block; margin:3px 0 4px;">MANAGING DIRECTOR &amp; FOUNDER</span>
            20+ years executive construction management across Ethiopian institutional, public civil, and commercial sectors.
          </div>
          <div>
            <strong style="color:#000000; font-size:10.5px;">Senior Technical Directorate</strong><br />
            <span class="mono" style="color:#8d4b00; font-size:8.8px; font-weight:700; display:block; margin:3px 0 4px;">STRUCTURAL &amp; MEP ENGINEERING</span>
            Licensed Professional Structural Engineers (PE) overseeing structural calculations, 3D BIM clash detection, and rebar scheduling.
          </div>
          <div>
            <strong style="color:#000000; font-size:10.5px;">Operations &amp; HSE Directorate</strong><br />
            <span class="mono" style="color:#8d4b00; font-size:8.8px; font-weight:700; display:block; margin:3px 0 4px;">SITE OPERATIONS &amp; SAFETY</span>
            Supervisory resident civil engineers enforcing daily quality audits, toolbox meetings, and EBCS structural compliance.
          </div>
        </div>
      </div>

      <!-- Statutory Licensure Banner -->
      <div class="bg-dark mono" style="padding:14px 16px; font-size:9.5px; display:grid; grid-template-columns: 1fr 1fr; gap:16px; line-height:1.65; border:1px solid #000000;">
        <div>
          <strong>CONTRACTOR GRADE:</strong> Grade 3 General Contractor (GC-3)<br />
          <strong>TRADE REGISTRATION:</strong> BL/AA/1/0001088/2004<br />
          <strong>TAX IDENTIFICATION (TIN):</strong> 0001985917
        </div>
        <div>
          <strong>VAT REGISTRATION:</strong> 00298418 (15% Standard)<br />
          <strong>PRINCIPAL BUSINESS LICENSE:</strong> 14/673/5841/2004<br />
          <strong>OFFICIAL DOMICILE:</strong> Bole Sub-City, Addis Ababa, Ethiopia
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 01 OF 12 // CORPORATE CREDENTIALS</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 02: CAPABILITIES MATRIX & OPERATIONS -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div class="sheet-header mono">
      <span>TECHNICAL CAPABILITY MATRIX</span>
      <span>INTEGRATED CONSTRUCTION SERVICES</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 02: TECHNICAL SCOPE &amp; MANUFACTURING OPERATIONS</span>
        <h2 class="section-title mono" style="font-size:16px; margin-bottom:4px;">Multi-Disciplinary Scope &amp; Vertically Integrated Plants</h2>
        <p style="font-size:10px; color:#4b5563;">
          Comprehensive general contracting infrastructure with self-performed heavy engineering divisions and precision architectural manufacturing workshops.
        </p>
      </div>

      <!-- 8 Scope Cards -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">01. GENERAL CONTRACTING (GC-3)</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Turnkey multi-story building construction, reinforced concrete frame superstructures, substructure earthworks, civil drainage, and structural rehabilitation.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">02. STRUCTURAL DESIGN &amp; BIM</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Complete architectural detailing, MEP spatial coordination, structural calculation verification, rebar schedule optimization, and 3D clash detection.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">03. ELECTRICAL &amp; MEP RETICULATION</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Main distribution boards, MV/LV panel synchronization, standby diesel generator changeovers, building management cable pathways, and emergency lighting.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">04. PLUMBING &amp; SANITARY SYSTEMS</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">PPR potable water networks, multi-stage booster pump sets, PVC sanitary drainage stacks, 10-bar hydrostatic testing, and polyurethane waterproofing.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">05. ACOUSTIC INTERIORS &amp; FINISHING</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Acoustic gypsum partition walls, suspended Armstrong grid ceilings, high-traffic rectified porcelain tiling, anti-static epoxy coatings, and architectural coatings.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">06. IN-HOUSE JOINERY WORKSHOP</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Addis Ababa industrial woodworking facility fabricating solid hardwood doors, flame-retardant fire doors, executive conference furniture, and acoustic wall paneling.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">07. ALUMINUM &amp; CURTAIN WALLING</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Structural aluminum facade engineering, thermal-break double-glazed window fenestration (1.8–2.2mm profiles), spider glass canopies, and metalwork.</p>
        </div>
        <div class="card" style="padding:12px 14px;">
          <div class="mono" style="font-size:10px; font-weight:700; color:#000000; margin-bottom:3px;">08. STRUCTURAL RETROFITTING &amp; RENOVATION</div>
          <p style="font-size:9.5px; color:#4b5563; line-height:1.45;">Taking over incomplete structural skeletons, column jacketing, foundation underpinning, healthcare radiological retrofitting, and refurbishment.</p>
        </div>
      </div>

      <!-- Vertical Integration Advantage: In-House Plants -->
      <div style="background:#fef3c7; border:1px solid #fcd34d; border-left:4px solid #8d4b00; padding:14px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
          <span class="mono" style="font-size:10.5px; font-weight:700; color:#8d4b00; text-transform:uppercase;">
            KEY COMPETITIVE ADVANTAGE: SELF-PERFORMED FINISHING PLANTS (ADDIS ABABA)
          </span>
          <span class="badge-amber" style="padding:3px 8px; font-size:8.8px;">ZERO SUBCONTRACTOR DELAYS</span>
        </div>
        <p style="font-size:9.8px; color:#374151; line-height:1.52;">
          Unlike contractors who depend entirely on fragmented third-party subcontractors for architectural finishes, Yebis Engineering owns and operates dedicated aluminum facade engineering and heavy industrial joinery workshops in Addis Ababa. This vertical integration guarantees millimeter-precise tolerance control, eliminates supply-chain bottlenecks, and allows comprehensive single-source structural and finish warranties.
        </p>
      </div>

      <!-- Heavy Machinery & Plant Inventory (4 Columns) -->
      <div class="card" style="padding:14px 16px;">
        <span class="mono" style="font-size:10px; font-weight:700; text-transform:uppercase; display:block; margin-bottom:6px;">
          CORPORATE EQUIPMENT FLEET &amp; HEAVY PLANT INVENTORY (CAPITAL ASSET REGISTER):
        </span>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap:12px; font-size:9.2px; color:#4b5563; line-height:1.48;">
          <div>
            <strong style="color:#000000;">EARTHWORKS &amp; COMPACTION:</strong><br />
            Plate compactors (5kN–18kN), reversible vibratory tampers, pneumatic breakers, dewatering pumps.
          </div>
          <div>
            <strong style="color:#000000;">CONCRETE &amp; CASTING:</strong><br />
            Transit concrete mixers, 500L site batch mixers, poker vibrators, beam screeds, steel cube molds.
          </div>
          <div>
            <strong style="color:#000000;">SURVEYING &amp; OPTICS:</strong><br />
            Total Stations, digital rotary laser levels, auto levels (optical 32x), precision electronic theodolites.
          </div>
          <div>
            <strong style="color:#000000;">FORMWORK &amp; ACCESS:</strong><br />
            Heavy steel frame scaffolding (15,000+ SQM), adjustable steel props, steel decking panels, safety harnesses.
          </div>
        </div>
      </div>

      <!-- Quality Assurance & Safety Protocols (QA/QC & HSE) -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
        <div class="card" style="padding:13px 16px;">
          <span class="mono" style="font-size:10px; font-weight:700; color:#8d4b00; text-transform:uppercase; display:block; margin-bottom:4px;">
            QUALITY ASSURANCE &amp; MATERIALS TESTING (QA/QC)
          </span>
          <p style="font-size:9.2px; color:#4b5563; line-height:1.48;">
            Every batch of concrete undergoes mandatory slump cone testing and 7-, 14-, and 28-day compressive cube testing (C25/C30/C40) per EBCS / ASTM standards at accredited national laboratories. Certified mill test reports are required for all Grade 60 rebar prior to pouring.
          </p>
        </div>
        <div class="card" style="padding:13px 16px;">
          <span class="mono" style="font-size:10px; font-weight:700; color:#166534; text-transform:uppercase; display:block; margin-bottom:4px;">
            HEALTH, SAFETY &amp; ENVIRONMENTAL PROTOCOLS (HSE)
          </span>
          <p style="font-size:9.2px; color:#4b5563; line-height:1.48;">
            Full compliance with national labor occupational health safety directives. Zero lost-time injury mandate enforced through daily job-safety briefings, mandatory 100% PPE compliance, certified scaffolding load inspections, and trained on-site safety officers.
          </p>
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 02 OF 12 // SCOPE OF OPERATIONS &amp; MACHINERY</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 03: MAJOR TURNKEY PROJECTS (15 & 16) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div class="sheet-header mono">
      <span>PROJECT DOSSIER // INSTITUTIONAL INFRASTRUCTURE</span>
      <span>VERIFIED PERFORMANCE</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 03: MAJOR TURNKEY PROJECTS</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Selected Projects // Educational &amp; Civil Infrastructure</h2>
      </div>

      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; gap:12px; min-height:0;">
        ${[CASE_STUDIES[0], CASE_STUDIES[1]].map(cs => `
          <div class="card" style="flex:1; padding:10px 12px; display:flex; flex-direction:column; justify-content:space-between; min-height:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:4px;">
                <span class="mono text-primary" style="font-size:10px; font-weight:700;">
                  PROJECT ${cs.recordNumber < 10 ? '0' + cs.recordNumber : cs.recordNumber} · ${cs.scope.toUpperCase()} · ${cs.year}
                </span>
                <span class="mono" style="font-size:10px; font-weight:700; background:#e5e7eb; padding:2px 7px; border:1px solid #d1d5db;">
                  ${cs.value}
                </span>
              </div>

              <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px; line-height:1.2;">
                ${cs.title}
              </h3>

              <div class="mono" style="font-size:9px; color:#4b5563; margin-bottom:4px;">
                <strong>Client:</strong> ${cs.client} · <strong>Location:</strong> ${cs.location}
              </div>
            </div>

            <div style="width:100%; height:148px; background:#e5e7eb; overflow:hidden; border:1px solid #d1d5db; margin:2px 0;">
              <img src="${cs.image}" alt="${cs.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>

            <div>
              <p style="font-size:9.5px; color:#374151; line-height:1.42; margin-bottom:4px;">
                ${cs.desc}
              </p>

              <ul style="font-size:9px; color:#4b5563; display:grid; grid-template-columns: 1fr 1fr; gap:2px 10px; padding-left:14px; margin-bottom:4px;">
                ${cs.specs.map(s => `<li style="word-break:break-word; line-height:1.3;">${s}</li>`).join('')}
              </ul>

              <div class="mono" style="font-size:8.5px; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:3px;">
                ${cs.technicalRecord}
              </div>
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
    <div class="sheet-header mono">
      <span>PROJECT DOSSIER // HEALTHCARE &amp; INDUSTRIAL WORKSHOPS</span>
      <span>VERIFIED PERFORMANCE</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 04: SPECIALIZED FACILITIES</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Selected Projects // Clinical Residences &amp; Heavy Portal Workshops</h2>
      </div>

      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; gap:12px; min-height:0;">
        ${[CASE_STUDIES[2], CASE_STUDIES[3]].map(cs => `
          <div class="card" style="flex:1; padding:10px 12px; display:flex; flex-direction:column; justify-content:space-between; min-height:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:4px;">
                <span class="mono text-primary" style="font-size:10px; font-weight:700;">
                  PROJECT ${cs.recordNumber < 10 ? '0' + cs.recordNumber : cs.recordNumber} · ${cs.scope.toUpperCase()} · ${cs.year}
                </span>
                <span class="mono" style="font-size:10px; font-weight:700; background:#e5e7eb; padding:2px 7px; border:1px solid #d1d5db;">
                  ${cs.value}
                </span>
              </div>

              <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px; line-height:1.2;">
                ${cs.title}
              </h3>

              <div class="mono" style="font-size:9px; color:#4b5563; margin-bottom:4px;">
                <strong>Client:</strong> ${cs.client} · <strong>Location:</strong> ${cs.location}
              </div>
            </div>

            <div style="width:100%; height:148px; background:#e5e7eb; overflow:hidden; border:1px solid #d1d5db; margin:2px 0;">
              <img src="${cs.image}" alt="${cs.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>

            <div>
              <p style="font-size:9.5px; color:#374151; line-height:1.42; margin-bottom:4px;">
                ${cs.desc}
              </p>

              <ul style="font-size:9px; color:#4b5563; display:grid; grid-template-columns: 1fr 1fr; gap:2px 10px; padding-left:14px; margin-bottom:4px;">
                ${cs.specs.map(s => `<li style="word-break:break-word; line-height:1.3;">${s}</li>`).join('')}
              </ul>

              <div class="mono" style="font-size:8.5px; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:3px;">
                ${cs.technicalRecord}
              </div>
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
    <div class="sheet-header mono">
      <span>PROJECT DOSSIER // SPECIALIZED CLINICAL ENGINEERING</span>
      <span>RADIATION SHIELDING &amp; STERILE SUITES</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 05: SPECIALIZED MEDICAL ENGINEERING</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Hospital Expansion &amp; Diagnostic Radiology Shielding</h2>
      </div>

      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; gap:12px; min-height:0;">
        ${[CASE_STUDIES[4], CASE_STUDIES[5]].map(cs => `
          <div class="card" style="flex:1; padding:10px 12px; display:flex; flex-direction:column; justify-content:space-between; min-height:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:4px;">
                <span class="mono text-primary" style="font-size:10px; font-weight:700;">
                  PROJECT ${cs.recordNumber < 10 ? '0' + cs.recordNumber : cs.recordNumber} · ${cs.scope.toUpperCase()} · ${cs.year}
                </span>
                <span class="mono" style="font-size:10px; font-weight:700; background:#e5e7eb; padding:2px 7px; border:1px solid #d1d5db;">
                  ${cs.value}
                </span>
              </div>

              <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px; line-height:1.2;">
                ${cs.title}
              </h3>

              <div class="mono" style="font-size:9px; color:#4b5563; margin-bottom:4px;">
                <strong>Client:</strong> ${cs.client} · <strong>Location:</strong> ${cs.location}
              </div>
            </div>

            <div style="width:100%; height:148px; background:#e5e7eb; overflow:hidden; border:1px solid #d1d5db; margin:2px 0;">
              <img src="${cs.image}" alt="${cs.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>

            <div>
              <p style="font-size:9.5px; color:#374151; line-height:1.42; margin-bottom:4px;">
                ${cs.desc}
              </p>

              <ul style="font-size:9px; color:#4b5563; display:grid; grid-template-columns: 1fr 1fr; gap:2px 10px; padding-left:14px; margin-bottom:4px;">
                ${cs.specs.map(s => `<li style="word-break:break-word; line-height:1.3;">${s}</li>`).join('')}
              </ul>

              <div class="mono" style="font-size:8.5px; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:3px;">
                ${cs.technicalRecord}
              </div>
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
    <div class="sheet-header mono">
      <span>DEVELOPMENT PORTFOLIO // COMMERCIAL &amp; RESIDENTIAL</span>
      <span>MODERN ASSET DELIVERY</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 06: MODERN DEVELOPMENTS</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Commercial Towers, Residential Enclaves &amp; Facades (Records 17–21)</h2>
        <p style="font-size:9.5px; color:#4b5563;">
          Contemporary high-density towers, luxury residences, architectural facades, and corporate interiors executed with strict engineering tolerances.
        </p>
      </div>

      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; gap:7px; margin:6px 0; min-height:0;">
        ${MODERN_DEV.map(dev => `
          <div class="card" style="flex:1; display:flex; align-items:center; gap:10px; padding:6px 10px; min-height:0;">
            <div style="width:96px; height:70px; background:#e5e7eb; border:1px solid #d1d5db; overflow:hidden; flex-shrink:0;">
              <img src="${dev.image}" alt="${dev.title}" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:2px; margin-bottom:2px;">
                <span class="mono text-primary" style="font-size:9px; font-weight:700;">
                  RECORD ${dev.recordNumber} · ${dev.year} · ${dev.location}
                </span>
                <span class="mono" style="font-size:9px; font-weight:700; background:#ffffff; padding:1px 6px; border:1px solid #d1d5db;">
                  ${dev.value}
                </span>
              </div>
              <h4 style="font-size:10.5px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
                ${dev.title} — <span class="mono" style="font-weight:600; color:#4b5563; font-size:9.2px;">${dev.scope}</span>
              </h4>
              <p style="font-size:9px; color:#4b5563; line-height:1.35; word-break:break-word;">
                ${dev.specs}
              </p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Commercial Development Summary Banner -->
      <div style="background:#f9fafb; border:1px solid #d1d5db; border-left:4px solid #8d4b00; padding:8px 11px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
          <span class="mono" style="font-size:9.2px; font-weight:700; color:#8d4b00; text-transform:uppercase;">
            COMMERCIAL &amp; PRIVATE URBAN ASSET DELIVERY CAPACITY
          </span>
          <span class="mono" style="font-size:8.8px; font-weight:700; color:#000000;">
            TOTAL PRIVATE SECTOR PORTFOLIO: ETB 118,500,000.00
          </span>
        </div>
        <p style="font-size:8.8px; color:#4b5563; line-height:1.35;">
          Demonstrated engineering capability executing complex urban real estate assets in high-density corridors (Kazanchis, Bole, CMC) involving deep subterranean shoring, C40/50 high-strength concrete framing, imported architectural envelope fenestration, and precision multi-floor workplace interiors.
        </p>
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
    <div class="sheet-header mono">
      <span>STATUTORY TRACK RECORD AUDIT</span>
      <span>COMPLETE PERFORMANCE REGISTER</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 07: COMPREHENSIVE PERFORMANCE REGISTER</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Complete Corporate Track Record (All 21 Executed Contracts)</h2>
        <p style="font-size:9.2px; color:#4b5563;">
          Master chronological ledger documenting all completed works across public ministries, institutional agencies, healthcare facilities, and commercial developments.
        </p>
      </div>

      <div style="border:1px solid #d1d5db; overflow:hidden; margin:6px 0;">
        <table>
          <thead>
            <tr class="mono">
              <th style="width:26px; text-align:center;">No.</th>
              <th style="width:42%;">Project Title &amp; Scope</th>
              <th style="width:30%;">Client / Contracting Authority</th>
              <th style="width:36px; text-align:center;">Year</th>
              <th style="text-align:right; width:92px;">Contract Value</th>
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
                    ${p.recordNumber >= 17 ? '<span class="badge-amber" style="margin-left:3px; padding:0 3px; font-size:7.5px;">Dev</span>' : ''}
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
              <td colspan="4" style="padding:5.5px 8px; text-transform:uppercase; font-size:9.2px;">
                Total Delivered Portfolio Value (21 Contract Records)
              </td>
              <td style="padding:5.5px 8px; text-align:right; color:#8d4b00; font-size:9.2px; white-space:nowrap;">
                ETB 104,115,263.78
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Institutional Seals Strip -->
      <div style="padding:8px 12px; background:#f9fafb; border:1px solid #d1d5db;">
        <span class="mono" style="font-size:8.5px; font-weight:700; text-transform:uppercase; color:#4b5563; display:block; margin-bottom:4px;">
          INSTITUTIONAL CLIENT CREDENTIALS &amp; CONTRACTING AUTHORITIES:
        </span>
        <div style="display:flex; justify-content:space-around; align-items:center;">
          ${CLIENT_LOGOS.map(c => `
            <div style="display:flex; flex-direction:column; align-items:center; text-align:center;">
              <img src="${c.src}" alt="${c.name}" style="height:24px; max-width:56px; object-fit:contain; filter:grayscale(100%); opacity:0.85;" />
              <span style="font-size:7.2px; color:#6b7280; margin-top:2px; font-weight:600;">${c.name}</span>
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
    <div class="sheet-header mono">
      <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
      <span>ANNEX A: OFFICIAL CERTIFICATES</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 08: STATUTORY COMPLIANCE</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Tax Clearance &amp; Commercial Registration Charters</h2>
        <p style="font-size:9.5px; color:#4b5563;">
          High-resolution certified statutory instruments establishing fiscal standing and legal corporate status.
        </p>
      </div>

      <div style="flex:1; display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin:6px 0; min-height:0;">
        ${[STATUTORY_DOCUMENTS[0], STATUTORY_DOCUMENTS[1]].map(doc => `
          <div class="card" style="height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:9px 11px; min-height:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
                <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${doc.annexNumber}</span>
                <span class="badge-green">${doc.status}</span>
              </div>
              <h3 style="font-size:11px; font-weight:700; text-transform:uppercase; color:#000000; line-height:1.2; margin-bottom:2px;">
                ${doc.titleEnglish}
              </h3>
              <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:2px;">
                ${doc.titleAmharic}
              </p>
              <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.35; margin-bottom:4px;">
                <div><strong>Authority:</strong> ${doc.authority}</div>
                <div><strong>${doc.ref}</strong></div>
              </div>
            </div>

            <div style="flex:1; min-height:165mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; margin:2px 0;">
              <img src="${doc.image}" alt="${doc.titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>

            <p style="font-size:8.8px; color:#4b5563; line-height:1.35; border-top:1px solid #e5e7eb; padding-top:4px;">
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
  <!-- SHEET 09: STATUTORY CERTIFICATES 03 & 04 (GC-3 LICENSE & RENEWAL) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div class="sheet-header mono">
      <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
      <span>ANNEX A: OFFICIAL CERTIFICATES</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 09: CONTRACTOR LICENSURE &amp; COMPETENCY</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Grade 3 General Contractor License &amp; Annual Competency Renewal</h2>
        <p style="font-size:9.5px; color:#4b5563;">
          Certified Grade 3 General Contractor principal business license and official annual regulatory renewal endorsement.
        </p>
      </div>

      <div style="flex:1; display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin:6px 0; min-height:0;">
        ${[STATUTORY_DOCUMENTS[2], STATUTORY_DOCUMENTS[3]].map(doc => `
          <div class="card" style="height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:9px 11px; min-height:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
                <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${doc.annexNumber}</span>
                <span class="badge-green">${doc.status}</span>
              </div>
              <h3 style="font-size:11px; font-weight:700; text-transform:uppercase; color:#000000; line-height:1.2; margin-bottom:2px;">
                ${doc.titleEnglish}
              </h3>
              <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:2px;">
                ${doc.titleAmharic}
              </p>
              <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.35; margin-bottom:4px;">
                <div><strong>Authority:</strong> ${doc.authority}</div>
                <div><strong>${doc.ref}</strong></div>
              </div>
            </div>

            <div style="flex:1; min-height:165mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; margin:2px 0;">
              <img src="${doc.image}" alt="${doc.titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>

            <p style="font-size:8.8px; color:#4b5563; line-height:1.35; border-top:1px solid #e5e7eb; padding-top:4px;">
              ${doc.description}
            </p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 09 OF 12 // STATUTORY CERTIFICATES 03 &amp; 04</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 10: STATUTORY CERTIFICATES 05 & 06 (LEGAL ENTITY & TRADE NAME) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div class="sheet-header mono">
      <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
      <span>ANNEX A: OFFICIAL CERTIFICATES</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 10: CORPORATE ENTITY &amp; BRAND TITLE</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Commercial Entity Attestation &amp; Trade Name Registration</h2>
        <p style="font-size:9.5px; color:#4b5563;">
          Legally certified enterprise registration attestation and Ministry trade name registration documents.
        </p>
      </div>

      <div style="flex:1; display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin:6px 0; min-height:0;">
        ${[STATUTORY_DOCUMENTS[4], STATUTORY_DOCUMENTS[5]].map(doc => `
          <div class="card" style="height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:9px 11px; min-height:0;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
                <span class="mono text-primary" style="font-size:9.5px; font-weight:700;">${doc.annexNumber}</span>
                <span class="badge-green">${doc.status}</span>
              </div>
              <h3 style="font-size:11px; font-weight:700; text-transform:uppercase; color:#000000; line-height:1.2; margin-bottom:2px;">
                ${doc.titleEnglish}
              </h3>
              <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:2px;">
                ${doc.titleAmharic}
              </p>
              <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.35; margin-bottom:4px;">
                <div><strong>Authority:</strong> ${doc.authority}</div>
                <div><strong>${doc.ref}</strong></div>
              </div>
            </div>

            <div style="flex:1; min-height:165mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; margin:2px 0;">
              <img src="${doc.image}" alt="${doc.titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>

            <p style="font-size:8.8px; color:#4b5563; line-height:1.35; border-top:1px solid #e5e7eb; padding-top:4px;">
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
  <!-- SHEET 11: STATUTORY CERTIFICATES 07 & 08 (LANDSCAPE TIN & VAT) -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div class="sheet-header mono">
      <span>STATUTORY LICENSURE &amp; REGISTRATION</span>
      <span>ANNEX A: OFFICIAL CERTIFICATES</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 11: FISCAL &amp; TAX OPERATIONS LICENSURE</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Taxpayer Identification (TIN) &amp; Value Added Tax (VAT) Certifications</h2>
        <p style="font-size:9.5px; color:#4b5563;">
          Certified statutory fiscal instruments issued by the Ethiopian Revenues &amp; Customs Authority authorizing national commercial transactions and verified VAT invoice issuance.
        </p>
      </div>

      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; gap:10px; margin:6px 0; min-height:0;">
        <!-- Doc 07 (Landscape TIN) -->
        <div class="card" style="flex:1; display:flex; flex-direction:column; justify-content:space-between; padding:9px 12px; min-height:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:4px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="mono text-primary" style="font-size:10px; font-weight:700;">${STATUTORY_DOCUMENTS[6].annexNumber}</span>
              <h3 style="font-size:11px; font-weight:700; text-transform:uppercase;">
                ${STATUTORY_DOCUMENTS[6].titleEnglish} (${STATUTORY_DOCUMENTS[6].titleAmharic})
              </h3>
            </div>
            <span class="badge-green">${STATUTORY_DOCUMENTS[6].status}</span>
          </div>

          <div style="display:flex; gap:12px; align-items:center; flex:1; min-height:0;">
            <div style="width:62%; height:90mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; flex-shrink:0;">
              <img src="${STATUTORY_DOCUMENTS[6].image}" alt="${STATUTORY_DOCUMENTS[6].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div class="mono" style="width:38%; font-size:9px; color:#374151; line-height:1.5;">
              <div><strong>Issuing Authority:</strong><br />${STATUTORY_DOCUMENTS[6].authority}</div>
              <div style="margin-top:4px;"><strong>Credential Ref:</strong><br />${STATUTORY_DOCUMENTS[6].ref}</div>
              <div style="margin-top:5px; font-family:sans-serif; font-size:9px; color:#4b5563; line-height:1.4; border-top:1px solid #e5e7eb; padding-top:4px;">
                ${STATUTORY_DOCUMENTS[6].description}
              </div>
              <div style="margin-top:6px; font-size:8.2px; color:#166534; background:#dcfce7; padding:2px 6px; border:1px solid #86efac; display:inline-block;">
                ✓ Verified Taxpayer Status: Active
              </div>
            </div>
          </div>
        </div>

        <!-- Doc 08 (Landscape VAT) -->
        <div class="card" style="flex:1; display:flex; flex-direction:column; justify-content:space-between; padding:9px 12px; min-height:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:4px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="mono text-primary" style="font-size:10px; font-weight:700;">${STATUTORY_DOCUMENTS[7].annexNumber}</span>
              <h3 style="font-size:11px; font-weight:700; text-transform:uppercase;">
                ${STATUTORY_DOCUMENTS[7].titleEnglish} (${STATUTORY_DOCUMENTS[7].titleAmharic})
              </h3>
            </div>
            <span class="badge-green">${STATUTORY_DOCUMENTS[7].status}</span>
          </div>

          <div style="display:flex; gap:12px; align-items:center; flex:1; min-height:0;">
            <div style="width:62%; height:90mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; flex-shrink:0;">
              <img src="${STATUTORY_DOCUMENTS[7].image}" alt="${STATUTORY_DOCUMENTS[7].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div class="mono" style="width:38%; font-size:9px; color:#374151; line-height:1.5;">
              <div><strong>Issuing Authority:</strong><br />${STATUTORY_DOCUMENTS[7].authority}</div>
              <div style="margin-top:4px;"><strong>Credential Ref:</strong><br />${STATUTORY_DOCUMENTS[7].ref}</div>
              <div style="margin-top:5px; font-family:sans-serif; font-size:9px; color:#4b5563; line-height:1.4; border-top:1px solid #e5e7eb; padding-top:4px;">
                ${STATUTORY_DOCUMENTS[7].description}
              </div>
              <div style="margin-top:6px; font-size:8.2px; color:#166534; background:#dcfce7; padding:2px 6px; border:1px solid #86efac; display:inline-block;">
                ✓ Standard 15% VAT Authorized
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sheet-footer mono">
      <span>YEBIS ENGINEERING PLC // OFFICIAL QUALIFICATION DOSSIER</span>
      <span>SHEET 11 OF 12 // STATUTORY CERTIFICATES 07 &amp; 08 (LANDSCAPE)</span>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- SHEET 12: STATUTORY CERTIFICATE 09 + ATTESTATION & CONTACT -->
  <!-- ========================================== -->
  <section class="portfolio-sheet">
    <div class="sheet-header mono">
      <span>STATUTORY DOSSIER // EXECUTIVE ATTESTATION</span>
      <span>FINAL CERTIFICATION &amp; DISPATCH BUREAU</span>
    </div>

    <div class="sheet-body">
      <div>
        <span class="section-tag mono">/// SECTION 12: STATUTORY CERTIFICATION &amp; BUREAU CONTACT</span>
        <h2 class="section-title mono" style="margin-bottom:2px;">Competency Attestation &amp; Official Executive Sign-Off</h2>
        <p style="font-size:9.5px; color:#4b5563;">
          Final statutory registration document accompanied by the executive seal and contact directory of Yebis Engineering PLC.
        </p>
      </div>

      <!-- Doc 09 -->
      <div class="card" style="display:flex; gap:14px; align-items:center; padding:9px 12px;">
        <div style="width:36%; height:92mm; background:#ffffff; border:1px solid #9ca3af; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:3px; flex-shrink:0;">
          <img src="${STATUTORY_DOCUMENTS[8].image}" alt="${STATUTORY_DOCUMENTS[8].titleEnglish}" style="max-width:100%; max-height:100%; object-fit:contain;" />
        </div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:3px; margin-bottom:3px;">
            <span class="mono text-primary" style="font-size:10px; font-weight:700;">${STATUTORY_DOCUMENTS[8].annexNumber}</span>
            <span class="badge-green">${STATUTORY_DOCUMENTS[8].status}</span>
          </div>
          <h3 style="font-size:11px; font-weight:700; text-transform:uppercase; color:#000000; margin-bottom:2px;">
            ${STATUTORY_DOCUMENTS[8].titleEnglish}
          </h3>
          <p class="mono" style="font-size:9px; font-weight:700; color:#374151; margin-bottom:3px;">
            ${STATUTORY_DOCUMENTS[8].titleAmharic}
          </p>
          <div class="mono" style="font-size:8.5px; color:#4b5563; line-height:1.4;">
            <div><strong>Authority:</strong> ${STATUTORY_DOCUMENTS[8].authority}</div>
            <div><strong>${STATUTORY_DOCUMENTS[8].ref}</strong></div>
          </div>
          <p style="font-size:9px; color:#4b5563; line-height:1.4; border-top:1px solid #e5e7eb; padding-top:4px; margin-top:4px;">
            ${STATUTORY_DOCUMENTS[8].description}
          </p>
        </div>
      </div>

      <!-- Attestation Box -->
      <div style="background:#fef3c7; border:1px solid #fcd34d; border-left:4px solid #8d4b00; padding:10px 14px;">
        <span class="mono" style="font-size:9.8px; font-weight:700; color:#8d4b00; text-transform:uppercase; display:block; margin-bottom:3px;">
          EXECUTIVE ATTESTATION &amp; CORPORATE WARRANTY:
        </span>
        <p style="font-size:9.2px; color:#374151; line-height:1.45; margin-bottom:6px;">
          We hereby certify that the technical credentials, contract execution records, statutory licenses, and corporate information contained within this Qualification Dossier accurately reflect the authentic legal and operational standing of <strong>Yebis Engineering PLC (Grade 3 General Contractor)</strong> as registered with the Federal Democratic Republic of Ethiopia Ministry of Trade and Regional Integration and the Ministry of Urban Development and Construction.
        </p>
        <div class="mono" style="display:grid; grid-template-columns: 1fr 1fr; border-top:1px solid #fde68a; padding-top:5px; font-size:8.8px; color:#4b5563;">
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
      <div class="bg-dark" style="padding:11px 14px; border:1px solid #000000;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:4px; margin-bottom:6px;">
          <div>
            <h3 class="mono" style="font-size:13px; font-weight:800; text-transform:uppercase; color:#ffffff;">
              Yebis Engineering PLC
            </h3>
            <span class="mono" style="font-size:8.8px; color:#fbbf24; text-transform:uppercase;">
              Grade 3 General Contractor (GC-3) · Bole Sub-City, Addis Ababa, Ethiopia
            </span>
          </div>
          <div class="mono" style="font-size:8.5px; color:#a1a1aa; text-align:right;">
            <span>TRADE REG: BL/AA/1/0001088/2004</span> · <span>TIN: 0001985917</span>
          </div>
        </div>

        <div class="mono" style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px; font-size:8.8px;">
          <div>
            <span style="color:#fbbf24; font-weight:700; display:block; margin-bottom:2px;">HEADQUARTERS</span>
            <p style="color:#d4d4d8; line-height:1.4;">
              Cameroon Street, Yebis Tower<br />
              Bole Sub-City, Woreda 03<br />
              Addis Ababa, Ethiopia
            </p>
          </div>
          <div>
            <span style="color:#fbbf24; font-weight:700; display:block; margin-bottom:2px;">DIRECT TELEPHONY</span>
            <p style="color:#d4d4d8; line-height:1.4;">
              HQ: +251 91 151 7784<br />
              Tenders: +251 91 387 9093<br />
              Operations: +251 91 162 9879
            </p>
          </div>
          <div>
            <span style="color:#fbbf24; font-weight:700; display:block; margin-bottom:2px;">DIGITAL DISPATCH</span>
            <p style="color:#d4d4d8; line-height:1.4;">
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

// Execute Edge using execFileSync directly
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
