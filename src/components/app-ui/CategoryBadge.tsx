"use client";

import { EntryCategory, CATEGORY_CONFIG } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";
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
  const { t } = useLanguage();
  const config = CATEGORY_CONFIG[category];
  const IconComponent = iconMap[config.icon as keyof typeof iconMap];

  const categoryLabelMap: Record<EntryCategory, string> = {
    defect: t.catDefect,
    delivery: t.catDelivery,
    material: t.catMaterial,
    report: t.catReport,
    invoice: t.catInvoice,
    note: t.catNote,
  };

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
      style={{ backgroundColor: config.bgColor, color: config.color }}
    >
      <IconComponent size={14} />
      {categoryLabelMap[category]}
    </span>
  );
}
