"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Who is Muhammad Kamil Raza?",
    answer: "Muhammad Kamil Raza is a Full Stack MERN Developer specializing in scalable web applications, secure backend systems, and modern React-based frontend architectures."
  },
  {
    question: "What technologies does he specialize in?",
    answer: "He specializes in the MERN Stack (MongoDB, Express, React, Node.js), Next.js, Tailwind CSS, Stripe integrations, AWS deployment, and secure architecture design."
  },
  {
    question: "What is his experience level?",
    answer: "With over 3 years of hands-on experience, Kamil has worked across multiple industries including fintech, e-commerce, and healthcare."
  },
  {
    question: "Is he available for freelance or full-time roles?",
    answer: "Yes, he is open to full-time opportunities, long-term contracts, and high-impact project-based collaborations."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const chars = gsap.utils.toArray(".faq-char");
        gsap.fromTo(chars, 
          { y: "110%" },
          {
            scrollTrigger: {
              trigger: ".faq-heading-container",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
          }
        );

        gsap.fromTo(".faq-visual", { scale: 0.8, opacity: 0 }, {
          scrollTrigger: {
            trigger: ".faq-visual",
            start: "top 80%",
          },
          scale: 1,
          opacity: 1,
          duration: 1.2,
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
            <span className="faq-char inline-block translate-y-full">{char}</span>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section id="faq" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="faq-heading-container mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">05. FAQ</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none flex flex-wrap">
                {renderSplitText("Intellectual")}
                <span className="text-muted-foreground">{renderSplitText("Inquiry.")}</span>
            </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Creative Accordion List */}
          <div className="w-full lg:w-3/5 space-y-2">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden transition-all duration-700 ${activeIndex === idx ? 'py-12 px-8 bg-muted/30 rounded-[2.5rem]' : 'py-8 px-4 border-b border-border/50 hover:px-8'}`}
              >
                <button 
                  onClick={() => setActiveIndex(idx)}
                  className="flex w-full items-center justify-between text-left relative z-10"
                >
                  <div className="flex items-center gap-8">
                    <span className={`text-sm font-black transition-colors duration-500 ${activeIndex === idx ? 'text-primary' : 'text-muted-foreground/30'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-xl md:text-3xl font-bold uppercase tracking-tighter transition-all duration-500 ${activeIndex === idx ? 'scale-105' : 'group-hover:translate-x-2'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transition-transform duration-500 ${activeIndex === idx ? 'rotate-180 text-primary' : 'text-muted-foreground'}`}>
                    {activeIndex === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>
                
                <div className={`grid transition-all duration-700 ease-in-out ${activeIndex === idx ? 'grid-rows-[1fr] mt-8 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl pl-12 border-l border-primary/20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Abstract Visual Element */}
          <div className="hidden lg:block w-2/5">
            <div className="faq-visual relative aspect-square">
               <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-4 rounded-full border border-dashed border-muted-foreground/20 animate-[spin_15s_linear_infinite_reverse]" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                     <span className="text-8xl font-black text-primary/10">?</span>
                     <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">Knowledge Base</p>
                  </div>
               </div>
               {/* Floating Info Pill */}
               <div className="absolute top-1/4 -right-10 p-4 bg-background border border-border rounded-2xl shadow-2xl animate-bounce">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Active Response</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
