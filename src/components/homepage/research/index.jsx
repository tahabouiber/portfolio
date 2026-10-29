"use client";

import Image from "next/image";
import { BsArrowUpRight, BsCheck2, BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { featuredProject } from "/src/utils/data/research";
import development from "/public/lottie/development.json";
import { useTranslation } from "react-i18next";

function Research() {
  const { t } = useTranslation();

  return (
    <section id="research" aria-labelledby="research-title" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="./section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10 pointer-events-none"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span aria-hidden="true" className="w-8 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 id="research-title" className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {t("research.title")}
          </h2>
          <span aria-hidden="true" className="w-8 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <GlowCard identifier={`research-${featuredProject.id}`}>
          <div className="relative p-5 sm:p-8 lg:p-10">
            <Image
              src="./blur-23.svg"
              alt=""
              width={1080}
              height={200}
              className="absolute bottom-0 left-0 opacity-80 pointer-events-none"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="min-w-0 lg:col-span-2">
                <div className="flex items-center gap-3 text-violet-400">
                  <BsPersonWorkspace size={24} aria-hidden="true" />
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider">
                    {t("research.personalProject")}
                  </p>
                </div>
                <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                  {t(featuredProject.title)}
                </h3>
                <p className="mt-2 text-lg sm:text-xl font-medium text-cyan-400">
                  {t(featuredProject.subtitle)}
                </p>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-200">
                  {t(featuredProject.description)}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed">
                      <BsCheck2 className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-l-2 border-violet-500 pl-4 text-sm leading-relaxed text-gray-300">
                  {t(featuredProject.engineering)}
                </p>
              </div>

              <div className="min-w-0 flex flex-col justify-center">
                <div aria-hidden="true" className="mx-auto w-full max-w-[260px] motion-reduce:hidden">
                  <AnimationLottie animationPath={development} />
                </div>
                <h4 className="text-sm font-medium text-violet-400">
                  {t("research.technologies")}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-violet-500/30 bg-[#1a1443] px-3 py-1 text-xs sm:text-sm text-gray-200">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-8 flex flex-col gap-5 border-t border-[#2a2e5a] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-medium text-[#16f2b3]">{t("research.demoStatus")}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">{t("research.demoNotice")}</p>
              </div>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                {t("research.viewDemo")}
                <BsArrowUpRight aria-hidden="true" />
                <span className="sr-only">{t("research.opensNewTab")}</span>
              </a>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

export default Research;
