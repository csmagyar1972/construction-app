import { Locale } from "@/i18n/translations";
import { Project, EntryItem, EntryDetail } from "./types";

// ─── Projects ───────────────────────────────────────────────────────────────

const projectsHu: Project[] = [
  {
    id: "heviz",
    name: "Hévíz Le Primore Hotel",
    address: "Hévíz, Széchenyi u. 12.",
    description: "Szálloda felújítás, 86 szoba",
    entryCount: 47,
    progress: 68,
    lastActivity: "ma 09:41",
  },
  {
    id: "budapest",
    name: "Budapest Lakópark B épület",
    address: "Budapest XIII., Petneházy u. 34.",
    description: "4 emeletes társasház, 24 lakás",
    entryCount: 124,
    progress: 85,
    lastActivity: "ma 16:30",
  },
  {
    id: "balatonfured",
    name: "Balatonfüred Apartman",
    address: "Balatonfüred, Vitorlás tér 8.",
    description: "Luxus apartmanház, 8 lakás",
    entryCount: 12,
    progress: 22,
    lastActivity: "ma 15:00",
  },
];

const projectsEn: Project[] = [
  {
    id: "heviz",
    name: "Hévíz Le Primore Hotel",
    address: "Hévíz, Széchenyi u. 12.",
    description: "Hotel renovation, 86 rooms",
    entryCount: 47,
    progress: 68,
    lastActivity: "today 09:41",
  },
  {
    id: "budapest",
    name: "Budapest Residential Park B",
    address: "Budapest XIII., Petneházy u. 34.",
    description: "4-story apartment building, 24 units",
    entryCount: 124,
    progress: 85,
    lastActivity: "today 16:30",
  },
  {
    id: "balatonfured",
    name: "Balatonfüred Apartments",
    address: "Balatonfüred, Vitorlás tér 8.",
    description: "Luxury apartments, 8 units",
    entryCount: 12,
    progress: 22,
    lastActivity: "today 15:00",
  },
];

// ─── Entries ────────────────────────────────────────────────────────────────

const entriesHu: Record<string, EntryItem[]> = {
  heviz: [
    { id: "h1", projectId: "heviz", category: "defect", title: "Festési hiba — repedés a mennyezeten", description: "Repedés a mennyezeten, kb. 40 cm hosszú, valószínűleg a glettelés száradása során keletkezett", location: "4. emelet / 234-es szoba", date: "2026-03-24", time: "09:41", dateLabel: "ma 09:41", status: "open", source: "photo+voice", hasPhoto: true, photoUrl: "/images/sample-crack.jpg" },
    { id: "h2", projectId: "heviz", category: "delivery", title: "Baumit GmbH — 3 tétel", description: "Szállítólevél: SZL-2026/1847", location: "Raktár", date: "2026-03-24", time: "08:15", dateLabel: "ma 08:15", supplier: "Baumit GmbH", source: "photo", hasPhoto: true, photoUrl: "/images/sample-delivery.jpg", items: [{ name: "Baumit ProContact ragasztó", quantity: "20", unit: "zsák (25kg)" }, { name: "Baumit StarContact alapozó", quantity: "10", unit: "liter" }, { name: "Üvegszövet háló 160g", quantity: "5", unit: "tekercs (50m²)" }] },
    { id: "h3", projectId: "heviz", category: "defect", title: "Vízszivárgás a csőaknánál", description: "Sürgős beavatkozás szükséges, víz szivárog a csőakna tömítésénél", location: "3. emelet / folyosó", date: "2026-03-24", time: "07:30", dateLabel: "ma 07:30", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-pipe.jpg", isUrgent: true },
    { id: "h4", projectId: "heviz", category: "note", title: "Villanyszerelő holnap 8:00-ra jön", description: "Biztosítéktábla csere a 2. emeleten", location: "2. emelet", date: "2026-03-24", time: "07:15", dateLabel: "ma 07:15", source: "text" },
    { id: "h5", projectId: "heviz", category: "material", title: "10 zsák ragasztó (Baumit ProContact)", location: "2. emelet / folyosó", date: "2026-03-23", time: "16:20", dateLabel: "tegnap 16:20", source: "voice", amount: "10 zsák" },
    { id: "h6", projectId: "heviz", category: "report", title: "Napi riport — 5 fő, 3 szoba kész", date: "2026-03-23", time: "17:00", dateLabel: "tegnap 17:00", source: "voice", reportData: { crew: "5 fő (2 burkoló, 2 festő, 1 segédmunkás)", completed: ["228-as szoba burkolása", "229-es szoba burkolása", "230-as szoba burkolása"], inProgress: ["231-es szoba aljzatkiegyenlítés"], notes: ["Ragasztó fogyóban, rendelés szükséges"] } },
    { id: "h7", projectId: "heviz", category: "material", title: "45 m² járólap (Zalakerámia Taurus 30x30)", location: "2. emelet / 228-230 szoba", date: "2026-03-23", time: "16:00", dateLabel: "tegnap 16:00", source: "voice", amount: "45 m²" },
    { id: "h8", projectId: "heviz", category: "defect", title: "Burkolat alatti cső nyomvonal nincs jelölve", description: "A burkolás megkezdése előtt a csővezetékek nyomvonalát jelölni kell", location: "2. emelet / 231-es szoba", date: "2026-03-23", time: "14:15", dateLabel: "tegnap 14:15", status: "open", source: "photo", hasPhoto: true },
    { id: "h9", projectId: "heviz", category: "invoice", title: "Építő Szaküzlet Kft. — 487.350 Ft", description: "14 tétel — fugázó, szilikon, vágókorong, csiszolópapír stb.", date: "2026-03-21", dateLabel: "márc. 21", source: "photo", hasPhoto: true, photoUrl: "/images/sample-invoice.jpg", amount: "487.350 Ft", invoiceNumber: "SZ-2026-0342", supplier: "Építő Szaküzlet Kft." },
    { id: "h10", projectId: "heviz", category: "delivery", title: "Zalakerámia Zrt. — padlólap + sarokléc", description: "Szállítólevél: SZL-4521", date: "2026-03-21", dateLabel: "márc. 21", supplier: "Zalakerámia Zrt.", source: "photo", hasPhoto: true, items: [{ name: "Taurus Granit 30x30 padlólap", quantity: "120", unit: "m²" }, { name: "Sarokléc", quantity: "48", unit: "fm" }] },
    { id: "h11", projectId: "heviz", category: "note", title: "Kiegyenlítés szükséges burkolás előtt", description: "A 301-es szobában az aljzat egyenetlensége miatt kiegyenlítés szükséges a burkolás megkezdése előtt. Feladat létrehozva.", location: "3. emelet / 301-es szoba", date: "2026-03-20", dateLabel: "márc. 20", source: "voice" },
    { id: "h12", projectId: "heviz", category: "report", title: "Napi riport — 6 fő, festés befejezve", date: "2026-03-20", dateLabel: "márc. 20", source: "voice", reportData: { crew: "6 fő (3 burkoló, 2 festő, 1 villanyszerelő)", completed: ["2. emelet festés befejezve (225-227 szobák)"], notes: ["Gépszállítás: csiszológép visszavétel holnap"] } },
    { id: "h13", projectId: "heviz", category: "invoice", title: "Baumit Kft. — 1.245.800 Ft", description: "Hőszigetelő anyagok, ragasztók", date: "2026-03-20", dateLabel: "márc. 20", source: "photo", hasPhoto: true, amount: "1.245.800 Ft", invoiceNumber: "SZ-B-2026/892", supplier: "Baumit Kft." },
    { id: "h14", projectId: "heviz", category: "defect", title: "Ablakkeret sérülés szállítás közben", description: "1 db Bramac ablak (120x150) sérült a szállítás során. Reklamáció elindítva.", location: "4. emelet / 401-es szoba", date: "2026-03-19", dateLabel: "márc. 19", status: "in_progress", source: "photo", hasPhoto: true, photoUrl: "/images/sample-window.jpg" },
    { id: "h15", projectId: "heviz", category: "delivery", title: "Bramac Kft. — ablakok + párkány", description: "Szállítólevél: SZL-8834. 1 db sérült → reklamáció", date: "2026-03-18", dateLabel: "márc. 18", supplier: "Bramac Kft.", source: "photo", hasPhoto: true, items: [{ name: "Bramac ablak 120x150", quantity: "6", unit: "db" }, { name: "Bramac ablak 80x120", quantity: "4", unit: "db" }, { name: "Párkány", quantity: "10", unit: "db" }] },
  ],
  budapest: [
    { id: "b1", projectId: "budapest", category: "report", title: "Napi riport — 12 fő, gépészet + villany", date: "2026-03-24", time: "16:30", dateLabel: "ma 16:30", source: "voice", reportData: { crew: "12 fő", completed: ["4. emelet villanyszerelés befejezve"], inProgress: ["3. emelet gépészet szerelés 75%", "Lift akna zsaluzás elkezdődött"] } },
    { id: "b2", projectId: "budapest", category: "material", title: "250 fm kábel (NYM-J 3x2.5)", location: "4. emelet", date: "2026-03-24", time: "14:00", dateLabel: "ma 14:00", source: "voice", amount: "250 fm" },
    { id: "b3", projectId: "budapest", category: "defect", title: "Betonban repedés az aljzatban", description: "Statikus vélemény szükséges a repedés jellegének meghatározásához", location: "Parkoló / B szekció", date: "2026-03-24", time: "11:20", dateLabel: "ma 11:20", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-concrete.jpg" },
    { id: "b4", projectId: "budapest", category: "invoice", title: "Würth Kft. — 892.400 Ft", description: "Szerszámok és rögzítőelemek", date: "2026-03-23", dateLabel: "márc. 23", source: "photo", hasPhoto: true, amount: "892.400 Ft", invoiceNumber: "W-2026/3345", supplier: "Würth Kft." },
    { id: "b5", projectId: "budapest", category: "delivery", title: "Rehau Kft. — csövek és idomok", description: "34 tétel, szállítólevél ellenőrizve", date: "2026-03-23", dateLabel: "márc. 23", supplier: "Rehau Kft.", source: "photo", hasPhoto: true },
    { id: "b6", projectId: "budapest", category: "defect", title: "Rossz méretű ajtótok beépítve", description: "A 12-es lakásban rossz méretű ajtótokot építettek be. Cserére vár.", location: "3. emelet / 12-es lakás", date: "2026-03-23", dateLabel: "márc. 23", status: "open", source: "photo+voice", hasPhoto: true },
    { id: "b7", projectId: "budapest", category: "note", title: "Közműegyeztetés szerdán 10:00-kor", description: "FCSM kontakt: Tóth Péter. Helyszíni bejárás a közműcsatlakozásokkal kapcsolatban.", date: "2026-03-23", dateLabel: "márc. 23", source: "text" },
    { id: "b8", projectId: "budapest", category: "report", title: "Napi riport — 14 fő, betonozás + gépész", date: "2026-03-22", dateLabel: "márc. 22", source: "voice", reportData: { crew: "14 fő", completed: ["Lift akna alap betonozás", "3. emelet lefolyó rendszer 100%"] } },
    { id: "b9", projectId: "budapest", category: "material", title: "4 m³ beton C25/30", location: "Lift akna", date: "2026-03-22", dateLabel: "márc. 22", source: "voice", amount: "4 m³" },
    { id: "b10", projectId: "budapest", category: "invoice", title: "TBG Betonkeverő Kft. — 356.000 Ft", description: "Transzportbeton szállítás", date: "2026-03-22", dateLabel: "márc. 22", source: "photo", hasPhoto: true, amount: "356.000 Ft", invoiceNumber: "TBG-2026/1102", supplier: "TBG Betonkeverő Kft." },
  ],
  balatonfured: [
    { id: "bf1", projectId: "balatonfured", category: "report", title: "Napi riport — 3 fő, kitűzés + földmunka", date: "2026-03-24", time: "15:00", dateLabel: "ma 15:00", source: "voice", reportData: { crew: "3 fő", completed: ["Kitűzés elkészült", "Földmunka megkezdődött"] } },
    { id: "bf2", projectId: "balatonfured", category: "note", title: "Szomszéd kérte a munkaidő betartását", description: "Szomszéd ingatlan tulajdonosa kérte a munkaidő betartását (7:00-18:00). Munkatársak értesítve.", date: "2026-03-24", time: "10:30", dateLabel: "ma 10:30", source: "text" },
    { id: "bf3", projectId: "balatonfured", category: "delivery", title: "Duna-Dráva Cement — 15 tonna cement", description: "CEM II/B-S 32.5 R cement, szállítólevél ellenőrizve", date: "2026-03-23", dateLabel: "tegnap", supplier: "Duna-Dráva Cement Kft.", source: "photo", hasPhoto: true, items: [{ name: "CEM II/B-S 32.5 R cement", quantity: "15", unit: "tonna" }] },
    { id: "bf4", projectId: "balatonfured", category: "defect", title: "Talajvíz a munkaárokban", description: "Az északi oldalon talajvíz jelent meg a munkaárokban. Szivattyúzás szükséges a munkálatok folytatásához.", location: "Északi oldal", date: "2026-03-23", dateLabel: "tegnap", status: "open", source: "photo", hasPhoto: true },
    { id: "bf5", projectId: "balatonfured", category: "note", title: "Geotechnikai szakvélemény eredménye", description: "B2 jelű fúrás szerint 2.8m-nél sziklás altalaj. Az alapozás mélysége ennek megfelelően tervezendő.", date: "2026-03-20", dateLabel: "márc. 20", source: "text" },
  ],
};

const entriesEn: Record<string, EntryItem[]> = {
  heviz: [
    { id: "h1", projectId: "heviz", category: "defect", title: "Paint defect — ceiling crack", description: "Crack in the ceiling, approx. 40 cm long, likely caused during plaster drying", location: "4th floor / Room 234", date: "2026-03-24", time: "09:41", dateLabel: "today 09:41", status: "open", source: "photo+voice", hasPhoto: true, photoUrl: "/images/sample-crack.jpg" },
    { id: "h2", projectId: "heviz", category: "delivery", title: "Baumit GmbH — 3 items", description: "Delivery note: SZL-2026/1847", location: "Warehouse", date: "2026-03-24", time: "08:15", dateLabel: "today 08:15", supplier: "Baumit GmbH", source: "photo", hasPhoto: true, photoUrl: "/images/sample-delivery.jpg", items: [{ name: "Baumit ProContact adhesive", quantity: "20", unit: "bags (25kg)" }, { name: "Baumit StarContact primer", quantity: "10", unit: "liters" }, { name: "Fiberglass mesh 160g", quantity: "5", unit: "rolls (50m²)" }] },
    { id: "h3", projectId: "heviz", category: "defect", title: "Water leak at pipe shaft", description: "Urgent intervention needed, water leaking at pipe shaft seal", location: "3rd floor / Corridor", date: "2026-03-24", time: "07:30", dateLabel: "today 07:30", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-pipe.jpg", isUrgent: true },
    { id: "h4", projectId: "heviz", category: "note", title: "Electrician coming tomorrow at 8:00", description: "Circuit breaker panel replacement on 2nd floor", location: "2nd floor", date: "2026-03-24", time: "07:15", dateLabel: "today 07:15", source: "text" },
    { id: "h5", projectId: "heviz", category: "material", title: "10 bags adhesive (Baumit ProContact)", location: "2nd floor / Corridor", date: "2026-03-23", time: "16:20", dateLabel: "yesterday 16:20", source: "voice", amount: "10 bags" },
    { id: "h6", projectId: "heviz", category: "report", title: "Daily report — 5 workers, 3 rooms done", date: "2026-03-23", time: "17:00", dateLabel: "yesterday 17:00", source: "voice", reportData: { crew: "5 workers (2 tilers, 2 painters, 1 helper)", completed: ["Room 228 tiling", "Room 229 tiling", "Room 230 tiling"], inProgress: ["Room 231 floor leveling"], notes: ["Adhesive running low, order needed"] } },
    { id: "h7", projectId: "heviz", category: "material", title: "45 m² floor tiles (Zalakerámia Taurus 30x30)", location: "2nd floor / Rooms 228-230", date: "2026-03-23", time: "16:00", dateLabel: "yesterday 16:00", source: "voice", amount: "45 m²" },
    { id: "h8", projectId: "heviz", category: "defect", title: "Pipe routing under tiles not marked", description: "Pipe routes must be marked before tiling begins", location: "2nd floor / Room 231", date: "2026-03-23", time: "14:15", dateLabel: "yesterday 14:15", status: "open", source: "photo", hasPhoto: true },
    { id: "h9", projectId: "heviz", category: "invoice", title: "Építő Szaküzlet Kft. — 487,350 HUF", description: "14 items — grout, silicone, cutting disc, sandpaper, etc.", date: "2026-03-21", dateLabel: "Mar 21", source: "photo", hasPhoto: true, photoUrl: "/images/sample-invoice.jpg", amount: "487,350 HUF", invoiceNumber: "SZ-2026-0342", supplier: "Építő Szaküzlet Kft." },
    { id: "h10", projectId: "heviz", category: "delivery", title: "Zalakerámia Zrt. — floor tiles + edge trim", description: "Delivery note: SZL-4521", date: "2026-03-21", dateLabel: "Mar 21", supplier: "Zalakerámia Zrt.", source: "photo", hasPhoto: true, items: [{ name: "Taurus Granit 30x30 floor tile", quantity: "120", unit: "m²" }, { name: "Edge trim", quantity: "48", unit: "rm" }] },
    { id: "h11", projectId: "heviz", category: "note", title: "Floor leveling needed before tiling", description: "Room 301 floor unevenness requires leveling before tiling can begin. Task created.", location: "3rd floor / Room 301", date: "2026-03-20", dateLabel: "Mar 20", source: "voice" },
    { id: "h12", projectId: "heviz", category: "report", title: "Daily report — 6 workers, painting complete", date: "2026-03-20", dateLabel: "Mar 20", source: "voice", reportData: { crew: "6 workers (3 tilers, 2 painters, 1 electrician)", completed: ["2nd floor painting complete (rooms 225-227)"], notes: ["Equipment return: sander pickup tomorrow"] } },
    { id: "h13", projectId: "heviz", category: "invoice", title: "Baumit Kft. — 1,245,800 HUF", description: "Insulation materials, adhesives", date: "2026-03-20", dateLabel: "Mar 20", source: "photo", hasPhoto: true, amount: "1,245,800 HUF", invoiceNumber: "SZ-B-2026/892", supplier: "Baumit Kft." },
    { id: "h14", projectId: "heviz", category: "defect", title: "Window frame damaged during delivery", description: "1 pc Bramac window (120x150) damaged during transport. Claim filed.", location: "4th floor / Room 401", date: "2026-03-19", dateLabel: "Mar 19", status: "in_progress", source: "photo", hasPhoto: true, photoUrl: "/images/sample-window.jpg" },
    { id: "h15", projectId: "heviz", category: "delivery", title: "Bramac Kft. — windows + sills", description: "Delivery note: SZL-8834. 1 pc damaged → claim filed", date: "2026-03-18", dateLabel: "Mar 18", supplier: "Bramac Kft.", source: "photo", hasPhoto: true, items: [{ name: "Bramac window 120x150", quantity: "6", unit: "pcs" }, { name: "Bramac window 80x120", quantity: "4", unit: "pcs" }, { name: "Window sill", quantity: "10", unit: "pcs" }] },
  ],
  budapest: [
    { id: "b1", projectId: "budapest", category: "report", title: "Daily report — 12 workers, HVAC + electrical", date: "2026-03-24", time: "16:30", dateLabel: "today 16:30", source: "voice", reportData: { crew: "12 workers", completed: ["4th floor electrical completed"], inProgress: ["3rd floor HVAC installation 75%", "Elevator shaft formwork started"] } },
    { id: "b2", projectId: "budapest", category: "material", title: "250 rm cable (NYM-J 3x2.5)", location: "4th floor", date: "2026-03-24", time: "14:00", dateLabel: "today 14:00", source: "voice", amount: "250 rm" },
    { id: "b3", projectId: "budapest", category: "defect", title: "Concrete crack in floor slab", description: "Structural engineer assessment needed to determine crack characteristics", location: "Parking / Section B", date: "2026-03-24", time: "11:20", dateLabel: "today 11:20", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-concrete.jpg" },
    { id: "b4", projectId: "budapest", category: "invoice", title: "Würth Kft. — 892,400 HUF", description: "Tools and fasteners", date: "2026-03-23", dateLabel: "Mar 23", source: "photo", hasPhoto: true, amount: "892,400 HUF", invoiceNumber: "W-2026/3345", supplier: "Würth Kft." },
    { id: "b5", projectId: "budapest", category: "delivery", title: "Rehau Kft. — pipes and fittings", description: "34 items, delivery note verified", date: "2026-03-23", dateLabel: "Mar 23", supplier: "Rehau Kft.", source: "photo", hasPhoto: true },
    { id: "b6", projectId: "budapest", category: "defect", title: "Wrong size door frame installed", description: "Wrong size door frame installed in unit 12. Awaiting replacement.", location: "3rd floor / Unit 12", date: "2026-03-23", dateLabel: "Mar 23", status: "open", source: "photo+voice", hasPhoto: true },
    { id: "b7", projectId: "budapest", category: "note", title: "Utility coordination Wednesday 10:00", description: "FCSM contact: Tóth Péter. Site walkthrough regarding utility connections.", date: "2026-03-23", dateLabel: "Mar 23", source: "text" },
    { id: "b8", projectId: "budapest", category: "report", title: "Daily report — 14 workers, concrete + HVAC", date: "2026-03-22", dateLabel: "Mar 22", source: "voice", reportData: { crew: "14 workers", completed: ["Elevator shaft foundation concrete", "3rd floor drain system 100%"] } },
    { id: "b9", projectId: "budapest", category: "material", title: "4 m³ concrete C25/30", location: "Elevator shaft", date: "2026-03-22", dateLabel: "Mar 22", source: "voice", amount: "4 m³" },
    { id: "b10", projectId: "budapest", category: "invoice", title: "TBG Concrete Kft. — 356,000 HUF", description: "Ready-mix concrete delivery", date: "2026-03-22", dateLabel: "Mar 22", source: "photo", hasPhoto: true, amount: "356,000 HUF", invoiceNumber: "TBG-2026/1102", supplier: "TBG Betonkeverő Kft." },
  ],
  balatonfured: [
    { id: "bf1", projectId: "balatonfured", category: "report", title: "Daily report — 3 workers, staking + earthwork", date: "2026-03-24", time: "15:00", dateLabel: "today 15:00", source: "voice", reportData: { crew: "3 workers", completed: ["Site staking completed", "Earthwork started"] } },
    { id: "bf2", projectId: "balatonfured", category: "note", title: "Neighbor requested work hour compliance", description: "Adjacent property owner requested work hours compliance (7:00-18:00). Staff notified.", date: "2026-03-24", time: "10:30", dateLabel: "today 10:30", source: "text" },
    { id: "bf3", projectId: "balatonfured", category: "delivery", title: "Duna-Dráva Cement — 15 tonnes cement", description: "CEM II/B-S 32.5 R cement, delivery note verified", date: "2026-03-23", dateLabel: "yesterday", supplier: "Duna-Dráva Cement Kft.", source: "photo", hasPhoto: true, items: [{ name: "CEM II/B-S 32.5 R cement", quantity: "15", unit: "tonnes" }] },
    { id: "bf4", projectId: "balatonfured", category: "defect", title: "Groundwater in trench", description: "Groundwater appeared in the trench on the north side. Pumping required to continue work.", location: "North side", date: "2026-03-23", dateLabel: "yesterday", status: "open", source: "photo", hasPhoto: true },
    { id: "bf5", projectId: "balatonfured", category: "note", title: "Geotechnical report results", description: "Borehole B2 shows rocky subsoil at 2.8m. Foundation depth to be planned accordingly.", date: "2026-03-20", dateLabel: "Mar 20", source: "text" },
  ],
};

// ─── Entry Details ──────────────────────────────────────────────────────────

const entryDetailsHu: Record<string, EntryDetail> = {
  h1: { id: "h1", projectId: "heviz", category: "defect", title: "Festési hiba — repedés a mennyezeten", fullDescription: "Repedés a mennyezeten, kb. 40 cm hosszú, valószínűleg a glettelés száradása során keletkezett. Újra glettelés és festés szükséges.", description: "Repedés a mennyezeten", location: "4. emelet / 234-es szoba", date: "2026-03-24", time: "09:41", dateLabel: "ma 09:41", status: "open", source: "photo+voice", hasPhoto: true, photoUrl: "/images/sample-crack.jpg", responsible: "Kiss József (festő brigád)", priority: "Közepes" },
  h2: { id: "h2", projectId: "heviz", category: "delivery", title: "Baumit GmbH — 3 tétel", description: "Szállítólevél átvéve és ellenőrizve", location: "Raktár", date: "2026-03-24", time: "08:15", dateLabel: "ma 08:15", supplier: "Baumit GmbH", source: "photo", hasPhoto: true, photoUrl: "/images/sample-delivery.jpg", deliveryNumber: "SZL-2026/1847", receiver: "Kovács Tamás", items: [{ name: "Baumit ProContact ragasztó", quantity: "20", unit: "zsák (25kg)" }, { name: "Baumit StarContact alapozó", quantity: "10", unit: "liter" }, { name: "Üvegszövet háló 160g", quantity: "5", unit: "tekercs (50m²)" }], fullDescription: "Mennyiség ellenőrizve, minden rendben. Raktárba szállítva." },
  h9: { id: "h9", projectId: "heviz", category: "invoice", title: "Építő Szaküzlet Kft. — 487.350 Ft", description: "14 tétel — fugázó, szilikon, vágókorong, csiszolópapír stb.", date: "2026-03-21", dateLabel: "márc. 21", source: "photo", hasPhoto: true, photoUrl: "/images/sample-invoice.jpg", amount: "487.350 Ft", netAmount: "383.740 Ft", vatAmount: "103.610 Ft", invoiceNumber: "SZ-2026-0342", supplier: "Építő Szaküzlet Kft.", paymentDue: "2026.04.05", fullDescription: "Főbb tételek: fugázó anyag, szilikon, vágókorong, csiszolópapír, kesztyű, porzsák. 14 tétel összesen." },
  h3: { id: "h3", projectId: "heviz", category: "defect", title: "Vízszivárgás a csőaknánál", fullDescription: "Sürgős beavatkozás szükséges. Víz szivárog a csőakna tömítésénél a 3. emeleti folyosón. Vízvezeték-szerelő értesítve.", description: "Sürgős beavatkozás szükséges", location: "3. emelet / folyosó", date: "2026-03-24", time: "07:30", dateLabel: "ma 07:30", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-pipe.jpg", isUrgent: true, responsible: "Varga István (vízvezeték-szerelő)", priority: "Sürgős" },
  b3: { id: "b3", projectId: "budapest", category: "defect", title: "Betonban repedés az aljzatban", fullDescription: "A parkoló B szekciójában repedés észlelhető az aljzatbetonban. Statikus vélemény szükséges a repedés jellegének meghatározásához. A terület lezárva további vizsgálatig.", description: "Statikus vélemény szükséges", location: "Parkoló / B szekció", date: "2026-03-24", time: "11:20", dateLabel: "ma 11:20", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-concrete.jpg", responsible: "Dr. Németh László (statikus)", priority: "Magas" },
};

const entryDetailsEn: Record<string, EntryDetail> = {
  h1: { id: "h1", projectId: "heviz", category: "defect", title: "Paint defect — ceiling crack", fullDescription: "Crack in the ceiling, approx. 40 cm long, likely caused during plaster drying. Re-plastering and repainting required.", description: "Ceiling crack", location: "4th floor / Room 234", date: "2026-03-24", time: "09:41", dateLabel: "today 09:41", status: "open", source: "photo+voice", hasPhoto: true, photoUrl: "/images/sample-crack.jpg", responsible: "Kiss József (painting crew)", priority: "Medium" },
  h2: { id: "h2", projectId: "heviz", category: "delivery", title: "Baumit GmbH — 3 items", description: "Delivery note received and verified", location: "Warehouse", date: "2026-03-24", time: "08:15", dateLabel: "today 08:15", supplier: "Baumit GmbH", source: "photo", hasPhoto: true, photoUrl: "/images/sample-delivery.jpg", deliveryNumber: "SZL-2026/1847", receiver: "Kovács Tamás", items: [{ name: "Baumit ProContact adhesive", quantity: "20", unit: "bags (25kg)" }, { name: "Baumit StarContact primer", quantity: "10", unit: "liters" }, { name: "Fiberglass mesh 160g", quantity: "5", unit: "rolls (50m²)" }], fullDescription: "Quantities verified, all in order. Moved to warehouse." },
  h9: { id: "h9", projectId: "heviz", category: "invoice", title: "Építő Szaküzlet Kft. — 487,350 HUF", description: "14 items — grout, silicone, cutting disc, sandpaper, etc.", date: "2026-03-21", dateLabel: "Mar 21", source: "photo", hasPhoto: true, photoUrl: "/images/sample-invoice.jpg", amount: "487,350 HUF", netAmount: "383,740 HUF", vatAmount: "103,610 HUF", invoiceNumber: "SZ-2026-0342", supplier: "Építő Szaküzlet Kft.", paymentDue: "2026.04.05", fullDescription: "Main items: grout, silicone, cutting disc, sandpaper, gloves, dust bags. 14 items total." },
  h3: { id: "h3", projectId: "heviz", category: "defect", title: "Water leak at pipe shaft", fullDescription: "Urgent intervention needed. Water leaking at pipe shaft seal on 3rd floor corridor. Plumber notified.", description: "Urgent intervention needed", location: "3rd floor / Corridor", date: "2026-03-24", time: "07:30", dateLabel: "today 07:30", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-pipe.jpg", isUrgent: true, responsible: "Varga István (plumber)", priority: "Urgent" },
  b3: { id: "b3", projectId: "budapest", category: "defect", title: "Concrete crack in floor slab", fullDescription: "Crack detected in the floor slab in parking section B. Structural engineer assessment needed to determine crack characteristics. Area cordoned off pending investigation.", description: "Structural assessment needed", location: "Parking / Section B", date: "2026-03-24", time: "11:20", dateLabel: "today 11:20", status: "open", source: "photo", hasPhoto: true, photoUrl: "/images/sample-concrete.jpg", responsible: "Dr. Németh László (structural eng.)", priority: "High" },
};

// ─── Search Results ─────────────────────────────────────────────────────────

const searchResultsHu: Record<string, EntryItem[]> = {
  ragasztó: [
    { id: "h5", projectId: "heviz", category: "material", title: "10 zsák ragasztó (Baumit ProContact)", location: "2. emelet / folyosó", date: "2026-03-23", dateLabel: "tegnap", source: "voice", amount: "10 zsák" },
    { id: "h2", projectId: "heviz", category: "delivery", title: "Baumit ProContact ragasztó — 20 zsák", date: "2026-03-24", dateLabel: "ma", supplier: "Baumit GmbH", source: "photo", hasPhoto: true },
    { id: "s-inv", projectId: "budapest", category: "invoice", title: "Ragasztó (Baumit) — 30 zsák", date: "2026-03-18", dateLabel: "márc. 18", source: "photo", amount: "234.500 Ft" },
    { id: "h6-note", projectId: "heviz", category: "note", title: "Ragasztó fogyóban, rendelés szükséges", description: "Napi riportból: ragasztó készlet alacsony", date: "2026-03-23", dateLabel: "tegnap", source: "voice" },
  ],
  hiba: [
    { id: "h1", projectId: "heviz", category: "defect", title: "Festési hiba — repedés a mennyezeten", location: "4. emelet / 234-es szoba", date: "2026-03-24", dateLabel: "ma", status: "open", hasPhoto: true },
    { id: "h3", projectId: "heviz", category: "defect", title: "Vízszivárgás a csőaknánál", location: "3. emelet / folyosó", date: "2026-03-24", dateLabel: "ma", status: "open", isUrgent: true, hasPhoto: true },
    { id: "h8", projectId: "heviz", category: "defect", title: "Burkolat alatti cső nyomvonal nincs jelölve", location: "2. emelet / 231-es szoba", date: "2026-03-23", dateLabel: "tegnap", status: "open", hasPhoto: true },
    { id: "b3", projectId: "budapest", category: "defect", title: "Betonban repedés az aljzatban", location: "Parkoló / B szekció", date: "2026-03-24", dateLabel: "ma", status: "open", hasPhoto: true },
  ],
  számla: [
    { id: "h9", projectId: "heviz", category: "invoice", title: "Építő Szaküzlet Kft. — 487.350 Ft", date: "2026-03-21", dateLabel: "márc. 21", amount: "487.350 Ft", hasPhoto: true },
    { id: "h13", projectId: "heviz", category: "invoice", title: "Baumit Kft. — 1.245.800 Ft", date: "2026-03-20", dateLabel: "márc. 20", amount: "1.245.800 Ft", hasPhoto: true },
    { id: "b4", projectId: "budapest", category: "invoice", title: "Würth Kft. — 892.400 Ft", date: "2026-03-23", dateLabel: "márc. 23", amount: "892.400 Ft", hasPhoto: true },
    { id: "b10", projectId: "budapest", category: "invoice", title: "TBG Betonkeverő Kft. — 356.000 Ft", date: "2026-03-22", dateLabel: "márc. 22", amount: "356.000 Ft", hasPhoto: true },
  ],
};

const searchResultsEn: Record<string, EntryItem[]> = {
  adhesive: [
    { id: "h5", projectId: "heviz", category: "material", title: "10 bags adhesive (Baumit ProContact)", location: "2nd floor / Corridor", date: "2026-03-23", dateLabel: "yesterday", source: "voice", amount: "10 bags" },
    { id: "h2", projectId: "heviz", category: "delivery", title: "Baumit ProContact adhesive — 20 bags", date: "2026-03-24", dateLabel: "today", supplier: "Baumit GmbH", source: "photo", hasPhoto: true },
    { id: "s-inv", projectId: "budapest", category: "invoice", title: "Adhesive (Baumit) — 30 bags", date: "2026-03-18", dateLabel: "Mar 18", source: "photo", amount: "234,500 HUF" },
    { id: "h6-note", projectId: "heviz", category: "note", title: "Adhesive running low, order needed", description: "From daily report: adhesive stock low", date: "2026-03-23", dateLabel: "yesterday", source: "voice" },
  ],
  defect: [
    { id: "h1", projectId: "heviz", category: "defect", title: "Paint defect — ceiling crack", location: "4th floor / Room 234", date: "2026-03-24", dateLabel: "today", status: "open", hasPhoto: true },
    { id: "h3", projectId: "heviz", category: "defect", title: "Water leak at pipe shaft", location: "3rd floor / Corridor", date: "2026-03-24", dateLabel: "today", status: "open", isUrgent: true, hasPhoto: true },
    { id: "h8", projectId: "heviz", category: "defect", title: "Pipe routing under tiles not marked", location: "2nd floor / Room 231", date: "2026-03-23", dateLabel: "yesterday", status: "open", hasPhoto: true },
    { id: "b3", projectId: "budapest", category: "defect", title: "Concrete crack in floor slab", location: "Parking / Section B", date: "2026-03-24", dateLabel: "today", status: "open", hasPhoto: true },
  ],
  invoice: [
    { id: "h9", projectId: "heviz", category: "invoice", title: "Építő Szaküzlet Kft. — 487,350 HUF", date: "2026-03-21", dateLabel: "Mar 21", amount: "487,350 HUF", hasPhoto: true },
    { id: "h13", projectId: "heviz", category: "invoice", title: "Baumit Kft. — 1,245,800 HUF", date: "2026-03-20", dateLabel: "Mar 20", amount: "1,245,800 HUF", hasPhoto: true },
    { id: "b4", projectId: "budapest", category: "invoice", title: "Würth Kft. — 892,400 HUF", date: "2026-03-23", dateLabel: "Mar 23", amount: "892,400 HUF", hasPhoto: true },
    { id: "b10", projectId: "budapest", category: "invoice", title: "TBG Concrete Kft. — 356,000 HUF", date: "2026-03-22", dateLabel: "Mar 22", amount: "356,000 HUF", hasPhoto: true },
  ],
};

// ─── Summary labels ─────────────────────────────────────────────────────────

const timelineLabelsHu = ["Hé", "Ke", "Sze", "Csü", "Pé", "Szo", "Va"];
const timelineLabelsEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const categoryLabelsHu: Record<string, string> = {
  defect: "Hibák", delivery: "Szállítók", invoice: "Számlák",
  material: "Anyagok", report: "Riportok", note: "Jegyzetek",
};
const categoryLabelsEn: Record<string, string> = {
  defect: "Defects", delivery: "Deliveries", invoice: "Invoices",
  material: "Materials", report: "Reports", note: "Notes",
};

// ─── Exported accessor ──────────────────────────────────────────────────────

export function getLocalizedData(locale: Locale) {
  const isEn = locale === "en";
  return {
    projects: isEn ? projectsEn : projectsHu,
    entries: isEn ? entriesEn : entriesHu,
    entryDetails: isEn ? entryDetailsEn : entryDetailsHu,
    searchResults: isEn ? searchResultsEn : searchResultsHu,
    defaultSearchQuery: isEn ? "adhesive" : "ragasztó",
    searchSuggestions: isEn
      ? ["adhesive", "defect", "invoice"]
      : ["ragasztó", "hiba", "számla"],
    timelineLabels: isEn ? timelineLabelsEn : timelineLabelsHu,
    categoryLabels: isEn ? categoryLabelsEn : categoryLabelsHu,
    userName: "Kovács Tamás",
    userCompany: "KT-Build Kft.",
    userInitials: "KT",
  };
}
