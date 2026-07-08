import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "/src/components/footer";
import Navbar from "/src/components/navbar";
import "/src/css/card.scss";
import "/src/css/globals.scss";
import ScrollToTop from "/src/components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Taha Bouiber",
  description:
    "Je m'appelle Taha Bouiber, ingénieur logiciel récemment diplômé, spécialisé en développement full-stack. Je m'intéresse particulièrement à l'ingénierie logicielle, à l'intelligence artificielle et à l'utilisation des modèles de langage pour améliorer les processus de développement logiciel. Curieux et autonome, je développe actuellement des projets orientés recherche et ingénierie, combinant Spring Boot, Angular et des approches basées sur les LLMs. Je suis à la recherche d'opportunités académiques ou professionnelles dans ces domaines."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon here */}
        <link rel="icon" href="./favicon.png" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
