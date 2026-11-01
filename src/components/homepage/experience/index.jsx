"use client";

import Image from "next/image";
import { BsCheck2, BsArrowDownRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { experiences } from "/src/utils/data/experience";
import experienceAnimation from "/public/lottie/code.json";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" aria-labelledby="experience-title" className="experience-section my-section">
      <div className="section-header">
        <h2 id="experience-title" className="section-heading">{t("experience.title")}<span className="section-heading-rule" aria-hidden="true" /></h2>
      </div>
      <div className="experience-layout">
        <aside className="experience-aside">
          <p className="support-kicker">{t("experience.eyebrow")}</p>
          <p className="experience-intro">{t("experience.intro")}</p>
          <div className="experience-illustration" aria-hidden="true"><AnimationLottie animationPath={experienceAnimation} /></div>
          <a href="#projects" className="support-text-link">{t("experience.seeProjects")}<BsArrowDownRight aria-hidden="true" /></a>
        </aside>
        <div className="experience-entries">
          {experiences.map((entry) => {
            const Entry = entry.featured ? GlowCard : "article";
            const glowProps = entry.featured ? { identifier: `experience-${entry.id}` } : {};
            return (
              <Entry key={entry.id} {...glowProps} className={`experience-entry${entry.featured ? " experience-entry-featured" : ""}`} aria-labelledby={`experience-${entry.id}-title`}>
                <header className="experience-entry-header">
                  <div className="experience-brand">
                    <div className="experience-logo"><Image src={entry.image} alt={`${entry.employer}`} width={64} height={64} /></div>
                    <div>
                      <p className="support-kicker">{t(entry.location)}</p>
                      <h3 id={`experience-${entry.id}-title`}>{entry.employer}</h3>
                    </div>
                  </div>
                  <p className="experience-dates">{t(entry.duration)}</p>
                </header>
                <p className="experience-position">{t(entry.title)}</p>
                <p className="experience-summary">{t(entry.summary)}</p>
                <ul className="experience-contributions">
                  {entry.contributions.map((key) => <li key={key}><BsCheck2 aria-hidden="true" /><div><h4>{t(`${key}.title`)}</h4><p>{t(`${key}.body`)}</p></div></li>)}
                </ul>
                <ul className="experience-stack" aria-label={t("research.technologies")}>
                  {entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </Entry>
            );
          })}
        </div>
      </div>
    </section>
  );
}
