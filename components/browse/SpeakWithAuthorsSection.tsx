import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollRow from "@/components/common/ScrollRow";
import Button from "@/components/common/Button";

interface SpeakWithAuthorsSectionProps {
  books: Book[];
}

export default function SpeakWithAuthorsSection({
  books,
}: SpeakWithAuthorsSectionProps) {
  if (books.length === 0) return null;

  return (
    <section className="mt-10">
      <SectionHeader title="Speak with Authors" />
      <ScrollRow ariaLabel="Speak with Authors">
        {books.map((book) => (
          <div key={book.id} className="w-[160px] shrink-0 text-center sm:w-[180px]">
            <Link
              href={`/author/${book.authorSlug}`}
              className="relative mx-auto block aspect-square w-24 overflow-hidden rounded-full ring-1 ring-border"
            >
              <Image
                src={book.coverImage}
                alt={book.authorName}
                fill
                sizes="96px"
                className="object-cover"
              />
            </Link>
            <p className="mt-2 line-clamp-1 text-sm font-medium text-heading">
              {book.title}
            </p>
            <p className="text-xs text-muted">by {book.authorName}</p>
            <Button href={`/book/${book.slug}`} size="sm" className="mt-2 w-full">
              Chat with Me
            </Button>
          </div>
        ))}
      </ScrollRow>
    </section>
  );
}
