import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Muhammad Kamil Raza?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Kamil Raza is a Full Stack MERN Developer specializing in scalable web applications, secure backend systems, and modern React-based frontend architectures."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies does he specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "He specializes in the MERN Stack (MongoDB, Express, React, Node.js), Next.js, Tailwind CSS, Stripe integrations, AWS deployment, and secure architecture design."
                }
              }
            ]
          })
        }}
      />
      
      {/* Sections */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Achievements />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
