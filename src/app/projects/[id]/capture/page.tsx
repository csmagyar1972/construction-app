"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Camera, Mic, Type, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { getLocalizedData } from "@/data/localized";

export default function CapturePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { t, locale } = useLanguage();
  const data = getLocalizedData(locale);
  const project = data.projects.find((p) => p.id === id);

  const captureOptions = [
    {
      id: "photo",
      icon: Camera,
      title: t.takePhoto,
      description: t.takePhotoDesc,
      color: "#3B82F6",
      bgColor: "#EFF6FF",
    },
    {
      id: "voice",
      icon: Mic,
      title: t.voiceRecording,
      description: t.voiceRecordingDesc,
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
    },
    {
      id: "text",
      icon: Type,
      title: t.textNote,
      description: t.textNoteDesc,
      color: "#10B981",
      bgColor: "#ECFDF5",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-lg mx-auto"
    >
      {/* Header */}
      <div className="px-4 pt-2 pb-4 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-base font-semibold text-gray-900">
            {t.newEntry}
          </h1>
          <p className="text-xs text-gray-400">{project?.name}</p>
        </div>
        <div className="w-9" />
      </div>

      {/* Options */}
      <div className="px-4 space-y-4 pb-8">
        {captureOptions.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              router.push(`/projects/${id}/capture/${option.id === "text" ? "voice" : option.id}`)
            }
            className="w-full p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all text-left bg-white hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: option.bgColor }}
              >
                <option.icon size={28} style={{ color: option.color }} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
