import { IMG } from "@/lib/site-images";

export interface ArticleRecord {
  slug: string;
  id: string;
  category: string;
  tag: string;
  dispatch: string;
  title: string;
  subtitle: string;
  abstract: string;
  image: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  specs?: { label: string; value: string }[];
  content: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
}

export const ALL_INSIGHTS: ArticleRecord[] = [
  {
    slug: "taking-over-incomplete-concrete-skeletons",
    id: "INS-000",
    category: "SKELETON COMPLETION & FIT-OUT",
    tag: "CONTRACTOR FIELD ADVISORY",
    dispatch: "FIELD BRIEFING 01 // SKELETON COMPLETION & FIT-OUT",
    title:
      "Taking Over and Finishing Incomplete Concrete Skeletons: A Contractor's Guide for Property Owners in Addis Ababa",
    subtitle:
      "A structured engineering protocol for assessing structural soundness, remediating exposed rebar, and completing multi-story buildings without rework.",
    abstract:
      "Across Addis Ababa and regional hubs, numerous multi-story developments pause construction at the bare reinforced concrete skeleton stage. Transitioning an exposed frame into an occupied commercial or residential asset requires structured structural integrity checks, MEP conduit tracing, water ingress remediation, and sequenced interior trades. This practical briefing outlines Yebis Engineering's proven methodology for completing structural skeletons on schedule and within budget without costly rework.",
    image: IMG.superstructure,
    readTime: "8 MIN READ",
    date: "PRACTICAL GUIDE",
    author: {
      name: "Yeshitila Tedla Hlinaab",
      role: "Managing Director & Founder, Yebis Engineering",
    },
    specs: [
      { label: "Execution Model", value: "Skeleton to Turnkey" },
      { label: "Core Disciplines", value: "Structural, MEP & Finishing" },
      { label: "Building Typologies", value: "G+2 to G+10 Commercial/Res." },
      { label: "Code Standard", value: "Ethiopian Building Code (EBCS)" },
    ],
    content: [
      {
        heading: "1. The Reality of Paused Concrete Skeletons in Addis Ababa",
        paragraphs: [
          "In Addis Ababa's rapidly urbanizing landscape-from Bole and Kazanchis to CMC and Sarbet-it is common to see reinforced concrete frames standing exposed to the weather for months or even years. Changes in developer financing, material cost spikes, or disputes with previous contractors often leave buildings stalled midway through construction.",
          "When a new owner acquires an incomplete skeleton or a developer secures fresh capital to resume works, the temptation is to immediately hire finishing crews. However, moving directly into blockwork, plastering, or aluminum installations on an unvetted skeleton almost always leads to catastrophic leaks, plaster delamination, and MEP rework.",
        ],
        callout:
          "A concrete frame that has stood through multiple rainy seasons in Addis Ababa (Kiremt) requires thorough technical evaluation before any finishing contractor mobilizes on site.",
      },
      {
        heading: "2. The Four-Stage Structural & Technical Audit",
        paragraphs: [
          "Before taking responsibility for an existing skeleton, Yebis Engineering deploys an engineering audit team to complete four essential diagnostic assessments:",
          "A. Non-Destructive Concrete Testing: We utilize calibrated Schmidt rebound hammers and ultrasonic pulse velocity testing on columns and transfer beams to verify compressive strength against original structural design calculations (typically C25 to C35).",
          "B. Exposed Rebar & Column Starter Bars: Weathered, rusted starter bars must be wire-brushed, chemically passivated with anti-corrosion zinc-rich coatings, and evaluated for loss of cross-sectional area. Severely corroded rebar requires structural lap splices or epoxy-grouted anchor dowels.",
          "C. Top Slab Ponding & Micro-Cracking: Flat roof slabs left without waterproofing frequently develop micro-cracks from thermal expansion cycles under the intense Addis highland sun. Core moisture testing determines whether slab concrete has degraded.",
          "D. Buried Conduit & Sleeve Verification: Electrical and plumbing sleeves cast into slabs must be traced with endoscopes and pull-wires to clear concrete slurry blockages before screeding begins.",
        ],
      },
      {
        heading: "3. MEP Rough-In Coordination Before Wall Enclosures",
        paragraphs: [
          "The number one source of cost overrun on skeleton takeovers is chasing masonry walls to install pipes and conduits after the walls have already been built. Our protocol requires full BIM coordination of main vertical risers, drainage stacks, and primary electrical distribution trunks before hollow concrete block (HCB) walls are completed.",
          "Hydrostatic pressure testing (minimum 10 bars for 24 hours) is performed on all water supply piping before any wet trade or gypsum partition work commences. This guarantees zero hidden leaks behind finished surfaces.",
        ],
        callout:
          "Never allow plastering or floor screeds to be applied until all embedded pipes have passed documented hydrostatic pressure tests.",
      },
      {
        heading: "4. Single-Source Execution vs. Fragmented Trades",
        paragraphs: [
          "Taking over an incomplete skeleton requires seamless coordination between structural repair, civil blockwork, aluminum window fabrication, electrical distribution, and high-end joinery. When property owners hire separate independent artisans for each scope, no single party assumes responsibility when an aluminum window leaks or an electrical conduit is blocked by plaster.",
          "Under Yebis Engineering's single-source model, our in-house engineering superintendents manage every trade under unified quality governance, backed by a single contractual guarantee and transparent milestone billing.",
        ],
      },
    ],
  },
  {
    slug: "turnkey-contracting-vs-skeleton-only",
    id: "INS-001",
    category: "CONTRACTING STRATEGY",
    tag: "COMMERCIAL ADVISORY",
    dispatch: "FIELD BRIEFING 02 // DELIVERY MODELS",
    title:
      "Turnkey Contracting vs. Skeleton-Only Construction: What Ethiopian Developers Need to Know",
    subtitle:
      "Evaluating financial risk, material inflation, and trade coordination when choosing between structural-only and full turnkey construction.",
    abstract:
      "A practical comparison of contracting the structural skeleton only versus committing to full turnkey delivery. How material market fluctuations (cement, rebar) and trade coordination impact total project delivery across commercial and residential developments in Ethiopia.",
    image: IMG.concretePour,
    readTime: "7 MIN READ",
    date: "STRATEGY GUIDE",
    author: {
      name: "Yeshitila Tedla Hlinaab",
      role: "Managing Director & Founder, Yebis Engineering",
    },
    specs: [
      { label: "Contract Types", value: "Turnkey vs. Labor / Sub-Package" },
      { label: "Inflation Risk", value: "Fixed Unit Rate vs. Reimbursable" },
      { label: "Target Sectors", value: "Commercial & High-End Residential" },
      { label: "Standards", value: "MoUI / FIDIC Contract Standards" },
    ],
    content: [
      {
        heading: "1. The Dilemma: Two Phased Contracts vs. Integrated Delivery",
        paragraphs: [
          "Many Ethiopian developers divide construction into two distinct stages: first contracting the foundation, columns, and slabs (structural skeleton), and later looking for separate contractors for finishing, electrical, plumbing, and aluminum works.",
          "While this phased approach can align with staggered financing, it frequently creates accountability gaps. If a concrete slab was cast out of level or door openings were formed out of square, finishing contractors will charge substantial variation fees to correct the previous contractor's errors.",
        ],
      },
      {
        heading: "2. The Financial Dynamics: Cement and Rebar Volatility",
        paragraphs: [
          "In Ethiopia's market, cement and rebar prices fluctuate based on factory allocations, transport logistics, and currency adjustments. In a skeleton-only contract, developers bear concentrated exposure to these commodity price swings during the first 6 to 12 months.",
          "In contrast, a turnkey agreement with structured advance procurement and price-adjustment formulas enables contractor-led bulk purchasing at guaranteed distributor tiers, protecting the overall project timeline.",
        ],
        callout:
          "A turnkey contract locks in engineering coordination early, eliminating finger-pointing between the concrete crew and the finishing team.",
      },
      {
        heading: "3. When is Skeleton-Only Appropriate?",
        paragraphs: [
          "Skeleton-only contracting is justified when a developer's bank loan disbursement is tied strictly to structural milestones, or when final tenant fit-out specifications (e.g., retail mall vs. bank branch) are not yet known.",
          "However, developers choosing this path must ensure their structural contractor leaves precise starter bars, clean conduit runs, and level slabs ready for future finishing teams.",
        ],
      },
    ],
  },
  {
    slug: "proper-mep-sequencing-conduits-pressure-tests",
    id: "INS-002",
    category: "ELECTRICAL & PLUMBING (MEP)",
    tag: "TECHNICAL PROTOCOL",
    dispatch: "FIELD BRIEFING 03 // MEP COORDINATION",
    title:
      "Proper MEP Sequencing: Why Conduits and Pressure Tests Must Precede Plastering and Screeds",
    subtitle:
      "Preventing damaged walls and costly leaks through disciplined sequencing of mechanical, electrical, and plumbing rough-ins.",
    abstract:
      "Preventing broken walls and leaking pipes. Why electrical conduit paths, distribution boxes, and sanitary piping must undergo hydrostatic testing before gypsum partitions and floor screeds are placed in Ethiopian residential and commercial builds.",
    image: IMG.plumbing,
    readTime: "6 MIN READ",
    date: "TECHNICAL NOTE",
    author: {
      name: "Dawit Alemayehu",
      role: "Head of MEP & Building Systems, Yebis Engineering",
    },
    specs: [
      { label: "Systems", value: "PPR / HDPE / PVC / Conduit" },
      { label: "Testing", value: "10-Bar Hydrostatic (24h)" },
      { label: "Code", value: "EBCS 10 / Ethiopian Sanitary Code" },
      { label: "Sign-Off", value: "Joint Supervised Inspection" },
    ],
    content: [
      {
        heading: "1. The Most Expensive Mistake in Building Construction",
        paragraphs: [
          "Chipping away freshly plastered walls to fit plumbing pipes or cutting through finished floor screed to fix a forgotten electrical conduit is one of the most frustrating sights on a construction site.",
          "Yet on sites lacking rigorous engineering supervision, this mistake happens repeatedly. Plasterers are rushed to make the site look complete before the plumbing and electrical rough-ins have been checked.",
        ],
      },
      {
        heading: "2. The Mandatory 4-Step Testing Gate",
        paragraphs: [
          "At Yebis Engineering, no plasterer or floor finisher is permitted to commence work in any room until our MEP superintendent signs off on four verification gates:",
          "1. Sleeves and Penetrations: Ensuring all water lines pass through protective PVC sleeves rather than being cast directly in concrete.",
          "2. Hydrostatic Pressure Test: Potable water lines are pressurized to 10 bars for 24 continuous hours. Any drop in pressure indicates a loose joint or micro-fracture that must be repaired immediately.",
          "3. Drain Smoke & Gravity Flow Test: Waste pipes are flooded with water to confirm continuous minimum 1.5% fall to drainage risers with zero standing pockets.",
          "4. Conduit Mandrel Pull: All electrical conduits are verified using pull-wires and mandrels to guarantee cables can be pulled without obstruction.",
        ],
        callout:
          "Never apply ceramic tiles or gypsum board over unpressurized pipework. A hidden leak inside a finished bathroom can cost tens of thousands of birr in demolition and re-tiling.",
      },
    ],
  },
  {
    slug: "selecting-windows-doors-compound-gates",
    id: "INS-003",
    category: "ALUMINUM & METALWORK",
    tag: "MATERIALS ADVISORY",
    dispatch: "FIELD BRIEFING 04 // FENESTRATION",
    title:
      "Selecting Windows, External Doors & Compound Gates: Powder-Coated Aluminum vs. Hardwood Fabrication",
    subtitle:
      "A practical guide to balancing highland weather durability, UV exposure, security, and maintenance across Ethiopian building facades.",
    abstract:
      "Comparing weather resistance, UV durability, security, and long-term maintenance between high-grade aluminum systems and solid timber for Ethiopian highland conditions.",
    image: IMG.facade,
    readTime: "6 MIN READ",
    date: "MATERIALS GUIDE",
    author: {
      name: "Yeshitila Tedla Hlinaab",
      role: "Managing Director & Founder, Yebis Engineering",
    },
    specs: [
      { label: "Profiles", value: "Thermal Aluminum & Steel" },
      { label: "Finishes", value: "Electrostatic Powder Coat" },
      { label: "Glass", value: "Double Glazed 6mm+12A+6mm" },
      { label: "Fabrication", value: "In-House Workshop, Addis" },
    ],
    content: [
      {
        heading:
          "1. The Impact of Addis Ababa's Highland Climate on Building Envelopes",
        paragraphs: [
          "At an elevation of 2,355 meters, Addis Ababa experiences intense ultraviolet radiation during the day followed by brisk nighttime temperatures, combined with heavy rain during the four-month Kiremt rainy season.",
          "Standard timber doors and low-grade window frames warp, swell during wet months, and crack during dry sunny months. Choosing the proper material systems for external fenestration is critical for long-term comfort and energy performance.",
        ],
      },
      {
        heading: "2. Architectural Aluminum: Profile Thickness and Glazing",
        paragraphs: [
          "Many contractors cut corners by using thin 1.0mm or 1.2mm aluminum profiles for large windows. Under wind gusts, these light sections vibrate and allow water infiltration around perimeter seals.",
          "Yebis Engineering fabricates windows using certified minimum 1.8mm to 2.2mm structural aluminum profiles with electrostatically baked powder coatings, paired with EPDM rubber gaskets and perimeter structural silicone that withstands highland UV exposure without hardening.",
        ],
        callout:
          "Always verify profile wall thickness (minimum 1.8mm for external windows) and specify double-glazed sealed units for acoustic and thermal insulation on busy roads.",
      },
    ],
  },
  {
    slug: "restoring-aging-damaged-buildings",
    id: "INS-004",
    category: "RENOVATION & REPAIR",
    tag: "DIAGNOSTIC GUIDE",
    dispatch: "FIELD BRIEFING 05 // STRUCTURAL REPAIR",
    title:
      "Restoring Aging or Damaged Buildings: Remedying Roof Slab Leaks, Wall Cracks, and Dampness",
    subtitle:
      "A contractor's diagnostic approach to repairing older residential villas, commercial blocks, and institutional compounds.",
    abstract:
      "A contractor's diagnostic approach to repairing older villas and commercial properties. Proven techniques for elastomeric slab waterproofing, crack stabilization, and facade rejuvenation.",
    image: IMG.renovation,
    readTime: "8 MIN READ",
    date: "FIELD ADVISORY",
    author: {
      name: "Yeshitila Tedla Hlinaab",
      role: "Managing Director & Founder, Yebis Engineering",
    },
    specs: [
      { label: "Scope", value: "Slab, Masonry & Drainage" },
      { label: "Waterproofing", value: "Polyurethane & Bituminous" },
      { label: "Crack Repair", value: "Epoxy Injection & Helical Ties" },
      { label: "Compliance", value: "Structural Retrofit Standards" },
    ],
    content: [
      {
        heading: "1. The Three Warning Signs of Water Ingress",
        paragraphs: [
          "Water is the primary enemy of reinforced concrete and masonry in Ethiopia. Most renovation inquiries we receive involve one of three symptoms: bubbling paint on ceilings, white efflorescence salt marks on lower walls, or damp odors in lower ground floors.",
          "Simply repainting over water-damaged plaster is a waste of money. The underlying source of moisture-whether roof ponding, cracked gutters, or rising capillary damp-must be sealed at the source.",
        ],
      },
      {
        heading: "2. Flat Roof Slab Remediation: Beyond Bituminous Tar",
        paragraphs: [
          "Traditional black bitumen paint on flat concrete roof slabs degrades rapidly under UV radiation and creates brittle cracks within two years. For permanent water tightness, Yebis Engineering applies multilayer hybrid elastomeric polyurethane membranes reinforced with non-woven geotextile mesh.",
          "This flexible membrane moves with thermal expansion of the concrete slab without tearing, creating a seamless waterproof basin that lasts 15+ years.",
        ],
        callout:
          "Never apply screed directly over a wet concrete slab. Ensure the concrete substrate is completely dry before applying polymer or polyurethane waterproofing layers.",
      },
    ],
  },
  {
    slug: "on-site-concrete-quality-control",
    id: "INS-005",
    category: "STRUCTURAL QUALITY CONTROL",
    tag: "QUALITY PROTOCOL",
    dispatch: "FIELD BRIEFING 06 // LAB TESTING",
    title:
      "On-Site Concrete Quality Control: Slump Testing, Cube Crushing, and 28-Day Curing in Ethiopia",
    subtitle:
      "How rigorous site batching, aggregate grading, and laboratory compression tests prevent structural failures.",
    abstract:
      "How Yebis verifies C25/C30 concrete mixes on the job site. Enforcing proper water-cement ratios, aggregate grading, and strict water curing protocols to guarantee structural safety.",
    image: IMG.towers,
    readTime: "7 MIN READ",
    date: "SITE PROTOCOL",
    author: {
      name: "Yeshitila Tedla Hlinaab",
      role: "Managing Director & Founder, Yebis Engineering",
    },
    specs: [
      { label: "Mix Classes", value: "C25, C30, C35" },
      { label: "Site Tests", value: "Slump & Temperature" },
      { label: "Lab Tests", value: "7-Day & 28-Day Cube Crush" },
      { label: "Code", value: "EBCS 2 / ASTM C39 Equivalent" },
    ],
    content: [
      {
        heading: "1. Why On-Site Concrete Testing is Non-Negotiable",
        paragraphs: [
          "Concrete is unique because its final quality is determined on the construction site, not in a factory. Factors such as sand silt content, water-to-cement ratio, transit time, and compaction vibration directly dictate whether a column achieves its specified 25 MPa or 30 MPa strength.",
          "Adding extra water on site to make concrete easier to pour is a dangerous practice that weakens the resulting concrete by up to 40%.",
        ],
      },
      {
        heading: "2. Standard Quality Assurance Protocol",
        paragraphs: [
          "For every concrete pour-whether ready-mix or on-site mechanical batching-Yebis Engineering enforces a strict four-step QA regime:",
          "1. Slump Cone Test: Verifying workability (typically 80mm to 120mm) before pouring begins.",
          "2. Standard Cube Sampling: Pouring 150mm x 150mm test cubes in steel molds, compacted in three layers according to EBCS 2 standards.",
          "3. Submerged Water Curing: Cubes are cured in site water tanks under monitored temperature.",
          "4. Certified Hydraulic Crushing: Cubes are crushed at accredited material testing laboratories at 7 days (anticipating ~65% strength) and 28 days (100% design strength).",
        ],
        callout:
          "Always request stamped 28-day compression test certificates from an accredited laboratory before removing props or formwork from suspended slabs.",
      },
    ],
  },
  {
    slug: "interior-partitions-finishing-gypsum-vs-hcb",
    id: "INS-006",
    category: "INTERIOR ARCHITECTURE & FINISHING",
    tag: "MATERIALS COMPARISON",
    dispatch: "FIELD BRIEFING 07 // INTERIORS",
    title:
      "Interior Partitions & Finishing: Gypsum Drywall vs. Hollow Concrete Block for Modern Spaces",
    subtitle:
      "Evaluating dead-load weight, acoustic insulation, flexibility, and installation speed when dividing commercial office and residential interiors.",
    abstract:
      "Evaluating dead-load weight, acoustic insulation, flexibility, and installation speed when dividing commercial office spaces, healthcare rooms, and residential apartment interiors in Ethiopia.",
    image: IMG.boardroom,
    readTime: "6 MIN READ",
    date: "FINISHING GUIDE",
    author: {
      name: "Yeshitila Tedla Hlinaab",
      role: "Managing Director & Founder, Yebis Engineering",
    },
    specs: [
      { label: "Wall Systems", value: "Gypsum Drywall vs 10cm/15cm HCB" },
      { label: "Dead Load", value: "25 kg/m² vs 180 kg/m²" },
      { label: "Acoustics", value: "Rockwool Infill (Rw 48dB)" },
      { label: "Application", value: "Offices, Clinics & Apartments" },
    ],
    content: [
      {
        heading: "1. The Structural Advantage of Lightweight Partitions",
        paragraphs: [
          "Traditional Ethiopian construction uses 10cm or 15cm Hollow Concrete Block (HCB) for all interior partition walls. While durable, HCB walls weigh approximately 180 kg to 220 kg per square meter including two-sided cement plaster.",
          "This heavy dead load puts substantial stress on suspended floor slabs and limits the owner's ability to reconfigure room layouts in the future. In contrast, double-layer moisture-resistant gypsum drywall on light-gauge galvanized steel studs weighs only 25 kg to 35 kg per square meter.",
        ],
      },
      {
        heading: "2. Acoustic and Installation Speed Benefits",
        paragraphs: [
          "With high-density rockwool or glasswool acoustic insulation batts placed inside the cavity, gypsum drywall systems achieve sound transmission class (STC) ratings exceeding 48 dB, outperforming hollow block walls for corporate meeting rooms, executive offices, and doctor consultation suites.",
          "Furthermore, electrical cables and sanitary lines run freely through pre-punched stud knockouts without any noisy or destructive wall chasing.",
        ],
        callout:
          "For commercial office fit-outs and multi-story tenant spaces, lightweight gypsum drywall reduces structural loads and cuts interior construction schedules by up to 50%.",
      },
    ],
  },
];
