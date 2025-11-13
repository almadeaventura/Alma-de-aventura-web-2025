
"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { VideoDialog } from "./video-dialog";
import { triggerBookingSheet } from "./booking-sheet";

type AdventureCardProps = {
  title: string;
  description: string;
  imageId: string;
  link?: string;
  imageClassName?: string;
  chips?: string[];
  videoUrl?: string;
};

export function AdventureCard({
  title,
  description,
  imageId,
  link = "#",
  imageClassName,
  chips,
  videoUrl,
}: AdventureCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageId);
  const { toast } = useToast();

  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerBookingSheet();
  };

  const handleComingSoon = () => {
    toast({
      title: "¡No desesperes, ya falta menos!",
      description: "Esta función estará disponible pronto.",
    });
  };

  const PlayButton = () => (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-full bg-background dark:bg-background-dark/50 text-foreground transition-colors hover:bg-muted dark:hover:bg-gray-700"
      onClick={handleComingSoon}
    >
      <Play className="h-5 w-5" />
      <span className="sr-only">Play Video</span>
    </Button>
  );

  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border-black/5 dark:border-white/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-shadow hover:shadow-lg bg-card/90 dark:bg-card/80">
      <div className="w-full aspect-video relative">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className={cn("object-cover", imageClassName)}
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={image.imageHint}
          />
        )}
        {chips && chips.length > 0 && (
          <div className="absolute top-2 left-2 z-20 flex flex-wrap gap-2 justify-start">
            {chips.map((chip) => (
              <div
                key={chip}
                className="rounded-full border border-white/50 bg-black/20 px-3 py-1 text-white text-xs backdrop-blur-sm"
              >
                {chip}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 pt-3 flex flex-col flex-grow">
        <CardHeader className="p-0 flex-grow">
          <CardTitle className="text-base font-medium leading-normal">
            {title}
          </CardTitle>
          <CardDescription className="text-sm font-normal leading-normal text-muted-foreground pt-1 pb-4">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto pt-4 flex items-center justify-between gap-2 p-0">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 rounded-full bg-background dark:bg-background-dark/50 text-foreground transition-colors hover:bg-muted dark:hover:bg-gray-700"
              onClick={handleComingSoon}
            >
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            {videoUrl ? (
              <VideoDialog
                videoUrl={videoUrl}
                videoTitle={title}
                trigger={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 rounded-full bg-background dark:bg-background-dark/50 text-foreground transition-colors hover:bg-muted dark:hover:bg-gray-700"
                  >
                    <Play className="h-5 w-5" />
                    <span className="sr-only">Play Video</span>
                  </Button>
                }
              />
            ) : (
              <PlayButton />
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="secondary"
              className="rounded-full h-9 px-4 text-xs font-bold transition-transform hover:scale-105 dark:bg-accent/30 dark:hover:bg-accent/50"
            >
              <Link href={link}>Ver Más</Link>
            </Button>
            <Button
              onClick={handleBookingClick}
              className="rounded-full h-9 px-4 bg-primary text-primary-foreground text-xs font-bold transition-transform hover:scale-105"
            >
              Reservar
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
