"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/app-ui/ProjectCard";
import { Search, HardHat } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <HardHat size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900">BuildLog AI</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
              Építési napló
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-3">
        <Link
          href="/search"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
            pathname === "/search"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <Search size={18} />
          Keresés
        </Link>
      </div>

      {/* Project List */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Aktív projektek
          </h2>
        </div>
        <div className="px-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </div>

      {/* User */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-sm font-semibold text-blue-600">KT</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Kovács Tamás</p>
            <p className="text-xs text-gray-400">KT-Build Kft.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
