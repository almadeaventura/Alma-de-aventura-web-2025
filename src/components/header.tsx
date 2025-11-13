
"use client";

import Link from "next/link";
import Image from "next/image";
import { Gift } from "lucide-react";

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
import { cn } from "@/lib/utils";

// SVG para el gorro de Santa
const SantaHatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-red-500 -mb-6 -ml-3 transform rotate-[15deg]"
  >
    <path d="M12 2l7 4-7 8-7-8 7-4z" fill="red" stroke="red"></path>
    <path d="M5 6L12 14l7-8" stroke="red" strokeWidth="1"></path>
    <circle cx="19" cy="6" r="3" fill="white" stroke="white"></circle>
  </svg>
);


const navLinks = [
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
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/logo.svg"
          alt="AlmAventura Logo"
          width={150}
          height={32}
          className="h-8 w-auto"
          priority
        />
        <SantaHatIcon />
      </Link>
      <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                link.href === "#book" && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground rounded-full px-4 py-2"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 md:hidden">
            <Gift className="h-8 w-8" />
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
