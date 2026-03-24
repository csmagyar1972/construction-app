"use client";

import { EntryItem, CATEGORY_CONFIG } from "@/data/types";
import { CategoryBadge } from "./CategoryBadge";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export function SearchResultCard({
  entry,
  query,
  index = 0,
}: {
  entry: EntryItem;
  query: string;
  index?: number;
}) {
  const config = CATEGORY_CONFIG[entry.category];
  const project = projects.find((p) => p.id === entry.projectId);

  const highlightMatch = (text: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={`/projects/${entry.projectId}/entry/${entry.id}`}
        className="block"
      >
        <div
          className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-shadow"
          style={{ borderLeft: `4px solid ${config.color}` }}
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <CategoryBadge category={entry.category} />
            <span className="text-xs text-gray-400">{entry.dateLabel}</span>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 mt-2">
            {highlightMatch(entry.title)}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            {project && <span>{project.name}</span>}
            {entry.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} />
                {entry.location}
              </span>
            )}
            {entry.amount && (
              <span className="font-medium text-gray-600">{entry.amount}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
