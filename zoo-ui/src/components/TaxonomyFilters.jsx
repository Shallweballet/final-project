const SELECTS = [
  { key: "diet", label: "Diet" },
  { key: "habitat", label: "Habitat" },
  { key: "continent", label: "Continent" },
  { key: "size", label: "Size" },
  { key: "dangerLevel", label: "Friendly?" }
];

export default function TaxonomyFilters({ options, values, onChange }) {
  if (!options) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {SELECTS.map(({ key, label }) => (
        <div key={key}>
          <label className="block text-xs font-bold uppercase tracking-wide text-[#8D6E63] mb-1.5">
            {label}
          </label>
          <select
            value={values[key] || ""}
            onChange={(e) => onChange(key, e.target.value)}
            className="
              w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#E0E0E0]
              text-[#2B2D42] font-medium
              focus:border-[#E63946] focus:outline-none
              transition-colors
            "
          >
            <option value="">All</option>
            {(options[key + "s"] || options[key] || []).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}