import express from "express";
import { animals } from "../data/animals.js";

const router = express.Router();

router.get("/", (req, res) => {
  const {
    zone,
    class: animalClass,
    diet,
    habitat,
    continent,
    activity,
    size,
    dangerLevel,
    search,
    hasSound,
    limit,
    random
  } = req.query;

  let results = [...animals];

  const toArray = (val) =>
    !val ? [] : Array.isArray(val) ? val : val.split(",");

  const zoneFilter = toArray(zone);
  if (zoneFilter.length) {
    results = results.filter((a) =>
      a.zones.some((z) => zoneFilter.includes(z))
    );
  }

  if (animalClass) {
    const classes = toArray(animalClass).map((c) => c.toLowerCase());
    results = results.filter((a) =>
      classes.includes(a.class.toLowerCase())
    );
  }

  if (diet) {
    const diets = toArray(diet).map((d) => d.toLowerCase());
    results = results.filter((a) =>
      diets.includes(a.diet.toLowerCase())
    );
  }

  if (habitat) {
    const habitats = toArray(habitat).map((h) => h.toLowerCase());
    results = results.filter((a) =>
      habitats.includes(a.habitat.toLowerCase())
    );
  }

  if (continent) {
    const continents = toArray(continent).map((c) => c.toLowerCase());
    results = results.filter((a) =>
      continents.includes(a.continent.toLowerCase())
    );
  }

  if (activity) {
    const activities = toArray(activity).map((a) => a.toLowerCase());
    results = results.filter((a) =>
      activities.includes(a.activity.toLowerCase())
    );
  }

  if (size) {
    const sizes = toArray(size).map((s) => s.toLowerCase());
    results = results.filter((a) =>
      sizes.includes(a.size.toLowerCase())
    );
  }

  if (dangerLevel) {
    const levels = toArray(dangerLevel).map((l) => l.toLowerCase());
    results = results.filter((a) =>
      levels.includes(a.dangerLevel.toLowerCase())
    );
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.species.toLowerCase().includes(q)
    );
  }

  if (hasSound === "true") {
    results = results.filter((a) => Boolean(a.soundUrl));
  }

  if (random === "true") {
    const pick = results[Math.floor(Math.random() * results.length)];
    return res.json(pick || null);
  }

  if (limit) {
    const n = parseInt(limit, 10);
    if (!isNaN(n)) results = results.slice(0, n);
  }

  res.json({
    count: results.length,
    results
  });
});

router.get("/random", (req, res) => {
  const pick = animals[Math.floor(Math.random() * animals.length)];
  res.json(pick);
});

router.get("/:id", (req, res) => {
  const animal = animals.find((a) => a.id === req.params.id);
  if (!animal) {
    return res.status(404).json({ error: "Animal not found" });
  }
  res.json(animal);
});

export default router;