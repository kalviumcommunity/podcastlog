# PodcastLog — Mongoose Model & Operations

A tiny podcast log built with **Node.js + Mongoose 7 + MongoDB**. Each podcast stores its episodes
as **embedded subdocuments**. Define the schema and implement four data operations, then prove they
work with the test script.

## What you edit
- `models/Podcast.js` — the schema (Task 1)
- `operations.js` — `createPodcast`, `getPodcasts`, `addEpisode`, `deletePodcast` (Tasks 2–3)

Do **not** change `db.js`, `seed.js`, or `test.js`.

## Setup & run
```bash
npm install
cp .env.example .env          # set MONGODB_URI (Atlas or local MongoDB)
npm run seed                  # inserts 5 starter podcasts
npm run test                  # runs your operations end to end
```

When everything is correct, `npm run test` prints `✓ All tests passed!`.

## Schema shape
- **episodeSchema** (embedded): `title` (required), `durationMin` (required, min 1), `guest`.
- **podcastSchema**: `title` (required, trim), `host` (required),
  `category` (enum: tech / comedy / news / education / other, default `other`),
  `year` (min 1900), `episodes` (array of episodeSchema), `createdAt` (default now).
