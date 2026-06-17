import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import TechArsenal from "@/components/sections/TechArsenal";
import Stats from "@/components/sections/Stats";
import Research from "@/components/sections/Research";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <TechArsenal />
      <Stats />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
