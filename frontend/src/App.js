import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Matches from "@/components/Matches";
import Stats from "@/components/Stats";
import Games from "@/components/Games";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target) => {
    lenisRef.current?.scrollTo(target, { offset: target === 0 ? 0 : -64, duration: 1.6 });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-200 overflow-x-clip">
      <Cursor />
      <div className="crt-overlay" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <Header onNavigate={scrollTo} />
      <main>
        <Hero onNavigate={scrollTo} />
        <MarqueeStrip />
        <Problem />
        <HowItWorks />
        <Features />
        <Matches />
        <Stats />
        <Games />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            border: "1px solid rgba(0, 243, 255, 0.35)",
            color: "#fff",
            fontFamily: "Outfit, sans-serif",
          },
        }}
      />
    </div>
  );
}
