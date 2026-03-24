"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { enaploData, generateENaploText } from "@/data/enaplo";
import { useViewMode } from "@/hooks/useViewMode";
import {
  ArrowLeft,
  Copy,
  Check,
  FileDown,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Users,
  CloudSun,
  Hammer,
  AlertTriangle,
  Package,
  Wrench,
  ClipboardCheck,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ENaploPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { isMobile, isPhonePreview } = useViewMode();
  const showMobileLayout = isMobile || isPhonePreview;

  const project = projects.find((p) => p.id === id);
  const days = enaploData[id] || [];
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const day = days[selectedDayIndex];

  if (!project || !day) {
    return (
      <div className="p-8 text-center text-gray-400">
        Nincs elérhető e-napló adat ehhez a projekthez
      </div>
    );
  }

  const fullText = generateENaploText(day, project.name);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div
        className={`${showMobileLayout ? "px-4 pt-2 pb-3" : "px-8 pt-8 pb-4"}`}
      >
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <h1
              className={`font-bold text-gray-900 ${showMobileLayout ? "text-base" : "text-xl"}`}
            >
              e-Napló Export
            </h1>
            <p className="text-xs text-gray-500">{project.name}</p>
          </div>
        </div>

        {/* Info banner */}
        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-start gap-3">
          <FileText size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-blue-700 font-medium">
              Automatikus e-napló előkészítő
            </p>
            <p className="text-xs text-blue-600 mt-0.5">
              A BuildLog AI a napi bejegyzéseidből összeállítja az e-napló
              bejegyzést. Másold ki és illeszd be az{" "}
              <span className="font-semibold">e-epites.hu/e-naplo</span>{" "}
              rendszerbe.
            </p>
          </div>
        </div>
      </div>

      {/* Day selector */}
      <div
        className={`${showMobileLayout ? "px-4" : "px-8"} pb-4`}
      >
        <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-3">
          <button
            onClick={() =>
              setSelectedDayIndex((i) => Math.min(i + 1, days.length - 1))
            }
            disabled={selectedDayIndex >= days.length - 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-gray-900">
              {day.dateLabel}
            </span>
          </div>
          <button
            onClick={() => setSelectedDayIndex((i) => Math.max(i - 1, 0))}
            disabled={selectedDayIndex <= 0}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Structured view / Preview toggle */}
      <div className={`${showMobileLayout ? "px-4" : "px-8"} pb-3`}>
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
          <button
            onClick={() => setShowPreview(false)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              !showPreview
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
          >
            Strukturált nézet
          </button>
          <button
            onClick={() => setShowPreview(true)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              showPreview
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
          >
            Másolható szöveg
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`${showMobileLayout ? "px-4" : "px-8"} pb-6`}>
        <AnimatePresence mode="wait">
          {!showPreview ? (
            <motion.div
              key="structured"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Weather */}
              <ENaploSection
                icon={<CloudSun size={18} />}
                title="Időjárási viszonyok"
                color="#3B82F6"
              >
                <div className="grid grid-cols-2 gap-2">
                  <Field label="Hőmérséklet" value={day.weather.temperature} />
                  <Field label="Időjárás" value={day.weather.conditions} />
                  <Field label="Szél" value={day.weather.wind} />
                  <Field label="Csapadék" value={day.weather.precipitation} />
                </div>
              </ENaploSection>

              {/* Crew */}
              <ENaploSection
                icon={<Users size={18} />}
                title={`Munkaerő / Létszám (${day.crewTotal} fő)`}
                color="#8B5CF6"
              >
                <div className="space-y-1.5">
                  {day.crew.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-700">{c.trade}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-gray-900">
                          {c.count} fő
                        </span>
                        <span className="text-xs text-gray-400">
                          {c.hours}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-gray-100 pt-1.5 flex justify-between text-sm font-bold">
                    <span>Összesen</span>
                    <span>{day.crewTotal} fő</span>
                  </div>
                </div>
              </ENaploSection>

              {/* Work Description */}
              <ENaploSection
                icon={<Hammer size={18} />}
                title="Elvégzett munkák"
                color="#F59E0B"
              >
                <ul className="space-y-1.5">
                  {day.workDescription.map((w, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">✓</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </ENaploSection>

              {/* Materials Used */}
              <ENaploSection
                icon={<Package size={18} />}
                title="Felhasznált anyagok"
                color="#10B981"
              >
                {day.materialsUsed.length > 0 ? (
                  <div className="space-y-1.5">
                    {day.materialsUsed.map((m, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-700">{m.name}</span>
                        <span className="font-medium text-gray-900">
                          {m.quantity} {m.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">Nincs bejegyzés.</p>
                )}
              </ENaploSection>

              {/* Deliveries */}
              {day.materialsDelivered.length > 0 && (
                <ENaploSection
                  icon={<Package size={18} />}
                  title="Anyagszállítások"
                  color="#3B82F6"
                >
                  {day.materialsDelivered.map((d, i) => (
                    <div key={i} className="text-sm space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">
                          {d.supplier}
                        </span>
                        <span className="text-xs text-gray-400">
                          {d.deliveryNote}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs">{d.items}</p>
                    </div>
                  ))}
                </ENaploSection>
              )}

              {/* Equipment */}
              <ENaploSection
                icon={<Wrench size={18} />}
                title="Alkalmazott gépek"
                color="#6B7280"
              >
                {day.equipment.length > 0 ? (
                  <ul className="space-y-1">
                    {day.equipment.map((e, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        • {e}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400">Nincs bejegyzés.</p>
                )}
              </ENaploSection>

              {/* Quality Notes */}
              {day.qualityNotes.length > 0 && (
                <ENaploSection
                  icon={<ClipboardCheck size={18} />}
                  title="Minőségi észrevételek"
                  color="#F59E0B"
                >
                  {day.qualityNotes.map((q, i) => (
                    <p key={i} className="text-sm text-gray-700">
                      {q}
                    </p>
                  ))}
                </ENaploSection>
              )}

              {/* Defects */}
              {day.defects.length > 0 && (
                <ENaploSection
                  icon={<AlertTriangle size={18} />}
                  title="Hibák, hiányosságok"
                  color="#EF4444"
                >
                  <ul className="space-y-1.5">
                    {day.defects.map((d, i) => (
                      <li
                        key={i}
                        className="text-sm text-red-700 bg-red-50 px-3 py-2 rounded-lg"
                      >
                        ⚠ {d}
                      </li>
                    ))}
                  </ul>
                </ENaploSection>
              )}

              {/* Other Notes */}
              {day.otherNotes.length > 0 && (
                <ENaploSection
                  icon={<MessageSquare size={18} />}
                  title="Egyéb megjegyzések"
                  color="#6B7280"
                >
                  <ul className="space-y-1">
                    {day.otherNotes.map((n, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        • {n}
                      </li>
                    ))}
                  </ul>
                </ENaploSection>
              )}

              {/* Signature area */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 text-center">
                <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                  Bejegyzést készítette
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Kovács Tamás
                </p>
                <p className="text-xs text-gray-500">
                  Felelős műszaki vezető
                </p>
                <p className="text-[10px] text-gray-400 mt-2">
                  Generálta: BuildLog AI — automatikus e-napló előkészítő
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Raw text preview */}
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 rounded-xl p-5 text-xs leading-relaxed overflow-x-auto whitespace-pre font-mono max-h-[600px] overflow-y-auto">
                  {fullText}
                </pre>
                <button
                  onClick={handleCopy}
                  className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Másolva!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Másolás
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom action buttons */}
      <div
        className={`${showMobileLayout ? "px-4" : "px-8"} pb-8 space-y-3`}
      >
        <button
          onClick={handleCopy}
          className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check size={18} />
              Szöveg másolva a vágólapra!
            </>
          ) : (
            <>
              <Copy size={18} />
              Másolás a vágólapra — beillesztés az e-naplóba
            </>
          )}
        </button>

        <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <FileDown size={16} />
          Letöltés PDF-ként
        </button>

        <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <ExternalLink size={16} />
          Megnyitás: e-epites.hu/e-naplo
        </button>
      </div>
    </div>
  );
}

function ENaploSection({
  icon,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div
        className="px-4 py-2.5 flex items-center gap-2 border-b border-gray-50"
        style={{ backgroundColor: color + "08" }}
      >
        <span style={{ color }}>{icon}</span>
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="px-4 py-3">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}
