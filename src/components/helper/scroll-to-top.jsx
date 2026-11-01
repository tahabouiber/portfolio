"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useMotionPreference } from "./motion-preference";

const ScrollToTop = () => {
  const { t } = useTranslation();
  const { reducedMotion } = useMotionPreference();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return visible ? (
    <button type="button" className="scroll-to-top" onClick={scrollToTop} aria-label={t("navbar.backToTop")}>
      <FaArrowUp aria-hidden="true" />
    </button>
  ) : null;
};

export default ScrollToTop;
