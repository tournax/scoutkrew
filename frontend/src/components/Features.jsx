import { motion } from "framer-motion";
import { Clapperboard, Sparkles, Crosshair, MessageSquare, BadgeCheck, Play } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";

const Card = ({ testId, color, icon: Icon, title, text, className = "", children, delay = 0 }) => (
  <motion.div
    data-testid={testId}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8 }}
    className={`group relative rounded-2xl bg-[#0a0a0a] border border-white/5 p-8 overflow-hidden card-scanlines transition-[border-color,box-shadow] duration-300 hover:border-[var(--c)] hover:shadow-[0_0_36px_var(--g)] ${className}`}
    style={{ "--c": `${color}55`, "--g": `${color}22` }}
  >
    <span
      className="w-11 h-11 rounded-full flex items-center justify-center border"
      style={{ borderColor: `${color}66`, backgroundColor: `${color}14` }}
    >
      <Icon className="w-5 h-5" style={{ color }} />
    </span>
    <h3 className="mt-6 font-display text-lg uppercase tracking-tight text-white">{title}</h3>
    <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{text}</p>
    {children}
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <SectionTag index="03" label="The Loadout" />
          <h2 className="mt-6 font-display uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight max-w-3xl">
            Built for the <span className="text-neon-yellow" style={{ textShadow: "0 0 18px rgba(255,215,0,0.5)" }}>grind</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-6">
          <Card
            testId="feature-clips-feed"
            color="#FF007F"
            icon={Clapperboard}
            title="Clips Feed"
            text="A scrollable feed of real plays. Judge skill with your own eyes before you ever send an invite."
            className="md:col-span-4"
          >
            <div className="mt-7 grid grid-cols-2 gap-3 max-w-md">
              {["#FF007F", "#00F3FF"].map((c, i) => (
                <div key={c} className="rounded-xl border border-white/10 bg-[#050505] aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 card-scanlines" />
                  <span className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: `${c}88`, backgroundColor: `${c}1a` }}>
                    <Play className="w-3.5 h-3.5 ml-0.5" style={{ color: c }} fill={c} />
                  </span>
                  <span className="absolute bottom-2 left-3 font-pixel text-[8px] tracking-widest" style={{ color: c }}>
                    CLIP_0{i + 1}.MP4
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            testId="feature-smart-matching"
            color="#00F3FF"
            icon={Sparkles}
            title="Smart Matching"
            text="Matches weighted by role, rank, and playstyle — not whoever happened to be online."
            className="md:col-span-2"
            delay={0.1}
          >
            <div className="mt-7">
              <div className="flex justify-between font-pixel text-[9px] tracking-widest text-zinc-500 mb-2">
                <span>SQUAD FIT</span>
                <span className="text-neon-cyan">98%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
                  className="h-full rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,243,255,0.8)]"
                />
              </div>
            </div>
          </Card>

          <Card
            testId="feature-role-matchmaking"
            color="#39FF14"
            icon={Crosshair}
            title="Role-Based Matchmaking"
            text="Need an IGL who actually calls? A support who stays alive? Filter by the slot, not the shuffle."
            className="md:col-span-2"
          >
            <div className="mt-7 flex flex-wrap gap-2">
              {["IGL", "SNIPER", "SUPPORT", "RUSHER"].map((r) => (
                <span key={r} className="rounded-full border border-neon-green/40 bg-neon-green/10 px-3 py-1 font-pixel text-[9px] tracking-widest text-neon-green">
                  {r}
                </span>
              ))}
            </div>
          </Card>

          <Card
            testId="feature-chat"
            color="#FFD700"
            icon={MessageSquare}
            title="Chat"
            text="Talk strats, share clips, and lock in your next session without leaving the app."
            className="md:col-span-2"
            delay={0.1}
          >
            <div className="mt-7 space-y-2.5">
              <div className="rounded-2xl rounded-bl-sm bg-white/5 border border-white/10 px-4 py-2 text-xs text-zinc-300 w-fit">
                you online tonight?
              </div>
              <div className="rounded-2xl rounded-br-sm bg-neon-yellow/10 border border-neon-yellow/30 px-4 py-2 text-xs text-neon-yellow w-fit ml-auto">
                always. 9pm lobby.
              </div>
            </div>
          </Card>

          <Card
            testId="feature-verified"
            color="#FF007F"
            icon={BadgeCheck}
            title="Verified Player Profiles"
            text="Clip-backed profiles mean the rank on the card is the rank in the game."
            className="md:col-span-2"
            delay={0.2}
          >
            <div className="mt-7 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-neon-magenta/15 border border-neon-magenta/50 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-neon-magenta" />
              </span>
              <div>
                <p className="font-pixel text-[9px] tracking-widest text-neon-magenta">VERIFIED</p>
                <p className="text-xs text-zinc-500 mt-0.5">12 clips · rank confirmed</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
