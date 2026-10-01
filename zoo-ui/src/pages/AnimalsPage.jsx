import { useState, useMemo, useCallback } from "react";
import { useAnimals } from "../hooks/useAnimals";
import ZoneFilters from "../components/ZoneFilters";
import TaxonomyFilters from "../components/TaxonomyFilters";
import AnimalGrid from "../components/AnimalGrid";

export default function AnimalsPage() {
  const [selectedZones, setSelectedZones] = useState([]);
  const [taxonomy, setTaxonomy] = useState({});
  const [search, setSearch] = useState("");

  const filters = useMemo(
    () => ({
      zone: selectedZones,
      search: search.trim() || undefined,
      ...taxonomy
    }),
    [selectedZones, taxonomy, search]
  );

  const { animals, filterOptions, loading, error } = useAnimals(filters);

  const toggleZone = useCallback((zoneId) => {
    setSelectedZones((prev) =>
      prev.includes(zoneId)
        ? prev.filter((z) => z !== zoneId)
        : [...prev, zoneId]
    );
  }, []);

  const clearZones = () => setSelectedZones([]);

  const handleTaxonomyChange = (key, value) => {
    setTaxonomy((prev) => ({ ...prev, [key]: value || undefined }));
  };

  return (
    <>
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-black text-[#1D3557] mb-3">
          Meet the Animals 🎪
        </h1>
        
      </header>

      {/* aqaa search area */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for an animal… 🦓"
          className="
            w-full px-5 py-3 rounded-full
            bg-white border-2 border-[#E0E0E0]
            text-[#2B2D42] placeholder-[#B0A8A0]
            focus:border-[#E63946] focus:outline-none
            transition-colors
          "
        />
      </div>

      {/* es aris gasapiltri areit*/}
      <ZoneFilters
        selected={selectedZones}
        onToggle={toggleZone}
        onClear={clearZones}
      />

      {/* esaa gasapiltri asarchevebit */}
      <TaxonomyFilters
        options={filterOptions}
        values={taxonomy}
        onChange={handleTaxonomyChange}
      />

      {/* aq gamodian cxovelebi gapiltvris mere */}
      <AnimalGrid animals={animals} loading={loading} error={error} />

    </>
  );
}