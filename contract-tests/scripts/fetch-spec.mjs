#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const SPEC_REPO = process.env.OPENAPI_SPEC_REPO || 'Nimbleway/Gateway';
const SPEC_PATH = process.env.OPENAPI_SPEC_REPO_PATH || 'specs/openapi.public.yaml';
const SPEC_REF = process.env.OPENAPI_SPEC_REF || 'master';

const outDir = new URL('../spec/', import.meta.url);
const outPath = new URL('openapi.yaml', outDir);

if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
}

if (process.env.OPENAPI_SPEC_URL) {
    console.log(`Fetching spec from ${process.env.OPENAPI_SPEC_URL}`);
    const response = await fetch(process.env.OPENAPI_SPEC_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch spec: ${response.status} ${response.statusText}`);
    }
    writeFileSync(outPath, await response.text());
} else {
    console.log(`Fetching spec from ${SPEC_REPO}:${SPEC_REF}/${SPEC_PATH} via gh CLI`);
    const content = execSync(
        `gh api repos/${SPEC_REPO}/contents/${SPEC_PATH}?ref=${SPEC_REF} --jq '.content' | base64 -d`,
        { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
    );
    writeFileSync(outPath, content);
}

console.log(`Spec written to ${outPath.pathname}`);
