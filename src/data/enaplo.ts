export interface ENaploDay {
  date: string;
  dateLabel: string;
  weather: {
    temperature: string;
    conditions: string;
    wind: string;
    precipitation: string;
  };
  crew: {
    trade: string;
    count: number;
    hours: string;
  }[];
  crewTotal: number;
  workDescription: string[];
  materialsUsed: {
    name: string;
    quantity: string;
    unit: string;
  }[];
  materialsDelivered: {
    supplier: string;
    items: string;
    deliveryNote: string;
  }[];
  equipment: string[];
  qualityNotes: string[];
  defects: string[];
  otherNotes: string[];
}

export const enaploData: Record<string, ENaploDay[]> = {
  heviz: [
    {
      date: "2026-03-24",
      dateLabel: "2026. március 24. (kedd)",
      weather: {
        temperature: "8–14 °C",
        conditions: "Változóan felhős",
        wind: "ÉNy 10–15 km/h",
        precipitation: "Nincs",
      },
      crew: [
        { trade: "Burkoló", count: 2, hours: "07:00–16:00" },
        { trade: "Festő", count: 2, hours: "07:00–16:00" },
        { trade: "Segédmunkás", count: 1, hours: "07:00–16:00" },
        { trade: "Vízvezeték-szerelő", count: 1, hours: "08:00–12:00" },
      ],
      crewTotal: 6,
      workDescription: [
        "Burkolási munkák folytatása a 2. emeleten (231-es szoba aljzatkiegyenlítés megkezdve)",
        "Festési hibák javítása a 4. emeleten (234-es szoba mennyezet újra glettelés)",
        "Vízszivárgás vizsgálata és ideiglenes javítás a 3. emeleti csőaknánál",
      ],
      materialsUsed: [
        { name: "Baumit ProContact ragasztó", quantity: "10", unit: "zsák (25kg)" },
        { name: "Zalakerámia Taurus 30x30 padlólap", quantity: "45", unit: "m²" },
        { name: "Glett (Knauf Rotband)", quantity: "2", unit: "zsák (30kg)" },
      ],
      materialsDelivered: [
        {
          supplier: "Baumit GmbH",
          items: "ProContact ragasztó 20 zsák, StarContact alapozó 10 l, Üvegszövet háló 5 tek.",
          deliveryNote: "SZL-2026/1847",
        },
      ],
      equipment: [
        "Csiszológép (Bosch GEX 125)",
        "Vízszintmérő lézer",
        "Keverőgép",
      ],
      qualityNotes: [
        "A 234-es szoba mennyezetén észlelt repedés valószínűleg a glettelés száradása során keletkezett. Újra glettelés és festés szükséges.",
      ],
      defects: [
        "HIBA #H1: Festési hiba — repedés a mennyezeten (4. emelet / 234-es szoba) — Státusz: Nyitott",
        "HIBA #H3: Vízszivárgás a csőaknánál (3. emelet / folyosó) — Státusz: Nyitott, SÜRGŐS",
      ],
      otherNotes: [
        "Villanyszerelő holnapra (márc. 25.) egyeztetve, biztosítéktábla csere a 2. emeleten.",
        "Ragasztó készlet alacsony — rendelés szükséges a héten.",
      ],
    },
    {
      date: "2026-03-23",
      dateLabel: "2026. március 23. (hétfő)",
      weather: {
        temperature: "6–12 °C",
        conditions: "Napos, párás reggel",
        wind: "Gyenge, D 5–10 km/h",
        precipitation: "Nincs",
      },
      crew: [
        { trade: "Burkoló", count: 2, hours: "07:00–16:00" },
        { trade: "Festő", count: 2, hours: "07:00–16:00" },
        { trade: "Segédmunkás", count: 1, hours: "07:00–16:00" },
      ],
      crewTotal: 5,
      workDescription: [
        "228-as, 229-es és 230-as szobák burkolásának befejezése a 2. emeleten",
        "231-es szoba előkészítése burkoláshoz (aljzatkiegyenlítés előkészítés)",
        "Burkolat alatti csővezetékek nyomvonalának felmérése",
      ],
      materialsUsed: [
        { name: "Baumit ProContact ragasztó", quantity: "10", unit: "zsák (25kg)" },
        { name: "Zalakerámia Taurus 30x30 padlólap", quantity: "45", unit: "m²" },
        { name: "Fugázó anyag (Mapei Keracolor)", quantity: "5", unit: "kg" },
      ],
      materialsDelivered: [],
      equipment: [
        "Lapvágó (DeWalt D24000)",
        "Keverőgép",
        "Vízszintmérő lézer",
      ],
      qualityNotes: [
        "A 228–230 szobák burkolása az előírásoknak megfelelően elkészült. Fugázás a száradási idő után (holnap).",
      ],
      defects: [
        "HIBA #H8: Burkolat alatti cső nyomvonal nincs jelölve (2. emelet / 231-es szoba) — Státusz: Nyitott",
      ],
      otherNotes: [
        "Ragasztó fogyóban, rendelés szükséges.",
        "Csiszológép visszavétele holnap egyeztetve a kölcsönzővel.",
      ],
    },
  ],
  budapest: [
    {
      date: "2026-03-24",
      dateLabel: "2026. március 24. (kedd)",
      weather: {
        temperature: "7–13 °C",
        conditions: "Felhős, időnként napos",
        wind: "É 15–20 km/h",
        precipitation: "Szitálás délelőtt",
      },
      crew: [
        { trade: "Villanyszerelő", count: 3, hours: "07:00–16:00" },
        { trade: "Gépész / csőszerelő", count: 4, hours: "07:00–16:00" },
        { trade: "Zsaluzó / vasszerelő", count: 3, hours: "07:00–16:00" },
        { trade: "Segédmunkás", count: 2, hours: "07:00–15:00" },
      ],
      crewTotal: 12,
      workDescription: [
        "4. emelet villanyszerelési munkák befejezése (kábelezés, kötődobozok)",
        "3. emelet gépészeti szerelés folytatása (75%-os készültség)",
        "Lift akna zsaluzásának megkezdése",
        "250 fm NYM-J 3x2.5 kábel behúzása a 4. emeleten",
      ],
      materialsUsed: [
        { name: "NYM-J 3x2.5 kábel", quantity: "250", unit: "fm" },
        { name: "Kötődoboz", quantity: "24", unit: "db" },
        { name: "Zsaluzat elem", quantity: "18", unit: "m²" },
      ],
      materialsDelivered: [],
      equipment: [
        "Toronydaru (Liebherr 65K)",
        "Betonpumpa",
        "Áramfejlesztő",
      ],
      qualityNotes: [],
      defects: [
        "HIBA #B3: Betonban repedés az aljzatban (Parkoló / B szekció) — Statikus vélemény szükséges",
      ],
      otherNotes: [
        "Parkolóban észlelt repedés miatt statikus szakértő felkérése folyamatban.",
        "Közműegyeztetés szerdára (márc. 25.) egyeztetve, FCSM kontakt: Tóth Péter.",
      ],
    },
  ],
};

export function generateENaploText(day: ENaploDay, projectName: string): string {
  const lines: string[] = [];

  lines.push("═══════════════════════════════════════════════════════════════");
  lines.push("                    ELEKTRONIKUS ÉPÍTÉSI NAPLÓ");
  lines.push("                        NAPI BEJEGYZÉS");
  lines.push("═══════════════════════════════════════════════════════════════");
  lines.push("");
  lines.push(`Projekt: ${projectName}`);
  lines.push(`Dátum:   ${day.dateLabel}`);
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("1. IDŐJÁRÁSI VISZONYOK");
  lines.push("───────────────────────────────────────────────────────────────");
  lines.push(`   Hőmérséklet:  ${day.weather.temperature}`);
  lines.push(`   Időjárás:     ${day.weather.conditions}`);
  lines.push(`   Szél:         ${day.weather.wind}`);
  lines.push(`   Csapadék:     ${day.weather.precipitation}`);
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("2. MUNKAERŐ / LÉTSZÁM");
  lines.push("───────────────────────────────────────────────────────────────");
  for (const c of day.crew) {
    lines.push(`   ${c.trade.padEnd(28)} ${String(c.count).padStart(2)} fő    ${c.hours}`);
  }
  lines.push(`   ${"".padEnd(28)} ──────`);
  lines.push(`   ${"Összesen:".padEnd(28)} ${String(day.crewTotal).padStart(2)} fő`);
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("3. ELVÉGZETT MUNKÁK LEÍRÁSA");
  lines.push("───────────────────────────────────────────────────────────────");
  for (const w of day.workDescription) {
    lines.push(`   • ${w}`);
  }
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("4. FELHASZNÁLT ANYAGOK");
  lines.push("───────────────────────────────────────────────────────────────");
  if (day.materialsUsed.length > 0) {
    for (const m of day.materialsUsed) {
      lines.push(`   • ${m.name} — ${m.quantity} ${m.unit}`);
    }
  } else {
    lines.push("   Nincs bejegyzés.");
  }
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("5. ANYAGSZÁLLÍTÁSOK");
  lines.push("───────────────────────────────────────────────────────────────");
  if (day.materialsDelivered.length > 0) {
    for (const d of day.materialsDelivered) {
      lines.push(`   Beszállító:     ${d.supplier}`);
      lines.push(`   Szállítólevél:  ${d.deliveryNote}`);
      lines.push(`   Tételek:        ${d.items}`);
      lines.push("");
    }
  } else {
    lines.push("   Nincs szállítás.");
  }
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("6. ALKALMAZOTT GÉPEK, BERENDEZÉSEK");
  lines.push("───────────────────────────────────────────────────────────────");
  if (day.equipment.length > 0) {
    for (const e of day.equipment) {
      lines.push(`   • ${e}`);
    }
  } else {
    lines.push("   Nincs bejegyzés.");
  }
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("7. MINŐSÉGI ÉSZREVÉTELEK");
  lines.push("───────────────────────────────────────────────────────────────");
  if (day.qualityNotes.length > 0) {
    for (const q of day.qualityNotes) {
      lines.push(`   ${q}`);
    }
  } else {
    lines.push("   Nincs észrevétel.");
  }
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("8. HIBÁK, HIÁNYOSSÁGOK");
  lines.push("───────────────────────────────────────────────────────────────");
  if (day.defects.length > 0) {
    for (const d of day.defects) {
      lines.push(`   ⚠ ${d}`);
    }
  } else {
    lines.push("   Nincs hiba.");
  }
  lines.push("");

  lines.push("───────────────────────────────────────────────────────────────");
  lines.push("9. EGYÉB MEGJEGYZÉSEK");
  lines.push("───────────────────────────────────────────────────────────────");
  if (day.otherNotes.length > 0) {
    for (const n of day.otherNotes) {
      lines.push(`   • ${n}`);
    }
  } else {
    lines.push("   Nincs megjegyzés.");
  }
  lines.push("");

  lines.push("═══════════════════════════════════════════════════════════════");
  lines.push("  Bejegyzést készítette: Kovács Tamás (felelős műszaki vezető)");
  lines.push("  Generálta: BuildLog AI — automatikus e-napló előkészítő");
  lines.push(`  Időbélyeg: ${day.date} ${new Date().toLocaleTimeString("hu-HU", { hour: "2-digit", minute: "2-digit" })}`);
  lines.push("═══════════════════════════════════════════════════════════════");

  return lines.join("\n");
}
