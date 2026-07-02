import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import HeroBanner from "@/components/browse/HeroBanner";
import GenreTabs from "@/components/browse/GenreTabs";
import RecommendedSection from "@/components/browse/RecommendedSection";
import SpeakWithAuthorsSection from "@/components/browse/SpeakWithAuthorsSection";
import FamousAuthorsSection from "@/components/browse/FamousAuthorsSection";
import BookSection from "@/components/common/BookSection";
import Footer from "@/components/layout/Footer";
import {
  getBooksByCategory,
  getBrowseSections,
  getGenres,
  getHeroContent,
  getSpeakWithAuthors,
  getFamousAuthors,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Browse Books",
  description:
    "Browse new arrivals, best sellers, genres and famous authors on Chai Reader.",
  alternates: { canonical: "/browse" },
};

// Layout recipe for the browse page: which section ids render before and
// after the "Famous Authors" strip. Editing this array reorders the page
// without touching any component.
const SECTION_ORDER_BEFORE_AUTHORS = ["new-arrivals"];
const SECTION_ORDER_AFTER_AUTHORS = [
  "best-sellers",
  "crime-fiction",
  "non-fiction",
  "self-help",
  "academics",
  "business",
  "tech",
  "kids",
  "classics",
];

export default function BrowsePage() {
  const hero = getHeroContent();
  const genres = getGenres();
  const sections = getBrowseSections();
  const speakWithAuthorsBooks = getSpeakWithAuthors();
  const famousAuthors = getFamousAuthors();

  const findSection = (id: string) => sections.find((section) => section.id === id);

  const renderSection = (id: string) => {
    const section = findSection(id);
    if (!section) return null;
    return (
      <BookSection
        key={section.id}
        id={section.id}
        title={section.title}
        subtitle={section.subtitle}
        books={getBooksByCategory(section.category)}
        layout={section.layout}
        cardVariant={section.cardVariant}
        maxCards={section.maxCards}
      />
    );
  };

  return (
    <PageShell showSearch>
      <HeroBanner content={hero.banner} />
      <GenreTabs genres={genres} />

      {SECTION_ORDER_BEFORE_AUTHORS.map(renderSection)}

      <RecommendedSection items={hero.recommended} />

      {/* best-sellers renders first in AFTER list, right below Recommended */}
      {SECTION_ORDER_AFTER_AUTHORS.slice(0, 1).map(renderSection)}

      <SpeakWithAuthorsSection books={speakWithAuthorsBooks} />

      {SECTION_ORDER_AFTER_AUTHORS.slice(1, 3).map(renderSection)}

      <FamousAuthorsSection authors={famousAuthors} />

      {SECTION_ORDER_AFTER_AUTHORS.slice(3).map(renderSection)}

      <Footer />
    </PageShell>
  );
}
