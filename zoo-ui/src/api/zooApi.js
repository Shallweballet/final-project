const BASE_URL = "http://localhost:3000/api";

function buildQuery(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    if (Array.isArray(value)) {
      if (value.length) params.set(key, value.join(","));
    } else {
      params.set(key, value);
    }
  });
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

export async function fetchAnimals(filters = {}) {
  const res = await fetch(`${BASE_URL}/animals${buildQuery(filters)}`);
  if (!res.ok) throw new Error("Failed to fetch animals");
  return res.json();
}

export async function fetchRandomAnimal() {
  const res = await fetch(`${BASE_URL}/animals/random`);
  if (!res.ok) throw new Error("Failed to fetch random animal");
  return res.json();
}

export async function fetchFilterOptions() {
  const res = await fetch(`${BASE_URL}/filters`);
  if (!res.ok) throw new Error("Failed to fetch filter options");
  return res.json();
}