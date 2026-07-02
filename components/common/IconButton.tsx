"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  icon: Icon,
  label,
  active = false,
  onClick,
  className,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-heading transition-colors hover:bg-black/5",
        active && "border-transparent bg-red-50 text-red-500",
        className
      )}
    >
      <Icon
        className="h-4 w-4"
        fill={active ? "currentColor" : "none"}
        strokeWidth={1.75}
      />
    </button>
  );
}
