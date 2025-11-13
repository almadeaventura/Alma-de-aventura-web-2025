
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const faqData = [
  {
    id: "faq-1",
    question: "¿Qué días y horas se puede volar?",
    answer: "En AlmAventura, realizamos vuelos en parapente todos los días del año, siempre que las condiciones meteorológicas en nuestras zonas de vuelo como Maitencillo y Santiago sean seguras y favorables. Nuestro horario de vuelo habitual es desde el mediodía hasta el atardecer, aprovechando las mejores corrientes térmicas y laminares que nos regala la costa de Chile. Te recomendamos reservar con antelación para asegurar tu cupo en el mejor horario.",
  },
  {
    id: "faq-2",
    question: "¿Hay límites de edad o peso?",
    answer: "No hay un límite de edad estricto, pero los menores deben tener autorización de sus padres. Por seguridad, el peso de los pasajeros debe estar entre 30 kg y 100 kg. Esto puede variar ligeramente según las condiciones del viento del día.",
  },
  {
    id: "faq-3",
    question: "¿Necesito experiencia previa?",
    answer: "No necesitas ninguna experiencia para un vuelo biplaza (tándem), ¡solo las ganas de vivir la aventura! Nuestro instructor se encarga de todo. Además, el parapente es una actividad muy inclusiva. Hemos tenido el placer de volar con personas con diversas capacidades; solo se requiere poder dar unos pocos pasos durante el despegue y aterrizaje. Si tienes alguna duda, contáctanos y lo conversamos.",
  },
  {
    id: "faq-4",
    question: "¿Qué ropa y calzado debo usar?",
    answer: "Te recomendamos llevar ropa cómoda y abrigada, incluso en verano, ya que en altura la temperatura puede bajar. Es indispensable usar zapatillas o bototos con buen agarre. No se permite volar con sandalias o zapatos abiertos.",
  },
  {
    id: "faq-5",
    question: "¿Es seguro volar en parapente?",
    answer: "Sí, el parapente es una actividad muy segura cuando se realiza con instructores certificados y equipos en buen estado. Seguimos estrictos protocolos de seguridad y solo volamos en condiciones meteorológicas óptimas para garantizar tu bienestar.",
  }
];

export function Faqs() {
  return (
    <section id="faqs" className="container mx-auto px-4 pb-12 md:pb-20">
      <Card className="overflow-hidden rounded-xl border-black/5 dark:border-white/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-shadow hover:shadow-lg bg-card/90 dark:bg-card/80">
        <CardHeader className="items-center text-center p-6">
          <CardTitle className="text-3xl font-bold leading-tight tracking-tighter">
            Preguntas Frecuentes
          </CardTitle>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Aquí encontrarás respuestas a las dudas más comunes sobre nuestros vuelos y cursos de parapente.
          </p>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={faq.id} value={faq.id} className={index === faqData.length - 1 ? 'border-b-0' : ''}>
                  <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
