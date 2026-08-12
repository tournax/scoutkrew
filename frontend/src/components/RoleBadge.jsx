import { ROLE_COLORS } from "@/data/dummy";

export default function RoleBadge({ role, className = "" }) {
  const c = ROLE_COLORS[role] || "#00F3FF";
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 font-pixel text-[8px] tracking-[0.2em] border ${className}`}
      style={{ color: c, borderColor: `${c}77`, backgroundColor: `${c}12` }}
    >
      {role}
    </span>
  );
}
