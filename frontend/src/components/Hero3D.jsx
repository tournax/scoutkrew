import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox, Edges } from "@react-three/drei";
import * as THREE from "three";

const ORBS = [
  { pos: [-4.6, 1.8, -3.5], color: "#FF007F", scale: 1.2, speed: 1.3 },
  { pos: [4.8, 2.4, -4.5], color: "#00F3FF", scale: 0.95, speed: 1.0 },
  { pos: [-3.4, -2.4, -2.5], color: "#39FF14", scale: 0.55, speed: 1.8 },
  { pos: [3.6, -2.1, -3], color: "#FFD700", scale: 0.5, speed: 1.6 },
  { pos: [0.6, 3.4, -5.5], color: "#FF007F", scale: 0.7, speed: 0.9 },
  { pos: [-5.6, -0.2, -5.5], color: "#00F3FF", scale: 0.65, speed: 1.2 },
];

const PIXELS = [
  { pos: [-2.2, 2.8, -2], color: "#00F3FF" },
  { pos: [2.1, 3.1, -3], color: "#FF007F" },
  { pos: [-4.9, -1.4, -3], color: "#FFD700" },
  { pos: [5.4, 0.6, -2.5], color: "#39FF14" },
  { pos: [-1.2, -3, -2], color: "#FF007F" },
  { pos: [1.4, -3.2, -3.5], color: "#00F3FF" },
];

const Orb = ({ pos, color, scale, speed }) => (
  <Float speed={speed} rotationIntensity={0.9} floatIntensity={1.7}>
    <mesh position={pos} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#0a0a0a"
        emissive={color}
        emissiveIntensity={1.5}
        flatShading
        roughness={0.35}
        metalness={0.15}
      />
      <Edges scale={1.015} color={color} />
    </mesh>
  </Float>
);

const Pixel = ({ pos, color }) => (
  <Float speed={2.2} rotationIntensity={2.4} floatIntensity={2.2}>
    <mesh position={pos}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color="#0a0a0a" emissive={color} emissiveIntensity={2.4} flatShading />
    </mesh>
  </Float>
);

const Bar = ({ position, size, color, intensity = 1.4 }) => (
  <mesh position={position}>
    <boxGeometry args={size} />
    <meshStandardMaterial color="#0d0d0d" emissive={color} emissiveIntensity={intensity} />
  </mesh>
);

const ClipCard = ({ y, accent }) => (
  <group position={[0, y, 0.125]}>
    <mesh>
      <planeGeometry args={[1.62, 1.05]} />
      <meshStandardMaterial color="#0c0c12" emissive={accent} emissiveIntensity={0.22} />
    </mesh>
    <mesh position={[-0.62, 0.33, 0.006]}>
      <circleGeometry args={[0.07, 16]} />
      <meshStandardMaterial color="#111111" emissive={accent} emissiveIntensity={1.8} />
    </mesh>
    <Bar position={[0.15, 0.35, 0.006]} size={[0.8, 0.05, 0.005]} color={accent} intensity={1.2} />
    <Bar position={[0.05, 0.22, 0.006]} size={[0.6, 0.04, 0.005]} color="#52525B" intensity={0.7} />
    <mesh position={[0, -0.06, 0.006]} rotation={[0, 0, -Math.PI / 2]}>
      <coneGeometry args={[0.13, 0.2, 3]} />
      <meshStandardMaterial color="#111111" emissive={accent} emissiveIntensity={2.2} flatShading />
    </mesh>
    <Bar position={[-0.45, -0.42, 0.006]} size={[0.5, 0.04, 0.005]} color={accent} intensity={0.9} />
  </group>
);

const PhoneMockup = () => {
  const group = useRef();
  const { viewport } = useThree();
  const compact = viewport.width < 8;
  const baseY = compact ? -2.9 : -0.1;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.position.y = baseY + Math.sin(t * 0.55) * 0.15;
    group.current.rotation.z = 0.08 + Math.sin(t * 0.25) * 0.045;
  });

  return (
    <group
      ref={group}
      position={[compact ? 0.4 : 3.1, baseY, compact ? -2.5 : 0.3]}
      rotation={[0.16, -0.55, 0.08]}
      scale={compact ? 0.72 : 1}
    >
      <RoundedBox args={[2.1, 4.3, 0.22]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color="#0b0b10" roughness={0.35} metalness={0.6} />
        <Edges scale={1.002} color="#00F3FF" />
      </RoundedBox>
      <mesh position={[0, 0, 0.115]}>
        <planeGeometry args={[1.88, 4.08]} />
        <meshStandardMaterial color="#050508" emissive="#12121c" emissiveIntensity={0.55} />
      </mesh>
      <Bar position={[0, 1.88, 0.125]} size={[1.4, 0.06, 0.008]} color="#00F3FF" />
      <mesh position={[-0.62, 1.5, 0.125]}>
        <circleGeometry args={[0.16, 24]} />
        <meshStandardMaterial color="#1a0a12" emissive="#FF007F" emissiveIntensity={1.6} />
      </mesh>
      <Bar position={[0.24, 1.57, 0.125]} size={[0.9, 0.09, 0.008]} color="#FF007F" />
      <Bar position={[0.1, 1.4, 0.125]} size={[0.62, 0.05, 0.008]} color="#39FF14" intensity={1.1} />
      <Bar position={[0.62, 1.5, 0.125]} size={[0.34, 0.14, 0.008]} color="#FFD700" intensity={1.3} />
      <ClipCard y={0.55} accent="#FF007F" />
      <ClipCard y={-0.72} accent="#00F3FF" />
      {[-0.3, 0, 0.3].map((x, i) => (
        <mesh key={x} position={[x, -1.82, 0.125]}>
          <circleGeometry args={[0.045, 16]} />
          <meshStandardMaterial
            color="#111111"
            emissive={i === 0 ? "#FFD700" : "#3f3f46"}
            emissiveIntensity={i === 0 ? 2.2 : 0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

const Rig = ({ children }) => {
  const ref = useRef();
  useFrame((state) => {
    const { pointer } = state;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.16, 0.045);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -pointer.y * 0.1, 0.045);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.x * 0.4, 0.04);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, pointer.y * 0.25, 0.04);
  });
  return <group ref={ref}>{children}</group>;
};

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      data-testid="hero-3d-canvas"
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[-6, 4, 2]} intensity={60} color="#FF007F" />
      <pointLight position={[6, -2, 3]} intensity={60} color="#00F3FF" />
      <Rig>
        {ORBS.map((orb) => (
          <Orb key={orb.pos.join()} {...orb} />
        ))}
        {PIXELS.map((p) => (
          <Pixel key={p.pos.join()} {...p} />
        ))}
        <PhoneMockup />
        <gridHelper args={[60, 60, "#FF007F", "#17060f"]} position={[0, -4.6, -8]} />
      </Rig>
    </Canvas>
  );
}
