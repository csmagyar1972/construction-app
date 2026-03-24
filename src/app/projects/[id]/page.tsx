"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { entries } from "@/data/entries";
import { EntryCard } from "@/components/app-ui/EntryCard";
import { FilterTabs } from "@/components/app-ui/FilterTabs";
import { EmptyState } from "@/components/app-ui/EmptyState";
import { ProgressBar } from "@/components/app-ui/ProgressBar";
import { useFilteredEntries } from "@/hooks/useFilteredEntries";
import { useViewMode } from "@/hooks/useViewMode";
import { ArrowLeft, MoreVertical, Plus, FileText } from "lucide-react";

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
  const filtered = useFilteredEntries(projectEntries, activeFilter);

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

        {/* e-Napló Export Button */}
        <button
          onClick={() => router.push(`/projects/${id}/enaplo`)}
          className="mt-3 w-full flex items-center gap-3 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
            <FileText size={18} className="text-amber-600" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold text-gray-900">
              e-Napló Export
            </p>
            <p className="text-xs text-gray-500">
              Napi bejegyzés előkészítése az elektronikus építési naplóhoz
            </p>
          </div>
          <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
            ÚJ
          </span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div
        className={`${showMobileLayout ? "px-3" : "px-7"} border-b border-gray-100`}
      >
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          entries={projectEntries}
        />
      </div>

      {/* Entry List */}
      <div className={`${showMobileLayout ? "px-4 pt-3" : "px-8 pt-4"} pb-8`}>
        {filtered.length === 0 ? (
          <EmptyState message="Nincs bejegyzés ebben a kategóriában" />
        ) : (
          <div
            className={`space-y-3 ${!showMobileLayout ? "md:grid md:grid-cols-2 md:gap-4 md:space-y-0" : ""}`}
          >
            {filtered.map((entry, index) => (
              <EntryCard key={entry.id} entry={entry} index={index} />
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
