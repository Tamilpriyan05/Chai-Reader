import Image from "next/image";
import type { Author } from "@/types";
import Badge from "@/components/common/Badge";

interface AuthorHeroProps {
  author: Author;
}

export default function AuthorHero({ author }: AuthorHeroProps) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-[240px_1fr]">
      <div className="relative aspect-[4/3] w-full max-w-[240px] overflow-hidden rounded-card bg-black/5">
        <Image
          src={author.image}
          alt={author.name}
          fill
          sizes="240px"
          priority
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-heading sm:text-3xl">
          {author.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {author.bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {author.tags.map((tag, index) => (
            <Badge key={`${tag}-${index}`} label={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
