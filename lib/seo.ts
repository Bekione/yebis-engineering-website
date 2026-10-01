/**
 * Centralized SEO configuration for Yebis Engineering.
 *
 * All metadata helpers reference these constants so changes
 * propagate site-wide from a single source of truth.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yebisengineering.pro.et";

export const SITE_NAME = "Yebis Engineering";

export const SITE_TAGLINE = "From Structure to Finish";

export const SITE_DESCRIPTION =
  "GRADE 3 Ethiopian general contractor delivering structural construction, MEP systems, interior finishing, joinery, and metalworks for residential, commercial, and institutional projects across Addis Ababa and Ethiopia.";

export const OG_IMAGE = {
  url: "/og-yebis.png",
  width: 1200,
  height: 630,
  alt: "Yebis Engineering - From Structure to Finish. GRADE 3 Ethiopian General Contractor.",
  type: "image/png",
} as const;

export const COMPANY_SOCIALS = {
  facebook: "https://facebook.com/yebisengineering",
  linkedin: "https://linkedin.com/company/yebis-engineering",
  telegram: "https://t.me/yebisengineering",
  tiktok: "https://tiktok.com/@yebisengineering",
} as const;

export const COMPANY_PHONES = [
  "+251 91 151 7784",
  "+251 91 387 9093",
  "+251 91 162 9879",
] as const;

export const COMPANY_ADDRESS = {
  street: "Bole Road",
  city: "Addis Ababa",
  country: "Ethiopia",
  postalCode: "",
} as const;

export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
};

/** Complete JSON-LD Schema Graph: WebSite + GeneralContractor Organization for rich snippets and Knowledge Panel. */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: [
          "Yebis Engineering",
          "Yeshitila Tedla Building Contractor",
          "Yebis Engineering Ethiopia",
        ],
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": ["GeneralContractor", "ConstructionBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName:
          "Yebis Engineering (Yeshitila Tedla & Brook Yeshitila General Partnership)",
        alternateName: "Yeshitila Tedla Building Contractor",
        taxID: "0001985917",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo-dark.png`,
        image: `${SITE_URL}/og-yebis.png`,
        description: SITE_DESCRIPTION,
        telephone: COMPANY_PHONES[0],
        email: "info@yebisengineering.pro.et",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_ADDRESS.street,
          addressLocality: COMPANY_ADDRESS.city,
          addressCountry: "ET",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 8.9973,
          longitude: 38.7885,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Ethiopia",
          },
          {
            "@type": "City",
            name: "Addis Ababa",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:30",
            closes: "17:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "08:30",
            closes: "12:30",
          },
        ],
        priceRange: "$$",
        currenciesAccepted: "ETB, USD",
        paymentAccepted: "Bank Transfer, Letter of Credit, Cash",
        sameAs: Object.values(COMPANY_SOCIALS),
        knowsAbout: [
          "General Contracting",
          "GRADE 3 General Contractor (GC-3)",
          "Structural Engineering",
          "MEP Systems",
          "Interior Finishing",
          "Joinery & Millwork",
          "Aluminum & Glass Facade",
          "Building Renovation",
          "BIM Coordination",
          "Civil Works",
        ],
      },
    ],
  };
}
