import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import * as THREE from "three";

const ORBS = [
  { pos: [-3.4, 1.4, -3], color: "#FF007F", scale: 1.0, speed: 1.2 },
  { pos: [3.6, 1.9, -4], color: "#00F3FF", scale: 0.8, speed: 1.0 },
  { pos: [-2.6, -2, -2.4], color: "#39FF14", scale: 0.45, speed: 1.7 },
  { pos: [2.8, -1.7, -2.6], color: "#FFD700", scale: 0.4, speed: 1.5 },
];

const Orb = ({ pos, color, scale, speed }) => (
  <Float speed={speed} rotationIntensity={0.9} floatIntensity={1.7}>
    <mesh position={pos} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#0a0a0a" emissive={color} emissiveIntensity={1.5} flatShading roughness={0.35} metalness={0.15} />
      <Edges scale={1.015} color={color} />
    </mesh>
  </Float>
);

const Rig = ({ children }) => {
  const ref = useRef();
  useFrame((state) => {
    const { pointer } = state;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.2, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -pointer.y * 0.12, 0.05);
  });
  return <group ref={ref}>{children}</group>;
};

export default function OrbsBg() {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[-5, 3, 2]} intensity={50} color="#FF007F" />
      <pointLight position={[5, -2, 3]} intensity={50} color="#00F3FF" />
      <Rig>
        {ORBS.map((orb) => (
          <Orb key={orb.pos.join()} {...orb} />
        ))}
        <gridHelper args={[50, 50, "#FF007F", "#17060f"]} position={[0, -3.8, -8]} />
      </Rig>
    </Canvas>
  );
}
