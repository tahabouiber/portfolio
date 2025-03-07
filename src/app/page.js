import AboutSection from "../components/homepage/about";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import Experience from "../components/homepage/experience";
import HeroSection from "../components/homepage/hero-section";
import Projects from "../components/homepage/projects";
import Skills from "../components/homepage/skills";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <ContactSection />
    </div>
  );
}
