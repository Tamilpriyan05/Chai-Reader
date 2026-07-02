import type { MetadataRoute } from "next";
import { getAllBooks, getAllAuthors } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chaireader.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/browse`, changeFrequency: "daily", priority: 1 },
  ];

  const bookRoutes: MetadataRoute.Sitemap = getAllBooks().map((book) => ({
    url: `${siteUrl}/book/${book.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const authorRoutes: MetadataRoute.Sitemap = getAllAuthors().map((author) => ({
    url: `${siteUrl}/author/${author.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...bookRoutes, ...authorRoutes];
}
