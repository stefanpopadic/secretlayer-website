import "server-only";
import { headers } from "next/headers";
import { getJurisdictionFromCountry, type Jurisdiction } from "./geo";

/**
 * Server Component helper — reads x-vercel-ip-country (set by Vercel edge)
 * and returns the visitor's jurisdiction bucket.
 * Next.js 16 deprecated request.geo, so we use headers().
 */
export async function getJurisdiction(): Promise<Jurisdiction> {
  const h = await headers();
  const country = h.get("x-vercel-ip-country");
  return getJurisdictionFromCountry(country);
}
