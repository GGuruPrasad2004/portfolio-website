"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import Link from "next/link";
import { ArrowLeft, HardHat, Wrench } from "lucide-react";

function TrafficCone() {
  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#ff4500" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Cone Body */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.5, 2, 32]} />
        <meshStandardMaterial color="#ff4500" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* White Stripe Top */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.27, 0.37, 0.4, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>
      
      {/* White Stripe Bottom */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.39, 0.46, 0.3, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>
    </group>
  );
}

export default function WipPage() {
  return (
    <main className="relative min-h-screen bg-[#0c0505] flex items-center justify-center overflow-hidden">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={50} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#fff0e6" />
          <directionalLight position={[-10, 5, -10]} intensity={0.5} color="#ff3300" />
          <Environment preset="city" />
          
          <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
            <TrafficCone />
          </Float>
          
          <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#ff0000" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass max-w-2xl mx-auto p-10 rounded-3xl border border-rose-500/30 backdrop-blur-md shadow-[0_0_50px_rgba(225,29,72,0.1)] pointer-events-auto"
        >
          <div className="flex justify-center gap-4 mb-6 text-rose-500">
            <HardHat className="w-10 h-10" />
            <Wrench className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Under <span className="text-rose-500">Construction</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Ah, you caught me! I'm currently in the lab fine-tuning the AI models for this project. 
            The prototype is getting its final polish and will be deployed live very soon. 
          </p>
          
          <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-500/20 mb-8">
            <p className="text-rose-400 text-sm font-mono italic">
              "Great AI models aren't built in a day... but they are built faster with enough caffeine."
            </p>
          </div>

          <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-lg">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </motion.div>
      </div>
      
    </main>
  );
}
