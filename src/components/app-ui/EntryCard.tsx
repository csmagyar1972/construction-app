"use client";

import { EntryItem, CATEGORY_CONFIG } from "@/data/types";
import { CategoryBadge } from "./CategoryBadge";
import { StatusBadge } from "./StatusBadge";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Camera, Mic, AlertCircle, Image } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function EntryCard({
  entry,
  index = 0,
}: {
  entry: EntryItem;
  index?: number;
}) {
  const { t, locale } = useLanguage();
  const config = CATEGORY_CONFIG[entry.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/projects/${entry.projectId}/entry/${entry.id}`}
        className="block"
      >
        <div
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200 relative overflow-hidden"
          style={{ borderLeft: `4px solid ${config.color}` }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <CategoryBadge category={entry.category} />
                {entry.isUrgent && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                    <AlertCircle size={12} />
                    {t.urgent}
                  </span>
                )}
                {entry.status && <StatusBadge status={entry.status} />}
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
                {entry.title}
              </h3>

              {entry.description && (
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                  {entry.description}
                </p>
              )}

              {entry.items && entry.items.length > 0 && (
                <div className="mb-2">
                  {entry.items.slice(0, 3).map((item, i) => (
                    <p key={i} className="text-xs text-gray-500">
                      · {item.name} — {item.quantity} {item.unit}
                    </p>
                  ))}
                  {entry.items.length > 3 && (
                    <p className="text-xs text-gray-400">
                      + {entry.items.length - 3}{" "}
                      {locale === "hu" ? "további tétel" : "more items"}
                    </p>
                  )}
                </div>
              )}

              {entry.reportData && (
                <div className="mb-2 space-y-0.5">
                  {entry.reportData.crew && (
                    <p className="text-xs text-gray-500">
                      {t.crew}: {entry.reportData.crew}
                    </p>
                  )}
                  {entry.reportData.completed?.slice(0, 2).map((item, i) => (
                    <p key={i} className="text-xs text-green-600">
                      ✓ {item}
                    </p>
                  ))}
                  {entry.reportData.inProgress?.slice(0, 1).map((item, i) => (
                    <p key={i} className="text-xs text-amber-600">
                      ◐ {item}
                    </p>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
                {entry.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {entry.location}
                  </span>
                )}
                <span>{entry.dateLabel}</span>
                {entry.source && (
                  <span className="inline-flex items-center gap-1">
                    {(entry.source === "photo" ||
                      entry.source === "photo+voice") && <Camera size={12} />}
                    {(entry.source === "voice" ||
                      entry.source === "photo+voice") && <Mic size={12} />}
                  </span>
                )}
                {entry.amount && (
                  <span className="font-medium text-gray-600">
                    {entry.amount}
                  </span>
                )}
              </div>
            </div>

            {entry.hasPhoto && (
              <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                {entry.photoUrl ? (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${entry.photoUrl})`,
                      backgroundColor: config.bgColor,
                    }}
                  />
                ) : (
                  <Image size={20} className="text-gray-300" />
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
