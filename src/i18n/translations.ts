export type Locale = "hu" | "en";

export interface Translations {
  // App
  appName: string;
  appSubtitle: string;
  appDescription: string;

  // Navigation
  navProjects: string;
  navSearch: string;
  navSettings: string;

  // Project list
  activeProjects: string;
  entries: string;
  lastActivity: string;

  // Project feed
  eNaploExport: string;
  summary: string;
  capture: string;
  noEntriesThisDay: string;
  noEntries: string;

  // Date navigator
  dateDay: string;
  dateWeek: string;
  dateMonth: string;
  dateAll: string;
  today: string;
  yesterday: string;

  // Filter tabs
  filterAll: string;
  filterDefects: string;
  filterDeliveries: string;
  filterInvoices: string;
  filterMaterials: string;
  filterReports: string;
  filterNotes: string;

  // Categories
  catDefect: string;
  catDelivery: string;
  catMaterial: string;
  catReport: string;
  catInvoice: string;
  catNote: string;

  // Statuses
  statusOpen: string;
  statusInProgress: string;
  statusDone: string;

  // Capture screen
  newEntry: string;
  takePhoto: string;
  takePhotoDesc: string;
  voiceRecording: string;
  voiceRecordingDesc: string;
  textNote: string;
  textNoteDesc: string;

  // Photo capture
  addDescription: string;
  writeSomething: string;
  orText: string;
  holdAndSpeak: string;
  skip: string;
  continue_: string;

  // Voice capture
  recording: string;
  stopRecording: string;
  iRecordedThis: string;
  playback: string;
  retry: string;

  // AI processing
  processing: string;
  aiAnalyzing: string;
  processed: string;
  save: string;
  edit: string;
  somethingWrong: string;

  // Entry detail
  entryNotFound: string;
  urgent: string;
  project: string;
  location: string;
  date: string;
  source: string;
  supplier: string;
  invoiceNumber: string;
  deliveryNoteNumber: string;
  receiver: string;
  items: string;
  type: string;
  description: string;
  todo: string;
  responsible: string;
  priority: string;
  status: string;
  photo: string;
  attached: string;
  reportDetails: string;
  crew: string;
  completed: string;
  inProgress: string;
  notes: string;
  originalVoiceRecording: string;
  shareExport: string;

  // Search
  search: string;
  searchPlaceholder: string;
  noSearchResults: string;
  resultsCount: string;
  resultsInAllProjects: string;

  // e-Napló
  enaploTitle: string;
  enaploSubtitle: string;
  enaploInfoBanner: string;
  enaploStructured: string;
  enaploadCopyable: string;
  enaploWeather: string;
  enaploCrew: string;
  enaploWorkDone: string;
  enaploMaterials: string;
  enaploDeliveries: string;
  enaploEquipment: string;
  enaploQuality: string;
  enaploDefects: string;
  enaploOtherNotes: string;
  enaploSignature: string;
  enaploPreparedBy: string;
  enaploGeneratedBy: string;
  enaploCopyClipboard: string;
  enaploCopied: string;
  enaploDownloadPdf: string;
  enaploOpenEepites: string;
  enaploTemperature: string;
  enaploConditions: string;
  enaploWind: string;
  enaploPrecipitation: string;
  enaploTrade: string;
  enaploCount: string;
  enaploHours: string;
  enaploTotal: string;
  enaploNoEntry: string;
  enaploNoDelivery: string;
  enaploNoNote: string;
  enaploNoDefect: string;

  // Summary
  summaryTitle: string;
  summaryTotalEntries: string;
  summaryActiveDays: string;
  summaryCrewDays: string;
  summaryProgress: string;
  summaryProjectProgress: string;
  summaryWeeklyActivity: string;
  summaryEntriesByType: string;
  summaryDefectReport: string;
  summaryDefectsOpen: string;
  summaryDefectsInProgress: string;
  summaryDefectsResolved: string;
  summaryDefectsAvgResolution: string;
  summaryDays: string;
  summaryByLocation: string;
  summaryCostSummary: string;
  summaryTotalInvoiced: string;
  summarySuppliers: string;
  summaryTopMaterials: string;
  summaryCrewOverview: string;
  summaryDeliveries: string;

  // Language
  language: string;
  hungarian: string;
  english: string;

  // Misc
  demoVersion: string;
  persons: string;
}

export const hu: Translations = {
  appName: "BuildLog AI",
  appSubtitle: "Építési napló",
  appDescription: "AI-alapú építési dokumentáció és helyszíni adatkezelő rendszer",

  navProjects: "Projektek",
  navSearch: "Keresés",
  navSettings: "Beállítások",

  activeProjects: "Aktív projektek",
  entries: "bejegyzés",
  lastActivity: "Utolsó",

  eNaploExport: "e-Napló Export",
  summary: "Összefoglaló",
  capture: "Rögzítés",
  noEntriesThisDay: "Nincs bejegyzés ezen a napon",
  noEntries: "Nincsenek bejegyzések",

  dateDay: "Nap",
  dateWeek: "Hét",
  dateMonth: "Hónap",
  dateAll: "Mind",
  today: "Ma",
  yesterday: "Tegnap",

  filterAll: "Mind",
  filterDefects: "Hibák",
  filterDeliveries: "Szállítók",
  filterInvoices: "Számlák",
  filterMaterials: "Anyagok",
  filterReports: "Riportok",
  filterNotes: "Jegyzetek",

  catDefect: "HIBA",
  catDelivery: "SZÁLLÍTÓLEVÉL",
  catMaterial: "ANYAGFELHASZNÁLÁS",
  catReport: "NAPI RIPORT",
  catInvoice: "SZÁMLA",
  catNote: "JEGYZET",

  statusOpen: "Nyitott",
  statusInProgress: "Folyamatban",
  statusDone: "Kész",

  newEntry: "Új bejegyzés",
  takePhoto: "Fotó készítése",
  takePhotoDesc: "Hiba, szállítólevél, számla, bármi amit a helyszínen látsz",
  voiceRecording: "Hangfelvétel",
  voiceRecordingDesc: "Mondd el mi történt — az AI feldolgozza",
  textNote: "Szöveges jegyzet",
  textNoteDesc: "Gyors megjegyzés vagy helyszíni megfigyelés",

  addDescription: "Adj hozzá leírást:",
  writeSomething: "Írj valamit...",
  orText: "vagy",
  holdAndSpeak: "Tartsd nyomva és beszélj",
  skip: "Kihagyás",
  continue_: "Tovább",

  recording: "Felvétel...",
  stopRecording: "Leállítás",
  iRecordedThis: "Ezt rögzítettem:",
  playback: "Visszahallgatás",
  retry: "Újra",

  processing: "Feldolgozás...",
  aiAnalyzing: "Az AI elemzi a bejegyzést",
  processed: "Feldolgozva!",
  save: "Mentés",
  edit: "Szerkesztés",
  somethingWrong: "Valami nem stimmel?",

  entryNotFound: "Bejegyzés nem található",
  urgent: "Sürgős!",
  project: "Projekt",
  location: "Helyszín",
  date: "Dátum",
  source: "Forrás",
  supplier: "Szállító",
  invoiceNumber: "Számla szám",
  deliveryNoteNumber: "Szállítólevél szám",
  receiver: "Átvevő",
  items: "Tételek",
  type: "Típus",
  description: "Leírás",
  todo: "Teendő",
  responsible: "Felelős",
  priority: "Prioritás",
  status: "Státusz",
  photo: "Fotó",
  attached: "csatolva",
  reportDetails: "Riport részletei",
  crew: "Létszám",
  completed: "Elkészült",
  inProgress: "Folyamatban",
  notes: "Megjegyzések",
  originalVoiceRecording: "Eredeti hangfelvétel",
  shareExport: "Megosztás (PDF/Email)",

  search: "Keresés",
  searchPlaceholder: "Keresés a bejegyzésekben...",
  noSearchResults: "Nincs találat erre a keresésre",
  resultsCount: "találat",
  resultsInAllProjects: "minden projektben",

  enaploTitle: "Elektronikus Építési Napló",
  enaploSubtitle: "Automatikus e-napló előkészítő",
  enaploInfoBanner: "A BuildLog AI automatikusan összegyűjti és strukturálja a napi bejegyzéseket az e-napló formátumnak megfelelően. Másolja ki az adatokat és illessze be az e-epites.hu rendszerbe.",
  enaploStructured: "Strukturált",
  enaploadCopyable: "Másolható szöveg",
  enaploWeather: "Időjárási viszonyok",
  enaploCrew: "Munkaerő / Létszám",
  enaploWorkDone: "Elvégzett munkák leírása",
  enaploMaterials: "Felhasznált anyagok",
  enaploDeliveries: "Anyagszállítások",
  enaploEquipment: "Alkalmazott gépek, berendezések",
  enaploQuality: "Minőségi észrevételek",
  enaploDefects: "Hibák, hiányosságok",
  enaploOtherNotes: "Egyéb megjegyzések",
  enaploSignature: "Aláírás",
  enaploPreparedBy: "Bejegyzést készítette",
  enaploGeneratedBy: "Generálta: BuildLog AI — automatikus e-napló előkészítő",
  enaploCopyClipboard: "Másolás vágólapra",
  enaploCopied: "Másolva!",
  enaploDownloadPdf: "Letöltés PDF-ként",
  enaploOpenEepites: "Megnyitás e-epites.hu",
  enaploTemperature: "Hőmérséklet",
  enaploConditions: "Időjárás",
  enaploWind: "Szél",
  enaploPrecipitation: "Csapadék",
  enaploTrade: "Szakma",
  enaploCount: "Létszám",
  enaploHours: "Munkaidő",
  enaploTotal: "Összesen",
  enaploNoEntry: "Nincs bejegyzés.",
  enaploNoDelivery: "Nincs szállítás.",
  enaploNoNote: "Nincs megjegyzés.",
  enaploNoDefect: "Nincs hiba.",

  summaryTitle: "Projekt Összefoglaló",
  summaryTotalEntries: "Összes bejegyzés",
  summaryActiveDays: "Aktív napok",
  summaryCrewDays: "Összes munkanap",
  summaryProgress: "Készültség",
  summaryProjectProgress: "Projekt haladás",
  summaryWeeklyActivity: "Heti aktivitás",
  summaryEntriesByType: "Bejegyzések típus szerint",
  summaryDefectReport: "Hiba riport",
  summaryDefectsOpen: "Nyitott",
  summaryDefectsInProgress: "Folyamatban",
  summaryDefectsResolved: "Megoldva",
  summaryDefectsAvgResolution: "Átl. megoldás",
  summaryDays: "nap",
  summaryByLocation: "Helyszín szerint",
  summaryCostSummary: "Költség összesítő",
  summaryTotalInvoiced: "Összes számlázott",
  summarySuppliers: "Beszállítók",
  summaryTopMaterials: "Leggyakoribb anyagok",
  summaryCrewOverview: "Munkaerő áttekintés",
  summaryDeliveries: "Szállítások",

  language: "Nyelv",
  hungarian: "Magyar",
  english: "English",

  demoVersion: "Demo verzió",
  persons: "fő",
};

export const en: Translations = {
  appName: "BuildLog AI",
  appSubtitle: "Construction Log",
  appDescription: "AI-powered construction documentation and field data management system",

  navProjects: "Projects",
  navSearch: "Search",
  navSettings: "Settings",

  activeProjects: "Active projects",
  entries: "entries",
  lastActivity: "Last",

  eNaploExport: "e-Log Export",
  summary: "Summary",
  capture: "Capture",
  noEntriesThisDay: "No entries for this day",
  noEntries: "No entries",

  dateDay: "Day",
  dateWeek: "Week",
  dateMonth: "Month",
  dateAll: "All",
  today: "Today",
  yesterday: "Yesterday",

  filterAll: "All",
  filterDefects: "Defects",
  filterDeliveries: "Deliveries",
  filterInvoices: "Invoices",
  filterMaterials: "Materials",
  filterReports: "Reports",
  filterNotes: "Notes",

  catDefect: "DEFECT",
  catDelivery: "DELIVERY NOTE",
  catMaterial: "MATERIAL USAGE",
  catReport: "DAILY REPORT",
  catInvoice: "INVOICE",
  catNote: "NOTE",

  statusOpen: "Open",
  statusInProgress: "In Progress",
  statusDone: "Done",

  newEntry: "New entry",
  takePhoto: "Take photo",
  takePhotoDesc: "Defect, delivery note, invoice — anything you see on site",
  voiceRecording: "Voice recording",
  voiceRecordingDesc: "Tell us what happened — AI processes it",
  textNote: "Text note",
  textNoteDesc: "Quick note or field observation",

  addDescription: "Add description:",
  writeSomething: "Write something...",
  orText: "or",
  holdAndSpeak: "Hold and speak",
  skip: "Skip",
  continue_: "Continue",

  recording: "Recording...",
  stopRecording: "Stop",
  iRecordedThis: "I recorded this:",
  playback: "Play back",
  retry: "Retry",

  processing: "Processing...",
  aiAnalyzing: "AI is analyzing the entry",
  processed: "Processed!",
  save: "Save",
  edit: "Edit",
  somethingWrong: "Something not right?",

  entryNotFound: "Entry not found",
  urgent: "Urgent!",
  project: "Project",
  location: "Location",
  date: "Date",
  source: "Source",
  supplier: "Supplier",
  invoiceNumber: "Invoice No.",
  deliveryNoteNumber: "Delivery note No.",
  receiver: "Receiver",
  items: "Items",
  type: "Type",
  description: "Description",
  todo: "To-do",
  responsible: "Responsible",
  priority: "Priority",
  status: "Status",
  photo: "Photo",
  attached: "attached",
  reportDetails: "Report details",
  crew: "Crew",
  completed: "Completed",
  inProgress: "In progress",
  notes: "Notes",
  originalVoiceRecording: "Original voice recording",
  shareExport: "Share (PDF/Email)",

  search: "Search",
  searchPlaceholder: "Search entries...",
  noSearchResults: "No results for this search",
  resultsCount: "results",
  resultsInAllProjects: "in all projects",

  enaploTitle: "Electronic Construction Log",
  enaploSubtitle: "Automatic e-log preparation tool",
  enaploInfoBanner: "BuildLog AI automatically collects and structures daily entries in the official construction log format. Copy the data and paste it into the e-epites.hu system.",
  enaploStructured: "Structured",
  enaploadCopyable: "Copyable text",
  enaploWeather: "Weather conditions",
  enaploCrew: "Workforce / Headcount",
  enaploWorkDone: "Work performed",
  enaploMaterials: "Materials used",
  enaploDeliveries: "Material deliveries",
  enaploEquipment: "Equipment used",
  enaploQuality: "Quality observations",
  enaploDefects: "Defects / Issues",
  enaploOtherNotes: "Other notes",
  enaploSignature: "Signature",
  enaploPreparedBy: "Prepared by",
  enaploGeneratedBy: "Generated by: BuildLog AI — automatic e-log preparation tool",
  enaploCopyClipboard: "Copy to clipboard",
  enaploCopied: "Copied!",
  enaploDownloadPdf: "Download as PDF",
  enaploOpenEepites: "Open e-epites.hu",
  enaploTemperature: "Temperature",
  enaploConditions: "Weather",
  enaploWind: "Wind",
  enaploPrecipitation: "Precipitation",
  enaploTrade: "Trade",
  enaploCount: "Count",
  enaploHours: "Hours",
  enaploTotal: "Total",
  enaploNoEntry: "No entry.",
  enaploNoDelivery: "No deliveries.",
  enaploNoNote: "No notes.",
  enaploNoDefect: "No defects.",

  summaryTitle: "Project Summary",
  summaryTotalEntries: "Total entries",
  summaryActiveDays: "Active days",
  summaryCrewDays: "Total crew days",
  summaryProgress: "Progress",
  summaryProjectProgress: "Project progress",
  summaryWeeklyActivity: "Weekly activity",
  summaryEntriesByType: "Entries by type",
  summaryDefectReport: "Defect report",
  summaryDefectsOpen: "Open",
  summaryDefectsInProgress: "In progress",
  summaryDefectsResolved: "Resolved",
  summaryDefectsAvgResolution: "Avg. resolution",
  summaryDays: "days",
  summaryByLocation: "By location",
  summaryCostSummary: "Cost summary",
  summaryTotalInvoiced: "Total invoiced",
  summarySuppliers: "Suppliers",
  summaryTopMaterials: "Top materials",
  summaryCrewOverview: "Crew overview",
  summaryDeliveries: "Deliveries",

  language: "Language",
  hungarian: "Magyar",
  english: "English",

  demoVersion: "Demo version",
  persons: "persons",
};

export const translations: Record<Locale, Translations> = { hu, en };
