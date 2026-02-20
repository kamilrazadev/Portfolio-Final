"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Character wavy reveal animation
        const chars = gsap.utils.toArray(".exp-char");
        gsap.fromTo(chars, 
          { y: "110%" },
          {
            scrollTrigger: {
              trigger: ".exp-heading-container",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
          }
        );

        // Experience blocks staggered reveal
        gsap.fromTo(".exp-block", 
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".exp-list",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
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
            <span className="exp-char inline-block translate-y-full">
              {char}
            </span>
          </span>
        ))}
      </span>
    ));
  };

  const experiences = [
    {
      company: "LaunchBox Global",
      role: "Full Stack Developer",
      date: "2025 - Present",
      location: "Remote / Hybrid",
      desc: "Leading full stack development initiatives and implementing scalable architecture across multiple platforms.",
      tech: ["Next.js", "Node.js", "AWS", "MongoDB"]
    },
    {
      company: "AMG Digital Solutions",
      role: "Full Stack Developer",
      date: "2023 - 2025",
      location: "Karachi, Pakistan",
      desc: "Directed the Web Development department, managing complete project lifecycles. Delivered dynamic websites and client platforms.",
      tech: ["React", "Express", "Tailwind", "PostgreSQL"]
    },
    {
      company: "PreMed.pk",
      role: "MERN Stack Developer",
      date: "2023",
      location: "Remote",
      desc: "Enhanced a large-scale medical learning platform. Built a dynamic blog system and advanced admin dashboards.",
      tech: ["MERN", "Sanity.io", "Redux"]
    },
    {
      company: "Info Aid Tech",
      role: "MERN Stack Intern",
      date: "2023",
      location: "Remote",
      desc: "Developed responsive frontend interfaces and integrated REST APIs while optimizing performance.",
      tech: ["React", "CSS3", "REST APIs"]
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="exp-heading-container mb-20 max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">
            02. My Journey
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.75]">
            <div className="block">{renderSplitText("Professional")}</div>
            <div className="block text-muted-foreground">{renderSplitText("Experience.")}</div>
          </h3>
        </div>

        <div className="exp-list space-y-24 md:space-y-32 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-block group">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                
                <div className="md:w-1/4">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-5xl md:text-7xl font-black text-foreground/10 dark:text-border/40 group-hover:text-primary/20 transition-colors duration-500 leading-none">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {exp.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {exp.company}
                    </h4>
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500 inline-flex items-center gap-4">
                      {exp.role} <ArrowRight className="w-6 h-6 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl border-l-2 border-border/30 pl-6 group-hover:border-primary/30 transition-colors duration-500">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border group-hover:border-primary/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
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
