"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animation-wrappers";
import { GitBranch, ExternalLink, Network, Car, TrafficCone, Leaf } from "lucide-react";

const projects = [
  {
    title: "AI-Powered UE Capability Parser",
    subtitle: "Samsung PRISM | Research Project",
    description: "Developed a hybrid RAG pipeline using Qwen LLM to parse complex 3GPP UE Capability logs from real device datasets. Implemented intelligent chunking and map-reduce techniques to automate log analysis and improve technical insight extraction.",
    icon: <Network className="w-8 h-8 text-orange-500" />,
    color: "from-orange-500/20 to-orange-500/20",
    border: "group-hover:border-orange-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
    tags: ["RAG", "Qwen LLM", "NLP", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Traffic Congestion Management System",
    subtitle: "Final Year Project | AI + IoT",
    description: "Developing an AI + IoT system for real-time predictive traffic optimization using dynamic traffic light control. Built MLP neural network achieving R² = 0.9725 for time-series forecasting, integrated with YOLO computer vision.",
    icon: <TrafficCone className="w-8 h-8 text-rose-500" />,
    color: "from-rose-500/20 to-rose-500/20",
    border: "group-hover:border-rose-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]",
    tags: ["YOLO", "PyTorch", "Raspberry Pi Pico", "MLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Intelligent Vehicle Damage Detection System",
    subtitle: "Personal Project | Computer Vision",
    description: "Trained YOLOv11 model on CarDD dataset for multi-class vehicle damage detection including dents, scratches, and glass damage. Developed a fully functional Gradio web application for real-time image upload and annotation.",
    icon: <Car className="w-8 h-8 text-red-500" />,
    color: "from-red-500/20 to-red-500/20",
    border: "group-hover:border-red-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
    tags: ["YOLOv11", "Computer Vision", "Gradio", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "EcoVoice – Generative AI Audio Alerts",
    subtitle: "Personal Project | Generative AI",
    description: "Designed a Generative AI system that converts smart meter data into personalized audio alerts in English & Kannada. Aligned solution with UN SDGs and delivered a working prototype as a StreamLit web app.",
    icon: <Leaf className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-900/20",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]",
    tags: ["Generative AI", "Streamlit", "Audio AI", "Python"],
    github: "#",
    demo: "#",
  }
];

function TiltCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`group relative h-full rounded-3xl bg-[#1a0b0b] border border-white/10 ${project.border} ${project.shadow} transition-all duration-500`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 z-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl`} />
      </div>
      
      <div className="relative z-10 p-8 h-full flex flex-col pointer-events-none">
        <div style={{ transform: "translateZ(40px)" }} className="mb-6 bg-[#0c0505] w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg">
          {project.icon}
        </div>
        
        <h3 style={{ transform: "translateZ(30px)" }} className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p style={{ transform: "translateZ(20px)" }} className="text-sm font-mono text-slate-400 mb-6">{project.subtitle}</p>
        
        <p style={{ transform: "translateZ(10px)" }} className="text-slate-300 leading-relaxed mb-8 flex-1">
          {project.description}
        </p>
        
        <div style={{ transform: "translateZ(20px)" }} className="flex flex-wrap gap-2 mb-8 pointer-events-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ transform: "translateZ(30px)" }} className="flex items-center gap-4 mt-auto pointer-events-auto border-t border-white/10 pt-6">
          <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <GitBranch className="w-4 h-4" /> Code
          </a>
          <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#0c0505] overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Featured <span className="text-rose-500">Projects</span>
              </h2>
              <p className="text-slate-400 max-w-xl">
                A selection of my most impactful AI and Machine Learning engineering work.
              </p>
            </div>
            <div className="hidden md:block w-1/3 h-[1px] bg-gradient-to-l from-rose-500/50 to-transparent" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerChildren={0.2}>
          {projects.map((project, idx) => (
            <StaggerItem key={idx} className="h-full perspective-1000">
              <TiltCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
