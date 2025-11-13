
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AppLoader } from '@/components/app-loader';
import Script from 'next/script';
import { BookingSheet } from '@/components/booking-sheet';

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

  return (
    <html lang="es" className={`${plusJakartaSans.variable}`}>
      <head>
        {/* The document head is managed by Next.js. Metadata should be defined in page.tsx or layout.tsx files. */}
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
          <BookingSheet />
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
                  type: 'standard'
                })
              }
            })(document,"script");
          `}
        </Script>
      </body>
    </html>
  );
}
