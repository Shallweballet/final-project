import { useTranslation } from "react-i18next";
import AnimalCard from "./AnimalCard";

export default function AnimalGrid({ animals, loading, error }) {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="text-center py-16 text-[#8D6E63] font-semibold">
        {t("animals.loading")} 🎈
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-[#E63946] font-semibold">
        {t("animals.error")} {error}
      </div>
    );
  }

  if (!animals.length) {
    return (
      <div className="text-center py-16 text-[#8D6E63] font-semibold">
        {t("animals.noResults")} 🦓
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {animals.map((a) => (
        <AnimalCard key={a.id} animal={a} />
      ))}
    </div>
  );
}