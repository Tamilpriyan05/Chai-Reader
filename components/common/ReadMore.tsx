"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ReadMoreProps {
  text: string;
  limit?: number;
  className?: string;
}

export default function ReadMore({ text, limit = 220, className }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > limit;
  const displayText = expanded || !isLong ? text : `${text.slice(0, limit).trim()}…`;

  return (
    <div className={className}>
      <p className="text-sm leading-relaxed text-muted">{displayText}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
          {expanded ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </button>
      )}
    </div>
  );
}
