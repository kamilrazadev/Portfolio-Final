"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Code, Rocket, Shield, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Character wavy reveal animation
        const chars = gsap.utils.toArray(".about-char");
        gsap.fromTo(chars, 
          { y: "110%" },
          {
            scrollTrigger: {
              trigger: ".about-heading-container",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
          }
        );

        // Label animation
        gsap.fromTo(".about-label", 
          { x: -30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".about-label",
              start: "top 95%",
            },
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        // Text reveal from bottom
        gsap.fromTo(".about-desc", 
          { y: 20, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".about-desc",
              start: "top 90%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );

        // Expertise cards staggered from bottom
        gsap.fromTo(".expertise-card", 
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".expertise-grid",
              start: "top 90%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
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
            <span className="about-char inline-block translate-y-full">
              {char}
            </span>
          </span>
        ))}
      </span>
    ));
  };

  const expertise = [
    {
      title: "Frontend Engineering",
      icon: <Code className="w-5 h-5" />,
      desc: "Advanced React.js & Next.js with pixel-perfect UI implementation and smooth animations.",
      color: "text-blue-500"
    },
    {
      title: "Backend Architecture",
      icon: <User className="w-5 h-5" />,
      desc: "Scalable Node.js & Express.js APIs, MongoDB, Redis, and real-time systems.",
      color: "text-emerald-500"
    },
    {
      title: "Security & Scalability",
      icon: <Shield className="w-5 h-5" />,
      desc: "AES-256 encryption, 2FA, RBAC, and load balancing for enterprise-grade security.",
      color: "text-purple-500"
    },
    {
      title: "Cloud & Integrations",
      icon: <Rocket className="w-5 h-5" />,
      desc: "AWS deployments, Stripe payments, Twilio, and third-party API integrations.",
      color: "text-pink-500"
    },
  ];

  return (
    <section id="about" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/2 space-y-10">
            <div className="about-heading-container space-y-4">
              <h2 className="about-label text-xs font-bold uppercase tracking-[0.4em] text-primary">
                01. About Me
              </h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none flex flex-wrap">
                {renderSplitText("Architecting")}
                <span className="text-muted-foreground">{renderSplitText("Digital Excellence.")}</span>
              </h3>
            </div>

            <div className="about-desc space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I am a results-driven <span className="text-foreground font-bold">Full Stack Developer</span> specializing in the MERN ecosystem. Over the past three years, I have engineered scalable web applications across fintech, e-commerce, and enterprise platforms.
              </p>
              <p>
                My approach combines clean code principles, performance optimization, and secure architecture design. I don’t just build interfaces — I architect systems designed to scale and remain maintainable.
              </p>
              
              <div className="pt-6">
                <a href="#experience" className="group inline-flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
                  View Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="expertise-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, idx) => (
                <div 
                  key={idx} 
                  className="expertise-card group p-8 rounded-[2rem] border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500"
                >
                  <div className={`mb-6 p-4 rounded-2xl bg-background border border-border w-fit group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
