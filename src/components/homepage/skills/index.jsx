"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { skillsData, skillGroups } from "/src/utils/data/skills";
import { skillsImage } from "/src/utils/skill-image";
import { useMotionPreference } from "../../helper/motion-preference";

export default function Skills() {
  const { t } = useTranslation();
  const { reducedMotion } = useMotionPreference();
  return (
    <section id="skills" aria-labelledby="skills-title" className="skills-section my-section">
      <div className="section-header">
        <h2 id="skills-title" className="section-heading">{t("skills.title")}<span className="section-heading-rule" aria-hidden="true" /></h2>
        <p className="support-section-intro">{t("skills.intro")}</p>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <section key={group.id} className="skill-group" aria-labelledby={`skill-group-${group.id}`}>
            <div className="skill-group-heading">
              <span className="skill-group-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 id={`skill-group-${group.id}`}>{t(`skills.groups.${group.id}.title`)}</h3><p>{t(`skills.groups.${group.id}.description`)}</p></div>
            </div>
            <ul className="skill-group-technologies">
              {group.skills.map((skill) => <li key={skill} data-skill={skill} data-card-glow><Image src={skillsImage(skill)?.src} alt="" aria-hidden="true" width={22} height={22} /><span>{skill === "Javascript" ? "JavaScript" : skill}</span></li>)}
            </ul>
          </section>
        ))}
      </div>
      <div className="skills-ticker" aria-hidden="true">
        <Marquee gradient={false} speed={32} pauseOnHover pauseOnClick play={reducedMotion === false}>
          {skillsData.map((skill) => <span className="skills-ticker-item" key={skill}>{skill === "Javascript" ? "JavaScript" : skill}<span> / </span></span>)}
        </Marquee>
      </div>
    </section>
  );
}
