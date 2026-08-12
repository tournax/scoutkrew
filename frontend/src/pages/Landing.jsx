import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "lenis";
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

export default function Landing() {
  const lenisRef = useRef(null);
  const navigate = useNavigate();

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

  const goToAuth = () => navigate("/auth");

  return (
    <>
      <Header onNavigate={scrollTo} onGetStarted={goToAuth} />
      <main>
        <Hero onNavigate={scrollTo} onGetStarted={goToAuth} />
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
    </>
  );
}
