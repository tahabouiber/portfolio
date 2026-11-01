"use client";

import { BsArrowUpRight, BsCheck2 } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import ProjectMedia from "./project-media";

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  const name = t(project.name);
  const titleId = `project-title-${project.id}`;
  const links = [
    { href: project.demo, label: "projects.viewDemo" },
    { href: project.code, label: "projects.viewCode" },
  ].filter(({ href }) => typeof href === "string" && /^https?:\/\//i.test(href));

  return (
    <article className="product-row" aria-labelledby={titleId} style={{ "--project-accent": project.accent }}>
      <header className="project-heading">
        <p className="project-kicker"><span>{String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">/</span>{t(project.category)}</p>
        <h3 id={titleId}>{name}</h3>
        <p className="project-role"><span>{t("projects.role")}</span>{t(project.role)}</p>
      </header>
      <ProjectMedia name={name} images={project.images} previewImages={project.previewImages} />
      <div className="project-details">
        <p className="project-description">{t(project.description)}</p>
        <h4 className="project-detail-label">{t("projects.highlights")}</h4>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}><BsCheck2 aria-hidden="true" /><span>{t(highlight)}</span></li>)}
        </ul>
        <ul className="project-technologies" aria-label={t("research.technologies")}>
          {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        {links.length > 0 && (
          <div className="project-links">
            {links.map(({ href, label }) => <a key={label} className="button button-secondary" href={href} target="_blank" rel="noopener noreferrer">{t(label)}<BsArrowUpRight aria-hidden="true" /><span className="sr-only">{t("research.opensNewTab")}</span></a>)}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
