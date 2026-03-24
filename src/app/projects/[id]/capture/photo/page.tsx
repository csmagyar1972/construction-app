"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Camera, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoCapturePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [phase, setPhase] = useState<"camera" | "preview">("camera");
  const [description, setDescription] = useState("");

  if (phase === "camera") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[600px] bg-gray-900 flex flex-col"
      >
        {/* Fake camera viewfinder */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #4a5568 0%, #2d3748 30%, #1a202c 60%, #2d3748 100%)",
            }}
          />
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
          {/* Simulated construction elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Camera size={24} className="text-white/40" />
              </div>
              <p className="text-white/40 text-sm">Kamera nézet</p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Shutter */}
        <div className="bg-black py-6 flex items-center justify-center gap-8">
          <div className="w-12 h-12" />
          <button
            onClick={() => setPhase("preview")}
            className="w-18 h-18 rounded-full border-4 border-white p-1 active:scale-95 transition-transform"
          >
            <div className="w-14 h-14 rounded-full bg-white" />
          </button>
          <div className="w-12 h-12" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-lg mx-auto"
    >
      {/* Photo preview */}
      <div className="aspect-[4/3] bg-gray-200 relative">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-sm text-gray-600 font-medium">
              Fotó elkészítve
            </p>
          </div>
        </div>
      </div>

      {/* Add description */}
      <div className="p-4 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Adj hozzá leírást:
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Írj valamit..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="text-center text-sm text-gray-400">vagy</div>

        <button className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-500 hover:border-purple-300 hover:text-purple-600 transition-colors">
          <Mic size={18} />
          Tartsd nyomva és beszélj
        </button>

        <div className="flex gap-3 pt-4">
          <button
            onClick={() =>
              router.push(`/projects/${id}/capture/result?type=photo`)
            }
            className="flex-1 py-3 bg-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Kihagyás
          </button>
          <button
            onClick={() =>
              router.push(`/projects/${id}/capture/result?type=photo`)
            }
            className="flex-1 py-3 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Tovább
          </button>
        </div>
      </div>
    </motion.div>
  );
}
