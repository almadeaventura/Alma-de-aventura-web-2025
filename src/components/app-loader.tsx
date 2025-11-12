"use client";

import { useState, useEffect } from 'react';
import { Preloader } from './preloader';

export function AppLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will run once the component mounts on the client
    // You could also listen for window.onload or other events
  }, []);

  return (
    <>
      <Preloader onLoaded={() => setLoading(false)} />
      {!loading && children}
    </>
  );
}
