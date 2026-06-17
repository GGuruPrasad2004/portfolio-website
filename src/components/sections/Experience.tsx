"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/animation-wrappers";
import { Briefcase, Building2 } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Research Intern",
      company: "Samsung R&D Institute India - Bangalore",
      program: "Samsung PRISM",
      duration: "Ongoing",
      description: [
        "Developing a hybrid RAG pipeline using Qwen LLM to parse complex 3GPP UE Capability logs from real device datasets.",
        "Implementing intelligent chunking and map-reduce techniques to automate log analysis.",
        "Improving technical insight extraction for 5G device logs.",
      ],
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      color: "blue",
    }
    // More experiences can be added here
  ];

  return (
    <section id="experience" ref={containerRef} className="relative py-32 bg-[#0c0505] overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Professional <span className="text-red-500">Experience</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              My career journey and research experience in the tech industry.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-red-500 via-orange-500 to-rose-500 rounded-full"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal group ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#0c0505] bg-slate-800 shadow-[0_0_0_2px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_0_2px_rgba(59,130,246,0.5)] group-hover:bg-red-500/50 transition-all z-10">
                  {exp.icon}
                </div>

                {/* Content Card */}
                <FadeIn 
                  direction={idx % 2 === 0 ? "left" : "right"} 
                  className={`w-[calc(100%-5rem)] ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all group-hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-mono text-red-500">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-slate-300 mb-2">{exp.company}</h4>
                    <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-500 mb-6">
                      {exp.program}
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
