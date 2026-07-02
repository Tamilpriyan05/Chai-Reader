import Image from "next/image";
import type { Book } from "@/types";
import Button from "@/components/common/Button";

interface BookSidebarProps {
  book: Book;
}

export default function BookSidebar({ book }: BookSidebarProps) {
  return (
    <div className="w-full">
      <div className="border-[3px] border-[#0ea5e9] p-[3px] rounded-[4px] flex flex-col bg-white">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2px] bg-black/5">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            priority
            className="object-cover"
          />
        </div>
        <div className="mt-1 flex gap-1">
          <Button 
            href="#read" 
            variant="outline" 
            className="flex-1 rounded-[2px] border-border text-xs py-2 bg-white hover:bg-black/5 h-10"
          >
            Read
          </Button>
          <Button 
            href="#chat" 
            className="flex-1 rounded-[2px] bg-[#18181b] hover:bg-[#27272a] text-white border-none text-xs py-2 h-10"
          >
            Chat Now
          </Button>
        </div>
      </div>
    </div>
  );
}
