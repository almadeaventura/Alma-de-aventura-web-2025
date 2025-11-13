
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

export default function MaitencilloPage() {
  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerBookingSheet();
  };

  const maitencilloImage = PlaceHolderImages.find(
    (img) => img.id === "vuelo-biplaza-maitencillo"
  );

  const features = [
    "Vistas panorámicas del Océano Pacífico.",
    "Vuelo seguro con instructores certificados.",
    "Equipamiento de última generación.",
    "Experiencia apta para todas las edades.",
    "No se requiere experiencia previa.",
    "Fotos y videos de tu aventura (opcional).",
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

        <section className="bg-card/80 dark:bg-card/70 backdrop-blur-sm py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold tracking-tighter">¿Qué incluye la experiencia?</h2>
                         <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                    <span className="text-base">{feature}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                     <div className="text-center">
                        <p className="text-2xl font-bold">Precio</p>
                        <p className="text-6xl font-extrabold text-primary tracking-tighter">$60.000</p>
                        <p className="text-muted-foreground">por persona</p>
                         <Button size="lg" className="mt-6 rounded-full h-14 px-8 text-lg font-bold transition-transform hover:scale-105" onClick={handleBookingClick}>
                            ¡Quiero Volar!
                        </Button>
                    </div>
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
