import { Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { BreadcrumbItem } from "@/types";
import Breadcrumb from "@/components/common/Breadcrumb";
import IconButton from "@/components/common/IconButton";

interface TopBarProps {
  showSearch?: boolean;
  breadcrumb?: BreadcrumbItem[];
}

export default function TopBar({ showSearch = false, breadcrumb }: TopBarProps) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border px-4 py-4 sm:px-6">
      <div className="min-w-0 flex-1">
        {showSearch ? (
          <label className="relative block max-w-md">
            <span className="sr-only">Search book title or author</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              placeholder="Search book title or author..."
              className="w-full rounded-full border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none focus:border-accent"
            />
          </label>
        ) : breadcrumb ? (
          <Breadcrumb items={breadcrumb} />
        ) : null}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <IconButton icon={Heart} label="Wishlist" />
        <IconButton icon={ShoppingCart} label="Cart" />
        <Link
          href="/login"
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-heading hover:bg-black/5"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
