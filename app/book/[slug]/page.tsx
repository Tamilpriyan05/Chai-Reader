import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import BookHero from "@/components/book/BookHero";
import ProductDetails from "@/components/book/ProductDetails";
import AuthorAbout from "@/components/book/AuthorAbout";
import ReviewsSection from "@/components/book/ReviewsSection";
import BookSection from "@/components/common/BookSection";
import {
  getAllBooks,
  getAuthorBySlug,
  getBookBySlug,
  getRelatedBooks,
  getReviewsForBook,
} from "@/lib/data";

interface BookPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export function generateMetadata({ params }: BookPageProps): Metadata {
  const book = getBookBySlug(params.slug);
  if (!book) return { title: "Book not found" };

  return {
    title: book.title,
    description: book.shortDescription,
    alternates: { canonical: `/book/${book.slug}` },
    openGraph: {
      title: book.title,
      description: book.shortDescription,
      images: [{ url: book.coverImage }],
      type: "book",
    },
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();

  const author = getAuthorBySlug(book.authorSlug);
  const reviews = getReviewsForBook(book.slug);
  const relatedBooks = getRelatedBooks(book);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: book.authorName },
    description: book.shortDescription,
    inLanguage: book.language,
    publisher: book.publisher,
    numberOfPages: book.printLength.replace(/\D/g, ""),
  };

  return (
    <PageShell
      breadcrumb={[{ label: "Browse", href: "/browse" }, { label: book.title }]}
    >
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BookHero book={book} />
      <ProductDetails book={book} />
      {author && <AuthorAbout author={author} />}
      <ReviewsSection reviews={reviews} />

      <BookSection
        title="You might also like"
        books={relatedBooks}
        layout="scroll"
      />
    </PageShell>
  );
}
