export type Jurisdiction = "US" | "CA" | "UK" | "EU" | "OTHER";

// EU member states + EEA + Switzerland (treated as EU-equivalent for marketing consent)
const EU_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA (non-EU) + Switzerland — apply same opt-in regime
  "IS", "LI", "NO", "CH",
]);

export function getJurisdictionFromCountry(country?: string | null): Jurisdiction {
  if (!country) return "OTHER";
  const c = country.toUpperCase();
  if (c === "US") return "US";
  if (c === "CA") return "CA";
  if (c === "GB" || c === "UK") return "UK";
  if (EU_COUNTRIES.has(c)) return "EU";
  return "OTHER";
}

export function needsExplicitConsent(j: Jurisdiction): boolean {
  return j === "UK" || j === "EU";
}
