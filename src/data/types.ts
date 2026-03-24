export type EntryCategory =
  | "defect"
  | "delivery"
  | "material"
  | "report"
  | "invoice"
  | "note";

export type EntryStatus = "open" | "in_progress" | "done";

export type CaptureSource = "photo" | "voice" | "text" | "photo+voice";

export interface Project {
  id: string;
  name: string;
  address: string;
  description: string;
  entryCount: number;
  progress: number;
  lastActivity: string;
}

export interface EntryItem {
  id: string;
  projectId: string;
  category: EntryCategory;
  title: string;
  description?: string;
  location?: string;
  date: string;
  time?: string;
  dateLabel: string;
  status?: EntryStatus;
  source?: CaptureSource;
  hasPhoto?: boolean;
  photoUrl?: string;
  isUrgent?: boolean;
  amount?: string;
  supplier?: string;
  invoiceNumber?: string;
  items?: { name: string; quantity: string; unit: string }[];
  reportData?: {
    crew?: string;
    completed?: string[];
    inProgress?: string[];
    notes?: string[];
  };
}

export interface EntryDetail extends EntryItem {
  fullDescription?: string;
  responsible?: string;
  priority?: string;
  paymentDue?: string;
  netAmount?: string;
  vatAmount?: string;
  receiver?: string;
  deliveryNumber?: string;
}

export interface SearchResult {
  query: string;
  results: EntryItem[];
}

export const CATEGORY_CONFIG: Record<
  EntryCategory,
  { label: string; color: string; bgColor: string; icon: string }
> = {
  defect: {
    label: "HIBA",
    color: "#EF4444",
    bgColor: "#FEF2F2",
    icon: "AlertTriangle",
  },
  delivery: {
    label: "SZALLITOLEVEL",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    icon: "Package",
  },
  material: {
    label: "ANYAGFELHASZNALÁS",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    icon: "Hammer",
  },
  report: {
    label: "NAPI RIPORT",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    icon: "ClipboardList",
  },
  invoice: {
    label: "SZAMLA",
    color: "#6B7280",
    bgColor: "#F9FAFB",
    icon: "FileText",
  },
  note: {
    label: "JEGYZET",
    color: "#10B981",
    bgColor: "#ECFDF5",
    icon: "StickyNote",
  },
};

export const STATUS_CONFIG: Record<
  EntryStatus,
  { label: string; color: string; bgColor: string }
> = {
  open: { label: "Nyitott", color: "#EF4444", bgColor: "#FEF2F2" },
  in_progress: {
    label: "Folyamatban",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
  done: { label: "Kész", color: "#10B981", bgColor: "#ECFDF5" },
};

export const FILTER_TABS = [
  { key: "all", label: "Mind" },
  { key: "defect", label: "Hibák" },
  { key: "delivery", label: "Szállítók" },
  { key: "invoice", label: "Számlák" },
  { key: "material", label: "Anyagok" },
  { key: "report", label: "Riportok" },
  { key: "note", label: "Jegyzetek" },
] as const;
