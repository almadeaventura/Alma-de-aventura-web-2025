
'use client';

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { triggerBookingSheet } from "@/components/booking-sheet";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Testimonials } from "@/components/testimonials";
import { Faqs } from "@/components/faqs";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export default function MaitencilloPage() {
  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    triggerBookingSheet();
  };

  const maitencilloImage = PlaceHolderImages.find(
    (img) => img.id === "vuelo-biplaza-maitencillo"
  );

  const flightOptions = [
    {
      title: "Vuelo Panorámico (15-20 min)",
      price: "$60.000",
      description: "Disfruta de un paseo tranquilo con vistas espectaculares del mar y el campo. Ideal para tu primera experiencia.",
      features: [
        "Briefing e introducción inicial.",
        "Vuelo recto y nivelado",
        "Equipamiento de última generación.",
      ],
    },
    {
      title: "Vuelo Freestyle (20-25 min)",
      price: "$95.000",
      description: "Siente la adrenalina con maniobras acrobáticas y giros emocionantes sobre el mar. ¡Para los más audaces!",
      features: [
        "Maniobras como wingovers y espirales.",
        "Doble dosis de adrenalina y diversión.",
        "Pilotos expertos en vuelo acrobático.",
      ],
    },
    {
      title: "Hike & Fly (2 horas aprox.)",
      price: "$150.000",
      description: "Combina trekking y parapente. Asciende a pie a un mirador exclusivo y desciende volando con vistas únicas.",
      features: [
        "Ruta de senderismo guiada.",
        "Despegue desde un lugar privilegiado.",
        "Una aventura completa en la naturaleza.",
      ],
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Parapente Maitencillo" },
            ]}
          />
        </div>

        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Vuelo en Parapente Biplaza en Maitencillo
              </h1>
              <p className="text-lg text-muted-foreground">
                Siente la libertad de volar sobre la costa central de Chile. 
                Despega desde la ladera y disfruta de un paseo tranquilo con 
                vistas espectaculares del mar y el campo.
              </p>
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold transition-transform hover:scale-105" onClick={handleBookingClick}>
                Reserva tu Vuelo Ahora
              </Button>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                {maitencilloImage && (
                    <Image 
                        src={maitencilloImage.imageUrl}
                        alt={maitencilloImage.description}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
          </div>
        </section>

        <section id="flight-options" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Elige tu Aventura en Maitencillo</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Tenemos el vuelo perfecto para cada espíritu aventurero. ¿Cuál es el tuyo?</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flightOptions.map((option, index) => (
                <Card key={index} className="flex flex-col overflow-hidden rounded-xl border-black/5 dark:border-white/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)] bg-background/80 dark:bg-background/70">
                  <CardHeader className="items-center text-center p-6">
                    
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <div className="pt-2">
                      <p className="text-4xl font-extrabold text-primary tracking-tighter">{option.price}</p>
                      <p className="text-muted-foreground text-sm">por persona</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <CardDescription className="text-center mb-4">{option.description}</CardDescription>
                    <ul className="space-y-2">
                      {option.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary/80 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full rounded-full h-12 text-base font-bold transition-transform hover:scale-105" onClick={handleBookingClick}>
                      ¡Lo Quiero!
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-6 md:space-y-10 pt-12 md:pt-20">
          <Testimonials />
          <Faqs />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
