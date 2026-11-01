"use client";

import Link from "next/link";
import { BsArrowDownRight, BsArrowUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { personalData } from "/src/utils/data/personal-data";
import { useTranslation } from "react-i18next";

const skills = ["Java", "TypeScript", "Angular", "React", "Python", "MySQL", "PostgreSQL", "Docker", "Azure DevOps", "Git"];

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="home" aria-labelledby="hero-title" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-intro">
          <p className="hero-eyebrow"><span aria-hidden="true" />{t("hero.eyebrow")}</p>
          <h1 id="hero-title" className="hero-title">
            <span>Taha Bouiber<span className="hero-name-dot">.</span></span>
            <span className="hero-role">{t("hero.role")}</span>
          </h1>
          <p className="hero-description">{t("hero.description")}</p>
          <div className="hero-actions">
            <a href={personalData.resume} className="button button-primary" target="_blank" rel="noopener noreferrer">
              {t("personalData.viewResume")}<BsArrowUpRight aria-hidden="true" />
              <span className="sr-only">{t("research.opensNewTab")}</span>
            </a>
            <Link href="#contact" className="button button-secondary">
              {t("hero.contact")}<BsArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-socials" aria-label={t("hero.socialLinks")} role="group">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${t("research.opensNewTab")}`}>
              <BsGithub aria-hidden="true" /><span>GitHub</span>
            </a>
            <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${t("research.opensNewTab")}`}>
              <BsLinkedin aria-hidden="true" /><span>LinkedIn</span>
            </a>
            <span className="social-divider" aria-hidden="true" />
            <a href={personalData.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook ${t("research.opensNewTab")}`}>
              <FaFacebook aria-hidden="true" />
            </a>
            <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" aria-label={`X / Twitter ${t("research.opensNewTab")}`}>
              <FaTwitterSquare aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-editor" data-card-glow aria-label={t("hero.codeIllustration")} role="img">
          <div className="editor-header" aria-hidden="true">
            <div className="editor-dots"><span /><span /><span /></div>
            <span className="editor-filename">engineer.js<span className="editor-tab-dot" /></span>
            <span className="editor-language">JS</span>
          </div>
          <div className="editor-body" aria-hidden="true">
            <p className="editor-comment">{"// "}{t("hero.codeComment")}</p>
            <pre><code><span className="code-keyword">const</span>{" "}<span className="code-object">coder</span>{" = {\n"}
              {"  "}<span className="code-property">name</span>{": "}<span className="code-string">&apos;Taha Bouiber&apos;</span>{",\n"}
              {"  "}<span className="code-property">role</span>{": "}<span className="code-string">&apos;Software Engineer&apos;</span>{",\n"}
              {"  "}<span className="code-property">skills</span>{": [\n"}
              {skills.map((skill, index) => (
                <span key={skill}>{index % 2 === 0 ? "    " : " "}<span className="code-string">&apos;{skill}&apos;</span>{index < skills.length - 1 ? "," : ""}{index % 2 === 1 ? "\n" : ""}</span>
              ))}
              {"  ],\n"}
              {"  "}<span className="code-property">hardWorker</span>{": "}<span className="code-value">true</span>{",\n"}
              {"  "}<span className="code-property">quickLearner</span>{": "}<span className="code-value">true</span>{",\n"}
              {"  "}<span className="code-property">problemSolver</span>{": "}<span className="code-value">true</span>{",\n\n"}
              {"  "}<span className="code-function">hireable</span>{"() {\n"}
              {"    "}<span className="code-keyword">return</span>{" this.hardWorker &&\n"}
              {"           this.problemSolver &&\n"}
              {"           this.skills.length >= "}<span className="code-value">5</span>{";\n"}
              {"  }\n};"}<span className="editor-caret" />
            </code></pre>
          </div>
          <div className="editor-footer" aria-hidden="true">
            <span><span className="editor-status-dot" />{t("hero.codeFooter")}</span><span>UTF-8</span>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <span>{t("hero.disciplines")}</span>
        <Link href="#research">{t("hero.exploreWork")}<BsArrowDownRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}

export default HeroSection;
