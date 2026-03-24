"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/app-ui/ProjectCard";
import { useViewMode } from "@/hooks/useViewMode";
import { Plus, HardHat } from "lucide-react";

export default function ProjectsPage() {
  const { isMobile, isPhonePreview } = useViewMode();
  const showMobileHeader = isMobile || isPhonePreview;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Mobile Header */}
      {showMobileHeader && (
        <div className="px-5 pt-2 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <HardHat size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  BuildLog AI
                </h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Építési napló
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm font-semibold text-blue-600">KT</span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      {!showMobileHeader && (
        <div className="px-8 pt-8 pb-4">
          <h1 className="text-2xl font-bold text-gray-900">Projektek</h1>
          <p className="text-sm text-gray-500 mt-1">
            Aktív építési projektek áttekintése
          </p>
        </div>
      )}

      {/* Project List */}
      <div className={`${showMobileHeader ? "px-4" : "px-8"} pb-8`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Aktív projektek ({projects.length})
          </h2>
        </div>

        <div
          className={`grid gap-4 ${!showMobileHeader ? "md:grid-cols-2" : ""}`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Add Project FAB (mobile) */}
        {showMobileHeader && (
          <button className="fixed bottom-20 right-5 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white active:scale-95 transition-transform z-40">
            <Plus size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
