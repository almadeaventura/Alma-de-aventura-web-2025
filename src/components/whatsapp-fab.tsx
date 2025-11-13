
"use client";

import { FaCommentDots } from "react-icons/fa";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type WhatsappFabProps = {
  onFabClick: () => void;
};

export function WhatsappFab({ onFabClick }: WhatsappFabProps) {
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isDotVisible, setIsDotVisible] = useState(false);

  useEffect(() => {
    // Después de 2 segundos, muestra el globo de bienvenida
    const showBubbleTimeout = setTimeout(() => {
      setIsBubbleVisible(true);
    }, 2000);

    // Después de 8 segundos en total, oculta el globo y muestra el punto de notificación
    const showDotTimeout = setTimeout(() => {
      setIsBubbleVisible(false);
      setIsDotVisible(true);
    }, 8000);

    // Limpia los temporizadores si el componente se desmonta
    return () => {
      clearTimeout(showBubbleTimeout);
      clearTimeout(showDotTimeout);
    };
  }, []);

  const handleFabClick = () => {
    // Cuando el usuario hace clic, oculta el punto de notificación
    setIsDotVisible(false);
    onFabClick();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Globo de chat */}
      <div
        className={cn(
          "w-64 rounded-lg bg-card p-4 text-card-foreground shadow-2xl transition-all duration-300 ease-in-out",
          isBubbleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <p className="font-bold">Hola, soy Lucía 👋</p>
        <p className="text-sm text-muted-foreground">
          ¿Necesitas ayuda para reservar?
        </p>
      </div>

      {/* Botón FAB */}
      <div className="relative">
        <Button
          onClick={handleFabClick}
          className="p-0 rounded-full h-16 w-16 transition-transform hover:scale-110 shadow-lg bg-primary"
          aria-label="Abrir panel de reservas"
        >
          <FaCommentDots className="h-8 w-8 text-primary-foreground" />
        </Button>

        {/* Punto de Notificación */}
        {isDotVisible && (
          <div className="pointer-events-none absolute right-0 top-0 h-4 w-4 rounded-full bg-red-600 ring-2 ring-white dark:ring-background" />
        )}
      </div>
    </div>
  );
}
