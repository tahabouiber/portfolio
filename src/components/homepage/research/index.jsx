"use client";

import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { researches } from "/src/utils/data/research";
import research from "/public/lottie/development.json";
import { useTranslation } from "react-i18next";



function Research() {
  const { t } = useTranslation();
  return (
    <div id="research" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="./section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {t("research.title")}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          

          <div>
            <div className="flex flex-col gap-6">
              {
                researches.map(research => (
                  <GlowCard key={research.id} identifier={`research-${research.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="./blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 pointer-events-none"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {t(research.duration)}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={56} />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-8 px-5 py-1">
                            <div>
                              <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                {t(research.title)}
                              </p>
                            </div>
                          </div>

                          <p className="mt-4">
                            <span className="text-cyan-400">{' ' + t(research.description)}</span>
                          </p>

                          {research.link && (
                            <div className="mt-4 px-5">
                              <a
                                href={research.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-[#0f172a] transition hover:bg-cyan-400"
                              >
                                {t("research.seeProject")}
                              </a>
                            </div>
                          )}
                          
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>

          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={research} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Research;