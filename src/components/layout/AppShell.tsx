"use client";

import { useState, useEffect } from "react";
import { ViewModeContext, ViewMode } from "@/hooks/useViewMode";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { PhoneFrame } from "./PhoneFrame";
import { ViewToggle } from "./ViewToggle";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode("mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isMobile = viewMode === "mobile";
  const isPhonePreview = viewMode === "phone-preview";

  return (
    <ViewModeContext.Provider
      value={{ viewMode, setViewMode, isPhonePreview, isMobile }}
    >
      <ViewToggle />

      {/* Mobile Layout */}
      {isMobile && (
        <div className="min-h-screen bg-gray-50 pb-20">
          {children}
          <MobileNav />
        </div>
      )}

      {/* Desktop Layout */}
      {viewMode === "desktop" && (
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-gray-50 overflow-y-auto">
            {children}
          </main>
        </div>
      )}

      {/* Phone Preview */}
      {isPhonePreview && (
        <PhoneFrame>
          <div className="min-h-full bg-gray-50 pb-20 relative">
            {children}
            <MobileNav />
          </div>
        </PhoneFrame>
      )}
    </ViewModeContext.Provider>
  );
}
