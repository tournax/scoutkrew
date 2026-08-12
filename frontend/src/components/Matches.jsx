import { motion } from "framer-motion";
import { Plus, Swords } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";

const PLAYERS = [
  {
    name: "VenomX",
    role: "IGL",
    game: "BGMI",
    wr: "68%",
    clips: 14,
    tag: "CALLS THE ROTATES",
    img: "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#FF007F",
  },
  {
    name: "ScopeQueen",
    role: "SNIPER",
    game: "VALORANT",
    wr: "61%",
    clips: 22,
    tag: "ONE TAP, ONE LESS",
    img: "https://images.pexels.com/photos/9072320/pexels-photo-9072320.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "#00F3FF",
  },
  {
    name: "MedicMain",
    role: "SUPPORT",
    game: "FREE FIRE",
    wr: "72%",
    clips: 9,
    tag: "NEVER LETS YOU BLEED OUT",
    img: null,
    color: "#39FF14",
  },
];

const PlayerCard = ({ player, i }) => (
  <motion.div
    data-testid={`match-card-${player.role.toLowerCase()}`}
    initial={{ opacity: 0, y: 50, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? 0 : i === 0 ? -2 : 2 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -14, rotate: 0, scale: 1.03 }}
    className="relative w-64 sm:w-72 shrink-0 rounded-2xl bg-[#0a0a0a] border overflow-hidden transition-shadow duration-300"
    style={{ borderColor: `${player.color}55`, boxShadow: `0 0 28px ${player.color}22` }}
  >
    <div className="relative aspect-square overflow-hidden bg-[#050505]">
      {player.img ? (
        <img src={player.img} alt={player.name} loading="lazy" className="w-full h-full object-cover opacity-90" />
      ) : (
        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${player.color}0f` }}>
          <span className="font-display text-6xl" style={{ color: player.color, textShadow: `0 0 24px ${player.color}` }}>
            {player.name[0]}
          </span>
        </div>
      )}
      <div className="absolute inset-0 card-scanlines" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      <span
        className="absolute top-4 left-4 rounded-full px-3 py-1 font-pixel text-[9px] tracking-[0.2em] border"
        style={{ color: player.color, borderColor: `${player.color}88`, backgroundColor: "#050505cc" }}
      >
        {player.role}
      </span>
    </div>

    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-white uppercase">{player.name}</h3>
        <Swords className="w-4 h-4" style={{ color: player.color }} />
      </div>
      <p className="mt-1 font-pixel text-[8px] tracking-[0.25em]" style={{ color: `${player.color}bb` }}>
        {player.tag}
      </p>
      <div className="mt-4 flex items-center gap-4 font-pixel text-[9px] tracking-widest text-zinc-500">
        <span>{player.game}</span>
        <span className="text-zinc-700">|</span>
        <span>WR <span style={{ color: player.color }}>{player.wr}</span></span>
        <span className="text-zinc-700">|</span>
        <span>{player.clips} CLIPS</span>
      </div>
    </div>
  </motion.div>
);

export default function Matches() {
  return (
    <section id="matches" data-testid="matches-section" className="relative py-28 sm:py-36 bg-[#070707] border-y border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/10126380/pexels-photo-10126380.jpeg?auto=compress&cs=tinysrgb&w=1600)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <SectionTag index="04" label="The Spotlight" />
            <h2 className="mt-6 font-display uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Matches, <span className="text-neon-cyan glow-cyan">not maybes.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-zinc-400">
            Tell ScoutKrew the role your squad is missing. Matches surfaces players who fit that exact
            slot — ranked, clipped, and ready. Like a character select screen, but for your squad.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-6 lg:gap-8 items-stretch" style={{ perspective: "1200px" }}>
          {PLAYERS.map((player, i) => (
            <PlayerCard key={player.name} player={player} i={i} />
          ))}

          <motion.div
            data-testid="match-card-your-slot"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -14 }}
            className="relative w-64 sm:w-72 shrink-0 rounded-2xl border border-dashed border-zinc-700 bg-transparent flex flex-col items-center justify-center gap-4 min-h-[380px] hover:border-neon-yellow/60 transition-colors duration-300"
          >
            <span className="w-14 h-14 rounded-full border border-neon-yellow/50 bg-neon-yellow/10 flex items-center justify-center">
              <Plus className="w-6 h-6 text-neon-yellow" />
            </span>
            <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-yellow">THIS SLOT IS YOURS</p>
            <p className="text-xs text-zinc-500 text-center px-8">Claim your player card and get scouted.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
