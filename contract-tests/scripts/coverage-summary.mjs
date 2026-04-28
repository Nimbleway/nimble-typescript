#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const isMarkdown = process.argv.includes('--markdown');
const summaryPath = new URL('../coverage/coverage-summary.json', import.meta.url);
const data = JSON.parse(readFileSync(summaryPath, 'utf8'));

const SDK_ROOT = '@nimble-way/nimble-js/src/';

const files = Object.entries(data)
  .filter(([key]) => key !== 'total')
  .map(([fullPath, metrics]) => {
    const idx = fullPath.indexOf(SDK_ROOT);
    const short = idx >= 0 ? fullPath.slice(idx + SDK_ROOT.length) : basename(fullPath);
    return { name: short, ...metrics };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const total = data.total;

if (isMarkdown) {
  const pct = (m) => `${m.pct}% (${m.covered}/${m.total})`;
  const bar = (m) => {
    const p = m.total === 0 ? 100 : m.pct;
    if (p === 100) return '\u2705';
    if (p >= 80) return '\ud83d\udfe1';
    if (p >= 50) return '\ud83d\udfe0';
    return '\ud83d\udd34';
  };

  console.log('| File | Statements | Branches | Functions | |');
  console.log('|------|-----------|----------|-----------|---|');
  for (const f of files) {
    console.log(`| \`${f.name}\` | ${pct(f.statements)} | ${pct(f.branches)} | ${pct(f.functions)} | ${bar(f.statements)} |`);
  }
  console.log(`| **TOTAL** | **${pct(total.statements)}** | **${pct(total.branches)}** | **${pct(total.functions)}** | ${bar(total.statements)} |`);
} else {
  const pad = (s, n) => String(s).padStart(n);
  const pct = (m) => `${pad(m.pct, 6)}% (${pad(m.covered, 3)}/${pad(m.total, 3)})`;

  console.log('\n  SDK Code Coverage (v8, source-mapped)');
  console.log('  ' + '\u2500'.repeat(70));
  console.log(
    `  ${'File'.padEnd(30)} ${'Stmts'.padStart(16)} ${'Branches'.padStart(16)} ${'Funcs'.padStart(16)}`,
  );
  console.log('  ' + '\u2500'.repeat(70));

  for (const f of files) {
    console.log(`  ${f.name.padEnd(30)} ${pct(f.statements)} ${pct(f.branches)} ${pct(f.functions)}`);
  }

  console.log('  ' + '\u2500'.repeat(70));
  console.log(
    `  ${'TOTAL'.padEnd(30)} ${pct(total.statements)} ${pct(total.branches)} ${pct(total.functions)}`,
  );
  console.log();
}
