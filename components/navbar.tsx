"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconLayoutDashboard,
  IconSettings,
  IconUsers,
  IconBox,
  IconCategory,
  IconArrowsLeftRight,
  IconBell,
  IconUsersGroup,
  IconCashRegister,
  IconCash,
  IconShoppingCart,
  IconFileText,
  IconUser,
  IconChevronUp,
  IconChevronDown,
  IconUserCog,
  IconMoon,
  IconSun,
  IconBolt,
} from "@tabler/icons-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface User {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  avatar: string;
}

// ─── Nav Data ─────────────────────────────────────────────────────────────────
const mainNavItems: NavItem[] = [
  { label: "Panel",        href: "/dashboard",    icon: <IconLayoutDashboard size={18} /> },
  { label: "Productos",    href: "/products",     icon: <IconBox             size={18} /> },
  { label: "Categorías",   href: "/categories",   icon: <IconCategory        size={18} /> },
  { label: "Movimientos",  href: "/movements",    icon: <IconArrowsLeftRight size={18} /> },
  { label: "Compras",      href: "/buys",         icon: <IconCash            size={18} /> },
  { label: "Ventas",       href: "/sales",        icon: <IconShoppingCart    size={18} /> },
  { label: "Reportes",     href: "/reports",      icon: <IconFileText        size={18} /> },
  { label: "Clientes",     href: "/clients",      icon: <IconUsers           size={18} /> },
  { label: "Proveedores",  href: "/providers",    icon: <IconUsersGroup      size={18} /> },
  { label: "Usuarios",     href: "/users",        icon: <IconUsers           size={18} /> },
];

const settingsNavItems: NavItem[] = [
  { label: "Configuración",   href: "/settings",      icon: <IconSettings     size={18} /> },
  { label: "Notificaciones",  href: "/notifications", icon: <IconBell         size={18} /> },
  { label: "Cajeros",         href: "/cashiers",      icon: <IconCashRegister size={18} /> },
];

// Mock user — reemplaza con tus datos de auth
const currentUser: User = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
  email: "john.doe@example.com",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=John&backgroundColor=b6e3f4",
};

// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ item }: { item: NavItem }) {
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
          : "text-[rgba(232,228,255,0.5)] hover:text-[rgba(232,228,255,0.85)]"
        }
      `}
    >
      {isActive && (
        <span
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(13,0,164,0.65), rgba(34,0,124,0.45))",
            border: "1px solid rgba(13,0,164,0.45)",
          }}
        />
      )}
      {!isActive && (
        <span
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(13,0,164,0.1)" }}
        />
      )}
      {isActive && (
        <span
          className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
          style={{ background: "linear-gradient(to bottom, #0d00a4, #8070ff)" }}
        />
      )}
      <span className={`relative flex-shrink-0 transition-colors duration-200 ${isActive ? "text-[#8070ff]" : ""}`}>
        {item.icon}
      </span>
      <span className="relative">{item.label}</span>
      {isActive && (
        <span className="relative ml-auto w-1.5 h-1.5 rounded-full bg-[#0d00a4] shadow-[0_0_6px_rgba(13,0,164,0.9)]" />
      )}
    </Link>
  );
}

// ─── Small helpers ────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      className="mx-4 h-px flex-shrink-0"
      style={{ background: "linear-gradient(90deg, transparent, rgba(13,0,164,0.3), transparent)" }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[rgba(232,228,255,0.22)] px-3 mb-1.5">
      {children}
    </p>
  );
}

function PopupLink({
  href,
  icon,
  children,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[rgba(232,228,255,0.55)] hover:text-[#e8e4ff] transition-all duration-200 hover:bg-[rgba(13,0,164,0.12)]"
    >
      <span className="flex-shrink-0 text-[rgba(232,228,255,0.35)] group-hover:text-[#8070ff] transition-colors duration-200">
        {icon}
      </span>
      {children}
    </Link>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [isDarkMode, setIsDarkMode]   = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }

        @keyframes logo-pulse {
          0%,100% { box-shadow: 0 0 16px rgba(13,0,164,0.5); }
          50%      { box-shadow: 0 0 28px rgba(13,0,164,0.8), 0 0 50px rgba(13,0,164,0.25); }
        }
        .logo-pulse { animation: logo-pulse 3s ease-in-out infinite; }

        @keyframes slide-up {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .account-panel { animation: slide-up 0.2s cubic-bezier(0.16,1,0.3,1) forwards; }

        .nav-scroll { scrollbar-width: thin; scrollbar-color: rgba(13,0,164,0.3) transparent; }
        .nav-scroll::-webkit-scrollbar { width: 3px; }
        .nav-scroll::-webkit-scrollbar-thumb { background: rgba(13,0,164,0.35); border-radius: 4px; }
        .nav-scroll::-webkit-scrollbar-track { background: transparent; }

        .avatar-ring { background: linear-gradient(135deg, #0d00a4, #8070ff); padding: 2px; border-radius: 9999px; display: inline-flex; }
      `}</style>

      <aside
        className="font-dm fixed left-0 top-0 flex flex-col w-64 h-screen z-40 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #04052e 0%, #02010a 100%)",
          borderRight: "1px solid rgba(13,0,164,0.2)",
        }}
      >
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(13,0,164,0.6), transparent)" }}
        />

        {/* ── Brand ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6 flex-shrink-0">
          <div
            className="logo-pulse w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
            style={{ background: "linear-gradient(135deg, #0d00a4, #22007c)" }}
          >
            <IconBolt size={22} color="white" />
          </div>
          <span className="font-syne font-extrabold text-base text-[#e8e4ff] tracking-tight leading-none">
            INVENTORY
          </span>
          <span className="text-[10px] text-[rgba(232,228,255,0.3)] mt-1 tracking-[0.2em] uppercase">
            System
          </span>
        </div>

        <Divider />

        {/* ── Scrollable nav ─────────────────────────────────────── */}
        <div className="nav-scroll flex-1 overflow-y-auto overflow-x-hidden px-3 py-3">
          <SectionLabel>Main</SectionLabel>
          <nav className="flex flex-col gap-0.5 mb-6">
            {mainNavItems.map((item) => <NavLink key={item.href} item={item} />)}
          </nav>

          <SectionLabel>Settings</SectionLabel>
          <nav className="flex flex-col gap-0.5">
            {settingsNavItems.map((item) => <NavLink key={item.href} item={item} />)}
          </nav>
        </div>

        {/* ── User profile (pinned bottom) ───────────────────────── */}
        <div className="flex-shrink-0">
          <Divider />
          <div className="p-3 relative">

            {/* Account popup */}
            {accountOpen && (
              <div
                className="account-panel absolute bottom-full left-3 right-3 mb-2 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, rgba(20,1,82,0.97), rgba(4,5,46,0.98))",
                  border: "1px solid rgba(13,0,164,0.4)",
                  boxShadow: "0 -8px 40px rgba(2,1,10,0.7), 0 0 30px rgba(13,0,164,0.15)",
                }}
              >
                <div className="px-4 py-3 border-b border-[rgba(13,0,164,0.2)]">
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[rgba(232,228,255,0.3)]">
                    Mi cuenta
                  </p>
                </div>

                <div className="p-2 flex flex-col gap-0.5">
                  <PopupLink href="/profile" icon={<IconUser size={16} />} onClick={() => setAccountOpen(false)}>
                    Ver mi perfil
                  </PopupLink>
                  <PopupLink href="/settings/account" icon={<IconUserCog size={16} />} onClick={() => setAccountOpen(false)}>
                    Configuración
                  </PopupLink>

                  {/* Dark mode toggle */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[rgba(232,228,255,0.55)]">
                    <span className="flex-shrink-0 text-[rgba(232,228,255,0.35)]">
                      {isDarkMode ? <IconMoon size={16} /> : <IconSun size={16} />}
                    </span>
                    <span>Dark mode</span>
                    <button
                      onClick={() => setIsDarkMode((v) => !v)}
                      aria-label="Toggle dark mode"
                      className="ml-auto w-9 h-5 rounded-full flex items-center px-0.5 transition-all duration-300 flex-shrink-0"
                      style={{
                        background: isDarkMode
                          ? "linear-gradient(135deg, #0d00a4, #8070ff)"
                          : "rgba(232,228,255,0.12)",
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full bg-white shadow transition-transform duration-300"
                        style={{ transform: isDarkMode ? "translateX(16px)" : "translateX(0)" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* User button */}
            <button
              onClick={() => setAccountOpen((v) => !v)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group"
              style={{
                background: accountOpen ? "rgba(13,0,164,0.18)"               : "transparent",
                border:     accountOpen ? "1px solid rgba(13,0,164,0.35)" : "1px solid transparent",
              }}
            >
              <div className="avatar-ring flex-shrink-0">
                <img
                  src={currentUser.avatar}
                  alt={`${currentUser.firstName} ${currentUser.lastName}`}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover block"
                  style={{ background: "#140152" }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#e8e4ff] truncate leading-tight">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
                <p className="text-[11px] text-[rgba(232,228,255,0.4)] truncate mt-0.5">
                  {currentUser.role}
                </p>
              </div>

              <span className="flex-shrink-0 text-[rgba(232,228,255,0.35)] group-hover:text-[rgba(232,228,255,0.7)] transition-colors duration-200">
                {accountOpen ? <IconChevronDown size={15} /> : <IconChevronUp size={15} />}
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}