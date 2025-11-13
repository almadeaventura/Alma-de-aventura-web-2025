
"use client";

import { useState, useEffect }from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
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
    // This effect ensures the Chatwoot widget is toggled correctly
    // when the booking dialog opens or closes.
    if (!isMounted) return;

    if (window.chatwoot) {
      if (isOpen) {
        window.chatwoot.toggle('close');
      } else {
        // We add a small delay to show the bubble again to avoid visual glitches
        // This should only run when the sheet is *closing*, not on initial load.
        setTimeout(() => {
          window.chatwoot?.toggle('open');
        }, 300); // 300ms matches the dialog's closing animation
      }
    }
  }, [isOpen, isMounted]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0 border-0 w-[95vw] h-[90vh] max-w-4xl bg-transparent shadow-none flex flex-col focus-visible:ring-0 focus-visible:ring-offset-0">
        <DialogHeader className="p-0 text-center relative flex-shrink-0 h-0">
          <DialogTitle className="sr-only">Formulario de Reserva</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/20 text-white z-50 backdrop-blur-sm transition-colors hover:bg-white/30">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex-grow h-full p-2 pt-0">
          <iframe
            src="https://studio--studio-9830022122-8bbd1.us-central1.hosted.app/"
            className="h-full w-full border-0 rounded-lg"
            title="Formulario de Reserva"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
