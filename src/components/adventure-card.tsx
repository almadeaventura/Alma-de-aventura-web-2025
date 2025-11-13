
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
  bookButtonText?: string;
  showPlayButton?: boolean;
};

export function AdventureCard({
  title,
  description,
  imageId,
  link = "#",
  imageClassName,
  chips,
  videoUrl,
  bookButtonText = "Reservar",
  showPlayButton = true,
}: AdventureCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageId);
  const { toast } = useToast();

  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    triggerBookingSheet();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link === '#book') {
      e.preventDefault();
      triggerBookingSheet();
    }
  }

  const handleComingSoon = () => {
    toast({
      title: "¡No desesperes, ya falta menos!",
      description: "Esta función estará disponible pronto.",
    });
  };

  const PlayButton = () => (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-full bg-background dark:bg-background-dark/50 text-foreground transition-colors hover:bg-muted dark:hover:bg-gray-700"
    >
      <Link href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTY2OTk2MDU2NzYxODUy?story_media_id=2845986041932142047&igsh=OWlwcG51c2g5YjZw" target="_blank" rel="noopener noreferrer">
        <Play className="h-5 w-5" />
        <span className="sr-only">Play Video</span>
      </Link>
    </Button>
  );

  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border-black/5 dark:border-white/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-shadow hover:shadow-lg bg-card/90 dark:bg-card/80 max-w-sm">
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
      <CardContent className="p-4 flex flex-col flex-grow">
        <CardHeader className="p-0 flex-grow">
          <CardTitle className="text-base font-medium leading-normal">
            {title}
          </CardTitle>
          <CardDescription className="text-sm font-normal leading-normal text-muted-foreground pt-1 pb-4">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto pt-4 flex items-center justify-between p-0">
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
            {showPlayButton && (
              videoUrl ? (
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
              )
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="secondary"
              className="rounded-full h-9 px-4 text-xs font-bold transition-transform hover:scale-105 dark:bg-accent/30 dark:hover:bg-accent/50"
            >
              <Link href={link} onClick={handleLinkClick}>Ver Más</Link>
            </Button>
            <Button
              onClick={handleBookingClick}
              className="rounded-full h-9 px-4 bg-primary text-primary-foreground text-xs font-bold transition-transform hover:scale-105"
            >
              {bookButtonText}
            </Button>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
