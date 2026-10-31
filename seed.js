import mongoose from "mongoose";
import { connectDB } from "./db.js";
import Podcast from "./models/Podcast.js";

const PODCASTS = [
  {
    title: "Code & Coffee",
    host: "Ava Lin",
    category: "tech",
    year: 2020,
    episodes: [
      { title: "Intro to APIs", durationMin: 42, guest: "Sam" },
      { title: "Databases 101", durationMin: 55, guest: "Nara" },
    ],
  },
  {
    title: "Laugh Lines",
    host: "Rohan Das",
    category: "comedy",
    year: 2021,
    episodes: [{ title: "Open Mic Night", durationMin: 38, guest: "Mia" }],
  },
  {
    title: "Daily Brief",
    host: "Mia Park",
    category: "news",
    year: 2019,
    episodes: [],
  },
  {
    title: "Deep Learning Dive",
    host: "Kabir Rao",
    category: "tech",
    year: 2022,
    episodes: [{ title: "Vectors Explained", durationMin: 61, guest: "Leo" }],
  },
  {
    title: "History Hour",
    host: "Tara Iyer",
    category: "education",
    year: 2018,
    episodes: [],
  },
];

async function seed() {
  await connectDB();
  await Podcast.deleteMany({});
  const created = await Podcast.insertMany(PODCASTS);
  console.log(`✓ Seeded ${created.length} podcasts`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("✗ Seed failed:", error.message);
  process.exit(1);
});
