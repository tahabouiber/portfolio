"use client";

import { BsArrowUpRight, BsCheck2 } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import AnimationLottie from "../../helper/animation-lottie";
import ProjectMedia from "../projects/project-media";
import { featuredProject } from "/src/utils/data/research";
import development from "/public/lottie/development.json";

export default function Research() {
  const { t } = useTranslation();
  return (
    <section id="research" aria-labelledby="research-title" className="flagship-section my-section">
      <div className="section-header">
        <h2 id="research-title" className="section-heading">{t("research.title")}<span className="section-heading-rule" aria-hidden="true" /></h2>
      </div>
      <article className="flagship-project" data-card-glow aria-labelledby="kralcash-title">
        <div className="flagship-main">
          <div className="flagship-intro">
            <p className="project-kicker"><span className="flagship-marker" aria-hidden="true" />{t("research.flagship")}</p>
            <h3 id="kralcash-title">{t(featuredProject.title)}<span aria-hidden="true">.</span></h3>
            <p className="flagship-subtitle">{t(featuredProject.subtitle)}</p>
          </div>
          <div className="flagship-details">
            <p className="flagship-description">{t(featuredProject.description)}</p>
            <p className="project-detail-label">{t("research.technologies")}</p>
            <ul className="project-technologies" aria-label={t("research.technologies")}>
              {featuredProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
          <div className="flagship-visual">
            <ProjectMedia name={t(featuredProject.title)} images={featuredProject.images} captions={featuredProject.captions} className="flagship-gallery" />
            <p className="flagship-image-note">{t("research.previewNotice")}</p>
          </div>
        </div>
        <div className="flagship-capabilities">
          <h4 className="project-detail-label">{t("research.capabilities")}</h4>
          <ul>
            {featuredProject.features.map((feature) => <li key={feature}><BsCheck2 aria-hidden="true" /><span>{t(feature)}</span></li>)}
          </ul>
        </div>
        <div className="flagship-engineering">
          <div>
            <h4 className="project-detail-label">{t("research.engineeringLabel")}</h4>
            <p>{t(featuredProject.engineering)}</p>
            <p className="flagship-pipeline" aria-label={t("research.architecture")}>Angular <span aria-hidden="true">→</span> REST API <span aria-hidden="true">→</span> Spring Boot <span aria-hidden="true">→</span> PostgreSQL</p>
          </div>
          <div className="flagship-ownership">
            <div className="flagship-lottie" aria-hidden="true"><AnimationLottie animationPath={development} /></div>
            <p>{t("research.personalProject")}</p>
          </div>
        </div>
        <div className="flagship-footer">
          <div>
            <p className="flagship-demo-status"><span aria-hidden="true" />{t("research.demoStatus")}</p>
            <p className="flagship-demo-notice">{t("research.demoNotice")}</p>
          </div>
          <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="button button-primary">
            {t("research.viewDemo")}<BsArrowUpRight aria-hidden="true" /><span className="sr-only">{t("research.opensNewTab")}</span>
          </a>
        </div>
      </article>
    </section>
  );
}
