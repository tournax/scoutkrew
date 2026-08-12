import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { SectionTag } from "@/components/Reveal";

const CountUp = ({ to, suffix = "", color }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} style={{ color, textShadow: `0 0 24px ${color}88` }}>
      {val}
      {suffix}
    </span>
  );
};

const STATS = [
  { value: 10, suffix: "K+", label: "PLAYERS WAITLISTED", color: "#FF007F" },
  { value: 5, suffix: "K+", label: "MATCHES MADE", color: "#00F3FF" },
  { value: 4, suffix: "", label: "GAMES SUPPORTED", color: "#39FF14" },
  { value: 24, suffix: "/7", label: "LOBBIES OPEN", color: "#FFD700" },
];

export default function Stats() {
  return (
    <section id="stats" data-testid="stats-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTag index="05" label="The Scoreboard" />
        </motion.div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#080808] p-8 sm:p-12 card-scanlines"
            >
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl">
                <CountUp to={stat.value} suffix={stat.suffix} color={stat.color} />
              </p>
              <p className="mt-4 font-pixel text-[9px] sm:text-[10px] tracking-[0.3em] text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
