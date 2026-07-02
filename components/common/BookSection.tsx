import type { Book } from "@/types";
import SectionHeader from "./SectionHeader";
import BookCard from "./BookCard";
import BookCardWide from "./BookCardWide";
import ScrollRow from "./ScrollRow";

interface BookSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  books: Book[];
  layout?: "scroll" | "grid";
  cardVariant?: "compact" | "wide";
}

export default function BookSection({
  id,
  title,
  subtitle,
  books,
  layout = "scroll",
  cardVariant = "compact",
}: BookSectionProps) {
  if (books.length === 0) return null;

  return (
    <section id={id} className="mt-10" aria-labelledby={id ? `${id}-heading` : undefined}>
      <SectionHeader title={title} subtitle={subtitle} />

      {layout === "scroll" ? (
        <ScrollRow ariaLabel={title}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </ScrollRow>
      ) : cardVariant === "wide" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCardWide key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {books.map((book) => (
            <BookCard key={book.id} book={book} className="w-full" />
          ))}
        </div>
      )}
    </section>
  );
}
