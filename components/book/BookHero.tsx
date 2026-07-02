import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import WishlistButton from "@/components/common/WishlistButton";
import ReadMore from "@/components/common/ReadMore";

interface BookHeroProps {
  book: Book;
}

export default function BookHero({ book }: BookHeroProps) {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-[240px_1fr]">
      <div>
        <div className="relative aspect-[2/3] w-full max-w-[240px] overflow-hidden rounded-card bg-black/5">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            sizes="240px"
            priority
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex max-w-[240px] gap-3">
          <Button href="#read" variant="outline" className="flex-1">
            Read
          </Button>
          <Button href="#chat" className="flex-1">
            Chat Now
          </Button>
        </div>
      </div>

      <div>
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold text-heading sm:text-3xl">
            {book.title}
          </h1>
          <WishlistButton
            bookTitle={book.title}
            className="h-10 w-10 border border-border bg-transparent hover:bg-black/5"
          />
        </div>

        <p className="mt-2 text-sm text-muted">
          Written by:{" "}
          <Link href={`/author/${book.authorSlug}`} className="text-accent hover:underline">
            {book.authorName}
          </Link>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <Badge key={`${tag}-${index}`} label={tag} />
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-heading">About the Book</h2>
          <ReadMore text={book.description} className="mt-2 max-w-2xl" />
        </div>
      </div>
    </section>
  );
}
