import Link from "next/link";
import type { Book } from "@/types";
import WishlistButton from "@/components/common/WishlistButton";
import Badge from "@/components/common/Badge";
import ReadMore from "@/components/common/ReadMore";

interface BookHeaderInfoProps {
  book: Book;
}

export default function BookHeaderInfo({ book }: BookHeaderInfoProps) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#1f2937] sm:text-3xl">
          {book.title}
        </h1>
        <WishlistButton
          bookTitle={book.title}
          className="h-10 w-10 shrink-0 border border-border bg-white hover:bg-black/5 shadow-sm"
        />
      </div>

      <p className="mt-3 text-sm text-muted font-medium">
        Written by :{" "}
        <Link href={`/author/${book.authorSlug}`} className="text-heading hover:underline">
          {book.authorName}
        </Link>
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {book.tags.map((tag, index) => (
          <span 
            key={`${tag}-${index}`} 
            className="rounded-full bg-[#e0f2fe] px-4 py-1.5 text-xs font-semibold text-[#0369a1]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-[#1f2937]">About the Book</h2>
        <ReadMore text={book.description} className="mt-4 text-sm leading-relaxed text-muted" />
      </div>
    </div>
  );
}
