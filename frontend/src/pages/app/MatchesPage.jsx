import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Swords } from "lucide-react";
import Avatar from "@/components/Avatar";
import RoleBadge from "@/components/RoleBadge";
import { USERS, ROLE_COLORS } from "@/data/dummy";

const ROLES = ["ALL", "IGL", "SNIPER", "SUPPORT", "RUSHER"];

export default function MatchesPage() {
  const [role, setRole] = useState("ALL");
  const players = USERS.filter((u) => role === "ALL" || u.role === role);

  return (
    <div data-testid="matches-page">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-pixel text-[9px] tracking-[0.35em] text-neon-cyan">CHARACTER SELECT</p>
        <h1 className="mt-3 font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
          Your <span className="text-neon-magenta glow-magenta">Matches</span>
        </h1>
        <p className="mt-2 text-sm text-zinc-500 max-w-lg">
          Players surfaced by the role your squad is missing. Pick a slot, send an invite.
        </p>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {ROLES.map((r) => (
            <button
              key={r}
              data-testid={`match-filter-${r.toLowerCase()}`}
              onClick={() => setRole(r)}
              className={`shrink-0 rounded-full px-4 py-2 font-pixel text-[8px] tracking-[0.2em] border transition-[background-color,color,border-color,box-shadow] duration-300 ${
                role === r
                  ? "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/60 shadow-[0_0_16px_rgba(0,243,255,0.3)]"
                  : "text-zinc-500 border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player, i) => (
          <motion.div
            key={player.id}
            data-testid={`matches-card-${player.id}`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-[#0a0a0a] border overflow-hidden card-scanlines transition-shadow duration-300"
            style={{ borderColor: `${player.color}44`, boxShadow: `0 0 24px ${player.color}18` }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <Avatar user={player} size="w-16 h-16" showOnline />
                <RoleBadge role={player.role} />
              </div>
              <h3 className="mt-4 font-display text-lg text-white uppercase">{player.name}</h3>
              <p className="mt-1 font-pixel text-[7px] tracking-[0.25em]" style={{ color: `${player.color}bb` }}>
                {player.tag}
              </p>
              <div className="mt-4 flex items-center gap-3 font-pixel text-[8px] tracking-widest text-zinc-500">
                <span>{player.game}</span>
                <span className="text-zinc-700">|</span>
                <span>{player.rank}</span>
                <span className="text-zinc-700">|</span>
                <span>
                  WR <span style={{ color: player.color }}>{player.wr}</span>
                </span>
              </div>
              <div className="mt-5">
                <div className="flex justify-between font-pixel text-[8px] tracking-widest text-zinc-500 mb-2">
                  <span>SQUAD FIT</span>
                  <span style={{ color: player.color }}>{player.fit}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${player.fit}%` }}
                    transition={{ duration: 1.1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: player.color, boxShadow: `0 0 10px ${player.color}` }}
                  />
                </div>
              </div>
            </div>
            <button
              data-testid={`invite-${player.id}`}
              onClick={() => toast.success(`Invite sent to ${player.name}. GLHF.`)}
              className="w-full py-3.5 font-pixel text-[9px] tracking-[0.3em] flex items-center justify-center gap-2 border-t transition-colors duration-300 hover:bg-white/5"
              style={{ color: player.color, borderColor: `${player.color}33` }}
            >
              <Swords className="w-3.5 h-3.5" /> INVITE TO SQUAD
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
