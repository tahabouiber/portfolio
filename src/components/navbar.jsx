"use client";

import "../i18n/i18n";
// @flow strict
import Link from "next/link";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            TAHA BOUIBER
          </Link>
        </div>

        {/* Menu */}
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link href="/#about" className="block px-4 py-2">
              <div className="text-sm text-white hover:text-pink-600">
                {t("navbar.about")}
              </div>
            </Link>
          </li>

          <li>
            <Link href="/#research" className="block px-4 py-2">
              <div className="text-sm text-white hover:text-pink-600">
                {t("navbar.research")}
              </div>
            </Link>
          </li>

          <li>
            <Link href="/#skills" className="block px-4 py-2">
              <div className="text-sm text-white hover:text-pink-600">
                {t("navbar.skills")}
              </div>
            </Link>
          </li>

          <li>
            <Link href="/#experience" className="block px-4 py-2">
              <div className="text-sm text-white hover:text-pink-600">
                {t("navbar.experience")}
              </div>
            </Link>
          </li>

          <li>
            <Link href="/#education" className="block px-4 py-2">
              <div className="text-sm text-white hover:text-pink-600">
                {t("navbar.education")}
              </div>
            </Link>
          </li>

          <li>
            <Link href="/#projects" className="block px-4 py-2">
              <div className="text-sm text-white hover:text-pink-600">
                {t("navbar.projects")}
              </div>
            </Link>
          </li>


          <li>
            <button
              onClick={toggleLanguage}
              className="ml-3 w-10 h-10 border border-gray-1000 rounded-full transition-transform duration-300 hover:scale-125 flex items-center justify-center overflow-hidden"
            >
              <Flag
                code={i18n.language === "fr" ? "GB" : "FR"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
