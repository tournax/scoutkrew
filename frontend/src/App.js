import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Cursor from "@/components/Cursor";
import Landing from "@/pages/Landing";
import Auth from "@/pages/Auth";
import AppLayout from "@/pages/app/AppLayout";
import Home from "@/pages/app/Home";
import Explore from "@/pages/app/Explore";
import Chat from "@/pages/app/Chat";
import MatchesPage from "@/pages/app/MatchesPage";
import Profile from "@/pages/app/Profile";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-200 overflow-x-clip">
      <Cursor />
      <div className="crt-overlay" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="chat" element={<Chat />} />
            <Route path="matches" element={<MatchesPage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
