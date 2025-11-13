
"use client";

import { useState, useEffect }from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const BOOKING_SHEET_EVENT = 'trigger-booking-sheet';

export function triggerBookingSheet() {
  document.dispatchEvent(new CustomEvent(BOOKING_SHEET_EVENT, { detail: { open: true } }));
}

export function BookingSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleTrigger = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsOpen(customEvent.detail.open);
      document.body.style.overflow = customEvent.detail.open ? 'hidden' : '';
    };
    
    document.addEventListener(BOOKING_SHEET_EVENT, handleTrigger);
    
    return () => {
      document.removeEventListener(BOOKING_SHEET_EVENT, handleTrigger);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isMounted || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[95vw] h-[90vh] max-w-4xl rounded-lg overflow-hidden">
         <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleClose}
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/20 text-white z-50 backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar</span>
          </Button>
        <iframe
          src="https://studio--studio-9830022122-8bbd1.us-central1.hosted.app/"
          className="h-full w-full border-0 rounded-lg"
          title="Formulario de Reserva"
        ></iframe>
      </div>
    </div>
  );
}
