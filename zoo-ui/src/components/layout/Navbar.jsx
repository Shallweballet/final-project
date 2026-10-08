import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", labelKey: "nav.home", emoji: "⭐" },
    { to: "/animals", labelKey: "nav.animals", emoji: "🦓" },
    { to: "/tickets", labelKey: "nav.tickets", emoji: "🎟️" },
    { to: "/volunteers", labelKey: "nav.volunteers", emoji: "🤝" }
  ];

  const switchLang = (lng) => i18n.changeLanguage(lng);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF9F0]/95 backdrop-blur border-b-[3px] border-[#FFD166] px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-lg sm:text-xl font-black text-[#E63946] whitespace-nowrap"
        >
          🎪 Tbilisi <span className="text-[#2A9D8F]">Zoo</span>
        </NavLink>

        <ul className="hidden lg:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-bold transition-colors ${
                    isActive
                      ? "text-[#E63946]"
                      : "text-[#1D3557] hover:text-[#E63946]"
                  }`
                }
              >
                {l.emoji} {t(l.labelKey)}
              </NavLink>
            </li>
          ))}

          <li className="flex items-center gap-1 ml-3">
            <button
              onClick={() => switchLang("ka")}
              className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${
                i18n.language === "ka"
                  ? "bg-[#E63946] text-white"
                  : "text-[#1D3557] hover:bg-[#FFD166]/40"
              }`}
            >
              KA
            </button>
            <button
              onClick={() => switchLang("en")}
              className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${
                i18n.language === "en"
                  ? "bg-[#E63946] text-white"
                  : "text-[#1D3557] hover:bg-[#FFD166]/40"
              }`}
            >
              EN
            </button>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden text-2xl text-[#1D3557] p-1"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="lg:hidden mt-3 pt-3 border-t border-[#FFD166]/50 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-xl font-bold transition-colors ${
                    isActive
                      ? "text-[#E63946] bg-[#FFD166]/30"
                      : "text-[#1D3557] hover:bg-[#FFD166]/20"
                  }`
                }
              >
                {l.emoji} {t(l.labelKey)}
              </NavLink>
            </li>
          ))}

          <li className="flex items-center gap-2 px-3 pt-3 mt-1 border-t border-[#FFD166]/50">
            <button
              onClick={() => switchLang("ka")}
              className={`flex-1 px-3 py-2 rounded-full text-sm font-bold transition-colors ${
                i18n.language === "ka"
                  ? "bg-[#E63946] text-white"
                  : "text-[#1D3557] bg-[#FFF9F0] border-2 border-[#E0E0E0]"
              }`}
            >
              KA
            </button>
            <button
              onClick={() => switchLang("en")}
              className={`flex-1 px-3 py-2 rounded-full text-sm font-bold transition-colors ${
                i18n.language === "en"
                  ? "bg-[#E63946] text-white"
                  : "text-[#1D3557] bg-[#FFF9F0] border-2 border-[#E0E0E0]"
              }`}
            >
              EN
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}