import { NavLink, Outlet, Link } from "react-router-dom";
import { Gamepad2, Home, Compass, MessageSquare, Swords, User, Bell } from "lucide-react";
import Avatar from "@/components/Avatar";
import { ME } from "@/data/dummy";

const TABS = [
  { to: "/app/home", icon: Home, label: "HOME", testId: "tab-home" },
  { to: "/app/explore", icon: Compass, label: "EXPLORE", testId: "tab-explore" },
  { to: "/app/chat", icon: MessageSquare, label: "CHAT", testId: "tab-chat" },
  { to: "/app/matches", icon: Swords, label: "MATCHES", testId: "tab-matches" },
  { to: "/app/profile", icon: User, label: "PROFILE", testId: "tab-profile" },
];

export default function AppLayout() {
  return (
    <div data-testid="app-shell" className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" data-testid="app-logo" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-neon-magenta/10 border border-neon-magenta/40 flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-neon-magenta" />
            </span>
            <span className="font-display text-sm sm:text-base text-white">
              SCOUT<span className="text-neon-magenta">KREW</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              data-testid="app-notifications-btn"
              className="relative w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-[color,border-color] duration-300"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-neon-magenta shadow-[0_0_6px_rgba(255,0,127,0.9)]" />
            </button>
            <Link to="/app/profile" data-testid="app-avatar-link">
              <Avatar user={ME} size="w-9 h-9" showOnline />
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <nav data-testid="app-bottom-nav" className="fixed bottom-5 inset-x-0 z-40 flex justify-center px-4">
        <div className="rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 px-2 py-2 flex gap-1 shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              data-testid={tab.testId}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 font-pixel text-[9px] tracking-[0.15em] transition-[background-color,color,box-shadow] duration-300 ${
                  isActive
                    ? "bg-neon-cyan text-black shadow-[0_0_22px_rgba(0,243,255,0.5)]"
                    : "text-zinc-500 hover:text-white"
                }`
              }
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
