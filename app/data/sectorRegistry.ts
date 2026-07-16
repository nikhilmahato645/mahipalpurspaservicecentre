// app/data/sectorRegistry.ts
// Registry of all sector/locality landing pages generated for Gurugram, Dwarka (Delhi), and Noida.
// Slugs and sector numbers below were supplied directly by the site owner.

export type CityKey = "gurugram" | "dwarka" | "noida";

export interface SectorEntry {
  slug: string;
  sector: number;
  cityKey: CityKey;
  cityName: string;
  stateName: string;
  displayName: string; // e.g. "Sector 45, Gurugram" / "Dwarka Sector 12" / "Sector 62, Noida"
}

const GURUGRAM_SECTORS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 99, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
  113, 114, 115,
];

const DWARKA_SECTORS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23,
];

const NOIDA_SECTORS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 55, 56, 57, 61, 62, 63, 71,
  72, 73, 74, 75, 76, 77, 78, 93, 100, 104, 105, 107, 108, 110, 117, 119, 121, 126, 128, 132, 135,
  137, 142, 143, 144, 150,
];

export const SECTOR_REGISTRY: SectorEntry[] = [
  ...GURUGRAM_SECTORS.map((sector) => ({
    slug: `spa-in-sector-${sector}`,
    sector,
    cityKey: "gurugram" as CityKey,
    cityName: "Gurugram",
    stateName: "Haryana",
    displayName: `Sector ${sector}, Gurugram`,
  })),
  ...DWARKA_SECTORS.map((sector) => ({
    slug: `spa-in-dwarka-sector-${sector}`,
    sector,
    cityKey: "dwarka" as CityKey,
    cityName: "Dwarka, New Delhi",
    stateName: "Delhi",
    displayName: `Dwarka Sector ${sector}`,
  })),
  ...NOIDA_SECTORS.map((sector) => ({
    slug: `spa-in-sector-${sector}-noida`,
    sector,
    cityKey: "noida" as CityKey,
    cityName: "Noida",
    stateName: "Uttar Pradesh",
    displayName: `Sector ${sector}, Noida`,
  })),
];

export const SECTOR_BY_SLUG: Record<string, SectorEntry> = Object.fromEntries(
  SECTOR_REGISTRY.map((entry) => [entry.slug, entry])
);

export function getSectorEntry(slug: string): SectorEntry | undefined {
  return SECTOR_BY_SLUG[slug];
}
