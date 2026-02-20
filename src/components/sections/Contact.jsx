"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const chars = gsap.utils.toArray(".contact-char");
        gsap.fromTo(chars, 
          { y: "110%" },
          {
            scrollTrigger: {
              trigger: ".contact-heading-container",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
          }
        );

        gsap.fromTo(".contact-card", { y: 100, opacity: 0 }, {
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
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
            <span className="contact-char inline-block translate-y-full">{char}</span>
          </span>
        ))}
      </span>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        alert("Message received. Architecture analysis in progress...");
        setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="contact-heading-container mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">07. Connection</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.75]">
                <div className="block">{renderSplitText("Start a")}</div>
                <div className="block text-muted-foreground">{renderSplitText("Conversation.")}</div>
            </h3>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
          
          {/* Left: Experimental Interaction Card */}
          <div className="contact-card lg:col-span-5 relative group">
            <div className="h-full p-12 rounded-[3rem] bg-foreground text-background overflow-hidden relative flex flex-col justify-between">
               {/* Background Texture */}
               <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
               
               <div className="space-y-12 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-2xl">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter leading-tight">
                    Got a project? <br /> Let's <span className="text-primary">Collaborate</span>
                  </h4>
                  <div className="space-y-6 pt-10 border-t border-background/10">
                    <div className="flex items-center gap-6">
                       <Mail className="w-6 h-6 text-primary" />
                       <span className="text-lg font-bold tracking-tight">kamilraza@devaveglobal.com</span>
                    </div>
                    <div className="flex items-center gap-6">
                       <Phone className="w-6 h-6 text-primary" />
                       <span className="text-lg font-bold tracking-tight">+92 319 699 5115</span>
                    </div>
                  </div>
               </div>

               <div className="flex gap-4 pt-12 relative z-10">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/kamilrazadev" },
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/kamilrazadev" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-14 h-14 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500">
                      {social.icon}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: The Architectural Form */}
          <div className="contact-card lg:col-span-7">
            <div className="h-full p-8 md:p-12 rounded-[3rem] border border-border bg-muted/20 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full px-8 py-5 rounded-2xl bg-background border border-border/50 focus:border-primary transition-all outline-none font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Email</label>
                      <input 
                        type="email" 
                        placeholder="hello@example.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full px-8 py-5 rounded-2xl bg-background border border-border/50 focus:border-primary transition-all outline-none font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell me about your vision..."
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full px-8 py-6 rounded-[2rem] bg-background border border-border/50 focus:border-primary transition-all outline-none font-bold resize-none"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:shadow-[0_20px_50px_rgba(109,40,217,0.3)] hover:-translate-y-1 transition-all duration-500 disabled:opacity-50"
                  >
                    {isSubmitting ? "Syncing..." : "Transmit Message"}
                    <Send className="w-5 h-5" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
