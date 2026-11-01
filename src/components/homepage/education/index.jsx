"use client";

import { useTranslation } from "react-i18next";
import { educations } from "/src/utils/data/educations";
import AnimationLottie from "../../helper/animation-lottie";
import studyAnimation from "/public/lottie/study.json";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" aria-labelledby="education-title" className="education-section my-section">
      <div className="section-header"><h2 id="education-title" className="section-heading">{t("education.title")}<span className="section-heading-rule" aria-hidden="true" /></h2></div>
      <div className="education-layout">
        <ol className="education-list">
          {educations.map((entry) => (
            <li key={entry.id}>
              <article className="education-entry" aria-labelledby={`education-${entry.id}-title`}>
                <p className="education-dates">{entry.duration}</p>
                <div>
                  <p className="support-kicker">{t(entry.location)}</p>
                  <h3 id={`education-${entry.id}-title`}>{entry.name}</h3>
                  <p className="education-degree">{t(entry.title)}</p>
                  <p className="education-description">{t(entry.description)}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
        <aside className="education-aside">
          <div className="education-illustration" aria-hidden="true"><AnimationLottie animationPath={studyAnimation} /></div>
          <p className="support-kicker">{t("education.illustrationCaption")}</p>
        </aside>
      </div>
    </section>
  );
}
