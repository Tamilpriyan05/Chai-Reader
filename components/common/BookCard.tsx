import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";
import WishlistButton from "./WishlistButton";
import Button from "./Button";

interface BookCardProps {
  book: Book;
  className?: string;
}

export default function BookCard({ book, className }: BookCardProps) {
  return (
    <div
      role="listitem"
      className={`w-[160px] shrink-0 sm:w-[180px] ${className ?? ""}`}
    >
      <Link href={`/book/${book.slug}`} className="group block">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-card bg-black/5">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            sizes="180px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <WishlistButton
            bookTitle={book.title}
            className="absolute right-2 top-2"
          />
        </div>
        <p className="mt-2 line-clamp-2 text-sm font-medium text-heading">
          {book.title}
        </p>
        <p className="text-xs text-muted">by {book.authorName}</p>
      </Link>
      <Button href={`/book/${book.slug}`} variant="primary" size="sm" className="mt-2 w-full">
        Read &amp; Chat
      </Button>
    </div>
  );
}
