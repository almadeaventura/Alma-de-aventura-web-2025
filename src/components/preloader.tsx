"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Preloader({ onLoaded }: { onLoaded: () => void }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const loadTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000); // Minimum display time for the preloader

    const unloadTimer = setTimeout(() => {
        onLoaded();
    }, 2500); // Must be longer than loadTimer + fade out duration (500ms)

    return () => {
        clearTimeout(loadTimer);
        clearTimeout(unloadTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        isMounted && !isFadingOut ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="animate-pulse-slow">
        <Image
          src="/images/logo.svg"
          alt="AlmAventura Logo"
          width={200}
          height={42}
          className="h-12 w-auto"
          priority
        />
      </div>
    </div>
  );
}
