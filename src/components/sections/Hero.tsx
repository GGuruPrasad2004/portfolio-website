"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkScene from "@/components/3d/NetworkScene";
import { FadeIn } from "@/components/ui/animation-wrappers";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

const titles = [
  "AI & Machine Learning Engineer",
  "Computer Vision Developer",
  "Generative AI Enthusiast",
  "Samsung PRISM Research Intern"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <NetworkScene />
      
      <div className="z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center mt-20">
        <FadeIn delay={1.5} direction="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Available for Opportunities</span>
          </div>
        </FadeIn>

        <FadeIn delay={1.7} direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-rose-500">G Guru Prasad</span>
          </h1>
        </FadeIn>

        <FadeIn delay={1.9} direction="up" className="h-[40px] md:h-[60px] mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xl md:text-3xl lg:text-4xl text-slate-400 font-medium"
            >
              {titles[titleIndex]}
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        <FadeIn delay={2.1} direction="up" className="max-w-2xl">
          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10">
            Building end-to-end AI systems, crafting RAG pipelines, and developing production-ready prototypes. Passionate about solving real-world problems through artificial intelligence.
          </p>
        </FadeIn>

        <FadeIn delay={2.3} direction="up">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all bg-red-500 rounded-full hover:bg-red-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] overflow-hidden interactive"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-red-500 via-rose-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-slate-300 transition-all bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white interactive"
            >
              Download Resume
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={3} direction="none" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </FadeIn>
    </section>
  );
}
