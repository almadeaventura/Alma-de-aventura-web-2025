
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "faq-1",
    question: "¿Qué es el parapente?",
    answer: "El parapente es un deporte aéreo que consiste en volar utilizando un ala flexible y ligera, sin motor. El piloto va sentado en un arnés y controla el parapente con dos mandos para dirigirlo y controlar la velocidad.",
  },
  {
    id: "faq-2",
    question: "¿Es seguro volar en parapente?",
    answer: "Sí, el parapente es una actividad muy segura cuando se realiza con instructores certificados y equipos en buen estado. Seguimos estrictos protocolos de seguridad y solo volamos en condiciones meteorológicas óptimas para garantizar tu bienestar.",
  },
  {
    id: "faq-3",
    question: "¿Necesito experiencia previa?",
    answer: "No, para un vuelo biplaza (tándem) no necesitas ninguna experiencia. Irás acompañado de un instructor profesional que se encargará de todo. Solo necesitas ganas de disfrutar de una experiencia inolvidable.",
  },
  {
    id: "faq-4",
    question: "¿Qué ropa y calzado debo usar?",
    answer: "Te recomendamos llevar ropa cómoda y abrigada, incluso en verano, ya que en altura la temperatura puede bajar. Es indispensable usar zapatillas o bototos con buen agarre. No se permite volar con sandalias o zapatos abiertos.",
  },
  {
    id: "faq-5",
    question: "¿Hay límites de edad o peso?",
    answer: "Generalmente, no hay un límite de edad estricto, pero los menores deben contar con autorización de sus padres. En cuanto al peso, por razones de seguridad, el rango habitual para los pasajeros está entre 30 kg y 100 kg. Por favor, consulta si tienes dudas.",
  }
];

export function Faqs() {
  return (
    <section id="faqs" className="container mx-auto px-4 pb-12 md:pb-20">
      <div className="flex flex-col items-center text-center pb-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter">
          Preguntas Frecuentes
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Aquí encontrarás respuestas a las dudas más comunes sobre nuestros vuelos y cursos de parapente.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
