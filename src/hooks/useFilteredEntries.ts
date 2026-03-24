"use client";

import { useMemo } from "react";
import { EntryItem } from "@/data/types";

export function useFilteredEntries(
  entries: EntryItem[],
  activeFilter: string
) {
  return useMemo(() => {
    if (activeFilter === "all") return entries;
    return entries.filter((e) => e.category === activeFilter);
  }, [entries, activeFilter]);
}
