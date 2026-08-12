import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Mail, Gamepad2 } from "lucide-react";
import OrbsBg from "@/components/OrbsBg";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const enter = (e) => {
    e?.preventDefault();
    navigate("/app/home");
  };

  return (
    <div data-testid="auth-page" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      <div className="absolute inset-0 z-0">
        <OrbsBg />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[#050505]/55" />

      <Link
        to="/"
        data-testid="auth-back-link"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 font-pixel text-[9px] tracking-[0.3em] text-zinc-500 hover:text-neon-cyan transition-colors duration-300"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ARCADE
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-[#0a0a0a]/85 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-[0_0_60px_rgba(255,0,127,0.12)]"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-xl bg-neon-magenta/10 border border-neon-magenta/40 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-neon-magenta" />
          </span>
          <span className="font-display text-lg text-white">
            SCOUT<span className="text-neon-magenta">KREW</span>
          </span>
        </div>

        <p className="mt-8 font-pixel text-[9px] tracking-[0.35em] text-neon-cyan flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-neon-yellow animate-blink" /> INSERT COIN
        </p>
        <h1 className="mt-3 font-display text-2xl sm:text-3xl text-white uppercase tracking-tight" data-testid="auth-title">
          {mode === "login" ? "Player Login" : "New Player"}
        </h1>

        <button
          data-testid="auth-google-btn"
          onClick={() => enter()}
          className="mt-8 w-full rounded-full bg-white text-black py-3.5 flex items-center justify-center gap-3 text-sm font-semibold transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)] active:scale-[0.98]"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-4">
          <span className="flex-1 h-px bg-white/10" />
          <span className="font-pixel text-[8px] tracking-[0.3em] text-zinc-600">OR</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <form onSubmit={enter} className="space-y-3.5">
          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="email"
              placeholder="player@yourmail.com"
              data-testid="auth-email-input"
              className="w-full rounded-full bg-[#050505] border border-white/10 pl-12 pr-5 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-neon-cyan/70 focus:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-[border-color,box-shadow] duration-300"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="password"
              placeholder="Password"
              data-testid="auth-password-input"
              className="w-full rounded-full bg-[#050505] border border-white/10 pl-12 pr-5 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-neon-cyan/70 focus:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-[border-color,box-shadow] duration-300"
            />
          </div>
          <button
            type="submit"
            data-testid="auth-submit-btn"
            className="w-full rounded-full bg-neon-cyan py-4 font-pixel text-[11px] tracking-[0.25em] text-black transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(0,243,255,0.65)] active:scale-[0.98]"
          >
            {mode === "login" ? "PRESS START" : "CREATE PLAYER"}
          </button>
        </form>

        <p className="mt-7 text-center text-xs text-zinc-500">
          {mode === "login" ? "New player?" : "Already got a card?"}{" "}
          <button
            data-testid="auth-toggle-mode"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-neon-magenta hover:text-neon-cyan transition-colors duration-300 font-semibold"
          >
            {mode === "login" ? "Create account" : "Log in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
