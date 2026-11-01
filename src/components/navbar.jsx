"use client";

import "../i18n/i18n";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);
  const language = i18n.resolvedLanguage === "fr" ? "fr" : "en";
  const links = [
    { id: "about", label: "about" },
    { id: "research", label: "research" },
    { id: "skills", label: "skills" },
    { id: "experience", label: "experience" },
    { id: "education", label: "education" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event) => {
      if (!navigationRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const navigateToSection = (id) => {
    setIsOpen(false);
    // Keep keyboard focus with the destination when the disclosure closes.
    const section = document.getElementById(id);
    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }
  };

  return (
    <nav className="site-nav" aria-label={t("navbar.navigation")} ref={navigationRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}>
      <div className="nav-bar">
        <Link href="#home" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">t<span>.</span></span>
          <span>Taha Bouiber<span className="brand-dot" aria-hidden="true">.</span></span>
        </Link>
        <div className="nav-controls">
          <div className="language-switch" role="group" aria-label={t("navbar.language")}>
            {["en", "fr"].map((locale) => (
              <button key={locale} type="button" lang={locale}
                aria-label={locale === "en" ? "English" : "Français"}
                aria-pressed={language === locale} onClick={() => i18n.changeLanguage(locale)}>
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
          <button ref={menuButtonRef} type="button" className="menu-toggle"
            aria-expanded={isOpen} aria-controls="primary-navigation"
            aria-label={t(isOpen ? "navbar.closeMenu" : "navbar.openMenu")}
            onClick={() => setIsOpen((open) => !open)}>
            <span className={isOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true">
              <span /><span />
            </span>
          </button>
        </div>
        <ul id="primary-navigation" className={`nav-links${isOpen ? " is-open" : ""}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <Link href={`#${id}`} onClick={() => navigateToSection(id)}>
                {t(`navbar.${label}`)}<span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
