"use client";

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor:
              progress >= 80
                ? "#10B981"
                : progress >= 50
                  ? "#3B82F6"
                  : "#F59E0B",
          }}
        />
      </div>
      <span className="text-xs font-medium text-gray-500 w-9 text-right">
        {progress}%
      </span>
    </div>
  );
}
