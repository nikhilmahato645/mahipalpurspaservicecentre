"use client";

import { useMemo, useState } from "react";
import { Search, MapPin } from "lucide-react";
import { SECTOR_REGISTRY, type CityKey } from "../data/sectorRegistry";
import styles from "./SectorDirectory.module.css";

const CITY_TABS: { key: CityKey | "all"; label: string }[] = [
  { key: "all", label: "All Cities" },
  { key: "gurugram", label: "Gurugram" },
  { key: "dwarka", label: "Dwarka" },
  { key: "noida", label: "Noida" },
];

export default function SectorDirectory() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<CityKey | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SECTOR_REGISTRY.filter((e) => {
      if (city !== "all" && e.cityKey !== city) return false;
      if (!q) return true;
      return e.displayName.toLowerCase().includes(q);
    });
  }, [query, city]);

  return (
    <div className={styles.wrap}>
      <div className={styles.searchBox}>
        <Search size={16} />
        <input
          type="text"
          inputMode="search"
          placeholder="Search a sector — e.g. Sector 45, Dwarka Sector 12, Sector 62 Noida..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className={styles.tabs}>
        {CITY_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`${styles.tab} ${city === t.key ? styles.tabActive : ""}`}
            onClick={() => setCity(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className={styles.count}>
        {filtered.length} of {SECTOR_REGISTRY.length} sector pages
      </p>
      {filtered.length === 0 ? (
        <p className={styles.empty}>No sector matches &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((e) => (
            <a key={e.slug} href={`/${e.slug}/`} className={styles.item}>
              <MapPin size={14} strokeWidth={1.8} />
              {e.displayName}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
