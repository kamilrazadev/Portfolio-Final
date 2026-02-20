"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate characters
      const chars = document.querySelectorAll(".pixel-char");
      
      gsap.from(chars, {
        opacity: 0,
        scale: 2,
        filter: "blur(15px)",
        x: () => Math.random() * 160 - 80,
        y: () => Math.random() * 160 - 80,
        duration: 1,
        stagger: {
          amount: 0.6,
          from: "random"
        },
        ease: "power4.out",
      });

      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const namePart1 = "MUHAMMAD";
  const namePart2 = "KAMIL RAZA";

  const renderChars = (text) => {
    return text.split("").map((char, i) => (
      <span 
        key={i} 
        className="pixel-char inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_50%)] blur-[120px] opacity-10 dark:opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center -mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="hero-reveal inline-block px-4 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Available for New Opportunities
          </div>
          
          <h1 className="flex flex-col items-center leading-[0.85] mb-8">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase block">
              {renderChars(namePart1)}
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase block text-primary">
              {renderChars(namePart2)}
            </span>
          </h1>
          
          <div className="hero-reveal space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
              Full Stack Architect specializing in <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Scalable MERN Ecosystems</span> & Secure Backend Engineering.
            </p>
          </div>
          
          <div className="hero-reveal flex flex-wrap justify-center gap-4 mt-10">
            <a 
              href="#projects" 
              className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:scale-105 transition-all shadow-2xl"
            >
              Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/docs/cv.pdf" 
              download="M Kamil Raza - Full Stack Developer.pdf"
              className="flex items-center gap-3 px-8 py-4 border border-border rounded-full font-bold text-base hover:bg-muted transition-all"
            >
              Resume <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Refined Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.6em] font-bold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
}
