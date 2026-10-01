import AnimalCard from "./AnimalCard";

export default function AnimalGrid({ animals, loading, error }) {
  if (loading) {
    return (
      <div className="text-center py-16 text-[#8D6E63] font-semibold">
        Loading animals… 🎈
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-[#E63946] font-semibold">
        Oops! {error}
      </div>
    );
  }

  if (!animals.length) {
    return (
      <div className="text-center py-16 text-[#8D6E63] font-semibold">
        No animals match those filters. Try something else! 🦓
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