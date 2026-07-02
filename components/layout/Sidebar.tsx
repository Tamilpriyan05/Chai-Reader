"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Globe,
  Star,
  Crown,
  HeartHandshake,
  Briefcase,
  Monitor,
  Smile,
  Book,
  type LucideIcon,
} from "lucide-react";
import { getNavItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const DESIGN_ICONS: Record<string, LucideIcon> = {
  Compass: Globe,
  Sparkles: Star,
  Award: Crown,
  HeartHandshake: HeartHandshake,
  Briefcase: Briefcase,
  Laptop: Monitor,
  Baby: Smile,
  GraduationCap: Book,
};

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = getNavItems();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/browse") {
      setActiveHash("");
      return;
    }

    const hashes = navItems
      .map((item) => item.href.split("#")[1])
      .filter(Boolean) as string[];

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveHash("");
        return;
      }

      let currentActive = "";
      let minDistance = Infinity;

      hashes.forEach((hash) => {
        const element = document.getElementById(hash);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topOffset = rect.top - 150;
          if (topOffset <= 0 && Math.abs(topOffset) < minDistance) {
            minDistance = Math.abs(topOffset);
            currentActive = `#${hash}`;
          }
        }
      });

      if (currentActive) {
        setActiveHash(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, navItems]);

  return (
    <div className="hidden md:block p-4 bg-white h-screen shrink-0 sticky top-0">
      <aside className="h-full w-64 bg-[#FFFDF5] rounded-3xl flex flex-col px-6 py-8 overflow-y-auto">
        <Link href="/browse" className="mb-8 flex items-center gap-3 px-2">
          <Image
            src="/images/logo.png"
            alt="Chai Reader Logo"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="flex-1">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const Icon = DESIGN_ICONS[item.icon] ?? Globe;
              const [basePath, itemHash] = item.href.split("#");
              let isActive = false;

              if (pathname === basePath) {
                if (itemHash) {
                  isActive = activeHash === `#${itemHash}`;
                } else {
                  isActive = !activeHash;
                }
              } else if (!itemHash && pathname?.startsWith(basePath)) {
                isActive = true;
              }

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-4 rounded-xl px-3 py-2.5 text-[17px] transition-colors",
                      isActive
                        ? "font-medium text-black bg-black/5"
                        : "text-[#6B7280] font-medium hover:text-black hover:bg-black/5"
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
