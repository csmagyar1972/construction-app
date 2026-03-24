"use client";

import { use, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  Check,
  Pencil,
  MapPin,
  Calendar,
  Camera,
  Mic,
  AlertTriangle,
  Hammer,
} from "lucide-react";

function ResultContent({ id }: { id: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "photo";
  const [phase, setPhase] = useState<"processing" | "result">("processing");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("result"), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "processing") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[500px]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="mb-6"
        >
          <Loader2 size={48} className="text-blue-600" />
        </motion.div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Feldolgozás
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ...
          </motion.span>
        </h2>
        <p className="text-sm text-gray-400">Az AI elemzi a bejegyzést</p>
      </motion.div>
    );
  }

  const isDefect = type === "photo";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="max-w-lg mx-auto px-4 py-6"
    >
      {/* Success indicator */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            delay: 0.1,
          }}
          className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3"
        >
          <Check size={28} className="text-green-600" />
        </motion.div>
        <h2 className="text-lg font-semibold text-gray-900">Feldolgozva!</h2>
      </div>

      {/* Result Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
      >
        {/* Category Header */}
        <div
          className="px-5 py-3 flex items-center gap-2"
          style={{
            backgroundColor: isDefect ? "#FEF2F2" : "#FFFBEB",
            borderBottom: `2px solid ${isDefect ? "#EF4444" : "#F59E0B"}`,
          }}
        >
          {isDefect ? (
            <AlertTriangle
              size={18}
              className="text-red-500"
            />
          ) : (
            <Hammer size={18} className="text-amber-500" />
          )}
          <span
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: isDefect ? "#EF4444" : "#F59E0B" }}
          >
            {isDefect ? "HIBA" : "ANYAGFELHASZNÁLÁS"}
          </span>
        </div>

        {/* Fields */}
        <div className="px-5 py-4 space-y-3">
          <ResultField label="Projekt" value="Hévíz Le Primore Hotel" />
          {isDefect ? (
            <>
              <ResultField label="Típus" value="Festési hiba" />
              <ResultField label="Leírás" value="Repedés a mennyezeten" />
              <ResultField
                label="Helyszín"
                value="4. emelet / 234-es szoba"
                icon={<MapPin size={14} />}
              />
              <ResultField label="Teendő" value="Javítás szükséges" />
              <ResultField
                label="Státusz"
                value="Nyitott"
                valueColor="#EF4444"
              />
            </>
          ) : (
            <>
              <ResultField label="Termék" value="Baumit ProContact ragasztó" />
              <ResultField label="Mennyiség" value="10 zsák" />
              <ResultField
                label="Helyszín"
                value="2. emelet"
                icon={<MapPin size={14} />}
              />
            </>
          )}
          <ResultField
            label="Dátum"
            value="2026.03.24"
            icon={<Calendar size={14} />}
          />
          <ResultField
            label="Fotó"
            value={isDefect ? "1 csatolva" : "—"}
            icon={<Camera size={14} />}
          />
          <ResultField
            label="Forrás"
            value={isDefect ? "Fotó + Hang" : "Hangfelvétel"}
            icon={isDefect ? <Camera size={14} /> : <Mic size={14} />}
          />
        </div>
      </motion.div>

      {/* Edit link */}
      <button className="flex items-center gap-2 text-sm text-gray-400 mt-3 mx-auto hover:text-gray-600 transition-colors">
        <Pencil size={14} />
        Valami nem stimmel? Szerkesztés
      </button>

      {/* Save button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={() => router.push(`/projects/${id}`)}
        className="mt-6 w-full py-4 bg-blue-600 text-white rounded-xl text-base font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <Check size={20} />
        Mentés
      </motion.button>
    </motion.div>
  );
}

function ResultField({
  label,
  value,
  icon,
  valueColor,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  valueColor?: string;
}) {
  return (
    <div className="flex items-center">
      <span className="text-xs text-gray-400 w-24 flex-shrink-0">{label}</span>
      <div className="flex items-center gap-1.5">
        {icon && <span className="text-gray-400">{icon}</span>}
        <span
          className="text-sm font-medium"
          style={{ color: valueColor || "#111827" }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export default function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[500px]">
          <Loader2 size={32} className="text-blue-600 animate-spin" />
        </div>
      }
    >
      <ResultContent id={id} />
    </Suspense>
  );
}
