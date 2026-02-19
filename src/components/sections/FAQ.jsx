"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is Muhammad Kamil Raza?",
    answer: "Muhammad Kamil Raza is a Full Stack MERN Developer specializing in scalable web applications, secure backend systems, and modern React-based frontend architectures."
  },
  {
    question: "What technologies does he specialize in?",
    answer: "He specializes in the MERN Stack (MongoDB, Express, React, Node.js), Next.js, Tailwind CSS, Stripe integrations, AWS deployment, and secure architecture design including AES-256 and RBAC."
  },
  {
    question: "What is his experience level?",
    answer: "With over 3 years of hands-on experience, Kamil has worked across multiple industries including fintech, e-commerce, and healthcare, currently leading initiatives at LaunchBox Global."
  },
  {
    question: "Is he available for freelance or full-time roles?",
    answer: "Yes, he is open to full-time opportunities, long-term contracts, and high-impact project-based collaborations."
  },
  {
    question: "How does he ensure application security?",
    answer: "He follows security-first principles, implementing AES-256 encryption, Two-Factor Authentication (2FA), Role-Based Access Control (RBAC), and end-to-end encryption (E2EE) where necessary."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: -30,
        // opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="faq" ref={containerRef} className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="faq-container space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold mb-4">
              <MessageCircle className="w-6 h-6" />
              <span className="uppercase tracking-widest text-sm">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Answering your <span className="text-primary">concerns</span> about my expertise.
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`faq-item group overflow-hidden rounded-2xl border transition-all duration-300 ${activeIndex === idx ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/30'}`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ${activeIndex === idx ? 'rotate-180 text-primary' : 'group-hover:text-primary'}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-center items-center h-full">
            <div className="relative w-full max-w-md p-8 rounded-[40px] glass-card border border-primary/20 bg-primary/5">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />
              
              <div className="relative z-10 space-y-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Have a specific project in mind?</h3>
                <p className="text-muted-foreground">
                  I'm always excited to hear about new ideas and challenges. Let's discuss how we can build something extraordinary together.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:scale-105 transition-transform"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
