"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Star, Crown, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_NAV = [
  { href: "/browse", label: "Browse", icon: Globe },
  { href: "/browse#new-arrivals", label: "New", icon: Star },
  { href: "/browse#best-sellers", label: "Best", icon: Crown },
  { href: "/browse#self-help", label: "Books", icon: BookOpen },
  { href: "/login", label: "Account", icon: User },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[200] flex md:hidden items-center justify-around bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] h-16 px-2">
      {MOBILE_NAV.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href || pathname?.startsWith(href.split("#")[0]);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center gap-0.5 flex-1 py-1 text-[10px] font-medium transition-colors",
              isActive ? "text-[#3c2a4d]" : "text-gray-400"
            )}
          >
            <Icon className={cn("h-5 w-5", isActive ? "stroke-[2]" : "stroke-[1.5]")} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
