// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();

// Maximum submissions allowed within the window per IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6;

/**
 * Extract client IP from standard proxy headers
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

/**
 * Check if the request exceeds rate limits
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within current window
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

/**
 * Check if the submission came from an automated bot that filled hidden honeypot fields
 */
export function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  // Check common honeypot field names
  const honeypotKeys = ["_hp", "website", "company_website", "hp_comment"];
  for (const key of honeypotKeys) {
    if (typeof body[key] === "string" && (body[key] as string).trim().length > 0) {
      return true;
    }
  }
  return false;
}
