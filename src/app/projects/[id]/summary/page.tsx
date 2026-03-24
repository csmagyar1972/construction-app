"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { projectSummaries } from "@/data/summary";
import { ProgressBar } from "@/components/app-ui/ProgressBar";
import { useViewMode } from "@/hooks/useViewMode";
import {
  ArrowLeft,
  FileText,
  Users,
  Calendar,
  AlertTriangle,
  Package,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Hammer,
  Receipt,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { isMobile, isPhonePreview } = useViewMode();
  const showMobileLayout = isMobile || isPhonePreview;

  const project = projects.find((p) => p.id === id);
  const summary = projectSummaries[id];

  if (!project || !summary) {
    return (
      <div className="p-8 text-center text-gray-400">
        Nincs elérhető összefoglaló
      </div>
    );
  }

  const pad = showMobileLayout ? "px-4" : "px-8";

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className={`${showMobileLayout ? "px-4 pt-2 pb-3" : "px-8 pt-8 pb-4"}`}>
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className={`font-bold text-gray-900 ${showMobileLayout ? "text-base" : "text-xl"}`}>
              Projekt Összefoglaló
            </h1>
            <p className="text-xs text-gray-500">{project.name}</p>
          </div>
        </div>
      </div>

      <div className={`${pad} pb-8 space-y-5`}>
        {/* Overview KPI cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-3"
        >
          <KPICard
            icon={<FileText size={18} />}
            color="#3B82F6"
            label="Összes bejegyzés"
            value={String(summary.overview.totalEntries)}
          />
          <KPICard
            icon={<Calendar size={18} />}
            color="#8B5CF6"
            label="Aktív napok"
            value={`${summary.overview.totalDays} nap`}
          />
          <KPICard
            icon={<Users size={18} />}
            color="#10B981"
            label="Összes munkanap"
            value={`${summary.overview.totalCrewDays} fő×nap`}
          />
          <KPICard
            icon={<TrendingUp size={18} />}
            color="#F59E0B"
            label="Készültség"
            value={`${summary.overview.progress}%`}
          />
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Projekt haladás</h3>
          <ProgressBar progress={summary.overview.progress} />
        </motion.div>

        {/* Activity Timeline (Bar chart) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Heti aktivitás
          </h3>
          <p className="text-xs text-gray-400 mb-4">Bejegyzések és létszám naponta</p>

          <div className="flex items-end gap-2 h-32">
            {summary.timeline.map((day, i) => {
              const maxEntries = Math.max(...summary.timeline.map((d) => d.entries), 1);
              const maxCrew = Math.max(...summary.timeline.map((d) => d.crew), 1);
              const entryHeight = (day.entries / maxEntries) * 100;
              const crewHeight = (day.crew / maxCrew) * 100;

              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end gap-0.5 h-24">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${entryHeight}%` }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                      className="flex-1 bg-blue-400 rounded-t-sm min-h-[2px]"
                      title={`${day.entries} bejegyzés`}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${crewHeight}%` }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                      className="flex-1 bg-purple-300 rounded-t-sm min-h-[2px]"
                      title={`${day.crew} fő`}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400">{day.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-3 justify-center">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
              <span className="text-[10px] text-gray-500">Bejegyzések</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-300" />
              <span className="text-[10px] text-gray-500">Létszám</span>
            </div>
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Bejegyzések típus szerint
          </h3>
          <div className="space-y-2.5">
            {summary.categoryBreakdown.map((cat, i) => (
              <div key={cat.category} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-16">{cat.label}</span>
                <div className="flex-1 h-6 bg-gray-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percentage}%` }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                    className="h-full rounded-full flex items-center justify-end pr-2"
                    style={{ backgroundColor: cat.color + "20", minWidth: cat.count > 0 ? 32 : 0 }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: cat.color }}
                    >
                      {cat.count}
                    </span>
                  </motion.div>
                </div>
                <span className="text-xs text-gray-400 w-8 text-right">
                  {cat.percentage}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Defects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-red-500" />
            <h3 className="text-sm font-semibold text-gray-900">Hiba riport</h3>
          </div>

          {/* Defect status cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-red-50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertCircle size={14} className="text-red-500" />
              </div>
              <p className="text-lg font-bold text-red-600">{summary.defects.open}</p>
              <p className="text-[10px] text-red-500">Nyitott</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock size={14} className="text-amber-500" />
              </div>
              <p className="text-lg font-bold text-amber-600">{summary.defects.inProgress}</p>
              <p className="text-[10px] text-amber-500">Folyamatban</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle2 size={14} className="text-green-500" />
              </div>
              <p className="text-lg font-bold text-green-600">{summary.defects.resolved}</p>
              <p className="text-[10px] text-green-500">Megoldva</p>
            </div>
          </div>

          {summary.defects.urgent > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3 flex items-center gap-2">
              <AlertCircle size={14} className="text-red-600" />
              <span className="text-xs font-semibold text-red-700">
                {summary.defects.urgent} sürgős hiba nyitva!
              </span>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Clock size={12} />
            Átlagos megoldási idő: <span className="font-semibold text-gray-700">{summary.defects.avgResolutionDays} nap</span>
          </div>

          {/* By location */}
          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            Hibák helyszín szerint
          </h4>
          <div className="space-y-1.5">
            {summary.defects.byLocation.map((loc, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{loc.location}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-400 rounded-full"
                      style={{
                        width: `${(loc.count / summary.defects.total) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-900 w-4 text-right">
                    {loc.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Materials & Cost Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Receipt size={18} className="text-gray-600" />
            <h3 className="text-sm font-semibold text-gray-900">Költség összesítő</h3>
          </div>

          {/* Total */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-gray-400 uppercase mb-1">Számlázott összeg</p>
            <p className="text-2xl font-bold text-gray-900">{summary.materials.totalInvoiced}</p>
          </div>

          {/* By supplier */}
          {summary.materials.suppliers.length > 0 && (
            <>
              <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Beszállítók szerint
              </h4>
              <div className="space-y-2 mb-4">
                {summary.materials.suppliers.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <span className="text-gray-700">{s.name}</span>
                      <span className="text-xs text-gray-400 ml-2">
                        ({s.invoiceCount} számla)
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">{s.amount}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Top Materials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Hammer size={18} className="text-amber-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Leggyakoribb anyagok
            </h3>
          </div>
          <div className="space-y-2">
            {summary.materials.topMaterials.map((m, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center text-xs font-bold text-amber-600">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{m.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {m.quantity}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Daily Reports Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users size={18} className="text-purple-500" />
            <h3 className="text-sm font-semibold text-gray-900">Munkaerő áttekintés</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">{summary.dailyReports.total}</p>
              <p className="text-[10px] text-gray-500">Napi riport</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">
                {summary.dailyReports.avgCrew}
              </p>
              <p className="text-[10px] text-gray-500">Átlag létszám/nap</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">
                {summary.overview.totalCrewDays}
              </p>
              <p className="text-[10px] text-gray-500">Össz munkanap</p>
            </div>
          </div>
        </motion.div>

        {/* Deliveries Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-gray-100 p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Package size={18} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-900">Szállítások</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Összesen <span className="font-semibold">{summary.deliveries.total} szállítólevél</span> rögzítve,{" "}
            <span className="font-semibold">{summary.deliveries.suppliers.length} beszállítótól</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {summary.deliveries.suppliers.map((s, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function KPICard({
  icon,
  color,
  label,
  value,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
        style={{ backgroundColor: color + "15" }}
      >
        <span style={{ color }}>{icon}</span>
      </div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
