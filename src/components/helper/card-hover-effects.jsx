"use client";

import { useEffect } from "react";

export default function CardHoverEffects() {
  useEffect(() => {
    const pointerMotion = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    let activeCard = null;
    let frame = null;
    let pointer = null;

    const clearCard = () => {
      if (!activeCard) return;
      activeCard.style.setProperty("--glow-active", "0");
      activeCard.style.removeProperty("--glow-x");
      activeCard.style.removeProperty("--glow-y");
      activeCard.removeAttribute("data-glow-active");
      activeCard = null;
    };
    const reset = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      clearCard();
    };
    const update = (event) => {
      if (!pointerMotion.matches || event.pointerType === "touch") {
        reset();
        return;
      }
      pointer = { target: event.target, x: event.clientX, y: event.clientY };
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const card = pointer.target instanceof Element ? pointer.target.closest("[data-card-glow]") : null;
        // Light only the closest surface, so nested cards don't double the glow.
        if (card !== activeCard) clearCard();
        if (!card) return;
        activeCard = card;
        const bounds = card.getBoundingClientRect();
        const x = Math.max(0, Math.min(bounds.width, pointer.x - bounds.left));
        const y = Math.max(0, Math.min(bounds.height, pointer.y - bounds.top));
        // Project onto the nearest edge so the light stays on the contour,
        // even when the pointer moves through the middle of a large card.
        const edges = [
          { distance: x, x: 0, y },
          { distance: bounds.width - x, x: bounds.width, y },
          { distance: y, x, y: 0 },
          { distance: bounds.height - y, x, y: bounds.height },
        ];
        const closest = edges.reduce((nearest, edge) => edge.distance < nearest.distance ? edge : nearest);
        card.style.setProperty("--glow-x", `${closest.x}px`);
        card.style.setProperty("--glow-y", `${closest.y}px`);
        card.style.setProperty("--glow-active", "1");
        card.setAttribute("data-glow-active", "");
      });
    };

    document.addEventListener("pointermove", update, { passive: true });
    document.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", reset, { passive: true, capture: true });
    pointerMotion.addEventListener("change", reset);
    return () => {
      reset();
      document.removeEventListener("pointermove", update);
      document.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", reset, true);
      pointerMotion.removeEventListener("change", reset);
    };
  }, []);

  return null;
}
