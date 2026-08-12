import { Play } from "lucide-react";

export default function ClipThumb({ clip, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-[#050505] ${className}`}>
      {clip.img ? (
        <img src={clip.img} alt={clip.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-75" />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 28% 28%, ${clip.color}38, transparent 62%), radial-gradient(circle at 76% 78%, ${clip.color}20, transparent 55%)`,
          }}
        />
      )}
      <div className="absolute inset-0 card-scanlines" />
      <span className="absolute top-3 left-3 font-pixel text-[8px] tracking-[0.25em]" style={{ color: clip.color }}>
        {clip.game}
      </span>
      <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 font-pixel text-[8px] text-zinc-300 border border-white/10">
        {clip.dur}
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
          style={{ borderColor: `${clip.color}99`, backgroundColor: `${clip.color}1f`, boxShadow: `0 0 20px ${clip.color}44` }}
        >
          <Play className="w-4 h-4 ml-0.5" style={{ color: clip.color }} fill={clip.color} />
        </span>
      </div>
    </div>
  );
}
