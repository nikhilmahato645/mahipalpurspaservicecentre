// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SECTOR_REGISTRY } from "./data/sectorRegistry";
import { SECTOR_CONTENT } from "./data/sectorContent";

export const dynamic = "force-static";

const BASE_URL = "https://mahipalpurspaservicecentre.com";

const STATIC_ROUTES = [
  "",
  "about",
  "services",
  "pricing",
  "contact",
  "gallery",
  "locations",
  "spa-in-mahipalpur",
  "spa-in-aerocity",
  "spa-in-vasant-kunj",
  "spa-in-dwarka",
  "spa-in-gurugram",
  "spa-in-karol-bagh",
  "spa-in-delhi",
  "russian-spa-mahipalpur",
  "russian-spa-aerocity",
  "russian-banya-delhi",
  "body-massage-mahipalpur",
  "body-massage-aerocity",
  "body-massage-vasant-kunj",
  "couple-spa-delhi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}/${route}${route ? "/" : ""}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const sectorEntries = SECTOR_REGISTRY.filter((entry) => SECTOR_CONTENT[entry.slug]).map((entry) => ({
    url: `${BASE_URL}/${entry.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...sectorEntries];
}
