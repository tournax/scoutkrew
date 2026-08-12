import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 z-[95] w-4 h-4 rounded-full bg-neon-cyan pointer-events-none mix-blend-screen shadow-[0_0_16px_rgba(0,243,255,0.9)] hidden md:block"
    />
  );
}
