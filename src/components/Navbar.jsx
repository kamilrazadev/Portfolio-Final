"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#about" }, // Same section
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-4 left-0 right-0 z-[100] flex justify-center transition-all duration-500",
      isScrolled ? "top-4" : "top-6"
    )}>
      <div className={cn(
        "flex items-center justify-between p-2 rounded-full border transition-all duration-500 mx-4 w-fit min-w-[320px] md:min-w-[700px]",
        isScrolled 
          ? "bg-background/70 backdrop-blur-xl border-white/10 shadow-lg dark:shadow-purple-900/5 ring-1 ring-white/5" 
          : "bg-background/30 backdrop-blur-md border-white/5 shadow-sm"
      )}>
                  {/* Logo */}
                  <a href="#" className="flex items-center gap-2 group px-4">
                    <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background font-black text-xl group-hover:scale-110 transition-transform">
                      K
                    </div>
                    <span className="font-black text-xl tracking-tighter hidden sm:block uppercase">
                      Kamil <span className="opacity-50 font-medium">Raza</span>
                    </span>
                  </a>
        
                  {/* Desktop Nav */}
                  <div className="hidden md:flex items-center gap-8 px-8">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href}
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
        
                  {/* CTA Button */}
                  <div className="flex items-center gap-2 pr-2">
                    <ThemeToggle />
                    <a 
                      href="#contact" 
                      className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                      Contact <ArrowRight className="w-4 h-4" />
                    </a>
                    {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-3 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[-1] bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-10 py-4 rounded-full bg-primary text-white text-xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
