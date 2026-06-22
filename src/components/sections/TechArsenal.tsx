"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { FadeIn } from "@/components/ui/animation-wrappers";
import { Brain, Code, Database, Globe, Cpu, Layers, Server, TerminalSquare, Box, Container } from "lucide-react";

const technologies = [
  { name: "Python", icon: <TerminalSquare className="w-8 h-8" />, color: "text-red-500" },
  { name: "PyTorch", icon: <Brain className="w-8 h-8" />, color: "text-red-400" },
  { name: "TensorFlow", icon: <Brain className="w-8 h-8" />, color: "text-orange-400" },
  { name: "React", icon: <Code className="w-8 h-8" />, color: "text-rose-500" },
  { name: "Next.js", icon: <Globe className="w-8 h-8" />, color: "text-white" },
  { name: "MongoDB", icon: <Database className="w-8 h-8" />, color: "text-green-400" },
  { name: "Docker", icon: <Container className="w-8 h-8" />, color: "text-red-500" },
  { name: "Linux", icon: <Server className="w-8 h-8" />, color: "text-yellow-400" },
  { name: "LangChain", icon: <Layers className="w-8 h-8" />, color: "text-emerald-400" },
  { name: "HuggingFace", icon: <Box className="w-8 h-8" />, color: "text-yellow-500" },
];

export default function TechArsenal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(280);

  useEffect(() => {
    const updateRadius = () => {
      // 380px radius for desktop, 250px for mobile
      setRadius(window.innerWidth >= 768 ? 380 : 250);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
  
  // Custom 3D rotation animation
  useAnimationFrame((t) => {
    if (containerRef.current) {
      const angle = t / 15; // Speed of rotation
      containerRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  });

  return (
    <section id="tech-arsenal" className="relative py-32 bg-[#0c0505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-red-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-32">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Technology <span className="text-rose-500">Carousel</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              The tools and frameworks I use to build intelligent systems.
            </p>
          </div>
        </FadeIn>

        <div className="relative h-[300px] md:h-[400px] flex justify-center items-center perspective-1000">
          <div 
            ref={containerRef}
            className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {technologies.map((tech, idx) => {
              const angle = (360 / technologies.length) * idx;
              // Translate Z determines the radius of the carousel
              return (
                <div
                  key={idx}
                  className="absolute inset-0 glass rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 hover:border-rose-500/50 hover:bg-white/10 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                    {tech.icon}
                  </div>
                  <span className="font-mono text-sm text-slate-300 font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
