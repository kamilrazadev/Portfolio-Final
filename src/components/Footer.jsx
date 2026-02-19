import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-accent/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                K
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Kamil <span className="text-primary">Raza</span>
              </span>
            </a>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              A forward-thinking Full Stack MERN Developer building secure, high-performance digital platforms that scale with confidence. Specializing in React, Next.js, and secure backend architectures.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/kamilraza" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-sm border border-border/50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/kamilraza" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-sm border border-border/50">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:mkamilraza@outlook.com" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-sm border border-border/50">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" /> Navigation
            </h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">About & Expertise</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">Professional Experience</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">Featured Projects</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">AI-EO FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> Services
            </h4>
            <ul className="space-y-4">
              <li><span className="text-muted-foreground">Full Stack MERN Development</span></li>
              <li><span className="text-muted-foreground">Scalable Architecture Design</span></li>
              <li><span className="text-muted-foreground">Secure Backend Implementation</span></li>
              <li><span className="text-muted-foreground">Performance Optimization</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} Muhammad Kamil Raza. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <a 
            href="#" 
            className="p-3 rounded-full bg-primary text-white hover:scale-110 hover:shadow-lg transition-all group active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
