import { Gamepad2, Twitter, Youtube, Twitch } from "lucide-react";

const LINKS = ["About", "Privacy", "Terms", "Contact"];
const SOCIALS = [
  { icon: Twitter, testId: "social-twitter", label: "Twitter" },
  { icon: Youtube, testId: "social-youtube", label: "YouTube" },
  { icon: Twitch, testId: "social-twitch", label: "Twitch" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/5 bg-[#050505]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-neon-magenta/10 border border-neon-magenta/40 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-neon-magenta" />
            </span>
            <span className="font-display text-lg text-white tracking-tight">
              SCOUT<span className="text-neon-magenta">KREW</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link}
                href="#"
                data-testid={`footer-link-${link.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-neon-cyan transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.testId}
                href="#"
                aria-label={social.label}
                data-testid={social.testId}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_16px_rgba(0,243,255,0.35)] transition-[color,border-color,box-shadow] duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© 2026 ScoutKrew. All rights reserved.</p>
          <p className="font-pixel text-[8px] tracking-[0.3em] text-zinc-700">MADE FOR THE GRIND · PLAYER 2 WELCOME</p>
        </div>
      </div>
    </footer>
  );
}
