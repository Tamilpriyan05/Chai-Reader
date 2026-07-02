import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/types";
import ReadMore from "@/components/common/ReadMore";

interface AuthorAboutProps {
  author: Author;
}

export default function AuthorAbout({ author }: AuthorAboutProps) {
  return (
    <section className="mt-10 max-w-2xl">
      <h2 className="text-lg font-semibold text-heading">About the Author</h2>
      <div className="mt-3 flex gap-4">
        <Link href={`/author/${author.slug}`} className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <Image src={author.image} alt={author.name} fill sizes="64px" className="object-cover" />
        </Link>
        <div className="min-w-0">
          <Link href={`/author/${author.slug}`} className="font-semibold text-accent hover:underline">
            {author.name}
          </Link>
          <ReadMore text={author.bio} limit={160} className="mt-1" />
        </div>
      </div>
    </section>
  );
}
