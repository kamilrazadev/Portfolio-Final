"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, ArrowUp, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-column", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-background border-t border-border pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: CTA */}
        <div className="footer-column flex flex-col md:flex-row justify-between items-center gap-12 pb-24 border-b border-border/50">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Ready to <span className="text-primary">Scale?</span>
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl font-medium uppercase tracking-widest opacity-60">
              Let's build the next generation of digital excellence together.
            </p>
          </div>
          <a 
            href="#contact" 
            className="group flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
          >
            Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Middle Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-24">
          <div className="footer-column space-y-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-black text-2xl group-hover:scale-110 transition-transform">
                K
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">
                Kamil <span className="opacity-40 font-medium">Raza</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Architecting secure, high-performance digital platforms with a focus on MERN Stack scalability and enterprise-grade security.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10">Navigation</h4>
            <ul className="space-y-4">
              {["About", "Experience", "Projects", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors inline-block group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10">Services</h4>
            <ul className="space-y-4">
              {[
                "Full Stack MERN",
                "Scalable Architecture",
                "Secure Backend",
                "Performance Audit"
              ].map((item) => (
                <li key={item} className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column space-y-10">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Socials</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/kamilraza" },
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/kamilraza" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:mkamilraza@outlook.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              Based in Karachi, Pakistan <br /> Available Worldwide
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-column pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            © {currentYear} Muhammad Kamil Raza. Built for performance.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
