"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/animation-wrappers";
import { BookOpen, Network, FileText, ArrowRight } from "lucide-react";

function PaperCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative w-full max-w-4xl mx-auto rounded-3xl bg-[#1a0b0b] border border-white/10 group p-1 lg:p-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-rose-500/10 rounded-3xl blur-md opacity-50" />
      
      <div className="relative z-10 glass rounded-2xl p-8 lg:p-12 overflow-hidden bg-white/[0.02]">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-sm font-mono text-orange-500">Research Focus</p>
            <p className="text-slate-400">Samsung PRISM</p>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          AI-Powered UE Capability Parser for 3GPP Logs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-slate-300 flex items-center gap-2">
              <Network className="w-5 h-5 text-rose-500" /> Architecture
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              Hybrid RAG pipeline integrating Qwen LLM for parsing complex 5G 3GPP User Equipment (UE) logs. Intelligent chunking mechanisms handle large log files efficiently.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-slate-300 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" /> Methodology
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              Map-reduce techniques combined with zero-shot extraction capabilities to automate technical insight extraction from raw telecommunication data dumps.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex -space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#1a0b0b] border border-white/20 flex items-center justify-center text-xs font-bold text-red-500 z-30">LLM</div>
            <div className="w-10 h-10 rounded-full bg-[#1a0b0b] border border-white/20 flex items-center justify-center text-xs font-bold text-orange-500 z-20">RAG</div>
            <div className="w-10 h-10 rounded-full bg-[#1a0b0b] border border-white/20 flex items-center justify-center text-xs font-bold text-rose-500 z-10">5G</div>
          </div>
          
          <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-red-500 transition-colors group/btn">
            Read Methodology 
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Research() {
  return (
    <section id="research" className="relative py-32 bg-[#0c0505] overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Academic <span className="text-orange-500">Research</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Highlighting my applied research in Generative AI and Telecommunications.
            </p>
          </div>
        </FadeIn>

        <div className="perspective-1000">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <PaperCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
