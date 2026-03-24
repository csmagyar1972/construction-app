import { Project } from "./types";

export const projects: Project[] = [
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
