"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animation-wrappers";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "Data Science for Engineers",
    issuer: "NPTEL / IIT",
    icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    color: "from-rose-500/20 to-rose-500/20",
    border: "group-hover:border-rose-500/50",
  },
  {
    title: "Data Mining",
    issuer: "NPTEL / IIT",
    icon: <Award className="w-8 h-8 text-orange-500" />,
    color: "from-orange-500/20 to-orange-500/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    icon: <Award className="w-8 h-8 text-red-500" />,
    color: "from-red-500/20 to-red-500/20",
    border: "group-hover:border-red-500/50",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 bg-[#0c0505] overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Licenses & <span className="text-orange-500">Certifications</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Continuous learning and professional development.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <StaggerItem key={idx}>
              <div className={`group relative h-full glass p-8 rounded-3xl border border-white/10 ${cert.border} transition-all duration-500 overflow-hidden cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#0c0505] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {cert.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm font-mono text-slate-400 mb-6 flex-1">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-white transition-colors mt-auto">
                    <span>View Credential</span>
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
