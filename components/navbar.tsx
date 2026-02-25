"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatar from "@/public/vercel.svg";

interface NavItems{
    label: string;
    href: string;
    icon: React.ReactNode;
}

interface User{
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    avatar: string;
}

const Icons = {
    Dashboard: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>
    ),
    Settings: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
    )
}

const mainNavItems: NavItems[] = [
    { label: "Dashboard", href: "/dashboard", icon: Icons.Dashboard},
]

const settingsNavItems: NavItems[] = [
    { label: "Settings", href: "/settings", icon: Icons.Settings},
]

const currentUser: User = {
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
    email: "john.doe@example.com",
    avatar: avatar,
}

function NavLink({ item }: { item: NavItems }) {
    const pathname = usePathname();
    const isActive = pathname === item.href;

    return (
        <Link
        href={item.href}
        className={`
            group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
            transition-all duration-200 overflow-hidden
            ${isActive
            ? "text-white"
            : "text-[rgba(232,228,255,0.5)] hover:text-[rgba(232,228,255,0.9)]"
            }
        `}
        >
        {/* Active background */}
        {isActive && (
            <span
            className="absolute inset-0 rounded-xl"
            style={{ background: "linear-gradient(135deg, rgba(13,0,164,0.7), rgba(34,0,124,0.5))", border: "1px solid rgba(13,0,164,0.4)" }}
            />
        )}

        {/* Hover background */}
        {!isActive && (
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: "rgba(13,0,164,0.12)" }}
            />
        )}

        {/* Active left accent */}
        {isActive && (
            <span
            className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
            style={{ background: "linear-gradient(to bottom, #0d00a4, #8070ff)" }}
            />
        )}

        {/* Icon */}
        <span className={`relative flex-shrink-0 transition-colors duration-200 ${isActive ? "text-[#8070ff]" : ""}`}>
            {item.icon}
        </span>

        {/* Label */}
        <span className="relative">{item.label}</span>

        {/* Active dot */}
        {isActive && (
            <span className="relative ml-auto w-1.5 h-1.5 rounded-full bg-[#0d00a4] shadow-[0_0_6px_rgba(13,0,164,0.8)]" />
        )}
        </Link>
    );
}

export default function Navbar() {
    const [accountOpen, setAccountOpen] = useState(false);

    return (
  <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }

        @keyframes logo-pulse {
          0%, 100% { box-shadow: 0 0 16px rgba(13,0,164,0.5); }
          50%       { box-shadow: 0 0 28px rgba(13,0,164,0.8), 0 0 50px rgba(13,0,164,0.25); }
        }
        .logo-pulse { animation: logo-pulse 3s ease-in-out infinite; }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .account-panel { animation: slide-up 0.2s cubic-bezier(0.16,1,0.3,1) forwards; }

        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(13,0,164,0.3); border-radius: 4px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(13,0,164,0.6); }

        .avatar-ring {
          background: linear-gradient(135deg, #0d00a4, #8070ff);
          padding: 2px;
          border-radius: 50%;
        }
      `}</style>

      <aside
        className="font-dm absolute flex flex-col w-64 min-h-screen"
        style={{
          background: "linear-gradient(180deg, #04052e 0%, #02010a 100%)",
          borderRight: "1px solid rgba(13,0,164,0.2)",
        }}
      >
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(13,0,164,0.5), transparent)" }}
        />

        {/* ── Brand ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center py-8 px-6">
          <div
            className="logo-pulse w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
            style={{ background: "linear-gradient(135deg, #0d00a4, #22007c)" }}
          >
            {Icons.Dashboard}
          </div>
          <span className="font-syne font-extrabold text-lg text-[#e8e4ff] tracking-tight leading-none">
            NEXUS
          </span>
          <span className="text-[11px] text-[rgba(232,228,255,0.3)] mt-1 tracking-widest uppercase">
            Platform
          </span>
        </div>

        {/* Divider */}
        <div
          className="mx-4 h-px mb-2"
          style={{ background: "linear-gradient(90deg, transparent, rgba(13,0,164,0.35), transparent)" }}
        />

        {/* ── Scrollable nav area ────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-3 py-2">

          {/* Main section */}
          <div className="mb-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[rgba(232,228,255,0.25)] px-3 mb-2">
              Main
            </p>
            <nav className="flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>
          </div>

          {/* Settings section */}
          <div className="mb-4">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[rgba(232,228,255,0.25)] px-3 mb-2">
              Settings
            </p>
            <nav className="flex flex-col gap-1">
              {settingsNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-4 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(13,0,164,0.35), transparent)" }}
        />

        {/* ── User profile ───────────────────────────────────────── */}
        <div className="p-3 relative">

          {/* Account panel (popup) */}
          {accountOpen && (
            <div
              className="account-panel absolute bottom-full left-3 right-3 mb-2 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(20,1,82,0.97) 0%, rgba(4,5,46,0.98) 100%)",
                border: "1px solid rgba(13,0,164,0.4)",
                boxShadow: "0 -8px 40px rgba(2,1,10,0.6), 0 0 30px rgba(13,0,164,0.15)",
              }}
            >
              {/* Panel header */}
              <div className="px-4 py-3 border-b border-[rgba(13,0,164,0.2)]">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[rgba(232,228,255,0.35)]">
                  Mi cuenta
                </p>
              </div>

              {/* Panel links */}
              <div className="p-2">
                <Link
                  href="/profile"
                  onClick={() => setAccountOpen(false)}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[rgba(232,228,255,0.6)] hover:text-[#e8e4ff] transition-all duration-200"
                  style={{}}
                >
                  <span className="flex-shrink-0 text-[rgba(232,228,255,0.4)] group-hover:text-[#8070ff] transition-colors duration-200">
                    {Icons.Dashboard}
                  </span>
                  <span>Ver mi perfil</span>
                  <span className="ml-auto text-[rgba(232,228,255,0.25)] group-hover:text-[rgba(232,228,255,0.5)] transition-colors">
                    {Icons.Dashboard}
                  </span>
                </Link>
              </div>
            </div>
          )}

          {/* User button */}
          <button
            onClick={() => setAccountOpen((prev) => !prev)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group"
            style={{
              background: accountOpen
                ? "rgba(13,0,164,0.18)"
                : "transparent",
              border: accountOpen
                ? "1px solid rgba(13,0,164,0.35)"
                : "1px solid transparent",
            }}
          >
            {/* Avatar */}
            <div className="avatar-ring flex-shrink-0">
              <img
                src={currentUser.avatar}
                alt={`${currentUser.firstName} ${currentUser.lastName}`}
                className="w-8 h-8 rounded-full object-cover block"
                style={{ background: "#140152" }}
              />
            </div>

            {/* Name & role */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#e8e4ff] truncate leading-tight">
                {currentUser.firstName} {currentUser.lastName}
              </p>
              <p className="text-[11px] text-[rgba(232,228,255,0.4)] truncate mt-0.5">
                {currentUser.role}
              </p>
            </div>

            {/* Chevron */}
            <span className="flex-shrink-0 text-[rgba(232,228,255,0.35)] group-hover:text-[rgba(232,228,255,0.7)] transition-colors duration-200">
              {accountOpen ? Icons.Dashboard : Icons.Dashboard}
            </span>
          </button>
        </div>
      </aside>
    </>
    );
}