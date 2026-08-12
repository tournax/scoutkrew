import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import Avatar from "@/components/Avatar";
import RoleBadge from "@/components/RoleBadge";
import { CONVERSATIONS, userById } from "@/data/dummy";

export default function Chat() {
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id);
  const [showList, setShowList] = useState(true);
  const [threads, setThreads] = useState(() =>
    Object.fromEntries(CONVERSATIONS.map((c) => [c.id, c.messages]))
  );
  const [draft, setDraft] = useState("");
  const bottomRef = useRef(null);

  const active = CONVERSATIONS.find((c) => c.id === activeId);
  const activeUser = userById(active.userId);
  const messages = threads[activeId];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, activeId]);

  const openChat = (id) => {
    setActiveId(id);
    setShowList(false);
  };

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setThreads((prev) => ({
      ...prev,
      [activeId]: [...prev[activeId], { from: "me", text, t: "NOW" }],
    }));
    setDraft("");
  };

  return (
    <div data-testid="chat-page">
      <h1 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
        Squad <span className="text-neon-yellow">Chat</span>
      </h1>

      <div className="mt-6 grid md:grid-cols-[300px,1fr] gap-5 md:h-[calc(100vh-240px)] md:min-h-[480px]">
        <aside
          className={`${showList ? "block" : "hidden md:block"} rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden card-scanlines`}
        >
          <p className="px-5 pt-5 pb-3 font-pixel text-[8px] tracking-[0.3em] text-zinc-600">INCOMING TRANSMISSIONS</p>
          <div className="divide-y divide-white/5">
            {CONVERSATIONS.map((convo) => {
              const user = userById(convo.userId);
              const lastMsg = convo.messages[convo.messages.length - 1];
              return (
                <button
                  key={convo.id}
                  data-testid={`chat-thread-${convo.id}`}
                  onClick={() => openChat(convo.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-200 hover:bg-white/5 ${
                    activeId === convo.id ? "bg-white/5" : ""
                  }`}
                >
                  <Avatar user={user} size="w-11 h-11" showOnline />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white truncate">{user.name}</span>
                      <span className="font-pixel text-[7px] text-zinc-600 shrink-0">{convo.time}</span>
                    </div>
                    <p className="text-xs text-zinc-500 truncate mt-0.5">{lastMsg.text}</p>
                  </div>
                  {convo.unread > 0 && (
                    <span className="shrink-0 w-5 h-5 rounded-full bg-neon-magenta text-white font-pixel text-[8px] flex items-center justify-center shadow-[0_0_10px_rgba(255,0,127,0.7)]">
                      {convo.unread}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        <section
          className={`${showList ? "hidden md:flex" : "flex"} flex-col rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden`}
        >
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-[#080808]">
            <button
              data-testid="chat-back-btn"
              onClick={() => setShowList(true)}
              className="md:hidden text-zinc-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Avatar user={activeUser} size="w-10 h-10" showOnline />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">{activeUser.name}</span>
                <RoleBadge role={activeUser.role} />
              </div>
              <p className="font-pixel text-[7px] tracking-[0.25em] text-zinc-600 mt-0.5">
                {activeUser.online ? "ONLINE NOW" : "OFFLINE"} · {activeUser.game}
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-[320px] card-scanlines" data-testid="chat-messages">
            {messages.map((msg, i) => {
              const mine = msg.from === "me";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${mine ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      mine
                        ? "rounded-br-sm bg-neon-cyan/15 border border-neon-cyan/40"
                        : "rounded-bl-sm bg-white/5 border border-white/10"
                    }`}
                  >
                    <p className={`text-sm ${mine ? "text-neon-cyan" : "text-zinc-200"}`}>{msg.text}</p>
                    <p className="mt-1 font-pixel text-[6px] tracking-[0.2em] text-zinc-600 text-right">{msg.t}</p>
                  </div>
                </motion.div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={send} className="p-4 border-t border-white/5 flex items-center gap-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Message ${activeUser.name}...`}
              data-testid="chat-message-input"
              className="flex-1 rounded-full bg-[#050505] border border-white/10 px-5 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-neon-cyan/70 transition-colors duration-300"
            />
            <button
              type="submit"
              data-testid="chat-send-btn"
              className="w-11 h-11 rounded-full bg-neon-cyan flex items-center justify-center text-black transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
