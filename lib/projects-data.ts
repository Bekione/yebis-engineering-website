import { IMG } from "./site-images";

export type ClientCategory =
  | "government"
  | "healthcare"
  | "ngo"
  | "educational"
  | "commercial"
  | "residential";

export type ProjectSector =
  | "all"
  | "healthcare"
  | "housing"
  | "education"
  | "civil"
  | "commercial"
  | "specialized";

export type ExecutionScope =
  | "turnkey-gc"
  | "specialized-scope"
  | "interior-finishing"
  | "infrastructure";

export interface ProjectRecord {
  id: string;
  slug?: string;
  recordNumber: number;
  title: string;
  projectType: string;
  client: string;
  clientCategory: ClientCategory;
  sector: ProjectSector;
  scopeType: ExecutionScope;
  region: string;
  location: string;
  completion: string;
  completionYear: string;
  calendarSystem: "G.C." | "E.C." | "Both";
  contractCostETB: string;
  costNumeric: number;
  scale: string;
  summary: string;
  scopeBreakdown: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  image: string;
  isVerifiedDocumentRecord?: boolean;
  isFeatured?: boolean;
}

export const ALL_PROJECTS: ProjectRecord[] = [
  // ==========================================
  // OFFICIAL VERIFIED WORK PERFORMANCE RECORDS (1 TO 16)
  // ==========================================
  {
    id: "YEB-WP-015",
    recordNumber: 15,
    title: "Chole Technical & Vocational Training (TVET) College Campus Expansion",
    projectType: "Vocational Training Campus Complex",
    client: "Oromia Technical & Vocational Education & Training Bureau (OTVETB)",
    clientCategory: "educational",
    sector: "education",
    scopeType: "turnkey-gc",
    region: "Oromia Regional State",
    location: "Chole, Arsi Zone, Oromia",
    completion: "May 2019 G.C. / Ginbot 2011 E.C.",
    completionYear: "2019",
    calendarSystem: "Both",
    contractCostETB: "ETB 9,645,940.10",
    costNumeric: 9645940.1,
    scale: "Multi-Building Academic & Workshop Campus",
    summary:
      "Comprehensive institutional campus expansion of Chole TVET College under the Oromia Technical & Vocational Education & Training Bureau (Contract Bid No: OTVETB/NCB/EXP/16/2018). Turnkey general contracting spanning new multi-classroom blocks, heavy vocational training workshops, faculty administrative units, sanitary wet infrastructure, and campus circulation works.",
    scopeBreakdown: [
      "Reinforced concrete frame structures, suspended slabs, and foundations",
      "Industrial vocational training workshops with high-clearance bays",
      "Multi-classroom academic wings with passive cross-ventilation",
      "Faculty administration offices, staff lounge, and sanitary facilities",
      "Compound surface drainage channels, security perimeter, and access gates",
    ],
    technicalSpecs: [
      { label: "Tender / Bid No", value: "OTVETB/NCB/EXP/16/2018" },
      { label: "Contract Period", value: "240 Calendar Days (+ 365 Days DLP)" },
      { label: "Client Authority", value: "Oromia TVET Bureau (OTVETB)" },
      { label: "Contract Mode", value: "Turnkey General Contractor (BC / GC)" },
    ],
    image: IMG.choleTvetCollege,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-016",
    recordNumber: 16,
    title: "Secondary Livestock Market Center & Trade Infrastructure — Woliso",
    projectType: "Agricultural Trade & Civil Infrastructure",
    client: "Oromia Trade & Market Development Bureau / AGPII",
    clientCategory: "government",
    sector: "civil",
    scopeType: "turnkey-gc",
    region: "Oromia Regional State",
    location: "Woliso Town, South West Shewa Zone",
    completion: "2019 G.C. / 2011 E.C.",
    completionYear: "2019",
    calendarSystem: "Both",
    contractCostETB: "ETB 9,236,778.89",
    costNumeric: 9236778.89,
    scale: "Regional Livestock Trading Facility",
    summary:
      "Major civil and trade infrastructure development executed under the Oromia Regional Government Trade and Market Development Bureau and the Agricultural Growth Program (AGPII) in partnership with Woliso Town Construction Office (Ref: DTGB/B-10/214). Delivered regional livestock auction rings, cattle holding pens, veterinary inspection corridors, heavy basalt stone retaining structures, administrative market offices, and site-wide stormwater systems.",
    scopeBreakdown: [
      "Extensive earthworks, mass grading, and heavy basalt stone retaining walls",
      "Heavy-gauge galvanized steel livestock containment pens and sorting chutes",
      "Veterinary quarantine, cattle loading ramps, and weighing scale bays",
      "Administrative market management office building and revenue collection booths",
      "High-capacity surface drainage culverts and wastewater containment lagoons",
    ],
    technicalSpecs: [
      { label: "Contract Reference", value: "DTGB/B-10/214 (Agreement Nov 30, 2018)" },
      { label: "Development Program", value: "Agricultural Growth Program II (AGPII)" },
      { label: "Supervising Body", value: "Woliso Town Construction Office & OCB" },
      { label: "Executed Certificate", value: "ETB 8,183,139.01 (Final Certified Handover)" },
    ],
    image: IMG.oromiyaLivestockMarket,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-012",
    recordNumber: 12,
    title: "Cancer Care Home & Specialized Patient Residence",
    projectType: "Medical Residential Complex",
    client: "Cancer Care Ethiopia",
    clientCategory: "ngo",
    sector: "healthcare",
    scopeType: "turnkey-gc",
    region: "Oromia Special Zone",
    location: "Burayu",
    completion: "02/02/2016 G.C.",
    completionYear: "2016",
    calendarSystem: "G.C.",
    contractCostETB: "ETB 8,186,933.04",
    costNumeric: 8186933.04,
    scale: "Multi-Story Care Facility",
    summary:
      "Turnkey construction of a dedicated cancer patient palliative recovery complex. Delivered patient lodging wings, clinical consultation rooms, commercial kitchen and communal dining halls, barrier-free accessibility ramps, and durable anti-microbial interior finishes.",
    scopeBreakdown: [
      "Reinforced concrete skeletal superstructure",
      "Specialized clinical and residential plumbing networks",
      "Hygienic anti-bacterial wall and floor coverings",
      "Therapeutic landscaped recovery courtyard",
      "Complete electrical distribution & backup power connection",
    ],
    technicalSpecs: [
      { label: "Structural Frame", value: "Cast-in-place C30 Reinforced Concrete" },
      { label: "Walling Material", value: "High-density 20cm Hollow Concrete Blocks" },
      { label: "Accessibility", value: "Full 1:12 slope barrier-free ramp network" },
      { label: "Contract Mode", value: "Turnkey General Contractor (GC)" },
    ],
    image: IMG.cancerCareEth,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-006",
    recordNumber: 6,
    title: "Sululta TVET College Heavy Technical Workshop Facility",
    projectType: "Industrial Workshop",
    client: "Oromia S/Z Sululta TVET College",
    clientCategory: "educational",
    sector: "education",
    scopeType: "turnkey-gc",
    region: "Oromia Special Zone",
    location: "Sululta",
    completion: "23/12/2004 E.C. (approx. 2012 G.C.)",
    completionYear: "2012",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 6,958,545.53",
    costNumeric: 6958545.53,
    scale: "Industrial Training Complex",
    summary:
      "Comprehensive technical workshop complex built for vocational engineering training. Integrated structural steel portal framing with heavy reinforced masonry, vibration-resistant 250mm industrial concrete floor slab-on-grade, 3-phase heavy industrial power grids, and overhead gantry crane runway beams.",
    scopeBreakdown: [
      "Industrial structural steel truss & portal frame erection",
      "250mm reinforced concrete slab with hardener topping",
      "3-phase high-amperage industrial power reticulation",
      "Mechanical repair service pits with drainage sumps",
      "Metal louvered ventilation and industrial bay doors",
    ],
    technicalSpecs: [
      { label: "Clear Span", value: "24m unobstructed steel portal trusses" },
      { label: "Floor Capacity", value: "45 kN/m² heavy machinery rating" },
      { label: "Power Supply", value: "380V / 3-phase industrial busbar system" },
      { label: "Contract Mode", value: "Turnkey General Contracting" },
    ],
    image: IMG.sulultaTvetCollege,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-011",
    recordNumber: 11,
    title: "ALERT Specialized Hospital — Phase II Clinical Wing Expansion",
    projectType: "Hospital Wing Expansion",
    client: "ALERT Hospital",
    clientCategory: "healthcare",
    sector: "healthcare",
    scopeType: "turnkey-gc",
    region: "Addis Ababa",
    location: "Addis Ababa (Zenebework)",
    completion: "09/04/2007 E.C. (approx. 2014 G.C.)",
    completionYear: "2014",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 2,280,077.60",
    costNumeric: 2280077.6,
    scale: "Two-Story Medical Wing",
    summary:
      "Structural extension and turnkey modernization of specialized clinical facilities at ALERT (All Africa Leprosy, Tuberculosis and Rehabilitation Training Centre). Included patient examination bays, doctor consult suites, infectious disease isolation barriers, and acoustic ceilings.",
    scopeBreakdown: [
      "Reinforced concrete structural frame extension",
      "Medical sanitary core distribution and drainage stacks",
      "Acoustic suspended ceiling tiles with recessed illumination",
      "Aluminum glazed partitions and heavy hospital doors",
      "Smooth hygienic washable plaster & epoxy coatings",
    ],
    technicalSpecs: [
      { label: "Hygiene Standard", value: "Medical Grade Washable Wall Finishes" },
      { label: "Floor Screed", value: "Anti-static seamless epoxy coating" },
      { label: "Sanitary", value: "Hands-free scrub sinks and clinical drainage" },
      { label: "Client Sector", value: "Federal Specialized Public Hospital" },
    ],
    image: IMG.alertClinicalWing,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-009",
    recordNumber: 9,
    title: "Bole Arabissa G+4 Condominium Multi-Story Block",
    projectType: "G+4 Residential Condominium",
    client: "Addis Ababa Housing Development Project Office (AAHDPO)",
    clientCategory: "government",
    sector: "housing",
    scopeType: "turnkey-gc",
    region: "Addis Ababa",
    location: "Bole Arabissa Site, Addis Ababa",
    completion: "19/05/2014 G.C.",
    completionYear: "2014",
    calendarSystem: "G.C.",
    contractCostETB: "ETB 2,093,916.93",
    costNumeric: 2093916.93,
    scale: "G+4 Residential Block",
    summary:
      "Full construction of a multi-family residential building block under the Addis Ababa Housing Development Project Office (AAHDPO) Lideta Sub-City Branch as part of the city's housing expansion and urban renewal relocation framework (Supervised by CAE PLC / Habtamu International Consulting). Executed complete reinforced concrete skeleton, exterior and interior hollow block masonry, precast floor slab coordination, terrazzo public staircases, and internal plumbing stacks.",
    scopeBreakdown: [
      "Substructure excavation, pad footings, and grade beams",
      "G+4 cast-in-place reinforced columns, beams, and suspended slabs",
      "Exterior 20cm HCB walling and interior 10cm/15cm partitions",
      "Monolithic polished terrazzo staircases with steel balustrades",
      "Internal water supply reticulation and vertical drainage stacks",
    ],
    technicalSpecs: [
      { label: "Building Height", value: "Ground + 4 Suspended Levels" },
      { label: "Supervising Consultant", value: "CAE PLC / Habtamu International Consulting" },
      { label: "Project Office", value: "AAHDPO Lideta Sub-City Branch" },
      { label: "Urban Program", value: "Lideta Renewal & Bole Arabissa Housing Scheme" },
    ],
    image: IMG.arabsaCondominium,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-013",
    recordNumber: 13,
    title: "Kirkos Sub-City Health Office — Security Perimeter & Civil Boundary Infrastructure",
    projectType: "Municipal Civil Infrastructure",
    client: "Kirkos Sub-City (K/K/S) Health Office",
    clientCategory: "government",
    sector: "civil",
    scopeType: "specialized-scope",
    region: "Addis Ababa",
    location: "Woredas 01, 03, and 05, Addis Ababa",
    completion: "30/03/2009 E.C. (approx. 2016 G.C.)",
    completionYear: "2016",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 1,971,998.34",
    costNumeric: 1971998.34,
    scale: "3 Municipal Compound Perimeters",
    summary:
      "Multi-site civil perimeter infrastructure contract across three municipal health centers in Kirkos Sub-City. Constructed heavy dressed basalt stone retaining and boundary walls, structural concrete columns, heavy-duty anti-climb steel palisade fencing, automated vehicle gates, and stormwater interceptor channels.",
    scopeBreakdown: [
      "Dressed basalt stone foundation and boundary masonry",
      "Reinforced concrete tying columns and coping capping",
      "Heavy gauge structural steel vehicular access gates",
      "Compound surface drainage and runoff culverts",
      "Pedestrian security intake barriers and turnstiles",
    ],
    technicalSpecs: [
      { label: "Locations", value: "Woreda 01, 03, and 05 Health Centers" },
      { label: "Foundation", value: "Mass concrete footing with dressed stone" },
      { label: "Metal Fabrications", value: "Anti-corrosion primed steel palisades" },
      { label: "Client Authority", value: "Kirkos Sub-City Administration" },
    ],
    image: IMG.kirkosHealthCenterFence,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },
  {
    id: "YEB-WP-003",
    recordNumber: 3,
    title: "ALERT Specialized Hospital — Outpatient Reception, Waiting & Clinical Overhaul",
    projectType: "Specialized Healthcare Modernization",
    client: "ALERT Hospital",
    clientCategory: "healthcare",
    sector: "healthcare",
    scopeType: "specialized-scope",
    region: "Addis Ababa",
    location: "Addis Ababa (Zenebework)",
    completion: "21/10/2002 E.C. (approx. 2010 G.C.)",
    completionYear: "2010",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 1,759,179.43",
    costNumeric: 1759179.43,
    scale: "Outpatient Reception Complex",
    summary:
      "Comprehensive spatial reconfiguration and high-traffic healthcare finishing for ALERT's central patient reception and triage waiting halls. Upgraded acoustic ceiling profiles, installed heavy-traffic anti-microbial floor screeds, durable aluminum glazed partitions, and specialized sanitary facilities.",
    scopeBreakdown: [
      "Demolition and structural reconfiguration of interior walls",
      "Heavy-duty hospital grade floor screed and vitrified tiling",
      "Acoustic ceiling baffles for ambient noise reduction",
      "Aluminum service reception counters and triage desks",
      "Modernized sanitary plumbing for high patient throughput",
    ],
    technicalSpecs: [
      { label: "Traffic Rating", value: "High-volume clinical outpatient traffic" },
      { label: "Ceiling System", value: "Moisture-resistant acoustic tiles" },
      { label: "Client", value: "ALERT Specialized Medical Centre" },
      { label: "Contract Mode", value: "Specialized Healthcare Renovation" },
    ],
    image: IMG.alertOutpatientReception,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },
  {
    id: "YEB-WP-014",
    recordNumber: 14,
    title: "Bole International Airport — Customs Logistics Warehouse & Cargo Facility",
    projectType: "Industrial Logistics Warehouse",
    client: "Bole Airport Customs Branch (Ethiopian Customs Commission)",
    clientCategory: "government",
    sector: "commercial",
    scopeType: "turnkey-gc",
    region: "Addis Ababa",
    location: "Bole International Airport Cargo Terminal",
    completion: "08/11/2018 G.C.",
    completionYear: "2018",
    calendarSystem: "G.C.",
    contractCostETB: "ETB 1,067,357.68",
    costNumeric: 1067357.68,
    scale: "Aviation Cargo Warehouse",
    summary:
      "Design coordination and civil execution of a secure customs holding and cargo inspection warehouse at Addis Ababa Bole International Airport. Features heavy steel portal framing, monolithic concrete slab with dry-shake metallic hardener to support constant heavy forklift wheel loads, and automated motorized industrial roller shutters.",
    scopeBreakdown: [
      "Heavy structural steel framing and galvanized purlins",
      "Laser-levelled concrete floor with metallic surface hardener",
      "Motorized industrial roller shutter loading bays",
      "High-security customs inspection counters and cages",
      "Exterior asphalt-graded heavy vehicle loading aprons",
    ],
    technicalSpecs: [
      { label: "Floor Surface", value: "Monolithic quartz wear-resistant screed" },
      { label: "Roofing", value: "Insulated zinc-aluminum profile sheeting" },
      { label: "Security Level", value: "Aviation Customs Bonded Facility" },
      { label: "Client", value: "Ethiopian Customs Commission" },
    ],
    image: IMG.boleAirportCustoms,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-008",
    recordNumber: 8,
    title: "Yaya Mulka Community Primary School Block",
    projectType: "Educational Infrastructure",
    client: "World Vision Ethiopia",
    clientCategory: "ngo",
    sector: "education",
    scopeType: "turnkey-gc",
    region: "North Shoa, Oromia",
    location: "Yaya Mulka (Yaya Gulele)",
    completion: "26/10/2005 E.C. (approx. 2013 G.C.)",
    completionYear: "2013",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 986,327.40",
    costNumeric: 986327.4,
    scale: "4-Classroom Complex & Staff Unit",
    summary:
      "Complete educational facility construction in North Shoa under World Vision Ethiopia's rural development initiative. Built a standard 4-classroom academic block, staff administrative office, dry VIP latrines, and natural cross-ventilation window assemblies designed for student comfort.",
    scopeBreakdown: [
      "Stone masonry foundation and reinforced ground tie-beams",
      "Hollow concrete block superstructure with smooth plaster",
      "Treated timber truss roofing with EGA color-coated sheets",
      "Steel security casement windows with safety wire mesh",
      "VIP latrine block with sealed septic tank and soakaway pit",
    ],
    technicalSpecs: [
      { label: "Capacity", value: "240+ primary school students" },
      { label: "Sanitation", value: "Dedicated multi-compartment VIP latrines" },
      { label: "Ventilation", value: "High-airflow passive cross-draft design" },
      { label: "Client Partner", value: "World Vision Ethiopia" },
    ],
    image: IMG.gurageHanddugWell,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },
  {
    id: "YEB-WP-005",
    recordNumber: 5,
    title: "St. Peter's Specialized Hospital — X-Ray & Radiology Suite Radiation Shielding",
    projectType: "Specialized Medical Radiation Suite",
    client: "St. Peter's Specialized Hospital",
    clientCategory: "healthcare",
    sector: "healthcare",
    scopeType: "specialized-scope",
    region: "Addis Ababa",
    location: "Addis Ababa (Entoto Road)",
    completion: "30/08/2012 G.C. / E.C.",
    completionYear: "2012",
    calendarSystem: "Both",
    contractCostETB: "ETB 886,096.97",
    costNumeric: 886096.97,
    scale: "Radiology Imaging Suite",
    summary:
      "High-precision engineering and architectural shielding for diagnostic X-ray suites. Applied 2mm lead-sheet shielding and high-density baryte radiation-attenuating plaster to all containment walls, mounted lead-lined radiation barrier doors, and installed certified lead-glass observation windows.",
    scopeBreakdown: [
      "Baryte heavy-aggregate radiation shielding wall plaster",
      "Precision lead-sheet interlinings with overlapping seams",
      "Certified lead-glass technician observation console windows",
      "Reinforced concrete floor mounting pad for imaging machines",
      "Dedicated clean-power isolated electrical conduits",
    ],
    technicalSpecs: [
      { label: "Shielding Spec", value: "2.0mm Pb Lead Equivalent Baryte Plaster" },
      { label: "Observation Window", value: "Certified Radiation Attenuating Lead Glass" },
      { label: "Medical Gas", value: "Dedicated conduit pathways for clinical suction" },
      { label: "Client", value: "Federal Specialized Hospital" },
    ],
    image: IMG.cleanroom,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-002",
    recordNumber: 2,
    title: "St. Paul's Hospital Millennium Medical College — Clinical & Admin Expansion",
    projectType: "Clinical Office Expansion",
    client: "Techtera Engineering / St. Paul's Hospital",
    clientCategory: "healthcare",
    sector: "healthcare",
    scopeType: "specialized-scope",
    region: "Addis Ababa",
    location: "St. Paul's Hospital Campus, Addis Ababa",
    completion: "30/06/2003 E.C. (approx. 2011 G.C.)",
    completionYear: "2011",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 650,749.16",
    costNumeric: 650749.16,
    scale: "Administrative & Clinical Wing",
    summary:
      "Structural extension and interior modernization of medical administration facilities at St. Paul's Hospital. Constructed modular clinical consultation rooms, sound-dampened administrative corridors, dedicated sanitary wet blocks, and integrated telecom/network cabling conduits.",
    scopeBreakdown: [
      "Masonry partition walls and structural concrete ties",
      "Acoustic suspended ceiling system",
      "Terrazzo floor tiling and sanitary plumbing fixtures",
      "Medical office electrical rewiring and distribution board",
      "Hardwood solid core doors and security window grilles",
    ],
    technicalSpecs: [
      { label: "Location", value: "St. Paul's Millennium Medical College" },
      { label: "Flooring", value: "Vitrified slip-resistant clinical tiles" },
      { label: "Scope Type", value: "Specialized Scope & Office Expansion" },
      { label: "Contract Value", value: "ETB 650,749.16" },
    ],
    image: IMG.stPaulMedicalCollege,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },
  {
    id: "YEB-WP-010",
    recordNumber: 10,
    title: "Sela Dingay Animal Health Clinic & Regional Veterinary Station",
    projectType: "Veterinary Institutional Facility",
    client: "Ethiopian Orthodox Church (EOC-DICAC) & Family",
    clientCategory: "educational",
    sector: "civil",
    scopeType: "turnkey-gc",
    region: "North Shoa, Amhara",
    location: "Sela Dingay",
    completion: "19/06/2007 E.C. (approx. 2015 G.C.)",
    completionYear: "2015",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 647,715.50",
    costNumeric: 647715.5,
    scale: "Veterinary Clinic & Crush Complex",
    summary:
      "Construction of a regional veterinary clinic and livestock health station in North Shoa. Features livestock examination crush pens, medication cold-chain storage rooms, chemical-resistant wash-down floor screeds, and sanitary wastewater drainage lagoons.",
    scopeBreakdown: [
      "Deep dressed stone masonry substructure",
      "Livestock restraint crushes with galvanized steel railings",
      "Hygienic washable examination room finishes",
      "Rainwater collection reservoir and surface drainage culverts",
      "Solar battery storage room for vaccine refrigeration",
    ],
    technicalSpecs: [
      { label: "Sanitary Drain", value: "Heavy-washdown agricultural drainage" },
      { label: "Cold Storage", value: "Insulated vaccine pharmaceutical store" },
      { label: "Client Organization", value: "EOC-DICAC Development Commission" },
      { label: "Location", value: "Sela Dingay, Amhara Regional State" },
    ],
    image: IMG.seladingayAnimalHealth,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },
  {
    id: "YEB-WP-001",
    recordNumber: 1,
    title: "World Vision 150m³ Reinforced Concrete Water Reservoir",
    projectType: "Potable Water Reservoir",
    client: "World Vision Ethiopia",
    clientCategory: "ngo",
    sector: "civil",
    scopeType: "infrastructure",
    region: "S.N.N.P.R.S (Central Ethiopia)",
    location: "Gurage Zone, Agena",
    completion: "23/03/2002 E.C. (approx. 2009 G.C.)",
    completionYear: "2009",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 623,604.92",
    costNumeric: 623604.92,
    scale: "150,000 Liters Capacity",
    summary:
      "Civil engineering and hydraulic construction of a 150 cubic meter potable water storage reservoir in Agena, Gurage Zone. Scope encompassed deep bedrock excavation, monolithic cast-in-place C30 watertight concrete tank with hydrophilic waterstops, inlet/outlet valve control chambers, and perimeter security fencing.",
    scopeBreakdown: [
      "Bulk rock excavation and compacted gravel foundation pad",
      "Watertight C30 concrete retaining walls and reinforced roof slab",
      "Hydrophilic swelling waterstop gaskets on construction joints",
      "Galvanized ductile iron piping, bypass valves, and air vents",
      "Stone masonry valve control house and security enclosure",
    ],
    technicalSpecs: [
      { label: "Volume Capacity", value: "150 m³ (150,000 Liters Potable Water)" },
      { label: "Concrete Grade", value: "C30/37 Watertight Mix with Waterstop Joints" },
      { label: "Hydraulic Head", value: "Gravity fed distribution main" },
      { label: "Client Partner", value: "World Vision Ethiopia" },
    ],
    image: IMG.gurageWaterReservoir,
    isVerifiedDocumentRecord: true,
    isFeatured: true,
  },
  {
    id: "YEB-WP-004",
    recordNumber: 4,
    title: "Alaba Kulito Housing Apartment Condominium Blocks",
    projectType: "Residential Condominium",
    client: "Alaba Housing Project Office",
    clientCategory: "government",
    sector: "housing",
    scopeType: "turnkey-gc",
    region: "S.N.N.P.R.S (Central Ethiopia)",
    location: "Alaba Kulito",
    completion: "30/10/2003 E.C. (approx. 2011 G.C.)",
    completionYear: "2011",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 497,939.96",
    costNumeric: 497939.96,
    scale: "Public Housing Apartments",
    summary:
      "Public residential housing development in Alaba Kulito. Delivered multi-family residential blocks featuring reinforced concrete frames, hollow concrete block perimeter walls, internal room partitions, cement tile flooring, and standard communal stairways.",
    scopeBreakdown: [
      "Pad footings and reinforced concrete grade beams",
      "Cast-in-place columns and suspended floor slabs",
      "HCB masonry walling with sand-cement exterior plaster",
      "Corrugated iron roof trusses and gutters",
      "Sanitary drainage and domestic water branch piping",
    ],
    technicalSpecs: [
      { label: "Project Type", value: "Municipal Public Housing Block" },
      { label: "Masonry", value: "Class A Hollow Concrete Blocks" },
      { label: "Client Authority", value: "Alaba Housing Project Office" },
      { label: "Region", value: "SNNPRS / Central Ethiopia" },
    ],
    image: IMG.alabaCondominiumBlock,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },
  {
    id: "YEB-WP-007",
    recordNumber: 7,
    title: "Gurage Zone Community Hand-Dug Wells & Health Post Overhaul",
    projectType: "Rural Water & Health Sanitation",
    client: "The Hunger Project Ethiopia",
    clientCategory: "ngo",
    sector: "civil",
    scopeType: "infrastructure",
    region: "S.N.N.P.R.S (Central Ethiopia)",
    location: "Gurage Zone",
    completion: "20/04/2004 E.C. (approx. 2011 G.C.)",
    completionYear: "2011",
    calendarSystem: "E.C.",
    contractCostETB: "ETB 397,227.90",
    costNumeric: 397227.9,
    scale: "Community Wells & Clinic Outpost",
    summary:
      "Community infrastructure delivery under The Hunger Project. Excavation of protected hand-dug potable wells with reinforced concrete sanitary aprons and Afridev hand pumps, alongside structural repairs and re-roofing of local health post consultation buildings.",
    scopeBreakdown: [
      "Hand-dug well sinking through basalt and clay strata",
      "Precast concrete lining rings and surface sanitary aprons",
      "Installation of heavy-duty community hand pumps",
      "Health post roof rehabilitation and sanitary latrines",
      "Surface drainage soakaway pits to prevent water contamination",
    ],
    technicalSpecs: [
      { label: "Pump Type", value: "Deep-well community hand pumps" },
      { label: "Sanitary Apron", value: "Reinforced cast concrete with drainage apron" },
      { label: "Impact", value: "Clean water access for rural communities" },
      { label: "Client", value: "The Hunger Project Ethiopia" },
    ],
    image: IMG.gurageHanddugWell,
    isVerifiedDocumentRecord: true,
    isFeatured: false,
  },

  // ==========================================
  // FLAGSHIP COMMERCIAL & PRIVATE DEVELOPMENTS
  // ==========================================
  {
    id: "YEB-DEV-001",
    slug: "commercial-office-kazanchis",
    recordNumber: 17,
    title: "Commercial Office Building — Kazanchis Financial Core",
    projectType: "High-Rise Commercial Building",
    client: "Commercial Development Entity",
    clientCategory: "commercial",
    sector: "commercial",
    scopeType: "turnkey-gc",
    region: "Addis Ababa",
    location: "Kazanchis, Addis Ababa",
    completion: "2024 G.C.",
    completionYear: "2024",
    calendarSystem: "G.C.",
    contractCostETB: "Turnkey Contract Value Upon Request",
    costNumeric: 45000000,
    scale: "2B+G+8 Commercial Tower (12,200 SQM)",
    summary:
      "Grade-A multi-story commercial office building in the Kazanchis business center. Features two levels of below-grade parking, cast-in-place post-tensioned floor slabs, acoustic thermal double-glazed curtain wall facade, high-speed dual elevators, and full MEP building management systems.",
    scopeBreakdown: [
      "Deep foundation secant piles and double-basement shoring",
      "2B+G+8 monolithic reinforced concrete structural frame",
      "High-efficiency low-E double-glazed facade curtain wall",
      "Dual traction passenger elevators and emergency fire stairs",
      "Integrated building management (BMS), CCTV, and fire suppression",
    ],
    technicalSpecs: [
      { label: "Total Area", value: "12,200 SQM Gross Floor Area" },
      { label: "Substructure", value: "2 Basements (8.4m excavation depth)" },
      { label: "Concrete Grade", value: "C40/50 High-Strength Concrete" },
      { label: "Curtain Wall", value: "Low-E Double Glazed Unitized System" },
    ],
    image: IMG.kazanchisOfficeBldg,
    isVerifiedDocumentRecord: false,
    isFeatured: true,
  },
  {
    id: "YEB-DEV-002",
    recordNumber: 18,
    title: "Bespoke Luxury Private Residence — Bole",
    projectType: "High-End Residential Villa",
    client: "Private Client",
    clientCategory: "residential",
    sector: "housing",
    scopeType: "turnkey-gc",
    region: "Addis Ababa",
    location: "Bole, Addis Ababa",
    completion: "2023 G.C.",
    completionYear: "2023",
    calendarSystem: "G.C.",
    contractCostETB: "Private Contract",
    costNumeric: 18000000,
    scale: "G+2 Luxury Villa (850 SQM)",
    summary:
      "Ultra-modern private residential development executed with strict architectural tolerances. Delivered from foundation to luxury turnkey finishes, featuring handcrafted hardwood architectural joinery, automated lighting control, marble slab bathroom finishes, and landscaped security perimeter.",
    scopeBreakdown: [
      "Seismic-isolated reinforced concrete raft foundation",
      "Architectural fair-faced exposed concrete accent walls",
      "Imported Italian marble and solid hardwood parquet flooring",
      "Custom handcrafted walnut kitchen cabinetry and wardrobes",
      "Perimeter smart security and solar water heating integration",
    ],
    technicalSpecs: [
      { label: "Living Area", value: "850 SQM Across 3 Levels (G+2)" },
      { label: "Joinery", value: "Bespoke Hardwood & Concealed Hinges" },
      { label: "Energy", value: "Solar thermal central water heating" },
      { label: "Execution", value: "Full Turnkey General Contracting" },
    ],
    image: IMG.boleLuxuryResident,
    isVerifiedDocumentRecord: false,
    isFeatured: false,
  },
  {
    id: "YEB-DEV-003",
    recordNumber: 19,
    title: "CMC High-Density Residential Condominium Tower",
    projectType: "Multi-Unit Condominium Tower",
    client: "Urban Development Partnership",
    clientCategory: "residential",
    sector: "housing",
    scopeType: "turnkey-gc",
    region: "Addis Ababa",
    location: "CMC, Addis Ababa",
    completion: "2023 G.C.",
    completionYear: "2023",
    calendarSystem: "G.C.",
    contractCostETB: "Development Contract",
    costNumeric: 32000000,
    scale: "2B+G+10 Tower (84 Apartments)",
    summary:
      "84-unit urban residential condominium tower in the CMC residential corridor. Execution scope spanned deep basement civil excavation, high-strength concrete columns, precast floor coordination, dual elevators, anodized aluminum sliding windows, and full communal services.",
    scopeBreakdown: [
      "Two levels of underground parking and foundation tie beams",
      "10 suspended floor slabs in cast-in-place reinforced concrete",
      "Aluminum sliding windows and acoustic corridor partitions",
      "Dual 8-passenger elevator installations and standby power",
      "Centralized underground water reservoir and booster pumps",
    ],
    technicalSpecs: [
      { label: "Residential Units", value: "84 Multi-Family Apartments" },
      { label: "Scale", value: "2 Basements + Ground + 10 Stories" },
      { label: "Elevators", value: "2 x 8-Passenger High-Speed Lifts" },
      { label: "Water Storage", value: "100m³ Underground Buffer Tank" },
    ],
    image: IMG.cmcResidentialCondominium,
    isVerifiedDocumentRecord: false,
    isFeatured: false,
  },
  {
    id: "YEB-DEV-004",
    recordNumber: 20,
    title: "Corporate Headquarters Turnkey Interior Fit-Out",
    projectType: "Corporate Workplace Interior",
    client: "Private Corporate Enterprise",
    clientCategory: "commercial",
    sector: "specialized",
    scopeType: "interior-finishing",
    region: "Addis Ababa",
    location: "Bole Commercial Corridor",
    completion: "2024 G.C.",
    completionYear: "2024",
    calendarSystem: "G.C.",
    contractCostETB: "Contract Fit-Out",
    costNumeric: 9500000,
    scale: "3 Floor Plates (2,400 SQM)",
    summary:
      "Turnkey workplace transformation across 3 continuous commercial floor plates. Engineered acoustic suspended ceiling baffles, modular demountable glass office fronts, custom executive boardroom furniture, structured network cabling, and energy-efficient lighting scenes.",
    scopeBreakdown: [
      "Raised technical access flooring for underfloor cable management",
      "Double-glazed acoustic aluminum partition systems",
      "Custom manufactured solid wood executive boardroom tables",
      "Dimmable architectural LED scene lighting",
      "Dedicated server room with precision climate control and UPS",
    ],
    technicalSpecs: [
      { label: "Fit-Out Area", value: "2,400 SQM across 3 contiguous levels" },
      { label: "Acoustic Rating", value: "STC 48 acoustic glass walling" },
      { label: "Data Wiring", value: "Certified Category 6A structured copper" },
      { label: "Handover", value: "Full Turnkey Ready for Occupation" },
    ],
    image: IMG.corporateHqInterior,
    isVerifiedDocumentRecord: false,
    isFeatured: false,
  },
  {
    id: "YEB-DEV-005",
    recordNumber: 21,
    title: "Bole Medhanialem Architectural Facade & Glazing",
    projectType: "Architectural Envelope & Facade",
    client: "Commercial Asset Developer",
    clientCategory: "commercial",
    sector: "specialized",
    scopeType: "specialized-scope",
    region: "Addis Ababa",
    location: "Bole Medhanialem, Addis Ababa",
    completion: "2024 G.C.",
    completionYear: "2024",
    calendarSystem: "G.C.",
    contractCostETB: "Specialized Scope Contract",
    costNumeric: 14000000,
    scale: "3,800 SQM Envelope",
    summary:
      "Engineering, wind-load calculation, off-site precision fabrication, and on-site crane erection of 3,800 sqm of high-efficiency low-E thermal curtain walling, structural spider-glass entrance lobbies, and exterior extruded aluminum solar shading louvers.",
    scopeBreakdown: [
      "Structural engineering calculation for high-altitude wind pressure",
      "Extruded architectural aluminum framing with thermal break",
      "Spider-fitting point-supported frameless lobby canopy",
      "Extruded aerofoil solar shading louvers to reduce HVAC load",
      "Weatherproof silicone sealant perimeter articulation",
    ],
    technicalSpecs: [
      { label: "Envelope Area", value: "3,800 SQM Glazing & Cladding" },
      { label: "Glass Spec", value: "6mm Low-E + 12mm Argon + 6mm Clear" },
      { label: "Wind Load", value: "Engineered to withstand 1.4 kN/m² gusts" },
      { label: "Entrance Lobby", value: "12mm Toughened Spider Glass" },
    ],
    image: IMG.boleMedhanialemFacade,
    isVerifiedDocumentRecord: false,
    isFeatured: false,
  },
];

// Helper calculations
export const TOTAL_PROJECTS_COUNT = ALL_PROJECTS.length;
export const TOTAL_VERIFIED_PROJECTS_COUNT = ALL_PROJECTS.length;

export const TOTAL_RECORDED_SUM_ETB = ALL_PROJECTS.reduce(
  (acc, curr) => acc + curr.costNumeric,
  0
);

export const VERIFIED_PROJECTS = ALL_PROJECTS.filter(
  (p) => p.isVerifiedDocumentRecord
);

export const TOTAL_VERIFIED_SUM_ETB = VERIFIED_PROJECTS.reduce(
  (acc, curr) => acc + curr.costNumeric,
  0
);

export const FORMATTED_TOTAL_ETB = `ETB ${(TOTAL_RECORDED_SUM_ETB / 1_000_000).toFixed(0)}M+`;
export const FORMATTED_TOTAL_DECIMAL_ETB = `ETB ${(TOTAL_RECORDED_SUM_ETB / 1_000_000).toFixed(1)}M+`;
export const FORMATTED_VERIFIED_TOTAL_ETB = `ETB ${(TOTAL_VERIFIED_SUM_ETB / 1_000_000).toFixed(1)}M+`;
export const TOTAL_MILLIONS_ETB = Math.round(TOTAL_RECORDED_SUM_ETB / 1_000_000);

