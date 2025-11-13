
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { triggerBookingSheet } from "./booking-sheet";

const navLinks = [
  { href: "/parapente-maitencillo", label: "Parapente Maitencillo" },
  { href: "/#adventures", label: "Otros Servicios" },
  { href: "/#testimonials", label: "Testimonios" },
  { href: "#book", label: "Reservar" },
  { href: "/#about", label: "Contacto" },
];

export function Header() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "#book") {
            e.preventDefault();
            triggerBookingSheet();
        }
    };
  return (
    <header className="flex items-center justify-between bg-background/80 dark:bg-background/80 backdrop-blur-sm p-4 border-b border-black/5 dark:border-white/5">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="AlmAventura Logo"
          width={150}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium mt-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src="/images/logo.svg"
                alt="AlmAventura Logo"
                width={150}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
