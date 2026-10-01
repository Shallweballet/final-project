import { useEffect, useState } from "react";
import {
  fetchAnimals,
  fetchFilterOptions,
  fetchRandomAnimal
} from "../api/zooApi";

export function useAnimals(filters) {
  const [animals, setAnimals] = useState([]);
  const [filterOptions, setFilterOptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load filter options once
  useEffect(() => {
    fetchFilterOptions()
      .then(setFilterOptions)
      .catch((e) => setError(e.message));
  }, []);

  // Refetch animals whenever filters change
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchAnimals(filters)
      .then((data) => {
        if (!cancelled) {
          setAnimals(data.results);
          setError(null);
        }
      })
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [JSON.stringify(filters)]);

  return { animals, filterOptions, loading, error };
}

export function useRandomAnimal() {
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(false);

  const roll = async () => {
    setLoading(true);
    try {
      const a = await fetchRandomAnimal();
      setAnimal(a);
    } finally {
      setLoading(false);
    }
  };

  return { animal, loading, roll };
}