"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animation-wrappers";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GraduationCap, Award, BrainCircuit, Code2, Download, GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "CGPA", value: 8.05, decimals: 2, icon: <GraduationCap className="w-5 h-5 text-red-500" /> },
    { label: "Projects", value: 4, suffix: "+", icon: <Code2 className="w-5 h-5 text-orange-500" /> },
    { label: "Certifications", value: 4, suffix: "+", icon: <Award className="w-5 h-5 text-rose-500" /> },
    { label: "Research Exp", value: 1, suffix: " yr", icon: <BrainCircuit className="w-5 h-5 text-red-500" /> },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0c0505] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              About <span className="text-red-500">Me</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Profile Image Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.2} direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#1a0b0b] border border-white/10 p-2">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-red-500/40 to-orange-500/40 flex items-center justify-center border border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Profile Picture */}
                    <Image 
                      src="/profile.jpg" 
                      alt="G Guru Prasad" 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="mt-8">
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <StaggerItem key={idx} className="glass p-4 rounded-2xl flex flex-col gap-2 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      {stat.icon}
                      <span className="text-sm text-slate-400 font-medium">{stat.label}</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-mono">
                      <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <FadeIn delay={0.3} direction="left">
              <div className="prose prose-500 nvert max-w-none text-slate-300">
                <p className="text-lg leading-relaxed mb-6">
                  I am an Artificial Intelligence & Machine Learning engineering student with hands-on experience building end-to-end AI systems. My expertise spans across <strong className="text-red-500">Computer Vision, Generative AI, RAG pipelines, and Large Language Models</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Currently, I am part of the highly selective <strong className="text-orange-500">Samsung PRISM research program</strong> at Samsung R&D Bangalore, where I develop production-ready prototypes using cutting-edge technologies like Python, PyTorch, YOLOv11, and Qwen LLMs for real-world telecom and traffic optimization applications.
                </p>

                {/* Social Links from Resume */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a href="/resume.pdf" download="G_Guru_Prasad_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-colors">
                    <Download className="w-4 h-4" /> Download Resume
                  </a>
                  <a href="https://github.com/GGuruPrasad2004" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all">
                    <GitBranch className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://linkedin.com/in/guru-prasad-5b82872b3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                    <LinkIcon className="w-5 h-5 text-red-500" />
                  </a>
                  <a href="mailto:gguruprasad2004@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              <div className="glass p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors" />
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="text-rose-500" /> Education Journey
                </h3>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                  
                  {/* BE */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1a0b0b] group-[.is-active]:bg-red-500/20 group-[.is-active]:border-red-500/50 text-slate-500 group-[.is-active]:text-red-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <div className="ml-auto md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm shadow transition-all hover:border-red-500/30">
                      <div className="flex flex-col mb-1">
                        <span className="text-red-400 font-mono text-sm">2023 - 2027</span>
                        <h4 className="text-lg font-bold text-white">B.E. in AI & Machine Learning</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Cambridge Institute of Technology, Bengaluru</p>
                      <p className="text-rose-500 text-sm font-medium mt-2">CGPA: 8.05/10</p>
                    </div>
                  </div>

                  {/* HSC */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1a0b0b] group-[.is-active]:bg-orange-500/20 group-[.is-active]:border-orange-500/50 text-slate-500 group-[.is-active]:text-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <div className="ml-auto md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm shadow transition-all hover:border-orange-500/30">
                      <div className="flex flex-col mb-1">
                        <span className="text-orange-500 font-mono text-sm">Graduated 2023</span>
                        <h4 className="text-lg font-bold text-white">HSC (XII)</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Cambridge PU College, Bengaluru</p>
                      <p className="text-rose-500 text-sm font-medium mt-2">Percentage: 79.8%</p>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
