import type { Genre } from "@/types";

interface GenreTabsProps {
  genres: Genre[];
}

export default function GenreTabs({ genres }: GenreTabsProps) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 text-sm font-semibold text-heading">
        Dive into Different Genres
      </h2>
      <div className="scrollbar-hide flex gap-3 overflow-x-auto">
        {genres.map((genre) => (
          <button
            key={genre.id}
            type="button"
            className="shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {genre.label}
          </button>
        ))}
      </div>
    </section>
  );
}
