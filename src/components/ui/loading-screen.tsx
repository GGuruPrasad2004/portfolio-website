"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for Next.js to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0505]"
        >
          <div className="relative flex flex-col items-center">
            {/* AI Core Animation */}
            <div className="relative w-24 h-24 mb-8">
              <motion.div
                className="absolute inset-0 border-2 border-red-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-orange-500 rounded-full border-dashed"
                animate={{
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-6 bg-rose-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            <motion.h1
              className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 tracking-widest"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              INITIALIZING
            </motion.h1>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-slate-500 font-mono tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            SYS_BOOT_SEQ_01 // G_GURU_PRASAD
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
