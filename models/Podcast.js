import mongoose from "mongoose";

// ---- TASK 1: define episodeSchema (embedded subdocument) ----
// Fields:
//   - title       (String, required)
//   - durationMin (Number, required, min 1)
//   - guest       (String)
//
// const episodeSchema = new mongoose.Schema({ ... });

// ---- TASK 1: define podcastSchema ----
// Fields:
//   - title     (String, required, trim)
//   - host      (String, required)
//   - category  (String, enum ["tech", "comedy", "news", "education", "other"], default "other")
//   - year      (Number, min 1900)
//   - episodes  (array of episodeSchema — embedded)
//   - createdAt (Date, default Date.now)
//
// const podcastSchema = new mongoose.Schema({ ... });

// ---- TASK 1: compile and export the model ----
// const Podcast = mongoose.model("Podcast", podcastSchema);
// export default Podcast;

export default null; // TODO: replace with the compiled Podcast model
