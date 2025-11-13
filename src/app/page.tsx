
"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Adventures } from "@/components/adventures";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { triggerBookingSheet } from "@/components/booking-sheet";

export default function Home() {
  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerBookingSheet();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center">
            Nuestros servicios de parapente
          </h2>
        </div>
        <div className="space-y-6 md:space-y-10">
          <Adventures />
          <Testimonials />
        </div>
        <div id="book" className="pb-10 text-center container mx-auto px-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            <span className="block">Reserva tu Aventura</span>
            <span className="block">que nunca olvidaras</span>
          </h2>
          <div className="mt-8">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold transition-transform hover:scale-105" onClick={handleBookingClick}>
                Reservar Ahora
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
