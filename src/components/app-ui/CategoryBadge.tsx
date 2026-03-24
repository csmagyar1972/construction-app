"use client";

import { EntryCategory, CATEGORY_CONFIG } from "@/data/types";
import {
  AlertTriangle,
  Package,
  Hammer,
  ClipboardList,
  FileText,
  StickyNote,
} from "lucide-react";

const iconMap = {
  AlertTriangle,
  Package,
  Hammer,
  ClipboardList,
  FileText,
  StickyNote,
};

export function CategoryBadge({ category }: { category: EntryCategory }) {
  const config = CATEGORY_CONFIG[category];
  const IconComponent = iconMap[config.icon as keyof typeof iconMap];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
      style={{ backgroundColor: config.bgColor, color: config.color }}
    >
      <IconComponent size={14} />
      {config.label}
    </span>
  );
}
