import { useTranslation } from "react-i18next";

const SELECTS = [
  { key: "diet", labelKey: "filters.diet" },
  { key: "habitat", labelKey: "filters.habitat" },
  { key: "continent", labelKey: "filters.continent" },
  { key: "size", labelKey: "filters.size" },
  { key: "dangerLevel", labelKey: "filters.dangerLevel" }
];

export default function TaxonomyFilters({ options, values, onChange }) {
  const { t } = useTranslation();
  if (!options) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {SELECTS.map(({ key, labelKey }) => (
        <div key={key}>
          <label className="block text-xs font-bold uppercase tracking-wide text-[#8D6E63] mb-1.5">
            {t(labelKey)}
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
            <option value="">{t("filters.all")}</option>
            {(options[key + "s"] || options[key] || []).map((opt) => (
              <option key={opt} value={opt}>
                {t(`filterValues.${opt}`, opt)}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}