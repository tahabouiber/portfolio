"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { personalData } from "/src/utils/data/personal-data";

export default function AboutSection() {
  const { t } = useTranslation();
  const paragraphs = t("personalData.paragraphs", { returnObjects: true });
  return (
    <section id="about" aria-labelledby="about-title" className="about-section my-section">
      <div className="section-header"><h2 id="about-title" className="section-heading">{t("personalData.whoami")}<span className="section-heading-rule" aria-hidden="true" /></h2></div>
      <div className="about-layout">
        <div className="about-copy">
          <p className="support-kicker">{t("personalData.aboutLabel")}</p>
          {paragraphs.map((paragraph, index) => <p key={index} className={index === 0 ? "about-lead" : "about-paragraph"}>{paragraph}</p>)}
          <a className="support-text-link" href={personalData.resume} target="_blank" rel="noopener noreferrer">{t("personalData.viewResume")}<BsArrowUpRight aria-hidden="true" /><span className="sr-only">{t("research.opensNewTab")}</span></a>
        </div>
        <figure className="about-profile">
          <div className="about-photo" data-card-glow><Image src={personalData.profile} width={2634} height={3511} sizes="(min-width: 768px) 280px, 220px" alt="Taha Bouiber" /></div>
          <figcaption><span>Taha Bouiber</span><span>{t("hero.role")}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
