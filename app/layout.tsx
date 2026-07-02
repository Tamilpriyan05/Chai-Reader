import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chaireader.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chai Reader — Discover, Read & Chat with Books",
    template: "%s | Chai Reader",
  },
  description:
    "Chai Reader is an AI-powered book commerce platform to discover books, read them, and chat with authors and stories.",
  openGraph: {
    type: "website",
    siteName: "Chai Reader",
    title: "Chai Reader — Discover, Read & Chat with Books",
    description:
      "Discover new releases, best sellers and chat with your favourite authors on Chai Reader.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chai Reader — Discover, Read & Chat with Books",
    description:
      "Discover new releases, best sellers and chat with your favourite authors on Chai Reader.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
