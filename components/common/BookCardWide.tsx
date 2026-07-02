import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";
import Button from "./Button";

interface BookCardWideProps {
  book: Book;
}

export default function BookCardWide({ book }: BookCardWideProps) {
  return (
    <div className="flex gap-4 rounded-card border border-border p-3">
      <Link href={`/book/${book.slug}`} className="relative h-28 w-20 shrink-0 overflow-hidden rounded-md bg-black/5">
        <Image
          src={book.coverImage}
          alt={`${book.title} cover`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <Link href={`/book/${book.slug}`}>
          <h3 className="line-clamp-1 font-semibold text-heading">{book.title}</h3>
        </Link>
        <p className="mt-1 line-clamp-3 text-xs text-muted">{book.shortDescription}</p>
        <Button href={`/book/${book.slug}`} size="sm" className="mt-auto w-fit">
          Read &amp; Chat
        </Button>
      </div>
    </div>
  );
}
