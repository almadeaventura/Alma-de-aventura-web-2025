
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";
import { CountrySelect, type Country } from "./country-select";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    type: "image",
    title: "Vuela parapente en Maitencillo y Santiago",
    imageId: "vuelo-biplaza-maitencillo",
    action: "form",
  },
  {
    type: "image",
    title: "Aprende a volar desde cero con nuestros cursos",
    imageId: "curso-de-parapente",
    titleClassName: "text-[#1A2E40] drop-shadow-md",
    action: "button",
    buttonLink: "#",
    buttonText: "Ver Curso",
  },
  {
    type: "image",
    title: "Regala un vuelo en Parapente",
    imageId: "christmas-gift",
    action: "form",
  },
];

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [selectedCountry, setSelectedCountry] = React.useState<Country | undefined>();
  const { toast } = useToast();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneInput = (e.currentTarget.elements.namedItem('whatsapp') as HTMLInputElement);
    const phoneValue = phoneInput.value;

    if (phoneValue && selectedCountry) {
        const fullPhone = selectedCountry.dialCode + phoneValue.replace(/\D/g, '');
        window.open(`https://wa.me/${fullPhone}`, '_blank');
    } else {
        toast({
            title: "Información requerida",
            description: "Por favor, selecciona un país e ingresa tu número para contactar.",
            variant: "destructive",
        });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {heroSlides.map((slide, index) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === slide.imageId
            );

            return (
              <CarouselItem key={index}>
                <div className="relative w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center p-4 text-white">
                  <div className="absolute inset-0 z-0 h-full w-full bg-slate-900">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-background-dark/30 to-background-dark/20"></div>
                  </div>

                  <div className="relative z-10 flex w-full flex-col gap-3 text-center items-center">
                    <h1 className={cn("text-3xl md:text-4xl font-bold leading-tight tracking-tighter max-w-lg", slide.titleClassName)}>
                      {slide.title}
                    </h1>
                    
                    {slide.action === 'form' ? (
                      <form onSubmit={handleContact} className="flex flex-col items-center gap-3 mt-4 w-full max-w-sm">
                        <div className="flex w-full items-center rounded-full bg-white/90 p-1.5 shadow-lg backdrop-blur-sm gap-1">
                          <CountrySelect onCountryChange={setSelectedCountry} variant="hero" />
                          <Input
                            name="whatsapp"
                            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0 border-0 p-0"
                            placeholder="Tu WhatsApp"
                            type="tel"
                          />
                          <Button
                            type="submit"
                            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
                          >
                            <FaWhatsapp className="h-5 w-5" />
                            <span className="truncate">Chatear</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                    ) : (
                      slide.action === 'button' && (
                        <Button asChild size="lg" className="mt-4 rounded-full px-8 font-bold transition-transform hover:scale-105">
                          <Link href={slide.buttonLink || '#'}>{slide.buttonText || 'Saber Más'}</Link>
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="absolute top-4 left-4 z-20 rounded-md bg-black/30 px-2 py-1 text-sm text-white">
        {current}/{count}
      </div>
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 w-1.5 rounded-full ${
              current === i + 1 ? "bg-white scale-125" : "bg-white/50"
            } transition-all`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
