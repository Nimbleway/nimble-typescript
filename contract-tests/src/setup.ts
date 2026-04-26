import { spawn, type ChildProcess } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PRISM_PORT = process.env.PRISM_PORT || '4010';
const SPEC_URL =
  process.env.OPENAPI_SPEC_URL || 'https://sdk.nimbleway.com/docs/openapi.json';

function waitForPrism(port: string, timeoutMs = 30_000): Promise<void> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.get(`http://127.0.0.1:${port}/`, (res) => {
        res.resume();
        resolve();
      });
      req.on('error', () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Prism did not start within ${timeoutMs}ms`));
          return;
        }
        setTimeout(check, 500);
      });
      req.end();
    };
    check();
  });
}

let prismProcess: ChildProcess | null = null;

export async function setup() {
  console.log(`Starting Prism mock server on port ${PRISM_PORT}...`);
  console.log(`Spec: ${SPEC_URL}`);

  prismProcess = spawn(
    'npx',
    ['prism', 'mock', SPEC_URL, '--port', PRISM_PORT, '--host', '127.0.0.1', '--errors'],
    {
      stdio: 'ignore',
      detached: true,
      cwd: join(__dirname, '..'),
    },
  );

  prismProcess.unref();

  await waitForPrism(PRISM_PORT);
  console.log(`Prism mock server ready on http://127.0.0.1:${PRISM_PORT}`);
}

export async function teardown() {
  if (prismProcess?.pid) {
    try {
      process.kill(-prismProcess.pid, 'SIGTERM');
    } catch {
      try {
        process.kill(prismProcess.pid, 'SIGTERM');
      } catch {
        // already dead
      }
    }
    console.log('Prism mock server stopped.');
  }
}
