import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionTag = ({ index, label }) => (
  <p
    data-testid={`section-tag-${index}`}
    className="font-pixel text-[10px] sm:text-xs tracking-[0.35em] uppercase text-neon-cyan"
  >
    Chapter {index} <span className="text-zinc-700">//</span>{" "}
    <span className="text-neon-magenta">{label}</span>
  </p>
);
