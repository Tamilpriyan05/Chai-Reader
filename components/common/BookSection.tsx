"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Book } from "@/types";
import BookCard from "./BookCard";
import BookCardWide from "./BookCardWide";

interface BookSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  books: Book[];
  layout?: "scroll" | "grid" | "fixed";
  cardVariant?: "compact" | "wide" | "bestseller";
  maxCards?: number;
}

export default function BookSection({
  id,
  title,
  subtitle,
  books,
  layout = "scroll",
  cardVariant = "compact",
  maxCards,
}: BookSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * 0.8, behavior: "smooth" });
  };

  const displayedBooks = maxCards ? books.slice(0, maxCards) : books;

  if (displayedBooks.length === 0) return null;

  return (
    <section id={id} className="mt-8 sm:mt-10" aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mb-4 sm:mb-5 flex items-start justify-between gap-4">
        <div>
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-[18px] sm:text-[22px] font-bold text-[#374151]"
          >
            {title}
          </h2>
          {subtitle && <p className="mt-0.5 text-[13px] sm:text-[14px] text-[#6B7280]">{subtitle}</p>}
        </div>

        {(layout === "scroll" || cardVariant === "bestseller") && (
          <div className="flex shrink-0 items-center gap-2 pt-1">
            <button
              type="button"
              aria-label={`Scroll ${title} left`}
              onClick={() => scrollBy(-1)}
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-border bg-background text-heading shadow-sm hover:bg-black/5 transition-colors"
            >
              <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
            <button
              type="button"
              aria-label={`Scroll ${title} right`}
              onClick={() => scrollBy(1)}
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-border bg-background text-heading shadow-sm hover:bg-black/5 transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        )}
      </div>

      {cardVariant === "bestseller" ? (
        <div
          role="list"
          aria-label={title}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4"
        >
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} variant={cardVariant} className="w-full" />
          ))}
        </div>
      ) : layout === "fixed" ? (
        <div
          role="list"
          aria-label={title}
          className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:gap-4"
        >
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} variant={cardVariant} className="w-full" />
          ))}
        </div>
      ) : layout === "scroll" ? (
        <div
          ref={trackRef}
          role="list"
          aria-label={title}
          className="scrollbar-hide flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-1"
        >
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} variant={cardVariant} />
          ))}
        </div>
      ) : cardVariant === "wide" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedBooks.map((book) => (
            <BookCardWide key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} variant={cardVariant} className="w-full" />
          ))}
        </div>
      )}
    </section>
  );
}
