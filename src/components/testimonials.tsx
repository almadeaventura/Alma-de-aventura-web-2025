
"use client";

import { TestimonialCard } from "./testimonial-card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { VideoDialog } from "./video-dialog";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: "¡Experiencia maravillosa y espectacular! El vuelo en parapente fue increíble, El instructor me dio mucha confianza. ¡100% recomendable!",
    author: "Javiera, voló en Maitencillo",
    authorImageId: "testimonial-1",
  },
  {
    id: 2,
    rating: 5,
    quote: "¡Ooooh, buenísima! Experiencia increible, De todas maneras volveré con toda la patota.",
    author: "Catalina, voló en quiriyuca",
    authorImageId: "testimonial-2",
  },
  {
    id: 3,
    rating: 5,
    quote: "Increible, Increible, Increible, Recomendados 100%, Todo el equipo son unos secos",
    author: "Valentina, voló en Maitencillo",
    authorImageId: "testimonial-3",
  },
];

export function Testimonials() {
  // TODO: Replace with the actual video URL for testimonials
  const testimonialsVideoUrl = "/videos/relax-estas-volando.mov"; 
  const videoTitle = "Opiniones de nuestros aventureros";

  return (
    <section id="testimonials" className="bg-transparent pb-16 md:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center px-4 pb-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Que dicen nuestros aventureros
          </h2>
          <VideoDialog
            videoUrl={testimonialsVideoUrl}
            videoTitle={videoTitle}
            trigger={
              <Button
                variant="secondary"
                className="mt-4 rounded-full h-9 px-4 text-xs font-bold transition-transform hover:scale-105 dark:bg-accent/30 dark:hover:bg-accent/50"
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                Ver Video Opiniones
              </Button>
            }
          />
        </div>
        <div className="flex gap-4 overflow-x-auto p-4 snap-x snap-mandatory scroll-smooth carousel-container">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
