/**
 * Centralized Maintenance Mode Configuration for Yebis Engineering.
 *
 * To toggle maintenance mode:
 * 1. Environment Variable:
 *    Set NEXT_PUBLIC_MAINTENANCE_MODE="true" (or "false") in .env or your hosting dashboard (Vercel, etc.).
 *
 * 2. Configuration Flag:
 *    You can also toggle DEFAULT_MAINTENANCE_MODE below.
 *
 * When maintenance mode is active:
 * - All public routes (/, /about, /capabilities, /contact, /work, etc.) render only the branded maintenance page.
 * - All API routes return 503 Service Unavailable.
 * - Corporate portfolio PDFs and document redirects are blocked and routed to the maintenance page.
 * - No phone numbers, email addresses, contact forms, or social links are displayed.
 * - Existing SEO metadata, sitemap, and robots.txt are preserved without noindex directives.
 * - The original site can be fully restored by setting the flag to false.
 */

const DEFAULT_MAINTENANCE_MODE = true;

export const IS_MAINTENANCE_MODE =
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== undefined
    ? process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
    : process.env.MAINTENANCE_MODE !== undefined
    ? process.env.MAINTENANCE_MODE === "true"
    : DEFAULT_MAINTENANCE_MODE;
