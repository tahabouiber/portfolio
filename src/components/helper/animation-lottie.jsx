"use client";

import dynamic from "next/dynamic";
import { useMotionPreference } from "./motion-preference";

// lottie-web reads document during import, so load it only in the browser.
const LottiePlayer = dynamic(() => import("./lottie-player"), { ssr: false });

const AnimationLottie = ({ animationPath }) => {
  const { reducedMotion } = useMotionPreference();

  if (reducedMotion === null) return null;

  return <LottiePlayer animationData={animationPath} reducedMotion={reducedMotion} />;
};

export default AnimationLottie;
