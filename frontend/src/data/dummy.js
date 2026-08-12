export const ROLE_COLORS = {
  IGL: "#FF007F",
  SNIPER: "#00F3FF",
  SUPPORT: "#39FF14",
  RUSHER: "#FFD700",
};

export const ME = {
  id: "me",
  name: "ProGamer_07",
  role: "IGL",
  game: "BGMI",
  rank: "DIAMOND II",
  color: "#FF007F",
  wr: "64%",
  clips: 18,
  followers: "1.2K",
  following: 86,
  img: null,
  online: true,
};

export const USERS = [
  {
    id: "u1", name: "VenomX", role: "IGL", game: "BGMI", rank: "ACE", wr: "68%", clips: 14,
    color: "#FF007F", tag: "CALLS THE ROTATES", online: true, fit: 98,
    img: "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "u2", name: "ScopeQueen", role: "SNIPER", game: "VALORANT", rank: "IMMORTAL", wr: "61%", clips: 22,
    color: "#00F3FF", tag: "ONE TAP, ONE LESS", online: true, fit: 94,
    img: "https://images.pexels.com/photos/9072320/pexels-photo-9072320.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  { id: "u3", name: "MedicMain", role: "SUPPORT", game: "FREE FIRE", rank: "HEROIC", wr: "72%", clips: 9, color: "#39FF14", tag: "NEVER LETS YOU BLEED OUT", online: false, fit: 91, img: null },
  { id: "u4", name: "RushBaba", role: "RUSHER", game: "COD MOBILE", rank: "LEGENDARY", wr: "59%", clips: 31, color: "#FFD700", tag: "FIRST IN, LAST STANDING", online: true, fit: 88, img: null },
  { id: "u5", name: "ClutchGod", role: "IGL", game: "VALORANT", rank: "RADIANT", wr: "66%", clips: 17, color: "#FF007F", tag: "1V5 IS A WARMUP", online: false, fit: 85, img: null },
  { id: "u6", name: "ShadowOP", role: "SNIPER", game: "BGMI", rank: "CONQUEROR", wr: "63%", clips: 26, color: "#00F3FF", tag: "SCOPE STAYS STILL", online: true, fit: 82, img: null },
];

export const userById = (id) => (id === "me" ? ME : USERS.find((u) => u.id === id));

export const CLIPS = [
  { id: "c1", userId: "u1", title: "4v1 clutch at Pochinki — zone closing", game: "BGMI", views: "12.4K", likes: "2.1K", comments: 84, dur: "0:42", color: "#FF007F", img: null, mine: false },
  { id: "c2", userId: "u2", title: "Operator ace on Ascent, no scope only", game: "VALORANT", views: "9.8K", likes: "1.8K", comments: 62, dur: "0:38", color: "#00F3FF", img: "https://images.pexels.com/photos/10126380/pexels-photo-10126380.jpeg?auto=compress&cs=tinysrgb&w=800", mine: false },
  { id: "c3", userId: "u3", title: "Zone heal save with 3 HP left", game: "FREE FIRE", views: "7.2K", likes: "1.1K", comments: 45, dur: "0:29", color: "#39FF14", img: null, mine: false },
  { id: "c4", userId: "u4", title: "20-bomb SND, full rush lobby wipe", game: "COD MOBILE", views: "15.6K", likes: "3.4K", comments: 128, dur: "0:51", color: "#FFD700", img: null, mine: false },
  { id: "c5", userId: "me", title: "The rush call that won us finals", game: "BGMI", views: "5.4K", likes: "980", comments: 37, dur: "0:47", color: "#FF007F", img: null, mine: true },
  { id: "c6", userId: "u6", title: "360 noscope across Georgopol", game: "BGMI", views: "22.1K", likes: "4.7K", comments: 210, dur: "0:33", color: "#00F3FF", img: null, mine: false },
  { id: "c7", userId: "u5", title: "1v5 retake on B site, clutch or kick", game: "VALORANT", views: "11.3K", likes: "2.6K", comments: 91, dur: "0:58", color: "#FF007F", img: null, mine: false },
  { id: "c8", userId: "me", title: "Squad wipe with a nade stack", game: "BGMI", views: "3.8K", likes: "720", comments: 24, dur: "0:26", color: "#39FF14", img: null, mine: true },
  { id: "c9", userId: "u2", title: "Marshall-only headshot compilation", game: "VALORANT", views: "8.9K", likes: "1.5K", comments: 58, dur: "1:04", color: "#00F3FF", img: null, mine: false },
];

export const CONVERSATIONS = [
  {
    id: "dm1", userId: "u1", time: "2m", unread: 2,
    messages: [
      { from: "u1", text: "yo, saw your Pochinki clip. clean rotates", t: "8:41 PM" },
      { from: "me", text: "thanks bro. you calling tonight?", t: "8:44 PM" },
      { from: "u1", text: "lobby at 9, don't be late", t: "8:47 PM" },
    ],
  },
  {
    id: "dm2", userId: "u2", time: "1h", unread: 0,
    messages: [
      { from: "u2", text: "that marshall clip was illegal", t: "7:12 PM" },
      { from: "me", text: "haha took 40 games to hit those", t: "7:20 PM" },
    ],
  },
  {
    id: "dm3", userId: "u4", time: "3h", unread: 1,
    messages: [
      { from: "u4", text: "SND tomorrow? need a 4th", t: "5:02 PM" },
    ],
  },
  {
    id: "dm4", userId: "u3", time: "1d", unread: 0,
    messages: [
      { from: "u3", text: "sent you the zone guide", t: "Yesterday" },
      { from: "me", text: "goat. checking it tonight", t: "Yesterday" },
    ],
  },
];
