import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* ... previous content ... */}
      
      {/* Sections */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Achievements />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
