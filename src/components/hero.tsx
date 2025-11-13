
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { triggerBookingSheet } from "./booking-sheet";
import { Card, CardContent } from "./ui/card";

const heroSlides = [
  {
    type: "image",
    title: "Vuela parapente en Maitencillo y Santiago",
    imageId: "vuelo-biplaza-maitencillo",
    action: "button",
    buttonLink: "#book",
    buttonText: "Reservar Ahora",
  },
  {
    type: "image",
    title: "Aprende a volar desde cero con nuestros cursos",
    imageId: "curso-de-parapente",
    titleClassName: "text-white",
    action: "button",
    buttonLink: "#",
    buttonText: "Ver Curso",
  },
  {
    type: "image",
    title: "Regala un vuelo en Parapente",
    imageId: "christmas-gift",
    action: "button",
    buttonLink: "#book",
    buttonText: "Regalar Vuelo",
  },
  {
    id: 4,
    title: "Guía de Aventuras",
    imageId: "tours-de-vuelo",
    buttonText: "Ver Tours",
    buttonLink: "#adventures",
  },
];

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      // Do something on select.
    });
  }, [api]);

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (href === '#book') {
      e.preventDefault();
      triggerBookingSheet();
    }
  };


  return (
    <div className="w-full py-8 md:py-12">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {heroSlides.map((slide, index) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === slide.imageId
            );

            return (
              <CarouselItem key={index} className="pl-4 basis-[80%] md:basis-1/3 lg:basis-1/4 group">
                <Card className="overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-[1.02] bg-card/90 dark:bg-card/80">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[4/3]">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            priority={index < 2}
                            data-ai-hint={image.imageHint}
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h2 className={cn("text-xl font-bold text-white drop-shadow-md", slide.titleClassName)}>
                          {slide.title}
                        </h2>
                        <Button asChild size="sm" className="mt-2 rounded-full px-5 font-bold transition-transform hover:scale-105">
                          <Link href={slide.buttonLink || '#'} onClick={(e) => handleBookingClick(e, slide.buttonLink)}>{slide.buttonText || 'Saber Más'}</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
