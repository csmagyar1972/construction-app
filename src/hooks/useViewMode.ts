"use client";

import { createContext, useContext } from "react";

export type ViewMode = "desktop" | "mobile" | "phone-preview";

export interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isPhonePreview: boolean;
  isMobile: boolean;
}

export const ViewModeContext = createContext<ViewModeContextType>({
  viewMode: "desktop",
  setViewMode: () => {},
  isPhonePreview: false,
  isMobile: false,
});

export function useViewMode() {
  return useContext(ViewModeContext);
}
