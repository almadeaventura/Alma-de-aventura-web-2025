
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AppLoader } from '@/components/app-loader';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Script from 'next/script';

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
  const [isBookingSheetOpen, setIsBookingSheetOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsBookingSheetOpen(true);
    const mainContainer = document.getElementById('main-container');

    if (mainContainer) {
        mainContainer.addEventListener('open-booking-sheet', handleOpenBooking);
    }
    
    // Cleanup
    return () => {
        if (mainContainer) {
            mainContainer.removeEventListener('open-booking-sheet', handleOpenBooking);
        }
    };
  }, []);

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
          <div className="relative z-0 h-screen overflow-y-auto overflow-x-hidden" id="main-container">
            {children}
          </div>
          <Toaster />
          <Sheet open={isBookingSheetOpen} onOpenChange={setIsBookingSheetOpen}>
            <SheetContent side="right" className="p-0 w-full sm:max-w-md">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Reserva tu Aventura</SheetTitle>
              </SheetHeader>
              <div className="h-[calc(100%-60px)]">
                <iframe
                    src="https://studio--studio-9830022122-8bbd1.us-central1.hosted.app/"
                    className="w-full h-full border-0"
                    title="Formulario de Reserva"
                ></iframe>
              </div>
            </SheetContent>
          </Sheet>
        </AppLoader>
        <Script id="chatwoot-sdk" strategy="afterInteractive">
          {`
            (function(d,t) {
              var BASE_URL="https://chatwoot-chatwoot.zthppe.easypanel.host";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.defer = true;
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'L9TqEY3C3ZQUasNXuYTQULMC',
                  baseUrl: BASE_URL,
                  type: 'standard',
                  hideMessageBubble: false
                })
              }
            })(document,"script");
          `}
        </Script>
      </body>
    </html>
  );
}
