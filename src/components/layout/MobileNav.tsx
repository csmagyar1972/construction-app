"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FolderOpen, Search, Settings } from "lucide-react";

const navItems = [
  { href: "/projects", label: "Projektek", icon: FolderOpen },
  { href: "/search", label: "Keresés", icon: Search },
  { href: "#", label: "Beállítások", icon: Settings },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive =
            item.href !== "#" && pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-2 px-4 min-w-[64px] transition-colors ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
