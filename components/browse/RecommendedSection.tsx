import Image from "next/image";

interface RecommendedItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface RecommendedSectionProps {
  items: RecommendedItem[];
}

export default function RecommendedSection({ items }: RecommendedSectionProps) {
  return (
    <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-card"
        >
          <Image
            src={item.image}
            alt=""
            width={500}
            height={220}
            className="h-40 w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-black/35 p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 max-w-xs text-sm text-white/90">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
