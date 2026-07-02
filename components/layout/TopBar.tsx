"use client";

import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { BreadcrumbItem } from "@/types";
import Breadcrumb from "@/components/common/Breadcrumb";

interface TopBarProps {
  showSearch?: boolean;
  breadcrumb?: BreadcrumbItem[];
}

export default function TopBar({ showSearch = false, breadcrumb }: TopBarProps) {
  return (
    <header className="sticky top-0 z-[100] flex items-center justify-between gap-3 px-3 py-3 bg-[#FFFDF5] md:bg-white/80 md:backdrop-blur-md md:px-6 md:py-4">
      <div className="flex items-center gap-3 md:hidden shrink-0">
        <Link href="/browse">
          <Image
            src="/images/logo.png"
            alt="Chai Reader"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      <div className="flex-1 min-w-0 md:max-w-[65%]">
        {showSearch ? (
          <label className="relative block w-full">
            <span className="sr-only">Search book title or author</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search book title or author..."
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-[14px] outline-none placeholder:text-gray-400 focus:border-gray-300 transition-all duration-200 md:py-2.5 md:pl-12 md:text-[15px]"
            />
          </label>
        ) : breadcrumb ? (
          <Breadcrumb items={breadcrumb} />
        ) : null}
      </div>

      <div className="flex shrink-0 items-center gap-3 md:gap-5">
        <button
          type="button"
          aria-label="Wishlist"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          <Heart className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Cart"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ShoppingCart className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={1.5} />
        </button>
        <Link
          href="/login"
          className="rounded-full border border-gray-600 px-4 py-1.5 text-[13px] font-medium text-gray-800 hover:bg-black/5 transition-all duration-200 md:ml-2 md:px-6 md:py-[7px] md:text-[15px]"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
