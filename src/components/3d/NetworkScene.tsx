"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ef4444"); // Electric Blue
    const color2 = new THREE.Color("#f97316"); // Purple
    const color3 = new THREE.Color("#e11d48"); // Cyan

    for (let i = 0; i < count; i++) {
      // Create a sphere distribution
      const r = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Assign colors based on position
      const mixedColor = color1.clone().lerp(color2, Math.random()).lerp(color3, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[#0c0505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-[#0c0505]/80 to-[#0c0505] z-0" />
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={["#0c0505", 10, 25]} />
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
