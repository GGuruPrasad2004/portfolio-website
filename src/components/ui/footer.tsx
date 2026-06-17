"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0c0505] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <Link href="/" className="font-heading font-bold text-2xl text-white interactive">
            G Guru Prasad<span className="text-red-500">.</span>
          </Link>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#1a0b0b] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} G Guru Prasad. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
