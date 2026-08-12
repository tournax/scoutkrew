import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import Hero3D from "@/components/Hero3D";

const LINES = [
  { text: "FIND YOUR", cls: "text-white" },
  { text: "SQUAD.", cls: "text-neon-magenta glow-magenta" },
  { text: "NOT JUST PLAYERS.", cls: "text-white" },
];

export default function Hero({ onNavigate, onGetStarted }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <section id="hero" ref={ref} data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 z-0">
        <Hero3D />
      </motion.div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#050505]/85 via-[#050505]/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-pixel text-[10px] sm:text-xs tracking-[0.4em] text-neon-cyan mb-8 flex items-center gap-3"
          data-testid="hero-overline"
        >
          <span className="inline-block w-8 h-px bg-neon-cyan shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
          PLAYER-CONNECTION PLATFORM
        </motion.p>

        <h1 className="font-display uppercase tracking-tight leading-[1.02] text-[11vw] sm:text-6xl lg:text-7xl xl:text-8xl" data-testid="hero-headline">
          {LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${line.cls}`}
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400"
          data-testid="hero-subtext"
        >
          Random lobbies hand you randoms — and a bio full of claims nobody can verify.
          ScoutKrew matches you with teammates whose <span className="text-zinc-100">clips prove their gameplay</span>,
          slotted by the role your squad actually needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <button
            data-testid="hero-get-started-btn"
            onClick={onGetStarted}
            className="group rounded-full bg-neon-cyan px-8 py-4 font-pixel text-xs tracking-[0.2em] text-black flex items-center gap-3 transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(0,243,255,0.7)] active:scale-95"
          >
            <Zap className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            GET STARTED
          </button>
          <button
            data-testid="hero-how-link"
            onClick={() => onNavigate("#how")}
            className="font-pixel text-[10px] tracking-[0.25em] text-zinc-400 hover:text-neon-magenta transition-colors duration-300 flex items-center gap-2"
          >
            HOW IT WORKS
            <ChevronDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-6 sm:left-10 z-10 font-pixel text-[9px] sm:text-[10px] tracking-[0.35em] text-zinc-500 flex items-center gap-3"
        data-testid="hero-insert-coin"
      >
        <span className="w-2 h-2 bg-neon-yellow animate-blink shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
        INSERT COIN · SCROLL TO CONTINUE
      </motion.div>
    </section>
  );
}
