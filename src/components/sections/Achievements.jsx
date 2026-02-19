"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, Medal, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "Winner – CodeJam 2.0",
    id: "01",
    subtitle: "Web Development Category",
    icon: <Trophy className="w-12 h-12 text-yellow-500" />,
    desc: "Achieved first place in an intensive regional hackathon for building a scalable and innovative web solution.",
    color: "from-yellow-500/10 to-transparent"
  },
  {
    title: "Winner – SDS Competition",
    id: "02",
    subtitle: "Web Development Excellence",
    icon: <Medal className="w-12 h-12 text-blue-400" />,
    desc: "Recognized for excellence in modern web technologies and secure architectural design among 100+ participants.",
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Department Topper",
    id: "03",
    subtitle: "Academic Excellence",
    icon: <Award className="w-12 h-12 text-purple-500" />,
    desc: "Awarded a Laptop by the institution for maintaining the highest academic performance and maintaining a 3.4 CGPA.",
    color: "from-purple-500/10 to-transparent"
  }
];

export default function Achievements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Character wavy reveal animation
        const chars = gsap.utils.toArray(".achieve-char");
        gsap.fromTo(chars, 
          { y: "110%" },
          {
            scrollTrigger: {
              trigger: ".achieve-heading-container",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
          }
        );

        // Cards reveal
        gsap.fromTo(".achieve-card", 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".achieve-grid",
              start: "top 85%",
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
            <span className="achieve-char inline-block translate-y-full">
              {char}
            </span>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Standardized Section Header */}
        <div className="achieve-heading-container mb-24 text-center mx-auto max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">
            04. Excellence
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none flex flex-wrap justify-center">
            {renderSplitText("Achievements")}
            <span className="text-muted-foreground">{renderSplitText("& Recognition.")}</span>
          </h3>
        </div>

        <div className="achieve-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="achieve-card group relative p-10 rounded-[2.5rem] border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-700 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -inset-10 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10`} />

              {/* Floating ID */}
              <div className="absolute top-10 right-10 text-5xl font-black text-foreground/[0.05] dark:text-white/[0.03] select-none">
                {item.id}
              </div>

              <div className="relative z-10 space-y-8">
                <div className="p-5 rounded-2xl bg-background border border-border w-fit group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-border/30 pl-4 group-hover:border-primary/30 transition-colors">
                  {item.desc}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  Technical Excellence <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
