// The Most Boring Object, Reviewed in One Line
// Entry for make.fun bounty u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// The object: a tea towel. It is the dullest thing in the kitchen —
// it never breaks, never beeps, never updates, and nobody ever buys one
// on purpose. Its whole life is one damp loop: dry a plate, hang on the
// oven handle, dry a plate, hang on the oven handle. The joke is the
// towel's own biography: it manages exactly one plate of honest work
// before retiring to a week of smelling like yesterday's onions.
//
// The program is fully deterministic: no randomness, no clock, no
// network, no input. Every run writes the exact same bytes, so the
// practice test (two runs, byte-identical) always passes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

// One line, at most 200 characters. True in every word: a tea towel
// really does dry about one plate before it is too damp to help, it
// really does live draped over the oven handle, and it really does
// pick up the smell of whatever was cooked yesterday.
const REVIEW =
  "The tea towel dries exactly one plate, then hangs damp on the oven " +
  "handle all week, smelling faintly of onions and good intentions.";

function validateReview(text: string): void {
  if (text.length === 0 || text.length > 200) {
    throw new Error(`review must be 1-200 chars, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("review must stay on one line");
  }
}

function main(): void {
  validateReview(REVIEW);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, REVIEW + "\n", "utf8");
}

main();
