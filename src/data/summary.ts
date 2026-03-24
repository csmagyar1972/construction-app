export interface ProjectSummary {
  overview: {
    totalEntries: number;
    totalDays: number;
    totalCrewDays: number;
    progress: number;
  };
  defects: {
    total: number;
    open: number;
    inProgress: number;
    resolved: number;
    avgResolutionDays: number;
    byLocation: { location: string; count: number }[];
    urgent: number;
  };
  materials: {
    totalInvoiced: string;
    totalInvoicedNum: number;
    suppliers: { name: string; amount: string; invoiceCount: number }[];
    topMaterials: { name: string; quantity: string }[];
  };
  deliveries: {
    total: number;
    suppliers: string[];
  };
  dailyReports: {
    total: number;
    avgCrew: number;
    totalRoomsCompleted: number;
  };
  timeline: {
    date: string;
    label: string;
    entries: number;
    crew: number;
  }[];
  categoryBreakdown: {
    category: string;
    label: string;
    count: number;
    color: string;
    percentage: number;
  }[];
}

export const projectSummaries: Record<string, ProjectSummary> = {
  heviz: {
    overview: {
      totalEntries: 47,
      totalDays: 18,
      totalCrewDays: 94,
      progress: 68,
    },
    defects: {
      total: 12,
      open: 4,
      inProgress: 2,
      resolved: 6,
      avgResolutionDays: 3.2,
      byLocation: [
        { location: "4. emelet", count: 4 },
        { location: "2. emelet", count: 3 },
        { location: "3. emelet", count: 3 },
        { location: "1. emelet", count: 2 },
      ],
      urgent: 1,
    },
    materials: {
      totalInvoiced: "3.847.150 Ft",
      totalInvoicedNum: 3847150,
      suppliers: [
        { name: "Baumit Kft.", amount: "1.245.800 Ft", invoiceCount: 3 },
        { name: "Építő Szaküzlet Kft.", amount: "487.350 Ft", invoiceCount: 2 },
        { name: "Zalakerámia Zrt.", amount: "892.000 Ft", invoiceCount: 1 },
        { name: "Bramac Kft.", amount: "1.222.000 Ft", invoiceCount: 1 },
      ],
      topMaterials: [
        { name: "Baumit ProContact ragasztó", quantity: "180 zsák" },
        { name: "Zalakerámia Taurus 30x30", quantity: "320 m²" },
        { name: "Üvegszövet háló 160g", quantity: "45 tekercs" },
        { name: "Fugázó anyag (Mapei)", quantity: "60 kg" },
        { name: "Glett (Knauf Rotband)", quantity: "24 zsák" },
      ],
    },
    deliveries: {
      total: 8,
      suppliers: ["Baumit GmbH", "Zalakerámia Zrt.", "Bramac Kft.", "Mapei Kft."],
    },
    dailyReports: {
      total: 14,
      avgCrew: 5.4,
      totalRoomsCompleted: 18,
    },
    timeline: [
      { date: "03.18", label: "Hé", entries: 2, crew: 4 },
      { date: "03.19", label: "Ke", entries: 3, crew: 5 },
      { date: "03.20", label: "Sze", entries: 4, crew: 6 },
      { date: "03.21", label: "Csü", entries: 5, crew: 5 },
      { date: "03.22", label: "Pé", entries: 2, crew: 0 },
      { date: "03.23", label: "Szo", entries: 6, crew: 5 },
      { date: "03.24", label: "Va", entries: 7, crew: 6 },
    ],
    categoryBreakdown: [
      { category: "defect", label: "Hibák", count: 12, color: "#EF4444", percentage: 26 },
      { category: "delivery", label: "Szállítók", count: 8, color: "#3B82F6", percentage: 17 },
      { category: "invoice", label: "Számlák", count: 6, color: "#6B7280", percentage: 13 },
      { category: "material", label: "Anyagok", count: 9, color: "#F59E0B", percentage: 19 },
      { category: "report", label: "Riportok", count: 5, color: "#8B5CF6", percentage: 11 },
      { category: "note", label: "Jegyzetek", count: 7, color: "#10B981", percentage: 15 },
    ],
  },
  budapest: {
    overview: {
      totalEntries: 124,
      totalDays: 45,
      totalCrewDays: 540,
      progress: 85,
    },
    defects: {
      total: 18,
      open: 3,
      inProgress: 4,
      resolved: 11,
      avgResolutionDays: 2.8,
      byLocation: [
        { location: "3. emelet", count: 5 },
        { location: "Parkoló", count: 4 },
        { location: "4. emelet", count: 4 },
        { location: "2. emelet", count: 3 },
        { location: "1. emelet", count: 2 },
      ],
      urgent: 0,
    },
    materials: {
      totalInvoiced: "12.456.800 Ft",
      totalInvoicedNum: 12456800,
      suppliers: [
        { name: "Würth Kft.", amount: "2.892.400 Ft", invoiceCount: 4 },
        { name: "TBG Betonkeverő Kft.", amount: "3.560.000 Ft", invoiceCount: 6 },
        { name: "Rehau Kft.", amount: "1.845.000 Ft", invoiceCount: 2 },
        { name: "Schneider Electric", amount: "2.234.400 Ft", invoiceCount: 3 },
        { name: "Egyéb", amount: "1.925.000 Ft", invoiceCount: 5 },
      ],
      topMaterials: [
        { name: "Beton C25/30", quantity: "86 m³" },
        { name: "NYM-J 3x2.5 kábel", quantity: "2.400 fm" },
        { name: "Rehau cső d32", quantity: "680 fm" },
        { name: "Zsaluzat elem", quantity: "240 m²" },
        { name: "Betonacél Ø12", quantity: "4.200 kg" },
      ],
    },
    deliveries: {
      total: 24,
      suppliers: ["Würth Kft.", "TBG Betonkeverő", "Rehau Kft.", "Schneider Electric", "Doka Kft."],
    },
    dailyReports: {
      total: 38,
      avgCrew: 12.2,
      totalRoomsCompleted: 0,
    },
    timeline: [
      { date: "03.18", label: "Hé", entries: 5, crew: 11 },
      { date: "03.19", label: "Ke", entries: 4, crew: 13 },
      { date: "03.20", label: "Sze", entries: 6, crew: 12 },
      { date: "03.21", label: "Csü", entries: 3, crew: 10 },
      { date: "03.22", label: "Pé", entries: 5, crew: 14 },
      { date: "03.23", label: "Szo", entries: 7, crew: 12 },
      { date: "03.24", label: "Va", entries: 6, crew: 12 },
    ],
    categoryBreakdown: [
      { category: "defect", label: "Hibák", count: 18, color: "#EF4444", percentage: 15 },
      { category: "delivery", label: "Szállítók", count: 24, color: "#3B82F6", percentage: 19 },
      { category: "invoice", label: "Számlák", count: 20, color: "#6B7280", percentage: 16 },
      { category: "material", label: "Anyagok", count: 22, color: "#F59E0B", percentage: 18 },
      { category: "report", label: "Riportok", count: 38, color: "#8B5CF6", percentage: 31 },
      { category: "note", label: "Jegyzetek", count: 2, color: "#10B981", percentage: 2 },
    ],
  },
  balatonfured: {
    overview: {
      totalEntries: 12,
      totalDays: 5,
      totalCrewDays: 15,
      progress: 22,
    },
    defects: {
      total: 1,
      open: 1,
      inProgress: 0,
      resolved: 0,
      avgResolutionDays: 0,
      byLocation: [
        { location: "Északi oldal", count: 1 },
      ],
      urgent: 0,
    },
    materials: {
      totalInvoiced: "0 Ft",
      totalInvoicedNum: 0,
      suppliers: [],
      topMaterials: [
        { name: "CEM II/B-S 32.5 R cement", quantity: "15 tonna" },
      ],
    },
    deliveries: {
      total: 1,
      suppliers: ["Duna-Dráva Cement Kft."],
    },
    dailyReports: {
      total: 2,
      avgCrew: 3,
      totalRoomsCompleted: 0,
    },
    timeline: [
      { date: "03.20", label: "Pé", entries: 1, crew: 0 },
      { date: "03.21", label: "Szo", entries: 0, crew: 0 },
      { date: "03.22", label: "Va", entries: 0, crew: 0 },
      { date: "03.23", label: "Hé", entries: 3, crew: 3 },
      { date: "03.24", label: "Ke", entries: 3, crew: 3 },
    ],
    categoryBreakdown: [
      { category: "defect", label: "Hibák", count: 1, color: "#EF4444", percentage: 8 },
      { category: "delivery", label: "Szállítók", count: 1, color: "#3B82F6", percentage: 8 },
      { category: "report", label: "Riportok", count: 2, color: "#8B5CF6", percentage: 17 },
      { category: "note", label: "Jegyzetek", count: 3, color: "#10B981", percentage: 25 },
    ],
  },
};
