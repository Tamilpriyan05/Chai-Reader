import Image from "next/image";
import type { Genre } from "@/types";

interface GenreTabsProps {
  genres: Genre[];
}

export default function GenreTabs({ genres }: GenreTabsProps) {
  return (
    <section className="mt-8 sm:mt-12">
      <h2 className="mb-4 sm:mb-6 text-[18px] sm:text-[22px] font-bold text-[#374151]">
        Dive into Different Genres
      </h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 sm:pb-0 sm:grid sm:gap-4" style={{ gridTemplateColumns: `repeat(${genres.length}, 1fr)` }}>
        {genres.map((genre) => (
          <button
            key={genre.id}
            type="button"
            className="relative flex flex-shrink-0 items-center justify-center w-[110px] sm:w-full h-[50px] sm:h-[60px] overflow-hidden rounded-full group focus:outline-none"
          >
            {genre.image ? (
              <Image
                src={genre.image}
                alt={genre.label}
                fill
                sizes="(max-width: 640px) 110px, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-[#374151]" />
            )}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <span className="relative z-10 text-[13px] sm:text-[15px] font-medium text-white drop-shadow-sm whitespace-nowrap">
              {genre.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
