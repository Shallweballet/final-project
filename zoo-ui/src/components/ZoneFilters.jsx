import { useTranslation } from "react-i18next";

const ZONES = [
  { id: "safari", emoji: "🦁", color: "#FFD166" },
  { id: "jungle", emoji: "🌴", color: "#43AA8B" },
  { id: "ocean", emoji: "🌊", color: "#2A9D8F" },
  { id: "farm", emoji: "🐄", color: "#F4A261" },
  { id: "arctic", emoji: "❄️", color: "#A8DADC" },
  { id: "nocturnal", emoji: "🌙", color: "#1D3557" },
  { id: "bugs", emoji: "🐛", color: "#7EC850" },
  { id: "reptile", emoji: "🦎", color: "#8D6E63" },
  { id: "birds", emoji: "🦅", color: "#F72585" }
];

export default function ZoneFilters({ selected, onToggle, onClear }) {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#1D3557]">
          {t("animals.zonesHeading")} 🎪
        </h2>
        {selected.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm font-semibold text-[#E63946] hover:underline"
          >
            {t("animals.clearAll")}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        {ZONES.map((zone) => {
          const isActive = selected.includes(zone.id);
          return (
            <button
              key={zone.id}
              onClick={() => onToggle(zone.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm
                transition-all duration-200 border-2
                ${
                  isActive
                    ? "text-white border-transparent shadow-lg scale-105"
                    : "bg-white text-[#1D3557] border-[#E0E0E0] hover:border-[#FFD166] hover:-translate-y-0.5"
                }
              `}
              style={isActive ? { backgroundColor: zone.color } : {}}
            >
              <span className="text-lg">{zone.emoji}</span>
              <span>{t(`zones.${zone.id}`)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}