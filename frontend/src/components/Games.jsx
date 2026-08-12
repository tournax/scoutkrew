import { motion } from "framer-motion";
import { Crosshair, Flame, Target, Bomb } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";

const GAMES = [
  { name: "FREE FIRE", genre: "BATTLE ROYALE", icon: Flame, color: "#FFD700", testId: "game-free-fire" },
  { name: "BGMI", genre: "BATTLE ROYALE", icon: Crosshair, color: "#39FF14", testId: "game-bgmi" },
  { name: "COD MOBILE", genre: "FPS", icon: Target, color: "#00F3FF", testId: "game-codm" },
  { name: "VALORANT", genre: "TACTICAL FPS", icon: Bomb, color: "#FF007F", testId: "game-valorant" },
];

export default function Games() {
  return (
    <section id="games" data-testid="games-section" className="relative py-24 sm:py-32 bg-[#070707] border-y border-dashed border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <SectionTag index="06" label="Select Your Game" />
            <h2 className="mt-6 font-display uppercase text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              Pick your <span className="text-neon-green" style={{ textShadow: "0 0 18px rgba(57,255,20,0.5)" }}>arena</span>
            </h2>
          </div>
          <p className="font-pixel text-[9px] sm:text-[10px] tracking-[0.3em] text-zinc-600">MORE TITLES LOADING...</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              data-testid={game.testId}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-[#0a0a0a] border border-white/5 p-7 sm:p-9 flex flex-col items-start gap-5 card-scanlines transition-[border-color,box-shadow] duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${game.color}66`;
                e.currentTarget.style.boxShadow = `0 0 32px ${game.color}26`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <span
                className="w-11 h-11 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: `${game.color}66`, backgroundColor: `${game.color}14` }}
              >
                <game.icon className="w-5 h-5" style={{ color: game.color }} />
              </span>
              <div>
                <h3 className="font-display text-base sm:text-lg text-white">{game.name}</h3>
                <p className="mt-1.5 font-pixel text-[8px] sm:text-[9px] tracking-[0.25em]" style={{ color: `${game.color}aa` }}>
                  {game.genre}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
