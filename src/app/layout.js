import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "/src/components/footer";
import Navbar from "/src/components/navbar";
import "/src/css/card.scss";
import "/src/css/globals.scss";
import "/src/css/projects.scss";
import "/src/css/supporting-sections.scss";
import ScrollToTop from "/src/components/helper/scroll-to-top";
import { MotionProvider } from "/src/components/helper/motion-preference";
import CardHoverEffects from "/src/components/helper/card-hover-effects";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Portfolio de Taha Bouiber",
  description:
    "Je m'appelle Taha Bouiber, ingénieur logiciel récemment diplômé, spécialisé en développement full-stack. Je m'intéresse particulièrement à l'ingénierie logicielle, à l'intelligence artificielle et à l'utilisation des modèles de langage pour améliorer les processus de développement logiciel. Curieux et autonome, je développe actuellement des projets orientés recherche et ingénierie, combinant Spring Boot, Angular et des approches basées sur les LLMs. Je suis à la recherche d'opportunités académiques ou professionnelles dans ces domaines."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Add the favicon here */}
        <link rel="icon" href="./favicon.png" />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <MotionProvider>
          <CardHoverEffects />
          <ToastContainer />
          <main className="site-shell">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </MotionProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
