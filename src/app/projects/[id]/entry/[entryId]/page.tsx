"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { CATEGORY_CONFIG } from "@/data/types";
import { CategoryBadge } from "@/components/app-ui/CategoryBadge";
import { StatusBadge } from "@/components/app-ui/StatusBadge";
import { useViewMode } from "@/hooks/useViewMode";
import { useLanguage } from "@/i18n/LanguageContext";
import { getLocalizedData } from "@/data/localized";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Camera,
  Mic,
  Share2,
  User,
  AlertCircle,
  Image,
  FileText,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

export default function EntryDetailPage({
  params,
}: {
  params: Promise<{ id: string; entryId: string }>;
}) {
  const { id, entryId } = use(params);
  const router = useRouter();
  const { isMobile, isPhonePreview } = useViewMode();
  const showMobileLayout = isMobile || isPhonePreview;
  const { t, locale } = useLanguage();
  const data = getLocalizedData(locale);

  // Try detailed version first, then find in entries
  const detail = data.entryDetails[entryId];
  const allProjectEntries = data.entries[id] || [];
  const entry = detail || allProjectEntries.find((e) => e.id === entryId);
  const project = data.projects.find((p) => p.id === id);

  if (!entry) {
    return (
      <div className="p-8 text-center text-gray-400">
        {t.entryNotFound}
      </div>
    );
  }

  const config = CATEGORY_CONFIG[entry.category];

  const sourceLabel = (source: string) => {
    if (source === "photo+voice") return locale === "hu" ? "Fotó + Hangfelvétel" : "Photo + Voice";
    if (source === "photo") return locale === "hu" ? "Fotó" : "Photo";
    if (source === "voice") return locale === "hu" ? "Hangfelvétel" : "Voice recording";
    return locale === "hu" ? "Szöveges jegyzet" : "Text note";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      {/* Header */}
      <div
        className={`${showMobileLayout ? "px-4 pt-2 pb-3" : "px-8 pt-8 pb-4"} flex items-center gap-3`}
      >
        <button
          onClick={() => router.back()}
          className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex-1">
          <p className="text-xs text-gray-400">{project?.name}</p>
        </div>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Share2 size={18} className="text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className={`${showMobileLayout ? "px-4" : "px-8"} pb-8`}>
        {/* Category + Status */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <CategoryBadge category={entry.category} />
          {entry.isUrgent && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
              <AlertCircle size={12} />
              {t.urgent}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900 mb-2">{entry.title}</h1>
        {(detail?.fullDescription || entry.description) && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {detail?.fullDescription || entry.description}
          </p>
        )}

        {/* Photo */}
        {entry.hasPhoto && (
          <div className="mb-5 rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
            {entry.photoUrl ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${entry.photoUrl})`,
                  backgroundColor: config.bgColor,
                }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: config.bgColor }}
              >
                <Image size={48} style={{ color: config.color }} className="opacity-30" />
              </div>
            )}
          </div>
        )}

        {/* Detail Fields */}
        <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
          <DetailRow
            icon={<FileText size={16} />}
            label={t.project}
            value={project?.name || ""}
          />
          {entry.location && (
            <DetailRow
              icon={<MapPin size={16} />}
              label={t.location}
              value={entry.location}
            />
          )}
          <DetailRow
            icon={<Calendar size={16} />}
            label={t.date}
            value={`${entry.date} ${entry.time || ""}`}
          />
          {entry.source && (
            <DetailRow
              icon={
                entry.source.includes("photo") ? (
                  <Camera size={16} />
                ) : (
                  <Mic size={16} />
                )
              }
              label={t.source}
              value={sourceLabel(entry.source)}
            />
          )}
          {entry.supplier && (
            <DetailRow
              icon={<User size={16} />}
              label={t.supplier}
              value={entry.supplier}
            />
          )}
          {entry.invoiceNumber && (
            <DetailRow
              icon={<FileText size={16} />}
              label={t.invoiceNumber}
              value={entry.invoiceNumber}
            />
          )}
          {detail?.deliveryNumber && (
            <DetailRow
              icon={<FileText size={16} />}
              label={t.deliveryNoteNumber}
              value={detail.deliveryNumber}
            />
          )}
          {detail?.receiver && (
            <DetailRow
              icon={<User size={16} />}
              label={t.receiver}
              value={detail.receiver}
            />
          )}
          {entry.amount && (
            <DetailRow
              icon={<FileText size={16} />}
              label={locale === "hu" ? "Összeg" : "Amount"}
              value={entry.amount}
            />
          )}
          {detail?.netAmount && (
            <DetailRow
              icon={<FileText size={16} />}
              label={locale === "hu" ? "Nettó / ÁFA" : "Net / VAT"}
              value={`${detail.netAmount} + ${detail.vatAmount}`}
            />
          )}
          {detail?.paymentDue && (
            <DetailRow
              icon={<Calendar size={16} />}
              label={locale === "hu" ? "Fizetési határidő" : "Payment due"}
              value={detail.paymentDue}
            />
          )}
          {detail?.responsible && (
            <DetailRow
              icon={<User size={16} />}
              label={t.responsible}
              value={detail.responsible}
            />
          )}
          {detail?.priority && (
            <DetailRow
              icon={<AlertCircle size={16} />}
              label={t.priority}
              value={detail.priority}
            />
          )}
        </div>

        {/* Items Table */}
        {entry.items && entry.items.length > 0 && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {t.items}
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-xs text-gray-500 uppercase">
                    <th className="text-left px-4 py-2.5 font-medium">
                      {locale === "hu" ? "Termék" : "Product"}
                    </th>
                    <th className="text-right px-4 py-2.5 font-medium">
                      {locale === "hu" ? "Mennyiség" : "Quantity"}
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium">
                      {locale === "hu" ? "Egység" : "Unit"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {entry.items.map((item, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-gray-900">{item.name}</td>
                      <td className="px-4 py-3 text-right font-medium text-gray-900">
                        {item.quantity}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Report Data */}
        {entry.reportData && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {t.reportDetails}
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
              {entry.reportData.crew && (
                <div>
                  <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                    {t.crew}
                  </p>
                  <p className="text-sm text-gray-900">
                    {entry.reportData.crew}
                  </p>
                </div>
              )}
              {entry.reportData.completed &&
                entry.reportData.completed.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                      {t.completed}
                    </p>
                    {entry.reportData.completed.map((item, i) => (
                      <p key={i} className="text-sm text-green-600">
                        ✓ {item}
                      </p>
                    ))}
                  </div>
                )}
              {entry.reportData.inProgress &&
                entry.reportData.inProgress.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                      {t.inProgress}
                    </p>
                    {entry.reportData.inProgress.map((item, i) => (
                      <p key={i} className="text-sm text-amber-600">
                        ◐ {item}
                      </p>
                    ))}
                  </div>
                )}
              {entry.reportData.notes &&
                entry.reportData.notes.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                      {t.notes}
                    </p>
                    {entry.reportData.notes.map((item, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
            </div>
          </div>
        )}

        {/* Status Toggle */}
        {entry.status && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {t.status}
            </h3>
            <StatusBadge status={entry.status} interactive />
          </div>
        )}

        {/* Voice Playback (visual only) */}
        {(entry.source === "voice" || entry.source === "photo+voice") && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {t.originalVoiceRecording}
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Play size={18} className="text-blue-600 ml-0.5" />
              </button>
              <div className="flex-1">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-blue-400 rounded-full" />
                </div>
              </div>
              <span className="text-xs text-gray-400">0:04</span>
            </div>
          </div>
        )}

        {/* Share Button */}
        <button className="mt-6 w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <Share2 size={16} />
          {t.shareExport}
        </button>
      </div>
    </motion.div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center px-4 py-3 gap-3">
      <span className="text-gray-400">{icon}</span>
      <span className="text-xs text-gray-400 w-28 flex-shrink-0">{label}</span>
      <span className="text-sm text-gray-900 font-medium">{value}</span>
    </div>
  );
}
