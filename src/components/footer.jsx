"use client";

import { BsArrowUpRight, BsArrowUp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { personalData } from "/src/utils/data/personal-data";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {t("footer.developedBy")} <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">Taha Bouiber<span className="sr-only"> {t("research.opensNewTab")}</span></a></p>
        <nav aria-label={t("footer.navigation")}>
          <a href={personalData.github} target="_blank" rel="noopener noreferrer">GitHub<BsArrowUpRight aria-hidden="true" /><span className="sr-only">{t("research.opensNewTab")}</span></a>
          <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn<BsArrowUpRight aria-hidden="true" /><span className="sr-only">{t("research.opensNewTab")}</span></a>
          <a href="#home">{t("navbar.backToTop")}<BsArrowUp aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}
