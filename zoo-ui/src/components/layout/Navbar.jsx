import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", emoji: "⭐" },
  { to: "/animals", label: "Animals", emoji: "🦓" },
  { to: "/tickets", label: "Tickets", emoji: "🎟️" },
  { to: "/volunteers", label: "Volunteer", emoji: "🤝" }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFF9F0]/95 backdrop-blur border-b-[3px] border-[#FFD166] px-6 py-3.5 flex items-center justify-between">
      <NavLink to="/" className="text-xl font-black text-[#E63946]">
        🎪 Tbilisi <span className="text-[#2A9D8F]">Zoo</span>
      </NavLink>

      <ul className="flex gap-6 items-center">
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
              {l.emoji} {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}