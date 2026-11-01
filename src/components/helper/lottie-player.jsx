"use client";

import { useEffect } from "react";
import { useLottie } from "lottie-react";

export default function LottiePlayer({ animationData, reducedMotion }) {
  const { View, animationItem } = useLottie(
    { animationData, loop: true, autoplay: false },
    { width: "95%" }
  );

  useEffect(() => {
    if (!animationItem) return;

    const syncPlayback = () => {
      if (reducedMotion) animationItem.goToAndStop(0, true);
      else animationItem.play();
    };

    // The player can mount before its SVG is ready. Start both already-loaded
    // instances and asynchronously loaded instances explicitly.
    animationItem.addEventListener("DOMLoaded", syncPlayback);
    if (animationItem.isLoaded) syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      animationItem.removeEventListener("DOMLoaded", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [animationItem, reducedMotion]);

  return View;
}
