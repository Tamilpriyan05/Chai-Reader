import type { Book } from "@/types";

interface ProductDetailsProps {
  book: Book;
}

export default function ProductDetails({ book }: ProductDetailsProps) {
  const details: Array<[string, string]> = [
    ["Publisher", book.publisher],
    ["Publication date", book.publicationDate],
    ["Language", book.language],
    ["Print lenght", book.printLength],
  ];

  return (
    <section>
      <h2 className="text-xl font-bold text-[#1f2937]">Product Details</h2>
      <dl className="mt-6 space-y-4">
        {details.map(([label, value]) => (
          <div key={label} className="flex gap-4 text-sm">
            <dt className="w-36 shrink-0 font-bold text-[#374151]">{label} :</dt>
            <dd className="text-muted font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

