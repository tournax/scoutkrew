import { Gamepad2 } from "lucide-react";

const NAV = [
  { label: "HOW IT WORKS", target: "#how" },
  { label: "FEATURES", target: "#features" },
  { label: "MATCHES", target: "#matches" },
  { label: "GAMES", target: "#games" },
];

export default function Header({ onNavigate }) {
  return (
    <header data-testid="site-header" className="fixed top-0 inset-x-0 z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <button
          data-testid="header-logo"
          onClick={() => onNavigate(0)}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-9 h-9 rounded-xl bg-neon-magenta/10 border border-neon-magenta/40 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(255,0,127,0.5)]">
            <Gamepad2 className="w-5 h-5 text-neon-magenta" />
          </span>
          <span className="font-display text-base sm:text-lg text-white tracking-tight">
            SCOUT<span className="text-neon-magenta">KREW</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <button
              key={item.target}
              data-testid={`nav-link-${item.target.slice(1)}`}
              onClick={() => onNavigate(item.target)}
              className="font-pixel text-[10px] tracking-[0.25em] text-zinc-400 hover:text-neon-cyan transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          data-testid="header-get-started-btn"
          onClick={() => onNavigate("#join")}
          className="rounded-full bg-neon-cyan px-5 sm:px-6 py-2.5 font-pixel text-[10px] tracking-[0.2em] text-black transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(0,243,255,0.65)] active:scale-95"
        >
          GET STARTED
        </button>
      </div>
    </header>
  );
}
