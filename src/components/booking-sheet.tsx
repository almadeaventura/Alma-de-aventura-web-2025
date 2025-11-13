
"use client";

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const BOOKING_SHEET_EVENT = 'trigger-booking-sheet';

export function triggerBookingSheet() {
  document.dispatchEvent(new CustomEvent(BOOKING_SHEET_EVENT));
}

export function BookingSheet() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    
    document.addEventListener(BOOKING_SHEET_EVENT, handleTrigger);
    
    return () => {
      document.removeEventListener(BOOKING_SHEET_EVENT, handleTrigger);
    };
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="p-0 w-full sm:max-w-md bg-background/80 dark:bg-background/80 backdrop-blur-sm border-black/5 dark:border-white/5">
        <SheetHeader className="p-4 border-b border-black/5 dark:border-white/5">
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
  );
}
