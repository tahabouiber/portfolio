"use client";

import ProjectCard from "./project-card";
import { projectsData } from "/src/utils/data/projects-data";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" aria-labelledby="projects-title" className="project-showcase my-section">
      <div className="section-header">
        <h2 id="projects-title" className="section-heading">{t("projects.title")}<span className="section-heading-rule" aria-hidden="true" /></h2>
        <p className="project-section-intro">{t("projects.intro")}</p>
        <a href="#research" className="featured-project-reference"><span aria-hidden="true">↗</span>{t("projects.discoverFlagship")}</a>
      </div>
      <div className="project-list">
        {projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
