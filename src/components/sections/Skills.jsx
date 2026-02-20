"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import { 
  Code2, Server, Globe, Settings, Users, Layout, 
  Terminal, Cpu, Sparkles, BrainCircuit
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: "Languages",
    icon: <Code2 className="w-8 h-8" />,
    skills: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" }
    ],
    size: "lg:col-span-1",
    bg: "from-yellow-500/10 to-transparent",
  },
  {
    name: "Frontend Engineering",
    icon: <Layout className="w-8 h-8" />,
    skills: [
      { name: "React.js", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "white" },
      { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
      { name: "Shadcn", slug: "shadcnui", color: "white" },
      { name: "Ant Design", slug: "antdesign", color: "0170FE" },
      { name: "DaisyUI", slug: "daisyui", color: "5AD7E4" },
      { name: "MUI", slug: "mui", color: "007FFF" },
      { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" }
    ],
    size: "lg:col-span-2",
    bg: "from-blue-500/10 to-transparent",
  },
  {
    name: "Architectural Backend",
    icon: <Server className="w-8 h-8" />,
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Express", slug: "express", color: "white" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Redis", slug: "redis", color: "DC382D" },
      { name: "Firebase", slug: "firebase", color: "FFCA28" },
      { name: "Socket.io", slug: "socketdotio", color: "white" }
    ],
    size: "lg:col-span-2",
    bg: "from-emerald-500/10 to-transparent",
  },
  {
    name: "Intelligent Systems",
    icon: <BrainCircuit className="w-8 h-8" />,
    skills: [
      { name: "OpenAI", slug: "openai", color: "white" },
      { name: "Gemini", slug: "google-gemini", color: "8E75E2" },
      { name: "LLM Apps", slug: "langchain", color: "1C3C3C" }
    ],
    size: "lg:col-span-1",
    bg: "from-purple-500/10 to-transparent",
  },
  {
    name: "Cloud & Platform",
    icon: <Globe className="w-8 h-8" />,
    skills: [
      { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
      { name: "GCP", slug: "googlecloud", color: "4285F4" },
      { name: "Maps API", slug: "googlemaps", color: "4285F4" },
      { name: "Vercel", slug: "vercel", color: "white" }
    ],
    size: "lg:col-span-1",
    bg: "from-orange-500/10 to-transparent",
  },
  {
    name: "Dev Ecosystem",
    icon: <Terminal className="w-8 h-8" />,
    skills: [
      { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
      { name: "Git", slug: "git", color: "F05032" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Postman", slug: "postman", color: "FF6C37" }
    ],
    size: "lg:col-span-1",
    bg: "from-blue-600/10 to-transparent",
  },
  {
    name: "Management",
    icon: <Settings className="w-8 h-8" />,
    skills: [
      { name: "Jira", slug: "jira", color: "0052CC" },
      { name: "Trello", slug: "trello", color: "0052CC" },
      { name: "Nifty", slug: "rocket", color: "FF3366" },
      { name: "Agile", slug: "scrumalliance", color: "512D6D" }
    ],
    size: "lg:col-span-1",
    bg: "from-pink-500/10 to-transparent",
  }
];

export default function Skills() {
  const containerRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".bento-card", 
          { y: 80, opacity: 0, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: ".skills-grid",
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          }
        );

        const cards = document.querySelectorAll(".bento-card");
        cards.forEach((card) => {
          card.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            gsap.to(card, {
              rotateY: x * 8,
              rotateX: -y * 8,
              duration: 0.4,
              ease: "power2.out",
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power2.out" });
          });
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
            <span className="skills-char inline-block translate-y-full">{char}</span>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section id="skills" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="skills-heading-container mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">
            04. Expertise
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.75]">
            <div className="block">{renderSplitText("Technical")}</div>
            <div className="block text-muted-foreground">{renderSplitText("Architecture.")}</div>
          </h3>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`bento-card group relative p-8 rounded-[3rem] border border-border bg-card/40 backdrop-blur-xl overflow-hidden transition-all duration-500 ${category.size}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute -inset-20 bg-gradient-to-br ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10`} />

              <div className="relative z-10 flex flex-col h-full justify-between gap-10" style={{ transform: "translateZ(30px)" }}>
                <div className="space-y-5">
                  <div className="p-3 rounded-2xl bg-background border border-border group-hover:border-primary/30 transition-all duration-500 text-primary w-fit shadow-lg">
                    {category.icon}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">{category.name}</h4>
                </div>

                <div className="flex flex-wrap gap-5">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex flex-col items-center gap-2 group/icon"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-background border border-border group-hover/icon:border-primary/40 transition-all duration-500 shadow-sm">
                        {mounted && (
                          <img 
                            src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color === "white" ? (resolvedTheme === "dark" ? "ffffff" : "000000") : skill.color}`} 
                            alt={skill.name}
                            className="w-7 h-7 md:w-8 md:h-8 object-contain"
                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=random&color=fff`; }}
                          />
                        )}
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover/icon:opacity-100 transition-all">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 text-8xl font-black text-foreground/[0.02] select-none pointer-events-none transition-colors duration-700">
                0{idx + 1}
              </div>
            </div>
          ))}

          <div className="bento-card lg:col-span-3 p-10 rounded-[3.5rem] bg-foreground text-background relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-2xl text-center md:text-left">
               <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(109,40,217,0.4)]">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">Engineering Scale</h4>
               </div>
               <p className="text-lg md:text-xl font-bold opacity-70 leading-relaxed">
                 Architecting high-performance digital ecosystems with enterprise-grade security and seamless LLM integrations.
               </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-8">
               {[
                 { label: "Logic", val: "Clean" },
                 { label: "Stack", val: "Modern" },
                 { label: "Security", val: "Hardened" }
               ].map((item, i) => (
                 <div key={i} className="text-center md:text-right">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-1">{item.label}</p>
                    <p className="text-xl font-black uppercase text-primary tracking-tighter">{item.val}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
