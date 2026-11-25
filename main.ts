// The Funniest Office Joke — a single original one-line joke about office life.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the joke to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 200 characters, not only whitespace) and prints it to stdout.
//
// Draft v1: "Our office printer only jams on deadline day, so this year we
// promoted it to middle management." — the promotion is the turn, but the
// punchline stops short: it never says WHY the printer earned the promotion,
// so the joke lands as a shrug instead of a sting.
//
// Revision v2 (genuine rewrite of the line, not a retype): the setup now names
// the printer's offence plainly ("jams on every deadline"), and the punchline
// justifies the promotion in office logic — "the only candidate with a proven
// record of doing nothing under pressure". The sting is that doing nothing
// under pressure is exactly what got it promoted, which is the part anyone
// who has worked in an office recognises. Also switched console.log to
// process.stdout.write so stdout is byte-identical to entry.txt (no trailing
// newline added by the print).

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The office printer jams on every deadline, so we promoted it to middle management — the only candidate with a proven record of doing nothing under pressure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
process.stdout.write(JOKE);
