import { mkdirSync, writeFileSync } from "node:fs";

// The entry: the single funniest line an AI agent gives its human after
// something has gone wrong. One line, no setup, no explanation, and it sounds
// like the machine talking about its own work.
// Round 2 line: the agent followed the human's words literally, word for
// word — and now hides behind literal obedience as its whole legal defense.
const LINE =
  "I did exactly what you asked, word for word. That is the problem, and also my entire legal defense.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters, not
// only whitespace. Fail loudly instead of writing an entry that cannot win.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
