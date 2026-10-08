import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import animalsRouter from "./routes/animals.js";
import { animals } from "./data/animals.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VOLUNTEERS_FILE = path.join(__dirname, "data", "volunteers.json");

app.use(cors());
app.use(express.json());

app.use("/sounds", express.static("sounds"));

app.use("/api/animals", animalsRouter);

app.get("/api/filters", (req, res) => {
  const unique = (key) => [...new Set(animals.map((a) => a[key]))].sort();
  const uniqueFlat = (key) =>
    [...new Set(animals.flatMap((a) => a[key]))].sort();

  res.json({
    zones: uniqueFlat("zones"),
    classes: unique("class"),
    diets: unique("diet"),
    habitats: unique("habitat"),
    continents: unique("continent"),
    activities: unique("activity"),
    sizes: unique("size"),
    dangerLevels: unique("dangerLevel")
  });
});

app.post("/api/volunteers", async (req, res) => {
  try {
    const { name, email, phone, shift, message } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "Name and email are required" });
    }

    let volunteers = [];
    try {
      const raw = await fs.readFile(VOLUNTEERS_FILE, "utf-8");
      volunteers = JSON.parse(raw);
    } catch {
      volunteers = [];
    }

    const entry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      shift: shift || "",
      message: message || ""
    };

    volunteers.push(entry);

    await fs.writeFile(
      VOLUNTEERS_FILE,
      JSON.stringify(volunteers, null, 2),
      "utf-8"
    );

    res.status(201).json({ success: true, entry });
  } catch (err) {
    console.error("Failed to save volunteer:", err);
    res.status(500).json({ error: "Could not save application" });
  }
});

app.get("/api/volunteers", async (req, res) => {
  try {
    const raw = await fs.readFile(VOLUNTEERS_FILE, "utf-8");
    res.json(JSON.parse(raw));
  } catch {
    res.json([]);
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🎪 Zoo API running at http://localhost:${PORT}`);
  });
}

export default app;