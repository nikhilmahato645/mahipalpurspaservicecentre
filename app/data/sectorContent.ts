// app/data/sectorContent.ts
// Merges the per-city content shards. Each shard is populated by a content-generation
// pass. A slug only becomes a live page once it has an entry here (see app/[slug]/page.tsx).

import type { SectorPageContent } from "./sectorContentTypes";
import { GURUGRAM_CONTENT } from "./sectorContent.gurugram";
import { DWARKA_CONTENT } from "./sectorContent.dwarka";
import { NOIDA_CONTENT } from "./sectorContent.noida";

export const SECTOR_CONTENT: Record<string, SectorPageContent> = {
  ...GURUGRAM_CONTENT,
  ...DWARKA_CONTENT,
  ...NOIDA_CONTENT,
};
