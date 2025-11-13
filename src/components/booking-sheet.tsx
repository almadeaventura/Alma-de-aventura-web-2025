
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
      <SheetContent side="bottom" className="p-0 h-[80vh] w-full bg-transparent border-none shadow-none rounded-t-2xl">
        <div className="w-full max-w-2xl mx-auto h-full flex flex-col">
            <SheetHeader className="p-4 pt-6 border-b border-white/10 flex-shrink-0">
              <SheetTitle className="text-white text-center">Reserva tu Aventura</SheetTitle>
            </SheetHeader>
            <div className="flex-grow h-0">
              <iframe
                  src="https://studio--studio-9830022122-8bbd1.us-central1.hosted.app/"
                  className="w-full h-full border-0"
                  title="Formulario de Reserva"
              ></iframe>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
