"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Compass,
  Sparkles,
  Award,
  HeartHandshake,
  Briefcase,
  Laptop,
  Baby,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { getNavItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Award,
  HeartHandshake,
  Briefcase,
  Laptop,
  Baby,
  GraduationCap,
};

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = getNavItems();

  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-sidebar px-4 py-6 md:block">
      <Link href="/browse" className="mb-8 flex items-center gap-2 px-2">
        <BookOpen className="h-5 w-5 text-heading" />
        <span className="text-lg font-semibold text-accent">Chai Reader</span>
      </Link>

      <nav aria-label="Primary">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = ICONS[item.icon] ?? Compass;
            const isActive = pathname?.startsWith(item.href.split("#")[0]);

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-black/5 font-medium text-sidebar-active"
                      : "text-sidebar-foreground hover:bg-black/5"
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
