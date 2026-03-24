"use client";

import { Project } from "@/data/types";
import { ProgressBar } from "./ProgressBar";
import { Building2, MapPin, FileText, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectCard({
  project,
  index = 0,
  compact = false,
}: {
  project: Project;
  index?: number;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link href={`/projects/${project.id}`} className="block">
        <div className="px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Building2 size={20} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {project.name}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {project.address}
              </p>
            </div>
            <span className="text-xs font-medium text-gray-400">
              {project.progress}%
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Building2 size={24} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                {project.name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                <MapPin size={14} />
                {project.address}
              </div>
              <p className="text-xs text-gray-400 mb-3">
                {project.description}
              </p>

              <ProgressBar progress={project.progress} />

              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <FileText size={12} />
                  {project.entryCount} bejegyzés
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  {project.lastActivity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
