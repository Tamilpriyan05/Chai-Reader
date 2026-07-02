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
    <section className="mt-8 sm:mt-10">
      <SectionHeader title="Famous Authors" />
      <ScrollRow ariaLabel="Famous Authors">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/author/${author.slug}`}
            className="group relative block h-[100px] w-[100px] sm:h-[130px] sm:w-[130px] shrink-0 overflow-hidden rounded-xl bg-black/5"
          >
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="(max-width: 640px) 100px, 130px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-1.5 pb-1.5 pt-5 sm:px-2 sm:pb-2 sm:pt-6">
              <span className="block line-clamp-1 text-center text-[10px] sm:text-[11px] font-medium text-white shadow-sm">
                {author.name}
              </span>
            </div>
          </Link>
        ))}
      </ScrollRow>
    </section>
  );
}
