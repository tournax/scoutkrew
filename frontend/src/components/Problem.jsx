import { motion } from "framer-motion";
import { VideoOff, Users, MessageSquareOff } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";

const PAINS = [
  {
    icon: VideoOff,
    color: "#FF007F",
    title: "No gameplay proof",
    text: "Anyone can type a rank into a bio. Without clips, you're trusting complete strangers blind.",
    testId: "pain-no-proof",
  },
  {
    icon: Users,
    color: "#00F3FF",
    title: "Mismatched skill levels",
    text: "Diamond IGL queued with bronze fraggers. Random lobbies burn everyone's night.",
    testId: "pain-mismatched",
  },
  {
    icon: MessageSquareOff,
    color: "#39FF14",
    title: "No real channel to connect",
    text: "Dead Discord servers and ghosted DMs. Nothing out there is built for finding squads.",
    testId: "pain-no-channel",
  },
];

export default function Problem() {
  return (
    <section id="problem" data-testid="problem-section" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <SectionTag index="01" label="The Problem" />
          <h2 className="mt-6 font-display uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl leading-tight">
            Struggling to find <span className="text-neon-magenta glow-magenta">real teammates?</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAINS.map((pain, i) => (
            <motion.div
              key={pain.title}
              data-testid={pain.testId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-[#0a0a0a] border border-white/5 p-8 sm:p-10 card-scanlines transition-[border-color,box-shadow] duration-300"
              style={{ "--glow": pain.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${pain.color}55`;
                e.currentTarget.style.boxShadow = `0 0 32px ${pain.color}26`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center border"
                style={{ borderColor: `${pain.color}66`, backgroundColor: `${pain.color}14` }}
              >
                <pain.icon className="w-5 h-5" style={{ color: pain.color }} />
              </span>
              <h3 className="mt-6 font-display text-lg sm:text-xl text-white uppercase tracking-tight">
                {pain.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400">{pain.text}</p>
              <span
                className="absolute top-6 right-8 font-pixel text-[10px] tracking-widest"
                style={{ color: `${pain.color}88` }}
              >
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
