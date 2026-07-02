import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/types";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollRow from "@/components/common/ScrollRow";

interface FamousAuthorsSectionProps {
  authors: Author[];
}

export default function FamousAuthorsSection({ authors }: FamousAuthorsSectionProps) {
  if (authors.length === 0) return null;

  return (
    <section className="mt-10">
      <SectionHeader title="Famous Authors" />
      <ScrollRow ariaLabel="Famous Authors">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/author/${author.slug}`}
            className="flex w-20 shrink-0 flex-col items-center gap-2 text-center"
          >
            <span className="relative block h-16 w-16 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <span className="line-clamp-1 text-xs font-medium text-heading">
              {author.name}
            </span>
          </Link>
        ))}
      </ScrollRow>
    </section>
  );
}
