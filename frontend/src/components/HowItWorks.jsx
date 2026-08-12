import { motion } from "framer-motion";
import { Reveal, SectionTag } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    color: "#FF007F",
    title: "Create Profile",
    text: "Pick your game, lock in your role — IGL, Sniper, Support — and set your rank. Your profile is your player card.",
  },
  {
    n: "02",
    color: "#00F3FF",
    title: "Post Clips",
    text: "Upload your best plays. Your clip feed is your resume — real skill anyone can watch, not a rank you typed.",
  },
  {
    n: "03",
    color: "#39FF14",
    title: "Get Matched by Role",
    text: "ScoutKrew surfaces teammates who fill the exact slot your squad is missing. No more coin-flip lobbies.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" data-testid="how-it-works-section" className="relative py-28 sm:py-36 bg-[#070707] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <SectionTag index="02" label="How It Works" />
          <h2 className="mt-6 font-display uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Three steps to <span className="text-neon-cyan glow-cyan">squad up</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-16 sm:space-y-20">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              data-testid={`step-${step.n}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12 ${
                i % 2 === 1 ? "sm:ml-24 lg:ml-40" : ""
              }`}
            >
              <span
                className="font-pixel text-7xl sm:text-8xl lg:text-9xl leading-none select-none shrink-0"
                style={{ WebkitTextStroke: `2px ${step.color}`, color: "transparent" }}
              >
                {step.n}
              </span>
              <div className="sm:pt-4">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-zinc-400">{step.text}</p>
                <div className="mt-5 h-px w-24" style={{ backgroundColor: `${step.color}66`, boxShadow: `0 0 10px ${step.color}66` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
