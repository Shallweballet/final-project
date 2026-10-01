const ZONES = [
  { id: "safari", label: "Safari", emoji: "🦁", color: "#FFD166" },
  { id: "jungle", label: "Jungle", emoji: "🌴", color: "#43AA8B" },
  { id: "ocean", label: "Ocean", emoji: "🌊", color: "#2A9D8F" },
  { id: "farm", label: "Farm", emoji: "🐄", color: "#F4A261" },
  { id: "arctic", label: "Arctic", emoji: "❄️", color: "#A8DADC" },
  { id: "nocturnal", label: "Night", emoji: "🌙", color: "#1D3557" },
  { id: "bugs", label: "Bugs", emoji: "🐛", color: "#7EC850" },
  { id: "reptile", label: "Reptiles", emoji: "🦎", color: "#8D6E63" },
  { id: "birds", label: "Birds", emoji: "🦅", color: "#F72585" }
];

export default function ZoneFilters({ selected, onToggle, onClear }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#1D3557]">
          Pick a Zone 🎪
        </h2>
        {selected.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm font-semibold text-[#E63946] hover:underline"
          >
            Clear all
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
              <span>{zone.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}