import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share, Menu, Gamepad2 } from "lucide-react";

export default function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [deferred, setDeferred] = useState(null);
  const [showHow, setShowHow] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const dismissed = localStorage.getItem("sk-install-dismissed");
    if (standalone || !mobile || dismissed) return;

    const onPrompt = (e) => {
      e.preventDefault();
      setDeferred(e);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("sk-install-dismissed", "1");
  };

  const install = async () => {
    if (deferred) {
      deferred.prompt();
      const { outcome } = await deferred.userChoice;
      if (outcome === "accepted") dismiss();
      setDeferred(null);
    } else {
      setShowHow((s) => !s);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="install-prompt"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 inset-x-4 z-[90] md:hidden"
        >
          <div className="relative rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-neon-cyan/40 shadow-[0_0_36px_rgba(0,243,255,0.18)] p-4 card-scanlines overflow-hidden">
            <div className="flex items-start gap-3">
              <span className="w-11 h-11 rounded-xl bg-neon-magenta/10 border border-neon-magenta/50 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(255,0,127,0.3)]">
                <Gamepad2 className="w-5 h-5 text-neon-magenta" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-pixel text-[9px] tracking-[0.25em] text-neon-cyan flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neon-yellow animate-blink" />
                  ADD TO HOME SCREEN
                </p>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  Pin ScoutKrew and jump into the lobby like a real app.
                </p>
              </div>
              <button
                data-testid="install-dismiss-btn"
                onClick={dismiss}
                aria-label="Dismiss install banner"
                className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <button
              data-testid="install-action-btn"
              onClick={install}
              className="mt-3.5 w-full rounded-full bg-neon-cyan py-3 font-pixel text-[10px] tracking-[0.25em] text-black flex items-center justify-center gap-2.5 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(0,243,255,0.6)] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              {deferred ? "INSTALL SCOUTKREW" : "HOW TO INSTALL"}
            </button>

            {showHow && !deferred && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
                data-testid="install-howto"
              >
                <div className="mt-3 rounded-xl bg-white/5 border border-white/10 p-3.5 space-y-2.5">
                  <p className="text-[11px] text-zinc-400 flex items-center gap-2">
                    <Share className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                    iPhone: Share <span className="text-zinc-600">→</span> "Add to Home Screen"
                  </p>
                  <p className="text-[11px] text-zinc-400 flex items-center gap-2">
                    <Menu className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                    Android: Browser menu <span className="text-zinc-600">→</span> "Add to Home screen"
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
