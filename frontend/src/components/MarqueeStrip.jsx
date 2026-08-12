import Marquee from "react-fast-marquee";

const ITEMS = [
  "SQUAD UP",
  "CLIP-BASED PROFILES",
  "ROLE-BASED MATCHMAKING",
  "PROVE IT IN CLIPS",
  "FREE FIRE",
  "BGMI",
  "COD MOBILE",
  "VALORANT",
];

export default function MarqueeStrip() {
  return (
    <div
      data-testid="marquee-strip"
      className="relative border-y border-neon-magenta/20 bg-[#070707] py-5 overflow-hidden"
    >
      <Marquee speed={32} gradient={false} pauseOnHover>
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="mx-10 font-pixel text-[10px] sm:text-xs tracking-[0.35em] text-zinc-500 flex items-center"
          >
            {item}
            <span className="ml-20 text-neon-magenta text-[8px]">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
