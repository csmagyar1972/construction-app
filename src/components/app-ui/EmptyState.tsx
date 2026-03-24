"use client";

import { Inbox } from "lucide-react";

export function EmptyState({
  message = "Nincsenek bejegyzések",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <Inbox size={28} className="text-gray-300" />
      </div>
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  );
}
