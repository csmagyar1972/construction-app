"use client";

import { use, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { entries } from "@/data/entries";
import { EntryCard } from "@/components/app-ui/EntryCard";
import { FilterTabs } from "@/components/app-ui/FilterTabs";
import { EmptyState } from "@/components/app-ui/EmptyState";
import { ProgressBar } from "@/components/app-ui/ProgressBar";
import {
  DateNavigator,
  DateRange,
} from "@/components/app-ui/DateNavigator";
import { useFilteredEntries } from "@/hooks/useFilteredEntries";
import { useViewMode } from "@/hooks/useViewMode";
import { EntryItem } from "@/data/types";
import {
  ArrowLeft,
  MoreVertical,
  Plus,
  FileText,
  BarChart3,
} from "lucide-react";

// Available dates in our mock data
const DATES = [
  "2026-03-24",
  "2026-03-23",
  "2026-03-22",
  "2026-03-21",
  "2026-03-20",
  "2026-03-19",
  "2026-03-18",
];

const DATE_LABELS: Record<string, string> = {
  "2026-03-24": "Ma — márc. 24. (kedd)",
  "2026-03-23": "Tegnap — márc. 23. (hétfő)",
  "2026-03-22": "Márc. 22. (vasárnap)",
  "2026-03-21": "Márc. 21. (szombat)",
  "2026-03-20": "Márc. 20. (péntek)",
  "2026-03-19": "Márc. 19. (csütörtök)",
  "2026-03-18": "Márc. 18. (szerda)",
};

const DAY_GROUP_LABELS: Record<string, string> = {
  "2026-03-24": "Ma",
  "2026-03-23": "Tegnap",
  "2026-03-22": "Márc. 22.",
  "2026-03-21": "Márc. 21.",
  "2026-03-20": "Márc. 20.",
  "2026-03-19": "Márc. 19.",
  "2026-03-18": "Márc. 18.",
};

const WEEK_LABEL = "Márc. 18–24. hét";
const MONTH_LABEL = "2026. március";

function getDateRangeLabel(
  dateRange: DateRange,
  dateIndex: number
): string {
  if (dateRange === "day") return DATE_LABELS[DATES[dateIndex]] || "";
  if (dateRange === "week") return WEEK_LABEL;
  if (dateRange === "month") return MONTH_LABEL;
  return "";
}

function filterByDateRange(
  items: EntryItem[],
  dateRange: DateRange,
  dateIndex: number
): EntryItem[] {
  if (dateRange === "all") return items;
  if (dateRange === "day") {
    const targetDate = DATES[dateIndex];
    return items.filter((e) => e.date === targetDate);
  }
  // week and month show all mock data (it's all within one week)
  return items;
}

function groupByDay(items: EntryItem[]): { date: string; label: string; entries: EntryItem[] }[] {
  const groups: Record<string, EntryItem[]> = {};
  for (const item of items) {
    if (!groups[item.date]) groups[item.date] = [];
    groups[item.date].push(item);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, entries]) => ({
      date,
      label: DAY_GROUP_LABELS[date] || date,
      entries,
    }));
}

export default function ProjectFeedPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { isMobile, isPhonePreview } = useViewMode();
  const showMobileLayout = isMobile || isPhonePreview;

  const project = projects.find((p) => p.id === id);
  const projectEntries = entries[id] || [];
  const [activeFilter, setActiveFilter] = useState("all");
  const [dateRange, setDateRange] = useState<DateRange>("all");
  const [dateIndex, setDateIndex] = useState(0);

  const categoryFiltered = useFilteredEntries(projectEntries, activeFilter);

  const dateFiltered = useMemo(
    () => filterByDateRange(categoryFiltered, dateRange, dateIndex),
    [categoryFiltered, dateRange, dateIndex]
  );

  const grouped = useMemo(() => groupByDay(dateFiltered), [dateFiltered]);

  const handleDateChange = (direction: "prev" | "next") => {
    setDateIndex((i) => {
      if (direction === "prev") return Math.min(i + 1, DATES.length - 1);
      return Math.max(i - 1, 0);
    });
  };

  if (!project) {
    return (
      <div className="p-8 text-center text-gray-400">
        Projekt nem található
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div
        className={`${showMobileLayout ? "px-4 pt-2 pb-3" : "px-8 pt-8 pb-4"}`}
      >
        <div className="flex items-center gap-3 mb-3">
          {showMobileLayout && (
            <button
              onClick={() => router.push("/projects")}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
          )}
          <div className="flex-1">
            <h1
              className={`font-bold text-gray-900 ${showMobileLayout ? "text-base" : "text-xl"}`}
            >
              {project.name}
            </h1>
            <p className="text-xs text-gray-500">{project.address}</p>
          </div>
          <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
            <MoreVertical size={20} className="text-gray-400" />
          </button>
        </div>

        {!showMobileLayout && (
          <div className="mt-2 max-w-xs">
            <ProgressBar progress={project.progress} />
          </div>
        )}

        {/* Action buttons row */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => router.push(`/projects/${id}/enaplo`)}
            className="flex-1 flex items-center gap-2.5 px-3.5 py-2.5 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition-colors"
          >
            <FileText size={16} className="text-amber-600" />
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold text-gray-900">e-Napló Export</p>
            </div>
            <span className="text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">
              ÚJ
            </span>
          </button>
          <button
            onClick={() => router.push(`/projects/${id}/summary`)}
            className="flex-1 flex items-center gap-2.5 px-3.5 py-2.5 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors"
          >
            <BarChart3 size={16} className="text-purple-600" />
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold text-gray-900">Összefoglaló</p>
            </div>
          </button>
        </div>

        {/* Date Navigator */}
        <div className="mt-3">
          <DateNavigator
            currentDate={DATES[dateIndex]}
            dateRange={dateRange}
            onDateChange={handleDateChange}
            onRangeChange={(range) => {
              setDateRange(range);
              setDateIndex(0);
            }}
            dateLabel={getDateRangeLabel(dateRange, dateIndex)}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        className={`${showMobileLayout ? "px-3" : "px-7"} border-b border-gray-100`}
      >
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          entries={dateFiltered}
        />
      </div>

      {/* Entry List — Grouped by Day */}
      <div className={`${showMobileLayout ? "px-4 pt-3" : "px-8 pt-4"} pb-8`}>
        {dateFiltered.length === 0 ? (
          <EmptyState
            message={
              dateRange === "day"
                ? "Nincs bejegyzés ezen a napon"
                : "Nincs bejegyzés ebben az időszakban"
            }
          />
        ) : dateRange === "day" ? (
          // Single day — no grouping needed
          <div
            className={`space-y-3 ${!showMobileLayout ? "md:grid md:grid-cols-2 md:gap-4 md:space-y-0" : ""}`}
          >
            {dateFiltered.map((entry, index) => (
              <EntryCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        ) : (
          // Multiple days — group with headers
          <div className="space-y-6">
            {grouped.map((group) => (
              <div key={group.date}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {group.label}
                  </h3>
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-400">
                    {group.entries.length} bejegyzés
                  </span>
                </div>
                <div
                  className={`space-y-3 ${!showMobileLayout ? "md:grid md:grid-cols-2 md:gap-4 md:space-y-0" : ""}`}
                >
                  {group.entries.map((entry, index) => (
                    <EntryCard key={entry.id} entry={entry} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Capture FAB */}
      <button
        onClick={() => router.push(`/projects/${id}/capture`)}
        className={`fixed ${showMobileLayout ? "bottom-20 right-5" : "bottom-8 right-8"} bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2 active:scale-95 transition-transform z-40 ${
          showMobileLayout ? "w-14 h-14 justify-center" : "px-5 h-12"
        }`}
      >
        <Plus size={22} />
        {!showMobileLayout && (
          <span className="font-medium text-sm">Rögzítés</span>
        )}
      </button>
    </div>
  );
}
