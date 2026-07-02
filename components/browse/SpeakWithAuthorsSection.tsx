"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Book } from "@/types";
import Button from "@/components/common/Button";
import WishlistButton from "@/components/common/WishlistButton";
import { getAuthorBySlug } from "@/lib/data";

interface SpeakWithAuthorsSectionProps {
  books: Book[];
}

export default function SpeakWithAuthorsSection({
  books,
}: SpeakWithAuthorsSectionProps) {
  if (books.length === 0) return null;

  const displayedBooks = books.slice(0, 3);

  return (
    <section className="mt-8 sm:mt-10">
      <div className="mb-4 sm:mb-5 flex items-start justify-between gap-4">
        <h2 className="text-[18px] sm:text-[22px] font-bold text-[#374151]">
          Speak with Authors
        </h2>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          <button
            type="button"
            aria-label="Previous authors"
            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-border bg-background text-heading shadow-sm hover:bg-black/5 transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
          <button
            type="button"
            aria-label="Next authors"
            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-border bg-background text-heading shadow-sm hover:bg-black/5 transition-colors"
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>

      <div
        role="list"
        aria-label="Speak with Authors"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
      >
        {displayedBooks.map((book) => {
          const author = getAuthorBySlug(book.authorSlug);

          return (
            <div
              key={book.id}
              role="listitem"
              className="rounded-2xl bg-[#f4ece3]/50 p-3 flex flex-col border border-black/5 shadow-sm"
            >
              <Link href={`/author/${book.authorSlug}`} className="group block">
                <div className="relative flex aspect-[7/5] w-full overflow-hidden rounded-xl ring-1 ring-black/5">
                  <div className="relative w-1/2 h-full bg-gradient-to-br from-slate-300 to-slate-500 overflow-hidden">
                    <Image
                      src={book?.authorImage as string}
                      alt={book.authorName}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative w-1/2 h-full bg-black/10 border-l border-white/20">
                    <Image
                      src={book?.bookImage as string}
                      alt={book.title}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <WishlistButton
                      bookTitle={book.title}
                      className="absolute right-2 top-2 z-10"
                    />
                  </div>
                </div>
              </Link>

              <div className="mt-3 px-1 flex-1">
                <p className="line-clamp-1 text-sm font-semibold text-heading">
                  {book.title}
                </p>
                <p className="mt-0.5 text-xs text-muted">by {book.authorName}</p>
              </div>

              <Button
                href={`/book/${book.slug}`}
                className="mt-4 w-full rounded-lg bg-[#18181b] text-white hover:bg-[#27272a] shadow-sm font-semibold border-none"
                size="sm"
              >
                Chat with Me
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
