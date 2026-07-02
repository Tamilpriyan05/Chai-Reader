import Link from "next/link";
import { BookOpen } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Home", href: "/browse" },
  { label: "FAQ", href: "/faq" },
  { label: "Support / Help Center", href: "/support" },
];

const partnerLinks = [
  { label: "For Authors", href: "/for-authors" },
  { label: "For Publishers", href: "/for-publishers" },
  { label: "Become a Partner", href: "/partners" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-sidebar px-4 py-10 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-heading" />
            <span className="text-lg font-semibold text-accent">Chai Reader</span>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Chai Reader is an AI-powered book commerce platform designed to
            transform how people discover and experience books—through
            reading, chatting with books, and more. It is owned and operated
            by Ailaysa Technologies Pvt Ltd.
          </p>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="For Partners" links={partnerLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-heading">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted hover:text-heading">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
