import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";
import WishlistButton from "./WishlistButton";

interface BookCardProps {
  book: Book;
  className?: string;
  variant?: string;
}

export default function BookCard({ book, className, variant }: BookCardProps) {
  if (variant === "bestseller") {
    return (
      <Link
        href={`/book/${book.slug}`}
        role="listitem"
        className={`flex flex-col bg-white p-2 sm:p-2.5 rounded-2xl border border-gray-100 shadow-sm group hover:shadow-md hover:border-gray-200 transition-all duration-300 ${className ?? ""}`}
      >
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-50">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <WishlistButton bookTitle={book.title} className="absolute top-2 right-2 z-10 shadow-md" />
        </div>
        <div className="mt-2 sm:mt-3 flex flex-col gap-1 flex-1">
          <p className="line-clamp-2 text-[11px] sm:text-[12px] font-bold text-gray-800 leading-snug">
            {book.title}
          </p>
          <p className="line-clamp-1 text-[10px] sm:text-[11px] font-medium text-blue-600">
            {book.authorName}
          </p>
        </div>
        <div className="mt-2 sm:mt-3 w-full py-1.5 bg-[#111111] hover:bg-black text-white text-[10px] sm:text-[11px] font-semibold rounded-lg transition-colors text-center">
          Read &amp; Chat
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/book/${book.slug}`}
      role="listitem"
      className={`relative shrink-0 w-[130px] sm:w-[160px] lg:w-[180px] h-[195px] sm:h-[240px] lg:h-[265px] rounded-2xl overflow-hidden group block shadow-md hover:shadow-xl transition-shadow duration-300 ${className ?? ""}`}
    >
      <Image
        src={book.coverImage}
        alt={`${book.title} cover`}
        fill
        sizes="(max-width: 640px) 130px, 180px"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 sm:px-3 pt-6 sm:pt-8 pb-2 sm:pb-3">
        <p className="line-clamp-2 text-[11px] sm:text-[12px] font-semibold text-white leading-tight">
          {book.title}
        </p>
        <p className="mt-0.5 line-clamp-1 text-[10px] sm:text-[11px] text-white/70">
          by {book.authorName}
        </p>
      </div>
    </Link>
  );
}
