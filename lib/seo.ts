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

/** JSON-LD Organization structured data for Google Knowledge Panel. */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: SITE_NAME,
    legalName:
      "Yebis Engineering (Yeshitila Tedla & Brook Yeshitila General Partnership)",
    alternateName: "Yeshitila Tedla Building Contractor",
    taxID: "0001985917",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-dark.png`,
    image: `${SITE_URL}/og-yebis.png`,
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_ADDRESS.street,
      addressLocality: COMPANY_ADDRESS.city,
      addressCountry: "ET",
    },
    telephone: COMPANY_PHONES[0],
    sameAs: Object.values(COMPANY_SOCIALS),
    areaServed: {
      "@type": "Country",
      name: "Ethiopia",
    },
    knowsAbout: [
      "General Contracting",
      "Structural Engineering",
      "MEP Systems",
      "Interior Finishing",
      "Joinery & Millwork",
      "Aluminum & Glass Facade",
      "Building Renovation",
      "BIM Coordination",
    ],
  };
}
