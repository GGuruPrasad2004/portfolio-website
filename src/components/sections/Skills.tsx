"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/animation-wrappers";

const skillCategories = [
  {
    title: "Programming",
    color: "from-red-500 to-red-500",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "AI & ML",
    color: "from-orange-500 to-orange-500",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "LLMs", "RAG", "Prompt Engineering", "Time-Series Forecasting"],
  },
  {
    title: "Frameworks & Tools",
    color: "from-rose-500 to-rose-500",
    skills: ["PyTorch", "Gradio", "Streamlit", "YOLOv11", "Git", "GitHub", "VS Code", "JSON Processing"],
  },
  {
    title: "Core Concepts",
    color: "from-emerald-400 to-emerald-600",
    skills: ["Data Structures", "Algorithms", "DBMS"],
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="skills" ref={containerRef} className="relative py-32 bg-[#0c0505] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Technical <span className="text-orange-500">Arsenal</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              A comprehensive toolkit spanning core programming, advanced artificial intelligence, and modern development frameworks.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            // Apply different parallax speeds based on index
            const yTransform = idx % 3 === 0 ? y1 : idx % 2 === 0 ? y2 : y3;
            
            return (
              <motion.div 
                key={category.title}
                style={{ y: yTransform }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-b ${category.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                <div className="relative h-full glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors flex flex-col items-center text-center">
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.color} mb-8`}>
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * sIdx, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="px-4 py-2 bg-[#1a0b0b] border border-white/5 rounded-full text-sm text-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-white/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
