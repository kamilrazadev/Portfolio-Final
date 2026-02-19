"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Code, Rocket, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        // opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from(".expertise-card", {
        scrollTrigger: {
          trigger: ".expertise-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        // opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const expertise = [
    {
      title: "Frontend Engineering",
      icon: <Code className="w-6 h-6 text-primary" />,
      desc: "Advanced React.js & Next.js with pixel-perfect UI implementation and smooth animations.",
    },
    {
      title: "Backend Architecture",
      icon: <User className="w-6 h-6 text-accent" />,
      desc: "Scalable Node.js & Express.js APIs, MongoDB, Redis, and real-time systems.",
    },
    {
      title: "Security & Scalability",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      desc: "AES-256 encryption, 2FA, RBAC, and load balancing for enterprise-grade security.",
    },
    {
      title: "Cloud & Integrations",
      icon: <Rocket className="w-6 h-6 text-pink-500" />,
      desc: "AWS deployments, Stripe payments, Twilio, and third-party API integrations.",
    },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-content space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
              About Muhammad Kamil Raza
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a results-driven Full Stack Developer specializing in the MERN ecosystem, with a strong emphasis on React.js and Next.js. Over the past three years, I have engineered and deployed scalable web applications across fintech, e-commerce, education, and enterprise verification platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines clean code principles, performance optimization, and secure architecture design. I don’t just build interfaces — I architect systems designed to scale, handle real-world traffic, and remain maintainable long-term.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">
                Currently leading full stack initiatives at LaunchBox Global
              </div>
            </div>
          </div>

          <div className="expertise-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, idx) => (
              <div 
                key={idx} 
                className="expertise-card p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow hover:border-primary/30 group"
              >
                <div className="mb-4 p-3 rounded-xl bg-background w-fit group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
