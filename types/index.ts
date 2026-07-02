export interface Book {
  id: string;
  slug: string;
  title: string;
  authorSlug: string;
  authorName: string;
  coverImage: string;
  shortDescription: string;
  description: string;
  tags: string[];
  publisher: string;
  publicationDate: string;
  language: string;
  printLength: string;
  categories: string[];
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  image: string;
  bio: string;
  tags: string[];
}

export interface Review {
  id: string;
  bookSlug: string;
  name: string;
  avatar: string;
  comment: string;
}

export interface Genre {
  id: string;
  label: string;
}

export interface BookSectionConfig {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  layout: "scroll" | "grid";
  cardVariant: "compact" | "wide";
}

export interface HeroBannerContent {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  image: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}
