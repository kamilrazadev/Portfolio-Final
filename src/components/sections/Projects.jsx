"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Globe, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Squibd",
    category: "Security & Verification",
    desc: "Enterprise-grade verification platform with AES-256 encryption, role-based access control, and batch processing.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    stats: { users: "5k+", uptime: "99.9%" }
  },
  {
    title: "Skylaboo",
    category: "Fintech E-commerce",
    desc: "Full-featured e-commerce application with Stripe payment integration and scalable product architecture.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
    github: "#",
    stats: { sales: "10k+", speed: "<1s" }
  },
  {
    title: "SOL Money",
    category: "Fintech Platform",
    desc: "Multilingual fintech platform with secure dashboards, focusing on cross-border transactions.",
    tech: ["React", "i18n", "Node.js"],
    link: "#",
    github: "#",
    stats: { regions: "12+", security: "Bank-lvl" }
  }
];

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Character wavy reveal animation
        const chars = gsap.utils.toArray(".proj-char");
        gsap.fromTo(chars, 
          { y: "110%" },
          {
            scrollTrigger: {
              trigger: ".proj-heading-container",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
          }
        );

        // Content reveal
        const sections = gsap.utils.toArray(".proj-reveal-section");
        sections.forEach((section) => {
          gsap.fromTo(section.querySelector(".proj-content-inner"), 
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out"
            }
          );
        });
      }, containerRef);

      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const renderSplitText = (text) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
        {word.split("").map((char, j) => (
          <span key={j} className="inline-block overflow-hidden leading-[1.1] translate-y-[0.1em]">
            <span className="proj-char inline-block translate-y-full">
              {char}
            </span>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section id="projects" ref={containerRef} className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        
        {/* Standardized Section Header */}
        <div className="proj-heading-container mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">
            03. Selection of Work
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none flex flex-wrap">
            {renderSplitText("Featured")}
            <span className="text-muted-foreground">{renderSplitText("Case Studies.")}</span>
          </h3>
        </div>

        {/* Improved Responsive Grid Showcase */}
        <div className="space-y-24 md:space-y-40">
          {projects.map((project, idx) => (
            <div key={idx} className="proj-reveal-section group relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                
                {/* Visual Column */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-muted/30 border border-border/50 group-hover:border-primary/40 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 text-6xl md:text-8xl font-black text-foreground/5 select-none">
                    0{idx + 1}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                     <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-2xl flex items-center justify-center group-hover:rotate-2 transition-transform duration-700">
                        <div className="text-center space-y-4">
                           <h4 className="text-2xl md:text-3xl font-black uppercase tracking-widest opacity-20">{project.title}</h4>
                           <Plus className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary" />
                        </div>
                     </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="proj-content-inner space-y-6 md:space-y-10 lg:pt-10">
                  <div className="space-y-4">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
                      {project.category}
                    </span>
                    <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-muted border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-8 py-6 border-y border-border/50">
                    {Object.entries(project.stats).map(([key, val], i) => (
                      <div key={i}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{key}</p>
                        <p className="text-xl md:text-2xl font-black text-primary">{val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 md:gap-8 pt-4">
                    <a href={project.github} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors group/link">
                      <Github className="w-5 h-5" /> Code
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors group/link">
                      <Globe className="w-5 h-5" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
