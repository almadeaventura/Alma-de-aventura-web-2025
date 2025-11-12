import { AdventureCard } from "@/components/adventure-card";

const adventuresData = [
  {
    id: 1,
    title: "Parapente en Maitencillo",
    description: "Volamos todos los días desde el mediodía. Disfruta de vistas increíbles del mar y montañas, respaldado por más de 15 años y miles de horas de vuelo de experiencia profesional.",
    imageId: "vuelo-biplaza-card",
    link: "/parapente-maitencillo",
    chips: ["Siente", "Relájate"],
    videoUrl: "/videos/relax-estas-volando.mov"
  },
  {
    id: 2,
    title: "Curso de Parapente",
    description:
      "Aprende a volar con nuestros instructores certificados. Cursos para todos los niveles, desde iniciación hasta piloto avanzado.",
    imageId: "curso-de-parapente",
    imageClassName: "object-[center_30%]",
    chips: ["Desde Cero", "Perfeccionate"]
  },
  {
    id: 3,
    title: "Venta de Equipamiento",
    description:
      "Encuentra todo lo que necesitas para tu próxima aventura. Equipos nuevos y usados de las mejores marcas del mercado.",
    imageId: "tienda-web",
    chips: ["Nuevos", "Usados"]
  },
  {
    id: 4,
    title: "Guía de Aventuras",
    description:
      "Te llevamos a los mejores lugares para volar en Chile y Europa. Viajes organizados para pilotos de todos los niveles.",
    imageId: "tours-de-vuelo",
    chips: ["Chile", "Argentina", "Europa"]
  },
  {
    id: 5,
    title: "Taller de Reparación",
    description: "Servicio de reparación para parapentes, kites y arneses. Tu equipo en manos de riggers certificados para garantizar tu seguridad.",
    imageId: "taller-reparacion",
    chips: ["Parapente", "Kites", "Paracaidas"]
  }
];

export function Adventures() {
  return (
    <section id="adventures" className="px-4 pb-12 md:pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {adventuresData.map((adventure) => (
            <AdventureCard key={adventure.id} {...adventure} />
          ))}
        </div>
      </div>
    </section>
  );
}
