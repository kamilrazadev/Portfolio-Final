"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
      
      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="hero-text inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4">
            🚀 Full Stack MERN Developer
          </div>
          
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight">
            Muhammad Kamil <span className="text-primary">Raza</span>
          </h1>
          
          <h2 className="hero-text text-2xl md:text-3xl font-medium text-muted-foreground">
            Building secure, high-performance digital platforms that <span className="text-accent">scale with confidence</span>.
          </h2>
          
          <p className="hero-text text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I design and develop modern, scalable web applications using the MERN Stack, with a strong focus on performance, security, and clean architecture.
          </p>
          
          <div className="hero-buttons flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-full overflow-hidden transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-full hover:bg-secondary/50 transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Download CV <Download className="w-4 h-4" />
              </span>
            </a>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-transparent border border-transparent hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-2">
                Hire Me <Mail className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
