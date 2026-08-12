import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Rocket } from "lucide-react";
import { SectionTag } from "@/components/Reveal";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("That email won't survive the lobby. Try again.");
      return;
    }
    toast.success("You're on the waitlist. See you in the lobby.");
    setEmail("");
  };

  return (
    <section id="join" data-testid="final-cta-section" className="relative py-32 sm:py-44 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 60%, rgba(255,0,127,0.16) 0%, transparent 70%), radial-gradient(ellipse 45% 35% at 50% 40%, rgba(0,243,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center">
            <SectionTag index="07" label="Insert Coin" />
          </div>
          <h2 className="mt-8 font-display uppercase tracking-tight leading-[1.05] text-4xl sm:text-6xl lg:text-7xl text-white" data-testid="final-cta-headline">
            Find your <span className="text-neon-magenta glow-magenta">squad.</span>
            <br />
            Not just players.
          </h2>
          <p className="mt-7 max-w-xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed">
            The doors open soon. Drop your email and be first in the lobby when ScoutKrew goes live.
          </p>

          <form
            onSubmit={submit}
            data-testid="waitlist-form"
            className="mt-12 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="player@yourmail.com"
              data-testid="waitlist-email-input"
              className="flex-1 rounded-full bg-[#0a0a0a]/90 border border-white/10 px-6 py-4 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-neon-cyan/70 focus:shadow-[0_0_24px_rgba(0,243,255,0.25)] transition-[border-color,box-shadow] duration-300"
            />
            <button
              type="submit"
              data-testid="waitlist-submit-btn"
              className="rounded-full bg-neon-magenta px-8 py-4 font-pixel text-[11px] tracking-[0.2em] text-white flex items-center justify-center gap-2.5 transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(255,0,127,0.7)] active:scale-95"
            >
              <Rocket className="w-4 h-4" />
              JOIN WAITLIST
            </button>
          </form>
          <p className="mt-6 font-pixel text-[8px] sm:text-[9px] tracking-[0.3em] text-zinc-600" data-testid="waitlist-note">
            NO SPAM. JUST YOUR INVITE WHEN THE DOORS OPEN.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
