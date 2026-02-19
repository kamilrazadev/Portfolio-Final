"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        // opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your message has been sent.");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-primary" />, label: "Email", value: "mkamilraza@outlook.com", link: "mailto:mkamilraza@outlook.com" },
    { icon: <Phone className="w-5 h-5 text-accent" />, label: "Phone", value: "+92 342 2780709", link: "tel:+923422780709" },
    { icon: <MapPin className="w-5 h-5 text-purple-500" />, label: "Location", value: "Karachi, Pakistan", link: "#" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "https://linkedin.com/in/kamilraza" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "https://github.com/kamilraza" },
  ];

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="contact-content space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something <span className="text-primary">Exceptional</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                I am open to new challenges, high-impact collaborations, and full-time roles. Let's discuss how my expertise can help achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  className="flex items-center gap-4 group p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:translate-x-2"
                >
                  <div className="p-3 rounded-xl bg-background border border-border/20 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-content glass-card p-8 md:p-12 rounded-[40px] border border-white/5 bg-card/40 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project or vision..."
                  className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-lg resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all hover:shadow-xl hover:shadow-primary/25 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send className={`w-5 h-5 ${isSubmitting ? 'hidden' : ''}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
