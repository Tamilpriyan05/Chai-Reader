import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import AuthorHero from "@/components/author/AuthorHero";
import BookSection from "@/components/common/BookSection";
import {
  getAllAuthors,
  getAuthorBySlug,
  getBooksByAuthor,
} from "@/lib/data";

interface AuthorPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }));
}

export function generateMetadata({ params }: AuthorPageProps): Metadata {
  const author = getAuthorBySlug(params.slug);
  if (!author) return { title: "Author not found" };

  return {
    title: author.name,
    description: author.bio,
    alternates: { canonical: `/author/${author.slug}` },
    openGraph: {
      title: author.name,
      description: author.bio,
      images: [{ url: author.image }],
      type: "profile",
    },
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const books = getBooksByAuthor(author.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    image: author.image,
  };

  return (
    <PageShell
      breadcrumb={[
        { label: "Browse", href: "/browse" },
        { label: "Authors", href: "/browse" },
        { label: author.name },
      ]}
    >
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AuthorHero author={author} />

      <BookSection
        title="Our New Releases"
        subtitle="Trending books among readers"
        books={books}
        layout="grid"
        cardVariant="compact"
      />

      <BookSection
        title="Our New Releases"
        subtitle="Trending books among readers"
        books={books}
        layout="grid"
        cardVariant="wide"
      />
    </PageShell>
  );
}
