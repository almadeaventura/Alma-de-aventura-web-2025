
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AppLoader } from '@/components/app-loader';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { WhatsappFab } from '@/components/whatsapp-fab';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

// export const metadata: Metadata = {
//   title: 'AlmAventura',
//   description: 'Vive la Aventura en Chile y Europa con Almadeaventura',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isRightSheetOpen, setIsRightSheetOpen] = useState(false);

  return (
    <html lang="es" className={`${plusJakartaSans.variable}`}>
      <head>
        <title>AlmAventura</title>
        <meta name="description" content="Vive la Aventura en Chile y Europa con Almadeaventura" />
      </head>
      <body className="font-body">
        <AppLoader>
          <div 
            className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/FondoParapentes.webp')" }}
          />
          <div className="relative z-0 h-screen overflow-y-auto overflow-x-hidden">
            {children}
          </div>
          <Toaster />
          <WhatsappFab onFabClick={() => setIsRightSheetOpen(true)} />
          <Sheet open={isRightSheetOpen} onOpenChange={setIsRightSheetOpen}>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Panel de contacto</SheetTitle>
              </SheetHeader>
              {/* Contenido del panel derecho, actualmente vacío */}
            </SheetContent>
          </Sheet>
        </AppLoader>
      </body>
    </html>
  );
}
