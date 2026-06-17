"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-fit px-6 py-3 rounded-full transition-all duration-300 ${
        hasScrolled 
          ? "bg-[#1a0b0b]/80 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-center gap-8">
        <Link href="/" className="font-heading font-bold text-xl text-white mr-4 interactive">
          GP<span className="text-red-500">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group interactive"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        <Link 
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-red-500 rounded-full hover:bg-red-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] interactive"
        >
          Hire Me
        </Link>
        
        {/* Mobile menu button could go here */}
      </div>
    </motion.nav>
  );
}
