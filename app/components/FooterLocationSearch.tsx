"use client";

import { useMemo } from "react";
import { MapPin } from "lucide-react";
import { SECTOR_REGISTRY, type CityKey } from "../data/sectorRegistry";

const CITY_GROUPS: { key: CityKey; label: string }[] = [
  { key: "gurugram", label: "Gurugram" },
  { key: "dwarka", label: "Dwarka" },
  { key: "noida", label: "Noida" },
];

export default function FooterLocationSearch() {
  const grouped = useMemo(
    () =>
      CITY_GROUPS.map((g) => ({
        ...g,
        entries: SECTOR_REGISTRY.filter((e) => e.cityKey === g.key),
      })),
    []
  );

  return (
    <div className="footer-location-search">
      {grouped.map((g) => (
        <div key={g.key} className="footer-location-group">
          <div className="footer-location-group-title">{g.label}</div>
          <div className="footer-location-group-list">
            {g.entries.map((e) => (
              <a key={e.slug} href={`/${e.slug}/`}>
                <MapPin size={12} /> {e.displayName}
              </a>
            ))}
          </div>
        </div>
      ))}
      <a href="/locations/" className="footer-location-search-all">
        Browse all {SECTOR_REGISTRY.length} sector pages →
      </a>
    </div>
  );
}
