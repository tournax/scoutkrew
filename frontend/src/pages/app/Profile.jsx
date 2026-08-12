import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Pencil, MapPin } from "lucide-react";
import Avatar from "@/components/Avatar";
import RoleBadge from "@/components/RoleBadge";
import ClipThumb from "@/components/ClipThumb";
import { ME, CLIPS } from "@/data/dummy";

const Gem = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.6;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#0a0a0a" emissive="#FF007F" emissiveIntensity={1.7} flatShading />
      <Edges scale={1.01} color="#00F3FF" />
    </mesh>
  );
};

const STATS = [
  { label: "CLIPS", value: ME.clips, color: "#FF007F" },
  { label: "WIN RATE", value: ME.wr, color: "#00F3FF" },
  { label: "FOLLOWERS", value: ME.followers, color: "#39FF14" },
  { label: "FOLLOWING", value: ME.following, color: "#FFD700" },
];

export default function Profile() {
  const myClips = CLIPS.filter((c) => c.mine);

  return (
    <div data-testid="profile-page" className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div
          className="relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/10"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,0,127,0.35), transparent 55%), radial-gradient(circle at 80% 60%, rgba(0,243,255,0.3), transparent 55%), #0a0a0a",
          }}
        >
          <div className="absolute inset-0 card-scanlines" />
          <span className="absolute top-4 right-5 font-pixel text-[8px] tracking-[0.3em] text-white/50">PLAYER CARD</span>
          <div className="absolute right-4 bottom-0 w-28 h-28 sm:w-32 sm:h-32 opacity-90">
            <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.4} />
              <Gem />
            </Canvas>
          </div>
        </div>

        <div className="px-2 sm:px-4">
          <div className="flex items-end justify-between -mt-10">
            <span className="rounded-full bg-[#050505] p-1.5">
              <Avatar user={ME} size="w-20 h-20" showOnline />
            </span>
            <button
              data-testid="profile-edit-btn"
              onClick={() => toast("Profile editing unlocks at launch.")}
              className="rounded-full border border-white/15 px-5 py-2.5 font-pixel text-[9px] tracking-[0.2em] text-zinc-300 flex items-center gap-2 hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-[0_0_18px_rgba(0,243,255,0.3)] transition-[color,border-color,box-shadow] duration-300"
            >
              <Pencil className="w-3.5 h-3.5" /> EDIT PROFILE
            </button>
          </div>

          <h1 className="mt-4 font-display text-2xl text-white uppercase" data-testid="profile-name">{ME.name}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <RoleBadge role={ME.role} />
            <span className="rounded-full px-2.5 py-0.5 font-pixel text-[8px] tracking-[0.2em] border border-white/15 text-zinc-400">{ME.game}</span>
            <span className="rounded-full px-2.5 py-0.5 font-pixel text-[8px] tracking-[0.2em] border border-neon-yellow/50 text-neon-yellow bg-neon-yellow/10">{ME.rank}</span>
          </div>
          <p className="mt-3 text-xs text-zinc-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-600" /> Mumbai lobby · plays evenings IST
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {STATS.map((stat) => (
              <div key={stat.label} data-testid={`profile-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`} className="bg-[#080808] p-5 text-center card-scanlines">
                <p className="font-display text-xl" style={{ color: stat.color, textShadow: `0 0 16px ${stat.color}77` }}>
                  {stat.value}
                </p>
                <p className="mt-1.5 font-pixel text-[7px] tracking-[0.3em] text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <h2 className="mt-10 font-display text-lg text-white uppercase tracking-tight" data-testid="profile-clips-title">
        My <span className="text-neon-magenta">Clips</span>
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {myClips.map((clip, i) => (
          <motion.div
            key={clip.id}
            data-testid={`profile-clip-${clip.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden"
          >
            <ClipThumb clip={clip} className="aspect-video" />
            <div className="p-4">
              <p className="text-sm font-semibold text-white">{clip.title}</p>
              <p className="mt-1.5 font-pixel text-[7px] tracking-[0.2em] text-zinc-600">
                {clip.views} VIEWS · {clip.likes} LIKES · {clip.comments} COMMENTS
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
