"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        // opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const experiences = [
    {
      company: "LaunchBox Global",
      role: "Full Stack Developer",
      date: "2025 - Present",
      location: "Remote / Hybrid",
      desc: "Leading full stack development initiatives, mentoring junior developers, and implementing scalable architecture across multiple platforms. Responsible for maintaining high coding standards and optimizing performance across web portals and enterprise systems.",
      tech: ["Next.js", "Node.js", "AWS", "MongoDB"]
    },
    {
      company: "AMG Digital Solutions",
      role: "Full Stack Developer",
      date: "2023 - 2025",
      location: "Karachi, Pakistan",
      desc: "Directed the Web Development department, managing complete project lifecycles from planning to deployment. Delivered dynamic websites, internal tools, and client platforms using Next.js and Tailwind CSS.",
      tech: ["React", "Express", "Tailwind", "PostgreSQL"]
    },
    {
      company: "PreMed.pk",
      role: "MERN Stack Developer",
      date: "2023",
      location: "Remote",
      desc: "Enhanced a large-scale medical learning platform serving thousands of students. Built a dynamic blog system using Next.js and Sanity.io and developed advanced admin dashboards.",
      tech: ["MERN", "Sanity.io", "Redux"]
    },
    {
      company: "Info Aid Tech",
      role: "MERN Stack Intern",
      date: "2023",
      location: "Remote",
      desc: "Developed responsive frontend interfaces and integrated REST APIs while optimizing client-side performance.",
      tech: ["React", "CSS3", "REST APIs"]
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and the impact I've made at each stage.
          </p>
        </div>

        <div className="timeline-container relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`timeline-item relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background z-10 top-6" />

                {/* Content */}
                <div className="flex-1 md:w-1/2 ml-6 md:ml-0 p-6 rounded-2xl glass-card border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-secondary-foreground/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
