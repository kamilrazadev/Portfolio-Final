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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "kamilrazadev | Muhammad Kamil Raza Portfolio",
            "description": "Professional portfolio of kamilrazadev, a results-driven Full Stack Developer specializing in MERN Stack and Scalable Web Architecture.",
            "mainEntity": {
              "@type": "Person",
              "name": "Muhammad Kamil Raza",
              "alternateName": "kamilrazadev"
            }
          })
        }}
      />
      
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
