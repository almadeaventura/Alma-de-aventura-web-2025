
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type TestimonialCardProps = {
  rating: number;
  quote: string;
  author: string;
  authorImageId?: string;
};

export function TestimonialCard({
  rating,
  quote,
  author,
  authorImageId,
}: TestimonialCardProps) {
  const authorImage = PlaceHolderImages.find((img) => img.id === authorImageId);

  return (
    <Card className="w-full flex-none flex-col gap-4 rounded-xl border-black/5 bg-card/90 dark:border-white/10 dark:bg-card/80 p-6 snap-start sm:w-1/2 lg:w-1/3 min-w-[300px] shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
      <CardContent className="p-0 flex flex-col gap-4 h-full">
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "fill-current" : "text-muted-foreground/50"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-foreground text-base italic flex-grow">
          &quot;{quote}&quot;
        </blockquote>
        <div className="flex items-center gap-3">
          {authorImage && (
            <Avatar>
              <AvatarImage src={authorImage.imageUrl} alt={author} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <p className="font-bold text-foreground">- {author}</p>
        </div>
      </CardContent>
    </Card>
  );
}
