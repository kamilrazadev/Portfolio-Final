"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Squibd",
    category: "Employment Verification",
    desc: "Enterprise-grade verification platform with AES-256 encryption, role-based access control, and batch processing for secure employment history validation.",
    tech: ["Next.js", "Node.js", "AES-256", "MongoDB"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Skylaboo",
    category: "E-commerce",
    desc: "Full-featured e-commerce application with Stripe payment integration, scalable product architecture, and SendGrid email automation.",
    tech: ["Next.js", "Stripe", "SendGrid", "Tailwind"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    title: "SOL Money Transfer",
    category: "Fintech",
    desc: "Multilingual fintech platform with secure user and admin dashboards, focusing on cross-border transactions and compliance.",
    tech: ["React", "Fintech APIs", "Dashboard", "i18n"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    title: "ExamHub",
    category: "Healthcare",
    desc: "Real-time location-based hospital and doctor search platform using Google Maps API for immediate healthcare access.",
    tech: ["Google Maps API", "React", "Geolocation"],
    link: "#",
    github: "#",
    featured: false
  }
];

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use to instead of from to avoid elements being invisible initially
      gsap.set(".project-card", { y: 30, opacity: 0 });
      
      gsap.to(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A collection of high-impact applications solving real-world problems in fintech, healthcare, and enterprise security.
            </p>
          </div>
          <a href="https://github.com/kamilraza" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            View GitHub <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`project-card group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 min-h-[420px] flex flex-col justify-end p-8 md:p-10 ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="relative z-20 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-primary transition-all hover:scale-110 text-white border border-white/10">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-primary transition-all hover:scale-110 text-white border border-white/10">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
