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
    "Je m'appelle Taha Bouiber, développeur Fullstack passionné par le développement web, logiciel et mobile. Curieux et autonome, je suis constamment à la recherche de nouvelles technologies à explorer et de défis techniques à relever. J'accorde une grande importance à l'expérience utilisateur, à la qualité du code et à la performance des applications. Actuellement en stage de fin d'études chez ALTEN à Toulouse, je travaille sur le développement Fullstack d'une plateforme web interactive, en intervenant sur le backend (Java, Spring Boot), le frontend (Angular), la base de données (PostgreSQL), ainsi que sur la mise en place de pipelines CI/CD avec Azure DevOps pour l'intégration et le déploiement continus."
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
