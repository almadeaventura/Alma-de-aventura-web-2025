
"use client";

import Image from 'next/image';
import { CheckCircle, Award, Shield, Wind, Users } from 'lucide-react';

import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Testimonials } from '@/components/testimonials';

const services = [
  {
    title: 'Vuelo Tándem Clásico',
    price: '$60.000 CLP',
    duration: '15-20 min de vuelo',
    description: 'La experiencia perfecta para tu primer vuelo. Disfruta de las vistas espectaculares de la costa de Maitencillo junto a un instructor certificado.',
    features: ['Instructor experto', 'Equipamiento completo', 'Charla de seguridad'],
    imageId: 'adventure-patagonia',
  },
  {
    title: 'Vuelo Tándem con GoPro',
    price: '$75.000 CLP',
    duration: '15-20 min de vuelo',
    description: 'Inmortaliza tu aventura. Incluye el vuelo clásico más un video y fotos en alta definición para que revivas la experiencia cuando quieras.',
    features: ['Todo lo del Vuelo Clásico', 'Video y fotos con GoPro', 'Recuerdo inolvidable'],
    imageId: 'hero-video-poster',
  },
];

const faqs = [
  {
    question: '¿Necesito experiencia previa para volar?',
    answer: 'No, en absoluto. Volarás en modo tándem con un instructor certificado que se encargará de todo. Tú solo tienes que relajarte y disfrutar de las vistas.',
  },
  {
    question: '¿Hay un límite de peso?',
    answer: 'Sí, por razones de seguridad, el rango de peso para los pasajeros es entre 30 kg y 100 kg. Si tienes dudas, consúltanos.',
  },
  {
    question: '¿Qué ropa debo usar?',
    answer: 'Te recomendamos usar ropa cómoda y zapatillas cerradas. También es buena idea llevar una chaqueta cortavientos, incluso en días soleados, ya que en el aire puede hacer más frío.',
  },
  {
    question: '¿Qué pasa si las condiciones climáticas no son buenas?',
    answer: 'La seguridad es nuestra máxima prioridad. Si las condiciones meteorológicas no son seguras para volar, reprogramaremos tu vuelo sin costo adicional para el día y hora que más te acomode.',
  },
  {
    question: '¿Puedo llevar mi propia cámara?',
    answer: 'Por seguridad, no se permiten cámaras personales o teléfonos durante el vuelo. Ofrecemos un servicio con GoPro para garantizar que obtengas las mejores tomas de forma segura.',
  },
];

export default function ParapenteMaitencilloPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-video-poster');

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        mainContainer.dispatchEvent(new CustomEvent('open-booking-sheet'));
    }
  };


  return (
    <div className="relative flex min-h-screen w-full flex-col bg-transparent">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Persona volando en parapente sobre la costa de Maitencillo"
              fill
              className="object-cover object-[center_30%]"
              priority
              data-ai-hint="paragliding beach"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="relative z-10 container px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
              Vuela en Parapente en Maitencillo
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Siente la libertad de volar sobre el Océano Pacífico con instructores certificados. Una experiencia inolvidable te espera.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full h-14 px-8 text-lg font-bold transition-transform hover:scale-105">
              <a href="#book" onClick={handleBookingClick}>Reservar Mi Vuelo Ahora</a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-8 md:py-10 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Vuelos en Parapente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service) => {
                const image = PlaceHolderImages.find(img => img.id === service.imageId);
                return (
                  <Card key={service.title} className="flex flex-col overflow-hidden rounded-xl shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:shadow-2xl transition-shadow bg-card/90 dark:bg-card/80">
                      {image && (
                          <div className="w-full aspect-[4/3] relative">
                              <Image
                                  src={image.imageUrl}
                                  alt={service.description}
                                  fill
                                  className="object-cover"
                                  data-ai-hint="paragliding flight"
                              />
                          </div>
                      )}
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                      <CardDescription>{service.duration}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 text-sm mb-6">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-auto rounded-full font-bold transition-transform hover:scale-105">
                        <a href="#book" onClick={handleBookingClick}>Quiero Este Vuelo</a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Why Us Section */}
        <section className="py-8 md:py-10 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">¿Por Qué Volar con Nosotros?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/90 dark:bg-card/80 shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                <Award className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-bold text-lg">Más de 15 Años</h3>
                <p className="text-muted-foreground">De experiencia y miles de vuelos seguros.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/90 dark:bg-card/80 shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                <Shield className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-bold text-lg">Seguridad Certificada</h3>
                <p className="text-muted-foreground">Instructores y equipos con certificación DGAC.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/90 dark:bg-card/80 shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                <Wind className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-bold text-lg">Ubicación Perfecta</h3>
                <p className="text-muted-foreground">Las mejores condiciones de vuelo en Maitencillo.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/90 dark:bg-card/80 shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                <Users className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-bold text-lg">Pasión por Volar</h3>
                <p className="text-muted-foreground">Compartimos nuestro amor por el vuelo contigo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-8 md:py-10 bg-transparent">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
            <div className="bg-card/90 dark:bg-card/80 rounded-xl p-2 shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left font-semibold px-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <div id="book" className="pb-10 text-center container mx-auto px-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            <span className="block">Reserva tu Aventura</span>
            <span className="block">que nunca olvidaras</span>
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold transition-transform hover:scale-105">
                <a href="#book" onClick={handleBookingClick}>Reservar Ahora</a>
            </Button>
          </div>
        </div>

      </main>
      <SiteFooter />
    </div>
  );
}
