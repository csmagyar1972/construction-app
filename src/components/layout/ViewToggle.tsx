"use client";

import { Monitor, Smartphone } from "lucide-react";
import { useViewMode } from "@/hooks/useViewMode";

export function ViewToggle() {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="fixed top-4 right-4 z-[100] hidden md:flex bg-white rounded-lg shadow-lg border border-gray-200 p-1 gap-1">
      <button
        onClick={() => setViewMode("desktop")}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          viewMode === "desktop"
            ? "bg-blue-50 text-blue-600"
            : "text-gray-500 hover:bg-gray-50"
        }`}
      >
        <Monitor size={16} />
        Asztali nézet
      </button>
      <button
        onClick={() => setViewMode("phone-preview")}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          viewMode === "phone-preview"
            ? "bg-blue-50 text-blue-600"
            : "text-gray-500 hover:bg-gray-50"
        }`}
      >
        <Smartphone size={16} />
        Mobil nézet
      </button>
    </div>
  );
}
