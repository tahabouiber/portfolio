"use client";

import { BsArrowUpRight, BsGithub, BsLinkedin, BsTelephone, BsGeoAlt } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { personalData } from "/src/utils/data/personal-data";

export default function ContactSection() {
  const { t } = useTranslation();
  const socials = [
    { name: "GitHub", href: personalData.github, Icon: BsGithub },
    { name: "LinkedIn", href: personalData.linkedIn, Icon: BsLinkedin },
    { name: "Facebook", href: personalData.facebook, Icon: FaFacebook },
    { name: "X / Twitter", href: personalData.twitter, Icon: FaXTwitter },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-section my-section">
      <div className="section-header"><h2 id="contact-title" className="section-heading">{t("navbar.contact")}<span className="section-heading-rule" aria-hidden="true" /></h2></div>
      <div className="contact-layout">
        <div className="contact-invitation">
          <p className="support-kicker">{t("contact.eyebrow")}</p>
          <h3>{t("contact.headline")}<span aria-hidden="true">.</span></h3>
          <p className="contact-description">{t("contact.description")}</p>
          <p className="contact-email-label">{t("contact.email")}</p>
          <a className="contact-email" href={`mailto:${personalData.email}`}>{personalData.email}<BsArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="contact-connections">
          <dl className="contact-details">
            <div><dt><BsTelephone aria-hidden="true" />{t("contact.phone")}</dt><dd><a href={`tel:${personalData.phone.replace(/[^+\d]/g, "")}`}>{personalData.phone}</a></dd></div>
            <div><dt><BsGeoAlt aria-hidden="true" />{t("contact.location")}</dt><dd>{personalData.address.trim()}</dd></div>
          </dl>
          <h4 className="support-kicker">{t("contact.profiles")}</h4>
          <ul className="contact-socials">
            {socials.map(({ name, href, Icon }) => <li key={name}><a href={href} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /><span>{name}</span><BsArrowUpRight aria-hidden="true" /><span className="sr-only">{t("research.opensNewTab")}</span></a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
