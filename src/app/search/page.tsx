"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchResults, defaultSearchQuery } from "@/data/search-results";
import { SearchResultCard } from "@/components/app-ui/SearchResultCard";
import { EmptyState } from "@/components/app-ui/EmptyState";
import { useViewMode } from "@/hooks/useViewMode";
import { Search, ArrowLeft } from "lucide-react";

const suggestedQueries = ["ragasztó", "hiba", "számla"];

export default function SearchPage() {
  const router = useRouter();
  const { isMobile, isPhonePreview } = useViewMode();
  const showMobileLayout = isMobile || isPhonePreview;
  const [query, setQuery] = useState(defaultSearchQuery);
  const results = searchResults[query] || [];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div
        className={`${showMobileLayout ? "px-4 pt-2 pb-3" : "px-8 pt-8 pb-4"}`}
      >
        <div className="flex items-center gap-3 mb-4">
          {showMobileLayout && (
            <button
              onClick={() => router.push("/projects")}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
          )}
          <h1
            className={`font-bold text-gray-900 ${showMobileLayout ? "text-base" : "text-xl"}`}
          >
            Keresés
          </h1>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Keresés a bejegyzésekben..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Quick filters */}
        <div className="flex gap-2 mt-3">
          {suggestedQueries.map((q) => (
            <button
              key={q}
              onClick={() => setQuery(q)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                query === q
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div
        className={`${showMobileLayout ? "px-4" : "px-8"} pb-8 pt-2`}
      >
        {results.length > 0 && (
          <p className="text-xs text-gray-400 mb-3">
            {results.length} találat{" "}
            {query && (
              <>
                a(z) &ldquo;<span className="font-medium">{query}</span>
                &rdquo; keresésre
              </>
            )}
          </p>
        )}

        {results.length > 0 ? (
          <div className="space-y-3">
            {results.map((result, index) => (
              <SearchResultCard
                key={result.id}
                entry={result}
                query={query}
                index={index}
              />
            ))}
          </div>
        ) : (
          <EmptyState message="Nincs találat erre a keresésre" />
        )}
      </div>
    </div>
  );
}
