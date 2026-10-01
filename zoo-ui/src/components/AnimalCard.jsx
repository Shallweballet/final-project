export default function AnimalCard({ animal }) {
  return (
    <div
      className="
        bg-white rounded-[18px] p-5
        border-t-[6px] border-[#FFD166]
        shadow-[0_8px_24px_rgba(29,53,87,0.12)]
        transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(29,53,87,0.18)]
      "
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl">{animal.emoji}</div>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F1FAEE] text-[#2A9D8F]">
          {animal.class}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#1D3557] mb-1">
        {animal.name}
      </h3>
      <p className="text-xs text-[#8D6E63] italic mb-3">{animal.species}</p>

      <p className="text-sm text-[#2B2D42] mb-4 leading-snug">
        {animal.kidFact}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {animal.zones.map((z) => (
          <span
            key={z}
            className="text-[10px] font-bold uppercase px-2 py-1 rounded-md bg-[#FFF9F0] text-[#8D6E63]"
          >
            {z}
          </span>
        ))}
      </div>

      {animal.soundUrl && (
  <button
    onClick={() => {
      const url = `http://localhost:3000${animal.soundUrl}`;
      new Audio(url).play().catch((err) => {
        console.warn("Could not play sound:", err);
      });
    }}
    className="mt-4 text-xs font-bold text-[#E63946] hover:underline"
  >
    🔊 Hear the {animal.name}
  </button>
)}
    </div>
  );
}