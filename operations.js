import Podcast from "./models/Podcast.js";

// ---- TASK 2: create a podcast ----
// createPodcast(data) — data is { title, host, category, year }.
// Create the podcast with an empty episodes array and return the saved document.
//   e.g. return Podcast.create({ ...data, episodes: [] });
export async function createPodcast(data) {
  // TODO
}

// ---- TASK 2: read podcasts, newest first, with an optional filter ----
// getPodcasts(filter) — return all podcasts matching `filter` (or all if none),
// sorted by createdAt descending.
//   e.g. return Podcast.find(filter).sort({ createdAt: -1 });
export async function getPodcasts(filter = {}) {
  // TODO
}

// ---- TASK 3: add an embedded episode ----
// addEpisode(podcastId, title, durationMin, guest) — find the podcast by id,
// push the episode onto its `episodes` array, save (so validators run), return it.
//   Use Podcast.findById(...), .episodes.push(...), await podcast.save().
export async function addEpisode(podcastId, title, durationMin, guest) {
  // TODO
}

// ---- TASK 3: delete a podcast ----
// deletePodcast(podcastId) — delete by id.
//   Return { deleted: true } on success, or { deleted: false } if none was found.
export async function deletePodcast(podcastId) {
  // TODO
}
