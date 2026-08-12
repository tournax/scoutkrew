import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Avatar from "@/components/Avatar";
import RoleBadge from "@/components/RoleBadge";
import ClipThumb from "@/components/ClipThumb";
import { ME, USERS, CLIPS, userById } from "@/data/dummy";

export default function Home() {
  const online = [ME, ...USERS.filter((u) => u.online)];

  return (
    <div data-testid="home-page" className="max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-pixel text-[9px] tracking-[0.35em] text-neon-green flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-blink" /> SQUAD ONLINE
        </p>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {online.map((user) => (
            <button key={user.id} data-testid={`online-${user.id}`} className="flex flex-col items-center gap-1.5 shrink-0 group">
              <span className="transition-transform duration-300 group-hover:scale-110">
                <Avatar user={user} size="w-14 h-14" showOnline />
              </span>
              <span className="font-pixel text-[7px] tracking-widest text-zinc-500">{user.name.slice(0, 8).toUpperCase()}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <h1 className="mt-8 font-display text-xl sm:text-2xl text-white uppercase tracking-tight" data-testid="home-feed-title">
        Clips <span className="text-neon-magenta">Feed</span>
      </h1>

      <div className="mt-6 space-y-6">
        {CLIPS.map((clip, i) => {
          const user = userById(clip.userId);
          return (
            <motion.article
              key={clip.id}
              data-testid={`feed-clip-${clip.id}`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-white/15 hover:shadow-[0_0_36px_rgba(255,0,127,0.08)]"
            >
              <div className="flex items-center gap-3 p-4">
                <Avatar user={user} size="w-10 h-10" showOnline />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white truncate">{user.name}</span>
                    <RoleBadge role={user.role} />
                  </div>
                  <p className="font-pixel text-[7px] tracking-[0.25em] text-zinc-600 mt-1">
                    {user.game} · {user.rank}
                  </p>
                </div>
              </div>

              <ClipThumb clip={clip} className="aspect-video" />

              <div className="p-4">
                <div className="flex items-center gap-5 text-zinc-400">
                  <button data-testid={`like-${clip.id}`} className="flex items-center gap-1.5 text-xs hover:text-neon-magenta transition-colors duration-200">
                    <Heart className="w-4 h-4" /> {clip.likes}
                  </button>
                  <button data-testid={`comment-${clip.id}`} className="flex items-center gap-1.5 text-xs hover:text-neon-cyan transition-colors duration-200">
                    <MessageCircle className="w-4 h-4" /> {clip.comments}
                  </button>
                  <button data-testid={`share-${clip.id}`} className="flex items-center gap-1.5 text-xs hover:text-neon-green transition-colors duration-200 ml-auto">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-3 text-sm text-zinc-300">
                  <span className="font-semibold text-white">{user.name}</span> {clip.title}
                </p>
                <p className="mt-1 font-pixel text-[7px] tracking-[0.25em] text-zinc-600">{clip.views} VIEWS</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
