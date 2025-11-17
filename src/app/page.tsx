
'use client';

import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Adventures } from "@/components/adventures";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { triggerBookingSheet } from "@/components/booking-sheet";
import { Faqs } from '@/components/faqs';

// export const metadata: Metadata = {
//   title: 'AlmAventura | Escuela de Parapente y Vuelos Tándem en Chile',
//   description: 'Vive la aventura de volar. Ofrecemos vuelos biplaza en parapente, cursos de todos los niveles y tours de vuelo en Maitencillo, Santiago y Europa. ¡Reserva hoy!',
//   keywords: ['parapente', 'vuelo tándem', 'escuela de parapente', 'parapente chile', 'parapente maitencillo', 'parapente santiago', 'almadeaventura', 'volar en parapente'],
//   openGraph: {
//     title: 'AlmAventura | Escuela de Parapente y Vuelos Tándem en Chile',
//     description: 'Siente la libertad de volar. Vuelos biplaza, cursos y tours de parapente con instructores certificados.',
//     type: 'website',
//     url: 'https://almadeaventura.cl',
//     images: [
//       {
//         url: 'https://almadeaventura.cl/images/og-image.jpg', // You should create this image
//         width: 1200,
//         height: 630,
//         alt: 'Persona volando en parapente sobre un paisaje montañoso al atardecer.',
//       },
//     ],
//   },
// };


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
            Nuestros servicios de parapente FINAL
          </h2>
        </div>
        <div className="space-y-6 md:space-y-10">
          <Adventures />
          <Testimonials />
          <Faqs />
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
