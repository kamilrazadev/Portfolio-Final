"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, GraduationCap, Medal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "Winner – CodeJam 2.0",
    subtitle: "Web Development Category",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    desc: "Achieved first place in an intensive regional hackathon for building a scalable and innovative web solution."
  },
  {
    title: "Winner – SDS Competition",
    subtitle: "Web Development",
    icon: <Medal className="w-8 h-8 text-blue-400" />,
    desc: "Recognized for excellence in modern web technologies and architectural design."
  },
  {
    title: "Department Topper",
    subtitle: "BS Computer Science",
    icon: <Award className="w-8 h-8 text-purple-500" />,
    desc: "Awarded a Laptop by the institution for maintaining the highest academic performance in the batch."
  },
  {
    title: "BS Computer Science",
    subtitle: "Sindh Madressatul Islam University",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    desc: "Academic Excellence with a CGPA of 3.4 / 4.0 (Batch 2022-2026)."
  }
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".achievement-card", { y: 30, opacity: 0 });

      gsap.to(".achievement-card", {
        scrollTrigger: {
          trigger: ".achievement-grid",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones that mark my journey towards technical excellence and leadership.
          </p>
        </div>

        <div className="achievement-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="achievement-card group p-8 rounded-3xl glass-card transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-6 p-4 rounded-2xl bg-background border border-border/20 w-fit group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{item.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
