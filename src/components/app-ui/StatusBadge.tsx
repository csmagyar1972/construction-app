"use client";

import { useState } from "react";
import { EntryStatus, STATUS_CONFIG } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";

export function StatusBadge({
  status,
  interactive = false,
}: {
  status: EntryStatus;
  interactive?: boolean;
}) {
  const { t } = useLanguage();
  const [currentStatus, setCurrentStatus] = useState(status);
  const statuses: EntryStatus[] = ["open", "in_progress", "done"];

  const statusLabelMap: Record<EntryStatus, string> = {
    open: t.statusOpen,
    in_progress: t.statusInProgress,
    done: t.statusDone,
  };

  if (interactive) {
    return (
      <div className="flex gap-2">
        {statuses.map((s) => {
          const config = STATUS_CONFIG[s];
          const isActive = currentStatus === s;
          return (
            <button
              key={s}
              onClick={() => setCurrentStatus(s)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                backgroundColor: isActive ? config.bgColor : "transparent",
                color: isActive ? config.color : "#9CA3AF",
                border: isActive
                  ? `2px solid ${config.color}`
                  : "2px solid #E5E7EB",
                transform: isActive ? "scale(1.05)" : "scale(1)",
              }}
            >
              {statusLabelMap[s]}
            </button>
          );
        })}
      </div>
    );
  }

  const config = STATUS_CONFIG[currentStatus];
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: config.bgColor, color: config.color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full mr-1.5"
        style={{ backgroundColor: config.color }}
      />
      {statusLabelMap[currentStatus]}
    </span>
  );
}
