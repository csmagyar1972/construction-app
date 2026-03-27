"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Mic, Square, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function VoiceCapturePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [phase, setPhase] = useState<"recording" | "transcription">(
    "recording"
  );
  const [seconds, setSeconds] = useState(0);
  const { t, locale } = useLanguage();

  useEffect(() => {
    if (phase !== "recording") return;
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s >= 4) {
          setPhase("transcription");
          return 4;
        }
        return s + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  if (phase === "recording") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-lg mx-auto flex flex-col items-center justify-center min-h-[500px] px-4"
      >
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Animated mic */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6"
        >
          <Mic size={40} className="text-purple-600" />
        </motion.div>

        <div className="flex items-center gap-2 mb-4">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-2.5 h-2.5 rounded-full bg-red-500"
          />
          <span className="text-base font-medium text-gray-900">
            {t.recording}
          </span>
          <span className="text-sm text-gray-400">
            0:{String(seconds).padStart(2, "0")}
          </span>
        </div>

        {/* Waveform */}
        <div className="flex items-center gap-1 h-12 mb-8">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: [8, Math.random() * 32 + 8, 8],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5 + Math.random() * 0.5,
                delay: i * 0.03,
              }}
              className="w-1 bg-purple-400 rounded-full"
            />
          ))}
        </div>

        <button
          onClick={() => setPhase("transcription")}
          className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center active:scale-95 transition-transform"
        >
          <Square size={22} className="text-white" fill="white" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-lg mx-auto flex flex-col items-center justify-center min-h-[500px] px-6"
    >
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
      >
        <X size={20} className="text-gray-600" />
      </button>

      <div className="w-full">
        <p className="text-sm font-medium text-gray-500 mb-3">
          {t.iRecordedThis}
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-5 mb-4"
        >
          <p className="text-base text-gray-900 leading-relaxed">
            {locale === "hu"
              ? "\u201CMa felhasználtunk 10 zsák ragasztót a 2. emeleten\u201D"
              : "\u201CToday we used 10 bags of adhesive on the 2nd floor\u201D"}
          </p>
        </motion.div>

        <button className="flex items-center gap-2 text-sm text-purple-600 mb-8">
          <Play size={16} />
          {t.playback}
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setPhase("recording");
              setSeconds(0);
            }}
            className="flex-1 py-3 bg-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            {t.retry}
          </button>
          <button
            onClick={() =>
              router.push(`/projects/${id}/capture/result?type=voice`)
            }
            className="flex-1 py-3 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            {t.continue_}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
