"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function ProjectMedia({ name, images, previewImages, captions = [], className = "" }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const sources = Array.isArray(images) ? images : [images];
  const displaySources = previewImages || sources;
  const selectImage = (direction) => setActive((current) => (current + direction + sources.length) % sources.length);
  const caption = captions[active] ? t(captions[active]) : t("projects.preview");

  return (
    <figure className={`project-media ${className}`} data-card-glow aria-label={t("projects.gallery", { name })}>
      <div className="project-media-viewport">
        <a className="project-image-link" href={sources[active]} target="_blank" rel="noopener noreferrer"
          aria-label={`${t("projects.enlargeImage", { name })} ${t("research.opensNewTab")}`}>
          <Image key={displaySources[active]} src={displaySources[active]} alt={`${name} — ${caption} (${active + 1}/${sources.length})`}
            fill sizes="(min-width: 1024px) 660px, (min-width: 640px) 85vw, 90vw" className="project-image" />
          <span className="project-image-zoom" aria-hidden="true"><BsArrowUpRight /></span>
        </a>
      </div>
      <figcaption className="project-media-caption">
        <span className="project-caption-text" aria-live="polite">{caption}</span>
        {sources.length > 1 && (
          <div className="project-gallery-controls" role="group" aria-label={t("projects.gallery", { name })}>
            <button type="button" onClick={() => selectImage(-1)} aria-label={t("projects.previousImage")}><BsArrowLeft aria-hidden="true" /></button>
            <span className="project-gallery-count">{String(active + 1).padStart(2, "0")}<span> / {String(sources.length).padStart(2, "0")}</span></span>
            <button type="button" onClick={() => selectImage(1)} aria-label={t("projects.nextImage")}><BsArrowRight aria-hidden="true" /></button>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
