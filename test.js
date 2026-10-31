import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { createPodcast, getPodcasts, addEpisode, deletePodcast } from "./operations.js";

async function runTests() {
  await connectDB();
  console.log("\n=== TEST SUITE ===\n");

  try {
    // 1. Read all (seeded) podcasts
    console.log("1. Getting all podcasts (should see 5 from seed)...");
    const all = await getPodcasts();
    console.log(`   Found: ${all.length} podcasts`);
    all.forEach((p) => console.log(`   - "${p.title}" (${p.category})`));

    // 2. Create a podcast
    console.log("\n2. Creating a new podcast...");
    const podcast = await createPodcast({
      title: "My Test Show",
      host: "Tester",
      category: "tech",
      year: 2024,
    });
    console.log(`   Created: "${podcast.title}"  id=${podcast._id}`);
    console.log(`   Episodes: ${podcast.episodes.length}`);

    // 3. Filter by category
    console.log("\n3. Getting only tech podcasts...");
    const tech = await getPodcasts({ category: "tech" });
    console.log(`   Found: ${tech.length} tech podcasts`);

    // 4. Add an embedded episode
    console.log("\n4. Adding an episode to the new podcast...");
    const withEpisode = await addEpisode(podcast._id, "Pilot", 30, "Critic");
    console.log(`   Podcast now has ${withEpisode.episodes.length} episode(s)`);
    console.log(`   Episode: "${withEpisode.episodes[0].title}" (${withEpisode.episodes[0].durationMin} min)`);

    // 5. Delete the podcast
    console.log("\n5. Deleting the podcast...");
    const del = await deletePodcast(podcast._id);
    console.log(`   Deleted: ${del.deleted}`);

    // 6. Verify
    console.log("\n6. Verifying delete...");
    const final = await getPodcasts();
    console.log(`   Total podcasts now: ${final.length} (should be 5 again)`);

    console.log("\n✓ All tests passed!\n");
  } catch (error) {
    console.error("\n✗ Test failed:", error.message, "\n");
  }

  await mongoose.disconnect();
}

runTests();
