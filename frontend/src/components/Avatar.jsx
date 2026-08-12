export default function Avatar({ user, size = "w-10 h-10", showOnline = false }) {
  return (
    <span className={`relative inline-block shrink-0 ${size}`}>
      {user.img ? (
        <img
          src={user.img}
          alt={user.name}
          loading="lazy"
          className={`${size} rounded-full object-cover border`}
          style={{ borderColor: `${user.color}66` }}
        />
      ) : (
        <span
          className={`${size} rounded-full flex items-center justify-center font-display text-sm border`}
          style={{ borderColor: `${user.color}66`, backgroundColor: `${user.color}14`, color: user.color }}
        >
          {user.name[0]}
        </span>
      )}
      {showOnline && user.online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-neon-green border-2 border-[#050505] shadow-[0_0_8px_rgba(57,255,20,0.9)]" />
      )}
    </span>
  );
}
