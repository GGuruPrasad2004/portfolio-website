"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/animation-wrappers";
import { Send, MapPin, Mail, GitBranch, Link as LinkIcon, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#0c0505] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Let&apos;s <span className="text-red-500">Connect</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.2} direction="right">
              <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-red-500/50 transition-colors h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:gguruprasad2004@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-red-500 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a0b0b] border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email</p>
                      <p className="font-mono text-sm break-all">gguruprasad2004@gmail.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a0b0b] border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Location</p>
                      <p className="font-mono text-sm">Bengaluru, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-sm font-medium text-slate-500 mb-4">Social Profiles</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/GGuruPrasad2004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#1a0b0b] border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all w-fit">
                      <GitBranch className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/guru-prasad-5b82872b3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#1a0b0b] border border-white/10 text-slate-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all w-fit">
                      <LinkIcon className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a href="https://leetcode.com/u/GGuruPrasad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#1a0b0b] border border-white/10 text-slate-300 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all w-fit">
                      <Terminal className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium">LeetCode</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.4} direction="left">
              <form className="glass p-8 rounded-3xl border border-white/10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-400">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="bg-[#1a0b0b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-400">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="bg-[#1a0b0b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="bg-[#1a0b0b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="bg-[#1a0b0b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                    placeholder="Hello Guru, I'd like to talk about..."
                  />
                </div>

                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all bg-red-500 rounded-xl hover:bg-red-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] overflow-hidden mt-4">
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
