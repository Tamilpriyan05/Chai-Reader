import Link from "next/link";
import Image from "next/image";

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
    <footer className="relative mt-16 sm:mt-20 overflow-hidden bg-[#f7fafe] pt-10 sm:pt-16">
      <div className="relative z-10 px-5 pb-28 sm:pb-40 max-w-7xl mx-auto sm:px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 pr-0 lg:pr-4">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Chai Reader Logo"
                width={180}
                height={48}
                className="h-8 sm:h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[13px] sm:text-[15px] leading-relaxed text-[#64748b]">
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
      </div>

      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-1"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#dbeafe"
          fillOpacity="0.4"
          d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,208C672,224,768,256,864,256C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill="#bfdbfe"
          fillOpacity="0.4"
          d="M0,192L48,202.7C96,213,192,235,288,250.7C384,267,480,277,576,256C672,235,768,181,864,154.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill="#93c5fd"
          fillOpacity="0.4"
          d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,272C672,267,768,213,864,186.7C960,160,1056,160,1152,181.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
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
      <h3 className="mb-4 sm:mb-6 text-[13px] sm:text-[15px] font-bold text-black">{title}</h3>
      <ul className="space-y-3 sm:space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[12px] sm:text-[14px] font-medium text-[#64748b] transition-colors hover:text-[#2563eb]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
