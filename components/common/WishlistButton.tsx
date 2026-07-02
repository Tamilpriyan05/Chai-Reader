"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  bookTitle: string;
  className?: string;
}

export default function WishlistButton({ bookTitle, className }: WishlistButtonProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      aria-label={
        active ? `Remove ${bookTitle} from wishlist` : `Add ${bookTitle} to wishlist`
      }
      aria-pressed={active}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setActive((prev) => !prev);
      }}
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white",
        className
      )}
    >
      <Heart
        className={cn("h-3.5 w-3.5", active ? "text-red-500" : "text-heading")}
        fill={active ? "currentColor" : "none"}
        strokeWidth={1.75}
      />
    </button>
  );
}
