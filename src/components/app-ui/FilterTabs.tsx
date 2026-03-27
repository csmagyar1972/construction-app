"use client";

import { EntryItem } from "@/data/types";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function FilterTabs({
  activeFilter,
  onFilterChange,
  entries,
}: {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  entries: EntryItem[];
}) {
  const { t } = useLanguage();

  const tabs = [
    { key: "all", label: t.filterAll },
    { key: "defect", label: t.filterDefects },
    { key: "delivery", label: t.filterDeliveries },
    { key: "invoice", label: t.filterInvoices },
    { key: "material", label: t.filterMaterials },
    { key: "report", label: t.filterReports },
    { key: "note", label: t.filterNotes },
  ];

  const getCount = (key: string) => {
    if (key === "all") return entries.length;
    return entries.filter((e) => e.category === key).length;
  };

  return (
    <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide px-1">
      {tabs.map((tab) => {
        const count = getCount(tab.key);
        const isActive = activeFilter === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onFilterChange(tab.key)}
            className={`relative px-3 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors duration-200 ${
              isActive
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
            {count > 0 && (
              <span
                className={`ml-1.5 text-xs ${isActive ? "text-blue-400" : "text-gray-400"}`}
              >
                {count}
              </span>
            )}
            {isActive && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
