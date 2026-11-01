"use client";

import { createContext, useContext, useEffect } from "react";

const MotionContext = createContext(null);

export function MotionProvider({ children }) {
  useEffect(() => {
    // Keep autoplay enabled, including for visitors with an old saved pause.
    document.documentElement.dataset.motion = "full";
  }, []);

  return (
    <MotionContext.Provider value={{ reducedMotion: false }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionContext);
}
