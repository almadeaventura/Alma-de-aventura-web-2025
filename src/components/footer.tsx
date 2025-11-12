
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer id="about" className="bg-foreground text-background mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">Almadeaventura.cl</h3>
            <p className="mt-2 text-muted-foreground">
              Toda una vida de aventura
            </p>
          </div>
          <div>
            <h4 id="contact" className="font-bold">Enlaces Rápidos</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary"
                  href="#about"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary"
                  href="#adventures"
                >
                  Nuestros Tours
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary"
                  href="/parapente-maitencillo#faq"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary"
                  href="#contact"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Síguenos</h4>
            <div className="flex mt-2 space-x-4">
              <Link
                className="text-muted-foreground hover:text-primary"
                href="#"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" fill="currentColor" />
              </Link>
              <Link
                className="text-muted-foreground hover:text-primary"
                href="#"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-6 w-6" fill="currentColor" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              info@almadeaventura.cl
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/20 pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Almadeaventura.cl. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
