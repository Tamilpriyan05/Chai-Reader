import booksData from "@/data/books.json";
import authorsData from "@/data/authors.json";
import reviewsData from "@/data/reviews.json";
import sectionsData from "@/data/sections.json";
import genresData from "@/data/genres.json";
import navData from "@/data/nav.json";
import heroData from "@/data/hero.json";
import type {
  Book,
  Author,
  Review,
  BookSectionConfig,
  Genre,
  NavItem,
} from "@/types";

const books = booksData as Book[];
const authors = authorsData as Author[];
const reviews = reviewsData as Review[];
const sections = sectionsData as BookSectionConfig[];
const genres = genresData as Genre[];
const navItems = navData as NavItem[];

export function getAllBooks(): Book[] {
  return books;
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getBooksByCategory(category: string, limit?: number): Book[] {
  const filtered = books.filter((book) => book.categories.includes(category));
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export function getAllAuthors(): Author[] {
  return authors;
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

export function getBooksByAuthor(authorSlug: string): Book[] {
  return books.filter((book) => book.authorSlug === authorSlug);
}

export function getReviewsForBook(bookSlug: string): Review[] {
  return reviews.filter((review) => review.bookSlug === bookSlug);
}

export function getRelatedBooks(book: Book, limit = 5): Book[] {
  return books
    .filter(
      (candidate) =>
        candidate.slug !== book.slug &&
        candidate.categories.some((cat) => book.categories.includes(cat))
    )
    .slice(0, limit);
}

export function getBrowseSections(): BookSectionConfig[] {
  return sections;
}

export function getGenres(): Genre[] {
  return genres;
}

export function getNavItems(): NavItem[] {
  return navItems;
}

export function getHeroContent() {
  return heroData;
}

export function getSpeakWithAuthors(limit = 3): Book[] {
  return getBooksByCategory("speakWithAuthors", limit);
}

export function getFamousAuthors(limit = 8): Author[] {
  return authors.slice(0, limit);
}
