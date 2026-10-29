import AboutSection from "../components/homepage/about";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import Experience from "../components/homepage/experience";
import HeroSection from "../components/homepage/hero-section";
import Projects from "../components/homepage/projects";
import Research from "../components/homepage/research";
import Skills from "../components/homepage/skills";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Research />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ContactSection />
    </div>
  );
}
