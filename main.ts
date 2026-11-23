// One-star review of gravity: a deadpan complaint, filed in earnest
// against a thing that cannot be fixed. The sting lands in the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Gravity has dropped everything I own at least once and has never once apologised. One star.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
if (review.length < 1 || review.length > 160) {
  throw new Error(`review must be 1-160 chars, got ${review.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
