import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-badge px-3 py-1 text-xs font-medium text-badge-foreground",
        className
      )}
    >
      {label}
    </span>
  );
}
