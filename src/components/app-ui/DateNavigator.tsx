"use client";

import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export type DateRange = "day" | "week" | "month" | "all";

export function DateNavigator({
  currentDate,
  dateRange,
  onDateChange,
  onRangeChange,
  dateLabel,
}: {
  currentDate: string;
  dateRange: DateRange;
  onDateChange: (direction: "prev" | "next") => void;
  onRangeChange: (range: DateRange) => void;
  dateLabel: string;
}) {
  const { t } = useLanguage();

  const rangeLabels: Record<DateRange, string> = {
    day: t.dateDay,
    week: t.dateWeek,
    month: t.dateMonth,
    all: t.dateAll,
  };

  return (
    <div className="space-y-2">
      {/* Range toggles */}
      <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
        {(Object.keys(rangeLabels) as DateRange[]).map((range) => (
          <button
            key={range}
            onClick={() => onRangeChange(range)}
            className={`relative flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
              dateRange === range
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {dateRange === range && (
              <motion.div
                layoutId="date-range-bg"
                className="absolute inset-0 bg-white shadow-sm rounded-md"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{rangeLabels[range]}</span>
          </button>
        ))}
      </div>

      {/* Date navigation */}
      {dateRange !== "all" && (
        <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-2.5">
          <button
            onClick={() => onDateChange("prev")}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Calendar size={15} className="text-blue-600" />
            <span className="text-sm font-semibold text-gray-900">
              {dateLabel}
            </span>
          </div>
          <button
            onClick={() => onDateChange("next")}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
}
