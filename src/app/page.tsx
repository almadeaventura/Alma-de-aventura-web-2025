import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Adventures } from "@/components/adventures";
import { Testimonials } from "@/components/testimonials";
import { BookingForm } from "@/components/booking-form";
import { SiteFooter } from "@/components/footer";

export default function Home() {
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
        <div className="pb-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center">
            <span className="block">Reserva tu Aventura</span>
            <span className="block">que nunca olvidaras</span>
          </h2>
        </div>
        <BookingForm />
      </main>
      <SiteFooter />
    </div>
  );
}
