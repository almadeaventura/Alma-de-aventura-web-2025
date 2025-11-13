
"use client";

import { useState, useEffect }from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const BOOKING_SHEET_EVENT = 'trigger-booking-sheet';

// Extend the global Window interface to include chatwoot
declare global {
  interface Window {
    chatwoot?: {
      toggle: (state: 'open' | 'close') => void;
    };
  }
}

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
    };
    
    document.addEventListener(BOOKING_SHEET_EVENT, handleTrigger);
    
    return () => {
      document.removeEventListener(BOOKING_SHEET_EVENT, handleTrigger);
    };
  }, []);

  useEffect(() => {
    // We don't want to run this on the very first render.
    // Chatwoot script will handle the initial visibility.
    if (!isMounted) return;

    if (window.chatwoot) {
      if (isOpen) {
        window.chatwoot.toggle('close');
      } else {
        // We add a small delay to show the bubble again to avoid visual glitches
        // This should only run when the sheet is *closing*, not on initial load.
        setTimeout(() => {
          window.chatwoot?.toggle('open');
        }, 300); // 300ms matches the sheet's closing animation
      }
    }
  }, [isOpen, isMounted]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/80 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      
      {/* Sheet Content */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 flex h-[85vh] flex-col rounded-t-2xl bg-card shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="flex-shrink-0 p-4 text-center relative">
          {/* Drag Handle */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-muted rounded-full"></div>

          <Button variant="ghost" size="icon" onClick={handleClose} className="absolute top-2 right-2 h-8 w-8 rounded-full">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
        <div className="flex-grow h-0">
          <iframe
            src="https://studio--studio-9830022122-8bbd1.us-central1.hosted.app/"
            className="h-full w-full border-0"
            title="Formulario de Reserva"
          ></iframe>
        </div>
      </div>
    </>
  );
}
