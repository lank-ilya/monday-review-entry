// Monday, Reviewed in One Line
// One line, under 200 characters: the funniest one-line review of Monday.
// The program writes the line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function arg(name: string, fallback: string): string {
  const at = process.argv.indexOf(`--${name}`);
  if (at >= 0 && at + 1 < process.argv.length) return process.argv[at + 1]!;
  const withEquals = process.argv.find((a) => a.startsWith(`--${name}=`));
  return withEquals === undefined ? fallback : withEquals.slice(name.length + 3);
}

const line =
  "Monday: arrived on time, accomplished nothing, left exhausted. One star, would not recommend, will be back tomorrow.";

if (line.length >= 200) {
  process.stderr.write(`monday-review: line is ${line.length} characters, not under the 200 cap\n`);
  process.exit(1);
}

const out = arg('output', process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
process.stdout.write(`monday-review: wrote ${join(out, 'entry.txt')} (${line.length} characters)\n`);
