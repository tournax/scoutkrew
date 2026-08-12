import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Avatar from "@/components/Avatar";
import ClipThumb from "@/components/ClipThumb";
import { CLIPS, userById } from "@/data/dummy";

const GAMES = ["ALL", "FREE FIRE", "BGMI", "COD MOBILE", "VALORANT"];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [game, setGame] = useState("ALL");

  const clips = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CLIPS.filter((clip) => {
      const user = userById(clip.userId);
      const gameOk = game === "ALL" || clip.game === game;
      const qOk = !q || clip.title.toLowerCase().includes(q) || user.name.toLowerCase().includes(q);
      return gameOk && qOk;
    });
  }, [query, game]);

  return (
    <div data-testid="explore-page">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
          Explore <span className="text-neon-cyan glow-cyan">Clips</span>
        </h1>

        <div className="relative mt-6 max-w-xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search clips or players..."
            data-testid="explore-search-input"
            className="w-full rounded-full bg-[#0a0a0a] border border-white/10 pl-12 pr-5 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-neon-cyan/70 focus:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-[border-color,box-shadow] duration-300"
          />
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {GAMES.map((g) => (
            <button
              key={g}
              data-testid={`explore-chip-${g.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setGame(g)}
              className={`shrink-0 rounded-full px-4 py-2 font-pixel text-[8px] tracking-[0.2em] border transition-[background-color,color,border-color,box-shadow] duration-300 ${
                game === g
                  ? "bg-neon-magenta/15 text-neon-magenta border-neon-magenta/60 shadow-[0_0_16px_rgba(255,0,127,0.3)]"
                  : "text-zinc-500 border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </motion.div>

      {clips.length === 0 ? (
        <p className="mt-20 text-center font-pixel text-[10px] tracking-[0.3em] text-zinc-600" data-testid="explore-empty">
          NO CLIPS FOUND — TRY ANOTHER COMBO
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip, i) => {
            const user = userById(clip.userId);
            return (
              <motion.div
                key={clip.id}
                data-testid={`explore-clip-${clip.id}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.4) }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-white/15"
              >
                <ClipThumb clip={clip} className="aspect-video" />
                <div className="p-4 flex items-start gap-3">
                  <Avatar user={user} size="w-9 h-9" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug line-clamp-2">{clip.title}</p>
                    <p className="mt-1.5 font-pixel text-[7px] tracking-[0.2em] text-zinc-600">
                      {user.name.toUpperCase()} · {clip.views} VIEWS · {clip.likes} LIKES
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
