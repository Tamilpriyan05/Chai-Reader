import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/types";
import ReadMore from "@/components/common/ReadMore";

interface AuthorAboutProps {
  author: Author;
}

export default function AuthorAbout({ author }: AuthorAboutProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#1f2937]">About the Author</h2>
      <div className="mt-6 flex flex-col sm:flex-row gap-6">
        <Link href={`/author/${author.slug}`} className="relative h-[140px] w-[140px] shrink-0 overflow-hidden rounded-xl border border-black/5 shadow-sm">
          <Image src={author.image} alt={author.name} fill sizes="140px" className="object-cover" />
        </Link>
        <div className="min-w-0 flex-1">
          <Link href={`/author/${author.slug}`} className="text-lg font-bold text-[#6b21a8] hover:underline">
            {author.name}
          </Link>
          <ReadMore text={author.bio} limit={250} className="mt-3 text-sm text-muted leading-relaxed" />
        </div>
      </div>
    </section>
  );
}

