#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const isMarkdown = process.argv.includes('--markdown');

const SPEC_URL = process.env.OPENAPI_SPEC_URL || 'https://sdk.nimbleway.com/docs/openapi.json';
const spec = await fetch(SPEC_URL).then((r) => r.json());

const TESTED_OPERATIONS = new Map([
  ['POST /v1/extract', 'extract'],
  ['POST /v1/extract/async', 'extractAsync'],
  ['POST /v1/extract/batch', 'extractBatch'],
  ['POST /v1/map', 'map'],
  ['POST /v1/search', 'search'],
  ['POST /v1/agents/run', 'agent.run'],
  ['POST /v1/agents/async', 'agent.runAsync'],
  ['POST /v1/agents/batch', 'agent.runBatch'],
  ['GET /v1/agents', 'agent.list'],
  ['GET /v1/agents/{template_name}', 'agent.get'],
  ['POST /v1/agents/generations', 'agent.generate'],
  ['GET /v1/agents/generations/{generation_id}', 'agent.getGeneration'],
  ['POST /v1/agents/{agent_name}/publish', 'agent.publish'],
  ['POST /v1/crawl', 'crawl.run'],
  ['GET /v1/crawl', 'crawl.list'],
  ['GET /v1/crawl/{id}', 'crawl.status'],
  ['DELETE /v1/crawl/{id}', 'crawl.terminate'],
  ['GET /v1/tasks', 'tasks.list'],
  ['GET /v1/tasks/{task_id}', 'tasks.get'],
  ['GET /v1/tasks/{task_id}/results', 'tasks.results'],
  ['GET /v1/batches', 'batches.list'],
  ['GET /v1/batches/{batch_id}', 'batches.get'],
  ['GET /v1/batches/{batch_id}/progress', 'batches.progress'],
]);

const operations = [];
for (const [path, methods] of Object.entries(spec.paths || {})) {
  for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
    if (!methods[method]) continue;
    const op = methods[method];
    const key = `${method.toUpperCase()} ${path}`;
    const sdkMethod = TESTED_OPERATIONS.get(key);
    operations.push({
      method: method.toUpperCase(),
      path,
      summary: op.summary || op.operationId || '',
      deprecated: !!op.deprecated,
      tested: !!sdkMethod,
      sdkMethod: sdkMethod || null,
    });
  }
}

const active = operations.filter((o) => !o.deprecated);
const deprecated = operations.filter((o) => o.deprecated);
const covered = active.filter((o) => o.tested);
const uncovered = active.filter((o) => !o.tested);

if (isMarkdown) {
  const pct = Math.round((covered.length / active.length) * 100);
  console.log(`**${covered.length}/${active.length}** endpoints covered (${pct}%) — ${deprecated.length} deprecated endpoints excluded\n`);

  console.log('| | Method | Path | SDK Method |');
  console.log('|---|--------|------|------------|');
  for (const op of active.sort((a, b) => a.path.localeCompare(b.path))) {
    const icon = op.tested ? '\u2705' : '\u274c';
    const sdk = op.sdkMethod || '—';
    console.log(`| ${icon} | \`${op.method}\` | \`${op.path}\` | \`${sdk}\` |`);
  }

  if (uncovered.length > 0) {
    console.log(`\n> \u26a0\ufe0f **${uncovered.length} untested endpoint(s)** — add contract tests or mark as intentionally excluded`);
  }
} else {
  const pct = Math.round((covered.length / active.length) * 100);
  console.log(`\n  OpenAPI Endpoint Coverage: ${covered.length}/${active.length} (${pct}%)`);
  console.log('  ' + '\u2500'.repeat(70));

  for (const op of active.sort((a, b) => a.path.localeCompare(b.path))) {
    const icon = op.tested ? '\u2713' : '\u2717';
    const sdk = op.sdkMethod ? ` -> ${op.sdkMethod}` : '';
    console.log(`  ${icon} ${op.method.padEnd(6)} ${op.path}${sdk}`);
  }

  if (deprecated.length > 0) {
    console.log(`\n  (${deprecated.length} deprecated endpoints excluded)`);
  }
  console.log();
}
